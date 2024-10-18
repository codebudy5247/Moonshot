"use server";
import { promises as fs } from "fs";
import * as path from "path";
import * as XLSX from "xlsx";

export async function getAnalytics({
  ageFilter,
  genderFilter,
  startDate,
  endDate,
}: {
  ageFilter?: string;
  genderFilter?: string;
  startDate?: string;
  endDate?: string;
}) {
  try {
    const filePath = path.join(process.cwd(), "analytics-data.xlsx");
    const fileBuffer = await fs.readFile(filePath);
    const workbook = XLSX.read(fileBuffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    let jsonData: IAnalytics[] = XLSX.utils.sheet_to_json(sheet);

    jsonData = jsonData.map((row) => {
      if (row.Day && typeof row.Day === "number") {
        row.Day = excelDateToJSDate(row.Day);
      }
      return row;
    });

    // Filter based on age
    if (ageFilter) {
      jsonData = jsonData.filter((row) => {
        const age = row.Age;
        if (ageFilter === "15-25") {
          return age === "15-25";
        } else if (ageFilter === ">25") {
          return age === ">25";
        }
        return true;
      });
    }

    // Filter based on gender
    if (genderFilter) {
      jsonData = jsonData.filter(
        (row) => row.Gender.toLowerCase() === genderFilter.toLowerCase()
      );
    }

    // Filter based on date range
    if (startDate && endDate) {
      jsonData = jsonData.filter((row) => {
        const rowDate = new Date(row.Day);
        return rowDate >= new Date(startDate) && rowDate <= new Date(endDate);
      });
    }

    return { data: jsonData };
  } catch (error) {
    console.error("Error reading or parsing the file:", error);
    throw new Error("Something went wrong!");
  }
}

function excelDateToJSDate(serial: number): string {
  const date = new Date(Math.round((serial - 25569) * 86400 * 1000));
  return date.toISOString().split("T")[0];
}

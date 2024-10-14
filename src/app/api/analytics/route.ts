import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import * as path from "path";
import * as XLSX from "xlsx";

export async function GET(req: Request) {
  try {
    const filePath = path.join(process.cwd(), "analytics-data.xlsx");
    const fileBuffer = await fs.readFile(filePath);
    const workbook = XLSX.read(fileBuffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    let jsonData = XLSX.utils.sheet_to_json(sheet);

    jsonData = jsonData.map((row: any) => {
      if (row.Day && typeof row.Day === "number") {
        row.Day = excelDateToJSDate(row.Day);
      }
      return row;
    });

    return NextResponse.json({ data: jsonData }, { status: 200 });
  } catch (error) {
    console.error("Error reading or parsing the file:", error);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}

function excelDateToJSDate(serial: number): string {
  const date = new Date(Math.round((serial - 25569) * 86400 * 1000));
  return date.toISOString().split("T")[0]; // 'YYYY-MM-DD' format
}

export const calculateTotalTimeSpent = (data: IAnalytics[]) => {
  const totals = data.reduce(
    (acc, curr) => {
      acc.A += curr.A;
      acc.B += curr.B;
      acc.C += curr.C;
      acc.D += curr.D;
      acc.E += curr.E;
      acc.F += curr.F;
      return acc;
    },
    { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 }
  );

  return [
    { name: "A", total: totals.A },
    { name: "B", total: totals.B },
    { name: "C", total: totals.C },
    { name: "D", total: totals.D },
    { name: "E", total: totals.E },
    { name: "F", total: totals.F },
  ];
};

export const handleError = (error: unknown) => {
  console.error(error);
  throw new Error(typeof error === "string" ? error : JSON.stringify(error));
};

export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString("en-GB");
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return `${formattedDate} ${formattedTime}`;
};


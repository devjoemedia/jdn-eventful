export type Ticket = {
  id: string;
  createdAt: string;
  name: string;
  amount: number;
};

export type GroupedData = {
  title: string;
  data: Ticket[];
};

// Group and sort Data
// 1. Grouped (finished)
// 2. sorting (pending)
export const groupAndSortTickets = (tickets: Ticket[]): GroupedData[] => {
  if (!Array.isArray(tickets)) return [];

  const groupedDataObject: { [key: string]: Ticket[] } = {};

  // Grouping
  for (const item of tickets) {
    const groupName = item.createdAt;

    if (!groupedDataObject[groupName]) {
      groupedDataObject[groupName] = [];
    }
    groupedDataObject[groupName].push(item);
  }

  // Creating result array
  // const result: GroupedData[] = Object.keys(groupedDataObject).map((key) => ({
  //   title: key,
  //   data: groupedDataObject[key],
  // }));
  // Creating result array
  const result: GroupedData[] = Object.entries(groupedDataObject).map(
    ([key, value]) => ({
      title: key,
      data: value,
    })
  );

  return result;
};

export type Ticket = {
  id: number;
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
export const groupAndSortTickets = (data: Ticket[]): GroupedData[] => {
  const groupedDataObject: { [key: string]: Ticket[] } = {};

  // Grouping
  for (const item of data) {
    const groupName = item.createdAt;

    if (!groupedDataObject[groupName]) {
      groupedDataObject[groupName] = [];
    }
    groupedDataObject[groupName].push(item);
  }

  // Sorting and creating result array
  const result: GroupedData[] = Object.keys(groupedDataObject)
    .sort()
    .map((key) => ({ title: key, data: groupedDataObject[key] }));

  return result;
};

import { TableItem } from "./TableItem";

export function Table() {
  return (
    <div className="overflow-x-auto border border-gray-800 rounded-md text-sm text-gray-400">
      {Array.from(Array(10), index => (
        <TableItem key={index} />
      ))}
    </div>
  );
}
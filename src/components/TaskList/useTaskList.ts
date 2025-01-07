import React from "react";

export default function useTaskList(initialItems: Array<string> = []) {
  const [items, setItems] = React.useState<Array<string>>(initialItems);

  return [
    items,
    (label: string) => setItems((previousItems) => previousItems.concat(label)),
    (label: string) =>
      setItems((previousItems) =>
        previousItems.filter((item) => item !== label)
      ),
  ] as const;
}

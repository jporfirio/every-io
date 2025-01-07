import React from "react";

function useTodoList() {
  const [items, setItems] = React.useState<Array<string>>([]);

  return [
    items,
    (label: string) => setItems((previousItems) => previousItems.concat(label)),
    (label: string) =>
      setItems((previousItems) =>
        previousItems.filter((item) => item !== label)
      ),
  ] as const;
}

function ItemsList(props: {
  items: Array<string>;
  onMoveBack?: (item: string) => void;
  onMoveForward?: (item: string) => void;
}) {
  return (
    <ul>
      {props.items.map((item) => (
        <div key={item} style={{ display: "flex", flexDirection: "row" }}>
          <button
            disabled={!props.onMoveBack}
            onClick={() => props.onMoveBack?.(item)}
          >
            ←
          </button>

          <li>{item}</li>

          <button
            disabled={!props.onMoveForward}
            onClick={() => props.onMoveForward?.(item)}
          >
            →
          </button>
        </div>
      ))}
    </ul>
  );
}

export function ChallengeComponent() {
  const [newItem, setNewItem] = React.useState("");

  const [todoItems, addTodo, removeTodo] = useTodoList();
  const [ongoingItems, addOngoing, removeOngoing] = useTodoList();
  const [doneItems, addDone, removeDone] = useTodoList();

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ItemsList
          items={todoItems}
          onMoveForward={(item) => {
            removeTodo(item);
            addOngoing(item);
          }}
        />

        <ItemsList
          items={ongoingItems}
          onMoveBack={(item) => {
            addTodo(item);
            removeOngoing(item);
          }}
          onMoveForward={(item) => {
            removeOngoing(item);
            addDone(item);
          }}
        />

        <ItemsList
          items={doneItems}
          onMoveBack={(item) => {
            addOngoing(item);
            removeDone(item);
          }}
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(newItem);
          setNewItem("");
        }}
      >
        <input value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        <button type="submit">+</button>
      </form>
    </div>
  );
}

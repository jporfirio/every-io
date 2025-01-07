import React from "react";
import styled from "styled-components";

import Button from "./components/Button";
import TaskList, { useTaskList } from "./components/TaskList";

const Container = styled.div`
  padding: 2.5em;
  display: flex;
  flex-direction: column;
  gap: 2.5em;
`;

const LanesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2.5em;
  align-items: stretch;
  min-height: 50vh;
`;

const Form = styled.form`
  display: flex;
  gap: 2em;
`;

const Input = styled.input`
  padding-inline: 1em;
  font-size: 1.5rem;
  padding-block: 0.5em;
`;

export function ChallengeComponent() {
  const [newItem, setNewItem] = React.useState("");

  const [todoItems, addTodo, removeTodo] = useTaskList();
  const [ongoingItems, addOngoing, removeOngoing] = useTaskList();
  const [doneItems, addDone, removeDone] = useTaskList();

  return (
    <Container>
      <LanesContainer>
        <TaskList
          title="To Do"
          items={todoItems}
          onMoveForward={(item) => {
            removeTodo(item);
            addOngoing(item);
          }}
        />

        <TaskList
          title="In Progress"
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

        <TaskList
          title="Done"
          items={doneItems}
          onMoveBack={(item) => {
            addOngoing(item);
            removeDone(item);
          }}
        />
      </LanesContainer>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(newItem);
          setNewItem("");
        }}
      >
        <Input
          placeholder="Add Task"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          required
        />
        <Button>+</Button>
      </Form>
    </Container>
  );
}

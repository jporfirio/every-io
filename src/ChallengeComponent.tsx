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
  const [state, dispatch] = useTaskList();

  return (
    <Container>
      <LanesContainer>
        <TaskList
          title="To Do"
          items={state.todo}
          onMoveForward={(item) => dispatch("TO_DOING", item)}
        />

        <TaskList
          title="In Progress"
          items={state.doing}
          onMoveForward={(item) => dispatch("TO_DONE", item)}
          onMoveBack={(item) => dispatch("FROM_DOING", item)}
        />

        <TaskList
          title="Done"
          items={state.done}
          onMoveBack={(item) => dispatch("FROM_DONE", item)}
        />
      </LanesContainer>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch("NEW_ITEM", newItem);
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

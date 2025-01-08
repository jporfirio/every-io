import React from "react";

type LaneNames = "todo" | "doing" | "done";

const initialState: Record<LaneNames, Array<string>> = {
  todo: [],
  doing: [],
  done: [],
};

const actions = {
  NEW_ITEM: "NEW_ITEM",
  TO_DOING: "TO_DOING",
  TO_DONE: "TO_DONE",
  FROM_DOING: "FROM_DOING",
  FROM_DONE: "FROM_DONE",
} as const;

function reducer(
  state: typeof initialState,
  action: {
    type: keyof typeof actions;
    item: string;
  }
) {
  const moveItem = (from: Array<string>, to: Array<string>) => ({
    from: from.filter((item) => item !== action.item),
    to: to.concat(action.item),
  });

  switch (action.type) {
    case actions.NEW_ITEM:
      return { ...state, todo: state.todo.concat(action.item) };

    case actions.TO_DOING: {
      const { from, to } = moveItem(state.todo, state.doing);
      return { ...state, todo: from, doing: to };
    }

    case actions.TO_DONE: {
      const { from, to } = moveItem(state.doing, state.done);
      return { ...state, doing: from, done: to };
    }

    case actions.FROM_DOING: {
      const { from, to } = moveItem(state.doing, state.todo);
      return { ...state, doing: from, todo: to };
    }

    case actions.FROM_DONE: {
      const { from, to } = moveItem(state.done, state.doing);
      return { ...state, done: from, doing: to };
    }

    default:
      return state;
  }
}

export default function useTaskList() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const dispatchAction = React.useCallback(
    (type: keyof typeof actions, item: string) => dispatch({ type, item }),
    [dispatch]
  );

  return [state, dispatchAction] as const;
}

import styled from "styled-components";
import Button from "../Button";

type Props = {
  title: string;
  items: Array<string>;
  onMoveBack?: (item: string) => void;
  onMoveForward?: (item: string) => void;
};

const Lane = styled.div`
  flex: 1;
  box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.75em;
  padding: 1em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
`;

const Body = styled.ul`
  width: 100%;
  padding-inline-start: 0;
`;

const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 2em 0.75em;

  &:not(:last-child) {
    margin-bottom: 1em;
  }
`;

const Label = styled.span`
  font-size: 1.5rem;
  padding-block: 1em;
  text-wrap: balance;
`;

const NoItems = styled.span`
  opacity: 50%;
  font-style: italic;
`;

export default function TaskList({
  title,
  items,
  onMoveBack,
  onMoveForward,
}: Props) {
  return (
    <Lane>
      <Title>{title}</Title>

      <Body>
        {!items.length && <NoItems>No tasks {title}</NoItems>}

        {items.map((item) => (
          <Item key={item}>
            <Button
              variant="danger"
              padding="compact"
              disabled={!onMoveBack}
              onClick={() => onMoveBack?.(item)}
            >
              ←
            </Button>

            <Label>{item}</Label>

            <Button
              variant="success"
              padding="compact"
              disabled={!onMoveForward}
              onClick={() => onMoveForward?.(item)}
            >
              →
            </Button>
          </Item>
        ))}
      </Body>
    </Lane>
  );
}

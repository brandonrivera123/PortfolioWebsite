import { StyledCard } from "./styles/card.style";

export const Card = (props) => {
  return <StyledCard {...props}>{props.children}</StyledCard>;
};

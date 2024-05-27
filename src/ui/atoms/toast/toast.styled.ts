/*
import styled from "@emotion/styled";
import * as Toast from "@radix-ui/react-toast";

export const Container = styled.div``;

const VIEWPORT_PADDING = 25;

export const ToastViewport = styled(Toast.Viewport)`
  position: "fixed";
  bottom: 0;
  right: 0;
  display: "flex";
  flex-direction: "column";
  padding: VIEWPORT_PADDING;
  gap: 10;
  width: 390;
  max-width: "100vw";
  margin: 0;
  list-style: "none";
  z-index: 2147483647;
  outline: "none";
`;

const hide = keyframes({
  "0%": {opacity: 1},
  "100%": {opacity: 0}
});

const slideIn = keyframes({
  from: {transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))`},
  to: {transform: "translateX(0)"}
});

const swipeOut = keyframes({
  from: {transform: "translateX(var(--radix-toast-swipe-end-x))"},
  to: {transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))`}
});

export const ToastRoot = styled(Toast.Root)`
  background-color: white;
  border-radius: 6px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  padding: 15px;
  display: grid;
  grid-template-areas: "title action" "description action";
  grid-template-columns: auto max-content;
  column-gap: 15px;
  align-items: center;

  &[data-state="open"] {
    animation: ${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  &[data-state="closed"] {
    animation: ${hide} 100ms ease-in;
  }
  &[data-swipe="move"] {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }
  &[data-swipe="cancel"] {
    transform: translateX(0);
    transition: transform 200ms ease-out;
  }
  &[data-swipe="end"] {
    animation: ${swipeOut} 100ms ease-out;
  }
`;

export const ToastTitle = styled(Toast.Title)`
  grid-area: title;
  margin-bottom: 5px;
  font-weight: 500;
  color: slate.slate12;
  font-size: 15px;
`;

export const ToastDescription = styled(Toast.Description)`
  grid-area: description;
  margin: 0;
  color: slate.slate11;
  font-size: 13px;
  line-height: 1.3;
`;

export const ToastAction = styled(Toast.Action)`
  grid-area: action;
`;

const Button = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;

  ${({size}) =>
    size === "small" &&
    `
    font-size: 12px;
    padding: 0 10px;
    line-height: 25px;
    height: 25px;
  `}

  ${({size}) =>
    size === "large" &&
    `
    font-size: 15px;
    padding: 0 15px;
    line-height: 35px;
    height: 35px;
  `}

  ${({variant}) =>
    variant === "violet" &&
    `
    background-color: white;
    color: violet.violet11;
    box-shadow: 0 2px 10px ${blackA.blackA4};
    &:hover { background-color: mauve.mauve3; }
    &:focus { box-shadow: 0 0 0 2px black; }
  `}

  ${({variant}) =>
    variant === "green" &&
    `
    background-color: green.green2;
    color: green.green11;
    box-shadow: inset 0 0 0 1px ${green.green7};
    &:hover { box-shadow: inset 0 0 0 1px ${green.green8}; }
    &:focus { box-shadow: 0 0 0 2px ${green.green8}; }
  `}
`;
*/

/*
import * as React from "react";

const ToastDemo = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef<number>(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Styled.ToastProvider swipeDirection="right">
      <Styled.Button
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway();
            setOpen(true);
          }, 100);
        }}
      >
        Add to calendar
      </Styled.Button>

      <Styled.ToastRoot open={open} onOpenChange={setOpen}>
        <Styled.ToastTitle>Scheduled: Catch up</Styled.ToastTitle>
        <Styled.ToastDescription asChild>
          <time dateTime={eventDateRef.current.toISOString()}>{prettyDate(eventDateRef.current)}</time>
        </Styled.ToastDescription>
        <Styled.ToastAction asChild altText="Goto schedule to undo">
          <Styled.Button size="small" variant="green">
            Undo
          </Styled.Button>
        </Styled.ToastAction>
      </Styled.ToastRoot>
      <Styled.ToastViewport />
    </Styled.ToastProvider>
  );
};

function oneWeekAway() {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {dateStyle: "full", timeStyle: "short"}).format(date);
}

export default ToastDemo;
*/

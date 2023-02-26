import {
  MessageText,
  PromotionsContainer,
} from "../../styles/promotionsStyles";
import { useState, useEffect, useRef } from "react";
import { Box, Slide } from "@mui/material";

const messages = [
  "20% off on your first order!",
  "Summer sale starts now, visit any store.",
  "Please like and subscribe :)",
];

export default function Promotions() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);
  //   if the text is visible outside of the container useRef() will stop it
  const containerRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);

      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <PromotionsContainer ref={containerRef}>
      <Slide
        constinare={containerRef.current}
        direction={show ? "left" : "right"}
        in={show}
        timeout={{ enter: 600, exit: 200 }}
      >
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}

"use client";
import { TypeAnimation } from "react-type-animation";

export default function Animation() {
  return (
    <>
      <TypeAnimation
        sequence={[
          "I am a Software Engineer",
          500,
          "I use Arch and nvim btw",
          500,
          "I am learning PyTouch + ML + Org Dev",
          500,
          "A writer with a pen for anything under the Sun",
          500,
        ]}
        speed={20}
        style={{ fontSize: "1.5rem" }}
        repeat={Infinity}
        deletionSpeed={60}
      />
    </>
  );
}

import React from "react";
import Typewriter from 'typewriter-effect';

export default function TypingEffect() {
  return (
    <div>
      
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(`Hi, My name is Nathan Walker.`)
            .callFunction(() => {
              console.log('Name is typed out!');
            })
            .start();
        }}
      />
    </div>
  );
}
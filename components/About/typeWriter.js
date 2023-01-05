import React from "react";
import Typewriter from 'typewriter-effect';
import styles from "/components/About/About.module.scss";
export default function TypingEffect() {
  return (
    <div>
      
      <Typewriter 
        onInit={(typewriter) => {
          typewriter.typeString(`Hi, My name is Nathan Walker. I am a Frontend Web Developer.`)
            .callFunction(() => {
              console.log('Name is typed out!');
            })
            .start();
        }}
      />
    </div>
  );
}
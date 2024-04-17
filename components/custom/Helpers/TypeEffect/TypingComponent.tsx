"use client";
import { useEffect } from 'react';
import TypingEffectScript from "./TypingEffectScript";

interface TypingComponentProps {
  classString?: any;
  typingContentElementId?: any;
  writingSpeed?: number;
  text1: string[];
  text2: string[];
  eraseSpeed?: number;
  changeSpeed?: number;
  waitEnd?: number;
  styles?: any;
  step?: any;
  triggerStepUpdate?: any;
}
function TypingComponent(props: TypingComponentProps) {
  useEffect(() => TypingEffectScript({
    typingContentElementId: props.typingContentElementId,
    text1: props.text1,
    text2: props.text2,
    writingSpeed: props.writingSpeed,
    eraseSpeed: props.eraseSpeed,
    changeSpeed: props.changeSpeed,
    waitEnd: props.waitEnd,
    step: props.step,
    triggerStepUpdate: props.triggerStepUpdate
   }), []);

  return (
    <>
      <div
        className={props.classString}
        id={props.typingContentElementId}
        style={props.styles}
      >
      </div>
    </>
  );
}

export default TypingComponent;
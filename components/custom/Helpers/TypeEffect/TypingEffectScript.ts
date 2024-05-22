
function TypingEffectScript(props: { step: any; triggerStepUpdate: any; text1?: any; text2?: any; typingContentElementId?: any; completion?: any; writingSpeed?: any; eraseSpeed?: any; changeSpeed?: any; waitEnd?: any; }) {
  let {
    wordNumberForIntro,
    wordNumberForText,
    intros,
    descriptions,
    currentPhraseSelection,
    introText,
    descriptionsText,
    slicedWord,
    index,
    subtractIndex,
    typingContentElementId,
    step,
    completion,
    writingSpeed,
    eraseSpeed,
    changeSpeed,
    waitCount,
    waitEnd,
  } = returnVariables(props);
  (function typeDescriptions() {
    //timeOutNumber
    //vitesse d&apos;écriture
    let timeOutNumber = writingSpeed;

    if (
      intros !== undefined && descriptions !== undefined && wordNumberForText === descriptions.length &&
      wordNumberForIntro === intros.length
    ) {
      wordNumberForIntro = 0;
      wordNumberForText = 0;

      return;
    }

    if (intros !== undefined && wordNumberForIntro !== intros.length) {
      currentPhraseSelection = intros[wordNumberForIntro];
      slicedWord = currentPhraseSelection.slice(0, ++index);

      if (checkElementNotMounted(typingContentElementId)) {
        return;
      }
      if (typingContentElementId) {
        const typingContentElement = document.getElementById(typingContentElementId);
        if (typingContentElement !== null) {
          typingContentElement.innerHTML = introText + slicedWord;
        }
      }

      if (slicedWord.length === currentPhraseSelection.length) {
        wordNumberForIntro++;
        index = 0;
        //timeOutNumber
        //changeSpeed change between words or sentences
        timeOutNumber = changeSpeed;
        introText += slicedWord;
        if (checkElementNotMounted(typingContentElementId)) {
          return;
        }
        if (typingContentElementId) {
          const typingContentElement = document.getElementById(typingContentElementId);
          if (typingContentElement !== null) {
            typingContentElement.innerHTML = introText;
          }
        }
      }
    } else if (intros !== undefined && wordNumberForIntro === intros.length) {

      if (waitCount === 0) {
        wait(waitEnd);
      }
      waitCount++;

      //timeOutNumber
      //eraseSpeed letter by letter

      timeOutNumber = eraseSpeed;
      subtractIndex = introText.length;

      introText = introText.slice(0, --subtractIndex);
      if (checkElementNotMounted(typingContentElementId)) {
        return;
      }
      const typingContentElement = document.getElementById(typingContentElementId);
      if (typingContentElement !== null) {
        typingContentElement.innerHTML = introText;
      }

      if (introText.length === 0) {
        timeOutNumber = writingSpeed;
        currentPhraseSelection = descriptions[wordNumberForText];
        slicedWord = currentPhraseSelection.slice(0, ++index);

        if (checkElementNotMounted(typingContentElementId)) {
          return;
        }
        if (checkElementNotMounted(typingContentElementId)) {
          return;
        }
        const typingContentElement = document.getElementById(typingContentElementId);
        if (typingContentElement !== null) {
          typingContentElement.innerHTML = descriptionsText;
        }
      }
    }
    if (slicedWord.length === currentPhraseSelection.length && props.step) {
      step = (Number(step) + 1).toString();
      SetStep(step, props.triggerStepUpdate)
      if (completion === "on") {
        const element = document.getElementById(typingContentElementId);
        if (element !== null) {
          element.classList.add("completed");
        }
      }
    }
    setTimeout(typeDescriptions, timeOutNumber);
  })();
}

function checkElementNotMounted(elementId: string) {
  if (document.getElementById(elementId) === null) {
    return true;
  }
  return false;
}


function SetStep(step: string, triggerStepUpdate: (arg0: any) => void) {
  triggerStepUpdate(step)
}

function wait(ms: number) {
  let d = new Date();
  let d2: Date = new Date();
  do { d2 = new Date(); }
  while ((d2.getTime() - d.getTime()) < ms);
}

function returnVariables(props: { step: any; triggerStepUpdate?: any; text1?: any; text2?: any; typingContentElementId?: any; completion?: any; writingSpeed?: any; eraseSpeed?: any; changeSpeed?: any; waitEnd?: any; }) {
  let intros = props.text1;
  let descriptions = "";
  if (props.text2 !== undefined) {
    descriptions = props.text2;
  }
  let wordNumberForIntro = 0;
  let wordNumberForText = 0;
  let index = 0;
  let subtractIndex = 0;
  let currentPhraseSelection = "";
  let introText = "";
  let descriptionsText = "";
  let slicedWord = "";
  let typingContentElementId = props.typingContentElementId;

  let completion = "off";
  let waitCount = 0;
  let step = "";
  if (props.completion !== undefined) {
    completion = props.completion;
  }
  if (props.step !== undefined) {
    step = props.step;
  }

  let writingSpeed = 100;
  if (props.writingSpeed != undefined) {
    writingSpeed = props.writingSpeed;
  }
  let eraseSpeed = 100;
  if (props.eraseSpeed != undefined) {
    eraseSpeed = props.eraseSpeed;
  }
  let changeSpeed = 50;
  if (props.changeSpeed != undefined) {
    changeSpeed = props.changeSpeed;
  }
  let waitEnd = 0;
  if (props.waitEnd != undefined) {
    waitEnd = props.waitEnd;
  }
  return {
    wordNumberForIntro,
    wordNumberForText,
    intros,
    descriptions,
    currentPhraseSelection,
    introText,
    descriptionsText,
    slicedWord,
    index,
    subtractIndex,
    typingContentElementId,
    step,
    completion,
    eraseSpeed,
    writingSpeed,
    changeSpeed,
    waitCount,
    waitEnd,
  };
}

export default TypingEffectScript;
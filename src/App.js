import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

// A piece of state or state variable is created to keep track of the current step. The handlePrevious and handleNext functions are used to navigate between steps.
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Brandon" });

  function handlePrevious() {
    if (step - 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);

    // BAD PRACTICE FOR MUTATING STATE WITH COMPLEX DATA TYPES
    // test.name = "Fred";

    // Always treat state as immutable
    // setTest({ name: "Fred" });
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>1</div>
            <div className={step >= 3 ? "active" : ""}>1</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
              // onMouseEnter={() => alert("TEST")}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

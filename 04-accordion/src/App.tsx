import React, { useState } from "react";
import data from "./data";
import SingleQuestion, { QuestionProps } from "./Question";

const App: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionProps[]>(data);

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default App;

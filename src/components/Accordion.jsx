import { useState } from "react";

export default function Accordion({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 space-y-3">
      {data.map((item, index) => (
        <div key={index} className="border rounded-xl shadow">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left p-4 font-semibold bg-gray-100 hover:bg-gray-200 flex justify-between"
          >
            {item.question}
            <span>{openIndex === index ? "-" : "+"}</span>
          </button>

          {openIndex === index && (
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index ? "p-4" : "max-h-0"
              }`}
            >
              <div
                className="bg-white text-gray-700"
                style={{ whiteSpace: "pre-line" }}
              >
                {item.answer}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

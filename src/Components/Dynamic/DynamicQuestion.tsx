import React from "react";

interface DynamicQuestionProps {
    title: string;
    type: string;
    options: string[];
    onChange: (selectedOptions: string[]) => void;
}
export const DynamicQuestion = ({
    title,
    type,
    options,
}: DynamicQuestionProps) => {
    return (
        <div className="questions flex flex-column">
            <h1 className="question-title">{title}</h1>
            {options.map((option, index) => (
                <div className="options flex" key={index}>
                    <input type={type} value={option} />
                    <p>{option}</p>
                </div>
            ))}
        </div>
    );
};

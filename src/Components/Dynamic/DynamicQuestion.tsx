import React, { useEffect, useState } from "react";

interface DynamicQuestionProps {
    title: string;
    type: string;
    options: string[];
    idQuestion: string;
    onChange: (selectedOption: string | string[]) => void;
}
export const DynamicQuestion = ({
    title,
    type,
    options,
    onChange,
}: DynamicQuestionProps) => {
    const [selectedRadio, setSelectedRadio] = useState("");
    const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

    useEffect(() => {
        if (type === "radio") {
            onChange(selectedRadio);
        } else if (type === "checkbox") {
            onChange(selectedCheckboxes);
        }
    }, [selectedRadio, selectedCheckboxes]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (type === "radio") {
            setSelectedRadio(event.target.value);
        } else if (type === "checkbox") {
            if (event.target.checked) {
                setSelectedCheckboxes((prev) => [...prev, event.target.value]);
            } else {
                setSelectedCheckboxes((prev) =>
                    prev.filter((option) => option !== event.target.value)
                );
            }
        }
    };

    return (
        <div className="questions ">
            <h1 className="question-title">{title}</h1>
            {options.map((option, index) => (
                <div className="options flex" key={index}>
                    <input
                        type={type}
                        value={option}
                        name={title}
                        onChange={handleChange}
                        checked={
                            type === "radio"
                                ? selectedRadio === option
                                : selectedCheckboxes.includes(option)
                        }
                    />
                    <p className="option">{option}</p>
                </div>
            ))}
        </div>
    );
};

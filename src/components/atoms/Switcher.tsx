import * as React from "react";

interface SwitcherProps {
    side: "left" | "right";
    options: string[];
    selected: string;
    onChange(value: string);
}

export default ({
    side,
    options = [],
    selected = "all",
    onChange
}: SwitcherProps) => (
    <div className="uk-width-auto@m">
        <ul className={`uk-tab-${side}`} uk-tab="animation: uk-animation-fade">
            {options.map(label => (
                <li key={label} className={label === selected ? "uk-active" : undefined}>
                    <a
                        className={`uk-text-${side === "right" ? "left" : "right"}`}
                        onClick={() => onChange(label)}
                    >
                        {label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

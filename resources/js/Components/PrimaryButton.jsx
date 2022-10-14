import React from "react";
import propTypes from "prop-types";

PrimaryButton.propTypes = {
    type: propTypes.oneOf(["button", "submit", "reset"]),
    className: propTypes.string,
    variant: propTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    processing: propTypes.bool,
    children: propTypes.node,
};
export default function PrimaryButton({
    type = "submit",
    className = "",
    variant = "primary",
    processing,
    children,
}) {
    return (
        <button
            type={type}
            className={`rounded-2xl py-[13px] text-center w-full ${
                processing && "opacity-30"
            } btn-${variant} ${className} `}
            disabled={processing}
        >
            {children}
        </button>
    );
}

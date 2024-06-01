/* eslint-disable react/prop-types */
// ColorButton.js
function ColorButton({ color, onClick }) {
    return (
        <button
        onClick={onClick}
        className="outline-none px-4 py-1 rounded-lg text-white shadow-lg"
        style={{ backgroundColor: color }}
        >
        {color}
        </button>
    );
}

export default ColorButton;

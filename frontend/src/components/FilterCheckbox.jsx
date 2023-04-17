import React from 'react';

const FilterCheckbox = ({ label, checked, onChange }) => {
    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                className="mr-2 cursor-pointer"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                style={{ appearance: 'none', width: '16px', height: '16px', background: checked ? '#8A6E3D' : 'transparent', border: '1px solid #8A6E3D', borderRadius: '2px', outline: 'none' }}
            />
            <label className="text-sm text-dark-brown">{label}</label>
        </div>
    );
};

export default FilterCheckbox;

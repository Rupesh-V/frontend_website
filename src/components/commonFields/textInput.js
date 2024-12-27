import React from 'react';

const TextInput = ({
  name = 'name', // Default name if not provided
  type = 'text', // Default input type
  className = '', // CSS classes
  value = '', // Default input value
  label = 'Name', // Default label
  required = true, // Is the input required?
  disabled = false, // Is the input disabled?
  mandatory = 'yes', // Is the field mandatory?
  note = '', // Optional note below input
}) => {
  return (
    <div className="input-group">
      {name && type ? (
        <div>
          {/* Input field with conditions */}
          {disabled ? (
            <input
              type={type}
              className={`${className} mb-2`}
              id={name}
              name={name}
              autoComplete="off"
              value={value}
              disabled
              required={required}
            />
          ) : (
            <input
              type={type}
              className={`${className} mb-2`}
              id={name}
              name={name}
              autoComplete="off"
              value={value}
              required={required}
            />
          )}

          {/* Label */}
          <label>
            {label}{' '}
            {mandatory === 'yes' && <span className="text-danger">*</span>}
          </label>

          {/* Note */}
          {note && <span className="text-danger">{note}</span>}
        </div>
      ) : (
        // Fallback structure if no name/type provided
        <div>
          <input
            type="text"
            className="name mb-2"
            id="name"
            name="name"
            autoComplete="off"
            value=""
            required
          />
          <label>
            Name <span className="text-danger">*</span>
          </label>
        </div>
      )}
    </div>
  );
};

export default TextInput;

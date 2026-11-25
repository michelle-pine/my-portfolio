import { useEffect, useId, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './MultiSelect.scss';

export default function MultiSelect({ label, placeholder, allSelectedLabel, options, selected, onChange }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const toggle = (value) =>
    onChange(selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value]);

  const allSelected = selected.length === options.length;
  let summary = placeholder;
  if (allSelected) {
    summary = allSelectedLabel;
  } else if (selected.length) {
    summary = options
      .filter((o) => selected.includes(o.value))
      .map((o) => o.label)
      .join(', ');
  }

  return (
    <div className="multi-select" ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        className={`multi-select-heading${selected.length ? ' has-value' : ''}`}
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="sr-only">{label}: </span>
        <span className="multi-select-value">{summary}</span>
        <i className={`fa fa-chevron-${open ? 'up' : 'down'}`} aria-hidden="true"></i>
      </button>
      <fieldset id={listId} className="multi-select-content" hidden={!open}>
        <legend className="sr-only">{label}</legend>
        <label className="multi-select-item">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={() => onChange(allSelected ? [] : options.map((o) => o.value))}
          />
          <span>select all</span>
        </label>
        {options.map((option) => (
          <label key={option.value} className="multi-select-item">
            <input
              type="checkbox"
              checked={selected.includes(option.value)}
              onChange={() => toggle(option.value)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </fieldset>
    </div>
  );
}

MultiSelect.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  allSelectedLabel: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.any })
  ).isRequired,
  selected: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

import { useEffect, useId, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './MultiSelect.scss';

/**
 * Disclosure-style multi-select: a button that shows/hides a group of real
 * checkboxes.
 *
 * Keyboard:
 * - Enter/Space on the button toggles the panel; ArrowDown/ArrowUp opens it
 *   and focuses the first/last option.
 * - In the panel, ArrowDown/ArrowUp move between options (wrapping),
 *   Home/End jump to the first/last, Space or Enter toggles, Tab also works.
 * - Escape closes and returns focus to the button.
 * The panel also closes when focus or a click leaves the component.
 */
export default function MultiSelect({
  label,
  placeholder,
  allSelectedLabel,
  options,
  selected,
  onChange,
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const pointerInside = useRef(false);
  const pendingFocus = useRef(null); // 'first' | 'last' once the panel renders
  const panelId = useId();

  const optionInputs = () => [...(rootRef.current?.querySelectorAll('.multi-select-input') ?? [])];

  // After opening with an arrow key, move focus into the (now visible) panel.
  useEffect(() => {
    if (!open || !pendingFocus.current) return;
    const inputs = optionInputs();
    (pendingFocus.current === 'last' ? inputs[inputs.length - 1] : inputs[0])?.focus();
    pendingFocus.current = null;
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  const onKeyDown = (e) => {
    if (e.key === 'Escape' && open) {
      e.stopPropagation();
      setOpen(false);
      buttonRef.current?.focus();
      return;
    }

    if (e.target === buttonRef.current) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        pendingFocus.current = e.key === 'ArrowDown' ? 'first' : 'last';
        if (open) {
          const inputs = optionInputs();
          (e.key === 'ArrowUp' ? inputs[inputs.length - 1] : inputs[0])?.focus();
          pendingFocus.current = null;
        } else {
          setOpen(true);
        }
      }
      return;
    }

    const inputs = optionInputs();
    const index = inputs.indexOf(e.target);
    if (index === -1) return;
    let next = null;
    if (e.key === 'ArrowDown') next = (index + 1) % inputs.length;
    else if (e.key === 'ArrowUp') next = (index - 1 + inputs.length) % inputs.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = inputs.length - 1;
    else if (e.key === 'Enter') {
      // Checkboxes only toggle on Space natively; Enter is expected in menus.
      e.preventDefault();
      e.target.click();
      return;
    }
    if (next !== null) {
      e.preventDefault(); // don't scroll the page
      inputs[next].focus();
    }
  };

  // Close when keyboard focus moves out of the component (e.g. Tab past the
  // last option), so the panel never lingers over the page.
  // Clicks inside are ignored: Safari doesn't focus buttons/checkboxes on
  // click, so their blur has no relatedTarget even though we stayed inside.
  const onBlur = (e) => {
    if (pointerInside.current) return;
    if (open && !rootRef.current?.contains(e.relatedTarget)) setOpen(false);
  };
  const onPointerDownInside = () => {
    pointerInside.current = true;
    const reset = () => {
      pointerInside.current = false;
      window.removeEventListener('pointerup', reset);
    };
    window.addEventListener('pointerup', reset);
  };

  const toggle = (value) =>
    onChange(
      selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value]
    );

  const allSelected = selected.length === options.length;
  const selectedLabels = options.filter((o) => selected.includes(o.value)).map((o) => o.label);
  let summary = placeholder;
  if (allSelected) summary = allSelectedLabel;
  else if (selectedLabels.length) summary = selectedLabels.join(', ');

  // What a screen reader hears for the button, e.g. "Filter by year: 2025, 2023"
  // or "Filter by year: any" — never the visual placeholder.
  const spokenValue = selected.length === 0 || allSelected ? 'any' : selectedLabels.join(', ');

  return (
    <div
      className="multi-select"
      ref={rootRef}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onPointerDown={onPointerDownInside}
    >
      <button
        ref={buttonRef}
        type="button"
        className={`multi-select-heading${selected.length ? ' has-value' : ''}`}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${label}: ${spokenValue}`}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="multi-select-value" aria-hidden="true">
          {summary}
        </span>
        <i className={`fa fa-chevron-${open ? 'up' : 'down'}`} aria-hidden="true"></i>
      </button>
      <fieldset id={panelId} className="multi-select-content" hidden={!open}>
        <legend className="sr-only">{label}</legend>
        <label className="multi-select-item">
          <input
            type="checkbox"
            className="multi-select-input"
            checked={allSelected}
            onChange={() => onChange(allSelected ? [] : options.map((o) => o.value))}
          />
          <span className="multi-select-box" aria-hidden="true"></span>
          <span>select all</span>
        </label>
        {options.map((option) => (
          <label key={option.value} className="multi-select-item">
            <input
              type="checkbox"
              className="multi-select-input"
              checked={selected.includes(option.value)}
              onChange={() => toggle(option.value)}
            />
            <span className="multi-select-box" aria-hidden="true"></span>
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

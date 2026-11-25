import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MultiSelect from './MultiSelect';

const options = [
  { label: '2025', value: 2025 },
  { label: '2023', value: 2023 },
];

function Harness() {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <MultiSelect
        label="Filter by year"
        placeholder="Year..."
        allSelectedLabel="All Years"
        options={options}
        selected={selected}
        onChange={setSelected}
      />
      <button type="button">after</button>
    </>
  );
}

describe('MultiSelect', () => {
  it('announces the current value, not the placeholder', async () => {
    const user = userEvent.setup();
    render(<Harness />);
    const button = screen.getByRole('button', { name: 'Filter by year: any' });
    await user.click(button);
    await user.click(screen.getByRole('checkbox', { name: '2023' }));
    expect(button).toHaveAccessibleName('Filter by year: 2023');
  });

  it('is fully operable with the keyboard', async () => {
    const user = userEvent.setup();
    render(<Harness />);
    const button = screen.getByRole('button', { name: /filter by year/i });

    await user.tab();
    expect(button).toHaveFocus();
    expect(button).toHaveAttribute('aria-expanded', 'false');

    await user.keyboard('{Enter}');
    expect(button).toHaveAttribute('aria-expanded', 'true');
    const group = screen.getByRole('group', { name: 'Filter by year' });
    expect(group).toBeVisible();

    await user.tab(); // "select all"
    await user.tab(); // 2025
    expect(screen.getByRole('checkbox', { name: '2025' })).toHaveFocus();
    await user.keyboard(' ');
    expect(screen.getByRole('checkbox', { name: '2025' })).toBeChecked();

    await user.keyboard('{Escape}');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveFocus();
  });

  it('supports arrow keys, Home/End, and Enter', async () => {
    const user = userEvent.setup();
    render(<Harness />);
    const button = screen.getByRole('button', { name: /filter by year/i });
    const selectAll = () => screen.getByRole('checkbox', { name: 'select all' });
    const y2025 = () => screen.getByRole('checkbox', { name: '2025' });
    const y2023 = () => screen.getByRole('checkbox', { name: '2023' });

    await user.tab();
    await user.keyboard('{ArrowDown}'); // opens and focuses the first option
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(selectAll()).toHaveFocus();

    await user.keyboard('{ArrowDown}');
    expect(y2025()).toHaveFocus();
    await user.keyboard('{Enter}');
    expect(y2025()).toBeChecked();

    await user.keyboard('{ArrowDown}{ArrowDown}'); // wraps past the last option
    expect(selectAll()).toHaveFocus();
    await user.keyboard('{ArrowUp}');
    expect(y2023()).toHaveFocus();
    await user.keyboard('{Home}');
    expect(selectAll()).toHaveFocus();
    await user.keyboard('{End}');
    expect(y2023()).toHaveFocus();

    await user.keyboard('{Escape}');
    expect(button).toHaveFocus();
    await user.keyboard('{ArrowUp}'); // opens and focuses the last option
    expect(y2023()).toHaveFocus();
  });

  it('closes when focus tabs out of the panel', async () => {
    const user = userEvent.setup();
    render(<Harness />);
    const button = screen.getByRole('button', { name: /filter by year/i });
    await user.click(button);
    await user.tab(); // select all
    await user.tab(); // 2025
    await user.tab(); // 2023
    await user.tab(); // leaves the component
    expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });
});

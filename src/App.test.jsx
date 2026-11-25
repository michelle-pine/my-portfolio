import { render, screen, within, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import projects from './data/projects';
import { RESUME_URL } from './data/links';

beforeAll(() => {
  window.scrollTo = () => {};
});

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );
}

describe('App', () => {
  it('renders every project card on the home page', () => {
    renderAt('/');
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
    for (const project of projects) {
      expect(screen.getByRole('heading', { name: project.title, level: 3 })).toBeInTheDocument();
    }
  });

  it('filters projects by search text', () => {
    renderAt('/');
    fireEvent.change(screen.getByLabelText('Search projects'), {
      target: { value: 'reactflow' },
    });
    const cards = screen.getAllByRole('heading', { level: 3 });
    expect(cards.map((c) => c.textContent)).toEqual(['Data Model Visualizer']);
  });

  it('filters projects by type', () => {
    renderAt('/');
    fireEvent.click(screen.getByRole('button', { name: /filter by project type/i }));
    fireEvent.click(screen.getByRole('checkbox', { name: 'professional' }));
    const titles = screen.getAllByRole('heading', { level: 3 }).map((c) => c.textContent);
    const expected = projects.filter((p) => p.type.includes('professional')).map((p) => p.title);
    expect(titles).toEqual(expected);
  });

  it('links to the resume from the navbar', () => {
    renderAt('/');
    expect(screen.getByRole('link', { name: /resume/i })).toHaveAttribute('href', RESUME_URL);
  });

  it('shows current experience on the about page', () => {
    renderAt('/about');
    expect(
      screen.getByRole('heading', { name: /Frontend Technical Lead II – Design System/ })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /download my resume/i })).toHaveAttribute("href", RESUME_URL);
  });

  it.each(projects.filter((p) => !p.redirect).map((p) => [p.title, p.url]))(
    'renders the %s project page',
    (_title, url) => {
      renderAt(`/projects/${url}`);
      expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument();
      expect(screen.queryByText(/This page is not found/)).not.toBeInTheDocument();
    }
  );

  it('renders case study details', () => {
    renderAt('/projects/design-system-migration');
    const meta = screen.getByText('Organization').closest('dl');
    expect(within(meta).getByText('HubSpot')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Highlights' })).toBeInTheDocument();
  });

  it('shows the not-found page for unknown routes', () => {
    renderAt('/nope');
    expect(screen.getByText(/This page is not found/)).toBeInTheDocument();
  });
});

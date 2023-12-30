import { MemoryRouter } from "react-router-dom";

export const memoryRouterWrapper = (route, component) => (
  <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
);

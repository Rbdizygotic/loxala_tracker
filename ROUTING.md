# Routing Documentation

This React application uses React Router for client-side routing with both static and dynamic routes.

## Route Structure

### Static Routes
- `/` - Home page
- `/about` - About page
- `/products` - Products listing page
- `/404` - Not Found page

### Dynamic Routes
- `/products/:id` - Product detail page (dynamic based on product ID)

## File Structure

```
src/
├── router/
│   ├── AppRouter.tsx    # Main router configuration
│   └── routes.ts        # Route constants and helpers
├── pages/
│   ├── Home.tsx         # Home page
│   ├── About.tsx        # About page
│   ├── Products.tsx     # Products listing
│   ├── ProductDetail.tsx # Product detail (dynamic)
│   └── NotFound.tsx     # 404 page
├── components/
│   └── Navigation.tsx   # Navigation component
└── layouts/
    └── MainLayout.tsx   # Main layout wrapper
```

## How to Use

### Adding New Static Routes

1. Create a new page component in `src/pages/`
2. Add the route to `AppRouter.tsx`:
   ```tsx
   <Route path="/new-route" element={<NewPage />} />
   ```
3. Add navigation link in `Navigation.tsx`

### Adding New Dynamic Routes

1. Create a page component that uses `useParams()` hook
2. Add the route with parameter in `AppRouter.tsx`:
   ```tsx
   <Route path="/dynamic/:param" element={<DynamicPage />} />
   ```
3. Access parameters in your component:
   ```tsx
   const { param } = useParams<{ param: string }>();
   ```

### Navigation

Use React Router's `Link` component for internal navigation:
```tsx
import { Link } from 'react-router-dom';

<Link to="/about">About</Link>
```

### Programmatic Navigation

Use `useNavigate` hook for programmatic navigation:
```tsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/products');
```

## Features

- ✅ Client-side routing
- ✅ Dynamic route parameters
- ✅ 404 error handling
- ✅ Navigation component
- ✅ Layout wrapper
- ✅ TypeScript support
- ✅ Tailwind CSS styling

## Installation

Make sure to install React Router:
```bash
npm install react-router-dom @types/react-router-dom
``` 
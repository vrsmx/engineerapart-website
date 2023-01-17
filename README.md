<h1 align="center">
  EngineerApart Website
</h1>

## 🚀 Quick start

Navigate into the site’s directory and start it up.

```shell
npm run develop
```

Site is now running at http://localhost:8000

## Styling

Mainly uses CSS modules and Sass

Global styles found in `src/styles`
Component level styles found in each component. Ex:

```
- ComponentA
| ComponentA.tsx
| ComponentA.module.scss
|
- ComponentB
| ComponentB.tsx
| ComponentB.module.scss
|
...
```

### Class naming

Global style clases are name `with-this-case`, while module clases are named `with_snake_case` to easily identified origin.

### Available css tools:

- Flexbox class tools
- Screen media query
- Responsive font-size
- Responsive container size, margin and padding

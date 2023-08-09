## Iniciando con Vite & React

```sh
(Opc 1) npm init vite@latest
(Opc 2) npm create vite@latest

cd project_name
npm install 
npm run dev
```

## Consideraciones en vite/react

- Archivos de componentes deben empezar con mayuscula: `Header`
- El nombre del componente igual debe empezar con mayuscula: `const Header = () => <h1>Hola</h1>`
- Vite requiere la extension .jsx `Header.jsx`
- Un componente es una funcion `function Header() { return (<h1>Hola</h1>)}`
- Atajos `rfce` - Function declaration o `rafce` Arrow function.

## Escribir código CSS en react

- CSS Plano
- Framework CSS
- Módulos CSS
- Components
- SASS
- Styled Components

## Implementando Tailwind en React

Para esta confuguración primero tenemos que instalar tailwind y sus herramientas en modo de desarrollo con 
`npm install -D tailwindcss postcss autoprefixer`, despues ejecutamos el comando `npx tailwindcss init -p` para crear los archivos `postcss.config.js` y `tailwind.config.js`.

Ahora en el archivo `index.css` escribimos la siguiente configuración

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

En `tailwind.config.js` especificamos los archivos que debera considerar para aplicar los estilos

```js
/** @type {import('tailwindcss').Config} content o purge para tailwind@2*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Ahora podemos detener la aplicacion y/o correrla con `npm run dev`

Por ejemplo para hacer un test de tailwind podemos agregar un estilo a un componente, por ejemplo:

```jsx
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

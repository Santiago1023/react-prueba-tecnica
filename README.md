## Prueba técnica para Juniors y Trainees de React en Live Coding

APIS: 

- Facts Random: https://catfact.ninja/fact
- Image Random: https://cataas.com/cat/says/hello 

Recupera un hecho aleatorio de gatos de la primera API y muestra una imagen de un gato con la primera palabra del hecho recuperado usando la segunda API.

Separamos por partes la prueba y entendemos el problema: 
1-> Recupera un hecho aleatorio de gatos de la primera API.
2-> Recuperar la primera palabra del hecho.
3-> Muestra una imagen de un gato con la primera palabra. 

Accedemos a las APIs, les hechamos un vistazo y entendemos cual o cuales endpoints son los que necesitamos.



Pasos para la construcción del proyecto 

1) npm crate vite@latest
2) project_name, Vanilla, JS
3) cd project_name 
4) npm install @vitejs/plugin-react -E
5) npm install react react-dom -E
6) crear el vite.config.js
7) cambiar el main.js -> main.jsx y crear la app de react 
8) instalar el linter  -> npm install standard -D   y luego ir al package.json a poner la configuración 
9) hacer lo más básico que pide la prueba

si queda tiempo, y te preguntan ¿qué harías? 
10) hacer el handling de los errores e intentar probar el código -> npm init playwright@latest 

11) probar con -> npx playwright test
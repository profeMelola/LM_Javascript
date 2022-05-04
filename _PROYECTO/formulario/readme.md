# Formularios

En el panel de navegación debe aparecer dos opciones. Para volver a la tienda, para iniciar sesión o registrarse:

![image](https://user-images.githubusercontent.com/91023374/166509110-ec603004-5653-4129-bdfd-a707d11b4057.png)

El formulario es el mismo, pero dependiendo de si el login está guardado en el localStorage saldrá con unos campos u otros.

**Se adjunta formulario.html en esta misma carpeta.**

Debes añadir las siguientes **restricciones HTML5:**
- todos los campos son obligatorios.
- el campo contraseña debe estar compuesto únicamente por letras minúsculas y números y tener una longitud mínima de 8 y una longitud máxima de 12.

Guarda solo el contenido de login (campo "usuario" del formulario), pero recuerda que podemos guardar en el localStorage cualquier objeto JS, siempre y cuando este haya sido convertido a texto (JSON.stringify).

## Formulario de alta

![image](https://user-images.githubusercontent.com/91023374/166505711-86e440f8-6b4d-4b7b-aeed-9923f15fa331.png)

Al hacer clic en el botón de submit:

- guarda el login en el LocalStorage.
- se muestra de nuevo la página index.html de la tienda.

## Formulario de login

Si al cargar el formulario el login está guardado en el LocalStorage, debes modificar el formulario mostrando solo la siguiente información.

![image](https://user-images.githubusercontent.com/91023374/166505634-e3c9dcb8-a7cb-4fbf-8846-204c4fb895c0.png)

Al hacer clic no debe modificarse el localstorage, simplemente volver al index.html.

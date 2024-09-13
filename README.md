

## Configuración inicial

Antes de comenzar, necesitarás obtener una clave de API de OpenWeatherMap. Sigue estos pasos para obtener tu propia clave de API:

1.  Regístrate en el sitio web de OpenWeatherMap en [https://openweathermap.org](https://openweathermap.org/) si aún no tienes una cuenta.
2.  Inicia sesión en tu cuenta y navega a la sección "API Keys" (Claves de API) en tu perfil.
3.  Genera una nueva clave de API y asegúrate de copiarla, ya que la necesitarás más adelante en el código.

## Estructura del código

A continuación se muestra el código JavaScript necesario para realizar la solicitud a la API de OpenWeatherMap y mostrar los datos del clima en tu aplicación. Asegúrate de que el código esté vinculado correctamente con tu archivo HTML y que la etiqueta `<div>` con el ID "datosClima" esté presente en tu página.

## Explicación del código

El código anterior consta de dos funciones principales: `buscarCiudad(ciudad)` y `mostrarDatos(respuesta)`. Aquí está cómo funciona cada una:

1.  `fetchDatosClima(ciudad)`: Esta función se encarga de hacer una solicitud a la API de OpenWeatherMap para obtener los datos del clima de la ciudad especificada. Recibe el nombre de la ciudad como parámetro. Utiliza la función `fetch()` para enviar una solicitud GET a la URL de la API, incluyendo la ciudad y tu clave de API. Luego, convierte la respuesta en formato JSON utilizando el método `json()`. Finalmente, llama a la función `mostrarDatos(respuesta)` pasando los datos obtenidos como argumento.

    function buscarCiudad(ciudad){
        fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => mostrarDatos(data))
    }
    


## Uso de la aplicación

1.  Asegúrate de tener los archivos HTML y CSS vinculados correctamente en tu página web.
2.  Inserta un campo de entrada de texto en tu página con el ID "ciudadEntrada" para que los usuarios puedan ingresar el nombre de la ciudad.
3.  Agrega un botón con el ID "botonBusqueda" para permitir a los usuarios buscar el clima de la ciudad ingresada.
4.  Cuando un usuario haga clic en el botón de búsqueda, se llamará a la función  con el valor ingresado en el campo de entrada de texto.
5.  La función `buscarCiudad(ciudad)` realizará una solicitud a la API de OpenWeatherMap y obtendrá los datos del clima correspondientes a la ciudad ingresada.
6.  Una vez que se obtengan los datos del clima, la función `mostrarDatos(respuesta)` mostrará los detalles relevantes del clima en la página.





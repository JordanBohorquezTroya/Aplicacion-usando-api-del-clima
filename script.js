let apiKey = '271fcfc29bdbc95b913bac4e0473cb86';
let url ='https://api.openweathermap.org/data/2.5/weather'
let difKelvin = 273.15


document.getElementById('botonBusqueda').addEventListener('click', ()=>{
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        buscarCiudad(ciudad)

    }
})

function buscarCiudad(ciudad){
    fetch(`${url}?q=${ciudad}&appid=${apiKey}`)
    .then(respuesta => respuesta.json())
    .then(respuesta => mostrarDatos(respuesta))
    

}

function mostrarDatos(respuesta){
    const divDatos = document.getElementById('datosClima')
    divDatos.innerHTML=''
    

    const ciudadNombre = respuesta.name
    const paisNombre = respuesta.sys.country
    const ciudadTemperatura = respuesta.main.temp
    const ciudaddescripcion = respuesta.weather[0].description
    const logoClima = respuesta.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temInfo = document.createElement('p')
    temInfo.textContent = `la Temperatura es: ${Math.floor(ciudadTemperatura-difKelvin)}C°`

    const logoInfo = document.createElement('img')
    logoInfo.src=`https://openweathermap.org/img/wn/${logoClima}@2x.png`

    const Descripcion = document.createElement('p')
    Descripcion.textContent = `La info es: ${ciudaddescripcion}`


    divDatos.appendChild(ciudadTitulo)
    divDatos.appendChild(temInfo)
    divDatos.appendChild(logoInfo)
    divDatos.appendChild(Descripcion)

}
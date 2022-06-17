addEventListener("DOMContentLoaded", (e)=>{
    let url = "https://script.google.com/macros/s/AKfycbzvEGEZ1RyrmOqLh44AbBNsN49dEzUVEPpCo3es_Ngl5BumCK-g/exec";
    addEventListener("submit", async(e)=>{
        e.preventDefault();
        let data = new FormData(e.target);
        data.append("hoja", "datosFormulario");
        data.set("Imagenes", `=IMAGE("${data.get('Imagenes')}", 1)`);
        let config = {
            method: "POST", 
            body: data
        };
        let peticion = await fetch(url, config);
        let json = await peticion.json();
        document.body.insertAdjacentText("beforeend", JSON.stringify(json));
        document.querySelector('form').reset();
    })

})

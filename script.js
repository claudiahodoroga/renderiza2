const sectionsContent={
    "about": `
    <p>
    ¿Te imaginas explorar dos mundos llenos de color y belleza, guiado por una conversación relajada entre amigos? Bienvenido a <b>RENDERIZA2</b>, donde el arte en los videojuegos cobra vida. 
    </p>
    <br>
    <p>Somos Claudia y Fede, estudiantes de diseño y desarrollo de videojuegos apasionados por el arte, y con la mínima expriencia como "gamers".
    En cada episodio, probaremos juegos que destacan por su estilo gráfico. La dinámica es simple: dos amigos, dos juegos, y una charla para descubrir qué hace tan especial a cada título.
    </p>
    </br>
    <p>
    Si eres un apasionado del arte y los videojuegos, o simplemente buscas una experiencia diferente que te muestre cómo los videojuegos pueden ser verdaderas obras de arte, este es el podcast para ti. Además, descubrirás títulos increíbles que quizá aún no conozcas, y que podrían convertirse en tus nuevos favoritos. 
    </p>
    <br>
    <p>Escúchanos ahora y sumérgete en un mundo donde los gráficos cuentan una historia inmersiva, de la mano de unos verdaderos novatos profesionales.
    </p>
    `,
    "latest": `
        <div class="episode-card">
            <div id="ep-metadata">
            <p id="ep-title">Episodio 01: Encapucha2</p>
            <p id="ep-timestamp">04/10/2024</p>
            <audio controls>
                <source src="./assets/podcast_final.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            
            </div>
            <p id="ep-desc">Esta semana, discutimos Journey, con sus paisajes de ensueño y atmósfera mágica, y Sable, con su paleta de colores inspirada en novelas gráficas y su enfoque meditativo en la exploración.</p>
        </div>
    `,
    "files": `
        <p>Aquí puedes consultar el documento con toda la información sobre la creación de este episodio.</p>
        <br>
        <a href="https://drive.google.com/drive/folders/1sbDmXAQiS75Xdt-LUbQpsea0F_LhV87I?usp=sharing" target="_blank" rel="noopener noreferrer"><p>Carpeta de Google Drive</p></a>
    `
};  

function setActiveButton(buttonId){
    const buttons = document.querySelectorAll('.button-nav');
    buttons.forEach(button=>{
        button.classList.remove('active');
    });
    document.getElementById(buttonId).classList.add('active');
}

function updateCanvasContent(sectionKey){
    const canvas = document.getElementById("content");
    canvas.innerHTML = sectionsContent[sectionKey];
};

document.getElementById("about").addEventListener("click", function(){
    updateCanvasContent("about");
    setActiveButton("about");
});

document.getElementById("latest").addEventListener("click", function(){
    updateCanvasContent("latest");
    setActiveButton("latest");
});

document.getElementById("files").addEventListener("click", function(){
    updateCanvasContent("files");
    setActiveButton("files");
});

window.onload = function(){
    updateCanvasContent("about"); 
    setActiveButton("about");
}
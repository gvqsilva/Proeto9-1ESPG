function medidas(){
    const contador1 =document.getElementById("contador1");
    let valor1=0;

    //setInterval- ele define um derterminado intervalo de tempo

    let tempo1 = setInterval(()=>{
        valor1 +=1;
        contador1.innerHTML = `+${valor1}`;

        if(valor1 == 400){
            //limpa o intervalo de tempo
            clearInterval(tempo1);
        }
    })

    //medidor 2

    const contador2 =document.getElementById("contador2");
    let valor2=0;

    //setInterval- ele define um derterminado intervalo de tempo

    let tempo2 = setInterval(()=>{
        valor2 +=1;
        contador2.innerHTML = `+${valor2}`;

        if(valor2 == 150){
            //limpa o intervalo de tempo
            clearInterval(tempo2);
        }
    })

//medidor 3

const contador3 =document.getElementById("contador3");
let valor3=0;

//setInterval- ele define um derterminado intervalo de tempo

let tempo3 = setInterval(()=>{
    valor3 +=1;
    contador3.innerHTML = `+${valor3}`;

    if(valor3 == 200){
        //limpa o intervalo de tempo
        clearInterval(tempo3);
    }
})

}

//email

document.addEventListener("DOMContentLoaded", function(e){
    //declarando as variaveis
        const email =document.querySelector(".info-email");
        const mensagem = document.querySelector(".mensagem")

        //Oculta a mensagem e adciona a classe Hidden
        mensagem.classList.add("hidden");


    email.addEventListener('keyup', function(e){
   //verifica se a tecla Enter foi pressionada
   if(e.keyCode === 13){
    //controla o comportamento do evento Ex.  não envia os dados formularios
    e.preventDefault();
    
    //Exibe a mensagem e remove a classe hidden
    mensagem.classList.remove("hidden");
    //oculta o campo email
    email.style.display="none";
    //limpa o campo email
    email.value="";
    
}
})
})

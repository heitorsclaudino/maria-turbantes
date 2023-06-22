import { useState } from "react";

export default function Slider (){
    const [imagesList, setImagesList] = useState(["maçã, uva, banana"]); //array que guarda o caminho de todas as imagens disponíveis no slider
    const [position, setPosition] = useState(0); //variável que guarda a posição do array, ou seja, a imagem sendo mostrada

    function NextImage () {
        const exibeFotos = () => {
            console.log(position);
            
        };
        
        //estudar do while 

        if(position === imagesList.length){}

        setTimeout(exibeFotos, 2000)
    };

    NextImage();


    //função responsável por iterar o array de imagens, exibi-las e reiniciar a exibição quando chegar na última imagem disponível

};
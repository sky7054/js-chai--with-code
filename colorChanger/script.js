const button = document.querySelectorAll('.button');

const body = document.querySelector('body');

button.forEach(function(button) {
    button.addEventListener("click", function(e){
        if(e.target.id === "grey"){
         body.style.backgroundColor = "#8A7650"
        }
        else if(e.target.id === "white"){
             body.style.backgroundColor = "#E36A6A";
        }
        else if(e.target.id === "blue"){
            body.style.backgroundColor = "#6D9E51";
        }
        else{
            body.style.backgroundColor = "#87B6BC";
        }

        
    })
})
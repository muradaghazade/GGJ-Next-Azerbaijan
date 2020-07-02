document.querySelector(".button").addEventListener('click', function(){
    let fKeyword = document.querySelector(".full-name").value;
    let eKeyword = document.querySelector(".email").value;
    if(fKeyword === "" && eKeyword !== ""){
        document.querySelector(".error-place").innerHTML = `
        <img class"error-icon" src="error.png" alt="Error icon">
        <style>
            img {
                width: 18px;
                margin-left: 5px;
            }
        </style>
        `
        document.querySelector(".error-place-two").innerHTML = "";
    }else if(eKeyword === "" && fKeyword!== ""){
        document.querySelector(".error-place-two").innerHTML = `
        <img class"error-icon" src="error.png" alt="Error icon">
        <style>
            img {
                width: 18px;
                margin-left: 5px;
            }
        </style>
        `
        document.querySelector(".error-place").innerHTML = "";
        fKeyword = "Add Email"
    }else{
        document.querySelector(".error-place").innerHTML = "";
        document.querySelector(".error-place-two").innerHTML = "";
        console.log(fKeyword);
        console.log(eKeyword);
    }
})
function TestHi() {
    //This is empty
    //alert('Howdy');

    let inputElement = document.getElementById("fname");
    //alert(inputElement.value);

    //Test is input value is "hi"
    if (inputElement.value === "hi")
     {
        alert("Correct");
    }
    else {
        alert("Incorrect");
        inputElement.style.border = "2px solid red";
    }
}

function generateElements() {
    alert("Function is called");
    let tech = ["HTML", "CSS", "JavaScript"];
    let bulletlist = document.getElementById("testGeneration");
    for (let i = 0; i <tech.length; i++) {
        let newBullet = document.createElement("li");
        newBullet.innerHTML = "Learn " + tech[i];
        bulletlist.appendChild(newBullet);
    }
}
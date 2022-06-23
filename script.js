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
        inputElement.style.border = "2px solid red"
    }
}
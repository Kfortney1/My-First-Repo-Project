function TestHi () {
    //This is empty
    //alert('Howdy');

    let inputElement = document.getElementById("fname");
    //alert(inputElement.value);
    //Test is input value is "hi"
    if (inputElement.value==="hi")
    {
        alert("correct")
    }
    else {
        alert("incorrect"):
        inputElement.style.border = "2px solid red"
    }
}
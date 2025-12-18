
var button = document.getElementById('generateBtn');
button.addEventListener("click", getwords);
function getwords() {
    var words = document.querySelectorAll("input[type=text]")
    var placeholders = document.querySelectorAll(".user-input")
    console.log(words);

    placeholders.forEach((placeholder, index) => {
        console.log(placeholder, index);
        placeholder.textContent = words[index].value;
    })
    document.getElementById('story').style.display = 'block';
}

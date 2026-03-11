document.getElementById("Execute").addEventListener("click", function () {

    let sentence = document.getElementById("sentence").value;

    sentence = sentence.replace(/[,*:]/g, "");

    let words = sentence.trim().split(" ");

    let displayWords = "";
    let count = 0;

    for (let i = 0; i < words.length; i++) {

        if (words[i] !== "") {
            displayWords += "<u>" + words[i] + "</u> ";
            count++;
        }

    }

    document.getElementById("words").innerHTML = displayWords;

    document.getElementById("sent-count").value = count;

    document.getElementById("count").innerHTML = "Number of words: " + count;

});

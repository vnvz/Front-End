const data = {
    originalText: "",
    forbiddenWords: [],
    synonyms: []
};

function alterText() {
    const originalText = document.getElementById("originalText").value.trim();
    const forbiddenWordsInput = document.getElementById("forbiddenWords").value.trim();
    const synonymsInput = document.getElementById("synonyms").value.trim();
    const option = document.getElementById("options").value;

    if (originalText === "") {
        alert("Por favor, digite o texto original.");
        return;
    }

    const forbiddenWordsList = forbiddenWordsInput.split(",").map(word => word.trim());
    const synonymsList = synonymsInput.split(",").map(word => word.trim());

    if (option === "replaceSynonyms" && forbiddenWordsList.length !== synonymsList.length) {
        alert("As listas de palavras proibidas e sinônimos devem ter o mesmo tamanho.");
        return;
    }

    data.originalText = originalText;
    data.forbiddenWords = forbiddenWordsList;
    data.synonyms = synonymsList;

    let newText = "";
    const currentDate = new Date().toLocaleString("pt-BR");

    switch (option) {
        case "original":
            newText = `${currentDate}<br>TEXTO EDITADO<br>${data.originalText}`;
            break;
        case "removeForbidden":
            newText = `${currentDate}<br>TEXTO EDITADO<br>${showForbidden(data.originalText)}`;
            break;
        case "replaceSynonyms":
            newText = `${currentDate}<br>TEXTO EDITADO<br>${replaceSynonym(data.originalText)}`;
            break;
    }

    document.getElementById("result").innerHTML = newText;
}

function showForbidden(text) {
    const words = text.split(" ");
    const highlightedWords = words.map(word => {
        if (data.forbiddenWords.includes(word.toLowerCase())) {
            return "<span style='color:red;'>" + word + "</span>";
        } else {
            return word;
        }
    });
    return highlightedWords.join(" ");
}

function replaceSynonym(text) {
    const words = text.split(" ");
    const replacedWords = words.map(word => {
        const index = data.forbiddenWords.indexOf(word.toLowerCase());
        if (index !== -1) {
            return "<span style='color:green;'>" + data.synonyms[index] + "</span>";
        } else {
            return word;
        }
    });
    return replacedWords.join(" ");
}

function cleanUp() {
    document.getElementById("originalText").value = "";
    document.getElementById("forbiddenWords").value = "";
    document.getElementById("synonyms").value = "";
    document.getElementById("options").value = "original";
    document.getElementById("result").innerHTML = "";
}

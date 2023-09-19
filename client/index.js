const questions = [];

function fetchQuest() {
    return fetch('/questions', {

    })
        .then(response => response.json())
        .then(result => questions.push(...result))

}


fetchQuest()
    .then(() => {
        console.log(questions);
        const form = document.getElementById('form');
        questions.forEach((element, index) => {
            const question = document.createElement('div');
            question.classList.add('answer')
            form.appendChild(question);
            question.innerHTML = `
             <label for="question${index + 1}" class="answer" id = "answer">  ${index + 1 + '. '}${element.caption}  </label><br>

             <input class="answer" type="radio" id="question${index + 1}" name="answer${index + 1}" value="true" />Так

             <input class="answer" type="radio" id="question${index + 1}" name="answer${index + 1}" value="" />Ні
             `})
    })
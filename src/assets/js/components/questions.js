const questionsBtns = document.querySelectorAll('.question__btn')

if (questionsBtns.length) {
    questionsBtns.forEach(item => {
        item.onclick = function() {
            const parentNode = this.closest('.question')

            parentNode.classList.toggle('question_open')
        }
    })
}


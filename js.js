let q1 = document.querySelector('.q1');
let a1 = document.querySelector('.faq-answer-one');

q1.addEventListener('click', function () {
    if (a1.hasAttribute('hidden')) {
        a1.removeAttribute('hidden');
        console.log('removed');

    } else {
        a1.setAttribute('hidden', '')
        console.log('unhi9de');

    }
});
let q2 = document.querySelector('.q2');
let a2 = document.querySelector('.faq-answer-two');

q2.addEventListener('click', function () {
    if (a2.hasAttribute('hidden')) {
        a2.removeAttribute('hidden');
        console.log('removed');

    } else {
        a2.setAttribute('hidden', '')
        console.log('unhi9de');

    }
});
let q3 = document.querySelector('.q3');
let a3 = document.querySelector('.faq-answer-three');

q3.addEventListener('click', function () {
    if (a3.hasAttribute('hidden')) {
        a3.removeAttribute('hidden');
        console.log('removed');

    } else {
        a3.setAttribute('hidden', '')
        console.log('unhi9de');

    }
});
let q4 = document.querySelector('.q4');
let a4 = document.querySelector('.faq-answer-four');

q4.addEventListener('click', function () {
    if (a4.hasAttribute('hidden')) {
        a4.removeAttribute('hidden');
        console.log('removed');

    } else {
        a4.setAttribute('hidden', '')
        console.log('unhi9de');

    }
});

let c1a = document.querySelector('.start')
let c2a = document.querySelector('.prof')
let c3a = document.querySelector('.bus')
let c1 = document.querySelectorAll('.month')
let toggleBtn = document.getElementById('toggleBtn')

let createdElements = []

const org1 = c1a.innerHTML
const org2 = c2a.innerHTML
const org3 = c3a.innerHTML

function showMonthly() {
    c1a.innerHTML = org1
    c2a.innerHTML = org2
    c3a.innerHTML = org3

    for (const el of createdElements) {
        if (el && el.parentNode) {
            el.parentNode.removeChild(el)
        }
    }

    createdElements = []
}

function addYearly() {
    for (const element of c1) {
        let newDiv = document.createElement('div')
        newDiv.className = 'year'
        newDiv.textContent = 'Billed Yearly'
        newDiv.style.fontSize = '15px'
        newDiv.style.textAlign = 'end'

        element.insertAdjacentElement('afterend', newDiv)
        createdElements.push(newDiv)
    }
}

function showYearly() {
    c1a.innerHTML = '54'
    c2a.innerHTML = '32'
    c3a.innerHTML = '52'
}

toggleBtn.addEventListener('change', function () {
    if (toggleBtn.checked) {
        showYearly()
        addYearly()
    } else {
        showMonthly()
    }
})

let menu = document.querySelector('.menu')
let sidebar = document.querySelector('.sidebar')


menu.addEventListener('click', function () {
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'flex'
    } else if (sidebar.style.display = 'flex') {
        sidebar.style.display = 'none'
    }
})

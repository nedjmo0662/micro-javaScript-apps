const tagsEl = document.querySelector('#tags');
const text = document.querySelector('#txt');

text.addEventListener('keyup', (e) => addchoices(e));

function addchoices(e) {
    const tags = e.target.value.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerHTML = tag;
        tagsEl.appendChild(tagEl);
    });

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 100);
        randomSelect();
    }
}

function randomSelect() {
    let times = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);
        setTimeout(() => {
            unhighlightTag(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100)
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');


    return tags[Math.floor(Math.random() * tags.length)];
}
function highlightTag(tag) {
    tag.classList.add('highlight');
}
function unhighlightTag(tag) {
    tag.classList.remove('highlight');
}


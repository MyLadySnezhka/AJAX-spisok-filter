const spisokLnk = document.querySelector('.insClass');

let arr = [];

const run = async() => {
    const res = await axios.get('/class/info');
    arr = res.data;
    console.log(arr);

    const html = arr.map((item) => {
        const _html = `<div>${item.name} ${item.sex} ${item.age}</div>`;
        return _html;
    }).join('');
    console.log(html);

    spisokLnk.innerHTML = html;
}

run();

  
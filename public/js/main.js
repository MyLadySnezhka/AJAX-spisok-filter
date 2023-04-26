const listLnk = document.querySelector('.insClass');

let arr = [];

const run = async() => {
    const res = await axios.get('/class/info');
    arr = res.data;
    console.log(arr);

    const html = arr.map((item) => {
        const _html = `<li><b>${item.name}</b> (${item.sex}) ${item.age}</li>`;
        return _html;
    }).join('');
    console.log(html);

    listLnk.innerHTML = html;
}

run();

  
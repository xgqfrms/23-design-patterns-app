
const app = document.querySelector(`#app`);

app.innerHTML = ``;
app.insertAdjacentHTML(`beforeend`, `<p>Node.js version = ${process.versions.node}</p>`);
app.insertAdjacentHTML(`beforeend`, `<p>Chrome version= ${process.versions.chrome}</p>`);
app.insertAdjacentHTML(`beforeend`, `<p>Electron version = ${process.versions.electron}</p>`);

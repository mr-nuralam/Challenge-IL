
const onSubmit = (event) => {

    event.preventDefault();

    const { name } = event.target;

    list.innerHTML +=
        `<li> 
        ${name.value} 
        <button type="button" class="btn btn-danger m-2 fs-5 float-end" onclick="removeItem(event)">delete</button>
        </li>`;
}

addEventListener("submit", onSubmit);

function removeItem(event) {
    event.preventDefault();
    let li = event.target.parentNode;
    list.removeChild(li);
}
//SELECTORS
document.querySelector('form').addEventListener('submit',handleSubmitForm);
document.querySelector('ul').addEventListener('click',handleClickDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click',handleClearAll);

//EVENT HANDLERS
function handleSubmitForm(e) {
    //prevent the browser from executing the default submit behaviour
    e.preventDefault();

    let input = document.querySelector('input');
    if(input.value!='')
    {
        addToDo(input.value);
    }

    input.value='';
}

//HELPERS
function addToDo(value) {

    let ul = document.querySelector('ul');

    //create an li element
    let li = document.createElement('li');

    //insert content in li element
    li.innerHTML = `
        <span class="todo-item">
            ${value}
        </span>

        <button name="checkButton">
            <i class="fas fa-check-square"></i>
        </button>

        <button name="deleteButton">
            <i class="fas fa-trash"></i>
        </button>
    
    `;

    li.classList.add('todoList-item');
    ul.appendChild(li);

}

function handleClickDeleteOrCheck(e) {
    if(e.target.name=='deleteButton')
    {
        //perform delete
        deleteToDo(e);

    }
    if(e.target.name='checkButton')
    {
        //perform check
        checkToDo(e);
    }

}

function checkToDo(e) {

    let item = e.target.parentNode;

    if(item.style.textDecoration === 'line-through')
    {
        item.style.textDecoration = 'none';
    }
    else{
        item.style.textDecoration = 'line-through';
    }

}

function deleteToDo(e)
{
    let item = e.target.parentNode;

    item.addEventListener('transitionend', function()
    {
        item.remove();
    }
    );

    item.classList.add('todoList-item-fall');

}

function handleClearAll(e)
{
    document.querySelector('ul').innerHTML = '';
}
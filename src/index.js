import './style.css';

const task = [
  {
    desc: 'Go shopping',
    completed: false,
    index: 1,
  },
  {
    desc: 'Do laundry',
    completed: false,
    index: 2,
  },
  {
    desc: 'Do assignments',
    completed: false,
    index: 3,
  },
  {
    desc: 'Attend meeting',
    completed: false,
    index: 4,
  },
];

const list = document.querySelector('.todo-list');
window.addEventListener('DOMContentLoaded', () => {
  const taskString = task.map((item) => ` <li class="li-todo">
        <div class="check">
            <input type="checkbox">
            <p class="para">${item.desc}</p>
        </div>
       
        <div><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
       </li>`)
    .join('');
  list.innerHTML = taskString;

});

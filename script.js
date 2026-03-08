

// let ctr = 0;
// function callback() {
//     console.log(ctr);
//     ctr = ctr + 1;
// }

// setInterval(callback, 2000);


function deleteTodo(index) {
    const element = document.getElementById("todo-" + index);
    element.parentNode.removeChild(element);

}

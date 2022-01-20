let input = document.querySelector("#input");
let list = document.querySelector("#list");

input.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    let li = document.createElement("li");
    li.classList.add("list__item");

    let task = document.createElement("span");
    task.classList.add("task");
    task.innerHTML = this.value;
    task.addEventListener("dblclick", function () {
      let text = this.innerHTML;
      this.innerHTML = "";

      let edit = document.createElement("input");
      edit.value = text;
      this.appendChild(edit);

      let newtext = this;
      edit.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
          newtext.innerHTML = this.value;
        }
      });
    });
    li.appendChild(task);

    let remove = document.createElement("span");
    remove.classList.add("remove");
    remove.innerHTML = "удалить";
    remove.addEventListener("click", function (e) {
      const btn = e.target.closest(".remove");
      if (!btn) {
        return;
      }
      btn.parentElement.remove();
    });
    li.appendChild(remove);

    let mark = document.createElement("span");
    mark.classList.add("done");
    mark.innerHTML = "сделано";
    mark.addEventListener("click", function () {
      this.parentElement.classList.add("line");
      this.appendChild.classList.remove("done");
    });
    li.appendChild(mark);

    list.appendChild(li);

    this.value = "";
  }
});
// console.log(input);

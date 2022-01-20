let input = document.querySelector("#input");
let list = document.querySelector("#list");

input.addEventListener("keypress", function (event) {
  if (event.key == "Enter" && this.value != "") {
    let li = document.createElement("li");
    li.classList.add("list__item");

    let task = document.createElement("span");
    task.classList.add("task");
    task.innerText = this.value;
    // if (this.classList.contains("line")) {
    //   alert('ffff')
    // }
    task.addEventListener("dblclick", function () {
      let text = this.innerText;
      this.innerText = "";

      let edit = document.createElement("input");
      edit.classList.add("input__edit");
      edit.value = text;
      this.appendChild(edit);

      let newtext = this;
      edit.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
          newtext.innerText = this.value;
        }
      });
    });
    li.appendChild(task);

    let remove = document.createElement("span");
    remove.classList.add("remove");
    remove.innerText = "удалить";
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
    mark.innerText = "сделано";
    mark.addEventListener("click", function () {
      this.parentElement.classList.add("line");
      this.remove();
    });
    li.appendChild(mark);

    list.appendChild(li);

    this.value = "";
  }
});

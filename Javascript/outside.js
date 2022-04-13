let li = Array.from(document.getElementsByClassName("li"));
let span = document.getElementById("span");

li.map((item, index, arr) => {
  item.addEventListener("click", (e) => {
    // item.style.opacity = "1";
    span.innerHTML = `your choice : ${e.target.textContent}`;

    li.map((item1, index1) => {
      index === index1
        ? (item1.style.opacity = "1")
        : (item1.style.opacity = ".5");
    });
  });
});

document.addEventListener("click", (e) => {
  if (
    li.reduce((acc, val) => {
      return acc && !val.contains(e.target);
    }, true)
  ) {
    li.map((item) => {
      item.style.opacity = ".5";
      span.innerHTML = "";
    });
  }
});

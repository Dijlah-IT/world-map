const islamics = document.querySelectorAll(".islamic");
islamics.forEach((islamic) => {
  console.log(islamic.dataset);
  tippy(islamic, {
    content: `${islamic.getAttribute("name")} \n جمعیت : ${
      islamic.dataset.population
    } نفر`,
  });
});

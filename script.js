const panels = document.querySelectorAll('.panel')


panels.forEach(panel => {
  // console.log(panel);

  // add event listener to each so when we click something happens
  panel.addEventListener('click', () => {
    // remove active class if theres one already
    removeActiveClasses();

    // add class to active to whichever we click on
    panel.classList.add('active');

  })
})


function removeActiveClasses() {
  // since theres more thn 1 classes we loop
  panels.forEach(panel => {
    // removes all active classes
    panel.classList.remove('active');

  });
}



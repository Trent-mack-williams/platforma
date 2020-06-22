export const Animates = () => {
  //Slide in
  const slideInElements = document.querySelectorAll(".slideIn");
  const slideIn = new IntersectionObserver(
    function (entries) {
      // isIntersecting is true when element and viewport are overlapping
      // isIntersecting is false when element and viewport don't overlap

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.position = "relative";
          entry.target.style.left = "0px";
          entry.target.style.opacity = "1";
        } else {
          entry.target.style.position = "relative";
          entry.target.style.left = "50px";
          entry.target.style.opacity = "0";
        }
      });
    },
    { threshold: [0.2] }
  );

  slideInElements.forEach((element) => {
    slideIn.observe(element);
  });

  //Slide up
  const slideUpElements = document.querySelectorAll(".slideUp");
  const slideUp = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.position = "relative";
          entry.target.style.top = "0px";
          entry.target.style.opacity = "1";
        } else {
          entry.target.style.position = "relative";
          entry.target.style.top = "50px";
          entry.target.style.opacity = "0";
        }
      });
    },
    { threshold: [0.2] }
  );

  slideUpElements.forEach((element) => {
    slideUp.observe(element);
  });

  //Fade in
  const fadeInElements = document.querySelectorAll(".fadeIn");
  const fadeIn = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
        } else {
          entry.target.style.opacity = "0";
        }
      });
    },
    { threshold: [0.4] }
  );

  fadeInElements.forEach((element) => {
    fadeIn.observe(element);
  });

  //Bg focus
  const bgFocusElements = document.querySelectorAll(".bgFocus");
  const bgFocus = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.backgroundSize = "120%";
        } else {
          entry.target.style.backgroundSize = "100%";
        }
      });
    },
    { threshold: [0.2] }
  );

  bgFocusElements.forEach((element) => {
    bgFocus.observe(element);
  });

  //Slide from behind (parent must have overflowX of hidden)
  const slideInFromElements = document.querySelectorAll(".slideInFrom");
  const slideInFrom = new IntersectionObserver(
    function (entries) {
      // isIntersecting is true when element and viewport are overlapping
      // isIntersecting is false when element and viewport don't overlap

      entries.forEach((entry) => {
        entry.target.parentElement.style.overflowX = "hidden";
        if (entry.isIntersecting) {
          entry.target.style.position = "relative";
          entry.target.style.right = "0%";
          entry.target.style.opacity = "1";
        } else {
          entry.target.style.position = "relative";
          entry.target.style.right = "50%";
          entry.target.style.opacity = "0";
        }
      });
    },
    { threshold: [0.5] }
  );

  slideInFromElements.forEach((element) => {
    slideInFrom.observe(element);
  });
};

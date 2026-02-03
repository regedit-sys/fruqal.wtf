const intro = document.getElementById("intro");
  const video = document.getElementById("introVideo");
  const siteContent = document.getElementsByClassName("content");

  function showSite() {
    for (const el of siteContent) {
      el.classList.add("visible");
    }
  }

  if (localStorage.getItem("introPlayed")) {
    intro.remove();
    showSite();
  } else {
    video.addEventListener("ended", endIntro);
    intro.addEventListener("click", endIntro);
  }

  function endIntro() {
    localStorage.setItem("introPlayed", "true");

    intro.classList.add("hidden");
    showSite();

    setTimeout(() => {
      intro.remove();
    }, 800);
  }
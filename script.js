const startBox = document.getElementById("start");
    const scene = document.getElementById("scene");
    const sadScene = document.getElementById("sadScene");
    const happyScene = document.getElementById("happyScene");

    startBox.addEventListener("click", () => {
      startBox.classList.add("hidden");
      scene.classList.remove("hidden");
    });

    function giveTheKiss() {
      sadScene.classList.add("hidden");
      happyScene.classList.remove("hidden");
    }

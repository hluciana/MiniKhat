const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (
      mutation.type === "childList" &&
      mutation.addedNodes.length > 0 &&
      mutation.addedNodes[0] instanceof Element
    ) {
      const dataNodes = mutation.addedNodes[0];
      const studentName = dataNodes.querySelector(
        ".base-navigation-button  bdi"
      );
      if (studentName) studentName.textContent = "John Doe";

      const location = window.location.href;

      switch (location) {
        case "https://upn.blackboard.com/ultra/institution-page":
        case "https://upn.blackboard.com/ultra/profile":
        case "https://upn.blackboard.com/ultra/stream":
        case "https://upn.blackboard.com/ultra/calendar":
        case "https://upn.blackboard.com/ultra/messages":
        case "https://upn.blackboard.com/ultra/grades":
        case "https://upn.blackboard.com/ultra/tools":
          BlockMessage();
          break;
        default:
          if (location.includes("https://upn.blackboard.com/ultra/courses")) {
            if (
              location.includes("calendar") ||
              location.includes("announcements") ||
              location.includes("engagement") ||
              location.includes("messages") ||
              location.includes("enrollments")
            ) {
              const dataCourseNav = document.querySelector(
                "#main-content .course-tool-content"
              );
              if (dataCourseNav) dataCourseNav.style.visibility = "hidden";
            }
          }
          break;
      }
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });

function BlockMessage() {
  if (document.getElementById("onkhatboard")) return;

  const section = document.getElementById("main-content-inner");

  if (!section) return;

  const div = document.createElement("div");
  div.textContent = "Blocked by OnKhatBoard";
  div.style.position = "absolute";
  div.style.fontSize = "2em";
  div.style.width = "100%";
  div.style.height = "100%";
  div.style.top = 0;
  div.style.left = 0;
  div.style.zIndex = 999;
  div.style.display = "flex";
  div.style.textAlign = "center";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  div.style.color = "rgb(255,255,255)";
  div.style.backgroundColor = "rgb(45, 45, 45)";
  div.id = "onkhatboard";
  section.style.overflow = "hidden";
  section.appendChild(div);
}

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (
      mutation.type === "childList" &&
      mutation.addedNodes.length > 0 &&
      mutation.addedNodes[0] instanceof Element
    ) {
      const dataNodes = mutation.addedNodes[0];
      const fullName = dataNodes.querySelector(".base-navigation-button  bdi");
      if (fullName) fullName.textContent = "John Doe";

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
            if (location.includes("outline")) {
              const teacherFullName = document.querySelectorAll(
                "#course-instructors-panel bdi"
              );
              const teacherImg = document.querySelectorAll(
                "#course-instructors-panel img"
              );
              const details = document.getElementsByClassName(
                "course-outline__details-and-actions"
              );

              if (teacherFullName) {
                teacherFullName.forEach((e) => {
                  e.textContent = "HAPPY LIFE";
                });
              }
              
              if (teacherImg) {
                teacherImg.forEach((e) => {
                  e.style.visibility = "hidden";
                });
              }
              
              if (details) {
                while (details.length > 0) {
                  details[0].parentNode.removeChild(details[0]);
                }
              }
            } else if (
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
  if (document.getElementById("minikhat")) return;

  const section = document.getElementById("main-content-inner");

  if (!section) return;
  
  const div = document.createElement("div");
  div.textContent = "BLOCKED BY MINIKHAT";
  div.style.position = "absolute";
  div.style.fontSize = "10vw";
  div.style.width = section.offsetWidth + "px";
  div.style.height = section.offsetHeight + "px";
  div.style.top = 0;
  div.style.left = 0;
  div.style.zIndex = 999;
  div.style.display = "flex";
  div.style.textAlign = "center";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  div.style.color = "rgb(255,255,255)";
  div.style.backgroundColor = "rgb(45, 45, 45)";
  div.id = "minikhat";
  section.appendChild(div);
}

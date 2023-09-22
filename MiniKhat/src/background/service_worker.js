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

      let location = window.location.href;

      switch (location) {
        case "https://upn.blackboard.com/ultra/course":
          dataContent(
            dataNodes.querySelectorAll(".element-details .instructors bdi")
          );
          break;
        case "https://upn.blackboard.com/ultra/profile":
          BlockMessage(
            document.querySelector(
              "#main-content #body-content .profile-content"
            )
          );
          break;
        case "https://upn.blackboard.com/ultra/stream":
          BlockMessage(
            document.querySelector(
              "#main-content #body-content .activity-stream"
            )
          );
          break;
        case "https://upn.blackboard.com/ultra/calendar":
          BlockMessage(
            document.querySelector(
              "#main-content #body-content .calendar-wrapper"
            )
          );
          break;
        case "https://upn.blackboard.com/ultra/messages":
          BlockMessage(
            document.querySelector("#main-content #body-content .messages-list")
          );
          break;
        case "https://upn.blackboard.com/ultra/grades":
          BlockMessage(
            document.querySelector("#main-content #body-content .grades-list")
          );
          break;
        case "https://upn.blackboard.com/ultra/tools":
          BlockMessage(
            document.querySelector("#main-content #body-content .base-tools")
          );
          break;
        default:
          if (location.includes("https://upn.blackboard.com/ultra/courses")) {
            if (location.includes("outline")) {
              let teacherFullName = document.querySelector(
                "#course-instructors-panel bdi"
              );
              let teacherImg = document.querySelector(
                "#course-instructors-panel img"
              );
              let details = document.getElementsByClassName(
                "course-outline__details-and-actions"
              );

              if (teacherFullName) teacherFullName.textContent = "HAPPY LIFE";
              if (teacherImg) teacherImg.style.visibility = "hidden";
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
              // code...
            }
          }
          break;
      }
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });

function dataContent(coursesTeachers) {
  if (coursesTeachers) {
    coursesTeachers.forEach((e) => {
      e.textContent = "--------------------";
    });
  }
}

function BlockMessage(content) {
  if (!content || document.getElementById("minikhat")) return;

  let section = document.getElementById("main-content-inner");

  if (!section) return;

  let div = document.createElement("div");
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

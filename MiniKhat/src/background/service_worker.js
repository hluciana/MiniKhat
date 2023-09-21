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
            // dataNodes.querySelectorAll(".element-details .course-id span"),
            // dataNodes.querySelectorAll(".element-details .course-title h4")
          );
          break;
        case "https://upn.blackboard.com/ultra/profile":
        case "https://upn.blackboard.com/ultra/stream":
        case "https://upn.blackboard.com/ultra/calendar":
        case "https://upn.blackboard.com/ultra/messages":
        case "https://upn.blackboard.com/ultra/grades":
        case "https://upn.blackboard.com/ultra/tools":
          //code...
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
              if (teacherFullName) teacherFullName.textContent = "Happy Life";
              if (teacherImg) teacherImg.style.visibility = "hidden";
            } else if (
              location.includes("calendar") ||
              location.includes("announcements") ||
              location.includes("engagement") ||
              location.includes("messages") ||
              location.includes("enrollments")
            ) {
              //code...
            }
          }
          break;
      }
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });

function dataContent(coursesTeachers, coursesIDs, coursesNames) {
  if (coursesTeachers) {
    coursesTeachers.forEach((e) => {
      e.textContent = "--------------------";
    });
  }

  // if (coursesIDs) {
  // }

  // if (coursesNames) {
  // }
}

function styleButton(button) {
  button.style.margin = "20px";
  button.style.padding = "20px";
  button.style.fontSize = "40px";
  button.style.borderRadius = "10px";
  button.style.cursor = "pointer";
}

function createOverlay() {
  const overlay = document.createElement("div");

  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  overlay.style.zIndex = "10000";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.flexDirection = "column";
  overlay.style.color = "white";
  overlay.style.fontSize = "60px";
  overlay.innerText = "what do you need this video for?";

  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexDirection = "row";

  const forWorkButton = document.createElement("button");
  styleButton(forWorkButton);
  forWorkButton.innerText = "work";
  forWorkButton.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  const forLearningButton = document.createElement("button");
  styleButton(forLearningButton);
  forLearningButton.innerText = "learning";
  forLearningButton.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  const forProcrastinationButton = document.createElement("button");
  styleButton(forProcrastinationButton);
  forProcrastinationButton.innerText = "procrastination";
  forProcrastinationButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "closeTab" });
  });

  container.appendChild(forWorkButton);
  container.appendChild(forLearningButton);
  container.appendChild(forProcrastinationButton);

  overlay.appendChild(container);

  document.body.appendChild(overlay);
}

createOverlay();

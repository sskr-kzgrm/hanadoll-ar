const scene = document.querySelector("a-scene");
const permissionStatus = document.querySelector("#permission-status");
const cameraError = document.querySelector("#camera-error");
const cameraErrorMessageElement = document.querySelector("#camera-error-message");
const fallbackLink = document.querySelector(".camera-fallback-link");

function getCameraErrorMessage(error) {
  if (error && typeof error === "object" && "name" in error) {
    switch (error.name) {
      case "NotAllowedError":
      case "PermissionDeniedError":
        return "カメラの使用が許可されませんでした。ブラウザーの設定をご確認ください。";
      case "NotFoundError":
      case "DevicesNotFoundError":
        return "使用できるカメラが見つかりませんでした。";
      case "NotReadableError":
      case "TrackStartError":
        return "カメラを起動できませんでした。他のアプリが使用していないかご確認ください。";
    }
  }

  if (error instanceof Error && error.message) {
    return `カメラを起動できませんでした: ${error.message}`;
  }

  return "カメラを起動できませんでした。";
}

function showCameraError(message) {
  permissionStatus.hidden = true;
  cameraErrorMessageElement.textContent = message;
  cameraError.hidden = false;
}

function stopPermissionStream(stream) {
  stream.getTracks().forEach((track) => track.stop());
}

async function requestCameraPermissionAndStartAR() {
  permissionStatus.hidden = false;
  cameraError.hidden = true;

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    window.location.href = "./image.html";
    return;
  }

  let permissionStream;
  try {
    permissionStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    });
  } catch {
    window.location.href = "./image.html";
    return;
  }

  try {
    if (!scene.hasLoaded) {
      await new Promise((resolve) => {
        scene.addEventListener("loaded", resolve, { once: true });
      });
    }
    permissionStatus.hidden = true;
    await startAR(permissionStream);
  } catch {
    stopPermissionStream(permissionStream);
    permissionStatus.hidden = true;
    document.body.classList.remove("camera-pending");
    fallbackLink.hidden = false;
    showCameraError("ARカメラを起動できませんでした。");
  }
}

async function startAR(permissionStream) {
  try {
    const mindarSystem = scene.systems["mindar-image-system"];
    if (!mindarSystem) {
      throw new Error("MindAR image system was not initialized.");
    }

    await mindarSystem.start();
    document.body.classList.remove("camera-pending");
    fallbackLink.hidden = false;
  } catch (error) {
    document.body.classList.remove("camera-pending");
    fallbackLink.hidden = false;
    showCameraError(getCameraErrorMessage(error));
  } finally {
    stopPermissionStream(permissionStream);
  }
}

requestCameraPermissionAndStartAR();

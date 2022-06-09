import * as MediaLibrary from "expo-media-library";

const getPermission = async (permissionAlert, getAudioFiles) => {
  const { canAskAgain, expires, granted, status } =
    await MediaLibrary.getPermissionsAsync();

  if (granted) {
    getAudioFiles();
  }

  if (!granted && canAskAgain) {
    const { status, canAskAgain } =
      await MediaLibrary.requestPermissionsAsync();

    if (status === "denied") {
      permissionAlert(() => getPermission(permissionAlert, getAudioFiles));
    }

    if (status === "granted") {
      getAudioFiles();
    }

    if (status == -"denied" && !canAskAgain) {
    }
  }
};

export default getPermission;

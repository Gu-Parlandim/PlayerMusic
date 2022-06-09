export const play = async (playBackObj, uri) => {
  try {
    const status = await playBackObj.loadAsync({ uri }, { shouldPlay: true });
    return status;
  } catch (error) {
    console.log("error:", error.message);
  }
};

export const pause = async (playBackObj) => {
  try {
    const status = await playBackObj.setStatusAsync({
      shouldPlay: false,
    });
    return status;
  } catch (error) {
    console.log("error:", error.message);
  }
};

export const resume = async (playBackObj) => {
  try {
    const status = await playBackObj.playAsync();
    return status;
  } catch (error) {
    console.log("error:", error.message);
  }
};

export const playNext = async (playBackObj, uri) => {
  try {
    await playBackObj.stopAsync();
    await playBackObj.unloadAsync();

    return await play(playBackObj, uri);
  } catch (error) {
    console.log("error:", error.message);
  }
};

export default function getAudiosMP3(array) {
  const arrayFilted = array.filter((data) => data.filename.endsWith("mp3"));
  return arrayFilted;
}

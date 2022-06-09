import { Alert } from "react-native";
const permissionAlert = (getPermission) => {
  Alert.alert(
    "Permissão necessaria",
    "Esse aplicativo precissa da perimissão para acessear os arquivos de audio",
    [
      {
        text: "Permitir",
        onPress: () => getPermission(),
      },
      {
        text: "cancelar",
        onPress: () => permissionAlert(getPermission),
      },
    ]
  );
};

export default permissionAlert;

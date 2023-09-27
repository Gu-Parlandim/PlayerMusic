import { Alert } from "react-native";
const permissionAlert = (getPermission) => {
  Alert.alert(
    "Permissão necessária",
    "Esse aplicativo precisas da permissão para acessar os arquivos de audio",
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

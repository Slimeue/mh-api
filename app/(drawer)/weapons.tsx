import { View } from "react-native";
import ListRenderer from "../../components/List-Renderer";
import { weaponsCategData } from "../../constants/model/Weapons";
import { GlobalColors } from "../../constants/colors";

const WeaponsPage = () => {
  return (
    <View style={{ backgroundColor: GlobalColors.black700 }}>
      <ListRenderer url={`../(screens)/`} item={weaponsCategData} />
    </View>
  );
};

export default WeaponsPage;

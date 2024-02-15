import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text } from "react-native-paper";
import { weaponsCategDataModel } from "../../constants/model/Weapons";
import { mhweaponAPI } from "../../constants/url-apis";
import { FlatList, View } from "react-native";
import ListPage from "../../components/list";
import ListRenderer from "../../components/List-Renderer";
import { GlobalColors } from "../../constants/colors";

const Page = () => {
  const [weapons, setWeapons] = useState<weaponsCategDataModel[]>([]);
  const [filteredWeapon, setFitleredWeapon] = useState<weaponsCategDataModel[]>(
    []
  );
  const { weapon } = useLocalSearchParams();

  const getData = async () => {
    try {
      const respone = await fetch(mhweaponAPI);
      if (respone.ok) {
        const json = await respone.json();
        const newWeapon: weaponsCategDataModel[] = [];
        for (let val in json) {
          const weapon: weaponsCategDataModel = {
            id: json[val].id,
            name: json[val].name,
            type: json[val].type,
            url: "wew",
          };
          newWeapon.push(weapon);
        }
        setWeapons(newWeapon);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const newData = weapons.filter((item) => item.type == weapon);
    setFitleredWeapon(newData);
  }, [weapons]);

  return (
    <>
      <View style={{ backgroundColor: GlobalColors.black700 }}>
        <ListRenderer item={filteredWeapon} url="wat" />
      </View>
    </>
  );
};

export default Page;

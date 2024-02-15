import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Divider, Text } from "react-native-paper";
import { mhAPI } from "../../../constants/url-apis";
import { Monsters } from "../../../constants/model/Monsters";
import { mTypes } from "../../../constants/mTypes";
import CardPage from "../../../components/card";
import { GlobalColors } from "../../../constants/colors";

const Page = () => {
  const [data, setMonster] = useState<Monsters[]>([]);
  const [filteredMonster, setFilteredMonster] = useState<Monsters[]>([]);

  const getData = async () => {
    try {
      const respone = await fetch(mhAPI);
      if (respone.ok) {
        const json = await respone.json();
        const newMonster: Monsters[] = [];
        for (let val in json) {
          const monster: Monsters = {
            name: json[val].name,
            id: json[val].id,
            type: json[val].type,
            species: json[val].species,
          };
          newMonster.push(monster);
        }

        setMonster(newMonster);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const newData = data.filter((item) => item.type == mTypes.large);
    setFilteredMonster(newData);
  }, [data]);

  const dataHandler = ({ item }: { item: Monsters }) => {
    return <CardPage {...item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={filteredMonster}
        renderItem={dataHandler}
      />
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: GlobalColors.black700,
  },
});

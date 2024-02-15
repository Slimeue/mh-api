import { useEffect, useState } from "react";
import { Monsters } from "../../../constants/model/Monsters";
import { mhAPI } from "../../../constants/url-apis";
import { mTypes } from "../../../constants/mTypes";
import CardPage from "../../../components/card";

import { FlatList, StyleSheet, View } from "react-native";
import { GlobalColors } from "../../../constants/colors";

const SmallPage = () => {
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
    const newData = data.filter((item) => item.type == mTypes.small);
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

export default SmallPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: GlobalColors.black700,
  },
});

import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { Text, Card, Divider } from "react-native-paper";
import { data } from "../constants/mImages";
import { Monsters } from "../constants/model/Monsters";
import { GlobalColors } from "../constants/colors";

const CardPage = ({ name, species }: Monsters) => {
  const url = data.find((id) => id.id === name);

  const capitalizedSpecies = species.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );

  return (
    <>
      <View style={styles.container}>
        <Link href={`(details)/details`} asChild>
          <Pressable>
            <View style={styles.innerContainer}>
              <View style={styles.imageCont}>
                <View style={styles.innerImageCont}>
                  <Image style={styles.image} source={{ uri: url?.url }} />
                </View>
              </View>
              <View>
                <View>
                  <Text
                    variant="titleLarge"
                    style={{ color: GlobalColors.whiteTxt100 }}
                  >
                    {name}
                  </Text>
                </View>
                <View>
                  <Text style={{ color: GlobalColors.whiteTxt500 }}>
                    {capitalizedSpecies}
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        </Link>
      </View>
    </>
  );
};

export default CardPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderStyle: "dashed",
    padding: 20,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    height: 70,
    width: 70,
  },

  imageCont: {
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: "gray",
    padding: 5,
    marginRight: 5,
  },
  innerImageCont: {
    backgroundColor: GlobalColors.black700,
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
  },
});

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Downshift from "downshift";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  input: {
    minHeight: 44,
    fontSize: 20,
  },
  items: {
    borderWidth: 1,
    borderColor: "#ccc",
  },
  itemContainer: {
    minHeight: 44,
    justifyContent: "center",
  },
  itemText: {
    fontSize: 17,
  },
});

const Item = ({ selected, highlighted, item }) => (
  <View
    style={[
      styles.itemContainer,
      { backgroundColor: highlighted ? "gray" : "white" },
    ]}
  >
    <Text
      style={[styles.itemText, { fontWeight: selected ? "bold" : "normal" }]}
    >
      {item}
    </Text>
  </View>
);

const BasicAutocomplete = ({ items }) => (
  <Downshift
    render={({
      getRootProps,
      getInputProps,
      getItemProps,
      isOpen,
      inputValue,
      selectedItem,
      highlightedIndex,
    }) => (
      <View {...getRootProps(undefined, { suppressRefError: true })}>
        <TextInput
          clearButtonMode="while-editing"
          style={styles.input}
          {...getInputProps({ placeholder: "Favorite color?" })}
        />
        {isOpen ? (
          <View style={styles.items}>
            {items
              .filter(
                (i) =>
                  !inputValue ||
                  i.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((item, index) => {
                const props = getItemProps({ item, index });
                return (
                  <TouchableOpacity {...props} key={item}>
                    <Item
                      selected={selectedItem === item}
                      highlighted={highlightedIndex === index}
                      item={item}
                    />
                  </TouchableOpacity>
                );
              })}
          </View>
        ) : null}
      </View>
    )}
  />
);

const AutoInput = () => {
  return <BasicAutocomplete items={["red", "orange", "green"]} />;
};

export default AutoInput;

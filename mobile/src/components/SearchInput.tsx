import React from "react";
import { View, TextInput } from "react-native";
import { theme } from "../styles";

interface SeachProps {
  placeholder: string;
  search: string;
  setSearch: Function;
}

const SearchInput: React.FC<SeachProps> = ({
  search,
  setSearch,
  placeholder,
}) => {
  return (
    <View style={theme.inputContainer}>
      <TextInput
        style={theme.searchInput}
        placeholder={placeholder}
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
    </View>
  );
};

export default SearchInput;

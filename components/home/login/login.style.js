import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      margin: 20,
      borderWidth: 2,  // Debug border
      borderColor: 'blue',
    },
    welcomeMessage: {
      fontSize: 32,
      color: "red",
      textAlign: 'center',
      marginTop: 130,
      width: '100%',
      borderWidth: 2,  // Debug border
      borderColor: 'green',
    },
    selectMessage: {
      fontSize: 24,
      color: "red",
      textAlign: 'center',
      marginTop: 20,
      width: '100%',
      borderWidth: 2,  // Debug border
      borderColor: 'green',
    },
    dropdownMenu: {
        textAlign: 'center',
        marginTop: 20,
        width: '50%',
        borderWidth: 2,  // Debug border
        borderColor: 'green',
    },
    names: {
        textAlign: 'center',
        fontSize: 20,
        borderWidth: 2,  // Debug border
        borderColor: 'green',
        backgroundColor: "grey"
    },
    loginButton: {
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        borderWidth: 2,  // Debug border
        borderColor: 'yellow',
    },
    loginText: {
        fontSize: 24
    }
  });
  

export default styles;

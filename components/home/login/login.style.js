import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: 30,
      margin: 20,
    },
    welcomeMessage: {
      fontSize: 28,
      fontFamily: "DMBold",
      color: '#312651',
      textAlign: 'center',
      marginTop: 130,
      width: '100%',
      paddingHorizontal: 20,
    },
    selectMessage: {
      fontSize: 22,
      textAlign: 'center',
      marginTop: 20,
      width: '100%',
      paddingHorizontal: 20,
      fontFamily: "DMRegular",
    },
    dropdownMenu: {
        textAlign: 'center',
        marginTop: 20,
        width: "50%",
        borderWidth: 2,  // Debug border
        borderColor: 'grey',
        borderRadius: 10,
        backgroundColor: "darkgrey",
    },
    names: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: "DMRegular",
        borderWidth: 1,  // Debug border
        borderColor: 'grey',
        borderRadius: 5,
        backgroundColor: "lightgrey",
    },
    loginButton: {
        backgroundColor: "#FE7654",
        borderRadius: 16,
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    loginText: {
        fontSize: 16,
        color: "#F3F4F8",
        fontFamily: "DMBold"
    },
    selectedName: {
      fontFamily: "DMRegular",
      marginTop: 10,
    }
  });
  

export default styles;

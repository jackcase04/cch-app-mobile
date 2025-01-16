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
    },
    picker: {
      width: '70%',
      backgroundColor: '#f0f0f0',
      marginVertical: 10,
      color: 'black',
  }
  });
  

export default styles;

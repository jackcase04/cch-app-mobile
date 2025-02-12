import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: 30,
      margin: 20,
    },
    loadingcontainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
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
      marginBottom: 10,
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
      backgroundColor: '#eaeaea',
      marginVertical: 10,
      color: 'black',
      borderRadius: 16,
      elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
  }
  });
  

export default styles;

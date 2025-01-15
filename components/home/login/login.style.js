import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#eaeaea',
      borderRadius: 30,
      margin: 20,
    },
    welcomeMessage: {
      fontSize: 28,
      fontWeight: 'bold',
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
        borderWidth: 1,  // Debug border
        borderColor: 'grey',
        borderRadius: 5,
        backgroundColor: "lightgrey",
    },
    loginButton: {
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        
    },
    loginText: {
        fontSize: 24,
        color: '#007AFF',
    },
    selectedName: {
      marginTop: 10,
    }
  });
  

export default styles;

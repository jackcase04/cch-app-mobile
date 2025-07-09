import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: "black"
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
    },
    pickerWrapper: {
        alignItems: 'center',
    },
    pickerLabel: {
        fontSize: 16,
        fontFamily: "DMMedium",
        marginBottom: 5,
        color: "black"
    },
    picker: {
        width: 120,
        backgroundColor: '#f0f0f0',
        height: 90,
    },
    pickerItem: {
        color: 'black',
        fontSize: 10,
        height: 90,
    },
    timeDisplay: {
        fontSize: 18,
        fontFamily: "DMMedium",
        textAlign: 'center',
        marginTop: 20,
        color: "black"
    },
    ampmcontainer: {
        marginTop: 17,
      },
      ampmlabel: {
        fontSize: 18,
        marginBottom: 10,
      },
      radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
      },
      radioLabel: {
        fontSize: 16,
        marginLeft: 5,
      },
      selectedamValue: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
      },
      selectedbutton: {
        backgroundColor: "#532857",
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 3,
        marginTop: 10,
      },
      selectedtext: {
        fontFamily: "DMMedium",
        color: "white",
      },
      unselectedbutton: {
        backgroundColor: "#FE7654",
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 3,
        marginTop: 10,
      },
      unselectedtext: {
        fontFamily: "DMMedium",
        color: "white",
      },
      doneContainer: {
        flex: 1,
        alignItems: 'center',
      },
      done: {
        backgroundColor: "#FE7654",
        width: "30%",
        height: 40,
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10,
        alignItems: 'center',
      },
      doneText: {
        fontFamily: "DMMedium",
        fontSize: 16,
        color: "white",
      }
});

export default styles;
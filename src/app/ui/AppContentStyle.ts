import { StyleSheet } from "react-native";
import  Colors  from "../../features/config/Colors";

const AppContentStyle = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",

    },

    topBarIcon: {
        height: 42,
        width: 42,
        backgroundColor: "#bbb",
        marginHorizontal: 10,
    },

    pageWidget: {
        flex: 1,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#ffecd7",
    },

    textCard: {
        color: "#413737",
        fontSize: 16,
        fontWeight: 700,
        margin: 10,
    },

    preCardImage: {
        height: 100,
        width: 60,
        backgroundColor: "#e1c9f7",
        margin: 10
    },

    preCard: {
        width: 150,
        borderRadius: 20,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#f2ddfa9d",
        margin: 5,
    },

    bottomBarIcon: {
        height: 42,
        width: 42,
        backgroundColor: "#bbb",
        marginHorizontal: 10,
    },

    topBarTitle: {
        color: Colors.primaryTextColor,
        flex: 1,
        fontSize: 16,
        fontWeight: 700,
        textAlign: "center",
    },

    topBar: {
        height: 50,
        width: "100%",
        backgroundColor: "#333",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    bottomBar: {
        height: 60,
        width: "100%",
        backgroundColor: "#333",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    text: {
        color: Colors.primaryTextColor,
    }
})

export default AppContentStyle;
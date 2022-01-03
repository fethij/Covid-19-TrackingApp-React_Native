import {StyleSheet, Dimensions} from "react-native";

let deviceWidth = Dimensions.get("window").width;
let centerWidth = 0.75;

export default StyleSheet.create({
    p15: {
        padding: 15,
    },
    centenText: {
        textAlign: 'center',
    },
    home_block: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        backgroundColor: '#ffffff', 
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.5,
        elevation: 1,
        borderRadius: 5,
        marginTop: 5,
    }, 
    
    text_right: {
        textAlign: 'right'
    },

    image_width: {
        width: deviceWidth / 4,
    },
    

    pie_chart_text: {
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 5,
        paddingTop: 10,
        width: deviceWidth * 0.25,
        color: "#fff"
    },
    pie_chart_boxes: {
        paddingBottom: 10,
        marginLeft: 50,
        flexDirection: "row",
        width: deviceWidth / 5,
        height: 50
    },
});
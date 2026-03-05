import { Text } from "react-native";
import AppContentStyle from "./AppContentStyle";
import { View } from "react-native";

export default function AppContent() {
    
    return <View style={AppContentStyle.container}>
        <View style={AppContentStyle.topBar}>
            <View style={AppContentStyle.topBarIcon}></View>   
            <Text style={AppContentStyle.topBarTitle}>Mobile-P33</Text>
            <View style={AppContentStyle.topBarIcon}></View>
        </View>

        <View style={AppContentStyle.pageWidget}>
            <View style={AppContentStyle.preCard}>
                <View style={AppContentStyle.preCardImage}></View>
                <Text style={AppContentStyle.textCard}>Название</Text>
            </View>
            <View style={AppContentStyle.preCard}>
                <View style={AppContentStyle.preCardImage}></View>
                <Text style={AppContentStyle.textCard}>Название</Text>
            </View>
            <View style={AppContentStyle.preCard}>
                <View style={AppContentStyle.preCardImage}></View>
                <Text style={AppContentStyle.textCard}>Название</Text>
            </View>
            <View style={AppContentStyle.preCard}>
                <View style={AppContentStyle.preCardImage}></View>
                <Text style={AppContentStyle.textCard}>Название</Text>
            </View>
            <View style={AppContentStyle.preCard}>
                <View style={AppContentStyle.preCardImage}></View>
                <Text style={AppContentStyle.textCard}>Название</Text>
            </View>
            <View style={AppContentStyle.preCard}>
                <View style={AppContentStyle.preCardImage}></View>
                <Text style={AppContentStyle.textCard}>Название</Text>
            </View>
            <View style={AppContentStyle.preCard}>
                <View style={AppContentStyle.preCardImage}></View>
                <Text style={AppContentStyle.textCard}>Название</Text>
            </View>
            <View style={AppContentStyle.preCard}>
                <View style={AppContentStyle.preCardImage}></View>
                <Text style={AppContentStyle.textCard}>Название</Text>
            </View>
        </View>

        <View style={AppContentStyle.bottomBar}>
            <View style={AppContentStyle.bottomBarIcon}>
            </View>
            <View style={AppContentStyle.bottomBarIcon}>
            </View>
            <View style={AppContentStyle.bottomBarIcon}>
            </View>
            <View style={AppContentStyle.bottomBarIcon}>
            </View>
            <View style={AppContentStyle.bottomBarIcon}>
            </View>
        </View>
    </View>;
}
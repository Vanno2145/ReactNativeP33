import { Text, View } from "react-native";
import NotFoundStyle from "./ui/NotFoundStyle";

export function NotFound() {
    return <View style={NotFoundStyle.pageContainer}>
        <Text style={NotFoundStyle.textNotFound}>Page Not Found</Text>
    </View>;
}

export default NotFound;
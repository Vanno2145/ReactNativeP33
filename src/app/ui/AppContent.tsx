import { BackHandler, Text, Touchable, TouchableOpacity } from "react-native";
import AppContentStyle from "./AppContentStyle";
import { View } from "react-native";
import Home from "../../pages/home/Home";
import React, { useEffect, useState } from "react";
import IRoute from "../../features/model/IRoute";
import NotFound from "../../pages/notfound/NotFound";
import Calc from "../../pages/calc/Calc";
import { Image } from "react-native";

const startPage: IRoute = {
    slug: "home",
};

export default function AppContent() {
    const [history, setHistory] = useState<IRoute[]>([]);
    const [page, setPage] = useState<IRoute>(startPage);

    const navigate = (route: IRoute): void => {
        if(route.slug == "-1"){
            if(history.length > 0){
                const prevPage = history.pop();
                setPage(prevPage!);
                setHistory(history);
            }
            else{
                BackHandler.exitApp()    
            ;}
        }
        if(route.slug !== page.slug){
            setHistory([...history, page]);
            setPage(route);
        }
    }

    useEffect(() => {
        const handler = BackHandler.addEventListener(
            "hardwareBackPress", () => {
                navigate({slug: "-1"});
                return true;
            });
        return () => handler.remove();
    }, []);
    useEffect(() => {console.log(history)}, [history]);

    return <View style={AppContentStyle.container}>
        <View style={AppContentStyle.topBar}>
            <View style={AppContentStyle.topBarIcon}></View>   
            <Text style={AppContentStyle.topBarTitle}>Mobile-P33</Text>
            <View style={AppContentStyle.topBarIcon}></View>
        </View>

        <View style={AppContentStyle.pageWidget}>
            {page.slug == "home" ? <Home></Home> 
            : page.slug == "calc" ? <Calc></Calc> 
            : <NotFound></NotFound>}
        </View>

        <View style={AppContentStyle.bottomBar}>
            <TouchableOpacity onPress={() => navigate({slug: 'home'})}>
                <Image style={AppContentStyle.bottomBarIcon}
                source = {require('../assets/home.png')} />

            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate({slug: 'calc'})}>
                <Image style={AppContentStyle.bottomBarIcon}
                source = {require('../assets/calc.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate({slug: 'home'})}>
                <Image style={AppContentStyle.bottomBarIcon}
                source = {require('../assets/home.png')} />

            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate({slug: 'calc'})}>
                <Image style={AppContentStyle.bottomBarIcon}
                source = {require('../assets/calc.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate({slug: '-1'})}>
                <Image style={AppContentStyle.bottomBarIcon}
                source = {require('../assets/home.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate({slug: 'none'})}>
                <Image style={AppContentStyle.bottomBarIcon}
                source = {require('../assets/Mark.png')} />
            </TouchableOpacity>
        </View>

    </View>;
}
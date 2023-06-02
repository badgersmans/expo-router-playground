import { Tabs, useRouter } from "expo-router";
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default () => {
    return (
        <Tabs 
            screenOptions={{
                tabBarShowLabel: false,
                // tabBarActiveTintColor: 'red'
            }}
        >
            <Tabs.Screen 
                name="feed"
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="feed" size={24} color={color} />
                    ),
                    title: 'Feed',
                }}
            />

            <Tabs.Screen 
                name="search"
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="search" size={24} color={color} />
                    ),
                    title: 'Search'
                }}
            />

            <Tabs.Screen 
                name="messages"
                options={{
                    tabBarIcon: ({color}) => (
                        <Ionicons name="ios-chatbubbles-outline" size={24} color={color} />
                    ),
                    headerShown: false
                }}
            />
        </Tabs>
    )
}

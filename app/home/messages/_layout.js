import { Stack, useRouter } from "expo-router";
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default () => {
    return (
        <Stack 
            screenOptions={{
                // tabBarShowLabel: true,
                // tabBarActiveTintColor: 'red'
            }}
        >
            <Stack.Screen 
                name="index"
                options={{
                    title: 'Chats'
                }}
            />

            {/* <Stack.Screen 
                name="[id]"
                options={{
                    
                }}
            /> */}
        </Stack>
    )
}

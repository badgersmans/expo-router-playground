import { Stack, useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default () => {
    const router = useRouter();
    return (
        <Stack 
            screenOptions={{
                headerStyle: { backgroundColor: '#FFE030' },
                // headerTintColor: 'black',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
            }}
        >
            <Stack.Screen 
                name="index" 
                options={{
                    title: 'Home',
                    headerRight: () => (
                        <Ionicons 
                            name="ios-information-circle-outline" 
                            size={24} color="black" 
                            onPress={() => router.push('/modal')}
                        />
                    ),
                }}
            />

            <Stack.Screen 
                name="[username]" 
                options={{
                    headerStyle: { backgroundColor: 'green' },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }}
            />

            <Stack.Screen 
                name="modal" 
                options={{
                    presentation: 'modal',
                    headerStyle: { backgroundColor: 'pink' },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        // fontWeight: 'bold',
                    }
                }}
            />

            <Stack.Screen 
                name="home"
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    )
}
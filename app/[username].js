import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useRouter, useSearchParams } from 'expo-router'
import { Stack } from "expo-router";

const profile = () => {
    const router = useRouter();
    const { username } = useSearchParams();

  return (
    <SafeAreaView>

      <Stack.Screen 
        options={{
          title: `${username}`,
        }}
      />

        {/* <Button title='Go Back' onPress={() => router.back()}/> */}
      <Text>Hello @{username}</Text>
    </SafeAreaView>
  )
}

export default profile
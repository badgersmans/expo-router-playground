import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const profile = () => {
    const router = useRouter();
  return (
    <SafeAreaView>
        <Button title='Go Back' onPress={() => router.back()}/>
      <Text>profile</Text>
    </SafeAreaView>
  )
}

export default profile
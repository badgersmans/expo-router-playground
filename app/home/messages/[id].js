import { View, Text } from 'react-native'
import React from 'react'
import { useSearchParams } from 'expo-router'

const ChatRoom = () => {
  const { id } = useSearchParams();
  return (
    <View>
      <Text>Chat id: {id}</Text>
    </View>
  )
}

export default ChatRoom
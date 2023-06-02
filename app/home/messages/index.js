import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Messages = () => {
  return (
    <View>
        <Link href={`/home/messages/123`}>Chat with lkm</Link>
        <Link href={`/home/messages/456`}>Chat with kjnkjn</Link>
        <Link href={`/home/messages/789`}>Chat with iuhoiuh</Link>
    </View>
  )
}

export default Messages
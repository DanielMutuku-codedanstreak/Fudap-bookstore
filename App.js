import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'

export default function App() {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])  
 

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <h2>Welcome to Our Bookstore</h2>
      <Text>Sorry the App is still in mainteinance mode</Text>
    </View>)
 
}


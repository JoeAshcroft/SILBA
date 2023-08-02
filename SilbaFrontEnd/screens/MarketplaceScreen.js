import { View, Text, ScrollView} from 'react-native'
import React from 'react'
import MarketCard from '../marketplace-card/MarketCard'


export default function MarketplaceScreen() {
    return (
        <ScrollView style={{flex:1}}>
          <Text>Marketplace Screen</Text>
          <MarketCard/>
        </ScrollView>
    )
}
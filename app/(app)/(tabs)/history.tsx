import HistoryCard from '@/components/HistoryCard';
import React from 'react';
import { View } from 'react-native';

const HistoryScreen = () => {
  return (
    <View>
      <View className='mt-4'>
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </View>
    </View>
  )
}

export default HistoryScreen;

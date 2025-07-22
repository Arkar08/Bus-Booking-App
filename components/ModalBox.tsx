import useSeat from '@/store/useSeat';
import React from 'react';
import { Alert, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ModalProps {
    children:React.ReactNode
}

const ModalBox = ({children}:ModalProps) => {

  const {modalVisiable,closeModal} = useSeat()

  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Modal  
            animationType="slide"
            visible={modalVisiable}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                closeModal()
            }}>
            {children}
        </Modal>
    </SafeAreaView>
  )
}

export default ModalBox


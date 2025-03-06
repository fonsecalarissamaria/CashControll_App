import { Avatar, Divider, Input, Text, Button, Box } from 'native-base';
import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserContext } from '../contexts/UserContext';
import { Alert } from 'react-native';


interface ProfileScreenProps {    
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
    const { limit, setLimit } = useContext(UserContext);
    // const [newLimit, setNewLimit] = useState<string>('');
    const [newLimit, setNewLimit] = React.useState("");

    const handleLimitChange = () => {
        const parsedLimit = parseFloat(newLimit);
        if (!isNaN(parsedLimit)) {
            setLimit(parsedLimit);
        }
    };

    const [meta, setMeta] = useState('');

  const handleSetLimit = () => {
    const limit = parseFloat(meta);
    if (isNaN(limit) || limit <= 0) {
      Alert.alert('Erro', 'Por favor, insira um valor válido para o limite.');
      return;
    }

    // Função para definir o limite mensal com o valor convertido
    setLimit(limit);
    setMeta('');
  };
    

    return (
        <SafeAreaView >
            <Avatar
                bg="green.600"
                alignSelf="center"
                size="2xl"
                source={{
                    uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                }}
                mt={10}
            >
                LF
            </Avatar>
            <Text fontSize="xl" textAlign="center" mt={4}>
                Larissa Fonseca
            </Text>

            <Divider my={20} />

            <Text bold fontSize="md" textAlign="center" my={10}>
                Limite atual: R$ {limit} reais
            </Text>

            <Box mx={20}>
      <Input bgColor='#d1fae5' alignSelf="center"
        mx="3"
        placeholder="Inserir novo limite"
        w="100%"
        value={meta}
        onChangeText={setMeta}
        keyboardType="numeric"
      />
      <Button my={15} alignSelf="center" onPress={handleSetLimit}>
        Definir Limite
      </Button>
    </Box>
                
        </SafeAreaView>
    );

    
};

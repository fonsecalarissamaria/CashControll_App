import { Box, Text, VStack, useToast} from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import { HStack } from 'native-base';
import { Button } from "native-base";
import { UserContext } from '../contexts/UserContext';
import { StyleSheet } from 'react-native'
let styles = {}


interface IDashboardProps {
    
}

export const Dashboard: React.FC<IDashboardProps> = () => {
    const [amount, setAmount] = useState<number>(100);
    const [money, setMoney] = useState<number>(0); 
    /*const [limit, setLimit] = useState<number>(5000);*/
    const {limit} = useContext(UserContext);
    
    const toast = useToast();

    const handleMoney = () => {
        
        setMoney(money + amount);
        toast.show({
            description: `Você gastou R$${amount} reais`
          })
    };

    const handleChangeAmount = (quantity: number) => {
        setAmount(quantity); 
    };

    useEffect(() => {
        if(money >= limit)
        {
            toast.show({
                description: "Você atingiu o seu limite mensal",
                placement: "top",
                colorScheme: "maximum",
            })
        }
    }, [money]);

    return (
        
        <VStack bgColor='#d1fae5' flex={1} width='100%' justifyContent='space-between' alignItems='center' p={4} my={30}>   

            <Text bold style={{ fontSize: 13}}>
            {' '} Gasto de R$ {amount} reais
            </Text>


            <VStack>
                <HStack alignItems="center" justifyContent="center">
                <Text bold style={{ fontSize: 21}}>
                    {money}
                </Text>

                <Text bold style={{ fontSize: 15}}>
                {' '} / {' '} R$ {limit} 
                </Text>
                </HStack>

                <Button
                    mt={1}
                    colorScheme="green"
                    onPress={()=>{
                        handleMoney();
                    }}
                
                >
                    Inserir Gastos
                </Button>
            </VStack>


            <Box mt={9}>
                <Button.Group >
                    <Button onPress={() => handleChangeAmount(100)} colorScheme="teal">Gastar R$ 100</Button>
                    <Button onPress={() => handleChangeAmount(500)} colorScheme="teal">Gastar R$ 500</Button>
                    <Button  onPress={() => handleChangeAmount(1000)} colorScheme="teal">Gastar R$ 1000</Button>
                </Button.Group>
            </Box>
        
        
        </VStack>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

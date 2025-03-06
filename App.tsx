import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Container, NativeBaseProvider } from 'native-base';
import { Routes } from './src/routes/routes';
import { UserProvider } from './src/contexts/UserContext';
import { background } from 'native-base/lib/typescript/theme/styled-system';


export default function App() {
  return (
    
      <NativeBaseProvider>
        <UserProvider>
          <StatusBar style="auto" />
          <Routes>
          </Routes>
        </UserProvider>
      </NativeBaseProvider>
    
  );
}



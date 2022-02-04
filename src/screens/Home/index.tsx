import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import {
  Container, Header,TotalCars,HeaderContent
} from './styles';

export function Home(){
  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao Dia',
      price: 120,
    },
    thumbnail: 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png',
  }
  const carDataOne = {
    brand: 'Porsche',
    name: 'Panamera',
    rent: {
      period: 'Ao Dia',
      price: 340,
    },
    thumbnail: 'https://purepng.com/public/uploads/large/purepng.com-porsche-panamera-white-carcarvehicletransportporsche-961524659258pfvb8.png'
  }

  return (
    <Container>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
        <Header>
         <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 Carros
          </TotalCars>
         </HeaderContent> 
        </Header>
        <Car data={carData}/>  
        <Car data={carDataOne}/>   
    </Container>
  );
}
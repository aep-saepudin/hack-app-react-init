import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { Container, Header, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Profile from './src/screen/Profile'
import SingleItem from './src/components/SingleItem'

export default SingleItem

export  class LayoutExample extends Component {
  render() {
    return (
      <Container>
        <Header />
          <Grid >
            <Row style={[styles.kotak]}>
              <Text>Perencanaan</Text>
            </Row>
            <Row style={[styles.kotak]}>
              <Text>Minat</Text>
            </Row>
            <Row style={[styles.kotak]}>
              <Text>Kontak</Text>
            </Row>
          </Grid>
      </Container>
    );
  }
}


const styles = StyleSheet.create({ 
  kotak : {
    borderColor: 'black', 
    borderWidth:1, 
    borderStyle:"dotted", 
    alignItems:'center', 
    justifyContent:'center'
  }
})
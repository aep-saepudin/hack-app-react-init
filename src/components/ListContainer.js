import React, { Component } from 'react'
import {  Content } from 'native-base'

import ItemCardRating from './SingleItem'


export default class ListCardRating extends Component {
  static defaultProps = {
    items      : [
      {
        title      : 'Bandung',
        rating     : 4,
        items      : ["gasibu", "Banda Pos"],
        onClickCopy: () => alert('hello')
      },
      {
        title      : 'Jakarta',
        rating     : 3.5,
        items      : ["monas", "Dufan"],
        onClickCopy: () => alert('jakarte')      }
    ]
  }

  render() {
      const mapped = this.props.items.map((el, i)=> <ItemCardRating key={i.toString()} title={el.title} rating={el.rating} items={el.items} onClickCopy={el.onClickCopy}/>)
      return (
        <Content>
          {mapped}
        </Content>
      )
  }
}
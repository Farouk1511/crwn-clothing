import React from "react";
import SHOP_DATA from "./shop.data";
import '../../components/preview-collection/collection-preview.component'
import CollectionPreview from "../../components/preview-collection/collection-preview.component";
class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render(){
      const {collections} = this.state
      return (
          <div className='shoip-page'>
              {
                  collections.map(({id,...otherCollectionProps})=>(
                      <CollectionPreview key={id} {...otherCollectionProps}/>
                  ))
              }
          </div>
      )
     
  }
}

export default ShopPage
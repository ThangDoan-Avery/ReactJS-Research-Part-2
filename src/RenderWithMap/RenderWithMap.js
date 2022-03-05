import React, { Component } from 'react';

export default class RenderWithMap extends Component {
  arrProduct = [
    {
      id: 1,
      name: 'Iphone Xs',
      price: 2000,
      img: 'https://picsum.photos/id/1/200',
    },
    {
      id: 2,
      name: 'Iphone 11',
      price: 3000,
      img: 'https://picsum.photos/id/2/200',
    },
    {
      id: 3,
      name: 'Iphone 12',
      price: 4000,
      img: 'https://picsum.photos/id/3/200',
    },
    {
      id: 4,
      name: 'Iphone 13',
      price: 5000,
      img: 'https://picsum.photos/id/4/200',
    },
  ];
  renderTable = () => {
    // let arrTagProduct = [];
    // for (let prod of this.arrProduct) {
    //   let productItem = (
    //     <tr>
    //       <td>{prod.id}</td>
    //       <td>{prod.name}</td>
    //       <td>{prod.price}</td>
    //       <td>
    //         <img src={prod.img} width={50} alt='...' />
    //       </td>
    //     </tr>
    //   );
    //   arrTagProduct.push(productItem);
    // }
    // return arrTagProduct;
    let arrTagJSX = this.arrProduct.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img src={product.img} width={50} alt='...' />
          </td>
        </tr>
      );
    });
    return arrTagJSX;
  };
  render() {
    return (
      <div className='container'>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>name</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}

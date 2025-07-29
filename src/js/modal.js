import refs from './refs';


export function modalProductRender(product) {
    const { images,
        description,
        title,
        tags = 'Not specified',
        shippingInformation = 'Not specified',
        returnPolicy = 'Not specified',
        price } = product;
    const markup = `
<img class="modal-product__img" src="${images[0]}" alt="${title}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${title}</p>
        <ul class="modal-product__tags">
    ${tags.map(tag => `<li class="modal-product__tag">${tag}</li>`).join('')}</ul>
        <p class="modal-product__description">${description}</p>
        <p class="modal-product__shipping-information">Shipping:${shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy:${returnPolicy}</p>
        <p class="modal-product__price">Price: ${price}$</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`;
    console.log('Product received:', product);
    document.querySelector('.modal-product').innerHTML = markup;
}
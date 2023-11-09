export const getImageName = (data) => {
    const productImages = require.context('../assets/products', true);
    const imgName = data.substring(data.lastIndexOf('/') + 1);
   return productImages(`./${imgName}`)
}
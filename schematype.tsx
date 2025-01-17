export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Product Name',
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Product Price',
        },
        {
            name: 'discountPercentage',
            type: 'number',
            title: 'Discount Percentage',
        },
        {
            name: 'priceWithoutDiscount',
            type: 'number',
            title: 'Price Without Discount',
            description: 'Original price before discount'
        },
        {
            name:'rating',
            type:'number',
            title:'Rating',
            description:'Rating of the product'
        },
        {
            name: 'ratingCount',
            type: 'number',
            title: 'Rating Count',
            description: 'Number of ratings'
      }

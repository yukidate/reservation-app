const Product = require('./model/product')

class FakeDb{
    constructor(){
        this.products= [
            {
                coverImage: '../../../assets/img/phone.png',
                name: 'Photo XL',
                price: '799',
                description: 'A large size with one of the best screens',
                heding1: 'サンプル1',
                heding2: 'サンプル2',
                heding3: 'サンプル3',
                headingtext1: 'サンプル1 サンプル1 サンプル1 サンプル1 サンプル1 サンプル1',
                headingtext2: 'サンプル1 サンプル1 サンプル1 サンプル1 サンプル1 サンプル1',
                headingtext3: 'サンプル1 サンプル1 サンプル1 サンプル1 サンプル1 サンプル1',
            },
            {
                coverImage: '../../../assets/img/phone.png',
                name: 'Photo Mini',
                price: '699',
                description: 'A great phone with one of the best cameras',
                heding1: 'サンプル1',
                heding2: 'サンプル2',
                heding3: 'サンプル3',
                headingtext1: 'サンプル1 サンプル1 サンプル1 サンプル1 サンプル1 サンプル1',
                headingtext2: 'サンプル1 サンプル1 サンプル1 サンプル1 サンプル1 サンプル1',
                headingtext3: 'サンプル1 サンプル1 サンプル1 サンプル1 サンプル1 サンプル1',
            },
            {
                coverImage: '../../../assets/img/phone.png',
                name: 'Photo Standard',
                price: '299',
                description: '',
                heding1: 'サンプル1',
                heding2: 'サンプル2',
                heding3: 'サンプル3',
                headingtext1: 'サンプル1 サンプル1 サンプル1 サンプル1 サンプル1 サンプル1',
                headingtext2: 'サンプル1 サンプル1 サンプル1 サンプル1 サンプル1 サンプル1',
                headingtext3: 'サンプル1 サンプル1 サンプル1 サンプル1 サンプル1 サンプル1',
            },
            {
                coverImage: '../../../assets/img/phone.png',
                name: 'Photo Special',
                price: '999',
                description: '',
                heding1: 'サンプル1',
                heding2: 'サンプル2',
                heding3: 'サンプル3',
                headingtext1: 'サンプル1 サンプル1 サンプル1 サンプル1 サンプル1 サンプル1',
                headingtext2: 'サンプル1 サンプル1 サンプル1 サンプル1 サンプル1 サンプル1',
                headingtext3: 'サンプル1 サンプル1 サンプル1 サンプル1 サンプル1 サンプル1',
            },
        ]
    }

    async initDb(){
        await this.cleanDb()
        this.pushProductsToDb()
    }
    async cleanDb(){
        await Product.deleteMany({})
    }

    pushProductsToDb(){
        this.products.forEach(
            (product) =>{
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb(){
        this.pushProductsToDb()
    }
}

module.exports = FakeDb
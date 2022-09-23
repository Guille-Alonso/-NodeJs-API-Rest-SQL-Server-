export default{
    getAllProduct: 'SELECT * FROM Products',
    addNewProduct: 'INSERT INTO Products (name, description,quantity) VALUES (@name,@description,@quantity)',
    getProductByid: 'SELECT * FROM Products WHERE id = @id',
    deleteProduct: 'DELETE FROM Products WHERE Id = @Id',
    getTotalProducts: 'SELECT COUNT(*) FROM Products',
    updateProductById:
    "UPDATE [appback].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
};
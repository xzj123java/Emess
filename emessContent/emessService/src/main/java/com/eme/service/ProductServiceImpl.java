package com.eme.service;

import com.eme.mapper.IProductMapper;
import com.eme.pojo.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements IProductService {

    @Autowired
    private IProductMapper productMapper;

    @Override
    public int countByProduct(Product product) {
        return productMapper.countByProduct(product);
    }

    @Override
    public int deleteByPrimaryKey(Integer prid) {
        return productMapper.deleteByPrimaryKey(prid);
    }

    @Override
    public int insert(Product product) {
        return productMapper.insert(product);
    }

    @Override
    public List<Product> selectAllProduct() {
        return productMapper.selectAllProduct();
    }

    @Override
    public List<Product> selectByMess(Product product) {
        return productMapper.selectByMess(product);
    }

    @Override
    public Product selectByPrimaryKey(Integer prid) {
        return productMapper.selectByPrimaryKey(prid);
    }

    @Override
    public int updateByProduct(Product oldProduct, Product newProduct) {
        return productMapper.updateByProduct(oldProduct,newProduct);
    }

    @Override
    public int updateByPrimaryKey(Product product) {
        return productMapper.updateByPrimaryKey(product);
    }
}

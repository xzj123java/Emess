package com.eme.mapper;

import com.eme.pojo.Product;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface IProductMapper {
    int countByProduct(Product product);

    int deleteByPrimaryKey(Integer prid);

    int insert(Product product);

    List<Product> selectAllProduct();

    List<Product> selectByMess(Product product);

    Product selectByPrimaryKey(Integer prid);

    int updateByProduct(@Param("record") Product oldProduct, @Param("example") Product newProduct);

    int updateByPrimaryKey(Product product);
}
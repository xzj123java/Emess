package com.eme.controller;

import com.eme.pojo.Product;
import com.eme.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
public class ProductController {

    @Resource
    private IProductService productService;

    @RequestMapping("Product")
    @ResponseBody
    public List<Product> getAllProduct(){
        return productService.selectAllProduct();
    }
/*
    @RequestMapping("/selectByMess")
    @ResponseBody
    public List<Product> selectByMess(HttpServletRequest request, Model model){
        String prtype = request.getParameter("prtype");
        String prarea = request.getParameter("prarea");
        Product pd = new Product();
        pd.setPrtype(prtype);
        pd.setPrarea(prarea);
        List<Product> products = productService.selectByMess(pd);
        return products;
    }*/
}

package com.example.blogapp.controller;

import com.example.blogapp.entity.Blog;
import com.example.blogapp.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blogs")
public class BlogController {

    @Autowired
    private BlogService blogService;

    @PostMapping
    public Blog create(@RequestBody Blog blog) {
        return blogService.createBlog(blog);
    }

    @GetMapping("/published")
    public List<Blog> publishedBlogs() {
        return blogService.getPublishedBlogs();
    }
}

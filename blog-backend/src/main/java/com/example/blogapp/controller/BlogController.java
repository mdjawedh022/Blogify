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

    // CREATE
    @PostMapping
    public Blog create(@RequestBody Blog blog) {
        return blogService.createBlog(blog);
    }

    // READ - published blogs
    @GetMapping("/published")
    public List<Blog> publishedBlogs() {
        return blogService.getPublishedBlogs();
    }

    // READ - blog detail by ID ✅
    @GetMapping("/{id}")
    public Blog getBlogById(@PathVariable Long id) {
        return blogService.getBlogById(id);
    }

    // UPDATE
    @PutMapping("/{id}")
    public Blog update(@PathVariable Long id, @RequestBody Blog blog) {
        return blogService.updateBlog(id, blog);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        blogService.deleteBlog(id);
        return "Blog deleted successfully";
    }
}

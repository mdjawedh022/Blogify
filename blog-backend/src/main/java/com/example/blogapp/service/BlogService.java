package com.example.blogapp.service;

import com.example.blogapp.entity.Blog;
import com.example.blogapp.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogService {

    @Autowired
    private BlogRepository blogRepo;

    public Blog createBlog(Blog blog) {
        return blogRepo.save(blog);
    }

    public List<Blog> getPublishedBlogs() {
        return blogRepo.findByPublishedTrue();
    }
}

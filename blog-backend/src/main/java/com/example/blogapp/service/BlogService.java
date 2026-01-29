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

    // CREATE
    public Blog createBlog(Blog blog) {
        return blogRepo.save(blog);
    }

    // READ - published blogs
    public List<Blog> getPublishedBlogs() {
        return blogRepo.findByPublishedTrue();
    }

    // READ - blog detail by ID ✅
    public Blog getBlogById(Long id) {
        return blogRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Blog not found with id " + id));
    }

    // UPDATE
    public Blog updateBlog(Long id, Blog updatedBlog) {
        Blog existingBlog = blogRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Blog not found with id " + id));

        existingBlog.setTitle(updatedBlog.getTitle());
        existingBlog.setContent(updatedBlog.getContent());
        existingBlog.setPublished(updatedBlog.isPublished());

        return blogRepo.save(existingBlog);
    }

    // DELETE
    public void deleteBlog(Long id) {
        if (!blogRepo.existsById(id)) {
            throw new RuntimeException("Blog not found with id " + id);
        }
        blogRepo.deleteById(id);
    }
}

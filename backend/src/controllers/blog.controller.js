const Blog = require("../models/Blog.model");

/* ══════════════════════════════════════
   GET /api/blog
   Get blog post registry lists
══════════════════════════════════════ */
exports.getBlogs = async (req, res, next) => {
    try {
        const query = {};

        // Public feed filters out unpublished articles
        if (!req.query.all) {
            query.isPublished = true;
        }

        const posts = await Blog.find(query).sort({ publishedAt: -1, createdAt: -1 });

        res.status(200).json({
            success: true,
            count: posts.length,
            data: posts,
        });
    } catch (error) {
        next(error);
    }
};

/* ══════════════════════════════════════
   GET /api/blog/:slug
   Get a specific blog post by its unique URL slug
══════════════════════════════════════ */
exports.getBlogBySlug = async (req, res, next) => {
    try {
        const { slug } = req.params;

        const post = await Blog.findOne({ slug });

        if (!post) {
            return res.status(404).json({ success: false, error: "Blog post not found" });
        }

        res.status(200).json({
            success: true,
            data: post,
        });
    } catch (error) {
        next(error);
    }
};

/* ══════════════════════════════════════
   POST /api/blog
   Create new article entry
══════════════════════════════════════ */
exports.createBlog = async (req, res, next) => {
    try {
        const { title, excerpt, content, thumbnail, author, tags, isPublished } = req.body;

        const blogData = {
            title,
            excerpt,
            content,
            thumbnail,
            author,
            tags,
            isPublished: isPublished || false,
        };

        if (blogData.isPublished) {
            blogData.publishedAt = Date.now();
        }

        const post = await Blog.create(blogData);

        res.status(201).json({
            success: true,
            message: "Blog post published successfully",
            data: post,
        });
    } catch (error) {
        next(error);
    }
};

/* ══════════════════════════════════════
   PUT /api/blog/:id
   Update a specific blog post by id
══════════════════════════════════════ */
exports.updateBlog = async (req, res, next) => {
    try {
        const { id } = req.params;

        let post = await Blog.findById(id);

        if (!post) {
            return res.status(404).json({ success: false, error: "Blog post not found" });
        }

        // If post is being published for the first time, record publication date
        if (req.body.isPublished && !post.isPublished) {
            req.body.publishedAt = Date.now();
        }

        post = await Blog.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            success: true,
            message: "Blog post updated successfully",
            data: post,
        });
    } catch (error) {
        next(error);
    }
};

/* ══════════════════════════════════════
   DELETE /api/blog/:id
   Remove a blog article permanently
══════════════════════════════════════ */
exports.deleteBlog = async (req, res, next) => {
    try {
        const { id } = req.params;

        const post = await Blog.findById(id);

        if (!post) {
            return res.status(404).json({ success: false, error: "Blog post not found" });
        }

        await post.deleteOne();

        res.status(200).json({
            success: true,
            message: "Blog post deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

const { readDB, writeDB } = require("./dbHelper");

class BlogModel {
    static find(query = {}) {
        return {
            sort: async function () {
                const db = await readDB();
                let posts = db.blog || [];
                if (query.isPublished !== undefined) {
                    posts = posts.filter(p => p.isPublished === query.isPublished);
                }
                posts.sort((a, b) => {
                    const dateA = a.publishedAt ? new Date(a.publishedAt) : new Date(a.createdAt);
                    const dateB = b.publishedAt ? new Date(b.publishedAt) : new Date(b.createdAt);
                    return dateB - dateA;
                });
                return posts;
            },
            then: async function (resolve) {
                const db = await readDB();
                let posts = db.blog || [];
                if (query.isPublished !== undefined) {
                    posts = posts.filter(p => p.isPublished === query.isPublished);
                }
                resolve(posts);
            }
        };
    }

    static async findOne({ slug }) {
        const db = await readDB();
        const post = db.blog.find(p => p.slug === slug);
        return post || null;
    }

    static async findById(id) {
        const db = await readDB();
        const post = db.blog.find(p => String(p.id) === String(id));
        if (!post) return null;

        return {
            ...post,
            deleteOne: async function () {
                const dbLatest = await readDB();
                dbLatest.blog = dbLatest.blog.filter(p => String(p.id) !== String(id));
                await writeDB(dbLatest);
            }
        };
    }

    static async create(data) {
        const db = await readDB();

        // Safe auto slug generation
        const slug = data.slug || data.title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim();

        const newPost = {
            id: String(Date.now()),
            title: data.title,
            slug,
            excerpt: data.excerpt || "",
            content: data.content,
            thumbnail: data.thumbnail || "",
            author: data.author || "Ms Online Team",
            tags: Array.isArray(data.tags) ? data.tags : [],
            isPublished: !!data.isPublished,
            publishedAt: data.isPublished ? new Date().toISOString() : null,
            createdAt: new Date().toISOString()
        };

        db.blog.push(newPost);
        await writeDB(db);
        return newPost;
    }

    static async findByIdAndUpdate(id, updateData, options = {}) {
        const db = await readDB();
        const index = db.blog.findIndex(p => String(p.id) === String(id));
        if (index === -1) return null;

        const updated = {
            ...db.blog[index],
            ...updateData,
            updatedAt: new Date().toISOString()
        };

        db.blog[index] = updated;
        await writeDB(db);
        return updated;
    }
}

module.exports = BlogModel;

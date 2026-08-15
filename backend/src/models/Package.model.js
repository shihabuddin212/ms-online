const { readDB, writeDB } = require("./dbHelper");

class PackageModel {
    static find(query = {}) {
        return {
            sort: async function (sortOpts) {
                const db = await readDB();
                let packages = db.packages;
                if (query.service) {
                    packages = packages.filter(p => p.service === query.service);
                }
                if (query.isActive !== undefined) {
                    packages = packages.filter(p => p.isActive === query.isActive);
                }
                packages.sort((a, b) => {
                    const sortOrderA = a.sortOrder || 0;
                    const sortOrderB = b.sortOrder || 0;
                    if (sortOrderA !== sortOrderB) {
                        return sortOrderA - sortOrderB;
                    }
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                return packages;
            },
            then: async function (resolve) {
                const db = await readDB();
                let packages = db.packages;
                if (query.service) {
                    packages = packages.filter(p => p.service === query.service);
                }
                if (query.isActive !== undefined) {
                    packages = packages.filter(p => p.isActive === query.isActive);
                }
                resolve(packages);
            }
        };
    }

    static async findById(id) {
        const db = await readDB();
        const pkg = db.packages.find(p => String(p.id) === String(id));
        if (!pkg) return null;

        return {
            ...pkg,
            deleteOne: async function () {
                const dbLatest = await readDB();
                dbLatest.packages = dbLatest.packages.filter(p => String(p.id) !== String(id));
                await writeDB(dbLatest);
            }
        };
    }

    static async create(data) {
        const db = await readDB();

        const newPkg = {
            id: String(Date.now()),
            service: data.service,
            name: data.name,
            tagline: data.tagline || "",
            price: data.price,
            speed: data.speed || "",
            features: Array.isArray(data.features) ? data.features : [],
            image: data.image || "",
            ctaLink: data.ctaLink || "/contact",
            isPopular: !!data.isPopular,
            isActive: data.isActive !== false,
            sortOrder: Number(data.sortOrder) || 0,
            color: data.color || "#6b7280",
            period: data.period || "Per Month",
            createdAt: new Date().toISOString()
        };

        db.packages.push(newPkg);
        await writeDB(db);
        return newPkg;
    }

    static async findByIdAndUpdate(id, updateData, options = {}) {
        const db = await readDB();
        const index = db.packages.findIndex(p => String(p.id) === String(id));
        if (index === -1) return null;

        const updated = {
            ...db.packages[index],
            ...updateData,
            updatedAt: new Date().toISOString()
        };

        db.packages[index] = updated;
        await writeDB(db);
        return updated;
    }
}

module.exports = PackageModel;

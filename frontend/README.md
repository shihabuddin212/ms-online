# Ms Online - High Speed Broadband ISP

A modern, fast, and fully dynamic web application for Ms Online - a premium Internet Service Provider (ISP). Built with a professional tech stack and a fully integrated Custom Content Management System (CMS).

## 🚀 Technology Stack

### **Frontend Architecture**
- **Framework:** Next.js (App Router)
- **UI Library:** React.js
- **Styling:** Tailwind CSS (for highly responsive, modern, and utility-first UI/UX)
- **Icons:** Lucide React & Custom SVGs
- **Layout & Structure:** Centralized Container layout for pixel-perfect device responsiveness.

### **Backend Architecture (Node.js)**
- **API Engine:** Next.js API Routes (Node.js endpoints natively running inside `/src/app/api`)
- **File Upload Engine:** Custom built Node.js `fs/promises` implementation for handling `multipart/form-data` APIs. Uploads are parsed and saved seamlessly to the `/public/uploads` directory.
- **Data Fetching:** Utilizing Next.js Async Server Components for instant Server-Side generation, providing lightning-fast loading speeds and pristine SEO integration.

### **Database Model & Structure**
- **Datastore Engine:** Local JSON File-System Database (`data.json`)
- **Architecture Type:** Document-style NoSQL paradigm
- **Efficiency:** Utilizes Node's non-blocking file-system (`readFile` / `writeFile`) to act as a lightweight, low-latency datastore. It eliminates heavy SQL configuration layers to ensure the application starts instantly and stays ultra-portable.
- **CMS Integration (Admin Panel):** The database directly feeds the custom Next.js Admin Dashboard (`/admin`). Operations done in the admin panel immediately read/write to the JSON database—updating live production components like "Home Internet Packages" dynamically.

---

## 🛠️ Getting Started Locally

1. **Install the dependencies:**
   ```bash
   npm install
   ```

2. **Run the local development server:**
   ```bash
   npm run dev
   ```

3. **Access the Application:**
   - **Frontend:** [http://localhost:3000](http://localhost:3000)
   - **Backend Admin (CMS):** [http://localhost:3000/admin](http://localhost:3000/admin)

## 📁 Key Directories
- `/src/app/admin/*` - Contains the complete CMS Dashboard routing and layout tools.
- `/src/app/api/*` - The Node.js REST API endpoints connecting the Frontend to the Backend Data.
- `/data.json` - The root database storing dynamic JSON information for the modules.

---

## 🔐 Administrative Credentials

To access the newly constructed admin control panel, use the following credentials:
- **Sign-in Link:** [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
- **Default Email:** `admin@msonline.com`
- **Default Password:** `Admin@123`

*Note: Credentials can be configured by modifying the `admin` node inside `/data.json`.*


const express = require("express");
const router = express.Router();

/* ══════════════════════════════════════
   GET /admin  →  redirect to login
══════════════════════════════════════ */
router.get("/", (req, res) => res.redirect("/admin/login"));

/* ══════════════════════════════════════
   GET /admin/login  →  Login HTML Page
══════════════════════════════════════ */
router.get("/login", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(loginPage());
});

/* ══════════════════════════════════════
   GET /admin/dashboard  →  CMS Dashboard
══════════════════════════════════════ */
router.get("/dashboard", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(dashboardPage());
});

/* ══════════════════════════════════════
   LOGIN HTML TEMPLATE
══════════════════════════════════════ */
function loginPage() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin Login | Ms Online</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Plus Jakarta Sans',sans-serif;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#08101f;overflow:hidden}
  body::before{content:'';position:fixed;top:-20%;left:-10%;width:60vw;height:60vw;background:radial-gradient(circle,rgba(79,70,229,.18) 0,transparent 65%);pointer-events:none;z-index:0}
  body::after{content:'';position:fixed;bottom:-20%;right:-10%;width:55vw;height:55vw;background:radial-gradient(circle,rgba(99,102,241,.14) 0,transparent 65%);pointer-events:none;z-index:0}
  .wrap{position:relative;z-index:1;width:100%;max-width:420px;padding:1rem}
  .card{background:rgba(15,23,42,.85);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:2.5rem;box-shadow:0 32px 64px rgba(0,0,0,.45);backdrop-filter:blur(20px)}
  .logo{display:flex;align-items:center;gap:.75rem;margin-bottom:2rem}
  .logo-box{width:40px;height:40px;background:linear-gradient(135deg,#4f46e5,#818cf8);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;box-shadow:0 6px 16px rgba(79,70,229,.4)}
  .logo h1{font-size:1.25rem;font-weight:800;color:#f8fafc;letter-spacing:-.4px}
  .logo p{font-size:.7rem;color:#64748b;font-weight:600;letter-spacing:.06em;text-transform:uppercase}
  h2{font-size:1.5rem;font-weight:800;color:#f1f5f9;letter-spacing:-.5px;margin-bottom:.4rem}
  .sub{font-size:.82rem;color:#64748b;margin-bottom:2rem}
  label{display:block;font-size:.7rem;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.5rem}
  .input-wrap{position:relative;margin-bottom:1.2rem}
  .icon{position:absolute;left:.9rem;top:50%;transform:translateY(-50%);color:#475569;pointer-events:none;font-size:.9rem}
  input{width:100%;padding:.75rem .9rem .75rem 2.6rem;background:rgba(15,23,42,.7);border:1px solid rgba(255,255,255,.08);border-radius:12px;color:#e2e8f0;font-size:.85rem;font-family:inherit;outline:none;transition:border-color .2s}
  input::placeholder{color:#475569}
  input:focus{border-color:#4f46e5;box-shadow:0 0 0 3px rgba(79,70,229,.15)}
  .toggle-pw{position:absolute;right:.9rem;top:50%;transform:translateY(-50%);background:none;border:none;color:#475569;cursor:pointer;font-size:.85rem}
  .btn{width:100%;padding:.85rem;background:linear-gradient(135deg,#4f46e5,#6366f1);color:#fff;border:none;border-radius:12px;font-size:.9rem;font-weight:700;font-family:inherit;cursor:pointer;margin-top:.5rem;box-shadow:0 6px 18px rgba(79,70,229,.35);transition:opacity .2s,transform .15s}
  .btn:hover{opacity:.92;transform:translateY(-1px)}
  .btn:active{transform:translateY(0)}
  .btn:disabled{opacity:.55;cursor:not-allowed;transform:none}
  .msg{margin-top:1rem;padding:.75rem 1rem;border-radius:10px;font-size:.8rem;font-weight:600;text-align:center;display:none}
  .msg.err{background:rgba(220,38,38,.1);border:1px solid rgba(220,38,38,.25);color:#fca5a5}
  .msg.ok{background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.25);color:#6ee7b7}
</style>
</head>
<body>
<div class="wrap">
  <div class="card">
    <div class="logo">
      <div class="logo-box">🛡️</div>
      <div>
        <h1>Ms Online</h1>
        <p>Admin Control System</p>
      </div>
    </div>
    <h2>Administrator Login</h2>
    <p class="sub">Sign in to manage your ISP services & content</p>

    <form id="loginForm">
      <label>Email Address</label>
      <div class="input-wrap">
        <span class="icon">✉️</span>
        <input type="email" id="email" value="" placeholder="Enter your email" required autocomplete="off">
      </div>

      <label>Password</label>
      <div class="input-wrap">
        <span class="icon">🔒</span>
        <input type="password" id="password" value="" placeholder="Enter your password" required autocomplete="new-password">
        <button type="button" class="toggle-pw" onclick="togglePw()">👁️</button>
      </div>

      <button class="btn" type="submit" id="submitBtn">
        <span id="btnText">Sign In to Control Panel</span>
      </button>
    </form>

    <div class="msg" id="msg"></div>
  </div>
</div>
<script>
function togglePw(){
  const i=document.getElementById('password');
  i.type=i.type==='password'?'text':'password';
}
document.getElementById('loginForm').addEventListener('submit',async(e)=>{
  e.preventDefault();
  const btn=document.getElementById('submitBtn');
  const txt=document.getElementById('btnText');
  const msg=document.getElementById('msg');
  msg.style.display='none';
  btn.disabled=true;
  txt.textContent='Authenticating...';
  try{
    const res=await fetch('/api/auth/login',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        email:document.getElementById('email').value,
        password:document.getElementById('password').value
      })
    });
    const data=await res.json();
    if(!res.ok) throw new Error(data.error||'Login failed');
    sessionStorage.setItem('admin_token',data.token);
    sessionStorage.setItem('admin_user',JSON.stringify(data.data));
    msg.className='msg ok';
    msg.textContent='✅ Access granted — redirecting to dashboard...';
    msg.style.display='block';
    setTimeout(()=>window.location.href='/admin/dashboard',900);
  }catch(err){
    msg.className='msg err';
    msg.textContent='❌ '+err.message;
    msg.style.display='block';
    btn.disabled=false;
    txt.textContent='Sign In to Control Panel';
  }
});
if(sessionStorage.getItem('admin_token')) window.location.href='/admin/dashboard';
</script>
</body>
</html>`;
}

/* ══════════════════════════════════════
   DASHBOARD HTML TEMPLATE
══════════════════════════════════════ */
function dashboardPage() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin Dashboard | Ms Online</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<!-- Quill Rich Text Editor CSS and JS -->
<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
<script src="https://cdn.quilljs.com/1.3.6/quill.min.js"></script>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Plus Jakarta Sans',sans-serif;background:#f6f8fb;color:#1e293b;display:flex;min-height:100vh}

  /* ─── Sidebar ─── */
  aside{width:250px;height:100vh;background:#0d1527;color:#94a3b8;display:flex;flex-direction:column;position:fixed;top:0;left:0;z-index:10;border-right:1px solid #1a2a4a;overflow:hidden}
  .sb-scrollable{flex:1;overflow-y:auto;display:flex;flex-direction:column;padding-bottom:1rem}
  .sb-header{padding:1.4rem 1.25rem;border-bottom:1px solid rgba(255,255,255,.05);display:flex;align-items:center;gap:.7rem;flex-shrink:0}
  .sb-icon{background:linear-gradient(135deg,#4f46e5,#818cf8);border-radius:10px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0}
  .sb-title{font-size:.95rem;font-weight:800;color:#f8fafc;letter-spacing:-.3px}
  .sb-sub{font-size:.65rem;color:#4f5d75;font-weight:700;text-transform:uppercase;letter-spacing:.05em}
  .sb-user{padding:1rem 1.25rem;border-bottom:1px solid rgba(255,255,255,.04);display:flex;align-items:center;gap:.65rem;background:rgba(255,255,255,.01);flex-shrink:0}
  .sb-avatar{width:32px;height:32px;border-radius:50%;background:#1e293b;border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:.85rem;flex-shrink:0}
  .sb-uname{font-size:.78rem;font-weight:700;color:#e2e8f0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .sb-role{font-size:.65rem;color:#5c6e8d;text-transform:capitalize}
  .sb-section-label{font-size:.65rem;font-weight:800;color:#3d4e6d;text-transform:uppercase;letter-spacing:.08em;padding:1.1rem 1.25rem .4rem}
  nav a{display:flex;align-items:center;gap:.7rem;padding:.65rem 1.25rem;font-size:.85rem;font-weight:600;color:#6d809a;text-decoration:none;transition:all .15s;border-left:3px solid transparent}
  nav a:hover{background:rgba(255,255,255,.03);color:#e2e8f0;border-left-color:#334155}
  nav a.active{background:rgba(79,70,229,.1);color:#818cf8;border-left-color:#4f46e5}
  nav a .navico{font-size:1.05rem;width:22px;text-align:center}
  .sb-footer{padding:1rem 1.25rem;border-top:1px solid rgba(255,255,255,.04);background:#090f1d;flex-shrink:0}
  .btn-logout{width:100%;padding:.6rem;background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.2);color:#f87171;border-radius:10px;font-size:.78rem;font-weight:700;cursor:pointer;font-family:inherit;transition:all .2s}
  .btn-logout:hover{background:rgba(239,68,68,.15)}
  .btn-viewsite{width:100%;padding:.6rem;background:rgba(16,185,129,.08);border:1px solid rgba(16,185,129,.2);color:#6ee7b7;border-radius:10px;font-size:.78rem;font-weight:700;cursor:pointer;font-family:inherit;text-decoration:none;display:block;text-align:center;margin-bottom:.6rem;transition:all .2s}
  .btn-viewsite:hover{background:rgba(16,185,129,.15)}

  /* ─── Main ─── */
  main{margin-left:250px;flex:1;padding:2.5rem;min-height:100vh}
  .page-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:2rem}
  .page-title{font-size:1.45rem;font-weight:800;color:#0f172a;letter-spacing:-.4px}
  .page-sub{font-size:.8rem;color:#64748b;margin-top:.2rem}
  
  .btn-add{display:inline-flex;align-items:center;gap:.4rem;padding:.6rem 1.25rem;background:#00a3ff;color:#fff;border:none;border-radius:10px;font-size:.8rem;font-weight:700;cursor:pointer;font-family:inherit;box-shadow:0 4px 14px rgba(0,163,255,.3);transition:all .2s}
  .btn-add:hover{opacity:.9;transform:translateY(-1px)}

  /* ─── Table ─── */
  .table-card{background:#fff;border-radius:16px;border:1px solid #e8edf3;overflow-x:auto;box-shadow:0 8px 24px rgba(0,0,0,.02)}
  table{width:100%;border-collapse:collapse;min-width:700px}
  thead th{background:#f1f4f9;padding:1rem 1.25rem;font-size:.68rem;font-weight:800;color:#5c6e8d;text-transform:uppercase;letter-spacing:.05em;text-align:left;border-bottom:1px solid #e2e8f0}
  tbody tr{border-bottom:1px solid #f0f4f8;transition:background .15s}
  tbody tr:hover{background:#fafbff}
  tbody tr:last-child{border-bottom:none}
  td{padding:.9rem 1.25rem;font-size:.85rem;color:#334155;vertical-align:middle}
  
  /* Circle Dot Indicators */
  .color-dot{width:16px;height:16px;border-radius:50%;display:inline-block;border:1px solid rgba(0,0,0,.15);vertical-align:middle}
  .badge-field{display:inline-block;padding:.25rem .75rem;border-radius:30px;font-size:.7rem;font-weight:700;background:#fff8ec;color:#e28509;border:1px solid #ffe9cc}
  .featured-star{font-size:1rem;color:#f59e0b}

  .actions{display:flex;gap:.5rem;justify-content:flex-end}
  .btn-edit,.btn-del{padding:.4rem .9rem;border-radius:8px;border:1px solid;cursor:pointer;font-size:.75rem;font-weight:700;font-family:inherit;transition:all .15s}
  .btn-edit{background:#fff;border-color:#e2e8f0;color:#64748b}
  .btn-edit:hover{background:#f8fafc;color:#1e293b;border-color:#cbd5e1}
  .btn-del{background:#fff5f5;border-color:#fee2e2;color:#ef4444}
  .btn-del:hover{background:#fecaca;color:#dc2626}
  
  .empty-state{padding:4.5rem 2rem;text-align:center}
  .empty-ico{font-size:3rem;margin-bottom:1rem}
  .empty-state h3{font-size:1.05rem;font-weight:700;color:#334155;margin-bottom:.4rem}
  .empty-state p{font-size:.82rem;color:#94a3b8}
  .loading-state{padding:4rem;text-align:center;color:#94a3b8;font-size:.9rem}

  /* ─── Modal ─── */
  .overlay{position:fixed;inset:0;background:rgba(9,19,39,.45);backdrop-filter:blur(5px);z-index:100;display:none;align-items:center;justify-content:center;padding:1rem;overflow-y:auto}
  .overlay.show{display:flex}
  .modal{background:#fff;border-radius:24px;width:100%;max-width:620px;max-height:92vh;overflow-y:auto;box-shadow:0 32px 64px rgba(13,27,51,.25);animation:modalIn .22s cubic-bezier(0.16, 1, 0.3, 1);position:relative}
  @keyframes modalIn{from{opacity:0;transform:scale(.95) translateY(12px)}}
  .modal-head{padding:1.4rem 1.75rem;border-bottom:1px solid #f1f5f9;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;background:#fff;z-index:5}
  .modal-head h3{font-size:1.05rem;font-weight:800;color:#0f172a;letter-spacing:-.3px}
  .close-btn{background:none;border:none;font-size:1.3rem;color:#94a3b8;cursor:pointer;padding:.2rem;transition:color .15s}
  .close-btn:hover{color:#475569}
  
  .modal-body{padding:1.75rem}
  .form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem}
  .form-group{margin-bottom:1rem;position:relative}
  .form-group label{display:block;font-size:.68rem;font-weight:800;color:#64748b;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.45rem}
  .form-group label span{color:#ef4444}
  
  .form-group input[type=text],.form-group textarea,.form-group select,.form-group input[type=number]{width:100%;padding:.7rem .9rem;border:1px solid #e2e8f0;border-radius:10px;font-size:.85rem;font-family:inherit;color:#1e293b;background:#f8fafc;outline:none;transition:all .2s;box-shadow:inset 0 1px 2px rgba(0,0,0,.02)}
  .form-group input:focus,.form-group textarea:focus,.form-group select:focus{border-color:#00a3ff;background:#fff;box-shadow:0 0 0 3px rgba(0,163,255,.12)}
  
  .color-picker-grid{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:.8rem}
  .color-option{width:28px;height:28px;border-radius:50%;cursor:pointer;position:relative;border:1px solid rgba(0,0,0,.08);transition:all .15s}
  .color-option:hover{transform:scale(1.1)}
  .color-option.selected{box-shadow:0 0 0 2px #fff, 0 0 0 4px #00a3ff}
  
  .feat-list{display:flex;flex-direction:column;gap:.6rem;margin-top:.4rem}
  .feat-row{display:flex;align-items:center;gap:.6rem}
  .feat-num{font-size:.7rem;font-weight:700;color:#94a3b8;min-width:14px}
  .feat-input{flex:1}
  .btn-remove-feat{background:#fff5f5;border:1px solid #fee2e2;color:#f87171;padding:.5rem .75rem;border-radius:8px;cursor:pointer;font-weight:700;font-size:.72rem}
  .btn-remove-feat:hover{background:#fecaca;color:#dc2626}
  .btn-add-feat-inline{background:#f8fafc;border:1px dashed #cbd5e1;color:#64748b;padding:.55rem;border-radius:8px;width:100%;cursor:pointer;font-family:inherit;font-size:.75rem;font-weight:700;margin-top:.6rem;transition:all .15s}
  .btn-add-feat-inline:hover{background:#f1f5f9;color:#334155}

  .upload-zone{border:1px dashed #e2e8f0;border-radius:10px;padding:.75rem;background:#f8fafc;display:flex;gap:.7rem;align-items:center}
  .upload-zone input[type=text]{background:#fff}
  .btn-upload{padding:.5rem .95rem;background:#fff;border:1px solid #e2e8f0;border-radius:8px;font-size:.75rem;font-weight:700;cursor:pointer;font-family:inherit;color:#334155}
  
  .modal-foot{padding:1.1rem 1.75rem;border-top:1px solid #f1f5f9;display:flex;justify-content:flex-end;gap:.75rem;background:#fcfdfe;border-radius:0 0 24px 24px}
  .btn-cancel{padding:.65rem 1.25rem;background:#fff;border:1px solid #cbd5e1;border-radius:10px;font-size:.82rem;font-weight:700;color:#64748b;cursor:pointer;font-family:inherit}
  .btn-cancel:hover{background:#f8fafc;color:#334155}
  .btn-save{padding:.65rem 1.5rem;background:#00a3ff;border:none;border-radius:10px;font-size:.82rem;font-weight:700;color:#fff;cursor:pointer;font-family:inherit;box-shadow:0 4px 14px rgba(0,163,255,.3);transition:opacity .15s}
  .btn-save:hover{opacity:.9}
  .btn-save:disabled{opacity:.5;cursor:not-allowed}

  .toast{position:fixed;bottom:1.5rem;right:1.5rem;padding:.8rem 1.4rem;border-radius:12px;font-size:.85rem;font-weight:700;color:#fff;z-index:999;display:none;box-shadow:0 12px 24px rgba(0,0,0,.15);animation:fadeIn .3s}
  .toast.ok{background:#10b981}
  .toast.err{background:#ef4444}
  @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}}
</style>
</head>
<body>

<!-- ══ SIDEBAR ══ -->
<aside id="sidebar">
  <div class="sb-header">
    <div class="sb-icon">🛡️</div>
    <div><div class="sb-title">Ms Online</div><div class="sb-sub">CMS Dashboard</div></div>
  </div>
  <div class="sb-user">
    <div class="sb-avatar">👤</div>
    <div>
      <div class="sb-uname" id="sbName">–</div>
      <div class="sb-role" id="sbRole">–</div>
    </div>
  </div>

  <div class="sb-scrollable">
    <div class="sb-section-label">Service Modules</div>
    <nav id="navMenu">
      <a href="#" class="active" data-svc="home-internet"><span class="navico">📶</span> Home Internet</a>
      <a href="#" data-svc="corporate"><span class="navico">🏢</span> Corporate</a>
      <a href="#" data-svc="sme"><span class="navico">💼</span> SME Packages</a>
      <a href="#" data-svc="cloud-pabx"><span class="navico">📞</span> Cloud PABX</a>
      <a href="#" data-svc="ip-phone"><span class="navico">☎️</span> IP Phone App</a>
      <a href="#" data-svc="iot"><span class="navico">⚙️</span> IoT Solutions</a>
      <a href="#" data-svc="domain"><span class="navico">🌐</span> Domain & Hosting</a>
      <a href="#" data-svc="wifi-zone"><span class="navico">📡</span> Wifi Zones</a>
      <a href="#" data-svc="coverage-areas"><span class="navico">&#128205;</span> Coverage Areas</a>
      <a href="#" data-svc="wifi-zones"><span class="navico">&#128246;</span> Wifi Zones</a>
      <div class="sb-section-label" style="padding-top:.7rem">Content</div>
      <a href="#" data-svc="blog"><span class="navico">📝</span> Blog Posts</a>
      <div class="sb-section-label" style="padding-top:.7rem">System</div>
      <a href="#" data-svc="messages"><span class="navico">📩</span> Messages Inbox</a>
      <a href="#" data-svc="subjects"><span class="navico">🏷️</span> Subject Categories</a>
    </nav>
  </div>

  <div class="sb-footer">
    <a href="http://localhost:3000" target="_blank" class="btn-viewsite">🌏 View Website (Port 3000)</a>
    <button class="btn-logout" onclick="logout()">⬅️ Logout</button>
  </div>
</aside>

<!-- ══ MAIN CONTENT ══ -->
<main>
  <div class="page-header">
    <div>
      <div class="page-title" id="pageTitle">Home Internet Packages</div>
      <div class="page-sub" id="pageSub">Manage pricing plans for Home Internet service</div>
    </div>
    <button class="btn-add" id="addBtn" onclick="openAddPlanModal()">+ Add Plan</button>
  </div>

  <div class="table-card">
    <div id="tableContent"><div class="loading-state">Loading data...</div></div>
  </div>
</main>

<!-- ══ SUBJECT MODAL ══ -->
<div class="overlay" id="subjectOverlay">
  <div class="modal" style="max-width:420px">
    <div class="modal-head">
      <h3>Add Subject Category</h3>
      <button class="close-btn" onclick="closeSubjectModal()">✕</button>
    </div>
    <div class="modal-body">
      <div class="form-group">
        <label>Display Label *</label>
        <input type="text" id="sj_label" placeholder="e.g. VPS Server">
      </div>
      <div class="form-group">
        <label>Value Key (slug)</label>
        <input type="text" id="sj_value" placeholder="e.g. vps-server (auto-generated)">
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn-cancel" onclick="closeSubjectModal()">Cancel</button>
      <button class="btn-save" onclick="saveSubject()">💾 Add Category</button>
    </div>
  </div>
</div>

<!-- ══ MESSAGE VIEW MODAL ══ -->
<!-- LOCATION MODAL -->
<div class="overlay" id="locationOverlay">
  <div class="modal" style="max-width:440px">
    <div class="modal-head">
      <div>
        <h3 id="locationModalTitle">Add Location</h3>
        <p id="locationModalSub" style="font-size:.72rem;color:#94a3b8;margin-top:.15rem">Add a location visible on the website</p>
      </div>
      <button class="close-btn" onclick="closeLocationModal()">âœ•</button>
    </div>
    <div class="modal-body">
      <div class="form-group">
        <label>Location Name *</label>
        <input type="text" id="loc_name" placeholder="e.g. Mirpur or DC Park - Khagrachari">
      </div>
      <div class="form-group">
        <label>Display Order</label>
        <input type="number" min="1" id="loc_sortOrder" placeholder="Auto">
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn-cancel" onclick="closeLocationModal()">Cancel</button>
      <button class="btn-save" id="locationSaveBtn" onclick="saveLocation()">Save Location</button>
    </div>
  </div>
</div>

<div class="overlay" id="msgOverlay">
  <div class="modal" style="max-width:560px">
    <div class="modal-head">
      <div><h3 id="msgModalTitle">Message Details</h3><p id="msgModalSub" style="font-size:.72rem;color:#94a3b8;margin-top:.15rem"></p></div>
      <button class="close-btn" onclick="closeMsgModal()">✕</button>
    </div>
    <div class="modal-body">
      <div style="background:#f8fafc;border-radius:12px;padding:1.2rem;margin-bottom:1rem">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-bottom:.75rem">
          <div><p style="font-size:.65rem;font-weight:800;color:#64748b;text-transform:uppercase">From</p><p id="mv_name" style="font-size:.9rem;font-weight:700;color:#0f172a"></p></div>
          <div><p style="font-size:.65rem;font-weight:800;color:#64748b;text-transform:uppercase">Email</p><p id="mv_email" style="font-size:.85rem;color:#3b82f6"></p></div>
          <div><p style="font-size:.65rem;font-weight:800;color:#64748b;text-transform:uppercase">Phone</p><p id="mv_phone" style="font-size:.85rem;font-weight:600;color:#334155"></p></div>
          <div><p style="font-size:.65rem;font-weight:800;color:#64748b;text-transform:uppercase">Subject</p><p id="mv_subject" style="font-size:.85rem;font-weight:700;color:#0091d5"></p></div>
          <div><p style="font-size:.65rem;font-weight:800;color:#64748b;text-transform:uppercase">Package</p><p id="mv_package" style="font-size:.85rem;font-weight:700;color:#334155"></p></div>
        </div>
        <div><p style="font-size:.65rem;font-weight:800;color:#64748b;text-transform:uppercase;margin-bottom:.3rem">Message</p><p id="mv_message" style="font-size:.85rem;color:#334155;line-height:1.7;white-space:pre-wrap"></p></div>
        <p id="mv_date" style="margin-top:.75rem;font-size:.7rem;color:#94a3b8"></p>
      </div>
      <div class="form-group">
        <label>Status</label>
        <select id="mv_status">
          <option value="unread">Unread</option>
          <option value="read">Read</option>
          <option value="replied">Replied</option>
          <option value="closed">Closed</option>
        </select>
      </div>
      <div class="form-group">
        <label>Admin Note (private)</label>
        <textarea id="mv_note" rows="3" placeholder="Internal note for this inquiry..."></textarea>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn-cancel" onclick="closeMsgModal()">Close</button>
      <button class="btn-save" onclick="saveMsgNote()">💾 Save Note & Status</button>
    </div>
  </div>
</div>

<!-- ══ ADD/EDIT MODAL ══ -->
<div class="overlay" id="overlay">
  <div class="modal">
    <div class="modal-head">
      <div>
        <h3 id="modalTitle">Edit Plan</h3>
        <p id="modalSub" style="font-size:.72rem;color:#94a3b8;margin-top:.15rem">Manage the package parameters</p>
      </div>
      <button class="close-btn" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-body">
      <form id="modalForm" onsubmit="event.preventDefault();">
        
        <!-- PACKAGE FIELDS -->
        <div id="pkgFields">
          <div class="form-group">
            <label>Plan Color</label>
            <div class="color-picker-grid" id="colorPickerGrid">
              <!-- Rendered dynamically -->
            </div>
            <input type="hidden" id="f_color" value="#708090">
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Plan Name <span>*</span></label>
              <input type="text" id="f_name" placeholder="e.g. Silver+">
            </div>
            <div class="form-group">
              <label>Speed / Extensions <span>*</span></label>
              <input type="text" id="f_speed" placeholder="e.g. 50 Mbps / 10 Extensions">
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label>Price (TK) <span>*</span></label>
              <input type="text" id="f_price" placeholder="e.g. 890">
            </div>
            <div class="form-group">
              <label>Period</label>
              <input type="text" id="f_period" placeholder="Per Month" value="Per Month">
            </div>
          </div>
          
          <div class="form-row" style="align-items:center;">
            <div class="form-group">
              <label>Badge (Optional)</label>
              <input type="text" id="f_tagline" placeholder="e.g. Most Popular, Max Speed">
            </div>
            <div class="form-group" style="padding-top:1.2rem">
              <label style="display:flex;align-items:center;gap:.4rem;cursor:pointer;text-transform:none;font-weight:600;font-size:.8rem;color:#334155">
                <input type="checkbox" id="f_isPopular" style="width:16px;height:16px;">
                <span>Mark as Featured Plan</span>
              </label>
            </div>
          </div>

          <div class="form-group">
            <label>Features Included</label>
            <div class="feat-list" id="featuresList">
              <!-- Rendered dynamically -->
            </div>
            <button type="button" class="btn-add-feat-inline" onclick="addFeatureRow()">+ Add Feature</button>
          </div>

          <input type="hidden" id="f_ctaLink" value="/contact">
          <input type="hidden" id="f_sortOrder" value="0">
          <input type="hidden" id="f_isActive" value="true">
        </div>

        <!-- BLOG FIELDS -->
        <div id="blogFields" style="display:none">
          <div class="form-group">
            <label>Blog Title *</label>
            <input type="text" id="b_title" placeholder="e.g. Ms Online Upgrades Fiber Network">
          </div>
          <div class="form-group">
            <label>Short Excerpt</label>
            <textarea id="b_excerpt" rows="2" placeholder="A brief summary of this post..."></textarea>
          </div>
          <div class="form-group">
            <label>Full Content *</label>
            <div id="editor-container" style="height:250px;background:#fff;border-radius:10px;border:1px solid #cbd5e1;overflow:hidden;"></div>
            <input type="hidden" id="b_content">
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Tags (comma separated)</label>
              <input type="text" id="b_tags" placeholder="ISP, Fiber, Internet">
            </div>
            <div class="form-group" style="display:flex;align-items:center;gap:.5rem;padding-top:1.5rem">
              <input type="checkbox" id="b_isPublished">
              <label style="margin:0">Publish Immediately</label>
            </div>
          </div>
        </div>

        <!-- SHARED IMAGE UPLOAD -->
        <div class="form-group" style="margin-top:1rem" id="imgUploadZone">
          <label>Cover / Thumbnail Image</label>
          <div class="upload-zone">
            <input type="text" id="f_image" placeholder="Image URL will appear here...">
            <label class="btn-upload">
              📎 Upload
              <input type="file" accept="image/*" style="display:none" onchange="uploadImage(this)">
            </label>
          </div>
          <div class="upload-status" id="upStatus" style="font-size:.7rem;color:#00a3ff;margin-top:.2rem"></div>
        </div>
      </form>
    </div>
    <div class="modal-foot">
      <button class="btn-cancel" onclick="closeModal()">Cancel</button>
      <button class="btn-save" id="saveBtn" onclick="saveRecord()">💾 Save Changes</button>
    </div>
  </div>
</div>

<!-- TOAST -->
<div class="toast" id="toast"></div>

<script>
const API = 'https://www.msonlinebd.com';
let activeService = 'home-internet';
  let editingId = null;
  let editingLocationId = null;
  let token = '';
  let quill = null;

  const LOCATION_SECTIONS = {
    'coverage-areas': { type: 'coverage', singular: 'Coverage Area', plural: 'Coverage Areas' },
    'wifi-zones': { type: 'wifi', singular: 'WiFi Zone', plural: 'WiFi Zones' }
  };

  const isLocationSection = () => Boolean(LOCATION_SECTIONS[activeService]);
  const locationType = () => LOCATION_SECTIONS[activeService].type;

const COLOR_OPTIONS = [
  { hex: '#708090', name: 'Slate' },
  { hex: '#f59e0b', name: 'Orange-Gold' },
  { hex: '#00c5ff', name: 'Neon-Cyan' },
  { hex: '#3b82f6', name: 'Blue' },
  { hex: '#6366f1', name: 'Indigo' },
  { hex: '#8b5cf6', name: 'Purple' },
  { hex: '#a855f7', name: 'Violet' },
  { hex: '#ec4899', name: 'Pink' },
  { hex: '#10b981', name: 'Green' },
  { hex: '#ff781f', name: 'Bright-Orange' },
  { hex: '#0f2542', name: 'Navy-Blue' },
  { hex: '#475569', name: 'Dark-Gray' }
];

const SERVICE_META = {
  'home-internet':{ title:'Home Internet Packages', sub:'Manage pricing plans for Home Internet service' },
  'corporate':{ title:'Corporate Internet Packages', sub:'Business-grade broadband service plans' },
  'sme':{ title:'SME Business Packages', sub:'Small & medium enterprise internet plans' },
  'cloud-pabx':{ title:'Cloud PABX Plans', sub:'VoIP PABX systems voice communication solutions' },
  'ip-phone':{ title:'IP Phone App Plans', sub:'Telephony lines and App pricing packages' },
  'iot':{ title:'IoT Solutions', sub:'Internet of Things connectivity packages' },
  'domain':{ title:'Domain & Hosting Plans', sub:'Web hosting and domain registration tiers' },
  'wifi-zone':{ title:'Wifi Zone Packages', sub:'Public and venue wifi access plans' },
  'coverage-areas':{ title:'Coverage Areas', sub:'Manage the locations shown on the Coverage page' },
  'wifi-zones':{ title:'WiFi Zones', sub:'Manage the locations shown on the WiFi Zone page' },
  'blog':{ title:'Blog & News Posts', sub:'Create and manage website articles' },
  'messages':{ title:'Messages Inbox', sub:'View and manage contact form inquiries from users' },
  'subjects':{ title:'Subject Categories', sub:'Manage dropdown options shown in the contact form' }
};

window.onload = () => {
  token = sessionStorage.getItem('admin_token');
  if(!token){ window.location.href='/admin/login'; return; }
  const u = JSON.parse(sessionStorage.getItem('admin_user')||'{}');
  document.getElementById('sbName').textContent = u.name||'Admin';
  document.getElementById('sbRole').textContent = (u.role||'editor').replace('_',' ');
  
  // Init Quill Editor
  quill = new Quill('#editor-container', {
    theme: 'snow',
    placeholder: 'Write the full blog article content here...',
    modules: {
      toolbar: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['link', 'image'],
        ['clean']
      ]
    }
  });

  initColorPicker();
  loadData();
};

function initColorPicker() {
  const container = document.getElementById('colorPickerGrid');
  container.innerHTML = COLOR_OPTIONS.map(c => \`
    <div class="color-option" data-hex="\${c.hex}" style="background:\${c.hex}" title="\${c.name}" onclick="selectColor('\${c.hex}')"></div>
  \`).join('');
}

function selectColor(hex) {
  document.getElementById('f_color').value = hex;
  document.querySelectorAll('.color-option').forEach(el => {
    if(el.dataset.hex === hex) {
      el.classList.add('selected');
    } else {
      el.classList.remove('selected');
    }
  });
}

document.getElementById('navMenu').addEventListener('click', e => {
  const a = e.target.closest('[data-svc]');
  if(!a) return;
  e.preventDefault();
  document.querySelectorAll('#navMenu a').forEach(el=>el.classList.remove('active'));
  a.classList.add('active');
  activeService = a.dataset.svc;
  const m = SERVICE_META[activeService];
  document.getElementById('pageTitle').textContent = m.title;
  document.getElementById('pageSub').textContent = m.sub;
  editingId = null;
  editingLocationId = null;
  // Show/hide add button based on section
  const addBtn = document.getElementById('addBtn');
  if(activeService === 'messages'){
    addBtn.style.display = 'none';
  } else if(isLocationSection()){
    addBtn.textContent = '+ Add ' + LOCATION_SECTIONS[activeService].singular;
    addBtn.style.display = 'inline-flex';
    addBtn.onclick = openLocationModal;
  } else if(activeService === 'subjects'){
    addBtn.textContent = '+ Add Subject';
    addBtn.style.display = 'inline-flex';
    addBtn.onclick = openSubjectModal;
  } else {
    addBtn.textContent = '+ Add Plan';
    addBtn.style.display = 'inline-flex';
    addBtn.onclick = openAddPlanModal;
  }
  loadData();
});

async function loadData(){
  document.getElementById('tableContent').innerHTML='<div class="loading-state">⏳ Loading records from server...</div>';
  try{
    let url;
    if(activeService === 'blog') url = API+'/api/blog?all=true';
    else if(activeService === 'messages') url = API+'/api/contact/messages';
    else if(activeService === 'subjects') url = API+'/api/contact/subjects';
    else if(isLocationSection()) url = API+'/api/locations/'+locationType();
    else url = API+'/api/'+activeService+'/packages?all=true';
    const headers = {'Authorization':'Bearer '+token};
    const res = await fetch(url,{headers});
    const data = await res.json();
    if(activeService === 'messages') renderMessages(data.data||[]);
    else if(activeService === 'subjects') renderSubjects(data.data||[]);
    else if(isLocationSection()) renderLocations(data.data||[]);
    else renderTable(data.data||[]);
  }catch(e){
    document.getElementById('tableContent').innerHTML='<div class="loading-state" style="color:#f87171">⚠️ Failed to load: '+e.message+'</div>';
  }
}

function renderTable(items){
  if(!items.length){
    document.getElementById('tableContent').innerHTML=\`
      <div class="empty-state">
        <div class="empty-ico">📭</div>
        <h3>No records found</h3>
        <p>Start by clicking "+ Add Plan" to create the first entry.</p>
      </div>\`;
    return;
  }
  let rows = '';
  if(activeService==='blog'){
    document.getElementById('imgUploadZone').style.display = 'block';
    rows = items.map(i=>\`
      <tr>
        <td><strong>\${i.title||'–'}</strong><br><span style="font-size:.75rem;color:#94a3b8">\${i.slug||''}</span></td>
        <td>\${(i.tags||[]).map(t=>'<span class="badge badge-slate" style="background:#eaf2ff; color:#0e5aed; border:1px solid #cce0ff; padding:2px 8px; border-radius:12px; font-size:11px;">'+t+'</span>').join(' ')||'–'}</td>
        <td>\${i.isPublished?'<span class="badge-field" style="background:#ecfdf5;color:#059669;border-color:#a7f3d0">Published</span>':'<span class="badge-field" style="background:#fffbeb;color:#d97706;border-color:#fde68a">Draft</span>'}</td>
        <td><div class="actions"><button class="btn-edit" onclick="editItem('\${i.id||i._id}')">Edit</button><button class="btn-del" onclick="delItem('\${i.id||i._id}')">Delete</button></div></td>
      </tr>\`).join('');
    document.getElementById('tableContent').innerHTML=\`
      <table><thead><tr><th>Title</th><th>Tags</th><th>Status</th><th style="text-align:right;width:200px">Actions</th></tr></thead>
      <tbody>\${rows}</tbody></table>\`;
  } else {
    rows = items.map(i=>\`
      <tr>
        <td style="width:70px;text-align:center;"><span class="color-dot" style="background:\${i.color||'#708090'}"></span></td>
        <td><strong>\${i.name||'–'}</strong></td>
        <td>\${i.speed||'—'}</td>
        <td style="color:#00a3ff;font-weight:700">\${i.price||'0'} \${i.period || 'TK'}</td>
        <td>\${(i.features||[]).length} items</td>
        <td>\${i.tagline?'<span class="badge-field">\'+i.tagline+\'</span>':'—'}</td>
        <td style="text-align:center;">\${i.isPopular?'<span class="featured-star">★</span>':'—'}</td>
        <td><div class="actions"><button class="btn-edit" onclick="editItem('\${i.id||i._id}')">Edit</button><button class="btn-del" onclick="delItem('\${i.id||i._id}')">Delete</button></div></td>
      </tr>\`).join('');
    document.getElementById('tableContent').innerHTML=\`
      <table>
        <thead>
          <tr>
            <th style="width:70px;text-align:center;">Color</th>
            <th>Name</th>
            <th>Speed</th>
            <th>Price</th>
            <th>Features</th>
            <th>Badge</th>
            <th style="text-align:center;">Featured</th>
            <th style="text-align:right;width:200px">Actions</th>
          </tr>
        </thead>
        <tbody>\${rows}</tbody>
      </table>\`;
  }
}

function escapeHtml(value){
  return String(value || '').replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

function renderLocations(items){
  const meta = LOCATION_SECTIONS[activeService];
  if(!items.length){
    document.getElementById('tableContent').innerHTML = '<div class="empty-state"><div class="empty-ico">&#128205;</div><h3>No '+meta.plural+' found</h3><p>Click "+ Add '+meta.singular+'" to create the first entry.</p></div>';
    return;
  }
  /*
  const rows = items.map((item, index) =>
    '<tr>'+
      '<td style="width:90px;color:#64748b;font-weight:700">'+(index + 1)+'</td>'+
      '<td><strong>'+escapeHtml(item.name)+'</strong></td>'+
      '<td>'+ (item.sortOrder || index + 1) +'</td>'+
      '<td style="font-size:.72rem;color:#94a3b8">'+(item.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : '—')+'</td>'+
      '<td><div class="actions"><button class="btn-edit" onclick="editLocation(\\\\\''+item.id+'\\\\\')">Edit</button><button class="btn-del" onclick="delLocation(\\\\\''+item.id+'\\\\\')">Delete</button></div></td>'+
    '</tr>'
  ).join('');
  document.getElementById('tableContent').innerHTML =
    '<table><thead><tr><th style="width:90px">#</th><th>Location Name</th><th>Display Order</th><th>Updated</th><th style="text-align:right;width:180px">Actions</th></tr></thead><tbody>'+rows+'</tbody></table>';
  */
  const rows = items.map((item, index) =>
    '<tr>'+
      '<td style="width:90px;color:#64748b;font-weight:700">'+(index + 1)+'</td>'+
      '<td><strong>'+escapeHtml(item.name)+'</strong></td>'+
      '<td>'+ (item.sortOrder || index + 1) +'</td>'+
      '<td style="font-size:.72rem;color:#94a3b8">'+(item.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : '—')+'</td>'+
      '<td><div class="actions"><button class="btn-edit" data-id="'+escapeHtml(item.id)+'" onclick="editLocation(this.dataset.id)">Edit</button><button class="btn-del" data-id="'+escapeHtml(item.id)+'" onclick="delLocation(this.dataset.id)">Delete</button></div></td>'+
    '</tr>'
  ).join('');
  document.getElementById('tableContent').innerHTML =
    '<table><thead><tr><th style="width:90px">#</th><th>Location Name</th><th>Display Order</th><th>Updated</th><th style="text-align:right;width:180px">Actions</th></tr></thead><tbody>'+rows+'</tbody></table>';
}

function openLocationModal(){
  editingLocationId = null;
  const meta = LOCATION_SECTIONS[activeService];
  document.getElementById('locationModalTitle').textContent = 'Add '+meta.singular;
  document.getElementById('locationModalSub').textContent = 'Add a '+meta.singular.toLowerCase()+' visible on the website';
  document.getElementById('loc_name').value = '';
  document.getElementById('loc_sortOrder').value = '';
  document.getElementById('locationSaveBtn').textContent = 'Save '+meta.singular;
  document.getElementById('locationOverlay').classList.add('show');
  setTimeout(() => document.getElementById('loc_name').focus(), 50);
}

function closeLocationModal(){
  document.getElementById('locationOverlay').classList.remove('show');
  editingLocationId = null;
}

async function editLocation(id){
  try{
    const res = await fetch(API+'/api/locations/'+locationType(), {headers:{'Authorization':'Bearer '+token}});
    const data = await res.json();
    const item = (data.data||[]).find(location => String(location.id) === String(id));
    if(!item){ showToast('Location record not found','err'); return; }
    editingLocationId = id;
    const meta = LOCATION_SECTIONS[activeService];
    document.getElementById('locationModalTitle').textContent = 'Edit '+meta.singular;
    document.getElementById('locationModalSub').textContent = 'Update the selected '+meta.singular.toLowerCase();
    document.getElementById('loc_name').value = item.name || '';
    document.getElementById('loc_sortOrder').value = item.sortOrder || '';
    document.getElementById('locationSaveBtn').textContent = 'Save Changes';
    document.getElementById('locationOverlay').classList.add('show');
  }catch(e){ showToast('Could not load location: '+e.message,'err'); }
}

async function saveLocation(){
  const name = document.getElementById('loc_name').value.trim();
  const sortOrder = document.getElementById('loc_sortOrder').value;
  const isEditing = Boolean(editingLocationId);
  if(!name){ showToast('Location name is required','err'); return; }
  const btn = document.getElementById('locationSaveBtn');
  btn.disabled = true;
  btn.textContent = 'Saving...';
  try{
    const url = API+'/api/locations/'+locationType()+(isEditing ? '/'+editingLocationId : '');
    const res = await fetch(url, {
      method: isEditing ? 'PUT' : 'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},
      body: JSON.stringify({name, sortOrder: Number(sortOrder) || undefined})
    });
    if(res.status === 401){ handleTokenExpired(); return; }
    const data = await res.json();
    if(!res.ok) throw new Error(data.error || 'Save failed');
    closeLocationModal();
    showToast(isEditing ? 'Location updated successfully' : 'Location added successfully','ok');
    loadData();
  }catch(e){ showToast(e.message,'err');
  }finally{
    btn.disabled = false;
    btn.textContent = isEditing ? 'Save Changes' : 'Save Location';
  }
}

async function delLocation(id){
  if(!confirm('Delete this location permanently?')) return;
  try{
    const res = await fetch(API+'/api/locations/'+locationType()+'/'+id, {method:'DELETE',headers:{'Authorization':'Bearer '+token}});
    const data = await res.json();
    if(!res.ok) throw new Error(data.error || 'Delete failed');
    showToast('Location deleted','ok');
    loadData();
  }catch(e){ showToast(e.message,'err'); }
}

function openAddPlanModal(){
  editingId = null;
  resetForm();
  document.getElementById('imgUploadZone').style.display = 'block';
  if(activeService==='blog'){
    document.getElementById('blogFields').style.display = 'block';
    document.getElementById('pkgFields').style.display = 'none';
    document.getElementById('modalTitle').textContent = 'Add Blog Post';
    document.getElementById('modalSub').textContent = 'Create a new blog article';
  } else {
    document.getElementById('blogFields').style.display = 'none';
    document.getElementById('pkgFields').style.display = 'block';
    document.getElementById('modalTitle').textContent = 'Add Plan';
    document.getElementById('modalSub').textContent = 'Create a new pricing tier';
    selectColor('#708090');
    addFeatureRow('');
    addFeatureRow('');
    addFeatureRow('');
  }
  document.getElementById('overlay').classList.add('show');
}

function closeModal(){ document.getElementById('overlay').classList.remove('show'); }

function resetForm(){
  ['f_name','f_price','f_speed','f_tagline','f_image','f_period'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.value = '';
  });
  document.getElementById('f_period').value = 'Per Month';
  document.getElementById('f_ctaLink').value = '/contact';
  document.getElementById('f_sortOrder').value = '0';
  document.getElementById('f_isPopular').checked = false;
  document.getElementById('f_isActive').checked = true;
  document.getElementById('featuresList').innerHTML = '';
  ['b_title','b_excerpt','b_content','b_tags'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.value = '';
  });
  if(quill) quill.root.innerHTML = '';
  document.getElementById('b_isPublished').checked = false;
  document.getElementById('upStatus').textContent = '';
}

function addFeatureRow(val = '') {
  const container = document.getElementById('featuresList');
  const count = container.children.length + 1;
  const row = document.createElement('div');
  row.className = 'feat-row';
  row.innerHTML = \`
    <span class="feat-num">\${count}</span>
    <input type="text" class="feat-input" value="\${val}" placeholder="e.g. Free dynamic IP Address">
    <button type="button" class="btn-remove-feat" onclick="removeFeatureRow(this)">✕</button>
  \`;
  container.appendChild(row);
  reindexFeatures();
}

function removeFeatureRow(btn) {
  btn.closest('.feat-row').remove();
  reindexFeatures();
}

function reindexFeatures() {
  const rows = document.querySelectorAll('#featuresList .feat-row');
  rows.forEach((r, idx) => {
    r.querySelector('.feat-num').textContent = idx + 1;
  });
}

async function editItem(id){
  try{
    const url = activeService==='blog'?API+'/api/blog?all=true':API+'/api/'+activeService+'/packages?all=true';
    const res = await fetch(url,{headers:{'Authorization':'Bearer '+token}});
    const data = await res.json();
    const item = (data.data||[]).find(i=>(i.id||i._id)===id);
    if(!item){ showToast('Plan record not found','err'); return; }
    editingId = id;
    resetForm();
    document.getElementById('imgUploadZone').style.display = 'block';
    if(activeService==='blog'){
      document.getElementById('blogFields').style.display = 'block';
      document.getElementById('pkgFields').style.display = 'none';
      document.getElementById('b_title').value = item.title||'';
      document.getElementById('b_excerpt').value = item.excerpt||'';
      if(quill) quill.root.innerHTML = item.content||'';
      document.getElementById('b_tags').value = (item.tags||[]).join(', ');
      document.getElementById('b_isPublished').checked = !!item.isPublished;
      document.getElementById('f_image').value = item.thumbnail||'';
      document.getElementById('modalTitle').textContent = 'Edit Blog Post';
    } else {
      document.getElementById('blogFields').style.display = 'none';
      document.getElementById('pkgFields').style.display = 'block';
      document.getElementById('f_name').value = item.name||'';
      document.getElementById('f_price').value = item.price||'';
      document.getElementById('f_speed').value = item.speed||'';
      document.getElementById('f_tagline').value = item.tagline||'';
      document.getElementById('f_period').value = item.period||'Per Month';
      document.getElementById('f_ctaLink').value = item.ctaLink||'/contact';
      document.getElementById('f_sortOrder').value = item.sortOrder||0;
      document.getElementById('f_isPopular').checked = !!item.isPopular;
      document.getElementById('f_isActive').value = String(item.isActive!==false);
      document.getElementById('f_image').value = item.image||'';
      selectColor(item.color || '#708090');
      
      const feats = item.features || [];
      if(feats.length > 0) {
        feats.forEach(f => {
          const txt = typeof f === 'object' ? (f.text || '') : f;
          addFeatureRow(txt);
        });
      } else {
        addFeatureRow('');
      }
      document.getElementById('modalTitle').textContent = 'Edit Plan';
    }
    document.getElementById('modalSub').textContent = 'Modify existing parameters';
    document.getElementById('overlay').classList.add('show');
  }catch(e){ showToast('Could not load plan: '+e.message,'err'); }
}

async function delItem(id){
  if(!confirm('Are you sure you want to permanently delete this plan?')) return;
  try{
    const url = activeService==='blog'?API+'/api/blog/'+id:API+'/api/packages/'+id;
    const res = await fetch(url,{method:'DELETE',headers:{'Authorization':'Bearer '+token}});
    const data = await res.json();
    if(!res.ok) throw new Error(data.error||'Delete failed');
    showToast('Plan deleted successfully','ok');
    loadData();
  }catch(e){ showToast(e.message,'err'); }
}

async function saveRecord(){
  const btn = document.getElementById('saveBtn');
  btn.disabled=true; btn.textContent='Saving Changes...';
  try{
    let url,method,payload;
    if(activeService==='blog'){
      url = editingId?API+'/api/blog/'+editingId:API+'/api/blog';
      method = editingId?'PUT':'POST';
      payload = {
        title: document.getElementById('b_title').value,
        excerpt: document.getElementById('b_excerpt').value,
        content: quill ? quill.root.innerHTML : '',
        thumbnail: document.getElementById('f_image').value,
        tags: document.getElementById('b_tags').value.split(',').map(t=>t.trim()).filter(Boolean),
        isPublished: document.getElementById('b_isPublished').checked
      };
    } else {
      url = editingId?API+'/api/packages/'+editingId:API+'/api/'+activeService+'/packages';
      method = editingId?'PUT':'POST';
      
      const featInputs = document.querySelectorAll('#featuresList .feat-input');
      const featureArray = Array.from(featInputs).map(inp => ({ text: inp.value.trim() })).filter(f => f.text !== '');

      payload = {
        name: document.getElementById('f_name').value,
        price: document.getElementById('f_price').value,
        speed: document.getElementById('f_speed').value,
        tagline: document.getElementById('f_tagline').value,
        period: document.getElementById('f_period').value||'Per Month',
        color: document.getElementById('f_color').value,
        ctaLink: document.getElementById('f_ctaLink').value||'/contact',
        sortOrder: Number(document.getElementById('f_sortOrder').value)||0,
        isPopular: document.getElementById('f_isPopular').checked,
        isActive: document.getElementById('f_isActive').value !== 'false',
        image: document.getElementById('f_image').value,
        features: featureArray
      };
    }
    const res = await fetch(url,{method,headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},body:JSON.stringify(payload)});
    if(res.status === 401){ handleTokenExpired(); return; }
    const data = await res.json();
    if(!res.ok) throw new Error(data.error||'Save failed');
    closeModal();
    showToast(editingId?'✅ Changes saved successfully!':'✅ Package added successfully!','ok');
    loadData();
  }catch(e){ showToast('❌ '+e.message,'err');
  }finally{ btn.disabled=false; btn.textContent='💾 Save Changes'; }
}

async function uploadImage(input){
  const file = input.files[0];
  if(!file) return;
  document.getElementById('upStatus').textContent='⏳ Uploading file...';
  const fd = new FormData();
  fd.append('file',file);
  try{
    const res = await fetch(API+'/api/upload',{method:'POST',headers:{'Authorization':'Bearer '+token},body:fd});
    if(res.status === 401){ handleTokenExpired(); return; }
    const data = await res.json();
    if(!res.ok) throw new Error(data.error||'Upload failed');
    document.getElementById('f_image').value = data.url;
    document.getElementById('upStatus').textContent='✅ Uploaded successfully';
  }catch(e){
    document.getElementById('upStatus').textContent='❌ '+e.message;
  }
}

function handleTokenExpired(){
  showToast('⚠️ Session expired. Redirecting to login...','err');
  setTimeout(()=>{
    sessionStorage.removeItem('admin_token');
    sessionStorage.removeItem('admin_user');
    window.location.href='/admin/login';
  }, 1800);
}

function showToast(msg,type){
  const t=document.getElementById('toast');
  t.textContent=msg;
  t.className='toast '+type;
  t.style.display='block';
  setTimeout(()=>t.style.display='none',3500);
}

function logout(){
  sessionStorage.removeItem('admin_token');
  sessionStorage.removeItem('admin_user');
  window.location.href='/admin/login';
}

/* ════ MESSAGES INBOX ════ */
let viewingMsgId = null;

function renderMessages(items){
  if(!items.length){
    document.getElementById('tableContent').innerHTML=\`<div class="empty-state"><div class="empty-ico">📭</div><h3>No messages yet</h3><p>Customer inquiries from the contact form will appear here.</p></div>\`;
    return;
  }
  const statusBadge = s => {
    const map = { unread:'background:#fef3c7;color:#d97706;border-color:#fde68a', read:'background:#f0f9ff;color:#0284c7;border-color:#bae6fd', replied:'background:#ecfdf5;color:#059669;border-color:#a7f3d0', closed:'background:#f1f5f9;color:#475569;border-color:#cbd5e1' };
    return \`<span class="badge-field" style="\${map[s]||map.read}">\${s}</span>\`;
  };
  const rows = items.map(m=>\`
    <tr style="\${m.status==='unread'?'font-weight:700':''}"> 
      <td><strong>\${m.name||'–'}</strong><br><span style="font-size:.72rem;color:#94a3b8">\${m.email||''}</span></td>
      <td>\${m.phone||'—'}</td>
      <td style="color:#0091d5;font-weight:600">\${m.subject||'general'}</td>
      <td style="font-weight:600;color:#334155">\${m.package||'—'}</td>
      <td style="max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\${m.message||''}</td>
      <td>\${statusBadge(m.status||'unread')}</td>
      <td style="font-size:.72rem;color:#94a3b8">\${new Date(m.createdAt).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'})}</td>
      <td><div class="actions"><button class="btn-edit" onclick="viewMessage('\${m.id}')" style="background:#f0f9ff;border-color:#bae6fd;color:#0284c7">View</button><button class="btn-del" onclick="delMessage('\${m.id}')">Delete</button></div></td>
    </tr>\`).join('');
  document.getElementById('tableContent').innerHTML=\`
    <table>
      <thead><tr><th>Sender</th><th>Phone</th><th>Subject</th><th>Package</th><th>Message</th><th>Status</th><th>Date</th><th style="text-align:right;width:170px">Actions</th></tr></thead>
      <tbody>\${rows}</tbody>
    </table>\`;
}

async function viewMessage(id){
  try{
    const res = await fetch(API+'/api/contact/messages',{headers:{'Authorization':'Bearer '+token}});
    const data = await res.json();
    const m = (data.data||[]).find(x=>x.id===id);
    if(!m){ showToast('Message not found','err'); return; }
    viewingMsgId = id;
    document.getElementById('mv_name').textContent = m.name||'—';
    document.getElementById('mv_email').textContent = m.email||'—';
    document.getElementById('mv_phone').textContent = m.phone||'—';
    document.getElementById('mv_subject').textContent = m.subject||'—';
    document.getElementById('mv_package').textContent = m.package||'—';
    document.getElementById('mv_message').textContent = m.message||'—';
    document.getElementById('mv_date').textContent = 'Received: '+new Date(m.createdAt).toLocaleString();
    document.getElementById('mv_status').value = m.status||'unread';
    document.getElementById('mv_note').value = m.adminNote||'';
    document.getElementById('msgModalSub').textContent = 'From '+m.email+' · '+new Date(m.createdAt).toLocaleDateString();
    document.getElementById('msgOverlay').classList.add('show');
    // Mark as read automatically
    if(m.status === 'unread'){
      await fetch(API+'/api/contact/messages/'+id,{method:'PUT',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},body:JSON.stringify({status:'read'})});
    }
  }catch(e){ showToast('Error: '+e.message,'err'); }
}

function closeMsgModal(){ document.getElementById('msgOverlay').classList.remove('show'); viewingMsgId=null; }

async function saveMsgNote(){
  if(!viewingMsgId) return;
  try{
    const res = await fetch(API+'/api/contact/messages/'+viewingMsgId,{
      method:'PUT',
      headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},
      body:JSON.stringify({
        status: document.getElementById('mv_status').value,
        adminNote: document.getElementById('mv_note').value
      })
    });
    if(!res.ok) throw new Error('Failed to save');
    showToast('✅ Note & status saved','ok');
    closeMsgModal();
    loadData();
  }catch(e){ showToast('❌ '+e.message,'err'); }
}

async function delMessage(id){
  if(!confirm('Delete this message permanently?')) return;
  try{
    const res = await fetch(API+'/api/contact/messages/'+id,{method:'DELETE',headers:{'Authorization':'Bearer '+token}});
    if(!res.ok) throw new Error('Delete failed');
    showToast('Message deleted','ok');
    loadData();
  }catch(e){ showToast(e.message,'err'); }
}

/* ════ SUBJECT CATEGORIES ════ */
function openSubjectModal(){ document.getElementById('sj_label').value=''; document.getElementById('sj_value').value=''; document.getElementById('subjectOverlay').classList.add('show'); }
function closeSubjectModal(){ document.getElementById('subjectOverlay').classList.remove('show'); }

function renderSubjects(items){
  const empty = \`<div class="empty-state"><div class="empty-ico">🏷️</div><h3>No subject categories</h3><p>Click "+ Add Subject" to create one.</p></div>\`;
  if(!items.length){ document.getElementById('tableContent').innerHTML=empty; return; }
  const rows = items.map(s=>\`
    <tr>
      <td><strong>\${s.label}</strong></td>
      <td style="font-family:monospace;color:#64748b">\${s.value}</td>
      <td style="font-size:.72rem;color:#94a3b8">\${new Date(s.createdAt).toLocaleDateString()}</td>
      <td><div class="actions"><button class="btn-del" onclick="delSubject('\${s.id}')">Delete</button></div></td>
    </tr>\`).join('');
  document.getElementById('tableContent').innerHTML=\`
    <table>
      <thead><tr><th>Label</th><th>Value Key</th><th>Created</th><th style="text-align:right;width:120px">Action</th></tr></thead>
      <tbody>\${rows}</tbody>
    </table>\`;
}

async function saveSubject(){
  const label = document.getElementById('sj_label').value.trim();
  let value = document.getElementById('sj_value').value.trim();
  if(!label){ showToast('Label is required','err'); return; }
  if(!value) value = label.toLowerCase().replace(/[^a-z0-9]+/g,'-');
  try{
    const res = await fetch(API+'/api/contact/subjects',{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},
      body:JSON.stringify({label,value})
    });
    const data = await res.json();
    if(!res.ok) throw new Error(data.error||'Failed');
    closeSubjectModal();
    showToast('✅ Subject category added','ok');
    loadData();
  }catch(e){ showToast('❌ '+e.message,'err'); }
}

async function delSubject(id){
  if(!confirm('Delete this subject category?')) return;
  try{
    const res = await fetch(API+'/api/contact/subjects/'+id,{method:'DELETE',headers:{'Authorization':'Bearer '+token}});
    if(!res.ok) throw new Error('Delete failed');
    showToast('Subject deleted','ok');
    loadData();
  }catch(e){ showToast(e.message,'err'); }
}
</script>
</body>
</html>`;
}

module.exports = router;

<!-- QUICK START GUIDE -->

# Quick Start Guide

## 🚀 Get Your Portfolio Live in 5 Minutes

### Step 1: Basic Customization (2 min)

Open `index.html` in your favorite code editor and find these sections:

**Hero Section (Line ~25)**
```html
<h1 class="hero-title">Hello, I'm Jordan</h1>
<p class="hero-subtitle">Product Designer & Frontend Developer</p>
<p class="hero-statement">I create thoughtfully designed digital products...</p>
```
Replace with your name, title, and value statement.

**Project Cards (Line ~80-150)**
Find the project cards and update:
- `<h3>` - Project title
- `.project-problem` - One-line problem statement
- `.tag` - Tools and skills
- `.project-outcome` - Key result

**Skills Section (Line ~210)**
Update the 4 skill categories and list items to match your expertise.

**About Section (Line ~270)**
Replace the bio paragraphs and statistics with your own.

**Contact Section (Line ~320)**
Update email and social media links with your actual contacts.

### Step 2: Add Images (1 min)

1. Prepare 4 project screenshot images (800x500px ideal)
2. Save as: `project-1.jpg`, `project-2.jpg`, `project-3.jpg`, `project-4.jpg`
3. Place in the `assets/` folder
4. Done! Images auto-load in project cards

### Step 3: Update Project Case Studies (2 min)

Edit each file in `projects/` folder:
- `project-1.html`: Edit hero title, subtitle, and meta
- Update sections: Problem, Goals, Process, Solution, Results

### Step 4: Deploy (Optional)

Choose one:

**GitHub Pages** (Free, takes 2 minutes)
1. Create GitHub account (if needed)
2. Create new repo called `yourname.github.io`
3. Upload all files
4. Your site is live at `yourname.github.io`

**Netlify** (Also free, even easier)
1. Go to netlify.com and "Deploy manually"
2. Drag and drop your portfolio folder
3. Your site is live (custom domain available)

---

## 🎨 Design Customization

### Change Primary Color

**Option 1: Quick Change**
1. Open `styles.css`
2. Find line 8: `--color-primary: #2563eb;`
3. Replace `#2563eb` with your color
4. All buttons, links, and accents update automatically!

Popular professional colors:
- **Navy**: `#1e3a8a` (Classic)
- **Teal**: `#0d9488` (Modern)
- **Purple**: `#7c3aed` (Creative)
- **Green**: `#059669` (Growth)
- **Red**: `#dc2626` (Bold)

**Option 2: Dark Mode Support**
Add this media query in `styles.css`:
```css
@media (prefers-color-scheme: dark) {
    :root {
        --color-bg-light: #1f2937;
        --color-text-primary: #f3f4f6;
        --color-bg-gray: #374151;
        /* ... more dark mode colors */
    }
}
```

---

## 📝 Content Best Practices

### Project Descriptions
- Problem: 1-2 sentences, clearly state the challenge
- Solution: Explain how you solved it
- Results: Use numbers (45% increase, 4.8★ rating, etc.)

**Example:**
❌ "Worked on a project"
✅ "Redesigned analytics dashboards, reducing time-to-insight from 15 min to 3 min"

### Skills List
Organize by category, aim for 5-6 per category:
- **Design**: UI/UX, User Research, Design Systems, etc.
- **Frontend**: HTML5, CSS3, JavaScript, React, Vue.js
- **Tools**: Figma, Git, VSCode, Chrome DevTools
- **Soft**: Leadership, Mentoring, Public Speaking

### About Section
- 3-4 paragraphs, 2-3 sentences each
- Highlight unique value proposition
- Share personal touch (not too formal)
- End with call-to-action

### Contact Section
Include:
- Email (primary)
- LinkedIn (professional network)
- GitHub (for developers)
- Twitter/Portfolio site (personal brand)

---

## ✅ Quality Checklist

Before launching, verify:

- [ ] All text updated (no "Jordan" or placeholder names)
- [ ] Images added and properly sized (800x500px or 16:9 ratio)
- [ ] Project case studies filled with real content
- [ ] Links work (click every nav link, button, project)
- [ ] Mobile responsive (test on phone)
- [ ] All images have alt text
- [ ] Contact email works
- [ ] Social links point to correct profiles
- [ ] Fast loading (test on slow 3G)
- [ ] No console errors (F12 → Console tab)

---

## 🚨 Common Issues & Solutions

### Images Not Showing
**Problem**: Images appear broken
**Solution**: 
- Check filename matches exactly (project-1.jpg vs project1.jpg)
- Verify correct folder (assets/)
- Ensure image format is supported (JPG, PNG, WebP)

### Styling Looks Wrong
**Problem**: colors/spacing weird
**Solution**:
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Check CSS file loaded (F12 → Network tab)

### Mobile Layout Broken
**Problem**: Text overlaps or cuts off on phone
**Solution**:
- Check viewport meta tag in index.html (should be present)
- Use actual mobile device or DevTools responsive mode
- Test at 375px (smallest phone)

### Links Not Working
**Problem**: Clicking links doesn't navigate
**Solution**:
- Verify file paths are correct (use ./ for same folder)
- Check # anchors match section IDs
- Ensure href attribute is properly closed

---

## 📊 Performance Tips

1. **Optimize Images**
   - Use tool like TinyPNG to compress
   - Save as WebP for modern browsers (fallback JPG)
   - Target max 100KB per image

2. **Minimize External Requests**
   - No external fonts = faster load
   - No CDNs needed (single folder)
   - Single domain = one DNS lookup

3. **Test Speed**
   - Google PageSpeed Insights
   - Check on slow 3G in DevTools
   - Aim for < 2 second load

---

## 🎓 Next Steps

1. **Portfolio Polish**
   - Add custom domain (Google Domains, Namecheap)
   - Set up email forwarding
   - Share on social media

2. **Expand Portfolio**
   - Add 2-3 more project case studies
   - Consider adding blog section
   - Include testimonials or recommendations

3. **Keep Updated**
   - Add new work quarterly
   - Update skills as you learn
   - Refresh home page projects

---

## 📞 Need Help?

**Resources:**
- **HTML Questions**: MDN Web Docs (html.spec.whatwg.org)
- **CSS Help**: CSS-Tricks (css-tricks.com)
- **JavaScript**: JavaScript.info
- **Deployment**: Specific hosting service docs

**Testing Tools:**
- [W3C HTML Validator](https://validator.w3.org/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

---

**Congratulations! You now have a professional portfolio. 🎉**

Go get that dream role! 🚀

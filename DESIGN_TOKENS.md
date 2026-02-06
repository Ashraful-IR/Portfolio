# Design Tokens Reference

Complete reference of all CSS variables available in the portfolio design system.

## 🎨 Colors

### Primary Colors
```css
--color-primary: #2563eb;           /* Main accent - Buttons, links, highlights */
```

Use this for:
- Primary buttons (`.btn-primary`)
- Link colors
- Active states
- Accent underlines
- Focus states
- Success indicators

### Background Colors
```css
--color-bg-light: #ffffff;          /* Main background - Most surfaces */
--color-bg-gray: #f8f9fa;           /* Secondary background - Cards, sections */
```

### Text Colors
```css
--color-text-primary: #1f2937;      /* Main text - Headers, body copy */
--color-text-secondary: #6b7280;    /* Secondary text - Descriptions */
--color-text-muted: #9ca3af;        /* Muted text - Labels, captions */
```

### Border Colors
```css
--color-border: #e5e7eb;            /* Standard borders */
--color-border-light: #f3f4f6;      /* Subtle borders */
```

## 📐 Typography

### Font Families
```css
--font-family-display: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
--font-family-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
```

**Change fonts:**
Replace with your preferred fonts:
- `'Georgia', serif` - Elegant serif
- `'Poppins', sans-serif` - Modern sans-serif (requires Google Fonts import)
- `'Playfair Display', serif` - Designer serif

### Font Sizes
```css
--font-size-xs: 0.75rem;            /* 12px - Captions, small text */
--font-size-sm: 0.875rem;           /* 14px - Labels, secondary */
--font-size-base: 1rem;             /* 16px - Body text, default */
--font-size-lg: 1.125rem;           /* 18px - Large text */
--font-size-xl: 1.25rem;            /* 20px - Subheadings */
--font-size-2xl: 1.5rem;            /* 24px - Section titles */
--font-size-3xl: 2rem;              /* 32px - Page titles */
--font-size-4xl: 2.5rem;            /* 40px - Large hero */
--font-size-5xl: 3rem;              /* 48px - XL hero */
```

### Line Heights
```css
--line-height-tight: 1.25;          /* Tight heading spacing */
--line-height-snug: 1.375;          /* Snug spacing */
--line-height-normal: 1.5;          /* Standard body spacing */
--line-height-relaxed: 1.625;       /* Relaxed paragraph spacing */
--line-height-loose: 2;             /* Very loose spacing */
```

## 📏 Spacing Scale

All spacing uses 8px base unit:

```css
--space-1:  0.25rem;                /* 4px - Tiny gaps */
--space-2:  0.5rem;                 /* 8px - Small padding */
--space-3:  0.75rem;                /* 12px - Small margins */
--space-4:  1rem;                   /* 16px - Standard padding */
--space-5:  1.25rem;                /* 20px - Standard margin */
--space-6:  1.5rem;                 /* 24px - Component spacing */
--space-8:  2rem;                   /* 32px - Section padding */
--space-10: 2.5rem;                 /* 40px - Large spacing */
--space-12: 3rem;                   /* 48px - Section margins */
--space-16: 4rem;                   /* 64px - Large sections */
--space-20: 5rem;                   /* 80px - XL spacing */
--space-24: 6rem;                   /* 96px - XXL spacing */
```

**Usage Pattern:**
- Padding: `padding: var(--space-6);` = 24px padding
- Margins: `margin: var(--space-8) 0;` = 32px top/bottom margin
- Gaps: `gap: var(--space-4);` = 16px gap between items

## 🔲 Border Radius

```css
--radius-sm: 0.375rem;              /* 6px - Small radius */
--radius-md: 0.5rem;                /* 8px - Standard radius */
--radius-lg: 0.75rem;               /* 12px - Large radius */
--radius-xl: 1rem;                  /* 16px - Extra large radius */
```

Use for:
- Buttons: `border-radius: var(--radius-lg);`
- Cards: `border-radius: var(--radius-lg);`
- Images: `border-radius: var(--radius-lg);`
- Small elements: `border-radius: var(--radius-sm);`

## 🌑 Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

**When to use:**
- `--shadow-sm`: Subtle elevation on hover
- `--shadow-md`: Cards, buttons on hover
- `--shadow-lg`: Modal dialogs, floating elements
- `--shadow-xl`: Deep elevation, special focus

## ⏱️ Transitions & Animations

```css
--transition-fast: 150ms ease-out;  /* Quick interactions */
--transition-base: 200ms ease-out;  /* Standard transitions */
--transition-slow: 300ms ease-out;  /* Slow animations */
```

**Usage:**
```css
.btn:hover {
    transition: all var(--transition-base);
    transform: translateY(-2px);
}

.card:hover {
    box-shadow: var(--shadow-lg);
    transition: box-shadow var(--transition-base);
}
```

**Philosophy:** Keep animations fast (< 200ms) for snappy feel.

---

## 🔧 How to Use Tokens

### Example 1: Create a New Button Style
```css
.btn-custom {
    padding: var(--space-4) var(--space-6);
    background-color: var(--color-primary);
    border-radius: var(--radius-lg);
    font-size: var(--font-size-sm);
    transition: all var(--transition-base);
}

.btn-custom:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
}
```

### Example 2: Create a New Card Component
```css
.custom-card {
    padding: var(--space-8);
    background-color: var(--color-bg-light);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-base);
}

.custom-card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
}
```

### Example 3: Custom Text Styling
```css
.section-title {
    font-size: var(--font-size-2xl);
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--space-6);
    line-height: var(--line-height-tight);
}

.section-description {
    font-size: var(--font-size-base);
    color: var(--color-text-secondary);
    line-height: var(--line-height-relaxed);
}
```

---

## 🎯 Quick Customization Scenarios

### Scenario 1: Change Brand Color
Goal: Use teal instead of blue

**Step 1:** Update primary color
```css
:root {
    --color-primary: #0d9488;  /* Changed from #2563eb */
}
```

**Result:** All buttons, links, and accents instantly use teal!

### Scenario 2: Make Text Larger
Goal: Increase base font size for better readability

**Step 1:** Update font size
```css
:root {
    --font-size-base: 1.125rem;  /* Changed from 1rem (16px to 18px) */
}
```

**Result:** All body text is now larger

### Scenario 3: Add More Spacing
Goal: Increase padding on cards for more breathing room

**Step 1:** Update card styles
```css
.project-card {
    padding: var(--space-10);  /* Changed from var(--space-6) */
}
```

### Scenario 4: Faster Animations
Goal: Make interactions snappier

**Step 1:** Update transition
```css
:root {
    --transition-base: 100ms ease-out;  /* Changed from 200ms */
}
```

---

## 📱 Responsive Scale

Tokens automatically scale across screen sizes:

```css
/* Default: Large screens */
h1 {
    font-size: var(--font-size-4xl);  /* 40px */
}

/* Smaller screens */
@media (max-width: 768px) {
    h1 {
        font-size: var(--font-size-3xl);  /* 32px */
    }
}
```

---

## ✨ Token Best Practices

1. **Always use tokens** - Don't hardcode colors or sizes
   ```css
   ✅ color: var(--color-text-primary);
   ❌ color: #1f2937;
   ```

2. **Maintain consistency** - Same spacing, colors, shadows
   ```css
   ✅ padding: var(--space-6);
   ❌ padding: 25px;  /* Not a token value */
   ```

3. **Scale purposefully** - Use spacing scale steps
   ```css
   ✅ margin: var(--space-6) var(--space-8);
   ❌ margin: 20px 35px;  /* Odd numbers break grid */
   ```

4. **Group related tokens**
   ```css
   /* ✅ Good - buttons grouped */
   .btn {
       padding: var(--space-3) var(--space-6);
       border-radius: var(--radius-lg);
       transition: all var(--transition-base);
   }

   /* ❌ Bad - scattered styles */
   .btn { padding: 12px 24px; border-radius: 12px; }
   ```

---

## 🎨 Extending the System

### Add a New Color
```css
:root {
    --color-success: #10b981;      /* New success green */
    --color-warning: #f59e0b;      /* New warning amber */
    --color-error: #ef4444;        /* New error red */
}
```

### Add Custom Font Size
```css
:root {
    --font-size-2xs: 0.625rem;     /* 10px for very small text */
    --font-size-6xl: 3.75rem;      /* 60px for mega headlines */
}
```

### Add Animation Durations
```css
:root {
    --transition-instant: 50ms ease-out;
    --transition-extra-slow: 500ms ease-out;
}
```

---

## 🚀 Advanced Usage

### Using CSS Custom Properties in JavaScript
```javascript
// Read a token value
const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--color-primary');

// Change a token dynamically
document.documentElement.style.setProperty(
    '--color-primary',
    '#059669'  /* New teal color */
);
```

### Dynamic Dark Mode with Tokens
```css
@media (prefers-color-scheme: dark) {
    :root {
        --color-bg-light: #1f2937;
        --color-text-primary: #f3f4f6;
        --color-bg-gray: #374151;
        --color-border: #4b5563;
    }
}
```

---

## 📖 External Resources

- [MDN: CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Design Tokens for Accessible Design Systems](https://www.designsystems.com/what-are-design-tokens/)
- [Spectrum Design Tokens](https://spectrum.adobe.com/page/design-tokens/)

---

**Last Updated:** February 2026
**Current Version:** 1.0

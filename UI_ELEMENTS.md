# Articulink UI Elements Inventory

This document catalogs all UI elements across Articulink projects to guide the design system.

---

## Projects Audited

| Project | Stack | Purpose |
|---------|-------|---------|
| **Portal** | Next.js + Tailwind | Client-facing dashboard |
| **Website** | Next.js + Tailwind | Marketing website |
| **Admin** | Next.js + Tailwind | Internal admin panel |
| **Speech Screener** | SvelteKit + Skeleton UI | Speech assessment tool |

---

## Core UI Components

### Buttons

| Element | Variants | Used In |
|---------|----------|---------|
| Primary Button | Solid fill, gradient | All projects |
| Secondary Button | Outline/border | Portal, Website, Admin |
| Accent Button | Yellow/highlight | Website, Portal |
| Ghost Button | Transparent/outline on dark | Website |
| Icon Button | Square with icon only | All projects |
| Loading Button | With spinner, disabled state | All projects |
| Pill Button | Fully rounded | Website, Portal |

**Button States**: Default, Hover, Active, Focus, Disabled, Loading

---

### Form Elements

| Element | Description | Used In |
|---------|-------------|---------|
| Text Input | Single-line text | All projects |
| Email Input | Email validation | All projects |
| Password Input | Masked text | Portal, Admin |
| Number Input | Numeric only | Admin, Screener |
| Date Input | Date picker | Portal, Admin |
| Time Input | Time picker | Portal, Admin |
| Text Area | Multi-line text | Portal, Admin |
| Select/Dropdown | Single selection | All projects |
| Checkbox | Toggle boolean | Portal, Admin |
| Radio Button | Single choice from group | Portal, Admin |
| Search Input | With search icon | Portal, Admin, Website |
| Form Label | With required indicator | All projects |
| Input Error State | Red border + message | All projects |
| Input Focus State | Blue ring | All projects |

---

### Cards

| Element | Description | Used In |
|---------|-------------|---------|
| Basic Card | White bg, shadow, rounded | All projects |
| Stat Card | Icon + number + label | Portal, Admin |
| Feature Card | Icon + title + description | Website |
| Service Card | Icon badge + text + link | Website |
| Pricing Card | Price + features + CTA | Website |
| Testimonial Card | Quote + avatar + name | Website |
| Client Card | Avatar + info + status | Portal, Admin |
| Therapist Card | Photo + credentials + rating | Website, Portal, Admin |
| Appointment Card | Date/time + details + actions | Portal, Admin |
| Transaction Card | Icon + description + amount | Portal, Admin |
| Download Card | File type + download button | Brand |

**Card States**: Default, Hover (lift + shadow), Selected

---

### Navigation

| Element | Description | Used In |
|---------|-------------|---------|
| Header/Navbar | Sticky top navigation | Website, Portal |
| Sidebar | Fixed side navigation | Portal, Admin |
| Mobile Menu | Hamburger + drawer | Website, Portal, Admin |
| Breadcrumb | Path trail navigation | Website |
| Tab Navigation | Horizontal tabs | Portal, Admin |
| Footer | Links + newsletter + social | Website |
| Nav Link | With active/hover states | All projects |
| Mobile Sticky CTA | Bottom fixed bar | Website |

---

### Modals & Overlays

| Element | Description | Used In |
|---------|-------------|---------|
| Modal Dialog | Centered overlay | Portal, Admin |
| Confirmation Modal | Yes/No actions | Portal, Admin |
| Form Modal | Modal with form | Portal, Admin |
| Backdrop | Semi-transparent overlay | Portal, Admin |
| Drawer/Slide-over | Side panel | Portal |
| Toast/Notification | Temporary message | Portal, Admin |

---

### Status & Badges

| Element | Variants | Used In |
|---------|----------|---------|
| Status Badge | Success, Warning, Error, Info, Neutral | All projects |
| Role Badge | Admin, Therapist, Client, Parent | Portal, Admin |
| Appointment Status | Scheduled, Confirmed, In Progress, Completed, Cancelled, No Show | Portal, Admin |
| Category Badge | Topic/category label | Website |
| Count Badge | Numeric indicator | Portal, Admin |
| Step Badge | Numbered progress step | Portal, Screener |

**Status Colors**:
- Success/Complete: Green
- Warning/Pending: Amber/Yellow
- Error/Cancelled: Red
- Info/Active: Blue
- Neutral/Default: Gray

---

### Progress & Loading

| Element | Description | Used In |
|---------|-------------|---------|
| Spinner | Circular loading | All projects |
| Progress Bar | Horizontal fill | Portal |
| Step Indicator | Numbered steps with connectors | Portal, Screener |
| Skeleton Loader | Placeholder shimmer | Portal |
| Loading Overlay | Full-screen loader | Admin |

---

### Data Display

| Element | Description | Used In |
|---------|-------------|---------|
| Data Table | Rows + columns + sorting | Admin |
| Table Pagination | Page numbers + prev/next | Admin |
| List View | Vertical item list | Portal, Admin |
| Grid View | Card grid layout | All projects |
| Empty State | No data message + CTA | Portal, Admin |
| Stats Counter | Animated number | Website |
| Rating Stars | 5-star display | Website, Portal |
| Avatar | Circular image or initials | All projects |
| Avatar Group | Stacked avatars | Portal |

---

### Typography

| Element | Usage | Font |
|---------|-------|------|
| H1 Heading | Page titles | Nunito (Display) |
| H2 Heading | Section titles | Nunito (Display) |
| H3 Heading | Subsection titles | Nunito (Display) |
| H4-H6 Heading | Minor headings | Poppins (Sans) |
| Body Text | Paragraphs | Poppins (Sans) |
| Eyebrow Label | Above headings | Caveat (Handwrite) |
| Caption/Small | Helper text | Poppins (Sans) |
| Code/Mono | Code snippets | SF Mono / Fira Code |
| Link | Inline links | Poppins (Sans) |
| Blockquote | Quoted text | Poppins (Sans) |

---

### Decorative Elements

| Element | Description | Used In |
|---------|-------------|---------|
| Star Sparkles | Animated twinkling stars | Website |
| Speech Bubbles | Floating decorative bubbles | Website |
| Blob/Glow | Animated gradient blobs | Website |
| Wave Divider | Section transition | Website |
| Dot Grid Pattern | Background texture | Website |
| Icon Badge | Gradient circle with icon | Website, Portal |

---

### Interactive Elements

| Element | Description | Used In |
|---------|-------------|---------|
| Accordion/Collapse | Expandable sections | Website (FAQ), Portal |
| Tooltip | Hover info popup | Portal, Admin |
| Dropdown Menu | Click-triggered menu | Admin |
| Filter Pills | Removable filter tags | Admin |
| Bulk Selection | Checkbox + action bar | Admin |
| Toggle Switch | On/off control | Portal, Admin |
| Color State Button | Multi-state toggle (Screener) | Screener |
| Increment/Decrement | +/- number control | Screener |

---

### Media

| Element | Description | Used In |
|---------|-------------|---------|
| Image | Responsive, optimized | All projects |
| Image with Overlay | Brand color filter | Website |
| Avatar Image | Circular crop | All projects |
| Hero Image | Large feature image | Website |
| Icon | Inline SVG | All projects |
| Logo | Brand wordmark | All projects |

---

### Layout Components

| Element | Description | Used In |
|---------|-------------|---------|
| Container | Max-width wrapper | All projects |
| Section | Page section wrapper | Website, Brand |
| Grid | Responsive column grid | All projects |
| Flex Row/Column | Flexible layout | All projects |
| Divider | Horizontal separator | All projects |
| Spacer | Vertical spacing | All projects |
| Page Hero | Dark hero section | Website |
| Page CTA | Bottom call-to-action | Website |

---

### Specialized Components

#### Portal-Specific
- Onboarding Dashboard (multi-step wizard)
- Intake Form (4-step wizard)
- Appointment Booking (multi-step)
- Credit Balance Display
- Session Notes (SOAP format)
- Therapist Profile Card
- Client Profile Card

#### Website-Specific
- Pricing Table/Cards
- Testimonial Carousel
- How It Works Steps
- Service Cards Grid
- Blog/Learn Cards
- Therapist Directory
- Contact Form
- Newsletter Signup

#### Admin-Specific
- Data Tables with Bulk Actions
- User Management List
- Appointment Calendar View
- Audit Log Display
- Import/Export Tools
- Analytics Charts

#### Screener-Specific
- Phoneme Button Grid
- Age Selector
- Tutorial Wizard
- Score Results Display
- Word Image Display

---

## Animation Classes

| Animation | Description | Used In |
|-----------|-------------|---------|
| fadeInUp | Fade + slide up | Website, Portal |
| float | Gentle floating | Website |
| sparkle | Twinkling effect | Website |
| pulseGlow | Pulsing opacity | Website |
| spin | Rotation (loaders) | All projects |
| scale | Grow on hover | All projects |
| slideIn | Slide from side | Portal |
| bounce | Bouncing motion | Website |

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| sm | 640px | Small tablets |
| md | 768px | Tablets |
| lg | 1024px | Laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

---

## Summary: Components to Design

### Priority 1: Core Components (Used Everywhere)
1. Buttons (all variants)
2. Form inputs (all types)
3. Cards (basic, feature, stat)
4. Navigation (header, sidebar, mobile)
5. Badges & status indicators
6. Avatars
7. Typography scale
8. Modals

### Priority 2: Data Components
1. Tables with pagination
2. Lists
3. Empty states
4. Loading states
5. Progress indicators

### Priority 3: Marketing Components
1. Hero sections
2. Feature cards
3. Testimonials
4. Pricing cards
5. CTA sections
6. Decorative elements

### Priority 4: Specialized Components
1. Multi-step wizards
2. Calendar/date pickers
3. Rich text editors
4. Charts/analytics
5. File upload

---

*Document generated from audit of portal/, website/, admin/, and speech-screener/ projects.*

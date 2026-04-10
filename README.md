# FOSSEE Workshop Booking — UI/UX Redesign 

A React-based redesign of the FOSSEE Workshop Booking portal developed for IIT Bombay.
The original site was built with Django templates and Bootstrap 3. 

This redesign focuses on mobile usability, visual clarity, and accessibility — keeping the core functionality intact.

---

## Before vs After ScreenShots ..................

### Home Page
| Before-page | After-page |

| No landing section, plain list | Hero banner + filterable workshop cards |

### Login Page
| Before-page | After-page |

| Basic Bootstrap card, no feedback | Clean card with show/hide password, inline errors |

### Profile Page
| Before-page | After-page |

| Raw HTML tables | Avatar card + info grid + workshop history |

### Register Page
| Before | After |

| Single long form | 2-step form with validation at each step |

> Screenshots are in the ` \src\assets\ScreenShots` folder.

---

## Setup Instructions

### Requirements
- Node.js v18 or above
- npm v9 or above

### Steps
```bash
# 1. Clone this repository
git clone https://github.com/nikharendra/fossee-workshop-ui


# 2. Go into the folder
cd fossee-workshop-ui

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for production
```bash
npm run build
```

---

## Pages

| Route | Page |
|-------|------|
| `/` | Home — workshop listings with search and filter |
| `/login` | Login — sign in form |
| `/register` | Register — 2-step signup form |
| `/profile` | Profile — user info and workshop history |

---

## Design Reasoning

### Q1: What design principles guided your improvements?

When I first opened the original site, the thing that struck me most was how everything
was just stacked on the page with no breathing room. Tables for profile info, no visual
grouping, no clear starting point for a new user.

I focused on three things:

**Visual hierarchy** — The most important action on each page should be obvious
immediately. On the home page that is booking a workshop. On login it is the sign-in
button. I made these stand out by size, color and position rather than making
everything look equal.

**Consistency** — I defined CSS variables at the root level (--fossee-red, --fossee-dark
etc.) so every color decision across all pages comes from one place. This way the site
feels like one product rather than separate pages.

**Feedback** — The original login had no error highlighting on individual fields. I added
inline validation so users know exactly which field has a problem. The register form
splits into two steps so it does not feel overwhelming on mobile.

### Q2: How did you ensure responsiveness across devices?

The task description specifically said students access this primarily on mobile. So I
built mobile-first — meaning I wrote the CSS for small screens first and then added
`@media (min-width: 768px)` rules to expand the layout for larger screens.

Specific decisions I made:

- The Navbar collapses into a hamburger menu below 768px width. I built this with
  a React `useState` hook rather than relying on Bootstrap's JavaScript.

- Workshop cards use CSS Grid with `auto-fill` and `minmax(300px, 1fr)` so they
  automatically reflow from 1 column on mobile to 3 columns on desktop without any
  JavaScript.

- The profile info section uses a 2-column grid on desktop but stacks to 1 column
  on mobile using a single media query.

- The register form's name fields sit side by side on desktop but stack vertically
  on mobile.

- All tap targets (buttons, links) are at least 44px tall which is the minimum
  recommended for touch interaction.

I tested every page using Chrome DevTools device simulator on iPhone SE (375px),
iPhone 14 (390px) and iPad (768px).

### Q3: What trade-offs did you make between design and performance?

The main trade-off I consciously made was between visual richness and load speed.

I chose **not** to use a UI component library like Material UI or Ant Design even
though they would have made some things faster to build. The reason is that those
libraries add 200-400KB to the bundle size. Since this portal is used by students
who may be on slow mobile connections, keeping the bundle small matters more than
development convenience.

Instead I wrote all CSS from scratch using plain CSS with custom properties. The
total CSS across all files is under 15KB.

For icons I used `react-icons` which is tree-shakeable — meaning only the specific
icons I import are included in the final build, not the entire icon library.

I also avoided using images anywhere in the UI. The avatar on the profile page uses
the user's initials rendered in CSS, which means zero image HTTP requests for that
component.

The hero section uses a CSS gradient instead of a background image. This looks
similar visually but is a fraction of the size.

### Q4: What was the most challenging part and how did you approach it?

The most challenging part was the register form. The original site had one long form
and I wanted to split it into steps — but I had to figure out how to validate only
Step 1 fields before allowing the user to proceed to Step 2.

My first attempt validated the entire form at once which caused Step 2 fields to show
errors even before the user reached that step. That was confusing.

I fixed this by writing a separate `validateStep1()` function that only checks the
fields visible in Step 1. When the user clicks Next, only those fields are validated.
Step 2 fields are not touched until the final submit.

The other challenge was the mobile navbar. Getting the dropdown to close when a link
is clicked (not just when the hamburger is pressed) required me to pass
`onClick={() => setMenuOpen(false)}` to each nav link. This was a small thing but
it made the mobile experience feel much more natural.

---

## Tech Stack

- React 18 (via Vite)
- React Router DOM v6
- React Icons
- Plain CSS with custom properties (no CSS framework)


# FOSSEE Workshop Booking — UI/UX Redesign

##  Live Demo
https://fossee-workshop-ui.vercel.app/



## Original Repository

https://github.com/FOSSEE/workshop_booking


## Author

**Harendra Singh Yadav**  
1st Year, Computer Science(MCA)  
Submitted for FOSSEE Summer Fellowship 2026 — IIT Bombay
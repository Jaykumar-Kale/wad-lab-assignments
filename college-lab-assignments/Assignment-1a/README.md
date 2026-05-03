# Assignment 1a – Responsive Web Page Design using HTML, CSS and Bootstrap

---

## Problem Statement
Create a responsive web page which shows the college/admin dashboard with sidebar and statistics in cards using HTML, CSS and Bootstrap.

---

## Objective
To apply HTML, CSS and Bootstrap classes to design and develop a responsive web dashboard layout and demonstrate understanding of responsive web design concepts.

---

## Tools & Technologies Used
- HTML5
- CSS3
- Bootstrap 5
- VS Code
- Git & GitHub

---

## Theory

### 1. HTML (HyperText Markup Language)
HTML is the standard markup language used to create web pages. It defines the structure of a web page using elements such as headings, paragraphs, divs, lists, tables, and forms. HTML elements are enclosed within tags like `<html>`, `<head>`, and `<body>`.

HTML Boilerplate Structure:
- `<!DOCTYPE html>` defines document type.
- `<head>` contains meta information and links.
- `<body>` contains visible content of the webpage.

---

### 2. CSS (Cascading Style Sheets)
CSS is used to style and design HTML elements. It controls layout, colors, fonts, spacing, and responsiveness.

Types of CSS:
- Inline CSS
- Internal CSS
- External CSS (used in this assignment)

CSS Selectors Used:
- Class selector (`.class`)
- Element selector
- Pseudo-class (`:hover`)

---

### 3. Bootstrap
Bootstrap is a front-end framework used to design responsive and mobile-first websites quickly. It provides predefined classes for layout, styling, and components.

Features Used:
- Grid System
- Cards
- Navbar
- Utility classes (spacing, font weight, colors)
- Responsive breakpoints

---

## Bootstrap Grid System

Bootstrap uses a 12-column grid layout.

Breakpoints:
- `col-sm-` → ≥576px
- `col-md-` → ≥768px
- `col-lg-` → ≥992px

Implementation in this assignment:
- Sidebar → `col-md-3`
- Main Content → `col-md-9`
- Cards → `col-sm-6 col-md-3`

Responsive Behavior:
- Mobile → 1 card per row
- Small screens → 2 cards per row
- Medium & above → 4 cards per row

---

## Layout Structure

Dashboard Structure:

- Top Navbar
- Sidebar (Vertical Navigation)
- Main Content Area
- Statistics Cards

Layout Logic:
- Used `container-fluid` for full width layout.
- Used `row` for grid structure.
- Used `flex-column` to align sidebar items vertically.
- Used `min-vh-100` to make sidebar full height.

---

## Features Implemented

- Responsive Sidebar Navigation
- Hover effect on sidebar links
- Top Navigation Bar
- Statistics Cards using Bootstrap Card component
- Responsive Grid Layout
- External CSS styling
- Mobile-first responsive design

---

## Key Bootstrap Classes Used

- `container-fluid`
- `row`
- `col-md-*`
- `col-sm-*`
- `card`
- `card-body`
- `navbar`
- `nav`
- `nav-link`
- `shadow`
- `bg-primary`
- `text-white`
- `fw-bold`
- `min-vh-100`

---

## Difference Between container and container-fluid

| container | container-fluid |
|------------|----------------|
| Fixed responsive width | Full width (100%) |
| Center aligned layout | Stretches entire screen |
| Used for content websites | Used for dashboards/admin panels |

---

## Conclusion

Thus, we successfully designed and developed a responsive web dashboard using HTML, CSS, and Bootstrap. The implementation demonstrates understanding of Bootstrap Grid System, responsive breakpoints, layout structuring, and component usage. The dashboard adapts dynamically to different screen sizes, fulfilling the objective of responsive web design.

---

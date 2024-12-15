# Portfolio Website Features Report

## Table of Contents
1. [Introduction](#Introduction)
2. [Bootstrap Features](#Bootstrap-Features)
3. [Dynamic Content](#Dynamic-Content)
4. [Accessibility](#Accessibility)
5. [Performance Observations](#Performance-Observations)
6. [Design Consistency](#Design-Consistency)
7. [Conclusion](#Conclusion)

## Introduction
This is my portfolio website, which is a complete showcase of my skills, projects, and professional journey. It is built with modern web development principles in mind, and utilizing responsive design, interactive functionality and accessibility to maximize the user experience. The site combines different Bootstrap and custom JavaScript components to form a thorough and professional website. This report will provide an overview of the major features and functionality I have incorporated into my portfolio website, detailed breakdowns of dynamic content, Bootstrap components and extra features such as the time feature and contact form functionality etc.

## Bootstrap Features
- Responsive Layout: Media queries are used to add style for different devices in order to enable a mobile-first approach for the website.Percentage-based widths and responsive utilities enable uniform layout across devices.
- Navbar: A sticky navbar in the top of the viewport for accessibility.Has an overlay drawer menu that slides in using JavaScript dynamic control.Fully compatible and responsive on mobile desktop.
- Hero Section: A visually appealing fullscreen splash section with fading text animation.Smooth scrolling navigation to direct users to the next section in the webpage.
- Card Components: Implemented in Projects Section which uses hover that magnify the cards and add box shadows to the cards when mouse is hovered over.
- Buttons: Using a Bootstrap conventions for styling the primary and secondary action buttons (with hover effects).
- Modals: Modal interactions used to display several informations such as projects, locations, grades etc, incorporate transitions on fade in and fade out for optimal UX.
3. Utilities:
- Typography: Ensure readability with consistent use of font-size, font-weight and color properties. Features a time-ranged greeting based on the time of day.
- Icons: Custom social media and navigation icons using Boostrap styling and hover effects.

## Dynamic Content
- Hero Section: Displays rotating text like “4th Year Computing Student” and “IT Management.” Introduced smooth scrolling feature through JavaScript to provide a better user navigation experience.
- About Me: Here you can find About Me (modal viewer with CV, fall back display for mobile) Functionality to create an interactive overview of professional data.
- Projects: Contains project cards with hover animations to add a little interactivity. Includes an image carousel for project previews.
- Skills Section: Progress bars animate dynamically when they come into view (using Intersection Observer). An eye catchy visualisation of percentage values being displayed on the real time.
- Contact Section: A JavaScript-based form which validates inputs and sends notifications after completing.
- Timeline: As you scroll, the timeline items get revealed as they hit the viewport. I have better view on information for my education and work experience available through interactive modals.
- Footer: Hovering over the social media icons in the footer changes their color to the website or brand's specific color.
- Time Feature: Show a live clock giving us current time in HH:MM:SS format. And a greeting message (“Good Morning,” “Good Afternoon,” “Good Evening”) depending on the time of the day.
- Scroll-to-Top Button: Comes into view on dynamic scrolling. So this smoothly scrolls the page to the top.
- Background Music: Play background music automatically on load (with fallback for broken browsers). An icon that toggles between play/pause, visually.
- Map Integration: Provides an interactive map integrated with fetch API in OpenStreetMap that pinpoints my work experience location.

## Accessibility
- Keyboard Navigation: All interactive components like modals can be dismissed through the X button (which can also be closed by just clicking anywhere).
- Responsive Design: Mobile-first design makes a website usable on any screen size.

## Performance Observations
- Strengths: Performance optimizations ensure that you get quick, responsive animations by using Modular JavaScript and lazy-loading.

## Design Consistency
- Color Scheme: Uses mostly dark backgrounds (#2C2C2C) and light text for contrast. Interactive elements are highlighted by blue accents (#0077b5).
- Fonts: The site uses a consistent font family (Verdana, Geneva, Tahoma, sans-serif) for easy reading.
- Spacing: Logical use of padding, margin and grid-based layouts promote reading comprehension and a balanced UI.
## Conclusion
This is a solid example of a modern web development portfolio. Combining Bootstrap elements, tailored JavaScript logic, and rich content, it offers an intuitive user interface. Just a few optimizations and accessibility improvements will take the portfolio to a higher level of professionalism and functionality. This project reflects my skills in creating a responsive, user-friendly and fully-functional website.

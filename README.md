# Saverna Ahmad — UX Design Portfolio

**Research. Design. Prototype.**
Live site: https://savernaa.github.io

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home: introduction and selected work |
| `about.html` | About: experience, tools, education |
| `resonate.html` | Case study: Resonate, live events for Deaf and hard-of-hearing fans |
| `assets/style.css` | Design: colors, type, layout, light and dark mode |
| `assets/edit.js` | Edit mode (see below) |
| `assets/images/` | Images and videos |

## Editing text

Open any page with `?edit` at the end of the address (for example `resonate.html?edit`), click the text, type, and press **Save page**. Upload the saved file here to replace the old one. Visitors never see edit mode.

Hidden `TODO` notes in each page mark text to replace with real research, findings, and links.

---

## Accessibility

**Target: WCAG 2.2 Level AA.** Last checked: October 16, 2026.

### How it was tested

- **Automated:** axe-core 4.10 against WCAG 2.0, 2.1, and 2.2 A and AA rules, on every page, in light and dark mode. Result: **0 violations**.
- **Color contrast:** every text and background pair calculated by hand (table below).
- **Reflow (1.4.10):** no sideways scrolling at 320 px wide (equal to 400% zoom). Diagrams scroll inside their own panel and can be scrolled with the keyboard.
- **Resize text (1.4.4):** text sizes use `rem`, so they follow the browser's text-size setting and zoom.
- **Text spacing (1.4.12):** no text is cut off with increased line, letter, word, and paragraph spacing.

### What's built in

- Skip link, page language, one `h1` per page, and headings in order
- Visible keyboard focus on every link and button
- Every link and button is at least 44 by 44 points on phones (also meets WCAG 2.5.8 Target Size)
- Links inside text are underlined, so they never rely on color alone
- Every image, diagram, and placeholder has a text alternative; diagrams include a title and description
- Alert levels use color, an icon, **and** a word
- Light and dark mode follow the device setting
- Animations are turned off for people who choose Reduce Motion
- Readable line length (about 60–75 characters) and line height of 1.55

### Color palette and contrast

Minimum: **4.5:1** for text, **3:1** for large text and graphics.

| Use | Light mode | Contrast | Dark mode | Contrast |
| --- | --- | --- | --- | --- |
| Body text on background | `#1d1d1f` on `#ffffff` | 16.8:1 | `#f5f5f7` on `#000000` | 19.3:1 |
| Secondary text on background | `#6e6e73` on `#ffffff` | 5.1:1 | `#a1a1a6` on `#000000` | 8.2:1 |
| Secondary text on panels | `#6e6e73` on `#f5f5f7` | 4.7:1 | `#a1a1a6` on `#161617` | 7.0:1 |
| Links and accent | `#0066cc` on `#ffffff` | 5.6:1 | `#2997ff` on `#000000` | 7.0:1 |
| Badges | `#0066cc` on `#e8f1fb` | 4.9:1 | `#2997ff` on `#0b2440` | 5.2:1 |
| Buttons | `#ffffff` on `#0071e3` | 4.7:1 | `#ffffff` on `#0071e3` | 4.7:1 |
| Safety red (mockups) | `#ffffff` on `#d70015` | 5.4:1 | same | 5.4:1 |
| Announcement orange (mockups) | `#b25000` on `#ffffff` | 5.2:1 | same | 5.2:1 |

### Type

System font (San Francisco on Apple devices; Helvetica or Arial elsewhere).

| Style | Size |
| --- | --- |
| Page title (`h1`) | 2.5–4 rem (40–64 px), scales with screen |
| Section title (`h2`) | 1.75–2.5 rem (28–40 px) |
| Subsection (`h3`) | 1.3125 rem (21 px) |
| Intro text | 1.1875–1.5 rem (19–24 px) |
| Body | 1.0625 rem (17 px) |
| Smallest text (labels, captions) | 0.875 rem (14 px) |

### Apple Human Interface Guidelines principles

Apple's Human Interface Guidelines are written for apps, but the website follows the same principles:

| Principle | How the website follows it |
| --- | --- |
| **Typography** | Apple's system font (San Francisco) with a clear size hierarchy. Text follows the visitor's text-size setting. |
| **Touch targets** | Every link and button is at least 44 by 44 points on a phone, Apple's minimum. Checked on a 390-point-wide iPhone screen. |
| **Dark mode** | Follows the device setting automatically. |
| **Increase Contrast** | When this setting is on, secondary text, borders, and links become stronger. |
| **Reduce Motion** | Card and banner animations turn off. |
| **Clarity** | One idea per section, generous spacing, and content first. |

### Checklist for anything new you add

- [ ] Images: write `alt` text that says what the image shows. Use `alt=""` only for decoration.
- [ ] Videos: add **captions** (required, WCAG 1.2.2). Add audio description or a text summary if the video shows important information without words. This matters especially for a project about Deaf and hard-of-hearing fans.
- [ ] Nothing flashes more than 3 times a second.
- [ ] New colors: check contrast (4.5:1 for text) with the WebAIM Contrast Checker.
- [ ] Headings stay in order (`h2`, then `h3`); don't skip levels.
- [ ] Link text says where it goes ("Read the Resonate case study," not "click here").
- [ ] Check the page with VoiceOver (Command-F5 on a Mac) and at 200% zoom.

---

Concept projects are independent work and are not affiliated with Apple or any company named.

# Sweet Bites BBQ

Restaurant site for a fictional BBQ spot; menu, hours and a reservation form in plain HTML/CSS/JS.

- **Live site:** https://sweetbite.tanmaydesai.xyz (hosted on GitHub Pages)
- **Portfolio page:** https://tanmaydesai.xyz/sweet-bite

## About this project

This is one of my early front-end projects, built while I was learning HTML, CSS and JavaScript. "Sweet Bites BBQ" is made up: the address, phone number and email are placeholders, and nothing here is a real restaurant. The code is a learner's code, and the comments in `js/` say where I picked things up (W3Schools, Stack Overflow, and some help from AI). I've kept it as it was rather than polishing it into something it isn't.

## Screenshots

<!-- PLACEHOLDER: screenshot -->

## Pages

| Page | File | What's on it |
| --- | --- | --- |
| Home | `index.html` | Welcome banner, links to the other pages, address and dining hours |
| Menu | `menu.html` | Menu by section (specialities, sandwiches, sandos, sides, desserts) |
| Reservation | `reservation.html` | Seating info and a booking form (name, time, table type, email, phone) |
| About Us | `contact.html` | Parking, shuttle and transit info, merchandise, contact link |

## Stack

- HTML5
- CSS3 (one stylesheet per page, in `css/`)
- Vanilla JavaScript (`js/`): back-to-top button, show/hide of the booking form
- Font Awesome icons and a Google Font, loaded from their CDNs

No framework, no build step, no dependencies to install.

## Run it locally

Easiest: open `index.html` in a browser.

Or use a static server from the project folder:

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Things to know

- The reservation form has no backend. Confirming a booking only shows an `alert()`; nothing is stored or sent.
- The Google Maps script on the About Us page uses a placeholder API key, so no map loads.

## License

MIT, see [LICENSE](LICENSE).

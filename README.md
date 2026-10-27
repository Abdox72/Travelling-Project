# ✈️ TravelSense

A responsive travel-advisor landing page where visitors can search destinations, learn why a travel advisor is worth it, browse featured advisors, and read trending travel stories. Built with plain **HTML, CSS, and JavaScript**, and ready to ship as a **Docker + Nginx** container.

![HTML5](https://img.shields.io/badge/HTML5-14141A?style=flat-square&logo=html5&logoColor=E34F26)
![CSS3](https://img.shields.io/badge/CSS3-14141A?style=flat-square&logo=css3&logoColor=1572B6)
![JavaScript](https://img.shields.io/badge/JavaScript-14141A?style=flat-square&logo=javascript&logoColor=F7DF1E)
![jQuery](https://img.shields.io/badge/jQuery-14141A?style=flat-square&logo=jquery&logoColor=0769AD)
![Docker](https://img.shields.io/badge/Docker-14141A?style=flat-square&logo=docker&logoColor=2496ED)
![Nginx](https://img.shields.io/badge/Nginx-14141A?style=flat-square&logo=nginx&logoColor=009639)

<!-- Add a screenshot after you take one:
![TravelSense preview](images/preview.png)
-->

---

## ✨ Features

- **Hero search**: search by destination and pick a journey type (adventure travel, archeology, art & culture, and more).
- **Sticky navigation** with quick links to Travel Tips, Destinations, and Plan Your Trip.
- **"Why use a Travel Advisor"** section with four highlight cards: Convenience, Save Money, Personal Attention, and Expert Advice.
- **Featured verified travel advisors** gallery.
- **What's Trending** cards for travel articles, each with a "read more" button.
- **Footer** with site links, social icons, and a login form UI.
- **Containerized** with Nginx for easy deployment.

---

## 🧰 Tech Stack

| Layer | Tools |
|:--|:--|
| Markup & Styling | HTML5, CSS3 |
| Scripting | JavaScript, jQuery 3.4.1 |
| Icons | Font Awesome Free 5.13.0 |
| Deployment | Docker, Nginx (alpine) |

---

## 📁 Project Structure

```
Travelling-Project/
├── css/
│   └── fontawesome-free-5.13.0-web/   # Icon library
├── fonts/                              # Custom fonts
├── images/                             # SVGs and photos
├── js/
│   ├── jquery-3.4.1.min.js
│   └── main.js
├── index.html                          # Main page
├── style.css                           # Styles
├── dockerfile                          # Nginx image
└── .dockerignore
```

---

## 🚀 Getting Started

### Option 1: Open directly

No build step needed.

```bash
git clone https://github.com/Abdox72/Travelling-Project.git
cd Travelling-Project
```

Then open `index.html` in your browser.

### Option 2: Run with Docker

```bash
docker build -f dockerfile -t travelsense .
docker run -d -p 8080:80 --name travelsense travelsense
```

Open **http://localhost:8080** in your browser.

To stop and remove the container:

```bash
docker rm -f travelsense
```

---

## 🗺️ Roadmap

- [ ] Make the search and journey-type filter functional
- [ ] Add real article pages for the "read more" buttons
- [ ] Connect the login and register forms to a backend
- [ ] Add mobile menu and accessibility improvements

---

## 👤 Author

**Abdul-Rahman Mustafa**, Full Stack .NET Developer

[![GitHub](https://img.shields.io/badge/GitHub-14141A?style=flat-square&logo=github&logoColor=D4AF37)](https://github.com/Abdox72)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-14141A?style=flat-square&logo=linkedin&logoColor=D4AF37)](https://linkedin.com/in/mr-dox)
[![Portfolio](https://img.shields.io/badge/Portfolio-14141A?style=flat-square&logo=githubpages&logoColor=D4AF37)](https://Abdox72.github.io/portfolio)

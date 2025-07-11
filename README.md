# CodeGuide - Programming Language Selector

A modern web-based tool that helps developers, students, and tech teams select the most suitable programming languages for their projects.

## 🌟 Features

### Project Type Selection
Choose from 11 different project categories:
- **Front-End Development** - User interfaces and interactive web experiences
- **Back-End Development** - Server-side logic and database systems
- **Full-Stack** - Complete applications from front to back
- **Mobile App (iOS/Android)** - Native and cross-platform mobile applications
- **Mobile Games** - Engaging games for mobile devices
- **Desktop Applications** - Software for Windows, Mac, and Linux
- **Web Games** - Browser-based games and interactive experiences
- **AI/ML Projects** - Artificial intelligence and machine learning solutions
- **Embedded Systems** - Microcontrollers and IoT devices
- **Data Science** - Data analysis and insights
- **APIs/Backend Services** - Scalable backend services and APIs

### Language Recommendations
For each project type, CodeGuide provides:
- **Top recommended languages** with icons
- **Key features** highlighting strengths
- **Popular frameworks and libraries**
- **Example companies** using each language

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start exploring programming languages!

### Local Development
If you want to run it locally with a server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🛠️ Technology Stack

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with gradients, animations, and responsive design
- **JavaScript (ES6+)** - Interactive functionality and data management
- **Font Awesome** - Icons for project types and features
- **Google Fonts (Inter)** - Modern typography

## 📱 Responsive Design

CodeGuide is fully responsive and works great on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🎨 Design Features

- **Modern UI** - Clean, professional design with smooth animations
- **Gradient Background** - Beautiful purple gradient theme
- **Card-based Layout** - Easy-to-scan project and language cards
- **Hover Effects** - Interactive elements with smooth transitions
- **Backdrop Filters** - Modern glass-morphism effects
- **Accessibility** - Semantic HTML and keyboard navigation support

## 📊 Data Structure

The application uses a comprehensive data structure with:
- 11 project types
- 3-4 language recommendations per project type
- Detailed information for each language including:
  - Key features
  - Popular frameworks
  - Example companies

## 🔧 Customization

### Adding New Project Types
1. Add the project type to the `projectData` object in `script.js`
2. Add an icon to the `projectIcons` object
3. Add a description to the `projectDescriptions` object

### Modifying Language Data
Edit the language information in the `projectData` object to:
- Add new languages
- Update features, frameworks, or companies
- Modify existing recommendations

### Styling Changes
The CSS is well-organized with:
- CSS custom properties for easy theming
- Responsive breakpoints
- Modular component styles

## 🌐 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new project types
- Update language recommendations
- Improve the UI/UX
- Fix bugs or add features

## 📞 Support

If you have questions or need help:
1. Check the code comments for implementation details
2. Review the data structure in `script.js`
3. Open an issue for bugs or feature requests

---

**Built with ❤️ for the developer community** 
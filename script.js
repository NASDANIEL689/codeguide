// Project types and language recommendations data
const projectData = {
    "Front-End Development": {
        languages: [
            {
                name: "JavaScript",
                icon: "JS",
                features: ["Huge ecosystem and community", "Runs in all browsers", "Versatile and flexible", "Excellent for interactive UIs"],
                frameworks: ["React", "Vue.js", "Angular", "Svelte"],
                companies: ["Facebook", "Google", "Netflix", "Airbnb"]
            },
            {
                name: "TypeScript",
                icon: "TS",
                features: ["Type safety", "Better IDE support", "Enhanced refactoring", "Reduced bugs"],
                frameworks: ["React", "Vue.js", "Angular", "Next.js"],
                companies: ["Microsoft", "Google", "Slack", "Asana"]
            },
            {
                name: "HTML/CSS",
                icon: "HC",
                features: ["Foundation of web", "Semantic markup", "Responsive design", "Accessibility"],
                frameworks: ["Bootstrap", "Tailwind CSS", "Foundation", "Bulma"],
                companies: ["All web companies", "Every website", "Web agencies"]
            }
        ]
    },
    "Back-End Development": {
        languages: [
            {
                name: "Python",
                icon: "PY",
                features: ["Easy to learn", "Rich ecosystem", "Great for APIs", "Excellent documentation"],
                frameworks: ["Django", "Flask", "FastAPI", "Pyramid"],
                companies: ["Google", "Instagram", "Spotify", "Dropbox"]
            },
            {
                name: "Node.js",
                icon: "NJ",
                features: ["JavaScript runtime", "Fast development", "Large npm ecosystem", "Event-driven"],
                frameworks: ["Express.js", "NestJS", "Koa", "Fastify"],
                companies: ["Netflix", "LinkedIn", "Uber", "PayPal"]
            },
            {
                name: "Java",
                icon: "JA",
                features: ["Enterprise-grade", "Strong typing", "Excellent performance", "Mature ecosystem"],
                frameworks: ["Spring Boot", "Jakarta EE", "Micronaut", "Quarkus"],
                companies: ["Amazon", "Netflix", "Google", "Oracle"]
            }
        ]
    },
    "Full-Stack": {
        languages: [
            {
                name: "JavaScript/Node.js",
                icon: "JS",
                features: ["Same language front/back", "Fast development", "Large ecosystem", "Real-time capabilities"],
                frameworks: ["MERN Stack", "MEAN Stack", "Next.js", "Nuxt.js"],
                companies: ["Netflix", "LinkedIn", "Uber", "PayPal"]
            },
            {
                name: "Python",
                icon: "PY",
                features: ["Versatile", "Great for ML/AI", "Rich libraries", "Easy deployment"],
                frameworks: ["Django", "Flask", "FastAPI", "Streamlit"],
                companies: ["Instagram", "Spotify", "Dropbox", "Reddit"]
            },
            {
                name: "C#",
                icon: "CS",
                features: ["Microsoft ecosystem", "Strong typing", "Great tooling", "Cross-platform"],
                frameworks: [".NET Core", "ASP.NET", "Blazor", "Xamarin"],
                companies: ["Microsoft", "Stack Overflow", "Unity", "GoDaddy"]
            }
        ]
    },
    "Mobile App (iOS/Android)": {
        languages: [
            {
                name: "Swift",
                icon: "SW",
                features: ["iOS native", "Fast performance", "Modern syntax", "Apple ecosystem"],
                frameworks: ["SwiftUI", "UIKit", "Combine", "Core Data"],
                companies: ["Apple", "Uber", "Instagram", "Airbnb"]
            },
            {
                name: "Kotlin",
                icon: "KT",
                features: ["Android native", "Interoperable with Java", "Modern syntax", "Null safety"],
                frameworks: ["Android SDK", "Jetpack Compose", "Ktor", "Spring Boot"],
                companies: ["Google", "Uber", "Netflix", "Pinterest"]
            },
            {
                name: "React Native",
                icon: "RN",
                features: ["Cross-platform", "JavaScript/React", "Fast development", "Large community"],
                frameworks: ["Expo", "React Navigation", "Redux", "MobX"],
                companies: ["Facebook", "Instagram", "Discord", "Skype"]
            }
        ]
    },
    "Mobile Games": {
        languages: [
            {
                name: "C#",
                icon: "CS",
                features: ["Unity engine", "Cross-platform", "Great performance", "Rich ecosystem"],
                frameworks: ["Unity", "MonoGame", "Godot", "Xamarin"],
                companies: ["Unity Technologies", "Electronic Arts", "Ubisoft", "Niantic"]
            },
            {
                name: "C++",
                icon: "CP",
                features: ["Unreal Engine", "Maximum performance", "Low-level control", "Industry standard"],
                frameworks: ["Unreal Engine", "Cocos2d-x", "SDL2", "SFML"],
                companies: ["Epic Games", "Activision", "EA", "Rockstar"]
            },
            {
                name: "Lua",
                icon: "LU",
                features: ["Lightweight", "Easy to embed", "Fast execution", "Great for scripting"],
                frameworks: ["Corona SDK", "LÖVE", "Defold", "Gideros"],
                companies: ["Roblox", "World of Warcraft", "Angry Birds", "Gaming studios"]
            }
        ]
    },
    "Desktop Applications": {
        languages: [
            {
                name: "Electron",
                icon: "EL",
                features: ["Web technologies", "Cross-platform", "Easy development", "Large ecosystem"],
                frameworks: ["React", "Vue", "Angular", "Svelte"],
                companies: ["Microsoft", "Slack", "Discord", "WhatsApp"]
            },
            {
                name: "C#",
                icon: "CS",
                features: ["Windows native", "Great performance", "Rich UI", "Microsoft tools"],
                frameworks: ["WPF", "WinForms", "UWP", "MAUI"],
                companies: ["Microsoft", "Adobe", "Autodesk", "Enterprise apps"]
            },
            {
                name: "Python",
                icon: "PY",
                features: ["Easy development", "Cross-platform", "Rich libraries", "Rapid prototyping"],
                frameworks: ["Tkinter", "PyQt", "Kivy", "wxPython"],
                companies: ["Dropbox", "Blender", "GIMP", "Open source"]
            }
        ]
    },
    "Web Games": {
        languages: [
            {
                name: "JavaScript",
                icon: "JS",
                features: ["Browser native", "No installation", "Easy distribution", "Rich APIs"],
                frameworks: ["Phaser", "Three.js", "PixiJS", "Babylon.js"],
                companies: ["Facebook", "Google", "Mozilla", "Game studios"]
            },
            {
                name: "HTML5 Canvas",
                icon: "HC",
                features: ["2D graphics", "Browser support", "Hardware acceleration", "Web standards"],
                frameworks: ["Phaser", "PixiJS", "CreateJS", "Matter.js"],
                companies: ["All web browsers", "Game portals", "Educational sites"]
            },
            {
                name: "WebGL",
                icon: "WG",
                features: ["3D graphics", "Hardware acceleration", "High performance", "Modern browsers"],
                frameworks: ["Three.js", "Babylon.js", "PlayCanvas", "A-Frame"],
                companies: ["Google", "Mozilla", "Game studios", "VR companies"]
            }
        ]
    },
    "AI/ML Projects": {
        languages: [
            {
                name: "Python",
                icon: "PY",
                features: ["Rich ML libraries", "Easy to learn", "Great community", "Research standard"],
                frameworks: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
                companies: ["Google", "Facebook", "OpenAI", "Tesla"]
            },
            {
                name: "R",
                icon: "R",
                features: ["Statistical computing", "Data visualization", "Research focused", "Academic standard"],
                frameworks: ["ggplot2", "dplyr", "shiny", "caret"],
                companies: ["Academic institutions", "Research labs", "Pharmaceutical companies"]
            },
            {
                name: "Julia",
                icon: "JU",
                features: ["High performance", "Scientific computing", "Fast execution", "Modern syntax"],
                frameworks: ["Flux", "Genie", "Plots", "DifferentialEquations"],
                companies: ["MIT", "NASA", "Research institutions", "Scientific computing"]
            }
        ]
    },
    "Embedded Systems": {
        languages: [
            {
                name: "C",
                icon: "C",
                features: ["Low-level control", "High performance", "Small footprint", "Industry standard"],
                frameworks: ["FreeRTOS", "Zephyr", "Mbed", "Arduino"],
                companies: ["Intel", "ARM", "Texas Instruments", "Microchip"]
            },
            {
                name: "C++",
                icon: "CP",
                features: ["Object-oriented", "High performance", "Rich libraries", "Modern features"],
                frameworks: ["Qt", "Boost", "STL", "ROS"],
                companies: ["Siemens", "Bosch", "Automotive industry", "Robotics"]
            },
            {
                name: "Rust",
                icon: "RU",
                features: ["Memory safety", "Zero-cost abstractions", "Modern syntax", "Growing ecosystem"],
                frameworks: ["Embedded Rust", "RTIC", "Tock OS", "no_std"],
                companies: ["Mozilla", "Microsoft", "Amazon", "Startups"]
            }
        ]
    },
    "Data Science": {
        languages: [
            {
                name: "Python",
                icon: "PY",
                features: ["Rich data libraries", "Easy to learn", "Great visualization", "Jupyter notebooks"],
                frameworks: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
                companies: ["Google", "Facebook", "Netflix", "Spotify"]
            },
            {
                name: "R",
                icon: "R",
                features: ["Statistical analysis", "Data visualization", "Research focused", "Academic standard"],
                frameworks: ["ggplot2", "dplyr", "tidyr", "shiny"],
                companies: ["Academic institutions", "Research labs", "Pharmaceutical companies"]
            },
            {
                name: "SQL",
                icon: "SQ",
                features: ["Database querying", "Data manipulation", "Industry standard", "High performance"],
                frameworks: ["PostgreSQL", "MySQL", "SQLite", "BigQuery"],
                companies: ["All companies with databases", "Data teams", "Analytics"]
            }
        ]
    },
    "APIs/Backend Services": {
        languages: [
            {
                name: "Python",
                icon: "PY",
                features: ["Fast development", "Rich ecosystem", "Great documentation", "Easy deployment"],
                frameworks: ["FastAPI", "Django REST", "Flask", "aiohttp"],
                companies: ["Instagram", "Spotify", "Reddit", "Dropbox"]
            },
            {
                name: "Node.js",
                icon: "NJ",
                features: ["JavaScript runtime", "Event-driven", "Large npm ecosystem", "Fast I/O"],
                frameworks: ["Express.js", "NestJS", "Koa", "Fastify"],
                companies: ["Netflix", "LinkedIn", "Uber", "PayPal"]
            },
            {
                name: "Go",
                icon: "GO",
                features: ["High performance", "Concurrent", "Simple syntax", "Fast compilation"],
                frameworks: ["Gin", "Echo", "Fiber", "Chi"],
                companies: ["Google", "Uber", "Docker", "Kubernetes"]
            }
        ]
    }
};

// Project type icons
const projectIcons = {
    "Front-End Development": "fas fa-laptop-code",
    "Back-End Development": "fas fa-server",
    "Full-Stack": "fas fa-layer-group",
    "Mobile App (iOS/Android)": "fas fa-mobile-alt",
    "Mobile Games": "fas fa-gamepad",
    "Desktop Applications": "fas fa-desktop",
    "Web Games": "fas fa-dice",
    "AI/ML Projects": "fas fa-brain",
    "Embedded Systems": "fas fa-microchip",
    "Data Science": "fas fa-chart-bar",
    "APIs/Backend Services": "fas fa-plug"
};

// Project type descriptions
const projectDescriptions = {
    "Front-End Development": "Build user interfaces and interactive web experiences",
    "Back-End Development": "Create server-side logic and database systems",
    "Full-Stack": "Develop complete applications from front to back",
    "Mobile App (iOS/Android)": "Build native and cross-platform mobile applications",
    "Mobile Games": "Create engaging games for mobile devices",
    "Desktop Applications": "Develop software for Windows, Mac, and Linux",
    "Web Games": "Build browser-based games and interactive experiences",
    "AI/ML Projects": "Develop artificial intelligence and machine learning solutions",
    "Embedded Systems": "Program microcontrollers and IoT devices",
    "Data Science": "Analyze data and create insights",
    "APIs/Backend Services": "Build scalable backend services and APIs"
};

// DOM elements
const projectGrid = document.getElementById('project-grid');
const projectSelection = document.getElementById('project-selection');
const recommendations = document.getElementById('recommendations');
const languagesGrid = document.getElementById('languages-grid');
const recommendationTitle = document.getElementById('recommendation-title');
const backBtn = document.getElementById('back-btn');

// Initialize the application
function init() {
    renderProjectTypes();
    setupEventListeners();
}

// Render project type cards
function renderProjectTypes() {
    projectGrid.innerHTML = '';
    
    Object.keys(projectData).forEach(projectType => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-project-type', projectType);
        
        card.innerHTML = `
            <i class="${projectIcons[projectType]}"></i>
            <h3>${projectType}</h3>
            <p>${projectDescriptions[projectType]}</p>
        `;
        
        projectGrid.appendChild(card);
    });
}

// Render language recommendations
function renderRecommendations(projectType) {
    const data = projectData[projectType];
    recommendationTitle.textContent = `Best Languages for ${projectType}`;
    
    languagesGrid.innerHTML = '';
    
    data.languages.forEach(language => {
        const card = document.createElement('div');
        card.className = 'language-card';
        
        card.innerHTML = `
            <div class="language-header">
                <div class="language-icon">${language.icon}</div>
                <h3 class="language-name">${language.name}</h3>
            </div>
            
            <div class="language-section">
                <h4><i class="fas fa-star"></i>Key Features</h4>
                <ul>
                    ${language.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="language-section">
                <h4><i class="fas fa-tools"></i>Popular Frameworks</h4>
                <ul>
                    ${language.frameworks.map(framework => `<li>${framework}</li>`).join('')}
                </ul>
            </div>
            
            <div class="language-section">
                <h4><i class="fas fa-building"></i>Companies Using This</h4>
                <ul>
                    ${language.companies.map(company => `<li>${company}</li>`).join('')}
                </ul>
            </div>
        `;
        
        languagesGrid.appendChild(card);
    });
}

// Show recommendations
function showRecommendations(projectType) {
    projectSelection.classList.add('hidden');
    recommendations.classList.remove('hidden');
    renderRecommendations(projectType);
}

// Show project selection
function showProjectSelection() {
    recommendations.classList.add('hidden');
    projectSelection.classList.remove('hidden');
}

// Setup event listeners
function setupEventListeners() {
    // Project card clicks
    projectGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.project-card');
        if (card) {
            const projectType = card.getAttribute('data-project-type');
            showRecommendations(projectType);
        }
    });
    
    // Back button
    backBtn.addEventListener('click', showProjectSelection);
}

// Dropdown functionality
function setupDropdown() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        // Desktop hover functionality
        dropdown.addEventListener('mouseenter', () => {
            menu.style.opacity = '1';
            menu.style.visibility = 'visible';
            menu.style.transform = 'translateX(-50%) translateY(0)';
        });
        
        dropdown.addEventListener('mouseleave', () => {
            menu.style.opacity = '0';
            menu.style.visibility = 'hidden';
            menu.style.transform = 'translateX(-50%) translateY(-10px)';
        });
        
        // Mobile click functionality
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const isOpen = menu.style.opacity === '1';
                
                // Close all other dropdowns
                document.querySelectorAll('.dropdown-menu').forEach(otherMenu => {
                    otherMenu.style.opacity = '0';
                    otherMenu.style.visibility = 'hidden';
                    otherMenu.style.transform = 'translateX(-50%) translateY(-10px)';
                });
                
                if (!isOpen) {
                    menu.style.opacity = '1';
                    menu.style.visibility = 'visible';
                    menu.style.transform = 'translateX(-50%) translateY(0)';
                }
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                menu.style.transform = 'translateX(-50%) translateY(-10px)';
            }
        });
    });
}

// Initialize dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    setupDropdown();
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 
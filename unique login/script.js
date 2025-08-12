// Get DOM elements
const container = document.getElementById('container');
const lightSwitch = document.getElementById('lightSwitch');
const switchThumb = document.getElementById('switchThumb');
const switchLabel = document.getElementById('switchLabel');
const lightFixture = document.getElementById('lightFixture');
const loginForm = document.getElementById('loginForm');

// Light state
let isLightOn = true;

// Initialize the page
function init() {
    updateLightState();
    addEventListeners();
}

// Add event listeners
function addEventListeners() {
    // Light switch toggle
    lightSwitch.addEventListener('click', toggleLight);
    
    // Form submission
    loginForm.addEventListener('submit', handleFormSubmit);
    
    // Input focus effects
    const inputs = document.querySelectorAll('input[type="email"], input[type="password"]');
    inputs.forEach(input => {
        input.addEventListener('focus', handleInputFocus);
        input.addEventListener('blur', handleInputBlur);
    });
}

// Toggle light function
function toggleLight() {
    isLightOn = !isLightOn;
    updateLightState();
}

// Update light state
function updateLightState() {
    if (isLightOn) {
        // Light is ON
        container.classList.remove('dark');
        lightSwitch.classList.remove('off');
        lightFixture.classList.remove('off');
        switchLabel.textContent = 'ON';
    } else {
        // Light is OFF
        container.classList.add('dark');
        lightSwitch.classList.add('off');
        lightFixture.classList.add('off');
        switchLabel.textContent = 'OFF';
    }
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Simple validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Log the form data (in a real app, you'd send this to a server)
    console.log('Login attempt:', {
        email: email,
        password: password,
        rememberMe: rememberMe
    });
    
    // Show success message
    alert('Login successful! (This is just a demo)');
}

// Handle input focus
function handleInputFocus(e) {
    const inputGroup = e.target.parentElement;
    inputGroup.style.transform = 'scale(1.02)';
    inputGroup.style.transition = 'transform 0.2s ease';
}

// Handle input blur
function handleInputBlur(e) {
    const inputGroup = e.target.parentElement;
    inputGroup.style.transform = 'scale(1)';
}

// Add some interactive effects
function addInteractiveEffects() {
    // Add hover effect to login card
    const loginCard = document.getElementById('loginCard');
    
    loginCard.addEventListener('mouseenter', () => {
        loginCard.style.transform = 'translateY(-5px)';
        loginCard.style.transition = 'transform 0.3s ease';
    });
    
    loginCard.addEventListener('mouseleave', () => {
        loginCard.style.transform = 'translateY(0)';
    });
    
    // Add click effect to submit button
    const submitBtn = document.querySelector('.submit-btn');
    
    submitBtn.addEventListener('mousedown', () => {
        submitBtn.style.transform = 'scale(0.98)';
    });
    
    submitBtn.addEventListener('mouseup', () => {
        submitBtn.style.transform = 'scale(1.05)';
    });
    
    submitBtn.addEventListener('mouseleave', () => {
        submitBtn.style.transform = 'scale(1)';
    });
}

// Add keyboard shortcuts
function addKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Toggle light with 'L' key
        if (e.key.toLowerCase() === 'l' && !e.target.matches('input')) {
            e.preventDefault();
            toggleLight();
        }
        
        // Focus email field with 'E' key
        if (e.key.toLowerCase() === 'e' && !e.target.matches('input')) {
            e.preventDefault();
            document.getElementById('email').focus();
        }
        
        // Focus password field with 'P' key
        if (e.key.toLowerCase() === 'p' && !e.target.matches('input')) {
            e.preventDefault();
            document.getElementById('password').focus();
        }
    });
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    init();
    addInteractiveEffects();
    addKeyboardShortcuts();
});

// Add some visual feedback for the light switch
lightSwitch.addEventListener('mouseenter', () => {
    lightSwitch.style.filter = 'brightness(1.1)';
});

lightSwitch.addEventListener('mouseleave', () => {
    lightSwitch.style.filter = 'brightness(1)';
});

// Add smooth scrolling for any anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
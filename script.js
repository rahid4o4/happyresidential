<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy Residential Mortgage</title>
    <link rel="stylesheet" href="styles.css">
    <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <div class="container">
            <img src="assets/logo.png" alt="Happy Residential Mortgage Logo" class="logo">
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="home" class="hero">
        <div class="hero-content">
            <h1>Welcome to Happy Residential Mortgage</h1>
            <p>Your trusted partner for home financing in Chicago. Let us help you find the perfect mortgage solution.</p>
            <a href="#contact" class="button">Get Started</a>
        </div>
    </section>

    <section id="services" class="services">
        <h2>Our Mortgage Services</h2>
        <div class="service-box">
            <h3>Home Purchase Loans</h3>
            <p>Whether you're buying your first home or your dream home, we have the right loan for you. Our team offers personalized service to help you navigate the home buying process with ease and confidence. We ensure competitive rates and flexible terms tailored to your needs. Let us make your home purchase experience smooth and stress-free.</p>
        </div>
        <div class="service-box">
            <h3>Refinance Loans</h3>
            <p>Refinance to lower your interest rate, reduce your monthly payments, or tap into your home’s equity. Our refinancing options are designed to help you achieve financial flexibility and save money. We provide expert advice to identify the best refinancing solution for your unique situation. Discover the benefits of refinancing with us and enhance your financial well-being.</p>
        </div>
        <div class="service-box">
            <h3>FHA & VA Loans</h3>
            <p>We offer government-backed FHA and VA loans with flexible terms for qualified buyers. These loans are ideal for first-time homebuyers and veterans seeking favorable loan conditions. Our team will guide you through the application process and ensure you take full advantage of the benefits these programs offer. Secure a loan that fits your budget and goals with our assistance.</p>
        </div>
        <div class="service-box">
            <h3>Jumbo Loans</h3>
            <p>Looking for a larger loan? We provide jumbo loans for high-value properties. Our jumbo loan options offer competitive rates and flexible terms for buyers of luxury homes or properties in high-cost areas. We understand the complexities of jumbo loans and are here to help you navigate the process with ease. Get the financing you need for your dream property.</p>
        </div>
    </section>

    <section id="about" class="about">
        <h2>About Happy Residential Mortgage</h2>
        <p>Happy Residential Mortgage has been serving the Chicago area for over 20 years. Our mission is to help our clients achieve their homeownership dreams through personalized mortgage solutions. We have a dedicated team of professionals who understand the local market and can provide expert guidance tailored to your needs. Our commitment to excellence has earned us a reputation as a trusted mortgage provider in Chicago.</p>
        <p>We pride ourselves on our customer service, industry expertise, and dedication to the community. Our team is passionate about helping you find the best mortgage solution and making the process as smooth as possible. We are actively involved in community events and support local initiatives to give back to the city that has supported us over the years. Join the many satisfied clients who have experienced our exceptional service and personalized approach.</p>
    </section>

    <section id="contact" class="contact">
        <h2>Contact Us</h2>
        <p>We would love to hear from you. Please fill out the form below, and one of our representatives will get back to you as soon as possible.</p>
        <form id="contactForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send</button>
        </form>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2024 Happy Residential Mortgage. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>

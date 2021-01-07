// ALL IMPORT
/* Header */
/* Sidebar */
// import { closeSidebar } from './components/sidebar/closeSidebar.js';
// import { openSidebar } from './components/sidebar/openSidebar.js';
/* This is me */
/* About me */
/* Services */
import { renderServices } from './components/services/renderServices.js';
import { servicesData } from './data/servicesData.js';

/* Results */
/* Projects */
/* Feedback */
/* Plans */
/* Blog */
/* Logos */
/* Footer */

// CODE EXECUTION
/* Header */
/* Sidebar */

// openSidebar();
// closeSidebar();

/* This is me */
/* About me */
/* Services */
renderServices ({
    selector: '#services-block',
    data: servicesData,
    limit: 6,
});

/* Results */
/* Projects */
/* Feedback */
/* Plans */
/* Blog */
/* Logos */
/* Footer */
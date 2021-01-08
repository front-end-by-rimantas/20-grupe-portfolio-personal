// ALL IMPORT
/* Header */
/* This is me */
/* About me */
/* Services */
import { renderServices } from './components/services/renderServices.js';
import { servicesData } from './data/servicesData.js';

/* Results */
import { Results } from './components/results/Results.js';
import { resultsData } from './data/resultsData.js';

/* Projects */
/* Feedback */
/* Plans */
/* Blog */
/* Logos */
/* Footer */

// CODE EXECUTION
/* Header */
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
// ALL IMPORT
/* Header */
/* Sidebar */
import { closeSidebar } from './components/sidebar/closeSidebar.js';
import { openSidebar } from './components/sidebar/openSidebar.js';
import { openCloseSidebarDropdown } from './components/sidebar/openCloseSidebarDropdown.js';
/* This is me */
/* About me */
/* Services */
import { renderServices } from './components/services/renderServices.js';
import { servicesData } from './data/servicesData.js';

/* Results */
/* Projects */
/* Feedback */
/* Plans */
import { renderPlanPrices} from './components/plans/renderPlanPrices.js';
import { planPricesData } from './data/planPricesData.js';
/* Blog */
/* Logos */
/* Footer */

// CODE EXECUTION
/* Header */
/* Sidebar */

openSidebar();
closeSidebar();
openCloseSidebarDropdown();
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
renderPlanPrices({
    selector: '#plans-main',
    data: planPricesData,
    limit: 4,
})
/* Blog */
/* Logos */
/* Footer */
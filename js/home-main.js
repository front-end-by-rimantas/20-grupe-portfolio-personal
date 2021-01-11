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
import { Results } from './components/results/Results.js';
import { resultsData } from './data/resultsData.js';

/* Projects */
/* Feedback */
/* Plans */
import { renderPlanPrices} from './components/plans/renderPlanPrices.js';
import { planPricesData } from './data/planPricesData.js';
/* Blog */
import { blogData } from './data/blogData.js';
import { renderBlog } from './components/blog/renderBlog.js'
/* Logos */
/* Footer */
import { renderSocials } from './components/socials/renderSocials.js';
import { socialsData } from './data/socialsData.js';

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
const results = new Results(resultsData);
results.init();

/* Projects */
/* Feedback */
/* Plans */
renderPlanPrices({
    selector: '#plans-main',
    data: planPricesData,
    limit: 4,
})
/* Blog */
renderBlog ({
    selector: '.blog-posts',
    data: blogData,
    limit: 3
})
/* Logos */
/* Footer */
renderSocials ({
    selector: '#socials-block',
    data: socialsData,
    limit: 4,
});

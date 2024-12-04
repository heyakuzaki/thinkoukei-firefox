/*******************************************************************************
* user.js
* Version: v0.x | Last Updated: 2024-12-01 | Works with Firefox 133.0
*
* This allows users to set preferences and enhance the browsing experience 
* by applying specific configurations each time Firefox starts. Minimal changes
* to support the transformed browser experience focused on supporting the
* project's goal of minimalism and immersive browsing.
* See: https://github.com/heyakuzaki/thinkoukei-firefox
*
* Author: Shin Tamaki
* License: MPL-2.0
*******************************************************************************/
// PREF: disable about:config warning cause we ballsy
user_pref("browser.aboutConfig.showWarning", false);

/*******************************************************************************
* SECTION: User Chrome Adjustments                                            *
*******************************************************************************/
// PREF: enable Firefox to use userChome, userContent, etc.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// PREF: enable Firefox to use CSS selectors
user_pref("layout.css.has-selector.enabled", true);

// PREF: disable maximising Firefox window in full-screen mode
user_pref("full-screen-api.ignore-widgets", true);
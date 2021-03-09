const config = {
  s3bucket: 'https://davidblog.s3.amazonaws.com/',
  siteTitle: "David Bolton's Blog", // Site title.
  siteTitleShort: "David's Blog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "David's Blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo.png", // Logo used for SEO and manifest.
  siteUrl: "https://davidboltondev.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A podcast by David Bolton", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "David Bolton's podcast", // Title of the RSS feed
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "MM/DD/YYYY", // Date format for display.
  postsPerPage: 9999, // Amount of posts displayed per listing page.
  userName: "David Bolton", // Username to display in the author segment.
  userEmail: "davidbolton301@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "DavidBolton23", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Atlanta, Georgia", // User location to display in the author segment.
  userAvatar: "/static/profile.png", // User avatar to display in the author segment.
  userDescription: "A podcast for Dev's",
  copyright: "Copyright © 2021 DB", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;

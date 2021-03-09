const urljoin = require("url-join");
const path = require("path");
const config = require("./data/SiteConfig");

module.exports = {
  pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    rssMetadata: {
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(
        config.siteUrl,
        config.pathPrefix
      )}/logos/code_chefs_square512.png`,
      copyright: config.copyright
    }
  },
  plugins: [
    "gatsby-plugin-svgr",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-lodash",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 690
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe"
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs"
        ]
      }
    },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: config.googleAnalyticsID
    //   }
    // },
    {
      resolve: "gatsby-plugin-gtag",
      options: {
        trackingId: config.googleAnalyticsID,
        head: false,
        anonymize: true,
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-twitter",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix ? config.pathPrefix : `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icons: [
          {
            src: "/logos/code_chefs_square192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/logos/code_chefs_square512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: path.resolve("src/netlifycms/index.js"), // default: undefined
        enableIdentityWidget: true,
        publicPath: "admin",
        htmlTitle: "Content Manager",
        includeRobots: false
      }
    },
    {
      resolve: "gatsby-plugin-feed2",
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata;
          ret.allMarkdownRemark = ref.query.allMarkdownRemark;
          ret.generator = "GatsbyJS Advanced Starter";
          return ret;
        },
        query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                copyright
              }
            }
          }
        }
      `,
      setup: options => ({
        ...options, // https://www.npmjs.com/package/rss#feedoptions to override any specs
        disable_cdata: true,
        custom_namespaces: {
          itunes: 'http://www.itunes.com/dtds/podcast-1.0.dtd',
        },
        title: "Code Chefs - Hungry Web Developer Podcast", // should fix stitcherFM
        description: "Looking to expand your skills as a Web Developer? Vincent Tang and German Gamboa break down topics in Javascript, NodeJS, CSS, DevOps, AWS, and career development!",
        site_url: 'https://codechefs.dev',
        custom_elements: [
          { 'language': 'en'},
          { 'itunes:author': 'Vincent Tang & German Gamboa' },
          { 'itunes:explicit': 'clean'},
          { 'itunes:subtitle': "Hungry Web Developer Podcast"},
          { 'itunes:summary': "Looking to expand your skills as a Web Developer? Vincent Tang and German Gamboa break down topics in Javascript, NodeJS, CSS, DevOps, AWS, and career development!"},
          { 'itunes:owner': [
            {'itunes:name': "Vincent Tang"},
            {'itunes:email': "vincentntang@gmail.com"}
          ]},
          {'itunes:category': [
            {_attr: {
              text: 'News'
            }},
            {'itunes:category': {
              _attr: {
                text: 'Tech News'
              }
            }}
          ]},
          {'itunes:category': [
            {_attr: {
              text: 'Technology'
            }},
          ]},
          {'itunes:category': {
            _attr: {
              text: 'Education'
            }
          }},
          {'itunes:type': "episodic"},
          {'itunes:image': [
            {_attr: {
              href: 'https://codechefs.dev/logos/code_chefs_podcast_art.png'
            }},
          ]},
          {'image': [
            {'url':'https://codechefs.dev/logos/code_chefs_podcast_art.png'},
            {'title':'Code Chefs'},
            {'link': 'https://codechefs.dev'},
          ]},
          // {
          //   'link': 'https://codechefs.dev'
          // },
          {
            'itunes:keywords':"javascript, webdevelopment,html,css,js, codechefs"
          },
        ],
      }),
        feeds: [
          {
            serialize(ctx) {
              const { rssMetadata } = ctx.query.site.siteMetadata;
              return ctx.query.allMarkdownRemark.edges.map(edge => ({
                categories: edge.node.frontmatter.tags,
                date: edge.node.fields.date,
                title: edge.node.frontmatter.title,
                description: edge.node.excerpt,
                url: rssMetadata.site_url + edge.node.fields.slug,
                guid: rssMetadata.site_url + edge.node.fields.slug,
                custom_elements: [
                  { "content:encoded": edge.node.html },
                  // { author: config.userEmail },
                  { "itunes:author":"Vincent Tang & German Gamboa"},
                  { "itunes:subtitle": edge.node.excerpt},
                  { "itunes:duration": edge.node.frontmatter.showLength},
                  {"itunes:explicit": "no"},
                  {'enclosure': [
                    {_attr: {
                      url: config.s3bucket + edge.node.frontmatter.audioPath,
                      length: Number(edge.node.frontmatter.fileSize) * 1000 * 1000, // megabytes to bytes
                      type: "audio/mpeg",
                    }},
                  ]},
                  // Do some bit rate calculations   
                ]
              }));
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [fields___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    timeToRead
                    fields {
                      slug
                      date
                    }
                    frontmatter {
                      title
                      cover
                      date
                      category
                      tags
                      shortDescription
                      episodeNumber
                      audioPath
                      showLength
                      fileSize
                    }
                  }
                }
              }
            }
          `,
            output: config.siteRss,
            title: config.siteRssTitle
          }
        ]
      }
    }
  ]
};

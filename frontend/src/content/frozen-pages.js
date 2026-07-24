// Frozen marketing-page content for home + /about — originally snapshotted from
// Strapi on 2026-07-24, now self-contained (Strapi was retired the same day).
//
// Hybrid CMS split: blog/articles/global come from the Sarapis Payload CMS via
// src/lib/api.js, while these two marketing pages are plain data rendered by
// SectionRenderer — so they make no CMS call at request time.
//
// To edit these pages: change this file (it is the source of truth for them).
// Their images live in /public/frozen-media (migrated off Strapi), so paths here
// are local `/frozen-media/*` and resolve same-origin.
export const FROZEN_PAGES = {
  "home": {
    "title": "Home",
    "content": [
      {
        "__component": "sections.hero",
        "id": 153,
        "title": "Let's Open Source New York City Government Together",
        "subtitle": "WeGovNYC is a nonprofit initiative creating & coordinating civic tech projects that give New Yorkers tools for meaningful engagement with their city government.",
        "buttons": []
      },
      {
        "__component": "sections.feature-grid",
        "id": 296,
        "title": "Databook",
        "description": "An award-winning transparency tool powered by over 50 city datasets",
        "cards": [
          {
            "id": 1264,
            "title": "Agencies",
            "description": "Data-powered profiles of every NYC government agency",
            "image": {
              "id": 84,
              "documentId": "mt3qzl3ryiai4qcqlxr8evaz",
              "name": "agencies.jpg",
              "alternativeText": "Manhattan Municipal Building",
              "caption": "Manhattan Municipal Building",
              "width": 840,
              "height": 1183,
              "formats": {
                "large": {
                  "ext": ".jpg",
                  "url": "/frozen-media/large_agencies_00e067a8ff.jpg",
                  "hash": "large_agencies_00e067a8ff",
                  "mime": "image/jpeg",
                  "name": "large_agencies.jpg",
                  "path": null,
                  "size": 116.29,
                  "width": 710,
                  "height": 1000,
                  "sizeInBytes": 116285
                },
                "small": {
                  "ext": ".jpg",
                  "url": "/frozen-media/small_agencies_00e067a8ff.jpg",
                  "hash": "small_agencies_00e067a8ff",
                  "mime": "image/jpeg",
                  "name": "small_agencies.jpg",
                  "path": null,
                  "size": 35.04,
                  "width": 355,
                  "height": 500,
                  "sizeInBytes": 35036
                },
                "medium": {
                  "ext": ".jpg",
                  "url": "/frozen-media/medium_agencies_00e067a8ff.jpg",
                  "hash": "medium_agencies_00e067a8ff",
                  "mime": "image/jpeg",
                  "name": "medium_agencies.jpg",
                  "path": null,
                  "size": 70.57,
                  "width": 533,
                  "height": 750,
                  "sizeInBytes": 70573
                },
                "thumbnail": {
                  "ext": ".jpg",
                  "url": "/frozen-media/thumbnail_agencies_00e067a8ff.jpg",
                  "hash": "thumbnail_agencies_00e067a8ff",
                  "mime": "image/jpeg",
                  "name": "thumbnail_agencies.jpg",
                  "path": null,
                  "size": 4.48,
                  "width": 111,
                  "height": 156,
                  "sizeInBytes": 4478
                }
              },
              "hash": "agencies_00e067a8ff",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "size": 159.44,
              "url": "/frozen-media/agencies_00e067a8ff.jpg",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2025-12-26T22:18:28.020Z",
              "updatedAt": "2025-12-26T22:18:28.020Z",
              "publishedAt": "2025-12-26T22:18:28.020Z"
            },
            "link": {
              "id": 1470,
              "label": "View",
              "url": "https://databook.nyc/organizations/directory",
              "isExternal": true,
              "style": "primary"
            }
          },
          {
            "id": 1265,
            "title": "Titles",
            "description": "The title details, roles, positions and pay of NYC's civil servants",
            "image": {
              "id": 85,
              "documentId": "d7febxke4n9yexiimlud3lqp",
              "name": "people.webp",
              "alternativeText": "People of NYC Government",
              "caption": "People of NYC Government",
              "width": 840,
              "height": 840,
              "formats": {
                "small": {
                  "ext": ".webp",
                  "url": "/frozen-media/small_people_818cd20fd6.webp",
                  "hash": "small_people_818cd20fd6",
                  "mime": "image/webp",
                  "name": "small_people.webp",
                  "path": null,
                  "size": 27.12,
                  "width": 500,
                  "height": 500,
                  "sizeInBytes": 27123
                },
                "medium": {
                  "ext": ".webp",
                  "url": "/frozen-media/medium_people_818cd20fd6.webp",
                  "hash": "medium_people_818cd20fd6",
                  "mime": "image/webp",
                  "name": "medium_people.webp",
                  "path": null,
                  "size": 51.45,
                  "width": 750,
                  "height": 750,
                  "sizeInBytes": 51450
                },
                "thumbnail": {
                  "ext": ".webp",
                  "url": "/frozen-media/thumbnail_people_818cd20fd6.webp",
                  "hash": "thumbnail_people_818cd20fd6",
                  "mime": "image/webp",
                  "name": "thumbnail_people.webp",
                  "path": null,
                  "size": 5.37,
                  "width": 156,
                  "height": 156,
                  "sizeInBytes": 5371
                }
              },
              "hash": "people_818cd20fd6",
              "ext": ".webp",
              "mime": "image/webp",
              "size": 64.47,
              "url": "/frozen-media/people_818cd20fd6.webp",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2025-12-26T22:18:29.122Z",
              "updatedAt": "2025-12-26T22:18:29.122Z",
              "publishedAt": "2025-12-26T22:18:29.122Z"
            },
            "link": {
              "id": 1471,
              "label": "View",
              "url": "https://databook.nyc/titles",
              "isExternal": true,
              "style": "primary"
            }
          },
          {
            "id": 1266,
            "title": "Notices",
            "description": "Official news and events from all of NYC's government agencies",
            "image": {
              "id": 86,
              "documentId": "pfcyb6v9x7csxojbkm1jijnh",
              "name": "notices.jpeg",
              "alternativeText": "City Record Notices",
              "caption": "City Record Notices",
              "width": 840,
              "height": 513,
              "formats": {
                "small": {
                  "ext": ".jpeg",
                  "url": "/frozen-media/small_notices_8ec957c4ca.jpeg",
                  "hash": "small_notices_8ec957c4ca",
                  "mime": "image/jpeg",
                  "name": "small_notices.jpeg",
                  "path": null,
                  "size": 30.53,
                  "width": 500,
                  "height": 305,
                  "sizeInBytes": 30527
                },
                "medium": {
                  "ext": ".jpeg",
                  "url": "/frozen-media/medium_notices_8ec957c4ca.jpeg",
                  "hash": "medium_notices_8ec957c4ca",
                  "mime": "image/jpeg",
                  "name": "medium_notices.jpeg",
                  "path": null,
                  "size": 60.56,
                  "width": 750,
                  "height": 458,
                  "sizeInBytes": 60562
                },
                "thumbnail": {
                  "ext": ".jpeg",
                  "url": "/frozen-media/thumbnail_notices_8ec957c4ca.jpeg",
                  "hash": "thumbnail_notices_8ec957c4ca",
                  "mime": "image/jpeg",
                  "name": "thumbnail_notices.jpeg",
                  "path": null,
                  "size": 9.08,
                  "width": 245,
                  "height": 149,
                  "sizeInBytes": 9077
                }
              },
              "hash": "notices_8ec957c4ca",
              "ext": ".jpeg",
              "mime": "image/jpeg",
              "size": 76.43,
              "url": "/frozen-media/notices_8ec957c4ca.jpeg",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2025-12-26T22:18:30.006Z",
              "updatedAt": "2025-12-26T22:18:30.006Z",
              "publishedAt": "2025-12-26T22:18:30.006Z"
            },
            "link": {
              "id": 1472,
              "label": "View",
              "url": "https://databook.nyc/notices",
              "isExternal": true,
              "style": "primary"
            }
          },
          {
            "id": 1267,
            "title": "Schools",
            "description": "K-12 school, building and district profiles",
            "image": {
              "id": 87,
              "documentId": "xh83qer2xtqtbgw5moyj7sfk",
              "name": "schools.jpg",
              "alternativeText": "NYC Schools",
              "caption": "NYC Schools",
              "width": 640,
              "height": 480,
              "formats": {
                "small": {
                  "ext": ".jpg",
                  "url": "/frozen-media/small_schools_23dc5c78be.jpg",
                  "hash": "small_schools_23dc5c78be",
                  "mime": "image/jpeg",
                  "name": "small_schools.jpg",
                  "path": null,
                  "size": 40.86,
                  "width": 500,
                  "height": 375,
                  "sizeInBytes": 40863
                },
                "thumbnail": {
                  "ext": ".jpg",
                  "url": "/frozen-media/thumbnail_schools_23dc5c78be.jpg",
                  "hash": "thumbnail_schools_23dc5c78be",
                  "mime": "image/jpeg",
                  "name": "thumbnail_schools.jpg",
                  "path": null,
                  "size": 7.37,
                  "width": 208,
                  "height": 156,
                  "sizeInBytes": 7367
                }
              },
              "hash": "schools_23dc5c78be",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "size": 68.44,
              "url": "/frozen-media/schools_23dc5c78be.jpg",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2025-12-26T22:18:30.569Z",
              "updatedAt": "2025-12-26T22:18:30.569Z",
              "publishedAt": "2025-12-26T22:18:30.569Z"
            },
            "link": {
              "id": 1473,
              "label": "View",
              "url": "https://databook.nyc/schools",
              "isExternal": true,
              "style": "primary"
            }
          },
          {
            "id": 1268,
            "title": "Projects",
            "description": "A page for every capital project funded by NYC",
            "image": {
              "id": 88,
              "documentId": "jnjdtzdnycbzk4e6b0q9a2mh",
              "name": "projects.jpeg",
              "alternativeText": "Capital Projects",
              "caption": "Capital Projects",
              "width": 840,
              "height": 630,
              "formats": {
                "small": {
                  "ext": ".jpeg",
                  "url": "/frozen-media/small_projects_738e9e9f46.jpeg",
                  "hash": "small_projects_738e9e9f46",
                  "mime": "image/jpeg",
                  "name": "small_projects.jpeg",
                  "path": null,
                  "size": 33.07,
                  "width": 500,
                  "height": 375,
                  "sizeInBytes": 33071
                },
                "medium": {
                  "ext": ".jpeg",
                  "url": "/frozen-media/medium_projects_738e9e9f46.jpeg",
                  "hash": "medium_projects_738e9e9f46",
                  "mime": "image/jpeg",
                  "name": "medium_projects.jpeg",
                  "path": null,
                  "size": 66.54,
                  "width": 750,
                  "height": 563,
                  "sizeInBytes": 66542
                },
                "thumbnail": {
                  "ext": ".jpeg",
                  "url": "/frozen-media/thumbnail_projects_738e9e9f46.jpeg",
                  "hash": "thumbnail_projects_738e9e9f46",
                  "mime": "image/jpeg",
                  "name": "thumbnail_projects.jpeg",
                  "path": null,
                  "size": 7.26,
                  "width": 208,
                  "height": 156,
                  "sizeInBytes": 7257
                }
              },
              "hash": "projects_738e9e9f46",
              "ext": ".jpeg",
              "mime": "image/jpeg",
              "size": 81.25,
              "url": "/frozen-media/projects_738e9e9f46.jpeg",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2025-12-26T22:18:31.598Z",
              "updatedAt": "2025-12-26T22:18:31.598Z",
              "publishedAt": "2025-12-26T22:18:31.598Z"
            },
            "link": {
              "id": 1474,
              "label": "View",
              "url": "https://databook.nyc/capital/projects",
              "isExternal": true,
              "style": "primary"
            }
          },
          {
            "id": 1269,
            "title": "Districts",
            "description": "Neighborhood, city council and community district profiles",
            "image": {
              "id": 89,
              "documentId": "qzqimxp3lyqhyx8z6qu34feh",
              "name": "districts.png",
              "alternativeText": "Districts Map",
              "caption": "Districts Map",
              "width": 521,
              "height": 498,
              "formats": {
                "small": {
                  "ext": ".png",
                  "url": "/frozen-media/small_districts_596fc36c7f.png",
                  "hash": "small_districts_596fc36c7f",
                  "mime": "image/png",
                  "name": "small_districts.png",
                  "path": null,
                  "size": 360.57,
                  "width": 500,
                  "height": 478,
                  "sizeInBytes": 360572
                },
                "thumbnail": {
                  "ext": ".png",
                  "url": "/frozen-media/thumbnail_districts_596fc36c7f.png",
                  "hash": "thumbnail_districts_596fc36c7f",
                  "mime": "image/png",
                  "name": "thumbnail_districts.png",
                  "path": null,
                  "size": 52.2,
                  "width": 163,
                  "height": 156,
                  "sizeInBytes": 52202
                }
              },
              "hash": "districts_596fc36c7f",
              "ext": ".png",
              "mime": "image/png",
              "size": 79.07,
              "url": "/frozen-media/districts_596fc36c7f.png",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2025-12-26T22:18:32.319Z",
              "updatedAt": "2025-12-26T22:18:32.319Z",
              "publishedAt": "2025-12-26T22:18:32.319Z"
            },
            "link": {
              "id": 1475,
              "label": "View",
              "url": "https://databook.nyc/districts",
              "isExternal": true,
              "style": "primary"
            }
          }
        ]
      },
      {
        "__component": "sections.logo-cloud",
        "id": 127,
        "title": "As Seen In",
        "logos": [
          {
            "id": 10,
            "name": "Gotham Gazette",
            "url": "https://www.gothamgazette.com/city/10760-new-york-city-infrastructure-projects-late-over-budget",
            "image": {
              "id": 96,
              "documentId": "pbbaroww6d6xu1xp9zhqom9e",
              "name": "Untitled-drawing-1.png.webp",
              "alternativeText": null,
              "caption": null,
              "width": 766,
              "height": 78,
              "formats": {
                "small": {
                  "ext": ".webp",
                  "url": "/frozen-media/small_Untitled_drawing_1_png_93daf27463.webp",
                  "hash": "small_Untitled_drawing_1_png_93daf27463",
                  "mime": "image/webp",
                  "name": "small_Untitled-drawing-1.png.webp",
                  "path": null,
                  "size": 3.37,
                  "width": 500,
                  "height": 51,
                  "sizeInBytes": 3370
                },
                "medium": {
                  "ext": ".webp",
                  "url": "/frozen-media/medium_Untitled_drawing_1_png_93daf27463.webp",
                  "hash": "medium_Untitled_drawing_1_png_93daf27463",
                  "mime": "image/webp",
                  "name": "medium_Untitled-drawing-1.png.webp",
                  "path": null,
                  "size": 4.58,
                  "width": 750,
                  "height": 76,
                  "sizeInBytes": 4584
                },
                "thumbnail": {
                  "ext": ".webp",
                  "url": "/frozen-media/thumbnail_Untitled_drawing_1_png_93daf27463.webp",
                  "hash": "thumbnail_Untitled_drawing_1_png_93daf27463",
                  "mime": "image/webp",
                  "name": "thumbnail_Untitled-drawing-1.png.webp",
                  "path": null,
                  "size": 2.09,
                  "width": 245,
                  "height": 25,
                  "sizeInBytes": 2092
                }
              },
              "hash": "Untitled_drawing_1_png_93daf27463",
              "ext": ".webp",
              "mime": "image/webp",
              "size": 4.61,
              "url": "/frozen-media/Untitled_drawing_1_png_93daf27463.webp",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2025-12-27T02:29:24.435Z",
              "updatedAt": "2025-12-28T18:32:33.954Z",
              "publishedAt": "2025-12-27T02:29:24.435Z"
            }
          },
          {
            "id": 11,
            "name": "Planetizen",
            "url": "https://www.planetizen.com/features/115081-top-websites-urban-planning-2021",
            "image": {
              "id": 97,
              "documentId": "tuns47kiqyptfb9u32lcrxbm",
              "name": "Untitled-drawing-2.png.webp",
              "alternativeText": null,
              "caption": null,
              "width": 533,
              "height": 99,
              "formats": {
                "small": {
                  "ext": ".webp",
                  "url": "/frozen-media/small_Untitled_drawing_2_png_ce21af0a7f.webp",
                  "hash": "small_Untitled_drawing_2_png_ce21af0a7f",
                  "mime": "image/webp",
                  "name": "small_Untitled-drawing-2.png.webp",
                  "path": null,
                  "size": 7.21,
                  "width": 500,
                  "height": 93,
                  "sizeInBytes": 7212
                },
                "thumbnail": {
                  "ext": ".webp",
                  "url": "/frozen-media/thumbnail_Untitled_drawing_2_png_ce21af0a7f.webp",
                  "hash": "thumbnail_Untitled_drawing_2_png_ce21af0a7f",
                  "mime": "image/webp",
                  "name": "thumbnail_Untitled-drawing-2.png.webp",
                  "path": null,
                  "size": 3.05,
                  "width": 245,
                  "height": 46,
                  "sizeInBytes": 3052
                }
              },
              "hash": "Untitled_drawing_2_png_ce21af0a7f",
              "ext": ".webp",
              "mime": "image/webp",
              "size": 6.59,
              "url": "/frozen-media/Untitled_drawing_2_png_ce21af0a7f.webp",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2025-12-27T02:28:23.365Z",
              "updatedAt": "2025-12-28T18:32:37.026Z",
              "publishedAt": "2025-12-27T02:28:23.365Z"
            }
          }
        ]
      },
      {
        "__component": "sections.project-network",
        "id": 59,
        "title": "Recent Work",
        "description": "Inspired by a new administration and enabled by GenAI.",
        "projects": [
          {
            "id": 378,
            "documentId": "v0jcjitupegctn27gdkz5gj0",
            "title": "Portland OCDS Viewer",
            "description": "An experimental website for exploring Portland, Oregon's Open Contracting Data Standard compliant procurement dataset.",
            "link": "https://portland-ocds.wegov.nyc/",
            "createdAt": "2026-01-09T21:38:45.757Z",
            "updatedAt": "2026-01-09T21:38:45.757Z",
            "publishedAt": "2026-01-09T21:38:45.970Z",
            "image": null
          },
          {
            "id": 382,
            "documentId": "edboaw4txkdfqwt1lj33zwhx",
            "title": "Civil Service Title Description Browser",
            "description": "We FOILed to create the most complete publicly available set of Civil Service Title description.",
            "link": "https://title-viewer.wegov.nyc",
            "createdAt": "2026-01-09T21:41:43.620Z",
            "updatedAt": "2026-01-09T21:41:43.620Z",
            "publishedAt": "2026-01-09T21:41:43.807Z",
            "image": null
          },
          {
            "id": 416,
            "documentId": "d9091d1d3a58cc15a436ff64",
            "title": "BPMN Demo",
            "description": "Demonstration of open source Business Process Model and Notation (BPMN) with Access NYC service data and more.",
            "link": "https://bpmn.wegov.nyc",
            "createdAt": "2026-03-23T20:26:54.621Z",
            "updatedAt": "2026-03-23T20:26:54.621Z",
            "publishedAt": "2026-03-23T20:26:54.621Z",
            "image": null
          },
          {
            "id": 418,
            "documentId": "b8703b987189da35230a6ddc",
            "title": "UNNYC",
            "description": "Bringing the United Nations and New York City government together to make the city and the world a better place.",
            "link": "https://unnyc.wegov.nyc",
            "createdAt": "2026-03-23T20:31:43.028Z",
            "updatedAt": "2026-03-23T20:31:43.028Z",
            "publishedAt": "2026-03-23T20:31:43.028Z",
            "image": null
          }
        ]
      },
      {
        "__component": "sections.project-network",
        "id": 60,
        "title": "Projects We Support",
        "description": "Civic tech projects we've supported",
        "projects": []
      },
      {
        "__component": "sections.articles",
        "id": 3,
        "title": "Latest Articles",
        "description": "Latest updates from the community.",
        "count": 3,
        "showViewAll": true
      }
    ]
  },
  "about": {
    "title": "About",
    "content": [
      {
        "__component": "sections.hero",
        "id": 144,
        "title": "About WeGovNYC",
        "subtitle": "Making NYC the best run municipality in the world.",
        "buttons": []
      },
      {
        "__component": "sections.rich-text",
        "id": 19,
        "content": "WeGovNYC is an organizing initiative bringing public interest and civic technologists together to make New York City the best run municipality in the world.\n\nThrough a combination of community building, product development and issue advocacy, WeGov advances a vision of an open source city that efficiently delivers projects and services to its residents, provides leadership to its region and actively contributes its knowledge to improve solutions for cities around the world.\n\n"
      },
      {
        "__component": "sections.embed",
        "id": 1,
        "html": "<iframe src=\"https://docs.google.com/presentation/d/e/2PACX-1vT1BbhXOPAuVr_Dhm0mi6dH8be4AmS5Il-tBP1lxbkONPZS_FOl2AW8pIPPsVuStXtKoV9Jzel2CtQe/embed?start=false&amp;loop=false&amp;delayms=3000\" frameborder=\"0\" width=\"960\" height=\"569\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\"></iframe>"
      },
      {
        "__component": "sections.rich-text",
        "id": 20,
        "content": "\nOur initiative’s three main constituencies are:\n- Public servants in a position to advocate for and advance free and open source solutions within city government.\n- Concerned citizens who want to help advance an open source digital transformation of New York City.\n- Policy makers who want to use technology to improve the lives of the New Yorkers they serve.\n\nCheck out our award-winning [Databook app](http://databook.wegov.nyc/) and please [get involved](https://www.notion.so/wegovnyc/Get-Involved-d31cee2e3ea04051b600e0a5b902daab)!"
      }
    ]
  }
};

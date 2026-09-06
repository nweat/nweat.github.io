/**
 * Curated posts from Notion collection "Nikki's portfolio blog".
 * IDs verified against Notion syncRecordValues + page API.
 * Used when the public table API is down; pages still load via /v1/page/:id.
 */
export const STATIC_BLOG_POSTS = [
  {
    id: '009af739-32c9-4247-8d75-69db84eae7f7',
    title: 'Support a User Comments Feature with ArangoDB',
    slug: 'arangodb-comments',
    description:
      'Let’s take a dive into how we can use arangoDB to model social relationships',
    created_at: '2024-01-16',
    tags: ['arangoDB', 'Express', 'GCP'],
    public: true,
  },
  {
    id: '12c8c56d-5fa8-42aa-9e30-bceaa03912df',
    title: 'The Dark Sides of X (Twitter)',
    slug: 'twitter-x-study',
    description: 'A dive into my Master’s thesis topic',
    created_at: '2024-01-15',
    tags: ['research', 'pandas', 'folium', 'numpy', 'seaborn'],
    public: true,
  },
  {
    id: 'b39725aa-91ae-45b9-b27b-efca3ab31eca',
    title: 'Women In Engineering: Breaking Barriers',
    slug: 'tips-for-women-in-tech',
    description:
      'This post is a compilation of tips I would to share with other women in the tech industry',
    created_at: '2023-03-06',
    tags: ['work/life balance', 'women in tech'],
    public: true,
  },
  {
    id: '9f4bc8f9-965d-4ff0-b022-4ea18e632708',
    title: 'Building a Smart Watch Geofence Feature',
    slug: 'building-a-geofence-feature',
    description:
      'This post covers a high level overview of the design of a geofence feature',
    created_at: '2022-03-13',
    tags: ['django', 'LINE bot', 'webhooks', 'AWS Lambda', 'Amazon RDS'],
    public: true,
  },
  {
    id: '43f4dc7c-df95-46ab-81ea-b8a90183eb14',
    title: 'Udemy Course Tracker Bot',
    slug: 'udemy-bot',
    description:
      'This post covers the setup of a FB messenger bot for the purpose of checking for content updates for paid Udemy courses',
    created_at: '2021-06-01',
    tags: ['webhooks', 'express', 'Facebook Bot', 'Node'],
    public: true,
  },
  {
    id: '9c08358e-e823-4d4b-8142-a5579a8a88d9',
    title: 'Quick Campaign',
    slug: 'quick-campaign',
    description:
      'This post covers the high level architecture for an application allowing the creating and management of email campaigns',
    created_at: '2020-06-12',
    tags: ['React', 'Redux', 'stripe', 'sendgrid', 'MongoDB', 'Node', 'Express'],
    public: true,
  },
  {
    id: '805b93ec-b4d5-4120-aaa8-c91c80a9bfce',
    title: 'Building a Wafer Map Visualization Dashboard',
    slug: 'designing-a-wafer-map-visualization-tool',
    description:
      'This post covers the frontend and backend design of a wafer map visualization dashboard',
    created_at: '2020-05-01',
    tags: [
      'js',
      'd3',
      'semiconductors',
      'python',
      'nginx',
      'redis',
      'pandas',
      'matplotlib',
    ],
    public: true,
  },
  {
    id: '307f532c-8572-4f84-b85e-b0258afc35a2',
    title: 'Create a Server Monitor with React and Spring boot',
    slug: 'spring-boot-monitor-with-react',
    description:
      'This post is a tutorial for building a simple front end application with React used to monitor the uptime and downtime of a spring boot service',
    created_at: '2019-09-04',
    tags: ['spring boot', 'React', 'js'],
    public: true,
  },
  {
    id: '59d099d9-cd4e-41c8-9737-c28af22d57f3',
    title: 'Building a high performance XML file parser service',
    slug: 'xml-file-parser-service',
    description:
      'A high level overview of a file parser service using Celery',
    created_at: '2018-05-01',
    tags: ['python', 'celery', 'celery beat', 'Redis'],
    public: true,
  },
]

export function findStaticPostBySlug(slug) {
  return STATIC_BLOG_POSTS.find((p) => p.slug === slug) || null
}

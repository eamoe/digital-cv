import profileData from '@/data/profile.json'
import trajectoryData from '@/data/trajectory.json'

const profile = profileData
const trajectory = trajectoryData

const SITE_URL = 'https://eamoe.github.io/digital-cv'

const personSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: profile.name,
      jobTitle: profile.role,
      description: profile.tagline,
      url: `${SITE_URL}/`,
      email: `mailto:${profile.email}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tbilisi',
        addressCountry: 'GE',
      },
      sameAs: [
        profile.social.linkedin,
        profile.social.github,
      ],
      knowsAbout: [
        'Delivery Transformation',
        'Flow Analytics',
        'Operating Model Design',
        'Kanban',
        'Scrum',
        'SAFe',
        'Theory of Constraints',
        'Team Topologies',
        'Monte Carlo Forecasting',
        'AI Transformation',
        'Enterprise Agile',
      ],
      hasOccupation: {
        '@type': 'Occupation',
        name: profile.role,
        occupationLocation: {
          '@type': 'City',
          name: 'Tbilisi',
        },
      },
      worksFor: trajectory.items
        .filter((item) => item.current)
        .map((item) => ({
          '@type': 'Organization',
          name: item.company,
          description: item.title,
        })),
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/`,
      url: `${SITE_URL}/`,
      name: `${profile.name} — ${profile.role}`,
      description: profile.tagline,
      about: { '@id': `${SITE_URL}/#person` },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_URL}/`,
          },
        ],
      },
    },
  ],
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  )
}

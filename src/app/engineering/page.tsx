import Link from 'next/link'
import { FiCalendar, FiTag, FiArrowRight } from 'react-icons/fi'

// Template for engineering articles - replace with actual data
const articles = [
  {
    title: "Best Practices for Deep Learning in Remote Sensing",
    excerpt: "A comprehensive guide to implementing deep learning models for Earth Observation data, covering data preprocessing, model architecture, and deployment considerations.",
    date: "2024-02-10",
    tags: ["Deep Learning", "Best Practices", "Remote Sensing"],
    slug: "deep-learning-remote-sensing-best-practices",
    readTime: "15 min read"
  },
  {
    title: "Building Interpretable AI Systems: A Practical Guide",
    excerpt: "Exploring practical approaches to making AI systems more interpretable and transparent, with real-world examples from Earth Observation applications.",
    date: "2024-01-25",
    tags: ["AI", "Interpretability", "Engineering"],
    slug: "building-interpretable-ai-systems",
    readTime: "12 min read"
  },
  // Add more articles here
]

// Featured topics
const topics = [
  {
    title: "Software Engineering",
    description: "Best practices, design patterns, and methodologies for building robust AI systems.",
    icon: "💻"
  },
  {
    title: "AI Ethics",
    description: "Ethical considerations and responsible AI development in Earth Observation.",
    icon: "🤖"
  },
  {
    title: "Performance Optimization",
    description: "Techniques for optimizing AI models and pipelines for real-world deployment.",
    icon: "⚡"
  },
  {
    title: "Research Engineering",
    description: "Bridging the gap between research and production in AI applications.",
    icon: "🔬"
  }
]

export default function Engineering() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section>
        <h1 className="section-title">Engineering Insights</h1>
        <div className="prose prose-neutral max-w-none">
          <p className="text-lg leading-relaxed">
            Technical articles, best practices, and insights about engineering AI systems for Earth Observation. 
            I share practical knowledge gained from research and development experience.
          </p>
        </div>
      </section>

      {/* Featured Topics */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <div key={index} className="card">
              <div className="flex items-start">
                <span className="text-3xl mr-4">{topic.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                  <p className="text-neutral-600">{topic.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Latest Articles</h2>
        <div className="space-y-8">
          {articles.map((article, index) => (
            <article key={index} className="card">
              <Link href={`/engineering/${article.slug}`}>
                <h2 className="text-2xl font-semibold mb-3 hover:text-primary-600 transition-colors duration-200">
                  {article.title}
                </h2>
              </Link>

              <div className="flex items-center text-neutral-500 text-sm mb-4">
                <FiCalendar className="mr-2" />
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
                <span className="mx-2">•</span>
                <span>{article.readTime}</span>
              </div>

              <p className="text-neutral-600 mb-4">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/engineering/tag/${tag.toLowerCase()}`}
                    className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                  >
                    {tag}
                  </Link>
                ))}
              </div>

              <Link
                href={`/engineering/${article.slug}`}
                className="inline-flex items-center text-primary-600 hover:text-primary-700"
              >
                Read more
                <FiArrowRight className="ml-2" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-neutral-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Engineering Resources</h2>
        <p className="text-neutral-600 mb-4">
          A curated collection of resources, tools, and references for AI engineering in Earth Observation.
        </p>
        <Link
          href="/engineering/resources"
          className="btn-primary inline-flex items-center"
        >
          View Resources
          <FiArrowRight className="ml-2" />
        </Link>
      </section>
    </div>
  )
} 
import Markdown from 'react-markdown'
import aboutContent from '../content/about.md?raw'

export function AboutPage() {
  return (
    <div className="about-page">
      <div className="studio-doc">
        <Markdown>{aboutContent}</Markdown>
      </div>
    </div>
  )
}

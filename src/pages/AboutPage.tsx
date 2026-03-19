import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import aboutContent from '../content/about.md?raw'

export function AboutPage() {
  return (
    <div className="about-page">
      <div className="studio-doc">
        <Markdown remarkPlugins={[remarkGfm]}>{aboutContent}</Markdown>
      </div>
    </div>
  )
}

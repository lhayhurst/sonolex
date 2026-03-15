import { useRef } from 'react'
import { useUpload } from '../layout/AppShell'

export function PdfUpload() {
  const upload = useUpload()
  const inputRef = useRef<HTMLInputElement>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) upload.startUpload(file)
    if (inputRef.current) inputRef.current.value = ''
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type === 'application/pdf') {
      upload.startUpload(file)
    }
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
  }

  if (upload.status === 'uploading') {
    return (
      <div className="pdf-upload">
        <div className="pdf-upload-zone pdf-upload-active">
          <p className="pdf-upload-status">Converting {upload.fileName}... check sidebar for progress</p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="pdf-upload"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="pdf-upload-zone">
        <p className="pdf-upload-instructions">
          Drop a PDF here or click to browse
        </p>
        <label className="pdf-upload-label">
          <input
            ref={inputRef}
            type="file"
            accept=".pdf"
            onChange={handleChange}
            aria-label="Upload PDF"
            className="pdf-upload-input"
          />
          Choose file
        </label>
      </div>
    </div>
  )
}

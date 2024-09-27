function App() {
  const htmlContent = '<p>This is a <strong>bold</strong> text.</p>';
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  )
}

export default App

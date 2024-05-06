import React from 'react'

const App = () => {
  const riyan = "Riyan";
  const names = ["Riyan", "Khan", "Tiny", "Apple", "Slices"]
  const styles = { color: 'blue', fontSize: '30px' }
  return (
    <>
      <div className="text-5xl">
        <p style={styles}>Hello {riyan}</p>
      </div>
      <ul>
        {names.map((name, index) => (<li key={index}>{name}</li>))}
      </ul>
    </>
  )
}

export default App

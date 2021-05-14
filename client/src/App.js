import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [input, setInput] = useState(0)
  const [words, setWords] = useState([])
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    setLoading(true)
    const res = await fetch('/data')
    const data = await res.json();
    setWords(data)
    setLoading(false)
  }, [])

  const handleOnChange = (e) => {
    setInput(e.target.value)
    if (input === 0 || input === '') {
      setShow(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === 0) {
      window.alert('Enter Value more than 0 !!')
    } else {
      setShow(true)
    }
  }

  const resetForm = () => {
    setInput('');
    setShow(false)
  }

  if (loading) {
    return (
      <main className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <h1 className="display-2 text-center">Loading....🚀</h1>
      </main>
    )
  }

  return <>


    <div className="container">
      <h1 className="display-4 text-center mt-5 mb-3">
        Invictus Challenge
      </h1>
      <div className="card p-4 m-auto border" style={{ maxWidth: '600px' }}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="number" className="form-label">Number of Words</label>
          <input
            min='0'
            id='number'
            value={input}
            type="number"
            required={true}
            onChange={handleOnChange}
            className="form-control mb-3" />
          <div className="row">
            <div className="col">
              <button type='submit'
                className="btn btn-dark w-100">Get Words</button>
            </div>
            <div className="col">
              <button type='reset'
                onClick={resetForm}
                className="btn btn-danger w-100">Reset</button>
            </div>
          </div>
        </form>
      </div>
      {show ? <h1 className="display-4 text-center">{input} frequently occuring Words.</h1> : ''}
      {show ? <div className="card p-4 border m-auto" style={{ maxWidth: '600px', maxHeight: '600px' }}>
        <div className="container row text-center">
          <div className="col"><strong>Words</strong></div>
          <div className="col"><strong>Count</strong></div>
        </div>
        <div className="scroll">
          {
            words.slice(0, input).map((item, index) => {
              const { word, count } = item
              return (
                <div className="container row text-center" key={index}>
                  <div className="col">
                    {word}
                  </div>
                  <div className="col">
                    {count}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div> : ''}
    </div>
  </>
}

export default App;

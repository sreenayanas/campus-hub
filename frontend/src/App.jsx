import { useState } from "react"

function App() {
  const [events, setEvents] = useState([])
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")

  const addEvent = () => {
    if (!title || !date) return

    const newEvent = {
      id: Date.now(),
      title,
      date
    }

    setEvents([...events, newEvent])
    setTitle("")
    setDate("")
  }

  return (
    <div className="app">
      <h1>Campus Hub 🚀</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button onClick={addEvent}>Add Event</button>
      </div>

      <div className="events">
        {events.map((event) => (
          <div key={event.id} className="card">
            <h3>{event.title}</h3>
            <p>{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
import axios from "axios"
import { useRef, useState } from "react"

function App() {
  const ref = useRef<HTMLFormElement | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const email = form.querySelector('input[name="email"]') as HTMLInputElement
    const subject = form.querySelector('input[name="subject"]') as HTMLInputElement
    const code = form.querySelector("textarea") as HTMLTextAreaElement

    if (email && code) {
      try {
        setLoading(true)
        await axios.post(
          "/api",
          {
            email: email.value,
            subject: subject.value,
            code: code.value,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      } catch (error) {
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <>
      <hgroup>
        <h1>E-Mail Template Tester</h1>
        <p>Fill in the e-mailaddress you want to send the test to and put your code in the textarea.</p>
      </hgroup>
      <form onSubmit={handleSubmit} ref={ref}>
        <label>
          E-Mail Address:
          <input type="email" name="email" data-1p-ignore data-lpignore />
        </label>
        <label>
          Subject:
          <input type="text" name="subject" data-1p-ignore data-lpignore />
        </label>
        <label>
          Code:
          <textarea name="code" rows={10} />
        </label>
        <button type="submit" aria-busy={loading} disabled={loading}>
          Send
        </button>
      </form>
    </>
  )
}

export default App

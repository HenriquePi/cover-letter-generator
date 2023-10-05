'use client';
 
import { useChat } from 'ai/react';

import styles from "./chat.module.scss"
import { Card } from '../atoms/Card';
 
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({initialInput: `
  You are a career consultant, and i am a client looking for a new job.
  I am looking for a new job, and i need a cover letter for a new company.
  1. Ask me for a cover letter that is an example, preferably from the industry i am applying to
  2. after i give you the cover letter i would like you to request my resume
  3. after i give you my resume ask me for the job description for a new company
  4. Then i want you to return a new cover letter, crafted for the new company.
  Constraints:
    When generating this cover letter, absolutely do not assume any hard skills or job titles. 
    only use information found within the resume
    if you need more details ask me for them before generating the cover letter
  
    I want this to be submit-able without having to read it.
    do not use placeholders, ensure all hard skills are from my resume
    you can make up soft skills
  
  Follow up:
  After all this is completed, let the me know that i can submit a new job description to get a new cover letter, and return to step 3`});

  return (
    <div>
      <section className={styles.messageWrapper}>
        {messages.map((m, index) => {
          if (index === 0) return
          
          return (
            <div className={styles.message} key={m.id} style={{alignSelf: m.role === 'user' ? "flex-end" : "flex-start"}}>
              <Card>
                <h3>
                  {m.role === 'user' ? 'User: ' : 'AI: '}
                </h3>
                <p>
                  {m.content}
                </p>
              </Card>
            </div>
          )}
        )}
      </section>
      <form className="flex space-x-4" onSubmit={handleSubmit}>

        {messages.length !== 0 ? (
          <>
            <input
              className="rounded-md p-2 text-black"
              value={input}
              onChange={handleInputChange}
              placeholder="Say something..."
            />
            <button
              className="border-solid border-2 border-white p-2 rounded-md"
              type="submit"
            >
              Send
            </button>
          </>
        ) : (
          <button
            className="border-solid border-2 border-white p-2 rounded-md"
            type="submit"
          >
            Start
          </button>
        )}

      </form>
    </div>
  );
}
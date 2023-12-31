'use client';
 
import { useChat } from 'ai/react';

import styles from "./chat.module.scss"
import { Card } from '../atoms/Card';
import { useRef } from 'react';
 
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({initialInput: `
  You are a career consultant, and i am a client looking for a new job.
  We are working on my cover letter, and i have come to you for help.
  1. Ask me for a cover letter that is an example, preferably from the industry i am applying to
  wait for me to give you the cover letter
  2. after i give you the cover letter i would like you to request my resume
  wait for me to give you my resume
  3. after i give you my resume ask me for the job description for a new company
  wait for me to give you the job description
  4. Then i want you to return a new cover letter, crafted for the new company.
  Constraints:
    When generating this cover letter, absolutely do not assume any hard skills or job titles. 
    only use information found within the resume
    if you need more details ask me for them before generating the cover letter
  
    I want this to be submit-able without having to read it.
    do not use placeholders, ensure all hard skills are from my resume
    you can make up soft skills
  
  Follow up:
  After all this is completed, let the me know that i can submit a new job description to get a new cover letter, and return to step 3.
  
  
  
  your first message should be "<p>Please give me a cover letter that is an example, preferably from the industry you are applying to<p>"

  all responses should be in markdown format. if you do not use markdown format, or you use invalid markdown, or you give a response that cannot be a child of a <div> tag you will crash production


  
  `});


  // submit on enter press

  const myFormRef = useRef(null);

  const onEnterPress = (e) => {
    console.log(e.keyCode)
    if(e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      myFormRef.current.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
    }
  }
  const initiateChat = () => {
    myFormRef.current.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
  }

  return (
    <div className={`${styles.wrapper} ${messages.length === 0 ? styles.noMessages : ""}`}>
      <section className={styles.messageWrapper}>
        {messages.map((m, index) => {
          if (index === 0) return
          
          return (
            <div className={styles.message} key={m.id} style={{alignSelf: m.role === 'user' ? "flex-end" : "flex-start"}}>
              <Card>
                <h3>
                  {m.role === 'user' ? 'User: ' : 'AI: '}
                </h3>
                <div dangerouslySetInnerHTML={
                  {__html: m.content}
                }>
                  
                </div>
              </Card>
            </div>
          )}
        )}
      </section>
      <form ref={myFormRef}
        onSubmit={handleSubmit}
      
        onKeyDown={(e) => {onEnterPress(e)}}
      >

        {messages.length !== 0 && (
          <>
            <textarea
              value={input}
              onChange={handleInputChange}
              placeholder="Say something..."
              rows={3}
            />
            <button
              type="submit"
            >
              Send
            </button>
          </>
        )}

      </form>
      {messages.length === 0 && (
        <button
          className={styles.btnInitChat}
          onClick={() => initiateChat()}
        >
          Begin Generating a Custom Cover Letter
        </button>
      )}
    </div>
  );
}
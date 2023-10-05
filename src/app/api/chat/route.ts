/*

    1. Ask for a cover letter to use as an example
    2. after receiving the cover letter i would like you to request my resume
    3. finally ask me for the job description for a new company
    4. Then i want you to return a new coverletter, crafted for the new company.
    Contstraints:
      When generating this cover letter, absolutely do not assume any hard skills or job titles. 
      only use information found within the resume
      if you need more details ask me for them before generating the cover letter
    
      I want this to be submit-able without having to read it.
      do not use placeholders, ensure all hard skills are from my resume
      you can make up soft skills
    
    Follow up:
    After all this is completed, let the me know that i can submit a new job description to get a new cover letter, and return to step 3
*/

import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
 
// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';
 
export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();
 
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
  });
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
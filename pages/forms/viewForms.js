
import React,{useState} from 'react'
import data from '../../sample-data2'

const viewForms = () => {

  const [viewForm, setViewForm] = useState({})
  const [viewF, setViewF] = useState(false)


    const viewFormHandler = (index) =>{

      let newForm = data[index]
      setViewForm(newForm)
      setViewF(true)

    }
    

    return (
      <div className="p-10 block">
        
           <h1 className='font-bold text-lg'>FORMS </h1>
           {data.map((f, index) =>(
             <div className='bg-gray-200 p-3 w-200 m-2'>
               <p>{f.title}</p>
               <p>{f.description}</p>

                  <button className='bg-blue-200 p-2 m-2'
                  onClick={(e)=> viewFormHandler(index)}        
                  > VIEW FORM</button>
             

               <button className='bg-gray-300 p-2 m-2'> VIEW RESPONSES</button>
             </div>
           ))}

              { viewF === true &&
                  (
                    <div >
                      <h1 className='font-bold text-lg' > VIEW FORM </h1>
                        {viewForm.questions.map((q,index) => (
                          <div>

                            <h1 className='font-medium text-md'> Q{index+1}: {q.question} </h1>
                            {
                               q.type ==='multiple choice' || q.type ==='checkbox' ?
                               (
                                 <form>
                                  
                                   {q.choices.map((c) =>(

                                     <div>
                                          <input name='choices' value={c} type={q.type === 'multiple choice'? 'radio': q.type}/>                                          
                                           <label for="html">{c}</label>    
                                      </div>
                                   
                                   ))}


                                </form>
                               ):
                               q.type ==='dropdown' ? 
                               (
                                 <p>DROPDOWN</p>
                               ):
                               q.type === 'text' || q.type === 'paragraph'?
                               (
                                 <div>
                                <input type= 'text' placeholder='Type your answer...'/>                       
                                </div>
                               ): <p></p>

                            }

                          </div>
                        ))}
                    </div>
                  )

                }


         

        {/*   {data.map( (f) =>(
               <div key={f.title}>
                    <h1>{f.title} </h1>
                    <h1>{f.description}</h1>
                    <h1>QUESTIONS</h1>

                 {f.questions.map((q)=>(
                        <div key={q.question}>
                        <p>-</p>
                        <p>{q.question}</p>
                        <p>CHOICES</p>
                       
                      {q.choices.map((c) =>(
                           <ul key={c.type}>
                            <li> {c} </li>
                           </ul>
                      ))}  
                        </div>
                      ))}  

                    <h1> RESPONSES</h1>  
                    {f.responses.map((r) =>(
                        <div>
                            <h1>QUESTION</h1>
                            <p key={r.question}> {r.question} </p>
                            <h1> ANSWERS</h1>
                            {r.answers.map((a)=>(
                                <ul>
                                    <li>USER_ID: {a.user_id}</li>
                                    <li>ANSWER{ a.answer.map((user_answer)=>(
                                        <p> {user_answer} </p>
                                    ))} </li>
                                </ul>
                                
                            ))}
                        </div>

                    ))}    


               </div>               
           )
                                    )}  */}
         
        </div>
    );
}

export default viewForms;


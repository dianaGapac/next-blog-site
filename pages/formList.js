
import data from '../sample-data'

const formList = () => {

   console.log(data)
    return (
        <div className="p-10 block">
           <h1 className='font-bold text-lg'>FORMS</h1>

          {/*  {data.map( (f) =>(
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
                                    )} */}
         
        </div>
    );
}

export default formList;
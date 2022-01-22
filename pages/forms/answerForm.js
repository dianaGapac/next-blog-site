
import React,{useState} from 'react'
import data from '../../sample-data2'


const answerForm = () => {


    const [form,setForm] = useState({})  //holds the form after answer submitted
    const [viewForm, setViewForm] = useState({})  //holds the form object that was clicked by the user
    const [viewF, setViewF] = useState(false)  // just a boolean to view the form
    const [response,setResponse] = useState([]) //holds all the answers of the user

    const userID = 'sample_user_ID'
   
  // view form when clicked 'view form'
      const viewFormHandler = (index) =>{
        let newForm = data[index]

        setForm(newForm)  
        let res = []
        //setting obj model for response
        for (var i=0; i<newForm.questions.length;i++){   
              let resObj = {
                questId: i,
                userId:'',
                answer: []
            }
                res[i] = resObj
        }

        setResponse(res)    // to make the responses  not null/undefined even di sinagutan ung question
        setViewForm(newForm) // used in viewing the form
        setViewF(true)
      }

  //update the answeer on change for alll type of question except checkbox
      const updateAnswer = (index,value)=>{
        let newResponse = [...response]
       
        let resp = newResponse[index]
            resp.questId = index
            resp.userId = userID
            resp.answer= [value]
            newResponse[index] = resp
            setResponse(newResponse) 
      }


  //update checkbox when selected
      const addSelected = (index, value) =>{
          let newResponse = [...response]

        //updating answer
        let resp = newResponse[index]
        resp.questId = index
        resp.userId = userID
        resp.answer= [...resp.answer, value]
        newResponse[index] = resp
        console.log(newResponse)
        setResponse(newResponse)
      }

  // removing answer on checkbox when deselected
      const removeSelected =(index,value)=> {
  
          let newResponse = [...response]
          let responseObj = newResponse[index]
          let filtered = responseObj.answer.filter((c => c!== value ))
          responseObj.answer = filtered
          newResponse[index]= responseObj
          setResponse(newResponse)
      
    }



  //checkbox handler for selecting and deselecting
      const checkBoxHandler = (index, checked, value ) =>{

        if(checked){
            addSelected(index,value) }
        else
        {
            removeSelected(index,value)
        }

      }

  // submit form (kulang pa yan ng mga validation kineme)
      const submitHandler =()=>{
          let questions = form.questions
          let resp = [...response]
           
          //
          //transferring to form model mismo na pweding ireturn to back-end   
          for(var i=0; i<questions.length;i++){
            if( resp[i].questId === i ) {
                questions[i].responses = [...questions[i].responses, resp[i]]
            }
          } 
          console.log('result', questions)
    }




    return (
        <div className="p-10 block">
           <h1 className='font-bold text-lg'>FORMS </h1>
          
            {/* mapping the form list*/}
           {data.map((f, index) =>(
             <div key={index} className='bg-gray-200 p-3 w-200 m-2'>
          
               <p>{f.title}</p>
               <p>{f.description}</p>

                  <button className='bg-blue-200 p-2 m-2'
                  onClick={(e)=> viewFormHandler(index)}        
                  > ANSWER FORM</button>
             </div>
           ))}
         
           {/*if viniew to answer ung certain form */}
              { viewF === true &&  
                  (
                    <div  >
                      <h1 className='font-bold text-lg' > ANSWER FORM </h1>
                        {viewForm.questions.map((q,index) => (
                          <div key={index}>

                            <h1 className='font-medium text-md'> Q{index+1}: {q.question} </h1>
                            {/*Conditional rendering depends on the type of question */}
                            {
                               q.type ==='multiple choice'?
                               (
                                 <form >
                                   {q.choices.map((c, id) =>(
                                     <div key={id}>  
                                          <input id={c} name='choices' value={c} type= 'radio'
                                           onChange={(e)=>updateAnswer(index, e.target.value)}/>                                          
                                           <label >{c}</label>    
                                      </div>
                                   
                                   ))}

                                </form>
                               ):
                               q.type ==='checkbox'?
                               (
                                 <form >
                                   {q.choices.map((c, id) =>(
                                     <div key={id}>  
                                          <input id={c}  value={c} type='checkbox'
                                           onChange={(e)=>checkBoxHandler(index, e.target.checked, e.target.value)} />                                          
                                           <label >{c}</label>    
                                      </div>
                                   ))}

                                </form>
                               ):


                               q.type ==='dropdown' ? 
                               (
                                 <div>
                                      <select name="city" id="cars"   
                                      onChange={(e)=>updateAnswer(index, e.target.value)}>
                                        {q.choices.map((c, id) =>(  
                                            <option key={id} value={c}> {c} </option>
                                            
                                        ))}
                                      </select>
                                 </div>
                               ):
                               q.type === 'text' || q.type === 'paragraph'?
                               (
                                 <div>
                                    <input type= 'text' placeholder='Type your answer...'
                                    onChange={(e)=>updateAnswer(index, e.target.value)}/>                       
                                  </div>
                               ): <p></p>
                            }
                          </div>
                        ))}

                        <button className='bg-blue-200 p-2 m-2' onClick={submitHandler}> SUBMIT</button>
                    </div>
                  )

                }
                
        </div>
    );
}

export default answerForm;

//every submit, maguupdate dn ung result

import React,{useState} from 'react'
import data from '../../sample-data2'


const answerForm = () => {

    
    const [viewForm, setViewForm] = useState({})
    const [viewF, setViewF] = useState(false)

    const userID = 'sample_user_ID'

    const [responses,setResponses] = useState([])
    const [response,setResponse] = useState([])
   

      const viewFormHandler = (index) =>{
  
        let newForm = data[index]
        let respObj = {
            questionId:'',
            userId: '',
            answer:[]
        }
       
        setViewForm(newForm)
        setViewF(true)  

      }
        
      

      const updateAnswer = (index,value)=>{

        let newResponse = [...response]
        
        let resObj = {
            questId: '',
            userId:'',
            answer: []
        }
        

        if(newResponse[index] === undefined)
        {
            newResponse[index] = resObj
            console.log('UNDEFINED')
        }
        let resp = newResponse[index]
            resp.answer= [value]
            newResponse[index] = resp
            console.log('new', newResponse)
            setResponse(newResponse) 
      }


      const addSelected = (index, value) =>{
        
          let newResponse = [...response]
          let responseObj = {
            userId: '',
            answer:[]
        }

        if(newResponse[index] === undefined)
        {
            newResponse[index] = responseObj
            console.log('undef')
        }
        
        let resp = newResponse[index]
       

        resp.answer= [...resp.answer, value]
        newResponse[index] = resp


        console.log(newResponse)

        setResponse(newResponse)

         console.log('add', response)   

      }


      const removeSelected =(index,value)=> {
         
          let newResponse = [...response]
          let responseObj = newResponse[index]
          let filtered = responseObj.answer.filter((c => c!== value ))

          responseObj.answer = filtered
          newResponse[index]= responseObj
          setResponse(newResponse)
         console.log('add', response)  
    }

      const checkBoxHandler = (index, checked, value ) =>{

        if(checked){
            addSelected(index,value) }
        else
        {
            removeSelected(index,value)
        }

      }

      const submitHandler =()=>{
          console.log( 'RESPONSES',response)
      }



    return (
        <div className="p-10 block">
           <h1 className='font-bold text-lg'>FORMS </h1>
          

           {data.map((f, index) =>(
             <div key={index} className='bg-gray-200 p-3 w-200 m-2'>
          
               <p>{f.title}</p>
               <p>{f.description}</p>

                  <button className='bg-blue-200 p-2 m-2'
                  onClick={(e)=> viewFormHandler(index)}        
                  > ANSWER FORM</button>
             </div>
           ))}

              { viewF === true &&
                  (
                    <div  >
                      <h1 className='font-bold text-lg' > ANSWER FORM </h1>
                        {viewForm.questions.map((q,index) => (
                          <div key={index}>

                            <h1 className='font-medium text-md'> Q{index+1}: {q.question} </h1>
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

import React,{useState} from 'react'
import data from '../../sample-data2'

const viewResult = () => {


    const [viewF, setViewF] = useState(false)
    const [questions,setQuestions] = useState([])     ///  questions container
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [responseCount, setResponseCount] = useState(0)

  

  const viewFormHandler = (index) =>{

      let newForm = data[index]

    
      setTitle(newForm.title)
      setDescription(newForm.description)

      setQuestions(newForm.questions)

      setResponseCount(newForm.responseCount)
      setViewF(true)

    }



    return (
        <div>
            <h1 className='font-bold text-lg'>FORMS </h1>
           {data.map((f, index) =>(
             <div key={index} className='bg-gray-200 p-3 w-200 m-2'>
               <p>{f.title}</p>
               <p>{f.description}</p>

                  <button className='bg-blue-200 p-2 m-2'
                  onClick={(e)=> viewFormHandler(index)}        
                  > VIEW RESULT </button>
             </div>
           ))}

           {
               viewF === true &&  (
                <div className='py-10 px-10'>
   
               <h1>VIEW FORM RESULT</h1>
   
                 <div  className='py-3'>
                     <label  className="block text-sm font-medium text-gray-700">
                     Title:
                     </label>
                     <h1> {title}</h1>
                       
                 </div>
   
                 <div  className='py-3'>
                     <label  className="block text-sm font-medium text-gray-700">
                     Description:
                     </label>
                     <h1> {description}</h1>
                  </div>

                  
                 <div  className='py-3'>
                     <label  className="block text-sm font-medium text-gray-700">
                     Total Responses:
                     </label>
                     <h1> {responseCount}</h1>
                  </div>

                  <h1>RESULT PER QUESTION</h1>

                 {questions.map((q,index) => (
                     <div key={index}>
                       <h1 className='font-bold' > {q.question} </h1>
                       {
                           q.type === 'multiple choice' || q.type ==='checkbox' || q.type ==='dropdown'?
                           (
                           q.result.map( (r, index) => (
                               
                               <div key={index} >
                                   <p> {r.choice} = {r.count} respondent/s answered this </p>
                                   <p> Percentage: {((r.count/responseCount)* 100)}% </p> 
                               </div>
                           ))
                           ):
                           <p>NO PERCENTAGE</p>


                           
                      }
                       


                    </div>
                 ))}

             </div>

            
           )
           }

        </div>
    );
}

export default viewResult;
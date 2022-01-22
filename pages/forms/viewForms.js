
import React,{useState, useEffect} from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import data from '../../sample-data2'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const viewForms = () => {
  const [editForm, setEditForm] = useState({})

  const [viewF, setViewF] = useState(false)
  const [viewR, setViewR] = useState(false)
  const [questions,setQuestions] = useState([])     ///  questions container
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [responses,setResponses]  = useState([])
 


  

  const viewFormHandler = (index) =>{
      let newForm = data[index]
      setTitle(newForm.title)
      setDescription(newForm.description)
      setQuestions(newForm.questions)
      setEditForm(newForm)
      setViewF(true)
    }

    const viewResponsesHandler = (index) =>{
      let newForm = data[index]


      
      setQuestions(newForm.questions)
      setViewR(true)
    }


    const setQuestionType = (t) =>{

      let questObj = {   
          type:t,
          question:'',
          choices: [],
          responses:[]
      }
       setQuestions([...questions, questObj]) // add new index on questions CONTAINER
  }

   // add new option when 'add choices' clicked
   const choicesHandler =(id)=> {
      let questArr =[...questions]
      let questObj = questArr[id]

      questObj.choices = [...questObj.choices, 'Option']
      questArr[id] = questObj
      setQuestions(questArr)

   }

  // update the value of choices onChange
  const updateChoices = (index,i, value) => {
      let questArr =[...questions]
      let questObj = questArr[index]

      questObj.choices[i] = value
      questArr[index] = questObj
      setQuestions(questArr)
  }

  //update question onchange
  const updateQuestion = (index, value)=>{
     let questArr = [...questions]
     let questObj = questArr[index] 

     questObj.question = value
     questArr[index] = questObj

     setQuestions(questArr)
     console.log('questions:', questions)
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
                  > EDIT FORM</button>
             
               <button className='bg-gray-300 p-2 m-2'
                onClick={(e)=> viewResponsesHandler(index)}  >
                  VIEW RESPONSES</button>
             </div>
           ))}

           {
             viewF === true &&  (
             <div className='py-10 px-10'>

            <h1>EDIT FORM</h1>

              <div  className='py-3'>
                  <label  className="block text-sm font-medium text-gray-700">
                  Title:
                  </label>
                      <input
                      type="text"
                      name="title"
                      id="title"
                      className="focus:ring-gray-100 block w-800 pl-7 pr-12 sm:text-sm border-gray-300 rounded-sm"
                      placeholder= {title}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      />
              </div>

              <div  className='py-3'>
                  <label  className="block text-sm font-medium text-gray-700">
                  Description:
                  </label>
                      <input
                      type="text"
                      name="description"
                      id="description"
                      className="focus:ring-gray-100 block w-800 pl-7 pr-12 sm:text-sm border-gray-300 rounded-sm"
                      placeholder={description}
                      value={description}
                      onChange={(e)=> setDescription(e.target.value)}
                      />
              </div>

              {/*  Dropdown menu for the type of question*/}
              <div> 
                  <Menu as="div" className="relative inline-block text-left">
                      <div >
                          <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                      Add Question
                          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                          </Menu.Button>
                      </div>

                      <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                      >
                      <Menu.Items className="origin-top-right right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  
                      <div className="py-1">
                          <Menu.Item>
                          {({ active }) => (
                              <a
                              href="#"
                              className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                              )}
                              onClick={(e)=>setQuestionType('multiple choice')}
                              >
                              Multiple Choice
                              </a>
                          )}
                          </Menu.Item>

                          <Menu.Item>
                          {({ active }) => (
                              <a
                              href="#"
                              className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                              )}
                              onClick={(e)=>setQuestionType('checkbox')}
                              >
                              Checkbox
                              </a>
                          )}
                          </Menu.Item>

                          <Menu.Item>
                          {({ active }) => (
                              <a
                              href="#"
                              className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                              )}
                          
                              onClick={(e)=>setQuestionType('dropdown')}
                              >
                          DropDown
                              </a>
                          )}
                          </Menu.Item>

                          <Menu.Item>
                          {({ active }) => (
                              <a
                              href="#"
                              className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                              )}
                              onClick={(e)=>setQuestionType('text')}
                              >
                          Text
                              </a>
                          )}
                          </Menu.Item>
                          
                          <Menu.Item>
                          {({ active }) => (
                              <a
                              href="#"
                              className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                              )}
                          
                              onClick={(e)=>setQuestionType('paragraph')}
                              >
                          Paragraph
                              </a>
                          )}
                          </Menu.Item>
                      </div>
                      </Menu.Items>
                      </Transition>
                  </Menu>
              </div>


              {/* mapped Conditional Rendering forthe type of question in questions container:   */}
              {  
                questions.map((q,index) => (
                    <div key={index}>
                        { q.type=== 'multiple choice'?
                            (<div className='bg-gray-300 m-2 p2'> 
                            <h1> Multiple Choice </h1>
        
                            <div  className='py-3 m-2 p-2'>
                                <label  className="block text-sm font-medium text-gray-700">
                                Question:
                                </label>
                                    <input
                                    type="text"
                                    name="question"
                                    id="question"
                                    className="focus:ring-gray-100 block w-800 pl-7 pr-12 sm:text-sm border-gray-300 rounded-sm"
                                    placeholder={q.question}
                                    value={q.question}
                                    onChange={(e)=>updateQuestion(index, e.target.value)}
                                />
                            </div>
                                
                            <div  className='py-3 m-2'>
                                <button className='bg-gray-200 p-2 '  onClick={(e) =>{choicesHandler(index)}}> Add Choices</button>
                                {q.choices.map((c,i)  => (
                                    <input key={i}
                                    type="text"
                                    name="choice"
                                    id='choice'
                                    className="focus:ring-gray-100 block w-800 pl-7 pr-12 sm:text-sm border-gray-300 rounded-sm"
                                    placeholder= {c==='Option'? c + (i+1): c} 
                                    value= {c==='Option'? c + (i+1): c} 
                                    onChange={(e) => updateChoices(index,i,e.target.value)}
                                    />
                                ))  
                                }    
                            </div>
                            <div>
                              <button className='bg-gray-300'>Required</button>
                              <button className='bg-gray-200'> Not Required</button>
                            </div>
                            
        
                            
                        </div>)

                          : q.type ==='checkbox'?

                          (<div className='bg-gray-300 m-2 p2'> 
                          <h1> Check Box </h1>
      
                          <div  className='py-3 m-2 p-2'>
                              <label  className="block text-sm font-medium text-gray-700">
                              Question:
                              </label>
                                  <input
                                  type="text"
                                  name="question"
                                  id="question"
                                  className="focus:ring-gray-100 block w-800 pl-7 pr-12 sm:text-sm border-gray-300 rounded-sm"
                                  placeholder={q.question}
                                  value={q.question}
                                  onChange={(e)=>updateQuestion(index, e.target.value)}
                                  
                              />
                          </div>
                                
                          <div  className='py-3 m-2'>
                              <button className='bg-gray-200 p-2 '  onClick={(e) =>{choicesHandler(index)}}> Add Choices</button>
                              {q.choices.map((c,i)  => (
                                    <input key={i}
                                    type="text"
                                    name="choice"
                                    id='choice'
                                    className="focus:ring-gray-100 block w-800 pl-7 pr-12 sm:text-sm border-gray-300 rounded-sm"
                                    placeholder= {c==='Option'? c + (i+1): c} 
                                    value= {c==='Option'? c + (i+1): c} 
                                    onChange={(e) => updateChoices(index,i,e.target.value)}
                                  />
                              ))  
                              }    
                          </div> 
                      </div>) 
            
                      
                      : q.type ==='dropdown'?

                      (<div className='bg-gray-300 m-2 p2'> 
                      <h1> Dropdown </h1>

                      <div  className='py-3 m-2 p-2'>
                          <label  className="block text-sm font-medium text-gray-700">
                          Question:
                          </label>
                              <input
                              type="text"
                              name="question"
                              id="question"
                              className="focus:ring-gray-100 block w-800 pl-7 pr-12 sm:text-sm border-gray-300 rounded-sm"
                              placeholder={q.question}
                              value={q.question}
                              onChange={(e)=>updateQuestion(index, e.target.value)}
                              
                          />
                      </div>
                            
                      <div  className='py-3 m-2'>
                          <button className='bg-gray-200 p-2 '  onClick={(e) =>{choicesHandler(index)}}> Add Choices</button>
                          {q.choices.map((c,i)  => (
                                <input key={i}
                                type="text"
                                name="choice"
                                id='choice'
                                className="focus:ring-gray-100 block w-800 pl-7 pr-12 sm:text-sm border-gray-300 rounded-sm"
                                placeholder= {c==='Option'? c + (i+1): c} 
                                value= {c==='Option'? c + (i+1): c} 
                                onChange={(e) => updateChoices(index,i,e.target.value)}
                              />
                          ))  
                          }    
                      </div> 
                  </div>)            

                          :q.type === 'text'?
                              (<div className='bg-gray-300 m-2 p2'> 
                              <h1> Text Box </h1>
          
                              <div  className='py-3 m-2 p-2'>
                                  <label  className="block text-sm font-medium text-gray-700">
                                  Question:
                                  </label>
                                      <input
                                      type="text"
                                      name="question"
                                      id="question"
                                      className="focus:ring-gray-100 block w-800 pl-7 pr-12 sm:text-sm border-gray-300 rounded-sm"
                                      placeholder={q.question}
                                      value={q.question}
                                      onChange={(e)=>updateQuestion(index, e.target.value)}
                                      
                                  />
                              </div>
                          </div>) 

                          :q.type === 'paragraph'?
                          (<div className='bg-gray-300 m-2 p2'> 
                              <h1> Paragraph </h1>
          
                              <div  className='py-3 m-2 p-2'>
                                  <label  className="block text-sm font-medium text-gray-700">
                                  Question:
                                  </label>
                                      <input
                                      type="text"
                                      name="question"
                                      id="question"
                                      className="focus:ring-gray-100 block w-800 pl-7 pr-12 sm:text-sm border-gray-300 rounded-sm"
                                      placeholder={q.question}
                                      value={q.question}
                                      onChange={(e)=>updateQuestion(index, e.target.value)}
                                  />
                              </div>
                          </div>)  : 
                          (<p> </p>) 
                        }
                      </div>
                )
                )
              }  

              {/* SUBMIT FORM */}
                  <div>
                      <button className='bg-gray-200'
                      type='submit'
                     // onClick={submitHandler}
                      > SUBMIT </button>



                  </div>

              </div>
                  )
                }

                {
                  questions.map((q, index) =>(
                    <div key={index}>  
                    <h1 className='font-bold text-lg'> {q.question}</h1>
                    {
                      q.responses.map((r,index) => (
                        <div key={index}> 
                          <p  className='font-bold text-md'>User ID: </p> <p>  {r.userId}</p>
                          <p className='font-bold text-md'> Answer: </p>
                          {r.answer.map((a,index) => (
                            <p  key={index}> {a} </p>
                          ))} 
                        </div>
                      ))
                    }
                   </div>
                    
                  )
                  )

                }

              
              </div>
    );
}

export default viewForms;
//TODO  Submit HANDLER


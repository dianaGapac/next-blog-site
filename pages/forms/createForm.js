import React,{useState, useEffect} from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const createForm = () => {

    const [form, setForm] = useState({
        id: '',
        title: '',
        description:'',
        status: false,
        responseCount:0,
        questions:[{
            type:'',
            question:'',
            required: false,
            choices:[],
            responses:[{
                userId: '',
                answer: []
            }],
            result:[{
                choice:'',
                count:''
            }]
        }],
       
    } )

    ///USE STATE VARIABLES

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [questions,setQuestions] = useState([])     ///  questions container

    // set the type of question and add new index on questions CONTAINER
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

    //submit form
    const submitHandler = (e)=>{
        e.preventDefault()
        let newForm = form

        newForm.title = title
        newForm.description = description
        newForm.questions = questions

        setForm(newForm)
        console.log('form',  form)
    }

    return (
        <div className='py-10 px-10'>
            <h1>CREATE FORM</h1>

        <div  className='py-3'>
            <label  className="block text-sm font-medium text-gray-700">
            Title:
            </label>
                <input
                type="text"
                name="title"
                id="title"
                className="focus:ring-gray-100 block w-800 pl-7 pr-12 sm:text-sm border-gray-300 rounded-sm"
                placeholder="Enter Form Title"
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
                placeholder="Enter Form Description"
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


        {/* mapped Conditional Rendering forthe type of question in questions container: */}
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
                              placeholder="Enter Question"
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
                             placeholder="Enter Question"
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
                         placeholder="Enter Question"
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
                                placeholder="Enter Question"
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
                                placeholder="Enter Question"
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
                 onClick={submitHandler}
                 > SUBMIT </button>



             </div>

        </div>
    );
}

export default createForm;


///TODO  delete option & question ,required button
//// DONE add DROPDOWN type, update Choices, update question field, submit form 
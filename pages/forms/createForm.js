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
        questions:[{
            type:'',
            question:'',
            choices:[],
        }],
        responses:[
            {
              type:'',
              question:'',
              answers:[
                    {
                        user_id:'',
                        answer:[]
                    }
              ]
        }],
        result:{
            totalResponses:5,
            tallyPerQuestion:[
                {
                    type:'',
                    question:'',
                    choicesTally:[
                        {
                            option: '',
                            count: 0
                        }
                     ]
               }
            ]
        }
    } )

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [questions,setQuestions] = useState([])
    const [choices, setChoices] = useState([])




    const updateChoices = (index, value) => {
        console.log('index: ' + index)
        let newArr = [...choices]
        newArr[index] = value
        setChoices(newArr)
    }

    const choicesHandler =(id)=> {
       let questArr =[...questions]
       let questObj = questArr[id]
       questObj.choices = [...questObj.choices, 'Option']
       questArr[id] = questObj
       setQuestions(questArr)

    }

    
    const setQuestionType = (t) =>{
      
        console.log('type',t)

        let questObj = {
            type:t,
            choices: []
        }
        
         console.log('quest',questObj)

         setQuestions([...questions, questObj])
         
         console.log('q',questions)
       
        
      
    }
        
   // console.log(choices)
 
   



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

        { /*  

        <div className='flex'>
              
                {type === 'multiple choice'?
                (  
                <div> 
                    <h1> Multiple Choice </h1>

                    <div  className='py-3'>
                        <label  className="block text-sm font-medium text-gray-700">
                        Question:
                        </label>
                            <input
                            type="text"
                            name="question"
                            id="question"
                            className="focus:ring-gray-100 block w-800 pl-7 pr-12 sm:text-sm border-gray-300 rounded-sm"
                            placeholder="Enter Question"
                            onChange={(e)=> setQuest({question:e.target.value})}
                        />
                    </div>
                         
                    <div  className='py-3'>
                        <button className='bg-red-200 p-2 '  onClick={(e) =>{setChoices((oldArray, index) => [...oldArray, 'Option']);}}> Add Choices</button>
                   
                   
                        { choices.map((c,index)  => (

                             <input key={index}
                             type="text"
                             name="choice"
                             id='choice'
                             className="focus:ring-gray-100 block w-800 pl-7 pr-12 sm:text-sm border-gray-300 rounded-sm"
                             placeholder= {c==='Option'? c + (index+1): c} 
                             onChange={(e) => updateChoices(index,e.target.value)}

                            />
                        ))  

                        }
                        <div>
                        <button type='submit' className='bg-red-300' > SUBMIT</button>
                    </div>

                        
                
                           
                    </div>
                    

                    
                </div>) 

                : type ==='checkbox'?
                (<p> Checkbox</p>) 
                :type === 'text'?
                (<p> Text</p>) 
                :type === 'paragraph'?
                (<p> Paragraph</p>) : 
                (<p> </p>) 
              }

                
           
        </div>
        */}

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
                              onChange={(e)=> setQuest({question:e.target.value})}
                          />
                      </div>
                           
                      <div  className='py-3 m-2'>
                          <button className='bg-gray-200 p-2 '  onClick={(e) =>{choicesHandler(index)}}> Add Choices</button>
                          {q.choices.map((c,index)  => (
                               <input key={index}
                               type="text"
                               name="choice"
                               id='choice'
                               className="focus:ring-gray-100 block w-800 pl-7 pr-12 sm:text-sm border-gray-300 rounded-sm"
                               placeholder= {c==='Option'? c + (index+1): c} 
                               onChange={(e) => updateChoices(index,e.target.value)}
                              />
                          ))  
                          }    
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
                             onChange={(e)=> setQuest({question:e.target.value})}
                         />
                     </div>
                          
                     <div  className='py-3 m-2'>
                         <button className='bg-gray-200 p-2 '  onClick={(e) =>{choicesHandler(index)}}> Add Choices</button>
                         {q.choices.map((c,index)  => (
                              <input key={index}
                              type="text"
                              name="choice"
                              id='choice'
                              className="focus:ring-gray-100 block w-800 pl-7 pr-12 sm:text-sm border-gray-300 rounded-sm"
                              placeholder= {c==='Option'? c + (index+1): c} 
                              onChange={(e) => updateChoices(index,e.target.value)}
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
                                onChange={(e)=> setQuest({question:e.target.value})}
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
                                onChange={(e)=> setQuest({question:e.target.value})}
                            />
                        </div>
                    </div>)  : 
                     (<p> </p>) 
                   }
                </div>

           )
           )
        }

       






        </div>
    );
}

export default createForm;


///TODO question field, delete option , question.  save form 


 const forms =[{
    id: '1',
    title: "Form Title 1",
    description:"This is a form description",
    status: false,
    questions:[
        {
            type:'multiple choice',
            question:'Which is your favorite fruit?',
            choices:['Apple','Banana','Orange'],
        },
        {
            type:'checkbox',
            question:'Select the type of gadgets you have at home.',
            choices:['Smartphone','Laptop','Desktop'],
        },
        {
            type:'text',
            question:'What is the name of your pet?',
            choices:[],
        },
    ],
    responses:[
        {
          type:'multiple choice',
          question:'Which is your favorite fruit?',
          answers:[
                {
                    user_id:'1',
                    answer:['Banana']
                },
                {
                    user_id:'2',
                    answer:['Apple']
                },
                {
                    user_id:'3',
                    answer:['Orange']
                },
                {
                    user_id:'4',
                    answer:['Banana']
                },
                {
                    user_id:'5',
                    answer:['Apple']
                },
          ]
        },
        {
            type:'checkbox',
            question:'Select the type of gadgets you have at home.',
            answers:[
                  {
                     user_id:'1',
                     answer:['Smartphone']
                  },
                  {
                    user_id:'2',
                    answer:['Smartphone','Laptop']
                  },
                  {
                    user_id:'3',
                    answer:['Smartphone','Laptop','Desktop']
                  },
                  {
                    user_id:'4',
                    answer:['Laptop','Desktop']
                  },
                  {
                    user_id:'5',
                    answer:['Smartphone','Desktop']
                  },

                 ]
          },
          {
              type:'text',
              question: 'What is the name of your pet',
              answers:[
                  {
                    user_id:'1',
                    answer:['Mocha']
                  },
                  {
                    user_id:'2',
                    answer:['Brownie']
                  },
                  {
                    user_id:'3',
                    answer:['Bruno']
                  },
                  {
                    user_id:'4',
                    answer:['Luna']
                  },
                  {
                    user_id:'5',
                    answer:['Sky']
                  },

              ]
          }
    ],

    result:{
        totalResponses:5,
        tallyPerQuestion:[
            {
                type:'multiple choice',
                question:'Which is your favorite fruit?',
                choicesTally:[
                    {
                        option: 'Apple',
                        count: 2
                    },
                    {
                        option: 'Banana',
                        count: 2
                    },
                    {
                        option: 'Orange',
                        count: 1
                    },
                 ]
           },
           { 
                type:'multiple choice',
                question:'Which is your favorite fruit?',
                choicesTally:[
                    {
                        option: 'Smartphone',
                        count: 2
                    },
                    {
                        option: 'Laptop',
                        count: 2
                    },
                    {
                        option: 'Desktop',
                        count: 1
                    },
            ]

           },
           { 
                type:'multiple choice',
                question:'Which is your favorite fruit?',
                choicesTally:[],

       }
    ]

    }







},

]

export default forms
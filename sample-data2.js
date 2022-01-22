

 const forms =[{
    id: '1',
    title: "Form Title 1",
    description:"This is a form description for form number 1",
    status: false,
    required: false,
    questions:[
        {
            type:'multiple choice',
            question:'Which is your favorite fruit?',
            choices:['Apple','Banana','Orange'],
            responses:[
                {
                    questId:'1',
                    userId:'sample_user_1',
                    answer:['Banana']
                },
                {
                    questId:'1',
                    userId:'sample_user_2',
                    answer:['Apple']
                },
                {
                    questId:'1',
                    userId:'sample_user_3',
                    answer:['Orange']
                },
                {
                    questId:'1',
                    userId:'sample_user_4',
                    answer:['Banana']
                },
                {
                    questId:'1',
                    userId:'sample_user_5',
                    answer:['Apple']
                },
          ]
        },
        {
            type:'checkbox',
            question:'Select the type of gadgets you have at home.',
            choices:['Smartphone','Laptop','Desktop'],
            responses:[
                {
                   questId:'2',
                   userId:'sample_user_1',
                   answer:['Smartphone']
                },
                {
                   questId:'2',
                   userId:'sample_user_2',
                   answer:['Smartphone','Laptop']
                },
                {
                   questId:'2',
                   userId:'sample_user_3',
                   answer:['Smartphone','Laptop','Desktop']
                },
                {
                  questId:'2',
                  userId:'sample_user_4',
                  user_id:'4',
                  answer:['Laptop','Desktop']
                },
                {
                  questId:'2',
                  userId:'sample_user_5',
                  answer:['Smartphone','Desktop']
                },

               ]
            
        },
        {
            type:'text',
            question:'What is the name of your pet?',
            choices:[],
            responses:[
                {
                   questId:'3',
                   userId:'sample_user_1',                   
                   answer:['Mocha']
                },
                {
                  questId:'3',
                  userId:'sample_user_2',
                  answer:['Brownie']
                },
                {
                  questId:'3',
                  userId:'sample_user_3',
                  answer:['Bruno']
                },
                {
                  questId:'3',
                  userId:'sample_user_4',
                  answer:['Luna']
                },
                {
                  questId:'3',
                  userId:'sample_user_5',
                  answer:['Sky']
                },

            ]
        },
        {
            type:'dropdown',
            question:'Select your City',
            choices:['Manila','Pasig','Pasay'],
            responses:[
                {
                    questId:'4',
                    userId:'sample_user_1',
                    answer:['Manila']
                },
                {
                    questId:'4',
                    userId:'sample_user_2',
                    answer:['Pasay']
                },
                {
                    questId:'4',
                    userId:'sample_user_3',
                    answer:['Pasig']
                },
                {
                    questId:'4',
                    userId:'sample_user_4',
                    answer:['Manila']
                },
                {
                    questId:'4',
                    userId:'sample_user_5',
                    answer:['Pasig']
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
{
    id: '2',
    title: "Form Title 2",
    description:"This is a form description for form number 2",
    status: false,
    required: false,
    questions:[
        {
            type:'multiple choice',
            question:'Which is your favorite fruit?',
            choices:['Apple','Banana','Orange'],
            responses:[
                {
                    questId:'1',
                    userId:'sample_user_1',
                    answer:['Banana']
                },
                {
                    questId:'1',
                    user_id:'sample_user_2',
                    answer:['Apple']
                },
                {
                    questId:'1',
                    user_id:'sample_user_3',
                    answer:['Orange']
                },
                {
                    questId:'1',
                    user_id:'sample_user_4',
                    answer:['Banana']
                },
                {
                    questId:'1',
                    user_id:'sample_user_5',
                    answer:['Apple']
                },
          ]
        },
        {
            type:'checkbox',
            question:'Select the type of gadgets you have at home.',
            choices:['Smartphone','Laptop','Desktop'],
            responses:[
                {
                   questId:'2',
                   userId:'sample_user_1',
                   answer:['Smartphone']
                },
                {
                   questId:'2',
                   userId:'sample_user_2',
                   answer:['Smartphone','Laptop']
                },
                {
                   questId:'2',
                   userId:'sample_user_3',
                   answer:['Smartphone','Laptop','Desktop']
                },
                {
                  questId:'2',
                  userId:'sample_user_4',
                  user_id:'4',
                  answer:['Laptop','Desktop']
                },
                {
                  questId:'2',
                  userId:'sample_user_5',
                  answer:['Smartphone','Desktop']
                },

               ]
            
        },
        {
            type:'text',
            question:'What is the name of your pet?',
            choices:[],
            responses:[
                {
                   questId:'3',
                   userId:'sample_user_1',                   
                   answer:['Mocha']
                },
                {
                  questId:'3',
                  userId:'sample_user_2',
                  answer:['Brownie']
                },
                {
                  questId:'3',
                  userId:'sample_user_3',
                  answer:['Bruno']
                },
                {
                  questId:'3',
                  userId:'sample_user_4',
                  answer:['Luna']
                },
                {
                  questId:'3',
                  userId:'sample_user_5',
                  answer:['Sky']
                },

            ]
        },
        {
            type:'dropdown',
            question:'Select your City',
            choices:['Manila','Pasig','Pasay'],
            responses:[
                {
                    questId:'4',
                    userId:'sample_user_1',
                    answer:['Manila']
                },
                {
                    questId:'4',
                    userId:'sample_user_2',
                    answer:['Pasay']
                },
                {
                    questId:'4',
                    userId:'sample_user_3',
                    answer:['Pasig']
                },
                {
                    questId:'4',
                    userId:'sample_user_4',
                    answer:['Manila']
                },
                {
                    questId:'4',
                    userId:'sample_user_5',
                    answer:['Pasig']
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


 const forms =[{
    id: '1',
    title: "Form Title 1",
    description:"This is a form description for form number 1",
    status: false,
    responseCount: 5,
    questions:[
        {
            type:'multiple choice',
            question:'Which is your favorite fruit?',
            required: false,
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
          ],

         result:[{
                choice:'Apple',
                count: 2
            },
            {
                choice:'Banana',
                count: 2
            },
            {
                choice:'Orange ',
                count: 1
            },
        ]
        },
        {
            type:'checkbox',
            question:'Select the type of gadgets you have at home.',
            required: false,
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

               ],

               result:[{
                      choice:'Smartphone',
                      count: 4
                  },
                  {
                      choice:'Laptop',
                      count: 3
                  },
                  {
                      choice:'Desktop',
                      count: 3
                  },
              ]
            
        },
        {
            type:'text',
            question:'What is the name of your pet?',
            required: false,
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

            ],

            result:[{
                   choice:'',
                   count: 0
               },
               {
                   choice:'',
                   count: 0
               },
               {
                   choice:' ',
                   count: 0
               },
           ]
        },
        {
            type:'dropdown',
            question:'Select your City',
            choices:['Manila','Pasig','Pasay'],
            required: false,
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
          ],

          result:[{
                 choice:'Manila',
                 count: 2
             },
             {
                 choice:'Pasig',
                 count: 2
             },
             {
                 choice:'Pasay',
                 count: 1
             },
         ]
        }
    ],

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
            required: false,
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
            required: false,
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
            required: false,
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
            required: false,
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

},

]

export default forms
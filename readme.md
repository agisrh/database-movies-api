# database movies api
###  documentation

sign up and get your key token from here : https://ducky-database-movies-api.herokuapp.com/auth  

base url : https://ducky-database-movies-api.herokuapp.com/  
##### /api/movies

endpoint : /api/movies  

description : get movies data  


| parameter |  required |                                     valid options | default value | description                                                                       |
|-----------|:---------:|--------------------------------------------------:|---------------|-----------------------------------------------------------------------------------|
| key_token | *required | 64 digit of token key you got when you registered |               | sign up in https://ducky-database-movies-api.herokuapp.com/auth to get your key token |
| limit     | *optional |                  (Number 1 - 100) Max 100 queries | 15            | Number limit of queries                                                           |
| page      | *optional |                                    (Number 1 - n) | 1             | Number of page, you can use this for pagination                                   |
| sort      | *optional |                                  1 = ASC 0 = DESC | 1(ASC)        | Sorting the queries                                                               |
| search    | *optional | String title of searched movie (ex: transformer)  |               | Title of search movie                                                             |

example : http://localhost:3000/api/movies?key_token=your_token_key" or https://ducky-database-movies-api.herokuapp.com/api/movies?key_token=your_token_key&search=transformer&limit=10  



## Important for you to know
data response table :  
| field      |     type     |                                                      description |
|------------|:------------:|-----------------------------------------------------------------:|
| status     |    boolean   | true of false, explain whether the request was successful or not |
| dataLength |    number    |                                            amount of data movies |
| data       | array object |                                              list of data movies |
| videoEmbed | string       | this is can you use to embed in iframe tag or video tag          |  



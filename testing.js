Unit testing : Checks that individual units of code, mainly functions, work as expected ---> like a component
tools: jest, @testing-library/react
example: just test one thins, one section like fetch data but not real api, balke with mock fake data
the unit test should not connect with external dependencies like db, api and ...

Integration testing: Individual units or features of the app are combined and tested as a group ---> like some components works together
tools: jest, @testing-library/react
example: integration test is same with unit test but one different thing, the integration test is should connect with dependncies like api, db and ... not mock fake data

End-to-end tests simulate actual user actions and are designed to test how a real user would likely use the application. 
In React, E2E testing helps to ensure that the code you wrote is functional and your app works as intended, allowing you 
to catch bugs in your code before your app is live. ---> an action like user's payment scenario
tools: cypress

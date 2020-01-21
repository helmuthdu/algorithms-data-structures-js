# Testing Questions

* What are some advantages/disadvantages to testing your code?
* What tools would you use to test your code's functionality?
* What is the difference between a unit test and a functional/integration test?
* What is the purpose of a code style linting tool?
* What are some of the testing best practices?

### What are some of the testing best practices?

* Test one thing at a time: tests should have clear objectives. Each test should focus on a feature or look at things like user interface or security. 
* Use regression tests: testing a main feature once isn’t enough. New additions to the code repository can interfere with features that previously passed tests.
* Report and track bugs: determine how bugs will be reported and what kind of data is needed. Choose a bug tracking tool adapted to your workflow and determine which QA metrics will be tracked.
* Leverage analytics: keep records of every test conducted and use this data to determine where bugs are likely to occur. This data will help you to develop new tests that address problem areas.
* Choose the right environment for tests: try covering a wide range of scenarios, including different devices, OS and user profiles.
* Use unit and integration tests: unit tests will isolate each component of your app, while integration tests will assess how well each subsystem works. Run unit tests in parallel to save time, but don't move onto integration tests until you have ensured that individual components work like they should.
* Don’t neglect the UI: use functional tests performed by human testers to perform end-to-end scenarios and get a feel for the UI of the app. It might be best to wait until you have fixed issues detected during unit and integration tests.

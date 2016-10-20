# NodeJS
Contains code written while learning to use NodeJs and ExpressJs during webops summerschool

1.program.js prints HELLO WORLD
2.program1.js prints sum of command line arguments entered.
3.program2.js prints number of lines in the file passed through command line argument(reads file synchronously along with other commands).
4.program3.js used readFile instead of readFileSync for the same purpose.
  readFile reads the file and after checking for errors performs operations using a callback.
  This is better as IO lines are not continuously occupied.
5.program4.js stores the files in adirectory in a list through a callback and filters out files and prints those with a ertain extension given as second argument.
6.program5.js achieves the same purpose through a module defined in module.js.
7.program6.js performs a HTTP get request to a website and prints the response.
8.program7.js performs a HTTP get request and stores the response using pipe function and prints no. of characters and the characters in the response.
9.program8.js performs HTTP get requests to 3 URLs and prints the response in the same order as they were give in CLI.
  This is done by counting callbacks.
10.program9.js writes the time to a TCP server.
11.program10.js listens to the server port in first CLI arg and streams file contents in second CLI arg to response.
12.expressHello.js handles get and post requests using expressJs. 

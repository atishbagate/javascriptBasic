/*
Compilation -> entire code is converted into machine readable code. that is binary file. 
and after that file is executed into computer. 

JIT -> Just in time compiler -> it converted machine code once and then executed immediately. 

not JS code compilation work in this format. ( JIT )

source code ->>>>>>>>> machine code ->>>>>>>>> Program Running.

----------------
Modern JS JIT working - compilation of code inside JS Engine. 

parsing - parsing the file.

  convert into AST -> Abstract syntax tree. ( it read the code and save in Tree(AST) as var let const functions etc.)
    AST created during the parsing phase after the source code is tokenized.
 
    compilation -> AST converted into code readable for computer. 

  execution -> it happens in call stack.

https://dev.to/khattakdev/chrome-v8-engine-working-1lgi

-------------------------------------------------------------

How Execution Contecxt work. 

------ How code get executed after compiling ... means after creating a byte machine code. 

It will create a global execution context. 
  - for top level code. means code that is on top level only 
  ( ex - name variable declation, function declaration and expression.)

what is mean by execution context - Environment in which a piece of JS is executed. 
  It Stores all the necessory information for some code to be executed.

  there is only one global execution context. 
  after that execution. global context will be created. 
  and after that for each function call its own new execution context will be created. 
 
  all the other execution context together create a call stack. 

  Q - what is inside a execution context ?
    variable env, let var const declaration. 
    functions.
    args obj.
    scope chain.
    this keyword.
  
*/
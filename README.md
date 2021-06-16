# Hello World API

This is the initial draft. It's likely to have some flaws, but it'll be improved to be more stable in the future.

## API Reference

#### Get all programming languages

```http
  GET https://mk-hello-world-api.herokuapp.com/api
```
Example:

```json
[
  {
    "id": "0",
    "title": "--Unless",
    "description": "",
    "url": "https://esolangs.org/wiki/--Unless",
    "language_short": "c-like",
    "code": "Hello_world:\r\n    Hello_world_function:\r\n        R:\r\n            Helloworld.c\r\n        :R\r\n    :Hello_world_function\r\n:Hello_world\r\nR:\r\n    Hello_world:\r\n        Hello_world_function\r\n    :Hello_world\r\n:R"
  },
  {
    "id": "1",
    "title": ",,,",
    "description": ",,, (pronounced 'Commata' , plural of 'Comma') is another stack-based esolang made by totallyHuman. ,,, utilizes numerous lesser-used unicode characters to manipulate the stack. Some of these characters may not be even displayed in certain devices due to technical issues, making programming in the language sometimes extremely difficult. However, ,,, is significantly useful for golfing, making extra characters useless at most cases. Its filename extension is '.,,,'. ,,, is currently a work in progress, as it lacks numerous programming statements like loops.",
    "url": "https://esolangs.org/wiki/,,,",
    "language_short": "",
    "code": "\"Hello, World!"
  },
  {
    "id": "2",
    "title": "!@#$$%^&∗()_+ (!@$$%^&*()+)",
    "description": "!@#$$%^&*()_+ is another fun esoteric programming language invented by PPCG user Conor O'Brien (User:Conor O'Brien). It is a stack-based language. Its most highlighted characteristic might be that all characters are considered valid commands in the language (there are no nop commands). The title consists of all of its special commands which are used for manipulating the stack. !@#$$%^&*()_+ programs resemble grawlixes (random symbols which replace vulgarism).",
    "url": "https://esolangs.org/wiki/!@$$%25%5E%26*()%2B",
    "language_short": "brainfuck",
    "code": "dlroW olleH(@)"
  },
  .
  .
  .
]
```

***

#### Get specific programming languages

```http
  GET https://mk-hello-world-api.herokuapp.com/api?title=C
```

Example:

```json
[
  {
    "id": "215",
    "title": "C",
    "description": "C (/siː/, as in the letter c) is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions. It has found lasting use in applications previously coded in assembly language. Such applications include operating systems and various application software for computer architectures that range from supercomputers to PLCs and embedded systems.",
    "url": "https://en.wikipedia.org/wiki/C_(programming_language)",
    "language_short": "c",
    "code": "#include <stdio.h>\r\n \r\nint main() {\r\n    printf(\"Hello World\\n\");\r\n    return 0;\r\n}"
  }
]
```

***

#### Get programming languages have this characters init

```http
  GET https://mk-hello-world-api.herokuapp.com/api?qtitle=an
```

Example:

```json
[
  {
    "id": "6",
    "title": "~Afrikaans",
    "description": "",
    "url": "",
    "language_short": "brainfuck",
    "code": "Vertoon \"Hallo Wêreld\" en 'n nuwe lyn.\r\nStop die program."
  },
  {
    "id": "14",
    "title": "~German",
    "description": "",
    "url": "",
    "language_short": "",
    "code": "Gib \"Hallo Welt\" und eine leere Zeile aus.\r\nBeende das Programm."
  },
  {
    "id": "20",
    "title": "~Italian",
    "description": "",
    "url": "",
    "language_short": "",
    "code": "Visualizza \"Hello World\" e una nuova riga.\r\nFerma il programma"
  },
  .
  .
  .
]
```

***

#### Get programming languages have these characters in the first letter

```http
  GET https://mk-hello-world-api.herokuapp.com/api?qAlphabet=a
```

Example:

```json
[
  {
    "id": "58",
    "title": "A:;",
    "description": "A:; is an esoteric programming language created by User:OriginalOldMan. Each A:; program has a series of statements separated by semicolons. Each A:; statement has a series of arguments separated by colons. All A:; programs must be written on one line.",
    "url": "https://esolangs.org/wiki/A:;",
    "language_short": "c-like",
    "code": "j:Hello World;p:j"
  },
  {
    "id": "59",
    "title": "A.R.T.I.C.L.E.",
    "description": "A.R.T.I.C.L.E. is an esoteric programming language created in october 5 2020 by User:SoicBR A.R.T.I.C.L.E. stands for: Apple Random Tower Island Cat LOL Elephant",
    "url": "https://esolangs.org/wiki/A.R.T.I.C.L.E.",
    "language_short": "",
    "code": "This is the first ever \"useful\" program written\r\n in the ARTICLE. It's an esoteric programming\r\n language made by me, Soic. I don't know what else to\r\n write but i still to write code.\r\n Now, it's time to print the first character in\r\n the very cool debug console.\r\n Here i go again to write code to a dumb\r\n language. I don't really know what to. say, yes\r\n i swapped the position of a period and a comma\r\n just because i'm very, very, lazy.\r\n Now, it's time to print the first character in\r\n the very cool debug console.\r\n Here i go yet again writing code to a dumb\r\n language. Yes, i am very LAZY. Lazy Lazy Lazy\r\n Lazy, laughing out loud, yes, i did this twice.\r\n Now, i will print the first character in\r\n the cool debug console yet again.\r\n Now, i will print the first character in\r\n the cool console yet again, again.\r\n Ngl, i'm out of ideas now and i'm just\r\n writing stuff. I need to write code.\r\n I need to write a lot of code.\r\n I'm tired, now i will just filler my way\r\n out f f f f.\r\n f0 f1 f2 f3 f4\r\n f5 f6 f7 f8 f9 f10 f11. n1 n2\r\n n3 n4 n5 n6 n7 n8 n9. n1 n2 n3 n4 n5 n6 n7 n8\r\n n9 n10 n11 n12 n13 n14 n15 n16 n17 n18 n19 n20.\r\n f means filler f f f f f f f f f f f.\r\n f1 f2 f3 f4 f5 f6 f7 f8 f9 f10 f11. n1 n2 n3\r\n n4 n5 n6 n7 n8 n9 n10. n1 n2 n3 n4 n5 n6 n7 n8\r\n n9 n10 n11 n12.\r\n f f f f f f f f f f f f f f.\r\n f1 f2 f3 f4 f5 f6 f7 f8 f9 f10 f11 f12. n1 n2\r\n n3 n4 n5. n1 n2 n3 n4 n5 n6 n7 n8 n9 n10 n11 n12\r\n n13.\r\n f f f f f f f f f f f f f f.\r\n f1 f2 f3 f4 f5 f6 f7 f8 f9 f10 f11. n1 n2\r\n n3 n4 n5. n1 n2 n3 n4 n5 n6 n7 n8.\r\n F f f f f f f f f f f f f f.\r\n f1 f2 f3 f4 f5 f6 f7 f8 f9 f10 f11 f12. n1 n2\r\n n3 n4 n5. n1 n2 n3 n4 n5 n6 n7 n8 n9 n10 n11.\r\n F f f f f f f f f f f f f f.\r\n f1 f2 f3 f4 f5 f6 f7 f8 f9 f10 f11 f12. n1 n2\r\n n3 n4 n5. n1 n2 n3 n4 n5 n6 n7 n8 n9 n10 n11 n12 n13.\r\n F f f f f f f f f f f f f f."
  },
  .
  .
  .
]
```

***

#### Get a group of programming languages that has same category

```http
  GET https://mk-hello-world-api.herokuapp.com/api?language_short=c-like
```

Example:

```json
[
  {
    "id": "0",
    "title": "--Unless",
    "description": "",
    "url": "https://esolangs.org/wiki/--Unless",
    "language_short": "c-like",
    "code": "Hello_world:\r\n    Hello_world_function:\r\n        R:\r\n            Helloworld.c\r\n        :R\r\n    :Hello_world_function\r\n:Hello_world\r\nR:\r\n    Hello_world:\r\n        Hello_world_function\r\n    :Hello_world\r\n:R"
  },
  {
    "id": "43",
    "title": "0587",
    "description": "0587 is a functional esolang that is made up of numeric instructions. It was created by user:InfiniteDonuts and is inspired by 0815, Unlambda, and 1337.\r\n\r\n",
    "url": "https://esolangs.org/wiki/0587",
    "language_short": "c-like",
    "code": "01040291(Hello World)"
  },
  .
  .
  .
]
```

***

#### Get the number of programming languages

```http
  GET https://mk-hello-world-api.herokuapp.com/api?limit=3
```

Example:

```json
[
  {
    "id": "0",
    "title": "--Unless",
    "description": "",
    "url": "https://esolangs.org/wiki/--Unless",
    "language_short": "c-like",
    "code": "Hello_world:\r\n    Hello_world_function:\r\n        R:\r\n            Helloworld.c\r\n        :R\r\n    :Hello_world_function\r\n:Hello_world\r\nR:\r\n    Hello_world:\r\n        Hello_world_function\r\n    :Hello_world\r\n:R"
  },
  {
    "id": "1",
    "title": ",,,",
    "description": ",,, (pronounced 'Commata' , plural of 'Comma') is another stack-based esolang made by totallyHuman. ,,, utilizes numerous lesser-used unicode characters to manipulate the stack. Some of these characters may not be even displayed in certain devices due to technical issues, making programming in the language sometimes extremely difficult. However, ,,, is significantly useful for golfing, making extra characters useless at most cases. Its filename extension is '.,,,'. ,,, is currently a work in progress, as it lacks numerous programming statements like loops.",
    "url": "https://esolangs.org/wiki/,,,",
    "language_short": "",
    "code": "\"Hello, World!"
  },
  {
    "id": "2",
    "title": "!@#$$%^&∗()_+ (!@$$%^&*()+)",
    "description": "!@#$$%^&*()_+ is another fun esoteric programming language invented by PPCG user Conor O'Brien (User:Conor O'Brien). It is a stack-based language. Its most highlighted characteristic might be that all characters are considered valid commands in the language (there are no nop commands). The title consists of all of its special commands which are used for manipulating the stack. !@#$$%^&*()_+ programs resemble grawlixes (random symbols which replace vulgarism).",
    "url": "https://esolangs.org/wiki/!@$$%25%5E%26*()%2B",
    "language_short": "brainfuck",
    "code": "dlroW olleH(@)"
  }
]
```
# Hello World API

This is the initial draft. It's likely to have some flaws, but it'll be improved to be more stable in the future.

## API Reference

#### Get all programming languages

```http
  GET https://heroku.com/mk-hello-world-api/api
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
    "title": "!@#$$$$%^&∗()_+ (!@$$$$%^&*()+)",
    "description": "!@#$$$$%^&*()_+ is another fun esoteric programming language invented by PPCG user Conor O'Brien (User:Conor O'Brien). It is a stack-based language. Its most highlighted characteristic might be that all characters are considered valid commands in the language (there are no nop commands). The title consists of all of its special commands which are used for manipulating the stack. !@#$$$$%^&*()_+ programs resemble grawlixes (random symbols which replace vulgarism).",
    "url": "https://esolangs.org/wiki/!@$$$$%25%5E%26*()%2B",
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
  GET https://heroku.com/mk-hello-world-api/api?title=C
```

Example:

```json
[
  {
    "id": "0",
    "title": "C",
    "description": "C (/siː/, as in the letter c) is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions. It has found lasting use in applications previously coded in assembly language. Such applications include operating systems and various application software for computer architectures that range from supercomputers to PLCs and embedded systems.",
    "url": "https://en.wikipedia.org/wiki/C_(programming_language)",
    "language_short": "c",
    "code": "#include <stdio.h>\r\n \r\nint main() {\r\n    printf(\"Hello World\\n\");\r\n    return 0;\r\n}"
  }
]
```

***

#### Get a group of programming languages that has same category

```http
  GET https://heroku.com/mk-hello-world-api/api?language_short=c-like
```

Example:

```json

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
    "title": "0587",
    "description": "0587 is a functional esolang that is made up of numeric instructions. It was created by user:InfiniteDonuts and is inspired by 0815, Unlambda, and 1337.\r\n\r\n",
    "url": "https://esolangs.org/wiki/0587",
    "language_short": "c-like",
    "code": "01040291(Hello World)"
  },
  {
    "id": "2",
    "title": "4GL",
    "description": "A fourth-generation programming language (4GL) is any computer programming language that belongs to a class of languages envisioned as an advancement upon third-generation programming languages (3GL).",
    "url": "https://en.wikipedia.org/wiki/Fourth-generation_programming_language",
    "language_short": "c-like",
    "code": "main\r\n    display \"Hello World\"\r\nend main"
  },
  .
  .
  .
]
```

***

#### Get the number of programming languages

```http
  GET https://heroku.com/mk-hello-world-api/api?limit=3
```

Example:

```json
[
   {
      "id":"0",
      "title":"--Unless",
      "description":"",
      "url":"https://esolangs.org/wiki/--Unless",
      "language_short":"c-like",
      "code":"Hello_world: Hello_world_function: R: Helloworld.c :R :Hello_world_function :Hello_world R: Hello_world: Hello_world_function :Hello_world :R"
   },
   {
      "id":"1",
      "title":"μλ (MiLambda)",
      "description":"μλ (MiLambda), is esoteric two dimensional turing-complete programming language. In this languages all instructions are letters of Greek alphabet.",
      "url":"https://esolangs.org/wiki/MiLambda",
      "language_short":"brainfuck",
      "code":"< EEEEEEEΔΔΘς v v ςΘΔEEEEEEEEEE > < EEEEEEEEEEEδδΘς v v ΘδδEEEEEEEEEEEς > < ς EEEEEEEEEEEΔΘ v v ΘΔΔΔΔEEEEς > < ςEEEΔΔΘ v v ΘδEEEEEEEEEEEEς > < ςEEEEEEEEEEEΔΘ v v ΘΔΔΔΔEEEEEEEEEEEς > < ςEEEEEEEEEEEδδΘ v v ΘEEEEEEEEEEς > < ςEEEΔΔΔΘ λ"
   },
   {
      "id":"2",
      "title":"قلب",
      "description":"قلب (Levantine Arabic: [ʔalb]), transliterated Qalb, Qlb and Alb, is a functional programming language allowing a programmer to write programs completely in Arabic.",
      "url":"https://en.wikipedia.org/wiki/Qalb_(programming_language)",
      "language_short":"c-like",
      "code":"‫(قول ""مرحبا يا عالم!"")"
   }
]
```
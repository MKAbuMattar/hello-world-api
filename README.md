# Hello World API

This is the initial draft. It's likely to have some flaws, but it'll be improved to be more stable in the future.

```http
  https://mk-hello-world-api.herokuapp.com/api/v1

  https://mk-hello-world-api.herokuapp.com/api/v1/random

  https://mk-hello-world-api.herokuapp.com/api/v1/raw

  https://mk-hello-world-api.herokuapp.com/api/v1/raw/random
```

## API Reference

#### Get all programming languages

```http
  GET https://mk-hello-world-api.herokuapp.com/api/v1
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

---

#### Get specific programming languages

```http
  GET https://mk-hello-world-api.herokuapp.com/api/v1?title=C
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

---

#### Get programming languages have this characters init

```http
  GET https://mk-hello-world-api.herokuapp.com/api/v1?qtitle=an
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

---

#### Get programming languages have these characters in the first letter

```http
  GET https://mk-hello-world-api.herokuapp.com/api/v1?qAlphabet=a
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

---

#### Get a group of programming languages that has same category

```http
  GET https://mk-hello-world-api.herokuapp.com/api/v1?language_short=c-like
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

---

#### Get the number of programming languages

```http
  GET https://mk-hello-world-api.herokuapp.com/api/v1?limit=3
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

## Programming languages:

<h2 align="center">
<span>
<a href="##">#</a>
</span>
<span>
<a href="#A">A</a>
</span>
<span>
<a href="#B">B</a>
</span>
<span>
<a href="#C">C</a>
</span>
<span>
<a href="#D">D</a>
</span>
<span>
<a href="#E">E</a>
</span>
<span>
<a href="#F">F</a>
</span>
<span>
<a href="#G">G</a>
</span>
<span>
<a href="#H">H</a>
</span>
<span>
<a href="#I">I</a>
</span>
<span>
<a href="#J">J</a>
</span>
<span>
<a href="#K">K</a>
</span>
<span>
<a href="#L">L</a>
</span>
<span>
<a href="#M">M</a>
</span>
<span>
<a href="#N">N</a>
</span>
<span>
<a href="#O">O</a>
</span>
<span>
<a href="#P">P</a>
</span>
<span>
<a href="#Q">Q</a>
</span>
<span>
<a href="#R">R</a>
</span>
<span>
<a href="#S">S</a>
</span>
<span>
<a href="#T">T</a>
</span>
<span>
<a href="#U">U</a>
</span>
<span>
<a href="#V">V</a>
</span>
<span>
<a href="#W">W</a>
</span>
<span>
<a href="#X">X</a>
</span>
<span>
<a href="#Y">Y</a>
</span>
<span>
<a href="#Z">Z</a>
</span>
</h2>

<hr/>
<div align="center" id="#">
<h3># 86 Languages Programming<h3>
قلب
کوردیی ناوەندی
なでしこ
ひまわり
上海话
文言
易语言
火星文
文言
한국어
Μλ (MiLambda)
!@#$$%^&∗()_+ (!@$$%^&*()+)
():;#?!
,,,
--Unless
///
><> (Fish)
?$51=
@tention!
@text
~-~!
~Afrikaans
~Bengali
~Chinese
~Czech
~Dutch
~English
~Español
~Finnish
~French
~German
~Greek
~Gujarati
~Hausa
~Hindi
~Hungarian
~Indonesia
~Italian
~Javanese
~Kannada
~Malay
~Malayalam
~Marathi
~Mongolian
~Odia
~Pashto
~Persian
~Polish
~Portuguese
~Punjabi
~Russian
~Sanskrit
~Serbian
~Sindhi
~Spanish
~Swedish
~Tamil
~Telugu
~Thai
~Traditional Chinese
~Turkish
~Ukrainian.
~Urdu
~Vietnamese
~Xhosa
~Zulu
ᚱᚢᚾᛅᛦ
∗
0(nop^)
0587
05AB1E
0815
1+
1C Enterprise
256
2B
2DFuck
2L
420
4D
4GL
4Test
4ThDimension (4th Dimension)
8051 Assembly
8Th
🆒
</div>
<hr/>
<div align="center" id="A">
<h3>A 105 Languages Programming<h3>
A:;
A.R.T.I.C.L.E.
A++
ABAP
ABC
ACIDIC
ACL
ACPI (Advanced Configuration and Power Interface)
ACRONYM
ACS (Action Code Script)
Actionscript
Actionscript Flashmx
Actionscript2 (ActionScript 2)
Actionscript3 (ActionScript 3)
Ada
AdvPL
Aeolbonn
Agda
Aheui
Aime
AIML
Airline food
AIV
ALAGUF
Alda
Algae
ALGOL W
Algol60 (ALGOL 60)
Algol68 (ALGOL 68)
Alore
AlPhAbEt
Alphaprint
Amiga E (Amiga-E)
Amos
Android
AngelScript
Angular (AngularJS)
Ante
AntLang
AnyPL
APC
Apex
APL
AppleScript
Applesoft BASIC
ARC
Arduino
Arena
Argh (Argh!)
ArkScript
ArnoldC
AsciiDots
Asdf
Ash
Asm2bf
ASP (Asparagus)
Asparagus Assembly
Aspectj
Assembler 6502
Assembler 6502appleII
Assembler 6502c64
Assembler 6809vectrex
Assembler 8048 videopac
Assembler arm
Assembler ARM aarch64
Assembler Atari 2600
Assembler Bootsect
Assembler DCPU16
Assembler FASM DOS
Assembler hla
Assembler HP85
Assembler IBM360
Assembler Intel
Assembler lc-3 (Assembler lc3)
Assembler m68000 amigaos
Assembler MASM DOS
Assembler MASM Win32
Assembler MASM Win64
Assembler MIPS
Assembler MMIX
Assembler NASM FreeBSD
Assembler NASM Linux
Assembler NASM Linux64
Assembler NASM Macho64
Assembler NASM Win32
Assembler pdp10 midas
Assembler pdp11 palx
Assembler TASM DOS
Assembler tms9900 ti99 4a
Assembler Vax Ultrix
Assembler Z80 Knightos
Assembler Z80 TI83calculator
Assembler Z80 zxspectrum
Assembly language
ATS2
Attache
Aubergine
Auo
AutoHotKey
AutoIt
AutoLISP
AviSynth
Awful
AWK
Axe
</div>
<hr/>
<div align="center" id="B">
<h3>B 62 Languages Programming<h3>
B
Babalang
BackFlip
Backshift
BAIK
Ballerina
BAM128
Barely
Bash
BASIC
BASIC 256
Batch to memory
Batsh
Battlestar
Bauberqueue
BC
BC GNU
BCDFuck
BCPL (Basic Combined Programming Language)
Beanshell
Beatnik
Beef
Befunge
BennuGD
BestFriends.js
Beta
Betterave
BFI
Binary lambda calculus (byte oriented) (BLC)
Binaryfuck
Binodu
BIRL
BIT
BitBitJump
Bitch
Bitsbox
Bitwise Cyclic Tag (BCT)
Black
BlackRum
BLC
Blender
Blitz3d
Bloop
Blub
Bolgefuck
Boo
Boolet
Boolfuck
Bosque
Brain-Flak
Brainfuck
Brainfuck 2D
Brian & Chuck
Broccoli
BRZRK
Bucket
BuddyScript
BugSophia
Bur
Burlesque
Byte Syze
Byter
</div>
<hr/>
<div align="center" id="C">
<h3>C 68 Languages Programming<h3>
C
C Shell
C-INTERCAL
C+
C++
C+++
C∗ (C* / C Star)
Cache ObjectScript
CAML
Cardinal
Casio BASIC
Cat
Cbot
CDuce
Cell
Cells
Centura
Ceylon
CGI (Common Gateway Interface)
Chaos
Chapel
Charcoal
Cheddar
Cheese++
Chef
Chicekn
Chicken
Choon
Cil
CLC-INTERCAL
CLCLC-INTERCAL
Clean
Clipper
CLIPS
CLISP
Clojure
CLU
COBOL
CobolScript
Cobra
Coconut
Codd
CoffeeScript
Coldfusion
Comefrom0x10
Commercial
Common Lisp (Common-Lisp)
Compute
Concurnas
ContinuousEquation (ContinuesEquation)
Control Language
Cool
CopyPasta Language
Cor
Coral 66
COW
Crazy
Crystal
CSH
CSharp (C#)
CSON
CSS
Cuda
Cufrab
Cuneiform
Curry
CypherNeo4j
Cω
</div>
<hr/>
<div align="center" id="D">
<h3>D 44 Languages Programming<h3>
D
D♭♭
Daoyu
Dark
Dart
Darwin
DataFlex
Db2
DBase
DBFV!
Dc
DCL (DIGITAL Command Language)
DCPU
Dd/dd
Decimal
Defunc
Delphi
Deno
Desmos
DFA-er
Difficult
DigFill
Dirst
Dis
Divzeros
DL
DNA Sharp (DNA#)
Dog
DogeScript
DOGO
Dongbei
DOS
Dotlang
DPATL Python
Draco
Dragon
DreamMaker
Drive-In Window
DStack
DTrace
DUP
Dupdog
Dylan
Dyvil
</div>
<hr/>
<div align="center" id="E">
<h3>E 31 Languages Programming<h3>
E
E62qpodb593
EBuild
Ec
EchoLisp
Efene
Egl
Eiffel
ELANG
Elena
Elixir
Elm
EmacsLisp (Emacs Lisp)
Emerald
Emmental
Emoji
Emoji Code
Emoji gramming
Emoticon
Enigma 2D (Enigma-2D)
Enkelt
EnScript
Eodermdrome
EOOOL
Erlang
Erlang EScript
Es
Euphoria
Evil
Exp
Express
</div>
<hr/>
<div align="center" id="F">
<h3>F 41 Languages Programming<h3>
F
Factor
FakeASM
Falcon
FALSE
Fancy
Fantom
Fennel
Ferite
Fetlang
FiM++
Fish
Fishing
Fjölnir (Fjolnir / Fjoelnir)
FlaScript
Flask
Flip
Flutter
Fob
Focal
Fog.fog
Foo
Foobar and Foobaz and Barbaz, oh my!
Forobj
Forth
Fortob
Fortran
Fortran77
Fourier
FoxPro
Fractran++
FRAK
FrancePROG
Freebrain
Frink
FROM HERE TO THERE
FSharp (F#)
FStar (F*)
Fueue
Full O (Full 0)
Funciton
</div>
<hr/>
<div align="center" id="G">
<h3>G 33 Languages Programming<h3>
GAML
Gammaplex
GASOIL
GDScript
Gecho
Genie
Gentzen
GeoJSON
GFA Basic
Gibberish (programming language)
Gibberish/JavaScript
Glass
GML (Game Maker Language)
Go
Goldfish
Golfscript
Golfuck
Golo
Google Apps Script
Gosu
GraphQL
Grass
Gravity
GreeeeeeeeenText
Green Marl
Gri
GridScript
Grin
Grok
Groovy
GTA3Script
Gui4Cli
Gulp
</div>
<hr/>
<div align="center" id="H">
<h3>H 26 Languages Programming<h3>
H🌍
Hack
Haml
Hanoi Love
Haskell
Haxe
Hello
Hello++
HEX
Hexadecimal Stacking Pseudo-Assembly Language
Hexagony
Hexish
Higher Subleq (HSQ)
HighFive
Hodor
Hollow
Holy C (HolyC)
Homespring
HOP
HP 41C (HP-41C)
HQ9+
HTML
Hubot
Huf
Hy
HyperTalk
</div>
<hr/>
<div align="center" id="I">
<h3>I 22 Languages Programming<h3>
I5
IBM1401
IcedCoffeeScript
ICI
Icon
IDL
Idris
Il (Instruction list)
INCAL
Incident
InDec
Inform
Ink
Inkling
Integ
Intercal
Io
Ioke
IRC
IronScheme
ISCOM
ISLISP
</div>
<hr/>
<div align="center" id="J">
<h3>J 18 Languages Programming<h3>
J
Jade
Jai
Jasmin
Jason
Java
JavaScript (JS)
Jelly
Jenkinsfile
Jess
JScript
JSFuck
JSON (JavaScript Object Notation)
JSONiq
JSX
JudoScript
Julia
Jython
</div>
<hr/>
<div align="center" id="K">
<h3>K 12 Languages Programming<h3>
K
Karel
Keg
KimL
Kipple
Kitanai
Kitten
Koberi C
Kotlin
Kotlin Script
KSH (KornShell)
Kumir
</div>
<hr/>
<div align="center" id="L">
<h3>L 37 Languages Programming<h3>
Labyrinth
Lasso (LassoScript)
LaTeX
Lazy K (LazyK)
LBL
LCoffee
Less
Leszek
Licorne
Like, Python
LilyPond
Limbo
Lingo
Linguine
Lisaac
Lisp
ListLang
LiveScript
LLVM
LNUSP
Locomotive Basic
Log
Logical
Logicode
Logo
LogOS
Logtalk
LOLA
LOLCODE
LOLPython
Losescript
LotusScript
Löve
LSL (Linden Scripting Language)
LUA
Lua Grimex
LWC
</div>
<hr/>
<div align="center" id="M">
<h3>M 56 Languages Programming<h3>
M code (M-code)
M4
MacLisp
Macmac
Macsyma
Madbrain
Magic
MailBox
Make
Malbolge
Malbolge Unshackled
Mariolang
Markdown
Mathematica
Mathematica Online
MATL
Matlab
MATLAB 1.0
MaxScript
Maze
MEL (Maya Embedded Language)
MemeAssembly
Meq
Mercury
Migol 11
MilkScript
Minecraft
Mineso
Mips
Miranda
Mirc
Mmmm()
ModiScript (Modi script)
Modula 2
Modula 3
Modulous
Mongo
Monkeys (Monkey)
Monte
Moo
MoonScript
MorseCode (Morse Code)
Mouse
Move
Mozart
MSG
MSM (Multi-Set Manipulator)
MSM (Mutating Stack Machine)
Muf
Mumps
Muriel
Mushcode
MXML
Myrddin
MySQL
Myth
</div>
<hr/>
<div align="center" id="N">
<h3>N 22 Languages Programming<h3>
Nadeshiko
Naz
NDBall
Neko
Nemerle
NewtonScript
Nice
Night
Nim
Nit
No Literals, Gotos Only, Final Destination!
Node.js
NoFlo
NOR
Not Python
Novice
Nqubl
Nu
Numberix
NWScript
NXC (Not eXactly C)
NyaScript
</div>
<hr/>
<div align="center" id="O">
<h3>O 25 Languages Programming<h3>
O:XML
Oberon
Oberon 2
Obix
Obj
Object Pascal
Objective C
Objective J
ObjectStar
OCaml
Octave
Odin
Omgrofl
ON THE WAY TO WHO KNOWS WHERE
Ooc
Ook (Ook!)
OOLANG
Opa
OpenLaszlo
Oracle SQL
Orc
Orion
ORK
Ouroboros
OX
</div>
<hr/>
<div align="center" id="P">
<h3>P 74 Languages Programming<h3>
P0pCrn
Packlang
Paintfuck
Parenthetic
Parser
Pascal
PATH
Pauscal
Pawn
PB
PBWin (PowerBASIC Win)
PDA-er
Pebble
PeopleCode
Perfume
Perl
Perl6
Perseus
Pharo
Phix
PHL 1.0
PHP
Pi
PiCat
Pieces
Pig
PikaLang
Pike
Pinecone
Pit
Pixiedust
Pizza
Pizza Delivery
Plain text
Please Porige Hot
PLI (PL/I)
PLSQL (PL/SQL)
PlusOrMinus
Pluvo
Poetic
PokéBattle
Polynomial
Pony
Portugol
PostCSS
Postgre SQL (PostgreSQL / PL/pgSQL)
PostScript
PostScript Page
PosXML
Potaka
Potigol
Powder
PowerShell
Prelude
Printscript
Processing
Profan
ProgFk
Prolog
Promela
ProvideX
PUBERTY
Pug
Pure Data
PureBasic
PureScript
PureStack
Purple
Pxem
Pyret
Pyth
Python
Python [sic]
Python 3
</div>
<hr/>
<div align="center" id="Q">
<h3>Q 13 Languages Programming<h3>
Q
Q# (QSharp)
QBasic
QCL (Quantum Computation Language)
Qdeql
Qore
QU
QuakeC
Quartz Composer (QuartzComposer)
Qugord
Quipu
Quorum
QWERTY
</div>
<hr/>
<div align="center" id="R">
<h3>R 44 Languages Programming<h3>
R
Racket
Radixal (Radixal!!!!)
Raffalang
Rafflalang
Raku
RANDo
RASEL (Random Access Stack Esoteric Language)
RatFor
React
React Native
React360
Readlink
RealBasic
Reason
Rebol
Recurse
Red
Redis
Refal
ReStructuredText (RST, ReST, or reST)
Retro
Reversible 2D (Reversible-2D)
Rexx
Rhotor
Richtea
Ricktea
Ride
Ring
RinGy
RISC V
RiveScript
Rockstar
Roco
ROOP (Real Object-Oriented Paradigm)
Roy
RPG
RPG IV (RPG-IV)
RTFM (F^3)
RTL2 (RTL/2)
Rubic
Ruby
Ruota
Rust
</div>
<hr/>
<div align="center" id="S">
<h3>S 93 Languages Programming<h3>
S Algol (S-Algol)
Sabdt
Sacred
SADOL
Sal
Salt
Sansism
SAS
Sashleyfuck
Sass
Sather
Scala
Scheme
SCHWift
Scilab
Sclipting
SCSS
Sed
Seed
Seed7
Seeker
Self
Semicolon
SendStuff
Ser2
Setanta
Shakespeare
Shell
Shen
SICKBAY
Sidekiq
SIL
Simpl+
Simula
Skip
Skript
Slashes
Slim
Smali
Small s.c.r.i.p.t.
Smalltalk
SmallTalk GNU (Smalltalk-gnu)
SMATINY
Smil (Synchronized Multimedia Integration Language)
SmileBASIC
SMITH# (SMITH Sharp)
SMITHb
SML (Standard ML)
Smurf
SNOBOL
Snowman
SNUSP
Solidity
Sortle
SoupScript
Spaghetti
SpaghettiScript
SparQL
Spin
Spiral
Spleenmap
Splinter
Spoon
SPSS
SQL
Squirrel
Stackint
Stackstack
Stanza
Starlark
STBF
Stlisp
Streem
Strelnokoff
Stuck
StupidBASIC
Stupidc
StupidStackLanguage
STXTRM
Stylus
SubleQ
Subskin
Suicide
Super Stack!
SuperCollider
Surtic
Svelte
SVG
SVM
Swift
Swordfish
SYCPOL (System card programming language)
SystemTap
</div>
<hr/>
<div align="center" id="T">
<h3>T 36 Languages Programming<h3>
Takeover
Taktentus
Tao Presentations
TapeBagel
Tcl
TCSH
Telephone
Terra
TeX
The Amnesiac From Minsk
The Waterfall Model
TheSquare
THP
THue
Thutu
TI Hexadecimal
TiBasic (TI-BASIC)
Tier
Tiny
TK
Toadskin
TOGA computer (Toga Enhanced)
TOML
Trans-dimensional (Trans Dimensional)
Tree
Tri
Trigger
Troll Online
TrollScript
TrumpScript
TSQL (Transact-SQL / T-SQL)
TTCN3
Tunex
Turing
Turth machine (Turth-machine)
TypeScript
</div>
<hr/>
<div align="center" id="U">
<h3>U 13 Languages Programming<h3>
Ubercode
Ubiquity
UClang*
Umajin
Underload
Unicat
Unicomal
Unicon
Unicorn
Uniface
Unlambda
Unreal Script (UnrealScript)
URSL
</div>
<hr/>
<div align="center" id="V">
<h3>V 28 Languages Programming<h3>
V
V--
Vala
Var'aq
Varsig
Velato
Verbose
VerboseFuck
Verilog
Verve
VHDL
Vi
Vim Script (vim)
VimScript
Virgil
Visual Basic
Visual Basic .NET (VB.net)
Visual Basic for Applications
Visual Basic Scripting (VBScript)
VisualFoxPro
Visualg
VJass
VMS
Volatile
Vowels
VRML
VTL
Vue (Vue.js)
</div>
<hr/>
<div align="center" id="W">
<h3>W 15 Languages Programming<h3>
WARP
WebAssembly
Wenyan
Wheat
Whenever
Whirl
Whitespace
Wierd
WikiText
WML
Wolfram Mathematica Language
Word!CPU
WowLang
Wren
WSH
</div>
<hr/>
<div align="center" id="X">
<h3>X 18 Languages Programming<h3>
X
X D (x-D)
X.so
Xbase
Xbase++
XEec
XENBLN
XHTML
Xihcute
XL (eXtensible Language)
XLisp
Xlogo
XML
XPL0
XQuery (XML Query)
XRF
XSLT
XUL
</div>
<hr/>
<div align="center" id="Y">
<h3>Y 5 Languages Programming<h3>
Y
YAML
YASKC
YoLang
YoptaScript
</div>
<hr/>
<div align="center" id="Z">
<h3>Z 15 Languages Programming<h3>
ZBD
Zepto
Zetaplex
Zig
Ziim
Zim
Zimbu
Zinc
Zombie
Zonnon
ZPL
ZScript
ZSH (Z shell)
Zucchini
Zx
</div>

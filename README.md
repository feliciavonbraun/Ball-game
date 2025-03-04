Play demo [here!](https://balla-ur-online.netlify.app/)

Game made as a group-assignment in a Javascript-course

Made with Typescript, p5-js and p5-play

Made by: Me, [Mia](https://github.com/miaherman), [Mikaela](https://github.com/MikaelaAnd), [Oliver](https://github.com/Browbeans),
[Felicia](https://github.com/feliciavonbraun) and [Amanda](https://github.com/AmandaStahlberg)

When starting the project type "npm i" in terminal to install the modules necessarry.

Then type "npm start" to start the project.

Uppgiftsbeskrivning:

## Utveckling
### Installation
Först behöver ni köra kommandot `npm i` för att installera nödvändiga moduler (p5, typescript, etc).

### Starta projektet
Kör kommandot `npm start` för att starta projektet och se det live i din webbläsare!

### Debugger
Det är starkt rekomenderat att ni använder debug-verktyget i VSCode för att hitta och lösa problem. Metoden vi primärt har använt tidigare är att skriva `console.log` men vi kan bli mer effektiva!

Debuggern låter er stanna programmet och stega rad för rad samtidigt som ni kan titta på vad variablerna innehåller. Det är speciellt användbart när ni arbetar med funktioner som anropas 60 gånger per sekund - console overload otherwise... 🤯

#### Starta Debuggern
För att starta debuggern måste du första ladda hem tilläget "Debugger for Chrome" som finns under "Extensions" här i VSCode.
Därefter tycker du `F5` för att starta debuggern, se dock till att du har startat projektet innan (`npm start`)!

Ett nytt fönster kommer att öppnas som behöver användas för att få koden att stanna vid utsatta debugg-punkter.

### Potentiella problem
Versionen av p5.js är 1.1.9 medan senaste version av typescript endast är uppdaterad till 0.9.1. Detta skulle kunna orsaka problem men framför allt kan det vara så att ni hittar något i p5's dokumention som inte finns tillgängligt i detta projektet.

Typings för de globala variablerna relaterat till p5.sound fungerar tyvärr inte - exempel finns för hur ni kan kringå detta."

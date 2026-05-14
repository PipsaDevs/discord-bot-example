# Changelog (Historial de cambios)

## v1.0.0 - Tamo' vivo' migente
¡Hemos terminado de escribir la base principal de la template que queremos ofrecer a la comunidad! También coincide con que es _realmente_ el primer proyecto que publicamos, así que alegría y alboroto.

Mientras que la mayoría de commits han sido obra mía (@CyRstudent), he de decir que en parte también me he inspirado en el código que @inteltank1 escribió en otro proyecto similar.

Esto no es el fin del principio — Es el principio de un comienzo.

### Features (¿Qué hay nuevo?)
En muy resumidas cuentas, en los pocos ratos libres que tenemos de universidad, me he dedicado a escribir:
- La implementación de la clase [`BoundedQueue.ts`](src/classes/BoundedQueue.ts), que es esencialmente la implementación de lo que se conoce en Estructuras de Datos como una [_Cola limitada_](https://www.cs.cornell.edu/courses/cs4410/2010su/queue.pdf); Esta nos ha ayudado a implementar un (sistema de auditoría)[src/classes/Log.ts] que no consuma mucha memoria.
- La implementación de interfaces esenciales como la de [`Event.ts`](src/interfaces/Event.ts), o la de [`SlashCommand.ts`](src/interfaces/SlashCommand.ts) (sneak peak btw).
- Enums que dan estructura a las distintas interfaces.
- Funciones de utilidad, como para [escanear directorios](src/util/scanDir.ts)
- Un [slash command básico](src/slash_commands/ping.ts), pero todavía no funciona (`v1.1.0` incoming ;) )
- Finalmente, la clase extendida de discord.js/Client [`Client.ts`](src/classes/Client.ts), que es basicamente el nudo que ata todos los fundamentos del proyecto

> [!NOTE]
> Aunque ya hay muchas cosas, _todavía_ no está listo para que le hagas una copia y lo uses con tu propio bot.

### Bug fixes 
Ninguno, y esperamos que siga así a medida que avancemos versiones...

### What's next? / ¿Qué va a ser lo siguiente?
Para la `v1.1.0` escribiremos un sistema decente de gestión y respuesta de slash commands.
También un `README.md` porque, ¿qué sentido tiene un proyecto diseñado para que otra gente use sin un manual? :sob:

"ESTO ES MUY POGGERS XDXDXD"
> @inteltank1, profesor de la UMA (no oficial) (sin contrato)

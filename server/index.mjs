import fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = fastify()
server.setNotFoundHandler((_, reply) => {
  return reply.sendFile('index.html')
})

server.register(fastifyStatic, {
  root: path.join(__dirname, '../dist')
})


const questions = [{
  caption: 'Подія натискання на елемент називається click?',
  correctAnswer: true,
  id: 1
},
{
  caption: 'Усередині розмітки не можна додати обробник події?',
  correctAnswer: false,
  id:2
},
{
  caption: 'Припинити спливання події можна за допомогою метода stopImmediatePropagation?',
  correctAnswer: false,
  id:3
},
{
  caption: 'Припинити спливання події можна за допомогою метода stopPropagation?',
  correctAnswer: true,
  id:4
}]

server.get('/questions', (request, reply) => {
  return reply.send(questions)
})


server.listen({port: 5559})
    .then(() => console.log('Server started'))
    .catch((error) => console.log('Error'))
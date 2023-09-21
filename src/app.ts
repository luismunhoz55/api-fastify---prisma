import fastify from "fastify";
import userRoutes from "./modules/user/user.route";

const server = fastify();

server.get('/healthcheck', (req, rep) => {
  return {
    status: "OK",
  }
})

server.register(userRoutes, {prefix: 'api/users'})

async function main() {
  try {
    await server.listen({
      port: 3000
    }).then(() => {
      console.log("Server running in the port 3000")
    })
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
}

main()
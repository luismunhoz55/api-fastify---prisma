import fastify from "fastify";
import userRoutes from "./modules/user/user.route";
import { userSchemas } from "./modules/user/user.schema";

const server = fastify();

server.get('/healthcheck', (req, rep) => {
  return {
    status: "OK",
  }
})

async function main() {

  for(const schema of userSchemas){
    server.addSchema(schema)
  }

  server.register(userRoutes, {prefix: 'api/users'})

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
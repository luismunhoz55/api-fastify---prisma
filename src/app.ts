import fastify from "fastify";

const server = fastify();

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
import { server } from "./server";
import "dotenv/config";

const PORT = 3000;

server.listen(PORT, () => {
  console.log(
    "🚀 Express App has been started\n🍏 Link -> http://localhost:" + PORT,
  );
});

export { server };

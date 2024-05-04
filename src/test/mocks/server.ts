import {setupServer} from "msw/node";

import handlers from "./handlers";

const Server = setupServer(...handlers);

export default Server;

import {http, HttpResponse} from "msw";

import {
  ALL_NETWORKS_RESPONSE,
  GET_ASSETS_TRANSFER_RESPONSE,
  GET_TOKENS_ERC20_RESPONSE
} from "./mockResponses";

const handlers = [
  http.get("/api/networks", () => {
    return HttpResponse.json([...ALL_NETWORKS_RESPONSE], {
      status: 200
    });
  }),
  http.get("/api/transfers", () => {
    return HttpResponse.json([GET_ASSETS_TRANSFER_RESPONSE], {
      status: 200
    });
  }),
  http.get("/api/tokens-erc20", () => {
    return HttpResponse.json([GET_TOKENS_ERC20_RESPONSE], {
      status: 401
    });
  })
];

export default handlers;

import {http, HttpResponse} from "msw";

import {
  ALL_NETWORKS_RESPONSE,
  GET_ALL_TRANSACTIONS,
  GET_ASSETS_TRANSFER_RESPONSE,
  GET_TOKENS_ERC20_RESPONSE
} from "./mockResponses";

const handlers = [
  http.get("/api/v1/networks", () => {
    return HttpResponse.json([...ALL_NETWORKS_RESPONSE], {
      status: 200
    });
  }),
  http.get("/api/v1/transfers", () => {
    return HttpResponse.json([GET_ASSETS_TRANSFER_RESPONSE], {
      status: 200
    });
  }),
  http.get("/api/v1/tokens-erc20", () => {
    return HttpResponse.json([GET_TOKENS_ERC20_RESPONSE], {
      status: 401
    });
  }),
  http.get("/api/v1/transactions", () => {
    return HttpResponse.json([GET_ALL_TRANSACTIONS], {
      status: 200
    });
  })
];

export default handlers;

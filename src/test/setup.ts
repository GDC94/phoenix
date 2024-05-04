import "@testing-library/jest-dom";

import {afterAll, afterEach, beforeAll} from "vitest";

import {Server} from "./mocks";

beforeAll(() => Server.listen({onUnhandledRequest: "error"}));
afterAll(() => Server.close());
afterEach(() => Server.resetHandlers());

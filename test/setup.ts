import {afterEach, vi, beforeEach} from "vitest";
import {cleanup} from "@testing-library/react";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

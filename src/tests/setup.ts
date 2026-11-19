import '@testing-library/jest-dom/vitest'
import { beforeAll, afterEach, afterAll } from "vitest"
import { server } from './mocks/node.ts'

// Configuration globale des tests
beforeAll(() => server.listen({ onUnhandledFrame: "error"})) ;
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
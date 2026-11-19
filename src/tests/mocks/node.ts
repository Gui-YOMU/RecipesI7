import { setupServer } from "msw/node"
import { successHandlers } from "./successHandlers.ts"

export const server = setupServer(...successHandlers)
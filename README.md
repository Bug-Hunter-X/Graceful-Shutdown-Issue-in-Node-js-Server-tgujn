# Node.js Server Graceful Shutdown Issue

This repository demonstrates a common issue in Node.js servers: the failure to immediately shut down when receiving a Ctrl+C signal due to long-running or asynchronous operations.  The `server.js` file shows the problematic code, while `server-solution.js` provides a solution.

## Problem

The provided server simulates a delay before responding, mimicking a real-world scenario with database interactions or other time-consuming tasks.  When you send a Ctrl+C signal, the server doesn't shut down immediately; it waits for the asynchronous operation to complete.

## Solution

The solution involves using the `server.close()` method within the `process.on('SIGINT', ...)` event handler to ensure that the server gracefully shuts down.  The `server.close()` method waits for all pending operations to finish before completely closing the server.  This solution guarantees a clean server shutdown without abruptly terminating active connections or tasks, which could lead to data corruption or inconsistency.
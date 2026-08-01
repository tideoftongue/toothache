# toothache

vercel + supabase, + hono + kysely, + better auth app that takes in client queries processed by serverless vercel functions--node.js direct control api and then better auth inspection--and sends to supabase database with RLS policies that keeps track of user data and runs asynchronous periodic updates

the niche is hono + kysely, kysely the ORM postgres adapter to the database, and hono the node.js adapter to api stuff with better auth

website traffic is expected to be little, but the project architecture should regardless be robust and expandable, working to make client interactions for real time nation-state economies, diplomacy, wars, and admin control over all pertinent operations steadfast

currently under construction, pending significant design changes for the adaptation of better auth as a store for auth data (which thankfully talks to it in native PostgreSQL) and weaving it into the api structure to EVENTUALLY work in conjunction with vercel serverless functions
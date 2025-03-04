# TypeScript


Migration -> Types -> Mappers -> Repositories -> Services -> Controllers -> Routes

# Step 1:
Remote: origin

Branch: main

git pull

# Step 2:
npm start
# Step 3:
npm run migrate:latest


# Create migration:
npm run migrate:make table_name

# Pull the latest migration:
npm run migrate:latest

# Undo migration:
npm run migrate:rollback --> if entered once, goes back one migration, and if twice, it cleares out the table

# Optional:
PostgresSQL

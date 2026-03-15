.PHONY: test run build

test:
	npx vitest run

run:
	npx concurrently "npx vite" "npx tsx watch server/index.ts"

build:
	npx tsc -b && npx vite build

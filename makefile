docker-local:
	docker-compose -f docker-compose.local.yml up -d

docker-local-build:
	docker-compose -f docker-compose.local.yml up -d --build

docker-local-down:
	docker-compose -f docker-compose.local.yml down -v

migration-create:
	yarn typeorm migration:create src/frameworks/migrations/$(name)

migration-run:
	docker exec junt-api yarn migration:run
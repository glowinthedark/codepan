.DEFAULT_GOAL := build    ##  Set the default goal to build


build:    ##  Run yarn build by default
	yarn build


start:    ##  Start the development server
	yarn start


install:    ##  Install dependencies
	yarn install


clean:    ##  Clean the build directory
	rm -rf dist


test:    ##  Run tests using Jest
	yarn test


lint:    ##  Run linting and formatting checks
	yarn lint

format:
	yarn format


build-prod:    ##  Create a production build with profiling enabled
	yarn build  # --profile


update:    ##  Update all dependencies to their latest versions
	yarn upgrade --latest


fix:    ##  Fix any fixable linting errors
	yarn lint --fix


serve:    ##  Serve the production build locally for testing

	yarn dev
	# yarn global add serve
	# serve -s build


setup: install    ##  Ensure all necessary setup is done (install dependencies, etc.)

arh:
	rsync -avh dist/ arh:/var/www/html/codepan && rsync -avh src/boilerplates arh:/var/www/html/codepan/

deploy: clean build arh    ##  Combined task for building and serving the production build

help: ## show available targets
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} { \
		if (/^[a-zA-Z_-]+:.*?##.*$$/) {printf "    \033[1;37m%-20s\033[1;32m%s\033[0m\n", $$1, $$2} \
		else if (/^## .*$$/) {printf "  \033[1;36m%s\033[0m\n", substr($$1,4)} \
		}' $(MAKEFILE_LIST)

open:
	open ./index.html

build-watcher:
	npx babel --watch src --out-dir . --presets react-app/prod 
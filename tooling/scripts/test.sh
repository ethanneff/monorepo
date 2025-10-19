
set -e

if [ "$CI" = "true" ]; then
  TZ=America/Los_Angeles jest --ci --cache --bail --detectOpenHandles --maxWorkers=50% --silent --coverage
else
  TZ=America/Los_Angeles jest --cache --bail --detectOpenHandles --maxWorkers=50% --silent
fi

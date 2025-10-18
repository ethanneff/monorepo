#!/bin/sh

# Run TypeScript compilation and ESLint
# In CI mode, we only check without caching
# In local mode, we use caching and fix issues

set -e

# Suppress experimental warnings (like JSON modules) https://github.com/nodejs/node/issues/51347#issuecomment-1893074523
export NODE_OPTIONS="${NODE_OPTIONS:-} --no-warnings=ExperimentalWarning:JSON modules"
mkdir -p .cache

if [ "$CI" = "true" ]; then
  tsc --tsBuildInfoFile .cache/tsconfig.tsbuildinfo && \
  eslint src --max-warnings=0 --cache --cache-location '.cache/eslint'
else
  tsc --tsBuildInfoFile .cache/tsconfig.tsbuildinfo && \
  eslint src --max-warnings=0 --cache --cache-location '.cache/eslint' --fix
fi 

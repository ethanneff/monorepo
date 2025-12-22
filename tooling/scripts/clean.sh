#!/bin/sh

# Check for --all flag in any argument
CLEAN_ALL=false
for arg in "$@"; do
  if [ "$arg" = "--all" ]; then
    CLEAN_ALL=true
    break
  fi
done

# Run project-specific clean scripts first (while node_modules still exists)
pnpx turbo run clean

# Then remove common build artifacts and dependencies
find . -type d \( \
    -name '.cache' -o \
    -name '.next' -o \
    -name '.expo' -o \
    -name '.turbo' -o \
    -name 'dist' -o \
    -name 'build' \
\) -prune -exec rm -rf {} +

if [ "$CLEAN_ALL" = "true" ]; then
  # Then remove node_modules and Pods if --all flag is passed
  find . -type d \( \
      -name 'Pods' -o \
      -name 'node_modules' \
  \) -prune -exec rm -rf {} +
fi

#!/bin/sh

# Run project-specific clean scripts first (while node_modules still exists)
pnpx turbo clean --parallel

# Then remove common build artifacts and dependencies
find . -type d \( \
    -name '.cache' -o \
    -name '.next' -o \
    -name '.expo' -o \
    -name '.turbo' -o \
    -name 'dist' -o \
    -name 'build' -o \
    -name 'Pods' -o \
    -name 'node_modules' \
\) -prune -exec rm -rf {} +

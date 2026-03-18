# Dockerfile

# Get the node 20 alpine image
FROM node:20-bullseye AS build

# Install git
RUN apt update && apt install -y git

# Set the path for the local bin
ENV PATH="/root/.local/bin:$PATH"

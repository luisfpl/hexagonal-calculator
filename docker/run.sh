#!/bin/bash
docker build -t calculator-app .
docker run -p 3000:3000 calculator-app

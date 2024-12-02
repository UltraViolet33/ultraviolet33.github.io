---
title: "Automate testing with Github Actions"
summary: "A quick tutorial on how to create a automate your tests with Github Actions"
date: "Dec 02 2024"
draft: false
tags:
- Tutorial
- Python
- Github
---

I assume you have a Python project, but you can adapt it to any languages / frameworks.

Create the `.github/workflows` folder and the yml file.

```bash
mkdir -p .github/workflows && touch .github/workflows/testing.yml
```

```yml
name: test
on:
  pull_request:
    branches:
      - main
      # Add any branch

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Python 3.x
        uses: actions/setup-python@v4
        with:
          python-version: "3.10"
          architecture: "x64"
      - name: Display Python version
        run: python -c "import sys; print(sys.version)"

      - name: Install dependencies
      # Install necessary dependencies to run the tests
        run: |
          python -m pip install --upgrade pip
          pip install poetry
          poetry install

      - name: Run Tests
      # Add command to run test
        run: |
          make test


```

Each time a PR is made to the main branch, the tests will run. 
I am using a Python project, but you can easily find YAML template files for any language or framework.
You can then add a branch rule on GitHub to prevent merging a PR if the tests fail.
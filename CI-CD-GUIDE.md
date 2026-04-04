# GitHub Actions CI/CD Pipeline Documentation

## Overview

This project uses GitHub Actions to automatically build, test, and validate code quality on every push and pull request.

## Workflow: `build-test.yml`

Located in `.github/workflows/build-test.yml`, this workflow runs on:
- **Push events** to `master` or `main` branch
- **Pull request events** targeting `master` or `main` branch

### Steps

1. **Checkout Code**
   - Downloads the repository code

2. **Setup Node.js** (v18.x)
   - Installs Node.js runtime
   - Caches npm dependencies for faster builds

3. **Install Dependencies**
   - Runs `npm ci` for reproducible installs
   - Uses cached dependencies when available

4. **Build Tailwind CSS**
   - Runs `npm run build:css`
   - Compiles Tailwind CSS to `styles.css`
   - Fails if build encounters errors

5. **Run Tests**
   - Runs `npm test -- --coverage`
   - Executes all Jest test suites
   - Generates coverage reports
   - Enforces 75-80% coverage thresholds (see `jest.config.js`)

6. **Upload Coverage Reports** (Optional)
   - Sends coverage data to Codecov
   - Non-blocking if Codecov is unavailable

7. **HTML Validation** (Optional)
   - Validates HTML syntax
   - Only runs if html-validate is installed
   - Non-blocking if validator is unavailable

## Manual Local Testing (Before Push)

Before pushing code, run these commands locally:

```bash
# Install dependencies
npm install

# Build CSS
npm run build:css

# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Watch mode for development
npm run test:watch
npm run watch:css
```

## Test Coverage Requirements

The CI pipeline enforces these coverage thresholds:
- **Branches**: 75%
- **Functions**: 75%
- **Lines**: 80%
- **Statements**: 80%

If coverage falls below these thresholds, the CI pipeline will fail and the PR cannot be merged.

### View Coverage Locally

```bash
npm test -- --coverage
# Reports generated in ./coverage/
```

## Troubleshooting CI Failures

### Tests Failing
1. Run `npm test` locally to identify failures
2. Review the jest error output
3. Fix code issues and commit
4. Push again to trigger CI

### Build Failing
1. Run `npm run build:css` locally
2. Check for Tailwind CSS syntax errors
3. Run `npm test` to ensure all tests pass
4. Commit fixes and push

### Coverage Below Threshold
1. Run `npm test -- --coverage` to see which files are under-covered
2. Add unit tests in `__tests__/` directory
3. Aim for 80%+ coverage on new code
4. Push when coverage meets thresholds

## GitHub Actions Status Badge

To add a status badge to your README:

```markdown
[![Build & Test](https://github.com/bednahkitonyi/bednahkitonyi.github.io/actions/workflows/build-test.yml/badge.svg)](https://github.com/bednahkitonyi/bednahkitonyi.github.io/actions/workflows/build-test.yml)
```

## Viewing Workflow Results

1. Go to your repository on GitHub
2. Click **Actions** tab
3. Select the **Build & Test** workflow
4. View logs for each run

## Future Enhancements

### Deploy to GitHub Pages

Uncomment the `deploy` job to automatically deploy to GitHub Pages on successful pushes to master:

```yaml
deploy:
  needs: build-test
  runs-on: ubuntu-latest
  if: github.ref == 'refs/heads/master' && github.event_name == 'push'
```

### Add Linting

Add ESLint, Stylelint, or Prettier for code quality:

```bash
npm install --save-dev eslint stylelint prettier
npm run lint  # Add to CI workflow
```

### Performance Testing

Add Lighthouse CI for performance monitoring:

```yaml
- name: Lighthouse CI
  uses: treosh/lighthouse-ci-action@v10
```

## Environment Secrets

To use secrets in the workflow (like API keys for deployments):

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add secret name and value
4. Reference in workflow: `${{ secrets.SECRET_NAME }}`

## Disabling Workflows

To temporarily disable the workflow:

1. Go to **.github/workflows/build-test.yml**
2. Add `# ` before the `on:` trigger
3. Commit and push

Re-enable by removing the `# ` comment.

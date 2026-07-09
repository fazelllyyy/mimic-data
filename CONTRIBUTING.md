# Contributing to @fazelstudio/mimic-data

First off, thank you for considering contributing! We welcome all
contributions — bug reports, feature requests, documentation improvements,
new locales, and code changes.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Adding a New Locale](#adding-a-new-locale)
- [Development Workflow](#development-workflow)
- [Testing](#testing)
- [Linting & Formatting](#linting--formatting)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)

## Code of Conduct

By participating, you agree to uphold our [Code of Conduct](CODE_OF_CONDUCT.md).
Please report unacceptable behavior to [zulfazlilsm@gmail.com](mailto:zulfazlilsm@gmail.com).

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/mimic-data.git`
3. Install dependencies: `npm install`
4. Create a feature branch: `git checkout -b feat/your-feature`

## Development Workflow

```bash
# Build the project
npm run build

# Watch mode
npm run dev

# Type-check
npm run type-check

# Run linter
npm run lint

# Run tests
npm test
```

## Adding a New Locale

1. Create a locale file at `src/locales/xx_XX.ts`
2. Implement the `LocaleDefinition` interface
3. Import and register in `src/index.ts`

```typescript
// src/locales/es_ES.ts
import type { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const es_ES: LocaleDefinition = {
  firstNamesMale: ['Carlos', 'José', 'Antonio'],
  firstNamesFemale: ['María', 'Carmen', 'Ana'],
  lastNames: ['García', 'Fernández', 'López'],
  streets: ['Calle Mayor', 'Avenida Castellana'],
  cities: ['Madrid', 'Barcelona', 'Valencia'],
  states: ['Madrid', 'Cataluña', 'Andalucía'],
  zipCodePattern: '#####',
  jobTitles: ['Ingeniero de Software'],
  departments: ['Ingeniería', 'Marketing'],
  metricSystem: 'metric' as const,
  formatFullName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`;
  },
  formatAddress(street: string, city: string, state: string, zipCode: string) {
    return `${street} ${Random.int(1, 200)}, ${zipCode} ${city}`;
  },
  generateZipCode() {
    return String(Random.int(10000, 99999));
  },
};
```

**Guidelines for locale data:**
- Use native-language names and words (not transliterated)
- Follow real-world address, phone, and zip code formats
- Provide at least 20 first names per gender, 20 last names, 10+ streets, 10+ cities
- Verify metric/imperial accuracy for the region
- Include proper test coverage for the new locale

## Testing

```bash
# Run all tests
npm test

# Run with UI
npm run test:ui

# Run with coverage
npm run test -- --coverage
```

Ensure your changes include tests. We use [Vitest](https://vitest.dev/).

## Linting & Formatting

```bash
# Check for lint issues
npm run lint

# Auto-fix lint issues
npm run lint -- --fix

# Format code
npm run format
```

We use ESLint and Prettier to maintain consistent code style. Please ensure your code passes both before submitting.

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <short description>

[optional body]
```

Types:
- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation changes
- `style:` — Formatting, lint fixes (no logic change)
- `refactor:` — Code restructuring
- `test:` — Adding or updating tests
- `chore:` — Build tasks, config, dependencies
- `locale:` — New locale or locale data updates

Examples:
```
feat: add es_AR locale with Argentine Spanish data
fix: handle edge case when age range min > max
docs: update API table in README
```

## Pull Request Process

1. Ensure your branch is up to date with `main`
2. Run the full test suite: `npm test`
3. Run linting and type-check: `npm run lint && npm run type-check`
4. Update documentation (README, types) if your change affects the public API
5. Create a pull request with a clear title and description
6. Ensure CI passes on your PR

### PR Checklist

- [ ] Code follows existing style
- [ ] Tests added / updated
- [ ] Documentation updated (if applicable)
- [ ] All checks pass (lint, type-check, test, build)

## Reporting Bugs

Open an issue on [GitHub](https://github.com/fazelllyyy/mimic-data/issues) using the bug report template. Include:

- Library version
- Node.js version
- Locale being used
- Minimal code to reproduce
- Expected vs actual behavior

## Questions?

Open a [Discussion](https://github.com/fazelllyyy/mimic-data/discussions) or email [zulfazlilsm@gmail.com](mailto:zulfazlilsm@gmail.com).

---

Thank you for helping make mimic-data better!
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.4.0] - 2026-07-09

### Added

- 212 locales across all continents with native-language data
- Multiple alias support per locale (e.g. `en_US` / `en` / `us` / `usa`)
- Full TypeScript types and generics
- Reproducible seeded random via `Random.seed()`
- Bulk generation: `persons`, `addresses`, `generateMockEntities`, `uniquePersons`
- Zero runtime dependencies

### Modules

- `identity` — names, age, date of birth, complete person data
- `location` — streets, cities, states, zip codes, formatted addresses
- `physical` — height, weight, metric/imperial support
- `work` — job titles, departments
- `contact` — email, phone, website
- `company` — names, industries, catchphrases

## [1.3.0] - Unreleased

Second major locale expansion with extended country coverage.

## [1.0.0] - 2026-06-01

- Initial stable release
- Core `Mimic` class and `createMimic` factory
- First batch of locales
- CJS + ESM dual module support
- TypeScript declarations via tsup
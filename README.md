# @fazelstudio/mimic-data

[![npm version](https://img.shields.io/npm/v/@fazelstudio/mimic-data.svg)](https://www.npmjs.com/package/@fazelstudio/mimic-data) [![CI](https://github.com/fazelllyyy/mimic-data/actions/workflows/ci.yml/badge.svg)](https://github.com/fazelllyyy/mimic-data/actions/workflows/ci.yml) [![License](https://img.shields.io/npm/l/@fazelstudio/mimic-data.svg)](https://opensource.org/licenses/MIT)

A lightweight TypeScript library with zero runtime dependencies for generating realistic, locale-aware dummy data. Inspired by Faker.js, but smaller and focused on accurate localization.

## Features

- 🌍 **212 Locales** covering 150+ countries and territories across 6 continents
- 🪶 **Zero Dependencies** — no runtime dependencies, ~650KB bundled with all locales
- 📦 **Tree-shakeable** — import only what you need, unused code is eliminated
- 🔧 **TypeScript Native** — strict types, generics, full IDE autocompletion
- 🎯 **Locale-First** — native-language data, proper address formats, region-specific phone/zip patterns
- 🔁 **Reproducible** — seeded random generator for deterministic test data

## Installation

```bash
npm install @fazelstudio/mimic-data
```

```bash
yarn add @fazelstudio/mimic-data
pnpm add @fazelstudio/mimic-data
bun add @fazelstudio/mimic-data
```

## Quick Start

```typescript
import { createMimic } from '@fazelstudio/mimic-data';

const mimic = createMimic('id_ID');

console.log(mimic.identity.fullName());
// "Budi Santoso"

console.log(mimic.location.fullAddress());
// "Jl. Merdeka No. 123, RT 5/RW 3, Jakarta, DKI Jakarta 12345"
```

## API Reference

### `createMimic(locale?: string): Mimic`

Creates a Mimic instance for the specified locale. Defaults to `en_US` when omitted.

```typescript
const mimic = createMimic('ja_JP');
const mimicDefault = createMimic(); // uses en_US
```

### Module Exports

| Export                | Description                        |
|-----------------------|------------------------------------|
| `createMimic`         | Factory function to create Mimic   |
| `Mimic`               | Main data generation class         |
| `locales`             | Object with all locale definitions |
| `Random`              | Random number utility class        |
| `localeRegistry`      | Locale registry for advanced usage |
| `getAvailableLocales` | Returns canonical locale codes     |
| `getAllLocaleCodes`   | Returns locale codes + aliases     |

### Mimic Methods

#### `identity`

| Method               | Returns      | Description |
|----------------------|-------------|-------------|
| `firstName(gender?)`    | `string`    | Random first name (male / female / random) |
| `lastName()`          | `string`    | Random last name |
| `fullName(gender?)`   | `string`    | Full name in locale format |
| `gender()`           | `Gender`    | Random gender |
| `age(range?)`        | `number`    | Age (default 18–65) |
| `dateOfBirth(range?)` | `Date`      | Date of birth |
| `person(gender?, range?)` | `PersonData` | Complete person object |
| `persons(count, gender?, range?)` | `PersonData[]` | Multiple persons |
| `uniquePersons(count, gender?, range?)` | `PersonData[]` | Unique persons (by full name) |

#### `location`

| Method | Returns | Description |
|--------|---------|-------------|
| `street()` | `string` | Random street name |
| `city()` | `string` | Random city |
| `state()` | `string` | Random state / province |
| `zipCode()` | `string` | Random zip / postal code |
| `fullAddress()` | `string` | Formatted full address |
| `address()` | `AddressData` | Complete address object |
| `addresses(count)` | `AddressData[]` | Multiple addresses |
| `uniqueAddresses(count)` | `AddressData[]` | Unique addresses |

#### `physical`

| Method | Returns | Description |
|--------|---------|-------------|
| `height()` | `{ value, unit }` | Height (metric or imperial) |
| `weight()` | `{ value, unit }` | Weight (metric or imperial) |
| `data()` | `PhysicalData` | Complete physical data |
| `datas(count)` | `PhysicalData[]` | Multiple physical data |

#### `work`

| Method | Returns | Description |
|--------|---------|-------------|
| `jobTitle()` | `string` | Random job title |
| `department()` | `string` | Random department |
| `data()` | `WorkData` | Complete work data |
| `datas(count)` | `WorkData[]` | Multiple work data |
| `uniqueJobTitles(count)` | `string[]` | Unique job titles |
| `uniqueDepartments(count)` | `string[]` | Unique departments |

#### `contact`

| Method | Returns | Description |
|--------|---------|-------------|
| `email(firstName?, lastName?)` | `string` | Email address |
| `phone()` | `string` | Phone number (region-appropriate) |
| `website(name?)` | `string` | Website URL from company name |
| `data(firstName?, lastName?)` | `ContactData` | Complete contact data |
| `datas(count)` | `ContactData[]` | Multiple contact data |

#### `company`

| Method | Returns | Description |
|--------|---------|-------------|
| `name()` | `string` | Company name |
| `industry()` | `string` | Industry |
| `catchPhrase()` | `string` | Company tagline |
| `data()` | `CompanyData` | Complete company data |
| `datas(count)` | `CompanyData[]` | Multiple company data |

#### `Mimic` instance-level

| Method | Returns | Description |
|--------|---------|-------------|
| `setLocale(locale)` | `void` | Switch locale at runtime |
| `generateMockEntities(count, options?)` | `MockEntity[]` | Generate complete entities |
| `generateUniqueMockEntities(count, options?)` | `MockEntity[]` | Unique complete entities |

## Usage Examples

### Seeded Random (Deterministic Data)

```typescript
import { createMimic, Random } from '@fazelstudio/mimic-data';

Random.seed(12345);

const mimic = createMimic('en_US');
const person1 = mimic.identity.person('male', { min: 25, max: 35 });

Random.seed(12345);
const person2 = mimic.identity.person('male', { min: 25, max: 35 });

console.log(person1.fullName === person2.fullName); // true

Random.unseed();
```

### Bulk Generation

```typescript
import { createMimic } from '@fazelstudio/mimic-data';

const mimic = createMimic('id_ID');

const persons = mimic.identity.persons(100);
const addresses = mimic.location.uniqueAddresses(50);

const employees = mimic.generateMockEntities(200, {
  gender: 'female',
  ageRange: { min: 20, max: 40 },
});
```

### Complete Employee Record

```typescript
const mimic = createMimic('id_ID');

const employee = {
  ...mimic.identity.person('male', { min: 25, max: 40 }),
  ...mimic.location.address(),
  ...mimic.physical.data(),
  ...mimic.work.data(),
  ...mimic.contact.data(),
  ...mimic.company.data(),
};

console.log(employee);
// {
//   firstName: "Budi",
//   lastName: "Santoso",
//   fullName: "Budi Santoso",
//   gender: "male",
//   age: 32,
//   dateOfBirth: 1992-05-15T00:00:00.000Z,
//   street: "Jl. Merdeka",
//   city: "Jakarta",
//   state: "DKI Jakarta",
//   zipCode: "12345",
//   fullAddress: "Jl. Merdeka No. 123, RT 5/RW 3, Jakarta, DKI Jakarta 12345",
//   height: 175,
//   weight: 70,
//   heightUnit: "cm",
//   weightUnit: "kg",
//   jobTitle: "Software Engineer",
//   department: "Engineering",
//   email: "budi.santoso123@gmail.com",
//   phone: "+62 812-3456-7890",
//   website: "www.budi-santoso.com",
//   name: "Techflow Solutions",
//   industry: "Technology",
//   catchPhrase: "Empower innovative solutions"
// }
```

## TypeScript Types

```typescript
import type {
  Gender,
  MetricSystem,
  PersonData,
  AddressData,
  PhysicalData,
  WorkData,
  ContactData,
  CompanyData,
  AgeRange,
  LocaleDefinition,
} from '@fazelstudio/mimic-data';

const person: PersonData = mimic.identity.person('female');
```

### Type Definitions

```typescript
type Gender = 'male' | 'female';
type MetricSystem = 'metric' | 'imperial';

interface PersonData {
  firstName: string;
  lastName: string;
  fullName: string;
  gender: Gender;
  age: number;
  dateOfBirth: Date;
}

interface AddressData {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  fullAddress: string;
}

interface PhysicalData {
  height: number;
  weight: number;
  heightUnit: 'cm' | 'ft';
  weightUnit: 'kg' | 'lb';
}

interface WorkData {
  jobTitle: string;
  department: string;
}

interface ContactData {
  email: string;
  phone: string;
  website: string;
}

interface CompanyData {
  name: string;
  industry: string;
  catchPhrase: string;
}

interface AgeRange {
  min?: number;
  max?: number;
}
```

## Random Utilities

```typescript
import { Random } from '@fazelstudio/mimic-data';

Random.seed(12345);

Random.int(1, 100);       // random integer
Random.float(1.5, 10.5, 2); // random float with decimal places
Random.boolean();         // true / false
Random.pick(['a', 'b']);  // random element
Random.shuffle([1, 2, 3]); // shuffled array copy
Random.multiple(fn, 10);  // generate multiple values
Random.unique(fn, 20);    // generate unique values
```

## Available Locales

### Americas (37)
`en_US`, `es_US`, `en_CA`, `fr_CA`, `es_MX`, `pt_BR`, `es_AR`, `es_CL`, `es_CO`, `es_PE`, `es_VE`, `es_EC`, `es_BO`, `es_PY`, `es_GT`, `es_CR`, `es_DO`, `es_CU`, `es_SV`, `es_HN`, `es_NI`, `es_PA`, `es_UY`, `en_JM`, `en_TT`, `en_GY`, `en_BZ`, `en_BS`, `en_BB`, `en_AG`, `en_DM`, `en_GD`, `en_KN`, `en_LC`, `en_VC`, `fr_HT`, `nl_SR`

### Europe (56)
`en_GB`, `en_IE`, `ga_IE`, `cy_GB`, `de_DE`, `de_AT`, `de_CH`, `fr_CH`, `it_CH`, `fr_FR`, `fr_BE`, `nl_BE`, `it_IT`, `es_ES`, `ca_ES`, `pt_PT`, `nl_NL`, `de_LU`, `fr_LU`, `de_LI`, `ru_RU`, `pl_PL`, `tr_TR`, `sv_SE`, `nb_NO`, `da_DK`, `fi_FI`, `el_GR`, `cs_CZ`, `hu_HU`, `ro_RO`, `uk_UA`, `sk_SK`, `hr_HR`, `rs_RS`, `lt_LT`, `lv_LV`, `et_EE`, `bg_BG`, `is_IS`, `sq_AL`, `bs_BA`, `mk_MK`, `sl_SI`, `mt_MT`, `be_BY`, `sr_ME`, `ro_MD`, `el_CY`, `tr_CY`, `fo_FO`, `ca_AD`, `fr_MC`, `it_SM`, `it_VA`, `en_GI`

### Asia-Pacific (44)
`zh_CN`, `zh_TW`, `zh_HK`, `ja_JP`, `ko_KR`, `id_ID`, `ms_MY`, `th_TH`, `vi_VN`, `km_KH`, `lo_LA`, `my_MM`, `mn_MN`, `en_SG`, `en_PH`, `en_AU`, `en_NZ`, `en_IN`, `hi_IN`, `bn_IN`, `si_LK`, `bn_BD`, `ne_NP`, `dz_BT`, `dv_MV`, `ur_PK`, `en_PK`, `ps_AF`, `kk_KZ`, `ky_KG`, `tg_TJ`, `tk_TM`, `uz_UZ`, `ka_GE`, `hy_AM`, `az_AZ`, `ms_BN`, `pt_TL`, `zh_MO`, `pt_MO`

### Middle East & Africa (75)
`ar_SA`, `ar_AE`, `ar_EG`, `ar_MA`, `ar_DZ`, `ar_TN`, `ar_LY`, `ar_SD`, `ar_IQ`, `ar_KW`, `ar_QA`, `ar_BH`, `ar_OM`, `ar_YE`, `ar_JO`, `ar_LB`, `ar_SY`, `he_IL`, `fa_IR`, `ar_PS`, `ar_MR`, `ar_KM`, `ar_DJ`, `en_ZA`, `af_ZA`, `en_NA`, `en_BW`, `en_ZW`, `en_ZM`, `en_LS`, `en_SZ`, `en_NG`, `en_GH`, `en_SL`, `en_LR`, `en_GM`, `en_UG`, `en_KE`, `sw_KE`, `sw_TZ`, `rw_RW`, `so_SO`, `am_ET`, `mg_MG`, `fr_CM`, `fr_CI`, `fr_SN`, `fr_ML`, `fr_NE`, `fr_BF`, `fr_BJ`, `fr_TG`, `fr_GA`, `pt_AO`, `pt_MZ`, `pt_CV`, `pt_GW`, `pt_ST`, `en_MU`, `fr_SC`, `en_SC`, `fr_GN`, `es_GQ`, `en_SS`, `ti_ER`

> Every locale has multiple aliases (e.g. `en_US` / `en` / `us` / `usa`). See [the source](src/locales/) for the full list.

## Development

```bash
# Install
npm install

# Build
npm run build

# Watch mode
npm run dev

# Run tests
npm test

# Type check
npm run type-check

# Lint & format
npm run lint
npm run format
```

## Migrating from Faker.js

| Faker.js                   | mimic-data                   |
|----------------------------|------------------------------|
| `faker.person.fullName()`  | `mimic.identity.fullName()`  |
| `faker.location.street()`  | `mimic.location.street()`    |
| `faker.phone.number()`     | `mimic.contact.phone()`      |
| `faker.company.name()`     | `mimic.company.name()`       |

mimic-data focuses on accurate localization and zero dependencies — if you need those, it's a natural fit.

## License

MIT © [Fazel](https://github.com/fazelllyyy)

---

**mimic-data** — Realistic dummy data, localized. Everywhere.
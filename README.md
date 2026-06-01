# mimic-data

[![npm version](https://img.shields.io/npm/v/mimic-data.svg)](https://www.npmjs.com/package/mimic-data)
[![npm downloads](https://img.shields.io/npm/dt/mimic-data.svg)](https://www.npmjs.com/package/mimic-data)
[![License](https://img.shields.io/npm/l/mimic-data.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-3178c6.svg)](https://www.typescriptlang.org/)

A lightweight TypeScript library with zero runtime dependencies for generating realistic, locale-aware dummy data. Inspired by Faker.js, but smaller and focused on accurate localization.

## Features

- 🌍 **212 Locales** covering 150+ countries and territories across 6 continents
- 🪶 **Lightweight** — zero runtime dependencies (~650KB bundled with all locales)
- 📦 **Tree-shakeable** — import only what you need
- 🔧 **TypeScript Native** — full type safety with generics
- 🎯 **Locale-First** — each locale has native-language data, proper address formats, and region-specific phone/zip patterns

## Installation

```bash
npm install mimic-data
# or
yarn add mimic-data
# or
pnpm add mimic-data
```

## Quick Start

```typescript
import { createMimic } from 'mimic-data';

const mimic = createMimic('id_ID');

console.log(mimic.identity.fullName());
// "Budi Santoso"

console.log(mimic.location.fullAddress());
// "Jl. Merdeka No. 123, RT 5/RW 3, Jakarta, DKI Jakarta 12345"
```

## API Overview

### `createMimic(locale?: string): Mimic`

Creates a Mimic instance for the specified locale. Defaults to `en_US` when omitted.

```typescript
const mimic = createMimic('ja_JP');
const mimicDefault = createMimic(); // uses en_US
```

### Module Exports

| Export                  | Description                            |
| ----------------------- | -------------------------------------- |
| `createMimic`         | Factory function to create Mimic      |
| `Mimic`               | Main data generation class            |
| `locales`             | Object with all locale definitions    |
| `Random`              | Random number utility class           |
| `localeRegistry`      | Locale registry for advanced usage    |
| `getAvailableLocales()` | Returns canonical locale codes      |
| `getAllLocaleCodes()` | Returns locale codes + aliases        |

### Mimic Methods

| Module     | Method                                        | Description                            |
| ---------- | --------------------------------------------- | -------------------------------------- |
| `identity` | `firstName(gender?)`                        | Random first name (male/female/random) |
|            | `lastName()`                                | Random last name                      |
|            | `fullName(gender?)`                         | Full name in locale format            |
|            | `gender()`                                  | Random gender                         |
|            | `age(range?)`                               | Age (default 18-65)                   |
|            | `dateOfBirth(range?)`                       | Date of birth as Date object          |
|            | `person(gender?, range?)`                   | Complete person data                  |
|            | `persons(count, gender?, range?)`           | Multiple persons                      |
|            | `uniquePersons(count, gender?, range?)`     | Unique persons (by full name)         |
| `location` | `street()`                                  | Random street name                    |
|            | `city()`                                    | Random city                           |
|            | `state()`                                   | Random state/province                 |
|            | `zipCode()`                                 | Random zip/postal code                |
|            | `fullAddress()`                             | Formatted full address                |
|            | `address()`                                 | Complete address data                 |
|            | `addresses(count)`                          | Multiple addresses                    |
|            | `uniqueAddresses(count)`                    | Unique addresses                      |
| `physical` | `height()`                                  | Height + weight (metric or imperial)  |
|            | `weight()`                                  | Weight + height (metric or imperial)  |
|            | `data()`                                    | Complete physical data                |
|            | `datas(count)`                              | Multiple physical data                |
| `work`     | `jobTitle()`                                | Random job title                      |
|            | `department()`                              | Random department                     |
|            | `data()`                                    | Complete work data                    |
|            | `datas(count)`                              | Multiple work data                    |
|            | `uniqueJobTitles(count)`                    | Unique job titles                     |
|            | `uniqueDepartments(count)`                  | Unique departments                    |
| `contact`  | `email(firstName?, lastName?)`              | Email address                         |
|            | `phone()`                                   | Phone number (region-appropriate)     |
|            | `website(name?)`                            | Website URL from company name         |
|            | `data(firstName?, lastName?)`               | Complete contact data                 |
|            | `datas(count)`                              | Multiple contact data                 |
| `company`  | `name()`                                    | Company name                          |
|            | `industry()`                                | Industry                             |
|            | `catchPhrase()`                             | Company tagline                       |
|            | `data()`                                    | Complete company data                 |
|            | `datas(count)`                              | Multiple company data                 |
| `Mimic`    | `setLocale(locale)`                         | Switch locale                         |
|            | `generateMockEntities(count, options?)`     | Generate complete entities            |
|            | `generateUniqueMockEntities(count, options?)` | Unique complete entities           |

## Available Locales (212 Total)

### Americas 🌎 (37) — unchanged

- `en_US` / `en` / `us` / `usa` — 🇺🇸 USA (imperial)
- `es_US` / `es-us` — 🇺🇸 USA (Spanish)
- `en_CA` / `en-ca` / `canada` — 🇨🇦 Canada (metric)
- `fr_CA` / `fr-ca` — 🇨🇦 Canada (French)
- `es_MX` / `mx` / `mexico` — 🇲🇽 Mexico
- `pt_BR` / `pt` / `br` / `brazil` — 🇧🇷 Brazil
- `es_AR` / `ar` / `argentina` — 🇦🇷 Argentina
- `es_CL` / `cl` / `chile` — 🇨🇱 Chile
- `es_CO` / `co` / `colombia` — 🇨🇴 Colombia
- `es_PE` / `pe` / `peru` — 🇵🇪 Peru
- `es_VE` / `ve` / `venezuela` — 🇻🇪 Venezuela
- `es_EC` / `ec` / `ecuador` — 🇪🇨 Ecuador
- `es_BO` / `bo` / `bolivia` — 🇧🇴 Bolivia
- `es_PY` / `py` / `paraguay` — 🇵🇾 Paraguay
- `es_GT` / `gt` / `guatemala` — 🇬🇹 Guatemala
- `es_CR` / `cr` / `costa-rica` — 🇨🇷 Costa Rica
- `es_DO` / `do` / `dominican-republic` — 🇩🇴 Dominican Republic
- `es_CU` / `cu` / `cuba` — 🇨🇺 Cuba
- `es_SV` / `es-sv` / `el-salvador` — 🇸🇻 El Salvador
- `es_HN` / `hn` / `honduras` — 🇭🇳 Honduras
- `es_NI` / `ni` / `nicaragua` — 🇳🇮 Nicaragua
- `es_PA` / `pa` / `panama` — 🇵🇦 Panama
- `es_UY` / `uy` / `uruguay` — 🇺🇾 Uruguay
- `en_JM` / `jm` / `jamaica` — 🇯🇲 Jamaica
- `en_TT` / `tt` / `trinidad-and-tobago` — 🇹🇹 Trinidad & Tobago
- `en_GY` / `gy` / `guyana` — 🇬🇾 Guyana
- `en_BZ` / `bz` / `belize` — 🇧🇿 Belize
- `en_BS` / `bs` / `bahamas` — 🇧🇸 Bahamas
- `en_BB` / `bb` / `barbados` — 🇧🇧 Barbados
- `en_AG` / `ag` / `antigua-and-barbuda` — 🇦🇬 Antigua & Barbuda
- `en_DM` / `dm` / `dominica` — 🇩🇲 Dominica
- `en_GD` / `gd` / `grenada` — 🇬🇩 Grenada
- `en_KN` / `kn` / `saint-kitts-and-nevis` — 🇰🇳 St. Kitts & Nevis
- `en_LC` / `lc` / `saint-lucia` — 🇱🇨 St. Lucia
- `en_VC` / `vc` / `saint-vincent` — 🇻🇨 St. Vincent & Grenadines
- `fr_HT` / `ht` / `haiti` — 🇭🇹 Haiti
- `nl_SR` / `sr` / `suriname` — 🇸🇷 Suriname

### Europe 🌍 (56)

- `en_GB` / `gb` / `uk` — 🇬🇧 UK
- `en_IE` / `ie` / `ireland` — 🇮🇪 Ireland (English)
- `ga_IE` / `ga` / `gaeilge` — 🇮🇪 Ireland (Irish Gaelic)
- `cy_GB` / `cy` / `wales` — 🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales (Welsh)
- `de_DE` / `de` / `germany` — 🇩🇪 Germany
- `de_AT` / `at` / `austria` — 🇦🇹 Austria
- `de_CH` / `ch` / `switzerland` — 🇨🇭 Switzerland (German)
- `fr_CH` / `fr-ch` — 🇨🇭 Switzerland (French)
- `it_CH` / `it-ch` — 🇨🇭 Switzerland (Italian)
- `fr_FR` / `fr` / `france` — 🇫🇷 France
- `fr_BE` / `fr-be` — 🇧🇪 Belgium (French)
- `nl_BE` / `be` / `belgium` — 🇧🇪 Belgium (Dutch)
- `it_IT` / `it` / `italy` — 🇮🇹 Italy
- `es_ES` / `es` / `spain` — 🇪🇸 Spain
- `ca_ES` / `catalonia` / `catalan` — 🇪🇸 Spain (Catalan)
- `pt_PT` / `portugal` — 🇵🇹 Portugal
- `nl_NL` / `nl` / `netherlands` — 🇳🇱 Netherlands
- `de_LU` / `de-lu` — 🇱🇺 Luxembourg (German)
- `fr_LU` / `fr-lu` — 🇱🇺 Luxembourg (French)
- `de_LI` / `li` / `liechtenstein` — 🇱🇮 Liechtenstein
- `ru_RU` / `ru` / `russia` — 🇷🇺 Russia
- `pl_PL` / `pl` / `poland` — 🇵🇱 Poland
- `tr_TR` / `tr` / `turkey` — 🇹🇷 Turkey
- `sv_SE` / `sv` / `se` / `sweden` — 🇸🇪 Sweden
- `nb_NO` / `no` / `norway` — 🇳🇴 Norway
- `da_DK` / `da` / `dk` / `denmark` — 🇩🇰 Denmark
- `fi_FI` / `fi` / `finland` — 🇫🇮 Finland
- `el_GR` / `el` / `gr` / `greece` — 🇬🇷 Greece
- `cs_CZ` / `cs` / `cz` / `czech` — 🇨🇿 Czech Republic
- `hu_HU` / `hu` / `hungary` — 🇭🇺 Hungary
- `ro_RO` / `ro` / `romania` — 🇷🇴 Romania
- `uk_UA` / `ua` / `ukraine` — 🇺🇦 Ukraine
- `sk_SK` / `sk` / `slovakia` — 🇸🇰 Slovakia
- `hr_HR` / `hr` / `croatia` — 🇭🇷 Croatia
- `rs_RS` / `rs` / `serbia` — 🇷🇸 Serbia
- `lt_LT` / `lt` / `lithuania` — 🇱🇹 Lithuania
- `lv_LV` / `lv` / `latvia` — 🇱🇻 Latvia
- `et_EE` / `ee` / `estonia` — 🇪🇪 Estonia
- `bg_BG` / `bg` / `bulgaria` — 🇧🇬 Bulgaria
- `is_IS` / `is` / `iceland` — 🇮🇸 Iceland
- `sq_AL` / `al` / `albania` — 🇦🇱 Albania
- `bs_BA` / `ba` / `bosnia-herzegovina` — 🇧🇦 Bosnia & Herzegovina
- `mk_MK` / `mk` / `north-macedonia` — 🇲🇰 North Macedonia
- `sl_SI` / `si` / `slovenia` — 🇸🇮 Slovenia
- `mt_MT` / `mt` / `malta` — 🇲🇹 Malta
- `be_BY` / `by` / `belarus` — 🇧🇾 Belarus
- `sr_ME` / `me` / `montenegro` — 🇲🇪 Montenegro
- `ro_MD` / `md` / `moldova` — 🇲🇩 Moldova
- `el_CY` / `el-cy` / `cyprus` — 🇨🇾 Cyprus (Greek)
- `tr_CY` / `tr-cy` — 🇨🇾 Cyprus (Turkish)
- `fo_FO` / `fo` / `faroe-islands` — 🇫🇴 Faroe Islands
- `ca_AD` / `ad` / `andorra` — 🇦🇩 Andorra
- `fr_MC` / `mc` / `monaco` — 🇲🇨 Monaco
- `it_SM` / `sm` / `san-marino` — 🇸🇲 San Marino
- `it_VA` / `va` / `vatican` — 🇻🇦 Vatican City
- `en_GI` / `gi` / `gibraltar` — 🇬🇮 Gibraltar

### Asia-Pacific 🌏 (44)

- `zh_CN` / `zh` / `cn` / `china` — 🇨🇳 China
- `zh_TW` / `tw` / `taiwan` — 🇹🇼 Taiwan
- `zh_HK` / `hk` / `hongkong` — 🇭🇰 Hong Kong
- `ja_JP` / `ja` / `jp` / `japan` — 🇯🇵 Japan
- `ko_KR` / `ko` / `kr` / `korea` — 🇰🇷 South Korea
- `id_ID` / `id` / `indonesia` — 🇮🇩 Indonesia
- `ms_MY` / `ms` / `my` / `malaysia` — 🇲🇾 Malaysia
- `th_TH` / `th` / `thailand` — 🇹🇭 Thailand
- `vi_VN` / `vi` / `vn` / `vietnam` — 🇻🇳 Vietnam
- `km_KH` / `kh` / `cambodia` — 🇰🇭 Cambodia
- `lo_LA` / `la` / `laos` — 🇱🇦 Laos
- `my_MM` / `mm` / `myanmar` — 🇲🇲 Myanmar
- `mn_MN` / `mn` / `mongolia` — 🇲🇳 Mongolia
- `en_SG` / `sg` / `singapore` — 🇸🇬 Singapore
- `en_PH` / `ph` / `philippines` — 🇵🇭 Philippines
- `en_AU` / `au` / `australia` — 🇦🇺 Australia
- `en_NZ` / `nz` / `new-zealand` — 🇳🇿 New Zealand
- `en_IN` / `in` / `india` — 🇮🇳 India (English)
- `hi_IN` / `hi` / `hindi` — 🇮🇳 India (Hindi)
- `bn_IN` / `bn-in` — 🇮🇳 India (Bengali)
- `si_LK` / `lk` / `sri-lanka` — 🇱🇰 Sri Lanka
- `bn_BD` / `bd` / `bangladesh` — 🇧🇩 Bangladesh
- `ne_NP` / `np` / `nepal` — 🇳🇵 Nepal
- `dz_BT` / `bt` / `bhutan` — 🇧🇹 Bhutan
- `dv_MV` / `mv` / `maldives` — 🇲🇻 Maldives
- `ur_PK` / `ur` / `urdu` — 🇵🇰 Pakistan (Urdu)
- `en_PK` / `pk` / `pakistan` — 🇵🇰 Pakistan (English)
- `ps_AF` / `af` / `afghanistan` — 🇦🇫 Afghanistan
- `kk_KZ` / `kz` / `kazakhstan` — 🇰🇿 Kazakhstan
- `ky_KG` / `kg` / `kyrgyzstan` — 🇰🇬 Kyrgyzstan
- `tg_TJ` / `tj` / `tajikistan` — 🇹🇯 Tajikistan
- `tk_TM` / `tm` / `turkmenistan` — 🇹🇲 Turkmenistan
- `uz_UZ` / `uz` / `uzbekistan` — 🇺🇿 Uzbekistan
- `ka_GE` / `ge` / `georgia` — 🇬🇪 Georgia
- `hy_AM` / `hy` / `armenia` — 🇦🇲 Armenia
- `az_AZ` / `az` / `azerbaijan` — 🇦🇿 Azerbaijan
- `ms_BN` / `bn` / `brunei` — 🇧🇳 Brunei
- `pt_TL` / `tl` / `timor-leste` — 🇹🇱 Timor-Leste
- `zh_MO` / `mo` / `macau` — 🇲🇴 Macau (Chinese)
- `pt_MO` / `pt-mo` / `macau-portuguese` — 🇲🇴 Macau (Portuguese)

### Middle East & Africa 🌍 (75)

**Middle East (19):**
- `ar_SA` / `sa` / `saudi` — 🇸🇦 Saudi Arabia
- `ar_AE` / `ae` / `uae` — 🇦🇪 UAE
- `ar_EG` / `eg` / `egypt` — 🇪🇬 Egypt
- `ar_MA` / `ma` / `morocco` — 🇲🇦 Morocco
- `ar_DZ` / `dz` / `algeria` — 🇩🇿 Algeria
- `ar_TN` / `tn` / `tunisia` — 🇹🇳 Tunisia
- `ar_LY` / `ly` / `libya` — 🇱🇾 Libya
- `ar_SD` / `sd` / `sudan` — 🇸🇩 Sudan
- `ar_IQ` / `iq` / `iraq` — 🇮🇶 Iraq
- `ar_KW` / `kw` / `kuwait` — 🇰🇼 Kuwait
- `ar_QA` / `qa` / `qatar` — 🇶🇦 Qatar
- `ar_BH` / `bh` / `bahrain` — 🇧🇭 Bahrain
- `ar_OM` / `om` / `oman` — 🇴🇲 Oman
- `ar_YE` / `ye` / `yemen` — 🇾🇪 Yemen
- `ar_JO` / `jo` / `jordan` — 🇯🇴 Jordan
- `ar_LB` / `lb` / `lebanon` — 🇱🇧 Lebanon
- `ar_SY` / `sy` / `syria` — 🇸🇾 Syria
- `he_IL` / `he` / `il` / `israel` — 🇮🇱 Israel
- `fa_IR` / `fa` / `iran` — 🇮🇷 Iran
- `ar_PS` / `ps` / `palestine` — 🇵🇸 Palestine
- `ar_MR` / `mr` / `mauritania` — 🇲🇷 Mauritania

**Sub-Saharan Africa (67):**
- `en_ZA` / `za` / `south-africa` — 🇿🇦 South Africa (English)
- `af_ZA` / `af` / `afrikaans` — 🇿🇦 South Africa (Afrikaans)
- `en_NA` / `na` / `namibia` — 🇳🇦 Namibia
- `en_BW` / `bw` / `botswana` — 🇧🇼 Botswana
- `en_ZW` / `zw` / `zimbabwe` — 🇿🇼 Zimbabwe
- `en_ZM` / `zm` / `zambia` — 🇿🇲 Zambia
- `en_LS` / `ls` / `lesotho` — 🇱🇸 Lesotho
- `en_SZ` / `sz` / `eswatini` — 🇸🇿 Eswatini
- `en_NG` / `ng` / `nigeria` — 🇳🇬 Nigeria
- `en_GH` / `gh` / `ghana` — 🇬🇭 Ghana
- `en_SL` / `sl` / `sierra-leone` — 🇸🇱 Sierra Leone
- `en_LR` / `lr` / `liberia` — 🇱🇷 Liberia
- `en_GM` / `gm` / `gambia` — 🇬🇲 Gambia
- `en_UG` / `ug` / `uganda` — 🇺🇬 Uganda
- `en_KE` / `ke` / `kenya` — 🇰🇪 Kenya (English)
- `sw_KE` / `sw-ke` — 🇰🇪 Kenya (Swahili)
- `sw_TZ` / `sw-tz` — 🇹🇿 Tanzania (Swahili)
- `rw_RW` / `rw` / `rwanda` — 🇷🇼 Rwanda
- `so_SO` / `so` / `somalia` — 🇸🇴 Somalia
- `am_ET` / `am` / `ethiopia` — 🇪🇹 Ethiopia
- `mg_MG` / `mg` / `madagascar` — 🇲🇬 Madagascar
- `fr_CM` / `cm` / `cameroon` — 🇨🇲 Cameroon
- `fr_CI` / `ci` / `cote-d-ivoire` — 🇨🇮 Côte d'Ivoire
- `fr_SN` / `sn` / `senegal` — 🇸🇳 Senegal
- `fr_ML` / `ml` / `mali` — 🇲🇱 Mali
- `fr_NE` / `ne` / `niger` — 🇳🇪 Niger
- `fr_BF` / `bf` / `burkina-faso` — 🇧🇫 Burkina Faso
- `fr_BJ` / `bj` / `benin` — 🇧🇯 Benin
- `fr_TG` / `tg` / `togo` — 🇹🇬 Togo
- `fr_GA` / `ga` / `gabon` — 🇬🇦 Gabon
- `pt_AO` / `ao` / `angola` — 🇦🇴 Angola
- `pt_MZ` / `mz` / `mozambique` — 🇲🇿 Mozambique
- `pt_CV` / `cv` / `cape-verde` — 🇨🇻 Cape Verde
- `pt_GW` / `gw` / `guinea-bissau` — 🇬🇼 Guinea-Bissau
- `pt_ST` / `st` / `sao-tome` — 🇸🇹 São Tomé & Príncipe
- `ar_PS` / `ps` / `palestine` — 🇵🇸 Palestine
- `ar_MR` / `mr` / `mauritania` — 🇲🇷 Mauritania
- `ar_KM` / `km` / `comoros` — 🇰🇲 Comoros
- `ar_DJ` / `dj` / `djibouti` — 🇩🇯 Djibouti
- `en_MU` / `mu` / `mauritius` — 🇲🇺 Mauritius
- `fr_SC` / `fr-sc` / `seychelles-french` — 🇸🇨 Seychelles (French)
- `en_SC` / `sc` / `seychelles` — 🇸🇨 Seychelles (English)
- `fr_GN` / `gn` / `guinea-conakry` — 🇬🇳 Guinea
- `es_GQ` / `gq` / `equatorial-guinea` — 🇬🇶 Equatorial Guinea
- `en_SS` / `ss` / `south-sudan` — 🇸🇸 South Sudan
- `ti_ER` / `er` / `eritrea` — 🇪🇷 Eritrea
- `ms_BN` / `bn` / `brunei` — 🇧🇳 Brunei
- `pt_TL` / `tl` / `timor-leste` — 🇹🇱 Timor-Leste
- `zh_MO` / `mo` / `macau` — 🇲🇴 Macau (Chinese)
- `pt_MO` / `pt-mo` / `macau-portuguese` — 🇲🇴 Macau (Portuguese)
- `ca_AD` / `ad` / `andorra` — 🇦🇩 Andorra
- `fr_MC` / `mc` / `monaco` — 🇲🇨 Monaco
- `it_SM` / `sm` / `san-marino` — 🇸🇲 San Marino
- `it_VA` / `va` / `vatican` — 🇻🇦 Vatican City
- `en_GI` / `gi` / `gibraltar` — 🇬🇮 Gibraltar

## Usage Examples

### Basic Usage

```typescript
import { createMimic } from 'mimic-data';

const mimic = createMimic('ja_JP');

console.log(mimic.identity.fullName());
// "Tanaka Kenji"

console.log(mimic.location.fullAddress());
// "〒123-4567 Tokyo, Yokohama, Chuo-dori 2-5-10"
```

### Using the Mimic Class Directly

```typescript
import { Mimic, locales } from 'mimic-data';

const mimic = new Mimic(locales.de_DE);
console.log(mimic.identity.fullName('female'));
// "Maria Müller"
```

### Seeded Random (Reproducible Data)

```typescript
import { createMimic, Random } from 'mimic-data';

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
import { createMimic } from 'mimic-data';

const mimic = createMimic('id_ID');

const persons = mimic.identity.persons(100);
const addresses = mimic.location.uniqueAddresses(50);

const employees = mimic.generateMockEntities(200, {
  gender: 'female',
  ageRange: { min: 20, max: 40 }
});
```

### Complete Employee Record

```typescript
import { createMimic } from 'mimic-data';

const mimic = createMimic('id_ID');

const employee = {
  ...mimic.identity.person('male', { min: 25, max: 40 }),
  ...mimic.location.address(),
  ...mimic.physical.data(),
  ...mimic.work.data(),
  ...mimic.contact.data(),
  ...mimic.company.data()
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
import {
  Gender,
  MetricSystem,
  PersonData,
  AddressData,
  PhysicalData,
  WorkData,
  ContactData,
  CompanyData,
  AgeRange,
  LocaleDefinition
} from 'mimic-data';

const person: PersonData = mimic.identity.person('female', { min: 25, max: 35 });
const address: AddressData = mimic.location.address();
const physical: PhysicalData = mimic.physical.data();
const work: WorkData = mimic.work.data();
const contact: ContactData = mimic.contact.data();
const company: CompanyData = mimic.company.data();
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
import { Random } from 'mimic-data';

Random.seed(12345);

Random.int(1, 100);
Random.float(1.5, 10.5, 2);
Random.boolean();
Random.pick(['a', 'b', 'c']);
Random.shuffle([1, 2, 3, 4, 5]);
Random.multiple(() => Random.int(1, 100), 10);
Random.unique(() => Random.int(1, 1000), 20);
```

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Development mode (watch)
npm run dev

# Run tests
npm test

# Type check
npm run type-check
```

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or pull request on [GitHub](https://github.com/fazelllyyy/mimic-data).

### Adding a New Locale

1. **Create a locale file** at `src/locales/xx_XX.ts`
2. **Implement the `LocaleDefinition`** interface
3. **Import and register** in `src/index.ts`

```typescript
// 1. Create file: src/locales/es_ES.ts
import { LocaleDefinition } from '../types';
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
  metricSystem: 'metric',
  formatFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  },
  formatAddress(street, city, state, zipCode) {
    return `${street} ${Random.int(1, 200)}, ${zipCode} ${city}`;
  },
  generateZipCode() {
    return String(Random.int(10000, 99999));
  }
};

// 2. Register in src/index.ts
import { es_ES } from './locales/es_ES';
localeRegistry.register('es_ES', es_ES, ['es', 'spain', 'españa']);
```

## Acknowledgments

Inspired by libraries like Faker.js, with a focus on:

- Zero runtime dependencies
- Accurate localization for each region
- Smaller bundle size through tree-shaking
- TypeScript-first design with full type safety

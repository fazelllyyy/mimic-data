import { Mimic } from './core/mimic';
import { localeRegistry } from './core/registry';

// Import existing locales
import { en_US } from './locales/en_US';
import { ja_JP } from './locales/ja_JP';
import { id_ID } from './locales/id_ID';
import { de_DE } from './locales/de_DE';
import { fr_FR } from './locales/fr_FR';
import { pt_BR } from './locales/pt_BR';
import { ko_KR } from './locales/ko_KR';
import { en_AU } from './locales/en_AU';

// Import new locales (20 original)
import { zh_CN } from './locales/zh_CN';
import { en_IN } from './locales/en_IN';
import { es_MX } from './locales/es_MX';
import { it_IT } from './locales/it_IT';
import { es_ES } from './locales/es_ES';
import { nl_NL } from './locales/nl_NL';
import { en_CA } from './locales/en_CA';
import { en_GB } from './locales/en_GB';
import { ru_RU } from './locales/ru_RU';
import { pl_PL } from './locales/pl_PL';
import { tr_TR } from './locales/tr_TR';
import { sv_SE } from './locales/sv_SE';
import { nb_NO } from './locales/nb_NO';
import { da_DK } from './locales/da_DK';
import { fi_FI } from './locales/fi_FI';
import { es_AR } from './locales/es_AR';
import { es_CL } from './locales/es_CL';
import { th_TH } from './locales/th_TH';
import { vi_VN } from './locales/vi_VN';
import { ms_MY } from './locales/ms_MY';

// Import newest locales (16 additional)
import { en_SG } from './locales/en_SG';
import { en_PH } from './locales/en_PH';
import { en_NZ } from './locales/en_NZ';
import { en_ZA } from './locales/en_ZA';
import { pt_PT } from './locales/pt_PT';
import { el_GR } from './locales/el_GR';
import { cs_CZ } from './locales/cs_CZ';
import { de_AT } from './locales/de_AT';
import { de_CH } from './locales/de_CH';
import { nl_BE } from './locales/nl_BE';
import { hu_HU } from './locales/hu_HU';
import { ro_RO } from './locales/ro_RO';
import { ar_AE } from './locales/ar_AE';
import { ar_SA } from './locales/ar_SA';
import { ar_EG } from './locales/ar_EG';
import { he_IL } from './locales/he_IL';

// Import new locales - Eastern Europe
import { uk_UA } from './locales/uk_UA';
import { sk_SK } from './locales/sk_SK';
import { hr_HR } from './locales/hr_HR';
import { rs_RS } from './locales/rs_RS';
import { lt_LT } from './locales/lt_LT';
import { lv_LV } from './locales/lv_LV';
import { et_EE } from './locales/et_EE';
import { bg_BG } from './locales/bg_BG';
import { is_IS } from './locales/is_IS';

// Import new locales - Africa & Middle East
import { en_NG } from './locales/en_NG';
import { en_KE } from './locales/en_KE';
import { en_PK } from './locales/en_PK';
import { bn_BD } from './locales/bn_BD';
import { fa_IR } from './locales/fa_IR';
import { ar_MA } from './locales/ar_MA';

// Import new locales - Americas
import { es_CO } from './locales/es_CO';
import { es_PE } from './locales/es_PE';
import { es_VE } from './locales/es_VE';
import { es_GT } from './locales/es_GT';
import { es_CR } from './locales/es_CR';

// Import new locales - Asia
import { zh_TW } from './locales/zh_TW';

// Import additional locales - Middle East
import { ar_IQ } from './locales/ar_IQ';
import { ar_KW } from './locales/ar_KW';
import { ar_QA } from './locales/ar_QA';
import { ar_BH } from './locales/ar_BH';
import { ar_DZ } from './locales/ar_DZ';
import { ar_JO } from './locales/ar_JO';
import { ar_LB } from './locales/ar_LB';
import { ar_LY } from './locales/ar_LY';
import { ar_OM } from './locales/ar_OM';
import { ar_SD } from './locales/ar_SD';
import { ar_SY } from './locales/ar_SY';
import { ar_TN } from './locales/ar_TN';
import { ar_YE } from './locales/ar_YE';

// Import additional locales - Europe
import { en_IE } from './locales/en_IE';
import { fr_BE } from './locales/fr_BE';
import { fr_CH } from './locales/fr_CH';
import { de_LI } from './locales/de_LI';
import { de_LU } from './locales/de_LU';
import { it_CH } from './locales/it_CH';
import { ca_ES } from './locales/ca_ES';
import { fr_LU } from './locales/fr_LU';

// Import additional locales - Americas
import { fr_CA } from './locales/fr_CA';
import { es_EC } from './locales/es_EC';
import { es_BO } from './locales/es_BO';
import { es_PY } from './locales/es_PY';
import { es_US } from './locales/es_US';
import { es_DO } from './locales/es_DO';

// Import Americas & Oceania locales
import { es_CU } from './locales/es_CU';
import { es_SV } from './locales/es_SV';
import { es_HN } from './locales/es_HN';
import { es_NI } from './locales/es_NI';
import { es_PA } from './locales/es_PA';
import { es_UY } from './locales/es_UY';
import { en_JM } from './locales/en_JM';
import { en_TT } from './locales/en_TT';
import { en_GY } from './locales/en_GY';
import { en_BZ } from './locales/en_BZ';
import { fr_HT } from './locales/fr_HT';
import { nl_SR } from './locales/nl_SR';
import { en_BS } from './locales/en_BS';
import { en_BB } from './locales/en_BB';
import { en_AG } from './locales/en_AG';
import { en_DM } from './locales/en_DM';
import { en_GD } from './locales/en_GD';
import { en_KN } from './locales/en_KN';
import { en_LC } from './locales/en_LC';
import { en_VC } from './locales/en_VC';
import { en_FJ } from './locales/en_FJ';
import { en_PG } from './locales/en_PG';
import { en_SB } from './locales/en_SB';
import { en_VU } from './locales/en_VU';
import { en_WS } from './locales/en_WS';
import { en_TO } from './locales/en_TO';
import { en_FM } from './locales/en_FM';
import { sm_WS } from './locales/sm_WS';
import { to_TO } from './locales/to_TO';
import { en_TV } from './locales/en_TV';
import { en_NR } from './locales/en_NR';
import { en_MH } from './locales/en_MH';
import { en_PW } from './locales/en_PW';
import { en_KI } from './locales/en_KI';

// Import additional locales - Asia
import { zh_HK } from './locales/zh_HK';
import { hi_IN } from './locales/hi_IN';
import { ne_NP } from './locales/ne_NP';
import { ur_PK } from './locales/ur_PK';
import { bn_IN } from './locales/bn_IN';

// Import additional locales - Africa
import { sw_KE } from './locales/sw_KE';
import { sw_TZ } from './locales/sw_TZ';
import { af_ZA } from './locales/af_ZA';
import { pt_MZ } from './locales/pt_MZ';
import { pt_AO } from './locales/pt_AO';
import { en_GH } from './locales/en_GH';
import { en_UG } from './locales/en_UG';
import { en_ZM } from './locales/en_ZM';
import { en_ZW } from './locales/en_ZW';
import { en_NA } from './locales/en_NA';
import { mg_MG } from './locales/mg_MG';
import { en_SL } from './locales/en_SL';
import { en_LR } from './locales/en_LR';
import { en_GM } from './locales/en_GM';
import { en_BW } from './locales/en_BW';
import { en_LS } from './locales/en_LS';
import { en_SZ } from './locales/en_SZ';

// Import French-speaking Africa locales
import { fr_CM } from './locales/fr_CM';
import { fr_CI } from './locales/fr_CI';
import { fr_SN } from './locales/fr_SN';
import { fr_ML } from './locales/fr_ML';
import { fr_NE } from './locales/fr_NE';
import { fr_BF } from './locales/fr_BF';
import { fr_BJ } from './locales/fr_BJ';
import { fr_TG } from './locales/fr_TG';
import { fr_GA } from './locales/fr_GA';
import { rw_RW } from './locales/rw_RW';
import { so_SO } from './locales/so_SO';
import { am_ET } from './locales/am_ET';
import { pt_CV } from './locales/pt_CV';
import { pt_GW } from './locales/pt_GW';
import { pt_ST } from './locales/pt_ST';

// Import Asia locales
import { km_KH } from './locales/km_KH';
import { lo_LA } from './locales/lo_LA';
import { my_MM } from './locales/my_MM';
import { si_LK } from './locales/si_LK';
import { mn_MN } from './locales/mn_MN';
import { kk_KZ } from './locales/kk_KZ';
import { ps_AF } from './locales/ps_AF';
import { ka_GE } from './locales/ka_GE';
import { hy_AM } from './locales/hy_AM';
import { az_AZ } from './locales/az_AZ';
import { ky_KG } from './locales/ky_KG';
import { tg_TJ } from './locales/tg_TJ';
import { tk_TM } from './locales/tk_TM';
import { uz_UZ } from './locales/uz_UZ';
import { dv_MV } from './locales/dv_MV';
import { dz_BT } from './locales/dz_BT';

// Import Europe locales
import { sq_AL } from './locales/sq_AL';
import { bs_BA } from './locales/bs_BA';
import { mk_MK } from './locales/mk_MK';
import { sl_SI } from './locales/sl_SI';
import { mt_MT } from './locales/mt_MT';
import { be_BY } from './locales/be_BY';
import { sr_ME } from './locales/sr_ME';
import { ro_MD } from './locales/ro_MD';
import { el_CY } from './locales/el_CY';
import { tr_CY } from './locales/tr_CY';
import { ga_IE } from './locales/ga_IE';
import { cy_GB } from './locales/cy_GB';
import { fo_FO } from './locales/fo_FO';

// Import remaining missing locales
import { ar_PS } from './locales/ar_PS';
import { ar_MR } from './locales/ar_MR';
import { en_MU } from './locales/en_MU';
import { fr_GN } from './locales/fr_GN';
import { es_GQ } from './locales/es_GQ';
import { en_SS } from './locales/en_SS';
import { ar_KM } from './locales/ar_KM';
import { ar_DJ } from './locales/ar_DJ';
import { ti_ER } from './locales/ti_ER';
import { fr_SC } from './locales/fr_SC';
import { en_SC } from './locales/en_SC';
import { ms_BN } from './locales/ms_BN';
import { pt_TL } from './locales/pt_TL';
import { zh_MO } from './locales/zh_MO';
import { pt_MO } from './locales/pt_MO';
import { ca_AD } from './locales/ca_AD';
import { fr_MC } from './locales/fr_MC';
import { it_SM } from './locales/it_SM';
import { it_VA } from './locales/it_VA';
import { en_GI } from './locales/en_GI';

// Export types
export type {
  Gender,
  MetricSystem,
  PersonData,
  AddressData,
  PhysicalData,
  WorkData,
  ContactData,
  CompanyData,
  AgeRange,
  LocaleData,
  LocaleDefinition
} from './types';

// Export core classes
export { Mimic } from './core/mimic';
export { Random } from './core/random';
export { localeRegistry } from './core/registry';

/**
 * ============================================
 * AUTO-REGISTRATION OF LOCALES
 * ============================================
 * Register all locales with their aliases
 */

// Original 8 locales
localeRegistry.register('en_US', en_US, ['en', 'us', 'usa']);
localeRegistry.register('ja_JP', ja_JP, ['ja', 'jp', 'japan']);
localeRegistry.register('id_ID', id_ID, ['id', 'indonesia']);
localeRegistry.register('de_DE', de_DE, ['de', 'germany', 'deutsch']);
localeRegistry.register('fr_FR', fr_FR, ['fr', 'france']);
localeRegistry.register('pt_BR', pt_BR, ['pt', 'br', 'brazil', 'brasil']);
localeRegistry.register('ko_KR', ko_KR, ['ko', 'kr', 'korea']);
localeRegistry.register('en_AU', en_AU, ['au', 'aus', 'australia']);

// New 20 locales
localeRegistry.register('zh_CN', zh_CN, ['zh', 'cn', 'china']);
localeRegistry.register('en_IN', en_IN, ['in', 'india']);
localeRegistry.register('es_MX', es_MX, ['mx', 'mexico']);
localeRegistry.register('it_IT', it_IT, ['it', 'italy', 'italia']);
localeRegistry.register('es_ES', es_ES, ['es', 'spain', 'españa']);
localeRegistry.register('nl_NL', nl_NL, ['nl', 'netherlands', 'holland']);
localeRegistry.register('en_CA', en_CA, ['en-ca', 'canada']);
localeRegistry.register('en_GB', en_GB, ['gb', 'uk', 'britain']);
localeRegistry.register('ru_RU', ru_RU, ['ru', 'russia']);
localeRegistry.register('pl_PL', pl_PL, ['pl', 'poland', 'polska']);
localeRegistry.register('tr_TR', tr_TR, ['tr', 'turkey', 'turkiye']);
localeRegistry.register('sv_SE', sv_SE, ['sv', 'se', 'sweden', 'sverige']);
localeRegistry.register('nb_NO', nb_NO, ['no', 'norway', 'norge']);
localeRegistry.register('da_DK', da_DK, ['da', 'dk', 'denmark', 'danmark']);
localeRegistry.register('fi_FI', fi_FI, ['fi', 'finland', 'suomi']);
localeRegistry.register('es_AR', es_AR, ['ar', 'argentina']);
localeRegistry.register('es_CL', es_CL, ['cl', 'chile']);
localeRegistry.register('th_TH', th_TH, ['th', 'thailand']);
localeRegistry.register('vi_VN', vi_VN, ['vi', 'vn', 'vietnam']);
localeRegistry.register('ms_MY', ms_MY, ['ms', 'my', 'malaysia']);

// Newest 16 locales
localeRegistry.register('en_SG', en_SG, ['sg', 'singapore']);
localeRegistry.register('en_PH', en_PH, ['ph', 'philippines']);
localeRegistry.register('en_NZ', en_NZ, ['nz', 'new-zealand']);
localeRegistry.register('en_ZA', en_ZA, ['za', 'south-africa']);
localeRegistry.register('pt_PT', pt_PT, ['portugal']);
localeRegistry.register('el_GR', el_GR, ['el', 'gr', 'greece']);
localeRegistry.register('cs_CZ', cs_CZ, ['cs', 'cz', 'czech']);
localeRegistry.register('de_AT', de_AT, ['at', 'austria']);
localeRegistry.register('de_CH', de_CH, ['ch', 'switzerland']);
localeRegistry.register('nl_BE', nl_BE, ['be', 'belgium']);
localeRegistry.register('hu_HU', hu_HU, ['hu', 'hungary']);
localeRegistry.register('ro_RO', ro_RO, ['ro', 'romania']);
localeRegistry.register('ar_AE', ar_AE, ['ae', 'uae', 'emirates']);
localeRegistry.register('ar_SA', ar_SA, ['sa', 'saudi', 'saudi-arabia']);
localeRegistry.register('ar_EG', ar_EG, ['eg', 'egypt']);
localeRegistry.register('he_IL', he_IL, ['he', 'il', 'israel']);

// Eastern Europe locales
localeRegistry.register('uk_UA', uk_UA, ['ua', 'ukraine']);
localeRegistry.register('sk_SK', sk_SK, ['sk', 'slovakia']);
localeRegistry.register('hr_HR', hr_HR, ['hr', 'croatia']);
localeRegistry.register('rs_RS', rs_RS, ['rs', 'serbia']);
localeRegistry.register('lt_LT', lt_LT, ['lt', 'lithuania']);
localeRegistry.register('lv_LV', lv_LV, ['lv', 'latvia']);
localeRegistry.register('et_EE', et_EE, ['ee', 'estonia']);
localeRegistry.register('bg_BG', bg_BG, ['bg', 'bulgaria']);
localeRegistry.register('is_IS', is_IS, ['is', 'iceland']);

// Africa & Middle East locales
localeRegistry.register('en_NG', en_NG, ['ng', 'nigeria']);
localeRegistry.register('en_KE', en_KE, ['ke', 'kenya']);
localeRegistry.register('en_PK', en_PK, ['pk', 'pakistan']);
localeRegistry.register('bn_BD', bn_BD, ['bd', 'bangladesh', 'bengali']);
localeRegistry.register('fa_IR', fa_IR, ['fa', 'persian', 'farsi']);
localeRegistry.register('ar_MA', ar_MA, ['ma', 'morocco', 'arabic-morocco']);

// Americas locales
localeRegistry.register('es_CO', es_CO, ['co', 'colombia']);
localeRegistry.register('es_PE', es_PE, ['pe', 'peru']);
localeRegistry.register('es_VE', es_VE, ['ve', 'venezuela']);
localeRegistry.register('es_GT', es_GT, ['gt', 'guatemala']);
localeRegistry.register('es_CR', es_CR, ['cr', 'costa-rica']);

// Asia locales
localeRegistry.register('zh_TW', zh_TW, ['tw', 'taiwan']);

// Additional Middle East locales
localeRegistry.register('ar_IQ', ar_IQ, ['iq', 'iraq', 'mesopotamia']);
localeRegistry.register('ar_KW', ar_KW, ['kw', 'kuwait']);
localeRegistry.register('ar_QA', ar_QA, ['qa', 'qatar']);
localeRegistry.register('ar_BH', ar_BH, ['bh', 'bahrain']);
localeRegistry.register('ar_DZ', ar_DZ, ['dz', 'algeria', 'algerie']);
localeRegistry.register('ar_JO', ar_JO, ['jo', 'jordan', 'jordanie']);
localeRegistry.register('ar_LB', ar_LB, ['lb', 'lebanon', 'liban']);
localeRegistry.register('ar_LY', ar_LY, ['ly', 'libya', 'libye']);
localeRegistry.register('ar_OM', ar_OM, ['om', 'oman']);
localeRegistry.register('ar_SD', ar_SD, ['sd', 'sudan']);
localeRegistry.register('ar_SY', ar_SY, ['sy', 'syria', 'syrie']);
localeRegistry.register('ar_TN', ar_TN, ['tn', 'tunisia', 'tunisie']);
localeRegistry.register('ar_YE', ar_YE, ['ye', 'yemen']);

// Additional Europe locales
localeRegistry.register('en_IE', en_IE, ['ie', 'ireland', 'eire']);
localeRegistry.register('fr_BE', fr_BE, ['fr-be', 'wallonia', 'brussels']);
localeRegistry.register('fr_CH', fr_CH, ['fr-ch', 'romandie', 'geneva', 'lausanne']);
localeRegistry.register('de_LI', de_LI, ['li', 'liechtenstein']);
localeRegistry.register('de_LU', de_LU, ['de-lu', 'luxembourg-german']);
localeRegistry.register('it_CH', it_CH, ['it-ch', 'ticino', 'swiss-italian']);
localeRegistry.register('ca_ES', ca_ES, ['catalonia', 'catalan']);
localeRegistry.register('fr_LU', fr_LU, ['fr-lu', 'luxembourg-french']);

// Additional Americas locales
localeRegistry.register('fr_CA', fr_CA, ['fr-ca', 'quebec', 'qc', 'canada-fr']);
localeRegistry.register('es_EC', es_EC, ['ec', 'ecuador']);
localeRegistry.register('es_BO', es_BO, ['bo', 'bolivia']);
localeRegistry.register('es_PY', es_PY, ['py', 'paraguay']);
localeRegistry.register('es_US', es_US, ['es-us', 'spanish-american', 'latino']);
localeRegistry.register('es_DO', es_DO, ['do', 'dominican-republic']);

// Additional Asia locales
localeRegistry.register('zh_HK', zh_HK, ['hk', 'hongkong', 'hong-kong']);
localeRegistry.register('hi_IN', hi_IN, ['hi', 'hindi', 'hindustan']);
localeRegistry.register('ne_NP', ne_NP, ['np', 'nepal', 'nepali']);
localeRegistry.register('ur_PK', ur_PK, ['ur', 'urdu', 'pakistan-urdu']);
localeRegistry.register('bn_IN', bn_IN, ['bn-in', 'bengali-india', 'west-bengal']);

// Additional Africa locales
localeRegistry.register('sw_KE', sw_KE, ['sw-ke', 'kenya-swahili']);
localeRegistry.register('sw_TZ', sw_TZ, ['sw-tz', 'tanzania-swahili']);
localeRegistry.register('af_ZA', af_ZA, ['af', 'afrikaans', 'south-africa-af']);
localeRegistry.register('pt_MZ', pt_MZ, ['mz', 'mozambique']);

// Americas & Oceania locales
localeRegistry.register('es_CU', es_CU, ['cu', 'cuba']);
localeRegistry.register('es_SV', es_SV, ['es-sv', 'el-salvador']);
localeRegistry.register('es_HN', es_HN, ['hn', 'honduras']);
localeRegistry.register('es_NI', es_NI, ['ni', 'nicaragua']);
localeRegistry.register('es_PA', es_PA, ['pa', 'panama']);
localeRegistry.register('es_UY', es_UY, ['uy', 'uruguay']);
localeRegistry.register('en_JM', en_JM, ['jm', 'jamaica']);
localeRegistry.register('en_TT', en_TT, ['tt', 'trinidad', 'trinidad-and-tobago']);
localeRegistry.register('en_GY', en_GY, ['gy', 'guyana']);
localeRegistry.register('en_BZ', en_BZ, ['bz', 'belize']);
localeRegistry.register('fr_HT', fr_HT, ['ht', 'haiti']);
localeRegistry.register('nl_SR', nl_SR, ['sr', 'suriname']);
localeRegistry.register('en_BS', en_BS, ['bs', 'bahamas']);
localeRegistry.register('en_BB', en_BB, ['bb', 'barbados']);
localeRegistry.register('en_AG', en_AG, ['ag', 'antigua', 'antigua-and-barbuda']);
localeRegistry.register('en_DM', en_DM, ['dm', 'dominica']);
localeRegistry.register('en_GD', en_GD, ['gd', 'grenada']);
localeRegistry.register('en_KN', en_KN, ['kn', 'st-kitts', 'saint-kitts-and-nevis']);
localeRegistry.register('en_LC', en_LC, ['lc', 'st-lucia', 'saint-lucia']);
localeRegistry.register('en_VC', en_VC, ['vc', 'st-vincent', 'saint-vincent']);
localeRegistry.register('en_FJ', en_FJ, ['fj', 'fiji']);
localeRegistry.register('en_PG', en_PG, ['pg', 'papua-new-guinea']);
localeRegistry.register('en_SB', en_SB, ['sb', 'solomon-islands']);
localeRegistry.register('en_VU', en_VU, ['vu', 'vanuatu']);
localeRegistry.register('en_WS', en_WS, ['ws', 'samoa', 'samoa-english']);
localeRegistry.register('en_TO', en_TO, ['en-to', 'tonga-english']);
localeRegistry.register('en_FM', en_FM, ['fm', 'micronesia']);
localeRegistry.register('sm_WS', sm_WS, ['sm', 'samoan', 'samoa-samoan']);
localeRegistry.register('to_TO', to_TO, ['to', 'tongan', 'tonga-tongan']);
localeRegistry.register('en_TV', en_TV, ['tv', 'tuvalu']);
localeRegistry.register('en_NR', en_NR, ['nr', 'nauru']);
localeRegistry.register('en_MH', en_MH, ['mh', 'marshall-islands']);
localeRegistry.register('en_PW', en_PW, ['pw', 'palau']);
localeRegistry.register('en_KI', en_KI, ['ki', 'kiribati']);

// New Africa locales
localeRegistry.register('pt_AO', pt_AO, ['ao', 'angola']);
localeRegistry.register('en_GH', en_GH, ['gh', 'ghana']);
localeRegistry.register('en_UG', en_UG, ['ug', 'uganda']);
localeRegistry.register('en_ZM', en_ZM, ['zm', 'zambia']);
localeRegistry.register('en_ZW', en_ZW, ['zw', 'zimbabwe']);
localeRegistry.register('en_NA', en_NA, ['na', 'namibia']);
localeRegistry.register('mg_MG', mg_MG, ['mg', 'madagascar']);
localeRegistry.register('en_SL', en_SL, ['sl', 'sierra-leone']);
localeRegistry.register('en_LR', en_LR, ['lr', 'liberia']);
localeRegistry.register('en_GM', en_GM, ['gm', 'gambia']);
localeRegistry.register('en_BW', en_BW, ['bw', 'botswana']);
localeRegistry.register('en_LS', en_LS, ['ls', 'lesotho']);
localeRegistry.register('en_SZ', en_SZ, ['sz', 'eswatini']);

// French-speaking Africa locales
localeRegistry.register('fr_CM', fr_CM, ['cm', 'cameroon', 'cameroun']);
localeRegistry.register('fr_CI', fr_CI, ['ci', 'cote-d-ivoire', 'ivory-coast']);
localeRegistry.register('fr_SN', fr_SN, ['sn', 'senegal']);
localeRegistry.register('fr_ML', fr_ML, ['ml', 'mali']);
localeRegistry.register('fr_NE', fr_NE, ['ne', 'niger']);
localeRegistry.register('fr_BF', fr_BF, ['bf', 'burkina-faso']);
localeRegistry.register('fr_BJ', fr_BJ, ['bj', 'benin']);
localeRegistry.register('fr_TG', fr_TG, ['tg', 'togo']);
localeRegistry.register('fr_GA', fr_GA, ['ga', 'gabon']);
localeRegistry.register('rw_RW', rw_RW, ['rw', 'rwanda']);
localeRegistry.register('so_SO', so_SO, ['so', 'somalia']);
localeRegistry.register('am_ET', am_ET, ['am', 'ethiopia']);
localeRegistry.register('pt_CV', pt_CV, ['cv', 'cape-verde']);
localeRegistry.register('pt_GW', pt_GW, ['gw', 'guinea-bissau']);
localeRegistry.register('pt_ST', pt_ST, ['st', 'sao-tome', 'sao-tome-and-principe']);

// Asia locales
localeRegistry.register('km_KH', km_KH, ['kh', 'cambodia']);
localeRegistry.register('lo_LA', lo_LA, ['la', 'laos']);
localeRegistry.register('my_MM', my_MM, ['mm', 'myanmar', 'burma']);
localeRegistry.register('si_LK', si_LK, ['lk', 'sri-lanka']);
localeRegistry.register('mn_MN', mn_MN, ['mn', 'mongolia']);
localeRegistry.register('kk_KZ', kk_KZ, ['kz', 'kazakhstan']);
localeRegistry.register('ps_AF', ps_AF, ['af', 'afghanistan']);
localeRegistry.register('ka_GE', ka_GE, ['ge', 'georgia']);
localeRegistry.register('hy_AM', hy_AM, ['hy', 'armenia']);
localeRegistry.register('az_AZ', az_AZ, ['az', 'azerbaijan']);
localeRegistry.register('ky_KG', ky_KG, ['kg', 'kyrgyzstan']);
localeRegistry.register('tg_TJ', tg_TJ, ['tj', 'tajikistan']);
localeRegistry.register('tk_TM', tk_TM, ['tm', 'turkmenistan']);
localeRegistry.register('uz_UZ', uz_UZ, ['uz', 'uzbekistan']);
localeRegistry.register('dv_MV', dv_MV, ['mv', 'maldives']);
localeRegistry.register('dz_BT', dz_BT, ['bt', 'bhutan']);

// Europe locales
localeRegistry.register('sq_AL', sq_AL, ['al', 'albania', 'shqiperia']);
localeRegistry.register('bs_BA', bs_BA, ['ba', 'bosnia', 'bosnia-herzegovina']);
localeRegistry.register('mk_MK', mk_MK, ['mk', 'north-macedonia', 'macedonia']);
localeRegistry.register('sl_SI', sl_SI, ['si', 'slovenia']);
localeRegistry.register('mt_MT', mt_MT, ['mt', 'malta']);
localeRegistry.register('be_BY', be_BY, ['by', 'belarus']);
localeRegistry.register('sr_ME', sr_ME, ['me', 'montenegro']);
localeRegistry.register('ro_MD', ro_MD, ['md', 'moldova']);
localeRegistry.register('el_CY', el_CY, ['el-cy', 'cyprus']);
localeRegistry.register('tr_CY', tr_CY, ['tr-cy', 'northern-cyprus']);
localeRegistry.register('ga_IE', ga_IE, ['ga', 'irish', 'gaeilge']);
localeRegistry.register('cy_GB', cy_GB, ['cy', 'welsh', 'cymraeg', 'wales']);
localeRegistry.register('fo_FO', fo_FO, ['fo', 'faroe-islands']);

// Remaining missing locales
localeRegistry.register('ar_PS', ar_PS, ['ps', 'palestine']);
localeRegistry.register('ar_MR', ar_MR, ['mr', 'mauritania']);
localeRegistry.register('en_MU', en_MU, ['mu', 'mauritius']);
localeRegistry.register('fr_GN', fr_GN, ['gn', 'guinea-conakry']);
localeRegistry.register('es_GQ', es_GQ, ['gq', 'equatorial-guinea']);
localeRegistry.register('en_SS', en_SS, ['ss', 'south-sudan']);
localeRegistry.register('ar_KM', ar_KM, ['km', 'comoros']);
localeRegistry.register('ar_DJ', ar_DJ, ['dj', 'djibouti']);
localeRegistry.register('ti_ER', ti_ER, ['er', 'eritrea']);
localeRegistry.register('fr_SC', fr_SC, ['fr-sc', 'seychelles-french']);
localeRegistry.register('en_SC', en_SC, ['sc', 'seychelles']);
localeRegistry.register('ms_BN', ms_BN, ['bn', 'brunei']);
localeRegistry.register('pt_TL', pt_TL, ['tl', 'timor-leste']);
localeRegistry.register('zh_MO', zh_MO, ['mo', 'macau']);
localeRegistry.register('pt_MO', pt_MO, ['pt-mo', 'macau-portuguese']);
localeRegistry.register('ca_AD', ca_AD, ['ad', 'andorra']);
localeRegistry.register('fr_MC', fr_MC, ['mc', 'monaco']);
localeRegistry.register('it_SM', it_SM, ['sm', 'san-marino']);
localeRegistry.register('it_VA', it_VA, ['va', 'vatican']);
localeRegistry.register('en_GI', en_GI, ['gi', 'gibraltar']);

/**
 * Factory function to create Mimic instance with specified locale
 */
export function createMimic(locale: string = 'en_US'): Mimic {
  const localeDefinition = localeRegistry.get(locale);
  
  if (!localeDefinition) {
    const available = localeRegistry.getAllCodes().join(', ');
    throw new Error(
      `Locale '${locale}' not found.\n` +
      `Available locales: ${available}`
    );
  }
  
  return new Mimic(localeDefinition);
}

/**
 * Get available main locale codes
 */
export function getAvailableLocales(): string[] {
  return localeRegistry.getAvailableLocales();
}

/**
 * Get all codes (locales + aliases)
 */
export function getAllLocaleCodes(): string[] {
  return localeRegistry.getAllCodes();
}

/**
 * Export all locale definitions for advanced usage
 */
export const locales = {
  // Original 8
  en_US, ja_JP, id_ID, de_DE, fr_FR, pt_BR, ko_KR, en_AU,
  // New (20)
  zh_CN, en_IN, es_MX, it_IT, es_ES, nl_NL, en_CA, en_GB,
  ru_RU, pl_PL, tr_TR, sv_SE, nb_NO, da_DK, fi_FI,
  es_AR, es_CL, th_TH, vi_VN, ms_MY,
  // Newest (16)
  en_SG, en_PH, en_NZ, en_ZA, pt_PT, el_GR, cs_CZ, de_AT,
  de_CH, nl_BE, hu_HU, ro_RO, ar_AE, ar_SA, ar_EG, he_IL,
  // Eastern Europe (9)
  uk_UA, sk_SK, hr_HR, rs_RS, lt_LT, lv_LV, et_EE, bg_BG, is_IS,
  // Africa & Middle East (6)
  en_NG, en_KE, en_PK, bn_BD, fa_IR, ar_MA,
  // Americas (5)
  es_CO, es_PE, es_VE, es_GT, es_CR,
  // Asia (1)
  zh_TW,
  // Additional Middle East (13)
  ar_IQ, ar_KW, ar_QA, ar_BH, ar_DZ, ar_JO, ar_LB, ar_LY, ar_OM, ar_SD, ar_SY, ar_TN, ar_YE,
  // Additional Europe (8)
  en_IE, fr_BE, fr_CH, de_LI, de_LU, it_CH, ca_ES, fr_LU,
  // Additional Americas (6)
  fr_CA, es_EC, es_BO, es_PY, es_US, es_DO,
  // Additional Asia (5)
  zh_HK, hi_IN, ne_NP, ur_PK, bn_IN,
  // Additional Africa (4)
  sw_KE, sw_TZ, af_ZA, pt_MZ,
  // Americas & Oceania (34)
  es_CU, es_SV, es_HN, es_NI, es_PA, es_UY,
  en_JM, en_TT, en_GY, en_BZ, fr_HT, nl_SR,
  en_BS, en_BB, en_AG, en_DM, en_GD, en_KN, en_LC, en_VC,
  en_FJ, en_PG, en_SB, en_VU, en_WS, en_TO, en_FM,
  sm_WS, to_TO, en_TV, en_NR, en_MH, en_PW, en_KI,
  // Additional Africa (15)
  pt_AO, en_GH, en_UG, en_ZM, en_ZW, en_NA, mg_MG, en_SL, en_LR, en_GM, en_BW, en_LS, en_SZ,
  fr_CM, fr_CI, fr_SN, fr_ML, fr_NE, fr_BF, fr_BJ, fr_TG, fr_GA, rw_RW, so_SO, am_ET,
  pt_CV, pt_GW, pt_ST,
  // Asia (16)
  km_KH, lo_LA, my_MM, si_LK, mn_MN, kk_KZ, ps_AF, ka_GE, hy_AM, az_AZ,
  ky_KG, tg_TJ, tk_TM, uz_UZ, dv_MV, dz_BT,
  // Europe (13)
  sq_AL, bs_BA, mk_MK, sl_SI, mt_MT, be_BY, sr_ME, ro_MD,
  el_CY, tr_CY, ga_IE, cy_GB, fo_FO,
  // Complete coverage (20)
  ar_PS, ar_MR, en_MU, fr_GN, es_GQ, en_SS, ar_KM, ar_DJ, ti_ER, fr_SC, en_SC,
  ms_BN, pt_TL, zh_MO, pt_MO, ca_AD, fr_MC, it_SM, it_VA, en_GI
};

// Default export
export default createMimic;
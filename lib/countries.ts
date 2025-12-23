// lib/countries.ts
// Complete country configuration for age gate with date formats and legal drinking ages

export interface Country {
  code: string;
  name: string;
  format: 'dd/mm/YYYY' | 'mm/dd/YYYY' | 'YYYY/mm/dd';
  legalAge: number;
  isMain?: boolean;
}

// Main/Featured countries (with localized Campari sites)
export const mainCountries: Country[] = [
  { code: 'au', name: 'Australia', format: 'dd/mm/YYYY', legalAge: 18, isMain: true },
  { code: 'at', name: 'Austria', format: 'dd/mm/YYYY', legalAge: 18, isMain: true },
  { code: 'be', name: 'Belgium', format: 'dd/mm/YYYY', legalAge: 18, isMain: true },
  { code: 'br', name: 'Brazil', format: 'dd/mm/YYYY', legalAge: 18, isMain: true },
  { code: 'ca', name: 'Canada', format: 'dd/mm/YYYY', legalAge: 19, isMain: true },
  { code: 'cz', name: 'Czech Republic', format: 'dd/mm/YYYY', legalAge: 18, isMain: true },
  { code: 'dk', name: 'Denmark', format: 'dd/mm/YYYY', legalAge: 18, isMain: true },
  { code: 'fr', name: 'France', format: 'dd/mm/YYYY', legalAge: 18, isMain: true },
  { code: 'de', name: 'Germany', format: 'dd/mm/YYYY', legalAge: 18, isMain: true },
  { code: 'international', name: 'International', format: 'dd/mm/YYYY', legalAge: 18, isMain: true },
  { code: 'ie', name: 'Ireland', format: 'dd/mm/YYYY', legalAge: 18, isMain: true },
  { code: 'it', name: 'Italy', format: 'dd/mm/YYYY', legalAge: 18, isMain: true },
  { code: 'jm', name: 'Jamaica', format: 'dd/mm/YYYY', legalAge: 18, isMain: true },
  { code: 'jp', name: 'Japan', format: 'YYYY/mm/dd', legalAge: 20, isMain: true },
  { code: 'nl', name: 'Netherlands', format: 'dd/mm/YYYY', legalAge: 18, isMain: true },
  { code: 'pl', name: 'Poland', format: 'dd/mm/YYYY', legalAge: 18, isMain: true },
  { code: 'es', name: 'Spain', format: 'dd/mm/YYYY', legalAge: 18, isMain: true },
  { code: 'se', name: 'Sweden', format: 'dd/mm/YYYY', legalAge: 18, isMain: true },
  { code: 'gb', name: 'United Kingdom', format: 'dd/mm/YYYY', legalAge: 18, isMain: true },
  { code: 'us', name: 'United States', format: 'mm/dd/YYYY', legalAge: 21, isMain: true },
];

// Other countries (alphabetical)
export const otherCountries: Country[] = [
  { code: 'af', name: 'Afghanistan', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'al', name: 'Albania', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'dz', name: 'Algeria', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'as', name: 'American Samoa', format: 'dd/mm/YYYY', legalAge: 21 },
  { code: 'ad', name: 'Andorra', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ao', name: 'Angola', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ai', name: 'Anguilla', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ag', name: 'Antigua & Barbuda', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ar', name: 'Argentina', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'am', name: 'Armenia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'aw', name: 'Aruba', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'az', name: 'Azerbaijan', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'bs', name: 'Bahamas', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'bh', name: 'Bahrain', format: 'dd/mm/YYYY', legalAge: 21 },
  { code: 'bd', name: 'Bangladesh', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'bb', name: 'Barbados', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'by', name: 'Belarus', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'bz', name: 'Belize', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'bj', name: 'Benin', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'bm', name: 'Bermuda', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'bt', name: 'Bhutan', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'bo', name: 'Bolivia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ba', name: 'Bosnia & Herzegovina', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'bw', name: 'Botswana', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'vg', name: 'British Virgin Islands', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'bn', name: 'Brunei', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'bg', name: 'Bulgaria', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'bf', name: 'Burkina Faso', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'bi', name: 'Burundi', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'kh', name: 'Cambodia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'cm', name: 'Cameroon', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'cv', name: 'Cape Verde', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ky', name: 'Cayman Islands', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'cf', name: 'Central African Republic', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'td', name: 'Chad', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'cl', name: 'Chile', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'cn', name: 'China', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'cx', name: 'Christmas Island', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'cc', name: 'Cocos (Keeling) Islands', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'co', name: 'Colombia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'km', name: 'Comoros', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'cg', name: 'Congo - Brazzaville', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'cd', name: 'Congo - Kinshasa', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ck', name: 'Cook Islands', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'cr', name: 'Costa Rica', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'hr', name: 'Croatia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'cu', name: 'Cuba', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'cy', name: 'Cyprus', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ci', name: "Côte d'Ivoire", format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'dj', name: 'Djibouti', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'dm', name: 'Dominica', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'do', name: 'Dominican Republic', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ec', name: 'Ecuador', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'eg', name: 'Egypt', format: 'dd/mm/YYYY', legalAge: 21 },
  { code: 'sv', name: 'El Salvador', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'gq', name: 'Equatorial Guinea', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'er', name: 'Eritrea', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ee', name: 'Estonia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'sz', name: 'Eswatini', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'et', name: 'Ethiopia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'fk', name: 'Falkland Islands', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'fo', name: 'Faroe Islands', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'fj', name: 'Fiji', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'fi', name: 'Finland', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'gf', name: 'French Guiana', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'pf', name: 'French Polynesia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ga', name: 'Gabon', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'gm', name: 'Gambia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ge', name: 'Georgia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'gh', name: 'Ghana', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'gi', name: 'Gibraltar', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'gr', name: 'Greece', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'gl', name: 'Greenland', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'gd', name: 'Grenada', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'gp', name: 'Guadeloupe', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'gu', name: 'Guam', format: 'dd/mm/YYYY', legalAge: 21 },
  { code: 'gt', name: 'Guatemala', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'gn', name: 'Guinea', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'gw', name: 'Guinea-Bissau', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'gy', name: 'Guyana', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ht', name: 'Haiti', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'hn', name: 'Honduras', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'hk', name: 'Hong Kong SAR China', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'hu', name: 'Hungary', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'is', name: 'Iceland', format: 'dd/mm/YYYY', legalAge: 20 },
  { code: 'in', name: 'India', format: 'dd/mm/YYYY', legalAge: 21 },
  { code: 'id', name: 'Indonesia', format: 'dd/mm/YYYY', legalAge: 21 },
  { code: 'ir', name: 'Iran', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'iq', name: 'Iraq', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'im', name: 'Isle of Man', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'il', name: 'Israel', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'je', name: 'Jersey', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'jo', name: 'Jordan', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'kz', name: 'Kazakhstan', format: 'dd/mm/YYYY', legalAge: 21 },
  { code: 'ke', name: 'Kenya', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ki', name: 'Kiribati', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'kw', name: 'Kuwait', format: 'dd/mm/YYYY', legalAge: 21 },
  { code: 'kg', name: 'Kyrgyzstan', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'la', name: 'Laos', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'lv', name: 'Latvia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'lb', name: 'Lebanon', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ls', name: 'Lesotho', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'lr', name: 'Liberia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ly', name: 'Libya', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'li', name: 'Liechtenstein', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'lt', name: 'Lithuania', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'lu', name: 'Luxembourg', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'mo', name: 'Macao SAR China', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'mg', name: 'Madagascar', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'mw', name: 'Malawi', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'my', name: 'Malaysia', format: 'dd/mm/YYYY', legalAge: 21 },
  { code: 'mv', name: 'Maldives', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ml', name: 'Mali', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'mt', name: 'Malta', format: 'dd/mm/YYYY', legalAge: 17 },
  { code: 'mh', name: 'Marshall Islands', format: 'dd/mm/YYYY', legalAge: 21 },
  { code: 'mq', name: 'Martinique', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'mr', name: 'Mauritania', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'mu', name: 'Mauritius', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'yt', name: 'Mayotte', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'mx', name: 'Mexico', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'fm', name: 'Micronesia', format: 'dd/mm/YYYY', legalAge: 21 },
  { code: 'md', name: 'Moldova', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'mc', name: 'Monaco', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'mn', name: 'Mongolia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'me', name: 'Montenegro', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ms', name: 'Montserrat', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ma', name: 'Morocco', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'mz', name: 'Mozambique', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'mm', name: 'Myanmar (Burma)', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'na', name: 'Namibia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'nr', name: 'Nauru', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'np', name: 'Nepal', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'nc', name: 'New Caledonia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'nz', name: 'New Zealand', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ni', name: 'Nicaragua', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ne', name: 'Niger', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ng', name: 'Nigeria', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'nu', name: 'Niue', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'nf', name: 'Norfolk Island', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'kp', name: 'North Korea', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'mk', name: 'North Macedonia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'mp', name: 'Northern Mariana Islands', format: 'dd/mm/YYYY', legalAge: 21 },
  { code: 'no', name: 'Norway', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'om', name: 'Oman', format: 'dd/mm/YYYY', legalAge: 21 },
  { code: 'pk', name: 'Pakistan', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'pw', name: 'Palau', format: 'dd/mm/YYYY', legalAge: 21 },
  { code: 'ps', name: 'Palestinian Territories', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'pa', name: 'Panama', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'pg', name: 'Papua New Guinea', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'py', name: 'Paraguay', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'pe', name: 'Peru', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ph', name: 'Philippines', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'pt', name: 'Portugal', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'pr', name: 'Puerto Rico', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'qa', name: 'Qatar', format: 'dd/mm/YYYY', legalAge: 21 },
  { code: 'ro', name: 'Romania', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ru', name: 'Russia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'rw', name: 'Rwanda', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 're', name: 'Réunion', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ws', name: 'Samoa', format: 'dd/mm/YYYY', legalAge: 21 },
  { code: 'sm', name: 'San Marino', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'sa', name: 'Saudi Arabia', format: 'dd/mm/YYYY', legalAge: 21 },
  { code: 'sn', name: 'Senegal', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'rs', name: 'Serbia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'sc', name: 'Seychelles', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'sl', name: 'Sierra Leone', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'sg', name: 'Singapore', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'sk', name: 'Slovakia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'si', name: 'Slovenia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'sb', name: 'Solomon Islands', format: 'dd/mm/YYYY', legalAge: 21 },
  { code: 'so', name: 'Somalia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'za', name: 'South Africa', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'kr', name: 'South Korea', format: 'dd/mm/YYYY', legalAge: 19 },
  { code: 'lk', name: 'Sri Lanka', format: 'dd/mm/YYYY', legalAge: 21 },
  { code: 'bl', name: 'St. Barthélemy', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'sh', name: 'St. Helena', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'kn', name: 'St. Kitts & Nevis', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'lc', name: 'St. Lucia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'pm', name: 'St. Pierre & Miquelon', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'vc', name: 'St. Vincent & Grenadines', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'sd', name: 'Sudan', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'sr', name: 'Suriname', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ch', name: 'Switzerland', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'sy', name: 'Syria', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'st', name: 'São Tomé & Príncipe', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'tw', name: 'Taiwan', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'tj', name: 'Tajikistan', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'tz', name: 'Tanzania', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'th', name: 'Thailand', format: 'dd/mm/YYYY', legalAge: 20 },
  { code: 'tl', name: 'Timor-Leste', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'tg', name: 'Togo', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'tk', name: 'Tokelau', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'to', name: 'Tonga', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'tt', name: 'Trinidad & Tobago', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'tn', name: 'Tunisia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'tr', name: 'Turkey', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'tm', name: 'Turkmenistan', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'tc', name: 'Turks & Caicos Islands', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'tv', name: 'Tuvalu', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'vi', name: 'U.S. Virgin Islands', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ug', name: 'Uganda', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ua', name: 'Ukraine', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ae', name: 'United Arab Emirates', format: 'dd/mm/YYYY', legalAge: 21 },
  { code: 'uy', name: 'Uruguay', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'uz', name: 'Uzbekistan', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'vu', name: 'Vanuatu', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'va', name: 'Vatican City', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 've', name: 'Venezuela', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'vn', name: 'Vietnam', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'wf', name: 'Wallis & Futuna', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'eh', name: 'Western Sahara', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'ye', name: 'Yemen', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'zm', name: 'Zambia', format: 'dd/mm/YYYY', legalAge: 18 },
  { code: 'zw', name: 'Zimbabwe', format: 'dd/mm/YYYY', legalAge: 18 },
];

// All countries combined
export const allCountries: Country[] = [...mainCountries, ...otherCountries];

// Get country by code
export function getCountryByCode(code: string): Country | undefined {
  return allCountries.find(c => c.code === code);
}

// Get date format for country
export function getDateFormat(countryCode: string): 'dd/mm/YYYY' | 'mm/dd/YYYY' | 'YYYY/mm/dd' {
  const country = getCountryByCode(countryCode);
  return country?.format || 'dd/mm/YYYY';
}

// Get legal drinking age for country
export function getLegalAge(countryCode: string): number {
  const country = getCountryByCode(countryCode);
  return country?.legalAge || 18;
}

// Validate age against country's legal drinking age
export function validateAge(
  day: number,
  month: number,
  year: number,
  countryCode: string
): boolean {
  const legalAge = getLegalAge(countryCode);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age >= legalAge;
}

// Parse date string based on country format
export function parseDateByFormat(
  value1: string,
  value2: string,
  value3: string,
  format: 'dd/mm/YYYY' | 'mm/dd/YYYY' | 'YYYY/mm/dd'
): { day: number; month: number; year: number } {
  switch (format) {
    case 'mm/dd/YYYY':
      return { month: parseInt(value1), day: parseInt(value2), year: parseInt(value3) };
    case 'YYYY/mm/dd':
      return { year: parseInt(value1), month: parseInt(value2), day: parseInt(value3) };
    case 'dd/mm/YYYY':
    default:
      return { day: parseInt(value1), month: parseInt(value2), year: parseInt(value3) };
  }
}

// Get placeholder based on format position
export function getPlaceholders(format: 'dd/mm/YYYY' | 'mm/dd/YYYY' | 'YYYY/mm/dd'): string[] {
  switch (format) {
    case 'mm/dd/YYYY':
      return ['MM', 'DD', 'YYYY'];
    case 'YYYY/mm/dd':
      return ['YYYY', 'MM', 'DD'];
    case 'dd/mm/YYYY':
    default:
      return ['DD', 'MM', 'YYYY'];
  }
}

// Caribbean countries for entry form dropdown
export const caribbeanCountries = [
  'Jamaica',
  'Trinidad & Tobago',
  'Barbados',
  'Bahamas',
  'Cayman Islands',
  'Turks & Caicos Islands',
  'Guyana',
  'Suriname',
  'St. Lucia',
  'Grenada',
  'Antigua & Barbuda',
  'St. Kitts & Nevis',
  'Dominica',
  'St. Vincent & Grenadines',
  'British Virgin Islands',
  'U.S. Virgin Islands',
  'Anguilla',
  'Montserrat',
  'Aruba',
  'Curaçao',
  'Haiti',
  'Dominican Republic',
  'Puerto Rico',
  'Cuba',
  'Belize',
  'Other Caribbean',
];

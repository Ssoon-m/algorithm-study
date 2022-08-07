const obj = {
  ko: {
    hello1: 'kvalue1',
    hello2: 'kvalue2',
  },
  en: {
    hello1: 'evalue1',
    hello2: 'evalue2',
  },
  ja: {
    hello1: 'jvalue1',
    hello2: 'jvalue2',
  },
  zh: {
    hello1: 'zvalue1',
    hello2: 'zvalue2',
  },
};

// { ko : '' , en : '' , ja : '' , zh : ''}

let upload = {};
for (const [lang, data] of Object.entries(obj)) {
  for (const [key, value] of Object.entries(data)) {
    if (!upload[key]) upload[key] = {};
    upload[key][lang] = value;
  }
}
console.log('upload', upload);

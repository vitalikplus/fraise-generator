const objectTypes = {
  Pronoun: "pronoun",
  Location: "location",
};

const verbs = [
  {
    forms: {
      first: "love",
      secord: "loved",
      third: "loved",
    },
    objectType: objectTypes.Pronoun, 
  },
  {
    forms: {
      first: "live",
      secord: "lived",
      third: "lived",     
    },
    objectType: objectTypes.Location
  }  
]

const objects = [{
  text: "me",
  form: 1,
  single: true,
  type: objectTypes.Pronoun,
}, {
  text: "her",
  form: 3,
  gender: "women",
  single: true,
  type: objectTypes.Pronoun,
}, {
  text: "in Kyiv",
  type: objectTypes.Location,
}];

const subjects = [{
  text: "I",
  form: 1,
  single: true,
}, {
  text: "you",
  form: 2,
  single: true,
}, {
  text: "he",
  form: 3,
  single: true,
}, {
  text: "she",
  form: 3,
  single: true,
}, {
  text: "we",
  form: 1,
  single: false,
}, {
  text: "you",
  form: 2,
  single: false,
}, {
  text: "they",
  form: 3,
  single: false,
}];

const sentenceTypes = [
  "positiveStatement",
  "generalQuestion",
  "negativeStatement",
  "negativeQuestion",
];

export function generateEnglishPresentSimple(
  // subjects,
  // verbs,
  // objects,
  // sentenceTypes,
  // tenseTypes,
  // tenseTimes,
) {
  const fraises = [];
  const sentenceType = sentenceTypes[1];
  let id = 0;
  verbs.forEach(verb => {
    subjects.forEach(subject => {
      const objectsByType = objects.filter(object => (
        object.type === verb.objectType
      ));
      objectsByType.forEach(object => {
        const fraise = {
          id: id++,
          sentenceType,
          tenseType: "simple",
          tenseTime: "present",
          English: "",
          Russian: "",
        }
        if (sentenceType === "positiveStatement") {
          fraise.English = makePositiveStatement(subject, verb, object);          
          fraise.Russian = "toRussian: " + makePositiveStatement(subject, verb, object);          
        } else if (sentenceType === "generalQuestion") {
          fraise.English = makeGeneralQuestion(subject, verb, object);
          fraise.Russian = "toRussian: " + makeGeneralQuestion(subject, verb, object);
        } else if (sentenceType === "negativeStatement") {
          fraise.English = makeNegativeStatement(subject, verb, object);
          fraise.Russian = "toRussian: " + makeNegativeStatement(subject, verb, object);
        }
        fraises.push(fraise);
      });
    });
  })
  return fraises;  
}

function makePositiveStatement(subject, verb, object) {
  if (subject.form === 3 && subject.single) {
    return `${subject.text} ${verb.forms.first}s ${object.text}`;
  } else {
    return `${subject.text} ${verb.forms.first} ${object.text}`;
  }
}

function makeGeneralQuestion(subject, verb, object) {
  if (subject.form === 3 && subject.single) {
    return `Does ${subject.text} ${verb.forms.first} ${object.text}?`;
  } else {
    return `Do ${subject.text} ${verb.forms.first} ${object.text}?`;
  }
}

function makeNegativeStatement(subject, verb, object) {
  if (subject.form === 3 && subject.single) {
    return `${subject.text} does not ${verb.forms.first} ${object.text}`;
  } else {
    return `${subject.text} do not ${verb.forms.first} ${object.text}`;
  }
}
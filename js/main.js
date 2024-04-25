let myArrayArabic = [
  "أ",
  "ب",
  "ت",
  "ث",
  "ج",
  "ح",
  "خ",
  "د",
  "ذ",
  "ر",
  "ز",
  "س",
  "ش",
  "ص",
  "ض",
  "ط",
  "ظ",
  "ع",
  "غ",
  "ف",
  "ق",
  "ك",
  "ل",
  "م",
  "ن",
  "ه",
  "و",
  "ي",
  "آ",
  "ة",
  "ا",
  "ى",
];

//

const islamicWordsWithQuestions = [
  {
    word: "الله",
    question: "من هو الإله الوحيد في الإسلام؟",
  },
  {
    word: "محمد",
    question: "من هو الرسول الذي أُرسل لتبليغ الإسلام؟",
  },
  {
    word: "قرآن",
    question: "ما هو الكتاب المقدس في الإسلام؟",
  },
  {
    word: "صلاة",
    question: "ما هي العبادة التي يقوم بها المسلمون خمس مرات في اليوم؟",
  },
  {
    word: "زكاة",
    question:
      "ما هو الواجب الاجتماعي في الإسلام الذي يشمل الإعانة المالية للفقراء؟",
  },
  {
    word: "صوم",
    question: "ما هي العبادة التي يقوم بها المسلمون خلال شهر رمضان؟",
  },
  {
    word: "حج",
    question:
      "ما هو الركن الخامس من أركان الإسلام الذي يشمل الزيارة إلى مكة المدينة؟",
  },
  {
    word: "مسجد",
    question: "ما هو المكان الذي يُستخدم لأداء الصلوات والعبادات في الإسلام؟",
  },
  {
    word: "قبلة",
    question: "ما هو الاتجاه الذي يتوجه إليه المسلمون خلال الصلاة؟",
  },
  {
    word: "شهادة",
    question: "ما هي العبارة التي يجب على المسلمين قولها لاعتناق الإسلام؟",
  },
  {
    word: "نبي",
    question: "من هم الأشخاص الذين تم اختيارهم من قبل الله لنقل رسالاته؟",
  },
  {
    word: "يوم",
    question: "ما هو اليوم الذي يعتبر يوم عبادة واجتماع في المساجد؟",
  },
  {
    word: "سنة",
    question: "ما هي الأحاديث والتعاليم التي نقلت عن النبي محمد؟",
  },
  {
    word: "صحابي",
    question:
      "ما هو المصطلح الذي يشير إلى الأشخاص الذين عاشوا في عهد النبي وساعدوه؟",
  },
  {
    word: "أمة",
    question: "ما هو المصطلح الذي يشير إلى جماعة المسلمين ككل؟",
  },
  {
    word: "سورة",
    question: "ما هي الآيات التي تشكل كتب القرآن الكريم؟",
  },
  {
    word: "صلاح",
    question:
      "ما هي الأفعال والسلوكيات التي تسعى إلى تحقيقها الشريعة الإسلامية؟",
  },
  {
    word: "محمد",
    question: "من هو الرسول الذي أُرسل لتبليغ الإسلام؟",
  },
  {
    word: "إيمان",
    question: "ما هو المفهوم الديني الذي يعني الإيمان بالله ورسله؟",
  },
  {
    word: "يوم القيامة",
    question: "ما هو اليوم الذي سيحاسب فيه البشر على أعمالهم؟",
  },
  {
    word: "جهنم",
    question: "ما هو المصطلح الذي يشير إلى العذاب الناري في الآخرة؟",
  },
  {
    word: "جنة",
    question: "ما هو المصطلح الذي يشير إلى الجائزة والمكافأة في الآخرة؟",
  },
  {
    word: "إسلام",
    question: "ما هو اسم الديانة التي يعتنقها المسلمون؟",
  },
  {
    word: "صحابة",
    question:
      "ما هو المصطلح الذي يشير إلى الأشخاص الذين عاشوا في عهد النبي وساعدوه؟",
  },
  {
    word: "نبوة",
    question: "ما هو المفهوم الديني الذي يعني الرسالة النبوية والوحي؟",
  },
  {
    word: "كعبة",
    question: "ما هو المكان المقدس الذي يتجه إليه المسلمون خلال الصلاة؟",
  },
  {
    word: "قادة",
    question: "ما هو المصطلح الذي يشير إلى الزعماء الدينيين والدعاة؟",
  },
  {
    word: "صفا",
    question: "ما هي الجبلين اللذين يجب الجري بينهما خلال الحج؟",
  },
  {
    word: "عرفات",
    question: "ما هو الموقع الذي يتوجه إليه المسلمون خلال يوم عرفة خلال الحج؟",
  },
  {
    word: "ميقات",
    question: "ما هي المواقع المعينة التي يُحرم على الحجاج تجاوزها؟",
  },
  {
    word: "توبة",
    question: "ما هو المفهوم الديني الذي يعني الرجوع إلى الله وترك الخطايا؟",
  },
  {
    word: "قدر",
    question: "ما هو المفهوم الديني الذي يعني القدر والمصير؟",
  },
  {
    word: "جمعة",
    question: "ما هو اليوم الذي يقام فيه صلاة الجمعة في المساجد؟",
  },
  {
    word: "خطبة",
    question: "ما هو المصطلح الذي يشير إلى الخطبة التي تُلقى في صلاة الجمعة؟",
  },
  {
    word: "عيد",
    question:
      "ما هو الاحتفال الديني الذي يشمل الصلاة والاحتفال بالفطر والأضحية؟",
  },
  {
    word: "شيطان",
    question: "من هم الكائنات الشريرة التي تحاول إغواء البشر في الإسلام؟",
  },
  {
    word: "حرام",
    question: "ما هو المفهوم الديني الذي يعني الأمور المحظورة في الإسلام؟",
  },
  {
    word: "حلال",
    question:
      "ما هو المفهوم الديني الذي يعني الأمور المباحة والمسموحة في الإسلام؟",
  },
  {
    word: "شريعة",
    question: "ما هو المفهوم الديني الذي يعني القوانين والتعاليم الإسلامية؟",
  },
  {
    word: "معجزة",
    question:
      "ما هي الأحداث الخارقة للطبيعة التي قام بها الأنبياء بإرادة الله؟",
  },
  {
    word: "ملائكة",
    question: "من هم الكائنات السماوية النقية التي تنفذ أوامر الله؟",
  },
  {
    word: "عقيدة",
    question:
      "ما هو المفهوم الديني الذي يعني الإيمان بالله ورسله والقدر واليوم الآخر؟",
  },
  {
    word: "توراة",
    question: "ما هو الكتاب السماوي الذي نزل على النبي موسى في الإسلام؟",
  },
  {
    word: "إبراهيم",
    question: "من هو النبي الذي بنى الكعبة المشرفة مع ابنه إسماعيل في الإسلام؟",
  },
  {
    word: "نوح",
    question:
      "من هو النبي الذي بنى السفينة ونجا من الطوفان مع أنواع من الحيوانات في الإسلام؟",
  },
  {
    word: "إسحاق",
    question: "من هو النبي الذي ولد لإبراهيم وسارة وأصبح نبياً في الإسلام؟",
  },
  {
    word: "يعقوب",
    question: "من هو النبي الذي كان ابن إسحاق وأبو إسرائيل في الإسلام؟",
  },
  {
    word: "يوسف",
    question: "من هو النبي الذي عاش في مصر وأصبح وزيراً في الإسلام؟",
  },
  {
    word: "داود",
    question: "من هو النبي الذي كان ملكاً وشاعراً في الإسلام؟",
  },
  {
    word: "سليمان",
    question: "من هو النبي الذي ورث مملكة ضخمة وأصبح ملكاً حكيماً في الإسلام؟",
  },
  {
    word: "أيوب",
    question: "من هو النبي الذي ابتُلي بالمرض وصبر على الألم في الإسلام؟",
  },
  {
    word: "يونس",
    question: "من هو النبي الذي أُلقي في بطن الحوت وبعد ذلك أُخرج في الإسلام؟",
  },
  {
    word: "زكريا",
    question: "من هو النبي الذي كان عابدًا وراهبًا وأنجب ابنًا في الإسلام؟",
  },
  {
    word: "يحيى",
    question: "من هو النبي الذي كان ابن زكريا وكان نبياً في الإسلام؟",
  },
  {
    word: "عيسى",
    question: "من هو النبي الذي وُلد بدون أب وكان نبياً في الإسلام؟",
  },
  {
    word: "محمد",
    question: "من هو النبي الذي أُرسل لتبليغ الإسلام وهو نبي الإسلام؟",
  },
  {
    word: "خليل",
    question: "ما هو المصطلح الذي يشير إلى النبي إبراهيم كونه صديق الله؟",
  },
  {
    word: "رفيق",
    question: "ما هو المصطلح الذي يشير إلى الصديق والشريك المؤمن في الإسلام؟",
  },
  {
    word: "مسلم",
    question: "ما هو المصطلح الذي يشير إلى الشخص الذي يعتنق الإسلام ويسلم لله؟",
  },
  {
    word: "مؤمن",
    question:
      "ما هو المصطلح الذي يشير إلى الشخص الذي يؤمن بالله ورسله في الإسلام؟",
  },
  {
    word: "كفارة",
    question: "ما هو الفعل الديني الذي يجب على المسلم أداؤه لتكفير الذنوب؟",
  },
  {
    word: "صدقة",
    question:
      "ما هو الواجب الاجتماعي في الإسلام الذي يشمل الإعانة المالية للفقراء؟",
  },
  {
    word: "معجزة",
    question:
      "ما هو المصطلح الذي يشير إلى الأحداث الخارقة للطبيعة التي قام بها الأنبياء بإرادة الله؟",
  },
  {
    word: "قرآن",
    question: "ما هو الكتاب المقدس في الإسلام؟",
  },
  {
    word: "صلاة",
    question: "ما هي العبادة التي يقوم بها المسلمون خمس مرات في اليوم؟",
  },
  {
    word: "زكاة",
    question:
      "ما هو الواجب الاجتماعي في الإسلام الذي يشمل الإعانة المالية للفقراء؟",
  },
  {
    word: "صوم",
    question: "ما هي العبادة التي يقوم بها المسلمون خلال شهر رمضان؟",
  },
  {
    word: "حج",
    question:
      "ما هو الركن الخامس من أركان الإسلام الذي يشمل الزيارة إلى مكة المدينة؟",
  },
  {
    word: "جهاد",
    question:
      "ما هو المصطلح الذي يشير إلى الجهد والتضحية في سبيل الله في الإسلام؟",
  },
  {
    word: "شهادة",
    question: "ما هو العبارة التي يجب على المسلمين قولها لاعتناق الإسلام؟",
  },
  {
    word: "قبلة",
    question: "ما هو الاتجاه الذي يتوجه إليه المسلمون خلال الصلاة؟",
  },
  {
    word: "سنة",
    question: "ما هي الأحاديث والتعاليم التي نقلت عن النبي محمد؟",
  },
  {
    word: "صحابي",
    question:
      "ما هو المصطلح الذي يشير إلى الأشخاص الذين عاشوا في عهد النبي وساعدوه؟",
  },
  {
    word: "أمة",
    question: "ما هو المصطلح الذي يشير إلى جماعة المسلمين ككل؟",
  },
  {
    word: "سورة",
    question: "ما هي الآيات التي تشكل كتب القرآن الكريم؟",
  },
  {
    word: "صلاح",
    question:
      "ما هو الأفعال والسلوكيات التي تسعى إلى تحقيقها الشريعة الإسلامية؟",
  },
];

console.log(islamicWordsWithQuestions.length);

const min = 10; // The minimum value (inclusive)
const max = 75; // The maximum value (exclusive)

// Generate a random number between min (inclusive) and max (exclusive)

// add elements into third column of the row :

let myThirdColumn = document.querySelector(".last_col");

for (let i = 0; i < myArrayArabic.length; i++) {
  let mySmallBox = document.createElement("div");
  mySmallBox.classList.add("smallBox");
  mySmallBox.append(myArrayArabic[i]);
  myThirdColumn.append(mySmallBox);
  mySmallBox.id = `box_${i}`;

  if (i % 4 === 0) {
    mySmallBox.style.order = `${i + 3}`;
  } else if (i % 4 === 1) {
    mySmallBox.style.order = `${i + 1}`;
  } else if (i % 4 === 2) {
    mySmallBox.style.order = `${i - 1}`;
  } else if (i % 4 === 3) {
    mySmallBox.style.order = `${i - 3}`;
  }
}

const randomNum = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNum);

// retrive div answer
let myAnswer = document.querySelector(".answer");
myAnswer.style.cssText += `  grid-template-columns: repeat(${islamicWordsWithQuestions[randomNum].word.length}, 8%); justify-content: center !important;`;

// mySmallBox.append(myArrayArabic[i]); must be dynamique onclick
for (let i = 0; i < islamicWordsWithQuestions[randomNum].word.length; i++) {
  let mySmallBox = document.createElement("div");
  mySmallBox.classList.add("smallBox");
  myAnswer.append(mySmallBox);
}

let questionDiv = document.createElement("div");
questionDiv.classList.add("row");
questionDiv.classList.add("text-right");
questionDiv.classList.add("pr-2");
questionDiv.append(islamicWordsWithQuestions[randomNum].question);

document.querySelector(".first_inrow").append(questionDiv);

//   mySmallBox.append(islamicWordsWithQuestions[randomNum].word);
//
// get the answers and the characters in variables :
let mySmallBoxesAnswers = document.querySelectorAll(".answer .smallBox");
console.log(mySmallBoxesAnswers);

let mySmallBoxes = document.querySelectorAll(".all_char .smallBox");
console.log(mySmallBoxes);

//  stage of images :

let imagesDiv = Array.from(document.querySelectorAll(".imagesDiv img"));

console.log(imagesDiv);

let word = islamicWordsWithQuestions[randomNum].word;

let answerDiv = document.querySelector(".answer");

let cheackValue = 0;
//
//
//
//
//
let success = document.querySelector(".cases .congr");
let field = document.querySelector(".cases .field");

// Get the computed styles for both elements

for (let i = 0; i < mySmallBoxes.length; i++) {
  mySmallBoxes[i].onclick = (e) => {
    let successVisibility = window.getComputedStyle(success).visibility;
    let fieldVisibility = window.getComputedStyle(field).visibility;
    let cheackHidden =
      successVisibility == "hidden" && fieldVisibility == "hidden";
    console.log("GGGGG Hello this is the cheackHidden : " + cheackHidden);
    // end case success

    let cheak = false;

    if (!cheackHidden) {
      return;
    }
    const reverseWord = word.split("").reverse().join("");

    for (let j = word.length - 1; j > -1; j--) {
      if (
        mySmallBoxesAnswers[j].innerHTML == "" &&
        mySmallBoxes[i].innerHTML == reverseWord[j]
      ) {
        console.log("the condition is true , and this is the value of j  " + j);
        mySmallBoxesAnswers[j].innerHTML = mySmallBoxes[i].innerHTML;

        for (let k = word.length - 1; k > -1; k--) {
          console.log("this is the value of k " + k);
          if (mySmallBoxes[i].innerHTML == reverseWord[k] && k == j) {
            console.log("element it is true ");
            cheak = true;
            break;
          }
        }
        break;
      }
    }

    if (!cheak) {
      cheackValue++;
    }

    if (cheackValue == 8) {
      console.log("NOOOOOOOOOOoo");

      field.style.visibility = "visible";
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }

    // case success

    // Hello
    let cheackYes = 0;
    for (let m = 0; m < mySmallBoxesAnswers.length; m++) {
      if (cheackValue < 8 && mySmallBoxesAnswers[m].innerHTML != "") {
        cheackYes++;
      }
    }

    console.log(cheackYes);

    if (cheackYes == word.length) {
      console.log("Yeeesssss!!!!!");
      success.style.visibility = "visible";
      // target the re-frech page :

      let numberEnter = 10;
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }

    console.log(cheak);

    // second loop
    // main_loop: for (let j = 0; j < word.length; j++) {}

    let last_index_divImages = 100;

    cheackYes = 0;
    for (let m = 0; m < mySmallBoxesAnswers.length; m++) {
      if (cheackValue < 7 && mySmallBoxesAnswers[m].innerHTML != "") {
        cheackYes++;
      }
    }
    console.log("the cheackYes is : " + cheackYes);
    console.log("the cheak error visible  is : " + cheak);
    if (!cheak) {
      for (let j = imagesDiv.length - 1; j > 0; j--) {
        if (imagesDiv[j].style.display != "none" && cheackYes < word.length) {
          imagesDiv[j].style.display = "none";
          console.log("add none class");
          //   last_index_divImages = j;
          //   console.log(last_index_divImages);

          break;
        }
      }
    }

    // resest the answer div after limits :

    if (last_index_divImages - word.length <= 0) {
      for (let z = 0; z < word.length; z++) {
        mySmallBoxesAnswers[z].innerHTML = "";
      }
      //   let new_index = 0;
    }
  };
}

for (let j = 0; j < word.length; j++) {
  console.log(word[j]);
}

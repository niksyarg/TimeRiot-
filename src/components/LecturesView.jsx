import React, { useState, useEffect } from 'react';

export default function LecturesView({ user, role, onLogin, onLogout }) {
  const initialLectures = [
   {
  id: 1,
  title: "ლექცია 1: ქვის ხანა და ბრინჯაო-ადრე რკინის ხანა საქართველოში",
  description: "ამ ლექციაში განვიხილავთ ქვის ხანის პერიოდებს (პალეოლითი, მეზოლითი, ნეოლითი), დმანისის უძველეს ნაშთებს, მატრიარქატიდან პატრიარქატზე გადასვლას, ნეოლითურ რევოლუციასა და ბრინჯაო-რკინის ხანის კულტურებს საქართველოში.",
  videoUrl: "", 
  quizzes: [
    {
      question: "საქართველოს ტერიტორიაზე სად არის აღმოჩენილი პირველყოფილი ადამიანის ყველაზე ძველი ნაშთები?",
      options: ["დმანისი", "მცხეთა", "თრიალეთი", "კოლხეთი"],
      correct: 0
    },
    {
      question: "რომელ ეპოქაში ჩაყარა საფუძველი მიწათმოქმედებამ და მესაქონლეობამ (ნეოლითური რევოლუცია)?",
      options: ["ნეოლითი", "პალეოლითი", "მეზოლითი", "ადრე ბრინჯაო"],
      correct: 0
    },
    {
      question: "რომელ კულტურას უკავშირდება ადრე ბრინჯაოს ხანა (ძვ.წ. III ათასწლეულის დასაწყისიდან)?",
      options: ["მტკვარ-არაქსის კულტურა", "თრიალეთური კულტურა", "კოლხური კულტურა", "იბერიული კულტურა"],
      correct: 0
    },
    {
      question: "სად აღმოჩნდა პირველად ყორღანული სამარხები, რის გამოც მას შესაბამისი კულტურაც ეწოდა?",
      options: ["თრიალეთი", "დმანისი", "მცხეთა", "კოლხეთი"],
      correct: 0
    }
  ]
},
   {
  id: 2,
  title: "ლექცია 2: შუმერი და ბაბილონი",
  description: "ამ ლექციაში განვიხილავთ მესოპოტამიის (შუამდინარეთის) ცივილიზაციას, შუმერთა გამოგონებებს და ლურსმულ დამწერლობას, აქადის სამეფოს, ხამურაბის კანონებსა და ნაბუქოდონასორის მიერ აშენებულ ბაბილონის საოცრებებს.",
  videoUrl: "", 
  quizzes: [
    {
      question: "რა ეწოდებოდა შუმერთა მიერ შექმნილ დამწერლობას?",
      options: ["ლურსმული / პიქტოგრაფიული", "ფინიკიური", "არამეული", "ასომთავრული"],
      correct: 0
    },
    {
      question: "მსოფლიო ისტორიაში რომელ ცნობილ მეფეს ეკუთვნის 282 მუხლისგან შემდგარი კანონთა კრებული?",
      options: ["ხამურაბი", "სარგონი", "ნაბუქოდონასარი", "კიროს II"],
      correct: 0
    },
    {
      question: "რომელ მდინარეებს შორის მდებარეობდა შუამდინარეთი (მესოპოტამია)?",
      options: ["ტიგროსი და ევფრატი", "მტკვარი და არაქსი", "იორდანია და ნილოსი", "დუნაი და ვოლგა"],
      correct: 0
    },
    {
      question: "როგორ ეწოდებოდა შუმერების მიერ აგებულ მრავალსაფეხურიან საკულტო ტაძრებს?",
      options: ["ზიკურატები", "ყორღანები", "არმაზები", "პითონები"],
      correct: 0
    }
  ]
},
{
  id: 3,
  title: "ლექცია 3: ძველი ეგვიპტე",
  description: "ამ ლექციაში განვიხილავთ მდინარე ნილოსის როლს ეგვიპტის ცივილიზაციაში, პირამიდების ეპოქას, ჰიქსოსთა შემოსევას, თუთმოს III-ის ლაშქრობებს, ეხნატონის მიერ შემოღებულ ერთღმერთიანობას (მონოთეიზმი) და ხეთებთან გამართულ ქადეშის ბრძოლას.",
  videoUrl: "", 
  quizzes: [
    {
      question: "ვინ უწოდა ეგვიპტეს „ნილოსის საჩუქარი“ (ან ხობი)?",
      options: ["ჰეროდოტე", "მენესი", "ხამურაბი", "კიროს II"],
      correct: 0
    },
    {
      question: "რომელმა ფარაონმა და მისმა მეუღლემ ნეფერტიტიმ სცადა მონოთეიზმის (ერთღმერთიანობის) შემოღება და მზის დისკოს - ატონის თაყვანისცემა?",
      options: ["ეხნატონი (ამენჰოტეპ IV)", "თუთმოს III", "რამსეს II", "ჯოშერი"],
      correct: 0
    },
    {
      question: "რომელ წელს გაიმართა ცნობილი ქადეშის ბრძოლა ეგვიპტესა და ხეთებს შორის?",
      options: ["ძვ.წ. 1274 წ.", "ძვ.წ. 1353 წ.", "ძვ.წ. 1490 წ.", "ძვ.წ. 2600 წ."],
      correct: 0
    },
    {
      question: "ვინ არიან ძველი ეგვიპტელების პირდაპირ მემკვიდრეებად მიჩნეული დღევანდელ დღეს?",
      options: ["კოპტები", "არაბები", "ხეთები", "ჰიქსოსები"],
      correct: 0
    }
  ]
},
{
  id: 4,
  title: "ლექცია 4: ხეთების სამეფო",
  description: "ამ ლექციაში განვიხილავთ ხეთების ტომების მიერ მცირე აზიაში შექმნილ სამეფოს, კუსარასა და ხატუშას როლს, საბრძოლო ეტლების გამოყენებას, „ათასი ღვთაების ქვეყანას“ და იმპერიის დაცემას ძვ.წ. 1200 წლისთვის.",
  videoUrl: "", 
  quizzes: [
    {
      question: "რომელ ქვეყანას უწოდებდნენ „ათასი ღვთაების ქვეყანას“?",
      options: ["ხეთების სამეფო", "ძველი ეგვიპტე", "ბაბილონი", "შუმერი"],
      correct: 0
    },
    {
      question: "სად გადაიტანა დედაქალაქი კუსარას მეფე ხატუსილიმ?",
      options: ["ხათუშა", "მემფისი", "ბაბილონი", "მცხეთა"],
      correct: 0
    },
    {
      question: "რომელ ცნობილ სახელმწიფოსთან ჰქონდათ ხეთებს გამუდმებული ომები სირიის გამო (მათ შორის ქადეშის ბრძოლა)?",
      options: ["ეგვიპტე", "ასურეთი", "სპარსეთი", "ურარტუ"],
      correct: 0
    },
    {
      question: "დაახლოებით რომელ წელს შეწყვიტა ხეთების იმპერიამ არსებობა შიდა დაპირისპირებისა და „ზღვის ხალხების“ შემოსევების შედეგად?",
      options: ["ძვ.წ. 1200 წ.", "ძვ.წ. 1274 წ.", "ძვ.წ. 1353 წ.", "ძვ.წ. 1490 წ."],
      correct: 0
    }
  ]
},
{
  id: 5,
  title: "ლექცია 5: ასურეთის სამეფო",
  description: "ამ ლექციაში განვიხილავთ ჩრდილოეთ მესოპოტამიაში მდებარე ასურეთის სამეფოს ჩამოყალიბებას, ტიგლატფილესერ I-ისა და ტიგლატფილესერ III-ის რეფორმებს, დედაქალაქის ნინევიაში გადატანას და ასურეთის იმპერიის დაცემას ძვ.წ. 612 წელს.",
  videoUrl: "", 
  quizzes: [
    {
      question: "სად მდებარეობდა ასურეთის სამეფო თავისი ისტორიის დასაწყისში?",
      options: ["მდინარე ტიგროსის შუა წელზე (ჩრდილოეთ მესოპოტამია)", "ნილოსის დელტაში", "მცირე აზიაში", "ევფრატის სამხრეთით"],
      correct: 0
    },
    {
      question: "ვინ გაატარა მნიშვნელოვანი ადმინისტრაციული და სამხედრო რეფორმები ძვ.წ. VIII საუკუნეში, რამაც ასურეთი ხელახლა გააძლიერა?",
      options: ["ტიგლატფილესერ III", "ტიგლატფილესერ I", "ხამურაბი", "ნაბუქოდონასარი"],
      correct: 0
    },
    {
      question: "რომელ ქალაქში გადაიტანა ასურეთის მეფემ სამეფოს დედაქალაქი?",
      options: ["ნინევია", "ბაბილონი", "კუსარა", "მემფისი"],
      correct: 0
    },
    {
      question: "რომელ წელს აიღეს მოკავშირეებმა (ბაბილონმა და მიდიამ) ასურეთის დედაქალაქი ნინევია?",
      options: ["ძვ.წ. 612 წ.", "ძვ.წ. 1200 წ.", "ძვ.წ. 1274 წ.", "ძვ.წ. 539 წ."],
      correct: 0
    }
  ]
},
{
  id: 6,
  title: "ლექცია 6: ურარტუს სამეფო",
  description: "ამ ლექციაში განვიხილავთ ვანისა და ურმიის ტბების მიდამოებში წარმოქმნილ ურარტუს სამეფოს, დედაქალაქ ტუშპას, მეფეების (მენუა, არგიშტი I, სარდური II) ლაშქრობებს სამხრეთ კავკასიაში და სახელმწიფოს დაცემას მიდიელთა მიერ ძვ.წ. 590 წელს.",
  videoUrl: "", 
  quizzes: [
    {
      question: "სად მდებარეობდა და ჩამოყალიბდა ურარტუს სახელმწიფო ძვ.წ. IX საუკუნეში?",
      options: ["ვანისა და ურმიის ტბების მიდამოებში", "ნილოსის დელტაში", "შუამდინარეთის სამხრეთში", "მცირე აზიის დასავლეთით"],
      correct: 0
    },
    {
      question: "რა ერქვა ურარტუს სამეფოს დედაქალაქს?",
      options: ["ტუშფა", "ნინევია", "ბაბილონი", "ხათუშა"],
      correct: 0
    },
    {
      question: "ვისგან შეითვისეს და გაამარტივეს ურარტუელებმა ლურსმული დამწერლობა?",
      options: ["ასურელებისგან", "ეგვიპტელებისგან", "ხეთებისგან", "შუმერებისგან"],
      correct: 0
    },
    {
      question: "რომელ წელს დაეცა ურარტუს სახელმწიფო მიდიელთა შემოსევების შედეგად?",
      options: ["ძვ.წ. 590 წ.", "ძვ.წ. 612 წ.", "ძვ.წ. 1200 წ.", "ძვ.წ. 1274 წ."],
      correct: 0
    }
  ]
},
{
  id: 7,
  title: "ლექცია 7: დიაოხი და კოლხა",
  description: "ამ ლექციაში განვიხილავთ ქართველ ტომთა პირველ სახელმწიფო გაერთიანებებს — დიაოხსა და კოლხას, მათ ურთიერთობებს ასურეთთან და ურარტუსთან, სკვითებისა და კიმერიელთა შემოსევებს და ბერძნულ მითს არგონავტების შესახებ.",
  videoUrl: "", 
  quizzes: [
    {
      question: "რომელ საუკუნეებში არსებობდა კოლხას სამეფო?",
      options: ["XII-VII სს.", "IX-V სს.", "VIII-IV სს.", "X-VI სს."],
      correct: 0
    },
    {
      question: "ვინ იყო კოლხების მიმართულებით მოლაშქრე ურარტუს მეფე, რომელმაც ორჯერ ილაშქრა კოლხეთში?",
      options: ["სარდური II", "მენუა", "არგიშტი I", "სიენი"],
      correct: 0
    },
    {
      question: "რომელი მომთაბარე ტომების შემოსევებმა დაასუსტა ურარტუ და გაანადგურა კოლხა ძვ.წ. VIII საუკუნის ბოლოს?",
      options: ["სკვითები და კიმერიელები", "არამეელები", "ჰიქსოსები", "ზღვის ხალხები"],
      correct: 0
    },
    {
      question: "ბერძნული მითის მიხედვით, ვინ იყო კოლხეთის მეფე, რომელთანაც ოქროს საწმისი ინახებოდა?",
      options: ["აიეტი", "ფარნავაზი", "მირიანი", "უტუფურსი"],
      correct: 0
    }
  ]
},
{
  id: 8,
  title: "ლექცია 8: ფინიკიური ქალაქ-სახელმწიფოები და კოლონიზაცია",
  description: "ამ ლექციაში განვიხილავთ ხმელთაშუა ზღვის აღმოსავლეთ სანაპიროზე მდებარე ფინიკიის ქალაქებს (ბიბლოსი, სიდონი, ტვიროსი), საზღვაო ვაჭრობას, კართაგენის დაარსებას, სპარსეთისა და ალექსანდრე მაკედონელის მმართველობას და ფინიკიური ანბანის მნიშვნელობას.",
  videoUrl: "", 
  quizzes: [
    {
      question: "რომელი ქალაქის მცხოვრებლებმა დააარსეს კართაგენი ჩრდილოეთ აფრიკაში ძვ.წ. 825 წელს?",
      options: ["ტვიროსი", "სიდონი", "ბიბლოსი", "უგარიტი"],
      correct: 0
    },
    {
      question: "რამდენი ასონიშანისგან შედგებოდა ფინიკიური ანბანი?",
      options: ["22", "24", "26", "28"],
      correct: 0
    },
    {
      question: "რომელმა დამპყრობელმა დაიპყრო ფინიკია ძვ.წ. 332 წელს?",
      options: ["ალექსანდრე მაკედონელმა", "კიროს II დიდმა", "ხამურაბიმ", "ტიგლატფილესერ III-მ"],
      correct: 0
    },
    {
      question: "რომელი ხალხის წარმომადგენლებმა გადაიღეს და სრულყვეს ფინიკიური ანბანი ხმოვანი ნიშნების დამატებით?",
      options: ["ბერძნებმა", "რომაელებმა", "ეგვიპტელებმა", "ასურელებმა"],
      correct: 0
    }
  ]
},
{
  id: 9,
  title: "ლექცია 9: აქემენიანთა ირანი",
  description: "ამ ლექციაში განვიხილავთ აქემენიანთა იმპერიის შექმნას კიროს II-ის მიერ, დარიოს I-ის რეფორმებს (სატრაპიები, დარიკი, არამეული ენა), „უკვდავთა“ გვარდიას, ზოროასტრიზმის გავრცელებასა და იმპერიის დაცემას ალექსანდრე მაკედონელის მიერ.",
  videoUrl: "", 
  quizzes: [
    {
      question: "რომელმა სპარსეთის მეფემ აიღო მიდიის დედაქალაქი ეკბატანა და ჩაუყარა საფუძველი აქემენიანთა იმპერიას?",
      options: ["კიროს II", "დარიოს I", "კამბიზ II", "ქსერქსე I"],
      correct: 0
    },
    {
      question: "რამდენ სატრაპიად (ადმინისტრაციულ ერთეულად) დაყო დარიოს I-მა იმპერიის ტერიტორია?",
      options: ["20", "10", "15", "30"],
      correct: 0
    },
    {
      question: "რა ერქვა დარიოს I-ის მიერ შემოღებულ იმპერიის საერთო ფულის ერთეულს?",
      options: ["დარიკი", "დრაქმა", "სტატერი", "შეკელი"],
      correct: 0
    },
    {
      question: "რომელი რელიგია გამოაცხადა ირანელთა საერთო რელიგიად მეფე ქსერქსე I-მა?",
      options: ["ზოროასტრიზმი", "ბუდიზმი", "ინდუიზმი", "იუდაიზმი"],
      correct: 0
    }
  ]
},
{
  id: 10,
  title: "ლექცია 10: დიდი ბერძნული კოლონიზაცია და კოლხეთი",
  description: "ამ ლექციაში განვიხილავთ დიდი ბერძნული კოლონიზაციის მიზეზებსა და თავისებურებებს, შავი ზღვის სანაპიროზე დაარსებულ ბერძნულ ახალშენებს (ფაზისი, დიოსკურია, პიტიუნტი), კოლხურ თეთრსა და სკეპტუხიებად დაყოფას.",
  videoUrl: "", 
  quizzes: [
    {
      question: "რა ეწოდებოდა კოლონიის დასარსებლად გამოსული ექსპედიციის მეთაურს — „ორგანიზატორს“?",
      options: ["ოიკისტი", "სკეპტუხი", "არქონტი", "სატრაპი"],
      correct: 0
    },
    {
      question: "რომელი ბერძნული ქალაქიდან მოსული ბერძნების მიერ უნდა ყოფილიყო დაარსებული ახალშენები კოლხეთის სანაპიროზე?",
      options: ["მილეტი", "ათენი", "სპარტა", "კორინთო"],
      correct: 0
    },
    {
      question: "რა ერქვა ძვ.წ. VI-II საუკუნეებში კოლხეთში მოჭრილ ადგილობრივ ვერცხლის ფულს?",
      options: ["„კოლხური თეთრი“", "დარიკი", "დრაქმა", "სტატერი"],
      correct: 0
    },
    {
      question: "რომელი ანტიკური ავტორის ცნობით იყო კოლხეთი დაყოფილი ადმინისტრაციულ ტერიტორიებად — სკეპტუხიებად?",
      options: ["სტრაბონი", "ჰეროდოტე", "თუკიდიდე", "ქსენოფონტი"],
      correct: 0
    }
  ]
},
{
  id: 11,
  title: "ლექცია 11: ძველი ათენი და დემოკრატიის ჩამოყალიბება",
  description: "ამ ლექციაში განვიხილავთ ათენში დემოკრატიული მმართველობის ჩამოყალიბებას, სოლონის რეფორმებსა და ვალების გაუქმებას, კლისთენეს მიერ შემოღებულ ოსტრაკიზმს („ნამსხვრევთა სასამართლო“) და პერიკლეს ეპოქას.",
  videoUrl: "", 
  quizzes: [
    {
      question: "რომელ წელს აირჩიეს სოლონი პირველ არქონტად და რომელმაც გაატარა მნიშვნელოვანი რეფორმები (მათ შორის ვალების გაუქმება)?",
      options: ["ძვ.წ. 594 წ.", "ძვ.წ. 508 წ.", "ძვ.წ. 464 წ.", "ძვ.წ. 753 წ."],
      correct: 0
    },
    {
      question: "რა ეწოდებოდა კლისთენეს მიერ შემოღებულ წესს, რომლის დროსაც სახელმწიფოსთვის საშიშ პირებს თიხის ნამსხვრევებზე წერით აძევებდნენ 10 წლით?",
      options: ["ოსტრაკიზმი („ნამსხვრევთა სასამართლო“)", "არეოპაგი", "ჰელიეა", "სატრაპია"],
      correct: 0
    },
    {
      question: "ვინ შემოიღო პირველად ხელფასი თანამდებობის პირთათვის, რათა ღარიბ მოქალაქეებსაც შეძლებოდათ სახელმწიფო საქმიანობაში მონაწილეობა?",
      options: ["პერიკლე", "სოლონი", "კლისთენე", "ფარნავაზი"],
      correct: 0
    },
    {
      question: "რა ეწოდებოდა სოლონის მიერ შექმნილ ნაფიც მსაჯულთა სასამართლოს?",
      options: ["ჰელიეა", "არეოპაგი", "ბულე", "ეკლესია"],
      correct: 0
    }
  ]
},
{
  id: 12,
  title: "ლექცია 12: სპარტა",
  description: "ამ ლექციაში განვიხილავთ სპარტის სახელმწიფოს ჩამოყალიბებას, მის სოციალურ სტრუქტურას (სპარტიატები, პერიეკები, ჰილოტები), ორ მეფეს, ეფორთა კოლეგიას, გერუსიას და მკაცრ სამხედრო აღზრდის სისტემას.",
  videoUrl: "", 
  quizzes: [
    {
      question: "რომელ სამ სოციალურ ჯგუფად იყოფოდა სპარტის საზოგადოება?",
      options: ["სპარტიატები, პერიეკები, ჰილოტები", "არქონტები, სტრაპები, მონები", "პატრიციები, პლებეები, რაინდები", "დემოსი, არისტოკრატია, მეფეები"],
      correct: 0
    },
    {
      question: "რამდენი ეფორისაგან (ზედამხედველისაგან) შედგებოდა სპარტის ძლიერი კოლეგია?",
      options: ["5", "9", "30", "10"],
      correct: 0
    },
    {
      question: "რა ეწოდებოდა სპარტის უხუცესთა საბჭოს, რომელიც წარმოადგენდა უმაღლეს სასამართლოსა და სამხედრო საბჭოს?",
      options: ["გერუსია", "აპელა", "არეოპაგი", "ბულე"],
      correct: 0
    },
    {
      question: "რა გამოიყენებოდა სპარტაში ჩვეულებრივი ფულის ნაცვლად?",
      options: ["რკინის ზოდები", "ოქროს მონეტები", "ვერცხლის „კოლხური თეთრი“", "თიხის ფირფიტები"],
      correct: 0
    }
  ]
},
{
  id: 13,
  title: "ლექცია 13: ბერძენ-სპარსელთა ომები",
  description: "ამ ლექციაში განვიხილავთ ბერძენ-სპარსელთა ომებს, მარათონის ბრძოლასა და მორბენალ ფიდიპიდეს, თერმოპილეს ხეობაში 300 სპარტელის გმირობას, სალამინის ზღვის ბრძოლას და ძვ.წ. 449 წლის კალიასის ზავს.",
  videoUrl: "", 
  quizzes: [
    {
      question: "რომელ წელს გაიმართა ცნობილი მარათონის ბრძოლა, სადაც ბერძნებმა დაამარცხეს სპარსელები?",
      options: ["ძვ.წ. 490 წ.", "ძვ.წ. 480 წ.", "ძვ.წ. 479 წ.", "ძვ.წ. 449 წ."],
      correct: 0
    },
    {
      question: "ვინ მეთაურობდა 300 სპარტელ მეომარს თერმოპილეს ხეობაში ძვ.წ. 480 წელს?",
      options: ["ლეონიდასი", "თემისტოკლე", "დარიოს I", "ქსერქსე I"],
      correct: 0
    },
    {
      question: "სად დაამარცხა ბერძენთა გაერთიანებულმა ფლოტმა მტრის მრავალრიცხოვანი არმადა ვიწრო სრუტეში?",
      options: ["სალამინი", "პლატეა", "მარათონი", "თერმოპილე"],
      correct: 0
    },
    {
      question: "რომელი ზავით გაფორმდა ბერძენთა საბოლოო გამარჯვება და აქემენიანთა იმპერიის უარი საბერძნეთის დამორჩილებაზე ძვ.წ. 449 წელს?",
      options: ["კალიასის ზავი", "აპამეას ზავი", "ნიკიას ზავი", "ანტალკიდის ზავი"],
      correct: 0
    }
  ]
},
{
  id: 14,
  title: "ლექცია 14: პელოპონესის ომები",
  description: "ამ ლექციაში განვიხილავთ ათენისა და სპარტის დაპირისპირებას ძვ.წ. 431-404 წლების პელოპონესის ომში, ნიკიასის ზავს, ალკიბიადეს როლს, სიცილიის ექსპედიციას და ათენის დამარცხებას.",
  videoUrl: "", 
  quizzes: [
    {
      question: "რომელ წლებში მიმდინარეობდა პელოპონესის ომი ათენსა და სპარტას შორის?",
      options: ["ძვ.წ. 431-404 წლებში", "ძვ.წ. 490-449 წლებში", "ძვ.წ. 500-449 წლებში", "ძვ.წ. 411-403 წლებში"],
      correct: 0
    },
    {
      question: "რა ეწოდებოდა ძვ.წ. 421 წელს დადებულ 50-წლიან ზავს, რომელიც ათენის ინიციატივით გაფორმდა?",
      options: ["ნიკიასის ზავი", "კალიასის ზავი", "აპამეას ზავი", "ანტალკიდის ზავი"],
      correct: 0
    },
    {
      question: "რომელმა ქალაქ-სახელმწიფომ გაიმარჯვა პელოპონესის ომში და ძვ.წ. 404 წელს აიღო ათენი?",
      options: ["სპარტა", "კორინთო", "თებე", "არგოსი"],
      correct: 0
    },
    {
      question: "რომელი სტრატეგოსი და პოლიტიკური მოღვაწე ცდილობდა ათენის არმიის წარმართვას სიცილიის ექსპედიციაში და მოგვიანებით სპარტაშიც კი გაიქცა?",
      options: ["ალკიბიადე", "თემისტოკლე", "პერიკლე", "კლეონი"],
      correct: 0
    }
  ]
},
{
  id: 15,
  title: "ლექცია 15: ალექსანდრე მაკედონელი და ელინისტური სახელმწიფოები",
  description: "ამ ლექციაში განვიხილავთ მაკედონიის გაძლიერებას ფილიპე II-ის დროს, ალექსანდრე მაკედონელის დიდ ლაშქრობებს (გრანიკოსი, ისოსი, გავგამელა), იმპერიის დაშლას და ელინისტური ეპოქის ძირითად მახასიათებლებს.",
  videoUrl: "", 
  quizzes: [
    {
      question: "რომელ წელს გაიმართა ქერონეას გადამწყვეტი ბრძოლა, სადაც ფილიპე II-მ დაამარცხა ბერძნული ანტიმაკედონური კოალიცია?",
      options: ["ძვ.წ. 338 წ.", "ძვ.წ. 359 წ.", "ძვ.წ. 334 წ.", "ძვ.წ. 323 წ."],
      correct: 0
    },
    {
      question: "რომელ წელს გაიმართა გავგამელას გადამწყვეტი ბრძოლა ალექსანდრესა და დარიოს III-ს შორის?",
      options: ["ძვ.წ. 331 წ.", "ძვ.წ. 334 წ.", "ძვ.წ. 333 წ.", "ძვ.წ. 325 წ."],
      correct: 0
    },
    {
      question: "რომელი დინასტია დამკვიდრდა ეგვიპტეში ალექსანდრე მაკედონელის გარდაცვალების შემდეგ?",
      options: ["პტოლემეების დინასტია", "სელევკიდების დინასტია", "ანტიგონიდების დინასტია", "მითრიდატების დინასტია"],
      correct: 0
    },
    {
      question: "რით მთავრდება ისტორიული ელინისტური ეპოქა ძვ.წ. 31 წელს?",
      options: ["ეგვიპტის დედოფალ კლეოპატრა VII-ის სიკვდილით", "ალექსანდრე მაკედონელის გარდაცვალებით", "რომის იმპერიის დაცემით", "კალიასის ზავით"],
      correct: 0
    }
  ]
},
{
  id: 16,
  title: "ლექცია 16: რომი და მისი დაპყრობები",
  description: "ამ ლექციაში განვიხილავთ რომის რესპუბლიკის წარმოქმნას ძვ.წ. 509 წელს, მის სახელმწიფო მოწყობას, პუნიკურ ომებს კართაგენთან, ჰანიბალის ლაშქრობასა და მითრიდატეს ომებს პონტოს მეფესთან.",
  videoUrl: "", 
  quizzes: [
    {
      question: "რომელ წელს დაამყარდა რომში რესპუბლიკური მმართველობა ტარკვინიუს ამაყის გაძევების შემდეგ?",
      options: ["ძვ.წ. 509 წ.", "ძვ.წ. 753 წ.", "ძვ.წ. 264 წ.", "ძვ.წ. 146 წ."],
      correct: 0
    },
    {
      question: "რომელმა რომაელმა სარდალმა დაამარცხა ჰანიბალი ზამას ბრძოლაში ძვ.წ. 202 წელს და მიიღო საპატიო სახელი „აფრიკელი“?",
      options: ["სციპიონი", "პომპეუსი", "სულა", "კატონი"],
      correct: 0
    },
    {
      question: "რომელ წელს დაანგრიეს რომაელებმა კართაგენი მესამე პუნიკური ომის დასასრულს?",
      options: ["ძვ.წ. 146 წ.", "ძვ.წ. 201 წ.", "ძვ.წ. 216 წ.", "ძვ.წ. 509 წ."],
      correct: 0
    },
    {
      question: "რომელმა რომაელმა სარდალმა დაასრულა საბოლოოდ პონტოს მეფე მითრიდატე VI ევპატორის წინააღმდეგ ბრძოლა?",
      options: ["პომპეუსმა", "სულამ", "ლუკულუსმა", "კატონმა"],
      correct: 0
    }
  ]
},
{
  id: 17,
  title: "ლექცია 17: რესპუბლიკური მმართველობის დასასრული რომში",
  description: "ამ ლექციაში განვიხილავთ პირველ და მეორე ტრიუმვირატებს, იულიუს კეისრისა და ოქტავიანე ავგუსტუსის მმართველობას, რესპუბლიკის დასასრულსა და იმპერიის პერიოდის (პრინციპატისა და დომინატის) ჩამოყალიბებას.",
  videoUrl: "", 
  quizzes: [
    {
      question: "რომელ წელს შეიქმნა პირველი ტრიუმვირატი კრასუსის, პომპეუსისა და იულიუს კეისრის მონაწილეობით?",
      options: ["ძვ.წ. 60 წ.", "ძვ.წ. 43 წ.", "ძვ.წ. 31 წ.", "ძვ.წ. 44 წ."],
      correct: 0
    },
    {
      question: "რომელ წელს მოკლეს სენატის რესპუბლიკური ფრთის წარმომადგენლებმა იულიუს კეისარი?",
      options: ["ძვ.წ. 44 წ.", "ძვ.წ. 48 წ.", "ძვ.წ. 31 წ.", "ძვ.წ. 60 წ."],
      correct: 0
    },
    {
      question: "რომელ წელს გაიმართა აქციუმის გადამწყვეტი ბრძოლა, სადაც ოქტავიანემ დაამარცხა ანტონიუსი და კლეოპატრა?",
      options: ["ძვ.წ. 31 წ.", "ძვ.წ. 43 წ.", "ძვ.წ. 48 წ.", "ძვ.წ. 212 წ."],
      correct: 0
    },
    {
      question: "რომელმა იმპერატორმა გამოსცა ედიქტი ძვ.წ. / ახ.წ. 212 წელს, რომლითაც იმპერიის ყველა თავისუფალ ადამიანს რომის მოქალაქეობა მიენიჭა?",
      options: ["კარაკალამ", "დიოკლეტიანემ", "ოქტავიანე ავგუსტუსმა", "იულიუს კეისარმა"],
      correct: 0
    }
  ]
},
{
  id: 18,
  title: "ლექცია 18: ქართული სახელმწიფოები ელინისტურ სამყაროში",
  description: "ამ ლექციაში განვიხილავთ ქართლის სამეფოს წარმოშობას, ფარნავაზის რეფორმებს, სტრაბონის ცნობებს იბერიის სოციალურ სტრუქტურაზე, არიან-ქართლის საკითხსა და არმაზის ბილინგვას.",
  videoUrl: "", 
  quizzes: [
    {
      question: "რომელმა მმართველმა გაუგზავნა სამეფო ნიშნები ქართლის პირველ მეფე ფარნავაზს?",
      options: ["ანტიოქოს I სელევკიდმა", "ალექსანდრე მაკედონელმა", "მიჰრდატე I-მა", "პტოლემე I-მა"],
      correct: 0
    },
    {
      question: "რამდენ საერისთავოდ და სასპასპეტოდ დაყო ფარნავაზმა ქვეყანა?",
      options: ["რვა საერისთავოდ და ერთ სასპასპეტოდ", "ოთხ საერისთავოდ და ორ სასპასპეტოდ", "ათ საერისთავოდ და სამ სასპასპეტოდ", "ექვს საერისთავოდ და ერთ სასპასპეტოდ"],
      correct: 0
    },
    {
      question: "რომელი მთავარი ღვთაების კერპი აღმართა ფარნავაზმა მცხეთის მოპირდაპირე „ქართლის მთაზე“?",
      options: ["არმაზის", "ზადენის", "გაცის", "გაიმის"],
      correct: 0
    },
    {
      question: "რომელ ენებზეა შესრულებული „არმაზის ბილინგვა“ (ორენოვანი წარწერა)?",
      options: ["ბერძნულ და არამეულ ენებზე", "ლათინურ და ბერძნულ ენებზე", "ქართულ და არამეულ ენებზე", "ბერძნულ და ქართულ ენებზე"],
      correct: 0
    }
  ]
},
{
  id: 19,
  title: "ლექცია 19: პომპეუსის ლაშქრობა ქართლში",
  description: "ამ ლექციაში განვიხილავთ რომის აქტიურ პოლიტიკას აღმოსავლეთში, პონტოს სამეფოსა და მითრიდატე VI-ის ბრძოლას რომთან, ძვ.წ. 65 წელს პომპეუსის ლაშქრობას ქართლში, მეფე არტაგის წინააღმდეგობას და კოლხეთის დაკავებას.",
  videoUrl: "", 
  quizzes: [
    {
      question: "რომელ წელს ილაშქრა რომაელმა სარდალმა პომპეუსმა ქართლში (იბერიაში)?",
      options: ["ძვ.წ. 65 წ.", "ძვ.წ. 190 წ.", "ძვ.წ. 146 წ.", "ძვ.წ. 31 წ."],
      correct: 0
    },
    {
      question: "ვინ მეფობდა ქართლში პომპეუსის ლაშქრობის დროს (ძვ.წ. 65 წელს)?",
      options: ["არტაგმა", "ფარნავაზმა", "ფარნაკემ", "აზონმა"],
      correct: 0
    },
    {
      question: "რომელი რომაელი ისტორიკოსი გვაწვდის ცნობებს იბერიაში პომპეუსის ლაშქრობის შესახებ?",
      options: ["დიონ კასიოსმა", "სტრაბონმა", "ლეონტი მროველმა", "კატონმა"],
      correct: 0
    },
    {
      question: "ვინ დანიშნა პომპეუსმა კოლხეთის მმართველად მას შემდეგ, რაც კოლხეთი ბრძოლის გარეშე დაიკავა?",
      options: ["არისტარქე", "მითრიდატე", "ტიგრანი", "ანტიოქოსი"],
      correct: 0
    }
  ]
},
{
  id: 20,
  title: "ლექცია 20: საქართველო-რომის ურთიერთობა I-II საუკუნეებში",
  description: "ამ ლექციაში განვიხილავთ ქართლსა და რომს შორის ურთიერთობებს, ფარსმან I-ის და ფარსმან II კველის პოლიტიკას, დარიალის კარის სტრატეგიულ მნიშვნელობას და ფარსმან II-ის ვიზიტს რომში.",
  videoUrl: "", 
  quizzes: [
    {
      question: "რომელი ქართლის მეფე ეწვია მეუღლითა და ვაჟიშვილით რომს იმპერატორ ანტონინუს პიუსის მიწვევით?",
      options: ["ფარსმან II ქველი", "ფარსმან I", "მითრიდატე", "არტაგმა"],
      correct: 0
    },
    {
      question: "რომელმა რომაელმა იმპერატორმა გაუმაგრა არმაზის ციხის კედლები იბერიის მეფე მითრიდატეს (რაზეც მცხეთასთან აღმოჩენილი წარწერა მიუთითებს)?",
      options: ["ვესპასიანემ", "ადრიანემ", "ანტონინუს პიუსმა", "პომპეუსმა"],
      correct: 0
    },
    {
      question: "რომელი სტრატეგიული გამოსასვლელის გახსნით დაუპირისპირდა ფარსმან II რომის იმპერატორს?",
      options: ["დარიალის კარის", "დარდანელის სრუტის", "ჰელესპონტის", "კავკასიონის მთავარ ქედზე სხვა გადასასვლელის"],
      correct: 0
    },
    {
      question: "სად დაიდგა ცხენზე ამხედრებული ფარსმან II-ის ქანდაკება რომში ვიზიტისა და ასპარეზობის შემდეგ?",
      options: ["მარსის ტაძარში", "კაპიტოლიუმზე", "პანთეონში", "კოლიზეუმის წინ"],
      correct: 0
    }
  ]
},
{
  id: 21,
  title: "ლექცია 21: რომის იმპერიის ორად გაყოფა და დასავლეთ რომის იმპერიის დაცემა",
  description: "ამ ლექციაში განვიხილავთ ხალხთა დიდ გადასახლებას, 395 წელს რომის იმპერიის ორ ნაწილად გაყოფას, ვესტგოთებისა და ვანდალების მიერ რომის ძარცვას, ატილას ლაშქრობებს და 476 წელს დასავლეთ რომის იმპერიის დაცემას.",
  videoUrl: "", 
  quizzes: [
    {
      question: "რომელ წელს გაიყო რომის იმპერია ორ ნაწილად — დასავლეთ და აღმოსავლეთ რომის იმპერიებად?",
      options: ["395 წელს", "330 წელს", "476 წელს", "455 წელს"],
      correct: 0
    },
    {
      question: "რომელმა გერმანულმა ტომმა აიღო და გაძარცვა რომი 455 წელს გეიზერიხის მეთაურობით, რის გამოც დამკვიდრდა ტერმინი „ვანდალიზმი“?",
      options: ["ვანდალებმა", "ვესტგოთებმა", "ჰუნებმა", "ფრანკებმა"],
      correct: 0
    },
    {
      question: "რომელ წელს გადააყენა გერმანელ დაქირავებულთა მეთაურმა ოდოაკრმა დასავლეთ რომის უკანასკნელი იმპერატორი?",
      options: ["476 წელს", "395 წელს", "410 წელს", "451 წელს"],
      correct: 0
    },
    {
      question: "ვინ იყო დასავლეთ რომის უკანასკნელი იმპერატორი, რომელიც ოდოაკრმა ტახტიდან გადააყენა?",
      options: ["რომულუს ავგუსტულუსმა", "ვალენტინიანე III-მ", "ვალენტმა", "ჰონორიუსმა"],
      correct: 0
    }
  ]
},
{
  id: 22,
  title: "ლექცია 22: ქრისტიანობის წარმოშობა და გავრცელება პირველ საუკუნეებში",
  description: "ამ ლექციაში განვიხილავთ ქრისტიანობის წარმოშობას პალესტინაში, მის დევნას რომაელი იმპერატორების მხრიდან, 313 წლის მილანის ედიქტს, მსოფლიო საეკლესიო კრებებს, 1054 წლის ეკლესიების გაყოფასა და ნეტარი ავგუსტინეს შეხედულებებს.",
  videoUrl: "", 
  quizzes: [
    {
      question: "რომელ წელს გამოსცა იმპერატორმა კონსტანტინე დიდმა მილანის ედიქტი, რომლითაც ქრისტიანებს თავისუფლად შეკრებისა და ტაძრების აგების უფლება მიეცათ?",
      options: ["313 წელს", "330 წელს", "325 წელს", "381 წელს"],
      correct: 0
    },
    {
      question: "რომელ წელს მოიწვია კონსტანტინე დიდმა პირველი საეკლესიო კრება ნიკეაში, რომელსაც ბიჭვინთის ეპისკოპოსი სტრატოფილეც დაესწრო?",
      options: ["325 წელს", "313 წელს", "451 წელს", "787 წელს"],
      correct: 0
    },
    {
      question: "რომელ წელს მოწვეულმა ქალკედონის IV მსოფლიო საეკლესიო კრებამ დაგმო მონოფიზიტობა?",
      options: ["451 წელს", "381 წელს", "787 წელს", "1054 წელს"],
      correct: 0
    },
    {
      question: "რომელ წელს გაიყო ქრისტიანული ეკლესია საბოლოოდ აღმოსავლურ მართლმადიდებლურ და დასავლურ კათოლიკურ ეკლესიებად?",
      options: ["1054 წელს", "451 წელს", "395 წელს", "313 წელს"],
      correct: 0
    }
  ]
},
{
  id: 23,
  title: "ლექცია 23: ქრისტიანობის სახელმწიფო რელიგიად გამოცხადება ქართლში",
  description: "ამ ლექციაში განვიხილავთ ქრისტიანობის გავრცელებას საქართველოში, წმინდა ნინოს მოღვაწეობას, მეფე მირიანის მიერ ქრისტიანობის სახელმწიფო რელიგიად გამოცხადებას (326 ან 337 წელს) და ქართულ-სომხურ საეკლესიო განხეთქილებას.",
  videoUrl: "", 
  quizzes: [
    {
      question: "რომელ წელს გაფორმდა ნიზიბინის „ორმოცწლიანი“ ზავი, რომლის თანახმად ქართლი და სომხეთი რომის გავლენის სფეროში მოექცა?",
      options: ["298 წელს", "313 წელს", "326 წელს", "381 წელს"],
      correct: 0
    },
    {
      question: "რომელ წლებში გამოცხადდა ქრისტიანობა ქართლის სამეფოში ოფიციალურ (სახელმწიფო) რელიგიად?",
      options: ["326 (ან 337) წელს", "298 წელს", "313 წელს", "451 წელს"],
      correct: 0
    },
    {
      question: "სად არის დაკრძალული საქართველოში ქრისტიანობის მაქადაგებელი წმინდა ნინო?",
      options: ["ბოდბის მონასტერში", "სვეტიცხოველში", "მცხეთის ჯვარზე", "ალავერდში"],
      correct: 0
    },
    {
      question: "რომელ წელს დასრულდა ქართულ და სომხურ ეკლესიებს შორის არსებული უთანხმოება საეკლესიო განხეთქილებით?",
      options: ["608 წელს", "451 წელს", "1054 წელს", "325 წელს"],
      correct: 0
    }
  ]
},
  ];

  const [lectures, setLectures] = useState(() => {
    const saved = localStorage.getItem('riot_lectures');
    return saved ? JSON.parse(saved) : initialLectures;
  });

  const activeUser = user || localStorage.getItem('riot_current_user');

  const [completedLectures, setCompletedLectures] = useState(() => {
    if (!activeUser) return [];
    const savedCompleted = localStorage.getItem(`riot_completed_${activeUser}`);
    return savedCompleted ? JSON.parse(savedCompleted) : [];
  });

  useEffect(() => {
    if (activeUser) {
      const savedCompleted = localStorage.getItem(`riot_completed_${activeUser}`);
      if (savedCompleted) {
        setCompletedLectures(JSON.parse(savedCompleted));
      } else {
        setCompletedLectures([]);
      }
    }
  }, [activeUser]);

  const handleCompleteLecture = (lectureId) => {
    if (!completedLectures.includes(lectureId)) {
      const updated = [...completedLectures, lectureId];
      setCompletedLectures(updated);
      const targetUser = user || localStorage.getItem('riot_current_user');
      if (targetUser) {
        localStorage.setItem(`riot_completed_${targetUser}`, JSON.stringify(updated));
      }
    }
  };

  const [selectedLecture, setSelectedLecture] = useState(null);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const [isRegistering, setIsRegistering] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

 
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const lecturesPerPage = 15;

  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newVideoUrl, setNewVideoUrl] = useState('');
  const [questions, setQuestions] = useState([
    { question: '', options: ['', '', '', ''], correct: 0 },
    { question: '', options: ['', '', '', ''], correct: 0 },
    { question: '', options: ['', '', '', ''], correct: 0 },
    { question: '', options: ['', '', '', ''], correct: 0 }
  ]);

  useEffect(() => {
    localStorage.setItem('riot_lectures', JSON.stringify(lectures));
  }, [lectures]);


  const filteredLectures = lectures.filter(lec => 
    lec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (lec.description && lec.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );


  const totalPages = Math.ceil(filteredLectures.length / lecturesPerPage) || 1;
  const indexOfLastLecture = currentPage * lecturesPerPage;
  const indexOfFirstLecture = indexOfLastLecture - lecturesPerPage;
  const currentLectures = filteredLectures.slice(indexOfFirstLecture, indexOfLastLecture);

 
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleLectureSelect = (lec, originalIndex) => {
    if (originalIndex > 0 && role !== 'admin') {
      const prevLectureId = lectures[originalIndex - 1].id;
      if (!completedLectures.includes(prevLectureId)) {
        alert("⚠️ ეს ლექცია ჩაკეტილია! ჯერ ბოლომდე უნდა შეისწავლო და უშეცდომოდ ჩააბარო წინა ლექციის ქვიზი.");
        return;
      }
    }

    setSelectedLecture(lec);
    setCurrentQuizIndex(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizFinished(false);
    setShowFeedback(false);
    window.scrollTo(0, 0);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setAuthError('');

    const trimmedUser = usernameInput.trim();
    const trimmedPass = passwordInput.trim();

    if (!trimmedUser || !trimmedPass) {
      setAuthError('გთხოვთ შეავსოთ ყველა ველი!');
      return;
    }

    localStorage.setItem('riot_current_user', trimmedUser);

    if (trimmedUser === "Nika" && trimmedPass === "riot123") {
      onLogin(trimmedUser, "admin");
      return;
    }

    const registeredUsers = JSON.parse(localStorage.getItem('riot_users') || '{}');

    if (isRegistering) {
      if (registeredUsers[trimmedUser]) {
        setAuthError('მომხმარებლის სახელი დაკავებულია. აირჩიეთ სხვა!');
        return;
      }
      registeredUsers[trimmedUser] = trimmedPass;
      localStorage.setItem('riot_users', JSON.stringify(registeredUsers));
      onLogin(trimmedUser, "student");
    } else {
      if (!registeredUsers[trimmedUser]) {
        registeredUsers[trimmedUser] = trimmedPass;
        localStorage.setItem('riot_users', JSON.stringify(registeredUsers));
        onLogin(trimmedUser, "student");
        return;
      }

      if (registeredUsers[trimmedUser] !== trimmedPass) {
        setAuthError('❌ არასწორი პაროლი!');
        return;
      }

      onLogin(trimmedUser, "student");
    }
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null || showFeedback) return;

    const currentQuiz = selectedLecture.quizzes[currentQuizIndex];
    const isCorrect = parseInt(selectedAnswer) === currentQuiz.correct;

    let updatedScore = quizScore;
    if (isCorrect) {
      updatedScore = quizScore + 1;
      setQuizScore(updatedScore);
    }

    setShowFeedback(true);

    setTimeout(() => {
      setShowFeedback(false);
      setSelectedAnswer(null);

      if (currentQuizIndex + 1 < selectedLecture.quizzes.length) {
        setCurrentQuizIndex(prev => prev + 1);
      } else {
        setQuizFinished(true);
        
        if (updatedScore === selectedLecture.quizzes.length) {
          handleCompleteLecture(selectedLecture.id);
        }
      }
    }, 1500);
  };

  const handleAddLecture = (e) => {
    e.preventDefault();
    if (!newTitle || !newVideoUrl) return;

    let embedUrl = newVideoUrl;
    if (newVideoUrl.includes("watch?v=")) {
      embedUrl = newVideoUrl.split("watch?v=")[1].split("&")[0];
      embedUrl = `https://www.youtube.com/embed/${embedUrl}`;
    } else if (newVideoUrl.includes("youtu.be/")) {
      embedUrl = newVideoUrl.split("youtu.be/")[1].split("?")[0];
      embedUrl = `https://www.youtube.com/embed/${embedUrl}`;
    } else if (!newVideoUrl.includes("embed/")) {
      alert("გთხოვთ შეიყვანოთ ვალიდური YouTube ლინკი!");
      return;
    }

    const newLec = {
      id: Date.now(),
      title: newTitle,
      description: newDescription,
      videoUrl: embedUrl,
      quizzes: questions
    };

    setLectures([...lectures, newLec]);
    setNewTitle('');
    setNewDescription('');
    setNewVideoUrl('');
    setQuestions([
      { question: '', options: ['', '', '', ''], correct: 0 },
      { question: '', options: ['', '', '', ''], correct: 0 },
      { question: '', options: ['', '', '', ''], correct: 0 },
      { question: '', options: ['', '', '', ''], correct: 0 }
    ]);
    alert('ლექცია წარმატებით დაემატა!');
  };

  const handleDeleteLecture = (id) => {
    if (window.confirm('დარწმუნებული ხარ, რომ გინდა ამ ლექციის წაშლა?')) {
      setLectures(lectures.filter(l => l.id !== id));
      if (selectedLecture?.id === id) setSelectedLecture(null);
    }
  };

  const currentQuiz = selectedLecture?.quizzes?.[currentQuizIndex];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', color: 'white', fontFamily: 'Fira GO' }}>
      
      {!activeUser ? (
        <div style={{ maxWidth: '400px', margin: '60px auto', background: '#1e1e24', padding: '30px', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)', border: '1px solid #333' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#ff4d4d' }}>
            {isRegistering ? 'სტუდენტის რეგისტრაცია' : 'სტუდენტის პორტალი'}
          </h2>
          
          {authError && (
            <div style={{ background: '#5a1d1d', color: '#ff8888', padding: '10px', borderRadius: '6px', marginBottom: '15px', fontSize: '14px', textAlign: 'center', border: '1px solid #dc3545' }}>
              {authError}
            </div>
          )}

          <form onSubmit={handleAuthSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>მომხმარებლის სახელი:</label>
              <input 
                type="text" 
                value={usernameInput} 
                onChange={e => setUsernameInput(e.target.value)} 
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #333', background: '#111', color: 'white', fontFamily: 'Fira GO' }} 
                placeholder="შეიყვანე სახელი..."
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>პაროლი:</label>
              <input 
                type="password" 
                value={passwordInput} 
                onChange={e => setPasswordInput(e.target.value)} 
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #333', background: '#111', color: 'white' }} 
                placeholder="შეიყვანე პაროლი..."
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '12px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontFamily: 'Fira GO', marginBottom: '15px' }}>
              {isRegistering ? 'რეგისტრაცია და შესვლა' : 'შესვლა სისტემაში'}
            </button>

            <div style={{ textAlign: 'center' }}>
              <button 
                type="button" 
                onClick={() => { setIsRegistering(!isRegistering); setAuthError(''); }} 
                style={{ background: 'none', border: 'none', color: '#aaa', cursor: 'pointer', fontSize: '13px', fontFamily: 'Fira GO', textDecoration: 'underline' }}
              >
                {isRegistering ? 'უკვე გაქვს ანგარიში? შევედით' : 'არ გაქვს ანგარიში? გაიარე რეგისტრაცია'}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#1e1e24', padding: '15px 20px', borderRadius: '8px', marginBottom: '30px', flexWrap: 'wrap', gap: '15px', border: '1px solid #333' }}>
            <div>მოგესალმები, <span style={{ color: '#ff4d4d', fontWeight: 'bold' }}>{activeUser}</span> ({role === 'admin' ? 'ადმინისტრატორი' : 'სტუდენტი'})</div>
            <button onClick={onLogout} style={{ background: '#ff4d4d', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontFamily: 'Fira GO', fontWeight: 'bold' }}>გამოსვლა</button>
          </div>

          {!selectedLecture ? (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', borderBottom: '2px solid #ff4d4d', paddingBottom: '10px', flexWrap: 'wrap', gap: '15px' }}>
                <h2 style={{ margin: 0 }}>📚 სასწავლო პროგრამა (ლექციები)</h2>
                
                {/* საძიებო ველი (Search Bar) */}
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="🔍 მოძებნე ლექცია სათაურით..."
                  style={{
                    background: '#1a1a22',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    padding: '10px 15px',
                    color: 'white',
                    width: '280px',
                    fontFamily: 'Fira GO',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>
              
              {currentLectures.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px', color: '#aaa', background: '#1a1a22', borderRadius: '12px', border: '1px solid #333' }}>
                  <p style={{ fontSize: '18px' }}>ლექცია ვერ მოიძებნა 😕</p>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
                  {currentLectures.map((lec) => {
                    
                    const originalIndex = lectures.findIndex(l => l.id === lec.id);
                    const isCompleted = completedLectures.includes(lec.id);
                    const isLocked = originalIndex > 0 && role !== 'admin' && !completedLectures.includes(lectures[originalIndex - 1].id);

                    let cardBg = '#1a1a22';
                    let borderColor = '#333';

                    if (isCompleted) {
                      cardBg = '#14281a'; 
                      borderColor = '#28a745';
                    } else if (isLocked) {
                      cardBg = '#16161a';
                      borderColor = '#222';
                    }

                    return (
                      <div 
                        key={lec.id} 
                        style={{ 
                          background: cardBg, 
                          padding: '25px', 
                          borderRadius: '12px', 
                          cursor: isLocked ? 'not-allowed' : 'pointer', 
                          border: `1px solid ${borderColor}`, 
                          transition: '0.3s', 
                          display: 'flex', 
                          flexDirection: 'column', 
                          justifyContent: 'space-between',
                          opacity: isLocked ? 0.6 : 1
                        }} 
                        onClick={() => handleLectureSelect(lec, originalIndex)}
                      >
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                            <span style={{ color: isCompleted ? '#28a745' : '#ff4d4d', fontSize: '14px', fontWeight: 'bold' }}>
                              ლექცია №{originalIndex + 1} {isCompleted ? '✓ დასრულებულია' : ''} {isLocked ? '🔒 ჩაკეტილია' : ''}
                            </span>
                          </div>
                          
                          <h3 style={{ fontSize: '18px', margin: '10px 0 15px 0', color: 'white' }}>{lec.title}</h3>
                          
                          {lec.description && (
                            <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                              {lec.description}
                            </p>
                          )}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px' }}>
                          <span style={{ color: isLocked ? '#666' : (isCompleted ? '#28a745' : '#ff4d4d'), fontWeight: 'bold', fontSize: '14px' }}>
                            {isLocked ? 'საჭიროებს წინა ლექციას 🔒' : (isCompleted ? 'თავიდან ნახვა 🔄' : 'ჩართვა ▶')}
                          </span>
                          
                          {role === 'admin' && (
                            <button onClick={(e) => { e.stopPropagation(); handleDeleteLecture(lec.id); }} style={{ background: 'none', border: 'none', color: '#ff4d4d', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold', padding: '0 5px' }}>✕</button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {totalPages > 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '35px' }}>
                  <button 
                    onClick={() => { setCurrentPage(prev => Math.max(prev - 1, 1)); window.scrollTo(0, 0); }}
                    disabled={currentPage === 1}
                    style={{
                      background: currentPage === 1 ? '#15151a' : '#1e1e24',
                      color: currentPage === 1 ? '#555' : 'white',
                      border: '1px solid #333',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                      fontFamily: 'Fira GO',
                      fontWeight: 'bold'
                    }}
                  >
                    ← წინა
                  </button>

                  <span style={{ color: '#aaa', fontSize: '14px', padding: '0 10px' }}>
                    გვერდი <strong style={{ color: '#ff4d4d' }}>{currentPage}</strong> / {totalPages}
                  </span>

                  <button 
                    onClick={() => { setCurrentPage(prev => Math.min(prev + 1, totalPages)); window.scrollTo(0, 0); }}
                    disabled={currentPage === totalPages}
                    style={{
                      background: currentPage === totalPages ? '#15151a' : '#1e1e24',
                      color: currentPage === totalPages ? '#555' : 'white',
                      border: '1px solid #333',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                      fontFamily: 'Fira GO',
                      fontWeight: 'bold'
                    }}
                  >
                    შემდეგი →
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div>
              <button 
                onClick={() => setSelectedLecture(null)} 
                style={{ background: '#333', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', marginBottom: '20px', fontFamily: 'Fira GO', fontWeight: 'bold' }}
              >
                ← სიაში დაბრუნება
              </button>

              <div style={{ background: '#111116', padding: '30px', borderRadius: '12px', border: '1px solid #222' }}>
                <h2 style={{ marginBottom: '15px', fontSize: '26px', color: '#ff4d4d' }}>{selectedLecture.title}</h2>
                
                {selectedLecture.description && (
                  <p style={{ color: '#ccc', fontSize: '16px', lineHeight: '1.7', marginBottom: '25px', background: '#1a1a22', padding: '18px', borderRadius: '8px', borderLeft: '4px solid #ff4d4d' }}>
                    {selectedLecture.description}
                  </p>
                )}
                
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', marginBottom: '35px', border: '1px solid #333' }}>
                  <iframe src={selectedLecture.videoUrl} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} title={selectedLecture.title} frameBorder="0" allowFullScreen></iframe>
                </div>

                <div style={{ background: '#1e1e24', padding: '25px', borderRadius: '10px', border: '1px solid #333' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '12px' }}>
                    <h3 style={{ color: '#ff4d4d', margin: 0 }}>🧠 შეამოწმე ცოდნა ინტერაქციული ქვიზით:</h3>
                    {!quizFinished && selectedLecture.quizzes && (
                      <span style={{ color: '#aaa', fontSize: '14px' }}>კითხვა: {currentQuizIndex + 1} / {selectedLecture.quizzes.length}</span>
                    )}
                  </div>

                  {!quizFinished ? (
                    currentQuiz ? (
                      <div>
                        <p style={{ fontSize: '19px', marginBottom: '20px', fontWeight: '500' }}>{currentQuiz.question}</p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                          {currentQuiz.options.map((opt, i) => {
                            let bgStyle = '#111';
                            let borderStyle = '1px solid #222';

                            if (selectedAnswer === String(i)) {
                              borderStyle = '1px solid #ff4d4d';
                              bgStyle = '#1a1a24';
                            }

                            if (showFeedback) {
                              if (i === currentQuiz.correct) {
                                bgStyle = '#1e4620';
                                borderStyle = '1px solid #28a745';
                              } else if (selectedAnswer === String(i)) {
                                bgStyle = '#5a1d1d';
                                borderStyle = '1px solid #dc3545';
                              }
                            }

                            return (
                              <label key={i} style={{ background: bgStyle, padding: '14px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px', cursor: showFeedback ? 'default' : 'pointer', border: borderStyle, transition: '0.2s' }}>
                                <input type="radio" name="quiz-opt" value={i} checked={selectedAnswer === String(i)} disabled={showFeedback} onChange={e => setSelectedAnswer(e.target.value)} style={{ accentColor: '#ff4d4d' }} />
                                <span style={{ fontSize: '16px' }}>{opt}</span>
                              </label>
                            );
                          })}
                        </div>

                        <button onClick={handleCheckAnswer} disabled={selectedAnswer === null || showFeedback} className="btn-primary" style={{ border: 'none', padding: '12px 25px', borderRadius: '6px', cursor: (selectedAnswer === null || showFeedback) ? 'not-allowed' : 'pointer', opacity: (selectedAnswer === null || showFeedback) ? 0.6 : 1, fontWeight: 'bold', width: '100%', fontFamily: 'Fira GO' }}>
                          {showFeedback ? 'მოწმდება...' : (currentQuizIndex + 1 === selectedLecture.quizzes.length ? 'დასრულება' : 'შემდეგი კითხვა')}
                        </button>
                      </div>
                    ) : (
                      <p style={{ color: '#aaa' }}>ამ ლექციაზე ქვიზები არ არის დამატებული.</p>
                    )
                  ) : (
                    <div style={{ textAlign: 'center', padding: '20px 0' }}>
                      {quizScore === selectedLecture.quizzes.length ? (
                        <div>
                          <h3 style={{ color: '#28a745', marginBottom: '15px' }}>🎉 შესანიშნავია! ლექცია უშეცდომოდ დაასრულე!</h3>
                          <p style={{ fontSize: '20px', marginBottom: '20px' }}>შენი შედეგი: <strong style={{ color: '#ff4d4d', fontSize: '24px' }}>{quizScore} / {selectedLecture.quizzes.length}</strong></p>
                          <p style={{ color: '#28a745', marginBottom: '20px', fontSize: '15px' }}>✓ შემდეგი ლექცია ახლა უკვე გახსნილია!</p>
                        </div>
                      ) : (
                        <div>
                          <h3 style={{ color: '#dc3545', marginBottom: '15px' }}>⚠️ ტესტი ვერ ჩაბარდა!</h3>
                          <p style={{ fontSize: '18px', marginBottom: '15px' }}>შენი შედეგი: <strong style={{ color: '#ff4d4d', fontSize: '22px' }}>{quizScore} / {selectedLecture.quizzes.length}</strong></p>
                          <p style={{ color: '#aaa', marginBottom: '20px', fontSize: '14px' }}>აუცილებელია ყველა კითხვას გასცე სწორი პასუხი, რომ შემდეგი ლექცია გაიხსნას. სცადე თავიდან!</p>
                        </div>
                      )}
                      
                      <button onClick={() => setSelectedLecture(null)} className="btn-primary" style={{ border: 'none', padding: '12px 25px', borderRadius: '6px', cursor: 'pointer', fontFamily: 'Fira GO', fontWeight: 'bold' }}>სასწავლო სიაში დაბრუნება 📚</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {role === 'admin' && (
            <div style={{ marginTop: '50px', background: '#1a1a20', padding: '30px', borderRadius: '12px', border: '1px dashed #ff4d4d' }}>
              <h3 style={{ color: '#ff4d4d', marginBottom: '20px' }}>🛠 ახალი ლექციის დამატება (ლექტორის პანელი)</h3>
              <form onSubmit={handleAddLecture}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>ლექციის სათაური:</label>
                    <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', background: '#111', border: '1px solid #333', color: 'white' }} placeholder="მაგ: ლექცია 3: დავით აღმაშენებელი" required />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>YouTube ვიდეოს ლინკი:</label>
                    <input type="text" value={newVideoUrl} onChange={e => setNewVideoUrl(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', background: '#111', border: '1px solid #333', color: 'white' }} placeholder="https://www.youtube.com/watch?v=..." required />
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px' }}>თემის მოკლე აღწერა:</label>
                  <textarea value={newDescription} onChange={e => setNewDescription(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', background: '#111', border: '1px solid #333', color: 'white', height: '80px', resize: 'vertical', fontFamily: 'Fira GO' }} placeholder="ჩაწერე რას ეხება ეს ლექცია მოკლედ..." />
                </div>

                <h4 style={{ color: '#ff4d4d', marginBottom: '15px', borderBottom: '1px solid #333', paddingBottom: '5px' }}>📝 ქვიზის აწყობა (სულ 4 კითხვა)</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  {questions.map((q, qIdx) => (
                    <div key={qIdx} style={{ background: '#111', padding: '15px', borderRadius: '8px', border: '1px solid #222' }}>
                      <span style={{ fontWeight: 'bold', color: '#ff4d4d', display: 'block', marginBottom: '10px' }}>კითხვა {qIdx + 1}:</span>
                      <input type="text" value={q.question} onChange={e => {
                        const updated = [...questions];
                        updated[qIdx].question = e.target.value;
                        setQuestions(updated);
                      }} style={{ width: '100%', padding: '8px', borderRadius: '4px', background: '#222', border: '1px solid #444', color: 'white', marginBottom: '10px' }} placeholder="ჩაწერე კითხვა..." required />
                      
                      <label style={{ fontSize: '12px', color: '#aaa', display: 'block', marginBottom: '5px' }}>სავარაუდო ვარიანტები:</label>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '10px' }}>
                        {q.options.map((opt, optIdx) => (
                          <input key={optIdx} type="text" value={opt} onChange={e => {
                            const updated = [...questions];
                            updated[qIdx].options[optIdx] = e.target.value;
                            setQuestions(updated);
                          }} style={{ width: '100%', padding: '8px', borderRadius: '4px', background: '#222', border: '1px solid #444', color: 'white' }} placeholder={`ვარიანტი ${optIdx + 1}`} required />
                        ))}
                      </div>

                      <label style={{ fontSize: '12px', color: '#aaa', display: 'block', marginBottom: '5px' }}>რომელია სწორი პასუხი?</label>
                      <select value={q.correct} onChange={e => {
                        const updated = [...questions];
                        updated[qIdx].correct = parseInt(e.target.value);
                        setQuestions(updated);
                      }} style={{ width: '100%', padding: '8px', borderRadius: '4px', background: '#222', border: '1px solid #444', color: 'white' }}>
                        <option value={0}>ვარიანტი 1</option>
                        <option value={1}>ვარიანტი 2</option>
                        <option value={2}>ვარიანტი 3</option>
                        <option value={3}>ვარიანტი 4</option>
                      </select>
                    </div>
                  ))}
                </div>

                <button type="submit" style={{ background: '#28a745', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '6px', cursor: 'pointer', fontFamily: 'Fira GO', fontWeight: 'bold', width: '100%' }}>ლექციის გამოქვეყნება 🚀</button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
const prayers = [
  {
  title: "Durga Chalisa",
  category: "Normal Day Pooja,navratri",
  text: `नमो नमो दुर्गे सुख करनी
नमो नमो अम्बे दुःख हरनी
निरंकार है ज्योति तुम्हारी
तिहूं लोक फैली उजियारी
शशि ललाट मुख महाविशाला
नेत्र लाल भृकुटी विकराला
रूप मातु को अधिक सुहावे
दरश करत जन अति सुख पावे
(नमो-नमो, नमो-नमो)
(नमो-नमो, नमो-नमो)
तुम संसार शक्ति लै कीना
पालन हेतु अन्न धन दीना
अन्नपूर्णा हुई जग पाला
तुम ही आदि सुन्दरी बाला
प्रलयकाल सब नाशन हारी
तुम गौरी शिव शंकर प्यारी
शिव योगी तुम्हरे गुण गावें
ब्रह्मा विष्णु तुम्हें नित ध्यावें
(नमो-नमो, नमो-नमो)
(नमो-नमो, नमो-नमो)
रुप सरस्वती का तुम धारा
दे सुबुद्धि ॠषि मुनिन उबारा
धरा रूप नरसिंह को अम्बा
प्रकट भई फाडकर खम्बा
रक्षा कर प्रह्लाद बचायो
हिरण्याक्ष को स्वर्ग पठायो
लक्ष्मी रूप धरो जग माहीं
श्री नारायण अंग समाहीं
(नमो-नमो, नमो-नमो)
(नमो-नमो, नमो-नमो)
क्षीरसिन्धु में करत विलासा
दयासिन्धु दीजै मन आसा
हिंगलाज में तुम्हीं भवानी
महिमा अमित न जात बखानी
मातंगी धूमावति माता
भुवनेश्वरि बगला सुखदाता
श्री भैरव तारा जग तारिणि
छिन्न भाल भव दुःख निवारिणि
(नमो-नमो, नमो-नमो)
(नमो-नमो, नमो-नमो)
केहरि वाहन सोह भवानी
लांगुर वीर चलत अगवानी
कर में खप्पर खड्ग विराजे
जाको देख काल डर भागे
सोहे कर अस्त्र और त्रिशूला
जाते उठत शत्रु हिय शुला
नगरकोट में तुम्हीं विराजत
तिहूं लोक में डंका बाजत
(नमो-नमो, नमो-नमो)
(नमो-नमो, नमो-नमो)
शुंभ निशुंभ दानव तुम मारे
रक्तबीज शंखन संहारे
महिषासुर नृप अति अभिमानी
जेहि अघ भार मही अकुलानी
रूप कराल कालिका धारा
सैन्य सहित तुम तिहि संहारा
परी भीर संतन पर जब जब
भई सहाय मातु तुम तब तब
(नमो-नमो, नमो-नमो)
(नमो-नमो, नमो-नमो)
अमरपूरी अरू बासव लोका
तब महिमा सब कहें अशोका
ज्वाला में है ज्योति तुम्हारी
तुम्हें सदा पूजें नर नारी
प्रेम भक्ति से जो यश गावे
दुःख दारिद्र निकट नहिं आवे
ध्यावे तुम्हें जो नर मन लाई
जन्म मरण ते सो छुटि जाई
(नमो-नमो, नमो-नमो)
(नमो-नमो, नमो-नमो)
जोगी सुर मुनि कहत पुकारी
योग न हो बिन शक्ति तुम्हरी
शंकर आचारज तप कीनो
काम अरु क्रोध जीति सब लीनो
निशिदिन ध्यान धरो शंकर को
काहु काल नहीं सुमिरो तुमको
शक्ति रूप को मरम न पायो
शक्ति गई तब मन पछतायो
(नमो-नमो, नमो-नमो)
(नमो-नमो, नमो-नमो)
शरणागत हुई कीर्ति बखानी
जय जय जय जगदंब भवानी
भई प्रसन्न आदि जगदम्बा
दई शक्ति नहिं कीन विलंबा
मोको मातु कष्ट अति घेरो
तुम बिन कौन हरै दुःख मेरो
आशा तृष्णा निपट सतावें
रिपु मूरख मोहे अति दर पावे
(नमो-नमो, नमो-नमो)
(नमो-नमो, नमो-नमो)
शत्रु नाश कीजै महारानी
सुमिरौं इकचित तुम्हें भवानी
करो कृपा हे मातु दयाला
ॠद्धि सिद्धि दे करहु निहाला
जब लगि जिऊं दया फल पाऊं
तुम्हरो यश मैं सदा सुनाऊं
दुर्गा चालीसा जो गावै
सब सुख भोग परम पद पावै
देवीदास शरण निज जानी
करहु कृपा जगदम्ब भवानी`
}
];

const prayerSelect = document.getElementById("prayerSelect");
const categorySelect = document.getElementById("categorySelect");
const searchInput = document.getElementById("searchInput");
const prayerList = document.getElementById("prayerList");

function displayPrayers(list) {
  prayerList.innerHTML = "";

  if (list.length === 0) {
    prayerList.innerHTML = "<p>No prayers found.</p>";
    return;
  }

  list.forEach(function (prayer) {
    const prayerCard = document.createElement("article");

    prayerCard.className = "prayer-card";

    prayerCard.innerHTML = `
      <h2>${prayer.title}</h2>
      <h3>${prayer.category}</h3>
      <div class="prayer-text">${prayer.text}</div>
    `;

    prayerList.appendChild(prayerCard);
  });
}

function loadPrayerOptions() {
  prayers.forEach(function (prayer, index) {
    const option = document.createElement("option");

    option.value = index;
    option.textContent = prayer.title;

    prayerSelect.appendChild(option);
  });
}

prayerSelect.addEventListener("change", function () {
  if (prayerSelect.value === "") {
    displayPrayers(prayers);
  } else {
    const selectedPrayer = prayers[prayerSelect.value];
    displayPrayers([selectedPrayer]);
  }
});

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();

  const filteredPrayers = prayers.filter(function (prayer) {
    return prayer.title.toLowerCase().includes(searchText);
  });

  displayPrayers(filteredPrayers);
});

loadPrayerOptions();
displayPrayers(prayers);categorySelect.addEventListener("change", function () {
  const selectedCategory = categorySelect.value;

  const filteredPrayers = prayers.filter(function (prayer) {
    return (
      selectedCategory === "all" ||
      prayer.category === selectedCategory
    );
  });

  displayPrayers(filteredPrayers);
});

const prayers = [
  {
  title: "Durga Chalisa",
  category: "Normal Day Pooja",
  text: `नमो नमो दुर्गे सुख करनी ।
नमो नमो दुर्गे दुःख हरनी ॥
पूरा हिंदी पाठ यहाँ लिखें।`
}
];

const prayerSelect = document.getElementById("prayerSelect");
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
displayPrayers(prayers);

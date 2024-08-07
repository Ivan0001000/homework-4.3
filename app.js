let birthYear = prompt("Введіть свій рік народження:");

if (birthYear === null) {
  alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else {
  let city = prompt("В якому місті Ви живете?");

  if (city === null) {
    alert("Шкода, що Ви не захотіли ввести своє місто.");
  } else {
    let sport = prompt("Ваш улюблений вид спорту?");

    if (sport === null) {
      alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
    } else {
      let currentYear = new Date().getFullYear();
      let age = currentYear - birthYear;

      let cityMessage;
      switch (city.toLowerCase()) {
        case "київ":
          cityMessage = "Ти живеш у столиці України.";
          break;
        case "вашингтон":
          cityMessage = "Ти живеш у столиці США.";
          break;
        case "лондон":
          cityMessage = "Ти живеш у столиці Великої Британії.";
          break;
        default:
          cityMessage = `Ти живеш у місті ${city}.`;
          break;
      }

      let sportMessage;
      switch (sport.toLowerCase()) {
        case "футбол":
          sportMessage = "Круто! Хочеш стати як Ліонель Мессі?";
          break;
        case "баскетбол":
          sportMessage = "Круто! Хочеш стати як Майкл Джордан?";
          break;
        case "теніс":
          sportMessage = "Круто! Хочеш стати як Роджер Федерер?";
          break;
        default:
          sportMessage = `Ваш улюблений вид спорту: ${sport}.`;
          break;
      }

      alert(`Ваш вік: ${age}\n${cityMessage}\n${sportMessage}`);
    }
  }
}

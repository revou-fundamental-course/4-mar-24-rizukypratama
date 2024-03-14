function hitungBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var gender = document.querySelector('input[name="gender"]:checked');

    if (weight !== "" && height !== "" && gender) {
      var bmi = calculateBMI(weight, height);
      displayResult(bmi, gender.value);
    } else {
      alert("Silakan masukkan berat badan, tinggi badan, dan pilih jenis kelamin terlebih dahulu.");
    }
  }

  function calculateBMI(weight, height) {
    height = height / 100; // Konversi tinggi ke meter
    return (weight / (height * height)).toFixed(2);
  }

  function displayResult(bmi, gender) {
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "BMI Anda <br> " + bmi;

    var category = getBMICategory(bmi);
    var Note = getBMINote(bmi);
    var solution = getBMISolution(bmi);
    resultElement.innerHTML += "<br>" + category;
    resultElement.innerHTML += "<br>Jenis Kelamin " + gender;
    resultElement.innerHTML += "<br>" + Note;
    resultElement.innerHTML += "<br> Saran : " + solution;
  }

  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal (ideal)";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Kelebihan berat badan";
    } else {
      return "Kegemukan (Obesitas)";
    }
  }

  function getBMINote(bmi) {
    if (bmi < 18.5) {
      return "Anda Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Anda memiliki berat badan ideal";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Anda memilili berat badan berlebih";
    } else {
      return "Anda terlalu gemuk";
    }
  }

  function getBMISolution(bmi) {
    if (bmi < 18.5) {
      return "anda harus periksa ke dokter";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "anda cukup ideal, jaga kesehatan anda";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "anda harus berhati-hati, jika perlu olahraga teratur dan diet";
    } else {
      return "anda harus diet dan olahraga untuk mengurangi obesitas";
    }
  }
  
  function resetForm() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("laki-laki").checked = false;
    document.getElementById("Wanita").checked = false;
  }

function unduhHasilBMI() {
  var resultText = document.getElementById("result").innerText;
  var blob = new Blob([resultText], { type: "text/plain" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "hasil_bmi.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
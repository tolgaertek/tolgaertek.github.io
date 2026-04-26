document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. TEMA DEĞİŞTİRME İŞLEMİ ---
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const htmlElement = document.documentElement; // <html> etiketini seçer

    themeToggleBtn.addEventListener("click", function() {
        const currentTheme = htmlElement.getAttribute("data-bs-theme");
        
        if (currentTheme === "light") {
            htmlElement.setAttribute("data-bs-theme", "dark");
            themeToggleBtn.textContent = "Aydınlık Tema";
            themeToggleBtn.classList.replace("btn-outline-secondary", "btn-outline-light");
        } else {
            htmlElement.setAttribute("data-bs-theme", "light");
            themeToggleBtn.textContent = "Karanlık Tema";
            themeToggleBtn.classList.replace("btn-outline-light", "btn-outline-secondary");
        }
    });

    // --- 2. FORM YÖNETİMİ VE ÖZET OLUŞTURMA ---
    const applicationForm = document.getElementById("applicationForm");
    const formWarning = document.getElementById("formWarning");
    const resultArea = document.getElementById("resultArea");
    const clearFormBtn = document.getElementById("clearFormBtn");

    applicationForm.addEventListener("submit", function(event) {
        // ZORUNLU KURAL: Sayfanın yenilenmesini engelle
        event.preventDefault(); 

        // Form alanlarındaki verileri al
        const fullName = document.getElementById("fullName").value.trim();
        const emailAddress = document.getElementById("emailAddress").value.trim();
        const department = document.getElementById("department").value.trim();
        const experienceLevel = document.getElementById("experienceLevel").value;

        // ZORUNLU KURAL: Eksik alan kontrolü
        if (fullName === "" || emailAddress === "" || department === "" || experienceLevel === "") {
            // Hata mesajını göster, sonuç alanını gizle
            formWarning.classList.remove("d-none");
            resultArea.classList.add("d-none");
        } else {
            // Hata mesajını gizle
            formWarning.classList.add("d-none");
            
            // ZORUNLU KURAL: DOM Manipülasyonu ile Başvuru Özeti Üretme
            const summaryHTML = `
                <h4 class="alert-heading fw-bold">Başvuru Başarılı!</h4>
                <p>Sayın <strong>${fullName}</strong>, atölye kayıt işleminiz sistemimize ulaşmıştır. Girdiğiniz bilgiler aşağıdadır:</p>
                <hr>
                <ul class="mb-0">
                    <li><strong>E-posta:</strong> ${emailAddress}</li>
                    <li><strong>Bölüm:</strong> ${department}</li>
                    <li><strong>Deneyim Seviyesi:</strong> ${experienceLevel}</li>
                </ul>
            `;
            
            // Üretilen HTML'i sonuç alanına yazdır ve görünür yap
            resultArea.innerHTML = summaryHTML;
            resultArea.classList.remove("d-none");
        }
    });

    // --- 3. FORMU TEMİZLEME İŞLEMİ ---
    clearFormBtn.addEventListener("click", function() {
        applicationForm.reset();
        formWarning.classList.add("d-none");
        resultArea.classList.add("d-none");
    });

});

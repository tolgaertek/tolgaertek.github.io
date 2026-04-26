document.addEventListener("DOMContentLoaded", function() {
    
    // --- TEMA DEĞİŞTİRME ---
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    
    themeToggleBtn.addEventListener("click", function() {
        const htmlDoc = document.querySelector("html");
        const currentTheme = htmlDoc.getAttribute("data-bs-theme");
        
        if (currentTheme === "light") {
            htmlDoc.setAttribute("data-bs-theme", "dark");
            themeToggleBtn.textContent = "Aydınlık Tema";
            themeToggleBtn.classList.replace("btn-light", "btn-dark");
            themeToggleBtn.classList.replace("text-primary", "text-light");
        } else {
            htmlDoc.setAttribute("data-bs-theme", "light");
            themeToggleBtn.textContent = "Karanlık Tema";
            themeToggleBtn.classList.replace("btn-dark", "btn-light");
            themeToggleBtn.classList.replace("text-light", "text-primary");
        }
    });

    // --- FORM YÖNETİMİ ---
    const applicationForm = document.getElementById("applicationForm");
    const formWarning = document.getElementById("formWarning");
    const resultArea = document.getElementById("resultArea");
    const defaultResult = document.getElementById("defaultResult");
    const clearFormBtn = document.getElementById("clearFormBtn");

    applicationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Sayfa yenilenmesini engelle

        // Verileri al
        const fullName = document.getElementById("fullName").value.trim();
        const emailAddress = document.getElementById("emailAddress").value.trim();
        const department = document.getElementById("department").value.trim();
        const grade = document.getElementById("grade").value;
        const sessionName = document.getElementById("sessionName").value;
        const attendanceType = document.getElementById("attendanceType").value;
        const shortMessage = document.getElementById("shortMessage").value.trim();
        const consentCheck = document.getElementById("consentCheck").checked;

        // Eksik alan veya onay kutusu kontrolü
        if (!fullName || !emailAddress || !department || !grade || !sessionName || !attendanceType || !shortMessage || !consentCheck) {
            formWarning.classList.remove("d-none");
            resultArea.classList.add("d-none");
            defaultResult.classList.remove("d-none");
        } else {
            formWarning.classList.add("d-none");
            defaultResult.classList.add("d-none");
            
            // Başvuru Özeti Üretme
            const summaryHTML = `
                <h4 class="alert-heading fw-bold">Başvuru Özeti</h4>
                <p><strong>${fullName}</strong>, başvurunuz başarıyla alındı. Bilgileriniz aşağıdadır:</p>
                <hr>
                <div class="row">
                    <div class="col-md-6">
                        <ul class="list-unstyled mb-0">
                            <li class="mb-1"><strong>E-posta:</strong> ${emailAddress}</li>
                            <li class="mb-1"><strong>Bölüm:</strong> ${department}</li>
                            <li class="mb-1"><strong>Sınıf:</strong> ${grade}</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <ul class="list-unstyled mb-0">
                            <li class="mb-1"><strong>Oturum:</strong> ${sessionName}</li>
                            <li class="mb-1"><strong>Katılım Türü:</strong> ${attendanceType}</li>
                            <li class="mb-1"><strong>Mesaj:</strong> ${shortMessage}</li>
                        </ul>
                    </div>
                </div>
            `;
            
            resultArea.innerHTML = summaryHTML;
            resultArea.classList.remove("d-none");
        }
    });

    // --- FORMU TEMİZLEME ---
    clearFormBtn.addEventListener("click", function() {
        applicationForm.reset();
        formWarning.classList.add("d-none");
        resultArea.classList.add("d-none");
        defaultResult.classList.remove("d-none");
    });
});

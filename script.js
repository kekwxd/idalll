const messages = [
    "Emin misin?",
    "Gerçekten emin misin??",
    "Kesin mi?",
    "Pookie lütfen...",
    "Bir daha düşün!",
    "Hayır dersen çok üzüleceğim...",
    "Çoooook üzüleceğim...",
    "Ama gerçekten çooook üzüleceğim...",
    "Tamam, artık sormayacağım...",
    "Şaka yaptım! Lütfen evet de! ❤️",
    "Sonsuza kadar pişman olabilirsin...",
    "Beni gerçekten böyle bırakacak mısın?",
    "İçinden bir ses 'evet' diyor, duyuyorum!",
    "Bir bak, belki fikrini değiştirirsin!",
    "Bak, sana güveniyorum...",
    "Eğer evet dersen, dünyanın en mutlu insanı olurum!",
    "Hayır mı? Yok artık...",
    "Lütfen, son bir kez düşün!",
    "Yemin ederim bir daha sormam... belki.",
    "Gerçekten 'hayır' mı? Son kararın mı?",
    "Üzülürüm ama saygı duyarım... belki de duymam."
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

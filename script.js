/* =========================
   دالة عامة للتعامل مع أي مادة
========================= */
function handleSelect(prefix, selectId, storageKey, value) {
  // أخفي كل المدرسين للمادة
  document.querySelectorAll(`[id^="${prefix}-"]`).forEach(el => {
    el.style.display = "none";
  });

  // لو فيه اختيار
  if (value) {
    const selectedCard = document.getElementById(value);
    if (selectedCard) {
      selectedCard.style.display = "block";
      localStorage.setItem(storageKey, value);
    }
  } else {
    // لو اختار none
    localStorage.removeItem(storageKey);
  }
}

/* =========================
   دوال كل مادة
========================= */
function showTeacherchem(val) {
  handleSelect("Chem", "select-chem", "chemTeacher", val);
}

function showTeachereng(val) {
  handleSelect("eng", "select-eng", "engTeacher", val);
}

function showTeacherbio(val) {
  handleSelect("bio", "select-bio", "bioTeacher", val);
}

function showTeachermath(val) {
  handleSelect("math", "select-math", "mathTeacher", val);
}

function showTeacherphy(val) {
  handleSelect("phy", "select-phy", "phyTeacher", val);
}

function showTeacherarabic(val) {
  handleSelect("ara", "select-ara", "araTeacher", val);
}

/* =========================
   استرجاع الاختيارات عند فتح الموقع
========================= */
window.addEventListener("DOMContentLoaded", () => {
  const settings = [
    ["Chem", "select-chem", "chemTeacher"],
    ["eng", "select-eng", "engTeacher"],
    ["bio", "select-bio", "bioTeacher"],
    ["math", "select-math", "mathTeacher"],
    ["phy", "select-phy", "phyTeacher"],
    ["ara", "select-ara", "araTeacher"]
  ];

  settings.forEach(([prefix, selectId, storageKey]) => {
    const saved = localStorage.getItem(storageKey);

    // أخفي كل المدرسين للمادة
    document.querySelectorAll(`[id^="${prefix}-"]`).forEach(el => {
      el.style.display = "none";
    });

    if (saved) {
      const select = document.getElementById(selectId);
      const card = document.getElementById(saved);

      // رجّع الـ option المختار
      if (select) select.value = saved;

      // أظهر الكارت
      if (card) card.style.display = "block";
    }
  });
});

/* =========================
   المودال (فتح / قفل)
========================= */
function openBox() {
  document.getElementById("overlay").style.display = "flex";
}

function closeBox() {
  document.getElementById("overlay").style.display = "none";
}

/* =========================
   إغلاق المودال بزر ESC (اختياري)
========================= */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeBox();
  }
});

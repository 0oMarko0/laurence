const countDownDate = new Date(2023, 7, 18, 20).getTime();
const MS_PER_SECONDS = 1000;
const MS_PER_MINUTES = MS_PER_SECONDS * 60;
const MS_PER_HOURS = MS_PER_MINUTES * 60;
const MS_PER_DAY = MS_PER_HOURS * 24;

export default function updateDate(elements) {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / MS_PER_DAY);
  const hours = Math.floor((distance % MS_PER_DAY) / MS_PER_HOURS);
  const minutes = Math.floor((distance % MS_PER_HOURS) / MS_PER_MINUTES);
  const seconds = Math.floor((distance % MS_PER_MINUTES) / MS_PER_SECONDS);

  elements.days.innerHTML = days.toString();
  elements.hours.innerHTML = hours.toString();
  elements.minutes.innerHTML = minutes.toString();
  elements.seconds.innerHTML = seconds.toString();
}

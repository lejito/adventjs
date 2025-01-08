export function getCompleted(timeWorked: string, totalTime: string): string {
  const [hoursWorked, minutesWorked, secondsWorked] = timeWorked
    .split(":")
    .map(Number);
  const [hoursTotal, minutesTotal, secondsTotal] = totalTime
    .split(":")
    .map(Number);

  const workedSeconds = hoursWorked * 3600 + minutesWorked * 60 + secondsWorked;
  const totalSeconds = hoursTotal * 3600 + minutesTotal * 60 + secondsTotal;

  let percentage = 100;
  if (workedSeconds !== totalSeconds)
    percentage = Math.round((workedSeconds / totalSeconds) * 100);

  return percentage + "%";
}

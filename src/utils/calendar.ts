import { weddingData } from '../config/weddingData';

export function generateGoogleCalendarUrl(): string {
  const { host, nikahCelebration, receptionCelebration, event } = weddingData;
  const title = encodeURIComponent(
    `Nikah & Wedding Reception | ${host.parentsTitle}`
  );
  const details = encodeURIComponent(
    `Bismillahir-Rahmanir-Rahim\n\n` +
    `Joint wedding celebrations hosted by ${host.parentsTitle}:\n\n` +
    `1. Nikah Ceremony of beloved daughter:\n` +
    `${nikahCelebration.bride.fullName} & ${nikahCelebration.groom.fullName}\n` +
    `Time: ${nikahCelebration.timeFormatted}\n\n` +
    `2. Wedding Reception of beloved son:\n` +
    `${receptionCelebration.groom.fullName} & ${receptionCelebration.bride.fullName}\n` +
    `Time: ${receptionCelebration.timeFormatted}\n\n` +
    `Venue: ${event.venue}, ${event.address}\n` +
    `Your presence and sincere prayers are our most treasured gift.`
  );
  const location = encodeURIComponent(`${event.venue}, ${event.address}`);
  
  // Date: 19 Dec 2026 11:30 AM to 04:00 PM (local)
  const startTime = "20261219T113000";
  const endTime = "20261219T160000";

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
}

export function downloadIcsFile(): void {
  const { host, nikahCelebration, receptionCelebration, event } = weddingData;
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Kadiri Family//Nikah and Reception Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:Nikah & Wedding Reception | ${host.parentsTitle}`,
    `DESCRIPTION:Nikah of ${nikahCelebration.bride.shortName} & ${nikahCelebration.groom.shortName} and Wedding Reception of ${receptionCelebration.groom.shortName} & ${receptionCelebration.bride.shortName} at ${event.venue}\\, ${event.address}.`,
    `LOCATION:${event.venue}\\, ${event.address}`,
    "DTSTART:20261219T113000",
    "DTEND:20261219T160000",
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `Wedding-Celebration-Kadiri-Family.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

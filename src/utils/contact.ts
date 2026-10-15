import { BUSINESS_CONFIG } from '../config/business';

export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    const yOffset = -80; // Account for fixed navbar
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export function openPhone(): void {
  window.location.href = BUSINESS_CONFIG.phoneUri;
}

export function openEmail(subject?: string, body?: string): void {
  let url = `mailto:${BUSINESS_CONFIG.email}`;
  const params: string[] = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  if (params.length > 0) {
    url += `?${params.join('&')}`;
  }
  window.location.href = url;
}

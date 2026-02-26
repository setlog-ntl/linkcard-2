export interface LinkItem {
  title: string;
  titleEn?: string;
  url: string;
  icon?: string;
}

export interface SocialItem {
  platform: string;
  url: string;
}

/** 배경 스타일: gradient | solid | mesh | aurora | glass | dark */
export type BgStyle = 'gradient' | 'solid' | 'mesh' | 'aurora' | 'glass' | 'dark';
/** 카드 스타일: rounded | pill | square | glass | neon */
export type CardStyle = 'rounded' | 'pill' | 'square' | 'glass' | 'neon';
/** 폰트 패밀리: system | serif | mono | display */
export type FontFamily = 'system' | 'serif' | 'mono' | 'display';

const DEMO_LINKS: LinkItem[] = [
  {
    title: '내 유튜브 채널',
    titleEn: 'My YouTube Channel',
    url: 'https://youtube.com',
    icon: 'youtube',
  },
  {
    title: '블로그 구경하기',
    titleEn: 'Visit My Blog',
    url: 'https://blog.example.com',
    icon: 'pen-line',
  },
  {
    title: '포트폴리오',
    titleEn: 'Portfolio',
    url: 'https://portfolio.example.com',
    icon: 'briefcase',
  },
  {
    title: '할인 이벤트 바로가기',
    titleEn: 'Special Offers',
    url: 'https://shop.example.com',
    icon: 'shopping-bag',
  }
];

const _basePath = process.env.NEXT_PUBLIC_REPO_NAME ? `/${process.env.NEXT_PUBLIC_REPO_NAME}` : '';

function parseJSON<T>(raw: string | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export const siteConfig = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || '내 링크 페이지',
  siteNameEn: process.env.NEXT_PUBLIC_SITE_NAME_EN || 'My Link Page',
  bio: process.env.NEXT_PUBLIC_BIO || '안녕하세요! 여기서 저의 모든 링크를 확인하세요.',
  bioEn: process.env.NEXT_PUBLIC_BIO_EN || 'Hello! Check out all my links here.',
  avatarUrl: process.env.NEXT_PUBLIC_AVATAR_URL || `${_basePath}/images/1772115316346-upload.webp`,
  theme: process.env.NEXT_PUBLIC_THEME || 'aurora',
  bgStyle: (process.env.NEXT_PUBLIC_BG_STYLE || 'aurora') as BgStyle,
  primaryColor: process.env.NEXT_PUBLIC_PRIMARY_COLOR || '#818cf8',
  cardStyle: (process.env.NEXT_PUBLIC_CARD_STYLE || 'rounded') as CardStyle,
  fontFamily: (process.env.NEXT_PUBLIC_FONT_FAMILY || 'system') as FontFamily,
  links: parseJSON<LinkItem[]>(process.env.NEXT_PUBLIC_LINKS, DEMO_LINKS),
  socials: parseJSON<SocialItem[]>(process.env.NEXT_PUBLIC_SOCIALS, [
  { platform: 'instagram', url: 'https://instagram.com' },
  { platform: 'youtube', url: 'https://youtube.com' }
]),
  youtubeUrl: process.env.NEXT_PUBLIC_YOUTUBE_URL || null,
  gaId: process.env.NEXT_PUBLIC_GA_ID || null,
};

export type SiteConfig = typeof siteConfig;

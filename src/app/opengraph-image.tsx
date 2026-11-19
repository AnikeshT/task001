import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Tourpublish - Luxury Tours in Italy Curated Directory';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0d0d0f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle Accent Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'rgba(253, 61, 75, 0.15)',
            filter: 'blur(80px)',
          }}
        />

        {/* Brand Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            padding: '8px 24px',
            borderRadius: '999px',
            color: '#fd3d4b',
            fontSize: '16px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '32px',
          }}
        >
          <span>Curated Travel Directory</span>
          <span style={{ color: '#ffffff' }}>•</span>
          <span style={{ color: '#ffffff' }}>staging.klnk.tv Direct Checkout</span>
        </div>

        {/* Brand Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '84px',
            fontWeight: 900,
            letterSpacing: '-2px',
            marginBottom: '20px',
          }}
        >
          <span style={{ color: '#fd3d4b' }}>Tour</span>
          <span style={{ color: '#ffffff' }}>publish</span>
          <span style={{ color: '#fd3d4b' }}>.</span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '36px',
            fontWeight: 600,
            color: '#e2e8f0',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.3,
            marginBottom: '40px',
          }}
        >
          Curated Luxury Tours in Italy, Crafted by Local Masters
        </div>

        {/* Terroirs Strip */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            color: '#94a3b8',
            fontSize: '18px',
            fontWeight: 500,
          }}
        >
          <span>Amalfi Coast</span>
          <span>•</span>
          <span>Tuscany</span>
          <span>•</span>
          <span>Dolomites</span>
          <span>•</span>
          <span>Sicily</span>
          <span>•</span>
          <span>Lake Como</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

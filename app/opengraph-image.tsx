import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Ruben Glenn Madredano — Senior Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Glow blobs */}
        <div style={{ position: 'absolute', top: 80, left: 180, width: 300, height: 300, borderRadius: '50%', background: 'rgba(225,29,72,0.12)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: 80, right: 180, width: 300, height: 300, borderRadius: '50%', background: 'rgba(168,85,247,0.10)', filter: 'blur(80px)' }} />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
          <div style={{ color: '#ffffff', fontSize: 28, fontWeight: 800, letterSpacing: '-1px' }}>
            PSPIPES<span style={{ color: '#e11d48' }}>.</span>
          </div>
        </div>

        {/* Name */}
        <div style={{ color: '#ffffff', fontSize: 60, fontWeight: 800, letterSpacing: '-2px', lineHeight: 1.1, textAlign: 'center' }}>
          Ruben Glenn Madredano
        </div>

        {/* Title */}
        <div style={{ color: '#94a3b8', fontSize: 28, fontWeight: 500, marginTop: 16 }}>
          Senior Software Engineer
        </div>

        {/* Divider + Projects */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 36 }}>
          <div style={{ color: '#334155', fontSize: 14 }}>▬▬▬▬</div>
          <div style={{ color: '#64748b', fontSize: 18 }}>Motoclub Connect · BadgeHero</div>
          <div style={{ color: '#334155', fontSize: 14 }}>▬▬▬▬</div>
        </div>

        {/* Stack */}
        <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
          {['Node.js', 'Angular', 'Next.js', 'MongoDB', 'Ionic'].map((t) => (
            <div
              key={t}
              style={{
                padding: '6px 16px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 999,
                color: '#94a3b8',
                fontSize: 15,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}

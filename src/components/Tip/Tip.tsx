/** @jsxImportSource @emotion/react */
// option 2: emotion/react with jsx pragma and jsxFrag pragma
// for adding jsx prgma read: https://emotion.sh/docs/css-prop#jsx-pragma
// https://stackoverflow.com/questions/66965774/emotion-css-prop-and-nextjs-new-jsx-runtime-error-pragma-and-pragmafrag-canno
// https://emotion.sh/docs/typescript#css-prop
import { jsx, css } from '@emotion/react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

function LightBulbIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </SvgIcon>
  );
}

const divStyle = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
})

export default function ProTip() {
  return (
    <div css={divStyle}>
      <div css={{ background: '#7E1946', padding: '0.5rem', borderRadius: '0.2rem', width: 'fit-content', marginTop: '1rem' }}>
        <Typography sx={{ m: 1, p: 1 }} color="#0D0106" css={{ background: '#EEAAC9', borderRadius: '0.2rem' }}>
          <LightBulbIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Pro tip: sleep more.
        </Typography>
      </div>
    </div>
  );
}

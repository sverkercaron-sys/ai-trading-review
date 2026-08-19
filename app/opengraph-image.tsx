import { ImageResponse } from 'next/og';

export const alt = 'Soniqe — AI Trading Reviews, Tools & Research';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between',background:'#071018',color:'#f4f7f9',padding:'72px 82px',fontFamily:'Arial'}}>
      <div style={{display:'flex',fontSize:42,fontWeight:900,letterSpacing:1}}><span>SONI</span><span style={{color:'#46e0b3'}}>QE</span></div>
      <div style={{display:'flex',flexDirection:'column',maxWidth:920}}><div style={{color:'#46e0b3',fontSize:22,fontWeight:800,letterSpacing:3,textTransform:'uppercase'}}>AI Trading Reviews · Tools · Research</div><div style={{fontSize:72,fontWeight:900,lineHeight:1.02,letterSpacing:-4,marginTop:24}}>Research the return. Understand the risk.</div></div>
      <div style={{fontSize:24,color:'#9eb0bd'}}>Evidence · Drawdown · Fees · Leverage · Automated Trading</div>
    </div>,
    size
  );
}

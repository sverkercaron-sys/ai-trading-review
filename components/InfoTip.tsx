'use client';

export default function InfoTip({text}:{text:string}){
  return <span className="info-tip"><button type="button" className="info-button" aria-label="More information">i</button><span className="info-popover" role="tooltip">{text}</span></span>;
}

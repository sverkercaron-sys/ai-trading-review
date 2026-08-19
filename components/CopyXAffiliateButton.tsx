'use client';
import { track } from '@vercel/analytics';
const copyXAffiliateUrl='https://copyxapp.io/auth/register?e=jpRp5VL96EtSfBCyumc1bcaAaqZrkmHbKpPRfmXzysc&a=2';
export default function CopyXAffiliateButton({label='Open CopyX registration',context='general'}:{label?:string;context?:string}){return <div className="affiliate-cta"><a className="button" href={copyXAffiliateUrl} target="_blank" rel="sponsored noopener noreferrer" data-affiliate="copyx" data-context={context} onClick={()=>track('affiliate_click',{partner:'copyx',context})}>{label} →</a><p><small>Affiliate link. Soniqe may earn a commission if you register or purchase through this link. This does not affect our editorial assessment. <a href="/affiliate-disclosure">How affiliate links work</a>.</small></p></div>}

"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const trustpilotReviews = [
  { name: "James R.", flag: "🇺🇸", rating: 5, title: "Best IPTV I've tried — finally no buffering", text: "I've tried at least four different IPTV providers over the past two years, and none came close to Maple4K. Activation was fast, support answered quickly, and live sports finally run smoothly — which never happened before." },
  { name: "Daniel M.", flag: "🇨🇦", rating: 5, title: "Support that actually helps", text: "Customer service is what really made me stay with Maple4K. I came from another provider that promised premium servers but disappeared as soon as issues started. With Maple4K, support actually listens and responds quickly. Streams are stable even during peak hours." },
  { name: "Oliver T.", flag: "🇬🇧", rating: 5, title: "Consistent from day one", text: "I was skeptical because I've been burned before by IPTV services that work fine for a week and then become unusable. Maple4K has been consistent from day one. I tested it during live football and busy evenings, and streams stayed smooth the whole time." },
  { name: "Lucas P.", flag: "🇫🇷", rating: 5, title: "Quality and care far above the rest", text: "After comparing Maple4K with two other providers, the difference was obvious. The others were cheaper but unreliable with poor support. Maple4K helped me set everything up properly and followed up to make sure it worked." },
  { name: "Michael S.", flag: "🇺🇸", rating: 5, title: "My internet was never the problem", text: "My previous IPTV provider always blamed my internet whenever channels froze. With Maple4K, I realized the problem was never my internet. Streams are stable, HD quality is consistent, and live sports finally work without interruptions." },
  { name: "Ethan W.", flag: "🇦🇺", rating: 5, title: "Transparent — delivers exactly what they promise", text: "What impressed me most about Maple4K is transparency. Before subscribing, I asked many questions. Support gave honest answers without overselling. After subscribing, everything matched what they promised. No surprises, no outages." },
  { name: "Ryan B.", flag: "🇨🇦", rating: 5, title: "Fast activation and real support", text: "I switched to Maple4K after my old service failed during an important match and never replied again. Maple4K activated fast, and when I needed help on my Smart TV, support walked me through everything patiently. No serious issues since." },
  { name: "Thomas H.", flag: "🇬🇧", rating: 5, title: "Better stability and far better support", text: "Maple4K offers better stability and far better support than other providers I've tried. With others, replies were slow or generic. Maple4K support actually reads your message and gives proper help. Channels load quickly and everything works." },
  { name: "Andrew K.", flag: "🇺🇸", rating: 5, title: "Optimized and reliable", text: "I don't usually write reviews, but Maple4K deserves one. I came from a provider that overloaded servers and ignored customers. Maple4K feels optimized and reliable. Support gave useful tips instead of copy-paste replies." },
  { name: "Nathan C.", flag: "🇦🇺", rating: 5, title: "Consistency other providers can't match", text: "The biggest difference between Maple4K and other IPTV services is consistency. My previous providers were unpredictable. Maple4K has been stable since day one. Customer service even checked in after activation to make sure everything worked." },
  { name: "William J.", flag: "🇨🇦", rating: 5, title: "The comparison wasn't even close", text: "I tested Maple4K alongside my old provider for a week, and the comparison wasn't even close. Better image quality, faster channel switching, and no random disconnections. Support helped me transition smoothly." },
  { name: "Julien D.", flag: "🇫🇷", rating: 5, title: "Support doesn't disappear after payment", text: "What I appreciate about Maple4K is that support doesn't disappear after payment. I had questions about catch-up TV and channel organization, and everything was explained clearly. My previous provider ignored messages once I paid." },
  { name: "Mark L.", flag: "🇬🇧", rating: 5, title: "Most stable IPTV service I've had", text: "I've been using Maple4K for several months now, and it's the most stable IPTV service I've had. Live sports work perfectly, VOD loads fast, and support is responsive and polite whenever I need help. This is rare in the IPTV world." },
  { name: "Benjamin R.", flag: "🇩🇪", rating: 5, title: "Strong performance and real support", text: "I switched to Maple4K after comparing it with cheaper alternatives. Those services always had compromises. Maple4K delivers strong performance and real customer support. Activation was quick and assistance was available whenever needed." },
  { name: "Chris A.", flag: "🇺🇸", rating: 5, title: "Maple4K restored my trust in IPTV", text: "Maple4K restored my trust in IPTV services. After several bad experiences, I was ready to quit IPTV completely. Maple4K proved that a service can be stable, honest, and supported by real people who care about customers." },
  { name: "Patrick O.", flag: "🇮🇪", rating: 5, title: "Premium and reliable", text: "The service quality with Maple4K is clearly higher than other providers I've tried. Channels are stable, VOD selection is excellent, and support explains things properly instead of rushing. It feels premium and reliable." },
  { name: "Stefan M.", flag: "🇩🇪", rating: 5, title: "Delivers exactly what they advertise", text: "I appreciate how knowledgeable Maple4K's support team is. They explained differences between apps and devices instead of giving vague answers. My old provider oversold features that didn't work. Maple4K delivers what they advertise." },
  { name: "Jason F.", flag: "🇺🇸", rating: 5, title: "Reliable during peak times", text: "What sets Maple4K apart is reliability during peak times. My old provider always failed during big events. Maple4K handled everything smoothly. Support even checked in after a major sports event to confirm everything was fine." },
  { name: "Daniel N.", flag: "🇨🇦", rating: 5, title: "Faster, sharper, better support", text: "After switching to Maple4K, I realized how poor my previous IPTV service was. Faster loading, better picture quality, and real support make all the difference. Customer service is friendly and efficient." },
  { name: "Alex G.", flag: "🇳🇱", rating: 5, title: "Premium IPTV done properly", text: "Maple4K feels like a premium IPTV service done properly. I've tested many providers over the years, and none matched this level of stability and customer care. Support is patient, professional, and always available." },
];

const whatsappReviews = [
  { name: "Mark Wilson", flag: "🇺🇸", text: "Hey just wanted to say the service is working great 👍 Sports are smooth and no buffering so far. Appreciate the quick help yesterday." },
  { name: "Daniel Cooper", flag: "🇨🇦", text: "Thanks for the support. Setup was easy with your help. Much better than my last IPTV, that one was always freezing." },
  { name: "James Fletcher", flag: "🇬🇧", text: "All good on my side now. Streams are stable even during matches. Big difference compared to my old provider." },
  { name: "Ryan Mitchell", flag: "🇦🇺", text: "Working perfectly now. Customer service was very patient, thanks for that. Quality is solid." },
  { name: "Michael Turner", flag: "🇺🇸", text: "Just confirming everything is running fine. Live channels are smooth and VOD loads fast. Happy so far." },
  { name: "Liam Anderson", flag: "🇨🇦", text: "Appreciate the fast reply. Didn't expect support to answer that quickly honestly 😅 Service looks great." },
  { name: "Thomas Reed", flag: "🇬🇧", text: "Thanks again for the help earlier. This is way more stable than the IPTV I used before." },
  { name: "Chris Walker", flag: "🇺🇸", text: "All set now 👍 Tested during the game and no buffering at all. Really impressed." },
  { name: "Nathan Brooks", flag: "🇦🇺", text: "Service is running well. Had issues with my previous provider but none here so far." },
  { name: "Kevin Morris", flag: "🇺🇸", text: "Setup done and everything works. Thanks for guiding me step by step, much appreciated." },
  { name: "Daniel Hughes", flag: "🇬🇧", text: "Just wanted to let you know it's working perfectly. Channels load fast and quality is good." },
  { name: "Alex Peterson", flag: "🇨🇦", text: "Much better than what I had before. Support actually replies and helps, that's rare with IPTV." },
  { name: "Matthew Collins", flag: "🇺🇸", text: "No issues on my end today. Watched sports and movies without problems. Good service." },
  { name: "Oliver Grant", flag: "🇬🇧", text: "Thanks for checking in. Everything still running smoothly. Happy with the subscription." },
  { name: "Ryan Scott", flag: "🇨🇦", text: "Tested it last night during peak hours. No lag at all. Big upgrade from my last IPTV." },
  { name: "Jonathan Price", flag: "🇺🇸", text: "Service is solid. Had one question and you answered quickly. Appreciate it." },
  { name: "Ben Harris", flag: "🇦🇺", text: "All good now 👍 Streams are clear and stable. Setup was easier than expected." },
  { name: "Paul Edwards", flag: "🇬🇧", text: "Just confirming it's working great. Didn't get this stability with my old provider." },
  { name: "Jason Miller", flag: "🇺🇸", text: "Thanks for the support. Everything works as promised. No complaints so far." },
  { name: "Daniel Foster", flag: "🇨🇦", text: "Really happy with the service. Customer support made the difference honestly." },
];

const googleReviews = [
  { name: "Matthew Collins", rating: 5, text: "I've used a few IPTV services over the years and Maple4K is the first one that didn't disappoint after the first week. Channels load fast, sports are smooth, and quality stays consistent. Very solid service." },
  { name: "Daniel Thompson", rating: 5, text: "Switched from another provider that kept buffering during live games. Maple4K has been much better. Streams are stable and customer service actually replies when you message them. Big difference." },
  { name: "Christopher Miller", rating: 5, text: "Activation was fast and everything worked as expected. I use it mainly for live sports and movies and haven't had major problems. Contacted support once — polite and helpful. Definitely better than my previous service." },
  { name: "James Walker", rating: 5, text: "I was hesitant after bad experiences, but Maple4K surprised me. Picture quality is good, channels don't randomly freeze, and support stayed available until everything worked properly." },
  { name: "Ryan Peterson", rating: 5, text: "Maple4K has been reliable so far. Tested during busy hours and everything ran smoothly. With my old provider, weekends were always a problem. Support here is organized and responsive." },
  { name: "Andrew Johnson", rating: 5, text: "What I like most is consistency. With other services, quality changes from day to day. Maple4K has stayed stable since I subscribed. Support answered my questions clearly without rushing." },
  { name: "Liam O'Connor", rating: 5, text: "I mainly watch football and PPV events, and Maple4K handles them well. No major buffering. I asked support about channel categories and they explained it clearly. Much smoother than my previous provider." },
  { name: "Michael Harris", rating: 5, text: "Setup was straightforward. I contacted support just to confirm a few things and they replied faster than expected. Streams are clean and VOD works well. Feels more professional than most services." },
  { name: "Benjamin Carter", rating: 5, text: "Tried Maple4K after a friend recommended it. Compared to my old service, this is more stable and easier to use. Customer service didn't disappear after payment, which I'd experienced before." },
  { name: "Jason Reynolds", rating: 5, text: "Channels switch quickly and quality is consistent. Had one minor setup issue and support helped me fix it in a few minutes. Overall very satisfied." },
  { name: "William Anderson", rating: 5, text: "Been using Maple4K for a few months. Live sports are reliable and movies load without long waits. Support has been responsive every time. Definitely better than the IPTV service I used last year." },
  { name: "Thomas Bennett", rating: 5, text: "Maple4K does what it promises. No exaggerated claims, just a stable service. I had buffering issues with my old provider almost daily. With Maple4K, that hasn't happened." },
  { name: "Lucas Martin", rating: 5, text: "Good quality streams and fast activation. Customer service was helpful when I needed guidance. Compared to other services I tried, Maple4K feels more organized and reliable." },
  { name: "Kevin Brooks", rating: 5, text: "I don't usually leave reviews, but Maple4K has been solid. Sports channels work well, VOD selection is good, and support replies quickly instead of sending generic messages." },
  { name: "Daniel Roberts", rating: 5, text: "Switched to Maple4K after constant issues with another provider. The difference is noticeable. Better stream stability, much better support. Everything works smoothly on my devices." },
  { name: "Jonathan Lewis", rating: 5, text: "Activation was quick and support was available when I had questions. I mainly watch series and movies and everything plays without issues. Good and reliable service overall." },
  { name: "Steven Moore", rating: 5, text: "Maple4K has been stable during peak hours, which was my biggest problem with previous services. Customer service is responsive and professional. Happy with my subscription." },
  { name: "Paul Mitchell", rating: 5, text: "Channels load fast and quality stays consistent. Contacted support once and they handled it politely. Compared to other services I've used, this one feels more trustworthy." },
  { name: "Nathan Wilson", rating: 5, text: "Tested Maple4K alongside another provider and Maple4K clearly performed better. Less buffering, faster channel switching. Support helped me set everything up correctly from the start." },
  { name: "Alex Turner", rating: 5, text: "Reliable service with good picture quality. Customer support was helpful and easy to reach when I had a setup question. Much smoother than my last IPTV provider." },
];

const WA_ICON = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);


// Map emoji flags to ISO codes for flagcdn images
const FLAG_MAP: Record<string, string> = {
  "🇺🇸": "us", "🇨🇦": "ca", "🇬🇧": "gb", "🇫🇷": "fr",
  "🇦🇺": "au", "🇩🇪": "de", "🇮🇪": "ie", "🇳🇱": "nl",
};
const FlagImg = ({ flag }: { flag: string }) => {
  const code = FLAG_MAP[flag];
  if (!code) return <span>{flag}</span>;
  return (
    <img
      src={`https://flagcdn.com/20x15/${code}.png`}
      alt={code.toUpperCase()}
      width={20}
      height={15}
      style={{ borderRadius: 2, display: "inline-block", verticalAlign: "middle", marginLeft: 4 }}
    />
  );
};
const TrustpilotLogo = () => (
  <svg viewBox="0 0 260 62" width="180" height="44" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 0l5.5 17H52L37.5 27.5l5.5 17L28 34 13 44.5l5.5-17L4 17h18.5z" fill="#00b67a"/>
    <path d="M28 0l5.5 17H52L37.5 27.5 28 34V0z" fill="#005128"/>
    <text x="60" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="22" fill="#191919">Trustpilot</text>
    <g transform="translate(60,32)">
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={i*24} y={0} width={20} height={20} rx="2" fill="#00b67a"/>
      ))}
      {[0,1,2,3,4].map(i => (
        <text key={`s${i}`} x={i*24+10} y={10} textAnchor="middle" dominantBaseline="middle" fontSize="14" fill="white">★</text>
      ))}
    </g>
  </svg>
);

const GoogleReviewsLogo = () => (
  <svg viewBox="0 0 260 56" width="220" height="50" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 10C15.4 10 10 15.4 10 22s5.4 12 12 12c5.6 0 10.3-3.8 11.6-9H22v-4h16.2c.2 1 .3 2 .3 3 0 8.8-5.9 15-16.5 15C10.5 39 4 32.5 4 22S10.5 5 22 5c5.6 0 10.2 2.1 13.8 5.4l-3.6 3.6C29.8 11.6 26.2 10 22 10z" fill="#4285F4"/>
    <text x="50" y="26" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="24" dominantBaseline="middle">
      <tspan fill="#4285F4">G</tspan><tspan fill="#EA4335">o</tspan><tspan fill="#FBBC05">o</tspan><tspan fill="#4285F4">g</tspan><tspan fill="#34A853">l</tspan><tspan fill="#EA4335">e</tspan>
    </text>
    <text x="50" y="48" fontFamily="Arial,sans-serif" fontWeight="600" fontSize="15" fill="#5F6368">Reviews</text>
    <text x="135" y="48" fontFamily="Arial,sans-serif" fontSize="15" fill="#FBBC05" dominantBaseline="auto">★★★★★</text>
  </svg>
);

function useAutoSlide(total: number, interval: number) {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const pausedUntil = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (Date.now() < pausedUntil.current) return;
      setSliding(true);
      setTimeout(() => {
        setCurrent(c => (c + 1) % total);
        setSliding(false);
      }, 420);
    }, interval);
    return () => clearInterval(timer);
  }, [total, interval]);

  const go = useCallback((n: number) => {
    pausedUntil.current = Date.now() + 9000;
    setSliding(true);
    setTimeout(() => { setCurrent(n); setSliding(false); }, 420);
  }, []);

  return { current, go, sliding };
}

const slideStyle = (sliding: boolean): React.CSSProperties => ({
  transition: "opacity 0.42s ease, transform 0.42s cubic-bezier(0.25,0.46,0.45,0.94)",
  opacity: sliding ? 0 : 1,
  transform: sliding ? "translateX(32px)" : "translateX(0)",
});

const ProgressDots = ({ total, current, go }: { total: number; current: number; go: (n: number) => void }) => (
  <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 22 }}>
    {Array.from({ length: total }).map((_, i) => (
      <button key={i} onClick={() => go(i)} style={{
        width: i === current ? 26 : 10, height: 10, borderRadius: 99,
        border: "none", cursor: "pointer", padding: 0, fontFamily: "inherit",
        background: i === current ? "#F96E5B" : "rgba(63,154,174,0.3)",
        transition: "all 0.45s cubic-bezier(0.34,1.56,0.64,1)",
      }} />
    ))}
  </div>
);

const TP_STARS = () => (
  <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
    {[0,1,2,3,4].map(i => (
      <div key={i} style={{ width: 30, height: 30, background: "#00b67a", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "#fff", fontSize: 17, lineHeight: 1 }}>★</span>
      </div>
    ))}
  </div>
);

export default function ReviewsSection({ showHeader = true }: { showHeader?: boolean }) {
  const tp = useAutoSlide(trustpilotReviews.length, 5200);
  const wa = useAutoSlide(Math.ceil(whatsappReviews.length / 2), 5700);
  const g = useAutoSlide(Math.ceil(googleReviews.length / 3), 6100);

  const waVisible = whatsappReviews.slice(wa.current * 2, wa.current * 2 + 2);
  const gVisible = googleReviews.slice(g.current * 3, g.current * 3 + 3);
  const tpReview = trustpilotReviews[tp.current];

  return (
    <div>
      {showHeader && (
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ color: "#F96E5B", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Verified Reviews</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, color: "#000000", marginBottom: 12 }}>
            What Customers Say About <span style={{ color: "#F96E5B" }}>Maple4K</span>
          </h2>
          <p style={{ color: "#000000", fontSize: 15, marginBottom: 28 }}>Real feedback from Trustpilot, WhatsApp & Google</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
            {[
              { val: "5.0", label: "Trustpilot", color: "#00b67a" },
              { val: "50,000+", label: "Customers", color: "#3F9AAE" },
              { val: "4.9★", label: "Google", color: "#FBBC04" },
              { val: "24/7", label: "Support", color: "#F96E5B" },
            ].map(s => (
              <div key={s.val} style={{ background: "#1A3D45", borderRadius: 12, padding: "12px 20px", textAlign: "center", minWidth: 90 }}>
                <div style={{ fontSize: 18, fontWeight: 900, color: s.color }}>{s.val}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TRUSTPILOT */}
      <div style={{ marginBottom: 64 }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <TrustpilotLogo />
        </div>
        <div style={{ maxWidth: 780, margin: "0 auto", overflow: "hidden" }}>
          <div style={slideStyle(tp.sliding)}>
            <div style={{ background: "#fff", borderRadius: 20, padding: "32px 36px", boxShadow: "0 4px 28px rgba(63,154,174,0.13)", border: "1px solid rgba(63,154,174,0.15)" }}>
              <TP_STARS />
              <h4 style={{ fontWeight: 800, fontSize: 18, marginBottom: 12, color: "#000" }}>{tpReview.title}</h4>
              <p style={{ color: "#000", lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{tpReview.text}</p>
              <p style={{ color: "#3F9AAE", fontWeight: 600, fontSize: 13 }}>— {tpReview.name} <FlagImg flag={tpReview.flag} /></p>
            </div>
          </div>
          <ProgressDots total={trustpilotReviews.length} current={tp.current} go={tp.go} />
        </div>
      </div>

      {/* WHATSAPP */}
      <div style={{ marginBottom: 64 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 28 }}>
          <div style={{ background: "#25D366", borderRadius: 10, width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <WA_ICON />
          </div>
          <span style={{ fontWeight: 800, fontSize: 22, color: "#25D366" }}>WhatsApp</span>
        </div>
        <div style={{ maxWidth: 900, margin: "0 auto", overflow: "hidden" }}>
          <div style={slideStyle(wa.sliding)}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {waVisible.map((r, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "24px", boxShadow: "0 4px 20px rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.15)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <WA_ICON />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: 14, color: "#000" }}>WhatsApp</span>
                  </div>
                  <p style={{ color: "#000", lineHeight: 1.75, fontSize: 14, marginBottom: 14 }}>{r.text}</p>
                  <p style={{ color: "#3F9AAE", fontWeight: 600, fontSize: 13 }}>— {r.name} <FlagImg flag={r.flag} /></p>
                </div>
              ))}
            </div>
          </div>
          <ProgressDots total={Math.ceil(whatsappReviews.length / 2)} current={wa.current} go={wa.go} />
        </div>
      </div>

      {/* GOOGLE */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <GoogleReviewsLogo />
        </div>
        <div style={{ overflow: "hidden" }}>
          <div style={slideStyle(g.sliding)}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {gVisible.map((r, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "24px", boxShadow: "0 4px 20px rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.15)" }}>
                  <div style={{ display: "flex", gap: 2, marginBottom: 10 }}>
                    {Array.from({ length: r.rating }).map((_, j) => <span key={j} style={{ color: "#FBBC04", fontSize: 20 }}>★</span>)}
                  </div>
                  <p style={{ fontWeight: 700, fontSize: 15, color: "#000", marginBottom: 10 }}>{r.name}</p>
                  <p style={{ color: "#000", lineHeight: 1.75, fontSize: 14 }}>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
          <ProgressDots total={Math.ceil(googleReviews.length / 3)} current={g.current} go={g.go} />
        </div>
      </div>
    </div>
  );
}

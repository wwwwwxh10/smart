import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Search,
  Inbox,
  UserCircle,
  ChevronDown,
  ArrowRight,
  X,
  Menu,
  Sparkles,
  CalendarDays,
  Check,
  ThumbsUp,
  ThumbsDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  LoaderCircle,
  Mic,
  MicOff,
  Link as LinkIcon,
} from "lucide-react";
import "./styles.css";
const A = "/assets/";
type Product = {
  name: string;
  category: string;
  price: string;
  data?: string;
  validity?: string;
  features: string[];
  action: string;
  badge?: string;
};
const products: Product[] = [
  {
    name: "Plan 599",
    category: "Postpaid",
    price: "₱599/mo",
    data: "10GB Data",
    features: [
      "Unli All-Net Mobile Calls and Texts",
      "Unli Landline Calls (excluding special numbers)",
    ],
    action: "Apply Online",
  },
  {
    name: "All-New Plans+ 799",
    category: "Postpaid",
    price: "₱799/mo",
    data: "15GB Data",
    features: [
      "100GB 5G Data for 6 months (promo rules apply)",
      "Unli All-Net Mobile Calls and Texts",
      "Unli Landline Calls (excluding special numbers)",
      "Access to Smart Postpaid Perks",
      "(1) Unli App Bundle",
    ],
    action: "Apply Online",
  },
  {
    name: "All-New Plans+ 999",
    category: "Postpaid",
    price: "₱999/mo",
    data: "20GB Data",
    features: [
      "Unlimited 5G Data for 12 months (promo rules apply)",
      "Unli All-Net Mobile Calls and Texts",
      "Unli Landline Calls (excluding special numbers)",
      "Access to Smart Postpaid Perks",
      "Your choice of (1) Unli App Bundle",
      "+2GB Bonus Data with Lock-In Plans",
    ],
    action: "Apply Online",
  },
  {
    name: "All-New Plans+ 1499",
    category: "Postpaid",
    price: "₱1,499/mo",
    data: "40GB Data",
    features: [
      "Unlimited 5G Data for 12 months (promo rules apply)",
      "Unli All-Net Mobile Calls and Texts",
      "Unli Landline Calls (excluding special numbers)",
      "Access to Smart Postpaid Perks",
      "Your choice of (1) Unli App Bundle",
    ],
    action: "Apply Online",
  },
  {
    name: "Unli 5G",
    category: "Data Boosters+",
    price: "₱399",
    data: "Unli 5G",
    validity: "30 Days",
    features: ["All apps and sites"],
    action: "Buy Now",
  },
  {
    name: "1 GB Data",
    category: "Data Boosters+",
    price: "₱99",
    data: "1GB",
    validity: "30 Days",
    features: ["All apps and sites"],
    action: "Buy Now",
  },
  {
    name: "4 GB Data",
    category: "Data Boosters+",
    price: "₱199",
    data: "4GB",
    validity: "30 Days",
    features: ["All apps and sites"],
    action: "Buy Now",
  },
  {
    name: "8 GB Data",
    category: "Data Boosters+",
    price: "₱299",
    data: "8GB",
    validity: "30 Days",
    features: ["All apps and sites"],
    action: "Buy Now",
  },
  {
    name: "12 GB Data",
    category: "Data Boosters+",
    price: "₱399",
    data: "12GB",
    validity: "30 Days",
    features: ["All apps and sites"],
    action: "Buy Now",
  },
  {
    name: "20 GB Data",
    category: "Data Boosters+",
    price: "₱499",
    data: "20GB",
    validity: "30 Days",
    features: ["All apps and sites"],
    action: "Buy Now",
  },
  {
    name: "40 GB Data",
    category: "Data Boosters+",
    price: "₱799",
    data: "40GB",
    validity: "30 Days",
    features: ["All apps and sites"],
    action: "Buy Now",
  },
  {
    name: "Promo Load 1000",
    category: "Promo Load",
    price: "₱1,000",
    data: "+ ₱150 FREE",
    validity: "60 days",
    features: [
      "₱1,000 load plus ₱150 free load",
      "Use to register to promos with up to 30 days validity",
    ],
    action: "Buy Now",
  },
  {
    name: "Promo Load 500",
    category: "Promo Load",
    price: "₱500",
    data: "+ ₱55 FREE",
    validity: "30 days",
    features: [
      "₱500 load plus ₱55 free load",
      "Use to register to promos with up to 30 days validity",
    ],
    action: "Buy Now",
  },
  {
    name: "Promo Load 300",
    category: "Promo Load",
    price: "₱300",
    data: "+ ₱33 FREE",
    validity: "30 days",
    features: [
      "₱300 load plus ₱33 free load",
      "Use to register to promos with up to 30 days validity",
    ],
    action: "Buy Now",
  },
  {
    name: "Promo Load 200",
    category: "Promo Load",
    price: "₱200",
    data: "+ ₱22 FREE",
    validity: "30 days",
    features: [
      "₱200 load plus ₱22 free load",
      "Use to register to promos with up to 30 days validity",
    ],
    action: "Buy Now",
  },
  ...[1000, 500, 300, 200, 100, 75, 50].map((amount) => ({
    name: `Regular Load ${amount}`,
    category: "Regular Load",
    price: `₱${amount.toLocaleString()}`,
    validity: "1 year",
    features: [
      "Available to Smart Prepaid, TNT, Smart Home WiFi, and Smart Bro",
    ],
    action: "Buy Now",
  })),
  {
    name: "Home Plan 1499",
    category: "Home WiFi",
    price: "₱1,499/mo",
    data: "UNLI 5G",
    features: [
      "Free Modem",
      "Up to 600 Mbps",
      "Connect multiple devices",
      "Plug and Play",
      "30-Day Money-back Guarantee",
    ],
    action: "Check Coverage",
  },
  {
    name: "Home Plan 999",
    category: "Home WiFi",
    price: "₱999/mo",
    data: "200GB + 2GB/day",
    features: [
      "₱995 One-Time Device Cash-Out",
      "Up to 600 Mbps",
      "Connect multiple devices",
      "Plug and Play",
      "Supports Data Rollover",
      "Access to Perks and GigaPoints",
      "30-Day Money-back Guarantee",
    ],
    action: "Check Coverage",
  },
];
const pages = [
  {
    title: "Smart Signature Plans+",
    path: "Postpaid / Plans+",
    text: "Choose an all-new Smart Postpaid plan with data, unlimited all-net calls and texts, landline calls, Postpaid Perks, and selected Unli App Bundles.",
    tags: "postpaid plan signature 599 799 999 1499 apply",
  },
  {
    title: "Data Boosters+",
    path: "Postpaid / Add-ons",
    text: "Maximize your existing plan with open-access data for all apps and sites. Options range from 1GB to 12GB, including Unli 5G, with 30-day validity.",
    tags: "data booster add-on 5g 99 199 299 399",
  },
  {
    title: "Smart Prepaid Load",
    path: "Prepaid / Load",
    text: "Buy Promo Load with bonus value or Regular Load valid for one year. Available to Smart Prepaid, TNT, Smart Home WiFi, and Smart Bro customers.",
    tags: "prepaid promo regular load buy 1000 500 300",
  },
  {
    title: "Home WiFi Postpaid Plans",
    path: "Home WiFi / Postpaid Plans",
    text: "Connect multiple devices with plug-and-play Home WiFi. Choose Home Plan 999 with 200GB plus daily bonus data, or Home Plan 1499 with Unli 5G.",
    tags: "home wifi internet 999 1499 coverage modem",
  },
  {
    title: "Check Smart 5G Coverage",
    path: "Our Network / Coverage",
    text: "Check whether Smart 5G and Home WiFi Postpaid service is available in your area before selecting a plan.",
    tags: "coverage 5g signal area check",
  },
  {
    title: "Understanding Smart Plans and Add-ons",
    path: "Help / Plans and Promos",
    text: "Learn how monthly plans, data allocations, boosters, validity periods, app bundles, and data rollover work before choosing a service.",
    tags: "help how what which choose compare understand",
  },
];
function aiCopy(q: string, items: Product[]) {
  const l = q.toLowerCase();
  if (l.includes("family"))
    return "For a family, start with how the connection will be used. Home Plan 999 includes 200GB plus 2GB bonus data per day and supports multiple connected devices, while Home Plan 1499 offers Unli 5G in eligible areas.\n\nHome Plan 999 is the more controlled option for everyday browsing, online classes, streaming, and hybrid work. It also supports data rollover, includes access to Perks and GigaPoints, and comes with a 30-day money-back guarantee.\n\nHome Plan 1499 is better suited to households with heavier, simultaneous usage. It includes a free modem, plug-and-play setup, speeds of up to 600 Mbps in eligible 5G areas, and a 30-day money-back guarantee.\n\nFor individual mobile lines, Plans+ 799 and 999 add larger 5G allocations, unlimited all-net calls and texts, landline calls, Postpaid Perks, and selected Unli App Bundles. Check 5G coverage at your address before choosing an Unli 5G plan.";
  if (l.includes("wifi") || l.includes("home"))
    return "For home connectivity, Smart offers Home Plan 999 with 200GB plus 2GB bonus data per day, or Home Plan 1499 with UNLI 5G. Both support multiple devices, plug-and-play setup, and speeds of up to 600 Mbps in eligible 5G areas.\n\nHome Plan 999 supports data rollover and includes access to Perks and GigaPoints. Home Plan 1499 includes a free modem and is designed for heavier household usage. Both plans include a 30-day money-back guarantee. Check coverage before applying.";
  if (l.includes("boost") || l.includes("data") || l.includes("5g"))
    return "Data Boosters+ start at ₱99 for 1GB, with 4GB, 8GB, and 12GB options also available. Unli 5G is ₱399 for 30 days.\n\nThese boosters cover all apps and sites and are designed to maximize an existing postpaid plan. Choose based on your expected usage and confirm 5G coverage before selecting Unli 5G.";
  if (l.includes("load") || l.includes("prepaid"))
    return "Promo Load includes bonus value, such as ₱1,000 plus ₱150 free for 60 days. Other Promo Load denominations include ₱500, ₱300, and ₱200, each with additional free load and its stated validity.\n\nRegular Load remains valid for one year and is available to Smart Prepaid, TNT, Smart Home WiFi, and Smart Bro. Choose Promo Load when the bonus and validity fit your intended promo registration; choose Regular Load for longer validity.";
  if (l.includes("postpaid") || l.includes("plan"))
    return "Smart Plans+ range from ₱599 to ₱1,499 per month. Plan 799 includes 15GB data and a six-month 100GB 5G allocation, while Plan 999 includes 20GB data, unlimited 5G for 12 months under applicable promo rules, and a choice of one Unli App Bundle.\n\nAll listed plans include unlimited all-net mobile calls and texts and unlimited landline calls excluding special numbers. Higher tiers provide larger data allocations and additional Postpaid Perks.";
  return `I found ${items.length} Smart products across Postpaid, Prepaid Load, Data Boosters+, and Home WiFi. Search by price, data allowance, or product type to narrow the options.\n\nReview each product's current validity, inclusions, coverage requirements, and application terms before purchasing.`;
}
function ProductCard({ p }: { p: Product }) {
  const kind = p.category.toLowerCase().replace(/[^a-z]+/g, "-");
  const benefits = (
    <ul>
      {p.features.map((f) => (
        <li key={f}>
          <Check size={16} />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  );
  if (p.category === "Data Boosters+")
    return (
      <article className={"product-card card-" + kind}>
        <div className="booster-name">
          <h3>{p.name}</h3>
        </div>
        <div className="booster-details">
          <span>All apps and sites</span>
          <span>{p.validity} Validity</span>
          <strong>{p.price}</strong>
          <button>{p.action}</button>
        </div>
      </article>
    );
  if (p.category === "Home WiFi")
    return (
      <article className={"product-card card-" + kind}>
        <div className="home-hero">
          <strong>{p.data}</strong>
          <h3>{p.name.toUpperCase()}</h3>
        </div>
        <div className="home-benefits">
          <b>INCLUSIONS:</b>
          {benefits}
          <button>
            {p.action}
            <ArrowRight size={16} />
          </button>
        </div>
      </article>
    );
  return (
    <article className={"product-card card-" + kind}>
      <div className="product-top">
        <small>{p.category}</small>
        <h3>{p.name}</h3>
        <strong>{p.price}</strong>
        {p.data && <span className="data-pill">{p.data}</span>}
      </div>
      <div className="product-body">
        {p.validity && (
          <p className="validity">
            <CalendarDays size={16} />
            {p.validity} validity
          </p>
        )}
        {benefits}
        <button>
          {p.action}
          <ArrowRight size={16} />
        </button>
      </div>
    </article>
  );
}
function SourceLink({ source }: { source: { name: string; url: string } }) {
  return (
    <span className="source-wrap">
      <a
        className="summary-link"
        href={source.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open source: ${source.name}`}
      >
        <LinkIcon size={15} />
      </a>
      <span className="source-tooltip">
        <b>{source.name}</b>
        <small>{source.url}</small>
      </span>
    </span>
  );
}
function AiSummary({
  text,
  source,
}: {
  text: string;
  source: { name: string; url: string };
}) {
  const [out, setOut] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);
  const [vote, setVote] = useState<"up" | "down" | null>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const done = out.length >= text.length;
  useEffect(() => {
    setOut("");
    setExpanded(false);
    setCanExpand(false);
    let i = 0;
    const timer = window.setInterval(() => {
      i += 4;
      setOut(text.slice(0, i));
      if (i >= text.length) window.clearInterval(timer);
    }, 15);
    return () => window.clearInterval(timer);
  }, [text]);
  useLayoutEffect(() => {
    if (!done || expanded) return;
    const el = viewportRef.current;
    if (el) setCanExpand(el.scrollHeight > el.clientHeight + 2);
  }, [done, expanded, out]);
  const paragraphs = out.split(/\n\n/);
  return (
    <div className={"ai-summary " + (expanded ? "expanded" : "collapsed")}>
      <Sparkles />
      <div className="ai-content">
        <div className="ai-title">
          <b>AI SUMMARY</b>
          <small>Based on Smart pages</small>
        </div>
        <div
          ref={viewportRef}
          className={
            "summary-viewport " +
            (expanded ? "expanded " : "") +
            (canExpand ? "has-overflow" : "")
          }
        >
          <div className="stream-copy">
            {paragraphs.map((paragraph, i) => {
              const complete = done || i < paragraphs.length - 1;
              return (
                <p key={i}>
                  {paragraph}
                  {complete && <SourceLink source={source} />}{" "}
                  {!done && i === paragraphs.length - 1 && (
                    <i className="typing" />
                  )}
                </p>
              );
            })}
          </div>
        </div>
        {done && canExpand && (
          <button
            className={"summary-toggle " + (expanded ? "expanded" : "")}
            aria-expanded={expanded}
            onClick={() => setExpanded(!expanded)}
            aria-label={expanded ? "Show less" : "Show more"}
          >
            <ChevronDown size={19} />
          </button>
        )}
        <div className="ai-footer">
          <small>AI-generated content. For reference only.</small>
          <div>
            <button
              className={vote === "up" ? "selected" : ""}
              onClick={() => setVote(vote === "up" ? null : "up")}
              aria-label="Helpful"
            >
              <ThumbsUp size={17} />
            </button>
            <button
              className={vote === "down" ? "selected" : ""}
              onClick={() => setVote(vote === "down" ? null : "down")}
              aria-label="Not helpful"
            >
              <ThumbsDown size={17} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function Highlight({ text, query }: { text: string; query: string }) {
  const phrase = query.trim();
  if (!phrase) return <>{text}</>;
  const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(${escaped})`, "gi");
  return (
    <>
      {text
        .split(re)
        .map((part, i) =>
          part.toLowerCase() === phrase.toLowerCase() ? (
            <mark key={i}>{part}</mark>
          ) : (
            part
          ),
        )}
    </>
  );
}
function contextualCopy(query: string, p: { title: string; text: string }) {
  const q = query.trim();
  const l = q.toLowerCase();
  if (l.includes("postpaid") || /plan\s*\d/.test(l))
    return `${p.title} helps customers compare ${q} with other Smart options for mobile data, calls, texts, and Postpaid benefits. ${p.text}`;
  if (l.includes("promo load") || l.includes("regular load"))
    return `Smart Prepaid Load offers ${q} together with other denominations for different budgets and validity needs. ${p.text}`;
  if (l.includes("unli 5g") || l.includes("booster"))
    return `Smart Data Boosters+ includes ${q} for customers who need additional open-access data. ${p.text}`;
  if (l.includes("home wifi"))
    return `${p.title} provides details that help customers compare ${q} for multiple connected devices. ${p.text}`;
  return p.text;
}
function shorten(text: string, limit = 140) {
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit).replace(/\s+\S*$/, "");
  return cut + "...";
}
function findTextResults(query: string) {
  const term = query.toLowerCase();
  const words = term
    .split(/\s+/)
    .map((w) => w.replace(/[^a-z0-9+]/gi, ""))
    .filter((w) => w.length > 2);
  return pages.filter((p) =>
    words.some((w) => (p.title + p.text + p.tags).toLowerCase().includes(w)),
  );
}
function TextResults({ query }: { query: string }) {
  const [page, setPage] = useState(1);
  const term = query.toLowerCase();
  useEffect(() => setPage(1), [query]);
  const list = findTextResults(query);
  const pageSize = 5;
  const total = Math.max(1, Math.ceil(list.length / pageSize));
  const shown = list.slice((page - 1) * pageSize, page * pageSize);
  const keywordSearch =
    !/^(how|what|why|which|can|should|help|compare|recommend)|\?/.test(term) &&
    term.split(/\s+/).length <= 5;
  return (
    <section className="text-results">
      <div className="text-results-head">
        <h2>Search results</h2>
        <span>{list.length} results</span>
      </div>
      {shown.map((p) => {
        const copy = shorten(keywordSearch ? contextualCopy(query, p) : p.text);
        return (
          <article key={p.title}>
            <div>
              <a>
                {p.title}
              </a>
              <p>
                <Highlight text={copy} query={query} />
              </p>
            </div>
            <button>
              Learn more <ArrowRight size={15} />
            </button>
          </article>
        );
      })}
      {list.length > pageSize && (
        <div className="pagination">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            aria-label="Previous page"
          >
            <ChevronLeft />
          </button>
          {Array.from({ length: total }, (_, i) => (
            <button
              className={page === i + 1 ? "active" : ""}
              onClick={() => setPage(i + 1)}
              key={i}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={page === total}
            onClick={() => setPage(page + 1)}
            aria-label="Next page"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}
function productPrice(p: Product) {
  return Number(p.price.replace(/[^\d]/g, ""));
}
function filterProducts(term: string) {
  let list: Product[] = [];
  if (term.includes("promo load"))
    list = products.filter((p) => p.category === "Promo Load");
  else if (term.includes("regular load"))
    list = products.filter((p) => p.category === "Regular Load");
  else if (term.includes("prepaid") || term === "load")
    list = products.filter(
      (p) => p.category === "Promo Load" || p.category === "Regular Load",
    );
  else if (term.includes("wifi") || term.includes("home"))
    list = products.filter((p) => p.category === "Home WiFi");
  else if (term.includes("postpaid") || term.includes("plan"))
    list = products.filter((p) => p.category === "Postpaid");
  else if (
    term.includes("boost") ||
    term.includes("5g") ||
    term.includes("data")
  )
    list = products.filter((p) => p.category === "Data Boosters+");
  else
    list = products.filter((p) =>
      (
        p.name +
        p.category +
        p.price +
        p.data +
        p.validity +
        p.features.join(" ")
      )
        .toLowerCase()
        .includes(term),
    );
  const isPostpaidSearch = list.some((p) => p.category === "Postpaid");
  const isHomeWifiSearch = list.some((p) => p.category === "Home WiFi");
  const plan = isPostpaidSearch || isHomeWifiSearch
    ? term.match(/\b(599|799|999|1499)\b/)
    : term.match(/(?:plan|plans\+?)\s*\+?\s*(599|799|999|1499)\b/);
  if (plan) {
    list = list.filter((p) => {
      const productPlan = p.name.match(/\b(599|799|999|1499)\b/);
      return productPlan?.[1] === plan[1];
    });
  }
  const load = term.match(
    /(?:promo|regular)?\s*load\s*(50|75|100|200|300|500|1000)\b/,
  );
  if (load) list = list.filter((p) => p.name.endsWith(load[1]));
  const data = term.match(/\b(1|4|8|10|12|15|20|40|200)\s*gb\b/);
  if (data)
    list = list.filter(
      (p) =>
        (p.data || p.name).toLowerCase().includes(data[1] + "gb") ||
        (p.data || p.name).toLowerCase().includes(data[1] + " gb"),
    );
  const validity = term.match(/\b(30|60|365)\s*(?:day|days)\b/);
  if (validity)
    list = list.filter((p) => (p.validity || "").includes(validity[1]));
  const upper = term.match(
    /(?:under|below|less than|up to)\s*(?:₱|p)?\s*([\d,]+)/,
  );
  if (upper) {
    const max = Number(upper[1].replace(/,/g, ""));
    list = list.filter((p) => productPrice(p) <= max);
  }
  const lower = term.match(
    /(?:over|above|at least|more than)\s*(?:₱|p)?\s*([\d,]+)/,
  );
  if (lower) {
    const min = Number(lower[1].replace(/,/g, ""));
    list = list.filter((p) => productPrice(p) >= min);
  }
  const isBoosterSearch = list.some(
    (p) => p.category === "Data Boosters+",
  );
  if (isBoosterSearch && term.includes("5g"))
    list = list.filter((p) =>
      `${p.data || ""} ${p.name}`.toLowerCase().includes("5g"),
    );
  return list;
}
function SearchLayer({ close }: { close: () => void }) {
  const [q, setQ] = useState("");
  const [loadTab, setLoadTab] = useState<"Promo Load" | "Regular Load">(
    "Promo Load",
  );
  const [searching, setSearching] = useState(false);
  const [listening, setListening] = useState(false);
  const [voiceMessage, setVoiceMessage] = useState("");
  const [includeAi, setIncludeAi] = useState(true);
  const voiceRef = useRef<any>(null);
  const [recent, setRecent] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("smart-recent-searches") || "[]");
    } catch {
      return [];
    }
  });
  const term = q.trim().toLowerCase();
  const submitted = term.length > 0;
  const exploratory =
    /^(how|what|why|which|can|should|help|compare|recommend)|\?|ano|paano|alin|如何|怎么|什么|推荐|适合/.test(
      term,
    ) || term.split(/\s+/).length >= 6;
  useEffect(() => {
    if (!submitted) {
      setSearching(false);
      return;
    }
    setSearching(true);
    const timer = window.setTimeout(() => setSearching(false), 420);
    return () => window.clearTimeout(timer);
  }, [q, submitted]);
  const recommended = filterProducts(term);
  const productQuestion =
    exploratory &&
    !term.includes("family") &&
    /(postpaid|plan|load|wifi|home|5g|data|booster|gb|₱|price|validity)/.test(
      term,
    );
  const summary = aiCopy(q, recommended);
  const source = term.includes("load")
    ? { name: "Smart Prepaid Load", url: "https://smart.com.ph/Prepaid/load" }
    : term.includes("boost") || term.includes("data")
      ? {
          name: "Smart Postpaid Add-ons",
          url: "https://smart.com.ph/Postpaid/add-ons",
        }
      : term.includes("postpaid")
        ? {
            name: "Smart Signature Plans+",
            url: "https://smart.com.ph/Postpaid/signature",
          }
        : {
            name: "Smart Home WiFi Postpaid Plans",
            url: "https://smart.com.ph/Homewifi/postpaid-plans",
          };
  const suggestions = [
    "Postpaid Plans+",
    "Data Boosters+",
    "Prepaid Load",
    "Home WiFi",
    "Which plan is best for my family?",
  ];
  const commit = (value: string) => {
    setQ(value);
    const next = [value, ...recent.filter((x) => x !== value)].slice(0, 5);
    setRecent(next);
    localStorage.setItem("smart-recent-searches", JSON.stringify(next));
  };
  const toggleVoice = () => {
    if (listening) {
      voiceRef.current?.stop();
      return;
    }
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setVoiceMessage("Voice search is not supported in this browser.");
      return;
    }
    const recognition = new SpeechRecognition();
    voiceRef.current = recognition;
    recognition.lang = "en-PH";
    recognition.interimResults = true;
    recognition.continuous = false;
    recognition.onstart = () => {
      setListening(true);
      setVoiceMessage("Listening...");
    };
    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0].transcript)
        .join("");
      setQ(transcript);
      setVoiceMessage(
        event.results[event.results.length - 1].isFinal
          ? "Voice captured"
          : "Listening...",
      );
    };
    recognition.onerror = () =>
      setVoiceMessage("Could not hear that. Try again.");
    recognition.onend = () => setListening(false);
    recognition.start();
  };
  const broadPrepaid = term.includes("prepaid") || term === "load";
  const specificLoadCategory = term.includes("promo load")
    ? "Promo Load"
    : term.includes("regular load")
      ? "Regular Load"
      : null;
  const productContent = broadPrepaid ? (
    <div className="load-results">
      <div className="load-tabs">
        <button
          className={loadTab === "Promo Load" ? "active" : ""}
          onClick={() => setLoadTab("Promo Load")}
        >
          Promo Load
        </button>
        <button
          className={loadTab === "Regular Load" ? "active" : ""}
          onClick={() => setLoadTab("Regular Load")}
        >
          Regular Load
        </button>
      </div>
      <div className="product-grid primary-products">
        {recommended
          .filter((x) => x.category === loadTab)
          .map((p) => (
            <ProductCard p={p} key={p.name} />
          ))}
      </div>
    </div>
  ) : specificLoadCategory ? (
    <div className="load-results">
      <div className="product-grid primary-products">
        {recommended.map((p) => (
          <ProductCard p={p} key={p.name} />
        ))}
      </div>
    </div>
  ) : (
    <div
      className={`product-grid primary-products${recommended.length === 5 ? " five-products" : ""}`}
    >
      {recommended.map((p) => (
        <ProductCard p={p} key={p.name} />
      ))}
    </div>
  );
  const empty = (
    <div className="empty-search">
      <section>
        <div className="empty-title">
          <h2>Recent searches</h2>
          {recent.length > 0 && (
            <button
              onClick={() => {
                setRecent([]);
                localStorage.removeItem("smart-recent-searches");
              }}
            >
              Clear all
            </button>
          )}
        </div>
        {recent.length ? (
          <div className="recent-list">
            {recent.map((s) => (
              <button onClick={() => commit(s)} key={s}>
                <Search size={17} />
                <span>{s}</span>
                <ArrowRight size={16} />
              </button>
            ))}
          </div>
        ) : (
          <p className="no-recent">Your recent searches will appear here.</p>
        )}
      </section>
      <section>
        <div className="empty-title">
          <h2>Recommended searches</h2>
        </div>
        <div className="recommended-list">
          {suggestions.map((s, i) => (
            <button onClick={() => commit(s)} key={s}>
              <span>0{i + 1}</span>
              <b>{s}</b>
              <ArrowRight size={16} />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
  const noResults = (
    <div className="no-results-view">
      <div className="query-heading">
        <h1>Results for “{q.trim()}”</h1>
        <label>
          <input
            type="checkbox"
            checked={includeAi}
            onChange={(e) => setIncludeAi(e.target.checked)}
          />
          <span>Include AI summary</span>
        </label>
      </div>
      <section aria-labelledby="no-results-title">
        <div className="text-results-head">
          <h2 id="no-results-title">Search results</h2>
          <span>0 results</span>
        </div>
        <div className="no-results" role="status">
          <div className="no-results-icon" aria-hidden="true">
            <Inbox size={44} strokeWidth={1.8} />
            <span /><span /><span />
          </div>
          <h3>No results found for “{q.trim()}”</h3>
          <p>Try a different keyword or one of these searches.</p>
          <div className="no-results-suggestions">
            {suggestions.slice(0, 4).map((s) => (
              <button onClick={() => commit(s)} key={s}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
  return (
    <div className="search-layer">
      <div className="search-head">
        <div className="search-field">
          <Search />
          <input
            autoFocus
            placeholder="Search Smart products, plans and support"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && q.trim()) commit(q.trim());
              if (e.key === "Escape") close();
            }}
          />
          <button
            className={listening ? "voice active" : "voice"}
            onClick={toggleVoice}
            aria-label={listening ? "Stop voice input" : "Start voice input"}
          >
            {listening ? <MicOff size={20} /> : <Mic size={20} />}
          </button>
          <button
            className="search-dismiss"
            onClick={() => {
              if (q.trim()) {
                setQ("");
              } else {
                close();
              }
            }}
            aria-label={q.trim() ? "Clear search" : "Close search"}
          >
            <X size={20} />
          </button>
        </div>
        {voiceMessage && (
          <div className={"voice-status " + (listening ? "active" : "")}>
            {listening && <i />}
            {voiceMessage}
          </div>
        )}
      </div>
      <div className="search-scroll">
        {!submitted ? (
          empty
        ) : searching ? (
          <div className="searching">
            <LoaderCircle />
            <h2>Searching Smart</h2>
            <p>Finding the most relevant products and information...</p>
          </div>
        ) : recommended.length === 0 && findTextResults(q).length === 0 ? (
          noResults
        ) : exploratory && !productQuestion ? (
          <>
            <div className="query-heading">
              <h1>Results for “{q}”</h1>
              <label>
                <input
                  type="checkbox"
                  checked={includeAi}
                  onChange={(e) => setIncludeAi(e.target.checked)}
                />
                <span>Include AI summary</span>
              </label>
            </div>
            {includeAi && <AiSummary text={summary} source={source} />}
            <TextResults query={q} />
          </>
        ) : recommended.length === 0 ? (
          <TextResults query={q} />
        ) : (
          <>
            <div className="intent-label">
              <span>RECOMMENDED PRODUCTS</span>
              <h1>Best matches for “{q}”</h1>
            </div>
            {productContent}
            <TextResults query={q} />
          </>
        )}
      </div>
    </div>
  );
}
function Header() {
  const [s, setS] = useState(false);
  const [m, setM] = useState(false);
  return (
    <>
      <div className="utility">
        <div>
          <button>
            Explore Sites <ChevronDown size={14} />
          </button>
          <a>Contact Us</a>
          <i />
          <a>Our Network</a>
          <i />
          <a>Store Locator</a>
          <i />
          <a>Report Scam</a>
          <i />
          <a>⇢&nbsp; Switch to Smart</a>
        </div>
      </div>
      <header>
        <div className="nav-inner">
          <img src={A + "smart-logo.png"} />
          <nav className={m ? "open" : ""}>
            {[
              "SHOP",
              "POSTPAID",
              "PREPAID",
              "HOME WIFI",
              "BLOG",
              "LIFESTYLE & ENTERTAINMENT",
              "HELP",
            ].map((x) => (
              <a key={x}>{x}</a>
            ))}
          </nav>
          <div className="nav-actions">
            <button onClick={() => setS(true)} aria-label="Search">
              <Search size={21} />
            </button>
            <button aria-label="My Smart">
              <UserCircle size={20} />
            </button>
            <button
              className="mobile-menu"
              onClick={() => setM(!m)}
              aria-label="Menu"
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>
      {s && <SearchLayer close={() => setS(false)} />}
    </>
  );
}
const reasons = [
  ["reason-1.png", "Entertainment"],
  ["reason-2.png", "LiveSmart Rewards"],
  ["reason-3.png", "Switch to Smart"],
  ["reason-4.png", "TNT 5G SIM"],
];
function App() {
  return (
    <div>
      <Header />
      <main>
        <section className="hero">
          <img src={A + "current-hero.png"} />
        </section>
        <section className="reasons">
          <div className="content reason-content">
            <h1>More Reasons to Switch to Smart</h1>
            <div className="reason-grid">
              {reasons.map((x) => (
                <article key={x[1]}>
                  <img src={A + x[0]} />
                  <a>
                    {x[1]} <ArrowRight size={18} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="next">
          <div className="content next-content">
            <span>THE SMART ADVANTAGE</span>
            <h2>Everything you need to live smarter</h2>
            <div className="feature-grid">
              <article>
                <b>Fast & Reliable</b>
                <p>Enjoy uninterrupted connectivity wherever you go.</p>
              </article>
              <article>
                <b>More Rewards</b>
                <p>Earn points and unlock exclusive experiences.</p>
              </article>
              <article>
                <b>Made for You</b>
                <p>Flexible plans for every lifestyle and budget.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="content footer-content">
          <img src={A + "smart-logo.png"} />
          <span>© Smart Communications, Inc.</span>
          <div>
            Privacy Policy&nbsp;&nbsp; Terms of Use&nbsp;&nbsp; Contact Us
          </div>
        </div>
      </footer>
    </div>
  );
}
createRoot(document.getElementById("root")!).render(<App />);

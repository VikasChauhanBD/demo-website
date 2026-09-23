import React, { useState } from "react";
import "./DevicePolicy.css";
import { NavLink } from "react-router-dom";

const supportedDevices = [
  {
    id: 1,
    question: "Do videos work on all devices?",
    answer: `The app is optimized for newer devices. Android 12 and above is recommended for best performance, though it may or may not work properly on older versions. iOS 14 and above is supported. A minimum of 6GB RAM is recommended for smooth functioning.`,
  },
  {
    id: 2,
    question: "Does the app work on iOS 9?",
    answer: `No, the app works best on iOS version 14 and above.`,
  },
  {
    id: 3,
    question: "Does the app work on Android 10?",
    answer: `No, the app works best on Android version 12 and above.`,
  },
];

const drm = [
  {
    id: 1,
    question: "What is DRM?",
    answer: `DRM stands for Digital Rights Management. It is a content protection system used to secure our videos from unauthorized access, downloading, screen recording, and sharing.</br>
    This helps us protect premium educational content and ensure it is accessed only through authorized devices and users.`,
  },
  {
    id: 2,
    question: "Why are some videos not playing on my device?",
    answer: `Some videos may not play properly if your device or environment does not support DRM-secured playback.</br>
    This can happen because of:
<ul>
<li>Older Android or iOS versions</li>
<li>Unsupported or outdated browsers</li>
<li>Rooted Android devices</li>
<li>Jailbroken iPhones or iPads</li>
<li>Screen recording apps running in the background</li>
<li>Screen mirroring or casting attempts</li>
<li>Weak internet connection during verification</li>
<li>Device-specific compatibility limitations</li>
</ul>
`,
  },
  {
    id: 3,
    question: "Does DRM-protected content work on all devices?",
    answer: `No. DRM-protected content may not work properly on all devices.</br>
    For the best experience, make sure you are using:
<ul>
<li>An updated Android or iOS version</li>
<li>The latest version of our app</li>
<li>An unmodified device software environment</li>
<li>A stable internet connection</li>
<li>No active screen recording or mirroring tools</li>
</ul>
`,
  },
  {
    id: 4,
    question: "Why am I seeing a black screen while playing a video?",
    answer: `A black screen usually appears when DRM protection detects an unsupported playback condition.</br>
    This may happen if:
<ul>
<li>You are trying to take a screenshot</li>
<li>You are trying to screen record</li>
<li>You are trying to mirror or cast your screen</li>
<li>Your device does not support secure video playback properly</li>
</ul>
`,
  },
  {
    id: 5,
    question: "Can I take screenshots of DRM-protected videos?",
    answer: `No. Screenshots may be blocked for DRM-protected videos.</br>
    This is a security measure to prevent unauthorized sharing of premium content. If your phone shows a black screen or does not save the screenshot, it is due to DRM protection.`,
  },
  {
    id: 6,
    question: "Can I screen record DRM-protected videos?",
    answer: `No. Screen recording is not supported for DRM-protected content.</br>
    If screen recording is attempted, the video may:
<ul>
<li>Stop playing</li>
<li>Show a black screen</li>
<li>Display an error</li>
<li>Fail to load properly</li>
</ul>
`,
  },
  {
    id: 7,
    question: "Can I cast videos to a Smart TV or mirror my screen?",
    answer: `In many cases, DRM-protected videos do not support screen mirroring or casting.</br>
    If casting is attempted:
<ul>
<li>The video may not play</li>
<li>Only audio may work</li>
<li>The TV may show a black screen</li>
<li>Playback may stop completely</li>
</ul>
`,
  },
  {
    id: 8,
    question: "Does DRM content work on rooted or jailbroken devices?",
    answer: `No. DRM-secured content may not work properly on rooted Android devices or jailbroken iPhones/iPads.</br>
    Such devices are considered insecure for protected playback and may show:
<ul>
<li>Playback failures</li>
<li>Black screens</li>
<li>License errors</li>
</ul>
`,
  },
  {
    id: 9,
    question: "Does DRM-protected content require internet access?",
    answer: `Yes, in many cases internet access is required at least once for DRM license verification.</br>
    Even when content is available inside the app, DRM may still need periodic validation to confirm authorized access. Without proper verification, the video may not play.`,
  },
  {
    id: 10,
    question: "Can VPN, ad blockers, or private DNS affect DRM playback?",
    answer: `Yes. VPNs, ad blockers, firewall apps, or private DNS settings may sometimes interfere with DRM verification.</br>
    If you are facing playback issues, try:
<ul>
<li>Turning off VPN</li>
<li>Disabling ad blocker or security apps temporarily</li>
<li>Switching between Wi-Fi and mobile data</li>
<li>Restarting the app</li>
</ul>
`,
  },
  {
    id: 11,
    question:
      "Why do some users on the same phone model face different DRM issues?",
    answer: `DRM performance can sometimes be device-specific.</br>
    Even within the same phone model, playback may vary because of differences in:
<ul>
<li>Software version</li>
<li>Security patch level</li>
<li>Device modification status</li>
<li>Background apps</li>
<li>Manufacturer-level media support behavior</li>
</ul>
`,
  },
  {
    id: 12,
    question: "Is this always an app issue?",
    answer: `Not always.</br>
    In many DRM-related cases, the issue is caused by:
<ul>
<li>Device compatibility limitations</li>
<li>Security restrictions</li>
<li>Unsupported screen capture attempts</li>
<li>OS-level limitations</li>
<li>Network or license verification failures</li>
</ul>
`,
  },
];

const steps = [
  {
    id: 1,
    question: "Why am I getting a playback error or license error?",
    answer: `This usually happens when the app is unable to verify the DRM license required to play the video.</br>
    Common reasons include:
<ul>
<li>Poor internet connection</li>
<li>Outdated app version</li>
<li>Unsupported OS version</li>
<li>Device compatibility issues</li>
<li>Rooted or jailbroken device</li>
<li>VPN or third-party network interference</li>
</ul>
`,
  },
  {
    id: 2,
    question: "What should I do if DRM videos are not working on my device?",
    answer: `Please try the following steps:
<ul>
<li>Update the app to the latest version</li>
<li>Restart your device</li>
<li>Check your internet connection</li>
<li>Turn off screen recording or casting</li>
<li>Make sure your device is not rooted or jailbroken</li>
<li>Update your device software</li>
<li>Try playing another video in the app</li>
<li>Log out and log in again</li>
</ul>
`,
  },
  {
    id: 3,
    question: "How can I check whether my device supports DRM videos properly?",
    answer: `If you are using an older device or are unsure about compatibility, we recommend first playing a video in the app and checking whether it runs smoothly.</br>
    This can help confirm whether your device supports secure video playback before you rely heavily on premium content access.`,
  },
];

const support = [
  {
    id: 1,
    question:
      "What should I share with the support team if I have a playback issue?",
    answer: `If the issue continues after troubleshooting, please contact our support team and share:
<ul>
<li>Device model</li>
<li>Android/iOS version</li>
<li>App version</li>
<li>Screenshot of the error message</li>
</ul>
`,
  },
];

const unsupportedDevices = [
  {
    brand: "POCO",
    series: [
      {
        name: "F SERIES",
        devices: [
          "Poco F2 Pro",
          "Poco F3",
          "Poco F3 GT",
          "Pocophone F1 / Poco F1",
        ],
      },
      {
        name: "X SERIES",
        devices: [
          "Poco X2",
          "Poco X3",
          "Poco X3 GT",
          "Poco X3 NFC",
          "Poco X3 Pro",
        ],
      },
      {
        name: "M SERIES",
        devices: [
          "Poco M2",
          "Poco M2 Pro",
          "Poco M2 Reloaded",
          "Poco M3",
          "Poco M3 Pro 5G",
          "Poco M4 Pro 5G",
        ],
      },
      {
        name: "C SERIES",
        devices: ["Poco C3", "Poco C31"],
      },
    ],
  },
  {
    brand: "Redmi",
    series: [
      {
        name: "REDMI SERIES",
        devices: [
          "Redmi",
          "Redmi 10",
          "Redmi 10 Prime",
          "Redmi 10X 4G",
          "Redmi 10X 5G",
          "Redmi 10X Pro 5G",
          "Redmi 1S",
          "Redmi 2",
          "Redmi 2 Prime / Redmi 2 Pro",
          "Redmi 2A",
          "Redmi 3",
          "Redmi 3 Pro",
          "Redmi 3S",
          "Redmi 3S Prime",
          "Redmi 3X",
          "Redmi 4",
          "Redmi 4 Prime / Redmi 4 Pro",
          "Redmi 4A",
          "Redmi 4X",
          "Redmi 5",
          "Redmi 5 Plus",
          "Redmi 5A",
          "Redmi 6",
          "Redmi 6 Pro",
          "Redmi 6A",
          "Redmi 7",
          "Redmi 7A",
          "Redmi 8",
          "Redmi 8A",
          "Redmi 8A Dual",
          "Redmi 8A Pro",
          "Redmi 9",
          "Redmi 9 Activ",
          "Redmi 9 Power",
          "Redmi 9 Prime",
          "Redmi 9A",
          "Redmi 9A Sport",
          "Redmi 9AT",
          "Redmi 9C",
          "Redmi 9i",
          "Redmi 9i Sport",
          "Redmi 9T",
          "Redmi Go",
          "Redmi Pro",
          "Redmi S2",
          "Redmi Y1",
          "Redmi Y1 Lite",
          "Redmi Y2",
          "Redmi Y3",
        ],
      },
      {
        name: "NOTE SERIES",
        devices: [
          "Redmi Note",
          "Redmi Note 10",
          "Redmi Note 10 5G",
          "Redmi Note 10 Pro",
          "Redmi Note 10 Pro 5G",
          "Redmi Note 10 Pro Max",
          "Redmi Note 10S",
          "Redmi Note 10T",
          "Redmi Note 11 4G",
          "Redmi Note 11 5G",
          "Redmi Note 11 Pro",
          "Redmi Note 11 Pro+",
          "Redmi Note 11T",
          "Redmi Note 2",
          "Redmi Note 2 Prime",
          "Redmi Note 3",
          "Redmi Note 3 Pro",
          "Redmi Note 3 Special Edition",
          "Redmi Note 4",
          "Redmi Note 4G",
          "Redmi Note 4X",
          "Redmi Note 5",
          "Redmi Note 5 Pro",
          "Redmi Note 5A",
          "Redmi Note 5A Prime",
          "Redmi Note 6 Pro",
          "Redmi Note 7",
          "Redmi Note 7 Pro",
          "Redmi Note 7S",
          "Redmi Note 8",
          "Redmi Note 8 2021",
          "Redmi Note 8 Pro",
          "Redmi Note 8A",
          "Redmi Note 8T",
          "Redmi Note 9",
          "Redmi Note 9 4G",
          "Redmi Note 9 5G",
          "Redmi Note 9 Pro",
          "Redmi Note 9 Pro 5G",
          "Redmi Note 9 Pro Max",
          "Redmi Note 9S",
          "Redmi Note 9T",
          "Redmi Note Prime",
        ],
      },
      {
        name: "K SERIES",
        devices: [
          "Redmi K20",
          "Redmi K20 Pro",
          "Redmi K30",
          "Redmi K30 5G",
          "Redmi K30 Pro",
          "Redmi K30 Racing Edition",
          "Redmi K30 Ultra",
          "Redmi K30S Ultra",
          "Redmi K40",
          "Redmi K40 Gaming",
          "Redmi K40 Pro",
          "Redmi K40 Pro+",
        ],
      },
    ],
  },
  {
    brand: "Xiaomi",
    series: [
      {
        name: "MI SERIES",
        devices: [
          "Mi 1",
          "Mi 10",
          "Mi 10 Lite",
          "Mi 10 Pro",
          "Mi10 Ultra",
          "Mi 10 Youth 5G",
          "Mi 10i",
          "Mi 10S",
          "Mi 10T",
          "Mi 10T Lite",
          "Mi 10T Pro",
          "Mi 11",
          "Mi 11 LE",
          "Mi 11 Lite",
          "Mi 11 Lite 5G",
          "Mi 11 Pro",
          "Mi 11 Ultra",
          "Mi 11 Youth",
          "Mi 11i",
          "Mi 11X",
          "Mi 11X Pro",
          "Mi 1S",
          "Mi 2",
          "Mi 2A",
          "Mi 2S",
          "Mi 3",
          "Mi 4",
          "Mi 4c",
          "Mi 4i",
          "Mi 4s",
          "Mi 5",
          "Mi 5c",
          "Mi 5s",
          "Mi 5s Plus",
          "Mi 6",
          "Mi 6X",
          "Mi 8",
          "Mi 8 Explorer Edition",
          "Mi 8 Lite",
          "Mi 8 SE",
          "Mi 9",
          "Mi 9 Explorer Edition",
          "Mi 9 Lite",
          "Mi 9 Pro 5G",
          "Mi 9 SE",
          "Mi 9T",
          "Mi 9T Pro",
          "Xiaomi 11 Lite 5G NE",
          "Xiaomi 11T",
          "Xiaomi 11T Pro",
          "Xiaomi 12",
          "Xiaomi 12 Pro",
          "Xiaomi 12X",
        ],
      },
      {
        name: "NOTE / MAX / MIX SERIES",
        devices: [
          "Mi Max",
          "Mi Max 2",
          "Mi Max 3",
          "Mi Max Prime",
          "Mi MIX",
          "Mi MIX 2",
          "Mi MIX 2S",
          "Mi MIX 3",
          "Mi MIX 3 5G",
          "Mi MIX 4",
          "Mi MIX Fold",
          "Mi Note",
          "Mi Note 10",
          "Mi Note 10 Lite",
          "Mi Note 10 Pro",
          "Mi Note 2",
          "Mi Note 3",
          "Mi Note Pro",
        ],
      },
      {
        name: "ANDROID ONE & OTHER",
        devices: [
          "Mi A1",
          "Mi A2",
          "Mi A2 Lite",
          "Mi A3",
          "Mi CC9",
          "Mi CC9 Pro",
          "Mi CC9e",
          "Mi Play",
          "Xiaomi Civi",
        ],
      },
    ],
  },
  {
    brand: "Samsung",
    series: [
      {
        name: "S SERIES",
        devices: [
          "Galaxy S",
          "Galaxy S Duos",
          "Galaxy S Duos 2",
          "Galaxy S II",
          "Galaxy S II Plus",
          "Galaxy S III",
          "Galaxy S III Neo",
          "Galaxy S III Neo+",
          "Galaxy S III Slim",
          "Galaxy S Plus",
          "Galaxy S20",
          "Galaxy S20 5G",
          "Galaxy S20 Lite",
          "Galaxy S20+",
          "Galaxy S20+ 5G",
          "Galaxy S20 FE",
          "Galaxy S20 FE 5G",
          "Galaxy S20 Ultra",
          "Galaxy S20 Ultra 5G",
          "Galaxy S21",
          "Galaxy S21 5G",
          "Galaxy S21 FE 5G",
          "Galaxy S21+",
          "Galaxy S21+ 5G",
          "Galaxy S21 Ultra 5G",
          "Galaxy S4",
          "Galaxy S4 Active",
          "Galaxy S4 Mini",
          "Galaxy S4 Value Edition",
          "Galaxy S4 Zoom",
          "Galaxy S5",
          "Galaxy S5 Active",
          "Galaxy S5 Mini",
          "Galaxy S5 Neo",
          "Galaxy S5 Plus",
          "Galaxy S5 Sport",
          "Galaxy S6",
          "Galaxy S6 Active (US Special)",
          "Galaxy S6 Mini",
          "Galaxy S6 Neo",
          "Galaxy S6 Edge",
          "Galaxy S6 Edge+",
          "Galaxy S6 Fold",
          "Galaxy S7",
          "Galaxy S7 Active",
          "Galaxy S7 Edge",
          "Galaxy S7 Fold",
          "Galaxy S8",
          "Galaxy S8 Active",
          "Galaxy S8+",
          "Galaxy S9",
          "Galaxy S9+",
          "Galaxy SL",
        ],
      },
      {
        name: "NOTE & FOLD SERIES",
        devices: [
          "Galaxy Fold",
          "Galaxy Fold2 5G",
          "Galaxy Note",
          "Galaxy Note 10",
          "Galaxy Note 10 Lite",
          "Galaxy Note 10+",
          "Galaxy Note 20",
          "Galaxy Note 20 Ultra",
          "Galaxy Note 3",
          "Galaxy Note 3 Neo",
          "Galaxy Note 4",
          "Galaxy Note 5",
          "Galaxy Note 7",
          "Galaxy Note 8",
          "Galaxy Note 9",
          "Galaxy Note Folder",
          "Galaxy Note FE",
          "Galaxy Note II",
          "Galaxy Z Flip",
          "Galaxy Z Flip 5G",
          "Galaxy Z Flip3 5G",
          "Galaxy Z Flip3 Bespoke Edition",
          "Galaxy Z Fold2 5G",
          "Galaxy Z Fold3 5G",
        ],
      },
      {
        name: "A SERIES",
        devices: [
          "Galaxy A02",
          "Galaxy A02 Core",
          "Galaxy A03",
          "Galaxy A03s",
          "Galaxy A03 Core",
          "Galaxy A2 Core",
          "Galaxy A10",
          "Galaxy A10e",
          "Galaxy A10s",
          "Galaxy A11",
          "Galaxy A12",
          "Galaxy A12 5G",
          "Galaxy A13 (2022)",
          "Galaxy A13 5G",
          "Galaxy A20",
          "Galaxy A20e",
          "Galaxy A20s",
          "Galaxy A21",
          "Galaxy A21s",
          "Galaxy A21 5G",
          "Galaxy A22",
          "Galaxy A22 5G",
          "Galaxy A3",
          "Galaxy A3 (2016)",
          "Galaxy A3 (2017)",
          "Galaxy A30",
          "Galaxy A30s",
          "Galaxy A31",
          "Galaxy A32",
          "Galaxy A32 5G",
          "Galaxy A33 5G",
          "Galaxy A40",
          "Galaxy A41",
          "Galaxy A42 5G",
          "Galaxy A5",
          "Galaxy A5 (2016)",
          "Galaxy A5 (2017)",
          "Galaxy A50",
          "Galaxy A50s",
          "Galaxy A51",
          "Galaxy A51 5G",
          "Galaxy A52",
          "Galaxy A52 5G",
          "Galaxy A52s 5G",
          "Galaxy A53 5G",
          "Galaxy A6",
          "Galaxy A6+",
          "Galaxy A60",
          "Galaxy A7",
          "Galaxy A7 (2016)",
          "Galaxy A7 (2017)",
          "Galaxy A7 (2018)",
          "Galaxy A70",
          "Galaxy A70s",
          "Galaxy A71",
          "Galaxy A71 5G",
          "Galaxy A71 5G UW",
          "Galaxy A72",
          "Galaxy A8 (2016)",
          "Galaxy A8 (2018)",
          "Galaxy A8 Star",
          "Galaxy A80",
          "Galaxy A80 5G",
          "Galaxy A8s",
          "Galaxy A9 (2016)",
          "Galaxy A9 (2018)",
          "Galaxy A9 Pro (2016)",
          "Galaxy A90 5G",
          "Galaxy A9 Pro (2019)",
        ],
      },
      {
        name: "M SERIES",
        devices: [
          "Galaxy M02",
          "Galaxy M02 Cover",
          "Galaxy M02s",
          "Galaxy M02t",
          "Galaxy M11",
          "Galaxy M12",
          "Galaxy M20",
          "Galaxy M21",
          "Galaxy M21 (2021 Edition)",
          "Galaxy M21s",
          "Galaxy M22",
          "Galaxy M30",
          "Galaxy M30s",
          "Galaxy M31",
          "Galaxy M31 Prime",
          "Galaxy M31s",
          "Galaxy M32",
          "Galaxy M32 5G",
          "Galaxy M32 AR",
          "Galaxy M33",
          "Galaxy M42 5G",
          "Galaxy M51",
          "Galaxy M62 5G",
          "Galaxy M52",
          "Galaxy M53 AR",
        ],
      },
      {
        name: "F SERIES",
        devices: [
          "Galaxy F02s",
          "Galaxy F12",
          "Galaxy F22",
          "Galaxy F41",
          "Galaxy F52 5G",
          "Galaxy F62 5G",
          "Galaxy F62",
        ],
      },
      {
        name: "J SERIES",
        devices: [
          "Galaxy J",
          "Galaxy J Max",
          "Galaxy J1",
          "Galaxy J1 (2016)",
          "Galaxy J1 SE",
          "Galaxy J2 Ace",
          "Galaxy J2 Core News",
          "Galaxy J2 Mini",
          "Galaxy J2 Mini Power",
          "Galaxy J2 Neo",
          "Galaxy J3",
          "Galaxy J3 (2016)",
          "Galaxy J3 (2017)",
          "Galaxy J3 Cover",
          "Galaxy J3 Cover 2020",
          "Galaxy J3 Power",
          "Galaxy J3 Pro",
          "Galaxy J3 Pro (2019)",
          "Galaxy J4 (2018)",
          "Galaxy J4 (2019)",
          "Galaxy J4 (2021)",
          "Galaxy J4 Messenger",
          "Galaxy J4 Luna Plus",
          "Galaxy J4 Primer",
          "Galaxy J4 Pro",
          "Galaxy J5",
          "Galaxy J5 Cover",
          "Galaxy J5s",
          "Galaxy J6",
          "Galaxy J6 (2016)",
          "Galaxy J6 (2017)",
          "Galaxy J6 (2018)",
          "Galaxy J6 Prime",
          "Galaxy M",
          "Galaxy J7 Cover",
          "Galaxy J7s",
          "Galaxy J7 (2016)",
          "Galaxy J7 (2018)",
          "Galaxy J7 (2020)",
          "Galaxy J7 Duo",
          "Galaxy J7 Max",
          "Galaxy J7 Neo",
          "Galaxy J7 Primer",
          "Galaxy J7 Primer 2",
          "Galaxy J7 Pro",
          "Galaxy J7 Sky Pro",
          "Galaxy J7 V",
          "Galaxy J7s",
          "Galaxy J8",
        ],
      },
      {
        name: "C / ON / XCOVER SERIES",
        devices: [
          "Galaxy C5",
          "Galaxy C5 Pro",
          "Galaxy C7",
          "Galaxy C7 (2017)",
          "Galaxy C7 Pro",
          "Galaxy C8",
          "Galaxy C9 Pro",
          "Galaxy On Max",
          "Galaxy On Nxt",
          "Galaxy On5",
          "Galaxy On5 Pro",
          "Galaxy On6",
          "Galaxy On7",
          "Galaxy On7 (2016)",
          "Galaxy On7 Prime",
          "Galaxy On7 / Primer",
          "Galaxy On7s Pro",
          "Galaxy On8",
          "Galaxy On8 (2018)",
          "Galaxy Xcover",
          "Galaxy Xcover 2",
          "Galaxy Xcover 3",
          "Galaxy Xcover 4",
          "Galaxy Xcover 4s",
          "Galaxy Xcover 5",
          "Galaxy Xcover FieldPro",
          "Galaxy Xcover Pro",
        ],
      },
      {
        name: "LEGACY GALAXY",
        devices: [
          "Galaxy A",
          "Galaxy Ace",
          "Galaxy Ace 2",
          "Galaxy Ace 3",
          "Galaxy Ace 4",
          "Galaxy Ace 4 Lite",
          "Galaxy Ace 4 Neo",
          "Galaxy Ace NXT",
          "Galaxy Ace Plus",
          "Galaxy Ace Style",
          "Galaxy Alpha",
          "Galaxy Beam 2",
          "Galaxy Beam2 BIGO",
          "Galaxy Core",
          "Galaxy Core 2",
          "Galaxy Core Advance",
          "Galaxy Core Lite LTE",
          "Galaxy Core LTE",
          "Galaxy Core Plus",
          "Galaxy Core Prime",
          "Galaxy Discover",
          "Galaxy Fit",
          "Galaxy F1",
          "Galaxy Papyrus",
          "Galaxy Papyrus 2",
          "Galaxy Fit",
          "Galaxy Star",
          "Galaxy Grand",
          "Galaxy Grand 2",
          "Galaxy Grand Plus",
          "Galaxy Grand Neo",
          "Galaxy Grand Neo Plus",
          "Galaxy Grand Prime",
          "Galaxy Grand Prime Duos",
          "Galaxy Grand Prime Plus",
          "Galaxy i7500",
          "Galaxy M (2019)",
          "Galaxy Mega 2",
          "Galaxy Mega 6.8",
          "Galaxy Mega 6.3",
          "Galaxy Mini",
          "Galaxy Mini 2",
          "Galaxy Nexus",
          "Galaxy Nexus S",
          "Galaxy Pocket",
          "Galaxy Pocket 2",
          "Galaxy Pocket Duos",
          "Galaxy Pocket Neo",
          "Galaxy Pocket Plus",
          "Galaxy Precedent",
          "Galaxy Prevail",
          "Galaxy Pro",
          "Galaxy R",
          "Galaxy R Style",
          "Galaxy Round",
          "Galaxy Rush",
          "Galaxy Spica",
          "Galaxy Star",
          "Galaxy Star 2",
          "Galaxy Star 2 Plus",
          "Galaxy Star Claros",
          "Galaxy Star Pro",
          "Galaxy Star Pro Classic",
          "Galaxy Trend",
          "Galaxy Trend 2",
          "Galaxy Trend 2 Lite",
          "Galaxy Trend 3",
          "Galaxy Trend Duos",
          "Galaxy Trend Lite",
          "Galaxy Trend Plus",
          "Galaxy U",
          "Galaxy W",
          "Galaxy Win",
          "Galaxy Win 2",
          "Galaxy Win Pro",
          "Galaxy Y",
          "Galaxy Y Duos",
          "Galaxy Y Pro",
          "Galaxy Y TV",
          "Galaxy Young",
          "Galaxy Young 2",
          "Galaxy Z (2019)",
        ],
      },
    ],
  },
];

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`device-policy-item ${open ? "device-policy-item-open" : ""}`}
      style={{ "--i": index }}
      onClick={() => setOpen(!open)}
    >
      <div className="device-policy-item-header">
        <h3 className="device-policy-item-question">{faq.question}</h3>
        <span className="device-policy-item-icon">{open ? "−" : "+"}</span>
      </div>
      <div className="device-policy-item-body">
        <div
          className="device-policy-item-answer"
          dangerouslySetInnerHTML={{ __html: faq.answer }}
        />
      </div>
    </div>
  );
}

function BrandCard({ brand, index }) {
  return (
    <div className="device-brand-card" style={{ "--i": index }}>
      <div className="device-brand-header">
        <span className="device-brand-name">{brand.brand}</span>
      </div>
      <div className="device-brand-content">
        {brand.series.map((s) => (
          <div className="device-series-block" key={s.name}>
            <p className="device-series-label">{s.name}</p>
            <div className="device-series-chips">
              {s.devices.map((d) => (
                <span className="device-chip" key={d}>
                  {d}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DevicePolicy() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeBrand, setActiveBrand] = useState("All");

  const brands = ["All", ...unsupportedDevices.map((b) => b.brand)];

  const filteredDevices = unsupportedDevices
    .filter((b) => activeBrand === "All" || b.brand === activeBrand)
    .map((b) => ({
      ...b,
      series: b.series
        .map((s) => ({
          ...s,
          devices: s.devices.filter((d) =>
            d.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((s) => s.devices.length > 0),
    }))
    .filter((b) => b.series.length > 0);

  return (
    <div className="device-policy-container">
      <div className="device-policy-header">
        <h1>Device Policy</h1>
        <p>
          Everything you need to know about device compatibility, DRM
          protection, and troubleshooting playback issues on our app.
        </p>
      </div>

      <div className="device-policy-imp">
        <p>
          <b>Important:</b> As much as we want all our subscribers to be
          benefitted, if you have any of the unsupported devices listed below,
          we advise you to first play one of the free videos in the app on your
          device before going for a Premium plan. Our app uses DRM to protect
          educational content, and some restrictions are a normal part of secure
          playback.
        </p>
      </div>
      <div className="device-policy-content">
        <h2>Supported Devices &amp; Minimum Requirements</h2>
        <p>
          The app is optimized for newer devices. Android 12 and above is
          recommended for best performance, though it may or may not work
          properly on older versions. iOS 14 and above is supported. A minimum
          of 6GB RAM is recommended for smooth functioning.
        </p>
        <div className="device-policy-main">
          <div className="device-policy-list">
            {supportedDevices.map((faq, i) => (
              <FaqItem key={faq.id} faq={faq} index={i} />
            ))}
          </div>
        </div>

        <h2>Unsupported Devices</h2>
        <p>
          Some devices may have compatibility issues with our app. Support may
          vary by model. Use the search or brand filters below to quickly check
          if your device is listed.
        </p>

        {/* Search & Filter Controls */}
        <div className="device-controls">
          <input
            className="device-search"
            type="text"
            placeholder="Search device model..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="device-brand-filters">
            {brands.map((b) => (
              <button
                key={b}
                className={`device-brand-filter-btn ${activeBrand === b ? "active" : ""}`}
                onClick={() => setActiveBrand(b)}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Unsupported Device Cards */}
        <div className="device-brands-list">
          {filteredDevices.length > 0 ? (
            filteredDevices.map((brand, i) => (
              <BrandCard key={brand.brand} brand={brand} index={i} />
            ))
          ) : (
            <p className="device-no-results">
              No devices found matching your search.
            </p>
          )}
        </div>

        <h2>DRM (Digital Rights Management) FAQs</h2>
        <div className="device-policy-main">
          <div className="device-policy-list">
            {drm.map((faq, i) => (
              <FaqItem key={faq.id} faq={faq} index={i} />
            ))}
          </div>
        </div>

        <h2>Troubleshooting Steps</h2>
        <div className="device-policy-main">
          <div className="device-policy-list">
            {steps.map((faq, i) => (
              <FaqItem key={faq.id} faq={faq} index={i} />
            ))}
          </div>
        </div>

        <h2>Support & Contact</h2>
        <div className="device-policy-main">
          <div className="device-policy-list">
            {support.map((faq, i) => (
              <FaqItem key={faq.id} faq={faq} index={i} />
            ))}
          </div>
        </div>

        <div className="device-policy-issues">
          <h4>Still facing issues?</h4>
          <p>
            Contact our support team with your device model, OS version, app
            version, and a screenshot of the error.
          </p>
          <NavLink
            className="device-policy-support"
            to="mailto:support@Pharma.com"
          >
            Email Support
          </NavLink>
          <NavLink className="device-policy-call" to="tel:+917428581909">
            Call: +91-7428581909
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default DevicePolicy;

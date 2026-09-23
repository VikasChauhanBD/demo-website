import React from "react";
import "./Policies.css";

function FairUsagePolicy() {
  return (
    <div className="main-container">
      <p>
        <b>Pharma</b> is an exclusive mobile learning platform accessible only
        via authorized <b>Android and iOS</b> smartphones and tablets; usage on
        macOS, Windows, Chromebooks, or emulators is strictly prohibited.
        <br />
        <br />
        Access to paid content requires <b>Device Linking,</b> with a lifetime
        limit of <b>two (2) unique devices</b> per account and only{" "}
        <b>one (1) active session</b> permitted at any time. The devices are
        linked after purchase with the user getting appropriate prompts. Please
        note that linked devices <b>cannot be changed or reset;</b> sharing
        credentials that lead to unauthorized device linking will result in a
        permanent loss of access.
        <br />
        <br />
        To ensure platform integrity, all usage is monitored under a{" "}
        <b>Fair Usage Policy,</b> and Pharma reserves the right to perform{" "}
        <b>identity verification</b> at any time. Any unauthorized attempts to
        bypass these device or concurrency limits may result in temporary or
        permanent account suspension.
      </p>
      <br />
      <br />

      <h1>Pharma Device & Fair Usage Policy</h1>

      <h2>1. Supported Devices & Platforms</h2>
      <p>
        Pharma is designed exclusively for learning experience. The application
        is authorized for use on the following platforms:
        <br />
        <ul>
          <li>
            {" "}
            <b>Android:</b> Mobile phones and tablets.
          </li>
          <li>
            {" "}
            <b>iOS/iPadOS:</b> iPhones and iPads.
          </li>
        </ul>
        <b>Prohibited Platforms:</b> To maintain security and integrity, the app
        is strictly blocked on non-mobile environments, including but not
        limited to <b>macOS, Windows, ChromeOS (Chromebooks),</b> and any
        emulators or virtual machines.
      </p>
      <br />

      <h2>2. Device Registration & Mapping</h2>
      <p>
        To access premium content, you must explicitly link your hardware to
        your Pharma account:
        <br />
        <ul>
          <li>
            {" "}
            <b>The "2-Device" Rule:</b> Your account supports a maximum of{" "}
            <b>two (2) linked devices.</b> Once these two devices are
            registered, they are uniquely associated with your account.{" "}
          </li>
          <li>
            {" "}
            <b>No Resets:</b> Once a device is linked, the mapping is{" "}
            <b>permanent.</b> It cannot be changed or reset by the user.
          </li>
          <li>
            {" "}
            <b>Security Warning:</b> If you share your login credentials and a
            third party tries to link their device to your account, you will
            lose your own access slot <b>permanently.</b>
          </li>
        </ul>
        <b>Identity Verification & Ownership</b>
        <ul>
          <li>
            <b>Personal Use Only:</b> Both linked devices{" "}
            <b>must belong to you,</b> the registered subscriber.
          </li>
          <li>
            <b>Verification:</b> Pharma reserves the right to request{" "}
            <b>identification</b> at any time to verify that the person using
            the linked device matches the account holder. Failure to comply or a
            mismatch in identity will lead to immediate account termination.
          </li>
        </ul>
      </p>
      <br />

      <h2>3. Single Concurrent Session</h2>
      <p>
        While you may have two registered devices (e.g., a phone and a tablet),
        Pharma supports <b>only one (1) active session at a time.</b>
        <br />
        <ul>
          <li>
            {" "}
            If you log in on Device B while a session is active on Device A, the
            session on Device A will be automatically terminated.{" "}
          </li>
          <li>
            {" "}
            Sharing account credentials to facilitate simultaneous use by
            multiple individuals is a violation of this policy.
          </li>
        </ul>
      </p>
      <br />

      <h2>4. Fair Usage Policy (FUP)</h2>
      <p>
        To ensure a high-quality experience for all students and to prevent
        automated scraping or account sharing, usage is monitored under our Fair
        Usage Policy:
        <br />
        <ul>
          <li>
            {" "}
            <b>Tracking:</b> We monitor login frequency, device switches, and
            data consumption patterns.
          </li>
          <li>
            {" "}
            <b>Typical Usage:</b> Access is intended for individual, personal
            study. Patterns that suggest commercial use, bulk downloading, or
            automated "bot" activity will be flagged.
          </li>
          <li>
            {" "}
            <b>Enforcement:</b> Pharma reserves the right to temporarily suspend
            or permanently terminate accounts that consistently exceed typical
            human-usage benchmarks or bypass security protocols.
          </li>
        </ul>
      </p>
      <br />

      <h2>5. Security & Integrity</h2>
      <p>
        To ensure a high-quality experience for all students and to prevent
        automated scraping or account sharing, usage is monitored under our Fair
        Usage Policy:
        <br />
        <ul>
          <li>
            <b>Jailbroken/Rooted Devices:</b> For the safety of our proprietary
            content, Pharma would not function on rooted or jailbroken devices.
            Any usage on these devices shall be a clear policy violation.
          </li>
          <li>
            <b>Screen Recording:</b> Any attempt to use screen recording,
            mirroring, or external capture software is strictly prohibited and
            may result in an immediate account ban.
          </li>
        </ul>
      </p>
      <br />
    </div>
  );
}

export default FairUsagePolicy;

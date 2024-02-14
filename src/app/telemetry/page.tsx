import Head from "next/head";
import IframeTelemetry from "../tokenomics/components/iframe";

export default function TelemetryPage() {
  return (
    <>
      <Head>
        <link rel="preload" href="../../globals.css" as="style" />
      </Head>
      <div className="flex flex-col items-center justify-center my-auto">
        <IframeTelemetry />
      </div>
    </>
  );
}

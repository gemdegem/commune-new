import Head from "next/head";
import IframeTelemetry from "../tokenomics/components/iframe";

export default function TelemetryPage() {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <div className="flex flex-col items-center justify-center my-auto">
        <IframeTelemetry />
      </div>
    </>
  );
}

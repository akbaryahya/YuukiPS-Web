import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ server = "sg" }) {

  const { data, error } = useSWR(
    `https://${server}.game.yuuki.me/status/server`,
    fetcher
  );

  if (server == "sg") {
    server = "Singapore"
  }
  if (server == "eu") {
    server = "Dusseldorf"
  }
  if (server == "tes") {
    server = "Beta Testing"
  }

  var online = "Offline";
  var version = "Unknown";
  var ram = "Unknown";
  if (data) {
    if (data.status) {
      if (data.status.playerCount) {
        online = data.status.playerCount + " Online";
      }
      if (data.status.DockerGC) {
        version = data.status.DockerGC;
      }
      if (data.status.MemoryCurrently) {
        ram = data.status.MemoryCurrently + " MB";
      }
    }
  }

  return (
    <div class="stat">
      <div class="stat-title">{server}</div>
      <div class="stat-value">{online}</div>
      <div class="stat-desc">
        <div className="new-line">Version: {version}</div>
        <div className="new-line">RAM: {ram}</div>
      </div>
    </div>

  );
}
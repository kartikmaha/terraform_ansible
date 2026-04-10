async function runAction(action) {
  addLog(`Triggered: ${action}`);

  let endpoint = "";

  switch (action) {
    case "terraform-init":
      endpoint = "/api/terraform/init";
      updateStatus("terraform-status", "Running init...");
      break;

    case "terraform-plan":
      endpoint = "/api/terraform/plan";
      updateStatus("terraform-status", "Running plan...");
      break;

    case "terraform-apply":
      endpoint = "/api/terraform/apply";
      updateStatus("terraform-status", "Applying changes...");
      break;

    case "ansible-run":
      endpoint = "/api/ansible/run";
      updateStatus("ansible-status", "Running playbook...");
      break;
  }

  try {
    const res = await fetch(endpoint, { method: "POST" });
    const data = await res.json();

    addLog(JSON.stringify(data, null, 2));
    updateStatusFromAction(action, "Completed");
  } catch (err) {
    addLog("Error: " + err.message);
    updateStatusFromAction(action, "Failed");
  }
}

function updateStatus(id, text) {
  document.getElementById(id).innerText = "Status: " + text;
}

function updateStatusFromAction(action, state) {
  if (action.startsWith("terraform")) {
    updateStatus("terraform-status", state);
  }
  if (action.startsWith("ansible")) {
    updateStatus("ansible-status", state);
  }
}

async function fetchStatus() {
  try {
    const res = await fetch("/api/status");
    const data = await res.json();
    document.getElementById("infra-status").innerText =
      JSON.stringify(data, null, 2);
  } catch (err) {
    addLog("Failed to fetch status: " + err.message);
  }
}

function addLog(msg) {
  const logBox = document.getElementById("logs");
  logBox.innerText += `[${new Date().toLocaleTimeString()}] ${msg}\n`;
}

function clearLogs() {
  document.getElementById("logs").innerText = "";
}
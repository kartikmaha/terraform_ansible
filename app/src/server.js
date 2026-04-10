const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(".")); // serve frontend

// Mock Terraform + Ansible actions (replace with real scripts later)

app.post("/api/terraform/init", (req, res) => {
  console.log("Terraform Init triggered");
  res.json({ status: "Terraform initialized successfully" });
});

app.post("/api/terraform/plan", (req, res) => {
  console.log("Terraform Plan triggered");
  res.json({ status: "Terraform plan generated" });
});

app.post("/api/terraform/apply", (req, res) => {
  console.log("Terraform Apply triggered");
  res.json({ status: "Terraform apply completed" });
});

app.post("/api/ansible/run", (req, res) => {
  console.log("Ansible Playbook triggered");
  res.json({ status: "Ansible playbook executed" });
});

app.get("/api/status", (req, res) => {
  res.json({
    terraform: "healthy",
    ansible: "healthy",
    infra: "running"
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
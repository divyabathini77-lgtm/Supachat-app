# SupaChat DevOps Assignment

## 🚀 Overview
Full-stack chatbot application with:
- Frontend: Next.js
- Backend: FastAPI
- Reverse Proxy: Nginx
- Containerization: Docker
- CI/CD: GitHub Actions
- Monitoring: Prometheus + Grafana

---

## 🧱 Architecture
User → Nginx → Frontend (/)
                 → Backend (/api)

---

## 🐳 Run Locally
docker-compose up --build

Access:
- App: http://localhost
- Backend: http://localhost:8000/health
- Grafana: http://localhost:3001

---

## ☁️ Azure Deployment

1. Create VM Using azure CLI
   az login

az vm create \
  --resource-group myRG \
  --name supachatVM \
  --image Ubuntu2204 \
  --admin-username azureuser \
  --generate-ssh-keys
  
2.Open Ports
  az vm open-port --port 80 --resource-group myRG --name supachatVM
  
3. SSH into VM
 ssh azureuser@<public-ip>
 
4. Install Docker
5. Clone repo
6. Run:
   docker-compose up -d

---

## 🔁 CI/CD
- GitHub Actions auto deploy on push
- SSH into Azure VM
- Pull latest code
- Restart containers

---

## 📊 Monitoring
- Prometheus collects metrics
- Grafana dashboards for:
  - CPU
  - Memory
  - Container health

---

## ✅ Features Implemented
- Chat UI
- Query history
- Graphs (Recharts)
- FastAPI backend
- /health endpoint
- Dockerized services
- Nginx reverse proxy
- CI/CD pipeline
- Monitoring stack

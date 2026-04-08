# SupaChat DevOps Assignment

## ?? Overview
Full-stack chatbot application with:
- Frontend: Next.js
- Backend: FastAPI
- Reverse Proxy: Nginx
- Containerization: Docker
- CI/CD: GitHub Actions
- Monitoring: Prometheus + Grafana

---

## ?? Architecture
User ? Nginx ? Frontend (/)
                 ? Backend (/api)

---

## ?? Run Locally
docker-compose up --build

Access:
- App: http://localhost
- Backend: http://localhost:8000/health
- Grafana: http://localhost:3001

---

## ?? Azure Deployment

1. Create VM
2. SSH into VM
3. Install Docker
4. Clone repo
5. Run:
   docker-compose up -d

---

## ?? CI/CD
- GitHub Actions auto deploy on push
- SSH into Azure VM
- Pull latest code
- Restart containers

---

## ?? Monitoring
- Prometheus collects metrics
- Grafana dashboards for:
  - CPU
  - Memory
  - Container health

---

## ? Features Implemented
- Chat UI
- Query history
- Graphs (Recharts)
- FastAPI backend
- /health endpoint
- Dockerized services
- Nginx reverse proxy
- CI/CD pipeline
- Monitoring stack
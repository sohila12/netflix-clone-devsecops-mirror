# 🚀 Netflix Clone – Full DevSecOps CI/CD Pipeline

This project demonstrates a **complete end-to-end DevSecOps CI/CD pipeline** for a containerized Netflix Clone application, following **GitOps principles**, integrating **security scanning**, **artifact management**, and **automated Kubernetes deployment using ArgoCD**.

---

## 📌 Project Overview

The pipeline automates the full lifecycle of a container image:

1. Mirror an existing Docker image
2. Scan it for vulnerabilities and secrets
3. Push it to AWS ECR
4. Update Kubernetes manifests via GitOps
5. Deploy automatically using ArgoCD
6. Store all security and deployment results as artifacts (GitHub + S3)

---

## 🧱 Architecture Overview
```
Source Image (DockerHub)
↓
GitHub Actions (CI/CD Pipeline)
- Image Mirroring
- Trivy Scan (Vulnerabilities + Secrets)
- Push Image to AWS ECR
- GitOps Manifest Update
- OWASP Dependency Check
- SonarQube (Self-hosted)
- Upload Reports (Artifacts + S3)
↓
GitHub Repository (GitOps)
↓
ArgoCD
↓
Kubernetes Cluster
```

---

## 🛠️ Tech Stack

### CI/CD & DevSecOps
- GitHub Actions
- Trivy (Image vulnerability & secrets scanning)
- OWASP Dependency-Check
- SonarQube (Self-hosted)

### Cloud & Containerization
- Docker
- AWS ECR
- AWS S3 (Artifacts storage)

### GitOps & Deployment
- Kubernetes
- ArgoCD

---

## 🔄 CI/CD Pipeline Stages

### 1️⃣ Image Mirroring
- Pulls image from DockerHub: `mostafagheta/netflix-clone:latest`
- Tags the image using commit SHA.

---

### 2️⃣ Trivy Security Scan
- Scans OS & library vulnerabilities.
- Scans for secrets inside image layers.
- Generates: `trivy-image-report.txt`
- Uploaded as:
  - GitHub Artifact
  - AWS S3 Object

---

### 3️⃣ Push Image to AWS ECR
- Uses IAM User credentials.
- Pushes image to: `734468801857.dkr.ecr.us-east-1.amazonaws.com/nti_project`

---

### 4️⃣ GitOps Deployment Update
- Updates `Kubernetes/deployment.yml` with new image.
- Creates GitOps branch: `gitops/deploy-<commit-sha>`
- Opens Pull Request for deployment.

---

### 5️⃣ SonarQube Analysis (Self-Hosted)
- Runs code quality analysis.
- Uses test coverage reports.
- Executed on self-hosted runner.

---

### 6️⃣ OWASP Dependency Check
- Scans application dependencies.
- Generates HTML reports.
- Uploaded to GitHub Artifacts and AWS S3.

---

### 7️⃣ ArgoCD Continuous Deployment
- Monitors `Kubernetes/` directory on main branch.
- Automatically syncs changes.
- Deploys application to Kubernetes.
- Self-heals and prunes outdated resources.

---

### 8️⃣ Artifacts & Reports Storage

All reports are stored in two locations:

#### GitHub Artifacts
- Trivy reports
- OWASP reports
- ArgoCD / Kubernetes snapshots

#### AWS S3
`s3://netflix-clone-devsecops-artifacts-734468801857/netflix-clone-devsecops-mirror/`
- `trivy/<run-id>/<sha>/`
- `owasp/<run-id>/<sha>/`
- `argocd/<run-id>/<sha>/`

---

## 🔐 Secrets & Configuration

### GitHub Secrets
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `SONARQUBE_TOKEN`
- `SLACK_WEBHOOK_URL` (optional)
- `TEAMS_WEBHOOK_URL` (optional)

### GitHub Variables
- `AWS_REGION`
- `AWS_ACCOUNT_ID`
- `ECR_REPO`

---

## 📦 Repository Structure
```
.
├── .github/workflows/devsecops-full-pipeline.yml
├── Kubernetes/
│   ├── deployment.yml
│   ├── service.yml
│   └── ingress.yml
├── Source-Code/Application-Code
├── argocd/application.yml
└── README.md
```

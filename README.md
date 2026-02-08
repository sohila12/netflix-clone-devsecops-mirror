<p align="center">
  <img src="images/logos/nti-logo.png" height="120"/>
</p>

<h1 align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=35&duration=3000&pause=1000&color=00D9FF&center=true&vCenter=true&width=900&lines=End-to-End+Netflix+Clone+DevSecOps+Project;GitOps+%2B+AWS+EKS+%2B+ArgoCD;CI%2FCD+Pipeline+Automation;Observability+%7C+Prometheus+%2B+Grafana+%2B+Alertmanager" alt="Typing SVG" />
</h1>

<h3 align="center" style="color: #64B5F6;">
  í¾“ DevOps Graduation Project â€” <strong>National Telecommunication Institute (NTI)</strong>
</h3>

<p align="center">
  <img src="https://img.shields.io/badge/AWS-EKS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"/>
  <img src="https://img.shields.io/badge/ArgoCD-GitOps-EF7B4D?style=for-the-badge&logo=argo&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white"/>
  <img src="https://img.shields.io/badge/Amazon_ECR-Registry-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"/>
  <img src="https://img.shields.io/badge/Terraform-IaC-7B42BC?style=for-the-badge&logo=terraform&logoColor=white"/>
  <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Trivy-Vuln%20%2B%20Secrets-0F766E?style=for-the-badge&logo=aqua&logoColor=white"/>
  <img src="https://img.shields.io/badge/OWASP-Dependency%20Check-000000?style=for-the-badge&logo=owasp&logoColor=white"/>
  <img src="https://img.shields.io/badge/SonarQube-Code%20Quality-4E9BCD?style=for-the-badge&logo=sonarqube&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prometheus-Monitoring-E6522C?style=for-the-badge&logo=prometheus&logoColor=white"/>
  <img src="https://img.shields.io/badge/Grafana-Dashboards-F46800?style=for-the-badge&logo=grafana&logoColor=white"/>
  <img src="https://img.shields.io/badge/Alertmanager-Alerts-E6522C?style=for-the-badge&logo=prometheus&logoColor=white"/>
  <img src="https://img.shields.io/badge/Slack-Notifications-4A154B?style=for-the-badge&logo=slack&logoColor=white"/>
</p>

<p align="center" style="font-size: 1.15rem; line-height: 1.8; max-width: 900px; margin: 20px auto;">
  í¾“ This project represents the <strong>culmination of DevOps training</strong> at the <br/>
  <strong>National Telecommunication Institute (NTI)</strong>. <br/>
  âœ¨ A complete production-ready <strong>DevSecOps + GitOps</strong> pipeline demonstrating modern cloud-native practices.
</p>

---

<div align="center">

## íº€ **ArgoCD GitOps Deployment on AWS EKS**
### *Using GitHub Actions & Amazon ECR*

</div>

<table align="center">
<tr>
<td align="center" width="33%">

### í¿—ï¸ **Infrastructure**

- âœ… AWS VPC (Public/Private Subnets)
- âœ… EKS Cluster + Node Groups
- âœ… NAT Gateway + Internet Gateway
- âœ… ALB Ingress Controller
- âœ… Route 53 + ACM (TLS)
- âœ… Cluster Autoscaler

</td>
<td align="center" width="33%">

### âš™ï¸ **CI/CD Pipeline**

- âœ… GitHub Actions
- âœ… Docker Tag & Push (ECR)
- âœ… Trivy (Vuln + Secrets)
- âœ… OWASP Dependency-Check
- âœ… SonarQube (Self-Hosted)
- âœ… Reports â†’ Artifacts + S3

</td>
<td align="center" width="33%">

### í´„ **GitOps**

- âœ… Manifest Auto-Update
- âœ… GitOps Branch per Run
- âœ… ArgoCD Auto-Sync
- âœ… Auto-healing + Prune
- âœ… Rollback Ready

</td>
</tr>
</table>

---

## í³ Architecture Overview

<div align="center">

![Architecture Diagram](images/Project-Architecture.png)

</div>

### í¿›ï¸ **Components Breakdown**

<table>
<tr>
<td width="50%">

#### í¼ **Network Layer**
```mermaid
graph TB
    A[í¼ VPC] --> B[í³¡ Public Subnets]
    A --> C[í´’ Private Subnets]
    B --> D[í¼ Internet Gateway]
    B --> E[íºª NAT Gateway]
    C --> F[â˜¸ï¸ EKS Cluster]
    C --> G[í´„ ArgoCD Namespace]
    C --> H[í³¦ Netflix Namespace]
    C --> I[í³ˆ Monitoring Namespace]
    
    style A fill:#FF9900,color:#fff
    style B fill:#4CAF50,color:#fff
    style C fill:#F44336,color:#fff
    style F fill:#326CE5,color:#fff
    style G fill:#EF7B4D,color:#fff
```

**Public Subnets:**
- Internet Gateway
- NAT Gateway
- ALB / Ingress

**Private Subnets:**
- EKS Worker Nodes
- ArgoCD Controller
- Application Pods
- Monitoring Stack

</td>
<td width="50%">

#### í´„ **CI/CD Flow**
```mermaid
graph LR
    A[í±©â€í²» Developer] -->|Push Code| B[GitHub]
    B -->|Trigger| C[í´– GitHub Actions]
    C -->|Pull Source Image| D[í³¥ SOURCE_IMAGE]
    C -->|Scan| E[í´ Trivy + OWASP]
    C -->|Quality| F[âœ… SonarQube]
    C -->|Push| G[í³¦ Amazon ECR]
    C -->|Update| H[í³ K8s Manifest]
    H -->|Commit| B
    B -->|Watch| I[í´„ ArgoCD]
    I -->|Deploy| J[â˜¸ï¸ EKS]
    J -->|Metrics| K[í³ˆ Prometheus]
    K -->|Dashboards| L[í³Š Grafana]
    K -->|Alerts| M[íº¨ Alertmanager â†’ Slack]
    
    style B fill:#181717,color:#fff
    style C fill:#2088FF,color:#fff
    style G fill:#FF9900,color:#fff
    style I fill:#EF7B4D,color:#fff
    style J fill:#326CE5,color:#fff
```

**Automation Flow:**
- Code Push â†’ GitHub
- Actions â†’ Scan + Quality + Push to ECR
- Actions â†’ Update Manifests (GitOps branch)
- ArgoCD â†’ Auto-Sync â†’ Deploy to EKS
- Prometheus/Grafana â†’ Dashboards + Alerts to Slack

</td>
</tr>
</table>

---

## í´¥ CI/CD Workflow Pipeline

<div align="center">
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                         íº€ AUTOMATED DEPLOYMENT PIPELINE                      â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

</div>

### í³ Step-by-Step Workflow

<table>
<tr>
<td width="10%" align="center"><h3>1ï¸âƒ£</h3></td>
<td width="90%">

**í±©â€í²» Developer Push**
```bash
git add .
git commit -m "feat: update application"
git push origin main
```

**Triggers:** GitHub Actions workflow on main branch

</td>
</tr>

<tr>
<td width="10%" align="center"><h3>2ï¸âƒ£</h3></td>
<td width="90%">

**í´– GitHub Actions Pipeline**

Pipeline Steps:
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ í´ Pull SOURCE_IMAGE (base)             â”‚
â”‚ í¿·ï¸ Tag Image for Amazon ECR            â”‚
â”‚ í´ Trivy Scan (vuln + secret)          â”‚
â”‚ í·ª OWASP Dependency Check (HTML)        â”‚
â”‚ âœ… SonarQube Scan + Coverage            â”‚
â”‚ í³¤ Push Image to Amazon ECR             â”‚
â”‚ í²¾ Upload Reports â†’ Artifacts + S3      â”‚
â”‚ í³ Update K8s Deployment Manifest       â”‚
â”‚ í´€ Push GitOps Branch (safe)            â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Output:** New ECR image tagged with commit SHA

</td>
</tr>

<tr>
<td width="10%" align="center"><h3>3ï¸âƒ£</h3></td>
<td width="90%">

**í´„ ArgoCD GitOps Sync**
```
ArgoCD Detects Changes
        â†“
   Compares State
        â†“
  Auto-Sync Enabled
        â†“
   Deploys to EKS
        â†“
  âœ… Application Updated
```

**Result:** Zero-downtime deployment with automatic rollback capability

</td>
</tr>
</table>

---

## í³¸ Implementation Journey

<div align="center">

### í» ï¸ Step-by-Step Setup Guide (with Evidence)

</div>

### í¿—ï¸ Step 1: Infrastructure Provisioning with Terraform
```bash
cd terraform
terraform init
terraform plan
terraform apply -auto-approve
```

âš ï¸ **Important:** Configure AWS credentials before running Terraform.

**í¾¯ What Gets Created:**
- âœ… VPC with public/private subnets
- âœ… Internet Gateway & NAT Gateway
- âœ… EKS Cluster with managed node groups
- âœ… Security groups & IAM roles
- âœ… Load Balancer infrastructure

---

### âš™ï¸ Step 2: Verify Cluster + Namespaces
```bash
kubectl get namespaces -A
kubectl get nodes -o wide
```

---

### í´„ Step 3: Install & Configure ArgoCD

---

### í´ Step 4: Registry Account (ECR) â€” Sign in / Sign up

---

### í³¦ Step 5: Netflix Namespace Workloads + HPA

---

### íº€ Step 6: Cluster Autoscaler

---

### í´‘ Step 7: External Secrets + Secret Values

**í´’ Security Note:** Never commit secrets to your repository. Use GitHub Secrets / External Secrets.

---

### í´ Step 8: TLS Certificates (ACM)

---

### í¼ Step 9: Application Running

---

## í» ï¸ Technologies Stack

<div align="center">

| Category | Technology |
|----------|-----------|
| â˜ï¸ Cloud | AWS (EKS, VPC, ECR, ACM, Route 53, Cognito, S3) |
| í¿—ï¸ IaC | Terraform |
| â˜¸ï¸ Orchestration | Kubernetes |
| í´„ GitOps | ArgoCD |
| í´– CI/CD | GitHub Actions |
| í´’ Security | Trivy, OWASP Dependency Check, SonarQube |
| í³ˆ Observability | Prometheus, Grafana, Alertmanager |
| í´” Notifications | Slack |

</div>

---

<div align="center">

## í¼Ÿ Star this repo if you found it helpful!

---

## í³§ Contact

**Name:** Sohila Hosam  
**GitHub:** https://github.com/sohila12

<img src="https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Maintained-Yes-green?style=for-the-badge"/>

</div>

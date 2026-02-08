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

**Automation Flow:**
1. Code Push â†’ GitHub
2. Actions â†’ Scan + Quality + Push to ECR
3. Actions â†’ Update Manifests (GitOps branch)
4. ArgoCD â†’ Auto-Sync â†’ Deploy to EKS
5. Prometheus/Grafana â†’ Dashboards + Alerts to Slack

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

**í±¨â€í²» Developer Push**

\`\`\`bash
git add .
git commit -m "feat: update application"
git push origin main
\`\`\`

**Triggers:** GitHub Actions workflow on main branch

</td>
</tr>

<tr>
<td width="10%" align="center"><h3>2ï¸âƒ£</h3></td>
<td width="90%">

**í´– GitHub Actions Pipeline**

**Pipeline Steps:**

| Step | Action | Tool |
|:----:|--------|------|
| í´ | Pull SOURCE_IMAGE | Docker |
| í¿·ï¸ | Tag Image for ECR | AWS CLI |
| í´ | Security Scan | Trivy |
| í·ª | Dependency Check | OWASP |
| âœ… | Code Quality | SonarQube |
| í³¤ | Push to Registry | ECR |
| í²¾ | Upload Reports | S3 + Artifacts |
| í³ | Update Manifest | Git |
| í´€ | Create GitOps Branch | GitHub |

**í³Š Output:** New ECR image tagged with commit SHA

</td>
</tr>

<tr>
<td width="10%" align="center"><h3>3ï¸âƒ£</h3></td>
<td width="90%">

**í´„ ArgoCD GitOps Sync**

```
í´ ArgoCD Detects Changes
        â†“
í³Š Compares State
        â†“
í´„ Auto-Sync Enabled
        â†“
íº€ Deploys to Amazon EKS
        â†“
âœ… Application Updated Successfully
```

**í¾¯ Result:** Zero-downtime deployment with automatic rollback capability

</td>
</tr>
</table>

---

## í³¸ Implementation Journey

<div align="center">

### í» ï¸ Step-by-Step Setup Guide (with Evidence)

</div>

### í¿—ï¸ Step 1: Infrastructure Provisioning with Terraform

\`\`\`bash
cd terraform
terraform init
terraform plan
terraform apply -auto-approve
\`\`\`

> âš ï¸ **Important:** Configure AWS credentials before running Terraform.

**í¾¯ What Gets Created:**

- âœ… VPC with public/private subnets
- âœ… Internet Gateway & NAT Gateway
- âœ… EKS Cluster with managed node groups
- âœ… Security groups & IAM roles
- âœ… Load Balancer infrastructure

---

### âš™ï¸ Step 2: Configure Kubectl for EKS

\`\`\`bash
aws eks update-kubeconfig --name my-eks --region eu-central-1

kubectl get nodes
kubectl cluster-info
kubectl get ns -A
\`\`\`

**âœ… Verification Checklist:**

- âœ“ Nodes are in Ready state
- âœ“ Cluster endpoint is reachable
- âœ“ Current context is set to my-eks

---

### í°³ Step 3: Build & Test Docker Image (Local)

\`\`\`bash
# Go to application directory
cd Source-Code/Application-Code

# Build Docker image locally
docker build -t netflix-clone:local .

# Run container locally
docker run -d --name netflix-clone-local -p 8080:80 netflix-clone:local

# Verify application
curl http://localhost:8080
\`\`\`

**í´ Testing:**

- âœ… Docker image builds successfully
- âœ… Container starts without errors
- âœ… Application responds on expected port

\`\`\`bash
# Cleanup
docker rm -f netflix-clone-local
\`\`\`

---

### í³¦ Step 4: Push Docker Image to Amazon ECR

**1ï¸âƒ£ Authenticate Docker to Amazon ECR**

\`\`\`bash
aws ecr get-login-password --region eu-central-1 \
| docker login --username AWS --password-stdin 734468801857.dkr.ecr.eu-central-1.amazonaws.com
\`\`\`

**2ï¸âƒ£ Tag Image for ECR**

\`\`\`bash
docker tag netflix-clone:local \
734468801857.dkr.ecr.eu-central-1.amazonaws.com/nti_project:latest
\`\`\`

**3ï¸âƒ£ Push Image to Amazon ECR**

\`\`\`bash
docker push 734468801857.dkr.ecr.eu-central-1.amazonaws.com/nti_project:latest
\`\`\`

**âœ… Result:**

- Image successfully stored in Amazon ECR
- Ready to be used by Kubernetes & CI/CD pipeline

---

### í´„ Step 5: CI/CD + GitOps Automation (GitHub Actions â†’ ArgoCD)

Once the Docker image is available in Amazon ECR, the CI/CD pipeline automatically performs security scans, tags and pushes the image, updates Kubernetes manifests, and triggers ArgoCD to sync and deploy the application to the EKS cluster.

```
Scan â†’ Tag â†’ Push â†’ Update Manifest â†’ ArgoCD Sync â†’ Deploy
```

**í´ Pipeline Responsibilities**

| Step | Action | Tool |
|------|--------|------|
| í´ | Trivy Scan (vulnerabilities + secrets) | Trivy |
| í·ª | OWASP Dependency Check | OWASP |
| âœ… | Code Quality Analysis | SonarQube |
| í³¦ | Push New Tagged Images | Amazon ECR |
| í³ | Update Kubernetes Manifest | Git |
| í´„ | Trigger Auto-Sync | ArgoCD |
| â˜¸ï¸ | Deploy to EKS (my-eks) | Kubernetes |

---

### í´„ Step 6: Install & Configure ArgoCD

\`\`\`bash
kubectl create namespace argocd

kubectl apply -n argocd \
  -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

kubectl wait --for=condition=available deployment/argocd-server \
  -n argocd --timeout=300s

kubectl -n argocd get secret argocd-initial-admin-secret \
  -o jsonpath="{.data.password}" | base64 -d

kubectl port-forward svc/argocd-server -n argocd 8080:443
\`\`\`

---

### í´ Step 7: Configure GitHub Secrets

**Repository â†’ Settings â†’ Secrets and variables â†’ Actions**

| Secret | Purpose |
|--------|---------|
| AWS_ACCESS_KEY_ID | AWS Authentication |
| AWS_SECRET_ACCESS_KEY | AWS Authentication |
| SONARQUBE_TOKEN | SonarQube Scan |
| SLACK_WEBHOOK_URL | Alerts (optional) |

---

### í³¦ Step 8: Create ArgoCD Application

\`\`\`bash
kubectl apply -f argocd/application.yaml
\`\`\`

\`\`\`yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: netflix
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/sohila12/netflix-clone-devsecops-mirror
    targetRevision: main
    path: Kubernetes
  destination:
    server: https://kubernetes.default.svc
    namespace: netflix
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
\`\`\`

**âœ… Result:**

- ArgoCD starts monitoring the repository
- Any change to Kubernetes manifests is automatically applied to the cluster

---

### í´„ Step 9: Trigger Auto Deployment

Any change pushed to the main branch automatically triggers the CI/CD pipeline.

\`\`\`bash
echo "trigger pipeline" >> README.md
git add README.md
git commit -m "chore: trigger deployment"
git push origin main
\`\`\`

**í´ Pipeline Flow**

```
CI â†’ Scan â†’ Push to ECR â†’ Update Manifest â†’ ArgoCD Sync â†’ Deploy
```

**What Happens Next:**

| Step | Action | Tool |
|------|--------|------|
| í´– | GitHub Actions workflow starts | GitHub Actions |
| í´ | Docker image scanned | Trivy |
| í·ª | Dependency analysis | OWASP |
| âœ… | Code quality analysis | SonarQube |
| í³¦ | Image tagged and pushed | Amazon ECR |
| í³ | Manifest updated in GitOps branch | Git |
| í´„ | ArgoCD detects change and syncs | ArgoCD |
| â˜¸ï¸ | Application deployed to EKS | Kubernetes |

---

### í³Š Step 10: Verify Deployment

After ArgoCD sync completes, verify that the application is running correctly.

\`\`\`bash
kubectl get all -n netflix
kubectl get hpa -n netflix
\`\`\`

**Expected Result:**

- âœ… Pods are in Running state
- âœ… Deployment and ReplicaSets are healthy
- âœ… HPA is enabled and monitoring CPU utilization

---

### íº€ Step 11: Verify Cluster Autoscaler

Ensure that Cluster Autoscaler is running and managing node scaling.

\`\`\`bash
kubectl get all -A | grep cluster-autoscaler
\`\`\`

**Expected Result:**

- âœ… Cluster Autoscaler pod is running in kube-system namespace
- âœ… Node scaling is handled automatically based on workload demand

---

### í´‘ Step 12: Verify External Secrets

External Secrets is used to securely inject sensitive values from AWS services instead of hardcoding them.

\`\`\`bash
kubectl get all -n external-secrets
\`\`\`

**Expected Result:**

- âœ… External Secrets controller pods are running
- âœ… Secrets are synchronized into application namespaces

---

### í´ Step 13: Verify TLS Certificate (ACM)

AWS Certificate Manager (ACM) is used to secure application traffic with HTTPS.

**Verification:**

- âœ… Certificate is issued and valid
- âœ… Certificate is attached to the ALB Ingress
- âœ… HTTPS traffic is enabled for the application

---

### í¼ Step 14: Application Running

At this stage:

- âœ… Application is successfully running on AWS EKS
- âœ… ArgoCD status is Synced and Healthy
- âœ… Auto-scaling and auto-healing are fully functional

---

## í¾¯ Key Features

<div align="center">
<table>
<tr>
<td width="25%" align="center">

### íº€ Automation

- âœ… Fully automated CI/CD pipeline
- âœ… GitOps-based deployment
- âœ… Zero-touch releases
- âœ… Automatic rollbacks

</td>
<td width="25%" align="center">

### í´’ Security

- âœ… Trivy vulnerability & secret scanning
- âœ… OWASP Dependency Check
- âœ… IAM roles & least privilege
- âœ… External Secrets management

</td>
<td width="25%" align="center">

### í³Š Observability

- âœ… Prometheus metrics collection
- âœ… Grafana dashboards
- âœ… Alertmanager alerts
- âœ… Real-time monitoring

</td>
<td width="25%" align="center">

### í´„ GitOps

- âœ… Git as single source of truth
- âœ… Declarative configuration
- âœ… ArgoCD auto-sync & self-heal
- âœ… Full audit trail

</td>
</tr>
</table>
</div>

---

## í» ï¸ Technologies Stack

<div align="center">

| Category | Technology | Purpose |
|----------|------------|---------|
| â˜ï¸ Cloud | ![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white) | EKS, VPC, ECR, ACM, Route 53, Cognito, S3 |
| í¿—ï¸ IaC | ![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=flat&logo=terraform&logoColor=white) | Infrastructure provisioning |
| â˜¸ï¸ Orchestration | ![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white) | Container orchestration |
| í°³ Containerization | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white) | Application packaging |
| í´„ GitOps | ![ArgoCD](https://img.shields.io/badge/ArgoCD-EF7B4D?style=flat&logo=argo&logoColor=white) | Continuous deployment |
| í´– CI/CD | ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=githubactions&logoColor=white) | Continuous integration |
| í³¦ Registry | ![Amazon ECR](https://img.shields.io/badge/Amazon_ECR-FF9900?style=flat&logo=amazonaws&logoColor=white) | Container image storage |
| í´ Security Scan | ![Trivy](https://img.shields.io/badge/Trivy-1904DA?style=flat&logo=aquasecurity&logoColor=white) | Vulnerability scanning |
| í·ª Dependency Check | ![OWASP](https://img.shields.io/badge/OWASP-000000?style=flat&logo=owasp&logoColor=white) | Dependency analysis |
| âœ… Code Quality | ![SonarQube](https://img.shields.io/badge/SonarQube-4E9BCD?style=flat&logo=sonarqube&logoColor=white) | Static code analysis |
| í³Š Monitoring | ![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=flat&logo=prometheus&logoColor=white) | Metrics collection |
| í³ˆ Visualization | ![Grafana](https://img.shields.io/badge/Grafana-F46800?style=flat&logo=grafana&logoColor=white) | Dashboard & analytics |
| íº¨ Alerting | ![Alertmanager](https://img.shields.io/badge/Alertmanager-E6522C?style=flat&logo=prometheus&logoColor=white) | Alert management |
| í´” Notifications | ![Slack](https://img.shields.io/badge/Slack-4A154B?style=flat&logo=slack&logoColor=white) | Team notifications |

</div>

---

## í³Š Project Outcomes

| Category | Achievement | Status |
|----------|-------------|--------|
| CI/CD & DevSecOps | End-to-End automated pipeline with integrated security gates | âœ… |
| GitOps Delivery | Continuous Delivery using ArgoCD for sync & self-healing | âœ… |
| Cloud Infrastructure | Production-ready AWS EKS cluster with Terraform (IaC) | âœ… |
| Security | Automated scanning with Trivy, OWASP, and SonarQube | âœ… |
| Scalability | Dynamic scaling via HPA and Cluster Autoscaler | âœ… |
| Observability | Full stack monitoring using Prometheus & Grafana | âœ… |

---

## í³ˆ Performance Metrics

<table align="center">
<tr>
<td align="center" width="33%">

### âš¡ Deployment Time

**< 5 minutes**  
From commit to EKS

</td>
<td align="center" width="33%">

### í´„ GitOps Sync

**Automatic**  
Triggered by Manifests

</td>
<td align="center" width="33%">

### í¾¯ Reliability

**High Availability**  
Self-healing enabled

</td>
</tr>
</table>

---

## í¾“ Learning Outcomes

### â˜ï¸ Cloud & Infrastructure

- **AWS Mastery:** Designing VPCs (Public/Private subnets), EKS Management, and IAM roles/policies.
- **Infrastructure as Code:** Managing Terraform state, modules, and reproducible environments.

### â˜¸ï¸ Kubernetes & Orchestration

- **Workload Management:** Advanced use of Deployments, Services, Secrets, and ConfigMaps.
- **Elasticity:** Implementing HPA and Cluster Autoscaler for cost-efficient scaling.

### í´– DevSecOps & GitOps

- **Automation:** Building robust GitHub Actions pipelines and ArgoCD workflows.
- **Security Scanning:** Implementing vulnerability (Trivy) and dependency (OWASP) checks.
- **Code Quality:** Enforcing quality gates using SonarQube.

---

## í´® Future Enhancements

| Feature | Description | Priority |
|---------|-------------|----------|
| í³Š Advanced Dashboards | Deep-dive Grafana metrics for app performance | í´´ High |
| íº¨ Alerting | Critical alerts via Alertmanager & Slack | í´´ High |
| í´ Centralized Logging | Log aggregation using ELK or Loki | í¿¡ Medium |
| í´„ Deployment Strategies | Implementing Blue-Green or Canary releases | í¿¡ Medium |
| í´ Secrets Management | Transitioning to HashiCorp Vault | í¿¡ Medium |

---

## í³– Documentation

> [!TIP]
> Click on the links below to explore the detailed technical documentation.

- í³˜ **Setup Guide** â€“ Cluster & infrastructure provisioning steps.
- í´§ **Configuration** â€“ Detailed CI/CD and GitOps settings.
- í¿—ï¸ **Architecture** â€“ System design and workflow explanation.
- í´’ **Security** â€“ Hardening practices and tool configurations.

---

## í´ Acknowledgments

> [!IMPORTANT]
> **National Telecommunication Institute (NTI)**  
> Special thanks for the structured DevOps training and professional cloud-native guidance.

---

## í³ Conclusion

This project represents a complete, **Production-Grade** implementation of modern **DevSecOps**. By integrating **GitOps** as the bridge between development and operations, we ensure that every change is audited, secure, and automatically deployed.

**The Workflow:**

```
Code â†’ Build â†’ Scan â†’ Push to ECR â†’ Manifest Update â†’ ArgoCD Sync â†’ AWS EKS
```

---

<div align="center">

### í¼Ÿ **Star this repository if you found it helpful!**

**Sohila Hosam**  
[GitHub Profile](https://github.com/sohila12)

</div>

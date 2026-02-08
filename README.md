<p align="center">
  <img src="images/logos/nti-logo.png" height="120"/>
</p>

<h1 align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=35&duration=3000&pause=1000&color=00D9FF&center=true&vCenter=true&width=900&lines=End-to-End+Netflix+Clone+DevSecOps+Project;GitOps+%2B+AWS+EKS+%2B+ArgoCD;CI%2FCD+Pipeline+Automation;Observability+%7C+Prometheus+%2B+Grafana+%2B+Alertmanager" />
</h1>

<h3 align="center">
Ìæì DevOps Graduation Project ‚Äî <strong>National Telecommunication Institute (NTI)</strong>
</h3>

<p align="center">
  <img src="https://img.shields.io/badge/AWS-EKS-FF9900?style=for-the-badge&logo=amazonaws"/>
  <img src="https://img.shields.io/badge/ArgoCD-GitOps-EF7B4D?style=for-the-badge&logo=argo"/>
  <img src="https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?style=for-the-badge&logo=githubactions"/>
  <img src="https://img.shields.io/badge/Terraform-IaC-7B42BC?style=for-the-badge&logo=terraform"/>
  <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes"/>
</p>

<p align="center">
A complete <strong>production-ready DevSecOps & GitOps pipeline</strong> demonstrating modern cloud-native practices on AWS.
</p>

---

## Ì∫Ä ArgoCD GitOps Deployment on AWS EKS

| Infrastructure | CI/CD Pipeline | GitOps |
|---------------|---------------|--------|
| VPC + Subnets | GitHub Actions | ArgoCD |
| EKS Cluster | Trivy + OWASP | Auto-Sync |
| ALB + ACM | SonarQube | Self-Healing |
| Autoscaling | ECR + S3 | Rollbacks |

---

## Ì≥ê Architecture Overview

<p align="center">
  <img src="images/Project-Architecture.png"/>
</p>

---

## Ì¥• CI/CD Workflow Pipeline

### 1Ô∏è‚É£ Developer Push

\`\`\`bash
git add .
git commit -m "feat: update application"
git push origin main
\`\`\`

### 2Ô∏è‚É£ GitHub Actions

- Pull base image
- Security scan (Trivy, OWASP)
- Code quality (SonarQube)
- Push image to Amazon ECR
- Update Kubernetes manifests (GitOps)

### 3Ô∏è‚É£ ArgoCD

- Detects manifest changes
- Auto-syncs to EKS
- Enables rollback & self-healing

---

## Ì≥∏ Implementation Evidence

### Terraform Infrastructure

<p align="center">
  <img src="images/screenshots/terraform-apply.jpg"/>
</p>

### Kubernetes Cluster

<p align="center">
  <img src="images/screenshots/kubectl-get-nodes.jpg"/>
  <img src="images/screenshots/kubectl-get-namespaces.jpg"/>
</p>

### Amazon ECR

<p align="center">
  <img src="images/screenshots/ecr-signin.jpg"/>
  <img src="images/screenshots/ecr-signup.jpg"/>
</p>

### ArgoCD

<p align="center">
  <img src="images/screenshots/argocd-ui.jpg"/>
</p>

### Autoscaling

<p align="center">
  <img src="images/screenshots/cluster-autoscaler.jpg"/>
</p>

### External Secrets

<p align="center">
  <img src="images/screenshots/external-secrets.jpg"/>
</p>

### Application Running

<p align="center">
  <img src="images/screenshots/website-working.jpg"/>
</p>

---

## Ìª†Ô∏è Technology Stack

| Category   | Tools                        |
|------------|------------------------------|
| Cloud      | AWS (EKS, VPC, ECR, ACM, S3) |
| IaC        | Terraform                    |
| CI/CD      | GitHub Actions               |
| GitOps     | ArgoCD                       |
| Security   | Trivy, OWASP, SonarQube      |
| Monitoring | Prometheus, Grafana          |
| Alerts     | Alertmanager, Slack          |

---

## Ì≥ä Project Outcomes

- ‚úÖ End-to-End automated DevSecOps pipeline
- ‚úÖ GitOps-based continuous delivery
- ‚úÖ Secure image scanning & quality gates
- ‚úÖ Autoscaling & self-healing workloads
- ‚úÖ Full observability & alerting

---

## Ìæì Conclusion

This project demonstrates a **real-world production DevSecOps architecture**, integrating CI/CD, GitOps, security, and observability on AWS EKS.

**Workflow:**

\`\`\`
Code ‚Üí Build ‚Üí Scan ‚Üí Push ‚Üí GitOps ‚Üí ArgoCD ‚Üí AWS EKS
\`\`\`

---

<p align="center">

### Ìºü Star this repository if you found it useful!

**Sohila Hosam**  
Ì¥ó [https://github.com/sohila12](https://github.com/sohila12)

</p>

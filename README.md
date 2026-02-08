<p align="center">
  <img src="src/static/logos/nti-logo.png" height="120"/>
</p>

<h1 align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=35&duration=3000&pause=1000&color=00D9FF&center=true&vCenter=true&width=900&lines=End-to-End+Netflix+Clone+DevSecOps+Project;AWS+EKS+%2B+Terraform+%2B+GitHub+Actions;GitOps+Delivery+with+ArgoCD;Observability+%7C+Prometheus+%2B+Grafana+%2B+Alertmanager" alt="Typing SVG" />
</h1>

<h3 align="center" style="color: #64B5F6;">
  Ìæì DevOps Graduation Project ‚Äî National Telecommunication Institute (NTI)
</h3>

<p align="center">
  <img src="https://img.shields.io/badge/AWS-EKS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"/>
  <img src="https://img.shields.io/badge/Terraform-IaC-7B42BC?style=for-the-badge&logo=terraform&logoColor=white"/>
  <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white"/>
  <img src="https://img.shields.io/badge/ArgoCD-GitOps-EF7B4D?style=for-the-badge&logo=argo&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white"/>
  <img src="https://img.shields.io/badge/Amazon_ECR-Registry-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"/>
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

<p align="center" style="font-size: 1.12rem; line-height: 1.8; max-width: 900px; margin: 20px auto;">
  Ìæ¨ A complete <strong>DevSecOps + GitOps</strong> implementation for a Netflix-clone application on <strong>AWS EKS</strong>. <br/>
  ‚úÖ Every code change triggers <strong>Build ‚Üí Scan ‚Üí Push ‚Üí GitOps Update ‚Üí ArgoCD Sync ‚Üí Deploy</strong>. <br/>
  Ì≥à Full observability with <strong>Prometheus + Grafana</strong> and alerting via <strong>Alertmanager ‚Üí Slack</strong>.
</p>

---

## Ì∫Ä Project Summary

**End-to-End Netflix Clone DevOps Project | AWS, Kubernetes, Terraform, GitHub Actions, ArgoCD, Prometheus, Grafana**

- Built a production-ready DevSecOps pipeline for a Netflix-style app deployed on AWS EKS.
- Provisioned infrastructure using Terraform (VPC, Subnets, NAT/IGW, EKS, Node Groups).
- Integrated AWS Cognito for authentication.
- Automated CI with GitHub Actions: SonarQube, Trivy, OWASP Dependency-Check, image build/tag/push.
- Implemented GitOps CD using ArgoCD + ALB Ingress + TLS (ACM) + Route 53.
- Enabled autoscaling using HPA + Cluster Autoscaler.
- Enabled observability + alerting with Prometheus, Grafana, Alertmanager + Slack notifications.

---

## Ì≥ê Architecture Overview

<div align="center">
  <img src="images/architecture.png" alt="Architecture Diagram" width="920"/>
</div>

---

## Ì¥• CI/CD + GitOps Flow
```mermaid
graph LR
  A[Developer] -->|Push| B[GitHub]
  B -->|Trigger| C[GitHub Actions]
  C -->|Trivy + OWASP| D[Security Reports]
  C -->|SonarQube| E[Quality Gate]
  C -->|Push Image| F[Amazon ECR]
  C -->|Update Manifest| G[GitOps Branch]
  G --> B
  B -->|Watch| H[ArgoCD]
  H -->|Sync| I[AWS EKS]
  I -->|Metrics| J[Prometheus]
  J -->|Dashboards| K[Grafana]
  J -->|Alerts| L[Alertmanager ‚Üí Slack]
```

---

## Ì∑± Evidence Screenshots

### ‚úÖ Terraform Apply
<div align="center">
  <img src="images/screenshots/terraform-apply.jpg" width="920" />
</div>

### ‚úÖ Kubernetes: Namespaces
<div align="center">
  <img src="images/screenshots/kubectl-get-namespaces.jpg" width="920" />
</div>

### ‚úÖ Kubernetes: Nodes
<div align="center">
  <img src="images/screenshots/kubectl-get-nodes.jpg" width="920" />
</div>

### ‚úÖ GitOps / ArgoCD UI
<div align="center">
  <img src="images/screenshots/argocd-ui.jpg" width="920" />
</div>

### ‚úÖ Netflix Namespace Workloads + HPA
<div align="center">
  <img src="images/screenshots/kubectl-get-all-netflix.jpg" width="920" />
</div>

### ‚úÖ Cluster Autoscaler (kube-system)
<div align="center">
  <img src="images/screenshots/cluster-autoscaler.jpg" width="920" />
</div>

### ‚úÖ External Secrets (namespace: external-secrets)
<div align="center">
  <img src="images/screenshots/external-secrets.jpg" width="920" />
</div>

### ‚úÖ ACM Certificate (TLS)
<div align="center">
  <img src="images/screenshots/acm-certificate.jpg" width="920" />
</div>

### ‚úÖ Website Running
<div align="center">
  <img src="images/screenshots/website-working.jpg" width="920" />
</div>

---

## Ì¥ê Secrets & Security Notes

‚ö†Ô∏è Do not commit secrets. Use GitHub Secrets / External Secrets.

<div align="center">
  <img src="images/screenshots/secrets-api-key-url.jpg" width="920" />
</div>

---

## Ì∑∞ Repo Structure (Key Paths)
```
.github/workflows/devsecops-full-pipeline.yml   # Full pipeline workflow
Source-Code/Application-Code/                  # App source code
Kubernetes/                                    # K8s manifests
terraform/                                     # Terraform IaC
images/                                        # README images
```

---

## ‚≠ê Contact

**Name:** Sohila Hosam  
**GitHub:** https://github.com/sohila12

<div align="center">
  <img src="https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Maintained-Yes-green?style=for-the-badge"/>
</div>

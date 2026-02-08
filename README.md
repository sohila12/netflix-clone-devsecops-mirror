<p align="center">
  <img src="images/logos/nti-logo.png" height="120"/>
</p>

<h1 align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=34&duration=3000&pause=1000&color=00D9FF&center=true&vCenter=true&width=950&lines=End-to-End+Netflix+Clone+DevSecOps+Project;GitOps+%2B+AWS+EKS+%2B+ArgoCD;CI%2FCD+Pipeline+Automation;Observability+%7C+Prometheus+%2B+Grafana+%2B+Alertmanager" />
</h1>

<h3 align="center">
Ìæì DevOps Graduation Project ‚Äî <strong>National Telecommunication Institute (NTI)</strong>
</h3>

---

## Ì∫Ä Project Overview

This project demonstrates a **production-grade End-to-End DevSecOps + GitOps pipeline**
for a Netflix-like application deployed on **AWS EKS**.

The solution integrates CI/CD automation, security scanning, GitOps delivery,
auto-scaling, and full observability.

---

## Ì≥ê Architecture Overview

<p align="center">
  <img src="images/Project-Architecture.png"/>
</p>

---

## ÌøóÔ∏è Step 1: Infrastructure Provisioning (Terraform)

\`\`\`bash
cd terraform
terraform init
terraform plan
terraform apply -auto-approve
\`\`\`

### ÌæØ What Gets Created

- VPC with public & private subnets
- Internet Gateway & NAT Gateway
- EKS cluster with managed node groups
- IAM roles & security groups
- ALB Ingress infrastructure

<p align="center">
  <img src="images/terraform-apply.jpg"/>
</p>

---

## ‚öôÔ∏è Step 2: Configure kubectl for EKS

\`\`\`bash
aws eks update-kubeconfig --name my-eks --region eu-central-1
kubectl get nodes
kubectl get ns -A
\`\`\`

<p align="center">
  <img src="images/get-nodes.jpg"/>
</p>
<p align="center">
  <img src="images/get-namespaces-A.jpg"/>
</p>

---

## Ì∞≥ Step 3: Build Docker Image Locally

\`\`\`bash
docker build -t netflix-clone:local .
docker run -d -p 8080:80 netflix-clone:local
curl http://localhost:8080
\`\`\`

---

## Ì≥¶ Step 4: Push Image to Amazon ECR

\`\`\`bash
aws ecr get-login-password --region eu-central-1 \
  | docker login --username AWS --password-stdin 734468801857.dkr.ecr.eu-central-1.amazonaws.com

docker tag netflix-clone:local \
  734468801857.dkr.ecr.eu-central-1.amazonaws.com/nti_project:latest

docker push 734468801857.dkr.ecr.eu-central-1.amazonaws.com/nti_project:latest
\`\`\`

<p align="center">
  <img src="images/ecr-signin.jpg"/>
</p>
<p align="center">
  <img src="images/ecr-signup.jpg"/>
</p>

---

## Ì¥Ñ Step 5: CI/CD + GitOps Automation

Once the image exists in Amazon ECR, the pipeline automatically performs:

**Scan ‚Üí Tag ‚Üí Push ‚Üí Update Manifest ‚Üí ArgoCD Sync ‚Üí Deploy**

---

## Ì¥Ñ Step 6: Install & Configure ArgoCD

\`\`\`bash
kubectl create namespace argocd
kubectl apply -n argocd \
  -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
kubectl port-forward svc/argocd-server -n argocd 8080:443
\`\`\`

<p align="center">
  <img src="images/argocd-ui.jpg"/>
</p>

---

## Ì≥¶ Step 7: Create ArgoCD Application

\`\`\`bash
kubectl apply -f argocd/application.yaml
\`\`\`

ArgoCD continuously watches the Git repository and synchronizes changes automatically.

---

## Ì¥Ñ Step 8: Trigger Auto Deployment

\`\`\`bash
echo "trigger pipeline" >> README.md
git add README.md
git commit -m "chore: trigger deployment"
git push origin main
\`\`\`

**CI ‚Üí Scan ‚Üí Push to ECR ‚Üí Update Manifest ‚Üí ArgoCD Sync ‚Üí Deploy**

---

## Ì≥ä Step 9: Verify Deployment

\`\`\`bash
kubectl get all -n netflix
kubectl get hpa -n netflix
\`\`\`

<p align="center">
  <img src="images/kubectl-get-all-netflix.jpg"/>
</p>

---

## Ì∫Ä Step 10: Verify Cluster Autoscaler

\`\`\`bash
kubectl get all -A | grep cluster-autoscaler
\`\`\`

<p align="center">
  <img src="images/cluster-autoscaler.jpg"/>
</p>

---

## Ì¥ë Step 11: Verify External Secrets

\`\`\`bash
kubectl get all -n external-secrets
\`\`\`

<p align="center">
  <img src="images/external-secrets.jpg"/>
</p>

---

## Ì¥ê Step 12: TLS Certificate (ACM)

<p align="center">
  <img src="images/acm-certificate.jpg"/>
</p>

---

## Ìºê Step 13: Application Running

<p align="center">
  <img src="images/app-running.jpg"/>
</p>

---

## Ì≥ä Project Outcomes

- End-to-End DevSecOps & GitOps pipeline
- Secure image lifecycle using Amazon ECR
- Automated CI/CD using GitHub Actions
- GitOps-based deployment with ArgoCD
- Auto-scaling with HPA & Cluster Autoscaler
- Full observability and monitoring

---

## Ì¥ù Acknowledgments

**National Telecommunication Institute (NTI)**  
For professional DevOps training and cloud-native guidance.

---

<div align="center">

‚≠ê **Star this repository if you found it helpful!**

**Sohila Hosam**  
GitHub: https://github.com/sohila12

</div>

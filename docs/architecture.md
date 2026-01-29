# Architecture (Image Mirror - Phase 1)

Goal:
- Mirror an existing Docker image:
  Source: mostafagheta/netflix-clone:latest
  Destination: sohila11/netflix-clone

Pipeline (GitHub Actions):
1) Pull source image
2) Tag it with:
   - latest
   - sha-<7>
   - YYYYMMDD
3) Trivy scan (fail on HIGH/CRITICAL)
4) Push to DockerHub

Next phases can add:
- Build from Application-Code/
- Deploy to Kubernetes
- GitOps with ArgoCD

# SonarCloud Note

If SonarCloud scan fails with:
"You are running CI analysis while Automatic Analysis is enabled"

Fix:
SonarCloud Project -> Administration -> Analysis Method -> Disable "Automatic Analysis"
Keep GitHub Actions (CI-based analysis) enabled.

# ARISTOTLE: Ethical Readiness Assessment Tool

[![WHO Aligned](https://img.shields.io/badge/WHO-Aligned-blue)](https://www.who.int/publications/i/item/9789240029200)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://www.javascript.com/)

**WHO-Aligned Ethical Readiness Assessment Framework for Healthcare AI Systems**

ARISTOTLE translates the World Health Organization's ethical principles into a practical, measurable assessment tool for evaluating organizational readiness to deploy AI systems responsibly in healthcare settings.

---

## 🎯 Why ARISTOTLE?

Healthcare institutions are rapidly adopting AI, but most lack structured frameworks to evaluate their ethical readiness. ARISTOTLE bridges the gap between WHO's theoretical guidance and practical implementation by providing:

- **Role-specific assessments** tailored to 4 key stakeholder groups
- **60 validated questions** mapped directly to WHO's 6 ethical principles
- **Dynamic recommendations** based on readiness scores and specific gaps
- **Automated PDF reports** for institutional documentation
- **Free & accessible** web-based tool requiring no installation

---

## 📋 Features

✅ **4 Role-Specific Assessments**
- AI Developers & Engineers
- Healthcare Clinicians & Providers
- Hospital Administrators & Leadership
- Policy Makers & Regulators

✅ **60 WHO-Aligned Questions** (15 per role)

✅ **6 Ethical Principles Coverage**
- Protecting Human Autonomy
- Promoting Human Well-being, Safety & Public Interest
- Ensuring Transparency, Explainability & Intelligibility
- Fostering Responsibility & Accountability
- Ensuring Inclusiveness & Equity
- Promoting Responsive & Sustainable AI

✅ **Comprehensive Reporting**
- Principle-level scoring breakdown
- Readiness classification (Low/Moderate/High)
- Actionable recommendations with WHO module references
- Downloadable PDF documentation

✅ **User-Friendly Interface**
- Responsive design (desktop & mobile)
- Progress tracking
- Clear 0-2 scoring scale
- No login or data storage required

---

## 🏥 Who Should Use ARISTOTLE?

| User Type | Use Case |
|-----------|----------|
| **Healthcare Institutions** | Assess readiness before deploying AI diagnostic or treatment tools |
| **AI Developers** | Evaluate ethical design practices and identify improvement areas |
| **Policymakers** | Benchmark institutional compliance with WHO ethical standards |
| **Researchers** | Study ethical readiness patterns across healthcare organizations |
| **Ethics Committees** | Structure AI ethics reviews with standardized assessments |

---

## 🌍 Theoretical Foundation

ARISTOTLE is built upon the **World Health Organization's official guidance on AI ethics in healthcare**, operationalized through formal WHO Academy training.

### WHO Framework
The tool implements WHO's **6 Ethical Principles for AI in Health** as outlined in:
- **WHO Guidance Document**: *Ethics and Governance of Artificial Intelligence for Health* (June 2021)
- **WHO Academy Course**: *Ethics and Governance of Artificial Intelligence for Health* (11 modules, 3.5 hours)
- **Developer Certification**: Completed October 7, 2025 ([View Certificate](https://whoacademy.org/achievements/38f810ce-97b9-42d7-8a16-422906580a3b))

### WHO's 6 Ethical Principles (Implemented in ARISTOTLE)

1. **Protecting Human Autonomy** (Module 1)  
   Ensuring patients and providers retain decision-making authority when AI is involved

2. **Promoting Human Well-being, Safety & Public Interest** (Module 2)  
   Prioritizing patient safety, clinical validation, and societal benefit over commercial interests

3. **Ensuring Transparency, Explainability & Intelligibility** (Module 3)  
   Making AI systems interpretable and their reasoning accessible to users

4. **Fostering Responsibility & Accountability** (Module 4)  
   Establishing clear ownership and liability structures for AI outcomes

5. **Ensuring Inclusiveness & Equity** (Modules 4 & 5)  
   Addressing bias, fairness, and accessibility across diverse populations

6. **Promoting Responsive & Sustainable AI** (Module 6)  
   Ensuring long-term monitoring, adaptation, and environmental/resource considerations

**Cross-cutting Theme**: Privacy and Data Protection (Module 7)

Each role-specific question in ARISTOTLE maps directly to these WHO modules and principles, ensuring global health ethics standards alignment.

---

## 🚀 Quick Start

### Option 1: Run Locally
1. Clone this repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/aristotle-ethics-tool.git
   ```
2. Open `index.html` in your browser
3. Navigate to **Assessment** → Select your role → Begin



---

## 📖 How to Use

### 1. Select Your Role
Choose the stakeholder role that best matches your position:
- **Developer**: AI/ML engineers, data scientists, software developers
- **Clinician**: Physicians, nurses, radiologists, pathologists
- **Administrator**: Hospital executives, department heads, compliance officers
- **Policy Maker**: Health regulators, government officials, ethics board members

### 2. Answer 15 Questions
Rate your organization's practices on a 0-2 scale:
- **0 = Not Implemented** - Practice does not exist
- **1 = Partially Implemented** - Practice exists but is inconsistent or incomplete
- **2 = Fully Implemented** - Practice is systematically implemented and documented

### 3. Review Results
- **Overall Score**: Percentage-based readiness level
- **Principle Breakdown**: Performance across each of WHO's 6 principles
- **Readiness Classification**:
  - 🔴 **Low (0-49%)**: Immediate action needed
  - 🟡 **Moderate (50-79%)**: Practices need strengthening
  - 🟢 **High (80-100%)**: Strong WHO alignment

### 4. Get Recommendations
- Tiered action items based on your score
- Specific WHO module references for further learning
- Prioritized steps to improve ethical readiness

### 5. Download Report
Click **"Generate PDF Report"** to save your assessment for:
- Institutional documentation
- Ethics committee review
- Grant applications
- Regulatory submissions
- Continuous improvement tracking

---

## 📁 Project Structure

```
aristotle-ethics-tool/
├── index.html              # Homepage with tool introduction
├── about.html              # WHO principles overview & methodology
├── assessment.html         # Assessment interface
├── contact.html            # Developer contact information
├── report.html             # Sample reports & documentation
├── style.css               # Responsive styling
├── assessment.js           # Core application logic & PDF generation
├── roles.js                # 60 role-specific question sets
├── recommendations.js      # WHO-based recommendation engine (54KB)
├── Headings.jpg            # ARISTOTLE logo
├── small.jpg               # Banner image
├── image.jpg               # About page visual
└── README.md               # This file
```

---

## 🛠️ Technology Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | HTML5, CSS3 (Responsive Design) |
| **Logic** | JavaScript (ES6 Modules) |
| **PDF Generation** | jsPDF library |
| **Hosting** | Static site (no backend required) |
| **Data Storage** | None (client-side only, privacy-preserving) |

**Why These Choices?**
- ✅ **No server required** → Maximum accessibility, even in low-resource settings
- ✅ **Privacy-first** → No data collection, user information never leaves their device
- ✅ **Open source** → Full transparency, auditable code
- ✅ **Lightweight** → Fast loading, works on low-bandwidth connections

---

## 📊 Scoring Methodology

| Score Range | Classification | Interpretation | Recommended Action |
|-------------|----------------|----------------|-------------------|
| **0-49%** | 🔴 Low Readiness | Critical gaps in ethical infrastructure | Immediate systematic review needed |
| **50-79%** | 🟡 Moderate Readiness | Foundation exists but needs strengthening | Address priority gaps identified in report |
| **80-100%** | 🟢 High Readiness | Strong alignment with WHO standards | Continue monitoring and refinement |

**Scoring is calculated per principle**, allowing users to identify specific areas of strength and weakness across WHO's ethical framework.

---

## 🌟 What Makes ARISTOTLE Unique?

### Compared to Existing Tools

| Feature | ARISTOTLE | CARE-AI | FUTURE-AI | Generic Readiness Tools |
|---------|-----------|---------|-----------|------------------------|
| **WHO 6 Principles** | ✅ | ✅ | ❌ (different 6) | ❌ |
| **Focus** | Organizational readiness | Tool evaluation | Technical development | Infrastructure/compliance |
| **Role-specific** | ✅ (4 roles) | ❌ | ❌ | ❌ |
| **Automated reports** | ✅ | ⚠️ (in development) | ❌ | Some |
| **Free & open-source** | ✅ | ❌ | ❌ | ❌ |
| **Availability** | ✅ Now | ⚠️ Under development | ✅ Now | Varies |

**ARISTOTLE fills the gap** as the first publicly available, WHO-aligned organizational readiness tool with role-specific assessments.

---

## 👤 About the Developer

**Kaaviya Saraboji** is a Software Engineering graduate student at the University of Wisconsin-La Crosse who completed WHO Academy's certification course on AI ethics in healthcare (March-October 2025). 

ARISTOTLE represents applied research translating WHO's 11-module theoretical framework into a practical tool for real-world implementation.

**WHO Academy Certification**:
- Course: *Ethics and Governance of Artificial Intelligence for Health*
- Duration: 11 modules, 3.5 hours of structured learning (March-October 2025)
- Based on WHO's June 2021 official guidance document
- Certificate: [View Here](https://whoacademy.org/achievements/38f810ce-97b9-42d7-8a16-422906580a3b)

---

## 📚 References & Resources

### Primary Sources
1. World Health Organization. (2021). *Ethics and governance of artificial intelligence for health: WHO guidance.* Geneva: World Health Organization. [Available here](https://www.who.int/publications/i/item/9789240029200)

2. WHO Academy. (2025). *Ethics and Governance of Artificial Intelligence for Health* [Online course]. [Available here](https://whoacademy.org)

### Related Frameworks
- CARE-AI: Collaborative Assessment for Responsible and Ethical AI Implementation (under development)
- FUTURE-AI: Fairness, Universality, Traceability, Usability, Robustness, Explainability
- EU AI Act: European Union regulatory framework for high-risk AI systems

---

## 🤝 Contributing

ARISTOTLE is an open-source project welcoming contributions from:
- Healthcare professionals (clinical validation)
- AI ethics researchers (framework expansion)
- Software developers (feature enhancements)
- Translators (multi-language support)

**To contribute**:
1. Fork this repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📧 Contact

**Developer**: Kaaviya Saraboji  
**Email**: s.kaaviyashri@gmail.com  


For questions about WHO's ethical principles, visit: https://www.who.int/

---

## 📜 License

This project is licensed under the **MIT License** - see below for details.

### MIT License Summary
- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ⚠️ No warranty provided
- ⚠️ No liability accepted

Full license text available in [LICENSE](LICENSE) file.

---

## ⚠️ Disclaimer

**ARISTOTLE is an educational and assessment tool based on WHO's ethical guidance. It is:**
- ❌ **Not affiliated with or endorsed by WHO**
- ❌ **Not a substitute for professional ethics review**
- ❌ **Not a certification or accreditation tool**
- ❌ **Not a replacement for legal/regulatory compliance analysis**

**Users should**:
- ✅ Treat results as a starting point for deeper ethical review
- ✅ Consult institutional ethics committees for high-stakes decisions
- ✅ Combine with other assessment frameworks for comprehensive evaluation
- ✅ Seek legal counsel for regulatory compliance questions

This tool provides educational guidance based on WHO principles but does not constitute professional advice.

---

## 🎓 Citation

If you use ARISTOTLE in your research or institutional work, please cite:

```
Saraboji, K. (2025). ARISTOTLE: Ethical Readiness Assessment Tool for Healthcare AI Systems. 
Based on WHO's Ethics and Governance of Artificial Intelligence for Health (2021). 
[Software]. Available: https://github.com/YOUR_USERNAME/aristotle-ethics-tool
```

---

## 🚧 Roadmap

### Planned Features
- [ ] Multi-language support (Spanish, French, Arabic, Chinese)
- [ ] Longitudinal tracking (compare assessments over time)
- [ ] Institutional dashboard (aggregate multiple user assessments)
- [ ] API for integration with EHR/compliance systems
- [ ] Mobile app version
- [ ] Additional role types (patients, data scientists, legal teams)

### Research Directions
- Validation studies with healthcare institutions
- Benchmarking data across countries and institution types
- Integration with existing ethics review processes
- Extension to non-healthcare AI applications

---

## 🙏 Acknowledgments

- **World Health Organization** for publishing comprehensive ethical guidance
- **WHO Academy** for providing structured training on AI ethics
- **Global AI ethics community** for ongoing dialogue and framework development
- **Open-source contributors** who helped refine this tool

---

## 📈 Version History

**v1.0.0** (October 2025)
- Initial release
- 4 role-specific assessments
- 60 WHO-aligned questions
- PDF report generation
- Responsive web interface

---

**© 2025 ARISTOTLE Initiative**  
*Operationalizing WHO's AI Ethics Guidance for Global Healthcare*

---

**Built with ❤️ for ethical AI in healthcare**
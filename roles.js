// roles.js
// ARISTOTLE - Ethical Readiness Tool for Healthcare AI Systems
// WHO 6 Principles-Based Question Sets for All Stakeholder Roles

const roleQuestions = {
  developer: [
    // PRINCIPLE 1: Protecting Human Autonomy (WHO Module 1)
    "Are algorithmic decisions explainable to non-technical stakeholders (clinicians, patients, administrators)?",
    "Can the AI system's outputs be audited to show which data and rules influenced each decision?",
    
    // PRINCIPLE 2: Promoting Human Well-being and Safety (WHO Module 2)
    "Is there a documented process to investigate adverse outcomes within defined timeframes with root cause analysis?",
    "Has the AI system been validated through clinical trials or real-world testing before deployment?",
    
    // PRINCIPLE 3: Ensuring Transparency and Explainability (WHO Module 3)
    "Is comprehensive model documentation (version, datasets, parameters, limitations) maintained and accessible?",
    "Are transparency principles followed with model performance and limitations publicly documented while protecting sensitive data?",
    
    // PRINCIPLE 4: Fostering Responsibility and Accountability (WHO Module 6)
    "Are specific individuals or teams designated as accountable for AI errors with documented escalation procedures?",
    "Are ethical reviews by multidisciplinary teams required before AI system release?",
    "Is there a scheduled review process (quarterly or after major updates) to reassess ethical compliance and performance?",
    
    // PRINCIPLE 5: Ensuring Inclusiveness and Equity (WHO Module 4 & 5)
    "Has dataset bias and underrepresentation been systematically assessed across demographic groups?",
    "Do testing teams include multidisciplinary experts including ethicists, clinicians, and community representatives?",
    "Is fairness evaluation automated and updated periodically post-deployment?",
    
    // PRINCIPLE 6: Promoting Sustainability (WHO Module 6)
    "Are energy consumption and carbon footprint measured and optimized during model training and deployment?",
    
    // CROSS-CUTTING: Privacy & Data Protection (WHO Module 7)
    "Are datasets collected with explicit informed consent with options for withdrawal?",
    "Are data privacy safeguards (encryption, anonymization, access controls) built into the system architecture?"
  ],

  clinician: [
    // PRINCIPLE 1: Protecting Human Autonomy (WHO Module 1)
    "Do patients know when AI is used in their clinical decisions with clear explanations?",
    "Do clinicians retain final authority to override AI recommendations in all circumstances?",
    "Can patients opt out of AI-assisted care without penalty or reduced quality of care?",
    
    // PRINCIPLE 2: Promoting Human Well-being and Safety (WHO Module 2)
    "Has the AI system been validated for its intended clinical purpose and patient population?",
    "Is AI system performance reviewed regularly (monthly or quarterly) against clinical safety and effectiveness benchmarks?",
    "Is there clear accountability when AI-assisted decisions lead to patient harm or adverse outcomes?",
    
    // PRINCIPLE 3: Ensuring Transparency and Explainability (WHO Module 3)
    "Are explainability reports accessible to clinical staff in understandable formats?",
    "Are patients informed clearly about how AI was used, its limitations, and alternative options?",
    
    // PRINCIPLE 4: Fostering Responsibility and Accountability (WHO Module 6)
    "Are AI recommendations reviewed by peers or ethics committees before implementation in complex cases?",
    "Are care decisions involving AI properly documented in medical records?",
    "Are AI systems free from commercial bias with transparent disclosure of funding sources and conflicts of interest?",
    
    // PRINCIPLE 5: Ensuring Inclusiveness and Equity (WHO Module 4 & 5)
    "Has demographic bias been assessed in the AI system's outputs across different patient groups (age, gender, ethnicity, socioeconomic status)?",
    "Do clinical staff receive ongoing training (at least annually) on ethical AI use and recognizing algorithmic bias?",
    
    // CROSS-CUTTING: Privacy & Data Protection (WHO Module 7)
    "Are privacy and consent policies actively safeguarded during patient care with AI systems?"
  ],

  administrator: [
    // PRINCIPLE 1: Protecting Human Autonomy (WHO Module 1)
    "Do institutional policies require disclosure of AI use to patients before deployment?",
    "Can patients access their data and AI-generated outputs upon request?",
    
    // PRINCIPLE 2: Promoting Human Well-being and Safety (WHO Module 2)
    "Are AI-related harms acknowledged and mitigated proactively with incident response plans?",
    "Is a disaster-recovery or fail-safe plan implemented for AI system failures?",
    
    // PRINCIPLE 3: Ensuring Transparency and Explainability (WHO Module 3)
    "Are AI deployment transparency reports publicly accessible to patients and stakeholders?",
    "Are AI performance results communicated transparently across departments and to the public?",
    
    // PRINCIPLE 4: Fostering Responsibility and Accountability (WHO Module 6)
    "Is an institutional AI ethics committee or oversight board established and actively reviewing AI deployments?",
    "Are regular ethics and data-security audits (at least annually) mandated by institutional policy?",
    "Does procurement include ethical compliance verification aligned with WHO frameworks?",
    "Are operational policies explicitly aligned with WHO ethical frameworks?",
    "Are vendor standards verified for ethical accountability before contracts are signed?",
    
    // PRINCIPLE 5: Ensuring Inclusiveness and Equity (WHO Module 4 & 5)
    "Does decision governance include patient, community, or advocacy group input?",
    "Is mandatory training on AI governance and ethical oversight provided to relevant staff (administrators, IT, clinicians)?",
    
    // PRINCIPLE 6: Promoting Sustainability (WHO Module 6)
    "Are social and environmental impacts of AI systems evaluated annually?",
    
    // CROSS-CUTTING: Privacy & Data Protection (WHO Module 7)
    "Are data storage and sharing agreements compliant with regional regulations (HIPAA, GDPR, etc.)?"
  ],

  policymaker: [
    // PRINCIPLE 1: Protecting Human Autonomy (WHO Module 1)
    "Do laws protect citizens' right to know when AI influences decisions about their health?",
    
    // PRINCIPLE 2: Promoting Human Well-being and Safety (WHO Module 2)
    "Are ethical impact assessments required before AI adoption in healthcare settings?",
    "Is redress or compensation for AI-related harm established in law?",
    
    // PRINCIPLE 3: Ensuring Transparency and Explainability (WHO Module 3)
    "Does policy enforce transparency requirements for AI algorithms used in healthcare?",
    "Do laws ensure open public evaluation of health AI systems?",
    
    // PRINCIPLE 4: Fostering Responsibility and Accountability (WHO Module 6)
    "Do national guidelines align with international frameworks (WHO, UNESCO, OECD)?",
    "Is algorithmic accountability attached to legal compliance with penalties for violations?",
    "Is a national ethics oversight agency empowered to review and regulate AI in healthcare?",
    "Do funding programs require demonstrated ethical compliance as a condition for approval or continued support?",
    "Do governments conduct regular (biannual or annual) ethics reviews of deployed AI systems to ensure ongoing compliance?",
    "Is WHO ethical guidance explicitly used as a policy benchmark?",
    
    // PRINCIPLE 5: Ensuring Inclusiveness and Equity (WHO Module 4 & 5)
    "Does regulation require accessibility for vulnerable groups (elderly, disabled, low-income, rural populations)?",
    "Is stakeholder participation (patients, clinicians, communities) embedded in AI governance processes?",
    "Are community data rights and indigenous data sovereignty recognized in governance documents?",
    
    // PRINCIPLE 6: Promoting Sustainability (WHO Module 6)
    "Are sustainability metrics (environmental, economic, social) integrated into AI policies?",
    
    // CROSS-CUTTING: Privacy & Data Protection (WHO Module 7)
    "Are cross-border data transfers regulated ethically with international cooperation agreements?"
  ]
};

// Export for ES modules or browsers
if (typeof module !== "undefined" && module.exports) {
  module.exports = roleQuestions;
} else {
  window.roleQuestions = roleQuestions;
}
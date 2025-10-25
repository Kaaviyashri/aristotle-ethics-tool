// recommendations.js
// WHO-based detailed recommendations for ARISTOTLE Ethical Readiness Tool
// Aligned with WHO's 6 Ethical Principles for AI in Health

const recommendations = {
  developer: {
    autonomy: {
      low: {
        summary: "AI decision-making processes are opaque to non-technical stakeholders, limiting their ability to exercise informed oversight.",
        actions: [
          "Develop model cards documenting inputs, logic, limitations, and validation datasets in plain language (WHO Module 3 requirement).",
          "Implement visual explainability dashboards showing feature importance and decision pathways for clinical users.",
          "Create audit logs that trace each AI decision back to specific data inputs and algorithmic rules within 48 hours of request."
        ],
        impact: "Enables informed oversight by clinicians and patients, strengthening autonomy and trust in AI systems per WHO Principle 1."
      },
      medium: {
        summary: "Basic explainability exists but lacks standardization and accessibility across different user groups.",
        actions: [
          "Standardize documentation templates across all AI projects using WHO Module 3 transparency checklist.",
          "Conduct quarterly explainability audits with non-technical stakeholders to verify understandability.",
          "Establish a dedicated explainability team responsible for translating technical outputs into stakeholder-friendly formats."
        ],
        impact: "Improves consistency in transparency practices, ensuring all stakeholders can exercise meaningful oversight per WHO guidance."
      },
      high: {
        summary: "Strong explainability practices are embedded in development workflows.",
        actions: [
          "Maintain annual third-party explainability assessments to verify compliance with evolving WHO standards.",
          "Publish explainability reports in peer-reviewed journals to contribute to global AI ethics knowledge base.",
          "Develop industry-leading explainability tools that can be shared as open-source resources."
        ],
        impact: "Sustains ethical leadership and contributes to advancing global standards for AI transparency in healthcare."
      }
    },

    safety: {
      low: {
        summary: "Insufficient safety validation and monitoring systems expose patients to potential harm from AI errors.",
        actions: [
          "Implement mandatory human-in-the-loop validation for all AI outputs before clinical deployment (WHO Module 2 requirement).",
          "Establish incident response protocols with 24-hour acknowledgment and 72-hour investigation timelines for adverse events.",
          "Conduct failure mode and effects analysis (FMEA) to identify and mitigate risks before deployment.",
          "Create automated monitoring dashboards tracking AI performance metrics against safety thresholds in real-time."
        ],
        impact: "Significantly reduces risk of patient harm and ensures rapid response to safety incidents per WHO Module 2 safety standards."
      },
      medium: {
        summary: "Basic safety measures exist but lack comprehensive post-deployment monitoring and rapid response capabilities.",
        actions: [
          "Implement continuous performance monitoring with automated alerts when accuracy drops below 85% threshold.",
          "Establish quarterly safety review meetings with clinical partners to assess real-world performance.",
          "Develop rollback procedures that can deactivate underperforming AI systems within 4 hours of detection."
        ],
        impact: "Strengthens ongoing safety assurance and enables proactive risk mitigation aligned with WHO Module 2."
      },
      high: {
        summary: "Comprehensive safety management systems are operational with proactive monitoring.",
        actions: [
          "Maintain real-time safety dashboards accessible to all stakeholders with predictive analytics for early warning signs.",
          "Conduct annual safety certifications through independent third-party auditors.",
          "Contribute safety data to WHO global AI safety registry (when established) to support worldwide learning."
        ],
        impact: "Achieves gold-standard safety practices that protect patients and inform global AI safety standards."
      }
    },

    transparency: {
      low: {
        summary: "AI model documentation is incomplete or inaccessible, preventing proper governance and audit.",
        actions: [
          "Create comprehensive model registries documenting all AI systems with version history, datasets used, performance metrics, and known limitations (WHO Module 3).",
          "Implement automated documentation generation integrated into development pipelines within 6 months.",
          "Establish document retention policies ensuring 10-year availability of all AI system documentation.",
          "Assign documentation officers responsible for maintaining and updating records quarterly."
        ],
        impact: "Enables proper governance, audit, and accountability as required by WHO Module 3 transparency principles."
      },
      medium: {
        summary: "Documentation exists but lacks consistency and completeness across AI projects.",
        actions: [
          "Adopt IEEE or ISO AI documentation standards organization-wide within 3 months.",
          "Conduct monthly documentation audits with 95% completion targets.",
          "Integrate documentation requirements into project approval and release checklists."
        ],
        impact: "Standardizes transparency practices, improving auditability and stakeholder confidence per WHO guidance."
      },
      high: {
        summary: "Robust documentation and transparency practices are institutionalized.",
        actions: [
          "Publish annual transparency reports summarizing all AI systems, their performance, and ethical assessments.",
          "Participate in WHO transparency initiatives and open-source communities to share best practices.",
          "Maintain public-facing AI registries (with appropriate privacy protections) demonstrating organizational commitment to transparency."
        ],
        impact: "Establishes organizational leadership in AI transparency, contributing to global ethical AI standards."
      }
    },

    accountability: {
      low: {
        summary: "Accountability for AI outcomes is unclear, creating legal and ethical risks.",
        actions: [
          "Designate named AI accountability officers for each system with documented authority and responsibilities (WHO Module 6).",
          "Create accountability matrices mapping decisions, approvals, and escalation procedures for AI-related incidents.",
          "Establish AI ethics board with authority to halt or modify AI deployments that pose ethical risks within 2 weeks of issue identification.",
          "Implement quarterly accountability audits reviewing decision trails and incident responses."
        ],
        impact: "Clarifies responsibility chains, reduces legal risk, and strengthens ethical governance per WHO Module 6."
      },
      medium: {
        summary: "Basic accountability structures exist but lack enforcement mechanisms and clear escalation paths.",
        actions: [
          "Formalize accountability procedures in organizational policies with executive-level endorsement.",
          "Link accountability performance to staff evaluations and incentives.",
          "Conduct bi-annual accountability training for all AI team members.",
          "Establish external accountability reporting to regulatory bodies or WHO frameworks (when available)."
        ],
        impact: "Strengthens accountability culture and ensures consistent application of WHO Module 6 principles."
      },
      high: {
        summary: "Mature accountability framework with strong organizational commitment.",
        actions: [
          "Maintain continuous accountability monitoring with real-time dashboards visible to leadership.",
          "Publish annual accountability reports demonstrating compliance with WHO and regulatory standards.",
          "Participate in industry accountability benchmarking to drive continuous improvement.",
          "Contribute to development of international AI accountability standards."
        ],
        impact: "Achieves exemplary accountability practices that protect patients and serve as industry model."
      }
    },

    equity: {
      low: {
        summary: "AI systems have not been evaluated for bias and may perpetuate health inequities.",
        actions: [
          "Conduct comprehensive bias audits across age, gender, ethnicity, socioeconomic status, and geographic dimensions (WHO Module 4).",
          "Implement fairness metrics (demographic parity, equalized odds) in all AI evaluations with targets of <5% disparity.",
          "Diversify training datasets to include underrepresented populations, targeting minimum 15% representation for minority groups.",
          "Establish fairness review committees including community representatives within 3 months.",
          "Create bias incident reporting system with 48-hour response requirement."
        ],
        impact: "Reduces algorithmic discrimination and promotes health equity per WHO Module 4 justice principles."
      },
      medium: {
        summary: "Basic fairness testing exists but lacks continuous monitoring and inclusive development practices.",
        actions: [
          "Automate fairness monitoring with real-time alerts when performance disparities exceed 3% threshold.",
          "Expand testing teams to include representatives from affected communities and marginalized groups.",
          "Conduct quarterly fairness audits with results shared publicly to demonstrate commitment to equity.",
          "Implement targeted data collection strategies to address underrepresentation in training datasets."
        ],
        impact: "Sustains fairness through continuous monitoring and inclusive practices aligned with WHO equity goals."
      },
      high: {
        summary: "Comprehensive fairness practices with strong commitment to health equity.",
        actions: [
          "Publish annual equity reports with disaggregated performance data demonstrating fairness across populations.",
          "Establish partnerships with community organizations to ensure AI benefits reach underserved populations.",
          "Contribute to WHO fairness frameworks and global bias registries (when established).",
          "Invest in research addressing fairness challenges in low-resource settings."
        ],
        impact: "Leads industry in promoting health equity through AI, advancing WHO Module 4 justice principles globally."
      }
    },

    sustainability: {
      low: {
        summary: "Environmental and resource impacts of AI systems are not measured or managed.",
        actions: [
          "Implement carbon tracking tools measuring energy consumption during training and deployment (WHO Module 6).",
          "Set baseline measurements and targets for 20% reduction in computational energy use within 12 months.",
          "Adopt energy-efficient architectures (model pruning, quantization, federated learning) in all new projects.",
          "Select cloud providers with renewable energy commitments (>50% renewable sources).",
          "Establish sustainability officer role responsible for tracking and reporting environmental impacts quarterly."
        ],
        impact: "Reduces environmental footprint and demonstrates commitment to sustainable AI development per WHO Module 6."
      },
      medium: {
        summary: "Energy tracking exists but lacks optimization strategies and public reporting.",
        actions: [
          "Conduct energy audits of all AI systems with optimization recommendations within 6 months.",
          "Implement green AI practices (efficient training schedules, hardware optimization) achieving 30% energy reduction.",
          "Include sustainability metrics in project approval criteria requiring carbon impact assessments.",
          "Publish sustainability data in annual reports demonstrating continuous improvement."
        ],
        impact: "Operationalizes sustainability commitment with measurable improvements aligned with WHO environmental principles."
      },
      high: {
        summary: "Leading sustainability practices with strong environmental stewardship.",
        actions: [
          "Achieve carbon-neutral AI operations through renewable energy and offset programs.",
          "Publish annual sustainability reports with third-party verification of environmental claims.",
          "Contribute to WHO sustainability frameworks for AI in healthcare.",
          "Share green AI methods through open-source tools and academic publications."
        ],
        impact: "Establishes organizational leadership in sustainable AI, contributing to global environmental health goals."
      }
    }
  },

  clinician: {
    autonomy: {
      low: {
        summary: "Patients and clinicians lack awareness and control over AI use in clinical decisions, undermining autonomy.",
        actions: [
          "Implement mandatory patient notification protocols explaining AI use, limitations, and alternatives in plain language (WHO Module 1).",
          "Create opt-out procedures allowing patients to decline AI-assisted care without penalty, documented in EHR systems.",
          "Train all clinical staff on respecting patient autonomy in AI-assisted care within 60 days.",
          "Develop patient education materials in multiple languages and reading levels explaining AI systems used in the facility."
        ],
        impact: "Restores patient autonomy and informed consent rights as required by WHO Principle 1."
      },
      medium: {
        summary: "Basic autonomy protections exist but lack consistent implementation across clinical settings.",
        actions: [
          "Standardize patient consent forms including specific AI disclosure sections across all departments.",
          "Implement EHR flags indicating patients who have opted out of AI-assisted care.",
          "Conduct quarterly audits ensuring 100% compliance with autonomy protection protocols.",
          "Establish patient advocacy channels for autonomy concerns with 24-hour response times."
        ],
        impact: "Ensures consistent protection of patient autonomy across all clinical interactions per WHO guidance."
      },
      high: {
        summary: "Strong autonomy protections with patient-centered AI governance.",
        actions: [
          "Maintain patient advisory boards providing input on AI deployment decisions.",
          "Publish annual patient autonomy reports demonstrating compliance and addressing concerns.",
          "Develop innovative shared decision-making tools integrating AI transparency.",
          "Contribute to WHO best practices for patient autonomy in AI-assisted healthcare."
        ],
        impact: "Achieves exemplary patient autonomy protection, serving as model for healthcare AI ethics."
      }
    },

    safety: {
      low: {
        summary: "Insufficient clinical validation and safety monitoring expose patients to AI-related risks.",
        actions: [
          "Establish mandatory clinical validation protocols for all AI systems before deployment (WHO Module 2).",
          "Implement human oversight requirements ensuring clinicians review 100% of critical AI recommendations.",
          "Create adverse event reporting system specifically for AI-related incidents with 4-hour reporting requirement.",
          "Develop safety checklists for AI-assisted procedures used in all relevant clinical encounters.",
          "Conduct monthly safety audits reviewing AI performance against clinical benchmarks."
        ],
        impact: "Significantly improves patient safety by ensuring proper validation and oversight per WHO Module 2."
      },
      medium: {
        summary: "Basic safety practices exist but lack real-time monitoring and rapid response capabilities.",
        actions: [
          "Implement real-time AI safety monitoring dashboards accessible to clinical leadership.",
          "Establish AI safety committees conducting monthly performance reviews.",
          "Develop rapid deactivation protocols allowing AI systems to be disabled within 2 hours if safety concerns arise.",
          "Create safety feedback loops incorporating clinician and patient experiences into system improvements."
        ],
        impact: "Enhances proactive safety management and rapid response to emerging risks per WHO standards."
      },
      high: {
        summary: "Comprehensive safety systems with continuous monitoring and improvement.",
        actions: [
          "Maintain predictive safety analytics identifying potential issues before patient harm occurs.",
          "Conduct annual independent safety audits with public reporting of results.",
          "Establish institutional safety excellence programs sharing best practices across facilities.",
          "Contribute AI safety data to national registries supporting system-wide learning."
        ],
        impact: "Achieves gold-standard patient safety practices, protecting patients and advancing field knowledge."
      }
    },

    transparency: {
      low: {
        summary: "Clinicians and patients lack understanding of how AI systems reach decisions, limiting trust and oversight.",
        actions: [
          "Implement explainability interfaces in EHR systems showing key factors influencing AI recommendations (WHO Module 3).",
          "Develop clinician training programs on interpreting AI outputs, achieving 100% staff completion within 90 days.",
          "Create patient-facing explanation tools using visual aids and plain language.",
          "Establish transparency protocols requiring clinicians to explain AI's role in care decisions to every patient."
        ],
        impact: "Enables informed clinical decision-making and strengthens patient trust per WHO Module 3."
      },
      medium: {
        summary: "Basic explainability exists but lacks consistency and depth across clinical applications.",
        actions: [
          "Standardize AI explanation templates used across all clinical departments.",
          "Implement quarterly transparency audits assessing clinician and patient understanding.",
          "Develop advanced explainability features showing confidence levels, alternative diagnoses, and uncertainty ranges.",
          "Create transparency dashboards for clinical leadership monitoring explanation quality."
        ],
        impact: "Improves consistency and depth of AI transparency, supporting better clinical decisions per WHO standards."
      },
      high: {
        summary: "Exemplary transparency practices with clear communication to all stakeholders.",
        actions: [
          "Maintain public transparency reports detailing AI systems, performance, and safety records.",
          "Establish patient education centers providing in-depth AI literacy resources.",
          "Publish transparency research contributing to global understanding of AI explainability in healthcare.",
          "Participate in WHO transparency initiatives demonstrating institutional commitment."
        ],
        impact: "Sets industry standard for AI transparency, building trust and informing global best practices."
      }
    },

    accountability: {
      low: {
        summary: "Unclear accountability for AI-assisted decisions creates legal and ethical risks for clinicians and patients.",
        actions: [
          "Define institutional policies clarifying responsibility boundaries between clinicians, AI developers, and administrators (WHO Module 6).",
          "Designate clinical AI accountability officers overseeing ethical use in each department.",
          "Implement incident escalation protocols with clear timelines: 1 hour for critical incidents, 24 hours for non-critical.",
          "Create legal protection frameworks ensuring clinicians are not held liable for AI system failures outside their control.",
          "Establish ethics committees reviewing AI-related accountability issues monthly."
        ],
        impact: "Clarifies responsibility, protects clinicians, and ensures patient accountability per WHO Module 6."
      },
      medium: {
        summary: "Basic accountability structures exist but lack clear enforcement and communication.",
        actions: [
          "Formalize accountability procedures in clinical governance policies with leadership endorsement.",
          "Implement quarterly accountability training for all clinical staff using AI systems.",
          "Create accountability dashboards tracking incident response times and resolution outcomes.",
          "Establish external accountability reporting to medical boards and patient safety organizations."
        ],
        impact: "Strengthens accountability culture ensuring consistent ethical practice per WHO guidance."
      },
      high: {
        summary: "Strong accountability framework with transparent oversight and continuous improvement.",
        actions: [
          "Maintain public accountability reports detailing AI incidents, investigations, and corrective actions.",
          "Establish cross-institutional accountability networks sharing lessons learned.",
          "Participate in national accountability benchmarking initiatives.",
          "Contribute to WHO accountability frameworks for AI in clinical practice."
        ],
        impact: "Demonstrates accountability leadership, protecting patients and advancing professional standards."
      }
    },

    equity: {
      low: {
        summary: "AI systems may perform inequitably across patient populations, perpetuating health disparities.",
        actions: [
          "Conduct equity audits of all clinical AI systems assessing performance across demographic groups (WHO Module 4).",
          "Implement mandatory bias training for all clinical staff using AI, completing within 60 days.",
          "Establish equity monitoring protocols requiring monthly review of AI performance by patient demographics.",
          "Create patient advocacy channels for reporting suspected algorithmic bias with 48-hour response requirement.",
          "Develop targeted interventions addressing identified disparities within 90 days of detection."
        ],
        impact: "Reduces health disparities and promotes equitable care delivery per WHO Module 4 justice principles."
      },
      medium: {
        summary: "Basic equity awareness exists but lacks systematic monitoring and intervention.",
        actions: [
          "Implement automated equity dashboards tracking AI performance disparities in real-time.",
          "Establish equity committees including community representatives reviewing AI impacts quarterly.",
          "Develop culturally-adapted AI interfaces addressing linguistic and literacy barriers.",
          "Create equity improvement plans with measurable targets reducing disparities by 25% annually."
        ],
        impact: "Systematizes equity monitoring and improvement, advancing WHO goals for inclusive healthcare."
      },
      high: {
        summary: "Comprehensive equity practices with strong commitment to reducing health disparities.",
        actions: [
          "Publish annual equity reports with disaggregated AI performance data demonstrating fairness.",
          "Establish partnerships with underserved communities ensuring AI benefits reach vulnerable populations.",
          "Conduct research on AI equity in clinical practice, publishing findings to inform field.",
          "Contribute to WHO equity frameworks and global initiatives addressing algorithmic fairness in healthcare."
        ],
        impact: "Leads in promoting health equity through AI, serving as model for ethical clinical practice."
      }
    },

    sustainability: {
      low: {
        summary: "Clinical AI use lacks consideration of resource efficiency and long-term sustainability.",
        actions: [
          "Assess computational and energy costs of AI systems used in clinical settings (WHO Module 6).",
          "Implement resource efficiency measures prioritizing AI systems with favorable cost-benefit profiles.",
          "Develop sustainability criteria for clinical AI procurement decisions.",
          "Educate clinical staff on sustainable AI use practices."
        ],
        impact: "Promotes responsible resource use aligned with WHO sustainability principles."
      },
      medium: {
        summary: "Basic sustainability awareness exists but lacks systematic measurement and optimization.",
        actions: [
          "Track resource consumption of clinical AI systems with quarterly reporting.",
          "Implement efficiency optimization programs targeting 15% resource reduction annually.",
          "Include sustainability metrics in clinical AI performance evaluations.",
          "Establish sustainability champions promoting efficient AI use across departments."
        ],
        impact: "Operationalizes sustainability commitment with measurable improvements per WHO guidance."
      },
      high: {
        summary: "Strong sustainability practices with efficient resource use and long-term planning.",
        actions: [
          "Maintain comprehensive sustainability reporting demonstrating efficient AI use.",
          "Establish institutional sustainability leadership in healthcare AI.",
          "Contribute to WHO sustainability frameworks for clinical AI applications.",
          "Share sustainable AI practices through professional networks and publications."
        ],
        impact: "Demonstrates sustainability leadership, contributing to environmentally responsible healthcare."
      }
    }
  },

  administrator: {
    autonomy: {
      low: {
        summary: "Institutional policies inadequately protect patient autonomy in AI-assisted care.",
        actions: [
          "Develop comprehensive AI disclosure policies requiring patient notification before any AI use in care (WHO Module 1).",
          "Implement patient rights frameworks explicitly addressing AI, including opt-out provisions and information access.",
          "Train all staff on patient autonomy policies within 90 days, achieving 100% completion.",
          "Establish patient advocacy offices handling AI-related autonomy concerns with 24-hour response times.",
          "Create governance structures ensuring patient representation in AI deployment decisions."
        ],
        impact: "Protects patient autonomy rights systematically across institution per WHO Principle 1."
      },
      medium: {
        summary: "Basic autonomy policies exist but lack consistent enforcement and patient awareness.",
        actions: [
          "Standardize autonomy protection procedures across all departments with quarterly compliance audits.",
          "Implement patient communication campaigns explaining AI use and rights in multiple languages.",
          "Establish autonomy performance metrics tracked monthly and reported to leadership.",
          "Create patient advisory councils providing input on AI governance decisions."
        ],
        impact: "Strengthens autonomy protection through consistent implementation and patient engagement per WHO guidance."
      },
      high: {
        summary: "Strong autonomy protections with patient-centered governance.",
        actions: [
          "Maintain annual autonomy audits with external review ensuring WHO compliance.",
          "Publish patient rights reports demonstrating institutional commitment to autonomy.",
          "Establish innovation programs developing new approaches to patient-centered AI governance.",
          "Contribute to WHO best practices for institutional autonomy protection."
        ],
        impact: "Achieves exemplary autonomy protection, serving as model for healthcare institutions."
      }
    },

    safety: {
      low: {
        summary: "Inadequate institutional safety oversight exposes patients to AI-related risks.",
        actions: [
          "Establish institutional AI safety board with authority to approve, monitor, and halt AI deployments (WHO Module 2).",
          "Implement mandatory pre-deployment safety assessments for all AI systems with defined approval criteria.",
          "Develop comprehensive incident response plans with 2-hour acknowledgment and 48-hour investigation requirements.",
          "Create safety monitoring infrastructure tracking AI performance across institution in real-time.",
          "Require annual safety certifications for all deployed AI systems with third-party validation."
        ],
        impact: "Establishes robust safety governance protecting patients per WHO Module 2 requirements."
      },
      medium: {
        summary: "Basic safety structures exist but lack comprehensive monitoring and rapid response.",
        actions: [
          "Expand safety monitoring capabilities with predictive analytics identifying emerging risks.",
          "Implement quarterly safety reviews of all AI systems with public reporting of findings.",
          "Develop rapid deactivation protocols enabling system shutdown within 4 hours of safety concerns.",
          "Establish safety learning programs sharing incident lessons across institution."
        ],
        impact: "Enhances proactive safety management with continuous improvement per WHO standards."
      },
      high: {
        summary: "Exemplary safety governance with comprehensive oversight and continuous improvement.",
        actions: [
          "Maintain gold-standard safety management systems with real-time monitoring and predictive capabilities.",
          "Publish annual safety reports with external validation demonstrating WHO compliance.",
          "Establish safety research programs contributing to field knowledge.",
          "Participate in national safety networks sharing best practices and data."
        ],
        impact: "Achieves safety leadership protecting patients and advancing institutional excellence."
      }
    },

    transparency: {
      low: {
        summary: "Institutional AI use lacks transparency, undermining stakeholder trust and accountability.",
        actions: [
          "Create public AI registry documenting all systems, purposes, performance metrics, and limitations (WHO Module 3).",
          "Develop transparency reporting protocols requiring quarterly public updates on AI deployments.",
          "Implement open communication channels allowing stakeholders to request AI information with 5-day response requirement.",
          "Establish transparency officer role responsible for maintaining registries and managing disclosure requests.",
          "Create patient-facing transparency materials explaining institutional AI use in accessible formats."
        ],
        impact: "Builds stakeholder trust through systematic transparency per WHO Module 3 requirements."
      },
      medium: {
        summary: "Basic transparency exists but lacks depth and accessibility for diverse stakeholders.",
        actions: [
          "Enhance AI registries with detailed performance data, validation studies, and ethical assessments.",
          "Implement annual transparency reports with third-party verification of accuracy.",
          "Develop multi-channel transparency communication (website, town halls, printed materials) reaching diverse audiences.",
          "Create transparency dashboards accessible to patients, staff, and public showing real-time AI use data."
        ],
        impact: "Deepens transparency practices, improving stakeholder confidence per WHO guidance."
      },
      high: {
        summary: "Exemplary transparency with comprehensive public accountability.",
        actions: [
          "Maintain industry-leading transparency standards exceeding WHO requirements.",
          "Publish comprehensive annual AI ethics reports with independent auditing.",
          "Establish transparency innovation programs developing new disclosure methods.",
          "Contribute to WHO transparency frameworks and global best practice initiatives."
        ],
        impact: "Demonstrates transparency leadership, setting standards for healthcare institutions globally."
      }
    },

    accountability: {
      low: {
        summary: "Unclear accountability structures create governance gaps and liability risks.",
        actions: [
          "Establish institutional AI ethics board with defined authority over AI approvals, monitoring, and enforcement (WHO Module 6).",
          "Develop accountability frameworks mapping responsibilities from board level to individual AI systems.",
          "Implement mandatory ethics impact assessments before any AI deployment with board approval requirement.",
          "Create accountability documentation systems tracking decisions, approvals, and incident responses.",
          "Designate executive-level AI accountability officer reporting directly to board.",
          "Establish incident escalation procedures: 1 hour for critical, 4 hours for serious, 24 hours for moderate incidents."
        ],
        impact: "Creates clear accountability chains preventing governance failures per WHO Module 6."
      },
      medium: {
        summary: "Basic accountability structures exist but lack enforcement mechanisms and transparency.",
        actions: [
          "Strengthen ethics board authority with budget control and enforcement powers.",
          "Implement quarterly accountability audits reviewing governance effectiveness.",
          "Develop accountability performance metrics tracked at board level.",
          "Establish public accountability reporting demonstrating governance effectiveness.",
          "Create external accountability relationships with regulators and WHO frameworks."
        ],
        impact: "Operationalizes accountability through strong governance and transparency per WHO standards."
      },
      high: {
        summary: "Mature accountability governance with strong institutional commitment.",
        actions: [
          "Maintain exemplary accountability standards with continuous external review.",
          "Publish annual governance reports demonstrating WHO compliance and best practices.",
          "Establish institutional accountability research programs advancing field knowledge.",
          "Participate in international accountability networks contributing to global standards."
        ],
        impact: "Achieves accountability excellence, serving as model for institutional AI governance."
      }
    },

    equity: {
      low: {
        summary: "AI procurement and deployment lack equity considerations, risking health disparities.",
        actions: [
          "Establish equity requirements in all AI procurement with mandatory bias testing before purchase (WHO Module 4).",
          "Implement equity impact assessments for all AI deployments evaluating effects on vulnerable populations.",
          "Create equity monitoring programs tracking AI performance across patient demographics monthly.",
          "Develop equity targets requiring AI systems to perform within 5% accuracy across demographic groups.",
          "Establish community advisory boards including representatives from underserved populations.",
          "Require vendors to provide equity documentation and ongoing bias monitoring as contract conditions."
        ],
        impact: "Prevents algorithmic discrimination and promotes equitable care per WHO Module 4."
      },
      medium: {
        summary: "Basic equity considerations exist but lack systematic enforcement and monitoring.",
        actions: [
          "Expand equity monitoring with automated dashboards tracking disparities in real-time.",
          "Implement equity review committees conducting quarterly assessments of all AI systems.",
          "Develop equity improvement plans with measurable targets reducing disparities by 20% annually.",
          "Create equity accountability mechanisms linking performance to vendor contracts and internal evaluations."
        ],
        impact: "Systematizes equity assurance with measurable outcomes per WHO justice principles."
      },
      high: {
        summary: "Comprehensive equity practices with strong institutional commitment to fairness.",
        actions: [
          "Maintain industry-leading equity standards with annual external audits.",
          "Publish detailed equity reports with disaggregated data demonstrating fairness.",
          "Establish equity innovation programs developing new approaches to algorithmic fairness.",
          "Contribute to WHO equity frameworks and support underserved institutions implementing equity practices."
        ],
        impact: "Leads institutional equity practices, advancing health justice goals globally."
      }
    },

    sustainability: {
      low: {
        summary: "AI use lacks sustainability planning, creating resource inefficiency and environmental impacts.",
        actions: [
          "Conduct institutional AI sustainability assessment evaluating energy, costs, and environmental impacts (WHO Module 6).",
          "Establish sustainability criteria in AI procurement requiring energy efficiency documentation.",
          "Implement sustainability tracking systems monitoring resource use quarterly with public reporting.",
          "Set institutional sustainability targets: 15% energy reduction, 10% cost optimization within 12 months.",
          "Designate sustainability officer responsible for AI environmental oversight.",
          "Develop long-term sustainability planning addressing AI lifecycle, updates, and eventual decommissioning."
        ],
        impact: "Promotes responsible resource use and environmental stewardship per WHO Module 6."
      },
      medium: {
        summary: "Basic sustainability awareness exists but lacks systematic optimization and reporting.",
        actions: [
          "Implement advanced sustainability monitoring with optimization recommendations.",
          "Develop sustainability performance metrics tracked monthly at leadership level.",
          "Create sustainability improvement programs achieving 20% resource efficiency gains.",
          "Establish sustainability reporting in annual institutional reports with external verification."
        ],
        impact: "Operationalizes sustainability commitment with measurable environmental and economic benefits."
      },
      high: {
        summary: "Strong sustainability practices with comprehensive environmental stewardship.",
        actions: [
          "Achieve carbon-neutral AI operations through efficiency and renewable energy.",
          "Maintain exemplary sustainability standards exceeding WHO guidelines.",
          "Publish comprehensive sustainability reports demonstrating institutional leadership.",
          "Contribute to WHO sustainability frameworks and support other institutions developing green AI practices."
        ],
        impact: "Demonstrates sustainability leadership, contributing to environmental health and institutional excellence."
      }
    }
  },

  policymaker: {
    autonomy: {
      low: {
        summary: "Legal frameworks inadequately protect citizen autonomy in AI-assisted healthcare.",
        actions: [
          "Enact legislation requiring mandatory disclosure when AI influences health decisions (WHO Module 1).",
          "Establish legal right to human review of AI decisions affecting health coverage, diagnosis, or treatment.",
          "Create opt-out provisions allowing citizens to decline AI-assisted care without penalty.",
          "Implement consent requirements for AI use in healthcare settings with penalties for non-compliance.",
          "Establish patient data rights including access, correction, and deletion of AI-generated health information.",
          "Create enforcement mechanisms with regulatory penalties of up to 4% revenue for autonomy violations."
        ],
        impact: "Protects citizen autonomy through enforceable legal rights per WHO Principle 1."
      },
      medium: {
        summary: "Basic autonomy protections exist but lack comprehensive enforcement and public awareness.",
        actions: [
          "Strengthen enforcement through dedicated regulatory authorities with investigation powers.",
          "Implement public education campaigns explaining AI health rights in multiple languages.",
          "Establish citizen complaint mechanisms with 30-day resolution requirements.",
          "Develop autonomy compliance standards with annual reporting requirements for healthcare institutions."
        ],
        impact: "Operationalizes autonomy rights through enforcement and public empowerment per WHO guidance."
      },
      high: {
        summary: "Strong autonomy protections with effective enforcement and public awareness.",
        actions: [
          "Maintain exemplary autonomy standards with continuous legal review ensuring WHO alignment.",
          "Publish annual autonomy protection reports demonstrating effectiveness.",
          "Establish international cooperation on autonomy standards harmonizing protections across borders.",
          "Contribute to WHO autonomy frameworks advancing global patient rights."
        ],
        impact: "Achieves autonomy protection leadership, serving as model for healthcare AI regulation."
      }
    },

    safety: {
      low: {
        summary: "Insufficient regulatory oversight exposes populations to AI-related health risks.",
        actions: [
          "Establish national AI health safety agency with regulatory authority over approvals, monitoring, and enforcement (WHO Module 2).",
          "Implement mandatory pre-market safety evaluations for AI health systems similar to medical device regulations.",
          "Require risk classification of AI systems (low, moderate, high risk) with proportionate oversight.",
          "Create post-market surveillance requirements with mandatory adverse event reporting within 24 hours.",
          "Establish safety standards requiring 95% minimum accuracy and defined performance thresholds.",
          "Implement penalties for safety violations: recalls, fines up to $10M, and criminal liability for willful negligence."
        ],
        impact: "Establishes comprehensive safety regulation protecting public health per WHO Module 2."
      },
      medium: {
        summary: "Basic safety regulations exist but lack enforcement resources and comprehensive coverage.",
        actions: [
          "Expand regulatory capacity with increased funding for safety inspections and enforcement.",
          "Implement continuous safety monitoring programs tracking all deployed AI health systems.",
          "Develop rapid response protocols enabling emergency interventions within 48 hours of critical safety issues.",
          "Establish national AI safety registry collecting performance data for regulatory oversight and public transparency."
        ],
        impact: "Strengthens safety assurance through enhanced regulatory capacity per WHO standards."
      },
      high: {
        summary: "Robust safety regulation with proactive oversight and continuous improvement.",
        actions: [
          "Maintain gold-standard safety regulation with international recognition.",
          "Publish annual safety performance reports demonstrating regulatory effectiveness.",
          "Establish international regulatory cooperation harmonizing safety standards.",
          "Contribute to WHO safety frameworks advancing global regulatory practices."
        ],
        impact: "Achieves safety regulatory excellence, protecting populations and leading global standards."
      }
    },

    transparency: {
      low: {
        summary: "AI health systems operate without adequate transparency, limiting public accountability.",
        actions: [
          "Enact transparency legislation requiring public disclosure of AI algorithms, training data, and performance in healthcare (WHO Module 3).",
          "Establish national AI health registry accessible to public documenting all approved systems.",
          "Require algorithm transparency reports from developers before regulatory approval.",
          "Implement explainability standards requiring AI systems to provide understandable explanations of decisions.",
          "Create public reporting requirements for AI health performance with quarterly updates.",
          "Establish transparency enforcement with penalties up to $5M for non-disclosure violations."
        ],
        impact: "Enables public accountability and informed decision-making per WHO Module 3."
      },
      medium: {
        summary: "Basic transparency requirements exist but lack depth and effective enforcement.",
        actions: [
          "Expand transparency requirements to include detailed validation studies and ethical assessments.",
          "Implement transparency compliance audits with annual public reporting.",
          "Develop transparency standards specifying minimum disclosure requirements.",
          "Create public transparency dashboards showing AI health system performance across country."
        ],
        impact: "Deepens transparency practices building public trust per WHO guidance."
      },
      high: {
        summary: "Comprehensive transparency regulation with strong public accountability.",
        actions: [
          "Maintain exemplary transparency standards recognized internationally.",
          "Publish comprehensive transparency reports demonstrating regulatory effectiveness.",
          "Establish international transparency cooperation harmonizing disclosure requirements.",
          "Contribute to WHO transparency frameworks advancing global standards."
        ],
        impact: "Achieves transparency leadership, serving as model for AI health regulation globally."
      }
    },

    accountability: {
      low: {
        summary: "Accountability for AI health outcomes is legally ambiguous, creating liability gaps.",
        actions: [
          "Enact comprehensive AI accountability legislation defining liability chains for health AI systems (WHO Module 6).",
          "Establish legal frameworks clarifying responsibility between developers, healthcare institutions, and clinicians.",
          "Create mandatory liability insurance requirements for AI health system deployments.",
          "Implement strict liability provisions holding developers accountable for system failures causing patient harm.",
          "Establish victim compensation funds for AI-related health harms with streamlined claims processes.",
          "Create accountability enforcement mechanisms with penalties including license revocation and criminal charges for negligence."
        ],
        impact: "Establishes clear accountability preventing liability gaps per WHO Module 6."
      },
      medium: {
        summary: "Basic accountability laws exist but lack clarity and effective enforcement.",
        actions: [
          "Clarify accountability standards through regulatory guidance and case law development.",
          "Establish accountability monitoring programs tracking incident investigations and outcomes.",
          "Implement accountability performance metrics with public reporting.",
          "Develop international accountability cooperation harmonizing liability frameworks."
        ],
        impact: "Strengthens accountability through legal clarity and enforcement per WHO standards."
      },
      high: {
        summary: "Robust accountability framework with effective enforcement and victim protection.",
        actions: [
          "Maintain exemplary accountability standards with continuous legal review.",
          "Publish annual accountability reports demonstrating system effectiveness.",
          "Establish international accountability leadership contributing to global frameworks.",
          "Support WHO accountability initiatives advancing healthcare AI governance worldwide."
        ],
        impact: "Achieves accountability excellence, protecting patients and leading global regulatory practice."
      }
    },

    equity: {
      low: {
        summary: "AI health systems lack equity oversight, risking widening health disparities.",
        actions: [
          "Enact health equity legislation requiring AI systems to meet fairness standards across demographic groups (WHO Module 4).",
          "Establish equity testing requirements before regulatory approval with performance parity targets.",
          "Create equity monitoring programs requiring ongoing bias testing with annual public reporting.",
          "Implement equity enforcement with penalties for systems demonstrating discriminatory outcomes.",
          "Require accessibility standards ensuring AI health benefits reach underserved populations.",
          "Establish national equity targets: <5% performance disparity across age, gender, race, socioeconomic status, geography."
        ],
        impact: "Prevents algorithmic discrimination promoting health equity per WHO Module 4."
      },
      medium: {
        summary: "Basic equity requirements exist but lack comprehensive oversight and enforcement.",
        actions: [
          "Strengthen equity enforcement through dedicated regulatory resources and investigation powers.",
          "Implement national equity monitoring programs tracking AI health performance across populations.",
          "Develop equity compliance standards with detailed guidance for developers and institutions.",
          "Create equity reporting requirements with public transparency promoting accountability."
        ],
        impact: "Operationalizes equity assurance with systematic oversight per WHO justice principles."
      },
      high: {
        summary: "Comprehensive equity regulation promoting health justice.",
        actions: [
          "Maintain exemplary equity standards reducing health disparities through AI governance.",
          "Publish annual equity reports demonstrating regulatory effectiveness across populations.",
          "Establish international equity cooperation advancing global fairness standards.",
          "Contribute to WHO equity frameworks supporting global health justice goals."
        ],
        impact: "Achieves equity regulatory excellence, leading global efforts toward algorithmic fairness in healthcare."
      }
    },

    sustainability: {
      low: {
        summary: "AI health policy lacks sustainability considerations, missing environmental and resource impacts.",
        actions: [
          "Integrate sustainability requirements into AI health regulations addressing environmental and economic impacts (WHO Module 6).",
          "Establish sustainability assessment requirements in regulatory approval processes.",
          "Implement sustainability standards requiring energy efficiency documentation and carbon impact reporting.",
          "Create sustainability monitoring programs tracking AI health system resource use nationally.",
          "Develop sustainability targets: 20% energy efficiency improvement, 15% cost reduction within 3 years.",
          "Establish sustainability incentives: tax benefits for green AI, research funding for sustainable healthcare AI."
        ],
        impact: "Promotes sustainable AI health development aligned with environmental and economic goals per WHO Module 6."
      },
      medium: {
        summary: "Basic sustainability awareness exists but lacks systematic integration into policy.",
        actions: [
          "Expand sustainability requirements with detailed standards and compliance mechanisms.",
          "Implement sustainability performance tracking with annual public reporting.",
          "Develop sustainability best practice guidance for healthcare AI developers and institutions.",
          "Create sustainability research programs advancing green AI healthcare innovation."
        ],
        impact: "Operationalizes sustainability commitment with measurable environmental benefits per WHO guidance."
      },
      high: {
        summary: "Comprehensive sustainability policy promoting environmental stewardship in AI health.",
        actions: [
          "Maintain exemplary sustainability standards recognized internationally.",
          "Publish comprehensive sustainability reports demonstrating policy effectiveness.",
          "Establish international sustainability cooperation harmonizing environmental standards.",
          "Contribute to WHO sustainability frameworks advancing global green healthcare AI."
        ],
        impact: "Achieves sustainability leadership, contributing to environmental health and global climate goals."
      }
    }
  }
};

// export the recommendations object
export { recommendations };
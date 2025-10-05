// Profile Data
const profileData = {
    name: 'Ravindra Saragadam',
    title: 'Data Engineer',
    roles: ['Data Engineer', 'Problem Solver', 'Cloud Architect', 'Big Data Specialist'],
    currentRole: 'Data Engineer at 6sense',
    location: 'Bengaluru, Karnataka, India',
    email: 'ravindrasaragadam@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ravindrasaragadam',
    github: 'https://github.com/ravindrasaragadam',
    
    summary: `I solve data problems that matter. Not the theoretical kind you read about in papers, but the real-world chaos where systems break at 2 AM and business decisions hang in the balance.

What drives me? Turning data into something teams can actually use. I've built pipelines that process terabytes of data daily, designed systems supporting billion-dollar operations, and automated workflows that saved thousands of hours. But the part that matters most? When someone tells me the data infrastructure I built helped them make a better decision.

I question everything. Not to be difficult, but because "we've always done it this way" rarely leads to better solutions. Whether it's choosing between Flink and Spark, optimizing cloud costs, or designing a new pipeline architecture, I dig deep to understand the trade-offs. Then I ship what works, not what's perfect.

Currently at 6sense, building data infrastructure for predictive B2B intelligence. Previously helped Flipkart prepare for their IPO with financial data systems, and architected multi-terabyte solutions at Fractal Analytics. Each experience taught me that simple, maintainable solutions beat complex, fragile ones every time.`,

    highlights: [
        { label: 'Years Experience', value: String(new Date().getFullYear() - 2018)+'+' },
        { label: 'Projects Delivered', value: '15+' },
        { label: 'Data Processed', value: '5TB+/day' },
        { label: 'Cloud Cost Saved', value: '$15K/m' }
    ],

    strengths: [
        {
            icon: 'fas fa-rocket',
            title: 'Big Data Pipeline Architecture',
            description: 'Building scalable, efficient data pipelines that process terabytes of data daily'
        },
        {
            icon: 'fas fa-cloud',
            title: 'Cloud Platform Optimization',
            description: 'Expert in AWS and Azure cloud platforms, optimizing cost and performance'
        },
        {
            icon: 'fas fa-chart-line',
            title: 'Financial Data Systems',
            description: 'Designed systems for multi-billion dollar financial reporting and compliance'
        },
        {
            icon: 'fas fa-bolt',
            title: 'Real-time Data Processing',
            description: 'Building streaming architectures with Flink and Spark for low-latency insights'
        }
    ]
};

// Experience Data
const experiences = [
    {
        company: '6sense',
        role: 'Senior Data Engineer',
        duration: 'April 2025 - Present',
        location: 'Bengaluru, Karnataka, India',
        description: [
            'Migrated from batch (Spark) to real-time streaming (Flink), cutting latency to sub-second',
            'Led improvements in data quality and SLA adherence across key systems',
            'Optimized Spark configurations to keep large-scale data processing stable and efficient',
            'Mentored junior engineers and shared architectural best practices across the team',
            'Took ownership of support workflows and incident resolution for data pipelines'
        ],
        technologies: ['Apache Spark', 'Flink', 'AWS', 'SingleStore', 'Python', 'Kubernetes', 'SQL']
    },
    {
        company: '6sense',
        role: 'Data Engineer',
        duration: 'January 2022 - April 2025',
        location: 'Bengaluru, Karnataka, India',
        description: [
            'Built reliable data pipelines processing 10M+ updates per day, with checks for accuracy and data quality',
            'Improved query performance by 60% using smarter caching and indexing',
            'Maintained indexing pipelines for global search features, balancing speed and consistency',
            'Set up GDPR-compliant email notification system reaching 200K+ users daily, with throttling in place',
            'Tuned Spark jobs and queries to improve performance and reduce system load'
        ],
        technologies: ['Apache Spark', 'AWS', 'Python', 'Elasticsearch', 'SQL']
    },
    {
        company: 'Flipkart',
        role: 'Data Engineer',
        duration: 'May 2021 - January 2022',
        location: 'Bengaluru, Karnataka, India',
        description: [
            'Designed and maintained Accounting and Financial Reporting system for India\'s largest e-commerce platform',
            'Enhanced financial reporting systems to support business growth and operational excellence',
            'Developed Inventory Validations Automation Flow ensuring data consistency across 100M+ SKUs',
            'Built and maintained Inventory valuation platform processing 500GB+ daily using Spark and Elasticsearch',
            'Enabled automated report generation for Balance Sheet, Cash Flow, and Income Statements'
        ],
        technologies: ['Apache Spark', 'Elasticsearch', 'SQL', 'Python', 'AWS']
    },
    {
        company: 'Fractal Analytics',
        role: 'Data Engineer',
        duration: 'November 2020 - May 2021',
        location: 'Bengaluru, Karnataka, India',
        description: [
            'Promoted to Data Engineer for exceptional performance and technical leadership',
            'Architected data flow model for Fortune-500 retail client processing 2TB+/day using Azure',
            'Developed automated data transformation pipeline reducing processing time by 90%',
            'Created data ingestion framework tracking customer journeys across 10M+ users, powering 25+ dashboards',
            'Optimized Azure cloud infrastructure reducing monthly costs by $15K through resource rightsizing',
            'Led weekly client sync-ups delivering insights and gathering technical requirements'
        ],
        technologies: ['PySpark', 'Azure', 'Airflow', 'Hadoop', 'Hive', 'Pandas', 'Python']
    },
    {
        company: 'Fractal Analytics',
        role: 'Associate Engineer',
        duration: 'August 2019 - November 2020',
        location: 'Bengaluru, Karnataka, India',
        description: [
            'Designed data consolidation tool for UK and Russia Markets saving 500 human hours annually',
            'Optimized revenue analysis pipeline for e-commerce client reducing analysis time by 3x',
            'Developed automated ETL solution for European markets achieving 30% reduction in processing lag',
            'Built scalable data solutions across multiple international markets (UK, Poland, France, Russia)',
            'Created data quality monitoring framework reducing data issues by 40%'
        ],
        technologies: ['Python', 'SQL', 'Azure', 'Pandas', 'Data Warehousing']
    },
    {
        company: 'MAQ Software',
        role: 'Software Engineer Intern',
        duration: 'September 2018 - July 2019',
        location: 'Hyderabad, Telangana, India',
        description: [
            'Developed performance reporting template reducing preparation time by 80%',
            'Automated business insights generation for Microsoft Asimov Support',
            'Conducted sentiment analysis on social media data using Twitter and Facebook APIs',
            'Pioneered sales dashboard approach reducing launch time by 90%',
            'Led 30+ customer resolution sessions across 8+ countries'
        ],
        technologies: ['Python', 'Power BI', 'SQL', 'APIs', 'Data Analytics']
    }
];

// Expertise Areas
const expertise = [
    {
        icon: 'fas fa-fire',
        title: 'Stream Processing',
        description: 'Real-time data processing with Apache Flink and Spark Streaming architectures',
        tags: ['Apache Flink', 'Kafka', 'Spark Streaming', 'Event-Driven']
    },
    {
        icon: 'fas fa-database',
        title: 'Big Data Frameworks',
        description: 'Distributed computing with Spark, Hadoop ecosystem, and large-scale data processing',
        tags: ['Apache Spark', 'Trino', 'Hadoop', 'Hive', 'Presto']
    },
    {
        icon: 'fas fa-cloud',
        title: 'Cloud Infrastructure',
        description: 'AWS and Azure platform expertise including compute, storage, and data services',
        tags: ['AWS', 'Azure', 'S3', 'Glue', 'EMR', 'Lambda', 'Data Factory']
    },
    {
        icon: 'fas fa-code',
        title: 'Languages',
        description: 'Production-grade code in Python, SQL, and Shell scripting for automation',
        tags: ['Python', 'SQL', 'Bash', 'Scala']
    },
    {
        icon: 'fas fa-search',
        title: 'Search & Analytics',
        description: 'Elasticsearch for real-time search, indexing, and log analytics at scale',
        tags: ['Elasticsearch', 'Kibana', 'ELK Stack', 'OpenSearch']
    },
    {
        icon: 'fas fa-project-diagram',
        title: 'Workflow Orchestration',
        description: 'Pipeline automation and scheduling with Airflow and modern orchestration tools',
        tags: ['Apache Airflow', 'DAGs', 'ETL/ELT', 'Data Pipelines']
    },
    {
        icon: 'fas fa-table',
        title: 'Data Warehousing',
        description: 'Data modeling, warehouse design, and optimization for analytical workloads',
        tags: ['Data Modeling', 'Star Schema', 'Dimensional Modeling', 'SQL Optimization', 'SingleStore']
    },
    {
        icon: 'fas fa-chart-bar',
        title: 'Data Visualization',
        description: 'Building dashboards and analytics solutions with BI tools',
        tags: ['Power BI', 'Tableau', 'Dashboards', 'Reporting']
    }
];

// Projects Data
const projects = [
    {
        title: 'Financial Reporting System',
        description: 'Built automated financial reporting platform for Flipkart. Processes 500GB+ daily data for real-time balance sheet, cash flow, and income statement generation.',
        icon: 'fas fa-file-invoice-dollar',
        technologies: ['Spark', 'Elasticsearch', 'Python', 'AWS'],
        github: null,
        demo: null
    },
    {
        title: 'Real-time Streaming Pipeline',
        description: 'Architected Apache Flink streaming pipeline processing 50K+ events/second at 6sense. Migrated from Spark batch to enable sub-second latency for predictive analytics.',
        icon: 'fas fa-stream',
        technologies: ['Apache Flink', 'Kafka', 'AWS', 'Python'],
        github: null,
        demo: null
    },
    {
        title: 'Customer Journey Analytics',
        description: 'Created data ingestion framework tracking customer journeys across multiple touchpoints, powering 25+ dashboards for Fortune 500 client at Fractal Analytics.',
        icon: 'fas fa-chart-line',
        technologies: ['PySpark', 'Azure', 'Airflow', 'Python'],
        github: null,
        demo: null
    },
    {
        title: 'Inventory Valuation Platform',
        description: 'Developed automated inventory validation and valuation system ensuring data consistency and fitness for Flipkart\'s massive e-commerce operations.',
        icon: 'fas fa-boxes',
        technologies: ['Spark', 'Elasticsearch', 'SQL'],
        github: null,
        demo: null
    }
];

// Blog Posts Data
const blogPosts = [
    {
        title: 'From Spark Batch to Flink Streaming: A Migration Story',
        date: 'January 20, 2025',
        excerpt: 'We migrated from Spark batch processing to Apache Flink streaming at 6sense. Here\'s why we made the switch and how we now process 50K+ events/second with sub-second latency.',
        tags: ['Flink', 'Spark', 'Streaming'],
        link: 'blog/blog-flink-vs-spark.html',
        comingSoon: false
    },
    {
        title: 'Building Scalable Data Pipelines: Lessons from the Trenches',
        date: 'March 15, 2024',
        excerpt: 'Six years in data engineering taught me that the best pipeline is the one that doesn\'t wake you up at 3 AM. Here\'s what actually works in production.',
        tags: ['Data Engineering', 'Spark', 'Best Practices'],
        link: 'blog/blog-scalable-pipelines.html',
        comingSoon: false
    },
    {
        title: 'Why I Choose Practical Over Perfect: A Data Engineer\'s Philosophy',
        date: 'February 28, 2024',
        excerpt: 'In the real world, a working solution today beats a perfect solution next quarter. Here\'s why pragmatism wins in data engineering.',
        tags: ['Philosophy', 'Career', 'Engineering'],
        link: 'blog/blog-practical-over-perfect.html',
        comingSoon: false
    },
    {
        title: 'The Hidden Costs of Cloud: Optimization Tips That Actually Work',
        date: 'December 10, 2024',
        excerpt: 'At Fractal Analytics, our Azure bill was spiraling out of control. Here\'s how we saved $15K monthly through smart optimization—no architecture overhaul required.',
        tags: ['AWS', 'Azure', 'Cost Optimization'],
        link: 'blog/blog-cloud-optimization.html',
        comingSoon: false
    }
];

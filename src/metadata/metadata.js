module.exports = {
  name: "Tuan Nguyen",
  title: "Fullstack Developer",
  baseUrl: "https://tuannguyen.kanthorlabs.com/",
  facts: {
    Residence:
      '<a href="#"><i class="fa fa-home fact-icon"></i>Can Tho, Viet Nam</a>',
    LinkedIn:
      '<a href="https://www.linkedin.com/in/tuannguyen1993/"><i class="fab fa-linkedin fact-icon"></i>tuannguyen1993</a>',
    GitHub:
      '<a href="https://github.com/kanthorlabs"><i class="fab fa-github fact-icon"></i>kanthorlabs</a>',
    Email:
      '<a href="mailto:tuan.nguyen930708@gmail.com">tuan.nguyen930708@gmail.com</a>',
  },
  skills: [
    ["JavaScript", "TypeScript"],
    ["TypeScript", "NodeJS"],
    ["Golang", ".NET"],
    ["PostgreSQL", "MySQL"],
    ["CI/CD", "Kubernetes"],
    ["ELK", "AWS"],
    ["GCP"],
  ],
  summary:
    "A seasoned Backend and DevOps developer with 8+ years of experience in building and scaling large systems, leading technical teams, and delivering impactful solutions. Passionate about mentoring, continuous learning, and leveraging technology to achieve business objectives.",
  positions: [
    {
      company: "Upmesh",
      link: "https://upmesh.io/sg",
      location: "Singapore",
      title: "Principal Engineer",
      period: "Apr 2019 - Now",
      skills: [
        ".NET",
        "NodeJS",
        "JavaScript",
        "Golang",
        "Elastic Stack (ELK)",
        "Kubenetes",
        "AWS",
        "nats.io",
        "RabbitMQ",
        "MySQL",
        "PostgreSQL",
        "DevOps",
        "Temporal",
      ],
      contents: `
Becoming a Principal Engineer at a rapidly growing startup has been one of the most enriching experiences I've ever had. During my tenure at Upmesh, I had the privilege of collaborating with exceptional colleagues, engaging in strategic planning, and addressing the evolving requirements essential for meeting our business objectives.

Key Responsibilities:

* Orchestrating and refining operational workflows to seamlessly accommodate constantly changing demands ([Gitflow at a startup](https://blog.kanthorlabs.com/posts/gitlfow-at-a-startup/))
* Offering guidance to fellow engineers while assisting them in enhancing their design prowess ([The art of Export](https://blog.kanthorlabs.com/posts/the-art-of-export/), [The art of Import](https://blog.kanthorlabs.com/posts/the-art-of-import/))
* Delving into performance bottlenecks, embracing the lessons derived from errors, and disseminating these insights to our team members through tech talks and presentations ([When index scan is slower than full table scan](https://blog.kanthorlabs.com/posts/when-index-scan-is-slower-than-full-table-scan/), [The ID chosen](https://blog.kanthorlabs.com/posts/the-id-chosen/))

Achievements

* Pioneering the design and implementation of a scalable and highly available webhook system, capable of handling over **2 million events daily** and sustaining **2000 events per second at peak-time** for a minimum of three hours.
* Collaborating with a team to conceptualize and construct an efficient and dependable data pipeline tasked with transforming data sourced from our primary databases (MySQL and PostgreSQL) into ElasticSearch, enabling responsive full-text search capabilities.
* By executing cost optimization strategies within the AWS cloud environment, we achieved a **$37,000 annual cost reduction**, significantly enhancing Upmesh's financial performance. You can find more details at my blog post [Saving $37K annually on our AWS bill](https://blog.kanthorlabs.com/posts/saving-37k-annually-on-our-aws-bill/)
`,
    },
    {
      company: "Boomerang.Isentia",
      link: "https://www.isentia.com/",
      location: "HCM",
      title: "Technical Leader",
      period: "Mar 2018 - Apr 2019",
      skills: ["NodeJS", "ReactJS", "ELK Stack", "Kubenetes"],
      contents: `
As a Technical Leader at the #1 media monitoring, intelligence and insights solution provider in Vietnam, I was responsible for developing a platform that enables clients to monitor their customer conversations in real-time.

Key Responsibilities:

* Designing and building a large-scale data crawling system to gather information from various sources including social media platforms like Facebook, Youtube, Instagram, and Vietnamese forums, among others.
* Managing a robust database system using Elasticsearch for storage and Kibana for visualization.
* Automating the software release process using custom scripts.

Achievements:

* Desiging a crawler system that can make over **30 million requests** and collect **15 million documents** per day
* Maintaining two Elasticsearch clusters that stored more than **5 billion documents**, amounting to approximately **15TB of text data**
* Reducing the release time from 4 hours to **30 minutes**
* Achieving a minimum code coverage of **80%**.
`,
    },
  ],
  histories: [
    {
      period: "Apr 2019 &ndash; Apr 2021",
      contents: `As a Senior Engineer at <a href="https://www.2359.co/" target="_blank">2359Media</a>, a top enterprise Chatbot in Singapore, I served prominent clients like Melco Resorts, Bank of Singapore, and Sacombank in Vietnam. My role involved maintaining DevOps workflows, designing MVP projects for pre-sales, and sharing expertise with team members. Notable achievements include implementing a GitOps workflow, developing a Voice Bot Platform on GCP deployed to K8S clusters, ensuring code quality with rigorous testing, and hosting technical talks on various topics`,
    },
    {
      period: "2016 &ndash; 2018",
      contents: `Managed and maintained an e-commerce platform based on the Yii framework (PHP) at <a href="https://tagrem.com/index.html" target="_blank">Tagrem Corp</a> for <a href="https://www.serta.com/" target="_blank">Mattresses by Serta</a>.
      <br> Completed freelance projects utilizing NodeJS, ExpressJS and MySQL`,
    },
    {
      period: "2015 &ndash; 2016",
      contents: `Developed marketplaces for real estate (<a href="https://nhadatso.com/" target="_blank">NhaDatSo</a>), vehicles (<a href="https://xehoiviet.com/" target="_blank">XeHoiViet</a>) and jobs (<a href="https://www.mangvieclam.com/" target="_blank">MangViecLam</a>)`,
    },
  ],
  others: [
    {
      contents: `Conduct research, design, and implement my personal projects: <a href="https://github.com/kanthorlabs" target="_blank">kanthorlabs</a>`,
    },
  ],
};

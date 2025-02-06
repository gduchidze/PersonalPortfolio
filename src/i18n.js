import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      hero: "Hi, I'm Giorgi Duchidze, a passionate AI Engineer and Data Scientist from Georgia. My technical expertise spans multiple domains of programming, artificial intelligence, cloud computing, web development, data analysis, and database management. I leverage Python, JavaScript, C#, and other programming languages to develop intelligent AI systems using frameworks like LangChain, LangGraph, and Hugging Face Transformers. My cloud infrastructure skills cover Azure, AWS, and GCP, while my web development capabilities include FastAPI, Flask, Django, and React. I specialize in data analysis using NumPy, Pandas, and Scikit-Learn, and work with diverse database technologies including relational databases like MySQL and PostgreSQL, NoSQL solutions like MongoDB, and vector databases such as Qdrant and Pinecone. With strong DevOps skills in Git, Linux, and Docker, I'm committed to creating innovative technological solutions that push the boundaries of AI and software engineering.",
      about: "About",
      contact: "Contact",
      github: "GitHub",
      firstExperience: `I contribute to developing intelligent AI systems using LLMs and LLM frameworks (e.g., LangChain, LangGraph). I have
        experience in comparing business logic with corresponding vector databases (Qdrant, Pinecone, Chroma).
        Additionally, I test LLM and embedding models for low-resource languages (primarily Georgian), implement autonomous
        agents, and optimize LLM-based solutions including RAG or Search Engine Solutions.
        Working alongside senior engineers, I contribute to diverse AI applications, including RAG-based systems, enterprise search
        solutions, autonomous agent pipelines, social media conversational AI, and full-stack solutions. `,
      secondExperience: `Collaborate with business stakeholders to understand their needs and translate them into data-driven solutions.
        Develop, implement, and validate machine learning models for scoring and predictive analytics.`,
        newQuestion:"New Question",
        send:"Send",
        name:"Name",
        email:"Email",
        message:"Message",
    },
  },
  ka: {
    translation: {
      hero: "გამარჯობა, მე ვარ გიორგი დუჩიძე, ვნებიანი AI ინჟინერი და მონაცემთა მეცნიერი საქართველოდან. ჩემი ტექნიკური ექსპერტიზა მოიცავს პროგრამირების, ხელოვნური ინტელექტის, ღრუბლოვანი გამოთვლების, ვებ განვითარების, მონაცემთა ანალიზისა და მონაცემთა ბაზის მენეჯმენტის მრავალ დომენს. მე ვიყენებ Python-ს, JavaScript-ს, C#-ს და სხვა პროგრამირების ენებს ინტელექტუალური ხელოვნური ინტელექტის სისტემების გასავითარებლად ისეთი ჩარჩოების გამოყენებით, როგორიცაა LangChain, LangGraph და Hugging Face Transformers. ჩემი ღრუბლოვანი ინფრასტრუქტურის უნარები მოიცავს Azure, AWS და GCP, ხოლო ჩემი ვებ განვითარების შესაძლებლობები მოიცავს FastAPI, Flask, Django და React. მე სპეციალიზირებული ვარ მონაცემთა ანალიზში NumPy-ის, Pandas-ისა და Scikit-Learn-ის გამოყენებით და ვმუშაობ მონაცემთა ბაზის მრავალფეროვან ტექნოლოგიებთან, მათ შორის ურთიერთობით მონაცემთა ბაზებთან, როგორიცაა MySQL და PostgreSQL, NoSQL გადაწყვეტილებები, როგორიცაა MongoDB და ვექტორული მონაცემთა ბაზები, როგორიცაა Qdrant და Pinecone. ძლიერი DevOps უნარებით Git-ში, Linux-სა და Docker-ში, მე მზად ვარ შევქმნა ინოვაციური ტექნოლოგიური გადაწყვეტილებები, რომლებიც გადალახავს AI-სა და პროგრამული უზრუნველყოფის ინჟინერიის საზღვრებს.",
      about: "ჩემს შესახებ",
      contact: "კონტაქტი",
      github: "გითჰაბი",
      firstExperience: `მე წვლილი მაქვს ინტელექტუალური AI სისტემების განვითარებაში LLM-ების და LLM ჩარჩოების გამოყენებით (მაგ., LangChain, LangGraph). მაქვს
        ბიზნეს ლოგიკის შესაბამის ვექტორულ მონაცემთა ბაზებთან (Qdrant, Pinecone, Chroma) შედარების გამოცდილება.
        გარდა ამისა, ვამოწმებ LLM-ს და ჩანერგვის მოდელებს დაბალი რესურსის ენებისთვის (ძირითადად ქართული), ვახორციელებ ავტონომიურს
        აგენტები და LLM-ზე დაფუძნებული გადაწყვეტილებების ოპტიმიზაცია, მათ შორის RAG ან Search Engine Solutions.
        უფროს ინჟინრებთან ერთად ვმუშაობ, მე წვლილი მაქვს სხვადასხვა AI აპლიკაციებში, მათ შორის RAG-ზე დაფუძნებულ სისტემებში, საწარმოს ძიებაში
        გადაწყვეტილებები, ავტონომიური აგენტის მილსადენები, სოციალური მედიის სასაუბრო AI და სრული დასტა გადაწყვეტილებები.`,
      secondExperience: `ითანამშრომლეთ ბიზნესის დაინტერესებულ მხარეებთან, რათა გაიგოთ მათი საჭიროებები და გადააკეთოთ ისინი მონაცემებზე ორიენტირებულ გადაწყვეტილებებად.
        შექმენით, დანერგეთ და დაადასტურეთ მანქანური სწავლების მოდელები ქულების და პროგნოზირებადი ანალიტიკისთვის.`,
        newQuestion:"ახალი კითხვა",
        send:"გაგზავნა",
        name:"სახელი",
        email:"იმეილი",
        message:"მესიჯი",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

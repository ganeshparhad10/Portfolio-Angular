import { Component } from '@angular/core';

export interface Project {
  title: string;
  tagline: string;
  category: string;
  date: string;
  isFeatured?: boolean;
  image: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  selectedCategory: string = 'all';

  projects: Project[] = [
    {
      title: 'WorkPlus – Workforce Management Platform',
      tagline: 'Enterprise Microservices & Generative AI Platform',
      category: 'fullstack',
      date: 'Aug 2026',
      isFeatured: true,
      image: 'assets/cool-background.png',
      description: 'A robust role-based workforce management system supporting Admin, HR Head, Manager, and Employee roles for project management, task allocation, attendance, and timesheets.',
      highlights: [
        'Architected with Spring Boot Microservices separating Authentication, Business Logic, and AI modules.',
        'Secured with Spring Security, JWT, BCrypt password hashing, and role-based authorization.',
        'Integrated Google Gemini API to build an intelligent assistant answering employee task queries.',
        'Integrated MySQL via Spring Data JPA and Hibernate for complex entity mappings and transactions.',
        'Developed interactive React.js dashboards communicating with backend services via RESTful APIs.'
      ],
      technologies: ['Java', 'Spring Boot', 'Microservices', 'Spring Security', 'JWT', 'Gemini AI', 'MySQL', 'React.js', 'Git'],
      githubUrl: 'https://github.com/ganeshparhad10'
    },
    {
      title: 'EduTrack – Attendance Tracking System',
      tagline: 'Education-Focused Attendance & Student Management',
      category: 'fullstack',
      date: 'Jan 2025',
      isFeatured: true,
      image: 'assets/SAMS.png',
      description: 'A powerful attendance management system designed to streamline student attendance capture, institutional records, and faculty workflows.',
      highlights: [
        'Developed RESTful APIs to manage Students, Subjects, Faculty, and Attendance records.',
        'Implemented full CRUD operations with structured, secure transactional data access.',
        'Configured role-based access for Admin and Faculty to secure administrative operations.',
        'Engineered complex entity relationships with Hibernate ORM and MySQL persistence.',
        'Built dynamic frontend views using Angular connected to Spring Boot backend.'
      ],
      technologies: ['Spring Boot', 'Java', 'Angular', 'Hibernate', 'MySQL', 'REST API'],
      githubUrl: 'https://github.com/ganeshparhad10/EduTrack'
    },
    {
      title: 'Intelligent Book Recommendation System',
      tagline: 'Personalized Book Recommender via NLP',
      category: 'ai',
      date: '2024',
      isFeatured: false,
      image: 'assets/book.jpeg',
      description: 'An AI-powered recommendation platform analyzing reading history, user preferences, and genre similarity to deliver tailored book suggestions.',
      highlights: [
        'Engineered recommendation algorithms using Python, TF-IDF Vectorization, and Cosine Similarity.',
        'Processed and analyzed large-scale reading preferences from the Book-Crossing dataset.',
        'Built full-stack web interface using HTML, CSS, JavaScript, Node.js, and EJS.',
        'Optimized search and recommendation latency for fast response times.'
      ],
      technologies: ['Python', 'NLP', 'Machine Learning', 'TF-IDF', 'Node.js', 'EJS'],
      githubUrl: 'https://github.com/ganeshparhad10/BOOK-RECOMMENDATION-SYSTEM'
    }
  ];

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedCategory);
  }

  setCategory(category: string): void {
    this.selectedCategory = category;
  }
}

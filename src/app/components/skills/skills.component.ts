import { Component } from '@angular/core';

export interface SkillItem {
  name: string;
  level: string;
  iconClass: string;
  isBootstrapIcon?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillItem[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Java & Backend Technologies',
      icon: 'bi bi-hdd-stack-fill',
      skills: [
        { name: 'Core Java', level: 'Advanced', iconClass: 'devicon-java-plain colored' },
        { name: 'Spring Boot', level: 'Advanced', iconClass: 'devicon-spring-plain colored' },
        { name: 'Spring Security', level: 'Intermediate', iconClass: 'bi bi-shield-lock-fill', isBootstrapIcon: true },
        { name: 'Microservices', level: 'Intermediate', iconClass: 'bi bi-diagram-3-fill', isBootstrapIcon: true },
        { name: 'Hibernate / JPA', level: 'Advanced', iconClass: 'devicon-hibernate-plain colored' },
        { name: 'RESTful APIs', level: 'Advanced', iconClass: 'bi bi-cloud-arrow-down-fill', isBootstrapIcon: true }
      ]
    },
    {
      title: 'Databases & Security',
      icon: 'bi bi-database-fill-gear',
      skills: [
        { name: 'MySQL', level: 'Advanced', iconClass: 'devicon-mysql-original colored' },
        { name: 'Relational DBMS', level: 'Advanced', iconClass: 'bi bi-database-check', isBootstrapIcon: true },
        { name: 'SQL Querying', level: 'Advanced', iconClass: 'bi bi-table', isBootstrapIcon: true },
        { name: 'JWT Authentication', level: 'Intermediate', iconClass: 'bi bi-key-fill', isBootstrapIcon: true }
      ]
    },
    {
      title: 'Frontend Development',
      icon: 'bi bi-layout-text-window-reverse',
      skills: [
        { name: 'Angular', level: 'Intermediate', iconClass: 'devicon-angularjs-plain colored' },
        { name: 'React.js', level: 'Intermediate', iconClass: 'devicon-react-original colored' },
        { name: 'TypeScript', level: 'Intermediate', iconClass: 'devicon-typescript-plain colored' },
        { name: 'JavaScript', level: 'Advanced', iconClass: 'devicon-javascript-plain colored' },
        { name: 'HTML5', level: 'Advanced', iconClass: 'devicon-html5-plain colored' },
        { name: 'CSS3', level: 'Advanced', iconClass: 'devicon-css3-plain colored' },
        { name: 'Bootstrap 5', level: 'Advanced', iconClass: 'devicon-bootstrap-plain colored' }
      ]
    },
    {
      title: 'Artificial Intelligence & Languages',
      icon: 'bi bi-stars',
      skills: [
        { name: 'Python', level: 'Intermediate', iconClass: 'devicon-python-plain colored' },
        { name: 'Gemini AI Integration', level: 'Intermediate', iconClass: 'bi bi-robot', isBootstrapIcon: true },
        { name: 'Machine Learning', level: 'Intermediate', iconClass: 'bi bi-cpu-fill', isBootstrapIcon: true },
        { name: 'Natural Language Proc.', level: 'Intermediate', iconClass: 'bi bi-chat-square-text-fill', isBootstrapIcon: true }
      ]
    },
    {
      title: 'Developer Tools & Platforms',
      icon: 'bi bi-tools',
      skills: [
        { name: 'Git', level: 'Advanced', iconClass: 'devicon-git-plain colored' },
        { name: 'GitHub', level: 'Advanced', iconClass: 'devicon-github-original' },
        { name: 'Apache Maven', level: 'Intermediate', iconClass: 'devicon-apache-plain colored' },
        { name: 'Postman', level: 'Advanced', iconClass: 'devicon-postman-plain colored' },
        { name: 'VS Code', level: 'Advanced', iconClass: 'devicon-vscode-plain colored' },
        { name: 'Spring Tool Suite', level: 'Advanced', iconClass: 'devicon-eclipse-plain colored' }
      ]
    }
  ];
}

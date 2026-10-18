import { Component } from '@angular/core';

export interface SkillItem {
  name: string;
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
      icon: 'bi bi-hdd-stack',
      skills: [
        { name: 'Core Java', iconClass: 'devicon-java-plain colored' },
        { name: 'Spring Boot', iconClass: 'devicon-spring-plain colored' },
        { name: 'Spring Security', iconClass: 'bi bi-shield-lock-fill', isBootstrapIcon: true },
        { name: 'Microservices', iconClass: 'bi bi-diagram-3-fill', isBootstrapIcon: true },
        { name: 'Hibernate / JPA', iconClass: 'devicon-hibernate-plain colored' },
        { name: 'RESTful APIs', iconClass: 'bi bi-cloud-arrow-down-fill', isBootstrapIcon: true }
      ]
    },
    {
      title: 'Databases & Security',
      icon: 'bi bi-database',
      skills: [
        { name: 'MySQL', iconClass: 'devicon-mysql-original colored' },
        { name: 'Relational DBMS', iconClass: 'bi bi-database-check', isBootstrapIcon: true },
        { name: 'SQL Querying', iconClass: 'bi bi-table', isBootstrapIcon: true },
        { name: 'JWT Authentication', iconClass: 'bi bi-key-fill', isBootstrapIcon: true }
      ]
    },
    {
      title: 'Frontend Development',
      icon: 'bi bi-layout-text-window-reverse',
      skills: [
        { name: 'Angular', iconClass: 'devicon-angularjs-plain colored' },
        { name: 'React.js', iconClass: 'devicon-react-original colored' },
        { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' },
        { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
        { name: 'HTML5', iconClass: 'devicon-html5-plain colored' },
        { name: 'CSS3', iconClass: 'devicon-css3-plain colored' },
        { name: 'Bootstrap 5', iconClass: 'devicon-bootstrap-plain colored' }
      ]
    },
    {
      title: 'Artificial Intelligence & Languages',
      icon: 'bi bi-stars',
      skills: [
        { name: 'Python', iconClass: 'devicon-python-plain colored' },
        { name: 'Gemini AI Integration', iconClass: 'bi bi-robot', isBootstrapIcon: true },
        { name: 'Machine Learning', iconClass: 'bi bi-cpu-fill', isBootstrapIcon: true },
        { name: 'Natural Language Processing', iconClass: 'bi bi-chat-square-text-fill', isBootstrapIcon: true }
      ]
    },
    {
      title: 'Developer Tools & Platforms',
      icon: 'bi bi-tools',
      skills: [
        { name: 'Git', iconClass: 'devicon-git-plain colored' },
        { name: 'GitHub', iconClass: 'devicon-github-original' },
        { name: 'Apache Maven', iconClass: 'devicon-apache-plain colored' },
        { name: 'Postman', iconClass: 'devicon-postman-plain colored' },
        { name: 'VS Code', iconClass: 'devicon-vscode-plain colored' },
        { name: 'Spring Tool Suite', iconClass: 'devicon-eclipse-plain colored' }
      ]
    }
  ];
}

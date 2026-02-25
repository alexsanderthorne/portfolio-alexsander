import { Component, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Interface para tipagem forte
interface Project {
  title: string;
  category: 'Frontend' | 'Backend/API' | 'Machine Learning';
  description: string;
  tech: string[];
  link: string;
  featured?: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true, // Adicionado: Obrigatório para usar 'imports'
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-alexsander'; // Propriedade title simples
  
  currentYear = new Date().getFullYear();

  // Signals para reatividade performática
  skills = signal([
    'Angular', 'TypeScript', 'Python', 'Flask', 
    'Machine Learning', 'Docker', 'CI/CD', 
    'Linux', 'TailwindCSS', 'SQL'
  ]);

  projects = signal<Project[]>([
    {
      title: 'Spotify Dashboard Clone',
      category: 'Frontend',
      description: 'Aplicação reativa simulando a interface do Spotify. Foco em arquitetura de componentes, manipulação de estado e fidelidade visual com CSS avançado.',
      tech: ['Angular', 'HTML5', 'CSS3', 'RxJS'],
      link: 'https://github.com/alexsanderthorne' 
    },
    {
      title: 'Flask API Challenge (Capyba)',
      category: 'Backend/API',
      description: 'API RESTful completa com autenticação JWT, confirmação de e-mail e gerenciamento de usuários. Arquitetura escalável pronta para produção.',
      tech: ['Python', 'Flask', 'SQLAlchemy', 'JWT'],
      link: 'https://github.com/alexsanderthorne'
    },
    {
      title: 'Smart IoT System',
      category: 'Backend/API',
      description: 'Sistema inteligente para gestão residencial. Integração de sensores IoT com backend para processamento de dados em tempo real.',
      tech: ['Python', 'IoT', 'MQTT', 'Analytics'],
      link: 'https://github.com/alexsanderthorne'
    },
    {
      title: 'Conversational AI Agent',
      category: 'Machine Learning',
      description: 'Simulador de conversas integrado à OpenAI API com persistência em SQLite. Interface fluida para interação natural homem-máquina.',
      tech: ['Python', 'OpenAI API', 'SQLite', 'JavaScript'],
      link: 'https://github.com/alexsanderthorne'
    },
    {
      title: 'K-Means Clustering Analysis',
      category: 'Machine Learning',
      description: 'Projeto de análise de dados não-supervisionada para agrupamento de padrões. Notebooks documentados com visualização de métricas.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter'],
      link: 'https://github.com/alexsanderthorne'
    }
  ]);

  getCategoryColor(category: string): string {
    switch (category) {
      case 'Frontend': return 'text-pink-400 bg-pink-900/20';
      case 'Backend/API': return 'text-blue-400 bg-blue-900/20';
      case 'Machine Learning': return 'text-green-400 bg-green-900/20';
      default: return 'text-slate-400';
    }
  }
}
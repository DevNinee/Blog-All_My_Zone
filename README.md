
#  All My Zone - Personal Blog

Um blog pessoal moderno e responsivo desenvolvido com HTML, CSS e JavaScript vanilla. Este projeto apresenta um design clean, funcionalidades interativas e uma experiência de usuário otimizada.

##  Funcionalidades

###  Recursos Principais
- **Modo Escuro/Claro**: Toggle entre temas com persistência no localStorage
- **Navegação Responsiva**: Menu hambúrguer para dispositivos móveis
- **Busca Inteligente**: Pesquise por título, conteúdo ou tags dos posts
- **Formulário de Contato**: Formulário funcional com validação e feedback
- **Estimativa de Tempo de Leitura**: Cálculo automático baseado no número de palavras
- **Design Responsivo**: Otimizado para todos os dispositivos

###  Design e UX
- Interface limpa e moderna usando Pico.css
- Animações suaves e transições
- Tipografia otimizada para leitura
- Imagens de alta qualidade via Unsplash
- Sistema de tags para organização dos posts

##  Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização com variáveis CSS e grid/flexbox
- **JavaScript**: Funcionalidades interativas
- **Pico.css**: Framework CSS minimalista
- **Unsplash**: Imagens de alta qualidade

##  Estrutura do Projeto

```
├── index.html          # Página principal
├── style.css           # Estilos customizados
├── script.js           # Lógica JavaScript
├── README.md           # Documentação
└── .replit             # Configuração do Replit
```

##  Como Usar

### No Replit
1. Clone ou fork este repositório
2. Clique no botão "Run" para iniciar o servidor
3. Acesse a preview para ver o blog funcionando

### Localmente
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/all-my-zone.git
```

2. Abra o arquivo `index.html` em um navegador
3. Ou use um servidor local como Live Server

## Personalização

### Conteúdo do Blog
- Edite o arquivo `index.html` para alterar o conteúdo dos posts
- Adicione novos posts seguindo a estrutura existente
- Personalize as imagens alterando as URLs do Unsplash

### Styling
- Modifique `style.css` para personalizar cores e layout
- Use as variáveis CSS para mudanças globais
- Adicione novos componentes conforme necessário

### Funcionalidades
- Estenda `script.js` para adicionar novas funcionalidades
- Customize a lógica de busca e filtros
- Integre com APIs externas se necessário

##  Funcionalidades Detalhadas

### Toggle de Tema
```javascript
// Automaticamente salva a preferência do usuário
const savedTheme = localStorage.getItem('theme') || 'light';
```

### Sistema de Busca
```javascript
// Busca por título, conteúdo e tags
const isMatch = title.includes(searchTerm) || 
               content.includes(searchTerm) || 
               tags.includes(searchTerm);
```

### Tempo de Leitura
```javascript
// Baseado em 240 palavras por minuto
const minutes = Math.ceil(wordCount / wordsPerMinute);
```

## Customização de Cores

O projeto usa variáveis CSS para fácil personalização:

```css
:root {
  --theme-toggle-bg: #374151;
  --theme-toggle-color: #f9fafb;
}

[data-theme="dark"] {
  --theme-toggle-bg: #f59e0b;
  --theme-toggle-color: #1f2937;
}
```

##  Próximos Passos

- [ ] Adicionar sistema de comentários
- [ ] Implementar categorias de posts
- [ ] Adicionar RSS feed
- [ ] Integrar com CMS headless
- [ ] Implementar PWA features
- [ ] Adicionar analytics

##  Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

##  Agradecimentos

- [Pico.css](https://picocss.com/) pela framework CSS minimalista
- [Unsplash](https://unsplash.com/) pelas imagens de alta qualidade
- [Replit](https://replit.com/) pela plataforma de desenvolvimento

##  Contato

- **GitHub**: https://github.com/DevNinee

---

⭐ **Deixe uma estrela se este projeto te ajudou!**

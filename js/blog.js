document.addEventListener("DOMContentLoaded", async () => {
    const blogContainer = document.getElementById("blog-posts");
    
    try {
      const res = await fetch("https://qiita.com/api/v2/users/meronsyu/items");
      if (!res.ok) throw new Error('API request failed.');
      const articles = await res.json();
  
      blogContainer.innerHTML = "";
      articles.slice(0, 5).forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("article-item");
  
        articleElement.innerHTML = `
          <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
          <p>${article.tags.map(tag => `#${tag.name}`).join(" ")}</p>
          <p>❤️ ${article.likes_count}</p>
        `;
        blogContainer.appendChild(articleElement);
      });
    } catch (error) {
      blogContainer.innerHTML = "<p>Error loading articles.</p>";
      console.error(error);
    }
  });
  
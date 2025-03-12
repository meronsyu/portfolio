document.addEventListener("DOMContentLoaded", async () => {
    const workContainer = document.getElementById("github-projects");
    const repositories = ["meronsyu/seccamp-submission", "meronsyu/vuln_sent_ai"];
  
    try {
      workContainer.innerHTML = "";
      for (const repo of repositories) {
        const res = await fetch(`https://api.github.com/repos/${repo}`);
        if (!res.ok) throw new Error('API request failed.');
        const repoData = await res.json();
  
        const repoElement = document.createElement("div");
        repoElement.innerHTML = `
          <h2><a href="${repoData.html_url}" target="_blank">${repoData.name}</a></h2>
          <p>${repoData.description || "No description available."}</p>
          <p>Language: ${repoData.language || "Unknown"}</p>
          <p>Stars: ⭐${repoData.stargazers_count}</p>
        `;
        workContainer.appendChild(repoElement);
      }
    } catch (error) {
      console.error("GitHub API Fetch Error:", error);
      workContainer.innerHTML = "<p>Error loading GitHub repositories.</p>";
    }
  });
  
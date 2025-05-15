const BASE = "https://cdn.jsdelivr.net/gh/robgalvinco/rgpt-page-sections@main";

$(async function () {
  const res = await fetch(`${BASE}/library.json`);
  const data = await res.json();

  function render(data) {
    $("#grid").empty();
    data.forEach(entry => {
      const imgURL = `${BASE}/image-prompt-library/${entry.image}`;
      const card = $(`
        <div class="card">
          <img src="${imgURL}" alt="${entry.id}">
          <div class="card-content">
            <div class="id">🆔 ${entry.id}</div>
            <div class="prompt">${entry.prompt.replace(/\n/g, '<br>')}</div>
            <div class="tags">${entry.categories.map(cat => `<span class="tag">${cat}</span>`).join(' ')}</div>
            ${entry.video ? `<a class="video-link" href="${entry.video}" target="_blank">🎥 Watch Tutorial</a>` : ''}
          </div>
        </div>
      `);
      $("#grid").append(card);
    });
  }

  render(data);

  $("#search").on("input", function () {
    const query = $(this).val().toLowerCase();
    const filtered = data.filter(item =>
      item.id.toLowerCase().includes(query) ||
      item.prompt.toLowerCase().includes(query) ||
      item.categories.some(cat => cat.toLowerCase().includes(query))
    );
    render(filtered);
  });
});

/***************************************************
 * 1. SAMPLE DATA
 ***************************************************/
const allHashes = [];
for (let i = 1; i <= 390; i++) {
  // Example hash text
  const randomHash = Math.random().toString(36).substring(2, 15);
  allHashes.push(`${i}. ${randomHash}${randomHash}`);
}

// For demonstration, let's say total votes is 1500:
const totalVotes = 1500;

/***************************************************
 * 2. PAGINATION & STATE
 ***************************************************/
// We want 90 items per page (30 items per column * 3 columns).
const itemsPerPage = 90;
let currentPage = 1;
let searchQuery = ""; // We'll store the user query, for highlighting

// We'll keep all items visible (in the sense that we don't remove them),
// but we only show 90 items per "page".
function getTotalPages() {
  return Math.ceil(allHashes.length / itemsPerPage);
}

/***************************************************
 * 3. RENDER FUNCTION
 ***************************************************/
function render() {
  // Update total votes display
  document.getElementById("totalVotes").textContent = totalVotes.toLocaleString();

  // Calculate start and end for pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageItems = allHashes.slice(startIndex, endIndex);

  // We'll split these pageItems into 3 columns of 30 each
  const columnCount = 3;
  const itemsPerColumn = 30;
  const hashesGrid = document.getElementById("hashesGrid");
  hashesGrid.innerHTML = ""; // clear old content

  for (let col = 0; col < columnCount; col++) {
    const columnStart = col * itemsPerColumn;
    const columnEnd = columnStart + itemsPerColumn;
    const columnItems = pageItems.slice(columnStart, columnEnd);

    // Create a div for each column
    const colDiv = document.createElement("div");
    colDiv.className = "hash-column";

    // Build lines for each item in this column, highlighting if needed
    const linesHtml = columnItems.map((item) => highlightText(item, searchQuery)).join("");
    colDiv.innerHTML = linesHtml;

    hashesGrid.appendChild(colDiv);
  }

  // Update pagination text
  const pageInfo = document.getElementById("pageInfo");
  pageInfo.textContent = `Page ${currentPage} of ${getTotalPages()}`;

  // Disable/enable buttons as needed
  document.getElementById("prevBtn").disabled = currentPage === 1;
  document.getElementById("nextBtn").disabled = currentPage === getTotalPages();
}

/***************************************************
 * 4. HIGHLIGHT FUNCTION
 * Wrap matching parts of 'text' with <span class="highlight">.
 ***************************************************/
function highlightText(text, query) {
  if (!query) return `<div>${text}</div>`; // no highlight if query is empty

  // Escape special regex chars in query
  const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(safeQuery, "gi");

  // Replace matches with <span class="highlight">
  const highlighted = text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
  return `<div>${highlighted}</div>`;
}

/***************************************************
 * 5. SEARCH + SCROLL TO MATCH
 ***************************************************/
function performSearch() {
  searchQuery = document.getElementById("searchInput").value.trim();
  if (!searchQuery) {
    // If empty, just reset to page 1
    currentPage = 1;
    render();
    return;
  }

  // We highlight across all items, but also find the index of the first match
  let firstMatchIndex = -1;
  for (let i = 0; i < allHashes.length; i++) {
    if (allHashes[i].toLowerCase().includes(searchQuery.toLowerCase())) {
      firstMatchIndex = i;
      break;
    }
  }

  if (firstMatchIndex === -1) {
    // No match found, no highlight
    alert("No matches found.");
    searchQuery = ""; // clear the query so we don't highlight anything
    render();
    return;
  }

  // Found a match at firstMatchIndex. Figure out what page it's on:
  currentPage = Math.floor(firstMatchIndex / itemsPerPage) + 1;

  // Re-render so that page is loaded and matches are highlighted
  render();
}

/***************************************************
 * 6. EVENT HANDLERS
 ***************************************************/
// Next / Prev Buttons
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    render();
  }
});
document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentPage < getTotalPages()) {
    currentPage++;
    render();
  }
});

// Search
document.getElementById("searchBtn").addEventListener("click", () => {
  performSearch();
});
document.getElementById("searchInput").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    performSearch();
  }
});

/***************************************************
 * 7. INITIAL RENDER
 ***************************************************/
render();

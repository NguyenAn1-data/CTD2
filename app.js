/**
 * AI Campus FAQ Chatbot - Application Engine
 * Interactive streaming, smart search matching, audio narration & rich UI controls.
 */

// Global State
const state = {
  chatHistory: [],
  isTyping: false,
  activeFilter: 'all',
  theme: localStorage.getItem('ai_campus_theme') || 'dark',
  isSpeaking: false,
  currentUtterance: null
};

// DOM References
const elements = {
  sidebar: document.getElementById('sidebar'),
  sidebarOverlay: document.getElementById('sidebarOverlay'),
  sidebarToggleBtn: document.getElementById('sidebarToggleBtn'),
  closeSidebarBtn: document.getElementById('closeSidebarBtn'),
  faqListContainer: document.getElementById('faqListContainer'),
  categoryFilters: document.getElementById('categoryFilters'),
  sidebarSearchInput: document.getElementById('sidebarSearchInput'),
  chatMessagesContainer: document.getElementById('chatMessagesContainer'),
  welcomeHero: document.getElementById('welcomeHero'),
  chatForm: document.getElementById('chatForm'),
  chatInput: document.getElementById('chatInput'),
  sendBtn: document.getElementById('sendBtn'),
  clearChatBtn: document.getElementById('clearChatBtn'),
  exportChatBtn: document.getElementById('exportChatBtn'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  themeIcon: document.getElementById('themeIcon'),
  inputChipsBar: document.getElementById('inputChipsBar'),
  typingIndicator: document.getElementById('typingIndicator'),
  typingStatusText: document.getElementById('typingStatusText'),
  scrollToBottomBtn: document.getElementById('scrollToBottomBtn')
};

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderCategoryFilters();
  renderSidebarFAQList(FAQ_DATA);
  renderStarterPills();
  bindEvents();
});

// ==========================================================================
// Theme Management
// ==========================================================================
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('ai_campus_theme', state.theme);
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  if (elements.themeIcon) {
    elements.themeIcon.innerHTML = state.theme === 'dark'
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
}

// ==========================================================================
// Sidebar & Category Filters
// ==========================================================================
function renderCategoryFilters() {
  if (!elements.categoryFilters) return;
  elements.categoryFilters.innerHTML = '';

  FAQ_CATEGORIES.forEach(cat => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = `category-chip ${cat.id === state.activeFilter ? 'active' : ''}`;
    chip.textContent = `${cat.name} (${cat.count})`;
    chip.dataset.categoryId = cat.id;
    chip.addEventListener('click', () => {
      state.activeFilter = cat.id;
      document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      filterSidebarFAQs();
    });
    elements.categoryFilters.appendChild(chip);
  });
}

function filterSidebarFAQs() {
  const searchTerm = elements.sidebarSearchInput ? elements.sidebarSearchInput.value.toLowerCase().trim() : '';

  let filtered = FAQ_DATA.filter(item => {
    const matchesCategory = state.activeFilter === 'all' || item.category === state.activeFilter;
    const matchesSearch = !searchTerm ||
      item.question.toLowerCase().includes(searchTerm) ||
      item.shortSummary.toLowerCase().includes(searchTerm) ||
      item.tags.some(t => t.toLowerCase().includes(searchTerm));
    return matchesCategory && matchesSearch;
  });

  renderSidebarFAQList(filtered);
}

function renderSidebarFAQList(items) {
  if (!elements.faqListContainer) return;
  elements.faqListContainer.innerHTML = '';

  if (items.length === 0) {
    elements.faqListContainer.innerHTML = `
      <div style="text-align:center; padding: 24px 12px; color: var(--text-muted); font-size: 0.85rem;">
        No FAQ topics matched your query.
      </div>
    `;
    return;
  }

  items.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'faq-nav-item';
    card.id = `nav-${item.id}`;

    // Get true index from FAQ_DATA
    const globalIdx = FAQ_DATA.findIndex(f => f.id === item.id) + 1;

    card.innerHTML = `
      <div class="faq-nav-item-meta">
        <span class="faq-tag-badge">${item.badge}</span>
        <span class="faq-q-number">Q${globalIdx < 10 ? '0' + globalIdx : globalIdx}</span>
      </div>
      <div class="faq-nav-title">${escapeHtml(item.question)}</div>
    `;

    card.addEventListener('click', () => {
      // Highlight in sidebar
      document.querySelectorAll('.faq-nav-item').forEach(el => el.classList.remove('active'));
      card.classList.add('active');

      // Close mobile drawer if open
      closeSidebar();

      // Trigger question in chat
      askQuestionById(item.id);
    });

    elements.faqListContainer.appendChild(card);
  });
}

// ==========================================================================
// Starter Suggestions Pills
// ==========================================================================
function renderStarterPills() {
  if (!elements.inputChipsBar) return;
  elements.inputChipsBar.innerHTML = '';

  const sampleQuestions = [
    { text: "Predictive vs Prescriptive AI?", id: "faq-5" },
    { text: "Enterprise Security & GDPR?", id: "faq-6" },
    { text: "Decision Autonomy & HITL?", id: "faq-8" },
    { text: "Quantifying 1-Yr ROI?", id: "faq-9" },
    { text: "12-Week Implementation?", id: "faq-10" }
  ];

  sampleQuestions.forEach(sample => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'input-quick-chip';
    chip.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
      <span>${sample.text}</span>
    `;
    chip.addEventListener('click', () => {
      askQuestionById(sample.id);
    });
    elements.inputChipsBar.appendChild(chip);
  });
}

// ==========================================================================
// Event Listeners
// ==========================================================================
function bindEvents() {
  // Mobile drawer controls
  if (elements.sidebarToggleBtn) {
    elements.sidebarToggleBtn.addEventListener('click', openSidebar);
  }
  if (elements.closeSidebarBtn) {
    elements.closeSidebarBtn.addEventListener('click', closeSidebar);
  }
  if (elements.sidebarOverlay) {
    elements.sidebarOverlay.addEventListener('click', closeSidebar);
  }

  // Live search in sidebar
  if (elements.sidebarSearchInput) {
    elements.sidebarSearchInput.addEventListener('input', filterSidebarFAQs);
  }

  // Chat Form submission
  if (elements.chatForm) {
    elements.chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleUserSubmit();
    });
  }

  // Chat Textarea keyboard shortcuts & auto-grow
  if (elements.chatInput) {
    elements.chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleUserSubmit();
      }
    });

    elements.chatInput.addEventListener('input', () => {
      elements.chatInput.style.height = 'auto';
      elements.chatInput.style.height = Math.min(elements.chatInput.scrollHeight, 140) + 'px';
      elements.sendBtn.disabled = !elements.chatInput.value.trim();
    });
  }

  // Clear chat
  if (elements.clearChatBtn) {
    elements.clearChatBtn.addEventListener('click', resetChat);
  }

  // Export chat transcript
  if (elements.exportChatBtn) {
    elements.exportChatBtn.addEventListener('click', exportChatTranscript);
  }

  // Theme switch
  if (elements.themeToggleBtn) {
    elements.themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Click delegates for Starter Cards in Welcome Hero
  document.querySelectorAll('.starter-card').forEach(card => {
    card.addEventListener('click', () => {
      const qid = card.dataset.faqId;
      if (qid) askQuestionById(qid);
    });
  });

  // Scroll to bottom button
  if (elements.scrollToBottomBtn) {
    elements.scrollToBottomBtn.addEventListener('click', () => {
      if (elements.chatMessagesContainer) {
        elements.chatMessagesContainer.scrollTo({
          top: elements.chatMessagesContainer.scrollHeight,
          behavior: 'smooth'
        });
      }
    });
  }

  // Monitor chat scroll to show/hide scroll to bottom button
  if (elements.chatMessagesContainer && elements.scrollToBottomBtn) {
    elements.chatMessagesContainer.addEventListener('scroll', () => {
      const distFromBottom = elements.chatMessagesContainer.scrollHeight -
                             elements.chatMessagesContainer.scrollTop -
                             elements.chatMessagesContainer.clientHeight;
      if (distFromBottom > 140) {
        elements.scrollToBottomBtn.classList.add('visible');
      } else {
        elements.scrollToBottomBtn.classList.remove('visible');
      }
    });
  }

  // Mobile virtual keyboard & focus adjustments
  if (elements.chatInput) {
    elements.chatInput.addEventListener('focus', () => {
      setTimeout(() => {
        scrollToBottom();
      }, 260);
    });
  }

  if (window.visualViewport && elements.chatMessagesContainer) {
    window.visualViewport.addEventListener('resize', () => {
      if (document.activeElement === elements.chatInput) {
        scrollToBottom();
      }
    });
  }

  // Touch Gestures: Swipe left to close sidebar, swipe from left edge to open
  let touchStartX = 0;
  let touchStartY = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    // Horizontal swipe check: diffX is dominant over diffY
    if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      if (diffX < 0 && elements.sidebar.classList.contains('open')) {
        closeSidebar();
      } else if (diffX > 0 && touchStartX < 45 && !elements.sidebar.classList.contains('open')) {
        openSidebar();
      }
    }
  }, { passive: true });
}

function openSidebar() {
  elements.sidebar.classList.add('open');
  elements.sidebarOverlay.classList.add('active');
  document.body.classList.add('drawer-open');
}

function closeSidebar() {
  elements.sidebar.classList.remove('open');
  elements.sidebarOverlay.classList.remove('active');
  document.body.classList.remove('drawer-open');
}

// ==========================================================================
// Chat Logic & Streaming
// ==========================================================================
function askQuestionById(faqId) {
  const faq = FAQ_DATA.find(item => item.id === faqId);
  if (!faq || state.isTyping) return;

  hideWelcomeHero();
  appendUserMessage(faq.question);
  simulateBotResponse(faq);
}

function handleUserSubmit() {
  if (state.isTyping) return;
  const query = elements.chatInput.value.trim();
  if (!query) return;

  // Reset textarea
  elements.chatInput.value = '';
  elements.chatInput.style.height = 'auto';
  elements.sendBtn.disabled = true;

  hideWelcomeHero();
  appendUserMessage(query);

  // Match query against FAQ dataset
  const matches = searchFAQ(query);

  if (matches.length > 0) {
    // Found a strong relevant FAQ item
    simulateBotResponse(matches[0], query);
  } else {
    // Deliver intelligent fallback answering data-driven decision concepts with suggested links
    simulateFallbackResponse(query);
  }
}

function hideWelcomeHero() {
  if (elements.welcomeHero) {
    elements.welcomeHero.style.display = 'none';
  }
}

function resetChat() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  state.chatHistory = [];
  elements.chatMessagesContainer.innerHTML = '';
  if (elements.welcomeHero) {
    elements.welcomeHero.style.display = 'flex';
    elements.chatMessagesContainer.appendChild(elements.welcomeHero);
  }
  document.querySelectorAll('.faq-nav-item').forEach(el => el.classList.remove('active'));
}

// Append User Message to UI
function appendUserMessage(text) {
  state.chatHistory.push({ role: 'user', content: text });

  const row = document.createElement('div');
  row.className = 'chat-row user-row';
  row.innerHTML = `
    <div class="message-bubble user-bubble">${escapeHtml(text)}</div>
    <div class="avatar user-avatar">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    </div>
  `;
  elements.chatMessagesContainer.appendChild(row);
  scrollToBottom();
}

// Bot Response Simulator with Realistic Typewriter Effect
function simulateBotResponse(faqItem, originalQuery = null) {
  state.isTyping = true;
  showTypingIndicator("Consulting AI Campus Decision Intelligence Core...");

  // Delay to simulate enterprise reasoning/synthesis
  setTimeout(() => {
    hideTypingIndicator();

    const row = document.createElement('div');
    row.className = 'chat-row bot-row';

    const botAvatar = document.createElement('div');
    botAvatar.className = 'avatar bot-avatar';
    botAvatar.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>`;

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble bot-bubble';

    // Metrics strip HTML
    let metricsHtml = '';
    if (faqItem.keyMetrics && faqItem.keyMetrics.length > 0) {
      metricsHtml = `
        <div class="metrics-strip">
          ${faqItem.keyMetrics.map(m => `
            <div class="metric-pill">
              <div class="metric-label">${escapeHtml(m.label)}</div>
              <div class="metric-value">${escapeHtml(m.value)}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    const contentDiv = document.createElement('div');
    contentDiv.className = 'bot-markdown-content';

    bubble.appendChild(contentDiv);
    row.appendChild(botAvatar);
    row.appendChild(bubble);
    elements.chatMessagesContainer.appendChild(row);

    // Markdown rendered text
    const fullRenderedHtml = metricsHtml + renderMarkdown(faqItem.answer);

    // Perform smooth typewriter streaming
    streamTextToElement(contentDiv, fullRenderedHtml, () => {
      // Once typing finishes, attach action buttons & follow-up suggestions
      attachMessageActions(bubble, faqItem);
      state.isTyping = false;
      state.chatHistory.push({ role: 'assistant', content: faqItem.answer });
      scrollToBottom();
    });

  }, 650);
}

// Fallback response for unindexed queries
function simulateFallbackResponse(userQuery) {
  state.isTyping = true;
  showTypingIndicator("Synthesizing enterprise decision models...");

  setTimeout(() => {
    hideTypingIndicator();

    const row = document.createElement('div');
    row.className = 'chat-row bot-row';

    const botAvatar = document.createElement('div');
    botAvatar.className = 'avatar bot-avatar';
    botAvatar.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>`;

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble bot-bubble';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'bot-markdown-content';

    bubble.appendChild(contentDiv);
    row.appendChild(botAvatar);
    row.appendChild(bubble);
    elements.chatMessagesContainer.appendChild(row);

    const fallbackMarkdown = `
### Enterprise Decision Intelligence Analysis
Regarding your query: *"**${escapeHtml(userQuery)}**"*

In enterprise data-driven decision making (DDDM), strategic success rests upon 3 foundational pillars:
1. **Empirical Grounding:** Eliminating reliance on gut feeling through high-fidelity data pipelines and automated variance tracking.
2. **Predictive to Prescriptive Optimization:** Moving beyond static charts to multi-objective constraint solvers that recommend optimal resource allocation.
3. **Calibrated Governance:** Safeguarding organizational assets with Zero-Trust access and Human-in-the-Loop (HITL) authorization thresholds.

> **Recommended Exploration:** You may find direct answers in these related core FAQ modules below:
    `;

    const rendered = renderMarkdown(fallbackMarkdown);

    streamTextToElement(contentDiv, rendered, () => {
      // Add chips for Q1, Q5, Q9
      const followupDiv = document.createElement('div');
      followupDiv.className = 'followup-container';
      followupDiv.innerHTML = `
        <div class="followup-label">Related Campus FAQ Topics:</div>
        <div class="followup-chips">
          <button class="followup-chip" onclick="askQuestionById('faq-1')">Q1: DDDM Fundamentals & Leadership</button>
          <button class="followup-chip" onclick="askQuestionById('faq-5')">Q5: Predictive to Prescriptive</button>
          <button class="followup-chip" onclick="askQuestionById('faq-9')">Q9: Benchmarking Financial ROI</button>
        </div>
      `;
      bubble.appendChild(followupDiv);

      state.isTyping = false;
      state.chatHistory.push({ role: 'assistant', content: fallbackMarkdown });
      scrollToBottom();
    });

  }, 700);
}

// ==========================================================================
// Realistic Typewriter Streaming
// ==========================================================================
function streamTextToElement(targetEl, fullHtml, onComplete) {
  targetEl.innerHTML = fullHtml;
  const allNodes = Array.from(targetEl.children);

  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  targetEl.appendChild(cursor);

  // Quick fade-in cascade for rich HTML elements
  allNodes.forEach((node, idx) => {
    node.style.opacity = '0';
    node.style.transform = 'translateY(6px)';
    node.style.transition = 'all 0.18s cubic-bezier(0.16, 1, 0.3, 1)';

    setTimeout(() => {
      node.style.opacity = '1';
      node.style.transform = 'translateY(0)';
      scrollToBottom();
      if (idx === allNodes.length - 1) {
        if (cursor.parentNode) cursor.remove();
        if (onComplete) onComplete();
      }
    }, (idx + 1) * 70);
  });

  if (allNodes.length === 0) {
    if (cursor.parentNode) cursor.remove();
    if (onComplete) onComplete();
  }
}

function showTypingIndicator(statusText) {
  if (elements.typingIndicator) {
    elements.typingIndicator.style.display = 'flex';
    if (elements.typingStatusText && statusText) {
      elements.typingStatusText.textContent = statusText;
    }
    scrollToBottom();
  }
}

function hideTypingIndicator() {
  if (elements.typingIndicator) {
    elements.typingIndicator.style.display = 'none';
  }
}

function scrollToBottom() {
  if (elements.chatMessagesContainer) {
    elements.chatMessagesContainer.scrollTop = elements.chatMessagesContainer.scrollHeight;
  }
}

// ==========================================================================
// Action Buttons & Follow-ups
// ==========================================================================
function attachMessageActions(bubbleEl, faqItem) {
  const actionsBar = document.createElement('div');
  actionsBar.className = 'message-actions';

  // Copy button
  const copyBtn = document.createElement('button');
  copyBtn.className = 'msg-action-btn';
  copyBtn.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
    <span>Copy</span>
  `;
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(faqItem.answer).then(() => {
      copyBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Copied!</span>
      `;
      copyBtn.classList.add('active');
      setTimeout(() => {
        copyBtn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          <span>Copy</span>
        `;
        copyBtn.classList.remove('active');
      }, 2000);
    });
  });

  // Text to Speech Narrator
  const speakBtn = document.createElement('button');
  speakBtn.className = 'msg-action-btn';
  speakBtn.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
    <span>Read Aloud</span>
  `;
  speakBtn.addEventListener('click', () => {
    if (!('speechSynthesis' in window)) {
      alert("Speech synthesis is not supported on this browser.");
      return;
    }
    if (state.isSpeaking) {
      window.speechSynthesis.cancel();
      state.isSpeaking = false;
      speakBtn.classList.remove('active');
      speakBtn.querySelector('span').textContent = 'Read Aloud';
    } else {
      window.speechSynthesis.cancel();
      // Strip markdown syntax for natural voice
      const cleanText = faqItem.answer.replace(/[*#>|`-]/g, ' ').replace(/\s+/g, ' ');
      state.currentUtterance = new SpeechSynthesisUtterance(cleanText);
      state.currentUtterance.rate = 1.05;
      state.currentUtterance.pitch = 1.0;
      state.currentUtterance.onend = () => {
        state.isSpeaking = false;
        speakBtn.classList.remove('active');
        speakBtn.querySelector('span').textContent = 'Read Aloud';
      };
      window.speechSynthesis.speak(state.currentUtterance);
      state.isSpeaking = true;
      speakBtn.classList.add('active');
      speakBtn.querySelector('span').textContent = 'Stop Reading';
    }
  });

  // Helpful thumbs rating
  const likeBtn = document.createElement('button');
  likeBtn.className = 'msg-action-btn';
  likeBtn.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
    <span>Helpful</span>
  `;
  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('active');
  });

  actionsBar.appendChild(copyBtn);
  actionsBar.appendChild(speakBtn);
  actionsBar.appendChild(likeBtn);
  bubbleEl.appendChild(actionsBar);

  // Follow-up Suggestion Chips
  if (faqItem.followUps && faqItem.followUps.length > 0) {
    const followupDiv = document.createElement('div');
    followupDiv.className = 'followup-container';
    followupDiv.innerHTML = `<div class="followup-label">Next Suggested Inquiries:</div>`;

    const chipsWrapper = document.createElement('div');
    chipsWrapper.className = 'followup-chips';

    faqItem.followUps.forEach(fId => {
      const followFaq = FAQ_DATA.find(x => x.id === fId);
      if (followFaq) {
        const chip = document.createElement('button');
        chip.className = 'followup-chip';
        chip.textContent = followFaq.question;
        chip.addEventListener('click', () => {
          askQuestionById(followFaq.id);
        });
        chipsWrapper.appendChild(chip);
      }
    });

    followupDiv.appendChild(chipsWrapper);
    bubbleEl.appendChild(followupDiv);
  }
}

// ==========================================================================
// Export Transcript
// ==========================================================================
function exportChatTranscript() {
  if (state.chatHistory.length === 0) {
    alert("No active conversation to export. Ask a question first!");
    return;
  }

  let markdown = `# AI Campus FAQ - Enterprise Data-Driven Decision Making Transcript\n`;
  markdown += `Generated on: ${new Date().toLocaleString()}\n\n---\n\n`;

  state.chatHistory.forEach(msg => {
    const author = msg.role === 'user' ? '👤 Executive User' : '🤖 AI Campus Decision Co-Pilot';
    markdown += `### ${author}\n\n${msg.content}\n\n---\n\n`;
  });

  const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `AI-Campus-Decision-FAQ-${Date.now()}.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ==========================================================================
// Lightweight Markdown Renderer Helper
// ==========================================================================
function renderMarkdown(md) {
  if (!md) return '';
  let html = md.trim();

  // Escape HTML tags to prevent XSS
  html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // Math formula blocks ($$...$$)
  html = html.replace(/\$\$([\s\S]+?)\$\$/g, (match, formula) => {
    return `<div style="background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.25); border-radius: var(--radius-sm); padding: 10px 14px; margin: 12px 0; font-family: var(--font-mono); font-size: 0.88rem; color: #a5b4fc; overflow-x: auto; text-align: center;">${formula.trim()}</div>`;
  });

  // Code blocks (```...```)
  html = html.replace(/```(?:[a-zA-Z0-9_-]+)?\n([\s\S]+?)```/g, (match, code) => {
    return `<pre style="background: rgba(15,23,42,0.9); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px 14px; margin: 12px 0; overflow-x: auto; font-family: var(--font-mono); font-size: 0.84rem; color: #38bdf8; line-height: 1.5;"><code>${code.trim()}</code></pre>`;
  });

  // Blockquotes (> text)
  html = html.replace(/^&gt;\s+(.+)$/gm, '<blockquote>$1</blockquote>');

  // Headers (###, ##)
  html = html.replace(/^###\s+(.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^##\s+(.+)$/gm, '<h2>$1</h2>');

  // Bold & Italic
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Inline Code (`code`)
  html = html.replace(/`([^`]+)`/g, '<code style="background:rgba(99,102,241,0.15); padding:2px 6px; border-radius:4px; font-family:var(--font-mono); color:#a5b4fc; font-size:0.86em;">$1</code>');

  // Parse Markdown tables
  const lines = html.split('\n');
  let inTable = false;
  let tableBuffer = [];
  const processedLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('|') && line.endsWith('|')) {
      inTable = true;
      tableBuffer.push(line);
    } else {
      if (inTable) {
        processedLines.push(convertTableBufferToHtml(tableBuffer));
        tableBuffer = [];
        inTable = false;
      }
      processedLines.push(line);
    }
  }
  if (inTable && tableBuffer.length > 0) {
    processedLines.push(convertTableBufferToHtml(tableBuffer));
  }

  html = processedLines.join('\n');

  // Lists: Unordered & Ordered
  // Group adjacent list items into <ul> or <ol>
  const finalLines = html.split('\n');
  let inUl = false;
  let inOl = false;
  const listProcessed = [];

  for (let i = 0; i < finalLines.length; i++) {
    const line = finalLines[i];
    const isUlItem = /^\*\s+(.+)$/.test(line.trim());
    const isOlItem = /^\d+\.\s+(.+)$/.test(line.trim());

    if (isUlItem) {
      if (!inUl) {
        if (inOl) { listProcessed.push('</ol>'); inOl = false; }
        listProcessed.push('<ul>');
        inUl = true;
      }
      listProcessed.push(line.trim().replace(/^\*\s+(.+)$/, '<li>$1</li>'));
    } else if (isOlItem) {
      if (!inOl) {
        if (inUl) { listProcessed.push('</ul>'); inUl = false; }
        listProcessed.push('<ol>');
        inOl = true;
      }
      listProcessed.push(line.trim().replace(/^\d+\.\s+(.+)$/, '<li>$1</li>'));
    } else {
      if (inUl) { listProcessed.push('</ul>'); inUl = false; }
      if (inOl) { listProcessed.push('</ol>'); inOl = false; }
      listProcessed.push(line);
    }
  }
  if (inUl) listProcessed.push('</ul>');
  if (inOl) listProcessed.push('</ol>');

  html = listProcessed.join('\n');

  // Paragraph breaks for non-block elements
  html = html.split('\n\n').map(p => {
    p = p.trim();
    if (!p) return '';
    if (p.startsWith('<h') || p.startsWith('<ul') || p.startsWith('<ol') ||
        p.startsWith('<blockquote') || p.startsWith('<table') ||
        p.startsWith('<pre') || p.startsWith('<div')) {
      return p;
    }
    return `<p>${p}</p>`;
  }).join('');

  return html;
}

function convertTableBufferToHtml(buffer) {
  if (buffer.length < 2) return buffer.join('\n');
  const headers = buffer[0].split('|').filter(c => c.trim() !== '').map(c => c.trim());
  // skip separator line (buffer[1])
  const rows = buffer.slice(2).map(rowStr => {
    return rowStr.split('|').filter(c => c.trim() !== '').map(c => c.trim());
  });

  let tableHtml = '<table><thead><tr>';
  headers.forEach(h => {
    tableHtml += `<th>${h}</th>`;
  });
  tableHtml += '</tr></thead><tbody>';

  rows.forEach(r => {
    tableHtml += '<tr>';
    r.forEach(cell => {
      tableHtml += `<td>${cell}</td>`;
    });
    tableHtml += '</tr>';
  });
  tableHtml += '</tbody></table>';

  return `<div class="table-responsive-wrapper">${tableHtml}</div>`;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}

// Make askQuestionById accessible to inline click handlers
window.askQuestionById = askQuestionById;

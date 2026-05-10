/* ============================================================
   AGENTROPOLIS CHAOS RANK — app.js
   Vanilla JS · No dependencies · Mobile-ready
   ============================================================ */

(function () {
  'use strict';

  /* ── Mobile Nav ── */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks  = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* ── Animated Terminal ── */
  function runTerminal(el) {
    if (!el) return;
    const lines = [
      { prompt: 'chaos@rank:~$', cmd: ' ./init-agent --district=CHAOS_RANK' },
      { out: '  ⟶ Loading agent registry...' },
      { out: '  ⟶ Indexing 6 skills...' },
      { out: '  ⟶ Compiling evidence graph...' },
      { prompt: 'chaos@rank:~$', cmd: ' ./audit --mode=geo --target=llm-search' },
      { out: '  ⟶ Scanning AI search endpoints...' },
      { out: '  ⟶ Claim validation: 12/12 PASS' },
      { out: '  ⟶ Schema coverage: 98.4%' },
      { prompt: 'chaos@rank:~$', cmd: ' ./publish --llms-txt --sitemap --citations' },
      { ok:  '  ✓ Infrastructure deployed. CHAOS RANK is live.' },
      { prompt: 'chaos@rank:~$', cmd: ' _' },
    ];

    el.innerHTML = '';
    let i = 0;
    const delay = ms => new Promise(r => setTimeout(r, ms));

    async function typeLine(lineEl, text) {
      for (let c = 0; c < text.length; c++) {
        lineEl.textContent += text[c];
        await delay(18 + Math.random() * 22);
      }
    }

    async function run() {
      for (const line of lines) {
        const row = document.createElement('div');
        row.className = 't-line';
        el.appendChild(row);

        if (line.prompt) {
          const p = document.createElement('span');
          p.className = 't-prompt';
          p.textContent = line.prompt;
          row.appendChild(p);
          const c = document.createElement('span');
          c.className = 't-cmd';
          row.appendChild(c);
          await typeLine(c, line.cmd);
          await delay(300);
        } else if (line.out) {
          const s = document.createElement('span');
          s.className = 't-out';
          s.textContent = line.out;
          row.appendChild(s);
          await delay(150);
        } else if (line.ok) {
          const s = document.createElement('span');
          s.className = 't-ok';
          s.textContent = line.ok;
          row.appendChild(s);
          await delay(200);
        }
        el.scrollTop = el.scrollHeight;
      }
    }

    run();
  }

  /* ── IntersectionObserver for animations ── */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeup');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.animate-delay-1, .animate-delay-2, .animate-delay-3, .animate-delay-4')
    .forEach(el => observer.observe(el));

  /* ── Skills / Agents from JSON ── */
  async function loadData(url) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    } catch (e) {
      console.warn('Could not load', url, e);
      return null;
    }
  }

  const SKILL_ICONS = {
    'ugc-harvester':      '🕸️',
    'evidence-graph':     '🔗',
    'geo-audit':          '🛰️',
    'schema-builder':     '🧬',
    'prompt-rank-tracker':'📡',
    'agent-citation-page':'🤖',
  };

  function renderSkills(skills, container) {
    if (!container || !skills) return;
    container.innerHTML = '';
    skills.forEach((skill, i) => {
      const delay = (i % 4) + 1;
      const icon = SKILL_ICONS[skill.id] || '⚙️';
      const href = `/skills/${skill.id}/SKILL.md`;
      const a = document.createElement('a');
      a.href = href;
      a.className = `skill-card glass animate-delay-${delay}`;
      a.setAttribute('aria-label', `View skill: ${skill.name}`);
      a.innerHTML = `
        <div class="skill-card-header">
          <div class="skill-card-icon">${icon}</div>
          <span class="skill-card-tier">TIER ${skill.tier}</span>
        </div>
        <h4>${skill.name}</h4>
        <p>${skill.description}</p>
        <div class="skill-card-footer">
          <span class="tag tag-cyan">${skill.layer}</span>
          ${skill.tags.map(t => `<span class="tag tag-muted">${t}</span>`).join('')}
        </div>
      `;
      container.appendChild(a);
      observer.observe(a);
    });
  }

  function renderAgents(agents, container) {
    if (!container || !agents) return;
    container.innerHTML = '';
    agents.forEach((agent, i) => {
      const delay = (i % 4) + 1;
      const div = document.createElement('div');
      div.className = `agent-card glass animate-delay-${delay}`;
      div.innerHTML = `
        <div class="agent-avatar">${agent.avatar}</div>
        <h3>${agent.name}</h3>
        <div class="agent-role">${agent.role}</div>
        <p>${agent.summary}</p>
        <ul class="agent-capabilities">
          ${agent.capabilities.slice(0, 4).map(c => `<li>${c}</li>`).join('')}
        </ul>
        <a href="/agents/${agent.id}.html" class="btn btn-primary">View Agent</a>
      `;
      container.appendChild(div);
      observer.observe(div);
    });
  }

  function renderClaims(claims, container) {
    if (!container || !claims) return;
    container.innerHTML = '';
    const strengthMap = { low: 30, medium: 65, high: 90, strong: 100 };
    claims.slice(0, 6).forEach(claim => {
      const pct = strengthMap[claim.evidence_strength] || 50;
      const div = document.createElement('div');
      div.className = 'claim-card glass';
      div.innerHTML = `
        <div class="claim-header">
          <blockquote class="claim-text">"${claim.claim}"</blockquote>
          <span class="tag ${claim.evidence_strength === 'high' || claim.evidence_strength === 'strong' ? 'tag-cyan' : 'tag-muted'}">${claim.evidence_strength}</span>
        </div>
        <div class="claim-meta">
          <span>TOPIC: ${claim.topic}</span>
          <span>SOURCE: ${claim.source_type}</span>
          <a href="${claim.canonical_url}">→ source</a>
        </div>
        <div class="strength-bar"><div class="strength-fill" style="width:0%" data-width="${pct}%"></div></div>
      `;
      container.appendChild(div);
    });
    // Animate strength bars
    setTimeout(() => {
      document.querySelectorAll('.strength-fill').forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
    }, 400);
  }

  /* ── FAQ Accordion ── */
  function initFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
      const q = item.querySelector('.faq-question');
      if (!q) return;
      q.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    });
  }

  /* ── Counter Animation ── */
  function animateCounters() {
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = parseInt(el.dataset.count, 10);
      let current = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current + (el.dataset.suffix || '');
        if (current >= target) clearInterval(timer);
      }, 30);
    });
  }

  const statsObserver = new IntersectionObserver(
    (entries) => {
      if (entries.some(e => e.isIntersecting)) {
        animateCounters();
        statsObserver.disconnect();
      }
    },
    { threshold: 0.3 }
  );
  const statsEl = document.querySelector('.stat-strip');
  if (statsEl) statsObserver.observe(statsEl);

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', async () => {
    initFAQ();

    // Terminal
    const termBody = document.querySelector('.terminal-body');
    if (termBody) runTerminal(termBody);

    // Data-driven rendering
    const [skills, agents, claims] = await Promise.all([
      loadData('/data/skills.json'),
      loadData('/data/agents.json'),
      loadData('/data/claims.json'),
    ]);

    renderSkills(skills, document.querySelector('#skills-grid'));
    renderAgents(agents, document.querySelector('#agents-grid'));
    renderClaims(claims, document.querySelector('#claims-grid'));
  });
})();

import { blogPosts } from '../data/blog-posts';
import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

export function renderBlogPage(): string {
  const postsHTML = blogPosts.map((post, index) => {
    // Add staggered animation delay
    const delay = index * 100;
    return `
    <a href="/blog/${post.slug}" data-route="/blog/${post.slug}" class="blog-card animate-scale-in" style="animation-delay: ${delay}ms; display: flex; flex-direction: column; background: #ffffff; border: 1px solid rgba(0,0,0,0.04); border-radius: 24px; overflow: hidden; text-decoration: none; color: inherit; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);" onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 20px 40px rgba(0, 0, 0, 0.08)'; this.style.borderColor='rgba(59, 130, 246, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 20px rgba(0, 0, 0, 0.03)'; this.style.borderColor='rgba(0,0,0,0.04)';">
      <div style="height: 240px; width: 100%; overflow: hidden; position: relative;">
        <img src="${post.imageUrl}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);" class="blog-img" loading="lazy" />
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 50%);"></div>
        <div style="position: absolute; bottom: 16px; left: 16px; display: flex; gap: 8px; flex-wrap: wrap; z-index: 2;">
          ${post.tags.map(tag => `<span style="background: rgba(255,255,255,0.9); backdrop-filter: blur(4px); color: #1e293b; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; padding: 6px 12px; border-radius: 100px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">${tag}</span>`).join('')}
        </div>
      </div>
      <div style="padding: 32px 28px; display: flex; flex-direction: column; flex-grow: 1;">
        <h3 style="font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 16px 0; line-height: 1.35; letter-spacing: -0.01em;">${post.title}</h3>
        <p style="font-family: 'Inter', sans-serif; color: #64748b; font-size: 0.95rem; line-height: 1.6; margin: 0 0 24px 0; flex-grow: 1;">${post.excerpt}</p>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: auto; border-top: 1px solid #f1f5f9; padding-top: 20px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #e0e7ff, #ede9fe); display: flex; align-items: center; justify-content: center; font-size: 14px; color: #4338ca; font-weight: 700; font-family: 'Inter', sans-serif;">
              ${post.author.charAt(0)}
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.85rem; font-weight: 600; color: #1e293b; font-family: 'Inter', sans-serif;">${post.author}</span>
              <span style="font-size: 0.75rem; color: #94a3b8; font-family: 'Inter', sans-serif;">${new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • ${post.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
    `;
  }).join('');

  return `
    ${renderNavbar()}
    <div class="page-wrapper fade-in" style="background: #f8fafc; min-height: 100vh;">
      
      <!-- Premium Dark Hero -->
      <header class="hero" style="position: relative; padding: 160px 24px 100px; text-align: center; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); overflow: hidden;">
        <!-- Abstract glowing orbs -->
        <div style="position: absolute; top: -20%; left: -10%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>
        <div style="position: absolute; bottom: -20%; right: -10%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>
        
        <div style="max-width: 800px; margin: 0 auto; position: relative; z-index: 2;">
          <span class="animate-fade-in-up" style="display: inline-block; padding: 8px 16px; background: rgba(255,255,255,0.05); color: #94a3b8; font-family: 'Inter', sans-serif; font-weight: 700; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; border-radius: 100px; margin-bottom: 24px; border: 1px solid rgba(255,255,255,0.1);">
            Journal & Guides
          </span>
          <h1 class="animate-fade-in-up delay-100" style="font-family: 'Playfair Display', serif; font-size: clamp(3rem, 6vw, 4.5rem); font-weight: 800; color: #ffffff; margin-bottom: 24px; line-height: 1.1; letter-spacing: -0.02em;">
            Insights & <span style="background: linear-gradient(90deg, #60a5fa, #a78bfa); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Resources</span>
          </h1>
          <p class="animate-fade-in-up delay-200" style="font-family: 'Inter', sans-serif; font-size: 1.15rem; color: #94a3b8; line-height: 1.7; max-width: 600px; margin: 0 auto;">
            Expert advice, technical deep-dives, and actionable guides on software development, AI automation, and scaling modern businesses.
          </p>
        </div>
        
        <!-- Curved bottom separator -->
        <div style="position: absolute; bottom: 0; left: 0; width: 100%; overflow: hidden; line-height: 0; transform: translateY(1px);">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style="position: relative; display: block; width: 100%; height: clamp(24px, 5vw, 60px);">
            <path d="M0,120 C300,0 900,0 1200,120 Z" style="fill: #f8fafc;"></path>
          </svg>
        </div>
      </header>
      
      <style>
        .blog-card:hover .blog-img {
          transform: scale(1.05);
        }
      </style>

      <!-- Blog Grid -->
      <section style="padding: 80px 24px 140px; position: relative; z-index: 5;">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 40px; max-width: 1200px; margin: 0 auto;">
            ${postsHTML}
          </div>
        </div>
      </section>

    </div>
    ${renderFooter()}
  `;
}

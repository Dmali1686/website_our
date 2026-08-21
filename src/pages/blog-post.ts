import type { BlogPost } from '../data/blog-posts';
import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

export function renderBlogPostPage(post: BlogPost): string {
  return `
    ${renderNavbar()}
    <div class="page-wrapper fade-in" style="background: #f8fafc; min-height: 100vh;">
      
      <!-- Premium Dark Article Header -->
      <header style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 140px 24px 160px; text-align: center; position: relative; overflow: hidden;">
        <!-- Abstract glowing orbs -->
        <div style="position: absolute; top: -20%; left: -10%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>
        <div style="position: absolute; bottom: 0; right: 0; width: 400px; height: 400px; background: radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>
        
        <div style="max-width: 900px; margin: 0 auto; position: relative; z-index: 2;">
          <div style="display: flex; gap: 8px; margin-bottom: 24px; justify-content: center; flex-wrap: wrap;">
            ${post.tags.map(tag => `<span style="background: rgba(255,255,255,0.1); color: #e2e8f0; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; padding: 6px 16px; border-radius: 100px; border: 1px solid rgba(255,255,255,0.2);">${tag}</span>`).join('')}
          </div>
          <h1 style="font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; color: #ffffff; margin-bottom: 32px; line-height: 1.15; letter-spacing: -0.02em;">
            ${post.title}
          </h1>
          <div style="display: flex; align-items: center; justify-content: center; gap: 16px;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #8b5cf6); display: flex; align-items: center; justify-content: center; font-size: 20px; color: #ffffff; font-family: 'Inter', sans-serif; font-weight: 700; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
              ${post.author.charAt(0)}
            </div>
            <div style="text-align: left;">
              <div style="font-weight: 600; color: #f8fafc; font-family: 'Inter', sans-serif; font-size: 1rem;">${post.author}</div>
              <div style="font-size: 0.85rem; color: #94a3b8; font-family: 'Inter', sans-serif;">
                ${new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • ${post.readTime}
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Featured Image Overlapping Header -->
      <div style="max-width: 1000px; margin: -100px auto 0; padding: 0 24px; position: relative; z-index: 10;">
        <img src="${post.imageUrl}" alt="${post.title}" style="width: 100%; height: auto; max-height: 600px; object-fit: cover; border-radius: 24px; box-shadow: 0 20px 50px rgba(0,0,0,0.2); display: block;" />
      </div>

      <!-- Article Content -->
      <article style="max-width: 760px; margin: 0 auto; padding: 80px 24px; font-family: 'Inter', sans-serif; font-size: 1.15rem; line-height: 1.8; color: #334155;" class="blog-content">
        <style>
          .blog-content h2 {
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            font-weight: 700;
            color: #111827;
            margin: 48px 0 24px;
            line-height: 1.3;
          }
          .blog-content h3 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #111827;
            margin: 32px 0 16px;
          }
          .blog-content p {
            margin-bottom: 24px;
          }
          .blog-content ul {
            margin: 0 0 24px 0;
            padding-left: 24px;
          }
          .blog-content li {
            margin-bottom: 12px;
          }
          .blog-content strong {
            color: #111827;
            font-weight: 600;
          }
          .blog-content a {
            color: #2563eb;
            text-decoration: underline;
            text-underline-offset: 4px;
          }
          .blog-content a:hover {
            color: #1d4ed8;
          }
        </style>
        
        ${post.content}
        
        <!-- Share & Author Box -->
        <div style="margin-top: 60px; padding: 32px; background: #f8fafc; border-radius: 16px; border: 1px solid #e2e8f0;">
          <h4 style="margin: 0 0 16px; font-size: 1.1rem; color: #0f172a;">Share this article</h4>
          <div style="display: flex; gap: 12px;">
            <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent('https://cresenixsolutions.com/blog/' + post.slug)}" target="_blank" style="display: flex; align-items: center; gap: 8px; background: white; padding: 8px 16px; border-radius: 8px; border: 1px solid #e2e8f0; color: #0f172a; text-decoration: none; font-weight: 500; font-size: 0.9rem;"><span class="material-symbols-outlined" style="font-size: 18px;">share</span> Twitter</a>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://cresenixsolutions.com/blog/' + post.slug)}" target="_blank" style="display: flex; align-items: center; gap: 8px; background: white; padding: 8px 16px; border-radius: 8px; border: 1px solid #e2e8f0; color: #0f172a; text-decoration: none; font-weight: 500; font-size: 0.9rem;"><span class="material-symbols-outlined" style="font-size: 18px;">work</span> LinkedIn</a>
          </div>
        </div>
      </article>
      
      <!-- CTA Section -->
      <section style="background: #111827; padding: 80px 24px; text-align: center; color: white;">
        <div style="max-width: 600px; margin: 0 auto;">
          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 700; margin-bottom: 24px;">Ready to transform your business?</h2>
          <p style="font-size: 1.1rem; color: #9ca3af; margin-bottom: 32px;">Let's discuss how our tailored software solutions can help you scale.</p>
          <a href="/contact" data-route="/contact" class="btn-primary" style="background: #3b82f6; color: white; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-weight: 600; display: inline-block;">Schedule a Free Consultation</a>
        </div>
      </section>

    </div>
    ${renderFooter()}
  `;
}

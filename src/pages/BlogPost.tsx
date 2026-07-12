import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import ReactMarkdown from 'react-markdown';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BtnWhatsappFloat from '@/components/BtnWhatsappFloat';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  const { data: relatedPosts } = useQuery({
    queryKey: ['related-posts', post?.category],
    queryFn: async () => {
      if (!post) return [];
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .eq('category', post.category)
        .neq('id', post.id)
        .order('published_at', { ascending: false })
        .limit(3);
      
      if (error) throw error;
      return data;
    },
    enabled: !!post,
  });

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  const handleShare = async (platform: 'linkedin' | 'twitter' | 'copy') => {
    const title = post?.title || '';
    
    switch (platform) {
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'copy':
        await navigator.clipboard.writeText(shareUrl);
        break;
    }
  };

  // Custom markdown components for styling
  const markdownComponents = {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-3xl font-bold text-white mt-12 mb-6">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl font-bold text-white mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl font-semibold text-white mt-8 mb-4">{children}</h3>
    ),
    p: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-white/80 mb-4 leading-relaxed">{children}</p>
    ),
    li: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-white/80 ml-4 mb-2 list-disc">{children}</li>
    ),
    ul: ({ children }: { children?: React.ReactNode }) => (
      <ul className="mb-4">{children}</ul>
    ),
    ol: ({ children }: { children?: React.ReactNode }) => (
      <ol className="mb-4 list-decimal ml-4">{children}</ol>
    ),
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="text-white font-semibold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em>{children}</em>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="bg-automato-gold/20 text-automato-gold px-1.5 py-0.5 rounded text-sm">{children}</code>
    ),
    pre: ({ children }: { children?: React.ReactNode }) => (
      <pre className="bg-white/5 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>
    ),
    a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
      <a href={href} className="text-automato-gold hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-automato-gold pl-4 italic text-white/70 my-4">{children}</blockquote>
    ),
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-automato-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-automato-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-automato-black">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Artigo não encontrado</h1>
          <p className="text-white/60 mb-8">O artigo que você procura não existe ou foi removido.</p>
          <Link to="/blog">
            <Button className="bg-automato-gold text-automato-black hover:bg-automato-gold/90">
              Voltar ao Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog Flownine</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://flownine.com.br/blog/${post.slug}`} />
        <link rel="canonical" href={`https://flownine.com.br/blog/${post.slug}`} />
        {post.cover_image && <meta property="og:image" content={post.cover_image} />}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          image: post.cover_image || undefined,
          datePublished: post.published_at || undefined,
          dateModified: post.updated_at || post.published_at || undefined,
          author: { "@type": "Organization", name: "FlowNine" },
          publisher: { "@type": "Organization", name: "FlowNine" },
          mainEntityOfPage: `https://flownine.com.br/blog/${post.slug}`,
          articleSection: post.category,
        })}</script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-automato-black">
        <Navbar />
        
        <main className="flex-1 pt-24">
          {/* Back Link */}
          <div className="container mx-auto container-padding mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-automato-gold hover:text-automato-gold/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao Blog
            </Link>
          </div>

          {/* Article Header */}
          <article className="container mx-auto container-padding max-w-4xl">
            <header className="mb-8">
              <Badge className="bg-automato-gold/20 text-automato-gold border-none mb-4">
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-white/70 mb-6">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm">
                {post.published_at && (
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {format(new Date(post.published_at), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {estimateReadTime(post.content)} min de leitura
                </span>
              </div>
            </header>

            {/* Cover Image */}
            {post.cover_image && (
              <div className="mb-10 rounded-xl overflow-hidden">
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="w-full h-auto max-h-[500px] object-cover"
                />
              </div>
            )}

            {/* Content - Using ReactMarkdown for safe rendering */}
            <div className="prose prose-invert max-w-none mb-12">
              <ReactMarkdown components={markdownComponents}>
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map(tag => (
                  <Badge 
                    key={tag} 
                    variant="outline" 
                    className="border-white/20 text-white/60"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Share */}
            <div className="border-t border-white/10 pt-8 mb-12">
              <p className="text-white/60 mb-4">Compartilhe este artigo:</p>
              <div className="flex gap-3">
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-3 rounded-full bg-white/5 hover:bg-automato-gold/20 text-white/60 hover:text-automato-gold transition-all"
                  aria-label="Compartilhar no LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-3 rounded-full bg-white/5 hover:bg-automato-gold/20 text-white/60 hover:text-automato-gold transition-all"
                  aria-label="Compartilhar no Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="p-3 rounded-full bg-white/5 hover:bg-automato-gold/20 text-white/60 hover:text-automato-gold transition-all"
                  aria-label="Copiar link"
                >
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts && relatedPosts.length > 0 && (
              <section className="border-t border-white/10 pt-12 pb-16">
                <h2 className="text-2xl font-bold text-white mb-8">Artigos Relacionados</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="group bg-white/5 border border-automato-gold/20 rounded-xl p-5 hover:border-automato-gold/50 transition-all"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-automato-gold transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-white/60 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>
        </main>

        <Footer />
      </div>
      <BtnWhatsappFloat />
    </>
  );
};

export default BlogPost;

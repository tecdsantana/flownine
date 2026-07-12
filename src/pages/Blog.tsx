import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BtnWhatsappFloat from '@/components/BtnWhatsappFloat';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const POSTS_PER_PAGE = 9;

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  // Get unique categories
  const categories = posts 
    ? [...new Set(posts.map(post => post.category))]
    : [];

  // Filter posts
  const filteredPosts = posts?.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }) || [];

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  return (
    <>
      <Helmet>
        <title>Blog | Flownine - Artigos sobre IA e Automação</title>
        <meta name="description" content="Explore artigos sobre inteligência artificial, automação de processos e transformação digital para empresas." />
        <meta property="og:title" content="Blog Flownine — IA, automação e transformação digital" />
        <meta property="og:description" content="Insights sobre IA, automação e inovação para transformar seu negócio." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://flownine.com.br/blog" />
        <link rel="canonical" href="https://flownine.com.br/blog" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"CollectionPage","name":"Blog Flownine","url":"https://flownine.com.br/blog","description":"Artigos sobre IA, automação e transformação digital."}`}</script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-automato-black">
        <Navbar />
        
        <main className="flex-1 pt-24">
          {/* Hero Section */}
          <section className="py-16 container-padding">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Blog <span className="text-automato-gold">Flownine</span>
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
                Insights sobre IA, automação e inovação para transformar seu negócio
              </p>
              
              {/* Search */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                <Input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/5 border-automato-gold/30 text-white placeholder:text-white/40 focus:border-automato-gold"
                />
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="container mx-auto container-padding mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge
                variant={selectedCategory === null ? "default" : "outline"}
                className={`cursor-pointer transition-all ${
                  selectedCategory === null 
                    ? 'bg-automato-gold text-automato-black hover:bg-automato-gold/90' 
                    : 'border-automato-gold/50 text-automato-gold hover:bg-automato-gold/10'
                }`}
                onClick={() => setSelectedCategory(null)}
              >
                Todos
              </Badge>
              {categories.map(category => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer transition-all ${
                    selectedCategory === category 
                      ? 'bg-automato-gold text-automato-black hover:bg-automato-gold/90' 
                      : 'border-automato-gold/50 text-automato-gold hover:bg-automato-gold/10'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </section>

          {/* Posts Grid */}
          <section className="container mx-auto container-padding pb-16">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white/5 rounded-xl animate-pulse h-96" />
                ))}
              </div>
            ) : paginatedPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedPosts.map(post => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className="group bg-gradient-to-b from-white/5 to-transparent border border-automato-gold/20 rounded-xl overflow-hidden hover:border-automato-gold/50 transition-all duration-300"
                    >
                      {post.cover_image && (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={post.cover_image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <Badge className="bg-automato-gold/20 text-automato-gold border-none mb-3">
                          {post.category}
                        </Badge>
                        <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-automato-gold transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-white/60 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-white/40 text-xs">
                          <div className="flex items-center gap-4">
                            {post.published_at && (
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {format(new Date(post.published_at), "dd MMM yyyy", { locale: ptBR })}
                              </span>
                            )}
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {estimateReadTime(post.content)} min
                            </span>
                          </div>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-automato-gold" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center gap-2 mt-12">
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-10 h-10 rounded-full transition-all ${
                          currentPage === i + 1
                            ? 'bg-automato-gold text-automato-black'
                            : 'bg-white/5 text-white/60 hover:bg-white/10'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-white/60 text-lg">Nenhum artigo encontrado</p>
              </div>
            )}
          </section>
        </main>

        <Footer />
      </div>
      <BtnWhatsappFloat />
    </>
  );
};

export default Blog;

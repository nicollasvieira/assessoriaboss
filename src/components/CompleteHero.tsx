import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { User, Mail, Phone, Building, DollarSign, TrendingUp, FileText, PhoneCall, Star, CheckCircle, Award, Users, TrendingUp as TrendingUpIcon, Zap, Target, Trophy, ArrowRight } from "lucide-react";

const CompleteHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0C0C0C] via-[#111111] to-[#1A1A1A] relative overflow-hidden">
      {/* Radial Gold Glow Background */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-15" />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle-field">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-8 w-24 h-24 border border-[#FFD700]/6 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-16 w-20 h-20 border border-[#FFD700]/4 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-24 left-16 w-20 h-20 border border-[#FFD700]/8 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-16 right-8 w-16 h-16 border border-[#FFD700]/3 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-[#FFD700]/5">
        <div className="max-w-6xl mx-auto px-8 lg:px-16 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 group">
              <div className="text-2xl font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300">
                alpha
              </div>
              <div className="flex flex-col">
                <div className="text-sm text-white/80 group-hover:text-[#FFD700]/80 transition-colors duration-300">assessoria</div>
                <div className="w-3 h-3 bg-[#FFD700] rounded-sm"></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#depoimentos" className="text-white/80 hover:text-[#FFD700] transition-colors duration-300 font-medium text-sm">
                Depoimentos
              </a>
              <a href="#clientes" className="text-white/80 hover:text-[#FFD700] transition-colors duration-300 font-medium text-sm">
                Clientes
              </a>
              <a href="#sobre" className="text-white/80 hover:text-[#FFD700] transition-colors duration-300 font-medium text-sm">
                Sobre a Alpha
              </a>
              <Button 
                className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm"
              >
                Contrate
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white hover:text-[#FFD700] transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Floating Barber Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Scissors - Top Left */}
        <div className="absolute top-16 left-6 animate-float">
          <div className="w-14 h-14 rounded-xl border-2 border-[#FFD700]/30 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-xl flex items-center justify-center shadow-[0_8px_32px_rgba(255,215,0,0.15)] hover:scale-110 transition-all duration-300">
            <svg className="w-7 h-7 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.28 3l3.72 3.72L6.28 10.44 4.56 8.72 8.28 5H6.28V3zM17.72 21l-3.72-3.72 3.72-3.72 1.72 1.72L15.72 19h2v2z"/>
            </svg>
          </div>
        </div>

        {/* Razor - Bottom Left */}
        <div className="absolute bottom-20 left-8 animate-float" style={{animationDelay: '2s'}}>
          <div className="w-12 h-12 rounded-xl border-2 border-[#FFD700]/30 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-xl flex items-center justify-center shadow-[0_8px_32px_rgba(255,215,0,0.15)] hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2z"/>
            </svg>
          </div>
        </div>

        {/* Comb - Top Right */}
        <div className="absolute top-12 right-6 animate-float" style={{animationDelay: '1s'}}>
          <div className="w-13 h-13 rounded-xl border-2 border-[#FFD700]/30 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-xl flex items-center justify-center shadow-[0_8px_32px_rgba(255,215,0,0.15)] hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h18v2H3V3zm0 8h18v2H3v-2zm0 8h18v2H3v-2z"/>
            </svg>
          </div>
        </div>

        {/* Clipper - Bottom Right */}
        <div className="absolute bottom-16 right-8 animate-float" style={{animationDelay: '3s'}}>
          <div className="w-11 h-11 rounded-xl border-2 border-[#FFD700]/30 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-xl flex items-center justify-center shadow-[0_8px_32px_rgba(255,215,0,0.15)] hover:scale-110 transition-all duration-300">
            <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>

        {/* Hair Dryer - Middle Left */}
        <div className="absolute top-1/2 left-4 animate-float" style={{animationDelay: '1.5s'}}>
          <div className="w-12 h-12 rounded-xl border-2 border-[#FFD700]/30 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-xl flex items-center justify-center shadow-[0_8px_32px_rgba(255,215,0,0.15)] hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>

        {/* Shaving Foam - Middle Right */}
        <div className="absolute top-1/2 right-4 animate-float" style={{animationDelay: '2.5s'}}>
          <div className="w-13 h-13 rounded-xl border-2 border-[#FFD700]/30 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-xl flex items-center justify-center shadow-[0_8px_32px_rgba(255,215,0,0.15)] hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>

        {/* Barber Chair - Top Center */}
        <div className="absolute top-28 left-1/2 transform -translate-x-1/2 animate-float" style={{animationDelay: '0.5s'}}>
          <div className="w-12 h-12 rounded-xl border-2 border-[#FFD700]/30 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-xl flex items-center justify-center shadow-[0_8px_32px_rgba(255,215,0,0.15)] hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>

        {/* Mirror - Bottom Center */}
        <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 animate-float" style={{animationDelay: '3.5s'}}>
          <div className="w-11 h-11 rounded-xl border-2 border-[#FFD700]/30 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-xl flex items-center justify-center shadow-[0_8px_32px_rgba(255,215,0,0.15)] hover:scale-110 transition-all duration-300">
            <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2z"/>
            </svg>
          </div>
        </div>

        {/* Beard Oil - Top Left Corner */}
        <div className="absolute top-8 left-3 animate-float" style={{animationDelay: '1.8s'}}>
          <div className="w-10 h-10 rounded-xl border-2 border-[#FFD700]/30 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-xl flex items-center justify-center shadow-[0_8px_32px_rgba(255,215,0,0.15)] hover:scale-110 transition-all duration-300">
            <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>

        {/* Straight Razor - Bottom Left Corner */}
        <div className="absolute bottom-8 left-3 animate-float" style={{animationDelay: '2.8s'}}>
          <div className="w-10 h-10 rounded-xl border-2 border-[#FFD700]/30 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-xl flex items-center justify-center shadow-[0_8px_32px_rgba(255,215,0,0.15)] hover:scale-110 transition-all duration-300">
            <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2z"/>
            </svg>
          </div>
        </div>

        {/* Hair Gel - Top Right Corner */}
        <div className="absolute top-8 right-3 animate-float" style={{animationDelay: '0.8s'}}>
          <div className="w-10 h-10 rounded-xl border-2 border-[#FFD700]/30 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-xl flex items-center justify-center shadow-[0_8px_32px_rgba(255,215,0,0.15)] hover:scale-110 transition-all duration-300">
            <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>

        {/* Barber Cape - Bottom Right Corner */}
        <div className="absolute bottom-8 right-3 animate-float" style={{animationDelay: '3.2s'}}>
          <div className="w-10 h-10 rounded-xl border-2 border-[#FFD700]/30 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-xl flex items-center justify-center shadow-[0_8px_32px_rgba(255,215,0,0.15)] hover:scale-110 transition-all duration-300">
            <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2z"/>
            </svg>
          </div>
        </div>
      </div>
      
      <main className="pt-28 pb-16 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            
            {/* Badge */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 border border-[#FFD700]/20 px-4 py-1.5 rounded-full">
                <Star className="w-3 h-3 text-[#FFD700]" />
                <span className="text-[#FFD700] font-semibold text-xs">#1 Assessoria de Marketing para Barbearias</span>
              </div>
            </div>
            
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight animate-fade-in-up">
                <span className="text-white block">A maior assessoria de</span>
                <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent block">Marketing para Barbearias</span>
                <span className="text-white block">da América Latina</span>
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-lg lg:text-xl text-[#CCCCCC] max-w-4xl mx-auto leading-relaxed font-normal animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Seja cliente da Assessoria que mais entrega resultados para barbearias na atualidade, 
              com cases que cresceram acima de <span className="text-[#FFD700] font-semibold">600%</span> durante a parceria. 
              Confira o vídeo abaixo.
            </p>

            {/* Stats */}
            <div className="flex justify-center space-x-10 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFD700]">300+</div>
                <div className="text-sm text-white/70">Barbearias Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFD700]">600%</div>
                <div className="text-sm text-white/70">Crescimento Médio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFD700]">98%</div>
                <div className="text-sm text-white/70">Satisfação</div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="pt-6 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
              <Button 
                size="lg" 
                className="bg-[#00FF47] hover:bg-[#00FF47]/90 text-black font-bold text-lg px-14 py-6 rounded-xl shadow-[0_0_20px_rgba(0,255,71,0.3)] transition-all duration-300 hover:scale-105 border-0"
              >
                Agende já uma reunião
              </Button>
            </div>
          </div>

          {/* Form Card */}
          <div className="mt-16 max-w-5xl mx-auto animate-fade-in-up" style={{animationDelay: '0.9s'}}>
            <Card className="glass-effect border border-[#FFD700]/10 p-12 lg:p-16 rounded-3xl shadow-glow-card">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                
                {/* Left Side - Instructions */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                      Cadastre-se e receba o<br />
                      <span className="text-[#FFD700]">contato do nosso time!</span>
                    </h2>
                    <p className="text-[#CCCCCC] text-base">Transforme sua barbearia em uma máquina de vendas</p>
                  </div>

                  {/* Step 1 */}
                  <div className="space-y-4 group/step">
                    <div className="h-0.5 bg-[#FFD700] rounded-full"></div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <FileText className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">Complete o formulário</h3>
                        <p className="text-[#CCCCCC] text-sm leading-relaxed">
                          Forneça suas informações de contato. Garantimos a segurança total de seus dados. 
                          Serão usados apenas para contato.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="space-y-4 group/step">
                    <div className="h-0.5 bg-[#FFD700] rounded-full"></div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <PhoneCall className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">Receba uma ligação personalizada</h3>
                        <p className="text-[#CCCCCC] text-sm leading-relaxed">
                          Em um prazo de até 8 horas, um dos nossos especialistas entrará em contato 
                          diretamente para agendar a reunião mais crucial com você.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="pt-4">
                    <div className="flex items-center space-x-4 text-sm text-[#CCCCCC]">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#FFD700]" />
                        <span>100% Gratuito</span>
                      </div>
                      <div className="w-1 h-1 bg-[#FFD700] rounded-full"></div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#FFD700]" />
                        <span>Sem compromisso</span>
                      </div>
                      <div className="w-1 h-1 bg-[#FFD700] rounded-full"></div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#FFD700]" />
                        <span>Dados seguros</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="space-y-5">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FFD700] w-5 h-5" />
                    <Input 
                      placeholder="Seu nome completo" 
                      className="pl-12 pr-4 py-4 bg-black/30 border border-white/20 text-white placeholder:text-white/50 rounded-lg text-base focus:ring-2 focus:ring-[#FFD700]/30 focus:border-[#FFD700] transition-all duration-300"
                    />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FFD700] w-5 h-5" />
                    <Input 
                      placeholder="Seu melhor e-mail" 
                      type="email"
                      className="pl-12 pr-4 py-4 bg-black/30 border border-white/20 text-white placeholder:text-white/50 rounded-lg text-base focus:ring-2 focus:ring-[#FFD700]/30 focus:border-[#FFD700] transition-all duration-300"
                    />
                  </div>
                  
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FFD700] w-5 h-5" />
                    <Input 
                      placeholder="Telefone com WhatsApp" 
                      className="pl-12 pr-4 py-4 bg-black/30 border border-white/20 text-white placeholder:text-white/50 rounded-lg text-base focus:ring-2 focus:ring-[#FFD700]/30 focus:border-[#FFD700] transition-all duration-300"
                    />
                  </div>
                  
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FFD700] w-5 h-5" />
                    <Input 
                      placeholder="Nome da sua barbearia" 
                      className="pl-12 pr-4 py-4 bg-black/30 border border-white/20 text-white placeholder:text-white/50 rounded-lg text-base focus:ring-2 focus:ring-[#FFD700]/30 focus:border-[#FFD700] transition-all duration-300"
                    />
                  </div>
                  
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FFD700] w-5 h-5" />
                    <Input 
                      placeholder="Investimento mensal em marketing" 
                      className="pl-12 pr-4 py-4 bg-black/30 border border-white/20 text-white placeholder:text-white/50 rounded-lg text-base focus:ring-2 focus:ring-[#FFD700]/30 focus:border-[#FFD700] transition-all duration-300"
                    />
                  </div>
                  
                  <div className="relative">
                    <TrendingUpIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FFD700] w-5 h-5" />
                    <Select>
                      <SelectTrigger className="pl-12 pr-4 py-4 bg-black/30 border border-white/20 text-white rounded-lg text-base focus:ring-2 focus:ring-[#FFD700]/30 focus:border-[#FFD700] transition-all duration-300 h-auto">
                        <SelectValue placeholder="Faturamento mensal atual" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/95 backdrop-blur-lg border border-white/20">
                        <SelectItem value="0-5k">R$ 0 - R$ 5.000</SelectItem>
                        <SelectItem value="5k-15k">R$ 5.000 - R$ 15.000</SelectItem>
                        <SelectItem value="15k-30k">R$ 15.000 - R$ 30.000</SelectItem>
                        <SelectItem value="30k-50k">R$ 30.000 - R$ 50.000</SelectItem>
                        <SelectItem value="50k-100k">R$ 50.000 - R$ 100.000</SelectItem>
                        <SelectItem value="100k+">R$ 100.000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="pt-6">
                    <Button 
                      type="submit"
                      className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-bold text-lg py-5 rounded-lg shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all duration-300 hover:scale-105 border-0"
                    >
                      Receber proposta personalizada
                    </Button>
                  </div>
                </div>
                
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* About Us Section */}
      <section className="py-24 bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-[#1A1A1A] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-[#FFA500]/3 to-[#FFD700]/3 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-[#FFD700]/2 to-[#FFA500]/2 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto px-8 lg:px-16 relative z-10">
          {/* Section Badge */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 border border-[#FFD700]/20 px-6 py-3 rounded-full">
              <span className="text-[#FFD700] font-bold text-sm">SOBRE NÓS</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Content */}
            <div className="space-y-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="text-white block">Quem é a</span>
                  <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent block">Alpha Assessoria</span>
                </h2>
                
                <div className="space-y-6 text-lg lg:text-xl text-[#CCCCCC] leading-relaxed">
                  <p>
                    Na <span className="text-[#FFD700] font-semibold">Alpha Assessoria</span>, não entregamos promessas, entregamos <span className="text-[#FFD700] font-semibold">resultados</span>. Cada estratégia é pensada para atrair, engajar e vender.
                  </p>
                  
                  <p>
                    Somos uma agência de performance focada no que realmente importa: <span className="text-[#FFD700] font-semibold">crescimento</span>. Transformamos presença digital em faturamento real, com inteligência criativa, execução afiada e foco total em ROI.
                  </p>
                  
                  <p>
                    Nosso diferencial está na junção entre <span className="text-[#FFD700] font-semibold">dados</span>, posicionamento estratégico e execução criativa. Trabalhamos para entregar campanhas que fazem sentido para o seu público e impacto no seu faturamento.
                  </p>
                  
                  <p>
                    Somos a ponte entre o seu produto e quem está <span className="text-[#FFD700] font-semibold">pronto para comprar</span>.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold text-xl px-10 py-6 rounded-xl shadow-[0_8px_32px_rgba(255,215,0,0.3)] transition-all duration-300 hover:scale-105 border-0 group"
                >
                  <span className="flex items-center space-x-3">
                    <span>Conheça nossos cases</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </div>

            {/* Right Side - Interactive Graphic */}
            <div className="relative animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              {/* Central Circle */}
              <div className="relative mx-auto w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full animate-pulse shadow-[0_0_50px_rgba(255,215,0,0.3)] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-black text-black mb-2">ALPHA</div>
                    <div className="text-sm font-semibold text-black/80">ASSESSORIA</div>
                  </div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin-slow">
                  {/* Performance Circle */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(255,107,53,0.4)] hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>

                  {/* Growth Circle */}
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-[#00D4AA] to-[#00B894] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,212,170,0.4)] hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>

                  {/* Results Circle */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-r from-[#667EEA] to-[#764BA2] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(102,126,234,0.4)] hover:scale-110 transition-transform duration-300">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#FFA500" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <circle cx="160" cy="160" r="140" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                  <circle cx="160" cy="160" r="120" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse" style={{animationDelay: '1s'}} />
                </svg>

                {/* Floating Particles */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-[#FFD700] rounded-full animate-pulse"
                      style={{
                        left: `${20 + (i * 10)}%`,
                        top: `${30 + (i * 8)}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: '3s'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Business Section */}
      <section className="py-24 bg-gradient-to-br from-[#0C0C0C] via-[#111111] to-[#1A1A1A] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-16 w-40 h-40 bg-gradient-to-r from-[#FFD700]/3 to-[#FFA500]/3 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-r from-[#FFA500]/2 to-[#FFD700]/2 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-[#FFD700]/4 to-[#FFA500]/4 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 border border-[#FFD700]/20 px-6 py-3 rounded-full mb-8">
              <span className="text-[#FFD700] font-bold text-sm">METODOLOGIA COMPROVADA</span>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              <span className="text-white block">TRANSFORME SEU</span>
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent block">NEGÓCIO</span>
              <span className="text-white block">COM A ALPHA</span>
            </h2>
            <p className="text-xl lg:text-2xl text-[#CCCCCC] max-w-4xl mx-auto leading-relaxed">
              Metodologia comprovada que já acelerou centenas de barbearias para o próximo nível
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left Side - Benefits */}
            <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              {/* Benefit Cards */}
              <div className="space-y-4">
                {/* Card 1 */}
                <div className="group bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-xl border border-[#FFD700]/10 rounded-2xl p-6 hover:border-[#FFD700]/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-7 h-7 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Estratégias personalizadas</h3>
                      <p className="text-[#CCCCCC] text-sm">Desenvolvemos estratégias únicas para cada barbearia, considerando seu público, localização e objetivos específicos.</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-xl border border-[#FFD700]/10 rounded-2xl p-6 hover:border-[#FFD700]/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#00D4AA] to-[#00B894] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Geração de leads qualificados</h3>
                      <p className="text-[#CCCCCC] text-sm">Atraímos clientes que realmente querem seus serviços, aumentando significativamente a taxa de conversão.</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-xl border border-[#FFD700]/10 rounded-2xl p-6 hover:border-[#FFD700]/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#667EEA] to-[#764BA2] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Previsibilidade de faturamento</h3>
                      <p className="text-[#CCCCCC] text-sm">Com nossas estratégias, você terá previsão clara do seu faturamento mensal e poderá planejar melhor.</p>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="group bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-xl border border-[#FFD700]/10 rounded-2xl p-6 hover:border-[#FFD700]/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Aumento da conversão</h3>
                      <p className="text-[#CCCCCC] text-sm">Otimizamos cada etapa do funil de vendas para converter mais visitantes em clientes fiéis.</p>
                    </div>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="group bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-xl border border-[#FFD700]/10 rounded-2xl p-6 hover:border-[#FFD700]/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-7 h-7 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Alinhamento Marketing e Vendas</h3>
                      <p className="text-[#CCCCCC] text-sm">Integramos marketing e vendas para criar uma experiência fluida e aumentar a eficiência operacional.</p>
                    </div>
                  </div>
                </div>

                {/* Card 6 */}
                <div className="group bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-xl border border-[#FFD700]/10 rounded-2xl p-6 hover:border-[#FFD700]/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#00FF47] to-[#00D4AA] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <DollarSign className="w-7 h-7 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Aumento de ticket médio</h3>
                      <p className="text-[#CCCCCC] text-sm">Estratégias para aumentar o valor médio por cliente e maximizar a receita por transação.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - KPIs */}
            <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              {/* KPI Cards */}
              <div className="space-y-6">
                {/* KPI 1 */}
                <div className="group bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-xl border border-[#FFD700]/15 rounded-3xl p-8 hover:border-[#FFD700]/30 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      +300
                    </div>
                    <div className="text-xl font-bold text-white mb-1">BARBEARIAS</div>
                    <div className="text-sm text-[#CCCCCC]">ACELERADAS</div>
                  </div>
                </div>

                {/* KPI 2 */}
                <div className="group bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-xl border border-[#00D4AA]/15 rounded-3xl p-8 hover:border-[#00D4AA]/30 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#00D4AA] to-[#00B894] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      +2.5M
                    </div>
                    <div className="text-xl font-bold text-white mb-1">EM ANÚNCIOS</div>
                    <div className="text-sm text-[#CCCCCC]">INVESTIDOS</div>
                  </div>
                </div>

                {/* KPI 3 */}
                <div className="group bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-xl border border-[#FF6B35]/15 rounded-3xl p-8 hover:border-[#FF6B35]/30 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      +15M
                    </div>
                    <div className="text-xl font-bold text-white mb-1">EM VENDAS</div>
                    <div className="text-sm text-[#CCCCCC]">GERADAS</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold text-xl py-6 rounded-2xl shadow-[0_8px_32px_rgba(255,215,0,0.3)] transition-all duration-300 hover:scale-105 border-0 group"
                >
                  <span className="flex items-center justify-center space-x-3">
                    <span>Quero transformar minha barbearia</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-[#1A1A1A] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-36 h-36 bg-gradient-to-r from-[#FFD700]/4 to-[#FFA500]/4 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-44 h-44 bg-gradient-to-r from-[#FFA500]/3 to-[#FFD700]/3 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-gradient-to-r from-[#FFD700]/2 to-[#FFA500]/2 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              <span className="text-white block">COMO</span>
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent block">FUNCIONA?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-[#CCCCCC] max-w-4xl mx-auto leading-relaxed">
              Nossa abordagem combina análise de dados e estratégias personalizadas para garantir resultados eficazes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Interactive Graphic */}
            <div className="relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="relative mx-auto w-96 h-96">
                {/* Central Circle */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full animate-pulse shadow-[0_0_50px_rgba(255,215,0,0.3)] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <div className="text-lg font-bold text-black">PROCESSO</div>
                  </div>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 384 384">
                  <defs>
                    <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#FFA500" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  <circle cx="192" cy="192" r="160" fill="none" stroke="url(#processGradient)" strokeWidth="3" strokeDasharray="8,8" className="animate-pulse" />
                </svg>

                {/* Top Diamond - Captação */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-xl rotate-45 flex items-center justify-center shadow-[0_8px_32px_rgba(255,215,0,0.4)] hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-black -rotate-45" />
                </div>

                {/* Right Diamond - Receita */}
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-[#00D4AA] to-[#00B894] rounded-xl rotate-45 flex items-center justify-center shadow-[0_8px_32px_rgba(0,212,170,0.4)] hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-white -rotate-45" />
                </div>

                {/* Bottom Diamond - Engajamento */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-r from-[#667EEA] to-[#764BA2] rounded-xl rotate-45 flex items-center justify-center shadow-[0_8px_32px_rgba(102,126,234,0.4)] hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white -rotate-45" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>

                {/* Left Diamond - Monetização */}
                <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] rounded-xl rotate-45 flex items-center justify-center shadow-[0_8px_32px_rgba(255,107,53,0.4)] hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white -rotate-45" />
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-[#FFD700] rounded-full animate-pulse"
                      style={{
                        left: `${25 + (i * 6)}%`,
                        top: `${20 + (i * 7)}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: '4s'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Process Cards */}
            <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              {/* Card 1 - Captação */}
              <div className="group bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-xl border border-[#FFD700]/15 rounded-2xl p-6 hover:border-[#FFD700]/30 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">CAPTAÇÃO</h3>
                      <p className="text-[#CCCCCC] text-sm">Atraímos leads qualificados</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-[#CCCCCC] text-sm leading-relaxed">
                    Utilizamos estratégias avançadas de marketing digital para atrair leads altamente qualificados para sua barbearia.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                      <span className="text-[#CCCCCC] text-sm">Análise detalhada do seu público-alvo</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                      <span className="text-[#CCCCCC] text-sm">Criação de campanhas segmentadas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                      <span className="text-[#CCCCCC] text-sm">Otimização de landing pages</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                      <span className="text-[#CCCCCC] text-sm">Implementação de funis de conversão</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                      <span className="text-[#CCCCCC] text-sm">Monitoramento em tempo real</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Receita */}
              <div className="group bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-xl border border-[#00D4AA]/15 rounded-2xl p-6 hover:border-[#00D4AA]/30 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#00D4AA] to-[#00B894] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">RECEITA</h3>
                      <p className="text-[#CCCCCC] text-sm">Convertemos em vendas</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-[#00D4AA] to-[#00B894] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-[#CCCCCC] text-sm leading-relaxed">
                    Transformamos leads em clientes fiéis através de estratégias de conversão otimizadas e funis de vendas eficientes.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#00D4AA] rounded-full"></div>
                      <span className="text-[#CCCCCC] text-sm">Otimização de funis de conversão</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#00D4AA] rounded-full"></div>
                      <span className="text-[#CCCCCC] text-sm">Estratégias de remarketing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#00D4AA] rounded-full"></div>
                      <span className="text-[#CCCCCC] text-sm">Automação de vendas</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Engajamento */}
              <div className="group bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-xl border border-[#667EEA]/15 rounded-2xl p-6 hover:border-[#667EEA]/30 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#667EEA] to-[#764BA2] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">ENGAJAMENTO</h3>
                      <p className="text-[#CCCCCC] text-sm">Criamos conexão com a audiência</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-[#667EEA] to-[#764BA2] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-[#CCCCCC] text-sm leading-relaxed">
                    Construímos relacionamentos duradouros com sua audiência através de conteúdo relevante e interações autênticas.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#667EEA] rounded-full"></div>
                      <span className="text-[#CCCCCC] text-sm">Criação de conteúdo relevante</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#667EEA] rounded-full"></div>
                      <span className="text-[#CCCCCC] text-sm">Gestão de redes sociais</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#667EEA] rounded-full"></div>
                      <span className="text-[#CCCCCC] text-sm">Estratégias de fidelização</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 - Monetização */}
              <div className="group bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-xl border border-[#FF6B35]/15 rounded-2xl p-6 hover:border-[#FF6B35]/30 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">MONETIZAÇÃO</h3>
                      <p className="text-[#CCCCCC] text-sm">Maximizamos o retorno</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-[#CCCCCC] text-sm leading-relaxed">
                    Otimizamos cada aspecto do seu negócio para maximizar o retorno sobre investimento e aumentar a lucratividade.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                      <span className="text-[#CCCCCC] text-sm">Aumento do ticket médio</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                      <span className="text-[#CCCCCC] text-sm">Otimização de preços</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                      <span className="text-[#CCCCCC] text-sm">Estratégias de upsell</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0C0C0C] via-[#111111] to-[#1A1A1A] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-r from-[#FFD700]/3 to-[#FFA500]/3 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-to-r from-[#FFA500]/2 to-[#FFD700]/2 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-[#FFD700]/2 to-[#FFA500]/2 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto px-8 lg:px-16 relative z-10">
          <div className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-xl border border-[#FFD700]/15 rounded-3xl p-12 lg:p-16 text-center animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              <span className="text-white block">O nosso trabalho é</span>
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent block">exclusivo</span>
              <span className="text-white block">e nem sempre temos vagas</span>
              <span className="text-white block">abertas para novos parceiros</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-[#CCCCCC] max-w-3xl mx-auto leading-relaxed mb-8">
              Agarre a oportunidade e receba uma assessoria de crescimento da maior especialista da América Latina.
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-[0_8px_32px_rgba(255,215,0,0.3)] transition-all duration-300 hover:scale-105 border-0 group"
            >
              <span className="flex items-center space-x-3">
                <span>Agende já uma reunião</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#0C0C0C] via-[#0A0A0A] to-[#0C0C0C] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#FFD700]/2 to-[#FFA500]/2 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-36 h-36 bg-gradient-to-r from-[#FFA500]/2 to-[#FFD700]/2 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Logo and Description */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-2xl font-bold text-white">alpha</div>
                  <div className="flex flex-col">
                    <div className="text-sm text-white/80">assessoria</div>
                    <div className="w-3 h-3 bg-[#FFD700] rounded-sm"></div>
                  </div>
                </div>
                <p className="text-[#CCCCCC] text-lg leading-relaxed mb-6 max-w-md">
                  A maior assessoria de marketing digital especializada em barbearias da América Latina. Transformamos presença digital em faturamento real.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Links Rápidos</h3>
                <div className="space-y-3">
                  <a href="#sobre" className="block text-[#CCCCCC] hover:text-[#FFD700] transition-colors duration-300">Sobre Nós</a>
                  <a href="#servicos" className="block text-[#CCCCCC] hover:text-[#FFD700] transition-colors duration-300">Nossos Serviços</a>
                  <a href="#cases" className="block text-[#CCCCCC] hover:text-[#FFD700] transition-colors duration-300">Cases de Sucesso</a>
                  <a href="#contato" className="block text-[#CCCCCC] hover:text-[#FFD700] transition-colors duration-300">Contato</a>
                  <a href="#blog" className="block text-[#CCCCCC] hover:text-[#FFD700] transition-colors duration-300">Blog</a>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <span className="text-[#CCCCCC]">contato@alphaassessoria.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <span className="text-[#CCCCCC]">+55 (11) 99999-9999</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <span className="text-[#CCCCCC]">São Paulo, SP - Brasil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-[#FFD700]/10 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-[#CCCCCC] text-sm">
                © 2024 Alpha Assessoria. Todos os direitos reservados.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#privacidade" className="text-[#CCCCCC] hover:text-[#FFD700] transition-colors duration-300">Política de Privacidade</a>
                <a href="#termos" className="text-[#CCCCCC] hover:text-[#FFD700] transition-colors duration-300">Termos de Uso</a>
                <a href="#cookies" className="text-[#CCCCCC] hover:text-[#FFD700] transition-colors duration-300">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CompleteHero;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { User, Mail, Phone, Building, DollarSign, TrendingUp } from "lucide-react";
import FloatingIcons from "./FloatingIcons";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-dark relative overflow-hidden">
      <FloatingIcons />
      
      <div className="container mx-auto px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start min-h-[90vh]">
          {/* Left Content */}
          <div className="text-left space-y-12 z-10 relative pt-16">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-display font-black leading-[1.1] tracking-tight">
                <span className="text-text-primary block">A maior assessoria de</span>
                <span className="text-gradient-gold block bg-clip-text bg-gradient-gold">Marketing</span>
                <span className="text-gradient-gold block bg-clip-text bg-gradient-gold">para Barbearias</span>
                <span className="text-text-primary block">da América Latina</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-text-secondary max-w-2xl leading-relaxed font-medium">
                Seja cliente da Assessoria que mais entrega resultados para barbearias na atualidade, 
                com casos que cresceram acima de <span className="text-gold font-bold">600%</span> durante a parceria.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start pt-8">
              <Button 
                size="lg" 
                className="bg-neon-green hover:bg-neon-green/90 text-background font-bold text-xl px-12 py-8 rounded-2xl shadow-glow-neon transition-all duration-300 hover:scale-105 hover:shadow-glow-neon border-0"
              >
                Agende já uma reunião
              </Button>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex justify-center lg:justify-end pt-8">
            <Card className="w-full max-w-lg glass-effect border-0 p-10 rounded-3xl shadow-glass">
              <div className="space-y-8">
                <div className="text-center space-y-3">
                  <h2 className="text-2xl lg:text-3xl font-bold text-text-primary leading-tight">
                    Cadastre-se e receba o<br />
                    <span className="text-gold">contato do nosso time!</span>
                  </h2>
                </div>

                {/* Step 1 */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-glow-gold">
                      <span className="text-background font-black text-lg">1</span>
                    </div>
                    <div>
                      <h4 className="text-text-secondary text-sm font-semibold uppercase tracking-wide">Passo 1</h4>
                      <h5 className="text-gold font-bold text-lg">Complete o formulário</h5>
                    </div>
                  </div>
                  <p className="text-text-muted text-sm pl-14 leading-relaxed">
                    Forneça suas informações de contato. 
                    Garantimos a segurança total de seus 
                    dados. Serão usados apenas para contato.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-bronze flex items-center justify-center shadow-glow-gold">
                      <span className="text-background font-black text-lg">2</span>
                    </div>
                    <div>
                      <h4 className="text-text-secondary text-sm font-semibold uppercase tracking-wide">Passo 2</h4>
                      <h5 className="text-amber font-bold text-lg">Receba uma ligação personalizada</h5>
                    </div>
                  </div>
                  <p className="text-text-muted text-sm pl-14 leading-relaxed">
                    Em um prazo de até 6 horas, um dos 
                    nossos especialistas entrará em contato 
                    diretamente para agendar a reunião mais 
                    crucial com você.
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-5 pt-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold w-5 h-5" />
                    <Input 
                      placeholder="Seu nome" 
                      className="pl-14 pr-4 py-4 bg-input/30 border border-border/50 text-text-primary placeholder:text-text-muted rounded-xl text-lg focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                    />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold w-5 h-5" />
                    <Input 
                      placeholder="Seu melhor e-mail" 
                      type="email"
                      className="pl-14 pr-4 py-4 bg-input/30 border border-border/50 text-text-primary placeholder:text-text-muted rounded-xl text-lg focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                    />
                  </div>
                  
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold w-5 h-5" />
                    <Input 
                      placeholder="Telefone" 
                      className="pl-14 pr-4 py-4 bg-input/30 border border-border/50 text-text-primary placeholder:text-text-muted rounded-xl text-lg focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                    />
                  </div>
                  
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold w-5 h-5" />
                    <Input 
                      placeholder="Nome da barbearia" 
                      className="pl-14 pr-4 py-4 bg-input/30 border border-border/50 text-text-primary placeholder:text-text-muted rounded-xl text-lg focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                    />
                  </div>
                  
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold w-5 h-5" />
                    <Input 
                      placeholder="Investimento em Marketing por mês" 
                      className="pl-14 pr-4 py-4 bg-input/30 border border-border/50 text-text-primary placeholder:text-text-muted rounded-xl text-lg focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                    />
                  </div>
                  
                  <div className="relative">
                    <TrendingUp className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold w-5 h-5" />
                    <Input 
                      placeholder="Faturamento mensal" 
                      className="pl-14 pr-4 py-4 bg-input/30 border border-border/50 text-text-primary placeholder:text-text-muted rounded-xl text-lg focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                    />
                  </div>
                  
                  <div className="pt-6">
                    <Button 
                      type="submit"
                      className="w-full bg-button-gold hover:bg-button-gold/90 text-background font-bold text-xl py-6 rounded-2xl shadow-glow-button-gold transition-all duration-300 hover:scale-105 border-0"
                    >
                      Receber mais informações
                    </Button>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
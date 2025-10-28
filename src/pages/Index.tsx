import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Zap, AlertCircle } from "lucide-react";

const Index = () => {
  const checkoutUrl = "https://cct.ensinoplus.com.br"; // Replace with actual checkout URL

  const lotes = [
    {
      number: "1 a 10",
      price: "297",
      badge: "MELHOR OFERTA",
      available: true,
    },
    {
      number: "11 a 20",
      price: "397",
      badge: "POPULAR",
      available: true,
    },
    {
      number: "21 a 30",
      price: "497",
      badge: "ÚLTIMAS VAGAS",
      available: true,
    },
  ];

  const benefits = [
    "Acesso completo ao CCT por 12 meses",
    "Todo o conteúdo liberado imediatamente",
    "Suporte dedicado durante todo o período",
    "Atualizações e novos conteúdos inclusos",
    "Certificado de conclusão",
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/10 py-20 px-4 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(45_100%_51%/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(0_84%_55%/0.1),transparent_50%)]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <Badge variant="destructive" className="text-lg px-6 py-2 animate-glow-pulse">
              <Clock className="w-5 h-5 mr-2 inline" />
              Oferta por Tempo Limitado
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Black November</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-scale-in">
                2025
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Garanta seu acesso anual ao <span className="text-primary font-bold">CCT</span> com preços imperdíveis!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => window.location.href = checkoutUrl}
                className="w-full sm:w-auto"
              >
                <Zap className="w-6 h-6 mr-2" />
                Assinar Agora
              </Button>
              <p className="text-sm text-muted-foreground flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                Acesso imediato após o pagamento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lotes Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Escolha Seu Lote
            </h2>
            <p className="text-lg text-muted-foreground">
              Quanto mais rápido você decidir, mais você economiza
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {lotes.map((lote, index) => (
              <Card 
                key={index}
                className="relative border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 bg-card shadow-[0_10px_40px_hsl(0_0%_0%/0.5)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {index === 0 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="destructive" className="text-sm px-4 py-1 animate-glow-pulse">
                      {lote.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center space-y-2">
                  {index !== 0 && (
                    <Badge variant="outline" className="w-fit mx-auto">
                      {lote.badge}
                    </Badge>
                  )}
                  <CardTitle className="text-2xl">Lote {lote.number}</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center space-y-6">
                  <div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-2xl text-muted-foreground">R$</span>
                      <span className="text-6xl font-bold text-primary">{lote.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">por 12 meses</p>
                  </div>
                  
                  <Button 
                    variant="hero"
                    className="w-full"
                    onClick={() => window.location.href = checkoutUrl}
                  >
                    Garantir Minha Vaga
                  </Button>
                  
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {lote.available ? "Vagas limitadas" : "Esgotado"}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-destructive/10 border border-destructive/50 rounded-lg p-6 text-center animate-fade-in">
            <p className="text-lg font-medium text-destructive-foreground flex items-center justify-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Os lotes são limitados e o preço aumenta a cada lote
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O Que Está Incluído
            </h2>
            <p className="text-lg text-muted-foreground">
              Tudo o que você precisa para ter sucesso
            </p>
          </div>

          <div className="grid gap-4 animate-fade-in">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="border-2 border-border hover:border-primary transition-colors duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg font-medium">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Info Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/50 bg-card shadow-[0_0_40px_hsl(45_100%_51%/0.2)] animate-fade-in">
            <CardHeader>
              <CardTitle className="text-3xl text-center flex items-center justify-center gap-2">
                <AlertCircle className="w-8 h-8 text-primary" />
                Informações Importantes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Oferta Válida no Plano Anual</h3>
                    <p className="text-muted-foreground">
                      Esta promoção especial da Black November é exclusiva para o plano anual de 12 meses.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Para Assinantes Atuais</h3>
                    <p className="text-muted-foreground">
                      Se você já é assinante, precisará cancelar sua assinatura atual na Hotmart e realizar uma nova assinatura para aproveitar os preços da Black November 2025.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Lotes Limitados</h3>
                    <p className="text-muted-foreground">
                      Apenas 30 vagas disponíveis no total. Quando um lote esgotar, o próximo lote terá o preço mais alto. Garanta sua vaga agora!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(45_100%_51%/0.15),transparent_70%)]" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Não Perca Esta Oportunidade
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            O preço aumenta a cada lote vendido
          </p>
          
          <p className="text-lg text-destructive font-bold mb-8 flex items-center justify-center gap-2">
            <Clock className="w-5 h-5" />
            Esta oferta é exclusiva da Black November 2025
          </p>
          
          <Button 
            variant="hero"
            size="xl"
            onClick={() => window.location.href = checkoutUrl}
            className="animate-glow-pulse"
          >
            <Zap className="w-6 h-6 mr-2" />
            Garantir Minha Vaga Agora
          </Button>
          
          <p className="text-sm text-muted-foreground mt-6">
            Acesso liberado imediatamente após a confirmação do pagamento
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-secondary/50 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>© 2025 CCT Ensino Plus. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;

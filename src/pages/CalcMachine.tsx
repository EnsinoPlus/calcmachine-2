import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap, AlertCircle, MessageCircle, Cloud, FileText, Sparkles, MonitorPlay } from "lucide-react";

const CalcMachine = () => {
  const features = [
    {
      icon: <MonitorPlay className="w-6 h-6 text-primary" />,
      title: "100% Online",
      description: "Funciona direto no navegador. Adeus instalações complexas e problemas de compatibilidade."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "Inteligência Artificial",
      description: "Cole sua sentença (até 50.000 caracteres) ou preencha o formulário para a IA estruturar o cálculo automaticamente."
    },
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Exportação PJE Calc",
      description: "Gera o arquivo .pjc pronto para importação no seu PJE Calc local."
    },
    {
      icon: <Cloud className="w-6 h-6 text-primary" />,
      title: "Backup na Nuvem",
      description: "Seus cálculos ficam salvos e seguros na sua conta, mesmo que seu PJE Calc local tenha problemas."
    }
  ];

  const benefits = [
    "Cadastro 100% gratuito",
    "50 pontos de crédito para testar",
    "Sem necessidade de instalação",
    "Interface intuitiva e moderna",
    "Suporte técnico via WhatsApp",
    "Atualizações constantes incluídas"
  ];

  const steps = [
    {
      number: "1",
      title: "Faça seu cadastro gratuito",
      description: "Crie sua conta e receba 50 pontos para começar a testar o sistema."
    },
    {
      number: "2",
      title: "Use a Inteligência Artificial",
      description: "Cole sua sentença ou preencha o formulário. A IA vai interpretar e estruturar automaticamente."
    },
    {
      number: "3",
      title: "Exporte para o PJE Calc",
      description: "Baixe o arquivo .pjc gerado e importe diretamente no seu PJE Calc."
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/10 py-20 px-4 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(45_100%_51%/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(0_84%_55%/0.1),transparent_50%)]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <Badge variant="default" className="text-lg px-6 py-2 bg-primary animate-glow-pulse">
              <Sparkles className="w-5 h-5 mr-2 inline" />
              Versão Beta 1.0
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Calc Machine</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-scale-in">
                Evoluiu!
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Automatize seus cálculos trabalhistas no <span className="text-primary font-bold">PJE Calc</span> de forma 100% online
            </p>
            
            <div className="pt-4">
              <p className="text-lg text-primary font-semibold">
                Sem precisar instalar nada no seu computador!
              </p>
            </div>
            
            <div className="flex flex-col gap-4 justify-center items-center pt-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => {
                  window.open('https://calcmachine.ensinoplus.com.br', '_blank');
                }}
                className="w-full sm:w-auto"
              >
                <Zap className="w-6 h-6 mr-2" />
                Acessar o Calc Machine
              </Button>
              <p className="text-sm text-muted-foreground flex items-center md:mt-2">
                <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                Cadastro gratuito + 50 pontos para testar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Veja Como Funciona
            </h2>
            <p className="text-lg text-muted-foreground">
              Assista ao vídeo de demonstração da nova versão web
            </p>
          </div>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MonitorPlay className="w-20 h-20 mx-auto text-primary" />
                <p className="text-xl font-semibold text-foreground">
                  Vídeo de demonstração
                </p>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Disponível em breve. Enquanto isso, você já pode testar o sistema gratuitamente!
                </p>
                <Button 
                  variant="default"
                  size="lg"
                  onClick={() => window.open('https://calcmachine.ensinoplus.com.br', '_blank')}
                  className="mt-4"
                >
                  Testar Agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Recursos Principais
            </h2>
            <p className="text-lg text-muted-foreground">
              Tecnologia de ponta para facilitar seu trabalho
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 bg-card shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Como Usar
            </h2>
            <p className="text-lg text-muted-foreground">
              Apenas 3 passos simples para automatizar seus cálculos
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="border-2 border-border hover:border-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O Que Você Ganha
            </h2>
            <p className="text-lg text-muted-foreground">
              Tudo o que precisa para trabalhar com eficiência
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

      {/* Important Notice Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-accent/50 bg-card shadow-[0_0_40px_hsl(45_100%_51%/0.2)] animate-fade-in">
            <CardHeader>
              <CardTitle className="text-3xl text-center flex items-center justify-center gap-2">
                <AlertCircle className="w-8 h-8 text-accent" />
                Atenção - Versão Beta
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-center text-muted-foreground">
                Esta é a <span className="text-primary font-bold">versão 1.0 (Beta)</span> do Calc Machine. 
                Embora a Inteligência Artificial facilite muito o trabalho, é <span className="font-bold">fundamental</span> que você 
                confira todos os detalhes, verbas e reflexos antes de finalizar o cálculo.
              </p>
              
              <div className="bg-accent/10 border border-accent/50 rounded-lg p-6 mt-6">
                <p className="text-center font-medium">
                  Garanta que tudo esteja conforme sua peça ou sentença antes de usar o cálculo.
                </p>
              </div>
              
              <div className="text-center mt-6 space-y-2">
                <p className="text-muted-foreground">
                  Encontrou algum erro ou tem sugestões?
                </p>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://wa.me/5511972912275?text=Ol%C3%A1%2C%20gostaria%20de%20dar%20um%20feedback%20sobre%20o%20Calc%20Machine.', '_blank')}
                  className="border-2 border-primary/50 hover:bg-primary/10"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Entre em Contato pelo WhatsApp
                </Button>
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
            Comece a Usar Agora
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Cadastro gratuito + 50 pontos para testar todas as funcionalidades
          </p>
          
          <p className="text-lg text-primary font-bold mb-8">
            Sem necessidade de cartão de crédito
          </p>
          
          <Button 
            variant="hero"
            size="xl"
            onClick={() => {
              window.open('https://calcmachine.ensinoplus.com.br', '_blank');
            }}
            className="animate-glow-pulse"
          >
            <Zap className="w-6 h-6 mr-2" />
            Acessar o Calc Machine
          </Button>
          
          <p className="text-sm text-muted-foreground mt-6">
            Acesso 100% online • Sem downloads • Comece em minutos
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-secondary/50 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>© 2025 Calc Machine - Ensino Plus. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp Support Floating Button */}
      <a
        href="https://wa.me/5511972912275?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20sobre%20o%20Calc%20Machine."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-4 py-3 rounded-full shadow-xl bg-green-500 text-white hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        aria-label="Falar com suporte pelo WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">Suporte</span>
      </a>
    </main>
  );
};

export default CalcMachine;

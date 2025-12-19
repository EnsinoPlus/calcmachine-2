import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap, AlertTriangle, MessageCircle, Cloud, Cpu, FileText, Users } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "100% Online",
      description: "Adeus instalações complexas. Funciona direto no navegador."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Cadastro Gratuito",
      description: "Ao se cadastrar, você ganha 50 pontos para testar o sistema."
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Inteligência Artificial",
      description: "Cole sua sentença (até 50.000 caracteres) ou preencha o formulário para a IA estruturar o cálculo."
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Exportação PJE Calc",
      description: "O sistema gera o arquivo .pjc pronto para ser importado no seu software."
    },
    {
      icon: <Cloud className="w-8 h-8 text-primary" />,
      title: "Backup na Nuvem",
      description: "Seus cálculos ficam salvos e seguros na sua conta, mesmo que seu PJE Calc local tenha problemas."
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
            <Button
              variant="destructive"
              size="lg"
              onClick={() => {
                window.open('https://login.ensinoplus.com.br/register', '_blank');
              }}
              className="text-2xl px-10 py-4 animate-glow-pulse text-xl sm:text-2xl h-auto min-h-[3.5rem]"
            >
              <Users className="w-5 h-5 mr-2 inline" />
              Criar Conta Gratuita
            </Button>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block text-foreground">O CalcMachine</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-scale-in">
                evoluiu!
              </span>
            </h1>

            <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary text-foreground p-5 rounded-lg max-w-2xl mx-auto mb-8 shadow-sm">
              <p className="text-lg md:text-xl font-medium">
                <span className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Teste Grátis:</span> Ganhe 50 créditos ao se cadastrar agora mesmo!
              </p>
              <p className="text-sm mt-2 text-muted-foreground">
                Experimente todas as funcionalidades sem compromisso
              </p>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Agora você pode automatizar seus cálculos trabalhistas no PJE Calc de forma <span className="text-primary font-bold">100% online</span>, sem precisar instalar nada no seu computador.
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Neste vídeo, apresento a nova versão web do CalcMachine. Basta fazer login, usar a Inteligência Artificial para interpretar sua sentença ou dados, e o sistema gera automaticamente o arquivo PJC para importação.
            </p>

            <div className="my-8 flex justify-center">
              <div className="relative w-full max-w-4xl aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/QLLsiGaW_S4?si=Xn16ava1JZ818ey9"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
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
                Acesse o CalcMachine
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O Que Você Vai Ver Nesta Plataforma
            </h2>
            <p className="text-lg text-muted-foreground">
              Descubra as novidades da versão web
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 bg-card shadow-[0_10px_40px_hsl(0_0%_0%/0.5)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beta Warning Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-destructive/50 bg-destructive/5 shadow-[0_0_40px_hsl(0_84%_55%/0.2)] animate-fade-in">
            <CardHeader>
              <CardTitle className="text-3xl text-center flex items-center justify-center gap-2 text-destructive">
                <AlertTriangle className="w-8 h-8" />
                Atenção (Versão Beta)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-center">
                Esta é a versão 1.0 (Beta) da ferramenta. Embora a IA facilite muito o trabalho, é fundamental que você confira todos os detalhes, verbas e reflexos antes de finalizar o cálculo, para garantir que tudo esteja conforme a sua peça ou sentença.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Encontrou Algum Erro ou Tem Sugestões?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Deixe aqui nos comentários ou entre em contato pelo WhatsApp disponível na tela inicial do sistema.
            </p>

            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://wa.me/5511972912275?text=Olá,%20gostaria%20de%20dar%20um%20feedback%20sobre%20o%20Calc%20Machine', '_blank')}
              className="border-2 border-primary/50 hover:bg-primary/10"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Enviar Feedback pelo WhatsApp
            </Button>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-8 px-4 bg-secondary/50 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p> 2025 CCT Ensino Plus. Todos os direitos reservados.</p>
          <p>© 2025 CCT Ensino Plus. Todos os direitos reservados.</p>
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

export default Index;

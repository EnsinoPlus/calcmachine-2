import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";

const ThankYou = () => {
  const whatsappLink = "https://wa.me/5511972912275?text=Ol%C3%A1%2C%20acabei%20de%20assinar%20o%20CCT%20e%20gostaria%20de%20falar%20com%20o%20suporte.";

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/30 py-16 px-4">
      <section className="container mx-auto max-w-4xl">
        <Card className="border-2 border-primary/50 shadow-[0_20px_60px_rgba(0,0,0,0.15)] animate-fade-in">
          <CardHeader className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-1 text-primary font-semibold">
              Sua assinatura está confirmada
            </Badge>
            <CardTitle className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3">
              <CheckCircle2 className="w-12 h-12 text-primary" />
              Bem-vindo(a) ao Clube do Cálculo Trabalhista
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Obrigado por assinar o CCT! Seu acesso anual já está liberado. Você receberá um e-mail com os próximos passos e credenciais.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-primary/5 border border-primary/20 p-6 space-y-3">
                <h2 className="text-xl font-semibold text-primary">O que acontece agora?</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span>Acesso imediato ao portal do CCT com todo o conteúdo liberado.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span>E-mail com instruções detalhadas e dados da sua assinatura.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span>Suporte prioritário para ajudar nos primeiros passos.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 space-y-4">
                <h2 className="text-xl font-semibold">Precisa de ajuda?</h2>
                <p className="text-muted-foreground">
                  Nossa equipe está disponível para te apoiar durante toda a jornada. Fale conosco pelo WhatsApp ou retorne para a página inicial.
                </p>

                <div className="flex flex-col gap-3">
                  <Button asChild variant="default" className="inline-flex items-center gap-2">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      Falar com o suporte
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="inline-flex items-center gap-2">
                    <a href="/">
                      Voltar para a página inicial
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-secondary/30 border border-secondary/50 p-6">
              <h3 className="text-lg font-semibold mb-2">Próximos passos recomendados</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Acesse o portal do CCT e explore a trilha sugerida para você.</li>
                <li>Participe da comunidade exclusiva de alunos para tirar dúvidas e compartilhar experiências.</li>
              </ul>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <p>Ficou com alguma dúvida? Envie um e-mail para suporte@ensinoplus.com.br ou fale com nossa equipe pelo WhatsApp.</p>
            <p>© {new Date().getFullYear()} CCT Ensino Plus. Todos os direitos reservados.</p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
};

export default ThankYou;

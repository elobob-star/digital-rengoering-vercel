export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🧹</span>
              <span className="font-bold text-xl text-gray-900">Digital Rengøring</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 transition">Sådan virker det</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition">Priser</a>
              <a href="#faq" className="text-gray-600 hover:text-primary-600 transition">FAQ</a>
              <a href="#contact" className="bg-primary-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-primary-700 transition">
                Kom i gang
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary-600 animate-pulse"></span>
            🚀 Første kunde får 50% rabat
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Stop med at spilde tid på{' '}
            <span className="text-primary-600">rodde Excel-filer</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Send din fil kl. 18. Vågn op til en professionelt rengjort fil kl. 08. 
            Fast pris. Ingen overraskelser. 100% tilfredshedsgaranti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition shadow-lg shadow-primary-600/25">
              Få et tilbud nu
            </a>
            <a href="#how-it-works" className="bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-300 transition">
              Se hvordan det virker
            </a>
          </div>
          
          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              <span>Levering inden for 24t</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              <span>Faste priser</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              <span>Dansk ejer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Hvad jeg fixer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fra simple oprydninger til komplekse migreringer. Jeg klarer det hele mens du sover.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📊', title: 'Excel & CSV', desc: 'Fjerner dubletter, fixer formater, kombinerer filer, rydder op i rod.' },
              { icon: '🛍️', title: 'Webshop-data', desc: 'Migrering mellem Shopify, Etsy, WooCommerce. Produktlister rettet op.' },
              { icon: '👥', title: 'Kontaktliste', desc: 'Validering af emails og telefonnumre. Dubletter fjernet. GDPR-klar.' },
              { icon: '📋', title: 'Konvertering', desc: 'CSV ↔ JSON ↔ XML. Tegnsæt fixet. Datoer og valuta standardiseret.' },
            ].map((service, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-primary-200 transition group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Sådan virker det</h2>
            <p className="text-lg text-gray-600">4 simple trin fra rod til rent</p>
          </div>
          
          <div className="space-y-8">
            {[
              { step: '1', title: 'Send din fil', desc: 'Email mig din fil med en kort beskrivelse af, hvad der skal fixes. Modtagelse bekræftes inden for 1 time.' },
              { step: '2', title: 'Få fast pris', desc: 'Jeg analyserer din fil og sender et tilbud inden for 2 timer. Ingen skjulte gebyrer, ingen binding.' },
              { step: '3', title: 'Betal nemt', desc: 'Godkend tilbuddet og betal via MobilePay. Nemt, hurtigt og sikkert.' },
              { step: '4', title: 'Modtag resultatet', desc: 'Jeg arbejder natten over. Du vågner til en professionelt rengjort fil i din indbakke.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Faste, gennemsigtige priser</h2>
            <p className="text-lg text-gray-600">Ingen timepriser. Ingen overraskelser. Du ved præcis, hvad du betaler.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Lille', rows: 'Op til 1.000 rækker', price: '299', desc: 'Perfekt til små lister og hurtige fixes', features: ['Dubletter fjernet', 'Formatering fixet', 'Levering inden for 24t'] },
              { name: 'Medium', rows: '1.000 - 10.000 rækker', price: '799', desc: 'Standard for webshops og kontaktliste', features: ['Alt fra Lille', 'Data-validering', 'Rapport inkluderet', 'Prioriteret support'], popular: true },
              { name: 'Stor', rows: '10.000+ rækker', price: '1.499', desc: 'Store migreringer og komplekse projekter', features: ['Alt fra Medium', 'Komplekse migreringer', 'Tilpasset løsning', 'Telefon-support'] },
            ].map((plan, i) => (
              <div key={i} className={`relative rounded-2xl p-8 ${plan.popular ? 'bg-primary-600 text-white ring-4 ring-primary-600/20 scale-105' : 'bg-white border border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mest populær
                  </div>
                )}
                <h3 className={`font-bold text-xl mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-primary-100' : 'text-gray-500'}`}>{plan.rows}</p>
                <div className="mb-6">
                  <span className={`text-4xl font-extrabold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                  <span className={`${plan.popular ? 'text-primary-200' : 'text-gray-500'}`}> kr</span>
                </div>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-primary-100' : 'text-gray-600'}`}>{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-sm">
                      <svg className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-green-400' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      <span className={plan.popular ? 'text-white' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block text-center py-3 rounded-full font-semibold transition ${plan.popular ? 'bg-white text-primary-600 hover:bg-gray-100' : 'bg-primary-600 text-white hover:bg-primary-700'}`}>
                  Vælg {plan.name}
                </a>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-500 mt-8 text-sm">
            * Ved særligt komplekse opgaver aftales pris forinden. Ingen arbejde påbegyndes uden godkendelse.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hvad kunder siger</h2>
            <p className="text-gray-600">Din anmeldelse kan komme her</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-600 italic mb-6 text-lg">
              "Jeg havde en produktliste med over 2000 varer fra min gamle webshop, der var helt ude af kontrol. 
              Om morgenen havde jeg en perfekt struktureret fil klar til min nye Shopify-butik. 
              Det sparede mig uger af arbejde!"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">
                MK
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Maria K.</div>
                <div className="text-sm text-gray-500">Ejer, Nordic Home Decor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ofte stillede spørgsmål</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { q: 'Hvor hurtigt får jeg min fil tilbage?', a: 'Som regel natten over. Hvis du sender filen inden kl. 18, ligger den rensede fil i din indbakke næste morgen kl. 08. Ved større projekter aftales tidsplanen på forhånd.' },
              { q: 'Er mine data sikre?', a: 'Ja. Jeg behandler alle data fortroligt og sletter filerne permanent efter levering og din godkendelse. Ingen data deles med tredjepart.' },
              { q: 'Hvad hvis jeg ikke er tilfreds?', a: 'Jeg tilbyder 100% tilfredshedsgaranti. Hvis resultatet ikke lever op til dine forventninger, retter jeg det uden ekstra omkostninger.' },
              { q: 'Kan du håndtere fortrolige data?', a: 'Ja. Jeg har erfaring med persondata og følger gældende GDPR-regler. Data behandles sikkert og fortroligt.' },
              { q: 'Hvilke filformater accepterer du?', a: 'Excel (.xlsx, .xls), CSV, JSON, XML og de fleste andre almindelige formater. Er du i tvivl, så spørg!' },
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Klar til at få ryddet op?</h2>
          <p className="text-primary-100 text-lg mb-8">
            Send din fil nu og vågn op til professionelt rengjorte data.
          </p>
          
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500">Email</div>
                  <a href="mailto:baandrupbobpc@gmail.com" className="font-semibold text-gray-900 hover:text-primary-600">baandrupbobpc@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500">MobilePay</div>
                  <span className="font-semibold text-gray-900">+45 31 10 59 16</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-600">
                💡 <strong>Tip:</strong> Vedhæft din fil og beskriv kort, hvad der skal fixes. 
                Jeg vender tilbage inden for 2 timer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🧹</span>
            <span className="font-semibold text-white">Digital Rengøring</span>
          </div>
          <p className="text-sm">© 2025 Digital Rengøring. Dansk ejer.</p>
          <div className="flex gap-6 text-sm">
            <a href="mailto:baandrupbobpc@gmail.com" className="hover:text-white transition">Kontakt</a>
            <span className="hover:text-white transition">CVR: [Dit CVR]</span>
          </div>
        </div>
      </footer>
    </main>
  )
}

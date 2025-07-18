import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет логика отправки формы
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Шапка */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Rocket" className="text-progress-orange" size={32} />
              <h1 className="text-2xl font-bold text-progress-blue font-montserrat">ПРОГРЕСС 3.0</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-progress-blue transition-colors">О курсе</a>
              <a href="#program" className="text-gray-700 hover:text-progress-blue transition-colors">Программа</a>
              <a href="#pricing" className="text-gray-700 hover:text-progress-blue transition-colors">Тарифы</a>
              <a href="#contact" className="text-gray-700 hover:text-progress-blue transition-colors">Контакты</a>
            </nav>
            <Button className="bg-progress-orange hover:bg-progress-orange/90 text-white">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Стартовая секция */}
      <section className="relative bg-gradient-to-r from-progress-blue to-blue-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-progress-orange text-white px-4 py-2 text-lg animate-pulse">
              Уже стартует 16 февраля 2024!
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-montserrat leading-tight">
              Программа наставничества от Елены Сергелиевой — 
              <span className="text-yellow-300"> ПРОГРЕСС 3.0</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 font-open-sans">
              Масштабируйте бизнес, зарабатывайте больше уже через 2 недели
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-progress-orange hover:bg-progress-orange/90 text-white px-8 py-4 text-lg font-semibold">
                Начать прямо сейчас
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-progress-blue px-8 py-4 text-lg">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Кому поможет программа */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
              Кому точно будет полезно
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Программа создана для амбициозных предпринимателей, готовых к прорыву
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "TrendingUp",
                title: "Владельцам бизнеса",
                description: "Которые хотят увеличить прибыль и масштабировать компанию"
              },
              {
                icon: "Users",
                title: "Руководителям отделов",
                description: "Желающим повысить эффективность команды и результаты"
              },
              {
                icon: "Target",
                title: "Предпринимателям",
                description: "Стремящимся к системному росту и стабильному доходу"
              },
              {
                icon: "Lightbulb",
                title: "Новичкам в бизнесе",
                description: "Которые не знают, с чего начать и как не совершить ошибок"
              },
              {
                icon: "BarChart",
                title: "Опытным игрокам",
                description: "Застрявшим на плато и ищущим новые точки роста"
              },
              {
                icon: "Zap",
                title: "Тем, кто готов действовать",
                description: "И внедрять полученные знания уже в процессе обучения"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-progress-orange/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-progress-orange/10 rounded-full flex items-center justify-center">
                    <Icon name={item.icon as any} className="text-progress-orange" size={32} />
                  </div>
                  <CardTitle className="text-xl font-montserrat">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center font-open-sans">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Автор курса */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-progress-blue mb-6 font-montserrat">
                  Автор курса — Елена Сергелиева
                </h2>
                <div className="space-y-6 text-gray-700 font-open-sans">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-progress-orange mt-1" size={20} />
                    <p>15+ лет опыта в построении и масштабировании бизнеса</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-progress-orange mt-1" size={20} />
                    <p>Основатель и CEO компании с оборотом 500+ млн рублей</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-progress-orange mt-1" size={20} />
                    <p>Наставник для 200+ предпринимателей по всему миру</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-progress-orange mt-1" size={20} />
                    <p>Автор методики "Прогрессивного роста" с доказанной эффективностью</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-progress-orange mt-1" size={20} />
                    <p>Спикер на крупнейших бизнес-конференциях России и СНГ</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button size="lg" className="bg-progress-orange hover:bg-progress-orange/90 text-white">
                    ХОЧУ ТАКЖЕ
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-progress-blue to-blue-600 rounded-2xl p-8 text-white">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Icon name="User" size={64} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Елена Сергелиева</h3>
                    <p className="text-white/90 mb-6">Бизнес-наставник, предприниматель, автор методики "Прогрессивного роста"</p>
                    <div className="flex justify-center space-x-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-300">15+</div>
                        <div className="text-sm text-white/80">лет опыта</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-300">200+</div>
                        <div className="text-sm text-white/80">учеников</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-300">500+</div>
                        <div className="text-sm text-white/80">млн оборот</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Программа курса */}
      <section id="program" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
              Что вы получите
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Пошаговая программа трансформации вашего бизнеса за 8 недель
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                week: "1 неделя",
                title: "Диагностика и анализ",
                description: "Полный аудит текущего состояния бизнеса, выявление точек роста и узких мест"
              },
              {
                week: "2 неделя",
                title: "Стратегия развития",
                description: "Создание индивидуальной стратегии масштабирования с четкими KPI и метриками"
              },
              {
                week: "3-4 неделя",
                title: "Оптимизация процессов",
                description: "Внедрение систем автоматизации и делегирования для повышения эффективности"
              },
              {
                week: "5-6 неделя",
                title: "Увеличение прибыли",
                description: "Работа с ценообразованием, upsell и cross-sell стратегиями"
              },
              {
                week: "7 неделя",
                title: "Масштабирование",
                description: "Подготовка к росту: найм, обучение команды, развитие лидерских качеств"
              },
              {
                week: "8 неделя",
                title: "Закрепление результатов",
                description: "Создание системы поддержания достигнутых результатов и планы дальнейшего развития"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-progress-orange/30 hover:scale-105">
                <CardHeader className="text-center">
                  <Badge className="mb-4 bg-progress-blue text-white mx-auto w-fit">
                    {item.week}
                  </Badge>
                  <CardTitle className="text-lg font-montserrat text-progress-blue">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center font-open-sans text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-progress-orange hover:bg-progress-orange/90 text-white px-8 py-4 text-lg">
              Получить программу
              <Icon name="Download" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Тарифы */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
              Выбирайте свой тариф
            </h2>
            <p className="text-xl text-red-600 font-semibold mb-4">
              ⚠️ Осталось всего 75 мест из 100!
            </p>
            <p className="text-gray-600 font-open-sans">
              Инвестируйте в свое будущее уже сегодня
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "СТАРТ",
                price: "49 990",
                originalPrice: "79 990",
                features: [
                  "8 недель интенсивного обучения",
                  "Доступ к закрытому сообществу",
                  "Рабочие материалы и шаблоны",
                  "Базовая поддержка куратора"
                ],
                popular: false
              },
              {
                name: "ПРОГРЕСС",
                price: "99 990",
                originalPrice: "149 990",
                features: [
                  "Всё из тарифа СТАРТ",
                  "Персональные консультации 1:1",
                  "Индивидуальный план развития",
                  "Приоритетная поддержка",
                  "Доступ к вебинарам экспертов"
                ],
                popular: true
              },
              {
                name: "VIP",
                price: "199 990",
                originalPrice: "299 990",
                features: [
                  "Всё из тарифа ПРОГРЕСС",
                  "Еженедельные звонки с Еленой",
                  "Персональный куратор",
                  "Разбор вашего бизнеса",
                  "Годовая поддержка",
                  "Приглашение на закрытые мероприятия"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'border-2 border-progress-orange scale-105' : 'border'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-progress-orange text-white px-4 py-2 text-sm">
                      🔥 ПОПУЛЯРНЫЙ
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-montserrat text-progress-blue">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-progress-orange">
                      {plan.price}
                    </span>
                    <span className="text-gray-600"> ₽</span>
                    <div className="text-sm text-gray-500 line-through">
                      {plan.originalPrice} ₽
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Icon name="Check" className="text-progress-orange mt-1" size={16} />
                        <span className="text-gray-700 text-sm font-open-sans">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-progress-orange hover:bg-progress-orange/90' : 'bg-progress-blue hover:bg-progress-blue/90'} text-white`}
                    size="lg"
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 max-w-2xl mx-auto">
              <div className="flex items-center">
                <Icon name="Clock" className="text-yellow-600 mr-3" size={24} />
                <div>
                  <p className="text-yellow-800 font-semibold">
                    Раннее бронирование до 1 февраля - скидка 25%!
                  </p>
                  <p className="text-yellow-700 text-sm">
                    После 1 февраля цены вернутся к обычным
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <section id="contact" className="py-20 bg-gradient-to-br from-progress-blue to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-montserrat">
              Хватай возможность!
            </h2>
            <p className="text-xl text-white/90 font-open-sans">
              Оставьте заявку и получите бесплатную консультацию по развитию вашего бизнеса
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-white mb-2 block">
                        Ваше имя *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/20 border-white/30 text-white placeholder-white/70"
                        placeholder="Введите имя"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/20 border-white/30 text-white placeholder-white/70"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white mb-2 block">
                      Телефон *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-white/20 border-white/30 text-white placeholder-white/70"
                      placeholder="+7 (999) 999-99-99"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block">
                      Расскажите о вашем бизнесе
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/20 border-white/30 text-white placeholder-white/70 min-h-[100px]"
                      placeholder="Кратко опишите ваш бизнес и цели..."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-progress-orange hover:bg-progress-orange/90 text-white text-lg py-4"
                  >
                    Получить консультацию
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                </form>
                <p className="text-center text-white/80 text-sm mt-4">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Rocket" className="text-progress-orange" size={28} />
                <h3 className="text-xl font-bold font-montserrat">ПРОГРЕСС 3.0</h3>
              </div>
              <p className="text-gray-400 font-open-sans">
                Программа наставничества для масштабирования бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@progress3.ru</p>
                <p>Телефон: +7 (495) 123-45-67</p>
                <p>Telegram: @progress3support</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Полезное</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                  Отзывы учеников
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                  Блог
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                  FAQ
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-progress-orange transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-progress-orange transition-colors">
                  <Icon name="MessageCircle" size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-progress-orange transition-colors">
                  <Icon name="Youtube" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ПРОГРЕСС 3.0. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('design');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-figma-purple to-figma-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="text-xl font-bold text-gray-900">figma</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#features" className="text-gray-700 hover:text-figma-purple transition-colors">Features</a>
                <a href="#pricing" className="text-gray-700 hover:text-figma-purple transition-colors">Pricing</a>
                <a href="#resources" className="text-gray-700 hover:text-figma-purple transition-colors">Resources</a>
                <a href="#community" className="text-gray-700 hover:text-figma-purple transition-colors">Community</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-figma-purple">
                Log in
              </Button>
              <Button className="bg-figma-purple hover:bg-figma-purple/90 text-white">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Nothing great is made
                <br />
                <span className="bg-gradient-to-r from-figma-purple to-figma-blue bg-clip-text text-transparent">
                  alone
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Figma connects everyone in the design process so teams can deliver better products, faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-figma-purple hover:bg-figma-purple/90 text-white px-8 py-4 text-lg">
                  Get started for free
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg">
                  <Icon name="Play" className="mr-2" size={20} />
                  Watch the film
                </Button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-figma-purple/5 to-figma-blue/5 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-figma-orange rounded-full"></div>
                        <div>
                          <div className="h-3 bg-gray-200 rounded w-20"></div>
                          <div className="h-2 bg-gray-100 rounded w-16 mt-1"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 bg-figma-purple/20 rounded"></div>
                        <div className="h-4 bg-figma-blue/20 rounded w-4/5"></div>
                        <div className="h-4 bg-figma-green/20 rounded w-3/5"></div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-lg">
                      <div className="flex items-center space-x-2 mb-3">
                        <Icon name="MessageCircle" className="text-figma-purple" size={16} />
                        <span className="text-sm font-medium">Comments</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-200 rounded w-full"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-figma-purple to-figma-blue rounded-2xl mx-auto mb-4"></div>
                        <h3 className="text-lg font-semibold text-gray-900">Design System</h3>
                        <p className="text-sm text-gray-600">Components & Styles</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-figma-orange rounded"></div>
                          <div className="h-3 bg-gray-200 rounded flex-1"></div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-figma-green rounded-full"></div>
                          <div className="h-3 bg-gray-200 rounded flex-1"></div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-figma-blue rounded-lg"></div>
                          <div className="h-3 bg-gray-200 rounded flex-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4 shadow-lg">
                      <div className="flex items-center space-x-2 mb-3">
                        <Icon name="Users" className="text-figma-green" size={16} />
                        <span className="text-sm font-medium">Team</span>
                      </div>
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 bg-figma-purple rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-figma-orange rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-figma-green rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-figma-blue rounded-full border-2 border-white flex items-center justify-center text-xs text-white">
                          +5
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-lg">
                      <div className="flex items-center space-x-2 mb-3">
                        <Icon name="Zap" className="text-figma-blue" size={16} />
                        <span className="text-sm font-medium">Plugins</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-8 bg-gradient-to-r from-figma-purple/20 to-figma-blue/20 rounded"></div>
                        <div className="h-8 bg-gradient-to-r from-figma-orange/20 to-figma-green/20 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Design, prototype, and gather feedback all in one place
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Figma makes it easy for everyone to collaborate throughout the design process.
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <div className="flex bg-gray-100 rounded-lg p-1">
                {[
                  { key: 'design', label: 'Design', icon: 'Palette' },
                  { key: 'prototype', label: 'Prototype', icon: 'Zap' },
                  { key: 'collaborate', label: 'Collaborate', icon: 'Users' }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all ${
                      activeTab === tab.key
                        ? 'bg-white shadow-sm text-figma-purple'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Icon name={tab.icon as any} size={20} />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                {activeTab === 'design' && (
                  <div className="animate-fade-in">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      Design with precision
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-figma-purple rounded-full mt-2"></div>
                        <p className="text-gray-700">Vector editing with pen tool and bezier curves</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-figma-orange rounded-full mt-2"></div>
                        <p className="text-gray-700">Advanced layout grids and constraints</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-figma-green rounded-full mt-2"></div>
                        <p className="text-gray-700">Reusable components and design systems</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-figma-blue rounded-full mt-2"></div>
                        <p className="text-gray-700">Real-time collaboration and version control</p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'prototype' && (
                  <div className="animate-fade-in">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      Prototype interactions
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-figma-purple rounded-full mt-2"></div>
                        <p className="text-gray-700">Interactive prototypes with smart animations</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-figma-orange rounded-full mt-2"></div>
                        <p className="text-gray-700">Advanced transitions and micro-interactions</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-figma-green rounded-full mt-2"></div>
                        <p className="text-gray-700">Device-specific previews and testing</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-figma-blue rounded-full mt-2"></div>
                        <p className="text-gray-700">Share prototypes with stakeholders</p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'collaborate' && (
                  <div className="animate-fade-in">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      Collaborate seamlessly
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-figma-purple rounded-full mt-2"></div>
                        <p className="text-gray-700">Real-time multiplayer editing</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-figma-orange rounded-full mt-2"></div>
                        <p className="text-gray-700">Contextual comments and feedback</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-figma-green rounded-full mt-2"></div>
                        <p className="text-gray-700">Developer handoff with code snippets</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-figma-blue rounded-full mt-2"></div>
                        <p className="text-gray-700">Team libraries and shared assets</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm text-gray-500">Mobile App Design</div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-figma-purple to-figma-blue h-32 rounded-lg"></div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-figma-orange/20 h-12 rounded"></div>
                      <div className="bg-figma-green/20 h-12 rounded"></div>
                      <div className="bg-figma-blue/20 h-12 rounded"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-figma-purple rounded-full"></div>
                      <div className="flex-1 h-3 bg-gray-200 rounded"></div>
                      <Icon name="MessageCircle" className="text-figma-orange" size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Plans for every team
              </h2>
              <p className="text-xl text-gray-600">
                Start for free, then scale as your team grows
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Starter',
                  price: 'Free',
                  description: 'For individuals getting started',
                  features: [
                    '3 Figma files',
                    '3 FigJam files',
                    'Unlimited personal files',
                    'Unlimited collaborators',
                    'Plugin access'
                  ],
                  color: 'figma-purple',
                  popular: false
                },
                {
                  name: 'Professional',
                  price: '$15',
                  priceUnit: 'per editor/month',
                  description: 'For teams building design systems',
                  features: [
                    'Unlimited Figma files',
                    'Unlimited FigJam files',
                    'Unlimited version history',
                    'Team libraries',
                    'Advanced prototyping',
                    'Dev Mode'
                  ],
                  color: 'figma-orange',
                  popular: true
                },
                {
                  name: 'Organization',
                  price: '$45',
                  priceUnit: 'per editor/month',
                  description: 'For organizations with advanced security',
                  features: [
                    'Everything in Professional',
                    'Organization-wide libraries',
                    'Advanced admin controls',
                    'Design system analytics',
                    'Guest access controls',
                    'SAML SSO'
                  ],
                  color: 'figma-green',
                  popular: false
                }
              ].map((plan, index) => (
                <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-figma-orange scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-figma-orange text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.priceUnit && <span className="text-gray-600 ml-2">{plan.priceUnit}</span>}
                    </div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Icon name="Check" className={`text-${plan.color} mt-1`} size={16} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-figma-orange hover:bg-figma-orange/90' : 'bg-figma-purple hover:bg-figma-purple/90'} text-white`}
                      size="lg"
                    >
                      {plan.price === 'Free' ? 'Get started' : 'Start free trial'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join the community
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Connect with millions of designers and developers worldwide
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-figma-purple/20 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-figma-purple/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Users" className="text-figma-purple" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Community</h3>
                  <p className="text-gray-600">Share files, get feedback, and find inspiration</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-figma-orange/20 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-figma-orange/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="BookOpen" className="text-figma-orange" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Resources</h3>
                  <p className="text-gray-600">Templates, plugins, and design education</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-figma-green/20 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-figma-green/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Zap" className="text-figma-green" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Events</h3>
                  <p className="text-gray-600">Workshops, conferences, and meetups</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-figma-purple to-figma-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to start designing?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join millions of designers and developers who use Figma to create amazing products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-figma-purple hover:bg-gray-100 px-8 py-4 text-lg">
                Get started for free
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Contact sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-figma-purple to-figma-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="text-xl font-bold">figma</span>
              </div>
              <p className="text-gray-400">
                The collaborative interface design tool.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Design</a>
                <a href="#" className="block hover:text-white transition-colors">Prototype</a>
                <a href="#" className="block hover:text-white transition-colors">Dev Mode</a>
                <a href="#" className="block hover:text-white transition-colors">FigJam</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Templates</a>
                <a href="#" className="block hover:text-white transition-colors">Plugins</a>
                <a href="#" className="block hover:text-white transition-colors">Best practices</a>
                <a href="#" className="block hover:text-white transition-colors">Help center</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">About</a>
                <a href="#" className="block hover:text-white transition-colors">Careers</a>
                <a href="#" className="block hover:text-white transition-colors">Press</a>
                <a href="#" className="block hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Figma, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
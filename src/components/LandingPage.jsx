import React from 'react';
import { ArrowRight, Zap, Users, FileCheck, BarChart3, CreditCard } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-indigo-500" />,
    title: 'Project Management',
    description: 'Streamline your creative workflow with our intuitive Kanban board interface.',
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-500" />,
    title: 'Creative Collaboration',
    description: 'Real-time feedback and annotation tools for seamless teamwork.',
  },
  {
    icon: <FileCheck className="w-6 h-6 text-indigo-500" />,
    title: 'Client Approval',
    description: 'Simplify the review process with our built-in approval system.',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-indigo-500" />,
    title: 'Performance Tracking',
    description: 'Monitor KPIs and generate insightful reports for project analysis.',
  },
  {
    icon: <CreditCard className="w-6 h-6 text-indigo-500" />,
    title: 'Billing & Invoicing',
    description: 'Automate your financial processes with integrated payment solutions.',
  },
];

function LandingPage() {
  return (
    <div>
      {/* Hero section */}
      <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Streamline Your</span>
          <span className="block text-indigo-600">Creative Workflow</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Spark is the ultimate collaboration platform for agencies and clients. Simplify project management, boost communication, and deliver outstanding results.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
              Get started
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
              Live demo
            </a>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="py-12 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">A better way to send money.</h2>
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Boost your productivity.</span>
            <span className="block">Start using Spark today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Empower your team with the tools they need to succeed. Join thousands of satisfied agencies and clients already using Spark.
          </p>
          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Sign up for free
            <ArrowRight className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
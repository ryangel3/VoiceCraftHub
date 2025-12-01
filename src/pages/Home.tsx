import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/card'; // Adjust path if needed

function Home() {
  const navigate = useNavigate();

  return (
    <main className="bg-background min-h-screen font-sans text-foreground">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">

        {/* Navigation */}
        <nav className="flex justify-between items-center py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-primary">VoiceCraftHub</h1>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/certifications">Certifications</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/enroll" className="text-primary">Enroll</a></li>
          </ul>
        </nav>

        {/* Hero Section */}
        <section className="space-y-6">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Welcome to <span className="text-primary">VoiceCraftHub</span>
          </h2>
          <p className="text-lg text-gray-600">
            An international platform for voice training and certifications. Explore programs in{' '}
            <em>Spoken English</em>, Public Speaking, Podcasting, and Vocal Singing.
          </p>
        </section>

        {/* Get Started Card */}
        <Card title="Get Started" className="bg-white rounded-xl shadow-card p-6">
          <p className="mb-4 text-gray-700">
            Enroll today and begin your journey with <em>certified programs</em>.
          </p>
          <button
            onClick={() => navigate('/enroll')}
            className="bg-primary text-white px-6 py-2 rounded-xl shadow-button hover:scale-105 transition-transform duration-200"
          >
            Enroll Now
          </button>
        </Card>

     </div>
    </main>
  );
}

export default Home;
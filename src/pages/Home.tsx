import { useNavigate } from 'react-router-dom';
import Card from '../components/UI/card'; // Adjust path if needed

function Home() {
  const navigate = useNavigate();

  return (
    <main className="bg-background min-h-screen font-sans text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Welcome to <span className="text-primary">VoiceCraftHub</span>
        </h1>
        <p className="text-lg text-gray-600">
          An international platform for voice training and certifications. Explore programs in{' '}
          <em>Spoken English</em>, Public Speaking, Podcasting, and Vocal Singing.
        </p>
        <Card title="Get Started" className="shadow-card rounded-xl p-6 bg-white">
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
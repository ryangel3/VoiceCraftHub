import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/card'; // Adjust path if needed

function Home() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome to VoiceCraftHub</h1>
      <p>
        An international platform for voice training and certifications.
        Explore programs in <em>Spoken English</em>, Public Speaking, Podcasting, and Vocal Singing.
      </p>
      <Card title="Get Started">
        <p className="mb-4">
          Enroll today and begin your journey with <em>certified programs</em>.
        </p>
        <button
          onClick={() => navigate('/enroll')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Enroll Now
        </button>
      </Card>
    </div>
  );
}

export default Home;
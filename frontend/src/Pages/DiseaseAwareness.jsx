import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const DiseaseAwarenessPage = () => {
  // State to manage expandable sections
  const [isHeartDiseaseExpanded, setIsHeartDiseaseExpanded] = useState(false);
  const [isSkinDiseaseExpanded, setIsSkinDiseaseExpanded] = useState(false);
  const [isDiabetesExpanded, setIsDiabetesExpanded] = useState(false);
  const [isOtherDiseasesExpanded, setIsOtherDiseasesExpanded] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  // Function to toggle section expansion
  const toggleSection = (section) => {
    switch (section) {
      case 'heart':
        setIsHeartDiseaseExpanded(!isHeartDiseaseExpanded);
        break;
      case 'skin':
        setIsSkinDiseaseExpanded(!isSkinDiseaseExpanded);
        break;
      case 'diabetes':
        setIsDiabetesExpanded(!isDiabetesExpanded);
        break;
      case 'other':
        setIsOtherDiseasesExpanded(!isOtherDiseasesExpanded);
        break;
      default:
        break;
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch answer from llm based on the question
    // For now, let's just set a dummy answer
    setAnswer(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor arcu ac magna consequat, vel scelerisque ligula condimentum. Vivamus at turpis ut felis pulvinar bibendum.`);
  };

  // Function to render the "Read More" button
  const renderReadMoreButton = (section) => {
    switch (section) {
      case 'heart':
        return (
          <button onClick={() => toggleSection('heart')} className="text-blue-500">Read More</button>
        );
      case 'skin':
        return (
          <button onClick={() => toggleSection('skin')} className="text-blue-500">Read More</button>
        );
      case 'diabetes':
        return (
          <button onClick={() => toggleSection('diabetes')} className="text-blue-500">Read More</button>
        );
      case 'other':
        return (
          <button onClick={() => toggleSection('other')} className="text-blue-500">Read More</button>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Disease Awareness</h1>
        <hr className="mb-4" />

        {/* Question Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <label className="block mb-2">Ask a question about diseases:</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mb-2"
            placeholder="Type your question here..."
          />
          <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </form>

        {/* Answer Section */}
        {answer && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Answer:</h2>
            <p className="text-gray-700">{answer}</p>
          </div>
        )}

        {/* Heart Diseases Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 cursor-pointer" onClick={() => toggleSection('heart')}>Heart Diseases</h2>
          <div className="text-gray-700 mb-4">
            <p>Heart diseases are conditions that affect the heart's structure or function. Common types include:</p>
            {isHeartDiseaseExpanded ? (
              <>
                <p>Coronary artery disease (CAD) is the most common type of heart disease. It occurs when the blood vessels that supply blood to the heart become narrowed or blocked due to a buildup of plaque.</p>
                <p>Heart attack, also known as myocardial infarction, happens when blood flow to a part of the heart is blocked for a long enough time that part of the heart muscle is damaged or dies.</p>
                <p>Heart failure occurs when the heart muscle doesn't pump blood as well as it should. It can result from conditions such as CAD, high blood pressure, or cardiomyopathy.</p>
                <p>Arrhythmias are abnormal heart rhythms. They can cause the heart to beat too fast, too slow, or irregularly. Common types include atrial fibrillation and ventricular tachycardia.</p>
                <p>Heart valve diseases involve problems with one or more of the heart's valves. This can affect the flow of blood through the heart chambers.</p>
              </>
            ) : null}
            {renderReadMoreButton('heart')}
          </div>
        </div>

        {/* Skin Diseases Section */}
        
<div className="mb-8">
  <h2 className="text-xl font-semibold mb-2 cursor-pointer" onClick={() => toggleSection('skin')}>Skin Diseases</h2>
  <div className="text-gray-700 mb-4">
    <p>Skin diseases are conditions that affect the skin's appearance, texture, or function. Common types include:</p>
    {isSkinDiseaseExpanded ? (
      <>
        <p>Acne is a common skin condition that occurs when hair follicles become clogged with oil and dead skin cells. It can lead to pimples, blackheads, and whiteheads.</p>
        <p>Eczema, also known as atopic dermatitis, causes dry, itchy skin and inflammation. It can flare up periodically and may be triggered by certain factors like allergens or stress.</p>
        <p>Psoriasis is a chronic autoimmune condition that causes rapid skin cell growth, leading to thick, red, scaly patches on the skin. It can be triggered by factors such as stress, infections, or certain medications.</p>
        <p>Dermatitis refers to inflammation of the skin and can have various causes, including allergic reactions, irritants, or genetic factors. Symptoms may include redness, itching, and rash.</p>
        <p>Rosacea is a chronic inflammatory skin condition that primarily affects the face. It causes redness, visible blood vessels, and small, red bumps resembling acne.</p>
      </>
    ) : null}
    {renderReadMoreButton('skin')}
  </div>
</div>

        {/* Diabetes Section */}
        
<div className="mb-8">
  <h2 className="text-xl font-semibold mb-2 cursor-pointer" onClick={() => toggleSection('diabetes')}>Diabetes</h2>
  <div className="text-gray-700 mb-4">
    <p>Diabetes is a chronic condition that affects how your body processes blood sugar (glucose). Common types include:</p>
    {isDiabetesExpanded ? (
      <>
        <p>Type 1 diabetes is an autoimmune condition in which the immune system attacks the insulin-producing cells in the pancreas. It usually develops in childhood or adolescence.</p>
        <p>Type 2 diabetes occurs when the body becomes resistant to insulin or doesn't produce enough insulin to maintain normal blood sugar levels. It is often associated with lifestyle factors such as obesity and physical inactivity.</p>
        <p>Gestational diabetes develops during pregnancy and usually resolves after childbirth. However, women who have had gestational diabetes are at increased risk of developing type 2 diabetes later in life.</p>
      </>
    ) : null}
    {renderReadMoreButton('diabetes')}
  </div>
</div>

        {/* Other Diseases Section */}
        
<div className="mb-8">
  <h2 className="text-xl font-semibold mb-2 cursor-pointer" onClick={() => toggleSection('other')}>Other Diseases</h2>
  <div className="text-gray-700 mb-4">
    <p>There are many other diseases that affect various parts of the body. Some examples include:</p>
    {isOtherDiseasesExpanded ? (
      <>
        <p>Alzheimer's disease is a progressive neurological disorder that affects memory, thinking, and behavior. It is the most common cause of dementia in older adults.</p>
        <p>Parkinson's disease is a progressive nervous system disorder that affects movement. Symptoms may include tremors, stiffness, and difficulty with balance and coordination.</p>
        <p>Osteoporosis is a condition characterized by weak, brittle bones that are more susceptible to fractures. It is most common in postmenopausal women due to hormonal changes.</p>
        <p>Arthritis refers to inflammation of the joints and encompasses over 100 different types of conditions. Common symptoms include joint pain, stiffness, and swelling.</p>
        <p>Multiple sclerosis (MS) is a chronic autoimmune disease that affects the central nervous system. It can cause a wide range of symptoms, including fatigue, muscle weakness, and difficulty with coordination and balance.</p>
      </>
    ) : null}
    {renderReadMoreButton('other')}
  </div>
</div>


      </div>
    </div>
  );
}

export default DiseaseAwarenessPage;

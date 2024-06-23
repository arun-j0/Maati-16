import React from 'react';

function Objectives({ onClose }) {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div style={{ backgroundColor: '#6e4019', color: '#fee57e', padding: '2rem', borderRadius: '0.5rem', maxWidth: '40rem', maxHeight: '80vh', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'auto' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Objective</h2>
                <div style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
                    <p><strong>The Objectives of Our Trust:</strong></p>
                    <p><strong>1. Education and Skill Development:</strong> Our Trust NGO prioritizes and takes initiatives for the education and skill development of needy children. To enhance literacy, we provide books and stationery items to disadvantaged children. We also help them to pay their school fees. We shall establish schools, libraries, and vocational training centers, and conduct scholarship programs to empower individuals through education and equip them with the skills needed to succeed in life.</p>
                    <p><strong>2. Healthcare and Sanitation:</strong> Our Trust NGO often works to facilitate access to healthcare services and sanitation facilities, especially in underdeveloped and remote areas. To improve public health, we shall establish health clinics, organize medical camps, and promote hygiene and sanitation practices.</p>
                    <p><strong>3. Environmental Conservation:</strong> Our Trust NGO will focus on environmental conservation and sustainability. We shall work to protect natural habitats, promote sustainable development practices, and raise awareness on environmental issues such as climate change, pollution, and biodiversity loss.</p>
                    <p><strong>4. Human Rights:</strong> Our Trust NGO shall work to promote and protect human rights, including civil, political, economic, social, and cultural rights. We shall advocate for the rights of specific groups such as women, children, minorities, refugees, and indigenous people.</p>
                    <p><strong>5. Social Welfare:</strong> Our Trust NGOs aim to improve the welfare and well-being of underprivileged and marginalized communities. This should include providing education, healthcare, nutrition, housing, and other basic needs to those in need.</p>
                    <p><strong>6. Community Development:</strong> Our Trust NGO shall engage in community development projects aimed at empowering communities to become self-reliant and sustainable. This should include initiatives such as microfinance programs, entrepreneurship training, infrastructure development, and capacity-building workshops.</p>
                    <p><strong>7. Disaster Relief and Rehabilitation:</strong> Our Trust NGO plays a crucial role in disaster response and recovery efforts. We shall provide emergency relief supplies, shelter, medical assistance, psychosocial support as well as long-term rehabilitation and reconstruction assistance to disaster-affected communities.</p>
                    <p><strong>8. Empowerment of Women and Gender Equality:</strong> Our Trust NGO will focus on promoting gender equality and empowering women and girls. We shall work to eliminate discrimination and violence against women, increase women's access to education and economic opportunities, and promote women's participation in decision-making processes.</p>
                    <p><strong>9. Promotion of Animal Welfare:</strong> Our Trust NGO shall advocate for the protection and welfare of animals, including companion animals, wildlife, and livestock. We shall support animal shelters, conduct rescue operations, spaying and neutering programs, and run campaigns against animal cruelty and exploitation.</p>
                </div>
                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                    <button
                        style={{ padding: '0.5rem 1rem', fontSize: '1rem', fontWeight: 700, color: '#333', backgroundColor: '#d4af37', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Objectives;

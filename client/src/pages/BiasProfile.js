import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getBiasProfile, saveBiasProfile } from '../firebase/firestore';
import '../styles/BiasProfile.css';

export default function BiasProfile() {
  const { user } = useAuth();
  const [form, setForm] = useState({ idolName: '', groupName: '', imageUrl: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const data = await getBiasProfile(user.uid);
        if (data) setForm(data);
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    setSaving(true);
    await saveBiasProfile(user.uid, form);
    setSaving(false);
    alert('Profile saved!');
  };

  if (loading) return <p>Loading profile...</p>;

  return (
    <div className="bias-profile-container">
      <h2>💜 My Bias Profile</h2>

      <input type="text" name="idolName" placeholder="Idol Name" value={form.idolName} onChange={handleChange} />
      <input type="text" name="groupName" placeholder="Group Name" value={form.groupName} onChange={handleChange} />
      <input type="text" name="imageUrl" placeholder="Image URL (optional)" value={form.imageUrl} onChange={handleChange} />

      <button onClick={handleSave} disabled={saving}>{saving ? 'Saving...' : 'Save Profile'}</button>

      {form.imageUrl && (
        <div className="preview">
          <h4>Preview:</h4>
          <img src={form.imageUrl} alt="Bias" />
        </div>
      )}
    </div>
  );
}

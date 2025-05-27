import { db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const getBiasProfile = async (uid) => {
  const docRef = doc(db, 'biasProfiles', uid);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};

export const saveBiasProfile = async (uid, data) => {
  const docRef = doc(db, 'biasProfiles', uid);
  await setDoc(docRef, { ...data, uid });
};

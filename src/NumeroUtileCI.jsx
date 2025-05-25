import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

export default function NumeroUtileCI() {
  const [numeros, setNumeros] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchNumeros = async () => {
      const { data, error } = await supabase.from('numeros_utiles').select('*');
      if (error) console.error('Erreur Supabase :', error);
      else setNumeros(data);
    };

    fetchNumeros();
  }, []);

  const filtered = numeros.filter(
    (item) =>
      item.nom.toLowerCase().includes(search.toLowerCase()) ||
      item.categorie.toLowerCase().includes(search.toLowerCase()) ||
      item.localisation.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Numéro Utile CI</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher..."
        className="w-full p-2 border rounded mb-4"
      />
      {filtered.length === 0 && (
        <p className="text-center text-gray-500">Aucun résultat</p>
      )}
      {filtered.map((item) => (
        <div key={item.id} className="border rounded p-4 mb-2 bg-white shadow">
          <h2 className="text-lg font-semibold">{item.nom}</h2>
          <p className="text-sm text-gray-500">{item.categorie} – {item.localisation}</p>
          <p>📞 {item.numero}</p>
          <p>{item.description}</p>
          <p className="text-xs italic">{item.horaires}</p>
        </div>
      ))}
    </div>
  );
}
"use client";
import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import FilterInput from "./components/FilterInput";

const HomePage = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter(contacts => contacts.nome.toLowerCase().includes(filter.toLowerCase()) || contacts.email.toLowerCase().includes(filter.toLowerCase()))

  const handleRemove = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedContacts = localStorage.getItem('contatos');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('contatos', JSON.stringify(contacts));
    }
  }, [contacts, isLoaded]);

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Cadastro de Contatos
          </h1>

          <FilterInput value={filter} onChange={setFilter} />
        </header>

        <ContactForm setContacts={setContacts} />
        <ContactList items={filteredContacts} onRemove={handleRemove} />
      </div>
    </div>
  );
};

export default HomePage;
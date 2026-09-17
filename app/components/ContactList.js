import ContactItem from "./ContactItem";
import EmptyState from "./ui/EmptyState";

const ContactList = ({ items, onRemove }) => {
  return (
    <section className="bg-white shadow rounded">
      <div className="px-4 py-3 border-b">
        <h2 className="font-medium text-gray-900">Contatos ({items.length})</h2>
      </div>
      <ul className="divide-y">
        {items.length === 0 ? (
           <EmptyState icon="📭" message="Nenhum contato cadastrado ainda." />
        ) : (
          items.map((c) => (
            <ContactItem key={c.id} contact={c} onRemove={onRemove} />
          ))
        )}
      </ul>
    </section>
  );
};

export default ContactList;
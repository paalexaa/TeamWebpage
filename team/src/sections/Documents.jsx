import "../styles/Documents.css";
import TableReport from "../components/TableReport";

const zapisnice = [
  { id: 0, name: "Nultá zápisnica", date: "09.10.2025", file: "TP.pdf", type: "pdf" },
  { id: 1, name: "Prvá zápisnica", date: "06.11.2025", file: "prva.pdf", type: "pdf" },
  { id: 2, name: "Druhá zápisnica", date: "16.11.2025", file: "druha.pdf", type: "pdf" },
];

const backlogs = [
  { id: 0, name: "Nultá zápisnica", date: "09.10.2025", file: "TP.pdf", type: "pdf" },
  { id: 1, name: "Prvá zápisnica", date: "06.11.2025", file: "prva.pdf", type: "pdf" },
];

const retrospective = [
  { id: 0, name: "Nultá zápisnica", date: "09.10.2025", file: "TP.pdf", type: "pdf" },
  { id: 1, name: "Prvá zápisnica", date: "06.11.2025", file: "prva.pdf", type: "pdf" },
];

const methodologies = [
  { id: 0, name: "Nultá zápisnica", date: "09.10.2025", file: "TP.pdf", type: "pdf" },
  { id: 1, name: "Prvá zápisnica", date: "06.11.2025", file: "prva.pdf", type: "pdf" },
];

const Documents = () => {
  return (
    <section id="documentsSection" className="documents">
      <div className="container">
        <h1>Dokumenty</h1>
        <div className="divider"></div>
        <TableReport title="Zápisnice" documents={zapisnice} />
        <TableReport title="Backlog report" documents={backlogs} />
        <TableReport title="Retrospektíva šprintov" documents={retrospective} />
        <TableReport title="Metodiky" documents={methodologies} />
      </div>
    </section>
  );
};

export default Documents;

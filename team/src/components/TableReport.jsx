import "../styles/Tables.css";
import pdf from "../imgs/icons-pdf.png";

const TableReport = ({ title, documents }) => {
  return (
    <div className="documents-table-wrapper">
      <h2>{title}</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Názov</th>
            <th>Dátum</th>
            <th>Stiahnuť</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>{doc.name}</td>
              <td>{doc.date}</td>
              <td>
                <a href={`files/${doc.file}`} target="_blank" rel="noopener noreferrer">
                  <img
                    src={pdf}
                    alt={doc.type}
                    className="icon"
                  />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableReport;

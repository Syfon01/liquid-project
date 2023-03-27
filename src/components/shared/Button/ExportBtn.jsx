import React from 'react'
// import  DownloadIcon  from '../../img/icons/exportBtn.svg'
const ExportButton = ({ onExport }) => {
  return (
    <button
      className="d-flex items-center py-2.5 mb-4 mr-2 btn-primary btn"
      onClick={(e) => onExport(e.target.value)}
    >
      <i className='material-icons me-2'>download</i>
      {/* <img src={DownloadIcon} className="mr-2 text-primary700" alt="export" srcSet="" /> */}
      Export
    </button>
  );
};

export default ExportButton

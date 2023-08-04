import React, { useState } from 'react';
import MBTISelect from './MBTIselect';

function ColorPr() {
  const [selectedMBTI, setSelectedMBTI] = useState('ESTJ');
  
  const handleConfirmClick = () => {
    alert(`선택한 MBTI: ${selectedMBTI}`);
  };

  return (
    <div>
      <h1>MBTI</h1>
      <MBTISelect value={selectedMBTI} onChange={setSelectedMBTI} />
      <div>
        <h2>선택한 MBTI 유형: {selectedMBTI}</h2>
      </div>
      <div>
        <button onClick={handleConfirmClick}>확인</button>
      </div>
    </div>
  );
}

export default ColorPr;
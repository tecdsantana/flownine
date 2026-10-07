import React from 'react';

const BtnWhatsappFloat = () => {

  const msg = encodeURIComponent("Oi! vim pelo site da Flownine");

  return (
    <div className="i-support-whatsapp" style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
      <a
        href='https://api.whatsapp.com/send?phone=11961250113&text=Olá, gostaria de agendar uma reunião estratégica'
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <img
            src="/icon_whatsapp_support.png"
            alt="Atendimento Whatsapp"
            width={48}
            height={48}
          />
        </span>
      </a>
    </div>
  );
};

export default BtnWhatsappFloat;
function Alerta({ alerta }) {
  return (
    <>
      <div
        className={`alert ${
          alerta.error ? "alert-danger" : "alert-success"
        } text-center p-2 rounded-xl text-white font-bold text-xs mb-3 mt-2 col-md-12 col-sm-12 mx-auto`}
        role="alert"
        style={{
          backgroundColor: alerta.error ? "#dc3545" : "#28a745",
        }}
      >
        {alerta.msg}
      </div>
    </>
  );
}

export default Alerta;

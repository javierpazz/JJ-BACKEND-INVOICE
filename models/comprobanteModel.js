const mongoose = require ('mongoose');

const comprobanteSchema = new mongoose.Schema(
  {
    codCom: { type: Number, required: true },
    nameCom: { type: String, required: true },
    claCom: { type: String, required: true },
    isHaber: { type: Boolean, default: true, required: true },

  },
  {
    timestamps: true,
  }
);

const Comprobante = mongoose.model('Comprobante', comprobanteSchema);
module.exports =  Comprobante;

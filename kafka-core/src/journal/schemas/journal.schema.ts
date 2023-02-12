import { Schema } from 'mongoose';

export const JournalSchema = new Schema({
  header: {
    country: String,
    companyCode: String,
    originApp: String,
    interfaceCode: String,
  },
  document: {
    header: {
      guid: String,
      companyCode: String,
      title: String,
      reference: String,
      documentType: String,
      documentDate: String,
      postingDate: String,
      currency: String,
      ledger: String,
      conversionDate: String,
      exchangeRate: Number,
    },
    globalLedgerAccounts: [
      {
        correlative: Number,
        amountInTransactionCurrency: Number,
        globalLedgerAccount: String,
        textPosition: String,
        costCenter: String,
        functionalArea: String,
        assignment: String,
        profitCenter: String,
        order: String,
        wbsElement: String,
        networkStandard: String,
        networkStandardOperator: String,
        houseBank: String,
        accountId: String,
        valueDate: String,
        movementType: String,
        globalLedgerCompany: String,
        keyReferences: {
          keyReference1: String,
          keyReference3: String,
        },
      },
    ],
  },
});

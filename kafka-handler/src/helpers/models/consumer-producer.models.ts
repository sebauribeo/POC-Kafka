export interface HandlerModel {
  header: {
    country: string;
    companyCode: string;
    originApp: string;
    interfaceCode: string;
  };
  document: {
    header: {
      guid: string;
      companyCode: string;
      title: string;
      reference: string;
      documentType: string;
      documentDate: string;
      postingDate: string;
      currency: string;
      ledger: string;
      conversionDate: string;
      exchangeRate: number;
    };
    globalLedgerAccounts: [
      {
        correlative: number;
        amountInTransactionCurrency: number;
        globalLedgerAccount: string;
        textPosition: string;
        costCenter: string;
        functionalArea: string;
        assignment: string;
        profitCenter: string;
        order: string;
        wbsElement: string;
        networkStandard: string;
        networkStandardOperator: string;
        houseBank: string;
        accountId: string;
        valueDate: string;
        movementType: string;
        globalLedgerCompany: string;
        keyReferences: {
          keyReference1: string;
          keyReference3: string;
        };
      },
    ];
  };
}

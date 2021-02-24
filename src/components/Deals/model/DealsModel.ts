

export interface IDeals {
     deaNumDealCntl: string;
     deaNmeDeal: string;
     deaCdeDealClass: string;
     deaUidAdmnstratr: string;
     facAmtCurr: number;
     facAmtOrig: number;
     fhaAmtNet: number;
}


export interface IFacilities {
     facNumFacCntl: string;
     facNmeFacility: string;
     status: string;
     facDteEffective: string;
     facDteFinalMat: string;
     facCdeCurrency: string;
     facAmtGloblOrig: number;
     facAmtGloblCurr: number;
     facAmtNet: number;
}

export interface IEvents {
      preRidProdEvent: string;
      preTxtEventCmt: string;
      preUidRecCreate: string;
      preDteEffective: Date;
      preTspRecCreate: Date;
}

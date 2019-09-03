import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryBookService implements InMemoryDbService {
  createDb() {
    const books = [
      {
        id:1,
        name:"ABC Umbrella of TRV",
        description:"Umbrella BOB of ABC Insurance",
        agentReference:"ABC",
        carrierReference:"TRV",
        createdDate:"10/10/2018",
        updatedDate:"10/11/2018",
        status:"updated"
      },
      {
        id:2,
        name:"ABC Auto of TRV",
        description:"Auto policies of ABC Insurance for TRV",
        agentReference:"ABC",
        carrierReference:"TRV",
        createdDate:"10/09/2018",
        updatedDate:"10/09/2018",
        status:"updated"
      },
      {
        id:3,
        name:"MMC HomeOwners for Utica",
        description:"HomeOwners BOB of MMC for Utica",
        agentReference:"MMC",
        carrierReference:"Utica",
        createdDate:"12/1/2017",
        updatedDate:"10/10/2017",
        status:"updated"
      },
      {
        id:4,
        name:"E&O of MMC for AllState",
        description:"Errors & Omissions from MMC for AllState",
        agentReference:"MMC",
        carrierReference:"AllState",
        createdDate:"09/01/2019",
        updatedDate:"09/03/2019",
        status:"new"
      },
    ];
    return {books};
  }
}

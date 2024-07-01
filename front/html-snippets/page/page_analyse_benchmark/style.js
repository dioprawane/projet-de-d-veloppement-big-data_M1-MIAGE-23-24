export default class Style{
    content(){ return `
    
    <style>
    :host {
      width: 100%;
  }

  .divGlobal{
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  .divAnnalyseBenchmark {
    display: flex;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-top: 20px;
  }

  
  .divv{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    white-space: normal;
    width: 100%; 
  }

  .divvv{
  width:25%;
}


  .char1{

        --bt-background-color: #ffffff; 
  }

  
</style>
    `
    }
}
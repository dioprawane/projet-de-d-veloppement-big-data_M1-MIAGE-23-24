export default class Style{
    content(){ return `
    
    
<style>

:host {
    width: 100%;
}

.div2{
  display: flex;
  flex-wrap: wrap; /* Permet aux éléments de passer à la ligne */
  justify-content: center;
  overflow: hidden;

}
.div4{
  margin: auto;
  overflow: hidden;
  align-items: row;

}
.div5{
  flex:1;
}
.div1 {
  align-items: center;
  display: flex;
  width: 400px;
  flex-direction: column;
  background-color: #f4f4f4;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.div1:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  scale: 1.01;
}

.div3 {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.div6 {
  display: flex;
  justify-content: end;
  height: 100%;
  flex-direction: column; /* Pour aligner les éléments verticalement */

}

bt-icon{
  --bt-size: 20px;
}

#popupGlobal {
  
  display: none;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
}

#popup {
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 60vh;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
}

.space {
  --bt-height: 30px;
}

.space1 {
  --bt-height: 20px;
}

.page_box {
  width: 100%;
  display: flex;
  gap: 0px;
  justify-content: center;
  flex-wrap: wrap; 
}

.paragraphe {
  width: 100%;
  display: flex;
  justify-content: left;
  margin-top: -10px;
  margin-bottom: -14px;
  padding: 0px;
}

.paragraphe2 {
  margin-top: 4px;
  margin-bottom: -6px;
}

</style>
    `
    }
}
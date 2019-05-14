var car = function (marka, model, rengi, baktutumu, yanacaq_serfiyyati) {

    this.marka = marka;
    this.model = model;
    this.color = rengi;
    this.baktutumu = baktutumu;
    this.yanacaq_serfiyyati = yanacaq_serfiyyati;
    this.kilometraj = 0;
    this.litr = 0;


    this.kilometrserf = function (kilometraj) {
        var result;

        result = this.baktutumu - (kilometraj * this.yanacaq_serfiyyati / 100);

        if (result >= 0) {
            return result;//"yola davam ede bilerik yancaq hele ki var";
        } else {
            return result;//"yanacaq bitib yolda qaldiq :(("
        }


    }

    this.benzindoldurma = function (litr) {
        var qalanbenzin,netice;

        qalanbenzin = this.kilometrserf(this.kilometraj);

        if (qalanbenzin <= 0) {

            netice = qalanbenzin + litr;

        }

        if(netice < this.baktutumu){

            this.baktutumu-=netice;

            return this.baktutumu +" bu qeder benzin vurmaq imkanin var";


        }else{
            netice-=this.baktutumu;

            return netice + " bu qeder artiq vurula bilmez ";
        }
    }




}




var mycar = new car("Bmv", "Bmv Z4", "Red", 100, 20);

mycar.kilometraj = 600;

mycar.litr=700;

console.log(mycar.kilometrserf(mycar.kilometraj));

console.log(mycar.benzindoldurma(mycar.litr));

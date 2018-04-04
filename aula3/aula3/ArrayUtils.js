var utils = {

    isEmpty: function (array) {

        if(array == 0 ){
            return true;
        }else {
            return false;
        }
    
    },

    maxArray: function (array) {
        var i = 0;
        var max = 0;
        while (array[i]){
            if (array[i] < max){
                
            }else {
                max = array[i];
            }
        i++;
        }
        return max;
    },

    minArray: function (array) {
        var i = 0;
        var min = 20;
        while (array[i]){
            if (array[i] > min){
                
            }else {
                min = array[i];
            }
            i++;
        }
        return min;
    },

    medArray: function (array) {
        var i = 0;
        var soma = 0;
        var tamanho = array.length;
        while(array[i]){
            soma+=array[i];
            i++;
        }
        return soma/tamanho;
    },

    element: function(array,indece){
        
    }

}


module.exports.utils = utils;
var input = document.getElementById("from-value");
var output = document.getElementById("to-value");
var input_type = document.getElementById("from-unit");
var output_type = document.getElementById("to-unit");

input.addEventListener("keyup" , Converter);
input_type.addEventListener("change" , Converter);
output_type.addEventListener("change" , Converter);

// initial value
// var option_from , option_to ; 
//  option_from = input_type.value;
//  option_to = output_type.value;

function Converter() {

    //  initial value
    let option_from = input_type.value;
    let option_to = output_type.value;

    // ............METER TO OTHER UNIT.............

    if(option_from === "m" && option_to === "cm")
    {
        output.value = Number(input.value) * 100 ;
    }

    else if(option_from === "m" && option_to === "in")
    {
        output.value = Number(input.value) * 39.37 ;
    }

    else if(option_from === "m" && option_to === "ft")
    {
        output.value = Number(input.value) *  3.281;
    }

    else if(option_from === "m" && option_to === "m")
    {
        output.value = input.value;
    }

    else if(option_from === "m" && option_to === "kl")
    {
        output.value = Number(input.value) / 1000;
    }

    else if(option_from === "m" && option_to === "mm")
    {
        output.value = Number(input.value) * 1000;
    }

    else if(option_from === "m" && option_to === "mc")
    {
        output.value = Number(input.value) *  1000000 ;
    }

    else if(option_from === "m" && option_to === "Nn")
    {
        output.value = Number(input.value) * 1000000000;
    }

    else if(option_from === "m" && option_to === "Ml")
    {
        output.value = Number(input.value) * 0.0006213689;
    }

    else if(option_from === "m" && option_to === "Yd")
    {
        output.value = Number(input.value) * 1.0936132983;
    }

    // ........CENTIMETER TO OTHER UNIT............

    else if(option_from === "cm" && option_to === "cm")
    {
        output.value = input.value;
    }

    else if(option_from === "cm" && option_to === "m")
    {
        output.value = Number(input.value) *  0.01;
    }

    else if(option_from === "cm" && option_to === "in")
    {
        output.value = Number(input.value) *  0.3937007874;
    }

    else if(option_from === "cm" && option_to === "ft")
    {
        output.value = Number(input.value) *  0.032808399;
    }

    else if(option_from === "cm" && option_to === "kl")
    {
        output.value = Number(input.value) *  0.00001;
    }

    else if(option_from === "cm" && option_to === "mm")
    {
        output.value = Number(input.value) *  10;
    }

    else if(option_from === "cm" && option_to === "mc")
    {
        output.value = Number(input.value) *  10000;
    }

    else if(option_from === "cm" && option_to === "Ml")
    {
        output.value = Number(input.value) * 0.0000062137;
    }

    else if(option_from === "cm" && option_to === "Nn")
    {
        output.value = Number(input.value) *  10000000;
    }

    else if(option_from === "cm" && option_to === "Yd")
    {
        output.value = Number(input.value) *   0.010936133;
    }

    // ........INCHES TO OTHER UNIT........

    else if(option_from === "in" && option_to === "in")
    {
        output.value = input.value;
    }

    else if(option_from === "in" && option_to === "m")
    {
        output.value = Number(input.value) *  0.0254;
    }

    
    else if(option_from === "in" && option_to === "kl")
    {
        output.value = Number(input.value) *   0.0000254;
    }
    
    else if(option_from === "in" && option_to === "cm")
    {
        output.value = Number(input.value) * 2.54 ;
    }
    
    else if(option_from === "in" && option_to === "mm")
    {
        output.value = Number(input.value) * 25.4 ;
    }
    
    else if(option_from === "in" && option_to === "mc")
    {
        output.value = Number(input.value) * 25400;
    }
    
    else if(option_from === "in" && option_to === "Nn")
    {
        output.value = Number(input.value) *  25400000;
    }
    
    else if(option_from === "in" && option_to === "Ml")
    {
        output.value = Number(input.value) *  0.0000157828 ;
    }
    
    else if(option_from === "in" && option_to === "Yd")
    {
        output.value = Number(input.value) *  0.0277777778 ;
    }
    
    else if(option_from === "in" && option_to === "ft")
    {
        output.value = Number(input.value) * 0.0833333333 ;
    }

    // ........FEET TO OTHER UNIT...........

    else if(option_from === "ft" && option_to === "ft")
    {
        output.value = input.value;
    }

    else if(option_from === "ft" && option_to === "m")
    {
        output.value = Number(input.value) * 0.3048  ;
    }

    else if(option_from === "ft" && option_to === "kl")
    {
        output.value = Number(input.value) * 0.0003048  ;
    }

    else if(option_from === "ft" && option_to === "cm")
    {
        output.value = Number(input.value) * 30.48  ;
    }

    else if(option_from === "ft" && option_to === "mm")
    {
        output.value = Number(input.value) * 304.8  ;
    }

    else if(option_from === "ft" && option_to === "mc")
    {
        output.value = Number(input.value) * 304800  ;
    }

    else if(option_from === "ft" && option_to === "Nn")
    {
        output.value = Number(input.value) * 304800000  ;
    }

    else if(option_from === "ft" && option_to === "Ml")
    {
        output.value = Number(input.value) * 0.0001893932 ;
    }

    else if(option_from === "ft" && option_to === "Yd")
    {
        output.value = Number(input.value) * 0.3333333333  ;
    }

    else if(option_from === "ft" && option_to === "in")
    {
        output.value = Number(input.value) * 12 ;
    }

    //  .......KILOMETER TO OTHER ONE.......

    else if(option_from === "kl" && option_to === "kl")
    {
        output.value = input.value;
    }

    else if(option_from === "kl" && option_to === "m")
    {
        output.value = Number(input.value) * 1000  ;
    }

    else if(option_from === "kl" && option_to === "cm")
    {
        output.value = Number(input.value) * 100000  ;
    }

    else if(option_from === "kl" && option_to === "mm")
    {
        output.value = Number(input.value) * 1000000  ;
    }

    else if(option_from === "kl" && option_to === "mc")
    {
        output.value = Number(input.value) * 1000000000  ;
    }

    else if(option_from === "kl" && option_to === "Nn")
    {
        output.value = Number(input.value) * 1000000000000  ;
    }

    else if(option_from === "kl" && option_to === "Ml")
    {
        output.value = Number(input.value) * 0.6213688756  ;
    }

    else if(option_from === "kl" && option_to === "Yd")
    {
        output.value = Number(input.value) * 1093.6132983  ;
    }

    else if(option_from === "kl" && option_to === "ft")
    {
        output.value = Number(input.value) * 3280.839895  ;
    }

    else if(option_from === "kl" && option_to === "in")
    {
        output.value = Number(input.value) * 39370.07874 ;
    }


    // .....MILIMETER TO OTHER UNIT.......

    else if(option_from === "mm" && option_to === "mm")
    {
        output.value = input.value;
    }

    else if(option_from === "mm" && option_to === "m")
    {
        output.value = Number(input.value) * 0.001  ;
    }
    
    else if(option_from === "mm" && option_to === "kl")
    {
        output.value = Number(input.value) * 0.000001  ;
    }
    
    else if(option_from === "mm" && option_to === "cm")
    {
        output.value = Number(input.value) * 0.1  ;
    }
    
    else if(option_from === "mm" && option_to === "mc")
    {
        output.value = Number(input.value) * 1000  ;
    }
    
    else if(option_from === "mm" && option_to === "Nn")
    {
        output.value = Number(input.value) * 1000000  ;
    }
    
    //  BAD M DEKHTE H

    // else if(option_from === "mm" && option_to === "Ml")
    // {
    //     let e = 2.718281828459045;
    //     output.value = Number(input.value) / 1.609*e+6 ;
    // }
    
    else if(option_from === "mm" && option_to === "Yd")
    {
        output.value = Number(input.value) * 0.0010936133  ;
    }
    
    else if(option_from === "mm" && option_to === "ft")
    {
        output.value = Number(input.value) * 0.0032808399 ;
    }
    
    else if(option_from === "mm" && option_to === "in")
    {
        output.value = Number(input.value) * 0.0393700787  ;
    }
    

    // .......MICROMETER TO OTHER UNIT.......

    else if(option_from === "mc" && option_to === "mc")
    {
        output.value = input.value;
    }
    else if(option_from === "mc" && option_to === "m")
    {
        output.value = Number(input.value) * 0.000001  ;
    }
    // Bad m dekhte h

    // else if(option_from === "mc" && option_to === "kl")
    // {
    //     output.value = Number(input.value) * 12 ;
    // }

    else if(option_from === "mc" && option_to === "cm")
    {
        output.value = Number(input.value) * 0.0001  ;
    }
    else if(option_from === "mc" && option_to === "mm")
    {
        output.value = Number(input.value) * 0.001  ;
    }
    else if(option_from === "mc" && option_to === "Nn")
    {
        output.value = Number(input.value) * 1000  ;
    }

    //  Bad m dekhte h

    // else if(option_from === "mc" && option_to === "Ml")
    // {
    //     output.value = Number(input.value) * 12 ;
    // }


    else if(option_from === "mc" && option_to === "Yd")
    {
        output.value = Number(input.value) * 0.0000010936  ;
    }
    else if(option_from === "mc" && option_to === "ft")
    {
        output.value = Number(input.value) * 0.0000032808  ;
    }
    else if(option_from === "mc" && option_to === "in")
    {
        output.value = Number(input.value) * 0.0000393701  ;
    }

    // .......MILE TO OTHER UNIT.......

    else if(option_from === "Ml" && option_to === "Ml")
    {
        output.value = input.value;
    }

    else if(option_from === "Ml" && option_to === "m")
    {
        output.value = Number(input.value) * 1609.35  ;
    }

    else if(option_from === "Ml" && option_to === "kl")
    {
        output.value = Number(input.value) * 1.60935 ;
    }

    else if(option_from === "Ml" && option_to === "cm")
    {
        output.value = Number(input.value) * 160935  ;
    }

    else if(option_from === "Ml" && option_to === "mm")
    {
        output.value = Number(input.value) * 1609350  ;
    }

    else if(option_from === "Ml" && option_to === "mc")
    {
        output.value = Number(input.value) * 1609350000  ;
    }

    else if(option_from === "Ml" && option_to === "Nn")
    {
        output.value = Number(input.value) * 1609350000000  ;
    }

    else if(option_from === "Ml" && option_to === "Yd")
    {
        output.value = Number(input.value) * 1760.0065617  ;
    }

    else if(option_from === "Ml" && option_to === "ft")
    {
        output.value = Number(input.value) * 5280.019685  ;
    }

    else if(option_from === "Ml" && option_to === "in")
    {
        output.value = Number(input.value) * 63360.23622  ;
    }

    // .......YARD TO OTHER UNIT.......

    else if(option_from === "Yd" && option_to === "Yd")
    {
        output.value = Number(input.value) * 12 ;
    }

    else if(option_from === "Yd" && option_to === "m")
    {
        output.value = Number(input.value) * 0.9144  ;
    }

    else if(option_from === "Yd" && option_to === "kl")
    {
        output.value = Number(input.value) * 0.0009144  ;
    }

    else if(option_from === "Yd" && option_to === "cm")
    {
        output.value = Number(input.value) * 91.44 ;
    }

    else if(option_from === "Yd" && option_to === "mm")
    {
        output.value = Number(input.value) * 914.4  ;
    }

    else if(option_from === "Yd" && option_to === "mc")
    {
        output.value = Number(input.value) * 914400  ;
    }

    else if(option_from === "Yd" && option_to === "Nn")
    {
        output.value = Number(input.value) * 914400000  ;
    }

    else if(option_from === "Yd" && option_to === "Ml")
    {
        output.value = Number(input.value) * 0.0005681797  ;
    }

    else if(option_from === "Yd" && option_to === "ft")
    {
        output.value = Number(input.value) * 3 ;
    }

    else if(option_from === "Yd" && option_to === "in")
    {
        output.value = Number(input.value) * 36 ;
    }


}





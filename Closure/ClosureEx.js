const values = ((num)=>{
    let initVal = num;

    console.log("Initial value : ",initVal);

    return () => {
        initVal -= 1;
        if( initVal > 0 ) console.log(`number Count is `,initVal);
        // if(initVal < 0 ) console.log("number Count is exceeded.");
        else{
            console.log("number Count is exceeded.",initVal);
        }
    }

})(3);


values();
values();
values();
values();
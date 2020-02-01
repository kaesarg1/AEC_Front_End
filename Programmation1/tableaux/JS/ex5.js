var tab2exp = [];

tab2exp[0] = 1;
tab2exp[1] = 2;
tab2exp[2] = 4;
tab2exp[3] = 8;
tab2exp[4] = 16;
tab2exp[5] = 32;
tab2exp[6] = 64;
tab2exp[7] = 128;
tab2exp[8] = 256;
tab2exp[9] = 512;
tab2exp[10] = 1024;
tab2exp[11] = 2048;
tab2exp[12] = 4096;
tab2exp[13] = 8192;
tab2exp[14] = 16834;
tab2exp[15] = 33218;
tab2exp[16] = 66436;

for(var i=0;i<= 1024;i++){
    tab2exp[i]=Math.pow(2,i);
    document.write("2 exposant"+i+"="+tab2exp[i]+"<br>");
}
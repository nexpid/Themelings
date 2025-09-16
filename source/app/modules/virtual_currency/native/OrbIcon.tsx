// app/modules/virtual_currency/native/OrbIcon.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot3 = var5;
    var4 = var4.jsxs;
    var _closure1_slot4 = var4;
    var4 = {};
    var5 = 'SMALL';
    var4['SMALL'] = var5;
    var5 = 'LARGE';
    var4['LARGE'] = var5;
    var _closure1_slot5 = var4;
    var2 = function OrbIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.size;
            var5 = undefined;
            if(!(var2 === var5)) { _fun0001_ip = 27; continue _fun0001 }
 14:
            var3 = _closure1_slot5;
            var2 = var3.SMALL;
 27:
            var3 = var1.shouldUseThemeColor;
            if(!(var3 === var5)) { _fun0001_ip = 41; continue _fun0001 }
 39:
            var3 = true;
 41:
            var4 = var1._loading;
            var8 = var1.style;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 2;
            var1 = var9[var1];
            var7 = var4.bind(var5)(var1);
            var1 = var7.useTheme;
            var7 = var1.bind(var7)();
            var1 = 3;
            var1 = var9[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.isThemeLight;
            var1 = var1.bind(var4)(var7);
            var4 = _closure1_slot5;
            var4 = var4.SMALL;
            var12 = 30;
            if(!(var2 === var4)) { _fun0001_ip = 130; continue _fun0001 }
 127:
            var12 = 18;
 130:
            var4 = _closure1_slot5;
            var4 = var4.SMALL;
            var9 = '0 0 31 31';
            if(!(var2 === var4)) { _fun0001_ip = 156; continue _fun0001 }
 150:
            var9 = '0 0 18 19';
 156:
            if(!var3) { _fun0001_ip = 162; continue _fun0001 }
 159:
            if(var1) { _fun0001_ip = 195; continue _fun0001 }
 162:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 4;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.unsafe_rawColors;
            var10 = var1.WHITE_500;
            _fun0001_ip = 226; continue _fun0001;
 195:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 4;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.unsafe_rawColors;
            var10 = var1.BLACK_500;
 226:
            var1 = _closure1_slot5;
            var1 = var1.SMALL;
            if(!(var2 !== var1)) { _fun0001_ip = 406; continue _fun0001 }
 243:
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var7 = 5;
            var1 = var14[var7];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var1['width'] = var12;
            var1['height'] = var12;
            var1['viewBox'] = var9;
            var4 = 'none';
            var1['fill'] = var4;
            var1['style'] = var8;
            var13 = _closure1_slot3;
            var11 = _closure1_slot0;
            var4 = var14[var7];
            var4 = var11.bind(var5)(var4);
            var15 = var4.Path;
            var4 = {};
            var16 = 'M16.0813 0.547595C15.7091 0.393453 15.2904 0.393414 14.9182 0.547595L5.33813 4.51635C4.96597 4.67057 4.67004 4.96641 4.51587 5.33861L0.548096 14.9187C0.393896 15.291 0.393894 15.7095 0.548096 16.0818L4.51587 25.6619C4.67007 26.0341 4.96591 26.3299 5.33813 26.4841L14.9182 30.4519C15.2905 30.6061 15.709 30.6061 16.0813 30.4519L25.6614 26.4841C26.0336 26.33 26.3294 26.034 26.4836 25.6619L30.4524 16.0818C30.6066 15.7095 30.6065 15.2909 30.4524 14.9187L26.4836 5.33861C26.3294 4.96634 26.0336 4.67055 25.6614 4.51635L16.0813 0.547595ZM14.9973 4.61498C15.2752 4.33707 15.7262 4.33705 16.0042 4.61498L26.3831 14.9949C26.661 15.2728 26.661 15.7238 26.3831 16.0017L16.0042 26.3816C15.7263 26.6595 15.2752 26.6594 14.9973 26.3816L4.61646 16.0017C4.33859 15.7238 4.33868 15.2728 4.61646 14.9949L14.9973 4.61498Z';
            var4['d'] = var16;
            var4['fill'] = var10;
            var15 = var13.bind(var5)(var15, var4);
            var4 = new Array(2);
            var4[0] = var15;
            var7 = var14[var7];
            var7 = var11.bind(var5)(var7);
            var11 = var7.Path;
            var7 = {};
            var14 = 'M15.0507 9.94959C14.7808 11.1586 14.1739 12.2664 13.3004 13.1447C12.4269 14.0231 11.3225 14.6361 10.1151 14.9127C9.99696 14.94 9.89157 15.0065 9.8161 15.1014C9.74063 15.1963 9.69954 15.3139 9.69954 15.4352C9.69954 15.5564 9.74063 15.6741 9.8161 15.7689C9.89157 15.8638 9.99696 15.9303 10.1151 15.9576C11.3211 16.2276 12.4255 16.835 13.2994 17.7089C14.1734 18.5828 14.7807 19.6872 15.0507 20.8932C15.078 21.0114 15.1445 21.1168 15.2394 21.1922C15.3343 21.2677 15.4519 21.3088 15.5732 21.3088C15.6944 21.3088 15.8121 21.2677 15.9069 21.1922C16.0018 21.1168 16.0683 21.0114 16.0956 20.8932C16.3712 19.6876 16.9822 18.5844 17.8579 17.7111C18.7337 16.8377 19.8385 16.2299 21.045 15.9576C21.1631 15.9303 21.2685 15.8638 21.344 15.7689C21.4195 15.6741 21.4605 15.5564 21.4605 15.4352C21.4605 15.3139 21.4195 15.1963 21.344 15.1014C21.2685 15.0065 21.1631 14.94 21.045 14.9127C19.8382 14.6364 18.7337 14.0255 17.8583 13.15C16.9829 12.2746 16.3719 11.1701 16.0956 9.96334C16.0699 9.84482 16.0048 9.73851 15.9109 9.66176C15.817 9.58501 15.6999 9.54235 15.5786 9.54076C15.4574 9.53916 15.3392 9.57872 15.2433 9.65297C15.1474 9.72722 15.0795 9.83179 15.0507 9.94959Z';
            var7['d'] = var14;
            var7['fill'] = var10;
            var7 = var13.bind(var5)(var11, var7);
            var4[1] = var7;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 564; continue _fun0001;
 406:
            var4 = _closure1_slot4;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 5;
            var2 = var11[var7];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['width'] = var12;
            var2['height'] = var12;
            var2['viewBox'] = var9;
            var9 = 'none';
            var2['fill'] = var9;
            var2['style'] = var8;
            var9 = _closure1_slot3;
            var8 = _closure1_slot0;
            var6 = var11[var7];
            var6 = var8.bind(var5)(var6);
            var12 = var6.Path;
            var6 = {};
            var13 = 'M9.3474 1.04042C9.12521 0.948404 8.87529 0.948512 8.65306 1.04042L2.9304 3.41151C2.70813 3.50364 2.53127 3.68043 2.43919 3.90273L0.0690765 9.6244C-0.0229875 9.84667 -0.0229076 10.0965 0.0690765 10.3187L2.43919 16.0414C2.5313 16.2638 2.70805 16.4405 2.9304 16.5326L8.65306 18.9027C8.87535 18.9947 9.12514 18.9948 9.3474 18.9027L15.0691 16.5326C15.2914 16.4405 15.4682 16.2637 15.5603 16.0414L17.9314 10.3187C18.0233 10.0965 18.0234 9.8466 17.9314 9.6244L15.5603 3.90273C15.4682 3.68037 15.2914 3.50362 15.0691 3.41151L9.3474 1.04042ZM8.69994 3.47011C8.86587 3.30432 9.13455 3.30438 9.30052 3.47011L15.5007 9.6703C15.6664 9.83622 15.6663 10.1049 15.5007 10.2709L9.30052 16.4711C9.13453 16.6369 8.8659 16.637 8.69994 16.4711L2.49974 10.2709C2.3338 10.1049 2.33375 9.83628 2.49974 9.6703L8.69994 3.47011Z';
            var6['d'] = var13;
            var6['fill'] = var10;
            var12 = var9.bind(var5)(var12, var6);
            var6 = new Array(2);
            var6[0] = var12;
            var7 = var11[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Path;
            var7 = {};
            var11 = 'M8.73165 6.65656C8.57041 7.37867 8.20794 8.04035 7.6862 8.56499C7.16447 9.08963 6.50482 9.45577 5.78361 9.62102C5.71305 9.63732 5.6501 9.67704 5.60502 9.73371C5.55995 9.79038 5.5354 9.86066 5.5354 9.93307C5.5354 10.0055 5.55995 10.0758 5.60502 10.1324C5.6501 10.1891 5.71305 10.2288 5.78361 10.2451C6.50397 10.4064 7.16363 10.7692 7.68561 11.2912C8.20759 11.8131 8.57038 12.4728 8.73165 13.1932C8.74794 13.2637 8.78766 13.3267 8.84434 13.3717C8.90101 13.4168 8.97129 13.4414 9.0437 13.4414C9.11611 13.4414 9.18639 13.4168 9.24306 13.3717C9.29973 13.3267 9.33945 13.2637 9.35575 13.1932C9.52037 12.473 9.88529 11.8141 10.4084 11.2925C10.9315 10.7708 11.5914 10.4077 12.312 10.2451C12.3826 10.2288 12.4455 10.1891 12.4906 10.1324C12.5357 10.0758 12.5602 10.0055 12.5602 9.93307C12.5602 9.86066 12.5357 9.79038 12.4906 9.73371C12.4455 9.67704 12.3826 9.63732 12.312 9.62102C11.5912 9.45597 10.9315 9.09107 10.4086 8.56818C9.88571 8.04529 9.5208 7.38559 9.35575 6.66477C9.3404 6.59398 9.30152 6.53048 9.24544 6.48464C9.18936 6.4388 9.11939 6.41332 9.04697 6.41237C8.97454 6.41141 8.90393 6.43504 8.84666 6.47939C8.78939 6.52374 8.74885 6.5862 8.73165 6.65656Z';
            var7['d'] = var11;
            var7['fill'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 564:
            return var1;
        }
    };
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/virtual_currency/native/OrbIcon.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var2;
    var3['OrbIconSize'] = var4;
    var3['OrbIcon'] = var2;
    return var1;
})();
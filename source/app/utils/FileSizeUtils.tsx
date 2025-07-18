// app/utils/FileSizeUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var4 = function formatSize(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arguments[1];
            var7 = undefined;
            if(!(var1 === var7)) { _fun0001_ip = 16; continue _fun0001 }
 9:
            var1 = _closure1_slot3;
 16:
            var3 = var1.useKibibytes;
            var2 = 1000;
            var8 = var2;
            if(!var3) { _fun0001_ip = 41; continue _fun0001 }
 34:
            var8 = _closure1_slot2;
 41:
            var3 = var1.useKibibytes;
            if(!var3) { _fun0001_ip = 56; continue _fun0001 }
 50:
            var2 = 1024;
 56:
            var4 = global;
            var6 = var4.Math;
            var5 = var6.ceil;
            var3 = arg1;
            var3 = var3 / var8;
            var6 = var5.bind(var6)(var3);
            if(!(!(var6 < var2))) { _fun0001_ip = 235; continue _fun0001 }
 89:
            var2 = var6 / var2;
            var3 = var1.showDecimalForGB;
            var5 = var4.Math;
            var4 = var5.round;
            if(var3) { _fun0001_ip = 120; continue _fun0001 }
 113:
            var9 = var4.bind(var5)(var2);
            _fun0001_ip = 136; continue _fun0001;
 120:
            var3 = 10;
            var2 = var3 * var2;
            var2 = var4.bind(var5)(var2);
            var9 = var2 / var3;
 136:
            var2 = var1.useSpace;
            var4 = _closure1_slot0;
            var10 = _closure1_slot1;
            var3 = 0;
            var5 = var10[var3];
            var5 = var4.bind(var7)(var5);
            var8 = var5.intl;
            var5 = var8.formatToPlainString;
            var3 = var10[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.t;
            if(var2) { _fun0001_ip = 213; continue _fun0001 }
 191:
            var4 = var3.TbMX9P;
            var2 = {};
            var2['size'] = var9;
            var2 = var5.bind(var8)(var4, var2);
            _fun0001_ip = 233; continue _fun0001;
 213:
            var4 = var3.yhEXX1;
            var3 = {};
            var3['size'] = var9;
            var2 = var5.bind(var8)(var4, var3);
 233:
            return var2;
 235:
            var1 = var1.useSpace;
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 0;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            if(var1) { _fun0001_ip = 310; continue _fun0001 }
 290:
            var3 = var2.pIn7AQ;
            var1 = {};
            var1['size'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 330; continue _fun0001;
 310:
            var3 = var2.cS889P;
            var2 = {};
            var2['size'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 330:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var5 = 1024;
    var _closure1_slot2 = var5;
    var1 = {'useKibibytes': false, 'showDecimalForGB': true, 'useSpace': true};
    var _closure1_slot3 = var1;
    var1 = 1;
    var6 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/FileSizeUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['BYTE_IN_KB'] = var5;
    var3['KB_IN_MB'] = var5;
    var3['formatSize'] = var4;
    var2 = function formatKbSize(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arguments[1];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0002_ip = 16; continue _fun0002 }
 9:
            var5 = _closure1_slot3;
 16:
            var2 = var5.useKibibytes;
            var1 = 1000;
            var3 = var1;
            if(!var2) { _fun0002_ip = 40; continue _fun0002 }
 34:
            var3 = 1024;
 40:
            var2 = arg1;
            var3 = var2 / var3;
            var2 = var5.useKibibytes;
            if(!var2) { _fun0002_ip = 63; continue _fun0002 }
 56:
            var1 = _closure1_slot2;
 63:
            var2 = var3 / var1;
            var1 = 1;
            if(!(!(var2 >= var1))) { _fun0002_ip = 214; continue _fun0002 }
 77:
            var1 = var5.useSpace;
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 0;
            var7 = var9[var2];
            var7 = var6.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var2 = var9[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.t;
            if(var1) { _fun0002_ip = 173; continue _fun0002 }
 132:
            var6 = var2.kEk9pq;
            var1 = {};
            var9 = global;
            var10 = var9.Math;
            var9 = var10.ceil;
            var9 = var9.bind(var10)(var3);
            var1['size'] = var9;
            var1 = var7.bind(var8)(var6, var1);
            _fun0002_ip = 212; continue _fun0002;
 173:
            var6 = var2.bTzRR0;
            var2 = {};
            var9 = global;
            var10 = var9.Math;
            var9 = var10.ceil;
            var9 = var9.bind(var10)(var3);
            var2['size'] = var9;
            var1 = var7.bind(var8)(var6, var2);
 212:
            _fun0002_ip = 227; continue _fun0002;
 214:
            var2 = _closure1_slot4;
            var1 = var2.bind(var4)(var3, var5);
 227:
            return var1;
        }
    };
    var3['formatKbSize'] = var2;
    return var1;
})();
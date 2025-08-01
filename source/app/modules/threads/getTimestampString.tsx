// app/modules/threads/getTimestampString.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/getTimestampString.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var9 = arg1;
            var2 = arg2;
            var3 = arguments[2];
            var8 = undefined;
            if(!(var3 === var8)) { _fun0001_ip = 19; continue _fun0001 }
 17:
            var3 = true;
 19:
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var8;
            var _closure2_slot2 = var8;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var11 = 1;
            var5 = var3[var11];
            var5 = var4.bind(var8)(var5);
            var6 = var5.bind(var8)();
            var5 = var6.diff;
            var3 = var3[var11];
            var3 = var4.bind(var8)(var3);
            var4 = var3.bind(var8)(var9);
            var3 = 's';
            var15 = var5.bind(var6)(var4, var3);
            var10 = null;
            var3 = var10 != var2;
            var14 = undefined;
            if(!var3) { _fun0001_ip = 103; continue _fun0001 }
 99:
            var14 = var2.bind(var8)();
 103:
            _closure2_slot1 = var14;
            var2 = {};
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 0;
            var6 = var5[var3];
            var6 = var4.bind(var8)(var6);
            var6 = var6.t;
            var6 = var6.sMPmtr;
            var2['seconds'] = var6;
            var6 = var5[var3];
            var6 = var4.bind(var8)(var6);
            var6 = var6.t;
            var6 = var6.N9M4Nz;
            var2['minutes'] = var6;
            var6 = var5[var3];
            var6 = var4.bind(var8)(var6);
            var6 = var6.t;
            var6 = var6.p0KedH;
            var2['hours'] = var6;
            var6 = var5[var3];
            var6 = var4.bind(var8)(var6);
            var6 = var6.t;
            var6 = var6.gjK5am;
            var2['days'] = var6;
            var6 = var5[var3];
            var6 = var4.bind(var8)(var6);
            var6 = var6.t;
            var6 = var6.kHo4Oj;
            var2['months'] = var6;
            var3 = var5[var3];
            var3 = var4.bind(var8)(var3);
            var3 = var3.t;
            var3 = var3.KjKr2N;
            var2['years'] = var3;
            _closure2_slot2 = var2;
            var13 = function formatString(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var5 = undefined;
                    var3 = undefined;
                    if(!var2) { _fun0002_ip = 22; continue _fun0002 }
 18:
                    var3 = _closure2_slot2;
 22:
                    var2 = function(arg1, arg2, arg3) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var6 = arg1;
                            var3 = arg2;
                            var5 = arg3;
                            var2 = null;
                            var1 = var2 != var3;
                            if(!var1) { _fun0003_ip = 26; continue _fun0003 }
 18:
                            var4 = var3[var6];
                            var1 = var2 != var4;
 26:
                            if(var1) { _fun0003_ip = 56; continue _fun0003 }
 29:
                            var1 = var2 == var5;
                            var4 = undefined;
                            if(var1) { _fun0003_ip = 42; continue _fun0003 }
 38:
                            var4 = var5[var6];
 42:
                            var7 = var2 != var4;
                            var1 = null;
                            if(!var7) { _fun0003_ip = 54; continue _fun0003 }
 51:
                            var1 = var4;
 54:
                            _fun0003_ip = 95; continue _fun0003;
 56:
                            var3 = var3[var6];
                            if(!(var2 == var3)) { _fun0003_ip = 80; continue _fun0003 }
 64:
                            var7 = var2 == var5;
                            var4 = undefined;
                            if(var7) { _fun0003_ip = 77; continue _fun0003 }
 73:
                            var4 = var5[var6];
 77:
                            var3 = var4;
 80:
                            var4 = var2 != var3;
                            var2 = null;
                            if(!var4) { _fun0003_ip = 92; continue _fun0003 }
 89:
                            var2 = var3;
 92:
                            var1 = var2;
 95:
                            return var1;
                        }
                    };
                    var1 = arg1;
                    var6 = var2.bind(var5)(var1, var4, var3);
                    var1 = null;
                    var2 = var1 == var6;
                    if(var2) { _fun0002_ip = 112; continue _fun0002 }
 48:
                    var4 = 'string';
                    var3 = typeof var6;
                    var2 = var6;
                    if(!(var4 !== var3)) { _fun0002_ip = 109; continue _fun0002 }
 62:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 0;
                    var3 = var7[var3];
                    var3 = var4.bind(var5)(var3);
                    var5 = var3.intl;
                    var4 = var5.formatToPlainString;
                    var3 = {};
                    var7 = arg2;
                    var3['count'] = var7;
                    var2 = var4.bind(var5)(var6, var3);
 109:
                    var1 = var2;
 112:
                    return var1;
                }
            };
            var2 = 60;
            if(!(var15 < var2)) { _fun0001_ip = 345; continue _fun0001 }
 297:
            var3 = var10 == var14;
            var1 = undefined;
            if(var3) { _fun0001_ip = 312; continue _fun0001 }
 306:
            var1 = var14.seconds;
 312:
            if(!(var10 == var1)) { _fun0001_ip = 328; continue _fun0001 }
 316:
            var1 = 'minutes';
            var1 = var13.bind(var8)(var1, var11);
            _fun0001_ip = 338; continue _fun0001;
 328:
            var3 = 'seconds';
            var1 = var13.bind(var8)(var3, var15);
 338:
            if(!(var10 == var1)) { _fun0001_ip = 650; continue _fun0001 }
 345:
            var3 = 3600;
            if(!(var15 < var3)) { _fun0001_ip = 395; continue _fun0001 }
 355:
            var4 = global;
            var5 = var4.Math;
            var4 = var5.floor;
            var2 = var15 / var2;
            var4 = var4.bind(var5)(var2);
            var2 = 'minutes';
            var2 = var13.bind(var8)(var2, var4);
            if(!(var10 == var2)) { _fun0001_ip = 648; continue _fun0001 }
 395:
            var4 = 86400;
            if(!(var15 < var4)) { _fun0001_ip = 445; continue _fun0001 }
 405:
            var5 = global;
            var6 = var5.Math;
            var5 = var6.floor;
            var3 = var15 / var3;
            var5 = var5.bind(var6)(var3);
            var3 = 'hours';
            var3 = var13.bind(var8)(var3, var5);
            if(!(var10 == var3)) { _fun0001_ip = 646; continue _fun0001 }
 445:
            var5 = 2592000;
            if(!(var15 < var5)) { _fun0001_ip = 495; continue _fun0001 }
 455:
            var6 = global;
            var12 = var6.Math;
            var6 = var12.floor;
            var4 = var15 / var4;
            var6 = var6.bind(var12)(var4);
            var4 = 'days';
            var4 = var13.bind(var8)(var4, var6);
            if(!(var10 == var4)) { _fun0001_ip = 644; continue _fun0001 }
 495:
            var6 = 31104000;
            if(!(var15 < var6)) { _fun0001_ip = 542; continue _fun0001 }
 505:
            var12 = global;
            var16 = var12.Math;
            var12 = var16.floor;
            var5 = var15 / var5;
            var12 = var12.bind(var16)(var5);
            var5 = 'months';
            var5 = var13.bind(var8)(var5, var12);
            if(!(var10 == var5)) { _fun0001_ip = 642; continue _fun0001 }
 542:
            if(!(var15 >= var6)) { _fun0001_ip = 602; continue _fun0001 }
 546:
            var16 = var10 == var14;
            var12 = undefined;
            if(var16) { _fun0001_ip = 561; continue _fun0001 }
 555:
            var12 = var14.years;
 561:
            if(!(var10 != var12)) { _fun0001_ip = 602; continue _fun0001 }
 565:
            var12 = global;
            var14 = var12.Math;
            var12 = var14.floor;
            var6 = var15 / var6;
            var12 = var12.bind(var14)(var6);
            var6 = 'years';
            var6 = var13.bind(var8)(var6, var12);
            if(!(var10 == var6)) { _fun0001_ip = 640; continue _fun0001 }
 602:
            var10 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var7 = var10.bind(var8)(var7);
            var9 = var7.bind(var8)(var9);
            var8 = var9.format;
            var7 = 'LL';
            var7 = var8.bind(var9)(var7);
            return var7;
 640:
            return var6;
 642:
            return var5;
 644:
            return var4;
 646:
            return var3;
 648:
            return var2;
 650:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
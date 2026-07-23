// discord_common/js/packages/application-widget-renderer/src/resolvedDisplayField.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var4 = function decimalToClampedPercentage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = global;
            var4 = var3.isNaN;
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var8 = 0;
            var1 = 0;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var3.Math;
            var4 = var5.min;
            var7 = var3.Math;
            var6 = var7.max;
            var10 = var3.Math;
            var9 = var10.round;
            var3 = 100;
            var2 = var3 * var2;
            var2 = var9.bind(var10)(var2);
            var2 = var6.bind(var7)(var2, var8);
            var1 = var4.bind(var5)(var2, var3);
case 2:
            return var1;
        }
    };
    var _closure1_slot2 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 2;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/application-widget-renderer/src/resolvedDisplayField.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function resolveTextComponentValues(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var7 = arg2;
            var12 = arg3;
            var1 = arguments[3];
            var8 = arguments[4];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = false;
case 4:
            if(!(var8 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var8 = false;
case 6:
            var3 = null;
            if(!(var3 != var5)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var5.fields;
            var10 = var2.text;
            var13 = _closure1_slot0;
            var11 = _closure1_slot1;
            var9 = 0;
            var6 = var11[var9];
            var6 = var13.bind(var4)(var6);
            var6 = var6.ResolvedValueType;
            var14 = var6.STRING;
            var6 = new Array(2);
            var6[0] = var14;
            var11 = var11[var9];
            var11 = var13.bind(var4)(var11);
            var11 = var11.ResolvedValueType;
            var11 = var11.NUMBER;
            var6[1] = var11;
            var10 = var7.bind(var4)(var10, var6);
            var6 = null;
            if(var8) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var8 = var5.fields;
            var11 = var8.label;
            var14 = _closure1_slot0;
            var13 = _closure1_slot1;
            var8 = var13[var9];
            var8 = var14.bind(var4)(var8);
            var8 = var8.ResolvedValueType;
            var15 = var8.STRING;
            var8 = new Array(2);
            var8[0] = var15;
            var13 = var13[var9];
            var13 = var14.bind(var4)(var13);
            var13 = var13.ResolvedValueType;
            var13 = var13.NUMBER;
            var8[1] = var13;
            var6 = var7.bind(var4)(var11, var8);
case 10:
            if(!(var3 == var10)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            if(!(var3 != var6)) { _fun0002_ip = 14; continue _fun0002 }
case 12:
            var5 = var5.fields;
            var5 = var5.icon;
            var8 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var9];
            var2 = var8.bind(var4)(var2);
            var2 = var2.ResolvedValueType;
            var8 = var2.MEDIA;
            var2 = new Array(1);
            var2[0] = var8;
            var5 = var7.bind(var4)(var5, var2);
            var2 = {};
            var7 = 'value';
            var2['status'] = var7;
            var7 = var3 == var6;
            var9 = '';
            var8 = var9;
            if(var7) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var7 = var6.value;
            var8 = var9;
            if(!(var8 !== var7)) { _fun0002_ip = 15; continue _fun0002 }
case 17:
            var7 = var6.value;
            var11 = 'number';
            var7 = typeof var7;
            if(!(var11 !== var7)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var11 = var6.value;
            _fun0002_ip = 20; continue _fun0002;
case 18:
            var7 = var12.format;
            var6 = var6.value;
            var11 = var7.bind(var12)(var6);
case 20:
            var6 = global;
            var6 = var6.HermesInternal;
            var7 = var6.concat;
            var6 = ': ';
            var8 = var7.bind(var9)(var11, var6);
case 15:
            var6 = var3 == var10;
            var11 = '–';
            var7 = var11;
            if(var6) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var6 = var10.value;
            var7 = var11;
            if(!(var9 !== var6)) { _fun0002_ip = 21; continue _fun0002 }
case 23:
            var6 = var10.value;
            var11 = 'number';
            var6 = typeof var6;
            if(!(var11 !== var6)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var6 = var10.value;
            _fun0002_ip = 26; continue _fun0002;
case 24:
            var11 = var12.format;
            var10 = var10.value;
            var6 = var11.bind(var12)(var10);
case 26:
            var7 = var6;
case 21:
            var6 = global;
            var6 = var6.HermesInternal;
            var6 = var6.concat;
            var6 = var6.bind(var9)(var8, var7);
            var2['text'] = var6;
            var6 = var3 == var5;
            var4 = undefined;
            if(var6) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var4 = var5.media;
case 27:
            var5 = var3 != var4;
            var3 = null;
            if(!var5) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var3 = var4;
case 29:
            var2['icon'] = var3;
            return var2;
case 14:
            var2 = {};
            var3 = 'skeleton';
            var2['status'] = var3;
            return var2;
case 8:
            var2 = {};
            if(var1) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var1 = 'hidden';
            var2['status'] = var1;
            var1 = var2;
            _fun0002_ip = 33; continue _fun0002;
case 31:
            var3 = 'skeleton';
            var2['status'] = var3;
            var1 = var2;
case 33:
            return var1;
        }
    };
    var3['resolveTextComponentValues'] = var5;
    var5 = function resolveStatComponentValues(arg1, arg2, arg3, arg4) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var7 = arg2;
            var12 = arg3;
            var2 = arguments[4];
            var8 = undefined;
            if(!(var2 === var8)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var2 = false;
case 34:
            var1 = null;
            if(!(var1 != var4)) { _fun0003_ip = 28; continue _fun0003 }
case 6:
            var3 = var4.fields;
            var6 = var3.value;
            var11 = _closure1_slot0;
            var3 = _closure1_slot1;
            var15 = 0;
            var5 = var3[var15];
            var5 = var11.bind(var8)(var5);
            var5 = var5.ResolvedValueType;
            var10 = var5.STRING;
            var5 = new Array(2);
            var5[0] = var10;
            var10 = var3[var15];
            var10 = var11.bind(var8)(var10);
            var10 = var10.ResolvedValueType;
            var10 = var10.NUMBER;
            var5[1] = var10;
            var10 = var7.bind(var8)(var6, var5);
            var5 = var4.fields;
            var6 = var5.label;
            var5 = var3[var15];
            var5 = var11.bind(var8)(var5);
            var5 = var5.ResolvedValueType;
            var13 = var5.STRING;
            var5 = new Array(1);
            var5[0] = var13;
            var5 = var7.bind(var8)(var6, var5);
            var6 = var4.fields;
            var6 = var6.icon;
            var3 = var3[var15];
            var3 = var11.bind(var8)(var3);
            var3 = var3.ResolvedValueType;
            var11 = var3.MEDIA;
            var3 = new Array(1);
            var3[0] = var11;
            var7 = var7.bind(var8)(var6, var3);
            var3 = {};
            if(!(var1 != var10)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var6 = {};
            var11 = 'value';
            var6['status'] = var11;
            var13 = var10.type;
            var14 = _closure1_slot0;
            var11 = _closure1_slot1;
            var11 = var11[var15];
            var11 = var14.bind(var8)(var11);
            var11 = var11.ResolvedValueType;
            var11 = var11.STRING;
            if(!(var13 !== var11)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var11 = var10.presentationType;
            var13 = _closure1_slot0;
            var14 = _closure1_slot1;
            var9 = 1;
            var9 = var14[var9];
            var9 = var13.bind(var8)(var9);
            var9 = var9.ApplicationWidgetFieldPresentationType;
            var9 = var9.DURATION;
            if(!(var11 !== var9)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var11 = var12.format;
            var9 = var10.value;
            var9 = var11.bind(var12)(var9);
            _fun0003_ip = 42; continue _fun0003;
case 40:
            var12 = var10.value;
            var11 = arg4;
            var9 = var11.bind(var8)(var12);
case 42:
            _fun0003_ip = 43; continue _fun0003;
case 38:
            var9 = var10.value;
case 43:
            var6['text'] = var9;
            var9 = var1 == var7;
            var8 = undefined;
            if(var9) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var8 = var7.media;
case 44:
            var9 = var1 != var8;
            var7 = null;
            if(!var9) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var7 = var8;
case 46:
            var6['icon'] = var7;
            _fun0003_ip = 48; continue _fun0003;
case 36:
            var7 = {};
            var8 = 'skeleton';
            var7['status'] = var8;
            var6 = var7;
case 48:
            var3['value'] = var6;
            var4 = var4.fields;
            var4 = var4.label;
            if(!(var1 != var4)) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            if(!(var1 != var5)) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var4 = {};
            var6 = 'value';
            var4['status'] = var6;
            var5 = var5.value;
            var4['text'] = var5;
            _fun0003_ip = 53; continue _fun0003;
case 51:
            var5 = {};
            var6 = 'skeleton';
            var5['status'] = var6;
            var4 = var5;
case 53:
            _fun0003_ip = 54; continue _fun0003;
case 49:
            var5 = {};
            var6 = 'hidden';
            var5['status'] = var6;
            var4 = var5;
case 54:
            var3['label'] = var4;
            return var3;
case 28:
            var1 = null;
            if(!var2) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var2 = {};
            var3 = {};
            var4 = 'skeleton';
            var3['status'] = var4;
            var2['value'] = var3;
            var3 = {};
            var3['status'] = var4;
            var2['label'] = var3;
            var1 = var2;
case 55:
            return var1;
        }
    };
    var3['resolveStatComponentValues'] = var5;
    var5 = function resolveSingleStringOrSkeleton(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var3 = var1 == var2;
            var5 = undefined;
            var4 = undefined;
            if(var3) { _fun0004_ip = 6; continue _fun0004 }
case 57:
            var3 = var2.fields;
            var2 = arg2;
            var4 = var3[var2];
case 6:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 0;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.ResolvedValueType;
            var2 = var2.STRING;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = arg3;
            var2 = var2.bind(var5)(var4, var3);
            if(!(var1 != var2)) { _fun0004_ip = 58; continue _fun0004 }
case 59:
            var1 = {};
            var3 = 'value';
            var1['status'] = var3;
            var2 = var2.value;
            var1['text'] = var2;
            _fun0004_ip = 60; continue _fun0004;
case 58:
            var2 = {};
            var3 = 'skeleton';
            var2['status'] = var3;
            var1 = var2;
case 60:
            return var1;
        }
    };
    var3['resolveSingleStringOrSkeleton'] = var5;
    var3['decimalToClampedPercentage'] = var4;
    var2 = function resolveProgressPercentage(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var2 = null;
            var5 = var2 == var3;
            var6 = 0;
            var1 = 0;
            if(var5) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            if(!(var2 != var4)) { _fun0005_ip = 63; continue _fun0005 }
case 4:
            var5 = var4.value;
            var2 = 0;
            if(!(var6 !== var5)) { _fun0005_ip = 64; continue _fun0005 }
case 65:
            var6 = _closure1_slot2;
            var5 = var3.value;
            var4 = var4.value;
            var5 = var5 / var4;
            var4 = undefined;
            var2 = var6.bind(var4)(var5);
case 64:
            _fun0005_ip = 66; continue _fun0005;
case 63:
            var5 = _closure1_slot2;
            var4 = var3.value;
            var3 = undefined;
            var2 = var5.bind(var3)(var4);
case 66:
            var1 = var2;
case 61:
            return var1;
        }
    };
    var3['resolveProgressPercentage'] = var2;
    return var1;
})();
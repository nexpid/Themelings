// app/modules/interaction_components/validateComponent.tsx
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
    var1 = function validateSelect(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = arg2;
            var5 = var1.minValues;
            var10 = var1.maxValues;
            var4 = var1.required;
            var2 = null;
            var6 = var2 == var7;
            var3 = 0;
            var1 = 0;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var7.type;
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var9 = var6[var3];
            var6 = undefined;
            var6 = var11.bind(var6)(var9);
            var6 = var6.ComponentType;
            var6 = var6.STRING_SELECT;
            if(!(var8 !== var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var7.selectedOptions;
            var6 = var6.length;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var7 = var7.values;
            var6 = var7.length;
case 6:
            var1 = var6;
case 2:
            if(!(var3 !== var1)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            if(!(!(var1 < var5))) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var6 = var1 > var10;
            var1 = null;
            if(!var6) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 1;
            var8 = var12[var6];
            var7 = undefined;
            var8 = var11.bind(var7)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var6 = var12[var6];
            var6 = var11.bind(var7)(var6);
            var6 = var6.t;
            var7 = var6.LDvfRE;
            var6 = {};
            var6['count'] = var10;
            var1 = var8.bind(var9)(var7, var6);
case 11:
            _fun0001_ip = 13; continue _fun0001;
case 9:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 1;
            var8 = var11[var6];
            var7 = undefined;
            var8 = var10.bind(var7)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var6 = var11[var6];
            var6 = var10.bind(var7)(var6);
            var6 = var6.t;
            var7 = var6.Jmwzd3;
            var6 = {};
            var6['count'] = var5;
            var1 = var8.bind(var9)(var7, var6);
case 13:
            _fun0001_ip = 14; continue _fun0001;
case 7:
            var7 = 'modal';
            var6 = arg3;
            if(!(var7 !== var6)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var3 = var3 === var5;
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var3 = !var4;
case 17:
            var2 = null;
            if(var3) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 1;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.eJEUvL;
            var2 = var4.bind(var5)(var3);
case 18:
            var1 = var2;
case 14:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/validateComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function validateComponent(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var1 = null;
            if(!(var1 != var5)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 2;
            var2 = var4[var2];
            var7 = undefined;
            var4 = var3.bind(var7)(var2);
            var3 = var5.type;
            var2 = var6.type;
            var3 = var3 === var2;
            var2 = 'component type matches state';
            var2 = var4.bind(var7)(var3, var2);
case 20:
            var8 = var6.type;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 0;
            var3 = var3[var7];
            var4 = undefined;
            var3 = var9.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.BUTTON;
            if(!(var3 !== var8)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var9.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.STRING_SELECT;
            if(!(var3 !== var8)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var9.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.USER_SELECT;
            if(!(var3 !== var8)) { _fun0002_ip = 24; continue _fun0002 }
case 26:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var9.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.ROLE_SELECT;
            if(!(var3 !== var8)) { _fun0002_ip = 24; continue _fun0002 }
case 27:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var9.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.MENTIONABLE_SELECT;
            if(!(var3 !== var8)) { _fun0002_ip = 24; continue _fun0002 }
case 28:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var9.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.CHANNEL_SELECT;
            if(!(var3 !== var8)) { _fun0002_ip = 24; continue _fun0002 }
case 29:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var9.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.TEXT_INPUT;
            if(!(var3 !== var8)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var9.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.FILE_UPLOAD;
            if(!(var3 !== var8)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 2;
            var3 = var9[var3];
            var9 = var8.bind(var4)(var3);
            var8 = false;
            var3 = 'missing validator for this component';
            var3 = var9.bind(var4)(var8, var3);
            return var4;
case 32:
            var13 = var6.minValues;
            var14 = var6.maxValues;
            var9 = var6.required;
            var3 = var1 == var5;
            var8 = undefined;
            if(var3) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var3 = var5.uploadIds;
            var8 = var3.length;
case 34:
            var10 = var1 != var8;
            var3 = 0;
            if(!var10) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var3 = var8;
case 36:
            if(!(var7 !== var3)) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            if(!(!(var3 < var13))) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var8 = var3 > var14;
            var3 = null;
            if(!var8) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var10 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 1;
            var11 = var15[var8];
            var11 = var10.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var15[var8];
            var8 = var10.bind(var4)(var8);
            var8 = var8.t;
            var10 = var8.dy6viI;
            var8 = {};
            var8['maxValues'] = var14;
            var3 = var11.bind(var12)(var10, var8);
case 42:
            _fun0002_ip = 44; continue _fun0002;
case 40:
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 1;
            var11 = var14[var8];
            var11 = var10.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var14[var8];
            var8 = var10.bind(var4)(var8);
            var8 = var8.t;
            var10 = var8.pmAt6+;
            var8 = {};
            var8['minValues'] = var13;
            var3 = var11.bind(var12)(var10, var8);
case 44:
            _fun0002_ip = 45; continue _fun0002;
case 38:
            var8 = null;
            if(!var9) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 1;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.eJEUvL;
            var8 = var10.bind(var11)(var9);
case 46:
            var3 = var8;
case 45:
            return var3;
case 30:
            var13 = var6.minLength;
            var12 = var6.maxLength;
            var8 = var6.required;
            if(!(var1 != var5)) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var3 = var5.value;
            var3 = var3.length;
            if(!(var7 !== var3)) { _fun0002_ip = 48; continue _fun0002 }
case 50:
            var3 = var5.value;
            var3 = var3.length;
            if(!(!(var3 < var13))) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var3 = var5.value;
            var3 = var3.length;
            var7 = var3 > var12;
            var3 = null;
            if(!var7) { _fun0002_ip = 53; continue _fun0002 }
case 51:
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 1;
            var10 = var14[var7];
            var10 = var9.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.formatToPlainString;
            var7 = var14[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.t;
            var9 = var7.ONSqYW;
            var7 = {};
            var7['min'] = var13;
            var7['max'] = var12;
            var3 = var10.bind(var11)(var9, var7);
case 53:
            _fun0002_ip = 54; continue _fun0002;
case 48:
            var7 = null;
            if(!var8) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 1;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.eJEUvL;
            var7 = var9.bind(var10)(var8);
case 55:
            var3 = var7;
case 54:
            return var3;
case 24:
            var3 = _closure1_slot3;
            var2 = arg3;
            var2 = var3.bind(var4)(var6, var5, var2);
            return var2;
case 22:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
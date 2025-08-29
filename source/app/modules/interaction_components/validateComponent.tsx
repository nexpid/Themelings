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
 0:
            var1 = arg1;
            var7 = arg2;
            var5 = var1.minValues;
            var10 = var1.maxValues;
            var4 = var1.required;
            var2 = null;
            var6 = var2 == var7;
            var3 = 0;
            var1 = 0;
            if(var6) { _fun0001_ip = 106; continue _fun0001 }
 37:
            var8 = var7.type;
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var9 = var6[var3];
            var6 = undefined;
            var6 = var11.bind(var6)(var9);
            var6 = var6.ComponentType;
            var6 = var6.STRING_SELECT;
            if(!(var8 !== var6)) { _fun0001_ip = 93; continue _fun0001 }
 80:
            var6 = var7.selectedOptions;
            var6 = var6.length;
            _fun0001_ip = 103; continue _fun0001;
 93:
            var7 = var7.values;
            var6 = var7.length;
 103:
            var1 = var6;
 106:
            if(!(var3 !== var1)) { _fun0001_ip = 266; continue _fun0001 }
 113:
            if(!(!(var1 < var5))) { _fun0001_ip = 197; continue _fun0001 }
 117:
            var6 = var1 > var10;
            var1 = null;
            if(!var6) { _fun0001_ip = 195; continue _fun0001 }
 126:
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
 195:
            _fun0001_ip = 264; continue _fun0001;
 197:
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
 264:
            _fun0001_ip = 354; continue _fun0001;
 266:
            var7 = 'modal';
            var6 = arg3;
            if(!(var7 !== var6)) { _fun0001_ip = 283; continue _fun0001 }
 277:
            var3 = var3 === var5;
            _fun0001_ip = 286; continue _fun0001;
 283:
            var3 = !var4;
 286:
            var2 = null;
            if(var3) { _fun0001_ip = 351; continue _fun0001 }
 291:
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
 351:
            var1 = var2;
 354:
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
 0:
            var6 = arg1;
            var5 = arg2;
            var1 = null;
            if(!(var1 != var5)) { _fun0002_ip = 63; continue _fun0002 }
 12:
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
 63:
            var8 = var6.type;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 0;
            var3 = var3[var7];
            var4 = undefined;
            var3 = var9.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.BUTTON;
            if(!(var3 !== var8)) { _fun0002_ip = 580; continue _fun0002 }
 111:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var9.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.STRING_SELECT;
            if(!(var3 !== var8)) { _fun0002_ip = 564; continue _fun0002 }
 147:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var9.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.USER_SELECT;
            if(!(var3 !== var8)) { _fun0002_ip = 564; continue _fun0002 }
 183:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var9.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.ROLE_SELECT;
            if(!(var3 !== var8)) { _fun0002_ip = 564; continue _fun0002 }
 219:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var9.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.MENTIONABLE_SELECT;
            if(!(var3 !== var8)) { _fun0002_ip = 564; continue _fun0002 }
 255:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var9.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.CHANNEL_SELECT;
            if(!(var3 !== var8)) { _fun0002_ip = 564; continue _fun0002 }
 291:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var9.bind(var4)(var3);
            var3 = var3.ComponentType;
            var3 = var3.TEXT_INPUT;
            if(!(var3 !== var8)) { _fun0002_ip = 360; continue _fun0002 }
 324:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 2;
            var3 = var9[var3];
            var9 = var8.bind(var4)(var3);
            var8 = false;
            var3 = 'missing validator for this component';
            var3 = var9.bind(var4)(var8, var3);
            return var4;
 360:
            var13 = var6.minLength;
            var12 = var6.maxLength;
            var8 = var6.required;
            if(!(var1 != var5)) { _fun0002_ip = 499; continue _fun0002 }
 382:
            var3 = var5.value;
            var3 = var3.length;
            if(!(var7 !== var3)) { _fun0002_ip = 499; continue _fun0002 }
 396:
            var3 = var5.value;
            var3 = var3.length;
            if(!(!(var3 < var13))) { _fun0002_ip = 429; continue _fun0002 }
 410:
            var3 = var5.value;
            var3 = var3.length;
            var7 = var3 > var12;
            var3 = null;
            if(!var7) { _fun0002_ip = 497; continue _fun0002 }
 429:
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
 497:
            _fun0002_ip = 562; continue _fun0002;
 499:
            var7 = null;
            if(!var8) { _fun0002_ip = 559; continue _fun0002 }
 504:
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
 559:
            var3 = var7;
 562:
            return var3;
 564:
            var3 = _closure1_slot3;
            var2 = arg3;
            var2 = var3.bind(var4)(var6, var5, var2);
            return var2;
 580:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
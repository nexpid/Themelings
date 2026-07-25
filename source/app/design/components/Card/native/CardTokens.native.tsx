// app/design/components/Card/native/CardTokens.native.tsx
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
    var4 = 'design/components/Card/native/CardTokens.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createCardShadowToken(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 0;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.experimental_createToken;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var2 = var1.gradient;
                var1 = null;
                if(!(var1 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot0;
                var2 = 'none';
                if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var2 = _closure2_slot0;
                var1 = 'border';
                if(!(var1 !== var2)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var1 = 'high';
                if(!(var1 !== var2)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                var1 = 'ledge';
                if(!(var1 !== var2)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var1 = 'low';
                if(!(var1 !== var2)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                var1 = 'medium';
                if(!(var1 !== var2)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                var1 = undefined;
                return var1;
case 13:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.shadows;
                var1 = var1.SHADOW_MEDIUM;
                return var1;
case 11:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.shadows;
                var1 = var1.SHADOW_LOW;
                return var1;
case 9:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.shadows;
                var1 = var1.SHADOW_LEDGE;
                return var1;
case 7:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.shadows;
                var1 = var1.SHADOW_HIGH;
                return var1;
case 5:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.shadows;
                var1 = var1.SHADOW_BORDER;
                return var1;
case 2:
                var1 = {};
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['createCardShadowToken'] = var2;
    return var1;
})();
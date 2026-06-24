// app/modules/parent_tools/hooks/useHelpLineVisibility.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var4 = function useShouldShowHelplineLink() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 3;
            var1 = var8[var1];
            var7 = undefined;
            var1 = var3.bind(var7)(var1);
            var1 = var1.bind(var7)();
            var6 = _closure1_slot0;
            var4 = 4;
            var3 = var8[var4];
            var11 = var6.bind(var7)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getUserCountry;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var10.bind(var11)(var9, var3);
            var _closure2_slot0 = var3;
            var4 = var8[var4];
            var8 = var6.bind(var7)(var4);
            var7 = var8.useStateFromStores;
            var4 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var1 = _closure1_slot4;
                var1 = var1.locale;
                return var1;
            };
            var4 = var7.bind(var8)(var6, var4);
            var8 = _closure1_slot3;
            var7 = var8.useEffect;
            var6 = new Array(1);
            var6[0] = var3;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchUserCountryCode;
                    var1 = var1.bind(var2)();
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var5, var6);
            var1 = !var1;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = null;
            var1 = var5 != var3;
case 4:
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot6;
            var5 = var6.has;
            var3 = var3.alpha2;
            var1 = var5.bind(var6)(var3);
case 6:
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = _closure1_slot7;
            var2 = var3.has;
            var1 = var2.bind(var3)(var4);
case 8:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var5 = global;
    var11 = var5.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var1 = 0;
    var10 = var7[var1];
    var8 = metroImportAll;
    var1 = undefined;
    var8 = var8.bind(var1)(var10);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var10 = var5.Set;
    var8 = var10.prototype;
    var9 = Object.create(var8, {constructor: {value: var10}});
    var14 = ['US'];
    var15 = var9;
    var8 = new var15[var10](var14, var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot6 = var8;
    var9 = var5.Set;
    var5 = var9.prototype;
    var8 = Object.create(var5, {constructor: {value: var9}});
    var14 = ['en-US', 'es-ES'];
    var15 = var8;
    var5 = new var15[var9](var14, var13);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot7 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/parent_tools/hooks/useHelpLineVisibility.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useShouldShowHelplineLink'] = var4;
    var2 = function useShouldShowThroughlineLink() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var1 = var1.bind(var3)();
            var2 = _closure1_slot8;
            var2 = var2.bind(var3)();
            var1 = !var1;
            if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var1 = !var2;
case 10:
            return var1;
        }
    };
    var3['useShouldShowThroughlineLink'] = var2;
    return var1;
})();
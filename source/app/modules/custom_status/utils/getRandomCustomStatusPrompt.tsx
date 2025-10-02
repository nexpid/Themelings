// app/modules/custom_status/utils/getRandomCustomStatusPrompt.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.CustomStatusPrompts;
    var _closure1_slot2 = var7;
    var4 = var4.CustomStatusPromptValues;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/custom_status/utils/getRandomCustomStatusPrompt.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getRandomCustomStatusPrompt(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var1.size;
            var1 = 0;
            if(!(!(var2 > var1))) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var2 = _closure1_slot2;
            _fun0001_ip = 5; continue _fun0001;
case 4:
            var5 = _closure1_slot2;
            var4 = var5.filter;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.value;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var2 = var4.bind(var5)(var1);
case 5:
            var4 = var2.length;
            var1 = 0;
            if(!(var1 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = global;
            var5 = var1.Math;
            var4 = var5.floor;
            var6 = var1.Math;
            var1 = var6.random;
            var6 = var1.bind(var6)();
            var1 = var2.length;
            var1 = var6 * var1;
            var1 = var4.bind(var5)(var1);
            var1 = var2[var1];
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var2 = {};
            var4 = _closure1_slot3;
            var4 = var4.ADD_STATUS;
            var2['value'] = var4;
            var3 = function label() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 1;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.Vq4UmZ;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['label'] = var3;
            var1 = var2;
case 8:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/custom_status/utils/getRandomCustomStatusPrompt.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 26; continue _fun0001 }
 15:
            var2 = var1.size;
            var1 = 0;
            if(!(!(var2 > var1))) { _fun0001_ip = 35; continue _fun0001 }
 26:
            var2 = _closure1_slot2;
            _fun0001_ip = 57; continue _fun0001;
 35:
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
 57:
            var4 = var2.length;
            var1 = 0;
            if(!(var1 !== var4)) { _fun0001_ip = 118; continue _fun0001 }
 68:
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
            _fun0001_ip = 149; continue _fun0001;
 118:
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
 149:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
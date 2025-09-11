// app/modules/potions/utils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
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
    var4 = 'modules/potions/utils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.hasPotions;
            var3 = var3.bind(var2)();
            if(var3) { _fun0001_ip = 22; continue _fun0001 }
 18:
            var3 = false;
            return var3;
 22:
            var3 = var2.potions;
            var2 = null;
            if(!(var2 == var3)) { _fun0001_ip = 38; continue _fun0001 }
 34:
            var3 = new Array(0);
 38:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 0;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            var _closure2_slot0 = var2;
            var2 = var3.some;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var2 = var3.type;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 1;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.MessagePotionTypes;
                    var1 = var1.CONFETTI;
                    var1 = var2 === var1;
                    if(!var1) { _fun0002_ip = 90; continue _fun0002 }
 52:
                    var2 = _closure2_slot0;
                    var2 = !var2;
                    if(var2) { _fun0002_ip = 87; continue _fun0002 }
 65:
                    var4 = var3.emoji;
                    var3 = 0;
                    var3 = var4[var3];
                    var4 = var3.id;
                    var3 = null;
                    var2 = var3 != var4;
 87:
                    var1 = var2;
 90:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['messageHasConfettiPotion'] = var4;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var2 = var1.hasPotions;
            var2 = var2.bind(var1)();
            if(var2) { _fun0003_ip = 20; continue _fun0003 }
 16:
            var2 = undefined;
            return var2;
 20:
            var3 = var1.potions;
            var1 = null;
            if(!(var1 == var3)) { _fun0003_ip = 36; continue _fun0003 }
 32:
            var3 = new Array(0);
 36:
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.MessagePotionTypes;
                var1 = var1.CONFETTI;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getFirstConfettiPotion'] = var4;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var2 = var3.id;
            var1 = null;
            if(!(var1 == var2)) { _fun0004_ip = 34; continue _fun0004 }
 14:
            var1 = {};
            var2 = var3.optionallyDiverseSequence;
            var1['name'] = var2;
            var2 = undefined;
            var1['id'] = var2;
            _fun0004_ip = 57; continue _fun0004;
 34:
            var2 = {};
            var4 = var3.id;
            var2['id'] = var4;
            var3 = var3.name;
            var2['name'] = var3;
            var1 = var2;
 57:
            return var1;
        }
    };
    var3['disambiguatedEmojiToMessagePotionEmoji'] = var2;
    return var1;
})();
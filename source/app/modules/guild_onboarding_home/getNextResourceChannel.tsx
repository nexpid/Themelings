// app/modules/guild_onboarding_home/getNextResourceChannel.tsx
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
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding_home/getNextResourceChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getCurrentAndNextResourceChannel(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg2;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot2;
            var3 = var4.getResourceChannels;
            var2 = arg1;
            var3 = var3.bind(var4)(var2);
            var2 = var3.findIndex;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.channelId;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var2.bind(var3)(var1);
            var1 = 0;
            if(!(!(var4 < var1))) { _fun0001_ip = 92; continue _fun0001 }
 54:
            var2 = var3[var4];
            var1 = new Array(2);
            var1[0] = var2;
            var2 = 1;
            var4 = var4 + var2;
            var2 = var3.length;
            var2 = var4 % var2;
            var2 = var3[var2];
            var1[1] = var2;
            _fun0001_ip = 102; continue _fun0001;
 92:
            var1 = [null, null];
 102:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function usePreviousAndNextResourceChannel(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var4 = 1;
            var5 = var3[var4];
            var3 = undefined;
            var6 = var6.bind(var3)(var5);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getResourceChannels;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var5.bind(var6)(var3, var2);
            var2 = var3.findIndex;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.channelId;
                var1 = _closure2_slot1;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = 0;
            if(!(!(var2 < var1))) { _fun0002_ip = 191; continue _fun0002 }
 95:
            var1 = var3.length;
            if(!(!(var1 <= var4))) { _fun0002_ip = 191; continue _fun0002 }
 104:
            var5 = var3.length;
            var1 = 2;
            if(!(var1 !== var5)) { _fun0002_ip = 164; continue _fun0002 }
 116:
            var5 = var2 - var4;
            var1 = var3.length;
            var1 = var5 % var1;
            var5 = var3[var1];
            var1 = new Array(2);
            var1[0] = var5;
            var6 = var2 + var4;
            var5 = var3.length;
            var5 = var6 % var5;
            var5 = var3[var5];
            var1[1] = var5;
            _fun0002_ip = 189; continue _fun0002;
 164:
            var2 = var4 - var2;
            var3 = var3[var2];
            var2 = [null];
            var2[1] = var3;
            var1 = var2;
 189:
            _fun0002_ip = 201; continue _fun0002;
 191:
            var1 = [null, null];
 201:
            return var1;
        }
    };
    var3['usePreviousAndNextResourceChannel'] = var2;
    return var1;
})();
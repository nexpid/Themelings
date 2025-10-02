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
case 0:
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
            if(!(!(var4 < var1))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3[var4];
            var1 = new Array(2);
            var1[0] = var2;
            var2 = 1;
            var4 = var4 + var2;
            var2 = var3.length;
            var2 = var4 % var2;
            var2 = var3[var2];
            var1[1] = var2;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var1 = [null, null];
case 4:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function usePreviousAndNextResourceChannel(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
            if(!(!(var2 < var1))) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var1 = var3.length;
            if(!(!(var1 <= var4))) { _fun0002_ip = 5; continue _fun0002 }
case 7:
            var5 = var3.length;
            var1 = 2;
            if(!(var1 !== var5)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
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
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var2 = var4 - var2;
            var3 = var3[var2];
            var2 = [null];
            var2[1] = var3;
            var1 = var2;
case 10:
            _fun0002_ip = 11; continue _fun0002;
case 5:
            var1 = [null, null];
case 11:
            return var1;
        }
    };
    var3['usePreviousAndNextResourceChannel'] = var2;
    return var1;
})();
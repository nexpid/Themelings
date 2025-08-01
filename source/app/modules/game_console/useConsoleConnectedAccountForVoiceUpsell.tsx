// app/modules/game_console/useConsoleConnectedAccountForVoiceUpsell.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CONSOLE_VOICE_PLATFORMS;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_console/useConsoleConnectedAccountForVoiceUpsell.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useConsoleConnectedAccountForVoiceUpsell() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 5;
            var1 = var8[var5];
            var6 = undefined;
            var10 = var7.bind(var6)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getActivities;
                var1 = true;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var9.bind(var10)(var3, var1);
            var3 = var9.filter;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.type;
                    var4 = var1.platform;
                    var1 = _closure1_slot7;
                    var1 = var1.PLAYING;
                    var1 = var3 === var1;
                    if(!var1) { _fun0002_ip = 40; continue _fun0002 }
 34:
                    var3 = null;
                    var1 = var3 != var4;
 40:
                    if(!var1) { _fun0002_ip = 57; continue _fun0002 }
 43:
                    var3 = _closure1_slot6;
                    var2 = var3.has;
                    var1 = var2.bind(var3)(var4);
 57:
                    return var1;
                }
            };
            var1 = var3.bind(var9)(var1);
            var _closure2_slot0 = var1;
            var3 = var8[var5];
            var11 = var7.bind(var6)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot5;
                    var1 = var3.getAwaitingRemoteSessionInfo;
                    var1 = var1.bind(var3)();
                    var3 = null;
                    var1 = var3 != var1;
                    if(var1) { _fun0003_ip = 44; continue _fun0003 }
 26:
                    var4 = _closure1_slot5;
                    var2 = var4.getRemoteSessionId;
                    var2 = var2.bind(var4)();
                    var1 = var3 != var2;
 44:
                    return var1;
                }
            };
            var3 = var10.bind(var11)(var9, var3);
            var5 = var8[var5];
            var6 = var7.bind(var6)(var5);
            var5 = var6.useStateFromStores;
            var7 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var7;
            var2 = function() {
                var4 = _closure2_slot0;
                var3 = var4.map;
                var2 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = arg1;
                        var5 = var1.platform;
                        var1 = null;
                        if(!(var1 != var5)) { _fun0004_ip = 72; continue _fun0004 }
 15:
                        var6 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 6;
                        var2 = var4[var2];
                        var4 = undefined;
                        var2 = var6.bind(var4)(var2);
                        var5 = var2.bind(var4)(var5);
                        var4 = var1 == var5;
                        var2 = null;
                        if(var4) { _fun0004_ip = 70; continue _fun0004 }
 54:
                        var4 = _closure1_slot3;
                        var3 = var4.getAccount;
                        var2 = var3.bind(var4)(var1, var5);
 70:
                        return var2;
 72:
                        return var1;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.find;
                var1 = function(arg1) {
                    var2 = null;
                    var1 = arg1;
                    var1 = var2 != var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var5.bind(var6)(var4, var2);
            var4 = var1.length;
            var1 = 0;
            var5 = var4 > var1;
            var4 = null;
            var1 = null;
            if(!var5) { _fun0001_ip = 191; continue _fun0001 }
 174:
            var5 = var4 != var2;
            var1 = null;
            if(!var5) { _fun0001_ip = 191; continue _fun0001 }
 183:
            var1 = null;
            if(var3) { _fun0001_ip = 191; continue _fun0001 }
 188:
            var1 = var2;
 191:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/guild_communication_disabled/useCommunicationDisabledCountdownCleanup.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
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
    var7 = var4.useEffect;
    var _closure1_slot2 = var7;
    var4 = var4.useRef;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_communication_disabled/useCommunicationDisabledCountdownCleanup.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCommunicationDisabledCountdownCleanup(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var11 = null;
            var1 = var6;
            if(!(var11 == var1)) { _fun0001_ip = 20; continue _fun0001 }
 18:
            var1 = {};
 20:
            var7 = var1.communicationDisabledUntil;
            var9 = var1.userId;
            var _closure2_slot1 = var9;
            var10 = var1.guildId;
            var _closure2_slot2 = var10;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 1;
            var1 = var5[var1];
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            if(!(var11 == var7)) { _fun0001_ip = 92; continue _fun0001 }
 73:
            var1 = global;
            var8 = var1.Date;
            var1 = var8.now;
            var1 = var1.bind(var8)();
            _fun0001_ip = 111; continue _fun0001;
 92:
            var8 = global;
            var12 = var8.Date;
            var8 = var12.parse;
            var1 = var8.bind(var12)(var7);
 111:
            var1 = var4.bind(var5)(var1);
            var8 = var1.seconds;
            var _closure2_slot3 = var8;
            var4 = _closure1_slot3;
            var4 = var4.bind(var5)(var11);
            var _closure2_slot4 = var4;
            var4 = _closure1_slot2;
            var3 = new Array(5);
            var3[0] = var10;
            var3[1] = var9;
            var3[2] = var8;
            var3[3] = var7;
            var3[4] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var5 = null;
                    if(!(var5 != var3)) { _fun0002_ip = 31; continue _fun0002 }
 15:
                    var3 = _closure2_slot2;
                    if(!(var5 != var3)) { _fun0002_ip = 31; continue _fun0002 }
 23:
                    var3 = _closure2_slot1;
                    if(!(var5 == var3)) { _fun0002_ip = 57; continue _fun0002 }
 31:
                    var3 = global;
                    var6 = var3.clearTimeout;
                    var3 = _closure2_slot4;
                    var4 = var3.current;
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    return var3;
 57:
                    var4 = _closure2_slot3;
                    var3 = 0;
                    var3 = var4 <= var3;
                    if(!var3) { _fun0002_ip = 83; continue _fun0002 }
 70:
                    var4 = _closure2_slot4;
                    var4 = var4.current;
                    var3 = var5 == var4;
 83:
                    if(!var3) { _fun0002_ip = 125; continue _fun0002 }
 86:
                    var3 = _closure2_slot4;
                    var2 = global;
                    var6 = var2.setTimeout;
                    var5 = undefined;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.clearGuildMemberTimeout;
                        var3 = _closure2_slot2;
                        var2 = _closure2_slot1;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var2 = 1000;
                    var2 = var6.bind(var5)(var4, var2);
                    var3['current'] = var2;
 125:
                    var1 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var2 = _closure2_slot4;
                            var3 = var2.current;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0003_ip = 52; continue _fun0003 }
 18:
                            var3 = global;
                            var5 = var3.clearTimeout;
                            var3 = _closure2_slot4;
                            var4 = var3.current;
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            var1 = _closure2_slot4;
                            var1['current'] = var2;
 52:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useCommunicationDisabledCountdownCleanup'] = var2;
    return var1;
})();
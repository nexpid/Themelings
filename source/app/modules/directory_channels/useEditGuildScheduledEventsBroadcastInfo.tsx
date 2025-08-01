// app/modules/directory_channels/useEditGuildScheduledEventsBroadcastInfo.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DirectoryEntryTypes;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = false;
    var4['can_broadcast'] = var7;
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/directory_channels/useEditGuildScheduledEventsBroadcastInfo.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useEditGuildScheduledEventsBroadcastInfo(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var6;
            var2 = arg3;
            var _closure2_slot1 = var2;
            var11 = _closure1_slot4;
            var4 = var11.useState;
            var3 = _closure1_slot8;
            var3 = var4.bind(var11)(var3);
            var13 = _closure1_slot3;
            var8 = undefined;
            var12 = 2;
            var3 = var13.bind(var8)(var3, var12);
            var5 = 0;
            var4 = var3[var5];
            var _closure2_slot2 = var4;
            var9 = 1;
            var3 = var3[var9];
            var _closure2_slot3 = var3;
            var3 = var11.useState;
            var10 = false;
            var3 = var3.bind(var11)(var10);
            var3 = var13.bind(var8)(var3, var12);
            var5 = var3[var5];
            var3 = var3[var9];
            var _closure2_slot4 = var3;
            var9 = var11.useRef;
            var9 = var9.bind(var11)(var10);
            var _closure2_slot5 = var9;
            var9 = null;
            var10 = var9 == var7;
            var12 = undefined;
            if(var10) { _fun0001_ip = 136; continue _fun0001 }
 131:
            var12 = var7.id;
 136:
            var _closure2_slot6 = var12;
            var9 = var9 == var7;
            var11 = undefined;
            if(var9) { _fun0001_ip = 175; continue _fun0001 }
 149:
            var10 = var7.features;
            var9 = var10.has;
            var7 = _closure1_slot7;
            var7 = var7.HAS_DIRECTORY_ENTRY;
            var11 = var9.bind(var10)(var7);
 175:
            var _closure2_slot7 = var11;
            var10 = _closure1_slot4;
            var9 = var10.useEffect;
            var7 = new Array(3);
            var7[0] = var12;
            var7[1] = var11;
            var7[2] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot7;
                    if(var2) { _fun0002_ip = 30; continue _fun0002 }
 10:
                    var4 = _closure2_slot3;
                    var3 = _closure1_slot8;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0002_ip = 69; continue _fun0002;
 30:
                    var2 = _closure2_slot5;
                    var2 = var2.current;
                    if(var2) { _fun0002_ip = 69; continue _fun0002 }
 42:
                    var2 = _closure2_slot6;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 69; continue _fun0002 }
 52:
                    var1 = function() {
                        var4 = _closure1_slot2;
                        var3 = undefined;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0003_ip = 142; continue _fun0003 }
 10:
                                    var4 = _closure2_slot5;
                                    var3 = true;
                                    var4['current'] = var3;
 25: // try_start_0
                                    var6 = _closure1_slot0;
                                    var5 = _closure1_slot1;
                                    var4 = 6;
                                    var4 = var5[var4];
                                    var5 = undefined;
                                    var8 = var6.bind(var5)(var4);
                                    var7 = var8.getDirectoryEntryBroadcastInfo;
                                    var6 = _closure2_slot6;
                                    var3 = _closure1_slot6;
                                    var4 = var3.GUILD_SCHEDULED_EVENT;
                                    var3 = _closure2_slot0;
                                    var3 = var7.bind(var8)(var6, var4, var3);
                                    SaveGenerator(address=85);
 83:
                                    return var3;
 85:
                                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                                    if(var4) { _fun0003_ip = 102; continue _fun0003 }
 91:
                                    var4 = _closure2_slot3;
                                    var4 = var4.bind(var5)(var3);
 100: // try_end0
                                    _fun0003_ip = 125; continue _fun0003;
 102:
                                    return var3;
 105: // catch_target0
                                    CatchBlockStart(arg_register=2);
                                    var5 = _closure2_slot3;
                                    var4 = _closure1_slot8;
                                    var3 = undefined;
                                    var3 = var5.bind(var3)(var4);
 125:
                                    var3 = _closure2_slot5;
                                    var2 = false;
                                    var3['current'] = var2;
                                    var2 = undefined;
                                    return var2;
 142:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure4_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var2 = undefined;
                    var1 = var1.bind(var2)();
                    var1 = var1.bind(var2)();
 69:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var9.bind(var10)(var6, var7);
            var9 = var10.useEffect;
            var7 = new Array(1);
            var7[0] = var4;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot2;
                    var2 = var2.can_broadcast;
                    var3 = _closure2_slot4;
                    if(var2) { _fun0004_ip = 31; continue _fun0004 }
 20:
                    var4 = undefined;
                    var2 = false;
                    var2 = var3.bind(var4)(var2);
                    _fun0004_ip = 62; continue _fun0004;
 31:
                    var1 = _closure2_slot2;
                    var1 = var1.has_broadcast;
                    var2 = null;
                    var2 = var2 == var1;
                    if(var2) { _fun0004_ip = 55; continue _fun0004 }
 52:
                    var2 = var1;
 55:
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 62:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var9.bind(var10)(var6, var7);
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 7;
            var6 = var9[var6];
            var7 = var7.bind(var8)(var6);
            var6 = var7.useStateFromStores;
            var8 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.canEveryoneRoleViewEvent;
                var2 = _closure2_slot1;
                var5 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var6.bind(var7)(var2, var1);
            var1 = {};
            var1['broadcastInfo'] = var4;
            var4 = var2;
            if(!var4) { _fun0001_ip = 303; continue _fun0001 }
 300:
            var4 = var5;
 303:
            var1['broadcastToDirectoryChannels'] = var4;
            var1['setBroadcastToDirectoryChannels'] = var3;
            var1['canEveryoneRoleViewEvent'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
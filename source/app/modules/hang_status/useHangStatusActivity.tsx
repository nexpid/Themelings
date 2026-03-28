// app/modules/hang_status/useHangStatusActivity.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hang_status/useHangStatusActivity.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useSubscribeMembersForHangStatus(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var8 = _closure1_slot1;
        var4 = 4;
        var9 = var8[var4];
        var1 = undefined;
        var12 = var5.bind(var1)(var9);
        var11 = var12.useHangStatusExperiment;
        var9 = {};
        var9['guildId'] = var7;
        var10 = 'useSubscribeMembersForHangStatus';
        var9['location'] = var10;
        var9 = var11.bind(var12)(var9);
        var9 = var9.enableHangStatus;
        var _closure2_slot2 = var9;
        var4 = var8[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.HangStatusSubscribeExperiment;
        var5 = var8.useConfig;
        var4 = {};
        var4['location'] = var10;
        var4 = var5.bind(var8)(var4);
        var8 = var4.enabled;
        var _closure2_slot3 = var8;
        var5 = _closure1_slot2;
        var4 = var5.useEffect;
        var3 = new Array(4);
        var3[0] = var9;
        var3[1] = var8;
        var3[2] = var7;
        var3[3] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot2;
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot3;
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var4 = _closure2_slot0;
                var3 = null;
                if(!(var3 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
                var3 = _closure2_slot1;
                var4 = var3.length;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 6:
                var3 = _closure2_slot1;
                var3 = var3.length;
                var5 = 45;
                if(!(!(var3 >= var5))) { _fun0001_ip = 2; continue _fun0001 }
case 7:
                var7 = _closure1_slot4;
                var6 = var7.getVoiceStates;
                var4 = _closure2_slot0;
                var7 = var6.bind(var7)(var4);
                var4 = global;
                var6 = var4.Object;
                var4 = var6.keys;
                var4 = var4.bind(var6)(var7);
                var4 = var4.length;
                if(!(!(var4 >= var5))) { _fun0001_ip = 2; continue _fun0001 }
case 8:
                var6 = _closure2_slot1;
                var5 = var6.map;
                var4 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.user;
                    var1 = var1.id;
                    return var1;
                };
                var5 = var5.bind(var6)(var4);
                var _closure3_slot0 = var5;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 5;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var6.bind(var3)(var4);
                var3 = var4.subscribeMembers;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.unsubscribeMembers;
                    var3 = _closure2_slot0;
                    var2 = _closure3_slot0;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                return var1;
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useSubscribeMembersForHangStatus'] = var4;
    var2 = function useHangStatusActivity(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var4 = _closure1_slot3;
            var3 = var4.findActivity;
            var2 = _closure2_slot0;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot5;
                var1 = var1.HANG_STATUS;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useHangStatusActivity'] = var2;
    return var1;
})();
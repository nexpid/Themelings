// app/modules/rpc/helpers/activityInstanceConnectedParticipants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var8;
    var5 = function activityInstanceConnectedParticipants() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot3;
            var3 = var4.getCurrentEmbeddedActivity;
            var3 = var3.bind(var4)();
            var4 = null;
            if(!(var4 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 3;
            var4 = var7[var1];
            var5 = undefined;
            var9 = var6.bind(var5)(var4);
            var8 = var9.getEmbeddedActivityLocationGuildId;
            var4 = var3.location;
            var4 = var8.bind(var9)(var4);
            var _closure2_slot0 = var4;
            var1 = var7[var1];
            var8 = var6.bind(var5)(var1);
            var4 = var8.getEmbeddedActivityLocationChannelId;
            var1 = var3.location;
            var1 = var4.bind(var8)(var1);
            var _closure2_slot1 = var1;
            var1 = {};
            var4 = global;
            var8 = var4.Array;
            var4 = var8.from;
            var3 = var3.userIds;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getUser;
                    var1 = arg1;
                    var6 = var2.bind(var3)(var1);
                    var4 = null;
                    if(!(var4 == var6)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = undefined;
                    return var1;
case 4:
                    var2 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 4;
                    var1 = var8[var1];
                    var3 = undefined;
                    var9 = var2.bind(var3)(var1);
                    var7 = var9.getNickname;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var2 = var7.bind(var9)(var2, var1, var6);
                    var1 = {};
                    var7 = _closure1_slot1;
                    var5 = 5;
                    var5 = var8[var5];
                    var5 = var7.bind(var3)(var5);
                    var11 = var5.bind(var3)(var6);
                    var12 = var1;
                    var5 = copyDataProperties(var12, var11);
                    var4 = var4 != var2;
                    if(!var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = var2;
case 6:
                    var2 = 'nickname';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var4 = var4.bind(var8)(var3, var2);
            var3 = var4.filter;
            var2 = 6;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.isNotNullish;
            var2 = var3.bind(var4)(var2);
            var1['participants'] = var2;
            return var1;
case 2:
            var1 = {};
            var2 = new Array(0);
            var1['participants'] = var2;
            return var1;
        }
    };
    var _closure1_slot5 = var5;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var8[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var10 = var2.RPC_AUTHENTICATED_SCOPE;
    var2 = var2.RPC_SCOPE_CONFIG;
    var4 = {};
    var9 = var2.ANY;
    var2 = new Array(1);
    var2[0] = var10;
    var4[var9] = var2;
    var2 = {};
    var2['scope'] = var4;
    var6 = function handler() {
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var6 = var1.prevState;
                var3 = var1.dispatch;
                var1 = _closure1_slot5;
                var2 = undefined;
                var1 = var1.bind(var2)();
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 7;
                var4 = var7[var4];
                var5 = var5.bind(var2)(var4);
                var4 = var5.isEqual;
                var4 = var4.bind(var5)(var1, var6);
                if(var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var2 = var3.bind(var2)(var1);
case 8:
                return var1;
            }
        };
        return var1;
    };
    var2['handler'] = var6;
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/rpc/helpers/activityInstanceConnectedParticipants.tsx';
    var6 = var7.bind(var8)(var6);
    var3['activityInstanceConnectedParticipants'] = var5;
    var3['activityInstanceConnectedParticipantsScope'] = var4;
    var3['activityInstanceConnectedParticipantsUpdateEvent'] = var2;
    return var1;
})();
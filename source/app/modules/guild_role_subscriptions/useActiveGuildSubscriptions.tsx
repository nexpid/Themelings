// app/modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserGuildRoleSubscriptionRelationship;
    var _closure1_slot6 = var4;
    var4 = new Array(0);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useActiveGuildSubscriptions() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arguments[0];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
case 2:
            var8 = var1.ensureFresh;
            if(!(var8 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = false;
case 4:
            var _closure2_slot0 = var8;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var4 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 3;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var4 = var1.bind(var5)();
            var1 = _closure1_slot6;
            var1 = var1.SUBSCRIBED;
            var7 = var4 === var1;
            _closure2_slot1 = var7;
            var4 = _closure1_slot0;
            var1 = 4;
            var1 = var6[var1];
            var6 = var4.bind(var5)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getActiveGuildSubscriptions;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var5.bind(var6)(var4, var1);
            var6 = _closure1_slot4;
            var5 = var6.useRef;
            var4 = false;
            var4 = var5.bind(var6)(var4);
            _closure2_slot2 = var4;
            var5 = var6.useEffect;
            var4 = new Array(2);
            var4[0] = var8;
            var4[1] = var7;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var2 = _closure2_slot0;
                    var1['ensureFresh'] = var2;
                    var2 = _closure2_slot1;
                    var1['hasRoleSubscriptions'] = var2;
                    var2 = _closure2_slot2;
                    var2 = var2.current;
                    var1['hasFetched'] = var2;
                    var6 = var1.ensureFresh;
                    var5 = var1.hasFetched;
                    var4 = var1.hasRoleSubscriptions;
                    var7 = _closure1_slot5;
                    var1 = var7.getActiveGuildSubscriptions;
                    var8 = var1.bind(var7)();
                    var7 = null;
                    var10 = var7 == var8;
                    var1 = undefined;
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var9 = var8.length;
case 6:
                    var10 = var7 != var9;
                    var8 = 0;
                    var7 = 0;
                    if(!var10) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var7 = var9;
case 8:
                    var7 = var8 !== var7;
                    if(var7) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var7 = !var4;
case 10:
                    var4 = !var7;
                    if(!var7) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var6 = !var6;
                    if(var6) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var6 = var5;
case 14:
                    var4 = !var6;
case 12:
                    if(var4) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var5 = !var5;
                    if(!var5) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var7 = _closure1_slot5;
                    var6 = var7.hasFetchedSubscriptions;
                    var6 = var6.bind(var7)();
                    var5 = !var6;
case 18:
                    var4 = var5;
case 16:
                    if(!var4) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var4 = _closure2_slot2;
                    var3 = true;
                    var4['current'] = var3;
                    var3 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var2 = 5;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.fetchSubscriptions;
                    var2 = var2.bind(var3)();
case 20:
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3, var4);
            var3 = null;
            if(!(var3 == var1)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var1 = _closure1_slot7;
case 22:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
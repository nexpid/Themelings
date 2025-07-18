// app/modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var8 = native4;
    var3 = native6;
    var6 = native7;
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
 0:
            var1 = arguments[0];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 13; continue _fun0001 }
 11:
            var1 = {};
 13:
            var8 = var1.ensureFresh;
            if(!(var8 === var5)) { _fun0001_ip = 25; continue _fun0001 }
 23:
            var8 = false;
 25:
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
 0:
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
                    if(var10) { _fun0002_ip = 90; continue _fun0002 }
 85:
                    var9 = var8.length;
 90:
                    var10 = var7 != var9;
                    var8 = 0;
                    var7 = 0;
                    if(!var10) { _fun0002_ip = 104; continue _fun0002 }
 101:
                    var7 = var9;
 104:
                    var7 = var8 !== var7;
                    if(var7) { _fun0002_ip = 114; continue _fun0002 }
 111:
                    var7 = !var4;
 114:
                    var4 = !var7;
                    if(!var7) { _fun0002_ip = 132; continue _fun0002 }
 120:
                    var6 = !var6;
                    if(var6) { _fun0002_ip = 129; continue _fun0002 }
 126:
                    var6 = var5;
 129:
                    var4 = !var6;
 132:
                    if(var4) { _fun0002_ip = 161; continue _fun0002 }
 135:
                    var5 = !var5;
                    if(!var5) { _fun0002_ip = 158; continue _fun0002 }
 141:
                    var7 = _closure1_slot5;
                    var6 = var7.hasFetchedSubscriptions;
                    var6 = var6.bind(var7)();
                    var5 = !var6;
 158:
                    var4 = var5;
 161:
                    if(!var4) { _fun0002_ip = 206; continue _fun0002 }
 164:
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
 206:
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3, var4);
            var3 = null;
            if(!(var3 == var1)) { _fun0001_ip = 188; continue _fun0001 }
 184:
            var1 = _closure1_slot7;
 188:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
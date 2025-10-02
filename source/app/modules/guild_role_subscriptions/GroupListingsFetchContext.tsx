// app/modules/guild_role_subscriptions/GroupListingsFetchContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var7 = var7.bind(var1)(var4);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchState;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = var7.createContext;
    var4 = var4.bind(var7)(var1);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/GroupListingsFetchContext.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useGroupListingsFetchContext(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot3;
            var3 = var4.useContext;
            var1 = _closure1_slot8;
            var3 = var3.bind(var4)(var1);
            var4 = null;
            if(!(var4 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.listingsLoaded;
            var5 = var3.fetchGroupListingsForGuild;
            var3 = undefined;
            var3 = var5.bind(var3)();
            return var1;
case 2:
            var1 = global;
            var3 = var1.Error;
            var4 = var4 != var2;
            var5 = 'useGroupListingsFetchContext';
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var2;
case 4:
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var2 = '';
            var1 = ' must be used within a GroupListingsFetchContextProvider';
            var7 = var4.bind(var2)(var5, var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var8 = var2;
            var1 = new var8[var3](var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['useGroupListingsFetchContext'] = var4;
    var2 = function GroupListingsFetchContextProvider(arg1) {
        var1 = arg1;
        var13 = var1.guildId;
        var _closure2_slot0 = var13;
        var5 = var1.children;
        var8 = var1.refetchOnMount;
        var12 = var1.includeSoftDeleted;
        var _closure2_slot1 = var12;
        var11 = var1.countryCode;
        var _closure2_slot2 = var11;
        var7 = var1.dontFetchWhileTrue;
        var _closure2_slot3 = var7;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 4;
        var10 = var9[var3];
        var4 = undefined;
        var16 = var6.bind(var4)(var10);
        var15 = var16.useStateFromStores;
        var10 = _closure1_slot4;
        var14 = new Array(1);
        var14[0] = var10;
        var10 = function() {
            var2 = _closure1_slot4;
            var1 = var2.isConnected;
            var1 = var1.bind(var2)();
            return var1;
        };
        var14 = var15.bind(var16)(var14, var10);
        var _closure2_slot4 = var14;
        var3 = var9[var3];
        var10 = var6.bind(var4)(var3);
        var9 = var10.useStateFromStores;
        var3 = _closure1_slot5;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 == var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = _closure1_slot6;
                var1 = var1.FETCHED;
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var4 = _closure1_slot5;
                var3 = var4.getSubscriptionGroupListingsForGuildFetchState;
                var2 = _closure2_slot0;
                var1 = var3.bind(var4)(var2);
case 8:
                return var1;
            }
        };
        var6 = var9.bind(var10)(var6, var3);
        var10 = _closure1_slot3;
        var3 = var10.useRef;
        var3 = var3.bind(var10)(var8);
        var _closure2_slot5 = var3;
        var9 = var10.useCallback;
        var8 = new Array(5);
        var8[0] = var14;
        var8[1] = var13;
        var8[2] = var12;
        var8[3] = var11;
        var8[4] = var7;
        var7 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var2)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var1 = _closure2_slot4;
                if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 11:
                var2 = _closure2_slot3;
                var1 = true;
                if(!(var1 !== var2)) { _fun0003_ip = 9; continue _fun0003 }
case 12:
                var4 = _closure1_slot5;
                var3 = var4.getSubscriptionGroupListingsForGuildFetchState;
                var2 = _closure2_slot0;
                var4 = var3.bind(var4)(var2);
                var2 = _closure2_slot5;
                var2 = var2.current;
                if(var2) { _fun0003_ip = 13; continue _fun0003 }
case 4:
                var3 = _closure1_slot6;
                var3 = var3.NOT_FETCHED;
                var2 = var4 === var3;
case 13:
                if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 14:
                var3 = _closure2_slot5;
                var2 = false;
                var3['current'] = var2;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.fetchAllSubscriptionListingsDataForGuild;
                var2 = _closure2_slot0;
                var1 = {};
                var6 = _closure2_slot1;
                var1['includeSoftDeleted'] = var6;
                var5 = _closure2_slot2;
                var1['countryCode'] = var5;
                var1 = var3.bind(var4)(var2, var1);
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var7 = var9.bind(var10)(var7, var8);
        var2 = function useListingsLoaded(arg1, arg2) {
            var6 = arg1;
            var5 = arg2;
            var _closure3_slot0 = var6;
            var _closure3_slot1 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure3_slot0;
                    var1 = _closure1_slot6;
                    var1 = var1.FETCHED;
                    var1 = var3 === var1;
                    if(!var1) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var2 = _closure3_slot1;
                    var3 = var2.current;
                    var2 = true;
                    var1 = var2 !== var3;
case 15:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var8 = var2.bind(var4)(var6, var3);
        var3 = _closure1_slot7;
        var1 = _closure1_slot8;
        var2 = var1.Provider;
        var1 = {};
        var6 = {};
        var6['listingsLoaded'] = var8;
        var6['fetchGroupListingsForGuild'] = var7;
        var1['value'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['GroupListingsFetchContextProvider'] = var2;
    return var1;
})();
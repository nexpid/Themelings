// app/modules/opt_in_channels/useBatchUpdateChannelSettings.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function resetStoreState(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot7 = var1;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
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
    var4 = var4.AnalyticsSections;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/opt_in_channels/useBatchUpdateChannelSettings.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBatchUpdateChannelSettings(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 5;
        var4 = var4[var1];
        var1 = undefined;
        var7 = var5.bind(var1)(var4);
        var5 = var7.useStateFromStores;
        var1 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() {
            var3 = _closure1_slot5;
            var2 = var3.getPendingChannelUpdates;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var5.bind(var7)(var4, var1);
        var _closure2_slot1 = var1;
        var5 = _closure1_slot3;
        var7 = var5.useEffect;
        var4 = new Array(1);
        var4[0] = var6;
        var3 = function() {
            var3 = _closure1_slot7;
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            return var1;
        };
        var3 = var7.bind(var5)(var3, var4);
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var1;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 58; continue _fun0001 }
 13:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.updateOptInChannelsBatched;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
 58:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var1, var3);
        var1 = {};
        var4 = var5.useCallback;
        var3 = function(arg1, arg2, arg3) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = arg1;
                var7 = arg2;
                var3 = arg3;
                var4 = _closure1_slot5;
                var1 = var4.isChannelOptedIn;
                var6 = var1.bind(var4)(var5, var7);
                var1 = !var6;
                if(!var1) { _fun0002_ip = 49; continue _fun0002 }
 34:
                var8 = _closure1_slot4;
                var4 = var8.isCollapsed;
                var1 = var4.bind(var8)(var3);
 49:
                if(!var1) { _fun0002_ip = 58; continue _fun0002 }
 52:
                var4 = null;
                var1 = var4 != var3;
 58:
                if(!var1) { _fun0002_ip = 94; continue _fun0002 }
 61:
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 7;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var8.bind(var1)(var4);
                var1 = var4.categoryExpand;
                var1 = var1.bind(var4)(var3);
 94:
                var9 = _closure1_slot0;
                var1 = _closure1_slot2;
                var4 = 8;
                var8 = var1[var4];
                var1 = undefined;
                var9 = var9.bind(var1)(var8);
                var8 = var9.hasNotSetUpChannelOptIn;
                var8 = var8.bind(var9)(var5);
                if(var8) { _fun0002_ip = 196; continue _fun0002 }
 130:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 6;
                var8 = var10[var8];
                var10 = var9.bind(var1)(var8);
                var9 = var10.updateOptInChannelsImmediate;
                var13 = !var6;
                var6 = {};
                var11 = _closure1_slot6;
                var11 = var11.CHANNEL_BROWSER;
                var6['section'] = var11;
                var16 = var10;
                var15 = var5;
                var14 = var7;
                var12 = var6;
                var6 = var16[var9](var15, var14, var13, var12, var11);
                _fun0002_ip = 352; continue _fun0002;
 196:
                if(!(var7 !== var3)) { _fun0002_ip = 277; continue _fun0002 }
 200:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var4];
                var8 = var6.bind(var1)(var3);
                var6 = var8.optIntoAllChannelsForExistingMember;
                var3 = {};
                var9 = global;
                var11 = var9.Set;
                var9 = new Array(1);
                var9[0] = var7;
                var10 = var11.prototype;
                var10 = Object.create(var10, {constructor: {value: var11}});
                var16 = var10;
                var15 = var9;
                var9 = new var16[var11](var15, var14);
                var9 = var9 instanceof Object ? var9 : var10;
                var3['exclude'] = var9;
                var3 = var6.bind(var8)(var5, var3);
                _fun0002_ip = 352; continue _fun0002;
 277:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var4 = var3.bind(var1)(var2);
                var3 = var4.optIntoAllChannelsForExistingMember;
                var2 = {};
                var6 = global;
                var8 = var6.Set;
                var6 = new Array(1);
                var6[0] = var7;
                var7 = var8.prototype;
                var7 = Object.create(var7, {constructor: {value: var8}});
                var16 = var7;
                var15 = var6;
                var6 = new var16[var8](var15, var14);
                var6 = var6 instanceof Object ? var6 : var7;
                var2['include'] = var6;
                var2 = var3.bind(var4)(var5, var2);
 352:
                return var1;
            }
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        var1['onChannelClick'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
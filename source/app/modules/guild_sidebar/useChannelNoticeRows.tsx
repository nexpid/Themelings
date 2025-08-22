// app/modules/guild_sidebar/useChannelNoticeRows.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelListChannelNoticeRow;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MFALevels;
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/useChannelNoticeRows.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useChannelNoticeRows(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var5 = var3.id;
        var _closure2_slot1 = var5;
        var8 = _closure1_slot0;
        var9 = _closure1_slot1;
        var6 = 6;
        var7 = var9[var6];
        var4 = undefined;
        var12 = var8.bind(var4)(var7);
        var11 = var12.useStateFromStores;
        var7 = _closure1_slot3;
        var10 = new Array(1);
        var10[0] = var7;
        var7 = function() {
            var3 = _closure1_slot3;
            var2 = var3.hasProgress;
            var1 = _closure2_slot1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = var11.bind(var12)(var10, var7);
        var _closure2_slot2 = var7;
        var11 = _closure1_slot5;
        var10 = var11.getCurrentUser;
        var13 = var10.bind(var11)();
        var _closure2_slot3 = var13;
        var6 = var9[var6];
        var12 = var8.bind(var4)(var6);
        var11 = var12.useStateFromStores;
        var6 = _closure1_slot4;
        var10 = new Array(1);
        var10[0] = var6;
        var6 = new Array(3);
        var6[0] = var13;
        var3 = var3.mfaLevel;
        var6[1] = var3;
        var6[2] = var5;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot3;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0001_ip = 43; continue _fun0001 }
 16:
                var3 = _closure2_slot0;
                var4 = var3.mfaLevel;
                var3 = _closure1_slot7;
                var3 = var3.ELEVATED;
                var1 = var4 === var3;
 43:
                if(!var1) { _fun0001_ip = 59; continue _fun0001 }
 46:
                var3 = _closure2_slot3;
                var3 = var3.mfaEnabled;
                var1 = !var3;
 59:
                if(!var1) { _fun0001_ip = 84; continue _fun0001 }
 62:
                var4 = _closure1_slot4;
                var3 = var4.hasElevatedPermissions;
                var2 = _closure2_slot1;
                var1 = var3.bind(var4)(var2);
 84:
                return var1;
            }
        };
        var6 = var11.bind(var12)(var10, var3, var6);
        var _closure2_slot4 = var6;
        var3 = 7;
        var3 = var9[var3];
        var4 = var8.bind(var4)(var3);
        var3 = var4.useGuildHasLiveChannelNotice;
        var5 = var3.bind(var4)(var5);
        var _closure2_slot5 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = _closure1_slot6;
                var3 = var1.SPACER;
                var1 = new Array(1);
                var1[0] = var3;
                var4 = _closure2_slot2;
                if(var4) { _fun0002_ip = 60; continue _fun0002 }
 31:
                var4 = _closure2_slot4;
                if(!var4) { _fun0002_ip = 80; continue _fun0002 }
 38:
                var5 = var1.push;
                var4 = _closure1_slot6;
                var4 = var4.MFA_WARNING;
                var4 = var5.bind(var1)(var4);
                _fun0002_ip = 80; continue _fun0002;
 60:
                var5 = var1.push;
                var4 = _closure1_slot6;
                var4 = var4.GUILD_PROGRESS;
                var4 = var5.bind(var1)(var4);
 80:
                var3 = _closure2_slot5;
                if(!var3) { _fun0002_ip = 107; continue _fun0002 }
 87:
                var3 = var1.push;
                var2 = _closure1_slot6;
                var2 = var2.LIVE_CHANNEL_NOTICE;
                var2 = var3.bind(var1)(var2);
 107:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/report_to_mod/hooks/useReportToModHooks.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.useEffect;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/report_to_mod/hooks/useReportToModHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useIsReportToModEnabled(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot0;
                var4 = null;
                if(!(var4 != var2)) { _fun0001_ip = 105; continue _fun0001 }
 13:
                var5 = _closure1_slot4;
                var2 = var5.getGuild;
                var1 = _closure2_slot0;
                var6 = var2.bind(var5)(var1);
                var1 = var4 != var6;
                if(!var1) { _fun0001_ip = 103; continue _fun0001 }
 41:
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 4;
                var2 = var5[var2];
                var5 = undefined;
                var2 = var7.bind(var5)(var2);
                var2 = var2.bind(var5)(var6);
                if(!var2) { _fun0001_ip = 100; continue _fun0001 }
 71:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 5;
                var3 = var8[var3];
                var3 = var7.bind(var5)(var3);
                var3 = var3.bind(var5)(var6);
                var2 = var4 != var3;
 100:
                var1 = var2;
 103:
                return var1;
 105:
                var1 = false;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsReportToModEnabled'] = var4;
    var4 = function useReportToModChannelId(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot0;
                var2 = null;
                var3 = var2 != var3;
                var5 = null;
                if(!var3) { _fun0002_ip = 39; continue _fun0002 }
 18:
                var4 = _closure1_slot4;
                var3 = var4.getGuild;
                var1 = _closure2_slot0;
                var5 = var3.bind(var4)(var1);
 39:
                var3 = var2 == var5;
                var1 = null;
                if(var3) { _fun0002_ip = 93; continue _fun0002 }
 48:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 5;
                var3 = var4[var3];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.bind(var4)(var5);
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0002_ip = 90; continue _fun0002 }
 87:
                var2 = var3;
 90:
                var1 = var2;
 93:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useReportToModChannelId'] = var4;
    var4 = function useIsModeratorReportOrPostChannel(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.isModeratorReportOrPostChannel;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useIsModeratorReportOrPostChannel'] = var4;
    var4 = function useIsModeratorReportPostChannel(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.isModeratorReportPostChannel;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useIsModeratorReportPostChannel'] = var4;
    var4 = function useLoadReportedMessage(arg1) {
        var1 = arg1;
        var5 = var1.messageReference;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 3;
        var4 = var4[var1];
        var1 = undefined;
        var8 = var6.bind(var1)(var4);
        var7 = var8.useStateFromStores;
        var4 = _closure1_slot5;
        var6 = new Array(1);
        var6[0] = var4;
        var4 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0003_ip = 50; continue _fun0003 }
 16:
                var5 = _closure1_slot5;
                var4 = var5.getMessage;
                var2 = _closure2_slot0;
                var3 = var2.channel_id;
                var2 = var2.message_id;
                var1 = var4.bind(var5)(var3, var2);
 50:
                return var1;
            }
        };
        var6 = var7.bind(var8)(var6, var4);
        var _closure2_slot1 = var6;
        var4 = _closure1_slot3;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var5;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = _closure2_slot1;
                var3 = null;
                var1 = var3 == var1;
                if(!var1) { _fun0004_ip = 24; continue _fun0004 }
 16:
                var2 = _closure2_slot0;
                var1 = var3 != var2;
 24:
                if(!var1) { _fun0004_ip = 102; continue _fun0004 }
 27:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchMessages;
                var1 = {};
                var5 = _closure2_slot0;
                var4 = var5.channel_id;
                var1['channelId'] = var4;
                var4 = {};
                var5 = var5.message_id;
                var4['messageId'] = var5;
                var1['jump'] = var4;
                var4 = 10;
                var1['limit'] = var4;
                var1 = var2.bind(var3)(var1);
 102:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var1)(var2, var3);
        return var1;
    };
    var3['useLoadReportedMessage'] = var4;
    var2 = function loadOriginalAuthorFromSnapshot(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var2 = null;
            var5 = var2 == var3;
            var1 = undefined;
            var4 = undefined;
            if(var5) { _fun0005_ip = 58; continue _fun0005 }
 16:
            var5 = var3.messageSnapshots;
            var3 = 0;
            var3 = var5[var3];
            var5 = var2 == var3;
            var4 = undefined;
            if(var5) { _fun0005_ip = 58; continue _fun0005 }
 37:
            var3 = var3.moderatorReport;
            var5 = var2 == var3;
            var4 = undefined;
            if(var5) { _fun0005_ip = 58; continue _fun0005 }
 52:
            var4 = var3.reported_user_id;
 58:
            if(!(var2 != var4)) { _fun0005_ip = 96; continue _fun0005 }
 62:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 8;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.getUser;
            var2 = var2.bind(var3)(var4);
 96:
            return var1;
        }
    };
    var3['loadOriginalAuthorFromSnapshot'] = var2;
    return var1;
})();
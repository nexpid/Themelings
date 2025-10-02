// app/modules/messages/useAllowedChatOverlays.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.ChatOverlays;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityPanelModes;
    var4 = {};
    var8 = var9.NEW_MESSAGES;
    var10 = new Array(3);
    var10[0] = var8;
    var8 = var9.OPT_IN_CHANNEL;
    var10[1] = var8;
    var8 = var9.SUMMARIES;
    var10[2] = var8;
    var8 = 'no_text_activity';
    var4[var8] = var10;
    var10 = var7.DISCONNECTED;
    var11 = var9.NEW_MESSAGES;
    var8 = new Array(3);
    var8[0] = var11;
    var11 = var9.OPT_IN_CHANNEL;
    var8[1] = var11;
    var11 = var9.SUMMARIES;
    var8[2] = var11;
    var4[var10] = var8;
    var10 = var7.LAUNCHING_WITH_ORIENTATION_CHANGE;
    var11 = var9.NEW_MESSAGES;
    var8 = new Array(3);
    var8[0] = var11;
    var11 = var9.OPT_IN_CHANNEL;
    var8[1] = var11;
    var11 = var9.SUMMARIES;
    var8[2] = var11;
    var4[var10] = var8;
    var10 = var7.PANEL;
    var8 = new Array(0);
    var4[var10] = var8;
    var10 = var7.PIP;
    var11 = var9.NEW_MESSAGES;
    var8 = new Array(3);
    var8[0] = var11;
    var11 = var9.OPT_IN_CHANNEL;
    var8[1] = var11;
    var11 = var9.SUMMARIES;
    var8[2] = var11;
    var4[var10] = var8;
    var8 = var7.ACTIVITY_POPOUT_WINDOW;
    var10 = var9.NEW_MESSAGES;
    var7 = new Array(3);
    var7[0] = var10;
    var10 = var9.OPT_IN_CHANNEL;
    var7[1] = var10;
    var9 = var9.SUMMARIES;
    var7[2] = var9;
    var4[var8] = var7;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/useAllowedChatOverlays.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAllowedChatOverlays() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 4;
            var1 = var7[var4];
            var6 = undefined;
            var11 = var5.bind(var6)(var1);
            var9 = var11.useStateFromStores;
            var10 = _closure1_slot3;
            var8 = new Array(1);
            var8[0] = var10;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getCurrentEmbeddedActivity;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var9.bind(var11)(var8, var1);
            var4 = var7[var4];
            var9 = var5.bind(var6)(var4);
            var8 = var9.useStateFromStores;
            var4 = new Array(1);
            var4[0] = var10;
            var3 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getActivityPanelMode;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var8.bind(var9)(var4, var3);
            var4 = 5;
            var4 = var7[var4];
            var7 = var5.bind(var6)(var4);
            var5 = var7.getEmbeddedActivityLocationChannelId;
            var4 = null;
            var8 = var4 == var1;
            var4 = undefined;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var1.location;
case 2:
            var5 = var5.bind(var7)(var4);
            if(!(var6 !== var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var4 = var4.bind(var6)(var1);
            var1 = _closure1_slot4;
            var1 = var4.bind(var6)(var5, var1);
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var1 = _closure1_slot5;
            var1 = var1[var3];
            _fun0001_ip = 7; continue _fun0001;
case 4:
            var2 = _closure1_slot5;
            var1 = var2.no_text_activity;
case 7:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
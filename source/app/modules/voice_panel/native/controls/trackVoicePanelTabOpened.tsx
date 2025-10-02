// app/modules/voice_panel/native/controls/trackVoicePanelTabOpened.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot3 = var2;
    var2 = {};
    var5 = 'store';
    var2['STORE'] = var5;
    var5 = 'gesture';
    var2['GESTURE'] = var5;
    var5 = 'prejoin button';
    var2['PREJOIN_BUTTON'] = var5;
    var5 = 'connected button';
    var2['CONNECTED_BUTTON'] = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/controls/trackVoicePanelTabOpened.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function trackVoicePanelTabOpened(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot2;
            var1 = var3.hasUnread;
            var6 = var1.bind(var3)(var4);
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot2;
            var1 = var3.getMentionCount;
            var3 = var1.bind(var3)(var4);
            var1 = 0;
            var6 = var3 > var1;
case 2:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot3;
            var3 = var2.VOICE_PANEL_TAB_OPENED;
            var2 = {};
            var7 = arg2;
            var2['tab'] = var7;
            var7 = arg3;
            var2['source'] = var7;
            var2['is_chat_badged'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['VoicePanelTabAnalyticsSources'] = var2;
    return var1;
})();
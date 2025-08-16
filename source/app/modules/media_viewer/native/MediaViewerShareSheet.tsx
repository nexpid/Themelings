// app/modules/media_viewer/native/MediaViewerShareSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot3 = var7;
    var4 = var4.AnalyticsSections;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/MediaViewerShareSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function showShareActionSheetForSource(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.videoURI;
            var2 = null;
            if(!(var2 == var3)) { _fun0001_ip = 32; continue _fun0001 }
 15:
            var3 = var1.sourceURI;
            if(!(var2 == var3)) { _fun0001_ip = 30; continue _fun0001 }
 25:
            var3 = var1.uri;
 30:
            _fun0001_ip = 38; continue _fun0001;
 32:
            var3 = var1.videoURI;
 38:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 1;
            var4 = var5[var1];
            var1 = undefined;
            var4 = var7.bind(var1)(var4);
            var6 = var4.useMediaViewerSessionManager;
            var4 = var6.getState;
            var6 = var4.bind(var6)();
            var4 = 2;
            var4 = var5[var4];
            var8 = var7.bind(var1)(var4);
            var7 = var8.showShareActionSheet;
            var4 = {};
            var4['url'] = var3;
            var3 = _closure1_slot4;
            var3 = var3.MEDIA_VIEWER;
            var3 = var7.bind(var8)(var4, var3);
            var4 = _closure1_slot1;
            var3 = 3;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot3;
            var3 = var2.MEDIA_VIEWER_SHARE_BUTTON_TAPPED;
            var2 = {};
            var7 = var6.guildId;
            var2['guild_id'] = var7;
            var7 = var6.channelId;
            var2['channel_id'] = var7;
            var6 = var6.channelType;
            var2['channel_type'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
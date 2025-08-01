// app/modules/media_viewer/native/components/showMediaMessagePreviewActionSheet.tsx
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
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/showMediaMessagePreviewActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function showMediaMessagePreviewActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var5 = var2.channelId;
            var1 = var2.closeMediaModal;
            var7 = var2.message;
            var4 = _closure1_slot3;
            var2 = var4.getChannel;
            var8 = var2.bind(var4)(var5);
            var2 = null;
            if(!(var2 != var8)) { _fun0001_ip = 176; continue _fun0001 }
 45:
            if(!(var2 != var7)) { _fun0001_ip = 176; continue _fun0001 }
 52:
            var6 = _closure1_slot4;
            var5 = var6.getUser;
            var4 = var7.author;
            var4 = var4.id;
            var6 = var5.bind(var6)(var4);
            if(!(var2 != var6)) { _fun0001_ip = 176; continue _fun0001 }
 82:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var4 = 2;
            var4 = var2[var4];
            var10 = undefined;
            var5 = var5.bind(var10)(var4);
            var4 = var5.openLazy;
            var9 = _closure1_slot0;
            var3 = 4;
            var3 = var2[var3];
            var9 = var9.bind(var10)(var3);
            var3 = 3;
            var3 = var2[var3];
            var2 = var2.paths;
            var3 = var9.bind(var10)(var3, var2);
            var2 = {};
            var2['channel'] = var8;
            var2['message'] = var7;
            var2['user'] = var6;
            var2['closeMediaModal'] = var1;
            var1 = 'MediaMessagePreviewActionSheet';
            var1 = var4.bind(var5)(var3, var1, var2);
 176:
            var1 = undefined;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
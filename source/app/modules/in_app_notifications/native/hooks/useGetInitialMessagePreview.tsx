// app/modules/in_app_notifications/native/hooks/useGetInitialMessagePreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageSnapshotRecord;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/hooks/useGetInitialMessagePreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGetInitialMessagePreview(arg1) {
        var2 = arg1;
        var5 = var2.message;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var6 = _closure1_slot3;
                var8 = _closure2_slot0;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var9 = var5;
                var1 = new var9[var6](var8, var7);
                var1 = var1 instanceof Object ? var1 : var5;
                var5 = new Array(0);
                var1['attachments'] = var5;
                var5 = new Array(0);
                var1['stickerItems'] = var5;
                var5 = var1.embeds;
                var6 = var5.length;
                var5 = 0;
                if(!(var6 > var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var7 = var1.embeds;
                var6 = var7.filter;
                var5 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.image;
                        var3 = null;
                        var1 = var3 == var1;
                        if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var2 = var2.thumbnail;
                        var1 = var3 == var2;
case 4:
                        return var1;
                    }
                };
                var5 = var6.bind(var7)(var5);
                var1['embeds'] = var5;
case 2:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 2;
                var4 = var5[var4];
                var5 = undefined;
                var4 = var6.bind(var5)(var4);
                var3 = _closure2_slot0;
                var3 = var4.bind(var5)(var3);
                if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var4 = var1.messageSnapshots;
                var3 = var4.map;
                var2 = function(arg1) {
                    var3 = _closure1_slot4;
                    var1 = {};
                    var2 = arg1;
                    var5 = var2.message;
                    var4 = var5.merge;
                    var2 = {};
                    var6 = new Array(0);
                    var2['attachments'] = var6;
                    var6 = new Array(0);
                    var2['embeds'] = var6;
                    var6 = new Array(0);
                    var2['stickerItems'] = var6;
                    var2 = var4.bind(var5)(var2);
                    var1['message'] = var2;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var8 = var2;
                    var7 = var1;
                    var1 = new var8[var3](var7, var6);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var1['messageSnapshots'] = var2;
case 6:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useGetInitialMessagePreview'] = var2;
    return var1;
})();
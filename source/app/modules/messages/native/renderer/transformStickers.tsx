// app/modules/messages/native/renderer/transformStickers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/transformStickers.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function transformStickers(arg1) {
        var2 = arg1;
        var4 = var2.message;
        var3 = var2.animateStickersSetting;
        var _closure2_slot0 = var3;
        var2 = var2.isUserInteracting;
        var _closure2_slot1 = var2;
        var5 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 0;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var2 = var3.getMessageStickers;
        var3 = var2.bind(var3)(var4);
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var10 = arg1;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var9 = 0;
                var1 = var1[var9];
                var6 = undefined;
                var5 = var3.bind(var6)(var1);
                var4 = var5.shouldAnimateSticker;
                var3 = _closure2_slot0;
                var1 = _closure2_slot1;
                var4 = var4.bind(var5)(var3, var1);
                var1 = {};
                var13 = var1;
                var12 = var10;
                var3 = copyDataProperties(var13, var12);
                var3 = var10.id;
                var7 = null;
                var11 = var7 != var3;
                var5 = '';
                var8 = var5;
                if(!var11) { _fun0001_ip = 86; continue _fun0001 }
 83:
                var8 = var3;
 86:
                var3 = 'asset';
                var1[var3] = var8;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var9];
                var9 = var8.bind(var6)(var3);
                var8 = var9.getStickerAssetUrl;
                var3 = {};
                var11 = !var4;
                var3['isPreview'] = var11;
                var3 = var8.bind(var9)(var10, var3);
                var7 = var7 != var3;
                if(!var7) { _fun0001_ip = 144; continue _fun0001 }
 141:
                var5 = var3;
 144:
                var3 = 'url';
                var1[var3] = var5;
                var5 = 160;
                var3 = 'width';
                var1[var3] = var5;
                var3 = 'height';
                var1[var3] = var5;
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 1;
                var3 = var7[var3];
                var3 = var5.bind(var6)(var3);
                var3 = var3.NativeLottieRenderMode;
                if(var4) { _fun0001_ip = 211; continue _fun0001 }
 203:
                var4 = var3.STILL;
                _fun0001_ip = 217; continue _fun0001;
 211:
                var4 = var3.LOOP;
 217:
                var3 = 'renderMode';
                var1[var3] = var4;
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 2;
                var3 = var7[var2];
                var3 = var5.bind(var6)(var3);
                var9 = var3.intl;
                var8 = var9.formatToPlainString;
                var3 = var7[var2];
                var3 = var5.bind(var6)(var3);
                var3 = var3.t;
                var4 = var3.rk6pOz;
                var3 = {};
                var10 = var10.name;
                var3['stickerName'] = var10;
                var4 = var8.bind(var9)(var4, var3);
                var3 = 'accessibilityLabel';
                var1[var3] = var4;
                var3 = var7[var2];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.GCErub;
                var3 = var3.bind(var4)(var2);
                var2 = 'accessibilityHint';
                var1[var2] = var3;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
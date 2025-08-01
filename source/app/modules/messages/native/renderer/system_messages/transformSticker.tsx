// app/modules/messages/native/renderer/system_messages/transformSticker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function transform(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var10 = arg1;
            var4 = arg2;
            var1 = {};
            var13 = var1;
            var12 = var10;
            var2 = copyDataProperties(var13, var12);
            var2 = var10.id;
            var7 = null;
            var6 = var7 != var2;
            var5 = '';
            var3 = var5;
            if(!var6) { _fun0001_ip = 42; continue _fun0001 }
 39:
            var3 = var2;
 42:
            var2 = 'asset';
            var1[var2] = var3;
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 2;
            var3 = var6[var3];
            var6 = undefined;
            var9 = var8.bind(var6)(var3);
            var8 = var9.getStickerAssetUrl;
            var3 = {};
            var11 = !var4;
            var3['isPreview'] = var11;
            var3 = var8.bind(var9)(var10, var3);
            var7 = var7 != var3;
            if(!var7) { _fun0001_ip = 108; continue _fun0001 }
 105:
            var5 = var3;
 108:
            var3 = 'url';
            var1[var3] = var5;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 3;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.NativeLottieRenderMode;
            if(var4) { _fun0001_ip = 154; continue _fun0001 }
 146:
            var4 = var3.STILL;
            _fun0001_ip = 160; continue _fun0001;
 154:
            var4 = var3.LOOP;
 160:
            var3 = 'renderMode';
            var1[var3] = var4;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 4;
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
    var _closure1_slot4 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StickerAnimationSettings;
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/transformSticker.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useTransformedSticker(arg1) {
        var2 = arg1;
        var5 = var2.sticker;
        var _closure2_slot0 = var5;
        var6 = var2.isStickerReplyEnabled;
        var _closure2_slot1 = var6;
        var7 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 5;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var7.bind(var3)(var4);
        var4 = var3.AnimateStickers;
        var3 = var4.useSetting;
        var4 = var3.bind(var4)();
        var3 = _closure1_slot3;
        var3 = var3.ALWAYS_ANIMATE;
        var7 = var4 === var3;
        var _closure2_slot2 = var7;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot1;
                var5 = undefined;
                var1 = undefined;
                if(!var3) { _fun0002_ip = 35; continue _fun0002 }
 14:
                var4 = _closure1_slot4;
                var3 = _closure2_slot0;
                var2 = _closure2_slot2;
                var1 = var4.bind(var5)(var3, var2);
 35:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var2 = function transformSticker(arg1) {
        var4 = _closure1_slot4;
        var5 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 5;
        var2 = var3[var2];
        var3 = undefined;
        var2 = var5.bind(var3)(var2);
        var5 = var2.AnimateStickers;
        var2 = var5.getSetting;
        var5 = var2.bind(var5)();
        var1 = _closure1_slot3;
        var1 = var1.ALWAYS_ANIMATE;
        var2 = arg1;
        var1 = var5 === var1;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['transformSticker'] = var2;
    return var1;
})();
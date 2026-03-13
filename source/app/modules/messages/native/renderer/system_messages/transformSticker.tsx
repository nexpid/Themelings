// app/modules/messages/native/renderer/system_messages/transformSticker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function transform(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var11 = arg1;
            var4 = arg2;
            var1 = {};
            var13 = var1;
            var12 = var11;
            var2 = copyDataProperties(var13, var12);
            var2 = var11.id;
            var7 = null;
            var6 = var7 != var2;
            var5 = '';
            var3 = var5;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2;
case 2:
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
            var10 = !var4;
            var3['isPreview'] = var10;
            var3 = var8.bind(var9)(var11, var3);
            var7 = var7 != var3;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var3;
case 4:
            var3 = 'url';
            var1[var3] = var5;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 3;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.NativeLottieRenderMode;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var3.STILL;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var4 = var3.LOOP;
case 8:
            var3 = 'renderMode';
            var1[var3] = var4;
            var9 = _closure1_slot0;
            var3 = _closure1_slot1;
            var7 = 4;
            var4 = var3[var7];
            var4 = var9.bind(var6)(var4);
            var8 = var4.intl;
            var4 = arg3;
            if(var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var10 = var8.formatToPlainString;
            var4 = var3[var7];
            var4 = var9.bind(var6)(var4);
            var4 = var4.t;
            var5 = var4.rk6pOw;
            var4 = {};
            var11 = var11.name;
            var4['stickerName'] = var11;
            var4 = var10.bind(var8)(var5, var4);
            _fun0001_ip = 11; continue _fun0001;
case 9:
            var5 = var8.string;
            var3 = var3[var7];
            var3 = var9.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.fT+Yjp;
            var4 = var5.bind(var8)(var3);
case 11:
            var3 = 'accessibilityLabel';
            var1[var3] = var4;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var3 = var2[var7];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var2[var7];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.GCEruV;
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
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/transformSticker.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useTransformedSticker(arg1) {
        var2 = arg1;
        var5 = var2.sticker;
        var _closure2_slot0 = var5;
        var7 = var2.isStickerReplyEnabled;
        var _closure2_slot1 = var7;
        var6 = _closure1_slot0;
        var9 = _closure1_slot1;
        var3 = 5;
        var3 = var9[var3];
        var4 = undefined;
        var3 = var6.bind(var4)(var3);
        var8 = var3.AnimateStickers;
        var3 = var8.useSetting;
        var8 = var3.bind(var8)();
        var3 = _closure1_slot3;
        var3 = var3.ALWAYS_ANIMATE;
        var8 = var8 === var3;
        var _closure2_slot2 = var8;
        var3 = 6;
        var3 = var9[var3];
        var4 = var6.bind(var4)(var3);
        var3 = var4.shouldSkipAccessibilityLabels;
        var6 = var3.bind(var4)();
        var _closure2_slot3 = var6;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot1;
                var6 = undefined;
                var1 = undefined;
                if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var5 = _closure1_slot4;
                var4 = _closure2_slot0;
                var3 = _closure2_slot2;
                var2 = _closure2_slot3;
                var1 = var5.bind(var6)(var4, var3, var2);
case 12:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var2 = function transformSticker(arg1) {
        var5 = _closure1_slot4;
        var3 = _closure1_slot0;
        var7 = _closure1_slot1;
        var2 = 5;
        var2 = var7[var2];
        var4 = undefined;
        var2 = var3.bind(var4)(var2);
        var6 = var2.AnimateStickers;
        var2 = var6.getSetting;
        var6 = var2.bind(var6)();
        var1 = _closure1_slot3;
        var1 = var1.ALWAYS_ANIMATE;
        var2 = 6;
        var2 = var7[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.shouldSkipAccessibilityLabels;
        var3 = var2.bind(var3)();
        var2 = arg1;
        var1 = var6 === var1;
        var1 = var5.bind(var4)(var2, var1, var3);
        return var1;
    };
    var3['transformSticker'] = var2;
    return var1;
})();
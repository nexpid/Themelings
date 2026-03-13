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
    var1 = 4;
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
        var6 = _closure1_slot1;
        var2 = 0;
        var2 = var6[var2];
        var3 = undefined;
        var7 = var5.bind(var3)(var2);
        var2 = var7.shouldSkipAccessibilityLabels;
        var2 = var2.bind(var7)();
        var _closure2_slot2 = var2;
        var2 = 1;
        var2 = var6[var2];
        var3 = var5.bind(var3)(var2);
        var2 = var3.getMessageStickers;
        var3 = var2.bind(var3)(var4);
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var11 = arg1;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var10 = 1;
                var1 = var1[var10];
                var6 = undefined;
                var7 = var3.bind(var6)(var1);
                var5 = var7.shouldAnimateSticker;
                var4 = _closure2_slot0;
                var1 = _closure2_slot1;
                var5 = var5.bind(var7)(var4, var1);
                var1 = {};
                var14 = var1;
                var13 = var11;
                var4 = copyDataProperties(var14, var13);
                var4 = var11.id;
                var8 = null;
                var12 = var8 != var4;
                var7 = '';
                var9 = var7;
                if(!var12) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var9 = var4;
case 2:
                var4 = 'asset';
                var1[var4] = var9;
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var10];
                var10 = var9.bind(var6)(var4);
                var9 = var10.getStickerAssetUrl;
                var4 = {};
                var12 = !var5;
                var4['isPreview'] = var12;
                var4 = var9.bind(var10)(var11, var4);
                var8 = var8 != var4;
                if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var7 = var4;
case 4:
                var4 = 'url';
                var1[var4] = var7;
                var7 = 160;
                var4 = 'width';
                var1[var4] = var7;
                var4 = 'height';
                var1[var4] = var7;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 2;
                var4 = var8[var4];
                var4 = var7.bind(var6)(var4);
                var4 = var4.NativeLottieRenderMode;
                if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var5 = var4.STILL;
                _fun0001_ip = 8; continue _fun0001;
case 6:
                var5 = var4.LOOP;
case 8:
                var4 = 'renderMode';
                var1[var4] = var5;
                var4 = _closure2_slot2;
                var9 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 3;
                var5 = var3[var7];
                var5 = var9.bind(var6)(var5);
                var8 = var5.intl;
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
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
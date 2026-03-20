// app/modules/display_name_styles/hooks/useDisplayNameStylesHandleApply.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/hooks/useDisplayNameStylesHandleApply.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useDisplayNameStylesHandleApply(arg1) {
        var2 = arg1;
        var12 = var2.hasChanges;
        var _closure2_slot0 = var12;
        var11 = var2.selectedFontId;
        var _closure2_slot1 = var11;
        var10 = var2.selectedEffectId;
        var _closure2_slot2 = var10;
        var9 = var2.selectedColors;
        var _closure2_slot3 = var9;
        var8 = var2.defaultColor;
        var _closure2_slot4 = var8;
        var6 = var2.guildId;
        var _closure2_slot5 = var6;
        var5 = var2.isTryItOut;
        var _closure2_slot6 = var5;
        var7 = var2.onClose;
        var _closure2_slot7 = var7;
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(8);
        var2[0] = var12;
        var2[1] = var11;
        var2[2] = var10;
        var2[3] = var9;
        var2[4] = var8;
        var2[5] = var7;
        var2[6] = var6;
        var2[7] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot3;
                var5 = _closure2_slot2;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var9 = 2;
                var4 = var2[var9];
                var2 = undefined;
                var4 = var6.bind(var2)(var4);
                var4 = var4.DisplayNameEffect;
                var4 = var4.SOLID;
                var4 = var5 === var4;
                if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = _closure2_slot3;
                var6 = var5.length;
                var5 = 0;
                var4 = var6 > var5;
case 4:
                if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var6 = _closure2_slot3;
                var5 = 0;
                var6 = var6[var5];
                var5 = _closure2_slot4;
                var4 = var6 === var5;
case 6:
                if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var3 = new Array(0);
case 8:
                var5 = {};
                var4 = _closure2_slot1;
                var5['fontId'] = var4;
                var4 = _closure2_slot2;
                var5['effectId'] = var4;
                var5['colors'] = var3;
                var3 = _closure2_slot6;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var3 = 4;
                var3 = var6[var3];
                var10 = var4.bind(var2)(var3);
                var7 = var10.setPendingChanges;
                var3 = {};
                var11 = _closure2_slot5;
                var3['guildId'] = var11;
                var3['displayNameStyles'] = var5;
                var3 = var7.bind(var10)(var3);
                _fun0001_ip = 12; continue _fun0001;
case 10:
                var3 = 3;
                var3 = var6[var3];
                var4 = var4.bind(var2)(var3);
                var3 = var4.setTryItOutDisplayNameStyles;
                var3 = var3.bind(var4)(var5);
case 12:
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 5;
                var3 = var7[var3];
                var6 = var4.bind(var2)(var3);
                var5 = var6.track;
                var3 = _closure1_slot4;
                var4 = var3.DISPLAY_NAME_STYLES_APPLIED;
                var3 = {};
                var8 = _closure1_slot0;
                var10 = 6;
                var10 = var7[var10];
                var10 = var8.bind(var2)(var10);
                var11 = var10.DisplayNameFont;
                var10 = _closure2_slot1;
                var10 = var11[var10];
                var3['font_name'] = var10;
                var7 = var7[var9];
                var7 = var8.bind(var2)(var7);
                var8 = var7.DisplayNameEffect;
                var7 = _closure2_slot2;
                var7 = var8[var7];
                var3['effect_name'] = var7;
                var7 = _closure2_slot3;
                var3['colors'] = var7;
                var3 = var5.bind(var6)(var4, var3);
                var4 = _closure2_slot7;
                var3 = null;
                if(!(var3 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 13:
                var1 = _closure2_slot7;
                var1 = var1.bind(var2)();
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useDisplayNameStylesHandleApply'] = var2;
    return var1;
})();
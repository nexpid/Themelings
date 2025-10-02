// app/modules/explicit_media_redaction/native/ExplicitMediaSettingsActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var9['marginTop'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['paddingHorizontal'] = var10;
    var4['content'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/explicit_media_redaction/native/ExplicitMediaSettingsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ExplicitMediaSettingsActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var17 = var1.title;
            var7 = var1.subtitle;
            var13 = var1.options;
            var _closure2_slot0 = var13;
            var14 = var1.currentValue;
            var1 = _closure1_slot7;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var13;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var3 = _closure2_slot0;
                    var2 = var3.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.value;
                        var1 = _closure3_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var2.onPress;
                    var1 = var1.bind(var2)();
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot6;
            var10 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 6;
            var1 = var16[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var5 = true;
            var1['startExpanded'] = var5;
            var8 = _closure1_slot5;
            var5 = 7;
            var5 = var16[var5];
            var5 = var10.bind(var4)(var5);
            var6 = var5.BottomSheetTitleHeader;
            var5 = {};
            var5['title'] = var17;
            var5['subtitle'] = var7;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var9.content;
            var6['style'] = var9;
            var9 = 8;
            var9 = var16[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.TableRadioGroup;
            var9 = {};
            var16 = null;
            if(!(var16 == var14)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var15 = 9;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.ExplicitContentRedaction;
            var14 = var15.SHOW;
case 4:
            var9['defaultValue'] = var14;
            var9['onChange'] = var12;
            var12 = var13.map;
            var11 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot5;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.TableRadioRow;
                var2 = {};
                var6 = var1.label;
                var2['label'] = var6;
                var6 = var1.value;
                var2['value'] = var6;
                var1 = var1.value;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var11 = var12.bind(var13)(var11);
            var9['children'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
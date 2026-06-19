// app/components_native/channel_settings/ChannelSettingsPermissionsOverrideCheckbox.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function getAccessibilityLabel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 5;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var2 = var2.DENY;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ALLOW;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.PASSTHROUGH;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            return var5;
case 6:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 6;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.ujC3ZS;
            var2 = var3.bind(var4)(var2);
            return var2;
case 4:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 6;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.RzDfSk;
            var2 = var3.bind(var4)(var2);
            return var2;
case 2:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1["6639O5"];
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function getIcon(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var7 = arg3;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 5;
            var1 = var1[var8];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var1.DENY;
            if(!(var1 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ALLOW;
            if(!(var1 !== var2)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var3.bind(var4)(var1);
            var1 = var1.PASSTHROUGH;
            if(!(var1 !== var2)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = null;
            return var1;
case 12:
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 9;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.SlashIcon;
            var1 = {};
            var8 = 'sm';
            var1['size'] = var8;
            var8 = var7.icon;
            var1['style'] = var8;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 3;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.colors;
            if(var5) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var8 = var9.INTERACTIVE_TEXT_DEFAULT;
            _fun0002_ip = 16; continue _fun0002;
case 14:
            var8 = var9.WHITE;
case 16:
            var1['color'] = var8;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 10:
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 8;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.CheckmarkLargeBoldIcon;
            var1 = {};
            var8 = 'sm';
            var1['size'] = var8;
            var8 = var7.icon;
            var1['style'] = var8;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 3;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.colors;
            if(var5) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var8 = var9.ICON_FEEDBACK_POSITIVE;
            _fun0002_ip = 19; continue _fun0002;
case 17:
            var8 = var9.WHITE;
case 19:
            var1['color'] = var8;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 8:
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 7;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.DenyIcon;
            var1 = {};
            var8 = 'sm';
            var1['size'] = var8;
            var7 = var7.icon;
            var1['style'] = var7;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 3;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.colors;
            if(var5) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var5 = var6.ICON_FEEDBACK_CRITICAL;
            _fun0002_ip = 22; continue _fun0002;
case 20:
            var5 = var6.WHITE;
case 22:
            var1['color'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function getPressableStyleOverrides(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var1 = arg2;
            var2 = arg3;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 5;
            var6 = var3[var7];
            var3 = undefined;
            var6 = var8.bind(var3)(var6);
            var6 = var6.DENY;
            if(!(var6 !== var5)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var7];
            var6 = var8.bind(var3)(var6);
            var6 = var6.ALLOW;
            if(!(var6 !== var5)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var3)(var4);
            var4 = var4.PASSTHROUGH;
            if(!(var4 !== var5)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            return var3;
case 27:
            if(var1) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var3 = var2.passthroughActive;
            _fun0003_ip = 31; continue _fun0003;
case 29:
            var3 = var2.passthroughSelected;
case 31:
            return var3;
case 25:
            if(var1) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var3 = var2.allowActive;
            _fun0003_ip = 34; continue _fun0003;
case 32:
            var3 = var2.allowSelected;
case 34:
            return var3;
case 23:
            if(var1) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var1 = var2.denyActive;
            _fun0003_ip = 37; continue _fun0003;
case 35:
            var1 = var2.denySelected;
case 37:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function OverrideOption(arg1) {
        var1 = arg1;
        var8 = var1.type;
        var _closure2_slot0 = var8;
        var7 = var1.selected;
        var _closure2_slot1 = var7;
        var6 = var1.styles;
        var _closure2_slot2 = var6;
        var9 = var1.onPress;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 10;
        var1 = var3[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = var3.useRadioA11yNative;
        var1 = {};
        var1['selected'] = var7;
        var1 = var2.bind(var3)(var1);
        var12 = var1.accessibilityRole;
        var11 = var1.accessibilityState;
        var3 = _closure1_slot5;
        var2 = _closure1_slot3;
        var1 = {};
        var1['accessibilityRole'] = var12;
        var12 = _closure1_slot8;
        var12 = var12.bind(var4)(var8);
        var1['accessibilityLabel'] = var12;
        var1['accessibilityState'] = var11;
        var10 = function style(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var1 = var1.pressed;
                var3 = _closure2_slot1;
                if(var3) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                if(var1) { _fun0004_ip = 38; continue _fun0004 }
case 40:
                var1 = _closure2_slot2;
                var1 = var1.iconWrapper;
                _fun0004_ip = 41; continue _fun0004;
case 38:
                var6 = _closure1_slot10;
                var5 = _closure2_slot0;
                var4 = _closure2_slot1;
                var3 = _closure2_slot2;
                var2 = undefined;
                var4 = var6.bind(var2)(var5, var4, var3);
                var2 = new Array(2);
                var2[0] = var4;
                var3 = var3.iconWrapper;
                var2[1] = var3;
                var1 = var2;
case 41:
                return var1;
            }
        };
        var1['style'] = var10;
        var1['onPress'] = var9;
        var5 = _closure1_slot9;
        var5 = var5.bind(var4)(var8, var7, var6);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var1;
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Pressable;
    var _closure1_slot3 = var8;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var14 = 2;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var11 = 3;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var4 = var4.space;
    var13 = var4.PX_4;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var4 = var4.radii;
    var15 = var4.md;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOWEST;
    var10['backgroundColor'] = var16;
    var10['borderRadius'] = var15;
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.space;
    var16 = var16.PX_32;
    var10['height'] = var16;
    var10['paddingVertical'] = var13;
    var16 = var13 / var14;
    var10['paddingHorizontal'] = var16;
    var16 = 'row';
    var10['flexDirection'] = var16;
    var4['ternaryCheckBox'] = var10;
    var10 = {};
    var15 = var15 - var13;
    var10['borderRadius'] = var15;
    var13 = var13 / var14;
    var10['marginHorizontal'] = var13;
    var13 = 'center';
    var10['justifyContent'] = var13;
    var13 = '100%';
    var10['height'] = var13;
    var4['iconWrapper'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var10['marginHorizontal'] = var13;
    var4['icon'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_FEEDBACK_CRITICAL;
    var10['backgroundColor'] = var13;
    var4['denyActive'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.ICON_FEEDBACK_CRITICAL;
    var10['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var13 = var13 - var14;
    var10['borderRadius'] = var13;
    var4['denySelected'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_FEEDBACK_POSITIVE;
    var10['backgroundColor'] = var13;
    var4['allowActive'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.ICON_FEEDBACK_POSITIVE;
    var10['backgroundColor'] = var13;
    var4['allowSelected'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_BACKGROUND_SELECTED;
    var10['backgroundColor'] = var13;
    var4['passthroughSelected'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_BACKGROUND_HOVER;
    var10['backgroundColor'] = var11;
    var4['passthroughActive'] = var10;
    var10 = {};
    var11 = 0.3;
    var10['opacity'] = var11;
    var4['disabled'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var8 = 5;
    var4 = var6[var8];
    var4 = var5.bind(var1)(var4);
    var9 = var4.DENY;
    var4 = new Array(3);
    var4[0] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.PASSTHROUGH;
    var4[1] = var9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ALLOW;
    var4[2] = var8;
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function ChannelSettingsPermissionsOverrideCheckbox(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var2 = var1.value;
            var _closure2_slot0 = var2;
            var8 = var1.disabled;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var8 = false;
case 42:
            var1 = var1.onValueChange;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var4;
            var1 = _closure1_slot6;
            var10 = var1.bind(var4)();
            _closure2_slot2 = var10;
            var3 = _closure1_slot5;
            var2 = _closure1_slot4;
            var1 = {};
            var9 = var10.ternaryCheckBox;
            var7 = new Array(2);
            var7[0] = var9;
            var9 = var8;
            if(!var9) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var9 = var10.disabled;
case 44:
            var7[1] = var9;
            var1['style'] = var7;
            var7 = 'auto';
            if(!var8) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var7 = 'none';
case 46:
            var1['pointerEvents'] = var7;
            var7 = 'radiogroup';
            var1['accessibilityRole'] = var7;
            var7 = _closure1_slot7;
            var6 = var7.map;
            var5 = function(arg1, arg2) {
                var7 = arg1;
                var _closure3_slot0 = var7;
                var5 = _closure1_slot5;
                var4 = _closure1_slot11;
                var3 = {};
                var3['type'] = var7;
                var6 = _closure2_slot0;
                var6 = var6 === var7;
                var3['selected'] = var6;
                var2 = _closure2_slot2;
                var3['styles'] = var2;
                var1 = function onPress() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = _closure2_slot1;
                        var2 = null;
                        var2 = var2 != var3;
                        if(!var2) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                        var4 = _closure2_slot0;
                        var3 = _closure3_slot0;
                        var2 = var4 !== var3;
case 48:
                        if(!var2) { _fun0006_ip = 50; continue _fun0006 }
case 38:
                        var3 = _closure2_slot1;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
case 50:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['onPress'] = var1;
                var1 = global;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var2 = 'checkbox-';
                var1 = arg2;
                var2 = var6.bind(var2)(var1);
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/channel_settings/ChannelSettingsPermissionsOverrideCheckbox.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
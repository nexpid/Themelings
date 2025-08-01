// app/components_native/channel_settings/ChannelSettingsPermissionsOverrideCheckbox.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var4.spacing;
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
    var16 = var16.BACKGROUND_TERTIARY;
    var10['backgroundColor'] = var16;
    var10['borderRadius'] = var15;
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.spacing;
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
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10['marginHorizontal'] = var13;
    var4['icon'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INFO_DANGER_BACKGROUND;
    var10['backgroundColor'] = var13;
    var4['denyActive'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INFO_DANGER_FOREGROUND;
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
    var13 = var13.INFO_POSITIVE_BACKGROUND;
    var10['backgroundColor'] = var13;
    var4['allowActive'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INFO_POSITIVE_FOREGROUND;
    var10['backgroundColor'] = var13;
    var4['allowSelected'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MODIFIER_SELECTED;
    var10['backgroundColor'] = var13;
    var4['passthroughSelected'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MODIFIER_HOVER;
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
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.value;
            var _closure2_slot0 = var2;
            var8 = var1.disabled;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0001_ip = 27; continue _fun0001 }
 25:
            var8 = false;
 27:
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
            if(!var9) { _fun0001_ip = 91; continue _fun0001 }
 86:
            var9 = var10.disabled;
 91:
            var7[1] = var9;
            var1['style'] = var7;
            var7 = 'auto';
            if(!var8) { _fun0001_ip = 110; continue _fun0001 }
 106:
            var7 = 'none';
 110:
            var1['pointerEvents'] = var7;
            var7 = 'radiogroup';
            var1['accessibilityRole'] = var7;
            var7 = _closure1_slot7;
            var6 = var7.map;
            var5 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var11 = arg1;
                    var _closure3_slot0 = var11;
                    var5 = _closure1_slot5;
                    var4 = _closure1_slot3;
                    var3 = {};
                    var2 = 'radio';
                    var3['accessibilityRole'] = var2;
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 5;
                    var6 = var2[var7];
                    var2 = undefined;
                    var6 = var8.bind(var2)(var6);
                    var6 = var6.DENY;
                    if(!(var11 !== var6)) { _fun0002_ip = 239; continue _fun0002 }
 65:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var7];
                    var6 = var8.bind(var2)(var6);
                    var6 = var6.ALLOW;
                    if(!(var11 !== var6)) { _fun0002_ip = 180; continue _fun0002 }
 92:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var7];
                    var6 = var8.bind(var2)(var6);
                    var8 = var6.PASSTHROUGH;
                    var6 = undefined;
                    if(!(var11 === var8)) { _fun0002_ip = 178; continue _fun0002 }
 121:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var8 = 6;
                    var9 = var14[var8];
                    var9 = var13.bind(var2)(var9);
                    var12 = var9.intl;
                    var9 = var12.string;
                    var8 = var14[var8];
                    var8 = var13.bind(var2)(var8);
                    var8 = var8.t;
                    var8 = var8.ujC3ZW;
                    var6 = var9.bind(var12)(var8);
 178:
                    _fun0002_ip = 237; continue _fun0002;
 180:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var8 = 6;
                    var9 = var14[var8];
                    var9 = var13.bind(var2)(var9);
                    var12 = var9.intl;
                    var9 = var12.string;
                    var8 = var14[var8];
                    var8 = var13.bind(var2)(var8);
                    var8 = var8.t;
                    var8 = var8.RzDfSk;
                    var6 = var9.bind(var12)(var8);
 237:
                    _fun0002_ip = 296; continue _fun0002;
 239:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var8 = 6;
                    var9 = var14[var8];
                    var9 = var13.bind(var2)(var9);
                    var12 = var9.intl;
                    var9 = var12.string;
                    var8 = var14[var8];
                    var8 = var13.bind(var2)(var8);
                    var8 = var8.t;
                    var8 = var8.6639Oz;
                    var6 = var9.bind(var12)(var8);
 296:
                    var3['accessibilityLabel'] = var6;
                    var6 = {};
                    var8 = _closure2_slot0;
                    var8 = var8 === var11;
                    var6['selected'] = var8;
                    var3['accessibilityState'] = var6;
                    var6 = function style(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = arg1;
                            var4 = var1.pressed;
                            var5 = _closure2_slot0;
                            var1 = _closure3_slot0;
                            var1 = var5 === var1;
                            if(var1) { _fun0003_ip = 45; continue _fun0003 }
 30:
                            if(var4) { _fun0003_ip = 45; continue _fun0003 }
 33:
                            var4 = _closure2_slot2;
                            var4 = var4.iconWrapper;
                            return var4;
 45:
                            var5 = _closure3_slot0;
                            var8 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var7 = 5;
                            var6 = var3[var7];
                            var3 = undefined;
                            var6 = var8.bind(var3)(var6);
                            var6 = var6.DENY;
                            if(!(var6 !== var5)) { _fun0003_ip = 192; continue _fun0003 }
 84:
                            var8 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var7];
                            var6 = var8.bind(var3)(var6);
                            var6 = var6.ALLOW;
                            if(!(var6 !== var5)) { _fun0003_ip = 166; continue _fun0003 }
 111:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var7];
                            var4 = var6.bind(var3)(var4);
                            var4 = var4.PASSTHROUGH;
                            var3 = undefined;
                            if(!(var4 === var5)) { _fun0003_ip = 216; continue _fun0003 }
 140:
                            var5 = _closure2_slot2;
                            if(var1) { _fun0003_ip = 155; continue _fun0003 }
 147:
                            var4 = var5.passthroughActive;
                            _fun0003_ip = 161; continue _fun0003;
 155:
                            var4 = var5.passthroughSelected;
 161:
                            var3 = var4;
                            _fun0003_ip = 216; continue _fun0003;
 166:
                            var5 = _closure2_slot2;
                            if(var1) { _fun0003_ip = 181; continue _fun0003 }
 173:
                            var4 = var5.allowActive;
                            _fun0003_ip = 187; continue _fun0003;
 181:
                            var4 = var5.allowSelected;
 187:
                            var3 = var4;
                            _fun0003_ip = 216; continue _fun0003;
 192:
                            var4 = _closure2_slot2;
                            if(var1) { _fun0003_ip = 207; continue _fun0003 }
 199:
                            var1 = var4.denyActive;
                            _fun0003_ip = 213; continue _fun0003;
 207:
                            var1 = var4.denySelected;
 213:
                            var3 = var1;
 216:
                            var1 = new Array(2);
                            var1[0] = var3;
                            var2 = _closure2_slot2;
                            var2 = var2.iconWrapper;
                            var1[1] = var2;
                            return var1;
                        }
                    };
                    var3['style'] = var6;
                    var1 = function onPress() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var3 = _closure2_slot1;
                            var2 = null;
                            var2 = var2 != var3;
                            if(!var2) { _fun0004_ip = 31; continue _fun0004 }
 16:
                            var4 = _closure2_slot0;
                            var3 = _closure3_slot0;
                            var2 = var4 !== var3;
 31:
                            if(!var2) { _fun0004_ip = 52; continue _fun0004 }
 34:
                            var3 = _closure2_slot1;
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
 52:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3['onPress'] = var1;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var7];
                    var1 = var6.bind(var2)(var1);
                    var1 = var1.DENY;
                    if(!(var11 !== var1)) { _fun0002_ip = 717; continue _fun0002 }
 375:
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var7];
                    var1 = var6.bind(var2)(var1);
                    var1 = var1.ALLOW;
                    if(!(var11 !== var1)) { _fun0002_ip = 577; continue _fun0002 }
 405:
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var7];
                    var1 = var6.bind(var2)(var1);
                    var6 = var1.PASSTHROUGH;
                    var1 = null;
                    if(!(var11 === var6)) { _fun0002_ip = 572; continue _fun0002 }
 437:
                    var8 = _closure1_slot5;
                    var7 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 9;
                    var6 = var12[var6];
                    var6 = var7.bind(var2)(var6);
                    var7 = var6.SlashIcon;
                    var6 = {};
                    var12 = 'sm';
                    var6['size'] = var12;
                    var12 = _closure2_slot2;
                    var12 = var12.icon;
                    var6['style'] = var12;
                    var12 = _closure2_slot0;
                    if(!(var12 !== var11)) { _fun0002_ip = 531; continue _fun0002 }
 498:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var12 = 3;
                    var12 = var14[var12];
                    var12 = var13.bind(var2)(var12);
                    var12 = var12.colors;
                    var12 = var12.INTERACTIVE_NORMAL;
                    _fun0002_ip = 562; continue _fun0002;
 531:
                    var14 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var13 = 3;
                    var13 = var15[var13];
                    var13 = var14.bind(var2)(var13);
                    var13 = var13.colors;
                    var12 = var13.WHITE;
 562:
                    var6['color'] = var12;
                    var1 = var8.bind(var2)(var7, var6);
 572:
                    _fun0002_ip = 712; continue _fun0002;
 577:
                    var8 = _closure1_slot5;
                    var7 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 8;
                    var6 = var12[var6];
                    var6 = var7.bind(var2)(var6);
                    var7 = var6.CheckmarkLargeBoldIcon;
                    var6 = {};
                    var12 = 'sm';
                    var6['size'] = var12;
                    var12 = _closure2_slot2;
                    var12 = var12.icon;
                    var6['style'] = var12;
                    var12 = _closure2_slot0;
                    if(!(var12 !== var11)) { _fun0002_ip = 671; continue _fun0002 }
 638:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var12 = 3;
                    var12 = var14[var12];
                    var12 = var13.bind(var2)(var12);
                    var12 = var12.colors;
                    var12 = var12.INFO_POSITIVE_FOREGROUND;
                    _fun0002_ip = 702; continue _fun0002;
 671:
                    var14 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var13 = 3;
                    var13 = var15[var13];
                    var13 = var14.bind(var2)(var13);
                    var13 = var13.colors;
                    var12 = var13.WHITE;
 702:
                    var6['color'] = var12;
                    var1 = var8.bind(var2)(var7, var6);
 712:
                    _fun0002_ip = 852; continue _fun0002;
 717:
                    var8 = _closure1_slot5;
                    var7 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 7;
                    var6 = var12[var6];
                    var6 = var7.bind(var2)(var6);
                    var7 = var6.DenyIcon;
                    var6 = {};
                    var12 = 'sm';
                    var6['size'] = var12;
                    var12 = _closure2_slot2;
                    var12 = var12.icon;
                    var6['style'] = var12;
                    var9 = _closure2_slot0;
                    if(!(var9 !== var11)) { _fun0002_ip = 811; continue _fun0002 }
 778:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var9 = 3;
                    var9 = var12[var9];
                    var9 = var11.bind(var2)(var9);
                    var9 = var9.colors;
                    var9 = var9.INFO_DANGER_FOREGROUND;
                    _fun0002_ip = 842; continue _fun0002;
 811:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 3;
                    var10 = var12[var10];
                    var10 = var11.bind(var2)(var10);
                    var10 = var10.colors;
                    var9 = var10.WHITE;
 842:
                    var6['color'] = var9;
                    var1 = var8.bind(var2)(var7, var6);
 852:
                    var3['children'] = var1;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var6 = 'checkbox-';
                    var1 = arg2;
                    var1 = var7.bind(var6)(var1);
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/channel_settings/ChannelSettingsPermissionsOverrideCheckbox.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
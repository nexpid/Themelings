// app/modules/client_themes/native/chat/SharedCustomThemeActionSheet.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot4 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.useEffect;
    var _closure1_slot5 = var7;
    var7 = var4.useLayoutEffect;
    var _closure1_slot6 = var7;
    var4 = var4.useRef;
    var _closure1_slot7 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingHorizontal': 43.5, 'paddingVertical': 12};
    var4['contentWrapper'] = var9;
    var9 = {};
    var10 = 'center';
    var9['textAlign'] = var10;
    var4['centeredText'] = var9;
    var9 = {'paddingHorizontal': 15, 'flexDirection': 'column', 'display': 'flex', 'gap': 6};
    var4['ctaContainer'] = var9;
    var9 = {'marginStart': 4294967294, 'width': 20, 'height': 20};
    var4['nitroWheelButton'] = var9;
    var9 = {};
    var10 = 8;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9['borderRadius'] = var10;
    var4['getNitroButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = function sharedClientThemeToThemeSettings(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = undefined;
            if(!(var1 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            return var1;
case 2:
            var1 = {};
            var5 = var2.colors;
            var4 = var5.map;
            var3 = function(arg1) {
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '#';
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var1['colors'] = var3;
            var3 = new Array(0);
            var1['gradientColorStops'] = var3;
            var3 = var2.gradient_angle;
            var1['gradientAngle'] = var3;
            var2 = var2.base_mix;
            var1['baseMix'] = var2;
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var4 = function PrimaryActionButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = var1.onPressApply;
            var1 = _closure1_slot14;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var _closure2_slot0 = var6;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 19;
            var1 = var9[var1];
            var10 = var2.bind(var5)(var1);
            var3 = var10.useStateFromStores;
            var1 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var3.bind(var10)(var2, var1);
            var2 = _closure1_slot1;
            var1 = 20;
            var1 = var9[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.getPremiumTypeFromSubscription;
            var2 = var1.bind(var2)(var3);
            var1 = _closure1_slot11;
            var1 = var1.TIER_2;
            if(!(var2 === var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = _closure1_slot12;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 18;
            var1 = var13[var1];
            var1 = var12.bind(var5)(var1);
            var2 = var1.Button;
            var1 = {};
            var9 = 14;
            var10 = var13[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.1Qm829;
            var9 = var10.bind(var11)(var9);
            var1['text'] = var9;
            var1['onPress'] = var4;
            var4 = 'primary';
            var1['variant'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0002_ip = 6; continue _fun0002;
case 4:
            var4 = _closure1_slot12;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 23;
            var2 = var12[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var11 = _closure1_slot0;
            var8 = 14;
            var9 = var12[var8];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.pj0XBA;
            var8 = var9.bind(var10)(var8);
            var2['text'] = var8;
            var8 = function onPress() {
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 21;
                var2 = var6[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var2);
                var2 = {};
                var4 = _closure1_slot11;
                var4 = var4.TIER_2;
                var2['premiumType'] = var4;
                var4 = 22;
                var4 = var6[var4];
                var4 = var5.bind(var1)(var4);
                var5 = var4.SHARE_CUSTOM_CLIENT_THEME_EMBED;
                var4 = new Array(1);
                var4[0] = var5;
                var2['analyticsLocations'] = var4;
                var4 = {};
                var2['analyticsLocation'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onPress'] = var8;
            var7 = function renderIcon() {
                var4 = _closure1_slot12;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 24;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot0;
                var6 = var5.nitroWheelButton;
                var5 = new Array(1);
                var5[0] = var6;
                var1['style'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2['renderIcon'] = var7;
            var6 = var6.getNitroButton;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot16 = var4;
    var4 = function getBaseThemeFromSharedClientTheme(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var4 = undefined;
            if(!(var4 === var1)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            return var4;
case 2:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 25;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getBaseTheme;
            var1 = var1.base_theme;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot17 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/client_themes/native/chat/SharedCustomThemeActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        var1 = arg1;
        var1 = var1.message;
        var10 = var1.sharedClientTheme;
        var _closure2_slot0 = var10;
        var1 = _closure1_slot14;
        var4 = undefined;
        var9 = var1.bind(var4)();
        var2 = _closure1_slot7;
        var1 = null;
        var6 = var2.bind(var4)(var1);
        var _closure2_slot1 = var6;
        var13 = _closure1_slot4;
        var2 = var13.useState;
        var1 = _closure1_slot15;
        var1 = var1.bind(var4)(var10);
        var1 = var2.bind(var13)(var1);
        var14 = _closure1_slot3;
        var2 = 2;
        var1 = var14.bind(var4)(var1, var2);
        var5 = 0;
        var11 = var1[var5];
        var _closure2_slot2 = var11;
        var3 = 1;
        var1 = var1[var3];
        var _closure2_slot3 = var1;
        var7 = var13.useState;
        var1 = _closure1_slot17;
        var1 = var1.bind(var4)(var10);
        var1 = var7.bind(var13)(var1);
        var1 = var14.bind(var4)(var1, var2);
        var7 = var1[var5];
        var _closure2_slot4 = var7;
        var1 = var1[var3];
        var _closure2_slot5 = var1;
        var15 = var13.useState;
        var1 = false;
        var1 = var15.bind(var13)(var1);
        var1 = var14.bind(var4)(var1, var2);
        var2 = var1[var5];
        var _closure2_slot6 = var2;
        var1 = var1[var3];
        var _closure2_slot7 = var1;
        var3 = var13.useRef;
        var1 = true;
        var1 = var3.bind(var13)(var1);
        var _closure2_slot8 = var1;
        var3 = _closure1_slot5;
        var13 = new Array(1);
        var13[0] = var10;
        var10 = function() {
            var6 = _closure2_slot3;
            var4 = _closure1_slot15;
            var5 = _closure2_slot0;
            var1 = undefined;
            var4 = var4.bind(var1)(var5);
            var4 = var6.bind(var1)(var4);
            var4 = _closure2_slot5;
            var3 = _closure1_slot17;
            var3 = var3.bind(var1)(var5);
            var3 = var4.bind(var1)(var3);
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 9;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot10;
            var3 = var2.CUSTOM_THEME_SHARE_PREVIEWED;
            var2 = {};
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var10 = var3.bind(var4)(var10, var13);
        var10 = new Array(2);
        var10[0] = var11;
        var10[1] = var7;
        var7 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var1 !== var2;
                if(!var2) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                var3 = _closure2_slot4;
                var2 = var1 !== var3;
case 7:
                if(!var2) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var4[var2];
                var6 = var3.bind(var1)(var2);
                var5 = var6.previewCustomTheme;
                var2 = {};
                var8 = _closure2_slot4;
                var2['baseTheme'] = var8;
                var7 = _closure2_slot2;
                var2['customTheme'] = var7;
                var2 = var5.bind(var6)(var2);
                var2 = 11;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.refreshTheme;
                var2 = var2.bind(var3)();
case 9:
                return var1;
            }
        };
        var7 = var3.bind(var4)(var7, var10);
        var10 = _closure1_slot6;
        var7 = new Array(1);
        var7[0] = var2;
        var2 = function() {
            var2 = _closure2_slot8;
            var1 = _closure2_slot6;
            var1 = !var1;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var2 = var10.bind(var4)(var2, var7);
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot8;
                    var1 = var1.current;
                    if(!var1) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 10;
                    var1 = var4[var1];
                    var2 = undefined;
                    var5 = var3.bind(var2)(var1);
                    var1 = var5.clearPreviewTheme;
                    var1 = var1.bind(var5)();
                    var1 = 11;
                    var1 = var4[var1];
                    var2 = var3.bind(var2)(var1);
                    var1 = var2.refreshTheme;
                    var1 = var1.bind(var2)();
case 11:
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        var3 = _closure1_slot13;
        var16 = _closure1_slot0;
        var17 = _closure1_slot2;
        var1 = 12;
        var1 = var17[var1];
        var1 = var16.bind(var4)(var1);
        var2 = var1.BottomSheet;
        var1 = {};
        var1['ref'] = var6;
        var1['backdropOpacity'] = var5;
        var11 = _closure1_slot12;
        var5 = 13;
        var5 = var17[var5];
        var5 = var16.bind(var4)(var5);
        var6 = var5.BottomSheetTitleHeader;
        var5 = {};
        var13 = 14;
        var7 = var17[var13];
        var7 = var16.bind(var4)(var7);
        var14 = var7.intl;
        var10 = var14.string;
        var20 = _closure1_slot1;
        var15 = 15;
        var7 = var17[var15];
        var7 = var20.bind(var4)(var7);
        var7 = var7.3ej1LS;
        var7 = var10.bind(var14)(var7);
        var5['title'] = var7;
        var6 = var11.bind(var4)(var6, var5);
        var5 = new Array(3);
        var5[0] = var6;
        var7 = _closure1_slot8;
        var6 = {};
        var10 = var9.contentWrapper;
        var6['style'] = var10;
        var10 = 16;
        var10 = var17[var10];
        var10 = var16.bind(var4)(var10);
        var14 = var10.Text;
        var10 = {};
        var18 = 'heading-md/medium';
        var10['variant'] = var18;
        var18 = var9.centeredText;
        var10['style'] = var18;
        var18 = var17[var13];
        var18 = var16.bind(var4)(var18);
        var19 = var18.intl;
        var18 = var19.string;
        var15 = var17[var15];
        var15 = var20.bind(var4)(var15);
        var15 = var15.qZMUoK;
        var15 = var18.bind(var19)(var15);
        var10['children'] = var15;
        var10 = var11.bind(var4)(var14, var10);
        var6['children'] = var10;
        var6 = var11.bind(var4)(var7, var6);
        var5[1] = var6;
        var6 = {};
        var9 = var9.ctaContainer;
        var6['style'] = var9;
        var9 = _closure1_slot16;
        var8 = {};
        var10 = function onPressApply() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure2_slot2;
                var1 = undefined;
                var3 = var1 !== var3;
                if(!var3) { _fun0006_ip = 7; continue _fun0006 }
case 8:
                var4 = _closure2_slot4;
                var3 = var1 !== var4;
case 7:
                if(!var3) { _fun0006_ip = 13; continue _fun0006 }
case 10:
                var4 = _closure2_slot1;
                var5 = var4.current;
                var4 = null;
                var3 = var4 !== var5;
case 13:
                if(!var3) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                var4 = _closure2_slot7;
                var3 = true;
                var3 = var4.bind(var1)(var3);
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 10;
                var7 = var6[var4];
                var8 = var5.bind(var1)(var7);
                var7 = var8.updateCustomTheme;
                var11 = _closure2_slot2;
                var10 = _closure2_slot4;
                var7 = var7.bind(var8)(var11, var10);
                var7 = 17;
                var7 = var6[var7];
                var9 = var5.bind(var1)(var7);
                var8 = var9.saveClientTheme;
                var7 = {};
                var7['customUserThemeSettings'] = var11;
                var7['theme'] = var10;
                var7 = var8.bind(var9)(var7);
                var4 = var6[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.clearPreviewTheme;
                var4 = var4.bind(var5)();
                var5 = _closure1_slot1;
                var4 = 9;
                var4 = var6[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.track;
                var3 = _closure1_slot10;
                var4 = var3.CUSTOM_THEME_SHARE_APPLIED;
                var3 = {};
                var3 = var5.bind(var6)(var4, var3);
                var2 = _closure2_slot1;
                var3 = var2.current;
                var2 = var3.closeActionSheet;
                var2 = var2.bind(var3)();
case 14:
                return var1;
            }
        };
        var8['onPressApply'] = var10;
        var9 = var11.bind(var4)(var9, var8);
        var8 = new Array(2);
        var8[0] = var9;
        var9 = 18;
        var9 = var17[var9];
        var9 = var16.bind(var4)(var9);
        var10 = var9.Button;
        var9 = {};
        var14 = var17[var13];
        var14 = var16.bind(var4)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var13 = var17[var13];
        var13 = var16.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13.13/7kZ;
        var13 = var14.bind(var15)(var13);
        var9['text'] = var13;
        var12 = function onPress() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = _closure2_slot1;
                var3 = var2.current;
                var2 = null;
                if(!(var2 !== var3)) { _fun0007_ip = 16; continue _fun0007 }
case 17:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 10;
                var2 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var2);
                var2 = var6.clearPreviewTheme;
                var2 = var2.bind(var6)();
                var2 = 11;
                var2 = var5[var2];
                var3 = var4.bind(var3)(var2);
                var2 = var3.refreshTheme;
                var2 = var2.bind(var3)();
                var1 = _closure2_slot1;
                var2 = var1.current;
                var1 = var2.closeActionSheet;
                var1 = var1.bind(var2)();
case 16:
                var1 = undefined;
                return var1;
            }
        };
        var9['onPress'] = var12;
        var12 = 'secondary';
        var9['variant'] = var12;
        var9 = var11.bind(var4)(var10, var9);
        var8[1] = var9;
        var6['children'] = var8;
        var6 = var3.bind(var4)(var7, var6);
        var5[2] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
// app/uikit-native/Badge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var6 = require;
        var13 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var7;
        var4 = function Badge(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var19 = var2.value;
                var _closure2_slot0 = var19;
                var21 = var2.style;
                var _closure2_slot1 = var21;
                var12 = var2.dotStyle;
                var17 = var2.textStyle;
                var15 = var2.accessible;
                var14 = var2.accessibilityLabel;
                var13 = var2.accessibilityElementsHidden;
                var5 = undefined;
                if(!(var13 === var5)) { _fun0002_ip = 60; continue _fun0002 }
 58:
                var13 = false;
 60:
                var10 = var2.importantForAccessibility;
                if(!(var10 === var5)) { _fun0002_ip = 74; continue _fun0002 }
 70:
                var10 = 'auto';
 74:
                var7 = var2.hideCount;
                if(!(var7 === var5)) { _fun0002_ip = 86; continue _fun0002 }
 84:
                var7 = false;
 86:
                var18 = var2.maxValue;
                if(!(var18 === var5)) { _fun0002_ip = 106; continue _fun0002 }
 96:
                var18 = inf;
 106:
                var6 = var2.unreadIndicator;
                if(!(var6 === var5)) { _fun0002_ip = 118; continue _fun0002 }
 116:
                var6 = false;
 118:
                var _closure2_slot2 = var6;
                var20 = var2.eventsMentionBadge;
                if(!(var20 === var5)) { _fun0002_ip = 134; continue _fun0002 }
 132:
                var20 = false;
 134:
                var _closure2_slot3 = var20;
                var9 = var2.isMentionLowImportance;
                if(!(var9 === var5)) { _fun0002_ip = 150; continue _fun0002 }
 148:
                var9 = false;
 150:
                var _closure2_slot4 = var9;
                var _closure2_slot5 = var5;
                var2 = _closure1_slot10;
                var11 = var2.bind(var5)();
                _closure2_slot5 = var11;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 9;
                var2 = var4[var2];
                var16 = var3.bind(var5)(var2);
                var4 = var16.useStateFromStores;
                var2 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() {
                    var1 = _closure1_slot4;
                    var1 = var1.locale;
                    return var1;
                };
                var16 = var4.bind(var16)(var3, var2);
                var4 = _closure1_slot2;
                var3 = var4.useMemo;
                var2 = new Array(6);
                var2[0] = var11;
                var2[1] = var21;
                var2[2] = var6;
                var2[3] = var19;
                var2[4] = var20;
                var2[5] = var9;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = _closure2_slot2;
                        if(!var1) { _fun0003_ip = 20; continue _fun0003 }
 10:
                        var3 = _closure2_slot0;
                        var1 = 0;
                        if(!(var1 !== var3)) { _fun0003_ip = 29; continue _fun0003 }
 20:
                        var4 = _closure1_slot7;
                        _fun0003_ip = 36; continue _fun0003;
 29:
                        var4 = _closure1_slot8;
 36:
                        var1 = _closure2_slot5;
                        var3 = var1.badge;
                        var1 = new Array(5);
                        var1[0] = var3;
                        var3 = {};
                        var3['height'] = var4;
                        var3['minWidth'] = var4;
                        var1[1] = var3;
                        var3 = _closure2_slot2;
                        if(!var3) { _fun0003_ip = 86; continue _fun0003 }
 76:
                        var4 = _closure2_slot0;
                        var3 = 0;
                        if(!(var3 !== var4)) { _fun0003_ip = 113; continue _fun0003 }
 86:
                        var3 = _closure2_slot4;
                        var4 = _closure2_slot5;
                        if(var3) { _fun0003_ip = 105; continue _fun0003 }
 97:
                        var3 = var4.mention;
                        _fun0003_ip = 111; continue _fun0003;
 105:
                        var3 = var4.lowImportanceMention;
 111:
                        _fun0003_ip = 123; continue _fun0003;
 113:
                        var4 = _closure2_slot5;
                        var3 = var4.unread;
 123:
                        var1[2] = var3;
                        var3 = _closure2_slot3;
                        if(!var3) { _fun0003_ip = 144; continue _fun0003 }
 134:
                        var4 = _closure2_slot5;
                        var3 = var4.eventsMentionBadge;
 144:
                        var1[3] = var3;
                        var2 = _closure2_slot1;
                        var1[4] = var2;
                        return var1;
                    }
                };
                var20 = var3.bind(var4)(var1, var2);
                var9 = 0;
                if(!(!(var19 > var9))) { _fun0002_ip = 283; continue _fun0002 }
 275:
                var1 = null;
                if(!var6) { _fun0002_ip = 510; continue _fun0002 }
 283:
                var4 = _closure1_slot9;
                var3 = _closure1_slot3;
                var2 = {};
                var21 = 'none';
                var2['pointerEvents'] = var21;
                var2['style'] = var20;
                var2['accessible'] = var15;
                var2['accessibilityLabel'] = var14;
                var2['accessibilityElementsHidden'] = var13;
                var2['importantForAccessibility'] = var10;
                if(!var6) { _fun0002_ip = 337; continue _fun0002 }
 328:
                var6 = null;
                if(!(var9 !== var19)) { _fun0002_ip = 500; continue _fun0002 }
 337:
                var10 = _closure1_slot9;
                if(var7) { _fun0002_ip = 463; continue _fun0002 }
 344:
                var14 = _closure1_slot0;
                var15 = _closure1_slot1;
                var7 = 10;
                var7 = var15[var7];
                var7 = var14.bind(var5)(var7);
                var9 = var7.LegacyText;
                var7 = {'style': null, 'numberOfLines': 1, 'maxFontSizeMultiplier': 1};
                var20 = var11.badgeText;
                var13 = new Array(2);
                var13[0] = var20;
                var13[1] = var17;
                var7['style'] = var13;
                var13 = 11;
                var13 = var15[var13];
                var15 = var14.bind(var5)(var13);
                var14 = var15.humanizeValue;
                var13 = global;
                var17 = var13.Math;
                var13 = var17.min;
                var13 = var13.bind(var17)(var19, var18);
                var13 = var14.bind(var15)(var13, var16);
                var7['children'] = var13;
                var7 = var10.bind(var5)(var9, var7);
                _fun0002_ip = 497; continue _fun0002;
 463:
                var9 = _closure1_slot3;
                var8 = {};
                var13 = var11.noCount;
                var11 = new Array(2);
                var11[0] = var13;
                var11[1] = var12;
                var8['style'] = var11;
                var7 = var10.bind(var5)(var9, var8);
 497:
                var6 = var7;
 500:
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 510:
                return var1;
            }
        };
        var _closure1_slot11 = var4;
        var1 = global;
        var9 = var1.Object;
        var8 = var9.defineProperty;
        var5 = {};
        var1 = true;
        var5['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var5);
        var1 = 0;
        var8 = var7[var1];
        var5 = metroImportAll;
        var1 = undefined;
        var5 = var5.bind(var1)(var8);
        var _closure1_slot2 = var5;
        var5 = 1;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.View;
        var _closure1_slot3 = var5;
        var17 = 2;
        var5 = var7[var17];
        var5 = var13.bind(var1)(var5);
        var _closure1_slot4 = var5;
        var5 = 3;
        var5 = var7[var5];
        var8 = var6.bind(var1)(var5);
        var5 = var8.BADGE_MASK_SIZE;
        var _closure1_slot5 = var5;
        var5 = var8.BADGE_MASK_UNREAD_SIZE;
        var _closure1_slot6 = var5;
        var5 = var8.BADGE_PADDING;
        var16 = var8.BADGE_SIZE;
        var _closure1_slot7 = var16;
        var8 = var8.BADGE_SIZE_UNREAD;
        var _closure1_slot8 = var8;
        var8 = 4;
        var8 = var7[var8];
        var8 = var6.bind(var1)(var8);
        var15 = var8.Fonts;
        var8 = 5;
        var8 = var7[var8];
        var8 = var6.bind(var1)(var8);
        var8 = var8.jsx;
        var _closure1_slot9 = var8;
        var8 = 6;
        var8 = var7[var8];
        var10 = var6.bind(var1)(var8);
        var9 = var10.createStyles;
        var8 = {};
        var11 = {};
        var12 = 'absolute';
        var11['position'] = var12;
        var12 = -var5;
        var11['bottom'] = var12;
        var12 = -var5;
        var11['right'] = var12;
        var11['padding'] = var5;
        var8['badgeMask'] = var11;
        var11 = {'paddingLeft': null, 'paddingRight': null, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
        var11['paddingLeft'] = var5;
        var11['paddingRight'] = var5;
        var12 = 7;
        var14 = var7[var12];
        var14 = var13.bind(var1)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_8;
        var11['borderRadius'] = var14;
        var14 = 'center';
        var8['badge'] = var11;
        var11 = {};
        var5 = var17 * var5;
        var5 = var16 - var5;
        var11['minWidth'] = var5;
        var5 = var7[var12];
        var5 = var13.bind(var1)(var5);
        var5 = var5.colors;
        var5 = var5.WHITE;
        var11['color'] = var5;
        var5 = 12;
        var11['fontSize'] = var5;
        var16 = 8;
        var16 = var7[var16];
        var17 = var6.bind(var1)(var16);
        var16 = var17.isAndroid;
        var16 = var16.bind(var17)();
        var17 = var7[var12];
        var17 = var13.bind(var1)(var17);
        var17 = var17.spacing;
        if(var16) { _fun0001_ip = 425; continue _fun0001 }
 418:
        var16 = var17.PX_16;
        _fun0001_ip = 431; continue _fun0001;
 425:
        var16 = var17.PX_12;
 431:
        var11['lineHeight'] = var16;
        var15 = var15.PRIMARY_BOLD;
        var11['fontFamily'] = var15;
        var11['textAlign'] = var14;
        var8['badgeText'] = var11;
        var11 = {'width': 5, 'height': 5, 'borderRadius': 2.5};
        var14 = var7[var12];
        var14 = var13.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.WHITE;
        var11['backgroundColor'] = var14;
        var8['noCount'] = var11;
        var11 = {};
        var14 = var7[var12];
        var14 = var13.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.BUTTON_OUTLINE_BRAND_BORDER;
        var11['backgroundColor'] = var14;
        var8['unread'] = var11;
        var11 = {};
        var14 = var7[var12];
        var14 = var13.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.STATUS_DANGER;
        var11['backgroundColor'] = var14;
        var8['mention'] = var11;
        var11 = {};
        var14 = var7[var12];
        var14 = var13.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.BACKGROUND_ACCENT;
        var11['backgroundColor'] = var14;
        var8['lowImportanceMention'] = var11;
        var11 = {};
        var12 = var7[var12];
        var12 = var13.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.BACKGROUND_ACCENT;
        var11['backgroundColor'] = var12;
        var8['eventsMentionBadge'] = var11;
        var8 = var9.bind(var10)(var8);
        var _closure1_slot10 = var8;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'uikit-native/Badge.tsx';
        var5 = var6.bind(var7)(var5);
        var3['default'] = var4;
        var2 = function MaskedBadge(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = arg1;
                var19 = var2.style;
                var8 = var2.maskStyle;
                var _closure2_slot0 = var8;
                var17 = var2.dotStyle;
                var18 = var2.textStyle;
                var16 = var2.value;
                var _closure2_slot1 = var16;
                var15 = var2.maxValue;
                var12 = var2.accessibilityLabel;
                var11 = var2.accessibilityElementsHidden;
                var10 = var2.importantForAccessibility;
                var7 = var2.onLayout;
                var14 = var2.hideCount;
                var13 = var2.unreadIndicator;
                var5 = undefined;
                if(!(var13 === var5)) { _fun0004_ip = 90; continue _fun0004 }
 88:
                var13 = false;
 90:
                var _closure2_slot2 = var13;
                var9 = var2.isMentionLowImportance;
                var _closure2_slot3 = var5;
                var2 = _closure1_slot10;
                var20 = var2.bind(var5)();
                _closure2_slot3 = var20;
                var4 = _closure1_slot2;
                var3 = var4.useMemo;
                var2 = new Array(4);
                var2[0] = var20;
                var2[1] = var8;
                var2[2] = var13;
                var2[3] = var16;
                var1 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = _closure2_slot2;
                        if(!var1) { _fun0005_ip = 20; continue _fun0005 }
 10:
                        var3 = _closure2_slot1;
                        var1 = 0;
                        if(!(var1 !== var3)) { _fun0005_ip = 29; continue _fun0005 }
 20:
                        var5 = _closure1_slot5;
                        _fun0005_ip = 36; continue _fun0005;
 29:
                        var5 = _closure1_slot6;
 36:
                        var1 = _closure2_slot3;
                        var3 = var1.badgeMask;
                        var1 = new Array(3);
                        var1[0] = var3;
                        var3 = {};
                        var3['minWidth'] = var5;
                        var3['height'] = var5;
                        var4 = 2;
                        var4 = var5 / var4;
                        var3['borderRadius'] = var4;
                        var1[1] = var3;
                        var2 = _closure2_slot0;
                        var1[2] = var2;
                        return var1;
                    }
                };
                var8 = var3.bind(var4)(var1, var2);
                var1 = 0;
                if(!(!(var16 > var1))) { _fun0004_ip = 170; continue _fun0004 }
 165:
                var1 = null;
                if(!var13) { _fun0004_ip = 276; continue _fun0004 }
 170:
                var4 = _closure1_slot9;
                var3 = _closure1_slot3;
                var2 = {};
                var20 = 'none';
                var2['pointerEvents'] = var20;
                var2['style'] = var8;
                var2['onLayout'] = var7;
                var8 = _closure1_slot9;
                var7 = _closure1_slot11;
                var6 = {};
                var6['style'] = var19;
                var6['textStyle'] = var18;
                var6['dotStyle'] = var17;
                var6['value'] = var16;
                var6['maxValue'] = var15;
                var6['hideCount'] = var14;
                var6['unreadIndicator'] = var13;
                var6['accessibilityLabel'] = var12;
                var6['accessibilityElementsHidden'] = var11;
                var6['importantForAccessibility'] = var10;
                var6['isMentionLowImportance'] = var9;
                var6 = var8.bind(var5)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 276:
                return var1;
            }
        };
        var3['MaskedBadge'] = var2;
        return var1;
    }
})();
// app/modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function ApplyButton(arg1) {
        var2 = arg1;
        var11 = var2.onPress;
        var13 = var2.visible;
        var _closure2_slot0 = var13;
        var14 = _closure1_slot0;
        var15 = _closure1_slot2;
        var2 = 11;
        var2 = var15[var2];
        var4 = undefined;
        var6 = var14.bind(var4)(var2);
        var5 = var6.useStateFromStores;
        var2 = _closure1_slot8;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var1 = _closure1_slot8;
            var1 = var1.useReducedMotion;
            return var1;
        };
        var10 = var5.bind(var6)(var3, var2);
        var _closure2_slot1 = var10;
        var6 = _closure1_slot1;
        var2 = 36;
        var2 = var15[var2];
        var2 = var6.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var12 = var2.bottom;
        var5 = 37;
        var2 = var15[var5];
        var7 = var14.bind(var4)(var2);
        var3 = var7.useAnimatedProps;
        var2 = function o() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = {};
                var3 = _closure2_slot0;
                var2 = 'none';
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = 'box-none';
case 2:
                var1['pointerEvents'] = var2;
                return var1;
            }
        };
        var9 = {};
        var9['visible'] = var13;
        var2['__closure'] = var9;
        var9 = 2349569076845.0;
        var2['__workletHash'] = var9;
        var9 = _closure1_slot15;
        var2['__initData'] = var9;
        var9 = var3.bind(var7)(var2);
        var2 = var15[var5];
        var3 = var14.bind(var4)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function l() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot0;
                var6 = 0;
                if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var6 = 1;
case 4:
                var3 = _closure2_slot0;
                var9 = 60;
                if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var9 = 0;
case 6:
                var1 = _closure2_slot0;
                var10 = 0.9;
                if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var10 = 1;
case 8:
                var1 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'marginLeft': 24, 'marginRight': 24, 'flexDirection': 'column', 'justifyContent': 'flex-end'};
                var4 = {};
                var5 = _closure2_slot1;
                var3 = var9;
                if(var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var7 = 38;
                var8 = var8[var7];
                var7 = undefined;
                var8 = var11.bind(var7)(var8);
                var7 = var8.withSpring;
                var5 = _closure1_slot11;
                var3 = var7.bind(var8)(var9, var5);
case 10:
                var4['translateY'] = var3;
                var3 = new Array(2);
                var3[0] = var4;
                var4 = {};
                var7 = _closure2_slot1;
                var5 = var10;
                if(var7) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var8 = 38;
                var9 = var9[var8];
                var8 = undefined;
                var9 = var11.bind(var8)(var9);
                var8 = var9.withSpring;
                var7 = _closure1_slot11;
                var5 = var8.bind(var9)(var10, var7);
case 12:
                var4['scale'] = var5;
                var3[1] = var4;
                var1['transform'] = var3;
                var3 = _closure2_slot1;
                var2 = var6;
                if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 38;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var7.bind(var4)(var5);
                var4 = var5.withSpring;
                var3 = _closure1_slot11;
                var2 = var4.bind(var5)(var6, var3);
case 14:
                var1['opacity'] = var2;
                return var1;
            }
        };
        var7 = {};
        var7['visible'] = var13;
        var7['reducedMotion'] = var10;
        var10 = 38;
        var10 = var15[var10];
        var10 = var14.bind(var4)(var10);
        var10 = var10.withSpring;
        var7['withSpring'] = var10;
        var10 = _closure1_slot11;
        var7['MEDIA_PICKER_SEND_BUTTON_SPRING'] = var10;
        var1['__closure'] = var7;
        var7 = 3357748622322.0;
        var1['__workletHash'] = var7;
        var7 = _closure1_slot16;
        var1['__initData'] = var7;
        var7 = var2.bind(var3)(var1);
        var3 = _closure1_slot12;
        var1 = var15[var5];
        var1 = var6.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var1['style'] = var7;
        var7 = _closure1_slot12;
        var5 = var15[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.View;
        var5 = {};
        var10 = {};
        var10['marginBottom'] = var12;
        var5['style'] = var10;
        var5['animatedProps'] = var9;
        var10 = _closure1_slot12;
        var8 = 33;
        var8 = var15[var8];
        var8 = var14.bind(var4)(var8);
        var9 = var8.Button;
        var8 = {'variant': 'primary', 'onPress': null, 'size': 'lg'};
        var8['onPress'] = var11;
        var11 = 27;
        var12 = var15[var11];
        var12 = var14.bind(var4)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var4)(var11);
        var11 = var11.t;
        var11 = var11.1Qm822;
        var11 = var12.bind(var13)(var11);
        var8['text'] = var11;
        var8 = var10.bind(var4)(var9, var8);
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var1;
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
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var7 = var4.ScrollView;
    var _closure1_slot6 = var7;
    var4 = var4.Pressable;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MEDIA_PICKER_SEND_BUTTON_SPRING;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var12;
    var10 = 9;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_PRIMARY;
    var9['backgroundColor'] = var13;
    var4['container'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['padding'] = var13;
    var4['contentContainer'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var9['marginBottom'] = var13;
    var4['section'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['marginBottom'] = var13;
    var4['sectionTitle'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_MOD_FAINT;
    var9['backgroundColor'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var9['borderRadius'] = var13;
    var4['fieldButtonGroup'] = var9;
    var9 = {'padding': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9['padding'] = var13;
    var13 = 'row';
    var4['fieldButton'] = var9;
    var9 = {};
    var9['borderTopWidth'] = var12;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var9['borderTopColor'] = var14;
    var4['fieldButtonBorder'] = var9;
    var9 = {};
    var9['flexDirection'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9['gap'] = var13;
    var4['fieldButtonChevron'] = var9;
    var9 = {'width': 24, 'height': 24};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9['borderRadius'] = var13;
    var4['colorSwatch'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['padding'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_PRIMARY;
    var9['backgroundColor'] = var13;
    var9['borderTopWidth'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_FAINT;
    var9['borderTopColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['gap'] = var10;
    var4['buttonContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = "function DisplayNameStylesEditScreenTsx1(){const{visible}=this.__closure;return{pointerEvents:visible?'box-none':'none'};}";
    var4['code'] = var7;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = "function DisplayNameStylesEditScreenTsx2(){const{visible,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginLeft:24,marginRight:24,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}";
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = 39;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DisplayNameStylesEditScreen() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = _closure1_slot14;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 10;
            var2 = var7[var3];
            var8 = var5.bind(var4)(var2);
            var2 = var8.useRoute;
            var2 = var2.bind(var8)();
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useNavigation;
            var3 = var3.bind(var5)();
            var _closure2_slot0 = var3;
            var2 = var2.params;
            var18 = null;
            if(!(var18 == var2)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var2 = {};
case 16:
            var13 = var2.guildId;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 11;
            var2 = var8[var2];
            var10 = var7.bind(var4)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot9;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var9.bind(var10)(var5, var2);
            var2 = 12;
            var2 = var8[var2];
            var5 = var7.bind(var4)(var2);
            var2 = var5.useDisplayNameStylesPendingName;
            var2 = var2.bind(var5)(var9, var13);
            var _closure2_slot1 = var2;
            var5 = 13;
            var5 = var8[var5];
            var7 = var7.bind(var4)(var5);
            var5 = var7.useGuildMemberOrUserPendingDisplayNameStyles;
            var5 = var5.bind(var7)(var9, var13);
            var15 = var5.guildDisplayNameStyles;
            var16 = var5.pendingDisplayNameStyles;
            var7 = _closure1_slot1;
            var5 = 14;
            var5 = var8[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var10 = var18 == var9;
            var8 = undefined;
            if(var10) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var8 = var9.id;
case 18:
            var5['userId'] = var8;
            var5['guildId'] = var13;
            var5['pendingDisplayNameStyles'] = var16;
            var22 = var7.bind(var4)(var5);
            var _closure2_slot2 = var22;
            var8 = _closure1_slot4;
            var7 = var8.useState;
            var9 = var18 == var22;
            var5 = undefined;
            if(var9) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var5 = var22.fontId;
case 20:
            if(!(var18 == var5)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 15;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.DisplayNameFont;
            var5 = var9.DEFAULT;
case 22:
            var7 = var7.bind(var8)(var5);
            var5 = _closure1_slot3;
            var10 = 2;
            var5 = var5.bind(var4)(var7, var10);
            var40 = 0;
            var7 = var5[var40];
            var _closure2_slot3 = var7;
            var8 = 1;
            var5 = var5[var8];
            var _closure2_slot4 = var5;
            var11 = _closure1_slot4;
            var9 = var11.useState;
            var14 = var18 == var22;
            var5 = undefined;
            if(var14) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var5 = var22.effectId;
case 24:
            if(!(var18 == var5)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var14 = 16;
            var14 = var19[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.DisplayNameEffect;
            var5 = var14.SOLID;
case 26:
            var9 = var9.bind(var11)(var5);
            var5 = _closure1_slot3;
            var5 = var5.bind(var4)(var9, var10);
            var14 = var5[var40];
            var _closure2_slot5 = var14;
            var5 = var5[var8];
            var _closure2_slot6 = var5;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 17;
            var5 = var11[var5];
            var9 = var9.bind(var4)(var5);
            var5 = var9.useDisplayNameStylesEffectConfig;
            var39 = var5.bind(var9)(var14);
            var5 = var18 == var22;
            var11 = undefined;
            if(var5) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var11 = var22.colors;
case 28:
            if(!(var18 == var11)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var11 = new Array(0);
case 30:
            var9 = _closure1_slot4;
            var5 = var9.useState;
            var17 = var11.length;
            if(!(!(var17 > var40))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var11 = var39.defaultColors;
case 32:
            var9 = var5.bind(var9)(var11);
            var5 = _closure1_slot3;
            var5 = var5.bind(var4)(var9, var10);
            var37 = var5[var40];
            var _closure2_slot7 = var37;
            var5 = var5[var8];
            var _closure2_slot8 = var5;
            var8 = _closure1_slot4;
            var10 = var8.useMemo;
            var9 = new Array(4);
            var9[0] = var22;
            var9[1] = var7;
            var9[2] = var14;
            var9[3] = var37;
            var5 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = _closure2_slot2;
                    var6 = null;
                    var4 = var6 == var1;
                    var2 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    var4 = _closure2_slot2;
                    var1 = var4.fontId;
case 34:
                    var1 = var3 !== var1;
                    if(var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var4 = _closure2_slot5;
                    var3 = _closure2_slot2;
                    var5 = var6 == var3;
                    var3 = undefined;
                    if(var5) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var5 = _closure2_slot2;
                    var3 = var5.effectId;
case 38:
                    var1 = var4 !== var3;
case 36:
                    if(var1) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 18;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.areArraysShallowEqual;
                    var3 = _closure2_slot7;
                    var8 = _closure2_slot2;
                    var8 = var6 == var8;
                    var2 = undefined;
                    if(var8) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                    var7 = _closure2_slot2;
                    var2 = var7.colors;
case 42:
                    if(!(var6 == var2)) { _fun0004_ip = 13; continue _fun0004 }
case 44:
                    var2 = new Array(0);
case 13:
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = !var2;
case 40:
                    return var1;
                }
            };
            var9 = var10.bind(var8)(var5, var9);
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var5 = 19;
            var5 = var28[var5];
            var11 = var26.bind(var4)(var5);
            var10 = var11.useDisplayNameStylesHandleApply;
            var5 = {};
            var5['hasChanges'] = var9;
            var5['selectedFontId'] = var7;
            var5['selectedEffectId'] = var14;
            var5['selectedColors'] = var37;
            var14 = var39.defaultColors;
            var14 = var14[var40];
            var5['defaultColor'] = var14;
            var5['guildId'] = var13;
            var14 = function onClose() {
                var2 = _closure2_slot0;
                var1 = var2.goBack;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5['onClose'] = var14;
            var10 = var10.bind(var11)(var5);
            var14 = var8.useCallback;
            var11 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 20;
                var3 = var5[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.generateRandomDisplayNameStyles;
                var3 = var3.bind(var4)();
                var8 = var3.fontId;
                var7 = var3.effectId;
                var4 = var3.colors;
                var6 = _closure2_slot4;
                var6 = var6.bind(var1)(var8);
                var6 = _closure2_slot6;
                var6 = var6.bind(var1)(var7);
                var3 = _closure2_slot8;
                var3 = var3.bind(var1)(var4);
                var4 = _closure1_slot1;
                var3 = 21;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.track;
                var2 = _closure1_slot10;
                var2 = var2.DISPLAY_NAME_STYLES_SURPRISE_ME;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5 = new Array(0);
            var24 = var14.bind(var8)(var11, var5);
            var14 = var8.useCallback;
            var11 = new Array(1);
            var11[0] = var3;
            var5 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 22;
                var3 = var5[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var4 = var6.setPendingDisplayNameStyles;
                var3 = null;
                var3 = var4.bind(var6)(var3);
                var4 = _closure1_slot1;
                var3 = 21;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.track;
                var2 = _closure1_slot10;
                var2 = var2.DISPLAY_NAME_STYLES_REMOVED;
                var2 = var3.bind(var4)(var2);
                var3 = _closure2_slot0;
                var2 = var3.goBack;
                var2 = var2.bind(var3)();
                return var1;
            };
            var25 = var14.bind(var8)(var5, var11);
            var11 = var8.useCallback;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setGuildMemberPendingDisplayNameStyles;
                var2 = null;
                var2 = var3.bind(var4)(var2);
                var3 = _closure2_slot0;
                var2 = var3.goBack;
                var2 = var2.bind(var3)();
                return var1;
            };
            var17 = var11.bind(var8)(var3, var5);
            var5 = var8.useCallback;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var2;
            var2 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 24;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 26;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 25;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var7 = _closure2_slot3;
                var3['selectedFontId'] = var7;
                var7 = _closure2_slot4;
                var3['onSelectFont'] = var7;
                var2 = _closure2_slot1;
                var3['displayName'] = var2;
                var2 = 'DisplayNameStylesFontPickerSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var19 = var5.bind(var8)(var2, var3);
            var21 = 27;
            var2 = var28[var21];
            var2 = var26.bind(var4)(var2);
            var5 = var2.intl;
            var3 = var5.string;
            var31 = _closure1_slot1;
            var2 = 28;
            var2 = var28[var2];
            var2 = var31.bind(var4)(var2);
            var2 = var2.bind(var4)(var7);
            var35 = var3.bind(var5)(var2);
            var2 = var37.map;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 29;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.int2hex;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var2.bind(var37)(var1);
            var2 = var3.join;
            var1 = ', ';
            var36 = var2.bind(var3)(var1);
            var3 = _closure1_slot13;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var12.container;
            var1['style'] = var5;
            var7 = _closure1_slot6;
            var5 = {};
            var8 = var12.contentContainer;
            var5['contentContainerStyle'] = var8;
            var11 = _closure1_slot12;
            var8 = {};
            var14 = var12.section;
            var8['style'] = var14;
            var14 = {};
            var20 = var12.fieldButtonGroup;
            var14['style'] = var20;
            var23 = _closure1_slot7;
            var20 = {};
            var20['onPress'] = var19;
            var19 = var12.fieldButton;
            var20['style'] = var19;
            var27 = {};
            var33 = _closure1_slot12;
            var30 = 30;
            var19 = var28[var30];
            var19 = var26.bind(var4)(var19);
            var32 = var19.Text;
            var29 = {'variant': 'heading-md/semibold', 'color': 'header-primary'};
            var19 = var28[var21];
            var19 = var26.bind(var4)(var19);
            var41 = var19.intl;
            var38 = var41.string;
            var19 = 31;
            var34 = var28[var19];
            var34 = var31.bind(var4)(var34);
            var34 = var34.0JCuGm;
            var34 = var38.bind(var41)(var34);
            var29['children'] = var34;
            var32 = var33.bind(var4)(var32, var29);
            var29 = new Array(2);
            var29[0] = var32;
            var34 = _closure1_slot12;
            var32 = var28[var30];
            var32 = var26.bind(var4)(var32);
            var33 = var32.Text;
            var32 = {'variant': 'text-md/normal', 'color': 'text-secondary'};
            var32['children'] = var35;
            var32 = var34.bind(var4)(var33, var32);
            var29[1] = var32;
            var27['children'] = var29;
            var29 = var3.bind(var4)(var2, var27);
            var27 = new Array(2);
            var27[0] = var29;
            var34 = _closure1_slot12;
            var32 = 32;
            var29 = var28[var32];
            var29 = var26.bind(var4)(var29);
            var33 = var29.ChevronSmallRightIcon;
            var29 = {};
            var35 = 'interactive-muted';
            var29['color'] = var35;
            var29 = var34.bind(var4)(var33, var29);
            var27[1] = var29;
            var20['children'] = var27;
            var23 = var3.bind(var4)(var23, var20);
            var20 = new Array(3);
            var20[0] = var23;
            var23 = {};
            var29 = var12.fieldButton;
            var27 = new Array(2);
            var27[0] = var29;
            var29 = var12.fieldButtonBorder;
            var27[1] = var29;
            var23['style'] = var27;
            var27 = {};
            var34 = _closure1_slot12;
            var29 = var28[var30];
            var29 = var26.bind(var4)(var29);
            var33 = var29.Text;
            var29 = {'variant': 'heading-md/semibold', 'color': 'header-primary'};
            var38 = var28[var21];
            var38 = var26.bind(var4)(var38);
            var42 = var38.intl;
            var41 = var42.string;
            var38 = var28[var19];
            var38 = var31.bind(var4)(var38);
            var38 = var38.RVtMxT;
            var38 = var41.bind(var42)(var38);
            var29['children'] = var38;
            var33 = var34.bind(var4)(var33, var29);
            var29 = new Array(2);
            var29[0] = var33;
            var38 = _closure1_slot12;
            var33 = var28[var30];
            var33 = var26.bind(var4)(var33);
            var34 = var33.Text;
            var33 = {'variant': 'text-md/normal', 'color': 'text-secondary'};
            var39 = var39.name;
            var33['children'] = var39;
            var33 = var38.bind(var4)(var34, var33);
            var29[1] = var33;
            var27['children'] = var29;
            var29 = var3.bind(var4)(var2, var27);
            var27 = new Array(2);
            var27[0] = var29;
            var34 = _closure1_slot12;
            var29 = var28[var32];
            var29 = var26.bind(var4)(var29);
            var33 = var29.ChevronSmallRightIcon;
            var29 = {};
            var29['color'] = var35;
            var29 = var34.bind(var4)(var33, var29);
            var27[1] = var29;
            var23['children'] = var27;
            var23 = var3.bind(var4)(var2, var23);
            var20[1] = var23;
            var23 = {};
            var29 = var12.fieldButton;
            var27 = new Array(2);
            var27[0] = var29;
            var29 = var12.fieldButtonBorder;
            var27[1] = var29;
            var23['style'] = var27;
            var27 = {};
            var34 = _closure1_slot12;
            var29 = var28[var30];
            var29 = var26.bind(var4)(var29);
            var33 = var29.Text;
            var29 = {'variant': 'heading-md/semibold', 'color': 'header-primary'};
            var38 = var28[var21];
            var38 = var26.bind(var4)(var38);
            var41 = var38.intl;
            var39 = var41.string;
            var38 = var28[var19];
            var38 = var31.bind(var4)(var38);
            var38 = var38.6OxgN7;
            var38 = var39.bind(var41)(var38);
            var29['children'] = var38;
            var33 = var34.bind(var4)(var33, var29);
            var29 = new Array(2);
            var29[0] = var33;
            var34 = _closure1_slot12;
            var30 = var28[var30];
            var30 = var26.bind(var4)(var30);
            var33 = var30.Text;
            var30 = {'variant': 'text-md/normal', 'color': 'text-secondary'};
            var30['children'] = var36;
            var30 = var34.bind(var4)(var33, var30);
            var29[1] = var30;
            var27['children'] = var29;
            var29 = var3.bind(var4)(var2, var27);
            var27 = new Array(2);
            var27[0] = var29;
            var29 = {};
            var30 = var12.fieldButtonChevron;
            var29['style'] = var30;
            var33 = _closure1_slot12;
            var30 = {};
            var36 = var12.colorSwatch;
            var34 = new Array(2);
            var34[0] = var36;
            var36 = {};
            var38 = 29;
            var38 = var28[var38];
            var39 = var26.bind(var4)(var38);
            var38 = var39.int2hex;
            var37 = var37[var40];
            var37 = var38.bind(var39)(var37);
            var36['backgroundColor'] = var37;
            var34[1] = var36;
            var30['style'] = var34;
            var33 = var33.bind(var4)(var2, var30);
            var30 = new Array(2);
            var30[0] = var33;
            var34 = _closure1_slot12;
            var32 = var28[var32];
            var32 = var26.bind(var4)(var32);
            var33 = var32.ChevronSmallRightIcon;
            var32 = {};
            var32['color'] = var35;
            var32 = var34.bind(var4)(var33, var32);
            var30[1] = var32;
            var29['children'] = var30;
            var29 = var3.bind(var4)(var2, var29);
            var27[1] = var29;
            var23['children'] = var27;
            var23 = var3.bind(var4)(var2, var23);
            var20[2] = var23;
            var14['children'] = var20;
            var14 = var3.bind(var4)(var2, var14);
            var8['children'] = var14;
            var11 = var11.bind(var4)(var2, var8);
            var8 = new Array(2);
            var8[0] = var11;
            var11 = {};
            var12 = var12.buttonContainer;
            var11['style'] = var12;
            var23 = _closure1_slot12;
            var14 = 33;
            var12 = var28[var14];
            var12 = var26.bind(var4)(var12);
            var20 = var12.Button;
            var12 = {'text': null, 'onPress': null, 'variant': 'secondary', 'size': 'lg', 'grow': true, 'icon': null, 'iconPosition': 'start'};
            var27 = var28[var21];
            var27 = var26.bind(var4)(var27);
            var30 = var27.intl;
            var29 = var30.string;
            var27 = var28[var19];
            var27 = var31.bind(var4)(var27);
            var27 = var27.NOGFds;
            var27 = var29.bind(var30)(var27);
            var12['text'] = var27;
            var12['onPress'] = var24;
            var27 = _closure1_slot12;
            var24 = 34;
            var24 = var28[var24];
            var24 = var26.bind(var4)(var24);
            var26 = var24.DiceIcon;
            var24 = {};
            var24 = var27.bind(var4)(var26, var24);
            var12['icon'] = var24;
            var20 = var23.bind(var4)(var20, var12);
            var12 = new Array(3);
            var12[0] = var20;
            var20 = var18 == var13;
            if(!var20) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var20 = var18 != var22;
case 45:
            if(!var20) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var24 = _closure1_slot12;
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var22 = var28[var14];
            var22 = var26.bind(var4)(var22);
            var23 = var22.Button;
            var22 = {'text': null, 'onPress': null, 'variant': 'secondary', 'size': 'lg', 'grow': true, 'icon': null, 'iconPosition': 'start'};
            var27 = var28[var21];
            var27 = var26.bind(var4)(var27);
            var30 = var27.intl;
            var29 = var30.string;
            var31 = _closure1_slot1;
            var27 = var28[var19];
            var27 = var31.bind(var4)(var27);
            var27 = var27.ymq8WQ;
            var27 = var29.bind(var30)(var27);
            var22['text'] = var27;
            var22['onPress'] = var25;
            var27 = _closure1_slot12;
            var25 = 35;
            var25 = var28[var25];
            var25 = var26.bind(var4)(var25);
            var26 = var25.DenyIcon;
            var25 = {};
            var25 = var27.bind(var4)(var26, var25);
            var22['icon'] = var25;
            var20 = var24.bind(var4)(var23, var22);
case 47:
            var12[1] = var20;
            var13 = var18 != var13;
            if(!var13) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var15 = var18 != var15;
            if(var15) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var15 = var18 != var16;
case 51:
            var13 = var15;
case 49:
            if(!var13) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var16 = _closure1_slot12;
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var14 = var20[var14];
            var14 = var18.bind(var4)(var14);
            var15 = var14.Button;
            var14 = {'text': null, 'onPress': null, 'variant': 'secondary', 'size': 'lg', 'grow': true, 'icon': null, 'iconPosition': 'start'};
            var21 = var20[var21];
            var21 = var18.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var23 = _closure1_slot1;
            var19 = var20[var19];
            var19 = var23.bind(var4)(var19);
            var19 = var19.j/KRxc;
            var19 = var21.bind(var22)(var19);
            var14['text'] = var19;
            var14['onPress'] = var17;
            var19 = _closure1_slot12;
            var17 = 35;
            var17 = var20[var17];
            var17 = var18.bind(var4)(var17);
            var18 = var17.DenyIcon;
            var17 = {};
            var17 = var19.bind(var4)(var18, var17);
            var14['icon'] = var17;
            var13 = var16.bind(var4)(var15, var14);
case 53:
            var12[2] = var13;
            var11['children'] = var12;
            var11 = var3.bind(var4)(var2, var11);
            var8[1] = var11;
            var5['children'] = var8;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot12;
            var7 = _closure1_slot17;
            var6 = {};
            var6['onPress'] = var10;
            var6['visible'] = var9;
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
// app/modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function ColorSwatch(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.colors;
            var2 = _closure1_slot14;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var3 = var9.length;
            var2 = 2;
            if(!(!(var3 >= var2))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var9.length;
            var2 = 0;
            var3 = var3 > var2;
            var10 = '#000000';
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 36;
            var3 = var7[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.int2hex;
            var2 = var9[var2];
            var10 = var3.bind(var6)(var2);
case 4:
            var6 = _closure1_slot12;
            var3 = _closure1_slot5;
            var2 = {};
            var8 = var5.colorSwatch;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = {};
            var8['backgroundColor'] = var10;
            var7[1] = var8;
            var2['style'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 2:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 36;
            var7 = var6[var2];
            var10 = var3.bind(var4)(var7);
            var8 = var10.int2hex;
            var7 = 0;
            var7 = var9[var7];
            var8 = var8.bind(var10)(var7);
            var2 = var6[var2];
            var7 = var3.bind(var4)(var2);
            var3 = var7.int2hex;
            var2 = 1;
            var2 = var9[var2];
            var7 = var3.bind(var7)(var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot1;
            var1 = 40;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var1['colors'] = var6;
            var6 = {'x': 0, 'y': 0};
            var1['start'] = var6;
            var6 = {'x': 1, 'y': 0};
            var1['end'] = var6;
            var5 = var5.colorSwatch;
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
        var2 = 41;
        var2 = var15[var2];
        var2 = var6.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var12 = var2.bottom;
        var5 = 42;
        var2 = var15[var5];
        var7 = var14.bind(var4)(var2);
        var3 = var7.useAnimatedProps;
        var2 = function l() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = {};
                var3 = _closure2_slot0;
                var2 = 'none';
                if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var2 = 'box-none';
case 6:
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
        var1 = function o() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure2_slot0;
                var6 = 0;
                if(!var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var6 = 1;
case 8:
                var3 = _closure2_slot0;
                var11 = 60;
                if(!var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var11 = 0;
case 10:
                var1 = _closure2_slot0;
                var12 = 0.9;
                if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var12 = 1;
case 12:
                var1 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'marginHorizontal': null, 'flexDirection': 'column', 'justifyContent': 'flex-end'};
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 9;
                var4 = var7[var4];
                var7 = undefined;
                var4 = var5.bind(var7)(var4);
                var4 = var4.spacing;
                var4 = var4.PX_16;
                var1['marginHorizontal'] = var4;
                var5 = {};
                var8 = _closure2_slot1;
                var4 = var11;
                if(var8) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 43;
                var8 = var10[var8];
                var10 = var9.bind(var7)(var8);
                var9 = var10.withSpring;
                var8 = _closure1_slot11;
                var4 = var9.bind(var10)(var11, var8);
case 14:
                var5['translateY'] = var4;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var9 = _closure2_slot1;
                var8 = var12;
                if(var9) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 43;
                var9 = var11[var9];
                var11 = var10.bind(var7)(var9);
                var10 = var11.withSpring;
                var9 = _closure1_slot11;
                var8 = var10.bind(var11)(var12, var9);
case 16:
                var5['scale'] = var8;
                var4[1] = var5;
                var1['transform'] = var4;
                var4 = _closure2_slot1;
                var2 = var6;
                if(var4) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 43;
                var4 = var8[var4];
                var5 = var5.bind(var7)(var4);
                var4 = var5.withSpring;
                var3 = _closure1_slot11;
                var2 = var4.bind(var5)(var6, var3);
case 18:
                var1['opacity'] = var2;
                return var1;
            }
        };
        var7 = {};
        var7['visible'] = var13;
        var13 = 9;
        var13 = var15[var13];
        var13 = var6.bind(var4)(var13);
        var7['tokens'] = var13;
        var7['reducedMotion'] = var10;
        var10 = 43;
        var10 = var15[var10];
        var10 = var14.bind(var4)(var10);
        var10 = var10.withSpring;
        var7['withSpring'] = var10;
        var10 = _closure1_slot11;
        var7['MEDIA_PICKER_SEND_BUTTON_SPRING'] = var10;
        var1['__closure'] = var7;
        var7 = 10858711048130.0;
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
        var8 = 37;
        var8 = var15[var8];
        var8 = var14.bind(var4)(var8);
        var9 = var8.Button;
        var8 = {'variant': 'primary', 'onPress': null, 'size': 'lg'};
        var8['onPress'] = var11;
        var11 = 30;
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
    var _closure1_slot18 = var1;
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
    var9['marginVertical'] = var13;
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
    var7 = "function DisplayNameStylesEditScreenTsx2(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.spacing.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}";
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = 44;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DisplayNameStylesEditScreen() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = _closure1_slot14;
            var5 = undefined;
            var14 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 10;
            var1 = var4[var2];
            var6 = var3.bind(var5)(var1);
            var1 = var6.useRoute;
            var1 = var1.bind(var6)();
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            var _closure2_slot0 = var2;
            var1 = var1.params;
            var20 = null;
            if(!(var20 == var1)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var1 = {};
case 20:
            var15 = var1.guildId;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 11;
            var1 = var4[var1];
            var9 = var3.bind(var5)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var28 = var8.bind(var9)(var6, var1);
            var _closure2_slot1 = var28;
            var1 = 12;
            var1 = var4[var1];
            var6 = var3.bind(var5)(var1);
            var1 = var6.useDisplayNameStylesPendingName;
            var25 = var1.bind(var6)(var28, var15);
            var _closure2_slot2 = var25;
            var1 = 13;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useGuildMemberOrUserPendingDisplayNameStyles;
            var1 = var1.bind(var3)(var28, var15);
            var17 = var1.guildDisplayNameStyles;
            var18 = var1.pendingDisplayNameStyles;
            var3 = _closure1_slot1;
            var1 = 14;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var6 = var20 == var28;
            var4 = undefined;
            if(var6) { _fun0004_ip = 22; continue _fun0004 }
case 19:
            var4 = var28.id;
case 22:
            var1['userId'] = var4;
            var1['guildId'] = var15;
            var1['pendingDisplayNameStyles'] = var18;
            var24 = var3.bind(var5)(var1);
            var _closure2_slot3 = var24;
            var4 = _closure1_slot4;
            var3 = var4.useState;
            var6 = var20 == var24;
            var1 = undefined;
            if(var6) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var1 = var24.fontId;
case 23:
            if(!(var20 == var1)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 15;
            var6 = var9[var6];
            var6 = var8.bind(var5)(var6);
            var6 = var6.DisplayNameFont;
            var1 = var6.DEFAULT;
case 25:
            var3 = var3.bind(var4)(var1);
            var1 = _closure1_slot3;
            var8 = 2;
            var1 = var1.bind(var5)(var3, var8);
            var12 = 0;
            var22 = var1[var12];
            var _closure2_slot4 = var22;
            var4 = 1;
            var1 = var1[var4];
            var _closure2_slot5 = var1;
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var9 = var20 == var24;
            var1 = undefined;
            if(var9) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var1 = var24.effectId;
case 27:
            if(!(var20 == var1)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 16;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.DisplayNameEffect;
            var1 = var9.SOLID;
case 29:
            var3 = var3.bind(var6)(var1);
            var1 = _closure1_slot3;
            var1 = var1.bind(var5)(var3, var8);
            var16 = var1[var12];
            var _closure2_slot6 = var16;
            var1 = var1[var4];
            var _closure2_slot7 = var1;
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 17;
            var6 = var1[var3];
            var10 = var9.bind(var5)(var6);
            var6 = var10.useDisplayNameStylesEffectConfig;
            var43 = var6.bind(var10)(var16);
            var3 = var1[var3];
            var6 = var9.bind(var5)(var3);
            var3 = var6.useDisplayNameStylesEffectConfig;
            var19 = 16;
            var1 = var1[var19];
            var1 = var9.bind(var5)(var1);
            var1 = var1.DisplayNameEffect;
            var1 = var1.GRADIENT;
            var10 = var3.bind(var6)(var1);
            var1 = var20 == var24;
            var9 = undefined;
            if(var1) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var9 = var24.colors;
case 31:
            if(!(var20 == var9)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var9 = new Array(0);
case 33:
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var1 = var9.length;
            if(!(var1 > var12)) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var11 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var19];
            var1 = var11.bind(var5)(var1);
            var1 = var1.DisplayNameEffect;
            var1 = var1.GRADIENT;
            if(!(var16 === var1)) { _fun0004_ip = 37; continue _fun0004 }
case 35:
            var1 = var43.defaultColors;
            var1 = var1[var12];
            _fun0004_ip = 38; continue _fun0004;
case 37:
            var1 = var9[var12];
case 38:
            var3 = var3.bind(var6)(var1);
            var1 = _closure1_slot3;
            var3 = var1.bind(var5)(var3, var8);
            var1 = var3[var12];
            var _closure2_slot8 = var1;
            var3 = var3[var4];
            var _closure2_slot9 = var3;
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var11 = var9.length;
            if(!(var11 > var12)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var19];
            var11 = var13.bind(var5)(var11);
            var11 = var11.DisplayNameEffect;
            var11 = var11.GRADIENT;
            if(!(var16 !== var11)) { _fun0004_ip = 41; continue _fun0004 }
case 39:
            var9 = var10.defaultColors;
case 41:
            var6 = var3.bind(var6)(var9);
            var3 = _closure1_slot3;
            var3 = var3.bind(var5)(var6, var8);
            var6 = var3[var12];
            var _closure2_slot10 = var6;
            var3 = var3[var4];
            var _closure2_slot11 = var3;
            var8 = _closure1_slot4;
            var9 = var8.useMemo;
            var4 = new Array(3);
            var4[0] = var16;
            var4[1] = var6;
            var4[2] = var1;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 16;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.DisplayNameEffect;
                    var1 = var1.GRADIENT;
                    if(!(var3 !== var1)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var3 = _closure2_slot8;
                    var1 = new Array(1);
                    var1[0] = var3;
                    _fun0005_ip = 44; continue _fun0005;
case 42:
                    var1 = _closure2_slot10;
case 44:
                    return var1;
                }
            };
            var39 = var9.bind(var8)(var3, var4);
            var _closure2_slot12 = var39;
            var9 = var8.useMemo;
            var4 = new Array(4);
            var4[0] = var24;
            var4[1] = var22;
            var4[2] = var16;
            var4[3] = var39;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = _closure2_slot3;
                    var6 = null;
                    var4 = var6 == var1;
                    var2 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                    var4 = _closure2_slot3;
                    var1 = var4.fontId;
case 45:
                    var1 = var3 !== var1;
                    if(var1) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    var4 = _closure2_slot6;
                    var3 = _closure2_slot3;
                    var5 = var6 == var3;
                    var3 = undefined;
                    if(var5) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                    var5 = _closure2_slot3;
                    var3 = var5.effectId;
case 49:
                    var1 = var4 !== var3;
case 47:
                    if(var1) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 18;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.areArraysShallowEqual;
                    var3 = _closure2_slot12;
                    var8 = _closure2_slot3;
                    var8 = var6 == var8;
                    var2 = undefined;
                    if(var8) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                    var7 = _closure2_slot3;
                    var2 = var7.colors;
case 53:
                    if(!(var6 == var2)) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                    var2 = new Array(0);
case 55:
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = !var2;
case 51:
                    return var1;
                }
            };
            var10 = var9.bind(var8)(var3, var4);
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 19;
            var3 = var9[var3];
            var9 = var4.bind(var5)(var3);
            var4 = var9.useDisplayNameStylesHandleApply;
            var3 = {};
            var3['hasChanges'] = var10;
            var3['selectedFontId'] = var22;
            var3['selectedEffectId'] = var16;
            var3['selectedColors'] = var39;
            var11 = var43.defaultColors;
            var11 = var11[var12];
            var3['defaultColor'] = var11;
            var3['guildId'] = var15;
            var11 = function onClose() {
                var2 = _closure2_slot0;
                var1 = var2.goBack;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3['onClose'] = var11;
            var11 = var4.bind(var9)(var3);
            var9 = var8.useCallback;
            var4 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 20;
                    var3 = var8[var1];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var3);
                    var3 = var4.generateRandomDisplayNameStyles;
                    var3 = var3.bind(var4)();
                    var9 = var3.fontId;
                    var6 = var3.effectId;
                    var4 = var3.colors;
                    var5 = _closure2_slot5;
                    var5 = var5.bind(var1)(var9);
                    var5 = _closure2_slot7;
                    var5 = var5.bind(var1)(var6);
                    var5 = 16;
                    var5 = var8[var5];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.DisplayNameEffect;
                    var5 = var5.GRADIENT;
                    if(!(var6 !== var5)) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                    var6 = _closure2_slot9;
                    var5 = 0;
                    var5 = var4[var5];
                    var5 = var6.bind(var1)(var5);
                    _fun0007_ip = 59; continue _fun0007;
case 57:
                    var3 = _closure2_slot11;
                    var3 = var3.bind(var1)(var4);
case 59:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 21;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.track;
                    var2 = _closure1_slot10;
                    var2 = var2.DISPLAY_NAME_STYLES_SURPRISE_ME;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = new Array(0);
            var26 = var9.bind(var8)(var4, var3);
            var9 = var8.useCallback;
            var4 = new Array(1);
            var4[0] = var2;
            var3 = function() {
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
            var27 = var9.bind(var8)(var3, var4);
            var4 = var8.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
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
            var19 = var4.bind(var8)(var2, var3);
            var4 = var8.useCallback;
            var3 = new Array(2);
            var3[0] = var22;
            var3[1] = var25;
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
                var7 = _closure2_slot4;
                var3['selectedFontId'] = var7;
                var7 = _closure2_slot5;
                var3['onSelectFont'] = var7;
                var2 = _closure2_slot2;
                var3['displayName'] = var2;
                var2 = 'DisplayNameStylesFontPickerSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var21 = var4.bind(var8)(var2, var3);
            var4 = var8.useCallback;
            var3 = new Array(2);
            var3[0] = var16;
            var9 = var20 == var28;
            var2 = undefined;
            if(var9) { _fun0004_ip = 60; continue _fun0004 }
case 61:
            var2 = var28.id;
case 60:
            var3[1] = var2;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
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
                    var3 = 27;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var4 = var4.bind(var1)(var3, var2);
                    var3 = {};
                    var8 = _closure2_slot1;
                    var7 = null;
                    var8 = var7 == var8;
                    var7 = undefined;
                    if(var8) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                    var8 = _closure2_slot1;
                    var7 = var8.id;
case 62:
                    var3['userId'] = var7;
                    var7 = _closure2_slot6;
                    var3['selectedEffectId'] = var7;
                    var2 = _closure2_slot7;
                    var3['onSelectEffect'] = var2;
                    var2 = 'DisplayNameStylesEffectPickerSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                }
            };
            var31 = var4.bind(var8)(var2, var3);
            var4 = _closure1_slot4;
            var3 = var4.useCallback;
            var2 = new Array(3);
            var2[0] = var6;
            var2[1] = var1;
            var2[2] = var16;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var5 = _closure2_slot6;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.DisplayNameEffect;
                    var3 = var3.GRADIENT;
                    if(!(var5 !== var3)) { _fun0009_ip = 64; continue _fun0009 }
case 43:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 24;
                    var5 = var3[var5];
                    var8 = var6.bind(var1)(var5);
                    var7 = var8.openLazy;
                    var6 = _closure1_slot0;
                    var5 = 26;
                    var5 = var3[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = 29;
                    var5 = var3[var5];
                    var3 = var3.paths;
                    var6 = var6.bind(var1)(var5, var3);
                    var5 = {};
                    var3 = _closure2_slot8;
                    var5['selectedColor'] = var3;
                    var3 = _closure2_slot6;
                    var5['selectedEffectId'] = var3;
                    var3 = _closure2_slot9;
                    var5['onSelectColor'] = var3;
                    var3 = 'DisplayNameStylesColorPickerSheet';
                    var3 = var7.bind(var8)(var6, var3, var5);
                    _fun0009_ip = 65; continue _fun0009;
case 64:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 24;
                    var5 = var3[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.openLazy;
                    var7 = _closure1_slot0;
                    var4 = 26;
                    var4 = var3[var4];
                    var7 = var7.bind(var1)(var4);
                    var4 = 28;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var7.bind(var1)(var4, var3);
                    var3 = {};
                    var7 = _closure2_slot10;
                    var3['selectedColors'] = var7;
                    var2 = _closure2_slot11;
                    var3['onSelectColors'] = var2;
                    var2 = 'DisplayNameStylesGradientPickerSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
case 65:
                    return var1;
                }
            };
            var29 = var3.bind(var4)(var1, var2);
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var23 = 30;
            var1 = var6[var23];
            var1 = var2.bind(var5)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var4 = _closure1_slot1;
            var1 = 31;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)(var22);
            var41 = var2.bind(var3)(var1);
            var2 = var20 == var28;
            var1 = null;
            if(var2) { _fun0004_ip = 66; continue _fun0004 }
case 67:
            var4 = _closure1_slot13;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var14.container;
            var2['style'] = var6;
            var8 = _closure1_slot6;
            var6 = {};
            var9 = var14.contentContainer;
            var6['contentContainerStyle'] = var9;
            var13 = _closure1_slot12;
            var33 = _closure1_slot1;
            var30 = _closure1_slot2;
            var9 = 32;
            var9 = var30[var9];
            var12 = var33.bind(var5)(var9);
            var9 = {};
            var9['user'] = var28;
            var9['displayName'] = var25;
            var9['guildId'] = var15;
            var9['selectedFontId'] = var22;
            var9['selectedEffectId'] = var16;
            var9['selectedColors'] = var39;
            var12 = var13.bind(var5)(var12, var9);
            var9 = new Array(3);
            var9[0] = var12;
            var13 = _closure1_slot5;
            var12 = {};
            var16 = var14.fieldButtonGroup;
            var12['style'] = var16;
            var25 = _closure1_slot7;
            var16 = {};
            var16['onPress'] = var21;
            var21 = var14.fieldButton;
            var16['style'] = var21;
            var32 = _closure1_slot5;
            var22 = {};
            var37 = _closure1_slot12;
            var28 = _closure1_slot0;
            var34 = 33;
            var21 = var30[var34];
            var21 = var28.bind(var5)(var21);
            var36 = var21.Text;
            var35 = {'variant': 'heading-md/semibold', 'color': 'header-primary'};
            var21 = var30[var23];
            var21 = var28.bind(var5)(var21);
            var44 = var21.intl;
            var42 = var44.string;
            var21 = 34;
            var38 = var30[var21];
            var38 = var33.bind(var5)(var38);
            var38 = var38.0JCuGm;
            var38 = var42.bind(var44)(var38);
            var35['children'] = var38;
            var36 = var37.bind(var5)(var36, var35);
            var35 = new Array(2);
            var35[0] = var36;
            var38 = _closure1_slot12;
            var36 = var30[var34];
            var36 = var28.bind(var5)(var36);
            var37 = var36.Text;
            var36 = {'variant': 'text-md/normal', 'color': 'text-secondary'};
            var36['children'] = var41;
            var36 = var38.bind(var5)(var37, var36);
            var35[1] = var36;
            var22['children'] = var35;
            var32 = var4.bind(var5)(var32, var22);
            var22 = new Array(2);
            var22[0] = var32;
            var37 = _closure1_slot12;
            var35 = 35;
            var32 = var30[var35];
            var32 = var28.bind(var5)(var32);
            var36 = var32.ChevronSmallRightIcon;
            var32 = {};
            var38 = 'interactive-muted';
            var32['color'] = var38;
            var32 = var37.bind(var5)(var36, var32);
            var22[1] = var32;
            var16['children'] = var22;
            var22 = var4.bind(var5)(var25, var16);
            var16 = new Array(3);
            var16[0] = var22;
            var22 = {};
            var22['onPress'] = var31;
            var32 = var14.fieldButton;
            var31 = new Array(2);
            var31[0] = var32;
            var32 = var14.fieldButtonBorder;
            var31[1] = var32;
            var22['style'] = var31;
            var32 = _closure1_slot5;
            var31 = {};
            var41 = _closure1_slot12;
            var36 = var30[var34];
            var36 = var28.bind(var5)(var36);
            var37 = var36.Text;
            var36 = {'variant': 'heading-md/semibold', 'color': 'header-primary'};
            var42 = var30[var23];
            var42 = var28.bind(var5)(var42);
            var45 = var42.intl;
            var44 = var45.string;
            var42 = var30[var21];
            var42 = var33.bind(var5)(var42);
            var42 = var42.RVtMxT;
            var42 = var44.bind(var45)(var42);
            var36['children'] = var42;
            var37 = var41.bind(var5)(var37, var36);
            var36 = new Array(2);
            var36[0] = var37;
            var42 = _closure1_slot12;
            var37 = var30[var34];
            var37 = var28.bind(var5)(var37);
            var41 = var37.Text;
            var37 = {'variant': 'text-md/normal', 'color': 'text-secondary'};
            var43 = var43.name;
            var37['children'] = var43;
            var37 = var42.bind(var5)(var41, var37);
            var36[1] = var37;
            var31['children'] = var36;
            var32 = var4.bind(var5)(var32, var31);
            var31 = new Array(2);
            var31[0] = var32;
            var37 = _closure1_slot12;
            var32 = var30[var35];
            var32 = var28.bind(var5)(var32);
            var36 = var32.ChevronSmallRightIcon;
            var32 = {};
            var32['color'] = var38;
            var32 = var37.bind(var5)(var36, var32);
            var31[1] = var32;
            var22['children'] = var31;
            var22 = var4.bind(var5)(var25, var22);
            var16[1] = var22;
            var22 = {};
            var22['onPress'] = var29;
            var31 = var14.fieldButton;
            var29 = new Array(2);
            var29[0] = var31;
            var31 = var14.fieldButtonBorder;
            var29[1] = var31;
            var22['style'] = var29;
            var31 = _closure1_slot5;
            var29 = {};
            var37 = _closure1_slot12;
            var32 = var30[var34];
            var32 = var28.bind(var5)(var32);
            var36 = var32.Text;
            var32 = {'variant': 'heading-md/semibold', 'color': 'header-primary'};
            var41 = var30[var23];
            var41 = var28.bind(var5)(var41);
            var43 = var41.intl;
            var42 = var43.string;
            var41 = var30[var21];
            var41 = var33.bind(var5)(var41);
            var41 = var41.6OxgN7;
            var41 = var42.bind(var43)(var41);
            var32['children'] = var41;
            var36 = var37.bind(var5)(var36, var32);
            var32 = new Array(2);
            var32[0] = var36;
            var37 = _closure1_slot12;
            var34 = var30[var34];
            var34 = var28.bind(var5)(var34);
            var36 = var34.Text;
            var34 = {'variant': 'text-md/normal', 'color': 'text-secondary'};
            var41 = var39.map;
            var40 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 36;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.int2hex;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var42 = var41.bind(var39)(var40);
            var41 = var42.join;
            var40 = ', ';
            var40 = var41.bind(var42)(var40);
            var34['children'] = var40;
            var34 = var37.bind(var5)(var36, var34);
            var32[1] = var34;
            var29['children'] = var32;
            var31 = var4.bind(var5)(var31, var29);
            var29 = new Array(2);
            var29[0] = var31;
            var32 = _closure1_slot5;
            var31 = {};
            var34 = var14.fieldButtonChevron;
            var31['style'] = var34;
            var37 = _closure1_slot12;
            var36 = _closure1_slot17;
            var34 = {};
            var34['colors'] = var39;
            var36 = var37.bind(var5)(var36, var34);
            var34 = new Array(2);
            var34[0] = var36;
            var37 = _closure1_slot12;
            var35 = var30[var35];
            var35 = var28.bind(var5)(var35);
            var36 = var35.ChevronSmallRightIcon;
            var35 = {};
            var35['color'] = var38;
            var35 = var37.bind(var5)(var36, var35);
            var34[1] = var35;
            var31['children'] = var34;
            var31 = var4.bind(var5)(var32, var31);
            var29[1] = var31;
            var22['children'] = var29;
            var22 = var4.bind(var5)(var25, var22);
            var16[2] = var22;
            var12['children'] = var16;
            var12 = var4.bind(var5)(var13, var12);
            var9[1] = var12;
            var13 = _closure1_slot5;
            var12 = {};
            var14 = var14.buttonContainer;
            var12['style'] = var14;
            var25 = _closure1_slot12;
            var16 = 37;
            var14 = var30[var16];
            var14 = var28.bind(var5)(var14);
            var22 = var14.Button;
            var14 = {'text': null, 'onPress': null, 'variant': 'tertiary', 'size': 'lg', 'grow': true, 'icon': null, 'iconPosition': 'start'};
            var29 = var30[var23];
            var29 = var28.bind(var5)(var29);
            var32 = var29.intl;
            var31 = var32.string;
            var29 = var30[var21];
            var29 = var33.bind(var5)(var29);
            var29 = var29.NOGFds;
            var29 = var31.bind(var32)(var29);
            var14['text'] = var29;
            var14['onPress'] = var26;
            var29 = _closure1_slot12;
            var26 = 38;
            var26 = var30[var26];
            var26 = var28.bind(var5)(var26);
            var28 = var26.DiceIcon;
            var26 = {};
            var26 = var29.bind(var5)(var28, var26);
            var14['icon'] = var26;
            var22 = var25.bind(var5)(var22, var14);
            var14 = new Array(3);
            var14[0] = var22;
            var22 = var20 == var15;
            if(!var22) { _fun0004_ip = 68; continue _fun0004 }
case 69:
            var22 = var20 != var24;
case 68:
            if(!var22) { _fun0004_ip = 70; continue _fun0004 }
case 71:
            var26 = _closure1_slot12;
            var28 = _closure1_slot0;
            var30 = _closure1_slot2;
            var24 = var30[var16];
            var24 = var28.bind(var5)(var24);
            var25 = var24.Button;
            var24 = {'text': null, 'onPress': null, 'variant': 'tertiary', 'size': 'lg', 'grow': true, 'icon': null, 'iconPosition': 'start'};
            var29 = var30[var23];
            var29 = var28.bind(var5)(var29);
            var32 = var29.intl;
            var31 = var32.string;
            var33 = _closure1_slot1;
            var29 = var30[var21];
            var29 = var33.bind(var5)(var29);
            var29 = var29.ymq8WQ;
            var29 = var31.bind(var32)(var29);
            var24['text'] = var29;
            var24['onPress'] = var27;
            var29 = _closure1_slot12;
            var27 = 39;
            var27 = var30[var27];
            var27 = var28.bind(var5)(var27);
            var28 = var27.DenyIcon;
            var27 = {};
            var27 = var29.bind(var5)(var28, var27);
            var24['icon'] = var27;
            var22 = var26.bind(var5)(var25, var24);
case 70:
            var14[1] = var22;
            var15 = var20 != var15;
            if(!var15) { _fun0004_ip = 72; continue _fun0004 }
case 73:
            var17 = var20 != var17;
            if(var17) { _fun0004_ip = 74; continue _fun0004 }
case 75:
            var17 = var20 != var18;
case 74:
            var15 = var17;
case 72:
            if(!var15) { _fun0004_ip = 76; continue _fun0004 }
case 77:
            var18 = _closure1_slot12;
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var16 = var22[var16];
            var16 = var20.bind(var5)(var16);
            var17 = var16.Button;
            var16 = {'text': null, 'onPress': null, 'variant': 'tertiary', 'size': 'lg', 'grow': true, 'icon': null, 'iconPosition': 'start'};
            var23 = var22[var23];
            var23 = var20.bind(var5)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var25 = _closure1_slot1;
            var21 = var22[var21];
            var21 = var25.bind(var5)(var21);
            var21 = var21.j/KRxc;
            var21 = var23.bind(var24)(var21);
            var16['text'] = var21;
            var16['onPress'] = var19;
            var21 = _closure1_slot12;
            var19 = 39;
            var19 = var22[var19];
            var19 = var20.bind(var5)(var19);
            var20 = var19.DenyIcon;
            var19 = {};
            var19 = var21.bind(var5)(var20, var19);
            var16['icon'] = var19;
            var15 = var18.bind(var5)(var17, var16);
case 76:
            var14[2] = var15;
            var12['children'] = var14;
            var12 = var4.bind(var5)(var13, var12);
            var9[2] = var12;
            var6['children'] = var9;
            var8 = var4.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot12;
            var8 = _closure1_slot18;
            var7 = {};
            var7['onPress'] = var11;
            var7['visible'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 66:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
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
            var3 = 35;
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
            var2 = 35;
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
            var1 = 39;
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
        var2 = 40;
        var2 = var15[var2];
        var2 = var6.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var12 = var2.bottom;
        var5 = 41;
        var2 = var15[var5];
        var7 = var14.bind(var4)(var2);
        var3 = var7.useAnimatedProps;
        var2 = function o() {
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
        var1 = function l() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure2_slot0;
                var6 = 0;
                if(!var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var6 = 1;
case 8:
                var3 = _closure2_slot0;
                var9 = 60;
                if(!var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var9 = 0;
case 10:
                var1 = _closure2_slot0;
                var10 = 0.9;
                if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var10 = 1;
case 12:
                var1 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'marginLeft': 24, 'marginRight': 24, 'flexDirection': 'column', 'justifyContent': 'flex-end'};
                var4 = {};
                var5 = _closure2_slot1;
                var3 = var9;
                if(var5) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var7 = 42;
                var8 = var8[var7];
                var7 = undefined;
                var8 = var11.bind(var7)(var8);
                var7 = var8.withSpring;
                var5 = _closure1_slot11;
                var3 = var7.bind(var8)(var9, var5);
case 14:
                var4['translateY'] = var3;
                var3 = new Array(2);
                var3[0] = var4;
                var4 = {};
                var7 = _closure2_slot1;
                var5 = var10;
                if(var7) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var8 = 42;
                var9 = var9[var8];
                var8 = undefined;
                var9 = var11.bind(var8)(var9);
                var8 = var9.withSpring;
                var7 = _closure1_slot11;
                var5 = var8.bind(var9)(var10, var7);
case 16:
                var4['scale'] = var5;
                var3[1] = var4;
                var1['transform'] = var3;
                var3 = _closure2_slot1;
                var2 = var6;
                if(var3) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 42;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var7.bind(var4)(var5);
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
        var7['reducedMotion'] = var10;
        var10 = 42;
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
        var8 = 36;
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
    var13 = var13.colors;
    var13 = var13.BG_BASE_PRIMARY;
    var9['backgroundColor'] = var13;
    var9['borderTopWidth'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_FAINT;
    var9['borderTopColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['gap'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['marginTop'] = var10;
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
    var4 = 43;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DisplayNameStylesEditScreen() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = _closure1_slot14;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var1 = var5[var2];
            var7 = var3.bind(var4)(var1);
            var1 = var7.useRoute;
            var1 = var1.bind(var7)();
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useNavigation;
            var3 = var2.bind(var3)();
            var _closure2_slot0 = var3;
            var1 = var1.params;
            var19 = null;
            if(!(var19 == var1)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var1 = {};
case 20:
            var14 = var1.guildId;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 11;
            var1 = var7[var1];
            var9 = var5.bind(var4)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var8.bind(var9)(var2, var1);
            var1 = 12;
            var1 = var7[var1];
            var2 = var5.bind(var4)(var1);
            var1 = var2.useDisplayNameStylesPendingName;
            var2 = var1.bind(var2)(var8, var14);
            var _closure2_slot1 = var2;
            var1 = 13;
            var1 = var7[var1];
            var5 = var5.bind(var4)(var1);
            var1 = var5.useGuildMemberOrUserPendingDisplayNameStyles;
            var1 = var1.bind(var5)(var8, var14);
            var16 = var1.guildDisplayNameStyles;
            var17 = var1.pendingDisplayNameStyles;
            var5 = _closure1_slot1;
            var1 = 14;
            var1 = var7[var1];
            var5 = var5.bind(var4)(var1);
            var1 = {};
            var9 = var19 == var8;
            var7 = undefined;
            if(var9) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var7 = var8.id;
case 22:
            var1['userId'] = var7;
            var1['guildId'] = var14;
            var1['pendingDisplayNameStyles'] = var17;
            var23 = var5.bind(var4)(var1);
            var _closure2_slot2 = var23;
            var7 = _closure1_slot4;
            var5 = var7.useState;
            var8 = var19 == var23;
            var1 = undefined;
            if(var8) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var1 = var23.fontId;
case 24:
            if(!(var19 == var1)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 15;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.DisplayNameFont;
            var1 = var8.DEFAULT;
case 26:
            var5 = var5.bind(var7)(var1);
            var1 = _closure1_slot3;
            var11 = 2;
            var1 = var1.bind(var4)(var5, var11);
            var20 = 0;
            var5 = var1[var20];
            var _closure2_slot3 = var5;
            var9 = 1;
            var1 = var1[var9];
            var _closure2_slot4 = var1;
            var8 = _closure1_slot4;
            var7 = var8.useState;
            var10 = var19 == var23;
            var1 = undefined;
            if(var10) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var1 = var23.effectId;
case 28:
            if(!(var19 == var1)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 16;
            var10 = var15[var10];
            var10 = var12.bind(var4)(var10);
            var10 = var10.DisplayNameEffect;
            var1 = var10.SOLID;
case 30:
            var7 = var7.bind(var8)(var1);
            var1 = _closure1_slot3;
            var7 = var1.bind(var4)(var7, var11);
            var1 = var7[var20];
            var _closure2_slot5 = var1;
            var7 = var7[var9];
            var _closure2_slot6 = var7;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = 17;
            var10 = var7[var8];
            var15 = var12.bind(var4)(var10);
            var10 = var15.useDisplayNameStylesEffectConfig;
            var41 = var10.bind(var15)(var1);
            var8 = var7[var8];
            var10 = var12.bind(var4)(var8);
            var8 = var10.useDisplayNameStylesEffectConfig;
            var22 = 16;
            var7 = var7[var22];
            var7 = var12.bind(var4)(var7);
            var7 = var7.DisplayNameEffect;
            var7 = var7.GRADIENT;
            var15 = var8.bind(var10)(var7);
            var7 = var19 == var23;
            var12 = undefined;
            if(var7) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var12 = var23.colors;
case 32:
            if(!(var19 == var12)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var12 = new Array(0);
case 34:
            var10 = _closure1_slot4;
            var8 = var10.useState;
            var7 = var12.length;
            if(!(var7 > var20)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var18 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var22];
            var7 = var18.bind(var4)(var7);
            var7 = var7.DisplayNameEffect;
            var7 = var7.GRADIENT;
            if(!(var1 === var7)) { _fun0004_ip = 38; continue _fun0004 }
case 36:
            var7 = var41.defaultColors;
            var7 = var7[var20];
            _fun0004_ip = 39; continue _fun0004;
case 38:
            var7 = var12[var20];
case 39:
            var8 = var8.bind(var10)(var7);
            var7 = _closure1_slot3;
            var7 = var7.bind(var4)(var8, var11);
            var8 = var7[var20];
            var _closure2_slot7 = var8;
            var7 = var7[var9];
            var _closure2_slot8 = var7;
            var10 = _closure1_slot4;
            var7 = var10.useState;
            var18 = var12.length;
            if(!(var18 > var20)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var22];
            var18 = var21.bind(var4)(var18);
            var18 = var18.DisplayNameEffect;
            var18 = var18.GRADIENT;
            if(!(var1 !== var18)) { _fun0004_ip = 42; continue _fun0004 }
case 40:
            var12 = var15.defaultColors;
case 42:
            var10 = var7.bind(var10)(var12);
            var7 = _closure1_slot3;
            var7 = var7.bind(var4)(var10, var11);
            var11 = var7[var20];
            var _closure2_slot9 = var11;
            var7 = var7[var9];
            var _closure2_slot10 = var7;
            var7 = _closure1_slot4;
            var12 = var7.useMemo;
            var10 = new Array(3);
            var10[0] = var1;
            var10[1] = var11;
            var10[2] = var8;
            var9 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 16;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.DisplayNameEffect;
                    var1 = var1.GRADIENT;
                    if(!(var3 !== var1)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                    var3 = _closure2_slot7;
                    var1 = new Array(1);
                    var1[0] = var3;
                    _fun0005_ip = 45; continue _fun0005;
case 43:
                    var1 = _closure2_slot9;
case 45:
                    return var1;
                }
            };
            var37 = var12.bind(var7)(var9, var10);
            var _closure2_slot11 = var37;
            var12 = var7.useMemo;
            var10 = new Array(4);
            var10[0] = var23;
            var10[1] = var5;
            var10[2] = var1;
            var10[3] = var37;
            var9 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = _closure2_slot2;
                    var6 = null;
                    var4 = var6 == var1;
                    var2 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var4 = _closure2_slot2;
                    var1 = var4.fontId;
case 46:
                    var1 = var3 !== var1;
                    if(var1) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                    var4 = _closure2_slot5;
                    var3 = _closure2_slot2;
                    var5 = var6 == var3;
                    var3 = undefined;
                    if(var5) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var5 = _closure2_slot2;
                    var3 = var5.effectId;
case 50:
                    var1 = var4 !== var3;
case 48:
                    if(var1) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 18;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.areArraysShallowEqual;
                    var3 = _closure2_slot11;
                    var8 = _closure2_slot2;
                    var8 = var6 == var8;
                    var2 = undefined;
                    if(var8) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                    var7 = _closure2_slot2;
                    var2 = var7.colors;
case 54:
                    if(!(var6 == var2)) { _fun0006_ip = 17; continue _fun0006 }
case 56:
                    var2 = new Array(0);
case 17:
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = !var2;
case 52:
                    return var1;
                }
            };
            var9 = var12.bind(var7)(var9, var10);
            var27 = _closure1_slot0;
            var29 = _closure1_slot2;
            var10 = 19;
            var10 = var29[var10];
            var15 = var27.bind(var4)(var10);
            var12 = var15.useDisplayNameStylesHandleApply;
            var10 = {};
            var10['hasChanges'] = var9;
            var10['selectedFontId'] = var5;
            var10['selectedEffectId'] = var1;
            var10['selectedColors'] = var37;
            var18 = var41.defaultColors;
            var18 = var18[var20];
            var10['defaultColor'] = var18;
            var10['guildId'] = var14;
            var18 = function onClose() {
                var2 = _closure2_slot0;
                var1 = var2.goBack;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10['onClose'] = var18;
            var10 = var12.bind(var15)(var10);
            var18 = var7.useCallback;
            var15 = function() {
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
                    var5 = _closure2_slot4;
                    var5 = var5.bind(var1)(var9);
                    var5 = _closure2_slot6;
                    var5 = var5.bind(var1)(var6);
                    var5 = 16;
                    var5 = var8[var5];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.DisplayNameEffect;
                    var5 = var5.GRADIENT;
                    if(!(var6 !== var5)) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                    var6 = _closure2_slot8;
                    var5 = 0;
                    var5 = var4[var5];
                    var5 = var6.bind(var1)(var5);
                    _fun0007_ip = 59; continue _fun0007;
case 57:
                    var3 = _closure2_slot10;
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
            var12 = new Array(0);
            var25 = var18.bind(var7)(var15, var12);
            var18 = var7.useCallback;
            var15 = new Array(1);
            var15[0] = var3;
            var12 = function() {
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
            var26 = var18.bind(var7)(var12, var15);
            var15 = var7.useCallback;
            var12 = new Array(1);
            var12[0] = var3;
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
            var18 = var15.bind(var7)(var3, var12);
            var12 = var7.useCallback;
            var3 = new Array(2);
            var3[0] = var5;
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
            var15 = var12.bind(var7)(var2, var3);
            var12 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var1;
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
                var3 = 27;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var7 = _closure2_slot5;
                var3['selectedEffectId'] = var7;
                var2 = _closure2_slot6;
                var3['onSelectEffect'] = var2;
                var2 = 'DisplayNameStylesEffectPickerSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var28 = var12.bind(var7)(var2, var3);
            var3 = var7.useCallback;
            var2 = new Array(3);
            var2[0] = var11;
            var2[1] = var8;
            var2[2] = var1;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = _closure2_slot5;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.DisplayNameEffect;
                    var3 = var3.GRADIENT;
                    if(!(var5 !== var3)) { _fun0008_ip = 60; continue _fun0008 }
case 44:
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
                    var3 = _closure2_slot7;
                    var5['selectedColor'] = var3;
                    var3 = _closure2_slot5;
                    var5['selectedEffectId'] = var3;
                    var3 = _closure2_slot8;
                    var5['onSelectColor'] = var3;
                    var3 = 'DisplayNameStylesColorPickerSheet';
                    var3 = var7.bind(var8)(var6, var3, var5);
                    _fun0008_ip = 61; continue _fun0008;
case 60:
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
                    var7 = _closure2_slot9;
                    var3['selectedColors'] = var7;
                    var2 = _closure2_slot10;
                    var3['onSelectColors'] = var2;
                    var2 = 'DisplayNameStylesGradientPickerSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
case 61:
                    return var1;
                }
            };
            var24 = var3.bind(var7)(var1, var2);
            var22 = 30;
            var1 = var29[var22];
            var1 = var27.bind(var4)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var32 = _closure1_slot1;
            var1 = 31;
            var1 = var29[var1];
            var1 = var32.bind(var4)(var1);
            var1 = var1.bind(var4)(var5);
            var39 = var2.bind(var3)(var1);
            var3 = _closure1_slot13;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var13.container;
            var1['style'] = var5;
            var7 = _closure1_slot6;
            var5 = {};
            var8 = var13.contentContainer;
            var5['contentContainerStyle'] = var8;
            var11 = _closure1_slot5;
            var8 = {};
            var12 = var13.fieldButtonGroup;
            var8['style'] = var12;
            var21 = _closure1_slot7;
            var12 = {};
            var12['onPress'] = var15;
            var15 = var13.fieldButton;
            var12['style'] = var15;
            var30 = _closure1_slot5;
            var15 = {};
            var35 = _closure1_slot12;
            var31 = 32;
            var20 = var29[var31];
            var20 = var27.bind(var4)(var20);
            var34 = var20.Text;
            var33 = {'variant': 'heading-md/semibold', 'color': 'header-primary'};
            var20 = var29[var22];
            var20 = var27.bind(var4)(var20);
            var42 = var20.intl;
            var40 = var42.string;
            var20 = 33;
            var36 = var29[var20];
            var36 = var32.bind(var4)(var36);
            var36 = var36.0JCuGm;
            var36 = var40.bind(var42)(var36);
            var33['children'] = var36;
            var34 = var35.bind(var4)(var34, var33);
            var33 = new Array(2);
            var33[0] = var34;
            var36 = _closure1_slot12;
            var34 = var29[var31];
            var34 = var27.bind(var4)(var34);
            var35 = var34.Text;
            var34 = {'variant': 'text-md/normal', 'color': 'text-secondary'};
            var34['children'] = var39;
            var34 = var36.bind(var4)(var35, var34);
            var33[1] = var34;
            var15['children'] = var33;
            var30 = var3.bind(var4)(var30, var15);
            var15 = new Array(2);
            var15[0] = var30;
            var35 = _closure1_slot12;
            var33 = 34;
            var30 = var29[var33];
            var30 = var27.bind(var4)(var30);
            var34 = var30.ChevronSmallRightIcon;
            var30 = {};
            var36 = 'interactive-muted';
            var30['color'] = var36;
            var30 = var35.bind(var4)(var34, var30);
            var15[1] = var30;
            var12['children'] = var15;
            var15 = var3.bind(var4)(var21, var12);
            var12 = new Array(3);
            var12[0] = var15;
            var15 = {};
            var15['onPress'] = var28;
            var30 = var13.fieldButton;
            var28 = new Array(2);
            var28[0] = var30;
            var30 = var13.fieldButtonBorder;
            var28[1] = var30;
            var15['style'] = var28;
            var30 = _closure1_slot5;
            var28 = {};
            var39 = _closure1_slot12;
            var34 = var29[var31];
            var34 = var27.bind(var4)(var34);
            var35 = var34.Text;
            var34 = {'variant': 'heading-md/semibold', 'color': 'header-primary'};
            var40 = var29[var22];
            var40 = var27.bind(var4)(var40);
            var43 = var40.intl;
            var42 = var43.string;
            var40 = var29[var20];
            var40 = var32.bind(var4)(var40);
            var40 = var40.RVtMxT;
            var40 = var42.bind(var43)(var40);
            var34['children'] = var40;
            var35 = var39.bind(var4)(var35, var34);
            var34 = new Array(2);
            var34[0] = var35;
            var40 = _closure1_slot12;
            var35 = var29[var31];
            var35 = var27.bind(var4)(var35);
            var39 = var35.Text;
            var35 = {'variant': 'text-md/normal', 'color': 'text-secondary'};
            var41 = var41.name;
            var35['children'] = var41;
            var35 = var40.bind(var4)(var39, var35);
            var34[1] = var35;
            var28['children'] = var34;
            var30 = var3.bind(var4)(var30, var28);
            var28 = new Array(2);
            var28[0] = var30;
            var35 = _closure1_slot12;
            var30 = var29[var33];
            var30 = var27.bind(var4)(var30);
            var34 = var30.ChevronSmallRightIcon;
            var30 = {};
            var30['color'] = var36;
            var30 = var35.bind(var4)(var34, var30);
            var28[1] = var30;
            var15['children'] = var28;
            var15 = var3.bind(var4)(var21, var15);
            var12[1] = var15;
            var15 = {};
            var15['onPress'] = var24;
            var28 = var13.fieldButton;
            var24 = new Array(2);
            var24[0] = var28;
            var28 = var13.fieldButtonBorder;
            var24[1] = var28;
            var15['style'] = var24;
            var28 = _closure1_slot5;
            var24 = {};
            var35 = _closure1_slot12;
            var30 = var29[var31];
            var30 = var27.bind(var4)(var30);
            var34 = var30.Text;
            var30 = {'variant': 'heading-md/semibold', 'color': 'header-primary'};
            var39 = var29[var22];
            var39 = var27.bind(var4)(var39);
            var41 = var39.intl;
            var40 = var41.string;
            var39 = var29[var20];
            var39 = var32.bind(var4)(var39);
            var39 = var39.6OxgN7;
            var39 = var40.bind(var41)(var39);
            var30['children'] = var39;
            var34 = var35.bind(var4)(var34, var30);
            var30 = new Array(2);
            var30[0] = var34;
            var35 = _closure1_slot12;
            var31 = var29[var31];
            var31 = var27.bind(var4)(var31);
            var34 = var31.Text;
            var31 = {'variant': 'text-md/normal', 'color': 'text-secondary'};
            var39 = var37.map;
            var38 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 35;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.int2hex;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var40 = var39.bind(var37)(var38);
            var39 = var40.join;
            var38 = ', ';
            var38 = var39.bind(var40)(var38);
            var31['children'] = var38;
            var31 = var35.bind(var4)(var34, var31);
            var30[1] = var31;
            var24['children'] = var30;
            var28 = var3.bind(var4)(var28, var24);
            var24 = new Array(2);
            var24[0] = var28;
            var30 = _closure1_slot5;
            var28 = {};
            var31 = var13.fieldButtonChevron;
            var28['style'] = var31;
            var35 = _closure1_slot12;
            var34 = _closure1_slot17;
            var31 = {};
            var31['colors'] = var37;
            var34 = var35.bind(var4)(var34, var31);
            var31 = new Array(2);
            var31[0] = var34;
            var35 = _closure1_slot12;
            var33 = var29[var33];
            var33 = var27.bind(var4)(var33);
            var34 = var33.ChevronSmallRightIcon;
            var33 = {};
            var33['color'] = var36;
            var33 = var35.bind(var4)(var34, var33);
            var31[1] = var33;
            var28['children'] = var31;
            var28 = var3.bind(var4)(var30, var28);
            var24[1] = var28;
            var15['children'] = var24;
            var15 = var3.bind(var4)(var21, var15);
            var12[2] = var15;
            var8['children'] = var12;
            var11 = var3.bind(var4)(var11, var8);
            var8 = new Array(2);
            var8[0] = var11;
            var12 = _closure1_slot5;
            var11 = {};
            var13 = var13.buttonContainer;
            var11['style'] = var13;
            var24 = _closure1_slot12;
            var15 = 36;
            var13 = var29[var15];
            var13 = var27.bind(var4)(var13);
            var21 = var13.Button;
            var13 = {'text': null, 'onPress': null, 'variant': 'tertiary', 'size': 'lg', 'grow': true, 'icon': null, 'iconPosition': 'start'};
            var28 = var29[var22];
            var28 = var27.bind(var4)(var28);
            var31 = var28.intl;
            var30 = var31.string;
            var28 = var29[var20];
            var28 = var32.bind(var4)(var28);
            var28 = var28.NOGFds;
            var28 = var30.bind(var31)(var28);
            var13['text'] = var28;
            var13['onPress'] = var25;
            var28 = _closure1_slot12;
            var25 = 37;
            var25 = var29[var25];
            var25 = var27.bind(var4)(var25);
            var27 = var25.DiceIcon;
            var25 = {};
            var25 = var28.bind(var4)(var27, var25);
            var13['icon'] = var25;
            var21 = var24.bind(var4)(var21, var13);
            var13 = new Array(3);
            var13[0] = var21;
            var21 = var19 == var14;
            if(!var21) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            var21 = var19 != var23;
case 62:
            if(!var21) { _fun0004_ip = 64; continue _fun0004 }
case 65:
            var25 = _closure1_slot12;
            var27 = _closure1_slot0;
            var29 = _closure1_slot2;
            var23 = var29[var15];
            var23 = var27.bind(var4)(var23);
            var24 = var23.Button;
            var23 = {'text': null, 'onPress': null, 'variant': 'tertiary', 'size': 'lg', 'grow': true, 'icon': null, 'iconPosition': 'start'};
            var28 = var29[var22];
            var28 = var27.bind(var4)(var28);
            var31 = var28.intl;
            var30 = var31.string;
            var32 = _closure1_slot1;
            var28 = var29[var20];
            var28 = var32.bind(var4)(var28);
            var28 = var28.ymq8WQ;
            var28 = var30.bind(var31)(var28);
            var23['text'] = var28;
            var23['onPress'] = var26;
            var28 = _closure1_slot12;
            var26 = 38;
            var26 = var29[var26];
            var26 = var27.bind(var4)(var26);
            var27 = var26.DenyIcon;
            var26 = {};
            var26 = var28.bind(var4)(var27, var26);
            var23['icon'] = var26;
            var21 = var25.bind(var4)(var24, var23);
case 64:
            var13[1] = var21;
            var14 = var19 != var14;
            if(!var14) { _fun0004_ip = 66; continue _fun0004 }
case 67:
            var16 = var19 != var16;
            if(var16) { _fun0004_ip = 68; continue _fun0004 }
case 69:
            var16 = var19 != var17;
case 68:
            var14 = var16;
case 66:
            if(!var14) { _fun0004_ip = 70; continue _fun0004 }
case 71:
            var17 = _closure1_slot12;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var15 = var21[var15];
            var15 = var19.bind(var4)(var15);
            var16 = var15.Button;
            var15 = {'text': null, 'onPress': null, 'variant': 'tertiary', 'size': 'lg', 'grow': true, 'icon': null, 'iconPosition': 'start'};
            var22 = var21[var22];
            var22 = var19.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var24 = _closure1_slot1;
            var20 = var21[var20];
            var20 = var24.bind(var4)(var20);
            var20 = var20.j/KRxc;
            var20 = var22.bind(var23)(var20);
            var15['text'] = var20;
            var15['onPress'] = var18;
            var20 = _closure1_slot12;
            var18 = 38;
            var18 = var21[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.DenyIcon;
            var18 = {};
            var18 = var20.bind(var4)(var19, var18);
            var15['icon'] = var18;
            var14 = var17.bind(var4)(var16, var15);
case 70:
            var13[2] = var14;
            var11['children'] = var13;
            var11 = var3.bind(var4)(var12, var11);
            var8[1] = var11;
            var5['children'] = var8;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot12;
            var7 = _closure1_slot18;
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
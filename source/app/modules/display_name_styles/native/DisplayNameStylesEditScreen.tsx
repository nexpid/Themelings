// app/modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function ApplyButton(arg1) {
        var2 = arg1;
        var11 = var2.onPress;
        var _closure2_slot0 = var11;
        var16 = var2.visible;
        var _closure2_slot1 = var16;
        var14 = _closure1_slot0;
        var15 = _closure1_slot2;
        var2 = 14;
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
        var13 = var5.bind(var6)(var3, var2);
        var _closure2_slot2 = var13;
        var6 = _closure1_slot1;
        var2 = 46;
        var2 = var15[var2];
        var2 = var6.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var12 = var2.bottom;
        var5 = 47;
        var2 = var15[var5];
        var7 = var14.bind(var4)(var2);
        var3 = var7.useAnimatedProps;
        var2 = function o() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = {};
                var3 = _closure2_slot1;
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
        var9['visible'] = var16;
        var2['__closure'] = var9;
        var9 = 2349569076845.0;
        var2['__workletHash'] = var9;
        var9 = _closure1_slot21;
        var2['__initData'] = var9;
        var9 = var3.bind(var7)(var2);
        var2 = var15[var5];
        var7 = var14.bind(var4)(var2);
        var3 = var7.useAnimatedStyle;
        var2 = function s() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot1;
                var6 = 0;
                if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var6 = 1;
case 4:
                var3 = _closure2_slot1;
                var11 = 60;
                if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var11 = 0;
case 6:
                var1 = _closure2_slot1;
                var12 = 0.9;
                if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var12 = 1;
case 8:
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
                var8 = _closure2_slot2;
                var4 = var11;
                if(var8) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 48;
                var8 = var10[var8];
                var10 = var9.bind(var7)(var8);
                var9 = var10.withSpring;
                var8 = _closure1_slot11;
                var4 = var9.bind(var10)(var11, var8);
case 10:
                var5['translateY'] = var4;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var9 = _closure2_slot2;
                var8 = var12;
                if(var9) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 48;
                var9 = var11[var9];
                var11 = var10.bind(var7)(var9);
                var10 = var11.withSpring;
                var9 = _closure1_slot11;
                var8 = var10.bind(var11)(var12, var9);
case 12:
                var5['scale'] = var8;
                var4[1] = var5;
                var1['transform'] = var4;
                var4 = _closure2_slot2;
                var2 = var6;
                if(var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 48;
                var4 = var8[var4];
                var5 = var5.bind(var7)(var4);
                var4 = var5.withSpring;
                var3 = _closure1_slot11;
                var2 = var4.bind(var5)(var6, var3);
case 14:
                var1['opacity'] = var2;
                return var1;
            }
        };
        var10 = {};
        var10['visible'] = var16;
        var16 = 9;
        var16 = var15[var16];
        var16 = var6.bind(var4)(var16);
        var10['tokens'] = var16;
        var10['reducedMotion'] = var13;
        var13 = 48;
        var13 = var15[var13];
        var13 = var14.bind(var4)(var13);
        var13 = var13.withSpring;
        var10['withSpring'] = var13;
        var13 = _closure1_slot11;
        var10['MEDIA_PICKER_SEND_BUTTON_SPRING'] = var13;
        var2['__closure'] = var10;
        var10 = 10858711048130.0;
        var2['__workletHash'] = var10;
        var10 = _closure1_slot22;
        var2['__initData'] = var10;
        var7 = var3.bind(var7)(var2);
        var10 = _closure1_slot4;
        var3 = var10.useCallback;
        var2 = new Array(1);
        var2[0] = var11;
        var1 = function() {
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 26;
            var3 = var6[var2];
            var1 = undefined;
            var4 = var5.bind(var1)(var3);
            var3 = var4.triggerHapticFeedback;
            var2 = var6[var2];
            var2 = var5.bind(var1)(var2);
            var2 = var2.HapticFeedbackTypes;
            var2 = var2.IMPACT_MEDIUM;
            var2 = var3.bind(var4)(var2);
            var2 = _closure2_slot0;
            var2 = var2.bind(var1)();
            return var1;
        };
        var11 = var3.bind(var10)(var1, var2);
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
        var8 = 45;
        var8 = var15[var8];
        var8 = var14.bind(var4)(var8);
        var9 = var8.Button;
        var8 = {'variant': 'primary', 'onPress': null, 'size': 'lg'};
        var8['onPress'] = var11;
        var11 = 36;
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
    var _closure1_slot23 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var13 = 1;
    var7 = var6[var13];
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
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
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var13;
    var11 = 9;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var10['backgroundColor'] = var14;
    var4['container'] = var10;
    var10 = {};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var10['padding'] = var14;
    var4['contentContainer'] = var10;
    var10 = {};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_MUTED;
    var10['backgroundColor'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var10['borderRadius'] = var14;
    var4['fieldButtonGroup'] = var10;
    var10 = {'padding': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var10['padding'] = var14;
    var14 = 'row';
    var4['fieldButton'] = var10;
    var10 = {};
    var10['borderTopWidth'] = var13;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BORDER_SUBTLE;
    var10['borderTopColor'] = var15;
    var4['fieldButtonBorder'] = var10;
    var10 = {};
    var10['flexDirection'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_24;
    var10['gap'] = var14;
    var4['fieldButtonChevron'] = var10;
    var10 = {};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var10['marginVertical'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var10['backgroundColor'] = var14;
    var10['borderTopWidth'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_MUTED;
    var10['borderTopColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10['gap'] = var11;
    var4['buttonContainer'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = 10;
    var7 = var6[var4];
    var7 = var5.bind(var1)(var7);
    var10 = var7.ChevronSmallRightIcon;
    var7 = {};
    var9 = 'icon-muted';
    var7['color'] = var9;
    var7 = var8.bind(var1)(var10, var7);
    var _closure1_slot15 = var7;
    var7 = var6[var4];
    var7 = var5.bind(var1)(var7);
    var10 = var7.ChevronSmallRightIcon;
    var7 = {};
    var7['color'] = var9;
    var7 = var8.bind(var1)(var10, var7);
    var _closure1_slot16 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ChevronSmallRightIcon;
    var4 = {};
    var4['color'] = var9;
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot17 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.DiceIcon;
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot18 = var4;
    var4 = 12;
    var7 = var6[var4];
    var7 = var5.bind(var1)(var7);
    var9 = var7.DenyIcon;
    var7 = {};
    var7 = var8.bind(var1)(var9, var7);
    var _closure1_slot19 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.DenyIcon;
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = "function DisplayNameStylesEditScreenTsx1(){const{visible}=this.__closure;return{pointerEvents:visible?'box-none':'none'};}";
    var4['code'] = var7;
    var _closure1_slot21 = var4;
    var4 = {};
    var7 = "function DisplayNameStylesEditScreenTsx2(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.spacing.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}";
    var4['code'] = var7;
    var _closure1_slot22 = var4;
    var4 = 49;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DisplayNameStylesEditScreen() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = _closure1_slot14;
            var5 = undefined;
            var21 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 13;
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
            var27 = null;
            if(!(var27 == var1)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var1 = {};
case 16:
            var22 = var1.guildId;
            var3 = var1.isTryItOut;
            var _closure2_slot1 = var3;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 14;
            var1 = var6[var1];
            var9 = var4.bind(var5)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var32 = var8.bind(var9)(var7, var1);
            var _closure2_slot2 = var32;
            var1 = 15;
            var1 = var6[var1];
            var7 = var4.bind(var5)(var1);
            var1 = var7.useDisplayNameStylesPendingName;
            var31 = var1.bind(var7)(var32, var22);
            var _closure2_slot3 = var31;
            var1 = 16;
            var1 = var6[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useGuildMemberOrUserPendingDisplayNameStyles;
            var1 = var1.bind(var4)(var32, var22);
            var24 = var1.guildDisplayNameStyles;
            var25 = var1.pendingDisplayNameStyles;
            var7 = var1.tryItOutDisplayNameStyles;
            var4 = _closure1_slot1;
            var1 = 17;
            var1 = var6[var1];
            var4 = var4.bind(var5)(var1);
            var1 = {};
            var8 = var27 == var32;
            var6 = undefined;
            if(var8) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var6 = var32.id;
case 18:
            var1['userId'] = var6;
            var1['guildId'] = var22;
            var6 = var25;
            if(!var3) { _fun0003_ip = 20; continue _fun0003 }
case 14:
            var6 = var7;
case 20:
            var1['pendingDisplayNameStyles'] = var6;
            var30 = var4.bind(var5)(var1);
            var _closure2_slot4 = var30;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 18;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var6 = var1.bind(var5)();
            var7 = _closure1_slot4;
            var4 = var7.useState;
            var8 = var27 == var30;
            var1 = undefined;
            if(var8) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var1 = var30.fontId;
case 21:
            if(!(var27 == var1)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 19;
            var8 = var10[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.DisplayNameFont;
            var1 = var8.DEFAULT;
case 23:
            var4 = var4.bind(var7)(var1);
            var1 = _closure1_slot3;
            var9 = 2;
            var1 = var1.bind(var5)(var4, var9);
            var19 = 0;
            var23 = var1[var19];
            var _closure2_slot5 = var23;
            var8 = 1;
            var1 = var1[var8];
            var _closure2_slot6 = var1;
            var7 = _closure1_slot4;
            var4 = var7.useState;
            var10 = var27 == var30;
            var1 = undefined;
            if(var10) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var1 = var30.effectId;
case 25:
            if(!(var27 == var1)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 20;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.DisplayNameEffect;
            var1 = var10.SOLID;
case 27:
            var4 = var4.bind(var7)(var1);
            var1 = _closure1_slot3;
            var1 = var1.bind(var5)(var4, var9);
            var20 = var1[var19];
            var _closure2_slot7 = var20;
            var1 = var1[var8];
            var _closure2_slot8 = var1;
            var10 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 21;
            var7 = var1[var4];
            var11 = var10.bind(var5)(var7);
            var7 = var11.useDisplayNameStylesEffectConfig;
            var47 = var7.bind(var11)(var20);
            var4 = var1[var4];
            var7 = var10.bind(var5)(var4);
            var4 = var7.useDisplayNameStylesEffectConfig;
            var15 = 20;
            var1 = var1[var15];
            var1 = var10.bind(var5)(var1);
            var1 = var1.DisplayNameEffect;
            var1 = var1.GRADIENT;
            var11 = var4.bind(var7)(var1);
            var1 = var27 == var30;
            var10 = undefined;
            if(var1) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var10 = var30.colors;
case 29:
            if(!(var27 == var10)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var10 = new Array(0);
case 31:
            var7 = _closure1_slot4;
            var4 = var7.useState;
            var1 = var10.length;
            if(!(var1 > var19)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var12 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var15];
            var1 = var12.bind(var5)(var1);
            var1 = var1.DisplayNameEffect;
            var1 = var1.GRADIENT;
            if(!(var20 === var1)) { _fun0003_ip = 35; continue _fun0003 }
case 33:
            var1 = var47.defaultColors;
            var1 = var1[var19];
            _fun0003_ip = 36; continue _fun0003;
case 35:
            var1 = var10[var19];
case 36:
            var4 = var4.bind(var7)(var1);
            var1 = _closure1_slot3;
            var4 = var1.bind(var5)(var4, var9);
            var1 = var4[var19];
            var _closure2_slot9 = var1;
            var4 = var4[var8];
            var _closure2_slot10 = var4;
            var7 = _closure1_slot4;
            var4 = var7.useState;
            var12 = var10.length;
            if(!(var12 > var19)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var15];
            var12 = var14.bind(var5)(var12);
            var12 = var12.DisplayNameEffect;
            var12 = var12.GRADIENT;
            if(!(var20 !== var12)) { _fun0003_ip = 39; continue _fun0003 }
case 37:
            var10 = var11.defaultColors;
case 39:
            var7 = var4.bind(var7)(var10);
            var4 = _closure1_slot3;
            var4 = var4.bind(var5)(var7, var9);
            var7 = var4[var19];
            var _closure2_slot11 = var7;
            var4 = var4[var8];
            var _closure2_slot12 = var4;
            var10 = _closure1_slot4;
            var9 = var10.useMemo;
            var8 = new Array(3);
            var8[0] = var20;
            var8[1] = var7;
            var8[2] = var1;
            var4 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 20;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.DisplayNameEffect;
                    var1 = var1.GRADIENT;
                    if(!(var3 !== var1)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    var3 = _closure2_slot9;
                    var1 = new Array(1);
                    var1[0] = var3;
                    _fun0004_ip = 42; continue _fun0004;
case 40:
                    var1 = _closure2_slot11;
case 42:
                    return var1;
                }
            };
            var43 = var9.bind(var10)(var4, var8);
            var _closure2_slot13 = var43;
            var10 = _closure1_slot4;
            var9 = var10.useMemo;
            var8 = new Array(4);
            var8[0] = var30;
            var8[1] = var23;
            var8[2] = var20;
            var8[3] = var43;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var1 = _closure2_slot4;
                    var6 = null;
                    var4 = var6 == var1;
                    var2 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                    var4 = _closure2_slot4;
                    var1 = var4.fontId;
case 43:
                    var1 = var3 !== var1;
                    if(var1) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var4 = _closure2_slot7;
                    var3 = _closure2_slot4;
                    var5 = var6 == var3;
                    var3 = undefined;
                    if(var5) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var5 = _closure2_slot4;
                    var3 = var5.effectId;
case 47:
                    var1 = var4 !== var3;
case 45:
                    if(var1) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 22;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.areArraysShallowEqual;
                    var3 = _closure2_slot13;
                    var8 = _closure2_slot4;
                    var8 = var6 == var8;
                    var2 = undefined;
                    if(var8) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                    var7 = _closure2_slot4;
                    var2 = var7.colors;
case 51:
                    if(!(var6 == var2)) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                    var2 = new Array(0);
case 53:
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = !var2;
case 49:
                    return var1;
                }
            };
            var16 = var9.bind(var10)(var4, var8);
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 23;
            var4 = var9[var4];
            var9 = var8.bind(var5)(var4);
            var8 = var9.useDisplayNameStylesHandleApply;
            var4 = {};
            var4['hasChanges'] = var16;
            var4['selectedFontId'] = var23;
            var4['selectedEffectId'] = var20;
            var4['selectedColors'] = var43;
            var10 = var47.defaultColors;
            var10 = var10[var19];
            var4['defaultColor'] = var10;
            var4['guildId'] = var22;
            var4['isTryItOut'] = var3;
            var10 = function onClose() {
                var2 = _closure2_slot0;
                var1 = var2.goBack;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4['onClose'] = var10;
            var17 = var8.bind(var9)(var4);
            var10 = _closure1_slot4;
            var9 = var10.useCallback;
            var8 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 24;
                    var3 = var8[var1];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var3);
                    var3 = var4.generateRandomDisplayNameStyles;
                    var3 = var3.bind(var4)();
                    var9 = var3.fontId;
                    var6 = var3.effectId;
                    var4 = var3.colors;
                    var5 = _closure2_slot6;
                    var5 = var5.bind(var1)(var9);
                    var5 = _closure2_slot8;
                    var5 = var5.bind(var1)(var6);
                    var5 = 20;
                    var5 = var8[var5];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.DisplayNameEffect;
                    var5 = var5.GRADIENT;
                    if(!(var6 !== var5)) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                    var6 = _closure2_slot10;
                    var5 = 0;
                    var5 = var4[var5];
                    var5 = var6.bind(var1)(var5);
                    _fun0006_ip = 57; continue _fun0006;
case 55:
                    var3 = _closure2_slot12;
                    var3 = var3.bind(var1)(var4);
case 57:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 25;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.track;
                    var2 = _closure1_slot10;
                    var2 = var2.DISPLAY_NAME_STYLES_SURPRISE_ME;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var4 = new Array(0);
            var33 = var9.bind(var10)(var8, var4);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var4 = new Array(2);
            var4[0] = var2;
            var4[1] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 26;
                    var4 = var7[var2];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var4);
                    var4 = var5.triggerHapticFeedback;
                    var2 = var7[var2];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_MEDIUM;
                    var2 = var4.bind(var5)(var2);
                    var4 = _closure2_slot1;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    if(var4) { _fun0007_ip = 58; continue _fun0007 }
case 50:
                    var4 = 28;
                    var4 = var6[var4];
                    var8 = var5.bind(var1)(var4);
                    var7 = var8.setPendingDisplayNameStyles;
                    var4 = null;
                    var4 = var7.bind(var8)(var4);
                    _fun0007_ip = 57; continue _fun0007;
case 58:
                    var4 = 27;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.setTryItOutDisplayNameStyles;
                    var4 = null;
                    var4 = var5.bind(var6)(var4);
case 57:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 25;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.track;
                    var3 = _closure1_slot10;
                    var3 = var3.DISPLAY_NAME_STYLES_REMOVED;
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure2_slot0;
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var34 = var8.bind(var9)(var3, var4);
            var8 = _closure1_slot4;
            var4 = var8.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 26;
                var5 = var4[var2];
                var1 = undefined;
                var6 = var3.bind(var1)(var5);
                var5 = var6.triggerHapticFeedback;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.HapticFeedbackTypes;
                var2 = var2.IMPACT_MEDIUM;
                var2 = var5.bind(var6)(var2);
                var2 = 29;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.setGuildMemberPendingDisplayNameStyles;
                var2 = null;
                var2 = var3.bind(var4)(var2);
                var3 = _closure2_slot0;
                var2 = var3.goBack;
                var2 = var2.bind(var3)();
                return var1;
            };
            var26 = var4.bind(var8)(var2, var3);
            var8 = _closure1_slot4;
            var4 = var8.useCallback;
            var3 = new Array(2);
            var3[0] = var23;
            var3[1] = var31;
            var2 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 30;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 32;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 31;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var7 = _closure2_slot5;
                var3['selectedFontId'] = var7;
                var7 = _closure2_slot6;
                var3['onSelectFont'] = var7;
                var2 = _closure2_slot3;
                var3['displayName'] = var2;
                var2 = 'DisplayNameStylesFontPickerSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var29 = var4.bind(var8)(var2, var3);
            var8 = _closure1_slot4;
            var4 = var8.useCallback;
            var3 = new Array(2);
            var3[0] = var20;
            var9 = var27 == var32;
            var2 = undefined;
            if(var9) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var2 = var32.id;
case 59:
            var3[1] = var2;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 30;
                    var4 = var2[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 32;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 33;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var4 = var4.bind(var1)(var3, var2);
                    var3 = {};
                    var8 = _closure2_slot2;
                    var7 = null;
                    var8 = var7 == var8;
                    var7 = undefined;
                    if(var8) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                    var8 = _closure2_slot2;
                    var7 = var8.id;
case 61:
                    var3['userId'] = var7;
                    var7 = _closure2_slot7;
                    var3['selectedEffectId'] = var7;
                    var2 = _closure2_slot8;
                    var3['onSelectEffect'] = var2;
                    var2 = 'DisplayNameStylesEffectPickerSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                }
            };
            var39 = var4.bind(var8)(var2, var3);
            var4 = _closure1_slot4;
            var3 = var4.useCallback;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var1;
            var2[2] = var20;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var5 = _closure2_slot7;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 20;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.DisplayNameEffect;
                    var3 = var3.GRADIENT;
                    if(!(var5 !== var3)) { _fun0009_ip = 63; continue _fun0009 }
case 41:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 30;
                    var5 = var3[var5];
                    var8 = var6.bind(var1)(var5);
                    var7 = var8.openLazy;
                    var6 = _closure1_slot0;
                    var5 = 32;
                    var5 = var3[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = 35;
                    var5 = var3[var5];
                    var3 = var3.paths;
                    var6 = var6.bind(var1)(var5, var3);
                    var5 = {};
                    var3 = _closure2_slot9;
                    var5['selectedColor'] = var3;
                    var3 = _closure2_slot7;
                    var5['selectedEffectId'] = var3;
                    var3 = _closure2_slot10;
                    var5['onSelectColor'] = var3;
                    var3 = 'DisplayNameStylesColorPickerSheet';
                    var3 = var7.bind(var8)(var6, var3, var5);
                    _fun0009_ip = 64; continue _fun0009;
case 63:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 30;
                    var5 = var3[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.openLazy;
                    var7 = _closure1_slot0;
                    var4 = 32;
                    var4 = var3[var4];
                    var7 = var7.bind(var1)(var4);
                    var4 = 34;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var7.bind(var1)(var4, var3);
                    var3 = {};
                    var7 = _closure2_slot11;
                    var3['selectedColors'] = var7;
                    var2 = _closure2_slot12;
                    var3['onSelectColors'] = var2;
                    var2 = 'DisplayNameStylesGradientPickerSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
case 64:
                    return var1;
                }
            };
            var36 = var3.bind(var4)(var1, var2);
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var28 = 36;
            var1 = var7[var28];
            var1 = var2.bind(var5)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var4 = _closure1_slot1;
            var1 = 37;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)(var23);
            var48 = var2.bind(var3)(var1);
            var2 = var27 == var32;
            var1 = null;
            if(var2) { _fun0003_ip = 65; continue _fun0003 }
case 66:
            var4 = _closure1_slot12;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 38;
            var2 = var9[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.ThemeContextProvider;
            var2 = {};
            var2['theme'] = var6;
            var8 = _closure1_slot12;
            var6 = 39;
            var6 = var9[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.DisplayNameStylesContext;
            var7 = var6.Provider;
            var6 = {};
            var9 = {};
            var10 = true;
            var9['overrideSettings'] = var10;
            var6['value'] = var9;
            var11 = _closure1_slot13;
            var10 = _closure1_slot5;
            var9 = {};
            var12 = var21.container;
            var9['style'] = var12;
            var14 = _closure1_slot6;
            var12 = {};
            var15 = {};
            var51 = var21.contentContainer;
            var52 = var15;
            var18 = copyDataProperties(var52, var51);
            var19 = 0;
            if(!var16) { _fun0003_ip = 67; continue _fun0003 }
case 68:
            var19 = 70;
case 67:
            var18 = 'paddingBottom';
            var15[var18] = var19;
            var12['contentContainerStyle'] = var15;
            var19 = _closure1_slot12;
            var38 = _closure1_slot1;
            var35 = _closure1_slot2;
            var15 = 40;
            var15 = var35[var15];
            var18 = var38.bind(var5)(var15);
            var15 = {};
            var15['user'] = var32;
            var15['displayName'] = var31;
            var15['guildId'] = var22;
            var15['selectedFontId'] = var23;
            var15['selectedEffectId'] = var20;
            var15['selectedColors'] = var43;
            var18 = var19.bind(var5)(var18, var15);
            var15 = new Array(3);
            var15[0] = var18;
            var20 = _closure1_slot13;
            var19 = _closure1_slot5;
            var18 = {};
            var23 = var21.fieldButtonGroup;
            var18['style'] = var23;
            var32 = _closure1_slot7;
            var23 = {};
            var23['onPress'] = var29;
            var29 = var21.fieldButton;
            var23['style'] = var29;
            var29 = {};
            var45 = _closure1_slot12;
            var37 = _closure1_slot0;
            var40 = 41;
            var31 = var35[var40];
            var31 = var37.bind(var5)(var31);
            var42 = var31.Text;
            var41 = {'variant': 'heading-md/semibold', 'color': 'mobile-text-heading-primary'};
            var31 = var35[var28];
            var31 = var37.bind(var5)(var31);
            var50 = var31.intl;
            var49 = var50.string;
            var31 = 42;
            var46 = var35[var31];
            var46 = var38.bind(var5)(var46);
            var46 = var46.0JCuGm;
            var46 = var49.bind(var50)(var46);
            var41['children'] = var46;
            var42 = var45.bind(var5)(var42, var41);
            var41 = new Array(2);
            var41[0] = var42;
            var46 = _closure1_slot12;
            var42 = var35[var40];
            var42 = var37.bind(var5)(var42);
            var45 = var42.Text;
            var42 = {'variant': 'text-md/normal', 'color': 'text-subtle'};
            var42['children'] = var48;
            var42 = var46.bind(var5)(var45, var42);
            var41[1] = var42;
            var29['children'] = var41;
            var41 = var20.bind(var5)(var19, var29);
            var29 = new Array(2);
            var29[0] = var41;
            var41 = _closure1_slot15;
            var29[1] = var41;
            var23['children'] = var29;
            var29 = var20.bind(var5)(var32, var23);
            var23 = new Array(3);
            var23[0] = var29;
            var29 = {};
            var29['onPress'] = var39;
            var41 = var21.fieldButton;
            var39 = new Array(2);
            var39[0] = var41;
            var41 = var21.fieldButtonBorder;
            var39[1] = var41;
            var29['style'] = var39;
            var39 = {};
            var45 = _closure1_slot12;
            var41 = var35[var40];
            var41 = var37.bind(var5)(var41);
            var42 = var41.Text;
            var41 = {'variant': 'heading-md/semibold', 'color': 'mobile-text-heading-primary'};
            var46 = var35[var28];
            var46 = var37.bind(var5)(var46);
            var49 = var46.intl;
            var48 = var49.string;
            var46 = var35[var31];
            var46 = var38.bind(var5)(var46);
            var46 = var46.RVtMxT;
            var46 = var48.bind(var49)(var46);
            var41['children'] = var46;
            var42 = var45.bind(var5)(var42, var41);
            var41 = new Array(2);
            var41[0] = var42;
            var46 = _closure1_slot12;
            var42 = var35[var40];
            var42 = var37.bind(var5)(var42);
            var45 = var42.Text;
            var42 = {'variant': 'text-md/normal', 'color': 'text-subtle'};
            var47 = var47.name;
            var42['children'] = var47;
            var42 = var46.bind(var5)(var45, var42);
            var41[1] = var42;
            var39['children'] = var41;
            var41 = var20.bind(var5)(var19, var39);
            var39 = new Array(2);
            var39[0] = var41;
            var41 = _closure1_slot16;
            var39[1] = var41;
            var29['children'] = var39;
            var29 = var20.bind(var5)(var32, var29);
            var23[1] = var29;
            var29 = {};
            var29['onPress'] = var36;
            var39 = var21.fieldButton;
            var36 = new Array(2);
            var36[0] = var39;
            var39 = var21.fieldButtonBorder;
            var36[1] = var39;
            var29['style'] = var36;
            var36 = {};
            var42 = _closure1_slot12;
            var39 = var35[var40];
            var39 = var37.bind(var5)(var39);
            var41 = var39.Text;
            var39 = {'variant': 'heading-md/semibold', 'color': 'mobile-text-heading-primary'};
            var45 = var35[var28];
            var45 = var37.bind(var5)(var45);
            var47 = var45.intl;
            var46 = var47.string;
            var45 = var35[var31];
            var45 = var38.bind(var5)(var45);
            var45 = var45.6OxgN7;
            var45 = var46.bind(var47)(var45);
            var39['children'] = var45;
            var41 = var42.bind(var5)(var41, var39);
            var39 = new Array(2);
            var39[0] = var41;
            var42 = _closure1_slot12;
            var40 = var35[var40];
            var40 = var37.bind(var5)(var40);
            var41 = var40.Text;
            var40 = {'variant': 'text-md/normal', 'color': 'text-subtle'};
            var45 = var43.map;
            var44 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 43;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.int2hex;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var46 = var45.bind(var43)(var44);
            var45 = var46.join;
            var44 = ', ';
            var44 = var45.bind(var46)(var44);
            var40['children'] = var44;
            var40 = var42.bind(var5)(var41, var40);
            var39[1] = var40;
            var36['children'] = var39;
            var39 = var20.bind(var5)(var19, var36);
            var36 = new Array(2);
            var36[0] = var39;
            var39 = {};
            var40 = var21.fieldButtonChevron;
            var39['style'] = var40;
            var42 = _closure1_slot12;
            var40 = 44;
            var40 = var35[var40];
            var41 = var38.bind(var5)(var40);
            var40 = {};
            var40['colors'] = var43;
            var41 = var42.bind(var5)(var41, var40);
            var40 = new Array(2);
            var40[0] = var41;
            var41 = _closure1_slot17;
            var40[1] = var41;
            var39['children'] = var40;
            var39 = var20.bind(var5)(var19, var39);
            var36[1] = var39;
            var29['children'] = var36;
            var29 = var20.bind(var5)(var32, var29);
            var23[2] = var29;
            var18['children'] = var23;
            var18 = var20.bind(var5)(var19, var18);
            var15[1] = var18;
            var18 = {};
            var21 = var21.buttonContainer;
            var18['style'] = var21;
            var32 = _closure1_slot12;
            var23 = 45;
            var21 = var35[var23];
            var21 = var37.bind(var5)(var21);
            var29 = var21.Button;
            var21 = {'text': null, 'onPress': null, 'variant': 'tertiary', 'size': 'lg', 'grow': true, 'icon': null, 'iconPosition': 'start'};
            var36 = var35[var28];
            var36 = var37.bind(var5)(var36);
            var37 = var36.intl;
            var36 = var37.string;
            var35 = var35[var31];
            var35 = var38.bind(var5)(var35);
            var35 = var35.NOGFds;
            var35 = var36.bind(var37)(var35);
            var21['text'] = var35;
            var21['onPress'] = var33;
            var33 = _closure1_slot18;
            var21['icon'] = var33;
            var29 = var32.bind(var5)(var29, var21);
            var21 = new Array(3);
            var21[0] = var29;
            var29 = var27 == var22;
            if(!var29) { _fun0003_ip = 69; continue _fun0003 }
case 70:
            var29 = var27 != var30;
case 69:
            if(!var29) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var33 = _closure1_slot12;
            var37 = _closure1_slot0;
            var35 = _closure1_slot2;
            var30 = var35[var23];
            var30 = var37.bind(var5)(var30);
            var32 = var30.Button;
            var30 = {'text': null, 'onPress': null, 'variant': 'tertiary', 'size': 'lg', 'grow': true, 'icon': null, 'iconPosition': 'start'};
            var36 = var35[var28];
            var36 = var37.bind(var5)(var36);
            var37 = var36.intl;
            var36 = var37.string;
            var38 = _closure1_slot1;
            var35 = var35[var31];
            var35 = var38.bind(var5)(var35);
            var35 = var35.ymq8WQ;
            var35 = var36.bind(var37)(var35);
            var30['text'] = var35;
            var30['onPress'] = var34;
            var34 = _closure1_slot19;
            var30['icon'] = var34;
            var29 = var33.bind(var5)(var32, var30);
case 71:
            var21[1] = var29;
            var22 = var27 != var22;
            if(!var22) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var24 = var27 != var24;
            if(var24) { _fun0003_ip = 75; continue _fun0003 }
case 76:
            var24 = var27 != var25;
case 75:
            var22 = var24;
case 73:
            if(!var22) { _fun0003_ip = 77; continue _fun0003 }
case 78:
            var25 = _closure1_slot12;
            var29 = _closure1_slot0;
            var27 = _closure1_slot2;
            var23 = var27[var23];
            var23 = var29.bind(var5)(var23);
            var24 = var23.Button;
            var23 = {'text': null, 'onPress': null, 'variant': 'tertiary', 'size': 'lg', 'grow': true, 'icon': null, 'iconPosition': 'start'};
            var28 = var27[var28];
            var28 = var29.bind(var5)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var30 = _closure1_slot1;
            var27 = var27[var31];
            var27 = var30.bind(var5)(var27);
            var27 = var27.j/KRxc;
            var27 = var28.bind(var29)(var27);
            var23['text'] = var27;
            var23['onPress'] = var26;
            var26 = _closure1_slot20;
            var23['icon'] = var26;
            var22 = var25.bind(var5)(var24, var23);
case 77:
            var21[2] = var22;
            var18['children'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var15[2] = var18;
            var12['children'] = var15;
            var14 = var11.bind(var5)(var14, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var15 = _closure1_slot12;
            var14 = _closure1_slot23;
            var13 = {};
            var13['onPress'] = var17;
            var13['visible'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 65:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
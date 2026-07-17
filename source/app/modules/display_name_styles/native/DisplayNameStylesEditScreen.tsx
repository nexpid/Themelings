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
        var _closure2_slot0 = var11;
        var16 = var2.visible;
        var _closure2_slot1 = var16;
        var14 = _closure1_slot0;
        var15 = _closure1_slot2;
        var2 = 12;
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
        var2 = 52;
        var2 = var15[var2];
        var2 = var6.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var12 = var2.bottom;
        var5 = 53;
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
        var9 = _closure1_slot16;
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
                var4 = 10;
                var4 = var7[var4];
                var7 = undefined;
                var4 = var5.bind(var7)(var4);
                var4 = var4.space;
                var4 = var4.PX_16;
                var1['marginHorizontal'] = var4;
                var5 = {};
                var8 = _closure2_slot2;
                var4 = var11;
                if(var8) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 54;
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
                var9 = 54;
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
                var4 = 54;
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
        var16 = 10;
        var16 = var15[var16];
        var16 = var6.bind(var4)(var16);
        var10['tokens'] = var16;
        var10['reducedMotion'] = var13;
        var13 = 54;
        var13 = var15[var13];
        var13 = var14.bind(var4)(var13);
        var13 = var13.withSpring;
        var10['withSpring'] = var13;
        var13 = _closure1_slot11;
        var10['MEDIA_PICKER_SEND_BUTTON_SPRING'] = var13;
        var2['__closure'] = var10;
        var10 = 16786362025671.0;
        var2['__workletHash'] = var10;
        var10 = _closure1_slot17;
        var2['__initData'] = var10;
        var7 = var3.bind(var7)(var2);
        var10 = _closure1_slot4;
        var3 = var10.useCallback;
        var2 = new Array(1);
        var2[0] = var11;
        var1 = function() {
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 28;
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
        var8 = 49;
        var8 = var15[var8];
        var8 = var14.bind(var4)(var8);
        var9 = var8.Button;
        var8 = {'variant': 'primary', 'onPress': null, 'size': 'lg'};
        var8['onPress'] = var11;
        var11 = 38;
        var12 = var15[var11];
        var12 = var14.bind(var4)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var4)(var11);
        var11 = var11.t;
        var11 = var11["1Qm822"];
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
    var7 = 8;
    var4 = var6[var7];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DisplayNameEffect;
    var8 = var4.GRADIENT;
    var4 = new Array(3);
    var4[0] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.DisplayNameEffect;
    var8 = var8.GUMMY;
    var4[1] = var8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.DisplayNameEffect;
    var7 = var7.PRISM;
    var4[2] = var7;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var12;
    var10 = 10;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var13;
    var4['container'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var9['padding'] = var13;
    var4['contentContainer'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_MUTED;
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
    var13 = var13.space;
    var13 = var13.PX_12;
    var9['padding'] = var13;
    var4['fieldButton'] = var9;
    var9 = {};
    var9['borderTopWidth'] = var12;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9['borderTopColor'] = var13;
    var4['fieldButtonBorder'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_12;
    var9['marginRight'] = var13;
    var4['fieldButtonLabel'] = var9;
    var9 = {'flexDirection': 'row', 'gap': null, 'flexShrink': 0};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var9['gap'] = var13;
    var4['fieldButtonChevron'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var9['gap'] = var13;
    var4['fieldButtonTrailing'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var9['marginVertical'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var13;
    var9['borderTopWidth'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_MUTED;
    var9['borderTopColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_16;
    var9['gap'] = var10;
    var4['buttonContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = "function DisplayNameStylesEditScreenTsx1(){const{visible}=this.__closure;return{pointerEvents:visible?'box-none':'none'};}";
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = "function DisplayNameStylesEditScreenTsx2(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}";
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = 55;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DisplayNameStylesEditScreen() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = _closure1_slot15;
            var5 = undefined;
            var21 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 11;
            var1 = var4[var2];
            var6 = var3.bind(var5)(var1);
            var1 = var6.useRoute;
            var1 = var1.bind(var6)();
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useNavigation;
            var4 = var2.bind(var3)();
            var _closure2_slot0 = var4;
            var1 = var1.params;
            var27 = null;
            if(!(var27 == var1)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var1 = {};
case 16:
            var22 = var1.guildId;
            var _closure2_slot1 = var22;
            var9 = var1.isTryItOut;
            var _closure2_slot2 = var9;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var8 = var2.bind(var5)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var32 = var7.bind(var8)(var6, var1);
            var _closure2_slot3 = var32;
            var1 = 13;
            var1 = var3[var1];
            var6 = var2.bind(var5)(var1);
            var1 = var6.useDisplayNameStylesPendingName;
            var29 = var1.bind(var6)(var32, var22);
            var _closure2_slot4 = var29;
            var1 = 14;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useGuildMemberOrUserPendingDisplayNameStyles;
            var1 = var1.bind(var2)(var32, var22);
            var24 = var1.guildDisplayNameStyles;
            var25 = var1.pendingDisplayNameStyles;
            var6 = var1.tryItOutDisplayNameStyles;
            var2 = _closure1_slot1;
            var1 = 15;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var7 = var27 == var32;
            var3 = undefined;
            if(var7) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var3 = var32.id;
case 18:
            var1['userId'] = var3;
            var1['guildId'] = var22;
            var3 = var25;
            if(!var9) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var3 = var6;
case 20:
            var1['pendingDisplayNameStyles'] = var3;
            var10 = true;
            var1['ignoreDisabledStylesSetting'] = var10;
            var31 = var2.bind(var5)(var1);
            var _closure2_slot5 = var31;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 16;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var6 = var1.bind(var5)();
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var7 = var27 == var31;
            var1 = undefined;
            if(var7) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var1 = var31.fontId;
case 22:
            if(!(var27 == var1)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 17;
            var7 = var11[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.DisplayNameFont;
            var1 = var7.DEFAULT;
case 24:
            var2 = var2.bind(var3)(var1);
            var1 = _closure1_slot3;
            var11 = 2;
            var1 = var1.bind(var5)(var2, var11);
            var23 = 0;
            var28 = var1[var23];
            var _closure2_slot6 = var28;
            var3 = 1;
            var1 = var1[var3];
            var _closure2_slot7 = var1;
            var7 = _closure1_slot4;
            var2 = var7.useState;
            var8 = var27 == var31;
            var1 = undefined;
            if(var8) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var1 = var31.effectId;
case 26:
            if(!(var27 == var1)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 8;
            var8 = var14[var8];
            var8 = var12.bind(var5)(var8);
            var8 = var8.DisplayNameEffect;
            var1 = var8.SOLID;
case 28:
            var2 = var2.bind(var7)(var1);
            var1 = _closure1_slot3;
            var1 = var1.bind(var5)(var2, var11);
            var45 = var1[var23];
            var _closure2_slot8 = var45;
            var1 = var1[var3];
            var _closure2_slot9 = var1;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 18;
            var1 = var7[var1];
            var8 = var2.bind(var5)(var1);
            var1 = var8.getEffectColorCount;
            var1 = var1.bind(var8)(var45);
            var8 = var1 > var3;
            var _closure2_slot10 = var8;
            var1 = 19;
            var1 = var7[var1];
            var14 = var2.bind(var5)(var1);
            var12 = var14.useIsDisplayNameStylesFlywheelSettersEnabled;
            var1 = 'DisplayNameStylesEditScreen';
            var44 = var12.bind(var14)(var1);
            var1 = 20;
            var1 = var7[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useDisplayNameStylesEffectConfig;
            var52 = var1.bind(var2)(var45);
            var _closure2_slot11 = var52;
            var2 = _closure1_slot1;
            var1 = 21;
            var1 = var7[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var _closure2_slot12 = var1;
            var2 = var27 == var31;
            var1 = undefined;
            if(var2) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var1 = var31.colors;
case 30:
            if(!(var27 == var1)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var1 = new Array(0);
case 32:
            var _closure2_slot13 = var1;
            var7 = _closure1_slot4;
            var2 = var7.useState;
            var12 = var1.length;
            if(!(var12 > var23)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            if(var8) { _fun0003_ip = 34; continue _fun0003 }
case 36:
            var1 = var1[var23];
            _fun0003_ip = 37; continue _fun0003;
case 34:
            var12 = var52.defaultColors;
            var1 = var12[var23];
case 37:
            var1 = var2.bind(var7)(var1);
            var2 = _closure1_slot3;
            var1 = var2.bind(var5)(var1, var11);
            var7 = var1[var23];
            var _closure2_slot14 = var7;
            var1 = var1[var3];
            var _closure2_slot15 = var1;
            var14 = _closure1_slot4;
            var12 = var14.useState;
            var1 = function() {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.fromEntries;
                var5 = _closure1_slot14;
                var4 = var5.map;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var4 = arg1;
                        var1 = new Array(2);
                        var1[0] = var4;
                        var2 = _closure2_slot13;
                        var5 = var2.length;
                        var2 = 0;
                        if(!(var5 > var2)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                        var2 = _closure2_slot8;
                        if(!(var2 !== var4)) { _fun0004_ip = 8; continue _fun0004 }
case 38:
                        var2 = _closure2_slot12;
                        var2 = var2[var4];
                        _fun0004_ip = 40; continue _fun0004;
case 8:
                        var2 = _closure2_slot13;
case 40:
                        var1[1] = var2;
                        return var1;
                    }
                };
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var12.bind(var14)(var1);
            var1 = var2.bind(var5)(var1, var11);
            var2 = var1[var23];
            var _closure2_slot16 = var2;
            var1 = var1[var3];
            var _closure2_slot17 = var1;
            var12 = _closure1_slot4;
            var11 = var12.useCallback;
            var3 = function(arg1, arg2) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var3 = _closure2_slot17;
                var1 = undefined;
                var2 = function(arg1) {
                    var1 = {};
                    var4 = arg1;
                    var5 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = _closure3_slot0;
                    var2 = _closure3_slot1;
                    var1[2] = var2;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var1 = var11.bind(var12)(var3, var1);
            var _closure2_slot18 = var1;
            var12 = _closure1_slot4;
            var11 = var12.useMemo;
            var3 = new Array(5);
            var3[0] = var8;
            var3[1] = var2;
            var3[2] = var45;
            var2 = var52.defaultColors;
            var3[3] = var2;
            var3[4] = var7;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot10;
                    if(var1) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var2 = _closure2_slot14;
                    var1 = new Array(1);
                    var1[0] = var2;
                    _fun0005_ip = 43; continue _fun0005;
case 41:
                    var4 = _closure2_slot16;
                    var2 = _closure2_slot8;
                    var2 = var4[var2];
                    var4 = null;
                    if(!(var4 == var2)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                    var3 = _closure2_slot11;
                    var2 = var3.defaultColors;
case 44:
                    var1 = var2;
case 43:
                    return var1;
                }
            };
            var46 = var11.bind(var12)(var2, var3);
            var _closure2_slot19 = var46;
            var12 = _closure1_slot4;
            var11 = var12.useMemo;
            var3 = new Array(4);
            var3[0] = var31;
            var3[1] = var28;
            var3[2] = var45;
            var3[3] = var46;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var1 = _closure2_slot5;
                    var6 = null;
                    var4 = var6 == var1;
                    var2 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0006_ip = 46; continue _fun0006 }
case 41:
                    var4 = _closure2_slot5;
                    var1 = var4.fontId;
case 46:
                    var1 = var3 !== var1;
                    if(var1) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    var4 = _closure2_slot8;
                    var3 = _closure2_slot5;
                    var5 = var6 == var3;
                    var3 = undefined;
                    if(var5) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                    var5 = _closure2_slot5;
                    var3 = var5.effectId;
case 49:
                    var1 = var4 !== var3;
case 47:
                    if(var1) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 22;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.areArraysShallowEqual;
                    var3 = _closure2_slot19;
                    var8 = _closure2_slot5;
                    var8 = var6 == var8;
                    var2 = undefined;
                    if(var8) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                    var7 = _closure2_slot5;
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
            var16 = var11.bind(var12)(var2, var3);
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 23;
            var2 = var14[var2];
            var11 = var12.bind(var5)(var2);
            var3 = var11.useDisplayNameStylesHandleApply;
            var2 = {};
            var2['hasChanges'] = var16;
            var2['selectedFontId'] = var28;
            var2['selectedEffectId'] = var45;
            var2['selectedColors'] = var46;
            var15 = var52.defaultColors;
            var15 = var15[var23];
            var2['defaultColor'] = var15;
            var2['guildId'] = var22;
            var2['isTryItOut'] = var9;
            var15 = function onClose() {
                var2 = _closure2_slot0;
                var1 = var2.goBack;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2['onClose'] = var15;
            var17 = var3.bind(var11)(var2);
            var2 = 24;
            var2 = var14[var2];
            var3 = var12.bind(var5)(var2);
            var2 = var3.useVisibleFontOrder;
            var18 = var2.bind(var3)();
            var _closure2_slot20 = var18;
            var2 = 25;
            var2 = var14[var2];
            var3 = var12.bind(var5)(var2);
            var2 = var3.useVisibleEffectOrder;
            var11 = var2.bind(var3)();
            var _closure2_slot21 = var11;
            var2 = 26;
            var3 = var14[var2];
            var15 = var12.bind(var5)(var3);
            var3 = var15.useDisplayNameStylesNewFontsBadge;
            var3 = var3.bind(var15)(var18);
            var37 = var3.showFontsBadge;
            var _closure2_slot22 = var37;
            var3 = var3.dismissFontsBadge;
            var _closure2_slot23 = var3;
            var2 = var14[var2];
            var12 = var12.bind(var5)(var2);
            var2 = var12.useDisplayNameStylesNewEffectsBadge;
            var2 = var2.bind(var12)(var11);
            var39 = var2.showEffectsBadge;
            var _closure2_slot24 = var39;
            var2 = var2.dismissEffectsBadge;
            var _closure2_slot25 = var2;
            var15 = _closure1_slot4;
            var14 = var15.useCallback;
            var12 = new Array(3);
            var12[0] = var1;
            var12[1] = var18;
            var12[2] = var11;
            var11 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 18;
                    var3 = var8[var6];
                    var1 = undefined;
                    var10 = var7.bind(var1)(var3);
                    var9 = var10.generateRandomDisplayNameStyles;
                    var5 = _closure2_slot20;
                    var4 = _closure2_slot21;
                    var4 = var9.bind(var10)(var5, var4);
                    var10 = var4.fontId;
                    var5 = var4.effectId;
                    var4 = var4.colors;
                    var9 = _closure2_slot7;
                    var9 = var9.bind(var1)(var10);
                    var9 = _closure2_slot9;
                    var9 = var9.bind(var1)(var5);
                    var6 = var8[var6];
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.getEffectColorCount;
                    var7 = var6.bind(var7)(var5);
                    var6 = 1;
                    if(!(!(var7 > var6))) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                    var7 = _closure2_slot15;
                    var6 = 0;
                    var6 = var4[var6];
                    var6 = var7.bind(var1)(var6);
                    _fun0007_ip = 59; continue _fun0007;
case 57:
                    var3 = _closure2_slot18;
                    var3 = var3.bind(var1)(var5, var4);
case 59:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 27;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.track;
                    var2 = _closure1_slot10;
                    var2 = var2.DISPLAY_NAME_STYLES_SURPRISE_ME;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var33 = var14.bind(var15)(var11, var12);
            var14 = _closure1_slot4;
            var12 = var14.useCallback;
            var11 = new Array(2);
            var11[0] = var4;
            var11[1] = var9;
            var9 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 28;
                    var4 = var7[var2];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var4);
                    var4 = var5.triggerHapticFeedback;
                    var2 = var7[var2];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_MEDIUM;
                    var2 = var4.bind(var5)(var2);
                    var4 = _closure2_slot2;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    if(var4) { _fun0008_ip = 60; continue _fun0008 }
case 52:
                    var4 = 30;
                    var4 = var6[var4];
                    var8 = var5.bind(var1)(var4);
                    var7 = var8.setPendingChanges;
                    var4 = {};
                    var9 = null;
                    var4['displayNameStyles'] = var9;
                    var4 = var7.bind(var8)(var4);
                    _fun0008_ip = 56; continue _fun0008;
case 60:
                    var4 = 29;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.setTryItOutDisplayNameStyles;
                    var4 = null;
                    var4 = var5.bind(var6)(var4);
case 56:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 27;
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
            var34 = var12.bind(var14)(var9, var11);
            var12 = _closure1_slot4;
            var11 = var12.useCallback;
            var9 = new Array(2);
            var9[0] = var22;
            var9[1] = var4;
            var4 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 28;
                var5 = var4[var2];
                var1 = undefined;
                var6 = var3.bind(var1)(var5);
                var5 = var6.triggerHapticFeedback;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.HapticFeedbackTypes;
                var2 = var2.IMPACT_MEDIUM;
                var2 = var5.bind(var6)(var2);
                var2 = 30;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.setPendingChanges;
                var3 = {};
                var6 = _closure2_slot1;
                var3['guildId'] = var6;
                var6 = null;
                var3['displayNameStyles'] = var6;
                var3 = var4.bind(var5)(var3);
                var3 = _closure2_slot0;
                var2 = var3.goBack;
                var2 = var2.bind(var3)();
                return var1;
            };
            var26 = var11.bind(var12)(var4, var9);
            var11 = _closure1_slot4;
            var9 = var11.useCallback;
            var4 = new Array(4);
            var4[0] = var28;
            var4[1] = var29;
            var4[2] = var37;
            var4[3] = var3;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot22;
                    if(!var1) { _fun0009_ip = 61; continue _fun0009 }
case 42:
                    var3 = _closure2_slot23;
                    var1 = undefined;
                    var1 = var3.bind(var1)();
case 61:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 31;
                    var5 = var3[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.openLazy;
                    var7 = _closure1_slot0;
                    var4 = 33;
                    var4 = var3[var4];
                    var7 = var7.bind(var1)(var4);
                    var4 = 32;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var7.bind(var1)(var4, var3);
                    var3 = {};
                    var7 = _closure2_slot6;
                    var3['selectedFontId'] = var7;
                    var7 = _closure2_slot7;
                    var3['onSelectFont'] = var7;
                    var2 = _closure2_slot4;
                    var3['displayName'] = var2;
                    var2 = 'DisplayNameStylesFontPickerSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                }
            };
            var19 = var9.bind(var11)(var3, var4);
            var9 = _closure1_slot4;
            var4 = var9.useCallback;
            var3 = new Array(4);
            var3[0] = var45;
            var12 = var27 == var32;
            var11 = undefined;
            if(var12) { _fun0003_ip = 62; continue _fun0003 }
case 63:
            var11 = var32.id;
case 62:
            var3[1] = var11;
            var3[2] = var39;
            var3[3] = var2;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot24;
                    if(!var1) { _fun0010_ip = 61; continue _fun0010 }
case 42:
                    var3 = _closure2_slot25;
                    var1 = undefined;
                    var1 = var3.bind(var1)();
case 61:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 31;
                    var5 = var3[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.openLazy;
                    var7 = _closure1_slot0;
                    var4 = 33;
                    var4 = var3[var4];
                    var7 = var7.bind(var1)(var4);
                    var4 = 34;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var7.bind(var1)(var4, var3);
                    var3 = {};
                    var8 = _closure2_slot3;
                    var7 = null;
                    var8 = var7 == var8;
                    var7 = undefined;
                    if(var8) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                    var8 = _closure2_slot3;
                    var7 = var8.id;
case 64:
                    var3['userId'] = var7;
                    var7 = _closure2_slot8;
                    var3['selectedEffectId'] = var7;
                    var2 = _closure2_slot9;
                    var3['onSelectEffect'] = var2;
                    var2 = 'DisplayNameStylesEffectPickerSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                }
            };
            var38 = var4.bind(var9)(var2, var3);
            var4 = _closure1_slot4;
            var3 = var4.useCallback;
            var2 = new Array(5);
            var2[0] = var8;
            var2[1] = var46;
            var2[2] = var7;
            var2[3] = var45;
            var2[4] = var1;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var5 = _closure2_slot8;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.DisplayNameEffect;
                    var3 = var3.GUMMY;
                    if(!(var5 !== var3)) { _fun0011_ip = 15; continue _fun0011 }
case 66:
                    var5 = _closure2_slot10;
                    var8 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var6 = 31;
                    var6 = var3[var6];
                    var9 = var8.bind(var1)(var6);
                    var8 = var9.openLazy;
                    var10 = _closure1_slot0;
                    var6 = 33;
                    var6 = var3[var6];
                    var6 = var10.bind(var1)(var6);
                    if(var5) { _fun0011_ip = 67; continue _fun0011 }
case 65:
                    var5 = 37;
                    var10 = var3[var5];
                    var5 = var3.paths;
                    var11 = var6.bind(var1)(var10, var5);
                    var10 = {};
                    var5 = _closure2_slot14;
                    var10['selectedColor'] = var5;
                    var5 = _closure2_slot8;
                    var10['selectedEffectId'] = var5;
                    var5 = _closure2_slot15;
                    var10['onSelectColor'] = var5;
                    var5 = 'DisplayNameStylesColorPickerSheet';
                    var5 = var8.bind(var9)(var11, var5, var10);
                    _fun0011_ip = 68; continue _fun0011;
case 67:
                    var5 = 36;
                    var5 = var3[var5];
                    var3 = var3.paths;
                    var6 = var6.bind(var1)(var5, var3);
                    var5 = {};
                    var3 = _closure2_slot19;
                    var5['selectedColors'] = var3;
                    var3 = _closure2_slot8;
                    var5['selectedEffectId'] = var3;
                    var3 = function onSelectColors(arg1) {
                        var4 = _closure2_slot18;
                        var3 = _closure2_slot8;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var3, var1);
                        return var1;
                    };
                    var5['onSelectColors'] = var3;
                    var3 = 'DisplayNameStylesGradientPickerSheet';
                    var3 = var8.bind(var9)(var6, var3, var5);
                    _fun0011_ip = 68; continue _fun0011;
case 15:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 31;
                    var5 = var3[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.openLazy;
                    var8 = _closure1_slot0;
                    var4 = 33;
                    var4 = var3[var4];
                    var8 = var8.bind(var1)(var4);
                    var4 = 35;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var8.bind(var1)(var4, var3);
                    var3 = {};
                    var7 = _closure2_slot19;
                    var3['selectedColors'] = var7;
                    var2 = function onSelectColors(arg1) {
                        var4 = _closure2_slot18;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.DisplayNameEffect;
                        var2 = var1.GUMMY;
                        var1 = arg1;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var3['onSelectColors'] = var2;
                    var2 = 'DisplayNameStylesGummyColorPickerSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
case 68:
                    return var1;
                }
            };
            var20 = var3.bind(var4)(var1, var2);
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var30 = 38;
            var1 = var7[var30];
            var1 = var2.bind(var5)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var4 = _closure1_slot1;
            var1 = 39;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)(var28);
            var53 = var2.bind(var3)(var1);
            var2 = var27 == var32;
            var1 = null;
            if(var2) { _fun0003_ip = 69; continue _fun0003 }
case 70:
            var4 = _closure1_slot12;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 40;
            var2 = var9[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.ThemeContextProvider;
            var2 = {};
            var2['theme'] = var6;
            var8 = _closure1_slot12;
            var6 = 41;
            var6 = var9[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.DisplayNameStylesContext;
            var7 = var6.Provider;
            var6 = {};
            var9 = {};
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
            var61 = var21.contentContainer;
            var62 = var15;
            var18 = copyDataProperties(var62, var61);
            var23 = 0;
            if(!var16) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var23 = 70;
case 71:
            var18 = 'paddingBottom';
            var15[17] = var23;
            var12['contentContainerStyle'] = var15;
            var23 = _closure1_slot12;
            var18 = _closure1_slot1;
            var35 = _closure1_slot2;
            var15 = 42;
            var15 = var35[var15];
            var18 = var18.bind(var5)(var15);
            var15 = {};
            var15['user'] = var32;
            var15['displayName'] = var29;
            var15['guildId'] = var22;
            var15['selectedFontId'] = var28;
            var15['selectedEffectId'] = var45;
            var15['selectedColors'] = var46;
            var18 = var23.bind(var5)(var18, var15);
            var15 = new Array(3);
            var15[0] = var18;
            var29 = _closure1_slot13;
            var23 = _closure1_slot5;
            var18 = {};
            var28 = var21.fieldButtonGroup;
            var18['style'] = var28;
            var35 = _closure1_slot7;
            var32 = {};
            var32['onPress'] = var19;
            var19 = var21.fieldButton;
            var32['style'] = var19;
            var19 = 'button';
            var32['accessibilityRole'] = var19;
            var47 = _closure1_slot0;
            var40 = _closure1_slot2;
            var28 = var40[var30];
            var28 = var47.bind(var5)(var28);
            var43 = var28.intl;
            var41 = var43.string;
            var48 = _closure1_slot1;
            var28 = 43;
            var36 = var40[var28];
            var36 = var48.bind(var5)(var36);
            var36 = var36["0JCuGm"];
            var48 = var41.bind(var43)(var36);
            if(var37) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var36 = global;
            var36 = var36.HermesInternal;
            var43 = var36.concat;
            var41 = '';
            var36 = ', ';
            var36 = var43.bind(var41)(var48, var36, var53);
            _fun0003_ip = 75; continue _fun0003;
case 73:
            var41 = var40[var30];
            var41 = var47.bind(var5)(var41);
            var43 = var41.intl;
            var41 = var43.string;
            var40 = var40[var30];
            var40 = var47.bind(var5)(var40);
            var40 = var40.t;
            var40 = var40.y2b7CA;
            var58 = var41.bind(var43)(var40);
            var40 = global;
            var40 = var40.HermesInternal;
            var43 = var40.concat;
            var63 = '';
            var40 = ', ';
            var62 = var48;
            var61 = var40;
            var60 = var53;
            var59 = var40;
            var36 = var63[var43](var62, var61, var60, var59, var58, var57);
case 75:
            var32['accessibilityLabel'] = var36;
            var41 = _closure1_slot13;
            var40 = _closure1_slot5;
            var36 = {};
            var51 = _closure1_slot12;
            var49 = _closure1_slot0;
            var43 = _closure1_slot2;
            var47 = 44;
            var48 = var43[var47];
            var48 = var49.bind(var5)(var48);
            var50 = var48.Text;
            var48 = {'variant': 'heading-md/semibold', 'color': 'mobile-text-heading-primary'};
            var54 = var43[var30];
            var54 = var49.bind(var5)(var54);
            var56 = var54.intl;
            var55 = var56.string;
            var57 = _closure1_slot1;
            var54 = var43[var28];
            var54 = var57.bind(var5)(var54);
            var54 = var54["0JCuGm"];
            var54 = var55.bind(var56)(var54);
            var48['children'] = var54;
            var50 = var51.bind(var5)(var50, var48);
            var48 = new Array(2);
            var48[0] = var50;
            var51 = _closure1_slot12;
            var43 = var43[var47];
            var43 = var49.bind(var5)(var43);
            var50 = var43.Text;
            var49 = {'variant': 'text-md/normal', 'color': 'text-subtle'};
            var43 = 'text-md/normal';
            var49['children'] = var53;
            var49 = var51.bind(var5)(var50, var49);
            var48[1] = var49;
            var36['children'] = var48;
            var40 = var41.bind(var5)(var40, var36);
            var36 = new Array(2);
            var36[0] = var40;
            if(var37) { _fun0003_ip = 76; continue _fun0003 }
case 77:
            var41 = _closure1_slot12;
            var40 = _closure1_slot0;
            var48 = _closure1_slot2;
            var37 = 46;
            var37 = var48[var37];
            var37 = var40.bind(var5)(var37);
            var40 = var37.ChevronSmallRightIcon;
            var37 = {};
            var48 = 'icon-muted';
            var37['color'] = var48;
            var37 = var41.bind(var5)(var40, var37);
            _fun0003_ip = 78; continue _fun0003;
case 76:
            var48 = _closure1_slot13;
            var41 = _closure1_slot5;
            var40 = {};
            var49 = var21.fieldButtonTrailing;
            var40['style'] = var49;
            var53 = _closure1_slot12;
            var51 = _closure1_slot0;
            var54 = _closure1_slot2;
            var49 = 45;
            var49 = var54[var49];
            var49 = var51.bind(var5)(var49);
            var50 = var49.NewTag;
            var49 = {};
            var50 = var53.bind(var5)(var50, var49);
            var49 = new Array(2);
            var49[0] = var50;
            var53 = _closure1_slot12;
            var50 = 46;
            var50 = var54[var50];
            var50 = var51.bind(var5)(var50);
            var51 = var50.ChevronSmallRightIcon;
            var50 = {};
            var54 = 'icon-muted';
            var50['color'] = var54;
            var50 = var53.bind(var5)(var51, var50);
            var49[1] = var50;
            var40['children'] = var49;
            var37 = var48.bind(var5)(var41, var40);
case 78:
            var36[1] = var37;
            var32['children'] = var36;
            var35 = var29.bind(var5)(var35, var32);
            var32 = new Array(3);
            var32[0] = var35;
            var37 = _closure1_slot13;
            var36 = _closure1_slot7;
            var35 = {};
            var35['onPress'] = var38;
            var40 = var21.fieldButton;
            var38 = new Array(2);
            var38[0] = var40;
            var40 = var21.fieldButtonBorder;
            var38[1] = var40;
            var35['style'] = var38;
            var35['accessibilityRole'] = var19;
            var49 = _closure1_slot0;
            var40 = _closure1_slot2;
            var38 = var40[var30];
            var38 = var49.bind(var5)(var38);
            var48 = var38.intl;
            var41 = var48.string;
            var50 = _closure1_slot1;
            var38 = var40[var28];
            var38 = var50.bind(var5)(var38);
            var38 = var38.RVtMxT;
            var51 = var41.bind(var48)(var38);
            var50 = var52.name;
            if(var39) { _fun0003_ip = 79; continue _fun0003 }
case 80:
            var38 = global;
            var38 = var38.HermesInternal;
            var48 = var38.concat;
            var41 = '';
            var38 = ', ';
            var38 = var48.bind(var41)(var51, var38, var50);
            _fun0003_ip = 81; continue _fun0003;
case 79:
            var41 = var40[var30];
            var41 = var49.bind(var5)(var41);
            var48 = var41.intl;
            var41 = var48.string;
            var40 = var40[var30];
            var40 = var49.bind(var5)(var40);
            var40 = var40.t;
            var40 = var40.y2b7CA;
            var58 = var41.bind(var48)(var40);
            var40 = global;
            var40 = var40.HermesInternal;
            var48 = var40.concat;
            var63 = '';
            var40 = ', ';
            var62 = var51;
            var61 = var40;
            var60 = var50;
            var59 = var40;
            var38 = var63[var48](var62, var61, var60, var59, var58, var57);
case 81:
            var35['accessibilityLabel'] = var38;
            var41 = _closure1_slot13;
            var40 = _closure1_slot5;
            var38 = {};
            var53 = _closure1_slot12;
            var50 = _closure1_slot0;
            var49 = _closure1_slot2;
            var48 = var49[var47];
            var48 = var50.bind(var5)(var48);
            var51 = var48.Text;
            var48 = {'variant': 'heading-md/semibold', 'color': 'mobile-text-heading-primary'};
            var54 = var49[var30];
            var54 = var50.bind(var5)(var54);
            var56 = var54.intl;
            var55 = var56.string;
            var57 = _closure1_slot1;
            var54 = var49[var28];
            var54 = var57.bind(var5)(var54);
            var54 = var54.RVtMxT;
            var54 = var55.bind(var56)(var54);
            var48['children'] = var54;
            var51 = var53.bind(var5)(var51, var48);
            var48 = new Array(2);
            var48[0] = var51;
            var51 = _closure1_slot12;
            var49 = var49[var47];
            var49 = var50.bind(var5)(var49);
            var50 = var49.Text;
            var49 = {'variant': 'text-md/normal', 'color': 'text-subtle'};
            var52 = var52.name;
            var49['children'] = var52;
            var49 = var51.bind(var5)(var50, var49);
            var48[1] = var49;
            var38['children'] = var48;
            var40 = var41.bind(var5)(var40, var38);
            var38 = new Array(2);
            var38[0] = var40;
            if(var39) { _fun0003_ip = 82; continue _fun0003 }
case 83:
            var41 = _closure1_slot12;
            var40 = _closure1_slot0;
            var48 = _closure1_slot2;
            var39 = 46;
            var39 = var48[var39];
            var39 = var40.bind(var5)(var39);
            var40 = var39.ChevronSmallRightIcon;
            var39 = {};
            var48 = 'icon-muted';
            var39['color'] = var48;
            var39 = var41.bind(var5)(var40, var39);
            _fun0003_ip = 84; continue _fun0003;
case 82:
            var48 = _closure1_slot13;
            var41 = _closure1_slot5;
            var40 = {};
            var49 = var21.fieldButtonTrailing;
            var40['style'] = var49;
            var52 = _closure1_slot12;
            var51 = _closure1_slot0;
            var53 = _closure1_slot2;
            var49 = 45;
            var49 = var53[var49];
            var49 = var51.bind(var5)(var49);
            var50 = var49.NewTag;
            var49 = {};
            var50 = var52.bind(var5)(var50, var49);
            var49 = new Array(2);
            var49[0] = var50;
            var52 = _closure1_slot12;
            var50 = 46;
            var50 = var53[var50];
            var50 = var51.bind(var5)(var50);
            var51 = var50.ChevronSmallRightIcon;
            var50 = {};
            var53 = 'icon-muted';
            var50['color'] = var53;
            var50 = var52.bind(var5)(var51, var50);
            var49[1] = var50;
            var40['children'] = var49;
            var39 = var48.bind(var5)(var41, var40);
case 84:
            var38[1] = var39;
            var35['children'] = var38;
            var35 = var37.bind(var5)(var36, var35);
            var32[1] = var35;
            var39 = _closure1_slot13;
            var38 = _closure1_slot7;
            var36 = {};
            var36['onPress'] = var20;
            var35 = var21.fieldButton;
            var20 = new Array(2);
            var20[0] = var35;
            var35 = var21.fieldButtonBorder;
            var20[1] = var35;
            var36['style'] = var20;
            var36['accessibilityRole'] = var19;
            var40 = _closure1_slot0;
            var37 = _closure1_slot2;
            var19 = var37[var30];
            var19 = var40.bind(var5)(var19);
            var35 = var19.intl;
            var20 = var35.string;
            var52 = _closure1_slot1;
            var19 = var37[var28];
            var19 = var52.bind(var5)(var19);
            var19 = var19["6OxgN7"];
            var19 = var20.bind(var35)(var19);
            var36['accessibilityLabel'] = var19;
            var20 = _closure1_slot5;
            var19 = {};
            var35 = var21.fieldButtonLabel;
            var19['style'] = var35;
            var48 = _closure1_slot12;
            var35 = var37[var47];
            var35 = var40.bind(var5)(var35);
            var41 = var35.Text;
            var35 = {'variant': 'heading-md/semibold', 'color': 'mobile-text-heading-primary'};
            var49 = var37[var30];
            var49 = var40.bind(var5)(var49);
            var51 = var49.intl;
            var50 = var51.string;
            var49 = var37[var28];
            var49 = var52.bind(var5)(var49);
            var49 = var49["6OxgN7"];
            var49 = var50.bind(var51)(var49);
            var35['children'] = var49;
            var41 = var48.bind(var5)(var41, var35);
            var35 = new Array(2);
            var35[0] = var41;
            var41 = _closure1_slot12;
            var37 = var37[var47];
            var37 = var40.bind(var5)(var37);
            var40 = var37.Text;
            var37 = {'variant': null, 'color': 'text-subtle', 'lineClamp': 1};
            if(!var44) { _fun0003_ip = 85; continue _fun0003 }
case 86:
            var43 = 'text-sm/normal';
case 85:
            var37['variant'] = var43;
            var43 = var46.map;
            var42 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 47;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.int2hex;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var44 = var43.bind(var46)(var42);
            var43 = var44.join;
            var42 = ', ';
            var42 = var43.bind(var44)(var42);
            var37['children'] = var42;
            var37 = var41.bind(var5)(var40, var37);
            var35[1] = var37;
            var19['children'] = var35;
            var19 = var39.bind(var5)(var20, var19);
            var41 = new Array(2);
            var41[0] = var19;
            var20 = _closure1_slot13;
            var19 = _closure1_slot5;
            var42 = {};
            var35 = var21.fieldButtonChevron;
            var42['style'] = var35;
            var44 = _closure1_slot12;
            var40 = _closure1_slot1;
            var37 = _closure1_slot2;
            var35 = 48;
            var35 = var37[var35];
            var43 = var40.bind(var5)(var35);
            var35 = {};
            var35['colors'] = var46;
            var35['effectId'] = var45;
            var35 = var44.bind(var5)(var43, var35);
            var43 = new Array(2);
            var43[0] = var35;
            var46 = _closure1_slot12;
            var35 = _closure1_slot0;
            var44 = 46;
            var44 = var37[var44];
            var44 = var35.bind(var5)(var44);
            var45 = var44.ChevronSmallRightIcon;
            var44 = {};
            var47 = 'icon-muted';
            var44['color'] = var47;
            var44 = var46.bind(var5)(var45, var44);
            var43[1] = var44;
            var42['children'] = var43;
            var42 = var20.bind(var5)(var19, var42);
            var41[1] = var42;
            var36['children'] = var41;
            var36 = var39.bind(var5)(var38, var36);
            var32[2] = var36;
            var18['children'] = var32;
            var18 = var29.bind(var5)(var23, var18);
            var15[1] = var18;
            var18 = {};
            var21 = var21.buttonContainer;
            var18['style'] = var21;
            var32 = _closure1_slot12;
            var23 = 49;
            var21 = var37[var23];
            var21 = var35.bind(var5)(var21);
            var29 = var21.Button;
            var21 = {'text': null, 'onPress': null, 'variant': 'tertiary', 'size': 'lg', 'grow': true, 'icon': null, 'iconPosition': 'start'};
            var36 = var37[var30];
            var36 = var35.bind(var5)(var36);
            var39 = var36.intl;
            var38 = var39.string;
            var36 = var37[var28];
            var36 = var40.bind(var5)(var36);
            var36 = var36.NOGFds;
            var36 = var38.bind(var39)(var36);
            var21['text'] = var36;
            var21['onPress'] = var33;
            var36 = _closure1_slot12;
            var33 = 50;
            var33 = var37[var33];
            var33 = var35.bind(var5)(var33);
            var35 = var33.DiceIcon;
            var33 = {};
            var33 = var36.bind(var5)(var35, var33);
            var21['icon'] = var33;
            var29 = var32.bind(var5)(var29, var21);
            var21 = new Array(3);
            var21[0] = var29;
            var29 = var27 == var22;
            if(!var29) { _fun0003_ip = 87; continue _fun0003 }
case 88:
            var29 = var27 != var31;
case 87:
            if(!var29) { _fun0003_ip = 89; continue _fun0003 }
case 90:
            var33 = _closure1_slot12;
            var35 = _closure1_slot0;
            var37 = _closure1_slot2;
            var31 = var37[var23];
            var31 = var35.bind(var5)(var31);
            var32 = var31.Button;
            var31 = {'text': null, 'onPress': null, 'variant': 'tertiary', 'size': 'lg', 'grow': true, 'icon': null, 'iconPosition': 'start'};
            var36 = var37[var30];
            var36 = var35.bind(var5)(var36);
            var39 = var36.intl;
            var38 = var39.string;
            var40 = _closure1_slot1;
            var36 = var37[var28];
            var36 = var40.bind(var5)(var36);
            var36 = var36.ymq8WQ;
            var36 = var38.bind(var39)(var36);
            var31['text'] = var36;
            var31['onPress'] = var34;
            var36 = _closure1_slot12;
            var34 = 51;
            var34 = var37[var34];
            var34 = var35.bind(var5)(var34);
            var35 = var34.DenyIcon;
            var34 = {};
            var34 = var36.bind(var5)(var35, var34);
            var31['icon'] = var34;
            var29 = var33.bind(var5)(var32, var31);
case 89:
            var21[1] = var29;
            var22 = var27 != var22;
            if(!var22) { _fun0003_ip = 91; continue _fun0003 }
case 92:
            var24 = var27 != var24;
            if(var24) { _fun0003_ip = 93; continue _fun0003 }
case 94:
            var24 = var27 != var25;
case 93:
            var22 = var24;
case 91:
            if(!var22) { _fun0003_ip = 95; continue _fun0003 }
case 96:
            var25 = _closure1_slot12;
            var27 = _closure1_slot0;
            var29 = _closure1_slot2;
            var23 = var29[var23];
            var23 = var27.bind(var5)(var23);
            var24 = var23.Button;
            var23 = {'text': null, 'onPress': null, 'variant': 'tertiary', 'size': 'lg', 'grow': true, 'icon': null, 'iconPosition': 'start'};
            var30 = var29[var30];
            var30 = var27.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var32 = _closure1_slot1;
            var28 = var29[var28];
            var28 = var32.bind(var5)(var28);
            var28 = var28.j/KRxc;
            var28 = var30.bind(var31)(var28);
            var23['text'] = var28;
            var23['onPress'] = var26;
            var28 = _closure1_slot12;
            var26 = 51;
            var26 = var29[var26];
            var26 = var27.bind(var5)(var26);
            var27 = var26.DenyIcon;
            var26 = {};
            var26 = var28.bind(var5)(var27, var26);
            var23['icon'] = var26;
            var22 = var25.bind(var5)(var24, var23);
case 95:
            var21[2] = var22;
            var18['children'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var15[2] = var18;
            var12['children'] = var15;
            var14 = var11.bind(var5)(var14, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var15 = _closure1_slot12;
            var14 = _closure1_slot18;
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
case 69:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
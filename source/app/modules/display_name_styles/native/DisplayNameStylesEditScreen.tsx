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
        var2 = 50;
        var2 = var15[var2];
        var2 = var6.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var12 = var2.bottom;
        var5 = 51;
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
                var8 = 52;
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
                var9 = 52;
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
                var4 = 52;
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
        var13 = 52;
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
            var2 = 27;
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
        var8 = 47;
        var8 = var15[var8];
        var8 = var14.bind(var4)(var8);
        var9 = var8.Button;
        var8 = {'variant': 'primary', 'onPress': null, 'size': 'lg'};
        var8['onPress'] = var11;
        var11 = 37;
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
    var13 = var13.space;
    var13 = var13.PX_24;
    var9['gap'] = var13;
    var4['fieldButtonChevron'] = var9;
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
    var4 = 53;
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
            var2 = var2.bind(var3)();
            var _closure2_slot0 = var2;
            var1 = var1.params;
            var27 = null;
            if(!(var27 == var1)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var1 = {};
case 16:
            var22 = var1.guildId;
            var _closure2_slot1 = var22;
            var3 = var1.isTryItOut;
            var _closure2_slot2 = var3;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 12;
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
            var _closure2_slot3 = var32;
            var1 = 13;
            var1 = var6[var1];
            var7 = var4.bind(var5)(var1);
            var1 = var7.useDisplayNameStylesPendingName;
            var29 = var1.bind(var7)(var32, var22);
            var _closure2_slot4 = var29;
            var1 = 14;
            var1 = var6[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useGuildMemberOrUserPendingDisplayNameStyles;
            var1 = var1.bind(var4)(var32, var22);
            var24 = var1.guildDisplayNameStyles;
            var25 = var1.pendingDisplayNameStyles;
            var7 = var1.tryItOutDisplayNameStyles;
            var4 = _closure1_slot1;
            var1 = 15;
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
case 21:
            var6 = var7;
case 20:
            var1['pendingDisplayNameStyles'] = var6;
            var31 = var4.bind(var5)(var1);
            var _closure2_slot5 = var31;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 16;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var6 = var1.bind(var5)();
            var7 = _closure1_slot4;
            var4 = var7.useState;
            var8 = var27 == var31;
            var1 = undefined;
            if(var8) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var1 = var31.fontId;
case 22:
            if(!(var27 == var1)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 17;
            var8 = var10[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.DisplayNameFont;
            var1 = var8.DEFAULT;
case 24:
            var4 = var4.bind(var7)(var1);
            var1 = _closure1_slot3;
            var10 = 2;
            var1 = var1.bind(var5)(var4, var10);
            var23 = 0;
            var28 = var1[var23];
            var _closure2_slot6 = var28;
            var9 = 1;
            var1 = var1[var9];
            var _closure2_slot7 = var1;
            var7 = _closure1_slot4;
            var4 = var7.useState;
            var8 = var27 == var31;
            var1 = undefined;
            if(var8) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var1 = var31.effectId;
case 26:
            if(!(var27 == var1)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 8;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.DisplayNameEffect;
            var1 = var8.SOLID;
case 28:
            var4 = var4.bind(var7)(var1);
            var1 = _closure1_slot3;
            var1 = var1.bind(var5)(var4, var10);
            var45 = var1[var23];
            var _closure2_slot8 = var45;
            var1 = var1[var9];
            var _closure2_slot9 = var1;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 18;
            var1 = var7[var1];
            var8 = var4.bind(var5)(var1);
            var1 = var8.getEffectColorCount;
            var1 = var1.bind(var8)(var45);
            var8 = var1 > var9;
            var _closure2_slot10 = var8;
            var1 = 19;
            var1 = var7[var1];
            var12 = var4.bind(var5)(var1);
            var11 = var12.useIsDisplayNameStylesFlywheelSettersEnabled;
            var1 = 'DisplayNameStylesEditScreen';
            var48 = var11.bind(var12)(var1);
            var1 = 20;
            var1 = var7[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useDisplayNameStylesEffectConfig;
            var55 = var1.bind(var4)(var45);
            var _closure2_slot11 = var55;
            var4 = _closure1_slot1;
            var1 = 21;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var _closure2_slot12 = var1;
            var4 = var27 == var31;
            var1 = undefined;
            if(var4) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var1 = var31.colors;
case 30:
            if(!(var27 == var1)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var1 = new Array(0);
case 32:
            var _closure2_slot13 = var1;
            var7 = _closure1_slot4;
            var4 = var7.useState;
            var11 = var1.length;
            if(!(var11 > var23)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            if(var8) { _fun0003_ip = 34; continue _fun0003 }
case 36:
            var1 = var1[var23];
            _fun0003_ip = 37; continue _fun0003;
case 34:
            var11 = var55.defaultColors;
            var1 = var11[var23];
case 37:
            var1 = var4.bind(var7)(var1);
            var4 = _closure1_slot3;
            var1 = var4.bind(var5)(var1, var10);
            var7 = var1[var23];
            var _closure2_slot14 = var7;
            var1 = var1[var9];
            var _closure2_slot15 = var1;
            var12 = _closure1_slot4;
            var11 = var12.useState;
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
            var1 = var11.bind(var12)(var1);
            var1 = var4.bind(var5)(var1, var10);
            var4 = var1[var23];
            var _closure2_slot16 = var4;
            var1 = var1[var9];
            var _closure2_slot17 = var1;
            var11 = _closure1_slot4;
            var10 = var11.useCallback;
            var9 = function(arg1, arg2) {
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
            var1 = var10.bind(var11)(var9, var1);
            var _closure2_slot18 = var1;
            var11 = _closure1_slot4;
            var10 = var11.useMemo;
            var9 = new Array(5);
            var9[0] = var8;
            var9[1] = var4;
            var9[2] = var45;
            var4 = var55.defaultColors;
            var9[3] = var4;
            var9[4] = var7;
            var4 = function() {
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
            var47 = var10.bind(var11)(var4, var9);
            var _closure2_slot19 = var47;
            var11 = _closure1_slot4;
            var10 = var11.useMemo;
            var9 = new Array(4);
            var9[0] = var31;
            var9[1] = var28;
            var9[2] = var45;
            var9[3] = var47;
            var4 = function() {
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
            var16 = var10.bind(var11)(var4, var9);
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 23;
            var4 = var10[var4];
            var12 = var9.bind(var5)(var4);
            var11 = var12.useDisplayNameStylesHandleApply;
            var4 = {};
            var4['hasChanges'] = var16;
            var4['selectedFontId'] = var28;
            var4['selectedEffectId'] = var45;
            var4['selectedColors'] = var47;
            var14 = var55.defaultColors;
            var14 = var14[var23];
            var4['defaultColor'] = var14;
            var4['guildId'] = var22;
            var4['isTryItOut'] = var3;
            var14 = function onClose() {
                var2 = _closure2_slot0;
                var1 = var2.goBack;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4['onClose'] = var14;
            var17 = var11.bind(var12)(var4);
            var4 = 24;
            var4 = var10[var4];
            var11 = var9.bind(var5)(var4);
            var4 = var11.useVisibleFontOrder;
            var12 = var4.bind(var11)();
            var _closure2_slot20 = var12;
            var4 = 25;
            var4 = var10[var4];
            var9 = var9.bind(var5)(var4);
            var4 = var9.useVisibleEffectOrder;
            var4 = var4.bind(var9)();
            var _closure2_slot21 = var4;
            var11 = _closure1_slot4;
            var10 = var11.useCallback;
            var9 = new Array(3);
            var9[0] = var1;
            var9[1] = var12;
            var9[2] = var4;
            var4 = function() {
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
                    var3 = 26;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.track;
                    var2 = _closure1_slot10;
                    var2 = var2.DISPLAY_NAME_STYLES_SURPRISE_ME;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var33 = var10.bind(var11)(var4, var9);
            var10 = _closure1_slot4;
            var9 = var10.useCallback;
            var4 = new Array(2);
            var4[0] = var2;
            var4[1] = var3;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 27;
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
                    var4 = 29;
                    var4 = var6[var4];
                    var8 = var5.bind(var1)(var4);
                    var7 = var8.setPendingChanges;
                    var4 = {};
                    var9 = null;
                    var4['displayNameStyles'] = var9;
                    var4 = var7.bind(var8)(var4);
                    _fun0008_ip = 56; continue _fun0008;
case 60:
                    var4 = 28;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.setTryItOutDisplayNameStyles;
                    var4 = null;
                    var4 = var5.bind(var6)(var4);
case 56:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 26;
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
            var34 = var9.bind(var10)(var3, var4);
            var9 = _closure1_slot4;
            var4 = var9.useCallback;
            var3 = new Array(2);
            var3[0] = var22;
            var3[1] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 27;
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
            var26 = var4.bind(var9)(var2, var3);
            var9 = _closure1_slot4;
            var4 = var9.useCallback;
            var3 = new Array(2);
            var3[0] = var28;
            var3[1] = var29;
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
                var7 = _closure2_slot6;
                var3['selectedFontId'] = var7;
                var7 = _closure2_slot7;
                var3['onSelectFont'] = var7;
                var2 = _closure2_slot4;
                var3['displayName'] = var2;
                var2 = 'DisplayNameStylesFontPickerSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var19 = var4.bind(var9)(var2, var3);
            var9 = _closure1_slot4;
            var4 = var9.useCallback;
            var3 = new Array(2);
            var3[0] = var45;
            var10 = var27 == var32;
            var2 = undefined;
            if(var10) { _fun0003_ip = 61; continue _fun0003 }
case 62:
            var2 = var32.id;
case 61:
            var3[1] = var2;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
                    var8 = _closure2_slot3;
                    var7 = null;
                    var8 = var7 == var8;
                    var7 = undefined;
                    if(var8) { _fun0009_ip = 63; continue _fun0009 }
case 64:
                    var8 = _closure2_slot3;
                    var7 = var8.id;
case 63:
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
            var50 = var4.bind(var9)(var2, var3);
            var4 = _closure1_slot4;
            var3 = var4.useCallback;
            var2 = new Array(5);
            var2[0] = var8;
            var2[1] = var47;
            var2[2] = var7;
            var2[3] = var45;
            var2[4] = var1;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
                    if(!(var5 !== var3)) { _fun0010_ip = 15; continue _fun0010 }
case 65:
                    var5 = _closure2_slot10;
                    var8 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var6 = 30;
                    var6 = var3[var6];
                    var9 = var8.bind(var1)(var6);
                    var8 = var9.openLazy;
                    var10 = _closure1_slot0;
                    var6 = 32;
                    var6 = var3[var6];
                    var6 = var10.bind(var1)(var6);
                    if(var5) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                    var5 = 36;
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
                    _fun0010_ip = 68; continue _fun0010;
case 66:
                    var5 = 35;
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
                    _fun0010_ip = 68; continue _fun0010;
case 15:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 30;
                    var5 = var3[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.openLazy;
                    var8 = _closure1_slot0;
                    var4 = 32;
                    var4 = var3[var4];
                    var8 = var8.bind(var1)(var4);
                    var4 = 34;
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
            var30 = 37;
            var1 = var7[var30];
            var1 = var2.bind(var5)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var4 = _closure1_slot1;
            var1 = 38;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)(var28);
            var56 = var2.bind(var3)(var1);
            var2 = var27 == var32;
            var1 = null;
            if(var2) { _fun0003_ip = 69; continue _fun0003 }
case 70:
            var4 = _closure1_slot12;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 39;
            var2 = var9[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.ThemeContextProvider;
            var2 = {};
            var2['theme'] = var6;
            var8 = _closure1_slot12;
            var6 = 40;
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
            var59 = var21.contentContainer;
            var60 = var15;
            var18 = copyDataProperties(var60, var59);
            var23 = 0;
            if(!var16) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var23 = 70;
case 71:
            var18 = 'paddingBottom';
            var15[17] = var23;
            var12['contentContainerStyle'] = var15;
            var23 = _closure1_slot12;
            var54 = _closure1_slot1;
            var49 = _closure1_slot2;
            var15 = 41;
            var15 = var49[var15];
            var18 = var54.bind(var5)(var15);
            var15 = {};
            var15['user'] = var32;
            var15['displayName'] = var29;
            var15['guildId'] = var22;
            var15['selectedFontId'] = var28;
            var15['selectedEffectId'] = var45;
            var15['selectedColors'] = var47;
            var18 = var23.bind(var5)(var18, var15);
            var15 = new Array(3);
            var15[0] = var18;
            var29 = _closure1_slot13;
            var23 = _closure1_slot5;
            var18 = {};
            var28 = var21.fieldButtonGroup;
            var18['style'] = var28;
            var38 = _closure1_slot7;
            var32 = {};
            var32['onPress'] = var19;
            var19 = var21.fieldButton;
            var32['style'] = var19;
            var19 = 'button';
            var32['accessibilityRole'] = var19;
            var37 = _closure1_slot0;
            var28 = var49[var30];
            var28 = var37.bind(var5)(var28);
            var39 = var28.intl;
            var36 = var39.string;
            var28 = 42;
            var35 = var49[var28];
            var35 = var54.bind(var5)(var35);
            var35 = var35["0JCuGm"];
            var36 = var36.bind(var39)(var35);
            var39 = global;
            var35 = var39.HermesInternal;
            var35 = var35.concat;
            var52 = '';
            var42 = ', ';
            var35 = var35.bind(var52)(var36, var42, var56);
            var32['accessibilityLabel'] = var35;
            var36 = {};
            var44 = _closure1_slot12;
            var35 = 43;
            var41 = var49[var35];
            var41 = var37.bind(var5)(var41);
            var43 = var41.Text;
            var41 = {'variant': 'heading-md/semibold', 'color': 'mobile-text-heading-primary'};
            var46 = var49[var30];
            var46 = var37.bind(var5)(var46);
            var53 = var46.intl;
            var51 = var53.string;
            var46 = var49[var28];
            var46 = var54.bind(var5)(var46);
            var46 = var46["0JCuGm"];
            var46 = var51.bind(var53)(var46);
            var41['children'] = var46;
            var41 = var44.bind(var5)(var43, var41);
            var43 = new Array(2);
            var43[0] = var41;
            var53 = _closure1_slot12;
            var41 = var49[var35];
            var41 = var37.bind(var5)(var41);
            var51 = var41.Text;
            var46 = {'variant': 'text-md/normal', 'color': 'text-subtle'};
            var44 = 'text-md/normal';
            var41 = 'text-subtle';
            var46['children'] = var56;
            var46 = var53.bind(var5)(var51, var46);
            var43[1] = var46;
            var36['children'] = var43;
            var43 = var29.bind(var5)(var23, var36);
            var36 = new Array(2);
            var36[0] = var43;
            var56 = _closure1_slot12;
            var43 = 44;
            var46 = var49[var43];
            var46 = var37.bind(var5)(var46);
            var53 = var46.ChevronSmallRightIcon;
            var51 = {};
            var46 = 'icon-muted';
            var51['color'] = var46;
            var51 = var56.bind(var5)(var53, var51);
            var36[1] = var51;
            var32['children'] = var36;
            var36 = var29.bind(var5)(var38, var32);
            var32 = new Array(3);
            var32[0] = var36;
            var36 = {};
            var36['onPress'] = var50;
            var51 = var21.fieldButton;
            var50 = new Array(2);
            var50[0] = var51;
            var51 = var21.fieldButtonBorder;
            var50[1] = var51;
            var36['style'] = var50;
            var36['accessibilityRole'] = var19;
            var50 = var49[var30];
            var50 = var37.bind(var5)(var50);
            var53 = var50.intl;
            var51 = var53.string;
            var50 = var49[var28];
            var50 = var54.bind(var5)(var50);
            var50 = var50.RVtMxT;
            var51 = var51.bind(var53)(var50);
            var50 = var55.name;
            var39 = var39.HermesInternal;
            var39 = var39.concat;
            var39 = var39.bind(var52)(var51, var42, var50);
            var36['accessibilityLabel'] = var39;
            var39 = {};
            var52 = _closure1_slot12;
            var50 = var49[var35];
            var50 = var37.bind(var5)(var50);
            var51 = var50.Text;
            var50 = {'variant': 'heading-md/semibold', 'color': 'mobile-text-heading-primary'};
            var53 = var49[var30];
            var53 = var37.bind(var5)(var53);
            var57 = var53.intl;
            var56 = var57.string;
            var53 = var49[var28];
            var53 = var54.bind(var5)(var53);
            var53 = var53.RVtMxT;
            var53 = var56.bind(var57)(var53);
            var50['children'] = var53;
            var51 = var52.bind(var5)(var51, var50);
            var50 = new Array(2);
            var50[0] = var51;
            var53 = _closure1_slot12;
            var51 = var49[var35];
            var51 = var37.bind(var5)(var51);
            var52 = var51.Text;
            var51 = {'variant': 'text-md/normal', 'color': 'text-subtle'};
            var55 = var55.name;
            var51['children'] = var55;
            var51 = var53.bind(var5)(var52, var51);
            var50[1] = var51;
            var39['children'] = var50;
            var50 = var29.bind(var5)(var23, var39);
            var39 = new Array(2);
            var39[0] = var50;
            var52 = _closure1_slot12;
            var50 = var49[var43];
            var50 = var37.bind(var5)(var50);
            var51 = var50.ChevronSmallRightIcon;
            var50 = {};
            var50['color'] = var46;
            var50 = var52.bind(var5)(var51, var50);
            var39[1] = var50;
            var36['children'] = var39;
            var36 = var29.bind(var5)(var38, var36);
            var32[1] = var36;
            var36 = {};
            var36['onPress'] = var20;
            var39 = var21.fieldButton;
            var20 = new Array(2);
            var20[0] = var39;
            var39 = var21.fieldButtonBorder;
            var20[1] = var39;
            var36['style'] = var20;
            var36['accessibilityRole'] = var19;
            var19 = var49[var30];
            var19 = var37.bind(var5)(var19);
            var39 = var19.intl;
            var20 = var39.string;
            var19 = var49[var28];
            var19 = var54.bind(var5)(var19);
            var19 = var19["6OxgN7"];
            var19 = var20.bind(var39)(var19);
            var36['accessibilityLabel'] = var19;
            var19 = {};
            var50 = _closure1_slot12;
            var20 = var49[var35];
            var20 = var37.bind(var5)(var20);
            var39 = var20.Text;
            var20 = {'variant': 'heading-md/semibold', 'color': 'mobile-text-heading-primary'};
            var51 = var49[var30];
            var51 = var37.bind(var5)(var51);
            var53 = var51.intl;
            var52 = var53.string;
            var51 = var49[var28];
            var51 = var54.bind(var5)(var51);
            var51 = var51["6OxgN7"];
            var51 = var52.bind(var53)(var51);
            var20['children'] = var51;
            var39 = var50.bind(var5)(var39, var20);
            var20 = new Array(2);
            var20[0] = var39;
            var39 = _closure1_slot12;
            var35 = var49[var35];
            var35 = var37.bind(var5)(var35);
            var37 = var35.Text;
            var35 = {};
            if(!var48) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var44 = 'text-sm/normal';
case 73:
            var35['variant'] = var44;
            var35['color'] = var41;
            var41 = var47.map;
            var40 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 45;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.int2hex;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var41 = var41.bind(var47)(var40);
            var40 = var41.join;
            var40 = var40.bind(var41)(var42);
            var35['children'] = var40;
            var35 = var39.bind(var5)(var37, var35);
            var20[1] = var35;
            var19['children'] = var20;
            var19 = var29.bind(var5)(var23, var19);
            var39 = new Array(2);
            var39[0] = var19;
            var20 = _closure1_slot13;
            var19 = _closure1_slot5;
            var41 = {};
            var35 = var21.fieldButtonChevron;
            var41['style'] = var35;
            var44 = _closure1_slot12;
            var40 = _closure1_slot1;
            var37 = _closure1_slot2;
            var35 = 46;
            var35 = var37[var35];
            var42 = var40.bind(var5)(var35);
            var35 = {};
            var35['colors'] = var47;
            var35['effectId'] = var45;
            var35 = var44.bind(var5)(var42, var35);
            var42 = new Array(2);
            var42[0] = var35;
            var45 = _closure1_slot12;
            var35 = _closure1_slot0;
            var43 = var37[var43];
            var43 = var35.bind(var5)(var43);
            var44 = var43.ChevronSmallRightIcon;
            var43 = {};
            var43['color'] = var46;
            var43 = var45.bind(var5)(var44, var43);
            var42[1] = var43;
            var41['children'] = var42;
            var41 = var20.bind(var5)(var19, var41);
            var39[1] = var41;
            var36['children'] = var39;
            var36 = var29.bind(var5)(var38, var36);
            var32[2] = var36;
            var18['children'] = var32;
            var18 = var29.bind(var5)(var23, var18);
            var15[1] = var18;
            var18 = {};
            var21 = var21.buttonContainer;
            var18['style'] = var21;
            var32 = _closure1_slot12;
            var23 = 47;
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
            var33 = 48;
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
            if(!var29) { _fun0003_ip = 75; continue _fun0003 }
case 76:
            var29 = var27 != var31;
case 75:
            if(!var29) { _fun0003_ip = 77; continue _fun0003 }
case 78:
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
            var34 = 49;
            var34 = var37[var34];
            var34 = var35.bind(var5)(var34);
            var35 = var34.DenyIcon;
            var34 = {};
            var34 = var36.bind(var5)(var35, var34);
            var31['icon'] = var34;
            var29 = var33.bind(var5)(var32, var31);
case 77:
            var21[1] = var29;
            var22 = var27 != var22;
            if(!var22) { _fun0003_ip = 79; continue _fun0003 }
case 80:
            var24 = var27 != var24;
            if(var24) { _fun0003_ip = 81; continue _fun0003 }
case 82:
            var24 = var27 != var25;
case 81:
            var22 = var24;
case 79:
            if(!var22) { _fun0003_ip = 83; continue _fun0003 }
case 84:
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
            var26 = 49;
            var26 = var29[var26];
            var26 = var27.bind(var5)(var26);
            var27 = var26.DenyIcon;
            var26 = {};
            var26 = var28.bind(var5)(var27, var26);
            var23['icon'] = var26;
            var22 = var25.bind(var5)(var24, var23);
case 83:
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
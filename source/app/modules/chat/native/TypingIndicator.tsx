// app/modules/chat/native/TypingIndicator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function TypingIndicatorInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var17 = var1.channel;
            var7 = var1.typingUserIds;
            var8 = var1.wrapperStyle;
            var21 = var1.gradientColors;
            var12 = var1.gradientLocations;
            var15 = var1.transitionState;
            var _closure2_slot0 = var15;
            var11 = var1.cleanUp;
            var _closure2_slot1 = var11;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 7;
            var1 = var6[var1];
            var4 = undefined;
            var5 = var2.bind(var4)(var1);
            var1 = {};
            var9 = var17.id;
            var1['channelId'] = var9;
            var9 = var17.getGuildId;
            var9 = var9.bind(var17)();
            var1['guildId'] = var9;
            var1['typingUserIds'] = var7;
            var16 = var5.bind(var4)(var1);
            var18 = _closure1_slot0;
            var1 = 8;
            var5 = var6[var1];
            var7 = var18.bind(var4)(var5);
            var5 = var7.useSharedValue;
            var19 = var5.bind(var7)(var4);
            var _closure2_slot2 = var19;
            var10 = _closure1_slot3;
            var9 = var10.useCallback;
            var7 = new Array(1);
            var7[0] = var19;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var3 = _closure2_slot2;
                var2 = var3.set;
                var1 = var1.layout;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var5 = var9.bind(var10)(var5, var7);
            var7 = _closure1_slot10;
            var20 = var7.bind(var4)();
            var7 = 9;
            var7 = var6[var7];
            var10 = var18.bind(var4)(var7);
            var9 = var10.useToken;
            var7 = 6;
            var7 = var6[var7];
            var7 = var2.bind(var4)(var7);
            var7 = var7.modules;
            var7 = var7.mobile;
            var7 = var7.CHAT_INPUT_FLOATING_TYPING_PADDING_TOP;
            var13 = var9.bind(var10)(var7);
            var7 = var6[var1];
            var9 = var18.bind(var4)(var7);
            var7 = var9.useAnimatedStyle;
            var3 = function w() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var4 = var1.bind(var2)();
                    var2 = null;
                    var5 = var2 != var4;
                    if(!var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = var4.y;
                    var1 = var3.toFixed;
                    var7 = 2;
                    var3 = var1.bind(var3)(var7);
                    var6 = var4.height;
                    var1 = var6.toFixed;
                    var1 = var1.bind(var6)(var7);
                    var5 = var3 === var1;
case 2:
                    if(!var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot0;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 10;
                    var6 = var6[var1];
                    var1 = undefined;
                    var1 = var7.bind(var1)(var6);
                    var1 = var1.TransitionStates;
                    var1 = var1.YEETED;
                    var5 = var3 !== var1;
case 4:
                    var1 = {};
                    var3 = 0;
                    if(!var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = 1;
case 6:
                    var1['opacity'] = var3;
                    var3 = var2 == var4;
                    var13 = undefined;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = var4.height;
case 8:
                    var1['top'] = var2;
                    var3 = {};
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 11;
                    var6 = var9[var6];
                    var7 = var7.bind(var13)(var6);
                    var6 = var7.withSpring;
                    var8 = 0;
                    if(!var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var4 = var4.height;
                    var8 = -var4;
case 10:
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var4 = 12;
                    var4 = var14[var4];
                    var4 = var12.bind(var13)(var4);
                    var17 = var4.springStandard;
                    var4 = function t(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                            var3 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 10;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.TransitionStates;
                            var2 = var2.YEETED;
                            var1 = var3 === var2;
case 12:
                            if(!var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 8;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot1;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
case 14:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var9 = {};
                    var11 = _closure2_slot0;
                    var9['transitionState'] = var11;
                    var11 = 10;
                    var11 = var14[var11];
                    var11 = var12.bind(var13)(var11);
                    var11 = var11.TransitionStates;
                    var9['TransitionStates'] = var11;
                    var11 = 8;
                    var11 = var14[var11];
                    var11 = var12.bind(var13)(var11);
                    var11 = var11.runOnJS;
                    var9['runOnJS'] = var11;
                    var10 = _closure2_slot1;
                    var9['cleanUp'] = var10;
                    var4['__closure'] = var9;
                    var9 = 10182848545071.0;
                    var4['__workletHash'] = var9;
                    var2 = _closure1_slot12;
                    var4['__initData'] = var2;
                    var16 = 'respect-motion-settings';
                    var19 = var7;
                    var18 = var8;
                    var15 = var4;
                    var2 = var19[var6](var18, var17, var16, var15, var14);
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var10 = {};
            var10['typingIndicatorLayout'] = var19;
            var10['transitionState'] = var15;
            var15 = 10;
            var15 = var6[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.TransitionStates;
            var10['TransitionStates'] = var15;
            var15 = 11;
            var15 = var6[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.withSpring;
            var10['withSpring'] = var15;
            var15 = 12;
            var15 = var6[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.springStandard;
            var10['springStandard'] = var15;
            var15 = var6[var1];
            var15 = var18.bind(var4)(var15);
            var15 = var15.runOnJS;
            var10['runOnJS'] = var15;
            var10['cleanUp'] = var11;
            var3['__closure'] = var10;
            var10 = 8910299992702.0;
            var3['__workletHash'] = var10;
            var10 = _closure1_slot11;
            var3['__initData'] = var10;
            var7 = var7.bind(var9)(var3);
            var3 = _closure1_slot9;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var9 = var20.typingWrapper;
            var6 = new Array(3);
            var6[0] = var9;
            var6[1] = var8;
            var6[2] = var7;
            var1['style'] = var6;
            var1['onLayout'] = var5;
            var15 = null;
            var5 = var15 != var21;
            var6 = null;
            if(!var5) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = _closure1_slot9;
            var7 = _closure1_slot5;
            var5 = {};
            var9 = _closure1_slot4;
            var9 = var9.absoluteFill;
            var5['style'] = var9;
            var9 = 'none';
            var5['pointerEvents'] = var9;
            var11 = _closure1_slot8;
            var10 = _closure1_slot1;
            var18 = _closure1_slot2;
            var9 = 13;
            var9 = var18[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['colors'] = var21;
            var9['locations'] = var12;
            var12 = {};
            var12['height'] = var13;
            var9['style'] = var12;
            var12 = {'x': 0, 'y': 0};
            var9['start'] = var12;
            var19 = 1;
            var12 = {'x': 0, 'y': 1};
            var9['end'] = var12;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot8;
            var11 = _closure1_slot5;
            var10 = {};
            var18 = var20.typingScrimSolid;
            var13 = new Array(2);
            var13[0] = var18;
            var18 = {};
            var19 = var21[var19];
            var18['backgroundColor'] = var19;
            var13[1] = var18;
            var10['style'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var5['children'] = var9;
            var6 = var8.bind(var4)(var7, var5);
case 16:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var20.wrapperHoriz;
            var6['style'] = var9;
            var11 = _closure1_slot9;
            var10 = _closure1_slot5;
            var9 = {};
            var12 = var20.horiz;
            var9['style'] = var12;
            var12 = var15 != var16;
            var13 = null;
            if(!var12) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var19 = _closure1_slot8;
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var12 = 14;
            var12 = var21[var12];
            var12 = var18.bind(var4)(var12);
            var18 = var12.Ellipsis;
            var12 = {};
            var13 = var19.bind(var4)(var18, var12);
case 18:
            var12 = new Array(2);
            var12[0] = var13;
            var19 = _closure1_slot8;
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var13 = 15;
            var13 = var21[var13];
            var13 = var18.bind(var4)(var13);
            var18 = var13.Text;
            var13 = {'style': null, 'lineClamp': 1, 'maxFontSizeMultiplier': 2, 'variant': 'text-xs/medium', 'color': 'interactive-text-default', 'ellipsizeMode': 'tail'};
            var20 = var20.text;
            var13['style'] = var20;
            var13['children'] = var16;
            var13 = var19.bind(var4)(var18, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var11 = var17.rateLimitPerUser;
            var10 = 0;
            var11 = var11 > var10;
            var10 = null;
            if(!var11) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var13 = _closure1_slot8;
            var12 = _closure1_slot1;
            var18 = _closure1_slot2;
            var11 = 16;
            var11 = var18[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['channel'] = var17;
            var15 = var15 != var16;
            var11['hasTypingText'] = var15;
            var14 = _closure1_slot7;
            var14 = var14.SendMessage;
            var11['slowmodeType'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 20:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function renderTypingIndicator(arg1, arg2, arg3, arg4) {
        var5 = _closure1_slot8;
        var4 = _closure1_slot13;
        var3 = {};
        var7 = arg2;
        var8 = var3;
        var1 = copyDataProperties(var8, var7);
        var2 = arg3;
        var1 = 'transitionState';
        var3[0] = var2;
        var2 = arg4;
        var1 = 'cleanUp';
        var3[0] = var2;
        var2 = undefined;
        var1 = arg1;
        var1 = var5.bind(var2)(var4, var3, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var7 = var4.StyleSheet;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useChatShowingAutoComplete;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SlowmodeType;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingVertical': 4, 'paddingHorizontal': 16, 'alignSelf': 'stretch'};
    var11 = 6;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_TYPING_INDICATOR_BACKGROUND_DEFAULT;
    var9['backgroundColor'] = var13;
    var4['typingWrapper'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['typingScrimSolid'] = var9;
    var9 = {'justifyContent': 'space-between', 'flexDirection': 'row', 'alignItems': 'center'};
    var4['wrapperHoriz'] = var9;
    var9 = {'marginRight': null, 'alignItems': 'center', 'flexDirection': 'row', 'flex': 1};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9['marginRight'] = var11;
    var4['horiz'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['text'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = "function TypingIndicatorTsx1(){const{typingIndicatorLayout,transitionState,TransitionStates,withSpring,springStandard,runOnJS,cleanUp}=this.__closure;const layout=typingIndicatorLayout.get();const laidOutAndTransitioned=layout!=null&&layout.y.toFixed(2)===layout.height.toFixed(2)&&transitionState!==TransitionStates.YEETED;return{opacity:!laidOutAndTransitioned?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:withSpring(laidOutAndTransitioned?-layout.height:0,springStandard,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}})}]};}";
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function TypingIndicatorTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/TypingIndicator.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TypingIndicator(arg1) {
        var2 = arg1;
        var14 = var2.channel;
        var _closure2_slot0 = var14;
        var3 = var2.screenIndex;
        var11 = var2.wrapperStyle;
        var _closure2_slot1 = var11;
        var10 = var2.gradientColors;
        var _closure2_slot2 = var10;
        var9 = var2.gradientLocations;
        var _closure2_slot3 = var9;
        var2 = _closure1_slot6;
        var4 = undefined;
        var12 = var2.bind(var4)(var3);
        var _closure2_slot4 = var12;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 17;
        var3 = var7[var3];
        var13 = var2.bind(var4)(var3);
        var8 = var13.useTypingUserIds;
        var6 = var14.id;
        var3 = 4;
        var13 = var8.bind(var13)(var6, var3);
        var _closure2_slot5 = var13;
        var8 = _closure1_slot3;
        var6 = var8.useMemo;
        var3 = new Array(6);
        var3[0] = var14;
        var3[1] = var13;
        var3[2] = var12;
        var3[3] = var11;
        var3[4] = var10;
        var3[5] = var9;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = _closure2_slot0;
                var1 = var1.rateLimitPerUser;
                var2 = 0;
                if(!(!(var1 > var2))) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var1 = _closure2_slot5;
                var1 = var1.length;
                var2 = var1 > var2;
                var1 = undefined;
                if(!var2) { _fun0004_ip = 24; continue _fun0004 }
case 22:
                var2 = _closure2_slot4;
                var1 = undefined;
                if(var2) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var2 = {};
                var4 = _closure2_slot0;
                var2['channel'] = var4;
                var4 = _closure2_slot5;
                var2['typingUserIds'] = var4;
                var4 = _closure2_slot1;
                var2['wrapperStyle'] = var4;
                var4 = _closure2_slot2;
                var2['gradientColors'] = var4;
                var3 = _closure2_slot3;
                var2['gradientLocations'] = var3;
                var1 = var2;
case 24:
                return var1;
            }
        };
        var6 = var6.bind(var8)(var1, var3);
        var3 = _closure1_slot8;
        var1 = 10;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.TransitionItem;
        var1 = {};
        var1['item'] = var6;
        var5 = _closure1_slot14;
        var1['renderItem'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
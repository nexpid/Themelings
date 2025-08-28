// app/modules/chat/native/TypingIndicator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function TypingIndicatorInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var16 = var1.channel;
            var7 = var1.typingUserIds;
            var11 = var1.transitionState;
            var _closure2_slot0 = var11;
            var10 = var1.cleanUp;
            var _closure2_slot1 = var10;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 7;
            var1 = var6[var1];
            var4 = undefined;
            var5 = var2.bind(var4)(var1);
            var1 = {};
            var8 = var16.id;
            var1['channelId'] = var8;
            var8 = var16.getGuildId;
            var8 = var8.bind(var16)();
            var1['guildId'] = var8;
            var1['typingUserIds'] = var7;
            var15 = var5.bind(var4)(var1);
            var12 = _closure1_slot0;
            var1 = 8;
            var5 = var6[var1];
            var7 = var12.bind(var4)(var5);
            var5 = var7.useSharedValue;
            var14 = var5.bind(var7)(var4);
            var _closure2_slot2 = var14;
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var7 = new Array(1);
            var7[0] = var14;
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
            var5 = var8.bind(var9)(var5, var7);
            var7 = _closure1_slot9;
            var19 = var7.bind(var4)();
            var7 = var6[var1];
            var8 = var12.bind(var4)(var7);
            var7 = var8.useAnimatedStyle;
            var3 = function I() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var4 = var1.bind(var2)();
                    var2 = null;
                    var5 = var2 != var4;
                    if(!var5) { _fun0002_ip = 64; continue _fun0002 }
 25:
                    var3 = var4.y;
                    var1 = var3.toFixed;
                    var7 = 2;
                    var3 = var1.bind(var3)(var7);
                    var6 = var4.height;
                    var1 = var6.toFixed;
                    var1 = var1.bind(var6)(var7);
                    var5 = var3 === var1;
 64:
                    if(!var5) { _fun0002_ip = 112; continue _fun0002 }
 67:
                    var3 = _closure2_slot0;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 9;
                    var6 = var6[var1];
                    var1 = undefined;
                    var1 = var7.bind(var1)(var6);
                    var1 = var1.TransitionStates;
                    var1 = var1.YEETED;
                    var5 = var3 !== var1;
 112:
                    var1 = {};
                    var3 = 0;
                    if(!var5) { _fun0002_ip = 122; continue _fun0002 }
 119:
                    var3 = 1;
 122:
                    var1['opacity'] = var3;
                    var3 = var2 == var4;
                    var13 = undefined;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 142; continue _fun0002 }
 137:
                    var2 = var4.height;
 142:
                    var1['top'] = var2;
                    var3 = {};
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 10;
                    var6 = var9[var6];
                    var7 = var7.bind(var13)(var6);
                    var6 = var7.withSpring;
                    var8 = 0;
                    if(!var5) { _fun0002_ip = 189; continue _fun0002 }
 181:
                    var4 = var4.height;
                    var8 = -var4;
 189:
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var4 = 11;
                    var4 = var14[var4];
                    var4 = var12.bind(var13)(var4);
                    var17 = var4.springStandard;
                    var4 = function t(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = arg1;
                            if(!var1) { _fun0003_ip = 54; continue _fun0003 }
 6:
                            var3 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 9;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.TransitionStates;
                            var2 = var2.YEETED;
                            var1 = var3 === var2;
 54:
                            if(!var1) { _fun0003_ip = 103; continue _fun0003 }
 57:
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
 103:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var9 = {};
                    var11 = _closure2_slot0;
                    var9['transitionState'] = var11;
                    var11 = 9;
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
                    var2 = _closure1_slot11;
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
            var9 = {};
            var9['typingIndicatorLayout'] = var14;
            var9['transitionState'] = var11;
            var11 = 9;
            var11 = var6[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.TransitionStates;
            var9['TransitionStates'] = var11;
            var11 = 10;
            var11 = var6[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.withSpring;
            var9['withSpring'] = var11;
            var11 = 11;
            var11 = var6[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.springStandard;
            var9['springStandard'] = var11;
            var11 = var6[var1];
            var11 = var12.bind(var4)(var11);
            var11 = var11.runOnJS;
            var9['runOnJS'] = var11;
            var9['cleanUp'] = var10;
            var3['__closure'] = var9;
            var9 = 8910299992702.0;
            var3['__workletHash'] = var9;
            var9 = _closure1_slot10;
            var3['__initData'] = var9;
            var7 = var7.bind(var8)(var3);
            var3 = _closure1_slot7;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var8 = var19.typingWrapper;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var1['onLayout'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = var19.wrapperHoriz;
            var5['style'] = var8;
            var10 = _closure1_slot8;
            var9 = _closure1_slot4;
            var8 = {};
            var11 = var19.horiz;
            var8['style'] = var11;
            var14 = null;
            var11 = var14 != var15;
            var12 = null;
            if(!var11) { _fun0001_ip = 457; continue _fun0001 }
 425:
            var18 = _closure1_slot7;
            var17 = _closure1_slot1;
            var20 = _closure1_slot2;
            var11 = 12;
            var11 = var20[var11];
            var17 = var17.bind(var4)(var11);
            var11 = {};
            var12 = var18.bind(var4)(var17, var11);
 457:
            var11 = new Array(2);
            var11[0] = var12;
            var18 = _closure1_slot7;
            var17 = _closure1_slot0;
            var20 = _closure1_slot2;
            var12 = 13;
            var12 = var20[var12];
            var12 = var17.bind(var4)(var12);
            var17 = var12.Text;
            var12 = {'style': null, 'lineClamp': 1, 'maxFontSizeMultiplier': 2, 'variant': 'text-xs/medium', 'color': 'interactive-normal', 'ellipsizeMode': 'tail'};
            var19 = var19.text;
            var12['style'] = var19;
            var12['children'] = var15;
            var12 = var18.bind(var4)(var17, var12);
            var11[1] = var12;
            var8['children'] = var11;
            var9 = var10.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var10 = var16.rateLimitPerUser;
            var9 = 0;
            var10 = var10 > var9;
            var9 = null;
            if(!var10) { _fun0001_ip = 633; continue _fun0001 }
 568:
            var12 = _closure1_slot7;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 14;
            var10 = var17[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var16 = var16.id;
            var10['channelId'] = var16;
            var14 = var14 != var15;
            var10['hasTypingText'] = var14;
            var13 = _closure1_slot6;
            var13 = var13.SendMessage;
            var10['slowmodeType'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 633:
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function renderTypingIndicator(arg1, arg2, arg3, arg4) {
        var5 = _closure1_slot7;
        var4 = _closure1_slot12;
        var3 = {};
        var7 = arg2;
        var8 = var3;
        var1 = copyDataProperties(var8, var7);
        var2 = arg3;
        var1 = 'transitionState';
        var3[var1] = var2;
        var2 = arg4;
        var1 = 'cleanUp';
        var3[var1] = var2;
        var2 = undefined;
        var1 = arg1;
        var1 = var5.bind(var2)(var4, var3, var1);
        return var1;
    };
    var _closure1_slot13 = var1;
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
    var11 = 1;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useChatShowingAutoComplete;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SlowmodeType;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'paddingVertical': 4, 'paddingHorizontal': 16, 'alignSelf': 'stretch'};
    var4 = 16;
    var12 = 6;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.TYPING_INDICATOR_BG;
    var10['backgroundColor'] = var14;
    var7['typingWrapper'] = var10;
    var10 = {'justifyContent': 'space-between', 'flexDirection': 'row', 'alignItems': 'center'};
    var7['wrapperHoriz'] = var10;
    var10 = {'marginRight': null, 'alignItems': 'center', 'flexDirection': 'row', 'flex': 1};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var10['marginRight'] = var12;
    var7['horiz'] = var10;
    var10 = {};
    var10['flex'] = var11;
    var7['text'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var7 = {};
    var8 = "function TypingIndicatorTsx1(){const{typingIndicatorLayout,transitionState,TransitionStates,withSpring,springStandard,runOnJS,cleanUp}=this.__closure;const layout=typingIndicatorLayout.get();const laidOutAndTransitioned=layout!=null&&layout.y.toFixed(2)===layout.height.toFixed(2)&&transitionState!==TransitionStates.YEETED;return{opacity:!laidOutAndTransitioned?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:withSpring(laidOutAndTransitioned?-layout.height:0,springStandard,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}})}]};}";
    var7['code'] = var8;
    var _closure1_slot10 = var7;
    var7 = {};
    var8 = 'function TypingIndicatorTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    var7['code'] = var8;
    var _closure1_slot11 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/TypingIndicator.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TypingIndicator(arg1) {
        var2 = arg1;
        var11 = var2.channel;
        var _closure2_slot0 = var11;
        var3 = var2.screenIndex;
        var2 = _closure1_slot5;
        var4 = undefined;
        var9 = var2.bind(var4)(var3);
        var _closure2_slot1 = var9;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 15;
        var3 = var7[var3];
        var10 = var2.bind(var4)(var3);
        var8 = var10.useTypingUserIds;
        var6 = var11.id;
        var3 = 4;
        var10 = var8.bind(var10)(var6, var3);
        var _closure2_slot2 = var10;
        var8 = _closure1_slot3;
        var6 = var8.useMemo;
        var3 = new Array(3);
        var3[0] = var11;
        var3[1] = var10;
        var3[2] = var9;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = _closure2_slot0;
                var1 = var1.rateLimitPerUser;
                var2 = 0;
                if(!(!(var1 > var2))) { _fun0004_ip = 37; continue _fun0004 }
 19:
                var1 = _closure2_slot2;
                var1 = var1.length;
                var2 = var1 > var2;
                var1 = undefined;
                if(!var2) { _fun0004_ip = 68; continue _fun0004 }
 37:
                var2 = _closure2_slot1;
                var1 = undefined;
                if(var2) { _fun0004_ip = 68; continue _fun0004 }
 46:
                var2 = {};
                var4 = _closure2_slot0;
                var2['channel'] = var4;
                var3 = _closure2_slot2;
                var2['typingUserIds'] = var3;
                var1 = var2;
 68:
                return var1;
            }
        };
        var6 = var6.bind(var8)(var1, var3);
        var3 = _closure1_slot7;
        var1 = 9;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.TransitionItem;
        var1 = {};
        var1['item'] = var6;
        var5 = _closure1_slot13;
        var1['renderItem'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
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
case 0:
            var1 = arg1;
            var16 = var1.channel;
            var10 = var1.typingUserIds;
            var14 = var1.transitionState;
            var _closure2_slot0 = var14;
            var7 = var1.cleanUp;
            var _closure2_slot1 = var7;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 7;
            var1 = var6[var1];
            var4 = undefined;
            var5 = var8.bind(var4)(var1);
            var2 = var5.useMobileVisualRefreshConfig;
            var1 = {};
            var9 = 'TypingIndicatorInner';
            var1['location'] = var9;
            var1 = var2.bind(var5)(var1);
            var9 = var1.chatInputFloating;
            var2 = _closure1_slot1;
            var1 = 8;
            var1 = var6[var1];
            var5 = var2.bind(var4)(var1);
            var1 = {};
            var11 = var16.id;
            var1['channelId'] = var11;
            var11 = var16.getGuildId;
            var11 = var11.bind(var16)();
            var1['guildId'] = var11;
            var1['typingUserIds'] = var10;
            var15 = var5.bind(var4)(var1);
            var1 = 9;
            var5 = var6[var1];
            var10 = var8.bind(var4)(var5);
            var5 = var10.useSharedValue;
            var18 = var5.bind(var10)(var4);
            var _closure2_slot2 = var18;
            var12 = _closure1_slot3;
            var11 = var12.useCallback;
            var10 = new Array(1);
            var10[0] = var18;
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
            var5 = var11.bind(var12)(var5, var10);
            var10 = _closure1_slot9;
            var20 = var10.bind(var4)();
            var10 = var6[var1];
            var12 = var8.bind(var4)(var10);
            var11 = var12.useSharedValue;
            var10 = 0;
            var17 = var11.bind(var12)(var10);
            var _closure2_slot3 = var17;
            var19 = _closure1_slot3;
            var12 = var19.useEffect;
            var11 = new Array(3);
            var11[0] = var7;
            var11[1] = var14;
            var11[2] = var17;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.TransitionStates;
                    var3 = var3.YEETED;
                    if(!(var4 === var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure2_slot3;
                    var4 = var5.set;
                    var3 = 0;
                    var3 = var4.bind(var5)(var3);
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
case 2:
                    return var1;
                }
            };
            var7 = var12.bind(var19)(var7, var11);
            var7 = var6[var1];
            var19 = var8.bind(var4)(var7);
            var12 = var19.useAnimatedReaction;
            var11 = function S() {
                var2 = _closure2_slot2;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = {};
            var7['typingIndicatorLayout'] = var18;
            var11['__closure'] = var7;
            var7 = 10758673194436.0;
            var11['__workletHash'] = var7;
            var7 = _closure1_slot10;
            var11['__initData'] = var7;
            var7 = function f(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var2 = arg2;
                    var2 = var1 !== var2;
                    if(!var2) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var3 = null;
                    var2 = var3 != var1;
case 4:
                    if(!var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var4 = var1.y;
                    var3 = var4.toFixed;
                    var6 = 2;
                    var4 = var3.bind(var4)(var6);
                    var5 = var1.height;
                    var3 = var5.toFixed;
                    var3 = var3.bind(var5)(var6);
                    var2 = var4 === var3;
case 6:
                    if(!var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var3 = _closure2_slot3;
                    var2 = var3.set;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 11;
                    var5 = var9[var4];
                    var4 = undefined;
                    var7 = var8.bind(var4)(var5);
                    var6 = var7.withSpring;
                    var1 = var1.height;
                    var5 = -var1;
                    var1 = 12;
                    var1 = var9[var1];
                    var1 = var8.bind(var4)(var1);
                    var4 = var1.springStandard;
                    var1 = 'respect-motion-settings';
                    var1 = var6.bind(var7)(var5, var4, var1);
                    var1 = var2.bind(var3)(var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var21 = {};
            var21['translateYValue'] = var17;
            var22 = 11;
            var22 = var6[var22];
            var22 = var8.bind(var4)(var22);
            var22 = var22.withSpring;
            var21['withSpring'] = var22;
            var22 = 12;
            var22 = var6[var22];
            var22 = var8.bind(var4)(var22);
            var22 = var22.springStandard;
            var21['springStandard'] = var22;
            var7['__closure'] = var21;
            var21 = 14874351700395.0;
            var7['__workletHash'] = var21;
            var21 = _closure1_slot11;
            var7['__initData'] = var21;
            var7 = var12.bind(var19)(var11, var7);
            var7 = var6[var1];
            var11 = var8.bind(var4)(var7);
            var7 = var11.useAnimatedStyle;
            var3 = function E() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = var3.get;
                    var4 = var1.bind(var3)();
                    var1 = {};
                    var5 = _closure2_slot3;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var5 = 0;
                    if(!(var5 !== var3)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var7 = _closure2_slot0;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 10;
                    var6 = var6[var3];
                    var3 = undefined;
                    var3 = var8.bind(var3)(var6);
                    var3 = var3.TransitionStates;
                    var6 = var3.YEETED;
                    var3 = 1;
                    if(!(var7 === var6)) { _fun0004_ip = 12; continue _fun0004 }
case 10:
                    var3 = 0;
case 12:
                    var1['opacity'] = var3;
                    var3 = null;
                    var5 = var3 == var4;
                    var3 = undefined;
                    if(var5) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var3 = var4.height;
case 13:
                    var1['top'] = var3;
                    var3 = {};
                    var4 = _closure2_slot3;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var12['typingIndicatorLayout'] = var18;
            var12['translateYValue'] = var17;
            var12['transitionState'] = var14;
            var14 = 10;
            var14 = var6[var14];
            var14 = var8.bind(var4)(var14);
            var14 = var14.TransitionStates;
            var12['TransitionStates'] = var14;
            var3['__closure'] = var12;
            var12 = 15240163018691.0;
            var3['__workletHash'] = var12;
            var12 = _closure1_slot12;
            var3['__initData'] = var12;
            var7 = var7.bind(var11)(var3);
            var3 = 13;
            var3 = var6[var3];
            var11 = var8.bind(var4)(var3);
            var8 = var11.useToken;
            var3 = 6;
            var3 = var6[var3];
            var3 = var2.bind(var4)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING;
            var14 = var8.bind(var11)(var3);
            var3 = _closure1_slot7;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var8 = var20.typingWrapper;
            var6 = new Array(3);
            var6[0] = var8;
            var8 = undefined;
            if(!var9) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var11 = var20.floatingWrapper;
            var9 = new Array(2);
            var9[0] = var11;
            var11 = {};
            var12 = 2;
            var12 = var12 * var14;
            var11['paddingLeft'] = var12;
            var9[1] = var11;
            var8 = var9;
case 15:
            var6[1] = var8;
            var6[2] = var7;
            var1['style'] = var6;
            var1['onLayout'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = var20.wrapperHoriz;
            var5['style'] = var8;
            var11 = _closure1_slot8;
            var9 = _closure1_slot4;
            var8 = {};
            var12 = var20.horiz;
            var8['style'] = var12;
            var14 = null;
            var12 = var14 != var15;
            var17 = null;
            if(!var12) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var19 = _closure1_slot7;
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var12 = 14;
            var12 = var21[var12];
            var12 = var18.bind(var4)(var12);
            var18 = var12.Ellipsis;
            var12 = {};
            var17 = var19.bind(var4)(var18, var12);
case 17:
            var12 = new Array(2);
            var12[0] = var17;
            var19 = _closure1_slot7;
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var17 = 15;
            var17 = var21[var17];
            var17 = var18.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {'style': null, 'lineClamp': 1, 'maxFontSizeMultiplier': 2, 'variant': 'text-xs/medium', 'color': 'interactive-text-default', 'ellipsizeMode': 'tail'};
            var20 = var20.text;
            var17['style'] = var20;
            var17['children'] = var15;
            var17 = var19.bind(var4)(var18, var17);
            var12[1] = var17;
            var8['children'] = var12;
            var9 = var11.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = var16.rateLimitPerUser;
            var10 = var9 > var10;
            var9 = null;
            if(!var10) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var12 = _closure1_slot7;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 16;
            var10 = var17[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['channel'] = var16;
            var14 = var14 != var15;
            var10['hasTypingText'] = var14;
            var13 = _closure1_slot6;
            var13 = var13.SendMessage;
            var10['slowmodeType'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 19:
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function renderTypingIndicator(arg1, arg2, arg3, arg4) {
        var5 = _closure1_slot7;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
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
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'paddingTop': null, 'paddingBottom': 4, 'paddingHorizontal': 16, 'alignSelf': 'stretch'};
    var12 = 6;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.modules;
    var14 = var14.mobile;
    var14 = var14.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP;
    var10['paddingTop'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.MOBILE_TYPING_INDICATOR_BACKGROUND_DEFAULT;
    var10['backgroundColor'] = var14;
    var4['typingWrapper'] = var10;
    var10 = {};
    var14 = 'transparent';
    var10['backgroundColor'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.modules;
    var14 = var14.mobile;
    var14 = var14.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING;
    var10['paddingRight'] = var14;
    var4['floatingWrapper'] = var10;
    var10 = {'justifyContent': 'space-between', 'flexDirection': 'row', 'alignItems': 'center'};
    var4['wrapperHoriz'] = var10;
    var10 = {'marginRight': null, 'alignItems': 'center', 'flexDirection': 'row', 'flex': 1};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var10['marginRight'] = var12;
    var4['horiz'] = var10;
    var10 = {};
    var10['flex'] = var11;
    var4['text'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var8 = 'function TypingIndicatorTsx1(){const{typingIndicatorLayout}=this.__closure;return typingIndicatorLayout.get();}';
    var4['code'] = var8;
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = "function TypingIndicatorTsx2(current,prev){const{translateYValue,withSpring,springStandard}=this.__closure;if(current===prev)return;if(current==null)return;if(current.y.toFixed(2)!==current.height.toFixed(2))return;translateYValue.set(withSpring(-current.height,springStandard,'respect-motion-settings'));}";
    var4['code'] = var8;
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = 'function TypingIndicatorTsx3(){const{typingIndicatorLayout,translateYValue,transitionState,TransitionStates}=this.__closure;const layout=typingIndicatorLayout.get();return{opacity:translateYValue.get()===0||transitionState===TransitionStates.YEETED?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:translateYValue.get()}]};}';
    var4['code'] = var8;
    var _closure1_slot12 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
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
        var3 = 17;
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
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = _closure2_slot0;
                var1 = var1.rateLimitPerUser;
                var2 = 0;
                if(!(!(var1 > var2))) { _fun0005_ip = 11; continue _fun0005 }
case 4:
                var1 = _closure2_slot2;
                var1 = var1.length;
                var2 = var1 > var2;
                var1 = undefined;
                if(!var2) { _fun0005_ip = 21; continue _fun0005 }
case 11:
                var2 = _closure2_slot1;
                var1 = undefined;
                if(var2) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var2 = {};
                var4 = _closure2_slot0;
                var2['channel'] = var4;
                var3 = _closure2_slot2;
                var2['typingUserIds'] = var3;
                var1 = var2;
case 21:
                return var1;
            }
        };
        var6 = var6.bind(var8)(var1, var3);
        var3 = _closure1_slot7;
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
    var2 = var4.bind(var7)(var2);
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/TypingIndicator.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
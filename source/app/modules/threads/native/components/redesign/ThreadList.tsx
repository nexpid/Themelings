// app/modules/threads/native/components/redesign/ThreadList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function ThreadListSection(arg1) {
        var1 = arg1;
        var6 = var1.title;
        var2 = _closure1_slot7;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 4;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Text;
        var1 = {'style': null, 'accessibilityRole': 'header', 'variant': 'text-xs/bold', 'color': 'header-secondary'};
        var5 = var5.section;
        var1['style'] = var5;
        var5 = var6.toUpperCase;
        var5 = var5.bind(var6)();
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function renderItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.item;
            var3 = var1.type;
            var2 = 'section';
            if(!(var2 !== var3)) { _fun0001_ip = 110; continue _fun0001 }
 21:
            var2 = 'thread';
            if(!(var2 !== var3)) { _fun0001_ip = 33; continue _fun0001 }
 29:
            var2 = undefined;
            return var2;
 33:
            var5 = _closure1_slot6;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var6 = var1.threadId;
            var2['threadId'] = var6;
            var6 = var1.onPress;
            var2['onPress'] = var6;
            var6 = var1.start;
            var2['start'] = var6;
            var6 = var1.end;
            var2['end'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 110:
            var4 = _closure1_slot6;
            var3 = _closure1_slot12;
            var2 = {};
            var1 = var1.title;
            var2['title'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function keyExtractor(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = 'section';
            if(!(var2 !== var3)) { _fun0002_ip = 36; continue _fun0002 }
 16:
            var2 = 'thread';
            if(!(var2 !== var3)) { _fun0002_ip = 28; continue _fun0002 }
 24:
            var2 = undefined;
            return var2;
 28:
            var2 = var1.threadId;
            return var2;
 36:
            var1 = var1.title;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function EnterExitCrossFadeContainer(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var9 = var1.contentContainerStyle;
            var14 = var1.cleanUp;
            var _closure2_slot0 = var14;
            var12 = var1.state;
            var _closure2_slot1 = var12;
            var8 = var1.children;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var10 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 6;
            var3 = var1[var6];
            var7 = var10.bind(var4)(var3);
            var3 = var7.useSharedValue;
            var15 = 7;
            var1 = var1[var15];
            var1 = var10.bind(var4)(var1);
            var1 = var1.TransitionStates;
            var10 = var1.MOUNTED;
            var1 = 0;
            if(!(var12 === var10)) { _fun0003_ip = 102; continue _fun0003 }
 99:
            var1 = 1;
 102:
            var13 = var3.bind(var7)(var1);
            _closure2_slot2 = var13;
            var16 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var6];
            var10 = var16.bind(var4)(var3);
            var7 = var10.useAnimatedStyle;
            var3 = function T() {
                var1 = {};
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 8;
                var3 = var13[var3];
                var11 = undefined;
                var7 = var12.bind(var11)(var3);
                var6 = var7.withSpring;
                var4 = _closure2_slot2;
                var3 = var4.get;
                var5 = var3.bind(var4)();
                var3 = 9;
                var3 = var13[var3];
                var3 = var12.bind(var11)(var3);
                var16 = var3.springStandard;
                var3 = function t(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = arg1;
                        if(!var1) { _fun0004_ip = 54; continue _fun0004 }
 6:
                        var3 = _closure2_slot1;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 7;
                        var4 = var4[var2];
                        var2 = undefined;
                        var2 = var5.bind(var2)(var4);
                        var2 = var2.TransitionStates;
                        var2 = var2.YEETED;
                        var1 = var3 === var2;
 54:
                        if(!var1) { _fun0004_ip = 103; continue _fun0004 }
 57:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.runOnJS;
                        var1 = _closure2_slot0;
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.bind(var2)();
 103:
                        var1 = undefined;
                        return var1;
                    }
                };
                var8 = {};
                var10 = _closure2_slot1;
                var8['state'] = var10;
                var10 = 7;
                var10 = var13[var10];
                var10 = var12.bind(var11)(var10);
                var10 = var10.TransitionStates;
                var8['TransitionStates'] = var10;
                var10 = 6;
                var10 = var13[var10];
                var10 = var12.bind(var11)(var10);
                var10 = var10.runOnJS;
                var8['runOnJS'] = var10;
                var9 = _closure2_slot0;
                var8['cleanUp'] = var9;
                var3['__closure'] = var8;
                var8 = 2519144051135.0;
                var3['__workletHash'] = var8;
                var2 = _closure1_slot10;
                var3['__initData'] = var2;
                var15 = 'respect-motion-settings';
                var18 = var7;
                var17 = var5;
                var14 = var3;
                var2 = var18[var6](var17, var16, var15, var14, var13);
                var1['opacity'] = var2;
                return var1;
            };
            var11 = {};
            var17 = 8;
            var17 = var1[var17];
            var17 = var16.bind(var4)(var17);
            var17 = var17.withSpring;
            var11['withSpring'] = var17;
            var11['opacity'] = var13;
            var17 = 9;
            var17 = var1[var17];
            var17 = var16.bind(var4)(var17);
            var17 = var17.springStandard;
            var11['springStandard'] = var17;
            var11['state'] = var12;
            var15 = var1[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.TransitionStates;
            var11['TransitionStates'] = var15;
            var15 = var1[var6];
            var15 = var16.bind(var4)(var15);
            var15 = var15.runOnJS;
            var11['runOnJS'] = var15;
            var11['cleanUp'] = var14;
            var3['__closure'] = var11;
            var11 = 5037750127944.0;
            var3['__workletHash'] = var11;
            var11 = _closure1_slot9;
            var3['__initData'] = var11;
            var7 = var7.bind(var10)(var3);
            var11 = _closure1_slot3;
            var10 = var11.useEffect;
            var3 = new Array(2);
            var3[0] = var13;
            var3[1] = var12;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var6 = _closure2_slot1;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.TransitionStates;
                    var5 = var2.YEETED;
                    var2 = 1;
                    if(!(var6 === var5)) { _fun0005_ip = 62; continue _fun0005 }
 60:
                    var2 = 0;
 62:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var10.bind(var11)(var2, var3);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = var1[var6];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var6 = _closure1_slot4;
            var10 = var6.absoluteFill;
            var6 = new Array(2);
            var6[0] = var10;
            var6[1] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot6;
            var6 = _closure1_slot5;
            var5 = {};
            var5['style'] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function getThreadListStateKey(arg1) {
        var1 = arg1;
        return var1;
    };
    var _closure1_slot16 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var8 = var6[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.StyleSheet;
    var _closure1_slot4 = var8;
    var7 = var7.View;
    var _closure1_slot5 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'flex': 1, 'flexGrow': 1};
    var7['container'] = var10;
    var10 = {'justifyContent': 'center', 'alignItems': 'center'};
    var7['center'] = var10;
    var10 = {'marginVertical': 16, 'justifyContent': 'center', 'alignItems': 'center'};
    var7['footer'] = var10;
    var10 = {'marginTop': 16, 'marginBottom': 8};
    var7['section'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot7 = var7;
    var4 = var4.Set;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var14 = var7;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = "function ThreadListTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}";
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function ThreadListTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'list';
    var4['LIST'] = var7;
    var7 = 'empty';
    var4['EMPTY'] = var7;
    var7 = 'loading';
    var4['LOADING'] = var7;
    var _closure1_slot11 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/native/components/redesign/ThreadList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ThreadList(arg1) {
        var2 = arg1;
        var17 = var2.channel;
        var14 = var2.onThreadPress;
        var _closure2_slot0 = var14;
        var12 = var2.onCreateThreadPress;
        var _closure2_slot1 = var12;
        var15 = var2.contentContainerStyle;
        var _closure2_slot2 = var15;
        var2 = _closure1_slot7;
        var4 = undefined;
        var10 = var2.bind(var4)();
        var _closure2_slot3 = var10;
        var2 = _closure1_slot0;
        var8 = _closure1_slot2;
        var6 = 10;
        var3 = var8[var6];
        var7 = var2.bind(var4)(var3);
        var3 = var7.useActiveThreads;
        var3 = var3.bind(var7)(var17);
        var16 = var3.joinedThreadIds;
        var _closure2_slot4 = var16;
        var3 = var3.unjoinedThreadIds;
        var _closure2_slot5 = var3;
        var6 = var8[var6];
        var13 = var2.bind(var4)(var6);
        var11 = var13.useArchivedThreads;
        var6 = 11;
        var6 = var8[var6];
        var6 = var2.bind(var4)(var6);
        var6 = var6.ThreadSortOrder;
        var22 = var6.LATEST_ACTIVITY;
        var21 = _closure1_slot8;
        var6 = 12;
        var6 = var8[var6];
        var6 = var2.bind(var4)(var6);
        var6 = var6.ThreadSearchTagSetting;
        var20 = var6.MATCH_SOME;
        var24 = var13;
        var23 = var17;
        var7 = var24[var11](var23, var22, var21, var20, var19);
        var17 = var7.threadIds;
        var _closure2_slot6 = var17;
        var18 = var7.canLoadMore;
        var _closure2_slot7 = var18;
        var6 = var7.loadMore;
        var _closure2_slot8 = var6;
        var13 = var7.loading;
        var _closure2_slot9 = var13;
        var11 = _closure1_slot3;
        var9 = var11.useCallback;
        var7 = new Array(3);
        var7[0] = var13;
        var7[1] = var18;
        var7[2] = var6;
        var6 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = _closure2_slot9;
                var2 = !var2;
                if(!var2) { _fun0006_ip = 17; continue _fun0006 }
 13:
                var2 = _closure2_slot7;
 17:
                if(!var2) { _fun0006_ip = 30; continue _fun0006 }
 20:
                var2 = _closure2_slot8;
                var1 = undefined;
                var1 = var2.bind(var1)();
 30:
                var1 = undefined;
                return var1;
            }
        };
        var11 = var9.bind(var11)(var6, var7);
        var _closure2_slot10 = var11;
        var9 = _closure1_slot3;
        var7 = var9.useMemo;
        var6 = new Array(4);
        var6[0] = var17;
        var6[1] = var16;
        var6[2] = var14;
        var6[3] = var3;
        var3 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = new Array(0);
                var _closure3_slot0 = var1;
                var4 = _closure2_slot4;
                var4 = var4.length;
                var5 = 0;
                if(!(var4 > var5)) { _fun0007_ip = 147; continue _fun0007 }
 28:
                var6 = var1.push;
                var4 = {};
                var7 = 'section';
                var4['type'] = var7;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 13;
                var10 = var12[var7];
                var8 = undefined;
                var10 = var9.bind(var8)(var10);
                var11 = var10.intl;
                var10 = var11.formatToPlainString;
                var7 = var12[var7];
                var7 = var9.bind(var8)(var7);
                var7 = var7.t;
                var9 = var7.fcXlhY;
                var8 = {};
                var7 = _closure2_slot4;
                var12 = var7.length;
                var8['count'] = var12;
                var8 = var10.bind(var11)(var9, var8);
                var4['title'] = var8;
                var4 = var6.bind(var1)(var4);
                var6 = var7.forEach;
                var4 = function(arg1, arg2) {
                    var6 = arg2;
                    var3 = _closure3_slot0;
                    var2 = var3.push;
                    var1 = {};
                    var4 = 'thread';
                    var1['type'] = var4;
                    var4 = arg1;
                    var1['threadId'] = var4;
                    var4 = 0;
                    var4 = var4 === var6;
                    var1['start'] = var4;
                    var5 = _closure2_slot4;
                    var7 = var5.length;
                    var5 = 1;
                    var5 = var7 - var5;
                    var5 = var6 === var5;
                    var1['end'] = var5;
                    var4 = _closure2_slot0;
                    var1['onPress'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var6.bind(var7)(var4);
 147:
                var4 = _closure2_slot5;
                var4 = var4.length;
                if(!(var4 > var5)) { _fun0007_ip = 279; continue _fun0007 }
 160:
                var6 = var1.push;
                var4 = {};
                var7 = 'section';
                var4['type'] = var7;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 13;
                var10 = var12[var7];
                var8 = undefined;
                var10 = var9.bind(var8)(var10);
                var11 = var10.intl;
                var10 = var11.formatToPlainString;
                var7 = var12[var7];
                var7 = var9.bind(var8)(var7);
                var7 = var7.t;
                var9 = var7.GHY7yc;
                var8 = {};
                var7 = _closure2_slot5;
                var12 = var7.length;
                var8['count'] = var12;
                var8 = var10.bind(var11)(var9, var8);
                var4['title'] = var8;
                var4 = var6.bind(var1)(var4);
                var6 = var7.forEach;
                var4 = function(arg1, arg2) {
                    var6 = arg2;
                    var3 = _closure3_slot0;
                    var2 = var3.push;
                    var1 = {};
                    var4 = 'thread';
                    var1['type'] = var4;
                    var4 = arg1;
                    var1['threadId'] = var4;
                    var4 = 0;
                    var4 = var4 === var6;
                    var1['start'] = var4;
                    var5 = _closure2_slot5;
                    var7 = var5.length;
                    var5 = 1;
                    var5 = var7 - var5;
                    var5 = var6 === var5;
                    var1['end'] = var5;
                    var4 = _closure2_slot0;
                    var1['onPress'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var6.bind(var7)(var4);
 279:
                var4 = _closure2_slot6;
                var4 = var4.length;
                if(!(var4 > var5)) { _fun0007_ip = 399; continue _fun0007 }
 292:
                var5 = var1.push;
                var4 = {};
                var6 = 'section';
                var4['type'] = var6;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 13;
                var7 = var11[var6];
                var9 = undefined;
                var7 = var10.bind(var9)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var11[var6];
                var6 = var10.bind(var9)(var6);
                var6 = var6.t;
                var6 = var6.XsgrjY;
                var6 = var7.bind(var8)(var6);
                var4['title'] = var6;
                var4 = var5.bind(var1)(var4);
                var4 = _closure2_slot6;
                var3 = var4.forEach;
                var2 = function(arg1, arg2) {
                    var6 = arg2;
                    var3 = _closure3_slot0;
                    var2 = var3.push;
                    var1 = {};
                    var4 = 'thread';
                    var1['type'] = var4;
                    var4 = arg1;
                    var1['threadId'] = var4;
                    var4 = 0;
                    var4 = var4 === var6;
                    var1['start'] = var4;
                    var5 = _closure2_slot6;
                    var7 = var5.length;
                    var5 = 1;
                    var5 = var7 - var5;
                    var5 = var6 === var5;
                    var1['end'] = var5;
                    var4 = _closure2_slot0;
                    var1['onPress'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
 399:
                return var1;
            }
        };
        var14 = var7.bind(var9)(var3, var6);
        var _closure2_slot11 = var14;
        var9 = _closure1_slot3;
        var7 = var9.useMemo;
        var3 = var14.length;
        var6 = new Array(2);
        var6[0] = var3;
        var6[1] = var13;
        var3 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = _closure2_slot9;
                if(!var2) { _fun0008_ip = 25; continue _fun0008 }
 10:
                var2 = _closure2_slot11;
                var3 = var2.length;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0008_ip = 89; continue _fun0008 }
 25:
                var1 = _closure2_slot11;
                var2 = var1.length;
                var1 = 0;
                if(!(var1 !== var2)) { _fun0008_ip = 63; continue _fun0008 }
 40:
                var1 = _closure1_slot11;
                var2 = var1.LIST;
                var1 = new Array(1);
                var1[0] = var2;
                _fun0008_ip = 87; continue _fun0008;
 63:
                var2 = _closure1_slot11;
                var3 = var2.EMPTY;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
 87:
                _fun0008_ip = 113; continue _fun0008;
 89:
                var2 = _closure1_slot11;
                var3 = var2.LOADING;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
 113:
                return var1;
            }
        };
        var7 = var7.bind(var9)(var3, var6);
        var9 = _closure1_slot3;
        var6 = var9.useCallback;
        var3 = new Array(8);
        var3[0] = var15;
        var3[1] = var14;
        var3[2] = var13;
        var3[3] = var12;
        var3[4] = var11;
        var11 = var10.center;
        var3[5] = var11;
        var11 = var10.container;
        var3[6] = var11;
        var10 = var10.footer;
        var3[7] = var10;
        var1 = function(arg1, arg2, arg3, arg4) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var5 = arg1;
                var3 = arg2;
                var7 = arg3;
                var6 = arg4;
                var2 = _closure1_slot11;
                var2 = var2.EMPTY;
                if(!(var2 !== var3)) { _fun0009_ip = 433; continue _fun0009 }
 32:
                var2 = _closure1_slot11;
                var2 = var2.LOADING;
                if(!(var2 !== var3)) { _fun0009_ip = 332; continue _fun0009 }
 49:
                var2 = _closure1_slot11;
                var2 = var2.LIST;
                if(!(var2 !== var3)) { _fun0009_ip = 67; continue _fun0009 }
 63:
                var2 = undefined;
                return var2;
 67:
                var8 = _closure1_slot6;
                var4 = _closure1_slot15;
                var3 = {};
                var2 = _closure2_slot3;
                var2 = var2.container;
                var3['contentContainerStyle'] = var2;
                var3['state'] = var7;
                var3['cleanUp'] = var6;
                var11 = _closure1_slot6;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var2 = 16;
                var9 = var17[var2];
                var2 = undefined;
                var9 = var16.bind(var2)(var9);
                var10 = var9.AnimatedFlashList;
                var9 = {};
                var13 = _closure2_slot11;
                var9['data'] = var13;
                var13 = _closure1_slot13;
                var9['renderItem'] = var13;
                var13 = _closure1_slot14;
                var9['keyExtractor'] = var13;
                var13 = _closure2_slot10;
                var9['onEndReached'] = var13;
                var13 = 0.4;
                var9['onEndReachedThreshold'] = var13;
                var13 = 13;
                var14 = var17[var13];
                var14 = var16.bind(var2)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var2)(var13);
                var13 = var13.t;
                var13 = var13.B2panJ;
                var13 = var14.bind(var15)(var13);
                var9['accessibilityLabel'] = var13;
                var13 = 64;
                var9['estimatedItemSize'] = var13;
                var14 = _closure2_slot9;
                var13 = undefined;
                if(!var14) { _fun0009_ip = 275; continue _fun0009 }
 255:
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var14 = 15;
                var14 = var16[var14];
                var13 = var15.bind(var2)(var14);
 275:
                var9['ListFooterComponent'] = var13;
                var14 = _closure2_slot9;
                var13 = undefined;
                if(!var14) { _fun0009_ip = 299; continue _fun0009 }
 289:
                var14 = _closure2_slot3;
                var13 = var14.footer;
 299:
                var9['ListFooterComponentStyle'] = var13;
                var12 = _closure2_slot2;
                var9['contentContainerStyle'] = var12;
                var9 = var11.bind(var2)(var10, var9);
                var3['children'] = var9;
                var2 = var8.bind(var2)(var4, var3, var5);
                return var2;
 332:
                var8 = _closure1_slot6;
                var4 = _closure1_slot15;
                var3 = {};
                var9 = _closure2_slot3;
                var10 = var9.container;
                var2 = new Array(2);
                var2[0] = var10;
                var9 = var9.center;
                var2[1] = var9;
                var3['contentContainerStyle'] = var2;
                var3['state'] = var7;
                var3['cleanUp'] = var6;
                var11 = _closure1_slot6;
                var10 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 15;
                var9 = var9[var2];
                var2 = undefined;
                var10 = var10.bind(var2)(var9);
                var9 = {};
                var9 = var11.bind(var2)(var10, var9);
                var3['children'] = var9;
                var2 = var8.bind(var2)(var4, var3, var5);
                return var2;
 433:
                var4 = _closure1_slot6;
                var3 = _closure1_slot15;
                var2 = {};
                var8 = _closure2_slot3;
                var8 = var8.container;
                var2['contentContainerStyle'] = var8;
                var2['state'] = var7;
                var2['cleanUp'] = var6;
                var8 = _closure1_slot6;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 14;
                var6 = var6[var1];
                var1 = undefined;
                var7 = var7.bind(var1)(var6);
                var6 = {};
                var9 = _closure2_slot1;
                var6['onCreateThreadPress'] = var9;
                var6 = var8.bind(var1)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            }
        };
        var6 = var6.bind(var9)(var1, var3);
        var3 = _closure1_slot6;
        var1 = 7;
        var1 = var8[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.TransitionGroup;
        var1 = {};
        var1['items'] = var7;
        var1['renderItem'] = var6;
        var5 = _closure1_slot16;
        var1['getItemKey'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
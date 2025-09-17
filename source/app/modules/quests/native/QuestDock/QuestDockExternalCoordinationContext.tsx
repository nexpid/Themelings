// app/modules/quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var4);
    var1 = 0;
    var5 = var8[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var9 = var4.bind(var1)(var5);
    var _closure1_slot2 = var9;
    var5 = 1;
    var4 = var8[var5];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var10 = var4.QuestDockMode;
    var _closure1_slot4 = var10;
    var4 = 3;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.SECOND;
    var4 = var5 * var4;
    var _closure1_slot7 = var4;
    var5 = var9.createContext;
    var4 = {};
    var6 = 6;
    var11 = var8[var6];
    var12 = var7.bind(var1)(var11);
    var11 = var12.createFakeSharedValue;
    var10 = var10.COLLAPSED;
    var10 = var11.bind(var12)(var10);
    var4['restingQuestDockMode'] = var10;
    var10 = function setRestingQuestDockMode() {
        var1 = undefined;
        return var1;
    };
    var4['setRestingQuestDockMode'] = var10;
    var6 = var8[var6];
    var11 = var7.bind(var1)(var6);
    var10 = var11.createFakeSharedValue;
    var6 = null;
    var6 = var10.bind(var11)(var6);
    var4['lastScrollEventSourceId'] = var6;
    var5 = var5.bind(var9)(var4);
    var _closure1_slot8 = var5;
    var6 = var9.memo;
    var4 = function QuestDockExternalCoordinationContextProviderInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 7;
            var5 = var8[var3];
            var4 = undefined;
            var9 = var7.bind(var4)(var5);
            var6 = var9.useSharedValue;
            var5 = null;
            var9 = var6.bind(var9)(var5);
            var _closure2_slot0 = var9;
            var3 = var8[var3];
            var6 = var7.bind(var4)(var3);
            var5 = var6.useSharedValue;
            var3 = 8;
            var3 = var8[var3];
            var8 = var7.bind(var4)(var3);
            var7 = var8.isSoftDismissed;
            var3 = _closure1_slot3;
            var3 = var3.questDockSoftDismissedAt;
            var3 = var7.bind(var8)(var3);
            var7 = _closure1_slot4;
            if(var3) { _fun0001_ip = 107; continue _fun0001 }
 99:
            var3 = var7.COLLAPSED;
            _fun0001_ip = 113; continue _fun0001;
 107:
            var3 = var7.SOFT_DISMISSED;
 113:
            var8 = var5.bind(var6)(var3);
            var _closure2_slot1 = var8;
            var6 = _closure1_slot2;
            var7 = var6.useCallback;
            var5 = new Array(1);
            var5[0] = var8;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure2_slot1;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(!(var2 !== var3)) { _fun0002_ip = 37; continue _fun0002 }
 23:
                    var2 = _closure2_slot1;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
 37:
                    var2 = _closure1_slot4;
                    var2 = var2.RESET_TO_PREVIOUS;
                    if(!(var3 !== var2)) { _fun0002_ip = 87; continue _fun0002 }
 54:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.updatePrevRestingQuestDockMode;
                    var1 = var1.bind(var2)(var3);
 87:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var7.bind(var6)(var3, var5);
            var _closure2_slot2 = var7;
            var5 = var6.useMemo;
            var3 = new Array(3);
            var3[0] = var9;
            var3[1] = var8;
            var3[2] = var7;
            var2 = function() {
                var1 = {};
                var3 = _closure2_slot0;
                var1['lastScrollEventSourceId'] = var3;
                var3 = _closure2_slot1;
                var1['restingQuestDockMode'] = var3;
                var2 = _closure2_slot2;
                var1['setRestingQuestDockMode'] = var2;
                return var1;
            };
            var5 = var5.bind(var6)(var2, var3);
            var3 = _closure1_slot6;
            var1 = _closure1_slot8;
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var5;
            var5 = arg1;
            var5 = var5.children;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var6.bind(var9)(var4);
    var6 = 10;
    var6 = var8[var6];
    var9 = var7.bind(var1)(var6);
    var6 = var9.isAndroid;
    var6 = var6.bind(var9)();
    var _closure1_slot9 = var6;
    var6 = {};
    var9 = 'function QuestDockExternalCoordinationContextTsx1(){const{restingQuestDockMode}=this.__closure;return restingQuestDockMode.get();}';
    var6['code'] = var9;
    var _closure1_slot10 = var6;
    var6 = {};
    var9 = 'function QuestDockExternalCoordinationContextTsx2(nextMode,prevMode){const{runOnJS,cancelReopenQuestDock}=this.__closure;if(nextMode!==prevMode){runOnJS(cancelReopenQuestDock)();}}';
    var6['code'] = var9;
    var _closure1_slot11 = var6;
    var6 = {};
    var9 = "function QuestDockExternalCoordinationContextTsx3(contentOffsetY,contentHeight,layoutHeight){const{isScrollHandlerEnabled,restingQuestDockMode,QuestDockMode,lastContentOffsetY,lastScrollEventSourceId,id,runOnJS,cancelReopenQuestDock,IS_ANDROID,scheduleReopenQuestDock,setRestingQuestDockMode,QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD}=this.__closure;if(!isScrollHandlerEnabled.get())return;if(restingQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED||restingQuestDockMode.get()===QuestDockMode.EXPANDED){return;}const lastContentOffsetYValue=lastContentOffsetY.get();lastContentOffsetY.set(contentOffsetY);if(lastContentOffsetYValue===contentOffsetY)return;const lastSourceId=lastScrollEventSourceId.get();if(id!=='guilds'){lastScrollEventSourceId.set(id);}const isFirstScrollEvent=id!=='guilds'&&id!==lastSourceId;if(isFirstScrollEvent)return;const isOverscrollingAtTop=contentOffsetY<0&&lastContentOffsetYValue<0;if(isOverscrollingAtTop){runOnJS(cancelReopenQuestDock)();return;}const hasLayoutData=layoutHeight!=null&&contentHeight!=null;const isOverscrollingAtBottom=hasLayoutData&&contentOffsetY+layoutHeight>=contentHeight;if(isOverscrollingAtBottom)return;const isScrolledToTop=contentOffsetY<=0&&(IS_ANDROID||lastContentOffsetYValue<=0);if(isScrolledToTop&&restingQuestDockMode.get()===QuestDockMode.CLOSED){if(IS_ANDROID){runOnJS(scheduleReopenQuestDock)();}else{runOnJS(setRestingQuestDockMode)(QuestDockMode.COLLAPSED);}return;}const isScrollingDown=contentOffsetY>lastContentOffsetYValue&&contentOffsetY>0&&lastContentOffsetYValue>0;const isScrollingUp=contentOffsetY<lastContentOffsetYValue;const scrollDistance=Math.abs(lastContentOffsetYValue-contentOffsetY);if(isScrollingDown&&restingQuestDockMode.get()===QuestDockMode.COLLAPSED){runOnJS(setRestingQuestDockMode)(QuestDockMode.CLOSED);}else if(isScrollingUp&&restingQuestDockMode.get()===QuestDockMode.CLOSED&&scrollDistance>=QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD){runOnJS(scheduleReopenQuestDock)();}}";
    var6['code'] = var9;
    var _closure1_slot12 = var6;
    var6 = 11;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx';
    var6 = var7.bind(var8)(var6);
    var3['QuestDockExternalCoordinationContext'] = var5;
    var3['QuestDockExternalCoordinationContextProvider'] = var4;
    var2 = function useExternalScrollEventHandler(arg1) {
        var1 = arg1;
        var12 = var1.id;
        var _closure2_slot0 = var12;
        var4 = _closure1_slot2;
        var5 = var4.useContext;
        var3 = _closure1_slot8;
        var3 = var5.bind(var4)(var3);
        var7 = var3.setRestingQuestDockMode;
        var _closure2_slot1 = var7;
        var9 = var3.restingQuestDockMode;
        var _closure2_slot2 = var9;
        var10 = var3.lastScrollEventSourceId;
        var _closure2_slot3 = var10;
        var5 = var4.useRef;
        var3 = -1;
        var3 = var5.bind(var4)(var3);
        var _closure2_slot4 = var3;
        var6 = var4.useCallback;
        var5 = new Array(2);
        var5[0] = var7;
        var5[1] = var9;
        var3 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = _closure2_slot4;
                var3 = var2.current;
                var2 = -1;
                if(!(var2 !== var3)) { _fun0003_ip = 50; continue _fun0003 }
 22:
                var2 = global;
                var4 = var2.window;
                var3 = var4.clearTimeout;
                var2 = _closure2_slot4;
                var2 = var2.current;
                var2 = var3.bind(var4)(var2);
 50:
                var2 = _closure2_slot4;
                var1 = global;
                var5 = var1.window;
                var4 = var5.setTimeout;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var3 = _closure2_slot2;
                        var1 = var3.get;
                        var4 = var1.bind(var3)();
                        var3 = _closure1_slot4;
                        var3 = var3.EXPANDED;
                        if(!(var4 !== var3)) { _fun0004_ip = 54; continue _fun0004 }
 33:
                        var3 = _closure2_slot1;
                        var1 = _closure1_slot4;
                        var2 = var1.COLLAPSED;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
 54:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = 500;
                var1 = var4.bind(var5)(var3, var1);
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var8 = var6.bind(var4)(var3, var5);
        var _closure2_slot5 = var8;
        var6 = var4.useCallback;
        var5 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = _closure2_slot4;
                var3 = var2.current;
                var2 = -1;
                if(!(var2 !== var3)) { _fun0005_ip = 50; continue _fun0005 }
 22:
                var2 = global;
                var3 = var2.window;
                var2 = var3.clearTimeout;
                var1 = _closure2_slot4;
                var1 = var1.current;
                var1 = var2.bind(var3)(var1);
 50:
                var1 = undefined;
                return var1;
            }
        };
        var3 = new Array(0);
        var6 = var6.bind(var4)(var5, var3);
        var _closure2_slot6 = var6;
        var16 = _closure1_slot0;
        var17 = _closure1_slot1;
        var14 = 7;
        var3 = var17[var14];
        var15 = undefined;
        var13 = var16.bind(var15)(var3);
        var11 = var13.useAnimatedReaction;
        var5 = function D() {
            var2 = _closure2_slot2;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = {};
        var3['restingQuestDockMode'] = var9;
        var5['__closure'] = var3;
        var3 = 14040596710288.0;
        var5['__workletHash'] = var3;
        var3 = _closure1_slot10;
        var5['__initData'] = var3;
        var3 = function c(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = arg1;
                var1 = arg2;
                if(!(var2 !== var1)) { _fun0006_ip = 56; continue _fun0006 }
 10:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var1 = var2[var1];
                var2 = undefined;
                var4 = var3.bind(var2)(var1);
                var3 = var4.runOnJS;
                var1 = _closure2_slot6;
                var1 = var3.bind(var4)(var1);
                var1 = var1.bind(var2)();
 56:
                var1 = undefined;
                return var1;
            }
        };
        var18 = {};
        var19 = var17[var14];
        var19 = var16.bind(var15)(var19);
        var19 = var19.runOnJS;
        var18['runOnJS'] = var19;
        var18['cancelReopenQuestDock'] = var6;
        var3['__closure'] = var18;
        var18 = 1848909508809.0;
        var3['__workletHash'] = var18;
        var18 = _closure1_slot11;
        var3['__initData'] = var18;
        var3 = var11.bind(var13)(var5, var3);
        var3 = var17[var14];
        var11 = var16.bind(var15)(var3);
        var5 = var11.useSharedValue;
        var3 = 0;
        var11 = var5.bind(var11)(var3);
        var _closure2_slot7 = var11;
        var3 = var17[var14];
        var13 = var16.bind(var15)(var3);
        var5 = var13.useSharedValue;
        var3 = false;
        var5 = var5.bind(var13)(var3);
        var _closure2_slot8 = var5;
        var18 = var4.useEffect;
        var13 = new Array(1);
        var13[0] = var5;
        var3 = function() {
            var2 = global;
            var5 = var2.setTimeout;
            var4 = _closure1_slot7;
            var3 = undefined;
            var2 = function() {
                var3 = _closure2_slot8;
                var2 = var3.set;
                var1 = true;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var5.bind(var3)(var2, var4);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = global;
                var3 = var1.clearTimeout;
                var2 = _closure3_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            return var1;
        };
        var3 = var18.bind(var4)(var3, var13);
        var3 = var4.useCallback;
        var2 = function T(arg1, arg2, arg3) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = arg1;
                var7 = arg2;
                var5 = arg3;
                var3 = _closure2_slot8;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                if(!var2) { _fun0007_ip = 591; continue _fun0007 }
 31:
                var3 = _closure2_slot2;
                var2 = var3.get;
                var6 = var2.bind(var3)();
                var3 = _closure1_slot4;
                var3 = var3.SOFT_DISMISSED;
                if(!(var6 !== var3)) { _fun0007_ip = 591; continue _fun0007 }
 64:
                var6 = _closure2_slot2;
                var3 = var6.get;
                var6 = var3.bind(var6)();
                var3 = _closure1_slot4;
                var3 = var3.EXPANDED;
                if(!(var6 !== var3)) { _fun0007_ip = 591; continue _fun0007 }
 94:
                var8 = _closure2_slot7;
                var3 = var8.get;
                var3 = var3.bind(var8)();
                var6 = var8.set;
                var6 = var6.bind(var8)(var4);
                if(!(var3 !== var4)) { _fun0007_ip = 591; continue _fun0007 }
 124:
                var8 = _closure2_slot3;
                var6 = var8.get;
                var8 = var6.bind(var8)();
                var6 = _closure2_slot0;
                var9 = 'guilds';
                if(!(var9 !== var6)) { _fun0007_ip = 167; continue _fun0007 }
 149:
                var11 = _closure2_slot3;
                var10 = var11.set;
                var6 = _closure2_slot0;
                var6 = var10.bind(var11)(var6);
 167:
                var6 = _closure2_slot0;
                if(!(var9 !== var6)) { _fun0007_ip = 186; continue _fun0007 }
 175:
                var6 = _closure2_slot0;
                if(!(var6 === var8)) { _fun0007_ip = 591; continue _fun0007 }
 186:
                var6 = 0;
                if(!(var4 < var6)) { _fun0007_ip = 199; continue _fun0007 }
 192:
                if(!(!(var3 < var6))) { _fun0007_ip = 551; continue _fun0007 }
 199:
                var8 = null;
                if(!(var8 != var5)) { _fun0007_ip = 220; continue _fun0007 }
 205:
                if(!(var8 != var7)) { _fun0007_ip = 220; continue _fun0007 }
 209:
                var5 = var4 + var5;
                if(!(!(var5 >= var7))) { _fun0007_ip = 591; continue _fun0007 }
 220:
                if(!(var4 <= var6)) { _fun0007_ip = 265; continue _fun0007 }
 224:
                var5 = _closure1_slot9;
                if(var5) { _fun0007_ip = 235; continue _fun0007 }
 231:
                if(!(var3 <= var6)) { _fun0007_ip = 265; continue _fun0007 }
 235:
                var7 = _closure2_slot2;
                var5 = var7.get;
                var7 = var5.bind(var7)();
                var5 = _closure1_slot4;
                var5 = var5.CLOSED;
                if(!(var7 !== var5)) { _fun0007_ip = 476; continue _fun0007 }
 265:
                var5 = global;
                var8 = var5.Math;
                var7 = var8.abs;
                var5 = var3 - var4;
                var5 = var7.bind(var8)(var5);
                if(!(var4 > var3)) { _fun0007_ip = 327; continue _fun0007 }
 292:
                if(!(var4 > var6)) { _fun0007_ip = 327; continue _fun0007 }
 296:
                if(!(var3 > var6)) { _fun0007_ip = 327; continue _fun0007 }
 300:
                var7 = _closure2_slot2;
                var6 = var7.get;
                var7 = var6.bind(var7)();
                var6 = _closure1_slot4;
                var6 = var6.COLLAPSED;
                if(!(var7 !== var6)) { _fun0007_ip = 423; continue _fun0007 }
 327:
                var3 = var4 < var3;
                if(!var3) { _fun0007_ip = 361; continue _fun0007 }
 334:
                var6 = _closure2_slot2;
                var4 = var6.get;
                var6 = var4.bind(var6)();
                var4 = _closure1_slot4;
                var4 = var4.CLOSED;
                var3 = var6 === var4;
 361:
                if(!var3) { _fun0007_ip = 372; continue _fun0007 }
 364:
                var4 = _closure1_slot5;
                var3 = var5 >= var4;
 372:
                if(!var3) { _fun0007_ip = 591; continue _fun0007 }
 378:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var3 = var4[var3];
                var4 = undefined;
                var6 = var5.bind(var4)(var3);
                var5 = var6.runOnJS;
                var3 = _closure2_slot5;
                var3 = var5.bind(var6)(var3);
                var3 = var3.bind(var4)();
                _fun0007_ip = 591; continue _fun0007;
 423:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 7;
                var3 = var5[var3];
                var5 = undefined;
                var6 = var4.bind(var5)(var3);
                var4 = var6.runOnJS;
                var3 = _closure2_slot1;
                var4 = var4.bind(var6)(var3);
                var3 = _closure1_slot4;
                var3 = var3.CLOSED;
                var3 = var4.bind(var5)(var3);
                _fun0007_ip = 591; continue _fun0007;
 476:
                var3 = _closure1_slot9;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 7;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.runOnJS;
                if(var3) { _fun0007_ip = 536; continue _fun0007 }
 510:
                var3 = _closure2_slot1;
                var7 = var5.bind(var6)(var3);
                var3 = _closure1_slot4;
                var3 = var3.COLLAPSED;
                var3 = var7.bind(var4)(var3);
                _fun0007_ip = 591; continue _fun0007;
 536:
                var3 = _closure2_slot5;
                var3 = var5.bind(var6)(var3);
                var3 = var3.bind(var4)();
                _fun0007_ip = 591; continue _fun0007;
 551:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.runOnJS;
                var1 = _closure2_slot6;
                var1 = var3.bind(var4)(var1);
                var1 = var1.bind(var2)();
 591:
                var1 = undefined;
                return var1;
            }
        };
        var13 = {};
        var13['isScrollHandlerEnabled'] = var5;
        var13['restingQuestDockMode'] = var9;
        var18 = _closure1_slot4;
        var13['QuestDockMode'] = var18;
        var13['lastContentOffsetY'] = var11;
        var13['lastScrollEventSourceId'] = var10;
        var13['id'] = var12;
        var14 = var17[var14];
        var14 = var16.bind(var15)(var14);
        var14 = var14.runOnJS;
        var13['runOnJS'] = var14;
        var13['cancelReopenQuestDock'] = var6;
        var14 = _closure1_slot9;
        var13['IS_ANDROID'] = var14;
        var13['scheduleReopenQuestDock'] = var8;
        var13['setRestingQuestDockMode'] = var7;
        var14 = _closure1_slot5;
        var13['QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD'] = var14;
        var2['__closure'] = var13;
        var13 = 9824540806898.0;
        var2['__workletHash'] = var13;
        var1 = _closure1_slot12;
        var2['__initData'] = var1;
        var1 = new Array(8);
        var1[0] = var12;
        var1[1] = var11;
        var1[2] = var10;
        var1[3] = var9;
        var1[4] = var8;
        var1[5] = var7;
        var1[6] = var6;
        var1[7] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useExternalScrollEventHandler'] = var2;
    return var1;
})();
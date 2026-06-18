// app/modules/quests/native/QuestDock/QuestDockHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestDockMode;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.QUEST_DOCK_CLOSED_HEIGHT;
    var _closure1_slot7 = var7;
    var7 = var4.QUEST_DOCK_COLLAPSED_HEIGHT;
    var _closure1_slot8 = var7;
    var7 = var4.QUEST_DOCK_EXTERNAL_OFFSET_CLOSED;
    var _closure1_slot9 = var7;
    var7 = var4.QUEST_DOCK_EXTERNAL_OFFSET_COLLAPSED;
    var _closure1_slot10 = var7;
    var7 = var4.QUEST_DOCK_EXTERNAL_OFFSET_COLLAPSED_WITH_YOU_BAR;
    var _closure1_slot11 = var7;
    var7 = var4.QUEST_DOCK_EXTERNAL_OFFSET_EXPANDED;
    var _closure1_slot12 = var7;
    var7 = var4.QUEST_DOCK_EXTERNAL_OFFSET_EXPANDED_WITH_YOU_BAR;
    var _closure1_slot13 = var7;
    var7 = var4.QUEST_DOCK_VERTICAL_EDGE_GUTTER_CLOSED;
    var _closure1_slot14 = var7;
    var7 = var4.QUEST_DOCK_VERTICAL_EDGE_GUTTER_COLLAPSED;
    var _closure1_slot15 = var7;
    var4 = var4.QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED;
    var _closure1_slot16 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.useYouBarHorizontalMargin;
    var _closure1_slot17 = var7;
    var4 = var4.useYouBarTotalHeight;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = 'function QuestDockHooksTsx1(){const{restingQuestDockMode,minExpandedContentHeight,windowDimensions,safeArea}=this.__closure;return{restingQuestDockMode:restingQuestDockMode.get(),minExpandedContentHeight:minExpandedContentHeight.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()};}';
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var4 = {};
    var7 = 'function QuestDockHooksTsx2(props,previous){const{cheapWorkletShallowEqual,QuestDockMode,runOnJS,setRestingQuestDockMode,questDockWrapperSpecs,youBarEnabled,QUEST_DOCK_VERTICAL_EDGE_GUTTER_COLLAPSED,getQuestDockCollapsedWidth,youBarHorizontalMargin,QUEST_DOCK_COLLAPSED_HEIGHT,activeQuestDockMode,QUEST_DOCK_VERTICAL_EDGE_GUTTER_CLOSED,getQuestDockClosedWidth,QUEST_DOCK_CLOSED_HEIGHT,getQuestDockExpandedHeightLimits,youBarHeight,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockExpandedWidth}=this.__closure;var _previous$restingQues;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{restingQuestDockMode:restingQuestDockMode,minExpandedContentHeight:minExpandedContentHeight,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea}=props;switch(restingQuestDockMode){case QuestDockMode.RESET_TO_PREVIOUS:runOnJS(setRestingQuestDockMode)((_previous$restingQues=previous===null||previous===void 0?void 0:previous.restingQuestDockMode)!==null&&_previous$restingQues!==void 0?_previous$restingQues:QuestDockMode.COLLAPSED);return;case QuestDockMode.COLLAPSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarEnabled?0:QUEST_DOCK_VERTICAL_EDGE_GUTTER_COLLAPSED*-1,width:getQuestDockCollapsedWidth(windowWidth,youBarEnabled?youBarHorizontalMargin:safeArea.left,youBarEnabled?youBarHorizontalMargin:safeArea.right),height:QUEST_DOCK_COLLAPSED_HEIGHT});activeQuestDockMode.set(QuestDockMode.COLLAPSED);break;case QuestDockMode.CLOSED:case QuestDockMode.SOFT_DISMISSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarEnabled?0:QUEST_DOCK_VERTICAL_EDGE_GUTTER_CLOSED*-1,width:getQuestDockClosedWidth(windowWidth,youBarEnabled?youBarHorizontalMargin:safeArea.left,youBarEnabled?youBarHorizontalMargin:safeArea.right),height:QUEST_DOCK_CLOSED_HEIGHT});activeQuestDockMode.set(restingQuestDockMode);break;case QuestDockMode.EXPANDED:const minContentHeight=minExpandedContentHeight;const{minHeight:minHeight,maxHeight:maxHeight}=getQuestDockExpandedHeightLimits(windowHeight,safeArea.top,minContentHeight);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(questDockWrapperSpecs.get().height<=QUEST_DOCK_COLLAPSED_HEIGHT){height=maxHeight;}else if(previous!=null&&questDockWrapperSpecs.get().height===getQuestDockExpandedHeightLimits(previous.windowHeight,previous.safeArea.top,minContentHeight).maxHeight){height=maxHeight;}else if(questDockWrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=maxHeight;}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,width:getQuestDockExpandedWidth(windowWidth,safeArea.left,safeArea.right),height:height});activeQuestDockMode.set(QuestDockMode.EXPANDED);break;}}';
    var4['code'] = var7;
    var _closure1_slot20 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestDock/QuestDockHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useQuestDockModeAnimatedReaction() {
        var5 = _closure1_slot4;
        var4 = var5.useContext;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 6;
        var3 = var10[var1];
        var1 = undefined;
        var3 = var9.bind(var1)(var3);
        var3 = var3.QuestDockGestureContext;
        var3 = var4.bind(var5)(var3);
        var14 = var3.questDockWrapperSpecs;
        var _closure2_slot0 = var14;
        var18 = var3.windowDimensions;
        var _closure2_slot1 = var18;
        var12 = var3.activeQuestDockMode;
        var _closure2_slot2 = var12;
        var19 = var3.minExpandedContentHeight;
        var _closure2_slot3 = var19;
        var4 = var5.useContext;
        var3 = 7;
        var3 = var10[var3];
        var3 = var9.bind(var1)(var3);
        var3 = var3.QuestDockExternalCoordinationContext;
        var3 = var4.bind(var5)(var3);
        var20 = var3.restingQuestDockMode;
        var _closure2_slot4 = var20;
        var15 = var3.setRestingQuestDockMode;
        var _closure2_slot5 = var15;
        var4 = _closure1_slot1;
        var3 = 8;
        var3 = var10[var3];
        var3 = var4.bind(var1)(var3);
        var17 = var3.bind(var1)();
        var _closure2_slot6 = var17;
        var3 = _closure1_slot17;
        var13 = var3.bind(var1)();
        var _closure2_slot7 = var13;
        var3 = 9;
        var3 = var10[var3];
        var5 = var9.bind(var1)(var3);
        var4 = var5.useYouBarEnabled;
        var3 = 'QuestDock';
        var8 = var4.bind(var5)(var3);
        var _closure2_slot8 = var8;
        var3 = _closure1_slot18;
        var11 = var3.bind(var1)();
        var _closure2_slot9 = var11;
        var16 = 10;
        var3 = var10[var16];
        var5 = var9.bind(var1)(var3);
        var4 = var5.useAnimatedReaction;
        var3 = function o() {
            var1 = {};
            var4 = _closure2_slot4;
            var3 = var4.get;
            var3 = var3.bind(var4)();
            var1['restingQuestDockMode'] = var3;
            var4 = _closure2_slot3;
            var3 = var4.get;
            var3 = var3.bind(var4)();
            var1['minExpandedContentHeight'] = var3;
            var4 = _closure2_slot1;
            var3 = var4.get;
            var3 = var3.bind(var4)();
            var3 = var3.width;
            var1['windowWidth'] = var3;
            var3 = var4.get;
            var3 = var3.bind(var4)();
            var3 = var3.height;
            var1['windowHeight'] = var3;
            var3 = _closure2_slot6;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var1['safeArea'] = var2;
            return var1;
        };
        var7 = {};
        var7['restingQuestDockMode'] = var20;
        var7['minExpandedContentHeight'] = var19;
        var7['windowDimensions'] = var18;
        var7['safeArea'] = var17;
        var3['__closure'] = var7;
        var7 = 9502251090521.0;
        var3['__workletHash'] = var7;
        var7 = _closure1_slot19;
        var3['__initData'] = var7;
        var2 = function t(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arg1;
                var6 = arg2;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var3 = var3[var1];
                var1 = undefined;
                var8 = var5.bind(var1)(var3);
                var7 = var8.cheapWorkletShallowEqual;
                var5 = null;
                var9 = var5 != var6;
                var3 = undefined;
                if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = var6;
case 2:
                var3 = var7.bind(var8)(var2, var3);
                if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var7 = var2.restingQuestDockMode;
                var18 = var2.minExpandedContentHeight;
                var13 = var2.windowWidth;
                var10 = var2.windowHeight;
                var9 = var2.safeArea;
                var2 = _closure1_slot6;
                var2 = var2.RESET_TO_PREVIOUS;
                if(!(var2 !== var7)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var2 = _closure1_slot6;
                var2 = var2.COLLAPSED;
                if(!(var2 !== var7)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var2 = _closure1_slot6;
                var2 = var2.CLOSED;
                if(!(var2 !== var7)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var2 = _closure1_slot6;
                var2 = var2.SOFT_DISMISSED;
                if(!(var2 !== var7)) { _fun0001_ip = 10; continue _fun0001 }
case 12:
                var2 = _closure1_slot6;
                var2 = var2.EXPANDED;
                if(!(var2 === var7)) { _fun0001_ip = 4; continue _fun0001 }
case 13:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var15 = 12;
                var2 = var2[var15];
                var8 = var3.bind(var1)(var2);
                var3 = var8.getQuestDockExpandedHeightLimits;
                var2 = var9.top;
                var2 = var3.bind(var8)(var10, var2, var18);
                var3 = var2.minHeight;
                var12 = var2.maxHeight;
                var8 = _closure2_slot0;
                var3 = var8.get;
                var3 = var3.bind(var8)();
                var8 = var3.height;
                var3 = _closure1_slot8;
                var3 = var8 <= var3;
                if(var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                var8 = var5 != var6;
                if(!var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                var11 = _closure2_slot0;
                var10 = var11.get;
                var10 = var10.bind(var11)();
                var11 = var10.height;
                var14 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var15];
                var17 = var14.bind(var1)(var10);
                var16 = var17.getQuestDockExpandedHeightLimits;
                var14 = var6.windowHeight;
                var10 = var6.safeArea;
                var10 = var10.top;
                var10 = var16.bind(var17)(var14, var10, var18);
                var10 = var10.maxHeight;
                var8 = var11 === var10;
case 16:
                var3 = var8;
case 14:
                if(var3) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                var8 = _closure2_slot0;
                var3 = var8.get;
                var3 = var3.bind(var8)();
                var3 = var3.height;
case 18:
                var10 = _closure2_slot0;
                var8 = var10.set;
                var3 = {};
                var11 = var10.get;
                var20 = var11.bind(var10)();
                var21 = var3;
                var11 = copyDataProperties(var21, var20);
                var14 = 0;
                var11 = 'x';
                var3[10] = var14;
                var11 = _closure2_slot9;
                if(!(!(var11 > var14))) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                var14 = _closure1_slot16;
                _fun0001_ip = 22; continue _fun0001;
case 20:
                var14 = _closure2_slot9;
case 22:
                var11 = 'y';
                var3[10] = var14;
                var14 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var15];
                var16 = var14.bind(var1)(var11);
                var15 = var16.getQuestDockExpandedWidth;
                var14 = var9.left;
                var11 = var9.right;
                var14 = var15.bind(var16)(var13, var14, var11);
                var11 = 'width';
                var3[10] = var14;
                var11 = 'height';
                var3[10] = var12;
                var3 = var8.bind(var10)(var3);
                var8 = _closure2_slot2;
                var3 = var8.set;
                var2 = _closure1_slot6;
                var2 = var2.EXPANDED;
                var2 = var3.bind(var8)(var2);
                _fun0001_ip = 4; continue _fun0001;
case 10:
                var10 = _closure2_slot0;
                var8 = var10.set;
                var3 = {};
                var11 = var10.get;
                var20 = var11.bind(var10)();
                var21 = var3;
                var11 = copyDataProperties(var21, var20);
                var12 = 0;
                var11 = 'x';
                var3[10] = var12;
                var11 = _closure2_slot8;
                if(var11) { _fun0001_ip = 23; continue _fun0001 }
case 24:
                var14 = _closure1_slot14;
                var11 = -1;
                var12 = var11 * var14;
case 23:
                var11 = 'y';
                var3[10] = var12;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = 12;
                var11 = var14[var11];
                var15 = var12.bind(var1)(var11);
                var14 = var15.getQuestDockClosedWidth;
                var11 = _closure2_slot8;
                if(var11) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                var12 = var9.left;
                _fun0001_ip = 27; continue _fun0001;
case 25:
                var12 = _closure2_slot7;
case 27:
                var11 = _closure2_slot8;
                if(var11) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                var11 = var9.right;
                _fun0001_ip = 30; continue _fun0001;
case 28:
                var11 = _closure2_slot7;
case 30:
                var12 = var14.bind(var15)(var13, var12, var11);
                var11 = 'width';
                var3[10] = var12;
                var12 = _closure1_slot7;
                var11 = 'height';
                var3[10] = var12;
                var3 = var8.bind(var10)(var3);
                var3 = _closure2_slot2;
                var2 = var3.set;
                var2 = var2.bind(var3)(var7);
                _fun0001_ip = 4; continue _fun0001;
case 8:
                var8 = _closure2_slot0;
                var7 = var8.set;
                var3 = {};
                var10 = var8.get;
                var20 = var10.bind(var8)();
                var21 = var3;
                var10 = copyDataProperties(var21, var20);
                var11 = 0;
                var10 = 'x';
                var3[9] = var11;
                var10 = _closure2_slot8;
                if(var10) { _fun0001_ip = 31; continue _fun0001 }
case 32:
                var12 = _closure1_slot15;
                var10 = -1;
                var11 = var10 * var12;
case 31:
                var10 = 'y';
                var3[9] = var11;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 12;
                var10 = var12[var10];
                var12 = var11.bind(var1)(var10);
                var11 = var12.getQuestDockCollapsedWidth;
                var10 = _closure2_slot8;
                if(var10) { _fun0001_ip = 33; continue _fun0001 }
case 34:
                var10 = var9.left;
                _fun0001_ip = 35; continue _fun0001;
case 33:
                var10 = _closure2_slot7;
case 35:
                var14 = _closure2_slot8;
                if(var14) { _fun0001_ip = 36; continue _fun0001 }
case 37:
                var9 = var9.right;
                _fun0001_ip = 38; continue _fun0001;
case 36:
                var9 = _closure2_slot7;
case 38:
                var10 = var11.bind(var12)(var13, var10, var9);
                var9 = 'width';
                var3[8] = var10;
                var10 = _closure1_slot8;
                var9 = 'height';
                var3[8] = var10;
                var3 = var7.bind(var8)(var3);
                var7 = _closure2_slot2;
                var3 = var7.set;
                var2 = _closure1_slot6;
                var2 = var2.COLLAPSED;
                var2 = var3.bind(var7)(var2);
                _fun0001_ip = 4; continue _fun0001;
case 6:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 10;
                var2 = var7[var2];
                var7 = var3.bind(var1)(var2);
                var3 = var7.runOnJS;
                var2 = _closure2_slot5;
                var3 = var3.bind(var7)(var2);
                var7 = var5 == var6;
                var2 = undefined;
                if(var7) { _fun0001_ip = 39; continue _fun0001 }
case 40:
                var2 = var6.restingQuestDockMode;
case 39:
                if(!(var5 == var2)) { _fun0001_ip = 41; continue _fun0001 }
case 42:
                var4 = _closure1_slot6;
                var2 = var4.COLLAPSED;
case 41:
                var2 = var3.bind(var1)(var2);
                var2 = undefined;
                return var2;
case 4:
                return var1;
            }
        };
        var7 = {};
        var17 = 11;
        var17 = var10[var17];
        var17 = var9.bind(var1)(var17);
        var17 = var17.cheapWorkletShallowEqual;
        var7['cheapWorkletShallowEqual'] = var17;
        var17 = _closure1_slot6;
        var7['QuestDockMode'] = var17;
        var16 = var10[var16];
        var16 = var9.bind(var1)(var16);
        var16 = var16.runOnJS;
        var7['runOnJS'] = var16;
        var7['setRestingQuestDockMode'] = var15;
        var7['questDockWrapperSpecs'] = var14;
        var7['youBarEnabled'] = var8;
        var8 = _closure1_slot15;
        var7['QUEST_DOCK_VERTICAL_EDGE_GUTTER_COLLAPSED'] = var8;
        var8 = 12;
        var14 = var10[var8];
        var14 = var9.bind(var1)(var14);
        var14 = var14.getQuestDockCollapsedWidth;
        var7['getQuestDockCollapsedWidth'] = var14;
        var7['youBarHorizontalMargin'] = var13;
        var13 = _closure1_slot8;
        var7['QUEST_DOCK_COLLAPSED_HEIGHT'] = var13;
        var7['activeQuestDockMode'] = var12;
        var12 = _closure1_slot14;
        var7['QUEST_DOCK_VERTICAL_EDGE_GUTTER_CLOSED'] = var12;
        var12 = var10[var8];
        var12 = var9.bind(var1)(var12);
        var12 = var12.getQuestDockClosedWidth;
        var7['getQuestDockClosedWidth'] = var12;
        var12 = _closure1_slot7;
        var7['QUEST_DOCK_CLOSED_HEIGHT'] = var12;
        var12 = var10[var8];
        var12 = var9.bind(var1)(var12);
        var12 = var12.getQuestDockExpandedHeightLimits;
        var7['getQuestDockExpandedHeightLimits'] = var12;
        var7['youBarHeight'] = var11;
        var11 = _closure1_slot16;
        var7['QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED'] = var11;
        var8 = var10[var8];
        var8 = var9.bind(var1)(var8);
        var8 = var8.getQuestDockExpandedWidth;
        var7['getQuestDockExpandedWidth'] = var8;
        var2['__closure'] = var7;
        var7 = 9030555854984.0;
        var2['__workletHash'] = var7;
        var6 = _closure1_slot20;
        var2['__initData'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['useQuestDockModeAnimatedReaction'] = var4;
    var4 = function useQuestDockExternalOffset() {
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 13;
        var3 = var8[var3];
        var4 = undefined;
        var9 = var5.bind(var4)(var3);
        var7 = var9.useStateFromStoresArray;
        var3 = _closure1_slot5;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            var2 = _closure1_slot5;
            var3 = var2.prevRestingQuestDockMode;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.isEligibleToBeVisible;
            var1[1] = var2;
            return var1;
        };
        var7 = var7.bind(var9)(var6, var3);
        var6 = _closure1_slot3;
        var3 = 2;
        var7 = var6.bind(var4)(var7, var3);
        var3 = 0;
        var6 = var7[var3];
        var _closure2_slot0 = var6;
        var3 = 1;
        var7 = var7[var3];
        var _closure2_slot1 = var7;
        var3 = 9;
        var3 = var8[var3];
        var5 = var5.bind(var4)(var3);
        var4 = var5.useYouBarEnabled;
        var3 = 'QuestDock';
        var5 = var4.bind(var5)(var3);
        var _closure2_slot2 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                var2 = 0;
                return var2;
case 43:
                var4 = _closure2_slot0;
                var3 = _closure1_slot6;
                var3 = var3.COLLAPSED;
                if(!(var3 !== var4)) { _fun0002_ip = 45; continue _fun0002 }
case 46:
                var3 = _closure1_slot6;
                var3 = var3.EXPANDED;
                if(!(var3 !== var4)) { _fun0002_ip = 47; continue _fun0002 }
case 48:
                var3 = _closure1_slot6;
                var3 = var3.CLOSED;
                if(!(var3 !== var4)) { _fun0002_ip = 49; continue _fun0002 }
case 5:
                var3 = _closure1_slot6;
                var3 = var3.SOFT_DISMISSED;
                if(!(var3 !== var4)) { _fun0002_ip = 49; continue _fun0002 }
case 50:
                var3 = 0;
                return var3;
case 49:
                var3 = _closure1_slot9;
                return var3;
case 47:
                var3 = _closure2_slot2;
                if(var3) { _fun0002_ip = 51; continue _fun0002 }
case 52:
                var3 = _closure1_slot12;
                _fun0002_ip = 53; continue _fun0002;
case 51:
                var3 = _closure1_slot13;
case 53:
                return var3;
case 45:
                var1 = _closure2_slot2;
                if(var1) { _fun0002_ip = 54; continue _fun0002 }
case 55:
                var1 = _closure1_slot10;
                _fun0002_ip = 56; continue _fun0002;
case 54:
                var1 = _closure1_slot11;
case 56:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useQuestDockExternalOffset'] = var4;
    var4 = function useQuestDockDismissalReset() {
        var5 = _closure1_slot4;
        var4 = var5.useContext;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 7;
        var3 = var8[var1];
        var1 = undefined;
        var3 = var6.bind(var1)(var3);
        var3 = var3.QuestDockExternalCoordinationContext;
        var3 = var4.bind(var5)(var3);
        var7 = var3.setRestingQuestDockMode;
        var _closure2_slot0 = var7;
        var4 = var5.useContext;
        var3 = 6;
        var3 = var8[var3];
        var3 = var6.bind(var1)(var3);
        var3 = var3.QuestDockGestureContext;
        var3 = var4.bind(var5)(var3);
        var6 = var3.activeQuestDockMode;
        var _closure2_slot1 = var6;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            var5 = function maybeResetSoftDismissal() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = var3.get;
                    var4 = var1.bind(var3)();
                    var3 = _closure1_slot6;
                    var3 = var3.SOFT_DISMISSED;
                    var3 = var4 !== var3;
                    if(var3) { _fun0003_ip = 57; continue _fun0003 }
case 58:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 12;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.isSoftDismissed;
                    var4 = _closure1_slot5;
                    var4 = var4.questDockSoftDismissedAt;
                    var3 = var5.bind(var6)(var4);
case 57:
                    if(var3) { _fun0003_ip = 59; continue _fun0003 }
case 60:
                    var3 = _closure2_slot0;
                    var1 = _closure1_slot6;
                    var2 = var1.COLLAPSED;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 59:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = undefined;
            var2 = var5.bind(var4)();
            var2 = global;
            var3 = var2.setInterval;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 14;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.Millis;
            var6 = var2.MINUTE;
            var2 = 5;
            var2 = var2 * var6;
            var2 = var3.bind(var4)(var5, var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = global;
                var3 = var1.clearInterval;
                var2 = _closure3_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useQuestDockDismissalReset'] = var4;
    var2 = function useActionSheetPressHandler(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 15;
        var3 = var8[var3];
        var4 = undefined;
        var6 = var5.bind(var4)(var3);
        var3 = var6.useTrackQuestContentClickedWithImpression;
        var6 = var3.bind(var6)();
        var _closure2_slot1 = var6;
        var3 = 16;
        var3 = var8[var3];
        var4 = var5.bind(var4)(var3);
        var3 = var4.useQuestImpressionId;
        var5 = var3.bind(var4)();
        var _closure2_slot2 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 17;
                var5 = var7[var2];
                var1 = undefined;
                var6 = var4.bind(var1)(var5);
                var5 = var6.shouldMigrateToAdAnalyticsInterface;
                var2 = var7[var2];
                var2 = var4.bind(var1)(var2);
                var2 = var2.AdAnalyticsInterfaceExperimentStep;
                var4 = var2.STEP_2_CLICKED_INTERNAL;
                var2 = 'quest_dock_action_sheet';
                var2 = var5.bind(var6)(var4, var2);
                if(var2) { _fun0004_ip = 61; continue _fun0004 }
case 62:
                var4 = _closure2_slot1;
                var2 = {};
                var5 = _closure2_slot0;
                var5 = var5.id;
                var2['questId'] = var5;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 22;
                var8 = var7[var5];
                var8 = var6.bind(var1)(var8);
                var8 = var8.QuestContent;
                var8 = var8.QUEST_BAR_MOBILE;
                var2['questContent'] = var8;
                var8 = 21;
                var8 = var7[var8];
                var8 = var6.bind(var1)(var8);
                var8 = var8.QuestContentCTA;
                var8 = var8.OPEN_CONTEXT_MENU;
                var2['questContentCTA'] = var8;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.QuestContent;
                var5 = var5.QUEST_BAR_MOBILE;
                var2['sourceQuestContent'] = var5;
                var2 = var4.bind(var1)(var2);
                _fun0004_ip = 63; continue _fun0004;
case 61:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 18;
                var2 = var9[var2];
                var5 = var8.bind(var1)(var2);
                var4 = var5.captureAdUserAction;
                var2 = {};
                var6 = 19;
                var6 = var9[var6];
                var6 = var8.bind(var1)(var6);
                var6 = var6.AdUserActionType;
                var6 = var6.CLICK_INTERNAL;
                var2['type'] = var6;
                var6 = 20;
                var6 = var9[var6];
                var6 = var8.bind(var1)(var6);
                var6 = var6.AdCreativeType;
                var6 = var6.QUEST;
                var2['adCreativeType'] = var6;
                var7 = _closure2_slot0;
                var7 = var7.id;
                var2['adCreativeId'] = var7;
                var7 = 21;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContentCTA;
                var7 = var7.OPEN_CONTEXT_MENU;
                var2['questContentCTA'] = var7;
                var7 = 22;
                var10 = var9[var7];
                var10 = var8.bind(var1)(var10);
                var10 = var10.QuestContent;
                var10 = var10.QUEST_BAR_MOBILE;
                var2['surfaceId'] = var10;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContent;
                var7 = var7.QUEST_BAR_MOBILE;
                var2['sourceQuestContent'] = var7;
                var6 = _closure2_slot2;
                var2['impressionId'] = var6;
                var2 = var4.bind(var5)(var2);
case 63:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var4 = 23;
                var4 = var2[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 25;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 24;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var2 = _closure2_slot0;
                var3['quest'] = var2;
                var2 = 'QuestDockContextMenuActionSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useActionSheetPressHandler'] = var2;
    return var1;
})();
// app/modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot4 = var8;
    var14 = 2;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AccessibilityInfo;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestDockMode;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
    var _closure1_slot8 = var7;
    var7 = var4.QUEST_DOCK_CONTENT_BORDER_RADII;
    var _closure1_slot9 = var7;
    var7 = var4.QUEST_DOCK_BORDER_RADII;
    var _closure1_slot10 = var7;
    var11 = var4.QUEST_DOCK_COLLAPSED_HEIGHT;
    var7 = var4.QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED;
    var _closure1_slot11 = var7;
    var4 = var4.QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
    var _closure1_slot12 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot13 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot14 = var7;
    var7 = var4.jsxs;
    var _closure1_slot15 = var7;
    var4 = var4.Fragment;
    var _closure1_slot16 = var4;
    var4 = 7;
    var4 = var6[var4];
    var10 = var5.bind(var1)(var4);
    var9 = var10.createStyles;
    var7 = {};
    var4 = {'alignItems': 'center', 'justifyContent': 'space-between', 'flexDirection': 'row', 'height': null, 'overflow': 'hidden', 'paddingRight': 16, 'paddingLeft': 8, 'position': 'absolute', 'zIndex': 2};
    var4['height'] = var11;
    var12 = 8;
    var7['questDockHeader'] = var4;
    var4 = 35;
    var11 = {'height': 35, 'marginRight': 4, 'width': 35};
    var7['wreathImage'] = var11;
    var11 = {'alignItems': 'center', 'flexDirection': 'row'};
    var7['questDockHeaderPrimary'] = var11;
    var11 = {};
    var11['marginTop'] = var14;
    var7['logo'] = var11;
    var11 = {'flexGrow': 0, 'flexShrink': 0};
    var7['questDockHeaderSecondary'] = var11;
    var11 = {'justifyContent': 'center', 'position': 'absolute', 'bottom': 0, 'top': 0, 'right': 0};
    var7['questDockHeaderContentCollapsed'] = var11;
    var11 = {'alignItems': 'center', 'flexDirection': 'row', 'gap': 8};
    var7['questDockHeaderContentExpanded'] = var11;
    var11 = {'alignItems': 'center', 'display': 'flex', 'flexDirection': 'row', 'gap': 4};
    var7['questDockHeaderActionDisclosures'] = var11;
    var11 = {'height': 14, 'width': 14};
    var7['questDockHeaderActionDisclosuresIcon'] = var11;
    var11 = {'backgroundColor': null, 'opacity': 0.2, 'height': 18, 'width': 1.5};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_DEFAULT;
    var11['backgroundColor'] = var12;
    var7['questDockHeaderActionSeparator'] = var11;
    var11 = {};
    var12 = 0.7;
    var11['opacity'] = var12;
    var7['questDockHeaderTertiaryContent'] = var11;
    var7 = var9.bind(var10)(var7);
    var _closure1_slot17 = var7;
    var7 = {};
    var9 = 'function questDockHeaderLayoutAnimation_QuestDockUnenrolledHeaderTsx1(values){const{withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}};}';
    var7['code'] = var9;
    var _closure1_slot18 = var7;
    var7 = function() {
        var1 = function questDockHeaderLayoutAnimation(arg1) {
            var3 = arg1;
            var1 = {};
            var2 = {};
            var4 = var3.currentOriginX;
            var2['originX'] = var4;
            var4 = var3.currentOriginY;
            var2['originY'] = var4;
            var4 = var3.currentWidth;
            var2['width'] = var4;
            var4 = var3.currentHeight;
            var2['height'] = var4;
            var1['initialValues'] = var2;
            var2 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 9;
            var9 = var8[var4];
            var5 = undefined;
            var11 = var7.bind(var5)(var9);
            var10 = var11.withSpring;
            var9 = var3.targetOriginX;
            var6 = _closure1_slot8;
            var9 = var10.bind(var11)(var9, var6);
            var2['originX'] = var9;
            var9 = var8[var4];
            var11 = var7.bind(var5)(var9);
            var10 = var11.withSpring;
            var9 = var3.targetOriginY;
            var9 = var10.bind(var11)(var9, var6);
            var2['originY'] = var9;
            var9 = var8[var4];
            var11 = var7.bind(var5)(var9);
            var10 = var11.withSpring;
            var9 = var3.targetHeight;
            var9 = var10.bind(var11)(var9, var6);
            var2['height'] = var9;
            var4 = var8[var4];
            var5 = var7.bind(var5)(var4);
            var4 = var5.withSpring;
            var3 = var3.targetWidth;
            var3 = var4.bind(var5)(var3, var6);
            var2['width'] = var3;
            var1['animations'] = var2;
            return var1;
        };
        var3 = {};
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var4 = 9;
        var5 = var5[var4];
        var4 = undefined;
        var4 = var6.bind(var4)(var5);
        var4 = var4.withSpring;
        var3['withSpring'] = var4;
        var4 = _closure1_slot8;
        var3['QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED'] = var4;
        var1['__closure'] = var3;
        var3 = 6787168806966.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot18;
        var1['__initData'] = var2;
        return var1;
    };
    var7 = var7.bind(var1)();
    var _closure1_slot19 = var7;
    var7 = {};
    var9 = 'function QuestDockUnenrolledHeaderTsx2(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,QUEST_DOCK_BORDER_RADII,youBarEnabled,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:QUEST_DOCK_BORDER_RADII,borderTopRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:QUEST_DOCK_BORDER_RADII,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:youBarEnabled?withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):QUEST_DOCK_BORDER_RADII,borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:youBarEnabled?withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):QUEST_DOCK_BORDER_RADII,width:activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};}';
    var7['code'] = var9;
    var _closure1_slot20 = var7;
    var7 = {};
    var9 = 'function QuestDockUnenrolledHeaderTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED*-1:0};}';
    var7['code'] = var9;
    var _closure1_slot21 = var7;
    var7 = {};
    var9 = 'function QuestDockUnenrolledHeaderTsx4(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED};}';
    var7['code'] = var9;
    var _closure1_slot22 = var7;
    var7 = {};
    var9 = "function QuestDockUnenrolledHeaderTsx5(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}";
    var7['code'] = var9;
    var _closure1_slot23 = var7;
    var7 = {};
    var9 = 'function QuestDockUnenrolledHeaderTsx6(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,QUEST_DOCK_BORDER_RADII,youBarEnabled,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs}=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:QUEST_DOCK_BORDER_RADII,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:youBarEnabled?withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):QUEST_DOCK_BORDER_RADII,borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:youBarEnabled?withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):QUEST_DOCK_BORDER_RADII,width:questDockWrapperSpecs.get().width};}';
    var7['code'] = var9;
    var _closure1_slot24 = var7;
    var7 = var8.memo;
    var2 = function QuestDockUnenrolledHeader() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var12 = _closure1_slot4;
            var2 = var12.useContext;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 10;
            var1 = var8[var1];
            var4 = undefined;
            var1 = var7.bind(var4)(var1);
            var1 = var2.bind(var12)(var1);
            var1 = var1.quest;
            var _closure2_slot0 = var1;
            var5 = var12.useContext;
            var6 = _closure1_slot0;
            var2 = 11;
            var2 = var8[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.QuestDockGestureContext;
            var2 = var5.bind(var12)(var2);
            var27 = var2.activeQuestDockMode;
            var _closure2_slot1 = var27;
            var11 = var2.questDockWrapperSpecs;
            var _closure2_slot2 = var11;
            var5 = var12.useState;
            var2 = false;
            var9 = var5.bind(var12)(var2);
            var5 = _closure1_slot3;
            var2 = 2;
            var9 = var5.bind(var4)(var9, var2);
            var2 = 0;
            var5 = var9[var2];
            var2 = 1;
            var2 = var9[var2];
            var _closure2_slot3 = var2;
            var10 = var12.useEffect;
            var9 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 12;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.isIOS;
                    var4 = var4.bind(var5)();
                    if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    return var3;
case 2:
                    var5 = _closure1_slot5;
                    var2 = var5.isReduceTransparencyEnabled;
                    var3 = var2.bind(var5)();
                    var2 = var3.then;
                    var4 = _closure2_slot3;
                    var2 = var2.bind(var3)(var4);
                    var3 = var5.addEventListener;
                    var2 = 'reduceTransparencyChanged';
                    var2 = var3.bind(var5)(var2, var4);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var2 = _closure3_slot0;
                        var1 = var2.remove;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    return var1;
                }
            };
            var2 = new Array(0);
            var2 = var10.bind(var12)(var9, var2);
            var2 = 13;
            var2 = var8[var2];
            var9 = var6.bind(var4)(var2);
            var2 = var9.useActionSheetPressHandler;
            var21 = var2.bind(var9)(var1);
            var10 = var12.useCallback;
            var9 = new Array(1);
            var9[0] = var1;
            var2 = function() {
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 14;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.showModal;
                var2 = {};
                var5 = _closure2_slot0;
                var2['quest'] = var5;
                var5 = true;
                var2['isTargetedDisclosure'] = var5;
                var5 = {};
                var7 = _closure1_slot0;
                var6 = 15;
                var9 = var8[var6];
                var9 = var7.bind(var1)(var9);
                var9 = var9.QuestContent;
                var9 = var9.QUEST_BAR_MOBILE;
                var5['content'] = var9;
                var9 = 16;
                var9 = var8[var9];
                var9 = var7.bind(var1)(var9);
                var9 = var9.QuestContentCTA;
                var9 = var9.CONTEXT_MENU_OPEN_DISCLOSURE;
                var5['ctaContent'] = var9;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.QuestContent;
                var6 = var6.QUEST_BAR_MOBILE;
                var5['sourceQuestContent'] = var6;
                var2['trackingCtx'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var22 = var10.bind(var12)(var2, var9);
            var2 = 17;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var7 = var2.bind(var4)();
            var2 = 18;
            var2 = var8[var2];
            var6 = var6.bind(var4)(var2);
            var2 = var6.isThemeDark;
            var6 = var2.bind(var6)(var7);
            var2 = _closure1_slot13;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var19 = var2.LIGHT;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var19 = var2.DARK;
case 6:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 19;
            var2 = var8[var2];
            var9 = var7.bind(var4)(var2);
            var6 = var9.useYouBarEnabled;
            var2 = 'QuestDockUnenrolledHeader';
            var20 = var6.bind(var9)(var2);
            var _closure2_slot4 = var20;
            var2 = _closure1_slot1;
            var6 = 20;
            var6 = var8[var6];
            var6 = var2.bind(var4)(var6);
            var24 = _closure1_slot10;
            var16 = var6.bind(var4)(var24);
            var _closure2_slot5 = var16;
            var6 = 21;
            var9 = var8[var6];
            var12 = var7.bind(var4)(var9);
            var10 = var12.useAnimatedStyle;
            var9 = function y() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot7;
                    var2 = var2.EXPANDED;
                    if(!(var3 !== var2)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var2 = _closure1_slot10;
                    _fun0003_ip = 9; continue _fun0003;
case 7:
                    var2 = _closure1_slot9;
case 9:
                    var1['borderTopLeftRadius'] = var2;
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot7;
                    var2 = var2.EXPANDED;
                    if(!(var3 !== var2)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var2 = _closure1_slot10;
                    _fun0003_ip = 12; continue _fun0003;
case 10:
                    var2 = _closure1_slot9;
case 12:
                    var1['borderTopRightRadius'] = var2;
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot7;
                    var2 = var2.EXPANDED;
                    if(!(var3 !== var2)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var2 = _closure1_slot10;
                    _fun0003_ip = 17; continue _fun0003;
case 15:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 9;
                    var5 = var5[var3];
                    var3 = undefined;
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.withSpring;
                    var5 = _closure2_slot5;
                    var3 = var5.get;
                    var5 = var3.bind(var5)();
                    var3 = _closure1_slot8;
                    var2 = var6.bind(var7)(var5, var3);
case 17:
                    _fun0003_ip = 18; continue _fun0003;
case 13:
                    var2 = _closure1_slot9;
case 18:
                    var1['borderBottomLeftRadius'] = var2;
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot7;
                    var2 = var2.EXPANDED;
                    if(!(var3 !== var2)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var2 = _closure1_slot10;
                    _fun0003_ip = 23; continue _fun0003;
case 21:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 9;
                    var5 = var5[var3];
                    var3 = undefined;
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.withSpring;
                    var5 = _closure2_slot5;
                    var3 = var5.get;
                    var5 = var3.bind(var5)();
                    var3 = _closure1_slot8;
                    var2 = var6.bind(var7)(var5, var3);
case 23:
                    _fun0003_ip = 24; continue _fun0003;
case 19:
                    var2 = _closure1_slot9;
case 24:
                    var1['borderBottomRightRadius'] = var2;
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot7;
                    var2 = var2.EXPANDED;
                    if(!(var3 !== var2)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var2 = var2.width;
                    _fun0003_ip = 27; continue _fun0003;
case 25:
                    var5 = _closure2_slot2;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var5 = var3.width;
                    var6 = _closure1_slot12;
                    var3 = 2;
                    var3 = var3 * var6;
                    var2 = var5 - var3;
case 27:
                    var1['width'] = var2;
                    var3 = {};
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var10 = 9;
                    var2 = var2[var10];
                    var9 = undefined;
                    var11 = var5.bind(var9)(var2);
                    var6 = var11.withSpring;
                    var5 = _closure2_slot1;
                    var2 = var5.get;
                    var12 = var2.bind(var5)();
                    var2 = _closure1_slot7;
                    var2 = var2.EXPANDED;
                    var5 = 0;
                    if(!(var12 === var2)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var5 = _closure1_slot12;
case 28:
                    var2 = _closure1_slot8;
                    var2 = var6.bind(var11)(var5, var2);
                    var3['translateX'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var10];
                    var6 = var6.bind(var9)(var5);
                    var5 = var6.withSpring;
                    var9 = _closure2_slot1;
                    var8 = var9.get;
                    var9 = var8.bind(var9)();
                    var8 = _closure1_slot7;
                    var8 = var8.EXPANDED;
                    var7 = 0;
                    if(!(var9 === var8)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var7 = _closure1_slot12;
case 30:
                    var4 = _closure1_slot8;
                    var4 = var5.bind(var6)(var7, var4);
                    var3['translateY'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var13['activeQuestDockMode'] = var27;
            var26 = _closure1_slot7;
            var13['QuestDockMode'] = var26;
            var25 = _closure1_slot9;
            var13['QUEST_DOCK_CONTENT_BORDER_RADII'] = var25;
            var13['QUEST_DOCK_BORDER_RADII'] = var24;
            var13['youBarEnabled'] = var20;
            var18 = 9;
            var14 = var8[var18];
            var14 = var7.bind(var4)(var14);
            var14 = var14.withSpring;
            var13['withSpring'] = var14;
            var13['questDockAnimatedBorderRadius'] = var16;
            var15 = _closure1_slot8;
            var13['QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED'] = var15;
            var13['questDockWrapperSpecs'] = var11;
            var14 = _closure1_slot12;
            var13['QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED'] = var14;
            var9['__closure'] = var13;
            var13 = 4780301866740.0;
            var9['__workletHash'] = var13;
            var13 = _closure1_slot20;
            var9['__initData'] = var13;
            var14 = var10.bind(var12)(var9);
            var9 = var8[var6];
            var12 = var7.bind(var4)(var9);
            var10 = var12.useAnimatedStyle;
            var9 = function B() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var4 = var4[var2];
                    var2 = undefined;
                    var7 = var5.bind(var2)(var4);
                    var6 = var7.withSpring;
                    var5 = _closure2_slot1;
                    var4 = var5.get;
                    var8 = var4.bind(var5)();
                    var4 = _closure1_slot7;
                    var4 = var4.EXPANDED;
                    var5 = 1;
                    if(!(var8 === var4)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var5 = 0;
case 32:
                    var4 = _closure1_slot8;
                    var4 = var6.bind(var7)(var5, var4);
                    var1['opacity'] = var4;
                    var4 = _closure2_slot1;
                    var2 = var4.get;
                    var5 = var2.bind(var4)();
                    var2 = _closure1_slot7;
                    var4 = var2.EXPANDED;
                    var2 = 0;
                    if(!(var5 === var4)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    var4 = _closure1_slot11;
                    var3 = -1;
                    var2 = var3 * var4;
case 34:
                    var1['right'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var17 = var8[var18];
            var17 = var7.bind(var4)(var17);
            var17 = var17.withSpring;
            var13['withSpring'] = var17;
            var13['activeQuestDockMode'] = var27;
            var13['QuestDockMode'] = var26;
            var13['QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED'] = var15;
            var28 = _closure1_slot11;
            var13['QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED'] = var28;
            var9['__closure'] = var13;
            var13 = 16795373856064.0;
            var9['__workletHash'] = var13;
            var13 = _closure1_slot21;
            var9['__initData'] = var13;
            var17 = var10.bind(var12)(var9);
            var9 = var8[var6];
            var12 = var7.bind(var4)(var9);
            var10 = var12.useAnimatedStyle;
            var9 = function v() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var4 = var4[var2];
                    var2 = undefined;
                    var8 = var5.bind(var2)(var4);
                    var7 = var8.withSpring;
                    var5 = _closure2_slot1;
                    var2 = var5.get;
                    var9 = var2.bind(var5)();
                    var2 = _closure1_slot7;
                    var5 = var2.EXPANDED;
                    var6 = 0;
                    if(!(var9 === var5)) { _fun0005_ip = 32; continue _fun0005 }
case 36:
                    var6 = 1;
case 32:
                    var5 = _closure1_slot8;
                    var5 = var7.bind(var8)(var6, var5);
                    var1['opacity'] = var5;
                    var5 = _closure2_slot1;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var4 = _closure1_slot7;
                    var4 = var4.EXPANDED;
                    var2 = 0;
                    if(!(var5 !== var4)) { _fun0005_ip = 37; continue _fun0005 }
case 35:
                    var2 = _closure1_slot11;
case 37:
                    var1['right'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var29 = var8[var18];
            var29 = var7.bind(var4)(var29);
            var29 = var29.withSpring;
            var13['withSpring'] = var29;
            var13['activeQuestDockMode'] = var27;
            var13['QuestDockMode'] = var26;
            var13['QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED'] = var15;
            var13['QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED'] = var28;
            var9['__closure'] = var13;
            var13 = 11741220477745.0;
            var9['__workletHash'] = var13;
            var13 = _closure1_slot22;
            var9['__initData'] = var13;
            var13 = var10.bind(var12)(var9);
            var9 = var8[var6];
            var12 = var7.bind(var4)(var9);
            var10 = var12.useAnimatedProps;
            var9 = function X() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = {};
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var4 = var2.bind(var3)();
                    var2 = _closure1_slot7;
                    var3 = var2.EXPANDED;
                    var2 = 'none';
                    if(!(var4 === var3)) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                    var2 = 'auto';
case 38:
                    var1['pointerEvents'] = var2;
                    return var1;
                }
            };
            var28 = {};
            var28['activeQuestDockMode'] = var27;
            var28['QuestDockMode'] = var26;
            var9['__closure'] = var28;
            var28 = 16421998349674.0;
            var9['__workletHash'] = var28;
            var28 = _closure1_slot23;
            var9['__initData'] = var28;
            var12 = var10.bind(var12)(var9);
            var6 = var8[var6];
            var9 = var7.bind(var4)(var6);
            var6 = var9.useAnimatedStyle;
            var3 = function b() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot1;
                    var3 = var4.get;
                    var5 = var3.bind(var4)();
                    var3 = _closure1_slot7;
                    var3 = var3.EXPANDED;
                    if(!(var5 !== var3)) { _fun0007_ip = 7; continue _fun0007 }
case 8:
                    var3 = _closure1_slot10;
                    _fun0007_ip = 9; continue _fun0007;
case 7:
                    var3 = _closure1_slot9;
case 9:
                    var1['borderRadius'] = var3;
                    var5 = _closure2_slot1;
                    var3 = var5.get;
                    var5 = var3.bind(var5)();
                    var3 = _closure1_slot7;
                    var3 = var3.EXPANDED;
                    if(!(var5 !== var3)) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                    var3 = _closure2_slot4;
                    if(var3) { _fun0007_ip = 42; continue _fun0007 }
case 10:
                    var3 = _closure1_slot10;
                    _fun0007_ip = 43; continue _fun0007;
case 42:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 9;
                    var6 = var6[var5];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.withSpring;
                    var6 = _closure2_slot5;
                    var5 = var6.get;
                    var6 = var5.bind(var6)();
                    var5 = _closure1_slot8;
                    var3 = var7.bind(var8)(var6, var5);
case 43:
                    _fun0007_ip = 44; continue _fun0007;
case 40:
                    var3 = _closure1_slot9;
case 44:
                    var1['borderBottomLeftRadius'] = var3;
                    var5 = _closure2_slot1;
                    var3 = var5.get;
                    var5 = var3.bind(var5)();
                    var3 = _closure1_slot7;
                    var3 = var3.EXPANDED;
                    if(!(var5 !== var3)) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                    var3 = _closure2_slot4;
                    if(var3) { _fun0007_ip = 47; continue _fun0007 }
case 13:
                    var3 = _closure1_slot10;
                    _fun0007_ip = 48; continue _fun0007;
case 47:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 9;
                    var6 = var6[var5];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.withSpring;
                    var6 = _closure2_slot5;
                    var5 = var6.get;
                    var6 = var5.bind(var6)();
                    var5 = _closure1_slot8;
                    var3 = var7.bind(var8)(var6, var5);
case 48:
                    _fun0007_ip = 49; continue _fun0007;
case 45:
                    var3 = _closure1_slot9;
case 49:
                    var1['borderBottomRightRadius'] = var3;
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var2 = var2.width;
                    var1['width'] = var2;
                    return var1;
                }
            };
            var10 = {};
            var10['activeQuestDockMode'] = var27;
            var10['QuestDockMode'] = var26;
            var10['QUEST_DOCK_CONTENT_BORDER_RADII'] = var25;
            var10['QUEST_DOCK_BORDER_RADII'] = var24;
            var10['youBarEnabled'] = var20;
            var18 = var8[var18];
            var18 = var7.bind(var4)(var18);
            var18 = var18.withSpring;
            var10['withSpring'] = var18;
            var10['questDockAnimatedBorderRadius'] = var16;
            var10['QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED'] = var15;
            var10['questDockWrapperSpecs'] = var11;
            var3['__closure'] = var10;
            var10 = 13058223028262.0;
            var3['__workletHash'] = var10;
            var10 = _closure1_slot24;
            var3['__initData'] = var10;
            var9 = var6.bind(var9)(var3);
            var3 = _closure1_slot17;
            var16 = var3.bind(var4)();
            var3 = 22;
            var3 = var8[var3];
            var6 = var7.bind(var4)(var3);
            var3 = var6.useQuestGameLogotypeAssetUrl;
            var18 = var3.bind(var6)(var1);
            var1 = var1.config;
            var1 = var1.assets;
            var11 = var1.questBarHeroBlurhash;
            var3 = _closure1_slot15;
            var10 = 23;
            var1 = var8[var10];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var15 = var16.questDockHeader;
            var6 = new Array(2);
            var6[0] = var15;
            var6[1] = var14;
            var1['style'] = var6;
            var6 = _closure1_slot19;
            var1['layout'] = var6;
            var6 = 12;
            var6 = var8[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.isAndroid;
            var6 = var6.bind(var7)();
            if(var6) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            if(!var5) { _fun0001_ip = 52; continue _fun0001 }
case 50:
            var5 = null;
            if(!(var5 == var11)) { _fun0001_ip = 53; continue _fun0001 }
case 52:
            var7 = _closure1_slot14;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 25;
            var5 = var8[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['animatedStyle'] = var9;
            var8 = _closure1_slot19;
            var5['animatedLayout'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            _fun0001_ip = 54; continue _fun0001;
case 53:
            var8 = _closure1_slot14;
            var7 = _closure1_slot1;
            var14 = _closure1_slot2;
            var5 = 24;
            var5 = var14[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['placeholder'] = var11;
            var5['animatedStyle'] = var9;
            var9 = _closure1_slot19;
            var5['animatedLayout'] = var9;
            var6 = var8.bind(var4)(var7, var5);
case 54:
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot15;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var16.questDockHeaderPrimary;
            var6['style'] = var9;
            var14 = _closure1_slot14;
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 26;
            var9 = var15[var9];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var15 = _closure1_slot13;
            var15 = var15.DARK;
            if(!(var19 !== var15)) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var15 = 28;
            var15 = var20[var15];
            var15 = var19.bind(var4)(var15);
            _fun0001_ip = 57; continue _fun0001;
case 55:
            var20 = _closure1_slot1;
            var24 = _closure1_slot2;
            var19 = 27;
            var19 = var24[var19];
            var15 = var20.bind(var4)(var19);
case 57:
            var9['source'] = var15;
            var15 = 'contain';
            var9['resizeMode'] = var15;
            var15 = var16.wreathImage;
            var9['style'] = var15;
            var11 = var14.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var15 = _closure1_slot14;
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var11 = 29;
            var11 = var20[var11];
            var14 = var19.bind(var4)(var11);
            var11 = {'assetUrl': null, 'height': 36, 'maxWidth': 120};
            var11['assetUrl'] = var18;
            var18 = var16.logo;
            var11['style'] = var18;
            var11 = var15.bind(var4)(var14, var11);
            var9[1] = var11;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot15;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var16.questDockHeaderSecondary;
            var6['style'] = var9;
            var9 = var20[var10];
            var11 = var19.bind(var4)(var9);
            var9 = {};
            var18 = var16.questDockHeaderContentCollapsed;
            var14 = new Array(2);
            var14[0] = var18;
            var14[1] = var17;
            var9['style'] = var14;
            var17 = _closure1_slot0;
            var18 = 30;
            var14 = var20[var18];
            var14 = var17.bind(var4)(var14);
            var24 = var14.Text;
            var14 = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-text-active'};
            var25 = var16.questDockHeaderTertiaryContent;
            var14['style'] = var25;
            var26 = 31;
            var25 = var20[var26];
            var25 = var17.bind(var4)(var25);
            var28 = var25.intl;
            var27 = var28.string;
            var25 = var20[var26];
            var25 = var17.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25["3mgEQf"];
            var25 = var27.bind(var28)(var25);
            var14['children'] = var25;
            var14 = var15.bind(var4)(var24, var14);
            var9['children'] = var14;
            var11 = var15.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var10 = var20[var10];
            var11 = var19.bind(var4)(var10);
            var10 = {};
            var10['animatedProps'] = var12;
            var14 = var16.questDockHeaderContentExpanded;
            var12 = new Array(2);
            var12[0] = var14;
            var12[1] = var13;
            var10['style'] = var12;
            var13 = 32;
            var12 = var20[var13];
            var12 = var17.bind(var4)(var12);
            var14 = var12.PressableOpacity;
            var12 = {};
            var12['onPress'] = var22;
            var22 = 'button';
            var12['accessibilityRole'] = var22;
            var25 = var16.questDockHeaderActionDisclosures;
            var24 = new Array(2);
            var24[0] = var25;
            var25 = var16.questDockHeaderTertiaryContent;
            var24[1] = var25;
            var12['style'] = var24;
            var24 = _closure1_slot16;
            var23 = {};
            var18 = var20[var18];
            var18 = var17.bind(var4)(var18);
            var25 = var18.Text;
            var18 = {'color': 'interactive-text-active', 'variant': 'text-sm/medium'};
            var27 = var20[var26];
            var27 = var17.bind(var4)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var26 = var20[var26];
            var26 = var17.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.o6FLcF;
            var26 = var27.bind(var28)(var26);
            var18['children'] = var26;
            var18 = var15.bind(var4)(var25, var18);
            var25 = new Array(2);
            var25[0] = var18;
            var18 = 33;
            var18 = var20[var18];
            var18 = var17.bind(var4)(var18);
            var27 = var18.CircleQuestionIcon;
            var26 = {};
            var18 = 8;
            var28 = var20[var18];
            var28 = var19.bind(var4)(var28);
            var28 = var28.colors;
            var28 = var28.INTERACTIVE_TEXT_ACTIVE;
            var26['color'] = var28;
            var28 = var16.questDockHeaderActionDisclosuresIcon;
            var26['style'] = var28;
            var26 = var15.bind(var4)(var27, var26);
            var25[1] = var26;
            var23['children'] = var25;
            var23 = var8.bind(var4)(var24, var23);
            var12['children'] = var23;
            var14 = var15.bind(var4)(var14, var12);
            var12 = new Array(3);
            var12[0] = var14;
            var14 = {};
            var23 = var16.questDockHeaderActionSeparator;
            var14['style'] = var23;
            var14 = var15.bind(var4)(var7, var14);
            var12[1] = var14;
            var13 = var20[var13];
            var13 = var17.bind(var4)(var13);
            var14 = var13.PressableOpacity;
            var13 = {};
            var13['accessibilityRole'] = var22;
            var13['onPress'] = var21;
            var16 = var16.questDockHeaderTertiaryContent;
            var13['style'] = var16;
            var16 = 34;
            var16 = var20[var16];
            var16 = var17.bind(var4)(var16);
            var17 = var16.MoreHorizontalIcon;
            var16 = {};
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.colors;
            var18 = var18.INTERACTIVE_TEXT_ACTIVE;
            var16['color'] = var18;
            var16 = var15.bind(var4)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[2] = var13;
            var10['children'] = var12;
            var10 = var8.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var7.bind(var8)(var2);
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
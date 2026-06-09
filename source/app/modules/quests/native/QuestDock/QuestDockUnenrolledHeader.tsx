// app/modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var13 = 2;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AccessibilityInfo;
    var _closure1_slot5 = var8;
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
    var8 = var4.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
    var _closure1_slot8 = var8;
    var8 = var4.QUEST_DOCK_CONTENT_BORDER_RADII;
    var _closure1_slot9 = var8;
    var11 = var4.QUEST_DOCK_COLLAPSED_HEIGHT;
    var8 = var4.QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED;
    var _closure1_slot10 = var8;
    var4 = var4.QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot13 = var8;
    var8 = var4.jsxs;
    var _closure1_slot14 = var8;
    var4 = var4.Fragment;
    var _closure1_slot15 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'alignItems': 'center', 'justifyContent': 'space-between', 'flexDirection': 'row', 'height': null, 'overflow': 'hidden', 'paddingRight': 16, 'paddingLeft': 8, 'position': 'absolute', 'zIndex': 2};
    var10['height'] = var11;
    var11 = 8;
    var4['questDockHeader'] = var10;
    var10 = {'height': 35, 'marginRight': 4, 'width': 35};
    var4['wreathImage'] = var10;
    var10 = {'alignItems': 'center', 'flexDirection': 'row'};
    var4['questDockHeaderPrimary'] = var10;
    var10 = {};
    var10['marginTop'] = var13;
    var4['logo'] = var10;
    var10 = {'flexGrow': 0, 'flexShrink': 0};
    var4['questDockHeaderSecondary'] = var10;
    var10 = {'justifyContent': 'center', 'position': 'absolute', 'bottom': 0, 'top': 0, 'right': 0};
    var4['questDockHeaderContentCollapsed'] = var10;
    var10 = {'alignItems': 'center', 'flexDirection': 'row', 'gap': 8};
    var4['questDockHeaderContentExpanded'] = var10;
    var10 = {'alignItems': 'center', 'display': 'flex', 'flexDirection': 'row', 'gap': 4};
    var4['questDockHeaderActionDisclosures'] = var10;
    var10 = {'height': 14, 'width': 14};
    var4['questDockHeaderActionDisclosuresIcon'] = var10;
    var10 = {'backgroundColor': null, 'opacity': 0.2, 'height': 18, 'width': 1.5};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_DEFAULT;
    var10['backgroundColor'] = var11;
    var4['questDockHeaderActionSeparator'] = var10;
    var10 = {};
    var11 = 0.7;
    var10['opacity'] = var11;
    var4['questDockHeaderTertiaryContent'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = 'function questDockHeaderLayoutAnimation_QuestDockUnenrolledHeaderTsx1(values){const{withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}};}';
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var4 = function() {
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
        var2 = _closure1_slot17;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function QuestDockUnenrolledHeaderTsx2(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,youBarEnabled,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:youBarEnabled?withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):questDockBorderRadius,borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:youBarEnabled?withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):questDockBorderRadius,width:activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 'function QuestDockUnenrolledHeaderTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}';
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = 'function QuestDockUnenrolledHeaderTsx4(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED*-1:0};}';
    var4['code'] = var8;
    var _closure1_slot21 = var4;
    var4 = {};
    var8 = 'function QuestDockUnenrolledHeaderTsx5(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}';
    var4['code'] = var8;
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = 'function QuestDockUnenrolledHeaderTsx6(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED};}';
    var4['code'] = var8;
    var _closure1_slot23 = var4;
    var4 = {};
    var8 = "function QuestDockUnenrolledHeaderTsx7(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}";
    var4['code'] = var8;
    var _closure1_slot24 = var4;
    var4 = {};
    var8 = 'function QuestDockUnenrolledHeaderTsx8(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,youBarEnabled,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs}=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:youBarEnabled?withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):questDockBorderRadius,borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:youBarEnabled?withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):questDockBorderRadius,width:questDockWrapperSpecs.get().width};}';
    var4['code'] = var8;
    var _closure1_slot25 = var4;
    var4 = var7.memo;
    var2 = function QuestDockUnenrolledHeader() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var11 = _closure1_slot4;
            var2 = var11.useContext;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 10;
            var1 = var8[var1];
            var4 = undefined;
            var1 = var7.bind(var4)(var1);
            var1 = var2.bind(var11)(var1);
            var1 = var1.quest;
            var _closure2_slot0 = var1;
            var5 = var11.useContext;
            var6 = _closure1_slot0;
            var2 = 11;
            var2 = var8[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.QuestDockGestureContext;
            var2 = var5.bind(var11)(var2);
            var30 = var2.activeQuestDockMode;
            var _closure2_slot1 = var30;
            var12 = var2.questDockWrapperSpecs;
            var _closure2_slot2 = var12;
            var5 = var11.useState;
            var2 = false;
            var9 = var5.bind(var11)(var2);
            var5 = _closure1_slot3;
            var2 = 2;
            var9 = var5.bind(var4)(var9, var2);
            var2 = 0;
            var5 = var9[var2];
            var2 = 1;
            var2 = var9[var2];
            var _closure2_slot3 = var2;
            var10 = var11.useEffect;
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
            var2 = var10.bind(var11)(var9, var2);
            var2 = 13;
            var2 = var8[var2];
            var9 = var6.bind(var4)(var2);
            var2 = var9.useActionSheetPressHandler;
            var23 = var2.bind(var9)(var1);
            var10 = var11.useCallback;
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
            var24 = var10.bind(var11)(var2, var9);
            var2 = 17;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var7 = var2.bind(var4)();
            var2 = 18;
            var2 = var8[var2];
            var6 = var6.bind(var4)(var2);
            var2 = var6.isThemeDark;
            var6 = var2.bind(var6)(var7);
            var2 = _closure1_slot12;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var20 = var2.LIGHT;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var20 = var2.DARK;
case 6:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 19;
            var2 = var8[var2];
            var9 = var7.bind(var4)(var2);
            var6 = var9.useYouBarEnabled;
            var2 = 'QuestDockUnenrolledHeader';
            var26 = var6.bind(var9)(var2);
            var _closure2_slot4 = var26;
            var2 = 20;
            var2 = var8[var2];
            var10 = var7.bind(var4)(var2);
            var9 = var10.useToken;
            var2 = _closure1_slot1;
            var22 = 8;
            var6 = var8[var22];
            var6 = var2.bind(var4)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.QUEST_DOCK_BORDER_RADIUS;
            var27 = var9.bind(var10)(var6);
            var _closure2_slot5 = var27;
            var6 = 21;
            var6 = var8[var6];
            var6 = var2.bind(var4)(var6);
            var18 = var6.bind(var4)(var27);
            var _closure2_slot6 = var18;
            var6 = 22;
            var9 = var8[var6];
            var11 = var7.bind(var4)(var9);
            var10 = var11.useAnimatedStyle;
            var9 = function B() {
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
                    var2 = _closure2_slot5;
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
                    var2 = _closure2_slot5;
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
                    var2 = _closure2_slot5;
                    _fun0003_ip = 17; continue _fun0003;
case 15:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 9;
                    var5 = var5[var3];
                    var3 = undefined;
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.withSpring;
                    var5 = _closure2_slot6;
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
                    var2 = _closure2_slot5;
                    _fun0003_ip = 23; continue _fun0003;
case 21:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 9;
                    var5 = var5[var3];
                    var3 = undefined;
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.withSpring;
                    var5 = _closure2_slot6;
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
                    var6 = _closure1_slot11;
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
                    var5 = _closure1_slot11;
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
                    var7 = _closure1_slot11;
case 30:
                    var4 = _closure1_slot8;
                    var4 = var5.bind(var6)(var7, var4);
                    var3['translateY'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var14['activeQuestDockMode'] = var30;
            var29 = _closure1_slot7;
            var14['QuestDockMode'] = var29;
            var28 = _closure1_slot9;
            var14['QUEST_DOCK_CONTENT_BORDER_RADII'] = var28;
            var14['questDockBorderRadius'] = var27;
            var14['youBarEnabled'] = var26;
            var21 = 9;
            var13 = var8[var21];
            var13 = var7.bind(var4)(var13);
            var13 = var13.withSpring;
            var14['withSpring'] = var13;
            var14['questDockAnimatedBorderRadius'] = var18;
            var13 = _closure1_slot8;
            var14['QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED'] = var13;
            var14['questDockWrapperSpecs'] = var12;
            var15 = _closure1_slot11;
            var14['QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED'] = var15;
            var9['__closure'] = var14;
            var14 = 961167275812.0;
            var9['__workletHash'] = var14;
            var14 = _closure1_slot19;
            var9['__initData'] = var14;
            var11 = var10.bind(var11)(var9);
            var9 = var8[var6];
            var14 = var7.bind(var4)(var9);
            var10 = var14.useAnimatedStyle;
            var9 = function q() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var6 = _closure2_slot1;
                    var3 = var6.get;
                    var7 = var3.bind(var6)();
                    var3 = _closure1_slot7;
                    var6 = var3.EXPANDED;
                    var3 = 1;
                    if(!(var7 === var6)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var3 = 0;
case 32:
                    var2 = _closure1_slot8;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var15 = {};
            var16 = var8[var21];
            var16 = var7.bind(var4)(var16);
            var16 = var16.withSpring;
            var15['withSpring'] = var16;
            var15['activeQuestDockMode'] = var30;
            var15['QuestDockMode'] = var29;
            var15['QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED'] = var13;
            var9['__closure'] = var15;
            var15 = 15527972438968.0;
            var9['__workletHash'] = var15;
            var15 = _closure1_slot20;
            var9['__initData'] = var15;
            var19 = var10.bind(var14)(var9);
            var9 = var8[var6];
            var14 = var7.bind(var4)(var9);
            var10 = var14.useAnimatedStyle;
            var9 = function K() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var5 = var2.bind(var3)();
                    var2 = _closure1_slot7;
                    var4 = var2.EXPANDED;
                    var2 = 0;
                    if(!(var5 === var4)) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var4 = _closure1_slot10;
                    var3 = -1;
                    var2 = var3 * var4;
case 34:
                    var1['right'] = var2;
                    return var1;
                }
            };
            var15 = {};
            var15['activeQuestDockMode'] = var30;
            var15['QuestDockMode'] = var29;
            var31 = _closure1_slot10;
            var15['QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED'] = var31;
            var9['__closure'] = var15;
            var15 = 7866036039040.0;
            var9['__workletHash'] = var15;
            var15 = _closure1_slot21;
            var9['__initData'] = var15;
            var14 = var10.bind(var14)(var9);
            var9 = var8[var6];
            var15 = var7.bind(var4)(var9);
            var10 = var15.useAnimatedStyle;
            var9 = function X() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var6 = _closure2_slot1;
                    var3 = var6.get;
                    var7 = var3.bind(var6)();
                    var3 = _closure1_slot7;
                    var6 = var3.EXPANDED;
                    var3 = 0;
                    if(!(var7 === var6)) { _fun0006_ip = 32; continue _fun0006 }
case 36:
                    var3 = 1;
case 32:
                    var2 = _closure1_slot8;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var16 = {};
            var17 = var8[var21];
            var17 = var7.bind(var4)(var17);
            var17 = var17.withSpring;
            var16['withSpring'] = var17;
            var16['activeQuestDockMode'] = var30;
            var16['QuestDockMode'] = var29;
            var16['QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED'] = var13;
            var9['__closure'] = var16;
            var16 = 11647269239934.0;
            var9['__workletHash'] = var16;
            var16 = _closure1_slot22;
            var9['__initData'] = var16;
            var16 = var10.bind(var15)(var9);
            var9 = var8[var6];
            var15 = var7.bind(var4)(var9);
            var10 = var15.useAnimatedStyle;
            var9 = function G() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = {};
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var5 = var2.bind(var3)();
                    var2 = _closure1_slot7;
                    var4 = var2.EXPANDED;
                    var2 = 0;
                    if(!(var5 !== var4)) { _fun0007_ip = 7; continue _fun0007 }
case 35:
                    var2 = _closure1_slot10;
case 7:
                    var1['right'] = var2;
                    return var1;
                }
            };
            var17 = {};
            var17['activeQuestDockMode'] = var30;
            var17['QuestDockMode'] = var29;
            var17['QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED'] = var31;
            var9['__closure'] = var17;
            var17 = 14794727045076.0;
            var9['__workletHash'] = var17;
            var17 = _closure1_slot23;
            var9['__initData'] = var17;
            var15 = var10.bind(var15)(var9);
            var9 = var8[var6];
            var17 = var7.bind(var4)(var9);
            var10 = var17.useAnimatedProps;
            var9 = function f() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = {};
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var4 = var2.bind(var3)();
                    var2 = _closure1_slot7;
                    var3 = var2.EXPANDED;
                    var2 = 'none';
                    if(!(var4 === var3)) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                    var2 = 'auto';
case 37:
                    var1['pointerEvents'] = var2;
                    return var1;
                }
            };
            var31 = {};
            var31['activeQuestDockMode'] = var30;
            var31['QuestDockMode'] = var29;
            var9['__closure'] = var31;
            var31 = 6738114933032.0;
            var9['__workletHash'] = var31;
            var31 = _closure1_slot24;
            var9['__initData'] = var31;
            var17 = var10.bind(var17)(var9);
            var6 = var8[var6];
            var9 = var7.bind(var4)(var6);
            var6 = var9.useAnimatedStyle;
            var3 = function b() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot1;
                    var3 = var4.get;
                    var5 = var3.bind(var4)();
                    var3 = _closure1_slot7;
                    var3 = var3.EXPANDED;
                    if(!(var5 !== var3)) { _fun0009_ip = 7; continue _fun0009 }
case 8:
                    var3 = _closure2_slot5;
                    _fun0009_ip = 9; continue _fun0009;
case 7:
                    var3 = _closure1_slot9;
case 9:
                    var1['borderRadius'] = var3;
                    var5 = _closure2_slot1;
                    var3 = var5.get;
                    var5 = var3.bind(var5)();
                    var3 = _closure1_slot7;
                    var3 = var3.EXPANDED;
                    if(!(var5 !== var3)) { _fun0009_ip = 39; continue _fun0009 }
case 40:
                    var3 = _closure2_slot4;
                    if(var3) { _fun0009_ip = 41; continue _fun0009 }
case 10:
                    var3 = _closure2_slot5;
                    _fun0009_ip = 42; continue _fun0009;
case 41:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 9;
                    var6 = var6[var5];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.withSpring;
                    var6 = _closure2_slot6;
                    var5 = var6.get;
                    var6 = var5.bind(var6)();
                    var5 = _closure1_slot8;
                    var3 = var7.bind(var8)(var6, var5);
case 42:
                    _fun0009_ip = 43; continue _fun0009;
case 39:
                    var3 = _closure1_slot9;
case 43:
                    var1['borderBottomLeftRadius'] = var3;
                    var5 = _closure2_slot1;
                    var3 = var5.get;
                    var5 = var3.bind(var5)();
                    var3 = _closure1_slot7;
                    var3 = var3.EXPANDED;
                    if(!(var5 !== var3)) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                    var3 = _closure2_slot4;
                    if(var3) { _fun0009_ip = 46; continue _fun0009 }
case 13:
                    var3 = _closure2_slot5;
                    _fun0009_ip = 47; continue _fun0009;
case 46:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 9;
                    var6 = var6[var5];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.withSpring;
                    var6 = _closure2_slot6;
                    var5 = var6.get;
                    var6 = var5.bind(var6)();
                    var5 = _closure1_slot8;
                    var3 = var7.bind(var8)(var6, var5);
case 47:
                    _fun0009_ip = 48; continue _fun0009;
case 44:
                    var3 = _closure1_slot9;
case 48:
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
            var10['activeQuestDockMode'] = var30;
            var10['QuestDockMode'] = var29;
            var10['QUEST_DOCK_CONTENT_BORDER_RADII'] = var28;
            var10['questDockBorderRadius'] = var27;
            var10['youBarEnabled'] = var26;
            var21 = var8[var21];
            var21 = var7.bind(var4)(var21);
            var21 = var21.withSpring;
            var10['withSpring'] = var21;
            var10['questDockAnimatedBorderRadius'] = var18;
            var10['QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED'] = var13;
            var10['questDockWrapperSpecs'] = var12;
            var3['__closure'] = var10;
            var10 = 6128777581416.0;
            var3['__workletHash'] = var10;
            var10 = _closure1_slot25;
            var3['__initData'] = var10;
            var9 = var6.bind(var9)(var3);
            var3 = _closure1_slot16;
            var18 = var3.bind(var4)();
            var3 = 23;
            var3 = var8[var3];
            var6 = var7.bind(var4)(var3);
            var3 = var6.useQuestGameLogotypeAssetUrl;
            var26 = var3.bind(var6)(var1);
            var1 = var1.config;
            var1 = var1.assets;
            var10 = var1.questBarHeroBlurhash;
            var3 = _closure1_slot14;
            var13 = 24;
            var1 = var8[var13];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var12 = var18.questDockHeader;
            var6 = new Array(2);
            var6[0] = var12;
            var6[1] = var11;
            var1['style'] = var6;
            var6 = _closure1_slot18;
            var1['layout'] = var6;
            var6 = 12;
            var6 = var8[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.isAndroid;
            var6 = var6.bind(var7)();
            if(var6) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            if(!var5) { _fun0001_ip = 51; continue _fun0001 }
case 49:
            var5 = null;
            if(!(var5 == var10)) { _fun0001_ip = 52; continue _fun0001 }
case 51:
            var7 = _closure1_slot13;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 26;
            var5 = var8[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['animatedStyle'] = var9;
            var8 = _closure1_slot18;
            var5['animatedLayout'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            _fun0001_ip = 53; continue _fun0001;
case 52:
            var8 = _closure1_slot13;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 25;
            var5 = var11[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['placeholder'] = var10;
            var5['animatedStyle'] = var9;
            var9 = _closure1_slot18;
            var5['animatedLayout'] = var9;
            var6 = var8.bind(var4)(var7, var5);
case 53:
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot14;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var18.questDockHeaderPrimary;
            var6['style'] = var9;
            var11 = _closure1_slot13;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 27;
            var9 = var12[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var12 = _closure1_slot12;
            var12 = var12.DARK;
            if(!(var20 !== var12)) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var20 = _closure1_slot1;
            var21 = _closure1_slot2;
            var12 = 29;
            var12 = var21[var12];
            var12 = var20.bind(var4)(var12);
            _fun0001_ip = 56; continue _fun0001;
case 54:
            var21 = _closure1_slot1;
            var27 = _closure1_slot2;
            var20 = 28;
            var20 = var27[var20];
            var12 = var21.bind(var4)(var20);
case 56:
            var9['source'] = var12;
            var12 = 'contain';
            var9['resizeMode'] = var12;
            var12 = var18.wreathImage;
            var9['style'] = var12;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot13;
            var21 = _closure1_slot1;
            var20 = _closure1_slot2;
            var10 = 30;
            var10 = var20[var10];
            var11 = var21.bind(var4)(var10);
            var10 = {'assetUrl': null, 'height': 36, 'maxWidth': 120};
            var10['assetUrl'] = var26;
            var26 = var18.logo;
            var10['style'] = var26;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot14;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var18.questDockHeaderSecondary;
            var6['style'] = var9;
            var9 = var20[var13];
            var10 = var21.bind(var4)(var9);
            var9 = {};
            var26 = var18.questDockHeaderContentCollapsed;
            var11 = new Array(2);
            var11[0] = var26;
            var11[1] = var14;
            var9['style'] = var11;
            var14 = _closure1_slot18;
            var9['layout'] = var14;
            var11 = var20[var13];
            var26 = var21.bind(var4)(var11);
            var11 = {};
            var11['style'] = var19;
            var19 = _closure1_slot0;
            var27 = 31;
            var28 = var20[var27];
            var28 = var19.bind(var4)(var28);
            var30 = var28.Text;
            var28 = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-text-active'};
            var29 = var18.questDockHeaderTertiaryContent;
            var28['style'] = var29;
            var29 = 32;
            var31 = var20[var29];
            var31 = var19.bind(var4)(var31);
            var33 = var31.intl;
            var32 = var33.string;
            var31 = var20[var29];
            var31 = var19.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31["3mgEQf"];
            var31 = var32.bind(var33)(var31);
            var28['children'] = var31;
            var28 = var12.bind(var4)(var30, var28);
            var11['children'] = var28;
            var11 = var12.bind(var4)(var26, var11);
            var9['children'] = var11;
            var10 = var12.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = var20[var13];
            var11 = var21.bind(var4)(var10);
            var10 = {};
            var10['animatedProps'] = var17;
            var10['style'] = var15;
            var10['layout'] = var14;
            var13 = var20[var13];
            var14 = var21.bind(var4)(var13);
            var13 = {};
            var17 = var18.questDockHeaderContentExpanded;
            var15 = new Array(2);
            var15[0] = var17;
            var15[1] = var16;
            var13['style'] = var15;
            var16 = 33;
            var15 = var20[var16];
            var15 = var19.bind(var4)(var15);
            var17 = var15.PressableOpacity;
            var15 = {};
            var15['onPress'] = var24;
            var24 = 'button';
            var15['accessibilityRole'] = var24;
            var28 = var18.questDockHeaderActionDisclosures;
            var26 = new Array(2);
            var26[0] = var28;
            var28 = var18.questDockHeaderTertiaryContent;
            var26[1] = var28;
            var15['style'] = var26;
            var26 = _closure1_slot15;
            var25 = {};
            var27 = var20[var27];
            var27 = var19.bind(var4)(var27);
            var28 = var27.Text;
            var27 = {'color': 'interactive-text-active', 'variant': 'text-sm/medium'};
            var30 = var20[var29];
            var30 = var19.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var20[var29];
            var29 = var19.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.o6FLcF;
            var29 = var30.bind(var31)(var29);
            var27['children'] = var29;
            var28 = var12.bind(var4)(var28, var27);
            var27 = new Array(2);
            var27[0] = var28;
            var28 = 34;
            var28 = var20[var28];
            var28 = var19.bind(var4)(var28);
            var29 = var28.CircleQuestionIcon;
            var28 = {};
            var30 = var20[var22];
            var30 = var21.bind(var4)(var30);
            var30 = var30.colors;
            var30 = var30.INTERACTIVE_TEXT_ACTIVE;
            var28['color'] = var30;
            var30 = var18.questDockHeaderActionDisclosuresIcon;
            var28['style'] = var30;
            var28 = var12.bind(var4)(var29, var28);
            var27[1] = var28;
            var25['children'] = var27;
            var25 = var8.bind(var4)(var26, var25);
            var15['children'] = var25;
            var17 = var12.bind(var4)(var17, var15);
            var15 = new Array(3);
            var15[0] = var17;
            var17 = {};
            var25 = var18.questDockHeaderActionSeparator;
            var17['style'] = var25;
            var17 = var12.bind(var4)(var7, var17);
            var15[1] = var17;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var17 = var16.PressableOpacity;
            var16 = {};
            var16['accessibilityRole'] = var24;
            var16['onPress'] = var23;
            var18 = var18.questDockHeaderTertiaryContent;
            var16['style'] = var18;
            var18 = 35;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.MoreHorizontalIcon;
            var18 = {};
            var20 = var20[var22];
            var20 = var21.bind(var4)(var20);
            var20 = var20.colors;
            var20 = var20.INTERACTIVE_TEXT_ACTIVE;
            var18['color'] = var20;
            var18 = var12.bind(var4)(var19, var18);
            var16['children'] = var18;
            var16 = var12.bind(var4)(var17, var16);
            var15[2] = var16;
            var13['children'] = var15;
            var13 = var8.bind(var4)(var14, var13);
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 36;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
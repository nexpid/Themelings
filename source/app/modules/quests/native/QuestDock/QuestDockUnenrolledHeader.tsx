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
    var8 = var4.QUEST_DOCK_BORDER_RADII;
    var _closure1_slot10 = var8;
    var11 = var4.QUEST_DOCK_COLLAPSED_HEIGHT;
    var8 = var4.QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED;
    var _closure1_slot11 = var8;
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
    var8 = var4.jsx;
    var _closure1_slot14 = var8;
    var8 = var4.jsxs;
    var _closure1_slot15 = var8;
    var4 = var4.Fragment;
    var _closure1_slot16 = var4;
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
    var _closure1_slot17 = var4;
    var4 = {};
    var8 = 'function questDockHeaderLayoutAnimation_QuestDockUnenrolledHeaderTsx1(values){const{withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}};}';
    var4['code'] = var8;
    var _closure1_slot18 = var4;
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
        var2 = _closure1_slot18;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 'function QuestDockUnenrolledHeaderTsx2(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,QUEST_DOCK_BORDER_RADII,youBarEnabled,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{borderTopLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:QUEST_DOCK_BORDER_RADII,borderTopRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:QUEST_DOCK_BORDER_RADII,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:youBarEnabled?0:QUEST_DOCK_BORDER_RADII,borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:youBarEnabled?0:QUEST_DOCK_BORDER_RADII,width:activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};}';
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = 'function QuestDockUnenrolledHeaderTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED*-1:0};}';
    var4['code'] = var8;
    var _closure1_slot21 = var4;
    var4 = {};
    var8 = 'function QuestDockUnenrolledHeaderTsx4(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED};}';
    var4['code'] = var8;
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = "function QuestDockUnenrolledHeaderTsx5(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}";
    var4['code'] = var8;
    var _closure1_slot23 = var4;
    var4 = {};
    var8 = 'function QuestDockUnenrolledHeaderTsx6(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,QUEST_DOCK_BORDER_RADII,questDockWrapperSpecs}=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:QUEST_DOCK_BORDER_RADII,width:questDockWrapperSpecs.get().width};}';
    var4['code'] = var8;
    var _closure1_slot24 = var4;
    var4 = var7.memo;
    var2 = function QuestDockUnenrolledHeader() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var12 = _closure1_slot4;
            var3 = var12.useContext;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 10;
            var1 = var8[var1];
            var4 = undefined;
            var1 = var7.bind(var4)(var1);
            var1 = var3.bind(var12)(var1);
            var1 = var1.quest;
            var _closure2_slot0 = var1;
            var5 = var12.useContext;
            var6 = _closure1_slot0;
            var3 = 11;
            var3 = var8[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.QuestDockGestureContext;
            var3 = var5.bind(var12)(var3);
            var18 = var3.activeQuestDockMode;
            var _closure2_slot1 = var18;
            var10 = var3.questDockWrapperSpecs;
            var _closure2_slot2 = var10;
            var5 = var12.useState;
            var3 = false;
            var9 = var5.bind(var12)(var3);
            var5 = _closure1_slot3;
            var3 = 2;
            var9 = var5.bind(var4)(var9, var3);
            var3 = 0;
            var5 = var9[var3];
            var3 = 1;
            var3 = var9[var3];
            var _closure2_slot3 = var3;
            var11 = var12.useEffect;
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
            var3 = new Array(0);
            var3 = var11.bind(var12)(var9, var3);
            var3 = 13;
            var3 = var8[var3];
            var9 = var6.bind(var4)(var3);
            var3 = var9.useActionSheetPressHandler;
            var21 = var3.bind(var9)(var1);
            var11 = var12.useCallback;
            var9 = new Array(1);
            var9[0] = var1;
            var3 = function() {
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
            var22 = var11.bind(var12)(var3, var9);
            var3 = 17;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var7 = var3.bind(var4)();
            var3 = 18;
            var3 = var8[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.isThemeDark;
            var6 = var3.bind(var6)(var7);
            var3 = _closure1_slot13;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var19 = var3.LIGHT;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var19 = var3.DARK;
case 6:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 19;
            var3 = var8[var3];
            var9 = var7.bind(var4)(var3);
            var6 = var9.useYouBarEnabled;
            var3 = 'QuestDockUnenrolledHeader';
            var14 = var6.bind(var9)(var3);
            var _closure2_slot4 = var14;
            var3 = 20;
            var6 = var8[var3];
            var12 = var7.bind(var4)(var6);
            var9 = var12.useAnimatedStyle;
            var6 = function K() {
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
                    var3 = _closure2_slot4;
                    var2 = 0;
                    if(var3) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var2 = _closure1_slot10;
case 15:
                    _fun0003_ip = 17; continue _fun0003;
case 13:
                    var2 = _closure1_slot9;
case 17:
                    var1['borderBottomLeftRadius'] = var2;
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot7;
                    var2 = var2.EXPANDED;
                    if(!(var3 !== var2)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var3 = _closure2_slot4;
                    var2 = 0;
                    if(var3) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var2 = _closure1_slot10;
case 20:
                    _fun0003_ip = 22; continue _fun0003;
case 18:
                    var2 = _closure1_slot9;
case 22:
                    var1['borderBottomRightRadius'] = var2;
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot7;
                    var2 = var2.EXPANDED;
                    if(!(var3 !== var2)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var2 = var2.width;
                    _fun0003_ip = 25; continue _fun0003;
case 23:
                    var5 = _closure2_slot2;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var5 = var3.width;
                    var6 = _closure1_slot12;
                    var3 = 2;
                    var3 = var3 * var6;
                    var2 = var5 - var3;
case 25:
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
                    if(!(var12 === var2)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var5 = _closure1_slot12;
case 26:
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
                    if(!(var9 === var8)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var7 = _closure1_slot12;
case 28:
                    var4 = _closure1_slot8;
                    var4 = var5.bind(var6)(var7, var4);
                    var3['translateY'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var13['activeQuestDockMode'] = var18;
            var16 = _closure1_slot7;
            var13['QuestDockMode'] = var16;
            var15 = _closure1_slot9;
            var13['QUEST_DOCK_CONTENT_BORDER_RADII'] = var15;
            var11 = _closure1_slot10;
            var13['QUEST_DOCK_BORDER_RADII'] = var11;
            var13['youBarEnabled'] = var14;
            var13['questDockWrapperSpecs'] = var10;
            var14 = _closure1_slot12;
            var13['QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED'] = var14;
            var25 = 9;
            var14 = var8[var25];
            var14 = var7.bind(var4)(var14);
            var14 = var14.withSpring;
            var13['withSpring'] = var14;
            var24 = _closure1_slot8;
            var13['QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED'] = var24;
            var6['__closure'] = var13;
            var13 = 12059435652278.0;
            var6['__workletHash'] = var13;
            var13 = _closure1_slot20;
            var6['__initData'] = var13;
            var14 = var9.bind(var12)(var6);
            var6 = var8[var3];
            var12 = var7.bind(var4)(var6);
            var9 = var12.useAnimatedStyle;
            var6 = function v() {
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
                    if(!(var8 === var4)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var5 = 0;
case 30:
                    var4 = _closure1_slot8;
                    var4 = var6.bind(var7)(var5, var4);
                    var1['opacity'] = var4;
                    var4 = _closure2_slot1;
                    var2 = var4.get;
                    var5 = var2.bind(var4)();
                    var2 = _closure1_slot7;
                    var4 = var2.EXPANDED;
                    var2 = 0;
                    if(!(var5 === var4)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var4 = _closure1_slot11;
                    var3 = -1;
                    var2 = var3 * var4;
case 32:
                    var1['right'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var17 = var8[var25];
            var17 = var7.bind(var4)(var17);
            var17 = var17.withSpring;
            var13['withSpring'] = var17;
            var13['activeQuestDockMode'] = var18;
            var13['QuestDockMode'] = var16;
            var13['QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED'] = var24;
            var20 = _closure1_slot11;
            var13['QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED'] = var20;
            var6['__closure'] = var13;
            var13 = 16795373856064.0;
            var6['__workletHash'] = var13;
            var13 = _closure1_slot21;
            var6['__initData'] = var13;
            var17 = var9.bind(var12)(var6);
            var6 = var8[var3];
            var12 = var7.bind(var4)(var6);
            var9 = var12.useAnimatedStyle;
            var6 = function X() {
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
                    if(!(var9 === var5)) { _fun0005_ip = 30; continue _fun0005 }
case 34:
                    var6 = 1;
case 30:
                    var5 = _closure1_slot8;
                    var5 = var7.bind(var8)(var6, var5);
                    var1['opacity'] = var5;
                    var5 = _closure2_slot1;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var4 = _closure1_slot7;
                    var4 = var4.EXPANDED;
                    var2 = 0;
                    if(!(var5 !== var4)) { _fun0005_ip = 35; continue _fun0005 }
case 33:
                    var2 = _closure1_slot11;
case 35:
                    var1['right'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var25 = var8[var25];
            var25 = var7.bind(var4)(var25);
            var25 = var25.withSpring;
            var13['withSpring'] = var25;
            var13['activeQuestDockMode'] = var18;
            var13['QuestDockMode'] = var16;
            var13['QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED'] = var24;
            var13['QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED'] = var20;
            var6['__closure'] = var13;
            var13 = 11741220477745.0;
            var6['__workletHash'] = var13;
            var13 = _closure1_slot22;
            var6['__initData'] = var13;
            var13 = var9.bind(var12)(var6);
            var6 = var8[var3];
            var12 = var7.bind(var4)(var6);
            var9 = var12.useAnimatedProps;
            var6 = function f() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = {};
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var4 = var2.bind(var3)();
                    var2 = _closure1_slot7;
                    var3 = var2.EXPANDED;
                    var2 = 'none';
                    if(!(var4 === var3)) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                    var2 = 'auto';
case 36:
                    var1['pointerEvents'] = var2;
                    return var1;
                }
            };
            var20 = {};
            var20['activeQuestDockMode'] = var18;
            var20['QuestDockMode'] = var16;
            var6['__closure'] = var20;
            var20 = 16421998349674.0;
            var6['__workletHash'] = var20;
            var20 = _closure1_slot23;
            var6['__initData'] = var20;
            var12 = var9.bind(var12)(var6);
            var3 = var8[var3];
            var6 = var7.bind(var4)(var3);
            var3 = var6.useAnimatedStyle;
            var2 = function G() {
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
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var2 = var2.width;
                    var1['width'] = var2;
                    return var1;
                }
            };
            var9 = {};
            var9['activeQuestDockMode'] = var18;
            var9['QuestDockMode'] = var16;
            var9['QUEST_DOCK_CONTENT_BORDER_RADII'] = var15;
            var9['QUEST_DOCK_BORDER_RADII'] = var11;
            var9['questDockWrapperSpecs'] = var10;
            var2['__closure'] = var9;
            var9 = 10463333318801.0;
            var2['__workletHash'] = var9;
            var9 = _closure1_slot24;
            var2['__initData'] = var9;
            var9 = var3.bind(var6)(var2);
            var2 = _closure1_slot17;
            var16 = var2.bind(var4)();
            var2 = 21;
            var2 = var8[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useQuestGameLogotypeAssetUrl;
            var18 = var2.bind(var3)(var1);
            var1 = var1.config;
            var1 = var1.assets;
            var11 = var1.questBarHeroBlurhash;
            var3 = _closure1_slot15;
            var2 = _closure1_slot1;
            var10 = 22;
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
            if(var6) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            if(!var5) { _fun0001_ip = 40; continue _fun0001 }
case 38:
            var5 = null;
            if(!(var5 == var11)) { _fun0001_ip = 41; continue _fun0001 }
case 40:
            var7 = _closure1_slot14;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 24;
            var5 = var8[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['animatedStyle'] = var9;
            var8 = _closure1_slot19;
            var5['animatedLayout'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            _fun0001_ip = 42; continue _fun0001;
case 41:
            var8 = _closure1_slot14;
            var7 = _closure1_slot1;
            var14 = _closure1_slot2;
            var5 = 23;
            var5 = var14[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['placeholder'] = var11;
            var5['animatedStyle'] = var9;
            var9 = _closure1_slot19;
            var5['animatedLayout'] = var9;
            var6 = var8.bind(var4)(var7, var5);
case 42:
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
            var9 = 25;
            var9 = var15[var9];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var15 = _closure1_slot13;
            var15 = var15.DARK;
            if(!(var19 !== var15)) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var15 = 27;
            var15 = var20[var15];
            var15 = var19.bind(var4)(var15);
            _fun0001_ip = 45; continue _fun0001;
case 43:
            var20 = _closure1_slot1;
            var24 = _closure1_slot2;
            var19 = 26;
            var19 = var24[var19];
            var15 = var20.bind(var4)(var19);
case 45:
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
            var11 = 28;
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
            var18 = 29;
            var14 = var20[var18];
            var14 = var17.bind(var4)(var14);
            var24 = var14.Text;
            var14 = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-text-active'};
            var25 = var16.questDockHeaderTertiaryContent;
            var14['style'] = var25;
            var26 = 30;
            var25 = var20[var26];
            var25 = var17.bind(var4)(var25);
            var28 = var25.intl;
            var27 = var28.string;
            var25 = var20[var26];
            var25 = var17.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.3mgEQf;
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
            var13 = 31;
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
            var18 = 32;
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
            var16 = 33;
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
    var2 = var4.bind(var7)(var2);
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
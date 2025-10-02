// app/modules/voice_panel/native/controls/VoicePanelControlsDrawer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function renderControls(arg1) {
        var4 = _closure1_slot7;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 8;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var5 = arg1;
        var1['isVisible'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function renderChat(arg1) {
        var4 = _closure1_slot7;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 9;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var5 = arg1;
        var1['shown'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var12.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var5 = var7[var2];
    var2 = metroImportAll;
    var8 = var2.bind(var1)(var5);
    var _closure1_slot4 = var8;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.MODE_CHANGE_PHYSICS;
    var _closure1_slot5 = var5;
    var2 = var2.VoicePanelModes;
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot7 = var5;
    var2 = var2.jsxs;
    var _closure1_slot8 = var2;
    var2 = 4;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var5 = var9.createStyles;
    var2 = {};
    var10 = {'flex': 1, 'zIndex': 1};
    var11 = 5;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var11;
    var2['drawer'] = var10;
    var2 = var5.bind(var9)(var2);
    var _closure1_slot9 = var2;
    var5 = var8.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.shown;
            var _closure2_slot0 = var3;
            var10 = var2.renderContent;
            var _closure2_slot1 = var10;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var7 = _closure1_slot4;
            var6 = var7.useState;
            var4 = !var3;
            var7 = var6.bind(var7)(var4);
            var6 = _closure1_slot3;
            var4 = 2;
            var6 = var6.bind(var5)(var7, var4);
            var4 = 0;
            var7 = var6[var4];
            var4 = 1;
            var6 = var6[var4];
            var _closure2_slot2 = var6;
            var4 = var3;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var7;
case 2:
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = false;
            var4 = var6.bind(var5)(var4);
case 4:
            var9 = _closure1_slot4;
            var4 = var9.useRef;
            var4 = var4.bind(var9)(var3);
            _closure2_slot3 = var4;
            var8 = var9.useEffect;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = var2.current;
                    if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = _closure2_slot0;
case 6:
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var6);
            var11 = var9.useEffect;
            var8 = new Array(1);
            var8[0] = var3;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var11.bind(var9)(var6, var8);
            var8 = var9.useMemo;
            var6 = new Array(2);
            var6[0] = var10;
            var6[1] = var3;
            var1 = function() {
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = var8.bind(var9)(var1, var6);
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 6;
            var1 = var9[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.bind(var5)(var4);
            if(var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = null;
            if(!var3) { _fun0001_ip = 12; continue _fun0001 }
case 10:
            var4 = _closure1_slot7;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Freeze;
            var2 = {};
            var2['freeze'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 12:
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var _closure1_slot10 = var2;
    var5 = {};
    var9 = 'function VoicePanelControlsDrawerTsx1(){const{getControlsDrawerOpenWidth,windowDimensions,safeArea,withSpring,wrapperSpecs,TRANSITIONAL_HEIGHT,MODE_CHANGE_PHYSICS}=this.__closure;return{width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?1:0,MODE_CHANGE_PHYSICS)};}';
    var5['code'] = var9;
    var _closure1_slot11 = var5;
    var5 = {};
    var9 = 'function VoicePanelControlsDrawerTsx2(){const{wrapperSpecs,mode}=this.__closure;return[wrapperSpecs.get().drawerMode,mode.get()];}';
    var5['code'] = var9;
    var _closure1_slot12 = var5;
    var5 = {};
    var9 = 'function VoicePanelControlsDrawerTsx3(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelModes,runOnJS,setFreeze}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isDrawer,mode]=props;if(previous!=null&&isDrawer===previous[0]&&mode===previous[1]){return;}if(mode!==VoicePanelModes.PANEL||!isDrawer){runOnJS(setFreeze)(true);}else{runOnJS(setFreeze)(false);}}';
    var5['code'] = var9;
    var _closure1_slot13 = var5;
    var5 = var8.memo;
    var4 = function VoicePanelControlsDrawer(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var12 = var1.tab;
            var3 = var1.sharedTab;
            var17 = var1.wrapperSpecs;
            var _closure2_slot0 = var17;
            var13 = var1.gestureSpecs;
            var _closure2_slot1 = var13;
            var8 = _closure1_slot4;
            var5 = var8.useContext;
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var7.bind(var4)(var1);
            var1 = var5.bind(var8)(var1);
            var15 = var1.mode;
            var _closure2_slot2 = var15;
            var19 = var1.windowDimensions;
            var _closure2_slot3 = var19;
            var14 = var1.safeArea;
            var _closure2_slot4 = var14;
            var1 = _closure1_slot9;
            var5 = var1.bind(var4)();
            var7 = var8.useState;
            var1 = null;
            var1 = var1 == var12;
            var8 = var7.bind(var8)(var1);
            var7 = _closure1_slot3;
            var1 = 2;
            var7 = var7.bind(var4)(var8, var1);
            var1 = 0;
            var10 = var7[var1];
            var1 = 1;
            var16 = var7[var1];
            var _closure2_slot5 = var16;
            var1 = var3.get;
            var1 = var1.bind(var3)();
            var1 = var12 !== var1;
            if(!var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var1 = var10;
case 13:
            if(!var1) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var1 = false;
            var1 = var16.bind(var4)(var1);
case 15:
            var18 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 11;
            var3 = var8[var1];
            var9 = var18.bind(var4)(var3);
            var7 = var9.useAnimatedStyle;
            var3 = function y() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 12;
                    var3 = var7[var3];
                    var5 = undefined;
                    var11 = var6.bind(var5)(var3);
                    var10 = var11.getControlsDrawerOpenWidth;
                    var8 = _closure2_slot3;
                    var4 = var8.get;
                    var4 = var4.bind(var8)();
                    var9 = var4.width;
                    var12 = _closure2_slot4;
                    var4 = var12.get;
                    var4 = var4.bind(var12)();
                    var8 = var4.left;
                    var4 = var12.get;
                    var4 = var4.bind(var12)();
                    var4 = var4.right;
                    var4 = var10.bind(var11)(var9, var8, var4);
                    var1['width'] = var4;
                    var4 = 13;
                    var4 = var7[var4];
                    var5 = var6.bind(var5)(var4);
                    var4 = var5.withSpring;
                    var6 = _closure2_slot0;
                    var3 = var6.get;
                    var3 = var3.bind(var6)();
                    var6 = var3.height;
                    var3 = 200;
                    var6 = var6 >= var3;
                    var3 = 0;
                    if(!var6) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var3 = 1;
case 17:
                    var2 = _closure1_slot5;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var11 = {};
            var20 = 12;
            var20 = var8[var20];
            var20 = var18.bind(var4)(var20);
            var20 = var20.getControlsDrawerOpenWidth;
            var11['getControlsDrawerOpenWidth'] = var20;
            var11['windowDimensions'] = var19;
            var11['safeArea'] = var14;
            var14 = 13;
            var14 = var8[var14];
            var14 = var18.bind(var4)(var14);
            var14 = var14.withSpring;
            var11['withSpring'] = var14;
            var11['wrapperSpecs'] = var17;
            var14 = 200;
            var11['TRANSITIONAL_HEIGHT'] = var14;
            var14 = _closure1_slot5;
            var11['MODE_CHANGE_PHYSICS'] = var14;
            var3['__closure'] = var11;
            var11 = 8777106499672.0;
            var3['__workletHash'] = var11;
            var11 = _closure1_slot11;
            var3['__initData'] = var11;
            var7 = var7.bind(var9)(var3);
            var3 = var8[var1];
            var14 = var18.bind(var4)(var3);
            var11 = var14.useAnimatedReaction;
            var9 = function x() {
                var3 = _closure2_slot0;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var3 = var1.drawerMode;
                var1 = new Array(2);
                var1[0] = var3;
                var3 = _closure2_slot2;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var3 = {};
            var3['wrapperSpecs'] = var17;
            var3['mode'] = var15;
            var9['__closure'] = var3;
            var3 = 16802013961309.0;
            var9['__workletHash'] = var3;
            var3 = _closure1_slot12;
            var9['__initData'] = var3;
            var3 = function M(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var6 = arg1;
                    var7 = arg2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var3 = var3[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var3);
                    var5 = var8.cheapWorkletArrayShallowEqual;
                    var4 = null;
                    var9 = var4 != var7;
                    var3 = undefined;
                    if(!var9) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var3 = var7;
case 19:
                    var3 = var5.bind(var8)(var6, var3);
                    if(var3) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                    var5 = _closure1_slot3;
                    var3 = 2;
                    var5 = var5.bind(var1)(var6, var3);
                    var8 = 0;
                    var3 = var5[var8];
                    var6 = 1;
                    var5 = var5[var6];
                    var4 = var4 != var7;
                    if(!var4) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                    var8 = var7[var8];
                    var4 = var3 === var8;
case 23:
                    if(!var4) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                    var6 = var7[var6];
                    var4 = var5 === var6;
case 25:
                    if(var4) { _fun0006_ip = 21; continue _fun0006 }
case 27:
                    var4 = _closure1_slot6;
                    var4 = var4.PANEL;
                    if(!(var5 === var4)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                    if(var3) { _fun0006_ip = 30; continue _fun0006 }
case 28:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 11;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.runOnJS;
                    var3 = _closure2_slot5;
                    var4 = var4.bind(var5)(var3);
                    var3 = true;
                    var3 = var4.bind(var1)(var3);
                    _fun0006_ip = 21; continue _fun0006;
case 30:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot5;
                    var3 = var3.bind(var4)(var2);
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
case 21:
                    return var1;
                }
            };
            var15 = {};
            var17 = 14;
            var17 = var8[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.cheapWorkletArrayShallowEqual;
            var15['cheapWorkletArrayShallowEqual'] = var17;
            var17 = _closure1_slot6;
            var15['VoicePanelModes'] = var17;
            var17 = var8[var1];
            var17 = var18.bind(var4)(var17);
            var17 = var17.runOnJS;
            var15['runOnJS'] = var17;
            var15['setFreeze'] = var16;
            var3['__closure'] = var15;
            var15 = 10375596551326.0;
            var3['__workletHash'] = var15;
            var15 = _closure1_slot13;
            var3['__initData'] = var15;
            var3 = var11.bind(var14)(var9, var3);
            var11 = _closure1_slot4;
            var9 = var11.useCallback;
            var3 = new Array(1);
            var3[0] = var13;
            var2 = function() {
                var4 = _closure1_slot7;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 15;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot1;
                var1['gestureSpecs'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var9 = var9.bind(var11)(var2, var3);
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var8 = var5.drawer;
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var7;
            var1['style'] = var5;
            var8 = _closure1_slot7;
            var7 = _closure1_slot10;
            var5 = {};
            var11 = !var10;
            if(!var11) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var13 = 'settings';
            var11 = var13 === var12;
case 31:
            var5['shown'] = var11;
            var11 = _closure1_slot14;
            var5['renderContent'] = var11;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var11 = _closure1_slot7;
            var8 = _closure1_slot10;
            var7 = {};
            var13 = !var10;
            if(!var13) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var14 = 'chat';
            var13 = var14 === var12;
case 33:
            var7['shown'] = var13;
            var13 = _closure1_slot15;
            var7['renderContent'] = var13;
            var7 = var11.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot10;
            var6 = {};
            var10 = !var10;
            if(!var10) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var11 = 'app_launcher';
            var10 = var11 === var12;
case 35:
            var6['shown'] = var10;
            var6['renderContent'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 16;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/controls/VoicePanelControlsDrawer.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['LazyContentFreezer'] = var2;
    return var1;
})();
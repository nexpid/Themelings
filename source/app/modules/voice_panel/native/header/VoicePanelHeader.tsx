// app/modules/voice_panel/native/header/VoicePanelHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var6;
    var1 = function MusicMuteButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.channelId;
            var5 = undefined;
            var _closure2_slot0 = var5;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 25;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)(var8);
            var3 = null;
            var4 = var3 == var1;
            var2 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var1.speaker;
case 2:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 26;
            var1 = var10[var1];
            var12 = var4.bind(var5)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.isMuted;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var11.bind(var12)(var7, var1);
            _closure2_slot0 = var7;
            var1 = 27;
            var1 = var10[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useShowStageMusicMuteButton;
            var4 = var1.bind(var4)(var8);
            var1 = null;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = null;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var4 = _closure1_slot22;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 28;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 29;
            var11 = var13[var8];
            var11 = var10.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var8 = var13[var8];
            var8 = var10.bind(var5)(var8);
            var10 = var8.t;
            if(var7) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var8 = var10.zqxfrf;
            var8 = var11.bind(var12)(var8);
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var10 = var10.ScHlfl;
            var8 = var11.bind(var12)(var10);
case 9:
            var2['accessibilityLabel'] = var8;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = 31;
            var7 = var10[var7];
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var9 = 30;
            var7 = var10[var9];
case 12:
            var7 = var8.bind(var5)(var7);
            var2['icon'] = var7;
            var6 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 32;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.updateStageMusicMuted;
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot42 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var9 = true;
    var4['value'] = var9;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var12 = 0;
    var4 = var6[var12];
    var1 = undefined;
    var4 = var16.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var7 = var6[var11];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var15 = var4.StyleSheet;
    var _closure1_slot5 = var15;
    var4 = var4.Platform;
    var4 = 3;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.MODE_CHANGE_PHYSICS;
    var _closure1_slot15 = var8;
    var10 = var4.UI_SHOW_HIDE_PHYSICS;
    var _closure1_slot16 = var10;
    var10 = var4.VoicePanelModes;
    var _closure1_slot17 = var10;
    var4 = var4.DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE;
    var _closure1_slot18 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var17 = var4.EDGE_GUTTER;
    var _closure1_slot19 = var17;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelControlsModes;
    var _closure1_slot20 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot21 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.jsx;
    var _closure1_slot22 = var10;
    var4 = var4.jsxs;
    var _closure1_slot23 = var4;
    var4 = {};
    var10 = 300;
    var4['duration'] = var10;
    var _closure1_slot24 = var4;
    var4 = 17;
    var4 = var6[var4];
    var13 = var5.bind(var1)(var4);
    var10 = var13.createStyles;
    var4 = {};
    var14 = {'zIndex': 1, 'position': 'absolute', 'top': 0, 'left': 0, 'width': '100%', 'paddingBottom': null, 'overflow': 'hidden'};
    var14['paddingBottom'] = var17;
    var4['headerWrapper'] = var14;
    var14 = {};
    var20 = var15.absoluteFillObject;
    var21 = var14;
    var17 = copyDataProperties(var21, var20);
    var18 = 0.7;
    var17 = 'opacity';
    var14[var17] = var18;
    var4['blurStyles'] = var14;
    var17 = 'relative';
    var14 = {'position': 'relative', 'justifyContent': 'flex-start', 'flexDirection': 'row', 'alignItems': 'center', 'flexShrink': 1, 'gap': 12};
    var4['leftWrapper'] = var14;
    var14 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 12, 'paddingLeft': 12};
    var4['rightWrapper'] = var14;
    var14 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['headerOuter'] = var14;
    var14 = {'flexDirection': 'row', 'alignItems': 'center', 'flexShrink': 1, 'flexGrow': 1};
    var4['headerInner'] = var14;
    var14 = {};
    var14['position'] = var17;
    var4['headerContentWrapper'] = var14;
    var14 = {};
    var17 = var15.hairlineWidth;
    var14['height'] = var17;
    var17 = 0.2;
    var14['opacity'] = var17;
    var4['stroke'] = var14;
    var14 = {};
    var17 = var15.hairlineWidth;
    var14['height'] = var17;
    var17 = 0.8;
    var14['opacity'] = var17;
    var4['strokeAlt'] = var14;
    var14 = {'position': 'absolute', 'left': 0, 'right': 0, 'bottom': 0};
    var15 = var15.hairlineWidth;
    var14['height'] = var15;
    var4['strokeContainer'] = var14;
    var14 = {'width': 12, 'height': 12, 'borderRadius': null, 'padding': 2};
    var15 = 18;
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.round;
    var14['borderRadius'] = var17;
    var4['focusedSpeakingDotWrapper'] = var14;
    var14 = {'width': 8, 'height': 8};
    var15 = var6[var15];
    var15 = var16.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var14['borderRadius'] = var15;
    var4['focusedSpeakingDot'] = var14;
    var14 = {};
    var15 = -8;
    var14['marginLeft'] = var15;
    var4['shieldIconMargin'] = var14;
    var4 = var10.bind(var13)(var4);
    var _closure1_slot25 = var4;
    var4 = {};
    var4['DOWN'] = var12;
    var10 = 'DOWN';
    var4[var12] = var10;
    var4['LEFT'] = var11;
    var10 = 'LEFT';
    var4[var11] = var10;
    var _closure1_slot26 = var4;
    var4 = {};
    var21 = var4;
    var20 = var8;
    var8 = copyDataProperties(var21, var20);
    var8 = 'overshootClamping';
    var4[var8] = var9;
    var _closure1_slot27 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx1(){const{isHeaderHidden,focused,scrollPosition}=this.__closure;return!isHeaderHidden.get()&&(focused.get()!=null||scrollPosition.get()>0);}';
    var4['code'] = var8;
    var _closure1_slot28 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx2(){const{withSpring,showHeaderBlur}=this.__closure;return{blurAmount:withSpring(showHeaderBlur.get()?0.3:0)};}';
    var4['code'] = var8;
    var _closure1_slot29 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx3(){const{withSpring,showHeaderBlur,HEADER_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(showHeaderBlur.get()?1:0,HEADER_CHANGE_PHYSICS)};}';
    var4['code'] = var8;
    var _closure1_slot30 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var2 = arg1;
        var14 = var2.isHeaderHidden;
        var _closure2_slot0 = var14;
        var8 = var2.scrollPosition;
        var _closure2_slot1 = var8;
        var10 = var2.focused;
        var _closure2_slot2 = var10;
        var2 = _closure1_slot25;
        var4 = undefined;
        var12 = var2.bind(var4)();
        var9 = _closure1_slot0;
        var13 = _closure1_slot2;
        var2 = 19;
        var3 = var13[var2];
        var6 = var9.bind(var4)(var3);
        var5 = var6.useDerivedValue;
        var3 = function l() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                var1 = !var1;
                if(!var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var4 = _closure2_slot2;
                var2 = var4.get;
                var4 = var2.bind(var4)();
                var2 = null;
                var2 = var2 != var4;
                if(var2) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var4 = _closure2_slot1;
                var3 = var4.get;
                var4 = var3.bind(var4)();
                var3 = 0;
                var2 = var4 > var3;
case 15:
                var1 = var2;
case 13:
                return var1;
            }
        };
        var7 = {};
        var7['isHeaderHidden'] = var14;
        var7['focused'] = var10;
        var7['scrollPosition'] = var8;
        var3['__closure'] = var7;
        var7 = 8127245112238.0;
        var3['__workletHash'] = var7;
        var7 = _closure1_slot28;
        var3['__initData'] = var7;
        var6 = var5.bind(var6)(var3);
        var _closure2_slot3 = var6;
        var3 = var13[var2];
        var8 = var9.bind(var4)(var3);
        var5 = var8.useAnimatedProps;
        var3 = function c() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = {};
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 20;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.withSpring;
                var5 = _closure2_slot3;
                var2 = var5.get;
                var5 = var2.bind(var5)();
                var2 = 0;
                if(!var5) { _fun0003_ip = 15; continue _fun0003 }
case 17:
                var2 = 0.3;
case 15:
                var2 = var3.bind(var4)(var2);
                var1['blurAmount'] = var2;
                return var1;
            }
        };
        var10 = {};
        var7 = 20;
        var14 = var13[var7];
        var14 = var9.bind(var4)(var14);
        var14 = var14.withSpring;
        var10['withSpring'] = var14;
        var10['showHeaderBlur'] = var6;
        var3['__closure'] = var10;
        var10 = 10074943135400.0;
        var3['__workletHash'] = var10;
        var10 = _closure1_slot29;
        var3['__initData'] = var10;
        var8 = var5.bind(var8)(var3);
        var2 = var13[var2];
        var3 = var9.bind(var4)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function u() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 20;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.withSpring;
                var6 = _closure2_slot3;
                var3 = var6.get;
                var6 = var3.bind(var6)();
                var3 = 0;
                if(!var6) { _fun0004_ip = 18; continue _fun0004 }
case 17:
                var3 = 1;
case 18:
                var2 = _closure1_slot27;
                var2 = var4.bind(var5)(var3, var2);
                var1['opacity'] = var2;
                return var1;
            }
        };
        var5 = {};
        var7 = var13[var7];
        var7 = var9.bind(var4)(var7);
        var7 = var7.withSpring;
        var5['withSpring'] = var7;
        var5['showHeaderBlur'] = var6;
        var6 = _closure1_slot27;
        var5['HEADER_CHANGE_PHYSICS'] = var6;
        var1['__closure'] = var5;
        var5 = 2825977044105.0;
        var1['__workletHash'] = var5;
        var5 = _closure1_slot30;
        var1['__initData'] = var5;
        var6 = var2.bind(var3)(var1);
        var3 = _closure1_slot23;
        var10 = _closure1_slot1;
        var1 = 21;
        var1 = var13[var1];
        var2 = var10.bind(var4)(var1);
        var1 = {};
        var5 = _closure1_slot5;
        var7 = var5.absoluteFill;
        var5 = new Array(2);
        var5[0] = var7;
        var5[1] = var6;
        var1['style'] = var5;
        var5 = 'none';
        var1['pointerEvents'] = var5;
        var7 = _closure1_slot22;
        var5 = 22;
        var5 = var13[var5];
        var6 = var10.bind(var4)(var5);
        var5 = {'style': null, 'blurStyle': 'ultra-thin', 'blurTheme': 'dark'};
        var9 = var12.blurStyles;
        var5['style'] = var9;
        var5['animatedProps'] = var8;
        var6 = var7.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var9 = 23;
        var6 = var13[var9];
        var7 = var10.bind(var4)(var6);
        var6 = {};
        var8 = var12.strokeContainer;
        var6['style'] = var8;
        var15 = _closure1_slot22;
        var8 = var13[var9];
        var14 = var10.bind(var4)(var8);
        var8 = {};
        var16 = var12.stroke;
        var8['style'] = var16;
        var14 = var15.bind(var4)(var14, var8);
        var8 = new Array(2);
        var8[0] = var14;
        var11 = _closure1_slot22;
        var9 = var13[var9];
        var10 = var10.bind(var4)(var9);
        var9 = {};
        var12 = var12.strokeAlt;
        var9['style'] = var12;
        var9 = var11.bind(var4)(var10, var9);
        var8[1] = var9;
        var6['children'] = var8;
        var6 = var3.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot31 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx4(){const{focused,controlsSpecs,VoicePanelControlsModes,speaking}=this.__closure;return focused.get()!=null&&controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN&&speaking.get();}';
    var4['code'] = var8;
    var _closure1_slot32 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx5(){const{showSpeakingIndicator}=this.__closure;return{opacity:showSpeakingIndicator.get()?1:0};}';
    var4['code'] = var8;
    var _closure1_slot33 = var4;
    var8 = var7.memo;
    var4 = function() {
        var3 = _closure1_slot9;
        var2 = var3.getId;
        var5 = var2.bind(var3)();
        var _closure2_slot0 = var5;
        var11 = _closure1_slot4;
        var3 = var11.useContext;
        var6 = _closure1_slot1;
        var9 = _closure1_slot2;
        var2 = 24;
        var2 = var9[var2];
        var4 = undefined;
        var2 = var6.bind(var4)(var2);
        var2 = var3.bind(var11)(var2);
        var15 = var2.focused;
        var _closure2_slot1 = var15;
        var14 = var2.controlsSpecs;
        var _closure2_slot2 = var14;
        var3 = _closure1_slot0;
        var2 = 19;
        var8 = var9[var2];
        var12 = var3.bind(var4)(var8);
        var10 = var12.useSharedValue;
        var13 = _closure1_slot13;
        var8 = var13.isSpeaking;
        var8 = var8.bind(var13)(var5);
        var13 = var10.bind(var12)(var8);
        var _closure2_slot3 = var13;
        var10 = var11.useLayoutEffect;
        var8 = new Array(2);
        var8[0] = var5;
        var8[1] = var13;
        var5 = function() {
            var4 = function handleChange() {
                var3 = _closure2_slot3;
                var2 = var3.set;
                var5 = _closure1_slot13;
                var4 = var5.isSpeaking;
                var1 = _closure2_slot0;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var _closure3_slot0 = var4;
            var2 = undefined;
            var2 = var4.bind(var2)();
            var3 = _closure1_slot13;
            var2 = var3.addReactChangeListener;
            var2 = var2.bind(var3)(var4);
            var1 = function() {
                var3 = _closure1_slot13;
                var2 = var3.removeReactChangeListener;
                var1 = _closure3_slot0;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            return var1;
        };
        var5 = var10.bind(var11)(var5, var8);
        var5 = _closure1_slot25;
        var8 = var5.bind(var4)();
        var5 = var9[var2];
        var11 = var3.bind(var4)(var5);
        var10 = var11.useDerivedValue;
        var5 = function u() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = var3.get;
                var3 = var1.bind(var3)();
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var4 = _closure2_slot2;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var4 = var3.mode;
                var3 = _closure1_slot20;
                var3 = var3.HIDDEN;
                var1 = var4 !== var3;
case 19:
                if(!var1) { _fun0005_ip = 21; continue _fun0005 }
case 15:
                var3 = _closure2_slot3;
                var2 = var3.get;
                var1 = var2.bind(var3)();
case 21:
                return var1;
            }
        };
        var12 = {};
        var12['focused'] = var15;
        var12['controlsSpecs'] = var14;
        var14 = _closure1_slot20;
        var12['VoicePanelControlsModes'] = var14;
        var12['speaking'] = var13;
        var5['__closure'] = var12;
        var12 = 5466722752449.0;
        var5['__workletHash'] = var12;
        var12 = _closure1_slot32;
        var5['__initData'] = var12;
        var10 = var10.bind(var11)(var5);
        var _closure2_slot4 = var10;
        var2 = var9[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function _() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = {};
                var3 = _closure2_slot4;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = 0;
                if(!var3) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                var2 = 1;
case 22:
                var1['opacity'] = var2;
                return var1;
            }
        };
        var5 = {};
        var5['showSpeakingIndicator'] = var10;
        var1['__closure'] = var5;
        var5 = 16177124708898.0;
        var1['__workletHash'] = var5;
        var5 = _closure1_slot33;
        var1['__initData'] = var5;
        var11 = var2.bind(var3)(var1);
        var3 = _closure1_slot22;
        var5 = 21;
        var1 = var9[var5];
        var2 = var6.bind(var4)(var1);
        var1 = {};
        var12 = var8.focusedSpeakingDotWrapper;
        var10 = new Array(2);
        var10[0] = var12;
        var10[1] = var11;
        var1['style'] = var10;
        var10 = 'none';
        var1['pointerEvents'] = var10;
        var7 = _closure1_slot22;
        var5 = var9[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var8 = var8.focusedSpeakingDot;
        var5['style'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot34 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx6(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}';
    var4['code'] = var8;
    var _closure1_slot35 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx7(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}';
    var4['code'] = var8;
    var _closure1_slot36 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx8(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;}';
    var4['code'] = var8;
    var _closure1_slot37 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx9(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const pipMode=mode.get()===VoicePanelModes.PIP;const height=!connected.get()?specs.height-specs.paddingTop+EDGE_GUTTER:specs.height;const paddingTop=!connected.get()?EDGE_GUTTER:specs.paddingTop;return{...specs,paddingTop:paddingTop,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,height:height,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}';
    var4['code'] = var8;
    var _closure1_slot38 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx10(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}';
    var4['code'] = var8;
    var _closure1_slot39 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx11(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height:0,MODE_CHANGE_PHYSICS)}]};}';
    var4['code'] = var8;
    var _closure1_slot40 = var4;
    var4 = {};
    var8 = "function VoicePanelHeaderTsx12(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?'none':'box-none',importantForAccessibility:isHeaderHidden.get()?'no-hide-descendants':'auto',accessibilityElementsHidden:isHeaderHidden.get()};}";
    var4['code'] = var8;
    var _closure1_slot41 = var4;
    var4 = var7.memo;
    var2 = function VoicePanelHeader(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var24 = var1.wrapperOffset;
            var _closure2_slot0 = var24;
            var27 = var1.gestureState;
            var _closure2_slot1 = var27;
            var17 = var1.layout;
            var4 = undefined;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var1 = _closure1_slot25;
            var25 = var1.bind(var4)();
            var15 = _closure1_slot4;
            var2 = var15.useContext;
            var16 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 24;
            var1 = var5[var1];
            var1 = var16.bind(var4)(var1);
            var1 = var2.bind(var15)(var1);
            var14 = var1.guildId;
            var22 = var1.channelId;
            var _closure2_slot2 = var22;
            var28 = var1.channelType;
            var8 = var1.focused;
            var _closure2_slot3 = var8;
            var36 = var1.controlsSpecs;
            var _closure2_slot4 = var36;
            var38 = var1.mode;
            var _closure2_slot5 = var38;
            var33 = var1.safeArea;
            var _closure2_slot6 = var33;
            var29 = var1.connected;
            var _closure2_slot7 = var29;
            var9 = var1.scrollPosition;
            var2 = _closure1_slot0;
            var1 = 33;
            var1 = var5[var1];
            var6 = var2.bind(var4)(var1);
            var1 = var6.useIsScreenReaderEnabled;
            var26 = var1.bind(var6)();
            var _closure2_slot8 = var26;
            var1 = 34;
            var1 = var5[var1];
            var1 = var16.bind(var4)(var1);
            var31 = var1.bind(var4)(var22);
            var23 = 35;
            var1 = var5[var23];
            var7 = var16.bind(var4)(var1);
            var6 = var7.useConfig;
            var1 = {};
            var10 = 'VoicePanelHeader';
            var1['location'] = var10;
            var1 = var6.bind(var7)(var1);
            var20 = var1.treatment;
            var7 = 26;
            var1 = var5[var7];
            var12 = var2.bind(var4)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot14;
            var10 = new Array(4);
            var10[0] = var1;
            var1 = _closure1_slot12;
            var10[1] = var1;
            var1 = _closure1_slot10;
            var10[2] = var1;
            var1 = _closure1_slot7;
            var10[3] = var1;
            var6 = new Array(1);
            var6[0] = var22;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure1_slot10;
                    var3 = var4.getChannel;
                    var1 = _closure2_slot2;
                    var9 = var3.bind(var4)(var1);
                    var3 = null;
                    var4 = var3 != var9;
                    var6 = undefined;
                    var1 = undefined;
                    if(!var4) { _fun0008_ip = 24; continue _fun0008 }
case 25:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 36;
                    var4 = var7[var4];
                    var8 = var5.bind(var6)(var4);
                    var7 = var8.computeChannelName;
                    var5 = _closure1_slot14;
                    var4 = _closure1_slot12;
                    var1 = var7.bind(var8)(var9, var5, var4);
case 24:
                    if(!(var3 == var1)) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 29;
                    var3 = var7[var2];
                    var3 = var5.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.t;
                    var2 = var2.zLZPmk;
                    var1 = var3.bind(var4)(var2);
case 26:
                    return var1;
                }
            };
            var35 = var11.bind(var12)(var10, var1, var6);
            var1 = var15.useState;
            var1 = var1.bind(var15)(var4);
            var13 = _closure1_slot3;
            var11 = 2;
            var1 = var13.bind(var4)(var1, var11);
            var10 = 0;
            var12 = var1[var10];
            var6 = 1;
            var1 = var1[var6];
            var _closure2_slot9 = var1;
            var1 = var15.useState;
            var18 = null;
            var1 = var1.bind(var15)(var18);
            var1 = var13.bind(var4)(var1, var11);
            var11 = var1[var10];
            var1 = var1[var6];
            var _closure2_slot10 = var1;
            var13 = var15.useCallback;
            var6 = new Array(1);
            var6[0] = var22;
            var1 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = arg1;
                    var5 = _closure2_slot10;
                    var8 = _closure2_slot2;
                    var1 = null;
                    var6 = var1 == var3;
                    var4 = null;
                    if(var6) { _fun0009_ip = 2; continue _fun0009 }
case 20:
                    var7 = _closure1_slot6;
                    var6 = var7.getParticipant;
                    var6 = var6.bind(var7)(var8, var3);
                    var7 = var1 == var6;
                    var1 = null;
                    if(var7) { _fun0009_ip = 28; continue _fun0009 }
case 17:
                    var1 = var6.type;
case 28:
                    var4 = var1;
case 2:
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var2 = _closure2_slot9;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var32 = var13.bind(var15)(var1, var6);
            var _closure2_slot11 = var32;
            var1 = 19;
            var6 = var5[var1];
            var21 = var2.bind(var4)(var6);
            var15 = var21.useAnimatedReaction;
            var13 = function I() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0010_ip = 29; continue _fun0010 }
case 30:
                    var1 = var2.id;
case 29:
                    return var1;
                }
            };
            var6 = {};
            var6['focused'] = var8;
            var13['__closure'] = var6;
            var6 = 7943480174143.0;
            var13['__workletHash'] = var6;
            var6 = _closure1_slot35;
            var13['__initData'] = var6;
            var6 = function f(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0011_ip = 31; continue _fun0011 }
case 32:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot11;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = {};
            var34 = var5[var1];
            var34 = var2.bind(var4)(var34);
            var34 = var34.runOnJS;
            var30['runOnJS'] = var34;
            var30['handleFocusChange'] = var32;
            var6['__closure'] = var30;
            var30 = 13084116412140.0;
            var6['__workletHash'] = var30;
            var30 = _closure1_slot36;
            var6['__initData'] = var30;
            var6 = var15.bind(var21)(var13, var6);
            var6 = 37;
            var6 = var5[var6];
            var15 = var2.bind(var4)(var6);
            var13 = var15.useToken;
            var41 = 18;
            var6 = var5[var41];
            var6 = var16.bind(var4)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.VOICE_PANEL_GUTTER;
            var32 = var13.bind(var15)(var6);
            var _closure2_slot12 = var32;
            var6 = var5[var1];
            var15 = var2.bind(var4)(var6);
            var13 = var15.useDerivedValue;
            var6 = function ge() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 38;
                    var1 = var4[var1];
                    var6 = undefined;
                    var5 = var3.bind(var6)(var1);
                    var3 = _closure2_slot6;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = _closure2_slot12;
                    var3 = var5.bind(var6)(var3, var1);
                    var5 = _closure2_slot5;
                    var1 = var5.get;
                    var5 = var1.bind(var5)();
                    var1 = _closure1_slot17;
                    var1 = var1.PIP;
                    if(!(var5 !== var1)) { _fun0012_ip = 33; continue _fun0012 }
case 24:
                    var5 = _closure2_slot1;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var1.active;
                    if(!var1) { _fun0012_ip = 34; continue _fun0012 }
case 35:
                    var5 = _closure2_slot1;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var1.requiresPop;
                    if(var1) { _fun0012_ip = 34; continue _fun0012 }
case 36:
                    var5 = _closure2_slot7;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    if(var1) { _fun0012_ip = 33; continue _fun0012 }
case 34:
                    var5 = _closure2_slot5;
                    var1 = var5.get;
                    var7 = var1.bind(var5)();
                    var1 = _closure1_slot17;
                    var6 = var1.DISMISSED;
                    var1 = 0;
                    if(!(var7 === var6)) { _fun0012_ip = 37; continue _fun0012 }
case 38:
                    var6 = _closure2_slot7;
                    var4 = var6.get;
                    var4 = var4.bind(var6)();
                    var1 = 0;
                    if(!var4) { _fun0012_ip = 37; continue _fun0012 }
case 33:
                    var3 = var3.height;
                    var2 = _closure1_slot19;
                    var2 = var3 + var2;
                    var1 = -var2;
case 37:
                    return var1;
                }
            };
            var21 = {};
            var34 = 38;
            var30 = var5[var34];
            var30 = var16.bind(var4)(var30);
            var21['calculateVoicePanelHeaderSpecs'] = var30;
            var21['safeArea'] = var33;
            var21['edgeGutter'] = var32;
            var21['mode'] = var38;
            var30 = _closure1_slot17;
            var21['VoicePanelModes'] = var30;
            var21['gestureState'] = var27;
            var21['connected'] = var29;
            var27 = _closure1_slot19;
            var21['EDGE_GUTTER'] = var27;
            var6['__closure'] = var21;
            var21 = 13290333964417.0;
            var6['__workletHash'] = var21;
            var21 = _closure1_slot37;
            var6['__initData'] = var21;
            var37 = var13.bind(var15)(var6);
            var _closure2_slot13 = var37;
            var6 = var5[var1];
            var15 = var2.bind(var4)(var6);
            var13 = var15.useAnimatedStyle;
            var6 = function he() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 38;
                    var1 = var3[var1];
                    var6 = undefined;
                    var4 = var2.bind(var6)(var1);
                    var2 = _closure2_slot6;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = _closure2_slot12;
                    var5 = var4.bind(var6)(var2, var1);
                    var2 = _closure2_slot5;
                    var1 = var2.get;
                    var4 = var1.bind(var2)();
                    var1 = _closure1_slot17;
                    var2 = var1.PIP;
                    var8 = _closure2_slot7;
                    var1 = var8.get;
                    var8 = var1.bind(var8)();
                    var1 = var5.height;
                    if(var8) { _fun0013_ip = 39; continue _fun0013 }
case 40:
                    var8 = var5.paddingTop;
                    var9 = var1 - var8;
                    var8 = _closure1_slot19;
                    var8 = var9 + var8;
                    _fun0013_ip = 41; continue _fun0013;
case 39:
                    var8 = var1;
case 41:
                    var9 = _closure2_slot7;
                    var1 = var9.get;
                    var1 = var1.bind(var9)();
                    if(var1) { _fun0013_ip = 42; continue _fun0013 }
case 43:
                    var9 = _closure1_slot19;
                    _fun0013_ip = 5; continue _fun0013;
case 42:
                    var9 = var5.paddingTop;
case 5:
                    var1 = {};
                    var12 = var1;
                    var11 = var5;
                    var5 = copyDataProperties(var12, var11);
                    var5 = 'paddingTop';
                    var1[var5] = var9;
                    var9 = _closure2_slot7;
                    var5 = var9.get;
                    var5 = var5.bind(var9)();
                    var9 = 24;
                    var10 = var9;
                    if(!var5) { _fun0013_ip = 44; continue _fun0013 }
case 45:
                    var10 = 0;
case 44:
                    var5 = 'borderTopLeftRadius';
                    var1[var5] = var10;
                    var10 = _closure2_slot7;
                    var5 = var10.get;
                    var5 = var5.bind(var10)();
                    if(!var5) { _fun0013_ip = 46; continue _fun0013 }
case 47:
                    var9 = 0;
case 46:
                    var5 = 'borderTopRightRadius';
                    var1[var5] = var9;
                    var5 = 'height';
                    var1[var5] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 39;
                    var5 = var9[var5];
                    var8 = var8.bind(var6)(var5);
                    var5 = var8.withTiming;
                    if(!(var4 !== var2)) { _fun0013_ip = 48; continue _fun0013 }
case 49:
                    var4 = _closure2_slot5;
                    var2 = var4.get;
                    var9 = var2.bind(var4)();
                    var2 = _closure1_slot17;
                    var2 = var2.DISMISSED;
                    var4 = 1;
                    if(!(var9 === var2)) { _fun0013_ip = 50; continue _fun0013 }
case 48:
                    var4 = 0;
case 50:
                    var2 = _closure1_slot24;
                    var4 = var5.bind(var8)(var4, var2);
                    var2 = 'opacity';
                    var1[var2] = var4;
                    var2 = {};
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 20;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.withSpring;
                    var8 = _closure2_slot13;
                    var4 = var8.get;
                    var4 = var4.bind(var8)();
                    var9 = _closure2_slot7;
                    var8 = var9.get;
                    var8 = var8.bind(var9)();
                    if(var8) { _fun0013_ip = 51; continue _fun0013 }
case 52:
                    var8 = _closure2_slot0;
                    var3 = var8.get;
                    var3 = var3.bind(var8)();
                    var3 = var3.gestureActive;
                    if(!var3) { _fun0013_ip = 51; continue _fun0013 }
case 53:
                    var3 = _closure1_slot18;
                    _fun0013_ip = 54; continue _fun0013;
case 51:
                    var3 = _closure1_slot16;
case 54:
                    var3 = var5.bind(var6)(var4, var3);
                    var2['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = 'transform';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var21 = {};
            var39 = var5[var34];
            var39 = var16.bind(var4)(var39);
            var21['calculateVoicePanelHeaderSpecs'] = var39;
            var21['safeArea'] = var33;
            var21['edgeGutter'] = var32;
            var21['mode'] = var38;
            var21['VoicePanelModes'] = var30;
            var21['connected'] = var29;
            var21['EDGE_GUTTER'] = var27;
            var30 = 39;
            var27 = var5[var30];
            var27 = var2.bind(var4)(var27);
            var27 = var27.withTiming;
            var21['withTiming'] = var27;
            var29 = _closure1_slot24;
            var21['OPACITY_TIMING'] = var29;
            var27 = 20;
            var38 = var5[var27];
            var38 = var2.bind(var4)(var38);
            var38 = var38.withSpring;
            var21['withSpring'] = var38;
            var21['yOffset'] = var37;
            var21['wrapperOffset'] = var24;
            var24 = _closure1_slot18;
            var21['DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE'] = var24;
            var24 = _closure1_slot16;
            var21['UI_SHOW_HIDE_PHYSICS'] = var24;
            var6['__closure'] = var21;
            var21 = 11065699618122.0;
            var6['__workletHash'] = var21;
            var21 = _closure1_slot38;
            var6['__initData'] = var21;
            var6 = var13.bind(var15)(var6);
            var13 = var5[var1];
            var21 = var2.bind(var4)(var13);
            var15 = var21.useDerivedValue;
            var13 = function _e() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var3 = var1.mode;
                    var1 = _closure1_slot20;
                    var1 = var1.HIDDEN;
                    var1 = var3 === var1;
                    if(!var1) { _fun0014_ip = 55; continue _fun0014 }
case 56:
                    var2 = _closure2_slot8;
                    var1 = !var2;
case 55:
                    return var1;
                }
            };
            var24 = {};
            var24['controlsSpecs'] = var36;
            var36 = _closure1_slot20;
            var24['VoicePanelControlsModes'] = var36;
            var24['isScreenReaderEnabled'] = var26;
            var13['__closure'] = var24;
            var24 = 16725581527938.0;
            var13['__workletHash'] = var24;
            var24 = _closure1_slot39;
            var13['__initData'] = var24;
            var15 = var15.bind(var21)(var13);
            var _closure2_slot14 = var15;
            var13 = var5[var1];
            var24 = var2.bind(var4)(var13);
            var21 = var24.useAnimatedStyle;
            var13 = function pe() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 38;
                    var1 = var6[var1];
                    var8 = undefined;
                    var5 = var3.bind(var8)(var1);
                    var3 = _closure2_slot6;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = _closure2_slot12;
                    var1 = var5.bind(var8)(var3, var1);
                    var7 = var1.height;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var3 = 39;
                    var3 = var6[var3];
                    var9 = var5.bind(var8)(var3);
                    var6 = var9.withTiming;
                    var5 = _closure2_slot14;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var5 = 1;
                    if(!var3) { _fun0015_ip = 35; continue _fun0015 }
case 57:
                    var5 = 0;
case 35:
                    var3 = _closure1_slot24;
                    var3 = var6.bind(var9)(var5, var3);
                    var1['opacity'] = var3;
                    var3 = {};
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 20;
                    var5 = var9[var5];
                    var6 = var6.bind(var8)(var5);
                    var5 = var6.withSpring;
                    var8 = _closure2_slot14;
                    var4 = var8.get;
                    var8 = var4.bind(var8)();
                    var4 = 0;
                    if(!var8) { _fun0015_ip = 58; continue _fun0015 }
case 59:
                    var4 = -var7;
case 58:
                    var2 = _closure1_slot15;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var26 = {};
            var34 = var5[var34];
            var34 = var16.bind(var4)(var34);
            var26['calculateVoicePanelHeaderSpecs'] = var34;
            var26['safeArea'] = var33;
            var26['edgeGutter'] = var32;
            var30 = var5[var30];
            var30 = var2.bind(var4)(var30);
            var30 = var30.withTiming;
            var26['withTiming'] = var30;
            var26['isHeaderHidden'] = var15;
            var26['OPACITY_TIMING'] = var29;
            var27 = var5[var27];
            var27 = var2.bind(var4)(var27);
            var27 = var27.withSpring;
            var26['withSpring'] = var27;
            var27 = _closure1_slot15;
            var26['MODE_CHANGE_PHYSICS'] = var27;
            var13['__closure'] = var26;
            var26 = 13148362186846.0;
            var13['__workletHash'] = var26;
            var26 = _closure1_slot40;
            var13['__initData'] = var26;
            var21 = var21.bind(var24)(var13);
            var1 = var5[var1];
            var24 = var2.bind(var4)(var1);
            var13 = var24.useAnimatedProps;
            var1 = function Se() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot14;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = 'box-none';
                    if(!var4) { _fun0016_ip = 60; continue _fun0016 }
case 30:
                    var3 = 'none';
case 60:
                    var1['pointerEvents'] = var3;
                    var4 = _closure2_slot14;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = 'auto';
                    if(!var4) { _fun0016_ip = 61; continue _fun0016 }
case 18:
                    var3 = 'no-hide-descendants';
case 61:
                    var1['importantForAccessibility'] = var3;
                    var3 = _closure2_slot14;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1['accessibilityElementsHidden'] = var2;
                    return var1;
                }
            };
            var26 = {};
            var26['isHeaderHidden'] = var15;
            var1['__closure'] = var26;
            var26 = 4740985143159.0;
            var1['__workletHash'] = var26;
            var26 = _closure1_slot41;
            var1['__initData'] = var26;
            var13 = var13.bind(var24)(var1);
            var1 = 40;
            var1 = var5[var1];
            var24 = var2.bind(var4)(var1);
            var1 = var24.useCanInviteMembers;
            var24 = var1.bind(var24)(var22);
            var1 = 41;
            var1 = var5[var1];
            var26 = var2.bind(var4)(var1);
            var1 = var26.useInviteMembersCallback;
            var30 = var1.bind(var26)(var22);
            var1 = 42;
            var1 = var5[var1];
            var1 = var16.bind(var4)(var1);
            var38 = var1.bind(var4)();
            var1 = 43;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useNavigatorBackPressHandler;
            var1 = var1.bind(var2)(var38);
            if(!(var18 == var11)) { _fun0007_ip = 62; continue _fun0007 }
case 63:
            var1 = _closure1_slot26;
            var16 = var1.DOWN;
            _fun0007_ip = 64; continue _fun0007;
case 62:
            var1 = _closure1_slot26;
            var16 = var1.LEFT;
case 64:
            _closure2_slot15 = var16;
            var1 = _closure1_slot26;
            var1 = var1.LEFT;
            if(!(var16 !== var1)) { _fun0007_ip = 65; continue _fun0007 }
case 66:
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var1 = 29;
            var2 = var27[var1];
            var2 = var26.bind(var4)(var2);
            var5 = var2.intl;
            var2 = var5.string;
            var1 = var27[var1];
            var1 = var26.bind(var4)(var1);
            var1 = var1.t;
            if(var31) { _fun0007_ip = 67; continue _fun0007 }
case 68:
            var26 = var1.WAI6xu;
            var40 = var2.bind(var5)(var26);
            _fun0007_ip = 69; continue _fun0007;
case 67:
            var1 = var1.RLCTQG;
            var40 = var2.bind(var5)(var1);
case 69:
            _fun0007_ip = 70; continue _fun0007;
case 65:
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var1 = 29;
            var2 = var27[var1];
            var2 = var26.bind(var4)(var2);
            var5 = var2.intl;
            var2 = var5.string;
            var1 = var27[var1];
            var1 = var26.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.9M6OdC;
            var40 = var2.bind(var5)(var1);
case 70:
            var5 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 44;
            var2 = var1[var2];
            var5 = var5.bind(var4)(var2);
            var26 = _closure1_slot9;
            var2 = var26.getId;
            var2 = var2.bind(var26)();
            var5 = var5.bind(var4)(var2, var22, var14);
            _closure2_slot16 = var5;
            var2 = _closure1_slot0;
            var7 = var1[var7];
            var27 = var2.bind(var4)(var7);
            var26 = var27.useStateFromStores;
            var7 = _closure1_slot11;
            var14 = new Array(1);
            var14[0] = var7;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = _closure2_slot16;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0017_ip = 71; continue _fun0017 }
case 72:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var8 = 44;
                    var5 = var5[var8];
                    var6 = undefined;
                    var9 = var7.bind(var6)(var5);
                    var7 = var9.isStableUserParticipant;
                    var5 = _closure2_slot16;
                    var5 = var7.bind(var9)(var5);
                    if(!var5) { _fun0017_ip = 71; continue _fun0017 }
case 73:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var7 = var7.bind(var6)(var5);
                    var5 = var7.stableParticipantHasVideo;
                    var4 = _closure2_slot16;
                    var4 = var5.bind(var7)(var4);
                    if(!var4) { _fun0017_ip = 71; continue _fun0017 }
case 74:
                    var5 = _closure1_slot11;
                    var4 = var5.getVideoDevices;
                    var7 = var4.bind(var5)();
                    var4 = global;
                    var5 = var4.Object;
                    var4 = var5.keys;
                    var8 = var4.bind(var5)(var7);
                    var5 = var8.length;
                    var4 = 2;
                    if(!(!(var5 < var4))) { _fun0017_ip = 71; continue _fun0017 }
case 75:
                    var5 = _closure1_slot11;
                    var4 = var5.getVideoDeviceId;
                    var4 = var4.bind(var5)();
                    var _closure3_slot0 = var4;
                    var4 = var7[var4];
                    var9 = var1 == var4;
                    var5 = undefined;
                    if(var9) { _fun0017_ip = 76; continue _fun0017 }
case 77:
                    var5 = var4.facing;
case 76:
                    var4 = var8.find;
                    var3 = function(arg1) {
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var1 = var1 !== var2;
                        return var1;
                    };
                    var4 = var4.bind(var8)(var3);
                    var8 = var1 != var4;
                    var3 = undefined;
                    if(!var8) { _fun0017_ip = 78; continue _fun0017 }
case 79:
                    var7 = var7[var4];
                    var8 = var1 == var7;
                    var4 = undefined;
                    if(var8) { _fun0017_ip = 80; continue _fun0017 }
case 81:
                    var4 = var7.facing;
case 80:
                    var3 = var4;
case 78:
                    if(!(var1 != var5)) { _fun0017_ip = 82; continue _fun0017 }
case 83:
                    if(!(var1 != var3)) { _fun0017_ip = 82; continue _fun0017 }
case 84:
                    var1 = 'back';
                    if(!(var1 === var5)) { _fun0017_ip = 85; continue _fun0017 }
case 86:
                    var4 = 'front';
                    if(!(var4 !== var3)) { _fun0017_ip = 87; continue _fun0017 }
case 85:
                    var4 = 'front';
                    if(!(var4 === var5)) { _fun0017_ip = 88; continue _fun0017 }
case 89:
                    if(!(var1 !== var3)) { _fun0017_ip = 90; continue _fun0017 }
case 88:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 29;
                    var3 = var7[var1];
                    var3 = var5.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var1 = var7[var1];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.t;
                    var1 = var1.t9eQ/g;
                    var1 = var3.bind(var4)(var1);
                    _fun0017_ip = 91; continue _fun0017;
case 90:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 29;
                    var4 = var8[var3];
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.7YZ/Si;
                    var1 = var4.bind(var5)(var3);
case 91:
                    _fun0017_ip = 92; continue _fun0017;
case 87:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 29;
                    var4 = var8[var3];
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3./R1SBx;
                    var1 = var4.bind(var5)(var3);
case 92:
                    _fun0017_ip = 93; continue _fun0017;
case 82:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 29;
                    var3 = var7[var2];
                    var3 = var5.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.t;
                    var2 = var2.t9eQ/g;
                    var1 = var3.bind(var4)(var2);
case 93:
                    return var1;
case 71:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = var26.bind(var27)(var14, var5, var7);
            var14 = _closure1_slot4;
            var27 = var14.useCallback;
            var7 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var6 = _closure1_slot11;
                    var3 = var6.getVideoDeviceId;
                    var3 = var3.bind(var6)();
                    var _closure3_slot0 = var3;
                    var3 = global;
                    var5 = var3.Object;
                    var4 = var5.keys;
                    var3 = var6.getVideoDevices;
                    var3 = var3.bind(var6)();
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.find;
                    var2 = function(arg1) {
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var1 = var1 !== var2;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0018_ip = 94; continue _fun0018 }
case 95:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 45;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.setVideoDevice;
                    var1 = var1.bind(var2)(var3);
case 94:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = new Array(0);
            var27 = var27.bind(var14)(var7, var5);
            var7 = var14.useMemo;
            var5 = new Array(1);
            var5[0] = var16;
            var3 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = {};
                    var3 = {};
                    var5 = _closure2_slot15;
                    var2 = _closure1_slot26;
                    var4 = var2.LEFT;
                    var2 = '0deg';
                    if(!(var5 === var4)) { _fun0019_ip = 96; continue _fun0019 }
case 97:
                    var2 = '90deg';
case 96:
                    var3['rotateZ'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var33 = var7.bind(var14)(var3, var5);
            var3 = 46;
            var3 = var1[var3];
            var7 = var2.bind(var4)(var3);
            var5 = var7.useIsSecureFramesUIEnabled;
            var3 = {};
            var3['channelId'] = var22;
            var37 = var5.bind(var7)(var3);
            var5 = 47;
            var1 = var1[var5];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useIsUserSecureFramesVerified;
            var1 = {};
            var7 = _closure1_slot21;
            var14 = var7.USER;
            var7 = null;
            if(!(var11 === var14)) { _fun0007_ip = 98; continue _fun0007 }
case 99:
            var14 = var18 != var12;
            var7 = null;
            if(!var14) { _fun0007_ip = 98; continue _fun0007 }
case 100:
            var7 = var12;
case 98:
            var1['userId'] = var7;
            var1['channelId'] = var22;
            var2 = var2.bind(var3)(var1);
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var5 = var3.bind(var4)(var1);
            var3 = var5.useIsStreamSecureFramesVerified;
            var1 = {};
            var7 = _closure1_slot21;
            var14 = var7.STREAM;
            var7 = null;
            if(!(var11 === var14)) { _fun0007_ip = 101; continue _fun0007 }
case 102:
            var14 = var18 != var12;
            var7 = null;
            if(!var14) { _fun0007_ip = 101; continue _fun0007 }
case 103:
            var7 = var12;
case 101:
            var1['streamKey'] = var7;
            var1['channelId'] = var22;
            var1 = var3.bind(var5)(var1);
            var3 = _closure1_slot21;
            var3 = var3.STREAM;
            if(!(var3 !== var11)) { _fun0007_ip = 104; continue _fun0007 }
case 105:
            var3 = _closure1_slot21;
            var3 = var3.USER;
            var36 = false;
            if(!(var3 === var11)) { _fun0007_ip = 106; continue _fun0007 }
case 107:
            var36 = var2;
            _fun0007_ip = 106; continue _fun0007;
case 104:
            var36 = var1;
case 106:
            var3 = _closure1_slot23;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var14 = 21;
            var1 = var1[var14];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = var25.headerWrapper;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var16 = 'box-none';
            var1['pointerEvents'] = var16;
            var1['layout'] = var17;
            var7 = _closure1_slot22;
            var6 = _closure1_slot31;
            var5 = {};
            var5['isHeaderHidden'] = var15;
            var5['scrollPosition'] = var9;
            var5['focused'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var6 = var31;
            if(!var6) { _fun0007_ip = 108; continue _fun0007 }
case 109:
            var9 = _closure1_slot22;
            var29 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 48;
            var7 = var12[var7];
            var8 = var29.bind(var4)(var7);
            var7 = {};
            var12 = var12[var41];
            var12 = var29.bind(var4)(var12);
            var12 = var12.colors;
            var12 = var12.BLACK;
            var7['baseColor'] = var12;
            var7['minHeight'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 108:
            var5[1] = var6;
            var8 = _closure1_slot23;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var14];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var9 = var25.headerContentWrapper;
            var6['style'] = var9;
            var6['pointerEvents'] = var16;
            var6['layout'] = var17;
            var9 = _closure1_slot21;
            var9 = var9.USER;
            var10 = null;
            if(!(var11 === var9)) { _fun0007_ip = 110; continue _fun0007 }
case 111:
            var12 = _closure1_slot22;
            var11 = _closure1_slot1;
            var29 = _closure1_slot2;
            var9 = 49;
            var9 = var29[var9];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var9['isHeaderHidden'] = var15;
            var10 = var12.bind(var4)(var11, var9);
case 110:
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot23;
            var34 = _closure1_slot1;
            var39 = _closure1_slot2;
            var10 = var39[var14];
            var11 = var34.bind(var4)(var10);
            var10 = {};
            var29 = var25.headerOuter;
            var15 = new Array(2);
            var15[0] = var29;
            var15[1] = var21;
            var10['style'] = var15;
            var10['animatedProps'] = var13;
            var13 = 23;
            var13 = var39[var13];
            var15 = var34.bind(var4)(var13);
            var13 = {};
            var21 = var25.leftWrapper;
            var13['style'] = var21;
            var13['pointerEvents'] = var16;
            var32 = _closure1_slot22;
            var21 = 28;
            var16 = var39[var21];
            var29 = var34.bind(var4)(var16);
            var16 = {};
            var42 = 50;
            var42 = var39[var42];
            var42 = var34.bind(var4)(var42);
            var16['icon'] = var42;
            var16['accessibilityLabel'] = var40;
            var16['onPress'] = var38;
            var16['style'] = var33;
            var29 = var32.bind(var4)(var29, var16);
            var16 = new Array(2);
            var16[0] = var29;
            var29 = var39[var14];
            var32 = var34.bind(var4)(var29);
            var29 = {};
            var33 = var25.headerInner;
            var29['style'] = var33;
            var38 = _closure1_slot22;
            var33 = 51;
            var33 = var39[var33];
            var34 = var34.bind(var4)(var33);
            var33 = {};
            var34 = var38.bind(var4)(var34, var33);
            var33 = new Array(2);
            var33[0] = var34;
            var34 = null;
            if(!var37) { _fun0007_ip = 112; continue _fun0007 }
case 113:
            var34 = null;
            if(!var36) { _fun0007_ip = 112; continue _fun0007 }
case 114:
            var38 = _closure1_slot22;
            var37 = _closure1_slot0;
            var39 = _closure1_slot2;
            var36 = 52;
            var36 = var39[var36];
            var36 = var37.bind(var4)(var36);
            var37 = var36.ShieldLockIcon;
            var36 = {};
            var40 = 'xs';
            var36['size'] = var40;
            var40 = _closure1_slot1;
            var39 = var39[var41];
            var39 = var40.bind(var4)(var39);
            var39 = var39.colors;
            var39 = var39.TEXT_SUBTLE;
            var36['color'] = var39;
            var39 = var25.shieldIconMargin;
            var36['style'] = var39;
            var34 = var38.bind(var4)(var37, var36);
case 112:
            var33[1] = var34;
            var29['children'] = var33;
            var29 = var12.bind(var4)(var32, var29);
            var16[1] = var29;
            var13['children'] = var16;
            var15 = var12.bind(var4)(var15, var13);
            var13 = new Array(2);
            var13[0] = var15;
            var16 = _closure1_slot23;
            var15 = _closure1_slot1;
            var32 = _closure1_slot2;
            var14 = var32[var14];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var25 = var25.rightWrapper;
            var14['style'] = var25;
            var14['layout'] = var17;
            var29 = _closure1_slot22;
            var25 = _closure1_slot34;
            var17 = {};
            var25 = var29.bind(var4)(var25, var17);
            var17 = new Array(6);
            var17[0] = var25;
            var29 = _closure1_slot0;
            var25 = 53;
            var25 = var32[var25];
            var25 = var29.bind(var4)(var25);
            var25 = var25.ChannelTypes;
            var25 = var25.GUILD_STAGE_VOICE;
            var25 = var28 === var25;
            if(!var25) { _fun0007_ip = 115; continue _fun0007 }
case 116:
            var32 = _closure1_slot22;
            var29 = _closure1_slot42;
            var28 = {};
            var28['channelId'] = var22;
            var25 = var32.bind(var4)(var29, var28);
case 115:
            var17[1] = var25;
            var29 = _closure1_slot22;
            var28 = _closure1_slot1;
            var32 = _closure1_slot2;
            var25 = 54;
            var25 = var32[var25];
            var28 = var28.bind(var4)(var25);
            var25 = {};
            var25['isConnectedToVoiceChannel'] = var31;
            var25['channelId'] = var22;
            var25 = var29.bind(var4)(var28, var25);
            var17[2] = var25;
            if(!var24) { _fun0007_ip = 117; continue _fun0007 }
case 118:
            var29 = _closure1_slot22;
            var32 = _closure1_slot1;
            var36 = _closure1_slot2;
            var25 = var36[var21];
            var28 = var32.bind(var4)(var25);
            var25 = {};
            var31 = 55;
            var31 = var36[var31];
            var31 = var32.bind(var4)(var31);
            var25['icon'] = var31;
            var32 = _closure1_slot0;
            var31 = 29;
            var33 = var36[var31];
            var33 = var32.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.formatToPlainString;
            var31 = var36[var31];
            var31 = var32.bind(var4)(var31);
            var31 = var31.t;
            var32 = var31.dHHb/2;
            var31 = {};
            var31['channelName'] = var35;
            var31 = var33.bind(var34)(var32, var31);
            var25['accessibilityLabel'] = var31;
            var25['onPress'] = var30;
            var24 = var29.bind(var4)(var28, var25);
case 117:
            var17[3] = var24;
            var24 = var18 != var26;
            var18 = null;
            if(!var24) { _fun0007_ip = 119; continue _fun0007 }
case 120:
            var25 = _closure1_slot22;
            var29 = _closure1_slot1;
            var30 = _closure1_slot2;
            var21 = var30[var21];
            var24 = var29.bind(var4)(var21);
            var21 = {};
            var28 = 56;
            var28 = var30[var28];
            var28 = var29.bind(var4)(var28);
            var21['icon'] = var28;
            var21['onPress'] = var27;
            var21['accessibilityLabel'] = var26;
            var18 = var25.bind(var4)(var24, var21);
case 119:
            var17[4] = var18;
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var23];
            var18 = var21.bind(var4)(var18);
            var18 = var18.MobileGoLiveEntrypointTreatment;
            var18 = var18.SCREENSHARE_REPLACES_CHAT;
            var18 = var20 === var18;
            if(!var18) { _fun0007_ip = 121; continue _fun0007 }
case 122:
            var21 = _closure1_slot22;
            var20 = _closure1_slot1;
            var23 = _closure1_slot2;
            var19 = 57;
            var19 = var23[var19];
            var20 = var20.bind(var4)(var19);
            var19 = {};
            var19['channelId'] = var22;
            var18 = var21.bind(var4)(var20, var19);
case 121:
            var17[5] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
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
    var4 = 58;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/header/VoicePanelHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
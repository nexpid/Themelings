// app/modules/main_tabs_v2/native/shared_components/GroupAvatar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function AnimatedContainer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var18 = var2.scale;
            var _closure2_slot0 = var18;
            var1 = var2.translateX;
            var _closure2_slot1 = var1;
            var9 = var2.shadow;
            var15 = var2.translateY;
            var _closure2_slot2 = var15;
            var12 = var2.animateOnMount;
            var5 = var2.children;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var6 = _closure1_slot11;
            var8 = var6.bind(var4)();
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 9;
            var6 = var7[var6];
            var14 = var10.bind(var4)(var6);
            var13 = var14.useStateFromStores;
            var6 = _closure1_slot5;
            var11 = new Array(1);
            var11[0] = var6;
            var6 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var16 = var13.bind(var14)(var11, var6);
            var _closure2_slot3 = var16;
            var6 = 10;
            var7 = var7[var6];
            var11 = var10.bind(var4)(var7);
            var10 = var11.useSharedValue;
            var7 = 1;
            if(!var12) { _fun0001_ip = 158; continue _fun0001 }
 156:
            var7 = 0;
 158:
            var17 = var10.bind(var11)(var7);
            _closure2_slot4 = var17;
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var13 = var10.bind(var4)(var7);
            var10 = var13.useSharedValue;
            var7 = 0;
            if(var12) { _fun0001_ip = 197; continue _fun0001 }
 194:
            var7 = var15;
 197:
            var13 = var10.bind(var13)(var7);
            _closure2_slot5 = var13;
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var10 = var10.bind(var4)(var7);
            var7 = var10.useSharedValue;
            var11 = 0;
            if(var12) { _fun0001_ip = 236; continue _fun0001 }
 233:
            var11 = var1;
 236:
            var14 = var7.bind(var10)(var11);
            _closure2_slot6 = var14;
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var11 = var10.bind(var4)(var7);
            var10 = var11.useSharedValue;
            var7 = var18;
            if(!var12) { _fun0001_ip = 280; continue _fun0001 }
 273:
            var12 = 2;
            var7 = var18 / var12;
 280:
            var12 = var10.bind(var11)(var7);
            _closure2_slot7 = var12;
            var11 = _closure1_slot3;
            var10 = var11.useEffect;
            var7 = new Array(7);
            var7[0] = var17;
            var7[1] = var12;
            var7[2] = var13;
            var7[3] = var14;
            var7[4] = var18;
            var7[5] = var15;
            var7[6] = var1;
            var1 = function() {
                var4 = _closure2_slot4;
                var3 = var4.set;
                var2 = 1;
                var2 = var3.bind(var4)(var2);
                var4 = _closure2_slot7;
                var3 = var4.set;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                var4 = _closure2_slot5;
                var3 = var4.set;
                var2 = _closure2_slot2;
                var2 = var3.bind(var4)(var2);
                var3 = _closure2_slot6;
                var2 = var3.set;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = var10.bind(var11)(var1, var7);
            var15 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = var1[var6];
            var10 = var15.bind(var4)(var7);
            var7 = var10.useAnimatedStyle;
            var3 = function b() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 11;
                    var2 = var5[var2];
                    var8 = undefined;
                    var6 = var3.bind(var8)(var2);
                    var3 = var6.withTiming;
                    var7 = _closure2_slot4;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var2 = var3.bind(var6)(var2);
                    var1['opacity'] = var2;
                    var3 = {};
                    var2 = _closure2_slot3;
                    if(var2) { _fun0002_ip = 116; continue _fun0002 }
 66:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 12;
                    var2 = var7[var2];
                    var9 = var6.bind(var8)(var2);
                    var7 = var9.withSpring;
                    var6 = _closure2_slot6;
                    var2 = var6.get;
                    var6 = var2.bind(var6)();
                    var2 = _closure1_slot10;
                    var2 = var7.bind(var9)(var6, var2);
                    _fun0002_ip = 129; continue _fun0002;
 116:
                    var7 = _closure2_slot6;
                    var6 = var7.get;
                    var2 = var6.bind(var7)();
 129:
                    var3['translateX'] = var2;
                    var2 = new Array(3);
                    var2[0] = var3;
                    var3 = {};
                    var6 = _closure2_slot3;
                    if(var6) { _fun0002_ip = 201; continue _fun0002 }
 151:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 12;
                    var6 = var9[var6];
                    var10 = var7.bind(var8)(var6);
                    var9 = var10.withSpring;
                    var7 = _closure2_slot5;
                    var6 = var7.get;
                    var7 = var6.bind(var7)();
                    var6 = _closure1_slot10;
                    var6 = var9.bind(var10)(var7, var6);
                    _fun0002_ip = 214; continue _fun0002;
 201:
                    var9 = _closure2_slot5;
                    var7 = var9.get;
                    var6 = var7.bind(var9)();
 214:
                    var3['translateY'] = var6;
                    var2[1] = var3;
                    var3 = {};
                    var6 = _closure2_slot3;
                    if(var6) { _fun0002_ip = 282; continue _fun0002 }
 232:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 12;
                    var6 = var9[var6];
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.withSpring;
                    var9 = _closure2_slot7;
                    var6 = var9.get;
                    var6 = var6.bind(var9)();
                    var4 = _closure1_slot9;
                    var4 = var7.bind(var8)(var6, var4);
                    _fun0002_ip = 295; continue _fun0002;
 282:
                    var6 = _closure2_slot7;
                    var5 = var6.get;
                    var4 = var5.bind(var6)();
 295:
                    var3['scale'] = var4;
                    var2[2] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var11 = {};
            var18 = 11;
            var18 = var1[var18];
            var18 = var15.bind(var4)(var18);
            var18 = var18.withTiming;
            var11['withTiming'] = var18;
            var11['opacityAnimation'] = var17;
            var11['useReducedMotion'] = var16;
            var11['translateXAnimation'] = var14;
            var14 = 12;
            var14 = var1[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.withSpring;
            var11['withSpring'] = var14;
            var14 = _closure1_slot10;
            var11['SPRING_OPTIONS_POSITION'] = var14;
            var11['translateYAnimation'] = var13;
            var11['scaleAnimation'] = var12;
            var12 = _closure1_slot9;
            var11['SPRING_OPTIONS_SCALE'] = var12;
            var3['__closure'] = var11;
            var11 = 8800301056148.0;
            var3['__workletHash'] = var11;
            var11 = _closure1_slot13;
            var3['__initData'] = var11;
            var7 = var7.bind(var10)(var3);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = var1[var6];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var10 = var8.avatarContainer;
            var6 = new Array(3);
            var6[0] = var10;
            var6[1] = var7;
            var7 = undefined;
            if(!var9) { _fun0001_ip = 558; continue _fun0001 }
 552:
            var7 = var8.shadow;
 558:
            var6[2] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function GroupMemberCount(arg1) {
        var1 = arg1;
        var12 = var1.count;
        var1 = _closure1_slot11;
        var4 = undefined;
        var9 = var1.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var9.avatarWrapper;
        var1['style'] = var5;
        var7 = _closure1_slot6;
        var6 = _closure1_slot4;
        var5 = {};
        var9 = var9.overflowCount;
        var5['style'] = var9;
        var10 = _closure1_slot7;
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var8 = 13;
        var8 = var11[var8];
        var8 = var9.bind(var4)(var8);
        var9 = var8.Text;
        var8 = {};
        var11 = 'text-sm/semibold';
        var8['variant'] = var11;
        var11 = ['+'];
        var11[1] = var12;
        var8['children'] = var11;
        var8 = var10.bind(var4)(var9, var8);
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function GroupMemberAvatar(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var8 = var2.guildId;
            var _closure2_slot0 = var8;
            var7 = var2.user;
            var _closure2_slot1 = var7;
            var2 = _closure1_slot11;
            var5 = undefined;
            var10 = var2.bind(var5)();
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var8;
            var2[1] = var7;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0004_ip = 44; continue _fun0004 }
 18:
                    var6 = _closure2_slot1;
                    var5 = var6.getAvatarSource;
                    var4 = _closure2_slot0;
                    var3 = false;
                    var2 = 32;
                    var1 = var5.bind(var6)(var4, var3, var2);
 44:
                    return var1;
                }
            };
            var9 = var3.bind(var4)(var1, var2);
            var1 = null;
            var2 = var1 == var9;
            if(var2) { _fun0003_ip = 153; continue _fun0003 }
 77:
            var4 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var10.avatarWrapper;
            var2['style'] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 14;
            var6 = var11[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var10 = var10.avatar;
            var6['style'] = var10;
            var6['source'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 153:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var4 = 0;
    var8 = var6[var4];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.View;
    var _closure1_slot4 = var7;
    var12 = 2;
    var7 = var6[var12];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot6 = var8;
    var7 = var7.jsxs;
    var _closure1_slot7 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.createElement;
    var _closure1_slot8 = var4;
    var4 = {'damping': 30, 'stiffness': 400};
    var _closure1_slot9 = var4;
    var4 = {'damping': 30, 'stiffness': 400};
    var _closure1_slot10 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'relative';
    var9['position'] = var10;
    var4['groupContainer'] = var9;
    var9 = {'borderRadius': null, 'shadowColor': null, 'shadowOffset': null, 'shadowRadius': 5, 'shadowOpacity': 0.2, 'elevation': 10};
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BLACK;
    var9['shadowColor'] = var13;
    var13 = {'width': 0, 'height': 0};
    var9['shadowOffset'] = var13;
    var4['shadowContainer'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.CARD_PRIMARY_BG;
    var9['backgroundColor'] = var13;
    var4['shadowContainerBackground'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var9['backgroundColor'] = var13;
    var13 = 0.4;
    var9['opacity'] = var13;
    var4['shadowContainerBackgroundLight'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var9['backgroundColor'] = var13;
    var13 = 0.15;
    var9['opacity'] = var13;
    var4['shadowContainerBackgroundDark'] = var9;
    var9 = {'width': 72, 'height': 72, 'overflow': 'hidden'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.CARD_PRIMARY_BG;
    var9['backgroundColor'] = var13;
    var4['gradientContainer'] = var9;
    var9 = {'position': 'absolute', 'left': 0, 'top': 0, 'right': 0, 'bottom': 0};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_MOD_SUBTLE;
    var9['backgroundColor'] = var13;
    var4['gradientDimOverlay'] = var9;
    var9 = {'width': 72, 'height': 72, 'borderRadius': null, 'borderWidth': 1, 'borderColor': null, 'position': 'absolute'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9['borderColor'] = var13;
    var4['gradientImageBorder'] = var9;
    var9 = {'position': 'absolute', 'top': '50%', 'left': '50%', 'width': 38, 'height': 38, 'marginTop': 4294967277, 'marginLeft': 4294967277};
    var4['avatarContainer'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BLACK;
    var9['shadowColor'] = var13;
    var13 = 6;
    var13 = var6[var13];
    var13 = var5.bind(var1)(var13);
    var13 = var13.DARK_03_LIGHT_02;
    var9['shadowOpacity'] = var13;
    var13 = {'width': 0, 'height': 3};
    var9['shadowOffset'] = var13;
    var9['shadowRadius'] = var12;
    var4['shadow'] = var9;
    var9 = {'width': 32, 'height': 32, 'position': 'absolute', 'borderRadius': 16};
    var4['avatar'] = var9;
    var9 = {'position': 'absolute', 'width': 38, 'height': 38, 'justifyContent': 'center', 'alignItems': 'center', 'borderRadius': 19};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var12;
    var4['avatarWrapper'] = var9;
    var9 = {'width': 38, 'height': 38, 'position': 'absolute', 'borderRadius': 19, 'backgroundColor': null, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var10;
    var4['overflowCount'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var7 = new Array(4);
    var4 = {'translateY': 0, 'translateX': 0, 'scale': 1};
    var7[0] = var4;
    var4 = {'translateY': 0, 'translateX': 0, 'scale': 0};
    var7[1] = var4;
    var4 = {'translateY': 0, 'translateX': 0, 'scale': 0};
    var7[2] = var4;
    var4 = {'translateY': 0, 'translateX': 0, 'scale': 0};
    var7[3] = var4;
    var4 = new Array(4);
    var4[0] = var7;
    var7 = new Array(4);
    var8 = {'translateY': 4294967282, 'translateX': 4294967282, 'scale': 0.75};
    var7[0] = var8;
    var8 = {'translateY': 12, 'translateX': 12, 'scale': 0.875};
    var7[1] = var8;
    var8 = {'translateY': 0, 'translateX': 0, 'scale': 0};
    var7[2] = var8;
    var8 = {'translateY': 0, 'translateX': 0, 'scale': 0};
    var7[3] = var8;
    var4[1] = var7;
    var7 = new Array(4);
    var8 = {'translateY': 4294967292, 'translateX': 16, 'scale': 0.75};
    var7[0] = var8;
    var8 = {'translateY': 14, 'translateX': 4294967282, 'scale': 0.875};
    var7[1] = var8;
    var8 = {'translateY': 4294967278, 'translateX': 4294967284, 'scale': 0.625};
    var7[2] = var8;
    var8 = {'translateY': 0, 'translateX': 0, 'scale': 0};
    var7[3] = var8;
    var4[2] = var7;
    var7 = new Array(4);
    var8 = {'translateY': 4294967282, 'translateX': 4294967282, 'scale': 0.875};
    var7[0] = var8;
    var8 = {'translateY': 14, 'translateX': 14, 'scale': 0.875};
    var7[1] = var8;
    var8 = {'translateY': 4294967278, 'translateX': 18, 'scale': 0.625};
    var7[2] = var8;
    var8 = {'translateY': 18, 'translateX': 4294967278, 'scale': 0.625};
    var7[3] = var8;
    var4[3] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function GroupAvatarTsx1(){const{withTiming,opacityAnimation,useReducedMotion,translateXAnimation,withSpring,SPRING_OPTIONS_POSITION,translateYAnimation,scaleAnimation,SPRING_OPTIONS_SCALE}=this.__closure;return{opacity:withTiming(opacityAnimation.get()),transform:[{translateX:useReducedMotion?translateXAnimation.get():withSpring(translateXAnimation.get(),SPRING_OPTIONS_POSITION)},{translateY:useReducedMotion?translateYAnimation.get():withSpring(translateYAnimation.get(),SPRING_OPTIONS_POSITION)},{scale:useReducedMotion?scaleAnimation.get():withSpring(scaleAnimation.get(),SPRING_OPTIONS_SCALE)}]};}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/GroupAvatar.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GroupAvatar(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var2 = var3.users;
            var _closure2_slot0 = var2;
            var3 = var3.guildId;
            var _closure2_slot1 = var3;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var3 = _closure1_slot11;
            var13 = var3.bind(var4)();
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 7;
            var6 = var7[var3];
            var8 = var5.bind(var4)(var6);
            var6 = var8.useThemeContext;
            var8 = var6.bind(var8)();
            var6 = var8.theme;
            var15 = var8.primaryColor;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.isThemeLight;
            var3 = var3.bind(var5)(var6);
            if(var3) { _fun0005_ip = 130; continue _fun0005 }
 122:
            var11 = var13.shadowContainerBackgroundDark;
            _fun0005_ip = 136; continue _fun0005;
 130:
            var11 = var13.shadowContainerBackgroundLight;
 136:
            var6 = _closure1_slot3;
            var5 = var6.useRef;
            var3 = false;
            var5 = var5.bind(var6)(var3);
            _closure2_slot2 = var5;
            var8 = _closure1_slot3;
            var7 = var8.useEffect;
            var6 = function() {
                var2 = _closure2_slot2;
                var1 = true;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = new Array(0);
            var3 = var7.bind(var8)(var6, var3);
            var3 = global;
            var14 = var3.Math;
            var12 = var14.min;
            var7 = _closure1_slot12;
            var8 = var7.length;
            var6 = 1;
            var9 = var8 - var6;
            var8 = var2.length;
            var8 = var8 - var6;
            var12 = var12.bind(var14)(var9, var8);
            var9 = var3.Math;
            var8 = var9.max;
            var3 = 0;
            var3 = var8.bind(var9)(var3, var12);
            var3 = var7[var3];
            var8 = var2.length;
            var7 = 4;
            var7 = var8 > var7;
            _closure2_slot3 = var7;
            var7 = var2.length;
            var2 = 3;
            var8 = var7 - var2;
            _closure2_slot4 = var8;
            var2 = 2;
            var7 = 10;
            if(!(var8 >= var7)) { _fun0005_ip = 292; continue _fun0005 }
 289:
            var2 = var6;
 292:
            _closure2_slot5 = var2;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 8;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.bind(var4)(var5);
            _closure2_slot6 = var2;
            var2 = var3.map;
            var1 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var9 = arg2;
                    var1 = _closure2_slot0;
                    var3 = var1[var9];
                    var1 = null;
                    var4 = var1 == var3;
                    if(var4) { _fun0006_ip = 183; continue _fun0006 }
 26:
                    var6 = _closure1_slot8;
                    var5 = _closure1_slot14;
                    var4 = {};
                    var13 = arg1;
                    var14 = var4;
                    var8 = copyDataProperties(var14, var13);
                    var10 = var3.id;
                    var8 = 'key';
                    var4[var8] = var10;
                    var10 = _closure2_slot6;
                    var8 = 'animateOnMount';
                    var4[var8] = var10;
                    var8 = _closure2_slot0;
                    var10 = var8.length;
                    var8 = 2;
                    var10 = var10 >= var8;
                    var8 = 'shadow';
                    var4[var8] = var10;
                    var8 = _closure2_slot3;
                    if(!var8) { _fun0006_ip = 116; continue _fun0006 }
 108:
                    var8 = _closure2_slot5;
                    if(!(var9 !== var8)) { _fun0006_ip = 148; continue _fun0006 }
 116:
                    var10 = _closure1_slot6;
                    var9 = _closure1_slot16;
                    var8 = {};
                    var11 = _closure2_slot1;
                    var8['guildId'] = var11;
                    var8['user'] = var3;
                    var3 = undefined;
                    var3 = var10.bind(var3)(var9, var8);
                    _fun0006_ip = 174; continue _fun0006;
 148:
                    var9 = _closure1_slot6;
                    var8 = _closure1_slot15;
                    var7 = {};
                    var2 = _closure2_slot4;
                    var7['count'] = var2;
                    var2 = undefined;
                    var3 = var9.bind(var2)(var8, var7);
 174:
                    var2 = undefined;
                    var1 = var6.bind(var2)(var5, var4, var3);
 183:
                    return var1;
                }
            };
            var6 = var2.bind(var3)(var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var13.groupContainer;
            var1['style'] = var5;
            var8 = _closure1_slot7;
            var7 = _closure1_slot4;
            var5 = {};
            var12 = var13.shadowContainer;
            var9 = new Array(2);
            var9[0] = var12;
            var14 = null;
            if(!(var14 == var15)) { _fun0005_ip = 396; continue _fun0005 }
 390:
            var11 = var13.shadowContainerBackground;
 396:
            var9[1] = var11;
            var5['style'] = var9;
            var12 = _closure1_slot6;
            var11 = _closure1_slot4;
            var9 = {};
            var16 = var13.gradientContainer;
            var9['style'] = var16;
            var14 = var14 == var15;
            if(!var14) { _fun0005_ip = 457; continue _fun0005 }
 431:
            var17 = _closure1_slot6;
            var16 = _closure1_slot4;
            var15 = {};
            var18 = var13.gradientDimOverlay;
            var15['style'] = var18;
            var14 = var17.bind(var4)(var16, var15);
 457:
            var9['children'] = var14;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot6;
            var11 = _closure1_slot4;
            var10 = {};
            var13 = var13.gradientImageBorder;
            var10['style'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
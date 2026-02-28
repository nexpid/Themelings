// app/modules/auth/native/components/Auth.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function NavigatorWithCaptchaHook() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 9;
            var2 = var11[var2];
            var4 = undefined;
            var3 = var10.bind(var4)(var2);
            var2 = var3.useIsHCaptchaModalOpenTracking;
            var2 = var2.bind(var3)();
            var7 = _closure1_slot1;
            var2 = 10;
            var2 = var11[var2];
            var2 = var7.bind(var4)(var2);
            var6 = var2.bind(var4)();
            var2 = _closure1_slot14;
            var20 = var2.bind(var4)();
            var5 = _closure1_slot4;
            var3 = var5.useState;
            var2 = _closure1_slot7;
            var2 = var2.WELCOME;
            var5 = var3.bind(var5)(var2);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var5, var2);
            var18 = 0;
            var22 = var3[var18];
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot0 = var2;
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = arg1;
                    var3 = _closure2_slot0;
                    var2 = null;
                    var6 = var2 == var5;
                    var1 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var6 = var5.routes;
                    var5 = var5.index;
                    var5 = var6[var5];
                    var6 = var2 == var5;
                    var4 = undefined;
                    if(var6) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var4 = var5.name;
case 2:
                    var5 = var2 != var4;
                    var2 = null;
                    if(!var5) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var2 = var4;
case 5:
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1 = new Array(0);
            var16 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot10;
            var2 = _closure1_slot9;
            var1 = {};
            var8 = _closure1_slot8;
            var5 = 11;
            var5 = var11[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var9 = 12;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var5['backgroundImageSource'] = var9;
            var9 = true;
            var5['backgroundImageCover'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var9 = _closure1_slot8;
            if(var6) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 13;
            var6 = var13[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.Navigator;
            var6 = {};
            var8 = _closure1_slot11;
            var6['screens'] = var8;
            var8 = var20.transparent;
            var6['viewStyle'] = var8;
            var8 = var20.transparent;
            var6['containerStyle'] = var8;
            var8 = 15;
            var10 = var13[var8];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var8 = var13[var8];
            var8 = var12.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.13/7kX;
            var8 = var10.bind(var11)(var8);
            var6['headerBackTitle'] = var8;
            var8 = _closure1_slot7;
            var8 = var8.WELCOME;
            var6['initialRouteName'] = var8;
            var8 = _closure1_slot5;
            var8 = var8.dismiss;
            var6['onWillFocus'] = var8;
            var8 = {};
            var8['borderBottomWidth'] = var18;
            var6['headerStyle'] = var8;
            var6 = var9.bind(var4)(var7, var6);
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var8 = _closure1_slot6;
            var7 = {};
            var10 = var20.wideOuterContainer;
            var7['style'] = var10;
            var12 = _closure1_slot8;
            var11 = _closure1_slot6;
            var10 = {};
            var14 = var20.wideCard;
            var13 = new Array(2);
            var13[0] = var14;
            var19 = null;
            var15 = var19 != var22;
            var14 = null;
            if(!var15) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var15 = {};
            var21 = _closure1_slot13;
            var23 = var21[var22];
            var24 = var19 != var23;
            var21 = 520;
            if(!var24) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var21 = var23;
case 12:
            var15['height'] = var21;
            var14 = var15;
case 10:
            var13[1] = var14;
            var10['style'] = var13;
            var15 = _closure1_slot8;
            var14 = _closure1_slot0;
            var21 = _closure1_slot2;
            var13 = 13;
            var13 = var21[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.Navigator;
            var13 = {'screens': null, 'containerStyle': null, 'viewStyle': null, 'headerStatusBarHeight': 0, 'cardOverlayEnabled': false, 'cardShadowEnabled': false};
            var21 = _closure1_slot12;
            var13['screens'] = var21;
            var21 = var20.cardContainer;
            var13['containerStyle'] = var21;
            var21 = _closure1_slot7;
            var21 = var21.WELCOME;
            var19 = null;
            if(!(var22 === var21)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var19 = var20.transparent;
case 14:
            var13['viewStyle'] = var19;
            var19 = _closure1_slot7;
            var19 = var19.WELCOME;
            var13['initialRouteName'] = var19;
            var19 = _closure1_slot5;
            var19 = var19.dismiss;
            var13['onWillFocus'] = var19;
            var13['onStateChange'] = var16;
            var16 = {};
            var16['borderBottomWidth'] = var18;
            var13['headerStyle'] = var16;
            var16 = {};
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var18 = 14;
            var18 = var20[var18];
            var19 = var19.bind(var4)(var18);
            var18 = var19.isAndroid;
            var18 = var18.bind(var19)();
            var21 = _closure1_slot1;
            var20 = _closure1_slot2;
            var19 = 8;
            var20 = var20[var19];
            var20 = var21.bind(var4)(var20);
            var20 = var20.spacing;
            if(var18) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var18 = var20.PX_24;
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var18 = var20.PX_16;
case 18:
            var16['paddingLeft'] = var18;
            var18 = _closure1_slot1;
            var17 = _closure1_slot2;
            var17 = var17[var19];
            var17 = var18.bind(var4)(var17);
            var17 = var17.spacing;
            var17 = var17.PX_24;
            var16['paddingTop'] = var17;
            var13['headerLeftContainerStyle'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 9:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var2 = global;
    var9 = var2.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var12.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.Keyboard;
    var _closure1_slot5 = var9;
    var5 = var5.View;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AuthStates;
    var _closure1_slot7 = var5;
    var9 = 4;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var10 = var9.jsx;
    var _closure1_slot8 = var10;
    var10 = var9.Fragment;
    var _closure1_slot9 = var10;
    var9 = var9.jsxs;
    var _closure1_slot10 = var9;
    var9 = 5;
    var9 = var7[var9];
    var10 = var6.bind(var1)(var9);
    var9 = var10.getAllAuthScreens;
    var13 = var9.bind(var10)();
    var _closure1_slot11 = var13;
    var10 = var2.Object;
    var9 = var10.fromEntries;
    var11 = var2.Object;
    var2 = var11.entries;
    var13 = var2.bind(var11)(var13);
    var11 = var13.map;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = var4[Symbol.iterator];
            var4 = var1().next;
            var3 = var4().value;
            var2 = var1;
            var7 = undefined;
            var2 = var2 === var7;
            var6 = undefined;
            if(var2) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var6 = var3;
case 19:
            var3 = undefined;
            if(var2) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var5 = var4().value;
            var4 = var1;
            var4 = var4 === var7;
            var3 = undefined;
            var2 = var4;
            if(var4) { _fun0003_ip = 21; continue _fun0003 }
case 23:
            var3 = var5;
            var2 = var4;
case 21:
            if(var2) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var1.return();
case 24:
            var1 = new Array(2);
            var1[0] = var6;
            var2 = {};
            var10 = var2;
            var9 = var3;
            var3 = copyDataProperties(var10, var9);
            var3 = global;
            var8 = var3.Set;
            var3 = _closure1_slot7;
            var4 = var3.REGISTER_IDENTITY;
            var3 = new Array(3);
            var3[0] = var4;
            var4 = _closure1_slot7;
            var4 = var4.LOGIN;
            var3[1] = var4;
            var4 = _closure1_slot7;
            var4 = var4.AGE_GATE_UNDERAGE;
            var3[2] = var4;
            var4 = var8.prototype;
            var4 = Object.create(var4, {constructor: {value: var8}});
            var11 = var4;
            var10 = var3;
            var3 = new var11[var8](var10, var9);
            var4 = var3 instanceof Object ? var3 : var4;
            var3 = var4.has;
            var4 = var3.bind(var4)(var6);
            var3 = null;
            if(!var4) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var4 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 6;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.CardStyleInterpolators;
            var5 = var5.forFadeFromCenter;
            var4['cardStyleInterpolator'] = var5;
            var3 = var4;
case 26:
            var10 = var2;
            var9 = var3;
            var3 = copyDataProperties(var10, var9);
            var1[1] = var2;
            return var1;
        }
    };
    var2 = var11.bind(var13)(var2);
    var2 = var9.bind(var10)(var2);
    var _closure1_slot12 = var2;
    var2 = {};
    var10 = var5.LOGIN;
    var9 = 600;
    var2[var10] = var9;
    var5 = var5.MFA;
    var2[var5] = var9;
    var _closure1_slot13 = var2;
    var2 = 7;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var5 = var9.createStyles;
    var2 = {};
    var10 = {};
    var11 = 'transparent';
    var10['backgroundColor'] = var11;
    var2['transparent'] = var10;
    var10 = {'flex': 1, 'position': 'relative', 'backgroundColor': 'transparent'};
    var2['cardContainer'] = var10;
    var10 = {'flex': 1, 'justifyContent': 'center'};
    var2['wideOuterContainer'] = var10;
    var10 = {'backgroundColor': 'transparent', 'borderRadius': null, 'maxWidth': 480, 'alignSelf': 'center', 'width': '100%', 'maxHeight': '90%', 'overflow': 'hidden', 'height': 520};
    var11 = 8;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var10['borderRadius'] = var11;
    var2['wideCard'] = var10;
    var2 = var5.bind(var9)(var2);
    var _closure1_slot14 = var2;
    var5 = var8.createContext;
    var2 = function() {
        var1 = undefined;
        return var1;
    };
    var2 = var5.bind(var8)(var2);
    var _closure1_slot15 = var2;
    var5 = var8.memo;
    var4 = function Auth() {
        var6 = _closure1_slot4;
        var4 = var6.useEffect;
        var3 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.initialize;
            var1 = var1.bind(var2)();
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.terminate;
                var1 = var1.bind(var2)();
                return var1;
            };
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var6)(var3, var2);
        var6 = _closure1_slot4;
        var4 = var6.useLayoutEffect;
        var3 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.trackAppUIViewed;
            var1 = var1.bind(var2)();
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var6)(var3, var2);
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 18;
        var2 = var4[var2];
        var4 = undefined;
        var2 = var3.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var3 = _closure1_slot4;
        var2 = var3.useRef;
        var2 = var2.bind(var3)(var4);
        var _closure2_slot0 = var2;
        var6 = _closure1_slot4;
        var3 = var6.useCallback;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 19;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getTrackRegTransition;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = new Array(0);
        var6 = var3.bind(var6)(var2, var1);
        var3 = _closure1_slot8;
        var1 = _closure1_slot15;
        var2 = var1.Provider;
        var1 = {};
        var6 = var6.bind(var4)();
        var1['value'] = var6;
        var7 = _closure1_slot8;
        var6 = _closure1_slot16;
        var5 = {};
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var5 = 20;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/auth/native/components/Auth.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['TrackRegistrationContext'] = var2;
    return var1;
})();
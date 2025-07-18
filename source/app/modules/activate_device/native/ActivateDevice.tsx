// app/modules/activate_device/native/ActivateDevice.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
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
    var11 = 1;
    var7 = var6[var11];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var7 = var4.ImageBackground;
    var _closure1_slot6 = var7;
    var7 = var4.ActivityIndicator;
    var _closure1_slot7 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var10 = 4;
    var4 = var6[var10];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var11;
    var4['background'] = var9;
    var9 = {'marginVertical': 0, 'resizeMode': 'cover'};
    var11 = 5;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_BRAND;
    var9['backgroundColor'] = var13;
    var4['imageStyle'] = var9;
    var9 = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'center'};
    var4['safeArea'] = var9;
    var9 = {'maxWidth': 480, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center', 'borderRadius': null, 'padding': 24, 'marginHorizontal': 24, 'marginVertical': 36, 'shadowColor': null, 'shadowOpacity': 0.2};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.PANEL_BG;
    var9['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9['borderRadius'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BLACK;
    var9['shadowColor'] = var11;
    var11 = {'width': 0, 'height': 4};
    var9['shadowOffset'] = var11;
    var9['shadowRadius'] = var10;
    var4['content'] = var9;
    var9 = {'alignSelf': 'stretch', 'flexGrow': 0};
    var4['scroller'] = var9;
    var9 = {'flexDirection': 'column', 'gap': 16};
    var4['scrollerContent'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activate_device/native/ActivateDevice.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.onClose;
            var8 = var1.prefilledUserCode;
            var1 = _closure1_slot10;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var16 = _closure1_slot4;
            var6 = var16.useState;
            var1 = 'user-code-input';
            var10 = true;
            var3 = {'type': 'user-code-input', 'usePrefilledCode': true};
            var3 = var6.bind(var16)(var3);
            var17 = _closure1_slot3;
            var15 = 2;
            var3 = var17.bind(var4)(var3, var15);
            var13 = 0;
            var7 = var3[var13];
            var _closure2_slot0 = var7;
            var14 = 1;
            var6 = var3[var14];
            var _closure2_slot1 = var6;
            var11 = var16.useState;
            var3 = null;
            var11 = var11.bind(var16)(var3);
            var11 = var17.bind(var4)(var11, var15);
            var13 = var11[var13];
            var _closure2_slot2 = var13;
            var11 = var11[var14];
            var _closure2_slot3 = var11;
            var11 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 6;
            var14 = var18[var14];
            var15 = var11.bind(var4)(var14);
            var14 = var15.useActivateDeviceStepTracking;
            var14 = var14.bind(var15)(var7);
            var17 = var16.useCallback;
            var15 = new Array(1);
            var15[0] = var6;
            var14 = function() {
                var3 = _closure2_slot1;
                var2 = {};
                var1 = 'user-code-input';
                var2['type'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var14 = var17.bind(var16)(var14, var15);
            var19 = var16.useCallback;
            var17 = new Array(1);
            var17[0] = var6;
            var15 = function(arg1) {
                var3 = _closure2_slot1;
                var2 = {};
                var1 = 'success';
                var2['type'] = var1;
                var1 = arg1;
                var2['userCodeData'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var17 = var19.bind(var16)(var15, var17);
            var19 = var16.useCallback;
            var15 = new Array(1);
            var15[0] = var6;
            var6 = function(arg1) {
                var3 = _closure2_slot1;
                var2 = {};
                var1 = 'error';
                var2['type'] = var1;
                var1 = arg1;
                var2['userCodeData'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var15 = var19.bind(var16)(var6, var15);
            var6 = 7;
            var6 = var18[var6];
            var11 = var11.bind(var4)(var6);
            var6 = var11.useDeviceCodeAuthorizeCallback;
            var6 = var6.bind(var11)(var14, var15, var17);
            var _closure2_slot4 = var6;
            var15 = var16.useCallback;
            var11 = new Array(1);
            var11[0] = var6;
            var6 = function(arg1) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var3 = _closure2_slot1;
                var2 = {};
                var1 = 'authorization';
                var2['type'] = var1;
                var2['userCodeData'] = var6;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 8;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openOAuth2Modal;
                var2 = {'clientId': null, 'scopes': null, 'responseType': 'code', 'isTrustedName': true, 'isEmbeddedFlow': true, 'withBackPressHandler': false};
                var7 = var6.clientId;
                var2['clientId'] = var7;
                var6 = var6.scopes;
                var2['scopes'] = var6;
                var5 = function callbackWithoutPost(arg1) {
                    var4 = _closure2_slot4;
                    var3 = _closure3_slot0;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var4.bind(var2)(var3, var1);
                    return var1;
                };
                var2['callbackWithoutPost'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6 = var15.bind(var16)(var6, var11);
            var17 = var16.useEffect;
            var15 = new Array(1);
            var15[0] = var7;
            var11 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = 'userCodeData';
                    var1 = var1 in var3;
                    if(!var1) { _fun0002_ip = 209; continue _fun0002 }
 21:
                    var1 = _closure2_slot0;
                    var4 = var1.userCodeData;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 9;
                    var7 = var8[var5];
                    var3 = undefined;
                    var7 = var6.bind(var3)(var7);
                    var7 = var7.ConsoleOAuthApplications;
                    var9 = var7.PLAYSTATION_APPLICATION_ID;
                    var7 = new Array(2);
                    var7[0] = var9;
                    var5 = var8[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.ConsoleOAuthApplications;
                    var5 = var5.PLAYSTATION_STAGING_APPLICATION_ID;
                    var7[1] = var5;
                    var6 = var7.includes;
                    var5 = var4.clientId;
                    var5 = var6.bind(var7)(var5);
                    if(var5) { _fun0002_ip = 180; continue _fun0002 }
 120:
                    var6 = var4.scopes;
                    var5 = var6.some;
                    var4 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isSocialLayerUmbrellaScope;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = var5.bind(var6)(var4);
                    if(!var4) { _fun0002_ip = 209; continue _fun0002 }
 149:
                    var5 = _closure2_slot3;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 12;
                    var4 = var7[var4];
                    var4 = var6.bind(var3)(var4);
                    var4 = var5.bind(var3)(var4);
                    _fun0002_ip = 209; continue _fun0002;
 180:
                    var2 = _closure2_slot3;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 10;
                    var1 = var5[var1];
                    var1 = var4.bind(var3)(var1);
                    var1 = var2.bind(var3)(var1);
 209:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var17.bind(var16)(var11, var15);
            var15 = var16.useEffect;
            var11 = new Array(1);
            var11[0] = var13;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 53; continue _fun0003 }
 13:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.preload;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var15.bind(var16)(var2, var11);
            var2 = var7.type;
            if(!(var1 !== var2)) { _fun0001_ip = 525; continue _fun0001 }
 362:
            var1 = 'authorization';
            if(!(var1 !== var2)) { _fun0001_ip = 502; continue _fun0001 }
 373:
            var1 = 'success';
            if(!(var1 !== var2)) { _fun0001_ip = 442; continue _fun0001 }
 381:
            var1 = 'error';
            var11 = null;
            if(!(var1 === var2)) { _fun0001_ip = 592; continue _fun0001 }
 394:
            var3 = _closure1_slot9;
            var2 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 16;
            var1 = var15[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ActivateDeviceError;
            var1 = {};
            var1['onRetry'] = var14;
            var11 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 592; continue _fun0001;
 442:
            var3 = _closure1_slot9;
            var2 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 15;
            var1 = var14[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ActivateDeviceSuccess;
            var1 = {};
            var1['onComplete'] = var5;
            var14 = var7.userCodeData;
            var1['data'] = var14;
            var1['successImage'] = var13;
            var11 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 592; continue _fun0001;
 502:
            var3 = _closure1_slot9;
            var2 = _closure1_slot7;
            var1 = {};
            var1['animating'] = var10;
            var11 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 592; continue _fun0001;
 525:
            var3 = _closure1_slot9;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 14;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.UserCodeInput;
            var1 = {};
            var10 = var7.usePrefilledCode;
            var7 = undefined;
            if(!var10) { _fun0001_ip = 571; continue _fun0001 }
 568:
            var7 = var8;
 571:
            var1['prefilledUserCode'] = var7;
            var1['onUserCodeAccepted'] = var6;
            var1['onClose'] = var5;
            var11 = var3.bind(var4)(var2, var1);
 592:
            var3 = _closure1_slot9;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 17;
            var5 = var7[var5];
            var10 = var6.bind(var4)(var5);
            var8 = var10.makeSource;
            var13 = _closure1_slot1;
            var5 = 18;
            var5 = var7[var5];
            var5 = var13.bind(var4)(var5);
            var5 = var8.bind(var10)(var5);
            var1['source'] = var5;
            var5 = var12.imageStyle;
            var1['imageStyle'] = var5;
            var8 = var12.background;
            var5 = new Array(1);
            var5[0] = var8;
            var1['style'] = var5;
            var5 = 19;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.SafeAreaPaddingView;
            var5 = {'bottom': true, 'top': true};
            var7 = var12.safeArea;
            var5['style'] = var7;
            var8 = _closure1_slot5;
            var7 = {};
            var10 = var12.content;
            var7['style'] = var10;
            var10 = _closure1_slot8;
            var9 = {};
            var13 = false;
            var9['bounces'] = var13;
            var13 = var12.scroller;
            var9['style'] = var13;
            var12 = var12.scrollerContent;
            var9['contentContainerStyle'] = var12;
            var9['children'] = var11;
            var9 = var3.bind(var4)(var10, var9);
            var7['children'] = var9;
            var7 = var3.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ActivateDevice'] = var2;
    return var1;
})();
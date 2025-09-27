// app/modules/age_assurance/native/AgeVerificationModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function getScreens(arg1, arg2, arg3, arg4) {
        var1 = arg2;
        var _closure2_slot0 = var1;
        var1 = arg3;
        var _closure2_slot1 = var1;
        var1 = arg4;
        var _closure2_slot2 = var1;
        var1 = function handleClose() {
            var2 = _closure2_slot2;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.pop;
            var2 = var2.bind(var3)();
            return var1;
        };
        var _closure2_slot3 = var1;
        var1 = {};
        var2 = _closure1_slot6;
        var3 = var2.VERIFY_AGE;
        var2 = {};
        var6 = arg1;
        var6 = var6.headerStyle;
        var2['headerStyle'] = var6;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var5 = 10;
        var6 = var10[var5];
        var8 = undefined;
        var6 = var9.bind(var8)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var10[var5];
        var5 = var9.bind(var8)(var5);
        var5 = var5.t;
        var5 = var5.Mqtf3N;
        var5 = var6.bind(var7)(var5);
        var2['headerTitle'] = var5;
        var5 = function headerLeft() {
            var4 = _closure1_slot5;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 11;
            var1 = var9[var1];
            var3 = undefined;
            var1 = var8.bind(var3)(var1);
            var2 = var1.HeaderActionButton;
            var1 = {};
            var5 = _closure2_slot3;
            var1['onPress'] = var5;
            var5 = 10;
            var6 = var9[var5];
            var6 = var8.bind(var3)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var3)(var5);
            var5 = var5.t;
            var5 = var5.cpT0Cg;
            var5 = var6.bind(var7)(var5);
            var1['text'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['headerLeft'] = var5;
        var4 = function render() {
            var4 = _closure1_slot5;
            var3 = _closure1_slot7;
            var2 = {};
            var5 = _closure2_slot0;
            var2['webviewUrl'] = var5;
            var5 = _closure2_slot1;
            var2['onComplete'] = var5;
            var1 = _closure2_slot3;
            var2['onClose'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var2['render'] = var4;
        var1[var3] = var2;
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AGE_VERIFICATION_MODAL_KEY;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = 'VERIFY_AGE';
    var4['VERIFY_AGE'] = var7;
    var _closure1_slot6 = var4;
    var4 = function AgeVerifyScreen(arg1) {
        var1 = arg1;
        var7 = var1.webviewUrl;
        var12 = var1.onComplete;
        var _closure2_slot0 = var12;
        var3 = var1.onClose;
        var _closure2_slot1 = var3;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var4 = 3;
        var8 = var6[var4];
        var4 = undefined;
        var9 = var5.bind(var4)(var8);
        var8 = var9.useIsSuspendedUser;
        var9 = var8.bind(var9)();
        var _closure2_slot2 = var9;
        var8 = _closure1_slot3;
        var11 = var8.useCallback;
        var10 = new Array(2);
        var10[0] = var12;
        var10[1] = var3;
        var3 = function() {
            var3 = _closure2_slot0;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var2 = _closure2_slot1;
            var2 = var2.bind(var1)();
            return var1;
        };
        var10 = var11.bind(var8)(var3, var10);
        var _closure2_slot3 = var10;
        var12 = var8.useCallback;
        var11 = new Array(1);
        var11[0] = var10;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 4;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isModalOpen;
                var2 = _closure1_slot4;
                var2 = var3.bind(var4)(var2);
                if(!var2) { _fun0001_ip = 54; continue _fun0001 }
 43:
                var2 = _closure2_slot3;
                var2 = var2.bind(var1)();
 54:
                return var1;
            }
        };
        var11 = var12.bind(var8)(var3, var11);
        var3 = 5;
        var3 = var6[var3];
        var5 = var5.bind(var4)(var3);
        var3 = var5.useWatchAgeVerificationStatusChange;
        var3 = var3.bind(var5)(var11);
        var5 = var8.useCallback;
        var3 = new Array(2);
        var3[0] = var10;
        var3[1] = var9;
        var2 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var3 = _closure2_slot2;
                if(!var3) { _fun0002_ip = 35; continue _fun0002 }
 13:
                var4 = var2.nativeEvent;
                var4 = var4.data;
                var5 = 'string';
                var4 = typeof var4;
                var3 = var5 !== var4;
 35:
                if(!var3) { _fun0002_ip = 86; continue _fun0002 }
 38:
                var2 = var2.nativeEvent;
                var3 = var2.data;
                var2 = null;
                var5 = var2 == var3;
                var2 = undefined;
                var4 = undefined;
                if(var5) { _fun0002_ip = 68; continue _fun0002 }
 62:
                var4 = var3.eventType;
 68:
                var3 = 'Verification.Result';
                if(!(var3 === var4)) { _fun0002_ip = 86; continue _fun0002 }
 78:
                var1 = _closure2_slot3;
                var1 = var1.bind(var2)();
 86:
                var1 = undefined;
                return var1;
            }
        };
        var5 = var5.bind(var8)(var2, var3);
        var3 = _closure1_slot5;
        var2 = _closure1_slot1;
        var1 = 6;
        var1 = var6[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {'allowsInlineMediaPlayback': true, 'javaScriptEnabled': true, 'source': null, 'onMessage': null, 'injectedJavaScript': "\n  window.addEventListener('message', function(event) {\n    window.ReactNativeWebView.postMessage(event.data);\n  }, true);\n"};
        var6 = {};
        var6['uri'] = var7;
        var1['source'] = var6;
        var1['onMessage'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 8;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var10;
    var4['headerStyle'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_assurance/native/AgeVerificationModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AgeVerificationModal(arg1) {
        var2 = arg1;
        var9 = var2.webviewUrl;
        var _closure2_slot0 = var9;
        var8 = var2.onComplete;
        var _closure2_slot1 = var8;
        var7 = var2.onClose;
        var _closure2_slot2 = var7;
        var2 = _closure1_slot8;
        var4 = undefined;
        var10 = var2.bind(var4)();
        var _closure2_slot3 = var10;
        var6 = _closure1_slot3;
        var3 = var6.useMemo;
        var2 = new Array(4);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var8;
        var2[3] = var7;
        var1 = function() {
            var6 = _closure1_slot9;
            var10 = _closure2_slot3;
            var9 = _closure2_slot0;
            var8 = _closure2_slot1;
            var7 = _closure2_slot2;
            var11 = undefined;
            var1 = var11[var6](var10, var9, var8, var7, var6);
            return var1;
        };
        var6 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot5;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 12;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var1['screens'] = var6;
        var5 = _closure1_slot6;
        var5 = var5.VERIFY_AGE;
        var1['initialRouteName'] = var5;
        var5 = 10;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.13/7kZ;
        var5 = var6.bind(var7)(var5);
        var1['headerBackTitle'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
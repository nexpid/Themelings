// app/components_native/QRScannerModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var9 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var9;
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
        var4 = var9.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var7 = var6[var4];
        var4 = metroImportAll;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot4 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.requireNativeComponent;
        var4 = var4.View;
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.UserSettingsSections;
        var _closure1_slot6 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.FAMILY_CENTER_LINK_REQUEST_REGEX;
        var _closure1_slot7 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.jsx;
        var _closure1_slot8 = var8;
        var4 = var4.jsxs;
        var _closure1_slot9 = var4;
        var4 = 6;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var4 = var8.isAndroid;
        var4 = var4.bind(var8)();
        if(var4) { _fun0001_ip = 232; continue _fun0001 }
 219:
        var4 = 'DCDQRScanner';
        var4 = var7.bind(var1)(var4);
        _fun0001_ip = 244; continue _fun0001;
 232:
        var7 = 7;
        var7 = var6[var7];
        var4 = var9.bind(var1)(var7);
 244:
        var _closure1_slot10 = var4;
        var4 = function DCDQRScanner(arg1) {
            var4 = _closure1_slot8;
            var3 = _closure1_slot10;
            var2 = {};
            var5 = arg1;
            var6 = var2;
            var1 = copyDataProperties(var6, var5);
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var _closure1_slot11 = var4;
        var4 = {};
        var7 = {'position': 'absolute', 'height': '100%', 'width': '100%'};
        var4['scanner'] = var7;
        var7 = {};
        var8 = 8;
        var7['marginLeft'] = var8;
        var4['closeButton'] = var7;
        var7 = {};
        var10 = var6[var8];
        var10 = var9.bind(var1)(var10);
        var10 = var10.unsafe_rawColors;
        var10 = var10.BLACK_500;
        var7['backgroundColor'] = var10;
        var4['emptyView'] = var7;
        var7 = {'marginLeft': 16, 'marginRight': 16, 'marginTop': 'auto', 'borderRadius': 16, 'backgroundColor': null, 'paddingTop': 4, 'paddingBottom': 4, 'paddingLeft': 16, 'paddingRight': 16};
        var10 = var6[var8];
        var10 = var9.bind(var1)(var10);
        var10 = var10.unsafe_rawColors;
        var10 = var10.BRAND_500;
        var7['backgroundColor'] = var10;
        var4['showHelp'] = var7;
        var7 = {};
        var8 = var6[var8];
        var8 = var9.bind(var1)(var8);
        var8 = var8.unsafe_rawColors;
        var8 = var8.WHITE_500;
        var7['color'] = var8;
        var8 = 'center';
        var7['textAlign'] = var8;
        var4['text'] = var7;
        var _closure1_slot12 = var4;
        var4 = {};
        var7 = 'SUCCEEDED';
        var4['SUCCEEDED'] = var7;
        var7 = 'FAILED';
        var4['FAILED'] = var7;
        var _closure1_slot13 = var4;
        var4 = 24;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'components_native/QRScannerModal.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function QRScannerModal(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var2 = var1.showHelp;
                var4 = undefined;
                var9 = var4 !== var2;
                if(!var9) { _fun0002_ip = 23; continue _fun0002 }
 20:
                var9 = var2;
 23:
                var1 = var1.onScanSuccess;
                var _closure2_slot0 = var1;
                var5 = _closure1_slot4;
                var2 = var5.useState;
                var1 = true;
                var3 = var2.bind(var5)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var1 = var2.bind(var4)(var3, var1);
                var2 = 0;
                var7 = var1[var2];
                var6 = 1;
                var1 = var1[var6];
                var _closure2_slot1 = var1;
                var3 = var5.useEffect;
                var2 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.runAfterInteractions;
                    var2 = function() {
                        var3 = _closure2_slot1;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var2 = _closure3_slot0;
                        var1 = var2.cancel;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                };
                var1 = new Array(0);
                var1 = var3.bind(var5)(var2, var1);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var14 = var1.bottom;
                var18 = var1.top;
                var3 = _closure1_slot9;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = {};
                var5['flex'] = var6;
                var1['style'] = var5;
                var10 = _closure1_slot8;
                if(var7) { _fun0002_ip = 214; continue _fun0002 }
 165:
                var6 = _closure1_slot11;
                var5 = {};
                var11 = _closure1_slot12;
                var11 = var11.scanner;
                var5['style'] = var11;
                var11 = 'none';
                var5['pointerEvents'] = var11;
                var8 = function onQRCodeFound(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.nativeEvent;
                        var3 = var2.status;
                        var2 = _closure1_slot13;
                        var2 = var2.SUCCEEDED;
                        if(!(var2 !== var3)) { _fun0003_ip = 191; continue _fun0003 }
 34:
                        var2 = _closure1_slot13;
                        var2 = var2.FAILED;
                        var3 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var2 = 19;
                        var2 = var11[var2];
                        var10 = undefined;
                        var4 = var3.bind(var10)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var9 = _closure1_slot0;
                        var6 = 20;
                        var7 = var11[var6];
                        var7 = var9.bind(var10)(var7);
                        var12 = var7.intl;
                        var8 = var12.string;
                        var7 = var11[var6];
                        var7 = var9.bind(var10)(var7);
                        var7 = var7.t;
                        var7 = var7.QOQlWV;
                        var7 = var8.bind(var12)(var7);
                        var2['body'] = var7;
                        var7 = var11[var6];
                        var7 = var9.bind(var10)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var6 = var11[var6];
                        var6 = var9.bind(var10)(var6);
                        var6 = var6.t;
                        var6 = var6.6S318P;
                        var6 = var7.bind(var8)(var6);
                        var2['title'] = var6;
                        var2 = var3.bind(var4)(var2);
                        _fun0003_ip = 388; continue _fun0003;
 191:
                        var4 = _closure2_slot0;
                        var3 = undefined;
                        if(!(var3 === var4)) { _fun0003_ip = 626; continue _fun0003 }
 207:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 11;
                        var4 = var7[var4];
                        var7 = var6.bind(var3)(var4);
                        var6 = var7.toURLSafe;
                        var4 = var1.nativeEvent;
                        var4 = var4.result;
                        var6 = var6.bind(var7)(var4);
                        var4 = null;
                        if(!(var4 == var6)) { _fun0003_ip = 258; continue _fun0003 }
 256:
                        var6 = {};
 258:
                        var8 = var6.hostname;
                        var9 = var6.pathname;
                        var7 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var6 = 12;
                        var6 = var10[var6];
                        var7 = var7.bind(var3)(var6);
                        var6 = var7.findRemoteAuthFingerprint;
                        var8 = var6.bind(var7)(var8, var9);
                        if(!(var4 == var8)) { _fun0003_ip = 530; continue _fun0003 }
 309:
                        var7 = var4 == var9;
                        var6 = undefined;
                        if(var7) { _fun0003_ip = 333; continue _fun0003 }
 318:
                        var10 = var9.match;
                        var7 = _closure1_slot7;
                        var6 = var10.bind(var9)(var7);
 333:
                        if(!(var4 != var6)) { _fun0003_ip = 341; continue _fun0003 }
 337:
                        if(!(var4 == var9)) { _fun0003_ip = 422; continue _fun0003 }
 341:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 18;
                        var4 = var7[var4];
                        var10 = var6.bind(var3)(var4);
                        var7 = var10.openURL;
                        var4 = var1.nativeEvent;
                        var6 = var4.result;
                        var4 = false;
                        var4 = var7.bind(var10)(var6, var3, var4);
 388:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 13;
                        var6 = var6[var4];
                        var4 = undefined;
                        var7 = var7.bind(var4)(var6);
                        var6 = var7.pop;
                        var6 = var6.bind(var7)();
                        return var4;
 422:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 13;
                        var4 = var7[var4];
                        var6 = var6.bind(var3)(var4);
                        var4 = var6.pop;
                        var4 = var4.bind(var6)();
                        var6 = _closure1_slot0;
                        var4 = 16;
                        var4 = var7[var4];
                        var11 = var6.bind(var3)(var4);
                        var10 = var11.openUserSettings;
                        var4 = {};
                        var12 = _closure1_slot6;
                        var12 = var12.FAMILY_CENTER;
                        var4['screen'] = var12;
                        var4 = var10.bind(var11)(var4);
                        var4 = 17;
                        var4 = var7[var4];
                        var7 = var6.bind(var3)(var4);
                        var6 = var7.handleFamilyCenterQRCodeScan;
                        var4 = 'UserSettingsQRCodeScan';
                        var4 = var6.bind(var7)(var9, var4);
                        var4 = undefined;
                        return var4;
 530:
                        var7 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var6 = 13;
                        var9 = var4[var6];
                        var10 = var7.bind(var3)(var9);
                        var9 = var10.pop;
                        var9 = var9.bind(var10)();
                        var6 = var4[var6];
                        var7 = var7.bind(var3)(var6);
                        var6 = var7.pushLazy;
                        var9 = _closure1_slot0;
                        var5 = 15;
                        var5 = var4[var5];
                        var9 = var9.bind(var3)(var5);
                        var5 = 14;
                        var5 = var4[var5];
                        var4 = var4.paths;
                        var5 = var9.bind(var3)(var5, var4);
                        var4 = {};
                        var4['remoteAuthFingerprint'] = var8;
                        var4 = var6.bind(var7)(var5, var4);
                        var4 = undefined;
                        return var4;
 626:
                        var2 = _closure2_slot0;
                        var1 = var1.nativeEvent;
                        var1 = var1.result;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var5['onQRCodeFound'] = var8;
                var6 = var10.bind(var4)(var6, var5);
                _fun0002_ip = 262; continue _fun0002;
 214:
                var8 = _closure1_slot5;
                var5 = {};
                var11 = _closure1_slot12;
                var12 = var11.scanner;
                var11 = new Array(2);
                var11[0] = var12;
                var12 = _closure1_slot12;
                var12 = var12.emptyView;
                var11[1] = var12;
                var5['style'] = var11;
                var6 = var10.bind(var4)(var8, var5);
 262:
                var5 = new Array(3);
                var5[0] = var6;
                var10 = _closure1_slot8;
                var12 = _closure1_slot1;
                var15 = _closure1_slot2;
                var6 = 21;
                var6 = var15[var6];
                var8 = var12.bind(var4)(var6);
                var6 = {};
                var11 = 'button';
                var6['accessibilityRole'] = var11;
                var20 = _closure1_slot0;
                var16 = 20;
                var11 = var15[var16];
                var11 = var20.bind(var4)(var11);
                var19 = var11.intl;
                var17 = var19.string;
                var11 = var15[var16];
                var11 = var20.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.cpT0Cg;
                var11 = var17.bind(var19)(var11);
                var6['accessibilityLabel'] = var11;
                var11 = 22;
                var11 = var15[var11];
                var11 = var12.bind(var4)(var11);
                var6['source'] = var11;
                var11 = _closure1_slot12;
                var17 = var11.closeButton;
                var11 = new Array(2);
                var11[0] = var17;
                var17 = {};
                var17['marginTop'] = var18;
                var11[1] = var17;
                var6['style'] = var11;
                var11 = 13;
                var11 = var15[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.pop;
                var6['onPress'] = var11;
                var6 = var10.bind(var4)(var8, var6);
                var5[1] = var6;
                var6 = null;
                if(!var9) { _fun0002_ip = 611; continue _fun0002 }
 447:
                var6 = null;
                if(var7) { _fun0002_ip = 611; continue _fun0002 }
 455:
                var9 = _closure1_slot8;
                var8 = _closure1_slot5;
                var7 = {};
                var10 = _closure1_slot12;
                var11 = var10.showHelp;
                var10 = new Array(2);
                var10[0] = var11;
                var11 = {};
                var12 = 8;
                var12 = var14 + var12;
                var11['marginBottom'] = var12;
                var10[1] = var11;
                var7['style'] = var10;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 23;
                var10 = var12[var10];
                var10 = var15.bind(var4)(var10);
                var11 = var10.LegacyText;
                var10 = {};
                var13 = _closure1_slot12;
                var13 = var13.text;
                var10['style'] = var13;
                var13 = var12[var16];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var16];
                var12 = var15.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.dklV0N;
                var12 = var13.bind(var14)(var12);
                var10['children'] = var12;
                var10 = var9.bind(var4)(var11, var10);
                var7['children'] = var10;
                var6 = var9.bind(var4)(var8, var7);
 611:
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();
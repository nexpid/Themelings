// app/modules/parent_tools/native/FamilyCenterBannerButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function FamilyCenterBannerButton(arg1) {
        var1 = arg1;
        var7 = var1.onPress;
        var8 = var1.text;
        var6 = var1.loading;
        var2 = _closure1_slot8;
        var4 = undefined;
        var12 = var2.bind(var4)();
        var _closure2_slot0 = var12;
        var3 = _closure1_slot7;
        var10 = _closure1_slot1;
        var11 = _closure1_slot2;
        var9 = 17;
        var1 = var11[var9];
        var2 = var10.bind(var4)(var1);
        var1 = {'shrink': true, 'style': null, 'cornerRadius': 4};
        var12 = var12.button;
        var1['style'] = var12;
        var9 = var11[var9];
        var9 = var10.bind(var4)(var9);
        var9 = var9.Sizes;
        var9 = var9.MEDIUM;
        var1['size'] = var9;
        var1['text'] = var8;
        var1['onPress'] = var7;
        var1['loading'] = var6;
        var5 = function renderIcon() {
            var4 = _closure1_slot7;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 18;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.QrCodeIcon;
            var1 = {'style': null, 'size': 'custom', 'color': 'white'};
            var5 = _closure2_slot0;
            var5 = var5.art;
            var1['style'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var1['renderIcon'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.FAMILY_CENTER_LINK_REQUEST_REGEX;
    var _closure1_slot3 = var8;
    var5 = var5.FamilyCenterAction;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.NativePermissionTypes;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot7 = var5;
    var5 = 16;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'height': 50, 'width': '100%', 'marginTop': 16};
    var5['button'] = var10;
    var10 = {'width': 18, 'height': 18, 'marginRight': 6};
    var5['art'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot8 = var5;
    var5 = 19;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/parent_tools/native/FamilyCenterBannerButton.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function FamilyCenterTeenQRCodeButton() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.useHasMaxConnections;
            var2 = var1.bind(var2)();
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot7;
            var3 = _closure1_slot9;
            var2 = {};
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 6;
            var7 = var10[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var9 = _closure1_slot1;
            var6 = 7;
            var6 = var10[var6];
            var6 = var9.bind(var5)(var6);
            var6 = var6.Ta9byc;
            var6 = var7.bind(var8)(var6);
            var2['text'] = var6;
            var6 = function onPress() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 8;
                var2 = var4[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var5 = var7.pushLazy;
                var8 = _closure1_slot0;
                var2 = 10;
                var2 = var4[var2];
                var9 = var8.bind(var1)(var2);
                var2 = 9;
                var8 = var4[var2];
                var2 = var4.paths;
                var2 = var9.bind(var1)(var8, var2);
                var2 = var5.bind(var7)(var2);
                var2 = 11;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot5;
                var3 = var2.FAMILY_CENTER_ACTION;
                var2 = {};
                var6 = _closure1_slot4;
                var6 = var6.ShowQRCodeModal;
                var2['action'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var3['FamilyCenterTeenQRCodeButton'] = var4;
    var2 = function FamilyCenterParentQRCodeButton() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.useHasMaxConnections;
            var1 = var1.bind(var2)();
            if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 3:
            var1 = function handleQrCodeScanSucess(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var4 = 8;
                    var4 = var1[var4];
                    var5 = undefined;
                    var6 = var2.bind(var5)(var4);
                    var4 = var6.pop;
                    var4 = var4.bind(var6)();
                    var9 = 12;
                    var1 = var1[var9];
                    var4 = var2.bind(var5)(var1);
                    var2 = var4.toURLSafe;
                    var1 = arg1;
                    var1 = var2.bind(var4)(var1);
                    var7 = null;
                    if(!(var7 == var1)) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    var1 = {};
case 5:
                    var8 = var1.hostname;
                    var6 = var1.pathname;
                    var2 = var7 != var8;
                    var1 = null;
                    if(!var2) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var2 = var7 != var6;
                    var1 = null;
                    if(!var2) { _fun0003_ip = 7; continue _fun0003 }
case 9:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.isDiscordHostname;
                    var2 = var2.bind(var4)(var8);
                    var1 = null;
                    if(!var2) { _fun0003_ip = 7; continue _fun0003 }
case 2:
                    var4 = var6.match;
                    var2 = _closure1_slot3;
                    var4 = var4.bind(var6)(var2);
                    var2 = null;
                    if(!(var7 !== var4)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 13;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.handleFamilyCenterQRCodeScan;
                    var3 = 'FamilyCenterQRCodeScan';
                    var3 = var4.bind(var5)(var6, var3);
                    var2 = undefined;
case 10:
                    var1 = var2;
case 7:
                    return var1;
                }
            };
            var _closure2_slot0 = var1;
            var3 = _closure1_slot7;
            var2 = _closure1_slot9;
            var1 = {};
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 6;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var9 = _closure1_slot1;
            var6 = 7;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.z4a9HB;
            var6 = var7.bind(var8)(var6);
            var1['text'] = var6;
            var5 = function onPress() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 11;
                var3 = var5[var1];
                var1 = undefined;
                var8 = var4.bind(var1)(var3);
                var7 = var8.track;
                var3 = _closure1_slot5;
                var6 = var3.FAMILY_CENTER_ACTION;
                var3 = {};
                var9 = _closure1_slot4;
                var9 = var9.ScanQRCodeButton;
                var3['action'] = var9;
                var3 = var7.bind(var8)(var6, var3);
                var3 = 14;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.requestPermission;
                var2 = _closure1_slot6;
                var2 = var2.CAMERA;
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        if(!var1) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var3 = 8;
                        var3 = var1[var3];
                        var6 = undefined;
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.pushLazy;
                        var5 = _closure1_slot0;
                        var2 = 10;
                        var2 = var1[var2];
                        var5 = var5.bind(var6)(var2);
                        var2 = 15;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var2 = var5.bind(var6)(var2, var1);
                        var1 = {};
                        var5 = false;
                        var1['showHelp'] = var5;
                        var5 = _closure2_slot0;
                        var1['onScanSuccess'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
case 12:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 4:
            var1 = null;
            return var1;
        }
    };
    var3['FamilyCenterParentQRCodeButton'] = var2;
    return var1;
})();
// app/modules/parent_tools/native/FamilyCenterBannerButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = function FamilyCenterTeenQRCodeButtonInner() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot14;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var7 = _closure1_slot3;
            var6 = var7.useCallback;
            var3 = function() {
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 11;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var7.bind(var1)(var2);
                var3 = var4.presentFailedToast;
                var2 = 12;
                var5 = var8[var2];
                var5 = var7.bind(var1)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var2 = var8[var2];
                var2 = var7.bind(var1)(var2);
                var2 = var2.t;
                var2 = var2.R0RpRX;
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = new Array(0);
            var8 = var6.bind(var7)(var3, var2);
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 13;
            var3 = var13[var2];
            var7 = var6.bind(var4)(var3);
            var3 = var7.useFamilyCenterActions;
            var3 = var3.bind(var7)();
            var9 = var3.getLinkCode;
            var _closure2_slot0 = var9;
            var2 = var13[var2];
            var7 = var6.bind(var4)(var2);
            var3 = var7.useFamilyCenterActions;
            var2 = {};
            var2['onError'] = var8;
            var2 = var3.bind(var7)(var2);
            var7 = var2.getLinkCode;
            var _closure2_slot1 = var7;
            var3 = 14;
            var2 = var13[var3];
            var12 = var6.bind(var4)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var11.bind(var12)(var8, var2);
            var _closure2_slot2 = var2;
            var8 = var13[var3];
            var14 = var6.bind(var4)(var8);
            var12 = var14.useStateFromStores;
            var8 = _closure1_slot6;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getLinkCode;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var12.bind(var14)(var11, var8);
            var _closure2_slot3 = var11;
            var3 = var13[var3];
            var14 = var6.bind(var4)(var3);
            var12 = var14.useStateFromStores;
            var3 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getLinkCodeExpiresAt;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var12.bind(var14)(var8, var3);
            var _closure2_slot4 = var8;
            var3 = 10;
            var3 = var13[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useUserQRLinkUrl;
            var6 = var3.bind(var6)();
            var15 = _closure1_slot3;
            var14 = var15.useEffect;
            var12 = function() {
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var3 = new Array(0);
            var3 = var14.bind(var15)(var12, var3);
            var12 = _closure1_slot1;
            var3 = 15;
            var3 = var13[var3];
            var3 = var12.bind(var4)(var3);
            var3 = var3.bind(var4)(var8, var9);
            var3 = null;
            var14 = var3 == var6;
            if(var14) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var14 = var3 == var11;
case 2:
            if(var14) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = var3 == var8;
case 4:
            var9 = _closure1_slot3;
            var6 = var9.useCallback;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var11;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure2_slot3;
                    var2 = var4 != var3;
case 6:
                    if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 16;
                    var3 = var5[var3];
                    var4 = undefined;
                    var8 = var6.bind(var4)(var3);
                    var7 = var8.track;
                    var3 = _closure1_slot10;
                    var6 = var3.FAMILY_CENTER_ACTION;
                    var3 = {};
                    var9 = _closure1_slot9;
                    var9 = var9.ShareLink;
                    var3['action'] = var9;
                    var3 = var7.bind(var8)(var6, var3);
                    var3 = _closure1_slot0;
                    var2 = 17;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.shareGuardianConnectLink;
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2, var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var6.bind(var9)(var2, var3);
            var6 = _closure1_slot3;
            var3 = var6.useCallback;
            var2 = new Array(3);
            var2[0] = var11;
            var2[1] = var8;
            var2[2] = var7;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var2 = _closure2_slot4;
                    var1 = var3 != var2;
case 6:
                    if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 16;
                    var3 = var2[var3];
                    var8 = undefined;
                    var9 = var4.bind(var8)(var3);
                    var7 = var9.track;
                    var3 = _closure1_slot10;
                    var5 = var3.FAMILY_CENTER_ACTION;
                    var3 = {};
                    var10 = _closure1_slot9;
                    var10 = var10.ShowQRCodeModal;
                    var3['action'] = var10;
                    var3 = var7.bind(var9)(var5, var3);
                    var3 = 18;
                    var3 = var2[var3];
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.openLazy;
                    var7 = _closure1_slot0;
                    var3 = 20;
                    var3 = var2[var3];
                    var7 = var7.bind(var8)(var3);
                    var3 = 19;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var7.bind(var8)(var3, var2);
                    var2 = _closure1_slot7;
                    var1 = {};
                    var7 = _closure2_slot3;
                    var1['linkCode'] = var7;
                    var7 = _closure2_slot4;
                    var1['expiresAt'] = var7;
                    var6 = _closure2_slot1;
                    var1['onRefresh'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot13;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 21;
            var1 = var13[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.Stack;
            var1 = {};
            var6 = 'horizontal';
            var1['direction'] = var6;
            var18 = _closure1_slot1;
            var6 = 9;
            var6 = var13[var6];
            var6 = var18.bind(var4)(var6);
            var6 = var6.space;
            var6 = var6.PX_8;
            var1['spacing'] = var6;
            var5 = var5.container;
            var1['style'] = var5;
            var8 = _closure1_slot12;
            var6 = 22;
            var5 = var13[var6];
            var5 = var11.bind(var4)(var5);
            var7 = var5.Button;
            var5 = {'grow': true, 'shrink': true, 'size': 'md', 'variant': 'primary'};
            var15 = 12;
            var16 = var13[var15];
            var16 = var11.bind(var4)(var16);
            var19 = var16.intl;
            var17 = var19.string;
            var16 = var13[var15];
            var16 = var11.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.Ej3B3Y;
            var16 = var17.bind(var19)(var16);
            var5['text'] = var16;
            var5['disabled'] = var14;
            var5['onPress'] = var9;
            var17 = _closure1_slot12;
            var9 = 23;
            var9 = var13[var9];
            var9 = var11.bind(var4)(var9);
            var16 = var9.ShareIcon;
            var9 = {'size': 'sm', 'color': 'control-primary-text-default'};
            var9 = var17.bind(var4)(var16, var9);
            var5['icon'] = var9;
            var9 = 'start';
            var5['iconPosition'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot12;
            var6 = var13[var6];
            var6 = var11.bind(var4)(var6);
            var7 = var6.Button;
            var6 = {'grow': true, 'shrink': true, 'size': 'md', 'variant': 'secondary'};
            var15 = var13[var15];
            var15 = var11.bind(var4)(var15);
            var17 = var15.intl;
            var16 = var17.string;
            var15 = 24;
            var15 = var13[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.wd4yrz;
            var15 = var16.bind(var17)(var15);
            var6['text'] = var15;
            var6['disabled'] = var14;
            var6['onPress'] = var12;
            var12 = _closure1_slot12;
            var10 = 25;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.QrCodeIcon;
            var10 = {'size': 'sm', 'color': 'control-secondary-text-default'};
            var10 = var12.bind(var4)(var11, var10);
            var6['icon'] = var10;
            var6['iconPosition'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var4 = function FamilyCenterBannerButton(arg1) {
        var1 = arg1;
        var13 = var1.onPress;
        var14 = var1.text;
        var10 = var1.loading;
        var1 = _closure1_slot15;
        var4 = undefined;
        var11 = var1.bind(var4)();
        var3 = _closure1_slot12;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var11.button;
        var1['style'] = var5;
        var7 = _closure1_slot12;
        var9 = _closure1_slot0;
        var12 = _closure1_slot2;
        var5 = 22;
        var5 = var12[var5];
        var5 = var9.bind(var4)(var5);
        var6 = var5.Button;
        var5 = {'grow': true, 'shrink': true, 'size': 'md', 'variant': 'primary'};
        var5['text'] = var14;
        var5['onPress'] = var13;
        var5['loading'] = var10;
        var10 = _closure1_slot12;
        var8 = 25;
        var8 = var12[var8];
        var8 = var9.bind(var4)(var8);
        var9 = var8.QrCodeIcon;
        var8 = {'style': null, 'size': 'custom', 'color': 'white'};
        var11 = var11.art;
        var8['style'] = var11;
        var8 = var10.bind(var4)(var9, var8);
        var5['icon'] = var8;
        var8 = 'start';
        var5['iconPosition'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var4;
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
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.CONNECT_GUARDIAN_BOTTOM_SHEET_KEY;
    var _closure1_slot7 = var8;
    var8 = var5.FAMILY_CENTER_LINK_REQUEST_REGEX;
    var _closure1_slot8 = var8;
    var5 = var5.FamilyCenterAction;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.NativePermissionTypes;
    var _closure1_slot11 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot12 = var8;
    var5 = var5.jsxs;
    var _closure1_slot13 = var5;
    var5 = 8;
    var8 = var7[var5];
    var10 = var6.bind(var1)(var8);
    var9 = var10.createStyles;
    var8 = {};
    var11 = {};
    var12 = 9;
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var11['marginTop'] = var12;
    var8['container'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot14 = var8;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'height': 50, 'width': '100%', 'marginTop': 16};
    var5['button'] = var10;
    var10 = {'width': 18, 'height': 18, 'marginRight': 6};
    var5['art'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot15 = var5;
    var5 = 32;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/parent_tools/native/FamilyCenterBannerButton.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function FamilyCenterTeenQRCodeButton() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.useHasMaxConnections;
            var3 = var1.bind(var3)();
            var1 = null;
            if(var3) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var4 = _closure1_slot12;
            var3 = _closure1_slot16;
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 12:
            return var1;
        }
    };
    var3['FamilyCenterTeenQRCodeButton'] = var4;
    var2 = function FamilyCenterParentQRCodeButton() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = function handleQrCodeScanSucess(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var4 = 26;
                    var4 = var1[var4];
                    var5 = undefined;
                    var6 = var2.bind(var5)(var4);
                    var4 = var6.pop;
                    var4 = var4.bind(var6)();
                    var9 = 27;
                    var1 = var1[var9];
                    var4 = var2.bind(var5)(var1);
                    var2 = var4.toURLSafe;
                    var1 = arg1;
                    var1 = var2.bind(var4)(var1);
                    var7 = null;
                    if(!(var7 == var1)) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                    var1 = {};
case 14:
                    var8 = var1.hostname;
                    var6 = var1.pathname;
                    var2 = var7 != var8;
                    var1 = null;
                    if(!var2) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                    var2 = var7 != var6;
                    var1 = null;
                    if(!var2) { _fun0006_ip = 16; continue _fun0006 }
case 18:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.isDiscordHostname;
                    var2 = var2.bind(var4)(var8);
                    var1 = null;
                    if(!var2) { _fun0006_ip = 16; continue _fun0006 }
case 19:
                    var4 = var6.match;
                    var2 = _closure1_slot8;
                    var4 = var4.bind(var6)(var2);
                    var2 = null;
                    if(!(var7 !== var4)) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 28;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.handleFamilyCenterQRCodeScan;
                    var3 = 'FamilyCenterQRCodeScan';
                    var3 = var4.bind(var5)(var6, var3);
                    var2 = undefined;
case 20:
                    var1 = var2;
case 16:
                    return var1;
                }
            };
            var _closure2_slot0 = var1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.useHasMaxConnections;
            var1 = var1.bind(var2)();
            if(var1) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var3 = _closure1_slot12;
            var2 = _closure1_slot17;
            var1 = {};
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 12;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var9 = _closure1_slot1;
            var6 = 24;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.z4a9HP;
            var6 = var7.bind(var8)(var6);
            var1['text'] = var6;
            var5 = function onPress() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 16;
                    var3 = var5[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.track;
                    var3 = _closure1_slot10;
                    var4 = var3.FAMILY_CENTER_ACTION;
                    var3 = {};
                    var8 = _closure1_slot9;
                    var8 = var8.ScanQRCodeButton;
                    var3['action'] = var8;
                    var3 = var6.bind(var7)(var4, var3);
                    var4 = _closure1_slot0;
                    var3 = 29;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isMetaQuest;
                    var4 = var3.bind(var4)();
                    var3 = _closure1_slot11;
                    if(var4) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                    var4 = var3.CAMERA;
                    _fun0007_ip = 26; continue _fun0007;
case 24:
                    var4 = var3.HEADSET_CAMERA;
case 26:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 30;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.requestPermission;
                    var4 = var2.bind(var3)(var4);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0008_ip = 27; continue _fun0008 }
case 28:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var3 = 26;
                            var3 = var1[var3];
                            var6 = undefined;
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.pushLazy;
                            var5 = _closure1_slot0;
                            var2 = 20;
                            var2 = var1[var2];
                            var5 = var5.bind(var6)(var2);
                            var2 = 31;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var2 = var5.bind(var6)(var2, var1);
                            var1 = {};
                            var5 = false;
                            var1['showHelp'] = var5;
                            var5 = _closure2_slot0;
                            var1['onScanSuccess'] = var5;
                            var1 = var3.bind(var4)(var2, var1);
case 27:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 22:
            var1 = null;
            return var1;
        }
    };
    var3['FamilyCenterParentQRCodeButton'] = var2;
    return var1;
})();
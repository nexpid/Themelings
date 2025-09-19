// app/modules/rtc/native/SecureFramesUserVerificationBottomSheet.tsx
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsSecureFramesUserVerification;
    var _closure1_slot9 = var7;
    var7 = var4.SECURE_FRAMES_PUBLIC_KEY_VERSION;
    var _closure1_slot10 = var7;
    var4 = var4.USER_VERIFIED_TOAST_KEY;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticsLocations;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': 80, 'width': 80, 'borderRadius': 40, 'alignItems': 'center', 'justifyContent': 'center', 'backgroundColor': null, 'marginBottom': 16};
    var11 = 40;
    var10 = 9;
    var10 = var6[var10];
    var10 = var12.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_MOD_STRONG;
    var9['backgroundColor'] = var10;
    var10 = 16;
    var4['iconContainer'] = var9;
    var9 = {'height': 48, 'width': 48};
    var4['icon'] = var9;
    var9 = {'padding': 16, 'justifyContent': 'center', 'alignItems': 'center'};
    var4['content'] = var9;
    var9 = {'textAlign': 'center', 'marginTop': 8, 'marginBottom': 40};
    var4['subtitle'] = var9;
    var9 = {};
    var9['marginTop'] = var11;
    var4['buttons'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['helpMessage'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rtc/native/SecureFramesUserVerificationBottomSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SecureFramesUserVerificationBottomSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var15 = var2.userId;
            var _closure2_slot0 = var15;
            var10 = var2.channelId;
            var _closure2_slot1 = var10;
            var9 = var2.guildId;
            var25 = var2.fingerprint;
            var _closure2_slot2 = var25;
            var2 = _closure1_slot15;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var _closure2_slot3 = var12;
            var8 = _closure1_slot0;
            var23 = _closure1_slot2;
            var2 = 10;
            var2 = var23[var2];
            var5 = var8.bind(var4)(var2);
            var3 = var5.useSecureFramesPairwiseFingerprint;
            var2 = {};
            var2['userId'] = var15;
            var2 = var3.bind(var5)(var2);
            var11 = var2.userKey;
            var _closure2_slot4 = var11;
            var16 = var2.fingerprint;
            var _closure2_slot5 = var16;
            var19 = var2.loading;
            var2 = 11;
            var2 = var23[var2];
            var5 = var8.bind(var4)(var2);
            var3 = var5.useIsSecureFramesUIEnabled;
            var2 = {};
            var2['channelId'] = var10;
            var20 = var3.bind(var5)(var2);
            var _closure2_slot6 = var20;
            var13 = 12;
            var2 = var23[var13];
            var5 = var8.bind(var4)(var2);
            var3 = var5.useIsUserSecureFramesVerified;
            var2 = {};
            var2['userId'] = var15;
            var2['channelId'] = var10;
            var3 = var3.bind(var5)(var2);
            var _closure2_slot7 = var3;
            var2 = 13;
            var2 = var23[var2];
            var6 = var8.bind(var4)(var2);
            var5 = var6.useIsPersistentSecureFramesFingerprint;
            var2 = {};
            var2['userId'] = var15;
            var2 = var5.bind(var6)(var2);
            var7 = var2.isOtherUserKeyPersistent;
            var _closure2_slot8 = var7;
            var18 = var2.loading;
            var2 = 14;
            var5 = var23[var2];
            var22 = var8.bind(var4)(var5);
            var21 = var22.useStateFromStores;
            var5 = _closure1_slot7;
            var17 = new Array(1);
            var17[0] = var5;
            var6 = function() {
                var2 = _closure1_slot7;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var24 = var21.bind(var22)(var17, var6);
            var _closure2_slot9 = var24;
            var6 = var23[var2];
            var21 = var8.bind(var4)(var6);
            var17 = var21.useStateFromStores;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var3 = _closure1_slot7;
                var2 = var3.isUserConnected;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21 = var17.bind(var21)(var6, var5);
            var _closure2_slot10 = var21;
            var5 = 15;
            var5 = var23[var5];
            var17 = var8.bind(var4)(var5);
            var6 = var17.useIsSecureFramesKeyInconsistent;
            var5 = {};
            var5['userId'] = var15;
            var22 = var6.bind(var17)(var5);
            var _closure2_slot11 = var22;
            var5 = _closure1_slot4;
            var17 = var5.useMemo;
            var6 = new Array(8);
            var6[0] = var25;
            var6[1] = var10;
            var6[2] = var16;
            var6[3] = var24;
            var6[4] = var22;
            var6[5] = var21;
            var6[6] = var20;
            var6[7] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 20; continue _fun0002 }
 13:
                    var1 = _closure2_slot9;
                    if(var1) { _fun0002_ip = 38; continue _fun0002 }
 20:
                    var1 = _closure1_slot9;
                    var1 = var1.CURRENT_USER_DISCONNECTED;
                    _fun0002_ip = 175; continue _fun0002;
 38:
                    var2 = _closure2_slot10;
                    if(var2) { _fun0002_ip = 60; continue _fun0002 }
 45:
                    var2 = _closure1_slot9;
                    var2 = var2.OTHER_USER_DISCONNECTED;
                    _fun0002_ip = 172; continue _fun0002;
 60:
                    var3 = _closure2_slot6;
                    if(var3) { _fun0002_ip = 82; continue _fun0002 }
 67:
                    var3 = _closure1_slot9;
                    var3 = var3.UNABLE_TO_VERIFY;
                    _fun0002_ip = 169; continue _fun0002;
 82:
                    var5 = _closure2_slot7;
                    if(var5) { _fun0002_ip = 153; continue _fun0002 }
 89:
                    var5 = _closure2_slot11;
                    if(var5) { _fun0002_ip = 138; continue _fun0002 }
 96:
                    var5 = _closure2_slot2;
                    var4 = _closure2_slot5;
                    if(!(var5 === var4)) { _fun0002_ip = 123; continue _fun0002 }
 108:
                    var4 = _closure1_slot9;
                    var4 = var4.MATCH;
                    _fun0002_ip = 136; continue _fun0002;
 123:
                    var5 = _closure1_slot9;
                    var4 = var5.FINGERPRINT_MISMATCH;
 136:
                    _fun0002_ip = 151; continue _fun0002;
 138:
                    var5 = _closure1_slot9;
                    var4 = var5.OTHER_USER_INCONSISTENT_KEYS;
 151:
                    _fun0002_ip = 166; continue _fun0002;
 153:
                    var5 = _closure1_slot9;
                    var4 = var5.OTHER_USER_ALREADY_VERIFIED;
 166:
                    var3 = var4;
 169:
                    var2 = var3;
 172:
                    var1 = var2;
 175:
                    return var1;
                }
            };
            var21 = var17.bind(var5)(var3, var6);
            var _closure2_slot12 = var21;
            var17 = var5.useEffect;
            var6 = new Array(1);
            var6[0] = var15;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getUser;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var17.bind(var5)(var3, var6);
            var2 = var23[var2];
            var17 = var8.bind(var4)(var2);
            var6 = var17.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var17)(var3, var2);
            var3 = _closure1_slot1;
            var2 = 17;
            var2 = var23[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useName;
            var6 = var2.bind(var3)(var9, var10, var6);
            var _closure2_slot13 = var6;
            var9 = var5.useMemo;
            var3 = new Array(2);
            var3[0] = var21;
            var3[1] = var6;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getUserVerifyStateText;
                var2 = _closure2_slot12;
                var1 = _closure2_slot13;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var9 = var9.bind(var5)(var2, var3);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var9, var2);
            var2 = 0;
            var25 = var3[var2];
            var2 = 1;
            var22 = var3[var2];
            var9 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var10;
            var3[1] = var21;
            var3[2] = var15;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot12;
                    var1 = _closure1_slot9;
                    var1 = var1.OTHER_USER_ALREADY_VERIFIED;
                    if(!(var1 !== var2)) { _fun0003_ip = 109; continue _fun0003 }
 24:
                    var1 = _closure1_slot9;
                    var1 = var1.MATCH;
                    if(!(var1 !== var2)) { _fun0003_ip = 109; continue _fun0003 }
 38:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackE2EEUserVerificationFailed;
                    var2 = {};
                    var7 = _closure2_slot1;
                    var2['channelId'] = var7;
                    var7 = _closure2_slot0;
                    var2['userId'] = var7;
                    var6 = _closure2_slot12;
                    var2['reason'] = var6;
                    var5 = _closure1_slot10;
                    var2['keyVersion'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
 109:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var9.bind(var5)(var2, var3);
            var9 = var5.useMemo;
            var3 = new Array(2);
            var3[0] = var21;
            var2 = var12.icon;
            var3[1] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot12;
                    var1 = _closure1_slot9;
                    var1 = var1.OTHER_USER_ALREADY_VERIFIED;
                    if(!(var1 !== var2)) { _fun0004_ip = 124; continue _fun0004 }
 24:
                    var1 = _closure1_slot9;
                    var1 = var1.MATCH;
                    if(!(var1 !== var2)) { _fun0004_ip = 124; continue _fun0004 }
 38:
                    var4 = _closure1_slot13;
                    var2 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 21;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.XLargeBoldIcon;
                    var1 = {};
                    var7 = _closure2_slot3;
                    var7 = var7.icon;
                    var1['style'] = var7;
                    var8 = _closure1_slot1;
                    var7 = 9;
                    var7 = var9[var7];
                    var7 = var8.bind(var3)(var7);
                    var7 = var7.colors;
                    var7 = var7.TEXT_DANGER;
                    var1['color'] = var7;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
 124:
                    var4 = _closure1_slot13;
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 20;
                    var1 = var7[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.CheckmarkLargeBoldIcon;
                    var1 = {};
                    var6 = _closure2_slot3;
                    var6 = var6.icon;
                    var1['style'] = var6;
                    var6 = _closure1_slot1;
                    var5 = 9;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.colors;
                    var5 = var5.TEXT_POSITIVE;
                    var1['color'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var9 = var9.bind(var5)(var2, var3);
            var17 = var5.useCallback;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var2 = new Array(0);
            var17 = var17.bind(var5)(var3, var2);
            var3 = var5.useCallback;
            var2 = new Array(5);
            var2[0] = var10;
            var2[1] = var11;
            var2[2] = var7;
            var2[3] = var6;
            var2[4] = var15;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot1;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0005_ip = 24; continue _fun0005 }
 16:
                    var2 = _closure2_slot4;
                    var1 = var3 != var2;
 24:
                    if(!var1) { _fun0005_ip = 248; continue _fun0005 }
 30:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 18;
                    var1 = var10[var1];
                    var5 = undefined;
                    var12 = var9.bind(var5)(var1);
                    var11 = var12.addVerification;
                    var17 = _closure2_slot0;
                    var16 = _closure2_slot4;
                    var15 = _closure2_slot8;
                    var14 = _closure2_slot1;
                    var1 = _closure1_slot12;
                    var13 = var1.DEEP_LINK;
                    var18 = var12;
                    var1 = var18[var11](var17, var16, var15, var14, var13, var12);
                    var2 = _closure1_slot1;
                    var1 = 22;
                    var1 = var10[var1];
                    var3 = var2.bind(var5)(var1);
                    var1 = var3.hideActionSheet;
                    var1 = var1.bind(var3)();
                    var1 = 23;
                    var1 = var10[var1];
                    var3 = var2.bind(var5)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var4 = _closure1_slot11;
                    var1['key'] = var4;
                    var4 = 'text-positive';
                    var1['iconColor'] = var4;
                    var4 = 24;
                    var4 = var10[var4];
                    var4 = var9.bind(var5)(var4);
                    var4 = var4.CircleCheckIcon;
                    var1['IconComponent'] = var4;
                    var4 = 25;
                    var6 = var10[var4];
                    var6 = var9.bind(var5)(var6);
                    var7 = var6.intl;
                    var6 = var7.formatToPlainString;
                    var4 = var10[var4];
                    var4 = var9.bind(var5)(var4);
                    var4 = var4.t;
                    var5 = var4.Gwu139;
                    var4 = {};
                    var8 = _closure2_slot13;
                    var4['username'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var1['content'] = var4;
                    var1 = var2.bind(var3)(var1);
 248:
                    var1 = undefined;
                    return var1;
                }
            };
            var20 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot13;
            var1 = 26;
            var1 = var23[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var5 = true;
            var1['startExpanded'] = var5;
            var5 = 27;
            var5 = var23[var5];
            var5 = var8.bind(var4)(var5);
            var6 = var5.BottomSheetTitleHeader;
            var5 = {};
            var10 = null;
            var5['title'] = var10;
            var7 = 28;
            var7 = var23[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.ActionSheetCloseButton;
            var7 = {};
            var7['onPress'] = var17;
            var7 = var3.bind(var4)(var8, var7);
            var5['leading'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['header'] = var5;
            var7 = _closure1_slot14;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var12.content;
            var5['style'] = var8;
            var8 = {};
            var23 = var12.iconContainer;
            var8['style'] = var23;
            if(var18) { _fun0001_ip = 843; continue _fun0001 }
 836:
            if(var19) { _fun0001_ip = 843; continue _fun0001 }
 839:
            if(!(var10 == var16)) { _fun0001_ip = 859; continue _fun0001 }
 843:
            var19 = _closure1_slot13;
            var16 = _closure1_slot5;
            var10 = {};
            var9 = var19.bind(var4)(var16, var10);
 859:
            var8['children'] = var9;
            var9 = var3.bind(var4)(var6, var8);
            var8 = new Array(5);
            var8[0] = var9;
            var16 = _closure1_slot13;
            var24 = _closure1_slot0;
            var19 = _closure1_slot2;
            var9 = 29;
            var10 = var19[var9];
            var10 = var24.bind(var4)(var10);
            var23 = var10.Text;
            var10 = {'variant': 'heading-xl/bold', 'color': 'header-primary'};
            var10['children'] = var25;
            var10 = var16.bind(var4)(var23, var10);
            var8[1] = var10;
            var9 = var19[var9];
            var9 = var24.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            var23 = var12.subtitle;
            var9['style'] = var23;
            var9['children'] = var22;
            var9 = var16.bind(var4)(var10, var9);
            var8[2] = var9;
            var10 = _closure1_slot1;
            var9 = 30;
            var9 = var19[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var22 = var12.helpMessage;
            var9['style'] = var22;
            var9['userId'] = var15;
            var9['userKey'] = var11;
            var9 = var16.bind(var4)(var10, var9);
            var8[3] = var9;
            var11 = _closure1_slot14;
            var9 = 31;
            var9 = var19[var9];
            var9 = var24.bind(var4)(var9);
            var10 = var9.Stack;
            var9 = {};
            var9['spacing'] = var13;
            var12 = var12.buttons;
            var9['style'] = var12;
            var13 = 32;
            var12 = var19[var13];
            var12 = var24.bind(var4)(var12);
            var15 = var12.Button;
            var12 = {};
            var22 = 'primary';
            var12['variant'] = var22;
            var12['onPress'] = var20;
            var20 = 25;
            var22 = var19[var20];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var19 = var19[var20];
            var19 = var24.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.0tvNAg;
            var19 = var22.bind(var23)(var19);
            var12['text'] = var19;
            if(var18) { _fun0001_ip = 1173; continue _fun0001 }
 1159:
            var19 = _closure1_slot9;
            var19 = var19.MATCH;
            var18 = var21 !== var19;
 1173:
            var12['disabled'] = var18;
            var15 = var16.bind(var4)(var15, var12);
            var12 = new Array(2);
            var12[0] = var15;
            var15 = _closure1_slot13;
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = var16[var13];
            var13 = var19.bind(var4)(var13);
            var14 = var13.Button;
            var13 = {};
            var18 = 'secondary';
            var13['variant'] = var18;
            var13['onPress'] = var17;
            var17 = var16[var20];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var20];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.ETE/oK;
            var16 = var17.bind(var18)(var16);
            var13['text'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[4] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
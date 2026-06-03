// app/modules/guild_profile/native/components/GuildProfileActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.ActivityIndicator;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var7 = var6[var4];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildProfileFetchStatus;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.INVALID_ACCESS_ERROR_CODE;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VerticalGradient;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 40;
    var9['paddingTop'] = var10;
    var4['loadingContainer'] = var9;
    var9 = {'paddingHorizontal': 16, 'paddingVertical': 40};
    var4['footerContainer'] = var9;
    var9 = {};
    var10 = 9;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var10;
    var4['scrollView'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_profile/native/components/GuildProfileActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildProfileActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var24 = var2.guildId;
            var _closure2_slot0 = var24;
            var20 = var2.context;
            var19 = var2.inviteKey;
            var2 = _closure1_slot14;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var18 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 11;
            var2 = var16[var2];
            var2 = var18.bind(var4)(var2);
            var15 = var2.bind(var4)();
            var12 = _closure1_slot0;
            var2 = 12;
            var2 = var16[var2];
            var3 = var12.bind(var4)(var2);
            var2 = var3.useGuildProfile;
            var2 = var2.bind(var3)(var24);
            var21 = var2.guildProfile;
            var3 = var2.fetchGuildProfile;
            var _closure2_slot1 = var3;
            var13 = var2.fetchStatus;
            var2 = 13;
            var5 = var16[var2];
            var9 = var12.bind(var4)(var5);
            var8 = var9.useStateFromStores;
            var5 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getErrorCode;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var9)(var7, var5);
            var14 = 14;
            var5 = var16[var14];
            var11 = var12.bind(var4)(var5);
            var9 = var11.useToken;
            var5 = 9;
            var7 = var16[var5];
            var7 = var18.bind(var4)(var7);
            var7 = var7.colors;
            var7 = var7.INTERACTIVE_TEXT_HOVER;
            var11 = var9.bind(var11)(var7, var15);
            var7 = 15;
            var7 = var16[var7];
            var9 = var12.bind(var4)(var7);
            var7 = var9.useBottomSheetRef;
            var9 = var7.bind(var9)();
            var7 = var9.bottomSheetRef;
            var9 = var9.bottomSheetClose;
            var15 = 16;
            var15 = var16[var15];
            var17 = var18.bind(var4)(var15);
            var15 = 17;
            var15 = var16[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.GUILD_PROFILE;
            var15 = var17.bind(var4)(var15);
            var15 = var15.analyticsLocations;
            var _closure2_slot2 = var15;
            var14 = var16[var14];
            var17 = var12.bind(var4)(var14);
            var14 = var17.useToken;
            var5 = var16[var5];
            var5 = var18.bind(var4)(var5);
            var5 = var5.colors;
            var5 = var5.BACKGROUND_BASE_LOW;
            var14 = var14.bind(var17)(var5);
            var _closure2_slot3 = var14;
            var2 = var16[var2];
            var22 = var12.bind(var4)(var2);
            var18 = var22.useStateFromStores;
            var2 = _closure1_slot7;
            var17 = new Array(1);
            var17[0] = var2;
            var5 = new Array(1);
            var5[0] = var24;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot7;
                    var3 = var4.isLurking;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var5 = var18.bind(var22)(var17, var2, var5);
            var2 = 18;
            var2 = var16[var2];
            var16 = var12.bind(var4)(var2);
            var12 = var16.useMobileLurkerServerPreview;
            var2 = 'GuildProfileActionSheet';
            var2 = var12.bind(var16)(var2);
            var2 = var2.enabled;
            var12 = var5;
            if(!var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = var2;
case 4:
            var16 = {};
            var16['enabled'] = var12;
            var2 = null;
            var5 = var2 != var21;
            var16['isContentReady'] = var5;
            var16['bottomSheetRef'] = var7;
            var5 = function useFitSheetToContent(arg1) {
                var3 = arg1;
                var11 = var3.enabled;
                var _closure3_slot0 = var11;
                var2 = var3.isContentReady;
                var _closure3_slot1 = var2;
                var8 = var3.bottomSheetRef;
                var _closure3_slot2 = var8;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 10;
                var3 = var6[var3];
                var13 = undefined;
                var3 = var4.bind(var13)(var3);
                var3 = var3.bind(var13)();
                var3 = var3.height;
                var _closure3_slot3 = var3;
                var7 = _closure1_slot4;
                var4 = var7.useState;
                var14 = null;
                var4 = var4.bind(var7)(var14);
                var12 = _closure1_slot3;
                var9 = 2;
                var4 = var12.bind(var13)(var4, var9);
                var6 = 0;
                var10 = var4[var6];
                var _closure3_slot4 = var10;
                var5 = 1;
                var4 = var4[var5];
                var _closure3_slot5 = var4;
                var4 = var7.useState;
                var4 = var4.bind(var7)(var14);
                var4 = var12.bind(var13)(var4, var9);
                var9 = var4[var6];
                var _closure3_slot6 = var9;
                var4 = var4[var5];
                var _closure3_slot7 = var4;
                var5 = var7.useRef;
                var4 = false;
                var4 = var5.bind(var7)(var4);
                var _closure3_slot8 = var4;
                var5 = var7.useMemo;
                var4 = new Array(4);
                var4[0] = var11;
                var4[1] = var10;
                var4[2] = var9;
                var4[3] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = _closure3_slot0;
                        if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                        var1 = undefined;
                        return var1;
case 6:
                        var1 = _closure3_slot4;
                        var3 = null;
                        if(!(var3 != var1)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var1 = _closure3_slot6;
                        if(!(var3 != var1)) { _fun0003_ip = 8; continue _fun0003 }
case 10:
                        var1 = global;
                        var4 = var1.Math;
                        var3 = var4.round;
                        var7 = var1.Math;
                        var6 = var7.min;
                        var8 = _closure3_slot3;
                        var5 = 0.95;
                        var5 = var5 * var8;
                        var10 = var1.Math;
                        var9 = var10.max;
                        var1 = 0.65;
                        var8 = var1 * var8;
                        var11 = _closure3_slot4;
                        var1 = _closure3_slot6;
                        var1 = var11 + var1;
                        var1 = var9.bind(var10)(var8, var1);
                        var1 = var6.bind(var7)(var5, var1);
                        var1 = var3.bind(var4)(var1);
                        _fun0003_ip = 11; continue _fun0003;
case 8:
                        var3 = global;
                        var4 = var3.Math;
                        var3 = var4.round;
                        var5 = _closure3_slot3;
                        var2 = 0.65;
                        var2 = var2 * var5;
                        var1 = var3.bind(var4)(var2);
case 11:
                        return var1;
                    }
                };
                var4 = var5.bind(var7)(var3, var4);
                var5 = var7.useCallback;
                var3 = new Array(2);
                var3[0] = var11;
                var3[1] = var2;
                var2 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure3_slot0;
                        if(!var2) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                        var2 = _closure3_slot1;
case 6:
                        if(!var2) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                        var3 = _closure3_slot5;
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var1 = var1.layout;
                        var2 = var1.height;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
case 12:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var5.bind(var7)(var2, var3);
                var6 = var7.useCallback;
                var5 = new Array(1);
                var5[0] = var11;
                var2 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = _closure3_slot0;
                        if(!var2) { _fun0005_ip = 14; continue _fun0005 }
case 7:
                        var3 = _closure3_slot7;
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var1 = var1.layout;
                        var2 = var1.height;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
case 14:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var6.bind(var7)(var2, var5);
                var6 = var7.useEffect;
                var5 = new Array(4);
                var5[0] = var11;
                var5[1] = var10;
                var5[2] = var9;
                var5[3] = var8;
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = _closure3_slot0;
                        if(!var2) { _fun0006_ip = 15; continue _fun0006 }
case 7:
                        var4 = _closure3_slot4;
                        var3 = null;
                        var2 = var3 != var4;
case 15:
                        if(!var2) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                        var4 = _closure3_slot6;
                        var3 = null;
                        var2 = var3 != var4;
case 16:
                        if(!var2) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                        var2 = _closure3_slot8;
                        var2 = var2.current;
                        if(var2) { _fun0006_ip = 18; continue _fun0006 }
case 12:
                        var2 = _closure3_slot8;
                        var1 = true;
                        var2['current'] = var1;
                        var1 = global;
                        var3 = var1.requestAnimationFrame;
                        var2 = undefined;
                        var1 = function() {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                var1 = _closure3_slot2;
                                var3 = var1.current;
                                var1 = null;
                                if(!(var1 != var3)) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                                var2 = var3.snapToIndex;
                                var1 = 0;
                                var1 = var2.bind(var3)(var1);
case 20:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var3.bind(var2)(var1);
case 18:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var6.bind(var7)(var1, var5);
                var1 = {};
                var1['startHeight'] = var4;
                var1['handleContentLayout'] = var3;
                var1['handleFooterLayout'] = var2;
                return var1;
            };
            var17 = var5.bind(var4)(var16);
            var5 = var17.startHeight;
            var16 = var17.handleContentLayout;
            var17 = var17.handleFooterLayout;
            var23 = _closure1_slot4;
            var22 = var23.useEffect;
            var18 = new Array(2);
            var18[0] = var24;
            var18[1] = var15;
            var15 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.trackGuildProfileViewed;
                var3 = _closure2_slot0;
                var2 = _closure2_slot2;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var15 = var22.bind(var23)(var15, var18);
            var22 = var23.useCallback;
            var18 = new Array(1);
            var18[0] = var3;
            var15 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var18 = var22.bind(var23)(var15, var18);
            var22 = var23.useEffect;
            var15 = new Array(1);
            var15[0] = var3;
            var3 = function() {
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var3 = var22.bind(var23)(var3, var15);
            var3 = _closure1_slot9;
            var3 = var3.NOT_FETCHED;
            if(!(var13 !== var3)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var3 = _closure1_slot9;
            var3 = var3.FETCHING;
            if(!(var13 !== var3)) { _fun0001_ip = 22; continue _fun0001 }
case 24:
            if(!(var2 == var21)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var3 = _closure1_slot10;
            if(!(var8 !== var3)) { _fun0001_ip = 27; continue _fun0001 }
case 25:
            if(!(var2 != var21)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var15 = _closure1_slot12;
            var13 = _closure1_slot1;
            var22 = _closure1_slot2;
            var3 = 24;
            var3 = var22[var3];
            var8 = var13.bind(var4)(var3);
            var3 = {};
            var3['guildProfile'] = var21;
            var3['isLurkerServerPreview'] = var12;
            var8 = var15.bind(var4)(var8, var3);
            var3 = 25;
            var3 = var22[var3];
            var13 = var13.bind(var4)(var3);
            var3 = {};
            var3['profile'] = var21;
            var3['context'] = var20;
            var3['inviteKey'] = var19;
            var3['isLurkerServerPreview'] = var12;
            var13 = var15.bind(var4)(var13, var3);
            var15 = var8;
            _fun0001_ip = 30; continue _fun0001;
case 28:
            var19 = _closure1_slot12;
            var8 = _closure1_slot1;
            var24 = _closure1_slot2;
            var3 = 23;
            var3 = var24[var3];
            var8 = var8.bind(var4)(var3);
            var3 = {};
            var3['onRetry'] = var18;
            var15 = var19.bind(var4)(var8, var3);
            var23 = _closure1_slot0;
            var3 = 21;
            var3 = var24[var3];
            var3 = var23.bind(var4)(var3);
            var18 = var3.Button;
            var3 = {};
            var20 = 'lg';
            var3['size'] = var20;
            var20 = 22;
            var21 = var24[var20];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var24[var20];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.cpT0Cq;
            var20 = var21.bind(var22)(var20);
            var3['text'] = var20;
            var3['onPress'] = var9;
            var13 = var19.bind(var4)(var18, var3);
            _fun0001_ip = 30; continue _fun0001;
case 27:
            var19 = _closure1_slot12;
            var8 = _closure1_slot1;
            var24 = _closure1_slot2;
            var3 = 20;
            var3 = var24[var3];
            var8 = var8.bind(var4)(var3);
            var3 = {};
            var15 = var19.bind(var4)(var8, var3);
            var23 = _closure1_slot0;
            var3 = 21;
            var3 = var24[var3];
            var3 = var23.bind(var4)(var3);
            var18 = var3.Button;
            var3 = {};
            var20 = 'lg';
            var3['size'] = var20;
            var20 = 22;
            var21 = var24[var20];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var24[var20];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.cpT0Cq;
            var20 = var21.bind(var22)(var20);
            var3['text'] = var20;
            var3['onPress'] = var9;
            var13 = var19.bind(var4)(var18, var3);
            _fun0001_ip = 30; continue _fun0001;
case 22:
            var18 = _closure1_slot12;
            var8 = _closure1_slot5;
            var3 = {};
            var19 = var10.loadingContainer;
            var3['style'] = var19;
            var20 = _closure1_slot6;
            var19 = {'animating': true, 'size': 'large'};
            var19 = var18.bind(var4)(var20, var19);
            var3['children'] = var19;
            var15 = var18.bind(var4)(var8, var3);
            var13 = null;
case 30:
            var8 = _closure1_slot4;
            var3 = var8.useMemo;
            var2 = new Array(1);
            var2[0] = var14;
            var1 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 26;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = _closure2_slot3;
                var4 = var1.bind(var3)(var2);
                var3 = var4.alpha;
                var1 = 0;
                var3 = var3.bind(var4)(var1);
                var1 = var3.hex;
                var3 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var14 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 27;
            var1 = var18[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {'ref': null, 'scrollable': true, 'handleDisabled': true};
            var1['ref'] = var7;
            var1['startHeight'] = var5;
            var8 = _closure1_slot12;
            var7 = _closure1_slot1;
            var5 = 28;
            var5 = var18[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var18 = _closure1_slot11;
            var18 = var18.START;
            var5['start'] = var18;
            var18 = {'x': 0, 'y': 0.5};
            var5['end'] = var18;
            var18 = var10.footerContainer;
            var5['style'] = var18;
            var5['colors'] = var14;
            var14 = undefined;
            if(!var12) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var14 = var17;
case 31:
            var5['onLayout'] = var14;
            var5['children'] = var13;
            var5 = var8.bind(var4)(var7, var5);
            var1['footer'] = var5;
            var8 = _closure1_slot12;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 29;
            var5 = var13[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.BottomSheetScrollView;
            var5 = {};
            var10 = var10.scrollView;
            var5['style'] = var10;
            var10 = var15;
            if(!var12) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var14 = _closure1_slot12;
            var13 = _closure1_slot5;
            var12 = {};
            var12['onLayout'] = var16;
            var12['children'] = var15;
            var10 = var14.bind(var4)(var13, var12);
case 33:
            var5['children'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot12;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 30;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.ActionSheetHeaderBar;
            var6 = {};
            var10 = 'floating';
            var6['variant'] = var10;
            var10 = {};
            var10['backgroundColor'] = var11;
            var6['tabStyle'] = var10;
            var6['onPress'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
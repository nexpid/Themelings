// app/modules/instant_invite/native/components/InstantInviteActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function Loading() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = _closure1_slot16;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var6 = new Array(0);
            var2 = 12;
            var1 = 10;
            var3 = 0;
 25:
            var8 = var6.push;
            var11 = _closure1_slot13;
            var9 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var2];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var5['row'] = var3;
            var5 = var11.bind(var4)(var9, var5, var3);
            var5 = var8.bind(var6)(var5);
            var3 = var3 + 1;
            if(var3 < var1) { _fun0001_ip = 25; continue _fun0001 }
 77:
            var3 = _closure1_slot15;
            var2 = _closure1_slot14;
            var1 = {};
            var9 = _closure1_slot13;
            var8 = _closure1_slot5;
            var5 = {};
            var11 = var10.placeholderHeader;
            var5['style'] = var11;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(3);
            var5[0] = var8;
            var9 = _closure1_slot13;
            var8 = _closure1_slot5;
            var7 = {};
            var10 = var10.placeholderLabel;
            var7['style'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5[1] = var7;
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var13 = 1;
    var7 = var6[var13];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.ScrollView;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTargetTypes;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var7 = var4.Fragment;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': 16, 'width': '80%', 'margin': 16, 'marginBottom': 8};
    var11 = 11;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var9['borderRadius'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_MUTED;
    var9['backgroundColor'] = var14;
    var4['placeholderHeader'] = var9;
    var9 = {'height': 16, 'width': '40%', 'margin': 16};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var9['borderRadius'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_MUTED;
    var9['backgroundColor'] = var14;
    var4['placeholderLabel'] = var9;
    var9 = {};
    var14 = 'transparent';
    var9['backgroundColor'] = var14;
    var4['errorEmptyState'] = var9;
    var9 = {};
    var9['borderTopWidth'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MODIFIER_ACCENT;
    var9['borderColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['marginTop'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['paddingVertical'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9['paddingHorizontal'] = var13;
    var13 = 'column';
    var9['flexDirection'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9['gap'] = var13;
    var4['searchAndShareContainer'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['paddingBottom'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var9['paddingHorizontal'] = var11;
    var4['inviteAgeText'] = var9;
    var9 = {};
    var9['paddingVertical'] = var10;
    var4['shareApps'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = 37;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/instant_invite/native/components/InstantInviteActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function InstantInviteActionSheet(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var37 = var1.channel;
            var _closure2_slot0 = var37;
            var8 = var1.source;
            var _closure2_slot1 = var8;
            var31 = var1.vanityURLCode;
            var _closure2_slot2 = var31;
            var3 = var1.guildScheduledEventId;
            var _closure2_slot3 = var3;
            var34 = var1.targetApplicationId;
            var36 = var1.code;
            var _closure2_slot4 = var36;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var1 = _closure1_slot16;
            var14 = var1.bind(var4)();
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 13;
            var1 = var3[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var17 = var1.bottom;
            var1 = 14;
            var5 = var3[var1];
            var7 = var6.bind(var4)(var5);
            var5 = 15;
            var5 = var3[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.INSTANT_INVITE_MODAL;
            var5 = var7.bind(var4)(var5);
            var5 = var5.analyticsLocations;
            var _closure2_slot5 = var5;
            var16 = 16;
            var3 = var3[var16];
            var6 = var6.bind(var4)(var3);
            var35 = null;
            if(!(var35 == var34)) { _fun0002_ip = 177; continue _fun0002 }
 171:
            var3 = new Array(0);
            _fun0002_ip = 188; continue _fun0002;
 177:
            var7 = new Array(1);
            var7[0] = var34;
            var3 = var7;
 188:
            var6 = var6.bind(var4)(var3);
            var3 = _closure1_slot3;
            var7 = 1;
            var6 = var3.bind(var4)(var6, var7);
            var3 = 0;
            var38 = var6[var3];
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 17;
            var6 = var11[var9];
            var19 = var10.bind(var4)(var6);
            var18 = var19.useStateFromStores;
            var6 = _closure1_slot10;
            var15 = new Array(3);
            var15[0] = var6;
            var6 = _closure1_slot8;
            var15[1] = var6;
            var12 = _closure1_slot7;
            var15[2] = var12;
            var12 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot4;
                    var5 = null;
                    if(!(var5 == var2)) { _fun0003_ip = 234; continue _fun0003 }
 16:
                    var3 = _closure2_slot0;
                    var2 = var3.isGuildStageVoice;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0003_ip = 120; continue _fun0003 }
 33:
                    var7 = _closure1_slot10;
                    var6 = var7.can;
                    var3 = _closure1_slot12;
                    var4 = var3.CREATE_INSTANT_INVITE;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var7)(var4, var3);
                    if(var3) { _fun0003_ip = 120; continue _fun0003 }
 69:
                    var4 = _closure1_slot7;
                    var3 = var4.getStageInstanceByChannel;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var4 = var5 == var2;
                    var3 = undefined;
                    if(var4) { _fun0003_ip = 108; continue _fun0003 }
 102:
                    var3 = var2.invite_code;
 108:
                    if(!(var5 != var3)) { _fun0003_ip = 120; continue _fun0003 }
 112:
                    var2 = var2.invite_code;
                    return var2;
 120:
                    var2 = _closure2_slot2;
                    if(!(var5 == var2)) { _fun0003_ip = 228; continue _fun0003 }
 128:
                    var3 = _closure1_slot8;
                    var2 = var3.getInvite;
                    var7 = var2.bind(var3)();
                    var3 = var5 != var7;
                    var6 = undefined;
                    var2 = undefined;
                    if(!var3) { _fun0003_ip = 226; continue _fun0003 }
 156:
                    var3 = _closure2_slot3;
                    if(!(var5 == var3)) { _fun0003_ip = 171; continue _fun0003 }
 164:
                    var3 = var7.code;
                    _fun0003_ip = 223; continue _fun0003;
 171:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 18;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.generateInviteKeyFromExtraData;
                    var4 = {};
                    var7 = var7.code;
                    var4['baseCode'] = var7;
                    var7 = _closure2_slot3;
                    var4['guildScheduledEventId'] = var7;
                    var3 = var5.bind(var6)(var4);
 223:
                    var2 = var3;
 226:
                    return var2;
 228:
                    var2 = _closure2_slot2;
                    return var2;
 234:
                    var1 = _closure2_slot4;
                    return var1;
                }
            };
            var26 = var18.bind(var19)(var15, var12);
            _closure2_slot6 = var26;
            var9 = var11[var9];
            var11 = var10.bind(var4)(var9);
            var10 = var11.useStateFromStores;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getError;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var10.bind(var11)(var9, var6);
            var6 = var35 != var26;
            var21 = null;
            if(!var6) { _fun0002_ip = 351; continue _fun0002 }
 326:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 19;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var21 = var6.bind(var4)(var26);
 351:
            var6 = var35 != var21;
            var9 = '';
            if(!var6) { _fun0002_ip = 393; continue _fun0002 }
 362:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 20;
            var6 = var11[var6];
            var10 = var10.bind(var4)(var6);
            var6 = var10.getShareMessage;
            var9 = var6.bind(var10)(var21);
 393:
            _closure2_slot7 = var9;
            var10 = var35 != var34;
            var6 = null;
            if(!var10) { _fun0002_ip = 416; continue _fun0002 }
 406:
            var10 = _closure1_slot11;
            var6 = var10.EMBEDDED_APPLICATION;
 416:
            var11 = _closure1_slot4;
            var18 = var11.useCallback;
            var15 = new Array(2);
            var15[0] = var37;
            var15[1] = var5;
            var10 = function(arg1) {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 21;
                var2 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var2 = var5.hideActionSheet;
                var2 = var2.bind(var5)();
                var2 = 22;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var4 = arg1;
                var2['userId'] = var4;
                var5 = _closure2_slot0;
                var5 = var5.id;
                var2['channelId'] = var5;
                var4 = _closure2_slot5;
                var2['sourceAnalyticsLocations'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var25 = var18.bind(var11)(var10, var15);
            var18 = var11.useCallback;
            var15 = new Array(4);
            var15[0] = var37;
            var15[1] = var26;
            var15[2] = var9;
            var15[3] = var8;
            var10 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot6;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 126; continue _fun0004 }
 13:
                    var3 = {};
                    var2 = _closure2_slot0;
                    var3['channel'] = var2;
                    var4 = _closure2_slot6;
                    var3['code'] = var4;
                    var4 = _closure2_slot7;
                    var3['message'] = var4;
                    var1 = _closure2_slot1;
                    var3['location'] = var1;
                    var1 = arg1;
                    var6 = undefined;
                    var1 = var1.bind(var6)(var3);
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 23;
                    var1 = var7[var1];
                    var4 = var5.bind(var6)(var1);
                    var3 = var4.setHubProgressActionComplete;
                    var1 = var2.getGuildId;
                    var2 = var1.bind(var2)();
                    var1 = 24;
                    var1 = var7[var1];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.HubProgressStep;
                    var1 = var1.INVITE_USER;
                    var1 = var3.bind(var4)(var2, var1);
 126:
                    var1 = undefined;
                    return var1;
                }
            };
            var29 = var18.bind(var11)(var10, var15);
            var18 = var11.useCallback;
            var15 = new Array(1);
            var15[0] = var37;
            var10 = function() {
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 23;
                var2 = var7[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var2);
                var4 = var5.setHubProgressActionComplete;
                var3 = _closure2_slot0;
                var2 = var3.getGuildId;
                var3 = var2.bind(var3)();
                var2 = 24;
                var2 = var7[var2];
                var2 = var6.bind(var1)(var2);
                var2 = var2.HubProgressStep;
                var2 = var2.INVITE_USER;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var24 = var18.bind(var11)(var10, var15);
            var18 = var11.useCallback;
            var15 = new Array(3);
            var15[0] = var26;
            var15[1] = var37;
            var15[2] = var8;
            var10 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.handleCopy;
                var3 = _closure2_slot6;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var20 = var18.bind(var11)(var10, var15);
            var15 = var11.useCallback;
            var10 = new Array(4);
            var10[0] = var26;
            var10[1] = var37;
            var10[2] = var9;
            var10[3] = var8;
            var9 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.handleOpenShareSheet;
                var10 = _closure2_slot6;
                var9 = _closure2_slot0;
                var8 = _closure2_slot7;
                var7 = _closure2_slot1;
                var11 = var6;
                var1 = var11[var5](var10, var9, var8, var7, var6);
                return var1;
            };
            var19 = var15.bind(var11)(var9, var10);
            var10 = var11.useCallback;
            var9 = new Array(1);
            var9[0] = var37;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.handlePressSettings;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var10.bind(var11)(var2, var9);
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 25;
            var2 = var10[var2];
            var2 = var9.bind(var4)(var2);
            var48 = undefined;
            var47 = var37;
            var46 = var8;
            var45 = var6;
            var44 = var34;
            var2 = var48[var2](var47, var46, var45, var44, var43);
            var27 = var2.rows;
            var10 = var2.isFetchingRows;
            var9 = var35 == var26;
            if(var9) { _fun0002_ip = 687; continue _fun0002 }
 669:
            var2 = var27.length;
            var2 = var3 === var2;
            if(!var2) { _fun0002_ip = 684; continue _fun0002 }
 681:
            var2 = var10;
 684:
            var9 = var2;
 687:
            var8 = _closure1_slot4;
            var6 = var8.useState;
            var2 = var35 != var26;
            if(!var2) { _fun0002_ip = 712; continue _fun0002 }
 703:
            var11 = var27.length;
            var2 = var3 === var11;
 712:
            if(!var2) { _fun0002_ip = 718; continue _fun0002 }
 715:
            var2 = !var10;
 718:
            var6 = var6.bind(var8)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var6, var7);
            var8 = var2[var3];
            var3 = _closure1_slot13;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = var10[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot13;
            var5 = 26;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {'showGradient': null, 'scrollable': true, 'startExpanded': true};
            var10 = var35 != var12;
            if(var10) { _fun0002_ip = 816; continue _fun0002 }
 813:
            var10 = !var9;
 816:
            if(var10) { _fun0002_ip = 822; continue _fun0002 }
 819:
            var10 = !var8;
 822:
            var5['showGradient'] = var10;
            var15 = _closure1_slot13;
            var11 = _closure1_slot0;
            var22 = _closure1_slot2;
            var10 = 27;
            var10 = var22[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.BottomSheetTitleHeader;
            var10 = {};
            if(!(var35 == var34)) { _fun0002_ip = 924; continue _fun0002 }
 864:
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var22 = 28;
            var23 = var32[var22];
            var23 = var30.bind(var4)(var23);
            var28 = var23.intl;
            var23 = var28.string;
            var22 = var32[var22];
            var22 = var30.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.f1+QIC;
            var22 = var23.bind(var28)(var22);
            _fun0002_ip = 1058; continue _fun0002;
 924:
            if(!(var35 == var38)) { _fun0002_ip = 985; continue _fun0002 }
 928:
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var23 = 28;
            var28 = var33[var23];
            var28 = var32.bind(var4)(var28);
            var30 = var28.intl;
            var28 = var30.string;
            var23 = var33[var23];
            var23 = var32.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.OzOM/v;
            var23 = var28.bind(var30)(var23);
            _fun0002_ip = 1055; continue _fun0002;
 985:
            var30 = _closure1_slot0;
            var39 = _closure1_slot2;
            var28 = 28;
            var32 = var39[var28];
            var32 = var30.bind(var4)(var32);
            var33 = var32.intl;
            var32 = var33.formatToPlainString;
            var28 = var39[var28];
            var28 = var30.bind(var4)(var28);
            var28 = var28.t;
            var30 = var28.ZdK3dX;
            var28 = {};
            var38 = var38.name;
            var28['applicationName'] = var38;
            var23 = var32.bind(var33)(var30, var28);
 1055:
            var22 = var23;
 1058:
            var10['title'] = var22;
            var10 = var15.bind(var4)(var11, var10);
            var5['header'] = var10;
            if(!(var35 == var12)) { _fun0002_ip = 1697; continue _fun0002 }
 1079:
            if(var9) { _fun0002_ip = 1679; continue _fun0002 }
 1085:
            if(var8) { _fun0002_ip = 1589; continue _fun0002 }
 1091:
            var10 = _closure1_slot15;
            var9 = _closure1_slot14;
            var8 = {};
            var15 = _closure1_slot5;
            var11 = {};
            var28 = _closure1_slot13;
            var23 = _closure1_slot1;
            var40 = _closure1_slot2;
            var22 = 32;
            var22 = var40[var22];
            var23 = var23.bind(var4)(var22);
            var22 = {};
            var30 = var14.shareApps;
            var22['contentContainerStyle'] = var30;
            var22['onItemPressed'] = var29;
            var23 = var28.bind(var4)(var23, var22);
            var22 = new Array(2);
            var22[0] = var23;
            var29 = _closure1_slot15;
            var28 = _closure1_slot5;
            var23 = {};
            var30 = var14.searchAndShareContainer;
            var23['style'] = var30;
            var33 = _closure1_slot13;
            var39 = _closure1_slot0;
            var30 = 33;
            var30 = var40[var30];
            var30 = var39.bind(var4)(var30);
            var32 = var30.SearchField;
            var30 = {'size': 'md', 'isRound': true};
            var38 = 34;
            var38 = var40[var38];
            var38 = var39.bind(var4)(var38);
            var38 = var38.searchInviteSuggestions;
            var30['onChange'] = var38;
            if(!(var35 == var34)) { _fun0002_ip = 1348; continue _fun0002 }
 1246:
            var38 = _closure1_slot0;
            var41 = _closure1_slot2;
            var34 = 28;
            var39 = var41[var34];
            var39 = var38.bind(var4)(var39);
            var40 = var39.intl;
            var39 = var40.formatToPlainString;
            var34 = var41[var34];
            var34 = var38.bind(var4)(var34);
            var34 = var34.t;
            var38 = var34.1UgGdn;
            var34 = {};
            var43 = _closure1_slot9;
            var42 = var43.getGuild;
            var41 = var37.guild_id;
            var42 = var42.bind(var43)(var41);
            var43 = var35 == var42;
            var41 = undefined;
            if(var43) { _fun0002_ip = 1333; continue _fun0002 }
 1328:
            var41 = var42.name;
 1333:
            var34['groupname'] = var41;
            var34 = var39.bind(var40)(var38, var34);
            _fun0002_ip = 1403; continue _fun0002;
 1348:
            var41 = _closure1_slot0;
            var42 = _closure1_slot2;
            var38 = 28;
            var39 = var42[var38];
            var39 = var41.bind(var4)(var39);
            var40 = var39.intl;
            var39 = var40.string;
            var38 = var42[var38];
            var38 = var41.bind(var4)(var38);
            var38 = var38.t;
            var38 = var38.iI1gMj;
            var34 = var39.bind(var40)(var38);
 1403:
            var30['placeholder'] = var34;
            var32 = var33.bind(var4)(var32, var30);
            var30 = new Array(2);
            var30[0] = var32;
            var32 = var35 != var31;
            var31 = !var32;
            if(var32) { _fun0002_ip = 1487; continue _fun0002 }
 1432:
            var34 = _closure1_slot13;
            var33 = _closure1_slot1;
            var38 = _closure1_slot2;
            var32 = 35;
            var32 = var38[var32];
            var33 = var33.bind(var4)(var32);
            var32 = {};
            var38 = var14.inviteAgeText;
            var32['style'] = var38;
            var32['channel'] = var37;
            var35 = var35 == var36;
            var32['canEditInvite'] = var35;
            var31 = var34.bind(var4)(var33, var32);
 1487:
            var30[1] = var31;
            var23['children'] = var30;
            var23 = var29.bind(var4)(var28, var23);
            var22[1] = var23;
            var11['children'] = var22;
            var15 = var10.bind(var4)(var15, var11);
            var11 = new Array(2);
            var11[0] = var15;
            var23 = _closure1_slot13;
            var22 = _closure1_slot1;
            var28 = _closure1_slot2;
            var15 = 36;
            var15 = var28[var15];
            var22 = var22.bind(var4)(var15);
            var15 = {};
            var15['data'] = var27;
            var15['code'] = var26;
            var15['onPressAvatar'] = var25;
            var15['onInviteSent'] = var24;
            var15 = var23.bind(var4)(var22, var15);
            var11[1] = var15;
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            _fun0002_ip = 1677; continue _fun0002;
 1589:
            var11 = _closure1_slot13;
            var10 = _closure1_slot6;
            var9 = {};
            var15 = {};
            var16 = var17 + var16;
            var15['paddingBottom'] = var16;
            var9['contentContainerStyle'] = var15;
            var17 = _closure1_slot13;
            var16 = _closure1_slot1;
            var22 = _closure1_slot2;
            var15 = 31;
            var15 = var22[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var15['link'] = var21;
            var15['onCopy'] = var20;
            var15['onShare'] = var19;
            var15['onPressSettings'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var9['children'] = var15;
            var8 = var11.bind(var4)(var10, var9);
 1677:
            _fun0002_ip = 1695; continue _fun0002;
 1679:
            var11 = _closure1_slot13;
            var10 = _closure1_slot17;
            var9 = {};
            var8 = var11.bind(var4)(var10, var9);
 1695:
            _fun0002_ip = 1770; continue _fun0002;
 1697:
            var11 = _closure1_slot13;
            var10 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 29;
            var9 = var15[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var14 = var14.errorEmptyState;
            var9['style'] = var14;
            var14 = _closure1_slot0;
            var13 = 30;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.AppCrash;
            var9['Illustration'] = var13;
            var9['title'] = var12;
            var8 = var11.bind(var4)(var10, var9);
 1770:
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
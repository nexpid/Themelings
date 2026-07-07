// app/modules/activities/panel/native/ActivityInviteSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function Loading() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot16;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var6 = new Array(0);
            var2 = 11;
            var1 = 10;
            var3 = 0;
case 2:
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
            if(var3 < var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
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
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.setSendState;
    var _closure1_slot6 = var7;
    var4 = var4.useInstantInviteSendStates;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityActionTypes;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.InviteSendStates;
    var _closure1_slot10 = var7;
    var4 = var4.InviteTargetTypes;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP_NULL;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var7 = var4.Fragment;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': 16, 'width': '80%', 'margin': 16, 'marginBottom': 8};
    var10 = 10;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_MUTED;
    var9['backgroundColor'] = var13;
    var4['placeholderHeader'] = var9;
    var9 = {'height': 16, 'width': '40%', 'margin': 16};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_MUTED;
    var9['backgroundColor'] = var13;
    var4['placeholderLabel'] = var9;
    var9 = {};
    var13 = 'transparent';
    var9['backgroundColor'] = var13;
    var4['emptyState'] = var9;
    var9 = {};
    var9['borderTopWidth'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9['borderColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['marginTop'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['paddingVertical'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_12;
    var9['paddingHorizontal'] = var12;
    var12 = 'column';
    var9['flexDirection'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_12;
    var9['gap'] = var10;
    var4['searchAndShareContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/panel/native/ActivityInviteSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActivityInviteSheet(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.activity;
            var _closure2_slot0 = var2;
            var1 = _closure1_slot16;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var7 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 12;
            var5 = var16[var1];
            var6 = var7.bind(var4)(var5);
            var5 = 13;
            var5 = var16[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.ACTIVITY_INVITE_SHEET;
            var5 = var6.bind(var4)(var5);
            var5 = var5.analyticsLocations;
            var _closure2_slot1 = var5;
            var11 = _closure1_slot4;
            var6 = var11.useState;
            var10 = null;
            var6 = var6.bind(var11)(var10);
            var14 = _closure1_slot3;
            var7 = 2;
            var15 = var14.bind(var4)(var6, var7);
            var6 = 0;
            var12 = var15[var6];
            var8 = 1;
            var15 = var15[var8];
            var _closure2_slot2 = var15;
            var17 = _closure1_slot7;
            var15 = function(arg1) {
                var1 = arg1;
                return var1;
            };
            var15 = var17.bind(var4)(var15);
            var _closure2_slot3 = var15;
            var18 = var11.useCallback;
            var17 = new Array(2);
            var17[0] = var2;
            var17[1] = var15;
            var15 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var1 = var1.party;
                    var5 = null;
                    var4 = var5 == var1;
                    var6 = undefined;
                    if(var4) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var6 = var1.id;
case 4:
                    var1 = arg1;
                    var1 = var1.item;
                    var4 = var1.id;
                    var7 = var5 != var6;
                    var1 = null;
                    if(!var7) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var3 = _closure2_slot3;
                    var3 = var3[var6];
                    var5 = var5 == var3;
                    var2 = undefined;
                    if(var5) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var2 = var3[var4];
case 8:
                    var1 = var2;
case 6:
                    return var1;
                }
            };
            var20 = var18.bind(var11)(var15, var17);
            var18 = var11.useCallback;
            var17 = new Array(1);
            var17[0] = var5;
            var15 = function(arg1) {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 14;
                var2 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var2 = var5.hideActionSheet;
                var2 = var2.bind(var5)();
                var2 = 15;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var4 = arg1;
                var2['userId'] = var4;
                var4 = _closure2_slot1;
                var2['sourceAnalyticsLocations'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var17 = var18.bind(var11)(var15, var17);
            var18 = var11.useCallback;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1;
                    var _closure3_slot0 = var1;
                    var1 = undefined;
                    var11 = undefined;
                    var10 = undefined;
                    var4 = function markInviteSent() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var3 = _closure3_slot1;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                            var5 = _closure1_slot6;
                            var4 = _closure3_slot1;
                            var2 = _closure3_slot0;
                            var2 = var2.item;
                            var3 = var2.id;
                            var1 = _closure1_slot10;
                            var2 = var1.SENT;
                            var1 = undefined;
                            var1 = var5.bind(var1)(var4, var3, var2);
case 10:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var7 = _closure2_slot0;
                    var6 = null;
                    if(!(var6 != var7)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var7 = _closure2_slot0;
                    var7 = var7.party;
                    var8 = var6 == var7;
                    var13 = undefined;
                    if(var8) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var13 = var7.id;
case 14:
                    var _closure3_slot1 = var13;
                    if(!(var6 != var13)) { _fun0004_ip = 12; continue _fun0004 }
case 16:
                    var12 = _closure1_slot6;
                    var6 = var5;
                    var7 = var6.item;
                    var9 = var7.id;
                    var7 = _closure1_slot10;
                    var7 = var7.SENDING;
                    var7 = var12.bind(var1)(var13, var9, var7);
                    var7 = var6.type;
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var12 = 16;
                    var6 = var6[var12];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.RowTypes;
                    var6 = var6.CHANNEL;
                    if(!(var7 !== var6)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var6 = var5;
                    var7 = var6.type;
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var12];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.RowTypes;
                    var6 = var6.DM;
                    if(!(var7 !== var6)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var6 = var5;
                    var7 = var6.type;
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var12];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.RowTypes;
                    var6 = var6.FRIEND;
                    if(!(var7 === var6)) { _fun0004_ip = 12; continue _fun0004 }
case 19:
                    var6 = var5;
                    var6 = var6.item;
                    var10 = var6.id;
case 21: // try_start_0
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var6 = 17;
                    var6 = var13[var6];
                    var9 = var12.bind(var1)(var6);
                    var7 = var9.sendActivityInviteUser;
                    var6 = {};
                    var6['userId'] = var10;
                    var10 = _closure1_slot9;
                    var10 = var10.JOIN;
                    var6['type'] = var10;
                    var10 = _closure2_slot0;
                    var6['activity'] = var10;
                    var10 = 13;
                    var10 = var13[var10];
                    var10 = var12.bind(var1)(var10);
                    var10 = var10.ACTIVITY_INVITE_SHEET;
                    var6['location'] = var10;
                    var9 = var7.bind(var9)(var6);
                    var7 = var9.then;
                    var6 = var4;
                    var9 = var7.bind(var9)(var6);
                    var7 = var9.catch;
                    var6 = function(arg1) {
                        var3 = _closure2_slot2;
                        var1 = global;
                        var4 = var1.String;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var1);
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var6 = var7.bind(var9)(var6);
case 22: // try_end0
                    _fun0004_ip = 12; continue _fun0004;
case 23: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var7 = _closure2_slot2;
                    var6 = global;
                    var6 = var6.String;
                    var6 = var6.bind(var1)(var9);
                    var6 = var7.bind(var1)(var6);
                    _fun0004_ip = 12; continue _fun0004;
case 17:
                    var5 = var5.item;
                    var11 = var5.id;
case 24: // try_start_1
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 17;
                    var5 = var10[var5];
                    var7 = var9.bind(var1)(var5);
                    var6 = var7.sendActivityInvite;
                    var5 = {};
                    var5['channelId'] = var11;
                    var8 = _closure1_slot9;
                    var8 = var8.JOIN;
                    var5['type'] = var8;
                    var8 = _closure2_slot0;
                    var5['activity'] = var8;
                    var8 = 13;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.ACTIVITY_INVITE_SHEET;
                    var5['location'] = var8;
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.then;
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.catch;
                    var3 = function(arg1) {
                        var3 = _closure2_slot2;
                        var1 = global;
                        var4 = var1.String;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var4.bind(var1)(var2);
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
case 25: // try_end1
                    _fun0004_ip = 12; continue _fun0004;
case 26: // catch_target1
                    CatchBlockStart(arg_register=3);
                    var3 = _closure2_slot2;
                    var2 = global;
                    var2 = var2.String;
                    var2 = var2.bind(var1)(var4);
                    var2 = var3.bind(var1)(var2);
case 12:
                    return var1;
                }
            };
            var19 = var18.bind(var11)(var2, var15);
            var15 = _closure1_slot0;
            var2 = 18;
            var2 = var16[var2];
            var18 = var15.bind(var4)(var2);
            var16 = var18.useStateFromStores;
            var2 = _closure1_slot8;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getInviteSuggestionRows;
                var1 = var1.bind(var2)();
                return var1;
            };
            var21 = var16.bind(var18)(var15, var2);
            var15 = var11.useState;
            var2 = false;
            var2 = var15.bind(var11)(var2);
            var7 = var14.bind(var4)(var2, var7);
            var2 = var7[var6];
            var7 = var7[var8];
            var _closure2_slot4 = var7;
            var8 = var11.useEffect;
            var7 = function() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 19;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.loadInviteSuggestions;
                var3 = {};
                var6 = global;
                var6 = var6.Set;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var9 = var7;
                var6 = new var9[var6](var8);
                var6 = var6 instanceof Object ? var6 : var7;
                var3['omitUserIds'] = var6;
                var6 = _closure1_slot11;
                var6 = var6.EMBEDDED_APPLICATION;
                var3['inviteTargetType'] = var6;
                var4 = var4.bind(var5)(var3);
                var3 = var4.catch;
                var2 = _closure1_slot12;
                var4 = var3.bind(var4)(var2);
                var3 = var4.finally;
                var2 = function() {
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = new Array(0);
            var3 = var8.bind(var11)(var7, var3);
            var3 = var21.length;
            var8 = var6 === var3;
            if(!var8) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var8 = var2;
case 27:
            var3 = var21.length;
            var15 = var6 === var3;
            if(!var15) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var15 = !var2;
case 29:
            var3 = _closure1_slot13;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = var11[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot13;
            var5 = 20;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {'showGradient': null, 'scrollable': true, 'startExpanded': true};
            var11 = var10 != var12;
            if(var11) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var11 = !var8;
case 31:
            if(var11) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var11 = !var15;
case 33:
            var5['showGradient'] = var11;
            var16 = _closure1_slot13;
            var25 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 21;
            var11 = var18[var11];
            var11 = var25.bind(var4)(var11);
            var14 = var11.BottomSheetTitleHeader;
            var11 = {};
            var23 = 22;
            var22 = var18[var23];
            var22 = var25.bind(var4)(var22);
            var24 = var22.intl;
            var22 = var24.string;
            var18 = var18[var23];
            var18 = var25.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.OzOM/q;
            var18 = var22.bind(var24)(var18);
            var11['title'] = var18;
            var11 = var16.bind(var4)(var14, var11);
            var5['header'] = var11;
            if(!(var10 == var12)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            if(var8) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var11 = _closure1_slot15;
            var10 = _closure1_slot14;
            var8 = {};
            var18 = _closure1_slot13;
            var16 = _closure1_slot5;
            var14 = {};
            var22 = {};
            var24 = var13.searchAndShareContainer;
            var22['style'] = var24;
            var26 = _closure1_slot13;
            var30 = _closure1_slot0;
            var27 = _closure1_slot2;
            var24 = 25;
            var24 = var27[var24];
            var24 = var30.bind(var4)(var24);
            var25 = var24.SearchField;
            var24 = {'size': 'md', 'isRound': true};
            var28 = 19;
            var28 = var27[var28];
            var28 = var30.bind(var4)(var28);
            var28 = var28.searchInviteSuggestions;
            var24['onChange'] = var28;
            var28 = var27[var23];
            var28 = var30.bind(var4)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var27[var23];
            var27 = var30.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.iI1gMg;
            var27 = var28.bind(var29)(var27);
            var24['placeholder'] = var27;
            var24 = var26.bind(var4)(var25, var24);
            var22['children'] = var24;
            var22 = var18.bind(var4)(var16, var22);
            var14['children'] = var22;
            var16 = var18.bind(var4)(var16, var14);
            var14 = new Array(2);
            var14[0] = var16;
            var18 = _closure1_slot13;
            if(var15) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var16 = _closure1_slot1;
            var22 = _closure1_slot2;
            var15 = 26;
            var15 = var22[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var15['data'] = var21;
            var15['error'] = var12;
            var15['getSendState'] = var20;
            var15['onInviteSent'] = var19;
            var15['onPressAvatar'] = var17;
            var15 = var18.bind(var4)(var16, var15);
            _fun0002_ip = 41; continue _fun0002;
case 39:
            var22 = _closure1_slot0;
            var19 = _closure1_slot2;
            var16 = 23;
            var16 = var19[var16];
            var16 = var22.bind(var4)(var16);
            var17 = var16.EmptyState;
            var16 = {};
            var20 = var13.emptyState;
            var16['style'] = var20;
            var20 = var19[var23];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var19[var23];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.ojoWgX;
            var19 = var20.bind(var21)(var19);
            var16['title'] = var19;
            var15 = var18.bind(var4)(var17, var16);
case 41:
            var14[1] = var15;
            var8['children'] = var14;
            var8 = var11.bind(var4)(var10, var8);
            _fun0002_ip = 42; continue _fun0002;
case 37:
            var14 = _closure1_slot13;
            var11 = _closure1_slot17;
            var10 = {};
            var8 = var14.bind(var4)(var11, var10);
case 42:
            _fun0002_ip = 43; continue _fun0002;
case 35:
            var11 = _closure1_slot13;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 23;
            var9 = var15[var9];
            var9 = var14.bind(var4)(var9);
            var10 = var9.EmptyState;
            var9 = {};
            var13 = var13.emptyState;
            var9['style'] = var13;
            var13 = 24;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.AppCrash;
            var9['Illustration'] = var13;
            var9['title'] = var12;
            var8 = var11.bind(var4)(var10, var9);
case 43:
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
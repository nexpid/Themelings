// app/modules/activities/panel/native/ActivityInviteSheet.tsx
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
            var1 = _closure1_slot17;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var6 = new Array(0);
            var2 = 11;
            var1 = 10;
            var3 = 0;
 25:
            var8 = var6.push;
            var11 = _closure1_slot14;
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
            var3 = _closure1_slot16;
            var2 = _closure1_slot15;
            var1 = {};
            var9 = _closure1_slot14;
            var8 = _closure1_slot5;
            var5 = {};
            var11 = var10.placeholderHeader;
            var5['style'] = var11;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(3);
            var5[0] = var8;
            var9 = _closure1_slot14;
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
    var _closure1_slot18 = var1;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.setSendState;
    var _closure1_slot7 = var7;
    var4 = var4.useInstantInviteSendStates;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityActionTypes;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.InviteSendStates;
    var _closure1_slot11 = var7;
    var4 = var4.InviteTargetTypes;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP_NULL;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot14 = var7;
    var7 = var4.Fragment;
    var _closure1_slot15 = var7;
    var4 = var4.jsxs;
    var _closure1_slot16 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': 16, 'width': '80%', 'margin': 16, 'marginBottom': 8};
    var11 = 10;
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
    var _closure1_slot17 = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/panel/native/ActivityInviteSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActivityInviteSheet(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.activity;
            var _closure2_slot0 = var2;
            var1 = _closure1_slot17;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 12;
            var1 = var11[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var17 = var1.bottom;
            var1 = 13;
            var3 = var11[var1];
            var5 = var6.bind(var4)(var3);
            var3 = 14;
            var3 = var11[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ACTIVITY_INVITE_SHEET;
            var3 = var5.bind(var4)(var3);
            var5 = var3.analyticsLocations;
            var _closure2_slot1 = var5;
            var9 = _closure1_slot4;
            var3 = var9.useState;
            var19 = null;
            var6 = var3.bind(var9)(var19);
            var8 = _closure1_slot3;
            var3 = 2;
            var10 = var8.bind(var4)(var6, var3);
            var6 = 0;
            var12 = var10[var6];
            var7 = 1;
            var10 = var10[var7];
            var _closure2_slot2 = var10;
            var15 = _closure1_slot8;
            var10 = function(arg1) {
                var1 = arg1;
                return var1;
            };
            var10 = var15.bind(var4)(var10);
            var _closure2_slot3 = var10;
            var16 = var9.useCallback;
            var15 = new Array(2);
            var15[0] = var2;
            var15[1] = var10;
            var10 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot0;
                    var1 = var1.party;
                    var5 = null;
                    var4 = var5 == var1;
                    var6 = undefined;
                    if(var4) { _fun0003_ip = 29; continue _fun0003 }
 24:
                    var6 = var1.id;
 29:
                    var1 = arg1;
                    var1 = var1.item;
                    var4 = var1.id;
                    var7 = var5 != var6;
                    var1 = null;
                    if(!var7) { _fun0003_ip = 75; continue _fun0003 }
 51:
                    var3 = _closure2_slot3;
                    var3 = var3[var6];
                    var5 = var5 == var3;
                    var2 = undefined;
                    if(var5) { _fun0003_ip = 72; continue _fun0003 }
 68:
                    var2 = var3[var4];
 72:
                    var1 = var2;
 75:
                    return var1;
                }
            };
            var23 = var16.bind(var9)(var10, var15);
            var16 = var9.useCallback;
            var15 = new Array(1);
            var15[0] = var5;
            var10 = function(arg1) {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 15;
                var2 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var2 = var5.hideActionSheet;
                var2 = var2.bind(var5)();
                var2 = 16;
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
            var21 = var16.bind(var9)(var10, var15);
            var15 = var9.useCallback;
            var10 = new Array(1);
            var10[0] = var2;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var5 = var1;
                    var _closure3_slot0 = var1;
                    var1 = undefined;
                    var11 = undefined;
                    var10 = undefined;
                    var4 = function markInviteSent() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var3 = _closure3_slot1;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0005_ip = 57; continue _fun0005 }
 13:
                            var5 = _closure1_slot7;
                            var4 = _closure3_slot1;
                            var2 = _closure3_slot0;
                            var2 = var2.item;
                            var3 = var2.id;
                            var1 = _closure1_slot11;
                            var2 = var1.SENT;
                            var1 = undefined;
                            var1 = var5.bind(var1)(var4, var3, var2);
 57:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var7 = _closure2_slot0;
                    var6 = null;
                    if(!(var6 != var7)) { _fun0004_ip = 548; continue _fun0004 }
 41:
                    var7 = _closure2_slot0;
                    var7 = var7.party;
                    var8 = var6 == var7;
                    var13 = undefined;
                    if(var8) { _fun0004_ip = 65; continue _fun0004 }
 60:
                    var13 = var7.id;
 65:
                    var _closure3_slot1 = var13;
                    if(!(var6 != var13)) { _fun0004_ip = 548; continue _fun0004 }
 76:
                    var12 = _closure1_slot7;
                    var6 = var5;
                    var7 = var6.item;
                    var9 = var7.id;
                    var7 = _closure1_slot11;
                    var7 = var7.SENDING;
                    var7 = var12.bind(var1)(var13, var9, var7);
                    var7 = var6.type;
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var12 = 17;
                    var6 = var6[var12];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.RowTypes;
                    var6 = var6.CHANNEL;
                    if(!(var7 !== var6)) { _fun0004_ip = 402; continue _fun0004 }
 157:
                    var6 = var5;
                    var7 = var6.type;
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var12];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.RowTypes;
                    var6 = var6.DM;
                    if(!(var7 !== var6)) { _fun0004_ip = 242; continue _fun0004 }
 198:
                    var6 = var5;
                    var7 = var6.type;
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var12];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.RowTypes;
                    var6 = var6.FRIEND;
                    if(!(var7 === var6)) { _fun0004_ip = 548; continue _fun0004 }
 242:
                    var6 = var5;
                    var6 = var6.item;
                    var10 = var6.id;
 255: // try_start_0
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var6 = 18;
                    var6 = var13[var6];
                    var9 = var12.bind(var1)(var6);
                    var7 = var9.sendActivityInviteUser;
                    var6 = {};
                    var6['userId'] = var10;
                    var10 = _closure1_slot10;
                    var10 = var10.JOIN;
                    var6['type'] = var10;
                    var10 = _closure2_slot0;
                    var6['activity'] = var10;
                    var10 = 14;
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
 368: // try_end0
                    _fun0004_ip = 548; continue _fun0004;
 373: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var7 = _closure2_slot2;
                    var6 = global;
                    var6 = var6.String;
                    var6 = var6.bind(var1)(var9);
                    var6 = var7.bind(var1)(var6);
                    _fun0004_ip = 548; continue _fun0004;
 402:
                    var5 = var5.item;
                    var11 = var5.id;
 412: // try_start_1
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 18;
                    var5 = var10[var5];
                    var7 = var9.bind(var1)(var5);
                    var6 = var7.sendActivityInvite;
                    var5 = {};
                    var5['channelId'] = var11;
                    var8 = _closure1_slot10;
                    var8 = var8.JOIN;
                    var5['type'] = var8;
                    var8 = _closure2_slot0;
                    var5['activity'] = var8;
                    var8 = 14;
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
 522: // try_end1
                    _fun0004_ip = 548; continue _fun0004;
 524: // catch_target1
                    CatchBlockStart(arg_register=3);
                    var3 = _closure2_slot2;
                    var2 = global;
                    var2 = var2.String;
                    var2 = var2.bind(var1)(var4);
                    var2 = var3.bind(var1)(var2);
 548:
                    return var1;
                }
            };
            var22 = var15.bind(var9)(var2, var10);
            var10 = _closure1_slot0;
            var2 = 19;
            var2 = var11[var2];
            var15 = var10.bind(var4)(var2);
            var11 = var15.useStateFromStores;
            var2 = _closure1_slot9;
            var10 = new Array(1);
            var10[0] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getInviteSuggestionRows;
                var1 = var1.bind(var2)();
                return var1;
            };
            var24 = var11.bind(var15)(var10, var2);
            var10 = var9.useState;
            var2 = false;
            var2 = var10.bind(var9)(var2);
            var3 = var8.bind(var4)(var2, var3);
            var2 = var3[var6];
            var3 = var3[var7];
            var _closure2_slot4 = var3;
            var8 = var9.useEffect;
            var7 = function() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 20;
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
                var6 = _closure1_slot12;
                var6 = var6.EMBEDDED_APPLICATION;
                var3['inviteTargetType'] = var6;
                var4 = var4.bind(var5)(var3);
                var3 = var4.catch;
                var2 = _closure1_slot13;
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
            var3 = var8.bind(var9)(var7, var3);
            var3 = var24.length;
            var9 = var6 === var3;
            if(!var9) { _fun0002_ip = 363; continue _fun0002 }
 360:
            var9 = var2;
 363:
            var3 = var24.length;
            var8 = var6 === var3;
            if(!var8) { _fun0002_ip = 378; continue _fun0002 }
 375:
            var8 = !var2;
 378:
            var3 = _closure1_slot14;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = var10[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot14;
            var5 = 21;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {'showGradient': null, 'scrollable': true, 'startExpanded': true};
            var10 = var19 != var12;
            if(var10) { _fun0002_ip = 457; continue _fun0002 }
 454:
            var10 = !var9;
 457:
            if(var10) { _fun0002_ip = 463; continue _fun0002 }
 460:
            var10 = !var8;
 463:
            var5['showGradient'] = var10;
            var15 = _closure1_slot14;
            var26 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 22;
            var10 = var16[var10];
            var10 = var26.bind(var4)(var10);
            var11 = var10.BottomSheetTitleHeader;
            var10 = {};
            var29 = 23;
            var20 = var16[var29];
            var20 = var26.bind(var4)(var20);
            var25 = var20.intl;
            var20 = var25.string;
            var16 = var16[var29];
            var16 = var26.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.OzOM/v;
            var16 = var20.bind(var25)(var16);
            var10['title'] = var16;
            var10 = var15.bind(var4)(var11, var10);
            var5['header'] = var10;
            if(!(var19 == var12)) { _fun0002_ip = 962; continue _fun0002 }
 569:
            if(var9) { _fun0002_ip = 944; continue _fun0002 }
 575:
            if(var8) { _fun0002_ip = 830; continue _fun0002 }
 581:
            var10 = _closure1_slot16;
            var9 = _closure1_slot15;
            var8 = {};
            var16 = _closure1_slot14;
            var15 = _closure1_slot5;
            var11 = {};
            var20 = {};
            var25 = var14.searchAndShareContainer;
            var20['style'] = var25;
            var28 = _closure1_slot14;
            var32 = _closure1_slot0;
            var25 = _closure1_slot2;
            var26 = 27;
            var26 = var25[var26];
            var26 = var32.bind(var4)(var26);
            var27 = var26.SearchField;
            var26 = {'size': 'md', 'isRound': true};
            var30 = 20;
            var30 = var25[var30];
            var30 = var32.bind(var4)(var30);
            var30 = var30.searchInviteSuggestions;
            var26['onChange'] = var30;
            var30 = var25[var29];
            var30 = var32.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var25[var29];
            var29 = var32.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.iI1gMj;
            var29 = var30.bind(var31)(var29);
            var26['placeholder'] = var29;
            var26 = var28.bind(var4)(var27, var26);
            var20['children'] = var26;
            var20 = var16.bind(var4)(var15, var20);
            var11['children'] = var20;
            var15 = var16.bind(var4)(var15, var11);
            var11 = new Array(2);
            var11[0] = var15;
            var20 = _closure1_slot14;
            var16 = _closure1_slot1;
            var15 = 28;
            var15 = var25[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var15['data'] = var24;
            var15['error'] = var12;
            var15['getSendState'] = var23;
            var15['onInviteSent'] = var22;
            var15['onPressAvatar'] = var21;
            var15 = var20.bind(var4)(var16, var15);
            var11[1] = var15;
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            _fun0002_ip = 942; continue _fun0002;
 830:
            var11 = _closure1_slot14;
            var10 = _closure1_slot6;
            var9 = {};
            var15 = {};
            var16 = 16;
            var16 = var17 + var16;
            var15['paddingBottom'] = var16;
            var9['contentContainerStyle'] = var15;
            var17 = _closure1_slot14;
            var16 = _closure1_slot1;
            var20 = _closure1_slot2;
            var15 = 26;
            var15 = var20[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var15['link'] = var19;
            var19 = function onCopy() {
                var1 = undefined;
                return var1;
            };
            var15['onCopy'] = var19;
            var19 = function onShare() {
                var1 = undefined;
                return var1;
            };
            var15['onShare'] = var19;
            var18 = function onPressSettings() {
                var1 = undefined;
                return var1;
            };
            var15['onPressSettings'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var9['children'] = var15;
            var8 = var11.bind(var4)(var10, var9);
 942:
            _fun0002_ip = 960; continue _fun0002;
 944:
            var11 = _closure1_slot14;
            var10 = _closure1_slot18;
            var9 = {};
            var8 = var11.bind(var4)(var10, var9);
 960:
            _fun0002_ip = 1035; continue _fun0002;
 962:
            var11 = _closure1_slot14;
            var10 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 24;
            var9 = var15[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var14 = var14.errorEmptyState;
            var9['style'] = var14;
            var14 = _closure1_slot0;
            var13 = 25;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.AppCrash;
            var9['Illustration'] = var13;
            var9['title'] = var12;
            var8 = var11.bind(var4)(var10, var9);
 1035:
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
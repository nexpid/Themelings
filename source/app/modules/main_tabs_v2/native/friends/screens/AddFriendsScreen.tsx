// app/modules/main_tabs_v2/native/friends/screens/AddFriendsScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot25;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot25;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function areGameFriendRequestRowsEqual(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var4 = var3.userId;
            var1 = var2.userId;
            var1 = var4 === var1;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
 23:
            var3 = var3.applicationId;
            var2 = var2.applicationId;
            var1 = var3 === var2;
 37:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function areHydratedGameFriendRequestRowStatesEqual(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var2;
            var1 = var5 === var2;
            if(var1) { _fun0005_ip = 57; continue _fun0005 }
 19:
            var4 = var5.length;
            var2 = var2.length;
            var2 = var4 === var2;
            if(!var2) { _fun0005_ip = 54; continue _fun0005 }
 36:
            var4 = var5.every;
            var3 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure2_slot0;
                    var1 = arg2;
                    var2 = var2[var1];
                    var4 = var3.user;
                    var1 = var2.user;
                    var1 = var4 === var1;
                    if(!var1) { _fun0006_ip = 48; continue _fun0006 }
 34:
                    var3 = var3.applicationId;
                    var2 = var2.applicationId;
                    var1 = var3 === var2;
 48:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3);
 54:
            var1 = var2;
 57:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var12 = 0;
    var4 = var6[var12];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var9 = 2;
    var7 = var6[var9];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var8 = 3;
    var4 = var6[var8];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot6 = var7;
    var7 = var4.View;
    var _closure1_slot7 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Sections;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot13 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot14 = var7;
    var7 = var4.InstantInviteSources;
    var _closure1_slot15 = var7;
    var4 = var4.RelationshipTypes;
    var _closure1_slot16 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContactPermissions;
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot18 = var7;
    var4 = var4.jsxs;
    var _closure1_slot19 = var4;
    var4 = {};
    var4['FIND_FRIENDS'] = var12;
    var7 = 'FIND_FRIENDS';
    var4[var12] = var7;
    var4['INCOMING_FRIEND_REQUESTS'] = var10;
    var7 = 'INCOMING_FRIEND_REQUESTS';
    var4[var10] = var7;
    var4['INCOMING_GAME_FRIEND_REQUESTS'] = var9;
    var7 = 'INCOMING_GAME_FRIEND_REQUESTS';
    var4[var9] = var7;
    var4['CONTACT_SUGGESTIONS'] = var8;
    var7 = 'CONTACT_SUGGESTIONS';
    var4[var8] = var7;
    var _closure1_slot20 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['container'] = var9;
    var9 = {};
    var10 = 12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingVertical'] = var12;
    var4['inviteAppsContainerNonSticky'] = var9;
    var9 = {'paddingTop': 0, 'paddingBottom': 0, 'minWidth': '100%'};
    var4['inviteAppsContentContainer'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var12;
    var4['emptyContainer'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['marginHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['paddingTop'] = var12;
    var4['emptyActionContainer'] = var9;
    var9 = {'backgroundColor': null, 'justifyContent': 'center', 'flex': 1};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var10;
    var4['loading'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot21 = var4;
    var4 = function handleFindFriends() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 13;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.openContactSyncModal;
        var2 = _closure1_slot14;
        var3 = var2.FRIENDS_ADD_FRIENDS_MODAL;
        var2 = {};
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var _closure1_slot22 = var4;
    var4 = function() {
        var4 = _closure1_slot4;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 299; continue _fun0007 }
 10:
                    var3 = arg1;
                    var8 = undefined;
                    var6 = undefined;
 17: // try_start_0
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 14;
                    var2 = var7[var2];
                    var9 = var4.bind(var8)(var2);
                    var4 = var9.createFriendInvite;
                    var2 = _closure1_slot15;
                    var2 = var2.ADD_FRIENDS_MODAL;
                    var7 = null;
                    var2 = var4.bind(var9)(var7, var2);
                    SaveGenerator(address=68);
 66:
                    return var2;
 68:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 208; continue _fun0007 }
 77:
                    var6 = var2.code;
 82: // try_end0
                    var4 = var3;
                    var3 = {};
                    var3['channel'] = var7;
                    var12 = var6;
                    var3['code'] = var12;
                    var7 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var6 = 16;
                    var9 = var14[var6];
                    var9 = var7.bind(var8)(var9);
                    var10 = var9.intl;
                    var9 = var10.formatToPlainString;
                    var6 = var14[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.t;
                    var7 = var6.PJf9Pz;
                    var6 = {};
                    var13 = _closure1_slot1;
                    var11 = 17;
                    var11 = var14[var11];
                    var11 = var13.bind(var8)(var11);
                    var11 = var11.bind(var8)(var12);
                    var6['link'] = var11;
                    var6 = var9.bind(var10)(var7, var6);
                    var3['message'] = var6;
                    var5 = _closure1_slot15;
                    var5 = var5.ADD_FRIENDS_MODAL;
                    var3['location'] = var5;
                    var3 = var4.bind(var8)(var3);
                    return var8;
 208:
                    return var2;
 211: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 15;
                    var2 = var9[var2];
                    var4 = var7.bind(var8)(var2);
                    var3 = var4.presentError;
                    var2 = 16;
                    var5 = var9[var2];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var2 = var9[var2];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.t;
                    var2 = var2.R0RpRU;
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
                    var2 = undefined;
                    return var2;
 299:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot23 = var4;
    var4 = 40;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/friends/screens/AddFriendsScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AddFriendsScreen(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var6 = var1.navigation;
            var _closure2_slot0 = var6;
            var1 = var1.route;
            var1 = var1.params;
            var1 = var1.sourcePage;
            var _closure2_slot1 = var1;
            var4 = undefined;
            var _closure2_slot20 = var4;
            var _closure2_slot21 = var4;
            var _closure2_slot22 = var4;
            var _closure2_slot23 = var4;
            var _closure2_slot24 = var4;
            var1 = _closure1_slot21;
            var19 = var1.bind(var4)();
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 20;
            var2 = var9[var1];
            var3 = var8.bind(var4)(var2);
            var2 = 21;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.ADD_FRIENDS;
            var2 = var3.bind(var4)(var2);
            var5 = var2.analyticsLocations;
            var _closure2_slot2 = var5;
            var13 = _closure1_slot5;
            var3 = var13.useState;
            var2 = new Array(0);
            var2 = var3.bind(var13)(var2);
            var10 = _closure1_slot3;
            var17 = 2;
            var2 = var10.bind(var4)(var2, var17);
            var7 = 0;
            var3 = var2[var7];
            var _closure2_slot3 = var3;
            var14 = 1;
            var2 = var2[var14];
            var _closure2_slot4 = var2;
            var3 = var13.useState;
            var2 = new Array(0);
            var2 = var3.bind(var13)(var2);
            var2 = var10.bind(var4)(var2, var17);
            var3 = var2[var7];
            var _closure2_slot5 = var3;
            var2 = var2[var14];
            var _closure2_slot6 = var2;
            var3 = var13.useState;
            var2 = new Array(0);
            var2 = var3.bind(var13)(var2);
            var3 = var10.bind(var4)(var2, var17);
            var2 = var3[var7];
            var _closure2_slot7 = var2;
            var3 = var3[var14];
            var _closure2_slot8 = var3;
            var11 = var13.useState;
            var3 = new Array(0);
            var3 = var11.bind(var13)(var3);
            var3 = var10.bind(var4)(var3, var17);
            var10 = var3[var7];
            var _closure2_slot9 = var10;
            var3 = var3[var14];
            var _closure2_slot10 = var3;
            var12 = var13.useCallback;
            var11 = function(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = arg2;
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var _closure3_slot1 = var3;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0009_ip = 45; continue _fun0009 }
 22:
                    var4 = _closure2_slot6;
                    var3 = undefined;
                    var2 = function(arg1) {
                        var1 = new Array(1);
                        var5 = arg1;
                        var4 = 0;
                        var6 = var1;
                        var3 = arraySpread(var6, var5, var4);
                        var2 = _closure3_slot0;
                        var1[var3] = var2;
                        var2 = 1;
                        var2 = var3 + var2;
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    _fun0009_ip = 66; continue _fun0009;
 45:
                    var3 = _closure2_slot10;
                    var2 = undefined;
                    var1 = function(arg1) {
                        var1 = new Array(1);
                        var7 = arg1;
                        var6 = 0;
                        var8 = var1;
                        var3 = arraySpread(var8, var7, var6);
                        var2 = {};
                        var5 = _closure3_slot0;
                        var2['userId'] = var5;
                        var4 = _closure3_slot1;
                        var2['applicationId'] = var4;
                        var1[var3] = var2;
                        var2 = 1;
                        var2 = var3 + var2;
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
 66:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = new Array(0);
            var3 = var12.bind(var13)(var11, var3);
            var _closure2_slot11 = var3;
            var12 = var13.useCallback;
            var11 = function(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = arg2;
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var _closure3_slot1 = var3;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0010_ip = 45; continue _fun0010 }
 22:
                    var4 = _closure2_slot4;
                    var3 = undefined;
                    var2 = function(arg1) {
                        var1 = new Array(1);
                        var5 = arg1;
                        var4 = 0;
                        var6 = var1;
                        var3 = arraySpread(var6, var5, var4);
                        var2 = _closure3_slot0;
                        var1[var3] = var2;
                        var2 = 1;
                        var2 = var3 + var2;
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    _fun0010_ip = 66; continue _fun0010;
 45:
                    var3 = _closure2_slot8;
                    var2 = undefined;
                    var1 = function(arg1) {
                        var1 = new Array(1);
                        var7 = arg1;
                        var6 = 0;
                        var8 = var1;
                        var3 = arraySpread(var8, var7, var6);
                        var2 = {};
                        var5 = _closure3_slot0;
                        var2['userId'] = var5;
                        var4 = _closure3_slot1;
                        var2['applicationId'] = var4;
                        var1[var3] = var2;
                        var2 = 1;
                        var2 = var3 + var2;
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
 66:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = new Array(0);
            var3 = var12.bind(var13)(var11, var3);
            var _closure2_slot12 = var3;
            var3 = 22;
            var3 = var9[var3];
            var11 = var8.bind(var4)(var3);
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot13;
                var3 = var2.FRIEND_ADD_VIEWED;
                var2 = {};
                var6 = _closure1_slot14;
                var6 = var6.FRIENDS_ADD_FRIENDS_MODAL;
                var2['friend_add_type'] = var6;
                var6 = _closure2_slot1;
                var2['source_page'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var3 = var11.bind(var4)(var3);
            var12 = var13.useCallback;
            var11 = new Array(1);
            var11[0] = var6;
            var3 = function() {
                var3 = _closure2_slot0;
                var2 = var3.navigate;
                var1 = 'username-search';
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var21 = var12.bind(var13)(var3, var11);
            var _closure2_slot13 = var21;
            var12 = var13.useCallback;
            var11 = new Array(1);
            var11[0] = var5;
            var3 = function(arg1) {
                var4 = arg1;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = var4.id;
                var2['userId'] = var5;
                var2['localUser'] = var4;
                var4 = _closure2_slot2;
                var2['sourceAnalyticsLocations'] = var4;
                var4 = 'Add Friends Modal User Profile';
                var2['location'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = var12.bind(var13)(var3, var11);
            var _closure2_slot14 = var3;
            var13 = _closure1_slot0;
            var12 = 25;
            var3 = var9[var12];
            var23 = var13.bind(var4)(var3);
            var22 = var23.useStateFromStoresArray;
            var20 = _closure1_slot10;
            var18 = new Array(2);
            var18[0] = var20;
            var11 = _closure1_slot11;
            var18[1] = var11;
            var3 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var6 = new Array(0);
                    var5 = _closure1_slot24;
                    var4 = _closure1_slot10;
                    var3 = var4.getMutableRelationships;
                    var4 = var3.bind(var4)();
                    var3 = var4.keys;
                    var3 = var3.bind(var4)();
                    var4 = undefined;
                    var10 = var5.bind(var4)(var3);
                    var7 = var10.bind(var4)();
                    var5 = var7.done;
                    var9 = null;
                    var8 = var7;
                    var7 = undefined;
                    if(var5) { _fun0011_ip = 160; continue _fun0011 }
 65:
                    var14 = var8.value;
                    var11 = _closure1_slot10;
                    var5 = var11.isUnfilteredPendingIncoming;
                    var5 = var5.bind(var11)(var14);
                    if(!var5) { _fun0011_ip = 145; continue _fun0011 }
 90:
                    var11 = _closure1_slot11;
                    var5 = var11.getUser;
                    var5 = var5.bind(var11)(var14);
                    var11 = var9 == var5;
                    if(var11) { _fun0011_ip = 126; continue _fun0011 }
 112:
                    var13 = _closure2_slot3;
                    var12 = var13.includes;
                    var11 = var12.bind(var13)(var14);
 126:
                    var7 = var5;
                    if(var11) { _fun0011_ip = 145; continue _fun0011 }
 132:
                    var11 = var6.push;
                    var11 = var11.bind(var6)(var5);
                    var7 = var5;
 145:
                    var11 = var10.bind(var4)();
                    var5 = var11.done;
                    var8 = var11;
                    if(!var5) { _fun0011_ip = 65; continue _fun0011 }
 160:
                    var5 = new Array(0);
                    var _closure3_slot0 = var5;
                    var8 = _closure2_slot5;
                    var7 = var8.forEach;
                    var3 = function(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var3 = _closure1_slot11;
                            var2 = var3.getUser;
                            var1 = arg1;
                            var3 = var2.bind(var3)(var1);
                            var1 = null;
                            if(!(var1 != var3)) { _fun0012_ip = 44; continue _fun0012 }
 27:
                            var2 = _closure3_slot0;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
 44:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var7.bind(var8)(var3);
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 26;
                    var2 = var7[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.unionBy;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var5, var6, var2);
                    var2 = var3.sort;
                    var1 = function(arg1, arg2) {
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 27;
                        var2 = var6[var1];
                        var4 = undefined;
                        var7 = var5.bind(var4)(var2);
                        var3 = var7.getName;
                        var2 = arg1;
                        var3 = var3.bind(var7)(var2);
                        var2 = var3.localeCompare;
                        var1 = var6[var1];
                        var5 = var5.bind(var4)(var1);
                        var4 = var5.getName;
                        var1 = arg2;
                        var1 = var4.bind(var5)(var1);
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var3 = var22.bind(var23)(var18, var3);
            var _closure2_slot15 = var3;
            var12 = var9[var12];
            var18 = var13.bind(var4)(var12);
            var13 = var18.useStateFromStores;
            var22 = _closure1_slot9;
            var12 = new Array(3);
            var12[0] = var22;
            var12[1] = var20;
            var12[2] = var11;
            var11 = new Array(2);
            var11[0] = var10;
            var11[1] = var2;
            var28 = _closure1_slot27;
            var30 = function() {
                var5 = _closure1_slot9;
                var4 = var5.getGameRelationshipsByType;
                var3 = _closure1_slot16;
                var3 = var3.PENDING_INCOMING;
                var5 = var4.bind(var5)(var3);
                var6 = new Array(0);
                var _closure3_slot0 = var6;
                var4 = var5.forEach;
                var3 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var1 = arg1;
                        var7 = var1.id;
                        var _closure4_slot0 = var7;
                        var4 = var1.applicationId;
                        var _closure4_slot1 = var4;
                        var5 = _closure1_slot11;
                        var1 = var5.getUser;
                        var5 = var1.bind(var5)(var7);
                        var6 = _closure1_slot10;
                        var1 = var6.isSpam;
                        var1 = var1.bind(var6)(var7);
                        if(var1) { _fun0013_ip = 74; continue _fun0013 }
 59:
                        var6 = _closure1_slot10;
                        var3 = var6.isBlockedOrIgnored;
                        var1 = var3.bind(var6)(var7);
 74:
                        if(var1) { _fun0013_ip = 83; continue _fun0013 }
 77:
                        var3 = null;
                        var1 = var3 == var5;
 83:
                        if(var1) { _fun0013_ip = 111; continue _fun0013 }
 86:
                        var6 = _closure2_slot7;
                        var3 = var6.some;
                        var2 = function(arg1) {
                            var4 = _closure1_slot26;
                            var3 = {};
                            var2 = _closure4_slot0;
                            var3['userId'] = var2;
                            var1 = _closure4_slot1;
                            var3['applicationId'] = var1;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var4.bind(var2)(var1, var3);
                            return var1;
                        };
                        var1 = var3.bind(var6)(var2);
 111:
                        if(var1) { _fun0013_ip = 141; continue _fun0013 }
 114:
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var1 = {};
                        var1['user'] = var5;
                        var1['applicationId'] = var4;
                        var1 = var2.bind(var3)(var1);
 141:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var5 = new Array(0);
                var _closure3_slot1 = var5;
                var7 = _closure2_slot9;
                var4 = var7.forEach;
                var3 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.userId;
                        var4 = var1.applicationId;
                        var2 = _closure1_slot11;
                        var1 = var2.getUser;
                        var5 = var1.bind(var2)(var3);
                        var1 = null;
                        if(!(var1 != var5)) { _fun0014_ip = 64; continue _fun0014 }
 37:
                        var3 = _closure3_slot1;
                        var2 = var3.push;
                        var1 = {};
                        var1['user'] = var5;
                        var1['applicationId'] = var4;
                        var1 = var2.bind(var3)(var1);
 64:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var4.bind(var7)(var3);
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 26;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.unionBy;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.user;
                    var1 = var1.id;
                    return var1;
                };
                var3 = var3.bind(var4)(var5, var6, var2);
                var2 = var3.sort;
                var1 = function(arg1, arg2) {
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 27;
                    var2 = var6[var1];
                    var4 = undefined;
                    var7 = var5.bind(var4)(var2);
                    var3 = var7.getName;
                    var2 = arg1;
                    var2 = var2.user;
                    var3 = var3.bind(var7)(var2);
                    var2 = var3.localeCompare;
                    var1 = var6[var1];
                    var5 = var5.bind(var4)(var1);
                    var4 = var5.getName;
                    var1 = arg2;
                    var1 = var1.user;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var32 = var18;
            var31 = var12;
            var29 = var11;
            var11 = var32[var13](var31, var30, var29, var28, var27);
            var _closure2_slot16 = var11;
            var2 = 28;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var8 = var2.added;
            var _closure2_slot17 = var8;
            var8 = var2.setAdded;
            var _closure2_slot18 = var8;
            var12 = var2.friendSuggestions;
            var _closure2_slot19 = var12;
            var2 = var12.length;
            var8 = var2 > var7;
            if(!var8) { _fun0008_ip = 622; continue _fun0008 }
 610:
            var9 = var3.length;
            var2 = 3;
            var8 = var9 > var2;
 622:
            _closure2_slot20 = var8;
            var2 = var12.length;
            var2 = var2 > var7;
            if(!var2) { _fun0008_ip = 650; continue _fun0008 }
 638:
            var10 = var11.length;
            var9 = 3;
            var2 = var10 > var9;
 650:
            _closure2_slot21 = var2;
            var18 = _closure1_slot5;
            var13 = var18.useMemo;
            var10 = new Array(2);
            var10[0] = var11;
            var10[1] = var2;
            var9 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var1 = _closure2_slot21;
                    if(var1) { _fun0015_ip = 21; continue _fun0015 }
 10:
                    var1 = _closure2_slot16;
                    var4 = var1.length;
                    _fun0015_ip = 52; continue _fun0015;
 21:
                    var1 = global;
                    var6 = var1.Math;
                    var3 = var6.min;
                    var1 = _closure2_slot16;
                    var2 = var1.length;
                    var1 = 3;
                    var4 = var3.bind(var6)(var2, var1);
 52:
                    var1 = new Array(0);
                    var3 = 0;
                    var6 = var3 < var4;
                    var2 = null;
                    if(!var6) { _fun0015_ip = 101; continue _fun0015 }
 67:
                    var6 = _closure2_slot16;
                    var6 = var6[var3];
                    if(!(var2 != var6)) { _fun0015_ip = 94; continue _fun0015 }
 79:
                    var7 = var1.push;
                    var6 = var6.applicationId;
                    var6 = var7.bind(var1)(var6);
 94:
                    var3 = var3 + 1;
                    if(var3 < var4) { _fun0015_ip = 67; continue _fun0015 }
 101:
                    return var1;
                }
            };
            var10 = var13.bind(var18)(var9, var10);
            var13 = _closure1_slot1;
            var20 = _closure1_slot2;
            var9 = 29;
            var9 = var20[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.bind(var4)(var10);
            var9 = {};
            var9['navigation'] = var6;
            var6 = function useTransitionEnd(arg1) {
                var1 = arg1;
                var6 = var1.navigation;
                var _closure3_slot0 = var6;
                var5 = _closure1_slot5;
                var4 = var5.useState;
                var3 = false;
                var7 = var4.bind(var5)(var3);
                var4 = _closure1_slot3;
                var3 = undefined;
                var1 = 2;
                var4 = var4.bind(var3)(var7, var1);
                var1 = 0;
                var1 = var4[var1];
                var3 = 1;
                var3 = var4[var3];
                var _closure3_slot1 = var3;
                var4 = var5.useEffect;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = function() {
                    var4 = _closure3_slot0;
                    var3 = var4.addListener;
                    var2 = 'transitionEnd';
                    var1 = function() {
                        var3 = _closure3_slot1;
                        var1 = undefined;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var9 = var6.bind(var4)(var9);
            var10 = _closure1_slot0;
            var6 = 18;
            var13 = var20[var6];
            var22 = var10.bind(var4)(var13);
            var13 = var22.useContactSyncAccount;
            var13 = var13.bind(var22)();
            var6 = var20[var6];
            var10 = var10.bind(var4)(var6);
            var6 = var10.isContactSyncEnabled;
            var10 = var6.bind(var10)(var13);
            var13 = var18.useState;
            var6 = false;
            var13 = var13.bind(var18)(var6);
            var6 = _closure1_slot3;
            var13 = var6.bind(var4)(var13, var17);
            var6 = var13[var7];
            var13 = var13[var14];
            _closure2_slot22 = var13;
            var17 = var18.useEffect;
            var14 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.checkContactPermissions;
                var4 = var2.bind(var3)();
                var3 = var4.then;
                var2 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                        var5 = arg1;
                        var1 = _closure1_slot17;
                        var1 = var1.NOT_DETERMINED;
                        var3 = var5 === var1;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 19;
                        var4 = var4[var1];
                        var1 = undefined;
                        var6 = var6.bind(var1)(var4);
                        var4 = var6.isAndroid;
                        var4 = var4.bind(var6)();
                        if(!var4) { _fun0016_ip = 68; continue _fun0016 }
 54:
                        var2 = _closure1_slot17;
                        var2 = var2.UNAUTHORIZED;
                        var4 = var5 === var2;
 68:
                        var2 = _closure2_slot22;
                        if(var3) { _fun0016_ip = 81; continue _fun0016 }
 78:
                        var3 = var4;
 81:
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var13 = new Array(0);
            var13 = var17.bind(var18)(var14, var13);
            var17 = !var10;
            if(var17) { _fun0008_ip = 843; continue _fun0008 }
 840:
            var17 = var6;
 843:
            _closure2_slot23 = var17;
            var6 = var3.length;
            var10 = var7 === var6;
            if(!var10) { _fun0008_ip = 868; continue _fun0008 }
 859:
            var6 = var11.length;
            var10 = var7 === var6;
 868:
            if(!var10) { _fun0008_ip = 880; continue _fun0008 }
 871:
            var6 = var12.length;
            var10 = var7 === var6;
 880:
            var7 = _closure1_slot5;
            var6 = var7.useMemo;
            var13 = var3.length;
            var3 = new Array(6);
            var3[0] = var13;
            var12 = var12.length;
            var3[1] = var12;
            var11 = var11.length;
            var3[2] = var11;
            var3[3] = var17;
            var3[4] = var8;
            var3[5] = var2;
            var2 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var1 = _closure2_slot23;
                    var3 = 1;
                    if(!var1) { _fun0017_ip = 16; continue _fun0017 }
 13:
                    var3 = 2;
 16:
                    var1 = new Array(4);
                    var1[0] = var3;
                    var5 = _closure2_slot20;
                    var3 = 4;
                    var4 = var3;
                    if(var5) { _fun0017_ip = 46; continue _fun0017 }
 37:
                    var5 = _closure2_slot15;
                    var4 = var5.length;
 46:
                    var1[1] = var4;
                    var4 = _closure2_slot21;
                    if(var4) { _fun0017_ip = 66; continue _fun0017 }
 57:
                    var4 = _closure2_slot16;
                    var3 = var4.length;
 66:
                    var1[2] = var3;
                    var2 = _closure2_slot19;
                    var2 = var2.length;
                    var1[3] = var2;
                    return var1;
                }
            };
            var18 = var6.bind(var7)(var2, var3);
            _closure2_slot24 = var18;
            var6 = var7.useCallback;
            var3 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var2 = arg1;
                    var1 = _closure1_slot20;
                    var1 = var1.FIND_FRIENDS;
                    if(!(var1 !== var2)) { _fun0018_ip = 313; continue _fun0018 }
 23:
                    var1 = _closure1_slot20;
                    var1 = var1.INCOMING_FRIEND_REQUESTS;
                    if(!(var1 !== var2)) { _fun0018_ip = 232; continue _fun0018 }
 40:
                    var1 = _closure1_slot20;
                    var1 = var1.INCOMING_GAME_FRIEND_REQUESTS;
                    if(!(var1 !== var2)) { _fun0018_ip = 151; continue _fun0018 }
 54:
                    var1 = _closure1_slot20;
                    var1 = var1.CONTACT_SUGGESTIONS;
                    if(!(var1 !== var2)) { _fun0018_ip = 72; continue _fun0018 }
 68:
                    var1 = undefined;
                    return var1;
 72:
                    var1 = {};
                    var2 = 'section';
                    var1['type'] = var2;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 16;
                    var5 = var9[var4];
                    var7 = undefined;
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var8.bind(var7)(var4);
                    var4 = var4.t;
                    var4 = var4.1uAmCw;
                    var4 = var5.bind(var6)(var4);
                    var2['title'] = var4;
                    var1['props'] = var2;
                    return var1;
 151:
                    var1 = {};
                    var2 = 'section';
                    var1['type'] = var2;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 16;
                    var5 = var9[var4];
                    var7 = undefined;
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var8.bind(var7)(var4);
                    var4 = var4.t;
                    var4 = var4.0uVuaW;
                    var4 = var5.bind(var6)(var4);
                    var2['title'] = var4;
                    var1['props'] = var2;
                    return var1;
 232:
                    var1 = {};
                    var2 = 'section';
                    var1['type'] = var2;
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 16;
                    var4 = var8[var3];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.93cLEx;
                    var3 = var4.bind(var5)(var3);
                    var2['title'] = var3;
                    var1['props'] = var2;
                    return var1;
 313:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = new Array(0);
            var14 = var6.bind(var7)(var3, var2);
            var3 = _closure1_slot19;
            var2 = _closure1_slot0;
            var22 = _closure1_slot2;
            var1 = var22[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var11 = _closure1_slot18;
            var20 = _closure1_slot1;
            var5 = 30;
            var5 = var22[var5];
            var6 = var20.bind(var4)(var5);
            var5 = {};
            var13 = true;
            var5['absolute'] = var13;
            var6 = var11.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var7 = _closure1_slot7;
            var6 = {};
            var8 = var19.container;
            var6['style'] = var8;
            var8 = {};
            var12 = var19.inviteAppsContainerNonSticky;
            var8['style'] = var12;
            var12 = 31;
            var12 = var22[var12];
            var20 = var20.bind(var4)(var12);
            var12 = {};
            var22 = _closure1_slot23;
            var12['onItemPressed'] = var22;
            var22 = var19.inviteAppsContentContainer;
            var12['contentContainerStyle'] = var22;
            var12 = var11.bind(var4)(var20, var12);
            var8['children'] = var12;
            var11 = var11.bind(var4)(var7, var8);
            var8 = new Array(2);
            var8[0] = var11;
            if(var9) { _fun0008_ip = 1234; continue _fun0008 }
 1135:
            if(var10) { _fun0008_ip = 1234; continue _fun0008 }
 1138:
            var12 = _closure1_slot18;
            var11 = _closure1_slot7;
            var9 = {};
            var20 = var19.loading;
            var9['style'] = var20;
            var22 = _closure1_slot6;
            var20 = {'animating': true, 'color': null, 'size': 'large'};
            var24 = _closure1_slot1;
            var25 = _closure1_slot2;
            var23 = 12;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.unsafe_rawColors;
            var23 = var23.BRAND_500;
            var20['color'] = var23;
            var20 = var12.bind(var4)(var22, var20);
            var9['children'] = var20;
            var9 = var12.bind(var4)(var11, var9);
            _fun0008_ip = 1590; continue _fun0008;
 1234:
            if(var10) { _fun0008_ip = 1315; continue _fun0008 }
 1237:
            var12 = _closure1_slot18;
            var11 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = 32;
            var10 = var20[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.UsersFastList;
            var10 = {};
            var10['sections'] = var18;
            var15 = function getItemProps(arg1, arg2) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var7 = arg1;
                    var5 = arg2;
                    var11 = 0;
                    var2 = var11 === var5;
                    var _closure3_slot0 = var2;
                    var4 = _closure2_slot24;
                    var6 = var4[var7];
                    var4 = 1;
                    var4 = var6 - var4;
                    var4 = var5 === var4;
                    var _closure3_slot1 = var4;
                    var8 = _closure1_slot20;
                    var8 = var8.FIND_FRIENDS;
                    if(!(var8 !== var7)) { _fun0019_ip = 451; continue _fun0019 }
 64:
                    var8 = _closure1_slot20;
                    var8 = var8.INCOMING_FRIEND_REQUESTS;
                    if(!(var8 !== var7)) { _fun0019_ip = 364; continue _fun0019 }
 81:
                    var8 = _closure1_slot20;
                    var8 = var8.INCOMING_GAME_FRIEND_REQUESTS;
                    if(!(var8 !== var7)) { _fun0019_ip = 235; continue _fun0019 }
 98:
                    var6 = _closure1_slot20;
                    var6 = var6.CONTACT_SUGGESTIONS;
                    if(!(var6 !== var7)) { _fun0019_ip = 116; continue _fun0019 }
 112:
                    var6 = undefined;
                    return var6;
 116:
                    var6 = _closure2_slot19;
                    var7 = var6[var5];
                    var _closure3_slot5 = var7;
                    var6 = {};
                    var8 = 'custom';
                    var6['type'] = var8;
                    var12 = null;
                    var10 = var12 == var7;
                    var8 = undefined;
                    if(var10) { _fun0019_ip = 155; continue _fun0019 }
 149:
                    var8 = var7.mutualFriendsCount;
 155:
                    var13 = var12 != var8;
                    var10 = 'contactSuggestionNoMutualCount';
                    var8 = var10;
                    if(!var13) { _fun0019_ip = 202; continue _fun0019 }
 171:
                    var12 = var12 == var7;
                    var9 = undefined;
                    if(var12) { _fun0019_ip = 186; continue _fun0019 }
 180:
                    var9 = var7.mutualFriendsCount;
 186:
                    var9 = var9 > var11;
                    var8 = var10;
                    if(!var9) { _fun0019_ip = 202; continue _fun0019 }
 196:
                    var8 = 'contactSuggestionMutualCount';
 202:
                    var6['itemType'] = var8;
                    var7 = var7.user;
                    var7 = var7.id;
                    var6['key'] = var7;
                    var7 = function component() {
                        var4 = _closure1_slot18;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 38;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.ContactSuggestionRow;
                        var1 = {};
                        var10 = _closure2_slot17;
                        var9 = var10.includes;
                        var8 = _closure3_slot5;
                        var8 = var9.bind(var10)(var8);
                        var1['added'] = var8;
                        var8 = _closure3_slot5;
                        var1['suggestedFriend'] = var8;
                        var8 = _closure3_slot0;
                        var1['start'] = var8;
                        var7 = _closure3_slot1;
                        var1['end'] = var7;
                        var6 = _closure2_slot14;
                        var1['onPress'] = var6;
                        var5 = _closure1_slot15;
                        var5 = var5.ADD_FRIENDS_MODAL;
                        var1['location'] = var5;
                        var5 = function onAddSuggestion() {
                            var3 = _closure2_slot18;
                            var2 = undefined;
                            var1 = function(arg1) {
                                var1 = new Array(1);
                                var5 = arg1;
                                var4 = 0;
                                var6 = var1;
                                var3 = arraySpread(var6, var5, var4);
                                var2 = _closure3_slot5;
                                var1[var3] = var2;
                                var2 = 1;
                                var2 = var3 + var2;
                                return var1;
                            };
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var1['onAddSuggestion'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var6['component'] = var7;
                    return var6;
 235:
                    if(!var4) { _fun0019_ip = 245; continue _fun0019 }
 238:
                    var6 = _closure2_slot21;
                    if(var6) { _fun0019_ip = 336; continue _fun0019 }
 245:
                    var6 = _closure2_slot16;
                    var6 = var6[var5];
                    var7 = var6.user;
                    var _closure3_slot3 = var7;
                    var11 = var6.applicationId;
                    var _closure3_slot4 = var11;
                    var6 = {'type': 'custom', 'itemType': 'incomingRequest'};
                    var10 = var7.id;
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var9 = var7.concat;
                    var8 = '';
                    var7 = '-';
                    var7 = var9.bind(var8)(var10, var7, var11);
                    var6['key'] = var7;
                    var7 = function component() {
                        var4 = _closure1_slot18;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 37;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.ConnectedIncomingGameFriendRequestRow;
                        var1 = {};
                        var8 = _closure2_slot9;
                        var7 = var8.find;
                        var6 = function(arg1) {
                            var4 = _closure1_slot26;
                            var3 = {};
                            var2 = _closure3_slot3;
                            var2 = var2.id;
                            var3['userId'] = var2;
                            var1 = _closure3_slot4;
                            var3['applicationId'] = var1;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var4.bind(var2)(var1, var3);
                            return var1;
                        };
                        var7 = var7.bind(var8)(var6);
                        var6 = null;
                        var6 = var6 != var7;
                        var1['accepted'] = var6;
                        var7 = _closure3_slot4;
                        var1['applicationId'] = var7;
                        var7 = _closure3_slot3;
                        var1['user'] = var7;
                        var7 = _closure3_slot0;
                        var1['start'] = var7;
                        var6 = _closure3_slot1;
                        var1['end'] = var6;
                        var6 = _closure2_slot14;
                        var1['onPress'] = var6;
                        var6 = _closure2_slot12;
                        var1['onDeclineIncomingRequest'] = var6;
                        var5 = _closure2_slot11;
                        var1['onAcceptIncomingRequest'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var6['component'] = var7;
                    return var6;
 336:
                    var6 = {'type': 'custom', 'itemType': 'viewAll', 'key': 'gameFriendRequestsViewAll'};
                    var7 = function component() {
                        var4 = _closure1_slot18;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 36;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var5 = function onPress() {
                            var3 = _closure2_slot0;
                            var2 = var3.navigate;
                            var1 = 'requests';
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var1['onPress'] = var5;
                        var5 = _closure2_slot16;
                        var8 = var5.slice;
                        var7 = 3;
                        var8 = var8.bind(var5)(var7);
                        var7 = var8.map;
                        var6 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.user;
                            return var1;
                        };
                        var6 = var7.bind(var8)(var6);
                        var1['users'] = var6;
                        var5 = var5.length;
                        var1['count'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var6['component'] = var7;
                    return var6;
 364:
                    if(!var4) { _fun0019_ip = 374; continue _fun0019 }
 367:
                    var4 = _closure2_slot20;
                    if(var4) { _fun0019_ip = 423; continue _fun0019 }
 374:
                    var4 = _closure2_slot15;
                    var5 = var4[var5];
                    var _closure3_slot2 = var5;
                    var4 = {'type': 'custom', 'itemType': 'incomingRequest'};
                    var5 = var5.id;
                    var4['key'] = var5;
                    var5 = function component() {
                        var4 = _closure1_slot18;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 37;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.IncomingFriendRequestRow;
                        var1 = {};
                        var9 = _closure2_slot5;
                        var8 = var9.includes;
                        var7 = _closure3_slot2;
                        var7 = var7.id;
                        var7 = var8.bind(var9)(var7);
                        var1['accepted'] = var7;
                        var7 = _closure3_slot2;
                        var1['user'] = var7;
                        var7 = _closure3_slot0;
                        var1['start'] = var7;
                        var6 = _closure3_slot1;
                        var1['end'] = var6;
                        var6 = _closure2_slot14;
                        var1['onPress'] = var6;
                        var6 = _closure2_slot12;
                        var1['onDeclineIncomingRequest'] = var6;
                        var5 = _closure2_slot11;
                        var1['onAcceptIncomingRequest'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var4['component'] = var5;
                    return var4;
 423:
                    var4 = {'type': 'custom', 'itemType': 'viewAll', 'key': 'friendRequestsViewAll'};
                    var5 = function component() {
                        var4 = _closure1_slot18;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 36;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var5 = function onPress() {
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 23;
                            var3 = var3[var1];
                            var1 = undefined;
                            var6 = var4.bind(var1)(var3);
                            var5 = var6.track;
                            var3 = _closure1_slot13;
                            var4 = var3.FRIEND_FINDER_SECTION_EXPANDED;
                            var3 = {};
                            var2 = _closure1_slot12;
                            var2 = var2.PENDING;
                            var3['section_id'] = var2;
                            var2 = 3;
                            var3['truncated_count'] = var2;
                            var7 = _closure2_slot15;
                            var7 = var7.length;
                            var3['expanded_count'] = var7;
                            var7 = 'AddFriends';
                            var3['location'] = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            var4 = _closure2_slot0;
                            var3 = var4.navigate;
                            var2 = 'requests';
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var1['onPress'] = var5;
                        var5 = _closure2_slot15;
                        var7 = var5.slice;
                        var6 = 3;
                        var6 = var7.bind(var5)(var6);
                        var1['users'] = var6;
                        var5 = var5.length;
                        var1['count'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var4['component'] = var5;
                    return var4;
 451:
                    if(!var2) { _fun0019_ip = 461; continue _fun0019 }
 454:
                    var1 = _closure2_slot23;
                    if(var1) { _fun0019_ip = 489; continue _fun0019 }
 461:
                    var1 = {'type': 'custom', 'itemType': 'addByUsername', 'key': 'addByUsername'};
                    var2 = function component() {
                        var4 = _closure1_slot18;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var6 = 33;
                        var1 = var10[var6];
                        var3 = undefined;
                        var1 = var9.bind(var3)(var1);
                        var2 = var1.TableRow;
                        var1 = {'start': null, 'end': true, 'label': null, 'labelLineClamp': 1, 'icon': null, 'arrow': true};
                        var7 = _closure2_slot23;
                        var7 = !var7;
                        var1['start'] = var7;
                        var7 = 16;
                        var8 = var10[var7];
                        var8 = var9.bind(var3)(var8);
                        var11 = var8.intl;
                        var8 = var11.string;
                        var7 = var10[var7];
                        var7 = var9.bind(var3)(var7);
                        var7 = var7.t;
                        var7 = var7.QzVsOj;
                        var7 = var8.bind(var11)(var7);
                        var1['label'] = var7;
                        var6 = var10[var6];
                        var6 = var9.bind(var3)(var6);
                        var6 = var6.TableRow;
                        var7 = var6.Icon;
                        var6 = {};
                        var8 = 35;
                        var8 = var10[var8];
                        var8 = var9.bind(var3)(var8);
                        var8 = var8.AtIcon;
                        var6['IconComponent'] = var8;
                        var6 = var4.bind(var3)(var7, var6);
                        var1['icon'] = var6;
                        var5 = _closure2_slot13;
                        var1['onPress'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var1['component'] = var2;
                    _fun0019_ip = 518; continue _fun0019;
 489:
                    var2 = {'type': 'custom', 'itemType': 'showContactSyncCTA', 'key': 'showContactSyncCTA'};
                    var3 = function component() {
                        var4 = _closure1_slot18;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 33;
                        var1 = var8[var6];
                        var3 = undefined;
                        var1 = var7.bind(var3)(var1);
                        var2 = var1.TableRow;
                        var1 = {'start': true, 'label': null, 'labelLineClamp': 1};
                        var9 = 16;
                        var10 = var8[var9];
                        var10 = var7.bind(var3)(var10);
                        var11 = var10.intl;
                        var10 = var11.string;
                        var9 = var8[var9];
                        var9 = var7.bind(var3)(var9);
                        var9 = var9.t;
                        var9 = var9.j2POVl;
                        var9 = var10.bind(var11)(var9);
                        var1['label'] = var9;
                        var9 = var8[var6];
                        var9 = var7.bind(var3)(var9);
                        var9 = var9.TableRow;
                        var10 = var9.Icon;
                        var9 = {};
                        var11 = 34;
                        var11 = var8[var11];
                        var11 = var7.bind(var3)(var11);
                        var11 = var11.FriendsIcon;
                        var9['IconComponent'] = var11;
                        var11 = 'blurple';
                        var9['variant'] = var11;
                        var9 = var4.bind(var3)(var10, var9);
                        var1['icon'] = var9;
                        var6 = var8[var6];
                        var6 = var7.bind(var3)(var6);
                        var6 = var6.TableRow;
                        var7 = var6.Arrow;
                        var6 = {};
                        var6 = var4.bind(var3)(var7, var6);
                        var1['trailing'] = var6;
                        var5 = _closure1_slot22;
                        var1['onPress'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2['component'] = var3;
                    var1 = var2;
 518:
                    return var1;
                }
            };
            var10['getItemProps'] = var15;
            var10['getSectionProps'] = var14;
            var14 = 12;
            var10['insetEnd'] = var14;
            var10['disableStickySections'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            _fun0008_ip = 1587; continue _fun0008;
 1315:
            var13 = _closure1_slot19;
            var12 = _closure1_slot8;
            var11 = {};
            var14 = var19.emptyContainer;
            var11['style'] = var14;
            var18 = _closure1_slot18;
            var15 = _closure1_slot7;
            var14 = {};
            var19 = var19.emptyActionContainer;
            var14['style'] = var19;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var22 = 33;
            var19 = var26[var22];
            var19 = var25.bind(var4)(var19);
            var20 = var19.TableRow;
            var19 = {'label': null, 'labelLineClamp': 1, 'icon': null, 'arrow': true, 'onPress': null, 'start': true, 'end': true};
            var23 = 16;
            var24 = var26[var23];
            var24 = var25.bind(var4)(var24);
            var27 = var24.intl;
            var24 = var27.string;
            var23 = var26[var23];
            var23 = var25.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.QzVsOj;
            var23 = var24.bind(var27)(var23);
            var19['label'] = var23;
            var22 = var26[var22];
            var22 = var25.bind(var4)(var22);
            var22 = var22.TableRow;
            var23 = var22.Icon;
            var22 = {};
            var24 = 35;
            var24 = var26[var24];
            var24 = var25.bind(var4)(var24);
            var24 = var24.AtIcon;
            var22['IconComponent'] = var24;
            var22 = var18.bind(var4)(var23, var22);
            var19['icon'] = var22;
            var19['onPress'] = var21;
            var19 = var18.bind(var4)(var20, var19);
            var14['children'] = var19;
            var15 = var18.bind(var4)(var15, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var15 = null;
            if(!var17) { _fun0008_ip = 1573; continue _fun0008 }
 1541:
            var18 = _closure1_slot18;
            var17 = _closure1_slot1;
            var19 = _closure1_slot2;
            var16 = 39;
            var16 = var19[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var15 = var18.bind(var4)(var17, var16);
 1573:
            var14[1] = var15;
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
 1587:
            var9 = var10;
 1590:
            var8[1] = var9;
            var6['children'] = var8;
            var6 = var3.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
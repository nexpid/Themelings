// app/modules/main_tabs_v2/native/friends/screens/FriendRequestsScreen.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function compareUserItems(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var1 = var3.user;
            var4 = var1.id;
            var1 = var2.user;
            var1 = var1.id;
            if(!(var4 !== var1)) { _fun0001_ip = 89; continue _fun0001 }
 30:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 20;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.compare;
            var1 = var3.user;
            var4 = var1.id;
            var1 = var2.user;
            var1 = var1.id;
            var1 = var5.bind(var6)(var4, var1);
            _fun0001_ip = 136; continue _fun0001;
 89:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 20;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.compare;
            var3 = var3.applicationId;
            var2 = var2.applicationId;
            var1 = var4.bind(var5)(var3, var2);
 136:
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
    var8 = 0;
    var4 = var6[var8];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var7 = var6[var10];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var16 = 2;
    var4 = var6[var16];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var13 = 3;
    var4 = var6[var13];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var14 = 5;
    var4 = var6[var14];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserRowModes;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot10 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot11 = var7;
    var4 = var4.RelationshipTypes;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MINIMUM_PENDING_INCOMING_COUNT_FOR_CLEAR_ALL;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = {};
    var4['Incoming'] = var8;
    var7 = 'Incoming';
    var4[var8] = var7;
    var4['Outgoing'] = var10;
    var7 = 'Outgoing';
    var4[var10] = var7;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['container'] = var9;
    var9 = {};
    var11 = 11;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var15;
    var9['flex'] = var10;
    var4['noResultsContainer'] = var9;
    var9 = {};
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var10;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['paddingHorizontal'] = var10;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['paddingBottom'] = var10;
    var10 = 'flex-end';
    var9['justifyContent'] = var10;
    var10 = 'row';
    var9['flexDirection'] = var10;
    var4['clearAllContainer'] = var9;
    var9 = {};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.INPUT_BACKGROUND;
    var9['backgroundColor'] = var15;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.INPUT_BACKGROUND;
    var9['borderColor'] = var15;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var9['paddingHorizontal'] = var15;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_64;
    var15 = var16 * var15;
    var9['minWidth'] = var15;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var9['borderRadius'] = var15;
    var15 = 'center';
    var9['alignItems'] = var15;
    var9['paddingVertical'] = var14;
    var9['borderWidth'] = var13;
    var4['clearAll'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingHorizontal'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingBottom'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['paddingTop'] = var13;
    var4['tabs'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9['paddingTop'] = var11;
    var9['flexDirection'] = var10;
    var4['tabsContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = 40;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/friends/screens/FriendRequestsScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FriendRequestsScreen() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = _closure1_slot17;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 21;
            var2 = var12[var1];
            var5 = var3.bind(var4)(var2);
            var2 = 22;
            var2 = var12[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.FRIEND_REQUESTS;
            var2 = var5.bind(var4)(var2);
            var5 = var2.analyticsLocations;
            var _closure2_slot0 = var5;
            var2 = function useNotificationCenterAckFriendRequests() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 15;
                var4 = var6[var1];
                var1 = undefined;
                var9 = var5.bind(var1)(var4);
                var8 = var9.useStateFromStoresArray;
                var4 = _closure1_slot6;
                var7 = new Array(1);
                var7[0] = var4;
                var4 = function() {
                    var1 = _closure1_slot6;
                    var3 = var1.localItems;
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var3 = arg1;
                            var4 = var3.type;
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var6 = 16;
                            var1 = var1[var6];
                            var5 = undefined;
                            var1 = var7.bind(var5)(var1);
                            var1 = var1.NotificationCenterLocalItems;
                            var1 = var1.INCOMING_FRIEND_REQUESTS;
                            var1 = var4 === var1;
                            if(var1) { _fun0003_ip = 90; continue _fun0003 }
 52:
                            var3 = var3.type;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.NotificationCenterLocalItems;
                            var2 = var2.INCOMING_GAME_FRIEND_REQUESTS;
                            var1 = var3 === var2;
 90:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7 = var8.bind(var9)(var7, var4);
                var _closure3_slot0 = var7;
                var4 = 17;
                var4 = var6[var4];
                var4 = var5.bind(var1)(var4);
                var5 = var4.NotificationCenterAckedBeforeId;
                var4 = var5.useSetting;
                var6 = var4.bind(var5)();
                var _closure3_slot1 = var6;
                var5 = _closure1_slot4;
                var4 = var5.useEffect;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var6;
                var2 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var3 = _closure3_slot0;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(var4 > var3)) { _fun0004_ip = 132; continue _fun0004 }
 20:
                        var5 = _closure3_slot0;
                        var3 = var5.map;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.local_id;
                            return var1;
                        };
                        var4 = var3.bind(var5)(var2);
                        var3 = var4.filter;
                        var2 = global;
                        var2 = var2.Boolean;
                        var9 = var3.bind(var4)(var2);
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 18;
                        var7 = var6[var2];
                        var3 = undefined;
                        var8 = var4.bind(var3)(var7);
                        var7 = var8.markNotificationCenterLocalItemsAcked;
                        var7 = var7.bind(var8)(var9);
                        var2 = var6[var2];
                        var3 = var4.bind(var3)(var2);
                        var2 = var3.bulkMarkNotificationCenterItemsAcked;
                        var4 = var5.filter;
                        var1 = function(arg1) {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 19;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.isRemoteAcked;
                            var2 = _closure3_slot1;
                            var1 = arg1;
                            var1 = var3.bind(var4)(var1, var2);
                            var1 = !var1;
                            return var1;
                        };
                        var1 = var4.bind(var5)(var1);
                        var1 = var2.bind(var3)(var1);
 132:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var2 = var2.bind(var4)();
            var14 = _closure1_slot4;
            var7 = var14.useEffect;
            var6 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot10;
                var3 = var2.FRIEND_ADD_VIEWED;
                var2 = {};
                var6 = _closure1_slot11;
                var6 = var6.FRIENDS_REQUESTS_MODAL;
                var2['friend_add_type'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = new Array(0);
            var2 = var7.bind(var14)(var6, var2);
            var10 = _closure1_slot0;
            var8 = 15;
            var2 = var12[var8];
            var9 = var10.bind(var4)(var2);
            var7 = var9.useStateFromStoresArray;
            var2 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var3 = _closure1_slot7;
                var1 = var3.getMutableRelationships;
                var2 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var2;
                var2 = var3.getVersion;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var2 = var7.bind(var9)(var6, var2);
            var20 = _closure1_slot3;
            var18 = 2;
            var2 = var20.bind(var4)(var2, var18);
            var7 = 0;
            var15 = var2[var7];
            var _closure2_slot1 = var15;
            var11 = 1;
            var2 = var2[var11];
            var _closure2_slot2 = var2;
            var9 = 24;
            var6 = var12[var9];
            var21 = var10.bind(var4)(var6);
            var19 = var21.useGameRelationshipsByType;
            var6 = _closure1_slot12;
            var16 = var6.PENDING_INCOMING;
            var23 = var19.bind(var21)(var16);
            var _closure2_slot3 = var23;
            var9 = var12[var9];
            var16 = var10.bind(var4)(var9);
            var9 = var16.useGameRelationshipsByType;
            var6 = var6.PENDING_OUTGOING;
            var22 = var9.bind(var16)(var6);
            var _closure2_slot4 = var22;
            var16 = var14.useMemo;
            var9 = new Array(2);
            var9[0] = var23;
            var9[1] = var22;
            var6 = function() {
                var1 = global;
                var3 = var1.Set;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var9 = var4;
                var3 = new var9[var3](var8);
                var3 = var3 instanceof Object ? var3 : var4;
                var _closure3_slot0 = var3;
                var7 = _closure2_slot3;
                var6 = var7.forEach;
                var5 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.add;
                    var1 = arg1;
                    var1 = var1.applicationId;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var5 = var6.bind(var7)(var5);
                var5 = _closure2_slot4;
                var4 = var5.forEach;
                var2 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.add;
                    var1 = arg1;
                    var1 = var1.applicationId;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
                var2 = var1.Array;
                var1 = var2.from;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var9 = var16.bind(var14)(var6, var9);
            var6 = 25;
            var6 = var12[var6];
            var6 = var3.bind(var4)(var6);
            var6 = var6.bind(var4)(var9);
            var9 = var14.useMemo;
            var6 = new Array(2);
            var6[0] = var15;
            var6[1] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getPendingRelationshipIds;
                var2 = _closure2_slot1;
                var1 = _closure2_slot2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var6 = var9.bind(var14)(var2, var6);
            var21 = var6.pendingIncomingIds;
            var _closure2_slot5 = var21;
            var19 = var6.pendingOutgoingIds;
            var _closure2_slot6 = var19;
            var2 = var6.spamIds;
            var _closure2_slot7 = var2;
            var6 = var6.ignoredUserIds;
            var _closure2_slot8 = var6;
            var8 = var12[var8];
            var16 = var10.bind(var4)(var8);
            var15 = var16.useStateFromStores;
            var8 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = new Array(6);
            var8[0] = var6;
            var8[1] = var23;
            var8[2] = var22;
            var8[3] = var21;
            var8[4] = var19;
            var8[5] = var2;
            var2 = 27;
            var2 = var12[var2];
            var31 = var3.bind(var4)(var2);
            var33 = function() {
                var5 = _closure2_slot5;
                var4 = var5.map;
                var1 = function(arg1) {
                    var1 = {};
                    var4 = _closure1_slot8;
                    var3 = var4.getUser;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
                    var1['user'] = var2;
                    var2 = false;
                    var1['isGameRelationship'] = var2;
                    return var1;
                };
                var5 = var4.bind(var5)(var1);
                var4 = var5.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.user;
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var11 = var4.bind(var5)(var1);
                var6 = _closure2_slot3;
                var4 = var6.map;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var5 = _closure1_slot8;
                    var4 = var5.getUser;
                    var3 = var2.id;
                    var3 = var4.bind(var5)(var3);
                    var1['user'] = var3;
                    var3 = true;
                    var1['isGameRelationship'] = var3;
                    var2 = var2.applicationId;
                    var1['applicationId'] = var2;
                    return var1;
                };
                var6 = var4.bind(var6)(var1);
                var4 = var6.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.user;
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var6 = var4.bind(var6)(var1);
                var7 = _closure2_slot6;
                var4 = var7.map;
                var1 = function(arg1) {
                    var1 = {};
                    var4 = _closure1_slot8;
                    var3 = var4.getUser;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
                    var1['user'] = var2;
                    var2 = false;
                    var1['isGameRelationship'] = var2;
                    return var1;
                };
                var7 = var4.bind(var7)(var1);
                var4 = var7.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.user;
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var8 = var4.bind(var7)(var1);
                var7 = _closure2_slot4;
                var4 = var7.map;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var5 = _closure1_slot8;
                    var4 = var5.getUser;
                    var3 = var2.id;
                    var3 = var4.bind(var5)(var3);
                    var1['user'] = var3;
                    var3 = true;
                    var1['isGameRelationship'] = var3;
                    var2 = var2.applicationId;
                    var1['applicationId'] = var2;
                    return var1;
                };
                var7 = var4.bind(var7)(var1);
                var4 = var7.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.user;
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var7 = var4.bind(var7)(var1);
                var1 = {};
                var9 = new Array(0);
                var12 = var9;
                var10 = 0;
                var10 = arraySpread(var12, var11, var10);
                var12 = var9;
                var11 = var6;
                var5 = arraySpread(var12, var11, var10);
                var5 = var9.sort;
                var6 = _closure1_slot18;
                var5 = var5.bind(var9)(var6);
                var1['incoming'] = var5;
                var5 = new Array(0);
                var12 = var5;
                var11 = var8;
                var10 = 0;
                var10 = arraySpread(var12, var11, var10);
                var12 = var5;
                var11 = var7;
                var4 = arraySpread(var12, var11, var10);
                var4 = var5.sort;
                var4 = var4.bind(var5)(var6);
                var1['outgoing'] = var4;
                var6 = _closure2_slot7;
                var5 = var6.map;
                var4 = function(arg1) {
                    var1 = {};
                    var4 = _closure1_slot8;
                    var3 = var4.getUser;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
                    var1['user'] = var2;
                    return var1;
                };
                var6 = var5.bind(var6)(var4);
                var5 = var6.filter;
                var4 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.user;
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var4 = var5.bind(var6)(var4);
                var1['spam'] = var4;
                var5 = _closure2_slot8;
                var4 = var5.map;
                var3 = function(arg1) {
                    var1 = {};
                    var4 = _closure1_slot8;
                    var3 = var4.getUser;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
                    var1['user'] = var2;
                    return var1;
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.filter;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.user;
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var1['ignoredUsers'] = var2;
                return var1;
            };
            var35 = var16;
            var34 = var9;
            var32 = var8;
            var9 = var35[var15](var34, var33, var32, var31, var30);
            var2 = var9.incoming;
            var _closure2_slot9 = var2;
            var3 = var9.outgoing;
            var _closure2_slot10 = var3;
            var8 = var9.spam;
            var _closure2_slot11 = var8;
            var15 = var9.ignoredUsers;
            var _closure2_slot12 = var15;
            var19 = var14.useMemo;
            var16 = new Array(4);
            var16[0] = var15;
            var16[1] = var2;
            var16[2] = var3;
            var16[3] = var8;
            var9 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot11;
                    var3 = var1.length;
                    var1 = _closure2_slot12;
                    var1 = var1.length;
                    var6 = var3 + var1;
                    var1 = {};
                    var5 = {};
                    var3 = _closure2_slot9;
                    var5['items'] = var3;
                    var7 = _closure1_slot12;
                    var7 = var7.PENDING_INCOMING;
                    var5['relationship'] = var7;
                    var1['incomingData'] = var5;
                    var5 = var3.length;
                    var3 = new Array(2);
                    var3[0] = var5;
                    var5 = 0;
                    if(!(var6 > var5)) { _fun0005_ip = 83; continue _fun0005 }
 80:
                    var5 = 1;
 83:
                    var3[1] = var5;
                    var1['incomingSection'] = var3;
                    var3 = {};
                    var2 = _closure2_slot10;
                    var3['items'] = var2;
                    var4 = _closure1_slot12;
                    var4 = var4.PENDING_OUTGOING;
                    var3['relationship'] = var4;
                    var1['outgoingData'] = var3;
                    var3 = var2.length;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['outgoingSection'] = var2;
                    return var1;
                }
            };
            var9 = var19.bind(var14)(var9, var16);
            var22 = var9.incomingData;
            var _closure2_slot13 = var22;
            var19 = var9.incomingSection;
            var21 = var9.outgoingData;
            var _closure2_slot14 = var21;
            var16 = var9.outgoingSection;
            var23 = var14.useState;
            var9 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot9;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(var2 === var3)) { _fun0006_ip = 31; continue _fun0006 }
 18:
                    var1 = _closure2_slot10;
                    var1 = var1.length;
                    if(!(!(var1 > var2))) { _fun0006_ip = 46; continue _fun0006 }
 31:
                    var1 = _closure1_slot16;
                    var1 = var1.Incoming;
                    _fun0006_ip = 59; continue _fun0006;
 46:
                    var2 = _closure1_slot16;
                    var1 = var2.Outgoing;
 59:
                    return var1;
                }
            };
            var9 = var23.bind(var14)(var9);
            var9 = var20.bind(var4)(var9, var18);
            var18 = var9[var7];
            var _closure2_slot15 = var18;
            var9 = var9[var11];
            var _closure2_slot16 = var9;
            var20 = var14.useCallback;
            var11 = new Array(1);
            var11[0] = var5;
            var9 = function(arg1) {
                var4 = arg1;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = var4.id;
                var2['userId'] = var5;
                var2['localUser'] = var4;
                var4 = _closure2_slot0;
                var2['sourceAnalyticsLocations'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var20 = var20.bind(var14)(var9, var11);
            var _closure2_slot17 = var20;
            var23 = var14.useCallback;
            var11 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = 1;
                    var1 = arg1;
                    if(!(var2 !== var1)) { _fun0007_ip = 14; continue _fun0007 }
 10:
                    var1 = undefined;
                    return var1;
 14:
                    var1 = {};
                    var2 = 'section';
                    var1['type'] = var2;
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 29;
                    var4 = var8[var3];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.NHpP/v;
                    var3 = var4.bind(var5)(var3);
                    var2['title'] = var3;
                    var1['props'] = var2;
                    return var1;
                }
            };
            var9 = new Array(0);
            var11 = var23.bind(var14)(var11, var9);
            var9 = 30;
            var9 = var12[var9];
            var10 = var10.bind(var4)(var9);
            var9 = var10.useNavigation;
            var9 = var9.bind(var10)();
            var _closure2_slot18 = var9;
            var12 = var14.useCallback;
            var10 = new Array(7);
            var10[0] = var18;
            var10[1] = var22;
            var10[2] = var21;
            var10[3] = var20;
            var20 = var8.length;
            var10[4] = var20;
            var15 = var15.length;
            var10[5] = var15;
            var10[6] = var9;
            var9 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = arg2;
                    var6 = 1;
                    var1 = arg1;
                    if(!(var6 !== var1)) { _fun0008_ip = 174; continue _fun0008 }
 16:
                    var2 = _closure2_slot15;
                    var1 = _closure1_slot16;
                    var1 = var1.Incoming;
                    if(!(var2 !== var1)) { _fun0008_ip = 46; continue _fun0008 }
 40:
                    var8 = _closure2_slot14;
                    _fun0008_ip = 50; continue _fun0008;
 46:
                    var8 = _closure2_slot13;
 50:
                    var3 = var8.items;
                    var1 = {};
                    var2 = 'user';
                    var1['type'] = var2;
                    var2 = {};
                    var8 = var8.relationship;
                    var2['type'] = var8;
                    var8 = var3[var4];
                    var8 = var8.user;
                    var2['user'] = var8;
                    var7 = _closure2_slot17;
                    var2['onPress'] = var7;
                    var5 = _closure1_slot9;
                    var5 = var5.ACTIONS;
                    var2['mode'] = var5;
                    var5 = 0;
                    var5 = var5 === var4;
                    var2['start'] = var5;
                    var5 = var3.length;
                    var5 = var5 - var6;
                    var5 = var4 === var5;
                    var2['end'] = var5;
                    var5 = var3[var4];
                    var5 = var5.applicationId;
                    var2['applicationId'] = var5;
                    var3 = var3[var4];
                    var3 = var3.isGameRelationship;
                    var2['isGameRelationship'] = var3;
                    var1['props'] = var2;
                    return var1;
 174:
                    var1 = {'type': 'custom', 'component': null, 'key': 'spamRequests', 'itemType': 'spamRequests'};
                    var2 = function component() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var4 = _closure1_slot15;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 31;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.TableRowGroup;
                            var1 = {};
                            var5 = _closure2_slot11;
                            var5 = var5.length;
                            var9 = 0;
                            var5 = var5 > var9;
                            var8 = null;
                            if(!var5) { _fun0009_ip = 229; continue _fun0009 }
 65:
                            var13 = _closure1_slot14;
                            var15 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var5 = 32;
                            var5 = var16[var5];
                            var5 = var15.bind(var3)(var5);
                            var11 = var5.TableRow;
                            var5 = {};
                            var14 = function onPress() {
                                var4 = _closure2_slot18;
                                var3 = var4.navigate;
                                var2 = {};
                                var1 = 'spam-requests';
                                var2['screen'] = var1;
                                var1 = 'friends';
                                var1 = var3.bind(var4)(var1, var2);
                                var1 = undefined;
                                return var1;
                            };
                            var5['onPress'] = var14;
                            var14 = 29;
                            var17 = var16[var14];
                            var17 = var15.bind(var3)(var17);
                            var18 = var17.intl;
                            var17 = var18.string;
                            var14 = var16[var14];
                            var14 = var15.bind(var3)(var14);
                            var14 = var14.t;
                            var14 = var14.fUQoqK;
                            var14 = var17.bind(var18)(var14);
                            var5['label'] = var14;
                            var14 = 33;
                            var14 = var16[var14];
                            var14 = var15.bind(var3)(var14);
                            var15 = var14.Text;
                            var14 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                            var16 = _closure2_slot11;
                            var16 = var16.length;
                            var14['children'] = var16;
                            var14 = var13.bind(var3)(var15, var14);
                            var5['trailing'] = var14;
                            var14 = true;
                            var5['arrow'] = var14;
                            var8 = var13.bind(var3)(var11, var5);
 229:
                            var5 = new Array(2);
                            var5[0] = var8;
                            var8 = _closure2_slot12;
                            var8 = var8.length;
                            var8 = var8 > var9;
                            var6 = null;
                            if(!var8) { _fun0009_ip = 422; continue _fun0009 }
 258:
                            var9 = _closure1_slot14;
                            var11 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var7 = 32;
                            var7 = var13[var7];
                            var7 = var11.bind(var3)(var7);
                            var8 = var7.TableRow;
                            var7 = {};
                            var10 = function onPress() {
                                var4 = _closure2_slot18;
                                var3 = var4.navigate;
                                var2 = {};
                                var1 = 'ignored-user-requests';
                                var2['screen'] = var1;
                                var1 = 'friends';
                                var1 = var3.bind(var4)(var1, var2);
                                var1 = undefined;
                                return var1;
                            };
                            var7['onPress'] = var10;
                            var10 = 29;
                            var14 = var13[var10];
                            var14 = var11.bind(var3)(var14);
                            var15 = var14.intl;
                            var14 = var15.string;
                            var10 = var13[var10];
                            var10 = var11.bind(var3)(var10);
                            var10 = var10.t;
                            var10 = var10.en1Gk5;
                            var10 = var14.bind(var15)(var10);
                            var7['label'] = var10;
                            var10 = 33;
                            var10 = var13[var10];
                            var10 = var11.bind(var3)(var10);
                            var11 = var10.Text;
                            var10 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                            var12 = _closure2_slot12;
                            var12 = var12.length;
                            var10['children'] = var12;
                            var10 = var9.bind(var3)(var11, var10);
                            var7['trailing'] = var10;
                            var10 = true;
                            var7['arrow'] = var10;
                            var6 = var9.bind(var3)(var8, var7);
 422:
                            var5[1] = var6;
                            var1['children'] = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        }
                    };
                    var1['component'] = var2;
                    return var1;
                }
            };
            var14 = var12.bind(var14)(var9, var10);
            var9 = _closure1_slot16;
            var9 = var9.Outgoing;
            var9 = var18 === var9;
            if(!var9) { _fun0002_ip = 769; continue _fun0002 }
 760:
            var3 = var3.length;
            var9 = var7 === var3;
 769:
            if(var9) { _fun0002_ip = 825; continue _fun0002 }
 772:
            var3 = _closure1_slot16;
            var3 = var3.Incoming;
            var3 = var18 === var3;
            if(!var3) { _fun0002_ip = 798; continue _fun0002 }
 789:
            var10 = var2.length;
            var3 = var7 === var10;
 798:
            if(!var3) { _fun0002_ip = 810; continue _fun0002 }
 801:
            var8 = var8.length;
            var3 = var7 === var8;
 810:
            if(!var3) { _fun0002_ip = 822; continue _fun0002 }
 813:
            var6 = var6.length;
            var3 = var7 === var6;
 822:
            var9 = var3;
 825:
            var3 = _closure1_slot16;
            var3 = var3.Incoming;
            var12 = var18 === var3;
            if(!var12) { _fun0002_ip = 855; continue _fun0002 }
 842:
            var3 = var2.length;
            var2 = _closure1_slot13;
            var12 = var3 >= var2;
 855:
            var23 = _closure1_slot0;
            var26 = _closure1_slot2;
            var2 = 34;
            var2 = var26[var2];
            var6 = var23.bind(var4)(var2);
            var3 = var6.useSegmentedControlState;
            var2 = {};
            var2['pageWidth'] = var7;
            var2['defaultIndex'] = var18;
            var7 = function onSetActiveIndex(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure2_slot16;
                    var2 = 0;
                    var1 = arg1;
                    if(!(var2 !== var1)) { _fun0010_ip = 31; continue _fun0010 }
 16:
                    var1 = _closure1_slot16;
                    var2 = var1.Outgoing;
                    _fun0010_ip = 44; continue _fun0010;
 31:
                    var1 = _closure1_slot16;
                    var2 = var1.Incoming;
 44:
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var2['onSetActiveIndex'] = var7;
            var8 = {};
            var15 = _closure1_slot16;
            var10 = var15.Incoming;
            var7 = var10.toString;
            var7 = var7.bind(var10)();
            var8['id'] = var7;
            var21 = 29;
            var7 = var26[var21];
            var7 = var23.bind(var4)(var7);
            var20 = var7.intl;
            var10 = var20.string;
            var7 = var26[var21];
            var7 = var23.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.bekioK;
            var7 = var10.bind(var20)(var7);
            var8['label'] = var7;
            var10 = null;
            var8['page'] = var10;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = {};
            var20 = var15.Outgoing;
            var15 = var20.toString;
            var15 = var15.bind(var20)();
            var8['id'] = var15;
            var15 = var26[var21];
            var15 = var23.bind(var4)(var15);
            var22 = var15.intl;
            var20 = var22.string;
            var15 = var26[var21];
            var15 = var23.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.tWqcIC;
            var15 = var20.bind(var22)(var15);
            var8['label'] = var15;
            var8['page'] = var10;
            var7[1] = var8;
            var2['items'] = var7;
            var24 = var3.bind(var6)(var2);
            var3 = _closure1_slot15;
            var1 = var26[var1];
            var1 = var23.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var20 = _closure1_slot14;
            var6 = _closure1_slot1;
            var5 = 35;
            var5 = var26[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var15 = true;
            var5['absolute'] = var15;
            var6 = var20.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var7 = _closure1_slot5;
            var6 = {};
            var8 = var13.container;
            var6['style'] = var8;
            var8 = {};
            var22 = var13.tabs;
            var8['style'] = var22;
            var22 = 36;
            var22 = var26[var22];
            var22 = var23.bind(var4)(var22);
            var23 = var22.SegmentedControl;
            var22 = {};
            var22['state'] = var24;
            var22 = var20.bind(var4)(var23, var22);
            var8['children'] = var22;
            var20 = var20.bind(var4)(var7, var8);
            var8 = new Array(3);
            var8[0] = var20;
            if(!var12) { _fun0002_ip = 1413; continue _fun0002 }
 1237:
            var22 = _closure1_slot14;
            var20 = _closure1_slot5;
            var12 = {};
            var23 = var13.clearAllContainer;
            var12['style'] = var23;
            var30 = _closure1_slot0;
            var27 = _closure1_slot2;
            var23 = 37;
            var23 = var27[var23];
            var23 = var30.bind(var4)(var23);
            var24 = var23.PressableOpacity;
            var23 = {};
            var26 = var13.clearAll;
            var23['style'] = var26;
            var25 = function onPress() {
                var1 = _closure2_slot9;
                var3 = var1.length;
                var2 = function handleClearAllIncomingRequests(arg1) {
                    var4 = _closure1_slot4;
                    var3 = var4.lazy;
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 13;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 12;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var6 = var3.bind(var4)(var1);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.openAlert;
                    var3 = _closure1_slot14;
                    var2 = {};
                    var7 = arg1;
                    var2['incomingRequestCount'] = var7;
                    var3 = var3.bind(var1)(var6, var2);
                    var2 = 'clear-all-incoming-requests';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                };
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var23['onPress'] = var25;
            var25 = 33;
            var25 = var27[var25];
            var25 = var30.bind(var4)(var25);
            var26 = var25.Text;
            var25 = {'variant': 'text-sm/semibold', 'color': 'text-brand'};
            var28 = var27[var21];
            var28 = var30.bind(var4)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var27[var21];
            var27 = var30.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.O8k7Oz;
            var27 = var28.bind(var29)(var27);
            var25['children'] = var27;
            var25 = var22.bind(var4)(var26, var25);
            var23['children'] = var25;
            var23 = var22.bind(var4)(var24, var23);
            var12['children'] = var23;
            var10 = var22.bind(var4)(var20, var12);
 1413:
            var8[1] = var10;
            var12 = _closure1_slot14;
            if(var9) { _fun0002_ip = 1495; continue _fun0002 }
 1424:
            var10 = _closure1_slot0;
            var20 = _closure1_slot2;
            var9 = 39;
            var9 = var20[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.UsersFastList;
            var9 = {};
            var20 = _closure1_slot16;
            var20 = var20.Incoming;
            if(!(var18 === var20)) { _fun0002_ip = 1469; continue _fun0002 }
 1466:
            var16 = var19;
 1469:
            var9['sections'] = var16;
            var9['getItemProps'] = var14;
            var9['getSectionProps'] = var11;
            var9 = var12.bind(var4)(var10, var9);
            _fun0002_ip = 1682; continue _fun0002;
 1495:
            var11 = _closure1_slot5;
            var10 = {};
            var13 = var13.noResultsContainer;
            var10['style'] = var13;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 38;
            var13 = var16[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var16 = _closure1_slot16;
            var16 = var16.Incoming;
            if(!(var18 !== var16)) { _fun0002_ip = 1603; continue _fun0002 }
 1547:
            var20 = _closure1_slot0;
            var16 = _closure1_slot2;
            var18 = var16[var21];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var16 = var16[var21];
            var16 = var20.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.yvzX/f;
            var16 = var18.bind(var19)(var16);
            _fun0002_ip = 1657; continue _fun0002;
 1603:
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var18 = var17[var21];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var21];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.7uvAKS;
            var16 = var18.bind(var19)(var17);
 1657:
            var13['title'] = var16;
            var13['disableBackgroundOverlay'] = var15;
            var13 = var12.bind(var4)(var14, var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 1682:
            var8[2] = var9;
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
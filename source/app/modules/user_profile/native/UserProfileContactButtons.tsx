// app/modules/user_profile/native/UserProfileContactButtons.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function ContactButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var13 = var4.icon;
            var10 = var4.label;
            var2 = var4.hasCustomProfileTheme;
            var3 = {'icon': 0, 'label': 0, 'hasCustomProfileTheme': 0};
            var16 = null;
            var17 = var3;
            var1 = silentSetPrototypeOf(var17, var16);
            var17 = {};
            var16 = var4;
            var15 = var3;
            var8 = copyDataProperties(var17, var16, var15);
            var1 = _closure1_slot8;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var9 = 'secondary';
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = 'primary';
case 2:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 7;
            var1 = var6[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.colors;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = var1.CONTROL_SECONDARY_TEXT_DEFAULT;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var14 = var1.WHITE;
case 6:
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var5.buttonArea;
            var1['style'] = var5;
            var7 = _closure1_slot6;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 8;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.IconButton;
            var5 = {};
            var12 = _closure1_slot6;
            var11 = {};
            var11['color'] = var14;
            var11 = var12.bind(var4)(var13, var11);
            var5['icon'] = var11;
            var5['label'] = var10;
            var5['accessibilityLabel'] = var10;
            var5['variant'] = var9;
            var17 = var5;
            var16 = var8;
            var8 = copyDataProperties(var17, var16);
            var9 = true;
            var8 = 'grow';
            var5[var8] = var9;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function FlatFriendButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var10 = var5.icon;
            var7 = var5.label;
            var1 = var5.hasCustomProfileTheme;
            var3 = var5.isPending;
            var4 = {'icon': 0, 'label': 0, 'hasCustomProfileTheme': 0, 'isPending': 0};
            var13 = null;
            var14 = var4;
            var2 = silentSetPrototypeOf(var14, var13);
            var14 = {};
            var13 = var5;
            var12 = var4;
            var5 = copyDataProperties(var14, var13, var12);
            var2 = false;
            if(!(var2 !== var3)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var6 = 'secondary';
            if(!var1) { _fun0002_ip = 9; continue _fun0002 }
case 7:
            var6 = 'primary';
case 9:
            var1 = 'primary';
            if(!(var1 !== var6)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.colors;
            var11 = var1.CONTROL_SECONDARY_TEXT_DEFAULT;
            _fun0002_ip = 12; continue _fun0002;
case 10:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.colors;
            var11 = var1.WHITE;
case 12:
            var4 = _closure1_slot6;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.Button;
            var1 = {};
            var1['text'] = var7;
            var9 = _closure1_slot6;
            var8 = {};
            var8['color'] = var11;
            var11 = 'xs';
            var8['size'] = var11;
            var8 = var9.bind(var3)(var10, var8);
            var1['icon'] = var8;
            var1['accessibilityLabel'] = var7;
            var1['variant'] = var6;
            var6 = 'md';
            var1['size'] = var6;
            var6 = true;
            var1['grow'] = var6;
            var14 = var1;
            var13 = var5;
            var5 = copyDataProperties(var14, var13);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function FriendRequestButton(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var11 = var1.user;
            var _closure2_slot0 = var11;
            var7 = var1.hasCustomProfileTheme;
            var9 = var1.location;
            var5 = var1.ButtonComponent;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 10;
            var1 = var10[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var6 = var1.newestAnalyticsLocation;
            var3 = _closure1_slot0;
            var1 = 11;
            var1 = var10[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useUserProfileAnalyticsContext;
            var1 = var1.bind(var3)();
            var1 = var1.trackUserProfileAction;
            var _closure2_slot1 = var1;
            var3 = {};
            var1 = null;
            if(!(var1 != var9)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var6 = var9;
case 13:
            var3['location'] = var6;
            _closure2_slot2 = var3;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 12;
            var3 = var12[var3];
            var10 = var9.bind(var4)(var3);
            var6 = var10.useGameFriendsForUser;
            var3 = var11.id;
            var3 = var6.bind(var10)(var3);
            var6 = 13;
            var6 = var12[var6];
            var13 = var9.bind(var4)(var6);
            var10 = var13.useStateFromStores;
            var6 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getRelationshipType;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var10.bind(var13)(var9, var6);
            _closure2_slot3 = var9;
            var10 = _closure1_slot1;
            var6 = 14;
            var6 = var12[var6];
            var10 = var10.bind(var4)(var6);
            var6 = var10.useName;
            var6 = var6.bind(var10)(var11);
            _closure2_slot4 = var6;
            var6 = _closure1_slot5;
            var6 = var6.FRIEND;
            if(!(var9 !== var6)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var6 = _closure1_slot5;
            var6 = var6.BLOCKED;
            if(!(var9 !== var6)) { _fun0003_ip = 15; continue _fun0003 }
case 17:
            var6 = var3.length;
            var3 = 0;
            if(!(!(var6 > var3))) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var3 = _closure1_slot5;
            var3 = var3.PENDING_INCOMING;
            var6 = var9 === var3;
            if(var6) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var3 = _closure1_slot5;
            var3 = var3.PENDING_OUTGOING;
            var6 = var9 === var3;
case 20:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            if(var6) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var3 = 16;
            var3 = var10[var3];
            var3 = var9.bind(var4)(var3);
            var11 = var3.UserPlusIcon;
            _fun0003_ip = 24; continue _fun0003;
case 22:
            var3 = 15;
            var3 = var10[var3];
            var3 = var9.bind(var4)(var3);
            var11 = var3.UserClockIcon;
case 24:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var14 = 17;
            var9 = var3[var14];
            var9 = var10.bind(var4)(var9);
            var12 = var9.intl;
            var9 = var12.string;
            var3 = var3[var14];
            var3 = var10.bind(var4)(var3);
            var3 = var3.t;
            if(var6) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var10 = var3.7815ae;
            var10 = var9.bind(var12)(var10);
            _fun0003_ip = 27; continue _fun0003;
case 25:
            var3 = var3.fMm5q/;
            var10 = var9.bind(var12)(var3);
case 27:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var12 = var3[var14];
            var12 = var9.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var3 = var3[var14];
            var3 = var9.bind(var4)(var3);
            var3 = var3.t;
            if(var6) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var9 = var3.gc9aSx;
            var9 = var12.bind(var13)(var9);
            _fun0003_ip = 30; continue _fun0003;
case 28:
            var3 = var3.H0Ql7N;
            var9 = var12.bind(var13)(var3);
case 30:
            var3 = _closure1_slot6;
            var2 = {};
            var2['icon'] = var11;
            var2['label'] = var10;
            var2['accessibilityHint'] = var9;
            var8 = function onPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = _closure1_slot5;
                    var2 = var2.PENDING_INCOMING;
                    if(!(var3 !== var2)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var3 = _closure2_slot3;
                    var2 = _closure1_slot5;
                    var2 = var2.PENDING_OUTGOING;
                    if(!(var3 !== var2)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var3 = _closure2_slot1;
                    var2 = {};
                    var5 = 'SEND_FRIEND_REQUEST';
                    var2['action'] = var5;
                    var5 = undefined;
                    var2 = var3.bind(var5)(var2);
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 20;
                    var2 = var6[var2];
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.addRelationship;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var2['userId'] = var6;
                    var6 = _closure2_slot2;
                    var2['context'] = var6;
                    var2 = var3.bind(var5)(var2);
                    _fun0004_ip = 35; continue _fun0004;
case 33:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 19;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.confirmCancelFriendRequest;
                    var2 = {};
                    var6 = _closure2_slot4;
                    var2['userDisplayName'] = var6;
                    var6 = function onConfirm() {
                        var4 = _closure2_slot1;
                        var3 = {};
                        var1 = 'CANCEL_FRIEND_REQUEST';
                        var3['action'] = var1;
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 20;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.cancelFriendRequest;
                        var3 = _closure2_slot0;
                        var3 = var3.id;
                        var2 = _closure2_slot2;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var2['onConfirm'] = var6;
                    var2 = var3.bind(var5)(var2);
                    _fun0004_ip = 35; continue _fun0004;
case 31:
                    var5 = _closure2_slot1;
                    var2 = {};
                    var3 = 'ACCEPT_FRIEND_REQUEST';
                    var2['action'] = var3;
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 18;
                    var1 = var5[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.maybeConfirmFriendRequestAccept;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var5 = var5.id;
                    var1['userId'] = var5;
                    var4 = _closure2_slot2;
                    var4 = var4.location;
                    var1['location'] = var4;
                    var1 = var2.bind(var3)(var1);
case 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onPress'] = var8;
            var2['hasCustomProfileTheme'] = var7;
            var2['isPending'] = var6;
            var2 = var3.bind(var4)(var5, var2);
            return var2;
case 18:
            return var1;
case 15:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var13 = 1;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RelationshipTypes;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var12 = 'row';
    var9['flexDirection'] = var12;
    var10 = 6;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var14 = var10.LARGE_BUTTON_HEIGHT;
    var10 = 24;
    var10 = var14 + var10;
    var9['width'] = var10;
    var4['buttonArea'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var10 = 7;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var9['gap'] = var14;
    var4['threeButtonLayout'] = var9;
    var9 = {};
    var9['flex'] = var13;
    var4['flexGrow'] = var9;
    var9 = {};
    var9['flexDirection'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var9['gap'] = var10;
    var4['iconButtonGroup'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileContactButtons.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileContactButtons(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var35 = var1.user;
            var _closure2_slot0 = var35;
            var24 = var1.disableMessage;
            var14 = var1.disableCalls;
            var15 = var1.location;
            var13 = var1.hasCustomProfileTheme;
            var7 = var1.style;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 11;
            var1 = var8[var1];
            var4 = undefined;
            var2 = var3.bind(var4)(var1);
            var1 = var2.useUserProfileAnalyticsContext;
            var1 = var1.bind(var2)();
            var1 = var1.trackUserProfileAction;
            var _closure2_slot1 = var1;
            var1 = 21;
            var1 = var8[var1];
            var5 = var3.bind(var4)(var1);
            var2 = var5.useMobileWishlistOwnerExperiment;
            var1 = 'UserProfileContactButtons';
            var1 = var2.bind(var5)(var1);
            var1 = var1.enabled;
            var2 = _closure1_slot8;
            var10 = var2.bind(var4)();
            var2 = 13;
            var2 = var8[var2];
            var9 = var3.bind(var4)(var2);
            var6 = var9.useStateFromStores;
            var2 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getRelationshipType;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var6.bind(var9)(var5, var2);
            var2 = 12;
            var2 = var8[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.useGameFriendsForUser;
            var2 = var35.id;
            var2 = var3.bind(var6)(var2);
            var3 = function closeUserProfile() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 22;
                var2 = var4[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.bind(var1)();
                var2 = 23;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var _closure2_slot2 = var3;
            var25 = function handleMessage() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = {};
                    var1 = 'SEND_MESSAGE';
                    var2['action'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
case 36:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 24;
                    var2 = var4[var2];
                    var6 = var3.bind(var1)(var2);
                    var2 = var6.popAll;
                    var2 = var2.bind(var6)();
                    var2 = 25;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openPrivateChannel;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var5 = var5.id;
                    var2['recipientIds'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var6 = _closure1_slot1;
            var3 = 26;
            var9 = var8[var3];
            var16 = var6.bind(var4)(var9);
            var12 = var35.id;
            var11 = false;
            var9 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = {};
                    var1 = 'VOICE_CALL';
                    var3['action'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
case 36:
                    return var1;
                }
            };
            var9 = var16.bind(var4)(var12, var11, var9);
            var17 = var9.handlePress;
            var _closure2_slot3 = var17;
            var16 = var9.text;
            var19 = var9.inCall;
            var22 = var9.accessibilityHint;
            var3 = var8[var3];
            var8 = var6.bind(var4)(var3);
            var6 = var35.id;
            var26 = true;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = {};
                    var1 = 'VIDEO_CALL';
                    var3['action'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
case 38:
                    return var1;
                }
            };
            var3 = var8.bind(var4)(var6, var26, var3);
            var20 = var3.handlePress;
            var _closure2_slot4 = var20;
            var27 = var3.text;
            var28 = var3.inCall;
            var29 = var3.accessibilityHint;
            if(var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var6 = _closure1_slot7;
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var1 = 29;
            var1 = var31[var1];
            var1 = var30.bind(var4)(var1);
            var3 = var1.ButtonGroup;
            var1 = {'direction': 'horizontal', 'align': 'flex-start', 'justify': 'space-evenly'};
            var1['style'] = var7;
            var9 = _closure1_slot6;
            var12 = _closure1_slot9;
            var8 = {};
            var11 = 27;
            var11 = var31[var11];
            var11 = var30.bind(var4)(var11);
            var11 = var11.ChatIcon;
            var8['icon'] = var11;
            var34 = 17;
            var11 = var31[var34];
            var11 = var30.bind(var4)(var11);
            var32 = var11.intl;
            var21 = var32.string;
            var11 = var31[var34];
            var11 = var30.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.zROXEV;
            var11 = var21.bind(var32)(var11);
            var8['label'] = var11;
            var11 = var31[var34];
            var11 = var30.bind(var4)(var11);
            var33 = var11.intl;
            var32 = var33.formatToPlainString;
            var11 = var31[var34];
            var11 = var30.bind(var4)(var11);
            var11 = var11.t;
            var21 = var11.zFfSFQ;
            var11 = {};
            var37 = _closure1_slot1;
            var36 = 14;
            var36 = var31[var36];
            var37 = var37.bind(var4)(var36);
            var36 = var37.getName;
            var36 = var36.bind(var37)(var35);
            var11['name'] = var36;
            var11 = var32.bind(var33)(var21, var11);
            var8['accessibilityHint'] = var11;
            var8['onPress'] = var25;
            var8['disabled'] = var24;
            var8['hasCustomProfileTheme'] = var13;
            var9 = var9.bind(var4)(var12, var8);
            var8 = new Array(4);
            var8[0] = var9;
            var11 = _closure1_slot6;
            var9 = {};
            var21 = 28;
            var21 = var31[var21];
            var21 = var30.bind(var4)(var21);
            var21 = var21.PhoneCallIcon;
            var9['icon'] = var21;
            var21 = null;
            var30 = var16;
            if(!(var21 == var30)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var36 = _closure1_slot0;
            var31 = _closure1_slot2;
            var32 = var31[var34];
            var32 = var36.bind(var4)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var31 = var31[var34];
            var31 = var36.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.EZgS+9;
            var30 = var32.bind(var33)(var31);
case 42:
            var9['label'] = var30;
            var30 = var22;
            if(!(var21 == var22)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var36 = _closure1_slot0;
            var31 = _closure1_slot2;
            var32 = var31[var34];
            var32 = var36.bind(var4)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var31 = var31[var34];
            var31 = var36.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.focH1t;
            var30 = var32.bind(var33)(var31);
case 44:
            var9['accessibilityHint'] = var30;
            var30 = var17;
            if(var19) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var30 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.confirmStartCall;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
case 46:
            var9['onPress'] = var30;
            var30 = var14;
            if(var14) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var30 = var21 == var16;
case 48:
            var9['disabled'] = var30;
            var9['hasCustomProfileTheme'] = var13;
            var9 = var11.bind(var4)(var12, var9);
            var8[1] = var9;
            var12 = _closure1_slot6;
            var11 = _closure1_slot9;
            var9 = {};
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var30 = 30;
            var30 = var32[var30];
            var30 = var31.bind(var4)(var30);
            var30 = var30.VideoIcon;
            var9['icon'] = var30;
            var30 = var27;
            if(!(var21 == var30)) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var36 = _closure1_slot0;
            var31 = _closure1_slot2;
            var32 = var31[var34];
            var32 = var36.bind(var4)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var31 = var31[var34];
            var31 = var36.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.7AWk50;
            var30 = var32.bind(var33)(var31);
case 50:
            var9['label'] = var30;
            if(!(var21 == var29)) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var33 = _closure1_slot0;
            var30 = _closure1_slot2;
            var31 = var30[var34];
            var31 = var33.bind(var4)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var30[var34];
            var30 = var33.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30.oCqlGG;
            var29 = var31.bind(var32)(var30);
case 52:
            var9['accessibilityHint'] = var29;
            if(var28) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            var20 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.confirmStartCall;
                var1 = _closure2_slot4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
case 54:
            var9['onPress'] = var20;
            var20 = var14;
            if(var14) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var20 = var21 == var27;
case 56:
            var9['disabled'] = var20;
            var9['hasCustomProfileTheme'] = var13;
            var9 = var12.bind(var4)(var11, var9);
            var8[2] = var9;
            var12 = _closure1_slot6;
            var11 = _closure1_slot11;
            var9 = {};
            var9['user'] = var35;
            var9['location'] = var15;
            var9['hasCustomProfileTheme'] = var13;
            var20 = _closure1_slot9;
            var9['ButtonComponent'] = var20;
            var9 = var12.bind(var4)(var11, var9);
            var8[3] = var9;
            var1['children'] = var8;
            var1 = var6.bind(var4)(var3, var1);
            return var1;
case 40:
            var21 = 'secondary';
            if(!var13) { _fun0005_ip = 58; continue _fun0005 }
case 59:
            var21 = 'primary';
case 58:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 7;
            var3 = var3[var1];
            var3 = var6.bind(var4)(var3);
            var3 = var3.colors;
            if(var13) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            var30 = var3.CONTROL_SECONDARY_TEXT_DEFAULT;
            _fun0005_ip = 62; continue _fun0005;
case 60:
            var30 = var3.WHITE;
case 62:
            var3 = _closure1_slot5;
            var3 = var3.FRIEND;
            var6 = var5 !== var3;
            if(!var6) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            var3 = _closure1_slot5;
            var3 = var3.BLOCKED;
            var6 = var5 !== var3;
case 63:
            if(!var6) { _fun0005_ip = 65; continue _fun0005 }
case 66:
            var3 = var2.length;
            var2 = 0;
            var6 = var2 === var3;
case 65:
            var3 = _closure1_slot7;
            var2 = _closure1_slot3;
            var5 = {};
            if(var6) { _fun0005_ip = 67; continue _fun0005 }
case 68:
            var6 = {};
            var8 = 'row';
            var6['flexDirection'] = var8;
            var39 = _closure1_slot1;
            var27 = _closure1_slot2;
            var1 = var27[var1];
            var1 = var39.bind(var4)(var1);
            var1 = var1.spacing;
            var1 = var1.PX_12;
            var6['gap'] = var1;
            var1 = new Array(2);
            var1[0] = var6;
            var1[1] = var7;
            var5['style'] = var1;
            var8 = _closure1_slot6;
            var6 = _closure1_slot3;
            var1 = {};
            var9 = {};
            var20 = 1;
            var9['flex'] = var20;
            var1['style'] = var9;
            var29 = _closure1_slot6;
            var32 = _closure1_slot0;
            var11 = 9;
            var9 = var27[var11];
            var9 = var32.bind(var4)(var9);
            var12 = var9.Button;
            var9 = {};
            var36 = 17;
            var28 = var27[var36];
            var28 = var32.bind(var4)(var28);
            var33 = var28.intl;
            var31 = var33.string;
            var28 = var27[var36];
            var28 = var32.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.zROXEV;
            var28 = var31.bind(var33)(var28);
            var9['text'] = var28;
            var33 = _closure1_slot6;
            var28 = 27;
            var28 = var27[var28];
            var28 = var32.bind(var4)(var28);
            var31 = var28.ChatIcon;
            var28 = {};
            var28['color'] = var30;
            var34 = 'xs';
            var28['size'] = var34;
            var28 = var33.bind(var4)(var31, var28);
            var9['icon'] = var28;
            var28 = var27[var36];
            var28 = var32.bind(var4)(var28);
            var33 = var28.intl;
            var31 = var33.string;
            var28 = var27[var36];
            var28 = var32.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.zROXEV;
            var28 = var31.bind(var33)(var28);
            var9['accessibilityLabel'] = var28;
            var28 = var27[var36];
            var28 = var32.bind(var4)(var28);
            var37 = var28.intl;
            var33 = var37.formatToPlainString;
            var28 = var27[var36];
            var28 = var32.bind(var4)(var28);
            var28 = var28.t;
            var31 = var28.zFfSFQ;
            var28 = {};
            var38 = 14;
            var38 = var27[var38];
            var39 = var39.bind(var4)(var38);
            var38 = var39.getName;
            var38 = var38.bind(var39)(var35);
            var28['name'] = var38;
            var28 = var33.bind(var37)(var31, var28);
            var9['accessibilityHint'] = var28;
            var9['variant'] = var21;
            var28 = 'md';
            var9['size'] = var28;
            var9['grow'] = var26;
            var9['onPress'] = var25;
            var9['disabled'] = var24;
            var9 = var29.bind(var4)(var12, var9);
            var1['children'] = var9;
            var6 = var8.bind(var4)(var6, var1);
            var1 = new Array(2);
            var1[0] = var6;
            var9 = _closure1_slot6;
            var8 = _closure1_slot3;
            var6 = {};
            var12 = {};
            var12['flex'] = var20;
            var6['style'] = var12;
            var20 = _closure1_slot6;
            var11 = var27[var11];
            var11 = var32.bind(var4)(var11);
            var12 = var11.Button;
            var11 = {};
            var29 = var27[var36];
            var29 = var32.bind(var4)(var29);
            var33 = var29.intl;
            var31 = var33.string;
            var29 = var27[var36];
            var29 = var32.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.JJogjm;
            var29 = var31.bind(var33)(var29);
            var11['text'] = var29;
            var33 = _closure1_slot6;
            var29 = 28;
            var29 = var27[var29];
            var29 = var32.bind(var4)(var29);
            var31 = var29.PhoneCallIcon;
            var29 = {};
            var29['color'] = var30;
            var29['size'] = var34;
            var29 = var33.bind(var4)(var31, var29);
            var11['icon'] = var29;
            var29 = var27[var36];
            var29 = var32.bind(var4)(var29);
            var31 = var29.intl;
            var29 = var31.string;
            var27 = var27[var36];
            var27 = var32.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.JJogjm;
            var27 = var29.bind(var31)(var27);
            var11['accessibilityLabel'] = var27;
            var27 = null;
            var29 = var22;
            if(!(var27 == var22)) { _fun0005_ip = 69; continue _fun0005 }
case 70:
            var34 = _closure1_slot0;
            var31 = _closure1_slot2;
            var32 = var31[var36];
            var32 = var34.bind(var4)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var31 = var31[var36];
            var31 = var34.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.focH1t;
            var29 = var32.bind(var33)(var31);
case 69:
            var11['accessibilityHint'] = var29;
            var11['variant'] = var21;
            var11['size'] = var28;
            var11['grow'] = var26;
            var26 = var17;
            if(var19) { _fun0005_ip = 71; continue _fun0005 }
case 72:
            var26 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.confirmStartCall;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
case 71:
            var11['onPress'] = var26;
            var26 = var14;
            if(var14) { _fun0005_ip = 73; continue _fun0005 }
case 74:
            var26 = var27 == var16;
case 73:
            var11['disabled'] = var26;
            var11 = var20.bind(var4)(var12, var11);
            var6['children'] = var11;
            var6 = var9.bind(var4)(var8, var6);
            var1[1] = var6;
            var5['children'] = var1;
            var1 = var5;
            _fun0005_ip = 75; continue _fun0005;
case 67:
            var8 = var10.threeButtonLayout;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var5['style'] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = var10.flexGrow;
            var6['style'] = var9;
            var12 = _closure1_slot6;
            var11 = _closure1_slot11;
            var9 = {};
            var9['user'] = var35;
            var9['location'] = var15;
            var9['hasCustomProfileTheme'] = var13;
            var13 = _closure1_slot10;
            var9['ButtonComponent'] = var13;
            var9 = var12.bind(var4)(var11, var9);
            var6['children'] = var9;
            var7 = var8.bind(var4)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot7;
            var8 = _closure1_slot3;
            var7 = {};
            var10 = var10.iconButtonGroup;
            var7['style'] = var10;
            var13 = _closure1_slot6;
            var26 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 8;
            var10 = var15[var11];
            var10 = var26.bind(var4)(var10);
            var12 = var10.IconButton;
            var10 = {};
            var28 = _closure1_slot6;
            var20 = 27;
            var20 = var15[var20];
            var20 = var26.bind(var4)(var20);
            var27 = var20.ChatIcon;
            var20 = {};
            var20['color'] = var30;
            var29 = 'xs';
            var20['size'] = var29;
            var20 = var28.bind(var4)(var27, var20);
            var10['icon'] = var20;
            var27 = 17;
            var20 = var15[var27];
            var20 = var26.bind(var4)(var20);
            var31 = var20.intl;
            var28 = var31.string;
            var20 = var15[var27];
            var20 = var26.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.zROXEV;
            var20 = var28.bind(var31)(var20);
            var10['accessibilityLabel'] = var20;
            var20 = var15[var27];
            var20 = var26.bind(var4)(var20);
            var32 = var20.intl;
            var31 = var32.formatToPlainString;
            var20 = var15[var27];
            var20 = var26.bind(var4)(var20);
            var20 = var20.t;
            var28 = var20.zFfSFQ;
            var20 = {};
            var34 = _closure1_slot1;
            var33 = 14;
            var33 = var15[var33];
            var34 = var34.bind(var4)(var33);
            var33 = var34.getName;
            var33 = var33.bind(var34)(var35);
            var20['name'] = var33;
            var20 = var31.bind(var32)(var28, var20);
            var10['accessibilityHint'] = var20;
            var10['variant'] = var21;
            var20 = 'md';
            var10['size'] = var20;
            var10['onPress'] = var25;
            var10['disabled'] = var24;
            var12 = var13.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot6;
            var11 = var15[var11];
            var11 = var26.bind(var4)(var11);
            var12 = var11.IconButton;
            var11 = {};
            var28 = _closure1_slot6;
            var24 = 28;
            var24 = var15[var24];
            var24 = var26.bind(var4)(var24);
            var25 = var24.PhoneCallIcon;
            var24 = {};
            var24['color'] = var30;
            var24['size'] = var29;
            var24 = var28.bind(var4)(var25, var24);
            var11['icon'] = var24;
            var24 = var15[var27];
            var24 = var26.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var15 = var15[var27];
            var15 = var26.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.JJogjm;
            var15 = var24.bind(var25)(var15);
            var11['accessibilityLabel'] = var15;
            var15 = null;
            if(!(var15 == var22)) { _fun0005_ip = 76; continue _fun0005 }
case 77:
            var26 = _closure1_slot0;
            var23 = _closure1_slot2;
            var24 = var23[var27];
            var24 = var26.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var23[var27];
            var23 = var26.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.focH1t;
            var22 = var24.bind(var25)(var23);
case 76:
            var11['accessibilityHint'] = var22;
            var11['variant'] = var21;
            var11['size'] = var20;
            if(var19) { _fun0005_ip = 78; continue _fun0005 }
case 79:
            var17 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.confirmStartCall;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
case 78:
            var11['onPress'] = var17;
            if(var14) { _fun0005_ip = 80; continue _fun0005 }
case 81:
            var14 = var15 == var16;
case 80:
            var11['disabled'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var6[1] = var7;
            var5['children'] = var6;
            var1 = var5;
case 75:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
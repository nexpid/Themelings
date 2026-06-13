// app/modules/user_profile/native/UserProfileContactButtons.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function FlatFriendButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = 'secondary';
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var6 = 'primary';
case 4:
            var1 = 'primary';
            if(!(var1 !== var6)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.colors;
            var11 = var1.CONTROL_SECONDARY_TEXT_DEFAULT;
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.colors;
            var11 = var1.WHITE;
case 7:
            var4 = _closure1_slot6;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
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
    var _closure1_slot9 = var1;
    var1 = function FriendRequestButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
            var1 = 8;
            var1 = var10[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var6 = var1.newestAnalyticsLocation;
            var3 = _closure1_slot0;
            var1 = 9;
            var1 = var10[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useUserProfileAnalyticsContext;
            var1 = var1.bind(var3)();
            var1 = var1.trackUserProfileAction;
            var _closure2_slot1 = var1;
            var3 = {};
            var1 = null;
            if(!(var1 != var9)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = var9;
case 8:
            var3['location'] = var6;
            _closure2_slot2 = var3;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 10;
            var3 = var12[var3];
            var10 = var9.bind(var4)(var3);
            var6 = var10.useGameFriendsForUser;
            var3 = var11.id;
            var3 = var6.bind(var10)(var3);
            var6 = 11;
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
            var6 = var10.bind(var13)(var9, var6);
            _closure2_slot3 = var6;
            var10 = _closure1_slot1;
            var9 = 12;
            var9 = var12[var9];
            var10 = var10.bind(var4)(var9);
            var9 = var10.useName;
            var9 = var9.bind(var10)(var11);
            _closure2_slot4 = var9;
            var9 = _closure1_slot5;
            var9 = var9.FRIEND;
            if(!(var6 !== var9)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var9 = _closure1_slot5;
            var9 = var9.BLOCKED;
            if(!(var6 !== var9)) { _fun0002_ip = 10; continue _fun0002 }
case 12:
            var9 = var3.length;
            var3 = 0;
            if(!(!(var9 > var3))) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var3 = _closure1_slot5;
            var3 = var3.PENDING_INCOMING;
            if(!(var6 !== var3)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var3 = _closure1_slot5;
            var3 = var3.PENDING_OUTGOING;
            var6 = var6 === var3;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            if(var6) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var3 = 14;
            var3 = var10[var3];
            var3 = var9.bind(var4)(var3);
            var11 = var3.UserPlusIcon;
            _fun0002_ip = 19; continue _fun0002;
case 17:
            var3 = 13;
            var3 = var10[var3];
            var3 = var9.bind(var4)(var3);
            var11 = var3.UserClockIcon;
case 19:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var14 = 15;
            var9 = var3[var14];
            var9 = var10.bind(var4)(var9);
            var12 = var9.intl;
            var9 = var12.string;
            var3 = var3[var14];
            var3 = var10.bind(var4)(var3);
            var3 = var3.t;
            if(var6) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var10 = var3["7815ae"];
            var10 = var9.bind(var12)(var10);
            _fun0002_ip = 22; continue _fun0002;
case 20:
            var3 = var3.fMm5q/;
            var10 = var9.bind(var12)(var3);
case 22:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var12 = var3[var14];
            var12 = var9.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var3 = var3[var14];
            var3 = var9.bind(var4)(var3);
            var3 = var3.t;
            if(var6) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var9 = var3.gc9aSx;
            var9 = var12.bind(var13)(var9);
            _fun0002_ip = 25; continue _fun0002;
case 23:
            var3 = var3.H0Ql7N;
            var9 = var12.bind(var13)(var3);
case 25:
            var3 = _closure1_slot6;
            var2 = {};
            var2['icon'] = var11;
            var2['label'] = var10;
            var2['accessibilityHint'] = var9;
            var8 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = _closure1_slot5;
                    var2 = var2.PENDING_OUTGOING;
                    if(!(var3 !== var2)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var3 = _closure2_slot1;
                    var2 = {};
                    var5 = 'SEND_FRIEND_REQUEST';
                    var2['action'] = var5;
                    var5 = undefined;
                    var2 = var3.bind(var5)(var2);
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 17;
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
                    _fun0003_ip = 28; continue _fun0003;
case 26:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.confirmCancelFriendRequest;
                    var1 = {};
                    var4 = _closure2_slot4;
                    var1['userDisplayName'] = var4;
                    var4 = function onConfirm() {
                        var4 = _closure2_slot1;
                        var3 = {};
                        var1 = 'CANCEL_FRIEND_REQUEST';
                        var3['action'] = var1;
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 17;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.cancelFriendRequest;
                        var3 = _closure2_slot0;
                        var3 = var3.id;
                        var2 = _closure2_slot2;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var1['onConfirm'] = var4;
                    var1 = var2.bind(var3)(var1);
case 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onPress'] = var8;
            var2['hasCustomProfileTheme'] = var7;
            var2['isPending'] = var6;
            var2 = var3.bind(var4)(var5, var2);
            return var2;
case 15:
            return var1;
case 13:
            return var1;
case 10:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var12 = 'row';
    var10 = 6;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.space;
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
    var10 = var10.space;
    var10 = var10.PX_12;
    var9['gap'] = var10;
    var4['iconButtonGroup'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileContactButtons.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileContactButtons(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var33 = var1.user;
            var _closure2_slot0 = var33;
            var22 = var1.disableMessage;
            var12 = var1.disableCalls;
            var18 = var1.location;
            var13 = var1.hasCustomProfileTheme;
            var7 = var1.style;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
            var1 = var5[var1];
            var6 = undefined;
            var3 = var2.bind(var6)(var1);
            var1 = var3.useUserProfileAnalyticsContext;
            var1 = var1.bind(var3)();
            var1 = var1.trackUserProfileAction;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot8;
            var8 = var1.bind(var6)();
            var1 = 11;
            var1 = var5[var1];
            var9 = var2.bind(var6)(var1);
            var4 = var9.useStateFromStores;
            var1 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getRelationshipType;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var4.bind(var9)(var3, var1);
            var1 = 10;
            var1 = var5[var1];
            var3 = var2.bind(var6)(var1);
            var2 = var3.useGameFriendsForUser;
            var1 = var33.id;
            var2 = var2.bind(var3)(var1);
            var1 = function closeUserProfile() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 18;
                var2 = var4[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.bind(var1)();
                var2 = 19;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var _closure2_slot2 = var1;
            var23 = function handleMessage() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = {};
                    var1 = 'SEND_MESSAGE';
                    var2['action'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
case 29:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 20;
                    var2 = var4[var2];
                    var6 = var3.bind(var1)(var2);
                    var2 = var6.popAll;
                    var2 = var2.bind(var6)();
                    var2 = 21;
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
            var3 = _closure1_slot1;
            var1 = 22;
            var1 = var5[var1];
            var9 = var3.bind(var6)(var1);
            var5 = var33.id;
            var3 = false;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = {};
                    var1 = 'VOICE_CALL';
                    var3['action'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
case 29:
                    return var1;
                }
            };
            var1 = var9.bind(var6)(var5, var3, var1);
            var15 = var1.handlePress;
            var _closure2_slot3 = var15;
            var14 = var1.text;
            var17 = var1.inCall;
            var20 = var1.accessibilityHint;
            var19 = 'secondary';
            if(!var13) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var19 = 'primary';
case 31:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var3 = var3[var1];
            var3 = var5.bind(var6)(var3);
            var3 = var3.colors;
            if(var13) { _fun0004_ip = 14; continue _fun0004 }
case 33:
            var28 = var3.CONTROL_SECONDARY_TEXT_DEFAULT;
            _fun0004_ip = 34; continue _fun0004;
case 14:
            var28 = var3.WHITE;
case 34:
            var3 = _closure1_slot5;
            var3 = var3.FRIEND;
            if(!(var4 !== var3)) { _fun0004_ip = 17; continue _fun0004 }
case 35:
            var3 = _closure1_slot5;
            var3 = var3.BLOCKED;
            if(!(var4 !== var3)) { _fun0004_ip = 17; continue _fun0004 }
case 36:
            var3 = _closure1_slot5;
            var3 = var3.PENDING_INCOMING;
            if(!(var4 !== var3)) { _fun0004_ip = 17; continue _fun0004 }
case 37:
            var3 = var2.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0004_ip = 38; continue _fun0004 }
case 17:
            var4 = _closure1_slot7;
            var3 = _closure1_slot3;
            var2 = {};
            var5 = {};
            var9 = 'row';
            var5['flexDirection'] = var9;
            var37 = _closure1_slot1;
            var26 = _closure1_slot2;
            var1 = var26[var1];
            var1 = var37.bind(var6)(var1);
            var1 = var1.space;
            var1 = var1.PX_12;
            var5['gap'] = var1;
            var1 = new Array(2);
            var1[0] = var5;
            var1[1] = var7;
            var2['style'] = var1;
            var5 = _closure1_slot6;
            var1 = {};
            var9 = {};
            var24 = 1;
            var9['flex'] = var24;
            var1['style'] = var9;
            var29 = _closure1_slot6;
            var31 = _closure1_slot0;
            var10 = 7;
            var9 = var26[var10];
            var9 = var31.bind(var6)(var9);
            var11 = var9.Button;
            var9 = {};
            var35 = 15;
            var25 = var26[var35];
            var25 = var31.bind(var6)(var25);
            var30 = var25.intl;
            var27 = var30.string;
            var25 = var26[var35];
            var25 = var31.bind(var6)(var25);
            var25 = var25.t;
            var25 = var25.zROXEV;
            var25 = var27.bind(var30)(var25);
            var9['text'] = var25;
            var30 = _closure1_slot6;
            var25 = 24;
            var25 = var26[var25];
            var25 = var31.bind(var6)(var25);
            var27 = var25.ChatIcon;
            var25 = {};
            var25['color'] = var28;
            var34 = 'xs';
            var25['size'] = var34;
            var25 = var30.bind(var6)(var27, var25);
            var9['icon'] = var25;
            var25 = var26[var35];
            var25 = var31.bind(var6)(var25);
            var30 = var25.intl;
            var27 = var30.string;
            var25 = var26[var35];
            var25 = var31.bind(var6)(var25);
            var25 = var25.t;
            var25 = var25.zROXEV;
            var25 = var27.bind(var30)(var25);
            var9['accessibilityLabel'] = var25;
            var25 = var26[var35];
            var25 = var31.bind(var6)(var25);
            var32 = var25.intl;
            var30 = var32.formatToPlainString;
            var25 = var26[var35];
            var25 = var31.bind(var6)(var25);
            var25 = var25.t;
            var27 = var25.zFfSFQ;
            var25 = {};
            var36 = 12;
            var36 = var26[var36];
            var37 = var37.bind(var6)(var36);
            var36 = var37.getName;
            var36 = var36.bind(var37)(var33);
            var25['name'] = var36;
            var25 = var30.bind(var32)(var27, var25);
            var9['accessibilityHint'] = var25;
            var9['variant'] = var19;
            var27 = 'md';
            var9['size'] = var27;
            var25 = true;
            var9['grow'] = var25;
            var9['onPress'] = var23;
            var9['disabled'] = var22;
            var9 = var29.bind(var6)(var11, var9);
            var1['children'] = var9;
            var5 = var5.bind(var6)(var3, var1);
            var1 = new Array(2);
            var1[0] = var5;
            var9 = _closure1_slot6;
            var5 = {};
            var11 = {};
            var11['flex'] = var24;
            var5['style'] = var11;
            var24 = _closure1_slot6;
            var10 = var26[var10];
            var10 = var31.bind(var6)(var10);
            var11 = var10.Button;
            var10 = {};
            var29 = var26[var35];
            var29 = var31.bind(var6)(var29);
            var32 = var29.intl;
            var30 = var32.string;
            var29 = var26[var35];
            var29 = var31.bind(var6)(var29);
            var29 = var29.t;
            var29 = var29.JJogjm;
            var29 = var30.bind(var32)(var29);
            var10['text'] = var29;
            var32 = _closure1_slot6;
            var29 = 25;
            var29 = var26[var29];
            var29 = var31.bind(var6)(var29);
            var30 = var29.PhoneCallIcon;
            var29 = {};
            var29['color'] = var28;
            var29['size'] = var34;
            var29 = var32.bind(var6)(var30, var29);
            var10['icon'] = var29;
            var29 = var26[var35];
            var29 = var31.bind(var6)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var26 = var26[var35];
            var26 = var31.bind(var6)(var26);
            var26 = var26.t;
            var26 = var26.JJogjm;
            var26 = var29.bind(var30)(var26);
            var10['accessibilityLabel'] = var26;
            var26 = null;
            var29 = var20;
            if(!(var26 == var20)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var34 = _closure1_slot0;
            var30 = _closure1_slot2;
            var31 = var30[var35];
            var31 = var34.bind(var6)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var30[var35];
            var30 = var34.bind(var6)(var30);
            var30 = var30.t;
            var30 = var30.focH1t;
            var29 = var31.bind(var32)(var30);
case 39:
            var10['accessibilityHint'] = var29;
            var10['variant'] = var19;
            var10['size'] = var27;
            var10['grow'] = var25;
            var25 = var15;
            if(var17) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var25 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.confirmStartCall;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
case 41:
            var10['onPress'] = var25;
            var25 = var12;
            if(var12) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var25 = var26 == var14;
case 43:
            var10['disabled'] = var25;
            var10 = var24.bind(var6)(var11, var10);
            var5['children'] = var10;
            var5 = var9.bind(var6)(var3, var5);
            var1[1] = var5;
            var2['children'] = var1;
            var1 = 'two-button-group';
            var1 = var4.bind(var6)(var3, var2, var1);
            _fun0004_ip = 45; continue _fun0004;
case 38:
            var5 = _closure1_slot7;
            var4 = _closure1_slot3;
            var3 = {};
            var9 = var8.threeButtonLayout;
            var2 = new Array(2);
            var2[0] = var9;
            var2[1] = var7;
            var3['style'] = var2;
            var7 = _closure1_slot6;
            var2 = {};
            var9 = var8.flexGrow;
            var2['style'] = var9;
            var11 = _closure1_slot6;
            var10 = _closure1_slot10;
            var9 = {};
            var9['user'] = var33;
            var9['location'] = var18;
            var9['hasCustomProfileTheme'] = var13;
            var13 = _closure1_slot9;
            var9['ButtonComponent'] = var13;
            var9 = var11.bind(var6)(var10, var9);
            var2['children'] = var9;
            var7 = var7.bind(var6)(var4, var2);
            var2 = new Array(2);
            var2[0] = var7;
            var7 = {};
            var8 = var8.iconButtonGroup;
            var7['style'] = var8;
            var11 = _closure1_slot6;
            var24 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 23;
            var8 = var13[var9];
            var8 = var24.bind(var6)(var8);
            var10 = var8.IconButton;
            var8 = {};
            var26 = _closure1_slot6;
            var18 = 24;
            var18 = var13[var18];
            var18 = var24.bind(var6)(var18);
            var25 = var18.ChatIcon;
            var18 = {};
            var18['color'] = var28;
            var27 = 'xs';
            var18['size'] = var27;
            var18 = var26.bind(var6)(var25, var18);
            var8['icon'] = var18;
            var25 = 15;
            var18 = var13[var25];
            var18 = var24.bind(var6)(var18);
            var29 = var18.intl;
            var26 = var29.string;
            var18 = var13[var25];
            var18 = var24.bind(var6)(var18);
            var18 = var18.t;
            var18 = var18.zROXEV;
            var18 = var26.bind(var29)(var18);
            var8['accessibilityLabel'] = var18;
            var18 = var13[var25];
            var18 = var24.bind(var6)(var18);
            var30 = var18.intl;
            var29 = var30.formatToPlainString;
            var18 = var13[var25];
            var18 = var24.bind(var6)(var18);
            var18 = var18.t;
            var26 = var18.zFfSFQ;
            var18 = {};
            var32 = _closure1_slot1;
            var31 = 12;
            var31 = var13[var31];
            var32 = var32.bind(var6)(var31);
            var31 = var32.getName;
            var31 = var31.bind(var32)(var33);
            var18['name'] = var31;
            var18 = var29.bind(var30)(var26, var18);
            var8['accessibilityHint'] = var18;
            var8['variant'] = var19;
            var18 = 'md';
            var8['size'] = var18;
            var8['onPress'] = var23;
            var8['disabled'] = var22;
            var10 = var11.bind(var6)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var11 = _closure1_slot6;
            var9 = var13[var9];
            var9 = var24.bind(var6)(var9);
            var10 = var9.IconButton;
            var9 = {};
            var26 = _closure1_slot6;
            var22 = 25;
            var22 = var13[var22];
            var22 = var24.bind(var6)(var22);
            var23 = var22.PhoneCallIcon;
            var22 = {};
            var22['color'] = var28;
            var22['size'] = var27;
            var22 = var26.bind(var6)(var23, var22);
            var9['icon'] = var22;
            var22 = var13[var25];
            var22 = var24.bind(var6)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var13 = var13[var25];
            var13 = var24.bind(var6)(var13);
            var13 = var13.t;
            var13 = var13.JJogjm;
            var13 = var22.bind(var23)(var13);
            var9['accessibilityLabel'] = var13;
            var13 = null;
            if(!(var13 == var20)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var24 = _closure1_slot0;
            var21 = _closure1_slot2;
            var22 = var21[var25];
            var22 = var24.bind(var6)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var21[var25];
            var21 = var24.bind(var6)(var21);
            var21 = var21.t;
            var21 = var21.focH1t;
            var20 = var22.bind(var23)(var21);
case 46:
            var9['accessibilityHint'] = var20;
            var9['variant'] = var19;
            var9['size'] = var18;
            if(var17) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var15 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.confirmStartCall;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
case 48:
            var9['onPress'] = var15;
            if(var12) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var12 = var13 == var14;
case 50:
            var9['disabled'] = var12;
            var9 = var11.bind(var6)(var10, var9);
            var8[1] = var9;
            var7['children'] = var8;
            var7 = var5.bind(var6)(var4, var7);
            var2[1] = var7;
            var3['children'] = var2;
            var2 = 'three-button-group';
            var1 = var5.bind(var6)(var4, var3, var2);
case 45:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
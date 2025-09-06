// app/modules/user_profile/native/UserProfileContactButtons.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function ContactButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(!var2) { _fun0001_ip = 78; continue _fun0001 }
 74:
            var9 = 'primary';
 78:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 7;
            var1 = var6[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.colors;
            if(var2) { _fun0001_ip = 114; continue _fun0001 }
 106:
            var14 = var1.REDESIGN_BUTTON_SECONDARY_TEXT;
            _fun0001_ip = 120; continue _fun0001;
 114:
            var14 = var1.WHITE;
 120:
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
    var1 = function FriendRequestButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var10 = var1.user;
            var _closure2_slot0 = var10;
            var8 = var1.hasCustomProfileTheme;
            var4 = var1.location;
            var6 = undefined;
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var6;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 9;
            var1 = var5[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.bind(var6)();
            var3 = var1.newestAnalyticsLocation;
            var2 = _closure1_slot0;
            var1 = 10;
            var1 = var5[var1];
            var2 = var2.bind(var6)(var1);
            var1 = var2.useUserProfileAnalyticsContext;
            var1 = var1.bind(var2)();
            var1 = var1.trackUserProfileAction;
            var _closure2_slot1 = var1;
            var1 = {};
            var2 = null;
            if(!(var2 != var4)) { _fun0002_ip = 115; continue _fun0002 }
 112:
            var3 = var4;
 115:
            var1['location'] = var3;
            _closure2_slot2 = var1;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 11;
            var1 = var11[var1];
            var5 = var4.bind(var6)(var1);
            var3 = var5.useGameFriendsForUser;
            var1 = var10.id;
            var3 = var3.bind(var5)(var1);
            var1 = 12;
            var1 = var11[var1];
            var12 = var4.bind(var6)(var1);
            var5 = var12.useStateFromStores;
            var1 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getRelationshipType;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var5.bind(var12)(var4, var1);
            var4 = _closure1_slot1;
            var1 = 13;
            var1 = var11[var1];
            var4 = var4.bind(var6)(var1);
            var1 = var4.useName;
            var1 = var1.bind(var4)(var10);
            _closure2_slot3 = var1;
            var1 = _closure1_slot5;
            var4 = var1.FRIEND;
            var1 = null;
            if(!(var5 !== var4)) { _fun0002_ip = 826; continue _fun0002 }
 251:
            var4 = _closure1_slot5;
            var4 = var4.BLOCKED;
            var1 = null;
            if(!(var5 !== var4)) { _fun0002_ip = 826; continue _fun0002 }
 270:
            var4 = _closure1_slot5;
            var4 = var4.PENDING_INCOMING;
            if(!(var5 !== var4)) { _fun0002_ip = 661; continue _fun0002 }
 287:
            var4 = _closure1_slot5;
            var4 = var4.PENDING_OUTGOING;
            if(!(var5 !== var4)) { _fun0002_ip = 494; continue _fun0002 }
 304:
            var4 = var3.length;
            var3 = 0;
            var3 = var4 > var3;
            var2 = null;
            if(var3) { _fun0002_ip = 489; continue _fun0002 }
 323:
            var5 = _closure1_slot6;
            var4 = _closure1_slot9;
            var3 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 19;
            var10 = var14[var10];
            var10 = var13.bind(var6)(var10);
            var10 = var10.UserPlusIcon;
            var3['icon'] = var10;
            var10 = 15;
            var11 = var14[var10];
            var11 = var13.bind(var6)(var11);
            var15 = var11.intl;
            var12 = var15.string;
            var11 = var14[var10];
            var11 = var13.bind(var6)(var11);
            var11 = var11.t;
            var11 = var11.7815aW;
            var11 = var12.bind(var15)(var11);
            var3['label'] = var11;
            var11 = var14[var10];
            var11 = var13.bind(var6)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.gc9aS0;
            var10 = var11.bind(var12)(var10);
            var3['accessibilityHint'] = var10;
            var3['hasCustomProfileTheme'] = var8;
            var10 = function onPress() {
                var3 = _closure2_slot1;
                var2 = {};
                var1 = 'SEND_FRIEND_REQUEST';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 18;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.addRelationship;
                var2 = {};
                var6 = _closure2_slot0;
                var6 = var6.id;
                var2['userId'] = var6;
                var5 = _closure2_slot2;
                var2['context'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['onPress'] = var10;
            var2 = var5.bind(var6)(var4, var3);
 489:
            _fun0002_ip = 656; continue _fun0002;
 494:
            var5 = _closure1_slot6;
            var4 = _closure1_slot9;
            var3 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 14;
            var10 = var14[var10];
            var10 = var13.bind(var6)(var10);
            var10 = var10.ClockIcon;
            var3['icon'] = var10;
            var10 = 15;
            var11 = var14[var10];
            var11 = var13.bind(var6)(var11);
            var15 = var11.intl;
            var12 = var15.string;
            var11 = var14[var10];
            var11 = var13.bind(var6)(var11);
            var11 = var11.t;
            var11 = var11.L8CBnJ;
            var11 = var12.bind(var15)(var11);
            var3['label'] = var11;
            var11 = var14[var10];
            var11 = var13.bind(var6)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.H0Ql7O;
            var10 = var11.bind(var12)(var10);
            var3['accessibilityHint'] = var10;
            var3['hasCustomProfileTheme'] = var8;
            var10 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.confirmCancelFriendRequest;
                var2 = {};
                var5 = _closure2_slot3;
                var2['userDisplayName'] = var5;
                var5 = function onConfirm() {
                    var4 = _closure2_slot1;
                    var3 = {};
                    var1 = 'CANCEL_FRIEND_REQUEST';
                    var3['action'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 18;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.cancelFriendRequest;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var2 = _closure2_slot2;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var2['onConfirm'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['onPress'] = var10;
            var2 = var5.bind(var6)(var4, var3);
 656:
            _fun0002_ip = 823; continue _fun0002;
 661:
            var5 = _closure1_slot6;
            var4 = _closure1_slot9;
            var3 = {};
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 14;
            var9 = var13[var9];
            var9 = var12.bind(var6)(var9);
            var9 = var9.ClockIcon;
            var3['icon'] = var9;
            var9 = 15;
            var10 = var13[var9];
            var10 = var12.bind(var6)(var10);
            var14 = var10.intl;
            var11 = var14.string;
            var10 = var13[var9];
            var10 = var12.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.L8CBnJ;
            var10 = var11.bind(var14)(var10);
            var3['label'] = var10;
            var10 = var13[var9];
            var10 = var12.bind(var6)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var6)(var9);
            var9 = var9.t;
            var9 = var9.H0Ql7O;
            var9 = var10.bind(var11)(var9);
            var3['accessibilityHint'] = var9;
            var3['hasCustomProfileTheme'] = var8;
            var7 = function onPress() {
                var3 = _closure2_slot1;
                var2 = {};
                var1 = 'ACCEPT_FRIEND_REQUEST';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 16;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.maybeConfirmFriendRequestAccept;
                var2 = {};
                var6 = _closure2_slot0;
                var6 = var6.id;
                var2['userId'] = var6;
                var5 = _closure2_slot2;
                var5 = var5.location;
                var2['location'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['onPress'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 823:
            var1 = var2;
 826:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
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
    var10 = 'row';
    var9['flexDirection'] = var10;
    var10 = 6;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var11 = var10.LARGE_BUTTON_HEIGHT;
    var10 = 24;
    var10 = var11 + var10;
    var9['width'] = var10;
    var4['buttonArea'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileContactButtons.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileContactButtons(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var11 = var1.user;
            var _closure2_slot0 = var11;
            var8 = var1.disableMessage;
            var13 = var1.disableCalls;
            var10 = var1.location;
            var9 = var1.hasCustomProfileTheme;
            var5 = var1.style;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var1 = 10;
            var1 = var26[var1];
            var4 = undefined;
            var2 = var25.bind(var4)(var1);
            var1 = var2.useUserProfileAnalyticsContext;
            var1 = var1.bind(var2)();
            var1 = var1.trackUserProfileAction;
            var _closure2_slot1 = var1;
            var1 = function closeUserProfile() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 20;
                var2 = var4[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.bind(var1)();
                var2 = 21;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var _closure2_slot2 = var1;
            var31 = _closure1_slot1;
            var1 = 22;
            var2 = var26[var1];
            var12 = var31.bind(var4)(var2);
            var7 = var11.id;
            var3 = false;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure2_slot1;
                    var3 = {};
                    var1 = 'VOICE_CALL';
                    var3['action'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0004_ip = 42; continue _fun0004 }
 34:
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
 42:
                    return var1;
                }
            };
            var2 = var12.bind(var4)(var7, var3, var2);
            var20 = var2.handlePress;
            var _closure2_slot3 = var20;
            var21 = var2.text;
            var22 = var2.inCall;
            var23 = var2.accessibilityHint;
            var1 = var26[var1];
            var7 = var31.bind(var4)(var1);
            var3 = var11.id;
            var2 = true;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure2_slot1;
                    var3 = {};
                    var1 = 'VIDEO_CALL';
                    var3['action'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0005_ip = 44; continue _fun0005 }
 36:
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
 44:
                    return var1;
                }
            };
            var1 = var7.bind(var4)(var3, var2, var1);
            var16 = var1.handlePress;
            var _closure2_slot4 = var16;
            var15 = var1.text;
            var18 = var1.inCall;
            var19 = var1.accessibilityHint;
            var3 = _closure1_slot7;
            var1 = 23;
            var1 = var26[var1];
            var1 = var25.bind(var4)(var1);
            var2 = var1.ButtonGroup;
            var1 = {'direction': 'horizontal', 'align': 'flex-start', 'justify': 'space-evenly'};
            var1['style'] = var5;
            var7 = _closure1_slot6;
            var12 = _closure1_slot9;
            var5 = {};
            var14 = 24;
            var14 = var26[var14];
            var14 = var25.bind(var4)(var14);
            var14 = var14.ChatIcon;
            var5['icon'] = var14;
            var24 = 15;
            var14 = var26[var24];
            var14 = var25.bind(var4)(var14);
            var28 = var14.intl;
            var27 = var28.string;
            var14 = var26[var24];
            var14 = var25.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.zROXER;
            var14 = var27.bind(var28)(var14);
            var5['label'] = var14;
            var14 = var26[var24];
            var14 = var25.bind(var4)(var14);
            var29 = var14.intl;
            var28 = var29.formatToPlainString;
            var14 = var26[var24];
            var14 = var25.bind(var4)(var14);
            var14 = var14.t;
            var27 = var14.zFfSFR;
            var14 = {};
            var30 = 13;
            var30 = var26[var30];
            var31 = var31.bind(var4)(var30);
            var30 = var31.getName;
            var30 = var30.bind(var31)(var11);
            var14['name'] = var30;
            var14 = var28.bind(var29)(var27, var14);
            var5['accessibilityHint'] = var14;
            var14 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = {};
                    var1 = 'SEND_MESSAGE';
                    var2['action'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 42; continue _fun0006 }
 34:
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
 42:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 25;
                    var2 = var4[var2];
                    var6 = var3.bind(var1)(var2);
                    var2 = var6.popAll;
                    var2 = var2.bind(var6)();
                    var2 = 26;
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
            var5['onPress'] = var14;
            var5['disabled'] = var8;
            var5['hasCustomProfileTheme'] = var9;
            var7 = var7.bind(var4)(var12, var5);
            var5 = new Array(4);
            var5[0] = var7;
            var8 = _closure1_slot6;
            var7 = {};
            var14 = 27;
            var14 = var26[var14];
            var14 = var25.bind(var4)(var14);
            var14 = var14.PhoneCallIcon;
            var7['icon'] = var14;
            var14 = null;
            var25 = var21;
            if(!(var14 == var25)) { _fun0003_ip = 544; continue _fun0003 }
 492:
            var29 = _closure1_slot0;
            var26 = _closure1_slot2;
            var27 = var26[var24];
            var27 = var29.bind(var4)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var26 = var26[var24];
            var26 = var29.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.EZgS+/;
            var25 = var27.bind(var28)(var26);
 544:
            var7['label'] = var25;
            if(!(var14 == var23)) { _fun0003_ip = 604; continue _fun0003 }
 552:
            var28 = _closure1_slot0;
            var25 = _closure1_slot2;
            var26 = var25[var24];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var25[var24];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.focH1t;
            var23 = var26.bind(var27)(var25);
 604:
            var7['accessibilityHint'] = var23;
            if(var22) { _fun0003_ip = 619; continue _fun0003 }
 612:
            var20 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.confirmStartCall;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
 619:
            var7['onPress'] = var20;
            var20 = var13;
            if(var13) { _fun0003_ip = 633; continue _fun0003 }
 629:
            var20 = var14 == var21;
 633:
            var7['disabled'] = var20;
            var7['hasCustomProfileTheme'] = var9;
            var7 = var8.bind(var4)(var12, var7);
            var5[1] = var7;
            var12 = _closure1_slot6;
            var8 = _closure1_slot9;
            var7 = {};
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var20 = 28;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.VideoIcon;
            var7['icon'] = var20;
            var20 = var15;
            if(!(var14 == var20)) { _fun0003_ip = 751; continue _fun0003 }
 699:
            var25 = _closure1_slot0;
            var21 = _closure1_slot2;
            var22 = var21[var24];
            var22 = var25.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var21[var24];
            var21 = var25.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.7AWk5+;
            var20 = var22.bind(var23)(var21);
 751:
            var7['label'] = var20;
            if(!(var14 == var19)) { _fun0003_ip = 811; continue _fun0003 }
 759:
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var21 = var20[var24];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var20[var24];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.oCqlGB;
            var19 = var21.bind(var22)(var20);
 811:
            var7['accessibilityHint'] = var19;
            if(var18) { _fun0003_ip = 826; continue _fun0003 }
 819:
            var16 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.confirmStartCall;
                var1 = _closure2_slot4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
 826:
            var7['onPress'] = var16;
            if(var13) { _fun0003_ip = 837; continue _fun0003 }
 833:
            var13 = var14 == var15;
 837:
            var7['disabled'] = var13;
            var7['hasCustomProfileTheme'] = var9;
            var7 = var12.bind(var4)(var8, var7);
            var5[2] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot10;
            var6 = {};
            var6['user'] = var11;
            var6['location'] = var10;
            var6['hasCustomProfileTheme'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
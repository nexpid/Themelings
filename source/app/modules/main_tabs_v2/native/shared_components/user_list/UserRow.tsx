// app/modules/main_tabs_v2/native/shared_components/user_list/UserRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function handleCall(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.ensurePrivateChannel;
        var2 = arg1;
        var2 = var2.id;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot8;
                var3 = var4.getChannel;
                var2 = arg1;
                var4 = var3.bind(var4)(var2);
                var2 = null;
                if(!(var2 != var4)) { _fun0001_ip = 99; continue _fun0001 }
 26:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 14;
                var1 = var5[var1];
                var2 = undefined;
                var7 = var3.bind(var2)(var1);
                var1 = var4.isPrivate;
                var6 = var1.bind(var4)();
                var1 = 'must be a DM';
                var1 = var7.bind(var2)(var6, var1);
                var1 = 15;
                var1 = var5[var1];
                var3 = var3.bind(var2)(var1);
                var1 = false;
                var1 = var3.bind(var2)(var4, var1);
                var1 = var1.onPress;
                var1 = var1.bind(var2)();
 99:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function handleAccept(arg1, arg2) {
        var7 = arg2;
        var _closure2_slot0 = var7;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 16;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.maybeConfirmFriendRequestAccept;
        var2 = {};
        var8 = arg1;
        var8 = var8.id;
        var2['userId'] = var8;
        var2['applicationId'] = var7;
        var6 = _closure1_slot20;
        var2['location'] = var6;
        var5 = function onConfirm() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 == var2)) { _fun0002_ip = 50; continue _fun0002 }
 13:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.presentFriendRequestAcceptedToast;
                var1 = var1.bind(var2)();
                _fun0002_ip = 85; continue _fun0002;
 50:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.presentGameFriendRequestAcceptedToast;
                var1 = var1.bind(var2)();
 85:
                var1 = undefined;
                return var1;
            }
        };
        var2['onConfirm'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function handleCancel(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var8 = arg1;
            var7 = arg2;
            var1 = null;
            if(!(var1 == var7)) { _fun0003_ip = 92; continue _fun0003 }
 12:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 19;
            var2 = var4[var2];
            var3 = undefined;
            var9 = var5.bind(var3)(var2);
            var6 = var9.cancelFriendRequest;
            var5 = var8.id;
            var2 = {};
            var10 = _closure1_slot20;
            var2['location'] = var10;
            var2 = var6.bind(var9)(var5, var2);
            var2 = _closure1_slot0;
            var1 = 17;
            var1 = var4[var1];
            var2 = var2.bind(var3)(var1);
            var1 = var2.presentFriendRequestIgnoredToast;
            var1 = var1.bind(var2)();
            _fun0003_ip = 169; continue _fun0003;
 92:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 18;
            var2 = var4[var2];
            var3 = undefined;
            var6 = var5.bind(var3)(var2);
            var5 = var6.cancelGameFriendRequest;
            var2 = {};
            var8 = var8.id;
            var2['userId'] = var8;
            var2['applicationId'] = var7;
            var2 = var5.bind(var6)(var2);
            var2 = _closure1_slot0;
            var1 = 17;
            var1 = var4[var1];
            var2 = var2.bind(var3)(var1);
            var1 = var2.presentGameFriendRequestIgnoredToast;
            var1 = var1.bind(var2)();
 169:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function handleAcceptSuggestion(arg1) {
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 19;
        var3 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var3);
        var5 = var6.addRelationship;
        var3 = {};
        var7 = arg1;
        var7 = var7.id;
        var3['userId'] = var7;
        var7 = {};
        var8 = _closure1_slot20;
        var7['location'] = var8;
        var3['context'] = var7;
        var3['type'] = var1;
        var7 = true;
        var3['fromFriendSuggestion'] = var7;
        var3 = var5.bind(var6)(var3);
        var3 = _closure1_slot0;
        var2 = 17;
        var2 = var4[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.presentAddedFriendToast;
        var2 = var2.bind(var3)();
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function UserRowSubLabel(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var10 = var4.user;
            var3 = var4.type;
            var6 = var4.animate;
            var2 = var4.isGameRelationship;
            var9 = var4.guildId;
            var4 = var4.applicationId;
            var _closure2_slot0 = var4;
            var5 = _closure1_slot19;
            var7 = undefined;
            var8 = var5.bind(var7)();
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 21;
            var5 = var12[var5];
            var12 = var11.bind(var7)(var5);
            var11 = var12.useStateFromStores;
            var13 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var13;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getApplication;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var11.bind(var12)(var5, var1);
            var1 = _closure1_slot12;
            var1 = var1.PENDING_INCOMING;
            if(!(var3 !== var1)) { _fun0004_ip = 210; continue _fun0004 }
 116:
            var1 = _closure1_slot12;
            var1 = var1.SUGGESTION;
            if(!(var3 !== var1)) { _fun0004_ip = 210; continue _fun0004 }
 130:
            var1 = _closure1_slot12;
            var1 = var1.PENDING_OUTGOING;
            if(!(var3 !== var1)) { _fun0004_ip = 210; continue _fun0004 }
 144:
            var5 = _closure1_slot14;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 25;
            var1 = var11[var1];
            var3 = var3.bind(var7)(var1);
            var1 = {};
            var11 = var10.id;
            var1['userId'] = var11;
            var1['guildId'] = var9;
            var9 = var8.activityText;
            var1['textStyle'] = var9;
            var1['animate'] = var6;
            var1 = var5.bind(var7)(var3, var1);
            _fun0004_ip = 539; continue _fun0004;
 210:
            if(var2) { _fun0004_ip = 294; continue _fun0004 }
 213:
            var5 = _closure1_slot14;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 23;
            var2 = var11[var2];
            var2 = var9.bind(var7)(var2);
            var3 = var2.Text;
            var2 = {'lineClamp': 1, 'variant': 'text-xs/medium', 'color': 'text-muted'};
            var6 = 24;
            var6 = var11[var6];
            var9 = var9.bind(var7)(var6);
            var6 = var9.getUserTag;
            var6 = var6.bind(var9)(var10);
            var2['children'] = var6;
            var2 = var5.bind(var7)(var3, var2);
            _fun0004_ip = 536; continue _fun0004;
 294:
            var14 = null;
            if(!(var14 != var13)) { _fun0004_ip = 507; continue _fun0004 }
 303:
            var6 = _closure1_slot15;
            var5 = _closure1_slot4;
            var3 = {};
            var9 = var8.gameContainer;
            var3['style'] = var9;
            var12 = _closure1_slot14;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 22;
            var9 = var11[var9];
            var11 = var10.bind(var7)(var9);
            var10 = {};
            var9 = var8.gameIcon;
            var10['style'] = var9;
            var9 = 'contain';
            var10['resizeMode'] = var9;
            var9 = {};
            var16 = var13.getIconURL;
            var15 = 16;
            var15 = var16.bind(var13)(var15);
            var16 = var14 != var15;
            var14 = '';
            if(!var16) { _fun0004_ip = 398; continue _fun0004 }
 395:
            var14 = var15;
 398:
            var9['uri'] = var14;
            var10['source'] = var9;
            var9 = true;
            var10['disableColor'] = var9;
            var9 = var13.id;
            var10 = var12.bind(var7)(var11, var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot14;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 23;
            var10 = var14[var10];
            var10 = var11.bind(var7)(var10);
            var11 = var10.Text;
            var10 = {'lineClamp': 1, 'variant': 'text-xs/medium', 'color': 'text-secondary'};
            var13 = var13.name;
            var10['children'] = var13;
            var10 = var12.bind(var7)(var11, var10);
            var9[1] = var10;
            var3['children'] = var9;
            var3 = var6.bind(var7)(var5, var3);
            _fun0004_ip = 533; continue _fun0004;
 507:
            var6 = _closure1_slot14;
            var5 = _closure1_slot4;
            var4 = {};
            var8 = var8.gameIcon;
            var4['style'] = var8;
            var3 = var6.bind(var7)(var5, var4);
 533:
            var2 = var3;
 536:
            var1 = var2;
 539:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var14 = 8;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserRowModes;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.RelationshipTypes;
    var _closure1_slot12 = var8;
    var4 = var4.StatusTypes;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot14 = var8;
    var8 = var4.jsxs;
    var _closure1_slot15 = var8;
    var4 = var4.Fragment;
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = 'call';
    var4['CALL'] = var8;
    var8 = 'message';
    var4['MESSAGE'] = var8;
    var8 = 'accept';
    var4['ACCEPT'] = var8;
    var8 = 'decline';
    var4['DECLINE'] = var8;
    var8 = 'cancel';
    var4['CANCEL'] = var8;
    var8 = 'accept-suggestion';
    var4['ACCEPT_SUGGESTION'] = var8;
    var8 = 'ignore-suggestion';
    var4['IGNORE_SUGGESTION'] = var8;
    var8 = 'toggle';
    var4['TOGGLE'] = var8;
    var _closure1_slot17 = var4;
    var4 = 11;
    var8 = var6[var4];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createStyles;
    var8 = {};
    var11 = {'flexShrink': 0, 'flexGrow': 0};
    var8['avatar'] = var11;
    var13 = {};
    var11 = 12;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_LINK;
    var13['tintColor'] = var15;
    var8['iconColor'] = var13;
    var13 = {'marginLeft': 12, 'flexGrow': 1, 'flexShrink': 0};
    var8['content'] = var13;
    var13 = {'marginLeft': 12, 'flexGrow': 1, 'flexShrink': 0, 'height': '100%', 'justifyContent': 'center'};
    var8['itemContent'] = var13;
    var15 = 'row';
    var13 = {'flexGrow': 1, 'flexShrink': 0, 'flexDirection': 'row', 'alignContent': 'center', 'alignItems': 'center'};
    var8['contentInner'] = var13;
    var13 = {'flex': 1, 'marginRight': 12};
    var8['contentText'] = var13;
    var13 = {};
    var13['flexDirection'] = var15;
    var8['actions'] = var13;
    var13 = {'marginLeft': 12, 'alignSelf': 'center'};
    var8['action'] = var13;
    var13 = {};
    var13['marginLeft'] = var14;
    var8['buttonWrapper'] = var13;
    var13 = {'flexDirection': 'row', 'alignItems': 'center'};
    var8['labelContainer'] = var13;
    var13 = {'marginRight': 4, 'paddingTop': 0};
    var8['roleDot'] = var13;
    var13 = {'display': 'flex', 'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    var8['usernameLabelContainer'] = var13;
    var13 = {'display': 'flex', 'flexShrink': 1};
    var8['usernameLabel'] = var13;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot18 = var8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_SECONDARY;
    var10['color'] = var13;
    var4['activityText'] = var10;
    var10 = {'flexDirection': 'row', 'gap': 4};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var10['cornerRadius'] = var11;
    var4['gameContainer'] = var10;
    var10 = {'width': 14, 'height': 14};
    var4['gameIcon'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot19 = var4;
    var4 = 'Friends_v2';
    var _closure1_slot20 = var4;
    var4 = var7.memo;
    var2 = function UserRow(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var12 = arg1;
            var35 = var12.type;
            var _closure2_slot0 = var35;
            var28 = var12.user;
            var _closure2_slot1 = var28;
            var8 = var12.mode;
            var5 = undefined;
            if(!(var8 === var5)) { _fun0005_ip = 47; continue _fun0005 }
 34:
            var1 = _closure1_slot11;
            var8 = var1.NONE;
 47:
            var _closure2_slot2 = var8;
            var7 = var12.selected;
            if(!(var7 === var5)) { _fun0005_ip = 63; continue _fun0005 }
 61:
            var7 = false;
 63:
            var20 = var12.disabled;
            if(!(var20 === var5)) { _fun0005_ip = 74; continue _fun0005 }
 72:
            var20 = false;
 74:
            var _closure2_slot3 = var20;
            var37 = var12.isOwner;
            if(!(var37 === var5)) { _fun0005_ip = 90; continue _fun0005 }
 88:
            var37 = false;
 90:
            var _closure2_slot4 = var37;
            var15 = var12.onPress;
            var _closure2_slot5 = var15;
            var42 = var12.onLongPress;
            var _closure2_slot6 = var42;
            var13 = var12.handleMessage;
            var _closure2_slot7 = var13;
            var1 = var12.nickname;
            var _closure2_slot8 = var1;
            var30 = var12.usernameColor;
            var _closure2_slot9 = var30;
            var29 = var12.roleColors;
            var11 = var12.premiumSince;
            var _closure2_slot10 = var11;
            var22 = var12.guildId;
            var _closure2_slot11 = var22;
            var26 = var12.trailing;
            var _closure2_slot12 = var26;
            var36 = var12.subLabel;
            var _closure2_slot13 = var36;
            var38 = var12.label;
            var _closure2_slot14 = var38;
            var14 = var12.accessibilityActions;
            var4 = var12.onAccessibilityAction;
            var9 = var12.applicationId;
            var _closure2_slot15 = var9;
            var32 = var12.isGameRelationship;
            if(!(var32 === var5)) { _fun0005_ip = 230; continue _fun0005 }
 228:
            var32 = false;
 230:
            var _closure2_slot16 = var32;
            var1 = var12.isNameplatedRow;
            if(!(var1 === var5)) { _fun0005_ip = 246; continue _fun0005 }
 244:
            var1 = false;
 246:
            var10 = {'type': 0, 'user': 0, 'mode': 0, 'selected': 0, 'disabled': 0, 'isOwner': 0, 'onPress': 0, 'onLongPress': 0, 'handleMessage': 0, 'nickname': 0, 'usernameColor': 0, 'roleColors': 0, 'premiumSince': 0, 'guildId': 0, 'trailing': 0, 'subLabel': 0, 'label': 0, 'accessibilityActions': 0, 'onAccessibilityAction': 0, 'applicationId': 0, 'isGameRelationship': 0, 'isNameplatedRow': 0};
            var3 = null;
            var46 = var10;
            var45 = null;
            var2 = silentSetPrototypeOf(var46, var45);
            var46 = {};
            var45 = var12;
            var44 = var10;
            var16 = copyDataProperties(var46, var45, var44);
            var _closure2_slot17 = var5;
            var _closure2_slot18 = var5;
            var _closure2_slot19 = var5;
            var _closure2_slot20 = var5;
            var _closure2_slot21 = var5;
            var _closure2_slot22 = var5;
            var _closure2_slot23 = var5;
            var _closure2_slot24 = var5;
            var _closure2_slot25 = var5;
            var _closure2_slot26 = var5;
            var10 = _closure1_slot18;
            var27 = var10.bind(var5)();
            _closure2_slot17 = var27;
            var12 = _closure1_slot1;
            var24 = _closure1_slot2;
            var10 = 26;
            var10 = var24[var10];
            var10 = var12.bind(var5)(var10);
            var10 = var10.bind(var5)();
            var10 = var10.analyticsLocations;
            _closure2_slot18 = var10;
            var23 = _closure1_slot0;
            var17 = 21;
            var12 = var24[var17];
            var21 = var23.bind(var5)(var12);
            var19 = var21.useStateFromStoresObject;
            var12 = _closure1_slot5;
            var18 = new Array(1);
            var18[0] = var12;
            var12 = function() {
                var1 = {};
                var2 = _closure1_slot5;
                var3 = var2.useReducedMotion;
                var1['useReducedMotion'] = var3;
                var2 = var2.roleStyle;
                var1['roleStyle'] = var2;
                return var1;
            };
            var12 = var19.bind(var21)(var18, var12);
            var34 = var12.useReducedMotion;
            _closure2_slot19 = var34;
            var12 = var12.roleStyle;
            _closure2_slot20 = var12;
            var18 = var24[var17];
            var25 = var23.bind(var5)(var18);
            var21 = var25.useStateFromStoresObject;
            var18 = _closure1_slot9;
            var19 = new Array(1);
            var19[0] = var18;
            var18 = function() {
                var1 = {};
                var4 = _closure1_slot9;
                var5 = var4.isMobileOnline;
                var2 = _closure2_slot1;
                var3 = var2.id;
                var3 = var5.bind(var4)(var3);
                var1['isMobileOnline'] = var3;
                var3 = var4.getStatus;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['status'] = var2;
                return var1;
            };
            var18 = var21.bind(var25)(var19, var18);
            var39 = var18.isMobileOnline;
            _closure2_slot21 = var39;
            var41 = var18.status;
            _closure2_slot22 = var41;
            var18 = var24[var17];
            var25 = var23.bind(var5)(var18);
            var21 = var25.useStateFromStores;
            var18 = _closure1_slot10;
            var19 = new Array(1);
            var19[0] = var18;
            var18 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot8;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0006_ip = 42; continue _fun0006 }
 13:
                    var4 = _closure1_slot10;
                    var3 = var4.getNickname;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var1);
                    _fun0006_ip = 46; continue _fun0006;
 42:
                    var1 = _closure2_slot8;
 46:
                    return var1;
                }
            };
            var21 = var21.bind(var25)(var19, var18);
            _closure2_slot8 = var21;
            var17 = var24[var17];
            var25 = var23.bind(var5)(var17);
            var19 = var25.useStateFromStores;
            var17 = _closure1_slot7;
            var18 = new Array(1);
            var18[0] = var17;
            var17 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getSuggestion;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var40 = var19.bind(var25)(var18, var17);
            _closure2_slot23 = var40;
            var17 = 27;
            var17 = var24[var17];
            var18 = var23.bind(var5)(var17);
            var17 = var18.useAvatarDecoration;
            var19 = var17.bind(var18)(var28, var22);
            _closure2_slot24 = var19;
            var31 = _closure1_slot3;
            var18 = var31.useCallback;
            var17 = new Array(2);
            var17[0] = var28;
            var17[1] = var15;
            var15 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 28; continue _fun0007 }
 13:
                    var3 = _closure2_slot5;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = var18.bind(var31)(var15, var17);
            var15 = var31.useRef;
            var15 = var15.bind(var31)(var28);
            _closure2_slot25 = var15;
            var25 = var31.useEffect;
            var17 = new Array(1);
            var17[0] = var28;
            var15 = function() {
                var2 = _closure2_slot25;
                var1 = _closure2_slot1;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var15 = var25.bind(var31)(var15, var17);
            var25 = var31.useMemo;
            var17 = new Array(6);
            var17[0] = var8;
            var17[1] = var35;
            var17[2] = var28;
            var17[3] = var13;
            var17[4] = var9;
            var17[5] = var27;
            var15 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = new Array(0);
                    var3 = _closure2_slot2;
                    var1 = _closure1_slot11;
                    var1 = var1.ACTIONS;
                    if(!(var3 === var1)) { _fun0008_ip = 1533; continue _fun0008 }
 33:
                    var3 = _closure2_slot0;
                    var1 = _closure1_slot12;
                    var1 = var1.PENDING_INCOMING;
                    if(!(var1 !== var3)) { _fun0008_ip = 1107; continue _fun0008 }
 54:
                    var1 = _closure1_slot12;
                    var1 = var1.PENDING_OUTGOING;
                    if(!(var1 !== var3)) { _fun0008_ip = 862; continue _fun0008 }
 71:
                    var1 = _closure1_slot12;
                    var1 = var1.SUGGESTION;
                    if(!(var1 !== var3)) { _fun0008_ip = 513; continue _fun0008 }
 88:
                    var1 = _closure1_slot12;
                    var1 = var1.FRIEND;
                    var4 = var2.push;
                    var3 = {};
                    var7 = _closure1_slot17;
                    var1 = var7.CALL;
                    var3['name'] = var1;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var6 = 28;
                    var1 = var16[var6];
                    var5 = undefined;
                    var1 = var15.bind(var5)(var1);
                    var17 = var1.intl;
                    var13 = var17.formatToPlainString;
                    var1 = var16[var6];
                    var1 = var15.bind(var5)(var1);
                    var1 = var1.t;
                    var9 = var1.Q75ddn;
                    var1 = {};
                    var8 = _closure1_slot1;
                    var14 = 24;
                    var18 = var16[var14];
                    var20 = var8.bind(var5)(var18);
                    var19 = var20.getName;
                    var18 = _closure2_slot1;
                    var19 = var19.bind(var20)(var18);
                    var1['name'] = var19;
                    var1 = var13.bind(var17)(var9, var1);
                    var3['label'] = var1;
                    var1 = {};
                    var7 = var7.MESSAGE;
                    var1['name'] = var7;
                    var7 = var16[var6];
                    var7 = var15.bind(var5)(var7);
                    var13 = var7.intl;
                    var9 = var13.formatToPlainString;
                    var6 = var16[var6];
                    var6 = var15.bind(var5)(var6);
                    var6 = var6.t;
                    var7 = var6.zFfSFR;
                    var6 = {};
                    var14 = var16[var14];
                    var17 = var8.bind(var5)(var14);
                    var14 = var17.getName;
                    var14 = var14.bind(var17)(var18);
                    var6['name'] = var14;
                    var6 = var9.bind(var13)(var7, var6);
                    var1['label'] = var6;
                    var1 = var4.bind(var2)(var3, var1);
                    var4 = _closure1_slot15;
                    var3 = _closure1_slot4;
                    var1 = {};
                    var6 = _closure2_slot17;
                    var6 = var6.actions;
                    var1['style'] = var6;
                    var14 = _closure1_slot14;
                    var7 = 29;
                    var6 = var16[var7];
                    var9 = var8.bind(var5)(var6);
                    var6 = {};
                    var13 = _closure2_slot17;
                    var13 = var13.action;
                    var6['styles'] = var13;
                    var13 = 34;
                    var13 = var16[var13];
                    var13 = var15.bind(var5)(var13);
                    var13 = var13.PhoneCallIcon;
                    var6['IconComponent'] = var13;
                    var13 = 'neutral';
                    var6['type'] = var13;
                    var17 = function onPress() {
                        var3 = _closure1_slot21;
                        var1 = _closure2_slot25;
                        var2 = var1.current;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var6['onPress'] = var17;
                    var9 = var14.bind(var5)(var9, var6);
                    var6 = new Array(2);
                    var6[0] = var9;
                    var9 = _closure1_slot14;
                    var7 = var16[var7];
                    var8 = var8.bind(var5)(var7);
                    var7 = {};
                    var14 = _closure2_slot17;
                    var14 = var14.action;
                    var7['styles'] = var14;
                    var14 = 35;
                    var14 = var16[var14];
                    var14 = var15.bind(var5)(var14);
                    var14 = var14.ChatIcon;
                    var7['IconComponent'] = var14;
                    var7['type'] = var13;
                    var13 = function onPress() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var3 = _closure2_slot7;
                            var1 = null;
                            var3 = var1 == var3;
                            var4 = undefined;
                            var1 = undefined;
                            if(var3) { _fun0009_ip = 38; continue _fun0009 }
 20:
                            var3 = _closure2_slot7;
                            var2 = _closure2_slot25;
                            var2 = var2.current;
                            var1 = var3.bind(var4)(var2);
 38:
                            return var1;
                        }
                    };
                    var7['onPress'] = var13;
                    var7 = var9.bind(var5)(var8, var7);
                    var6[1] = var7;
                    var1['children'] = var6;
                    var3 = var4.bind(var5)(var3, var1);
                    _fun0008_ip = 1519; continue _fun0008;
 513:
                    var5 = var2.push;
                    var4 = {};
                    var7 = _closure1_slot17;
                    var1 = var7.ACCEPT_SUGGESTION;
                    var4['name'] = var1;
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var16 = 28;
                    var1 = var22[var16];
                    var6 = undefined;
                    var1 = var21.bind(var6)(var1);
                    var9 = var1.intl;
                    var8 = var9.string;
                    var1 = var22[var16];
                    var1 = var21.bind(var6)(var1);
                    var1 = var1.t;
                    var1 = var1.ed99+v;
                    var1 = var8.bind(var9)(var1);
                    var4['label'] = var1;
                    var1 = {};
                    var7 = var7.IGNORE_SUGGESTION;
                    var1['name'] = var7;
                    var7 = var22[var16];
                    var7 = var21.bind(var6)(var7);
                    var9 = var7.intl;
                    var8 = var9.string;
                    var7 = var22[var16];
                    var7 = var21.bind(var6)(var7);
                    var7 = var7.t;
                    var7 = var7.Tw3a/f;
                    var7 = var8.bind(var9)(var7);
                    var1['label'] = var7;
                    var1 = var5.bind(var2)(var4, var1);
                    var5 = _closure1_slot14;
                    var4 = _closure1_slot4;
                    var1 = {};
                    var7 = _closure2_slot17;
                    var7 = var7.actions;
                    var1['style'] = var7;
                    var9 = _closure1_slot14;
                    var8 = _closure1_slot4;
                    var7 = {};
                    var13 = _closure2_slot17;
                    var13 = var13.buttonWrapper;
                    var7['style'] = var13;
                    var15 = _closure1_slot14;
                    var13 = 32;
                    var13 = var22[var13];
                    var13 = var21.bind(var6)(var13);
                    var14 = var13.Button;
                    var13 = {'variant': 'secondary', 'size': 'sm'};
                    var17 = 33;
                    var17 = var22[var17];
                    var19 = var21.bind(var6)(var17);
                    var18 = var19.truncateText;
                    var17 = var22[var16];
                    var17 = var21.bind(var6)(var17);
                    var20 = var17.intl;
                    var17 = var20.string;
                    var16 = var22[var16];
                    var16 = var21.bind(var6)(var16);
                    var16 = var16.t;
                    var16 = var16.OYkgVl;
                    var17 = var17.bind(var20)(var16);
                    var16 = 8;
                    var16 = var18.bind(var19)(var17, var16);
                    var13['text'] = var16;
                    var16 = function onPress() {
                        var3 = _closure1_slot24;
                        var1 = _closure2_slot25;
                        var2 = var1.current;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var13['onPress'] = var16;
                    var13 = var15.bind(var6)(var14, var13);
                    var7['children'] = var13;
                    var7 = var9.bind(var6)(var8, var7);
                    var1['children'] = var7;
                    var3 = var5.bind(var6)(var4, var1);
                    _fun0008_ip = 1519; continue _fun0008;
 862:
                    var4 = var2.push;
                    var1 = {};
                    var5 = _closure1_slot17;
                    var5 = var5.CANCEL;
                    var1['name'] = var5;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var5 = 28;
                    var7 = var15[var5];
                    var6 = undefined;
                    var7 = var14.bind(var6)(var7);
                    var13 = var7.intl;
                    var9 = var13.formatToPlainString;
                    var5 = var15[var5];
                    var5 = var14.bind(var6)(var5);
                    var5 = var5.t;
                    var7 = var5.JFJ8Cg;
                    var5 = {};
                    var8 = _closure1_slot1;
                    var16 = 24;
                    var16 = var15[var16];
                    var18 = var8.bind(var6)(var16);
                    var17 = var18.getName;
                    var16 = _closure2_slot1;
                    var16 = var17.bind(var18)(var16);
                    var5['name'] = var16;
                    var5 = var9.bind(var13)(var7, var5);
                    var1['label'] = var5;
                    var1 = var4.bind(var2)(var1);
                    var5 = _closure1_slot14;
                    var4 = _closure1_slot4;
                    var1 = {};
                    var7 = _closure2_slot17;
                    var7 = var7.actions;
                    var1['style'] = var7;
                    var9 = _closure1_slot14;
                    var7 = 29;
                    var7 = var15[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = {};
                    var13 = _closure2_slot17;
                    var13 = var13.action;
                    var7['styles'] = var13;
                    var13 = 30;
                    var13 = var15[var13];
                    var13 = var14.bind(var6)(var13);
                    var13 = var13.XLargeIcon;
                    var7['IconComponent'] = var13;
                    var13 = 'neutral';
                    var7['type'] = var13;
                    var13 = function onPress() {
                        var4 = _closure1_slot23;
                        var2 = _closure2_slot25;
                        var3 = var2.current;
                        var2 = _closure2_slot15;
                        var1 = undefined;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var7['onPress'] = var13;
                    var7 = var9.bind(var6)(var8, var7);
                    var1['children'] = var7;
                    var3 = var5.bind(var6)(var4, var1);
                    _fun0008_ip = 1519; continue _fun0008;
 1107:
                    var5 = var2.push;
                    var4 = {};
                    var8 = _closure1_slot17;
                    var1 = var8.DECLINE;
                    var4['name'] = var1;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var7 = 28;
                    var1 = var14[var7];
                    var6 = undefined;
                    var1 = var13.bind(var6)(var1);
                    var18 = var1.intl;
                    var16 = var18.formatToPlainString;
                    var1 = var14[var7];
                    var1 = var13.bind(var6)(var1);
                    var1 = var1.t;
                    var15 = var1.C9Xe6+;
                    var1 = {};
                    var9 = _closure1_slot1;
                    var17 = 24;
                    var19 = var14[var17];
                    var21 = var9.bind(var6)(var19);
                    var20 = var21.getName;
                    var19 = _closure2_slot1;
                    var20 = var20.bind(var21)(var19);
                    var1['name'] = var20;
                    var1 = var16.bind(var18)(var15, var1);
                    var4['label'] = var1;
                    var1 = {};
                    var8 = var8.ACCEPT;
                    var1['name'] = var8;
                    var8 = var14[var7];
                    var8 = var13.bind(var6)(var8);
                    var16 = var8.intl;
                    var15 = var16.formatToPlainString;
                    var7 = var14[var7];
                    var7 = var13.bind(var6)(var7);
                    var7 = var7.t;
                    var8 = var7.6p0yBg;
                    var7 = {};
                    var17 = var14[var17];
                    var18 = var9.bind(var6)(var17);
                    var17 = var18.getName;
                    var17 = var17.bind(var18)(var19);
                    var7['name'] = var17;
                    var7 = var15.bind(var16)(var8, var7);
                    var1['label'] = var7;
                    var1 = var5.bind(var2)(var4, var1);
                    var5 = _closure1_slot15;
                    var4 = _closure1_slot4;
                    var1 = {};
                    var7 = _closure2_slot17;
                    var7 = var7.actions;
                    var1['style'] = var7;
                    var16 = _closure1_slot14;
                    var8 = 29;
                    var7 = var14[var8];
                    var15 = var9.bind(var6)(var7);
                    var7 = {};
                    var17 = _closure2_slot17;
                    var17 = var17.action;
                    var7['styles'] = var17;
                    var17 = 30;
                    var17 = var14[var17];
                    var17 = var13.bind(var6)(var17);
                    var17 = var17.XLargeIcon;
                    var7['IconComponent'] = var17;
                    var17 = 'neutral';
                    var7['type'] = var17;
                    var17 = function onPress() {
                        var4 = _closure1_slot23;
                        var2 = _closure2_slot25;
                        var3 = var2.current;
                        var2 = _closure2_slot15;
                        var1 = undefined;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var7['onPress'] = var17;
                    var15 = var16.bind(var6)(var15, var7);
                    var7 = new Array(2);
                    var7[0] = var15;
                    var10 = _closure1_slot14;
                    var8 = var14[var8];
                    var9 = var9.bind(var6)(var8);
                    var8 = {};
                    var12 = _closure2_slot17;
                    var12 = var12.action;
                    var8['styles'] = var12;
                    var12 = 31;
                    var12 = var14[var12];
                    var12 = var13.bind(var6)(var12);
                    var12 = var12.CheckmarkLargeIcon;
                    var8['IconComponent'] = var12;
                    var12 = 'positive';
                    var8['type'] = var12;
                    var11 = function onPress() {
                        var4 = _closure1_slot22;
                        var2 = _closure2_slot25;
                        var3 = var2.current;
                        var2 = _closure2_slot15;
                        var1 = undefined;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var8['onPress'] = var11;
                    var8 = var10.bind(var6)(var9, var8);
                    var7[1] = var8;
                    var1['children'] = var7;
                    var3 = var5.bind(var6)(var4, var1);
 1519:
                    var1 = {};
                    var1['accessibilityActions'] = var2;
                    var1['actions'] = var3;
                    return var1;
 1533:
                    var1 = {};
                    var1['accessibilityActions'] = var2;
                    var2 = undefined;
                    var1['actions'] = var2;
                    return var1;
                }
            };
            var17 = var25.bind(var31)(var15, var17);
            var15 = var17.accessibilityActions;
            var25 = var17.actions;
            _closure2_slot26 = var25;
            var33 = var31.useCallback;
            var17 = new Array(3);
            var17[0] = var28;
            var17[1] = var13;
            var17[2] = var9;
            var13 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var3 = var1.actionName;
                    var2 = _closure1_slot17;
                    var2 = var2.CALL;
                    if(!(var2 !== var3)) { _fun0010_ip = 280; continue _fun0010 }
 34:
                    var2 = _closure1_slot17;
                    var2 = var2.MESSAGE;
                    if(!(var2 !== var3)) { _fun0010_ip = 245; continue _fun0010 }
 51:
                    var2 = _closure1_slot17;
                    var2 = var2.ACCEPT;
                    if(!(var2 !== var3)) { _fun0010_ip = 220; continue _fun0010 }
 68:
                    var2 = _closure1_slot17;
                    var2 = var2.DECLINE;
                    if(!(var2 !== var3)) { _fun0010_ip = 195; continue _fun0010 }
 82:
                    var2 = _closure1_slot17;
                    var2 = var2.CANCEL;
                    if(!(var2 !== var3)) { _fun0010_ip = 195; continue _fun0010 }
 96:
                    var2 = _closure1_slot17;
                    var2 = var2.ACCEPT_SUGGESTION;
                    if(!(var2 !== var3)) { _fun0010_ip = 175; continue _fun0010 }
 110:
                    var2 = _closure1_slot17;
                    var2 = var2.IGNORE_SUGGESTION;
                    if(!(var2 !== var3)) { _fun0010_ip = 128; continue _fun0010 }
 124:
                    var2 = undefined;
                    return var2;
 128:
                    var3 = _closure2_slot1;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 20;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.ignore;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    return var2;
 175:
                    var4 = _closure1_slot24;
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    return var2;
 195:
                    var5 = _closure1_slot23;
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot15;
                    var2 = undefined;
                    var3 = var5.bind(var2)(var4, var3);
                    return var2;
 220:
                    var5 = _closure1_slot22;
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot15;
                    var2 = undefined;
                    var3 = var5.bind(var2)(var4, var3);
                    return var2;
 245:
                    var4 = _closure2_slot7;
                    var2 = null;
                    var4 = var2 == var4;
                    var5 = undefined;
                    var2 = undefined;
                    if(var4) { _fun0010_ip = 278; continue _fun0010 }
 265:
                    var4 = _closure2_slot7;
                    var3 = _closure2_slot1;
                    var2 = var4.bind(var5)(var3);
 278:
                    return var2;
 280:
                    var3 = _closure1_slot21;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var13 = var33.bind(var31)(var13, var17);
            var33 = var31.useCallback;
            var17 = new Array(3);
            var17[0] = var42;
            var17[1] = var28;
            var17[2] = var10;
            var10 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = _closure2_slot6;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0011_ip = 30; continue _fun0011 }
 13:
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    _fun0011_ip = 90; continue _fun0011;
 30:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var2 = 37;
                    var2 = var1[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = 36;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var4)(var2, var1);
                    var2 = var3.then;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.default;
                        var2 = {};
                        var4 = _closure2_slot1;
                        var5 = var4.id;
                        var2['userId'] = var5;
                        var2['localUser'] = var4;
                        var1 = _closure2_slot18;
                        var2['sourceAnalyticsLocations'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 90:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var33.bind(var31)(var10, var17);
            var10 = 38;
            var10 = var24[var10];
            var24 = var23.bind(var5)(var10);
            var23 = var24.useNameplate;
            var10 = {};
            var10['user'] = var28;
            var10['guildId'] = var22;
            var33 = 'UserRow';
            var10['location'] = var33;
            var10 = var23.bind(var24)(var10);
            var33 = var31.useMemo;
            var24 = new Array(2);
            var24[0] = var30;
            var24[1] = var12;
            var23 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var2 = _closure2_slot9;
                    var1 = null;
                    var2 = var1 != var2;
                    var1 = undefined;
                    if(!var2) { _fun0012_ip = 45; continue _fun0012 }
 18:
                    var4 = _closure2_slot20;
                    var2 = 'username';
                    var1 = undefined;
                    if(!(var2 === var4)) { _fun0012_ip = 45; continue _fun0012 }
 32:
                    var2 = {};
                    var3 = _closure2_slot9;
                    var2['color'] = var3;
                    var1 = var2;
 45:
                    return var1;
                }
            };
            var33 = var33.bind(var31)(var23, var24);
            var24 = var31.useMemo;
            var42 = var27.avatar;
            var23 = new Array(6);
            var23[0] = var42;
            var23[1] = var28;
            var23[2] = var22;
            var23[3] = var41;
            var23[4] = var39;
            var23[5] = var19;
            var19 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var4 = _closure1_slot14;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var8 = 39;
                    var1 = var1[var8];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var7 = _closure2_slot17;
                    var7 = var7.avatar;
                    var1['style'] = var7;
                    var7 = _closure2_slot1;
                    var1['user'] = var7;
                    var7 = _closure2_slot11;
                    var1['guildId'] = var7;
                    var7 = _closure1_slot13;
                    var10 = var7.OFFLINE;
                    var9 = _closure2_slot22;
                    var7 = null;
                    if(!(var10 !== var9)) { _fun0013_ip = 88; continue _fun0013 }
 84:
                    var7 = _closure2_slot22;
 88:
                    var1['status'] = var7;
                    var7 = _closure2_slot21;
                    var1['isMobileOnline'] = var7;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var6 = var7.bind(var3)(var6);
                    var6 = var6.AvatarSizes;
                    var6 = var6.REFRESH_MEDIUM_32;
                    var1['size'] = var6;
                    var5 = _closure2_slot24;
                    var1['avatarDecoration'] = var5;
                    var5 = true;
                    var1['autoStatusCutout'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var19 = var24.bind(var31)(var19, var23);
            var24 = var31.useMemo;
            var23 = new Array(5);
            var23[0] = var38;
            var23[1] = var35;
            var41 = var3 == var40;
            var39 = undefined;
            if(var41) { _fun0005_ip = 950; continue _fun0005 }
 945:
            var39 = var40.name;
 950:
            var23[2] = var39;
            var23[3] = var21;
            var23[4] = var28;
            var21 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var1 = _closure2_slot14;
                    var4 = undefined;
                    if(!(var4 === var1)) { _fun0014_ip = 126; continue _fun0014 }
 13:
                    var5 = _closure2_slot0;
                    var3 = _closure1_slot12;
                    var3 = var3.SUGGESTION;
                    if(!(var5 === var3)) { _fun0014_ip = 62; continue _fun0014 }
 34:
                    var3 = _closure2_slot23;
                    var5 = null;
                    var6 = var5 == var3;
                    var3 = undefined;
                    if(var6) { _fun0014_ip = 58; continue _fun0014 }
 49:
                    var6 = _closure2_slot23;
                    var3 = var6.name;
 58:
                    if(!(var5 == var3)) { _fun0014_ip = 115; continue _fun0014 }
 62:
                    var5 = _closure2_slot8;
                    var3 = null;
                    if(!(var3 == var5)) { _fun0014_ip = 109; continue _fun0014 }
 72:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 24;
                    var1 = var5[var1];
                    var4 = var3.bind(var4)(var1);
                    var3 = var4.getName;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var1);
                    _fun0014_ip = 113; continue _fun0014;
 109:
                    var1 = _closure2_slot8;
 113:
                    _fun0014_ip = 124; continue _fun0014;
 115:
                    var3 = _closure2_slot23;
                    var1 = var3.name;
 124:
                    _fun0014_ip = 130; continue _fun0014;
 126:
                    var1 = _closure2_slot14;
 130:
                    return var1;
                }
            };
            var31 = var24.bind(var31)(var21, var23);
            var23 = _closure1_slot3;
            var24 = var23.useMemo;
            var21 = new Array(4);
            var21[0] = var38;
            var21[1] = var28;
            var21[2] = var37;
            var21[3] = var11;
            var11 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var1 = _closure2_slot14;
                    var4 = undefined;
                    if(!(var4 !== var1)) { _fun0015_ip = 15; continue _fun0015 }
 13:
                    return var4;
 15:
                    var3 = _closure1_slot15;
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 23;
                    var1 = var5[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.Text;
                    var1 = {};
                    var5 = 'text-md/semibold';
                    var1['variant'] = var5;
                    var5 = _closure2_slot1;
                    var5 = var5.bot;
                    var6 = null;
                    var8 = null;
                    if(!var5) { _fun0015_ip = 190; continue _fun0015 }
 74:
                    var10 = _closure1_slot15;
                    var9 = _closure1_slot16;
                    var5 = {};
                    var14 = _closure1_slot14;
                    var12 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var11 = 40;
                    var11 = var18[var11];
                    var12 = var12.bind(var4)(var11);
                    var11 = {};
                    var17 = _closure2_slot1;
                    var15 = var17.isVerifiedBot;
                    var15 = var15.bind(var17)();
                    var11['verified'] = var15;
                    var16 = _closure1_slot0;
                    var15 = 41;
                    var15 = var18[var15];
                    var16 = var16.bind(var4)(var15);
                    var15 = var16.getBotTagTypeFromUser;
                    var15 = var15.bind(var16)(var17);
                    var11['type'] = var15;
                    var12 = var14.bind(var4)(var12, var11);
                    var11 = [' '];
                    var11[1] = var12;
                    var5['children'] = var11;
                    var8 = var10.bind(var4)(var9, var5);
 190:
                    var5 = new Array(3);
                    var5[0] = var8;
                    var9 = _closure2_slot4;
                    var8 = null;
                    if(!var9) { _fun0015_ip = 318; continue _fun0015 }
 207:
                    var11 = _closure1_slot15;
                    var10 = _closure1_slot16;
                    var9 = {};
                    var15 = _closure1_slot14;
                    var14 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var12 = 42;
                    var12 = var18[var12];
                    var12 = var14.bind(var4)(var12);
                    var14 = var12.CrownIcon;
                    var12 = {};
                    var16 = 'xs';
                    var12['size'] = var16;
                    var17 = _closure1_slot1;
                    var16 = 12;
                    var16 = var18[var16];
                    var16 = var17.bind(var4)(var16);
                    var16 = var16.colors;
                    var16 = var16.TEXT_WARNING;
                    var12['color'] = var16;
                    var14 = var15.bind(var4)(var14, var12);
                    var12 = [' '];
                    var12[1] = var14;
                    var9['children'] = var12;
                    var8 = var11.bind(var4)(var10, var9);
 318:
                    var5[1] = var8;
                    var7 = _closure2_slot10;
                    var7 = var6 != var7;
                    var6 = null;
                    if(!var7) { _fun0015_ip = 446; continue _fun0015 }
 335:
                    var9 = _closure1_slot15;
                    var8 = _closure1_slot16;
                    var7 = {};
                    var12 = _closure1_slot14;
                    var11 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var10 = 43;
                    var10 = var15[var10];
                    var10 = var11.bind(var4)(var10);
                    var11 = var10.BoostTier2Icon;
                    var10 = {};
                    var14 = 'xs';
                    var10['size'] = var14;
                    var14 = _closure1_slot1;
                    var13 = 12;
                    var13 = var15[var13];
                    var13 = var14.bind(var4)(var13);
                    var13 = var13.unsafe_rawColors;
                    var13 = var13.GUILD_BOOSTING_PINK;
                    var10['color'] = var13;
                    var11 = var12.bind(var4)(var11, var10);
                    var10 = [' '];
                    var10[1] = var11;
                    var7['children'] = var10;
                    var6 = var9.bind(var4)(var8, var7);
 446:
                    var5[2] = var6;
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var24 = var24.bind(var23)(var11, var21);
            var21 = var23.useMemo;
            var11 = new Array(7);
            var11[0] = var36;
            var11[1] = var28;
            var11[2] = var35;
            var11[3] = var34;
            var11[4] = var32;
            var11[5] = var22;
            var11[6] = var9;
            var9 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var1 = _closure2_slot13;
                    var5 = undefined;
                    if(!(var5 === var1)) { _fun0016_ip = 87; continue _fun0016 }
 13:
                    var4 = _closure1_slot14;
                    var3 = _closure1_slot25;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1['user'] = var6;
                    var6 = _closure2_slot0;
                    var1['type'] = var6;
                    var6 = _closure2_slot19;
                    var6 = !var6;
                    var1['animate'] = var6;
                    var6 = _closure2_slot16;
                    var1['isGameRelationship'] = var6;
                    var6 = _closure2_slot11;
                    var1['guildId'] = var6;
                    var6 = _closure2_slot15;
                    var1['applicationId'] = var6;
                    var1 = var4.bind(var5)(var3, var1);
                    _fun0016_ip = 91; continue _fun0016;
 87:
                    var1 = _closure2_slot13;
 91:
                    return var1;
                }
            };
            var9 = var21.bind(var23)(var9, var11);
            var21 = var23.useMemo;
            var11 = new Array(4);
            var11[0] = var26;
            var11[1] = var20;
            var11[2] = var8;
            var11[3] = var25;
            var6 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var3 = _closure2_slot12;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0017_ip = 54; continue _fun0017 }
 13:
                    var3 = _closure2_slot3;
                    var1 = null;
                    if(var3) { _fun0017_ip = 52; continue _fun0017 }
 22:
                    var5 = _closure2_slot2;
                    var3 = _closure1_slot11;
                    var4 = var3.ACTIONS;
                    var3 = undefined;
                    if(!(var5 === var4)) { _fun0017_ip = 49; continue _fun0017 }
 45:
                    var3 = _closure2_slot26;
 49:
                    var1 = var3;
 52:
                    _fun0017_ip = 58; continue _fun0017;
 54:
                    var1 = _closure2_slot12;
 58:
                    return var1;
                }
            };
            var11 = var21.bind(var23)(var6, var11);
            var21 = _closure1_slot1;
            var23 = _closure1_slot2;
            var6 = 44;
            var6 = var23[var6];
            var21 = var21.bind(var5)(var6);
            var6 = var28.id;
            var35 = var21.bind(var5)(var22, var6);
            var22 = _closure1_slot0;
            var21 = 45;
            var21 = var23[var21];
            var22 = var22.bind(var5)(var21);
            var21 = var22.useProcessColorStringsArray;
            var34 = var21.bind(var22)(var29);
            if(!var35) { _fun0005_ip = 1166; continue _fun0005 }
 1158:
            var6 = 'username';
            var35 = var6 === var12;
 1166:
            if(!var35) { _fun0005_ip = 1181; continue _fun0005 }
 1169:
            var21 = var34.length;
            var6 = 1;
            var35 = var21 > var6;
 1181:
            var22 = _closure1_slot15;
            var21 = _closure1_slot4;
            var6 = {};
            var23 = var27.usernameLabelContainer;
            var6['style'] = var23;
            var26 = _closure1_slot14;
            var25 = _closure1_slot0;
            var32 = _closure1_slot2;
            var23 = 23;
            var23 = var32[var23];
            var23 = var25.bind(var5)(var23);
            var25 = var23.Text;
            var23 = {'gradientColors': null, 'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            var32 = undefined;
            if(!var35) { _fun0005_ip = 1252; continue _fun0005 }
 1249:
            var32 = var34;
 1252:
            var23['gradientColors'] = var32;
            var34 = var27.usernameLabel;
            var32 = new Array(2);
            var32[0] = var34;
            var32[1] = var33;
            var23['style'] = var32;
            var23['children'] = var31;
            var25 = var26.bind(var5)(var25, var23);
            var23 = new Array(3);
            var23[0] = var25;
            var23[1] = var24;
            var26 = _closure1_slot14;
            var25 = _closure1_slot1;
            var31 = _closure1_slot2;
            var24 = 46;
            var24 = var31[var24];
            var25 = var25.bind(var5)(var24);
            var24 = {};
            var28 = var28.id;
            var24['userId'] = var28;
            var24 = var26.bind(var5)(var25, var24);
            var23[2] = var24;
            var6['children'] = var23;
            var24 = var22.bind(var5)(var21, var6);
            var6 = 'dot';
            var6 = var6 !== var12;
            if(var6) { _fun0005_ip = 1382; continue _fun0005 }
 1368:
            var12 = var3 == var30;
            if(!var12) { _fun0005_ip = 1379; continue _fun0005 }
 1375:
            var12 = var3 == var29;
 1379:
            var6 = var12;
 1382:
            var12 = var24;
            if(var6) { _fun0005_ip = 1514; continue _fun0005 }
 1391:
            var22 = _closure1_slot15;
            var21 = _closure1_slot4;
            var6 = {};
            var23 = var27.labelContainer;
            var6['style'] = var23;
            var26 = _closure1_slot14;
            var25 = _closure1_slot0;
            var28 = _closure1_slot2;
            var23 = 47;
            var23 = var28[var23];
            var23 = var25.bind(var5)(var23);
            var25 = var23.RoleDot;
            var23 = {};
            var31 = var3 != var30;
            var28 = null;
            if(!var31) { _fun0005_ip = 1455; continue _fun0005 }
 1452:
            var28 = var30;
 1455:
            var23['color'] = var28;
            var30 = var3 != var29;
            var28 = null;
            if(!var30) { _fun0005_ip = 1471; continue _fun0005 }
 1468:
            var28 = var29;
 1471:
            var23['colors'] = var28;
            var27 = var27.roleDot;
            var23['containerStyles'] = var27;
            var25 = var26.bind(var5)(var25, var23);
            var23 = new Array(2);
            var23[0] = var25;
            var23[1] = var24;
            var6['children'] = var23;
            var12 = var22.bind(var5)(var21, var6);
 1514:
            var6 = {};
            var46 = var6;
            var45 = var16;
            var16 = copyDataProperties(var46, var45);
            var16 = 'disabled';
            var6[var16] = var20;
            var16 = 'icon';
            var6[var16] = var19;
            var16 = 'onPress';
            var6[var16] = var18;
            var16 = 'onLongPress';
            var6[var16] = var17;
            if(!(var3 != var14)) { _fun0005_ip = 1569; continue _fun0005 }
 1566:
            var15 = var14;
 1569:
            var14 = 'accessibilityActions';
            var6[var14] = var15;
            if(!(var3 != var4)) { _fun0005_ip = 1585; continue _fun0005 }
 1582:
            var13 = var4;
 1585:
            var4 = 'onAccessibilityAction';
            var6[var4] = var13;
            var4 = 'label';
            var6[var4] = var12;
            var4 = 'subLabel';
            var6[var4] = var9;
            var4 = _closure1_slot11;
            var4 = var4.TOGGLE;
            if(!(var8 !== var4)) { _fun0005_ip = 1763; continue _fun0005 }
 1629:
            if(!(var3 != var10)) { _fun0005_ip = 1636; continue _fun0005 }
 1633:
            if(var1) { _fun0005_ip = 1695; continue _fun0005 }
 1636:
            var4 = _closure1_slot14;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 50;
            var1 = var8[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.TableRow;
            var1 = {};
            var46 = var1;
            var45 = var6;
            var8 = copyDataProperties(var46, var45);
            var8 = 'trailing';
            var1[var8] = var11;
            var1 = var4.bind(var5)(var3, var1);
            _fun0005_ip = 1761; continue _fun0005;
 1695:
            var8 = _closure1_slot14;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 49;
            var3 = var9[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.UserNameplateRow;
            var3 = {};
            var46 = var3;
            var45 = var6;
            var9 = copyDataProperties(var46, var45);
            var9 = 'trailing';
            var3[var9] = var11;
            var9 = 'nameplate';
            var3[var9] = var10;
            var1 = var8.bind(var5)(var4, var3);
 1761:
            _fun0005_ip = 1820; continue _fun0005;
 1763:
            var4 = _closure1_slot14;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 48;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.TableCheckboxRow;
            var2 = {};
            var46 = var2;
            var45 = var6;
            var6 = copyDataProperties(var46, var45);
            var6 = 'checked';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
 1820:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 51;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/user_list/UserRow.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
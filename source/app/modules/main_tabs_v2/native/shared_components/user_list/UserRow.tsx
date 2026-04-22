// app/modules/main_tabs_v2/native/shared_components/user_list/UserRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var12 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var12;
        var _closure1_slot2 = var6;
        var1 = function handleCall(arg1) {
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 14;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.ensurePrivateChannel;
            var3 = var3.id;
            var4 = var4.bind(var5)(var3);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot8;
                    var3 = var4.getChannel;
                    var2 = arg1;
                    var5 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var5)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 15;
                    var2 = var6[var2];
                    var3 = undefined;
                    var8 = var4.bind(var3)(var2);
                    var2 = var5.isPrivate;
                    var7 = var2.bind(var5)();
                    var2 = 'must be a DM';
                    var2 = var8.bind(var3)(var7, var2);
                    var2 = 16;
                    var2 = var6[var2];
                    var4 = var4.bind(var3)(var2);
                    var2 = false;
                    var4 = var4.bind(var3)(var5, var2);
                    var2 = var4.onPress;
                    var4 = var4.inCall;
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = var2.bind(var3)();
case 4:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 14;
                    var1 = var4[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.openPrivateChannel;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var1['recipientIds'] = var4;
                    var1 = var2.bind(var3)(var1);
case 2:
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
            var1 = 17;
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
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.presentFriendRequestAcceptedToast;
                    var1 = var1.bind(var2)();
                    _fun0003_ip = 8; continue _fun0003;
case 6:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.presentGameFriendRequestAcceptedToast;
                    var1 = var1.bind(var2)();
case 8:
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
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var8 = arg1;
                var7 = arg2;
                var1 = null;
                if(!(var1 == var7)) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 20;
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
                var1 = 18;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.presentFriendRequestIgnoredToast;
                var1 = var1.bind(var2)();
                _fun0004_ip = 11; continue _fun0004;
case 9:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 19;
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
                var1 = 18;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.presentGameFriendRequestIgnoredToast;
                var1 = var1.bind(var2)();
case 11:
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot23 = var1;
        var1 = function handleAcceptSuggestion(arg1) {
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 20;
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
            var2 = 18;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.presentAddedFriendToast;
            var2 = var2.bind(var3)();
            return var1;
        };
        var _closure1_slot24 = var1;
        var1 = function UserRowSubLabel(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
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
                var5 = 22;
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
                if(!(var3 !== var1)) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                var1 = _closure1_slot12;
                var1 = var1.SUGGESTION;
                if(!(var3 !== var1)) { _fun0005_ip = 12; continue _fun0005 }
case 14:
                var1 = _closure1_slot12;
                var1 = var1.PENDING_OUTGOING;
                if(!(var3 !== var1)) { _fun0005_ip = 12; continue _fun0005 }
case 15:
                var5 = _closure1_slot14;
                var3 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 26;
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
                _fun0005_ip = 16; continue _fun0005;
case 12:
                if(var2) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var5 = _closure1_slot14;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 24;
                var2 = var11[var2];
                var2 = var9.bind(var7)(var2);
                var3 = var2.Text;
                var2 = {'lineClamp': 1, 'variant': 'text-xs/medium', 'color': 'text-muted'};
                var6 = 25;
                var6 = var11[var6];
                var9 = var9.bind(var7)(var6);
                var6 = var9.getUserTag;
                var6 = var6.bind(var9)(var10);
                var2['children'] = var6;
                var2 = var5.bind(var7)(var3, var2);
                _fun0005_ip = 19; continue _fun0005;
case 17:
                var14 = null;
                if(!(var14 != var13)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                var6 = _closure1_slot15;
                var5 = _closure1_slot4;
                var3 = {};
                var9 = var8.gameContainer;
                var3['style'] = var9;
                var12 = _closure1_slot14;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 23;
                var9 = var11[var9];
                var9 = var10.bind(var7)(var9);
                var11 = var9.Icon;
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
                if(!var16) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                var14 = var15;
case 22:
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
                var10 = 24;
                var10 = var14[var10];
                var10 = var11.bind(var7)(var10);
                var11 = var10.Text;
                var10 = {'lineClamp': 1, 'variant': 'text-xs/medium', 'color': 'text-subtle'};
                var13 = var13.name;
                var10['children'] = var13;
                var10 = var12.bind(var7)(var11, var10);
                var9[1] = var10;
                var3['children'] = var9;
                var3 = var6.bind(var7)(var5, var3);
                _fun0005_ip = 24; continue _fun0005;
case 20:
                var6 = _closure1_slot14;
                var5 = _closure1_slot4;
                var4 = {};
                var8 = var8.gameIcon;
                var4['style'] = var8;
                var3 = var6.bind(var7)(var5, var4);
case 24:
                var2 = var3;
case 19:
                var1 = var2;
case 16:
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
        var11 = {};
        var13 = 'row';
        var11['flexDirection'] = var13;
        var8['actions'] = var11;
        var11 = 12;
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
        var13 = {};
        var11 = var6[var11];
        var14 = var5.bind(var1)(var11);
        var11 = var14.isIOS;
        var14 = var11.bind(var14)();
        var11 = 13;
        var15 = var6[var11];
        var15 = var12.bind(var1)(var15);
        var15 = var15.modules;
        var15 = var15.mobile;
        if(var14) { _fun0001_ip = 25; continue _fun0001 }
case 26:
        var14 = var15.USER_ROW_LABEL_LINE_HEIGHT_ANDROID;
        _fun0001_ip = 27; continue _fun0001;
case 25:
        var14 = var15.USER_ROW_LABEL_LINE_HEIGHT_IOS;
case 27:
        var13['lineHeight'] = var14;
        var8['usernameLabelWithLineHeight'] = var13;
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
        var13 = var13.TEXT_SUBTLE;
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var12 = arg1;
                var39 = var12.type;
                var _closure2_slot0 = var39;
                var33 = var12.user;
                var _closure2_slot1 = var33;
                var8 = var12.mode;
                var5 = undefined;
                if(!(var8 === var5)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                var1 = _closure1_slot11;
                var8 = var1.NONE;
case 28:
                var _closure2_slot2 = var8;
                var7 = var12.selected;
                if(!(var7 === var5)) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                var7 = false;
case 30:
                var20 = var12.disabled;
                if(!(var20 === var5)) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                var20 = false;
case 32:
                var _closure2_slot3 = var20;
                var42 = var12.isOwner;
                if(!(var42 === var5)) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                var42 = false;
case 34:
                var _closure2_slot4 = var42;
                var15 = var12.onPress;
                var _closure2_slot5 = var15;
                var44 = var12.onLongPress;
                var _closure2_slot6 = var44;
                var13 = var12.handleMessage;
                var _closure2_slot7 = var13;
                var1 = var12.nickname;
                var _closure2_slot8 = var1;
                var30 = var12.usernameColor;
                var _closure2_slot9 = var30;
                var29 = var12.roleColors;
                var11 = var12.premiumSince;
                var _closure2_slot10 = var11;
                var23 = var12.guildId;
                var _closure2_slot11 = var23;
                var31 = var12.trailing;
                var _closure2_slot12 = var31;
                var41 = var12.subLabel;
                var _closure2_slot13 = var41;
                var43 = var12.label;
                var _closure2_slot14 = var43;
                var14 = var12.accessibilityActions;
                var4 = var12.onAccessibilityAction;
                var9 = var12.applicationId;
                var _closure2_slot15 = var9;
                var37 = var12.isGameRelationship;
                if(!(var37 === var5)) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                var37 = false;
case 36:
                var _closure2_slot16 = var37;
                var1 = var12.isNameplatedRow;
                if(!(var1 === var5)) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                var1 = false;
case 38:
                var26 = var12.canShowDisplayNameStyles;
                if(!(var26 === var5)) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                var26 = false;
case 40:
                var36 = var12.canShowDisplayNameStylesFont;
                if(!(var36 === var5)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                var36 = false;
case 42:
                var10 = {'type': 0, 'user': 0, 'mode': 0, 'selected': 0, 'disabled': 0, 'isOwner': 0, 'onPress': 0, 'onLongPress': 0, 'handleMessage': 0, 'nickname': 0, 'usernameColor': 0, 'roleColors': 0, 'premiumSince': 0, 'guildId': 0, 'trailing': 0, 'subLabel': 0, 'label': 0, 'accessibilityActions': 0, 'onAccessibilityAction': 0, 'applicationId': 0, 'isGameRelationship': 0, 'isNameplatedRow': 0, 'canShowDisplayNameStyles': 0, 'canShowDisplayNameStylesFont': 0};
                var3 = null;
                var49 = var10;
                var48 = null;
                var2 = silentSetPrototypeOf(var49, var48);
                var49 = {};
                var48 = var12;
                var47 = var10;
                var16 = copyDataProperties(var49, var48, var47);
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
                var _closure2_slot27 = var5;
                var10 = _closure1_slot18;
                var27 = var10.bind(var5)();
                _closure2_slot17 = var27;
                var12 = _closure1_slot1;
                var24 = _closure1_slot2;
                var10 = 27;
                var10 = var24[var10];
                var10 = var12.bind(var5)(var10);
                var10 = var10.bind(var5)();
                var10 = var10.analyticsLocations;
                _closure2_slot18 = var10;
                var22 = _closure1_slot0;
                var17 = 22;
                var12 = var24[var17];
                var21 = var22.bind(var5)(var12);
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
                var38 = var12.useReducedMotion;
                _closure2_slot19 = var38;
                var12 = var12.roleStyle;
                _closure2_slot20 = var12;
                var18 = var24[var17];
                var25 = var22.bind(var5)(var18);
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
                    var5 = var4.isVROnline;
                    var3 = var2.id;
                    var3 = var5.bind(var4)(var3);
                    var1['isVROnline'] = var3;
                    var3 = var4.getStatus;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var1['status'] = var2;
                    return var1;
                };
                var18 = var21.bind(var25)(var19, var18);
                var40 = var18.isMobileOnline;
                _closure2_slot21 = var40;
                var32 = var18.isVROnline;
                _closure2_slot22 = var32;
                var28 = var18.status;
                _closure2_slot23 = var28;
                var18 = var24[var17];
                var25 = var22.bind(var5)(var18);
                var21 = var25.useStateFromStores;
                var18 = _closure1_slot10;
                var19 = new Array(1);
                var19[0] = var18;
                var18 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = _closure2_slot8;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0007_ip = 44; continue _fun0007 }
case 7:
                        var4 = _closure1_slot10;
                        var3 = var4.getNickname;
                        var1 = _closure2_slot1;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var1);
                        _fun0007_ip = 45; continue _fun0007;
case 44:
                        var1 = _closure2_slot8;
case 45:
                        return var1;
                    }
                };
                var21 = var21.bind(var25)(var19, var18);
                _closure2_slot8 = var21;
                var17 = var24[var17];
                var25 = var22.bind(var5)(var17);
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
                var45 = var19.bind(var25)(var18, var17);
                _closure2_slot24 = var45;
                var17 = 28;
                var17 = var24[var17];
                var18 = var22.bind(var5)(var17);
                var17 = var18.useAvatarDecoration;
                var19 = var17.bind(var18)(var33, var23);
                _closure2_slot25 = var19;
                var34 = _closure1_slot3;
                var18 = var34.useCallback;
                var17 = new Array(2);
                var17[0] = var33;
                var17[1] = var15;
                var15 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var3 = _closure2_slot5;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0008_ip = 46; continue _fun0008 }
case 7:
                        var3 = _closure2_slot5;
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
case 46:
                        var1 = undefined;
                        return var1;
                    }
                };
                var18 = var18.bind(var34)(var15, var17);
                var15 = var34.useRef;
                var15 = var15.bind(var34)(var33);
                _closure2_slot26 = var15;
                var25 = var34.useEffect;
                var17 = new Array(1);
                var17[0] = var33;
                var15 = function() {
                    var2 = _closure2_slot26;
                    var1 = _closure2_slot1;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var15 = var25.bind(var34)(var15, var17);
                var25 = var34.useMemo;
                var17 = new Array(6);
                var17[0] = var8;
                var17[1] = var39;
                var17[2] = var33;
                var17[3] = var13;
                var17[4] = var9;
                var17[5] = var27;
                var15 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = new Array(0);
                        var3 = _closure2_slot2;
                        var1 = _closure1_slot11;
                        var1 = var1.ACTIONS;
                        if(!(var3 === var1)) { _fun0009_ip = 47; continue _fun0009 }
case 48:
                        var3 = _closure2_slot0;
                        var1 = _closure1_slot12;
                        var1 = var1.PENDING_INCOMING;
                        if(!(var1 !== var3)) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                        var1 = _closure1_slot12;
                        var1 = var1.PENDING_OUTGOING;
                        if(!(var1 !== var3)) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                        var1 = _closure1_slot12;
                        var1 = var1.SUGGESTION;
                        if(!(var1 !== var3)) { _fun0009_ip = 53; continue _fun0009 }
case 35:
                        var1 = _closure1_slot12;
                        var1 = var1.FRIEND;
                        var4 = var2.push;
                        var3 = {};
                        var6 = _closure1_slot17;
                        var1 = var6.CALL;
                        var3['name'] = var1;
                        var12 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var11 = 29;
                        var1 = var20[var11];
                        var5 = undefined;
                        var1 = var12.bind(var5)(var1);
                        var10 = var1.intl;
                        var8 = var10.formatToPlainString;
                        var1 = var20[var11];
                        var1 = var12.bind(var5)(var1);
                        var1 = var1.t;
                        var7 = var1.Q75ddl;
                        var1 = {};
                        var18 = _closure1_slot1;
                        var17 = 25;
                        var15 = var20[var17];
                        var16 = var18.bind(var5)(var15);
                        var15 = var16.getName;
                        var19 = _closure2_slot1;
                        var15 = var15.bind(var16)(var19);
                        var1['name'] = var15;
                        var1 = var8.bind(var10)(var7, var1);
                        var3['label'] = var1;
                        var1 = {};
                        var6 = var6.MESSAGE;
                        var1['name'] = var6;
                        var6 = var20[var11];
                        var6 = var12.bind(var5)(var6);
                        var10 = var6.intl;
                        var8 = var10.formatToPlainString;
                        var6 = var20[var11];
                        var6 = var12.bind(var5)(var6);
                        var6 = var6.t;
                        var7 = var6.zFfSFQ;
                        var6 = {};
                        var15 = var20[var17];
                        var16 = var18.bind(var5)(var15);
                        var15 = var16.getName;
                        var15 = var15.bind(var16)(var19);
                        var6['name'] = var15;
                        var6 = var8.bind(var10)(var7, var6);
                        var1['label'] = var6;
                        var1 = var4.bind(var2)(var3, var1);
                        var4 = _closure1_slot15;
                        var3 = _closure1_slot4;
                        var1 = {};
                        var6 = _closure2_slot17;
                        var6 = var6.actions;
                        var1['style'] = var6;
                        var10 = _closure1_slot14;
                        var7 = 30;
                        var6 = var20[var7];
                        var8 = var18.bind(var5)(var6);
                        var6 = {};
                        var15 = _closure2_slot17;
                        var15 = var15.action;
                        var6['styles'] = var15;
                        var15 = 35;
                        var15 = var20[var15];
                        var15 = var12.bind(var5)(var15);
                        var15 = var15.PhoneCallIcon;
                        var6['IconComponent'] = var15;
                        var15 = 'neutral';
                        var6['type'] = var15;
                        var16 = function onPress() {
                            var3 = _closure1_slot21;
                            var1 = _closure2_slot26;
                            var2 = var1.current;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var6['onPress'] = var16;
                        var16 = var20[var11];
                        var16 = var12.bind(var5)(var16);
                        var23 = var16.intl;
                        var22 = var23.formatToPlainString;
                        var16 = var20[var11];
                        var16 = var12.bind(var5)(var16);
                        var16 = var16.t;
                        var21 = var16.Q75ddl;
                        var16 = {};
                        var24 = var20[var17];
                        var25 = var18.bind(var5)(var24);
                        var24 = var25.getName;
                        var24 = var24.bind(var25)(var19);
                        var16['name'] = var24;
                        var16 = var22.bind(var23)(var21, var16);
                        var6['accessibilityLabel'] = var16;
                        var8 = var10.bind(var5)(var8, var6);
                        var6 = new Array(2);
                        var6[0] = var8;
                        var10 = _closure1_slot14;
                        var7 = var20[var7];
                        var8 = var18.bind(var5)(var7);
                        var7 = {};
                        var16 = _closure2_slot17;
                        var16 = var16.action;
                        var7['styles'] = var16;
                        var16 = 36;
                        var16 = var20[var16];
                        var16 = var12.bind(var5)(var16);
                        var16 = var16.ChatIcon;
                        var7['IconComponent'] = var16;
                        var7['type'] = var15;
                        var15 = function onPress() {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                var3 = _closure2_slot7;
                                var1 = null;
                                var3 = var1 == var3;
                                var4 = undefined;
                                var1 = undefined;
                                if(var3) { _fun0010_ip = 54; continue _fun0010 }
case 55:
                                var3 = _closure2_slot7;
                                var2 = _closure2_slot26;
                                var2 = var2.current;
                                var1 = var3.bind(var4)(var2);
case 54:
                                return var1;
                            }
                        };
                        var7['onPress'] = var15;
                        var15 = var20[var11];
                        var15 = var12.bind(var5)(var15);
                        var16 = var15.intl;
                        var15 = var16.formatToPlainString;
                        var11 = var20[var11];
                        var11 = var12.bind(var5)(var11);
                        var11 = var11.t;
                        var12 = var11.zFfSFQ;
                        var11 = {};
                        var17 = var20[var17];
                        var18 = var18.bind(var5)(var17);
                        var17 = var18.getName;
                        var17 = var17.bind(var18)(var19);
                        var11['name'] = var17;
                        var11 = var15.bind(var16)(var12, var11);
                        var7['accessibilityLabel'] = var11;
                        var7 = var10.bind(var5)(var8, var7);
                        var6[1] = var7;
                        var1['children'] = var6;
                        var3 = var4.bind(var5)(var3, var1);
                        _fun0009_ip = 56; continue _fun0009;
case 53:
                        var5 = var2.push;
                        var4 = {};
                        var7 = _closure1_slot17;
                        var1 = var7.ACCEPT_SUGGESTION;
                        var4['name'] = var1;
                        var21 = _closure1_slot0;
                        var22 = _closure1_slot2;
                        var16 = 29;
                        var1 = var22[var16];
                        var6 = undefined;
                        var1 = var21.bind(var6)(var1);
                        var10 = var1.intl;
                        var8 = var10.string;
                        var1 = var22[var16];
                        var1 = var21.bind(var6)(var1);
                        var1 = var1.t;
                        var1 = var1.ed99+i;
                        var1 = var8.bind(var10)(var1);
                        var4['label'] = var1;
                        var1 = {};
                        var7 = var7.IGNORE_SUGGESTION;
                        var1['name'] = var7;
                        var7 = var22[var16];
                        var7 = var21.bind(var6)(var7);
                        var10 = var7.intl;
                        var8 = var10.string;
                        var7 = var22[var16];
                        var7 = var21.bind(var6)(var7);
                        var7 = var7.t;
                        var7 = var7.Tw3a/R;
                        var7 = var8.bind(var10)(var7);
                        var1['label'] = var7;
                        var1 = var5.bind(var2)(var4, var1);
                        var5 = _closure1_slot14;
                        var4 = _closure1_slot4;
                        var1 = {};
                        var7 = _closure2_slot17;
                        var7 = var7.actions;
                        var1['style'] = var7;
                        var10 = _closure1_slot14;
                        var8 = _closure1_slot4;
                        var7 = {};
                        var11 = _closure2_slot17;
                        var11 = var11.buttonWrapper;
                        var7['style'] = var11;
                        var15 = _closure1_slot14;
                        var11 = 33;
                        var11 = var22[var11];
                        var11 = var21.bind(var6)(var11);
                        var12 = var11.Button;
                        var11 = {'variant': 'secondary', 'size': 'sm'};
                        var17 = 34;
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
                        var16 = var16.OYkgVk;
                        var17 = var17.bind(var20)(var16);
                        var16 = 8;
                        var16 = var18.bind(var19)(var17, var16);
                        var11['text'] = var16;
                        var16 = function onPress() {
                            var3 = _closure1_slot24;
                            var1 = _closure2_slot26;
                            var2 = var1.current;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var11['onPress'] = var16;
                        var11 = var15.bind(var6)(var12, var11);
                        var7['children'] = var11;
                        var7 = var10.bind(var6)(var8, var7);
                        var1['children'] = var7;
                        var3 = var5.bind(var6)(var4, var1);
                        _fun0009_ip = 56; continue _fun0009;
case 51:
                        var4 = var2.push;
                        var1 = {};
                        var5 = _closure1_slot17;
                        var5 = var5.CANCEL;
                        var1['name'] = var5;
                        var12 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var11 = 29;
                        var5 = var20[var11];
                        var6 = undefined;
                        var5 = var12.bind(var6)(var5);
                        var10 = var5.intl;
                        var8 = var10.formatToPlainString;
                        var5 = var20[var11];
                        var5 = var12.bind(var6)(var5);
                        var5 = var5.t;
                        var7 = var5.JFJ8Cg;
                        var5 = {};
                        var18 = _closure1_slot1;
                        var17 = 25;
                        var15 = var20[var17];
                        var16 = var18.bind(var6)(var15);
                        var15 = var16.getName;
                        var19 = _closure2_slot1;
                        var15 = var15.bind(var16)(var19);
                        var5['name'] = var15;
                        var5 = var8.bind(var10)(var7, var5);
                        var1['label'] = var5;
                        var1 = var4.bind(var2)(var1);
                        var5 = _closure1_slot14;
                        var4 = _closure1_slot4;
                        var1 = {};
                        var7 = _closure2_slot17;
                        var7 = var7.actions;
                        var1['style'] = var7;
                        var10 = _closure1_slot14;
                        var7 = 30;
                        var7 = var20[var7];
                        var8 = var18.bind(var6)(var7);
                        var7 = {};
                        var15 = _closure2_slot17;
                        var15 = var15.action;
                        var7['styles'] = var15;
                        var15 = 31;
                        var15 = var20[var15];
                        var15 = var12.bind(var6)(var15);
                        var15 = var15.XLargeIcon;
                        var7['IconComponent'] = var15;
                        var15 = 'neutral';
                        var7['type'] = var15;
                        var15 = function onPress() {
                            var4 = _closure1_slot23;
                            var2 = _closure2_slot26;
                            var3 = var2.current;
                            var2 = _closure2_slot15;
                            var1 = undefined;
                            var2 = var4.bind(var1)(var3, var2);
                            return var1;
                        };
                        var7['onPress'] = var15;
                        var15 = var20[var11];
                        var15 = var12.bind(var6)(var15);
                        var16 = var15.intl;
                        var15 = var16.formatToPlainString;
                        var11 = var20[var11];
                        var11 = var12.bind(var6)(var11);
                        var11 = var11.t;
                        var12 = var11.JFJ8Cg;
                        var11 = {};
                        var17 = var20[var17];
                        var18 = var18.bind(var6)(var17);
                        var17 = var18.getName;
                        var17 = var17.bind(var18)(var19);
                        var11['name'] = var17;
                        var11 = var15.bind(var16)(var12, var11);
                        var7['accessibilityLabel'] = var11;
                        var7 = var10.bind(var6)(var8, var7);
                        var1['children'] = var7;
                        var3 = var5.bind(var6)(var4, var1);
                        _fun0009_ip = 56; continue _fun0009;
case 49:
                        var5 = var2.push;
                        var4 = {};
                        var7 = _closure1_slot17;
                        var1 = var7.DECLINE;
                        var4['name'] = var1;
                        var12 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var11 = 29;
                        var1 = var18[var11];
                        var6 = undefined;
                        var1 = var12.bind(var6)(var1);
                        var19 = var1.intl;
                        var10 = var19.formatToPlainString;
                        var1 = var18[var11];
                        var1 = var12.bind(var6)(var1);
                        var1 = var1.t;
                        var8 = var1.C9Xe6+;
                        var1 = {};
                        var16 = _closure1_slot1;
                        var15 = 25;
                        var17 = var18[var15];
                        var21 = var16.bind(var6)(var17);
                        var20 = var21.getName;
                        var17 = _closure2_slot1;
                        var20 = var20.bind(var21)(var17);
                        var1['name'] = var20;
                        var1 = var10.bind(var19)(var8, var1);
                        var4['label'] = var1;
                        var1 = {};
                        var7 = var7.ACCEPT;
                        var1['name'] = var7;
                        var7 = var18[var11];
                        var7 = var12.bind(var6)(var7);
                        var19 = var7.intl;
                        var10 = var19.formatToPlainString;
                        var7 = var18[var11];
                        var7 = var12.bind(var6)(var7);
                        var7 = var7.t;
                        var8 = var7["6p0yBo"];
                        var7 = {};
                        var20 = var18[var15];
                        var21 = var16.bind(var6)(var20);
                        var20 = var21.getName;
                        var20 = var20.bind(var21)(var17);
                        var7['name'] = var20;
                        var7 = var10.bind(var19)(var8, var7);
                        var1['label'] = var7;
                        var1 = var5.bind(var2)(var4, var1);
                        var5 = _closure1_slot15;
                        var4 = _closure1_slot4;
                        var1 = {};
                        var7 = _closure2_slot17;
                        var7 = var7.actions;
                        var1['style'] = var7;
                        var19 = _closure1_slot14;
                        var8 = 30;
                        var7 = var18[var8];
                        var10 = var16.bind(var6)(var7);
                        var7 = {};
                        var20 = _closure2_slot17;
                        var20 = var20.action;
                        var7['styles'] = var20;
                        var20 = 31;
                        var20 = var18[var20];
                        var20 = var12.bind(var6)(var20);
                        var20 = var20.XLargeIcon;
                        var7['IconComponent'] = var20;
                        var20 = 'neutral';
                        var7['type'] = var20;
                        var20 = function onPress() {
                            var4 = _closure1_slot23;
                            var2 = _closure2_slot26;
                            var3 = var2.current;
                            var2 = _closure2_slot15;
                            var1 = undefined;
                            var2 = var4.bind(var1)(var3, var2);
                            return var1;
                        };
                        var7['onPress'] = var20;
                        var20 = var18[var11];
                        var20 = var12.bind(var6)(var20);
                        var23 = var20.intl;
                        var22 = var23.formatToPlainString;
                        var20 = var18[var11];
                        var20 = var12.bind(var6)(var20);
                        var20 = var20.t;
                        var21 = var20.C9Xe6+;
                        var20 = {};
                        var24 = var18[var15];
                        var25 = var16.bind(var6)(var24);
                        var24 = var25.getName;
                        var24 = var24.bind(var25)(var17);
                        var20['name'] = var24;
                        var20 = var22.bind(var23)(var21, var20);
                        var7['accessibilityLabel'] = var20;
                        var10 = var19.bind(var6)(var10, var7);
                        var7 = new Array(2);
                        var7[0] = var10;
                        var10 = _closure1_slot14;
                        var8 = var18[var8];
                        var9 = var16.bind(var6)(var8);
                        var8 = {};
                        var14 = _closure2_slot17;
                        var14 = var14.action;
                        var8['styles'] = var14;
                        var14 = 32;
                        var14 = var18[var14];
                        var14 = var12.bind(var6)(var14);
                        var14 = var14.CheckmarkLargeIcon;
                        var8['IconComponent'] = var14;
                        var14 = 'positive';
                        var8['type'] = var14;
                        var13 = function onPress() {
                            var4 = _closure1_slot22;
                            var2 = _closure2_slot26;
                            var3 = var2.current;
                            var2 = _closure2_slot15;
                            var1 = undefined;
                            var2 = var4.bind(var1)(var3, var2);
                            return var1;
                        };
                        var8['onPress'] = var13;
                        var13 = var18[var11];
                        var13 = var12.bind(var6)(var13);
                        var14 = var13.intl;
                        var13 = var14.formatToPlainString;
                        var11 = var18[var11];
                        var11 = var12.bind(var6)(var11);
                        var11 = var11.t;
                        var12 = var11["6p0yBo"];
                        var11 = {};
                        var15 = var18[var15];
                        var16 = var16.bind(var6)(var15);
                        var15 = var16.getName;
                        var15 = var15.bind(var16)(var17);
                        var11['name'] = var15;
                        var11 = var13.bind(var14)(var12, var11);
                        var8['accessibilityLabel'] = var11;
                        var8 = var10.bind(var6)(var9, var8);
                        var7[1] = var8;
                        var1['children'] = var7;
                        var3 = var5.bind(var6)(var4, var1);
case 56:
                        var1 = {};
                        var1['accessibilityActions'] = var2;
                        var1['actions'] = var3;
                        return var1;
case 47:
                        var1 = {};
                        var1['accessibilityActions'] = var2;
                        var2 = undefined;
                        var1['actions'] = var2;
                        return var1;
                    }
                };
                var17 = var25.bind(var34)(var15, var17);
                var15 = var17.accessibilityActions;
                var25 = var17.actions;
                _closure2_slot27 = var25;
                var35 = var34.useCallback;
                var17 = new Array(3);
                var17[0] = var33;
                var17[1] = var13;
                var17[2] = var9;
                var13 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var3 = var1.actionName;
                        var2 = _closure1_slot17;
                        var2 = var2.CALL;
                        if(!(var2 !== var3)) { _fun0011_ip = 57; continue _fun0011 }
case 58:
                        var2 = _closure1_slot17;
                        var2 = var2.MESSAGE;
                        if(!(var2 !== var3)) { _fun0011_ip = 38; continue _fun0011 }
case 59:
                        var2 = _closure1_slot17;
                        var2 = var2.ACCEPT;
                        if(!(var2 !== var3)) { _fun0011_ip = 60; continue _fun0011 }
case 61:
                        var2 = _closure1_slot17;
                        var2 = var2.DECLINE;
                        if(!(var2 !== var3)) { _fun0011_ip = 62; continue _fun0011 }
case 63:
                        var2 = _closure1_slot17;
                        var2 = var2.CANCEL;
                        if(!(var2 !== var3)) { _fun0011_ip = 62; continue _fun0011 }
case 64:
                        var2 = _closure1_slot17;
                        var2 = var2.ACCEPT_SUGGESTION;
                        if(!(var2 !== var3)) { _fun0011_ip = 65; continue _fun0011 }
case 4:
                        var2 = _closure1_slot17;
                        var2 = var2.IGNORE_SUGGESTION;
                        if(!(var2 !== var3)) { _fun0011_ip = 66; continue _fun0011 }
case 67:
                        var2 = undefined;
                        return var2;
case 66:
                        var3 = _closure2_slot1;
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 21;
                        var4 = var4[var2];
                        var2 = undefined;
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.ignore;
                        var3 = var3.id;
                        var3 = var4.bind(var5)(var3);
                        return var2;
case 65:
                        var4 = _closure1_slot24;
                        var3 = _closure2_slot1;
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        return var2;
case 62:
                        var5 = _closure1_slot23;
                        var4 = _closure2_slot1;
                        var3 = _closure2_slot15;
                        var2 = undefined;
                        var3 = var5.bind(var2)(var4, var3);
                        return var2;
case 60:
                        var5 = _closure1_slot22;
                        var4 = _closure2_slot1;
                        var3 = _closure2_slot15;
                        var2 = undefined;
                        var3 = var5.bind(var2)(var4, var3);
                        return var2;
case 38:
                        var4 = _closure2_slot7;
                        var2 = null;
                        var4 = var2 == var4;
                        var5 = undefined;
                        var2 = undefined;
                        if(var4) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                        var4 = _closure2_slot7;
                        var3 = _closure2_slot1;
                        var2 = var4.bind(var5)(var3);
case 68:
                        return var2;
case 57:
                        var3 = _closure1_slot21;
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var13 = var35.bind(var34)(var13, var17);
                var35 = var34.useCallback;
                var17 = new Array(3);
                var17[0] = var44;
                var17[1] = var33;
                var17[2] = var10;
                var10 = function() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var3 = _closure2_slot6;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0012_ip = 70; continue _fun0012 }
case 7:
                        var3 = _closure2_slot6;
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        _fun0012_ip = 34; continue _fun0012;
case 70:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 38;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 37;
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
case 34:
                        var1 = undefined;
                        return var1;
                    }
                };
                var17 = var35.bind(var34)(var10, var17);
                var10 = 39;
                var10 = var24[var10];
                var24 = var22.bind(var5)(var10);
                var22 = var24.useNameplate;
                var10 = {};
                var10['user'] = var33;
                var10['guildId'] = var23;
                var10 = var22.bind(var24)(var10);
                var35 = var34.useMemo;
                var24 = new Array(2);
                var24[0] = var30;
                var24[1] = var12;
                var22 = function() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var2 = _closure2_slot9;
                        var1 = null;
                        var2 = var1 != var2;
                        var1 = undefined;
                        if(!var2) { _fun0013_ip = 71; continue _fun0013 }
case 72:
                        var4 = _closure2_slot20;
                        var2 = 'username';
                        var1 = undefined;
                        if(!(var2 === var4)) { _fun0013_ip = 71; continue _fun0013 }
case 73:
                        var2 = {};
                        var3 = _closure2_slot9;
                        var2['color'] = var3;
                        var1 = var2;
case 71:
                        return var1;
                    }
                };
                var35 = var35.bind(var34)(var22, var24);
                var24 = var34.useMemo;
                var44 = var27.avatar;
                var22 = new Array(7);
                var22[0] = var44;
                var22[1] = var33;
                var22[2] = var23;
                var22[3] = var28;
                var22[4] = var40;
                var22[5] = var32;
                var22[6] = var19;
                var19 = function() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var4 = _closure1_slot14;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var8 = 23;
                        var1 = var1[var8];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.Avatar;
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
                        var9 = _closure2_slot23;
                        var7 = null;
                        if(!(var10 !== var9)) { _fun0014_ip = 74; continue _fun0014 }
case 34:
                        var7 = _closure2_slot23;
case 74:
                        var1['status'] = var7;
                        var7 = _closure2_slot21;
                        var1['isMobileOnline'] = var7;
                        var7 = _closure2_slot22;
                        var1['isVROnline'] = var7;
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var6 = var7.bind(var3)(var6);
                        var6 = var6.AvatarSizes;
                        var6 = var6.REFRESH_MEDIUM_32;
                        var1['size'] = var6;
                        var5 = _closure2_slot25;
                        var1['avatarDecoration'] = var5;
                        var5 = true;
                        var1['autoStatusCutout'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    }
                };
                var19 = var24.bind(var34)(var19, var22);
                var24 = var34.useMemo;
                var22 = new Array(5);
                var22[0] = var43;
                var22[1] = var39;
                var46 = var3 == var45;
                var44 = undefined;
                if(var46) { _fun0006_ip = 75; continue _fun0006 }
case 76:
                var44 = var45.name;
case 75:
                var22[2] = var44;
                var22[3] = var21;
                var22[4] = var33;
                var21 = function() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var1 = _closure2_slot14;
                        var4 = undefined;
                        if(!(var4 === var1)) { _fun0015_ip = 77; continue _fun0015 }
case 7:
                        var5 = _closure2_slot0;
                        var3 = _closure1_slot12;
                        var3 = var3.SUGGESTION;
                        if(!(var5 === var3)) { _fun0015_ip = 78; continue _fun0015 }
case 29:
                        var3 = _closure2_slot24;
                        var5 = null;
                        var6 = var5 == var3;
                        var3 = undefined;
                        if(var6) { _fun0015_ip = 79; continue _fun0015 }
case 80:
                        var6 = _closure2_slot24;
                        var3 = var6.name;
case 79:
                        if(!(var5 == var3)) { _fun0015_ip = 81; continue _fun0015 }
case 78:
                        var5 = _closure2_slot8;
                        var3 = null;
                        if(!(var3 == var5)) { _fun0015_ip = 82; continue _fun0015 }
case 33:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 25;
                        var1 = var5[var1];
                        var4 = var3.bind(var4)(var1);
                        var3 = var4.getName;
                        var1 = _closure2_slot1;
                        var1 = var3.bind(var4)(var1);
                        _fun0015_ip = 83; continue _fun0015;
case 82:
                        var1 = _closure2_slot8;
case 83:
                        _fun0015_ip = 84; continue _fun0015;
case 81:
                        var3 = _closure2_slot24;
                        var1 = var3.name;
case 84:
                        _fun0015_ip = 14; continue _fun0015;
case 77:
                        var1 = _closure2_slot14;
case 14:
                        return var1;
                    }
                };
                var34 = var24.bind(var34)(var21, var22);
                var22 = _closure1_slot3;
                var24 = var22.useMemo;
                var21 = new Array(3);
                var21[0] = var43;
                var21[1] = var42;
                var21[2] = var11;
                var11 = function() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var1 = _closure2_slot14;
                        var4 = undefined;
                        if(!(var4 !== var1)) { _fun0016_ip = 85; continue _fun0016 }
case 7:
                        return var4;
case 85:
                        var3 = _closure1_slot15;
                        var2 = _closure1_slot16;
                        var1 = {};
                        var5 = _closure2_slot4;
                        var6 = null;
                        var8 = null;
                        if(!var5) { _fun0016_ip = 13; continue _fun0016 }
case 86:
                        var11 = _closure1_slot14;
                        var9 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var5 = 40;
                        var5 = var14[var5];
                        var5 = var9.bind(var4)(var5);
                        var9 = var5.CrownIcon;
                        var5 = {};
                        var12 = 'xs';
                        var5['size'] = var12;
                        var13 = _closure1_slot1;
                        var12 = 13;
                        var12 = var14[var12];
                        var12 = var13.bind(var4)(var12);
                        var12 = var12.colors;
                        var12 = var12.TEXT_FEEDBACK_WARNING;
                        var5['color'] = var12;
                        var8 = var11.bind(var4)(var9, var5);
case 13:
                        var5 = new Array(2);
                        var5[0] = var8;
                        var7 = _closure2_slot10;
                        var7 = var6 != var7;
                        var6 = null;
                        if(!var7) { _fun0016_ip = 87; continue _fun0016 }
case 88:
                        var9 = _closure1_slot14;
                        var8 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var7 = 41;
                        var7 = var12[var7];
                        var7 = var8.bind(var4)(var7);
                        var8 = var7.BoostGemIcon;
                        var7 = {};
                        var11 = 'xs';
                        var7['size'] = var11;
                        var11 = _closure1_slot1;
                        var10 = 13;
                        var10 = var12[var10];
                        var10 = var11.bind(var4)(var10);
                        var10 = var10.unsafe_rawColors;
                        var10 = var10.GUILD_BOOSTING_PINK;
                        var7['color'] = var10;
                        var6 = var9.bind(var4)(var8, var7);
case 87:
                        var5[1] = var6;
                        var1['children'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    }
                };
                var24 = var24.bind(var22)(var11, var21);
                var21 = var22.useMemo;
                var11 = new Array(7);
                var11[0] = var41;
                var11[1] = var33;
                var11[2] = var39;
                var11[3] = var38;
                var11[4] = var37;
                var11[5] = var23;
                var11[6] = var9;
                var9 = function() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var1 = _closure2_slot13;
                        var5 = undefined;
                        if(!(var5 === var1)) { _fun0017_ip = 89; continue _fun0017 }
case 7:
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
                        _fun0017_ip = 90; continue _fun0017;
case 89:
                        var1 = _closure2_slot13;
case 90:
                        return var1;
                    }
                };
                var9 = var21.bind(var22)(var9, var11);
                var21 = var22.useMemo;
                var11 = new Array(4);
                var11[0] = var31;
                var11[1] = var20;
                var11[2] = var8;
                var11[3] = var25;
                var6 = function() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var3 = _closure2_slot12;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0018_ip = 50; continue _fun0018 }
case 7:
                        var3 = _closure2_slot3;
                        var1 = null;
                        if(var3) { _fun0018_ip = 59; continue _fun0018 }
case 91:
                        var5 = _closure2_slot2;
                        var3 = _closure1_slot11;
                        var4 = var3.ACTIONS;
                        var3 = undefined;
                        if(!(var5 === var4)) { _fun0018_ip = 80; continue _fun0018 }
case 71:
                        var3 = _closure2_slot27;
case 80:
                        var1 = var3;
case 59:
                        _fun0018_ip = 79; continue _fun0018;
case 50:
                        var1 = _closure2_slot12;
case 79:
                        return var1;
                    }
                };
                var11 = var21.bind(var22)(var6, var11);
                var21 = _closure1_slot1;
                var25 = _closure1_slot2;
                var6 = 42;
                var6 = var25[var6];
                var21 = var21.bind(var5)(var6);
                var6 = var33.id;
                var39 = var21.bind(var5)(var23, var6);
                var22 = _closure1_slot0;
                var21 = 43;
                var21 = var25[var21];
                var22 = var22.bind(var5)(var21);
                var21 = var22.useProcessColorStringsArray;
                var37 = var21.bind(var22)(var29);
                if(!var39) { _fun0006_ip = 92; continue _fun0006 }
case 93:
                var6 = 'username';
                var39 = var6 === var12;
case 92:
                if(!var39) { _fun0006_ip = 94; continue _fun0006 }
case 95:
                var21 = var37.length;
                var6 = 1;
                var39 = var21 > var6;
case 94:
                var21 = _closure1_slot1;
                var22 = _closure1_slot2;
                var6 = 44;
                var6 = var22[var6];
                var21 = var21.bind(var5)(var6);
                var6 = {};
                var25 = var33.id;
                var6['userId'] = var25;
                var6['guildId'] = var23;
                var25 = var21.bind(var5)(var6);
                var21 = _closure1_slot0;
                var6 = 45;
                var6 = var22[var6];
                var38 = var21.bind(var5)(var6);
                var31 = var38.useDisplayNameStylesFont;
                var6 = {};
                var6['displayNameStyles'] = var25;
                var38 = var31.bind(var38)(var6);
                var31 = {'lineClamp': 1, 'variant': 'text-md/semibold'};
                var6 = 25;
                var6 = var22[var6];
                var22 = var21.bind(var5)(var6);
                var21 = var22.humanizeStatus;
                var6 = {};
                var6['isMobile'] = var40;
                var6['isVR'] = var32;
                var28 = var21.bind(var22)(var28, var6);
                var21 = 'string';
                var6 = typeof var34;
                var32 = undefined;
                if(!(var21 === var6)) { _fun0006_ip = 96; continue _fun0006 }
case 97:
                var6 = var3 != var28;
                var32 = undefined;
                if(!var6) { _fun0006_ip = 96; continue _fun0006 }
case 98:
                var6 = global;
                var6 = var6.HermesInternal;
                var22 = var6.concat;
                var21 = '';
                var6 = ', ';
                var32 = var22.bind(var21)(var34, var6, var28);
case 96:
                var22 = _closure1_slot15;
                var21 = _closure1_slot4;
                var6 = {};
                var28 = var27.usernameLabelContainer;
                var6['style'] = var28;
                if(!var26) { _fun0006_ip = 99; continue _fun0006 }
case 100:
                if(!(var3 != var25)) { _fun0006_ip = 99; continue _fun0006 }
case 101:
                if(!(var3 != var23)) { _fun0006_ip = 102; continue _fun0006 }
case 99:
                var26 = _closure1_slot14;
                var25 = _closure1_slot0;
                var28 = _closure1_slot2;
                var23 = 24;
                var23 = var28[var23];
                var23 = var25.bind(var5)(var23);
                var25 = var23.Text;
                var23 = {};
                var28 = undefined;
                if(!var39) { _fun0006_ip = 103; continue _fun0006 }
case 104:
                var28 = var37;
case 103:
                var23['gradientColors'] = var28;
                var28 = 'mobile-text-heading-primary';
                var23['color'] = var28;
                var37 = var27.usernameLabel;
                var28 = new Array(4);
                var28[0] = var37;
                var37 = var27.usernameLabelWithLineHeight;
                var28[1] = var37;
                var28[2] = var35;
                if(!var36) { _fun0006_ip = 105; continue _fun0006 }
case 106:
                var36 = var3 != var38;
case 105:
                if(!var36) { _fun0006_ip = 107; continue _fun0006 }
case 108:
                var37 = {};
                var37['fontFamily'] = var38;
                var36 = var37;
case 107:
                var28[3] = var36;
                var23['style'] = var28;
                var23['accessibilityLabel'] = var32;
                var49 = var23;
                var48 = var31;
                var28 = copyDataProperties(var49, var48);
                var28 = 'children';
                var23[27] = var34;
                var25 = var26.bind(var5)(var25, var23);
                _fun0006_ip = 109; continue _fun0006;
case 102:
                var28 = _closure1_slot14;
                var26 = _closure1_slot1;
                var36 = _closure1_slot2;
                var23 = 46;
                var23 = var36[var23];
                var26 = var26.bind(var5)(var23);
                var23 = {};
                var36 = var33.id;
                var23['userId'] = var36;
                var23['userName'] = var34;
                var36 = var27.usernameLabel;
                var34 = new Array(2);
                var34[0] = var36;
                var34[1] = var35;
                var23['style'] = var34;
                var34 = 'mobile-text-heading-primary';
                var23['defaultColor'] = var34;
                var23['accessibilityLabel'] = var32;
                var49 = var23;
                var48 = var31;
                var31 = copyDataProperties(var49, var48);
                var25 = var28.bind(var5)(var26, var23);
case 109:
                var23 = new Array(3);
                var23[0] = var25;
                var23[1] = var24;
                var24 = var33.bot;
                var28 = _closure1_slot14;
                var26 = _closure1_slot1;
                var34 = _closure1_slot2;
                if(var24) { _fun0006_ip = 110; continue _fun0006 }
case 111:
                var24 = 49;
                var24 = var34[var24];
                var25 = var26.bind(var5)(var24);
                var24 = {};
                var31 = var33.id;
                var24['userId'] = var31;
                var24 = var28.bind(var5)(var25, var24);
                _fun0006_ip = 112; continue _fun0006;
case 110:
                var25 = 47;
                var25 = var34[var25];
                var26 = var26.bind(var5)(var25);
                var25 = {};
                var31 = var33.isVerifiedBot;
                var31 = var31.bind(var33)();
                var25['verified'] = var31;
                var32 = _closure1_slot0;
                var31 = 48;
                var31 = var34[var31];
                var32 = var32.bind(var5)(var31);
                var31 = var32.getBotTagTypeFromUser;
                var31 = var31.bind(var32)(var33);
                var25['type'] = var31;
                var24 = var28.bind(var5)(var26, var25);
case 112:
                var23[2] = var24;
                var6['children'] = var23;
                var24 = var22.bind(var5)(var21, var6);
                var6 = 'dot';
                var6 = var6 !== var12;
                if(var6) { _fun0006_ip = 113; continue _fun0006 }
case 114:
                var12 = var3 == var30;
                if(!var12) { _fun0006_ip = 115; continue _fun0006 }
case 116:
                var12 = var3 == var29;
case 115:
                var6 = var12;
case 113:
                var12 = var24;
                if(var6) { _fun0006_ip = 117; continue _fun0006 }
case 118:
                var22 = _closure1_slot15;
                var21 = _closure1_slot4;
                var6 = {};
                var23 = var27.labelContainer;
                var6['style'] = var23;
                var26 = _closure1_slot14;
                var25 = _closure1_slot0;
                var28 = _closure1_slot2;
                var23 = 23;
                var23 = var28[var23];
                var23 = var25.bind(var5)(var23);
                var25 = var23.RoleDot;
                var23 = {};
                var31 = var3 != var30;
                var28 = null;
                if(!var31) { _fun0006_ip = 119; continue _fun0006 }
case 120:
                var28 = var30;
case 119:
                var23['color'] = var28;
                var30 = var3 != var29;
                var28 = null;
                if(!var30) { _fun0006_ip = 121; continue _fun0006 }
case 122:
                var28 = var29;
case 121:
                var23['colors'] = var28;
                var27 = var27.roleDot;
                var23['containerStyles'] = var27;
                var25 = var26.bind(var5)(var25, var23);
                var23 = new Array(2);
                var23[0] = var25;
                var23[1] = var24;
                var6['children'] = var23;
                var12 = var22.bind(var5)(var21, var6);
case 117:
                var6 = {};
                var49 = var6;
                var48 = var16;
                var16 = copyDataProperties(var49, var48);
                var16 = 'disabled';
                var6[15] = var20;
                var16 = 'icon';
                var6[15] = var19;
                var16 = 'onPress';
                var6[15] = var18;
                var16 = 'onLongPress';
                var6[15] = var17;
                if(!(var3 != var14)) { _fun0006_ip = 123; continue _fun0006 }
case 124:
                var15 = var14;
case 123:
                var14 = 'accessibilityActions';
                var6[13] = var15;
                if(!(var3 != var4)) { _fun0006_ip = 125; continue _fun0006 }
case 126:
                var13 = var4;
case 125:
                var4 = 'onAccessibilityAction';
                var6[3] = var13;
                var4 = 'label';
                var6[3] = var12;
                var4 = 'subLabel';
                var6[3] = var9;
                var9 = '100%';
                var4 = 'height';
                var6[3] = var9;
                var4 = _closure1_slot11;
                var4 = var4.TOGGLE;
                if(!(var8 !== var4)) { _fun0006_ip = 127; continue _fun0006 }
case 128:
                if(!(var3 != var10)) { _fun0006_ip = 129; continue _fun0006 }
case 130:
                if(var1) { _fun0006_ip = 131; continue _fun0006 }
case 129:
                var4 = _closure1_slot14;
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 52;
                var1 = var8[var1];
                var1 = var3.bind(var5)(var1);
                var3 = var1.TableRow;
                var1 = {};
                var49 = var1;
                var48 = var6;
                var8 = copyDataProperties(var49, var48);
                var8 = 'trailing';
                var1[7] = var11;
                var1 = var4.bind(var5)(var3, var1);
                _fun0006_ip = 132; continue _fun0006;
case 131:
                var8 = _closure1_slot14;
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 51;
                var3 = var9[var3];
                var3 = var4.bind(var5)(var3);
                var4 = var3.UserNameplateRow;
                var3 = {};
                var49 = var3;
                var48 = var6;
                var9 = copyDataProperties(var49, var48);
                var9 = 'trailing';
                var3[8] = var11;
                var9 = 'nameplate';
                var3[8] = var10;
                var1 = var8.bind(var5)(var4, var3);
case 132:
                _fun0006_ip = 133; continue _fun0006;
case 127:
                var4 = _closure1_slot14;
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 50;
                var2 = var8[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.TableCheckboxRow;
                var2 = {};
                var49 = var2;
                var48 = var6;
                var6 = copyDataProperties(var49, var48);
                var6 = 'checked';
                var2[5] = var7;
                var1 = var4.bind(var5)(var3, var2);
case 133:
                return var1;
            }
        };
        var2 = var4.bind(var7)(var2);
        var4 = 53;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/main_tabs_v2/native/shared_components/user_list/UserRow.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();
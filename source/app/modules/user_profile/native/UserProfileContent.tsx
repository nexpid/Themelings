// app/modules/user_profile/native/UserProfileContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var1 = function CustomStatusBubble(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.customStatusActivity;
            var9 = var1.user;
            var _closure2_slot0 = var9;
            var14 = var1.guildId;
            var _closure2_slot1 = var14;
            var15 = var1.channelId;
            var _closure2_slot2 = var15;
            var11 = var1.hasCustomProfileTheme;
            var10 = var1.isPreviewingChanges;
            var13 = var1.bubbleRef;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 15;
            var3 = var6[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var7 = var3.bind(var4)();
            var5 = _closure1_slot0;
            var3 = 16;
            var3 = var6[var3];
            var16 = var5.bind(var4)(var3);
            var8 = var16.useStateFromStores;
            var3 = _closure1_slot10;
            var6 = new Array(1);
            var6[0] = var3;
            var5 = new Array(1);
            var5[0] = var9;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot10;
                    var1 = var2.getCurrentUser;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = var1.id;
case 2:
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var8 = var8.bind(var16)(var6, var3, var5);
            var6 = _closure1_slot4;
            var5 = var6.useCallback;
            var3 = new Array(3);
            var3[0] = var15;
            var3[1] = var14;
            var3[2] = var9;
            var2 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var4 = var2[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var4);
                var6 = var7.openLazy;
                var4 = _closure1_slot0;
                var3 = 19;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 18;
                var3 = var2[var3];
                var2 = var2.paths;
                var11 = var4.bind(var1)(var3, var2);
                var4 = {};
                var3 = _closure2_slot0;
                var4['user'] = var3;
                var3 = _closure2_slot1;
                var4['guildId'] = var3;
                var2 = _closure2_slot2;
                var4['channelId'] = var2;
                var10 = 'UserProfileCustomStatusActionSheet';
                var8 = 'stack';
                var12 = var7;
                var9 = var4;
                var2 = var12[var6](var11, var10, var9, var8, var7);
                return var1;
            };
            var9 = var5.bind(var6)(var2, var3);
            var6 = _closure1_slot4;
            var5 = var6.useRef;
            var3 = null;
            var14 = var3 == var12;
            var2 = null;
            if(!var14) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = null;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var2 = null;
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 20;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var2 = var14.bind(var4)();
case 4:
            var5 = var5.bind(var6)(var2);
            var2 = var5.current;
            var2 = var3 != var2;
            var6 = undefined;
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var5.current;
            var2 = var3.label;
            var6 = var2.bind(var3)();
case 8:
            var3 = _closure1_slot19;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 21;
            var1 = var14[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['ref'] = var13;
            var1['customStatusActivity'] = var12;
            var1['hasCustomProfileTheme'] = var11;
            if(!var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = !var10;
case 10:
            var1['editEnabled'] = var8;
            var8 = undefined;
            if(var10) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = var9;
case 12:
            var1['onPressTruncatedStatus'] = var8;
            var9 = var7.customStatusBubble;
            var8 = new Array(2);
            var8[0] = var9;
            var9 = var7.customStatusBubbleInset;
            var8[1] = var9;
            var1['style'] = var8;
            var7 = var7.emojiOnlyCustomStatusBubble;
            var1['emojiOnlyStyle'] = var7;
            var1['placeholderText'] = var6;
            var5 = var5.current;
            var1['prompt'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function RemoveFriendIconButton(arg1) {
        var1 = arg1;
        var3 = var1.user;
        var _closure2_slot0 = var3;
        var4 = undefined;
        var _closure2_slot1 = var4;
        var _closure2_slot2 = var4;
        var1 = function handleConfirm() {
            var3 = _closure2_slot1;
            var2 = {};
            var1 = 'REMOVE_FRIEND';
            var2['action'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 24;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.removeFriend;
            var2 = _closure2_slot0;
            var3 = var2.id;
            var2 = {};
            var6 = _closure2_slot2;
            var2['location'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var _closure2_slot4 = var1;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 22;
        var1 = var10[var1];
        var2 = var9.bind(var4)(var1);
        var1 = var2.useUserProfileAnalyticsContext;
        var1 = var1.bind(var2)();
        var1 = var1.trackUserProfileAction;
        _closure2_slot1 = var1;
        var2 = _closure1_slot1;
        var1 = 23;
        var1 = var10[var1];
        var1 = var2.bind(var4)(var1);
        var1 = var1.bind(var4)();
        var1 = var1.newestAnalyticsLocation;
        _closure2_slot2 = var1;
        var1 = 25;
        var1 = var10[var1];
        var2 = var2.bind(var4)(var1);
        var1 = var2.useName;
        var1 = var1.bind(var2)(var3);
        var _closure2_slot3 = var1;
        var3 = _closure1_slot19;
        var1 = 26;
        var1 = var10[var1];
        var1 = var9.bind(var4)(var1);
        var2 = var1.IconButton;
        var1 = {'size': 'sm', 'variant': 'secondary-overlay'};
        var8 = _closure1_slot19;
        var6 = 27;
        var6 = var10[var6];
        var6 = var9.bind(var4)(var6);
        var7 = var6.UserCheckIcon;
        var6 = {'size': 'sm', 'color': 'white'};
        var6 = var8.bind(var4)(var7, var6);
        var1['icon'] = var6;
        var6 = 28;
        var7 = var10[var6];
        var7 = var9.bind(var4)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6.cvSt1J;
        var6 = var7.bind(var8)(var6);
        var1['accessibilityLabel'] = var6;
        var5 = function onPress() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 29;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.confirmRemoveFriend;
            var2 = {};
            var6 = _closure2_slot3;
            var2['userDisplayName'] = var6;
            var5 = _closure2_slot4;
            var2['onConfirm'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['onPress'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function RemoveGameFriendIconButton(arg1) {
        var2 = arg1;
        var5 = var2.user;
        var _closure2_slot0 = var5;
        var7 = var2.guildId;
        var _closure2_slot1 = var7;
        var8 = var2.channelId;
        var _closure2_slot2 = var8;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(3);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var5;
        var1 = function() {
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 17;
            var4 = var2[var1];
            var1 = undefined;
            var7 = var5.bind(var1)(var4);
            var6 = var7.openLazy;
            var4 = _closure1_slot0;
            var3 = 19;
            var3 = var2[var3];
            var4 = var4.bind(var1)(var3);
            var3 = 30;
            var3 = var2[var3];
            var2 = var2.paths;
            var11 = var4.bind(var1)(var3, var2);
            var4 = {};
            var3 = _closure2_slot0;
            var4['user'] = var3;
            var3 = _closure2_slot1;
            var4['guildId'] = var3;
            var2 = _closure2_slot2;
            var4['channelId'] = var2;
            var10 = 'UserProfileGameFriendActionSheet';
            var8 = 'stack';
            var12 = var7;
            var9 = var4;
            var2 = var12[var6](var11, var10, var9, var8, var7);
            return var1;
        };
        var5 = var3.bind(var4)(var1, var2);
        var4 = _closure1_slot19;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 26;
        var1 = var10[var1];
        var3 = undefined;
        var1 = var9.bind(var3)(var1);
        var2 = var1.IconButton;
        var1 = {'size': 'sm', 'variant': 'secondary-overlay'};
        var8 = _closure1_slot19;
        var6 = 31;
        var6 = var10[var6];
        var6 = var9.bind(var3)(var6);
        var7 = var6.UserPlatformIcon;
        var6 = {'size': 'sm', 'color': 'white'};
        var6 = var8.bind(var3)(var7, var6);
        var1['icon'] = var6;
        var6 = 28;
        var7 = var10[var6];
        var7 = var9.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.cvSt1J;
        var6 = var7.bind(var8)(var6);
        var1['accessibilityLabel'] = var6;
        var1['onPress'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot24 = var1;
    var2 = function PrimaryInfo(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var18 = var1.user;
            var19 = var1.channelId;
            var17 = var1.displayProfile;
            var2 = var1.displayNameOverride;
            var15 = var1.pronounsOverride;
            var13 = var1.badgesOverride;
            var5 = var1.pendingDisplayNameStyles;
            var11 = var1.style;
            var10 = var1.badgeContainerBackground;
            var6 = var1.isPreviewingChanges;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var9 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 25;
            var1 = var14[var1];
            var3 = var9.bind(var4)(var1);
            var1 = var3.useUserTag;
            var1 = var1.bind(var3)(var18);
            var _closure2_slot0 = var1;
            var3 = 32;
            var3 = var14[var3];
            var3 = var9.bind(var4)(var3);
            var12 = var3.bind(var4)(var17);
            var3 = 33;
            var3 = var14[var3];
            var16 = var9.bind(var4)(var3);
            var9 = var16.useName;
            var14 = null;
            var20 = var14 == var17;
            var3 = undefined;
            if(var20) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var3 = var17.guildId;
case 14:
            var19 = var9.bind(var16)(var3, var19, var18);
            var16 = var19;
            if(!(var14 != var2)) { _fun0003_ip = 5; continue _fun0003 }
case 16:
            var3 = var2.trim;
            var3 = var3.bind(var2)();
            var9 = var3.length;
            var3 = 0;
            var16 = var19;
            if(!(var9 > var3)) { _fun0003_ip = 5; continue _fun0003 }
case 17:
            var16 = var2;
case 5:
            var3 = _closure1_slot0;
            var19 = _closure1_slot2;
            var2 = 22;
            var2 = var19[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useUserProfileAnalyticsContext;
            var2 = var2.bind(var3)();
            var20 = var2.trackUserProfileAction;
            _closure2_slot1 = var20;
            var9 = _closure1_slot4;
            var3 = var9.useCallback;
            var2 = new Array(2);
            var2[0] = var20;
            var2[1] = var1;
            var1 = function() {
                var4 = _closure2_slot1;
                var3 = {};
                var1 = 'COPY_USERNAME';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 34;
                var5 = var4[var5];
                var6 = var3.bind(var1)(var5);
                var5 = var6.copy;
                var2 = _closure2_slot0;
                var2 = var5.bind(var6)(var2);
                var2 = 35;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentUsernameCopied;
                var2 = var2.bind(var3)();
                return var1;
            };
            var9 = var3.bind(var9)(var1, var2);
            var3 = _closure1_slot19;
            var2 = _closure1_slot1;
            var1 = 36;
            var1 = var19[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['user'] = var18;
            var19 = var14 == var17;
            var18 = undefined;
            if(var19) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var18 = var17.guildId;
case 18:
            var1['guildId'] = var18;
            var1['displayName'] = var16;
            if(!(var14 == var15)) { _fun0003_ip = 20; continue _fun0003 }
case 12:
            var18 = var14 == var17;
            var16 = undefined;
            if(var18) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var16 = var17.pronouns;
case 21:
            var15 = var16;
case 20:
            var1['pronouns'] = var15;
            if(!(var14 != var13)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var12 = var13;
case 23:
            var1['badges'] = var12;
            var1['style'] = var11;
            var1['badgeContainerBackground'] = var10;
            var10 = undefined;
            if(var6) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var10 = var9;
case 25:
            var1['onPressDisplayName'] = var10;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 28;
            var10 = var13[var7];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var7 = var13[var7];
            var7 = var12.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.y5MwJy;
            var7 = var10.bind(var11)(var7);
            var1['displayNameAccessibilityHint'] = var7;
            var7 = undefined;
            if(var6) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var7 = var9;
case 27:
            var1['onPressUserTag'] = var7;
            var7 = undefined;
            if(var6) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var7 = function() {
                var3 = _closure2_slot1;
                var2 = {};
                var1 = 'PRESS_PRONOUNS';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 35;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentUserPronouns;
                var2 = var2.bind(var3)();
                return var1;
            };
case 29:
            var1['onPressPronouns'] = var7;
            var6 = !var6;
            var1['showBadgeToastOnPress'] = var6;
            var1['pendingDisplayNameStyles'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot25 = var2;
    var1 = function EditSection(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var1 = var1.guildId;
            var _closure2_slot0 = var1;
            var20 = _closure1_slot1;
            var19 = _closure1_slot2;
            var1 = 15;
            var1 = var19[var1];
            var4 = undefined;
            var1 = var20.bind(var4)(var1);
            var5 = var1.bind(var4)();
            var9 = _closure1_slot0;
            var1 = 22;
            var1 = var19[var1];
            var2 = var9.bind(var4)(var1);
            var1 = var2.useUserProfileAnalyticsContext;
            var1 = var1.bind(var2)();
            var1 = var1.trackUserProfileAction;
            var _closure2_slot1 = var1;
            var1 = 16;
            var1 = var19[var1];
            var6 = var9.bind(var4)(var1);
            var3 = var6.useStateFromStores;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var3.bind(var6)(var2, var1);
            var1 = 37;
            var2 = var19[var1];
            var2 = var20.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var _closure2_slot2 = var2;
            var1 = var19[var1];
            var2 = var20.bind(var4)(var1);
            var1 = {};
            var1['guild'] = var7;
            var1 = var2.bind(var4)(var1);
            var _closure2_slot3 = var1;
            var3 = _closure1_slot19;
            var1 = 38;
            var1 = var19[var1];
            var2 = var20.bind(var4)(var1);
            var1 = {};
            var5 = var5.primaryButtons;
            var1['style'] = var5;
            var5 = _closure1_slot17;
            var1['maxWidth'] = var5;
            var14 = _closure1_slot19;
            var6 = 39;
            var5 = var19[var6];
            var5 = var9.bind(var4)(var5);
            var13 = var5.Button;
            var8 = {};
            var12 = 'primary';
            var8['variant'] = var12;
            var15 = _closure1_slot19;
            var11 = 40;
            var5 = var19[var11];
            var5 = var9.bind(var4)(var5);
            var9 = var5.PencilIcon;
            var5 = {};
            var18 = 'sm';
            var5['size'] = var18;
            var16 = 41;
            var19 = var19[var16];
            var19 = var20.bind(var4)(var19);
            var19 = var19.colors;
            var19 = var19.WHITE;
            var5['color'] = var19;
            var5 = var15.bind(var4)(var9, var5);
            var8['icon'] = var5;
            var5 = null;
            if(!(var5 == var7)) { _fun0004_ip = 31; continue _fun0004 }
case 11:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var9 = 28;
            var15 = var21[var9];
            var15 = var20.bind(var4)(var15);
            var19 = var15.intl;
            var15 = var19.string;
            var9 = var21[var9];
            var9 = var20.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.s5vZlQ;
            var9 = var15.bind(var19)(var9);
            _fun0004_ip = 32; continue _fun0004;
case 31:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 28;
            var19 = var22[var15];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var15 = var22[var15];
            var15 = var21.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.HmFaFB;
            var9 = var19.bind(var20)(var15);
case 32:
            var8['text'] = var9;
            var9 = function onPress() {
                var4 = _closure2_slot1;
                var3 = {};
                var1 = 'EDIT_PROFILE';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 17;
                var3 = var5[var3];
                var6 = var4.bind(var1)(var3);
                var3 = var6.hideActionSheet;
                var3 = var3.bind(var6)();
                var3 = 42;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var3 = var3.bind(var1)();
                var2 = _closure2_slot2;
                var2 = var2.bind(var1)();
                return var1;
            };
            var8['onPress'] = var9;
            var9 = true;
            var8['grow'] = var9;
            var8 = var14.bind(var4)(var13, var8);
            var1['primaryButton'] = var8;
            var7 = var5 != var7;
            var5 = undefined;
            if(!var7) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var8 = _closure1_slot19;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = var15[var6];
            var6 = var14.bind(var4)(var6);
            var7 = var6.Button;
            var6 = {};
            var6['variant'] = var12;
            var13 = _closure1_slot19;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var12 = var11.PencilIcon;
            var11 = {};
            var11['size'] = var18;
            var17 = _closure1_slot1;
            var16 = var15[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.colors;
            var16 = var16.WHITE;
            var11['color'] = var16;
            var11 = var13.bind(var4)(var12, var11);
            var6['icon'] = var11;
            var11 = 28;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.PKQB/H;
            var11 = var12.bind(var13)(var11);
            var6['text'] = var11;
            var10 = function onPress() {
                var4 = _closure2_slot1;
                var3 = {};
                var1 = 'EDIT_GUILD_PROFILE';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 17;
                var3 = var5[var3];
                var6 = var4.bind(var1)(var3);
                var3 = var6.hideActionSheet;
                var3 = var3.bind(var6)();
                var3 = 42;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var3 = var3.bind(var1)();
                var2 = _closure2_slot3;
                var2 = var2.bind(var1)();
                return var1;
            };
            var6['onPress'] = var10;
            var6['grow'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 33:
            var1['secondaryButton'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function UserProfileWidgetsBoardContainer(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var11 = var1.userId;
            var10 = var1.isVisible;
            var7 = var1.isCurrentUser;
            var2 = var1.containerBackground;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 15;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var5 = var1.bind(var4)();
            var1 = var5.card;
            var9 = new Array(2);
            var9[0] = var1;
            var1 = {};
            var1['backgroundColor'] = var2;
            var9[1] = var1;
            var3 = _closure1_slot20;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var5.profileContent;
            var1['style'] = var5;
            if(!var7) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var12 = _closure1_slot19;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 43;
            var5 = var13[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var7 = var12.bind(var4)(var8, var5);
case 35:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot19;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 44;
            var6 = var12[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['userId'] = var11;
            var6['isVisible'] = var10;
            var6['cardStyle'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.ScrollView;
    var _closure1_slot5 = var10;
    var5 = var5.View;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.UserProfileSections;
    var _closure1_slot13 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.PROFILE_CONTENT_BOTTOM_PADDING;
    var _closure1_slot14 = var9;
    var5 = var5.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
    var _closure1_slot15 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.RelationshipTypes;
    var _closure1_slot16 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot17 = var5;
    var5 = 13;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ContentDismissActionType;
    var _closure1_slot18 = var5;
    var5 = 14;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot19 = var9;
    var9 = var5.jsxs;
    var _closure1_slot20 = var9;
    var5 = var5.Fragment;
    var _closure1_slot21 = var5;
    var5 = var8.memo;
    var4 = function UserProfileContent(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var46 = var1.user;
            var _closure2_slot0 = var46;
            var57 = var1.channel;
            var _closure2_slot1 = var57;
            var53 = var1.displayProfile;
            var _closure2_slot2 = var53;
            var54 = var1.showUserProfileActionSheet;
            var _closure2_slot3 = var54;
            var45 = var1.disableCalls;
            var42 = var1.disableMessage;
            var18 = var1.disableStatus;
            var37 = var1.isPreviewingChanges;
            var _closure2_slot4 = var37;
            var41 = var1.location;
            var40 = var1.navigateToPremium;
            var _closure2_slot5 = var40;
            var33 = var1.navigateToShop;
            var _closure2_slot6 = var33;
            var34 = var1.initialSection;
            var6 = var1.scrollPosition;
            var5 = undefined;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var _closure2_slot16 = var5;
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
            var _closure2_slot28 = var5;
            var _closure2_slot29 = var5;
            var _closure2_slot30 = var5;
            var _closure2_slot31 = var5;
            var _closure2_slot32 = var5;
            var _closure2_slot33 = var5;
            var _closure2_slot34 = var5;
            var _closure2_slot35 = var5;
            var _closure2_slot36 = var5;
            var _closure2_slot37 = var5;
            var _closure2_slot38 = var5;
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 15;
            var2 = var1[var2];
            var2 = var3.bind(var5)(var2);
            var31 = var2.bind(var5)();
            var _closure2_slot7 = var31;
            var2 = 45;
            var2 = var1[var2];
            var4 = var3.bind(var5)(var2);
            var2 = _closure1_slot17;
            var63 = var4.bind(var5)(var2);
            var2 = 46;
            var2 = var1[var2];
            var4 = var3.bind(var5)(var2);
            var2 = {};
            var2['scrollPosition'] = var6;
            var2['bannerHeight'] = var63;
            var2 = var4.bind(var5)(var2);
            var61 = var2.bannerAnimatedStyle;
            var25 = var2.bannerImageAnimatedStyle;
            var10 = var2.contentAnimatedStyle;
            var11 = var2.blurAnimatedProps;
            var9 = var2.showBlur;
            var2 = 47;
            var2 = var1[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var24 = var2.bottom;
            var3 = _closure1_slot0;
            var2 = 22;
            var2 = var1[var2];
            var4 = var3.bind(var5)(var2);
            var2 = var4.useUserProfileAnalyticsContext;
            var2 = var2.bind(var4)();
            var7 = var2.trackUserProfileAction;
            var _closure2_slot8 = var7;
            var2 = 16;
            var1 = var1[var2];
            var6 = var3.bind(var5)(var1);
            var4 = var6.useStateFromStores;
            var1 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var30 = var4.bind(var6)(var3, var1);
            var _closure2_slot9 = var30;
            var1 = null;
            var3 = var1 == var30;
            var4 = undefined;
            if(var3) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var4 = var30.id;
case 37:
            var3 = var46.id;
            var20 = var4 === var3;
            _closure2_slot10 = var20;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = var6[var2];
            var13 = var4.bind(var5)(var3);
            var12 = var13.useStateFromStoresObject;
            var3 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var1 = {};
                var4 = _closure1_slot9;
                var5 = var4.getRelationshipType;
                var2 = _closure2_slot0;
                var3 = var2.id;
                var3 = var5.bind(var4)(var3);
                var1['relationshipType'] = var3;
                var3 = var4.getOriginApplicationId;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['originApplicationId'] = var2;
                return var1;
            };
            var3 = var12.bind(var13)(var8, var3);
            var48 = var3.relationshipType;
            var55 = var3.originApplicationId;
            var3 = 48;
            var3 = var6[var3];
            var12 = var4.bind(var5)(var3);
            var8 = var12.useIncomingGameRelationshipsForUser;
            var3 = var46.id;
            var47 = var8.bind(var12)(var3);
            var3 = 49;
            var3 = var6[var3];
            var12 = var4.bind(var5)(var3);
            var8 = var12.useIsGameFriends;
            var3 = var46.id;
            var62 = var8.bind(var12)(var3);
            var3 = 50;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.useUserProfileGameFriendApplicationIds;
            var3 = {};
            var8 = var46.id;
            var3['userId'] = var8;
            var72 = var4.bind(var6)(var3);
            _closure2_slot11 = var72;
            if(!(var1 == var53)) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var3 = var1 == var57;
            var49 = undefined;
            if(var3) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var49 = var57.guild_id;
case 41:
            _fun0006_ip = 43; continue _fun0006;
case 39:
            var4 = var53.guildId;
            var6 = var1 != var4;
            var3 = undefined;
            if(!var6) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var3 = var4;
case 44:
            var49 = var3;
case 43:
            _closure2_slot12 = var49;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 33;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.useName;
            var8 = var1 == var57;
            var3 = undefined;
            if(var8) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var3 = var57.id;
case 46:
            var71 = var4.bind(var6)(var49, var3, var46);
            _closure2_slot13 = var71;
            var8 = _closure1_slot4;
            var6 = var8.useMemo;
            var4 = new Array(2);
            var4[0] = var49;
            var4[1] = var46;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot12;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                    var1 = _closure2_slot0;
                    if(!(var2 == var1)) { _fun0007_ip = 50; continue _fun0007 }
case 48:
                    var1 = {};
                    _fun0007_ip = 51; continue _fun0007;
case 50:
                    var2 = {};
                    var4 = _closure2_slot12;
                    var3 = _closure2_slot0;
                    var5 = var3.id;
                    var3 = new Array(1);
                    var3[0] = var5;
                    var2[3] = var3;
                    var1 = var2;
case 51:
                    return var1;
                }
            };
            var12 = var6.bind(var8)(var3, var4);
            var13 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 51;
            var3 = var6[var3];
            var4 = var13.bind(var5)(var3);
            var3 = var4.useSubscribeGuildMembers;
            var8 = 'UserProfileContent';
            var3 = var3.bind(var4)(var12, var8);
            var4 = _closure1_slot1;
            var3 = 52;
            var3 = var6[var3];
            var12 = var4.bind(var5)(var3);
            var3 = var46.id;
            var22 = var12.bind(var5)(var3);
            var3 = var6[var2];
            var15 = var13.bind(var5)(var3);
            var14 = var15.useStateFromStoresObject;
            var3 = _closure1_slot11;
            var12 = new Array(1);
            var12[0] = var3;
            var3 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getPendingChanges;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var14.bind(var15)(var12, var3);
            var67 = var3.pendingBanner;
            var16 = var3.pendingAvatar;
            var38 = var3.pendingAvatarDecoration;
            var60 = var3.pendingGlobalName;
            var59 = var3.pendingPronouns;
            var15 = var3.pendingBio;
            _closure2_slot14 = var15;
            var66 = var3.pendingAccentColor;
            var65 = var3.pendingThemeColors;
            var12 = var3.pendingLegacyUsernameDisabled;
            var56 = var3.pendingDisplayNameStyles;
            var3 = 53;
            var3 = var6[var3];
            var14 = var13.bind(var5)(var3);
            var13 = var14.getPendingAvatarSrc;
            var3 = {};
            var17 = var46.id;
            var3['userId'] = var17;
            var3['image'] = var16;
            var51 = var13.bind(var14)(var3);
            var3 = 32;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var58 = var3.bind(var5)(var53, var12);
            var3 = 54;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['user'] = var46;
            var3['displayProfile'] = var53;
            var6 = undefined;
            if(!var37) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var6 = var65;
case 52:
            var3['pendingThemeColors'] = var6;
            var3 = var4.bind(var5)(var3);
            var16 = var3.theme;
            var64 = var3.primaryColor;
            var14 = var3.secondaryColor;
            var39 = var1 != var64;
            _closure2_slot15 = var39;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 55;
            var3 = var6[var3];
            var13 = var4.bind(var5)(var3);
            var12 = var13.useUserProfileColors;
            var3 = {};
            var3['theme'] = var16;
            var3['primaryColor'] = var64;
            var3['secondaryColor'] = var14;
            var3 = var12.bind(var13)(var3);
            var52 = var3.containerBackground;
            _closure2_slot16 = var52;
            var13 = var3.avatarBackground;
            var14 = var3.statusBackground;
            var12 = _closure1_slot1;
            var3 = 56;
            var3 = var6[var3];
            var3 = var12.bind(var5)(var3);
            var75 = var3.bind(var5)(var8);
            _closure2_slot17 = var75;
            var8 = _closure1_slot4;
            var3 = var8.useRef;
            var21 = var3.bind(var8)(var1);
            var8 = _closure1_slot4;
            var3 = var8.useRef;
            var29 = var3.bind(var8)(var1);
            var3 = var6[var2];
            var16 = var4.bind(var5)(var3);
            var12 = var16.useStateFromStores;
            var3 = _closure1_slot12;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getFirstWishlistId;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var70 = var12.bind(var16)(var8, var3);
            _closure2_slot18 = var70;
            var3 = 57;
            var3 = var6[var3];
            var12 = var4.bind(var5)(var3);
            var8 = var12.useFetchWishlist;
            var3 = {};
            var3['wishlistId'] = var70;
            var16 = var46.id;
            var3['userId'] = var16;
            var3 = var8.bind(var12)(var3);
            var2 = var6[var2];
            var16 = var4.bind(var5)(var2);
            var12 = var16.useStateFromStores;
            var2 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var2;
            var3 = new Array(1);
            var3[0] = var70;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot18;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var4 = _closure1_slot7;
                    var3 = var4.getWishlist;
                    var2 = _closure2_slot18;
                    var1 = var3.bind(var4)(var2);
case 54:
                    return var1;
                }
            };
            var3 = var12.bind(var16)(var8, var2, var3);
            _closure2_slot19 = var3;
            var2 = 58;
            var2 = var6[var2];
            var6 = var4.bind(var5)(var2);
            var4 = var6.useIsEligibleForSocialLayerStorefrontMobilePurchasing;
            var2 = {};
            var8 = 'user_profile_content';
            var2['location'] = var8;
            var2 = var4.bind(var6)(var2);
            _closure2_slot20 = var2;
            var8 = _closure1_slot4;
            var6 = var8.useMemo;
            var4 = new Array(3);
            var4[0] = var3;
            var4[1] = var20;
            var4[2] = var2;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot19;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                    var3 = _closure2_slot19;
                    var5 = var3.items;
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 59;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.isEligibleWishlistItemOnMobile;
                        var2 = {};
                        var5 = _closure2_slot10;
                        var2['isWishlistOwner'] = var5;
                        var1 = _closure2_slot20;
                        var2['isSocialLayerStorefrontMobilePurchasingEnabled'] = var1;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3);
case 56:
                    if(!(var2 == var1)) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                    var1 = new Array(0);
case 58:
                    return var1;
                }
            };
            var4 = var6.bind(var8)(var2, var4);
            var2 = var20;
            if(var2) { _fun0006_ip = 60; continue _fun0006 }
case 61:
            var3 = var1 != var3;
            if(!var3) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var6 = var4.length;
            var4 = 0;
            var3 = var6 > var4;
case 62:
            var2 = var3;
case 60:
            _closure2_slot21 = var2;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 60;
            var3 = var12[var3];
            var8 = var6.bind(var5)(var3);
            var4 = var8.useDisplayableBoardWidgets;
            var3 = var46.id;
            var3 = var4.bind(var8)(var3);
            var3 = var3.length;
            var44 = 0;
            var16 = var3 > var44;
            _closure2_slot22 = var16;
            var3 = 61;
            var4 = var12[var3];
            var8 = var6.bind(var5)(var4);
            var4 = var8.useProfileTabIndices;
            var4 = var4.bind(var8)(var16, var2);
            var50 = var4.boardTabIndex;
            _closure2_slot23 = var50;
            var43 = var4.wishlistTabIndex;
            _closure2_slot24 = var43;
            var8 = _closure1_slot4;
            var4 = var8.useState;
            var17 = var4.bind(var8)(var44);
            var8 = _closure1_slot3;
            var4 = 2;
            var8 = var8.bind(var5)(var17, var4);
            var36 = var8[var44];
            var4 = 1;
            var4 = var8[var4];
            _closure2_slot25 = var4;
            var19 = _closure1_slot4;
            var17 = var19.useCallback;
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot25;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var4 = new Array(0);
            var19 = var17.bind(var19)(var8, var4);
            var4 = 62;
            var8 = var12[var4];
            var17 = var6.bind(var5)(var8);
            var8 = var17.usePageHeights;
            var17 = var8.bind(var17)();
            var8 = var17.pageHeights;
            var69 = var17.handlePageContentSize;
            _closure2_slot26 = var69;
            var17 = 63;
            var17 = var12[var17];
            var27 = var6.bind(var5)(var17);
            var26 = var27.useWishlistViewerCoachmark;
            var17 = {};
            var17['isCurrentUser'] = var20;
            var17['shouldShowWishlistTab'] = var2;
            var17 = var26.bind(var27)(var17);
            var28 = var17.isVisible;
            _closure2_slot27 = var28;
            var27 = var17.markAsDismissed;
            _closure2_slot28 = var27;
            var35 = _closure1_slot4;
            var26 = var35.useCallback;
            var17 = new Array(3);
            var17[0] = var7;
            var17[1] = var28;
            var17[2] = var27;
            var7 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var5 = arg1;
                    var4 = _closure2_slot8;
                    var2 = {};
                    var1 = 'PRESS_SECTION';
                    var2['action'] = var1;
                    var2['section'] = var5;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var4 = _closure1_slot13;
                    var4 = var4.WISHLIST;
                    var4 = var5 === var4;
                    if(!var4) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                    var4 = _closure2_slot27;
case 64:
                    if(!var4) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                    var3 = _closure2_slot28;
                    var2 = _closure1_slot18;
                    var2 = var2.INDIRECT_ACTION;
                    var2 = var3.bind(var1)(var2);
case 66:
                    return var1;
                }
            };
            var26 = var26.bind(var35)(var7, var17);
            var3 = var12[var3];
            var17 = var6.bind(var5)(var3);
            var7 = var17.useProfileSectionTabs;
            var3 = {};
            var3['initialUserProfileSection'] = var34;
            var3['wishlistTabIndex'] = var43;
            var3['boardTabIndex'] = var50;
            var3['onTabChange'] = var26;
            var7 = var7.bind(var17)(var3);
            var68 = var7.activeProfileTabSection;
            var3 = var7.setActiveProfileTabSection;
            _closure2_slot29 = var3;
            var34 = var7.handleTabChange;
            var17 = var7.restoreActiveIndex;
            _closure2_slot30 = var17;
            var35 = var7.activeProfileTabSectionIndex;
            var7 = _closure1_slot13;
            var26 = var7.WISHLIST;
            var26 = var68 === var26;
            _closure2_slot31 = var26;
            var7 = var7.WIDGETS;
            var7 = var68 === var7;
            _closure2_slot32 = var7;
            var74 = _closure1_slot4;
            var73 = var74.useCallback;
            var68 = new Array(1);
            var68[0] = var40;
            var40 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var4 = _closure2_slot5;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0011_ip = 51; continue _fun0011 }
case 68:
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)();
case 51:
                    return var1;
                }
            };
            var74 = var73.bind(var74)(var40, var68);
            _closure2_slot33 = var74;
            var73 = _closure1_slot4;
            var68 = var73.useCallback;
            var40 = new Array(1);
            var40[0] = var33;
            var33 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var4 = _closure2_slot6;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0012_ip = 51; continue _fun0012 }
case 68:
                    var2 = _closure2_slot6;
                    var2 = var2.bind(var1)();
case 51:
                    return var1;
                }
            };
            var73 = var68.bind(var73)(var33, var40);
            _closure2_slot34 = var73;
            var68 = _closure1_slot4;
            var40 = var68.useCallback;
            var33 = new Array(16);
            var33[0] = var46;
            var33[1] = var30;
            var33[2] = var52;
            var33[3] = var31;
            var33[4] = var37;
            var33[5] = var75;
            var33[6] = var74;
            var33[7] = var73;
            var33[8] = var39;
            var33[9] = var49;
            var33[10] = var72;
            var33[11] = var53;
            var33[12] = var71;
            var33[13] = var15;
            var33[14] = var57;
            var33[15] = var54;
            var15 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0013_ip = 69; continue _fun0013 }
case 55:
                    var2 = _closure2_slot9;
                    if(!(var1 != var2)) { _fun0013_ip = 69; continue _fun0013 }
case 3:
                    var6 = _closure2_slot7;
                    var2 = var6.card;
                    var13 = new Array(2);
                    var13[0] = var2;
                    var2 = {};
                    var3 = _closure2_slot16;
                    var2['backgroundColor'] = var3;
                    var13[1] = var2;
                    var5 = _closure1_slot20;
                    var4 = _closure1_slot6;
                    var3 = {};
                    var7 = var6.cards;
                    var2 = new Array(2);
                    var2[0] = var7;
                    var6 = var6.profileContent;
                    var2[1] = var6;
                    var3['style'] = var2;
                    var2 = _closure2_slot2;
                    var6 = var1 == var2;
                    var2 = undefined;
                    var7 = undefined;
                    if(var6) { _fun0013_ip = 70; continue _fun0013 }
case 71:
                    var6 = _closure2_slot2;
                    var7 = var6.private;
case 70:
                    if(!var7) { _fun0013_ip = 72; continue _fun0013 }
case 73:
                    var10 = _closure1_slot19;
                    var9 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var6 = 64;
                    var6 = var12[var6];
                    var9 = var9.bind(var2)(var6);
                    var6 = {};
                    var12 = _closure2_slot13;
                    var6['username'] = var12;
                    var12 = _closure2_slot16;
                    var6['containerBackground'] = var12;
                    var7 = var10.bind(var2)(var9, var6);
case 72:
                    var6 = new Array(11);
                    var6[0] = var7;
                    var7 = _closure2_slot0;
                    var7 = var7.isProvisional;
                    if(!var7) { _fun0013_ip = 74; continue _fun0013 }
case 75:
                    var12 = _closure1_slot19;
                    var10 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var9 = 65;
                    var9 = var14[var9];
                    var9 = var10.bind(var2)(var9);
                    var10 = var9.UserProfileProvisionalAccountExplainerCard;
                    var9 = {};
                    var9['style'] = var13;
                    var14 = _closure2_slot0;
                    var14 = var14.id;
                    var9['userId'] = var14;
                    var14 = 16;
                    var9['iconSize'] = var14;
                    var7 = var12.bind(var2)(var10, var9);
case 74:
                    var6[1] = var7;
                    var7 = _closure2_slot0;
                    var9 = var7.id;
                    var7 = _closure2_slot9;
                    var7 = var7.id;
                    var7 = var9 === var7;
                    if(!var7) { _fun0013_ip = 76; continue _fun0013 }
case 77:
                    var9 = _closure2_slot4;
                    var7 = !var9;
case 76:
                    if(!var7) { _fun0013_ip = 78; continue _fun0013 }
case 79:
                    var12 = _closure1_slot19;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 66;
                    var9 = var14[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = {};
                    var14 = _closure2_slot33;
                    var9['navigateToPremium'] = var14;
                    var14 = _closure2_slot34;
                    var9['navigateToShop'] = var14;
                    var14 = _closure2_slot15;
                    var9['hasCustomProfileTheme'] = var14;
                    var7 = var12.bind(var2)(var10, var9);
case 78:
                    var6[2] = var7;
                    var10 = _closure1_slot19;
                    var9 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var7 = 67;
                    var7 = var12[var7];
                    var9 = var9.bind(var2)(var7);
                    var7 = {};
                    var12 = _closure2_slot0;
                    var7['user'] = var12;
                    var12 = _closure2_slot9;
                    var7['currentUser'] = var12;
                    var12 = _closure2_slot12;
                    var7['guildId'] = var12;
                    var7['style'] = var13;
                    var7 = var10.bind(var2)(var9, var7);
                    var6[3] = var7;
                    var7 = _closure2_slot11;
                    var9 = var7.length;
                    var7 = 0;
                    var7 = var9 > var7;
                    if(!var7) { _fun0013_ip = 80; continue _fun0013 }
case 81:
                    var12 = _closure1_slot19;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 68;
                    var9 = var14[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = {};
                    var14 = _closure2_slot0;
                    var14 = var14.id;
                    var9['userId'] = var14;
                    var14 = _closure2_slot11;
                    var9['applicationIds'] = var14;
                    var15 = _closure2_slot17;
                    var14 = undefined;
                    if(var15) { _fun0013_ip = 82; continue _fun0013 }
case 83:
                    var14 = var13;
case 82:
                    var9['style'] = var14;
                    var7 = var12.bind(var2)(var10, var9);
case 80:
                    var6[4] = var7;
                    var10 = _closure1_slot19;
                    var9 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var7 = 69;
                    var7 = var12[var7];
                    var9 = var9.bind(var2)(var7);
                    var7 = {};
                    var12 = _closure2_slot0;
                    var12 = var12.id;
                    var7['userId'] = var12;
                    var12 = _closure2_slot2;
                    var7['displayProfile'] = var12;
                    var14 = _closure2_slot4;
                    var12 = undefined;
                    if(!var14) { _fun0013_ip = 84; continue _fun0013 }
case 85:
                    var12 = _closure2_slot14;
case 84:
                    var7['pendingBio'] = var12;
                    var14 = _closure2_slot17;
                    var12 = undefined;
                    if(var14) { _fun0013_ip = 86; continue _fun0013 }
case 87:
                    var12 = var13;
case 86:
                    var7['style'] = var12;
                    var7 = var10.bind(var2)(var9, var7);
                    var6[5] = var7;
                    var7 = _closure2_slot12;
                    var7 = var1 != var7;
                    if(!var7) { _fun0013_ip = 88; continue _fun0013 }
case 89:
                    var12 = _closure1_slot19;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 70;
                    var9 = var14[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = {};
                    var14 = _closure2_slot0;
                    var14 = var14.id;
                    var9['userId'] = var14;
                    var14 = _closure2_slot12;
                    var9['guildId'] = var14;
                    var15 = _closure2_slot17;
                    var14 = undefined;
                    if(var15) { _fun0013_ip = 90; continue _fun0013 }
case 91:
                    var14 = var13;
case 90:
                    var9['style'] = var14;
                    var7 = var12.bind(var2)(var10, var9);
case 88:
                    var6[6] = var7;
                    var7 = _closure2_slot1;
                    var9 = var1 == var7;
                    var7 = undefined;
                    if(var9) { _fun0013_ip = 92; continue _fun0013 }
case 93:
                    var9 = _closure2_slot1;
                    var7 = var9.guild_id;
case 92:
                    var7 = var1 != var7;
                    if(!var7) { _fun0013_ip = 94; continue _fun0013 }
case 95:
                    var12 = _closure1_slot19;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 71;
                    var9 = var14[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = {};
                    var14 = _closure2_slot0;
                    var9['user'] = var14;
                    var14 = _closure2_slot9;
                    var9['currentUser'] = var14;
                    var14 = _closure2_slot1;
                    var15 = var14.guild_id;
                    var9['guildId'] = var15;
                    var14 = var14.id;
                    var9['channelId'] = var14;
                    var14 = _closure2_slot3;
                    var9['showUserProfile'] = var14;
                    var15 = _closure2_slot17;
                    var14 = undefined;
                    if(var15) { _fun0013_ip = 96; continue _fun0013 }
case 97:
                    var14 = var13;
case 96:
                    var9['style'] = var14;
                    var7 = var12.bind(var2)(var10, var9);
case 94:
                    var6[7] = var7;
                    var10 = _closure1_slot19;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var12 = 72;
                    var7 = var7[var12];
                    var7 = var9.bind(var2)(var7);
                    var9 = var7.UserProfileAccountConnectionsCard;
                    var7 = {};
                    var14 = _closure2_slot0;
                    var14 = var14.id;
                    var7['userId'] = var14;
                    var15 = _closure2_slot17;
                    var14 = undefined;
                    if(var15) { _fun0013_ip = 98; continue _fun0013 }
case 99:
                    var14 = var13;
case 98:
                    var7['style'] = var14;
                    var7 = var10.bind(var2)(var9, var7);
                    var6[8] = var7;
                    var10 = _closure1_slot19;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var12];
                    var7 = var9.bind(var2)(var7);
                    var9 = var7.UserProfileApplicationRoleConnectionsCard;
                    var7 = {};
                    var12 = _closure2_slot0;
                    var12 = var12.id;
                    var7['userId'] = var12;
                    var14 = _closure2_slot17;
                    var12 = undefined;
                    if(var14) { _fun0013_ip = 100; continue _fun0013 }
case 101:
                    var12 = var13;
case 100:
                    var7['style'] = var12;
                    var7 = var10.bind(var2)(var9, var7);
                    var6[9] = var7;
                    var7 = _closure2_slot4;
                    var7 = !var7;
                    if(!var7) { _fun0013_ip = 102; continue _fun0013 }
case 103:
                    var10 = _closure1_slot19;
                    var9 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var8 = 73;
                    var8 = var12[var8];
                    var9 = var9.bind(var2)(var8);
                    var8 = {};
                    var12 = _closure2_slot0;
                    var12 = var12.id;
                    var8['userId'] = var12;
                    var14 = _closure2_slot17;
                    var12 = undefined;
                    if(var14) { _fun0013_ip = 104; continue _fun0013 }
case 105:
                    var12 = var13;
case 104:
                    var8['style'] = var12;
                    var11 = _closure2_slot3;
                    var8['onBack'] = var11;
                    var7 = var10.bind(var2)(var9, var8);
case 102:
                    var6[10] = var7;
                    var3['children'] = var6;
                    var2 = var5.bind(var2)(var4, var3);
                    return var2;
case 69:
                    return var1;
                }
            };
            var15 = var40.bind(var68)(var15, var33);
            _closure2_slot35 = var15;
            var68 = _closure1_slot4;
            var40 = var68.useCallback;
            var71 = var31.profileContent;
            var33 = new Array(5);
            var33[0] = var71;
            var33[1] = var70;
            var33[2] = var26;
            var26 = var46.id;
            var33[3] = var26;
            var33[4] = var20;
            var26 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var4 = _closure1_slot20;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var1 = _closure2_slot7;
                    var1 = var1.profileContent;
                    var2['style'] = var1;
                    var5 = _closure2_slot18;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0014_ip = 106; continue _fun0014 }
case 107:
                    var7 = _closure1_slot19;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 74;
                    var1 = var6[var1];
                    var6 = undefined;
                    var5 = var5.bind(var6)(var1);
                    var1 = {};
                    var8 = _closure2_slot18;
                    var1['wishlistId'] = var8;
                    var8 = _closure1_slot17;
                    var1['maxWidth'] = var8;
                    var8 = _closure2_slot31;
                    var1['isVisible'] = var8;
                    var5 = var7.bind(var6)(var5, var1);
                    _fun0014_ip = 108; continue _fun0014;
case 106:
                    var8 = _closure1_slot19;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 74;
                    var1 = var7[var1];
                    var7 = undefined;
                    var1 = var6.bind(var7)(var1);
                    var6 = var1.WishlistEmptyState;
                    var1 = {};
                    var5 = var8.bind(var7)(var6, var1);
case 108:
                    var1 = new Array(2);
                    var1[0] = var5;
                    var5 = _closure2_slot10;
                    if(!var5) { _fun0014_ip = 109; continue _fun0014 }
case 110:
                    var9 = _closure1_slot19;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 75;
                    var6 = var8[var6];
                    var8 = undefined;
                    var7 = var7.bind(var8)(var6);
                    var6 = {};
                    var12 = _closure2_slot0;
                    var12 = var12.id;
                    var6['userId'] = var12;
                    var11 = _closure2_slot18;
                    var6['wishlistId'] = var11;
                    var10 = _closure1_slot17;
                    var6['maxWidth'] = var10;
                    var5 = var9.bind(var8)(var7, var6);
case 109:
                    var1[1] = var5;
                    var2['children'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var68 = var40.bind(var68)(var26, var33);
            _closure2_slot36 = var68;
            var40 = _closure1_slot4;
            var33 = var40.useMemo;
            var26 = new Array(11);
            var26[0] = var69;
            var26[1] = var15;
            var26[2] = var68;
            var26[3] = var16;
            var26[4] = var2;
            var26[5] = var50;
            var26[6] = var43;
            var50 = var46.id;
            var26[7] = var50;
            var26[8] = var7;
            var26[9] = var20;
            var26[10] = var52;
            var7 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = {};
                    var1 = 'main';
                    var2['id'] = var1;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var13 = 28;
                    var3 = var1[var13];
                    var8 = undefined;
                    var3 = var6.bind(var8)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var1 = var1[var13];
                    var1 = var6.bind(var8)(var1);
                    var1 = var1.t;
                    var1 = var1.LXw470;
                    var1 = var3.bind(var4)(var1);
                    var2['label'] = var1;
                    var6 = _closure1_slot19;
                    var3 = _closure1_slot5;
                    var1 = {};
                    var10 = false;
                    var1['scrollEnabled'] = var10;
                    var4 = function onContentSizeChange(arg1, arg2) {
                        var5 = _closure2_slot26;
                        var4 = undefined;
                        var3 = 0;
                        var2 = arg1;
                        var1 = arg2;
                        var1 = var5.bind(var4)(var3, var2, var1);
                        return var1;
                    };
                    var1['onContentSizeChange'] = var4;
                    var7 = _closure2_slot35;
                    var7 = var7.bind(var8)();
                    var1['children'] = var7;
                    var1 = var6.bind(var8)(var3, var1);
                    var2['page'] = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var2 = _closure2_slot22;
                    if(!var2) { _fun0015_ip = 111; continue _fun0015 }
case 112:
                    var3 = var1.push;
                    var2 = {};
                    var6 = 'board';
                    var2['id'] = var6;
                    var12 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var7 = var6[var13];
                    var7 = var12.bind(var8)(var7);
                    var11 = var7.intl;
                    var7 = var11.string;
                    var6 = var6[var13];
                    var6 = var12.bind(var8)(var6);
                    var6 = var6.t;
                    var6 = var6.laViwx;
                    var6 = var7.bind(var11)(var6);
                    var2['label'] = var6;
                    var12 = _closure1_slot19;
                    var11 = _closure1_slot5;
                    var7 = {};
                    var7['scrollEnabled'] = var10;
                    var6 = function onContentSizeChange(arg1, arg2) {
                        var5 = _closure2_slot26;
                        var4 = _closure2_slot23;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = arg2;
                        var1 = var5.bind(var3)(var4, var2, var1);
                        return var1;
                    };
                    var7['onContentSizeChange'] = var6;
                    var15 = _closure1_slot19;
                    var14 = _closure1_slot27;
                    var6 = {};
                    var16 = _closure2_slot0;
                    var16 = var16.id;
                    var6['userId'] = var16;
                    var16 = _closure2_slot32;
                    var6['isVisible'] = var16;
                    var16 = _closure2_slot10;
                    var6['isCurrentUser'] = var16;
                    var16 = _closure2_slot16;
                    var6['containerBackground'] = var16;
                    var6 = var15.bind(var8)(var14, var6);
                    var7['children'] = var6;
                    var6 = _closure2_slot23;
                    var6 = var12.bind(var8)(var11, var7, var6);
                    var2['page'] = var6;
                    var2 = var3.bind(var1)(var2);
case 111:
                    var2 = _closure2_slot21;
                    if(!var2) { _fun0015_ip = 34; continue _fun0015 }
case 113:
                    var3 = var1.push;
                    var2 = {};
                    var6 = 'wishlist';
                    var2['id'] = var6;
                    var12 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var7 = var6[var13];
                    var7 = var12.bind(var8)(var7);
                    var11 = var7.intl;
                    var7 = var11.string;
                    var6 = var6[var13];
                    var6 = var12.bind(var8)(var6);
                    var6 = var6.t;
                    var6 = var6["7lZ31J"];
                    var6 = var7.bind(var11)(var6);
                    var2['label'] = var6;
                    var7 = _closure1_slot19;
                    var6 = _closure1_slot5;
                    var5 = {};
                    var5['scrollEnabled'] = var10;
                    var9 = function onContentSizeChange(arg1, arg2) {
                        var5 = _closure2_slot26;
                        var4 = _closure2_slot24;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = arg2;
                        var1 = var5.bind(var3)(var4, var2, var1);
                        return var1;
                    };
                    var5['onContentSizeChange'] = var9;
                    var9 = _closure2_slot36;
                    var9 = var9.bind(var8)();
                    var5['children'] = var9;
                    var4 = _closure2_slot24;
                    var4 = var7.bind(var8)(var6, var5, var4);
                    var2['page'] = var4;
                    var2 = var3.bind(var1)(var2);
case 34:
                    return var1;
                }
            };
            var40 = var33.bind(var40)(var7, var26);
            var7 = 76;
            var7 = var12[var7];
            var33 = var6.bind(var5)(var7);
            var26 = var33.useSegmentedControlState;
            var7 = {};
            var7['pageWidth'] = var36;
            var7['defaultIndex'] = var35;
            var36 = _closure1_slot1;
            var35 = 41;
            var35 = var12[var35];
            var35 = var36.bind(var5)(var35);
            var35 = var35.space;
            var35 = var35.PX_24;
            var7['itemSpacing'] = var35;
            var7['items'] = var40;
            var7['onPageChange'] = var34;
            var36 = var26.bind(var33)(var7);
            _closure2_slot37 = var36;
            var7 = var12[var4];
            var26 = var6.bind(var5)(var7);
            var7 = var26.usePagerFillHeight;
            var26 = var7.bind(var26)();
            var35 = var26.pagerRef;
            var7 = var26.fillHeight;
            var34 = var26.measureFill;
            var50 = _closure1_slot4;
            var33 = var50.useLayoutEffect;
            var26 = new Array(2);
            var26[0] = var36;
            var26[1] = var17;
            var17 = function() {
                var3 = _closure2_slot30;
                var2 = _closure2_slot37;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var17 = var33.bind(var50)(var17, var26);
            var4 = var12[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.usePagesHeightStyle;
            var33 = var4.bind(var6)(var36, var8, var7);
            var7 = _closure1_slot4;
            var6 = var7.useCallback;
            var4 = new Array(4);
            var4[0] = var36;
            var4[1] = var43;
            var4[2] = var27;
            var4[3] = var3;
            var3 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = _closure2_slot24;
                    var2 = 0;
                    if(!(var3 >= var2)) { _fun0016_ip = 51; continue _fun0016 }
case 49:
                    var4 = _closure2_slot29;
                    var2 = _closure1_slot13;
                    var3 = var2.WISHLIST;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = _closure2_slot37;
                    var3 = var4.setActiveIndex;
                    var2 = _closure2_slot24;
                    var2 = var3.bind(var4)(var2);
case 51:
                    var3 = _closure2_slot28;
                    var1 = _closure1_slot18;
                    var2 = var1.TAKE_ACTION;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var26 = var6.bind(var7)(var3, var4);
            var17 = var2;
            if(!(var1 != var46)) { _fun0006_ip = 114; continue _fun0006 }
case 115:
            if(!(var1 != var30)) { _fun0006_ip = 114; continue _fun0006 }
case 116:
            var50 = {};
            var50['backgroundColor'] = var52;
            _closure2_slot38 = var50;
            if(var37) { _fun0006_ip = 117; continue _fun0006 }
case 118:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 77;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var12 = var2.OpenableUserProfileAvatar;
            _fun0006_ip = 119; continue _fun0006;
case 117:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 77;
            var2 = var4[var2];
            var12 = var3.bind(var5)(var2);
case 119:
            var4 = _closure1_slot20;
            var3 = _closure1_slot21;
            var2 = {};
            var8 = _closure1_slot19;
            var7 = _closure1_slot1;
            var68 = _closure1_slot2;
            var6 = 78;
            var6 = var68[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['user'] = var46;
            var6['displayProfile'] = var53;
            var6['bannerHeight'] = var63;
            var63 = undefined;
            if(!var37) { _fun0006_ip = 120; continue _fun0006 }
case 121:
            var63 = var67;
case 120:
            var6['pendingBanner'] = var63;
            var63 = undefined;
            if(!var37) { _fun0006_ip = 122; continue _fun0006 }
case 123:
            var63 = var51;
case 122:
            var6['pendingAvatarSrc'] = var63;
            var63 = undefined;
            if(!var37) { _fun0006_ip = 124; continue _fun0006 }
case 125:
            var67 = var1 != var66;
            var63 = undefined;
            if(!var67) { _fun0006_ip = 124; continue _fun0006 }
case 126:
            var63 = var66;
case 124:
            var6['pendingAccentColor'] = var63;
            var63 = undefined;
            if(!var37) { _fun0006_ip = 127; continue _fun0006 }
case 128:
            var66 = var1 != var65;
            var63 = undefined;
            if(!var66) { _fun0006_ip = 127; continue _fun0006 }
case 129:
            var63 = var65;
case 127:
            var6['pendingThemeColors'] = var63;
            var6['disableInteraction'] = var37;
            var6['bannerAnimatedStyle'] = var61;
            var6['bannerImageAnimatedStyle'] = var25;
            var6['blurAnimatedProps'] = var11;
            var6['showBlur'] = var9;
            var9 = var1 == var53;
            var25 = undefined;
            if(var9) { _fun0006_ip = 130; continue _fun0006 }
case 131:
            var25 = var53.private;
case 130:
            var11 = true;
            var9 = undefined;
            if(!(var11 === var25)) { _fun0006_ip = 132; continue _fun0006 }
case 133:
            var63 = _closure1_slot19;
            var25 = _closure1_slot1;
            var65 = _closure1_slot2;
            var11 = 79;
            var11 = var65[var11];
            var25 = var25.bind(var5)(var11);
            var11 = {};
            var11['primaryColor'] = var64;
            var9 = var63.bind(var5)(var25, var11);
case 132:
            var6['privateBanner'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(3);
            var6[0] = var7;
            var7 = !var37;
            if(!var7) { _fun0006_ip = 134; continue _fun0006 }
case 135:
            var11 = _closure1_slot20;
            var9 = _closure1_slot1;
            var25 = _closure1_slot2;
            var8 = 80;
            var8 = var25[var8];
            var8 = var9.bind(var5)(var8);
            var9 = var8.View;
            var8 = {};
            var63 = var31.bannerButtons;
            var25 = new Array(3);
            var25[0] = var63;
            var64 = var1 == var53;
            var63 = undefined;
            if(var64) { _fun0006_ip = 136; continue _fun0006 }
case 137:
            var63 = var53.private;
case 136:
            if(!var63) { _fun0006_ip = 138; continue _fun0006 }
case 139:
            var63 = var31.bannerButtonsWithPrivateBanner;
case 138:
            var25[1] = var63;
            var25[2] = var61;
            var8['style'] = var25;
            var25 = var1 == var30;
            var61 = null;
            if(var25) { _fun0006_ip = 140; continue _fun0006 }
case 141:
            var63 = var46.id;
            var25 = var30.id;
            var61 = null;
            if(!(var63 !== var25)) { _fun0006_ip = 140; continue _fun0006 }
case 142:
            var25 = var46.bot;
            var61 = null;
            if(var25) { _fun0006_ip = 140; continue _fun0006 }
case 143:
            var25 = _closure1_slot16;
            var25 = var25.FRIEND;
            if(!(var48 !== var25)) { _fun0006_ip = 144; continue _fun0006 }
case 145:
            var25 = null;
            if(!var62) { _fun0006_ip = 146; continue _fun0006 }
case 147:
            var64 = _closure1_slot19;
            var63 = _closure1_slot24;
            var62 = {};
            var62['user'] = var46;
            var25 = var64.bind(var5)(var63, var62);
case 146:
            _fun0006_ip = 148; continue _fun0006;
case 144:
            var64 = _closure1_slot19;
            var63 = _closure1_slot23;
            var62 = {};
            var62['user'] = var46;
            var25 = var64.bind(var5)(var63, var62);
case 148:
            var61 = var25;
case 140:
            var25 = new Array(2);
            var25[0] = var61;
            var63 = _closure1_slot19;
            var62 = _closure1_slot1;
            var64 = _closure1_slot2;
            var61 = 81;
            var61 = var64[var61];
            var62 = var62.bind(var5)(var61);
            var61 = {};
            var61['user'] = var46;
            var61['currentUser'] = var30;
            var61['displayProfile'] = var53;
            var61['channel'] = var57;
            var61 = var63.bind(var5)(var62, var61);
            var25[1] = var61;
            var8['children'] = var25;
            var7 = var11.bind(var5)(var9, var8);
case 134:
            var6[1] = var7;
            var9 = _closure1_slot20;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var25 = 80;
            var7 = var7[var25];
            var7 = var8.bind(var5)(var7);
            var8 = var7.View;
            var7 = {};
            var7['style'] = var10;
            var11 = _closure1_slot19;
            var10 = {};
            var10['user'] = var46;
            var10['guildId'] = var49;
            var10['disableStatus'] = var18;
            var18 = undefined;
            if(!var37) { _fun0006_ip = 149; continue _fun0006 }
case 150:
            var18 = var51;
case 149:
            var10['pendingAvatarSrc'] = var18;
            var18 = undefined;
            if(!var37) { _fun0006_ip = 151; continue _fun0006 }
case 152:
            var18 = var38;
case 151:
            var10['pendingAvatarDecoration'] = var18;
            var10['backgroundColor'] = var13;
            var13 = {};
            var13['backgroundColor'] = var14;
            var10['statusStyle'] = var13;
            var11 = var11.bind(var5)(var12, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var13 = _closure1_slot20;
            var12 = _closure1_slot6;
            var11 = {};
            var18 = var31.profileContentWrapper;
            var14 = new Array(2);
            var14[0] = var18;
            var18 = {};
            if(!var20) { _fun0006_ip = 153; continue _fun0006 }
case 154:
            var20 = 0;
            if(!var37) { _fun0006_ip = 155; continue _fun0006 }
case 153:
            var38 = var1 != var22;
            var20 = 0;
            if(var38) { _fun0006_ip = 155; continue _fun0006 }
case 156:
            var20 = _closure1_slot15;
case 155:
            var18['paddingTop'] = var20;
            var20 = _closure1_slot14;
            var20 = var24 + var20;
            var18['paddingBottom'] = var20;
            var14[1] = var18;
            var11['style'] = var14;
            var20 = _closure1_slot19;
            var18 = _closure1_slot22;
            var14 = {};
            var14['customStatusActivity'] = var22;
            var14['user'] = var46;
            var14['guildId'] = var49;
            var24 = var1 == var57;
            var22 = undefined;
            if(var24) { _fun0006_ip = 157; continue _fun0006 }
case 158:
            var22 = var57.id;
case 157:
            var14['channelId'] = var22;
            var14['hasCustomProfileTheme'] = var39;
            var14['showUserProfileActionSheet'] = var54;
            var14['isPreviewingChanges'] = var37;
            var14['bubbleRef'] = var21;
            var18 = var20.bind(var5)(var18, var14);
            var14 = new Array(3);
            var14[0] = var18;
            var20 = var1 == var30;
            var18 = null;
            if(var20) { _fun0006_ip = 159; continue _fun0006 }
case 160:
            var22 = _closure1_slot20;
            var21 = _closure1_slot6;
            var20 = {};
            var38 = var31.primaryInfo;
            var24 = new Array(2);
            var24[0] = var38;
            var38 = var31.profileContent;
            var24[1] = var38;
            var20['style'] = var24;
            var51 = _closure1_slot19;
            var38 = _closure1_slot25;
            var24 = {};
            var24['user'] = var46;
            var62 = var1 == var57;
            var61 = undefined;
            if(var62) { _fun0006_ip = 161; continue _fun0006 }
case 162:
            var61 = var57.id;
case 161:
            var24['channelId'] = var61;
            var24['displayProfile'] = var53;
            var53 = undefined;
            if(!var37) { _fun0006_ip = 163; continue _fun0006 }
case 164:
            var53 = var60;
case 163:
            var24['displayNameOverride'] = var53;
            var53 = undefined;
            if(!var37) { _fun0006_ip = 165; continue _fun0006 }
case 166:
            var53 = var59;
case 165:
            var24['pronounsOverride'] = var53;
            var53 = undefined;
            if(!var37) { _fun0006_ip = 167; continue _fun0006 }
case 168:
            var53 = var58;
case 167:
            var24['badgesOverride'] = var53;
            var53 = undefined;
            if(!var37) { _fun0006_ip = 169; continue _fun0006 }
case 170:
            var53 = var56;
case 169:
            var24['pendingDisplayNameStyles'] = var53;
            var24['badgeContainerBackground'] = var52;
            var24['isPreviewingChanges'] = var37;
            var38 = var51.bind(var5)(var38, var24);
            var24 = new Array(7);
            var24[0] = var38;
            var51 = var46.id;
            var38 = var30.id;
            var38 = var51 !== var38;
            if(!var38) { _fun0006_ip = 171; continue _fun0006 }
case 172:
            var53 = _closure1_slot19;
            var52 = _closure1_slot1;
            var56 = _closure1_slot2;
            var51 = 82;
            var51 = var56[var51];
            var52 = var52.bind(var5)(var51);
            var51 = {};
            var51['user'] = var46;
            var51['guildId'] = var49;
            var38 = var53.bind(var5)(var52, var51);
case 171:
            var24[1] = var38;
            var38 = _closure1_slot16;
            var38 = var38.PENDING_INCOMING;
            var38 = var48 === var38;
            if(!var38) { _fun0006_ip = 173; continue _fun0006 }
case 174:
            var53 = _closure1_slot19;
            var52 = _closure1_slot1;
            var56 = _closure1_slot2;
            var51 = 83;
            var51 = var56[var51];
            var52 = var52.bind(var5)(var51);
            var51 = {};
            var51['user'] = var46;
            var58 = var1 == var57;
            var56 = undefined;
            if(var58) { _fun0006_ip = 175; continue _fun0006 }
case 176:
            var56 = var57.id;
case 175:
            var51['channelId'] = var56;
            var51['guildId'] = var49;
            var51['applicationId'] = var55;
            var51['style'] = var50;
            var51['showUserProfile'] = var54;
            var38 = var53.bind(var5)(var52, var51);
case 173:
            var24[2] = var38;
            var38 = var47.map;
            var32 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot19;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 83;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var7 = _closure2_slot0;
                    var2['user'] = var7;
                    var7 = true;
                    var2['isGameRelationship'] = var7;
                    var7 = var1.applicationId;
                    var2['applicationId'] = var7;
                    var8 = _closure2_slot1;
                    var7 = null;
                    var8 = var7 == var8;
                    var7 = undefined;
                    if(var8) { _fun0017_ip = 177; continue _fun0017 }
case 178:
                    var8 = _closure2_slot1;
                    var7 = var8.id;
case 177:
                    var2['channelId'] = var7;
                    var7 = _closure2_slot12;
                    var2['guildId'] = var7;
                    var7 = _closure2_slot38;
                    var2['style'] = var7;
                    var6 = _closure2_slot3;
                    var2['showUserProfile'] = var6;
                    var1 = var1.applicationId;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var32 = var38.bind(var47)(var32);
            var24[3] = var32;
            var47 = _closure1_slot19;
            var38 = _closure1_slot1;
            var51 = _closure1_slot2;
            var32 = 84;
            var32 = var51[var32];
            var38 = var38.bind(var5)(var32);
            var32 = {};
            var32['user'] = var46;
            var32['style'] = var50;
            var32 = var47.bind(var5)(var38, var32);
            var24[4] = var32;
            var38 = var46.id;
            var32 = var30.id;
            var32 = var38 === var32;
            if(!var32) { _fun0006_ip = 179; continue _fun0006 }
case 180:
            var32 = !var37;
case 179:
            if(!var32) { _fun0006_ip = 181; continue _fun0006 }
case 182:
            var47 = _closure1_slot19;
            var38 = _closure1_slot26;
            var37 = {};
            var37['guildId'] = var49;
            var32 = var47.bind(var5)(var38, var37);
case 181:
            var24[5] = var32;
            var32 = var46.id;
            var30 = var30.id;
            var30 = var32 !== var30;
            if(!var30) { _fun0006_ip = 183; continue _fun0006 }
case 184:
            var38 = _closure1_slot19;
            var37 = _closure1_slot1;
            var47 = _closure1_slot2;
            var32 = 85;
            var32 = var47[var32];
            var37 = var37.bind(var5)(var32);
            var32 = {};
            var32['user'] = var46;
            if(var45) { _fun0006_ip = 185; continue _fun0006 }
case 186:
            var47 = _closure1_slot16;
            var47 = var47.BLOCKED;
            var45 = var48 === var47;
case 185:
            if(var45) { _fun0006_ip = 187; continue _fun0006 }
case 188:
            var45 = var46.isProvisional;
case 187:
            var32['disableCalls'] = var45;
            var32['disableMessage'] = var42;
            var32['location'] = var41;
            var32['hasCustomProfileTheme'] = var39;
            var41 = var31.primaryButtons;
            var32['style'] = var41;
            var30 = var38.bind(var5)(var37, var32);
case 183:
            var24[6] = var30;
            var20['children'] = var24;
            var18 = var22.bind(var5)(var21, var20);
case 159:
            var14[1] = var18;
            if(var17) { _fun0006_ip = 189; continue _fun0006 }
case 190:
            if(var16) { _fun0006_ip = 189; continue _fun0006 }
case 191:
            var15 = var15.bind(var5)();
            _fun0006_ip = 192; continue _fun0006;
case 189:
            var18 = _closure1_slot19;
            var17 = _closure1_slot6;
            var16 = {};
            var16['onLayout'] = var19;
            var21 = _closure1_slot20;
            var32 = _closure1_slot0;
            var38 = _closure1_slot2;
            var19 = 86;
            var19 = var38[var19];
            var19 = var32.bind(var5)(var19);
            var20 = var19.LayerScope;
            var19 = {};
            var30 = _closure1_slot20;
            var24 = _closure1_slot6;
            var22 = {};
            var31 = var31.profileTablist;
            var22['style'] = var31;
            var37 = _closure1_slot19;
            var31 = 87;
            var31 = var38[var31];
            var31 = var32.bind(var5)(var31);
            var32 = var31.Tabs;
            var31 = {};
            var31['state'] = var36;
            var38 = undefined;
            if(!var39) { _fun0006_ip = 193; continue _fun0006 }
case 194:
            var38 = 'gradient-background';
case 193:
            var31['variant'] = var38;
            var32 = var37.bind(var5)(var32, var31);
            var31 = new Array(2);
            var31[0] = var32;
            var38 = _closure1_slot19;
            var37 = _closure1_slot6;
            var32 = {};
            var32['ref'] = var29;
            var39 = {'position': 'absolute', 'left': null, 'top': 0, 'right': 0, 'bottom': 0};
            var41 = global;
            var42 = var41.Math;
            var41 = var42.max;
            var41 = var41.bind(var42)(var43, var44);
            var40 = var40.length;
            var41 = var41 / var40;
            var40 = 100;
            var41 = var41 * var40;
            var40 = '%';
            var40 = var41 + var40;
            var39['left'] = var40;
            var32['style'] = var39;
            var39 = false;
            var32['collapsable'] = var39;
            var39 = 'box-none';
            var32['pointerEvents'] = var39;
            var32 = var38.bind(var5)(var37, var32);
            var31[1] = var32;
            var22['children'] = var31;
            var24 = var30.bind(var5)(var24, var22);
            var22 = new Array(3);
            var22[0] = var24;
            var32 = _closure1_slot19;
            var24 = _closure1_slot1;
            var30 = _closure1_slot2;
            var25 = var30[var25];
            var25 = var24.bind(var5)(var25);
            var31 = var25.View;
            var25 = {};
            var25['ref'] = var35;
            var25['onLayout'] = var34;
            var25['style'] = var33;
            var35 = _closure1_slot19;
            var34 = _closure1_slot0;
            var33 = 88;
            var33 = var30[var33];
            var33 = var34.bind(var5)(var33);
            var34 = var33.SegmentedControlPages;
            var33 = {};
            var33['state'] = var36;
            var33 = var35.bind(var5)(var34, var33);
            var25['children'] = var33;
            var25 = var32.bind(var5)(var31, var25);
            var22[1] = var25;
            var25 = _closure1_slot19;
            var23 = 89;
            var23 = var30[var23];
            var24 = var24.bind(var5)(var23);
            var23 = {};
            var23['anchorRef'] = var29;
            var23['isVisible'] = var28;
            var23['markAsDismissed'] = var27;
            var23['onViewWishlist'] = var26;
            var23 = var25.bind(var5)(var24, var23);
            var22[2] = var23;
            var19['children'] = var22;
            var19 = var21.bind(var5)(var20, var19);
            var16['children'] = var19;
            var15 = var18.bind(var5)(var17, var16);
case 192:
            var14[2] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 114:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 90;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/native/UserProfileContent.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['PrimaryInfo'] = var2;
    return var1;
})();
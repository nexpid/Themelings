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
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 22;
        var1 = var10[var1];
        var4 = undefined;
        var2 = var9.bind(var4)(var1);
        var1 = var2.useUserProfileAnalyticsContext;
        var1 = var1.bind(var2)();
        var1 = var1.trackUserProfileAction;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot1;
        var1 = 23;
        var1 = var10[var1];
        var1 = var2.bind(var4)(var1);
        var1 = var1.bind(var4)();
        var1 = var1.newestAnalyticsLocation;
        var _closure2_slot2 = var1;
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
        var _closure2_slot3 = var1;
        var1 = 25;
        var1 = var10[var1];
        var2 = var2.bind(var4)(var1);
        var1 = var2.useName;
        var1 = var1.bind(var2)(var3);
        var _closure2_slot4 = var1;
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
            var6 = _closure2_slot4;
            var2['userDisplayName'] = var6;
            var5 = _closure2_slot3;
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
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var18 = var1.user;
            var _closure2_slot0 = var18;
            var15 = var1.channel;
            var _closure2_slot1 = var15;
            var16 = var1.displayProfile;
            var _closure2_slot2 = var16;
            var49 = var1.showUserProfileActionSheet;
            var _closure2_slot3 = var49;
            var44 = var1.disableCalls;
            var43 = var1.disableMessage;
            var26 = var1.disableStatus;
            var7 = var1.isPreviewingChanges;
            var _closure2_slot4 = var7;
            var41 = var1.location;
            var42 = var1.navigateToPremium;
            var _closure2_slot5 = var42;
            var24 = var1.navigateToShop;
            var _closure2_slot6 = var24;
            var35 = var1.initialSection;
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
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 15;
            var2 = var1[var2];
            var2 = var3.bind(var5)(var2);
            var20 = var2.bind(var5)();
            var _closure2_slot7 = var20;
            var2 = 43;
            var2 = var1[var2];
            var4 = var3.bind(var5)(var2);
            var2 = _closure1_slot17;
            var11 = var4.bind(var5)(var2);
            var2 = 44;
            var2 = var1[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var32 = var2.bottom;
            var3 = _closure1_slot0;
            var2 = 22;
            var2 = var1[var2];
            var4 = var3.bind(var5)(var2);
            var2 = var4.useUserProfileAnalyticsContext;
            var2 = var2.bind(var4)();
            var6 = var2.trackUserProfileAction;
            var _closure2_slot8 = var6;
            var2 = 16;
            var1 = var1[var2];
            var8 = var3.bind(var5)(var1);
            var4 = var8.useStateFromStores;
            var1 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var17 = var4.bind(var8)(var3, var1);
            var _closure2_slot9 = var17;
            var1 = null;
            var3 = var1 == var17;
            var4 = undefined;
            if(var3) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var4 = var17.id;
case 35:
            var3 = var18.id;
            var27 = var4 === var3;
            _closure2_slot10 = var27;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = var8[var2];
            var13 = var4.bind(var5)(var3);
            var10 = var13.useStateFromStoresObject;
            var3 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var3;
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
            var3 = var10.bind(var13)(var9, var3);
            var19 = var3.relationshipType;
            var50 = var3.originApplicationId;
            var3 = 45;
            var3 = var8[var3];
            var10 = var4.bind(var5)(var3);
            var9 = var10.useIncomingGameRelationshipsForUser;
            var3 = var18.id;
            var33 = var9.bind(var10)(var3);
            var3 = 46;
            var3 = var8[var3];
            var10 = var4.bind(var5)(var3);
            var9 = var10.useIsGameFriends;
            var3 = var18.id;
            var14 = var9.bind(var10)(var3);
            var3 = 47;
            var3 = var8[var3];
            var8 = var4.bind(var5)(var3);
            var4 = var8.useUserProfileGameFriendApplicationIds;
            var3 = {};
            var9 = var18.id;
            var3['userId'] = var9;
            var62 = var4.bind(var8)(var3);
            _closure2_slot11 = var62;
            if(!(var1 == var16)) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var3 = var1 == var15;
            var45 = undefined;
            if(var3) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var45 = var15.guild_id;
case 39:
            _fun0005_ip = 41; continue _fun0005;
case 37:
            var4 = var16.guildId;
            var8 = var1 != var4;
            var3 = undefined;
            if(!var8) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var3 = var4;
case 42:
            var45 = var3;
case 41:
            _closure2_slot12 = var45;
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 33;
            var3 = var8[var3];
            var8 = var4.bind(var5)(var3);
            var4 = var8.useName;
            var9 = var1 == var15;
            var3 = undefined;
            if(var9) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var3 = var15.id;
case 44:
            var61 = var4.bind(var8)(var45, var3, var18);
            _closure2_slot13 = var61;
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var4 = new Array(2);
            var4[0] = var45;
            var4[1] = var18;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot12;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var1 = _closure2_slot0;
                    if(!(var2 == var1)) { _fun0006_ip = 48; continue _fun0006 }
case 46:
                    var1 = {};
                    _fun0006_ip = 49; continue _fun0006;
case 48:
                    var2 = {};
                    var4 = _closure2_slot12;
                    var3 = _closure2_slot0;
                    var5 = var3.id;
                    var3 = new Array(1);
                    var3[0] = var5;
                    var2[3] = var3;
                    var1 = var2;
case 49:
                    return var1;
                }
            };
            var8 = var8.bind(var9)(var3, var4);
            var23 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 48;
            var3 = var9[var3];
            var4 = var23.bind(var5)(var3);
            var3 = var4.useSubscribeGuildMembers;
            var10 = 'UserProfileContent';
            var3 = var3.bind(var4)(var8, var10);
            var4 = _closure1_slot1;
            var3 = 49;
            var3 = var9[var3];
            var8 = var4.bind(var5)(var3);
            var3 = var18.id;
            var30 = var8.bind(var5)(var3);
            var3 = var9[var2];
            var21 = var23.bind(var5)(var3);
            var13 = var21.useStateFromStoresObject;
            var3 = _closure1_slot11;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getPendingChanges;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var13.bind(var21)(var8, var3);
            var56 = var3.pendingBanner;
            var28 = var3.pendingAvatar;
            var46 = var3.pendingAvatarDecoration;
            var54 = var3.pendingGlobalName;
            var53 = var3.pendingPronouns;
            var8 = var3.pendingBio;
            _closure2_slot14 = var8;
            var21 = var3.pendingAccentColor;
            var13 = var3.pendingThemeColors;
            var22 = var3.pendingLegacyUsernameDisabled;
            var51 = var3.pendingDisplayNameStyles;
            var3 = 50;
            var3 = var9[var3];
            var25 = var23.bind(var5)(var3);
            var23 = var25.getPendingAvatarSrc;
            var3 = {};
            var29 = var18.id;
            var3['userId'] = var29;
            var3['image'] = var28;
            var55 = var23.bind(var25)(var3);
            var3 = 32;
            var3 = var9[var3];
            var3 = var4.bind(var5)(var3);
            var52 = var3.bind(var5)(var16, var22);
            var3 = 51;
            var3 = var9[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['user'] = var18;
            var3['displayProfile'] = var16;
            var9 = undefined;
            if(!var7) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var9 = var13;
case 50:
            var3['pendingThemeColors'] = var9;
            var3 = var4.bind(var5)(var3);
            var28 = var3.theme;
            var57 = var3.primaryColor;
            var25 = var3.secondaryColor;
            var39 = var1 != var57;
            _closure2_slot15 = var39;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 52;
            var3 = var9[var3];
            var23 = var4.bind(var5)(var3);
            var22 = var23.useUserProfileColors;
            var3 = {};
            var3['theme'] = var28;
            var3['primaryColor'] = var57;
            var3['secondaryColor'] = var25;
            var3 = var22.bind(var23)(var3);
            var47 = var3.containerBackground;
            _closure2_slot16 = var47;
            var22 = var3.avatarBackground;
            var23 = var3.statusBackground;
            var25 = _closure1_slot1;
            var3 = 53;
            var3 = var9[var3];
            var3 = var25.bind(var5)(var3);
            var65 = var3.bind(var5)(var10);
            _closure2_slot17 = var65;
            var10 = _closure1_slot4;
            var3 = var10.useRef;
            var29 = var3.bind(var10)(var1);
            var10 = _closure1_slot4;
            var3 = var10.useRef;
            var38 = var3.bind(var10)(var1);
            var3 = var9[var2];
            var28 = var4.bind(var5)(var3);
            var25 = var28.useStateFromStores;
            var3 = _closure1_slot12;
            var10 = new Array(1);
            var10[0] = var3;
            var3 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getFirstWishlistId;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var60 = var25.bind(var28)(var10, var3);
            _closure2_slot18 = var60;
            var3 = 54;
            var3 = var9[var3];
            var25 = var4.bind(var5)(var3);
            var10 = var25.useFetchWishlist;
            var3 = {};
            var3['wishlistId'] = var60;
            var28 = var18.id;
            var3['userId'] = var28;
            var3 = var10.bind(var25)(var3);
            var2 = var9[var2];
            var28 = var4.bind(var5)(var2);
            var25 = var28.useStateFromStores;
            var2 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var2;
            var3 = new Array(1);
            var3[0] = var60;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot18;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                    var4 = _closure1_slot7;
                    var3 = var4.getWishlist;
                    var2 = _closure2_slot18;
                    var1 = var3.bind(var4)(var2);
case 52:
                    return var1;
                }
            };
            var2 = var25.bind(var28)(var10, var2, var3);
            _closure2_slot19 = var2;
            var3 = 55;
            var3 = var9[var3];
            var9 = var4.bind(var5)(var3);
            var4 = var9.useIsEligibleForSocialLayerStorefrontMobilePurchasing;
            var3 = {};
            var10 = 'user_profile_content';
            var3['location'] = var10;
            var3 = var4.bind(var9)(var3);
            _closure2_slot20 = var3;
            var10 = _closure1_slot4;
            var9 = var10.useMemo;
            var4 = new Array(3);
            var4[0] = var2;
            var4[1] = var27;
            var4[2] = var3;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot19;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var3 = _closure2_slot19;
                    var5 = var3.items;
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 56;
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
case 54:
                    if(!(var2 == var1)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var1 = new Array(0);
case 56:
                    return var1;
                }
            };
            var3 = var9.bind(var10)(var3, var4);
            var25 = var27;
            if(var25) { _fun0005_ip = 58; continue _fun0005 }
case 59:
            var2 = var1 != var2;
            if(!var2) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            var4 = var3.length;
            var3 = 0;
            var2 = var4 > var3;
case 60:
            var25 = var2;
case 58:
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var48 = 0;
            var2 = var2.bind(var3)(var48);
            var3 = _closure1_slot3;
            var4 = 2;
            var2 = var3.bind(var5)(var2, var4);
            var34 = var2[var48];
            var10 = 1;
            var2 = var2[var10];
            _closure2_slot21 = var2;
            var36 = _closure1_slot4;
            var28 = var36.useCallback;
            var9 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot21;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var2 = new Array(0);
            var28 = var28.bind(var36)(var9, var2);
            var36 = _closure1_slot4;
            var9 = var36.useRef;
            var2 = new Array(0);
            var2 = var9.bind(var36)(var2);
            _closure2_slot22 = var2;
            var9 = _closure1_slot4;
            var2 = var9.useState;
            var2 = var2.bind(var9)(var5);
            var2 = var3.bind(var5)(var2, var4);
            var40 = var2[var48];
            var2 = var2[var10];
            _closure2_slot23 = var2;
            var9 = _closure1_slot4;
            var3 = var9.useRef;
            var2 = _closure1_slot13;
            var36 = var2.WISHLIST;
            var2 = 0;
            if(!(var35 === var36)) { _fun0005_ip = 62; continue _fun0005 }
case 63:
            var2 = var10;
case 62:
            var2 = var3.bind(var9)(var2);
            _closure2_slot24 = var2;
            var36 = _closure1_slot4;
            var9 = var36.useCallback;
            var3 = function(arg1, arg2, arg3) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var5 = arg1;
                    var3 = arg3;
                    var1 = 0;
                    if(!(!(var3 <= var1))) { _fun0009_ip = 64; continue _fun0009 }
case 65:
                    var2 = _closure2_slot22;
                    var2 = var2.current;
                    var4 = var2[var5];
                    var2 = _closure2_slot22;
                    var2 = var2.current;
                    var2[var5] = var3;
                    var2 = _closure2_slot24;
                    var2 = var2.current;
                    var2 = var5 === var2;
                    if(!var2) { _fun0009_ip = 66; continue _fun0009 }
case 67:
                    var2 = var3 !== var4;
case 66:
                    if(!var2) { _fun0009_ip = 64; continue _fun0009 }
case 68:
                    var2 = _closure2_slot23;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 64:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = new Array(0);
            var59 = var9.bind(var36)(var3, var2);
            _closure2_slot25 = var59;
            var36 = _closure1_slot4;
            var3 = var36.useState;
            var9 = _closure1_slot13;
            var2 = var9.WISHLIST;
            var2 = var35 === var2;
            var3 = var3.bind(var36)(var2);
            var2 = _closure1_slot3;
            var3 = var2.bind(var5)(var3, var4);
            var2 = var3[var48];
            _closure2_slot26 = var2;
            var3 = var3[var10];
            _closure2_slot27 = var3;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var36 = 57;
            var36 = var4[var36];
            var58 = var3.bind(var5)(var36);
            var37 = var58.useWishlistViewerCoachmark;
            var36 = {};
            var36['isCurrentUser'] = var27;
            var36['shouldShowWishlistTab'] = var25;
            var36 = var37.bind(var58)(var36);
            var37 = var36.isVisible;
            _closure2_slot28 = var37;
            var36 = var36.markAsDismissed;
            _closure2_slot29 = var36;
            var64 = _closure1_slot4;
            var63 = var64.useCallback;
            var58 = new Array(3);
            var58[0] = var6;
            var58[1] = var37;
            var58[2] = var36;
            var6 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = arg1;
                    var1 = _closure2_slot24;
                    var1['current'] = var4;
                    var3 = _closure2_slot27;
                    var1 = 1;
                    var5 = var1 === var4;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var5);
                    var7 = _closure2_slot8;
                    var6 = {};
                    var3 = 'PRESS_SECTION';
                    var6['action'] = var3;
                    var9 = _closure1_slot13;
                    if(var5) { _fun0010_ip = 69; continue _fun0010 }
case 70:
                    var8 = var9.MAIN;
                    _fun0010_ip = 71; continue _fun0010;
case 69:
                    var8 = var9.WISHLIST;
case 71:
                    var6['section'] = var8;
                    var6 = var7.bind(var1)(var6);
                    if(!var5) { _fun0010_ip = 72; continue _fun0010 }
case 73:
                    var5 = _closure2_slot28;
case 72:
                    if(!var5) { _fun0010_ip = 74; continue _fun0010 }
case 75:
                    var5 = _closure2_slot29;
                    var3 = _closure1_slot18;
                    var3 = var3.INDIRECT_ACTION;
                    var3 = var5.bind(var1)(var3);
case 74:
                    var3 = _closure2_slot22;
                    var3 = var3.current;
                    var3 = var3[var4];
                    var4 = null;
                    if(!(var4 != var3)) { _fun0010_ip = 76; continue _fun0010 }
case 77:
                    var2 = _closure2_slot23;
                    var2 = var2.bind(var1)(var3);
case 76:
                    return var1;
                }
            };
            var6 = var63.bind(var64)(var6, var58);
            var64 = _closure1_slot4;
            var63 = var64.useCallback;
            var58 = new Array(1);
            var58[0] = var42;
            var42 = function() {
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
                    if(!(var3 != var4)) { _fun0011_ip = 49; continue _fun0011 }
case 78:
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)();
case 49:
                    return var1;
                }
            };
            var64 = var63.bind(var64)(var42, var58);
            _closure2_slot30 = var64;
            var63 = _closure1_slot4;
            var58 = var63.useCallback;
            var42 = new Array(1);
            var42[0] = var24;
            var24 = function() {
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
                    if(!(var3 != var4)) { _fun0012_ip = 49; continue _fun0012 }
case 78:
                    var2 = _closure2_slot6;
                    var2 = var2.bind(var1)();
case 49:
                    return var1;
                }
            };
            var63 = var58.bind(var63)(var24, var42);
            _closure2_slot31 = var63;
            var58 = _closure1_slot4;
            var42 = var58.useCallback;
            var24 = new Array(16);
            var24[0] = var18;
            var24[1] = var17;
            var24[2] = var47;
            var24[3] = var20;
            var24[4] = var7;
            var24[5] = var65;
            var24[6] = var64;
            var24[7] = var63;
            var24[8] = var39;
            var24[9] = var45;
            var24[10] = var62;
            var24[11] = var16;
            var24[12] = var61;
            var24[13] = var8;
            var24[14] = var15;
            var24[15] = var49;
            var8 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0013_ip = 79; continue _fun0013 }
case 53:
                    var2 = _closure2_slot9;
                    if(!(var1 != var2)) { _fun0013_ip = 79; continue _fun0013 }
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
                    if(var6) { _fun0013_ip = 80; continue _fun0013 }
case 81:
                    var6 = _closure2_slot2;
                    var7 = var6.private;
case 80:
                    if(!var7) { _fun0013_ip = 82; continue _fun0013 }
case 83:
                    var10 = _closure1_slot19;
                    var9 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var6 = 58;
                    var6 = var12[var6];
                    var9 = var9.bind(var2)(var6);
                    var6 = {};
                    var12 = _closure2_slot13;
                    var6['username'] = var12;
                    var12 = _closure2_slot16;
                    var6['containerBackground'] = var12;
                    var7 = var10.bind(var2)(var9, var6);
case 82:
                    var6 = new Array(14);
                    var6[0] = var7;
                    var7 = _closure2_slot0;
                    var7 = var7.isProvisional;
                    if(!var7) { _fun0013_ip = 84; continue _fun0013 }
case 85:
                    var12 = _closure1_slot19;
                    var10 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var9 = 59;
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
case 84:
                    var6[1] = var7;
                    var7 = _closure2_slot0;
                    var9 = var7.id;
                    var7 = _closure2_slot9;
                    var7 = var7.id;
                    var7 = var9 === var7;
                    if(!var7) { _fun0013_ip = 86; continue _fun0013 }
case 87:
                    var9 = _closure2_slot4;
                    var7 = !var9;
case 86:
                    if(!var7) { _fun0013_ip = 88; continue _fun0013 }
case 89:
                    var12 = _closure1_slot19;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 60;
                    var9 = var14[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = {};
                    var14 = _closure2_slot30;
                    var9['navigateToPremium'] = var14;
                    var14 = _closure2_slot31;
                    var9['navigateToShop'] = var14;
                    var14 = _closure2_slot15;
                    var9['hasCustomProfileTheme'] = var14;
                    var7 = var12.bind(var2)(var10, var9);
case 88:
                    var6[2] = var7;
                    var10 = _closure1_slot19;
                    var9 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var7 = 61;
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
                    var7 = _closure2_slot17;
                    if(!var7) { _fun0013_ip = 90; continue _fun0013 }
case 91:
                    var12 = _closure1_slot19;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 62;
                    var9 = var14[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = {};
                    var7 = var12.bind(var2)(var10, var9);
case 90:
                    var6[4] = var7;
                    var7 = _closure2_slot11;
                    var9 = var7.length;
                    var7 = 0;
                    var7 = var9 > var7;
                    if(!var7) { _fun0013_ip = 92; continue _fun0013 }
case 93:
                    var12 = _closure1_slot19;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 63;
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
                    if(var15) { _fun0013_ip = 38; continue _fun0013 }
case 94:
                    var14 = var13;
case 38:
                    var9['style'] = var14;
                    var7 = var12.bind(var2)(var10, var9);
case 92:
                    var6[5] = var7;
                    var10 = _closure1_slot19;
                    var9 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var7 = 64;
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
                    if(!var14) { _fun0013_ip = 45; continue _fun0013 }
case 95:
                    var12 = _closure2_slot14;
case 45:
                    var7['pendingBio'] = var12;
                    var14 = _closure2_slot17;
                    var12 = undefined;
                    if(var14) { _fun0013_ip = 96; continue _fun0013 }
case 97:
                    var12 = var13;
case 96:
                    var7['style'] = var12;
                    var7 = var10.bind(var2)(var9, var7);
                    var6[6] = var7;
                    var7 = _closure2_slot17;
                    if(!var7) { _fun0013_ip = 98; continue _fun0013 }
case 99:
                    var12 = _closure1_slot19;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 62;
                    var9 = var14[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = {};
                    var7 = var12.bind(var2)(var10, var9);
case 98:
                    var6[7] = var7;
                    var7 = _closure2_slot12;
                    var7 = var1 != var7;
                    if(!var7) { _fun0013_ip = 100; continue _fun0013 }
case 101:
                    var12 = _closure1_slot19;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 65;
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
                    if(var15) { _fun0013_ip = 102; continue _fun0013 }
case 103:
                    var14 = var13;
case 102:
                    var9['style'] = var14;
                    var7 = var12.bind(var2)(var10, var9);
case 100:
                    var6[8] = var7;
                    var7 = _closure2_slot1;
                    var9 = var1 == var7;
                    var7 = undefined;
                    if(var9) { _fun0013_ip = 104; continue _fun0013 }
case 105:
                    var9 = _closure2_slot1;
                    var7 = var9.guild_id;
case 104:
                    var7 = var1 != var7;
                    if(!var7) { _fun0013_ip = 106; continue _fun0013 }
case 107:
                    var12 = _closure1_slot19;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 66;
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
                    if(var15) { _fun0013_ip = 108; continue _fun0013 }
case 109:
                    var14 = var13;
case 108:
                    var9['style'] = var14;
                    var7 = var12.bind(var2)(var10, var9);
case 106:
                    var6[9] = var7;
                    var7 = _closure2_slot17;
                    if(!var7) { _fun0013_ip = 110; continue _fun0013 }
case 111:
                    var12 = _closure1_slot19;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 62;
                    var9 = var14[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = {};
                    var7 = var12.bind(var2)(var10, var9);
case 110:
                    var6[10] = var7;
                    var10 = _closure1_slot19;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var12 = 67;
                    var7 = var7[var12];
                    var7 = var9.bind(var2)(var7);
                    var9 = var7.UserProfileAccountConnectionsCard;
                    var7 = {};
                    var14 = _closure2_slot0;
                    var14 = var14.id;
                    var7['userId'] = var14;
                    var15 = _closure2_slot17;
                    var14 = undefined;
                    if(var15) { _fun0013_ip = 112; continue _fun0013 }
case 113:
                    var14 = var13;
case 112:
                    var7['style'] = var14;
                    var7 = var10.bind(var2)(var9, var7);
                    var6[11] = var7;
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
                    if(var14) { _fun0013_ip = 114; continue _fun0013 }
case 115:
                    var12 = var13;
case 114:
                    var7['style'] = var12;
                    var7 = var10.bind(var2)(var9, var7);
                    var6[12] = var7;
                    var7 = _closure2_slot4;
                    var7 = !var7;
                    if(!var7) { _fun0013_ip = 116; continue _fun0013 }
case 117:
                    var10 = _closure1_slot19;
                    var9 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var8 = 68;
                    var8 = var12[var8];
                    var9 = var9.bind(var2)(var8);
                    var8 = {};
                    var12 = _closure2_slot0;
                    var12 = var12.id;
                    var8['userId'] = var12;
                    var14 = _closure2_slot17;
                    var12 = undefined;
                    if(var14) { _fun0013_ip = 118; continue _fun0013 }
case 119:
                    var12 = var13;
case 118:
                    var8['style'] = var12;
                    var11 = _closure2_slot3;
                    var8['onBack'] = var11;
                    var7 = var10.bind(var2)(var9, var8);
case 116:
                    var6[13] = var7;
                    var3['children'] = var6;
                    var2 = var5.bind(var2)(var4, var3);
                    return var2;
case 79:
                    return var1;
                }
            };
            var24 = var42.bind(var58)(var8, var24);
            _closure2_slot32 = var24;
            var58 = _closure1_slot4;
            var42 = var58.useCallback;
            var61 = var20.profileContent;
            var8 = new Array(3);
            var8[0] = var61;
            var8[1] = var60;
            var8[2] = var2;
            var2 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var4 = _closure1_slot19;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var1 = _closure2_slot7;
                    var1 = var1.profileContent;
                    var2['style'] = var1;
                    var6 = _closure2_slot18;
                    var1 = null;
                    if(!(var1 != var6)) { _fun0014_ip = 120; continue _fun0014 }
case 121:
                    var8 = _closure1_slot19;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 69;
                    var1 = var7[var1];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var1);
                    var1 = {};
                    var10 = _closure2_slot18;
                    var1['wishlistId'] = var10;
                    var10 = _closure1_slot17;
                    var1['maxWidth'] = var10;
                    var9 = _closure2_slot26;
                    var1['isVisible'] = var9;
                    var1 = var8.bind(var7)(var6, var1);
                    _fun0014_ip = 122; continue _fun0014;
case 120:
                    var8 = _closure1_slot19;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 69;
                    var5 = var7[var5];
                    var7 = undefined;
                    var5 = var6.bind(var7)(var5);
                    var6 = var5.WishlistEmptyState;
                    var5 = {};
                    var1 = var8.bind(var7)(var6, var5);
case 122:
                    var2['children'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var2 = var42.bind(var58)(var2, var8);
            _closure2_slot33 = var2;
            var58 = _closure1_slot4;
            var42 = var58.useMemo;
            var8 = new Array(3);
            var8[0] = var59;
            var8[1] = var24;
            var8[2] = var2;
            var2 = function() {
                var2 = {};
                var1 = 'main';
                var2['id'] = var1;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 28;
                var1 = var13[var4];
                var6 = undefined;
                var1 = var12.bind(var6)(var1);
                var7 = var1.intl;
                var5 = var7.string;
                var1 = var13[var4];
                var1 = var12.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.LXw470;
                var1 = var5.bind(var7)(var1);
                var2['label'] = var1;
                var10 = _closure1_slot19;
                var5 = _closure1_slot5;
                var1 = {};
                var9 = false;
                var1['scrollEnabled'] = var9;
                var7 = function onContentSizeChange(arg1, arg2) {
                    var5 = _closure2_slot25;
                    var4 = undefined;
                    var3 = 0;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var1['onContentSizeChange'] = var7;
                var11 = _closure2_slot32;
                var11 = var11.bind(var6)();
                var1['children'] = var11;
                var1 = var10.bind(var6)(var5, var1);
                var2['page'] = var1;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var10 = 'wishlist';
                var2['id'] = var10;
                var10 = var13[var4];
                var10 = var12.bind(var6)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var4 = var13[var4];
                var4 = var12.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4["7lZ31J"];
                var4 = var10.bind(var11)(var4);
                var2['label'] = var4;
                var4 = _closure1_slot19;
                var3 = {};
                var3['scrollEnabled'] = var9;
                var8 = function onContentSizeChange(arg1, arg2) {
                    var5 = _closure2_slot25;
                    var4 = undefined;
                    var3 = 1;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var3['onContentSizeChange'] = var8;
                var7 = _closure2_slot33;
                var7 = var7.bind(var6)();
                var3['children'] = var7;
                var3 = var4.bind(var6)(var5, var3);
                var2['page'] = var3;
                var1[1] = var2;
                return var1;
            };
            var8 = var42.bind(var58)(var2, var8);
            var2 = 70;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useSegmentedControlState;
            var2 = {};
            var2['pageWidth'] = var34;
            var34 = var9.WISHLIST;
            var9 = 0;
            if(!(var35 === var34)) { _fun0005_ip = 123; continue _fun0005 }
case 124:
            var9 = var10;
case 123:
            var2['defaultIndex'] = var9;
            var10 = _closure1_slot1;
            var34 = _closure1_slot2;
            var9 = 41;
            var9 = var34[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.space;
            var9 = var9.PX_24;
            var2['itemSpacing'] = var9;
            var2['items'] = var8;
            var2['onPageChange'] = var6;
            var42 = var3.bind(var4)(var2);
            _closure2_slot34 = var42;
            var6 = _closure1_slot4;
            var4 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var42;
            var3[1] = var36;
            var2 = function() {
                var4 = _closure2_slot34;
                var3 = var4.setActiveIndex;
                var2 = 1;
                var2 = var3.bind(var4)(var2);
                var3 = _closure2_slot29;
                var1 = _closure1_slot18;
                var2 = var1.TAKE_ACTION;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var35 = var4.bind(var6)(var2, var3);
            if(!(var1 != var18)) { _fun0005_ip = 125; continue _fun0005 }
case 126:
            if(!(var1 != var17)) { _fun0005_ip = 125; continue _fun0005 }
case 127:
            var34 = {};
            var34['backgroundColor'] = var47;
            _closure2_slot35 = var34;
            var4 = _closure1_slot20;
            var3 = _closure1_slot21;
            var2 = {};
            var6 = var1 == var16;
            var8 = undefined;
            if(var6) { _fun0005_ip = 128; continue _fun0005 }
case 129:
            var8 = var16.private;
case 128:
            var6 = true;
            var8 = var6 === var8;
            if(!var8) { _fun0005_ip = 130; continue _fun0005 }
case 131:
            var10 = _closure1_slot19;
            var9 = _closure1_slot1;
            var58 = _closure1_slot2;
            var6 = 71;
            var6 = var58[var6];
            var9 = var9.bind(var5)(var6);
            var6 = {};
            var6['primaryColor'] = var57;
            var8 = var10.bind(var5)(var9, var6);
case 130:
            var6 = new Array(4);
            var6[0] = var8;
            var10 = _closure1_slot19;
            var9 = _closure1_slot1;
            var57 = _closure1_slot2;
            var8 = 72;
            var8 = var57[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var8['user'] = var18;
            var8['displayProfile'] = var16;
            var8['bannerHeight'] = var11;
            var11 = undefined;
            if(!var7) { _fun0005_ip = 132; continue _fun0005 }
case 133:
            var11 = var56;
case 132:
            var8['pendingBanner'] = var11;
            var11 = undefined;
            if(!var7) { _fun0005_ip = 134; continue _fun0005 }
case 135:
            var11 = var55;
case 134:
            var8['pendingAvatarSrc'] = var11;
            var11 = undefined;
            if(!var7) { _fun0005_ip = 136; continue _fun0005 }
case 137:
            var56 = var1 != var21;
            var11 = undefined;
            if(!var56) { _fun0005_ip = 136; continue _fun0005 }
case 138:
            var11 = var21;
case 136:
            var8['pendingAccentColor'] = var11;
            var11 = undefined;
            if(!var7) { _fun0005_ip = 139; continue _fun0005 }
case 140:
            var21 = var1 != var13;
            var11 = undefined;
            if(!var21) { _fun0005_ip = 139; continue _fun0005 }
case 141:
            var11 = var13;
case 139:
            var8['pendingThemeColors'] = var11;
            var8['disableInteraction'] = var7;
            var8 = var10.bind(var5)(var9, var8);
            var6[1] = var8;
            var10 = _closure1_slot20;
            var9 = _closure1_slot6;
            var8 = {};
            var21 = _closure1_slot19;
            var13 = _closure1_slot1;
            var56 = _closure1_slot2;
            var11 = 73;
            var11 = var56[var11];
            var13 = var13.bind(var5)(var11);
            var11 = {};
            var11['user'] = var18;
            var11['guildId'] = var45;
            var11['disableStatus'] = var26;
            var26 = undefined;
            if(!var7) { _fun0005_ip = 142; continue _fun0005 }
case 143:
            var26 = var55;
case 142:
            var11['pendingAvatarSrc'] = var26;
            var26 = undefined;
            if(!var7) { _fun0005_ip = 144; continue _fun0005 }
case 145:
            var26 = var46;
case 144:
            var11['pendingAvatarDecoration'] = var26;
            var11['backgroundColor'] = var22;
            var22 = {};
            var22['backgroundColor'] = var23;
            var11['statusStyle'] = var22;
            var13 = var21.bind(var5)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var22 = _closure1_slot20;
            var21 = _closure1_slot6;
            var13 = {};
            var26 = var20.profileContentWrapper;
            var23 = new Array(2);
            var23[0] = var26;
            var26 = {};
            if(!var27) { _fun0005_ip = 146; continue _fun0005 }
case 147:
            var27 = 0;
            if(!var7) { _fun0005_ip = 148; continue _fun0005 }
case 146:
            var46 = var1 != var30;
            var27 = 0;
            if(var46) { _fun0005_ip = 148; continue _fun0005 }
case 149:
            var27 = _closure1_slot15;
case 148:
            var26['paddingTop'] = var27;
            var27 = _closure1_slot14;
            var27 = var32 + var27;
            var26['paddingBottom'] = var27;
            var23[1] = var26;
            var13['style'] = var23;
            var27 = _closure1_slot19;
            var26 = _closure1_slot22;
            var23 = {};
            var23['customStatusActivity'] = var30;
            var23['user'] = var18;
            var23['guildId'] = var45;
            var32 = var1 == var15;
            var30 = undefined;
            if(var32) { _fun0005_ip = 150; continue _fun0005 }
case 151:
            var30 = var15.id;
case 150:
            var23['channelId'] = var30;
            var23['hasCustomProfileTheme'] = var39;
            var23['showUserProfileActionSheet'] = var49;
            var23['isPreviewingChanges'] = var7;
            var23['bubbleRef'] = var29;
            var26 = var27.bind(var5)(var26, var23);
            var23 = new Array(3);
            var23[0] = var26;
            var29 = _closure1_slot20;
            var27 = _closure1_slot6;
            var26 = {};
            var32 = var20.primaryInfo;
            var30 = new Array(2);
            var30[0] = var32;
            var32 = var20.profileContent;
            var30[1] = var32;
            var26['style'] = var30;
            var46 = _closure1_slot19;
            var32 = _closure1_slot25;
            var30 = {};
            var30['user'] = var18;
            var55 = var1 == var15;
            var48 = undefined;
            if(var55) { _fun0005_ip = 152; continue _fun0005 }
case 153:
            var48 = var15.id;
case 152:
            var30['channelId'] = var48;
            var30['displayProfile'] = var16;
            var48 = undefined;
            if(!var7) { _fun0005_ip = 154; continue _fun0005 }
case 155:
            var48 = var54;
case 154:
            var30['displayNameOverride'] = var48;
            var48 = undefined;
            if(!var7) { _fun0005_ip = 156; continue _fun0005 }
case 157:
            var48 = var53;
case 156:
            var30['pronounsOverride'] = var48;
            var48 = undefined;
            if(!var7) { _fun0005_ip = 158; continue _fun0005 }
case 159:
            var48 = var52;
case 158:
            var30['badgesOverride'] = var48;
            var48 = undefined;
            if(!var7) { _fun0005_ip = 160; continue _fun0005 }
case 161:
            var48 = var51;
case 160:
            var30['pendingDisplayNameStyles'] = var48;
            var30['badgeContainerBackground'] = var47;
            var30['isPreviewingChanges'] = var7;
            var32 = var46.bind(var5)(var32, var30);
            var30 = new Array(7);
            var30[0] = var32;
            var46 = var18.id;
            var32 = var17.id;
            var32 = var46 !== var32;
            if(!var32) { _fun0005_ip = 162; continue _fun0005 }
case 163:
            var48 = _closure1_slot19;
            var47 = _closure1_slot1;
            var51 = _closure1_slot2;
            var46 = 74;
            var46 = var51[var46];
            var47 = var47.bind(var5)(var46);
            var46 = {};
            var46['user'] = var18;
            var46['guildId'] = var45;
            var32 = var48.bind(var5)(var47, var46);
case 162:
            var30[1] = var32;
            var32 = _closure1_slot16;
            var32 = var32.PENDING_INCOMING;
            var32 = var19 === var32;
            if(!var32) { _fun0005_ip = 164; continue _fun0005 }
case 165:
            var48 = _closure1_slot19;
            var47 = _closure1_slot1;
            var51 = _closure1_slot2;
            var46 = 75;
            var46 = var51[var46];
            var47 = var47.bind(var5)(var46);
            var46 = {};
            var46['user'] = var18;
            var52 = var1 == var15;
            var51 = undefined;
            if(var52) { _fun0005_ip = 166; continue _fun0005 }
case 167:
            var51 = var15.id;
case 166:
            var46['channelId'] = var51;
            var46['guildId'] = var45;
            var46['applicationId'] = var50;
            var46['style'] = var34;
            var46['showUserProfile'] = var49;
            var32 = var48.bind(var5)(var47, var46);
case 164:
            var30[2] = var32;
            var32 = var33.map;
            var31 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot19;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 75;
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
                    if(var8) { _fun0015_ip = 168; continue _fun0015 }
case 169:
                    var8 = _closure2_slot1;
                    var7 = var8.id;
case 168:
                    var2['channelId'] = var7;
                    var7 = _closure2_slot12;
                    var2['guildId'] = var7;
                    var7 = _closure2_slot35;
                    var2['style'] = var7;
                    var6 = _closure2_slot3;
                    var2['showUserProfile'] = var6;
                    var1 = var1.applicationId;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var31 = var32.bind(var33)(var31);
            var30[3] = var31;
            var33 = _closure1_slot19;
            var32 = _closure1_slot1;
            var46 = _closure1_slot2;
            var31 = 76;
            var31 = var46[var31];
            var32 = var32.bind(var5)(var31);
            var31 = {};
            var31['user'] = var18;
            var31['style'] = var34;
            var31 = var33.bind(var5)(var32, var31);
            var30[4] = var31;
            var32 = var18.id;
            var31 = var17.id;
            var31 = var32 === var31;
            if(!var31) { _fun0005_ip = 170; continue _fun0005 }
case 171:
            var31 = !var7;
case 170:
            if(!var31) { _fun0005_ip = 172; continue _fun0005 }
case 173:
            var34 = _closure1_slot19;
            var33 = _closure1_slot26;
            var32 = {};
            var32['guildId'] = var45;
            var31 = var34.bind(var5)(var33, var32);
case 172:
            var30[5] = var31;
            var32 = var18.id;
            var31 = var17.id;
            var31 = var32 !== var31;
            if(!var31) { _fun0005_ip = 174; continue _fun0005 }
case 175:
            var34 = _closure1_slot19;
            var33 = _closure1_slot1;
            var45 = _closure1_slot2;
            var32 = 77;
            var32 = var45[var32];
            var33 = var33.bind(var5)(var32);
            var32 = {};
            var32['user'] = var18;
            if(var44) { _fun0005_ip = 176; continue _fun0005 }
case 177:
            var45 = _closure1_slot16;
            var45 = var45.BLOCKED;
            var44 = var19 === var45;
case 176:
            if(var44) { _fun0005_ip = 178; continue _fun0005 }
case 179:
            var44 = var18.isProvisional;
case 178:
            var32['disableCalls'] = var44;
            var32['disableMessage'] = var43;
            var32['location'] = var41;
            var32['hasCustomProfileTheme'] = var39;
            var39 = var20.primaryButtons;
            var32['style'] = var39;
            var31 = var34.bind(var5)(var33, var32);
case 174:
            var30[6] = var31;
            var26['children'] = var30;
            var26 = var29.bind(var5)(var27, var26);
            var23[1] = var26;
            if(var25) { _fun0005_ip = 180; continue _fun0005 }
case 181:
            var24 = var24.bind(var5)();
            _fun0005_ip = 182; continue _fun0005;
case 180:
            var27 = _closure1_slot19;
            var26 = _closure1_slot6;
            var25 = {};
            var25['onLayout'] = var28;
            var30 = _closure1_slot20;
            var33 = _closure1_slot0;
            var39 = _closure1_slot2;
            var28 = 78;
            var28 = var39[var28];
            var28 = var33.bind(var5)(var28);
            var29 = var28.LayerScope;
            var28 = {};
            var31 = {};
            var32 = var20.profileTablist;
            var31['style'] = var32;
            var34 = _closure1_slot19;
            var32 = 79;
            var32 = var39[var32];
            var32 = var33.bind(var5)(var32);
            var33 = var32.Tabs;
            var32 = {};
            var32['state'] = var42;
            var33 = var34.bind(var5)(var33, var32);
            var32 = new Array(2);
            var32[0] = var33;
            var34 = _closure1_slot19;
            var33 = {};
            var33['ref'] = var38;
            var39 = {'position': 'absolute', 'left': '50%', 'top': 0, 'right': 0, 'bottom': 0};
            var33['style'] = var39;
            var39 = false;
            var33['collapsable'] = var39;
            var39 = 'box-none';
            var33['pointerEvents'] = var39;
            var33 = var34.bind(var5)(var26, var33);
            var32[1] = var33;
            var31['children'] = var32;
            var32 = var30.bind(var5)(var26, var31);
            var31 = new Array(3);
            var31[0] = var32;
            var33 = _closure1_slot19;
            var32 = {};
            var39 = var1 != var40;
            var34 = undefined;
            if(!var39) { _fun0005_ip = 183; continue _fun0005 }
case 184:
            var39 = {};
            var39['height'] = var40;
            var34 = var39;
case 183:
            var32['style'] = var34;
            var41 = _closure1_slot19;
            var40 = _closure1_slot0;
            var39 = _closure1_slot2;
            var34 = 80;
            var34 = var39[var34];
            var34 = var40.bind(var5)(var34);
            var40 = var34.SegmentedControlPages;
            var34 = {};
            var34['state'] = var42;
            var34 = var41.bind(var5)(var40, var34);
            var32['children'] = var34;
            var32 = var33.bind(var5)(var26, var32);
            var31[1] = var32;
            var34 = _closure1_slot19;
            var33 = _closure1_slot1;
            var32 = 81;
            var32 = var39[var32];
            var33 = var33.bind(var5)(var32);
            var32 = {};
            var32['anchorRef'] = var38;
            var32['isVisible'] = var37;
            var32['markAsDismissed'] = var36;
            var32['onViewWishlist'] = var35;
            var32 = var34.bind(var5)(var33, var32);
            var31[2] = var32;
            var28['children'] = var31;
            var28 = var30.bind(var5)(var29, var28);
            var25['children'] = var28;
            var24 = var27.bind(var5)(var26, var25);
case 182:
            var23[2] = var24;
            var13['children'] = var23;
            var13 = var22.bind(var5)(var21, var13);
            var11[1] = var13;
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var6[2] = var8;
            var7 = !var7;
            if(!var7) { _fun0005_ip = 185; continue _fun0005 }
case 186:
            var10 = _closure1_slot20;
            var9 = _closure1_slot6;
            var8 = {};
            var13 = var20.bannerButtons;
            var11 = new Array(2);
            var11[0] = var13;
            var21 = var1 == var16;
            var13 = undefined;
            if(var21) { _fun0005_ip = 187; continue _fun0005 }
case 188:
            var13 = var16.private;
case 187:
            if(!var13) { _fun0005_ip = 189; continue _fun0005 }
case 190:
            var13 = var20.bannerButtonsWithPrivateBanner;
case 189:
            var11[1] = var13;
            var8['style'] = var11;
            var20 = var18.id;
            var11 = var17.id;
            var13 = null;
            if(!(var20 !== var11)) { _fun0005_ip = 191; continue _fun0005 }
case 192:
            var11 = var18.bot;
            var13 = null;
            if(var11) { _fun0005_ip = 191; continue _fun0005 }
case 193:
            var11 = _closure1_slot16;
            var11 = var11.FRIEND;
            if(!(var19 !== var11)) { _fun0005_ip = 194; continue _fun0005 }
case 195:
            var11 = null;
            if(!var14) { _fun0005_ip = 196; continue _fun0005 }
case 197:
            var20 = _closure1_slot19;
            var19 = _closure1_slot24;
            var14 = {};
            var14['user'] = var18;
            var11 = var20.bind(var5)(var19, var14);
case 196:
            _fun0005_ip = 198; continue _fun0005;
case 194:
            var20 = _closure1_slot19;
            var19 = _closure1_slot23;
            var14 = {};
            var14['user'] = var18;
            var11 = var20.bind(var5)(var19, var14);
case 198:
            var13 = var11;
case 191:
            var11 = new Array(2);
            var11[0] = var13;
            var14 = _closure1_slot19;
            var13 = _closure1_slot1;
            var19 = _closure1_slot2;
            var12 = 82;
            var12 = var19[var12];
            var13 = var13.bind(var5)(var12);
            var12 = {};
            var12['user'] = var18;
            var12['currentUser'] = var17;
            var12['displayProfile'] = var16;
            var12['channel'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var11[1] = var12;
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 185:
            var6[3] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 125:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 83;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/native/UserProfileContent.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['PrimaryInfo'] = var2;
    return var1;
})();
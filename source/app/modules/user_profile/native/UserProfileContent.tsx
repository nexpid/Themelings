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
            var39 = var1.user;
            var _closure2_slot0 = var39;
            var50 = var1.channel;
            var _closure2_slot1 = var50;
            var46 = var1.displayProfile;
            var _closure2_slot2 = var46;
            var47 = var1.showUserProfileActionSheet;
            var _closure2_slot3 = var47;
            var38 = var1.disableCalls;
            var37 = var1.disableMessage;
            var17 = var1.disableStatus;
            var31 = var1.isPreviewingChanges;
            var _closure2_slot4 = var31;
            var35 = var1.location;
            var63 = var1.navigateToPremium;
            var _closure2_slot5 = var63;
            var33 = var1.navigateToShop;
            var _closure2_slot6 = var33;
            var62 = var1.initialSection;
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
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 15;
            var2 = var1[var2];
            var2 = var3.bind(var5)(var2);
            var24 = var2.bind(var5)();
            var _closure2_slot7 = var24;
            var2 = 43;
            var2 = var1[var2];
            var4 = var3.bind(var5)(var2);
            var2 = _closure1_slot17;
            var57 = var4.bind(var5)(var2);
            var2 = 44;
            var2 = var1[var2];
            var4 = var3.bind(var5)(var2);
            var2 = {};
            var2['scrollPosition'] = var6;
            var2['bannerHeight'] = var57;
            var2 = var4.bind(var5)(var2);
            var25 = var2.bannerAnimatedStyle;
            var12 = var2.bannerImageAnimatedStyle;
            var10 = var2.contentAnimatedStyle;
            var11 = var2.blurAnimatedProps;
            var9 = var2.showBlur;
            var2 = 45;
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
            var26 = var2.trackUserProfileAction;
            var _closure2_slot8 = var26;
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
            var22 = var4.bind(var6)(var3, var1);
            var _closure2_slot9 = var22;
            var1 = null;
            var3 = var1 == var22;
            var4 = undefined;
            if(var3) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var4 = var22.id;
case 35:
            var3 = var39.id;
            var18 = var4 === var3;
            _closure2_slot10 = var18;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = var6[var2];
            var13 = var4.bind(var5)(var3);
            var8 = var13.useStateFromStoresObject;
            var3 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var3;
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
            var3 = var8.bind(var13)(var7, var3);
            var41 = var3.relationshipType;
            var48 = var3.originApplicationId;
            var3 = 46;
            var3 = var6[var3];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useIncomingGameRelationshipsForUser;
            var3 = var39.id;
            var40 = var7.bind(var8)(var3);
            var3 = 47;
            var3 = var6[var3];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useIsGameFriends;
            var3 = var39.id;
            var58 = var7.bind(var8)(var3);
            var3 = 48;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.useUserProfileGameFriendApplicationIds;
            var3 = {};
            var7 = var39.id;
            var3['userId'] = var7;
            var68 = var4.bind(var6)(var3);
            _closure2_slot11 = var68;
            if(!(var1 == var46)) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var3 = var1 == var50;
            var42 = undefined;
            if(var3) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var42 = var50.guild_id;
case 39:
            _fun0005_ip = 41; continue _fun0005;
case 37:
            var4 = var46.guildId;
            var6 = var1 != var4;
            var3 = undefined;
            if(!var6) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var3 = var4;
case 42:
            var42 = var3;
case 41:
            _closure2_slot12 = var42;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 33;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.useName;
            var7 = var1 == var50;
            var3 = undefined;
            if(var7) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var3 = var50.id;
case 44:
            var67 = var4.bind(var6)(var42, var3, var39);
            _closure2_slot13 = var67;
            var7 = _closure1_slot4;
            var6 = var7.useMemo;
            var4 = new Array(2);
            var4[0] = var42;
            var4[1] = var39;
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
            var8 = var6.bind(var7)(var3, var4);
            var13 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 49;
            var3 = var6[var3];
            var4 = var13.bind(var5)(var3);
            var3 = var4.useSubscribeGuildMembers;
            var7 = 'UserProfileContent';
            var3 = var3.bind(var4)(var8, var7);
            var4 = _closure1_slot1;
            var3 = 50;
            var3 = var6[var3];
            var8 = var4.bind(var5)(var3);
            var3 = var39.id;
            var21 = var8.bind(var5)(var3);
            var3 = var6[var2];
            var15 = var13.bind(var5)(var3);
            var14 = var15.useStateFromStoresObject;
            var3 = _closure1_slot11;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getPendingChanges;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var14.bind(var15)(var8, var3);
            var61 = var3.pendingBanner;
            var16 = var3.pendingAvatar;
            var44 = var3.pendingAvatarDecoration;
            var53 = var3.pendingGlobalName;
            var52 = var3.pendingPronouns;
            var15 = var3.pendingBio;
            _closure2_slot14 = var15;
            var60 = var3.pendingAccentColor;
            var59 = var3.pendingThemeColors;
            var8 = var3.pendingLegacyUsernameDisabled;
            var49 = var3.pendingDisplayNameStyles;
            var3 = 51;
            var3 = var6[var3];
            var14 = var13.bind(var5)(var3);
            var13 = var14.getPendingAvatarSrc;
            var3 = {};
            var19 = var39.id;
            var3['userId'] = var19;
            var3['image'] = var16;
            var55 = var13.bind(var14)(var3);
            var3 = 32;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var51 = var3.bind(var5)(var46, var8);
            var3 = 52;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['user'] = var39;
            var3['displayProfile'] = var46;
            var6 = undefined;
            if(!var31) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var6 = var59;
case 50:
            var3['pendingThemeColors'] = var6;
            var3 = var4.bind(var5)(var3);
            var16 = var3.theme;
            var56 = var3.primaryColor;
            var14 = var3.secondaryColor;
            var34 = var1 != var56;
            _closure2_slot15 = var34;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 53;
            var3 = var6[var3];
            var13 = var4.bind(var5)(var3);
            var8 = var13.useUserProfileColors;
            var3 = {};
            var3['theme'] = var16;
            var3['primaryColor'] = var56;
            var3['secondaryColor'] = var14;
            var3 = var8.bind(var13)(var3);
            var45 = var3.containerBackground;
            _closure2_slot16 = var45;
            var13 = var3.avatarBackground;
            var14 = var3.statusBackground;
            var8 = _closure1_slot1;
            var3 = 54;
            var3 = var6[var3];
            var3 = var8.bind(var5)(var3);
            var71 = var3.bind(var5)(var7);
            _closure2_slot17 = var71;
            var7 = _closure1_slot4;
            var3 = var7.useRef;
            var20 = var3.bind(var7)(var1);
            var7 = _closure1_slot4;
            var3 = var7.useRef;
            var29 = var3.bind(var7)(var1);
            var3 = var6[var2];
            var16 = var4.bind(var5)(var3);
            var8 = var16.useStateFromStores;
            var3 = _closure1_slot12;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getFirstWishlistId;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var66 = var8.bind(var16)(var7, var3);
            _closure2_slot18 = var66;
            var3 = 55;
            var3 = var6[var3];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useFetchWishlist;
            var3 = {};
            var3['wishlistId'] = var66;
            var16 = var39.id;
            var3['userId'] = var16;
            var3 = var7.bind(var8)(var3);
            var2 = var6[var2];
            var16 = var4.bind(var5)(var2);
            var8 = var16.useStateFromStores;
            var2 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var2;
            var3 = new Array(1);
            var3[0] = var66;
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
            var2 = var8.bind(var16)(var7, var2, var3);
            _closure2_slot19 = var2;
            var3 = 56;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.useIsEligibleForSocialLayerStorefrontMobilePurchasing;
            var3 = {};
            var7 = 'user_profile_content';
            var3['location'] = var7;
            var3 = var4.bind(var6)(var3);
            _closure2_slot20 = var3;
            var7 = _closure1_slot4;
            var6 = var7.useMemo;
            var4 = new Array(3);
            var4[0] = var2;
            var4[1] = var18;
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
                        var1 = 57;
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
            var3 = var6.bind(var7)(var3, var4);
            var16 = var18;
            if(var16) { _fun0005_ip = 58; continue _fun0005 }
case 59:
            var2 = var1 != var2;
            if(!var2) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            var4 = var3.length;
            var3 = 0;
            var2 = var4 > var3;
case 60:
            var16 = var2;
case 58:
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var54 = 0;
            var2 = var2.bind(var3)(var54);
            var28 = _closure1_slot3;
            var27 = 2;
            var2 = var28.bind(var5)(var2, var27);
            var43 = var2[var54];
            var36 = 1;
            var2 = var2[var36];
            _closure2_slot21 = var2;
            var6 = _closure1_slot4;
            var4 = var6.useCallback;
            var3 = function(arg1) {
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
            var19 = var4.bind(var6)(var3, var2);
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 58;
            var2 = var8[var6];
            var3 = var7.bind(var5)(var2);
            var2 = var3.usePageHeights;
            var2 = var2.bind(var3)();
            var4 = var2.pageHeights;
            var65 = var2.handlePageContentSize;
            _closure2_slot22 = var65;
            var69 = _closure1_slot4;
            var64 = var69.useState;
            var2 = _closure1_slot13;
            var3 = var2.WISHLIST;
            var3 = var62 === var3;
            var3 = var64.bind(var69)(var3);
            var27 = var28.bind(var5)(var3, var27);
            var3 = var27[var54];
            _closure2_slot23 = var3;
            var27 = var27[var36];
            _closure2_slot24 = var27;
            var27 = 59;
            var27 = var8[var27];
            var64 = var7.bind(var5)(var27);
            var28 = var64.useWishlistViewerCoachmark;
            var27 = {};
            var27['isCurrentUser'] = var18;
            var27['shouldShowWishlistTab'] = var16;
            var27 = var28.bind(var64)(var27);
            var28 = var27.isVisible;
            _closure2_slot25 = var28;
            var27 = var27.markAsDismissed;
            _closure2_slot26 = var27;
            var70 = _closure1_slot4;
            var69 = var70.useCallback;
            var64 = new Array(3);
            var64[0] = var26;
            var64[1] = var28;
            var64[2] = var27;
            var26 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot24;
                    var4 = 1;
                    var1 = arg1;
                    var4 = var4 === var1;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var4);
                    var6 = _closure2_slot8;
                    var5 = {};
                    var2 = 'PRESS_SECTION';
                    var5['action'] = var2;
                    var8 = _closure1_slot13;
                    if(var4) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                    var7 = var8.MAIN;
                    _fun0009_ip = 64; continue _fun0009;
case 62:
                    var7 = var8.WISHLIST;
case 64:
                    var5['section'] = var7;
                    var5 = var6.bind(var1)(var5);
                    if(!var4) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                    var4 = _closure2_slot25;
case 65:
                    if(!var4) { _fun0009_ip = 67; continue _fun0009 }
case 68:
                    var3 = _closure2_slot26;
                    var2 = _closure1_slot18;
                    var2 = var2.INDIRECT_ACTION;
                    var2 = var3.bind(var1)(var2);
case 67:
                    return var1;
                }
            };
            var26 = var69.bind(var70)(var26, var64);
            var70 = _closure1_slot4;
            var69 = var70.useCallback;
            var64 = new Array(1);
            var64[0] = var63;
            var63 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
                    if(!(var3 != var4)) { _fun0010_ip = 49; continue _fun0010 }
case 69:
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)();
case 49:
                    return var1;
                }
            };
            var70 = var69.bind(var70)(var63, var64);
            _closure2_slot27 = var70;
            var69 = _closure1_slot4;
            var64 = var69.useCallback;
            var63 = new Array(1);
            var63[0] = var33;
            var33 = function() {
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
                    var4 = _closure2_slot6;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0011_ip = 49; continue _fun0011 }
case 69:
                    var2 = _closure2_slot6;
                    var2 = var2.bind(var1)();
case 49:
                    return var1;
                }
            };
            var69 = var64.bind(var69)(var33, var63);
            _closure2_slot28 = var69;
            var64 = _closure1_slot4;
            var63 = var64.useCallback;
            var33 = new Array(16);
            var33[0] = var39;
            var33[1] = var22;
            var33[2] = var45;
            var33[3] = var24;
            var33[4] = var31;
            var33[5] = var71;
            var33[6] = var70;
            var33[7] = var69;
            var33[8] = var34;
            var33[9] = var42;
            var33[10] = var68;
            var33[11] = var46;
            var33[12] = var67;
            var33[13] = var15;
            var33[14] = var50;
            var33[15] = var47;
            var15 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0012_ip = 70; continue _fun0012 }
case 53:
                    var2 = _closure2_slot9;
                    if(!(var1 != var2)) { _fun0012_ip = 70; continue _fun0012 }
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
                    if(var6) { _fun0012_ip = 71; continue _fun0012 }
case 72:
                    var6 = _closure2_slot2;
                    var7 = var6.private;
case 71:
                    if(!var7) { _fun0012_ip = 73; continue _fun0012 }
case 74:
                    var10 = _closure1_slot19;
                    var9 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var6 = 60;
                    var6 = var12[var6];
                    var9 = var9.bind(var2)(var6);
                    var6 = {};
                    var12 = _closure2_slot13;
                    var6['username'] = var12;
                    var12 = _closure2_slot16;
                    var6['containerBackground'] = var12;
                    var7 = var10.bind(var2)(var9, var6);
case 73:
                    var6 = new Array(14);
                    var6[0] = var7;
                    var7 = _closure2_slot0;
                    var7 = var7.isProvisional;
                    if(!var7) { _fun0012_ip = 75; continue _fun0012 }
case 76:
                    var12 = _closure1_slot19;
                    var10 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var9 = 61;
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
case 75:
                    var6[1] = var7;
                    var7 = _closure2_slot0;
                    var9 = var7.id;
                    var7 = _closure2_slot9;
                    var7 = var7.id;
                    var7 = var9 === var7;
                    if(!var7) { _fun0012_ip = 77; continue _fun0012 }
case 78:
                    var9 = _closure2_slot4;
                    var7 = !var9;
case 77:
                    if(!var7) { _fun0012_ip = 79; continue _fun0012 }
case 80:
                    var12 = _closure1_slot19;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 62;
                    var9 = var14[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = {};
                    var14 = _closure2_slot27;
                    var9['navigateToPremium'] = var14;
                    var14 = _closure2_slot28;
                    var9['navigateToShop'] = var14;
                    var14 = _closure2_slot15;
                    var9['hasCustomProfileTheme'] = var14;
                    var7 = var12.bind(var2)(var10, var9);
case 79:
                    var6[2] = var7;
                    var10 = _closure1_slot19;
                    var9 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var7 = 63;
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
                    if(!var7) { _fun0012_ip = 81; continue _fun0012 }
case 82:
                    var12 = _closure1_slot19;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 64;
                    var9 = var14[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = {};
                    var7 = var12.bind(var2)(var10, var9);
case 81:
                    var6[4] = var7;
                    var7 = _closure2_slot11;
                    var9 = var7.length;
                    var7 = 0;
                    var7 = var9 > var7;
                    if(!var7) { _fun0012_ip = 83; continue _fun0012 }
case 84:
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
                    var14 = _closure2_slot11;
                    var9['applicationIds'] = var14;
                    var15 = _closure2_slot17;
                    var14 = undefined;
                    if(var15) { _fun0012_ip = 85; continue _fun0012 }
case 86:
                    var14 = var13;
case 85:
                    var9['style'] = var14;
                    var7 = var12.bind(var2)(var10, var9);
case 83:
                    var6[5] = var7;
                    var10 = _closure1_slot19;
                    var9 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var7 = 66;
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
                    if(!var14) { _fun0012_ip = 87; continue _fun0012 }
case 88:
                    var12 = _closure2_slot14;
case 87:
                    var7['pendingBio'] = var12;
                    var14 = _closure2_slot17;
                    var12 = undefined;
                    if(var14) { _fun0012_ip = 89; continue _fun0012 }
case 41:
                    var12 = var13;
case 89:
                    var7['style'] = var12;
                    var7 = var10.bind(var2)(var9, var7);
                    var6[6] = var7;
                    var7 = _closure2_slot17;
                    if(!var7) { _fun0012_ip = 90; continue _fun0012 }
case 91:
                    var12 = _closure1_slot19;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 64;
                    var9 = var14[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = {};
                    var7 = var12.bind(var2)(var10, var9);
case 90:
                    var6[7] = var7;
                    var7 = _closure2_slot12;
                    var7 = var1 != var7;
                    if(!var7) { _fun0012_ip = 92; continue _fun0012 }
case 93:
                    var12 = _closure1_slot19;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 67;
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
                    if(var15) { _fun0012_ip = 94; continue _fun0012 }
case 95:
                    var14 = var13;
case 94:
                    var9['style'] = var14;
                    var7 = var12.bind(var2)(var10, var9);
case 92:
                    var6[8] = var7;
                    var7 = _closure2_slot1;
                    var9 = var1 == var7;
                    var7 = undefined;
                    if(var9) { _fun0012_ip = 96; continue _fun0012 }
case 97:
                    var9 = _closure2_slot1;
                    var7 = var9.guild_id;
case 96:
                    var7 = var1 != var7;
                    if(!var7) { _fun0012_ip = 98; continue _fun0012 }
case 99:
                    var12 = _closure1_slot19;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 68;
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
                    if(var15) { _fun0012_ip = 100; continue _fun0012 }
case 101:
                    var14 = var13;
case 100:
                    var9['style'] = var14;
                    var7 = var12.bind(var2)(var10, var9);
case 98:
                    var6[9] = var7;
                    var7 = _closure2_slot17;
                    if(!var7) { _fun0012_ip = 102; continue _fun0012 }
case 103:
                    var12 = _closure1_slot19;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 64;
                    var9 = var14[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = {};
                    var7 = var12.bind(var2)(var10, var9);
case 102:
                    var6[10] = var7;
                    var10 = _closure1_slot19;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var12 = 69;
                    var7 = var7[var12];
                    var7 = var9.bind(var2)(var7);
                    var9 = var7.UserProfileAccountConnectionsCard;
                    var7 = {};
                    var14 = _closure2_slot0;
                    var14 = var14.id;
                    var7['userId'] = var14;
                    var15 = _closure2_slot17;
                    var14 = undefined;
                    if(var15) { _fun0012_ip = 104; continue _fun0012 }
case 105:
                    var14 = var13;
case 104:
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
                    if(var14) { _fun0012_ip = 106; continue _fun0012 }
case 107:
                    var12 = var13;
case 106:
                    var7['style'] = var12;
                    var7 = var10.bind(var2)(var9, var7);
                    var6[12] = var7;
                    var7 = _closure2_slot4;
                    var7 = !var7;
                    if(!var7) { _fun0012_ip = 108; continue _fun0012 }
case 109:
                    var10 = _closure1_slot19;
                    var9 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var8 = 70;
                    var8 = var12[var8];
                    var9 = var9.bind(var2)(var8);
                    var8 = {};
                    var12 = _closure2_slot0;
                    var12 = var12.id;
                    var8['userId'] = var12;
                    var14 = _closure2_slot17;
                    var12 = undefined;
                    if(var14) { _fun0012_ip = 110; continue _fun0012 }
case 111:
                    var12 = var13;
case 110:
                    var8['style'] = var12;
                    var11 = _closure2_slot3;
                    var8['onBack'] = var11;
                    var7 = var10.bind(var2)(var9, var8);
case 108:
                    var6[13] = var7;
                    var3['children'] = var6;
                    var2 = var5.bind(var2)(var4, var3);
                    return var2;
case 70:
                    return var1;
                }
            };
            var15 = var63.bind(var64)(var15, var33);
            _closure2_slot29 = var15;
            var64 = _closure1_slot4;
            var63 = var64.useCallback;
            var67 = var24.profileContent;
            var33 = new Array(3);
            var33[0] = var67;
            var33[1] = var66;
            var33[2] = var3;
            var3 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var4 = _closure1_slot19;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var1 = _closure2_slot7;
                    var1 = var1.profileContent;
                    var2['style'] = var1;
                    var6 = _closure2_slot18;
                    var1 = null;
                    if(!(var1 != var6)) { _fun0013_ip = 67; continue _fun0013 }
case 112:
                    var8 = _closure1_slot19;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 71;
                    var1 = var7[var1];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var1);
                    var1 = {};
                    var10 = _closure2_slot18;
                    var1['wishlistId'] = var10;
                    var10 = _closure1_slot17;
                    var1['maxWidth'] = var10;
                    var9 = _closure2_slot23;
                    var1['isVisible'] = var9;
                    var1 = var8.bind(var7)(var6, var1);
                    _fun0013_ip = 113; continue _fun0013;
case 67:
                    var8 = _closure1_slot19;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 71;
                    var5 = var7[var5];
                    var7 = undefined;
                    var5 = var6.bind(var7)(var5);
                    var6 = var5.WishlistEmptyState;
                    var5 = {};
                    var1 = var8.bind(var7)(var6, var5);
case 113:
                    var2['children'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var3 = var63.bind(var64)(var3, var33);
            _closure2_slot30 = var3;
            var64 = _closure1_slot4;
            var63 = var64.useMemo;
            var33 = new Array(3);
            var33[0] = var65;
            var33[1] = var15;
            var33[2] = var3;
            var3 = function() {
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
                    var5 = _closure2_slot22;
                    var4 = undefined;
                    var3 = 0;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var1['onContentSizeChange'] = var7;
                var11 = _closure2_slot29;
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
                    var5 = _closure2_slot22;
                    var4 = undefined;
                    var3 = 1;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var3['onContentSizeChange'] = var8;
                var7 = _closure2_slot30;
                var7 = var7.bind(var6)();
                var3['children'] = var7;
                var3 = var4.bind(var6)(var5, var3);
                var2['page'] = var3;
                var1[1] = var2;
                return var1;
            };
            var33 = var63.bind(var64)(var3, var33);
            var3 = 72;
            var3 = var8[var3];
            var8 = var7.bind(var5)(var3);
            var7 = var8.useSegmentedControlState;
            var3 = {};
            var3['pageWidth'] = var43;
            var43 = var2.WISHLIST;
            var2 = 0;
            if(!(var62 === var43)) { _fun0005_ip = 114; continue _fun0005 }
case 115:
            var2 = var36;
case 114:
            var3['defaultIndex'] = var2;
            var43 = _closure1_slot1;
            var2 = _closure1_slot2;
            var36 = 41;
            var36 = var2[var36];
            var36 = var43.bind(var5)(var36);
            var36 = var36.space;
            var36 = var36.PX_24;
            var3['itemSpacing'] = var36;
            var3['items'] = var33;
            var3['onPageChange'] = var26;
            var36 = var7.bind(var8)(var3);
            _closure2_slot31 = var36;
            var3 = _closure1_slot0;
            var2 = var2[var6];
            var3 = var3.bind(var5)(var2);
            var2 = var3.usePagesHeightStyle;
            var33 = var2.bind(var3)(var36, var4);
            var6 = _closure1_slot4;
            var4 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var36;
            var3[1] = var27;
            var2 = function() {
                var4 = _closure2_slot31;
                var3 = var4.setActiveIndex;
                var2 = 1;
                var2 = var3.bind(var4)(var2);
                var3 = _closure2_slot26;
                var1 = _closure1_slot18;
                var2 = var1.TAKE_ACTION;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var26 = var4.bind(var6)(var2, var3);
            if(!(var1 != var39)) { _fun0005_ip = 116; continue _fun0005 }
case 117:
            if(!(var1 != var22)) { _fun0005_ip = 116; continue _fun0005 }
case 118:
            var43 = {};
            var43['backgroundColor'] = var45;
            _closure2_slot32 = var43;
            var4 = _closure1_slot20;
            var3 = _closure1_slot21;
            var2 = {};
            var8 = _closure1_slot19;
            var7 = _closure1_slot1;
            var62 = _closure1_slot2;
            var6 = 73;
            var6 = var62[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['user'] = var39;
            var6['displayProfile'] = var46;
            var6['bannerHeight'] = var57;
            var57 = undefined;
            if(!var31) { _fun0005_ip = 119; continue _fun0005 }
case 120:
            var57 = var61;
case 119:
            var6['pendingBanner'] = var57;
            var57 = undefined;
            if(!var31) { _fun0005_ip = 121; continue _fun0005 }
case 122:
            var57 = var55;
case 121:
            var6['pendingAvatarSrc'] = var57;
            var57 = undefined;
            if(!var31) { _fun0005_ip = 123; continue _fun0005 }
case 124:
            var61 = var1 != var60;
            var57 = undefined;
            if(!var61) { _fun0005_ip = 123; continue _fun0005 }
case 125:
            var57 = var60;
case 123:
            var6['pendingAccentColor'] = var57;
            var57 = undefined;
            if(!var31) { _fun0005_ip = 126; continue _fun0005 }
case 127:
            var60 = var1 != var59;
            var57 = undefined;
            if(!var60) { _fun0005_ip = 126; continue _fun0005 }
case 128:
            var57 = var59;
case 126:
            var6['pendingThemeColors'] = var57;
            var6['disableInteraction'] = var31;
            var6['bannerAnimatedStyle'] = var25;
            var6['bannerImageAnimatedStyle'] = var12;
            var6['blurAnimatedProps'] = var11;
            var6['showBlur'] = var9;
            var9 = var1 == var46;
            var12 = undefined;
            if(var9) { _fun0005_ip = 129; continue _fun0005 }
case 130:
            var12 = var46.private;
case 129:
            var11 = true;
            var9 = undefined;
            if(!(var11 === var12)) { _fun0005_ip = 131; continue _fun0005 }
case 132:
            var25 = _closure1_slot19;
            var12 = _closure1_slot1;
            var57 = _closure1_slot2;
            var11 = 74;
            var11 = var57[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var11['primaryColor'] = var56;
            var9 = var25.bind(var5)(var12, var11);
case 131:
            var6['privateBanner'] = var9;
            var9 = undefined;
            if(var31) { _fun0005_ip = 133; continue _fun0005 }
case 134:
            var25 = _closure1_slot20;
            var12 = _closure1_slot6;
            var11 = {};
            var57 = var24.bannerButtons;
            var56 = new Array(2);
            var56[0] = var57;
            var59 = var1 == var46;
            var57 = undefined;
            if(var59) { _fun0005_ip = 135; continue _fun0005 }
case 136:
            var57 = var46.private;
case 135:
            if(!var57) { _fun0005_ip = 137; continue _fun0005 }
case 138:
            var57 = var24.bannerButtonsWithPrivateBanner;
case 137:
            var56[1] = var57;
            var11['style'] = var56;
            var59 = var39.id;
            var56 = var22.id;
            var57 = null;
            if(!(var59 !== var56)) { _fun0005_ip = 139; continue _fun0005 }
case 140:
            var56 = var39.bot;
            var57 = null;
            if(var56) { _fun0005_ip = 139; continue _fun0005 }
case 141:
            var56 = _closure1_slot16;
            var56 = var56.FRIEND;
            if(!(var41 !== var56)) { _fun0005_ip = 142; continue _fun0005 }
case 143:
            var56 = null;
            if(!var58) { _fun0005_ip = 144; continue _fun0005 }
case 145:
            var60 = _closure1_slot19;
            var59 = _closure1_slot24;
            var58 = {};
            var58['user'] = var39;
            var56 = var60.bind(var5)(var59, var58);
case 144:
            _fun0005_ip = 146; continue _fun0005;
case 142:
            var60 = _closure1_slot19;
            var59 = _closure1_slot23;
            var58 = {};
            var58['user'] = var39;
            var56 = var60.bind(var5)(var59, var58);
case 146:
            var57 = var56;
case 139:
            var56 = new Array(2);
            var56[0] = var57;
            var59 = _closure1_slot19;
            var58 = _closure1_slot1;
            var60 = _closure1_slot2;
            var57 = 75;
            var57 = var60[var57];
            var58 = var58.bind(var5)(var57);
            var57 = {};
            var57['user'] = var39;
            var57['currentUser'] = var22;
            var57['displayProfile'] = var46;
            var57['channel'] = var50;
            var57 = var59.bind(var5)(var58, var57);
            var56[1] = var57;
            var11['children'] = var56;
            var9 = var25.bind(var5)(var12, var11);
case 133:
            var6['buttons'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot20;
            var11 = _closure1_slot1;
            var56 = _closure1_slot2;
            var25 = 76;
            var7 = var56[var25];
            var7 = var11.bind(var5)(var7);
            var8 = var7.View;
            var7 = {};
            var7['style'] = var10;
            var12 = _closure1_slot19;
            var10 = 77;
            var10 = var56[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var10['user'] = var39;
            var10['guildId'] = var42;
            var10['disableStatus'] = var17;
            var17 = undefined;
            if(!var31) { _fun0005_ip = 147; continue _fun0005 }
case 148:
            var17 = var55;
case 147:
            var10['pendingAvatarSrc'] = var17;
            var17 = undefined;
            if(!var31) { _fun0005_ip = 149; continue _fun0005 }
case 150:
            var17 = var44;
case 149:
            var10['pendingAvatarDecoration'] = var17;
            var10['backgroundColor'] = var13;
            var13 = {};
            var13['backgroundColor'] = var14;
            var10['statusStyle'] = var13;
            var11 = var12.bind(var5)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var13 = _closure1_slot20;
            var12 = _closure1_slot6;
            var11 = {};
            var17 = var24.profileContentWrapper;
            var14 = new Array(2);
            var14[0] = var17;
            var17 = {};
            if(!var18) { _fun0005_ip = 151; continue _fun0005 }
case 152:
            var18 = 0;
            if(!var31) { _fun0005_ip = 153; continue _fun0005 }
case 151:
            var44 = var1 != var21;
            var18 = 0;
            if(var44) { _fun0005_ip = 153; continue _fun0005 }
case 154:
            var18 = _closure1_slot15;
case 153:
            var17['paddingTop'] = var18;
            var18 = _closure1_slot14;
            var18 = var32 + var18;
            var17['paddingBottom'] = var18;
            var14[1] = var17;
            var11['style'] = var14;
            var18 = _closure1_slot19;
            var17 = _closure1_slot22;
            var14 = {};
            var14['customStatusActivity'] = var21;
            var14['user'] = var39;
            var14['guildId'] = var42;
            var32 = var1 == var50;
            var21 = undefined;
            if(var32) { _fun0005_ip = 155; continue _fun0005 }
case 156:
            var21 = var50.id;
case 155:
            var14['channelId'] = var21;
            var14['hasCustomProfileTheme'] = var34;
            var14['showUserProfileActionSheet'] = var47;
            var14['isPreviewingChanges'] = var31;
            var14['bubbleRef'] = var20;
            var17 = var18.bind(var5)(var17, var14);
            var14 = new Array(3);
            var14[0] = var17;
            var20 = _closure1_slot20;
            var18 = _closure1_slot6;
            var17 = {};
            var32 = var24.primaryInfo;
            var21 = new Array(2);
            var21[0] = var32;
            var32 = var24.profileContent;
            var21[1] = var32;
            var17['style'] = var21;
            var44 = _closure1_slot19;
            var32 = _closure1_slot25;
            var21 = {};
            var21['user'] = var39;
            var55 = var1 == var50;
            var54 = undefined;
            if(var55) { _fun0005_ip = 157; continue _fun0005 }
case 158:
            var54 = var50.id;
case 157:
            var21['channelId'] = var54;
            var21['displayProfile'] = var46;
            var46 = undefined;
            if(!var31) { _fun0005_ip = 159; continue _fun0005 }
case 160:
            var46 = var53;
case 159:
            var21['displayNameOverride'] = var46;
            var46 = undefined;
            if(!var31) { _fun0005_ip = 161; continue _fun0005 }
case 162:
            var46 = var52;
case 161:
            var21['pronounsOverride'] = var46;
            var46 = undefined;
            if(!var31) { _fun0005_ip = 163; continue _fun0005 }
case 164:
            var46 = var51;
case 163:
            var21['badgesOverride'] = var46;
            var46 = undefined;
            if(!var31) { _fun0005_ip = 165; continue _fun0005 }
case 166:
            var46 = var49;
case 165:
            var21['pendingDisplayNameStyles'] = var46;
            var21['badgeContainerBackground'] = var45;
            var21['isPreviewingChanges'] = var31;
            var32 = var44.bind(var5)(var32, var21);
            var21 = new Array(7);
            var21[0] = var32;
            var44 = var39.id;
            var32 = var22.id;
            var32 = var44 !== var32;
            if(!var32) { _fun0005_ip = 167; continue _fun0005 }
case 168:
            var46 = _closure1_slot19;
            var45 = _closure1_slot1;
            var49 = _closure1_slot2;
            var44 = 78;
            var44 = var49[var44];
            var45 = var45.bind(var5)(var44);
            var44 = {};
            var44['user'] = var39;
            var44['guildId'] = var42;
            var32 = var46.bind(var5)(var45, var44);
case 167:
            var21[1] = var32;
            var32 = _closure1_slot16;
            var32 = var32.PENDING_INCOMING;
            var32 = var41 === var32;
            if(!var32) { _fun0005_ip = 169; continue _fun0005 }
case 170:
            var46 = _closure1_slot19;
            var45 = _closure1_slot1;
            var49 = _closure1_slot2;
            var44 = 79;
            var44 = var49[var44];
            var45 = var45.bind(var5)(var44);
            var44 = {};
            var44['user'] = var39;
            var51 = var1 == var50;
            var49 = undefined;
            if(var51) { _fun0005_ip = 171; continue _fun0005 }
case 172:
            var49 = var50.id;
case 171:
            var44['channelId'] = var49;
            var44['guildId'] = var42;
            var44['applicationId'] = var48;
            var44['style'] = var43;
            var44['showUserProfile'] = var47;
            var32 = var46.bind(var5)(var45, var44);
case 169:
            var21[2] = var32;
            var32 = var40.map;
            var30 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot19;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 79;
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
                    if(var8) { _fun0014_ip = 173; continue _fun0014 }
case 174:
                    var8 = _closure2_slot1;
                    var7 = var8.id;
case 173:
                    var2['channelId'] = var7;
                    var7 = _closure2_slot12;
                    var2['guildId'] = var7;
                    var7 = _closure2_slot32;
                    var2['style'] = var7;
                    var6 = _closure2_slot3;
                    var2['showUserProfile'] = var6;
                    var1 = var1.applicationId;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var30 = var32.bind(var40)(var30);
            var21[3] = var30;
            var40 = _closure1_slot19;
            var32 = _closure1_slot1;
            var44 = _closure1_slot2;
            var30 = 80;
            var30 = var44[var30];
            var32 = var32.bind(var5)(var30);
            var30 = {};
            var30['user'] = var39;
            var30['style'] = var43;
            var30 = var40.bind(var5)(var32, var30);
            var21[4] = var30;
            var32 = var39.id;
            var30 = var22.id;
            var30 = var32 === var30;
            if(!var30) { _fun0005_ip = 175; continue _fun0005 }
case 176:
            var30 = !var31;
case 175:
            if(!var30) { _fun0005_ip = 177; continue _fun0005 }
case 178:
            var40 = _closure1_slot19;
            var32 = _closure1_slot26;
            var31 = {};
            var31['guildId'] = var42;
            var30 = var40.bind(var5)(var32, var31);
case 177:
            var21[5] = var30;
            var30 = var39.id;
            var22 = var22.id;
            var22 = var30 !== var22;
            if(!var22) { _fun0005_ip = 179; continue _fun0005 }
case 180:
            var32 = _closure1_slot19;
            var31 = _closure1_slot1;
            var40 = _closure1_slot2;
            var30 = 81;
            var30 = var40[var30];
            var31 = var31.bind(var5)(var30);
            var30 = {};
            var30['user'] = var39;
            if(var38) { _fun0005_ip = 181; continue _fun0005 }
case 182:
            var40 = _closure1_slot16;
            var40 = var40.BLOCKED;
            var38 = var41 === var40;
case 181:
            if(var38) { _fun0005_ip = 183; continue _fun0005 }
case 184:
            var38 = var39.isProvisional;
case 183:
            var30['disableCalls'] = var38;
            var30['disableMessage'] = var37;
            var30['location'] = var35;
            var30['hasCustomProfileTheme'] = var34;
            var35 = var24.primaryButtons;
            var30['style'] = var35;
            var22 = var32.bind(var5)(var31, var30);
case 179:
            var21[6] = var22;
            var17['children'] = var21;
            var17 = var20.bind(var5)(var18, var17);
            var14[1] = var17;
            if(var16) { _fun0005_ip = 185; continue _fun0005 }
case 186:
            var15 = var15.bind(var5)();
            _fun0005_ip = 187; continue _fun0005;
case 185:
            var18 = _closure1_slot19;
            var17 = _closure1_slot6;
            var16 = {};
            var16['onLayout'] = var19;
            var21 = _closure1_slot20;
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var19 = 82;
            var19 = var32[var19];
            var19 = var30.bind(var5)(var19);
            var20 = var19.LayerScope;
            var19 = {};
            var22 = {};
            var24 = var24.profileTablist;
            var22['style'] = var24;
            var31 = _closure1_slot19;
            var24 = 83;
            var24 = var32[var24];
            var24 = var30.bind(var5)(var24);
            var30 = var24.Tabs;
            var24 = {};
            var24['state'] = var36;
            var32 = undefined;
            if(!var34) { _fun0005_ip = 188; continue _fun0005 }
case 189:
            var32 = 'gradient-background';
case 188:
            var24['variant'] = var32;
            var30 = var31.bind(var5)(var30, var24);
            var24 = new Array(2);
            var24[0] = var30;
            var32 = _closure1_slot19;
            var31 = _closure1_slot6;
            var30 = {};
            var30['ref'] = var29;
            var34 = {'position': 'absolute', 'left': '50%', 'top': 0, 'right': 0, 'bottom': 0};
            var30['style'] = var34;
            var34 = false;
            var30['collapsable'] = var34;
            var34 = 'box-none';
            var30['pointerEvents'] = var34;
            var30 = var32.bind(var5)(var31, var30);
            var24[1] = var30;
            var22['children'] = var24;
            var24 = var21.bind(var5)(var17, var22);
            var22 = new Array(3);
            var22[0] = var24;
            var32 = _closure1_slot19;
            var24 = _closure1_slot1;
            var30 = _closure1_slot2;
            var25 = var30[var25];
            var25 = var24.bind(var5)(var25);
            var31 = var25.View;
            var25 = {};
            var25['style'] = var33;
            var35 = _closure1_slot19;
            var34 = _closure1_slot0;
            var33 = 84;
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
            var23 = 85;
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
case 187:
            var14[2] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 116:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 86;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/native/UserProfileContent.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['PrimaryInfo'] = var2;
    return var1;
})();
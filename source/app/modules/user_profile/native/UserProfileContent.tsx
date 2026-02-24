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
            var3 = 13;
            var3 = var6[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var7 = var3.bind(var4)();
            var5 = _closure1_slot0;
            var3 = 14;
            var3 = var6[var3];
            var16 = var5.bind(var4)(var3);
            var8 = var16.useStateFromStores;
            var3 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var3;
            var5 = new Array(1);
            var5[0] = var9;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot9;
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
                var1 = 15;
                var4 = var2[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var4);
                var6 = var7.openLazy;
                var4 = _closure1_slot0;
                var3 = 17;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 16;
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
            var14 = 18;
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
            var3 = _closure1_slot17;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 19;
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
    var _closure1_slot20 = var1;
    var1 = function RemoveFriendIconButton(arg1) {
        var1 = arg1;
        var3 = var1.user;
        var _closure2_slot0 = var3;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 20;
        var1 = var10[var1];
        var4 = undefined;
        var2 = var9.bind(var4)(var1);
        var1 = var2.useUserProfileAnalyticsContext;
        var1 = var1.bind(var2)();
        var1 = var1.trackUserProfileAction;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot1;
        var1 = 21;
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
            var2 = 22;
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
        var1 = 23;
        var1 = var10[var1];
        var2 = var2.bind(var4)(var1);
        var1 = var2.useName;
        var1 = var1.bind(var2)(var3);
        var _closure2_slot4 = var1;
        var3 = _closure1_slot17;
        var1 = 24;
        var1 = var10[var1];
        var1 = var9.bind(var4)(var1);
        var2 = var1.IconButton;
        var1 = {'size': 'sm', 'variant': 'secondary-overlay'};
        var8 = _closure1_slot17;
        var6 = 25;
        var6 = var10[var6];
        var6 = var9.bind(var4)(var6);
        var7 = var6.UserCheckIcon;
        var6 = {'size': 'sm', 'color': 'white'};
        var6 = var8.bind(var4)(var7, var6);
        var1['icon'] = var6;
        var6 = 26;
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
            var1 = 27;
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
    var _closure1_slot21 = var1;
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
            var1 = 15;
            var4 = var2[var1];
            var1 = undefined;
            var7 = var5.bind(var1)(var4);
            var6 = var7.openLazy;
            var4 = _closure1_slot0;
            var3 = 17;
            var3 = var2[var3];
            var4 = var4.bind(var1)(var3);
            var3 = 28;
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
        var4 = _closure1_slot17;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 24;
        var1 = var10[var1];
        var3 = undefined;
        var1 = var9.bind(var3)(var1);
        var2 = var1.IconButton;
        var1 = {'size': 'sm', 'variant': 'secondary-overlay'};
        var8 = _closure1_slot17;
        var6 = 29;
        var6 = var10[var6];
        var6 = var9.bind(var3)(var6);
        var7 = var6.UserPlatformIcon;
        var6 = {'size': 'sm', 'color': 'white'};
        var6 = var8.bind(var3)(var7, var6);
        var1['icon'] = var6;
        var6 = 26;
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
    var _closure1_slot22 = var1;
    var2 = function PrimaryInfo(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var17 = var1.user;
            var18 = var1.channelId;
            var16 = var1.displayProfile;
            var2 = var1.displayNameOverride;
            var14 = var1.pronounsOverride;
            var12 = var1.badgesOverride;
            var10 = var1.style;
            var9 = var1.badgeContainerBackground;
            var5 = var1.isPreviewingChanges;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 23;
            var1 = var13[var1];
            var3 = var8.bind(var4)(var1);
            var1 = var3.useUserTag;
            var1 = var1.bind(var3)(var17);
            var _closure2_slot0 = var1;
            var3 = 30;
            var3 = var13[var3];
            var3 = var8.bind(var4)(var3);
            var11 = var3.bind(var4)(var16);
            var3 = 31;
            var3 = var13[var3];
            var15 = var8.bind(var4)(var3);
            var8 = var15.useName;
            var13 = null;
            var19 = var13 == var16;
            var3 = undefined;
            if(var19) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var3 = var16.guildId;
case 14:
            var18 = var8.bind(var15)(var3, var18, var17);
            var15 = var18;
            if(!(var13 != var2)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var3 = var2.trim;
            var3 = var3.bind(var2)();
            var8 = var3.length;
            var3 = 0;
            var15 = var18;
            if(!(var8 > var3)) { _fun0003_ip = 16; continue _fun0003 }
case 18:
            var15 = var2;
case 16:
            var3 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 20;
            var2 = var18[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useUserProfileAnalyticsContext;
            var2 = var2.bind(var3)();
            var19 = var2.trackUserProfileAction;
            _closure2_slot1 = var19;
            var8 = _closure1_slot4;
            var3 = var8.useCallback;
            var2 = new Array(2);
            var2[0] = var19;
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
                var5 = 32;
                var5 = var4[var5];
                var6 = var3.bind(var1)(var5);
                var5 = var6.copy;
                var2 = _closure2_slot0;
                var2 = var5.bind(var6)(var2);
                var2 = 33;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentUsernameCopied;
                var2 = var2.bind(var3)();
                return var1;
            };
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot17;
            var2 = _closure1_slot1;
            var1 = 34;
            var1 = var18[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['user'] = var17;
            var18 = var13 == var16;
            var17 = undefined;
            if(var18) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var17 = var16.guildId;
case 19:
            var1['guildId'] = var17;
            var1['displayName'] = var15;
            if(!(var13 == var14)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var17 = var13 == var16;
            var15 = undefined;
            if(var17) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var15 = var16.pronouns;
case 23:
            var14 = var15;
case 21:
            var1['pronouns'] = var14;
            if(!(var13 != var12)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var11 = var12;
case 25:
            var1['badges'] = var11;
            var1['style'] = var10;
            var1['badgeContainerBackground'] = var9;
            var9 = undefined;
            if(var5) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var9 = var8;
case 27:
            var1['onPressDisplayName'] = var9;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 26;
            var9 = var12[var6];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var6 = var12[var6];
            var6 = var11.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.y5MwJy;
            var6 = var9.bind(var10)(var6);
            var1['displayNameAccessibilityHint'] = var6;
            var6 = undefined;
            if(var5) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var6 = var8;
case 29:
            var1['onPressUserTag'] = var6;
            var6 = undefined;
            if(var5) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var6 = function() {
                var3 = _closure2_slot1;
                var2 = {};
                var1 = 'PRESS_PRONOUNS';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 33;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentUserPronouns;
                var2 = var2.bind(var3)();
                return var1;
            };
case 31:
            var1['onPressPronouns'] = var6;
            var5 = !var5;
            var1['showBadgeToastOnPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot23 = var2;
    var1 = function EditSection(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var1 = var1.guildId;
            var _closure2_slot0 = var1;
            var20 = _closure1_slot1;
            var19 = _closure1_slot2;
            var1 = 13;
            var1 = var19[var1];
            var4 = undefined;
            var1 = var20.bind(var4)(var1);
            var5 = var1.bind(var4)();
            var9 = _closure1_slot0;
            var1 = 20;
            var1 = var19[var1];
            var2 = var9.bind(var4)(var1);
            var1 = var2.useUserProfileAnalyticsContext;
            var1 = var1.bind(var2)();
            var1 = var1.trackUserProfileAction;
            var _closure2_slot1 = var1;
            var1 = 14;
            var1 = var19[var1];
            var6 = var9.bind(var4)(var1);
            var3 = var6.useStateFromStores;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var3.bind(var6)(var2, var1);
            var1 = 35;
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
            var3 = _closure1_slot17;
            var1 = 36;
            var1 = var19[var1];
            var2 = var20.bind(var4)(var1);
            var1 = {};
            var5 = var5.primaryButtons;
            var1['style'] = var5;
            var5 = _closure1_slot16;
            var1['maxWidth'] = var5;
            var14 = _closure1_slot17;
            var6 = 37;
            var5 = var19[var6];
            var5 = var9.bind(var4)(var5);
            var13 = var5.Button;
            var8 = {};
            var12 = 'primary';
            var8['variant'] = var12;
            var15 = _closure1_slot17;
            var11 = 38;
            var5 = var19[var11];
            var5 = var9.bind(var4)(var5);
            var9 = var5.PencilIcon;
            var5 = {};
            var18 = 'sm';
            var5['size'] = var18;
            var16 = 39;
            var19 = var19[var16];
            var19 = var20.bind(var4)(var19);
            var19 = var19.colors;
            var19 = var19.WHITE;
            var5['color'] = var19;
            var5 = var15.bind(var4)(var9, var5);
            var8['icon'] = var5;
            var5 = null;
            if(!(var5 == var7)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var9 = 26;
            var15 = var21[var9];
            var15 = var20.bind(var4)(var15);
            var19 = var15.intl;
            var15 = var19.string;
            var9 = var21[var9];
            var9 = var20.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.s5vZlQ;
            var9 = var15.bind(var19)(var9);
            _fun0004_ip = 35; continue _fun0004;
case 33:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 26;
            var19 = var22[var15];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var15 = var22[var15];
            var15 = var21.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.HmFaFB;
            var9 = var19.bind(var20)(var15);
case 35:
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
                var3 = 15;
                var3 = var5[var3];
                var6 = var4.bind(var1)(var3);
                var3 = var6.hideActionSheet;
                var3 = var3.bind(var6)();
                var3 = 40;
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
            if(!var7) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var8 = _closure1_slot17;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = var15[var6];
            var6 = var14.bind(var4)(var6);
            var7 = var6.Button;
            var6 = {};
            var6['variant'] = var12;
            var13 = _closure1_slot17;
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
            var11 = 26;
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
                var3 = 15;
                var3 = var5[var3];
                var6 = var4.bind(var1)(var3);
                var3 = var6.hideActionSheet;
                var3 = var3.bind(var6)();
                var3 = 40;
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
case 36:
            var1['secondaryButton'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot24 = var1;
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
    var5 = var6.bind(var1)(var5);
    var5 = var5.UserProfileSections;
    var _closure1_slot12 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.PROFILE_CONTENT_BOTTOM_PADDING;
    var _closure1_slot13 = var9;
    var5 = var5.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
    var _closure1_slot14 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.RelationshipTypes;
    var _closure1_slot15 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot16 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot17 = var9;
    var9 = var5.jsxs;
    var _closure1_slot18 = var9;
    var5 = var5.Fragment;
    var _closure1_slot19 = var5;
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
            var45 = var1.showUserProfileActionSheet;
            var _closure2_slot3 = var45;
            var40 = var1.disableCalls;
            var39 = var1.disableMessage;
            var26 = var1.disableStatus;
            var7 = var1.isPreviewingChanges;
            var _closure2_slot4 = var7;
            var38 = var1.location;
            var8 = var1.navigateToPremium;
            var _closure2_slot5 = var8;
            var4 = var1.navigateToShop;
            var _closure2_slot6 = var4;
            var36 = var1.initialSection;
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
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 13;
            var2 = var1[var2];
            var2 = var3.bind(var5)(var2);
            var11 = var2.bind(var5)();
            var _closure2_slot7 = var11;
            var2 = 41;
            var2 = var1[var2];
            var6 = var3.bind(var5)(var2);
            var2 = _closure1_slot16;
            var13 = var6.bind(var5)(var2);
            var2 = 42;
            var2 = var1[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var32 = var2.bottom;
            var3 = _closure1_slot0;
            var2 = 20;
            var2 = var1[var2];
            var6 = var3.bind(var5)(var2);
            var2 = var6.useUserProfileAnalyticsContext;
            var2 = var2.bind(var6)();
            var6 = var2.trackUserProfileAction;
            var _closure2_slot8 = var6;
            var2 = 14;
            var1 = var1[var2];
            var10 = var3.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var17 = var9.bind(var10)(var3, var1);
            var _closure2_slot9 = var17;
            var1 = null;
            var3 = var1 == var17;
            var9 = undefined;
            if(var3) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var9 = var17.id;
case 38:
            var3 = var18.id;
            var27 = var9 === var3;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = var10[var2];
            var20 = var9.bind(var5)(var3);
            var19 = var20.useStateFromStoresObject;
            var3 = _closure1_slot8;
            var14 = new Array(1);
            var14[0] = var3;
            var3 = function() {
                var1 = {};
                var4 = _closure1_slot8;
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
            var3 = var19.bind(var20)(var14, var3);
            var19 = var3.relationshipType;
            var46 = var3.originApplicationId;
            var3 = 43;
            var3 = var10[var3];
            var20 = var9.bind(var5)(var3);
            var14 = var20.useIncomingGameRelationshipsForUser;
            var3 = var18.id;
            var35 = var14.bind(var20)(var3);
            var3 = 44;
            var3 = var10[var3];
            var20 = var9.bind(var5)(var3);
            var14 = var20.useIsGameFriends;
            var3 = var18.id;
            var14 = var14.bind(var20)(var3);
            var3 = 45;
            var3 = var10[var3];
            var10 = var9.bind(var5)(var3);
            var9 = var10.useUserProfileGameFriendApplicationIds;
            var3 = {};
            var20 = var18.id;
            var3['userId'] = var20;
            var55 = var9.bind(var10)(var3);
            _closure2_slot10 = var55;
            if(!(var1 == var16)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var3 = var1 == var15;
            var41 = undefined;
            if(var3) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var41 = var15.guild_id;
case 42:
            _fun0005_ip = 44; continue _fun0005;
case 40:
            var9 = var16.guildId;
            var10 = var1 != var9;
            var3 = undefined;
            if(!var10) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var3 = var9;
case 45:
            var41 = var3;
case 44:
            _closure2_slot11 = var41;
            var20 = _closure1_slot4;
            var10 = var20.useMemo;
            var9 = new Array(2);
            var9[0] = var41;
            var9[1] = var18;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot11;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    var1 = _closure2_slot0;
                    if(!(var2 == var1)) { _fun0006_ip = 49; continue _fun0006 }
case 47:
                    var1 = {};
                    _fun0006_ip = 50; continue _fun0006;
case 49:
                    var2 = {};
                    var4 = _closure2_slot11;
                    var3 = _closure2_slot0;
                    var5 = var3.id;
                    var3 = new Array(1);
                    var3[0] = var5;
                    var2[var4] = var3;
                    var1 = var2;
case 50:
                    return var1;
                }
            };
            var10 = var10.bind(var20)(var3, var9);
            var25 = _closure1_slot0;
            var22 = _closure1_slot2;
            var3 = 46;
            var3 = var22[var3];
            var9 = var25.bind(var5)(var3);
            var3 = var9.useSubscribeGuildMembers;
            var24 = 'UserProfileContent';
            var3 = var3.bind(var9)(var10, var24);
            var10 = _closure1_slot1;
            var3 = 47;
            var3 = var22[var3];
            var9 = var10.bind(var5)(var3);
            var3 = var18.id;
            var30 = var9.bind(var5)(var3);
            var3 = var22[var2];
            var21 = var25.bind(var5)(var3);
            var20 = var21.useStateFromStoresObject;
            var3 = _closure1_slot10;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getPendingChanges;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var20.bind(var21)(var9, var3);
            var51 = var9.pendingBanner;
            var29 = var9.pendingAvatar;
            var42 = var9.pendingAvatarDecoration;
            var49 = var9.pendingGlobalName;
            var48 = var9.pendingPronouns;
            var3 = var9.pendingBio;
            _closure2_slot12 = var3;
            var21 = var9.pendingAccentColor;
            var20 = var9.pendingThemeColors;
            var23 = var9.pendingLegacyUsernameDisabled;
            var9 = 48;
            var9 = var22[var9];
            var28 = var25.bind(var5)(var9);
            var25 = var28.getPendingAvatarSrc;
            var9 = {};
            var33 = var18.id;
            var9['userId'] = var33;
            var9['image'] = var29;
            var50 = var25.bind(var28)(var9);
            var9 = 30;
            var9 = var22[var9];
            var9 = var10.bind(var5)(var9);
            var47 = var9.bind(var5)(var16, var23);
            var9 = 49;
            var9 = var22[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var9['user'] = var18;
            var9['displayProfile'] = var16;
            var22 = undefined;
            if(!var7) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var22 = var20;
case 51:
            var9['pendingThemeColors'] = var22;
            var9 = var10.bind(var5)(var9);
            var29 = var9.theme;
            var52 = var9.primaryColor;
            var28 = var9.secondaryColor;
            var37 = var1 != var52;
            _closure2_slot13 = var37;
            var10 = _closure1_slot0;
            var25 = _closure1_slot2;
            var9 = 50;
            var9 = var25[var9];
            var23 = var10.bind(var5)(var9);
            var22 = var23.useUserProfileColors;
            var9 = {};
            var9['theme'] = var29;
            var9['primaryColor'] = var52;
            var9['secondaryColor'] = var28;
            var9 = var22.bind(var23)(var9);
            var43 = var9.containerBackground;
            _closure2_slot14 = var43;
            var22 = var9.avatarBackground;
            var23 = var9.statusBackground;
            var28 = _closure1_slot4;
            var9 = var28.useRef;
            var29 = var9.bind(var28)(var1);
            var9 = 51;
            var9 = var25[var9];
            var10 = var10.bind(var5)(var9);
            var9 = var10.useMobileWishlistOwnerExperiment;
            var9 = var9.bind(var10)(var24);
            var25 = var9.enabled;
            if(!var25) { _fun0005_ip = 53; continue _fun0005 }
case 54:
            var25 = var27;
case 53:
            _closure2_slot15 = var25;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = var10[var2];
            var33 = var9.bind(var5)(var2);
            var28 = var33.useStateFromStores;
            var2 = _closure1_slot11;
            var24 = new Array(1);
            var24[0] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot15;
                    var1 = null;
                    if(!var3) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                    var4 = _closure1_slot11;
                    var3 = var4.getFirstWishlistId;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 55:
                    return var1;
                }
            };
            var54 = var28.bind(var33)(var24, var2);
            _closure2_slot16 = var54;
            var2 = 52;
            var2 = var10[var2];
            var10 = var9.bind(var5)(var2);
            var9 = var10.useFetchWishlist;
            var2 = {};
            var2['wishlistId'] = var54;
            var24 = var18.id;
            var2['userId'] = var24;
            var2 = var9.bind(var10)(var2);
            var9 = _closure1_slot4;
            var2 = var9.useState;
            var44 = 0;
            var2 = var2.bind(var9)(var44);
            var9 = _closure1_slot3;
            var56 = 2;
            var2 = var9.bind(var5)(var2, var56);
            var34 = var2[var44];
            var10 = 1;
            var2 = var2[var10];
            _closure2_slot17 = var2;
            var33 = _closure1_slot4;
            var28 = var33.useCallback;
            var24 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot17;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var2 = new Array(0);
            var28 = var28.bind(var33)(var24, var2);
            var33 = _closure1_slot4;
            var24 = var33.useRef;
            var2 = new Array(0);
            var2 = var24.bind(var33)(var2);
            _closure2_slot18 = var2;
            var24 = _closure1_slot4;
            var2 = var24.useState;
            var2 = var2.bind(var24)(var5);
            var2 = var9.bind(var5)(var2, var56);
            var33 = var2[var44];
            var2 = var2[var10];
            _closure2_slot19 = var2;
            var24 = _closure1_slot4;
            var9 = var24.useRef;
            var2 = _closure1_slot12;
            var53 = var2.WISHLIST;
            var2 = 0;
            if(!(var36 === var53)) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var2 = var10;
case 57:
            var2 = var9.bind(var24)(var2);
            _closure2_slot20 = var2;
            var53 = _closure1_slot4;
            var24 = var53.useCallback;
            var9 = function(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = arg1;
                    var3 = arg3;
                    var1 = 0;
                    if(!(!(var3 <= var1))) { _fun0008_ip = 59; continue _fun0008 }
case 56:
                    var2 = _closure2_slot18;
                    var2 = var2.current;
                    var4 = var2[var5];
                    var2 = _closure2_slot18;
                    var2 = var2.current;
                    var2[var5] = var3;
                    var2 = _closure2_slot20;
                    var2 = var2.current;
                    var2 = var5 === var2;
                    if(!var2) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                    var2 = var3 !== var4;
case 60:
                    if(!var2) { _fun0008_ip = 59; continue _fun0008 }
case 62:
                    var2 = _closure2_slot19;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 59:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = new Array(0);
            var53 = var24.bind(var53)(var9, var2);
            _closure2_slot21 = var53;
            var57 = _closure1_slot4;
            var24 = var57.useState;
            var9 = _closure1_slot12;
            var2 = var9.WISHLIST;
            var2 = var36 === var2;
            var24 = var24.bind(var57)(var2);
            var2 = _closure1_slot3;
            var24 = var2.bind(var5)(var24, var56);
            var2 = var24[var44];
            _closure2_slot22 = var2;
            var24 = var24[var10];
            _closure2_slot23 = var24;
            var57 = _closure1_slot4;
            var56 = var57.useCallback;
            var24 = new Array(1);
            var24[0] = var6;
            var6 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = arg1;
                    var1 = _closure2_slot20;
                    var1['current'] = var4;
                    var3 = _closure2_slot23;
                    var1 = 1;
                    var6 = var1 === var4;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var6);
                    var5 = _closure2_slot8;
                    var3 = {};
                    var7 = 'PRESS_SECTION';
                    var3['action'] = var7;
                    var7 = _closure1_slot12;
                    if(var6) { _fun0009_ip = 63; continue _fun0009 }
case 64:
                    var6 = var7.MAIN;
                    _fun0009_ip = 65; continue _fun0009;
case 63:
                    var6 = var7.WISHLIST;
case 65:
                    var3['section'] = var6;
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure2_slot18;
                    var3 = var3.current;
                    var3 = var3[var4];
                    var4 = null;
                    if(!(var4 != var3)) { _fun0009_ip = 66; continue _fun0009 }
case 67:
                    var2 = _closure2_slot19;
                    var2 = var2.bind(var1)(var3);
case 66:
                    return var1;
                }
            };
            var6 = var56.bind(var57)(var6, var24);
            var57 = _closure1_slot4;
            var56 = var57.useCallback;
            var24 = new Array(1);
            var24[0] = var8;
            var8 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var4 = _closure2_slot5;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0010_ip = 50; continue _fun0010 }
case 68:
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)();
case 50:
                    return var1;
                }
            };
            var57 = var56.bind(var57)(var8, var24);
            _closure2_slot24 = var57;
            var56 = _closure1_slot4;
            var24 = var56.useCallback;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var4 = _closure2_slot6;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0011_ip = 50; continue _fun0011 }
case 68:
                    var2 = _closure2_slot6;
                    var2 = var2.bind(var1)();
case 50:
                    return var1;
                }
            };
            var56 = var24.bind(var56)(var4, var8);
            _closure2_slot25 = var56;
            var24 = _closure1_slot4;
            var8 = var24.useCallback;
            var4 = new Array(14);
            var4[0] = var18;
            var4[1] = var17;
            var4[2] = var43;
            var4[3] = var11;
            var4[4] = var7;
            var4[5] = var57;
            var4[6] = var56;
            var4[7] = var37;
            var4[8] = var41;
            var4[9] = var55;
            var4[10] = var16;
            var4[11] = var3;
            var4[12] = var15;
            var4[13] = var45;
            var3 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0012_ip = 69; continue _fun0012 }
case 70:
                    var2 = _closure2_slot9;
                    if(!(var1 != var2)) { _fun0012_ip = 69; continue _fun0012 }
case 3:
                    var6 = _closure2_slot7;
                    var2 = var6.card;
                    var12 = new Array(2);
                    var12[0] = var2;
                    var2 = {};
                    var3 = _closure2_slot14;
                    var2['backgroundColor'] = var3;
                    var12[1] = var2;
                    var5 = _closure1_slot18;
                    var4 = _closure1_slot6;
                    var3 = {};
                    var7 = var6.cards;
                    var2 = new Array(2);
                    var2[0] = var7;
                    var6 = var6.profileContent;
                    var2[1] = var6;
                    var3['style'] = var2;
                    var2 = _closure2_slot0;
                    var2 = var2.isProvisional;
                    if(!var2) { _fun0012_ip = 71; continue _fun0012 }
case 72:
                    var10 = _closure1_slot17;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 53;
                    var6 = var9[var6];
                    var9 = undefined;
                    var6 = var7.bind(var9)(var6);
                    var7 = var6.UserProfileProvisionalAccountExplainerCard;
                    var6 = {};
                    var6['style'] = var12;
                    var13 = _closure2_slot0;
                    var13 = var13.id;
                    var6['userId'] = var13;
                    var13 = 16;
                    var6['iconSize'] = var13;
                    var2 = var10.bind(var9)(var7, var6);
case 71:
                    var6 = new Array(10);
                    var6[0] = var2;
                    var2 = _closure2_slot0;
                    var7 = var2.id;
                    var2 = _closure2_slot9;
                    var2 = var2.id;
                    var2 = var7 === var2;
                    if(!var2) { _fun0012_ip = 73; continue _fun0012 }
case 74:
                    var7 = _closure2_slot4;
                    var2 = !var7;
case 73:
                    if(!var2) { _fun0012_ip = 75; continue _fun0012 }
case 76:
                    var13 = _closure1_slot17;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 54;
                    var7 = var10[var7];
                    var10 = undefined;
                    var9 = var9.bind(var10)(var7);
                    var7 = {};
                    var14 = _closure2_slot24;
                    var7['navigateToPremium'] = var14;
                    var14 = _closure2_slot25;
                    var7['navigateToShop'] = var14;
                    var14 = _closure2_slot13;
                    var7['hasCustomProfileTheme'] = var14;
                    var2 = var13.bind(var10)(var9, var7);
case 75:
                    var6[1] = var2;
                    var10 = _closure1_slot17;
                    var9 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 55;
                    var7 = var7[var2];
                    var2 = undefined;
                    var9 = var9.bind(var2)(var7);
                    var7 = {};
                    var13 = _closure2_slot0;
                    var7['user'] = var13;
                    var13 = _closure2_slot9;
                    var7['currentUser'] = var13;
                    var13 = _closure2_slot11;
                    var7['guildId'] = var13;
                    var7['style'] = var12;
                    var7 = var10.bind(var2)(var9, var7);
                    var6[2] = var7;
                    var7 = _closure2_slot10;
                    var9 = var7.length;
                    var7 = 0;
                    var7 = var9 > var7;
                    if(!var7) { _fun0012_ip = 77; continue _fun0012 }
case 78:
                    var13 = _closure1_slot17;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 56;
                    var9 = var14[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = {};
                    var14 = _closure2_slot0;
                    var14 = var14.id;
                    var9['userId'] = var14;
                    var14 = _closure2_slot10;
                    var9['applicationIds'] = var14;
                    var9['style'] = var12;
                    var7 = var13.bind(var2)(var10, var9);
case 77:
                    var6[3] = var7;
                    var10 = _closure1_slot17;
                    var9 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var7 = 57;
                    var7 = var13[var7];
                    var9 = var9.bind(var2)(var7);
                    var7 = {};
                    var13 = _closure2_slot0;
                    var13 = var13.id;
                    var7['userId'] = var13;
                    var13 = _closure2_slot2;
                    var7['displayProfile'] = var13;
                    var14 = _closure2_slot4;
                    var13 = undefined;
                    if(!var14) { _fun0012_ip = 79; continue _fun0012 }
case 80:
                    var13 = _closure2_slot12;
case 79:
                    var7['pendingBio'] = var13;
                    var7['style'] = var12;
                    var7 = var10.bind(var2)(var9, var7);
                    var6[4] = var7;
                    var7 = _closure2_slot11;
                    var7 = var1 != var7;
                    if(!var7) { _fun0012_ip = 81; continue _fun0012 }
case 82:
                    var13 = _closure1_slot17;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 58;
                    var9 = var14[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = {};
                    var14 = _closure2_slot0;
                    var14 = var14.id;
                    var9['userId'] = var14;
                    var14 = _closure2_slot11;
                    var9['guildId'] = var14;
                    var9['style'] = var12;
                    var7 = var13.bind(var2)(var10, var9);
case 81:
                    var6[5] = var7;
                    var7 = _closure2_slot1;
                    var9 = var1 == var7;
                    var7 = undefined;
                    if(var9) { _fun0012_ip = 83; continue _fun0012 }
case 84:
                    var9 = _closure2_slot1;
                    var7 = var9.guild_id;
case 83:
                    var7 = var1 != var7;
                    if(!var7) { _fun0012_ip = 85; continue _fun0012 }
case 86:
                    var13 = _closure1_slot17;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 59;
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
                    var9['style'] = var12;
                    var7 = var13.bind(var2)(var10, var9);
case 85:
                    var6[6] = var7;
                    var16 = _closure1_slot17;
                    var9 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var7 = 60;
                    var10 = var14[var7];
                    var10 = var9.bind(var2)(var10);
                    var15 = var10.UserProfileAccountConnectionsCard;
                    var10 = {};
                    var13 = _closure2_slot0;
                    var17 = var13.id;
                    var10['userId'] = var17;
                    var10['style'] = var12;
                    var10 = var16.bind(var2)(var15, var10);
                    var6[7] = var10;
                    var10 = _closure1_slot17;
                    var7 = var14[var7];
                    var7 = var9.bind(var2)(var7);
                    var9 = var7.UserProfileApplicationRoleConnectionsCard;
                    var7 = {};
                    var13 = var13.id;
                    var7['userId'] = var13;
                    var7['style'] = var12;
                    var7 = var10.bind(var2)(var9, var7);
                    var6[8] = var7;
                    var7 = _closure2_slot4;
                    var7 = !var7;
                    if(!var7) { _fun0012_ip = 87; continue _fun0012 }
case 88:
                    var10 = _closure1_slot17;
                    var9 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 61;
                    var8 = var13[var8];
                    var9 = var9.bind(var2)(var8);
                    var8 = {};
                    var13 = _closure2_slot0;
                    var13 = var13.id;
                    var8['userId'] = var13;
                    var8['style'] = var12;
                    var11 = _closure2_slot3;
                    var8['onBack'] = var11;
                    var7 = var10.bind(var2)(var9, var8);
case 87:
                    var6[9] = var7;
                    var3['children'] = var6;
                    var2 = var5.bind(var2)(var4, var3);
                    return var2;
case 69:
                    return var1;
                }
            };
            var24 = var8.bind(var24)(var3, var4);
            _closure2_slot26 = var24;
            var8 = _closure1_slot4;
            var4 = var8.useCallback;
            var55 = var11.profileContent;
            var3 = new Array(3);
            var3[0] = var55;
            var3[1] = var54;
            var3[2] = var2;
            var2 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var4 = _closure1_slot17;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var1 = _closure2_slot7;
                    var1 = var1.profileContent;
                    var2['style'] = var1;
                    var5 = _closure2_slot16;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0013_ip = 89; continue _fun0013 }
case 90:
                    var7 = _closure1_slot17;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var1 = 62;
                    var1 = var11[var1];
                    var6 = undefined;
                    var5 = var10.bind(var6)(var1);
                    var1 = {};
                    var12 = _closure2_slot16;
                    var1['wishlistId'] = var12;
                    var12 = _closure1_slot16;
                    var1['maxWidth'] = var12;
                    var8 = _closure2_slot22;
                    var1['isVisible'] = var8;
                    var8 = 15;
                    var8 = var11[var8];
                    var8 = var10.bind(var6)(var8);
                    var8 = var8.hideActionSheet;
                    var1['onNavigateAway'] = var8;
                    var1 = var7.bind(var6)(var5, var1);
                    _fun0013_ip = 91; continue _fun0013;
case 89:
                    var8 = _closure1_slot17;
                    var6 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 62;
                    var5 = var11[var5];
                    var7 = undefined;
                    var5 = var6.bind(var7)(var5);
                    var6 = var5.WishlistEmptyState;
                    var5 = {};
                    var10 = _closure1_slot1;
                    var9 = 15;
                    var9 = var11[var9];
                    var9 = var10.bind(var7)(var9);
                    var9 = var9.hideActionSheet;
                    var5['onNavigateAway'] = var9;
                    var1 = var8.bind(var7)(var6, var5);
case 91:
                    var2['children'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var2 = var4.bind(var8)(var2, var3);
            _closure2_slot27 = var2;
            var8 = _closure1_slot4;
            var4 = var8.useMemo;
            var3 = new Array(3);
            var3[0] = var53;
            var3[1] = var24;
            var3[2] = var2;
            var2 = function() {
                var2 = {};
                var1 = 'main';
                var2['id'] = var1;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 26;
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
                var10 = _closure1_slot17;
                var5 = _closure1_slot5;
                var1 = {};
                var9 = false;
                var1['scrollEnabled'] = var9;
                var7 = function onContentSizeChange(arg1, arg2) {
                    var5 = _closure2_slot21;
                    var4 = undefined;
                    var3 = 0;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var1['onContentSizeChange'] = var7;
                var11 = _closure2_slot26;
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
                var4 = var4.7lZ31J;
                var4 = var10.bind(var11)(var4);
                var2['label'] = var4;
                var4 = _closure1_slot17;
                var3 = {};
                var3['scrollEnabled'] = var9;
                var8 = function onContentSizeChange(arg1, arg2) {
                    var5 = _closure2_slot21;
                    var4 = undefined;
                    var3 = 1;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var3['onContentSizeChange'] = var8;
                var7 = _closure2_slot27;
                var7 = var7.bind(var6)();
                var3['children'] = var7;
                var3 = var4.bind(var6)(var5, var3);
                var2['page'] = var3;
                var1[1] = var2;
                return var1;
            };
            var8 = var4.bind(var8)(var2, var3);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 63;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useSegmentedControlState;
            var2 = {};
            var2['pageWidth'] = var34;
            var34 = var9.WISHLIST;
            var9 = 0;
            if(!(var36 === var34)) { _fun0005_ip = 92; continue _fun0005 }
case 93:
            var9 = var10;
case 92:
            var2['defaultIndex'] = var9;
            var10 = _closure1_slot1;
            var34 = _closure1_slot2;
            var9 = 39;
            var9 = var34[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_24;
            var2['itemSpacing'] = var9;
            var2['items'] = var8;
            var2['onPageChange'] = var6;
            var34 = var3.bind(var4)(var2);
            if(!(var1 != var18)) { _fun0005_ip = 94; continue _fun0005 }
case 95:
            if(!(var1 != var17)) { _fun0005_ip = 94; continue _fun0005 }
case 96:
            var36 = {};
            var36['backgroundColor'] = var43;
            _closure2_slot28 = var36;
            var4 = _closure1_slot18;
            var3 = _closure1_slot19;
            var2 = {};
            var6 = var1 == var16;
            var8 = undefined;
            if(var6) { _fun0005_ip = 97; continue _fun0005 }
case 98:
            var8 = var16.private;
case 97:
            var6 = true;
            var8 = var6 === var8;
            if(!var8) { _fun0005_ip = 99; continue _fun0005 }
case 100:
            var10 = _closure1_slot17;
            var9 = _closure1_slot1;
            var53 = _closure1_slot2;
            var6 = 64;
            var6 = var53[var6];
            var9 = var9.bind(var5)(var6);
            var6 = {};
            var6['primaryColor'] = var52;
            var8 = var10.bind(var5)(var9, var6);
case 99:
            var6 = new Array(4);
            var6[0] = var8;
            var10 = _closure1_slot17;
            var9 = _closure1_slot1;
            var52 = _closure1_slot2;
            var8 = 65;
            var8 = var52[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var8['user'] = var18;
            var8['displayProfile'] = var16;
            var8['bannerHeight'] = var13;
            var13 = undefined;
            if(!var7) { _fun0005_ip = 101; continue _fun0005 }
case 102:
            var13 = var51;
case 101:
            var8['pendingBanner'] = var13;
            var13 = undefined;
            if(!var7) { _fun0005_ip = 103; continue _fun0005 }
case 104:
            var13 = var50;
case 103:
            var8['pendingAvatarSrc'] = var13;
            var13 = undefined;
            if(!var7) { _fun0005_ip = 105; continue _fun0005 }
case 106:
            var51 = var1 != var21;
            var13 = undefined;
            if(!var51) { _fun0005_ip = 105; continue _fun0005 }
case 107:
            var13 = var21;
case 105:
            var8['pendingAccentColor'] = var13;
            var13 = undefined;
            if(!var7) { _fun0005_ip = 108; continue _fun0005 }
case 109:
            var21 = var1 != var20;
            var13 = undefined;
            if(!var21) { _fun0005_ip = 108; continue _fun0005 }
case 110:
            var13 = var20;
case 108:
            var8['pendingThemeColors'] = var13;
            var8['disableInteraction'] = var7;
            var8 = var10.bind(var5)(var9, var8);
            var6[1] = var8;
            var10 = _closure1_slot18;
            var9 = _closure1_slot6;
            var8 = {};
            var21 = _closure1_slot17;
            var20 = _closure1_slot1;
            var51 = _closure1_slot2;
            var13 = 66;
            var13 = var51[var13];
            var20 = var20.bind(var5)(var13);
            var13 = {};
            var13['user'] = var18;
            var13['guildId'] = var41;
            var13['disableStatus'] = var26;
            var26 = undefined;
            if(!var7) { _fun0005_ip = 111; continue _fun0005 }
case 112:
            var26 = var50;
case 111:
            var13['pendingAvatarSrc'] = var26;
            var26 = undefined;
            if(!var7) { _fun0005_ip = 113; continue _fun0005 }
case 114:
            var26 = var42;
case 113:
            var13['pendingAvatarDecoration'] = var26;
            var13['backgroundColor'] = var22;
            var22 = {};
            var22['backgroundColor'] = var23;
            var13['statusStyle'] = var22;
            var20 = var21.bind(var5)(var20, var13);
            var13 = new Array(2);
            var13[0] = var20;
            var22 = _closure1_slot18;
            var21 = _closure1_slot6;
            var20 = {};
            var26 = var11.profileContentWrapper;
            var23 = new Array(2);
            var23[0] = var26;
            var26 = {};
            if(!var27) { _fun0005_ip = 115; continue _fun0005 }
case 116:
            var27 = 0;
            if(!var7) { _fun0005_ip = 117; continue _fun0005 }
case 115:
            var42 = var1 != var30;
            var27 = 0;
            if(var42) { _fun0005_ip = 117; continue _fun0005 }
case 118:
            var27 = _closure1_slot14;
case 117:
            var26['paddingTop'] = var27;
            var27 = _closure1_slot13;
            var27 = var32 + var27;
            var26['paddingBottom'] = var27;
            var23[1] = var26;
            var20['style'] = var23;
            var27 = _closure1_slot17;
            var26 = _closure1_slot20;
            var23 = {};
            var23['customStatusActivity'] = var30;
            var23['user'] = var18;
            var23['guildId'] = var41;
            var32 = var1 == var15;
            var30 = undefined;
            if(var32) { _fun0005_ip = 119; continue _fun0005 }
case 120:
            var30 = var15.id;
case 119:
            var23['channelId'] = var30;
            var23['hasCustomProfileTheme'] = var37;
            var23['showUserProfileActionSheet'] = var45;
            var23['isPreviewingChanges'] = var7;
            var23['bubbleRef'] = var29;
            var26 = var27.bind(var5)(var26, var23);
            var23 = new Array(3);
            var23[0] = var26;
            var29 = _closure1_slot18;
            var27 = _closure1_slot6;
            var26 = {};
            var32 = var11.primaryInfo;
            var30 = new Array(2);
            var30[0] = var32;
            var32 = var11.profileContent;
            var30[1] = var32;
            var26['style'] = var30;
            var42 = _closure1_slot17;
            var32 = _closure1_slot23;
            var30 = {};
            var30['user'] = var18;
            var50 = var1 == var15;
            var44 = undefined;
            if(var50) { _fun0005_ip = 121; continue _fun0005 }
case 122:
            var44 = var15.id;
case 121:
            var30['channelId'] = var44;
            var30['displayProfile'] = var16;
            var44 = undefined;
            if(!var7) { _fun0005_ip = 123; continue _fun0005 }
case 124:
            var44 = var49;
case 123:
            var30['displayNameOverride'] = var44;
            var44 = undefined;
            if(!var7) { _fun0005_ip = 125; continue _fun0005 }
case 126:
            var44 = var48;
case 125:
            var30['pronounsOverride'] = var44;
            var44 = undefined;
            if(!var7) { _fun0005_ip = 127; continue _fun0005 }
case 128:
            var44 = var47;
case 127:
            var30['badgesOverride'] = var44;
            var30['badgeContainerBackground'] = var43;
            var30['isPreviewingChanges'] = var7;
            var32 = var42.bind(var5)(var32, var30);
            var30 = new Array(7);
            var30[0] = var32;
            var42 = var18.id;
            var32 = var17.id;
            var32 = var42 !== var32;
            if(!var32) { _fun0005_ip = 129; continue _fun0005 }
case 130:
            var44 = _closure1_slot17;
            var43 = _closure1_slot1;
            var47 = _closure1_slot2;
            var42 = 67;
            var42 = var47[var42];
            var43 = var43.bind(var5)(var42);
            var42 = {};
            var42['user'] = var18;
            var42['guildId'] = var41;
            var32 = var44.bind(var5)(var43, var42);
case 129:
            var30[1] = var32;
            var32 = _closure1_slot15;
            var32 = var32.PENDING_INCOMING;
            var32 = var19 === var32;
            if(!var32) { _fun0005_ip = 131; continue _fun0005 }
case 132:
            var44 = _closure1_slot17;
            var43 = _closure1_slot1;
            var47 = _closure1_slot2;
            var42 = 68;
            var42 = var47[var42];
            var43 = var43.bind(var5)(var42);
            var42 = {};
            var42['user'] = var18;
            var48 = var1 == var15;
            var47 = undefined;
            if(var48) { _fun0005_ip = 133; continue _fun0005 }
case 134:
            var47 = var15.id;
case 133:
            var42['channelId'] = var47;
            var42['guildId'] = var41;
            var42['applicationId'] = var46;
            var42['style'] = var36;
            var42['showUserProfile'] = var45;
            var32 = var44.bind(var5)(var43, var42);
case 131:
            var30[2] = var32;
            var32 = var35.map;
            var31 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot17;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 68;
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
                    if(var8) { _fun0014_ip = 135; continue _fun0014 }
case 136:
                    var8 = _closure2_slot1;
                    var7 = var8.id;
case 135:
                    var2['channelId'] = var7;
                    var7 = _closure2_slot11;
                    var2['guildId'] = var7;
                    var7 = _closure2_slot28;
                    var2['style'] = var7;
                    var6 = _closure2_slot3;
                    var2['showUserProfile'] = var6;
                    var1 = var1.applicationId;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var31 = var32.bind(var35)(var31);
            var30[3] = var31;
            var35 = _closure1_slot17;
            var32 = _closure1_slot1;
            var42 = _closure1_slot2;
            var31 = 69;
            var31 = var42[var31];
            var32 = var32.bind(var5)(var31);
            var31 = {};
            var31['user'] = var18;
            var31['style'] = var36;
            var31 = var35.bind(var5)(var32, var31);
            var30[4] = var31;
            var32 = var18.id;
            var31 = var17.id;
            var31 = var32 === var31;
            if(!var31) { _fun0005_ip = 137; continue _fun0005 }
case 138:
            var31 = !var7;
case 137:
            if(!var31) { _fun0005_ip = 139; continue _fun0005 }
case 140:
            var36 = _closure1_slot17;
            var35 = _closure1_slot24;
            var32 = {};
            var32['guildId'] = var41;
            var31 = var36.bind(var5)(var35, var32);
case 139:
            var30[5] = var31;
            var32 = var18.id;
            var31 = var17.id;
            var31 = var32 !== var31;
            if(!var31) { _fun0005_ip = 141; continue _fun0005 }
case 142:
            var36 = _closure1_slot17;
            var35 = _closure1_slot1;
            var41 = _closure1_slot2;
            var32 = 70;
            var32 = var41[var32];
            var35 = var35.bind(var5)(var32);
            var32 = {};
            var32['user'] = var18;
            if(var40) { _fun0005_ip = 143; continue _fun0005 }
case 144:
            var41 = _closure1_slot15;
            var41 = var41.BLOCKED;
            var40 = var19 === var41;
case 143:
            if(var40) { _fun0005_ip = 145; continue _fun0005 }
case 146:
            var40 = var18.isProvisional;
case 145:
            var32['disableCalls'] = var40;
            var32['disableMessage'] = var39;
            var32['location'] = var38;
            var32['hasCustomProfileTheme'] = var37;
            var37 = var11.primaryButtons;
            var32['style'] = var37;
            var31 = var36.bind(var5)(var35, var32);
case 141:
            var30[6] = var31;
            var26['children'] = var30;
            var26 = var29.bind(var5)(var27, var26);
            var23[1] = var26;
            if(var25) { _fun0005_ip = 147; continue _fun0005 }
case 148:
            var24 = var24.bind(var5)();
            _fun0005_ip = 149; continue _fun0005;
case 147:
            var27 = _closure1_slot18;
            var26 = _closure1_slot6;
            var25 = {};
            var25['onLayout'] = var28;
            var29 = _closure1_slot17;
            var28 = {};
            var30 = var11.profileTablist;
            var28['style'] = var30;
            var32 = _closure1_slot17;
            var31 = _closure1_slot0;
            var35 = _closure1_slot2;
            var30 = 71;
            var30 = var35[var30];
            var30 = var31.bind(var5)(var30);
            var31 = var30.Tabs;
            var30 = {};
            var30['state'] = var34;
            var30 = var32.bind(var5)(var31, var30);
            var28['children'] = var30;
            var29 = var29.bind(var5)(var26, var28);
            var28 = new Array(2);
            var28[0] = var29;
            var30 = _closure1_slot17;
            var29 = {};
            var32 = var1 != var33;
            var31 = undefined;
            if(!var32) { _fun0005_ip = 150; continue _fun0005 }
case 151:
            var32 = {};
            var32['height'] = var33;
            var31 = var32;
case 150:
            var29['style'] = var31;
            var33 = _closure1_slot17;
            var32 = _closure1_slot0;
            var35 = _closure1_slot2;
            var31 = 72;
            var31 = var35[var31];
            var31 = var32.bind(var5)(var31);
            var32 = var31.SegmentedControlPages;
            var31 = {};
            var31['state'] = var34;
            var31 = var33.bind(var5)(var32, var31);
            var29['children'] = var31;
            var29 = var30.bind(var5)(var26, var29);
            var28[1] = var29;
            var25['children'] = var28;
            var24 = var27.bind(var5)(var26, var25);
case 149:
            var23[2] = var24;
            var20['children'] = var23;
            var20 = var22.bind(var5)(var21, var20);
            var13[1] = var20;
            var8['children'] = var13;
            var8 = var10.bind(var5)(var9, var8);
            var6[2] = var8;
            var7 = !var7;
            if(!var7) { _fun0005_ip = 152; continue _fun0005 }
case 153:
            var10 = _closure1_slot18;
            var9 = _closure1_slot6;
            var8 = {};
            var11 = var11.bannerButtons;
            var8['style'] = var11;
            var20 = var18.id;
            var11 = var17.id;
            var13 = null;
            if(!(var20 !== var11)) { _fun0005_ip = 154; continue _fun0005 }
case 155:
            var11 = var18.bot;
            var13 = null;
            if(var11) { _fun0005_ip = 154; continue _fun0005 }
case 156:
            var11 = _closure1_slot15;
            var11 = var11.FRIEND;
            if(!(var19 !== var11)) { _fun0005_ip = 157; continue _fun0005 }
case 158:
            var11 = null;
            if(!var14) { _fun0005_ip = 159; continue _fun0005 }
case 160:
            var20 = _closure1_slot17;
            var19 = _closure1_slot22;
            var14 = {};
            var14['user'] = var18;
            var11 = var20.bind(var5)(var19, var14);
case 159:
            _fun0005_ip = 161; continue _fun0005;
case 157:
            var20 = _closure1_slot17;
            var19 = _closure1_slot21;
            var14 = {};
            var14['user'] = var18;
            var11 = var20.bind(var5)(var19, var14);
case 161:
            var13 = var11;
case 154:
            var11 = new Array(2);
            var11[0] = var13;
            var14 = _closure1_slot17;
            var13 = _closure1_slot1;
            var19 = _closure1_slot2;
            var12 = 73;
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
case 152:
            var6[3] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 94:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 74;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/native/UserProfileContent.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['PrimaryInfo'] = var2;
    return var1;
})();
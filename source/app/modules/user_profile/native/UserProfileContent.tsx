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
            var15 = var1.user;
            var _closure2_slot0 = var15;
            var16 = var1.guildId;
            var _closure2_slot1 = var16;
            var17 = var1.channelId;
            var _closure2_slot2 = var17;
            var11 = var1.hasCustomProfileTheme;
            var10 = var1.isPreviewingChanges;
            var13 = var1.bubbleRef;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 13;
            var3 = var5[var3];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var7 = var3.bind(var4)();
            var3 = _closure1_slot0;
            var6 = 14;
            var6 = var5[var6];
            var18 = var3.bind(var4)(var6);
            var14 = var18.useStateFromStores;
            var6 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var6;
            var8 = new Array(1);
            var8[0] = var15;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot8;
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
            var8 = var14.bind(var18)(var9, var6, var8);
            var14 = _closure1_slot4;
            var9 = var14.useCallback;
            var6 = new Array(3);
            var6[0] = var17;
            var6[1] = var16;
            var6[2] = var15;
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
            var9 = var9.bind(var14)(var2, var6);
            var2 = 18;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useIsEligibleForCustomStatusLabelsExperiment;
            var2 = {};
            var6 = 'CustomStatusBubble';
            var2['location'] = var6;
            var14 = var3.bind(var5)(var2);
            var6 = _closure1_slot4;
            var5 = var6.useRef;
            var3 = null;
            var2 = null;
            if(!var14) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = var3 == var12;
            var2 = null;
            if(!var14) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var2 = null;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var2 = null;
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 8:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 19;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var2 = var14.bind(var4)();
case 4:
            var5 = var5.bind(var6)(var2);
            var2 = var5.current;
            var2 = var3 != var2;
            var6 = undefined;
            if(!var2) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = var5.current;
            var2 = var3.label;
            var6 = var2.bind(var3)();
case 9:
            var3 = _closure1_slot16;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 20;
            var1 = var14[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['ref'] = var13;
            var1['customStatusActivity'] = var12;
            var1['hasCustomProfileTheme'] = var11;
            if(!var8) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var8 = !var10;
case 11:
            var1['editEnabled'] = var8;
            var8 = undefined;
            if(var10) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var8 = var9;
case 13:
            var1['onPressTruncatedStatus'] = var8;
            var8 = var7.customStatusBubble;
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
    var _closure1_slot19 = var1;
    var1 = function RemoveFriendIconButton(arg1) {
        var1 = arg1;
        var3 = var1.user;
        var _closure2_slot0 = var3;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 21;
        var1 = var10[var1];
        var4 = undefined;
        var2 = var9.bind(var4)(var1);
        var1 = var2.useUserProfileAnalyticsContext;
        var1 = var1.bind(var2)();
        var1 = var1.trackUserProfileAction;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot1;
        var1 = 22;
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
            var2 = 23;
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
        var1 = 24;
        var1 = var10[var1];
        var2 = var2.bind(var4)(var1);
        var1 = var2.useName;
        var1 = var1.bind(var2)(var3);
        var _closure2_slot4 = var1;
        var3 = _closure1_slot16;
        var1 = 25;
        var1 = var10[var1];
        var1 = var9.bind(var4)(var1);
        var2 = var1.IconButton;
        var1 = {'size': 'sm', 'variant': 'secondary-overlay'};
        var8 = _closure1_slot16;
        var6 = 26;
        var6 = var10[var6];
        var6 = var9.bind(var4)(var6);
        var7 = var6.UserCheckIcon;
        var6 = {'size': 'sm', 'color': 'white'};
        var6 = var8.bind(var4)(var7, var6);
        var1['icon'] = var6;
        var6 = 27;
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
            var1 = 28;
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
    var _closure1_slot20 = var1;
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
            var3 = 29;
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
        var4 = _closure1_slot16;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 25;
        var1 = var10[var1];
        var3 = undefined;
        var1 = var9.bind(var3)(var1);
        var2 = var1.IconButton;
        var1 = {'size': 'sm', 'variant': 'secondary-overlay'};
        var8 = _closure1_slot16;
        var6 = 30;
        var6 = var10[var6];
        var6 = var9.bind(var3)(var6);
        var7 = var6.UserPlatformIcon;
        var6 = {'size': 'sm', 'color': 'white'};
        var6 = var8.bind(var3)(var7, var6);
        var1['icon'] = var6;
        var6 = 27;
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
    var _closure1_slot21 = var1;
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
            var1 = 24;
            var1 = var13[var1];
            var3 = var8.bind(var4)(var1);
            var1 = var3.useUserTag;
            var1 = var1.bind(var3)(var17);
            var _closure2_slot0 = var1;
            var3 = 31;
            var3 = var13[var3];
            var3 = var8.bind(var4)(var3);
            var11 = var3.bind(var4)(var16);
            var3 = 32;
            var3 = var13[var3];
            var15 = var8.bind(var4)(var3);
            var8 = var15.useName;
            var13 = null;
            var19 = var13 == var16;
            var3 = undefined;
            if(var19) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var3 = var16.guildId;
case 15:
            var18 = var8.bind(var15)(var3, var18, var17);
            var15 = var18;
            if(!(var13 != var2)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var3 = var2.trim;
            var3 = var3.bind(var2)();
            var8 = var3.length;
            var3 = 0;
            var15 = var18;
            if(!(var8 > var3)) { _fun0003_ip = 17; continue _fun0003 }
case 19:
            var15 = var2;
case 17:
            var3 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 21;
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
                var5 = 33;
                var5 = var4[var5];
                var6 = var3.bind(var1)(var5);
                var5 = var6.copy;
                var2 = _closure2_slot0;
                var2 = var5.bind(var6)(var2);
                var2 = 34;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentUsernameCopied;
                var2 = var2.bind(var3)();
                return var1;
            };
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot16;
            var2 = _closure1_slot1;
            var1 = 35;
            var1 = var18[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['user'] = var17;
            var18 = var13 == var16;
            var17 = undefined;
            if(var18) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var17 = var16.guildId;
case 20:
            var1['guildId'] = var17;
            var1['displayName'] = var15;
            if(!(var13 == var14)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var17 = var13 == var16;
            var15 = undefined;
            if(var17) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var15 = var16.pronouns;
case 24:
            var14 = var15;
case 22:
            var1['pronouns'] = var14;
            if(!(var13 != var12)) { _fun0003_ip = 12; continue _fun0003 }
case 26:
            var11 = var12;
case 12:
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
            var6 = 27;
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
                var2 = 34;
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
    var _closure1_slot22 = var2;
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
            var1 = 21;
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
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var3.bind(var6)(var2, var1);
            var1 = 36;
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
            var3 = _closure1_slot16;
            var1 = 37;
            var1 = var19[var1];
            var2 = var20.bind(var4)(var1);
            var1 = {};
            var5 = var5.primaryButtons;
            var1['style'] = var5;
            var5 = _closure1_slot15;
            var1['maxWidth'] = var5;
            var14 = _closure1_slot16;
            var6 = 38;
            var5 = var19[var6];
            var5 = var9.bind(var4)(var5);
            var13 = var5.Button;
            var8 = {};
            var12 = 'primary';
            var8['variant'] = var12;
            var15 = _closure1_slot16;
            var11 = 39;
            var5 = var19[var11];
            var5 = var9.bind(var4)(var5);
            var9 = var5.PencilIcon;
            var5 = {};
            var18 = 'sm';
            var5['size'] = var18;
            var16 = 40;
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
            var9 = 27;
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
            var15 = 27;
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
                var3 = 41;
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
            var8 = _closure1_slot16;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = var15[var6];
            var6 = var14.bind(var4)(var6);
            var7 = var6.Button;
            var6 = {};
            var6['variant'] = var12;
            var13 = _closure1_slot16;
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
            var11 = 27;
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
                var3 = 41;
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
    var _closure1_slot23 = var1;
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
    var5 = var5.View;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.UserProfileSections;
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.PROFILE_CONTENT_BOTTOM_PADDING;
    var _closure1_slot12 = var9;
    var5 = var5.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
    var _closure1_slot13 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.RelationshipTypes;
    var _closure1_slot14 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot15 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot16 = var9;
    var9 = var5.jsxs;
    var _closure1_slot17 = var9;
    var5 = var5.Fragment;
    var _closure1_slot18 = var5;
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
            var44 = var1.showUserProfileActionSheet;
            var _closure2_slot3 = var44;
            var39 = var1.disableCalls;
            var38 = var1.disableMessage;
            var50 = var1.disableStatus;
            var7 = var1.isPreviewingChanges;
            var _closure2_slot4 = var7;
            var37 = var1.location;
            var32 = var1.navigateToPremium;
            var _closure2_slot5 = var32;
            var24 = var1.navigateToShop;
            var _closure2_slot6 = var24;
            var35 = var1.initialSection;
            var5 = undefined;
            var _closure2_slot9 = var5;
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
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 13;
            var2 = var1[var2];
            var2 = var3.bind(var5)(var2);
            var11 = var2.bind(var5)();
            var _closure2_slot7 = var11;
            var2 = 42;
            var2 = var1[var2];
            var4 = var3.bind(var5)(var2);
            var2 = _closure1_slot15;
            var10 = var4.bind(var5)(var2);
            var2 = 43;
            var2 = var1[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var33 = var2.bottom;
            var3 = _closure1_slot0;
            var2 = 14;
            var1 = var1[var2];
            var6 = var3.bind(var5)(var1);
            var4 = var6.useStateFromStores;
            var1 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var17 = var4.bind(var6)(var3, var1);
            var _closure2_slot8 = var17;
            var1 = null;
            var3 = var1 == var17;
            var4 = undefined;
            if(var3) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var4 = var17.id;
case 38:
            var3 = var18.id;
            var27 = var4 === var3;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = var6[var2];
            var13 = var4.bind(var5)(var3);
            var9 = var13.useStateFromStoresObject;
            var3 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var1 = {};
                var4 = _closure1_slot7;
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
            var3 = var9.bind(var13)(var8, var3);
            var19 = var3.relationshipType;
            var45 = var3.originApplicationId;
            var3 = 44;
            var3 = var6[var3];
            var9 = var4.bind(var5)(var3);
            var8 = var9.useIncomingGameRelationshipsForUser;
            var3 = var18.id;
            var34 = var8.bind(var9)(var3);
            var3 = 45;
            var3 = var6[var3];
            var9 = var4.bind(var5)(var3);
            var8 = var9.useIsGameFriends;
            var3 = var18.id;
            var14 = var8.bind(var9)(var3);
            var3 = 46;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.useUserProfileGameFriendApplicationIds;
            var3 = {};
            var8 = var18.id;
            var3['userId'] = var8;
            var54 = var4.bind(var6)(var3);
            _closure2_slot9 = var54;
            if(!(var1 == var16)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var3 = var1 == var15;
            var40 = undefined;
            if(var3) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var40 = var15.guild_id;
case 42:
            _fun0005_ip = 44; continue _fun0005;
case 40:
            var4 = var16.guildId;
            var6 = var1 != var4;
            var3 = undefined;
            if(!var6) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var3 = var4;
case 45:
            var40 = var3;
case 44:
            _closure2_slot10 = var40;
            var8 = _closure1_slot4;
            var6 = var8.useMemo;
            var4 = new Array(2);
            var4[0] = var40;
            var4[1] = var18;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot10;
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
                    var4 = _closure2_slot10;
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
            var6 = var6.bind(var8)(var3, var4);
            var23 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 47;
            var3 = var9[var3];
            var4 = var23.bind(var5)(var3);
            var3 = var4.useSubscribeGuildMembers;
            var8 = 'UserProfileContent';
            var3 = var3.bind(var4)(var6, var8);
            var4 = _closure1_slot1;
            var3 = 48;
            var3 = var9[var3];
            var6 = var4.bind(var5)(var3);
            var3 = var18.id;
            var30 = var6.bind(var5)(var3);
            var3 = var9[var2];
            var20 = var23.bind(var5)(var3);
            var13 = var20.useStateFromStoresObject;
            var3 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getPendingChanges;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var13.bind(var20)(var6, var3);
            var21 = var3.pendingBanner;
            var26 = var3.pendingAvatar;
            var51 = var3.pendingAvatarDecoration;
            var48 = var3.pendingGlobalName;
            var47 = var3.pendingPronouns;
            var6 = var3.pendingBio;
            _closure2_slot11 = var6;
            var20 = var3.pendingAccentColor;
            var13 = var3.pendingThemeColors;
            var22 = var3.pendingLegacyUsernameDisabled;
            var3 = 49;
            var3 = var9[var3];
            var25 = var23.bind(var5)(var3);
            var23 = var25.getPendingAvatarSrc;
            var3 = {};
            var28 = var18.id;
            var3['userId'] = var28;
            var3['image'] = var26;
            var52 = var23.bind(var25)(var3);
            var3 = 31;
            var3 = var9[var3];
            var3 = var4.bind(var5)(var3);
            var46 = var3.bind(var5)(var16, var22);
            var3 = 50;
            var3 = var9[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['user'] = var18;
            var3['displayProfile'] = var16;
            var9 = undefined;
            if(!var7) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var9 = var13;
case 51:
            var3['pendingThemeColors'] = var9;
            var3 = var4.bind(var5)(var3);
            var28 = var3.theme;
            var26 = var3.primaryColor;
            var23 = var3.secondaryColor;
            var36 = var1 != var26;
            _closure2_slot12 = var36;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 51;
            var3 = var9[var3];
            var25 = var4.bind(var5)(var3);
            var22 = var25.useUserProfileColors;
            var3 = {};
            var3['theme'] = var28;
            var3['primaryColor'] = var26;
            var3['secondaryColor'] = var23;
            var3 = var22.bind(var25)(var3);
            var41 = var3.gradientFallbackBackground;
            var42 = var3.containerBackground;
            _closure2_slot13 = var42;
            var22 = var3.avatarBackground;
            var49 = var3.statusBackground;
            _closure2_slot14 = var49;
            var25 = _closure1_slot4;
            var3 = var25.useRef;
            var29 = var3.bind(var25)(var1);
            var3 = 52;
            var3 = var9[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useMobileWishlistOwnerExperiment;
            var3 = var3.bind(var4)(var8);
            var25 = var3.enabled;
            if(!var25) { _fun0005_ip = 53; continue _fun0005 }
case 54:
            var25 = var27;
case 53:
            _closure2_slot15 = var25;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = var4[var2];
            var28 = var3.bind(var5)(var2);
            var9 = var28.useStateFromStores;
            var2 = _closure1_slot10;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot15;
                    var1 = null;
                    if(!var3) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                    var4 = _closure1_slot10;
                    var3 = var4.getFirstWishlistId;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 55:
                    return var1;
                }
            };
            var2 = var9.bind(var28)(var8, var2);
            _closure2_slot16 = var2;
            var9 = _closure1_slot4;
            var8 = var9.useState;
            var43 = 0;
            var28 = var8.bind(var9)(var43);
            var9 = _closure1_slot3;
            var8 = 2;
            var28 = var9.bind(var5)(var28, var8);
            var8 = var28[var43];
            var9 = 1;
            var28 = var28[var9];
            _closure2_slot17 = var28;
            var56 = _closure1_slot4;
            var55 = var56.useCallback;
            var53 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot17;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var28 = new Array(0);
            var28 = var55.bind(var56)(var53, var28);
            var56 = _closure1_slot4;
            var55 = var56.useCallback;
            var53 = new Array(1);
            var53[0] = var32;
            var32 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                    if(!(var3 != var4)) { _fun0008_ip = 50; continue _fun0008 }
case 57:
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)();
case 50:
                    return var1;
                }
            };
            var56 = var55.bind(var56)(var32, var53);
            _closure2_slot18 = var56;
            var55 = _closure1_slot4;
            var53 = var55.useCallback;
            var32 = new Array(1);
            var32[0] = var24;
            var24 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
                    if(!(var3 != var4)) { _fun0009_ip = 50; continue _fun0009 }
case 57:
                    var2 = _closure2_slot6;
                    var2 = var2.bind(var1)();
case 50:
                    return var1;
                }
            };
            var55 = var53.bind(var55)(var24, var32);
            _closure2_slot19 = var55;
            var53 = _closure1_slot4;
            var32 = var53.useCallback;
            var24 = new Array(14);
            var24[0] = var18;
            var24[1] = var17;
            var24[2] = var42;
            var24[3] = var11;
            var24[4] = var7;
            var24[5] = var56;
            var24[6] = var55;
            var24[7] = var36;
            var24[8] = var40;
            var24[9] = var54;
            var24[10] = var16;
            var24[11] = var6;
            var24[12] = var15;
            var24[13] = var44;
            var6 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0010_ip = 58; continue _fun0010 }
case 59:
                    var2 = _closure2_slot8;
                    if(!(var1 != var2)) { _fun0010_ip = 58; continue _fun0010 }
case 3:
                    var12 = {};
                    var2 = _closure2_slot13;
                    var12['backgroundColor'] = var2;
                    var5 = _closure1_slot17;
                    var4 = _closure1_slot5;
                    var3 = {};
                    var6 = _closure2_slot7;
                    var7 = var6.cards;
                    var2 = new Array(2);
                    var2[0] = var7;
                    var6 = var6.profileContent;
                    var2[1] = var6;
                    var3['style'] = var2;
                    var2 = _closure2_slot0;
                    var2 = var2.isProvisional;
                    if(!var2) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                    var10 = _closure1_slot16;
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
case 60:
                    var6 = new Array(10);
                    var6[0] = var2;
                    var2 = _closure2_slot0;
                    var7 = var2.id;
                    var2 = _closure2_slot8;
                    var2 = var2.id;
                    var2 = var7 === var2;
                    if(!var2) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                    var7 = _closure2_slot4;
                    var2 = !var7;
case 62:
                    if(!var2) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                    var13 = _closure1_slot16;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 54;
                    var7 = var10[var7];
                    var10 = undefined;
                    var9 = var9.bind(var10)(var7);
                    var7 = {};
                    var14 = _closure2_slot18;
                    var7['navigateToPremium'] = var14;
                    var14 = _closure2_slot19;
                    var7['navigateToShop'] = var14;
                    var14 = _closure2_slot12;
                    var7['hasCustomProfileTheme'] = var14;
                    var2 = var13.bind(var10)(var9, var7);
case 64:
                    var6[1] = var2;
                    var10 = _closure1_slot16;
                    var9 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 55;
                    var7 = var7[var2];
                    var2 = undefined;
                    var9 = var9.bind(var2)(var7);
                    var7 = {};
                    var13 = _closure2_slot0;
                    var7['user'] = var13;
                    var13 = _closure2_slot8;
                    var7['currentUser'] = var13;
                    var13 = _closure2_slot10;
                    var7['guildId'] = var13;
                    var7['style'] = var12;
                    var7 = var10.bind(var2)(var9, var7);
                    var6[2] = var7;
                    var7 = _closure2_slot9;
                    var9 = var7.length;
                    var7 = 0;
                    var7 = var9 > var7;
                    if(!var7) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                    var13 = _closure1_slot16;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 56;
                    var9 = var14[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = {};
                    var14 = _closure2_slot0;
                    var14 = var14.id;
                    var9['userId'] = var14;
                    var14 = _closure2_slot9;
                    var9['applicationIds'] = var14;
                    var9['style'] = var12;
                    var7 = var13.bind(var2)(var10, var9);
case 66:
                    var6[3] = var7;
                    var10 = _closure1_slot16;
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
                    if(!var14) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                    var13 = _closure2_slot11;
case 68:
                    var7['pendingBio'] = var13;
                    var7['style'] = var12;
                    var7 = var10.bind(var2)(var9, var7);
                    var6[4] = var7;
                    var7 = _closure2_slot10;
                    var7 = var1 != var7;
                    if(!var7) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                    var13 = _closure1_slot16;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 58;
                    var9 = var14[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = {};
                    var14 = _closure2_slot0;
                    var14 = var14.id;
                    var9['userId'] = var14;
                    var14 = _closure2_slot10;
                    var9['guildId'] = var14;
                    var9['style'] = var12;
                    var7 = var13.bind(var2)(var10, var9);
case 70:
                    var6[5] = var7;
                    var7 = _closure2_slot1;
                    var9 = var1 == var7;
                    var7 = undefined;
                    if(var9) { _fun0010_ip = 72; continue _fun0010 }
case 73:
                    var9 = _closure2_slot1;
                    var7 = var9.guild_id;
case 72:
                    var7 = var1 != var7;
                    if(!var7) { _fun0010_ip = 74; continue _fun0010 }
case 75:
                    var13 = _closure1_slot16;
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 59;
                    var9 = var14[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = {};
                    var14 = _closure2_slot0;
                    var9['user'] = var14;
                    var14 = _closure2_slot8;
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
case 74:
                    var6[6] = var7;
                    var16 = _closure1_slot16;
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
                    var10 = _closure1_slot16;
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
                    if(!var7) { _fun0010_ip = 76; continue _fun0010 }
case 77:
                    var10 = _closure1_slot16;
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
case 76:
                    var6[9] = var7;
                    var3['children'] = var6;
                    var2 = var5.bind(var2)(var4, var3);
                    return var2;
case 58:
                    return var1;
                }
            };
            var24 = var32.bind(var53)(var6, var24);
            _closure2_slot20 = var24;
            var53 = _closure1_slot4;
            var32 = var53.useCallback;
            var54 = var11.profileContent;
            var6 = new Array(3);
            var6[0] = var54;
            var6[1] = var2;
            var6[2] = var49;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var4 = _closure1_slot16;
                    var3 = _closure1_slot5;
                    var2 = {};
                    var1 = _closure2_slot7;
                    var1 = var1.profileContent;
                    var2['style'] = var1;
                    var6 = _closure2_slot16;
                    var1 = null;
                    if(!(var1 != var6)) { _fun0011_ip = 78; continue _fun0011 }
case 79:
                    var8 = _closure1_slot16;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 62;
                    var1 = var7[var1];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var1);
                    var1 = {};
                    var10 = _closure2_slot16;
                    var1['wishlistId'] = var10;
                    var9 = _closure2_slot14;
                    var1['backgroundColor'] = var9;
                    var1 = var8.bind(var7)(var6, var1);
                    _fun0011_ip = 80; continue _fun0011;
case 78:
                    var8 = _closure1_slot16;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 62;
                    var5 = var7[var5];
                    var7 = undefined;
                    var5 = var6.bind(var7)(var5);
                    var6 = var5.WishlistEmptyState;
                    var5 = {};
                    var1 = var8.bind(var7)(var6, var5);
case 80:
                    var2['children'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var2 = var32.bind(var53)(var2, var6);
            _closure2_slot21 = var2;
            var53 = _closure1_slot4;
            var32 = var53.useMemo;
            var6 = new Array(2);
            var6[0] = var24;
            var6[1] = var2;
            var2 = function() {
                var2 = {};
                var1 = 'main';
                var2['id'] = var1;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 27;
                var1 = var9[var5];
                var4 = undefined;
                var1 = var8.bind(var4)(var1);
                var6 = var1.intl;
                var3 = var6.string;
                var1 = var9[var5];
                var1 = var8.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.LXw470;
                var1 = var3.bind(var6)(var1);
                var2['label'] = var1;
                var1 = _closure2_slot20;
                var1 = var1.bind(var4)();
                var2['page'] = var1;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var6 = 'wishlist';
                var2['id'] = var6;
                var6 = var9[var5];
                var6 = var8.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.7lZ31J;
                var5 = var6.bind(var7)(var5);
                var2['label'] = var5;
                var3 = _closure2_slot21;
                var3 = var3.bind(var4)();
                var2['page'] = var3;
                var1[1] = var2;
                return var1;
            };
            var6 = var32.bind(var53)(var2, var6);
            var2 = 63;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useSegmentedControlState;
            var2 = {};
            var2['pageWidth'] = var8;
            var8 = _closure1_slot11;
            var32 = var8.WISHLIST;
            var8 = 0;
            if(!(var35 === var32)) { _fun0005_ip = 81; continue _fun0005 }
case 82:
            var8 = var9;
case 81:
            var2['defaultIndex'] = var8;
            var9 = _closure1_slot1;
            var32 = _closure1_slot2;
            var8 = 40;
            var8 = var32[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_24;
            var2['itemSpacing'] = var8;
            var2['items'] = var6;
            var32 = var3.bind(var4)(var2);
            if(!(var1 != var18)) { _fun0005_ip = 83; continue _fun0005 }
case 84:
            if(!(var1 != var17)) { _fun0005_ip = 83; continue _fun0005 }
case 85:
            var35 = {};
            var35['backgroundColor'] = var42;
            _closure2_slot22 = var35;
            var4 = _closure1_slot17;
            var3 = _closure1_slot18;
            var2 = {};
            var9 = _closure1_slot16;
            var8 = _closure1_slot1;
            var53 = _closure1_slot2;
            var6 = 64;
            var6 = var53[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var6['user'] = var18;
            var6['displayProfile'] = var16;
            var6['bannerHeight'] = var10;
            var10 = undefined;
            if(!var7) { _fun0005_ip = 86; continue _fun0005 }
case 87:
            var10 = var21;
case 86:
            var6['pendingBanner'] = var10;
            var10 = undefined;
            if(!var7) { _fun0005_ip = 88; continue _fun0005 }
case 89:
            var10 = var52;
case 88:
            var6['pendingAvatarSrc'] = var10;
            var10 = undefined;
            if(!var7) { _fun0005_ip = 90; continue _fun0005 }
case 91:
            var21 = var1 != var20;
            var10 = undefined;
            if(!var21) { _fun0005_ip = 90; continue _fun0005 }
case 92:
            var10 = var20;
case 90:
            var6['pendingAccentColor'] = var10;
            var10 = undefined;
            if(!var7) { _fun0005_ip = 93; continue _fun0005 }
case 94:
            var20 = var1 != var13;
            var10 = undefined;
            if(!var20) { _fun0005_ip = 93; continue _fun0005 }
case 95:
            var10 = var13;
case 93:
            var6['pendingThemeColors'] = var10;
            var6['disableInteraction'] = var7;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(3);
            var6[0] = var8;
            var10 = _closure1_slot17;
            var9 = _closure1_slot5;
            var8 = {};
            var21 = _closure1_slot16;
            var20 = _closure1_slot1;
            var53 = _closure1_slot2;
            var13 = 65;
            var13 = var53[var13];
            var20 = var20.bind(var5)(var13);
            var13 = {};
            var13['user'] = var18;
            var13['guildId'] = var40;
            var13['disableStatus'] = var50;
            var50 = undefined;
            if(!var7) { _fun0005_ip = 96; continue _fun0005 }
case 97:
            var50 = var52;
case 96:
            var13['pendingAvatarSrc'] = var50;
            var50 = undefined;
            if(!var7) { _fun0005_ip = 98; continue _fun0005 }
case 99:
            var50 = var51;
case 98:
            var13['pendingAvatarDecoration'] = var50;
            var13['backgroundColor'] = var22;
            var22 = {};
            var22['backgroundColor'] = var49;
            var13['statusStyle'] = var22;
            var20 = var21.bind(var5)(var20, var13);
            var13 = new Array(2);
            var13[0] = var20;
            var22 = _closure1_slot17;
            var21 = _closure1_slot1;
            var49 = _closure1_slot2;
            var20 = 66;
            var20 = var49[var20];
            var21 = var21.bind(var5)(var20);
            var20 = {};
            var20['fallbackBackground'] = var41;
            var20['primaryColor'] = var26;
            var20['secondaryColor'] = var23;
            var26 = var11.profileContentWrapper;
            var23 = new Array(2);
            var23[0] = var26;
            var26 = {};
            if(!var27) { _fun0005_ip = 100; continue _fun0005 }
case 101:
            var27 = 0;
            if(!var7) { _fun0005_ip = 102; continue _fun0005 }
case 100:
            var41 = var1 != var30;
            var27 = 0;
            if(var41) { _fun0005_ip = 102; continue _fun0005 }
case 103:
            var27 = _closure1_slot13;
case 102:
            var26['paddingTop'] = var27;
            var27 = _closure1_slot12;
            var27 = var33 + var27;
            var26['paddingBottom'] = var27;
            var23[1] = var26;
            var20['containerStyle'] = var23;
            var27 = _closure1_slot16;
            var26 = _closure1_slot19;
            var23 = {};
            var23['customStatusActivity'] = var30;
            var23['user'] = var18;
            var23['guildId'] = var40;
            var33 = var1 == var15;
            var30 = undefined;
            if(var33) { _fun0005_ip = 104; continue _fun0005 }
case 105:
            var30 = var15.id;
case 104:
            var23['channelId'] = var30;
            var23['hasCustomProfileTheme'] = var36;
            var23['showUserProfileActionSheet'] = var44;
            var23['isPreviewingChanges'] = var7;
            var23['bubbleRef'] = var29;
            var26 = var27.bind(var5)(var26, var23);
            var23 = new Array(3);
            var23[0] = var26;
            var29 = _closure1_slot17;
            var27 = _closure1_slot5;
            var26 = {};
            var33 = var11.primaryInfo;
            var30 = new Array(2);
            var30[0] = var33;
            var33 = var11.profileContent;
            var30[1] = var33;
            var26['style'] = var30;
            var41 = _closure1_slot16;
            var33 = _closure1_slot22;
            var30 = {};
            var30['user'] = var18;
            var49 = var1 == var15;
            var43 = undefined;
            if(var49) { _fun0005_ip = 106; continue _fun0005 }
case 107:
            var43 = var15.id;
case 106:
            var30['channelId'] = var43;
            var30['displayProfile'] = var16;
            var43 = undefined;
            if(!var7) { _fun0005_ip = 108; continue _fun0005 }
case 109:
            var43 = var48;
case 108:
            var30['displayNameOverride'] = var43;
            var43 = undefined;
            if(!var7) { _fun0005_ip = 110; continue _fun0005 }
case 111:
            var43 = var47;
case 110:
            var30['pronounsOverride'] = var43;
            var43 = undefined;
            if(!var7) { _fun0005_ip = 112; continue _fun0005 }
case 113:
            var43 = var46;
case 112:
            var30['badgesOverride'] = var43;
            var30['badgeContainerBackground'] = var42;
            var30['isPreviewingChanges'] = var7;
            var33 = var41.bind(var5)(var33, var30);
            var30 = new Array(7);
            var30[0] = var33;
            var41 = var18.id;
            var33 = var17.id;
            var33 = var41 !== var33;
            if(!var33) { _fun0005_ip = 114; continue _fun0005 }
case 115:
            var43 = _closure1_slot16;
            var42 = _closure1_slot1;
            var46 = _closure1_slot2;
            var41 = 67;
            var41 = var46[var41];
            var42 = var42.bind(var5)(var41);
            var41 = {};
            var41['user'] = var18;
            var41['guildId'] = var40;
            var33 = var43.bind(var5)(var42, var41);
case 114:
            var30[1] = var33;
            var33 = _closure1_slot14;
            var33 = var33.PENDING_INCOMING;
            var33 = var19 === var33;
            if(!var33) { _fun0005_ip = 116; continue _fun0005 }
case 117:
            var43 = _closure1_slot16;
            var42 = _closure1_slot1;
            var46 = _closure1_slot2;
            var41 = 68;
            var41 = var46[var41];
            var42 = var42.bind(var5)(var41);
            var41 = {};
            var41['user'] = var18;
            var47 = var1 == var15;
            var46 = undefined;
            if(var47) { _fun0005_ip = 118; continue _fun0005 }
case 119:
            var46 = var15.id;
case 118:
            var41['channelId'] = var46;
            var41['guildId'] = var40;
            var41['applicationId'] = var45;
            var41['style'] = var35;
            var41['showUserProfile'] = var44;
            var33 = var43.bind(var5)(var42, var41);
case 116:
            var30[2] = var33;
            var33 = var34.map;
            var31 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot16;
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
                    if(var8) { _fun0012_ip = 120; continue _fun0012 }
case 121:
                    var8 = _closure2_slot1;
                    var7 = var8.id;
case 120:
                    var2['channelId'] = var7;
                    var7 = _closure2_slot10;
                    var2['guildId'] = var7;
                    var7 = _closure2_slot22;
                    var2['style'] = var7;
                    var6 = _closure2_slot3;
                    var2['showUserProfile'] = var6;
                    var1 = var1.applicationId;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var31 = var33.bind(var34)(var31);
            var30[3] = var31;
            var34 = _closure1_slot16;
            var33 = _closure1_slot1;
            var41 = _closure1_slot2;
            var31 = 69;
            var31 = var41[var31];
            var33 = var33.bind(var5)(var31);
            var31 = {};
            var31['user'] = var18;
            var31['style'] = var35;
            var31 = var34.bind(var5)(var33, var31);
            var30[4] = var31;
            var33 = var18.id;
            var31 = var17.id;
            var31 = var33 === var31;
            if(!var31) { _fun0005_ip = 122; continue _fun0005 }
case 123:
            var31 = !var7;
case 122:
            if(!var31) { _fun0005_ip = 124; continue _fun0005 }
case 125:
            var35 = _closure1_slot16;
            var34 = _closure1_slot23;
            var33 = {};
            var33['guildId'] = var40;
            var31 = var35.bind(var5)(var34, var33);
case 124:
            var30[5] = var31;
            var33 = var18.id;
            var31 = var17.id;
            var31 = var33 !== var31;
            if(!var31) { _fun0005_ip = 126; continue _fun0005 }
case 127:
            var35 = _closure1_slot16;
            var34 = _closure1_slot1;
            var40 = _closure1_slot2;
            var33 = 70;
            var33 = var40[var33];
            var34 = var34.bind(var5)(var33);
            var33 = {};
            var33['user'] = var18;
            if(var39) { _fun0005_ip = 128; continue _fun0005 }
case 129:
            var40 = _closure1_slot14;
            var40 = var40.BLOCKED;
            var39 = var19 === var40;
case 128:
            if(var39) { _fun0005_ip = 130; continue _fun0005 }
case 131:
            var39 = var18.isProvisional;
case 130:
            var33['disableCalls'] = var39;
            var33['disableMessage'] = var38;
            var33['location'] = var37;
            var33['hasCustomProfileTheme'] = var36;
            var36 = var11.primaryButtons;
            var33['style'] = var36;
            var31 = var35.bind(var5)(var34, var33);
case 126:
            var30[6] = var31;
            var26['children'] = var30;
            var26 = var29.bind(var5)(var27, var26);
            var23[1] = var26;
            if(var25) { _fun0005_ip = 132; continue _fun0005 }
case 133:
            var24 = var24.bind(var5)();
            _fun0005_ip = 134; continue _fun0005;
case 132:
            var27 = _closure1_slot17;
            var26 = _closure1_slot5;
            var25 = {};
            var25['onLayout'] = var28;
            var29 = _closure1_slot16;
            var28 = {};
            var30 = var11.profileTablist;
            var28['style'] = var30;
            var35 = _closure1_slot16;
            var30 = _closure1_slot0;
            var33 = _closure1_slot2;
            var31 = 71;
            var31 = var33[var31];
            var31 = var30.bind(var5)(var31);
            var34 = var31.Tabs;
            var31 = {};
            var31['state'] = var32;
            var31 = var35.bind(var5)(var34, var31);
            var28['children'] = var31;
            var29 = var29.bind(var5)(var26, var28);
            var28 = new Array(2);
            var28[0] = var29;
            var31 = _closure1_slot16;
            var29 = 72;
            var29 = var33[var29];
            var29 = var30.bind(var5)(var29);
            var30 = var29.SegmentedControlPages;
            var29 = {};
            var29['state'] = var32;
            var29 = var31.bind(var5)(var30, var29);
            var28[1] = var29;
            var25['children'] = var28;
            var24 = var27.bind(var5)(var26, var25);
case 134:
            var23[2] = var24;
            var20['children'] = var23;
            var20 = var22.bind(var5)(var21, var20);
            var13[1] = var20;
            var8['children'] = var13;
            var8 = var10.bind(var5)(var9, var8);
            var6[1] = var8;
            var7 = !var7;
            if(!var7) { _fun0005_ip = 135; continue _fun0005 }
case 136:
            var10 = _closure1_slot17;
            var9 = _closure1_slot5;
            var8 = {};
            var11 = var11.bannerButtons;
            var8['style'] = var11;
            var20 = var18.id;
            var11 = var17.id;
            var13 = null;
            if(!(var20 !== var11)) { _fun0005_ip = 137; continue _fun0005 }
case 138:
            var11 = var18.bot;
            var13 = null;
            if(var11) { _fun0005_ip = 137; continue _fun0005 }
case 139:
            var11 = _closure1_slot14;
            var11 = var11.FRIEND;
            if(!(var19 !== var11)) { _fun0005_ip = 140; continue _fun0005 }
case 141:
            var11 = null;
            if(!var14) { _fun0005_ip = 142; continue _fun0005 }
case 143:
            var20 = _closure1_slot16;
            var19 = _closure1_slot21;
            var14 = {};
            var14['user'] = var18;
            var11 = var20.bind(var5)(var19, var14);
case 142:
            _fun0005_ip = 144; continue _fun0005;
case 140:
            var20 = _closure1_slot16;
            var19 = _closure1_slot20;
            var14 = {};
            var14['user'] = var18;
            var11 = var20.bind(var5)(var19, var14);
case 144:
            var13 = var11;
case 137:
            var11 = new Array(2);
            var11[0] = var13;
            var14 = _closure1_slot16;
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
case 135:
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 83:
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
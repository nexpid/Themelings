// app/modules/user_profile/native/UserProfileContent.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function CustomStatusBubble(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            var3 = 10;
            var3 = var5[var3];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var7 = var3.bind(var4)();
            var3 = _closure1_slot0;
            var6 = 11;
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
 0:
                    var2 = _closure1_slot8;
                    var1 = var2.getCurrentUser;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 32; continue _fun0002 }
 27:
                    var2 = var1.id;
 32:
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var8 = var14.bind(var18)(var9, var6, var8);
            var14 = _closure1_slot3;
            var9 = var14.useCallback;
            var6 = new Array(3);
            var6[0] = var17;
            var6[1] = var16;
            var6[2] = var15;
            var2 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var4 = var2[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var4);
                var6 = var7.openLazy;
                var4 = _closure1_slot0;
                var3 = 14;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 13;
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
            var2 = 15;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useIsEligibleForCustomStatusLabelsExperiment;
            var2 = {};
            var6 = 'CustomStatusBubble';
            var2['location'] = var6;
            var14 = var3.bind(var5)(var2);
            var6 = _closure1_slot3;
            var5 = var6.useRef;
            var3 = null;
            var2 = null;
            if(!var14) { _fun0001_ip = 272; continue _fun0001 }
 229:
            var14 = var3 == var12;
            var2 = null;
            if(!var14) { _fun0001_ip = 272; continue _fun0001 }
 238:
            var2 = null;
            if(!var8) { _fun0001_ip = 272; continue _fun0001 }
 243:
            var2 = null;
            if(var10) { _fun0001_ip = 272; continue _fun0001 }
 248:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 16;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var2 = var14.bind(var4)();
 272:
            var5 = var5.bind(var6)(var2);
            var2 = var5.current;
            var2 = var3 != var2;
            var6 = undefined;
            if(!var2) { _fun0001_ip = 305; continue _fun0001 }
 291:
            var3 = var5.current;
            var2 = var3.label;
            var6 = var2.bind(var3)();
 305:
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 17;
            var1 = var14[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['ref'] = var13;
            var1['customStatusActivity'] = var12;
            var1['hasCustomProfileTheme'] = var11;
            if(!var8) { _fun0001_ip = 351; continue _fun0001 }
 348:
            var8 = !var10;
 351:
            var1['editEnabled'] = var8;
            var8 = undefined;
            if(var10) { _fun0001_ip = 364; continue _fun0001 }
 361:
            var8 = var9;
 364:
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
    var _closure1_slot16 = var1;
    var1 = function RemoveFriendIconButton(arg1) {
        var1 = arg1;
        var3 = var1.user;
        var _closure2_slot0 = var3;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 18;
        var1 = var10[var1];
        var4 = undefined;
        var2 = var9.bind(var4)(var1);
        var1 = var2.useUserProfileAnalyticsContext;
        var1 = var1.bind(var2)();
        var1 = var1.trackUserProfileAction;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot1;
        var1 = 19;
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
            var2 = 20;
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
        var1 = 21;
        var1 = var10[var1];
        var2 = var2.bind(var4)(var1);
        var1 = var2.useName;
        var1 = var1.bind(var2)(var3);
        var _closure2_slot4 = var1;
        var3 = _closure1_slot13;
        var1 = 22;
        var1 = var10[var1];
        var1 = var9.bind(var4)(var1);
        var2 = var1.IconButton;
        var1 = {'size': 'sm', 'variant': 'secondary-overlay'};
        var8 = _closure1_slot13;
        var6 = 23;
        var6 = var10[var6];
        var6 = var9.bind(var4)(var6);
        var7 = var6.UserCheckIcon;
        var6 = {'size': 'sm', 'color': 'white'};
        var6 = var8.bind(var4)(var7, var6);
        var1['icon'] = var6;
        var6 = 24;
        var7 = var10[var6];
        var7 = var9.bind(var4)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6.cvSt1N;
        var6 = var7.bind(var8)(var6);
        var1['accessibilityLabel'] = var6;
        var5 = function onPress() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 25;
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
    var _closure1_slot17 = var1;
    var1 = function RemoveGameFriendIconButton(arg1) {
        var2 = arg1;
        var5 = var2.user;
        var _closure2_slot0 = var5;
        var7 = var2.guildId;
        var _closure2_slot1 = var7;
        var8 = var2.channelId;
        var _closure2_slot2 = var8;
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(3);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var5;
        var1 = function() {
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 12;
            var4 = var2[var1];
            var1 = undefined;
            var7 = var5.bind(var1)(var4);
            var6 = var7.openLazy;
            var4 = _closure1_slot0;
            var3 = 14;
            var3 = var2[var3];
            var4 = var4.bind(var1)(var3);
            var3 = 26;
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
        var4 = _closure1_slot13;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 22;
        var1 = var10[var1];
        var3 = undefined;
        var1 = var9.bind(var3)(var1);
        var2 = var1.IconButton;
        var1 = {'size': 'sm', 'variant': 'secondary-overlay'};
        var8 = _closure1_slot13;
        var6 = 27;
        var6 = var10[var6];
        var6 = var9.bind(var3)(var6);
        var7 = var6.UserPlatformIcon;
        var6 = {'size': 'sm', 'color': 'white'};
        var6 = var8.bind(var3)(var7, var6);
        var1['icon'] = var6;
        var6 = 24;
        var7 = var10[var6];
        var7 = var9.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.cvSt1N;
        var6 = var7.bind(var8)(var6);
        var1['accessibilityLabel'] = var6;
        var1['onPress'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function PrimaryInfo(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
            var1 = 21;
            var1 = var13[var1];
            var3 = var8.bind(var4)(var1);
            var1 = var3.useUserTag;
            var1 = var1.bind(var3)(var17);
            var _closure2_slot0 = var1;
            var3 = 28;
            var3 = var13[var3];
            var3 = var8.bind(var4)(var3);
            var11 = var3.bind(var4)(var16);
            var3 = 29;
            var3 = var13[var3];
            var15 = var8.bind(var4)(var3);
            var8 = var15.useName;
            var13 = null;
            var19 = var13 == var16;
            var3 = undefined;
            if(var19) { _fun0003_ip = 151; continue _fun0003 }
 146:
            var3 = var16.guildId;
 151:
            var18 = var8.bind(var15)(var3, var18, var17);
            var15 = var18;
            if(!(var13 != var2)) { _fun0003_ip = 192; continue _fun0003 }
 165:
            var3 = var2.trim;
            var3 = var3.bind(var2)();
            var8 = var3.length;
            var3 = 0;
            var15 = var18;
            if(!(var8 > var3)) { _fun0003_ip = 192; continue _fun0003 }
 189:
            var15 = var2;
 192:
            var3 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 18;
            var2 = var18[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useUserProfileAnalyticsContext;
            var2 = var2.bind(var3)();
            var19 = var2.trackUserProfileAction;
            _closure2_slot1 = var19;
            var8 = _closure1_slot3;
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
                var5 = 30;
                var5 = var4[var5];
                var6 = var3.bind(var1)(var5);
                var5 = var6.copy;
                var2 = _closure2_slot0;
                var2 = var5.bind(var6)(var2);
                var2 = 31;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentUsernameCopied;
                var2 = var2.bind(var3)();
                return var1;
            };
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var1 = 32;
            var1 = var18[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['user'] = var17;
            var18 = var13 == var16;
            var17 = undefined;
            if(var18) { _fun0003_ip = 306; continue _fun0003 }
 301:
            var17 = var16.guildId;
 306:
            var1['guildId'] = var17;
            var1['displayName'] = var15;
            if(!(var13 == var14)) { _fun0003_ip = 336; continue _fun0003 }
 318:
            var17 = var13 == var16;
            var15 = undefined;
            if(var17) { _fun0003_ip = 333; continue _fun0003 }
 327:
            var15 = var16.pronouns;
 333:
            var14 = var15;
 336:
            var1['pronouns'] = var14;
            if(!(var13 != var12)) { _fun0003_ip = 348; continue _fun0003 }
 345:
            var11 = var12;
 348:
            var1['badges'] = var11;
            var1['style'] = var10;
            var1['badgeContainerBackground'] = var9;
            var9 = undefined;
            if(var5) { _fun0003_ip = 370; continue _fun0003 }
 367:
            var9 = var8;
 370:
            var1['onPressDisplayName'] = var9;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 24;
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
            if(var5) { _fun0003_ip = 443; continue _fun0003 }
 440:
            var6 = var8;
 443:
            var1['onPressUserTag'] = var6;
            var6 = undefined;
            if(var5) { _fun0003_ip = 460; continue _fun0003 }
 453:
            var6 = function() {
                var3 = _closure2_slot1;
                var2 = {};
                var1 = 'PRESS_PRONOUNS';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 31;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentUserPronouns;
                var2 = var2.bind(var3)();
                return var1;
            };
 460:
            var1['onPressPronouns'] = var6;
            var5 = !var5;
            var1['showBadgeToastOnPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function EditSection(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var1 = var1.guildId;
            var _closure2_slot0 = var1;
            var20 = _closure1_slot1;
            var19 = _closure1_slot2;
            var1 = 10;
            var1 = var19[var1];
            var4 = undefined;
            var1 = var20.bind(var4)(var1);
            var5 = var1.bind(var4)();
            var9 = _closure1_slot0;
            var1 = 18;
            var1 = var19[var1];
            var2 = var9.bind(var4)(var1);
            var1 = var2.useUserProfileAnalyticsContext;
            var1 = var1.bind(var2)();
            var1 = var1.trackUserProfileAction;
            var _closure2_slot1 = var1;
            var1 = 11;
            var1 = var19[var1];
            var6 = var9.bind(var4)(var1);
            var3 = var6.useStateFromStores;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var3.bind(var6)(var2, var1);
            var1 = 33;
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
            var3 = _closure1_slot13;
            var1 = 34;
            var1 = var19[var1];
            var2 = var20.bind(var4)(var1);
            var1 = {};
            var5 = var5.primaryButtons;
            var1['style'] = var5;
            var5 = _closure1_slot12;
            var1['maxWidth'] = var5;
            var14 = _closure1_slot13;
            var6 = 35;
            var5 = var19[var6];
            var5 = var9.bind(var4)(var5);
            var13 = var5.Button;
            var8 = {};
            var12 = 'primary';
            var8['variant'] = var12;
            var15 = _closure1_slot13;
            var11 = 36;
            var5 = var19[var11];
            var5 = var9.bind(var4)(var5);
            var9 = var5.PencilIcon;
            var5 = {};
            var18 = 'sm';
            var5['size'] = var18;
            var16 = 37;
            var19 = var19[var16];
            var19 = var20.bind(var4)(var19);
            var19 = var19.colors;
            var19 = var19.WHITE;
            var5['color'] = var19;
            var5 = var15.bind(var4)(var9, var5);
            var8['icon'] = var5;
            var5 = null;
            if(!(var5 == var7)) { _fun0004_ip = 368; continue _fun0004 }
 309:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var9 = 24;
            var15 = var21[var9];
            var15 = var20.bind(var4)(var15);
            var19 = var15.intl;
            var15 = var19.string;
            var9 = var21[var9];
            var9 = var20.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.s5vZlZ;
            var9 = var15.bind(var19)(var9);
            _fun0004_ip = 425; continue _fun0004;
 368:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 24;
            var19 = var22[var15];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var15 = var22[var15];
            var15 = var21.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.HmFaFB;
            var9 = var19.bind(var20)(var15);
 425:
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
                var3 = 12;
                var3 = var5[var3];
                var6 = var4.bind(var1)(var3);
                var3 = var6.hideActionSheet;
                var3 = var3.bind(var6)();
                var3 = 38;
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
            if(!var7) { _fun0004_ip = 639; continue _fun0004 }
 470:
            var8 = _closure1_slot13;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = var15[var6];
            var6 = var14.bind(var4)(var6);
            var7 = var6.Button;
            var6 = {};
            var6['variant'] = var12;
            var13 = _closure1_slot13;
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
            var11 = 24;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.PKQB/P;
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
                var3 = 12;
                var3 = var5[var3];
                var6 = var4.bind(var1)(var3);
                var3 = var6.hideActionSheet;
                var3 = var3.bind(var6)();
                var3 = 38;
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
 639:
            var1['secondaryButton'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.PROFILE_CONTENT_BOTTOM_PADDING;
    var _closure1_slot9 = var8;
    var4 = var4.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RelationshipTypes;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot13 = var8;
    var8 = var4.jsxs;
    var _closure1_slot14 = var8;
    var4 = var4.Fragment;
    var _closure1_slot15 = var4;
    var4 = var7.memo;
    var2 = function UserProfileContent(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var18 = var1.user;
            var _closure2_slot0 = var18;
            var15 = var1.channel;
            var _closure2_slot1 = var15;
            var16 = var1.displayProfile;
            var32 = var1.showUserProfileActionSheet;
            var _closure2_slot2 = var32;
            var41 = var1.disableCalls;
            var40 = var1.disableMessage;
            var49 = var1.disableStatus;
            var7 = var1.isPreviewingChanges;
            var39 = var1.location;
            var2 = var1.navigateToPremium;
            var _closure2_slot3 = var2;
            var2 = var1.navigateToShop;
            var _closure2_slot4 = var2;
            var28 = var1.scrollPosition;
            var5 = undefined;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 10;
            var2 = var1[var2];
            var2 = var3.bind(var5)(var2);
            var11 = var2.bind(var5)();
            var2 = 39;
            var2 = var1[var2];
            var4 = var3.bind(var5)(var2);
            var2 = _closure1_slot12;
            var10 = var4.bind(var5)(var2);
            var2 = 40;
            var2 = var1[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var47 = var2.bottom;
            var3 = _closure1_slot0;
            var2 = 11;
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
            var1 = null;
            var3 = var1 == var17;
            var4 = undefined;
            if(var3) { _fun0005_ip = 235; continue _fun0005 }
 230:
            var4 = var17.id;
 235:
            var3 = var18.id;
            var25 = var4 === var3;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = var6[var2];
            var13 = var4.bind(var5)(var3);
            var9 = var13.useStateFromStoresObject;
            var3 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var1 = {};
                var4 = _closure1_slot6;
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
            var43 = var3.originApplicationId;
            var3 = 41;
            var3 = var6[var3];
            var9 = var4.bind(var5)(var3);
            var8 = var9.useIncomingGameRelationshipsForUser;
            var3 = var18.id;
            var30 = var8.bind(var9)(var3);
            var3 = 42;
            var3 = var6[var3];
            var9 = var4.bind(var5)(var3);
            var8 = var9.useIsGameFriends;
            var3 = var18.id;
            var14 = var8.bind(var9)(var3);
            var3 = 43;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.useUserProfileGameFriendApplicationIds;
            var3 = {};
            var8 = var18.id;
            var3['userId'] = var8;
            var36 = var4.bind(var6)(var3);
            if(!(var1 == var16)) { _fun0005_ip = 414; continue _fun0005 }
 398:
            var3 = var1 == var15;
            var34 = undefined;
            if(var3) { _fun0005_ip = 412; continue _fun0005 }
 407:
            var34 = var15.guild_id;
 412:
            _fun0005_ip = 434; continue _fun0005;
 414:
            var4 = var16.guildId;
            var6 = var1 != var4;
            var3 = undefined;
            if(!var6) { _fun0005_ip = 431; continue _fun0005 }
 428:
            var3 = var4;
 431:
            var34 = var3;
 434:
            _closure2_slot5 = var34;
            var8 = _closure1_slot3;
            var6 = var8.useMemo;
            var4 = new Array(2);
            var4[0] = var34;
            var4[1] = var18;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0006_ip = 21; continue _fun0006 }
 13:
                    var1 = _closure2_slot0;
                    if(!(var2 == var1)) { _fun0006_ip = 25; continue _fun0006 }
 21:
                    var1 = {};
                    _fun0006_ip = 56; continue _fun0006;
 25:
                    var2 = {};
                    var4 = _closure2_slot5;
                    var3 = _closure2_slot0;
                    var5 = var3.id;
                    var3 = new Array(1);
                    var3[0] = var5;
                    var2[var4] = var3;
                    var1 = var2;
 56:
                    return var1;
                }
            };
            var9 = var6.bind(var8)(var3, var4);
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 44;
            var3 = var4[var3];
            var6 = var8.bind(var5)(var3);
            var3 = var6.useSubscribeGuildMembers;
            var3 = var3.bind(var6)(var9);
            var3 = _closure1_slot1;
            var6 = 45;
            var6 = var4[var6];
            var9 = var3.bind(var5)(var6);
            var6 = var18.id;
            var42 = var9.bind(var5)(var6);
            var2 = var4[var2];
            var13 = var8.bind(var5)(var2);
            var9 = var13.useStateFromStoresObject;
            var2 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getAllPending;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var9.bind(var13)(var6, var2);
            var21 = var2.pendingBanner;
            var22 = var2.pendingAvatar;
            var50 = var2.pendingAvatarDecoration;
            var46 = var2.pendingGlobalName;
            var45 = var2.pendingPronouns;
            var35 = var2.pendingBio;
            var20 = var2.pendingAccentColor;
            var13 = var2.pendingThemeColors;
            var6 = var2.pendingLegacyUsernameDisabled;
            var2 = 46;
            var2 = var4[var2];
            var9 = var8.bind(var5)(var2);
            var8 = var9.getPendingAvatarSrc;
            var2 = {};
            var23 = var18.id;
            var2['userId'] = var23;
            var2['image'] = var22;
            var51 = var8.bind(var9)(var2);
            var2 = 28;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var44 = var2.bind(var5)(var16, var6);
            var2 = 47;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['user'] = var18;
            var2['displayProfile'] = var16;
            var4 = undefined;
            if(!var7) { _fun0005_ip = 711; continue _fun0005 }
 708:
            var4 = var13;
 711:
            var2['pendingThemeColors'] = var4;
            var2 = var3.bind(var5)(var2);
            var9 = var2.theme;
            var26 = var2.primaryColor;
            var23 = var2.secondaryColor;
            var37 = var1 != var26;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 48;
            var2 = var4[var2];
            var8 = var3.bind(var5)(var2);
            var6 = var8.useUserProfileColors;
            var2 = {};
            var2['theme'] = var9;
            var2['primaryColor'] = var26;
            var2['secondaryColor'] = var23;
            var2 = var6.bind(var8)(var2);
            var27 = var2.gradientFallbackBackground;
            var31 = var2.containerBackground;
            var22 = var2.avatarBackground;
            var48 = var2.statusBackground;
            var2 = 15;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useIsEligibleForCustomStatusLabelsExperiment;
            var2 = {};
            var6 = 'UserProfileContent';
            var2['location'] = var6;
            var24 = var3.bind(var4)(var2);
            var3 = _closure1_slot3;
            var2 = var3.useRef;
            var29 = var2.bind(var3)(var1);
            if(!(var1 != var18)) { _fun0005_ip = 2815; continue _fun0005 }
 869:
            if(!(var1 != var17)) { _fun0005_ip = 2815; continue _fun0005 }
 876:
            var33 = {};
            var33['backgroundColor'] = var31;
            _closure2_slot6 = var33;
            var4 = _closure1_slot14;
            var3 = _closure1_slot15;
            var2 = {};
            var9 = _closure1_slot13;
            var8 = _closure1_slot1;
            var52 = _closure1_slot2;
            var6 = 49;
            var6 = var52[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var6['user'] = var18;
            var6['displayProfile'] = var16;
            var6['bannerHeight'] = var10;
            var10 = undefined;
            if(!var7) { _fun0005_ip = 944; continue _fun0005 }
 941:
            var10 = var21;
 944:
            var6['pendingBanner'] = var10;
            var10 = undefined;
            if(!var7) { _fun0005_ip = 957; continue _fun0005 }
 954:
            var10 = var51;
 957:
            var6['pendingAvatarSrc'] = var10;
            var10 = undefined;
            if(!var7) { _fun0005_ip = 979; continue _fun0005 }
 967:
            var21 = var1 != var20;
            var10 = undefined;
            if(!var21) { _fun0005_ip = 979; continue _fun0005 }
 976:
            var10 = var20;
 979:
            var6['pendingAccentColor'] = var10;
            var10 = undefined;
            if(!var7) { _fun0005_ip = 1001; continue _fun0005 }
 989:
            var20 = var1 != var13;
            var10 = undefined;
            if(!var20) { _fun0005_ip = 1001; continue _fun0005 }
 998:
            var10 = var13;
 1001:
            var6['pendingThemeColors'] = var10;
            var6['disableInteraction'] = var7;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(3);
            var6[0] = var8;
            var10 = _closure1_slot14;
            var9 = _closure1_slot4;
            var8 = {};
            var21 = _closure1_slot13;
            var20 = _closure1_slot1;
            var52 = _closure1_slot2;
            var13 = 50;
            var13 = var52[var13];
            var20 = var20.bind(var5)(var13);
            var13 = {};
            var13['user'] = var18;
            var13['guildId'] = var34;
            var13['disableStatus'] = var49;
            var49 = undefined;
            if(!var7) { _fun0005_ip = 1082; continue _fun0005 }
 1079:
            var49 = var51;
 1082:
            var13['pendingAvatarSrc'] = var49;
            var49 = undefined;
            if(!var7) { _fun0005_ip = 1095; continue _fun0005 }
 1092:
            var49 = var50;
 1095:
            var13['pendingAvatarDecoration'] = var49;
            var13['backgroundColor'] = var22;
            var22 = {};
            var22['backgroundColor'] = var48;
            var13['statusStyle'] = var22;
            var20 = var21.bind(var5)(var20, var13);
            var13 = new Array(2);
            var13[0] = var20;
            var22 = _closure1_slot14;
            var21 = _closure1_slot1;
            var48 = _closure1_slot2;
            var20 = 51;
            var20 = var48[var20];
            var21 = var21.bind(var5)(var20);
            var20 = {};
            var20['fallbackBackground'] = var27;
            var20['primaryColor'] = var26;
            var20['secondaryColor'] = var23;
            var26 = var11.profileContent;
            var23 = new Array(2);
            var23[0] = var26;
            var26 = {};
            if(!var25) { _fun0005_ip = 1194; continue _fun0005 }
 1189:
            var27 = 0;
            if(!var7) { _fun0005_ip = 1207; continue _fun0005 }
 1194:
            var48 = var1 != var42;
            var27 = 0;
            if(var48) { _fun0005_ip = 1207; continue _fun0005 }
 1203:
            var27 = _closure1_slot10;
 1207:
            var26['paddingTop'] = var27;
            var27 = _closure1_slot9;
            var27 = var47 + var27;
            var26['paddingBottom'] = var27;
            var23[1] = var26;
            var20['containerStyle'] = var23;
            var27 = _closure1_slot13;
            var26 = _closure1_slot16;
            var23 = {};
            var23['customStatusActivity'] = var42;
            var23['user'] = var18;
            var23['guildId'] = var34;
            var47 = var1 == var15;
            var42 = undefined;
            if(var47) { _fun0005_ip = 1271; continue _fun0005 }
 1266:
            var42 = var15.id;
 1271:
            var23['channelId'] = var42;
            var23['hasCustomProfileTheme'] = var37;
            var23['showUserProfileActionSheet'] = var32;
            var23['isPreviewingChanges'] = var7;
            var23['bubbleRef'] = var29;
            var26 = var27.bind(var5)(var26, var23);
            var23 = new Array(4);
            var23[0] = var26;
            if(!var24) { _fun0005_ip = 1315; continue _fun0005 }
 1312:
            var24 = var25;
 1315:
            if(!var24) { _fun0005_ip = 1321; continue _fun0005 }
 1318:
            var24 = !var7;
 1321:
            if(!var24) { _fun0005_ip = 1366; continue _fun0005 }
 1324:
            var27 = _closure1_slot13;
            var26 = _closure1_slot1;
            var42 = _closure1_slot2;
            var25 = 52;
            var25 = var42[var25];
            var26 = var26.bind(var5)(var25);
            var25 = {};
            var25['targetRef'] = var29;
            var25['scrollPosition'] = var28;
            var24 = var27.bind(var5)(var26, var25);
 1366:
            var23[1] = var24;
            var26 = _closure1_slot14;
            var25 = _closure1_slot4;
            var24 = {};
            var27 = var11.primaryInfo;
            var24['style'] = var27;
            var29 = _closure1_slot13;
            var28 = _closure1_slot19;
            var27 = {};
            var27['user'] = var18;
            var47 = var1 == var15;
            var42 = undefined;
            if(var47) { _fun0005_ip = 1418; continue _fun0005 }
 1413:
            var42 = var15.id;
 1418:
            var27['channelId'] = var42;
            var27['displayProfile'] = var16;
            var42 = undefined;
            if(!var7) { _fun0005_ip = 1435; continue _fun0005 }
 1432:
            var42 = var46;
 1435:
            var27['displayNameOverride'] = var42;
            var42 = undefined;
            if(!var7) { _fun0005_ip = 1448; continue _fun0005 }
 1445:
            var42 = var45;
 1448:
            var27['pronounsOverride'] = var42;
            var42 = undefined;
            if(!var7) { _fun0005_ip = 1461; continue _fun0005 }
 1458:
            var42 = var44;
 1461:
            var27['badgesOverride'] = var42;
            var27['badgeContainerBackground'] = var31;
            var27['isPreviewingChanges'] = var7;
            var28 = var29.bind(var5)(var28, var27);
            var27 = new Array(7);
            var27[0] = var28;
            var29 = var18.id;
            var28 = var17.id;
            var28 = var29 !== var28;
            if(!var28) { _fun0005_ip = 1547; continue _fun0005 }
 1507:
            var42 = _closure1_slot13;
            var31 = _closure1_slot1;
            var44 = _closure1_slot2;
            var29 = 53;
            var29 = var44[var29];
            var31 = var31.bind(var5)(var29);
            var29 = {};
            var29['user'] = var18;
            var29['guildId'] = var34;
            var28 = var42.bind(var5)(var31, var29);
 1547:
            var27[1] = var28;
            var28 = _closure1_slot11;
            var28 = var28.PENDING_INCOMING;
            var28 = var19 === var28;
            if(!var28) { _fun0005_ip = 1639; continue _fun0005 }
 1568:
            var42 = _closure1_slot13;
            var31 = _closure1_slot1;
            var44 = _closure1_slot2;
            var29 = 54;
            var29 = var44[var29];
            var31 = var31.bind(var5)(var29);
            var29 = {};
            var29['user'] = var18;
            var45 = var1 == var15;
            var44 = undefined;
            if(var45) { _fun0005_ip = 1612; continue _fun0005 }
 1607:
            var44 = var15.id;
 1612:
            var29['channelId'] = var44;
            var29['guildId'] = var34;
            var29['applicationId'] = var43;
            var29['style'] = var33;
            var29['showUserProfile'] = var32;
            var28 = var42.bind(var5)(var31, var29);
 1639:
            var27[2] = var28;
            var29 = var30.map;
            var28 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    var5 = _closure1_slot13;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 54;
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
                    if(var8) { _fun0007_ip = 85; continue _fun0007 }
 76:
                    var8 = _closure2_slot1;
                    var7 = var8.id;
 85:
                    var2['channelId'] = var7;
                    var7 = _closure2_slot5;
                    var2['guildId'] = var7;
                    var7 = _closure2_slot6;
                    var2['style'] = var7;
                    var6 = _closure2_slot2;
                    var2['showUserProfile'] = var6;
                    var1 = var1.applicationId;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var28 = var29.bind(var30)(var28);
            var27[3] = var28;
            var30 = _closure1_slot13;
            var29 = _closure1_slot1;
            var31 = _closure1_slot2;
            var28 = 55;
            var28 = var31[var28];
            var29 = var29.bind(var5)(var28);
            var28 = {};
            var28['user'] = var18;
            var28['style'] = var33;
            var28 = var30.bind(var5)(var29, var28);
            var27[4] = var28;
            var29 = var18.id;
            var28 = var17.id;
            var28 = var29 === var28;
            if(!var28) { _fun0005_ip = 1728; continue _fun0005 }
 1725:
            var28 = !var7;
 1728:
            if(!var28) { _fun0005_ip = 1751; continue _fun0005 }
 1731:
            var31 = _closure1_slot13;
            var30 = _closure1_slot20;
            var29 = {};
            var29['guildId'] = var34;
            var28 = var31.bind(var5)(var30, var29);
 1751:
            var27[5] = var28;
            var29 = var18.id;
            var28 = var17.id;
            var28 = var29 !== var28;
            if(!var28) { _fun0005_ip = 1863; continue _fun0005 }
 1772:
            var31 = _closure1_slot13;
            var30 = _closure1_slot1;
            var42 = _closure1_slot2;
            var29 = 56;
            var29 = var42[var29];
            var30 = var30.bind(var5)(var29);
            var29 = {};
            var29['user'] = var18;
            if(var41) { _fun0005_ip = 1819; continue _fun0005 }
 1805:
            var42 = _closure1_slot11;
            var42 = var42.BLOCKED;
            var41 = var19 === var42;
 1819:
            if(var41) { _fun0005_ip = 1828; continue _fun0005 }
 1822:
            var41 = var18.isProvisional;
 1828:
            var29['disableCalls'] = var41;
            var29['disableMessage'] = var40;
            var29['location'] = var39;
            var29['hasCustomProfileTheme'] = var37;
            var39 = var11.primaryButtons;
            var29['style'] = var39;
            var28 = var31.bind(var5)(var30, var29);
 1863:
            var27[6] = var28;
            var24['children'] = var27;
            var24 = var26.bind(var5)(var25, var24);
            var23[2] = var24;
            var26 = _closure1_slot14;
            var25 = _closure1_slot4;
            var24 = {};
            var27 = var11.cards;
            var24['style'] = var27;
            var28 = var18.isProvisional;
            if(!var28) { _fun0005_ip = 1969; continue _fun0005 }
 1910:
            var30 = _closure1_slot13;
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var27 = 57;
            var27 = var31[var27];
            var27 = var29.bind(var5)(var27);
            var29 = var27.UserProfileProvisionalAccountExplainerCard;
            var27 = {};
            var27['style'] = var33;
            var31 = var18.id;
            var27['userId'] = var31;
            var31 = 16;
            var27['iconSize'] = var31;
            var28 = var30.bind(var5)(var29, var27);
 1969:
            var27 = new Array(10);
            var27[0] = var28;
            var29 = var18.id;
            var28 = var17.id;
            var28 = var29 === var28;
            if(!var28) { _fun0005_ip = 1997; continue _fun0005 }
 1994:
            var28 = !var7;
 1997:
            if(!var28) { _fun0005_ip = 2061; continue _fun0005 }
 2000:
            var31 = _closure1_slot13;
            var30 = _closure1_slot1;
            var39 = _closure1_slot2;
            var29 = 58;
            var29 = var39[var29];
            var30 = var30.bind(var5)(var29);
            var29 = {};
            var39 = function handleNavigateToPremium() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var4 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0008_ip = 56; continue _fun0008 }
 48:
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var1)();
 56:
                    return var1;
                }
            };
            var29['navigateToPremium'] = var39;
            var38 = function handleNavigateToShop() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var4 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0009_ip = 56; continue _fun0009 }
 48:
                    var2 = _closure2_slot4;
                    var2 = var2.bind(var1)();
 56:
                    return var1;
                }
            };
            var29['navigateToShop'] = var38;
            var29['hasCustomProfileTheme'] = var37;
            var28 = var31.bind(var5)(var30, var29);
 2061:
            var27[1] = var28;
            var30 = _closure1_slot13;
            var29 = _closure1_slot1;
            var31 = _closure1_slot2;
            var28 = 59;
            var28 = var31[var28];
            var29 = var29.bind(var5)(var28);
            var28 = {};
            var28['user'] = var18;
            var28['currentUser'] = var17;
            var28['guildId'] = var34;
            var28['style'] = var33;
            var28 = var30.bind(var5)(var29, var28);
            var27[2] = var28;
            var29 = var36.length;
            var28 = 0;
            var28 = var29 > var28;
            if(!var28) { _fun0005_ip = 2182; continue _fun0005 }
 2132:
            var31 = _closure1_slot13;
            var30 = _closure1_slot1;
            var37 = _closure1_slot2;
            var29 = 60;
            var29 = var37[var29];
            var30 = var30.bind(var5)(var29);
            var29 = {};
            var37 = var18.id;
            var29['userId'] = var37;
            var29['applicationIds'] = var36;
            var29['style'] = var33;
            var28 = var31.bind(var5)(var30, var29);
 2182:
            var27[3] = var28;
            var30 = _closure1_slot13;
            var29 = _closure1_slot1;
            var31 = _closure1_slot2;
            var28 = 61;
            var28 = var31[var28];
            var29 = var29.bind(var5)(var28);
            var28 = {};
            var31 = var18.id;
            var28['userId'] = var31;
            var28['displayProfile'] = var16;
            var31 = undefined;
            if(!var7) { _fun0005_ip = 2234; continue _fun0005 }
 2231:
            var31 = var35;
 2234:
            var28['pendingBio'] = var31;
            var28['style'] = var33;
            var28 = var30.bind(var5)(var29, var28);
            var27[4] = var28;
            var28 = var1 != var34;
            if(!var28) { _fun0005_ip = 2309; continue _fun0005 }
 2260:
            var31 = _closure1_slot13;
            var30 = _closure1_slot1;
            var35 = _closure1_slot2;
            var29 = 62;
            var29 = var35[var29];
            var30 = var30.bind(var5)(var29);
            var29 = {};
            var35 = var18.id;
            var29['userId'] = var35;
            var29['guildId'] = var34;
            var29['style'] = var33;
            var28 = var31.bind(var5)(var30, var29);
 2309:
            var27[5] = var28;
            var29 = var1 == var15;
            var28 = undefined;
            if(var29) { _fun0005_ip = 2327; continue _fun0005 }
 2322:
            var28 = var15.guild_id;
 2327:
            var28 = var1 != var28;
            if(!var28) { _fun0005_ip = 2402; continue _fun0005 }
 2334:
            var31 = _closure1_slot13;
            var30 = _closure1_slot1;
            var34 = _closure1_slot2;
            var29 = 63;
            var29 = var34[var29];
            var30 = var30.bind(var5)(var29);
            var29 = {};
            var29['user'] = var18;
            var29['currentUser'] = var17;
            var34 = var15.guild_id;
            var29['guildId'] = var34;
            var34 = var15.id;
            var29['channelId'] = var34;
            var29['showUserProfile'] = var32;
            var29['style'] = var33;
            var28 = var31.bind(var5)(var30, var29);
 2402:
            var27[6] = var28;
            var35 = _closure1_slot13;
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var28 = 64;
            var30 = var31[var28];
            var30 = var29.bind(var5)(var30);
            var34 = var30.UserProfileAccountConnectionsCard;
            var30 = {};
            var36 = var18.id;
            var30['userId'] = var36;
            var30['style'] = var33;
            var30 = var35.bind(var5)(var34, var30);
            var27[7] = var30;
            var30 = _closure1_slot13;
            var28 = var31[var28];
            var28 = var29.bind(var5)(var28);
            var29 = var28.UserProfileApplicationRoleConnectionsCard;
            var28 = {};
            var31 = var18.id;
            var28['userId'] = var31;
            var28['style'] = var33;
            var28 = var30.bind(var5)(var29, var28);
            var27[8] = var28;
            var28 = !var7;
            if(!var28) { _fun0005_ip = 2561; continue _fun0005 }
 2511:
            var31 = _closure1_slot13;
            var30 = _closure1_slot1;
            var34 = _closure1_slot2;
            var29 = 65;
            var29 = var34[var29];
            var30 = var30.bind(var5)(var29);
            var29 = {};
            var34 = var18.id;
            var29['userId'] = var34;
            var29['style'] = var33;
            var29['onBack'] = var32;
            var28 = var31.bind(var5)(var30, var29);
 2561:
            var27[9] = var28;
            var24['children'] = var27;
            var24 = var26.bind(var5)(var25, var24);
            var23[3] = var24;
            var20['children'] = var23;
            var20 = var22.bind(var5)(var21, var20);
            var13[1] = var20;
            var8['children'] = var13;
            var8 = var10.bind(var5)(var9, var8);
            var6[1] = var8;
            var7 = !var7;
            if(!var7) { _fun0005_ip = 2799; continue _fun0005 }
 2616:
            var10 = _closure1_slot14;
            var9 = _closure1_slot4;
            var8 = {};
            var11 = var11.bannerButtons;
            var8['style'] = var11;
            var20 = var18.id;
            var11 = var17.id;
            var13 = null;
            if(!(var20 !== var11)) { _fun0005_ip = 2727; continue _fun0005 }
 2652:
            var11 = var18.bot;
            var13 = null;
            if(var11) { _fun0005_ip = 2727; continue _fun0005 }
 2663:
            var11 = _closure1_slot11;
            var11 = var11.FRIEND;
            if(!(var19 !== var11)) { _fun0005_ip = 2704; continue _fun0005 }
 2677:
            var11 = null;
            if(!var14) { _fun0005_ip = 2702; continue _fun0005 }
 2682:
            var20 = _closure1_slot13;
            var19 = _closure1_slot18;
            var14 = {};
            var14['user'] = var18;
            var11 = var20.bind(var5)(var19, var14);
 2702:
            _fun0005_ip = 2724; continue _fun0005;
 2704:
            var20 = _closure1_slot13;
            var19 = _closure1_slot17;
            var14 = {};
            var14['user'] = var18;
            var11 = var20.bind(var5)(var19, var14);
 2724:
            var13 = var11;
 2727:
            var11 = new Array(2);
            var11[0] = var13;
            var14 = _closure1_slot13;
            var13 = _closure1_slot1;
            var19 = _closure1_slot2;
            var12 = 66;
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
 2799:
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 2815:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 67;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileContent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
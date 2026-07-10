// app/modules/guild_action_sheet/native/components/GuildActionSheetActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var9;
    var1 = function HideMutedChannelsOption(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var _closure2_slot0 = var1;
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var2 = 17;
        var2 = var11[var2];
        var4 = undefined;
        var7 = var10.bind(var4)(var2);
        var6 = var7.useStateFromStores;
        var2 = _closure1_slot12;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var3 = _closure1_slot12;
            var2 = var3.isGuildCollapsed;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var6.bind(var7)(var3, var2);
        var3 = _closure1_slot21;
        var1 = 18;
        var1 = var11[var1];
        var1 = var10.bind(var4)(var1);
        var2 = var1.ActionSheetSwitchRow;
        var1 = {};
        var7 = 19;
        var8 = var11[var7];
        var8 = var10.bind(var4)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.UwOLJO;
        var7 = var8.bind(var9)(var7);
        var1['label'] = var7;
        var1['value'] = var6;
        var5 = function onValueChange() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 20;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.toggleCollapseGuild;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['onValueChange'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function BrowseChannelsOption(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.guild;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 21;
            var3 = var8[var3];
            var5 = undefined;
            var3 = var4.bind(var5)(var3);
            var6 = var3.bind(var5)(var1);
            var4 = _closure1_slot0;
            var3 = 22;
            var3 = var8[var3];
            var10 = var4.bind(var5)(var3);
            var9 = var10.UNSAFE_useIsDismissibleContentDismissed;
            var3 = 23;
            var3 = var8[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.CHANNEL_BROWSER_NEW_BADGE_NUX;
            var12 = var9.bind(var10)(var3);
            var3 = 17;
            var9 = var8[var3];
            var13 = var4.bind(var5)(var9);
            var11 = var13.useStateFromStores;
            var9 = _closure1_slot11;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var4 = _closure1_slot11;
                var3 = var4.hasUnread;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure1_slot20;
                var1 = var1.GUILD_ONBOARDING_QUESTION;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var11 = var11.bind(var13)(var10, var9);
            var3 = var8[var3];
            var9 = var4.bind(var5)(var3);
            var8 = var9.useStateFromStores;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var4 = _closure1_slot5;
                var3 = var4.getNewChannelIds;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var2 = var2.size;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 24;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.MAX_NEW_CHANNELS_TO_SHOW;
                var1 = var2 > var1;
                return var1;
            };
            var10 = var8.bind(var9)(var4, var3);
            var8 = _closure1_slot3;
            var4 = var8.useCallback;
            var9 = var1.id;
            var3 = new Array(1);
            var3[0] = var9;
            var2 = function() {
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 25;
                var4 = var3[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var4 = var6.hideActionSheet;
                var4 = var4.bind(var6)();
                var4 = 26;
                var4 = var3[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.pushLazy;
                var7 = _closure1_slot0;
                var4 = 28;
                var4 = var3[var4];
                var7 = var7.bind(var1)(var4);
                var4 = 27;
                var4 = var3[var4];
                var3 = var3.paths;
                var4 = var7.bind(var1)(var4, var3);
                var3 = {};
                var7 = _closure2_slot0;
                var7 = var7.id;
                var3['guildId'] = var7;
                var2 = _closure1_slot18;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var8 = var4.bind(var8)(var2, var3);
            var3 = var1.features;
            var2 = var3.has;
            var1 = _closure1_slot15;
            var1 = var1.COMMUNITY;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot21;
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 18;
            var2 = var13[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.ActionSheetRow;
            var2 = {};
            if(!var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(var11) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var9 = null;
            if(!var10) { _fun0001_ip = 7; continue _fun0001 }
case 4:
            var12 = _closure1_slot21;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 29;
            var10 = var13[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.NewBadge;
            var10 = {};
            var9 = var12.bind(var5)(var11, var10);
case 7:
            var2['trailing'] = var9;
            var2['onPress'] = var8;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 19;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var7.et6wav;
            var6 = var8.bind(var9)(var6);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var7 = var7.h9mGOP;
            var6 = var8.bind(var9)(var7);
case 10:
            var2['label'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function ChangeIdentityOption(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var18 = var1.guild;
            var16 = var1.user;
            var1 = _closure1_slot23;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 30;
            var1 = var6[var1];
            var7 = var2.bind(var4)(var1);
            var3 = var7.getNickname;
            var1 = var18.id;
            var15 = var3.bind(var7)(var1, var4, var16);
            var1 = 31;
            var1 = var6[var1];
            var3 = var2.bind(var4)(var1);
            var1 = 32;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.GUILD_SETTINGS;
            var1 = var3.bind(var4)(var1);
            var3 = var1.analyticsLocations;
            var1 = 33;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['guild'] = var18;
            var1['analyticsLocations'] = var3;
            var1 = var2.bind(var4)(var1);
            var _closure2_slot0 = var1;
            var3 = _closure1_slot21;
            var7 = _closure1_slot0;
            var1 = 18;
            var1 = var6[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.ActionSheetRow;
            var1 = {};
            var12 = 19;
            var6 = var6[var12];
            var6 = var7.bind(var4)(var6);
            var8 = var6.intl;
            var7 = var8.string;
            var10 = var18.features;
            var9 = var10.has;
            var6 = _closure1_slot15;
            var6 = var6.HUB;
            var6 = var9.bind(var10)(var6);
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var12];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            if(var6) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var6 = var9.PKQB/H;
            _fun0002_ip = 13; continue _fun0002;
case 11:
            var6 = var9["+MWrWt"];
case 13:
            var6 = var7.bind(var8)(var6);
            var1['label'] = var6;
            var7 = null;
            var6 = var15;
            if(!(var7 != var16)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var8 = var16.hasAvatarForGuild;
            var7 = var18.id;
            var7 = var8.bind(var16)(var7);
            var6 = var15;
            if(!var7) { _fun0002_ip = 14; continue _fun0002 }
case 16:
            var9 = _closure1_slot22;
            var8 = _closure1_slot4;
            var7 = {};
            var10 = var14.identitySublabel;
            var7['style'] = var10;
            var13 = _closure1_slot21;
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var19 = 34;
            var10 = var17[var19];
            var10 = var20.bind(var4)(var10);
            var12 = var10.Avatar;
            var10 = {};
            var19 = var17[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.AvatarSizes;
            var19 = var19.SIZE_16;
            var10['size'] = var19;
            var19 = var14.guildServerAvatar;
            var10['style'] = var19;
            var10['user'] = var16;
            var18 = var18.id;
            var10['guildId'] = var18;
            var12 = var13.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot21;
            var12 = _closure1_slot1;
            var11 = 35;
            var11 = var17[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['user'] = var16;
            var11['nick'] = var15;
            var15 = var14.identityName;
            var11['usernameStyle'] = var15;
            var15 = var14.identityName;
            var11['discriminatorStyle'] = var15;
            var14 = var14.identityName;
            var11['nicknameStyle'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 14:
            var1['subLabel'] = var6;
            var5 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 25;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                var2 = _closure2_slot0;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function GuildThemePreferenceOption(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var4 = var2.guild;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 36;
            var3 = var8[var3];
            var5 = undefined;
            var7 = var6.bind(var5)(var3);
            var6 = var4.id;
            var3 = 'GuildActionSheetActions';
            var3 = var7.bind(var5)(var6, var3);
            var7 = _closure1_slot0;
            var6 = 17;
            var6 = var8[var6];
            var10 = var7.bind(var5)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = var4.id;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot6;
                var2 = var3.resolveGuildThemeSourcePreference;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var9.bind(var10)(var8, var6, var7);
            var7 = _closure1_slot3;
            var6 = var7.useCallback;
            var9 = var4.id;
            var4 = new Array(1);
            var4[0] = var9;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 37;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.GuildThemeSourcePreference;
                    var4 = arg1;
                    if(var4) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var5 = var3.PERSONAL;
                    _fun0004_ip = 19; continue _fun0004;
case 17:
                    var5 = var3.GUILD;
case 19:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 38;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setGuildThemeSourcePreferenceOverride;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2, var5);
                    return var1;
                }
            };
            var6 = var6.bind(var7)(var1, var4);
            var1 = null;
            if(!var3) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var4 = _closure1_slot21;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 18;
            var2 = var10[var2];
            var2 = var9.bind(var5)(var2);
            var3 = var2.ActionSheetSwitchRow;
            var2 = {};
            var7 = 19;
            var11 = var10[var7];
            var11 = var9.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var7 = var10[var7];
            var7 = var9.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.CFzDOG;
            var7 = var11.bind(var12)(var7);
            var2['label'] = var7;
            var7 = 37;
            var7 = var10[var7];
            var7 = var9.bind(var5)(var7);
            var7 = var7.GuildThemeSourcePreference;
            var7 = var7.GUILD;
            var7 = var8 === var7;
            var2['value'] = var7;
            var2['onValueChange'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 20:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function ServerTagOption(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var18 = var1.guild;
            var _closure2_slot0 = var18;
            var1 = _closure1_slot23;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 39;
            var1 = var5[var1];
            var5 = var3.bind(var4)(var1);
            var3 = var5.canViewMobileServerTag;
            var1 = var18.id;
            var1 = var3.bind(var5)(var1);
            var6 = _closure1_slot3;
            var5 = var6.useCallback;
            var7 = var18.id;
            var3 = new Array(1);
            var3[0] = var7;
            var2 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var4 = 25;
                var6 = var2[var4];
                var1 = undefined;
                var7 = var5.bind(var1)(var6);
                var6 = var7.hideActionSheet;
                var6 = var6.bind(var7)();
                var4 = var2[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 28;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 40;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var7 = _closure2_slot0;
                var8 = var7.id;
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'ServerTagPreviewActionSheet:';
                var3 = var3.bind(var2)(var8);
                var2 = {};
                var7 = var7.id;
                var2['guildId'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var5 = var5.bind(var6)(var2, var3);
            if(var1) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var1 = null;
            return var1;
case 22:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 41;
            var1 = var3[var1];
            var7 = var2.bind(var4)(var1);
            var6 = var7.getGuildTagBadgeUrl;
            var3 = var18.id;
            var1 = var18.profile;
            var17 = null;
            var8 = var17 == var1;
            var2 = undefined;
            if(var8) { _fun0005_ip = 21; continue _fun0005 }
case 24:
            var2 = var1.badge;
case 21:
            var1 = _closure1_slot19;
            var1 = var1.SIZE_16;
            var16 = var6.bind(var7)(var3, var2, var1);
            var3 = _closure1_slot21;
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var1 = 18;
            var1 = var19[var1];
            var1 = var14.bind(var4)(var1);
            var2 = var1.ActionSheetRow;
            var1 = {};
            var8 = _closure1_slot22;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var9.serverTagLabel;
            var6['style'] = var9;
            var12 = _closure1_slot21;
            var11 = _closure1_slot4;
            var9 = {'accessibilityElementsHidden': true, 'importantForAccessibility': 'no-hide-descendants'};
            var15 = _closure1_slot21;
            var13 = 42;
            var13 = var19[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.BaseGuildTagChiplet;
            var13 = {};
            var19 = var18.profile;
            var20 = var17 == var19;
            var18 = undefined;
            if(var20) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var18 = var19.tag;
case 25:
            var19 = var17 != var18;
            var17 = undefined;
            if(!var19) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var17 = var18;
case 27:
            var13['guildTag'] = var17;
            var13['guildBadge'] = var16;
            var16 = _closure1_slot19;
            var16 = var16.SIZE_16;
            var13['badgeSize'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var9['children'] = var13;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot21;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 43;
            var10 = var17[var10];
            var10 = var16.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'heading-md/semibold', 'color': 'mobile-text-heading-primary'};
            var13 = 19;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13["2QmKZ2"];
            var13 = var14.bind(var15)(var13);
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var1['label'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var6 = function RestrictedGuildPrivacyOption(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var7 = var1.guild;
            var _closure2_slot0 = var7;
            var13 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 44;
            var1 = var9[var1];
            var4 = undefined;
            var1 = var13.bind(var4)(var1);
            var2 = var1.RestrictedGuildIds;
            var1 = var2.useSetting;
            var3 = var1.bind(var2)();
            var2 = var3.includes;
            var1 = var7.id;
            var6 = var2.bind(var3)(var1);
            var3 = _closure1_slot21;
            var1 = 18;
            var1 = var9[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.ActionSheetSwitchRow;
            var1 = {};
            var12 = 19;
            var10 = var9[var12];
            var10 = var13.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var9[var12];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.KXNTgb;
            var9 = var10.bind(var11)(var9);
            var1['label'] = var9;
            var10 = var7.features;
            var9 = var10.has;
            var7 = _closure1_slot15;
            var7 = var7.HUB;
            var7 = var9.bind(var10)(var7);
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var9 = var8[var12];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var8[var12];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            if(var7) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var7 = var8.jMFSQV;
            var7 = var9.bind(var10)(var7);
            _fun0006_ip = 3; continue _fun0006;
case 29:
            var8 = var8["2YwzGs"];
            var7 = var9.bind(var10)(var8);
case 3:
            var1['subLabel'] = var7;
            var6 = !var6;
            var1['value'] = var6;
            var5 = function onValueChange(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 45;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getSanitizedRestrictedGuilds;
                    var6 = var3.bind(var4)();
                    var3 = arg1;
                    if(var3) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                    var4 = var6.add;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var3 = var4.bind(var6)(var3);
                    _fun0007_ip = 33; continue _fun0007;
case 31:
                    var4 = var6.delete;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var3 = var4.bind(var6)(var3);
case 33:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 44;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var4 = var2.RestrictedGuildIds;
                    var3 = var4.updateSetting;
                    var2 = global;
                    var5 = var2.Array;
                    var2 = var5.from;
                    var2 = var2.bind(var5)(var6);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1['onValueChange'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot29 = var6;
    var5 = function NotificationAction(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot21;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 18;
        var1 = var10[var1];
        var3 = undefined;
        var1 = var9.bind(var3)(var1);
        var2 = var1.ActionSheetRow;
        var1 = {};
        var6 = 19;
        var7 = var10[var6];
        var7 = var9.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.HcoRu0;
        var6 = var7.bind(var8)(var6);
        var1['label'] = var6;
        var5 = function onPress() {
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 25;
            var2 = var4[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var2 = var5.hideActionSheet;
            var2 = var2.bind(var5)();
            var2 = 46;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.open;
            var2 = _closure2_slot0;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['onPress'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot30 = var5;
    var4 = function handleLeaveServer(arg1) {
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 25;
        var3 = var5[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.hideActionSheet;
        var3 = var3.bind(var4)();
        var6 = _closure1_slot3;
        var4 = var6.lazy;
        var3 = function() {
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 28;
            var2 = var1[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = 57;
            var2 = var1[var2];
            var1 = var1.paths;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6 = var4.bind(var6)(var3);
        var4 = _closure1_slot0;
        var3 = 58;
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.openAlert;
        var3 = _closure1_slot21;
        var2 = {};
        var7 = arg1;
        var2['guild'] = var7;
        var3 = var3.bind(var1)(var6, var2);
        var2 = 'guild-action-sheet-leave-server';
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var _closure1_slot31 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var7);
    var1 = 0;
    var10 = var9[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var10);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.View;
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var13 = 4;
    var7 = var9[var13];
    var7 = var8.bind(var1)(var7);
    var10 = var7.isGuildOwner;
    var _closure1_slot7 = var10;
    var7 = var7.getGuildIconURL;
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var9[var7];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var9[var7];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var7 = 8;
    var7 = var9[var7];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var9[var7];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var7 = 10;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.ChannelTypes;
    var _closure1_slot14 = var10;
    var10 = var7.GuildFeatures;
    var _closure1_slot15 = var10;
    var16 = var7.Fonts;
    var10 = var7.AnalyticsSections;
    var _closure1_slot16 = var10;
    var7 = var7.AVATAR_MAX_SIZE;
    var _closure1_slot17 = var7;
    var7 = 11;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.CHANNELS_AND_ROLES_MODAL_KEY;
    var _closure1_slot18 = var7;
    var15 = 12;
    var7 = var9[var15];
    var7 = var8.bind(var1)(var7);
    var7 = var7.GuildTagBadgeSize;
    var _closure1_slot19 = var7;
    var7 = 13;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ReadStateTypes;
    var _closure1_slot20 = var7;
    var7 = 14;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.jsx;
    var _closure1_slot21 = var10;
    var7 = var7.jsxs;
    var _closure1_slot22 = var7;
    var7 = 15;
    var7 = var9[var7];
    var11 = var8.bind(var1)(var7);
    var10 = var11.createStyles;
    var7 = {};
    var12 = {};
    var12['marginRight'] = var13;
    var7['guildServerAvatar'] = var12;
    var12 = {};
    var13 = 16;
    var17 = var9[var13];
    var17 = var14.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.INTERACTIVE_TEXT_DEFAULT;
    var12['color'] = var17;
    var16 = var16.PRIMARY_MEDIUM;
    var12['fontFamily'] = var16;
    var12['fontSize'] = var15;
    var7['identityName'] = var12;
    var12 = {};
    var15 = 'row';
    var12['flexDirection'] = var15;
    var7['identitySublabel'] = var12;
    var12 = {'flexDirection': 'row', 'alignItems': 'center'};
    var13 = var9[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var12['columnGap'] = var13;
    var7['serverTagLabel'] = var12;
    var7 = var10.bind(var11)(var7);
    var _closure1_slot23 = var7;
    var7 = 73;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guild_action_sheet/native/components/GuildActionSheetActions.tsx';
    var7 = var8.bind(var9)(var7);
    var3['RestrictedGuildPrivacyOption'] = var6;
    var3['NotificationAction'] = var5;
    var5 = function GuildUnreadAction(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var10 = var1.guild;
            var _closure2_slot0 = var10;
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 17;
            var2 = var15[var1];
            var4 = undefined;
            var8 = var19.bind(var4)(var2);
            var6 = var8.useStateFromStores;
            var2 = _closure1_slot9;
            var5 = new Array(1);
            var5[0] = var2;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getGuildHasUnreadIgnoreMuted;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var6.bind(var8)(var5, var2, var3);
            var2 = 47;
            var2 = var15[var2];
            var5 = var19.bind(var4)(var2);
            var3 = var5.useShouldUseNewNotificationSystem;
            var2 = 'GuildUnreadAction';
            var6 = var3.bind(var5)(var2);
            var8 = _closure1_slot3;
            var5 = var8.useCallback;
            var2 = var10.id;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 46;
                var3 = var8[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var5 = var6.updateGuildNotificationSettings;
                var3 = _closure2_slot0;
                var4 = var3.id;
                var3 = {};
                var7 = false;
                var3['muted'] = var7;
                var7 = _closure1_slot0;
                var2 = 48;
                var2 = var8[var2];
                var2 = var7.bind(var1)(var2);
                var2 = var2.NotificationLabels;
                var2 = var2.Unmuted;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var2 = var5.bind(var8)(var2, var3);
            var _closure2_slot1 = var2;
            var1 = var15[var1];
            var5 = var19.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot12;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot12;
                var2 = var3.isMuted;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var3.bind(var5)(var2, var1);
            var _closure2_slot2 = var13;
            var3 = _closure1_slot22;
            var14 = 18;
            var1 = var15[var14];
            var1 = var19.bind(var4)(var1);
            var1 = var1.ActionSheetRow;
            var2 = var1.Group;
            var1 = {};
            var5 = false;
            var1['hasIcons'] = var5;
            var9 = _closure1_slot21;
            var5 = var15[var14];
            var5 = var19.bind(var4)(var5);
            var8 = var5.ActionSheetRow;
            var5 = {};
            var18 = 19;
            var16 = var15[var18];
            var16 = var19.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var18];
            var15 = var19.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.e6RscS;
            var15 = var16.bind(var17)(var15);
            var5['label'] = var15;
            var15 = function onPress() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 25;
                var3 = var5[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var3 = var6.hideActionSheet;
                var3 = var3.bind(var6)();
                var3 = 49;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = _closure2_slot0;
                var5 = var3.id;
                var3 = new Array(1);
                var3[0] = var5;
                var2 = _closure1_slot16;
                var2 = var2.GUILD_POPOUT;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var5['onPress'] = var15;
            var11 = !var11;
            var5['disabled'] = var11;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(3);
            var5[0] = var8;
            if(!var6) { _fun0008_ip = 34; continue _fun0008 }
case 35:
            var11 = _closure1_slot21;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var14];
            var8 = var9.bind(var4)(var8);
            var9 = var8.ActionSheetRow;
            var8 = {};
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = var14[var18];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var18];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            if(var13) { _fun0008_ip = 36; continue _fun0008 }
case 37:
            var13 = var14.vRzp7P;
            var13 = var15.bind(var16)(var13);
            _fun0008_ip = 38; continue _fun0008;
case 36:
            var14 = var14.De0BTC;
            var13 = var15.bind(var16)(var14);
case 38:
            var8['label'] = var13;
            var12 = function onPress() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0009_ip = 39; continue _fun0009 }
case 40:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 25;
                    var6 = var2[var4];
                    var7 = undefined;
                    var8 = var5.bind(var7)(var6);
                    var6 = var8.hideActionSheet;
                    var6 = var6.bind(var8)();
                    var4 = var2[var4];
                    var6 = var5.bind(var7)(var4);
                    var5 = var6.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 28;
                    var3 = var2[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = 50;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var4 = var4.bind(var7)(var3, var2);
                    var7 = _closure2_slot0;
                    var8 = var7.id;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'muteSettings';
                    var3 = var3.bind(var2)(var8);
                    var2 = {};
                    var7 = var7.id;
                    var2['guildId'] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    _fun0009_ip = 41; continue _fun0009;
case 39:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var8['onPress'] = var12;
            var6 = var11.bind(var4)(var9, var8);
case 34:
            var5[1] = var6;
            var9 = var10.features;
            var8 = var9.has;
            var6 = _closure1_slot15;
            var6 = var6.COMMUNITY;
            var8 = var8.bind(var9)(var6);
            var6 = null;
            if(!var8) { _fun0008_ip = 42; continue _fun0008 }
case 43:
            var9 = _closure1_slot21;
            var8 = _closure1_slot25;
            var7 = {};
            var7['guild'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 42:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GuildUnreadAction'] = var5;
    var5 = function GuildActionSheetPrimaryActions(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var1 = var1.guild;
            var _closure2_slot0 = var1;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 51;
            var3 = var8[var3];
            var5 = undefined;
            var4 = var7.bind(var5)(var3);
            var3 = var4.useGuildActionSheetPermissions;
            var3 = var3.bind(var4)(var1);
            var4 = var3.canManageChannels;
            var9 = _closure1_slot1;
            var3 = 52;
            var3 = var8[var3];
            var3 = var9.bind(var5)(var3);
            var1 = var1.id;
            var3 = var3.bind(var5)(var1);
            var1 = 17;
            var1 = var8[var1];
            var9 = var7.bind(var5)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot10;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 53;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isVerifiedRolesChannelVisible;
                var5 = _closure1_slot10;
                var4 = var5.getSortedRoles;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var8.bind(var9)(var7, var1);
            var8 = new Array(0);
            if(!var4) { _fun0010_ip = 44; continue _fun0010 }
case 45:
            var9 = var8.push;
            var12 = _closure1_slot21;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var4 = 18;
            var7 = var15[var4];
            var7 = var14.bind(var5)(var7);
            var10 = var7.ActionSheetRow;
            var7 = {};
            var11 = 19;
            var13 = var15[var11];
            var13 = var14.bind(var5)(var13);
            var17 = var13.intl;
            var16 = var17.string;
            var13 = var15[var11];
            var13 = var14.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.fUYU+j;
            var13 = var16.bind(var17)(var13);
            var7['label'] = var13;
            var13 = function onPress() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 25;
                var2 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var2 = var5.hideActionSheet;
                var2 = var2.bind(var5)();
                var2 = 54;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.open;
                var2 = _closure2_slot0;
                var8 = var2.id;
                var10 = var5;
                var9 = null;
                var7 = null;
                var6 = null;
                var2 = var10[var4](var9, var8, var7, var6, var5);
                return var1;
            };
            var7['onPress'] = var13;
            var7 = var12.bind(var5)(var10, var7);
            var7 = var9.bind(var8)(var7);
            var7 = var8.push;
            var10 = _closure1_slot21;
            var4 = var15[var4];
            var4 = var14.bind(var5)(var4);
            var9 = var4.ActionSheetRow;
            var4 = {};
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.ISN+NM;
            var11 = var12.bind(var13)(var11);
            var4['label'] = var11;
            var11 = function onPress() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 25;
                var3 = var5[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var3 = var6.hideActionSheet;
                var3 = var3.bind(var6)();
                var3 = 54;
                var3 = var5[var3];
                var6 = var4.bind(var1)(var3);
                var5 = var6.open;
                var2 = _closure1_slot14;
                var10 = var2.GUILD_CATEGORY;
                var2 = _closure2_slot0;
                var9 = var2.id;
                var11 = var6;
                var8 = null;
                var7 = null;
                var2 = var11[var5](var10, var9, var8, var7, var6);
                return var1;
            };
            var4['onPress'] = var11;
            var4 = var10.bind(var5)(var9, var4);
            var4 = var7.bind(var8)(var4);
case 44:
            if(!var3) { _fun0010_ip = 46; continue _fun0010 }
case 47:
            var4 = var8.push;
            var9 = _closure1_slot21;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 18;
            var3 = var14[var3];
            var3 = var13.bind(var5)(var3);
            var7 = var3.ActionSheetRow;
            var3 = {};
            var10 = 19;
            var11 = var14[var10];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10["60lJ0C"];
            var10 = var11.bind(var12)(var10);
            var3['label'] = var10;
            var10 = function onPress() {
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 25;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.hideActionSheet;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot0;
                var2 = 55;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.openCreateOrEditGuildEventModal;
                var3 = _closure2_slot0;
                var2 = {};
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var3['onPress'] = var10;
            var3 = var9.bind(var5)(var7, var3);
            var3 = var4.bind(var8)(var3);
case 46:
            if(!var1) { _fun0010_ip = 48; continue _fun0010 }
case 49:
            var3 = var8.push;
            var7 = _closure1_slot21;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 18;
            var1 = var13[var1];
            var1 = var12.bind(var5)(var1);
            var4 = var1.ActionSheetRow;
            var1 = {};
            var9 = 19;
            var10 = var13[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.ghtnss;
            var9 = var10.bind(var11)(var9);
            var1['label'] = var9;
            var9 = function onPress() {
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 25;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.hideActionSheet;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot0;
                var2 = 56;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openGuildRoleConnectionsModal;
                var2 = {};
                var5 = _closure2_slot0;
                var5 = var5.id;
                var2['guildId'] = var5;
                var5 = function onClose() {
                    var1 = undefined;
                    return var1;
                };
                var2['onClose'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onPress'] = var9;
            var1 = var7.bind(var5)(var4, var1);
            var1 = var3.bind(var8)(var1);
case 48:
            var4 = var8.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0010_ip = 50; continue _fun0010 }
case 51:
            var4 = _closure1_slot21;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 18;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.ActionSheetRow;
            var3 = var2.Group;
            var2 = {};
            var7 = false;
            var2['hasIcons'] = var7;
            var7 = var8.map;
            var6 = function(arg1, arg2) {
                var5 = _closure1_slot21;
                var1 = _closure1_slot3;
                var4 = var1.Fragment;
                var3 = {};
                var1 = arg1;
                var3['children'] = var1;
                var2 = undefined;
                var1 = arg2;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 50:
            return var1;
        }
    };
    var3['GuildActionSheetPrimaryActions'] = var5;
    var3['handleLeaveServer'] = var4;
    var4 = function GuildActionSheetDirectoryActions(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var10 = var1.guild;
            var _closure2_slot0 = var10;
            var3 = _closure1_slot13;
            var1 = var3.getCurrentUser;
            var13 = var1.bind(var3)();
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 59;
            var1 = var9[var1];
            var5 = undefined;
            var7 = var3.bind(var5)(var1);
            var1 = null;
            var4 = var1 != var13;
            var3 = 'GuildActionSheetDirectoryActions: user cannot be undefined';
            var3 = var7.bind(var5)(var4, var3);
            var8 = new Array(0);
            var3 = _closure1_slot7;
            var3 = var3.bind(var5)(var10, var13);
            var7 = var8.push;
            var12 = _closure1_slot21;
            var11 = _closure1_slot30;
            var4 = {};
            var4['guild'] = var10;
            var4 = var12.bind(var5)(var11, var4);
            var4 = var7.bind(var8)(var4);
            var7 = var8.push;
            var12 = _closure1_slot21;
            var11 = _closure1_slot26;
            var4 = {};
            var4['guild'] = var10;
            var4['user'] = var13;
            var4 = var12.bind(var5)(var11, var4);
            var4 = var7.bind(var8)(var4);
            var7 = var8.push;
            var12 = _closure1_slot21;
            var11 = _closure1_slot29;
            var4 = {};
            var4['guild'] = var10;
            var4 = var12.bind(var5)(var11, var4);
            var4 = var7.bind(var8)(var4);
            var7 = _closure1_slot0;
            var4 = 60;
            var4 = var9[var4];
            var9 = var7.bind(var5)(var4);
            var7 = var9.useMessageRequestPrivacyOption;
            var4 = {};
            var4['guild'] = var10;
            var7 = var7.bind(var9)(var4);
            if(!(var1 != var7)) { _fun0011_ip = 52; continue _fun0011 }
case 53:
            var4 = var8.push;
            var4 = var4.bind(var8)(var7);
case 52:
            if(var3) { _fun0011_ip = 54; continue _fun0011 }
case 55:
            var4 = var8.push;
            var9 = _closure1_slot21;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 18;
            var3 = var11[var3];
            var3 = var7.bind(var5)(var3);
            var7 = var3.ActionSheetRow;
            var3 = {};
            var12 = var10.features;
            var11 = var12.has;
            var10 = _closure1_slot15;
            var10 = var10.HUB;
            var10 = var11.bind(var12)(var10);
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 19;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            if(var10) { _fun0011_ip = 56; continue _fun0011 }
case 57:
            var10 = var11.J2TBi3;
            var10 = var12.bind(var13)(var10);
            _fun0011_ip = 58; continue _fun0011;
case 56:
            var11 = var11.Dv8gFT;
            var10 = var12.bind(var13)(var11);
case 58:
            var3['label'] = var10;
            var10 = 'danger';
            var3['variant'] = var10;
            var10 = function onPress() {
                var3 = _closure1_slot31;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3['onPress'] = var10;
            var3 = var9.bind(var5)(var7, var3);
            var3 = var4.bind(var8)(var3);
case 54:
            var4 = var8.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0011_ip = 43; continue _fun0011 }
case 59:
            var4 = _closure1_slot21;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 18;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.ActionSheetRow;
            var3 = var2.Group;
            var2 = {};
            var7 = false;
            var2['hasIcons'] = var7;
            var7 = var8.map;
            var6 = function(arg1, arg2) {
                var5 = _closure1_slot21;
                var1 = _closure1_slot3;
                var4 = var1.Fragment;
                var3 = {};
                var1 = arg1;
                var3['children'] = var1;
                var2 = undefined;
                var1 = arg2;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 43:
            return var1;
        }
    };
    var3['GuildActionSheetDirectoryActions'] = var4;
    var4 = function GuildActionSheetSecondaryActions(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var11 = var1.guild;
            var _closure2_slot0 = var11;
            var3 = _closure1_slot13;
            var1 = var3.getCurrentUser;
            var15 = var1.bind(var3)();
            var1 = _closure1_slot7;
            var5 = undefined;
            var3 = var1.bind(var5)(var11, var15);
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 61;
            var1 = var10[var1];
            var4 = var9.bind(var5)(var1);
            var1 = var4.useCanReportRaid;
            var7 = var1.bind(var4)(var11);
            var1 = 62;
            var1 = var10[var1];
            var8 = var9.bind(var5)(var1);
            var4 = var8.useGuildIncidentsState;
            var1 = var11.id;
            var1 = var4.bind(var8)(var1);
            var4 = var1.shouldShowIncidentActions;
            var13 = var1.isUnderLockdown;
            var8 = new Array(0);
            var1 = 63;
            var1 = var10[var1];
            var10 = var9.bind(var5)(var1);
            var9 = var10.useOptInEnabledForGuild;
            var1 = var11.id;
            var14 = var9.bind(var10)(var1);
            var9 = var8.push;
            var12 = _closure1_slot21;
            var10 = _closure1_slot26;
            var1 = {};
            var1['guild'] = var11;
            var1['user'] = var15;
            var1 = var12.bind(var5)(var10, var1);
            var1 = var9.bind(var8)(var1);
            var9 = var8.push;
            var12 = _closure1_slot21;
            var10 = _closure1_slot27;
            var1 = {};
            var1['guild'] = var11;
            var1 = var12.bind(var5)(var10, var1);
            var1 = var9.bind(var8)(var1);
            var9 = var8.push;
            var12 = _closure1_slot21;
            var10 = _closure1_slot28;
            var1 = {};
            var1['guild'] = var11;
            var1 = var12.bind(var5)(var10, var1);
            var1 = var9.bind(var8)(var1);
            var10 = var11.features;
            var9 = var10.has;
            var1 = _closure1_slot15;
            var1 = var1.COMMUNITY;
            var1 = var9.bind(var10)(var1);
            if(!var1) { _fun0012_ip = 60; continue _fun0012 }
case 61:
            var9 = var8.push;
            var12 = _closure1_slot21;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var1 = 18;
            var1 = var19[var1];
            var1 = var18.bind(var5)(var1);
            var10 = var1.ActionSheetSwitchRow;
            var1 = {};
            var15 = 19;
            var16 = var19[var15];
            var16 = var18.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.FB2ZZV;
            var15 = var16.bind(var17)(var15);
            var1['label'] = var15;
            var14 = !var14;
            var1['value'] = var14;
            var14 = function onValueChange() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 64;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.toggleShowAllChannels;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['onValueChange'] = var14;
            var1 = var12.bind(var5)(var10, var1);
            var1 = var9.bind(var8)(var1);
case 60:
            var9 = var8.push;
            var12 = _closure1_slot21;
            var10 = _closure1_slot24;
            var1 = {};
            var1['guild'] = var11;
            var1 = var12.bind(var5)(var10, var1);
            var1 = var9.bind(var8)(var1);
            var9 = var8.push;
            var12 = _closure1_slot21;
            var10 = _closure1_slot29;
            var1 = {};
            var1['guild'] = var11;
            var1 = var12.bind(var5)(var10, var1);
            var1 = var9.bind(var8)(var1);
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 60;
            var1 = var10[var1];
            var10 = var9.bind(var5)(var1);
            var9 = var10.useMessageRequestPrivacyOption;
            var1 = {};
            var1['guild'] = var11;
            var10 = var9.bind(var10)(var1);
            var1 = null;
            if(!(var1 != var10)) { _fun0012_ip = 62; continue _fun0012 }
case 63:
            var9 = var8.push;
            var9 = var9.bind(var8)(var10);
case 62:
            if(!var7) { _fun0012_ip = 64; continue _fun0012 }
case 42:
            var9 = var8.push;
            var12 = _closure1_slot21;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var7 = 18;
            var7 = var18[var7];
            var7 = var17.bind(var5)(var7);
            var10 = var7.ActionSheetRow;
            var7 = {};
            var14 = 19;
            var15 = var18[var14];
            var15 = var17.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.cswId3;
            var14 = var15.bind(var16)(var14);
            var7['label'] = var14;
            var14 = function onPress() {
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 25;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.hideActionSheet;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot0;
                var2 = 65;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openReportRaidModal;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7['onPress'] = var14;
            var7 = var12.bind(var5)(var10, var7);
            var7 = var9.bind(var8)(var7);
case 64:
            var10 = var8.push;
            var14 = _closure1_slot21;
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 18;
            var9 = var15[var7];
            var9 = var19.bind(var5)(var9);
            var12 = var9.ActionSheetRow;
            var9 = {};
            var16 = 19;
            var17 = var15[var16];
            var17 = var19.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var16];
            var15 = var19.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.Aen9eh;
            var15 = var17.bind(var18)(var15);
            var9['label'] = var15;
            var15 = function onPress() {
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 25;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.hideActionSheet;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot0;
                var2 = 66;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.showReportModalForGuild;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9['onPress'] = var15;
            var9 = var14.bind(var5)(var12, var9);
            var9 = var10.bind(var8)(var9);
            if(!var4) { _fun0012_ip = 65; continue _fun0012 }
case 66:
            var9 = var8.push;
            var12 = _closure1_slot21;
            var10 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var10.bind(var5)(var4);
            var10 = var4.ActionSheetRow;
            var4 = {};
            var18 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = var14[var16];
            var15 = var18.bind(var5)(var15);
            var17 = var15.intl;
            var15 = var17.string;
            var14 = var14[var16];
            var14 = var18.bind(var5)(var14);
            var14 = var14.t;
            if(var13) { _fun0012_ip = 67; continue _fun0012 }
case 68:
            var13 = var14.EPlEdu;
            var13 = var15.bind(var17)(var13);
            _fun0012_ip = 69; continue _fun0012;
case 67:
            var14 = var14["+tSVi3"];
            var13 = var15.bind(var17)(var14);
case 69:
            var4['label'] = var13;
            var13 = 'danger';
            var4['variant'] = var13;
            var13 = function onPress() {
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var4 = 25;
                var2 = var3[var4];
                var1 = undefined;
                var7 = var5.bind(var1)(var2);
                var2 = var7.hideActionSheet;
                var2 = var2.bind(var7)();
                var2 = {};
                var7 = _closure1_slot0;
                var6 = 67;
                var6 = var3[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.GuildIncidentActionSources;
                var6 = var6.GUILD_PROFILE;
                var2['source'] = var6;
                var4 = var3[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = 28;
                var4 = var3[var4];
                var7 = var7.bind(var1)(var4);
                var4 = 68;
                var4 = var3[var4];
                var3 = var3.paths;
                var4 = var7.bind(var1)(var4, var3);
                var3 = {};
                var7 = _closure2_slot0;
                var3['guild'] = var7;
                var3['analyticsData'] = var2;
                var2 = 'GuildIncidentActionsActionSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var4['onPress'] = var13;
            var4 = var12.bind(var5)(var10, var4);
            var4 = var9.bind(var8)(var4);
case 65:
            if(var3) { _fun0012_ip = 70; continue _fun0012 }
case 71:
            var4 = var8.push;
            var10 = _closure1_slot21;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var9.bind(var5)(var3);
            var9 = var3.ActionSheetRow;
            var3 = {};
            var13 = var11.features;
            var12 = var13.has;
            var11 = _closure1_slot15;
            var11 = var11.HUB;
            var11 = var12.bind(var13)(var11);
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var13 = var12[var16];
            var13 = var15.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var12[var16];
            var12 = var15.bind(var5)(var12);
            var12 = var12.t;
            if(var11) { _fun0012_ip = 72; continue _fun0012 }
case 73:
            var11 = var12.J2TBi3;
            var11 = var13.bind(var14)(var11);
            _fun0012_ip = 74; continue _fun0012;
case 72:
            var12 = var12.Dv8gFT;
            var11 = var13.bind(var14)(var12);
case 74:
            var3['label'] = var11;
            var11 = 'danger';
            var3['variant'] = var11;
            var11 = function onPress() {
                var3 = _closure1_slot31;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3['onPress'] = var11;
            var3 = var10.bind(var5)(var9, var3);
            var3 = var4.bind(var8)(var3);
case 70:
            var4 = var8.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0012_ip = 75; continue _fun0012 }
case 76:
            var4 = _closure1_slot21;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var3.bind(var5)(var2);
            var2 = var2.ActionSheetRow;
            var3 = var2.Group;
            var2 = {};
            var7 = false;
            var2['hasIcons'] = var7;
            var7 = var8.map;
            var6 = function(arg1, arg2) {
                var5 = _closure1_slot21;
                var1 = _closure1_slot3;
                var4 = var1.Fragment;
                var3 = {};
                var1 = arg1;
                var3['children'] = var1;
                var2 = undefined;
                var1 = arg2;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 75:
            return var1;
        }
    };
    var3['GuildActionSheetSecondaryActions'] = var4;
    var2 = function GuildDeveloperOptionAction(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guild;
            var _closure2_slot0 = var3;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 44;
            var1 = var8[var1];
            var4 = undefined;
            var1 = var6.bind(var4)(var1);
            var6 = var1.DeveloperMode;
            var1 = var6.useSetting;
            var1 = var1.bind(var6)();
            var7 = _closure1_slot1;
            var6 = 69;
            var6 = var8[var6];
            var10 = var7.bind(var4)(var6);
            var9 = var10.useExperiment;
            var7 = {};
            var6 = 'GuildDeveloperOptionAction';
            var7['location'] = var6;
            var6 = {};
            var8 = false;
            var6['autoTrackExposure'] = var8;
            var6 = var9.bind(var10)(var7, var6);
            var6 = var6.tidaWebformEnabled;
            if(var1) { _fun0013_ip = 77; continue _fun0013 }
case 78:
            var1 = null;
            return var1;
case 77:
            var7 = new Array(0);
            var10 = var7.push;
            var13 = _closure1_slot21;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 18;
            var9 = var14[var1];
            var9 = var17.bind(var4)(var9);
            var12 = var9.ActionSheetRow;
            var9 = {};
            var11 = 19;
            var15 = var14[var11];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var11];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14["94lLD7"];
            var14 = var15.bind(var16)(var14);
            var9['label'] = var14;
            var14 = function onPress() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 70;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.copy;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var5.bind(var6)(var2);
                var2 = 71;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentIdCopied;
                var2 = var2.bind(var3)();
                return var1;
            };
            var9['onPress'] = var14;
            var9 = var13.bind(var4)(var12, var9);
            var9 = var10.bind(var7)(var9);
            if(!var6) { _fun0013_ip = 79; continue _fun0013 }
case 80:
            var9 = var3.icon;
            var6 = null;
            if(!(var6 != var9)) { _fun0013_ip = 56; continue _fun0013 }
case 11:
            var10 = var7.push;
            var13 = _closure1_slot21;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = var14[var1];
            var9 = var17.bind(var4)(var9);
            var12 = var9.ActionSheetRow;
            var9 = {};
            var15 = var14[var11];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var11];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14["7H30wR"];
            var14 = var15.bind(var16)(var14);
            var9['label'] = var14;
            var14 = function onPress() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var6 = _closure1_slot8;
                    var5 = _closure2_slot0;
                    var4 = _closure1_slot17;
                    var1 = undefined;
                    var3 = true;
                    var6 = var6.bind(var1)(var5, var4, var3);
                    var3 = null;
                    if(!(var3 != var6)) { _fun0014_ip = 81; continue _fun0014 }
case 82:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 70;
                    var2 = var4[var2];
                    var5 = var3.bind(var1)(var2);
                    var2 = var5.copy;
                    var2 = var2.bind(var5)(var6);
                    var2 = 71;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.presentLinkCopied;
                    var2 = var2.bind(var3)();
case 81:
                    return var1;
                }
            };
            var9['onPress'] = var14;
            var9 = var13.bind(var4)(var12, var9);
            var9 = var10.bind(var7)(var9);
case 56:
            var3 = var3.banner;
            if(!(var6 != var3)) { _fun0013_ip = 79; continue _fun0013 }
case 83:
            var6 = var7.push;
            var10 = _closure1_slot21;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = var12[var1];
            var3 = var15.bind(var4)(var3);
            var9 = var3.ActionSheetRow;
            var3 = {};
            var13 = var12[var11];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var12[var11];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12["2FoUnk"];
            var12 = var13.bind(var14)(var12);
            var3['label'] = var12;
            var12 = function onPress() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 72;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.getGuildBannerURL;
                    var4 = {};
                    var3 = _closure2_slot0;
                    var7 = var3.id;
                    var4['id'] = var7;
                    var3 = var3.banner;
                    var4['banner'] = var3;
                    var3 = true;
                    var6 = var5.bind(var6)(var4, var3);
                    var3 = null;
                    if(!(var3 != var6)) { _fun0015_ip = 84; continue _fun0015 }
case 85:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 70;
                    var2 = var4[var2];
                    var5 = var3.bind(var1)(var2);
                    var2 = var5.copy;
                    var2 = var2.bind(var5)(var6);
                    var2 = 71;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.presentLinkCopied;
                    var2 = var2.bind(var3)();
case 84:
                    return var1;
                }
            };
            var3['onPress'] = var12;
            var3 = var10.bind(var4)(var9, var3);
            var3 = var6.bind(var7)(var3);
case 79:
            var3 = _closure1_slot21;
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = var6[var1];
            var1 = var10.bind(var4)(var1);
            var1 = var1.ActionSheetRow;
            var2 = var1.Group;
            var1 = {};
            var1['hasIcons'] = var8;
            var8 = var6[var11];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var6 = var6[var11];
            var6 = var10.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.ObIb1Q;
            var6 = var8.bind(var9)(var6);
            var1['title'] = var6;
            var6 = var7.map;
            var5 = function(arg1, arg2) {
                var5 = _closure1_slot21;
                var1 = _closure1_slot3;
                var4 = var1.Fragment;
                var3 = {};
                var1 = arg1;
                var3['children'] = var1;
                var2 = undefined;
                var1 = arg2;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GuildDeveloperOptionAction'] = var2;
    return var1;
})();
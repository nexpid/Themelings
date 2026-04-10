// app/modules/guild_action_sheet/native/components/GuildActionSheetActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var9;
    var1 = function ChangeIdentityOption(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var18 = var1.guild;
            var16 = var1.user;
            var1 = _closure1_slot22;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 28;
            var1 = var6[var1];
            var7 = var2.bind(var4)(var1);
            var3 = var7.getNickname;
            var1 = var18.id;
            var15 = var3.bind(var7)(var1, var4, var16);
            var7 = {};
            var1 = _closure1_slot15;
            var1 = var1.GUILD_CHANNEL;
            var7['page'] = var1;
            var1 = _closure1_slot16;
            var1 = var1.GUILD_BOTTOM_SHEET;
            var7['section'] = var1;
            var1 = 29;
            var1 = var6[var1];
            var3 = var2.bind(var4)(var1);
            var1 = 30;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.GUILD_SETTINGS;
            var1 = var3.bind(var4)(var1);
            var3 = var1.analyticsLocations;
            var1 = 31;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['guild'] = var18;
            var1['analyticsLocation'] = var7;
            var1['analyticsLocations'] = var3;
            var1 = var2.bind(var4)(var1);
            var _closure2_slot0 = var1;
            var3 = _closure1_slot20;
            var7 = _closure1_slot0;
            var1 = 16;
            var1 = var6[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.ActionSheetRow;
            var1 = {};
            var12 = 17;
            var6 = var6[var12];
            var6 = var7.bind(var4)(var6);
            var8 = var6.intl;
            var7 = var8.string;
            var10 = var18.features;
            var9 = var10.has;
            var6 = _closure1_slot14;
            var6 = var6.HUB;
            var6 = var9.bind(var10)(var6);
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var12];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var9.PKQB/H;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var6 = var9["+MWrWt"];
case 4:
            var6 = var7.bind(var8)(var6);
            var1['label'] = var6;
            var7 = null;
            var6 = var15;
            if(!(var7 != var16)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var8 = var16.hasAvatarForGuild;
            var7 = var18.id;
            var7 = var8.bind(var16)(var7);
            var6 = var15;
            if(!var7) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var9 = _closure1_slot21;
            var8 = _closure1_slot4;
            var7 = {};
            var10 = var14.identitySublabel;
            var7['style'] = var10;
            var13 = _closure1_slot20;
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var19 = 32;
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
            var13 = _closure1_slot20;
            var12 = _closure1_slot1;
            var11 = 33;
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
case 5:
            var1['subLabel'] = var6;
            var5 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 23;
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
    var _closure1_slot28 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var5 = var9[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var5 = var4.isGuildOwner;
    var _closure1_slot6 = var5;
    var4 = var4.getGuildIconURL;
    var _closure1_slot7 = var4;
    var12 = 4;
    var4 = var9[var12];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var9[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var9[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var9[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var9[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var5 = var4.ChannelTypes;
    var _closure1_slot13 = var5;
    var5 = var4.GuildFeatures;
    var _closure1_slot14 = var5;
    var11 = var4.Fonts;
    var5 = var4.AnalyticsPages;
    var _closure1_slot15 = var5;
    var5 = var4.AnalyticsSections;
    var _closure1_slot16 = var5;
    var4 = var4.AVATAR_MAX_SIZE;
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.CHANNELS_AND_ROLES_MODAL_KEY;
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.ReadStateTypes;
    var _closure1_slot19 = var4;
    var10 = 12;
    var4 = var9[var10];
    var4 = var8.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot20 = var5;
    var4 = var4.jsxs;
    var _closure1_slot21 = var4;
    var4 = 13;
    var4 = var9[var4];
    var6 = var8.bind(var1)(var4);
    var5 = var6.createStyles;
    var4 = {};
    var7 = {};
    var7['marginRight'] = var12;
    var4['guildServerAvatar'] = var7;
    var7 = {};
    var12 = 14;
    var12 = var9[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var7['color'] = var12;
    var11 = var11.PRIMARY_MEDIUM;
    var7['fontFamily'] = var11;
    var7['fontSize'] = var10;
    var4['identityName'] = var7;
    var7 = {};
    var10 = 'row';
    var7['flexDirection'] = var10;
    var4['identitySublabel'] = var7;
    var4 = var5.bind(var6)(var4);
    var _closure1_slot22 = var4;
    var4 = function HideMutedChannelsOption(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var _closure2_slot0 = var1;
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var2 = 15;
        var2 = var11[var2];
        var4 = undefined;
        var7 = var10.bind(var4)(var2);
        var6 = var7.useStateFromStores;
        var2 = _closure1_slot11;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var3 = _closure1_slot11;
            var2 = var3.isGuildCollapsed;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var6.bind(var7)(var3, var2);
        var3 = _closure1_slot20;
        var1 = 16;
        var1 = var11[var1];
        var1 = var10.bind(var4)(var1);
        var2 = var1.ActionSheetSwitchRow;
        var1 = {};
        var7 = 17;
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
            var1 = 18;
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
    var _closure1_slot23 = var4;
    var4 = function BrowseChannelsOption(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var1 = var1.guild;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 19;
            var3 = var8[var3];
            var5 = undefined;
            var3 = var4.bind(var5)(var3);
            var6 = var3.bind(var5)(var1);
            var4 = _closure1_slot0;
            var3 = 20;
            var3 = var8[var3];
            var10 = var4.bind(var5)(var3);
            var9 = var10.UNSAFE_useIsDismissibleContentDismissed;
            var3 = 21;
            var3 = var8[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.CHANNEL_BROWSER_NEW_BADGE_NUX;
            var12 = var9.bind(var10)(var3);
            var3 = 15;
            var9 = var8[var3];
            var13 = var4.bind(var5)(var9);
            var11 = var13.useStateFromStores;
            var9 = _closure1_slot10;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var4 = _closure1_slot10;
                var3 = var4.hasUnread;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure1_slot19;
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
                var1 = 22;
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
                var1 = 23;
                var4 = var3[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var4 = var6.hideActionSheet;
                var4 = var4.bind(var6)();
                var4 = 24;
                var4 = var3[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.pushLazy;
                var7 = _closure1_slot0;
                var4 = 26;
                var4 = var3[var4];
                var7 = var7.bind(var1)(var4);
                var4 = 25;
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
            var1 = _closure1_slot14;
            var1 = var1.COMMUNITY;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot20;
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 16;
            var2 = var13[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.ActionSheetRow;
            var2 = {};
            if(!var12) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            if(var11) { _fun0002_ip = 10; continue _fun0002 }
case 12:
            var9 = null;
            if(!var10) { _fun0002_ip = 13; continue _fun0002 }
case 10:
            var12 = _closure1_slot20;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 27;
            var10 = var13[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.NewBadge;
            var10 = {};
            var9 = var12.bind(var5)(var11, var10);
case 13:
            var2['trailing'] = var9;
            var2['onPress'] = var8;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 17;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            if(var6) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var6 = var7.et6wav;
            var6 = var8.bind(var9)(var6);
            _fun0002_ip = 16; continue _fun0002;
case 14:
            var7 = var7.h9mGOP;
            var6 = var8.bind(var9)(var7);
case 16:
            var2['label'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot24 = var4;
    var6 = function RestrictedGuildPrivacyOption(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var7 = var1.guild;
            var _closure2_slot0 = var7;
            var13 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 34;
            var1 = var9[var1];
            var4 = undefined;
            var1 = var13.bind(var4)(var1);
            var2 = var1.RestrictedGuildIds;
            var1 = var2.useSetting;
            var3 = var1.bind(var2)();
            var2 = var3.includes;
            var1 = var7.id;
            var6 = var2.bind(var3)(var1);
            var3 = _closure1_slot20;
            var1 = 16;
            var1 = var9[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.ActionSheetSwitchRow;
            var1 = {};
            var12 = 17;
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
            var7 = _closure1_slot14;
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
            if(var7) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var7 = var8.jMFSQV;
            var7 = var9.bind(var10)(var7);
            _fun0003_ip = 9; continue _fun0003;
case 17:
            var8 = var8["2YwzGs"];
            var7 = var9.bind(var10)(var8);
case 9:
            var1['subLabel'] = var7;
            var6 = !var6;
            var1['value'] = var6;
            var5 = function onValueChange(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 35;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getSanitizedRestrictedGuilds;
                    var6 = var3.bind(var4)();
                    var3 = arg1;
                    if(var3) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var4 = var6.add;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var3 = var4.bind(var6)(var3);
                    _fun0004_ip = 21; continue _fun0004;
case 19:
                    var4 = var6.delete;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var3 = var4.bind(var6)(var3);
case 21:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 34;
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
    var _closure1_slot25 = var6;
    var5 = function NotificationAction(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot20;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 16;
        var1 = var10[var1];
        var3 = undefined;
        var1 = var9.bind(var3)(var1);
        var2 = var1.ActionSheetRow;
        var1 = {};
        var6 = 17;
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
            var1 = 23;
            var2 = var4[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var2 = var5.hideActionSheet;
            var2 = var2.bind(var5)();
            var2 = 36;
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
    var _closure1_slot26 = var5;
    var4 = function handleLeaveServer(arg1) {
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 23;
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
            var2 = 26;
            var2 = var1[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = 47;
            var2 = var1[var2];
            var1 = var1.paths;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6 = var4.bind(var6)(var3);
        var4 = _closure1_slot0;
        var3 = 48;
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.openAlert;
        var3 = _closure1_slot20;
        var2 = {};
        var7 = arg1;
        var2['guild'] = var7;
        var3 = var3.bind(var1)(var6, var2);
        var2 = 'guild-action-sheet-leave-server';
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var _closure1_slot27 = var4;
    var7 = 63;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guild_action_sheet/native/components/GuildActionSheetActions.tsx';
    var7 = var8.bind(var9)(var7);
    var3['RestrictedGuildPrivacyOption'] = var6;
    var3['NotificationAction'] = var5;
    var5 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var10 = var1.guild;
            var _closure2_slot0 = var10;
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 15;
            var2 = var15[var1];
            var4 = undefined;
            var8 = var19.bind(var4)(var2);
            var6 = var8.useStateFromStores;
            var2 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var2;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuildHasUnreadIgnoreMuted;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var6.bind(var8)(var5, var2, var3);
            var2 = 37;
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
                var1 = 36;
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
                var2 = 38;
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
            var1 = _closure1_slot11;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot11;
                var2 = var3.isMuted;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var3.bind(var5)(var2, var1);
            var _closure2_slot2 = var13;
            var3 = _closure1_slot21;
            var14 = 16;
            var1 = var15[var14];
            var1 = var19.bind(var4)(var1);
            var1 = var1.ActionSheetRow;
            var2 = var1.Group;
            var1 = {};
            var5 = false;
            var1['hasIcons'] = var5;
            var9 = _closure1_slot20;
            var5 = var15[var14];
            var5 = var19.bind(var4)(var5);
            var8 = var5.ActionSheetRow;
            var5 = {};
            var18 = 17;
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
                var1 = 23;
                var3 = var5[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var3 = var6.hideActionSheet;
                var3 = var3.bind(var6)();
                var3 = 39;
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
            if(!var6) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var11 = _closure1_slot20;
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
            if(var13) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var13 = var14.vRzp7P;
            var13 = var15.bind(var16)(var13);
            _fun0005_ip = 26; continue _fun0005;
case 24:
            var14 = var14.De0BTC;
            var13 = var15.bind(var16)(var14);
case 26:
            var8['label'] = var13;
            var12 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 23;
                    var6 = var2[var4];
                    var7 = undefined;
                    var8 = var5.bind(var7)(var6);
                    var6 = var8.hideActionSheet;
                    var6 = var6.bind(var8)();
                    var4 = var2[var4];
                    var6 = var5.bind(var7)(var4);
                    var5 = var6.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 26;
                    var3 = var2[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = 40;
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
                    _fun0006_ip = 29; continue _fun0006;
case 27:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 29:
                    var1 = undefined;
                    return var1;
                }
            };
            var8['onPress'] = var12;
            var6 = var11.bind(var4)(var9, var8);
case 22:
            var5[1] = var6;
            var9 = var10.features;
            var8 = var9.has;
            var6 = _closure1_slot14;
            var6 = var6.COMMUNITY;
            var8 = var8.bind(var9)(var6);
            var6 = null;
            if(!var8) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var9 = _closure1_slot20;
            var8 = _closure1_slot24;
            var7 = {};
            var7['guild'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 30:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GuildUnreadAction'] = var5;
    var5 = function GuildActionSheetPrimaryActions(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var1 = var1.guild;
            var _closure2_slot0 = var1;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 41;
            var3 = var8[var3];
            var5 = undefined;
            var4 = var7.bind(var5)(var3);
            var3 = var4.useGuildActionSheetPermissions;
            var3 = var3.bind(var4)(var1);
            var4 = var3.canManageChannels;
            var9 = _closure1_slot1;
            var3 = 42;
            var3 = var8[var3];
            var3 = var9.bind(var5)(var3);
            var1 = var1.id;
            var3 = var3.bind(var5)(var1);
            var1 = 15;
            var1 = var8[var1];
            var9 = var7.bind(var5)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 43;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isVerifiedRolesChannelVisible;
                var5 = _closure1_slot9;
                var4 = var5.getSortedRoles;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var8.bind(var9)(var7, var1);
            var8 = new Array(0);
            if(!var4) { _fun0007_ip = 32; continue _fun0007 }
case 33:
            var9 = var8.push;
            var12 = _closure1_slot20;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var4 = 16;
            var7 = var15[var4];
            var7 = var14.bind(var5)(var7);
            var10 = var7.ActionSheetRow;
            var7 = {};
            var11 = 17;
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
                var1 = 23;
                var2 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var2 = var5.hideActionSheet;
                var2 = var2.bind(var5)();
                var2 = 44;
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
            var10 = _closure1_slot20;
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
                var1 = 23;
                var3 = var5[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var3 = var6.hideActionSheet;
                var3 = var3.bind(var6)();
                var3 = 44;
                var3 = var5[var3];
                var6 = var4.bind(var1)(var3);
                var5 = var6.open;
                var2 = _closure1_slot13;
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
case 32:
            if(!var3) { _fun0007_ip = 34; continue _fun0007 }
case 35:
            var4 = var8.push;
            var9 = _closure1_slot20;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 16;
            var3 = var14[var3];
            var3 = var13.bind(var5)(var3);
            var7 = var3.ActionSheetRow;
            var3 = {};
            var10 = 17;
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
                var1 = 23;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.hideActionSheet;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot0;
                var2 = 45;
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
case 34:
            if(!var1) { _fun0007_ip = 36; continue _fun0007 }
case 37:
            var3 = var8.push;
            var7 = _closure1_slot20;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 16;
            var1 = var13[var1];
            var1 = var12.bind(var5)(var1);
            var4 = var1.ActionSheetRow;
            var1 = {};
            var9 = 17;
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
                var1 = 23;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.hideActionSheet;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot0;
                var2 = 46;
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
case 36:
            var4 = var8.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0007_ip = 38; continue _fun0007 }
case 39:
            var4 = _closure1_slot20;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.ActionSheetRow;
            var3 = var2.Group;
            var2 = {};
            var7 = false;
            var2['hasIcons'] = var7;
            var7 = var8.map;
            var6 = function(arg1, arg2) {
                var5 = _closure1_slot20;
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
case 38:
            return var1;
        }
    };
    var3['GuildActionSheetPrimaryActions'] = var5;
    var3['handleLeaveServer'] = var4;
    var4 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var10 = var1.guild;
            var _closure2_slot0 = var10;
            var3 = _closure1_slot12;
            var1 = var3.getCurrentUser;
            var13 = var1.bind(var3)();
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 49;
            var1 = var9[var1];
            var5 = undefined;
            var7 = var3.bind(var5)(var1);
            var1 = null;
            var4 = var1 != var13;
            var3 = 'GuildActionSheetDirectoryActions: user cannot be undefined';
            var3 = var7.bind(var5)(var4, var3);
            var8 = new Array(0);
            var3 = _closure1_slot6;
            var3 = var3.bind(var5)(var10, var13);
            var7 = var8.push;
            var12 = _closure1_slot20;
            var11 = _closure1_slot26;
            var4 = {};
            var4['guild'] = var10;
            var4 = var12.bind(var5)(var11, var4);
            var4 = var7.bind(var8)(var4);
            var7 = var8.push;
            var12 = _closure1_slot20;
            var11 = _closure1_slot28;
            var4 = {};
            var4['guild'] = var10;
            var4['user'] = var13;
            var4 = var12.bind(var5)(var11, var4);
            var4 = var7.bind(var8)(var4);
            var7 = var8.push;
            var12 = _closure1_slot20;
            var11 = _closure1_slot25;
            var4 = {};
            var4['guild'] = var10;
            var4 = var12.bind(var5)(var11, var4);
            var4 = var7.bind(var8)(var4);
            var7 = _closure1_slot0;
            var4 = 50;
            var4 = var9[var4];
            var9 = var7.bind(var5)(var4);
            var7 = var9.useMessageRequestPrivacyOption;
            var4 = {};
            var4['guild'] = var10;
            var7 = var7.bind(var9)(var4);
            if(!(var1 != var7)) { _fun0008_ip = 40; continue _fun0008 }
case 41:
            var4 = var8.push;
            var4 = var4.bind(var8)(var7);
case 40:
            if(var3) { _fun0008_ip = 42; continue _fun0008 }
case 43:
            var4 = var8.push;
            var9 = _closure1_slot20;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 16;
            var3 = var11[var3];
            var3 = var7.bind(var5)(var3);
            var7 = var3.ActionSheetRow;
            var3 = {};
            var12 = var10.features;
            var11 = var12.has;
            var10 = _closure1_slot14;
            var10 = var10.HUB;
            var10 = var11.bind(var12)(var10);
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 17;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            if(var10) { _fun0008_ip = 44; continue _fun0008 }
case 45:
            var10 = var11.J2TBi3;
            var10 = var12.bind(var13)(var10);
            _fun0008_ip = 46; continue _fun0008;
case 44:
            var11 = var11.Dv8gFT;
            var10 = var12.bind(var13)(var11);
case 46:
            var3['label'] = var10;
            var10 = 'danger';
            var3['variant'] = var10;
            var10 = function onPress() {
                var3 = _closure1_slot27;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3['onPress'] = var10;
            var3 = var9.bind(var5)(var7, var3);
            var3 = var4.bind(var8)(var3);
case 42:
            var4 = var8.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0008_ip = 31; continue _fun0008 }
case 47:
            var4 = _closure1_slot20;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.ActionSheetRow;
            var3 = var2.Group;
            var2 = {};
            var7 = false;
            var2['hasIcons'] = var7;
            var7 = var8.map;
            var6 = function(arg1, arg2) {
                var5 = _closure1_slot20;
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
case 31:
            return var1;
        }
    };
    var3['GuildActionSheetDirectoryActions'] = var4;
    var4 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var11 = var1.guild;
            var _closure2_slot0 = var11;
            var3 = _closure1_slot12;
            var1 = var3.getCurrentUser;
            var15 = var1.bind(var3)();
            var1 = _closure1_slot6;
            var5 = undefined;
            var3 = var1.bind(var5)(var11, var15);
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 51;
            var1 = var10[var1];
            var4 = var9.bind(var5)(var1);
            var1 = var4.useCanReportRaid;
            var7 = var1.bind(var4)(var11);
            var1 = 52;
            var1 = var10[var1];
            var8 = var9.bind(var5)(var1);
            var4 = var8.useGuildIncidentsState;
            var1 = var11.id;
            var1 = var4.bind(var8)(var1);
            var4 = var1.shouldShowIncidentActions;
            var13 = var1.isUnderLockdown;
            var8 = new Array(0);
            var1 = 53;
            var1 = var10[var1];
            var10 = var9.bind(var5)(var1);
            var9 = var10.useOptInEnabledForGuild;
            var1 = var11.id;
            var14 = var9.bind(var10)(var1);
            var9 = var8.push;
            var12 = _closure1_slot20;
            var10 = _closure1_slot28;
            var1 = {};
            var1['guild'] = var11;
            var1['user'] = var15;
            var1 = var12.bind(var5)(var10, var1);
            var1 = var9.bind(var8)(var1);
            var10 = var11.features;
            var9 = var10.has;
            var1 = _closure1_slot14;
            var1 = var1.COMMUNITY;
            var1 = var9.bind(var10)(var1);
            if(!var1) { _fun0009_ip = 48; continue _fun0009 }
case 49:
            var9 = var8.push;
            var12 = _closure1_slot20;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var1 = 16;
            var1 = var19[var1];
            var1 = var18.bind(var5)(var1);
            var10 = var1.ActionSheetSwitchRow;
            var1 = {};
            var15 = 17;
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
                var1 = 54;
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
case 48:
            var9 = var8.push;
            var12 = _closure1_slot20;
            var10 = _closure1_slot23;
            var1 = {};
            var1['guild'] = var11;
            var1 = var12.bind(var5)(var10, var1);
            var1 = var9.bind(var8)(var1);
            var9 = var8.push;
            var12 = _closure1_slot20;
            var10 = _closure1_slot25;
            var1 = {};
            var1['guild'] = var11;
            var1 = var12.bind(var5)(var10, var1);
            var1 = var9.bind(var8)(var1);
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 50;
            var1 = var10[var1];
            var10 = var9.bind(var5)(var1);
            var9 = var10.useMessageRequestPrivacyOption;
            var1 = {};
            var1['guild'] = var11;
            var10 = var9.bind(var10)(var1);
            var1 = null;
            if(!(var1 != var10)) { _fun0009_ip = 50; continue _fun0009 }
case 51:
            var9 = var8.push;
            var9 = var9.bind(var8)(var10);
case 50:
            if(!var7) { _fun0009_ip = 52; continue _fun0009 }
case 53:
            var9 = var8.push;
            var12 = _closure1_slot20;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var7 = 16;
            var7 = var18[var7];
            var7 = var17.bind(var5)(var7);
            var10 = var7.ActionSheetRow;
            var7 = {};
            var14 = 17;
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
                var1 = 23;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.hideActionSheet;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot0;
                var2 = 55;
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
case 52:
            var10 = var8.push;
            var14 = _closure1_slot20;
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 16;
            var9 = var15[var7];
            var9 = var19.bind(var5)(var9);
            var12 = var9.ActionSheetRow;
            var9 = {};
            var16 = 17;
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
                var1 = 23;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.hideActionSheet;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot0;
                var2 = 56;
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
            if(!var4) { _fun0009_ip = 54; continue _fun0009 }
case 55:
            var9 = var8.push;
            var12 = _closure1_slot20;
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
            if(var13) { _fun0009_ip = 56; continue _fun0009 }
case 57:
            var13 = var14.EPlEdu;
            var13 = var15.bind(var17)(var13);
            _fun0009_ip = 58; continue _fun0009;
case 56:
            var14 = var14["+tSVi3"];
            var13 = var15.bind(var17)(var14);
case 58:
            var4['label'] = var13;
            var13 = 'danger';
            var4['variant'] = var13;
            var13 = function onPress() {
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var4 = 23;
                var2 = var3[var4];
                var1 = undefined;
                var7 = var5.bind(var1)(var2);
                var2 = var7.hideActionSheet;
                var2 = var2.bind(var7)();
                var2 = {};
                var7 = _closure1_slot0;
                var6 = 57;
                var6 = var3[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.GuildIncidentActionSources;
                var6 = var6.GUILD_PROFILE;
                var2['source'] = var6;
                var4 = var3[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = 26;
                var4 = var3[var4];
                var7 = var7.bind(var1)(var4);
                var4 = 58;
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
case 54:
            if(var3) { _fun0009_ip = 59; continue _fun0009 }
case 60:
            var4 = var8.push;
            var10 = _closure1_slot20;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var9.bind(var5)(var3);
            var9 = var3.ActionSheetRow;
            var3 = {};
            var13 = var11.features;
            var12 = var13.has;
            var11 = _closure1_slot14;
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
            if(var11) { _fun0009_ip = 61; continue _fun0009 }
case 62:
            var11 = var12.J2TBi3;
            var11 = var13.bind(var14)(var11);
            _fun0009_ip = 63; continue _fun0009;
case 61:
            var12 = var12.Dv8gFT;
            var11 = var13.bind(var14)(var12);
case 63:
            var3['label'] = var11;
            var11 = 'danger';
            var3['variant'] = var11;
            var11 = function onPress() {
                var3 = _closure1_slot27;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3['onPress'] = var11;
            var3 = var10.bind(var5)(var9, var3);
            var3 = var4.bind(var8)(var3);
case 59:
            var4 = var8.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0009_ip = 64; continue _fun0009 }
case 65:
            var4 = _closure1_slot20;
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
                var5 = _closure1_slot20;
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
case 64:
            return var1;
        }
    };
    var3['GuildActionSheetSecondaryActions'] = var4;
    var2 = function(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guild;
            var _closure2_slot0 = var3;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 34;
            var1 = var8[var1];
            var4 = undefined;
            var1 = var6.bind(var4)(var1);
            var6 = var1.DeveloperMode;
            var1 = var6.useSetting;
            var1 = var1.bind(var6)();
            var7 = _closure1_slot1;
            var6 = 59;
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
            if(var1) { _fun0010_ip = 66; continue _fun0010 }
case 67:
            var1 = null;
            return var1;
case 66:
            var7 = new Array(0);
            var10 = var7.push;
            var13 = _closure1_slot20;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 16;
            var9 = var14[var1];
            var9 = var17.bind(var4)(var9);
            var12 = var9.ActionSheetRow;
            var9 = {};
            var11 = 17;
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
                var1 = 60;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.copy;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var5.bind(var6)(var2);
                var2 = 61;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentIdCopied;
                var2 = var2.bind(var3)();
                return var1;
            };
            var9['onPress'] = var14;
            var9 = var13.bind(var4)(var12, var9);
            var9 = var10.bind(var7)(var9);
            if(!var6) { _fun0010_ip = 68; continue _fun0010 }
case 69:
            var9 = var3.icon;
            var6 = null;
            if(!(var6 != var9)) { _fun0010_ip = 44; continue _fun0010 }
case 70:
            var10 = var7.push;
            var13 = _closure1_slot20;
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
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var6 = _closure1_slot7;
                    var5 = _closure2_slot0;
                    var4 = _closure1_slot17;
                    var1 = undefined;
                    var3 = true;
                    var6 = var6.bind(var1)(var5, var4, var3);
                    var3 = null;
                    if(!(var3 != var6)) { _fun0011_ip = 71; continue _fun0011 }
case 72:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 60;
                    var2 = var4[var2];
                    var5 = var3.bind(var1)(var2);
                    var2 = var5.copy;
                    var2 = var2.bind(var5)(var6);
                    var2 = 61;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.presentLinkCopied;
                    var2 = var2.bind(var3)();
case 71:
                    return var1;
                }
            };
            var9['onPress'] = var14;
            var9 = var13.bind(var4)(var12, var9);
            var9 = var10.bind(var7)(var9);
case 44:
            var3 = var3.banner;
            if(!(var6 != var3)) { _fun0010_ip = 68; continue _fun0010 }
case 73:
            var6 = var7.push;
            var10 = _closure1_slot20;
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
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 62;
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
                    if(!(var3 != var6)) { _fun0012_ip = 74; continue _fun0012 }
case 75:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 60;
                    var2 = var4[var2];
                    var5 = var3.bind(var1)(var2);
                    var2 = var5.copy;
                    var2 = var2.bind(var5)(var6);
                    var2 = 61;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.presentLinkCopied;
                    var2 = var2.bind(var3)();
case 74:
                    return var1;
                }
            };
            var3['onPress'] = var12;
            var3 = var10.bind(var4)(var9, var3);
            var3 = var6.bind(var7)(var3);
case 68:
            var3 = _closure1_slot20;
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
                var5 = _closure1_slot20;
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
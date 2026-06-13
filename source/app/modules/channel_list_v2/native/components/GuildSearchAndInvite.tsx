// app/modules/channel_list_v2/native/components/GuildSearchAndInvite.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function handleInviteDisabledPress() {
        var4 = _closure1_slot3;
        var3 = var4.lazy;
        var1 = function() {
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 12;
            var2 = var1[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = 11;
            var2 = var1[var2];
            var1 = var1.paths;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6 = var3.bind(var4)(var1);
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 13;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.openAlert;
        var3 = _closure1_slot12;
        var2 = {};
        var3 = var3.bind(var1)(var6, var2);
        var2 = 'invites-disabled';
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function GuildSearchAndInvite(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var11 = var1.guildId;
            var _closure2_slot0 = var11;
            var9 = var1.canInvite;
            var _closure2_slot1 = var9;
            var15 = var1.invitesDisabled;
            var _closure2_slot2 = var15;
            var16 = var1.onInvitePress;
            var _closure2_slot3 = var16;
            var10 = var1.onEventsPress;
            var _closure2_slot4 = var10;
            var7 = var1.hasUnreadEvents;
            var _closure2_slot5 = var7;
            var17 = var1.useEventsButton;
            var _closure2_slot6 = var17;
            var1 = var1.useButtonComponent;
            var3 = _closure1_slot14;
            var4 = undefined;
            var13 = var3.bind(var4)(var1);
            var _closure2_slot7 = var13;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 14;
            var3 = var6[var3];
            var8 = var5.bind(var4)(var3);
            var3 = var8.useNavigation;
            var3 = var3.bind(var8)();
            var _closure2_slot8 = var3;
            var3 = 15;
            var3 = var6[var3];
            var8 = var5.bind(var4)(var3);
            var3 = var8.useGuildSearchContext;
            var3 = var3.bind(var8)(var11);
            var _closure2_slot9 = var3;
            var8 = _closure1_slot1;
            var3 = 16;
            var3 = var6[var3];
            var8 = var8.bind(var4)(var3);
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot7;
                    var4 = var5.getGuild;
                    var1 = _closure2_slot0;
                    var6 = var4.bind(var5)(var1);
                    var4 = null;
                    var7 = var4 == var6;
                    var1 = undefined;
                    var5 = undefined;
                    if(var7) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var8 = var6.features;
                    var7 = var8.has;
                    var6 = _closure1_slot10;
                    var6 = var6.HUB;
                    var5 = var7.bind(var8)(var6);
case 2:
                    if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var9 = new Array(0);
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var7 = _closure1_slot6;
                    var6 = var7.getDirectoryChannelIds;
                    var5 = _closure2_slot0;
                    var9 = var6.bind(var7)(var5);
case 6:
                    var7 = var9.length;
                    var6 = 0;
                    var5 = null;
                    if(!(var6 !== var7)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var8 = _closure1_slot5;
                    var7 = var8.getChannel;
                    var6 = var9[var6];
                    var5 = var7.bind(var8)(var6);
case 7:
                    if(!(var4 == var5)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 18;
                    var4 = var7[var4];
                    var7 = var6.bind(var1)(var4);
                    var6 = var7.navigateToSearchWithPrefetch;
                    var4 = _closure2_slot8;
                    var3 = _closure2_slot9;
                    var3 = var6.bind(var7)(var4, var3);
                    _fun0002_ip = 11; continue _fun0002;
case 9:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.open;
                    var2 = {};
                    var2['channel'] = var5;
                    var2 = var3.bind(var4)(var2);
case 11:
                    return var1;
                }
            };
            var11 = var8.bind(var4)(var3);
            var3 = 19;
            var3 = var6[var3];
            var6 = var5.bind(var4)(var3);
            var5 = var6.useIOSPressEffects;
            var3 = 4;
            var3 = var5.bind(var6)(var3);
            var19 = var3.onPressIn;
            var18 = var3.onPressOut;
            var14 = var3.pressableStyles;
            var8 = _closure1_slot3;
            var6 = var8.useMemo;
            var5 = new Array(3);
            var5[0] = var9;
            var5[1] = var15;
            var5[2] = var16;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var5 = _closure1_slot12;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 20;
                    var2 = var11[var2];
                    var4 = undefined;
                    var2 = var10.bind(var4)(var2);
                    var3 = var2.IconButton;
                    var2 = {'variant': 'secondary', 'size': 'sm'};
                    var9 = _closure1_slot1;
                    var8 = 21;
                    var8 = var11[var8];
                    var8 = var9.bind(var4)(var8);
                    var2['icon'] = var8;
                    var8 = _closure2_slot3;
                    var2['onPress'] = var8;
                    var7 = _closure1_slot15;
                    var2['onPressDisabled'] = var7;
                    var7 = 22;
                    var8 = var11[var7];
                    var8 = var10.bind(var4)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var4)(var7);
                    var7 = var7.t;
                    var7 = var7.VINpSK;
                    var7 = var8.bind(var9)(var7);
                    var2['accessibilityLabel'] = var7;
                    var6 = _closure2_slot2;
                    var2['disabled'] = var6;
                    var6 = 2;
                    var2['maxFontSizeMultiplier'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 12:
                    return var1;
                }
            };
            var8 = var6.bind(var8)(var3, var5);
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var3 = new Array(4);
            var3[0] = var17;
            var3[1] = var10;
            var3[2] = var7;
            var7 = var13.badge;
            var3[3] = var7;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var1 = null;
                    if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 13:
                    var5 = _closure1_slot13;
                    var4 = _closure1_slot4;
                    var3 = {};
                    var9 = _closure1_slot12;
                    var7 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var2 = 20;
                    var6 = var13[var2];
                    var2 = undefined;
                    var6 = var7.bind(var2)(var6);
                    var7 = var6.IconButton;
                    var6 = {'variant': 'secondary', 'size': 'sm'};
                    var12 = _closure1_slot1;
                    var10 = 23;
                    var10 = var13[var10];
                    var10 = var12.bind(var2)(var10);
                    var6['icon'] = var10;
                    var10 = _closure2_slot5;
                    var15 = '';
                    var12 = var15;
                    if(!var10) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var10 = 22;
                    var13 = var17[var10];
                    var13 = var16.bind(var2)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var10 = var17[var10];
                    var10 = var16.bind(var2)(var10);
                    var10 = var10.t;
                    var10 = var10.hcaVYl;
                    var14 = var13.bind(var14)(var10);
                    var10 = global;
                    var10 = var10.HermesInternal;
                    var13 = var10.concat;
                    var10 = ', ';
                    var12 = var13.bind(var15)(var14, var10);
case 15:
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var10 = 22;
                    var13 = var16[var10];
                    var13 = var15.bind(var2)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var10 = var16[var10];
                    var10 = var15.bind(var2)(var10);
                    var10 = var10.t;
                    var10 = var10.tlopTM;
                    var10 = var13.bind(var14)(var10);
                    var10 = var12 + var10;
                    var6['accessibilityLabel'] = var10;
                    var10 = _closure2_slot4;
                    var6['onPress'] = var10;
                    var10 = 2;
                    var6['maxFontSizeMultiplier'] = var10;
                    var7 = var9.bind(var2)(var7, var6);
                    var6 = new Array(2);
                    var6[0] = var7;
                    var7 = _closure2_slot5;
                    if(!var7) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var10 = _closure1_slot12;
                    var9 = _closure1_slot4;
                    var8 = {'style': null, 'importantForAccessibility': 'no-hide-descendants', 'accessibilityElementsHidden': true};
                    var11 = _closure2_slot7;
                    var11 = var11.badge;
                    var8['style'] = var11;
                    var7 = var10.bind(var2)(var9, var8);
case 17:
                    var6[1] = var7;
                    var3['children'] = var6;
                    var1 = var5.bind(var2)(var4, var3);
case 14:
                    return var1;
                }
            };
            var7 = var5.bind(var6)(var2, var3);
            var3 = _closure1_slot13;
            var2 = _closure1_slot4;
            var5 = {};
            var6 = var13.container;
            var5['style'] = var6;
            var10 = _closure1_slot12;
            if(var1) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var6 = _closure1_slot1;
            var20 = _closure1_slot2;
            var1 = 26;
            var1 = var20[var1];
            var1 = var6.bind(var4)(var1);
            var6 = var1.View;
            var1 = {};
            var17 = var13.search;
            var13 = new Array(2);
            var13[0] = var17;
            var13[1] = var14;
            var1['style'] = var13;
            var17 = _closure1_slot12;
            var14 = _closure1_slot0;
            var13 = 27;
            var13 = var20[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.SearchButtonContent;
            var13 = {};
            var13['onPress'] = var11;
            var13['onPressIn'] = var19;
            var13['onPressOut'] = var18;
            var13 = var17.bind(var4)(var14, var13);
            var1['children'] = var13;
            var6 = var10.bind(var4)(var6, var1);
            var1 = new Array(2);
            var1[0] = var6;
            var6 = null;
            if(!var9) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var14 = _closure1_slot12;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var9 = 20;
            var9 = var20[var9];
            var9 = var19.bind(var4)(var9);
            var13 = var9.IconButton;
            var9 = {};
            var17 = 'tertiary';
            var9['variant'] = var17;
            var18 = _closure1_slot1;
            var17 = 21;
            var17 = var20[var17];
            var17 = var18.bind(var4)(var17);
            var9['icon'] = var17;
            var9['onPress'] = var16;
            var16 = _closure1_slot15;
            var9['onPressDisabled'] = var16;
            var16 = 22;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.VINpSK;
            var16 = var17.bind(var18)(var16);
            var9['accessibilityLabel'] = var16;
            var9['disabled'] = var15;
            var6 = var14.bind(var4)(var13, var9);
case 21:
            var1[1] = var6;
            var5['children'] = var1;
            var1 = var5;
            _fun0001_ip = 23; continue _fun0001;
case 19:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 24;
            var6 = var15[var6];
            var6 = var14.bind(var4)(var6);
            var9 = var6.Button;
            var6 = {'variant': 'secondary', 'grow': true, 'shrink': true, 'size': 'sm'};
            var13 = _closure1_slot1;
            var12 = 25;
            var12 = var15[var12];
            var12 = var13.bind(var4)(var12);
            var6['icon'] = var12;
            var6['onPress'] = var11;
            var11 = 22;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11["5h0QOP"];
            var11 = var12.bind(var13)(var11);
            var6['text'] = var11;
            var11 = 2;
            var6['maxFontSizeMultiplier'] = var11;
            var9 = var10.bind(var4)(var9, var6);
            var6 = new Array(3);
            var6[0] = var9;
            var6[1] = var8;
            var6[2] = var7;
            var5['children'] = var6;
            var1 = var5;
case 23:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var4 = var4.SEARCH_BAR_MARGIN_BOTTOM;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.GuildFeatures;
    var _closure1_slot10 = var8;
    var4 = var4.InstantInviteSources;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = {};
            var2 = {};
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 10;
            var4 = var4[var6];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var4 = var4.space;
            var4 = var4.PX_16;
            var2['paddingHorizontal'] = var4;
            var4 = _closure1_slot9;
            var2['marginBottom'] = var4;
            var4 = 'row';
            var2['flexDirection'] = var4;
            var7 = arg1;
            var4 = var6;
            if(!var7) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var7 = var8.bind(var5)(var7);
            var7 = var7.space;
            var4 = var7.PX_12;
case 24:
            var2['gap'] = var4;
            var1['container'] = var2;
            var2 = {};
            var4 = 1;
            var2['flex'] = var4;
            var1['search'] = var2;
            var2 = {'position': 'absolute', 'right': 0, 'top': 0, 'width': 8, 'height': 8};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.radii;
            var7 = var7.round;
            var2['borderRadius'] = var7;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_BRAND;
            var2['backgroundColor'] = var3;
            var1['badge'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = var7.memo;
    var2 = function ConnectedGuildSearchAndInviteInner(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var14 = var1.guild;
            var _closure2_slot0 = var14;
            var5 = var1.useButtonComponent;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0006_ip = 26; continue _fun0006 }
case 27:
            var5 = false;
case 26:
            var6 = var1.useEventsButton;
            if(!(var6 === var4)) { _fun0006_ip = 28; continue _fun0006 }
case 3:
            var6 = false;
case 28:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 28;
            var3 = var8[var3];
            var12 = var7.bind(var4)(var3);
            var11 = var12.useStateFromStores;
            var3 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var3;
            var9 = new Array(1);
            var9[0] = var14;
            var3 = function() {
                var5 = _closure1_slot6;
                var3 = var5.getChannels;
                var4 = _closure2_slot0;
                var2 = var4.id;
                var3 = var3.bind(var5)(var2);
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 29;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var1 = var2.shouldRenderInvite;
                var1 = var1.bind(var2)(var3, var4);
                return var1;
            };
            var13 = var11.bind(var12)(var10, var3, var9);
            var3 = _closure1_slot1;
            var9 = 16;
            var9 = var8[var9];
            var9 = var3.bind(var4)(var9);
            var2 = function() {
                var4 = _closure1_slot8;
                var3 = var4.getChannelId;
                var7 = _closure2_slot0;
                var1 = var7.id;
                var10 = var3.bind(var4)(var1);
                var4 = _closure1_slot6;
                var3 = var4.getChannels;
                var1 = var7.id;
                var9 = var3.bind(var4)(var1);
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 30;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.handleOpenInviteActionsheet;
                var2 = _closure1_slot11;
                var8 = var2.GUILD_HEADER;
                var12 = var4;
                var11 = var7;
                var2 = var12[var3](var11, var10, var9, var8, var7);
                return var1;
            };
            var11 = var9.bind(var4)(var2);
            var2 = 31;
            var2 = var8[var2];
            var7 = var7.bind(var4)(var2);
            var2 = var7.useShouldShowInvitesDisabledNotif;
            var12 = var2.bind(var7)(var14);
            var2 = 32;
            var2 = var8[var2];
            var7 = var3.bind(var4)(var2);
            var2 = var14.id;
            var7 = var7.bind(var4)(var2);
            var2 = 33;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)(var14);
            var8 = var2.hasUnread;
            var10 = var2.handlePress;
            var9 = var2.handleLongPress;
            var3 = _closure1_slot12;
            var2 = _closure1_slot16;
            var1 = {};
            var14 = var14.id;
            var1['guildId'] = var14;
            var1['canInvite'] = var13;
            var1['invitesDisabled'] = var12;
            var1['onInvitePress'] = var11;
            var1['onEventsPress'] = var10;
            var1['onEventsLongPress'] = var9;
            var1['hasUnreadEvents'] = var8;
            if(!var6) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var6 = var7;
case 29:
            var1['useEventsButton'] = var6;
            var1['useButtonComponent'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/components/GuildSearchAndInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
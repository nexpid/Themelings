// app/modules/channel_list_v2/native/components/GuildSearchAndInvite.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function handleInviteDisabledPress() {
        var4 = _closure1_slot3;
        var3 = var4.lazy;
        var1 = function() {
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 9;
            var2 = var1[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = 8;
            var2 = var1[var2];
            var1 = var1.paths;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6 = var3.bind(var4)(var1);
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 10;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.openAlert;
        var3 = _closure1_slot8;
        var2 = {};
        var3 = var3.bind(var1)(var6, var2);
        var2 = 'invites-disabled';
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function GuildSearchAndInvite(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.guildId;
            var10 = var1.canInvite;
            var _closure2_slot0 = var10;
            var13 = var1.invitesDisabled;
            var _closure2_slot1 = var13;
            var15 = var1.onInvitePress;
            var _closure2_slot2 = var15;
            var11 = var1.onEventsPress;
            var _closure2_slot3 = var11;
            var7 = var1.hasUnreadEvents;
            var _closure2_slot4 = var7;
            var21 = var1.useEventsButton;
            var _closure2_slot5 = var21;
            var1 = var1.useButtonComponent;
            var3 = _closure1_slot10;
            var4 = undefined;
            var12 = var3.bind(var4)(var1);
            var _closure2_slot6 = var12;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 11;
            var3 = var6[var3];
            var5 = var8.bind(var4)(var3);
            var3 = var5.useNavigation;
            var3 = var3.bind(var5)();
            var _closure2_slot7 = var3;
            var3 = 12;
            var3 = var6[var3];
            var5 = var8.bind(var4)(var3);
            var3 = var5.useGuildSearchContext;
            var3 = var3.bind(var5)(var9);
            var _closure2_slot8 = var3;
            var5 = _closure1_slot1;
            var3 = 13;
            var3 = var6[var3];
            var9 = var5.bind(var4)(var3);
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.navigateToSearch;
                var4 = _closure2_slot7;
                var3 = _closure2_slot8;
                var2 = {};
                var7 = true;
                var2['prefetch'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var20 = var9.bind(var4)(var3);
            var _closure2_slot9 = var20;
            var3 = 15;
            var3 = var6[var3];
            var9 = var8.bind(var4)(var3);
            var8 = var9.useIOSPressEffects;
            var3 = 4;
            var3 = var8.bind(var9)(var3);
            var19 = var3.onPressIn;
            var18 = var3.onPressOut;
            var16 = var3.pressableStyles;
            var3 = 16;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var17 = var3.bind(var4)();
            var _closure2_slot10 = var17;
            var8 = _closure1_slot3;
            var6 = var8.useMemo;
            var5 = new Array(2);
            var5[0] = var20;
            var5[1] = var17;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 17;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.Button;
                    var1 = {'variant': null, 'grow': true, 'shrink': true, 'size': 'sm'};
                    var8 = _closure2_slot10;
                    var7 = 'secondary';
                    if(!var8) { _fun0002_ip = 69; continue _fun0002 }
 63:
                    var7 = 'tertiary';
 69:
                    var1['variant'] = var7;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 18;
                    var7 = var9[var7];
                    var7 = var8.bind(var3)(var7);
                    var1['icon'] = var7;
                    var6 = _closure2_slot9;
                    var1['onPress'] = var6;
                    var8 = _closure1_slot0;
                    var5 = 19;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.5h0QOD;
                    var5 = var6.bind(var7)(var5);
                    var1['text'] = var5;
                    var5 = 2;
                    var1['maxFontSizeMultiplier'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var9 = var6.bind(var8)(var3, var5);
            var8 = _closure1_slot3;
            var6 = var8.useMemo;
            var5 = new Array(4);
            var5[0] = var10;
            var5[1] = var13;
            var5[2] = var17;
            var5[3] = var15;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!var2) { _fun0003_ip = 199; continue _fun0003 }
 15:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 20;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.IconButton;
                    var2 = {};
                    var9 = _closure2_slot10;
                    var8 = 'secondary';
                    if(!var9) { _fun0003_ip = 69; continue _fun0003 }
 63:
                    var8 = 'tertiary';
 69:
                    var2['variant'] = var8;
                    var8 = 'sm';
                    var2['size'] = var8;
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = 21;
                    var8 = var11[var8];
                    var8 = var9.bind(var4)(var8);
                    var2['icon'] = var8;
                    var8 = _closure2_slot2;
                    var2['onPress'] = var8;
                    var8 = _closure1_slot11;
                    var2['onPressDisabled'] = var8;
                    var10 = _closure1_slot0;
                    var7 = 19;
                    var8 = var11[var7];
                    var8 = var10.bind(var4)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var4)(var7);
                    var7 = var7.t;
                    var7 = var7.VINpSE;
                    var7 = var8.bind(var9)(var7);
                    var2['accessibilityLabel'] = var7;
                    var6 = _closure2_slot1;
                    var2['disabled'] = var6;
                    var6 = 2;
                    var2['maxFontSizeMultiplier'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 199:
                    return var1;
                }
            };
            var8 = var6.bind(var8)(var3, var5);
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var3 = new Array(5);
            var3[0] = var21;
            var3[1] = var17;
            var3[2] = var11;
            var3[3] = var7;
            var7 = var12.badge;
            var3[4] = var7;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!var2) { _fun0004_ip = 251; continue _fun0004 }
 15:
                    var5 = _closure1_slot9;
                    var4 = _closure1_slot4;
                    var3 = {};
                    var9 = _closure1_slot8;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 20;
                    var6 = var6[var2];
                    var2 = undefined;
                    var6 = var7.bind(var2)(var6);
                    var7 = var6.IconButton;
                    var6 = {};
                    var12 = _closure2_slot10;
                    var10 = 'secondary';
                    if(!var12) { _fun0004_ip = 79; continue _fun0004 }
 73:
                    var10 = 'tertiary';
 79:
                    var6['variant'] = var10;
                    var10 = 'sm';
                    var6['size'] = var10;
                    var12 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var10 = 22;
                    var10 = var15[var10];
                    var10 = var12.bind(var2)(var10);
                    var6['icon'] = var10;
                    var14 = _closure1_slot0;
                    var10 = 19;
                    var12 = var15[var10];
                    var12 = var14.bind(var2)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var10 = var15[var10];
                    var10 = var14.bind(var2)(var10);
                    var10 = var10.t;
                    var10 = var10.tlopTE;
                    var10 = var12.bind(var13)(var10);
                    var6['accessibilityLabel'] = var10;
                    var10 = _closure2_slot3;
                    var6['onPress'] = var10;
                    var10 = 2;
                    var6['maxFontSizeMultiplier'] = var10;
                    var7 = var9.bind(var2)(var7, var6);
                    var6 = new Array(2);
                    var6[0] = var7;
                    var7 = _closure2_slot4;
                    if(!var7) { _fun0004_ip = 237; continue _fun0004 }
 207:
                    var10 = _closure1_slot8;
                    var9 = _closure1_slot4;
                    var8 = {};
                    var11 = _closure2_slot6;
                    var11 = var11.badge;
                    var8['style'] = var11;
                    var7 = var10.bind(var2)(var9, var8);
 237:
                    var6[1] = var7;
                    var3['children'] = var6;
                    var1 = var5.bind(var2)(var4, var3);
 251:
                    return var1;
                }
            };
            var7 = var5.bind(var6)(var2, var3);
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var5 = {};
            var6 = var12.container;
            var5['style'] = var6;
            if(var1) { _fun0001_ip = 680; continue _fun0001 }
 404:
            var11 = _closure1_slot8;
            var6 = _closure1_slot1;
            var21 = _closure1_slot2;
            var1 = 23;
            var1 = var21[var1];
            var1 = var6.bind(var4)(var1);
            var6 = var1.View;
            var1 = {};
            var17 = var12.search;
            var12 = new Array(2);
            var12[0] = var17;
            var12[1] = var16;
            var1['style'] = var12;
            var17 = _closure1_slot8;
            var16 = _closure1_slot0;
            var12 = 24;
            var12 = var21[var12];
            var12 = var16.bind(var4)(var12);
            var16 = var12.SearchButtonContent;
            var12 = {};
            var12['onPress'] = var20;
            var12['onPressIn'] = var19;
            var12['onPressOut'] = var18;
            var12 = var17.bind(var4)(var16, var12);
            var1['children'] = var12;
            var6 = var11.bind(var4)(var6, var1);
            var1 = new Array(2);
            var1[0] = var6;
            var6 = null;
            if(!var10) { _fun0001_ip = 667; continue _fun0001 }
 531:
            var12 = _closure1_slot8;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 20;
            var10 = var18[var10];
            var10 = var17.bind(var4)(var10);
            var11 = var10.IconButton;
            var10 = {};
            var16 = 'tertiary';
            var10['variant'] = var16;
            var19 = _closure1_slot1;
            var16 = 21;
            var16 = var18[var16];
            var16 = var19.bind(var4)(var16);
            var10['icon'] = var16;
            var10['onPress'] = var15;
            var14 = _closure1_slot11;
            var10['onPressDisabled'] = var14;
            var14 = 19;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.VINpSE;
            var14 = var15.bind(var16)(var14);
            var10['accessibilityLabel'] = var14;
            var10['disabled'] = var13;
            var6 = var12.bind(var4)(var11, var10);
 667:
            var1[1] = var6;
            var5['children'] = var1;
            var1 = var5;
            _fun0001_ip = 703; continue _fun0001;
 680:
            var6 = new Array(3);
            var6[0] = var9;
            var6[1] = var8;
            var6[2] = var7;
            var5['children'] = var6;
            var1 = var5;
 703:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.SEARCH_BAR_MARGIN_BOTTOM;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = {};
            var2 = {};
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 7;
            var4 = var4[var6];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_16;
            var2['paddingHorizontal'] = var4;
            var4 = _closure1_slot7;
            var2['marginBottom'] = var4;
            var4 = 'row';
            var2['flexDirection'] = var4;
            var4 = 10;
            var7 = arg1;
            if(!var7) { _fun0005_ip = 96; continue _fun0005 }
 68:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var7 = var8.bind(var5)(var7);
            var7 = var7.spacing;
            var4 = var7.PX_12;
 96:
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
            var3 = var3.BG_BRAND;
            var2['backgroundColor'] = var3;
            var1['badge'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function ConnectedGuildSearchAndInviteInner(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var14 = var1.guild;
            var _closure2_slot0 = var14;
            var5 = var1.useButtonComponent;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0006_ip = 28; continue _fun0006 }
 26:
            var5 = false;
 28:
            var6 = var1.useEventsButton;
            if(!(var6 === var4)) { _fun0006_ip = 40; continue _fun0006 }
 38:
            var6 = false;
 40:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 25;
            var3 = var8[var3];
            var12 = var7.bind(var4)(var3);
            var11 = var12.useStateFromStores;
            var3 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var3;
            var9 = new Array(1);
            var9[0] = var14;
            var3 = function() {
                var5 = _closure1_slot5;
                var3 = var5.getChannels;
                var4 = _closure2_slot0;
                var2 = var4.id;
                var3 = var3.bind(var5)(var2);
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var1 = var2.shouldRenderInvite;
                var1 = var1.bind(var2)(var3, var4);
                return var1;
            };
            var13 = var11.bind(var12)(var10, var3, var9);
            var3 = _closure1_slot1;
            var9 = 13;
            var9 = var8[var9];
            var9 = var3.bind(var4)(var9);
            var2 = function() {
                var4 = _closure1_slot6;
                var3 = var4.getChannelId;
                var7 = _closure2_slot0;
                var2 = var7.id;
                var10 = var3.bind(var4)(var2);
                var4 = _closure1_slot5;
                var3 = var4.getChannels;
                var2 = var7.id;
                var9 = var3.bind(var4)(var2);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.handleOpenInviteActionsheet;
                var8 = 'Guild Header';
                var12 = var4;
                var11 = var7;
                var2 = var12[var3](var11, var10, var9, var8, var7);
                return var1;
            };
            var11 = var9.bind(var4)(var2);
            var2 = 28;
            var2 = var8[var2];
            var7 = var7.bind(var4)(var2);
            var2 = var7.useShouldShowInvitesDisabledNotif;
            var12 = var2.bind(var7)(var14);
            var2 = 29;
            var2 = var8[var2];
            var7 = var3.bind(var4)(var2);
            var2 = var14.id;
            var7 = var7.bind(var4)(var2);
            var2 = 30;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)(var14);
            var8 = var2.hasUnread;
            var10 = var2.handlePress;
            var9 = var2.handleLongPress;
            var3 = _closure1_slot8;
            var2 = _closure1_slot12;
            var1 = {};
            var14 = var14.id;
            var1['guildId'] = var14;
            var1['canInvite'] = var13;
            var1['invitesDisabled'] = var12;
            var1['onInvitePress'] = var11;
            var1['onEventsPress'] = var10;
            var1['onEventsLongPress'] = var9;
            var1['hasUnreadEvents'] = var8;
            if(!var6) { _fun0006_ip = 267; continue _fun0006 }
 264:
            var6 = var7;
 267:
            var1['useEventsButton'] = var6;
            var1['useButtonComponent'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/components/GuildSearchAndInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
// app/modules/nuf/native/components/notification/GuildOpenNotificationNudge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
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
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PermissionPromptType;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EventActionLocation;
    var _closure1_slot11 = var7;
    var4 = var4.NotificationNudgeSurface;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.UserNotificationSettings;
    var _closure1_slot13 = var7;
    var4 = var4.ZERO_STRING_GUILD_ID;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 5184000000.0;
    var4['cooldownDurationMs'] = var7;
    var _closure1_slot16 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nuf/native/components/notification/GuildOpenNotificationNudge.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function GuildOpenNotificationNudge(arg1) {
        var2 = arg1;
        var3 = var2.guildId;
        var _closure2_slot0 = var3;
        var6 = var2.markAsDismissed;
        var5 = var2.onHide;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var2 = 10;
        var2 = var12[var2];
        var4 = undefined;
        var8 = var11.bind(var4)(var2);
        var3 = var8.useStateFromStores;
        var9 = _closure1_slot6;
        var2 = new Array(1);
        var2[0] = var9;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = var3.name;
case 2:
                var3 = var1 != var2;
                var1 = '';
                if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = var2;
case 4:
                return var1;
            }
        };
        var15 = var3.bind(var8)(var2, var1);
        var3 = _closure1_slot15;
        var2 = _closure1_slot1;
        var1 = 11;
        var1 = var12[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var8 = 12;
        var9 = var12[var8];
        var9 = var11.bind(var4)(var9);
        var14 = var9.intl;
        var13 = var14.formatToPlainString;
        var9 = var12[var8];
        var9 = var11.bind(var4)(var9);
        var9 = var9.t;
        var10 = var9.tyWHMY;
        var9 = {};
        var9['guildName'] = var15;
        var9 = var13.bind(var14)(var10, var9);
        var1['title'] = var9;
        var9 = var12[var8];
        var9 = var11.bind(var4)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var4)(var8);
        var8 = var8.t;
        var8 = var8.ehJH+P;
        var8 = var9.bind(var10)(var8);
        var1['body'] = var8;
        var8 = _closure1_slot11;
        var8 = var8.GUILD_OPEN;
        var1['actionLocation'] = var8;
        var7 = _closure1_slot12;
        var7 = var7.GUILD_OPEN_BOTTOM_SHEET;
        var1['surface'] = var7;
        var1['markAsDismissed'] = var6;
        var1['onHide'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var4 = 'guild-open-notification-nudge-key';
    var3['GUILD_OPEN_NOTIFICATION_NUDGE_KEY'] = var4;
    var2 = function useGuildOpenNudge() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 10;
            var5 = var10[var4];
            var1 = undefined;
            var9 = var7.bind(var1)(var5);
            var8 = var9.useStateFromStores;
            var5 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getGuildId;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 != var2;
                    if(!var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var1 = var2;
case 6:
                    return var1;
                }
            };
            var8 = var8.bind(var9)(var6, var5);
            var _closure2_slot0 = var8;
            var6 = _closure1_slot1;
            var5 = 13;
            var5 = var10[var5];
            var9 = var6.bind(var1)(var5);
            var6 = var9.useConfig;
            var5 = {};
            var11 = 'useGuildOpenNudge';
            var5['location'] = var11;
            var5 = var6.bind(var9)(var5);
            var15 = var5.inHoldout;
            var5 = 14;
            var5 = var10[var5];
            var6 = var7.bind(var1)(var5);
            var5 = var6.useCanSeePushNotificationNudge;
            var14 = var5.bind(var6)();
            var5 = var10[var4];
            var12 = var7.bind(var1)(var5);
            var11 = var12.useStateFromStores;
            var5 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var5;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var4 = _closure1_slot8;
                    var3 = var4.isMuted;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 8:
                    return var1;
                }
            };
            var11 = var11.bind(var12)(var9, var6);
            var6 = var10[var4];
            var12 = var7.bind(var1)(var6);
            var9 = var12.useStateFromStores;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                    var1 = _closure1_slot13;
                    var1 = var1.NO_MESSAGES;
                    _fun0005_ip = 12; continue _fun0005;
case 10:
                    var4 = _closure1_slot8;
                    var3 = var4.getMessageNotifications;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 12:
                    return var1;
                }
            };
            var12 = var9.bind(var12)(var6, var5);
            var5 = var10[var4];
            var13 = var7.bind(var1)(var5);
            var9 = var13.useStateFromStores;
            var5 = _closure1_slot6;
            var6 = new Array(2);
            var6[0] = var5;
            var5 = _closure1_slot5;
            var6[1] = var5;
            var5 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0006_ip = 13; continue _fun0006 }
case 9:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 15;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.isBlockedByOnboarding;
                    var6 = _closure1_slot6;
                    var3 = var6.getGuild;
                    var7 = _closure2_slot0;
                    var3 = var3.bind(var6)(var7);
                    var6 = _closure1_slot5;
                    var2 = var6.getSelfMember;
                    var2 = var2.bind(var6)(var7);
                    var1 = var4.bind(var5)(var3, var2);
case 13:
                    return var1;
                }
            };
            var16 = var9.bind(var13)(var6, var5);
            var _closure2_slot1 = var16;
            var19 = _closure1_slot4;
            var5 = var19.useRef;
            var5 = var5.bind(var19)(var8);
            var _closure2_slot2 = var5;
            var5 = var19.useState;
            var6 = var5.bind(var19)(var16);
            var5 = _closure1_slot3;
            var9 = 2;
            var17 = var5.bind(var1)(var6, var9);
            var6 = 0;
            var13 = var17[var6];
            var5 = 1;
            var17 = var17[var5];
            var _closure2_slot3 = var17;
            var18 = var19.useEffect;
            var17 = new Array(2);
            var17[0] = var8;
            var17[1] = var16;
            var16 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure2_slot2;
                    var3 = var4.current;
                    var2 = _closure2_slot0;
                    var4['current'] = var2;
                    if(!(var3 === var2)) { _fun0007_ip = 14; continue _fun0007 }
case 7:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0007_ip = 15; continue _fun0007 }
case 16:
                    var4 = _closure2_slot3;
                    var3 = undefined;
                    var2 = true;
                    var2 = var4.bind(var3)(var2);
                    _fun0007_ip = 15; continue _fun0007;
case 14:
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var18.bind(var19)(var16, var17);
            var4 = var10[var4];
            var16 = var7.bind(var1)(var4);
            var10 = var16.useStateFromStores;
            var4 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure1_slot9;
                    var2 = var3.getState;
                    var2 = var2.bind(var3)();
                    var2 = var2.promptLastSeen;
                    var1 = _closure1_slot10;
                    var1 = var1.GUILD_OPEN_BOTTOM_SHEET;
                    var5 = var2[var1];
                    var1 = null;
                    var1 = var1 == var5;
                    if(var1) { _fun0008_ip = 17; continue _fun0008 }
case 18:
                    var2 = global;
                    var4 = var2.Date;
                    var3 = var4.now;
                    var3 = var3.bind(var4)();
                    var2 = var2.Date;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {constructor: {value: var2}});
                    var7 = var4;
                    var6 = var5;
                    var2 = new var7[var2](var6, var5);
                    var4 = var2 instanceof Object ? var2 : var4;
                    var2 = var4.getTime;
                    var2 = var2.bind(var4)();
                    var3 = var3 - var2;
                    var2 = 604800000;
                    var1 = var3 >= var2;
case 17:
                    return var1;
                }
            };
            var10 = var10.bind(var16)(var7, var4);
            var4 = null;
            var7 = var4 != var8;
            if(!var7) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var16 = 16;
            var16 = var18[var16];
            var17 = var17.bind(var1)(var16);
            var16 = var17.isPseudoGuildId;
            var16 = var16.bind(var17)(var8);
            var7 = !var16;
case 19:
            if(!var7) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var7 = !var15;
case 21:
            if(!var7) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var7 = var14;
case 23:
            if(!var7) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var7 = !var13;
case 25:
            if(!var7) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var7 = !var11;
case 27:
            if(!var7) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var11 = _closure1_slot13;
            var11 = var11.NO_MESSAGES;
            var7 = var12 !== var11;
case 29:
            if(!var7) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var7 = var10;
case 31:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 17;
            var10 = var12[var10];
            var12 = var11.bind(var1)(var10);
            var11 = var12.useSelectedTimeRecurringGuildDismissibleContent;
            var10 = null;
            if(!var7) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 18;
            var7 = var14[var7];
            var7 = var13.bind(var1)(var7);
            var7 = var7.DismissibleContent;
            var10 = var7.NOTIFICATION_NUDGE_GUILD_OPEN_PER_GUILD;
case 33:
            var7 = var8;
            if(!(var4 == var7)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var7 = _closure1_slot14;
case 35:
            var4 = _closure1_slot16;
            var7 = var11.bind(var12)(var10, var7, var4);
            var4 = _closure1_slot3;
            var4 = var4.bind(var1)(var7, var9);
            var6 = var4[var6];
            var _closure2_slot4 = var6;
            var7 = var4[var5];
            var _closure2_slot5 = var7;
            var5 = _closure1_slot4;
            var4 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0009_ip = 37; continue _fun0009 }
case 9:
                    var3 = _closure2_slot4;
                    var2 = var4 != var3;
case 37:
                    if(!var2) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = 19;
                    var4 = var2[var4];
                    var7 = undefined;
                    var8 = var6.bind(var7)(var4);
                    var5 = var8.setPushPermissionReactivationSeen;
                    var4 = _closure1_slot10;
                    var4 = var4.GUILD_OPEN_BOTTOM_SHEET;
                    var4 = var5.bind(var8)(var4);
                    var4 = _closure1_slot1;
                    var3 = 20;
                    var3 = var2[var3];
                    var5 = var4.bind(var7)(var3);
                    var4 = var5.openLazy;
                    var3 = 22;
                    var3 = var2[var3];
                    var6 = var6.bind(var7)(var3);
                    var3 = 21;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var6.bind(var7)(var3, var2);
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2['guildId'] = var6;
                    var1 = _closure2_slot5;
                    var2['markAsDismissed'] = var1;
                    var1 = 'guild-open-notification-nudge-key';
                    var1 = var4.bind(var5)(var3, var1, var2);
case 38:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useGuildOpenNudge'] = var2;
    return var1;
})();
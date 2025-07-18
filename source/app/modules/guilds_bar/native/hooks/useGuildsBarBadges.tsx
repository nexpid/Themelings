// app/modules/guilds_bar/native/hooks/useGuildsBarBadges.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = ['guildActivityIndicatorSource'];
    var _closure1_slot3 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.StyleSheet;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot12 = var7;
    var4 = var4.Permissions;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot14 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {'position': 'absolute', 'top': 1, 'right': 9, 'backgroundColor': 'transparent', 'borderColor': 'transparent'};
    var4['topRightBadge'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/hooks/useGuildsBarBadges.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildsBarBadges(arg1, arg2, arg3) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var7 = _closure1_slot0;
        var10 = _closure1_slot2;
        var3 = 11;
        var1 = var10[var3];
        var6 = undefined;
        var12 = var7.bind(var6)(var1);
        var11 = var12.useStateFromStores;
        var1 = _closure1_slot9;
        var9 = new Array(1);
        var9[0] = var1;
        var8 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot9;
                var2 = var4.getGuild;
                var1 = _closure2_slot0;
                var4 = var2.bind(var4)(var1);
                var1 = null;
                var5 = var1 == var4;
                var2 = undefined;
                if(var5) { _fun0001_ip = 61; continue _fun0001 }
 35:
                var5 = var4.features;
                var4 = var5.has;
                var3 = _closure1_slot12;
                var3 = var3.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                var2 = var4.bind(var5)(var3);
 61:
                var1 = var1 != var2;
                if(!var1) { _fun0001_ip = 71; continue _fun0001 }
 68:
                var1 = var2;
 71:
                return var1;
            }
        };
        var8 = var11.bind(var12)(var9, var8);
        var _closure2_slot1 = var8;
        var9 = var10[var3];
        var13 = var7.bind(var6)(var9);
        var12 = var13.useStateFromStores;
        var9 = _closure1_slot7;
        var11 = new Array(3);
        var11[0] = var9;
        var9 = _closure1_slot11;
        var11[1] = var9;
        var9 = _closure1_slot8;
        var11[2] = var9;
        var9 = new Array(2);
        var9[0] = var5;
        var9[1] = var8;
        var8 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = _closure2_slot1;
                if(!var1) { _fun0002_ip = 146; continue _fun0002 }
 13:
                var5 = _closure1_slot7;
                var4 = var5.getRequest;
                var1 = _closure2_slot0;
                var1 = var4.bind(var5)(var1);
                var5 = _closure1_slot11;
                var4 = var5.getCurrentUser;
                var5 = var4.bind(var5)();
                var4 = null;
                if(!(var4 != var5)) { _fun0002_ip = 146; continue _fun0002 }
 54:
                if(!(var4 != var1)) { _fun0002_ip = 146; continue _fun0002 }
 58:
                var6 = var1.userId;
                var5 = var5.id;
                if(!(var6 === var5)) { _fun0002_ip = 146; continue _fun0002 }
 72:
                var7 = _closure1_slot8;
                var6 = var7.getMember;
                var5 = _closure2_slot0;
                var3 = var1.userId;
                var3 = var6.bind(var7)(var5, var3);
                if(!(var4 != var3)) { _fun0002_ip = 150; continue _fun0002 }
 101:
                var3 = var3.isPending;
                if(var3) { _fun0002_ip = 150; continue _fun0002 }
 110:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 12;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isActionedAndNotAcked;
                var2 = var2.bind(var3)(var1);
                if(var2) { _fun0002_ip = 150; continue _fun0002 }
 146:
                var2 = undefined;
                return var2;
 150:
                var1 = var1.applicationStatus;
                return var1;
            }
        };
        var9 = var12.bind(var13)(var11, var8, var9);
        var3 = var10[var3];
        var11 = var7.bind(var6)(var3);
        var8 = var11.useStateFromStores;
        var3 = _closure1_slot10;
        var7 = new Array(3);
        var7[0] = var3;
        var7[1] = var1;
        var1 = _closure1_slot6;
        var7[2] = var1;
        var3 = new Array(1);
        var3[0] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = _closure1_slot9;
                var3 = var4.getGuild;
                var2 = _closure2_slot0;
                var6 = var3.bind(var4)(var2);
                var3 = null;
                if(!(var3 != var6)) { _fun0003_ip = 59; continue _fun0003 }
 30:
                var7 = _closure1_slot10;
                var4 = var7.can;
                var2 = _closure1_slot13;
                var2 = var2.MANAGE_GUILD;
                var2 = var4.bind(var7)(var2, var6);
                if(var2) { _fun0003_ip = 63; continue _fun0003 }
 59:
                var2 = false;
                return var2;
 63:
                var4 = _closure1_slot6;
                var2 = var4.getGuildIncident;
                var1 = _closure2_slot0;
                var4 = var2.bind(var4)(var1);
                var7 = var3 == var6;
                var1 = undefined;
                if(var7) { _fun0003_ip = 137; continue _fun0003 }
 91:
                var7 = var6.features;
                var7 = var7.has;
                var7 = var3 == var7;
                var1 = undefined;
                if(var7) { _fun0003_ip = 137; continue _fun0003 }
 111:
                var7 = var6.features;
                var6 = var7.has;
                var5 = _closure1_slot12;
                var5 = var5.INVITES_DISABLED;
                var1 = var6.bind(var7)(var5);
 137:
                if(var1) { _fun0003_ip = 229; continue _fun0003 }
 140:
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0003_ip = 155; continue _fun0003 }
 149:
                var2 = var4.invitesDisabledUntil;
 155:
                var2 = var3 != var2;
                if(!var2) { _fun0003_ip = 226; continue _fun0003 }
 162:
                var3 = global;
                var6 = var3.Date;
                var9 = var4.invitesDisabledUntil;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var10 = var5;
                var4 = new var10[var6](var9, var8);
                var4 = var4 instanceof Object ? var4 : var5;
                var3 = var3.Date;
                var5 = var3.prototype;
                var5 = Object.create(var5, {constructor: {value: var3}});
                var10 = var5;
                var3 = new var10[var3](var9);
                var3 = var3 instanceof Object ? var3 : var5;
                var2 = var4 > var3;
 226:
                var1 = var2;
 229:
                return var1;
            }
        };
        var8 = var8.bind(var11)(var7, var1, var3);
        var3 = _closure1_slot1;
        var1 = 13;
        var1 = var10[var1];
        var1 = var3.bind(var6)(var1);
        var1 = var1.bind(var6)(var5);
        var _closure2_slot2 = var1;
        var5 = _closure1_slot5;
        var7 = var5.useMemo;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var11 = 14;
                var1 = var1[var11];
                var5 = undefined;
                var6 = var2.bind(var5)(var1);
                var4 = var6.getMediaIcon;
                var2 = _closure2_slot2;
                var6 = var4.bind(var6)(var2);
                var7 = {};
                var4 = null;
                var2 = var4 == var6;
                var8 = undefined;
                if(var2) { _fun0004_ip = 61; continue _fun0004 }
 56:
                var8 = var6.source;
 61:
                var9 = var4 != var8;
                var2 = null;
                if(!var9) { _fun0004_ip = 73; continue _fun0004 }
 70:
                var2 = var8;
 73:
                var7['guildActivityIndicatorSource'] = var2;
                var8 = var4 == var6;
                var2 = undefined;
                if(var8) { _fun0004_ip = 92; continue _fun0004 }
 87:
                var2 = var6.icon;
 92:
                var7['IconComponent'] = var2;
                var1 = _closure2_slot2;
                var1 = var1.isCurrentUserConnected;
                var7['isCurrentUserConnected'] = var1;
                var2 = var7.guildActivityIndicatorSource;
                var6 = _closure1_slot4;
                var1 = _closure1_slot3;
                var10 = var6.bind(var5)(var7, var1);
                var1 = {};
                var7 = var4 != var2;
                var6 = null;
                if(!var7) { _fun0004_ip = 206; continue _fun0004 }
 143:
                var9 = _closure1_slot14;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var11];
                var7 = var8.bind(var5)(var7);
                var8 = var7.GuildsBarActivityIndicatorBase;
                var7 = {};
                var11 = _closure1_slot15;
                var11 = var11.topRightBadge;
                var7['style'] = var11;
                var7['source'] = var2;
                var13 = var7;
                var12 = var10;
                var10 = copyDataProperties(var13, var12);
                var6 = var9.bind(var5)(var8, var7);
 206:
                var1['badgeTopRight'] = var6;
                var4 = var4 != var2;
                var2 = undefined;
                if(!var4) { _fun0004_ip = 257; continue _fun0004 }
 220:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 15;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = {};
                var6 = 'top-right';
                var3['position'] = var6;
                var2 = var4.bind(var5)(var3);
 257:
                var1['cutoutTopRight'] = var2;
                return var1;
            }
        };
        var1 = var7.bind(var5)(var1, var4);
        var4 = var1.badgeTopRight;
        var7 = var1.cutoutTopRight;
        var _closure2_slot3 = var7;
        var1 = 16;
        var1 = var10[var1];
        var3 = var3.bind(var6)(var1);
        var1 = {};
        var10 = arg2;
        var1['mentionCount'] = var10;
        var10 = arg3;
        var1['isMentionLowImportance'] = var10;
        var1['joinRequestState'] = var9;
        var1['shouldShowInvitesDisabled'] = var8;
        var1 = var3.bind(var6)(var1);
        var3 = var1.badge;
        var6 = var1.cutout;
        var _closure2_slot4 = var6;
        var1 = {};
        var1['badgeTopRight'] = var4;
        var1['badgeBottomRight'] = var3;
        var4 = var5.useMemo;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = new Array(0);
                var3 = _closure2_slot3;
                var4 = null;
                if(!(var4 != var3)) { _fun0005_ip = 31; continue _fun0005 }
 17:
                var5 = var1.push;
                var3 = _closure2_slot3;
                var3 = var5.bind(var1)(var3);
 31:
                var3 = _closure2_slot4;
                if(!(var4 != var3)) { _fun0005_ip = 53; continue _fun0005 }
 39:
                var3 = var1.push;
                var2 = _closure2_slot4;
                var2 = var3.bind(var1)(var2);
 53:
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['cutouts'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
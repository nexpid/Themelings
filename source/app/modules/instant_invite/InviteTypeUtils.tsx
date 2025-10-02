// app/modules/instant_invite/InviteTypeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var12;
    var8 = function isGroupDMInvite(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = var3.type;
            var1 = _closure1_slot5;
            var1 = var1.GROUP_DM;
            var1 = var2 === var1;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var3.channel;
            var2 = null;
            var2 = var2 != var5;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot3;
            var3 = var3.channel;
            var4 = var3.type;
            var3 = undefined;
            var2 = var5.bind(var3)(var4);
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot7 = var8;
    var7 = function isGuildScheduledEventInviteEmbed(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guild_scheduled_event;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot2;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 6:
            return var1;
        }
    };
    var _closure1_slot8 = var7;
    var6 = function isFriendInvite(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var2 = var3.type;
            var1 = _closure1_slot5;
            var1 = var1.FRIEND;
            var1 = var2 === var1;
            if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 3:
            var2 = var3.guild;
            var4 = null;
            var2 = var4 == var2;
            if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 5:
            var3 = var3.inviter;
            var2 = var4 != var3;
case 9:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot9 = var6;
    var5 = function isEmbeddedApplicationInvite(arg1) {
        var1 = arg1;
        var2 = var1.target_type;
        var1 = _closure1_slot4;
        var1 = var1.EMBEDDED_APPLICATION;
        var1 = var2 === var1;
        return var1;
    };
    var _closure1_slot10 = var5;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var12[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var4 = var4.isEventUpcoming;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var12[var4];
    var4 = var11.bind(var1)(var4);
    var4 = var4.isMultiUserDM;
    var _closure1_slot3 = var4;
    var4 = 2;
    var9 = var12[var4];
    var9 = var11.bind(var1)(var9);
    var10 = var9.InviteTargetTypes;
    var _closure1_slot4 = var10;
    var9 = var9.InviteTypes;
    var _closure1_slot5 = var9;
    var4 = var12[var4];
    var4 = var11.bind(var1)(var4);
    var9 = var4.InviteTypes;
    var4 = {};
    var10 = 'event';
    var4['EVENT'] = var10;
    var10 = 'application';
    var4['APPLICATION'] = var10;
    var10 = 'profile';
    var4['PROFILE'] = var10;
    var10 = 'default';
    var4['DEFAULT'] = var10;
    var _closure1_slot6 = var4;
    var10 = 5;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/instant_invite/InviteTypeUtils.tsx';
    var10 = var11.bind(var12)(var10);
    var3['InviteTypes'] = var9;
    var3['isGroupDMInvite'] = var8;
    var3['isGuildScheduledEventInviteEmbed'] = var7;
    var7 = function isRoleSubscriptionInvite(arg1) {
        var1 = arg1;
        var2 = var1.target_type;
        var1 = _closure1_slot4;
        var1 = var1.ROLE_SUBSCRIPTIONS_PURCHASE;
        var1 = var2 === var1;
        return var1;
    };
    var3['isRoleSubscriptionInvite'] = var7;
    var7 = function isStreamInvite(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var3 = var2.target_type;
            var1 = _closure1_slot4;
            var1 = var1.STREAM;
            var1 = var3 === var1;
            if(!var1) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var3 = var2.target_user;
            var2 = null;
            var1 = var2 != var3;
case 10:
            return var1;
        }
    };
    var3['isStreamInvite'] = var7;
    var3['isFriendInvite'] = var6;
    var3['isEmbeddedApplicationInvite'] = var5;
    var5 = function getInviteType(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = var2.type;
            var3 = 'number';
            var1 = typeof var1;
            if(!(var3 !== var1)) { _fun0005_ip = 12; continue _fun0005 }
case 13:
            var1 = _closure1_slot7;
            var4 = undefined;
            var1 = var1.bind(var4)(var2);
            if(var1) { _fun0005_ip = 14; continue _fun0005 }
case 15:
            var1 = _closure1_slot9;
            var1 = var1.bind(var4)(var2);
            var4 = _closure1_slot5;
            if(var1) { _fun0005_ip = 16; continue _fun0005 }
case 9:
            var1 = var4.GUILD;
            _fun0005_ip = 2; continue _fun0005;
case 16:
            var1 = var4.FRIEND;
case 2:
            _fun0005_ip = 17; continue _fun0005;
case 14:
            var3 = _closure1_slot5;
            var1 = var3.GROUP_DM;
case 17:
            _fun0005_ip = 18; continue _fun0005;
case 12:
            var1 = var2.type;
case 18:
            return var1;
        }
    };
    var3['getInviteType'] = var5;
    var3['GuildInviteExtendedType'] = var4;
    var2 = function getGuildInviteExtendedType(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot8;
            var4 = undefined;
            var1 = var1.bind(var4)(var5);
            if(var1) { _fun0006_ip = 19; continue _fun0006 }
case 20:
            var1 = _closure1_slot10;
            var1 = var1.bind(var4)(var5);
            if(var1) { _fun0006_ip = 21; continue _fun0006 }
case 6:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.guildInviteCanEmbedProfile;
            var1 = var1.bind(var3)(var5);
            if(!var1) { _fun0006_ip = 22; continue _fun0006 }
case 2:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 4;
            var1 = var5[var1];
            var4 = var3.bind(var4)(var1);
            var3 = var4.getGuildProfileInviteEmbedHoldoutEnabled;
            var1 = arg2;
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0006_ip = 22; continue _fun0006 }
case 23:
            var1 = _closure1_slot6;
            var1 = var1.PROFILE;
            _fun0006_ip = 24; continue _fun0006;
case 22:
            var3 = _closure1_slot6;
            var1 = var3.DEFAULT;
case 24:
            _fun0006_ip = 25; continue _fun0006;
case 21:
            var3 = _closure1_slot6;
            var1 = var3.APPLICATION;
case 25:
            _fun0006_ip = 26; continue _fun0006;
case 19:
            var2 = _closure1_slot6;
            var1 = var2.EVENT;
case 26:
            return var1;
        }
    };
    var3['getGuildInviteExtendedType'] = var2;
    return var1;
})();
// app/modules/forwarding/canForwardMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function canForwardMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var8 = arguments[1];
            var9 = arguments[2];
            var6 = arguments[3];
            var10 = arguments[4];
            var4 = undefined;
            if(!(var8 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = _closure1_slot5;
case 2:
            if(!(var9 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = _closure1_slot2;
case 4:
            if(!(var6 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot3;
case 6:
            if(!(var10 === var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = _closure1_slot4;
case 8:
            var3 = null;
            if(!(var3 != var5)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var5.state;
            var1 = _closure1_slot7;
            var1 = var1.SEND_FAILED;
            var1 = var2 !== var1;
            if(!var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = _closure1_slot8;
            var12 = var2.FORWARDABLE;
            var11 = var12.has;
            var2 = var5.type;
            var2 = var11.bind(var12)(var2);
            var2 = !var2;
            var1 = !var2;
case 12:
            if(!var1) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = var5.poll;
            var1 = var3 == var2;
case 14:
            if(!var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var5.sharedClientTheme;
            var1 = var3 == var2;
case 16:
            if(!var1) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = var5.activity;
            var1 = var3 == var2;
case 18:
            if(!var1) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var2 = var5.call;
            var1 = var3 == var2;
case 20:
            if(!var1) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var2 = var5.activityInstance;
            var1 = var3 == var2;
case 22:
            if(!var1) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var2 = 5;
            var2 = var12[var2];
            var13 = var11.bind(var4)(var2);
            var12 = var13.removeFlag;
            var11 = var5.flags;
            var2 = _closure1_slot10;
            var11 = var12.bind(var13)(var11, var2);
            var2 = 0;
            var1 = var2 === var11;
case 24:
            if(var1) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var1 = false;
            return var1;
case 26:
            var2 = var6.getChannel;
            var1 = var5.channel_id;
            var6 = var2.bind(var6)(var1);
            var2 = var8.can;
            var1 = _closure1_slot9;
            var1 = var1.READ_MESSAGE_HISTORY;
            var1 = var2.bind(var8)(var1, var6);
            if(!(var3 != var6)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            if(var1) { _fun0001_ip = 28; continue _fun0001 }
case 30:
            var1 = var6.isPrivate;
            var1 = var1.bind(var6)();
            if(var1) { _fun0001_ip = 28; continue _fun0001 }
case 31:
            var1 = false;
            return var1;
case 28:
            var1 = var3 == var6;
            var8 = undefined;
            if(var1) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var8 = var6.guild_id;
case 32:
            var1 = var3 == var8;
            if(var1) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var2 = var10.getGuild;
            var10 = var2.bind(var10)(var8);
            var11 = var3 == var10;
            var2 = undefined;
            if(var11) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var11 = var10.features;
            var10 = var11.has;
            var7 = _closure1_slot6;
            var7 = var7.FORWARDING_DISABLED;
            var2 = var10.bind(var11)(var7);
case 36:
            var1 = !var2;
case 34:
            if(!var1) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var2 = var3 == var8;
            if(var2) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var7 = var9.isChannelOrThreadParentGated;
            var5 = var5.channel_id;
            var5 = var7.bind(var9)(var8, var5);
            var2 = !var5;
case 40:
            if(!var2) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var5 = var3 == var6;
            var4 = undefined;
            if(var5) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var5 = var6.isModeratorReportChannel;
            var4 = var5.bind(var6)();
case 44:
            var3 = var3 != var4;
            if(!var3) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var3 = var4;
case 46:
            var2 = !var3;
case 42:
            var1 = var2;
case 38:
            return var1;
case 10:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var8 = var6.bind(var1)(var5);
    var5 = var8.GuildFeatures;
    var _closure1_slot6 = var5;
    var5 = var8.MessageFlags;
    var9 = var8.MessageStates;
    var _closure1_slot7 = var9;
    var9 = var8.MessageTypesSets;
    var _closure1_slot8 = var9;
    var8 = var8.Permissions;
    var _closure1_slot9 = var8;
    var9 = var5.CROSSPOSTED;
    var8 = var5.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD;
    var9 = var9 | var8;
    var8 = var5.GUILD_FEED_HIDDEN;
    var9 = var9 | var8;
    var8 = var5.HAS_SNAPSHOT;
    var9 = var9 | var8;
    var8 = var5.HAS_THREAD;
    var9 = var9 | var8;
    var8 = var5.IS_CROSSPOST;
    var9 = var9 | var8;
    var8 = var5.IS_VOICE_MESSAGE;
    var9 = var9 | var8;
    var8 = var5.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING;
    var9 = var9 | var8;
    var8 = var5.SUPPRESS_EMBEDS;
    var9 = var9 | var8;
    var8 = var5.SUPPRESS_NOTIFICATIONS;
    var9 = var9 | var8;
    var8 = var5.URGENT;
    var8 = var9 | var8;
    var5 = var5.IS_COMPONENTS_V2;
    var5 = var8 | var5;
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/forwarding/canForwardMessage.tsx';
    var5 = var6.bind(var7)(var5);
    var3['canForwardMessage'] = var4;
    var2 = function useCanForwardMessage(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot5;
        var2 = new Array(4);
        var2[0] = var6;
        var6 = _closure1_slot2;
        var2[1] = var6;
        var6 = _closure1_slot3;
        var2[2] = var6;
        var5 = _closure1_slot4;
        var2[3] = var5;
        var1 = function() {
            var7 = _closure1_slot11;
            var12 = _closure2_slot0;
            var11 = _closure1_slot5;
            var10 = _closure1_slot2;
            var9 = _closure1_slot3;
            var8 = _closure1_slot4;
            var13 = undefined;
            var1 = var13[var7](var12, var11, var10, var9, var8, var7);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCanForwardMessage'] = var2;
    return var1;
})();
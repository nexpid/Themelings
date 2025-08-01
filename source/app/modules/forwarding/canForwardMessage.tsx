// app/modules/forwarding/canForwardMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _canForwardMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var2 = var8.state;
            var1 = _closure1_slot7;
            var1 = var1.SEND_FAILED;
            var1 = var2 !== var1;
            if(!var1) { _fun0001_ip = 182; continue _fun0001 }
 31:
            var2 = _closure1_slot8;
            var4 = var2.FORWARDABLE;
            var3 = var4.has;
            var2 = var8.type;
            var2 = var3.bind(var4)(var2);
            var3 = !var2;
            var2 = !var3;
            if(var3) { _fun0001_ip = 179; continue _fun0001 }
 65:
            var3 = var8.poll;
            var9 = null;
            var3 = var9 == var3;
            if(!var3) { _fun0001_ip = 176; continue _fun0001 }
 80:
            var4 = var8.activity;
            var4 = var9 == var4;
            if(!var4) { _fun0001_ip = 173; continue _fun0001 }
 93:
            var5 = var8.call;
            var5 = var9 == var5;
            if(!var5) { _fun0001_ip = 170; continue _fun0001 }
 105:
            var6 = var8.activityInstance;
            var6 = var9 == var6;
            if(!var6) { _fun0001_ip = 167; continue _fun0001 }
 118:
            var11 = _closure1_slot0;
            var10 = _closure1_slot1;
            var9 = 5;
            var10 = var10[var9];
            var9 = undefined;
            var10 = var11.bind(var9)(var10);
            var9 = var10.removeFlag;
            var8 = var8.flags;
            var7 = _closure1_slot9;
            var8 = var9.bind(var10)(var8, var7);
            var7 = 0;
            var6 = var7 === var8;
 167:
            var5 = var6;
 170:
            var4 = var5;
 173:
            var3 = var4;
 176:
            var2 = var3;
 179:
            var1 = var2;
 182:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var7 = var5.bind(var1)(var4);
    var4 = var7.GuildFeatures;
    var _closure1_slot6 = var4;
    var4 = var7.MessageFlags;
    var8 = var7.MessageStates;
    var _closure1_slot7 = var8;
    var7 = var7.MessageTypesSets;
    var _closure1_slot8 = var7;
    var8 = var4.CROSSPOSTED;
    var7 = var4.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD;
    var8 = var8 | var7;
    var7 = var4.GUILD_FEED_HIDDEN;
    var8 = var8 | var7;
    var7 = var4.HAS_SNAPSHOT;
    var8 = var8 | var7;
    var7 = var4.HAS_THREAD;
    var8 = var8 | var7;
    var7 = var4.IS_CROSSPOST;
    var8 = var8 | var7;
    var7 = var4.IS_VOICE_MESSAGE;
    var8 = var8 | var7;
    var7 = var4.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING;
    var8 = var8 | var7;
    var7 = var4.SUPPRESS_EMBEDS;
    var8 = var8 | var7;
    var7 = var4.SUPPRESS_NOTIFICATIONS;
    var8 = var8 | var7;
    var7 = var4.URGENT;
    var7 = var8 | var7;
    var4 = var4.IS_COMPONENTS_V2;
    var4 = var7 | var4;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forwarding/canForwardMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function canForwardMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = _closure1_slot10;
            var5 = undefined;
            var1 = var1.bind(var5)(var2);
            if(var1) { _fun0002_ip = 24; continue _fun0002 }
 20:
            var1 = false;
            return var1;
 24:
            var6 = _closure1_slot4;
            var4 = var6.getChannel;
            var1 = var2.channel_id;
            var4 = var4.bind(var6)(var1);
            var1 = null;
            var6 = var1 == var4;
            var5 = undefined;
            if(var6) { _fun0002_ip = 59; continue _fun0002 }
 54:
            var5 = var4.guild_id;
 59:
            var1 = var1 == var5;
            if(var1) { _fun0002_ip = 90; continue _fun0002 }
 66:
            var4 = _closure1_slot3;
            var3 = var4.isChannelOrThreadParentGated;
            var2 = var2.channel_id;
            var2 = var3.bind(var4)(var5, var2);
            var1 = !var2;
 90:
            return var1;
        }
    };
    var3['canForwardMessage'] = var4;
    var2 = function useCanForwardMessage(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var7 = var6.bind(var3)(var4);
        var6 = var7.useStateFromStores;
        var3 = _closure1_slot5;
        var4 = new Array(3);
        var4[0] = var3;
        var3 = _closure1_slot3;
        var4[1] = var3;
        var3 = _closure1_slot4;
        var4[2] = var3;
        var3 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = _closure2_slot0;
                var4 = null;
                if(!(var4 != var1)) { _fun0003_ip = 212; continue _fun0003 }
 16:
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channel_id;
                var1 = var2.bind(var3)(var1);
                var2 = var4 == var1;
                var9 = undefined;
                if(var2) { _fun0003_ip = 56; continue _fun0003 }
 51:
                var9 = var1.guild_id;
 56:
                if(!(var4 != var9)) { _fun0003_ip = 112; continue _fun0003 }
 60:
                var2 = _closure1_slot5;
                var1 = var2.getGuild;
                var2 = var1.bind(var2)(var9);
                var7 = var4 == var2;
                var1 = undefined;
                if(var7) { _fun0003_ip = 109; continue _fun0003 }
 83:
                var8 = var2.features;
                var7 = var8.has;
                var2 = _closure1_slot6;
                var2 = var2.FORWARDING_DISABLED;
                var1 = var7.bind(var8)(var2);
 109:
                if(var1) { _fun0003_ip = 208; continue _fun0003 }
 112:
                var1 = var4 != var9;
                if(!var1) { _fun0003_ip = 144; continue _fun0003 }
 119:
                var8 = _closure1_slot3;
                var7 = var8.isChannelOrThreadParentGated;
                var2 = _closure2_slot0;
                var2 = var2.channel_id;
                var1 = var7.bind(var8)(var9, var2);
 144:
                var2 = _closure2_slot0;
                var2 = var4 != var2;
                if(!var2) { _fun0003_ip = 200; continue _fun0003 }
 155:
                var7 = _closure1_slot4;
                var6 = var7.getChannel;
                var5 = _closure2_slot0;
                var5 = var5.channel_id;
                var5 = var6.bind(var7)(var5);
                var4 = var4 == var5;
                var3 = undefined;
                if(var4) { _fun0003_ip = 197; continue _fun0003 }
 187:
                var4 = var5.isModeratorReportChannel;
                var3 = var4.bind(var5)();
 197:
                var2 = var3;
 200:
                if(var1) { _fun0003_ip = 206; continue _fun0003 }
 203:
                var1 = var2;
 206:
                return var1;
 208:
                var1 = true;
                return var1;
 212:
                var1 = true;
                return var1;
            }
        };
        var6 = var6.bind(var7)(var4, var3);
        var _closure2_slot1 = var6;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = _closure2_slot1;
                var1 = !var1;
                if(!var1) { _fun0004_ip = 23; continue _fun0004 }
 13:
                var4 = _closure2_slot0;
                var3 = null;
                var1 = var3 != var4;
 23:
                if(!var1) { _fun0004_ip = 44; continue _fun0004 }
 26:
                var4 = _closure1_slot10;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
 44:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useCanForwardMessage'] = var2;
    return var1;
})();
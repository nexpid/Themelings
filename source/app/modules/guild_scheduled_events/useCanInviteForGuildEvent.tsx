// app/modules/guild_scheduled_events/useCanInviteForGuildEvent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var4 = function canEveryoneRoleViewEvent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var4 = arguments[1];
            var6 = undefined;
            if(!(var4 === var6)) { _fun0001_ip = 30; continue _fun0001 }
 12:
            var2 = _closure1_slot4;
            var1 = new Array(1);
            var1[0] = var2;
            var4 = var1;
 30:
            var2 = var4;
            var1 = var2[Symbol.iterator];
            var2 = var1().next;
            var5 = var2().value;
            var2 = var1;
            var2 = var2 === var6;
            var4 = undefined;
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 52:
            var4 = var5;
 55:
            if(var2) { _fun0001_ip = 61; continue _fun0001 }
 58:
            var1.return();
 61:
            var1 = 'entity_type';
            var2 = var1 in var3;
            var1 = var3;
            if(!var2) { _fun0001_ip = 100; continue _fun0001 }
 75:
            var2 = {};
            var5 = var3.entity_type;
            var2['entityType'] = var5;
            var3 = var3.channel_id;
            var2['channelId'] = var3;
            var1 = var2;
 100:
            var5 = var1.entityType;
            var3 = var1.channelId;
            var1 = _closure1_slot9;
            var1 = var1.EXTERNAL;
            if(!(var5 !== var1)) { _fun0001_ip = 191; continue _fun0001 }
 128:
            var1 = var4.getChannel;
            var5 = var1.bind(var4)(var3);
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0001_ip = 189; continue _fun0001 }
 147:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 8;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.canEveryoneRole;
            var2 = _closure1_slot10;
            var2 = var2.VIEW_CHANNEL;
            var1 = var3.bind(var4)(var2, var5);
 189:
            return var1;
 191:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var2 = function isGuildEventInvitable(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var2 = arguments[1];
            var5 = undefined;
            if(!(var2 === var5)) { _fun0002_ip = 54; continue _fun0002 }
 12:
            var4 = _closure1_slot5;
            var1 = new Array(4);
            var1[0] = var4;
            var4 = _closure1_slot4;
            var1[1] = var4;
            var4 = _closure1_slot6;
            var1[2] = var4;
            var3 = _closure1_slot3;
            var1[3] = var3;
            var2 = var1;
 54:
            var3 = var2;
            var1 = var3[Symbol.iterator];
            var3 = var1().next;
            var4 = var3().value;
            var2 = var1;
            var2 = var2 === var5;
            var12 = undefined;
            if(var2) { _fun0002_ip = 79; continue _fun0002 }
 76:
            var12 = var4;
 79:
            var7 = undefined;
            if(var2) { _fun0002_ip = 109; continue _fun0002 }
 84:
            var8 = var3().value;
            var4 = var1;
            var4 = var4 === var5;
            var7 = undefined;
            var2 = var4;
            if(var4) { _fun0002_ip = 109; continue _fun0002 }
 103:
            var7 = var8;
            var2 = var4;
 109:
            var10 = undefined;
            if(var2) { _fun0002_ip = 139; continue _fun0002 }
 114:
            var8 = var3().value;
            var4 = var1;
            var4 = var4 === var5;
            var10 = undefined;
            var2 = var4;
            if(var4) { _fun0002_ip = 139; continue _fun0002 }
 133:
            var10 = var8;
            var2 = var4;
 139:
            var8 = undefined;
            if(var2) { _fun0002_ip = 169; continue _fun0002 }
 144:
            var4 = var3().value;
            var3 = var1;
            var3 = var3 === var5;
            var8 = undefined;
            var2 = var3;
            if(var3) { _fun0002_ip = 169; continue _fun0002 }
 163:
            var8 = var4;
            var2 = var3;
 169:
            if(var2) { _fun0002_ip = 175; continue _fun0002 }
 172:
            var1.return();
 175:
            var1 = _closure1_slot8;
            var1 = var1.bind(var5)(var6);
            if(var1) { _fun0002_ip = 353; continue _fun0002 }
 193:
            var9 = var6.guild_id;
            var2 = var6.channel_id;
            var4 = var6.entity_type;
            var1 = _closure1_slot9;
            var1 = var1.EXTERNAL;
            if(!(var4 !== var1)) { _fun0002_ip = 235; continue _fun0002 }
 223:
            var1 = var7.getChannel;
            var4 = var1.bind(var7)(var2);
            _fun0002_ip = 251; continue _fun0002;
 235:
            var11 = var12.getDefaultChannel;
            var1 = var6.guild_id;
            var4 = var11.bind(var12)(var1);
 251:
            var1 = var10.getGuild;
            var15 = var1.bind(var10)(var9);
            var1 = var8.getStageInstanceByChannel;
            var13 = var1.bind(var8)(var2);
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 9;
            var1 = var8[var1];
            var8 = var2.bind(var5)(var1);
            var2 = var8.canViewInviteModal;
            var16 = _closure1_slot7;
            var17 = var8;
            var14 = var4;
            var1 = var17[var2](var16, var15, var14, var13, var12);
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0002_ip = 351; continue _fun0002 }
 321:
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0002_ip = 348; continue _fun0002 }
 330:
            var4 = _closure1_slot11;
            var3 = new Array(1);
            var3[0] = var7;
            var2 = var4.bind(var5)(var6, var3);
 348:
            var1 = var2;
 351:
            return var1;
 353:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot12 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.isGuildEventEnded;
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.GuildScheduledEventEntityTypes;
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.Permissions;
    var _closure1_slot10 = var6;
    var6 = 11;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_scheduled_events/useCanInviteForGuildEvent.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function useCanInviteForGuildEvent(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 10;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot5;
        var3 = new Array(4);
        var3[0] = var7;
        var7 = _closure1_slot4;
        var3[1] = var7;
        var7 = _closure1_slot6;
        var3[2] = var7;
        var2 = _closure1_slot3;
        var3[3] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var4 = _closure1_slot12;
            var3 = _closure2_slot0;
            var5 = _closure1_slot5;
            var2 = new Array(4);
            var2[0] = var5;
            var5 = _closure1_slot4;
            var2[1] = var5;
            var5 = _closure1_slot6;
            var2[2] = var5;
            var1 = _closure1_slot3;
            var2[3] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var5;
    var3['canEveryoneRoleViewEvent'] = var4;
    var3['isGuildEventInvitable'] = var2;
    return var1;
})();
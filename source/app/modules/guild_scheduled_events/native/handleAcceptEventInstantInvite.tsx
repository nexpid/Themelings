// app/modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleAcceptEventInstantInvite(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.handleNSFWGuildInvite;
            var3 = var3.bind(var4)(var6);
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 2;
            var3 = var7[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isGuildScheduledEventInviteEmbed;
            var3 = var3.bind(var4)(var6);
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = var6.code;
            var4 = null;
            if(!(var4 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var8 = _closure1_slot3;
            var7 = var8.getGuildScheduledEvent;
            var9 = var6.guild_scheduled_event;
            var10 = var4 == var9;
            var3 = undefined;
            if(var10) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var9.id;
case 6:
            var3 = var7.bind(var8)(var3);
            var _closure2_slot0 = var3;
            if(!(var4 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 8:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 3;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.acceptInvite;
            var2 = {};
            var6 = var6.code;
            var2['inviteKey'] = var6;
            var6 = {};
            var7 = 'Guild Scheduled Event Invite Button Embed';
            var6['location'] = var7;
            var2['context'] = var6;
            var5 = function callback() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.transitionToEventDetailsFromInvite;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2['callback'] = var5;
            var2 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
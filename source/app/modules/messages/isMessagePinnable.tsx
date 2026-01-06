// app/modules/messages/isMessagePinnable.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ChannelTypes;
    var _closure1_slot4 = var7;
    var4 = var4.Permissions;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/isMessagePinnable.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isMessagePinnable(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg2;
            var1 = var3.isSystemDM;
            var1 = var1.bind(var3)();
            var1 = !var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var5 = undefined;
            var4 = var4.bind(var5)(var2);
            var2 = arg1;
            var2 = var4.bind(var5)(var2);
            var1 = !var2;
case 2:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 3;
            var4 = var6[var4];
            var6 = undefined;
            var7 = var5.bind(var6)(var4);
            var5 = var7.getCurrentConfig;
            var4 = {};
            var8 = var3.guild_id;
            var4['guildId'] = var8;
            var8 = 'isMessagePinnable';
            var4['location'] = var8;
            var4 = var5.bind(var7)(var4);
            var5 = var4.enabled;
            var8 = _closure1_slot3;
            var7 = var8.can;
            var4 = _closure1_slot5;
            var4 = var4.MANAGE_MESSAGES;
            var4 = var7.bind(var8)(var4, var3);
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = !var5;
case 4:
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = _closure1_slot3;
            var7 = var8.can;
            var5 = _closure1_slot5;
            var5 = var5.PIN_MESSAGES;
            var4 = var7.bind(var8)(var5, var3);
case 6:
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = _closure1_slot3;
            var7 = var8.can;
            var5 = _closure1_slot5;
            var5 = var5.READ_MESSAGE_HISTORY;
            var4 = var7.bind(var8)(var5, var3);
case 8:
            if(!var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = var3.isPrivate;
            var4 = var5.bind(var3)();
case 12:
            var1 = var4;
case 10:
            if(!var1) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 4;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.getIsActiveChannelOrUnarchivableThread;
            var1 = var4.bind(var5)(var3);
case 14:
            if(!var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var5 = var3.type;
            var4 = _closure1_slot4;
            var4 = var4.GUILD_VOICE;
            var1 = var5 !== var4;
case 16:
            if(!var1) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var3 = var3.type;
            var2 = _closure1_slot4;
            var2 = var2.GUILD_STAGE_VOICE;
            var1 = var3 !== var2;
case 18:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
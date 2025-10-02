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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/isMessagePinnable.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isMessagePinnable(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg2;
            var1 = var3.isSystemDM;
            var1 = var1.bind(var3)();
            var1 = !var1;
            if(!var1) { _fun0001_ip = 55; continue _fun0001 }
 19:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var5 = undefined;
            var4 = var4.bind(var5)(var2);
            var2 = arg1;
            var2 = var4.bind(var5)(var2);
            var1 = !var2;
 55:
            var6 = _closure1_slot3;
            var5 = var6.can;
            var4 = _closure1_slot5;
            var4 = var4.MANAGE_MESSAGES;
            var4 = var5.bind(var6)(var4, var3);
            if(var4) { _fun0001_ip = 113; continue _fun0001 }
 87:
            var7 = _closure1_slot3;
            var6 = var7.can;
            var5 = _closure1_slot5;
            var5 = var5.PIN_MESSAGES;
            var4 = var6.bind(var7)(var5, var3);
 113:
            if(!var1) { _fun0001_ip = 132; continue _fun0001 }
 116:
            if(var4) { _fun0001_ip = 129; continue _fun0001 }
 119:
            var5 = var3.isPrivate;
            var4 = var5.bind(var3)();
 129:
            var1 = var4;
 132:
            if(!var1) { _fun0001_ip = 168; continue _fun0001 }
 135:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 3;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.getIsActiveChannelOrUnarchivableThread;
            var1 = var4.bind(var5)(var3);
 168:
            if(!var1) { _fun0001_ip = 190; continue _fun0001 }
 171:
            var5 = var3.type;
            var4 = _closure1_slot4;
            var4 = var4.GUILD_VOICE;
            var1 = var5 !== var4;
 190:
            if(!var1) { _fun0001_ip = 212; continue _fun0001 }
 193:
            var3 = var3.type;
            var2 = _closure1_slot4;
            var2 = var2.GUILD_STAGE_VOICE;
            var1 = var3 !== var2;
 212:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
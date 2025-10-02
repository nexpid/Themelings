// app/modules/applications/ApplicationInteractionInfoUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/ApplicationInteractionInfoUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function canViewInteractionInfo(arg1) {
        var1 = arg1;
        var2 = var1.interactionMetadata;
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var3['canViewInteractionInfo'] = var4;
    var2 = function isPrimaryEntryPointCommandMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = var4.interactionMetadata;
            var3 = null;
            var2 = var3 == var1;
            var5 = undefined;
            var7 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var1.type;
case 2:
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 0;
            var1 = var1[var6];
            var1 = var8.bind(var5)(var1);
            var1 = var1.InteractionTypes;
            var1 = var1.APPLICATION_COMMAND;
            var1 = var7 === var1;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var4.interactionMetadata;
            var7 = var3 == var4;
            var3 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var4.command_type;
case 6:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ApplicationCommandType;
            var2 = var2.PRIMARY_ENTRY_POINT;
            var1 = var3 === var2;
case 4:
            return var1;
        }
    };
    var3['isPrimaryEntryPointCommandMessage'] = var2;
    return var1;
})();
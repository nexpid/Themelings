// app/modules/user_profile/useBotProfileCommands.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportAll;
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
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/useBotProfileCommands.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBotProfileCommands(arg1, arg2, arg3) {
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 1;
        var4 = var4[var1];
        var1 = undefined;
        var7 = var5.bind(var1)(var4);
        var6 = var7.useAccessibleCommandsForApplication;
        var5 = arg1;
        var4 = arg2;
        var1 = arg3;
        var4 = var6.bind(var7)(var5, var4, var1);
        var6 = var4.commands;
        var _closure2_slot0 = var6;
        var1 = {};
        var4 = var4.application;
        var1['application'] = var4;
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var3 = var1 == var3;
                var1 = undefined;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure2_slot0;
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = arg1;
                        var3 = var2.nsfw;
                        var1 = true;
                        var1 = var1 !== var3;
                        if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 3:
                        var6 = var2.options;
                        var3 = null;
                        var4 = var3 == var6;
                        var2 = undefined;
                        if(var4) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                        var5 = var6.find;
                        var4 = function(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var1 = arg1;
                                var3 = var1.type;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var6 = 2;
                                var1 = var1[var6];
                                var5 = undefined;
                                var1 = var4.bind(var5)(var1);
                                var1 = var1.ApplicationCommandOptionType;
                                var1 = var1.SUB_COMMAND;
                                var1 = var3 === var1;
                                if(var1) { _fun0003_ip = 7; continue _fun0003 }
case 5:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var2 = var2[var6];
                                var2 = var4.bind(var5)(var2);
                                var2 = var2.ApplicationCommandOptionType;
                                var2 = var2.SUB_COMMAND_GROUP;
                                var1 = var3 === var2;
case 7:
                                return var1;
                            }
                        };
                        var2 = var5.bind(var6)(var4);
case 5:
                        var1 = var3 == var2;
case 4:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
case 2:
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['commands'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/forwarding/isStaffToNonStaffForward.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function isStaffChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.isPrivate;
            var2 = var2.bind(var1)();
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot1;
            var4 = var5.getGuild;
            var2 = var1.guild_id;
            var4 = var4.bind(var5)(var2);
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var4.features;
            var4 = var5.has;
            var3 = _closure1_slot3;
            var3 = var3.INTERNAL_EMPLOYEE_ONLY;
            var2 = var4.bind(var5)(var3);
case 4:
            return var2;
case 2:
            var3 = var1.recipients;
            var2 = var3.every;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot2;
                    var2 = var3.getUser;
                    var1 = arg1;
                    var3 = var2.bind(var3)(var1);
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = var3.isStaff;
                    var1 = var2.bind(var3)();
case 6:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot4 = var1;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forwarding/isStaffToNonStaffForward.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isStaffToNonStaffForward(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg2;
            var3 = _closure1_slot2;
            var1 = var3.getCurrentUser;
            var4 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var4)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var3 = var4.isStaff;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0003_ip = 8; continue _fun0003 }
case 10:
            var6 = _closure1_slot0;
            var4 = var6.getChannel;
            var3 = arg1;
            var3 = var3.channel_id;
            var4 = var4.bind(var6)(var3);
            var1 = var1 != var4;
            if(!var1) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var3 = _closure1_slot4;
            var2 = undefined;
            var2 = var3.bind(var2)(var4);
            var3 = !var2;
            var2 = !var3;
            if(var3) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var4 = var5.some;
            var3 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = var4.getChannel;
                    var1 = arg1;
                    var5 = var2.bind(var4)(var1);
                    var1 = null;
                    var1 = var1 != var5;
                    if(!var1) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var2 = var5.isPrivate;
                    var2 = var2.bind(var5)();
                    var2 = !var2;
                    if(!var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var4 = _closure1_slot4;
                    var3 = undefined;
                    var3 = var4.bind(var3)(var5);
                    var2 = !var3;
case 17:
                    var1 = var2;
case 15:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3);
case 13:
            var1 = var2;
case 11:
            return var1;
case 8:
            var1 = false;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
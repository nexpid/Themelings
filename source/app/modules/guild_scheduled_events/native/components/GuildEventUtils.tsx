// app/modules/guild_scheduled_events/native/components/GuildEventUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/components/GuildEventUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg2;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 0;
            var1 = var4[var1];
            var4 = undefined;
            var5 = var3.bind(var4)(var1);
            var3 = var5.getLocationFromEvent;
            var1 = arg1;
            var3 = var3.bind(var5)(var1);
            var1 = null;
            if(!(var1 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1 != var7;
            var1 = null;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 2;
            var3 = var6[var3];
            var6 = var5.bind(var4)(var3);
            var3 = arg3;
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var6.getSimpleChannelIcon;
            var3 = var3.bind(var6)(var7);
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var5 = var6.getChannelIcon;
            var3 = var5.bind(var6)(var7);
case 8:
            var1 = var3;
case 4:
            _fun0001_ip = 9; continue _fun0001;
case 2:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 1;
            var2 = var5[var2];
            var1 = var3.bind(var4)(var2);
case 9:
            return var1;
        }
    };
    var3['getEventLocationIconSource'] = var4;
    var2 = function(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = arg2;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 0;
            var1 = var4[var1];
            var4 = undefined;
            var5 = var3.bind(var4)(var1);
            var3 = var5.getLocationFromEvent;
            var1 = arg1;
            var1 = var3.bind(var5)(var1);
            var6 = null;
            if(!(var6 == var1)) { _fun0002_ip = 10; continue _fun0002 }
case 3:
            var3 = var6 != var8;
            var1 = null;
            if(!var3) { _fun0002_ip = 11; continue _fun0002 }
case 5:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 2;
            var3 = var7[var3];
            var7 = var5.bind(var4)(var3);
            var3 = arg3;
            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var7.getSimpleChannelIconComponent;
            var3 = var3.bind(var7)(var8);
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var5 = var7.getChannelIconComponent;
            var3 = var5.bind(var7)(var8);
case 8:
            var5 = var6 != var3;
            var1 = null;
            if(!var5) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1 = var3;
case 11:
            _fun0002_ip = 13; continue _fun0002;
case 10:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var1 = var2.LocationIcon;
case 13:
            return var1;
        }
    };
    var3['getEventLocationIconComponent'] = var2;
    return var1;
})();
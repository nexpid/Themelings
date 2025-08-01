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
 0:
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
            if(!(var1 == var3)) { _fun0001_ip = 111; continue _fun0001 }
 47:
            var3 = var1 != var7;
            var1 = null;
            if(!var3) { _fun0001_ip = 109; continue _fun0001 }
 56:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 2;
            var3 = var6[var3];
            var6 = var5.bind(var4)(var3);
            var3 = arg3;
            if(var3) { _fun0001_ip = 95; continue _fun0001 }
 82:
            var3 = var6.getSimpleChannelIcon;
            var3 = var3.bind(var6)(var7);
            _fun0001_ip = 106; continue _fun0001;
 95:
            var5 = var6.getChannelIcon;
            var3 = var5.bind(var6)(var7);
 106:
            var1 = var3;
 109:
            _fun0001_ip = 131; continue _fun0001;
 111:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 1;
            var2 = var5[var2];
            var1 = var3.bind(var4)(var2);
 131:
            return var1;
        }
    };
    var3['getEventLocationIconSource'] = var4;
    var2 = function(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
            if(!(var6 == var1)) { _fun0002_ip = 120; continue _fun0002 }
 47:
            var3 = var6 != var8;
            var1 = null;
            if(!var3) { _fun0002_ip = 118; continue _fun0002 }
 56:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 2;
            var3 = var7[var3];
            var7 = var5.bind(var4)(var3);
            var3 = arg3;
            if(var3) { _fun0002_ip = 95; continue _fun0002 }
 82:
            var3 = var7.getSimpleChannelIconComponent;
            var3 = var3.bind(var7)(var8);
            _fun0002_ip = 106; continue _fun0002;
 95:
            var5 = var7.getChannelIconComponent;
            var3 = var5.bind(var7)(var8);
 106:
            var5 = var6 != var3;
            var1 = null;
            if(!var5) { _fun0002_ip = 118; continue _fun0002 }
 115:
            var1 = var3;
 118:
            _fun0002_ip = 146; continue _fun0002;
 120:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var1 = var2.LocationIcon;
 146:
            return var1;
        }
    };
    var3['getEventLocationIconComponent'] = var2;
    return var1;
})();
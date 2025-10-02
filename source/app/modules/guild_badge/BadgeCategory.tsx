// app/modules/guild_badge/BadgeCategory.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var4 = {};
    var7 = 0;
    var4['PARTNERED'] = var7;
    var1 = 'PARTNERED';
    var4[var7] = var1;
    var1 = 1;
    var4['VERIFIED'] = var1;
    var7 = 'VERIFIED';
    var4[var1] = var7;
    var8 = 2;
    var4['VERIFIED_AND_PARTNERED'] = var8;
    var7 = 'VERIFIED_AND_PARTNERED';
    var4[var8] = var7;
    var8 = 3;
    var4['COMMUNITY'] = var8;
    var7 = 'COMMUNITY';
    var4[var8] = var7;
    var8 = 4;
    var4['DISCOVERABLE'] = var8;
    var7 = 'DISCOVERABLE';
    var4[var8] = var7;
    var8 = 5;
    var4['STAFF'] = var8;
    var7 = 'STAFF';
    var4[var8] = var7;
    var8 = 6;
    var4['NONE'] = var8;
    var7 = 'NONE';
    var4[var8] = var7;
    var _closure1_slot2 = var4;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_badge/BadgeCategory.tsx';
    var5 = var6.bind(var7)(var5);
    var3['BadgeCategory'] = var4;
    var2 = function getBadgeCategory(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.staff;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var1.verified;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var1.partnered;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var2 = var1.verified;
            if(var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = var1.partnered;
            if(var2) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = var1.community;
            if(!var2) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var4 = var1.visibility;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 0;
            var5 = var5[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var3 = var3.GuildVisibility;
            var3 = var3.PUBLIC;
            if(!(var4 !== var3)) { _fun0001_ip = 13; continue _fun0001 }
case 11:
            var1 = var1.community;
            var3 = _closure1_slot2;
            if(var1) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = var3.NONE;
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var1 = var3.COMMUNITY;
case 16:
            _fun0001_ip = 17; continue _fun0001;
case 13:
            var2 = _closure1_slot2;
            var1 = var2.DISCOVERABLE;
case 17:
            _fun0001_ip = 18; continue _fun0001;
case 9:
            var2 = _closure1_slot2;
            var1 = var2.PARTNERED;
case 18:
            _fun0001_ip = 19; continue _fun0001;
case 7:
            var2 = _closure1_slot2;
            var1 = var2.VERIFIED;
case 19:
            _fun0001_ip = 20; continue _fun0001;
case 6:
            var2 = _closure1_slot2;
            var1 = var2.VERIFIED_AND_PARTNERED;
case 20:
            _fun0001_ip = 21; continue _fun0001;
case 2:
            var2 = _closure1_slot2;
            var1 = var2.STAFF;
case 21:
            return var1;
        }
    };
    var3['getBadgeCategory'] = var2;
    return var1;
})();
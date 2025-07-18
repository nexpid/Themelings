// app/modules/guild_badge/BadgeCategory.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var5 = native7;
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
 0:
            var1 = arg1;
            var2 = var1.staff;
            if(var2) { _fun0001_ip = 201; continue _fun0001 }
 15:
            var2 = var1.verified;
            if(!var2) { _fun0001_ip = 36; continue _fun0001 }
 24:
            var2 = var1.partnered;
            if(var2) { _fun0001_ip = 186; continue _fun0001 }
 36:
            var2 = var1.verified;
            if(var2) { _fun0001_ip = 171; continue _fun0001 }
 48:
            var2 = var1.partnered;
            if(var2) { _fun0001_ip = 156; continue _fun0001 }
 57:
            var2 = var1.community;
            if(!var2) { _fun0001_ip = 112; continue _fun0001 }
 66:
            var4 = var1.visibility;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 0;
            var5 = var5[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var3 = var3.GuildVisibility;
            var3 = var3.PUBLIC;
            if(!(var4 !== var3)) { _fun0001_ip = 144; continue _fun0001 }
 112:
            var1 = var1.community;
            var3 = _closure1_slot2;
            if(var1) { _fun0001_ip = 136; continue _fun0001 }
 128:
            var1 = var3.NONE;
            _fun0001_ip = 142; continue _fun0001;
 136:
            var1 = var3.COMMUNITY;
 142:
            _fun0001_ip = 154; continue _fun0001;
 144:
            var2 = _closure1_slot2;
            var1 = var2.DISCOVERABLE;
 154:
            _fun0001_ip = 169; continue _fun0001;
 156:
            var2 = _closure1_slot2;
            var1 = var2.PARTNERED;
 169:
            _fun0001_ip = 184; continue _fun0001;
 171:
            var2 = _closure1_slot2;
            var1 = var2.VERIFIED;
 184:
            _fun0001_ip = 199; continue _fun0001;
 186:
            var2 = _closure1_slot2;
            var1 = var2.VERIFIED_AND_PARTNERED;
 199:
            _fun0001_ip = 214; continue _fun0001;
 201:
            var2 = _closure1_slot2;
            var1 = var2.STAFF;
 214:
            return var1;
        }
    };
    var3['getBadgeCategory'] = var2;
    return var1;
})();
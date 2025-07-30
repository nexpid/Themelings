// app/modules/guild_boosting/native/RoleIconUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_boosting/native/RoleIconUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var6 = var2.roleId;
            var _closure2_slot1 = var6;
            var5 = var2.size;
            var8 = undefined;
            if(!(var5 === var8)) { _fun0001_ip = 38; continue _fun0001 }
 35:
            var5 = 20;
 38:
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var8;
            var _closure2_slot4 = var8;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 4;
            var4 = var9[var4];
            var9 = var7.bind(var8)(var4);
            var8 = var9.useStateFromStoresObject;
            var4 = _closure1_slot5;
            var7 = new Array(2);
            var7[0] = var4;
            var4 = _closure1_slot4;
            var7[1] = var4;
            var4 = new Array(2);
            var4[0] = var3;
            var4[1] = var6;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var6 = _closure1_slot5;
                    var5 = var6.getGuild;
                    var2 = _closure2_slot0;
                    var5 = var5.bind(var6)(var2);
                    var1['guild'] = var5;
                    var7 = null;
                    var5 = var7 != var2;
                    var2 = undefined;
                    if(!var5) { _fun0002_ip = 78; continue _fun0002 }
 41:
                    var5 = _closure2_slot1;
                    var5 = var7 != var5;
                    var2 = undefined;
                    if(!var5) { _fun0002_ip = 78; continue _fun0002 }
 54:
                    var6 = _closure1_slot4;
                    var5 = var6.getRole;
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var2 = var5.bind(var6)(var4, var3);
 78:
                    var1['role'] = var2;
                    return var1;
                }
            };
            var3 = var8.bind(var9)(var7, var3, var4);
            var8 = var3.guild;
            _closure2_slot3 = var8;
            var7 = var3.role;
            _closure2_slot4 = var7;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(4);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var2[3] = var5;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot3;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0003_ip = 152; continue _fun0003 }
 16:
                    var1 = _closure2_slot1;
                    if(!(var6 != var1)) { _fun0003_ip = 152; continue _fun0003 }
 27:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 5;
                    var2 = var2[var7];
                    var4 = undefined;
                    var9 = var3.bind(var4)(var2);
                    var8 = var9.canGuildUseRoleIcons;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot4;
                    var2 = var8.bind(var9)(var3, var2);
                    if(!var2) { _fun0003_ip = 152; continue _fun0003 }
 75:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var7 = var3.bind(var4)(var2);
                    var3 = var7.getRoleIconData;
                    var2 = _closure2_slot4;
                    var2 = var3.bind(var7)(var2);
                    if(!(var6 == var2)) { _fun0003_ip = 113; continue _fun0003 }
 111:
                    var2 = {};
 113:
                    var3 = var2.customIconSrc;
                    var7 = var2.unicodeEmoji;
                    var2 = var6 != var3;
                    var8 = undefined;
                    if(!var2) { _fun0003_ip = 144; continue _fun0003 }
 134:
                    var2 = {};
                    var2['uri'] = var3;
                    var8 = var2;
 144:
                    if(!(var6 == var8)) { _fun0003_ip = 156; continue _fun0003 }
 148:
                    if(!(var6 == var7)) { _fun0003_ip = 156; continue _fun0003 }
 152:
                    var2 = undefined;
                    return var2;
 156:
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 6;
                    var1 = var9[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var1['source'] = var8;
                    var1['unicodeEmoji'] = var7;
                    var7 = _closure2_slot4;
                    var8 = var6 == var7;
                    var7 = undefined;
                    if(var8) { _fun0003_ip = 213; continue _fun0003 }
 204:
                    var8 = _closure2_slot4;
                    var7 = var8.name;
 213:
                    var8 = var6 != var7;
                    var6 = '';
                    if(!var8) { _fun0003_ip = 227; continue _fun0003 }
 224:
                    var6 = var7;
 227:
                    var1['name'] = var6;
                    var5 = _closure2_slot2;
                    var1['size'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useRoleIcon'] = var4;
    var2 = function getRoleIcon(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var7 = var1.roleId;
            var5 = var1.size;
            var3 = _closure1_slot5;
            var1 = var3.getGuild;
            var9 = var1.bind(var3)(var4);
            var3 = null;
            if(!(var3 != var9)) { _fun0004_ip = 182; continue _fun0004 }
 45:
            if(!(var3 != var7)) { _fun0004_ip = 182; continue _fun0004 }
 52:
            var6 = _closure1_slot4;
            var4 = var6.getRole;
            var1 = var9.id;
            var6 = var4.bind(var6)(var1, var7);
            if(!(var3 != var6)) { _fun0004_ip = 182; continue _fun0004 }
 77:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 5;
            var1 = var1[var8];
            var7 = undefined;
            var4 = var4.bind(var7)(var1);
            var1 = var4.canGuildUseRoleIcons;
            var1 = var1.bind(var4)(var9, var6);
            if(!var1) { _fun0004_ip = 182; continue _fun0004 }
 114:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var4 = var4.bind(var7)(var1);
            var1 = var4.getRoleIconData;
            var1 = var1.bind(var4)(var6);
            if(!(var3 == var1)) { _fun0004_ip = 148; continue _fun0004 }
 146:
            var1 = {};
 148:
            var8 = var1.customIconSrc;
            var4 = var1.unicodeEmoji;
            if(!(var3 == var8)) { _fun0004_ip = 186; continue _fun0004 }
 164:
            var9 = var3 == var4;
            var1 = undefined;
            if(var9) { _fun0004_ip = 178; continue _fun0004 }
 173:
            var1 = var4.surrogates;
 178:
            if(!(var3 == var1)) { _fun0004_ip = 186; continue _fun0004 }
 182:
            var1 = undefined;
            return var1;
 186:
            var1 = {};
            var1['source'] = var8;
            var8 = var6.name;
            var1['name'] = var8;
            var1['size'] = var5;
            var5 = var3 == var4;
            var3 = undefined;
            if(var5) { _fun0004_ip = 219; continue _fun0004 }
 214:
            var3 = var4.surrogates;
 219:
            var1['unicodeEmoji'] = var3;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.9+YWrK;
            var2 = {};
            var6 = var6.name;
            var2['name'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1['alt'] = var2;
            return var1;
        }
    };
    var3['getRoleIcon'] = var2;
    return var1;
})();
// app/modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useHasEnhancedRoleColors(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var7;
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 2;
            var3 = var4[var3];
            var5 = undefined;
            var9 = var8.bind(var5)(var3);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var10;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot3;
                    var3 = var4.getGuild;
                    var1 = _closure2_slot0;
                    var3 = var3.bind(var4)(var1);
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 59; continue _fun0002 }
 33:
                    var4 = var3.features;
                    var3 = var4.has;
                    var2 = _closure1_slot4;
                    var2 = var2.ENHANCED_ROLE_COLORS;
                    var1 = var3.bind(var4)(var2);
 59:
                    return var1;
                }
            };
            var1 = var8.bind(var9)(var3, var1);
            var3 = _closure1_slot1;
            var2 = 3;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var2 = null;
            var8 = var2 != var7;
            var3 = undefined;
            if(!var8) { _fun0001_ip = 95; continue _fun0001 }
 92:
            var3 = var7;
 95:
            var7 = var2 != var6;
            var2 = undefined;
            if(!var7) { _fun0001_ip = 107; continue _fun0001 }
 104:
            var2 = var6;
 107:
            var2 = var4.bind(var5)(var3, var2);
            if(var1) { _fun0001_ip = 119; continue _fun0001 }
 116:
            var1 = var2;
 119:
            return var1;
        }
    };
    var3['default'] = var4;
    var4 = function getHasEnhancedRoleColors(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var6 = arg2;
            var7 = null;
            if(!(var7 != var5)) { _fun0003_ip = 114; continue _fun0003 }
 12:
            var3 = _closure1_slot3;
            var1 = var3.getGuild;
            var3 = var1.bind(var3)(var5);
            var1 = var7 != var3;
            if(!var1) { _fun0003_ip = 62; continue _fun0003 }
 36:
            var8 = var3.features;
            var4 = var8.has;
            var3 = _closure1_slot4;
            var3 = var3.ENHANCED_ROLE_COLORS;
            var1 = var4.bind(var8)(var3);
 62:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getIsUserServerBoosterForGuild;
            var7 = var7 != var6;
            if(!var7) { _fun0003_ip = 100; continue _fun0003 }
 97:
            var2 = var6;
 100:
            var2 = var3.bind(var4)(var5, var2);
            if(var1) { _fun0003_ip = 112; continue _fun0003 }
 109:
            var1 = var2;
 112:
            return var1;
 114:
            var1 = false;
            return var1;
        }
    };
    var3['getHasEnhancedRoleColors'] = var4;
    var4 = function useHasEnhancedRoleColorsForRole(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var8 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var8;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var2 = var7[var2];
            var6 = undefined;
            var10 = var4.bind(var6)(var2);
            var9 = var10.useStateFromStores;
            var11 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var11;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure1_slot3;
                    var3 = var4.getGuild;
                    var1 = _closure2_slot0;
                    var3 = var3.bind(var4)(var1);
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0005_ip = 59; continue _fun0005 }
 33:
                    var4 = var3.features;
                    var3 = var4.has;
                    var2 = _closure1_slot4;
                    var2 = var2.ENHANCED_ROLE_COLORS;
                    var1 = var3.bind(var4)(var2);
 59:
                    return var1;
                }
            };
            var1 = var9.bind(var10)(var2, var1);
            var2 = 4;
            var2 = var7[var2];
            var7 = var4.bind(var6)(var2);
            var4 = var7.useBoosterEnhancedRoleColors;
            var2 = 'useHasEnhancedRoleColorsForRole';
            var2 = var4.bind(var7)(var8, var2);
            if(!var2) { _fun0004_ip = 102; continue _fun0004 }
 96:
            var4 = null;
            var2 = var4 != var5;
 102:
            if(!var2) { _fun0004_ip = 136; continue _fun0004 }
 105:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 3;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getIsRoleServerBooster;
            var2 = var3.bind(var4)(var5);
 136:
            if(var1) { _fun0004_ip = 142; continue _fun0004 }
 139:
            var1 = var2;
 142:
            return var1;
        }
    };
    var3['useHasEnhancedRoleColorsForRole'] = var4;
    var2 = function getHasEnhancedRoleColorsForRole(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var7 = arg1;
            var2 = _closure1_slot3;
            var1 = var2.getGuild;
            var2 = var1.bind(var2)(var7);
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0006_ip = 55; continue _fun0006 }
 29:
            var5 = var2.features;
            var4 = var5.has;
            var2 = _closure1_slot4;
            var2 = var2.ENHANCED_ROLE_COLORS;
            var1 = var4.bind(var5)(var2);
 55:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 4;
            var2 = var5[var2];
            var5 = undefined;
            var6 = var4.bind(var5)(var2);
            var4 = var6.getBoosterEnhancedRoleColors;
            var2 = 'getHasEnhancedRoleColorsForRole';
            var2 = var4.bind(var6)(var7, var2);
            if(!var2) { _fun0006_ip = 130; continue _fun0006 }
 96:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 3;
            var3 = var6[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.getIsRoleServerBooster;
            var3 = arg2;
            var2 = var4.bind(var5)(var3);
 130:
            if(var1) { _fun0006_ip = 136; continue _fun0006 }
 133:
            var1 = var2;
 136:
            return var1;
        }
    };
    var3['getHasEnhancedRoleColorsForRole'] = var2;
    return var1;
})();
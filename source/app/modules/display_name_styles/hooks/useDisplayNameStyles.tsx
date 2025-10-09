// app/modules/display_name_styles/hooks/useDisplayNameStyles.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.useContext;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/hooks/useDisplayNameStyles.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useDisplayNameStyles() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[0];
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
case 2:
            var3 = var2.userId;
            var _closure2_slot0 = var3;
            var7 = var2.guildId;
            var _closure2_slot1 = var7;
            var8 = var2.pendingDisplayNameStyles;
            var _closure2_slot2 = var4;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 3;
            var2 = var12[var2];
            var9 = var6.bind(var4)(var2);
            var5 = var9.useDisplayNameStylesEnabled;
            var2 = {};
            var10 = 'useDisplayNameStyles';
            var2['location'] = var10;
            var2 = var5.bind(var9)(var2);
            var11 = 4;
            var5 = var12[var11];
            var10 = var6.bind(var4)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0002_ip = 4; continue _fun0002 }
case 2:
                    var3 = _closure1_slot5;
                    var1 = var3.getCurrentUser;
                    var1 = var1.bind(var3)();
                    _fun0002_ip = 5; continue _fun0002;
case 4:
                    var4 = _closure1_slot5;
                    var3 = var4.getUser;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 5:
                    return var1;
                }
            };
            var5 = var9.bind(var10)(var6, var5);
            _closure2_slot2 = var5;
            var9 = _closure1_slot3;
            var10 = _closure1_slot1;
            var6 = 5;
            var6 = var12[var6];
            var6 = var10.bind(var4)(var6);
            var9 = var9.bind(var4)(var6);
            var6 = null;
            if(!(var6 == var7)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            _closure2_slot1 = var9;
            var7 = var9;
case 6:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var11];
            var10 = var10.bind(var4)(var9);
            var9 = var10.useStateFromStores;
            var11 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var11;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var3 = _closure2_slot2;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0003_ip = 8; continue _fun0003 }
case 4:
                    var5 = _closure1_slot4;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 8:
                    return var1;
                }
            };
            var3 = var9.bind(var10)(var3, var1);
            var1 = null;
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            if(!(var4 === var8)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = var6 == var3;
            var2 = undefined;
            if(var9) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = var3.displayNameStyles;
case 14:
            if(!(var6 == var2)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var9 = var6 == var5;
            var3 = undefined;
            if(var9) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var3 = var5.displayNameStyles;
case 18:
            var2 = var3;
case 16:
            _fun0001_ip = 20; continue _fun0001;
case 12:
            var3 = var8;
            if(!(var6 === var8)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var3 = var8;
            if(!(var6 != var7)) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            var6 = var6 == var5;
            var4 = undefined;
            if(var6) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var4 = var5.displayNameStyles;
case 24:
            var3 = var4;
case 21:
            var2 = var3;
case 20:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
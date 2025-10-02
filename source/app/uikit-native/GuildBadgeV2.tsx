// app/uikit-native/GuildBadgeV2.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {};
    var4 = 8;
    var10['marginRight'] = var4;
    var7['icon'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot4 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/GuildBadgeV2.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function GuildBadgeV2(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var9 = var4.guild;
            var10 = var4.size;
            var6 = undefined;
            if(!(var10 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.Sizes;
            var10 = var1.MEDIUM;
case 2:
            var1 = null;
            var3 = Object.create(var1);
            var2 = 0;
            var3['guild'] = var2;
            var3['size'] = var2;
            var14 = {};
            var13 = var4;
            var12 = var3;
            var7 = copyDataProperties(var14, var13, var12);
            var2 = _closure1_slot4;
            var8 = var2.bind(var6)();
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 4;
            var2 = var5[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.useThemeContext;
            var2 = var2.bind(var4)();
            var5 = var2.theme;
            if(!(var1 != var9)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 5;
            var2 = var11[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.getGuildBadgeImageSource;
            var9 = var2.bind(var4)(var9, var5);
            var4 = var1 == var9;
            var2 = null;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot3;
            var4 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 3;
            var3 = var11[var3];
            var4 = var4.bind(var6)(var3);
            var3 = {};
            var3['size'] = var10;
            var3['source'] = var9;
            var8 = var8.icon;
            var3['style'] = var8;
            var8 = true;
            var3['disableColor'] = var8;
            var14 = var3;
            var13 = var7;
            var7 = copyDataProperties(var14, var13);
            var2 = var5.bind(var6)(var4, var3);
case 6:
            return var2;
case 4:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function hasGuildBadge(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 6;
            var3 = var1[var3];
            var5 = undefined;
            var7 = var4.bind(var5)(var3);
            var6 = var7.getGuildTraits;
            var3 = arg1;
            var7 = var6.bind(var7)(var3);
            var3 = 7;
            var3 = var1[var3];
            var6 = var4.bind(var5)(var3);
            var3 = var6.getBadgeCategory;
            var3 = var3.bind(var6)(var7);
            var8 = 5;
            var1 = var1[var8];
            var1 = var4.bind(var5)(var1);
            var1 = var1.badgeVariants;
            var6 = var1[var3];
            var3 = null;
            var1 = var3 != var6;
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var5 = var4.bind(var5)(var2);
            var4 = var5.resolveImageSource;
            var2 = arg2;
            var2 = var4.bind(var5)(var6, var7, var2);
            var1 = var3 != var2;
case 8:
            return var1;
        }
    };
    var3['hasGuildBadge'] = var2;
    return var1;
})();
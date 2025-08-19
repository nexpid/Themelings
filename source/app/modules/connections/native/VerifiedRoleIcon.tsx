// app/modules/connections/native/VerifiedRoleIcon.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot3 = var7;
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var10 = 4;
    var4 = var6[var10];
    var4 = var11.bind(var1)(var4);
    var4 = var4.unsafe_rawColors;
    var4 = var4.WHITE_500;
    var _closure1_slot6 = var4;
    var4 = var6[var10];
    var4 = var11.bind(var1)(var4);
    var4 = var4.unsafe_rawColors;
    var4 = var4.PRIMARY_630;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'alignItems': 'center', 'justifyContent': 'center'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9['borderRadius'] = var10;
    var4['iconContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/connections/native/VerifiedRoleIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VerifiedRoleIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.guildId;
            var17 = var1.role;
            var5 = var1.roleId;
            var14 = var1.roleColor;
            var15 = var1.size;
            var16 = var1.style;
            var12 = var1.displayRoleIcon;
            var1 = _closure1_slot8;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var7 = null;
            if(!(var7 == var14)) { _fun0001_ip = 79; continue _fun0001 }
 61:
            var2 = var7 == var17;
            var1 = undefined;
            if(var2) { _fun0001_ip = 76; continue _fun0001 }
 70:
            var1 = var17.colorString;
 76:
            var14 = var1;
 79:
            if(!(var7 == var14)) { _fun0001_ip = 87; continue _fun0001 }
 83:
            var14 = _closure1_slot3;
 87:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 6;
            var1 = var3[var1];
            var10 = var2.bind(var4)(var1);
            var9 = var10.getHigherContrastColor;
            var1 = {};
            var1['backgroundColor'] = var14;
            var18 = _closure1_slot6;
            var11 = new Array(2);
            var11[0] = var18;
            var18 = _closure1_slot7;
            var11[1] = var18;
            var1['colors'] = var11;
            var9 = var9.bind(var10)(var1);
            var10 = 8;
            var11 = var15 / var10;
            var1 = 2;
            var1 = var11 * var1;
            var11 = var15 - var1;
            var1 = 7;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useRoleIcon;
            var1 = {};
            var1['guildId'] = var8;
            if(!(var7 == var5)) { _fun0001_ip = 211; continue _fun0001 }
 194:
            var18 = var7 == var17;
            var8 = undefined;
            if(var18) { _fun0001_ip = 208; continue _fun0001 }
 203:
            var8 = var17.id;
 208:
            var5 = var8;
 211:
            if(!(var7 == var5)) { _fun0001_ip = 219; continue _fun0001 }
 215:
            var5 = _closure1_slot4;
 219:
            var1['roleId'] = var5;
            var1['size'] = var11;
            var5 = var2.bind(var3)(var1);
            var3 = _closure1_slot5;
            var2 = _closure1_slot2;
            var1 = {};
            var8 = new Array(3);
            var8[0] = var16;
            var13 = var13.iconContainer;
            var8[1] = var13;
            var13 = {};
            var13['width'] = var15;
            var13['height'] = var15;
            var13['backgroundColor'] = var14;
            var8[2] = var13;
            var1['style'] = var8;
            var8 = false;
            if(!(var8 !== var12)) { _fun0001_ip = 293; continue _fun0001 }
 289:
            if(!(var7 == var5)) { _fun0001_ip = 354; continue _fun0001 }
 293:
            var8 = _closure1_slot5;
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var10];
            var6 = var7.bind(var4)(var6);
            var7 = var6.LinkIcon;
            var6 = {};
            var10 = {};
            var10['width'] = var11;
            var10['height'] = var11;
            var6['style'] = var10;
            var10 = 'custom';
            var6['size'] = var10;
            var6['color'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 354:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
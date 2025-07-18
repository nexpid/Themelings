// app/modules/connections/native/VerifiedRoleIcon.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.DEFAULT_ROLE_COLOR;
    var _closure1_slot4 = var7;
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var10 = 4;
    var4 = var6[var10];
    var4 = var11.bind(var1)(var4);
    var4 = var4.unsafe_rawColors;
    var4 = var4.WHITE_500;
    var _closure1_slot7 = var4;
    var4 = var6[var10];
    var4 = var11.bind(var1)(var4);
    var4 = var4.unsafe_rawColors;
    var4 = var4.PRIMARY_630;
    var _closure1_slot8 = var4;
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
    var _closure1_slot9 = var4;
    var4 = 11;
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
            var16 = var1.role;
            var5 = var1.roleId;
            var12 = var1.roleColor;
            var13 = var1.size;
            var15 = var1.style;
            var10 = var1.displayRoleIcon;
            var1 = _closure1_slot9;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var7 = null;
            if(!(var7 == var12)) { _fun0001_ip = 79; continue _fun0001 }
 61:
            var2 = var7 == var16;
            var1 = undefined;
            if(var2) { _fun0001_ip = 76; continue _fun0001 }
 70:
            var1 = var16.colorString;
 76:
            var12 = var1;
 79:
            if(!(var7 == var12)) { _fun0001_ip = 118; continue _fun0001 }
 83:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.int2hex;
            var1 = _closure1_slot4;
            var12 = var2.bind(var3)(var1);
 118:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var14 = var2.bind(var4)(var1);
            var9 = var14.getHigherContrastColor;
            var1 = {};
            var1['backgroundColor'] = var12;
            var18 = _closure1_slot7;
            var17 = new Array(2);
            var17[0] = var18;
            var18 = _closure1_slot8;
            var17[1] = var18;
            var1['colors'] = var17;
            var9 = var9.bind(var14)(var1);
            var1 = 8;
            var17 = var13 / var1;
            var14 = 2;
            var14 = var17 * var14;
            var14 = var13 - var14;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useRoleIcon;
            var1 = {};
            var1['guildId'] = var8;
            if(!(var7 == var5)) { _fun0001_ip = 239; continue _fun0001 }
 222:
            var17 = var7 == var16;
            var8 = undefined;
            if(var17) { _fun0001_ip = 236; continue _fun0001 }
 231:
            var8 = var16.id;
 236:
            var5 = var8;
 239:
            if(!(var7 == var5)) { _fun0001_ip = 247; continue _fun0001 }
 243:
            var5 = _closure1_slot5;
 247:
            var1['roleId'] = var5;
            var1['size'] = var14;
            var5 = var2.bind(var3)(var1);
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var8 = new Array(3);
            var8[0] = var15;
            var11 = var11.iconContainer;
            var8[1] = var11;
            var11 = {};
            var11['width'] = var13;
            var11['height'] = var13;
            var11['backgroundColor'] = var12;
            var8[2] = var11;
            var1['style'] = var8;
            var8 = false;
            if(!(var8 !== var10)) { _fun0001_ip = 321; continue _fun0001 }
 317:
            if(!(var7 == var5)) { _fun0001_ip = 412; continue _fun0001 }
 321:
            var8 = _closure1_slot6;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 9;
            var6 = var12[var10];
            var7 = var11.bind(var4)(var6);
            var6 = {};
            var13 = {};
            var13['width'] = var14;
            var13['height'] = var14;
            var6['style'] = var13;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.Sizes;
            var10 = var10.CUSTOM;
            var6['size'] = var10;
            var10 = 10;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var6['source'] = var10;
            var6['color'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 412:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
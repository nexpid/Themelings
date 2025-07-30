// app/modules/connections/native/OfficialConnectionIcon.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
    var7 = var4.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot4 = var7;
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'left': 0, 'top': 0};
    var4['verifiedCheck'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/connections/native/OfficialConnectionIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function OfficialConnectionIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var6 = var1.role;
            var13 = var1.roleId;
            var9 = var1.roleColor;
            var12 = var1.size;
            var8 = var1.style;
            var10 = var1.displayRoleIcon;
            var3 = _closure1_slot8;
            var4 = undefined;
            var17 = var3.bind(var4)();
            var7 = {};
            var7['width'] = var12;
            var7['height'] = var12;
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 5;
            var3 = var11[var3];
            var11 = var5.bind(var4)(var3);
            var5 = var11.useRoleIcon;
            var3 = {};
            var3['guildId'] = var2;
            var2 = null;
            if(!(var2 == var13)) { _fun0001_ip = 120; continue _fun0001 }
 103:
            var15 = var2 == var6;
            var14 = undefined;
            if(var15) { _fun0001_ip = 117; continue _fun0001 }
 112:
            var14 = var6.id;
 117:
            var13 = var14;
 120:
            if(!(var2 == var13)) { _fun0001_ip = 128; continue _fun0001 }
 124:
            var13 = _closure1_slot5;
 128:
            var3['roleId'] = var13;
            var3['size'] = var12;
            var5 = var5.bind(var11)(var3);
            var3 = false;
            if(!(var3 !== var10)) { _fun0001_ip = 155; continue _fun0001 }
 148:
            if(!(var2 == var5)) { _fun0001_ip = 541; continue _fun0001 }
 155:
            if(!(var2 == var9)) { _fun0001_ip = 177; continue _fun0001 }
 159:
            var10 = var2 == var6;
            var3 = undefined;
            if(var10) { _fun0001_ip = 174; continue _fun0001 }
 168:
            var3 = var6.colorString;
 174:
            var9 = var3;
 177:
            if(!(var2 == var9)) { _fun0001_ip = 185; continue _fun0001 }
 181:
            var9 = _closure1_slot4;
 185:
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 6;
            var2 = var11[var6];
            var2 = var3.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            var13 = var2.WHITE_500;
            var3 = _closure1_slot0;
            var2 = 7;
            var10 = var11[var2];
            var12 = var3.bind(var4)(var10);
            var10 = var12.hex2int;
            var10 = var10.bind(var12)(var9);
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getDarkness;
            var3 = var2.bind(var3)(var10);
            var2 = 0.3;
            var11 = var9;
            if(!(var3 < var2)) { _fun0001_ip = 308; continue _fun0001 }
 280:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var3.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            var13 = var2.PRIMARY_630;
 308:
            var6 = _closure1_slot7;
            var3 = _closure1_slot3;
            var2 = {};
            var9 = new Array(2);
            var9[0] = var8;
            var9[1] = var7;
            var2['style'] = var9;
            var12 = _closure1_slot6;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 8;
            var9 = var16[var14];
            var10 = var15.bind(var4)(var9);
            var9 = {};
            var19 = var17.verifiedCheck;
            var18 = new Array(2);
            var18[0] = var19;
            var18[1] = var7;
            var9['style'] = var18;
            var18 = var16[var14];
            var18 = var15.bind(var4)(var18);
            var18 = var18.Sizes;
            var18 = var18.CUSTOM;
            var9['size'] = var18;
            var18 = 9;
            var18 = var16[var18];
            var18 = var15.bind(var4)(var18);
            var9['source'] = var18;
            var9['color'] = var11;
            var10 = var12.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = var16[var14];
            var11 = var15.bind(var4)(var10);
            var10 = {};
            var18 = var17.verifiedCheck;
            var17 = new Array(2);
            var17[0] = var18;
            var17[1] = var7;
            var10['style'] = var17;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.Sizes;
            var14 = var14.CUSTOM;
            var10['size'] = var14;
            var14 = 10;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var10['source'] = var14;
            var10['color'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var2['children'] = var9;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 541:
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
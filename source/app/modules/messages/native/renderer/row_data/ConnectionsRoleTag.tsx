// app/modules/messages/native/renderer/row_data/ConnectionsRoleTag.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.processColor;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.makeKeyedDataComponent;
    var4 = 'connectionsRoleTag';
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/ConnectionsRoleTag.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function ConnectionsRoleTag(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.message;
            var3 = var1.getChannelId;
            var7 = var3.bind(var1)();
            var _closure2_slot0 = var7;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 9;
            var3 = var8[var3];
            var5 = undefined;
            var10 = var4.bind(var5)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(2);
            var4[0] = var3;
            var3 = _closure1_slot5;
            var4[1] = var3;
            var3 = new Array(1);
            var3[0] = var7;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getGuild;
                    var5 = _closure1_slot4;
                    var4 = var5.getChannel;
                    var1 = _closure2_slot0;
                    var4 = var4.bind(var5)(var1);
                    var1 = null;
                    var5 = var1 == var4;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 49; continue _fun0002 }
 44:
                    var1 = var4.guild_id;
 49:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var4 = var9.bind(var10)(var4, var2, var3);
            var3 = _closure1_slot1;
            var2 = 10;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var1 = var1.author;
            var15 = var1.id;
            var13 = true;
            var17 = undefined;
            var16 = var4;
            var14 = var7;
            var9 = var17[var3](var16, var15, var14, var13, var12);
            var1 = null;
            if(!(var1 != var9)) { _fun0001_ip = 339; continue _fun0001 }
 146:
            var8 = var9.colorString;
            if(!(var1 == var8)) { _fun0001_ip = 160; continue _fun0001 }
 156:
            var8 = _closure1_slot6;
 160:
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 6;
            var2 = var11[var4];
            var2 = var3.bind(var5)(var2);
            var2 = var2.unsafe_rawColors;
            var7 = var2.WHITE_500;
            var3 = _closure1_slot0;
            var2 = 7;
            var10 = var11[var2];
            var12 = var3.bind(var5)(var10);
            var10 = var12.hex2int;
            var10 = var10.bind(var12)(var8);
            var2 = var11[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getDarkness;
            var3 = var2.bind(var3)(var10);
            var2 = 0.3;
            if(!(var3 < var2)) { _fun0001_ip = 280; continue _fun0001 }
 252:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var2 = var3.bind(var5)(var2);
            var2 = var2.unsafe_rawColors;
            var7 = var2.PRIMARY_630;
 280:
            var4 = _closure1_slot7;
            var3 = _closure1_slot8;
            var2 = {};
            var10 = var9.id;
            var2['id'] = var10;
            var9 = var9.name;
            var2['name'] = var9;
            var6 = _closure1_slot3;
            var8 = var6.bind(var5)(var8);
            var2['backgroundColor'] = var8;
            var6 = var6.bind(var5)(var7);
            var2['iconColor'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 339:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createConnectionsRoleTag(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var6 = arg1;
            var5 = var6.colorString;
            var1 = null;
            if(!(var1 == var5)) { _fun0003_ip = 22; continue _fun0003 }
 15:
            var5 = _closure1_slot6;
 22:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 6;
            var1 = var10[var8];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var1.unsafe_rawColors;
            var3 = var1.WHITE_500;
            var7 = _closure1_slot0;
            var1 = 7;
            var9 = var10[var1];
            var11 = var7.bind(var4)(var9);
            var9 = var11.hex2int;
            var9 = var9.bind(var11)(var5);
            var1 = var10[var1];
            var7 = var7.bind(var4)(var1);
            var1 = var7.getDarkness;
            var7 = var1.bind(var7)(var9);
            var1 = 0.3;
            if(!(var7 < var1)) { _fun0003_ip = 147; continue _fun0003 }
 119:
            var7 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var7.bind(var4)(var1);
            var1 = var1.unsafe_rawColors;
            var3 = var1.PRIMARY_630;
 147:
            var1 = {};
            var7 = var6.id;
            var1['id'] = var7;
            var6 = var6.name;
            var1['name'] = var6;
            var2 = _closure1_slot3;
            var5 = var2.bind(var4)(var5);
            var1['backgroundColor'] = var5;
            var2 = var2.bind(var4)(var3);
            var1['iconColor'] = var2;
            return var1;
        }
    };
    var3['createConnectionsRoleTag'] = var2;
    return var1;
})();
// app/modules/connections/useVisibleConnectionsRole.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/connections/useVisibleConnectionsRole.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useVisibleConnectionsRole(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var11 = arg1;
            var6 = arg2;
            var9 = arguments[2];
            var5 = arguments[3];
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var6;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 30; continue _fun0001 }
 28:
            var9 = null;
 30:
            var _closure2_slot2 = var9;
            if(!(var5 === var4)) { _fun0001_ip = 40; continue _fun0001 }
 38:
            var5 = false;
 40:
            var _closure2_slot3 = var4;
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var3 = 3;
            var7 = var10[var3];
            var14 = var8.bind(var4)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot3;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 48; continue _fun0002 }
 16:
                    var5 = _closure1_slot3;
                    var4 = var5.getMember;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
 48:
                    return var1;
                }
            };
            var6 = var13.bind(var14)(var12, var6, var7);
            var7 = var10[var3];
            var15 = var8.bind(var4)(var7);
            var14 = var15.useStateFromStores;
            var7 = _closure1_slot2;
            var13 = new Array(1);
            var13[0] = var7;
            var12 = new Array(1);
            var12[0] = var9;
            var9 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var14.bind(var15)(var13, var9, var12);
            _closure2_slot3 = var9;
            var12 = var10[var3];
            var15 = var8.bind(var4)(var12);
            var14 = var15.useStateFromStores;
            var13 = new Array(1);
            var13[0] = var7;
            var12 = new Array(1);
            var12[0] = var9;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot2;
                    var2 = var3.getChannel;
                    var5 = _closure2_slot3;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0003_ip = 40; continue _fun0003 }
 30:
                    var4 = _closure2_slot3;
                    var1 = var4.parent_id;
 40:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var7 = var14.bind(var15)(var13, var7, var12);
            var3 = var10[var3];
            var10 = var8.bind(var4)(var3);
            var8 = var10.useStateFromStores;
            var12 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var12;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0004_ip = 45; continue _fun0004 }
 18:
                    var4 = _closure1_slot4;
                    var3 = var4.getRoles;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 45:
                    return var1;
                }
            };
            var10 = var8.bind(var10)(var3, var1);
            var8 = null;
            var3 = var8 == var11;
            var1 = null;
            if(var3) { _fun0001_ip = 363; continue _fun0001 }
 256:
            var3 = var8 == var10;
            var1 = null;
            if(var3) { _fun0001_ip = 363; continue _fun0001 }
 265:
            var3 = var8 == var6;
            var1 = null;
            if(var3) { _fun0001_ip = 363; continue _fun0001 }
 274:
            var3 = _closure1_slot0;
            var12 = _closure1_slot1;
            var2 = 4;
            var2 = var12[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.getVisibleConnectionsRole;
            var2 = {};
            var2['guild'] = var11;
            var2['guildRoles'] = var10;
            var2['guildMember'] = var6;
            var6 = var9;
            if(!(var8 != var9)) { _fun0001_ip = 349; continue _fun0001 }
 323:
            var10 = var9.isThread;
            var10 = var10.bind(var9)();
            var6 = var9;
            if(!var10) { _fun0001_ip = 349; continue _fun0001 }
 339:
            var6 = var9;
            if(!(var8 != var7)) { _fun0001_ip = 349; continue _fun0001 }
 346:
            var6 = var7;
 349:
            var2['channel'] = var6;
            var2['onlyChannelConnectionRoles'] = var5;
            var1 = var3.bind(var4)(var2);
 363:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
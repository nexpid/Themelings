// app/modules/threads/ThreadMemberListHooks.tsx
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
    var4 = var4.StatusTypes;
    var _closure1_slot6 = var4;
    var4 = new Array(0);
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/ThreadMemberListHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useThreadMemberListSections(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg2;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var5;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 4;
            var3 = var7[var3];
            var6 = undefined;
            var4 = var4.bind(var6)(var3);
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var5 = var4 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0002_ip = 29; continue _fun0002 }
 20:
                    var5 = _closure2_slot1;
                    var3 = var5.id;
 29:
                    if(!(var4 != var3)) { _fun0002_ip = 100; continue _fun0002 }
 33:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 5;
                    var3 = var8[var3];
                    var6 = var7.bind(var1)(var3);
                    var5 = var6.subscribeChannel;
                    var3 = _closure2_slot1;
                    var4 = var3.id;
                    var3 = _closure2_slot0;
                    var2 = 6;
                    var2 = var8[var2];
                    var2 = var7.bind(var1)(var2);
                    var2 = var2.DEFAULT_RANGES;
                    var2 = var5.bind(var6)(var4, var3, var2);
 100:
                    return var1;
                }
            };
            var3 = var4.bind(var6)(var3);
            var4 = _closure1_slot0;
            var3 = 7;
            var8 = var7[var3];
            var11 = var4.bind(var6)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0003_ip = 45; continue _fun0003 }
 18:
                    var4 = _closure1_slot4;
                    var3 = var4.getRoles;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 45:
                    return var1;
                }
            };
            var10 = var10.bind(var11)(var9, var8);
            var _closure2_slot2 = var10;
            var3 = var7[var3];
            var7 = var4.bind(var6)(var3);
            var6 = var7.useStateFromStoresObject;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = {};
                var4 = _closure1_slot5;
                var2 = var4.getMemberListVersion;
                var3 = _closure2_slot0;
                var2 = var2.bind(var4)(var3);
                var1['version'] = var2;
                var2 = var4.getMemberListSections;
                var2 = var2.bind(var4)(var3);
                var1['members'] = var2;
                return var1;
            };
            var3 = var6.bind(var7)(var4, var3);
            var9 = var3.version;
            var4 = var3.members;
            var _closure2_slot3 = var4;
            var3 = null;
            var8 = var3 == var5;
            var _closure2_slot4 = var8;
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var5 = new Array(4);
            var5[0] = var10;
            var5[1] = var4;
            var5[2] = var9;
            var5[3] = var8;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure2_slot4;
                    if(var4) { _fun0004_ip = 175; continue _fun0004 }
 18:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 8;
                    var4 = var5[var4];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var4);
                    var3 = _closure2_slot2;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.values;
                    var5 = var3.bind(var4)();
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.hoist;
                        return var1;
                    };
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.sortBy;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.position;
                        return var1;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.reverse;
                    var5 = var3.bind(var4)();
                    var4 = var5.map;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.value;
                    var4 = var3.bind(var4)();
                    var6 = var4.push;
                    var3 = _closure1_slot6;
                    var5 = var3.ONLINE;
                    var3 = var3.OFFLINE;
                    var3 = var6.bind(var4)(var5, var3);
                    var3 = var4.map;
                    var2 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var2 = arg1;
                            var1 = {};
                            var3 = _closure1_slot6;
                            var3 = var3.ONLINE;
                            if(!(var2 !== var3)) { _fun0005_ip = 154; continue _fun0005 }
 25:
                            var3 = _closure1_slot6;
                            var3 = var3.OFFLINE;
                            if(!(var2 !== var3)) { _fun0005_ip = 95; continue _fun0005 }
 39:
                            var5 = _closure2_slot2;
                            var3 = null;
                            var7 = var3 == var5;
                            var5 = undefined;
                            if(var7) { _fun0005_ip = 79; continue _fun0005 }
 57:
                            var6 = _closure2_slot2;
                            var6 = var6[var2];
                            var7 = var3 == var6;
                            var5 = undefined;
                            if(var7) { _fun0005_ip = 79; continue _fun0005 }
 74:
                            var5 = var6.name;
 79:
                            var6 = var3 != var5;
                            var3 = '';
                            if(!var6) { _fun0005_ip = 93; continue _fun0005 }
 90:
                            var3 = var5;
 93:
                            _fun0005_ip = 152; continue _fun0005;
 95:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var5 = 9;
                            var6 = var10[var5];
                            var8 = undefined;
                            var6 = var9.bind(var8)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var10[var5];
                            var5 = var9.bind(var8)(var5);
                            var5 = var5.t;
                            var5 = var5.Vv0abG;
                            var3 = var6.bind(var7)(var5);
 152:
                            _fun0005_ip = 211; continue _fun0005;
 154:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 9;
                            var5 = var9[var4];
                            var7 = undefined;
                            var5 = var8.bind(var7)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var9[var4];
                            var4 = var8.bind(var7)(var4);
                            var4 = var4.t;
                            var4 = var4.WbGtnJ;
                            var3 = var5.bind(var6)(var4);
 211:
                            var1['label'] = var3;
                            var3 = _closure2_slot3;
                            var4 = null;
                            var6 = var4 == var3;
                            var3 = undefined;
                            if(var6) { _fun0005_ip = 256; continue _fun0005 }
 233:
                            var5 = _closure2_slot3;
                            var5 = var5[var2];
                            var6 = var4 == var5;
                            var3 = undefined;
                            if(var6) { _fun0005_ip = 256; continue _fun0005 }
 250:
                            var3 = var5.userIds;
 256:
                            if(!(var4 == var3)) { _fun0005_ip = 264; continue _fun0005 }
 260:
                            var3 = new Array(0);
 264:
                            var1['userIds'] = var3;
                            var1['id'] = var2;
                            var1['roleId'] = var2;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var2;
 175:
                    var1 = _closure1_slot7;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var5);
            if(!(var3 == var4)) { _fun0001_ip = 219; continue _fun0001 }
 215:
            var1 = _closure1_slot7;
 219:
            return var1;
        }
    };
    var3['useThreadMemberListSections'] = var2;
    return var1;
})();
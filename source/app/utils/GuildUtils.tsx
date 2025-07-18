// app/utils/GuildUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var11 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function requestMembersDebounced(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var1 = arg3;
            var _closure2_slot2 = var1;
            var4 = _closure1_slot4;
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 55; continue _fun0001 }
 36:
            var1 = global;
            var5 = var1.clearTimeout;
            var4 = _closure1_slot4;
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
 55:
            var1 = global;
            var5 = var1.setTimeout;
            var1 = undefined;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = new Array(0);
                    var _closure3_slot0 = var5;
                    var6 = function pushGuild(arg1) {
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var _closure3_slot1 = var6;
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 112; continue _fun0002 }
 32:
                    var4 = global;
                    var8 = var4.Array;
                    var7 = var8.isArray;
                    var4 = _closure2_slot0;
                    var4 = var7.bind(var8)(var4);
                    if(var4) { _fun0002_ip = 91; continue _fun0002 }
 57:
                    var8 = _closure1_slot5;
                    var7 = var8.getGuild;
                    var4 = _closure2_slot0;
                    var4 = var7.bind(var8)(var4);
                    if(!(var3 != var4)) { _fun0002_ip = 160; continue _fun0002 }
 82:
                    var3 = undefined;
                    var3 = var6.bind(var3)(var4);
                    _fun0002_ip = 160; continue _fun0002;
 91:
                    var4 = _closure2_slot0;
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var3 = _closure1_slot5;
                            var2 = var3.getGuild;
                            var1 = arg1;
                            var3 = var2.bind(var3)(var1);
                            var1 = null;
                            if(!(var1 != var3)) { _fun0003_ip = 40; continue _fun0003 }
 26:
                            var2 = _closure3_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
 40:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    _fun0002_ip = 160; continue _fun0002;
 112:
                    var3 = var5.push;
                    var4 = _closure1_slot5;
                    var2 = var4.getGuildIds;
                    var10 = var2.bind(var4)();
                    var2 = new Array(0);
                    var9 = 0;
                    var11 = var2;
                    var4 = arraySpread(var11, var10, var9);
                    var11 = var3;
                    var10 = var2;
                    var9 = var5;
                    var2 = apply(var11, var10, var9);
 160:
                    var3 = var5.length;
                    var2 = 0;
                    if(!(var3 > var2)) { _fun0002_ip = 227; continue _fun0002 }
 171:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.requestMembers;
                    var6 = _closure2_slot1;
                    var2 = var6.toLocaleLowerCase;
                    var2 = var2.bind(var6)();
                    var1 = _closure2_slot2;
                    var1 = var3.bind(var4)(var5, var2, var1);
 227:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = 200;
            var2 = var5.bind(var1)(var4, var2);
            var _closure1_slot4 = var2;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function getCachedResults(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var3 = null;
            var2 = var3 != var1;
            var6 = '';
            var5 = var6;
            if(!var2) { _fun0004_ip = 22; continue _fun0004 }
 19:
            var5 = var1;
 22:
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var2 = ':';
            var1 = arg2;
            var5 = var4.bind(var6)(var5, var2, var1);
            var4 = _closure1_slot7;
            var1 = var4.get;
            var1 = var1.bind(var4)(var5);
            if(!(var3 == var1)) { _fun0004_ip = 91; continue _fun0004 }
 70:
            var4 = _closure1_slot7;
            var3 = var4.set;
            var2 = true;
            var2 = var3.bind(var4)(var5, var2);
            var2 = undefined;
            return var2;
 91:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var2 = function getGuildNameSuggestion(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var7 = arg1;
            var3 = _closure1_slot6;
            var1 = var3.getCurrentUser;
            var4 = var1.bind(var3)();
            var3 = _closure1_slot2;
            var5 = _closure1_slot3;
            var1 = 5;
            var1 = var5[var1];
            var6 = undefined;
            var3 = var3.bind(var6)(var1);
            var1 = var3.getName;
            var10 = var1.bind(var3)(var4);
            var8 = null;
            var3 = var8 == var10;
            var4 = '';
            var1 = var4;
            if(var3) { _fun0005_ip = 179; continue _fun0005 }
 68:
            var3 = var10.length;
            var9 = 0;
            var1 = var4;
            if(!(var9 !== var3)) { _fun0005_ip = 179; continue _fun0005 }
 82:
            var3 = _closure1_slot0;
            var11 = _closure1_slot3;
            var2 = 6;
            var4 = var11[var2];
            var4 = var3.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var11[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var3 = var2.Y6Qfjo;
            var2 = {};
            var6 = var10;
            if(!(var8 != var7)) { _fun0005_ip = 169; continue _fun0005 }
 143:
            var7 = var7.truncateUsername;
            var6 = var10;
            if(!var7) { _fun0005_ip = 169; continue _fun0005 }
 155:
            var8 = var10.slice;
            var7 = 20;
            var6 = var8.bind(var10)(var9, var7);
 169:
            var2['username'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 179:
            return var1;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var10 = 1;
    var4 = var7[var10];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var7[var4];
    var9 = var11.bind(var1)(var4);
    var4 = {};
    var8 = 3;
    var8 = var7[var8];
    var8 = var11.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.MINUTE;
    var8 = var10 * var8;
    var4['maxAge'] = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var15 = var8;
    var14 = var4;
    var4 = new var15[var9](var14, var13);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot7 = var4;
    var4 = {};
    var4['getGuildNameSuggestion'] = var2;
    var5 = function requestMembers(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var4 = arguments[2];
            var _closure2_slot0 = var5;
            var1 = undefined;
            if(!(var4 === var1)) { _fun0006_ip = 24; continue _fun0006 }
 21:
            var4 = 10;
 24:
            var _closure2_slot1 = var1;
            var2 = global;
            var3 = var2.Array;
            var2 = var3.isArray;
            var7 = var2.bind(var3)(var6);
            var3 = new Array(0);
            _closure2_slot1 = var3;
            if(var7) { _fun0006_ip = 85; continue _fun0006 }
 57:
            var2 = _closure1_slot9;
            var9 = var2.bind(var1)(var6, var5);
            var2 = null;
            var9 = var2 == var9;
            var2 = false;
            if(!var9) { _fun0006_ip = 102; continue _fun0006 }
 81:
            var2 = true;
            _fun0006_ip = 102; continue _fun0006;
 85:
            var9 = var6.forEach;
            var8 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = arg1;
                    var5 = _closure1_slot9;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4, var3);
                    var3 = null;
                    if(!(var3 == var5)) { _fun0007_ip = 45; continue _fun0007 }
 31:
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
 45:
                    return var1;
                }
            };
            var8 = var9.bind(var6)(var8);
            var2 = false;
 102:
            var9 = var3.length;
            var8 = 0;
            if(!(var9 > var8)) { _fun0006_ip = 116; continue _fun0006 }
 113:
            if(var7) { _fun0006_ip = 135; continue _fun0006 }
 116:
            if(!var2) { _fun0006_ip = 149; continue _fun0006 }
 119:
            var2 = _closure1_slot8;
            var2 = var2.bind(var1)(var6, var5, var4);
            _fun0006_ip = 149; continue _fun0006;
 135:
            var2 = _closure1_slot8;
            var2 = var2.bind(var1)(var3, var5, var4);
 149:
            return var1;
        }
    };
    var4['requestMembers'] = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/GuildUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['getGuildNameSuggestion'] = var2;
    return var1;
})();
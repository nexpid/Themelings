// app/modules/app_database/modules/messages/KvMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot7;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot7;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot5 = var4;
    var2 = function() {
        var5 = function KvMessage() {
            var4 = _closure1_slot1;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var1 = {};
        var3 = 'fromMessage';
        var1['key'] = var3;
        var3 = function value(arg1, arg2, arg3, arg4) {
            var4 = arg3;
            var3 = _closure2_slot0;
            var2 = var3.deriveMemberUsers;
            var1 = arg1;
            var5 = var2.bind(var3)(var1, var4);
            var3 = _closure1_slot0;
            var2 = undefined;
            var1 = 2;
            var2 = var3.bind(var2)(var5, var1);
            var1 = 0;
            var3 = var2[var1];
            var1 = 1;
            var2 = var2[var1];
            var1 = {};
            var5 = var4.id;
            var1['id'] = var5;
            var5 = arg2;
            var1['channelId'] = var5;
            var1['message'] = var4;
            var1['members'] = var3;
            var1['users'] = var2;
            var2 = arg4;
            var1['connectionId'] = var2;
            return var1;
        };
        var1['value'] = var3;
        var3 = new Array(2);
        var3[0] = var1;
        var1 = {};
        var6 = 'deriveMemberUsers';
        var1['key'] = var6;
        var2 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var11 = arg1;
                var2 = arg2;
                var1 = global;
                var3 = var1.Set;
                var1 = var2.author;
                var10 = null;
                var5 = var10 == var1;
                var9 = undefined;
                var4 = undefined;
                if(var5) { _fun0004_ip = 36; continue _fun0004 }
case 33:
                var4 = var1.id;
case 36:
                var1 = new Array(2);
                var1[0] = var4;
                var5 = var2.interaction;
                var6 = var10 == var5;
                var4 = undefined;
                if(var6) { _fun0004_ip = 37; continue _fun0004 }
case 7:
                var5 = var5.user;
                var4 = var5.id;
case 37:
                var1[1] = var4;
                var6 = var2.mentions;
                var2 = var10 == var6;
                var4 = undefined;
                if(var2) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                var5 = var6.map;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var4 = var5.bind(var6)(var2);
case 38:
                if(!(var10 == var4)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                var4 = new Array(0);
case 40:
                var17 = 2;
                var19 = var1;
                var18 = var4;
                var2 = arraySpread(var19, var18, var17);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var20 = var2;
                var19 = var1;
                var1 = new var20[var3](var19, var18);
                var4 = var1 instanceof Object ? var1 : var2;
                var3 = new Array(0);
                var2 = new Array(0);
                var1 = _closure1_slot6;
                var7 = var1.bind(var9)(var4);
                var4 = var7.bind(var9)();
                var1 = var4.done;
                var6 = var4;
                var5 = undefined;
                var4 = undefined;
                if(var1) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                var15 = var6.value;
                if(!(var10 != var15)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                var12 = _closure1_slot4;
                var1 = var12.getUser;
                var12 = var1.bind(var12)(var15);
                var14 = _closure1_slot3;
                var13 = var14.getTrueMember;
                var1 = var11;
                if(!(var10 == var1)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                var1 = _closure1_slot5;
case 46:
                var1 = var13.bind(var14)(var1, var15);
                if(!(var10 != var12)) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                var13 = var2.push;
                var13 = var13.bind(var2)(var12);
case 48:
                var5 = var12;
                var4 = var1;
                if(!(var10 != var1)) { _fun0004_ip = 44; continue _fun0004 }
case 24:
                var13 = var3.push;
                var13 = var13.bind(var3)(var1);
                var5 = var12;
                var4 = var1;
case 44:
                var12 = var7.bind(var9)();
                var1 = var12.done;
                var6 = var12;
                if(!var1) { _fun0004_ip = 43; continue _fun0004 }
case 42:
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[1] = var1;
        var2 = undefined;
        var1 = null;
        var1 = var4.bind(var2)(var5, var1, var3);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/messages/KvMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var3['KvMessage'] = var2;
    return var1;
})();
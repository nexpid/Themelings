// app/modules/app_database/modules/UserSearchItems.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot14;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot14;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RelationshipTypes;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'UserSearchItems';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot11 = var4;
    var4 = false;
    var _closure1_slot12 = var4;
    var2 = function() {
        var4 = _closure1_slot5;
        var3 = function UserSearchItems() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot4;
            var2 = _closure2_slot1;
            var1 = undefined;
            var2 = var5.bind(var1)(var3, var2);
            var2 = {};
            var5 = var3.handlePostConnectionOpen;
            var2['POST_CONNECTION_OPEN'] = var5;
            var4 = function WRITE_CACHES(arg1, arg2) {
                var3 = _closure3_slot0;
                var2 = var3.handleWriteCaches;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['WRITE_CACHES'] = var4;
            var3['actions'] = var2;
            return var1;
        };
        var _closure2_slot1 = var3;
        var5 = {};
        var2 = 'getAll';
        var5['key'] = var2;
        var7 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 171; continue _fun0004 }
 10:
                    var3 = global;
                    var4 = var3.performance;
                    var2 = var4.now;
                    var7 = var2.bind(var4)();
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 9;
                    var5 = var5[var2];
                    var2 = undefined;
                    var5 = var6.bind(var2)(var5);
                    var2 = var5.userSearchItems;
                    var5 = var2.bind(var5)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0004_ip = 164; continue _fun0004 }
 68:
                    var2 = var5.getMany;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=82);
 80:
                    return var2;
 82:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 161; continue _fun0004 }
 88:
                    var6 = var3.performance;
                    var5 = var6.now;
                    var6 = var5.bind(var6)();
                    var5 = _closure1_slot11;
                    var4 = var5.log;
                    var14 = var6 - var7;
                    var12 = var2.length;
                    var3 = var3.HermesInternal;
                    var8 = var3.concat;
                    var15 = 'asynchronously loaded in ';
                    var13 = 'ms (userSearchItems: ';
                    var11 = ')';
                    var3 = var15[var8](var14, var13, var12, var11, var10);
                    var3 = var4.bind(var5)(var3);
                    return var2;
 161:
                    return var2;
 164:
                    var2 = new Array(0);
                    return var2;
 171:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var7.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var1 = function getAll() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'resetInMemoryState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'shouldUseCache';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot12;
            var1 = !var1;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'handlePostConnectionOpen';
        var5['key'] = var7;
        var7 = function value() {
            var1 = true;
            _closure1_slot12 = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handleWriteCaches';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var5 = {};
                var4 = _closure1_slot13;
                var3 = _closure1_slot8;
                var1 = var3.getFriendIDs;
                var3 = var1.bind(var3)();
                var1 = undefined;
                var8 = var4.bind(var1)(var3);
                var4 = var8.bind(var1)();
                var3 = var4.done;
                var11 = null;
                var9 = 10;
                var7 = var4;
                var6 = undefined;
                var4 = undefined;
                if(var3) { _fun0005_ip = 231; continue _fun0005 }
 57:
                var14 = var7.value;
                var12 = _closure1_slot9;
                var3 = var12.getUser;
                var15 = var3.bind(var12)(var14);
                if(!(var11 != var15)) { _fun0005_ip = 213; continue _fun0005 }
 84:
                var12 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var9];
                var12 = var12.bind(var1)(var3);
                var3 = var12.getNames;
                var3 = var3.bind(var12)(var15);
                var12 = var3.names;
                var3 = var3.nick;
                var13 = {};
                var13['id'] = var14;
                var16 = _closure1_slot10;
                var16 = var16.FRIEND;
                var13['type'] = var16;
                var13['user'] = var15;
                var13['names'] = var12;
                var13['nick'] = var3;
                var12 = _closure1_slot7;
                var3 = var12.getUserAffinity;
                var3 = var3.bind(var12)(var14);
                var15 = var11 == var3;
                var12 = undefined;
                if(var15) { _fun0005_ip = 186; continue _fun0005 }
 180:
                var12 = var3.communicationProbability;
 186:
                var16 = var11 != var12;
                var15 = 0;
                if(!var16) { _fun0005_ip = 198; continue _fun0005 }
 195:
                var15 = var12;
 198:
                var13['affinity'] = var15;
                var5[var14] = var13;
                var6 = var12;
                var4 = var3;
 213:
                var12 = var8.bind(var1)();
                var3 = var12.done;
                var7 = var12;
                if(!var3) { _fun0005_ip = 57; continue _fun0005 }
 231:
                var4 = _closure1_slot13;
                var6 = _closure1_slot6;
                var3 = var6.getGameRelationships;
                var6 = var3.bind(var6)();
                var3 = var6.values;
                var7 = var3.bind(var6)();
                var6 = var7.filter;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure1_slot10;
                    var1 = var1.FRIEND;
                    var1 = var2 === var1;
                    return var1;
                };
                var3 = var6.bind(var7)(var3);
                var8 = var4.bind(var1)(var3);
                var4 = var8.bind(var1)();
                var3 = var4.done;
                var7 = var4;
                var6 = undefined;
                var4 = undefined;
                if(var3) { _fun0005_ip = 496; continue _fun0005 }
 302:
                var3 = var7.value;
                var14 = _closure1_slot9;
                var13 = var14.getUser;
                var12 = var3.id;
                var16 = var13.bind(var14)(var12);
                if(!(var11 != var16)) { _fun0005_ip = 478; continue _fun0005 }
 334:
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var9];
                var13 = var13.bind(var1)(var12);
                var12 = var13.getNames;
                var12 = var12.bind(var13)(var16);
                var15 = var12.names;
                var12 = var12.nick;
                var14 = var3.id;
                var13 = {};
                var17 = var3.id;
                var13['id'] = var17;
                var17 = _closure1_slot10;
                var17 = var17.FRIEND;
                var13['type'] = var17;
                var13['user'] = var16;
                var13['names'] = var15;
                var13['nick'] = var12;
                var15 = _closure1_slot7;
                var12 = var15.getUserAffinity;
                var3 = var3.id;
                var3 = var12.bind(var15)(var3);
                var15 = var11 == var3;
                var12 = undefined;
                if(var15) { _fun0005_ip = 451; continue _fun0005 }
 445:
                var12 = var3.communicationProbability;
 451:
                var16 = var11 != var12;
                var15 = 0;
                if(!var16) { _fun0005_ip = 463; continue _fun0005 }
 460:
                var15 = var12;
 463:
                var13['affinity'] = var15;
                var5[var14] = var13;
                var6 = var12;
                var4 = var3;
 478:
                var12 = var8.bind(var1)();
                var3 = var12.done;
                var7 = var12;
                if(!var3) { _fun0005_ip = 302; continue _fun0005 }
 496:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 9;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.userSearchItemsTransaction;
                var2 = arg1;
                var4 = var3.bind(var4)(var2);
                var2 = var4.delete;
                var2 = var2.bind(var4)();
                var2 = global;
                var3 = var2.Object;
                var2 = var3.values;
                var3 = var2.bind(var3)(var5);
                var2 = var4.putAll;
                var2 = var2.bind(var4)(var3);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/UserSearchItems.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
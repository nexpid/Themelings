// app/modules/autocompleter/UserSearchManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
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
            var9 = _closure1_slot19;
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
            var7 = _closure1_slot19;
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
    var _closure1_slot18 = var1;
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
    var _closure1_slot19 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0004_ip = 74; continue _fun0004;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function getTransformedUser(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0005_ip = 476; continue _fun0005 }
 12:
            var6 = _closure1_slot13;
            var5 = var6.isBlockedOrIgnored;
            var2 = var4.id;
            var2 = var5.bind(var6)(var2);
            if(var2) { _fun0005_ip = 476; continue _fun0005 }
 41:
            var2 = {};
            var5 = var4.id;
            var2['id'] = var5;
            var6 = var4.discriminator;
            var5 = '0';
            if(!(var5 === var6)) { _fun0005_ip = 75; continue _fun0005 }
 68:
            var5 = var4.username;
            _fun0005_ip = 114; continue _fun0005;
 75:
            var10 = var4.username;
            var9 = var4.discriminator;
            var6 = global;
            var6 = var6.HermesInternal;
            var8 = var6.concat;
            var7 = '';
            var6 = '#';
            var5 = var8.bind(var7)(var10, var6, var9);
 114:
            var2['username'] = var5;
            var5 = {};
            var2['nicknames'] = var5;
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var5 = 12;
            var5 = var7[var5];
            var7 = undefined;
            var6 = var6.bind(var7)(var5);
            var5 = var6.getGlobalName;
            var5 = var5.bind(var6)(var4);
            if(!(var1 != var5)) { _fun0005_ip = 174; continue _fun0005 }
 162:
            var5 = var4.globalName;
            var2['globalName'] = var5;
 174:
            var5 = var4.bot;
            if(!var5) { _fun0005_ip = 191; continue _fun0005 }
 183:
            var5 = true;
            var2['isBot'] = var5;
 191:
            var5 = _closure1_slot10;
            var5 = var4 instanceof var5;
            if(var5) { _fun0005_ip = 290; continue _fun0005 }
 202:
            var5 = 'flags';
            var5 = var5 in var4;
            if(var5) { _fun0005_ip = 223; continue _fun0005 }
 213:
            var5 = false;
            var2['isProvisional'] = var5;
            _fun0005_ip = 302; continue _fun0005;
 223:
            var6 = _closure1_slot2;
            var8 = _closure1_slot3;
            var5 = 13;
            var5 = var8[var5];
            var9 = var6.bind(var7)(var5);
            var8 = var9.hasFlag;
            var5 = var4.flags;
            var10 = var1 != var5;
            var6 = 0;
            if(!var10) { _fun0005_ip = 266; continue _fun0005 }
 263:
            var6 = var5;
 266:
            var5 = _closure1_slot15;
            var5 = var5.PROVISIONAL_ACCOUNT;
            var5 = var8.bind(var9)(var6, var5);
            var2['isProvisional'] = var5;
            _fun0005_ip = 302; continue _fun0005;
 290:
            var5 = var4.isProvisional;
            var2['isProvisional'] = var5;
 302:
            var8 = _closure1_slot13;
            var6 = var8.isFriend;
            var5 = var4.id;
            var5 = var6.bind(var8)(var5);
            if(!var5) { _fun0005_ip = 359; continue _fun0005 }
 325:
            var5 = true;
            var2['isFriend'] = var5;
            var8 = _closure1_slot13;
            var6 = var8.getNickname;
            var5 = var4.id;
            var5 = var6.bind(var8)(var5);
            var2['friendNickname'] = var5;
 359:
            var5 = _closure1_slot10;
            var5 = var4 instanceof var5;
            if(var5) { _fun0005_ip = 458; continue _fun0005 }
 370:
            var5 = 'flags';
            var5 = var5 in var4;
            if(var5) { _fun0005_ip = 391; continue _fun0005 }
 381:
            var5 = false;
            var2['isStaff'] = var5;
            _fun0005_ip = 474; continue _fun0005;
 391:
            var6 = _closure1_slot2;
            var8 = _closure1_slot3;
            var5 = 13;
            var5 = var8[var5];
            var7 = var6.bind(var7)(var5);
            var6 = var7.hasFlag;
            var8 = var4.flags;
            var9 = var1 != var8;
            var5 = 0;
            if(!var9) { _fun0005_ip = 434; continue _fun0005 }
 431:
            var5 = var8;
 434:
            var3 = _closure1_slot15;
            var3 = var3.STAFF;
            var3 = var6.bind(var7)(var5, var3);
            var2['isStaff'] = var3;
            _fun0005_ip = 474; continue _fun0005;
 458:
            var3 = var4.isStaff;
            var3 = var3.bind(var4)();
            var2['isStaff'] = var3;
 474:
            return var2;
 476:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function setNick(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var1 = arg3;
            var5 = null;
            if(!(var5 != var2)) { _fun0006_ip = 47; continue _fun0006 }
 12:
            var3 = var2.nicknames;
            var4 = var5 != var1;
            var2 = null;
            if(!var4) { _fun0006_ip = 40; continue _fun0006 }
 27:
            var4 = '';
            var2 = null;
            if(!(var4 !== var1)) { _fun0006_ip = 40; continue _fun0006 }
 37:
            var2 = var1;
 40:
            var1 = arg2;
            var3[var1] = var2;
 47:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function getDMUpdates(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var1 = new Array(0);
            var _closure2_slot1 = var1;
            var3 = null;
            if(!(var3 != var4)) { _fun0007_ip = 76; continue _fun0007 }
 23:
            var6 = _closure1_slot9;
            var5 = var4.type;
            var3 = undefined;
            var5 = var6.bind(var3)(var5);
            if(!var5) { _fun0007_ip = 76; continue _fun0007 }
 45:
            var4 = var4.recipients;
            if(!(var3 === var4)) { _fun0007_ip = 59; continue _fun0007 }
 55:
            var4 = new Array(0);
 59:
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = _closure1_slot21;
                    var5 = _closure1_slot14;
                    var2 = var5.getUser;
                    var1 = arg1;
                    var2 = var2.bind(var5)(var1);
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var6 = _closure2_slot0;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0008_ip = 64; continue _fun0008 }
 45:
                    var5 = _closure1_slot22;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var3 = var5.bind(var1)(var4, var3);
 64:
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
 76:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function updateMembersList(arg1, arg2) {
        var4 = arg1;
        var1 = arg2;
        var _closure2_slot0 = var1;
        var1 = new Array(0);
        var _closure2_slot1 = var1;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = arg1;
                var5 = _closure1_slot21;
                var4 = var3.user;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var5 = null;
                if(!(var5 != var4)) { _fun0009_ip = 66; continue _fun0009 }
 28:
                var6 = _closure1_slot22;
                var5 = _closure2_slot0;
                var3 = var3.nick;
                var3 = var6.bind(var1)(var4, var5, var3);
                var3 = _closure2_slot1;
                var2 = var3.push;
                var2 = var2.bind(var3)(var4);
 66:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.isPrivate;
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 11;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.UserFlags;
    var _closure1_slot15 = var2;
    var2 = {};
    var5 = 'UPDATE_USERS';
    var2['UPDATE_USERS'] = var5;
    var5 = 'USER_RESULTS';
    var2['USER_RESULTS'] = var5;
    var5 = 'QUERY_SET';
    var2['QUERY_SET'] = var5;
    var5 = 'QUERY_CLEAR';
    var2['QUERY_CLEAR'] = var5;
    var _closure1_slot16 = var2;
    var2 = function() {
        var4 = _closure1_slot8;
        var3 = function UserSearchContext(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = arguments[2];
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0010_ip = 21; continue _fun0010 }
 18:
                var2 = 10;
 21:
                var7 = _closure1_slot7;
                var6 = _closure2_slot0;
                var6 = var7.bind(var1)(var3, var6);
                var5 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.data;
                        var3 = null;
                        var1 = var3 != var2;
                        if(!var1) { _fun0011_ip = 39; continue _fun0011 }
 17:
                        var5 = var2.type;
                        var4 = _closure1_slot16;
                        var4 = var4.USER_RESULTS;
                        var1 = var5 === var4;
 39:
                        if(!var1) { _fun0011_ip = 65; continue _fun0011 }
 42:
                        var5 = var2.uuid;
                        var4 = _closure3_slot0;
                        var4 = var4._uuid;
                        var1 = var5 === var4;
 65:
                        if(!var1) { _fun0011_ip = 146; continue _fun0011 }
 68:
                        var4 = _closure3_slot0;
                        var5 = var4._currentQuery;
                        var4 = false;
                        if(!(var4 !== var5)) { _fun0011_ip = 108; continue _fun0011 }
 87:
                        var5 = _closure3_slot0;
                        var4 = var5._callback;
                        var2 = var2.payload;
                        var2 = var4.bind(var5)(var2);
 108:
                        var2 = _closure3_slot0;
                        var2 = var2._currentQuery;
                        if(!(var3 != var2)) { _fun0011_ip = 132; continue _fun0011 }
 122:
                        var2 = _closure3_slot0;
                        var2['_currentQuery'] = var3;
 132:
                        var2 = _closure3_slot0;
                        var1 = var2._setNextQuery;
                        var1 = var1.bind(var2)();
 146:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['handleMessages'] = var5;
                var5 = arg1;
                var3['_worker'] = var5;
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var4 = 14;
                var4 = var6[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.v4;
                var4 = var4.bind(var5)();
                var3['_uuid'] = var4;
                var4 = arg2;
                var3['_callback'] = var4;
                var3['_limit'] = var2;
                var2 = null;
                var3['_currentQuery'] = var2;
                var3['_nextQuery'] = var2;
                var2 = false;
                var3['_subscribed'] = var2;
                var2 = var3.subscribe;
                var2 = var2.bind(var3)();
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'setLimit';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var2 = arg1;
                var1 = this;
                var1['_limit'] = var2;
                var4 = var1._nextQuery;
                var3 = null;
                if(!(var3 != var4)) { _fun0012_ip = 36; continue _fun0012 }
 24:
                var1 = var1._nextQuery;
                var1['limit'] = var2;
 36:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(7);
        var2[0] = var1;
        var1 = {};
        var6 = 'subscribe';
        var1['key'] = var6;
        var6 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var2 = this;
                var3 = var2._worker;
                var1 = null;
                var1 = var1 == var3;
                if(var1) { _fun0013_ip = 24; continue _fun0013 }
 18:
                var1 = var2._subscribed;
 24:
                if(var1) { _fun0013_ip = 76; continue _fun0013 }
 27:
                var6 = var2._worker;
                var5 = var6.addEventListener;
                var4 = var2.handleMessages;
                var3 = 'message';
                var1 = false;
                var1 = var5.bind(var6)(var3, var4, var1);
                var1 = true;
                var2['_subscribed'] = var1;
                var1 = var2._setNextQuery;
                var1 = var1.bind(var2)();
 76:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'unsubscribe';
        var1['key'] = var6;
        var6 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var2 = this;
                var3 = var2._worker;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0014_ip = 24; continue _fun0014 }
 18:
                var1 = var2._subscribed;
 24:
                if(!var1) { _fun0014_ip = 64; continue _fun0014 }
 27:
                var6 = var2._worker;
                var5 = var6.removeEventListener;
                var4 = var2.handleMessages;
                var3 = 'message';
                var1 = false;
                var3 = var5.bind(var6)(var3, var4, var1);
                var2['_subscribed'] = var1;
 64:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'destroy';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = var2.clearQuery;
            var1 = var1.bind(var2)();
            var1 = var2.unsubscribe;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'clearQuery';
        var1['key'] = var6;
        var6 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var4 = this;
                var1 = false;
                var4['_currentQuery'] = var1;
                var2 = null;
                var4['_nextQuery'] = var2;
                var1 = var4._worker;
                var1 = var2 != var1;
                if(!var1) { _fun0015_ip = 38; continue _fun0015 }
 32:
                var1 = var4._subscribed;
 38:
                if(!var1) { _fun0015_ip = 88; continue _fun0015 }
 41:
                var3 = var4._worker;
                var2 = var3.postMessage;
                var1 = {};
                var4 = var4._uuid;
                var1['uuid'] = var4;
                var4 = _closure1_slot16;
                var4 = var4.QUERY_CLEAR;
                var1['type'] = var4;
                var1 = var2.bind(var3)(var1);
 88:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'setQuery';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var1 = arg1;
                var2 = this;
                var7 = var1.query;
                var6 = var1.filters;
                var3 = var1.blacklist;
                var5 = var1.boosters;
                var4 = var1.boosterFallback;
                var1 = {};
                var1['query'] = var7;
                var1['filters'] = var6;
                var1['blacklist'] = var3;
                var3 = null;
                if(!(var3 == var5)) { _fun0016_ip = 59; continue _fun0016 }
 57:
                var5 = {};
 59:
                var1['boosters'] = var5;
                var5 = var3 != var4;
                var3 = 1;
                if(!var5) { _fun0016_ip = 77; continue _fun0016 }
 74:
                var3 = var4;
 77:
                var1['boosterFallback'] = var3;
                var3 = var2._limit;
                var1['limit'] = var3;
                var2['_nextQuery'] = var1;
                var1 = var2._setNextQuery;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = '_setNextQuery';
        var1['key'] = var6;
        var5 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var4 = this;
                var2 = var4._currentQuery;
                var1 = null;
                var2 = var1 != var2;
                if(!var2) { _fun0017_ip = 30; continue _fun0017 }
 18:
                var5 = var4._currentQuery;
                var3 = false;
                var2 = var3 !== var5;
 30:
                if(var2) { _fun0017_ip = 43; continue _fun0017 }
 33:
                var3 = var4._nextQuery;
                var2 = var1 == var3;
 43:
                if(var2) { _fun0017_ip = 162; continue _fun0017 }
 46:
                var2 = var4._worker;
                if(!(var1 != var2)) { _fun0017_ip = 65; continue _fun0017 }
 56:
                var2 = var4._subscribed;
                if(var2) { _fun0017_ip = 86; continue _fun0017 }
 65:
                var2 = var4._subscribed;
                if(var2) { _fun0017_ip = 162; continue _fun0017 }
 74:
                var2 = var4.subscribe;
                var2 = var2.bind(var4)();
                _fun0017_ip = 162; continue _fun0017;
 86:
                var2 = var4._nextQuery;
                var4['_currentQuery'] = var2;
                var4['_nextQuery'] = var1;
                var3 = var4._worker;
                var2 = var3.postMessage;
                var1 = {};
                var5 = var4._uuid;
                var1['uuid'] = var5;
                var5 = _closure1_slot16;
                var5 = var5.QUERY_SET;
                var1['type'] = var5;
                var4 = var4._currentQuery;
                var1['payload'] = var4;
                var1 = var2.bind(var3)(var1);
 162:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[6] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot17 = var2;
    var5 = 20;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var4 = function(arg1) {
        var4 = function UserSearchManager(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot7;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot20;
                var1 = var1.bind(var4)();
                if(var1) { _fun0018_ip = 86; continue _fun0018 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0018_ip = 120; continue _fun0018;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = function LOGOUT() {
                    var2 = _closure3_slot0;
                    var1 = var2._handleLogout;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['LOGOUT'] = var4;
                var4 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2._handleConnectionOpen;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['POST_CONNECTION_OPEN'] = var4;
                var4 = function CONNECTION_OPEN_SUPPLEMENTAL(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleConnectionOpenSupplemental;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['CONNECTION_OPEN_SUPPLEMENTAL'] = var4;
                var4 = function OVERLAY_INITIALIZE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleOverlayInitialize;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['OVERLAY_INITIALIZE'] = var4;
                var4 = function CURRENT_USER_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleCurrentUserUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['CURRENT_USER_UPDATE'] = var4;
                var4 = function GUILD_CREATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleGuildCreate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['GUILD_CREATE'] = var4;
                var4 = function GUILD_MEMBERS_CHUNK_BATCH(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleGuildMembersChunkBatch;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['GUILD_MEMBERS_CHUNK_BATCH'] = var4;
                var4 = function GUILD_MEMBER_ADD(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleGuildMemberUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['GUILD_MEMBER_ADD'] = var4;
                var4 = function GUILD_MEMBER_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleGuildMemberUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['GUILD_MEMBER_UPDATE'] = var4;
                var4 = function RELATIONSHIP_ADD(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleRelationshipAdd;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['RELATIONSHIP_ADD'] = var4;
                var4 = function RELATIONSHIP_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleRelationshipUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['RELATIONSHIP_UPDATE'] = var4;
                var4 = function RELATIONSHIP_REMOVE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleRelationshipRemove;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['RELATIONSHIP_REMOVE'] = var4;
                var4 = function CHANNEL_CREATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleDMCreate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['CHANNEL_CREATE'] = var4;
                var4 = function CHANNEL_UPDATES(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleDMUpdates;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['CHANNEL_UPDATES'] = var4;
                var4 = function CHANNEL_RECIPIENT_ADD(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleRecipientChanges;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['CHANNEL_RECIPIENT_ADD'] = var4;
                var4 = function PASSIVE_UPDATE_V2(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handlePassiveUpdateV2;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['PASSIVE_UPDATE_V2'] = var4;
                var1['actions'] = var3;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.rebootWebworker;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['_handleLogout'] = var3;
                var3 = function() {
                    var1 = global;
                    var4 = var1.setTimeout;
                    var1 = undefined;
                    var3 = function() {
                        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                            var3 = _closure1_slot14;
                            var1 = var3.getCurrentUser;
                            var3 = var1.bind(var3)();
                            var21 = null;
                            if(!(var21 != var3)) { _fun0019_ip = 371; continue _fun0019 }
 27:
                            var1 = _closure1_slot21;
                            var20 = undefined;
                            var3 = var1.bind(var20)(var3);
                            var5 = {};
                            var1 = var3.id;
                            var5[var1] = var3;
                            var _closure5_slot0 = var5;
                            var1 = global;
                            var6 = var1.Object;
                            var4 = var6.values;
                            var7 = _closure1_slot14;
                            var3 = var7.getUsers;
                            var3 = var3.bind(var7)();
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.forEach;
                            var2 = function(arg1) {
                                var5 = arg1;
                                var4 = _closure5_slot0;
                                var3 = var5.id;
                                var2 = _closure1_slot21;
                                var1 = undefined;
                                var2 = var2.bind(var1)(var5);
                                var4[var3] = var2;
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure1_slot12;
                            var2 = var3.getMutableAllGuildsAndMembers;
                            var19 = var2.bind(var3)();
                            var17 = var19;
                            var13 = 12;
                            var26 = undefined;
                            var25 = undefined;
                            var24 = undefined;
                            var23 = undefined;
                            for(var14 in var17)
 140:
                            {
                                var6 = var26;
                                var4 = var25;
                                var3 = var24;
                                var2 = var23;
 164:
                                var12 = var14;
                                var10 = var19[var12];
                                var26 = var6;
                                var25 = var4;
                                var24 = var3;
                                var23 = var2;
                                var6 = var26;
                                var4 = var25;
                                var3 = var24;
                                var2 = var23;
                                ForInLoopInit(obj_props_register=10, obj_register=9, iter_index_register=8, iter_size_register=7);
                                if(var11 === undefined) { _fun0019_ip = 140; continue _fun0019 }
 203:
                                var26 = var6;
                                var25 = var4;
                                var24 = var3;
                                var23 = var2;
                                ForInLoopNextIter(next_value_register=6, obj_props_register=10, obj_register=9, iter_index_register=8, iter_size_register=7);
                                if(var7 === undefined) { _fun0019_ip = 140; continue _fun0019 }
 224:
                                var25 = var7;
                                var24 = var5[var25];
                                var23 = var19[var12];
                                var25 = var23[var25];
                                var23 = var21 == var25;
                                var26 = undefined;
                                if(var23) { _fun0019_ip = 254; continue _fun0019 }
 248:
                                var26 = var25.nick;
 254:
                                var23 = var26;
                                if(!(var21 == var23)) { _fun0019_ip = 289; continue _fun0019 }
 261:
                                var28 = _closure1_slot1;
                                var27 = _closure1_slot3;
                                var27 = var27[var13];
                                var28 = var28.bind(var20)(var27);
                                var27 = var28.getGlobalName;
                                var23 = var27.bind(var28)(var24);
 289:
                                var6 = var26;
                                var4 = var25;
                                var3 = var24;
                                var2 = var23;
                                if(var21 == var24) { _fun0019_ip = 203; continue _fun0019 }
 305:
                                var27 = _closure1_slot22;
                                var27 = var27.bind(var20)(var24, var12, var23);
                                var6 = var26;
                                var4 = var25;
                                var3 = var24;
                                var2 = var23;
                                _fun0019_ip = 203; continue _fun0019;
                            }
 330:
                            var4 = _closure3_slot0;
                            var3 = var4.updateUsers;
                            var2 = var1.Object;
                            var1 = var2.values;
                            var2 = var1.bind(var2)(var5);
                            var1 = 'connection_open';
                            var1 = var3.bind(var4)(var2, var1);
 371:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = 3000;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1['_handleConnectionOpen'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.guilds;
                    var _closure4_slot0 = var1;
                    var1 = global;
                    var4 = var1.setTimeout;
                    var1 = undefined;
                    var3 = function() {
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 15;
                        var5 = var6[var3];
                        var1 = undefined;
                        var9 = var4.bind(var1)(var5);
                        var8 = var9.flatMap;
                        var5 = _closure4_slot0;
                        var7 = function(arg1) {
                            var1 = arg1;
                            var4 = _closure1_slot24;
                            var3 = var1.members;
                            var2 = var1.id;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        };
                        var7 = var8.bind(var9)(var5, var7);
                        var3 = var6[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.flatMap;
                        var2 = function(arg1) {
                            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                                var3 = arg1;
                                var _closure6_slot0 = var3;
                                var1 = new Array(0);
                                var _closure6_slot1 = var1;
                                var4 = var3.activity_instances;
                                var3 = null;
                                if(!(var3 != var4)) { _fun0020_ip = 44; continue _fun0020 }
 29:
                                var3 = var4.forEach;
                                var2 = function(arg1) {
                                    var1 = arg1;
                                    var3 = var1.participants;
                                    var2 = var3.forEach;
                                    var1 = function(arg1) {
                                        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                                            var1 = arg1;
                                            var2 = var1.member;
                                            var4 = null;
                                            if(!(var4 != var2)) { _fun0021_ip = 81; continue _fun0021 }
 15:
                                            var5 = _closure1_slot21;
                                            var3 = var2.user;
                                            var6 = undefined;
                                            var3 = var5.bind(var6)(var3);
                                            if(!(var4 != var3)) { _fun0021_ip = 81; continue _fun0021 }
 38:
                                            var5 = _closure1_slot22;
                                            var4 = _closure6_slot0;
                                            var4 = var4.id;
                                            var2 = var2.nick;
                                            var2 = var5.bind(var6)(var3, var4, var2);
                                            var2 = _closure6_slot1;
                                            var1 = var2.push;
                                            var1 = var1.bind(var2)(var3);
 81:
                                            var1 = undefined;
                                            return var1;
                                        }
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    var1 = undefined;
                                    return var1;
                                };
                                var2 = var3.bind(var4)(var2);
 44:
                                return var1;
                            }
                        };
                        var6 = var3.bind(var4)(var5, var2);
                        var5 = _closure3_slot0;
                        var4 = var5.updateUsers;
                        var3 = new Array(0);
                        var10 = 0;
                        var12 = var3;
                        var11 = var7;
                        var10 = arraySpread(var12, var11, var10);
                        var12 = var3;
                        var11 = var6;
                        var2 = arraySpread(var12, var11, var10);
                        var2 = 'connection_open_supplemental';
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var2 = 3000;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1['_handleConnectionOpenSupplemental'] = var3;
                var3 = function(arg1) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                        var1 = arg1;
                        var5 = var1.users;
                        var15 = var1.guildMembers;
                        var2 = global;
                        var1 = var2.Map;
                        var3 = var1.prototype;
                        var3 = Object.create(var3, {constructor: {value: var1}});
                        var30 = var3;
                        var1 = new var30[var1](var29);
                        var3 = var1 instanceof Object ? var1 : var3;
                        var4 = _closure1_slot18;
                        var1 = undefined;
                        var6 = var4.bind(var1)(var5);
                        var5 = var6.bind(var1)();
                        var4 = var5.done;
                        if(var4) { _fun0022_ip = 114; continue _fun0022 }
 69:
                        var9 = var5.value;
                        var8 = var3.set;
                        var7 = var9.id;
                        var4 = _closure1_slot21;
                        var4 = var4.bind(var1)(var9);
                        var4 = var8.bind(var3)(var7, var4);
                        var7 = var6.bind(var1)();
                        var4 = var7.done;
                        var5 = var7;
                        if(!var4) { _fun0022_ip = 69; continue _fun0022 }
 114:
                        var5 = _closure1_slot18;
                        var6 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var13 = 16;
                        var4 = var4[var13];
                        var6 = var6.bind(var1)(var4);
                        var4 = var6.keys;
                        var4 = var4.bind(var6)(var15);
                        var12 = var5.bind(var1)(var4);
                        var5 = var12.bind(var1)();
                        var4 = var5.done;
                        var11 = null;
                        var10 = var5;
                        var9 = undefined;
                        var8 = undefined;
                        var7 = undefined;
                        var6 = undefined;
                        var5 = undefined;
                        if(var4) { _fun0022_ip = 405; continue _fun0022 }
 183:
                        var22 = var10.value;
                        var21 = var15[var22];
                        var18 = var7;
                        var17 = var6;
                        var16 = var5;
                        if(!(var11 != var21)) { _fun0022_ip = 378; continue _fun0022 }
 208:
                        var19 = _closure1_slot18;
                        var20 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var4 = var4[var13];
                        var20 = var20.bind(var1)(var4);
                        var4 = var20.keys;
                        var4 = var4.bind(var20)(var21);
                        var20 = var19.bind(var1)(var4);
                        var23 = var20.bind(var1)();
                        var4 = var23.done;
                        var19 = var23;
                        var9 = var19;
                        var8 = var20;
                        var18 = var7;
                        var17 = var6;
                        var16 = var5;
                        if(var4) { _fun0022_ip = 378; continue _fun0022 }
 274:
                        var25 = var19.value;
                        var4 = var3.get;
                        var24 = var4.bind(var3)(var25);
                        var23 = var21[var25];
                        var4 = var11 != var24;
                        if(!var4) { _fun0022_ip = 304; continue _fun0022 }
 300:
                        var4 = var11 != var23;
 304:
                        if(!var4) { _fun0022_ip = 317; continue _fun0022 }
 307:
                        var26 = var23.nick;
                        var4 = var11 != var26;
 317:
                        if(!var4) { _fun0022_ip = 348; continue _fun0022 }
 320:
                        var26 = _closure1_slot22;
                        var4 = var23.nick;
                        var4 = var26.bind(var1)(var24, var22, var4);
                        var4 = var3.set;
                        var4 = var4.bind(var3)(var25, var24);
 348:
                        var26 = var20.bind(var1)();
                        var4 = var26.done;
                        var19 = var26;
                        var9 = var19;
                        var8 = var20;
                        var18 = var25;
                        var17 = var24;
                        var16 = var23;
                        if(!var4) { _fun0022_ip = 274; continue _fun0022 }
 378:
                        var19 = var12.bind(var1)();
                        var4 = var19.done;
                        var7 = var18;
                        var6 = var17;
                        var5 = var16;
                        var10 = var19;
                        if(!var4) { _fun0022_ip = 183; continue _fun0022 }
 405:
                        var6 = _closure3_slot0;
                        var5 = var6.updateUsers;
                        var7 = var2.Array;
                        var4 = var7.from;
                        var2 = var3.values;
                        var2 = var2.bind(var3)();
                        var4 = var4.bind(var7)(var2);
                        var2 = 'overlay_initialize';
                        var2 = var5.bind(var6)(var4, var2);
                        var2 = var3.clear;
                        var2 = var2.bind(var3)();
                        return var1;
                    }
                };
                var1['_handleOverlayInitialize'] = var3;
                var3 = function(arg1) {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.user;
                        var2 = _closure1_slot21;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3);
                        var3 = null;
                        if(!(var3 != var2)) { _fun0023_ip = 61; continue _fun0023 }
 28:
                        var5 = _closure3_slot0;
                        var4 = var5.updateUsers;
                        var3 = new Array(1);
                        var3[0] = var2;
                        var2 = 'current_user_update';
                        var2 = var4.bind(var5)(var3, var2);
 61:
                        return var1;
                    }
                };
                var1['_handleCurrentUserUpdate'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.guild;
                    var6 = var1.members;
                    var5 = _closure3_slot0;
                    var4 = var5.updateUsers;
                    var3 = _closure1_slot24;
                    var2 = var1.id;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var6, var2);
                    var2 = 'guild_create';
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['_handleGuildCreate'] = var3;
                var3 = function(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.chunks;
                        var5 = new Array(0);
                        var2 = _closure1_slot18;
                        var1 = undefined;
                        var6 = var2.bind(var1)(var3);
                        var3 = var6.bind(var1)();
                        var2 = var3.done;
                        if(var2) { _fun0024_ip = 111; continue _fun0024 }
 39:
                        var2 = var3.value;
                        var8 = var5.push;
                        var10 = _closure1_slot24;
                        var9 = var2.members;
                        var2 = var2.guildId;
                        var12 = var10.bind(var1)(var9, var2);
                        var2 = new Array(0);
                        var13 = var2;
                        var11 = 0;
                        var9 = arraySpread(var13, var12, var11);
                        var13 = var8;
                        var12 = var2;
                        var11 = var5;
                        var2 = apply(var13, var12, var11);
                        var8 = var6.bind(var1)();
                        var2 = var8.done;
                        var3 = var8;
                        if(!var2) { _fun0024_ip = 39; continue _fun0024 }
 111:
                        var4 = _closure3_slot0;
                        var3 = var4.updateUsers;
                        var2 = 'guild_members_chunk_batch';
                        var2 = var3.bind(var4)(var5, var2);
                        return var1;
                    }
                };
                var1['_handleGuildMembersChunkBatch'] = var3;
                var3 = function(arg1) {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                        var1 = arg1;
                        var5 = var1.guildId;
                        var6 = var1.user;
                        var4 = var1.nick;
                        var2 = _closure1_slot21;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var6);
                        var6 = null;
                        if(!(var6 != var2)) { _fun0025_ip = 83; continue _fun0025 }
 39:
                        var3 = _closure1_slot22;
                        var3 = var3.bind(var1)(var2, var5, var4);
                        var5 = _closure3_slot0;
                        var4 = var5.updateUsers;
                        var3 = new Array(1);
                        var3[0] = var2;
                        var2 = 'guild_member_update';
                        var2 = var4.bind(var5)(var3, var2);
 83:
                        return var1;
                    }
                };
                var1['_handleGuildMemberUpdate'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var5 = _closure3_slot0;
                    var4 = var5.updateUsers;
                    var6 = _closure1_slot24;
                    var3 = var1.members;
                    var2 = var1.guildId;
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3, var2);
                    var2 = 'passive_update_v2';
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['_handlePassiveUpdateV2'] = var3;
                var3 = function(arg1) {
                    var3 = _closure1_slot21;
                    var1 = arg1;
                    var1 = var1.relationship;
                    var2 = var1.user;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var5 = _closure3_slot0;
                    var4 = var5.updateUsers;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = 'relationship_add';
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['_handleRelationshipAdd'] = var3;
                var3 = function(arg1) {
                    var3 = _closure1_slot21;
                    var4 = _closure1_slot14;
                    var2 = var4.getUser;
                    var1 = arg1;
                    var1 = var1.relationship;
                    var1 = var1.id;
                    var2 = var2.bind(var4)(var1);
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var5 = _closure3_slot0;
                    var4 = var5.updateUsers;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = 'relationship_update';
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['_handleRelationshipUpdate'] = var3;
                var3 = function(arg1) {
                    var3 = _closure1_slot21;
                    var4 = _closure1_slot14;
                    var2 = var4.getUser;
                    var1 = arg1;
                    var1 = var1.relationship;
                    var1 = var1.id;
                    var2 = var2.bind(var4)(var1);
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var5 = _closure3_slot0;
                    var4 = var5.updateUsers;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = 'relationship_remove';
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['_handleRelationshipRemove'] = var3;
                var3 = function(arg1) {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                        var1 = arg1;
                        var1 = var1.channel;
                        var4 = var1.id;
                        var5 = _closure1_slot23;
                        var3 = _closure1_slot11;
                        var1 = var3.getChannel;
                        var3 = var1.bind(var3)(var4);
                        var1 = undefined;
                        var5 = var5.bind(var1)(var3);
                        var6 = var5.length;
                        var3 = 0;
                        if(!(var3 !== var6)) { _fun0026_ip = 119; continue _fun0026 }
 52:
                        var6 = _closure1_slot21;
                        var7 = _closure1_slot14;
                        var3 = var7.getCurrentUser;
                        var3 = var3.bind(var7)();
                        var3 = var6.bind(var1)(var3);
                        var2 = _closure1_slot22;
                        var2 = var2.bind(var1)(var3, var4);
                        var2 = var5.push;
                        var2 = var2.bind(var5)(var3);
                        var4 = _closure3_slot0;
                        var3 = var4.updateUsers;
                        var2 = 'dm_create';
                        var2 = var3.bind(var4)(var5, var2);
 119:
                        return var1;
                    }
                };
                var1['_handleDMCreate'] = var3;
                var3 = function(arg1) {
                    _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.channels;
                        var2 = _closure1_slot18;
                        var1 = undefined;
                        var7 = var2.bind(var1)(var3);
                        var3 = var7.bind(var1)();
                        var2 = var3.done;
                        var5 = 'dm_updates';
                        var4 = 0;
                        if(var2) { _fun0027_ip = 166; continue _fun0027 }
 46:
                        var2 = var3.value;
                        var10 = _closure1_slot23;
                        var12 = _closure1_slot11;
                        var11 = var12.getChannel;
                        var9 = var2.id;
                        var9 = var11.bind(var12)(var9);
                        var10 = var10.bind(var1)(var9);
                        var9 = var10.length;
                        if(!(var4 !== var9)) { _fun0027_ip = 151; continue _fun0027 }
 88:
                        var11 = _closure1_slot21;
                        var12 = _closure1_slot14;
                        var9 = var12.getCurrentUser;
                        var9 = var9.bind(var12)();
                        var9 = var11.bind(var1)(var9);
                        var11 = _closure1_slot22;
                        var2 = var2.id;
                        var2 = var11.bind(var1)(var9, var2);
                        var2 = var10.push;
                        var2 = var2.bind(var10)(var9);
                        var9 = _closure3_slot0;
                        var2 = var9.updateUsers;
                        var2 = var2.bind(var9)(var10, var5);
 151:
                        var9 = var7.bind(var1)();
                        var2 = var9.done;
                        var3 = var9;
                        if(!var2) { _fun0027_ip = 46; continue _fun0027 }
 166:
                        return var1;
                    }
                };
                var1['_handleDMUpdates'] = var3;
                var2 = function(arg1) {
                    _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.channelId;
                        var5 = var1.user;
                        var1 = var1.isMember;
                        if(!var1) { _fun0028_ip = 79; continue _fun0028 }
 22:
                        var1 = _closure1_slot21;
                        var3 = undefined;
                        var1 = var1.bind(var3)(var5);
                        var2 = _closure1_slot22;
                        var2 = var2.bind(var3)(var1, var4);
                        var4 = _closure3_slot0;
                        var3 = var4.updateUsers;
                        var2 = new Array(1);
                        var2[0] = var1;
                        var1 = 'recipient_changes';
                        var1 = var3.bind(var4)(var2, var1);
 79:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['_handleRecipientChanges'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot8;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var2 = this;
            var1 = var2.rebootWebworker;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var7 = function value() {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                var2 = this;
                var3 = var2._worker;
                var1 = null;
                if(!(var1 != var3)) { _fun0029_ip = 37; continue _fun0029 }
 15:
                var4 = var2._worker;
                var3 = var4.terminate;
                var3 = var3.bind(var4)();
                var2['_worker'] = var1;
 37:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'rebootWebworker';
        var5['key'] = var7;
        var7 = function value() {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                var3 = this;
                var2 = var3._worker;
                var1 = null;
                if(!(var1 != var2)) { _fun0030_ip = 37; continue _fun0030 }
 15:
                var4 = var3._worker;
                var2 = var4.terminate;
                var2 = var2.bind(var4)();
                var3['_worker'] = var1;
 37:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var3['_worker'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'updateUsers';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                var6 = arg1;
                var10 = arg2;
                var1 = this;
                var3 = var1._worker;
                var9 = null;
                if(!(var9 != var3)) { _fun0031_ip = 388; continue _fun0031 }
 24:
                var1 = _closure1_slot18;
                var4 = var6.filter;
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var2 = 18;
                var2 = var8[var2];
                var8 = undefined;
                var2 = var7.bind(var8)(var2);
                var2 = var2.isNotNullish;
                var4 = var4.bind(var6)(var2);
                var7 = var1.bind(var8)(var4);
                var2 = var7.bind(var8)();
                var1 = var2.done;
                var6 = 19;
                if(var1) { _fun0031_ip = 356; continue _fun0031 }
 92:
                var16 = var2.value;
                var11 = var9 == var16;
                var1 = undefined;
                if(var11) { _fun0031_ip = 111; continue _fun0031 }
 106:
                var1 = var16.id;
 111:
                if(!(var9 == var1)) { _fun0031_ip = 338; continue _fun0031 }
 118:
                var11 = _closure1_slot1;
                var1 = _closure1_slot3;
                var1 = var1[var6];
                var12 = var11.bind(var8)(var1);
                var11 = var12.addBreadcrumb;
                var1 = {'category': 'debug', 'message': 'User missing id'};
                var13 = {};
                var13['action'] = var10;
                var14 = {};
                var15 = var9 == var16;
                var14['userIsNull'] = var15;
                var17 = var9 == var16;
                var15 = undefined;
                if(var17) { _fun0031_ip = 188; continue _fun0031 }
 183:
                var15 = var16.id;
 188:
                var15 = var9 == var15;
                var14['idIsNull'] = var15;
                var17 = var9 == var16;
                var15 = undefined;
                if(var17) { _fun0031_ip = 213; continue _fun0031 }
 208:
                var15 = var16.username;
 213:
                var15 = var9 == var15;
                var14['usernameIsNull'] = var15;
                var17 = var9 == var16;
                var15 = undefined;
                if(var17) { _fun0031_ip = 239; continue _fun0031 }
 233:
                var15 = var16.isBot;
 239:
                var14['isBot'] = var15;
                var17 = var9 == var16;
                var15 = undefined;
                if(var17) { _fun0031_ip = 259; continue _fun0031 }
 253:
                var15 = var16.isFriend;
 259:
                var14['isFriend'] = var15;
                var17 = var9 == var16;
                var15 = undefined;
                if(var17) { _fun0031_ip = 279; continue _fun0031 }
 273:
                var15 = var16.isProvisional;
 279:
                var14['isProvisional'] = var15;
                var17 = var9 == var16;
                var15 = undefined;
                if(var17) { _fun0031_ip = 299; continue _fun0031 }
 293:
                var15 = var16.globalName;
 299:
                var15 = var9 == var15;
                var14['globalNameIsNull'] = var15;
                var15 = var4.length;
                var14['usersArrayLength'] = var15;
                var13['userFields'] = var14;
                var1['data'] = var13;
                var1 = var11.bind(var12)(var1);
 338:
                var11 = var7.bind(var8)();
                var1 = var11.done;
                var2 = var11;
                if(!var1) { _fun0031_ip = 92; continue _fun0031 }
 356:
                var2 = var3.postMessage;
                var1 = {};
                var5 = _closure1_slot16;
                var5 = var5.UPDATE_USERS;
                var1['type'] = var5;
                var1['payload'] = var4;
                var1 = var2.bind(var3)(var1);
 388:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getUserSearchContext';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                var5 = arguments[1];
                var1 = this;
                var2 = undefined;
                if(!(var5 === var2)) { _fun0032_ip = 15; continue _fun0032 }
 12:
                var5 = 10;
 15:
                var2 = var1.initialize;
                var2 = var2.bind(var1)();
                var4 = var1._worker;
                var1 = null;
                if(!(var1 != var4)) { _fun0032_ip = 75; continue _fun0032 }
 37:
                var3 = _closure1_slot17;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var7 = arg1;
                var9 = var2;
                var8 = var4;
                var6 = var5;
                var1 = new var9[var3](var8, var7, var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
 75:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var8 = 'SearchContextManager: No webworker initialized';
                var9 = var2;
                var1 = new var9[var3](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var13 = var5;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/autocompleter/UserSearchManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['UserSearchContext'] = var2;
    return var1;
})();
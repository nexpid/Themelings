// app/modules/threads/ThreadMemberListStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 344; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
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
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot22;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot22;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
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
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
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
                    _fun0003_ip = 67; continue _fun0003;
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
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var10 = function handleUserUpdate(arg1) {
        var3 = _closure1_slot23;
        var1 = arg1;
        var1 = var1.user;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var1 = function updateUserId(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var10 = arg1;
            var1 = null;
            if(!(var1 != var10)) { _fun0005_ip = 71; continue _fun0005 }
 9:
            var8 = _closure1_slot18;
            var2 = false;
            var1 = false;
            for(var4 in var8)
 28:
            {
                var1 = var2;
 40:
                var12 = var4;
                var11 = _closure1_slot18;
                var12 = var11[var12];
                var11 = var12.updateUserId;
                var11 = var11.bind(var12)(var10);
                if(!var11) { _fun0005_ip = 28; continue _fun0005 }
 65:
                var2 = true;
                _fun0005_ip = 28; continue _fun0005;
            }
 69:
            return var1;
 71:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var9 = function handleGuildRoleUpdateOrDelete(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var10 = var1.guildId;
            var8 = _closure1_slot18;
            var2 = false;
            var1 = false;
            for(var4 in var8)
 27:
            {
                var1 = var2;
 39:
                var12 = var4;
                var11 = _closure1_slot18;
                var11 = var11[var12];
                var11 = var11.guildId;
                if(var11 !== var10) { _fun0006_ip = 27; continue _fun0006 }
 59:
                var11 = _closure1_slot18;
                var12 = var11[var12];
                var11 = var12.rebuild;
                var11 = var11.bind(var12)();
                var2 = true;
                _fun0006_ip = 27; continue _fun0006;
            }
 81:
            return var1;
        }
    };
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot15 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.StatusTypes;
    var _closure1_slot16 = var8;
    var2 = var2.Permissions;
    var _closure1_slot17 = var2;
    var2 = {};
    var _closure1_slot18 = var2;
    var2 = function() {
        var4 = _closure1_slot9;
        var3 = function MemberList(arg1, arg2, arg3) {
            var3 = this;
            var4 = _closure1_slot8;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['guildId'] = var2;
            var2 = arg2;
            var3['parentId'] = var2;
            var2 = arg3;
            var3['threadId'] = var2;
            var2 = 0;
            var3['version'] = var2;
            var2 = {};
            var3['sections'] = var2;
            var2 = global;
            var2 = var2.Set;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var7 = var4;
            var2 = new var7[var2](var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['allUserIds'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'rebuild';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var5 = arg1;
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = var3.version;
                var1 = var1 + 1;
                var3['version'] = var1;
                var1 = {};
                var3['sections'] = var1;
                var1 = null;
                if(!(var1 != var5)) { _fun0007_ip = 78; continue _fun0007 }
 41:
                var1 = global;
                var1 = var1.Set;
                var4 = var1.prototype;
                var4 = Object.create(var4, {constructor: {value: var1}});
                var8 = var4;
                var7 = var5;
                var1 = new var8[var1](var7, var6);
                var1 = var1 instanceof Object ? var1 : var4;
                var3['allUserIds'] = var1;
 78:
                var6 = _closure1_slot10;
                var5 = var6.getChannel;
                var4 = var3.parentId;
                var4 = var5.bind(var6)(var4);
                var _closure3_slot1 = var4;
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 13;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var5 = global;
                var6 = var5.Array;
                var5 = var6.from;
                var3 = var3.allUserIds;
                var3 = var5.bind(var6)(var3);
                var5 = var4.bind(var1)(var3);
                var4 = var5.map;
                var3 = function(arg1) {
                    var2 = arg1;
                    var4 = _closure3_slot0;
                    var3 = var4.calculateNewState;
                    var1 = _closure3_slot1;
                    var5 = var3.bind(var4)(var2, var1);
                    var4 = _closure1_slot7;
                    var3 = undefined;
                    var1 = 3;
                    var3 = var4.bind(var3)(var5, var1);
                    var1 = {};
                    var1['userId'] = var2;
                    var2 = 0;
                    var2 = var3[var2];
                    var1['sectionId'] = var2;
                    var2 = 1;
                    var2 = var3[var2];
                    var1['displayName'] = var2;
                    var2 = 2;
                    var2 = var3[var2];
                    var1['canViewChannel'] = var2;
                    return var1;
                };
                var5 = var4.bind(var5)(var3);
                var4 = var5.sort;
                var3 = function(arg1, arg2) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.compare;
                    var1 = arg1;
                    var2 = var1.userId;
                    var1 = arg2;
                    var1 = var1.userId;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var5 = var4.bind(var5)(var3);
                var4 = var5.sortBy;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.displayName;
                    return var1;
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.forEach;
                var2 = function(arg1) {
                    var1 = arg1;
                    var7 = _closure3_slot0;
                    var6 = var7.addUser;
                    var12 = var1.userId;
                    var11 = var1.sectionId;
                    var10 = var1.displayName;
                    var9 = var1.canViewChannel;
                    var8 = true;
                    var13 = var7;
                    var1 = var13[var6](var12, var11, var10, var9, var8, var7);
                    var1 = undefined;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(10);
        var2[0] = var1;
        var1 = {};
        var6 = 'updateMultipleUserIds';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var6 = arg1;
                var5 = arg2;
                var4 = this;
                var _closure3_slot0 = var4;
                var1 = null;
                var1 = var1 == var5;
                if(var1) { _fun0008_ip = 33; continue _fun0008 }
 24:
                var2 = var4.guildId;
                var1 = var2 === var5;
 33:
                if(!var1) { _fun0008_ip = 115; continue _fun0008 }
 36:
                var5 = var6.filter;
                var2 = function(arg1) {
                    var1 = _closure3_slot0;
                    var3 = var1.allUserIds;
                    var2 = var3.has;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var6 = var5.bind(var6)(var2);
                var5 = var6.length;
                var2 = 0;
                var2 = var2 !== var5;
                if(!var2) { _fun0008_ip = 112; continue _fun0008 }
 67:
                var7 = var6.length;
                var5 = 50;
                if(!(!(var7 > var5))) { _fun0008_ip = 100; continue _fun0008 }
 79:
                var5 = var6.forEach;
                var3 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.updateUserId;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var5.bind(var6)(var3);
                var2 = true;
                _fun0008_ip = 112; continue _fun0008;
 100:
                var3 = var4.rebuild;
                var3 = var3.bind(var4)();
                var2 = true;
 112:
                var1 = var2;
 115:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'updateUserId';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var7 = arg1;
                var6 = this;
                var2 = var6.allUserIds;
                var1 = var2.has;
                var1 = var1.bind(var2)(var7);
                if(var1) { _fun0009_ip = 29; continue _fun0009 }
 25:
                var1 = false;
                return var1;
 29:
                var1 = var6.findOldState;
                var2 = var1.bind(var6)(var7);
                var12 = _closure1_slot7;
                var11 = undefined;
                var10 = 3;
                var2 = var12.bind(var11)(var2, var10);
                var5 = 0;
                var8 = var2[var5];
                var4 = 1;
                var9 = var2[var4];
                var3 = 2;
                var2 = var2[var3];
                var13 = var6.calculateNewState;
                var15 = _closure1_slot10;
                var14 = var15.getChannel;
                var1 = var6.parentId;
                var1 = var14.bind(var15)(var1);
                var1 = var13.bind(var6)(var7, var1);
                var1 = var12.bind(var11)(var1, var10);
                var5 = var1[var5];
                var4 = var1[var4];
                var3 = var1[var3];
                var1 = var8 !== var5;
                if(var1) { _fun0009_ip = 141; continue _fun0009 }
 137:
                var1 = var9 !== var4;
 141:
                if(var1) { _fun0009_ip = 148; continue _fun0009 }
 144:
                var1 = var2 !== var3;
 148:
                if(!var1) { _fun0009_ip = 190; continue _fun0009 }
 151:
                var2 = var6.removeUserId;
                var2 = var2.bind(var6)(var7, var8);
                var2 = var6.addUser;
                var20 = var6;
                var19 = var7;
                var18 = var5;
                var17 = var4;
                var16 = var3;
                var2 = var20[var2](var19, var18, var17, var16, var15);
                var1 = true;
 190:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'addUserId';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var7 = arg1;
            var6 = this;
            var3 = var6.calculateNewState;
            var5 = _closure1_slot10;
            var4 = var5.getChannel;
            var2 = var6.parentId;
            var2 = var4.bind(var5)(var2);
            var4 = var3.bind(var6)(var7, var2);
            var3 = _closure1_slot7;
            var1 = undefined;
            var2 = 3;
            var3 = var3.bind(var1)(var4, var2);
            var2 = 0;
            var10 = var3[var2];
            var2 = 1;
            var9 = var3[var2];
            var2 = 2;
            var8 = var3[var2];
            var2 = var6.addUser;
            var12 = var6;
            var11 = var7;
            var2 = var12[var2](var11, var10, var9, var8, var7);
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'removeUserId';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var8 = arg1;
                var2 = arg2;
                var7 = this;
                var3 = var7.allUserIds;
                var1 = var3.delete;
                var1 = var1.bind(var3)(var8);
                var1 = null;
                if(!(var1 != var2)) { _fun0010_ip = 46; continue _fun0010 }
 31:
                var1 = var7.removeUserIdFromSection;
                var1 = var1.bind(var7)(var8, var2);
                if(var1) { _fun0010_ip = 95; continue _fun0010 }
 46:
                var5 = var7.sections;
                for(var2 in var5)
 60:
                {
 69:
                    var9 = var2;
                    var1 = var7.removeUserIdFromSection;
                    var1 = var1.bind(var7)(var8, var9);
                    if(!var1) { _fun0010_ip = 60; continue _fun0010 }
 87:
                    var1 = true;
                    return var1;
                }
 91:
                var1 = false;
                return var1;
 95:
                var1 = true;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'addUser';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3, arg4, arg5) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var4 = arg1;
                var3 = arg2;
                var5 = arg3;
                var2 = this;
                var6 = var2.allUserIds;
                var1 = var6.add;
                var1 = var1.bind(var6)(var4);
                var6 = _closure1_slot15;
                var1 = var6.getUser;
                var1 = var1.bind(var6)(var4);
                var6 = null;
                if(!(var6 != var1)) { _fun0011_ip = 230; continue _fun0011 }
 55:
                var6 = var1.username;
                var1 = '';
                if(!(var1 !== var6)) { _fun0011_ip = 230; continue _fun0011 }
 71:
                var1 = var2.sections;
                var1 = var3 in var1;
                if(var1) { _fun0011_ip = 117; continue _fun0011 }
 84:
                var6 = var2.sections;
                var1 = {};
                var1['sectionId'] = var3;
                var7 = {};
                var1['usersById'] = var7;
                var7 = new Array(0);
                var1['userIds'] = var7;
                var6[var3] = var1;
 117:
                var1 = var2.sections;
                var1 = var1[var3];
                var6 = var1.usersById;
                var3 = {};
                var3['userId'] = var4;
                var3['displayName'] = var5;
                var7 = arg4;
                var3['canViewChannel'] = var7;
                var6[var4] = var3;
                var3 = arg5;
                if(var3) { _fun0011_ip = 199; continue _fun0011 }
 161:
                var3 = var2.findUserIdSortedPosition;
                var7 = var3.bind(var2)(var1, var4, var5);
                var6 = var1.userIds;
                var5 = var6.splice;
                var3 = 0;
                var3 = var5.bind(var6)(var7, var3, var4);
                _fun0011_ip = 215; continue _fun0011;
 199:
                var3 = var1.userIds;
                var1 = var3.push;
                var1 = var1.bind(var3)(var4);
 215:
                var1 = var2.version;
                var1 = var1 + 1;
                var2['version'] = var1;
 230:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'findUserIdSortedPosition';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var1 = arg1;
                var8 = arg2;
                var7 = arg3;
                var2 = var1.userIds;
                var6 = var1.usersById;
                var1 = var2.length;
                var5 = 0;
                var1 = var5 < var1;
                var4 = null;
                if(!var1) { _fun0012_ip = 93; continue _fun0012 }
 37:
                var3 = var2[var5];
                var1 = var6[var3];
                var9 = var1.displayName;
                var1 = var5;
                if(!(var9 !== var7)) { _fun0012_ip = 77; continue _fun0012 }
 57:
                if(!(var4 != var9)) { _fun0012_ip = 71; continue _fun0012 }
 61:
                if(!(var4 != var7)) { _fun0012_ip = 81; continue _fun0012 }
 65:
                if(!(var7 < var9)) { _fun0012_ip = 81; continue _fun0012 }
 69:
                return var1;
 71:
                if(!(var4 != var7)) { _fun0012_ip = 81; continue _fun0012 }
 75:
                return var1;
 77:
                if(!(!(var8 < var3))) { _fun0012_ip = 100; continue _fun0012 }
 81:
                var5 = var1 + 1;
                var3 = var2.length;
                if(var5 < var3) { _fun0012_ip = 37; continue _fun0012 }
 93:
                var2 = var2.length;
                return var2;
 100:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'removeUserIdFromSection';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var7 = arg1;
                var2 = arg2;
                var4 = this;
                var _closure3_slot0 = var7;
                var1 = var4.sections;
                var5 = var1[var2];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0013_ip = 106; continue _fun0013 }
 34:
                var2 = var5.usersById;
                var2 = var7 in var2;
                if(!var2) { _fun0013_ip = 103; continue _fun0013 }
 47:
                var6 = var5.usersById;
                var6 = delete var6[var7];
                var7 = var5.userIds;
                var6 = var7.filter;
                var3 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var1 !== var2;
                    return var1;
                };
                var3 = var6.bind(var7)(var3);
                var5['userIds'] = var3;
                var3 = var4.version;
                var3 = var3 + 1;
                var4['version'] = var3;
                var2 = true;
 103:
                var1 = var2;
 106:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'findOldState';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var2 = arg1;
                var10 = this;
                var8 = var10.sections;
                for(var5 in var8)
 20:
                {
 29:
                    var3 = var5;
                    var1 = var10.sections;
                    var1 = var1[var3];
                    var4 = var1.usersById;
                    var4 = var2 in var4;
                    if(!var4) { _fun0014_ip = 20; continue _fun0014 }
 55:
                    var1 = var1.usersById;
                    var2 = var1[var2];
                    var1 = new Array(3);
                    var1[0] = var3;
                    var3 = var2.displayName;
                    var1[1] = var3;
                    var2 = var2.canViewChannel;
                    var1[2] = var2;
                    return var1;
                }
 94:
                var1 = new Array(3);
                var2 = undefined;
                var1[0] = var2;
                var1[1] = var2;
                var2 = false;
                var1[2] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'calculateNewState';
        var1['key'] = var6;
        var5 = function value(arg1, arg2) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var9 = arg1;
                var11 = arg2;
                var2 = this;
                var5 = _closure1_slot11;
                var4 = var5.getMember;
                var3 = var2.guildId;
                var7 = var4.bind(var5)(var3, var9);
                var4 = _closure1_slot15;
                var3 = var4.getUser;
                var8 = var3.bind(var4)(var9);
                var3 = var4.getCurrentUser;
                var10 = var3.bind(var4)();
                var4 = null;
                var5 = var4 == var8;
                var3 = undefined;
                var6 = undefined;
                if(var5) { _fun0015_ip = 75; continue _fun0015 }
 70:
                var6 = var8.id;
 75:
                var12 = var4 == var10;
                var5 = undefined;
                if(var12) { _fun0015_ip = 89; continue _fun0015 }
 84:
                var5 = var10.id;
 89:
                if(!(var6 !== var5)) { _fun0015_ip = 116; continue _fun0015 }
 93:
                var6 = _closure1_slot13;
                var5 = var6.getStatus;
                var2 = var2.guildId;
                var9 = var5.bind(var6)(var9, var2);
                _fun0015_ip = 130; continue _fun0015;
 116:
                var5 = _closure1_slot14;
                var2 = var5.getStatus;
                var9 = var2.bind(var5)();
 130:
                var2 = var4 != var8;
                if(!var2) { _fun0015_ip = 141; continue _fun0015 }
 137:
                var2 = var4 != var11;
 141:
                if(!var2) { _fun0015_ip = 200; continue _fun0015 }
 144:
                var6 = _closure1_slot2;
                var10 = _closure1_slot3;
                var5 = 15;
                var5 = var10[var5];
                var10 = var6.bind(var3)(var5);
                var6 = var10.can;
                var5 = {};
                var12 = _closure1_slot17;
                var12 = var12.VIEW_CHANNEL;
                var5['permission'] = var12;
                var5['user'] = var8;
                var5['context'] = var11;
                var2 = var6.bind(var10)(var5);
 200:
                var5 = _closure1_slot16;
                var5 = var5.OFFLINE;
                var10 = 'offline';
                var6 = var10;
                if(!(var9 !== var5)) { _fun0015_ip = 287; continue _fun0015 }
 221:
                var5 = _closure1_slot16;
                var5 = var5.INVISIBLE;
                var6 = var10;
                if(!(var9 !== var5)) { _fun0015_ip = 287; continue _fun0015 }
 238:
                var5 = _closure1_slot16;
                var5 = var5.UNKNOWN;
                var6 = var10;
                if(!(var9 !== var5)) { _fun0015_ip = 287; continue _fun0015 }
 255:
                var5 = var4 == var7;
                var9 = undefined;
                if(var5) { _fun0015_ip = 270; continue _fun0015 }
 264:
                var9 = var7.hoistRoleId;
 270:
                var10 = var4 != var9;
                var5 = 'online';
                if(!var10) { _fun0015_ip = 284; continue _fun0015 }
 281:
                var5 = var9;
 284:
                var6 = var5;
 287:
                var9 = var4 == var7;
                var5 = undefined;
                if(var9) { _fun0015_ip = 302; continue _fun0015 }
 296:
                var5 = var7.nick;
 302:
                if(!(var4 == var5)) { _fun0015_ip = 337; continue _fun0015 }
 306:
                var7 = _closure1_slot1;
                var9 = _closure1_slot3;
                var1 = 16;
                var1 = var9[var1];
                var7 = var7.bind(var3)(var1);
                var1 = var7.getName;
                var5 = var1.bind(var7)(var8);
 337:
                var1 = new Array(3);
                var1[0] = var6;
                var4 = var4 == var5;
                var3 = undefined;
                if(var4) { _fun0015_ip = 364; continue _fun0015 }
 354:
                var4 = var5.toLowerCase;
                var3 = var4.bind(var5)();
 364:
                var1[1] = var3;
                var1[2] = var2;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[9] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot19 = var2;
    var2 = 18;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ThreadMemberListStore() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot8;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot20;
                var1 = var1.bind(var3)();
                if(var1) { _fun0016_ip = 69; continue _fun0016 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0016_ip = 105; continue _fun0016;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot9;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var9 = var4.waitFor;
            var15 = _closure1_slot10;
            var14 = _closure1_slot11;
            var2 = _closure1_slot12;
            var12 = _closure1_slot13;
            var5 = _closure1_slot14;
            var10 = _closure1_slot15;
            var16 = var4;
            var13 = var2;
            var11 = var5;
            var3 = var16[var9](var15, var14, var13, var12, var11, var10, var9);
            var6 = var4.syncWith;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var2 = _closure1_slot12;
                    var1 = var2.getSubscribedThreadIds;
                    var9 = var1.bind(var2)();
                    var7 = _closure1_slot18;
                    var2 = false;
                    var1 = false;
                    for(var4 in var7)
 33:
                    {
                        var1 = var2;
 45:
                        var12 = var4;
                        var11 = var9.has;
                        var11 = var11.bind(var9)(var12);
                        if(var11) { _fun0017_ip = 33; continue _fun0017 }
 61:
                        var11 = _closure1_slot18;
                        var11 = delete var11[var12];
                        var2 = true;
                        _fun0017_ip = 33; continue _fun0017;
                    }
 73:
                    return var1;
                }
            };
            var2 = var6.bind(var4)(var3, var2);
            var3 = var4.syncWith;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var3 = _closure1_slot23;
                    var2 = _closure1_slot15;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var5 = var1 == var4;
                    var2 = undefined;
                    var1 = undefined;
                    if(var5) { _fun0018_ip = 38; continue _fun0018 }
 33:
                    var1 = var4.id;
 38:
                    var1 = var3.bind(var2)(var1);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getMemberListVersion';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var2 = _closure1_slot18;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0019_ip = 31; continue _fun0019 }
 25:
                var1 = var2.version;
 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getMemberListSections';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var2 = _closure1_slot18;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0020_ip = 31; continue _fun0020 }
 25:
                var1 = var2.sections;
 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'canUserViewChannel';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var2 = _closure1_slot18;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                if(!(var1 != var2)) { _fun0021_ip = 82; continue _fun0021 }
 20:
                var3 = var2.sections;
                var2 = arg2;
                var4 = var3[var2];
                var5 = var1 == var4;
                var3 = undefined;
                if(var5) { _fun0021_ip = 55; continue _fun0021 }
 42:
                var5 = var4.usersById;
                var4 = arg3;
                var3 = var5[var4];
 55:
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0021_ip = 70; continue _fun0021 }
 64:
                var2 = var3.canViewChannel;
 70:
                var1 = var1 != var2;
                if(!var1) { _fun0021_ip = 80; continue _fun0021 }
 77:
                var1 = var2;
 80:
                return var1;
 82:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ThreadMemberListStore';
    var8['displayName'] = var2;
    var2 = 19;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var11 = function handleConnectionOpen() {
        var1 = {};
        _closure1_slot18 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var11;
    var11 = function handleThreadMembersUpdate(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var4 = var3.id;
            var2 = _closure1_slot18;
            var2 = var4 in var2;
            if(var2) { _fun0022_ip = 32; continue _fun0022 }
 28:
            var2 = false;
            return var2;
 32:
            var6 = var3.addedMembers;
            var2 = null;
            if(!(var2 != var6)) { _fun0022_ip = 61; continue _fun0022 }
 44:
            var5 = var6.forEach;
            var4 = function(arg1) {
                var1 = arg1;
                var3 = var1.userId;
                var2 = _closure1_slot18;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var2 = var2[var1];
                var1 = var2.addUserId;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var4 = var5.bind(var6)(var4);
 61:
            var3 = var3.removedMemberIds;
            if(!(var2 != var3)) { _fun0022_ip = 88; continue _fun0022 }
 71:
            var2 = var3.forEach;
            var1 = function(arg1) {
                var2 = _closure1_slot18;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var3 = var2[var1];
                var2 = var3.removeUserId;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
 88:
            var1 = undefined;
            return var1;
        }
    };
    var2['THREAD_MEMBERS_UPDATE'] = var11;
    var11 = function handleThreadUpdate(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var1 = arg1;
            var2 = var1.channel;
            var4 = var2.id;
            var1 = _closure1_slot18;
            var1 = var4 in var1;
            if(!var1) { _fun0023_ip = 73; continue _fun0023 }
 27:
            var4 = var2.threadMetadata;
            var1 = null;
            var6 = var1 == var4;
            var1 = undefined;
            var5 = undefined;
            if(var6) { _fun0023_ip = 52; continue _fun0023 }
 46:
            var5 = var4.archived;
 52:
            var4 = true;
            if(!(var4 === var5)) { _fun0023_ip = 73; continue _fun0023 }
 58:
            var3 = _closure1_slot18;
            var2 = var2.id;
            var2 = delete var3[var2];
            return var1;
 73:
            var1 = false;
            return var1;
        }
    };
    var2['THREAD_UPDATE'] = var11;
    var11 = function handleThreadDelete(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var4 = var1.id;
            var3 = _closure1_slot18;
            var3 = var4 in var3;
            if(var3) { _fun0024_ip = 31; continue _fun0024 }
 27:
            var3 = false;
            return var3;
 31:
            var2 = _closure1_slot18;
            var1 = var1.id;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
        }
    };
    var2['THREAD_DELETE'] = var11;
    var11 = function handleChannelUpdates(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var1 = arg1;
            var4 = var1.channels;
            var1 = global;
            var3 = var1.Set;
            var2 = var4.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var14 = var2.bind(var4)(var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var15 = var2;
            var1 = new var15[var3](var14, var13);
            var10 = var1 instanceof Object ? var1 : var2;
            var8 = _closure1_slot18;
            var2 = false;
            var1 = false;
            for(var4 in var8)
 75:
            {
                var1 = var2;
 87:
                var12 = var4;
                var13 = var10.has;
                var11 = _closure1_slot18;
                var11 = var11[var12];
                var11 = var11.parentId;
                var11 = var13.bind(var10)(var11);
                if(!var11) { _fun0025_ip = 75; continue _fun0025 }
 117:
                var11 = _closure1_slot18;
                var12 = var11[var12];
                var11 = var12.rebuild;
                var11 = var11.bind(var12)();
                var2 = true;
                _fun0025_ip = 75; continue _fun0025;
            }
 139:
            return var1;
        }
    };
    var2['CHANNEL_UPDATES'] = var11;
    var11 = function handleThreadMemberListUpdate(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
            var1 = arg1;
            var3 = var1.threadId;
            var9 = var1.guildId;
            var6 = var1.members;
            var4 = _closure1_slot10;
            var1 = var4.getChannel;
            var5 = var1.bind(var4)(var3);
            var4 = null;
            var7 = var4 == var5;
            var1 = undefined;
            var8 = undefined;
            if(var7) { _fun0026_ip = 56; continue _fun0026 }
 50:
            var8 = var5.parent_id;
 56:
            if(!(var4 != var8)) { _fun0026_ip = 139; continue _fun0026 }
 60:
            var5 = _closure1_slot18;
            var4 = _closure1_slot19;
            var7 = var4.prototype;
            var7 = Object.create(var7, {constructor: {value: var4}});
            var13 = var7;
            var12 = var9;
            var11 = var8;
            var10 = var3;
            var4 = new var13[var4](var12, var11, var10, var9);
            var4 = var4 instanceof Object ? var4 : var7;
            var5[var3] = var4;
            var2 = _closure1_slot18;
            var4 = var2[var3];
            var3 = var4.rebuild;
            var5 = var6.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.user_id;
                return var1;
            };
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
 139:
            return var1;
        }
    };
    var2['THREAD_MEMBER_LIST_UPDATE'] = var11;
    var2['USER_UPDATE'] = var10;
    var11 = function handleUserUpdates(arg1) {
        var2 = arg1;
        var4 = var2.updates;
        var3 = var4.map;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.user;
            var3 = _closure1_slot23;
            var2 = var1.id;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['PRESENCE_UPDATES'] = var11;
    var2['GUILD_MEMBER_ADD'] = var10;
    var2['GUILD_MEMBER_UPDATE'] = var10;
    var2['GUILD_MEMBER_REMOVE'] = var10;
    var10 = function handlePresenceReplace(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
            var1 = arg1;
            var2 = var1.presences;
            var3 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 13;
            var1 = var6[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var3 = var1.bind(var5)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.user;
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0028_ip = 24; continue _fun0028 }
 19:
                    var1 = var2.id;
 24:
                    return var1;
                }
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var4 = _closure1_slot0;
            var1 = 17;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.isNotNullish;
            var2 = var2.bind(var3)(var1);
            var1 = var2.uniq;
            var2 = var1.bind(var2)();
            var1 = var2.value;
            var9 = var1.bind(var2)();
            var7 = _closure1_slot18;
            var2 = false;
            var1 = false;
            for(var4 in var7)
 125:
            {
                var1 = var2;
 137:
                var12 = var4;
                var11 = _closure1_slot18;
                var12 = var11[var12];
                var11 = var12.updateMultipleUserIds;
                var11 = var11.bind(var12)(var9);
                if(!var11) { _fun0027_ip = 125; continue _fun0027 }
 162:
                var2 = true;
                _fun0027_ip = 125; continue _fun0027;
            }
 166:
            return var1;
        }
    };
    var2['PRESENCES_REPLACE'] = var10;
    var10 = function handleGuildMembersChunkBatch(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var1 = arg1;
            var2 = var1.chunks;
            var1 = _closure1_slot21;
            var7 = undefined;
            var6 = var1.bind(var7)(var2);
            var3 = var6.bind(var7)();
            var2 = var3.done;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0029_ip = 158; continue _fun0029 }
 44:
            var2 = var4.value;
            var17 = var2.guildId;
            var11 = var2.members;
            var10 = var11.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.user;
                var1 = var1.id;
                return var1;
            };
            var16 = var10.bind(var11)(var2);
            var14 = _closure1_slot18;
            var2 = var3;
            var10 = var2;
            for(var11 in var14)
 95:
            {
                var10 = var2;
 107:
                var19 = var11;
                var18 = _closure1_slot18;
                var19 = var18[var19];
                var18 = var19.updateMultipleUserIds;
                var18 = var18.bind(var19)(var16, var17);
                if(!var18) { _fun0029_ip = 95; continue _fun0029 }
 133:
                var2 = true;
                _fun0029_ip = 95; continue _fun0029;
            }
 137:
            var11 = var6.bind(var7)();
            var2 = var11.done;
            var3 = var10;
            var4 = var11;
            var1 = var3;
            if(!var2) { _fun0029_ip = 44; continue _fun0029 }
 158:
            return var1;
        }
    };
    var2['GUILD_MEMBERS_CHUNK_BATCH'] = var10;
    var2['GUILD_ROLE_UPDATE'] = var9;
    var2['GUILD_ROLE_DELETE'] = var9;
    var4 = function handlePassiveUpdateV2(arg1) {
        var1 = arg1;
        var4 = var1.members;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                var2 = arg1;
                var4 = _closure1_slot23;
                var1 = arg2;
                var1 = var1.user;
                var3 = var1.id;
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                if(var1) { _fun0030_ip = 36; continue _fun0030 }
 33:
                var1 = var2;
 36:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['PASSIVE_UPDATE_V2'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/ThreadMemberListStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
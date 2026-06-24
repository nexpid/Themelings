// app/modules/guild_settings/audit_log/AuditLogUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var12;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var11;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot41;
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
            var7 = _closure1_slot41;
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
    var _closure1_slot40 = var1;
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
    var _closure1_slot41 = var1;
    var1 = function CommonChangeStrings() {
        var1 = {};
        var2 = _closure1_slot16;
        var3 = var2.REASON;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.t;
            var1 = var1["2IW3C5"];
            return var1;
        };
        var1[2] = var2;
        return var1;
    };
    var _closure1_slot42 = var1;
    var8 = function shouldNotRenderChangeDetail(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var5 = var3.actionType;
            var4 = _closure1_slot29;
            var4 = var4.DELETE;
            if(!(var5 === var4)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var5 = var3.action;
            var4 = _closure1_slot15;
            var4 = var4.MEMBER_BAN_ADD;
            if(!(var5 !== var4)) { _fun0004_ip = 36; continue _fun0004 }
case 5:
            var5 = var3.action;
            var4 = _closure1_slot15;
            var4 = var4.MEMBER_KICK;
            if(!(var5 !== var4)) { _fun0004_ip = 36; continue _fun0004 }
case 38:
            var5 = var3.action;
            var4 = _closure1_slot15;
            var4 = var4.MEMBER_PRUNE;
            if(!(var5 === var4)) { _fun0004_ip = 39; continue _fun0004 }
case 36:
            var4 = _closure1_slot37;
            var3 = var3.targetType;
            var5 = var4[var3];
            var3 = null;
            var3 = var3 != var5;
            if(!var3) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var4 = var2.key;
            var5 = var5[var4];
            var4 = true;
            var3 = var4 === var5;
case 40:
            return var3;
case 39:
            var2 = var2.key;
            var1 = _closure1_slot16;
            var1 = var1.REASON;
            var1 = var2 !== var1;
            return var1;
        }
    };
    var _closure1_slot43 = var8;
    var6 = function findChangeByKey(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg2;
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = var3.changes;
            var1 = null;
            var4 = var1 != var4;
            if(!var4) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var4 = var3.changes;
            var3 = var4.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.key;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 42:
            return var1;
        }
    };
    var _closure1_slot44 = var6;
    var1 = function findAllChangeByKey(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg2;
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = var3.changes;
            var1 = null;
            if(!(var1 == var4)) { _fun0006_ip = 3; continue _fun0006 }
case 44:
            var1 = new Array(0);
            _fun0006_ip = 45; continue _fun0006;
case 3:
            var4 = var3.changes;
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.key;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 45:
            return var1;
        }
    };
    var _closure1_slot45 = var1;
    var1 = function getPermissionChanges(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var2 = _closure1_slot2;
            var1 = _closure1_slot3;
            var11 = 21;
            var1 = var1[var11];
            var10 = undefined;
            var4 = var2.bind(var10)(var1);
            var2 = var4.deserialize;
            var7 = 'string';
            var8 = typeof var6;
            var1 = 0;
            if(!(var7 === var8)) { _fun0007_ip = 45; continue _fun0007 }
case 46:
            var1 = var6;
case 45:
            var4 = var2.bind(var4)(var1);
            var2 = _closure1_slot2;
            var1 = _closure1_slot3;
            var1 = var1[var11];
            var2 = var2.bind(var10)(var1);
            var1 = var2.deserialize;
            var6 = typeof var5;
            var3 = 0;
            if(!(var7 === var6)) { _fun0007_ip = 47; continue _fun0007 }
case 48:
            var3 = var5;
case 47:
            var3 = var1.bind(var2)(var3);
            var2 = _closure1_slot2;
            var1 = _closure1_slot3;
            var5 = var1[var11];
            var6 = var2.bind(var10)(var5);
            var5 = var6.remove;
            var9 = var5.bind(var6)(var3, var4);
            var1 = var1[var11];
            var2 = var2.bind(var10)(var1);
            var1 = var2.remove;
            var8 = var1.bind(var2)(var4, var3);
            var3 = new Array(0);
            var2 = new Array(0);
            var6 = _closure1_slot23;
            for(var1 in var6)
case 49:
            {
case 50:
                var14 = var1;
                var13 = _closure1_slot23;
                var14 = var13[var14];
                var15 = _closure1_slot2;
                var13 = _closure1_slot3;
                var13 = var13[var11];
                var15 = var15.bind(var10)(var13);
                var13 = var15.has;
                var13 = var13.bind(var15)(var9, var14);
                if(!var13) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                var13 = var3.push;
                var13 = var13.bind(var3)(var14);
case 51:
                var15 = _closure1_slot2;
                var13 = _closure1_slot3;
                var13 = var13[var11];
                var15 = var15.bind(var10)(var13);
                var13 = var15.has;
                var13 = var13.bind(var15)(var8, var14);
                if(!var13) { _fun0007_ip = 49; continue _fun0007 }
case 53:
                var13 = var2.push;
                var13 = var13.bind(var2)(var14);
                _fun0007_ip = 49; continue _fun0007;
            }
case 54:
            var1 = {};
            var1['added'] = var3;
            var1['removed'] = var2;
            return var1;
        }
    };
    var _closure1_slot46 = var1;
    var1 = function convertForumTag(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 == var3;
            if(var2) { _fun0008_ip = 55; continue _fun0008 }
case 56:
            var2 = {};
            var4 = var3.id;
            var2['id'] = var4;
            var4 = var3.name;
            var2['name'] = var4;
            var6 = var3.emoji_id;
            var5 = 0;
            var4 = undefined;
            if(!(var5 !== var6)) { _fun0008_ip = 57; continue _fun0008 }
case 2:
            var4 = var3.emoji_id;
case 57:
            var2['emojiId'] = var4;
            var4 = var3.emoji_name;
            var2['emojiName'] = var4;
            var3 = var3.moderated;
            var2['moderated'] = var3;
            var1 = var2;
case 55:
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var4 = function transformAppliedForumTagChange(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var3 = global;
            var6 = var3.Array;
            var5 = var6.isArray;
            var4 = var1.oldValue;
            var4 = var5.bind(var6)(var4);
            if(var4) { _fun0009_ip = 58; continue _fun0009 }
case 59:
            var4 = new Array(0);
            _fun0009_ip = 60; continue _fun0009;
case 58:
            var4 = var1.oldValue;
case 60:
            var7 = var3.Array;
            var6 = var7.isArray;
            var5 = var1.newValue;
            var5 = var6.bind(var7)(var5);
            if(var5) { _fun0009_ip = 61; continue _fun0009 }
case 38:
            var10 = new Array(0);
            _fun0009_ip = 62; continue _fun0009;
case 61:
            var10 = var1.newValue;
case 62:
            var7 = _closure1_slot10;
            var6 = var7.getChannel;
            var5 = arg2;
            var5 = var5.targetId;
            var6 = var6.bind(var7)(var5);
            var8 = null;
            var11 = var8 == var6;
            var7 = undefined;
            var5 = undefined;
            if(var11) { _fun0009_ip = 63; continue _fun0009 }
case 64:
            var5 = var6.parent_id;
case 63:
            var11 = var8 != var5;
            var5 = null;
            if(!var11) { _fun0009_ip = 65; continue _fun0009 }
case 66:
            var12 = _closure1_slot10;
            var11 = var12.getChannel;
            var6 = var6.parent_id;
            var5 = var11.bind(var12)(var6);
case 65:
            var6 = var8 == var5;
            var12 = undefined;
            if(var6) { _fun0009_ip = 67; continue _fun0009 }
case 68:
            var12 = var5.availableTags;
case 67:
            if(!(var8 == var12)) { _fun0009_ip = 69; continue _fun0009 }
case 70:
            var12 = new Array(0);
case 69:
            var6 = {};
            var _closure2_slot0 = var6;
            var11 = var12.forEach;
            var5 = function(arg1) {
                var4 = arg1;
                var3 = _closure2_slot0;
                var2 = var4.id;
                var1 = {};
                var5 = var4.name;
                var1['name'] = var5;
                var5 = var4.emojiId;
                var1['emojiId'] = var5;
                var4 = var4.emojiName;
                var1['emojiName'] = var4;
                var3[var2] = var1;
                var1 = undefined;
                return var1;
            };
            var5 = var11.bind(var12)(var5);
            var5 = var3.Set;
            var11 = var5.prototype;
            var11 = Object.create(var11, {constructor: {value: var5}});
            var18 = var11;
            var17 = var4;
            var5 = new var18[var5](var17, var16);
            var5 = var5 instanceof Object ? var5 : var11;
            var _closure2_slot1 = var5;
            var3 = var3.Set;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var18 = var5;
            var17 = var10;
            var3 = new var18[var3](var17, var16);
            var3 = var3 instanceof Object ? var3 : var5;
            var _closure2_slot2 = var3;
            var5 = var10.filter;
            var3 = function(arg1) {
                var3 = _closure2_slot1;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var5 = var5.bind(var10)(var3);
            var3 = var4.filter;
            var2 = function(arg1) {
                var3 = _closure2_slot2;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var2 = new Array(0);
            var3 = _closure1_slot40;
            var10 = var3.bind(var7)(var5);
            var5 = var10.bind(var7)();
            var3 = var5.done;
            if(var3) { _fun0009_ip = 71; continue _fun0009 }
case 27:
            var11 = var5.value;
            var14 = var6[var11];
            if(!(var8 == var14)) { _fun0009_ip = 72; continue _fun0009 }
case 73:
            var3 = {};
            var3['id'] = var11;
            var3['name'] = var11;
            var14 = var3;
case 72:
            var11 = var2.push;
            var13 = _closure1_slot9;
            var3 = _closure1_slot16;
            var17 = var3.AVAILABLE_TAG_ADD;
            var12 = var13.prototype;
            var12 = Object.create(var12, {constructor: {value: var13}});
            var18 = var12;
            var16 = null;
            var15 = var14;
            var3 = new var18[var13](var17, var16, var15, var14);
            var3 = var3 instanceof Object ? var3 : var12;
            var3 = var11.bind(var2)(var3);
            var11 = var10.bind(var7)();
            var3 = var11.done;
            var5 = var11;
            if(!var3) { _fun0009_ip = 27; continue _fun0009 }
case 71:
            var3 = _closure1_slot40;
            var5 = var3.bind(var7)(var4);
            var4 = var5.bind(var7)();
            var3 = var4.done;
            if(var3) { _fun0009_ip = 74; continue _fun0009 }
case 75:
            var10 = var4.value;
            var13 = var6[var10];
            if(!(var8 == var13)) { _fun0009_ip = 76; continue _fun0009 }
case 77:
            var3 = {};
            var3['id'] = var10;
            var3['name'] = var10;
            var13 = var3;
case 76:
            var10 = var2.push;
            var12 = _closure1_slot9;
            var3 = _closure1_slot16;
            var17 = var3.AVAILABLE_TAG_DELETE;
            var11 = var12.prototype;
            var11 = Object.create(var11, {constructor: {value: var12}});
            var18 = var11;
            var16 = null;
            var15 = var13;
            var3 = new var18[var12](var17, var16, var15, var14);
            var3 = var3 instanceof Object ? var3 : var11;
            var3 = var10.bind(var2)(var3);
            var10 = var5.bind(var7)();
            var3 = var10.done;
            var4 = var10;
            if(!var3) { _fun0009_ip = 75; continue _fun0009 }
case 74:
            var4 = var2.length;
            var3 = 0;
            if(!(var4 > var3)) { _fun0009_ip = 78; continue _fun0009 }
case 79:
            var1 = var2;
case 78:
            return var1;
        }
    };
    var _closure1_slot48 = var4;
    var2 = function transformAvailableForumTagChange(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var3 = var1.oldValue;
            var2 = var1.newValue;
            var5 = global;
            var7 = var5.Array;
            var6 = var7.isArray;
            var6 = var6.bind(var7)(var3);
            if(var6) { _fun0010_ip = 80; continue _fun0010 }
case 58:
            var3 = new Array(0);
case 80:
            var6 = var5.Array;
            var5 = var6.isArray;
            var5 = var5.bind(var6)(var2);
            if(var5) { _fun0010_ip = 81; continue _fun0010 }
case 7:
            var2 = new Array(0);
case 81:
            var5 = var3.length;
            var6 = 0;
            if(!(var6 === var5)) { _fun0010_ip = 82; continue _fun0010 }
case 83:
            var5 = var2.length;
            if(!(var6 !== var5)) { _fun0010_ip = 84; continue _fun0010 }
case 82:
            var14 = {};
            var _closure2_slot0 = var14;
            var13 = {};
            var _closure2_slot1 = var13;
            var6 = var3.forEach;
            var5 = function(arg1) {
                var3 = arg1;
                var2 = _closure2_slot0;
                var1 = var3.id;
                var2[var1] = var3;
                var1 = undefined;
                return var1;
            };
            var5 = var6.bind(var3)(var5);
            var5 = var2.forEach;
            var4 = function(arg1) {
                var3 = arg1;
                var2 = _closure2_slot1;
                var1 = var3.id;
                var2[var1] = var3;
                var1 = undefined;
                return var1;
            };
            var4 = var5.bind(var2)(var4);
            var5 = var3.length;
            var4 = var2.length;
            if(!(var5 < var4)) { _fun0010_ip = 85; continue _fun0010 }
case 86:
            var10 = var13;
            var8 = null;
            for(var6 in var10)
case 87:
            {
case 67:
                var4 = var6;
                var5 = var14[var4];
                if(var8 != var5) { _fun0010_ip = 87; continue _fun0010 }
case 88:
                var7 = _closure1_slot9;
                var6 = _closure1_slot16;
                var6 = var6.AVAILABLE_TAG_ADD;
                var9 = _closure1_slot47;
                var5 = var13[var4];
                var4 = undefined;
                var15 = var9.bind(var4)(var5);
                var5 = var7.prototype;
                var5 = Object.create(var5, {constructor: {value: var7}});
                var18 = var5;
                var17 = var6;
                var16 = null;
                var4 = new var18[var7](var17, var16, var15, var14);
                var4 = var4 instanceof Object ? var4 : var5;
                return var4;
            }
case 85:
            var3 = var3.length;
            var2 = var2.length;
            if(!(var3 > var2)) { _fun0010_ip = 89; continue _fun0010 }
case 90:
            var8 = var14;
            var6 = null;
            for(var4 in var8)
case 91:
            {
case 92:
                var2 = var4;
                var3 = var13[var2];
                if(var6 != var3) { _fun0010_ip = 91; continue _fun0010 }
case 93:
                var5 = _closure1_slot9;
                var4 = _closure1_slot16;
                var4 = var4.AVAILABLE_TAG_DELETE;
                var7 = _closure1_slot47;
                var3 = var14[var2];
                var2 = undefined;
                var15 = var7.bind(var2)(var3);
                var3 = var5.prototype;
                var3 = Object.create(var3, {constructor: {value: var5}});
                var18 = var3;
                var17 = var4;
                var16 = null;
                var2 = new var18[var5](var17, var16, var15, var14);
                var2 = var2 instanceof Object ? var2 : var3;
                return var2;
            }
case 89:
            var11 = var14;
            var6 = null;
            var7 = undefined;
            for(var8 in var11)
case 94:
            {
case 95:
                var2 = var8;
                var4 = var14[var2];
                var3 = var13[var2];
                var2 = var6 == var3;
                var5 = undefined;
                if(var2) { _fun0010_ip = 96; continue _fun0010 }
case 97:
                var5 = var3.name;
case 96:
                var2 = var4.name;
                if(!(var5 === var2)) { _fun0010_ip = 98; continue _fun0010 }
case 99:
                var2 = var6 == var3;
                var5 = undefined;
                if(var2) { _fun0010_ip = 100; continue _fun0010 }
case 101:
                var5 = var3.emoji_id;
case 100:
                var2 = var4.emoji_id;
                if(!(var5 === var2)) { _fun0010_ip = 98; continue _fun0010 }
case 102:
                var2 = var6 == var3;
                var5 = undefined;
                if(var2) { _fun0010_ip = 77; continue _fun0010 }
case 103:
                var5 = var3.emoji_name;
case 77:
                var2 = var4.emoji_name;
                if(var5 === var2) { _fun0010_ip = 94; continue _fun0010 }
case 98:
                var6 = _closure1_slot9;
                var5 = _closure1_slot16;
                var5 = var5.AVAILABLE_TAG_EDIT;
                var2 = _closure1_slot47;
                var16 = var2.bind(var7)(var4);
                var15 = var2.bind(var7)(var3);
                var3 = var6.prototype;
                var3 = Object.create(var3, {constructor: {value: var6}});
                var18 = var3;
                var17 = var5;
                var2 = new var18[var6](var17, var16, var15, var14);
                var2 = var2 instanceof Object ? var2 : var3;
                return var2;
            }
case 104:
            return var1;
case 84:
            return var1;
        }
    };
    var _closure1_slot49 = var2;
    var1 = function convertValue(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var8 = arg2;
            var7 = arg3;
            var5 = var2.newValue;
            var4 = var2.oldValue;
            var3 = var2.newValue;
            var1 = null;
            if(!(var1 != var3)) { _fun0011_ip = 105; continue _fun0011 }
case 33:
            var3 = var2.newValue;
            var9 = undefined;
            var6 = var8.bind(var9)(var3);
            var10 = var1 != var7;
            if(!var10) { _fun0011_ip = 106; continue _fun0011 }
case 45:
            var10 = var1 != var6;
case 106:
            var3 = var6;
            if(!var10) { _fun0011_ip = 107; continue _fun0011 }
case 108:
            var3 = var7.bind(var9)(var6);
case 107:
            var5 = var3;
case 105:
            var3 = var2.oldValue;
            if(!(var1 != var3)) { _fun0011_ip = 109; continue _fun0011 }
case 62:
            var3 = var2.oldValue;
            var6 = undefined;
            var3 = var8.bind(var6)(var3);
            var8 = var1 != var7;
            if(!var8) { _fun0011_ip = 110; continue _fun0011 }
case 111:
            var8 = var1 != var3;
case 110:
            var1 = var3;
            if(!var8) { _fun0011_ip = 112; continue _fun0011 }
case 113:
            var1 = var7.bind(var6)(var3);
case 112:
            var4 = var1;
case 109:
            var3 = _closure1_slot9;
            var1 = var2.key;
            if(var4) { _fun0011_ip = 114; continue _fun0011 }
case 115:
            var4 = var2.oldValue;
case 114:
            if(var5) { _fun0011_ip = 116; continue _fun0011 }
case 117:
            var5 = var2.newValue;
case 116:
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var14 = var2;
            var13 = var1;
            var12 = var4;
            var11 = var5;
            var1 = new var14[var3](var13, var12, var11, var10);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var _closure1_slot50 = var1;
    var1 = function getTargetValue(arg1, arg2, arg3, arg4, arg5) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var6 = arg1;
            var7 = arg4;
            var1 = arg5;
            var2 = arg2;
            var _closure2_slot0 = var2;
            var3 = null;
            if(!(var3 == var1)) { _fun0012_ip = 3; continue _fun0012 }
case 44:
            var1 = var6.targetId;
case 3:
            var2 = arg3;
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var9 = var3 != var2;
            if(!var9) { _fun0012_ip = 42; continue _fun0012 }
case 118:
            var9 = var3 != var7;
case 42:
            var8 = null;
            if(!var9) { _fun0012_ip = 7; continue _fun0012 }
case 28:
            var8 = var7.bind(var4)(var2);
case 7:
            var4 = var8;
            if(!(var3 == var4)) { _fun0012_ip = 119; continue _fun0012 }
case 107:
            var2 = _closure1_slot14;
            var7 = var2.deletedTargets;
            var2 = var6.targetType;
            var2 = var7[var2];
            var7 = var3 != var2;
            if(!var7) { _fun0012_ip = 120; continue _fun0012 }
case 121:
            var9 = var2[var1];
            var7 = var3 != var9;
case 120:
            var4 = var8;
            if(!var7) { _fun0012_ip = 119; continue _fun0012 }
case 122:
            var4 = var2[var1];
case 119:
            var2 = var4;
            if(!(var3 == var2)) { _fun0012_ip = 19; continue _fun0012 }
case 123:
            var7 = var6.changes;
            var2 = var4;
            if(!(var3 != var7)) { _fun0012_ip = 19; continue _fun0012 }
case 124:
            var7 = var6.changes;
            var6 = var7.find;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.key;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var2 = var4;
            if(!(var3 != var5)) { _fun0012_ip = 19; continue _fun0012 }
case 17:
            var4 = var5.newValue;
            if(var4) { _fun0012_ip = 125; continue _fun0012 }
case 69:
            var4 = var5.oldValue;
case 125:
            var2 = var4;
case 19:
            if(!(var3 != var2)) { _fun0012_ip = 126; continue _fun0012 }
case 127:
            var1 = var2;
case 126:
            return var1;
        }
    };
    var _closure1_slot51 = var1;
    var1 = function convertSubtarget(arg1, arg2, arg3) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var4 = arg3;
            var2 = arg2;
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var6 = null;
            var5 = var6 != var2;
            if(!var5) { _fun0013_ip = 37; continue _fun0013 }
case 128:
            var5 = var6 != var4;
case 37:
            if(!var5) { _fun0013_ip = 129; continue _fun0013 }
case 59:
            var1 = var4.bind(var3)(var2);
case 129:
            return var1;
        }
    };
    var _closure1_slot52 = var1;
    var1 = function getNullableOldValueString(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var1 = function(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = arg1;
                var2 = var1.oldValue;
                var1 = null;
                if(!(var1 != var2)) { _fun0014_ip = 44; continue _fun0014 }
case 130:
                var1 = _closure2_slot1;
                _fun0014_ip = 131; continue _fun0014;
case 44:
                var1 = _closure2_slot0;
case 131:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot53 = var1;
    var1 = function getNullableNewValueString(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var1 = function(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = arg1;
                var2 = var1.newValue;
                var1 = null;
                if(!(var1 != var2)) { _fun0015_ip = 44; continue _fun0015 }
case 130:
                var1 = _closure2_slot1;
                _fun0015_ip = 131; continue _fun0015;
case 44:
                var1 = _closure2_slot0;
case 131:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot54 = var1;
    var1 = function getNullableNewOrOldValueString(arg1, arg2, arg3, arg4) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = arg4;
        var _closure2_slot3 = var2;
        var1 = function(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var1 = arg1;
                var3 = var1.newValue;
                var2 = null;
                if(!(var2 != var3)) { _fun0016_ip = 128; continue _fun0016 }
case 130:
                var3 = var1.oldValue;
                if(!(var2 == var3)) { _fun0016_ip = 132; continue _fun0016 }
case 128:
                var3 = var1.newValue;
                if(!(var2 == var3)) { _fun0016_ip = 108; continue _fun0016 }
case 133:
                var1 = var1.oldValue;
                if(!(var2 == var1)) { _fun0016_ip = 134; continue _fun0016 }
case 135:
                var1 = _closure2_slot3;
                _fun0016_ip = 7; continue _fun0016;
case 134:
                var1 = _closure2_slot2;
case 7:
                _fun0016_ip = 35; continue _fun0016;
case 108:
                var1 = _closure2_slot1;
case 35:
                _fun0016_ip = 136; continue _fun0016;
case 132:
                var1 = _closure2_slot0;
case 136:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot55 = var1;
    var1 = function getNewValueStringByBoolean(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var1 = function(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var1 = arg1;
                var1 = var1.newValue;
                if(var1) { _fun0017_ip = 137; continue _fun0017 }
case 130:
                var1 = _closure2_slot1;
                _fun0017_ip = 128; continue _fun0017;
case 137:
                var1 = _closure2_slot0;
case 128:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot56 = var1;
    var1 = function getNullableNewValueStringByKey(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.newValue;
            var1 = _closure2_slot0;
            var1 = var1[var2];
            return var1;
        };
        return var1;
    };
    var _closure1_slot57 = var1;
    var1 = function getNewValueStringByKeyOrDefault(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var1 = function(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = arg1;
                var1 = var1.newValue;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0018_ip = 3; continue _fun0018 }
case 138:
                var1 = _closure2_slot1;
case 3:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot58 = var1;
    var1 = global;
    var13 = var1.Object;
    var9 = var13.defineProperty;
    var7 = {};
    var15 = true;
    var7['value'] = var15;
    var1 = '__esModule';
    var1 = var9.bind(var13)(var3, var1, var7);
    var1 = 0;
    var7 = var11[var1];
    var1 = undefined;
    var7 = var12.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 1;
    var7 = var11[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 2;
    var7 = var11[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var11[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var11[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var11[var7];
    var7 = var10.bind(var1)(var7);
    var7 = var7.AuditLogChange;
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var11[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var11[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var7 = 8;
    var7 = var11[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var11[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var7 = 10;
    var7 = var11[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot14 = var7;
    var7 = 11;
    var7 = var11[var7];
    var7 = var10.bind(var1)(var7);
    var9 = var7.AuditLogActions;
    var _closure1_slot15 = var9;
    var14 = var7.AuditLogChangeKeys;
    var _closure1_slot16 = var14;
    var9 = var7.AuditLogTargetTypes;
    var _closure1_slot17 = var9;
    var13 = var7.MFALevels;
    var _closure1_slot18 = var13;
    var13 = var7.VerificationLevels;
    var _closure1_slot19 = var13;
    var13 = var7.UserNotificationSettings;
    var _closure1_slot20 = var13;
    var13 = var7.GuildExplicitContentFilterTypes;
    var _closure1_slot21 = var13;
    var13 = var7.ChannelTypes;
    var _closure1_slot22 = var13;
    var13 = var7.Permissions;
    var _closure1_slot23 = var13;
    var13 = var7.NOOP_NULL;
    var _closure1_slot24 = var13;
    var13 = var7.VideoQualityMode;
    var _closure1_slot25 = var13;
    var13 = var7.ApplicationCommandPermissionTypes;
    var _closure1_slot26 = var13;
    var13 = var7.AuditLogSubtargetTypes;
    var _closure1_slot27 = var13;
    var13 = var7.SystemChannelFlags;
    var _closure1_slot28 = var13;
    var7 = var7.AuditLogActionTypes;
    var _closure1_slot29 = var7;
    var7 = 12;
    var7 = var11[var7];
    var7 = var10.bind(var1)(var7);
    var7 = var7.ChannelFlags;
    var _closure1_slot30 = var7;
    var7 = 13;
    var7 = var11[var7];
    var7 = var10.bind(var1)(var7);
    var7 = var7.AutomodTriggerType;
    var _closure1_slot31 = var7;
    var7 = 14;
    var7 = var11[var7];
    var7 = var10.bind(var1)(var7);
    var13 = var7.GuildScheduledEventEntityTypes;
    var _closure1_slot32 = var13;
    var13 = var7.GuildScheduledEventStatus;
    var _closure1_slot33 = var13;
    var7 = var7.GuildScheduledEventPrivacyLevel;
    var _closure1_slot34 = var7;
    var7 = 15;
    var7 = var11[var7];
    var13 = var12.bind(var1)(var7);
    var7 = var13.prototype;
    var12 = Object.create(var7, {constructor: {value: var13}});
    var20 = 'AuditLogUtils';
    var21 = var12;
    var7 = new var21[var13](var20, var19);
    var7 = var7 instanceof Object ? var7 : var12;
    var _closure1_slot35 = var7;
    var12 = 16;
    var7 = var11[var12];
    var7 = var10.bind(var1)(var7);
    var7 = var7.TimeUnits;
    var13 = var7.DAYS;
    var7 = new Array(4);
    var7[0] = var13;
    var13 = var11[var12];
    var13 = var10.bind(var1)(var13);
    var13 = var13.TimeUnits;
    var13 = var13.HOURS;
    var7[1] = var13;
    var13 = var11[var12];
    var13 = var10.bind(var1)(var13);
    var13 = var13.TimeUnits;
    var13 = var13.MINUTES;
    var7[2] = var13;
    var13 = var11[var12];
    var13 = var10.bind(var1)(var13);
    var13 = var13.TimeUnits;
    var13 = var13.SECONDS;
    var7[3] = var13;
    var _closure1_slot36 = var7;
    var7 = {};
    var16 = var9.CHANNEL;
    var13 = {};
    var17 = var14.ID;
    var13[16] = var15;
    var17 = var14.PERMISSION_OVERWRITES;
    var13[16] = var15;
    var7[15] = var13;
    var16 = var9.CHANNEL_OVERWRITE;
    var13 = {};
    var17 = var14.TYPE;
    var13[16] = var15;
    var17 = var14.ID;
    var13[16] = var15;
    var17 = var14.PERMISSION_OVERWRITES;
    var13[16] = var15;
    var7[15] = var13;
    var16 = var9.INVITE;
    var13 = {};
    var17 = var14.INVITER_ID;
    var13[16] = var15;
    var17 = var14.USES;
    var13[16] = var15;
    var7[15] = var13;
    var16 = var9.WEBHOOK;
    var13 = {};
    var17 = var14.TYPE;
    var13[16] = var15;
    var17 = var14.APPLICATION_ID;
    var13[16] = var15;
    var7[15] = var13;
    var16 = var9.INTEGRATION;
    var13 = {};
    var17 = var14.TYPE;
    var13[16] = var15;
    var17 = var14.NAME;
    var13[16] = var15;
    var7[15] = var13;
    var16 = var9.THREAD;
    var13 = {};
    var17 = var14.ID;
    var13[16] = var15;
    var17 = var14.TYPE;
    var13[16] = var15;
    var7[15] = var13;
    var16 = var9.STICKER;
    var13 = {};
    var17 = var14.ID;
    var13[16] = var15;
    var17 = var14.TYPE;
    var13[16] = var15;
    var17 = var14.ASSET;
    var13[16] = var15;
    var17 = var14.FORMAT_TYPE;
    var13[16] = var15;
    var17 = var14.AVAILABLE;
    var13[16] = var15;
    var17 = var14.GUILD_ID;
    var13[16] = var15;
    var7[15] = var13;
    var16 = var9.GUILD_HOME;
    var13 = {};
    var17 = var14.ENTITY_TYPE;
    var13[16] = var15;
    var7[15] = var13;
    var16 = var9.GUILD_ONBOARDING;
    var13 = {};
    var17 = var14.PROMPTS;
    var13[16] = var15;
    var7[15] = var13;
    var13 = var9.GUILD_SOUNDBOARD;
    var9 = {};
    var16 = var14.ID;
    var9[15] = var15;
    var14 = var14.SOUND_ID;
    var9[13] = var15;
    var7[12] = var9;
    var _closure1_slot37 = var7;
    var7 = function ACTION_FILTER_ITEMS() {
        var2 = {};
        var1 = _closure1_slot15;
        var1 = var1.ALL;
        var2['value'] = var1;
        var7 = _closure1_slot0;
        var8 = _closure1_slot3;
        var3 = 17;
        var1 = var8[var3];
        var6 = undefined;
        var1 = var7.bind(var6)(var1);
        var9 = var1.intl;
        var5 = var9.string;
        var1 = var8[var3];
        var1 = var7.bind(var6)(var1);
        var1 = var1.t;
        var1 = var1.QxEVcv;
        var1 = var5.bind(var9)(var1);
        var2['label'] = var1;
        var1 = var8[var3];
        var1 = var7.bind(var6)(var1);
        var9 = var1.intl;
        var5 = var9.string;
        var1 = var8[var3];
        var1 = var7.bind(var6)(var1);
        var1 = var1.t;
        var1 = var1.an9Ry3;
        var1 = var5.bind(var9)(var1);
        var2['valueLabel'] = var1;
        var1 = new Array(67);
        var1[0] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.GUILD_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5["5INZa3"];
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[1] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.CHANNEL_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5["2uh4vJ"];
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[2] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.CHANNEL_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.mGsBLV;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[3] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.CHANNEL_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.hCHzAr;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[4] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.CHANNEL_OVERWRITE_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5["8TnAMP"];
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[5] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.CHANNEL_OVERWRITE_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.Jqx0Bi;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[6] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.CHANNEL_OVERWRITE_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.gBXOr4;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[7] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.MEMBER_KICK;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.Q1/hN8;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[8] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.MEMBER_PRUNE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.tOTTja;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[9] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.MEMBER_BAN_ADD;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.NfPn+e;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[10] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.MEMBER_BAN_REMOVE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.XCsGfI;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[11] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.MEMBER_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.F/jmNJ;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[12] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.MEMBER_ROLE_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.zAveSI;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[13] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.MEMBER_MOVE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.QshteR;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[14] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.MEMBER_DISCONNECT;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.Z45os7;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[15] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.BOT_ADD;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.vuH24Z;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[16] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.THREAD_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5["+zl0DG"];
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[17] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.THREAD_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.rbIry3;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[18] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.THREAD_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.hFjNEA;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[19] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.ROLE_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.AbxKtv;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[20] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.ROLE_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.t3Z6sU;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[21] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.ROLE_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.YsFpa4;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[22] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.ONBOARDING_PROMPT_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.ZV9tqc;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[23] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.ONBOARDING_PROMPT_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.PcOdvX;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[24] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.ONBOARDING_PROMPT_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5["+r33Na"];
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[25] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.ONBOARDING_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.uDADde;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[26] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.ONBOARDING_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.J1H1wg;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[27] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.HOME_SETTINGS_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.Di4cvI;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[28] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.HOME_SETTINGS_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.tzyrJH;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[29] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.INVITE_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5["0BNJdX"];
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[30] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.INVITE_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.o++obV;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[31] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.INVITE_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.iP40Az;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[32] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.WEBHOOK_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.tBF4+S;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[33] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.WEBHOOK_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.eV3McO;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[34] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.WEBHOOK_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.AAL3K1;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[35] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.EMOJI_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.RuWm0V;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[36] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.EMOJI_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.WzdUY7;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[37] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.EMOJI_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.c3dK2L;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[38] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.MESSAGE_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.daTfXh;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[39] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.MESSAGE_BULK_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.nrBxeh;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[40] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.MESSAGE_PIN;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.MUldyN;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[41] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.MESSAGE_UNPIN;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.n4zKhA;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[42] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.INTEGRATION_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.deNm8x;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[43] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.INTEGRATION_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.HT7Sfg;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[44] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.INTEGRATION_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5["+kJ09q"];
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[45] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.STICKER_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5["3DzNjU"];
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[46] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.STICKER_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.tdhW5b;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[47] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.STICKER_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5["+ZhGOk"];
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[48] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.STAGE_INSTANCE_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.sPbjA6;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[49] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.STAGE_INSTANCE_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.cW9LfJ;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[50] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.STAGE_INSTANCE_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.U1r+yD;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[51] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.GUILD_SCHEDULED_EVENT_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.H81Zyy;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[52] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.GUILD_SCHEDULED_EVENT_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.FM69l+;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[53] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.GUILD_SCHEDULED_EVENT_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.Rq28Bh;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[54] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.APPLICATION_COMMAND_PERMISSION_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.iPdFOt;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[55] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.AUTO_MODERATION_BLOCK_MESSAGE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.gNq5z6;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[56] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.AUTO_MODERATION_RULE_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.f72Zqb;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[57] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.AUTO_MODERATION_RULE_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.XeqIiv;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[58] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.AUTO_MODERATION_RULE_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.syAApU;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[59] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.GUILD_HOME_FEATURE_ITEM;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.lhG5KN;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[60] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.GUILD_HOME_REMOVE_ITEM;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.lRPRwS;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[61] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.SOUNDBOARD_SOUND_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.yoRi5r;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[62] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.SOUNDBOARD_SOUND_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.uKlG0Z;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[63] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.SOUNDBOARD_SOUND_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.gq0iCT;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[64] = var2;
        var2 = {};
        var5 = _closure1_slot15;
        var5 = var5.VOICE_CHANNEL_STATUS_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.rGr0YM;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[65] = var2;
        var2 = {};
        var4 = _closure1_slot15;
        var4 = var4.VOICE_CHANNEL_STATUS_DELETE;
        var2['value'] = var4;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var3 = var8[var3];
        var3 = var7.bind(var6)(var3);
        var3 = var3.t;
        var3 = var3.V9PEQ4;
        var3 = var4.bind(var5)(var3);
        var2['label'] = var3;
        var1[66] = var2;
        return var1;
    };
    var _closure1_slot38 = var7;
    var9 = {};
    var13 = var11[var12];
    var13 = var10.bind(var1)(var13);
    var13 = var13.TimeUnits;
    var14 = var13.SECONDS;
    var13 = function(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot3;
        var1 = 17;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.geSp4K;
        var1 = {};
        var5 = arg1;
        var1['seconds'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var9[13] = var13;
    var13 = var11[var12];
    var13 = var10.bind(var1)(var13);
    var13 = var13.TimeUnits;
    var14 = var13.MINUTES;
    var13 = function(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot3;
        var1 = 17;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.iXLF9W;
        var1 = {};
        var5 = arg1;
        var1['minutes'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var9[13] = var13;
    var13 = var11[var12];
    var13 = var10.bind(var1)(var13);
    var13 = var13.TimeUnits;
    var14 = var13.HOURS;
    var13 = function(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot3;
        var1 = 17;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.xCjYxK;
        var1 = {};
        var5 = arg1;
        var1['hours'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var9[13] = var13;
    var12 = var11[var12];
    var12 = var10.bind(var1)(var12);
    var12 = var12.TimeUnits;
    var13 = var12.DAYS;
    var12 = function(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot3;
        var1 = 17;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.k2UNz+;
        var1 = {};
        var5 = arg1;
        var1['days'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var9[12] = var12;
    var _closure1_slot39 = var9;
    var9 = 31;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/guild_settings/audit_log/AuditLogUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var9 = function getChangeStrings(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var2 = arg1;
            var5 = var2.targetType;
            var4 = _closure1_slot17;
            var4 = var4.GUILD;
            if(!(var4 !== var5)) { _fun0019_ip = 139; continue _fun0019 }
case 131:
            var4 = _closure1_slot17;
            var4 = var4.CHANNEL;
            if(!(var4 !== var5)) { _fun0019_ip = 140; continue _fun0019 }
case 141:
            var4 = _closure1_slot17;
            var4 = var4.CHANNEL_OVERWRITE;
            if(!(var4 !== var5)) { _fun0019_ip = 140; continue _fun0019 }
case 81:
            var4 = _closure1_slot17;
            var4 = var4.USER;
            if(!(var4 !== var5)) { _fun0019_ip = 142; continue _fun0019 }
case 55:
            var4 = _closure1_slot17;
            var4 = var4.ROLE;
            if(!(var4 !== var5)) { _fun0019_ip = 143; continue _fun0019 }
case 144:
            var4 = _closure1_slot17;
            var4 = var4.ONBOARDING_PROMPT;
            if(!(var4 !== var5)) { _fun0019_ip = 145; continue _fun0019 }
case 112:
            var4 = _closure1_slot17;
            var4 = var4.GUILD_ONBOARDING;
            if(!(var4 !== var5)) { _fun0019_ip = 146; continue _fun0019 }
case 147:
            var4 = _closure1_slot17;
            var4 = var4.HOME_SETTINGS;
            if(!(var4 !== var5)) { _fun0019_ip = 148; continue _fun0019 }
case 149:
            var4 = _closure1_slot17;
            var4 = var4.INVITE;
            if(!(var4 !== var5)) { _fun0019_ip = 150; continue _fun0019 }
case 151:
            var4 = _closure1_slot17;
            var4 = var4.WEBHOOK;
            if(!(var4 !== var5)) { _fun0019_ip = 152; continue _fun0019 }
case 125:
            var4 = _closure1_slot17;
            var4 = var4.EMOJI;
            if(!(var4 !== var5)) { _fun0019_ip = 153; continue _fun0019 }
case 154:
            var4 = _closure1_slot17;
            var4 = var4.STICKER;
            if(!(var4 !== var5)) { _fun0019_ip = 155; continue _fun0019 }
case 156:
            var4 = _closure1_slot17;
            var4 = var4.INTEGRATION;
            if(!(var4 !== var5)) { _fun0019_ip = 157; continue _fun0019 }
case 158:
            var4 = _closure1_slot17;
            var4 = var4.STAGE_INSTANCE;
            if(!(var4 !== var5)) { _fun0019_ip = 159; continue _fun0019 }
case 160:
            var4 = _closure1_slot17;
            var4 = var4.GUILD_SCHEDULED_EVENT;
            if(!(var4 !== var5)) { _fun0019_ip = 161; continue _fun0019 }
case 162:
            var4 = _closure1_slot17;
            var4 = var4.GUILD_SCHEDULED_EVENT_EXCEPTION;
            if(!(var4 !== var5)) { _fun0019_ip = 163; continue _fun0019 }
case 164:
            var4 = _closure1_slot17;
            var4 = var4.THREAD;
            if(!(var4 !== var5)) { _fun0019_ip = 165; continue _fun0019 }
case 166:
            var4 = _closure1_slot17;
            var4 = var4.APPLICATION_COMMAND;
            if(!(var4 !== var5)) { _fun0019_ip = 167; continue _fun0019 }
case 168:
            var4 = _closure1_slot17;
            var4 = var4.AUTO_MODERATION_RULE;
            if(!(var4 !== var5)) { _fun0019_ip = 169; continue _fun0019 }
case 170:
            var4 = _closure1_slot17;
            var4 = var4.GUILD_SOUNDBOARD;
            if(!(var4 !== var5)) { _fun0019_ip = 77; continue _fun0019 }
case 171:
            var4 = _closure1_slot17;
            var4 = var4.VOICE_CHANNEL_STATUS;
            if(!(var4 !== var5)) { _fun0019_ip = 102; continue _fun0019 }
case 172:
            var4 = _closure1_slot17;
            var4 = var4.GUILD_MEMBER_VERIFICATION;
            if(!(var4 !== var5)) { _fun0019_ip = 173; continue _fun0019 }
case 174:
            var4 = _closure1_slot17;
            var4 = var4.GUILD_PROFILE;
            if(!(var4 !== var5)) { _fun0019_ip = 175; continue _fun0019 }
case 176:
            var5 = _closure1_slot42;
            var4 = undefined;
            var4 = var5.bind(var4)();
            return var4;
case 175:
            var5 = function GuildProfileChangeStrings() {
                var1 = {};
                var4 = _closure1_slot16;
                var5 = var4.DESCRIPTION;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.nsUZKY;
                    return var1;
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.BRAND_COLOR_PRIMARY;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.qe9mgN;
                    return var1;
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.CUSTOM_BANNER_HASH;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["04b5KC"];
                    return var1;
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.TRAITS;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.dEy9WO;
                    return var1;
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.GAME_APPLICATION_IDS;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["8BOT3x"];
                    return var1;
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var4 = var4.VISIBILITY;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.bCl1Ep;
                    return var1;
                };
                var1[3] = var3;
                var3 = _closure1_slot16;
                var3 = var3.SERVER_TAG;
                var6 = _closure1_slot54;
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var2 = 17;
                var4 = var8[var2];
                var5 = undefined;
                var4 = var7.bind(var5)(var4);
                var4 = var4.t;
                var4 = var4.ix1dnX;
                var2 = var8[var2];
                var2 = var7.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["4LKpKb"];
                var2 = var6.bind(var5)(var4, var2);
                var1[2] = var2;
                return var1;
            };
            var4 = undefined;
            var4 = var5.bind(var4)();
            return var4;
case 173:
            var5 = function MemberVerificationChangeStrings() {
                var1 = {};
                var4 = _closure1_slot16;
                var5 = var4.VERIFICATION_ENABLED;
                var4 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.newValue;
                        var1 = true;
                        if(!(var1 !== var2)) { _fun0020_ip = 4; continue _fun0020 }
case 130:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var1 = var1.t;
                        var1 = var1.WYT6ka;
                        _fun0020_ip = 47; continue _fun0020;
case 4:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 17;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.t;
                        var1 = var2.fnkzDY;
case 47:
                        return var1;
                    }
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var4 = var4.MANUAL_APPROVAL_ENABLED;
                var3 = function(arg1) {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.newValue;
                        var1 = true;
                        if(!(var1 !== var2)) { _fun0021_ip = 4; continue _fun0021 }
case 130:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var1 = var1.t;
                        var1 = var1.WxyOtj;
                        _fun0021_ip = 47; continue _fun0021;
case 4:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 17;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.t;
                        var1 = var2.jzSvVd;
case 47:
                        return var1;
                    }
                };
                var1[3] = var3;
                var3 = _closure1_slot42;
                var2 = undefined;
                var6 = var3.bind(var2)();
                var7 = var1;
                var2 = copyDataProperties(var7, var6);
                return var1;
            };
            var4 = undefined;
            var4 = var5.bind(var4)();
            return var4;
case 102:
            var5 = function VoiceChannelStatusStrings() {
                var1 = {};
                var3 = _closure1_slot16;
                var4 = var3.STATUS;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.HyCSnI;
                    return var1;
                };
                var1[3] = var3;
                var3 = _closure1_slot42;
                var2 = undefined;
                var5 = var3.bind(var2)();
                var6 = var1;
                var2 = copyDataProperties(var6, var5);
                return var1;
            };
            var4 = undefined;
            var4 = var5.bind(var4)();
            return var4;
case 77:
            var4 = {};
            var5 = _closure1_slot16;
            var8 = var5.NAME;
            var10 = _closure1_slot53;
            var11 = _closure1_slot0;
            var12 = _closure1_slot3;
            var5 = 17;
            var7 = var12[var5];
            var6 = undefined;
            var7 = var11.bind(var6)(var7);
            var7 = var7.t;
            var9 = var7.VOtRSO;
            var7 = var12[var5];
            var7 = var11.bind(var6)(var7);
            var7 = var7.t;
            var7 = var7.OK7B8E;
            var7 = var10.bind(var6)(var9, var7);
            var4[7] = var7;
            var7 = _closure1_slot16;
            var8 = var7.VOLUME;
            var7 = var12[var5];
            var7 = var11.bind(var6)(var7);
            var7 = var7.t;
            var9 = var7.igrDB9;
            var7 = var12[var5];
            var7 = var11.bind(var6)(var7);
            var7 = var7.t;
            var7 = var7.L5lDFJ;
            var7 = var10.bind(var6)(var9, var7);
            var4[7] = var7;
            var7 = _closure1_slot16;
            var8 = var7.EMOJI_NAME;
            var10 = _closure1_slot55;
            var7 = var12[var5];
            var7 = var11.bind(var6)(var7);
            var7 = var7.t;
            var13 = var7.IIanaY;
            var7 = var12[var5];
            var7 = var11.bind(var6)(var7);
            var7 = var7.t;
            var9 = var7.z4w4U/;
            var7 = var12[var5];
            var7 = var11.bind(var6)(var7);
            var7 = var7.t;
            var7 = var7.V8TfyU;
            var7 = var10.bind(var6)(var13, var9, var7);
            var4[7] = var7;
            var7 = _closure1_slot16;
            var7 = var7.EMOJI_ID;
            var8 = var12[var5];
            var8 = var11.bind(var6)(var8);
            var8 = var8.t;
            var9 = var8.ainxMB;
            var8 = var12[var5];
            var8 = var11.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8["2NPsYu"];
            var5 = var12[var5];
            var5 = var11.bind(var6)(var5);
            var5 = var5.t;
            var5 = var5["8crtns"];
            var5 = var10.bind(var6)(var9, var8, var5);
            var4[6] = var5;
            var5 = _closure1_slot42;
            var15 = var5.bind(var6)();
            var16 = var4;
            var5 = copyDataProperties(var16, var15);
            return var4;
case 169:
            var5 = function AutoModerationRuleChangeStrings() {
                var1 = {};
                var4 = _closure1_slot16;
                var5 = var4.NAME;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.XwxAJT;
                    return var1;
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.AUTO_MODERATION_TRIGGER_TYPE;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.fx0pyl;
                    return var1;
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.AUTO_MODERATION_EVENT_TYPE;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["46Y+L5"];
                    return var1;
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.AUTO_MODERATION_ACTIONS;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["8efxfv"];
                    return var1;
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.AUTO_MODERATION_ENABLED;
                var4 = function(arg1) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.newValue;
                        var3 = null;
                        if(!(var3 == var2)) { _fun0022_ip = 137; continue _fun0022 }
case 130:
                        var2 = var1.oldValue;
case 137:
                        var1 = true;
                        if(!(var1 !== var2)) { _fun0022_ip = 30; continue _fun0022 }
case 43:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var1 = var1.t;
                        var1 = var1.Wrg9Jn;
                        _fun0022_ip = 110; continue _fun0022;
case 30:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 17;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.t;
                        var1 = var2.fCmxC2;
case 110:
                        return var1;
                    }
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.AUTO_MODERATION_EXEMPT_ROLES;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.TRb7Nx;
                    return var1;
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.AUTO_MODERATION_EXEMPT_CHANNELS;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.mzitLE;
                    return var1;
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.AUTO_MODERATION_TRIGGER_METADATA;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.h/lM65;
                    return var1;
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.AUTO_MODERATION_ADD_KEYWORDS;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["9V2yaC"];
                    return var1;
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.AUTO_MODERATION_REMOVE_KEYWORDS;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["4Qe9ny"];
                    return var1;
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.AUTO_MODERATION_ADD_REGEX_PATTERNS;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.GyZtxp;
                    return var1;
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.AUTO_MODERATION_REMOVE_REGEX_PATTERNS;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.OQDadc;
                    return var1;
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.AUTO_MODERATION_ADD_ALLOW_LIST;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.FvvR+K;
                    return var1;
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var4 = var4.AUTO_MODERATION_REMOVE_ALLOW_LIST;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.p5nSvy;
                    return var1;
                };
                var1[3] = var3;
                var3 = _closure1_slot42;
                var2 = undefined;
                var6 = var3.bind(var2)();
                var7 = var1;
                var2 = copyDataProperties(var7, var6);
                return var1;
            };
            var4 = undefined;
            var4 = var5.bind(var4)();
            return var4;
case 167:
            var5 = var2.changes;
            var4 = function CommandPermissionChangeStrings(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var4 = arg1;
                    var1 = {};
                    var5 = _closure1_slot42;
                    var3 = undefined;
                    var6 = var5.bind(var3)();
                    var7 = var1;
                    var3 = copyDataProperties(var7, var6);
                    var _closure3_slot0 = var1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0023_ip = 134; continue _fun0023 }
case 129:
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                            var2 = arg1;
                            var4 = var2.newValue;
                            if(var4) { _fun0024_ip = 177; continue _fun0024 }
case 178:
                            var6 = _closure3_slot0;
                            var5 = var2.key;
                            var4 = function() {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var1 = 17;
                                var2 = var2[var1];
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                var1 = var1.t;
                                var1 = var1.vynxnV;
                                return var1;
                            };
                            var6[var5] = var4;
                            _fun0024_ip = 179; continue _fun0024;
case 177:
                            var4 = var2.newValue;
                            var4 = var4.permission;
                            var3 = _closure3_slot0;
                            var2 = var2.key;
                            if(var4) { _fun0024_ip = 83; continue _fun0024 }
case 108:
                            var4 = function() {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var1 = 17;
                                var2 = var2[var1];
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                var1 = var1.t;
                                var1 = var1.HUrFDu;
                                return var1;
                            };
                            var3[var2] = var4;
                            _fun0024_ip = 179; continue _fun0024;
case 83:
                            var1 = function() {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var1 = 17;
                                var2 = var2[var1];
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                var1 = var1.t;
                                var1 = var1.JH+89C;
                                return var1;
                            };
                            var3[var2] = var1;
case 179:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
case 134:
                    return var1;
                }
            };
            var2 = undefined;
            var2 = var4.bind(var2)(var5);
            return var2;
case 165:
            var4 = function ThreadChangeStrings() {
                var1 = {};
                var3 = _closure1_slot16;
                var7 = var3.NAME;
                var8 = _closure1_slot53;
                var9 = _closure1_slot0;
                var10 = _closure1_slot3;
                var5 = 17;
                var6 = var10[var5];
                var3 = undefined;
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var11 = var6.tUKRzX;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.kPCHON;
                var6 = var8.bind(var3)(var11, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.ARCHIVED;
                var12 = _closure1_slot56;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var11 = var6.jDi9FK;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.F6dvbT;
                var6 = var12.bind(var3)(var11, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.LOCKED;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var11 = var6.JSy1QW;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.C7Jgo8;
                var6 = var12.bind(var3)(var11, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.INVITABLE;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var11 = var6.dxNUs9;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.biJvYG;
                var6 = var12.bind(var3)(var11, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.AUTO_ARCHIVE_DURATION;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var11 = var6.LuaG3y;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["18d9qr"];
                var6 = var8.bind(var3)(var11, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var6 = var6.RATE_LIMIT_PER_USER;
                var7 = var10[var5];
                var7 = var9.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7["7lirhF"];
                var5 = var10[var5];
                var5 = var9.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.j4CCJR;
                var5 = var8.bind(var3)(var7, var5);
                var1[5] = var5;
                var5 = _closure1_slot16;
                var6 = var5.FLAGS;
                var5 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.sSAQtj;
                    return var1;
                };
                var1[5] = var5;
                var5 = _closure1_slot16;
                var6 = var5.AVAILABLE_TAG_ADD;
                var5 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.H86QQU;
                    return var1;
                };
                var1[5] = var5;
                var5 = _closure1_slot16;
                var5 = var5.AVAILABLE_TAG_DELETE;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["8QOseg"];
                    return var1;
                };
                var1[4] = var4;
                var2 = _closure1_slot42;
                var13 = var2.bind(var3)();
                var14 = var1;
                var2 = copyDataProperties(var14, var13);
                return var1;
            };
            var2 = undefined;
            var2 = var4.bind(var2)();
            return var2;
case 163:
            var4 = function GuildScheduledEventExceptionChangeStrings() {
                var1 = {};
                var3 = _closure1_slot16;
                var6 = var3.SCHEDULED_START_TIME;
                var7 = _closure1_slot54;
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var4 = 17;
                var5 = var9[var4];
                var3 = undefined;
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var10 = var5.zMIYVg;
                var5 = var9[var4];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.fzF8Gd;
                var5 = var7.bind(var3)(var10, var5);
                var1[5] = var5;
                var5 = _closure1_slot16;
                var5 = var5.SCHEDULED_END_TIME;
                var6 = var9[var4];
                var6 = var8.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.vONSQA;
                var4 = var9[var4];
                var4 = var8.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.IlIti3;
                var4 = var7.bind(var3)(var6, var4);
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.IS_CANCELED;
                var4 = function(arg1) {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.oldValue;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0025_ip = 43; continue _fun0025 }
case 130:
                        var3 = var1.newValue;
                        var2 = true;
                        if(!(var2 === var3)) { _fun0025_ip = 117; continue _fun0025 }
case 43:
                        var2 = var1.oldValue;
                        if(var2) { _fun0025_ip = 180; continue _fun0025 }
case 181:
                        var2 = var1.newValue;
                        if(!var2) { _fun0025_ip = 180; continue _fun0025 }
case 135:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 17;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.t;
                        var2 = var2["7RkicW"];
                        return var2;
case 180:
                        var2 = var1.oldValue;
                        if(!var2) { _fun0025_ip = 117; continue _fun0025 }
case 182:
                        var1 = var1.newValue;
                        if(var1) { _fun0025_ip = 117; continue _fun0025 }
case 183:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var1 = var1.t;
                        var1 = var1.dRNTWW;
                        return var1;
case 117:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1[4] = var4;
                var2 = _closure1_slot42;
                var11 = var2.bind(var3)();
                var12 = var1;
                var2 = copyDataProperties(var12, var11);
                return var1;
            };
            var2 = undefined;
            var2 = var4.bind(var2)();
            return var2;
case 161:
            var4 = function GuildScheduledEventChangeStrings() {
                var1 = {};
                var4 = _closure1_slot16;
                var5 = var4.NAME;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["21EXHW"];
                    return var1;
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var4 = var4.DESCRIPTION;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.Vm1ofw;
                    return var1;
                };
                var1[3] = var3;
                var3 = _closure1_slot16;
                var6 = var3.PRIVACY_LEVEL;
                var7 = _closure1_slot57;
                var5 = {};
                var10 = _closure1_slot34;
                var12 = var10.GUILD_ONLY;
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var4 = 17;
                var11 = var9[var4];
                var3 = undefined;
                var11 = var8.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.EC+CDt;
                var5[11] = var11;
                var11 = var10.PUBLIC;
                var10 = var9[var4];
                var10 = var8.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.pK/WG0;
                var5[10] = var10;
                var5 = var7.bind(var3)(var5);
                var1[5] = var5;
                var5 = _closure1_slot16;
                var6 = var5.STATUS;
                var5 = {};
                var10 = _closure1_slot33;
                var12 = var10.SCHEDULED;
                var11 = var9[var4];
                var11 = var8.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.hXKDgq;
                var5[11] = var11;
                var12 = var10.ACTIVE;
                var11 = var9[var4];
                var11 = var8.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.lRX1nz;
                var5[11] = var11;
                var12 = var10.COMPLETED;
                var11 = var9[var4];
                var11 = var8.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11["/eFIhq"];
                var5[11] = var11;
                var11 = var10.CANCELED;
                var10 = var9[var4];
                var10 = var8.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.NWIYhj;
                var5[10] = var10;
                var5 = var7.bind(var3)(var5);
                var1[5] = var5;
                var5 = _closure1_slot16;
                var6 = var5.ENTITY_TYPE;
                var5 = {};
                var10 = _closure1_slot32;
                var12 = var10.NONE;
                var11 = var9[var4];
                var11 = var8.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11["6sO3Ss"];
                var5[11] = var11;
                var12 = var10.STAGE_INSTANCE;
                var11 = var9[var4];
                var11 = var8.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.Wo+s1y;
                var5[11] = var11;
                var12 = var10.VOICE;
                var11 = var9[var4];
                var11 = var8.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.XCVaIL;
                var5[11] = var11;
                var11 = var10.EXTERNAL;
                var10 = var9[var4];
                var10 = var8.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.IvhAj2;
                var5[10] = var10;
                var5 = var7.bind(var3)(var5);
                var1[5] = var5;
                var5 = _closure1_slot16;
                var6 = var5.CHANNEL_ID;
                var7 = _closure1_slot54;
                var5 = var9[var4];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var10 = var5.yJBIcX;
                var5 = var9[var4];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5["+PqSsi"];
                var5 = var7.bind(var3)(var10, var5);
                var1[5] = var5;
                var5 = _closure1_slot16;
                var6 = var5.LOCATION;
                var5 = var9[var4];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var10 = var5.GaMBHy;
                var5 = var9[var4];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.PsICk0;
                var5 = var7.bind(var3)(var10, var5);
                var1[5] = var5;
                var5 = _closure1_slot16;
                var5 = var5.IMAGE_HASH;
                var6 = var9[var4];
                var6 = var8.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.S3vcRK;
                var4 = var9[var4];
                var4 = var8.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.KQu47I;
                var4 = var7.bind(var3)(var6, var4);
                var1[4] = var4;
                var2 = _closure1_slot42;
                var13 = var2.bind(var3)();
                var14 = var1;
                var2 = copyDataProperties(var14, var13);
                return var1;
            };
            var2 = undefined;
            var2 = var4.bind(var2)();
            return var2;
case 159:
            var2 = {};
            var4 = _closure1_slot16;
            var6 = var4.TOPIC;
            var9 = _closure1_slot53;
            var10 = _closure1_slot0;
            var11 = _closure1_slot3;
            var8 = 17;
            var4 = var11[var8];
            var5 = undefined;
            var4 = var10.bind(var5)(var4);
            var4 = var4.t;
            var7 = var4.m+veAn;
            var4 = var11[var8];
            var4 = var10.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.esQcxn;
            var4 = var9.bind(var5)(var7, var4);
            var2[5] = var4;
            var4 = _closure1_slot16;
            var6 = var4.PRIVACY_LEVEL;
            var7 = _closure1_slot57;
            var4 = {};
            var9 = _closure1_slot34;
            var13 = var9.GUILD_ONLY;
            var12 = var11[var8];
            var12 = var10.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.EC+CDt;
            var4[12] = var12;
            var9 = var9.PUBLIC;
            var8 = var11[var8];
            var8 = var10.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.pK/WG0;
            var4[8] = var8;
            var4 = var7.bind(var5)(var4);
            var2[5] = var4;
            var4 = _closure1_slot42;
            var15 = var4.bind(var5)();
            var16 = var2;
            var4 = copyDataProperties(var16, var15);
            return var2;
case 157:
            var4 = function IntegrationChangeStrings() {
                var1 = {};
                var3 = _closure1_slot16;
                var5 = var3.ENABLE_EMOTICONS;
                var10 = _closure1_slot56;
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var7 = 17;
                var4 = var9[var7];
                var3 = undefined;
                var4 = var8.bind(var3)(var4);
                var4 = var4.t;
                var6 = var4.FI0m5x;
                var4 = var9[var7];
                var4 = var8.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.olpKC6;
                var4 = var10.bind(var3)(var6, var4);
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.EXPIRE_BEHAVIOR;
                var6 = _closure1_slot57;
                var4 = {};
                var10 = var9[var7];
                var10 = var8.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["1Bb1+u"];
                var4[0] = var10;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.vjlW6m;
                var4[1] = var7;
                var4 = var6.bind(var3)(var4);
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.EXPIRE_GRACE_PERIOD;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.iovXMa;
                    return var1;
                };
                var1[4] = var4;
                var2 = _closure1_slot42;
                var11 = var2.bind(var3)();
                var12 = var1;
                var2 = copyDataProperties(var12, var11);
                return var1;
            };
            var2 = undefined;
            var2 = var4.bind(var2)();
            return var2;
case 155:
            var2 = {};
            var4 = _closure1_slot16;
            var7 = var4.NAME;
            var8 = _closure1_slot53;
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var4 = 17;
            var6 = var10[var4];
            var5 = undefined;
            var6 = var9.bind(var5)(var6);
            var6 = var6.t;
            var11 = var6.cdl0Yo;
            var6 = var10[var4];
            var6 = var9.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.o3W2ly;
            var6 = var8.bind(var5)(var11, var6);
            var2[6] = var6;
            var6 = _closure1_slot16;
            var7 = var6.TAGS;
            var6 = var10[var4];
            var6 = var9.bind(var5)(var6);
            var6 = var6.t;
            var11 = var6.zwL+S2;
            var6 = var10[var4];
            var6 = var9.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.VYfKA+;
            var6 = var8.bind(var5)(var11, var6);
            var2[6] = var6;
            var6 = _closure1_slot16;
            var6 = var6.DESCRIPTION;
            var7 = var10[var4];
            var7 = var9.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.XeYKWJ;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.PSfeIj;
            var4 = var8.bind(var5)(var7, var4);
            var2[5] = var4;
            var4 = _closure1_slot42;
            var15 = var4.bind(var5)();
            var16 = var2;
            var4 = copyDataProperties(var16, var15);
            return var2;
case 153:
            var2 = {};
            var4 = _closure1_slot16;
            var6 = var4.NAME;
            var8 = _closure1_slot53;
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var5 = 17;
            var7 = var10[var5];
            var4 = undefined;
            var7 = var9.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.ahU1o5;
            var5 = var10[var5];
            var5 = var9.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.wxs+vZ;
            var5 = var8.bind(var4)(var7, var5);
            var2[5] = var5;
            var3 = _closure1_slot42;
            var15 = var3.bind(var4)();
            var16 = var2;
            var3 = copyDataProperties(var16, var15);
            return var2;
case 152:
            var3 = function WebhookChangeStrings() {
                var1 = {};
                var4 = _closure1_slot16;
                var6 = var4.CHANNEL_ID;
                var8 = _closure1_slot53;
                var9 = _closure1_slot0;
                var10 = _closure1_slot3;
                var4 = 17;
                var5 = var10[var4];
                var7 = undefined;
                var5 = var9.bind(var7)(var5);
                var5 = var5.t;
                var11 = var5.jhPprR;
                var5 = var10[var4];
                var5 = var9.bind(var7)(var5);
                var5 = var5.t;
                var5 = var5.ar4qYO;
                var5 = var8.bind(var7)(var11, var5);
                var1[5] = var5;
                var5 = _closure1_slot16;
                var5 = var5.NAME;
                var6 = var10[var4];
                var6 = var9.bind(var7)(var6);
                var6 = var6.t;
                var6 = var6.ZVGrzU;
                var4 = var10[var4];
                var4 = var9.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4.tywdZR;
                var4 = var8.bind(var7)(var6, var4);
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.AVATAR_HASH;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.KB52Uj;
                    return var1;
                };
                var1[4] = var4;
                var3 = _closure1_slot16;
                var3 = var3.REASON;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["2IW3C5"];
                    return var1;
                };
                var1[2] = var2;
                return var1;
            };
            var2 = undefined;
            var2 = var3.bind(var2)();
            return var2;
case 150:
            var3 = function InviteChangeStrings() {
                var1 = {};
                var3 = _closure1_slot16;
                var5 = var3.CODE;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.rrRHgb;
                    return var1;
                };
                var1[4] = var3;
                var3 = _closure1_slot16;
                var5 = var3.CHANNEL_ID;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.Q1vd5q;
                    return var1;
                };
                var1[4] = var3;
                var3 = _closure1_slot16;
                var6 = var3.MAX_USES;
                var9 = _closure1_slot58;
                var7 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var8 = 17;
                var5 = var11[var8];
                var3 = undefined;
                var5 = var10.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.Yx8LNm;
                var7[0] = var5;
                var5 = var11[var8];
                var5 = var10.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5["3ygnwU"];
                var5 = var9.bind(var3)(var7, var5);
                var1[5] = var5;
                var5 = _closure1_slot16;
                var6 = var5.MAX_AGE;
                var7 = {};
                var5 = var11[var8];
                var5 = var10.bind(var3)(var5);
                var13 = var5.intl;
                var12 = var13.string;
                var5 = var11[var8];
                var5 = var10.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.PqEzn8;
                var12 = var12.bind(var13)(var5);
                var5 = var11[var8];
                var5 = var10.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.uWrLvw;
                var7[11] = var5;
                var5 = var11[var8];
                var5 = var10.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.Q+5kcO;
                var5 = var9.bind(var3)(var7, var5);
                var1[5] = var5;
                var5 = _closure1_slot16;
                var6 = var5.TEMPORARY;
                var9 = _closure1_slot56;
                var5 = var11[var8];
                var5 = var10.bind(var3)(var5);
                var5 = var5.t;
                var7 = var5.MWp6H7;
                var5 = var11[var8];
                var5 = var10.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.omiqTH;
                var5 = var9.bind(var3)(var7, var5);
                var1[5] = var5;
                var5 = _closure1_slot16;
                var6 = var5.FLAGS;
                var7 = _closure1_slot57;
                var5 = {};
                var9 = 18;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.GuildInviteFlags;
                var9 = var9.IS_GUEST_INVITE;
                var8 = var11[var8];
                var8 = var10.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.XYZMbL;
                var5[8] = var8;
                var5 = var7.bind(var3)(var5);
                var1[5] = var5;
                var5 = _closure1_slot16;
                var5 = var5.ROLE_IDS;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.gb1Owj;
                    return var1;
                };
                var1[4] = var4;
                var2 = _closure1_slot42;
                var14 = var2.bind(var3)();
                var15 = var1;
                var2 = copyDataProperties(var15, var14);
                return var1;
            };
            var2 = undefined;
            var2 = var3.bind(var2)();
            return var2;
case 148:
            var3 = function HomeSettingsChangeStrings() {
                var1 = {};
                var5 = _closure1_slot42;
                var4 = undefined;
                var6 = var5.bind(var4)();
                var7 = var1;
                var4 = copyDataProperties(var7, var6);
                var4 = _closure1_slot16;
                var5 = var4.WELCOME_MESSAGE;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.dKQ1xd;
                    return var1;
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.NEW_MEMBER_ACTIONS;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.jDUIno;
                    return var1;
                };
                var1[4] = var4;
                var3 = _closure1_slot16;
                var3 = var3.RESOURCE_CHANNELS;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.SIX0mr;
                    return var1;
                };
                var1[2] = var2;
                return var1;
            };
            var2 = undefined;
            var2 = var3.bind(var2)();
            return var2;
case 146:
            var3 = function OnboardingChangeStrings() {
                var1 = {};
                var2 = _closure1_slot42;
                var6 = undefined;
                var11 = var2.bind(var6)();
                var12 = var1;
                var2 = copyDataProperties(var12, var11);
                var2 = _closure1_slot16;
                var4 = var2.DEFAULT_CHANNEL_IDS;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["8M+D2s"];
                    return var1;
                };
                var1[3] = var2;
                var2 = _closure1_slot16;
                var9 = var2.ENABLE_DEFAULT_CHANNELS;
                var5 = _closure1_slot56;
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var2 = 17;
                var4 = var8[var2];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var10 = var4.EYd/ls;
                var4 = var8[var2];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4["36OZeQ"];
                var4 = var5.bind(var6)(var10, var4);
                var1[8] = var4;
                var4 = _closure1_slot16;
                var9 = var4.ENABLE_ONBOARDING_PROMPTS;
                var4 = var8[var2];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var10 = var4.V3u8PV;
                var4 = var8[var2];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.r66lc/;
                var4 = var5.bind(var6)(var10, var4);
                var1[8] = var4;
                var3 = _closure1_slot16;
                var3 = var3.ENABLED;
                var4 = var8[var2];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.SODVIs;
                var2 = var8[var2];
                var2 = var7.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.u8HY5U;
                var2 = var5.bind(var6)(var4, var2);
                var1[2] = var2;
                return var1;
            };
            var2 = undefined;
            var2 = var3.bind(var2)();
            return var2;
case 145:
            var3 = function OnboardingPromptChangeStrings() {
                var1 = {};
                var2 = _closure1_slot42;
                var6 = undefined;
                var11 = var2.bind(var6)();
                var12 = var1;
                var2 = copyDataProperties(var12, var11);
                var2 = _closure1_slot16;
                var5 = var2.TITLE;
                var10 = _closure1_slot53;
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var2 = 17;
                var4 = var8[var2];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var9 = var4.sNpuy/;
                var4 = var8[var2];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4["3Ukc/g"];
                var4 = var10.bind(var6)(var9, var4);
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.DESCRIPTION;
                var4 = var8[var2];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var9 = var4.PP1q0x;
                var4 = var8[var2];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.z7pYLg;
                var4 = var10.bind(var6)(var9, var4);
                var1[4] = var4;
                var4 = _closure1_slot16;
                var5 = var4.OPTIONS;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["3G5C9+"];
                    return var1;
                };
                var1[4] = var4;
                var4 = _closure1_slot16;
                var9 = var4.SINGLE_SELECT;
                var5 = _closure1_slot56;
                var4 = var8[var2];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var10 = var4.v4WnR3;
                var4 = var8[var2];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4["6Qg3uC"];
                var4 = var5.bind(var6)(var10, var4);
                var1[8] = var4;
                var3 = _closure1_slot16;
                var3 = var3.REQUIRED;
                var4 = var8[var2];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4["0MPAM6"];
                var2 = var8[var2];
                var2 = var7.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.pwsXir;
                var2 = var5.bind(var6)(var4, var2);
                var1[2] = var2;
                return var1;
            };
            var2 = undefined;
            var2 = var3.bind(var2)();
            return var2;
case 143:
            var3 = function RoleChangeStrings() {
                var1 = {};
                var3 = _closure1_slot16;
                var7 = var3.NAME;
                var11 = _closure1_slot53;
                var9 = _closure1_slot0;
                var10 = _closure1_slot3;
                var5 = 17;
                var6 = var10[var5];
                var3 = undefined;
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var8 = var6.QBmlaD;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.Lfs4r+;
                var6 = var11.bind(var3)(var8, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.DESCRIPTION;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var8 = var6.XeYKWJ;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.PSfeIj;
                var6 = var11.bind(var3)(var8, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.PERMISSIONS_GRANTED;
                var6 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["9i/DvE"];
                    return var1;
                };
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.PERMISSIONS_DENIED;
                var6 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.pa1ZVh;
                    return var1;
                };
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.COLOR;
                var11 = _closure1_slot58;
                var8 = {};
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.TK6E1H;
                var8['#000000'] = var6;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["2FQFiw"];
                var6 = var11.bind(var3)(var8, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.COLORS;
                var6 = function(arg1) {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.newValue;
                        var2 = var1.secondary_color;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0026_ip = 7; continue _fun0026 }
case 137:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var1 = var1.t;
                        var1 = var1.WnSwL/;
                        _fun0026_ip = 144; continue _fun0026;
case 7:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 17;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.t;
                        var1 = var2.U44ttm;
case 144:
                        return var1;
                    }
                };
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.HOIST;
                var8 = _closure1_slot56;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var11 = var6.gWfe24;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["+tb8kN"];
                var6 = var8.bind(var3)(var11, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var6 = var6.MENTIONABLE;
                var7 = var10[var5];
                var7 = var9.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.LL8VFF;
                var5 = var10[var5];
                var5 = var9.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.Z7xzmC;
                var5 = var8.bind(var3)(var7, var5);
                var1[5] = var5;
                var5 = _closure1_slot16;
                var6 = var5.ICON_HASH;
                var5 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.iEE79/;
                    return var1;
                };
                var1[5] = var5;
                var5 = _closure1_slot16;
                var5 = var5.UNICODE_EMOJI;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.KiLMM0;
                    return var1;
                };
                var1[4] = var4;
                var2 = _closure1_slot42;
                var12 = var2.bind(var3)();
                var13 = var1;
                var2 = copyDataProperties(var13, var12);
                return var1;
            };
            var2 = undefined;
            var2 = var3.bind(var2)();
            return var2;
case 142:
            var3 = function UserChangeStrings() {
                var1 = {};
                var3 = _closure1_slot16;
                var7 = var3.NICK;
                var13 = _closure1_slot55;
                var9 = _closure1_slot0;
                var10 = _closure1_slot3;
                var5 = 17;
                var6 = var10[var5];
                var3 = undefined;
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var11 = var6.qXDsHv;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var8 = var6.m+qury;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.DvLvjF;
                var6 = var13.bind(var3)(var11, var8, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.DEAF;
                var8 = _closure1_slot56;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var11 = var6.mArLlW;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.ddvVYG;
                var6 = var8.bind(var3)(var11, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.MUTE;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var11 = var6.bxs/lS;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.FjecQM;
                var6 = var8.bind(var3)(var11, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.ROLES_REMOVE;
                var6 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["+2SDWV"];
                    return var1;
                };
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.ROLES_ADD;
                var6 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.B3/3IJ;
                    return var1;
                };
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.PRUNE_DELETE_DAYS;
                var6 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["+Cvc+D"];
                    return var1;
                };
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.COMMUNICATION_DISABLED_UNTIL;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var12 = var6.LXTQr5;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var11 = var6.LXTQr5;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.ULSdnE;
                var6 = var13.bind(var3)(var12, var11, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var6 = var6.BYPASSES_VERIFICATION;
                var7 = var10[var5];
                var7 = var9.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.NBPBui;
                var5 = var10[var5];
                var5 = var9.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.zATost;
                var5 = var8.bind(var3)(var7, var5);
                var1[5] = var5;
                var5 = _closure1_slot16;
                var5 = var5.AUTO_MODERATION_TRIGGERED_RULE_NAME;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.YbouFH;
                    return var1;
                };
                var1[4] = var4;
                var2 = _closure1_slot42;
                var15 = var2.bind(var3)();
                var16 = var1;
                var2 = copyDataProperties(var16, var15);
                return var1;
            };
            var2 = undefined;
            var2 = var3.bind(var2)();
            return var2;
case 140:
            var3 = function ChannelChangeStrings() {
                var1 = {};
                var2 = _closure1_slot16;
                var9 = var2.NAME;
                var11 = _closure1_slot53;
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var2 = 17;
                var5 = var8[var2];
                var6 = undefined;
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var10 = var5.f8Rh0U;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.ebD4Qp;
                var5 = var11.bind(var6)(var10, var5);
                var1[8] = var5;
                var5 = _closure1_slot16;
                var9 = var5.POSITION;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var10 = var5.isS8te;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.t5uBis;
                var5 = var11.bind(var6)(var10, var5);
                var1[8] = var5;
                var5 = _closure1_slot16;
                var9 = var5.TOPIC;
                var12 = _closure1_slot55;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var13 = var5.esQcxn;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var10 = var5.m+veAn;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.ws/1FA;
                var5 = var12.bind(var6)(var13, var10, var5);
                var1[8] = var5;
                var5 = _closure1_slot16;
                var9 = var5.BITRATE;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var10 = var5.fw81ak;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.MFNlgZ;
                var5 = var11.bind(var6)(var10, var5);
                var1[8] = var5;
                var5 = _closure1_slot16;
                var9 = var5.RTC_REGION_OVERRIDE;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var13 = var5["6kajxx"];
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var10 = var5.eGOlmU;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5["0JMZdz"];
                var5 = var12.bind(var6)(var13, var10, var5);
                var1[8] = var5;
                var5 = _closure1_slot16;
                var9 = var5.USER_LIMIT;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var10 = var5.wk5t7p;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.XgjCEh;
                var5 = var11.bind(var6)(var10, var5);
                var1[8] = var5;
                var5 = _closure1_slot16;
                var9 = var5.RATE_LIMIT_PER_USER;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var10 = var5["7lirhF"];
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.j4CCJR;
                var5 = var11.bind(var6)(var10, var5);
                var1[8] = var5;
                var5 = _closure1_slot16;
                var9 = var5.PERMISSIONS_RESET;
                var5 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["+vSBFY"];
                    return var1;
                };
                var1[8] = var5;
                var5 = _closure1_slot16;
                var9 = var5.PERMISSIONS_GRANTED;
                var5 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.EKLJv8;
                    return var1;
                };
                var1[8] = var5;
                var5 = _closure1_slot16;
                var9 = var5.PERMISSIONS_DENIED;
                var5 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.U3rO5X;
                    return var1;
                };
                var1[8] = var5;
                var5 = _closure1_slot16;
                var9 = var5.REASON;
                var5 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["2IW3C5"];
                    return var1;
                };
                var1[8] = var5;
                var5 = _closure1_slot16;
                var9 = var5.NSFW;
                var13 = _closure1_slot56;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var10 = var5.H8Ri2Y;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.WW6cJw;
                var5 = var13.bind(var6)(var10, var5);
                var1[8] = var5;
                var5 = _closure1_slot16;
                var9 = var5.TYPE;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var10 = var5.Vn5zn2;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.aq4uWI;
                var5 = var11.bind(var6)(var10, var5);
                var1[8] = var5;
                var5 = _closure1_slot16;
                var9 = var5.VIDEO_QUALITY_MODE;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var10 = var5.e68fAU;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.djbES0;
                var5 = var11.bind(var6)(var10, var5);
                var1[8] = var5;
                var5 = _closure1_slot16;
                var9 = var5.DEFAULT_AUTO_ARCHIVE_DURATION;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var10 = var5.nYz2mg;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.oczvRI;
                var5 = var11.bind(var6)(var10, var5);
                var1[8] = var5;
                var5 = _closure1_slot16;
                var9 = var5.DEFAULT_THREAD_RATE_LIMIT_PER_USER;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var11 = var5.tOJ8h7;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var10 = var5.WaSgzk;
                var5 = var8[var2];
                var5 = var7.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.lj+A4u;
                var5 = var12.bind(var6)(var11, var10, var5);
                var1[8] = var5;
                var5 = _closure1_slot16;
                var9 = var5.FLAGS;
                var5 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.ImCQko;
                    return var1;
                };
                var1[8] = var5;
                var5 = _closure1_slot16;
                var9 = var5.AVAILABLE_TAG_ADD;
                var5 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.H86QQU;
                    return var1;
                };
                var1[8] = var5;
                var5 = _closure1_slot16;
                var9 = var5.AVAILABLE_TAG_EDIT;
                var5 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.YtUzls;
                    return var1;
                };
                var1[8] = var5;
                var5 = _closure1_slot16;
                var5 = var5.AVAILABLE_TAG_DELETE;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["8QOseg"];
                    return var1;
                };
                var1[4] = var3;
                var3 = _closure1_slot16;
                var3 = var3.LINKED_LOBBY;
                var5 = _closure1_slot54;
                var4 = var8[var2];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4["+/3TkD"];
                var2 = var8[var2];
                var2 = var7.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2["5kDYS3"];
                var2 = var5.bind(var6)(var4, var2);
                var1[2] = var2;
                return var1;
            };
            var2 = undefined;
            var2 = var3.bind(var2)();
            return var2;
case 139:
            var2 = function GuildChangeStrings() {
                var1 = {};
                var3 = _closure1_slot16;
                var5 = var3.NAME;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.CkDiNH;
                    return var1;
                };
                var1[4] = var3;
                var3 = _closure1_slot16;
                var7 = var3.DESCRIPTION;
                var13 = _closure1_slot54;
                var9 = _closure1_slot0;
                var10 = _closure1_slot3;
                var5 = 17;
                var6 = var10[var5];
                var3 = undefined;
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var8 = var6.RP3Ey3;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.QAVj1Y;
                var6 = var13.bind(var3)(var8, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.ICON_HASH;
                var6 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.iLZ8Q9;
                    return var1;
                };
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.SPLASH_HASH;
                var6 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["4VV6dn"];
                    return var1;
                };
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.DISCOVERY_SPLASH_HASH;
                var6 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["2pds6p"];
                    return var1;
                };
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.BANNER_HASH;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var8 = var6.Cxq4zO;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.H7eE/9;
                var6 = var13.bind(var3)(var8, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.OWNER_ID;
                var6 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["8ltsLT"];
                    return var1;
                };
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.REGION;
                var6 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.X9r5Kf;
                    return var1;
                };
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.PREFERRED_LOCALE;
                var6 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.UnXuDS;
                    return var1;
                };
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.AFK_CHANNEL_ID;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var8 = var6.ClBuA4;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.ms+xtL;
                var6 = var13.bind(var3)(var8, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.AFK_TIMEOUT;
                var6 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.q21fHa;
                    return var1;
                };
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.SYSTEM_CHANNEL_ID;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var8 = var6.H1VXaa;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.XhtmxJ;
                var6 = var13.bind(var3)(var8, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.RULES_CHANNEL_ID;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var8 = var6.OI6MG2;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.lik3tI;
                var6 = var13.bind(var3)(var8, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.PUBLIC_UPDATES_CHANNEL_ID;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var8 = var6.YxBKrY;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.Ehsnij;
                var6 = var13.bind(var3)(var8, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.MFA_LEVEL;
                var11 = _closure1_slot57;
                var6 = {};
                var8 = _closure1_slot18;
                var14 = var8.NONE;
                var12 = var10[var5];
                var12 = var9.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.voaCCQ;
                var6[13] = var12;
                var12 = var8.ELEVATED;
                var8 = var10[var5];
                var8 = var9.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.pRNVwz;
                var6[11] = var8;
                var6 = var11.bind(var3)(var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.WIDGET_ENABLED;
                var8 = _closure1_slot56;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var12 = var6.ADIty8;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.nf58VY;
                var6 = var8.bind(var3)(var12, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.WIDGET_CHANNEL_ID;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var12 = var6["6SBsDc"];
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.deQ5wO;
                var6 = var13.bind(var3)(var12, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.VERIFICATION_LEVEL;
                var6 = {};
                var12 = _closure1_slot19;
                var15 = var12.NONE;
                var14 = var10[var5];
                var14 = var9.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.W27rsc;
                var6[14] = var14;
                var15 = var12.LOW;
                var14 = var10[var5];
                var14 = var9.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.V8P+Pw;
                var6[14] = var14;
                var15 = var12.MEDIUM;
                var14 = var10[var5];
                var14 = var9.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.ERQFau;
                var6[14] = var14;
                var15 = var12.HIGH;
                var14 = var10[var5];
                var14 = var9.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["83fN0j"];
                var6[14] = var14;
                var14 = var12.VERY_HIGH;
                var12 = var10[var5];
                var12 = var9.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.PnkQJE;
                var6[13] = var12;
                var6 = var11.bind(var3)(var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.DEFAULT_MESSAGE_NOTIFICATIONS;
                var6 = {};
                var12 = _closure1_slot20;
                var15 = var12.ALL_MESSAGES;
                var14 = var10[var5];
                var14 = var9.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.LDi76A;
                var6[14] = var14;
                var14 = var12.ONLY_MENTIONS;
                var12 = var10[var5];
                var12 = var9.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["6K83ba"];
                var6[13] = var12;
                var6 = var11.bind(var3)(var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.VANITY_URL_CODE;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var12 = var6.Zplsov;
                var6 = var10[var5];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.u6cArh;
                var6 = var13.bind(var3)(var12, var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var7 = var6.EXPLICIT_CONTENT_FILTER;
                var6 = {};
                var12 = _closure1_slot21;
                var14 = var12.DISABLED;
                var13 = var10[var5];
                var13 = var9.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.fmOeL3;
                var6[13] = var13;
                var14 = var12.MEMBERS_WITHOUT_ROLES;
                var13 = var10[var5];
                var13 = var9.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["4FghYw"];
                var6[13] = var13;
                var13 = var12.ALL_MEMBERS;
                var12 = var10[var5];
                var12 = var9.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.olyrSm;
                var6[12] = var12;
                var6 = var11.bind(var3)(var6);
                var1[6] = var6;
                var6 = _closure1_slot16;
                var6 = var6.PREMIUM_PROGRESS_BAR_ENABLED;
                var7 = var10[var5];
                var7 = var9.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.rBT0sn;
                var5 = var10[var5];
                var5 = var9.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.gc+te5;
                var5 = var8.bind(var3)(var7, var5);
                var1[5] = var5;
                var5 = _closure1_slot16;
                var6 = var5.AUTO_MODERATION_TRIGGERED_RULE_NAME;
                var5 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.YbouFH;
                    return var1;
                };
                var1[5] = var5;
                var5 = _closure1_slot16;
                var6 = var5.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS;
                var5 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.g3DMjB;
                    return var1;
                };
                var1[5] = var5;
                var5 = _closure1_slot16;
                var6 = var5.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS;
                var5 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["+fQAel"];
                    return var1;
                };
                var1[5] = var5;
                var5 = _closure1_slot16;
                var6 = var5.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS;
                var5 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.E1fc4v;
                    return var1;
                };
                var1[5] = var5;
                var5 = _closure1_slot16;
                var5 = var5.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1.XbwtSA;
                    return var1;
                };
                var1[4] = var4;
                var2 = _closure1_slot42;
                var16 = var2.bind(var3)();
                var17 = var1;
                var2 = copyDataProperties(var17, var16);
                return var1;
            };
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var3['getChangeStrings'] = var9;
    var3['shouldNotRenderChangeDetail'] = var8;
    var8 = function checkChangesToRender(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = var1.changes;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0027_ip = 80; continue _fun0027 }
case 44:
            var3 = var4.some;
            var2 = function(arg1) {
                var4 = _closure1_slot43;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var3, var1);
                var1 = !var1;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 80:
            return var1;
        }
    };
    var3['checkChangesToRender'] = var8;
    var3['ACTION_FILTER_ITEMS'] = var7;
    var3['findChangeByKey'] = var6;
    var6 = function getSimpleAuditLogTitleFromChange(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var3 = _closure1_slot38;
            var6 = undefined;
            var4 = var3.bind(var6)();
            var3 = var4.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.value;
                var1 = _closure2_slot0;
                var1 = var1.action;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var3.bind(var4)(var1);
            var3 = _closure1_slot44;
            var1 = _closure1_slot16;
            var1 = var1.COMMUNICATION_DISABLED_UNTIL;
            var3 = var3.bind(var6)(var1, var5);
            var1 = null;
            if(!(var1 == var3)) { _fun0028_ip = 182; continue _fun0028 }
case 184:
            var5 = var1 == var4;
            var3 = undefined;
            if(var5) { _fun0028_ip = 185; continue _fun0028 }
case 61:
            var3 = var4.label;
case 185:
            var4 = var1 != var3;
            var1 = null;
            if(!var4) { _fun0028_ip = 186; continue _fun0028 }
case 36:
            var1 = var3;
case 186:
            _fun0028_ip = 187; continue _fun0028;
case 182:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 17;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.z3wbj8;
            var1 = var3.bind(var4)(var2);
case 187:
            return var1;
        }
    };
    var3['getSimpleAuditLogTitleFromChange'] = var6;
    var6 = function getSimpleAuditLogTitleContextFromChange(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot44;
            var1 = _closure1_slot16;
            var1 = var1.COMMUNICATION_DISABLED_UNTIL;
            var11 = undefined;
            var5 = var2.bind(var11)(var1, var4);
            var7 = _closure1_slot45;
            var1 = _closure1_slot16;
            var1 = var1.ROLES_ADD;
            var1 = var7.bind(var11)(var1, var4);
            var1 = var1.length;
            var6 = 0;
            var2 = var1 > var6;
            var1 = _closure1_slot16;
            var1 = var1.ROLES_REMOVE;
            var1 = var7.bind(var11)(var1, var4);
            var1 = var1.length;
            var6 = var1 > var6;
            var1 = null;
            if(!(var1 == var5)) { _fun0029_ip = 93; continue _fun0029 }
case 47:
            if(!var2) { _fun0029_ip = 188; continue _fun0029 }
case 11:
            if(var6) { _fun0029_ip = 189; continue _fun0029 }
case 188:
            if(var2) { _fun0029_ip = 17; continue _fun0029 }
case 110:
            var2 = null;
            if(!var6) { _fun0029_ip = 151; continue _fun0029 }
case 13:
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var6 = 17;
            var7 = var10[var6];
            var7 = var9.bind(var11)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var11)(var6);
            var6 = var6.t;
            var6 = var6["8mQ6x0"];
            var2 = var7.bind(var8)(var6);
case 151:
            _fun0029_ip = 190; continue _fun0029;
case 17:
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var6 = 17;
            var7 = var10[var6];
            var7 = var9.bind(var11)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var11)(var6);
            var6 = var6.t;
            var6 = var6["4GQqs8"];
            var2 = var7.bind(var8)(var6);
case 190:
            _fun0029_ip = 191; continue _fun0029;
case 189:
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var6 = 17;
            var7 = var10[var6];
            var7 = var9.bind(var11)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var11)(var6);
            var6 = var6.t;
            var6 = var6.RdMMew;
            var2 = var7.bind(var8)(var6);
case 191:
            return var2;
case 93:
            var6 = var1 == var5;
            var2 = undefined;
            if(var6) { _fun0029_ip = 192; continue _fun0029 }
case 193:
            var2 = var5.newValue;
case 192:
            if(!(var1 == var2)) { _fun0029_ip = 194; continue _fun0029 }
case 195:
            var6 = var1 == var5;
            var2 = undefined;
            if(var6) { _fun0029_ip = 196; continue _fun0029 }
case 197:
            var2 = var5.oldValue;
case 196:
            if(!(var1 != var2)) { _fun0029_ip = 198; continue _fun0029 }
case 199:
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var2 = 17;
            var6 = var9[var2];
            var6 = var8.bind(var11)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var2 = var9[var2];
            var2 = var8.bind(var11)(var2);
            var2 = var2.t;
            var2 = var2.MA1ltr;
            var2 = var6.bind(var7)(var2);
            return var2;
case 194:
            var6 = global;
            var7 = var6.Date;
            var8 = var1 == var5;
            var2 = undefined;
            if(var8) { _fun0029_ip = 99; continue _fun0029 }
case 200:
            var2 = var5.newValue;
case 99:
            var5 = var7.prototype;
            var5 = Object.create(var5, {constructor: {value: var7}});
            var15 = var5;
            var14 = var2;
            var2 = new var15[var7](var14, var13);
            var5 = var2 instanceof Object ? var2 : var5;
            var2 = var5.getTime;
            var5 = var2.bind(var5)();
            var8 = _closure1_slot1;
            var2 = _closure1_slot3;
            var7 = 19;
            var7 = var2[var7];
            var8 = var8.bind(var11)(var7);
            var7 = var8.extractTimestamp;
            var4 = var4.id;
            var4 = var7.bind(var8)(var4);
            var8 = var5 - var4;
            var9 = var6.Math;
            var7 = var9.round;
            var5 = 1000;
            var10 = var8 / var5;
            var4 = 60;
            var4 = var10 / var4;
            var9 = var7.bind(var9)(var4);
            var4 = _closure1_slot0;
            var12 = 16;
            var2 = var2[var12];
            var7 = var4.bind(var11)(var2);
            var4 = var7.getTimeAndUnit;
            var2 = _closure1_slot36;
            var4 = var4.bind(var7)(var9, var2);
            var2 = var4.unit;
            if(!(var1 != var2)) { _fun0029_ip = 201; continue _fun0029 }
case 202:
            var2 = var4.time;
            if(!(var1 != var2)) { _fun0029_ip = 201; continue _fun0029 }
case 203:
            var7 = var4.unit;
            var2 = _closure1_slot39;
            var2 = var7 in var2;
            if(var2) { _fun0029_ip = 204; continue _fun0029 }
case 198:
            return var1;
case 204:
            var2 = var4.unit;
            var9 = var4.unit;
            var10 = _closure1_slot0;
            var7 = _closure1_slot3;
            var7 = var7[var12];
            var7 = var10.bind(var11)(var7);
            var7 = var7.TimeUnits;
            var7 = var7.SECONDS;
            if(!(var9 !== var7)) { _fun0029_ip = 205; continue _fun0029 }
case 206:
            var4 = var4.time;
            _fun0029_ip = 207; continue _fun0029;
case 205:
            var7 = var6.Math;
            var6 = var7.round;
            var5 = var8 / var5;
            var4 = var6.bind(var7)(var5);
case 207:
            var3 = _closure1_slot39;
            var2 = var3[var2];
            var2 = var2.bind(var3)(var4);
            return var2;
case 201:
            return var1;
        }
    };
    var3['getSimpleAuditLogTitleContextFromChange'] = var6;
    var6 = function getSimpleAuditLogChangeDetails(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot45;
            var1 = _closure1_slot16;
            var1 = var1.ROLES_ADD;
            var8 = undefined;
            var5 = var3.bind(var8)(var1, var6);
            var1 = _closure1_slot16;
            var1 = var1.ROLES_REMOVE;
            var3 = var3.bind(var8)(var1, var6);
            var1 = null;
            var6 = var1 == var5;
            var7 = undefined;
            if(var6) { _fun0030_ip = 48; continue _fun0030 }
case 106:
            var9 = var5.map;
            var6 = function(arg1) {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.newValue;
                    var1 = null;
                    var2 = var1 == var4;
                    var1 = undefined;
                    if(var2) { _fun0031_ip = 4; continue _fun0031 }
case 29:
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.name;
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.join;
                    var2 = ', ';
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var10 = var9.bind(var5)(var6);
            var9 = var10.join;
            var6 = ', ';
            var7 = var9.bind(var10)(var6);
case 48:
            var9 = var1 == var3;
            var6 = undefined;
            if(var9) { _fun0030_ip = 208; continue _fun0030 }
case 144:
            var9 = var3.map;
            var4 = function(arg1) {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.newValue;
                    var1 = null;
                    var2 = var1 == var4;
                    var1 = undefined;
                    if(var2) { _fun0032_ip = 4; continue _fun0032 }
case 29:
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.name;
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.join;
                    var2 = ', ';
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var10 = var9.bind(var3)(var4);
            var9 = var10.join;
            var4 = ', ';
            var6 = var9.bind(var10)(var4);
case 208:
            var9 = var5.length;
            var4 = 0;
            if(!(var9 > var4)) { _fun0030_ip = 65; continue _fun0030 }
case 117:
            var9 = var3.length;
            if(!(!(var9 > var4))) { _fun0030_ip = 209; continue _fun0030 }
case 65:
            var5 = var5.length;
            if(!(!(var5 > var4))) { _fun0030_ip = 210; continue _fun0030 }
case 68:
            var3 = var3.length;
            var3 = var3 > var4;
            var1 = null;
            if(!var3) { _fun0030_ip = 211; continue _fun0030 }
case 69:
            var4 = _closure1_slot0;
            var10 = _closure1_slot3;
            var3 = 17;
            var5 = var10[var3];
            var5 = var4.bind(var8)(var5);
            var9 = var5.intl;
            var5 = var9.formatToPlainString;
            var3 = var10[var3];
            var3 = var4.bind(var8)(var3);
            var3 = var3.t;
            var4 = var3.Wk4pAJ;
            var3 = {};
            var3['roleNames'] = var6;
            var1 = var5.bind(var9)(var4, var3);
case 211:
            _fun0030_ip = 212; continue _fun0030;
case 210:
            var4 = _closure1_slot0;
            var10 = _closure1_slot3;
            var3 = 17;
            var5 = var10[var3];
            var5 = var4.bind(var8)(var5);
            var9 = var5.intl;
            var5 = var9.formatToPlainString;
            var3 = var10[var3];
            var3 = var4.bind(var8)(var3);
            var3 = var3.t;
            var4 = var3["/mTqt5"];
            var3 = {};
            var3['roleNames'] = var7;
            var1 = var5.bind(var9)(var4, var3);
case 212:
            _fun0030_ip = 213; continue _fun0030;
case 209:
            var3 = _closure1_slot0;
            var9 = _closure1_slot3;
            var2 = 17;
            var4 = var9[var2];
            var4 = var3.bind(var8)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var9[var2];
            var2 = var3.bind(var8)(var2);
            var2 = var2.t;
            var3 = var2.tZw1EW;
            var2 = {};
            var2['roleNamesAdded'] = var7;
            var2['roleNamesRemoved'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 213:
            return var1;
        }
    };
    var3['getSimpleAuditLogChangeDetails'] = var6;
    var6 = function getChangeTitle(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var5 = arg1;
            var3 = var5.action;
            var2 = _closure1_slot15;
            var2 = var2.GUILD_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 214; continue _fun0033 }
case 131:
            var2 = _closure1_slot15;
            var2 = var2.CHANNEL_CREATE;
            if(!(var2 !== var3)) { _fun0033_ip = 215; continue _fun0033 }
case 141:
            var2 = _closure1_slot15;
            var2 = var2.CHANNEL_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 216; continue _fun0033 }
case 81:
            var2 = _closure1_slot15;
            var2 = var2.CHANNEL_DELETE;
            if(!(var2 !== var3)) { _fun0033_ip = 217; continue _fun0033 }
case 55:
            var2 = _closure1_slot15;
            var2 = var2.CHANNEL_OVERWRITE_CREATE;
            if(!(var2 !== var3)) { _fun0033_ip = 218; continue _fun0033 }
case 144:
            var2 = _closure1_slot15;
            var2 = var2.CHANNEL_OVERWRITE_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 219; continue _fun0033 }
case 112:
            var2 = _closure1_slot15;
            var2 = var2.CHANNEL_OVERWRITE_DELETE;
            if(!(var2 !== var3)) { _fun0033_ip = 220; continue _fun0033 }
case 147:
            var2 = _closure1_slot15;
            var2 = var2.MEMBER_KICK;
            if(!(var2 !== var3)) { _fun0033_ip = 221; continue _fun0033 }
case 149:
            var2 = _closure1_slot15;
            var2 = var2.MEMBER_PRUNE;
            if(!(var2 !== var3)) { _fun0033_ip = 222; continue _fun0033 }
case 151:
            var2 = _closure1_slot15;
            var2 = var2.MEMBER_BAN_ADD;
            if(!(var2 !== var3)) { _fun0033_ip = 223; continue _fun0033 }
case 125:
            var2 = _closure1_slot15;
            var2 = var2.MEMBER_BAN_REMOVE;
            if(!(var2 !== var3)) { _fun0033_ip = 224; continue _fun0033 }
case 154:
            var2 = _closure1_slot15;
            var2 = var2.MEMBER_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 225; continue _fun0033 }
case 156:
            var2 = _closure1_slot15;
            var2 = var2.MEMBER_ROLE_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 226; continue _fun0033 }
case 158:
            var2 = _closure1_slot15;
            var2 = var2.MEMBER_MOVE;
            if(!(var2 !== var3)) { _fun0033_ip = 227; continue _fun0033 }
case 160:
            var2 = _closure1_slot15;
            var2 = var2.MEMBER_DISCONNECT;
            if(!(var2 !== var3)) { _fun0033_ip = 228; continue _fun0033 }
case 162:
            var2 = _closure1_slot15;
            var2 = var2.BOT_ADD;
            if(!(var2 !== var3)) { _fun0033_ip = 229; continue _fun0033 }
case 164:
            var2 = _closure1_slot15;
            var2 = var2.ROLE_CREATE;
            if(!(var2 !== var3)) { _fun0033_ip = 230; continue _fun0033 }
case 166:
            var2 = _closure1_slot15;
            var2 = var2.ROLE_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 231; continue _fun0033 }
case 168:
            var2 = _closure1_slot15;
            var2 = var2.ROLE_DELETE;
            if(!(var2 !== var3)) { _fun0033_ip = 232; continue _fun0033 }
case 170:
            var2 = _closure1_slot15;
            var2 = var2.INVITE_CREATE;
            if(!(var2 !== var3)) { _fun0033_ip = 233; continue _fun0033 }
case 234:
            var2 = _closure1_slot15;
            var2 = var2.INVITE_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 235; continue _fun0033 }
case 236:
            var2 = _closure1_slot15;
            var2 = var2.INVITE_DELETE;
            if(!(var2 !== var3)) { _fun0033_ip = 237; continue _fun0033 }
case 238:
            var2 = _closure1_slot15;
            var2 = var2.WEBHOOK_CREATE;
            if(!(var2 !== var3)) { _fun0033_ip = 239; continue _fun0033 }
case 175:
            var2 = _closure1_slot15;
            var2 = var2.WEBHOOK_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 240; continue _fun0033 }
case 241:
            var2 = _closure1_slot15;
            var2 = var2.WEBHOOK_DELETE;
            if(!(var2 !== var3)) { _fun0033_ip = 242; continue _fun0033 }
case 243:
            var2 = _closure1_slot15;
            var2 = var2.EMOJI_CREATE;
            if(!(var2 !== var3)) { _fun0033_ip = 244; continue _fun0033 }
case 245:
            var2 = _closure1_slot15;
            var2 = var2.EMOJI_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 246; continue _fun0033 }
case 247:
            var2 = _closure1_slot15;
            var2 = var2.EMOJI_DELETE;
            if(!(var2 !== var3)) { _fun0033_ip = 248; continue _fun0033 }
case 249:
            var2 = _closure1_slot15;
            var2 = var2.STICKER_CREATE;
            if(!(var2 !== var3)) { _fun0033_ip = 250; continue _fun0033 }
case 251:
            var2 = _closure1_slot15;
            var2 = var2.STICKER_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 252; continue _fun0033 }
case 253:
            var2 = _closure1_slot15;
            var2 = var2.STICKER_DELETE;
            if(!(var2 !== var3)) { _fun0033_ip = 254; continue _fun0033 }
case 78:
            var2 = _closure1_slot15;
            var2 = var2.MESSAGE_DELETE;
            if(!(var2 !== var3)) { _fun0033_ip = 255; continue _fun0033 }
case 202:
            var2 = _closure1_slot15;
            var2 = var2.MESSAGE_BULK_DELETE;
            if(!(var2 !== var3)) { _fun0033_ip = 256; continue _fun0033 }
case 257:
            var2 = _closure1_slot15;
            var2 = var2.MESSAGE_PIN;
            if(!(var2 !== var3)) { _fun0033_ip = 258; continue _fun0033 }
case 259:
            var2 = _closure1_slot15;
            var2 = var2.MESSAGE_UNPIN;
            if(!(var2 !== var3)) { _fun0033_ip = 260; continue _fun0033 }
case 261:
            var2 = _closure1_slot15;
            var2 = var2.INTEGRATION_CREATE;
            if(!(var2 !== var3)) { _fun0033_ip = 262; continue _fun0033 }
case 263:
            var2 = _closure1_slot15;
            var2 = var2.INTEGRATION_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 264; continue _fun0033 }
case 265:
            var2 = _closure1_slot15;
            var2 = var2.INTEGRATION_DELETE;
            if(!(var2 !== var3)) { _fun0033_ip = 266; continue _fun0033 }
case 207:
            var2 = _closure1_slot15;
            var2 = var2.STAGE_INSTANCE_CREATE;
            if(!(var2 !== var3)) { _fun0033_ip = 267; continue _fun0033 }
case 268:
            var2 = _closure1_slot15;
            var2 = var2.STAGE_INSTANCE_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 269; continue _fun0033 }
case 270:
            var2 = _closure1_slot15;
            var2 = var2.STAGE_INSTANCE_DELETE;
            if(!(var2 !== var3)) { _fun0033_ip = 271; continue _fun0033 }
case 272:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_SCHEDULED_EVENT_CREATE;
            if(!(var2 !== var3)) { _fun0033_ip = 273; continue _fun0033 }
case 274:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_SCHEDULED_EVENT_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 275; continue _fun0033 }
case 276:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_SCHEDULED_EVENT_DELETE;
            if(!(var2 !== var3)) { _fun0033_ip = 277; continue _fun0033 }
case 278:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE;
            if(!(var2 !== var3)) { _fun0033_ip = 279; continue _fun0033 }
case 280:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 279; continue _fun0033 }
case 169:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE;
            if(!(var2 !== var3)) { _fun0033_ip = 281; continue _fun0033 }
case 282:
            var2 = _closure1_slot15;
            var2 = var2.THREAD_CREATE;
            if(!(var2 !== var3)) { _fun0033_ip = 283; continue _fun0033 }
case 284:
            var2 = _closure1_slot15;
            var2 = var2.THREAD_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 285; continue _fun0033 }
case 286:
            var2 = _closure1_slot15;
            var2 = var2.THREAD_DELETE;
            if(!(var2 !== var3)) { _fun0033_ip = 287; continue _fun0033 }
case 288:
            var2 = _closure1_slot15;
            var2 = var2.APPLICATION_COMMAND_PERMISSION_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 289; continue _fun0033 }
case 290:
            var2 = _closure1_slot15;
            var2 = var2.AUTO_MODERATION_BLOCK_MESSAGE;
            if(!(var2 !== var3)) { _fun0033_ip = 291; continue _fun0033 }
case 292:
            var2 = _closure1_slot15;
            var2 = var2.AUTO_MODERATION_FLAG_TO_CHANNEL;
            if(!(var2 !== var3)) { _fun0033_ip = 293; continue _fun0033 }
case 294:
            var2 = _closure1_slot15;
            var2 = var2.AUTO_MODERATION_USER_COMMUNICATION_DISABLED;
            if(!(var2 !== var3)) { _fun0033_ip = 295; continue _fun0033 }
case 296:
            var2 = _closure1_slot15;
            var2 = var2.AUTO_MODERATION_QUARANTINE_USER;
            if(!(var2 !== var3)) { _fun0033_ip = 297; continue _fun0033 }
case 298:
            var2 = _closure1_slot15;
            var2 = var2.CREATOR_MONETIZATION_REQUEST_CREATED;
            if(!(var2 !== var3)) { _fun0033_ip = 299; continue _fun0033 }
case 300:
            var2 = _closure1_slot15;
            var2 = var2.CREATOR_MONETIZATION_TERMS_ACCEPTED;
            if(!(var2 !== var3)) { _fun0033_ip = 301; continue _fun0033 }
case 302:
            var2 = _closure1_slot15;
            var2 = var2.AUTO_MODERATION_RULE_CREATE;
            if(!(var2 !== var3)) { _fun0033_ip = 303; continue _fun0033 }
case 304:
            var2 = _closure1_slot15;
            var2 = var2.AUTO_MODERATION_RULE_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 305; continue _fun0033 }
case 306:
            var2 = _closure1_slot15;
            var2 = var2.AUTO_MODERATION_RULE_DELETE;
            if(!(var2 !== var3)) { _fun0033_ip = 307; continue _fun0033 }
case 308:
            var2 = _closure1_slot15;
            var2 = var2.ONBOARDING_PROMPT_CREATE;
            if(!(var2 !== var3)) { _fun0033_ip = 309; continue _fun0033 }
case 310:
            var2 = _closure1_slot15;
            var2 = var2.ONBOARDING_PROMPT_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 311; continue _fun0033 }
case 312:
            var2 = _closure1_slot15;
            var2 = var2.ONBOARDING_PROMPT_DELETE;
            if(!(var2 !== var3)) { _fun0033_ip = 313; continue _fun0033 }
case 314:
            var2 = _closure1_slot15;
            var2 = var2.ONBOARDING_CREATE;
            if(!(var2 !== var3)) { _fun0033_ip = 315; continue _fun0033 }
case 316:
            var2 = _closure1_slot15;
            var2 = var2.ONBOARDING_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 317; continue _fun0033 }
case 318:
            var2 = _closure1_slot15;
            var2 = var2.HOME_SETTINGS_CREATE;
            if(!(var2 !== var3)) { _fun0033_ip = 319; continue _fun0033 }
case 320:
            var2 = _closure1_slot15;
            var2 = var2.HOME_SETTINGS_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 321; continue _fun0033 }
case 322:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_HOME_FEATURE_ITEM;
            if(!(var2 !== var3)) { _fun0033_ip = 323; continue _fun0033 }
case 324:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_HOME_REMOVE_ITEM;
            if(!(var2 !== var3)) { _fun0033_ip = 325; continue _fun0033 }
case 326:
            var2 = _closure1_slot15;
            var2 = var2.SOUNDBOARD_SOUND_CREATE;
            if(!(var2 !== var3)) { _fun0033_ip = 327; continue _fun0033 }
case 328:
            var2 = _closure1_slot15;
            var2 = var2.SOUNDBOARD_SOUND_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 329; continue _fun0033 }
case 330:
            var2 = _closure1_slot15;
            var2 = var2.SOUNDBOARD_SOUND_DELETE;
            if(!(var2 !== var3)) { _fun0033_ip = 331; continue _fun0033 }
case 332:
            var2 = _closure1_slot15;
            var2 = var2.VOICE_CHANNEL_STATUS_CREATE;
            if(!(var2 !== var3)) { _fun0033_ip = 333; continue _fun0033 }
case 334:
            var2 = _closure1_slot15;
            var2 = var2.VOICE_CHANNEL_STATUS_DELETE;
            if(!(var2 !== var3)) { _fun0033_ip = 335; continue _fun0033 }
case 336:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_MEMBER_VERIFICATION_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 337; continue _fun0033 }
case 338:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_PROFILE_UPDATE;
            if(!(var2 !== var3)) { _fun0033_ip = 339; continue _fun0033 }
case 340:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_MIGRATE_PIN_PERMISSION;
            if(!(var2 !== var3)) { _fun0033_ip = 341; continue _fun0033 }
case 342:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION;
            if(!(var2 !== var3)) { _fun0033_ip = 343; continue _fun0033 }
case 344:
            var2 = null;
            return var2;
case 343:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.naflH+;
            return var2;
case 341:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2["3Ne7MA"];
            return var2;
case 339:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.Ed6hF1;
            return var2;
case 337:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.NUKUb+;
            return var2;
case 335:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.aS8Krq;
            return var2;
case 333:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.MWjnU7;
            return var2;
case 331:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.kVz4/0;
            return var2;
case 329:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.CM8n1w;
            return var2;
case 327:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2["0PD83V"];
            return var2;
case 325:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.kPReun;
            return var2;
case 323:
            var2 = var5.changes;
            var3 = null;
            var6 = var3 != var2;
            var2 = null;
            if(!var6) { _fun0033_ip = 345; continue _fun0033 }
case 346:
            var8 = var5.changes;
            var7 = var8.find;
            var6 = function(arg1) {
                var1 = arg1;
                var2 = var1.key;
                var1 = _closure1_slot16;
                var1 = var1.ENTITY_TYPE;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var7.bind(var8)(var6);
case 345:
            if(!(var3 != var2)) { _fun0033_ip = 347; continue _fun0033 }
case 348:
            var3 = var2.newValue;
            var7 = _closure1_slot0;
            var2 = _closure1_slot3;
            var8 = 20;
            var2 = var2[var8];
            var6 = undefined;
            var2 = var7.bind(var6)(var2);
            var2 = var2.GuildFeedItemTypes;
            var2 = var2.MESSAGE;
            if(!(var2 !== var3)) { _fun0033_ip = 349; continue _fun0033 }
case 350:
            var7 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var8];
            var2 = var7.bind(var6)(var2);
            var2 = var2.GuildFeedItemTypes;
            var2 = var2.FORUM_POST;
            if(!(var2 !== var3)) { _fun0033_ip = 351; continue _fun0033 }
case 352:
            var3 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 17;
            var2 = var7[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.UZ+U3A;
            return var2;
case 351:
            var3 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 17;
            var2 = var7[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.hCuAb1;
            return var2;
case 349:
            var3 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 17;
            var2 = var7[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.PyEa+J;
            return var2;
case 347:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.UZ+U3A;
            return var2;
case 321:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.XHE8qv;
            return var2;
case 319:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.dSdCjG;
            return var2;
case 317:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.yONu/l;
            return var2;
case 315:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.wDaq3/;
            return var2;
case 313:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.IuBTao;
            return var2;
case 311:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.ArIrWI;
            return var2;
case 309:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2["/8A1g2"];
            return var2;
case 307:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.umua3n;
            return var2;
case 305:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2["3wEA9u"];
            return var2;
case 303:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.NKljj+;
            return var2;
case 301:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.ryGLk+;
            return var2;
case 299:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.ONvWyr;
            return var2;
case 297:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2["/W5u5o"];
            return var2;
case 295:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.Vk4TwX;
            return var2;
case 293:
            var2 = var5.options;
            var3 = null;
            var6 = var3 == var2;
            var7 = undefined;
            var3 = undefined;
            if(var6) { _fun0033_ip = 353; continue _fun0033 }
case 354:
            var3 = var2.auto_moderation_rule_trigger_type;
case 353:
            var2 = _closure1_slot31;
            var6 = var2.USER_PROFILE;
            var2 = var6.toString;
            var2 = var2.bind(var6)();
            if(!(var3 !== var2)) { _fun0033_ip = 355; continue _fun0033 }
case 356:
            var3 = _closure1_slot0;
            var6 = _closure1_slot3;
            var2 = 17;
            var2 = var6[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.SD0PwJ;
            _fun0033_ip = 357; continue _fun0033;
case 355:
            var6 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var2 = var3.YQsjej;
case 357:
            return var2;
case 291:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.NqWv2K;
            return var2;
case 289:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.uzCqBm;
            return var2;
case 287:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.s3Khn8;
            return var2;
case 285:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.PSsy4t;
            return var2;
case 283:
            var2 = var5.changes;
            var3 = null;
            var6 = var3 != var2;
            var2 = null;
            if(!var6) { _fun0033_ip = 358; continue _fun0033 }
case 359:
            var8 = var5.changes;
            var7 = var8.find;
            var6 = function(arg1) {
                var1 = arg1;
                var2 = var1.key;
                var1 = _closure1_slot16;
                var1 = var1.TYPE;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var7.bind(var8)(var6);
case 358:
            if(!(var3 != var2)) { _fun0033_ip = 360; continue _fun0033 }
case 361:
            var3 = var2.newValue;
            var2 = _closure1_slot22;
            var2 = var2.PRIVATE_THREAD;
            if(!(var2 !== var3)) { _fun0033_ip = 362; continue _fun0033 }
case 363:
            var2 = _closure1_slot22;
            var2 = var2.ANNOUNCEMENT_THREAD;
            if(!(var2 !== var3)) { _fun0033_ip = 364; continue _fun0033 }
case 365:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2["2cxQ7G"];
            return var2;
case 364:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2["6uaMmO"];
            return var2;
case 362:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.Br0y5w;
            return var2;
case 360:
            var2 = global;
            var6 = var2.Error;
            var2 = var6.prototype;
            var3 = Object.create(var2, {constructor: {value: var6}});
            var9 = '[AuditLog] Could not find type change for thread create';
            var10 = var3;
            var2 = new var10[var6](var9, var8);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 281:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.zYb2da;
            return var2;
case 279:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2["8qCI36"];
            return var2;
case 277:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2["/ARPKQ"];
            return var2;
case 275:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.ebTK11;
            return var2;
case 273:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.S7k52p;
            return var2;
case 271:
            var3 = var5.userId;
            var2 = null;
            if(!(var2 == var3)) { _fun0033_ip = 366; continue _fun0033 }
case 367:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2["7ZIFm9"];
            _fun0033_ip = 368; continue _fun0033;
case 366:
            var7 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 17;
            var6 = var6[var3];
            var3 = undefined;
            var3 = var7.bind(var3)(var6);
            var3 = var3.t;
            var2 = var3.Oi/in9;
case 368:
            return var2;
case 269:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2["0hQYU4"];
            return var2;
case 267:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.n7x/DF;
            return var2;
case 266:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2["8zScWY"];
            return var2;
case 264:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.ibCCOS;
            return var2;
case 262:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.HYvCb3;
            return var2;
case 260:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.NCxXUW;
            return var2;
case 258:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.Yna7E7;
            return var2;
case 256:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2["3RIvLE"];
            return var2;
case 255:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.HPkD+M;
            return var2;
case 254:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.rGEP9U;
            return var2;
case 252:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.bhujGc;
            return var2;
case 250:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.DRZifq;
            return var2;
case 248:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.JnUaVG;
            return var2;
case 246:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.IsCKfh;
            return var2;
case 244:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2["7vekRO"];
            return var2;
case 242:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.in0VjZ;
            return var2;
case 240:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2["6GTlWB"];
            return var2;
case 239:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.MhYhil;
            return var2;
case 237:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2["3n/iWk"];
            return var2;
case 235:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.ja3kGS;
            return var2;
case 233:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.YHOXWy;
            return var2;
case 232:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2["4s63tb"];
            return var2;
case 231:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.NRbN18;
            return var2;
case 230:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.UTLTx6;
            return var2;
case 229:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.fWvX0G;
            return var2;
case 228:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.K4eCZw;
            return var2;
case 227:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.Yt6NkU;
            return var2;
case 226:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.Vngfia;
            return var2;
case 225:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.pznhLN;
            return var2;
case 224:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.o3Y6HD;
            return var2;
case 223:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.XklUm/;
            return var2;
case 222:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.qKOZTP;
            return var2;
case 221:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.B5hDZX;
            return var2;
case 220:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.HASt/3;
            return var2;
case 219:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.uhtbNU;
            return var2;
case 218:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.l5Cu1a;
            return var2;
case 217:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.ynfvkm;
            return var2;
case 216:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.nTYk6B;
            return var2;
case 215:
            var2 = var5.changes;
            var3 = null;
            var6 = var3 != var2;
            var2 = null;
            if(!var6) { _fun0033_ip = 369; continue _fun0033 }
case 370:
            var6 = var5.changes;
            var5 = var6.find;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.key;
                var1 = _closure1_slot16;
                var1 = var1.TYPE;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var5.bind(var6)(var4);
case 369:
            if(!(var3 != var2)) { _fun0033_ip = 371; continue _fun0033 }
case 372:
            var3 = var2.newValue;
            var2 = _closure1_slot22;
            var2 = var2.GUILD_STAGE_VOICE;
            if(!(var2 !== var3)) { _fun0033_ip = 373; continue _fun0033 }
case 374:
            var2 = _closure1_slot22;
            var2 = var2.GUILD_VOICE;
            if(!(var2 !== var3)) { _fun0033_ip = 375; continue _fun0033 }
case 376:
            var2 = _closure1_slot22;
            var2 = var2.GUILD_CATEGORY;
            if(!(var2 !== var3)) { _fun0033_ip = 377; continue _fun0033 }
case 378:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.wrYNG2;
            return var2;
case 377:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.T3KIjz;
            return var2;
case 375:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.NPOy4G;
            return var2;
case 373:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.OKp4+o;
            return var2;
case 371:
            var2 = global;
            var4 = var2.Error;
            var2 = var4.prototype;
            var3 = Object.create(var2, {constructor: {value: var4}});
            var9 = '[AuditLog] Could not find type change for channel create';
            var10 = var3;
            var2 = new var10[var4](var9, var8);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 214:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.t;
            var1 = var1.LjZO31;
            return var1;
        }
    };
    var3['getChangeTitle'] = var6;
    var6 = function getStringForAddedChannelFlag(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot30;
            var2 = var2.GUILD_FEED_REMOVED;
            if(!(var2 !== var3)) { _fun0034_ip = 50; continue _fun0034 }
case 31:
            var2 = _closure1_slot30;
            var2 = var2.ACTIVE_CHANNELS_REMOVED;
            if(!(var2 !== var3)) { _fun0034_ip = 112; continue _fun0034 }
case 129:
            var2 = _closure1_slot30;
            var2 = var2.PINNED;
            if(!(var2 !== var3)) { _fun0034_ip = 4; continue _fun0034 }
case 42:
            var2 = null;
            return var2;
case 4:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 17;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2["1QLRYb"];
            var2 = var3.bind(var4)(var2);
            return var2;
case 112:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 17;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2["4YLtzC"];
            var2 = var3.bind(var4)(var2);
            return var2;
case 50:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 17;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1["5G8ZD4"];
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getStringForAddedChannelFlag'] = var6;
    var6 = function getStringForRemovedChannelFlag(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot30;
            var2 = var2.GUILD_FEED_REMOVED;
            if(!(var2 !== var3)) { _fun0035_ip = 50; continue _fun0035 }
case 31:
            var2 = _closure1_slot30;
            var2 = var2.ACTIVE_CHANNELS_REMOVED;
            if(!(var2 !== var3)) { _fun0035_ip = 112; continue _fun0035 }
case 129:
            var2 = _closure1_slot30;
            var2 = var2.PINNED;
            if(!(var2 !== var3)) { _fun0035_ip = 4; continue _fun0035 }
case 42:
            var2 = null;
            return var2;
case 4:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 17;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.CMweGA;
            var2 = var3.bind(var4)(var2);
            return var2;
case 112:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 17;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2["8qpgcz"];
            var2 = var3.bind(var4)(var2);
            return var2;
case 50:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 17;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.S5kuWQ;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getStringForRemovedChannelFlag'] = var6;
    var6 = function getStringForPermission(arg1, arg2) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var3 = _closure1_slot23;
            var3 = var3.CREATE_INSTANT_INVITE;
            if(!(var3 !== var4)) { _fun0036_ip = 379; continue _fun0036 }
case 138:
            var3 = _closure1_slot23;
            var3 = var3.KICK_MEMBERS;
            if(!(var3 !== var4)) { _fun0036_ip = 380; continue _fun0036 }
case 381:
            var3 = _closure1_slot23;
            var3 = var3.BAN_MEMBERS;
            if(!(var3 !== var4)) { _fun0036_ip = 382; continue _fun0036 }
case 383:
            var3 = _closure1_slot23;
            var3 = var3.ADMINISTRATOR;
            if(!(var3 !== var4)) { _fun0036_ip = 384; continue _fun0036 }
case 385:
            var3 = _closure1_slot23;
            var3 = var3.MANAGE_CHANNELS;
            if(!(var3 !== var4)) { _fun0036_ip = 386; continue _fun0036 }
case 182:
            var3 = _closure1_slot23;
            var3 = var3.MANAGE_GUILD;
            if(!(var3 !== var4)) { _fun0036_ip = 387; continue _fun0036 }
case 113:
            var3 = _closure1_slot23;
            var3 = var3.VIEW_GUILD_ANALYTICS;
            if(!(var3 !== var4)) { _fun0036_ip = 388; continue _fun0036 }
case 389:
            var3 = _closure1_slot23;
            var3 = var3.VIEW_CREATOR_MONETIZATION_ANALYTICS;
            if(!(var3 !== var4)) { _fun0036_ip = 390; continue _fun0036 }
case 391:
            var3 = _closure1_slot23;
            var3 = var3.CHANGE_NICKNAME;
            if(!(var3 !== var4)) { _fun0036_ip = 392; continue _fun0036 }
case 393:
            var3 = _closure1_slot23;
            var3 = var3.MANAGE_NICKNAMES;
            if(!(var3 !== var4)) { _fun0036_ip = 394; continue _fun0036 }
case 16:
            var3 = _closure1_slot23;
            var3 = var3.MANAGE_ROLES;
            if(!(var3 !== var4)) { _fun0036_ip = 395; continue _fun0036 }
case 396:
            var3 = _closure1_slot23;
            var3 = var3.MANAGE_WEBHOOKS;
            if(!(var3 !== var4)) { _fun0036_ip = 397; continue _fun0036 }
case 398:
            var3 = _closure1_slot23;
            var3 = var3.CREATE_GUILD_EXPRESSIONS;
            if(!(var3 !== var4)) { _fun0036_ip = 399; continue _fun0036 }
case 400:
            var3 = _closure1_slot23;
            var3 = var3.MANAGE_GUILD_EXPRESSIONS;
            if(!(var3 !== var4)) { _fun0036_ip = 401; continue _fun0036 }
case 23:
            var3 = _closure1_slot23;
            var3 = var3.VIEW_AUDIT_LOG;
            if(!(var3 !== var4)) { _fun0036_ip = 402; continue _fun0036 }
case 403:
            var3 = _closure1_slot23;
            var3 = var3.VIEW_CHANNEL;
            if(!(var3 !== var4)) { _fun0036_ip = 404; continue _fun0036 }
case 405:
            var3 = _closure1_slot23;
            var3 = var3.SEND_MESSAGES;
            if(!(var3 !== var4)) { _fun0036_ip = 406; continue _fun0036 }
case 407:
            var3 = _closure1_slot23;
            var3 = var3.SEND_TTS_MESSAGES;
            if(!(var3 !== var4)) { _fun0036_ip = 408; continue _fun0036 }
case 197:
            var3 = _closure1_slot23;
            var3 = var3.USE_APPLICATION_COMMANDS;
            if(!(var3 !== var4)) { _fun0036_ip = 409; continue _fun0036 }
case 410:
            var3 = _closure1_slot23;
            var3 = var3.MANAGE_MESSAGES;
            if(!(var3 !== var4)) { _fun0036_ip = 411; continue _fun0036 }
case 412:
            var3 = _closure1_slot23;
            var3 = var3.EMBED_LINKS;
            if(!(var3 !== var4)) { _fun0036_ip = 413; continue _fun0036 }
case 414:
            var3 = _closure1_slot23;
            var3 = var3.ATTACH_FILES;
            if(!(var3 !== var4)) { _fun0036_ip = 415; continue _fun0036 }
case 416:
            var3 = _closure1_slot23;
            var3 = var3.READ_MESSAGE_HISTORY;
            if(!(var3 !== var4)) { _fun0036_ip = 417; continue _fun0036 }
case 418:
            var3 = _closure1_slot23;
            var3 = var3.MENTION_EVERYONE;
            if(!(var3 !== var4)) { _fun0036_ip = 419; continue _fun0036 }
case 420:
            var3 = _closure1_slot23;
            var3 = var3.USE_EXTERNAL_EMOJIS;
            if(!(var3 !== var4)) { _fun0036_ip = 421; continue _fun0036 }
case 422:
            var3 = _closure1_slot23;
            var3 = var3.USE_EXTERNAL_STICKERS;
            if(!(var3 !== var4)) { _fun0036_ip = 423; continue _fun0036 }
case 424:
            var3 = _closure1_slot23;
            var3 = var3.ADD_REACTIONS;
            if(!(var3 !== var4)) { _fun0036_ip = 425; continue _fun0036 }
case 426:
            var3 = _closure1_slot23;
            var3 = var3.CONNECT;
            if(!(var3 !== var4)) { _fun0036_ip = 427; continue _fun0036 }
case 428:
            var3 = _closure1_slot23;
            var3 = var3.SPEAK;
            if(!(var3 !== var4)) { _fun0036_ip = 429; continue _fun0036 }
case 430:
            var3 = _closure1_slot23;
            var3 = var3.MUTE_MEMBERS;
            if(!(var3 !== var4)) { _fun0036_ip = 431; continue _fun0036 }
case 432:
            var3 = _closure1_slot23;
            var3 = var3.DEAFEN_MEMBERS;
            if(!(var3 !== var4)) { _fun0036_ip = 433; continue _fun0036 }
case 434:
            var3 = _closure1_slot23;
            var3 = var3.MOVE_MEMBERS;
            if(!(var3 !== var4)) { _fun0036_ip = 435; continue _fun0036 }
case 436:
            var3 = _closure1_slot23;
            var3 = var3.USE_VAD;
            if(!(var3 !== var4)) { _fun0036_ip = 437; continue _fun0036 }
case 438:
            var3 = _closure1_slot23;
            var3 = var3.PRIORITY_SPEAKER;
            if(!(var3 !== var4)) { _fun0036_ip = 439; continue _fun0036 }
case 204:
            var3 = _closure1_slot23;
            var3 = var3.STREAM;
            if(!(var3 !== var4)) { _fun0036_ip = 440; continue _fun0036 }
case 441:
            var3 = _closure1_slot23;
            var3 = var3.REQUEST_TO_SPEAK;
            if(!(var3 !== var4)) { _fun0036_ip = 442; continue _fun0036 }
case 443:
            var3 = _closure1_slot23;
            var3 = var3.USE_EMBEDDED_ACTIVITIES;
            if(!(var3 !== var4)) { _fun0036_ip = 444; continue _fun0036 }
case 445:
            var3 = _closure1_slot23;
            var3 = var3.CREATE_EVENTS;
            if(!(var3 !== var4)) { _fun0036_ip = 446; continue _fun0036 }
case 447:
            var3 = _closure1_slot23;
            var3 = var3.MANAGE_EVENTS;
            if(!(var3 !== var4)) { _fun0036_ip = 448; continue _fun0036 }
case 449:
            var3 = _closure1_slot23;
            var3 = var3.CREATE_PUBLIC_THREADS;
            if(!(var3 !== var4)) { _fun0036_ip = 450; continue _fun0036 }
case 451:
            var3 = _closure1_slot23;
            var3 = var3.CREATE_PRIVATE_THREADS;
            if(!(var3 !== var4)) { _fun0036_ip = 452; continue _fun0036 }
case 453:
            var3 = _closure1_slot23;
            var3 = var3.SEND_MESSAGES_IN_THREADS;
            if(!(var3 !== var4)) { _fun0036_ip = 454; continue _fun0036 }
case 455:
            var3 = _closure1_slot23;
            var3 = var3.MANAGE_THREADS;
            if(!(var3 !== var4)) { _fun0036_ip = 456; continue _fun0036 }
case 457:
            var3 = _closure1_slot23;
            var3 = var3.MODERATE_MEMBERS;
            if(!(var3 !== var4)) { _fun0036_ip = 458; continue _fun0036 }
case 459:
            var3 = _closure1_slot23;
            var3 = var3.SET_VOICE_CHANNEL_STATUS;
            if(!(var3 !== var4)) { _fun0036_ip = 460; continue _fun0036 }
case 461:
            var3 = _closure1_slot23;
            var3 = var3.SEND_POLLS;
            if(!(var3 !== var4)) { _fun0036_ip = 462; continue _fun0036 }
case 463:
            var3 = _closure1_slot23;
            var3 = var3.USE_EXTERNAL_APPS;
            if(!(var3 !== var4)) { _fun0036_ip = 308; continue _fun0036 }
case 464:
            var3 = _closure1_slot23;
            var3 = var3.PIN_MESSAGES;
            if(!(var3 !== var4)) { _fun0036_ip = 465; continue _fun0036 }
case 466:
            var3 = _closure1_slot23;
            var3 = var3.BYPASS_SLOWMODE;
            if(!(var3 !== var4)) { _fun0036_ip = 467; continue _fun0036 }
case 468:
            var3 = _closure1_slot23;
            var3 = var3.MANAGE_OFFICIAL_MESSAGES;
            if(!(var3 !== var4)) { _fun0036_ip = 469; continue _fun0036 }
case 470:
            var3 = null;
            return var3;
case 469:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.Aj9ruN;
            var3 = var4.bind(var5)(var3);
            return var3;
case 467:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.kqcjeV;
            var3 = var4.bind(var5)(var3);
            return var3;
case 465:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.Y5BI39;
            var3 = var4.bind(var5)(var3);
            return var3;
case 308:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.TtA5rK;
            var3 = var4.bind(var5)(var3);
            return var3;
case 462:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.UMQ7Ww;
            var3 = var4.bind(var5)(var3);
            return var3;
case 460:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.VBwkUf;
            var3 = var4.bind(var5)(var3);
            return var3;
case 458:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3["+RL6pz"];
            var3 = var4.bind(var5)(var3);
            return var3;
case 456:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.kEqgr7;
            var3 = var4.bind(var5)(var3);
            return var3;
case 454:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.fTE74g;
            var3 = var4.bind(var5)(var3);
            return var3;
case 452:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.QwbTSa;
            var3 = var4.bind(var5)(var3);
            return var3;
case 450:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3["25rKnX"];
            var3 = var4.bind(var5)(var3);
            return var3;
case 448:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.HIgA5a;
            var3 = var4.bind(var5)(var3);
            return var3;
case 446:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.qyjZua;
            var3 = var4.bind(var5)(var3);
            return var3;
case 444:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.rLSGeh;
            var3 = var4.bind(var5)(var3);
            return var3;
case 442:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3["5kicT2"];
            var3 = var4.bind(var5)(var3);
            return var3;
case 440:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.FlNoSV;
            var3 = var4.bind(var5)(var3);
            return var3;
case 439:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.BVK71i;
            var3 = var4.bind(var5)(var3);
            return var3;
case 437:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3["08zAV7"];
            var3 = var4.bind(var5)(var3);
            return var3;
case 435:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.YtjJPQ;
            var3 = var4.bind(var5)(var3);
            return var3;
case 433:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3["9L47Fr"];
            var3 = var4.bind(var5)(var3);
            return var3;
case 431:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3["8EI30/"];
            var3 = var4.bind(var5)(var3);
            return var3;
case 429:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3["8w1tIR"];
            var3 = var4.bind(var5)(var3);
            return var3;
case 427:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.S0W8Z5;
            var3 = var4.bind(var5)(var3);
            return var3;
case 425:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.yEoJAr;
            var3 = var4.bind(var5)(var3);
            return var3;
case 423:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.UeRs+b;
            var3 = var4.bind(var5)(var3);
            return var3;
case 421:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.BpBGZU;
            var3 = var4.bind(var5)(var3);
            return var3;
case 419:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.Y78KGC;
            var3 = var4.bind(var5)(var3);
            return var3;
case 417:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.l9ufaR;
            var3 = var4.bind(var5)(var3);
            return var3;
case 415:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3["3AS4UM"];
            var3 = var4.bind(var5)(var3);
            return var3;
case 413:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3["969dEL"];
            var3 = var4.bind(var5)(var3);
            return var3;
case 411:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3["6lU9xM"];
            var3 = var4.bind(var5)(var3);
            return var3;
case 409:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.shbR1a;
            var3 = var4.bind(var5)(var3);
            return var3;
case 408:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.Mg7bku;
            var3 = var4.bind(var5)(var3);
            return var3;
case 406:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.T32rkC;
            var3 = var4.bind(var5)(var3);
            return var3;
case 404:
            var4 = var2.targetType;
            var3 = _closure1_slot17;
            var3 = var3.CHANNEL;
            if(!(var4 !== var3)) { _fun0036_ip = 471; continue _fun0036 }
case 472:
            var4 = var2.targetType;
            var3 = _closure1_slot17;
            var3 = var3.CHANNEL_OVERWRITE;
            if(!(var4 !== var3)) { _fun0036_ip = 471; continue _fun0036 }
case 473:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.uV83yi;
            var3 = var4.bind(var5)(var3);
            _fun0036_ip = 279; continue _fun0036;
case 471:
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var4 = 17;
            var5 = var9[var4];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.W/A4Qp;
            var3 = var5.bind(var6)(var4);
case 279:
            return var3;
case 402:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.fZgLpA;
            var3 = var4.bind(var5)(var3);
            return var3;
case 401:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.bbuXIn;
            var3 = var4.bind(var5)(var3);
            return var3;
case 399:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.HarVuP;
            var3 = var4.bind(var5)(var3);
            return var3;
case 397:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3["/ADKmM"];
            var3 = var4.bind(var5)(var3);
            return var3;
case 395:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.C8d+oG;
            var3 = var4.bind(var5)(var3);
            return var3;
case 394:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.t+Ct5x;
            var3 = var4.bind(var5)(var3);
            return var3;
case 392:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.dilOF6;
            var3 = var4.bind(var5)(var3);
            return var3;
case 390:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3["0lTLTv"];
            var3 = var4.bind(var5)(var3);
            return var3;
case 388:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.rQJBE/;
            var3 = var4.bind(var5)(var3);
            return var3;
case 387:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.QZRcfO;
            var3 = var4.bind(var5)(var3);
            return var3;
case 386:
            var4 = var2.targetType;
            var3 = _closure1_slot17;
            var3 = var3.CHANNEL;
            if(!(var4 !== var3)) { _fun0036_ip = 474; continue _fun0036 }
case 475:
            var3 = var2.targetType;
            var2 = _closure1_slot17;
            var2 = var2.CHANNEL_OVERWRITE;
            if(!(var3 !== var2)) { _fun0036_ip = 474; continue _fun0036 }
case 476:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 17;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2["9qLtWs"];
            var2 = var3.bind(var4)(var2);
            _fun0036_ip = 477; continue _fun0036;
case 474:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.nAw15L;
            var2 = var4.bind(var5)(var3);
case 477:
            return var2;
case 384:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 17;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.PGvZqX;
            var2 = var3.bind(var4)(var2);
            return var2;
case 382:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 17;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.oTBA7N;
            var2 = var3.bind(var4)(var2);
            return var2;
case 380:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 17;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.pBNv6i;
            var2 = var3.bind(var4)(var2);
            return var2;
case 379:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 17;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.zJrgTG;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getStringForPermission'] = var6;
    var5 = function transformLogs(arg1, arg2) {
        var4 = arg1;
        var1 = arg2;
        var _closure2_slot0 = var1;
        var1 = new Array(0);
        var _closure2_slot1 = var1;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var9 = arg1;
                var _closure3_slot0 = var9;
                var4 = _closure2_slot0;
                var3 = function transformTarget(arg1, arg2) {
                    _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                        var7 = arg1;
                        var1 = arg2;
                        var _closure4_slot0 = var7;
                        var _closure4_slot1 = var1;
                        var5 = var7.targetType;
                        var4 = _closure1_slot17;
                        var4 = var4.GUILD;
                        if(!(var4 !== var5)) { _fun0038_ip = 478; continue _fun0038 }
case 80:
                        var4 = _closure1_slot17;
                        var4 = var4.GUILD_HOME;
                        if(!(var4 !== var5)) { _fun0038_ip = 478; continue _fun0038 }
case 479:
                        var4 = _closure1_slot17;
                        var4 = var4.GUILD_PROFILE;
                        if(!(var4 !== var5)) { _fun0038_ip = 478; continue _fun0038 }
case 83:
                        var4 = _closure1_slot17;
                        var4 = var4.CHANNEL;
                        if(!(var4 !== var5)) { _fun0038_ip = 480; continue _fun0038 }
case 47:
                        var4 = _closure1_slot17;
                        var4 = var4.CHANNEL_OVERWRITE;
                        if(!(var4 !== var5)) { _fun0038_ip = 480; continue _fun0038 }
case 13:
                        var4 = _closure1_slot17;
                        var4 = var4.USER;
                        if(!(var4 !== var5)) { _fun0038_ip = 481; continue _fun0038 }
case 40:
                        var4 = _closure1_slot17;
                        var4 = var4.ROLE;
                        if(!(var4 !== var5)) { _fun0038_ip = 482; continue _fun0038 }
case 483:
                        var4 = _closure1_slot17;
                        var4 = var4.ONBOARDING_PROMPT;
                        if(!(var4 !== var5)) { _fun0038_ip = 484; continue _fun0038 }
case 87:
                        var4 = _closure1_slot17;
                        var4 = var4.GUILD_ONBOARDING;
                        if(!(var4 !== var5)) { _fun0038_ip = 485; continue _fun0038 }
case 69:
                        var4 = _closure1_slot17;
                        var4 = var4.GUILD_MEMBER_VERIFICATION;
                        if(!(var4 !== var5)) { _fun0038_ip = 485; continue _fun0038 }
case 20:
                        var4 = _closure1_slot17;
                        var4 = var4.INVITE;
                        if(!(var4 !== var5)) { _fun0038_ip = 486; continue _fun0038 }
case 487:
                        var4 = _closure1_slot17;
                        var4 = var4.INTEGRATION;
                        if(!(var4 !== var5)) { _fun0038_ip = 488; continue _fun0038 }
case 51:
                        var4 = _closure1_slot17;
                        var4 = var4.WEBHOOK;
                        if(!(var4 !== var5)) { _fun0038_ip = 489; continue _fun0038 }
case 490:
                        var4 = _closure1_slot17;
                        var4 = var4.EMOJI;
                        if(!(var4 !== var5)) { _fun0038_ip = 491; continue _fun0038 }
case 492:
                        var4 = _closure1_slot17;
                        var4 = var4.STICKER;
                        if(!(var4 !== var5)) { _fun0038_ip = 493; continue _fun0038 }
case 494:
                        var4 = _closure1_slot17;
                        var4 = var4.STAGE_INSTANCE;
                        if(!(var4 !== var5)) { _fun0038_ip = 495; continue _fun0038 }
case 496:
                        var4 = _closure1_slot17;
                        var4 = var4.GUILD_SCHEDULED_EVENT;
                        if(!(var4 !== var5)) { _fun0038_ip = 497; continue _fun0038 }
case 498:
                        var4 = _closure1_slot17;
                        var4 = var4.GUILD_SCHEDULED_EVENT_EXCEPTION;
                        if(!(var4 !== var5)) { _fun0038_ip = 497; continue _fun0038 }
case 499:
                        var4 = _closure1_slot17;
                        var4 = var4.THREAD;
                        if(!(var4 !== var5)) { _fun0038_ip = 500; continue _fun0038 }
case 501:
                        var4 = _closure1_slot17;
                        var4 = var4.APPLICATION_COMMAND;
                        if(!(var4 !== var5)) { _fun0038_ip = 502; continue _fun0038 }
case 172:
                        var4 = _closure1_slot17;
                        var4 = var4.AUTO_MODERATION_RULE;
                        if(!(var4 !== var5)) { _fun0038_ip = 503; continue _fun0038 }
case 504:
                        var4 = _closure1_slot17;
                        var4 = var4.GUILD_SOUNDBOARD;
                        if(!(var4 !== var5)) { _fun0038_ip = 505; continue _fun0038 }
case 506:
                        var4 = _closure1_slot17;
                        var4 = var4.HOME_SETTINGS;
                        if(!(var4 !== var5)) { _fun0038_ip = 507; continue _fun0038 }
case 508:
                        var4 = _closure1_slot17;
                        var4 = var4.VOICE_CHANNEL_STATUS;
                        if(!(var4 !== var5)) { _fun0038_ip = 509; continue _fun0038 }
case 510:
                        var6 = _closure1_slot35;
                        var5 = var6.warn;
                        var4 = 'Unknown targetType for log';
                        var4 = var5.bind(var6)(var4, var7);
                        var4 = null;
                        return var4;
case 509:
                        var9 = _closure1_slot51;
                        var4 = _closure1_slot16;
                        var15 = var4.STATUS;
                        var17 = undefined;
                        var14 = function(arg1) {
                            var3 = _closure1_slot10;
                            var2 = var3.getChannel;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var13 = function(arg1) {
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var2 = 23;
                            var3 = var3[var2];
                            var2 = undefined;
                            var6 = var4.bind(var2)(var3);
                            var5 = var6.computeChannelName;
                            var9 = _closure1_slot13;
                            var8 = _closure1_slot12;
                            var10 = arg1;
                            var7 = true;
                            var11 = var6;
                            var1 = var11[var5](var10, var9, var8, var7, var6);
                            return var1;
                        };
                        var16 = var7;
                        var4 = var17[var9](var16, var15, var14, var13, var12);
                        return var4;
case 507:
                        var10 = _closure1_slot51;
                        var4 = _closure1_slot16;
                        var15 = var4.GUILD_ID;
                        var12 = var1.id;
                        var17 = undefined;
                        var14 = function(arg1) {
                            var3 = _closure1_slot6;
                            var2 = var3.getSettings;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var13 = function() {
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var1 = 17;
                            var2 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.VbpLyU;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var16 = var7;
                        var4 = var17[var10](var16, var15, var14, var13, var12, var11);
                        return var4;
case 505:
                        var8 = _closure1_slot51;
                        var4 = _closure1_slot16;
                        var6 = var4.NAME;
                        var5 = _closure1_slot24;
                        var4 = undefined;
                        var4 = var8.bind(var4)(var7, var6, var5);
                        return var4;
case 503:
                        var9 = _closure1_slot51;
                        var4 = _closure1_slot16;
                        var15 = var4.NAME;
                        var17 = undefined;
                        var14 = function(arg1) {
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var2 = _closure1_slot14;
                            var3 = var2.automodRules;
                            var2 = var3.find;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.id;
                                var1 = _closure5_slot0;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var13 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.name;
                            return var1;
                        };
                        var16 = var7;
                        var4 = var17[var9](var16, var15, var14, var13, var12);
                        return var4;
case 502:
                        var5 = var7.targetId;
                        var4 = var7.options;
                        var4 = var4.application_id;
                        if(!(var5 !== var4)) { _fun0038_ip = 511; continue _fun0038 }
case 512:
                        var9 = _closure1_slot51;
                        var4 = _closure1_slot16;
                        var15 = var4.NAME;
                        var17 = undefined;
                        var14 = function(arg1) {
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var2 = _closure1_slot14;
                            var3 = var2.applicationCommands;
                            var2 = var3.find;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.id;
                                var1 = _closure5_slot0;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var13 = function(arg1) {
                            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                                var1 = arg1;
                                var3 = var1.name_localized;
                                var2 = null;
                                if(!(var2 != var3)) { _fun0039_ip = 37; continue _fun0039 }
case 130:
                                var3 = var1.name_localized;
                                var2 = '';
                                if(!(var2 === var3)) { _fun0039_ip = 181; continue _fun0039 }
case 37:
                                var4 = var1.name;
                                _fun0039_ip = 80; continue _fun0039;
case 181:
                                var4 = var1.name_localized;
case 80:
                                var3 = var1.type;
                                var5 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var1 = 24;
                                var2 = var2[var1];
                                var1 = undefined;
                                var1 = var5.bind(var1)(var2);
                                var1 = var1.ApplicationCommandType;
                                var2 = var1.CHAT;
                                var1 = var4;
                                if(!(var3 === var2)) { _fun0039_ip = 513; continue _fun0039 }
case 514:
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var3 = var2.concat;
                                var2 = '/\u2060';
                                var1 = var3.bind(var2)(var4);
case 513:
                                return var1;
                            }
                        };
                        var16 = var7;
                        var4 = var17[var9](var16, var15, var14, var13, var12);
                        return var4;
case 511:
                        var4 = _closure1_slot14;
                        var6 = var4.integrations;
                        var5 = var6.find;
                        var4 = function(arg1) {
                            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                                var1 = arg1;
                                var1 = var1.application;
                                var2 = null;
                                var3 = var2 == var1;
                                var2 = undefined;
                                if(var3) { _fun0040_ip = 44; continue _fun0040 }
case 515:
                                var2 = var1.id;
case 44:
                                var1 = _closure4_slot0;
                                var1 = var1.targetId;
                                var1 = var2 === var1;
                                return var1;
                            }
                        };
                        var5 = var5.bind(var6)(var4);
                        var4 = null;
                        if(!(var4 == var5)) { _fun0038_ip = 516; continue _fun0038 }
case 517:
                        var4 = var7.targetId;
                        _fun0038_ip = 518; continue _fun0038;
case 516:
                        var4 = var5.name;
case 518:
                        return var4;
case 500:
                        var9 = _closure1_slot51;
                        var4 = _closure1_slot16;
                        var15 = var4.NAME;
                        var17 = undefined;
                        var14 = function(arg1) {
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var2 = _closure1_slot14;
                            var3 = var2.threads;
                            var2 = var3.find;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.id;
                                var1 = _closure5_slot0;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var13 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.name;
                            return var1;
                        };
                        var16 = var7;
                        var4 = var17[var9](var16, var15, var14, var13, var12);
                        return var4;
case 497:
                        var9 = _closure1_slot51;
                        var4 = _closure1_slot16;
                        var15 = var4.NAME;
                        var17 = undefined;
                        var14 = function(arg1) {
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var2 = _closure1_slot14;
                            var3 = var2.guildScheduledEvents;
                            var2 = var3.find;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.id;
                                var1 = _closure5_slot0;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var13 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.name;
                            return var1;
                        };
                        var16 = var7;
                        var4 = var17[var9](var16, var15, var14, var13, var12);
                        return var4;
case 495:
                        var9 = _closure1_slot51;
                        var4 = _closure1_slot16;
                        var15 = var4.TOPIC;
                        var17 = undefined;
                        var14 = function(arg1) {
                            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                                var1 = arg1;
                                var _closure5_slot0 = var1;
                                var1 = global;
                                var4 = var1.Object;
                                var3 = var4.values;
                                var6 = _closure1_slot7;
                                var5 = var6.getStageInstancesByGuild;
                                var1 = _closure4_slot1;
                                var1 = var1.id;
                                var1 = var5.bind(var6)(var1);
                                var4 = var3.bind(var4)(var1);
                                var1 = null;
                                var3 = var1 == var4;
                                var1 = undefined;
                                if(var3) { _fun0041_ip = 9; continue _fun0041 }
case 107:
                                var3 = var4.find;
                                var2 = function(arg1) {
                                    var1 = arg1;
                                    var2 = var1.id;
                                    var1 = _closure5_slot0;
                                    var1 = var2 === var1;
                                    return var1;
                                };
                                var1 = var3.bind(var4)(var2);
case 9:
                                return var1;
                            }
                        };
                        var13 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.topic;
                            return var1;
                        };
                        var16 = var7;
                        var4 = var17[var9](var16, var15, var14, var13, var12);
                        return var4;
case 493:
                        var9 = _closure1_slot51;
                        var4 = _closure1_slot16;
                        var15 = var4.NAME;
                        var17 = undefined;
                        var14 = function(arg1) {
                            var3 = _closure1_slot8;
                            var2 = var3.getStickerById;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var13 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.name;
                            return var1;
                        };
                        var16 = var7;
                        var4 = var17[var9](var16, var15, var14, var13, var12);
                        return var4;
case 491:
                        var9 = _closure1_slot51;
                        var4 = _closure1_slot16;
                        var15 = var4.NAME;
                        var17 = undefined;
                        var14 = function(arg1) {
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var4 = _closure1_slot4;
                            var3 = var4.getGuildEmoji;
                            var2 = _closure4_slot1;
                            var2 = var2.id;
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.find;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.id;
                                var1 = _closure5_slot0;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var13 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.name;
                            return var1;
                        };
                        var16 = var7;
                        var4 = var17[var9](var16, var15, var14, var13, var12);
                        return var4;
case 489:
                        var9 = _closure1_slot51;
                        var4 = _closure1_slot16;
                        var15 = var4.NAME;
                        var17 = undefined;
                        var14 = function(arg1) {
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var2 = _closure1_slot14;
                            var3 = var2.webhooks;
                            var2 = var3.find;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.id;
                                var1 = _closure5_slot0;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var13 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.name;
                            return var1;
                        };
                        var16 = var7;
                        var4 = var17[var9](var16, var15, var14, var13, var12);
                        return var4;
case 488:
                        var9 = _closure1_slot51;
                        var4 = _closure1_slot16;
                        var15 = var4.TYPE;
                        var17 = undefined;
                        var14 = function(arg1) {
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var2 = _closure1_slot14;
                            var3 = var2.integrations;
                            var2 = var3.find;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.id;
                                var1 = _closure5_slot0;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var13 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.name;
                            return var1;
                        };
                        var16 = var7;
                        var4 = var17[var9](var16, var15, var14, var13, var12);
                        return var4;
case 486:
                        var8 = _closure1_slot51;
                        var4 = _closure1_slot16;
                        var6 = var4.CODE;
                        var5 = _closure1_slot24;
                        var4 = undefined;
                        var4 = var8.bind(var4)(var7, var6, var5);
                        return var4;
case 485:
                        return var1;
case 484:
                        var8 = _closure1_slot51;
                        var4 = _closure1_slot16;
                        var15 = var4.ID;
                        var10 = undefined;
                        var14 = function(arg1) {
                            var3 = _closure1_slot5;
                            var2 = var3.getOnboardingPrompt;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var13 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.title;
                            return var1;
                        };
                        var17 = undefined;
                        var16 = var7;
                        var4 = var17[var8](var16, var15, var14, var13, var12);
                        var5 = null;
                        if(!(var5 != var4)) { _fun0038_ip = 519; continue _fun0038 }
case 520:
                        var5 = '';
                        if(!(var5 === var4)) { _fun0038_ip = 521; continue _fun0038 }
case 519:
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var5 = 17;
                        var6 = var11[var5];
                        var6 = var9.bind(var10)(var6);
                        var8 = var6.intl;
                        var6 = var8.string;
                        var5 = var11[var5];
                        var5 = var9.bind(var10)(var5);
                        var5 = var5.t;
                        var5 = var5.ZNQyiR;
                        var4 = var6.bind(var8)(var5);
case 521:
                        return var4;
case 482:
                        var9 = _closure1_slot51;
                        var4 = _closure1_slot16;
                        var15 = var4.NAME;
                        var17 = undefined;
                        var14 = function(arg1) {
                            var4 = _closure1_slot11;
                            var3 = var4.getRole;
                            var1 = _closure4_slot1;
                            var2 = var1.id;
                            var1 = arg1;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        };
                        var13 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.name;
                            return var1;
                        };
                        var16 = var7;
                        var4 = var17[var9](var16, var15, var14, var13, var12);
                        return var4;
case 481:
                        var9 = _closure1_slot51;
                        var4 = _closure1_slot16;
                        var15 = var4.NICK;
                        var17 = undefined;
                        var14 = function(arg1) {
                            var3 = _closure1_slot13;
                            var2 = var3.getUser;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var13 = function(arg1) {
                            var1 = arg1;
                            return var1;
                        };
                        var16 = var7;
                        var4 = var17[var9](var16, var15, var14, var13, var12);
                        return var4;
case 480:
                        var6 = _closure1_slot51;
                        var3 = _closure1_slot16;
                        var15 = var3.NAME;
                        var17 = undefined;
                        var14 = function(arg1) {
                            var3 = _closure1_slot10;
                            var2 = var3.getChannel;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var13 = function(arg1) {
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var2 = 23;
                            var3 = var3[var2];
                            var2 = undefined;
                            var6 = var4.bind(var2)(var3);
                            var5 = var6.computeChannelName;
                            var9 = _closure1_slot13;
                            var8 = _closure1_slot12;
                            var10 = arg1;
                            var7 = true;
                            var11 = var6;
                            var1 = var11[var5](var10, var9, var8, var7, var6);
                            return var1;
                        };
                        var16 = var7;
                        var2 = var17[var6](var16, var15, var14, var13, var12);
                        return var2;
case 478:
                        return var1;
                    }
                };
                var1 = undefined;
                var8 = var3.bind(var1)(var9, var4);
                var7 = _closure1_slot13;
                var6 = var7.getUser;
                var4 = var9.userId;
                var7 = var6.bind(var7)(var4);
                var6 = null;
                if(!(var6 == var8)) { _fun0037_ip = 522; continue _fun0037 }
case 383:
                var4 = _closure1_slot15;
                var4 = var4.MEMBER_PRUNE;
                var10 = new Array(5);
                var10[0] = var4;
                var4 = _closure1_slot15;
                var4 = var4.MEMBER_DISCONNECT;
                var10[1] = var4;
                var4 = _closure1_slot15;
                var4 = var4.MEMBER_MOVE;
                var10[2] = var4;
                var4 = _closure1_slot15;
                var4 = var4.CREATOR_MONETIZATION_REQUEST_CREATED;
                var10[3] = var4;
                var3 = _closure1_slot15;
                var3 = var3.CREATOR_MONETIZATION_TERMS_ACCEPTED;
                var10[4] = var3;
                var4 = var10.includes;
                var3 = var9.action;
                var3 = var4.bind(var10)(var3);
                if(!var3) { _fun0037_ip = 523; continue _fun0037 }
case 522:
                var4 = var9.set;
                var3 = 'user';
                var7 = var4.bind(var9)(var3, var7);
                _closure3_slot0 = var7;
                var4 = var7.set;
                var3 = 'target';
                var8 = var4.bind(var7)(var3, var8);
                _closure3_slot0 = var8;
                var7 = var8.set;
                var3 = function transformOptions(arg1) {
                    _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                        var5 = arg1;
                        var _closure4_slot0 = var5;
                        var1 = var5.options;
                        var2 = null;
                        if(!(var2 == var1)) { _fun0042_ip = 43; continue _fun0042 }
case 29:
                        var1 = var5.options;
                        return var1;
case 43:
                        var1 = {};
                        var15 = var5.options;
                        var16 = var1;
                        var3 = copyDataProperties(var16, var15);
                        var3 = var5.options;
                        var7 = var3.type;
                        var6 = _closure1_slot27;
                        var6 = var6.USER;
                        if(!(var6 !== var7)) { _fun0042_ip = 109; continue _fun0042 }
case 107:
                        var6 = _closure1_slot27;
                        var6 = var6.ROLE;
                        if(!(var6 === var7)) { _fun0042_ip = 393; continue _fun0042 }
case 55:
                        var9 = _closure1_slot52;
                        var6 = var5.options;
                        var8 = var6.role_name;
                        var7 = _closure1_slot24;
                        var6 = undefined;
                        var6 = var9.bind(var6)(var8, var7);
                        var1['subtarget'] = var6;
                        _fun0042_ip = 393; continue _fun0042;
case 109:
                        var10 = _closure1_slot52;
                        var6 = var5.options;
                        var9 = var6.id;
                        var8 = undefined;
                        var7 = function(arg1) {
                            var3 = _closure1_slot13;
                            var2 = var3.getUser;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var6 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.tag;
                            return var1;
                        };
                        var6 = var10.bind(var8)(var9, var7, var6);
                        var1['subtarget'] = var6;
case 393:
                        var6 = var5.options;
                        var6 = var6.channel_id;
                        if(!(var2 != var6)) { _fun0042_ip = 524; continue _fun0042 }
case 525:
                        var11 = _closure1_slot51;
                        var6 = var5.options;
                        var12 = var6.channel_id;
                        var17 = undefined;
                        var15 = '';
                        var14 = function(arg1) {
                            var3 = _closure1_slot10;
                            var2 = var3.getChannel;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var13 = function(arg1) {
                            var1 = arg1;
                            return var1;
                        };
                        var16 = var5;
                        var6 = var17[var11](var16, var15, var14, var13, var12, var11);
                        var1['channel'] = var6;
case 524:
                        var6 = var5.options;
                        var6 = var6.members_removed;
                        var6 = var2 != var6;
                        if(!var6) { _fun0042_ip = 526; continue _fun0042 }
case 527:
                        var7 = var5.options;
                        var8 = var7.members_removed;
                        var7 = 0;
                        var6 = var7 !== var8;
case 526:
                        if(!var6) { _fun0042_ip = 528; continue _fun0042 }
case 529:
                        var6 = var5.options;
                        var6 = var6.members_removed;
                        var1['count'] = var6;
case 528:
                        var5 = var5.options;
                        var5 = var5.event_exception_id;
                        if(!(var2 != var5)) { _fun0042_ip = 530; continue _fun0042 }
case 193:
                        var5 = _closure1_slot14;
                        var7 = var5.guildScheduledEvents;
                        var6 = var7.find;
                        var5 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.id;
                            var1 = _closure4_slot0;
                            var1 = var1.targetId;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var5 = var6.bind(var7)(var5);
                        var7 = var2 == var5;
                        var6 = undefined;
                        var10 = undefined;
                        if(var7) { _fun0042_ip = 531; continue _fun0042 }
case 532:
                        var7 = var5.guild_scheduled_event_exceptions;
                        var5 = var7.find;
                        var4 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.event_exception_id;
                            var1 = _closure4_slot0;
                            var1 = var1.options;
                            var1 = var1.event_exception_id;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var10 = var5.bind(var7)(var4);
case 531:
                        var5 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var4 = 29;
                        var4 = var9[var4];
                        var5 = var5.bind(var6)(var4);
                        var4 = var5.dateFormat;
                        var8 = _closure1_slot1;
                        var3 = 30;
                        var3 = var9[var3];
                        var3 = var8.bind(var6)(var3);
                        var7 = 19;
                        var7 = var9[var7];
                        var8 = var8.bind(var6)(var7);
                        var7 = var8.extractTimestamp;
                        var11 = var2 == var10;
                        var9 = undefined;
                        if(var11) { _fun0042_ip = 422; continue _fun0042 }
case 533:
                        var9 = var10.event_exception_id;
case 422:
                        var10 = var2 != var9;
                        var2 = '0';
                        if(!var10) { _fun0042_ip = 77; continue _fun0042 }
case 534:
                        var2 = var9;
case 77:
                        var2 = var7.bind(var8)(var2);
                        var3 = var3.bind(var6)(var2);
                        var2 = 'LL';
                        var2 = var4.bind(var5)(var3, var2);
                        var1['subtarget'] = var2;
case 530:
                        return var1;
                    }
                };
                var4 = var3.bind(var1)(var8);
                var3 = 'options';
                var8 = var7.bind(var8)(var3, var4);
                _closure3_slot0 = var8;
                var3 = var8.changes;
                var4 = var8;
                if(!(var6 != var3)) { _fun0037_ip = 535; continue _fun0037 }
case 536:
                var7 = new Array(0);
                var _closure3_slot1 = var7;
                var9 = var8.changes;
                var6 = var9.forEach;
                var3 = function(arg1) {
                    _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                        var7 = _closure3_slot0;
                        var6 = _closure2_slot0;
                        var5 = function transformChange(arg1, arg2, arg3) {
                            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                                var1 = arg1;
                                var3 = arg2;
                                var5 = arg3;
                                var _closure5_slot0 = var5;
                                var7 = var3.action;
                                var6 = _closure1_slot15;
                                var6 = var6.APPLICATION_COMMAND_PERMISSION_UPDATE;
                                if(!(var7 !== var6)) { _fun0044_ip = 433; continue _fun0044 }
case 537:
                                var7 = var1.key;
                                var6 = _closure1_slot16;
                                var6 = var6.OWNER_ID;
                                if(!(var6 !== var7)) { _fun0044_ip = 538; continue _fun0044 }
case 108:
                                var6 = _closure1_slot16;
                                var6 = var6.CHANNEL_ID;
                                if(!(var6 !== var7)) { _fun0044_ip = 539; continue _fun0044 }
case 185:
                                var6 = _closure1_slot16;
                                var6 = var6.AFK_CHANNEL_ID;
                                if(!(var6 !== var7)) { _fun0044_ip = 539; continue _fun0044 }
case 540:
                                var6 = _closure1_slot16;
                                var6 = var6.SYSTEM_CHANNEL_ID;
                                if(!(var6 !== var7)) { _fun0044_ip = 539; continue _fun0044 }
case 122:
                                var6 = _closure1_slot16;
                                var6 = var6.RULES_CHANNEL_ID;
                                if(!(var6 !== var7)) { _fun0044_ip = 539; continue _fun0044 }
case 541:
                                var6 = _closure1_slot16;
                                var6 = var6.PUBLIC_UPDATES_CHANNEL_ID;
                                if(!(var6 !== var7)) { _fun0044_ip = 539; continue _fun0044 }
case 86:
                                var6 = _closure1_slot16;
                                var6 = var6.AFK_TIMEOUT;
                                if(!(var6 !== var7)) { _fun0044_ip = 542; continue _fun0044 }
case 543:
                                var6 = _closure1_slot16;
                                var6 = var6.BITRATE;
                                if(!(var6 !== var7)) { _fun0044_ip = 544; continue _fun0044 }
case 545:
                                var6 = _closure1_slot16;
                                var6 = var6.COLOR;
                                if(!(var6 !== var7)) { _fun0044_ip = 546; continue _fun0044 }
case 547:
                                var6 = _closure1_slot16;
                                var6 = var6.THEME_COLORS;
                                if(!(var6 !== var7)) { _fun0044_ip = 548; continue _fun0044 }
case 549:
                                var6 = _closure1_slot16;
                                var6 = var6.MAX_AGE;
                                if(!(var6 !== var7)) { _fun0044_ip = 550; continue _fun0044 }
case 551:
                                var6 = _closure1_slot16;
                                var6 = var6.PERMISSIONS;
                                if(!(var6 !== var7)) { _fun0044_ip = 552; continue _fun0044 }
case 553:
                                var6 = _closure1_slot16;
                                var6 = var6.PERMISSIONS_GRANTED;
                                if(!(var6 !== var7)) { _fun0044_ip = 554; continue _fun0044 }
case 91:
                                var6 = _closure1_slot16;
                                var6 = var6.PERMISSIONS_DENIED;
                                if(!(var6 !== var7)) { _fun0044_ip = 554; continue _fun0044 }
case 555:
                                var6 = _closure1_slot16;
                                var6 = var6.FLAGS;
                                if(!(var6 !== var7)) { _fun0044_ip = 556; continue _fun0044 }
case 557:
                                var6 = _closure1_slot16;
                                var6 = var6.PREFERRED_LOCALE;
                                if(!(var6 !== var7)) { _fun0044_ip = 558; continue _fun0044 }
case 559:
                                var6 = _closure1_slot16;
                                var6 = var6.VIDEO_QUALITY_MODE;
                                if(!(var6 !== var7)) { _fun0044_ip = 560; continue _fun0044 }
case 532:
                                var6 = _closure1_slot16;
                                var6 = var6.SYSTEM_CHANNEL_FLAGS;
                                if(!(var6 !== var7)) { _fun0044_ip = 561; continue _fun0044 }
case 72:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_ACTIONS;
                                if(!(var6 !== var7)) { _fun0044_ip = 562; continue _fun0044 }
case 563:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_EVENT_TYPE;
                                if(!(var6 !== var7)) { _fun0044_ip = 465; continue _fun0044 }
case 213:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_TRIGGER_TYPE;
                                if(!(var6 !== var7)) { _fun0044_ip = 564; continue _fun0044 }
case 565:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_TRIGGER_METADATA;
                                if(!(var6 !== var7)) { _fun0044_ip = 491; continue _fun0044 }
case 173:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_ADD_KEYWORDS;
                                if(!(var6 !== var7)) { _fun0044_ip = 566; continue _fun0044 }
case 75:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_REMOVE_KEYWORDS;
                                if(!(var6 !== var7)) { _fun0044_ip = 566; continue _fun0044 }
case 567:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_ADD_REGEX_PATTERNS;
                                if(!(var6 !== var7)) { _fun0044_ip = 566; continue _fun0044 }
case 568:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_REMOVE_REGEX_PATTERNS;
                                if(!(var6 !== var7)) { _fun0044_ip = 566; continue _fun0044 }
case 569:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_ADD_ALLOW_LIST;
                                if(!(var6 !== var7)) { _fun0044_ip = 566; continue _fun0044 }
case 570:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_REMOVE_ALLOW_LIST;
                                if(!(var6 !== var7)) { _fun0044_ip = 566; continue _fun0044 }
case 571:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_EXEMPT_CHANNELS;
                                if(!(var6 !== var7)) { _fun0044_ip = 572; continue _fun0044 }
case 573:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_EXEMPT_ROLES;
                                if(!(var6 !== var7)) { _fun0044_ip = 574; continue _fun0044 }
case 575:
                                var6 = _closure1_slot16;
                                var6 = var6.ROLE_IDS;
                                if(!(var6 !== var7)) { _fun0044_ip = 576; continue _fun0044 }
case 438:
                                var6 = _closure1_slot16;
                                var6 = var6.AVAILABLE_TAGS;
                                if(!(var6 !== var7)) { _fun0044_ip = 511; continue _fun0044 }
case 577:
                                var6 = _closure1_slot16;
                                var6 = var6.APPLIED_TAGS;
                                if(!(var6 !== var7)) { _fun0044_ip = 578; continue _fun0044 }
case 579:
                                var6 = _closure1_slot16;
                                var6 = var6.SCHEDULED_START_TIME;
                                if(!(var6 !== var7)) { _fun0044_ip = 580; continue _fun0044 }
case 581:
                                var6 = _closure1_slot16;
                                var6 = var6.SCHEDULED_END_TIME;
                                if(!(var6 !== var7)) { _fun0044_ip = 580; continue _fun0044 }
case 263:
                                return var1;
case 580:
                                var8 = _closure1_slot50;
                                var7 = undefined;
                                var6 = function(arg1) {
                                    var3 = _closure1_slot0;
                                    var6 = _closure1_slot3;
                                    var2 = 29;
                                    var2 = var6[var2];
                                    var5 = undefined;
                                    var4 = var3.bind(var5)(var2);
                                    var3 = var4.dateFormat;
                                    var2 = _closure1_slot1;
                                    var1 = 30;
                                    var1 = var6[var1];
                                    var2 = var2.bind(var5)(var1);
                                    var1 = global;
                                    var7 = var1.Date;
                                    var1 = var7.prototype;
                                    var6 = Object.create(var1, {constructor: {value: var7}});
                                    var9 = arg1;
                                    var10 = var6;
                                    var1 = new var10[var7](var9, var8);
                                    var1 = var1 instanceof Object ? var1 : var6;
                                    var2 = var2.bind(var5)(var1);
                                    var1 = 'LLLL';
                                    var1 = var3.bind(var4)(var2, var1);
                                    return var1;
                                };
                                var6 = var8.bind(var7)(var1, var6);
                                return var6;
case 578:
                                var7 = _closure1_slot48;
                                var6 = undefined;
                                var6 = var7.bind(var6)(var1, var3);
                                return var6;
case 511:
                                var7 = _closure1_slot49;
                                var6 = undefined;
                                var6 = var7.bind(var6)(var1);
                                return var6;
case 576:
                                var8 = var3.targetType;
                                var6 = _closure1_slot17;
                                var7 = var6.INVITE;
                                var6 = var1;
                                if(!(var8 === var7)) { _fun0044_ip = 582; continue _fun0044 }
case 583:
                                var9 = _closure1_slot50;
                                var8 = undefined;
                                var7 = function(arg1) {
                                    var4 = arg1;
                                    var3 = var4.map;
                                    var2 = function(arg1) {
                                        var4 = _closure1_slot11;
                                        var3 = var4.getRole;
                                        var1 = _closure5_slot0;
                                        var2 = var1.id;
                                        var1 = arg1;
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var1;
                                    };
                                    var4 = var3.bind(var4)(var2);
                                    var3 = var4.filter;
                                    var2 = function(arg1) {
                                        var2 = null;
                                        var1 = arg1;
                                        var1 = var2 != var1;
                                        return var1;
                                    };
                                    var3 = var3.bind(var4)(var2);
                                    var2 = var3.map;
                                    var1 = function(arg1) {
                                        var2 = arg1;
                                        var1 = {};
                                        var3 = var2.id;
                                        var1['id'] = var3;
                                        var2 = var2.name;
                                        var1['name'] = var2;
                                        return var1;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var6 = var9.bind(var8)(var1, var7);
case 582:
                                return var6;
case 574:
                                var8 = var3.targetType;
                                var6 = _closure1_slot17;
                                var7 = var6.AUTO_MODERATION_RULE;
                                var6 = var1;
                                if(!(var8 === var7)) { _fun0044_ip = 584; continue _fun0044 }
case 585:
                                var10 = _closure1_slot50;
                                var9 = undefined;
                                var8 = function(arg1) {
                                    var4 = arg1;
                                    var3 = var4.map;
                                    var2 = function(arg1) {
                                        var4 = _closure1_slot11;
                                        var3 = var4.getRole;
                                        var1 = _closure5_slot0;
                                        var2 = var1.id;
                                        var1 = arg1;
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var1;
                                    };
                                    var4 = var3.bind(var4)(var2);
                                    var3 = var4.filter;
                                    var2 = function(arg1) {
                                        var2 = null;
                                        var1 = arg1;
                                        var1 = var2 != var1;
                                        return var1;
                                    };
                                    var3 = var3.bind(var4)(var2);
                                    var2 = var3.map;
                                    var1 = function(arg1) {
                                        var1 = arg1;
                                        var1 = var1.name;
                                        return var1;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var7 = function(arg1) {
                                    _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                                        var4 = arg1;
                                        var1 = null;
                                        if(!(var1 != var4)) { _fun0045_ip = 29; continue _fun0045 }
case 586:
                                        var2 = var4.length;
                                        var1 = 0;
                                        if(!(!(var2 > var1))) { _fun0045_ip = 55; continue _fun0045 }
case 29:
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot3;
                                        var1 = 17;
                                        var2 = var7[var1];
                                        var5 = undefined;
                                        var2 = var6.bind(var5)(var2);
                                        var3 = var2.intl;
                                        var2 = var3.string;
                                        var1 = var7[var1];
                                        var1 = var6.bind(var5)(var1);
                                        var1 = var1.t;
                                        var1 = var1.K/EdV8;
                                        var1 = var2.bind(var3)(var1);
                                        _fun0045_ip = 587; continue _fun0045;
case 55:
                                        var3 = var4.join;
                                        var2 = ', ';
                                        var1 = var3.bind(var4)(var2);
case 587:
                                        return var1;
                                    }
                                };
                                var6 = var10.bind(var9)(var1, var8, var7);
case 584:
                                return var6;
case 572:
                                var8 = var3.targetType;
                                var6 = _closure1_slot17;
                                var7 = var6.AUTO_MODERATION_RULE;
                                var6 = var1;
                                if(!(var8 === var7)) { _fun0044_ip = 588; continue _fun0044 }
case 589:
                                var10 = _closure1_slot50;
                                var9 = undefined;
                                var8 = function(arg1) {
                                    var4 = arg1;
                                    var3 = var4.map;
                                    var2 = _closure1_slot10;
                                    var2 = var2.getChannel;
                                    var4 = var3.bind(var4)(var2);
                                    var3 = var4.filter;
                                    var2 = function(arg1) {
                                        var2 = null;
                                        var1 = arg1;
                                        var1 = var2 != var1;
                                        return var1;
                                    };
                                    var3 = var3.bind(var4)(var2);
                                    var2 = var3.map;
                                    var1 = function(arg1) {
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot3;
                                        var2 = 23;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var6 = var4.bind(var2)(var3);
                                        var5 = var6.computeChannelName;
                                        var9 = _closure1_slot13;
                                        var8 = _closure1_slot12;
                                        var10 = arg1;
                                        var7 = true;
                                        var11 = var6;
                                        var1 = var11[var5](var10, var9, var8, var7, var6);
                                        return var1;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var7 = function(arg1) {
                                    _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                                        var4 = arg1;
                                        var1 = null;
                                        if(!(var1 != var4)) { _fun0046_ip = 29; continue _fun0046 }
case 586:
                                        var2 = var4.length;
                                        var1 = 0;
                                        if(!(!(var2 > var1))) { _fun0046_ip = 55; continue _fun0046 }
case 29:
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot3;
                                        var1 = 17;
                                        var2 = var7[var1];
                                        var5 = undefined;
                                        var2 = var6.bind(var5)(var2);
                                        var3 = var2.intl;
                                        var2 = var3.string;
                                        var1 = var7[var1];
                                        var1 = var6.bind(var5)(var1);
                                        var1 = var1.t;
                                        var1 = var1.K/EdV8;
                                        var1 = var2.bind(var3)(var1);
                                        _fun0046_ip = 587; continue _fun0046;
case 55:
                                        var3 = var4.join;
                                        var2 = ', ';
                                        var1 = var3.bind(var4)(var2);
case 587:
                                        return var1;
                                    }
                                };
                                var6 = var10.bind(var9)(var1, var8, var7);
case 588:
                                return var6;
case 566:
                                var8 = var3.targetType;
                                var6 = _closure1_slot17;
                                var7 = var6.AUTO_MODERATION_RULE;
                                var6 = var1;
                                if(!(var8 === var7)) { _fun0044_ip = 590; continue _fun0044 }
case 286:
                                var9 = _closure1_slot50;
                                var8 = undefined;
                                var7 = function(arg1) {
                                    _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                                        var4 = arg1;
                                        var1 = null;
                                        if(!(var1 != var4)) { _fun0047_ip = 3; continue _fun0047 }
case 586:
                                        var1 = global;
                                        var2 = var1.Array;
                                        var1 = var2.isArray;
                                        var1 = var1.bind(var2)(var4);
                                        if(var1) { _fun0047_ip = 42; continue _fun0047 }
case 3:
                                        var1 = global;
                                        var2 = var1.JSON;
                                        var1 = var2.stringify;
                                        var1 = var1.bind(var2)(var4);
                                        _fun0047_ip = 9; continue _fun0047;
case 42:
                                        var3 = var4.map;
                                        var2 = function(arg1) {
                                            var1 = global;
                                            var1 = var1.HermesInternal;
                                            var3 = var1.concat;
                                            var2 = "'";
                                            var1 = arg1;
                                            var1 = var3.bind(var2)(var1, var2);
                                            return var1;
                                        };
                                        var4 = var3.bind(var4)(var2);
                                        var3 = var4.join;
                                        var2 = ', ';
                                        var1 = var3.bind(var4)(var2);
case 9:
                                        return var1;
                                    }
                                };
                                var6 = var9.bind(var8)(var1, var7);
case 590:
                                return var6;
case 491:
                                var8 = var3.targetType;
                                var6 = _closure1_slot17;
                                var7 = var6.AUTO_MODERATION_RULE;
                                var6 = var1;
                                if(!(var8 === var7)) { _fun0044_ip = 591; continue _fun0044 }
case 592:
                                var9 = _closure1_slot50;
                                var8 = undefined;
                                var7 = function(arg1) {
                                    _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                                        var7 = arg1;
                                        var3 = null;
                                        var1 = var7;
                                        if(!(var3 != var7)) { _fun0048_ip = 22; continue _fun0048 }
case 130:
                                        var4 = 'object';
                                        var2 = typeof var7;
                                        var1 = var7;
                                        if(!(var4 === var2)) { _fun0048_ip = 22; continue _fun0048 }
case 59:
                                        var2 = var7.keyword_filter;
                                        if(!(var3 != var2)) { _fun0048_ip = 38; continue _fun0048 }
case 80:
                                        var2 = global;
                                        var4 = var2.Array;
                                        var3 = var4.isArray;
                                        var2 = var7.keyword_filter;
                                        var2 = var3.bind(var4)(var2);
                                        if(var2) { _fun0048_ip = 48; continue _fun0048 }
case 38:
                                        var2 = global;
                                        var3 = var2.JSON;
                                        var2 = var3.stringify;
                                        var2 = var2.bind(var3)(var7);
                                        _fun0048_ip = 593; continue _fun0048;
case 48:
                                        var8 = _closure1_slot0;
                                        var9 = _closure1_slot3;
                                        var3 = 17;
                                        var5 = var9[var3];
                                        var4 = undefined;
                                        var5 = var8.bind(var4)(var5);
                                        var6 = var5.intl;
                                        var5 = var6.formatToMarkdownString;
                                        var3 = var9[var3];
                                        var3 = var8.bind(var4)(var3);
                                        var3 = var3.t;
                                        var4 = var3.y91UXV;
                                        var3 = {};
                                        var9 = var7.keyword_filter;
                                        var8 = var9.map;
                                        var7 = function(arg1) {
                                            var1 = global;
                                            var1 = var1.HermesInternal;
                                            var3 = var1.concat;
                                            var2 = "'";
                                            var1 = arg1;
                                            var1 = var3.bind(var2)(var1, var2);
                                            return var1;
                                        };
                                        var9 = var8.bind(var9)(var7);
                                        var8 = var9.join;
                                        var7 = ', ';
                                        var7 = var8.bind(var9)(var7);
                                        var3['newValue'] = var7;
                                        var2 = var5.bind(var6)(var4, var3);
case 593:
                                        var1 = var2;
case 22:
                                        return var1;
                                    }
                                };
                                var6 = var9.bind(var8)(var1, var7);
case 591:
                                return var6;
case 564:
                                var8 = var3.targetType;
                                var6 = _closure1_slot17;
                                var7 = var6.AUTO_MODERATION_RULE;
                                var6 = var1;
                                if(!(var8 === var7)) { _fun0044_ip = 594; continue _fun0044 }
case 595:
                                var9 = _closure1_slot50;
                                var10 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var7 = 28;
                                var7 = var8[var7];
                                var8 = undefined;
                                var7 = var10.bind(var8)(var7);
                                var7 = var7.triggerTypeToName;
                                var6 = var9.bind(var8)(var1, var7);
case 594:
                                return var6;
case 465:
                                var8 = var3.targetType;
                                var6 = _closure1_slot17;
                                var7 = var6.AUTO_MODERATION_RULE;
                                var6 = var1;
                                if(!(var8 === var7)) { _fun0044_ip = 596; continue _fun0044 }
case 597:
                                var9 = _closure1_slot50;
                                var10 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var7 = 28;
                                var7 = var8[var7];
                                var8 = undefined;
                                var7 = var10.bind(var8)(var7);
                                var7 = var7.eventTypeToName;
                                var6 = var9.bind(var8)(var1, var7);
case 596:
                                return var6;
case 562:
                                var7 = var3.targetType;
                                var3 = _closure1_slot17;
                                var6 = var3.AUTO_MODERATION_RULE;
                                var3 = var1;
                                if(!(var7 === var6)) { _fun0044_ip = 598; continue _fun0044 }
case 520:
                                var9 = _closure1_slot50;
                                var8 = undefined;
                                var7 = function(arg1) {
                                    var3 = arg1;
                                    var2 = var3.map;
                                    var1 = function(arg1) {
                                        var1 = arg1;
                                        var1 = var1.type;
                                        return var1;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var6 = function(arg1) {
                                    var3 = arg1;
                                    var2 = var3.map;
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot3;
                                    var1 = 28;
                                    var4 = var4[var1];
                                    var1 = undefined;
                                    var1 = var5.bind(var1)(var4);
                                    var1 = var1.actionTypeToName;
                                    var3 = var2.bind(var3)(var1);
                                    var2 = var3.join;
                                    var1 = ', ';
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var3 = var9.bind(var8)(var1, var7, var6);
case 598:
                                return var3;
case 561:
                                var6 = function transformSystemChannelFlagsChanges(arg1) {
                                    var1 = arg1;
                                    var _closure6_slot0 = var1;
                                    var1 = {};
                                    var5 = _closure1_slot28;
                                    var6 = var5.SUPPRESS_JOIN_NOTIFICATIONS;
                                    var4 = _closure1_slot16;
                                    var4 = var4.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS;
                                    var1[5] = var4;
                                    var6 = var5.SUPPRESS_PREMIUM_SUBSCRIPTIONS;
                                    var4 = _closure1_slot16;
                                    var4 = var4.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS;
                                    var1[5] = var4;
                                    var6 = var5.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS;
                                    var4 = _closure1_slot16;
                                    var4 = var4.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS;
                                    var1[5] = var4;
                                    var4 = var5.SUPPRESS_JOIN_NOTIFICATION_REPLIES;
                                    var3 = _closure1_slot16;
                                    var3 = var3.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES;
                                    var1[3] = var3;
                                    var _closure6_slot1 = var1;
                                    var1 = new Array(0);
                                    var _closure6_slot2 = var1;
                                    var3 = global;
                                    var4 = var3.Object;
                                    var3 = var4.values;
                                    var4 = var3.bind(var4)(var5);
                                    var3 = var4.forEach;
                                    var2 = function(arg1) {
                                        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                                            var5 = arg1;
                                            var2 = _closure6_slot0;
                                            var3 = var2.oldValue;
                                            var3 = var3 & var5;
                                            var4 = var3 === var5;
                                            var2 = var2.newValue;
                                            var2 = var2 & var5;
                                            var2 = var2 === var5;
                                            if(!(var4 !== var2)) { _fun0049_ip = 540; continue _fun0049 }
case 80:
                                            var6 = _closure1_slot9;
                                            var3 = _closure6_slot1;
                                            var9 = var3[var5];
                                            var3 = var6.prototype;
                                            var3 = Object.create(var3, {constructor: {value: var6}});
                                            var8 = !var4;
                                            var7 = !var2;
                                            var10 = var3;
                                            var2 = new var10[var6](var9, var8, var7, var6);
                                            var3 = var2 instanceof Object ? var2 : var3;
                                            var2 = _closure6_slot2;
                                            var1 = var2.push;
                                            var1 = var1.bind(var2)(var3);
case 540:
                                            var1 = undefined;
                                            return var1;
                                        }
                                    };
                                    var2 = var3.bind(var4)(var2);
                                    return var1;
                                };
                                var3 = undefined;
                                var3 = var6.bind(var3)(var1);
                                return var3;
case 560:
                                var7 = _closure1_slot50;
                                var6 = undefined;
                                var3 = function(arg1) {
                                    _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                                        var1 = _closure1_slot25;
                                        var3 = var1.FULL;
                                        var1 = arg1;
                                        if(!(var1 !== var3)) { _fun0050_ip = 136; continue _fun0050 }
case 29:
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot3;
                                        var1 = 17;
                                        var3 = var7[var1];
                                        var5 = undefined;
                                        var3 = var6.bind(var5)(var3);
                                        var4 = var3.intl;
                                        var3 = var4.string;
                                        var1 = var7[var1];
                                        var1 = var6.bind(var5)(var1);
                                        var1 = var1.t;
                                        var1 = var1.jjKYpu;
                                        var1 = var3.bind(var4)(var1);
                                        _fun0050_ip = 599; continue _fun0050;
case 136:
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot3;
                                        var2 = 17;
                                        var3 = var7[var2];
                                        var5 = undefined;
                                        var3 = var6.bind(var5)(var3);
                                        var4 = var3.intl;
                                        var3 = var4.string;
                                        var2 = var7[var2];
                                        var2 = var6.bind(var5)(var2);
                                        var2 = var2.t;
                                        var2 = var2["7jOoJE"];
                                        var1 = var3.bind(var4)(var2);
case 599:
                                        return var1;
                                    }
                                };
                                var3 = var7.bind(var6)(var1, var3);
                                return var3;
case 558:
                                var7 = _closure1_slot50;
                                var6 = undefined;
                                var3 = function(arg1) {
                                    _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                                        var2 = arg1;
                                        var _closure6_slot0 = var2;
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot3;
                                        var2 = 17;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var3 = var4.bind(var2)(var3);
                                        var2 = var3.getAvailableLocales;
                                        var3 = var2.bind(var3)();
                                        var2 = var3.find;
                                        var1 = function(arg1) {
                                            var1 = arg1;
                                            var2 = var1.value;
                                            var1 = _closure6_slot0;
                                            var1 = var2 === var1;
                                            return var1;
                                        };
                                        var2 = var2.bind(var3)(var1);
                                        var1 = null;
                                        var3 = var1 != var2;
                                        if(!var3) { _fun0051_ip = 83; continue _fun0051 }
case 105:
                                        var1 = var2.name;
case 83:
                                        return var1;
                                    }
                                };
                                var3 = var7.bind(var6)(var1, var3);
                                return var3;
case 556:
                                var3 = new Array(0);
                                var8 = var1.oldValue;
                                var6 = var1.newValue;
                                var7 = 0;
                                var11 = 'number';
                                var9 = typeof var8;
                                var10 = 0;
                                if(!(var11 === var9)) { _fun0044_ip = 600; continue _fun0044 }
case 601:
                                var10 = var8;
case 600:
                                var8 = typeof var6;
                                var9 = 0;
                                if(!(var11 === var8)) { _fun0044_ip = 602; continue _fun0044 }
case 603:
                                var9 = var6;
case 602:
                                var8 = _closure1_slot2;
                                var6 = _closure1_slot3;
                                var17 = 22;
                                var11 = var6[var17];
                                var16 = undefined;
                                var12 = var8.bind(var16)(var11);
                                var11 = var12.removeFlag;
                                var15 = var11.bind(var12)(var9, var10);
                                var6 = var6[var17];
                                var8 = var8.bind(var16)(var6);
                                var6 = var8.removeFlag;
                                var14 = var6.bind(var8)(var10, var9);
                                var9 = new Array(0);
                                var8 = new Array(0);
                                var12 = _closure1_slot30;
                                for(var6 in var12)
case 604:
                                {
case 605:
                                    var19 = var6;
                                    var18 = _closure1_slot30;
                                    var19 = var18[var19];
                                    var20 = _closure1_slot2;
                                    var18 = _closure1_slot3;
                                    var18 = var18[var17];
                                    var20 = var20.bind(var16)(var18);
                                    var18 = var20.hasFlag;
                                    var18 = var18.bind(var20)(var15, var19);
                                    if(!var18) { _fun0044_ip = 344; continue _fun0044 }
case 606:
                                    var18 = var9.push;
                                    var18 = var18.bind(var9)(var19);
case 344:
                                    var20 = _closure1_slot2;
                                    var18 = _closure1_slot3;
                                    var18 = var18[var17];
                                    var20 = var20.bind(var16)(var18);
                                    var18 = var20.hasFlag;
                                    var18 = var18.bind(var20)(var14, var19);
                                    if(!var18) { _fun0044_ip = 604; continue _fun0044 }
case 607:
                                    var18 = var8.push;
                                    var18 = var18.bind(var8)(var19);
                                    _fun0044_ip = 604; continue _fun0044;
                                }
case 608:
                                var6 = {};
                                var6['added'] = var9;
                                var6['removed'] = var8;
                                var12 = var6.added;
                                var10 = var6.removed;
                                var6 = var12.length;
                                if(!(var6 > var7)) { _fun0044_ip = 609; continue _fun0044 }
case 610:
                                var11 = _closure1_slot9;
                                var23 = var1.key;
                                var6 = var11.prototype;
                                var8 = Object.create(var6, {constructor: {value: var11}});
                                var22 = null;
                                var24 = var8;
                                var21 = var12;
                                var6 = new var24[var11](var23, var22, var21, var20);
                                var8 = var6 instanceof Object ? var6 : var8;
                                var6 = var3.push;
                                var6 = var6.bind(var3)(var8);
case 609:
                                var6 = var10.length;
                                if(!(var6 > var7)) { _fun0044_ip = 611; continue _fun0044 }
case 612:
                                var9 = _closure1_slot9;
                                var23 = var1.key;
                                var6 = var9.prototype;
                                var7 = Object.create(var6, {constructor: {value: var9}});
                                var21 = null;
                                var24 = var7;
                                var22 = var10;
                                var6 = new var24[var9](var23, var22, var21, var20);
                                var7 = var6 instanceof Object ? var6 : var7;
                                var6 = var3.push;
                                var6 = var6.bind(var3)(var7);
case 611:
                                return var3;
case 554:
                                var3 = new Array(0);
                                var9 = _closure1_slot46;
                                var8 = var1.oldValue;
                                var7 = var1.newValue;
                                var6 = undefined;
                                var6 = var9.bind(var6)(var8, var7);
                                var12 = var6.added;
                                var9 = var6.removed;
                                var6 = var12.length;
                                var7 = 0;
                                if(!(var6 > var7)) { _fun0044_ip = 613; continue _fun0044 }
case 614:
                                var11 = _closure1_slot9;
                                var23 = var1.key;
                                var6 = var11.prototype;
                                var8 = Object.create(var6, {constructor: {value: var11}});
                                var22 = null;
                                var24 = var8;
                                var21 = var12;
                                var6 = new var24[var11](var23, var22, var21, var20);
                                var8 = var6 instanceof Object ? var6 : var8;
                                var6 = var3.push;
                                var6 = var6.bind(var3)(var8);
case 613:
                                var6 = var9.length;
                                if(!(var6 > var7)) { _fun0044_ip = 615; continue _fun0044 }
case 616:
                                var8 = _closure1_slot9;
                                var6 = _closure1_slot16;
                                var23 = var6.PERMISSIONS_RESET;
                                var7 = var8.prototype;
                                var7 = Object.create(var7, {constructor: {value: var8}});
                                var24 = var7;
                                var22 = var9;
                                var21 = var9;
                                var6 = new var24[var8](var23, var22, var21, var20);
                                var7 = var6 instanceof Object ? var6 : var7;
                                var6 = var3.push;
                                var6 = var6.bind(var3)(var7);
case 615:
                                return var3;
case 552:
                                var3 = new Array(0);
                                var9 = _closure1_slot46;
                                var8 = var1.oldValue;
                                var7 = var1.newValue;
                                var6 = undefined;
                                var6 = var9.bind(var6)(var8, var7);
                                var12 = var6.added;
                                var10 = var6.removed;
                                var6 = var12.length;
                                var7 = 0;
                                if(!(var6 > var7)) { _fun0044_ip = 617; continue _fun0044 }
case 618:
                                var11 = _closure1_slot9;
                                var6 = _closure1_slot16;
                                var23 = var6.PERMISSIONS_GRANTED;
                                var6 = var11.prototype;
                                var8 = Object.create(var6, {constructor: {value: var11}});
                                var22 = null;
                                var24 = var8;
                                var21 = var12;
                                var6 = new var24[var11](var23, var22, var21, var20);
                                var8 = var6 instanceof Object ? var6 : var8;
                                var6 = var3.push;
                                var6 = var6.bind(var3)(var8);
case 617:
                                var6 = var10.length;
                                if(!(var6 > var7)) { _fun0044_ip = 619; continue _fun0044 }
case 620:
                                var9 = _closure1_slot9;
                                var6 = _closure1_slot16;
                                var23 = var6.PERMISSIONS_DENIED;
                                var6 = var9.prototype;
                                var7 = Object.create(var6, {constructor: {value: var9}});
                                var22 = null;
                                var24 = var7;
                                var21 = var10;
                                var6 = new var24[var9](var23, var22, var21, var20);
                                var7 = var6 instanceof Object ? var6 : var7;
                                var6 = var3.push;
                                var6 = var6.bind(var3)(var7);
case 619:
                                return var3;
case 550:
                                var7 = _closure1_slot50;
                                var6 = undefined;
                                var3 = function(arg1) {
                                    _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                                        var1 = arg1;
                                        var4 = _closure1_slot1;
                                        var3 = _closure1_slot3;
                                        var2 = 27;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var3 = var4.bind(var2)(var3);
                                        var2 = var3.getMaxAgeOptionByValue;
                                        var2 = var2.bind(var3)(var1);
                                        var3 = null;
                                        if(!(var3 !== var2)) { _fun0052_ip = 46; continue _fun0052 }
case 135:
                                        var1 = var2.label;
case 46:
                                        return var1;
                                    }
                                };
                                var3 = var7.bind(var6)(var1, var3);
                                return var3;
case 548:
                                var7 = _closure1_slot50;
                                var6 = undefined;
                                var3 = function(arg1) {
                                    var4 = arg1;
                                    var3 = _closure1_slot0;
                                    var6 = _closure1_slot3;
                                    var1 = 26;
                                    var5 = var6[var1];
                                    var2 = undefined;
                                    var8 = var3.bind(var2)(var5);
                                    var7 = var8.int2hex;
                                    var5 = 0;
                                    var5 = var4[var5];
                                    var7 = var7.bind(var8)(var5);
                                    var5 = var7.toUpperCase;
                                    var5 = var5.bind(var7)();
                                    var1 = var6[var1];
                                    var3 = var3.bind(var2)(var1);
                                    var2 = var3.int2hex;
                                    var1 = 1;
                                    var1 = var4[var1];
                                    var2 = var2.bind(var3)(var1);
                                    var1 = var2.toUpperCase;
                                    var4 = var1.bind(var2)();
                                    var1 = global;
                                    var1 = var1.HermesInternal;
                                    var3 = var1.concat;
                                    var2 = '';
                                    var1 = ', ';
                                    var1 = var3.bind(var2)(var5, var1, var4);
                                    return var1;
                                };
                                var3 = var7.bind(var6)(var1, var3);
                                return var3;
case 546:
                                var7 = _closure1_slot50;
                                var6 = undefined;
                                var3 = function(arg1) {
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var1 = 26;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.int2hex;
                                    var1 = arg1;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = var2.toUpperCase;
                                    var1 = var1.bind(var2)();
                                    return var1;
                                };
                                var3 = var7.bind(var6)(var1, var3);
                                return var3;
case 544:
                                var7 = _closure1_slot50;
                                var6 = undefined;
                                var3 = function(arg1) {
                                    var2 = arg1;
                                    var1 = 1000;
                                    var1 = var2 / var1;
                                    return var1;
                                };
                                var3 = var7.bind(var6)(var1, var3);
                                return var3;
case 542:
                                var7 = _closure1_slot50;
                                var6 = undefined;
                                var3 = function(arg1) {
                                    var2 = arg1;
                                    var1 = 60;
                                    var1 = var2 / var1;
                                    return var1;
                                };
                                var3 = var7.bind(var6)(var1, var3);
                                return var3;
case 539:
                                var8 = _closure1_slot50;
                                var7 = undefined;
                                var6 = function(arg1) {
                                    var3 = _closure1_slot10;
                                    var2 = var3.getChannel;
                                    var1 = arg1;
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var3 = function(arg1) {
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var2 = 23;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var6 = var4.bind(var2)(var3);
                                    var5 = var6.computeChannelName;
                                    var9 = _closure1_slot13;
                                    var8 = _closure1_slot12;
                                    var10 = arg1;
                                    var7 = true;
                                    var11 = var6;
                                    var1 = var11[var5](var10, var9, var8, var7, var6);
                                    return var1;
                                };
                                var3 = var8.bind(var7)(var1, var6, var3);
                                return var3;
case 538:
                                var7 = _closure1_slot50;
                                var6 = undefined;
                                var3 = function(arg1) {
                                    var3 = _closure1_slot13;
                                    var2 = var3.getUser;
                                    var1 = arg1;
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var3 = var7.bind(var6)(var1, var3);
                                return var3;
case 433:
                                var3 = var1.newValue;
                                if(var3) { _fun0044_ip = 621; continue _fun0044 }
case 622:
                                var3 = var1.oldValue;
case 621:
                                var7 = var3.type;
                                var6 = _closure1_slot26;
                                var6 = var6.ROLE;
                                if(!(var6 !== var7)) { _fun0044_ip = 623; continue _fun0044 }
case 624:
                                var6 = _closure1_slot26;
                                var6 = var6.USER;
                                if(!(var6 !== var7)) { _fun0044_ip = 625; continue _fun0044 }
case 626:
                                var6 = _closure1_slot26;
                                var6 = var6.CHANNEL;
                                if(!(var6 === var7)) { _fun0044_ip = 627; continue _fun0044 }
case 628:
                                var6 = var3.id;
                                var8 = _closure1_slot1;
                                var9 = _closure1_slot3;
                                var7 = 25;
                                var7 = var9[var7];
                                var9 = undefined;
                                var7 = var8.bind(var9)(var7);
                                var5 = var5.id;
                                var8 = var7.bind(var9)(var5);
                                var7 = var8.subtract;
                                var5 = 1;
                                var7 = var7.bind(var8)(var5);
                                var5 = var7.toString;
                                var5 = var5.bind(var7)();
                                if(!(var6 !== var5)) { _fun0044_ip = 629; continue _fun0044 }
case 630:
                                var8 = _closure1_slot52;
                                var7 = var3.id;
                                var6 = function(arg1) {
                                    var3 = _closure1_slot10;
                                    var2 = var3.getChannel;
                                    var1 = arg1;
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var5 = function(arg1) {
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var2 = 23;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var6 = var4.bind(var2)(var3);
                                    var5 = var6.computeChannelName;
                                    var9 = _closure1_slot13;
                                    var8 = _closure1_slot12;
                                    var10 = arg1;
                                    var7 = true;
                                    var11 = var6;
                                    var1 = var11[var5](var10, var9, var8, var7, var6);
                                    return var1;
                                };
                                var5 = var8.bind(var9)(var7, var6, var5);
                                var1['subtarget'] = var5;
                                _fun0044_ip = 627; continue _fun0044;
case 629:
                                var8 = _closure1_slot0;
                                var10 = _closure1_slot3;
                                var5 = 17;
                                var6 = var10[var5];
                                var6 = var8.bind(var9)(var6);
                                var7 = var6.intl;
                                var6 = var7.string;
                                var5 = var10[var5];
                                var5 = var8.bind(var9)(var5);
                                var5 = var5.t;
                                var5 = var5.MSYhgh;
                                var5 = var6.bind(var7)(var5);
                                var1['subtarget'] = var5;
                                _fun0044_ip = 627; continue _fun0044;
case 625:
                                var9 = _closure1_slot52;
                                var8 = var3.id;
                                var7 = undefined;
                                var6 = function(arg1) {
                                    var3 = _closure1_slot13;
                                    var2 = var3.getUser;
                                    var1 = arg1;
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var5 = function(arg1) {
                                    var1 = arg1;
                                    var1 = var1.tag;
                                    return var1;
                                };
                                var5 = var9.bind(var7)(var8, var6, var5);
                                var1['subtarget'] = var5;
                                _fun0044_ip = 627; continue _fun0044;
case 623:
                                var6 = _closure1_slot52;
                                var5 = var3.id;
                                var4 = undefined;
                                var3 = function(arg1) {
                                    var4 = _closure1_slot11;
                                    var3 = var4.getRole;
                                    var1 = _closure5_slot0;
                                    var2 = var1.id;
                                    var1 = arg1;
                                    var1 = var3.bind(var4)(var2, var1);
                                    return var1;
                                };
                                var2 = function(arg1) {
                                    var1 = arg1;
                                    var1 = var1.name;
                                    return var1;
                                };
                                var2 = var6.bind(var4)(var5, var3, var2);
                                var1['subtarget'] = var2;
case 627:
                                return var1;
                            }
                        };
                        var1 = undefined;
                        var4 = arg1;
                        var4 = var5.bind(var1)(var4, var7, var6);
                        var5 = global;
                        var6 = var5.Array;
                        var5 = var6.isArray;
                        var5 = var5.bind(var6)(var4);
                        if(var5) { _fun0043_ip = 132; continue _fun0043 }
case 28:
                        var5 = _closure3_slot1;
                        var3 = var5.push;
                        var3 = var3.bind(var5)(var4);
                        _fun0043_ip = 36; continue _fun0043;
case 132:
                        var3 = var4.forEach;
                        var2 = function(arg1) {
                            var3 = _closure3_slot1;
                            var2 = var3.push;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
case 36:
                        return var1;
                    }
                };
                var3 = var6.bind(var9)(var3);
                var6 = var8.set;
                var3 = 'changes';
                var3 = var6.bind(var8)(var3, var7);
                _closure3_slot0 = var3;
                var4 = var3;
case 535:
                var3 = _closure2_slot1;
                var2 = var3.push;
                var2 = var2.bind(var3)(var4);
case 523:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['transformLogs'] = var5;
    var3['transformAppliedForumTagChange'] = var4;
    var3['transformAvailableForumTagChange'] = var2;
    return var1;
})();
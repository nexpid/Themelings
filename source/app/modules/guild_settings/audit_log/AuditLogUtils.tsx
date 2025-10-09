// app/modules/guild_settings/audit_log/AuditLogUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var10;
    var5 = function findChangeByKey(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg2;
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = var3.changes;
            var1 = null;
            var4 = var1 != var4;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
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
case 2:
            return var1;
        }
    };
    var _closure1_slot39 = var5;
    var1 = function findAllChangeByKey(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg2;
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = var3.changes;
            var1 = null;
            if(!(var1 == var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = new Array(0);
            _fun0002_ip = 6; continue _fun0002;
case 4:
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
case 6:
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function getPermissionChanges(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
            if(!(var7 === var8)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var1 = var6;
case 6:
            var4 = var2.bind(var4)(var1);
            var2 = _closure1_slot2;
            var1 = _closure1_slot3;
            var1 = var1[var11];
            var2 = var2.bind(var10)(var1);
            var1 = var2.deserialize;
            var6 = typeof var5;
            var3 = 0;
            if(!(var7 === var6)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var3 = var5;
case 8:
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
case 10:
            {
case 11:
                var14 = var1;
                var13 = _closure1_slot23;
                var14 = var13[var14];
                var15 = _closure1_slot2;
                var13 = _closure1_slot3;
                var13 = var13[var11];
                var15 = var15.bind(var10)(var13);
                var13 = var15.has;
                var13 = var13.bind(var15)(var9, var14);
                if(!var13) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var13 = var3.push;
                var13 = var13.bind(var3)(var14);
case 12:
                var15 = _closure1_slot2;
                var13 = _closure1_slot3;
                var13 = var13[var11];
                var15 = var15.bind(var10)(var13);
                var13 = var15.has;
                var13 = var13.bind(var15)(var8, var14);
                if(!var13) { _fun0003_ip = 10; continue _fun0003 }
case 14:
                var13 = var2.push;
                var13 = var13.bind(var2)(var14);
                _fun0003_ip = 10; continue _fun0003;
            }
case 15:
            var1 = {};
            var1['added'] = var3;
            var1['removed'] = var2;
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function convertForumTag(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 == var3;
            if(var2) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var2 = {};
            var4 = var3.id;
            var2['id'] = var4;
            var4 = var3.name;
            var2['name'] = var4;
            var6 = var3.emoji_id;
            var5 = 0;
            var4 = undefined;
            if(!(var5 !== var6)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var4 = var3.emoji_id;
case 18:
            var2['emojiId'] = var4;
            var4 = var3.emoji_name;
            var2['emojiName'] = var4;
            var3 = var3.moderated;
            var2['moderated'] = var3;
            var1 = var2;
case 16:
            return var1;
        }
    };
    var _closure1_slot42 = var1;
    var2 = function transformAvailableForumTagChange(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = var1.oldValue;
            var2 = var1.newValue;
            var5 = global;
            var7 = var5.Array;
            var6 = var7.isArray;
            var6 = var6.bind(var7)(var3);
            if(var6) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var3 = new Array(0);
case 20:
            var6 = var5.Array;
            var5 = var6.isArray;
            var5 = var5.bind(var6)(var2);
            if(var5) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var2 = new Array(0);
case 22:
            var5 = var3.length;
            var6 = 0;
            if(!(var6 === var5)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var5 = var2.length;
            if(!(var6 !== var5)) { _fun0005_ip = 26; continue _fun0005 }
case 24:
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
            if(!(var5 < var4)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var10 = var13;
            var8 = null;
            for(var6 in var10)
case 29:
            {
case 30:
                var4 = var6;
                var5 = var14[var4];
                if(var8 != var5) { _fun0005_ip = 29; continue _fun0005 }
case 31:
                var7 = _closure1_slot9;
                var6 = _closure1_slot16;
                var6 = var6.AVAILABLE_TAG_ADD;
                var9 = _closure1_slot42;
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
case 27:
            var3 = var3.length;
            var2 = var2.length;
            if(!(var3 > var2)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var8 = var14;
            var6 = null;
            for(var4 in var8)
case 34:
            {
case 35:
                var2 = var4;
                var3 = var13[var2];
                if(var6 != var3) { _fun0005_ip = 34; continue _fun0005 }
case 36:
                var5 = _closure1_slot9;
                var4 = _closure1_slot16;
                var4 = var4.AVAILABLE_TAG_DELETE;
                var7 = _closure1_slot42;
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
case 32:
            var11 = var14;
            var6 = null;
            var7 = undefined;
            for(var8 in var11)
case 37:
            {
case 38:
                var2 = var8;
                var4 = var14[var2];
                var3 = var13[var2];
                var2 = var6 == var3;
                var5 = undefined;
                if(var2) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var5 = var3.name;
case 39:
                var2 = var4.name;
                if(!(var5 === var2)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                var2 = var6 == var3;
                var5 = undefined;
                if(var2) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                var5 = var3.emoji_id;
case 43:
                var2 = var4.emoji_id;
                if(!(var5 === var2)) { _fun0005_ip = 41; continue _fun0005 }
case 45:
                var2 = var6 == var3;
                var5 = undefined;
                if(var2) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                var5 = var3.emoji_name;
case 46:
                var2 = var4.emoji_name;
                if(var5 === var2) { _fun0005_ip = 37; continue _fun0005 }
case 41:
                var6 = _closure1_slot9;
                var5 = _closure1_slot16;
                var5 = var5.AVAILABLE_TAG_EDIT;
                var2 = _closure1_slot42;
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
case 48:
            return var1;
case 26:
            return var1;
        }
    };
    var _closure1_slot43 = var2;
    var1 = function convertValue(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var8 = arg2;
            var7 = arg3;
            var5 = var2.newValue;
            var4 = var2.oldValue;
            var3 = var2.newValue;
            var1 = null;
            if(!(var1 != var3)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var3 = var2.newValue;
            var9 = undefined;
            var6 = var8.bind(var9)(var3);
            var10 = var1 != var7;
            if(!var10) { _fun0006_ip = 51; continue _fun0006 }
case 6:
            var10 = var1 != var6;
case 51:
            var3 = var6;
            if(!var10) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var3 = var7.bind(var9)(var6);
case 52:
            var5 = var3;
case 49:
            var3 = var2.oldValue;
            if(!(var1 != var3)) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var3 = var2.oldValue;
            var6 = undefined;
            var3 = var8.bind(var6)(var3);
            var8 = var1 != var7;
            if(!var8) { _fun0006_ip = 56; continue _fun0006 }
case 57:
            var8 = var1 != var3;
case 56:
            var1 = var3;
            if(!var8) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            var1 = var7.bind(var6)(var3);
case 58:
            var4 = var1;
case 54:
            var3 = _closure1_slot9;
            var1 = var2.key;
            if(var4) { _fun0006_ip = 60; continue _fun0006 }
case 61:
            var4 = var2.oldValue;
case 60:
            if(var5) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var5 = var2.newValue;
case 62:
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
    var _closure1_slot44 = var1;
    var1 = function getTargetValue(arg1, arg2, arg3, arg4, arg5) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg1;
            var7 = arg4;
            var1 = arg5;
            var2 = arg2;
            var _closure2_slot0 = var2;
            var3 = null;
            if(!(var3 == var1)) { _fun0007_ip = 4; continue _fun0007 }
case 5:
            var1 = var6.targetId;
case 4:
            var2 = arg3;
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var9 = var3 != var2;
            if(!var9) { _fun0007_ip = 2; continue _fun0007 }
case 64:
            var9 = var3 != var7;
case 2:
            var8 = null;
            if(!var9) { _fun0007_ip = 23; continue _fun0007 }
case 65:
            var8 = var7.bind(var4)(var2);
case 23:
            var4 = var8;
            if(!(var3 == var4)) { _fun0007_ip = 66; continue _fun0007 }
case 52:
            var2 = _closure1_slot14;
            var7 = var2.deletedTargets;
            var2 = var6.targetType;
            var2 = var7[var2];
            var7 = var3 != var2;
            if(!var7) { _fun0007_ip = 67; continue _fun0007 }
case 68:
            var9 = var2[var1];
            var7 = var3 != var9;
case 67:
            var4 = var8;
            if(!var7) { _fun0007_ip = 66; continue _fun0007 }
case 69:
            var4 = var2[var1];
case 66:
            var2 = var4;
            if(!(var3 == var2)) { _fun0007_ip = 70; continue _fun0007 }
case 71:
            var7 = var6.changes;
            var2 = var4;
            if(!(var3 != var7)) { _fun0007_ip = 70; continue _fun0007 }
case 72:
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
            if(!(var3 != var5)) { _fun0007_ip = 70; continue _fun0007 }
case 73:
            var4 = var5.newValue;
            if(var4) { _fun0007_ip = 74; continue _fun0007 }
case 75:
            var4 = var5.oldValue;
case 74:
            var2 = var4;
case 70:
            if(!(var3 != var2)) { _fun0007_ip = 76; continue _fun0007 }
case 77:
            var1 = var2;
case 76:
            return var1;
        }
    };
    var _closure1_slot45 = var1;
    var1 = function convertSubtarget(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var4 = arg3;
            var2 = arg2;
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var6 = null;
            var5 = var6 != var2;
            if(!var5) { _fun0008_ip = 78; continue _fun0008 }
case 79:
            var5 = var6 != var4;
case 78:
            if(!var5) { _fun0008_ip = 80; continue _fun0008 }
case 81:
            var1 = var4.bind(var3)(var2);
case 80:
            return var1;
        }
    };
    var _closure1_slot46 = var1;
    var1 = function getNullableOldValueString(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var1 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = arg1;
                var2 = var1.oldValue;
                var1 = null;
                if(!(var1 != var2)) { _fun0009_ip = 5; continue _fun0009 }
case 82:
                var1 = _closure2_slot1;
                _fun0009_ip = 83; continue _fun0009;
case 5:
                var1 = _closure2_slot0;
case 83:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot47 = var1;
    var1 = function getNullableNewValueString(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var1 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = arg1;
                var2 = var1.newValue;
                var1 = null;
                if(!(var1 != var2)) { _fun0010_ip = 5; continue _fun0010 }
case 82:
                var1 = _closure2_slot1;
                _fun0010_ip = 83; continue _fun0010;
case 5:
                var1 = _closure2_slot0;
case 83:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot48 = var1;
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
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = arg1;
                var3 = var1.newValue;
                var2 = null;
                if(!(var2 != var3)) { _fun0011_ip = 79; continue _fun0011 }
case 82:
                var3 = var1.oldValue;
                if(!(var2 == var3)) { _fun0011_ip = 84; continue _fun0011 }
case 79:
                var3 = var1.newValue;
                if(!(var2 == var3)) { _fun0011_ip = 53; continue _fun0011 }
case 85:
                var1 = var1.oldValue;
                if(!(var2 == var1)) { _fun0011_ip = 86; continue _fun0011 }
case 87:
                var1 = _closure2_slot3;
                _fun0011_ip = 23; continue _fun0011;
case 86:
                var1 = _closure2_slot2;
case 23:
                _fun0011_ip = 88; continue _fun0011;
case 53:
                var1 = _closure2_slot1;
case 88:
                _fun0011_ip = 89; continue _fun0011;
case 84:
                var1 = _closure2_slot0;
case 89:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot49 = var1;
    var1 = function getNewValueStringByBoolean(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var1 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = arg1;
                var1 = var1.newValue;
                if(var1) { _fun0012_ip = 90; continue _fun0012 }
case 82:
                var1 = _closure2_slot1;
                _fun0012_ip = 79; continue _fun0012;
case 90:
                var1 = _closure2_slot0;
case 79:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot50 = var1;
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
    var _closure1_slot51 = var1;
    var1 = function getNewValueStringByKeyOrDefault(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var1 = function(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = arg1;
                var1 = var1.newValue;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0013_ip = 4; continue _fun0013 }
case 91:
                var1 = _closure2_slot1;
case 4:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot52 = var1;
    var1 = global;
    var11 = var1.Object;
    var7 = var11.defineProperty;
    var6 = {};
    var13 = true;
    var6['value'] = var13;
    var1 = '__esModule';
    var1 = var7.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var10[var1];
    var1 = undefined;
    var6 = var8.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 1;
    var6 = var10[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var10[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var10[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var10[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var6 = var6.AuditLogChange;
    var _closure1_slot9 = var6;
    var6 = 6;
    var6 = var10[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot10 = var6;
    var6 = 7;
    var6 = var10[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot11 = var6;
    var6 = 8;
    var6 = var10[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot12 = var6;
    var6 = 9;
    var6 = var10[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot13 = var6;
    var6 = 10;
    var6 = var10[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot14 = var6;
    var6 = 11;
    var6 = var10[var6];
    var7 = var9.bind(var1)(var6);
    var6 = var7.AuditLogActions;
    var _closure1_slot15 = var6;
    var12 = var7.AuditLogChangeKeys;
    var _closure1_slot16 = var12;
    var6 = var7.AuditLogTargetTypes;
    var _closure1_slot17 = var6;
    var11 = var7.MFALevels;
    var _closure1_slot18 = var11;
    var11 = var7.VerificationLevels;
    var _closure1_slot19 = var11;
    var11 = var7.UserNotificationSettings;
    var _closure1_slot20 = var11;
    var11 = var7.GuildExplicitContentFilterTypes;
    var _closure1_slot21 = var11;
    var11 = var7.ChannelTypes;
    var _closure1_slot22 = var11;
    var11 = var7.Permissions;
    var _closure1_slot23 = var11;
    var11 = var7.NOOP_NULL;
    var _closure1_slot24 = var11;
    var11 = var7.VideoQualityMode;
    var _closure1_slot25 = var11;
    var11 = var7.ApplicationCommandPermissionTypes;
    var _closure1_slot26 = var11;
    var11 = var7.AuditLogSubtargetTypes;
    var _closure1_slot27 = var11;
    var7 = var7.SystemChannelFlags;
    var _closure1_slot28 = var7;
    var7 = 12;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.ChannelFlags;
    var _closure1_slot29 = var7;
    var7 = 13;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.AutomodTriggerType;
    var _closure1_slot30 = var7;
    var7 = 14;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var11 = var7.GuildScheduledEventEntityTypes;
    var _closure1_slot31 = var11;
    var11 = var7.GuildScheduledEventStatus;
    var _closure1_slot32 = var11;
    var7 = var7.GuildScheduledEventPrivacyLevel;
    var _closure1_slot33 = var7;
    var7 = 15;
    var7 = var10[var7];
    var11 = var8.bind(var1)(var7);
    var7 = var11.prototype;
    var8 = Object.create(var7, {constructor: {value: var11}});
    var18 = 'AuditLogUtils';
    var19 = var8;
    var7 = new var19[var11](var18, var17);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot34 = var7;
    var11 = 16;
    var7 = var10[var11];
    var7 = var9.bind(var1)(var7);
    var7 = var7.TimeUnits;
    var8 = var7.DAYS;
    var7 = new Array(4);
    var7[0] = var8;
    var8 = var10[var11];
    var8 = var9.bind(var1)(var8);
    var8 = var8.TimeUnits;
    var8 = var8.HOURS;
    var7[1] = var8;
    var8 = var10[var11];
    var8 = var9.bind(var1)(var8);
    var8 = var8.TimeUnits;
    var8 = var8.MINUTES;
    var7[2] = var8;
    var8 = var10[var11];
    var8 = var9.bind(var1)(var8);
    var8 = var8.TimeUnits;
    var8 = var8.SECONDS;
    var7[3] = var8;
    var _closure1_slot35 = var7;
    var7 = function CommonChangeStrings() {
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
            var1 = var1.2IW3Cw;
            return var1;
        };
        var1[var3] = var2;
        return var1;
    };
    var _closure1_slot36 = var7;
    var7 = {};
    var14 = var6.CHANNEL;
    var8 = {};
    var15 = var12.ID;
    var8[var15] = var13;
    var15 = var12.PERMISSION_OVERWRITES;
    var8[var15] = var13;
    var7[var14] = var8;
    var14 = var6.CHANNEL_OVERWRITE;
    var8 = {};
    var15 = var12.TYPE;
    var8[var15] = var13;
    var15 = var12.ID;
    var8[var15] = var13;
    var15 = var12.PERMISSION_OVERWRITES;
    var8[var15] = var13;
    var7[var14] = var8;
    var14 = var6.INVITE;
    var8 = {};
    var15 = var12.INVITER_ID;
    var8[var15] = var13;
    var15 = var12.USES;
    var8[var15] = var13;
    var7[var14] = var8;
    var14 = var6.WEBHOOK;
    var8 = {};
    var15 = var12.TYPE;
    var8[var15] = var13;
    var15 = var12.APPLICATION_ID;
    var8[var15] = var13;
    var7[var14] = var8;
    var14 = var6.INTEGRATION;
    var8 = {};
    var15 = var12.TYPE;
    var8[var15] = var13;
    var7[var14] = var8;
    var14 = var6.THREAD;
    var8 = {};
    var15 = var12.ID;
    var8[var15] = var13;
    var15 = var12.TYPE;
    var8[var15] = var13;
    var7[var14] = var8;
    var14 = var6.STICKER;
    var8 = {};
    var15 = var12.ID;
    var8[var15] = var13;
    var15 = var12.TYPE;
    var8[var15] = var13;
    var15 = var12.ASSET;
    var8[var15] = var13;
    var15 = var12.FORMAT_TYPE;
    var8[var15] = var13;
    var15 = var12.AVAILABLE;
    var8[var15] = var13;
    var15 = var12.GUILD_ID;
    var8[var15] = var13;
    var7[var14] = var8;
    var14 = var6.GUILD_HOME;
    var8 = {};
    var15 = var12.ENTITY_TYPE;
    var8[var15] = var13;
    var7[var14] = var8;
    var14 = var6.GUILD_ONBOARDING;
    var8 = {};
    var15 = var12.PROMPTS;
    var8[var15] = var13;
    var7[var14] = var8;
    var8 = var6.GUILD_SOUNDBOARD;
    var6 = {};
    var14 = var12.ID;
    var6[var14] = var13;
    var12 = var12.SOUND_ID;
    var6[var12] = var13;
    var7[var8] = var6;
    var6 = function ACTION_FILTER_ITEMS() {
        var2 = {};
        var4 = _closure1_slot15;
        var3 = var4.ALL;
        var2['value'] = var3;
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
        var1 = var1.QxEVcn;
        var1 = var5.bind(var9)(var1);
        var2['label'] = var1;
        var1 = var8[var3];
        var1 = var7.bind(var6)(var1);
        var9 = var1.intl;
        var5 = var9.string;
        var1 = var8[var3];
        var1 = var7.bind(var6)(var1);
        var1 = var1.t;
        var1 = var1.an9Ry8;
        var1 = var5.bind(var9)(var1);
        var2['valueLabel'] = var1;
        var1 = new Array(67);
        var1[0] = var2;
        var2 = {};
        var5 = var4.GUILD_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.5INZa2;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[1] = var2;
        var2 = {};
        var5 = var4.CHANNEL_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.2uh4vL;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[2] = var2;
        var2 = {};
        var5 = var4.CHANNEL_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.mGsBLS;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[3] = var2;
        var2 = {};
        var5 = var4.CHANNEL_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.hCHzAg;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[4] = var2;
        var2 = {};
        var5 = var4.CHANNEL_OVERWRITE_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.8TnAMD;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[5] = var2;
        var2 = {};
        var5 = var4.CHANNEL_OVERWRITE_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.Jqx0Bg;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[6] = var2;
        var2 = {};
        var5 = var4.CHANNEL_OVERWRITE_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.gBXOr6;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[7] = var2;
        var2 = {};
        var5 = var4.MEMBER_KICK;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.Q1/hNz;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[8] = var2;
        var2 = {};
        var5 = var4.MEMBER_PRUNE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.tOTTjY;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[9] = var2;
        var2 = {};
        var5 = var4.MEMBER_BAN_ADD;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.NfPn+f;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[10] = var2;
        var2 = {};
        var5 = var4.MEMBER_BAN_REMOVE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.XCsGfH;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[11] = var2;
        var2 = {};
        var5 = var4.MEMBER_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.F/jmND;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[12] = var2;
        var2 = {};
        var5 = var4.MEMBER_ROLE_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.zAveSE;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[13] = var2;
        var2 = {};
        var5 = var4.MEMBER_MOVE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.QshteX;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[14] = var2;
        var2 = {};
        var5 = var4.MEMBER_DISCONNECT;
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
        var5 = var4.BOT_ADD;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.vuH24e;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[16] = var2;
        var2 = {};
        var5 = var4.THREAD_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.+zl0DA;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[17] = var2;
        var2 = {};
        var5 = var4.THREAD_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.rbIry8;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[18] = var2;
        var2 = {};
        var5 = var4.THREAD_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.hFjNEB;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[19] = var2;
        var2 = {};
        var5 = var4.ROLE_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.AbxKtr;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[20] = var2;
        var2 = {};
        var5 = var4.ROLE_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.t3Z6sb;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[21] = var2;
        var2 = {};
        var5 = var4.ROLE_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.YsFpa2;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[22] = var2;
        var2 = {};
        var5 = var4.ONBOARDING_PROMPT_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.ZV9tqa;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[23] = var2;
        var2 = {};
        var5 = var4.ONBOARDING_PROMPT_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.PcOdvb;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[24] = var2;
        var2 = {};
        var5 = var4.ONBOARDING_PROMPT_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.+r33NT;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[25] = var2;
        var2 = {};
        var5 = var4.ONBOARDING_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.uDADdX;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[26] = var2;
        var2 = {};
        var5 = var4.ONBOARDING_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.J1H1ws;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[27] = var2;
        var2 = {};
        var5 = var4.HOME_SETTINGS_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.Di4cvL;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[28] = var2;
        var2 = {};
        var5 = var4.HOME_SETTINGS_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.tzyrJC;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[29] = var2;
        var2 = {};
        var5 = var4.INVITE_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.0BNJdX;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[30] = var2;
        var2 = {};
        var5 = var4.INVITE_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.o++obW;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[31] = var2;
        var2 = {};
        var5 = var4.INVITE_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.iP40Aw;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[32] = var2;
        var2 = {};
        var5 = var4.WEBHOOK_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.tBF4+f;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[33] = var2;
        var2 = {};
        var5 = var4.WEBHOOK_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.eV3McH;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[34] = var2;
        var2 = {};
        var5 = var4.WEBHOOK_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.AAL3Ky;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[35] = var2;
        var2 = {};
        var5 = var4.EMOJI_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.RuWm0d;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[36] = var2;
        var2 = {};
        var5 = var4.EMOJI_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.WzdUY2;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[37] = var2;
        var2 = {};
        var5 = var4.EMOJI_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.c3dK2N;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[38] = var2;
        var2 = {};
        var5 = var4.MESSAGE_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.daTfXl;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[39] = var2;
        var2 = {};
        var5 = var4.MESSAGE_BULK_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.nrBxen;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[40] = var2;
        var2 = {};
        var5 = var4.MESSAGE_PIN;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.MUldyM;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[41] = var2;
        var2 = {};
        var5 = var4.MESSAGE_UNPIN;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.n4zKhI;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[42] = var2;
        var2 = {};
        var5 = var4.INTEGRATION_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.deNm8/;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[43] = var2;
        var2 = {};
        var5 = var4.INTEGRATION_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.HT7Sfn;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[44] = var2;
        var2 = {};
        var5 = var4.INTEGRATION_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.+kJ09v;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[45] = var2;
        var2 = {};
        var5 = var4.STICKER_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.3DzNjY;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[46] = var2;
        var2 = {};
        var5 = var4.STICKER_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.tdhW5e;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[47] = var2;
        var2 = {};
        var5 = var4.STICKER_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.+ZhGOj;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[48] = var2;
        var2 = {};
        var5 = var4.STAGE_INSTANCE_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.sPbjAw;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[49] = var2;
        var2 = {};
        var5 = var4.STAGE_INSTANCE_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.cW9LfH;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[50] = var2;
        var2 = {};
        var5 = var4.STAGE_INSTANCE_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.U1r+yM;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[51] = var2;
        var2 = {};
        var5 = var4.GUILD_SCHEDULED_EVENT_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.H81Zy8;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[52] = var2;
        var2 = {};
        var5 = var4.GUILD_SCHEDULED_EVENT_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.FM69l5;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[53] = var2;
        var2 = {};
        var5 = var4.GUILD_SCHEDULED_EVENT_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.Rq28Bg;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[54] = var2;
        var2 = {};
        var5 = var4.APPLICATION_COMMAND_PERMISSION_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.iPdFOj;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[55] = var2;
        var2 = {};
        var5 = var4.AUTO_MODERATION_BLOCK_MESSAGE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.gNq5z8;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[56] = var2;
        var2 = {};
        var5 = var4.AUTO_MODERATION_RULE_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.f72Zqa;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[57] = var2;
        var2 = {};
        var5 = var4.AUTO_MODERATION_RULE_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.XeqIio;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[58] = var2;
        var2 = {};
        var5 = var4.AUTO_MODERATION_RULE_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.syAApa;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[59] = var2;
        var2 = {};
        var5 = var4.GUILD_HOME_FEATURE_ITEM;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.lhG5KC;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[60] = var2;
        var2 = {};
        var5 = var4.GUILD_HOME_REMOVE_ITEM;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.lRPRwc;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[61] = var2;
        var2 = {};
        var5 = var4.SOUNDBOARD_SOUND_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.yoRi5u;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[62] = var2;
        var2 = {};
        var5 = var4.SOUNDBOARD_SOUND_UPDATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.uKlG0d;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[63] = var2;
        var2 = {};
        var5 = var4.SOUNDBOARD_SOUND_DELETE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.gq0iCQ;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[64] = var2;
        var2 = {};
        var5 = var4.VOICE_CHANNEL_STATUS_CREATE;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.rGr0YG;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[65] = var2;
        var2 = {};
        var4 = var4.VOICE_CHANNEL_STATUS_DELETE;
        var2['value'] = var4;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var3 = var8[var3];
        var3 = var7.bind(var6)(var3);
        var3 = var3.t;
        var3 = var3.V9PEQ0;
        var3 = var4.bind(var5)(var3);
        var2['label'] = var3;
        var1[66] = var2;
        return var1;
    };
    var _closure1_slot37 = var6;
    var8 = {};
    var12 = var10[var11];
    var12 = var9.bind(var1)(var12);
    var12 = var12.TimeUnits;
    var13 = var12.SECONDS;
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
        var2 = var1.geSp4O;
        var1 = {};
        var5 = arg1;
        var1['seconds'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var8[var13] = var12;
    var12 = var10[var11];
    var12 = var9.bind(var1)(var12);
    var12 = var12.TimeUnits;
    var13 = var12.MINUTES;
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
        var2 = var1.iXLF9f;
        var1 = {};
        var5 = arg1;
        var1['minutes'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var8[var13] = var12;
    var12 = var10[var11];
    var12 = var9.bind(var1)(var12);
    var12 = var12.TimeUnits;
    var13 = var12.HOURS;
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
        var2 = var1.xCjYxM;
        var1 = {};
        var5 = arg1;
        var1['hours'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var8[var13] = var12;
    var11 = var10[var11];
    var11 = var9.bind(var1)(var11);
    var11 = var11.TimeUnits;
    var12 = var11.DAYS;
    var11 = function(arg1) {
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
        var2 = var1.k2UNz8;
        var1 = {};
        var5 = arg1;
        var1['days'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var8[var12] = var11;
    var _closure1_slot38 = var8;
    var8 = 31;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/guild_settings/audit_log/AuditLogUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function() {
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
            var1 = var1.CkDiND;
            return var1;
        };
        var1[var5] = var3;
        var3 = _closure1_slot16;
        var7 = var3.DESCRIPTION;
        var13 = _closure1_slot48;
        var9 = _closure1_slot0;
        var10 = _closure1_slot3;
        var5 = 17;
        var6 = var10[var5];
        var3 = undefined;
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var8 = var6.RP3Ey8;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.QAVj1d;
        var6 = var13.bind(var3)(var8, var6);
        var1[var7] = var6;
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
            var1 = var1.iLZ8Q0;
            return var1;
        };
        var1[var7] = var6;
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
            var1 = var1.4VV6dn;
            return var1;
        };
        var1[var7] = var6;
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
            var1 = var1.2pds6u;
            return var1;
        };
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var7 = var6.BANNER_HASH;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var8 = var6.Cxq4zM;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.H7eE//;
        var6 = var13.bind(var3)(var8, var6);
        var1[var7] = var6;
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
            var1 = var1.8ltsLS;
            return var1;
        };
        var1[var7] = var6;
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
            var1 = var1.X9r5KS;
            return var1;
        };
        var1[var7] = var6;
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
            var1 = var1.UnXuDQ;
            return var1;
        };
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var7 = var6.AFK_CHANNEL_ID;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var8 = var6.ClBuAw;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.ms+xtL;
        var6 = var13.bind(var3)(var8, var6);
        var1[var7] = var6;
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
            var1 = var1.q21fHR;
            return var1;
        };
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var7 = var6.SYSTEM_CHANNEL_ID;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var8 = var6.H1VXaW;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.XhtmxM;
        var6 = var13.bind(var3)(var8, var6);
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var7 = var6.RULES_CHANNEL_ID;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var8 = var6.OI6MGx;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.lik3tL;
        var6 = var13.bind(var3)(var8, var6);
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var7 = var6.PUBLIC_UPDATES_CHANNEL_ID;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var8 = var6.YxBKra;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.Ehsnio;
        var6 = var13.bind(var3)(var8, var6);
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var7 = var6.MFA_LEVEL;
        var11 = _closure1_slot51;
        var6 = {};
        var8 = _closure1_slot18;
        var14 = var8.NONE;
        var12 = var10[var5];
        var12 = var9.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.voaCCQ;
        var6[var14] = var12;
        var12 = var8.ELEVATED;
        var8 = var10[var5];
        var8 = var9.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.pRNVw8;
        var6[var12] = var8;
        var6 = var11.bind(var3)(var6);
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var7 = var6.WIDGET_ENABLED;
        var8 = _closure1_slot50;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var12 = var6.ADIty8;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.nf58VV;
        var6 = var8.bind(var3)(var12, var6);
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var7 = var6.WIDGET_CHANNEL_ID;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var12 = var6.6SBsDQ;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.deQ5wM;
        var6 = var13.bind(var3)(var12, var6);
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var7 = var6.VERIFICATION_LEVEL;
        var6 = {};
        var12 = _closure1_slot19;
        var15 = var12.NONE;
        var14 = var10[var5];
        var14 = var9.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.W27rsb;
        var6[var15] = var14;
        var15 = var12.LOW;
        var14 = var10[var5];
        var14 = var9.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.V8P+Pz;
        var6[var15] = var14;
        var15 = var12.MEDIUM;
        var14 = var10[var5];
        var14 = var9.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.ERQFam;
        var6[var15] = var14;
        var15 = var12.HIGH;
        var14 = var10[var5];
        var14 = var9.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.83fN0t;
        var6[var15] = var14;
        var14 = var12.VERY_HIGH;
        var12 = var10[var5];
        var12 = var9.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.PnkQJC;
        var6[var14] = var12;
        var6 = var11.bind(var3)(var6);
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var7 = var6.DEFAULT_MESSAGE_NOTIFICATIONS;
        var6 = {};
        var12 = _closure1_slot20;
        var15 = var12.ALL_MESSAGES;
        var14 = var10[var5];
        var14 = var9.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.LDi76O;
        var6[var15] = var14;
        var14 = var12.ONLY_MENTIONS;
        var12 = var10[var5];
        var12 = var9.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.6K83bW;
        var6[var14] = var12;
        var6 = var11.bind(var3)(var6);
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var7 = var6.VANITY_URL_CODE;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var12 = var6.Zplsoq;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.u6cArq;
        var6 = var13.bind(var3)(var12, var6);
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var7 = var6.EXPLICIT_CONTENT_FILTER;
        var6 = {};
        var12 = _closure1_slot21;
        var14 = var12.DISABLED;
        var13 = var10[var5];
        var13 = var9.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.fmOeLy;
        var6[var14] = var13;
        var14 = var12.MEMBERS_WITHOUT_ROLES;
        var13 = var10[var5];
        var13 = var9.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.4FghY2;
        var6[var14] = var13;
        var13 = var12.ALL_MEMBERS;
        var12 = var10[var5];
        var12 = var9.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.olyrSk;
        var6[var13] = var12;
        var6 = var11.bind(var3)(var6);
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var6 = var6.PREMIUM_PROGRESS_BAR_ENABLED;
        var7 = var10[var5];
        var7 = var9.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.rBT0sr;
        var5 = var10[var5];
        var5 = var9.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.gc+te3;
        var5 = var8.bind(var3)(var7, var5);
        var1[var6] = var5;
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
            var1 = var1.YbouFB;
            return var1;
        };
        var1[var6] = var5;
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
            var1 = var1.g3DMjI;
            return var1;
        };
        var1[var6] = var5;
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
            var1 = var1.+fQAen;
            return var1;
        };
        var1[var6] = var5;
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
            var1 = var1.E1fc4u;
            return var1;
        };
        var1[var6] = var5;
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
            var1 = var1.XbwtSE;
            return var1;
        };
        var1[var5] = var4;
        var2 = _closure1_slot36;
        var16 = var2.bind(var3)();
        var17 = var1;
        var2 = copyDataProperties(var17, var16);
        return var1;
    };
    var3['GuildChangeStrings'] = var8;
    var8 = function() {
        var1 = {};
        var2 = _closure1_slot16;
        var9 = var2.NAME;
        var11 = _closure1_slot47;
        var7 = _closure1_slot0;
        var8 = _closure1_slot3;
        var2 = 17;
        var5 = var8[var2];
        var6 = undefined;
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var10 = var5.f8Rh0d;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.ebD4Qk;
        var5 = var11.bind(var6)(var10, var5);
        var1[var9] = var5;
        var5 = _closure1_slot16;
        var9 = var5.POSITION;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var10 = var5.isS8tb;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.t5uBio;
        var5 = var11.bind(var6)(var10, var5);
        var1[var9] = var5;
        var5 = _closure1_slot16;
        var9 = var5.TOPIC;
        var13 = _closure1_slot49;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var12 = var5.esQcxs;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var10 = var5.m+veAg;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.ws/1FB;
        var5 = var13.bind(var6)(var12, var10, var5);
        var1[var9] = var5;
        var5 = _closure1_slot16;
        var9 = var5.BITRATE;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var10 = var5.fw81am;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.MFNlgY;
        var5 = var11.bind(var6)(var10, var5);
        var1[var9] = var5;
        var5 = _closure1_slot16;
        var9 = var5.RTC_REGION_OVERRIDE;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var12 = var5.6kajx8;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var10 = var5.eGOlmZ;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.0JMZd3;
        var5 = var13.bind(var6)(var12, var10, var5);
        var1[var9] = var5;
        var5 = _closure1_slot16;
        var9 = var5.USER_LIMIT;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var10 = var5.wk5t7u;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.XgjCEh;
        var5 = var11.bind(var6)(var10, var5);
        var1[var9] = var5;
        var5 = _closure1_slot16;
        var9 = var5.RATE_LIMIT_PER_USER;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var10 = var5.7lirhI;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.j4CCJS;
        var5 = var11.bind(var6)(var10, var5);
        var1[var9] = var5;
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
            var1 = var1.+vSBFR;
            return var1;
        };
        var1[var9] = var5;
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
            var1 = var1.EKLJv7;
            return var1;
        };
        var1[var9] = var5;
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
            var1 = var1.U3rO5e;
            return var1;
        };
        var1[var9] = var5;
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
            var1 = var1.2IW3Cw;
            return var1;
        };
        var1[var9] = var5;
        var5 = _closure1_slot16;
        var9 = var5.NSFW;
        var12 = _closure1_slot50;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var10 = var5.H8Ri2d;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.WW6cJy;
        var5 = var12.bind(var6)(var10, var5);
        var1[var9] = var5;
        var5 = _closure1_slot16;
        var9 = var5.TYPE;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var10 = var5.Vn5zn5;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.aq4uWF;
        var5 = var11.bind(var6)(var10, var5);
        var1[var9] = var5;
        var5 = _closure1_slot16;
        var9 = var5.VIDEO_QUALITY_MODE;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var10 = var5.e68fAQ;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.djbES0;
        var5 = var11.bind(var6)(var10, var5);
        var1[var9] = var5;
        var5 = _closure1_slot16;
        var9 = var5.DEFAULT_AUTO_ARCHIVE_DURATION;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var10 = var5.nYz2mp;
        var5 = var8[var2];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.oczvRE;
        var5 = var11.bind(var6)(var10, var5);
        var1[var9] = var5;
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
            var1 = var1.ImCQkp;
            return var1;
        };
        var1[var9] = var5;
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
        var1[var9] = var5;
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
            var1 = var1.YtUzlp;
            return var1;
        };
        var1[var9] = var5;
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
            var1 = var1.8QOsen;
            return var1;
        };
        var1[var5] = var3;
        var3 = _closure1_slot16;
        var3 = var3.LINKED_LOBBY;
        var5 = _closure1_slot48;
        var4 = var8[var2];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.+/3TkJ;
        var2 = var8[var2];
        var2 = var7.bind(var6)(var2);
        var2 = var2.t;
        var2 = var2.5kDYS0;
        var2 = var5.bind(var6)(var4, var2);
        var1[var3] = var2;
        return var1;
    };
    var3['ChannelChangeStrings'] = var8;
    var8 = function() {
        var1 = {};
        var3 = _closure1_slot16;
        var7 = var3.NICK;
        var13 = _closure1_slot49;
        var9 = _closure1_slot0;
        var10 = _closure1_slot3;
        var5 = 17;
        var6 = var10[var5];
        var3 = undefined;
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var11 = var6.qXDsHh;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var8 = var6.m+qur6;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.DvLvjI;
        var6 = var13.bind(var3)(var11, var8, var6);
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var7 = var6.DEAF;
        var8 = _closure1_slot50;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var11 = var6.mArLlZ;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.ddvVYG;
        var6 = var8.bind(var3)(var11, var6);
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var7 = var6.MUTE;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var11 = var6.bxs/lZ;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.FjecQE;
        var6 = var8.bind(var3)(var11, var6);
        var1[var7] = var6;
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
            var1 = var1.+2SDWV;
            return var1;
        };
        var1[var7] = var6;
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
            var1 = var1.B3/3IC;
            return var1;
        };
        var1[var7] = var6;
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
            var1 = var1.+Cvc+P;
            return var1;
        };
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var7 = var6.COMMUNICATION_DISABLED_UNTIL;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var12 = var6.LXTQr6;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var11 = var6.LXTQr6;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.ULSdnJ;
        var6 = var13.bind(var3)(var12, var11, var6);
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var6 = var6.BYPASSES_VERIFICATION;
        var7 = var10[var5];
        var7 = var9.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.NBPBur;
        var5 = var10[var5];
        var5 = var9.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.zATosr;
        var5 = var8.bind(var3)(var7, var5);
        var1[var6] = var5;
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
            var1 = var1.YbouFB;
            return var1;
        };
        var1[var5] = var4;
        var2 = _closure1_slot36;
        var15 = var2.bind(var3)();
        var16 = var1;
        var2 = copyDataProperties(var16, var15);
        return var1;
    };
    var3['UserChangeStrings'] = var8;
    var8 = function() {
        var1 = {};
        var3 = _closure1_slot16;
        var7 = var3.NAME;
        var11 = _closure1_slot47;
        var9 = _closure1_slot0;
        var10 = _closure1_slot3;
        var5 = 17;
        var6 = var10[var5];
        var3 = undefined;
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var8 = var6.QBmlaG;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.Lfs4r6;
        var6 = var11.bind(var3)(var8, var6);
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var7 = var6.DESCRIPTION;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var8 = var6.XeYKWF;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.PSfeIi;
        var6 = var11.bind(var3)(var8, var6);
        var1[var7] = var6;
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
            var1 = var1.9i/DvL;
            return var1;
        };
        var1[var7] = var6;
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
            var1 = var1.pa1ZVl;
            return var1;
        };
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var7 = var6.COLOR;
        var11 = _closure1_slot52;
        var8 = {};
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.TK6E1N;
        var8['#000000'] = var6;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.2FQFi4;
        var6 = var11.bind(var3)(var8, var6);
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var7 = var6.COLORS;
        var6 = function(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = arg1;
                var1 = var1.newValue;
                var2 = var1.secondary_color;
                var1 = null;
                if(!(var1 != var2)) { _fun0014_ip = 23; continue _fun0014 }
case 90:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.WnSwLy;
                _fun0014_ip = 92; continue _fun0014;
case 23:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 17;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.t;
                var1 = var2.U44ttr;
case 92:
                return var1;
            }
        };
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var7 = var6.HOIST;
        var8 = _closure1_slot50;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var11 = var6.gWfe29;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.+tb8kJ;
        var6 = var8.bind(var3)(var11, var6);
        var1[var7] = var6;
        var6 = _closure1_slot16;
        var6 = var6.MENTIONABLE;
        var7 = var10[var5];
        var7 = var9.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.LL8VFB;
        var5 = var10[var5];
        var5 = var9.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.Z7xzmJ;
        var5 = var8.bind(var3)(var7, var5);
        var1[var6] = var5;
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
        var1[var6] = var5;
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
            var1 = var1.KiLMMz;
            return var1;
        };
        var1[var5] = var4;
        var2 = _closure1_slot36;
        var12 = var2.bind(var3)();
        var13 = var1;
        var2 = copyDataProperties(var13, var12);
        return var1;
    };
    var3['RoleChangeStrings'] = var8;
    var8 = function() {
        var1 = {};
        var2 = _closure1_slot36;
        var6 = undefined;
        var11 = var2.bind(var6)();
        var12 = var1;
        var2 = copyDataProperties(var12, var11);
        var2 = _closure1_slot16;
        var5 = var2.TITLE;
        var10 = _closure1_slot47;
        var7 = _closure1_slot0;
        var8 = _closure1_slot3;
        var2 = 17;
        var4 = var8[var2];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var9 = var4.sNpuy8;
        var4 = var8[var2];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.3Ukc/v;
        var4 = var10.bind(var6)(var9, var4);
        var1[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.DESCRIPTION;
        var4 = var8[var2];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var9 = var4.PP1q09;
        var4 = var8[var2];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.z7pYLi;
        var4 = var10.bind(var6)(var9, var4);
        var1[var5] = var4;
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
            var1 = var1.3G5C9/;
            return var1;
        };
        var1[var5] = var4;
        var4 = _closure1_slot16;
        var9 = var4.SINGLE_SELECT;
        var5 = _closure1_slot50;
        var4 = var8[var2];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var10 = var4.v4WnR0;
        var4 = var8[var2];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.6Qg3uL;
        var4 = var5.bind(var6)(var10, var4);
        var1[var9] = var4;
        var3 = _closure1_slot16;
        var3 = var3.REQUIRED;
        var4 = var8[var2];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.0MPAMz;
        var2 = var8[var2];
        var2 = var7.bind(var6)(var2);
        var2 = var2.t;
        var2 = var2.pwsXio;
        var2 = var5.bind(var6)(var4, var2);
        var1[var3] = var2;
        return var1;
    };
    var3['OnboardingPromptChangeStrings'] = var8;
    var8 = function() {
        var1 = {};
        var2 = _closure1_slot36;
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
            var1 = var1.8M+D2t;
            return var1;
        };
        var1[var4] = var2;
        var2 = _closure1_slot16;
        var9 = var2.ENABLE_DEFAULT_CHANNELS;
        var5 = _closure1_slot50;
        var7 = _closure1_slot0;
        var8 = _closure1_slot3;
        var2 = 17;
        var4 = var8[var2];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var10 = var4.EYd/lp;
        var4 = var8[var2];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.36OZeX;
        var4 = var5.bind(var6)(var10, var4);
        var1[var9] = var4;
        var4 = _closure1_slot16;
        var9 = var4.ENABLE_ONBOARDING_PROMPTS;
        var4 = var8[var2];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var10 = var4.V3u8PT;
        var4 = var8[var2];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.r66lc3;
        var4 = var5.bind(var6)(var10, var4);
        var1[var9] = var4;
        var3 = _closure1_slot16;
        var3 = var3.ENABLED;
        var4 = var8[var2];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.SODVIi;
        var2 = var8[var2];
        var2 = var7.bind(var6)(var2);
        var2 = var2.t;
        var2 = var2.u8HY5e;
        var2 = var5.bind(var6)(var4, var2);
        var1[var3] = var2;
        return var1;
    };
    var3['OnboardingChangeStrings'] = var8;
    var8 = function() {
        var1 = {};
        var5 = _closure1_slot36;
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
            var1 = var1.dKQ1xc;
            return var1;
        };
        var1[var5] = var4;
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
            var1 = var1.jDUInp;
            return var1;
        };
        var1[var5] = var4;
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
            var1 = var1.SIX0mp;
            return var1;
        };
        var1[var3] = var2;
        return var1;
    };
    var3['HomeSettingsChangeStrings'] = var8;
    var8 = function() {
        var1 = {};
        var4 = _closure1_slot16;
        var5 = var4.CODE;
        var4 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.t;
            var1 = var1.rrRHgY;
            return var1;
        };
        var1[var5] = var4;
        var4 = _closure1_slot16;
        var4 = var4.CHANNEL_ID;
        var3 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.t;
            var1 = var1.Q1vd5u;
            return var1;
        };
        var1[var4] = var3;
        var3 = _closure1_slot16;
        var5 = var3.MAX_USES;
        var8 = _closure1_slot52;
        var6 = {};
        var9 = _closure1_slot0;
        var10 = _closure1_slot3;
        var7 = 17;
        var4 = var10[var7];
        var3 = undefined;
        var4 = var9.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.Yx8LNj;
        var6[0] = var4;
        var4 = var10[var7];
        var4 = var9.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.3ygnwc;
        var4 = var8.bind(var3)(var6, var4);
        var1[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.MAX_AGE;
        var6 = {};
        var4 = var10[var7];
        var4 = var9.bind(var3)(var4);
        var12 = var4.intl;
        var11 = var12.string;
        var4 = var10[var7];
        var4 = var9.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.PqEzn5;
        var11 = var11.bind(var12)(var4);
        var4 = var10[var7];
        var4 = var9.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.uWrLv7;
        var6[var11] = var4;
        var4 = var10[var7];
        var4 = var9.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.Q+5kcH;
        var4 = var8.bind(var3)(var6, var4);
        var1[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.TEMPORARY;
        var8 = _closure1_slot50;
        var4 = var10[var7];
        var4 = var9.bind(var3)(var4);
        var4 = var4.t;
        var6 = var4.MWp6Hx;
        var4 = var10[var7];
        var4 = var9.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.omiqTE;
        var4 = var8.bind(var3)(var6, var4);
        var1[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.FLAGS;
        var6 = _closure1_slot51;
        var4 = {};
        var8 = 18;
        var8 = var10[var8];
        var8 = var9.bind(var3)(var8);
        var8 = var8.GuildInviteFlags;
        var8 = var8.IS_GUEST_INVITE;
        var7 = var10[var7];
        var7 = var9.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.XYZMbG;
        var4[var8] = var7;
        var4 = var6.bind(var3)(var4);
        var1[var5] = var4;
        var2 = _closure1_slot36;
        var13 = var2.bind(var3)();
        var14 = var1;
        var2 = copyDataProperties(var14, var13);
        return var1;
    };
    var3['InviteChangeStrings'] = var8;
    var8 = function() {
        var1 = {};
        var4 = _closure1_slot16;
        var6 = var4.CHANNEL_ID;
        var8 = _closure1_slot47;
        var9 = _closure1_slot0;
        var10 = _closure1_slot3;
        var4 = 17;
        var5 = var10[var4];
        var7 = undefined;
        var5 = var9.bind(var7)(var5);
        var5 = var5.t;
        var11 = var5.jhPpra;
        var5 = var10[var4];
        var5 = var9.bind(var7)(var5);
        var5 = var5.t;
        var5 = var5.ar4qYG;
        var5 = var8.bind(var7)(var11, var5);
        var1[var6] = var5;
        var5 = _closure1_slot16;
        var5 = var5.NAME;
        var6 = var10[var4];
        var6 = var9.bind(var7)(var6);
        var6 = var6.t;
        var6 = var6.ZVGrzc;
        var4 = var10[var4];
        var4 = var9.bind(var7)(var4);
        var4 = var4.t;
        var4 = var4.tywdZW;
        var4 = var8.bind(var7)(var6, var4);
        var1[var5] = var4;
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
            var1 = var1.KB52Ul;
            return var1;
        };
        var1[var5] = var4;
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
            var1 = var1.2IW3Cw;
            return var1;
        };
        var1[var3] = var2;
        return var1;
    };
    var3['WebhookChangeStrings'] = var8;
    var8 = function() {
        var1 = {};
        var3 = _closure1_slot16;
        var5 = var3.NAME;
        var7 = _closure1_slot47;
        var8 = _closure1_slot0;
        var9 = _closure1_slot3;
        var4 = 17;
        var6 = var9[var4];
        var3 = undefined;
        var6 = var8.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.ahU1o6;
        var4 = var9[var4];
        var4 = var8.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.wxs+vb;
        var4 = var7.bind(var3)(var6, var4);
        var1[var5] = var4;
        var2 = _closure1_slot36;
        var10 = var2.bind(var3)();
        var11 = var1;
        var2 = copyDataProperties(var11, var10);
        return var1;
    };
    var3['EmojiChangeStrings'] = var8;
    var8 = function() {
        var1 = {};
        var3 = _closure1_slot16;
        var6 = var3.NAME;
        var7 = _closure1_slot47;
        var8 = _closure1_slot0;
        var9 = _closure1_slot3;
        var4 = 17;
        var5 = var9[var4];
        var3 = undefined;
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var10 = var5.cdl0Ym;
        var5 = var9[var4];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.o3W2l5;
        var5 = var7.bind(var3)(var10, var5);
        var1[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.TAGS;
        var5 = var9[var4];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var10 = var5.zwL+S0;
        var5 = var9[var4];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.VYfKAw;
        var5 = var7.bind(var3)(var10, var5);
        var1[var6] = var5;
        var5 = _closure1_slot16;
        var5 = var5.DESCRIPTION;
        var6 = var9[var4];
        var6 = var8.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.XeYKWF;
        var4 = var9[var4];
        var4 = var8.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.PSfeIi;
        var4 = var7.bind(var3)(var6, var4);
        var1[var5] = var4;
        var2 = _closure1_slot36;
        var11 = var2.bind(var3)();
        var12 = var1;
        var2 = copyDataProperties(var12, var11);
        return var1;
    };
    var3['StickerChangeStrings'] = var8;
    var8 = function() {
        var1 = {};
        var3 = _closure1_slot16;
        var5 = var3.ENABLE_EMOTICONS;
        var10 = _closure1_slot50;
        var8 = _closure1_slot0;
        var9 = _closure1_slot3;
        var7 = 17;
        var4 = var9[var7];
        var3 = undefined;
        var4 = var8.bind(var3)(var4);
        var4 = var4.t;
        var6 = var4.FI0m5+;
        var4 = var9[var7];
        var4 = var8.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.olpKCw;
        var4 = var10.bind(var3)(var6, var4);
        var1[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.EXPIRE_BEHAVIOR;
        var6 = _closure1_slot51;
        var4 = {};
        var10 = var9[var7];
        var10 = var8.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.1Bb1+v;
        var4[0] = var10;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.vjlW6u;
        var4[1] = var7;
        var4 = var6.bind(var3)(var4);
        var1[var5] = var4;
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
            var1 = var1.iovXMT;
            return var1;
        };
        var1[var5] = var4;
        var2 = _closure1_slot36;
        var11 = var2.bind(var3)();
        var12 = var1;
        var2 = copyDataProperties(var12, var11);
        return var1;
    };
    var3['IntegrationChangeStrings'] = var8;
    var8 = function() {
        var1 = {};
        var3 = _closure1_slot16;
        var5 = var3.TOPIC;
        var8 = _closure1_slot47;
        var9 = _closure1_slot0;
        var10 = _closure1_slot3;
        var7 = 17;
        var4 = var10[var7];
        var3 = undefined;
        var4 = var9.bind(var3)(var4);
        var4 = var4.t;
        var6 = var4.m+veAg;
        var4 = var10[var7];
        var4 = var9.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.esQcxs;
        var4 = var8.bind(var3)(var6, var4);
        var1[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.PRIVACY_LEVEL;
        var6 = _closure1_slot51;
        var4 = {};
        var8 = _closure1_slot33;
        var12 = var8.GUILD_ONLY;
        var11 = var10[var7];
        var11 = var9.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.EC+CDg;
        var4[var12] = var11;
        var8 = var8.PUBLIC;
        var7 = var10[var7];
        var7 = var9.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.pK/WGx;
        var4[var8] = var7;
        var4 = var6.bind(var3)(var4);
        var1[var5] = var4;
        var2 = _closure1_slot36;
        var13 = var2.bind(var3)();
        var14 = var1;
        var2 = copyDataProperties(var14, var13);
        return var1;
    };
    var3['StageInstanceChangeStrings'] = var8;
    var8 = function() {
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
            var1 = var1.21EXHR;
            return var1;
        };
        var1[var5] = var4;
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
            var1 = var1.Vm1of3;
            return var1;
        };
        var1[var4] = var3;
        var3 = _closure1_slot16;
        var6 = var3.PRIVACY_LEVEL;
        var7 = _closure1_slot51;
        var5 = {};
        var10 = _closure1_slot33;
        var12 = var10.GUILD_ONLY;
        var8 = _closure1_slot0;
        var9 = _closure1_slot3;
        var4 = 17;
        var11 = var9[var4];
        var3 = undefined;
        var11 = var8.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.EC+CDg;
        var5[var12] = var11;
        var11 = var10.PUBLIC;
        var10 = var9[var4];
        var10 = var8.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.pK/WGx;
        var5[var11] = var10;
        var5 = var7.bind(var3)(var5);
        var1[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.STATUS;
        var5 = {};
        var10 = _closure1_slot32;
        var12 = var10.SCHEDULED;
        var11 = var9[var4];
        var11 = var8.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.hXKDgo;
        var5[var12] = var11;
        var12 = var10.ACTIVE;
        var11 = var9[var4];
        var11 = var8.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.lRX1n5;
        var5[var12] = var11;
        var12 = var10.COMPLETED;
        var11 = var9[var4];
        var11 = var8.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11./eFIho;
        var5[var12] = var11;
        var11 = var10.CANCELED;
        var10 = var9[var4];
        var10 = var8.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.NWIYho;
        var5[var11] = var10;
        var5 = var7.bind(var3)(var5);
        var1[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.ENTITY_TYPE;
        var5 = {};
        var10 = _closure1_slot31;
        var12 = var10.NONE;
        var11 = var9[var4];
        var11 = var8.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.6sO3Sk;
        var5[var12] = var11;
        var12 = var10.STAGE_INSTANCE;
        var11 = var9[var4];
        var11 = var8.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.Wo+s19;
        var5[var12] = var11;
        var12 = var10.VOICE;
        var11 = var9[var4];
        var11 = var8.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.XCVaIC;
        var5[var12] = var11;
        var11 = var10.EXTERNAL;
        var10 = var9[var4];
        var10 = var8.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.IvhAj4;
        var5[var11] = var10;
        var5 = var7.bind(var3)(var5);
        var1[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.CHANNEL_ID;
        var7 = _closure1_slot48;
        var5 = var9[var4];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var10 = var5.yJBIcX;
        var5 = var9[var4];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.+PqSsr;
        var5 = var7.bind(var3)(var10, var5);
        var1[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.LOCATION;
        var5 = var9[var4];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var10 = var5.GaMBHx;
        var5 = var9[var4];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.PsICk5;
        var5 = var7.bind(var3)(var10, var5);
        var1[var6] = var5;
        var5 = _closure1_slot16;
        var5 = var5.IMAGE_HASH;
        var6 = var9[var4];
        var6 = var8.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.S3vcRE;
        var4 = var9[var4];
        var4 = var8.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.KQu47O;
        var4 = var7.bind(var3)(var6, var4);
        var1[var5] = var4;
        var2 = _closure1_slot36;
        var13 = var2.bind(var3)();
        var14 = var1;
        var2 = copyDataProperties(var14, var13);
        return var1;
    };
    var3['GuildScheduledEventChangeStrings'] = var8;
    var8 = function() {
        var1 = {};
        var3 = _closure1_slot16;
        var6 = var3.SCHEDULED_START_TIME;
        var7 = _closure1_slot48;
        var8 = _closure1_slot0;
        var9 = _closure1_slot3;
        var4 = 17;
        var5 = var9[var4];
        var3 = undefined;
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var10 = var5.zMIYVl;
        var5 = var9[var4];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.fzF8GR;
        var5 = var7.bind(var3)(var10, var5);
        var1[var6] = var5;
        var5 = _closure1_slot16;
        var5 = var5.SCHEDULED_END_TIME;
        var6 = var9[var4];
        var6 = var8.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.vONSQE;
        var4 = var9[var4];
        var4 = var8.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.IlIti4;
        var4 = var7.bind(var3)(var6, var4);
        var1[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.IS_CANCELED;
        var4 = function(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = arg1;
                var3 = var1.oldValue;
                var2 = null;
                if(!(var2 == var3)) { _fun0015_ip = 3; continue _fun0015 }
case 82:
                var3 = var1.newValue;
                var2 = true;
                if(!(var2 === var3)) { _fun0015_ip = 63; continue _fun0015 }
case 3:
                var2 = var1.oldValue;
                if(var2) { _fun0015_ip = 93; continue _fun0015 }
case 94:
                var2 = var1.newValue;
                if(!var2) { _fun0015_ip = 93; continue _fun0015 }
case 87:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 17;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.t;
                var2 = var2.7RkicX;
                return var2;
case 93:
                var2 = var1.oldValue;
                if(!var2) { _fun0015_ip = 63; continue _fun0015 }
case 95:
                var1 = var1.newValue;
                if(var1) { _fun0015_ip = 63; continue _fun0015 }
case 96:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.dRNTWV;
                return var1;
case 63:
                var1 = undefined;
                return var1;
            }
        };
        var1[var5] = var4;
        var2 = _closure1_slot36;
        var11 = var2.bind(var3)();
        var12 = var1;
        var2 = copyDataProperties(var12, var11);
        return var1;
    };
    var3['GuildScheduledEventExceptionChangeStrings'] = var8;
    var8 = function() {
        var1 = {};
        var3 = _closure1_slot16;
        var6 = var3.NAME;
        var7 = _closure1_slot47;
        var8 = _closure1_slot0;
        var9 = _closure1_slot3;
        var4 = 17;
        var5 = var9[var4];
        var3 = undefined;
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var10 = var5.tUKRzc;
        var5 = var9[var4];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.kPCHOD;
        var5 = var7.bind(var3)(var10, var5);
        var1[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.ARCHIVED;
        var11 = _closure1_slot50;
        var5 = var9[var4];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var10 = var5.jDi9FB;
        var5 = var9[var4];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.F6dvbW;
        var5 = var11.bind(var3)(var10, var5);
        var1[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.LOCKED;
        var5 = var9[var4];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var10 = var5.JSy1QU;
        var5 = var9[var4];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.C7Jgo6;
        var5 = var11.bind(var3)(var10, var5);
        var1[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.INVITABLE;
        var5 = var9[var4];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var10 = var5.dxNUs7;
        var5 = var9[var4];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.biJvYG;
        var5 = var11.bind(var3)(var10, var5);
        var1[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.AUTO_ARCHIVE_DURATION;
        var5 = var9[var4];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var10 = var5.LuaG39;
        var5 = var9[var4];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.18d9qq;
        var5 = var7.bind(var3)(var10, var5);
        var1[var6] = var5;
        var5 = _closure1_slot16;
        var5 = var5.RATE_LIMIT_PER_USER;
        var6 = var9[var4];
        var6 = var8.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.7lirhI;
        var4 = var9[var4];
        var4 = var8.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.j4CCJS;
        var4 = var7.bind(var3)(var6, var4);
        var1[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.FLAGS;
        var4 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.t;
            var1 = var1.sSAQtr;
            return var1;
        };
        var1[var5] = var4;
        var2 = _closure1_slot36;
        var12 = var2.bind(var3)();
        var13 = var1;
        var2 = copyDataProperties(var13, var12);
        return var1;
    };
    var3['ThreadChangeStrings'] = var8;
    var8 = function(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var4 = arg1;
            var1 = {};
            var5 = _closure1_slot36;
            var3 = undefined;
            var6 = var5.bind(var3)();
            var7 = var1;
            var3 = copyDataProperties(var7, var6);
            var _closure2_slot0 = var1;
            var3 = null;
            if(!(var3 != var4)) { _fun0016_ip = 86; continue _fun0016 }
case 80:
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = arg1;
                    var4 = var2.newValue;
                    if(var4) { _fun0017_ip = 97; continue _fun0017 }
case 98:
                    var6 = _closure2_slot0;
                    var5 = var2.key;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var1 = var1.t;
                        var1 = var1.vynxnZ;
                        return var1;
                    };
                    var6[var5] = var4;
                    _fun0017_ip = 99; continue _fun0017;
case 97:
                    var4 = var2.newValue;
                    var4 = var4.permission;
                    var3 = _closure2_slot0;
                    var2 = var2.key;
                    if(var4) { _fun0017_ip = 25; continue _fun0017 }
case 53:
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var1 = var1.t;
                        var1 = var1.HUrFDg;
                        return var1;
                    };
                    var3[var2] = var4;
                    _fun0017_ip = 99; continue _fun0017;
case 25:
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var1 = var1.t;
                        var1 = var1.JH+89P;
                        return var1;
                    };
                    var3[var2] = var1;
case 99:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
case 86:
            return var1;
        }
    };
    var3['CommandPermissionChangeStrings'] = var8;
    var8 = function() {
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
            var1 = var1.XwxAJS;
            return var1;
        };
        var1[var5] = var4;
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
            var1 = var1.fx0pys;
            return var1;
        };
        var1[var5] = var4;
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
            var1 = var1.46Y+Ly;
            return var1;
        };
        var1[var5] = var4;
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
            var1 = var1.8efxfn;
            return var1;
        };
        var1[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.AUTO_MODERATION_ENABLED;
        var4 = function(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var1 = arg1;
                var2 = var1.newValue;
                var3 = null;
                if(!(var3 == var2)) { _fun0018_ip = 90; continue _fun0018 }
case 82:
                var2 = var1.oldValue;
case 90:
                var1 = true;
                if(!(var1 !== var2)) { _fun0018_ip = 100; continue _fun0018 }
case 3:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.Wrg9Ji;
                _fun0018_ip = 56; continue _fun0018;
case 100:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 17;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.t;
                var1 = var2.fCmxCw;
case 56:
                return var1;
            }
        };
        var1[var5] = var4;
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
            var1 = var1.TRb7Nz;
            return var1;
        };
        var1[var5] = var4;
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
            var1 = var1.mzitLC;
            return var1;
        };
        var1[var5] = var4;
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
            var1 = var1.h/lM6+;
            return var1;
        };
        var1[var5] = var4;
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
            var1 = var1.9V2yaG;
            return var1;
        };
        var1[var5] = var4;
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
            var1 = var1.4Qe9n5;
            return var1;
        };
        var1[var5] = var4;
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
            var1 = var1.GyZtxs;
            return var1;
        };
        var1[var5] = var4;
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
            var1 = var1.OQDadX;
            return var1;
        };
        var1[var5] = var4;
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
            var1 = var1.FvvR+P;
            return var1;
        };
        var1[var5] = var4;
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
            var1 = var1.p5nSv7;
            return var1;
        };
        var1[var4] = var3;
        var3 = _closure1_slot36;
        var2 = undefined;
        var6 = var3.bind(var2)();
        var7 = var1;
        var2 = copyDataProperties(var7, var6);
        return var1;
    };
    var3['AutoModerationRuleChangeStrings'] = var8;
    var8 = function() {
        var1 = {};
        var3 = _closure1_slot16;
        var6 = var3.NAME;
        var8 = _closure1_slot47;
        var9 = _closure1_slot0;
        var10 = _closure1_slot3;
        var4 = 17;
        var5 = var10[var4];
        var3 = undefined;
        var5 = var9.bind(var3)(var5);
        var5 = var5.t;
        var7 = var5.VOtRSE;
        var5 = var10[var4];
        var5 = var9.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.OK7B8P;
        var5 = var8.bind(var3)(var7, var5);
        var1[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.VOLUME;
        var5 = var10[var4];
        var5 = var9.bind(var3)(var5);
        var5 = var5.t;
        var7 = var5.igrDBw;
        var5 = var10[var4];
        var5 = var9.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.L5lDFB;
        var5 = var8.bind(var3)(var7, var5);
        var1[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.EMOJI_NAME;
        var8 = _closure1_slot49;
        var5 = var10[var4];
        var5 = var9.bind(var3)(var5);
        var5 = var5.t;
        var11 = var5.IIanaW;
        var5 = var10[var4];
        var5 = var9.bind(var3)(var5);
        var5 = var5.t;
        var7 = var5.z4w4U1;
        var5 = var10[var4];
        var5 = var9.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.V8Tfyc;
        var5 = var8.bind(var3)(var11, var7, var5);
        var1[var6] = var5;
        var5 = _closure1_slot16;
        var5 = var5.EMOJI_ID;
        var6 = var10[var4];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var7 = var6.ainxMD;
        var6 = var10[var4];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.2NPsYm;
        var4 = var10[var4];
        var4 = var9.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.8crtnp;
        var4 = var8.bind(var3)(var7, var6, var4);
        var1[var5] = var4;
        var2 = _closure1_slot36;
        var13 = var2.bind(var3)();
        var14 = var1;
        var2 = copyDataProperties(var14, var13);
        return var1;
    };
    var3['GuildSoundboardChangeStrings'] = var8;
    var8 = function() {
        var1 = {};
        var4 = _closure1_slot16;
        var5 = var4.VERIFICATION_ENABLED;
        var4 = function(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var1 = arg1;
                var2 = var1.newValue;
                var1 = true;
                if(!(var1 !== var2)) { _fun0019_ip = 101; continue _fun0019 }
case 82:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.WYT6kZ;
                _fun0019_ip = 8; continue _fun0019;
case 101:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 17;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.t;
                var1 = var2.fnkzDQ;
case 8:
                return var1;
            }
        };
        var1[var5] = var4;
        var4 = _closure1_slot16;
        var4 = var4.MANUAL_APPROVAL_ENABLED;
        var3 = function(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var1 = arg1;
                var2 = var1.newValue;
                var1 = true;
                if(!(var1 !== var2)) { _fun0020_ip = 101; continue _fun0020 }
case 82:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.WxyOtr;
                _fun0020_ip = 8; continue _fun0020;
case 101:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 17;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.t;
                var1 = var2.jzSvVV;
case 8:
                return var1;
            }
        };
        var1[var4] = var3;
        var3 = _closure1_slot36;
        var2 = undefined;
        var6 = var3.bind(var2)();
        var7 = var1;
        var2 = copyDataProperties(var7, var6);
        return var1;
    };
    var3['MemberVerificationChangeStrings'] = var8;
    var8 = function() {
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
            var1 = var1.HyCSnJ;
            return var1;
        };
        var1[var4] = var3;
        var3 = _closure1_slot36;
        var2 = undefined;
        var5 = var3.bind(var2)();
        var6 = var1;
        var2 = copyDataProperties(var6, var5);
        return var1;
    };
    var3['VoiceChannelStatusStrings'] = var8;
    var8 = function() {
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
            var1 = var1.nsUZKS;
            return var1;
        };
        var1[var5] = var4;
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
            var1 = var1.qe9mgI;
            return var1;
        };
        var1[var5] = var4;
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
            var1 = var1.04b5KC;
            return var1;
        };
        var1[var5] = var4;
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
            var1 = var1.dEy9WF;
            return var1;
        };
        var1[var5] = var4;
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
            var1 = var1.8BOT39;
            return var1;
        };
        var1[var5] = var4;
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
            var1 = var1.bCl1Eh;
            return var1;
        };
        var1[var4] = var3;
        var3 = _closure1_slot16;
        var3 = var3.SERVER_TAG;
        var6 = _closure1_slot48;
        var7 = _closure1_slot0;
        var8 = _closure1_slot3;
        var2 = 17;
        var4 = var8[var2];
        var5 = undefined;
        var4 = var7.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.ix1dnZ;
        var2 = var8[var2];
        var2 = var7.bind(var5)(var2);
        var2 = var2.t;
        var2 = var2.4LKpKS;
        var2 = var6.bind(var5)(var4, var2);
        var1[var3] = var2;
        return var1;
    };
    var3['GuildProfileChangeStrings'] = var8;
    var3['NotRenderedChanges'] = var7;
    var3['ACTION_FILTER_ITEMS'] = var6;
    var3['findChangeByKey'] = var5;
    var5 = function getSimpleAuditLogTitleFromChange(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var3 = _closure1_slot37;
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
            var3 = _closure1_slot39;
            var1 = _closure1_slot16;
            var1 = var1.COMMUNICATION_DISABLED_UNTIL;
            var3 = var3.bind(var6)(var1, var5);
            var1 = null;
            if(!(var1 == var3)) { _fun0021_ip = 95; continue _fun0021 }
case 102:
            var5 = var1 == var4;
            var3 = undefined;
            if(var5) { _fun0021_ip = 103; continue _fun0021 }
case 104:
            var3 = var4.label;
case 103:
            var4 = var1 != var3;
            var1 = null;
            if(!var4) { _fun0021_ip = 105; continue _fun0021 }
case 106:
            var1 = var3;
case 105:
            _fun0021_ip = 107; continue _fun0021;
case 95:
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
            var2 = var2.z3wbj4;
            var1 = var3.bind(var4)(var2);
case 107:
            return var1;
        }
    };
    var3['getSimpleAuditLogTitleFromChange'] = var5;
    var5 = function getSimpleAuditLogTitleContextFromChange(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot39;
            var1 = _closure1_slot16;
            var1 = var1.COMMUNICATION_DISABLED_UNTIL;
            var11 = undefined;
            var5 = var2.bind(var11)(var1, var4);
            var7 = _closure1_slot40;
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
            if(!(var1 == var5)) { _fun0022_ip = 36; continue _fun0022 }
case 8:
            if(!var2) { _fun0022_ip = 108; continue _fun0022 }
case 109:
            if(var6) { _fun0022_ip = 110; continue _fun0022 }
case 108:
            if(var2) { _fun0022_ip = 73; continue _fun0022 }
case 56:
            var2 = null;
            if(!var6) { _fun0022_ip = 111; continue _fun0022 }
case 112:
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
            var6 = var6.8mQ6x8;
            var2 = var7.bind(var8)(var6);
case 111:
            _fun0022_ip = 113; continue _fun0022;
case 73:
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
            var6 = var6.4GQqs7;
            var2 = var7.bind(var8)(var6);
case 113:
            _fun0022_ip = 114; continue _fun0022;
case 110:
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
            var6 = var6.RdMMe3;
            var2 = var7.bind(var8)(var6);
case 114:
            return var2;
case 36:
            var6 = var1 == var5;
            var2 = undefined;
            if(var6) { _fun0022_ip = 115; continue _fun0022 }
case 116:
            var2 = var5.newValue;
case 115:
            if(!(var1 == var2)) { _fun0022_ip = 117; continue _fun0022 }
case 118:
            var6 = var1 == var5;
            var2 = undefined;
            if(var6) { _fun0022_ip = 119; continue _fun0022 }
case 120:
            var2 = var5.oldValue;
case 119:
            if(!(var1 != var2)) { _fun0022_ip = 121; continue _fun0022 }
case 122:
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
case 117:
            var6 = global;
            var7 = var6.Date;
            var8 = var1 == var5;
            var2 = undefined;
            if(var8) { _fun0022_ip = 42; continue _fun0022 }
case 123:
            var2 = var5.newValue;
case 42:
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
            var2 = _closure1_slot35;
            var4 = var4.bind(var7)(var9, var2);
            var2 = var4.unit;
            if(!(var1 != var2)) { _fun0022_ip = 124; continue _fun0022 }
case 125:
            var2 = var4.time;
            if(!(var1 != var2)) { _fun0022_ip = 124; continue _fun0022 }
case 126:
            var7 = var4.unit;
            var2 = _closure1_slot38;
            var2 = var7 in var2;
            if(var2) { _fun0022_ip = 127; continue _fun0022 }
case 121:
            return var1;
case 127:
            var2 = var4.unit;
            var9 = var4.unit;
            var10 = _closure1_slot0;
            var7 = _closure1_slot3;
            var7 = var7[var12];
            var7 = var10.bind(var11)(var7);
            var7 = var7.TimeUnits;
            var7 = var7.SECONDS;
            if(!(var9 !== var7)) { _fun0022_ip = 128; continue _fun0022 }
case 129:
            var4 = var4.time;
            _fun0022_ip = 130; continue _fun0022;
case 128:
            var7 = var6.Math;
            var6 = var7.round;
            var5 = var8 / var5;
            var4 = var6.bind(var7)(var5);
case 130:
            var3 = _closure1_slot38;
            var2 = var3[var2];
            var2 = var2.bind(var3)(var4);
            return var2;
case 124:
            return var1;
        }
    };
    var3['getSimpleAuditLogTitleContextFromChange'] = var5;
    var5 = function getSimpleAuditLogChangeDetails(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot40;
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
            if(var6) { _fun0023_ip = 9; continue _fun0023 }
case 51:
            var9 = var5.map;
            var6 = function(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.newValue;
                    var1 = null;
                    var2 = var1 == var4;
                    var1 = undefined;
                    if(var2) { _fun0024_ip = 101; continue _fun0024 }
case 131:
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
case 101:
                    return var1;
                }
            };
            var10 = var9.bind(var5)(var6);
            var9 = var10.join;
            var6 = ', ';
            var7 = var9.bind(var10)(var6);
case 9:
            var9 = var1 == var3;
            var6 = undefined;
            if(var9) { _fun0023_ip = 132; continue _fun0023 }
case 92:
            var9 = var3.map;
            var4 = function(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.newValue;
                    var1 = null;
                    var2 = var1 == var4;
                    var1 = undefined;
                    if(var2) { _fun0025_ip = 101; continue _fun0025 }
case 131:
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
case 101:
                    return var1;
                }
            };
            var10 = var9.bind(var3)(var4);
            var9 = var10.join;
            var4 = ', ';
            var6 = var9.bind(var10)(var4);
case 132:
            var9 = var5.length;
            var4 = 0;
            if(!(var9 > var4)) { _fun0023_ip = 133; continue _fun0023 }
case 63:
            var9 = var3.length;
            if(!(!(var9 > var4))) { _fun0023_ip = 134; continue _fun0023 }
case 133:
            var5 = var5.length;
            if(!(!(var5 > var4))) { _fun0023_ip = 135; continue _fun0023 }
case 136:
            var3 = var3.length;
            var3 = var3 > var4;
            var1 = null;
            if(!var3) { _fun0023_ip = 137; continue _fun0023 }
case 75:
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
            var4 = var3.Wk4pAA;
            var3 = {};
            var3['roleNames'] = var6;
            var1 = var5.bind(var9)(var4, var3);
case 137:
            _fun0023_ip = 138; continue _fun0023;
case 135:
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
            var4 = var3./mTqt7;
            var3 = {};
            var3['roleNames'] = var7;
            var1 = var5.bind(var9)(var4, var3);
case 138:
            _fun0023_ip = 139; continue _fun0023;
case 134:
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
            var3 = var2.tZw1ER;
            var2 = {};
            var2['roleNamesAdded'] = var7;
            var2['roleNamesRemoved'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 139:
            return var1;
        }
    };
    var3['getSimpleAuditLogChangeDetails'] = var5;
    var5 = function getChangeTitle(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var5 = arg1;
            var3 = var5.action;
            var2 = _closure1_slot15;
            var2 = var2.GUILD_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 140; continue _fun0026 }
case 4:
            var2 = _closure1_slot15;
            var2 = var2.CHANNEL_CREATE;
            if(!(var2 !== var3)) { _fun0026_ip = 141; continue _fun0026 }
case 64:
            var2 = _closure1_slot15;
            var2 = var2.CHANNEL_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 142; continue _fun0026 }
case 143:
            var2 = _closure1_slot15;
            var2 = var2.CHANNEL_DELETE;
            if(!(var2 !== var3)) { _fun0026_ip = 144; continue _fun0026 }
case 55:
            var2 = _closure1_slot15;
            var2 = var2.CHANNEL_OVERWRITE_CREATE;
            if(!(var2 !== var3)) { _fun0026_ip = 145; continue _fun0026 }
case 146:
            var2 = _closure1_slot15;
            var2 = var2.CHANNEL_OVERWRITE_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 147; continue _fun0026 }
case 148:
            var2 = _closure1_slot15;
            var2 = var2.CHANNEL_OVERWRITE_DELETE;
            if(!(var2 !== var3)) { _fun0026_ip = 149; continue _fun0026 }
case 132:
            var2 = _closure1_slot15;
            var2 = var2.MEMBER_KICK;
            if(!(var2 !== var3)) { _fun0026_ip = 150; continue _fun0026 }
case 62:
            var2 = _closure1_slot15;
            var2 = var2.MEMBER_PRUNE;
            if(!(var2 !== var3)) { _fun0026_ip = 151; continue _fun0026 }
case 152:
            var2 = _closure1_slot15;
            var2 = var2.MEMBER_BAN_ADD;
            if(!(var2 !== var3)) { _fun0026_ip = 153; continue _fun0026 }
case 154:
            var2 = _closure1_slot15;
            var2 = var2.MEMBER_BAN_REMOVE;
            if(!(var2 !== var3)) { _fun0026_ip = 155; continue _fun0026 }
case 156:
            var2 = _closure1_slot15;
            var2 = var2.MEMBER_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 157; continue _fun0026 }
case 158:
            var2 = _closure1_slot15;
            var2 = var2.MEMBER_ROLE_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 159; continue _fun0026 }
case 160:
            var2 = _closure1_slot15;
            var2 = var2.MEMBER_MOVE;
            if(!(var2 !== var3)) { _fun0026_ip = 161; continue _fun0026 }
case 162:
            var2 = _closure1_slot15;
            var2 = var2.MEMBER_DISCONNECT;
            if(!(var2 !== var3)) { _fun0026_ip = 163; continue _fun0026 }
case 164:
            var2 = _closure1_slot15;
            var2 = var2.BOT_ADD;
            if(!(var2 !== var3)) { _fun0026_ip = 165; continue _fun0026 }
case 114:
            var2 = _closure1_slot15;
            var2 = var2.ROLE_CREATE;
            if(!(var2 !== var3)) { _fun0026_ip = 166; continue _fun0026 }
case 115:
            var2 = _closure1_slot15;
            var2 = var2.ROLE_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 167; continue _fun0026 }
case 168:
            var2 = _closure1_slot15;
            var2 = var2.ROLE_DELETE;
            if(!(var2 !== var3)) { _fun0026_ip = 169; continue _fun0026 }
case 170:
            var2 = _closure1_slot15;
            var2 = var2.INVITE_CREATE;
            if(!(var2 !== var3)) { _fun0026_ip = 171; continue _fun0026 }
case 172:
            var2 = _closure1_slot15;
            var2 = var2.INVITE_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 173; continue _fun0026 }
case 174:
            var2 = _closure1_slot15;
            var2 = var2.INVITE_DELETE;
            if(!(var2 !== var3)) { _fun0026_ip = 175; continue _fun0026 }
case 117:
            var2 = _closure1_slot15;
            var2 = var2.WEBHOOK_CREATE;
            if(!(var2 !== var3)) { _fun0026_ip = 176; continue _fun0026 }
case 123:
            var2 = _closure1_slot15;
            var2 = var2.WEBHOOK_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 177; continue _fun0026 }
case 178:
            var2 = _closure1_slot15;
            var2 = var2.WEBHOOK_DELETE;
            if(!(var2 !== var3)) { _fun0026_ip = 179; continue _fun0026 }
case 180:
            var2 = _closure1_slot15;
            var2 = var2.EMOJI_CREATE;
            if(!(var2 !== var3)) { _fun0026_ip = 181; continue _fun0026 }
case 182:
            var2 = _closure1_slot15;
            var2 = var2.EMOJI_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 183; continue _fun0026 }
case 184:
            var2 = _closure1_slot15;
            var2 = var2.EMOJI_DELETE;
            if(!(var2 !== var3)) { _fun0026_ip = 185; continue _fun0026 }
case 186:
            var2 = _closure1_slot15;
            var2 = var2.STICKER_CREATE;
            if(!(var2 !== var3)) { _fun0026_ip = 187; continue _fun0026 }
case 188:
            var2 = _closure1_slot15;
            var2 = var2.STICKER_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 189; continue _fun0026 }
case 190:
            var2 = _closure1_slot15;
            var2 = var2.STICKER_DELETE;
            if(!(var2 !== var3)) { _fun0026_ip = 191; continue _fun0026 }
case 192:
            var2 = _closure1_slot15;
            var2 = var2.MESSAGE_DELETE;
            if(!(var2 !== var3)) { _fun0026_ip = 193; continue _fun0026 }
case 194:
            var2 = _closure1_slot15;
            var2 = var2.MESSAGE_BULK_DELETE;
            if(!(var2 !== var3)) { _fun0026_ip = 195; continue _fun0026 }
case 196:
            var2 = _closure1_slot15;
            var2 = var2.MESSAGE_PIN;
            if(!(var2 !== var3)) { _fun0026_ip = 197; continue _fun0026 }
case 198:
            var2 = _closure1_slot15;
            var2 = var2.MESSAGE_UNPIN;
            if(!(var2 !== var3)) { _fun0026_ip = 199; continue _fun0026 }
case 200:
            var2 = _closure1_slot15;
            var2 = var2.INTEGRATION_CREATE;
            if(!(var2 !== var3)) { _fun0026_ip = 201; continue _fun0026 }
case 202:
            var2 = _closure1_slot15;
            var2 = var2.INTEGRATION_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 203; continue _fun0026 }
case 204:
            var2 = _closure1_slot15;
            var2 = var2.INTEGRATION_DELETE;
            if(!(var2 !== var3)) { _fun0026_ip = 205; continue _fun0026 }
case 206:
            var2 = _closure1_slot15;
            var2 = var2.STAGE_INSTANCE_CREATE;
            if(!(var2 !== var3)) { _fun0026_ip = 207; continue _fun0026 }
case 208:
            var2 = _closure1_slot15;
            var2 = var2.STAGE_INSTANCE_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 209; continue _fun0026 }
case 210:
            var2 = _closure1_slot15;
            var2 = var2.STAGE_INSTANCE_DELETE;
            if(!(var2 !== var3)) { _fun0026_ip = 211; continue _fun0026 }
case 212:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_SCHEDULED_EVENT_CREATE;
            if(!(var2 !== var3)) { _fun0026_ip = 213; continue _fun0026 }
case 214:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_SCHEDULED_EVENT_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 215; continue _fun0026 }
case 216:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_SCHEDULED_EVENT_DELETE;
            if(!(var2 !== var3)) { _fun0026_ip = 217; continue _fun0026 }
case 218:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE;
            if(!(var2 !== var3)) { _fun0026_ip = 219; continue _fun0026 }
case 220:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 219; continue _fun0026 }
case 221:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE;
            if(!(var2 !== var3)) { _fun0026_ip = 222; continue _fun0026 }
case 223:
            var2 = _closure1_slot15;
            var2 = var2.THREAD_CREATE;
            if(!(var2 !== var3)) { _fun0026_ip = 224; continue _fun0026 }
case 225:
            var2 = _closure1_slot15;
            var2 = var2.THREAD_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 226; continue _fun0026 }
case 227:
            var2 = _closure1_slot15;
            var2 = var2.THREAD_DELETE;
            if(!(var2 !== var3)) { _fun0026_ip = 228; continue _fun0026 }
case 229:
            var2 = _closure1_slot15;
            var2 = var2.APPLICATION_COMMAND_PERMISSION_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 230; continue _fun0026 }
case 231:
            var2 = _closure1_slot15;
            var2 = var2.AUTO_MODERATION_BLOCK_MESSAGE;
            if(!(var2 !== var3)) { _fun0026_ip = 232; continue _fun0026 }
case 233:
            var2 = _closure1_slot15;
            var2 = var2.AUTO_MODERATION_FLAG_TO_CHANNEL;
            if(!(var2 !== var3)) { _fun0026_ip = 234; continue _fun0026 }
case 235:
            var2 = _closure1_slot15;
            var2 = var2.AUTO_MODERATION_USER_COMMUNICATION_DISABLED;
            if(!(var2 !== var3)) { _fun0026_ip = 236; continue _fun0026 }
case 237:
            var2 = _closure1_slot15;
            var2 = var2.AUTO_MODERATION_QUARANTINE_USER;
            if(!(var2 !== var3)) { _fun0026_ip = 238; continue _fun0026 }
case 239:
            var2 = _closure1_slot15;
            var2 = var2.CREATOR_MONETIZATION_REQUEST_CREATED;
            if(!(var2 !== var3)) { _fun0026_ip = 240; continue _fun0026 }
case 241:
            var2 = _closure1_slot15;
            var2 = var2.CREATOR_MONETIZATION_TERMS_ACCEPTED;
            if(!(var2 !== var3)) { _fun0026_ip = 242; continue _fun0026 }
case 243:
            var2 = _closure1_slot15;
            var2 = var2.AUTO_MODERATION_RULE_CREATE;
            if(!(var2 !== var3)) { _fun0026_ip = 244; continue _fun0026 }
case 245:
            var2 = _closure1_slot15;
            var2 = var2.AUTO_MODERATION_RULE_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 246; continue _fun0026 }
case 247:
            var2 = _closure1_slot15;
            var2 = var2.AUTO_MODERATION_RULE_DELETE;
            if(!(var2 !== var3)) { _fun0026_ip = 248; continue _fun0026 }
case 249:
            var2 = _closure1_slot15;
            var2 = var2.ONBOARDING_PROMPT_CREATE;
            if(!(var2 !== var3)) { _fun0026_ip = 250; continue _fun0026 }
case 251:
            var2 = _closure1_slot15;
            var2 = var2.ONBOARDING_PROMPT_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 252; continue _fun0026 }
case 253:
            var2 = _closure1_slot15;
            var2 = var2.ONBOARDING_PROMPT_DELETE;
            if(!(var2 !== var3)) { _fun0026_ip = 254; continue _fun0026 }
case 255:
            var2 = _closure1_slot15;
            var2 = var2.ONBOARDING_CREATE;
            if(!(var2 !== var3)) { _fun0026_ip = 256; continue _fun0026 }
case 257:
            var2 = _closure1_slot15;
            var2 = var2.ONBOARDING_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 258; continue _fun0026 }
case 259:
            var2 = _closure1_slot15;
            var2 = var2.HOME_SETTINGS_CREATE;
            if(!(var2 !== var3)) { _fun0026_ip = 260; continue _fun0026 }
case 261:
            var2 = _closure1_slot15;
            var2 = var2.HOME_SETTINGS_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 262; continue _fun0026 }
case 263:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_HOME_FEATURE_ITEM;
            if(!(var2 !== var3)) { _fun0026_ip = 264; continue _fun0026 }
case 265:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_HOME_REMOVE_ITEM;
            if(!(var2 !== var3)) { _fun0026_ip = 266; continue _fun0026 }
case 267:
            var2 = _closure1_slot15;
            var2 = var2.SOUNDBOARD_SOUND_CREATE;
            if(!(var2 !== var3)) { _fun0026_ip = 268; continue _fun0026 }
case 269:
            var2 = _closure1_slot15;
            var2 = var2.SOUNDBOARD_SOUND_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 270; continue _fun0026 }
case 271:
            var2 = _closure1_slot15;
            var2 = var2.SOUNDBOARD_SOUND_DELETE;
            if(!(var2 !== var3)) { _fun0026_ip = 272; continue _fun0026 }
case 273:
            var2 = _closure1_slot15;
            var2 = var2.VOICE_CHANNEL_STATUS_CREATE;
            if(!(var2 !== var3)) { _fun0026_ip = 274; continue _fun0026 }
case 275:
            var2 = _closure1_slot15;
            var2 = var2.VOICE_CHANNEL_STATUS_DELETE;
            if(!(var2 !== var3)) { _fun0026_ip = 276; continue _fun0026 }
case 277:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_MEMBER_VERIFICATION_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 278; continue _fun0026 }
case 279:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_PROFILE_UPDATE;
            if(!(var2 !== var3)) { _fun0026_ip = 280; continue _fun0026 }
case 281:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_MIGRATE_PIN_PERMISSION;
            if(!(var2 !== var3)) { _fun0026_ip = 282; continue _fun0026 }
case 283:
            var2 = null;
            return var2;
case 282:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.3Ne7MD;
            return var2;
case 280:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.Ed6hFx;
            return var2;
case 278:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.NUKUb2;
            return var2;
case 276:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.aS8Krq;
            return var2;
case 274:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.MWjnU1;
            return var2;
case 272:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.kVz4//;
            return var2;
case 270:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.CM8n19;
            return var2;
case 268:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.0PD83d;
            return var2;
case 266:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.kPReur;
            return var2;
case 264:
            var2 = var5.changes;
            var3 = null;
            var6 = var3 != var2;
            var2 = null;
            if(!var6) { _fun0026_ip = 284; continue _fun0026 }
case 285:
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
case 284:
            if(!(var3 != var2)) { _fun0026_ip = 286; continue _fun0026 }
case 287:
            var3 = var2.newValue;
            var7 = _closure1_slot0;
            var2 = _closure1_slot3;
            var8 = 20;
            var2 = var2[var8];
            var6 = undefined;
            var2 = var7.bind(var6)(var2);
            var2 = var2.GuildFeedItemTypes;
            var2 = var2.MESSAGE;
            if(!(var2 !== var3)) { _fun0026_ip = 288; continue _fun0026 }
case 289:
            var7 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var8];
            var2 = var7.bind(var6)(var2);
            var2 = var2.GuildFeedItemTypes;
            var2 = var2.FORUM_POST;
            if(!(var2 !== var3)) { _fun0026_ip = 290; continue _fun0026 }
case 291:
            var3 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 17;
            var2 = var7[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.UZ+U3N;
            return var2;
case 290:
            var3 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 17;
            var2 = var7[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.hCuAb2;
            return var2;
case 288:
            var3 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 17;
            var2 = var7[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.PyEa+P;
            return var2;
case 286:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.UZ+U3N;
            return var2;
case 262:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.XHE8qq;
            return var2;
case 260:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.dSdCjI;
            return var2;
case 258:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.yONu/v;
            return var2;
case 256:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.wDaq39;
            return var2;
case 254:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.IuBTam;
            return var2;
case 252:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.ArIrWF;
            return var2;
case 250:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2./8A1g4;
            return var2;
case 248:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.umua3t;
            return var2;
case 246:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.3wEA9v;
            return var2;
case 244:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.NKljj4;
            return var2;
case 242:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.ryGLk5;
            return var2;
case 240:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.ONvWys;
            return var2;
case 238:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2./W5u5u;
            return var2;
case 236:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.Vk4Twc;
            return var2;
case 234:
            var2 = var5.options;
            var3 = null;
            var6 = var3 == var2;
            var7 = undefined;
            var3 = undefined;
            if(var6) { _fun0026_ip = 292; continue _fun0026 }
case 293:
            var3 = var2.auto_moderation_rule_trigger_type;
case 292:
            var2 = _closure1_slot30;
            var6 = var2.USER_PROFILE;
            var2 = var6.toString;
            var2 = var2.bind(var6)();
            if(!(var3 !== var2)) { _fun0026_ip = 294; continue _fun0026 }
case 295:
            var3 = _closure1_slot0;
            var6 = _closure1_slot3;
            var2 = 17;
            var2 = var6[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.SD0PwM;
            _fun0026_ip = 296; continue _fun0026;
case 294:
            var6 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 17;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var2 = var3.YQsjen;
case 296:
            return var2;
case 232:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.NqWv2N;
            return var2;
case 230:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.uzCqBg;
            return var2;
case 228:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.s3Khn5;
            return var2;
case 226:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.PSsy4u;
            return var2;
case 224:
            var2 = var5.changes;
            var3 = null;
            var6 = var3 != var2;
            var2 = null;
            if(!var6) { _fun0026_ip = 297; continue _fun0026 }
case 298:
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
case 297:
            if(!(var3 != var2)) { _fun0026_ip = 299; continue _fun0026 }
case 300:
            var3 = var2.newValue;
            var2 = _closure1_slot22;
            var2 = var2.PRIVATE_THREAD;
            if(!(var2 !== var3)) { _fun0026_ip = 301; continue _fun0026 }
case 302:
            var2 = _closure1_slot22;
            var2 = var2.ANNOUNCEMENT_THREAD;
            if(!(var2 !== var3)) { _fun0026_ip = 303; continue _fun0026 }
case 304:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.2cxQ7O;
            return var2;
case 303:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.6uaMmJ;
            return var2;
case 301:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.Br0y5+;
            return var2;
case 299:
            var2 = global;
            var6 = var2.Error;
            var2 = var6.prototype;
            var3 = Object.create(var2, {constructor: {value: var6}});
            var9 = '[AuditLog] Could not find type change for thread create';
            var10 = var3;
            var2 = new var10[var6](var9, var8);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 222:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.zYb2dX;
            return var2;
case 219:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.8qCI39;
            return var2;
case 217:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2./ARPKS;
            return var2;
case 215:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.ebTK19;
            return var2;
case 213:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.S7k52t;
            return var2;
case 211:
            var3 = var5.userId;
            var2 = null;
            if(!(var2 == var3)) { _fun0026_ip = 305; continue _fun0026 }
case 306:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.7ZIFm5;
            _fun0026_ip = 307; continue _fun0026;
case 305:
            var7 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 17;
            var6 = var6[var3];
            var3 = undefined;
            var3 = var7.bind(var3)(var6);
            var3 = var3.t;
            var2 = var3.Oi/in5;
case 307:
            return var2;
case 209:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.0hQYU1;
            return var2;
case 207:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.n7x/DA;
            return var2;
case 205:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.8zScWV;
            return var2;
case 203:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.ibCCOT;
            return var2;
case 201:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.HYvCb2;
            return var2;
case 199:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.NCxXUV;
            return var2;
case 197:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.Yna7Ex;
            return var2;
case 195:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.3RIvLC;
            return var2;
case 193:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.HPkD+P;
            return var2;
case 191:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.rGEP9f;
            return var2;
case 189:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.bhujGR;
            return var2;
case 187:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.DRZifn;
            return var2;
case 185:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.JnUaVF;
            return var2;
case 183:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.IsCKfn;
            return var2;
case 181:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.7vekRE;
            return var2;
case 179:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.in0VjY;
            return var2;
case 177:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.6GTlWF;
            return var2;
case 176:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.MhYhio;
            return var2;
case 175:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.3n/iWl;
            return var2;
case 173:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.ja3kGR;
            return var2;
case 171:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.YHOXW1;
            return var2;
case 169:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.4s63tb;
            return var2;
case 167:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.NRbN19;
            return var2;
case 166:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.UTLTx8;
            return var2;
case 165:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.fWvX0N;
            return var2;
case 163:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.K4eCZ2;
            return var2;
case 161:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.Yt6NkZ;
            return var2;
case 159:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.VngfiY;
            return var2;
case 157:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.pznhLC;
            return var2;
case 155:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.o3Y6HB;
            return var2;
case 153:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.XklUm5;
            return var2;
case 151:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.qKOZTE;
            return var2;
case 150:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.B5hDZW;
            return var2;
case 149:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.HASt//;
            return var2;
case 147:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.uhtbNT;
            return var2;
case 145:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.l5Cu1d;
            return var2;
case 144:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.ynfvkp;
            return var2;
case 142:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.nTYk6O;
            return var2;
case 141:
            var2 = var5.changes;
            var3 = null;
            var6 = var3 != var2;
            var2 = null;
            if(!var6) { _fun0026_ip = 308; continue _fun0026 }
case 309:
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
case 308:
            if(!(var3 != var2)) { _fun0026_ip = 310; continue _fun0026 }
case 311:
            var3 = var2.newValue;
            var2 = _closure1_slot22;
            var2 = var2.GUILD_STAGE_VOICE;
            if(!(var2 !== var3)) { _fun0026_ip = 312; continue _fun0026 }
case 313:
            var2 = _closure1_slot22;
            var2 = var2.GUILD_VOICE;
            if(!(var2 !== var3)) { _fun0026_ip = 314; continue _fun0026 }
case 315:
            var2 = _closure1_slot22;
            var2 = var2.GUILD_CATEGORY;
            if(!(var2 !== var3)) { _fun0026_ip = 316; continue _fun0026 }
case 317:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.wrYNGx;
            return var2;
case 316:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.T3KIj4;
            return var2;
case 314:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.NPOy4O;
            return var2;
case 312:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.t;
            var2 = var2.OKp4+v;
            return var2;
case 310:
            var2 = global;
            var4 = var2.Error;
            var2 = var4.prototype;
            var3 = Object.create(var2, {constructor: {value: var4}});
            var9 = '[AuditLog] Could not find type change for channel create';
            var10 = var3;
            var2 = new var10[var4](var9, var8);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 140:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.t;
            var1 = var1.LjZO39;
            return var1;
        }
    };
    var3['getChangeTitle'] = var5;
    var5 = function getStringForAddedChannelFlag(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot29;
            var2 = var2.GUILD_FEED_REMOVED;
            if(!(var2 !== var3)) { _fun0027_ip = 11; continue _fun0027 }
case 318:
            var2 = _closure1_slot29;
            var2 = var2.ACTIVE_CHANNELS_REMOVED;
            if(!(var2 !== var3)) { _fun0027_ip = 58; continue _fun0027 }
case 80:
            var2 = _closure1_slot29;
            var2 = var2.PINNED;
            if(!(var2 !== var3)) { _fun0027_ip = 101; continue _fun0027 }
case 2:
            var2 = null;
            return var2;
case 101:
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
            var2 = var2.1QLRYW;
            var2 = var3.bind(var4)(var2);
            return var2;
case 58:
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
            var2 = var2.4YLtzM;
            var2 = var3.bind(var4)(var2);
            return var2;
case 11:
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
            var1 = var1.5G8ZDw;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getStringForAddedChannelFlag'] = var5;
    var5 = function getStringForRemovedChannelFlag(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot29;
            var2 = var2.GUILD_FEED_REMOVED;
            if(!(var2 !== var3)) { _fun0028_ip = 11; continue _fun0028 }
case 318:
            var2 = _closure1_slot29;
            var2 = var2.ACTIVE_CHANNELS_REMOVED;
            if(!(var2 !== var3)) { _fun0028_ip = 58; continue _fun0028 }
case 80:
            var2 = _closure1_slot29;
            var2 = var2.PINNED;
            if(!(var2 !== var3)) { _fun0028_ip = 101; continue _fun0028 }
case 2:
            var2 = null;
            return var2;
case 101:
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
            var2 = var2.CMweGB;
            var2 = var3.bind(var4)(var2);
            return var2;
case 58:
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
            var2 = var2.8qpgc3;
            var2 = var3.bind(var4)(var2);
            return var2;
case 11:
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
            var1 = var1.S5kuWV;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getStringForRemovedChannelFlag'] = var5;
    var5 = function getStringForPermission(arg1, arg2) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var3 = _closure1_slot23;
            var3 = var3.CREATE_INSTANT_INVITE;
            if(!(var3 !== var4)) { _fun0029_ip = 319; continue _fun0029 }
case 91:
            var3 = _closure1_slot23;
            var3 = var3.KICK_MEMBERS;
            if(!(var3 !== var4)) { _fun0029_ip = 320; continue _fun0029 }
case 321:
            var3 = _closure1_slot23;
            var3 = var3.BAN_MEMBERS;
            if(!(var3 !== var4)) { _fun0029_ip = 179; continue _fun0029 }
case 322:
            var3 = _closure1_slot23;
            var3 = var3.ADMINISTRATOR;
            if(!(var3 !== var4)) { _fun0029_ip = 323; continue _fun0029 }
case 324:
            var3 = _closure1_slot23;
            var3 = var3.MANAGE_CHANNELS;
            if(!(var3 !== var4)) { _fun0029_ip = 325; continue _fun0029 }
case 95:
            var3 = _closure1_slot23;
            var3 = var3.MANAGE_GUILD;
            if(!(var3 !== var4)) { _fun0029_ip = 326; continue _fun0029 }
case 59:
            var3 = _closure1_slot23;
            var3 = var3.VIEW_GUILD_ANALYTICS;
            if(!(var3 !== var4)) { _fun0029_ip = 327; continue _fun0029 }
case 328:
            var3 = _closure1_slot23;
            var3 = var3.VIEW_CREATOR_MONETIZATION_ANALYTICS;
            if(!(var3 !== var4)) { _fun0029_ip = 329; continue _fun0029 }
case 330:
            var3 = _closure1_slot23;
            var3 = var3.CHANGE_NICKNAME;
            if(!(var3 !== var4)) { _fun0029_ip = 331; continue _fun0029 }
case 332:
            var3 = _closure1_slot23;
            var3 = var3.MANAGE_NICKNAMES;
            if(!(var3 !== var4)) { _fun0029_ip = 333; continue _fun0029 }
case 334:
            var3 = _closure1_slot23;
            var3 = var3.MANAGE_ROLES;
            if(!(var3 !== var4)) { _fun0029_ip = 335; continue _fun0029 }
case 336:
            var3 = _closure1_slot23;
            var3 = var3.MANAGE_WEBHOOKS;
            if(!(var3 !== var4)) { _fun0029_ip = 337; continue _fun0029 }
case 338:
            var3 = _closure1_slot23;
            var3 = var3.CREATE_GUILD_EXPRESSIONS;
            if(!(var3 !== var4)) { _fun0029_ip = 339; continue _fun0029 }
case 340:
            var3 = _closure1_slot23;
            var3 = var3.MANAGE_GUILD_EXPRESSIONS;
            if(!(var3 !== var4)) { _fun0029_ip = 341; continue _fun0029 }
case 342:
            var3 = _closure1_slot23;
            var3 = var3.VIEW_AUDIT_LOG;
            if(!(var3 !== var4)) { _fun0029_ip = 343; continue _fun0029 }
case 344:
            var3 = _closure1_slot23;
            var3 = var3.VIEW_CHANNEL;
            if(!(var3 !== var4)) { _fun0029_ip = 345; continue _fun0029 }
case 346:
            var3 = _closure1_slot23;
            var3 = var3.SEND_MESSAGES;
            if(!(var3 !== var4)) { _fun0029_ip = 347; continue _fun0029 }
case 348:
            var3 = _closure1_slot23;
            var3 = var3.SEND_TTS_MESSAGES;
            if(!(var3 !== var4)) { _fun0029_ip = 349; continue _fun0029 }
case 120:
            var3 = _closure1_slot23;
            var3 = var3.USE_APPLICATION_COMMANDS;
            if(!(var3 !== var4)) { _fun0029_ip = 350; continue _fun0029 }
case 351:
            var3 = _closure1_slot23;
            var3 = var3.MANAGE_MESSAGES;
            if(!(var3 !== var4)) { _fun0029_ip = 352; continue _fun0029 }
case 353:
            var3 = _closure1_slot23;
            var3 = var3.EMBED_LINKS;
            if(!(var3 !== var4)) { _fun0029_ip = 354; continue _fun0029 }
case 355:
            var3 = _closure1_slot23;
            var3 = var3.ATTACH_FILES;
            if(!(var3 !== var4)) { _fun0029_ip = 356; continue _fun0029 }
case 357:
            var3 = _closure1_slot23;
            var3 = var3.READ_MESSAGE_HISTORY;
            if(!(var3 !== var4)) { _fun0029_ip = 358; continue _fun0029 }
case 359:
            var3 = _closure1_slot23;
            var3 = var3.MENTION_EVERYONE;
            if(!(var3 !== var4)) { _fun0029_ip = 360; continue _fun0029 }
case 361:
            var3 = _closure1_slot23;
            var3 = var3.USE_EXTERNAL_EMOJIS;
            if(!(var3 !== var4)) { _fun0029_ip = 362; continue _fun0029 }
case 363:
            var3 = _closure1_slot23;
            var3 = var3.USE_EXTERNAL_STICKERS;
            if(!(var3 !== var4)) { _fun0029_ip = 364; continue _fun0029 }
case 365:
            var3 = _closure1_slot23;
            var3 = var3.ADD_REACTIONS;
            if(!(var3 !== var4)) { _fun0029_ip = 366; continue _fun0029 }
case 367:
            var3 = _closure1_slot23;
            var3 = var3.CONNECT;
            if(!(var3 !== var4)) { _fun0029_ip = 368; continue _fun0029 }
case 369:
            var3 = _closure1_slot23;
            var3 = var3.SPEAK;
            if(!(var3 !== var4)) { _fun0029_ip = 370; continue _fun0029 }
case 371:
            var3 = _closure1_slot23;
            var3 = var3.MUTE_MEMBERS;
            if(!(var3 !== var4)) { _fun0029_ip = 372; continue _fun0029 }
case 373:
            var3 = _closure1_slot23;
            var3 = var3.DEAFEN_MEMBERS;
            if(!(var3 !== var4)) { _fun0029_ip = 374; continue _fun0029 }
case 375:
            var3 = _closure1_slot23;
            var3 = var3.MOVE_MEMBERS;
            if(!(var3 !== var4)) { _fun0029_ip = 288; continue _fun0029 }
case 376:
            var3 = _closure1_slot23;
            var3 = var3.USE_VAD;
            if(!(var3 !== var4)) { _fun0029_ip = 377; continue _fun0029 }
case 378:
            var3 = _closure1_slot23;
            var3 = var3.PRIORITY_SPEAKER;
            if(!(var3 !== var4)) { _fun0029_ip = 379; continue _fun0029 }
case 127:
            var3 = _closure1_slot23;
            var3 = var3.STREAM;
            if(!(var3 !== var4)) { _fun0029_ip = 380; continue _fun0029 }
case 381:
            var3 = _closure1_slot23;
            var3 = var3.REQUEST_TO_SPEAK;
            if(!(var3 !== var4)) { _fun0029_ip = 382; continue _fun0029 }
case 383:
            var3 = _closure1_slot23;
            var3 = var3.USE_EMBEDDED_ACTIVITIES;
            if(!(var3 !== var4)) { _fun0029_ip = 384; continue _fun0029 }
case 385:
            var3 = _closure1_slot23;
            var3 = var3.CREATE_EVENTS;
            if(!(var3 !== var4)) { _fun0029_ip = 386; continue _fun0029 }
case 387:
            var3 = _closure1_slot23;
            var3 = var3.MANAGE_EVENTS;
            if(!(var3 !== var4)) { _fun0029_ip = 388; continue _fun0029 }
case 389:
            var3 = _closure1_slot23;
            var3 = var3.CREATE_PUBLIC_THREADS;
            if(!(var3 !== var4)) { _fun0029_ip = 390; continue _fun0029 }
case 391:
            var3 = _closure1_slot23;
            var3 = var3.CREATE_PRIVATE_THREADS;
            if(!(var3 !== var4)) { _fun0029_ip = 392; continue _fun0029 }
case 393:
            var3 = _closure1_slot23;
            var3 = var3.SEND_MESSAGES_IN_THREADS;
            if(!(var3 !== var4)) { _fun0029_ip = 394; continue _fun0029 }
case 395:
            var3 = _closure1_slot23;
            var3 = var3.MANAGE_THREADS;
            if(!(var3 !== var4)) { _fun0029_ip = 396; continue _fun0029 }
case 397:
            var3 = _closure1_slot23;
            var3 = var3.MODERATE_MEMBERS;
            if(!(var3 !== var4)) { _fun0029_ip = 261; continue _fun0029 }
case 398:
            var3 = _closure1_slot23;
            var3 = var3.SET_VOICE_CHANNEL_STATUS;
            if(!(var3 !== var4)) { _fun0029_ip = 399; continue _fun0029 }
case 400:
            var3 = _closure1_slot23;
            var3 = var3.SEND_POLLS;
            if(!(var3 !== var4)) { _fun0029_ip = 401; continue _fun0029 }
case 402:
            var3 = _closure1_slot23;
            var3 = var3.USE_EXTERNAL_APPS;
            if(!(var3 !== var4)) { _fun0029_ip = 403; continue _fun0029 }
case 404:
            var3 = _closure1_slot23;
            var3 = var3.PIN_MESSAGES;
            if(!(var3 !== var4)) { _fun0029_ip = 405; continue _fun0029 }
case 406:
            var3 = _closure1_slot23;
            var3 = var3.BYPASS_SLOWMODE;
            if(!(var3 !== var4)) { _fun0029_ip = 407; continue _fun0029 }
case 408:
            var3 = null;
            return var3;
case 407:
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
            var3 = var3.kqcjeX;
            var3 = var4.bind(var5)(var3);
            return var3;
case 405:
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
case 403:
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
            var3 = var3.UMQ7W1;
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
            var3 = var3.VBwkUV;
            var3 = var4.bind(var5)(var3);
            return var3;
case 261:
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
            var3 = var3.+RL6p6;
            var3 = var4.bind(var5)(var3);
            return var3;
case 396:
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
            var3 = var3.kEqgr6;
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
            var3 = var3.fTE74u;
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
            var3 = var3.QwbTSU;
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
            var3 = var3.25rKnZ;
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
            var3 = var3.HIgA5e;
            var3 = var4.bind(var5)(var3);
            return var3;
case 386:
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
            var3 = var3.qyjZub;
            var3 = var4.bind(var5)(var3);
            return var3;
case 384:
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
            var3 = var3.rLSGen;
            var3 = var4.bind(var5)(var3);
            return var3;
case 382:
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
            var3 = var3.5kicT0;
            var3 = var4.bind(var5)(var3);
            return var3;
case 380:
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
            var3 = var3.FlNoSU;
            var3 = var4.bind(var5)(var3);
            return var3;
case 379:
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
            var3 = var3.BVK71t;
            var3 = var4.bind(var5)(var3);
            return var3;
case 377:
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
            var3 = var3.08zAV1;
            var3 = var4.bind(var5)(var3);
            return var3;
case 288:
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
            var3 = var3.YtjJPT;
            var3 = var4.bind(var5)(var3);
            return var3;
case 374:
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
            var3 = var3.9L47Fh;
            var3 = var4.bind(var5)(var3);
            return var3;
case 372:
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
            var3 = var3.8EI309;
            var3 = var4.bind(var5)(var3);
            return var3;
case 370:
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
            var3 = var3.8w1tIS;
            var3 = var4.bind(var5)(var3);
            return var3;
case 368:
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
            var3 = var3.S0W8Z2;
            var3 = var4.bind(var5)(var3);
            return var3;
case 366:
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
            var3 = var3.yEoJAg;
            var3 = var4.bind(var5)(var3);
            return var3;
case 364:
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
            var3 = var3.UeRs+f;
            var3 = var4.bind(var5)(var3);
            return var3;
case 362:
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
            var3 = var3.BpBGZW;
            var3 = var4.bind(var5)(var3);
            return var3;
case 360:
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
            var3 = var3.Y78KGB;
            var3 = var4.bind(var5)(var3);
            return var3;
case 358:
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
            var3 = var3.l9ufaW;
            var3 = var4.bind(var5)(var3);
            return var3;
case 356:
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
            var3 = var3.3AS4UF;
            var3 = var4.bind(var5)(var3);
            return var3;
case 354:
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
            var3 = var3.969dEB;
            var3 = var4.bind(var5)(var3);
            return var3;
case 352:
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
            var3 = var3.6lU9xM;
            var3 = var4.bind(var5)(var3);
            return var3;
case 350:
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
            var3 = var3.shbR1d;
            var3 = var4.bind(var5)(var3);
            return var3;
case 349:
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
            var3 = var3.Mg7bkp;
            var3 = var4.bind(var5)(var3);
            return var3;
case 347:
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
            var3 = var3.T32rkJ;
            var3 = var4.bind(var5)(var3);
            return var3;
case 345:
            var4 = var2.targetType;
            var3 = _closure1_slot17;
            var3 = var3.CHANNEL;
            if(!(var4 !== var3)) { _fun0029_ip = 409; continue _fun0029 }
case 410:
            var4 = var2.targetType;
            var3 = _closure1_slot17;
            var3 = var3.CHANNEL_OVERWRITE;
            if(!(var4 !== var3)) { _fun0029_ip = 409; continue _fun0029 }
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
            var3 = var3.uV83ys;
            var3 = var4.bind(var5)(var3);
            _fun0029_ip = 412; continue _fun0029;
case 409:
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
            var4 = var4.W/A4Qk;
            var3 = var5.bind(var6)(var4);
case 412:
            return var3;
case 343:
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
            var3 = var3.fZgLpK;
            var3 = var4.bind(var5)(var3);
            return var3;
case 341:
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
            var3 = var3.bbuXIi;
            var3 = var4.bind(var5)(var3);
            return var3;
case 339:
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
            var3 = var3.HarVuL;
            var3 = var4.bind(var5)(var3);
            return var3;
case 337:
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
            var3 = var3./ADKmJ;
            var3 = var4.bind(var5)(var3);
            return var3;
case 335:
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
            var3 = var3.C8d+oK;
            var3 = var4.bind(var5)(var3);
            return var3;
case 333:
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
            var3 = var3.t+Ct5+;
            var3 = var4.bind(var5)(var3);
            return var3;
case 331:
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
            var3 = var3.dilOFx;
            var3 = var4.bind(var5)(var3);
            return var3;
case 329:
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
            var3 = var3.0lTLTk;
            var3 = var4.bind(var5)(var3);
            return var3;
case 327:
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
            var3 = var3.rQJBEx;
            var3 = var4.bind(var5)(var3);
            return var3;
case 326:
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
            var3 = var3.QZRcfH;
            var3 = var4.bind(var5)(var3);
            return var3;
case 325:
            var4 = var2.targetType;
            var3 = _closure1_slot17;
            var3 = var3.CHANNEL;
            if(!(var4 !== var3)) { _fun0029_ip = 413; continue _fun0029 }
case 414:
            var3 = var2.targetType;
            var2 = _closure1_slot17;
            var2 = var2.CHANNEL_OVERWRITE;
            if(!(var3 !== var2)) { _fun0029_ip = 413; continue _fun0029 }
case 415:
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
            var2 = var2.9qLtWl;
            var2 = var3.bind(var4)(var2);
            _fun0029_ip = 416; continue _fun0029;
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
            var3 = var3.nAw15O;
            var2 = var4.bind(var5)(var3);
case 416:
            return var2;
case 323:
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
            var2 = var2.PGvZqa;
            var2 = var3.bind(var4)(var2);
            return var2;
case 179:
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
            var2 = var2.oTBA7O;
            var2 = var3.bind(var4)(var2);
            return var2;
case 320:
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
            var2 = var2.pBNv6u;
            var2 = var3.bind(var4)(var2);
            return var2;
case 319:
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
            var1 = var1.zJrgTE;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getStringForPermission'] = var5;
    var4 = function transformLogs(arg1, arg2) {
        var4 = arg1;
        var1 = arg2;
        var _closure2_slot0 = var1;
        var1 = new Array(0);
        var _closure2_slot1 = var1;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var9 = arg1;
                var _closure3_slot0 = var9;
                var4 = _closure2_slot0;
                var3 = function transformTarget(arg1, arg2) {
                    _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                        var7 = arg1;
                        var1 = arg2;
                        var _closure4_slot0 = var7;
                        var _closure4_slot1 = var1;
                        var5 = var7.targetType;
                        var4 = _closure1_slot17;
                        var4 = var4.GUILD;
                        if(!(var4 !== var5)) { _fun0031_ip = 417; continue _fun0031 }
case 20:
                        var4 = _closure1_slot17;
                        var4 = var4.GUILD_HOME;
                        if(!(var4 !== var5)) { _fun0031_ip = 417; continue _fun0031 }
case 418:
                        var4 = _closure1_slot17;
                        var4 = var4.GUILD_PROFILE;
                        if(!(var4 !== var5)) { _fun0031_ip = 417; continue _fun0031 }
case 25:
                        var4 = _closure1_slot17;
                        var4 = var4.CHANNEL;
                        if(!(var4 !== var5)) { _fun0031_ip = 419; continue _fun0031 }
case 8:
                        var4 = _closure1_slot17;
                        var4 = var4.CHANNEL_OVERWRITE;
                        if(!(var4 !== var5)) { _fun0031_ip = 419; continue _fun0031 }
case 112:
                        var4 = _closure1_slot17;
                        var4 = var4.USER;
                        if(!(var4 !== var5)) { _fun0031_ip = 420; continue _fun0031 }
case 421:
                        var4 = _closure1_slot17;
                        var4 = var4.ROLE;
                        if(!(var4 !== var5)) { _fun0031_ip = 422; continue _fun0031 }
case 423:
                        var4 = _closure1_slot17;
                        var4 = var4.ONBOARDING_PROMPT;
                        if(!(var4 !== var5)) { _fun0031_ip = 247; continue _fun0031 }
case 29:
                        var4 = _closure1_slot17;
                        var4 = var4.GUILD_ONBOARDING;
                        if(!(var4 !== var5)) { _fun0031_ip = 424; continue _fun0031 }
case 75:
                        var4 = _closure1_slot17;
                        var4 = var4.GUILD_MEMBER_VERIFICATION;
                        if(!(var4 !== var5)) { _fun0031_ip = 424; continue _fun0031 }
case 425:
                        var4 = _closure1_slot17;
                        var4 = var4.INVITE;
                        if(!(var4 !== var5)) { _fun0031_ip = 426; continue _fun0031 }
case 427:
                        var4 = _closure1_slot17;
                        var4 = var4.INTEGRATION;
                        if(!(var4 !== var5)) { _fun0031_ip = 428; continue _fun0031 }
case 12:
                        var4 = _closure1_slot17;
                        var4 = var4.WEBHOOK;
                        if(!(var4 !== var5)) { _fun0031_ip = 429; continue _fun0031 }
case 430:
                        var4 = _closure1_slot17;
                        var4 = var4.EMOJI;
                        if(!(var4 !== var5)) { _fun0031_ip = 431; continue _fun0031 }
case 432:
                        var4 = _closure1_slot17;
                        var4 = var4.STICKER;
                        if(!(var4 !== var5)) { _fun0031_ip = 225; continue _fun0031 }
case 433:
                        var4 = _closure1_slot17;
                        var4 = var4.STAGE_INSTANCE;
                        if(!(var4 !== var5)) { _fun0031_ip = 434; continue _fun0031 }
case 435:
                        var4 = _closure1_slot17;
                        var4 = var4.GUILD_SCHEDULED_EVENT;
                        if(!(var4 !== var5)) { _fun0031_ip = 436; continue _fun0031 }
case 437:
                        var4 = _closure1_slot17;
                        var4 = var4.GUILD_SCHEDULED_EVENT_EXCEPTION;
                        if(!(var4 !== var5)) { _fun0031_ip = 436; continue _fun0031 }
case 438:
                        var4 = _closure1_slot17;
                        var4 = var4.THREAD;
                        if(!(var4 !== var5)) { _fun0031_ip = 439; continue _fun0031 }
case 440:
                        var4 = _closure1_slot17;
                        var4 = var4.APPLICATION_COMMAND;
                        if(!(var4 !== var5)) { _fun0031_ip = 441; continue _fun0031 }
case 442:
                        var4 = _closure1_slot17;
                        var4 = var4.AUTO_MODERATION_RULE;
                        if(!(var4 !== var5)) { _fun0031_ip = 443; continue _fun0031 }
case 444:
                        var4 = _closure1_slot17;
                        var4 = var4.GUILD_SOUNDBOARD;
                        if(!(var4 !== var5)) { _fun0031_ip = 445; continue _fun0031 }
case 446:
                        var4 = _closure1_slot17;
                        var4 = var4.HOME_SETTINGS;
                        if(!(var4 !== var5)) { _fun0031_ip = 447; continue _fun0031 }
case 448:
                        var4 = _closure1_slot17;
                        var4 = var4.VOICE_CHANNEL_STATUS;
                        if(!(var4 !== var5)) { _fun0031_ip = 449; continue _fun0031 }
case 450:
                        var6 = _closure1_slot34;
                        var5 = var6.warn;
                        var4 = 'Unknown targetType for log';
                        var4 = var5.bind(var6)(var4, var7);
                        var4 = null;
                        return var4;
case 449:
                        var9 = _closure1_slot45;
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
case 447:
                        var10 = _closure1_slot45;
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
                            var1 = var1.VbpLyc;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var16 = var7;
                        var4 = var17[var10](var16, var15, var14, var13, var12, var11);
                        return var4;
case 445:
                        var8 = _closure1_slot45;
                        var4 = _closure1_slot16;
                        var6 = var4.NAME;
                        var5 = _closure1_slot24;
                        var4 = undefined;
                        var4 = var8.bind(var4)(var7, var6, var5);
                        return var4;
case 443:
                        var9 = _closure1_slot45;
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
case 441:
                        var5 = var7.targetId;
                        var4 = var7.options;
                        var4 = var4.application_id;
                        if(!(var5 !== var4)) { _fun0031_ip = 451; continue _fun0031 }
case 452:
                        var9 = _closure1_slot45;
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
                            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                                var1 = arg1;
                                var3 = var1.name_localized;
                                var2 = null;
                                if(!(var2 != var3)) { _fun0032_ip = 78; continue _fun0032 }
case 82:
                                var3 = var1.name_localized;
                                var2 = '';
                                if(!(var2 === var3)) { _fun0032_ip = 94; continue _fun0032 }
case 78:
                                var4 = var1.name;
                                _fun0032_ip = 20; continue _fun0032;
case 94:
                                var4 = var1.name_localized;
case 20:
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
                                if(!(var3 === var2)) { _fun0032_ip = 148; continue _fun0032 }
case 453:
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var3 = var2.concat;
                                var2 = '/\u2060';
                                var1 = var3.bind(var2)(var4);
case 148:
                                return var1;
                            }
                        };
                        var16 = var7;
                        var4 = var17[var9](var16, var15, var14, var13, var12);
                        return var4;
case 451:
                        var4 = _closure1_slot14;
                        var6 = var4.integrations;
                        var5 = var6.find;
                        var4 = function(arg1) {
                            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                                var1 = arg1;
                                var1 = var1.application;
                                var2 = null;
                                var3 = var2 == var1;
                                var2 = undefined;
                                if(var3) { _fun0033_ip = 5; continue _fun0033 }
case 454:
                                var2 = var1.id;
case 5:
                                var1 = _closure4_slot0;
                                var1 = var1.targetId;
                                var1 = var2 === var1;
                                return var1;
                            }
                        };
                        var5 = var5.bind(var6)(var4);
                        var4 = null;
                        if(!(var4 == var5)) { _fun0031_ip = 455; continue _fun0031 }
case 456:
                        var4 = var7.targetId;
                        _fun0031_ip = 212; continue _fun0031;
case 455:
                        var4 = var5.name;
case 212:
                        return var4;
case 439:
                        var9 = _closure1_slot45;
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
case 436:
                        var9 = _closure1_slot45;
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
case 434:
                        var9 = _closure1_slot45;
                        var4 = _closure1_slot16;
                        var15 = var4.TOPIC;
                        var17 = undefined;
                        var14 = function(arg1) {
                            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
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
                                if(var3) { _fun0034_ip = 457; continue _fun0034 }
case 52:
                                var3 = var4.find;
                                var2 = function(arg1) {
                                    var1 = arg1;
                                    var2 = var1.id;
                                    var1 = _closure5_slot0;
                                    var1 = var2 === var1;
                                    return var1;
                                };
                                var1 = var3.bind(var4)(var2);
case 457:
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
case 225:
                        var9 = _closure1_slot45;
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
case 431:
                        var9 = _closure1_slot45;
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
case 429:
                        var9 = _closure1_slot45;
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
case 428:
                        var9 = _closure1_slot45;
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
case 426:
                        var8 = _closure1_slot45;
                        var4 = _closure1_slot16;
                        var6 = var4.CODE;
                        var5 = _closure1_slot24;
                        var4 = undefined;
                        var4 = var8.bind(var4)(var7, var6, var5);
                        return var4;
case 424:
                        return var1;
case 247:
                        var8 = _closure1_slot45;
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
                        if(!(var5 != var4)) { _fun0031_ip = 458; continue _fun0031 }
case 459:
                        var5 = '';
                        if(!(var5 === var4)) { _fun0031_ip = 460; continue _fun0031 }
case 458:
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
                        var5 = var5.ZNQyiY;
                        var4 = var6.bind(var8)(var5);
case 460:
                        return var4;
case 422:
                        var9 = _closure1_slot45;
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
case 420:
                        var9 = _closure1_slot45;
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
case 419:
                        var6 = _closure1_slot45;
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
case 417:
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
                if(!(var6 == var8)) { _fun0030_ip = 461; continue _fun0030 }
case 322:
                var3 = _closure1_slot15;
                var4 = var3.MEMBER_PRUNE;
                var10 = new Array(5);
                var10[0] = var4;
                var4 = var3.MEMBER_DISCONNECT;
                var10[1] = var4;
                var4 = var3.MEMBER_MOVE;
                var10[2] = var4;
                var4 = var3.CREATOR_MONETIZATION_REQUEST_CREATED;
                var10[3] = var4;
                var3 = var3.CREATOR_MONETIZATION_TERMS_ACCEPTED;
                var10[4] = var3;
                var4 = var10.includes;
                var3 = var9.action;
                var3 = var4.bind(var10)(var3);
                if(!var3) { _fun0030_ip = 462; continue _fun0030 }
case 461:
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
                    _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                        var5 = arg1;
                        var _closure4_slot0 = var5;
                        var1 = var5.options;
                        var2 = null;
                        if(!(var2 == var1)) { _fun0035_ip = 3; continue _fun0035 }
case 131:
                        var1 = var5.options;
                        return var1;
case 3:
                        var1 = {};
                        var15 = var5.options;
                        var16 = var1;
                        var3 = copyDataProperties(var16, var15);
                        var3 = var5.options;
                        var7 = var3.type;
                        var6 = _closure1_slot27;
                        var6 = var6.USER;
                        if(!(var6 !== var7)) { _fun0035_ip = 54; continue _fun0035 }
case 52:
                        var6 = _closure1_slot27;
                        var6 = var6.ROLE;
                        if(!(var6 === var7)) { _fun0035_ip = 332; continue _fun0035 }
case 16:
                        var9 = _closure1_slot46;
                        var6 = var5.options;
                        var8 = var6.role_name;
                        var7 = _closure1_slot24;
                        var6 = undefined;
                        var6 = var9.bind(var6)(var8, var7);
                        var1['subtarget'] = var6;
                        _fun0035_ip = 332; continue _fun0035;
case 54:
                        var10 = _closure1_slot46;
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
case 332:
                        var6 = var5.options;
                        var6 = var6.channel_id;
                        if(!(var2 != var6)) { _fun0035_ip = 463; continue _fun0035 }
case 464:
                        var11 = _closure1_slot45;
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
case 463:
                        var6 = var5.options;
                        var6 = var6.members_removed;
                        var6 = var2 != var6;
                        if(!var6) { _fun0035_ip = 465; continue _fun0035 }
case 466:
                        var7 = var5.options;
                        var8 = var7.members_removed;
                        var7 = 0;
                        var6 = var7 !== var8;
case 465:
                        if(!var6) { _fun0035_ip = 467; continue _fun0035 }
case 468:
                        var6 = var5.options;
                        var6 = var6.members_removed;
                        var1['count'] = var6;
case 467:
                        var5 = var5.options;
                        var5 = var5.event_exception_id;
                        if(!(var2 != var5)) { _fun0035_ip = 469; continue _fun0035 }
case 116:
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
                        if(var7) { _fun0035_ip = 470; continue _fun0035 }
case 471:
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
case 470:
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
                        if(var11) { _fun0035_ip = 363; continue _fun0035 }
case 472:
                        var9 = var10.event_exception_id;
case 363:
                        var10 = var2 != var9;
                        var2 = '0';
                        if(!var10) { _fun0035_ip = 46; continue _fun0035 }
case 473:
                        var2 = var9;
case 46:
                        var2 = var7.bind(var8)(var2);
                        var3 = var3.bind(var6)(var2);
                        var2 = 'LL';
                        var2 = var4.bind(var5)(var3, var2);
                        var1['subtarget'] = var2;
case 469:
                        return var1;
                    }
                };
                var4 = var3.bind(var1)(var8);
                var3 = 'options';
                var8 = var7.bind(var8)(var3, var4);
                _closure3_slot0 = var8;
                var3 = var8.changes;
                var4 = var8;
                if(!(var6 != var3)) { _fun0030_ip = 474; continue _fun0030 }
case 475:
                var7 = new Array(0);
                var _closure3_slot1 = var7;
                var9 = var8.changes;
                var6 = var9.forEach;
                var3 = function(arg1) {
                    _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                        var7 = _closure3_slot0;
                        var6 = _closure2_slot0;
                        var5 = function transformChange(arg1, arg2, arg3) {
                            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                                var1 = arg1;
                                var3 = arg2;
                                var5 = arg3;
                                var _closure5_slot0 = var5;
                                var7 = var3.action;
                                var6 = _closure1_slot15;
                                var6 = var6.APPLICATION_COMMAND_PERMISSION_UPDATE;
                                if(!(var7 !== var6)) { _fun0037_ip = 476; continue _fun0037 }
case 477:
                                var7 = var1.key;
                                var6 = _closure1_slot16;
                                var6 = var6.OWNER_ID;
                                if(!(var6 !== var7)) { _fun0037_ip = 478; continue _fun0037 }
case 479:
                                var6 = _closure1_slot16;
                                var6 = var6.CHANNEL_ID;
                                if(!(var6 !== var7)) { _fun0037_ip = 480; continue _fun0037 }
case 89:
                                var6 = _closure1_slot16;
                                var6 = var6.AFK_CHANNEL_ID;
                                if(!(var6 !== var7)) { _fun0037_ip = 480; continue _fun0037 }
case 109:
                                var6 = _closure1_slot16;
                                var6 = var6.SYSTEM_CHANNEL_ID;
                                if(!(var6 !== var7)) { _fun0037_ip = 480; continue _fun0037 }
case 481:
                                var6 = _closure1_slot16;
                                var6 = var6.RULES_CHANNEL_ID;
                                if(!(var6 !== var7)) { _fun0037_ip = 480; continue _fun0037 }
case 482:
                                var6 = _closure1_slot16;
                                var6 = var6.PUBLIC_UPDATES_CHANNEL_ID;
                                if(!(var6 !== var7)) { _fun0037_ip = 480; continue _fun0037 }
case 483:
                                var6 = _closure1_slot16;
                                var6 = var6.AFK_TIMEOUT;
                                if(!(var6 !== var7)) { _fun0037_ip = 484; continue _fun0037 }
case 136:
                                var6 = _closure1_slot16;
                                var6 = var6.BITRATE;
                                if(!(var6 !== var7)) { _fun0037_ip = 485; continue _fun0037 }
case 31:
                                var6 = _closure1_slot16;
                                var6 = var6.COLOR;
                                if(!(var6 !== var7)) { _fun0037_ip = 291; continue _fun0037 }
case 486:
                                var6 = _closure1_slot16;
                                var6 = var6.THEME_COLORS;
                                if(!(var6 !== var7)) { _fun0037_ip = 487; continue _fun0037 }
case 488:
                                var6 = _closure1_slot16;
                                var6 = var6.MAX_AGE;
                                if(!(var6 !== var7)) { _fun0037_ip = 489; continue _fun0037 }
case 490:
                                var6 = _closure1_slot16;
                                var6 = var6.PERMISSIONS;
                                if(!(var6 !== var7)) { _fun0037_ip = 491; continue _fun0037 }
case 492:
                                var6 = _closure1_slot16;
                                var6 = var6.PERMISSIONS_GRANTED;
                                if(!(var6 !== var7)) { _fun0037_ip = 493; continue _fun0037 }
case 494:
                                var6 = _closure1_slot16;
                                var6 = var6.PERMISSIONS_DENIED;
                                if(!(var6 !== var7)) { _fun0037_ip = 493; continue _fun0037 }
case 495:
                                var6 = _closure1_slot16;
                                var6 = var6.FLAGS;
                                if(!(var6 !== var7)) { _fun0037_ip = 496; continue _fun0037 }
case 497:
                                var6 = _closure1_slot16;
                                var6 = var6.PREFERRED_LOCALE;
                                if(!(var6 !== var7)) { _fun0037_ip = 498; continue _fun0037 }
case 499:
                                var6 = _closure1_slot16;
                                var6 = var6.VIDEO_QUALITY_MODE;
                                if(!(var6 !== var7)) { _fun0037_ip = 247; continue _fun0037 }
case 500:
                                var6 = _closure1_slot16;
                                var6 = var6.SYSTEM_CHANNEL_FLAGS;
                                if(!(var6 !== var7)) { _fun0037_ip = 501; continue _fun0037 }
case 502:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_ACTIONS;
                                if(!(var6 !== var7)) { _fun0037_ip = 239; continue _fun0037 }
case 503:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_EVENT_TYPE;
                                if(!(var6 !== var7)) { _fun0037_ip = 504; continue _fun0037 }
case 505:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_TRIGGER_TYPE;
                                if(!(var6 !== var7)) { _fun0037_ip = 406; continue _fun0037 }
case 506:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_TRIGGER_METADATA;
                                if(!(var6 !== var7)) { _fun0037_ip = 220; continue _fun0037 }
case 44:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_ADD_KEYWORDS;
                                if(!(var6 !== var7)) { _fun0037_ip = 507; continue _fun0037 }
case 508:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_REMOVE_KEYWORDS;
                                if(!(var6 !== var7)) { _fun0037_ip = 507; continue _fun0037 }
case 509:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_ADD_REGEX_PATTERNS;
                                if(!(var6 !== var7)) { _fun0037_ip = 507; continue _fun0037 }
case 510:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_REMOVE_REGEX_PATTERNS;
                                if(!(var6 !== var7)) { _fun0037_ip = 507; continue _fun0037 }
case 511:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_ADD_ALLOW_LIST;
                                if(!(var6 !== var7)) { _fun0037_ip = 507; continue _fun0037 }
case 512:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_REMOVE_ALLOW_LIST;
                                if(!(var6 !== var7)) { _fun0037_ip = 507; continue _fun0037 }
case 513:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_EXEMPT_CHANNELS;
                                if(!(var6 !== var7)) { _fun0037_ip = 514; continue _fun0037 }
case 515:
                                var6 = _closure1_slot16;
                                var6 = var6.AUTO_MODERATION_EXEMPT_ROLES;
                                if(!(var6 !== var7)) { _fun0037_ip = 516; continue _fun0037 }
case 517:
                                var6 = _closure1_slot16;
                                var6 = var6.AVAILABLE_TAGS;
                                if(!(var6 !== var7)) { _fun0037_ip = 518; continue _fun0037 }
case 519:
                                var6 = _closure1_slot16;
                                var6 = var6.SCHEDULED_START_TIME;
                                if(!(var6 !== var7)) { _fun0037_ip = 520; continue _fun0037 }
case 521:
                                var6 = _closure1_slot16;
                                var6 = var6.SCHEDULED_END_TIME;
                                if(!(var6 !== var7)) { _fun0037_ip = 520; continue _fun0037 }
case 522:
                                return var1;
case 520:
                                var8 = _closure1_slot44;
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
case 518:
                                var7 = _closure1_slot43;
                                var6 = undefined;
                                var6 = var7.bind(var6)(var1);
                                return var6;
case 516:
                                var8 = var3.targetType;
                                var6 = _closure1_slot17;
                                var7 = var6.AUTO_MODERATION_RULE;
                                var6 = var1;
                                if(!(var8 === var7)) { _fun0037_ip = 523; continue _fun0037 }
case 524:
                                var10 = _closure1_slot44;
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
                                    _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                                        var4 = arg1;
                                        var1 = null;
                                        if(!(var1 != var4)) { _fun0038_ip = 131; continue _fun0038 }
case 525:
                                        var2 = var4.length;
                                        var1 = 0;
                                        if(!(!(var2 > var1))) { _fun0038_ip = 16; continue _fun0038 }
case 131:
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
                                        var1 = var1.K/EdV1;
                                        var1 = var2.bind(var3)(var1);
                                        _fun0038_ip = 146; continue _fun0038;
case 16:
                                        var3 = var4.join;
                                        var2 = ', ';
                                        var1 = var3.bind(var4)(var2);
case 146:
                                        return var1;
                                    }
                                };
                                var6 = var10.bind(var9)(var1, var8, var7);
case 523:
                                return var6;
case 514:
                                var8 = var3.targetType;
                                var6 = _closure1_slot17;
                                var7 = var6.AUTO_MODERATION_RULE;
                                var6 = var1;
                                if(!(var8 === var7)) { _fun0037_ip = 526; continue _fun0037 }
case 455:
                                var10 = _closure1_slot44;
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
                                    _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                                        var4 = arg1;
                                        var1 = null;
                                        if(!(var1 != var4)) { _fun0039_ip = 131; continue _fun0039 }
case 525:
                                        var2 = var4.length;
                                        var1 = 0;
                                        if(!(!(var2 > var1))) { _fun0039_ip = 16; continue _fun0039 }
case 131:
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
                                        var1 = var1.K/EdV1;
                                        var1 = var2.bind(var3)(var1);
                                        _fun0039_ip = 146; continue _fun0039;
case 16:
                                        var3 = var4.join;
                                        var2 = ', ';
                                        var1 = var3.bind(var4)(var2);
case 146:
                                        return var1;
                                    }
                                };
                                var6 = var10.bind(var9)(var1, var8, var7);
case 526:
                                return var6;
case 507:
                                var8 = var3.targetType;
                                var6 = _closure1_slot17;
                                var7 = var6.AUTO_MODERATION_RULE;
                                var6 = var1;
                                if(!(var8 === var7)) { _fun0037_ip = 527; continue _fun0037 }
case 398:
                                var9 = _closure1_slot44;
                                var8 = undefined;
                                var7 = function(arg1) {
                                    _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                                        var4 = arg1;
                                        var1 = null;
                                        if(!(var1 != var4)) { _fun0040_ip = 4; continue _fun0040 }
case 525:
                                        var1 = global;
                                        var2 = var1.Array;
                                        var1 = var2.isArray;
                                        var1 = var1.bind(var2)(var4);
                                        if(var1) { _fun0040_ip = 2; continue _fun0040 }
case 4:
                                        var1 = global;
                                        var2 = var1.JSON;
                                        var1 = var2.stringify;
                                        var1 = var1.bind(var2)(var4);
                                        _fun0040_ip = 457; continue _fun0040;
case 2:
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
case 457:
                                        return var1;
                                    }
                                };
                                var6 = var9.bind(var8)(var1, var7);
case 527:
                                return var6;
case 220:
                                var8 = var3.targetType;
                                var6 = _closure1_slot17;
                                var7 = var6.AUTO_MODERATION_RULE;
                                var6 = var1;
                                if(!(var8 === var7)) { _fun0037_ip = 528; continue _fun0037 }
case 529:
                                var9 = _closure1_slot44;
                                var8 = undefined;
                                var7 = function(arg1) {
                                    _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                                        var7 = arg1;
                                        var3 = null;
                                        var1 = var7;
                                        if(!(var3 != var7)) { _fun0041_ip = 530; continue _fun0041 }
case 82:
                                        var4 = 'object';
                                        var2 = typeof var7;
                                        var1 = var7;
                                        if(!(var4 === var2)) { _fun0041_ip = 530; continue _fun0041 }
case 81:
                                        var2 = var7.keyword_filter;
                                        if(!(var3 != var2)) { _fun0041_ip = 531; continue _fun0041 }
case 20:
                                        var2 = global;
                                        var4 = var2.Array;
                                        var3 = var4.isArray;
                                        var2 = var7.keyword_filter;
                                        var2 = var3.bind(var4)(var2);
                                        if(var2) { _fun0041_ip = 9; continue _fun0041 }
case 531:
                                        var2 = global;
                                        var3 = var2.JSON;
                                        var2 = var3.stringify;
                                        var2 = var2.bind(var3)(var7);
                                        _fun0041_ip = 532; continue _fun0041;
case 9:
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
case 532:
                                        var1 = var2;
case 530:
                                        return var1;
                                    }
                                };
                                var6 = var9.bind(var8)(var1, var7);
case 528:
                                return var6;
case 406:
                                var8 = var3.targetType;
                                var6 = _closure1_slot17;
                                var7 = var6.AUTO_MODERATION_RULE;
                                var6 = var1;
                                if(!(var8 === var7)) { _fun0037_ip = 533; continue _fun0037 }
case 534:
                                var9 = _closure1_slot44;
                                var10 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var7 = 28;
                                var7 = var8[var7];
                                var8 = undefined;
                                var7 = var10.bind(var8)(var7);
                                var7 = var7.triggerTypeToName;
                                var6 = var9.bind(var8)(var1, var7);
case 533:
                                return var6;
case 504:
                                var8 = var3.targetType;
                                var6 = _closure1_slot17;
                                var7 = var6.AUTO_MODERATION_RULE;
                                var6 = var1;
                                if(!(var8 === var7)) { _fun0037_ip = 428; continue _fun0037 }
case 535:
                                var9 = _closure1_slot44;
                                var10 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var7 = 28;
                                var7 = var8[var7];
                                var8 = undefined;
                                var7 = var10.bind(var8)(var7);
                                var7 = var7.eventTypeToName;
                                var6 = var9.bind(var8)(var1, var7);
case 428:
                                return var6;
case 239:
                                var7 = var3.targetType;
                                var3 = _closure1_slot17;
                                var6 = var3.AUTO_MODERATION_RULE;
                                var3 = var1;
                                if(!(var7 === var6)) { _fun0037_ip = 536; continue _fun0037 }
case 537:
                                var9 = _closure1_slot44;
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
case 536:
                                return var3;
case 501:
                                var6 = function transformSystemChannelFlagsChanges(arg1) {
                                    var1 = arg1;
                                    var _closure6_slot0 = var1;
                                    var1 = {};
                                    var5 = _closure1_slot28;
                                    var6 = var5.SUPPRESS_JOIN_NOTIFICATIONS;
                                    var4 = _closure1_slot16;
                                    var4 = var4.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS;
                                    var1[var6] = var4;
                                    var6 = var5.SUPPRESS_PREMIUM_SUBSCRIPTIONS;
                                    var4 = _closure1_slot16;
                                    var4 = var4.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS;
                                    var1[var6] = var4;
                                    var6 = var5.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS;
                                    var4 = _closure1_slot16;
                                    var4 = var4.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS;
                                    var1[var6] = var4;
                                    var4 = var5.SUPPRESS_JOIN_NOTIFICATION_REPLIES;
                                    var3 = _closure1_slot16;
                                    var3 = var3.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES;
                                    var1[var4] = var3;
                                    var _closure6_slot1 = var1;
                                    var1 = new Array(0);
                                    var _closure6_slot2 = var1;
                                    var3 = global;
                                    var4 = var3.Object;
                                    var3 = var4.values;
                                    var4 = var3.bind(var4)(var5);
                                    var3 = var4.forEach;
                                    var2 = function(arg1) {
                                        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                                            var5 = arg1;
                                            var2 = _closure6_slot0;
                                            var3 = var2.oldValue;
                                            var3 = var3 & var5;
                                            var4 = var3 === var5;
                                            var2 = var2.newValue;
                                            var2 = var2 & var5;
                                            var2 = var2 === var5;
                                            if(!(var4 !== var2)) { _fun0042_ip = 538; continue _fun0042 }
case 20:
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
case 538:
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
case 247:
                                var7 = _closure1_slot44;
                                var6 = undefined;
                                var3 = function(arg1) {
                                    _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                                        var1 = _closure1_slot25;
                                        var3 = var1.FULL;
                                        var1 = arg1;
                                        if(!(var1 !== var3)) { _fun0043_ip = 89; continue _fun0043 }
case 131:
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
                                        var1 = var1.jjKYpq;
                                        var1 = var3.bind(var4)(var1);
                                        _fun0043_ip = 539; continue _fun0043;
case 89:
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
                                        var2 = var2.7jOoJC;
                                        var1 = var3.bind(var4)(var2);
case 539:
                                        return var1;
                                    }
                                };
                                var3 = var7.bind(var6)(var1, var3);
                                return var3;
case 498:
                                var7 = _closure1_slot44;
                                var6 = undefined;
                                var3 = function(arg1) {
                                    _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
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
                                        if(!var3) { _fun0044_ip = 25; continue _fun0044 }
case 49:
                                        var1 = var2.name;
case 25:
                                        return var1;
                                    }
                                };
                                var3 = var7.bind(var6)(var1, var3);
                                return var3;
case 496:
                                var3 = new Array(0);
                                var8 = var1.oldValue;
                                var6 = var1.newValue;
                                var7 = 0;
                                var11 = 'number';
                                var9 = typeof var8;
                                var10 = 0;
                                if(!(var11 === var9)) { _fun0037_ip = 540; continue _fun0037 }
case 541:
                                var10 = var8;
case 540:
                                var8 = typeof var6;
                                var9 = 0;
                                if(!(var11 === var8)) { _fun0037_ip = 542; continue _fun0037 }
case 257:
                                var9 = var6;
case 542:
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
                                var12 = _closure1_slot29;
                                for(var6 in var12)
case 543:
                                {
case 544:
                                    var19 = var6;
                                    var18 = _closure1_slot29;
                                    var19 = var18[var19];
                                    var20 = _closure1_slot2;
                                    var18 = _closure1_slot3;
                                    var18 = var18[var17];
                                    var20 = var20.bind(var16)(var18);
                                    var18 = var20.hasFlag;
                                    var18 = var18.bind(var20)(var15, var19);
                                    if(!var18) { _fun0037_ip = 545; continue _fun0037 }
case 546:
                                    var18 = var9.push;
                                    var18 = var18.bind(var9)(var19);
case 545:
                                    var20 = _closure1_slot2;
                                    var18 = _closure1_slot3;
                                    var18 = var18[var17];
                                    var20 = var20.bind(var16)(var18);
                                    var18 = var20.hasFlag;
                                    var18 = var18.bind(var20)(var14, var19);
                                    if(!var18) { _fun0037_ip = 543; continue _fun0037 }
case 547:
                                    var18 = var8.push;
                                    var18 = var18.bind(var8)(var19);
                                    _fun0037_ip = 543; continue _fun0037;
                                }
case 279:
                                var6 = {};
                                var6['added'] = var9;
                                var6['removed'] = var8;
                                var12 = var6.added;
                                var10 = var6.removed;
                                var6 = var12.length;
                                if(!(var6 > var7)) { _fun0037_ip = 548; continue _fun0037 }
case 549:
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
case 548:
                                var6 = var10.length;
                                if(!(var6 > var7)) { _fun0037_ip = 550; continue _fun0037 }
case 390:
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
case 550:
                                return var3;
case 493:
                                var3 = new Array(0);
                                var9 = _closure1_slot41;
                                var8 = var1.oldValue;
                                var7 = var1.newValue;
                                var6 = undefined;
                                var6 = var9.bind(var6)(var8, var7);
                                var12 = var6.added;
                                var9 = var6.removed;
                                var6 = var12.length;
                                var7 = 0;
                                if(!(var6 > var7)) { _fun0037_ip = 551; continue _fun0037 }
case 552:
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
case 551:
                                var6 = var9.length;
                                if(!(var6 > var7)) { _fun0037_ip = 553; continue _fun0037 }
case 554:
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
case 553:
                                return var3;
case 491:
                                var3 = new Array(0);
                                var9 = _closure1_slot41;
                                var8 = var1.oldValue;
                                var7 = var1.newValue;
                                var6 = undefined;
                                var6 = var9.bind(var6)(var8, var7);
                                var12 = var6.added;
                                var10 = var6.removed;
                                var6 = var12.length;
                                var7 = 0;
                                if(!(var6 > var7)) { _fun0037_ip = 555; continue _fun0037 }
case 556:
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
case 555:
                                var6 = var10.length;
                                if(!(var6 > var7)) { _fun0037_ip = 557; continue _fun0037 }
case 558:
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
case 557:
                                return var3;
case 489:
                                var7 = _closure1_slot44;
                                var6 = undefined;
                                var3 = function(arg1) {
                                    _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
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
                                        if(!(var3 !== var2)) { _fun0045_ip = 7; continue _fun0045 }
case 87:
                                        var1 = var2.label;
case 7:
                                        return var1;
                                    }
                                };
                                var3 = var7.bind(var6)(var1, var3);
                                return var3;
case 487:
                                var7 = _closure1_slot44;
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
case 291:
                                var7 = _closure1_slot44;
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
case 485:
                                var7 = _closure1_slot44;
                                var6 = undefined;
                                var3 = function(arg1) {
                                    var2 = arg1;
                                    var1 = 1000;
                                    var1 = var2 / var1;
                                    return var1;
                                };
                                var3 = var7.bind(var6)(var1, var3);
                                return var3;
case 484:
                                var7 = _closure1_slot44;
                                var6 = undefined;
                                var3 = function(arg1) {
                                    var2 = arg1;
                                    var1 = 60;
                                    var1 = var2 / var1;
                                    return var1;
                                };
                                var3 = var7.bind(var6)(var1, var3);
                                return var3;
case 480:
                                var8 = _closure1_slot44;
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
case 478:
                                var7 = _closure1_slot44;
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
case 476:
                                var3 = var1.newValue;
                                if(var3) { _fun0037_ip = 559; continue _fun0037 }
case 560:
                                var3 = var1.oldValue;
case 559:
                                var7 = var3.type;
                                var6 = _closure1_slot26;
                                var6 = var6.ROLE;
                                if(!(var6 !== var7)) { _fun0037_ip = 561; continue _fun0037 }
case 562:
                                var6 = _closure1_slot26;
                                var6 = var6.USER;
                                if(!(var6 !== var7)) { _fun0037_ip = 563; continue _fun0037 }
case 564:
                                var6 = _closure1_slot26;
                                var6 = var6.CHANNEL;
                                if(!(var6 === var7)) { _fun0037_ip = 565; continue _fun0037 }
case 566:
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
                                if(!(var6 !== var5)) { _fun0037_ip = 567; continue _fun0037 }
case 568:
                                var8 = _closure1_slot46;
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
                                _fun0037_ip = 565; continue _fun0037;
case 567:
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
                                var5 = var5.MSYhgo;
                                var5 = var6.bind(var7)(var5);
                                var1['subtarget'] = var5;
                                _fun0037_ip = 565; continue _fun0037;
case 563:
                                var9 = _closure1_slot46;
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
                                _fun0037_ip = 565; continue _fun0037;
case 561:
                                var6 = _closure1_slot46;
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
case 565:
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
                        if(var5) { _fun0036_ip = 84; continue _fun0036 }
case 65:
                        var5 = _closure3_slot1;
                        var3 = var5.push;
                        var3 = var3.bind(var5)(var4);
                        _fun0036_ip = 106; continue _fun0036;
case 84:
                        var3 = var4.forEach;
                        var2 = function(arg1) {
                            var3 = _closure3_slot1;
                            var2 = var3.push;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
case 106:
                        return var1;
                    }
                };
                var3 = var6.bind(var9)(var3);
                var6 = var8.set;
                var3 = 'changes';
                var3 = var6.bind(var8)(var3, var7);
                _closure3_slot0 = var3;
                var4 = var3;
case 474:
                var3 = _closure2_slot1;
                var2 = var3.push;
                var2 = var2.bind(var3)(var4);
case 462:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['transformLogs'] = var4;
    var3['transformAvailableForumTagChange'] = var2;
    return var1;
})();
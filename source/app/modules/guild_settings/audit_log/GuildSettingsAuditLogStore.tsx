// app/modules/guild_settings/audit_log/GuildSettingsAuditLogStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot40 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot42;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot42;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot42 = var1;
    var1 = function transformEntries(arg1) {
        var4 = arg1;
        var1 = new Array(0);
        var _closure2_slot0 = var1;
        var3 = 0;
        var _closure2_slot1 = var3;
        var3 = var4.reverse;
        var4 = var3.bind(var4)();
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var7 = new Array(0);
                var1 = var4.reason;
                var5 = null;
                if(!(var5 != var1)) { _fun0005_ip = 5; continue _fun0005 }
case 40:
                var2 = var7.push;
                var8 = _closure1_slot8;
                var1 = _closure1_slot17;
                var22 = var1.REASON;
                var20 = var4.reason;
                var3 = var8.prototype;
                var3 = Object.create(var3, {constructor: {value: var8}});
                var23 = var3;
                var21 = null;
                var1 = new var23[var8](var22, var21, var20, var19);
                var1 = var1 instanceof Object ? var1 : var3;
                var1 = var2.bind(var7)(var1);
case 5:
                var1 = var4.changes;
                var1 = var5 != var1;
                var2 = null;
                var9 = null;
                var8 = null;
                if(!var1) { _fun0005_ip = 41; continue _fun0005 }
case 15:
                var3 = _closure1_slot41;
                var1 = var4.changes;
                var13 = undefined;
                var12 = var3.bind(var13)(var1);
                var3 = var12.bind(var13)();
                var1 = var3.done;
                var11 = null;
                var10 = null;
                var6 = null;
                var2 = null;
                var9 = null;
                var8 = null;
                if(var1) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                var1 = var3.value;
                var18 = _closure1_slot8;
                var22 = var1.key;
                var21 = var1.old_value;
                var20 = var1.new_value;
                var15 = var18.prototype;
                var15 = Object.create(var15, {constructor: {value: var18}});
                var23 = var15;
                var1 = new var23[var18](var22, var21, var20, var19);
                var1 = var1 instanceof Object ? var1 : var15;
                var15 = var7.push;
                var15 = var15.bind(var7)(var1);
                var19 = var1.key;
                var15 = _closure1_slot17;
                var18 = var15.NAME;
                var17 = var1;
                var16 = var10;
                var15 = var6;
                if(!(var19 !== var18)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                var19 = var1.key;
                var18 = _closure1_slot17;
                var18 = var18.TYPE;
                var17 = var11;
                var16 = var10;
                var15 = var1;
                if(!(var19 !== var18)) { _fun0005_ip = 43; continue _fun0005 }
case 45:
                var19 = var1.key;
                var18 = _closure1_slot17;
                var18 = var18.TITLE;
                var17 = var11;
                var16 = var10;
                var15 = var6;
                if(!(var19 === var18)) { _fun0005_ip = 43; continue _fun0005 }
case 46:
                var17 = var11;
                var16 = var1;
                var15 = var6;
case 43:
                var18 = var12.bind(var13)();
                var1 = var18.done;
                var11 = var17;
                var10 = var16;
                var6 = var15;
                var3 = var18;
                var2 = var11;
                var9 = var10;
                var8 = var6;
                if(!var1) { _fun0005_ip = 42; continue _fun0005 }
case 41:
                var6 = var4.action_type;
                var3 = _closure1_slot14;
                var3 = var3.MEMBER_PRUNE;
                if(!(var6 === var3)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                var3 = var5 != var4;
                var6 = 1;
                var11 = var6;
                if(!var3) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                var3 = var4.options;
                var3 = var5 != var3;
                var11 = var6;
                if(!var3) { _fun0005_ip = 49; continue _fun0005 }
case 51:
                var3 = var4.options;
                var3 = var3.delete_member_days;
                var3 = var5 != var3;
                var11 = var6;
                if(!var3) { _fun0005_ip = 49; continue _fun0005 }
case 52:
                var3 = var4.options;
                var11 = var3.delete_member_days;
case 49:
                var10 = _closure1_slot8;
                var3 = _closure1_slot17;
                var22 = var3.PRUNE_DELETE_DAYS;
                var6 = var10.prototype;
                var6 = Object.create(var6, {constructor: {value: var10}});
                var23 = var6;
                var21 = null;
                var20 = var11;
                var3 = new var23[var10](var22, var21, var20, var19);
                var6 = var3 instanceof Object ? var3 : var6;
                var3 = var7.push;
                var3 = var3.bind(var7)(var6);
case 47:
                var6 = var4.action_type;
                var3 = _closure1_slot14;
                var3 = var3.AUTO_MODERATION_BLOCK_MESSAGE;
                if(!(var6 === var3)) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                var6 = var4.options;
                var10 = var5 == var6;
                var3 = undefined;
                if(var10) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                var3 = var6.auto_moderation_rule_name;
case 55:
                if(!(var5 != var3)) { _fun0005_ip = 53; continue _fun0005 }
case 57:
                var6 = var7.push;
                var12 = _closure1_slot8;
                var3 = _closure1_slot17;
                var22 = var3.AUTO_MODERATION_TRIGGERED_RULE_NAME;
                var3 = var4.options;
                var20 = var3.auto_moderation_rule_name;
                var10 = var12.prototype;
                var10 = Object.create(var10, {constructor: {value: var12}});
                var23 = var10;
                var21 = null;
                var3 = new var23[var12](var22, var21, var20, var19);
                var3 = var3 instanceof Object ? var3 : var10;
                var3 = var6.bind(var7)(var3);
case 53:
                var6 = var4.action_type;
                var3 = _closure1_slot14;
                var3 = var3.VOICE_CHANNEL_STATUS_CREATE;
                var3 = var6 === var3;
                if(!var3) { _fun0005_ip = 58; continue _fun0005 }
case 59:
                var10 = var4.options;
                var11 = var5 == var10;
                var6 = undefined;
                if(var11) { _fun0005_ip = 60; continue _fun0005 }
case 61:
                var6 = var10.status;
case 60:
                var3 = var5 != var6;
case 58:
                if(!var3) { _fun0005_ip = 62; continue _fun0005 }
case 63:
                var6 = var7.push;
                var12 = _closure1_slot8;
                var3 = _closure1_slot17;
                var22 = var3.STATUS;
                var3 = var4.options;
                var20 = var3.status;
                var10 = var12.prototype;
                var10 = Object.create(var10, {constructor: {value: var12}});
                var23 = var10;
                var21 = null;
                var3 = new var23[var12](var22, var21, var20, var19);
                var3 = var3 instanceof Object ? var3 : var10;
                var3 = var6.bind(var7)(var3);
case 62:
                var6 = _closure1_slot7;
                var3 = {};
                var10 = var4.id;
                var3['id'] = var10;
                var10 = var4.action_type;
                var3['action'] = var10;
                var10 = var4.target_id;
                var3['targetId'] = var10;
                var10 = var4.user_id;
                var3['userId'] = var10;
                var3['changes'] = var7;
                var4 = var4.options;
                var3['options'] = var4;
                var4 = var6.prototype;
                var4 = Object.create(var4, {constructor: {value: var6}});
                var23 = var4;
                var22 = var3;
                var3 = new var23[var6](var22, var21);
                var7 = var3 instanceof Object ? var3 : var4;
                var6 = _closure2_slot0;
                var4 = 0;
                var6 = var6[var4];
                var12 = _closure2_slot1;
                var10 = var5 != var6;
                if(!var10) { _fun0005_ip = 64; continue _fun0005 }
case 65:
                var13 = var6.action;
                var11 = var7.action;
                var10 = var13 === var11;
case 64:
                if(!var10) { _fun0005_ip = 66; continue _fun0005 }
case 67:
                var13 = var6.targetId;
                var11 = var7.targetId;
                var10 = var13 === var11;
case 66:
                if(!var10) { _fun0005_ip = 68; continue _fun0005 }
case 69:
                var13 = var6.userId;
                var11 = var7.userId;
                var10 = var13 === var11;
case 68:
                if(!var10) { _fun0005_ip = 70; continue _fun0005 }
case 71:
                var14 = _closure1_slot0;
                var13 = _closure1_slot1;
                var11 = 13;
                var13 = var13[var11];
                var11 = undefined;
                var15 = var14.bind(var11)(var13);
                var14 = var15.isEqual;
                var13 = var6.options;
                var11 = var7.options;
                var10 = var14.bind(var15)(var13, var11);
case 70:
                if(!var10) { _fun0005_ip = 72; continue _fun0005 }
case 73:
                var15 = var7.timestampStart;
                var14 = var15.diff;
                var13 = var6.timestampStart;
                var11 = 'minutes';
                var13 = var14.bind(var15)(var13, var11);
                var11 = 30;
                var10 = var13 < var11;
case 72:
                if(!var10) { _fun0005_ip = 74; continue _fun0005 }
case 75:
                var11 = 50;
                var10 = var12 < var11;
case 74:
                if(!var10) { _fun0005_ip = 76; continue _fun0005 }
case 77:
                var12 = var7.targetType;
                var11 = _closure1_slot16;
                var11 = var11.INVITE;
                var10 = var12 !== var11;
case 76:
                if(!var10) { _fun0005_ip = 78; continue _fun0005 }
case 79:
                var12 = var7.action;
                var11 = _closure1_slot14;
                var11 = var11.MESSAGE_DELETE;
                var10 = var12 !== var11;
case 78:
                if(!var10) { _fun0005_ip = 80; continue _fun0005 }
case 81:
                var12 = var7.action;
                var11 = _closure1_slot14;
                var11 = var11.MESSAGE_BULK_DELETE;
                var10 = var12 !== var11;
case 80:
                if(!var10) { _fun0005_ip = 82; continue _fun0005 }
case 83:
                var12 = var7.action;
                var11 = _closure1_slot14;
                var11 = var11.MESSAGE_PIN;
                var10 = var12 !== var11;
case 82:
                if(!var10) { _fun0005_ip = 84; continue _fun0005 }
case 85:
                var12 = var7.action;
                var11 = _closure1_slot14;
                var11 = var11.MESSAGE_UNPIN;
                var10 = var12 !== var11;
case 84:
                if(!var10) { _fun0005_ip = 86; continue _fun0005 }
case 87:
                var12 = var7.action;
                var11 = _closure1_slot14;
                var11 = var11.MEMBER_MOVE;
                var10 = var12 !== var11;
case 86:
                if(!var10) { _fun0005_ip = 88; continue _fun0005 }
case 89:
                var12 = var7.action;
                var11 = _closure1_slot14;
                var11 = var11.MEMBER_DISCONNECT;
                var10 = var12 !== var11;
case 88:
                if(!var10) { _fun0005_ip = 90; continue _fun0005 }
case 91:
                var12 = var7.action;
                var11 = _closure1_slot14;
                var11 = var11.BOT_ADD;
                var10 = var12 !== var11;
case 90:
                if(!var10) { _fun0005_ip = 92; continue _fun0005 }
case 93:
                var12 = var7.action;
                var11 = _closure1_slot14;
                var11 = var11.APPLICATION_COMMAND_PERMISSION_UPDATE;
                var10 = var12 !== var11;
case 92:
                if(!var10) { _fun0005_ip = 94; continue _fun0005 }
case 95:
                var12 = var7.action;
                var11 = _closure1_slot14;
                var11 = var11.MEMBER_PRUNE;
                var10 = var12 !== var11;
case 94:
                if(var10) { _fun0005_ip = 96; continue _fun0005 }
case 97:
                var11 = var7.actionType;
                var10 = _closure1_slot15;
                var10 = var10.DELETE;
                if(!(var11 === var10)) { _fun0005_ip = 98; continue _fun0005 }
case 99:
                if(!(var5 == var2)) { _fun0005_ip = 100; continue _fun0005 }
case 101:
                if(!(var5 != var9)) { _fun0005_ip = 98; continue _fun0005 }
case 100:
                var12 = var5 == var2;
                var11 = undefined;
                var10 = undefined;
                if(var12) { _fun0005_ip = 102; continue _fun0005 }
case 103:
                var10 = var2.oldValue;
case 102:
                if(!(var5 == var10)) { _fun0005_ip = 104; continue _fun0005 }
case 105:
                var12 = var5 == var9;
                var2 = undefined;
                if(var12) { _fun0005_ip = 106; continue _fun0005 }
case 107:
                var2 = var9.oldValue;
case 106:
                var10 = var2;
case 104:
                var9 = var7.targetType;
                var2 = _closure1_slot16;
                var2 = var2.CHANNEL;
                var2 = var9 !== var2;
                if(!var2) { _fun0005_ip = 108; continue _fun0005 }
case 109:
                var12 = var7.targetType;
                var9 = _closure1_slot16;
                var9 = var9.CHANNEL_OVERWRITE;
                var2 = var12 !== var9;
case 108:
                if(var2) { _fun0005_ip = 110; continue _fun0005 }
case 111:
                var2 = var5 === var8;
case 110:
                if(var2) { _fun0005_ip = 112; continue _fun0005 }
case 113:
                var9 = _closure1_slot9;
                var8 = var8.oldValue;
                var8 = var9.bind(var11)(var8);
                var2 = !var8;
case 112:
                var9 = var10;
                if(var2) { _fun0005_ip = 114; continue _fun0005 }
case 115:
                var2 = global;
                var2 = var2.HermesInternal;
                var8 = var2.concat;
                var2 = '#';
                var9 = var8.bind(var2)(var10);
case 114:
                var8 = _closure1_slot38;
                var2 = var7.targetType;
                var2 = var8[var2];
                if(!(var5 != var2)) { _fun0005_ip = 116; continue _fun0005 }
case 117:
                var5 = _closure1_slot38;
                var2 = var7.targetType;
                var5 = var5[var2];
                var2 = var7.targetId;
                var5[var2] = var9;
                _fun0005_ip = 98; continue _fun0005;
case 116:
                var5 = _closure1_slot38;
                var2 = var7.targetType;
                var1 = {};
                var8 = var7.targetId;
                var1[var8] = var9;
                var5[var2] = var1;
case 98:
                _closure2_slot1 = var4;
                var2 = _closure2_slot0;
                var1 = var2.unshift;
                var1 = var1.bind(var2)(var7);
                var1 = undefined;
                return var1;
case 96:
                var2 = _closure2_slot0;
                var5 = var6.merge;
                var1 = {};
                var21 = var6.changes;
                var8 = new Array(0);
                var22 = var8;
                var20 = 0;
                var20 = arraySpread(var22, var21, var20);
                var21 = var7.changes;
                var22 = var8;
                var9 = arraySpread(var22, var21, var20);
                var1['changes'] = var8;
                var7 = var7.timestampStart;
                var1['timestampEnd'] = var7;
                var1 = var5.bind(var6)(var1);
                var2[var4] = var1;
                var1 = _closure2_slot1;
                var1 = parseFloat(var1);
                var2 = var1 + 1;
                _closure2_slot1 = var2;
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot43 = var1;
    var9 = function handleSettingsSetSection(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var5 = var1.section;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var1;
            var4 = _closure1_slot19;
            var4 = var4.AUDIT_LOG;
            if(!(var5 === var4)) { _fun0006_ip = 118; continue _fun0006 }
case 119:
            var6 = _closure1_slot11;
            var5 = var6.getMembers;
            var4 = _closure1_slot21;
            var5 = var5.bind(var6)(var4);
            var7 = _closure1_slot13;
            var6 = var7.getGuild;
            var4 = _closure1_slot21;
            var4 = var6.bind(var7)(var4);
            _closure2_slot0 = var4;
            var6 = _closure1_slot21;
            var4 = null;
            var6 = var4 != var6;
            var4 = undefined;
            if(!var6) { _fun0006_ip = 120; continue _fun0006 }
case 15:
            var8 = _closure1_slot12;
            var7 = var8.getUnsafeMutableRoles;
            var6 = _closure1_slot21;
            var4 = var7.bind(var8)(var6);
case 120:
            _closure2_slot1 = var4;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 13;
            var4 = var7[var4];
            var4 = var6.bind(var1)(var4);
            var6 = var4.bind(var1)(var5);
            var5 = var6.filter;
            var4 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var3 = var2.roles;
                var2 = var3.some;
                var1 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = _closure2_slot0;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0007_ip = 121; continue _fun0007 }
case 122:
                        var3 = undefined;
                        return var3;
case 121:
                        var3 = _closure3_slot0;
                        var4 = var3.userId;
                        var3 = _closure2_slot0;
                        var3 = var3.ownerId;
                        if(!(var4 !== var3)) { _fun0007_ip = 123; continue _fun0007 }
case 124:
                        var3 = _closure2_slot1;
                        var3 = var1 == var3;
                        var5 = undefined;
                        var4 = undefined;
                        if(var3) { _fun0007_ip = 125; continue _fun0007 }
case 126:
                        var3 = _closure2_slot1;
                        var2 = arg1;
                        var4 = var3[var2];
case 125:
                        var1 = var1 != var4;
                        if(!var1) { _fun0007_ip = 127; continue _fun0007 }
case 4:
                        var3 = _closure1_slot10;
                        var2 = _closure1_slot20;
                        var1 = var3.bind(var5)(var4, var2);
case 127:
                        return var1;
case 123:
                        var1 = true;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var5.bind(var6)(var4);
            var4 = var5.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.userId;
                return var1;
            };
            var4 = var4.bind(var5)(var2);
            var2 = var4.value;
            var2 = var2.bind(var4)();
            _closure1_slot24 = var2;
            return var1;
case 118:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot44 = var9;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var12 = true;
    var2['value'] = var12;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var2 = 0;
    var8 = var6[var2];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var10 = var6[var8];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot7 = var10;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AuditLogChange;
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.isGuildSelectableChannelType;
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.hasAnyPermission;
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var10 = var8.AuditLogActions;
    var _closure1_slot14 = var10;
    var11 = var8.AuditLogActionTypes;
    var _closure1_slot15 = var11;
    var11 = var8.AuditLogTargetTypes;
    var _closure1_slot16 = var11;
    var11 = var8.AuditLogChangeKeys;
    var _closure1_slot17 = var11;
    var11 = var8.AUDIT_LOG_PAGE_LIMIT;
    var _closure1_slot18 = var11;
    var11 = var8.GuildSettingsSections;
    var _closure1_slot19 = var11;
    var8 = var8.Permissions;
    var11 = 12;
    var13 = var6[var11];
    var11 = metroImportAll;
    var25 = var11.bind(var1)(var13);
    var24 = var25.combine;
    var38 = var8.KICK_MEMBERS;
    var37 = var8.BAN_MEMBERS;
    var36 = var8.ADMINISTRATOR;
    var35 = var8.MANAGE_CHANNELS;
    var34 = var8.MANAGE_GUILD;
    var33 = var8.MANAGE_MESSAGES;
    var32 = var8.MANAGE_NICKNAMES;
    var31 = var8.MANAGE_ROLES;
    var30 = var8.MANAGE_WEBHOOKS;
    var29 = var8.MANAGE_GUILD_EXPRESSIONS;
    var28 = var8.MOVE_MEMBERS;
    var27 = var8.MUTE_MEMBERS;
    var26 = var8.DEAFEN_MEMBERS;
    var39 = var25;
    var8 = var39[var24](var38, var37, var36, var35, var34, var33, var32, var31, var30, var29, var28, var27, var26, var25);
    var _closure1_slot20 = var8;
    var8 = null;
    var _closure1_slot21 = var8;
    var11 = new Array(0);
    var _closure1_slot22 = var11;
    var11 = new Array(0);
    var _closure1_slot23 = var11;
    var11 = new Array(0);
    var _closure1_slot24 = var11;
    var11 = new Array(0);
    var _closure1_slot25 = var11;
    var11 = new Array(0);
    var _closure1_slot26 = var11;
    var11 = new Array(0);
    var _closure1_slot27 = var11;
    var11 = new Array(0);
    var _closure1_slot28 = var11;
    var11 = new Array(0);
    var _closure1_slot29 = var11;
    var _closure1_slot30 = var12;
    var11 = false;
    var _closure1_slot31 = var11;
    var _closure1_slot32 = var11;
    var _closure1_slot33 = var12;
    var _closure1_slot34 = var11;
    var _closure1_slot35 = var8;
    var10 = var10.ALL;
    var _closure1_slot36 = var10;
    var _closure1_slot37 = var8;
    var8 = {};
    var _closure1_slot38 = var8;
    var _closure1_slot39 = var2;
    var2 = 14;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildSettingsAuditLogStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot40;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 125; continue _fun0008 }
case 128:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 129; continue _fun0008;
case 125:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 129:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var5 = this;
            var4 = var5.waitFor;
            var3 = _closure1_slot13;
            var2 = _closure1_slot12;
            var1 = _closure1_slot11;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(19);
        var1[0] = var5;
        var5 = {};
        var7 = 'logs';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'integrations';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot23;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'webhooks';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot25;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'guildScheduledEvents';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot26;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'automodRules';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot27;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'threads';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot28;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'applicationCommands';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot29;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isInitialLoading';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot30;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'isLoading';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot31;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'isLoadingNextPage';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot32;
            return var1;
        };
        var5['get'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'hasOlderLogs';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot33;
            return var1;
        };
        var5['get'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'hasError';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot34;
            return var1;
        };
        var5['get'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'userIds';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot24;
            return var1;
        };
        var5['get'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'userIdFilter';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot35;
            return var1;
        };
        var5['get'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'targetIdFilter';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot37;
            return var1;
        };
        var5['get'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'actionFilter';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot36;
            return var1;
        };
        var5['get'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'deletedTargets';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot38;
            return var1;
        };
        var5['get'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'groupedFetchCount';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot39;
            return var1;
        };
        var5['get'] = var6;
        var1[18] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GuildSettingsAuditLogStore';
    var8['displayName'] = var2;
    var2 = 15;
    var2 = var6[var2];
    var38 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleStartFetchingLogs() {
        var1 = true;
        _closure1_slot31 = var1;
        var1 = undefined;
        return var1;
    };
    var2['AUDIT_LOG_FETCH_START'] = var10;
    var10 = function handleFetchedLogs(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = arg1;
            var1 = 0;
            _closure1_slot39 = var1;
            var2 = false;
            _closure1_slot30 = var2;
            _closure1_slot31 = var2;
            var1 = true;
            _closure1_slot33 = var1;
            _closure1_slot34 = var2;
            var6 = _closure1_slot43;
            var5 = var4.logs;
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            _closure1_slot22 = var5;
            var5 = var4.integrations;
            _closure1_slot23 = var5;
            var5 = var4.webhooks;
            _closure1_slot25 = var5;
            var5 = var4.guildScheduledEvents;
            _closure1_slot26 = var5;
            var5 = var4.automodRules;
            var6 = null;
            if(!(var6 == var5)) { _fun0009_ip = 130; continue _fun0009 }
case 123:
            var5 = new Array(0);
case 130:
            _closure1_slot27 = var5;
            var5 = var4.threads;
            _closure1_slot28 = var5;
            var5 = var4.applicationCommands;
            _closure1_slot29 = var5;
            var4 = var4.logs;
            var5 = var4.length;
            var4 = _closure1_slot18;
            if(!(var5 < var4)) { _fun0009_ip = 131; continue _fun0009 }
case 132:
            _closure1_slot33 = var2;
case 131:
            return var1;
        }
    };
    var2['AUDIT_LOG_FETCH_SUCCESS'] = var10;
    var10 = function handleFetchedLogsFail() {
        var1 = false;
        _closure1_slot31 = var1;
        var1 = true;
        _closure1_slot34 = var1;
        var1 = new Array(0);
        _closure1_slot22 = var1;
        var1 = undefined;
        return var1;
    };
    var2['AUDIT_LOG_FETCH_FAIL'] = var10;
    var10 = function handleStartFetchNextPage(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var1 = var1.isGroupedFetch;
            var3 = true;
            _closure1_slot32 = var3;
            if(!var1) { _fun0010_ip = 133; continue _fun0010 }
case 134:
            var1 = _closure1_slot39;
            var1 = var1 + 1;
            _closure1_slot39 = var1;
case 133:
            var1 = undefined;
            return var1;
        }
    };
    var2['AUDIT_LOG_FETCH_NEXT_PAGE_START'] = var10;
    var10 = function handleFetchedNextPage(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var4 = var1.logs;
            var9 = var1.integrations;
            var8 = var1.webhooks;
            var7 = var1.guildScheduledEvents;
            var6 = var1.automodRules;
            var5 = var1.threads;
            var3 = var1.applicationCommands;
            var1 = false;
            _closure1_slot32 = var1;
            _closure1_slot23 = var9;
            _closure1_slot25 = var8;
            _closure1_slot26 = var7;
            _closure1_slot27 = var6;
            _closure1_slot28 = var5;
            _closure1_slot29 = var3;
            var3 = var4.length;
            var5 = 0;
            var3 = var5 === var3;
            if(var3) { _fun0011_ip = 129; continue _fun0011 }
case 135:
            var7 = var4.length;
            var6 = _closure1_slot18;
            var3 = var7 < var6;
case 129:
            if(!var3) { _fun0011_ip = 136; continue _fun0011 }
case 137:
            _closure1_slot33 = var1;
case 136:
            var1 = var4.length;
            if(!(var1 > var5)) { _fun0011_ip = 18; continue _fun0011 }
case 138:
            var3 = _closure1_slot43;
            var1 = undefined;
            var4 = var3.bind(var1)(var4);
            var12 = _closure1_slot22;
            var1 = new Array(0);
            var13 = var1;
            var11 = 0;
            var11 = arraySpread(var13, var12, var11);
            var13 = var1;
            var12 = var4;
            var3 = arraySpread(var13, var12, var11);
            _closure1_slot22 = var1;
case 18:
            var1 = undefined;
            return var1;
        }
    };
    var2['AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS'] = var10;
    var10 = function handleFetchNextPageFail() {
        var1 = false;
        _closure1_slot32 = var1;
        var1 = undefined;
        return var1;
    };
    var2['AUDIT_LOG_FETCH_NEXT_PAGE_FAIL'] = var10;
    var10 = function handleFilterByAction(arg1) {
        var1 = arg1;
        var2 = var1.action;
        _closure1_slot36 = var2;
        var1 = undefined;
        return var1;
    };
    var2['AUDIT_LOG_FILTER_BY_ACTION'] = var10;
    var10 = function handleFilterByUser(arg1) {
        var1 = arg1;
        var2 = var1.userId;
        _closure1_slot35 = var2;
        var1 = undefined;
        return var1;
    };
    var2['AUDIT_LOG_FILTER_BY_USER'] = var10;
    var10 = function handleFilterByTarget(arg1) {
        var1 = arg1;
        var2 = var1.targetId;
        _closure1_slot37 = var2;
        var1 = undefined;
        return var1;
    };
    var2['AUDIT_LOG_FILTER_BY_TARGET'] = var10;
    var2['GUILD_SETTINGS_SET_SECTION'] = var9;
    var9 = function handleSettingsInit(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var1 = var1.section;
        _closure1_slot21 = var3;
        var3 = null;
        _closure1_slot37 = var3;
        var3 = _closure1_slot44;
        var2 = {};
        var2['section'] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var2['GUILD_SETTINGS_INIT'] = var9;
    var4 = function handleSettingsClose() {
        var1 = new Array(0);
        _closure1_slot22 = var1;
        var1 = new Array(0);
        _closure1_slot24 = var1;
        var1 = _closure1_slot14;
        var1 = var1.ALL;
        _closure1_slot36 = var1;
        var1 = null;
        _closure1_slot35 = var1;
        _closure1_slot37 = var1;
        var1 = {};
        _closure1_slot38 = var1;
        var1 = 0;
        _closure1_slot39 = var1;
        var1 = true;
        _closure1_slot30 = var1;
        var1 = new Array(0);
        _closure1_slot23 = var1;
        var1 = new Array(0);
        _closure1_slot25 = var1;
        var1 = new Array(0);
        _closure1_slot26 = var1;
        var1 = new Array(0);
        _closure1_slot27 = var1;
        var1 = new Array(0);
        _closure1_slot28 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_SETTINGS_CLOSE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var39 = var4;
    var37 = var2;
    var2 = new var39[var8](var38, var37, var36);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/audit_log/GuildSettingsAuditLogStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
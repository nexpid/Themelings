// app/modules/messages/native/renderer/ChatManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var4 = var2.Changeset;
    var _closure1_slot4 = var4;
    var2 = var2.RowType;
    var _closure1_slot5 = var2;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function ChatManager() {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = null;
            var3['_messages'] = var2;
            var4 = new Array(0);
            var3['_rows'] = var4;
            var3['messages'] = var2;
            var2 = new Array(0);
            var3['rows'] = var2;
            var2 = 0;
            var3['rowIndex'] = var2;
            var2 = false;
            var3['maybeRemove'] = var2;
            var2 = {};
            var3['uploadProgressIds'] = var2;
            var2 = {};
            var3['embeddedActivities'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'getPreviousMessages';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var1 = var1._messages;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(13);
        var2[0] = var1;
        var1 = {};
        var6 = 'getPreviousRows';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1._rows;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'getBlocked';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var4 = var2._messages;
                var1 = null;
                if(!(var1 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = global;
                var6 = var4.Array;
                var5 = var6.isArray;
                var4 = var2._messages;
                var4 = var5.bind(var6)(var4);
                if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var2 = var2._messages;
                var4 = var2._map;
                var2 = var3.id;
                var2 = var4[var2];
                var1 = var1 != var2;
                if(!var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var2 = var2.blocked;
                if(var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                var3 = var3.blocked;
                var2 = !var3;
case 7:
                var1 = !var2;
case 5:
                return var1;
case 2:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getIgnored';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var4 = var2._messages;
                var1 = null;
                if(!(var1 != var4)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var4 = global;
                var6 = var4.Array;
                var5 = var6.isArray;
                var4 = var2._messages;
                var4 = var5.bind(var6)(var4);
                if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                var2 = var2._messages;
                var4 = var2._map;
                var2 = var3.id;
                var2 = var4[var2];
                var1 = var1 != var2;
                if(!var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var2 = var2.ignored;
                if(var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var3 = var3.ignored;
                var2 = !var3;
case 7:
                var1 = !var2;
case 5:
                return var1;
case 2:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'clear';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = null;
            var2['_messages'] = var1;
            var1 = new Array(0);
            var2['_rows'] = var1;
            var1 = {};
            var2['embeddedActivities'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'finishUpdate';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var2 = this;
            var1 = arg1;
            var2['_messages'] = var1;
            var1 = arg2;
            var2['_rows'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'getLastRow';
        var1['key'] = var6;
        var6 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = this;
                var1 = var2.rows;
                var4 = null;
                var3 = var4 != var1;
                var1 = null;
                if(!var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var3 = var2.rows;
                var5 = var3.length;
                var3 = 0;
                var3 = var5 > var3;
                var1 = null;
                if(!var3) { _fun0003_ip = 9; continue _fun0003 }
case 11:
                var3 = var2.rows;
                var2 = var2.rows;
                var4 = var2.length;
                var2 = 1;
                var2 = var4 - var2;
                var1 = var3[var2];
case 9:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'setup';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = this;
                var1 = arg1;
                var3['messages'] = var1;
                var1 = new Array(0);
                var3['rows'] = var1;
                var1 = 0;
                var3['rowIndex'] = var1;
                var2 = var3._messages;
                var1 = null;
                var5 = var1 == var2;
                var1 = undefined;
                var4 = undefined;
                if(var5) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var4 = var2.length;
case 12:
                var2 = var3.messages;
                var2 = var2.length;
                var2 = var4 === var2;
                var3['maybeRemove'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'determineChangeTypeForUploadProgress';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg1;
                var3 = this;
                var2 = var3.uploadProgressIds;
                var1 = var5.id;
                var2 = var2[var1];
                var8 = null;
                if(!(var8 == var2)) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                var4 = var3.uploadProgressIds;
                var1 = var5.id;
                var4[var1] = var5;
                var1 = _closure1_slot4;
                var1 = var1.INSERT;
                _fun0005_ip = 16; continue _fun0005;
case 14:
                var7 = var2.items;
                var9 = var8 == var7;
                var4 = undefined;
                if(var9) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var4 = var7.length;
case 17:
                var7 = var5.items;
                var8 = var8 == var7;
                var6 = undefined;
                if(var8) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var6 = var7.length;
case 19:
                if(!(var4 === var6)) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var6 = var2.compressionProgress;
                var4 = var5.compressionProgress;
                if(!(var6 === var4)) { _fun0005_ip = 21; continue _fun0005 }
case 23:
                var6 = var2.progress;
                var4 = var5.progress;
                if(!(var6 === var4)) { _fun0005_ip = 21; continue _fun0005 }
case 24:
                var4 = var2.currentSize;
                var2 = var5.currentSize;
                if(!(var4 === var2)) { _fun0005_ip = 21; continue _fun0005 }
case 25:
                var2 = _closure1_slot4;
                var2 = var2.NOOP;
                _fun0005_ip = 26; continue _fun0005;
case 21:
                var4 = var3.uploadProgressIds;
                var3 = var5.id;
                var4[var3] = var5;
                var3 = _closure1_slot4;
                var2 = var3.UPDATE;
case 26:
                var1 = var2;
case 16:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'determineChangeTypeForEmbeddedActivity';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var1 = this;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 3;
                var3 = var4[var3];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var4 = var3.bind(var4)(var5);
                var3 = var1.embeddedActivities;
                var3 = var3[var4];
                var1 = var1.embeddedActivities;
                var1[var4] = var5;
                var1 = null;
                if(!(var1 == var3)) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                var1 = _closure1_slot4;
                var1 = var1.INSERT;
                _fun0006_ip = 29; continue _fun0006;
case 27:
                var2 = _closure1_slot4;
                var1 = var2.UPDATE;
case 29:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'determineChangeType';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var7 = arguments[1];
                var8 = this;
                var5 = var1.message;
                var6 = var1.updateMessageIds;
                var2 = var1.forceRender;
                var4 = undefined;
                if(!(var7 === var4)) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                var7 = false;
case 30:
                var3 = var8._messages;
                var1 = null;
                if(!(var1 != var3)) { _fun0007_ip = 32; continue _fun0007 }
case 13:
                var3 = global;
                var10 = var3.Array;
                var9 = var10.isArray;
                var3 = var8._messages;
                var3 = var9.bind(var10)(var3);
                if(var3) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                var3 = var8._messages;
                var3 = var3._map;
                if(!(var1 != var3)) { _fun0007_ip = 35; continue _fun0007 }
case 36:
                var3 = var8._messages;
                var9 = var3._map;
                var3 = var5.id;
                var10 = var9[var3];
                var3 = var10;
                if(!(var1 == var10)) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                var9 = var5.nonce;
                var3 = var10;
                if(!(var1 != var9)) { _fun0007_ip = 37; continue _fun0007 }
case 39:
                var8 = var8._messages;
                var9 = var8._map;
                var8 = var5.nonce;
                var3 = var9[var8];
                if(!(var1 == var3)) { _fun0007_ip = 40; continue _fun0007 }
case 37:
                if(!(var1 != var3)) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                if(!var7) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                var7 = var3.blocked;
                if(!var7) { _fun0007_ip = 43; continue _fun0007 }
case 45:
                var7 = var5.blocked;
                if(!var7) { _fun0007_ip = 41; continue _fun0007 }
case 43:
                if(var2) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                if(!(var1 != var6)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                var2 = var6.has;
                var1 = var5.id;
                var1 = var2.bind(var6)(var1);
                if(var1) { _fun0007_ip = 46; continue _fun0007 }
case 48:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 4;
                var1 = var7[var1];
                var1 = var6.bind(var4)(var1);
                var1 = var1.bind(var4)(var3, var5);
                var2 = _closure1_slot4;
                if(var1) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                var1 = var2.UPDATE;
                _fun0007_ip = 52; continue _fun0007;
case 50:
                var1 = var2.NOOP;
case 52:
                _fun0007_ip = 53; continue _fun0007;
case 46:
                var2 = _closure1_slot4;
                var1 = var2.UPDATE;
case 53:
                _fun0007_ip = 54; continue _fun0007;
case 41:
                var2 = _closure1_slot4;
                var1 = var2.INSERT;
case 54:
                _fun0007_ip = 55; continue _fun0007;
case 40:
                var2 = _closure1_slot4;
                var1 = var2.UPDATE;
case 55:
                return var1;
case 35:
                var1 = _closure1_slot4;
                var1 = var1.NOOP;
                return var1;
case 33:
                var1 = _closure1_slot4;
                var1 = var1.NOOP;
                return var1;
case 32:
                var1 = _closure1_slot4;
                var1 = var1.NOOP;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'createRow';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var2 = this;
                var4 = var1.type;
                var3 = _closure1_slot5;
                var3 = var3.MESSAGE;
                if(!(var4 === var3)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                var4 = var1.message;
                var3 = null;
                if(!(var3 == var4)) { _fun0008_ip = 56; continue _fun0008 }
case 58:
                var3 = undefined;
                return var3;
case 56:
                var3 = var2.rowIndex;
                var3 = parseFloat(var3);
                var4 = var3 + 1;
                var2['rowIndex'] = var4;
                var1['index'] = var3;
                var3 = var2.rows;
                var2 = var3.push;
                var2 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'createChangeset';
        var1['key'] = var6;
        var5 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = this;
                var4 = new Array(0);
                var1 = var3._messages;
                var14 = null;
                if(!(var14 != var1)) { _fun0009_ip = 59; continue _fun0009 }
case 60:
                var1 = var3._rows;
                var1 = var1.length;
                var13 = 0;
                var1 = var13 < var1;
                var11 = undefined;
                var10 = undefined;
                var9 = 0;
                var8 = 0;
                var7 = 0;
                var6 = undefined;
                var5 = undefined;
                var2 = undefined;
                if(var1) { _fun0009_ip = 20; continue _fun0009 }
case 61:
                var1 = var3.rows;
                var1 = var1.length;
                var1 = var13 < var1;
                var11 = undefined;
                var10 = undefined;
                var9 = 0;
                var8 = 0;
                var7 = 0;
                var6 = undefined;
                var5 = undefined;
                var2 = undefined;
                if(!var1) { _fun0009_ip = 62; continue _fun0009 }
case 20:
                var1 = var3.rows;
                var1 = var1.length;
                if(!(var9 === var1)) { _fun0009_ip = 63; continue _fun0009 }
case 64:
                var15 = var4.push;
                var1 = {};
                var16 = _closure1_slot4;
                var16 = var16.REMOVE;
                var1['changeType'] = var16;
                var16 = var9 + var8;
                var1['index'] = var16;
                var1 = var15.bind(var4)(var1);
                var20 = var8 + 1;
                var19 = var7 + 1;
                var22 = var11;
                var21 = var10;
                var15 = var9;
                var18 = var6;
                var17 = var5;
                var16 = var2;
                _fun0009_ip = 65; continue _fun0009;
case 63:
                var1 = var3._rows;
                var1 = var1.length;
                if(!(var7 === var1)) { _fun0009_ip = 46; continue _fun0009 }
case 66:
                var1 = var3.rows;
                var23 = var1[var9];
                var1 = _closure1_slot4;
                var1 = var1.INSERT;
                var23['changeType'] = var1;
                var1 = var9 + var8;
                var23['index'] = var1;
                var1 = var4.push;
                var1 = var1.bind(var4)(var23);
                var15 = var9 + 1;
                var22 = var11;
                var21 = var10;
                var20 = var8;
                var19 = var7;
                var18 = var6;
                var17 = var5;
                var16 = var2;
                _fun0009_ip = 65; continue _fun0009;
case 46:
                var1 = var3._rows;
                var23 = var1[var7];
                var1 = var3.rows;
                var1 = var1[var9];
                var26 = var1.changeType;
                var24 = _closure1_slot4;
                var24 = var24.NOOP;
                if(!(var24 !== var26)) { _fun0009_ip = 67; continue _fun0009 }
case 55:
                var24 = _closure1_slot4;
                var24 = var24.UPDATE;
                if(!(var24 !== var26)) { _fun0009_ip = 67; continue _fun0009 }
case 68:
                var24 = _closure1_slot4;
                var24 = var24.INSERT;
                var24 = var9 + var8;
                var1['index'] = var24;
                var24 = var4.push;
                var24 = var24.bind(var4)(var1);
                var15 = var9 + 1;
                var22 = var11;
                var21 = var10;
                var20 = var8;
                var19 = var7;
                var18 = var23;
                var17 = var1;
                var16 = var2;
                _fun0009_ip = 65; continue _fun0009;
case 67:
                var26 = var1.type;
                var24 = var23.type;
                if(!(var26 === var24)) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                var26 = var1.type;
                var24 = _closure1_slot5;
                var24 = var24.SEPARATOR;
                if(!(var26 === var24)) { _fun0009_ip = 71; continue _fun0009 }
case 72:
                var26 = var1.id;
                var24 = var23.id;
                if(!(var26 === var24)) { _fun0009_ip = 69; continue _fun0009 }
case 71:
                var26 = var1.type;
                var24 = _closure1_slot5;
                var24 = var24.LOADING;
                if(!(var26 === var24)) { _fun0009_ip = 73; continue _fun0009 }
case 74:
                var26 = var1.id;
                var24 = var23.id;
                if(!(var26 === var24)) { _fun0009_ip = 69; continue _fun0009 }
case 73:
                var26 = var1.type;
                var24 = _closure1_slot5;
                var24 = var24.MESSAGE;
                if(!(var26 === var24)) { _fun0009_ip = 75; continue _fun0009 }
case 76:
                var24 = var1.message;
                if(!(var14 != var24)) { _fun0009_ip = 75; continue _fun0009 }
case 77:
                var24 = var23.message;
                if(!(var14 != var24)) { _fun0009_ip = 75; continue _fun0009 }
case 78:
                var24 = var1.message;
                var26 = var24.id;
                var24 = var23.message;
                var24 = var24.id;
                if(!(var26 !== var24)) { _fun0009_ip = 75; continue _fun0009 }
case 79:
                var24 = var1.message;
                var26 = var24.nonce;
                var24 = var23.message;
                var24 = var24.id;
                if(!(var26 === var24)) { _fun0009_ip = 69; continue _fun0009 }
case 75:
                var26 = var1.changeType;
                var24 = _closure1_slot4;
                var24 = var24.NOOP;
                var30 = var11;
                var29 = var10;
                if(!(var26 === var24)) { _fun0009_ip = 80; continue _fun0009 }
case 81:
                var26 = var1.type;
                var24 = _closure1_slot5;
                var24 = var24.SEPARATOR;
                if(!(var26 === var24)) { _fun0009_ip = 82; continue _fun0009 }
case 83:
                var26 = var1.text;
                var24 = var23.text;
                var28 = var11;
                var27 = var10;
                if(!(var26 === var24)) { _fun0009_ip = 84; continue _fun0009 }
case 82:
                var26 = var1.type;
                var24 = _closure1_slot5;
                var24 = var24.LOADING;
                if(!(var26 === var24)) { _fun0009_ip = 85; continue _fun0009 }
case 86:
                var26 = var1.isLoading;
                var24 = var23.isLoading;
                var28 = var11;
                var27 = var10;
                if(!(var26 === var24)) { _fun0009_ip = 84; continue _fun0009 }
case 85:
                var26 = var1.type;
                var24 = _closure1_slot5;
                var24 = var24.BLOCKED_GROUP;
                if(!(var26 !== var24)) { _fun0009_ip = 87; continue _fun0009 }
case 88:
                var26 = var1.type;
                var24 = _closure1_slot5;
                var24 = var24.IGNORED_GROUP;
                if(!(var26 === var24)) { _fun0009_ip = 89; continue _fun0009 }
case 87:
                var26 = var1.text;
                var24 = var23.text;
                var28 = var11;
                var27 = var10;
                if(!(var26 === var24)) { _fun0009_ip = 84; continue _fun0009 }
case 90:
                var26 = var1.revealed;
                var24 = var23.revealed;
                var28 = var11;
                var27 = var10;
                if(!(var26 === var24)) { _fun0009_ip = 84; continue _fun0009 }
case 89:
                var26 = var1.type;
                var24 = _closure1_slot5;
                var24 = var24.MESSAGE;
                if(!(var26 === var24)) { _fun0009_ip = 91; continue _fun0009 }
case 92:
                var26 = var1.separatorBefore;
                var24 = var23.separatorBefore;
                if(!(var26 !== var24)) { _fun0009_ip = 91; continue _fun0009 }
case 93:
                var24 = var3.maybeRemove;
                var28 = var11;
                var27 = var10;
                if(!var24) { _fun0009_ip = 84; continue _fun0009 }
case 91:
                var32 = var1.message;
                var24 = var14 == var32;
                var26 = undefined;
                if(var24) { _fun0009_ip = 94; continue _fun0009 }
case 95:
                var26 = var32.isFirst;
case 94:
                var31 = var23.message;
                var33 = var14 == var31;
                var24 = undefined;
                if(var33) { _fun0009_ip = 96; continue _fun0009 }
case 97:
                var24 = var31.isFirst;
case 96:
                var30 = var32;
                var29 = var31;
                var28 = var30;
                var27 = var29;
                if(!(var26 === var24)) { _fun0009_ip = 84; continue _fun0009 }
case 80:
                var24 = var9 + var8;
                var1['index'] = var24;
                var24 = var4.push;
                var24 = var24.bind(var4)(var1);
                var19 = var7 + 1;
                var15 = var9 + 1;
                var22 = var30;
                var21 = var29;
                var20 = var8;
                var18 = var23;
                var17 = var1;
                var16 = var2;
                _fun0009_ip = 65; continue _fun0009;
case 84:
                var24 = _closure1_slot4;
                var24 = var24.UPDATE;
                var1['changeType'] = var24;
                var24 = var9 + var8;
                var1['index'] = var24;
                var24 = var4.push;
                var24 = var24.bind(var4)(var1);
                var19 = var7 + 1;
                var15 = var9 + 1;
                var22 = var28;
                var21 = var27;
                var20 = var8;
                var18 = var23;
                var17 = var1;
                var16 = var2;
                _fun0009_ip = 65; continue _fun0009;
case 69:
                var26 = var4.push;
                var24 = {};
                var27 = _closure1_slot4;
                var27 = var27.REMOVE;
                var24['changeType'] = var27;
                var27 = var9 + var8;
                var24['index'] = var27;
                var24 = var26.bind(var4)(var24);
                var24 = var9 + var8;
                if(!(var24 > var13)) { _fun0009_ip = 98; continue _fun0009 }
case 99:
                var26 = var9 + var8;
                var24 = 1;
                var24 = var26 - var24;
                var24 = var4[var24];
                var27 = var24.changeType;
                var26 = _closure1_slot4;
                var26 = var26.NOOP;
                var26 = var27 !== var26;
                if(var26) { _fun0009_ip = 100; continue _fun0009 }
case 101:
                var28 = var24.type;
                var27 = _closure1_slot5;
                var27 = var27.MESSAGE;
                var26 = var28 !== var27;
case 100:
                if(var26) { _fun0009_ip = 102; continue _fun0009 }
case 103:
                var26 = var3.maybeRemove;
case 102:
                var2 = var24;
                if(var26) { _fun0009_ip = 98; continue _fun0009 }
case 104:
                var25 = _closure1_slot4;
                var25 = var25.UPDATE;
                var24['changeType'] = var25;
                var2 = var24;
case 98:
                var19 = var7 + 1;
                var20 = var8 + 1;
                var16 = var2;
                var22 = var11;
                var21 = var10;
                var15 = var9;
                var18 = var23;
                var17 = var1;
case 65:
                var1 = var3._rows;
                var1 = var1.length;
                var11 = var22;
                var10 = var21;
                var9 = var15;
                var8 = var20;
                var7 = var19;
                var6 = var18;
                var5 = var17;
                var2 = var16;
                if(var19 < var1) { _fun0009_ip = 20; continue _fun0009 }
case 105:
                var1 = var3.rows;
                var1 = var1.length;
                var11 = var22;
                var10 = var21;
                var8 = var20;
                var7 = var19;
                var6 = var18;
                var5 = var17;
                var2 = var16;
                var9 = var15;
                if(var9 < var1) { _fun0009_ip = 20; continue _fun0009 }
case 62:
                var2 = var4.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.changeType;
                    var1 = _closure1_slot4;
                    var1 = var1.NOOP;
                    var1 = var2 !== var1;
                    return var1;
                };
                var1 = var2.bind(var4)(var1);
                _fun0009_ip = 106; continue _fun0009;
case 59:
                var1 = var3.rows;
case 106:
                var2 = var3.messages;
                var3['_messages'] = var2;
                var2 = var3.rows;
                var3['_rows'] = var2;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[12] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var2.bind(var1)();
    var2 = {};
    var8 = function determineChangeType() {
        var1 = _closure1_slot4;
        var1 = var1.NOOP;
        return var1;
    };
    var2['determineChangeType'] = var8;
    var8 = function determineChangeTypeForUploadProgress() {
        var1 = _closure1_slot4;
        var1 = var1.NOOP;
        return var1;
    };
    var2['determineChangeTypeForUploadProgress'] = var8;
    var8 = function determineChangeTypeForEmbeddedActivity() {
        var1 = _closure1_slot4;
        var1 = var1.NOOP;
        return var1;
    };
    var2['determineChangeTypeForEmbeddedActivity'] = var8;
    var8 = function getBlocked() {
        var1 = false;
        return var1;
    };
    var2['getBlocked'] = var8;
    var5 = function getIgnored() {
        var1 = false;
        return var1;
    };
    var2['getIgnored'] = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/native/renderer/ChatManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['MockChatManager'] = var2;
    return var1;
})();
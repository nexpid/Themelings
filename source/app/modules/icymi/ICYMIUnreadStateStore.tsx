// app/modules/icymi/ICYMIUnreadStateStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
    var _closure1_slot10 = var1;
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
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.Millis;
    var8 = var2.DAY;
    var2 = 7;
    var2 = var2 * var8;
    var _closure1_slot7 = var2;
    var2 = {};
    var8 = {};
    var2['readIdToTimestampMap'] = var8;
    var _closure1_slot8 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.DeviceSettingsStore;
    var2 = function(arg1) {
        var4 = function ICYMIUnreadStateStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 41; continue _fun0005;
case 39:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 41:
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
        var1 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = arg1;
                var3 = null;
                if(!(var3 != var4)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                var2 = var4.readIdToTimestampMap;
                if(!(var3 == var2)) { _fun0006_ip = 44; continue _fun0006 }
case 42:
                var2 = {};
                var3 = {};
                var2['readIdToTimestampMap'] = var3;
                _fun0006_ip = 45; continue _fun0006;
case 44:
                var3 = {};
                var4 = var4.readIdToTimestampMap;
                var3['readIdToTimestampMap'] = var4;
                var2 = var3;
case 45:
                _closure1_slot8 = var2;
                var2 = global;
                var4 = var2.Date;
                var3 = var4.now;
                var4 = var3.bind(var4)();
                var3 = _closure1_slot7;
                var3 = var4 - var3;
                var _closure3_slot0 = var3;
                var4 = var2.Object;
                var3 = var4.keys;
                var2 = _closure1_slot8;
                var2 = var2.readIdToTimestampMap;
                var3 = var3.bind(var4)(var2);
                var2 = var3.filter;
                var1 = function(arg1) {
                    var1 = _closure1_slot8;
                    var2 = var1.readIdToTimestampMap;
                    var1 = arg1;
                    var2 = var2[var1];
                    var1 = _closure3_slot0;
                    var1 = var2 < var1;
                    return var1;
                };
                var3 = var2.bind(var3)(var1);
                var2 = _closure1_slot10;
                var1 = undefined;
                var4 = var2.bind(var1)(var3);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                var6 = var3.value;
                var2 = _closure1_slot8;
                var2 = var2.readIdToTimestampMap;
                var2 = delete var2[var6];
                var6 = var4.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0006_ip = 47; continue _fun0006 }
case 46:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getReadTimestamp';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = _closure1_slot8;
            var2 = var1.readIdToTimestampMap;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getUserAgnosticState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ICYMIUnreadStateStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleTabAck(arg1) {
        var2 = arg1;
        var3 = var2.items;
        var2 = var2.override;
        var _closure2_slot0 = var2;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var4 = null;
                var2 = var4 != var1;
                if(!var2) { _fun0007_ip = 40; continue _fun0007 }
case 48:
                var3 = _closure1_slot8;
                var5 = var3.readIdToTimestampMap;
                var3 = var1.id;
                var3 = var5[var3];
                var3 = var4 == var3;
                if(var3) { _fun0007_ip = 45; continue _fun0007 }
case 49:
                var3 = _closure2_slot0;
case 45:
                var2 = var3;
case 40:
                if(!var2) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                var2 = _closure1_slot8;
                var3 = var2.readIdToTimestampMap;
                var2 = var1.id;
                var1 = var1.timestamp;
                var3[var2] = var1;
case 50:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['ICYMI_ACK_ITEMS'] = var9;
    var9 = function handleLoadDehydrated(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var3 = var1.items;
            var2 = _closure1_slot10;
            var1 = undefined;
            var9 = var2.bind(var1)(var3);
            var3 = var9.bind(var1)();
            var2 = var3.done;
            var8 = 0;
            var7 = 7;
            var6 = null;
            var5 = 6;
            var4 = var3;
            var3 = undefined;
            if(var2) { _fun0008_ip = 52; continue _fun0008 }
case 53:
            var2 = var4.value;
            var12 = var2.type;
            var13 = _closure1_slot0;
            var11 = _closure1_slot1;
            var11 = var11[var5];
            var11 = var13.bind(var1)(var11);
            var11 = var11.ICYMIItemTypes;
            var11 = var11.MESSAGE;
            if(!(var12 !== var11)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
            var13 = var2.type;
            var12 = _closure1_slot0;
            var11 = _closure1_slot1;
            var11 = var11[var5];
            var11 = var12.bind(var1)(var11);
            var11 = var11.ICYMIItemTypes;
            var12 = var11.SUMMARY;
            var11 = var3;
            if(!(var13 === var12)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
            var12 = _closure1_slot8;
            var13 = var12.readIdToTimestampMap;
            var12 = var2.id;
            var12 = var13[var12];
            var12 = var6 != var12;
            if(var12) { _fun0008_ip = 58; continue _fun0008 }
case 21:
            var14 = _closure1_slot0;
            var13 = _closure1_slot1;
            var13 = var13[var7];
            var16 = var14.bind(var1)(var13);
            var15 = var16.isItemUnreadInChannel;
            var13 = var2.data;
            var14 = var13.channel_id;
            var13 = var2.data;
            var13 = var13.summary_id;
            var12 = var15.bind(var16)(var14, var13);
case 58:
            var11 = var3;
            if(var12) { _fun0008_ip = 56; continue _fun0008 }
case 59:
            var12 = _closure1_slot8;
            var13 = var12.readIdToTimestampMap;
            var12 = var2.id;
            var13[var12] = var8;
            var11 = var3;
            _fun0008_ip = 56; continue _fun0008;
case 54:
            var12 = _closure1_slot8;
            var13 = var12.readIdToTimestampMap;
            var12 = var2.id;
            var12 = var13[var12];
            var12 = var6 != var12;
            if(var12) { _fun0008_ip = 60; continue _fun0008 }
case 61:
            var13 = var2.data;
            var13 = var13.message_context;
            var15 = var6 == var13;
            var14 = undefined;
            if(var15) { _fun0008_ip = 62; continue _fun0008 }
case 63:
            var14 = var13.external_content_application_id;
case 62:
            var12 = var6 != var14;
            var3 = var13;
case 60:
            if(var12) { _fun0008_ip = 64; continue _fun0008 }
case 65:
            var14 = _closure1_slot0;
            var13 = _closure1_slot1;
            var13 = var13[var7];
            var16 = var14.bind(var1)(var13);
            var15 = var16.isItemUnreadInChannel;
            var13 = var2.data;
            var14 = var13.channel_id;
            var13 = var2.data;
            var13 = var13.message_id;
            var12 = var15.bind(var16)(var14, var13);
case 64:
            var11 = var3;
            if(var12) { _fun0008_ip = 56; continue _fun0008 }
case 66:
            var12 = _closure1_slot8;
            var12 = var12.readIdToTimestampMap;
            var2 = var2.id;
            var12[var2] = var8;
            var11 = var3;
case 56:
            var12 = var9.bind(var1)();
            var2 = var12.done;
            var3 = var11;
            var4 = var12;
            if(!var2) { _fun0008_ip = 53; continue _fun0008 }
case 52:
            return var1;
        }
    };
    var2['LOAD_ICYMI_DEHYDRATED'] = var9;
    var4 = function handleClearReadStates() {
        var2 = _closure1_slot8;
        var1 = {};
        var2['readIdToTimestampMap'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['CLEAR_ICYMI_READ_STATES'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/ICYMIUnreadStateStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
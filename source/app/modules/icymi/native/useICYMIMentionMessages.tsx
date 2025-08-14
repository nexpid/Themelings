// app/modules/icymi/native/useICYMIMentionMessages.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
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
            var9 = _closure1_slot10;
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
            var7 = _closure1_slot10;
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
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var _closure1_slot10 = var1;
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
    var _closure1_slot3 = var2;
    var2 = 1;
    var5 = var7[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var5 = var7[var2];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/icymi/native/useICYMIMentionMessages.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useMentionMessageItems(arg1) {
        var2 = arg1;
        var14 = var2.isFocused;
        var _closure2_slot0 = var14;
        var8 = var2.mergedNotificationsEnabled;
        var _closure2_slot1 = var8;
        var3 = _closure1_slot0;
        var17 = _closure1_slot2;
        var2 = 6;
        var5 = var17[var2];
        var10 = undefined;
        var9 = var3.bind(var10)(var5);
        var7 = var9.useStateFromStoresObject;
        var5 = _closure1_slot5;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = function() {
            var1 = {};
            var2 = _closure1_slot5;
            var3 = var2.getMentions;
            var3 = var3.bind(var2)();
            var1['messages'] = var3;
            var3 = var2.loading;
            var1['loading'] = var3;
            var3 = var2.hasLoadedEver;
            var1['hasLoadedEver'] = var3;
            var3 = var2.everyoneFilter;
            var1['everyoneFilter'] = var3;
            var2 = var2.roleFilter;
            var1['roleFilter'] = var2;
            return var1;
        };
        var6 = var7.bind(var9)(var6, var5);
        var5 = var6.messages;
        var _closure2_slot2 = var5;
        var13 = var6.hasLoadedEver;
        var _closure2_slot3 = var13;
        var7 = var6.roleFilter;
        var _closure2_slot4 = var7;
        var9 = var6.everyoneFilter;
        var _closure2_slot5 = var9;
        var6 = var17[var2];
        var15 = var3.bind(var10)(var6);
        var12 = var15.useStateFromStoresArray;
        var6 = _closure1_slot7;
        var11 = new Array(2);
        var11[0] = var6;
        var6 = _closure1_slot6;
        var11[1] = var6;
        var6 = new Array(2);
        var6[0] = var5;
        var6[1] = var8;
        var5 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = _closure2_slot2;
                var10 = null;
                if(!(var10 != var1)) { _fun0004_ip = 242; continue _fun0004 }
 16:
                var1 = _closure2_slot1;
                if(!var1) { _fun0004_ip = 242; continue _fun0004 }
 26:
                var1 = new Array(0);
                var3 = _closure1_slot9;
                var2 = _closure2_slot2;
                var8 = undefined;
                var7 = var3.bind(var8)(var2);
                var3 = var7.bind(var8)();
                var2 = var3.done;
                var6 = 7;
                var5 = 0;
                var4 = var3;
                var3 = undefined;
                if(var2) { _fun0004_ip = 240; continue _fun0004 }
 73:
                var12 = var4.value;
                var13 = _closure1_slot7;
                var11 = var13.getTrackedAckMessageId;
                var2 = var12.channel_id;
                var14 = var11.bind(var13)(var2);
                var11 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var13 = var11.bind(var8)(var2);
                var11 = var13.compare;
                var2 = var12.id;
                var2 = var11.bind(var13)(var2, var14);
                if(!(!(var2 <= var5))) { _fun0004_ip = 222; continue _fun0004 }
 136:
                var13 = _closure1_slot6;
                var11 = var13.getChannel;
                var2 = var12.getChannelId;
                var2 = var2.bind(var12)();
                var2 = var11.bind(var13)(var2);
                var11 = var10 == var2;
                if(var11) { _fun0004_ip = 177; continue _fun0004 }
 167:
                var13 = var2.isArchivedThread;
                var11 = var13.bind(var2)();
 177:
                if(var11) { _fun0004_ip = 190; continue _fun0004 }
 180:
                var13 = var2.isGroupDM;
                var11 = var13.bind(var2)();
 190:
                if(var11) { _fun0004_ip = 203; continue _fun0004 }
 193:
                var13 = var2.isDM;
                var11 = var13.bind(var2)();
 203:
                var3 = var2;
                if(var11) { _fun0004_ip = 222; continue _fun0004 }
 209:
                var11 = var1.push;
                var11 = var11.bind(var1)(var12);
                var3 = var2;
 222:
                var11 = var7.bind(var8)();
                var2 = var11.done;
                var4 = var11;
                if(!var2) { _fun0004_ip = 73; continue _fun0004 }
 240:
                return var1;
 242:
                var1 = new Array(0);
                return var1;
            }
        };
        var15 = var12.bind(var15)(var11, var5, var6);
        var _closure2_slot6 = var15;
        var2 = var17[var2];
        var6 = var3.bind(var10)(var2);
        var5 = var6.useStateFromStores;
        var2 = _closure1_slot8;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var2 = _closure1_slot8;
            var1 = var2.getVersion;
            var1 = var1.bind(var2)();
            return var1;
        };
        var16 = var5.bind(var6)(var3, var2);
        var _closure2_slot7 = var16;
        var6 = _closure1_slot4;
        var3 = var6.useState;
        var2 = new Array(0);
        var5 = var3.bind(var6)(var2);
        var3 = _closure1_slot3;
        var2 = 2;
        var5 = var3.bind(var10)(var5, var2);
        var2 = 0;
        var3 = var5[var2];
        var _closure2_slot8 = var3;
        var2 = 1;
        var2 = var5[var2];
        var _closure2_slot9 = var2;
        var11 = var6.useMemo;
        var5 = new Array(2);
        var5[0] = var3;
        var5[1] = var15;
        var2 = function() {
            var5 = _closure2_slot8;
            var4 = var5.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var _closure3_slot0 = var3;
            var3 = _closure2_slot6;
            var2 = var3.filter;
            var1 = function(arg1) {
                var3 = _closure3_slot0;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var11.bind(var6)(var2, var5);
        var11 = _closure1_slot1;
        var5 = 8;
        var4 = var17[var5];
        var4 = var11.bind(var10)(var4);
        var12 = var4.bind(var10)(var14);
        var _closure2_slot10 = var12;
        var4 = var17[var5];
        var4 = var11.bind(var10)(var4);
        var4 = var4.bind(var10)(var16);
        var _closure2_slot11 = var4;
        var5 = var17[var5];
        var5 = var11.bind(var10)(var5);
        var11 = var5.bind(var10)(var13);
        var _closure2_slot12 = var11;
        var10 = var6.useEffect;
        var5 = new Array(7);
        var5[0] = var16;
        var5[1] = var15;
        var5[2] = var14;
        var5[3] = var13;
        var5[4] = var12;
        var5[5] = var11;
        var5[6] = var4;
        var4 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = _closure2_slot10;
                var2 = _closure2_slot0;
                var2 = var3 === var2;
                if(!var2) { _fun0005_ip = 30; continue _fun0005 }
 18:
                var4 = _closure2_slot11;
                var3 = _closure2_slot7;
                var2 = var4 === var3;
 30:
                if(!var2) { _fun0005_ip = 45; continue _fun0005 }
 33:
                var4 = _closure2_slot12;
                var3 = _closure2_slot3;
                var2 = var4 === var3;
 45:
                if(var2) { _fun0005_ip = 63; continue _fun0005 }
 48:
                var3 = _closure2_slot9;
                var2 = _closure2_slot6;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
 63:
                var1 = undefined;
                return var1;
            }
        };
        var4 = var10.bind(var6)(var4, var5);
        var5 = var6.useEffect;
        var4 = new Array(3);
        var4[0] = var9;
        var4[1] = var8;
        var4[2] = var7;
        var1 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = _closure2_slot1;
                if(!var2) { _fun0006_ip = 55; continue _fun0006 }
 10:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.gravityFetchMentions;
                var2 = _closure2_slot4;
                var1 = _closure2_slot5;
                var1 = var3.bind(var4)(var2, var1);
 55:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var6)(var1, var4);
        var1 = {};
        var1['displayUnreadMentionMessages'] = var3;
        var1['newUnreadMentionMessages'] = var2;
        return var1;
    };
    var3['default'] = var4;
    var3['MAX_NUM_MENTIONS_SHOWN'] = var2;
    return var1;
})();
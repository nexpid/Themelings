// app/modules/app_startup/ManagerRegistryShared.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
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
            var9 = _closure1_slot5;
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
            var7 = _closure1_slot5;
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
    var _closure1_slot4 = var1;
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
    var _closure1_slot5 = var1;
    var1 = function validateInDevMode(arg1, arg2) {
        var1 = arg2;
        var1 = var1.actions;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function populateMap(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var6 = arg1;
            var5 = var6.actions;
            var1 = null;
            if(!(var1 == var5)) { _fun0004_ip = 19; continue _fun0004 }
 15:
            var5 = new Array(0);
 19:
            var1 = var6.hasStoreChangeListeners;
            if(var1) { _fun0004_ip = 34; continue _fun0004 }
 28:
            var1 = var6.loadAfterConnectionOpen;
 34:
            var7 = var5;
            if(!var1) { _fun0004_ip = 94; continue _fun0004 }
 40:
            var1 = var5.includes;
            var3 = 'POST_CONNECTION_OPEN';
            var2 = var1.bind(var5)(var3);
            var1 = var5;
            if(var2) { _fun0004_ip = 91; continue _fun0004 }
 60:
            var2 = new Array(1);
            var9 = 0;
            var11 = var2;
            var10 = var5;
            var4 = arraySpread(var11, var10, var9);
            var2[var4] = var3;
            var3 = 1;
            var3 = var4 + var3;
            var1 = var2;
 91:
            var7 = var1;
 94:
            var1 = var6.loadRightBeforeConnectionOpen;
            var3 = var7;
            if(!var1) { _fun0004_ip = 160; continue _fun0004 }
 106:
            var1 = var7.includes;
            var4 = 'CONNECTION_OPEN';
            var2 = var1.bind(var7)(var4);
            var1 = var7;
            if(var2) { _fun0004_ip = 157; continue _fun0004 }
 126:
            var2 = new Array(1);
            var9 = 0;
            var11 = var2;
            var10 = var7;
            var5 = arraySpread(var11, var10, var9);
            var2[var5] = var4;
            var4 = 1;
            var4 = var5 + var4;
            var1 = var2;
 157:
            var3 = var1;
 160:
            var2 = _closure1_slot4;
            var1 = undefined;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0004_ip = 247; continue _fun0004 }
 186:
            var7 = var3.value;
            var2 = _closure1_slot2;
            var2 = var7 in var2;
            if(var2) { _fun0004_ip = 214; continue _fun0004 }
 202:
            var8 = _closure1_slot2;
            var2 = new Array(0);
            var8[var7] = var2;
 214:
            var2 = _closure1_slot2;
            var7 = var2[var7];
            var2 = var7.push;
            var2 = var2.bind(var7)(var6);
            var7 = var4.bind(var1)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0004_ip = 186; continue _fun0004 }
 247:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function handleAction(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = 'CONNECTION_OPEN';
            var2 = var2 !== var3;
            if(!var2) { _fun0005_ip = 32; continue _fun0005 }
 19:
            var4 = var1.type;
            var3 = 'OVERLAY_INITIALIZE';
            var2 = var3 !== var4;
 32:
            if(var2) { _fun0005_ip = 44; continue _fun0005 }
 35:
            var2 = true;
            _closure1_slot3 = var2;
 44:
            var4 = var1.type;
            var3 = _closure1_slot2;
            var3 = var4 in var3;
            if(!var3) { _fun0005_ip = 213; continue _fun0005 }
 66:
            var3 = new Array(0);
            var5 = _closure1_slot4;
            var6 = _closure1_slot2;
            var4 = var1.type;
            var4 = var6[var4];
            var7 = undefined;
            var6 = var5.bind(var7)(var4);
            var5 = var6.bind(var7)();
            var4 = var5.done;
            if(var4) { _fun0005_ip = 174; continue _fun0005 }
 106:
            var8 = var5.value;
            var4 = _closure1_slot3;
            if(var4) { _fun0005_ip = 139; continue _fun0005 }
 118:
            var4 = var8.neverLoadBeforeConnectionOpen;
            if(!var4) { _fun0005_ip = 139; continue _fun0005 }
 127:
            var4 = var3.push;
            var4 = var4.bind(var3)(var8);
            _fun0005_ip = 159; continue _fun0005;
 139:
            var4 = var8.inlineRequire;
            var8 = var4.bind(var8)();
            var4 = var8.initialize;
            var4 = var4.bind(var8)();
 159:
            var8 = var6.bind(var7)();
            var4 = var8.done;
            var5 = var8;
            if(!var4) { _fun0005_ip = 106; continue _fun0005 }
 174:
            var5 = var3.length;
            var4 = 0;
            if(!(!(var5 > var4))) { _fun0005_ip = 200; continue _fun0005 }
 185:
            var5 = _closure1_slot2;
            var4 = var1.type;
            var4 = delete var5[var4];
            _fun0005_ip = 213; continue _fun0005;
 200:
            var2 = _closure1_slot2;
            var1 = var1.type;
            var2[var1] = var3;
 213:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var5 = true;
    var6['value'] = var5;
    var5 = '__esModule';
    var5 = var7.bind(var8)(var3, var5, var6);
    var6 = var1.Set;
    var1 = var6.prototype;
    var12 = Object.create(var1, {constructor: {value: var6}});
    var11 = ['CHANNEL_SELECT', 'CHANNEL_PRELOAD', 'MESSAGE_CREATE'];
    var1 = new var12[var6](var11, var10);
    var1 = {};
    var _closure1_slot2 = var1;
    var1 = false;
    var _closure1_slot3 = var1;
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_startup/ManagerRegistryShared.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function initialize(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var8 = arg1;
            var6 = var8;
            var1 = undefined;
            for(var3 in var6)
 19:
            {
 28:
                var9 = var3;
                var10 = var8[var9];
                var9 = _closure1_slot6;
                var9 = var9.bind(var1)(var1, var10);
                var9 = _closure1_slot7;
                var9 = var9.bind(var1)(var10);
                _fun0006_ip = 19; continue _fun0006;
            }
 56:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 0;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.addInterceptor;
            var2 = _closure1_slot8;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['initialize'] = var2;
    return var1;
})();
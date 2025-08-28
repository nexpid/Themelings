// app/modules/message_request/hooks/useMessageRequestPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot11;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot11;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 345:
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
    var _closure1_slot11 = var1;
    var1 = function loadMessageRequestData() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function _loadMessageRequestData() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 139; continue _fun0004 }
 10: // try_start_0
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var6 = 6;
                    var3 = var2[var6];
                    var2 = undefined;
                    var7 = var5.bind(var2)(var3);
                    var5 = var7.isEmpty;
                    var3 = _closure1_slot8;
                    var3 = var5.bind(var7)(var3);
                    if(var3) { _fun0004_ip = 117; continue _fun0004 }
 53:
                    var3 = _closure1_slot14;
                    var3 = var3.bind(var2)();
                    SaveGenerator(address=65);
 63:
                    return var3;
 65:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 108; continue _fun0004 }
 71:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var6];
                    var8 = var7.bind(var2)(var5);
                    var7 = var8.isEmpty;
                    var5 = _closure1_slot8;
                    var5 = var7.bind(var8)(var5);
                    if(var5) { _fun0004_ip = 117; continue _fun0004 }
 106:
                    _fun0004_ip = 53; continue _fun0004;
 108: // try_end0
                    var5 = null;
                    _closure1_slot9 = var5;
                    return var3;
 117:
                    var3 = null;
                    _closure1_slot9 = var3;
                    return var2;
 126: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var3 = null;
                    _closure1_slot9 = var3;
                    throw var2;
 139:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function loadMessageRequestDataHelper() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _loadMessageRequestDataHelper() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 473; continue _fun0005 }
 10:
                    var5 = undefined;
                    var3 = undefined;
                    var6 = undefined;
                    var7 = undefined;
                    var2 = global;
                    var9 = var2.Array;
                    var8 = var9.from;
                    var2 = _closure1_slot8;
                    var10 = var8.bind(var9)(var2);
                    var9 = var10.slice;
                    var8 = 0;
                    var2 = 25;
                    var3 = var9.bind(var10)(var8, var2);
 59: // try_start_0 // try_start_1
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 7;
                    var2 = var9[var2];
                    var2 = var8.bind(var5)(var2);
                    var9 = var2.HTTP;
                    var8 = var9.get;
                    var2 = {};
                    var10 = _closure1_slot7;
                    var10 = var10.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA;
                    var2['url'] = var10;
                    var10 = {};
                    var11 = var3;
                    var10['channel_ids'] = var11;
                    var2['query'] = var10;
                    var10 = true;
                    var2['rejectWithError'] = var10;
                    var2 = var8.bind(var9)(var2);
                    SaveGenerator(address=135);
 133:
                    return var2;
 135:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0005_ip = 204; continue _fun0005 }
 141:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 8;
                    var8 = var10[var8];
                    var10 = var9.bind(var5)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS';
                    var8['type'] = var11;
                    var11 = var3;
                    var8['requestedChannelIds'] = var11;
                    var11 = var2.body;
                    var8['supplementalData'] = var11;
                    var8 = var9.bind(var10)(var8);
 199: // try_end0
                    _fun0005_ip = 329; continue _fun0005;
 204: // try_end1
                    var9 = _closure1_slot10;
                    var8 = var3;
                    var8 = var9.bind(var5)(var8);
                    var7 = var8;
                    var8 = var8.bind(var5)();
                    var6 = var8;
                    var8 = var8.done;
                    if(var8) { _fun0005_ip = 274; continue _fun0005 }
 234:
                    var8 = var6;
                    var10 = var8.value;
                    var9 = _closure1_slot8;
                    var8 = var9.delete;
                    var8 = var8.bind(var9)(var10);
                    var8 = var7;
                    var8 = var8.bind(var5)();
                    var6 = var8;
                    var8 = var8.done;
                    if(!var8) { _fun0005_ip = 234; continue _fun0005 }
 274:
                    return var2;
 277: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=1);
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 8;
                    var2 = var9[var2];
                    var9 = var8.bind(var5)(var2);
                    var8 = var9.dispatch;
                    var2 = {};
                    var10 = 'LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR';
                    var2['type'] = var10;
                    var10 = var3;
                    var2['requestedChannelIds'] = var10;
                    var2 = var8.bind(var9)(var2);
 329: // try_end2
                    var8 = _closure1_slot10;
                    var2 = var3;
                    var2 = var8.bind(var5)(var2);
                    var7 = var2;
                    var2 = var2.bind(var5)();
                    var6 = var2;
                    var2 = var2.done;
                    if(var2) { _fun0005_ip = 399; continue _fun0005 }
 359:
                    var2 = var6;
                    var9 = var2.value;
                    var8 = _closure1_slot8;
                    var2 = var8.delete;
                    var2 = var2.bind(var8)(var9);
                    var2 = var7;
                    var2 = var2.bind(var5)();
                    var6 = var2;
                    var2 = var2.done;
                    if(!var2) { _fun0005_ip = 359; continue _fun0005 }
 399:
                    return var5;
 402: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var8 = _closure1_slot10;
                    var3 = var8.bind(var5)(var3);
                    var7 = var3;
                    var3 = var3.bind(var5)();
                    var6 = var3;
                    var3 = var3.done;
                    if(var3) { _fun0005_ip = 471; continue _fun0005 }
 431:
                    var3 = var6;
                    var9 = var3.value;
                    var8 = _closure1_slot8;
                    var3 = var8.delete;
                    var3 = var3.bind(var8)(var9);
                    var3 = var7;
                    var3 = var3.bind(var5)();
                    var6 = var3;
                    var3 = var3.done;
                    if(!var3) { _fun0005_ip = 431; continue _fun0005 }
 471:
                    throw var2;
 473:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.Endpoints;
    var _closure1_slot7 = var7;
    var4 = var4.Set;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var14 = var7;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot8 = var4;
    var4 = null;
    var _closure1_slot9 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_request/hooks/useMessageRequestPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMessageRequestPreview(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var7 = var2.id;
            var _closure2_slot0 = var7;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 5;
            var2 = var11[var9];
            var8 = undefined;
            var13 = var10.bind(var8)(var2);
            var12 = var13.useStateFromStoresObject;
            var6 = _closure1_slot6;
            var4 = new Array(3);
            var4[0] = var6;
            var2 = _closure1_slot4;
            var4[1] = var2;
            var2 = _closure1_slot5;
            var4[2] = var2;
            var3 = new Array(1);
            var3[0] = var7;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure1_slot5;
                    var1 = var3.lastMessageId;
                    var5 = _closure2_slot0;
                    var6 = var1.bind(var3)(var5);
                    var3 = _closure1_slot6;
                    var1 = var3.getMessageRequestPreview;
                    var1 = var1.bind(var3)(var5);
                    var5 = var1.message;
                    var3 = null;
                    if(!(var3 == var5)) { _fun0007_ip = 81; continue _fun0007 }
 53:
                    if(!(var3 != var6)) { _fun0007_ip = 81; continue _fun0007 }
 57:
                    var5 = _closure1_slot4;
                    var4 = var5.getMessage;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var2, var6);
                    if(!(var3 == var2)) { _fun0007_ip = 83; continue _fun0007 }
 81:
                    return var1;
 83:
                    var1 = {'loaded': true, 'error': false};
                    var1['message'] = var2;
                    return var1;
                }
            };
            var3 = var12.bind(var13)(var4, var2, var3);
            var4 = var3.loaded;
            var2 = var3.message;
            var3 = var3.error;
            var9 = var11[var9];
            var11 = var10.bind(var8)(var9);
            var10 = var11.useStateFromStores;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = new Array(1);
            var6[0] = var7;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.shouldLoadMessageRequestPreview;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var10.bind(var11)(var9, var1, var6);
            var1 = !var4;
            if(!var1) { _fun0006_ip = 167; continue _fun0006 }
 161:
            var9 = null;
            var1 = var9 == var2;
 167:
            if(!var1) { _fun0006_ip = 173; continue _fun0006 }
 170:
            var1 = var6;
 173:
            if(!var1) { _fun0006_ip = 224; continue _fun0006 }
 176:
            var6 = _closure1_slot8;
            var1 = var6.add;
            var1 = var1.bind(var6)(var7);
            var6 = _closure1_slot9;
            var1 = null;
            if(!(var1 == var6)) { _fun0006_ip = 224; continue _fun0006 }
 200:
            var1 = global;
            var7 = var1.setTimeout;
            var6 = _closure1_slot12;
            var1 = 0;
            var1 = var7.bind(var8)(var6, var1);
            _closure1_slot9 = var1;
 224:
            var1 = {};
            var1['loaded'] = var4;
            var1['error'] = var3;
            var1['message'] = var2;
            return var1;
        }
    };
    var3['useMessageRequestPreview'] = var2;
    return var1;
})();
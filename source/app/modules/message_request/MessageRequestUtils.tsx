// app/modules/message_request/MessageRequestUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_request/MessageRequestUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function filterOutMessageRequestsAndSpam(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot2;
            var2 = new Array(2);
            var2[0] = var6;
            var5 = _closure1_slot3;
            var2[1] = var5;
            var4 = var2;
case 2:
            var6 = var4;
            var2 = var6[Symbol.iterator];
            var6 = var2().next;
            var7 = var6().value;
            var4 = var2;
            var4 = var4 === var3;
            var5 = undefined;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var7;
case 4:
            var _closure2_slot0 = var5;
            var5 = undefined;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var6().value;
            var6 = var2;
            var6 = var6 === var3;
            var5 = undefined;
            var4 = var6;
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var5 = var7;
            var4 = var6;
case 6:
            var _closure2_slot1 = var5;
            if(var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2.return();
case 9:
            var4 = function channelRecordToArray(arg1) {
                var4 = arg1;
                var _closure3_slot0 = var4;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.keys;
                var3 = var2.bind(var3)(var4);
                var2 = var3.map;
                var1 = function(arg1) {
                    var3 = arg1;
                    var1 = new Array(2);
                    var1[0] = var3;
                    var2 = _closure3_slot0;
                    var2 = var2[var3];
                    var1[1] = var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = arg1;
            var5 = var4.bind(var3)(var2);
            var4 = var5.filter;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var6 = arg1;
                    var2 = var6[Symbol.iterator];
                    var6 = var2().next;
                    var8 = undefined;
                    var3 = undefined;
                    var4 = undefined;
                    var7 = var6().value;
                    var9 = var2;
                    var9 = var9 === var8;
                    var3 = var9;
                    if(var9) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var4 = var7;
case 11:
                    var4 = undefined;
                    var7 = var3;
                    if(var7) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var6 = var6().value;
                    var7 = var2;
                    var7 = var7 === var8;
                    var3 = var7;
                    if(var7) { _fun0002_ip = 13; continue _fun0002 }
case 15:
                    var4 = var6;
case 13:
                    var5 = var4;
                    var4 = var3;
                    if(var4) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var2.return();
case 16:
                    var9 = _closure2_slot0;
                    var8 = var9.isMessageRequest;
                    var7 = var5;
                    var7 = var7.id;
                    var7 = var8.bind(var9)(var7);
                    var7 = !var7;
                    var4 = var7;
                    if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var7 = _closure2_slot1;
                    var6 = var7.isSpam;
                    var5 = var5.id;
                    var5 = var6.bind(var7)(var5);
                    var4 = !var5;
case 18:
                    return var4;
case 20:
                    CatchBlockStart(arg_register=0);
                    if(var3) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var2.return();
case 21:
                    throw var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            var1 = function channelArrayToObject(arg1) {
                var1 = global;
                var3 = var1.Array;
                var2 = var3.from;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = arg2;
                        var2 = var4[Symbol.iterator];
                        var4 = var2().next;
                        var1 = var4().value;
                        var3 = var2;
                        var7 = undefined;
                        var3 = var3 === var7;
                        var5 = undefined;
                        if(var3) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                        var5 = var1;
case 23:
                        var1 = undefined;
                        if(var3) { _fun0003_ip = 15; continue _fun0003 }
case 11:
                        var6 = var4().value;
                        var4 = var2;
                        var4 = var4 === var7;
                        var1 = undefined;
                        var3 = var4;
                        if(var4) { _fun0003_ip = 15; continue _fun0003 }
case 25:
                        var1 = var6;
                        var3 = var4;
case 15:
                        if(var3) { _fun0003_ip = 26; continue _fun0003 }
case 13:
                        var2.return();
case 26:
                        var2 = global;
                        var4 = var2.Object;
                        var3 = var4.assign;
                        var2 = {};
                        var2[var5] = var1;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    }
                };
                var1 = {};
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var1.bind(var3)(var2);
            return var1;
        }
    };
    var3['filterOutMessageRequestsAndSpam'] = var4;
    var4 = function filterOutMessageRequestsAndSpamById(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var4 = arguments[1];
            var8 = undefined;
            if(!(var4 === var8)) { _fun0004_ip = 14; continue _fun0004 }
case 27:
            var6 = _closure1_slot2;
            var2 = new Array(2);
            var2[0] = var6;
            var5 = _closure1_slot3;
            var2[1] = var5;
            var4 = var2;
case 14:
            var6 = var4;
            var2 = var6[Symbol.iterator];
            var6 = var2().next;
            var7 = var6().value;
            var4 = var2;
            var4 = var4 === var8;
            var5 = undefined;
            if(var4) { _fun0004_ip = 28; continue _fun0004 }
case 4:
            var5 = var7;
case 28:
            var _closure2_slot0 = var5;
            var5 = undefined;
            if(var4) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var7 = var6().value;
            var6 = var2;
            var6 = var6 === var8;
            var5 = undefined;
            var4 = var6;
            if(var6) { _fun0004_ip = 29; continue _fun0004 }
case 31:
            var5 = var7;
            var4 = var6;
case 29:
            var _closure2_slot1 = var5;
            if(var4) { _fun0004_ip = 32; continue _fun0004 }
case 9:
            var2.return();
case 32:
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure2_slot0;
                    var1 = var3.isMessageRequest;
                    var1 = var1.bind(var3)(var4);
                    var1 = !var1;
                    if(!var1) { _fun0005_ip = 33; continue _fun0005 }
case 23:
                    var3 = _closure2_slot1;
                    var2 = var3.isSpam;
                    var2 = var2.bind(var3)(var4);
                    var1 = !var2;
case 33:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['filterOutMessageRequestsAndSpamById'] = var4;
    var4 = function isMessageRequestOrSpamRequest(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var2 = arguments[1];
            var8 = undefined;
            if(!(var2 === var8)) { _fun0006_ip = 34; continue _fun0006 }
case 35:
            var5 = _closure1_slot2;
            var1 = new Array(2);
            var1[0] = var5;
            var3 = _closure1_slot3;
            var1[1] = var3;
            var2 = var1;
case 34:
            var6 = var2;
            var1 = var6[Symbol.iterator];
            var6 = var1().next;
            var3 = var6().value;
            var2 = var1;
            var5 = var2 === var8;
            var2 = undefined;
            if(var5) { _fun0006_ip = 26; continue _fun0006 }
case 13:
            var2 = var3;
case 26:
            var3 = undefined;
            if(var5) { _fun0006_ip = 31; continue _fun0006 }
case 36:
            var7 = var6().value;
            var6 = var1;
            var6 = var6 === var8;
            var3 = undefined;
            var5 = var6;
            if(var6) { _fun0006_ip = 31; continue _fun0006 }
case 37:
            var3 = var7;
            var5 = var6;
case 31:
            if(var5) { _fun0006_ip = 29; continue _fun0006 }
case 6:
            var1.return();
case 29:
            var1 = var2.isMessageRequest;
            var1 = var1.bind(var2)(var4);
            if(var1) { _fun0006_ip = 38; continue _fun0006 }
case 39:
            var2 = var3.isSpam;
            var1 = var2.bind(var3)(var4);
case 38:
            return var1;
        }
    };
    var3['isMessageRequestOrSpamRequest'] = var4;
    var2 = function shouldShowMessageRequests() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arguments[0];
            var7 = undefined;
            if(!(var2 === var7)) { _fun0007_ip = 40; continue _fun0007 }
case 41:
            var4 = _closure1_slot2;
            var1 = new Array(2);
            var1[0] = var4;
            var3 = _closure1_slot3;
            var1[1] = var3;
            var2 = var1;
case 40:
            var5 = var2;
            var1 = var5[Symbol.iterator];
            var5 = var1().next;
            var3 = var5().value;
            var2 = var1;
            var4 = var2 === var7;
            var2 = undefined;
            if(var4) { _fun0007_ip = 13; continue _fun0007 }
case 15:
            var2 = var3;
case 13:
            var3 = undefined;
            if(var4) { _fun0007_ip = 8; continue _fun0007 }
case 28:
            var6 = var5().value;
            var5 = var1;
            var5 = var5 === var7;
            var3 = undefined;
            var4 = var5;
            if(var5) { _fun0007_ip = 8; continue _fun0007 }
case 42:
            var3 = var6;
            var4 = var5;
case 8:
            if(var4) { _fun0007_ip = 6; continue _fun0007 }
case 31:
            var1.return();
case 6:
            var1 = var3.getSpamChannelsCount;
            var3 = var1.bind(var3)();
            var1 = var2.getMessageRequestsCount;
            var1 = var1.bind(var2)();
            var2 = 0;
            var1 = var1 > var2;
            if(var1) { _fun0007_ip = 43; continue _fun0007 }
case 44:
            var1 = var3 > var2;
case 43:
            return var1;
        }
    };
    var3['shouldShowMessageRequests'] = var2;
    return var1;
})();
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
 0:
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0001_ip = 37; continue _fun0001 }
 11:
            var6 = _closure1_slot2;
            var2 = new Array(2);
            var2[0] = var6;
            var5 = _closure1_slot3;
            var2[1] = var5;
            var4 = var2;
 37:
            var6 = var4;
            var2 = var6[Symbol.iterator];
            var6 = var2().next;
            var7 = var6().value;
            var4 = var2;
            var4 = var4 === var3;
            var5 = undefined;
            if(var4) { _fun0001_ip = 62; continue _fun0001 }
 59:
            var5 = var7;
 62:
            var _closure2_slot0 = var5;
            var5 = undefined;
            if(var4) { _fun0001_ip = 96; continue _fun0001 }
 71:
            var7 = var6().value;
            var6 = var2;
            var6 = var6 === var3;
            var5 = undefined;
            var4 = var6;
            if(var6) { _fun0001_ip = 96; continue _fun0001 }
 90:
            var5 = var7;
            var4 = var6;
 96:
            var _closure2_slot1 = var5;
            if(var4) { _fun0001_ip = 106; continue _fun0001 }
 103:
            var2.return();
 106:
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
 0:
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
                    if(var9) { _fun0002_ip = 32; continue _fun0002 }
 29:
                    var4 = var7;
 32:
                    var4 = undefined;
                    var7 = var3;
                    if(var7) { _fun0002_ip = 60; continue _fun0002 }
 40:
                    var6 = var6().value;
                    var7 = var2;
                    var7 = var7 === var8;
                    var3 = var7;
                    if(var7) { _fun0002_ip = 60; continue _fun0002 }
 57:
                    var4 = var6;
 60:
                    var5 = var4;
                    var4 = var3;
                    if(var4) { _fun0002_ip = 72; continue _fun0002 }
 69:
                    var2.return();
 72:
                    var9 = _closure2_slot0;
                    var8 = var9.isMessageRequest;
                    var7 = var5;
                    var7 = var7.id;
                    var7 = var8.bind(var9)(var7);
                    var7 = !var7;
                    var4 = var7;
                    if(!var7) { _fun0002_ip = 130; continue _fun0002 }
 107:
                    var7 = _closure2_slot1;
                    var6 = var7.isSpam;
                    var5 = var5.id;
                    var5 = var6.bind(var7)(var5);
                    var4 = !var5;
 130:
                    return var4;
 132:
                    CatchBlockStart(arg_register=0);
                    if(var3) { _fun0002_ip = 140; continue _fun0002 }
 137:
                    var2.return();
 140:
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
 0:
                        var4 = arg2;
                        var2 = var4[Symbol.iterator];
                        var4 = var2().next;
                        var1 = var4().value;
                        var3 = var2;
                        var7 = undefined;
                        var3 = var3 === var7;
                        var5 = undefined;
                        if(var3) { _fun0003_ip = 27; continue _fun0003 }
 24:
                        var5 = var1;
 27:
                        var1 = undefined;
                        if(var3) { _fun0003_ip = 57; continue _fun0003 }
 32:
                        var6 = var4().value;
                        var4 = var2;
                        var4 = var4 === var7;
                        var1 = undefined;
                        var3 = var4;
                        if(var4) { _fun0003_ip = 57; continue _fun0003 }
 51:
                        var1 = var6;
                        var3 = var4;
 57:
                        if(var3) { _fun0003_ip = 63; continue _fun0003 }
 60:
                        var2.return();
 63:
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
 0:
            var3 = arg1;
            var4 = arguments[1];
            var8 = undefined;
            if(!(var4 === var8)) { _fun0004_ip = 40; continue _fun0004 }
 14:
            var6 = _closure1_slot2;
            var2 = new Array(2);
            var2[0] = var6;
            var5 = _closure1_slot3;
            var2[1] = var5;
            var4 = var2;
 40:
            var6 = var4;
            var2 = var6[Symbol.iterator];
            var6 = var2().next;
            var7 = var6().value;
            var4 = var2;
            var4 = var4 === var8;
            var5 = undefined;
            if(var4) { _fun0004_ip = 65; continue _fun0004 }
 62:
            var5 = var7;
 65:
            var _closure2_slot0 = var5;
            var5 = undefined;
            if(var4) { _fun0004_ip = 99; continue _fun0004 }
 74:
            var7 = var6().value;
            var6 = var2;
            var6 = var6 === var8;
            var5 = undefined;
            var4 = var6;
            if(var6) { _fun0004_ip = 99; continue _fun0004 }
 93:
            var5 = var7;
            var4 = var6;
 99:
            var _closure2_slot1 = var5;
            if(var4) { _fun0004_ip = 109; continue _fun0004 }
 106:
            var2.return();
 109:
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = arg1;
                    var3 = _closure2_slot0;
                    var1 = var3.isMessageRequest;
                    var1 = var1.bind(var3)(var4);
                    var1 = !var1;
                    if(!var1) { _fun0005_ip = 45; continue _fun0005 }
 27:
                    var3 = _closure2_slot1;
                    var2 = var3.isSpam;
                    var2 = var2.bind(var3)(var4);
                    var1 = !var2;
 45:
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
 0:
            var4 = arg1;
            var2 = arguments[1];
            var8 = undefined;
            if(!(var2 === var8)) { _fun0006_ip = 38; continue _fun0006 }
 12:
            var5 = _closure1_slot2;
            var1 = new Array(2);
            var1[0] = var5;
            var3 = _closure1_slot3;
            var1[1] = var3;
            var2 = var1;
 38:
            var6 = var2;
            var1 = var6[Symbol.iterator];
            var6 = var1().next;
            var3 = var6().value;
            var2 = var1;
            var5 = var2 === var8;
            var2 = undefined;
            if(var5) { _fun0006_ip = 63; continue _fun0006 }
 60:
            var2 = var3;
 63:
            var3 = undefined;
            if(var5) { _fun0006_ip = 93; continue _fun0006 }
 68:
            var7 = var6().value;
            var6 = var1;
            var6 = var6 === var8;
            var3 = undefined;
            var5 = var6;
            if(var6) { _fun0006_ip = 93; continue _fun0006 }
 87:
            var3 = var7;
            var5 = var6;
 93:
            if(var5) { _fun0006_ip = 99; continue _fun0006 }
 96:
            var1.return();
 99:
            var1 = var2.isMessageRequest;
            var1 = var1.bind(var2)(var4);
            if(var1) { _fun0006_ip = 124; continue _fun0006 }
 113:
            var2 = var3.isSpam;
            var1 = var2.bind(var3)(var4);
 124:
            return var1;
        }
    };
    var3['isMessageRequestOrSpamRequest'] = var4;
    var2 = function shouldShowMessageRequests() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arguments[0];
            var7 = undefined;
            if(!(var2 === var7)) { _fun0007_ip = 35; continue _fun0007 }
 9:
            var4 = _closure1_slot2;
            var1 = new Array(2);
            var1[0] = var4;
            var3 = _closure1_slot3;
            var1[1] = var3;
            var2 = var1;
 35:
            var5 = var2;
            var1 = var5[Symbol.iterator];
            var5 = var1().next;
            var3 = var5().value;
            var2 = var1;
            var4 = var2 === var7;
            var2 = undefined;
            if(var4) { _fun0007_ip = 60; continue _fun0007 }
 57:
            var2 = var3;
 60:
            var3 = undefined;
            if(var4) { _fun0007_ip = 90; continue _fun0007 }
 65:
            var6 = var5().value;
            var5 = var1;
            var5 = var5 === var7;
            var3 = undefined;
            var4 = var5;
            if(var5) { _fun0007_ip = 90; continue _fun0007 }
 84:
            var3 = var6;
            var4 = var5;
 90:
            if(var4) { _fun0007_ip = 96; continue _fun0007 }
 93:
            var1.return();
 96:
            var1 = var3.getSpamChannelsCount;
            var3 = var1.bind(var3)();
            var1 = var2.getMessageRequestsCount;
            var1 = var1.bind(var2)();
            var2 = 0;
            var1 = var1 > var2;
            if(var1) { _fun0007_ip = 129; continue _fun0007 }
 125:
            var1 = var3 > var2;
 129:
            return var1;
        }
    };
    var3['shouldShowMessageRequests'] = var2;
    return var1;
})();
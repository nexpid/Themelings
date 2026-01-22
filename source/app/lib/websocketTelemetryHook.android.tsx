// app/lib/websocketTelemetryHook.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var _closure1_slot0 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/websocketTelemetryHook.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function installWebsocketTelemetryHook(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = function handleMessage(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg2;
                    var1 = undefined;
                    var3 = undefined;
                    var6 = undefined;
                    var2 = {};
                    var5 = arg1;
                    var11 = undefined;
                    var10 = undefined;
                    var7 = undefined;
case 2: // try_start_0
                    var9 = global;
                    var13 = var9.URL;
                    var15 = var5;
                    var12 = var13.prototype;
                    var12 = Object.create(var12, {constructor: {value: var13}});
                    var16 = var12;
                    var8 = new var16[var13](var15, var14);
                    var12 = var8 instanceof Object ? var8 : var12;
                    var8 = var12.hostname;
                    var11 = var8;
                    var10 = var12.pathname;
                    var13 = null;
                    if(!(var13 != var8)) { _fun0002_ip = 3; continue _fun0002 }
case 4:
                    var8 = var11;
                    var12 = '';
                    if(!(var12 === var8)) { _fun0002_ip = 5; continue _fun0002 }
case 3: // try_end0
                    _fun0002_ip = 6; continue _fun0002;
case 5: // try_start_1
                    var8 = var10;
                    if(!(var13 != var8)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var8 = var10;
                    if(!(var12 !== var8)) { _fun0002_ip = 7; continue _fun0002 }
case 9:
                    var13 = var10;
                    var8 = '/';
                    if(!(var8 === var13)) { _fun0002_ip = 10; continue _fun0002 }
case 7:
                    var8 = var11;
                    _fun0002_ip = 11; continue _fun0002;
case 10:
                    var9 = var9.HermesInternal;
                    var9 = var9.concat;
                    var8 = var9.bind(var12)(var11, var10);
case 11: // try_end1
                    _fun0002_ip = 12; continue _fun0002;
case 13: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=8);
case 6:
                    var10 = var5;
                    var9 = var10.split;
                    var5 = '?';
                    var9 = var9.bind(var10)(var5);
                    var5 = 0;
                    var10 = var9[var5];
                    var7 = var10;
                    var9 = '';
                    var5 = null;
                    if(!(var9 !== var10)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var5 = var7;
case 14:
                    var8 = var5;
case 12:
                    var7 = null;
                    if(!(var7 != var8)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var5 = var2;
                    var5['url'] = var8;
case 16:
                    var3 = false;
                    var8 = var4;
                    var5 = 'string';
                    var8 = typeof var8;
                    if(!(var5 === var8)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var8 = var4;
                    var8 = var8.length;
                    var9 = 0;
                    if(!(var8 > var9)) { _fun0002_ip = 18; continue _fun0002 }
case 20:
                    var8 = var4;
                    var9 = var8[var9];
                    var8 = '{';
                    if(!(var8 === var9)) { _fun0002_ip = 18; continue _fun0002 }
case 21: // try_start_2
                    var8 = global;
                    var10 = var8.JSON;
                    var9 = var10.parse;
                    var8 = var4;
                    var9 = var9.bind(var10)(var8);
                    var6 = var9;
                    var9 = var7 != var9;
                    var8 = var9;
                    if(!var9) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var9 = var6;
                    var10 = 'object';
                    var9 = typeof var9;
                    var8 = var10 === var9;
case 22:
                    if(!var8) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var8 = var6;
                    var8 = var8.op;
                    if(!(var7 != var8)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var9 = var2;
                    var8 = var6;
                    var8 = var8.op;
                    var9['op'] = var8;
case 26:
                    var8 = var6;
                    var8 = var8.s;
                    if(!(var7 != var8)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var9 = var2;
                    var8 = var6;
                    var8 = var8.s;
                    var9['s'] = var8;
case 28:
                    var8 = var6;
                    var8 = var8.t;
                    if(!(var7 != var8)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var9 = var2;
                    var8 = var6;
                    var8 = var8.t;
                    var9['t'] = var8;
case 30:
                    var8 = var6;
                    var8 = var8.type;
                    if(!(var7 != var8)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    var9 = var2;
                    var8 = var6;
                    var8 = var8.type;
                    var9['type'] = var8;
case 32:
                    var8 = var6;
                    var8 = var8.evt;
                    if(!(var7 != var8)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                    var9 = var2;
                    var8 = var6;
                    var8 = var8.evt;
                    var9['evt'] = var8;
case 34:
                    var8 = var6;
                    var8 = var8.cmd;
                    if(!(var7 != var8)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                    var8 = var2;
                    var6 = var6.cmd;
                    var8['cmd'] = var6;
case 36:
                    var3 = true;
case 24: // try_end2
                    _fun0002_ip = 18; continue _fun0002;
case 38: // catch_target2
                    CatchBlockStart(arg_register=5);
case 18:
                    if(var3) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                    var6 = var4;
                    var3 = var7 == var6;
case 39:
                    if(var3) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                    var4 = typeof var4;
                    var3 = var5 === var4;
case 41:
                    if(var3) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                    var4 = var2;
                    var3 = 'binary';
                    var4['type'] = var3;
case 43: // try_start_3
                    var3 = _closure2_slot0;
                    var2 = var3.bind(var1)(var2);
case 45: // try_end3
                    _fun0002_ip = 46; continue _fun0002;
case 47: // catch_target3
                    CatchBlockStart(arg_register=1);
case 46:
                    return var1;
                }
            };
            var _closure2_slot2 = var1;
            var4 = global;
            var1 = var4.globalThis;
            var6 = 'undefined';
            var1 = typeof var1;
            if(!(var6 === var1)) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var5 = _closure1_slot0;
            var3 = undefined;
            if(!(var3 === var5)) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var5 = var4.window;
            var5 = typeof var5;
            var3 = null;
            if(!(var6 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 52:
            var3 = var4.window;
case 4:
            _fun0001_ip = 53; continue _fun0001;
case 50:
            var3 = _closure1_slot0;
case 53:
            _fun0001_ip = 54; continue _fun0001;
case 48:
            var3 = var4.globalThis;
case 54:
            var6 = null;
            var7 = var6 == var3;
            var1 = undefined;
            var5 = undefined;
            if(var7) { _fun0001_ip = 55; continue _fun0001 }
case 9:
            var5 = var3.WebSocket;
case 55:
            if(!(var6 != var5)) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var5 = var3.__discordWebsocketTelemetryPatched;
            if(var5) { _fun0001_ip = 56; continue _fun0001 }
case 58:
            var6 = var3.WebSocket;
            var _closure2_slot1 = var6;
            var2 = function PatchedWebSocket(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = 0;
                    var9 = 0;
                    var2 = copyRestArgs(var9);
                    var4 = _closure2_slot1;
                    var1 = new Array(0);
                    var9 = var1;
                    var8 = var2;
                    var7 = 0;
                    var5 = arraySpread(var9, var8, var7);
                    var9 = var4;
                    var8 = var1;
                    var1 = apply(var9, var8);
                    var4 = var2[var3];
                    var5 = 'string';
                    var4 = typeof var4;
                    if(!(var5 !== var4)) { _fun0003_ip = 59; continue _fun0003 }
case 60:
                    var5 = var1.url;
                    var4 = null;
                    var6 = var4 != var5;
                    var4 = '';
                    if(!var6) { _fun0003_ip = 61; continue _fun0003 }
case 50:
                    var4 = var5;
case 61:
                    _fun0003_ip = 3; continue _fun0003;
case 59:
                    var4 = var2[var3];
case 3:
                    var3 = function attachListener(arg1, arg2) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var4 = arg1;
                            var2 = arg2;
                            var _closure4_slot0 = var2;
                            var2 = var4.addEventListener;
                            var3 = 'function';
                            var2 = typeof var2;
                            if(!(var3 === var2)) { _fun0004_ip = 51; continue _fun0004 }
case 62:
                            var3 = var4.addEventListener;
                            var2 = 'message';
                            var1 = function(arg1) {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                    var5 = arg1;
                                    var4 = _closure2_slot2;
                                    var3 = _closure4_slot0;
                                    var1 = null;
                                    var6 = var1 == var5;
                                    var1 = undefined;
                                    var2 = undefined;
                                    if(var6) { _fun0005_ip = 63; continue _fun0005 }
case 64:
                                    var2 = var5.data;
case 63:
                                    var2 = var4.bind(var1)(var3, var2);
                                    return var1;
                                }
                            };
                            var1 = var3.bind(var4)(var2, var1);
case 51:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = undefined;
                    var2 = var3.bind(var2)(var1, var4);
                    return var1;
                }
            };
            var5 = var6.prototype;
            var2['prototype'] = var5;
            var5 = var4.Object;
            var4 = var5.assign;
            var4 = var4.bind(var5)(var2, var6);
            var3['WebSocket'] = var2;
            var2 = true;
            var3['__discordWebsocketTelemetryPatched'] = var2;
case 56:
            return var1;
        }
    };
    var3['installWebsocketTelemetryHook'] = var2;
    return var1;
})();
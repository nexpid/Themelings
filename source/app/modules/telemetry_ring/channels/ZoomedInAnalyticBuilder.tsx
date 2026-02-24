// app/modules/telemetry_ring/channels/ZoomedInAnalyticBuilder.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function convertDeviceEventBreadcrumb(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = var4.data;
            var1 = null;
            if(!(var1 != var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = global;
            var3 = var2.Object;
            var2 = var3.keys;
            var2 = var2.bind(var3)(var6);
            var3 = var2.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var7 = _closure1_slot11;
            var5 = var6.action;
            var3 = undefined;
            var5 = var7.bind(var3)(var5);
            if(!(var1 == var5)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var8 = _closure1_slot11;
            var7 = var4.message;
            var5 = var8.bind(var3)(var7);
case 5:
            var7 = _closure1_slot11;
            var4 = var4.message;
            var4 = var7.bind(var3)(var4);
            if(!(var1 == var4)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var7 = _closure1_slot11;
            var2 = var6.description;
            var4 = var7.bind(var3)(var2);
case 7:
            var2 = function formatDeviceMetadata(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = global;
                    var4 = var1.Object;
                    var3 = var4.entries;
                    var1 = arg1;
                    var4 = var3.bind(var4)(var1);
                    var3 = var4.filter;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var6 = arg1;
                            var2 = var6[Symbol.iterator];
                            var6 = var2().next;
                            var8 = undefined;
                            var3 = undefined;
                            var5 = undefined;
                            var7 = var6().value;
                            var9 = var2;
                            var9 = var9 === var8;
                            var3 = var9;
                            if(var9) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                            var5 = var7;
case 9:
                            var5 = undefined;
                            var7 = var3;
                            if(var7) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                            var6 = var6().value;
                            var7 = var2;
                            var7 = var7 === var8;
                            var3 = var7;
                            if(var7) { _fun0003_ip = 11; continue _fun0003 }
case 13:
                            var5 = var6;
case 11:
                            var4 = var5;
                            var5 = var3;
                            if(var5) { _fun0003_ip = 14; continue _fun0003 }
case 6:
                            var2.return();
case 14:
                            var5 = var4;
                            var4 = null;
                            var4 = var4 != var5;
                            return var4;
case 5:
                            CatchBlockStart(arg_register=0);
                            if(var3) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                            var2.return();
case 15:
                            throw var1;
                        }
                    };
                    var4 = var3.bind(var4)(var1);
                    var5 = var4.length;
                    var3 = 0;
                    var1 = null;
                    if(!(var3 !== var5)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var3 = var4.map;
                    var2 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var3 = arg1;
                            var1 = var3[Symbol.iterator];
                            var3 = var1().next;
                            var4 = var3().value;
                            var2 = var1;
                            var7 = undefined;
                            var2 = var2 === var7;
                            var5 = undefined;
                            if(var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                            var5 = var4;
case 19:
                            var4 = undefined;
                            if(var2) { _fun0004_ip = 13; continue _fun0004 }
case 9:
                            var6 = var3().value;
                            var3 = var1;
                            var3 = var3 === var7;
                            var4 = undefined;
                            var2 = var3;
                            if(var3) { _fun0004_ip = 13; continue _fun0004 }
case 21:
                            var4 = var6;
                            var2 = var3;
case 13:
                            if(var2) { _fun0004_ip = 22; continue _fun0004 }
case 11:
                            var1.return();
case 22:
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var3 = var1.concat;
                            var2 = '';
                            var1 = '=';
                            var1 = var3.bind(var2)(var5, var1, var4);
                            return var1;
                        }
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.join;
                    var2 = ', ';
                    var1 = var3.bind(var4)(var2);
case 17:
                    return var1;
                }
            };
            var3 = var2.bind(var3)(var6);
            var2 = {};
            var2['action'] = var5;
            var2['description'] = var4;
            var2['metadata'] = var3;
            return var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function resolveSocketKind(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var7 = arg2;
            var5 = _closure1_slot11;
            var2 = var4.socket_kind;
            var1 = undefined;
            var1 = var5.bind(var1)(var2);
            var2 = null;
            if(!(var2 == var1)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var6 = var2 == var7;
            var5 = null;
            if(var6) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var6 = var7.toLowerCase;
            var9 = var6.bind(var7)();
            var7 = var9.includes;
            var6 = 'gateway';
            var6 = var7.bind(var9)(var6);
            if(var6) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var7 = var9.includes;
            var6 = 'discord.media';
            var6 = var7.bind(var9)(var6);
            if(var6) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var7 = var9.includes;
            var6 = 'remote-auth';
            var6 = var7.bind(var9)(var6);
            if(var6) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var7 = var9.includes;
            var6 = 'spotify';
            var6 = var7.bind(var9)(var6);
            if(var6) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var7 = var9.includes;
            var6 = 'rtc';
            var6 = var7.bind(var9)(var6);
            if(var6) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var7 = var9.includes;
            var6 = '127.0.0.1';
            var6 = var7.bind(var9)(var6);
            if(var6) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var7 = var9.includes;
            var6 = 'localhost';
            var6 = var7.bind(var9)(var6);
            if(var6) { _fun0005_ip = 37; continue _fun0005 }
case 39:
            var7 = var9.includes;
            var6 = 'game';
            var7 = var7.bind(var9)(var6);
            var6 = null;
            if(!var7) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var8 = var9.includes;
            var7 = 'ping';
            var7 = var8.bind(var9)(var7);
            var6 = null;
            if(!var7) { _fun0005_ip = 40; continue _fun0005 }
case 42:
            var7 = _closure1_slot3;
            var6 = var7.GameServerPing;
case 40:
            _fun0005_ip = 43; continue _fun0005;
case 37:
            var7 = _closure1_slot3;
            var6 = var7.Rpc;
case 43:
            _fun0005_ip = 44; continue _fun0005;
case 35:
            var7 = _closure1_slot3;
            var6 = var7.RtcControl;
case 44:
            _fun0005_ip = 45; continue _fun0005;
case 33:
            var7 = _closure1_slot3;
            var6 = var7.Spotify;
case 45:
            _fun0005_ip = 46; continue _fun0005;
case 31:
            var7 = _closure1_slot3;
            var6 = var7.RemoteAuth;
case 46:
            _fun0005_ip = 47; continue _fun0005;
case 29:
            var7 = _closure1_slot3;
            var6 = var7.RtcControl;
case 47:
            _fun0005_ip = 48; continue _fun0005;
case 27:
            var7 = _closure1_slot3;
            var6 = var7.Gateway;
case 48:
            var5 = var6;
case 25:
            var1 = var5;
case 23:
            if(!(var2 == var1)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var5 = var4.cmd;
            if(!(var2 == var5)) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var5 = var4.evt;
            if(!(var2 == var5)) { _fun0005_ip = 51; continue _fun0005 }
case 53:
            var5 = var4.t;
            if(!(var2 == var5)) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            var4 = var4.s;
            var4 = var2 != var4;
            var2 = null;
            if(!var4) { _fun0005_ip = 56; continue _fun0005 }
case 54:
            var4 = _closure1_slot3;
            var2 = var4.Gateway;
case 56:
            _fun0005_ip = 57; continue _fun0005;
case 51:
            var3 = _closure1_slot3;
            var2 = var3.Rpc;
case 57:
            var1 = var2;
case 49:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function buildSocketMessageIdentity(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var7 = arg2;
            var6 = _closure1_slot11;
            var5 = var1.t;
            var2 = null;
            if(!(var2 == var5)) { _fun0006_ip = 10; continue _fun0006 }
case 20:
            var5 = var1.type;
case 10:
            if(!(var2 == var5)) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            var5 = var1.evt;
case 58:
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = _closure1_slot3;
            var5 = var5.Gateway;
            if(!(var7 !== var5)) { _fun0006_ip = 60; continue _fun0006 }
case 22:
            var5 = _closure1_slot3;
            var5 = var5.RtcControl;
            if(!(var7 !== var5)) { _fun0006_ip = 61; continue _fun0006 }
case 28:
            var7 = _closure1_slot11;
            var5 = var1.cmd;
            var12 = var7.bind(var4)(var5);
            var5 = var1.evt;
            var11 = var7.bind(var4)(var5);
            var5 = var6;
            if(!(var2 != var12)) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var7 = var12;
            if(!(var2 != var11)) { _fun0006_ip = 64; continue _fun0006 }
case 65:
            var8 = global;
            var8 = var8.HermesInternal;
            var10 = var8.concat;
            var9 = '';
            var8 = '/';
            var7 = var10.bind(var9)(var12, var8, var11);
case 64:
            var5 = var7;
case 62:
            return var5;
case 61:
            var7 = var1.op;
            var5 = _closure1_slot12;
            var8 = var5.bind(var4)(var7);
            var7 = var2 == var8;
            var5 = null;
            if(var7) { _fun0006_ip = 66; continue _fun0006 }
case 67:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 3;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.RTCSocketOpcode;
            var8 = var7[var8];
            var10 = 'string';
            var9 = typeof var8;
            var7 = null;
            if(!(var10 === var9)) { _fun0006_ip = 68; continue _fun0006 }
case 69:
            var7 = var8;
case 68:
            var5 = var7;
case 66:
            if(!(var2 == var5)) { _fun0006_ip = 70; continue _fun0006 }
case 71:
            var8 = _closure1_slot12;
            var7 = var1.op;
            var9 = var8.bind(var4)(var7);
            var8 = var2 != var9;
            var7 = null;
            if(!var8) { _fun0006_ip = 72; continue _fun0006 }
case 73:
            var8 = global;
            var8 = var8.String;
            var7 = var8.bind(var4)(var9);
case 72:
            return var7;
case 70:
            return var5;
case 60:
            var7 = var1.op;
            var5 = _closure1_slot12;
            var8 = var5.bind(var4)(var7);
            var7 = var2 == var8;
            var5 = null;
            if(var7) { _fun0006_ip = 52; continue _fun0006 }
case 74:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 2;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.Opcode;
            var8 = var7[var8];
            var10 = 'string';
            var9 = typeof var8;
            var7 = null;
            if(!(var10 === var9)) { _fun0006_ip = 75; continue _fun0006 }
case 76:
            var7 = var8;
case 75:
            var5 = var7;
case 52:
            if(!(var2 == var5)) { _fun0006_ip = 77; continue _fun0006 }
case 78:
            var3 = _closure1_slot12;
            var1 = var1.op;
            var9 = var3.bind(var4)(var1);
            var1 = var6;
            if(!(var2 != var9)) { _fun0006_ip = 79; continue _fun0006 }
case 80:
            if(!(var2 == var6)) { _fun0006_ip = 81; continue _fun0006 }
case 82:
            var3 = global;
            var3 = var3.String;
            var3 = var3.bind(var4)(var9);
            _fun0006_ip = 83; continue _fun0006;
case 81:
            var4 = global;
            var4 = var4.HermesInternal;
            var8 = var4.concat;
            var7 = '';
            var4 = '/';
            var3 = var8.bind(var7)(var9, var4, var6);
case 83:
            var1 = var3;
case 79:
            return var1;
case 77:
            var3 = 'DISPATCH';
            var1 = var5;
            if(!(var3 === var5)) { _fun0006_ip = 84; continue _fun0006 }
case 85:
            var1 = var5;
            if(!(var2 != var6)) { _fun0006_ip = 84; continue _fun0006 }
case 86:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '/';
            var1 = var4.bind(var3)(var5, var2, var6);
case 84:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function buildWebsocketMessageProps(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var7 = var1.data;
            var3 = null;
            if(!(var3 != var7)) { _fun0007_ip = 32; continue _fun0007 }
case 87:
            var8 = _closure1_slot11;
            var1 = var7.url;
            var6 = undefined;
            var1 = var8.bind(var6)(var1);
            var2 = _closure1_slot7;
            var2 = var2.bind(var6)(var7, var1);
            var4 = var7.message_identity;
            var4 = var8.bind(var6)(var4);
            if(!(var3 == var4)) { _fun0007_ip = 88; continue _fun0007 }
case 89:
            var5 = _closure1_slot8;
            var4 = var5.bind(var6)(var7, var2);
case 88:
            if(!(var3 == var4)) { _fun0007_ip = 90; continue _fun0007 }
case 14:
            var5 = function buildLegacyMessageIdentity(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var4 = _closure1_slot11;
                    var3 = var1.category;
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var3 = var1.type;
                    var3 = var4.bind(var2)(var3);
                    var1 = var1.name;
                    var2 = var4.bind(var2)(var1);
                    var1 = null;
                    if(!(var1 == var5)) { _fun0008_ip = 91; continue _fun0008 }
case 92:
                    if(!(var1 == var3)) { _fun0008_ip = 91; continue _fun0008 }
case 93:
                    var4 = var1 == var2;
                    var1 = null;
                    if(var4) { _fun0008_ip = 94; continue _fun0008 }
case 91:
                    var4 = new Array(3);
                    var4[0] = var5;
                    var4[1] = var3;
                    var4[2] = var2;
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var2 = null;
                        var1 = arg1;
                        var1 = var2 != var1;
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.join;
                    var2 = '/';
                    var1 = var3.bind(var4)(var2);
case 94:
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var7);
case 90:
            if(!(var3 != var4)) { _fun0007_ip = 95; continue _fun0007 }
case 96:
            var1 = var4;
case 95:
            var4 = var3 != var1;
            var3 = 'unknown';
            if(!var4) { _fun0007_ip = 97; continue _fun0007 }
case 98:
            var3 = var1;
case 97:
            var1 = {};
            var1['message_identity'] = var3;
            var1['socket_kind'] = var2;
            return var1;
case 32:
            var1 = {};
            var2 = 'unknown';
            var1['message_identity'] = var2;
            var2 = undefined;
            var1['socket_kind'] = var2;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function coerceNumber(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var5 = 'number';
            var3 = typeof var2;
            var1 = null;
            if(!(var5 === var3)) { _fun0009_ip = 99; continue _fun0009 }
case 100:
            var3 = global;
            var5 = var3.Number;
            var3 = var5.isFinite;
            var3 = var3.bind(var5)(var2);
            var1 = null;
            if(!var3) { _fun0009_ip = 99; continue _fun0009 }
case 12:
            var1 = var2;
case 99:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function coerceString(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var4 = 'string';
            var3 = typeof var2;
            var1 = null;
            if(!(var4 === var3)) { _fun0010_ip = 101; continue _fun0010 }
case 100:
            var1 = var2;
case 101:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function coerceNumberFromUnknown(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var3 = typeof var1;
            var2 = 'number';
            if(!(var2 === var3)) { _fun0011_ip = 102; continue _fun0011 }
case 87:
            var2 = global;
            var4 = var2.Number;
            var2 = var4.isFinite;
            var2 = var2.bind(var4)(var1);
            if(var2) { _fun0011_ip = 103; continue _fun0011 }
case 102:
            var2 = 'string';
            if(!(var2 === var3)) { _fun0011_ip = 91; continue _fun0011 }
case 104:
            var2 = var1.trim;
            var3 = var2.bind(var1)();
            var2 = '';
            if(!(var2 === var3)) { _fun0011_ip = 105; continue _fun0011 }
case 91:
            var2 = null;
            return var2;
case 105:
            var2 = global;
            var4 = var2.Number;
            var3 = undefined;
            var3 = var4.bind(var3)(var1);
            var4 = var2.Number;
            var2 = var4.isFinite;
            var4 = var2.bind(var4)(var3);
            var2 = null;
            if(!var4) { _fun0011_ip = 106; continue _fun0011 }
case 107:
            var2 = var3;
case 106:
            return var2;
case 103:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var4 = {};
    var8 = 'gateway';
    var4['Gateway'] = var8;
    var8 = 'rtc_control';
    var4['RtcControl'] = var8;
    var8 = 'remote_auth';
    var4['RemoteAuth'] = var8;
    var8 = 'spotify';
    var4['Spotify'] = var8;
    var8 = 'rpc';
    var4['Rpc'] = var8;
    var8 = 'game_server_ping';
    var4['GameServerPing'] = var8;
    var _closure1_slot3 = var4;
    var4 = {};
    var9 = var7.DEVICE_EVENT;
    var8 = function(arg1) {
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4[var9] = var8;
    var9 = var7.REACT_SOFT_EXCEPTION;
    var8 = function(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var3 = var1.data;
            var6 = null;
            var2 = var6 == var3;
            var1 = null;
            if(var2) { _fun0012_ip = 7; continue _fun0012 }
case 101:
            var2 = {};
            var8 = _closure1_slot11;
            var7 = var3.error_message;
            var5 = undefined;
            var7 = var8.bind(var5)(var7);
            if(!(var6 == var7)) { _fun0012_ip = 108; continue _fun0012 }
case 109:
            var9 = _closure1_slot11;
            var8 = var3.message;
            var7 = var9.bind(var5)(var8);
case 108:
            var8 = var6 != var7;
            var6 = undefined;
            if(!var8) { _fun0012_ip = 110; continue _fun0012 }
case 88:
            var6 = var7;
case 110:
            var2['error_message'] = var6;
            var4 = _closure1_slot11;
            var6 = var3.component;
            var6 = var4.bind(var5)(var6);
            var2['component'] = var6;
            var3 = var3.stacktrace;
            var3 = var4.bind(var5)(var3);
            var2['stacktrace'] = var3;
            var1 = var2;
case 7:
            return var1;
        }
    };
    var4[var9] = var8;
    var9 = var7.NETWORK_CAPABILITIES_CHANGED;
    var8 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var4 = var1.data;
            var3 = null;
            var2 = var3 == var4;
            var1 = null;
            if(var2) { _fun0013_ip = 111; continue _fun0013 }
case 101:
            var2 = {};
            var8 = _closure1_slot11;
            var6 = var4.action;
            var7 = undefined;
            var6 = var8.bind(var7)(var6);
            var2['action'] = var6;
            var6 = var4.network_type;
            var6 = var8.bind(var7)(var6);
            var2['network_type'] = var6;
            var6 = _closure1_slot10;
            var5 = var4.upload_bandwidth;
            var5 = var6.bind(var7)(var5);
            var2['upload_bandwidth'] = var5;
            var5 = var4.download_bandwidth;
            var5 = var6.bind(var7)(var5);
            var2['download_bandwidth'] = var5;
            var5 = var4.vpn_active;
            var6 = 'boolean';
            var5 = typeof var5;
            var3 = null;
            if(!(var6 === var5)) { _fun0013_ip = 32; continue _fun0013 }
case 7:
            var3 = var4.vpn_active;
case 32:
            var2['vpn_active'] = var3;
            var1 = var2;
case 111:
            return var1;
        }
    };
    var4[var9] = var8;
    var9 = var7.FOREGROUND_SERVICE;
    var8 = function(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var8 = arg1;
            var3 = var8.data;
            var6 = null;
            var2 = var6 == var3;
            var1 = null;
            if(var2) { _fun0014_ip = 112; continue _fun0014 }
case 113:
            var2 = {};
            var9 = _closure1_slot11;
            var7 = var3.service_name;
            var5 = undefined;
            var7 = var9.bind(var5)(var7);
            var2['service_name'] = var7;
            var7 = var3.action;
            var7 = var9.bind(var5)(var7);
            var2['action'] = var7;
            var7 = var3.detail;
            var7 = var9.bind(var5)(var7);
            if(!(var6 == var7)) { _fun0014_ip = 114; continue _fun0014 }
case 115:
            var9 = _closure1_slot11;
            var8 = var8.message;
            var7 = var9.bind(var5)(var8);
case 114:
            var2['detail'] = var7;
            var8 = _closure1_slot11;
            var7 = var3.fgs_operation;
            var7 = var8.bind(var5)(var7);
            var2['fgs_operation'] = var7;
            var7 = var3.fgs_configuration_type;
            var7 = var8.bind(var5)(var7);
            var2['fgs_configuration_type'] = var7;
            var7 = var3.guard_allowed;
            var8 = 'boolean';
            var7 = typeof var7;
            var6 = null;
            if(!(var8 === var7)) { _fun0014_ip = 116; continue _fun0014 }
case 117:
            var6 = var3.guard_allowed;
case 116:
            var2['guard_allowed'] = var6;
            var4 = _closure1_slot11;
            var3 = var3.fgs_guard_reason;
            var3 = var4.bind(var5)(var3);
            var2['fgs_guard_reason'] = var3;
            var1 = var2;
case 112:
            return var1;
        }
    };
    var4[var9] = var8;
    var9 = var7.APP_LIFECYCLE;
    var8 = function(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var7 = arg1;
            var3 = var7.data;
            var8 = null;
            var2 = var8 == var3;
            var1 = null;
            if(var2) { _fun0015_ip = 8; continue _fun0015 }
case 101:
            var2 = {};
            var9 = _closure1_slot11;
            var6 = var3.state;
            var5 = undefined;
            var6 = var9.bind(var5)(var6);
            if(!(var8 == var6)) { _fun0015_ip = 89; continue _fun0015 }
case 104:
            var8 = _closure1_slot11;
            var7 = var7.message;
            var6 = var8.bind(var5)(var7);
case 89:
            var2['state'] = var6;
            var4 = _closure1_slot11;
            var6 = var3.previous_state;
            var6 = var4.bind(var5)(var6);
            var2['previous_state'] = var6;
            var3 = var3.details;
            var3 = var4.bind(var5)(var3);
            var2['details'] = var3;
            var1 = var2;
case 8:
            return var1;
        }
    };
    var4[var9] = var8;
    var9 = var7.UI_LIFECYCLE;
    var8 = function(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var4 = var1.data;
            var7 = null;
            var2 = var7 == var4;
            var1 = null;
            if(var2) { _fun0016_ip = 118; continue _fun0016 }
case 113:
            var2 = {};
            var8 = _closure1_slot11;
            var3 = var4.activity_name;
            var6 = undefined;
            var3 = var8.bind(var6)(var3);
            if(!(var7 == var3)) { _fun0016_ip = 22; continue _fun0016 }
case 119:
            var9 = _closure1_slot11;
            var8 = var4.screen;
            var3 = var9.bind(var6)(var8);
case 22:
            var2['activity_name'] = var3;
            var8 = _closure1_slot11;
            var3 = var4.stage;
            var3 = var8.bind(var6)(var3);
            if(!(var7 == var3)) { _fun0016_ip = 8; continue _fun0016 }
case 17:
            var9 = _closure1_slot11;
            var8 = var4.state;
            var3 = var9.bind(var6)(var8);
case 8:
            var2['stage'] = var3;
            var8 = _closure1_slot11;
            var3 = var4.extra;
            var3 = var8.bind(var6)(var3);
            if(!(var7 == var3)) { _fun0016_ip = 120; continue _fun0016 }
case 121:
            var9 = _closure1_slot11;
            var8 = var4.details;
            var3 = var9.bind(var6)(var8);
case 120:
            if(!(var7 == var3)) { _fun0016_ip = 122; continue _fun0016 }
case 123:
            var5 = _closure1_slot11;
            var4 = var4.detail;
            var3 = var5.bind(var6)(var4);
case 122:
            var2['extra'] = var3;
            var1 = var2;
case 118:
            return var1;
        }
    };
    var4[var9] = var8;
    var _closure1_slot4 = var4;
    var4 = {};
    var9 = var7.TOUCH_EVENT;
    var8 = function(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var3 = var1.data;
            var6 = null;
            var2 = var6 == var3;
            var1 = null;
            if(var2) { _fun0017_ip = 124; continue _fun0017 }
case 113:
            var4 = _closure1_slot11;
            var2 = var3.touch_action_type;
            var5 = undefined;
            var4 = var4.bind(var5)(var2);
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 1;
            var2 = var9[var2];
            var8 = var8.bind(var5)(var2);
            var2 = var8.getCurrentHermesInstrumentedStatsSummary;
            var2 = var2.bind(var8)();
            var8 = var6 != var2;
            var6 = null;
            if(!var8) { _fun0017_ip = 90; continue _fun0017 }
case 5:
            var6 = var2;
case 90:
            var2 = {};
            var2['touch_action_type'] = var4;
            var4 = _closure1_slot10;
            var8 = var3.client_timestamp_ms;
            var8 = var4.bind(var5)(var8);
            var2['client_timestamp_ms'] = var8;
            var8 = var3.screen_x;
            var8 = var4.bind(var5)(var8);
            var2['screen_x'] = var8;
            var8 = var3.screen_y;
            var8 = var4.bind(var5)(var8);
            var2['screen_y'] = var8;
            var8 = var3.view_x;
            var8 = var4.bind(var5)(var8);
            var2['view_x'] = var8;
            var8 = var3.view_y;
            var8 = var4.bind(var5)(var8);
            var2['view_y'] = var8;
            var8 = var3.total_memory_mb;
            var8 = var4.bind(var5)(var8);
            var2['total_memory_mb'] = var8;
            var7 = _closure1_slot11;
            var8 = var3.memory_breakdown;
            var8 = var7.bind(var5)(var8);
            var2['memory_breakdown'] = var8;
            var2['hermes_instrumented_stats_summary'] = var6;
            var6 = var3.view_hierarchy;
            var6 = var7.bind(var5)(var6);
            var2['view_hierarchy'] = var6;
            var6 = var3.gesture;
            var6 = var7.bind(var5)(var6);
            var2['gesture'] = var6;
            var6 = var3.window_name;
            var6 = var7.bind(var5)(var6);
            var2['window_name'] = var6;
            var6 = var3.hit_test_duration_us;
            var6 = var4.bind(var5)(var6);
            var2['hit_test_duration_us'] = var6;
            var6 = var3.distance;
            var6 = var4.bind(var5)(var6);
            var2['distance'] = var6;
            var6 = var3.duration_ms;
            var6 = var4.bind(var5)(var6);
            var2['duration_ms'] = var6;
            var6 = var3.velocity;
            var6 = var4.bind(var5)(var6);
            var2['velocity'] = var6;
            var3 = var3.scale_factor;
            var3 = var4.bind(var5)(var3);
            var2['scale_factor'] = var3;
            var1 = var2;
case 124:
            return var1;
        }
    };
    var4[var9] = var8;
    var9 = var7.HTTP_REQUEST;
    var8 = function(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var3 = var1.data;
            var2 = null;
            var4 = var2 == var3;
            var1 = null;
            if(var4) { _fun0018_ip = 125; continue _fun0018 }
case 101:
            var5 = _closure1_slot11;
            var4 = var3.url;
            var7 = undefined;
            var5 = var5.bind(var7)(var4);
            if(!(var2 == var5)) { _fun0018_ip = 126; continue _fun0018 }
case 127:
            var8 = _closure1_slot11;
            var4 = var3.uri;
            var5 = var8.bind(var7)(var4);
case 126:
            if(!(var2 == var5)) { _fun0018_ip = 128; continue _fun0018 }
case 11:
            var8 = _closure1_slot11;
            var4 = var3.request_url;
            var5 = var8.bind(var7)(var4);
case 128:
            var8 = _closure1_slot11;
            var4 = var3.method;
            var4 = var8.bind(var7)(var4);
            if(!(var2 == var4)) { _fun0018_ip = 94; continue _fun0018 }
case 129:
            var6 = _closure1_slot11;
            var3 = var3.http_method;
            var4 = var6.bind(var7)(var3);
case 94:
            var3 = var2 == var5;
            var2 = null;
            if(var3) { _fun0018_ip = 130; continue _fun0018 }
case 131:
            var3 = {};
            var3['url'] = var5;
            var3['method'] = var4;
            var2 = var3;
case 130:
            var1 = var2;
case 125:
            return var1;
        }
    };
    var4[var9] = var8;
    var8 = var7.WEBSOCKET_MESSAGE_RECEIVED;
    var7 = function(arg1) {
        var3 = _closure1_slot9;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4[var8] = var7;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/telemetry_ring/channels/ZoomedInAnalyticBuilder.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function buildZoomedInAnalyticsEvent(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var3 = arg1;
            var4 = var3.key;
            var2 = _closure1_slot4;
            var2 = var4 in var2;
            var4 = var3.key;
            if(var2) { _fun0019_ip = 132; continue _fun0019 }
case 19:
            var2 = _closure1_slot5;
            var2 = var4 in var2;
            if(var2) { _fun0019_ip = 127; continue _fun0019 }
case 133:
            var2 = null;
            return var2;
case 127:
            var7 = var3.key;
            var5 = _closure1_slot5;
            var2 = var5[var7];
            var6 = var2.bind(var5)(var3);
            var2 = null;
            var5 = var2 == var6;
            if(var5) { _fun0019_ip = 134; continue _fun0019 }
case 6:
            var5 = {};
            var5['key'] = var7;
            var5['props'] = var6;
            var2 = var5;
case 134:
            return var2;
case 132:
            var2 = _closure1_slot4;
            var1 = var2[var4];
            var3 = var1.bind(var2)(var3);
            var1 = null;
            var2 = var1 == var3;
            if(var2) { _fun0019_ip = 135; continue _fun0019 }
case 106:
            var2 = {};
            var2['key'] = var4;
            var2['props'] = var3;
            var1 = var2;
case 135:
            return var1;
        }
    };
    var3['buildZoomedInAnalyticsEvent'] = var2;
    return var1;
})();
// app/modules/telemetry_ring/channels/ZoomedInAnalyticBuilder.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function coerceNumber(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = 'number';
            var3 = typeof var2;
            var1 = null;
            if(!(var5 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = global;
            var5 = var3.Number;
            var3 = var5.isFinite;
            var3 = var3.bind(var5)(var2);
            var1 = null;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var1 = function coerceString(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var4 = 'string';
            var3 = typeof var2;
            var1 = null;
            if(!(var4 === var3)) { _fun0002_ip = 5; continue _fun0002 }
case 3:
            var1 = var2;
case 5:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = function convertDeviceEventBreadcrumb(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var6 = var4.data;
            var1 = null;
            if(!(var1 != var6)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var2 = global;
            var3 = var2.Object;
            var2 = var3.keys;
            var2 = var2.bind(var3)(var6);
            var3 = var2.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0003_ip = 6; continue _fun0003 }
case 8:
            var7 = _closure1_slot3;
            var5 = var6.action;
            var3 = undefined;
            var5 = var7.bind(var3)(var5);
            if(!(var1 == var5)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var8 = _closure1_slot3;
            var7 = var4.message;
            var5 = var8.bind(var3)(var7);
case 9:
            var7 = _closure1_slot3;
            var4 = var4.message;
            var4 = var7.bind(var3)(var4);
            if(!(var1 == var4)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var7 = _closure1_slot3;
            var2 = var6.description;
            var4 = var7.bind(var3)(var2);
case 11:
            var2 = function formatDeviceMetadata(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = global;
                    var4 = var1.Object;
                    var3 = var4.entries;
                    var1 = arg1;
                    var4 = var3.bind(var4)(var1);
                    var3 = var4.filter;
                    var1 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                            if(var9) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                            var5 = var7;
case 13:
                            var5 = undefined;
                            var7 = var3;
                            if(var7) { _fun0005_ip = 15; continue _fun0005 }
case 4:
                            var6 = var6().value;
                            var7 = var2;
                            var7 = var7 === var8;
                            var3 = var7;
                            if(var7) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                            var5 = var6;
case 15:
                            var4 = var5;
                            var5 = var3;
                            if(var5) { _fun0005_ip = 17; continue _fun0005 }
case 10:
                            var2.return();
case 17:
                            var5 = var4;
                            var4 = null;
                            var4 = var4 != var5;
                            return var4;
case 9:
                            CatchBlockStart(arg_register=0);
                            if(var3) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                            var2.return();
case 18:
                            throw var1;
                        }
                    };
                    var4 = var3.bind(var4)(var1);
                    var5 = var4.length;
                    var3 = 0;
                    var1 = null;
                    if(!(var3 !== var5)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var3 = var4.map;
                    var2 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var3 = arg1;
                            var1 = var3[Symbol.iterator];
                            var3 = var1().next;
                            var4 = var3().value;
                            var2 = var1;
                            var7 = undefined;
                            var2 = var2 === var7;
                            var5 = undefined;
                            if(var2) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                            var5 = var4;
case 22:
                            var4 = undefined;
                            if(var2) { _fun0006_ip = 16; continue _fun0006 }
case 13:
                            var6 = var3().value;
                            var3 = var1;
                            var3 = var3 === var7;
                            var4 = undefined;
                            var2 = var3;
                            if(var3) { _fun0006_ip = 16; continue _fun0006 }
case 24:
                            var4 = var6;
                            var2 = var3;
case 16:
                            if(var2) { _fun0006_ip = 25; continue _fun0006 }
case 15:
                            var1.return();
case 25:
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
case 20:
                    return var1;
                }
            };
            var3 = var2.bind(var3)(var6);
            var2 = {};
            var2['action'] = var5;
            var2['description'] = var4;
            var2['metadata'] = var3;
            return var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot4 = var1;
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
    var9 = var7.DEVICE_EVENT;
    var8 = function(arg1) {
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4[var9] = var8;
    var9 = var7.REACT_SOFT_EXCEPTION;
    var8 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var3 = var1.data;
            var6 = null;
            var2 = var6 == var3;
            var1 = null;
            if(var2) { _fun0007_ip = 11; continue _fun0007 }
case 5:
            var2 = {};
            var8 = _closure1_slot3;
            var7 = var3.error_message;
            var5 = undefined;
            var7 = var8.bind(var5)(var7);
            if(!(var6 == var7)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
            var9 = _closure1_slot3;
            var8 = var3.message;
            var7 = var9.bind(var5)(var8);
case 26:
            var8 = var6 != var7;
            var6 = undefined;
            if(!var8) { _fun0007_ip = 28; continue _fun0007 }
case 29:
            var6 = var7;
case 28:
            var2['error_message'] = var6;
            var4 = _closure1_slot3;
            var6 = var3.component;
            var6 = var4.bind(var5)(var6);
            var2['component'] = var6;
            var3 = var3.stacktrace;
            var3 = var4.bind(var5)(var3);
            var2['stacktrace'] = var3;
            var1 = var2;
case 11:
            return var1;
        }
    };
    var4[var9] = var8;
    var9 = var7.NETWORK_CAPABILITIES_CHANGED;
    var8 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var4 = var1.data;
            var3 = null;
            var2 = var3 == var4;
            var1 = null;
            if(var2) { _fun0008_ip = 30; continue _fun0008 }
case 5:
            var2 = {};
            var8 = _closure1_slot3;
            var6 = var4.action;
            var7 = undefined;
            var6 = var8.bind(var7)(var6);
            var2['action'] = var6;
            var6 = var4.network_type;
            var6 = var8.bind(var7)(var6);
            var2['network_type'] = var6;
            var6 = _closure1_slot2;
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
            if(!(var6 === var5)) { _fun0008_ip = 31; continue _fun0008 }
case 11:
            var3 = var4.vpn_active;
case 31:
            var2['vpn_active'] = var3;
            var1 = var2;
case 30:
            return var1;
        }
    };
    var4[var9] = var8;
    var9 = var7.FOREGROUND_SERVICE;
    var8 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var8 = arg1;
            var3 = var8.data;
            var6 = null;
            var2 = var6 == var3;
            var1 = null;
            if(var2) { _fun0009_ip = 32; continue _fun0009 }
case 33:
            var2 = {};
            var9 = _closure1_slot3;
            var7 = var3.service_name;
            var5 = undefined;
            var7 = var9.bind(var5)(var7);
            var2['service_name'] = var7;
            var7 = var3.action;
            var7 = var9.bind(var5)(var7);
            var2['action'] = var7;
            var7 = var3.detail;
            var7 = var9.bind(var5)(var7);
            if(!(var6 == var7)) { _fun0009_ip = 34; continue _fun0009 }
case 35:
            var9 = _closure1_slot3;
            var8 = var8.message;
            var7 = var9.bind(var5)(var8);
case 34:
            var2['detail'] = var7;
            var8 = _closure1_slot3;
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
            if(!(var8 === var7)) { _fun0009_ip = 36; continue _fun0009 }
case 37:
            var6 = var3.guard_allowed;
case 36:
            var2['guard_allowed'] = var6;
            var4 = _closure1_slot3;
            var3 = var3.fgs_guard_reason;
            var3 = var4.bind(var5)(var3);
            var2['fgs_guard_reason'] = var3;
            var1 = var2;
case 32:
            return var1;
        }
    };
    var4[var9] = var8;
    var9 = var7.APP_LIFECYCLE;
    var8 = function(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var7 = arg1;
            var3 = var7.data;
            var8 = null;
            var2 = var8 == var3;
            var1 = null;
            if(var2) { _fun0010_ip = 12; continue _fun0010 }
case 5:
            var2 = {};
            var9 = _closure1_slot3;
            var6 = var3.state;
            var5 = undefined;
            var6 = var9.bind(var5)(var6);
            if(!(var8 == var6)) { _fun0010_ip = 38; continue _fun0010 }
case 39:
            var8 = _closure1_slot3;
            var7 = var7.message;
            var6 = var8.bind(var5)(var7);
case 38:
            var2['state'] = var6;
            var4 = _closure1_slot3;
            var6 = var3.previous_state;
            var6 = var4.bind(var5)(var6);
            var2['previous_state'] = var6;
            var3 = var3.details;
            var3 = var4.bind(var5)(var3);
            var2['details'] = var3;
            var1 = var2;
case 12:
            return var1;
        }
    };
    var4[var9] = var8;
    var9 = var7.UI_LIFECYCLE;
    var8 = function(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var4 = var1.data;
            var7 = null;
            var2 = var7 == var4;
            var1 = null;
            if(var2) { _fun0011_ip = 40; continue _fun0011 }
case 33:
            var2 = {};
            var8 = _closure1_slot3;
            var3 = var4.activity_name;
            var6 = undefined;
            var3 = var8.bind(var6)(var3);
            if(!(var7 == var3)) { _fun0011_ip = 25; continue _fun0011 }
case 41:
            var9 = _closure1_slot3;
            var8 = var4.screen;
            var3 = var9.bind(var6)(var8);
case 25:
            var2['activity_name'] = var3;
            var8 = _closure1_slot3;
            var3 = var4.stage;
            var3 = var8.bind(var6)(var3);
            if(!(var7 == var3)) { _fun0011_ip = 12; continue _fun0011 }
case 20:
            var9 = _closure1_slot3;
            var8 = var4.state;
            var3 = var9.bind(var6)(var8);
case 12:
            var2['stage'] = var3;
            var8 = _closure1_slot3;
            var3 = var4.extra;
            var3 = var8.bind(var6)(var3);
            if(!(var7 == var3)) { _fun0011_ip = 42; continue _fun0011 }
case 43:
            var9 = _closure1_slot3;
            var8 = var4.details;
            var3 = var9.bind(var6)(var8);
case 42:
            if(!(var7 == var3)) { _fun0011_ip = 44; continue _fun0011 }
case 45:
            var5 = _closure1_slot3;
            var4 = var4.detail;
            var3 = var5.bind(var6)(var4);
case 44:
            var2['extra'] = var3;
            var1 = var2;
case 40:
            return var1;
        }
    };
    var4[var9] = var8;
    var _closure1_slot0 = var4;
    var4 = {};
    var9 = var7.TOUCH_EVENT;
    var8 = function(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var3 = var1.data;
            var1 = null;
            var2 = var1 == var3;
            if(var2) { _fun0012_ip = 46; continue _fun0012 }
case 47:
            var2 = {};
            var7 = _closure1_slot3;
            var6 = var3.touch_action_type;
            var5 = undefined;
            var6 = var7.bind(var5)(var6);
            var2['touch_action_type'] = var6;
            var4 = _closure1_slot2;
            var6 = var3.client_timestamp_ms;
            var6 = var4.bind(var5)(var6);
            var2['client_timestamp_ms'] = var6;
            var6 = var3.screen_x;
            var6 = var4.bind(var5)(var6);
            var2['screen_x'] = var6;
            var6 = var3.screen_y;
            var6 = var4.bind(var5)(var6);
            var2['screen_y'] = var6;
            var6 = var3.view_x;
            var6 = var4.bind(var5)(var6);
            var2['view_x'] = var6;
            var6 = var3.view_y;
            var6 = var4.bind(var5)(var6);
            var2['view_y'] = var6;
            var6 = var3.total_memory_mb;
            var6 = var4.bind(var5)(var6);
            var2['total_memory_mb'] = var6;
            var6 = var3.memory_breakdown;
            var6 = var7.bind(var5)(var6);
            var2['memory_breakdown'] = var6;
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
case 46:
            return var1;
        }
    };
    var4[var9] = var8;
    var9 = var7.HTTP_REQUEST;
    var8 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var3 = var1.data;
            var2 = null;
            var4 = var2 == var3;
            var1 = null;
            if(var4) { _fun0013_ip = 48; continue _fun0013 }
case 5:
            var5 = _closure1_slot3;
            var4 = var3.url;
            var7 = undefined;
            var5 = var5.bind(var7)(var4);
            if(!(var2 == var5)) { _fun0013_ip = 49; continue _fun0013 }
case 50:
            var8 = _closure1_slot3;
            var4 = var3.uri;
            var5 = var8.bind(var7)(var4);
case 49:
            if(!(var2 == var5)) { _fun0013_ip = 51; continue _fun0013 }
case 15:
            var8 = _closure1_slot3;
            var4 = var3.request_url;
            var5 = var8.bind(var7)(var4);
case 51:
            var8 = _closure1_slot3;
            var4 = var3.method;
            var4 = var8.bind(var7)(var4);
            if(!(var2 == var4)) { _fun0013_ip = 52; continue _fun0013 }
case 53:
            var6 = _closure1_slot3;
            var3 = var3.http_method;
            var4 = var6.bind(var7)(var3);
case 52:
            var3 = var2 == var5;
            var2 = null;
            if(var3) { _fun0013_ip = 54; continue _fun0013 }
case 55:
            var3 = {};
            var3['url'] = var5;
            var3['method'] = var4;
            var2 = var3;
case 54:
            var1 = var2;
case 48:
            return var1;
        }
    };
    var4[var9] = var8;
    var8 = var7.WEBSOCKET_MESSAGE_RECEIVED;
    var7 = function(arg1) {
        var3 = function buildWebsocketMessageProps(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = arg1;
                var4 = var1.data;
                var1 = null;
                if(!(var1 != var4)) { _fun0014_ip = 56; continue _fun0014 }
case 7:
                var7 = _closure1_slot3;
                var2 = var4.category;
                var5 = undefined;
                var8 = var7.bind(var5)(var2);
                var2 = var4.type;
                var6 = var7.bind(var5)(var2);
                var2 = var4.name;
                var3 = var7.bind(var5)(var2);
                var2 = var4.message_identity;
                var2 = var7.bind(var5)(var2);
                var4 = var4.socket_kind;
                var4 = var7.bind(var5)(var4);
                if(!(var1 == var8)) { _fun0014_ip = 57; continue _fun0014 }
case 9:
                if(!(var1 == var6)) { _fun0014_ip = 57; continue _fun0014 }
case 20:
                var7 = var1 != var3;
                var5 = null;
                if(!var7) { _fun0014_ip = 58; continue _fun0014 }
case 57:
                var7 = new Array(3);
                var7[0] = var8;
                var7[1] = var6;
                var7[2] = var3;
                var6 = var7.filter;
                var3 = function(arg1) {
                    var2 = null;
                    var1 = arg1;
                    var1 = var2 != var1;
                    return var1;
                };
                var7 = var6.bind(var7)(var3);
                var6 = var7.join;
                var3 = '/';
                var5 = var6.bind(var7)(var3);
case 58:
                if(!(var1 != var2)) { _fun0014_ip = 37; continue _fun0014 }
case 59:
                var5 = var2;
case 37:
                if(!(var1 == var5)) { _fun0014_ip = 60; continue _fun0014 }
case 61:
                var3 = var1 == var4;
                var2 = null;
                if(var3) { _fun0014_ip = 62; continue _fun0014 }
case 60:
                var3 = {};
                var3['message_identity'] = var5;
                var3['socket_kind'] = var4;
                var2 = var3;
case 62:
                return var2;
case 56:
                return var1;
            }
        };
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4[var8] = var7;
    var _closure1_slot1 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/telemetry_ring/channels/ZoomedInAnalyticBuilder.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function buildZoomedInAnalyticsEvent(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = arg1;
            var4 = var3.key;
            var2 = _closure1_slot0;
            var2 = var4 in var2;
            var4 = var3.key;
            if(var2) { _fun0015_ip = 63; continue _fun0015 }
case 22:
            var2 = _closure1_slot1;
            var2 = var4 in var2;
            if(var2) { _fun0015_ip = 50; continue _fun0015 }
case 64:
            var2 = null;
            return var2;
case 50:
            var7 = var3.key;
            var5 = _closure1_slot1;
            var2 = var5[var7];
            var6 = var2.bind(var5)(var3);
            var2 = null;
            var5 = var2 == var6;
            if(var5) { _fun0015_ip = 65; continue _fun0015 }
case 10:
            var5 = {};
            var5['key'] = var7;
            var5['props'] = var6;
            var2 = var5;
case 65:
            return var2;
case 63:
            var2 = _closure1_slot0;
            var1 = var2[var4];
            var3 = var1.bind(var2)(var3);
            var1 = null;
            var2 = var1 == var3;
            if(var2) { _fun0015_ip = 66; continue _fun0015 }
case 67:
            var2 = {};
            var2['key'] = var4;
            var2['props'] = var3;
            var1 = var2;
case 66:
            return var1;
        }
    };
    var3['buildZoomedInAnalyticsEvent'] = var2;
    return var1;
})();
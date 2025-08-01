// app/stores/SelfPresenceStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot30 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function shouldShowApplicationActivity(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 14;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.shouldShareApplicationActivity;
        var2 = _closure1_slot12;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function shouldShowActivity(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 16;
            var1 = var5[var1];
            var5 = undefined;
            var8 = var4.bind(var5)(var1);
            var7 = var8.hasFlag;
            var1 = var3.flags;
            var4 = null;
            var9 = var4 != var1;
            var6 = 0;
            if(!var9) { _fun0002_ip = 53; continue _fun0002 }
 50:
            var6 = var1;
 53:
            var1 = _closure1_slot18;
            var1 = var1.CONTEXTLESS;
            var1 = var7.bind(var8)(var6, var1);
            if(var1) { _fun0002_ip = 344; continue _fun0002 }
 75:
            var6 = var3.type;
            var1 = _closure1_slot19;
            var1 = var1.LISTENING;
            if(!(var1 !== var6)) { _fun0002_ip = 270; continue _fun0002 }
 97:
            var1 = _closure1_slot19;
            var1 = var1.PLAYING;
            if(!(var1 !== var6)) { _fun0002_ip = 165; continue _fun0002 }
 111:
            var1 = _closure1_slot19;
            var1 = var1.STREAMING;
            if(!(var1 !== var6)) { _fun0002_ip = 135; continue _fun0002 }
 125:
            var1 = _closure1_slot19;
            var1 = var1.WATCHING;
 135:
            var1 = var3.application_id;
            var1 = var4 == var1;
            if(var1) { _fun0002_ip = 163; continue _fun0002 }
 148:
            var7 = _closure1_slot31;
            var6 = var3.application_id;
            var1 = var7.bind(var5)(var6);
 163:
            return var1;
 165:
            var1 = var3.application_id;
            if(!(var4 == var1)) { _fun0002_ip = 253; continue _fun0002 }
 175:
            var7 = var3.name;
            var6 = _closure1_slot10;
            var1 = var6.getGameByName;
            var6 = var1.bind(var6)(var7);
            if(!(var4 == var6)) { _fun0002_ip = 237; continue _fun0002 }
 199:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 15;
            var1 = var8[var1];
            var1 = var7.bind(var5)(var1);
            var7 = var1.ShowCurrentGame;
            var1 = var7.getSetting;
            var1 = var1.bind(var7)();
            _fun0002_ip = 251; continue _fun0002;
 237:
            var7 = _closure1_slot31;
            var6 = var6.id;
            var1 = var7.bind(var5)(var6);
 251:
            _fun0002_ip = 268; continue _fun0002;
 253:
            var7 = _closure1_slot31;
            var6 = var3.application_id;
            var1 = var7.bind(var5)(var6);
 268:
            return var1;
 270:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 17;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.bind(var5)(var3);
            if(var1) { _fun0002_ip = 328; continue _fun0002 }
 298:
            var1 = var3.application_id;
            var1 = var4 != var1;
            if(!var1) { _fun0002_ip = 326; continue _fun0002 }
 311:
            var4 = _closure1_slot31;
            var3 = var3.application_id;
            var1 = var4.bind(var5)(var3);
 326:
            _fun0002_ip = 342; continue _fun0002;
 328:
            var3 = _closure1_slot8;
            var2 = var3.shouldShowActivity;
            var1 = var2.bind(var3)();
 342:
            return var1;
 344:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var9 = function handleUpdate() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot11;
            var1 = var4.getIdleSince;
            var4 = var1.bind(var4)();
            var1 = null;
            var5 = var1 != var4;
            var6 = 0;
            var1 = 0;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
 32:
            var1 = var4;
 35:
            _closure1_slot23 = var1;
            var4 = _closure1_slot11;
            var1 = var4.isAFK;
            var1 = var1.bind(var4)();
            _closure1_slot25 = var1;
            var1 = _closure1_slot26;
            if(var1) { _fun0003_ip = 155; continue _fun0003 }
 64:
            var1 = _closure1_slot20;
            if(var1) { _fun0003_ip = 139; continue _fun0003 }
 71:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 15;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var4 = var1.StatusSetting;
            var1 = var4.getSetting;
            var1 = var1.bind(var4)();
            var4 = _closure1_slot17;
            var4 = var4.UNKNOWN;
            if(!(var1 === var4)) { _fun0003_ip = 133; continue _fun0003 }
 123:
            var4 = _closure1_slot17;
            var1 = var4.ONLINE;
 133:
            _closure1_slot21 = var1;
            _fun0003_ip = 163; continue _fun0003;
 139:
            var1 = _closure1_slot17;
            var1 = var1.INVISIBLE;
            _closure1_slot21 = var1;
            _fun0003_ip = 163; continue _fun0003;
 155:
            var1 = _closure1_slot22;
            _closure1_slot21 = var1;
 163:
            var4 = _closure1_slot21;
            var1 = _closure1_slot17;
            var1 = var1.ONLINE;
            var1 = var4 === var1;
            if(!var1) { _fun0003_ip = 192; continue _fun0003 }
 184:
            var4 = _closure1_slot23;
            var1 = var4 > var6;
 192:
            if(!var1) { _fun0003_ip = 209; continue _fun0003 }
 195:
            var1 = _closure1_slot17;
            var1 = var1.IDLE;
            _closure1_slot21 = var1;
 209:
            var1 = _closure1_slot26;
            if(var1) { _fun0003_ip = 264; continue _fun0003 }
 216:
            var4 = _closure1_slot21;
            var1 = _closure1_slot17;
            var1 = var1.INVISIBLE;
            if(!(var4 !== var1)) { _fun0003_ip = 264; continue _fun0003 }
 234:
            var4 = _closure1_slot13;
            var1 = var4.getActivities;
            var5 = var1.bind(var4)();
            var4 = var5.filter;
            var1 = _closure1_slot32;
            var5 = var4.bind(var5)(var1);
            _fun0003_ip = 268; continue _fun0003;
 264:
            var5 = new Array(0);
 268:
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 18;
            var4 = var4[var1];
            var1 = undefined;
            var7 = var7.bind(var1)(var4);
            var4 = _closure1_slot24;
            var7 = var7.bind(var1)(var4, var5);
            var4 = false;
            if(var7) { _fun0003_ip = 311; continue _fun0003 }
 305:
            _closure1_slot24 = var5;
            var4 = true;
 311:
            var7 = _closure1_slot16;
            var5 = var7.getRemoteActivities;
            var5 = var5.bind(var7)();
            var7 = _closure1_slot27;
            if(!(var7 !== var5)) { _fun0003_ip = 341; continue _fun0003 }
 335:
            _closure1_slot27 = var5;
            var4 = true;
 341:
            var7 = _closure1_slot16;
            var5 = var7.getHiddenActivities;
            var5 = var5.bind(var7)();
            var7 = _closure1_slot28;
            if(!(var7 !== var5)) { _fun0003_ip = 367; continue _fun0003 }
 363:
            _closure1_slot28 = var5;
 367:
            if(!var4) { _fun0003_ip = 482; continue _fun0003 }
 370:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 19;
            var4 = var7[var4];
            var5 = var5.bind(var1)(var4);
            var11 = _closure1_slot24;
            var7 = new Array(0);
            var12 = var7;
            var10 = 0;
            var10 = arraySpread(var12, var11, var10);
            var9 = _closure1_slot27;
            var8 = var9.filter;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot19;
                var1 = var1.CUSTOM_STATUS;
                var1 = var2 !== var1;
                return var1;
            };
            var11 = var8.bind(var9)(var4);
            var12 = var7;
            var4 = arraySpread(var12, var11, var10);
            var6 = var7.sort;
            var4 = _closure1_slot15;
            var4 = var6.bind(var7)(var4);
            var5 = var5.bind(var1)(var4);
            var4 = var5.uniqBy;
            var2 = function(arg1) {
                var1 = arg1;
                var11 = var1.type;
                var9 = var1.application_id;
                var7 = var1.name;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var12 = '';
                var1 = ':';
                var10 = var1;
                var8 = var1;
                var1 = var12[var3](var11, var10, var9, var8, var7, var6);
                return var1;
            };
            var4 = var4.bind(var5)(var2);
            var2 = var4.value;
            var2 = var2.bind(var4)();
            _closure1_slot29 = var2;
 482:
            return var1;
        }
    };
    var _closure1_slot33 = var9;
    var10 = function handleConnectionOpen() {
        var1 = false;
        _closure1_slot26 = var1;
        var1 = _closure1_slot17;
        var1 = var1.UNKNOWN;
        _closure1_slot22 = var1;
        var3 = _closure1_slot33;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var5 = _closure1_slot14;
        var4 = var5.setCurrentUserOnConnectionOpen;
        var3 = _closure1_slot21;
        var2 = _closure1_slot29;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot34 = var10;
    var2 = global;
    var13 = var2.Object;
    var12 = var13.defineProperty;
    var11 = {};
    var8 = true;
    var11['value'] = var8;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var11);
    var12 = 0;
    var11 = var6[var12];
    var1 = undefined;
    var11 = var7.bind(var1)(var11);
    var _closure1_slot3 = var11;
    var11 = 1;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot4 = var11;
    var11 = 2;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot5 = var11;
    var11 = 3;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot6 = var11;
    var11 = 4;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot7 = var11;
    var11 = 5;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot8 = var11;
    var11 = 6;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot9 = var11;
    var11 = 7;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot10 = var11;
    var11 = 8;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot11 = var11;
    var11 = 9;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot12 = var11;
    var11 = 10;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot13 = var11;
    var11 = 11;
    var13 = var6[var11];
    var13 = var7.bind(var1)(var13);
    var _closure1_slot14 = var13;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.sortActivity;
    var _closure1_slot15 = var11;
    var11 = 12;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot16 = var11;
    var11 = 13;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var13 = var11.StatusTypes;
    var _closure1_slot17 = var13;
    var14 = var11.ActivityFlags;
    var _closure1_slot18 = var14;
    var11 = var11.ActivityTypes;
    var _closure1_slot19 = var11;
    var11 = false;
    var _closure1_slot20 = var11;
    var14 = var13.ONLINE;
    var _closure1_slot21 = var14;
    var13 = var13.UNKNOWN;
    var _closure1_slot22 = var13;
    var _closure1_slot23 = var12;
    var12 = new Array(0);
    var _closure1_slot24 = var12;
    var _closure1_slot25 = var11;
    var _closure1_slot26 = var8;
    var12 = var2.Object;
    var11 = var12.freeze;
    var8 = new Array(0);
    var8 = var11.bind(var12)(var8);
    var _closure1_slot27 = var8;
    var11 = var2.Object;
    var8 = var11.freeze;
    var2 = new Array(0);
    var2 = var8.bind(var11)(var2);
    var _closure1_slot28 = var2;
    var2 = new Array(0);
    var _closure1_slot29 = var2;
    var2 = 20;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function SelfPresenceStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot30;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 105; continue _fun0004;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var9 = var4.waitFor;
            var15 = _closure1_slot11;
            var14 = _closure1_slot9;
            var13 = _closure1_slot13;
            var12 = _closure1_slot16;
            var11 = _closure1_slot12;
            var10 = _closure1_slot10;
            var16 = var4;
            var2 = var16[var9](var15, var14, var13, var12, var11, var10, var9);
            var3 = var4.syncWith;
            var5 = _closure1_slot13;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot33;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'getLocalPresence';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var3 = _closure1_slot21;
            var1['status'] = var3;
            var3 = _closure1_slot23;
            var1['since'] = var3;
            var3 = _closure1_slot24;
            var1['activities'] = var3;
            var2 = _closure1_slot25;
            var1['afk'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getStatus';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getActivities';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = arguments[0];
                var2 = undefined;
                if(!(var1 === var2)) { _fun0005_ip = 11; continue _fun0005 }
 9:
                var1 = true;
 11:
                if(var1) { _fun0005_ip = 23; continue _fun0005 }
 17:
                var1 = _closure1_slot24;
                _fun0005_ip = 27; continue _fun0005;
 23:
                var1 = _closure1_slot29;
 27:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getHiddenActivities';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot28;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getPrimaryActivity';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = arguments[0];
                var2 = undefined;
                if(!(var1 === var2)) { _fun0006_ip = 11; continue _fun0006 }
 9:
                var1 = true;
 11:
                if(var1) { _fun0006_ip = 29; continue _fun0006 }
 17:
                var3 = _closure1_slot24;
                var1 = 0;
                var1 = var3[var1];
                _fun0006_ip = 39; continue _fun0006;
 29:
                var3 = _closure1_slot29;
                var2 = 0;
                var1 = var3[var2];
 39:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getApplicationActivity';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = arguments[1];
                var3 = this;
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = undefined;
                if(!(var4 === var2)) { _fun0007_ip = 23; continue _fun0007 }
 21:
                var4 = true;
 23:
                var2 = var3.findActivity;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.application_id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'findActivity';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = arguments[1];
                var2 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0008_ip = 14; continue _fun0008 }
 12:
                var3 = true;
 14:
                var1 = var2.getActivities;
                var3 = var1.bind(var2)(var3);
                var2 = var3.find;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'SelfPresenceStore';
    var8['displayName'] = var2;
    var2 = 21;
    var2 = var6[var2];
    var17 = var7.bind(var1)(var2);
    var2 = {};
    var2['START_SESSION'] = var9;
    var11 = function handleConnectionOpenTracked() {
        var2 = _closure1_slot34;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['CONNECTION_OPEN'] = var11;
    var2['CONNECTION_OPEN_SUPPLEMENTAL'] = var10;
    var2['OVERLAY_INITIALIZE'] = var10;
    var2['CONNECTION_CLOSED'] = var9;
    var2['IDLE'] = var9;
    var2['AFK'] = var9;
    var2['RUNNING_GAMES_CHANGE'] = var9;
    var2['STREAMING_UPDATE'] = var9;
    var2['USER_SETTINGS_PROTO_UPDATE'] = var9;
    var2['LOCAL_ACTIVITY_UPDATE'] = var9;
    var2['SPOTIFY_PLAYER_STATE'] = var9;
    var2['SPOTIFY_PLAYER_PLAY'] = var9;
    var2['USER_CONNECTIONS_UPDATE'] = var9;
    var2['SESSIONS_REPLACE'] = var9;
    var2['RPC_APP_DISCONNECTED'] = var9;
    var2['LIBRARY_FETCH_SUCCESS'] = var9;
    var2['LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS'] = var9;
    var9 = function handleLogout() {
        var2 = true;
        _closure1_slot26 = var2;
        var2 = _closure1_slot21;
        _closure1_slot22 = var2;
        var2 = _closure1_slot33;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['LOGOUT'] = var9;
    var9 = function handleForceInvisible(arg1) {
        var1 = arg1;
        var2 = var1.invisible;
        _closure1_slot20 = var2;
        var2 = _closure1_slot33;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['FORCE_INVISIBLE'] = var9;
    var4 = function handleWindowFocus() {
        var2 = false;
        _closure1_slot20 = var2;
        var2 = _closure1_slot33;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['WINDOW_FOCUS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var18 = var4;
    var16 = var2;
    var2 = new var18[var8](var17, var16, var15);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/SelfPresenceStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
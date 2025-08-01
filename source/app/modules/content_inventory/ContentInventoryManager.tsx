// app/modules/content_inventory/ContentInventoryManager.tsx
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot24 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function getBackoffJitter() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arguments[0];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0002_ip = 11; continue _fun0002 }
 9:
            var3 = 0;
 11:
            var1 = global;
            var2 = var1.Math;
            var1 = var2.random;
            var2 = var1.bind(var2)();
            var1 = 1;
            var1 = var3 + var1;
            var2 = var2 * var1;
            var1 = _closure1_slot16;
            var1 = var2 * var1;
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function setFeedState(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 17;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CONTENT_INVENTORY_SET_FEED_STATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['feedId'] = var5;
        var5 = arg2;
        var2['state'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function canFetch(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot20;
            var2 = var3.has;
            var2 = var2.bind(var3)(var4);
            if(var2) { _fun0003_ip = 285; continue _fun0003 }
 26:
            var2 = _closure1_slot14;
            var2 = var2.GAME_PROFILE_FEED;
            if(!(var4 === var2)) { _fun0003_ip = 108; continue _fun0003 }
 40:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 18;
            var2 = var3[var2];
            var3 = undefined;
            var6 = var5.bind(var3)(var2);
            var5 = var6.canSeeGameProfile;
            var2 = 'ContentInventoryManager';
            var2 = var5.bind(var6)(var2);
            if(var2) { _fun0003_ip = 86; continue _fun0003 }
 82:
            var2 = false;
            return var2;
 86:
            var5 = _closure1_slot13;
            var2 = var5.getFeed;
            var2 = var2.bind(var5)(var4);
            if(!(var3 === var2)) { _fun0003_ip = 281; continue _fun0003 }
 108:
            var2 = _closure1_slot17;
            if(!(var4 === var2)) { _fun0003_ip = 269; continue _fun0003 }
 119:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 19;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var3);
            var3 = var5.isEligibleForContentInventoryV1;
            var2 = 'ContentInventoryManager';
            var2 = var3.bind(var5)(var2);
            if(var2) { _fun0003_ip = 165; continue _fun0003 }
 161:
            var2 = false;
            return var2;
 165:
            var2 = _closure1_slot12;
            var2 = var2.hidden;
            if(!var2) { _fun0003_ip = 199; continue _fun0003 }
 178:
            var3 = _closure1_slot13;
            var2 = var3.getFeed;
            var3 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 == var3)) { _fun0003_ip = 277; continue _fun0003 }
 199:
            var3 = _closure1_slot9;
            var2 = var3.isConnected;
            var2 = var2.bind(var3)();
            if(var2) { _fun0003_ip = 220; continue _fun0003 }
 216:
            var2 = false;
            return var2;
 220:
            var3 = _closure1_slot11;
            var2 = var3.getIdleSince;
            var3 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var3)) { _fun0003_ip = 269; continue _fun0003 }
 240:
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var2 = var2 - var3;
            var1 = _closure1_slot18;
            if(!(!(var2 > var1))) { _fun0003_ip = 273; continue _fun0003 }
 269:
            var1 = true;
            return var1;
 273:
            var1 = false;
            return var1;
 277:
            var1 = false;
            return var1;
 281:
            var1 = false;
            return var1;
 285:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function cancelScheduledFetch(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot26;
            var3 = {};
            var1 = false;
            var3['loading'] = var1;
            var1 = undefined;
            var3 = var5.bind(var1)(var4, var3);
            var5 = _closure1_slot19;
            var3 = var5.get;
            var5 = var3.bind(var5)(var4);
            if(!(var1 !== var5)) { _fun0004_ip = 72; continue _fun0004 }
 45:
            var3 = global;
            var3 = var3.clearTimeout;
            var3 = var3.bind(var1)(var5);
            var3 = _closure1_slot19;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
 72:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function scheduleNextFetch() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = _closure1_slot21;
            var3 = var4.get;
            var1 = _closure1_slot17;
            var3 = var3.bind(var4)(var1);
            var4 = null;
            var5 = var4 != var3;
            var9 = 0;
            var1 = 0;
            if(!var5) { _fun0005_ip = 37; continue _fun0005 }
 34:
            var1 = var3;
 37:
            if(!(var1 > var9)) { _fun0005_ip = 51; continue _fun0005 }
 41:
            var3 = 4;
            if(!(!(var1 <= var3))) { _fun0005_ip = 451; continue _fun0005 }
 51:
            var5 = _closure1_slot28;
            var3 = _closure1_slot17;
            var7 = undefined;
            var3 = var5.bind(var7)(var3);
            var5 = _closure1_slot27;
            var3 = _closure1_slot17;
            var3 = var5.bind(var7)(var3);
            if(!var3) { _fun0005_ip = 451; continue _fun0005 }
 85:
            var6 = _closure1_slot13;
            var5 = var6.getFeed;
            var3 = _closure1_slot17;
            var5 = var5.bind(var6)(var3);
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0005_ip = 119; continue _fun0005 }
 113:
            var3 = var5.refresh_stale_inbox_after_ms;
 119:
            if(!(var4 != var3)) { _fun0005_ip = 134; continue _fun0005 }
 123:
            var3 = _closure1_slot22;
            if(!(var4 != var3)) { _fun0005_ip = 451; continue _fun0005 }
 134:
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0005_ip = 149; continue _fun0005 }
 143:
            var3 = var5.expired_at;
 149:
            var3 = var4 == var3;
            var8 = 0;
            if(var3) { _fun0005_ip = 221; continue _fun0005 }
 158:
            var3 = global;
            var10 = var3.Date;
            var13 = var5.expired_at;
            var6 = var10.prototype;
            var6 = Object.create(var6, {constructor: {value: var10}});
            var14 = var6;
            var5 = new var14[var10](var13, var12);
            var6 = var5 instanceof Object ? var5 : var6;
            var5 = var6.getTime;
            var5 = var5.bind(var6)();
            var6 = var3.Date;
            var3 = var6.now;
            var3 = var3.bind(var6)();
            var8 = var5 - var3;
 221:
            var3 = _closure1_slot22;
            var3 = var4 == var3;
            var6 = 0;
            if(var3) { _fun0005_ip = 295; continue _fun0005 }
 234:
            var3 = global;
            var10 = var3.Date;
            var13 = _closure1_slot22;
            var5 = var10.prototype;
            var5 = Object.create(var5, {constructor: {value: var10}});
            var14 = var5;
            var4 = new var14[var10](var13, var12);
            var5 = var4 instanceof Object ? var4 : var5;
            var4 = var5.getTime;
            var4 = var4.bind(var5)();
            var5 = var3.Date;
            var3 = var5.now;
            var3 = var3.bind(var5)();
            var6 = var4 - var3;
 295:
            var1 = var1 > var9;
            var4 = 0;
            if(!var1) { _fun0005_ip = 312; continue _fun0005 }
 304:
            var1 = _closure1_slot25;
            var4 = var1.bind(var7)();
 312:
            var1 = global;
            var5 = var1.Math;
            var3 = var5.max;
            var3 = var3.bind(var5)(var9, var6, var8);
            var6 = var3 + var4;
            var5 = _closure1_slot26;
            var4 = _closure1_slot17;
            var3 = {};
            var8 = false;
            var3['loading'] = var8;
            var10 = var1.Date;
            var9 = var1.Date;
            var8 = var9.now;
            var8 = var8.bind(var9)();
            var13 = var8 + var6;
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var14 = var9;
            var8 = new var14[var10](var13, var12);
            var8 = var8 instanceof Object ? var8 : var9;
            var3['nextFetchDate'] = var8;
            var3 = var5.bind(var7)(var4, var3);
            var4 = _closure1_slot19;
            var3 = var4.set;
            var2 = _closure1_slot17;
            var5 = var1.setTimeout;
            var1 = function() {
                var3 = _closure1_slot30;
                var2 = {};
                var4 = _closure1_slot17;
                var2['feedId'] = var4;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 20;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var4 = var4.ContentInventoryFeature;
                var4 = var4.INBOX;
                var2['feature'] = var4;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var5.bind(var7)(var1, var6);
            var1 = var3.bind(var4)(var2, var1);
 451:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function fetchInventory() {
        var1 = undefined;
        var4 = _closure1_slot31;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function _fetchInventory() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 625; continue _fun0006 }
 15:
                    var3 = var2.feedId;
                    var4 = var3;
                    var _closure4_slot0 = var3;
                    var3 = var2.feature;
                    var13 = var3;
                    var _closure4_slot1 = var3;
                    var9 = var2.force;
                    var3 = undefined;
                    if(!(var9 === var3)) { _fun0006_ip = 55; continue _fun0006 }
 53:
                    var9 = false;
 55:
                    var _closure4_slot2 = var9;
                    var15 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    SaveGenerator(address=69);
 67:
                    return var3;
 69:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 622; continue _fun0006 }
 78:
                    var11 = _closure1_slot27;
                    var10 = var4;
                    var10 = var11.bind(var3)(var10);
                    if(var10) { _fun0006_ip = 102; continue _fun0006 }
 96:
                    if(!var9) { _fun0006_ip = 619; continue _fun0006 }
 102: // try_start_0
                    var10 = _closure1_slot13;
                    var9 = var10.getFeed;
                    var11 = var4;
                    var14 = var9.bind(var10)(var11);
                    var15 = var14;
                    var10 = _closure1_slot20;
                    var9 = var10.add;
                    var9 = var9.bind(var10)(var11);
                    var10 = _closure1_slot26;
                    var9 = {};
                    var12 = true;
                    var9['loading'] = var12;
                    var9 = var10.bind(var3)(var11, var9);
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 16;
                    var9 = var11[var9];
                    var12 = var10.bind(var3)(var9);
                    var11 = var12.getMyContentInventory;
                    var9 = {};
                    var10 = null;
                    var16 = var10 == var14;
                    var14 = undefined;
                    if(var16) { _fun0006_ip = 203; continue _fun0006 }
 195:
                    var14 = var15.refresh_token;
 203:
                    var9['token'] = var14;
                    var14 = var4;
                    var9['feedId'] = var14;
                    var9['feature'] = var13;
                    var9 = var11.bind(var12)(var9);
                    SaveGenerator(address=230);
 228:
                    return var9;
 230:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=10);
                    if(var11) { _fun0006_ip = 367; continue _fun0006 }
 239:
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var11 = 17;
                    var11 = var13[var11];
                    var14 = var12.bind(var3)(var11);
                    var13 = var14.dispatch;
                    var11 = {};
                    var12 = 'CONTENT_INVENTORY_SET_FEED';
                    var11['type'] = var12;
                    var12 = var4;
                    var11['feedId'] = var12;
                    var11['feed'] = var9;
                    var11 = var13.bind(var14)(var11);
                    var14 = _closure1_slot21;
                    var13 = var14.set;
                    var11 = 0;
                    var11 = var13.bind(var14)(var12, var11);
                    var13 = _closure1_slot20;
                    var11 = var13.delete;
                    var11 = var11.bind(var13)(var12);
                    var13 = _closure1_slot26;
                    var11 = {};
                    var14 = false;
                    var11['loading'] = var14;
                    var11 = var13.bind(var3)(var12, var11);
                    var11 = _closure1_slot17;
                    if(!(var12 === var11)) { _fun0006_ip = 362; continue _fun0006 }
 350:
                    _closure1_slot22 = var10;
                    var10 = _closure1_slot29;
                    var10 = var10.bind(var3)();
 362: // try_end0
                    _fun0006_ip = 619; continue _fun0006;
 367:
                    return var9;
 370: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var11 = _closure1_slot21;
                    var10 = var11.get;
                    var9 = var4;
                    var10 = var10.bind(var11)(var9);
                    var8 = var10;
                    var9 = null;
                    var10 = var9 != var10;
                    var9 = 0;
                    if(!var10) { _fun0006_ip = 406; continue _fun0006 }
 403:
                    var9 = var8;
 406:
                    var7 = var9;
                    var8 = 4;
                    if(!(!(var9 < var8))) { _fun0006_ip = 471; continue _fun0006 }
 416:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 17;
                    var8 = var10[var8];
                    var10 = var9.bind(var3)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'CONTENT_INVENTORY_CLEAR_FEED';
                    var8['type'] = var11;
                    var11 = var4;
                    var8['feedId'] = var11;
                    var8 = var9.bind(var10)(var8);
                    _fun0006_ip = 605; continue _fun0006;
 471:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 14;
                    var8 = var10[var8];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.Millis;
                    var8 = var8.MINUTE;
                    var12 = global;
                    var11 = var12.Math;
                    var9 = var11.pow;
                    var10 = var7;
                    var7 = 2;
                    var7 = var9.bind(var11)(var7, var10);
                    var13 = var8 * var7;
                    var7 = _closure1_slot25;
                    var11 = var7.bind(var3)(var10);
                    var8 = _closure1_slot19;
                    var7 = var8.set;
                    var9 = var4;
                    var12 = var12.setTimeout;
                    var11 = var13 + var11;
                    var6 = function() {
                        var3 = _closure1_slot30;
                        var2 = {};
                        var4 = _closure4_slot0;
                        var2['feedId'] = var4;
                        var4 = _closure4_slot1;
                        var2['feature'] = var4;
                        var1 = _closure4_slot2;
                        var2['force'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var6 = var12.bind(var3)(var6, var11);
                    var6 = var7.bind(var8)(var9, var6);
                    var8 = _closure1_slot21;
                    var7 = var8.set;
                    var6 = 1;
                    var6 = var10 + var6;
                    var6 = var7.bind(var8)(var9, var6);
 605:
                    var6 = _closure1_slot20;
                    var5 = var6.delete;
                    var4 = var5.bind(var6)(var4);
 619:
                    return var3;
 622:
                    return var2;
 625:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot31 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function handleUpdatePollingState() {
        var2 = _closure1_slot29;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = function handlePostConnectionOpen() {
        var2 = _closure1_slot32;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = function handleConnectionClosed() {
        var3 = _closure1_slot28;
        var2 = _closure1_slot17;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot34 = var1;
    var1 = function handleManualRefresh(arg1) {
        var1 = arg1;
        var5 = var1.feedId;
        var4 = var1.feature;
        var3 = _closure1_slot28;
        var1 = undefined;
        var3 = var3.bind(var1)(var5);
        var3 = _closure1_slot30;
        var2 = {};
        var2['feedId'] = var5;
        var2['feature'] = var4;
        var4 = true;
        var2['force'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot35 = var1;
    var1 = function handleInboxStale(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var5 = var1.refreshAfterMs;
            var4 = _closure1_slot13;
            var3 = var4.getFeed;
            var1 = _closure1_slot17;
            var6 = var3.bind(var4)(var1);
            var7 = null;
            var4 = var7 == var6;
            var1 = undefined;
            var3 = undefined;
            if(var4) { _fun0007_ip = 50; continue _fun0007 }
 44:
            var3 = var6.refresh_stale_inbox_after_ms;
 50:
            if(!(var7 != var3)) { _fun0007_ip = 133; continue _fun0007 }
 54:
            var3 = global;
            var8 = var3.Date;
            var4 = var8.now;
            var4 = var4.bind(var8)();
            if(!(var7 == var5)) { _fun0007_ip = 81; continue _fun0007 }
 75:
            var5 = var6.refresh_stale_inbox_after_ms;
 81:
            var9 = var4 + var5;
            var3 = var3.Date;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var10 = var4;
            var3 = new var10[var3](var9, var8);
            var4 = var3 instanceof Object ? var3 : var4;
            var3 = var4.toUTCString;
            var3 = var3.bind(var4)();
            _closure1_slot22 = var3;
            var2 = _closure1_slot29;
            var2 = var2.bind(var1)();
 133:
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function handleSpotifyNewTrack(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var4 = var1.connectionId;
            var3 = var1.track;
            var2 = null;
            if(!(var2 != var4)) { _fun0008_ip = 79; continue _fun0008 }
 20:
            var7 = _closure1_slot10;
            var6 = var7.getAccount;
            var5 = _closure1_slot15;
            var5 = var5.SPOTIFY;
            var6 = var6.bind(var7)(var4, var5);
            var7 = var2 == var6;
            var2 = undefined;
            var5 = undefined;
            if(var7) { _fun0008_ip = 66; continue _fun0008 }
 60:
            var5 = var6.showActivity;
 66:
            if(!var5) { _fun0008_ip = 79; continue _fun0008 }
 69:
            var1 = _closure1_slot23;
            var1 = var1.bind(var2)(var4, var3);
 79:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function handleFetchGameProfileFeed() {
        var3 = _closure1_slot30;
        var2 = {};
        var4 = _closure1_slot14;
        var4 = var4.GLOBAL_FEED;
        var2['feedId'] = var4;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 20;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var4 = var4.ContentInventoryFeature;
        var4 = var4.GAME_PROFILE;
        var2['feature'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot38 = var1;
    var9 = global;
    var11 = var9.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var4 = true;
    var8['value'] = var4;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var12 = 2;
    var8 = var6[var12];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var8 = 10;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var8 = 12;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var10 = var8.ContentInventoryFeedKey;
    var _closure1_slot14 = var10;
    var8 = 13;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.PlatformTypes;
    var _closure1_slot15 = var8;
    var8 = 14;
    var11 = var6[var8];
    var11 = var7.bind(var1)(var11);
    var11 = var11.Millis;
    var11 = var11.MINUTE;
    var11 = var12 * var11;
    var _closure1_slot16 = var11;
    var10 = var10.GLOBAL_FEED;
    var _closure1_slot17 = var10;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var10 = var8.MINUTE;
    var8 = 15;
    var10 = var8 * var10;
    var _closure1_slot18 = var10;
    var10 = var9.Map;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var16 = var11;
    var10 = new var16[var10](var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot19 = var10;
    var10 = var9.Set;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var16 = var11;
    var10 = new var16[var10](var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot20 = var10;
    var9 = var9.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var16 = var10;
    var9 = new var16[var9](var15);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot21 = var9;
    var9 = null;
    var _closure1_slot22 = var9;
    var8 = var6[var8];
    var11 = var5.bind(var1)(var8);
    var10 = var11.debounce;
    var8 = 16;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.postTrackToContentInventory;
    var8 = {};
    var8['trailing'] = var4;
    var4 = 3000;
    var4 = var10.bind(var11)(var9, var4, var8);
    var _closure1_slot23 = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function ContentInventoryManager(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot4;
                var2 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot24;
                var1 = var1.bind(var4)();
                if(var1) { _fun0009_ip = 84; continue _fun0009 }
 71:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0009_ip = 118; continue _fun0009;
 84:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 118:
                var1 = var2.bind(var4)(var5, var1);
                var2 = {};
                var4 = _closure1_slot33;
                var2['POST_CONNECTION_OPEN'] = var4;
                var4 = _closure1_slot34;
                var2['CONNECTION_CLOSED'] = var4;
                var4 = _closure1_slot32;
                var2['WINDOW_FOCUS'] = var4;
                var2['IDLE'] = var4;
                var2['CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN'] = var4;
                var4 = _closure1_slot35;
                var2['CONTENT_INVENTORY_MANUAL_REFRESH'] = var4;
                var4 = _closure1_slot36;
                var2['CONTENT_INVENTORY_INBOX_STALE'] = var4;
                var4 = _closure1_slot37;
                var2['SPOTIFY_NEW_TRACK'] = var4;
                var3 = _closure1_slot38;
                var2['GAME_PROFILE_OPEN'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var16 = var4;
    var2 = new var16[var2](var15);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/content_inventory/ContentInventoryManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
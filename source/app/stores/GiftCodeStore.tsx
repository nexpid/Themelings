// app/stores/GiftCodeStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
            _closure1_slot21 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function updateGiftCode(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot8;
            var3 = var4.createFromServer;
            var2 = arg1;
            var6 = var3.bind(var4)(var2);
            var4 = var6.code;
            var3 = _closure1_slot12;
            var2 = var3.has;
            var5 = var2.bind(var3)(var4);
            var3 = _closure1_slot12;
            var2 = var3.set;
            if(var5) { _fun0002_ip = 137; continue _fun0002 }
 52:
            var5 = var2.bind(var3)(var4, var6);
            var7 = var6.expiresAt;
            var5 = null;
            if(!(var5 != var7)) { _fun0002_ip = 168; continue _fun0002 }
 70:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 7;
            var5 = var7[var5];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var5 = var5.Timeout;
            var8 = var5.prototype;
            var8 = Object.create(var8, {constructor: {value: var5}});
            var11 = var8;
            var5 = new var11[var5](var10);
            var8 = var5 instanceof Object ? var5 : var8;
            var5 = _closure1_slot11;
            var5[var4] = var8;
            var5 = _closure1_slot23;
            var5 = var5.bind(var7)(var4);
            _fun0002_ip = 168; continue _fun0002;
 137:
            var5 = _closure1_slot12;
            var1 = var5.get;
            var5 = var1.bind(var5)(var4);
            var1 = var5.merge;
            var1 = var1.bind(var5)(var6);
            var1 = var2.bind(var3)(var4, var1);
 168:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function checkGiftCodeExpiry(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot12;
            var2 = var5.get;
            var2 = var2.bind(var5)(var3);
            var5 = null;
            if(!(var5 != var2)) { _fun0003_ip = 201; continue _fun0003 }
 35:
            var6 = var2.expiresAt;
            if(!(var5 != var6)) { _fun0003_ip = 201; continue _fun0003 }
 48:
            var6 = var2.expiresAt;
            var2 = var6.valueOf;
            var7 = var2.bind(var6)();
            var8 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 8;
            var6 = var6[var2];
            var2 = undefined;
            var6 = var8.bind(var2)(var6);
            var8 = var6.bind(var2)();
            var6 = var8.valueOf;
            var6 = var6.bind(var8)();
            var10 = var7 - var6;
            var6 = 0;
            if(!(!(var10 <= var6))) { _fun0003_ip = 165; continue _fun0003 }
 108:
            var6 = _closure1_slot11;
            var7 = var6[var3];
            if(!(var5 != var7)) { _fun0003_ip = 163; continue _fun0003 }
 120:
            var6 = var7.start;
            var5 = global;
            var9 = var5.Math;
            var8 = var9.min;
            var5 = 2147483647;
            var5 = var8.bind(var9)(var5, var10);
            var4 = function() {
                var3 = _closure1_slot23;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var4 = var6.bind(var7)(var5, var4);
            _fun0003_ip = 201; continue _fun0003;
 163:
            return var2;
 165:
            var4 = _closure1_slot12;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var3);
            var2 = _closure1_slot11;
            var2 = delete var2[var3];
            var2 = _closure1_slot20;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
 201:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function resolveMessageGiftCodes(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var6 = arg1;
            var1 = arguments[1];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0004_ip = 14; continue _fun0004 }
 12:
            var1 = false;
 14:
            if(!var1) { _fun0004_ip = 46; continue _fun0004 }
 17:
            var3 = _closure1_slot19;
            var2 = var3.has;
            var1 = var6.channel_id;
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0004_ip = 46; continue _fun0004 }
 42:
            var1 = false;
            return var1;
 46:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 9;
            var1 = var1[var4];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isGiftCodeEmbed;
            var1 = var1.bind(var3)(var6);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var4 = var3.bind(var5)(var2);
            var2 = var4.findGiftCodes;
            if(var1) { _fun0004_ip = 118; continue _fun0004 }
 106:
            var1 = var6.content;
            var3 = var2.bind(var4)(var1);
            _fun0004_ip = 178; continue _fun0004;
 118:
            var7 = null;
            var8 = var7 == var6;
            var1 = undefined;
            if(var8) { _fun0004_ip = 135; continue _fun0004 }
 129:
            var1 = var6.embeds;
 135:
            var8 = var7 != var1;
            var1 = undefined;
            if(!var8) { _fun0004_ip = 173; continue _fun0004 }
 144:
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0004_ip = 170; continue _fun0004 }
 153:
            var7 = var6.embeds;
            var6 = 0;
            var6 = var7[var6];
            var5 = var6.url;
 170:
            var1 = var5;
 173:
            var3 = var2.bind(var4)(var1);
 178:
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0004_ip = 206; continue _fun0004 }
 189:
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = arg1;
                    var _closure3_slot0 = var4;
                    var5 = _closure1_slot13;
                    var3 = var5.includes;
                    var3 = var3.bind(var5)(var4);
                    if(var3) { _fun0005_ip = 43; continue _fun0005 }
 29:
                    var6 = _closure1_slot15;
                    var5 = var6.includes;
                    var3 = var5.bind(var6)(var4);
 43:
                    if(var3) { _fun0005_ip = 99; continue _fun0005 }
 46:
                    var5 = _closure1_slot25;
                    var3 = {};
                    var3['code'] = var4;
                    var4 = undefined;
                    var3 = var5.bind(var4)(var3);
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 10;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.wait;
                    var1 = function() {
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 11;
                        var3 = var3[var2];
                        var2 = undefined;
                        var6 = var4.bind(var2)(var3);
                        var5 = var6.resolveGiftCode;
                        var4 = _closure3_slot0;
                        var3 = false;
                        var2 = true;
                        var3 = var5.bind(var6)(var4, var3, var2);
                        var2 = var3.catch;
                        var1 = _closure1_slot10;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 99:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
 206:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var12 = function handleGiftCodeResolve(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var3 = var1.code;
            var4 = _closure1_slot13;
            var1 = var4.includes;
            var1 = var1.bind(var4)(var3);
            if(var1) { _fun0006_ip = 61; continue _fun0006 }
 28:
            var7 = _closure1_slot13;
            var1 = new Array(1);
            var6 = 0;
            var8 = var1;
            var4 = arraySpread(var8, var7, var6);
            var1[var4] = var3;
            var3 = 1;
            var3 = var4 + var3;
            _closure1_slot13 = var1;
 61:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot25 = var12;
    var11 = function handleMessage(arg1) {
        var1 = arg1;
        var4 = var1.message;
        var3 = _closure1_slot24;
        var2 = undefined;
        var1 = true;
        var1 = var3.bind(var2)(var4, var1);
        var1 = false;
        return var1;
    };
    var10 = function handleLoadMessages(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var3 = var1.messages;
        var2 = _closure1_slot19;
        var1 = var2.add;
        var1 = var1.bind(var2)(var4);
        var2 = var3.forEach;
        var1 = function(arg1) {
            var4 = _closure1_slot24;
            var3 = undefined;
            var2 = arg1;
            var1 = true;
            var1 = var4.bind(var3)(var2, var1);
            var1 = false;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var7 = function handleLoadThreadsSuccess(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var3 = var1.firstMessages;
            var1 = null;
            if(!(var1 != var3)) { _fun0007_ip = 40; continue _fun0007 }
 15:
            if(!(var1 != var3)) { _fun0007_ip = 36; continue _fun0007 }
 19:
            var2 = var3.forEach;
            var1 = function(arg1) {
                var3 = _closure1_slot24;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                var1 = false;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
 36:
            var1 = undefined;
            return var1;
 40:
            var1 = false;
            return var1;
        }
    };
    var2 = global;
    var14 = var2.Object;
    var13 = var14.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var9);
    var1 = 0;
    var9 = var6[var1];
    var1 = undefined;
    var9 = var8.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 5;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 6;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var13 = var9.AbortCodes;
    var _closure1_slot9 = var13;
    var9 = var9.NOOP_NULL;
    var _closure1_slot10 = var9;
    var9 = {};
    var _closure1_slot11 = var9;
    var9 = var2.Map;
    var13 = var9.prototype;
    var13 = Object.create(var13, {constructor: {value: var9}});
    var18 = var13;
    var9 = new var18[var9](var17);
    var9 = var9 instanceof Object ? var9 : var13;
    var _closure1_slot12 = var9;
    var9 = new Array(0);
    var _closure1_slot13 = var9;
    var9 = new Array(0);
    var _closure1_slot14 = var9;
    var9 = new Array(0);
    var _closure1_slot15 = var9;
    var9 = var2.Set;
    var13 = var9.prototype;
    var13 = Object.create(var13, {constructor: {value: var9}});
    var18 = var13;
    var9 = new var18[var9](var17);
    var9 = var9 instanceof Object ? var9 : var13;
    var _closure1_slot16 = var9;
    var9 = {};
    var _closure1_slot17 = var9;
    var9 = {};
    var _closure1_slot18 = var9;
    var2 = var2.Set;
    var9 = var2.prototype;
    var9 = Object.create(var9, {constructor: {value: var2}});
    var18 = var9;
    var2 = new var18[var2](var17);
    var2 = var2 instanceof Object ? var2 : var9;
    var _closure1_slot19 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var9 = var2.Store;
    var2 = function(arg1) {
        var4 = function GiftCodeStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                var1 = _closure1_slot21;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 69; continue _fun0008 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 105; continue _fun0008;
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
        var1 = 'get';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = _closure1_slot12;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var4 = null;
                var3 = var4 == var2;
                var1 = null;
                if(var3) { _fun0009_ip = 49; continue _fun0009 }
 31:
                var3 = var2.isExpired;
                var3 = var3.bind(var2)();
                var1 = null;
                if(var3) { _fun0009_ip = 49; continue _fun0009 }
 46:
                var1 = var2;
 49:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(11);
        var1[0] = var5;
        var5 = {};
        var7 = 'getError';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 != var3;
                if(!var2) { _fun0010_ip = 23; continue _fun0010 }
 12:
                var2 = _closure1_slot18;
                var1 = var2[var3];
 23:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getForGifterSKUAndPlan';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var2 = arg3;
            var _closure3_slot2 = var2;
            var2 = global;
            var4 = var2.Array;
            var3 = var4.from;
            var5 = _closure1_slot12;
            var2 = var5.values;
            var2 = var2.bind(var5)();
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = arg1;
                    var2 = var3.userId;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    if(!var1) { _fun0011_ip = 36; continue _fun0011 }
 22:
                    var5 = var3.skuId;
                    var2 = _closure3_slot1;
                    var1 = var5 === var2;
 36:
                    if(!var1) { _fun0011_ip = 69; continue _fun0011 }
 39:
                    var5 = _closure3_slot2;
                    var2 = null;
                    var2 = var2 == var5;
                    if(var2) { _fun0011_ip = 66; continue _fun0011 }
 52:
                    var5 = var3.subscriptionPlanId;
                    var4 = _closure3_slot2;
                    var2 = var5 === var4;
 66:
                    var1 = var2;
 69:
                    if(!var1) { _fun0011_ip = 85; continue _fun0011 }
 72:
                    var2 = var3.isExpired;
                    var2 = var2.bind(var3)();
                    var1 = !var2;
 85:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getIsResolving';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot13;
            var2 = var3.includes;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getIsResolved';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot15;
            var2 = var3.includes;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getIsAccepting';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot14;
            var2 = var3.includes;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getUserGiftCodesFetchingForSKUAndPlan';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = _closure1_slot16;
            var2 = var3.has;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.makeComboId;
            var4 = arg1;
            var1 = arg2;
            var1 = var5.bind(var6)(var4, var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getUserGiftCodesLoadedAtForSKUAndPlan';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var2 = _closure1_slot17;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.makeComboId;
            var3 = arg1;
            var1 = arg2;
            var1 = var4.bind(var5)(var3, var1);
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getResolvingCodes';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getResolvedCodes';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getAcceptingCodes';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var6;
        var1[10] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var2.bind(var1)(var9);
    var2 = 'GiftCodeStore';
    var9['displayName'] = var2;
    var2 = 10;
    var2 = var6[var2];
    var17 = var8.bind(var1)(var2);
    var2 = {};
    var13 = function handleConnectionOpen() {
        var2 = _closure1_slot19;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = false;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var13;
    var13 = function handleChannelSelect(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var1 = null;
            if(!(var1 != var3)) { _fun0012_ip = 31; continue _fun0012 }
 14:
            var2 = _closure1_slot19;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
 31:
            var1 = false;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var13;
    var2['GIFT_CODE_RESOLVE'] = var12;
    var12 = function handleGiftCodeResolveSuccess(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var3 = var1.giftCode;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot13;
            var4 = var5.filter;
            var2 = function(arg1) {
                var1 = _closure2_slot0;
                var2 = var1.code;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            _closure1_slot13 = var2;
            var5 = _closure1_slot15;
            var4 = var5.includes;
            var2 = var3.code;
            var2 = var4.bind(var5)(var2);
            if(var2) { _fun0013_ip = 101; continue _fun0013 }
 63:
            var7 = _closure1_slot15;
            var2 = new Array(1);
            var6 = 0;
            var8 = var2;
            var5 = arraySpread(var8, var7, var6);
            var4 = var3.code;
            var2[var5] = var4;
            var4 = 1;
            var4 = var5 + var4;
            _closure1_slot15 = var2;
 101:
            var2 = _closure1_slot22;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var2['GIFT_CODE_RESOLVE_SUCCESS'] = var12;
    var12 = function handleGiftCodeResolveFailure(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var2 = arg1;
            var3 = var2.code;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot13;
            var4 = var5.filter;
            var1 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var1 = var4.bind(var5)(var1);
            _closure1_slot13 = var1;
            var4 = _closure1_slot15;
            var1 = var4.includes;
            var1 = var1.bind(var4)(var3);
            if(var1) { _fun0014_ip = 90; continue _fun0014 }
 57:
            var7 = _closure1_slot15;
            var1 = new Array(1);
            var6 = 0;
            var8 = var1;
            var4 = arraySpread(var8, var7, var6);
            var1[var4] = var3;
            var3 = 1;
            var3 = var4 + var3;
            _closure1_slot15 = var1;
 90:
            var1 = undefined;
            return var1;
        }
    };
    var2['GIFT_CODE_RESOLVE_FAILURE'] = var12;
    var12 = function handleGiftCodeAccept(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var3 = var1.code;
            var4 = _closure1_slot14;
            var1 = var4.includes;
            var1 = var1.bind(var4)(var3);
            if(var1) { _fun0015_ip = 61; continue _fun0015 }
 28:
            var7 = _closure1_slot14;
            var1 = new Array(1);
            var6 = 0;
            var8 = var1;
            var4 = arraySpread(var8, var7, var6);
            var1[var4] = var3;
            var3 = 1;
            var3 = var4 + var3;
            _closure1_slot14 = var1;
 61:
            var1 = undefined;
            return var1;
        }
    };
    var2['GIFT_CODE_REDEEM'] = var12;
    var12 = function handleGiftCodeAcceptSuccess(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var4 = var1.code;
            var _closure2_slot0 = var4;
            var5 = _closure1_slot14;
            var3 = var5.filter;
            var2 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var2 = var3.bind(var5)(var2);
            _closure1_slot14 = var2;
            var3 = _closure1_slot12;
            var2 = var3.get;
            var6 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 != var6)) { _fun0016_ip = 113; continue _fun0016 }
 60:
            var3 = _closure1_slot12;
            var2 = var3.set;
            var5 = var6.merge;
            var1 = {};
            var7 = true;
            var1['redeemed'] = var7;
            var8 = var6.uses;
            var7 = 1;
            var7 = var8 + var7;
            var1['uses'] = var7;
            var1 = var5.bind(var6)(var1);
            var1 = var2.bind(var3)(var4, var1);
 113:
            var1 = undefined;
            return var1;
        }
    };
    var2['GIFT_CODE_REDEEM_SUCCESS'] = var12;
    var12 = function handleGiftCodeAcceptFailure(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var4 = var1.code;
            var _closure2_slot0 = var4;
            var2 = var1.error;
            var6 = _closure1_slot14;
            var5 = var6.filter;
            var3 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var3 = var5.bind(var6)(var3);
            _closure1_slot14 = var3;
            var5 = _closure1_slot12;
            var3 = var5.get;
            var7 = var3.bind(var5)(var4);
            var3 = _closure1_slot18;
            var3[var4] = var2;
            var3 = null;
            if(!(var3 != var7)) { _fun0017_ip = 176; continue _fun0017 }
 73:
            var3 = var2.code;
            var2 = _closure1_slot9;
            var2 = var2.UNKNOWN_GIFT_CODE;
            if(!(var2 !== var3)) { _fun0017_ip = 144; continue _fun0017 }
 92:
            var2 = _closure1_slot9;
            var2 = var2.INVALID_GIFT_REDEMPTION_EXHAUSTED;
            if(!(var2 === var3)) { _fun0017_ip = 176; continue _fun0017 }
 106:
            var5 = _closure1_slot12;
            var3 = var5.set;
            var8 = var7.set;
            var6 = var7.maxUses;
            var2 = 'uses';
            var2 = var8.bind(var7)(var2, var6);
            var2 = var3.bind(var5)(var4, var2);
            _fun0017_ip = 176; continue _fun0017;
 144:
            var3 = _closure1_slot12;
            var2 = var3.set;
            var6 = var7.set;
            var5 = 'revoked';
            var1 = true;
            var1 = var6.bind(var7)(var5, var1);
            var1 = var2.bind(var3)(var4, var1);
 176:
            var1 = undefined;
            return var1;
        }
    };
    var2['GIFT_CODE_REDEEM_FAILURE'] = var12;
    var12 = function handleGiftCodeRevoke(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var3 = var1.code;
            var4 = _closure1_slot12;
            var1 = var4.delete;
            var1 = var1.bind(var4)(var3);
            var1 = _closure1_slot11;
            var4 = var1[var3];
            var1 = null;
            if(!(var1 != var4)) { _fun0018_ip = 57; continue _fun0018 }
 39:
            var1 = var4.stop;
            var1 = var1.bind(var4)();
            var1 = _closure1_slot11;
            var1 = delete var1[var3];
 57:
            var4 = _closure1_slot15;
            var1 = var4.includes;
            var1 = var1.bind(var4)(var3);
            if(var1) { _fun0018_ip = 107; continue _fun0018 }
 74:
            var7 = _closure1_slot15;
            var1 = new Array(1);
            var6 = 0;
            var8 = var1;
            var4 = arraySpread(var8, var7, var6);
            var1[var4] = var3;
            var3 = 1;
            var3 = var4 + var3;
            _closure1_slot15 = var1;
 107:
            var1 = undefined;
            return var1;
        }
    };
    var2['GIFT_CODE_REVOKE_SUCCESS'] = var12;
    var12 = function handleGiftCodeCreate(arg1) {
        var1 = arg1;
        var3 = var1.giftCode;
        var2 = _closure1_slot22;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['GIFT_CODE_CREATE_SUCCESS'] = var12;
    var12 = function handleGiftCodesFetch(arg1) {
        var1 = arg1;
        var7 = var1.skuId;
        var6 = var1.subscriptionPlanId;
        var4 = _closure1_slot16;
        var3 = var4.add;
        var5 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var2);
        var2 = var5.makeComboId;
        var2 = var2.bind(var5)(var7, var6);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['GIFT_CODES_FETCH'] = var12;
    var12 = function handleGiftCodesFetchSuccess(arg1) {
        var1 = arg1;
        var4 = var1.giftCodes;
        var6 = var1.skuId;
        var5 = var1.subscriptionPlanId;
        var3 = var4.forEach;
        var1 = _closure1_slot22;
        var1 = var3.bind(var4)(var1);
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 9;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.makeComboId;
        var4 = var3.bind(var4)(var6, var5);
        var5 = _closure1_slot17;
        var3 = global;
        var6 = var3.Date;
        var3 = var6.now;
        var3 = var3.bind(var6)();
        var5[var4] = var3;
        var3 = _closure1_slot16;
        var2 = var3.delete;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['GIFT_CODES_FETCH_SUCCESS'] = var12;
    var12 = function handleGiftCodesFetchFail(arg1) {
        var1 = arg1;
        var7 = var1.skuId;
        var6 = var1.subscriptionPlanId;
        var4 = _closure1_slot16;
        var3 = var4.delete;
        var5 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var2);
        var2 = var5.makeComboId;
        var2 = var2.bind(var5)(var7, var6);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['GIFT_CODES_FETCH_FAILURE'] = var12;
    var2['MESSAGE_CREATE'] = var11;
    var2['MESSAGE_UPDATE'] = var11;
    var2['LOCAL_MESSAGES_LOADED'] = var10;
    var2['LOAD_MESSAGES_SUCCESS'] = var10;
    var2['LOAD_MESSAGES_AROUND_SUCCESS'] = var10;
    var10 = function handleLoadRecentMentions(arg1) {
        var1 = arg1;
        var3 = var1.messages;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot24;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = false;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['LOAD_RECENT_MENTIONS_SUCCESS'] = var10;
    var10 = function handleLoadPinnedMessages(arg1) {
        var1 = arg1;
        var3 = var1.pins;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.message;
            var2 = _closure1_slot24;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            var1 = false;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['LOAD_PINNED_MESSAGES_SUCCESS'] = var10;
    var10 = function handleSearchMessagesSuccess(arg1) {
        var1 = arg1;
        var3 = var1.data;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.messages;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var3 = arg1;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var3 = _closure1_slot24;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    var1 = false;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['SEARCH_MESSAGES_SUCCESS'] = var10;
    var10 = function handleGiftCodeUpdate(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var9 = var1.uses;
            var4 = var1.code;
            var3 = _closure1_slot12;
            var2 = var3.get;
            var7 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 != var7)) { _fun0019_ip = 92; continue _fun0019 }
 37:
            var3 = _closure1_slot12;
            var2 = var3.set;
            var6 = var7.set;
            var1 = global;
            var8 = var1.Math;
            var5 = var8.max;
            var1 = var7.uses;
            var5 = var5.bind(var8)(var1, var9);
            var1 = 'uses';
            var1 = var6.bind(var7)(var1, var5);
            var1 = var2.bind(var3)(var4, var1);
 92:
            var1 = undefined;
            return var1;
        }
    };
    var2['GIFT_CODE_UPDATE'] = var10;
    var2['LOAD_THREADS_SUCCESS'] = var7;
    var2['LOAD_ARCHIVED_THREADS_SUCCESS'] = var7;
    var7 = function handleLoadForumPosts(arg1) {
        var1 = arg1;
        var3 = var1.threads;
        var1 = global;
        var2 = var1.Object;
        var1 = var2.values;
        var3 = var1.bind(var2)(var3);
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var1 = arg1;
                var4 = var1.first_message;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0020_ip = 34; continue _fun0020 }
 18:
                var3 = _closure1_slot24;
                var2 = undefined;
                var2 = var3.bind(var2)(var4);
                var1 = false;
 34:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['LOAD_FORUM_POSTS'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var18 = var7;
    var16 = var2;
    var2 = new var18[var9](var17, var16, var15);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot20 = var2;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/GiftCodeStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
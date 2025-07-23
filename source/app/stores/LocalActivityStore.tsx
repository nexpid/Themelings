// app/stores/LocalActivityStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
            _closure1_slot21 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var4 = function updateActivities() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = new Array(0);
            var _closure2_slot0 = var3;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 16;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var6 = var5.CustomStatusSetting;
            var5 = var6.getSetting;
            var9 = var5.bind(var6)();
            var6 = null;
            var5 = var6 != var9;
            if(!var5) { _fun0002_ip = 186; continue _fun0002 }
 63:
            var8 = var9.expiresAtMs;
            var7 = '0';
            var7 = var7 === var8;
            if(var7) { _fun0002_ip = 183; continue _fun0002 }
 82:
            var8 = global;
            var12 = var8.Date;
            var11 = var8.Number;
            var10 = var9.expiresAtMs;
            var15 = var11.bind(var1)(var10);
            var11 = var12.prototype;
            var11 = Object.create(var11, {constructor: {value: var12}});
            var16 = var11;
            var10 = new var16[var12](var15, var14);
            var11 = var10 instanceof Object ? var10 : var11;
            var10 = var11.getTime;
            var10 = var10.bind(var11)();
            var8 = var8.Date;
            var11 = var8.prototype;
            var11 = Object.create(var11, {constructor: {value: var8}});
            var16 = var11;
            var8 = new var16[var8](var15);
            var11 = var8 instanceof Object ? var8 : var11;
            var8 = var11.getTime;
            var8 = var8.bind(var11)();
            var10 = var10 - var8;
            var8 = 0;
            var7 = var10 > var8;
 183:
            var5 = var7;
 186:
            if(!var5) { _fun0002_ip = 230; continue _fun0002 }
 189:
            var7 = var3.push;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 17;
            var5 = var10[var5];
            var8 = var8.bind(var1)(var5);
            var5 = var8.getActivityFromCustomStatus;
            var5 = var5.bind(var8)(var9);
            var5 = var7.bind(var3)(var5);
 230:
            var7 = _closure1_slot12;
            var5 = var7.getActivities;
            var14 = var5.bind(var7)();
            var7 = var3.push;
            var5 = new Array(0);
            var13 = 0;
            var15 = var5;
            var8 = arraySpread(var15, var14, var13);
            var15 = var7;
            var14 = var5;
            var13 = var3;
            var5 = apply(var15, var14, var13);
            var7 = _closure1_slot16;
            var5 = var7.getStream;
            var8 = var5.bind(var7)();
            if(!(var6 != var8)) { _fun0002_ip = 331; continue _fun0002 }
 295:
            var7 = var3.push;
            var5 = {};
            var9 = _closure1_slot18;
            var9 = var9.STREAMING;
            var5['type'] = var9;
            var15 = var5;
            var14 = var8;
            var8 = copyDataProperties(var15, var14);
            var5 = var7.bind(var3)(var5);
 331:
            var5 = global;
            var5 = var5.Set;
            var7 = var5.prototype;
            var7 = Object.create(var7, {constructor: {value: var5}});
            var16 = var7;
            var5 = new var16[var5](var15);
            var9 = var5 instanceof Object ? var5 : var7;
            var _closure2_slot1 = var9;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 18;
            var5 = var8[var5];
            var8 = var7.bind(var1)(var5);
            var7 = var8.forEach;
            var5 = _closure1_slot20;
            var4 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var7 = arg1;
                    var2 = var7[Symbol.iterator];
                    var7 = var2().next;
                    var4 = undefined;
                    var3 = undefined;
                    var5 = undefined;
                    var8 = var7().value;
                    var9 = var2;
                    var9 = var9 === var4;
                    var3 = var9;
                    if(var9) { _fun0003_ip = 32; continue _fun0003 }
 29:
                    var5 = var8;
 32:
                    var5 = undefined;
                    var8 = var3;
                    if(var8) { _fun0003_ip = 60; continue _fun0003 }
 40:
                    var7 = var7().value;
                    var8 = var2;
                    var8 = var8 === var4;
                    var3 = var8;
                    if(var8) { _fun0003_ip = 60; continue _fun0003 }
 57:
                    var5 = var7;
 60:
                    var6 = var5;
                    var5 = var3;
                    if(var5) { _fun0003_ip = 72; continue _fun0003 }
 69:
                    var2.return();
 72:
                    var5 = var6;
                    var7 = var5.application_id;
                    var5 = null;
                    if(!(var5 != var7)) { _fun0003_ip = 126; continue _fun0003 }
 87:
                    var9 = _closure2_slot1;
                    var8 = var9.add;
                    var7 = var6;
                    var6 = var7.name;
                    var6 = var8.bind(var9)(var6);
                    var6 = _closure2_slot0;
                    var5 = var6.push;
                    var5 = var5.bind(var6)(var7);
 126:
                    return var4;
 128:
                    CatchBlockStart(arg_register=0);
                    if(var3) { _fun0003_ip = 136; continue _fun0003 }
 133:
                    var2.return();
 136:
                    throw var1;
                }
            };
            var4 = var7.bind(var8)(var5, var4);
            var5 = _closure1_slot10;
            var4 = var5.getVisibleGame;
            var8 = var4.bind(var5)();
            var5 = var6 != var8;
            if(!var5) { _fun0002_ip = 433; continue _fun0002 }
 424:
            var4 = var8.name;
            var5 = var6 != var4;
 433:
            if(!var5) { _fun0002_ip = 451; continue _fun0002 }
 436:
            var7 = var9.has;
            var4 = var8.name;
            var5 = var7.bind(var9)(var4);
 451:
            var7 = var6 != var8;
            if(!var7) { _fun0002_ip = 464; continue _fun0002 }
 458:
            var7 = var8.isLauncher;
 464:
            var9 = _closure1_slot15;
            var4 = var9.getCurrentUserActiveStream;
            var9 = var4.bind(var9)();
            var4 = var6 == var8;
            if(var4) { _fun0002_ip = 494; continue _fun0002 }
 485:
            var10 = var8.name;
            var4 = var6 == var10;
 494:
            if(var4) { _fun0002_ip = 513; continue _fun0002 }
 497:
            if(var5) { _fun0002_ip = 510; continue _fun0002 }
 500:
            if(!var7) { _fun0002_ip = 507; continue _fun0002 }
 503:
            var7 = var6 == var9;
 507:
            var5 = var7;
 510:
            var4 = var5;
 513:
            if(var4) { _fun0002_ip = 651; continue _fun0002 }
 519:
            var5 = var3.push;
            var4 = {};
            var7 = _closure1_slot18;
            var7 = var7.PLAYING;
            var4['type'] = var7;
            var7 = var8.name;
            var4['name'] = var7;
            var7 = var8.id;
            if(!(var6 == var7)) { _fun0002_ip = 595; continue _fun0002 }
 558:
            var11 = _closure1_slot17;
            var10 = var11.getGameByName;
            var9 = var8.name;
            var10 = var10.bind(var11)(var9);
            var11 = var6 == var10;
            var9 = undefined;
            if(var11) { _fun0002_ip = 592; continue _fun0002 }
 587:
            var9 = var10.id;
 592:
            var7 = var9;
 595:
            var4['application_id'] = var7;
            var7 = {};
            var10 = var8.distributor;
            var11 = var6 != var10;
            var9 = undefined;
            if(!var11) { _fun0002_ip = 620; continue _fun0002 }
 617:
            var9 = var10;
 620:
            var7['distributor'] = var9;
            var4['metadata'] = var7;
            var7 = {};
            var8 = var8.start;
            var7['start'] = var8;
            var4['timestamps'] = var7;
            var4 = var5.bind(var3)(var4);
 651:
            var5 = _closure1_slot13;
            var4 = var5.getActivity;
            var7 = var4.bind(var5)();
            if(!(var6 != var7)) { _fun0002_ip = 705; continue _fun0002 }
 669:
            var5 = var3.push;
            var4 = {};
            var8 = _closure1_slot18;
            var8 = var8.LISTENING;
            var4['type'] = var8;
            var15 = var4;
            var14 = var7;
            var7 = copyDataProperties(var15, var14);
            var4 = var5.bind(var3)(var4);
 705:
            var5 = _closure1_slot11;
            var4 = var5.getCurrentHangStatus;
            var8 = var4.bind(var5)();
            if(!(var6 != var8)) { _fun0002_ip = 816; continue _fun0002 }
 723:
            var5 = _closure1_slot11;
            var4 = var5.getCustomHangStatus;
            var7 = var4.bind(var5)();
            var5 = var3.push;
            var4 = {};
            var9 = _closure1_slot18;
            var9 = var9.HANG_STATUS;
            var4['type'] = var9;
            var9 = 'Hang Status';
            var4['name'] = var9;
            var4['state'] = var8;
            var9 = var6 == var7;
            var8 = undefined;
            if(var9) { _fun0002_ip = 786; continue _fun0002 }
 781:
            var8 = var7.status;
 786:
            var4['details'] = var8;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0002_ip = 806; continue _fun0002 }
 800:
            var6 = var7.emoji;
 806:
            var4['emoji'] = var6;
            var4 = var5.bind(var3)(var4);
 816:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 19;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = _closure1_slot19;
            var4 = var5.bind(var1)(var4, var3);
            if(var4) { _fun0002_ip = 853; continue _fun0002 }
 849:
            _closure1_slot19 = var3;
 853:
            return var1;
        }
    };
    var _closure1_slot22 = var4;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot15 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot16 = var2;
    var2 = 14;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot17 = var2;
    var2 = 15;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ActivityTypes;
    var _closure1_slot18 = var2;
    var2 = new Array(0);
    var _closure1_slot19 = var2;
    var2 = {};
    var _closure1_slot20 = var2;
    var2 = 21;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function LocalActivityStore() {
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
                var1 = _closure1_slot21;
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
            var11 = var4.waitFor;
            var19 = _closure1_slot10;
            var18 = _closure1_slot9;
            var17 = _closure1_slot16;
            var16 = _closure1_slot15;
            var15 = _closure1_slot13;
            var14 = _closure1_slot14;
            var13 = _closure1_slot17;
            var12 = _closure1_slot11;
            var20 = var4;
            var2 = var20[var11](var19, var18, var17, var16, var15, var14, var13, var12, var11);
            var3 = var4.syncWith;
            var5 = _closure1_slot12;
            var2 = new Array(2);
            var2[0] = var5;
            var1 = _closure1_slot11;
            var2[1] = var1;
            var1 = function() {
                var2 = _closure1_slot22;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'getActivities';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getPrimaryActivity';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot19;
            var1 = 0;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getApplicationActivity';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = var3.findActivity;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.application_id;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getCustomStatusActivity';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var2 = var3.findActivity;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot18;
                var1 = var1.CUSTOM_STATUS;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'findActivity';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot19;
            var2 = var3.find;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getApplicationActivities';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getActivityForPID';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var10 = arg1;
                var1 = global;
                var3 = var1.Object;
                var2 = var3.values;
                var1 = _closure1_slot20;
                var8 = var2.bind(var3)(var1);
                var1 = var8.length;
                var7 = 0;
                var1 = var7 < var1;
                var6 = undefined;
                var5 = 2;
                var4 = 1;
                var3 = 0;
                if(!var1) { _fun0005_ip = 90; continue _fun0005 }
 52:
                var2 = var8[var3];
                var1 = _closure1_slot8;
                var1 = var1.bind(var6)(var2, var5);
                var2 = var1[var7];
                var1 = var1[var4];
                if(!(var2 !== var10)) { _fun0005_ip = 94; continue _fun0005 }
 78:
                var3 = var3 + 1;
                var2 = var8.length;
                if(var3 < var2) { _fun0005_ip = 52; continue _fun0005 }
 90:
                var2 = null;
                return var2;
 94:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'LocalActivityStore';
    var8['displayName'] = var2;
    var2 = 22;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var3 = var1.localActivities;
        var2 = {};
        var4 = var2;
        var1 = copyDataProperties(var4, var3);
        _closure1_slot20 = var2;
        var2 = _closure1_slot22;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['OVERLAY_INITIALIZE'] = var10;
    var10 = function handleStartSession() {
        var2 = {};
        _closure1_slot20 = var2;
        var2 = _closure1_slot22;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['START_SESSION'] = var10;
    var10 = function handleLocalActivityUpdate(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var5 = var1.socketId;
            var7 = var1.pid;
            var6 = var1.activity;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 19;
            var3 = var3[var1];
            var1 = undefined;
            var8 = var4.bind(var1)(var3);
            var3 = _closure1_slot20;
            var4 = var3[var5];
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var3 = var8.bind(var1)(var4, var3);
            if(var3) { _fun0006_ip = 121; continue _fun0006 }
 75:
            var3 = null;
            if(!(var3 == var6)) { _fun0006_ip = 91; continue _fun0006 }
 81:
            var3 = _closure1_slot20;
            var3 = delete var3[var5];
            _fun0006_ip = 111; continue _fun0006;
 91:
            var4 = _closure1_slot20;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var4[var5] = var3;
 111:
            var2 = _closure1_slot22;
            var2 = var2.bind(var1)();
            return var1;
 121:
            var1 = false;
            return var1;
        }
    };
    var2['LOCAL_ACTIVITY_UPDATE'] = var10;
    var10 = function handleRPCAppDisconnected(arg1) {
        var1 = arg1;
        var3 = var1.socketId;
        var2 = _closure1_slot20;
        var2 = delete var2[var3];
        var2 = _closure1_slot22;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['RPC_APP_DISCONNECTED'] = var10;
    var2['RUNNING_GAMES_CHANGE'] = var4;
    var2['LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS'] = var4;
    var2['SPOTIFY_PLAYER_STATE'] = var4;
    var2['SPOTIFY_PLAYER_PLAY'] = var4;
    var2['STREAMING_UPDATE'] = var4;
    var2['USER_CONNECTIONS_UPDATE'] = var4;
    var2['STREAM_START'] = var4;
    var2['STREAM_STOP'] = var4;
    var9 = function handleUserSettingsProtoUpdate() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = {};
            var1 = global;
            var5 = var1.Object;
            var4 = var5.entries;
            var1 = _closure1_slot20;
            var15 = var4.bind(var5)(var1);
            var1 = var15.length;
            var14 = 0;
            var5 = var14 < var1;
            var7 = false;
            var13 = 'flags';
            var11 = 20;
            var1 = undefined;
            var10 = 2;
            var9 = 1;
            var8 = null;
            var6 = 0;
            var4 = false;
            if(!var5) { _fun0007_ip = 224; continue _fun0007 }
 68:
            var5 = var15[var6];
            var17 = _closure1_slot8;
            var5 = var17.bind(var1)(var5, var10);
            var16 = var5[var14];
            var5 = var5[var9];
            var5 = var17.bind(var1)(var5, var10);
            var17 = var5[var14];
            var19 = var5[var9];
            var18 = var19.flags;
            var20 = var8 != var18;
            var5 = 0;
            if(!var20) { _fun0007_ip = 121; continue _fun0007 }
 118:
            var5 = var18;
 121:
            var20 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var11];
            var20 = var20.bind(var1)(var18);
            var18 = var20.computeActivityPartyPrivacyFlags;
            var18 = var18.bind(var20)(var5);
            if(!(var18 === var5)) { _fun0007_ip = 171; continue _fun0007 }
 153:
            var5 = new Array(2);
            var5[0] = var17;
            var5[1] = var19;
            var3[var16] = var5;
            _fun0007_ip = 206; continue _fun0007;
 171:
            var5 = new Array(2);
            var5[0] = var17;
            var17 = {};
            var22 = var17;
            var21 = var19;
            var19 = copyDataProperties(var22, var21);
            var17[var13] = var18;
            var5[1] = var17;
            var3[var16] = var5;
            var7 = true;
 206:
            var6 = var6 + 1;
            var5 = var15.length;
            var4 = var7;
            if(var6 < var5) { _fun0007_ip = 68; continue _fun0007 }
 224:
            if(!var4) { _fun0007_ip = 231; continue _fun0007 }
 227:
            _closure1_slot20 = var3;
 231:
            var2 = _closure1_slot22;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var2['USER_SETTINGS_PROTO_UPDATE'] = var9;
    var2['EMBEDDED_ACTIVITY_CLOSE'] = var4;
    var2['UPDATE_HANG_STATUS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/LocalActivityStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
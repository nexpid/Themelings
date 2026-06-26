// app/stores/LocalActivityStore.tsx
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
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot27 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var4 = function updateActivities() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = new Array(0);
            var _closure2_slot0 = var3;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 19;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var5 = var4.CustomStatusSetting;
            var4 = var5.getSetting;
            var8 = var4.bind(var5)();
            var4 = null;
            var5 = var4 != var8;
            if(!var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var7 = var8.expiresAtMs;
            var6 = '0';
            var6 = var6 === var7;
            if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var7 = global;
            var12 = var7.Date;
            var10 = var7.Number;
            var9 = var8.expiresAtMs;
            var20 = var10.bind(var1)(var9);
            var10 = var12.prototype;
            var10 = Object.create(var10, {constructor: {value: var12}});
            var21 = var10;
            var9 = new var21[var12](var20, var19);
            var10 = var9 instanceof Object ? var9 : var10;
            var9 = var10.getTime;
            var9 = var9.bind(var10)();
            var7 = var7.Date;
            var10 = var7.prototype;
            var10 = Object.create(var10, {constructor: {value: var7}});
            var21 = var10;
            var7 = new var21[var7](var20);
            var10 = var7 instanceof Object ? var7 : var10;
            var7 = var10.getTime;
            var7 = var7.bind(var10)();
            var9 = var9 - var7;
            var7 = 0;
            var6 = var9 > var7;
case 8:
            var5 = var6;
case 6:
            if(!var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var3.push;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 20;
            var5 = var9[var5];
            var7 = var7.bind(var1)(var5);
            var5 = var7.getActivityFromCustomStatus;
            var5 = var5.bind(var7)(var8);
            var5 = var6.bind(var3)(var5);
case 10:
            var6 = _closure1_slot12;
            var5 = var6.getActivities;
            var19 = var5.bind(var6)();
            var6 = var3.push;
            var5 = new Array(0);
            var20 = var5;
            var18 = 0;
            var7 = arraySpread(var20, var19, var18);
            var20 = var6;
            var19 = var5;
            var18 = var3;
            var5 = apply(var20, var19, var18);
            var6 = _closure1_slot18;
            var5 = var6.getStream;
            var7 = var5.bind(var6)();
            if(!(var4 != var7)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var6 = var3.push;
            var5 = {};
            var8 = _closure1_slot23;
            var8 = var8.STREAMING;
            var5['type'] = var8;
            var20 = var5;
            var19 = var7;
            var7 = copyDataProperties(var20, var19);
            var5 = var6.bind(var3)(var5);
case 12:
            var8 = global;
            var5 = var8.Set;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var21 = var6;
            var5 = new var21[var5](var20);
            var10 = var5 instanceof Object ? var5 : var6;
            var _closure2_slot1 = var10;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 21;
            var5 = var7[var5];
            var9 = var6.bind(var1)(var5);
            var7 = var9.forEach;
            var6 = _closure1_slot25;
            var5 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
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
                    if(var9) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var5 = var8;
case 14:
                    var5 = undefined;
                    var8 = var3;
                    if(var8) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var7 = var7().value;
                    var8 = var2;
                    var8 = var8 === var4;
                    var3 = var8;
                    if(var8) { _fun0003_ip = 16; continue _fun0003 }
case 18:
                    var5 = var7;
case 16:
                    var6 = var5;
                    var5 = var3;
                    if(var5) { _fun0003_ip = 3; continue _fun0003 }
case 19:
                    var2.return();
case 3:
                    var5 = var6;
                    var7 = var5.application_id;
                    var5 = null;
                    if(!(var5 != var7)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var9 = _closure2_slot1;
                    var8 = var9.add;
                    var7 = var6;
                    var6 = var7.name;
                    var6 = var8.bind(var9)(var6);
                    var6 = _closure2_slot0;
                    var5 = var6.push;
                    var5 = var5.bind(var6)(var7);
case 20:
                    return var4;
case 22:
                    CatchBlockStart(arg_register=0);
                    if(var3) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var2.return();
case 23:
                    throw var1;
                }
            };
            var5 = var7.bind(var9)(var6, var5);
            var6 = _closure1_slot15;
            var5 = var6.getCurrentUserActiveStream;
            var5 = var5.bind(var6)();
            var5 = var4 != var5;
            var7 = _closure1_slot11;
            var6 = var7.getVisibleGame;
            var7 = var6.bind(var7)();
            if(var5) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            _closure1_slot26 = var4;
            var9 = var7;
            _fun0002_ip = 27; continue _fun0002;
case 25:
            var13 = _closure1_slot15;
            var6 = var13.getStreamerActiveStreamMetadata;
            var16 = var6.bind(var13)();
            var _closure2_slot2 = var16;
            var13 = _closure1_slot11;
            var6 = var13.getVisibleRunningGames;
            var14 = var6.bind(var13)();
            var13 = var4 == var16;
            var6 = undefined;
            if(var13) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var6 = var16.pid;
case 28:
            var6 = var4 != var6;
            var15 = null;
            if(!var6) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var13 = var14.find;
            var6 = function(arg1) {
                var1 = arg1;
                var2 = var1.pid;
                var1 = _closure2_slot2;
                var1 = var1.pid;
                var1 = var2 === var1;
                return var1;
            };
            var13 = var13.bind(var14)(var6);
            var17 = var4 != var13;
            var6 = null;
            if(!var17) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var6 = var13;
case 32:
            var15 = var6;
case 30:
            var6 = var15;
            if(!(var4 == var15)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var17 = var4 == var16;
            var13 = undefined;
            if(var17) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var13 = var16.id;
case 36:
            var6 = var15;
            if(!(var4 != var13)) { _fun0002_ip = 34; continue _fun0002 }
case 38:
            var13 = var14.find;
            var11 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot2;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var13 = var13.bind(var14)(var11);
            var14 = var4 != var13;
            var11 = null;
            if(!var14) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var11 = var13;
case 39:
            var6 = var11;
case 34:
            if(!(var4 == var6)) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            _closure1_slot26 = var4;
            var9 = var7;
            _fun0002_ip = 27; continue _fun0002;
case 41:
            var7 = _closure1_slot26;
            var9 = var6;
            if(!(var4 == var7)) { _fun0002_ip = 27; continue _fun0002 }
case 43:
            var7 = var6.start;
            if(!(var4 == var7)) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var11 = var8.Date;
            var8 = var11.now;
            var7 = var8.bind(var11)();
case 44:
            _closure1_slot26 = var7;
            var9 = var6;
case 27:
            var7 = var4 != var9;
            if(!var7) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var6 = var9.name;
            var7 = var4 != var6;
case 46:
            if(!var7) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var8 = var10.has;
            var6 = var9.name;
            var6 = var8.bind(var10)(var6);
            if(var6) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 22;
            var8 = var11[var8];
            var11 = var10.bind(var1)(var8);
            var10 = var11.doesGameHaveRichPresence;
            var8 = new Array(0);
            var20 = var8;
            var19 = var3;
            var18 = 0;
            var18 = arraySpread(var20, var19, var18);
            var14 = _closure1_slot20;
            var12 = var14.getRemoteActivities;
            var19 = var12.bind(var14)();
            var20 = var8;
            var12 = arraySpread(var20, var19, var18);
            var6 = var10.bind(var11)(var9, var8);
case 50:
            var7 = var6;
case 48:
            var6 = var4 != var9;
            if(!var6) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var6 = var9.isLauncher;
case 52:
            if(!(var4 != var9)) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var8 = var9.name;
            if(!(var4 != var8)) { _fun0002_ip = 54; continue _fun0002 }
case 56:
            if(var7) { _fun0002_ip = 54; continue _fun0002 }
case 57:
            if(!var6) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            if(!var5) { _fun0002_ip = 54; continue _fun0002 }
case 58:
            var6 = _closure1_slot17;
            var5 = var6.findGame;
            var10 = var5.bind(var6)(var9);
            var6 = var3.push;
            var5 = {};
            var7 = _closure1_slot23;
            var7 = var7.PLAYING;
            var5['type'] = var7;
            var7 = var9.name;
            var5['name'] = var7;
            var7 = var9.id;
            if(!(var4 == var7)) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var11 = var4 == var10;
            var8 = undefined;
            if(var11) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var8 = var10.id;
case 62:
            var7 = var8;
case 60:
            var5['application_id'] = var7;
            var7 = {};
            var8 = _closure1_slot26;
            if(!(var4 == var8)) { _fun0002_ip = 64; continue _fun0002 }
case 65:
            var8 = var9.start;
            _fun0002_ip = 66; continue _fun0002;
case 64:
            var8 = _closure1_slot26;
case 66:
            var7['start'] = var8;
            var5['timestamps'] = var7;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 23;
            var7 = var10[var7];
            var8 = var8.bind(var1)(var7);
            var7 = var8.maybeAddAdditionalGameMetadata;
            var19 = var7.bind(var8)(var9);
            var20 = var5;
            var7 = copyDataProperties(var20, var19);
            var5 = var6.bind(var3)(var5);
case 54:
            var6 = _closure1_slot13;
            var5 = var6.getActivity;
            var6 = var5.bind(var6)();
            if(!(var4 != var6)) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var5 = var3.push;
            var4 = {};
            var7 = _closure1_slot23;
            var7 = var7.LISTENING;
            var4['type'] = var7;
            var20 = var4;
            var19 = var6;
            var6 = copyDataProperties(var20, var19);
            var4 = var5.bind(var3)(var4);
case 67:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 24;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = _closure1_slot24;
            var4 = var5.bind(var1)(var4, var3);
            if(var4) { _fun0002_ip = 69; continue _fun0002 }
case 70:
            _closure1_slot24 = var3;
case 69:
            return var1;
        }
    };
    var _closure1_slot28 = var4;
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
    var2 = var7.bind(var1)(var2);
    var _closure1_slot18 = var2;
    var2 = 16;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot19 = var2;
    var2 = 17;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot20 = var2;
    var2 = 18;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.ActivityFlags;
    var _closure1_slot21 = var8;
    var8 = var2.ActivityGamePlatforms;
    var _closure1_slot22 = var8;
    var2 = var2.ActivityTypes;
    var _closure1_slot23 = var2;
    var2 = new Array(0);
    var _closure1_slot24 = var2;
    var2 = {};
    var _closure1_slot25 = var2;
    var2 = null;
    var _closure1_slot26 = var2;
    var2 = 27;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function LocalActivityStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot27;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 19; continue _fun0004 }
case 71:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 72; continue _fun0004;
case 19:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 72:
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
            var15 = var4.waitFor;
            var27 = _closure1_slot10;
            var26 = _closure1_slot15;
            var25 = _closure1_slot16;
            var24 = _closure1_slot9;
            var23 = _closure1_slot18;
            var22 = _closure1_slot12;
            var21 = _closure1_slot17;
            var20 = _closure1_slot11;
            var19 = _closure1_slot19;
            var18 = _closure1_slot20;
            var17 = _closure1_slot13;
            var16 = _closure1_slot14;
            var28 = var4;
            var2 = var28[var15](var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15);
            var3 = var4.syncWith;
            var1 = _closure1_slot12;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot28;
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
            var1 = _closure1_slot24;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getPrimaryActivity';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot24;
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
                var1 = _closure1_slot23;
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
            var3 = _closure1_slot24;
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
            var1 = _closure1_slot25;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getActivityForPID';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var10 = arg1;
                var1 = global;
                var3 = var1.Object;
                var2 = var3.values;
                var1 = _closure1_slot25;
                var8 = var2.bind(var3)(var1);
                var1 = var8.length;
                var7 = 0;
                var1 = var7 < var1;
                var6 = undefined;
                var5 = 2;
                var4 = 1;
                var3 = 0;
                if(!var1) { _fun0005_ip = 73; continue _fun0005 }
case 74:
                var2 = var8[var3];
                var1 = _closure1_slot8;
                var1 = var1.bind(var6)(var2, var5);
                var2 = var1[var7];
                var1 = var1[var4];
                if(!(var2 !== var10)) { _fun0005_ip = 75; continue _fun0005 }
case 76:
                var3 = var3 + 1;
                var2 = var8.length;
                if(var3 < var2) { _fun0005_ip = 74; continue _fun0005 }
case 73:
                var2 = null;
                return var2;
case 75:
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
    var2 = 28;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var2['ROBLOX_SUBGAME_UPDATE'] = var4;
    var2['ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS'] = var4;
    var10 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var3 = var1.localActivities;
        var2 = {};
        var4 = var2;
        var1 = copyDataProperties(var4, var3);
        _closure1_slot25 = var2;
        var2 = _closure1_slot28;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['OVERLAY_INITIALIZE'] = var10;
    var10 = function handleStartSession() {
        var2 = {};
        _closure1_slot25 = var2;
        var2 = _closure1_slot28;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['START_SESSION'] = var10;
    var10 = function handleLocalActivityUpdate(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var5 = var1.socketId;
            var8 = var1.pid;
            var7 = var1.activity;
            var6 = var1.partyPrivacy;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 24;
            var3 = var3[var1];
            var1 = undefined;
            var9 = var4.bind(var1)(var3);
            var3 = _closure1_slot25;
            var4 = var3[var5];
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var3 = var9.bind(var1)(var4, var3);
            if(var3) { _fun0006_ip = 77; continue _fun0006 }
case 78:
            var3 = null;
            if(!(var3 == var7)) { _fun0006_ip = 79; continue _fun0006 }
case 80:
            var3 = _closure1_slot25;
            var3 = delete var3[var5];
            _fun0006_ip = 81; continue _fun0006;
case 79:
            var4 = _closure1_slot25;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var4[var5] = var3;
case 81:
            var2 = _closure1_slot28;
            var2 = var2.bind(var1)();
            return var1;
case 77:
            var1 = false;
            return var1;
        }
    };
    var2['LOCAL_ACTIVITY_UPDATE'] = var10;
    var10 = function handleRPCAppDisconnected(arg1) {
        var1 = arg1;
        var3 = var1.socketId;
        var2 = _closure1_slot25;
        var2 = delete var2[var3];
        var2 = _closure1_slot28;
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
case 0:
            var3 = {};
            var1 = global;
            var5 = var1.Object;
            var4 = var5.entries;
            var1 = _closure1_slot25;
            var17 = var4.bind(var5)(var1);
            var1 = var17.length;
            var16 = 0;
            var5 = var16 < var1;
            var7 = false;
            var15 = 'flags';
            var13 = 25;
            var1 = undefined;
            var12 = null;
            var11 = 26;
            var10 = 2;
            var9 = 1;
            var8 = 3;
            var6 = 0;
            var4 = false;
            if(!var5) { _fun0007_ip = 82; continue _fun0007 }
case 5:
            var5 = var17[var6];
            var19 = _closure1_slot8;
            var5 = var19.bind(var1)(var5, var10);
            var18 = var5[var16];
            var5 = var5[var9];
            var5 = var19.bind(var1)(var5, var8);
            var20 = var5[var16];
            var22 = var5[var9];
            var19 = var5[var10];
            var21 = var22.flags;
            var23 = var12 != var21;
            var5 = 0;
            if(!var23) { _fun0007_ip = 83; continue _fun0007 }
case 22:
            var5 = var21;
case 83:
            var23 = _closure1_slot0;
            var21 = _closure1_slot2;
            var24 = var21[var13];
            var26 = var23.bind(var1)(var24);
            var25 = var26.computeActivityFlags;
            var21 = var21[var11];
            var27 = var23.bind(var1)(var21);
            var24 = var27.hasFlag;
            var23 = var12 == var22;
            var21 = undefined;
            if(var23) { _fun0007_ip = 8; continue _fun0007 }
case 84:
            var21 = var22.flags;
case 8:
            var28 = var12 != var21;
            var23 = 0;
            if(!var28) { _fun0007_ip = 85; continue _fun0007 }
case 86:
            var23 = var21;
case 85:
            var21 = _closure1_slot21;
            var21 = var21.INSTANCE;
            var32 = var24.bind(var27)(var23, var21);
            var27 = var22.platform;
            var21 = _closure1_slot22;
            var21 = var21.EMBEDDED;
            var28 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var13];
            var28 = var28.bind(var1)(var23);
            var23 = var28.isContextlessEmbeddedActivity;
            var30 = var23.bind(var28)(var22);
            var31 = var27 === var21;
            var34 = var26;
            var33 = var22;
            var29 = var19;
            var21 = var34[var25](var33, var32, var31, var30, var29, var28);
            if(!(var21 === var5)) { _fun0007_ip = 87; continue _fun0007 }
case 88:
            var5 = new Array(3);
            var5[0] = var20;
            var5[1] = var22;
            var5[2] = var19;
            var3[var18] = var5;
            _fun0007_ip = 89; continue _fun0007;
case 87:
            var5 = new Array(3);
            var5[0] = var20;
            var20 = {};
            var33 = var20;
            var32 = var22;
            var22 = copyDataProperties(var33, var32);
            var20[14] = var21;
            var5[1] = var20;
            var5[2] = var19;
            var3[var18] = var5;
            var7 = true;
case 89:
            var6 = var6 + 1;
            var5 = var17.length;
            var4 = var7;
            if(var6 < var5) { _fun0007_ip = 5; continue _fun0007 }
case 82:
            if(!var4) { _fun0007_ip = 90; continue _fun0007 }
case 91:
            _closure1_slot25 = var3;
case 90:
            var2 = _closure1_slot28;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var2['USER_SETTINGS_PROTO_UPDATE'] = var9;
    var2['EMBEDDED_ACTIVITY_CLOSE'] = var4;
    var2['RUNNING_GAME_TOGGLE_DETECTION'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/LocalActivityStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
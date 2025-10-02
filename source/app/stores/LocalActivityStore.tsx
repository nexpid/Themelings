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
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 20;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var6 = var5.CustomStatusSetting;
            var5 = var6.getSetting;
            var9 = var5.bind(var6)();
            var6 = null;
            var5 = var6 != var9;
            if(!var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var8 = var9.expiresAtMs;
            var7 = '0';
            var7 = var7 === var8;
            if(var7) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var8 = global;
            var12 = var8.Date;
            var11 = var8.Number;
            var10 = var9.expiresAtMs;
            var17 = var11.bind(var1)(var10);
            var11 = var12.prototype;
            var11 = Object.create(var11, {constructor: {value: var12}});
            var18 = var11;
            var10 = new var18[var12](var17, var16);
            var11 = var10 instanceof Object ? var10 : var11;
            var10 = var11.getTime;
            var10 = var10.bind(var11)();
            var8 = var8.Date;
            var11 = var8.prototype;
            var11 = Object.create(var11, {constructor: {value: var8}});
            var18 = var11;
            var8 = new var18[var8](var17);
            var11 = var8 instanceof Object ? var8 : var11;
            var8 = var11.getTime;
            var8 = var8.bind(var11)();
            var10 = var10 - var8;
            var8 = 0;
            var7 = var10 > var8;
case 8:
            var5 = var7;
case 6:
            if(!var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var7 = var3.push;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 21;
            var5 = var10[var5];
            var8 = var8.bind(var1)(var5);
            var5 = var8.getActivityFromCustomStatus;
            var5 = var5.bind(var8)(var9);
            var5 = var7.bind(var3)(var5);
case 10:
            var7 = _closure1_slot13;
            var5 = var7.getActivities;
            var16 = var5.bind(var7)();
            var7 = var3.push;
            var5 = new Array(0);
            var17 = var5;
            var15 = 0;
            var8 = arraySpread(var17, var16, var15);
            var17 = var7;
            var16 = var5;
            var15 = var3;
            var5 = apply(var17, var16, var15);
            var7 = _closure1_slot18;
            var5 = var7.getStream;
            var8 = var5.bind(var7)();
            if(!(var6 != var8)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var7 = var3.push;
            var5 = {};
            var9 = _closure1_slot24;
            var9 = var9.STREAMING;
            var5['type'] = var9;
            var17 = var5;
            var16 = var8;
            var8 = copyDataProperties(var17, var16);
            var5 = var7.bind(var3)(var5);
case 12:
            var8 = global;
            var5 = var8.Set;
            var7 = var5.prototype;
            var7 = Object.create(var7, {constructor: {value: var5}});
            var18 = var7;
            var5 = new var18[var5](var17);
            var9 = var5 instanceof Object ? var5 : var7;
            var _closure2_slot1 = var9;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 22;
            var5 = var10[var5];
            var10 = var7.bind(var1)(var5);
            var7 = var10.forEach;
            var5 = _closure1_slot26;
            var4 = function(arg1) {
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
                    if(var5) { _fun0003_ip = 5; continue _fun0003 }
case 19:
                    var2.return();
case 5:
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
            var4 = var7.bind(var10)(var5, var4);
            var5 = _closure1_slot11;
            var4 = var5.getVisibleGame;
            var10 = var4.bind(var5)();
            var7 = var6 != var10;
            if(!var7) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var4 = var10.name;
            var7 = var6 != var4;
case 25:
            if(!var7) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var5 = var9.has;
            var4 = var10.name;
            var4 = var5.bind(var9)(var4);
            if(var4) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 23;
            var5 = var11[var5];
            var11 = var9.bind(var1)(var5);
            var9 = var11.doesGameHaveRichPresence;
            var5 = new Array(0);
            var17 = var5;
            var16 = var3;
            var15 = 0;
            var15 = arraySpread(var17, var16, var15);
            var14 = _closure1_slot21;
            var12 = var14.getRemoteActivities;
            var16 = var12.bind(var14)();
            var17 = var5;
            var12 = arraySpread(var17, var16, var15);
            var4 = var9.bind(var11)(var10, var5);
case 29:
            var7 = var4;
case 27:
            var5 = var6 != var10;
            if(!var5) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var5 = var10.isLauncher;
case 31:
            var9 = _closure1_slot16;
            var4 = var9.getCurrentUserActiveStream;
            var4 = var4.bind(var9)();
            if(!(var6 != var10)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var9 = var10.name;
            if(!(var6 != var9)) { _fun0002_ip = 33; continue _fun0002 }
case 35:
            if(var7) { _fun0002_ip = 33; continue _fun0002 }
case 36:
            if(!var5) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            if(!(var6 != var4)) { _fun0002_ip = 33; continue _fun0002 }
case 37:
            var7 = _closure1_slot19;
            var5 = var7.getGameByName;
            var4 = var10.name;
            var11 = var5.bind(var7)(var4);
            var5 = var3.push;
            var4 = {};
            var7 = _closure1_slot24;
            var7 = var7.PLAYING;
            var4['type'] = var7;
            var7 = var10.name;
            var4['name'] = var7;
            var7 = var10.id;
            if(!(var6 == var7)) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var12 = var6 == var11;
            var9 = undefined;
            if(var12) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var9 = var11.id;
case 41:
            var7 = var9;
case 39:
            var4['application_id'] = var7;
            var7 = {};
            var9 = var10.start;
            var7['start'] = var9;
            var4['timestamps'] = var7;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 24;
            var7 = var11[var7];
            var9 = var9.bind(var1)(var7);
            var7 = var9.maybeAddAdditionalGameMetadata;
            var16 = var7.bind(var9)(var10);
            var17 = var4;
            var7 = copyDataProperties(var17, var16);
            var4 = var5.bind(var3)(var4);
case 33:
            var5 = _closure1_slot14;
            var4 = var5.getActivity;
            var7 = var4.bind(var5)();
            if(!(var6 != var7)) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var5 = var3.push;
            var4 = {};
            var9 = _closure1_slot24;
            var9 = var9.LISTENING;
            var4['type'] = var9;
            var17 = var4;
            var16 = var7;
            var7 = copyDataProperties(var17, var16);
            var4 = var5.bind(var3)(var4);
case 43:
            var5 = _closure1_slot12;
            var4 = var5.getCurrentHangStatus;
            var12 = var4.bind(var5)();
            if(!(var6 != var12)) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var5 = _closure1_slot12;
            var4 = var5.getCustomHangStatus;
            var7 = var4.bind(var5)();
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 25;
            var4 = var9[var4];
            var9 = var5.bind(var1)(var4);
            var5 = var9.getHangStatusExperiment;
            var4 = {};
            var13 = _closure1_slot17;
            var11 = var13.getChannel;
            var14 = _closure1_slot20;
            var10 = var14.getVoiceChannelId;
            var10 = var10.bind(var14)();
            var11 = var11.bind(var13)(var10);
            var13 = var6 == var11;
            var10 = undefined;
            if(var13) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var10 = var11.guild_id;
case 47:
            var4['guildId'] = var10;
            var10 = 'LocalActivityStore';
            var4['location'] = var10;
            var4 = var5.bind(var9)(var4);
            var11 = var4.defaultStatusVariant;
            var5 = var3.push;
            var4 = {};
            var9 = _closure1_slot24;
            var9 = var9.HANG_STATUS;
            var4['type'] = var9;
            var9 = 'Hang Status';
            var4['name'] = var9;
            var8 = var8.HermesInternal;
            var10 = var8.concat;
            var9 = '';
            var8 = ':';
            var8 = var10.bind(var9)(var12, var8, var11);
            var4['state'] = var8;
            var9 = var6 == var7;
            var8 = undefined;
            if(var9) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var8 = var7.status;
case 49:
            var4['details'] = var8;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var6 = var7.emoji;
case 51:
            var4['emoji'] = var6;
            var4 = var5.bind(var3)(var4);
case 45:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 26;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = _closure1_slot25;
            var4 = var5.bind(var1)(var4, var3);
            if(var4) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            _closure1_slot25 = var3;
case 53:
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
    var2 = var7.bind(var1)(var2);
    var _closure1_slot21 = var2;
    var2 = 19;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.ActivityFlags;
    var _closure1_slot22 = var8;
    var8 = var2.ActivityGamePlatforms;
    var _closure1_slot23 = var8;
    var2 = var2.ActivityTypes;
    var _closure1_slot24 = var2;
    var2 = new Array(0);
    var _closure1_slot25 = var2;
    var2 = {};
    var _closure1_slot26 = var2;
    var2 = 29;
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
case 55:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 56; continue _fun0004;
case 19:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 56:
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
            var13 = var4.waitFor;
            var23 = _closure1_slot11;
            var22 = _closure1_slot9;
            var21 = _closure1_slot18;
            var20 = _closure1_slot16;
            var19 = _closure1_slot14;
            var18 = _closure1_slot15;
            var17 = _closure1_slot19;
            var16 = _closure1_slot12;
            var15 = _closure1_slot21;
            var14 = _closure1_slot10;
            var24 = var4;
            var2 = var24[var13](var23, var22, var21, var20, var19, var18, var17, var16, var15, var14, var13);
            var3 = var4.syncWith;
            var5 = _closure1_slot13;
            var2 = new Array(2);
            var2[0] = var5;
            var1 = _closure1_slot12;
            var2[1] = var1;
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
            var1 = _closure1_slot25;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getPrimaryActivity';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot25;
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
                var1 = _closure1_slot24;
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
            var3 = _closure1_slot25;
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
            var1 = _closure1_slot26;
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
                var1 = _closure1_slot26;
                var8 = var2.bind(var3)(var1);
                var1 = var8.length;
                var7 = 0;
                var1 = var7 < var1;
                var6 = undefined;
                var5 = 2;
                var4 = 1;
                var3 = 0;
                if(!var1) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                var2 = var8[var3];
                var1 = _closure1_slot8;
                var1 = var1.bind(var6)(var2, var5);
                var2 = var1[var7];
                var1 = var1[var4];
                if(!(var2 !== var10)) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                var3 = var3 + 1;
                var2 = var8.length;
                if(var3 < var2) { _fun0005_ip = 58; continue _fun0005 }
case 57:
                var2 = null;
                return var2;
case 59:
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
    var2 = 30;
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
        _closure1_slot26 = var2;
        var2 = _closure1_slot28;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['OVERLAY_INITIALIZE'] = var10;
    var10 = function handleStartSession() {
        var2 = {};
        _closure1_slot26 = var2;
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
            var1 = 26;
            var3 = var3[var1];
            var1 = undefined;
            var9 = var4.bind(var1)(var3);
            var3 = _closure1_slot26;
            var4 = var3[var5];
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var3 = var9.bind(var1)(var4, var3);
            if(var3) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var3 = null;
            if(!(var3 == var7)) { _fun0006_ip = 63; continue _fun0006 }
case 64:
            var3 = _closure1_slot26;
            var3 = delete var3[var5];
            _fun0006_ip = 65; continue _fun0006;
case 63:
            var4 = _closure1_slot26;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var4[var5] = var3;
case 65:
            var2 = _closure1_slot28;
            var2 = var2.bind(var1)();
            return var1;
case 61:
            var1 = false;
            return var1;
        }
    };
    var2['LOCAL_ACTIVITY_UPDATE'] = var10;
    var10 = function handleRPCAppDisconnected(arg1) {
        var1 = arg1;
        var3 = var1.socketId;
        var2 = _closure1_slot26;
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
            var1 = _closure1_slot26;
            var17 = var4.bind(var5)(var1);
            var1 = var17.length;
            var16 = 0;
            var5 = var16 < var1;
            var7 = false;
            var15 = 'flags';
            var13 = 27;
            var1 = undefined;
            var12 = null;
            var11 = 28;
            var10 = 2;
            var9 = 1;
            var8 = 3;
            var6 = 0;
            var4 = false;
            if(!var5) { _fun0007_ip = 66; continue _fun0007 }
case 4:
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
            if(!var23) { _fun0007_ip = 67; continue _fun0007 }
case 22:
            var5 = var21;
case 67:
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
case 68:
            var21 = var22.flags;
case 8:
            var28 = var12 != var21;
            var23 = 0;
            if(!var28) { _fun0007_ip = 69; continue _fun0007 }
case 70:
            var23 = var21;
case 69:
            var21 = _closure1_slot22;
            var21 = var21.INSTANCE;
            var32 = var24.bind(var27)(var23, var21);
            var27 = var22.platform;
            var21 = _closure1_slot23;
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
            if(!(var21 === var5)) { _fun0007_ip = 71; continue _fun0007 }
case 72:
            var5 = new Array(3);
            var5[0] = var20;
            var5[1] = var22;
            var5[2] = var19;
            var3[var18] = var5;
            _fun0007_ip = 73; continue _fun0007;
case 71:
            var5 = new Array(3);
            var5[0] = var20;
            var20 = {};
            var33 = var20;
            var32 = var22;
            var22 = copyDataProperties(var33, var32);
            var20[var15] = var21;
            var5[1] = var20;
            var5[2] = var19;
            var3[var18] = var5;
            var7 = true;
case 73:
            var6 = var6 + 1;
            var5 = var17.length;
            var4 = var7;
            if(var6 < var5) { _fun0007_ip = 4; continue _fun0007 }
case 66:
            if(!var4) { _fun0007_ip = 74; continue _fun0007 }
case 75:
            _closure1_slot26 = var3;
case 74:
            var2 = _closure1_slot28;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var2['USER_SETTINGS_PROTO_UPDATE'] = var9;
    var2['EMBEDDED_ACTIVITY_CLOSE'] = var4;
    var2['UPDATE_HANG_STATUS'] = var4;
    var2['RUNNING_GAME_TOGGLE_DETECTION'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/LocalActivityStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
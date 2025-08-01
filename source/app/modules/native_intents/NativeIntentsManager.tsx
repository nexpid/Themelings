// app/modules/native_intents/NativeIntentsManager.tsx
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
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 344; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot22;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot22;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0003_ip = 67; continue _fun0003;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function indexingEnabled() {
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 12;
        var1 = var8[var1];
        var6 = undefined;
        var4 = var7.bind(var6)(var1);
        var3 = var4.getCurrentConfig;
        var2 = {};
        var1 = 'NativeIntentsManager';
        var2['location'] = var1;
        var1 = {};
        var5 = true;
        var1['autoTrackExposure'] = var5;
        var5 = 13;
        var5 = var8[var5];
        var6 = var7.bind(var6)(var5);
        var5 = var6.hasSearch;
        var5 = var5.bind(var6)();
        var5 = !var5;
        var1['disable'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = var1.searchEnabled;
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function clearEnabled() {
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 12;
        var1 = var8[var1];
        var6 = undefined;
        var4 = var7.bind(var6)(var1);
        var3 = var4.getCurrentConfig;
        var2 = {};
        var1 = 'NativeIntentsManager';
        var2['location'] = var1;
        var1 = {};
        var5 = true;
        var1['autoTrackExposure'] = var5;
        var5 = 13;
        var5 = var8[var5];
        var6 = var7.bind(var6)(var5);
        var5 = var6.hasSearch;
        var5 = var5.bind(var6)();
        var5 = !var5;
        var1['disable'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = var1.clearEnabled;
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function handleRelativeURL(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 37; continue _fun0005 }
 9:
            var2 = var3.startsWith;
            if(!(var1 != var2)) { _fun0005_ip = 37; continue _fun0005 }
 19:
            var4 = var3.startsWith;
            var2 = '/';
            var2 = var4.bind(var3)(var2);
            if(var2) { _fun0005_ip = 51; continue _fun0005 }
 37:
            var2 = var1 != var3;
            var1 = undefined;
            if(!var2) { _fun0005_ip = 49; continue _fun0005 }
 46:
            var1 = var3;
 49:
            _fun0005_ip = 69; continue _fun0005;
 51:
            var2 = global;
            var2 = var2.location;
            var2 = var2.origin;
            var1 = var2 + var3;
 69:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function makeSearchItem(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var5 = arg1;
            var13 = arg2;
            var2 = arguments[2];
            var9 = undefined;
            if(!(var2 === var9)) { _fun0006_ip = 17; continue _fun0006 }
 15:
            var2 = false;
 17:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var15 = 14;
            var4 = var1[var15];
            var10 = var3.bind(var9)(var4);
            var8 = var10.computeChannelName;
            var23 = _closure1_slot13;
            var22 = _closure1_slot11;
            var25 = var10;
            var24 = var5;
            var21 = true;
            var8 = var25[var8](var24, var23, var22, var21, var20);
            var1 = var1[var15];
            var7 = var3.bind(var9)(var1);
            var4 = var7.computeChannelName;
            var23 = _closure1_slot13;
            var22 = _closure1_slot11;
            var12 = false;
            var25 = var7;
            var24 = var5;
            var21 = false;
            var11 = var25[var4](var24, var23, var22, var21, var20);
            var14 = new Array(0);
            var3 = new Array(2);
            var3[0] = var8;
            var3[1] = var11;
            var4 = new Array(0);
            var1 = var5.isGuildVocal;
            var1 = var1.bind(var5)();
            if(!var1) { _fun0006_ip = 168; continue _fun0006 }
 136:
            var7 = var3.push;
            var1 = global;
            var1 = var1.HermesInternal;
            var10 = var1.concat;
            var1 = '!';
            var1 = var10.bind(var1)(var11);
            var1 = var7.bind(var3)(var1);
 168:
            var10 = _closure1_slot8;
            var7 = var10.getChannel;
            var1 = var5.parent_id;
            var17 = var7.bind(var10)(var1);
            var1 = null;
            if(!(var1 != var17)) { _fun0006_ip = 302; continue _fun0006 }
 194:
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var10 = var7[var15];
            var19 = var11.bind(var9)(var10);
            var18 = var19.computeChannelName;
            var23 = _closure1_slot13;
            var22 = _closure1_slot11;
            var25 = var19;
            var24 = var17;
            var21 = true;
            var10 = var25[var18](var24, var23, var22, var21, var20);
            var7 = var7[var15];
            var16 = var11.bind(var9)(var7);
            var15 = var16.computeChannelName;
            var23 = _closure1_slot13;
            var22 = _closure1_slot11;
            var25 = var16;
            var24 = var17;
            var21 = false;
            var11 = var25[var15](var24, var23, var22, var21, var20);
            var7 = var4.push;
            var7 = var7.bind(var4)(var10);
            var7 = var4.push;
            var7 = var7.bind(var4)(var11);
            var7 = var14.push;
            var7 = var7.bind(var14)(var10);
 302:
            if(!(var1 != var13)) { _fun0006_ip = 336; continue _fun0006 }
 306:
            var10 = var4.push;
            var7 = var13.name;
            var7 = var10.bind(var4)(var7);
            var10 = var14.push;
            var7 = var13.name;
            var7 = var10.bind(var14)(var7);
 336:
            var10 = var14.length;
            var7 = 0;
            var10 = var10 > var7;
            var7 = '';
            if(!var10) { _fun0006_ip = 399; continue _fun0006 }
 354:
            var11 = var14.join;
            var10 = ', ';
            var15 = var11.bind(var14)(var10);
            var10 = global;
            var10 = var10.HermesInternal;
            var14 = var10.concat;
            var11 = ' (';
            var10 = ')';
            var7 = var14.bind(var11)(var15, var10);
 399:
            var7 = var8 + var7;
            var11 = _closure1_slot18;
            var10 = var11.CHANNEL;
            var14 = var1 == var13;
            var8 = undefined;
            if(var14) { _fun0006_ip = 427; continue _fun0006 }
 422:
            var8 = var13.id;
 427:
            if(!(var1 == var8)) { _fun0006_ip = 435; continue _fun0006 }
 431:
            var8 = _closure1_slot14;
 435:
            var1 = var5.id;
            var8 = var10.bind(var11)(var8, var1);
            var1 = {};
            var1['id'] = var8;
            var1['relatedUniqueIdentifier'] = var8;
            var8 = 'url';
            var1['type'] = var8;
            var1['title'] = var7;
            var1['displayName'] = var7;
            var8 = _closure1_slot25;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 15;
            var7 = var11[var7];
            var11 = var10.bind(var9)(var7);
            var10 = var11.getChannelIconURL;
            var7 = 128;
            var7 = var10.bind(var11)(var5, var7, var12);
            var7 = var8.bind(var9)(var7);
            var1['thumbnailURL'] = var7;
            var7 = var5.type;
            var5 = _closure1_slot15;
            var5 = var5.DM;
            if(!(var7 !== var5)) { _fun0006_ip = 556; continue _fun0006 }
 544:
            var5 = _closure1_slot19;
            var5 = var5.OTHER_CHANNEL;
            _fun0006_ip = 566; continue _fun0006;
 556:
            var6 = _closure1_slot19;
            var5 = var6.DM;
 566:
            var1['rankingHint'] = var5;
            var1['keywords'] = var4;
            var1['alternateNames'] = var3;
            var1['isUpdate'] = var2;
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function getGuildThumbnail(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var7 = arg1;
            var1 = null;
            var2 = var1 != var7;
            var4 = undefined;
            var1 = undefined;
            if(!var2) { _fun0007_ip = 86; continue _fun0007 }
 16:
            var3 = _closure1_slot25;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 16;
            var2 = var6[var2];
            var6 = var5.bind(var4)(var2);
            var5 = var6.getGuildIconURL;
            var2 = {};
            var8 = var7.id;
            var2['id'] = var8;
            var7 = var7.icon;
            var2['icon'] = var7;
            var7 = 128;
            var2['size'] = var7;
            var2 = var5.bind(var6)(var2);
            var1 = var3.bind(var4)(var2);
 86:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function makeGuildDomain(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var5 = arg1;
            var2 = arguments[1];
            var9 = undefined;
            if(!(var2 === var9)) { _fun0008_ip = 14; continue _fun0008 }
 12:
            var2 = false;
 14:
            var1 = _closure1_slot27;
            var3 = var1.bind(var9)(var5);
            var6 = _closure1_slot18;
            var4 = var6.CHANNEL;
            var1 = var5.id;
            var4 = var4.bind(var6)(var1);
            var1 = {};
            var1['id'] = var4;
            var1['relatedUniqueIdentifier'] = var4;
            var4 = 'url';
            var1['type'] = var4;
            var4 = var5.name;
            var1['title'] = var4;
            var4 = var5.name;
            var1['displayName'] = var4;
            var7 = var5.name;
            var4 = global;
            var4 = var4.HermesInternal;
            var6 = var4.concat;
            var4 = '*';
            var6 = var6.bind(var4)(var7);
            var4 = new Array(1);
            var4[0] = var6;
            var1['alternateNames'] = var4;
            var4 = _closure1_slot19;
            var4 = var4.GUILD;
            var1['rankingHint'] = var4;
            var4 = new Array(1);
            var4[0] = var1;
            var7 = _closure1_slot8;
            var6 = var7.getMutableGuildChannelsForGuild;
            var1 = var5.id;
            var12 = var6.bind(var7)(var1);
            var10 = var12;
            for(var1 in var10)
 177:
            {
 186:
                var13 = var1;
                var15 = var12[var13];
                var16 = _closure1_slot10;
                var14 = var16.can;
                var13 = _closure1_slot17;
                var13 = var13.VIEW_CHANNEL;
                var13 = var14.bind(var16)(var13, var15);
                if(!var13) { _fun0008_ip = 177; continue _fun0008 }
 222:
                var14 = var4.push;
                var13 = _closure1_slot26;
                var13 = var13.bind(var9)(var15, var5, var2);
                var13 = var14.bind(var4)(var13);
                _fun0008_ip = 177; continue _fun0008;
            }
 245:
            var6 = _closure1_slot21;
            var10 = _closure1_slot8;
            var7 = var10.getAllThreadsForGuild;
            var1 = var5.id;
            var1 = var7.bind(var10)(var1);
            var7 = var6.bind(var9)(var1);
            var6 = var7.bind(var9)();
            var1 = var6.done;
            if(var1) { _fun0008_ip = 356; continue _fun0008 }
 286:
            var11 = var6.value;
            var12 = _closure1_slot10;
            var10 = var12.can;
            var1 = _closure1_slot17;
            var1 = var1.VIEW_CHANNEL;
            var1 = var10.bind(var12)(var1, var11);
            if(!var1) { _fun0008_ip = 341; continue _fun0008 }
 320:
            var10 = var4.push;
            var1 = _closure1_slot26;
            var1 = var1.bind(var9)(var11, var5, var2);
            var1 = var10.bind(var4)(var1);
 341:
            var10 = var7.bind(var9)();
            var1 = var10.done;
            var6 = var10;
            if(!var1) { _fun0008_ip = 286; continue _fun0008 }
 356:
            var1 = {};
            var5 = var5.id;
            var1['id'] = var5;
            var1['items'] = var4;
            var1['defaultThumbnailURL'] = var3;
            var1['isUpdate'] = var2;
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function setChannelActivity(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var9 = arg1;
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 12;
            var3 = var10[var1];
            var1 = undefined;
            var8 = var11.bind(var1)(var3);
            var7 = var8.getCurrentConfig;
            var4 = {};
            var3 = 'NativeIntentsManager';
            var4['location'] = var3;
            var3 = {};
            var6 = true;
            var3['autoTrackExposure'] = var6;
            var5 = 13;
            var10 = var10[var5];
            var11 = var11.bind(var1)(var10);
            var10 = var11.hasUserActivity;
            var10 = var10.bind(var11)();
            var10 = !var10;
            var3['disable'] = var10;
            var3 = var7.bind(var8)(var4, var3);
            var3 = var3.activityEnabled;
            if(!var3) { _fun0009_ip = 410; continue _fun0009 }
 103:
            var3 = null;
            var7 = var3 != var9;
            var4 = undefined;
            if(!var7) { _fun0009_ip = 128; continue _fun0009 }
 114:
            var8 = _closure1_slot8;
            var7 = var8.getChannel;
            var4 = var7.bind(var8)(var9);
 128:
            if(!(var3 == var4)) { _fun0009_ip = 164; continue _fun0009 }
 132:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var5];
            var8 = var8.bind(var1)(var7);
            var7 = var8.resignActivity;
            var7 = var7.bind(var8)();
            _fun0009_ip = 410; continue _fun0009;
 164:
            var9 = _closure1_slot9;
            var8 = var9.getGuild;
            var7 = var4.guild_id;
            var8 = var8.bind(var9)(var7);
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 14;
            var7 = var10[var7];
            var11 = var9.bind(var1)(var7);
            var10 = var11.computeChannelName;
            var15 = _closure1_slot13;
            var14 = _closure1_slot11;
            var17 = var11;
            var16 = var4;
            var13 = true;
            var7 = var17[var10](var16, var15, var14, var13, var12);
            var9 = var3 != var8;
            var10 = '';
            var3 = var10;
            if(!var9) { _fun0009_ip = 277; continue _fun0009 }
 243:
            var12 = var8.name;
            var8 = global;
            var8 = var8.HermesInternal;
            var11 = var8.concat;
            var9 = ' (';
            var8 = ')';
            var3 = var11.bind(var9)(var12, var8);
 277:
            var3 = var7 + var3;
            var9 = _closure1_slot18;
            var8 = var9.CHANNEL;
            var7 = var4.guild_id;
            var4 = var4.id;
            var7 = var8.bind(var9)(var7, var4);
            var4 = {};
            var8 = _closure1_slot16;
            var9 = var8.BASE_URL;
            var8 = global;
            var8 = var8.HermesInternal;
            var8 = var8.concat;
            var8 = var8.bind(var10)(var9, var7);
            var4['webpageURL'] = var8;
            var4['relatedUniqueIdentifier'] = var7;
            var4['eligibleForHandoff'] = var6;
            var4['eligibleForSearch'] = var6;
            var4['title'] = var3;
            var4['displayName'] = var3;
            var3 = 'com.discord.view-channel';
            var4['type'] = var3;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var3 = var3.bind(var1)(var2);
            var2 = var3.setActivity;
            var2 = var2.bind(var3)(var4);
 410:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function updateUserId(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var4 = _closure1_slot8;
            var3 = var4.getDMChannelFromUserId;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 != var1)) { _fun0010_ip = 46; continue _fun0010 }
 27:
            var3 = _closure1_slot31;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
 46:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function indexChannelUpdates(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var3 = _closure1_slot23;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0011_ip = 379; continue _fun0011 }
 19:
            var7 = new Array(0);
            var4 = new Array(0);
            var15 = {};
            var5 = _closure1_slot21;
            var3 = arg1;
            var14 = var5.bind(var1)(var3);
            var5 = var14.bind(var1)();
            var3 = var5.done;
            var13 = true;
            var12 = null;
            var11 = var5;
            var10 = undefined;
            var9 = undefined;
            var8 = undefined;
            var6 = undefined;
            var5 = undefined;
            if(var3) { _fun0011_ip = 297; continue _fun0011 }
 73:
            var16 = var11.value;
            var18 = _closure1_slot10;
            var17 = var18.can;
            var3 = _closure1_slot17;
            var3 = var3.VIEW_CHANNEL;
            var3 = var17.bind(var18)(var3, var16);
            if(var3) { _fun0011_ip = 127; continue _fun0011 }
 107:
            var17 = var4.push;
            var3 = var16.id;
            var3 = var17.bind(var4)(var3);
            _fun0011_ip = 279; continue _fun0011;
 127:
            var18 = _closure1_slot9;
            var17 = var18.getGuild;
            var3 = var16.guild_id;
            var18 = var17.bind(var18)(var3);
            var3 = var12 == var18;
            var19 = undefined;
            if(var3) { _fun0011_ip = 160; continue _fun0011 }
 155:
            var19 = var18.id;
 160:
            var17 = var19;
            if(!(var12 == var19)) { _fun0011_ip = 171; continue _fun0011 }
 167:
            var17 = _closure1_slot14;
 171:
            var3 = _closure1_slot26;
            var16 = var3.bind(var1)(var16, var18, var13);
            var3 = var15[var17];
            if(!(var12 == var3)) { _fun0011_ip = 254; continue _fun0011 }
 190:
            var20 = _closure1_slot27;
            var23 = var20.bind(var1)(var18);
            var20 = new Array(1);
            var20[0] = var16;
            var22 = var7.push;
            var21 = {};
            var21['id'] = var17;
            var21['items'] = var20;
            var21['defaultThumbnailURL'] = var23;
            var21 = var22.bind(var7)(var21);
            var15[var17] = var20;
            var10 = var19;
            var9 = var18;
            var8 = var17;
            var6 = var16;
            var5 = var3;
            _fun0011_ip = 279; continue _fun0011;
 254:
            var20 = var3.push;
            var20 = var20.bind(var3)(var16);
            var10 = var19;
            var9 = var18;
            var8 = var17;
            var6 = var16;
            var5 = var3;
 279:
            var16 = var14.bind(var1)();
            var3 = var16.done;
            var11 = var16;
            if(!var3) { _fun0011_ip = 73; continue _fun0011 }
 297:
            var3 = var7.length;
            var5 = 0;
            if(!(var3 > var5)) { _fun0011_ip = 339; continue _fun0011 }
 308:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 13;
            var3 = var8[var3];
            var6 = var6.bind(var1)(var3);
            var3 = var6.indexDomains;
            var3 = var3.bind(var6)(var7);
 339:
            var3 = var4.length;
            if(!(var3 > var5)) { _fun0011_ip = 379; continue _fun0011 }
 348:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 13;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.deleteSearchItems;
            var2 = var2.bind(var3)(var4);
 379:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ME;
    var _closure1_slot14 = var8;
    var8 = var4.ChannelTypes;
    var _closure1_slot15 = var8;
    var8 = var4.Links;
    var _closure1_slot16 = var8;
    var8 = var4.Permissions;
    var _closure1_slot17 = var8;
    var4 = var4.Routes;
    var _closure1_slot18 = var4;
    var4 = {};
    var9 = 100;
    var4['GUILD'] = var9;
    var8 = 'GUILD';
    var4[var9] = var8;
    var9 = 75;
    var4['DM'] = var9;
    var8 = 'DM';
    var4[var9] = var8;
    var9 = 50;
    var4['OTHER_CHANNEL'] = var9;
    var8 = 'OTHER_CHANNEL';
    var4[var9] = var8;
    var _closure1_slot19 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function NativeIntentsManager(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var4 = this;
                var12 = 0;
                var1 = copyRestArgs(var12);
                var7 = _closure1_slot3;
                var2 = _closure2_slot0;
                var3 = undefined;
                var7 = var7.bind(var3)(var4, var2);
                var9 = new Array(0);
                var12 = var9;
                var11 = var1;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                var1 = _closure1_slot6;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot20;
                var1 = var1.bind(var3)();
                if(var1) { _fun0012_ip = 84; continue _fun0012 }
 71:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0012_ip = 118; continue _fun0012;
 84:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
 118:
                var1 = var2.bind(var3)(var4, var1);
                var2 = {};
                var3 = var1.handleInit;
                var2['POST_CONNECTION_OPEN'] = var3;
                var3 = var1.handleLogout;
                var2['LOGOUT'] = var3;
                var3 = var1.handleChannelSelect;
                var2['CHANNEL_SELECT'] = var3;
                var3 = var1.handleChannelCreate;
                var2['CHANNEL_CREATE'] = var3;
                var3 = var1.handleChannelDelete;
                var2['CHANNEL_DELETE'] = var3;
                var3 = var1.handleChannelUpdates;
                var2['CHANNEL_UPDATES'] = var3;
                var3 = var1.handleGuildCreateOrUpdate;
                var2['GUILD_CREATE'] = var3;
                var3 = var1.handleGuildCreateOrUpdate;
                var2['GUILD_UPDATE'] = var3;
                var3 = var1.handleGuildDelete;
                var2['GUILD_DELETE'] = var3;
                var3 = var1.handleRelationshipChange;
                var2['RELATIONSHIP_ADD'] = var3;
                var3 = var1.handleRelationshipChange;
                var2['RELATIONSHIP_REMOVE'] = var3;
                var3 = var1.handleRelationshipChange;
                var2['RELATIONSHIP_UPDATE'] = var3;
                var3 = var1.handleChannelCreate;
                var2['THREAD_CREATE'] = var3;
                var3 = var1.handleChannelDelete;
                var2['THREAD_DELETE'] = var3;
                var3 = var1.handleThreadUpdate;
                var2['THREAD_UPDATE'] = var3;
                var3 = var1.handleUserUpdate;
                var2['USER_UPDATE'] = var3;
                var1['actions'] = var2;
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
        var1 = 'handleInit';
        var5['key'] = var1;
        var1 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var4 = _closure1_slot29;
                var3 = _closure1_slot12;
                var1 = var3.getCurrentlySelectedChannelId;
                var3 = var1.bind(var3)();
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = _closure1_slot24;
                var3 = var3.bind(var1)();
                if(!var3) { _fun0013_ip = 69; continue _fun0013 }
 39:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 13;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.clearSearchIndex;
                var3 = var3.bind(var4)();
 69:
                var2 = _closure1_slot23;
                var2 = var2.bind(var1)();
                if(!var2) { _fun0013_ip = 93; continue _fun0013 }
 80:
                var2 = function initializeIndex() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var3 = _closure1_slot23;
                        var1 = undefined;
                        var3 = var3.bind(var1)();
                        if(!var3) { _fun0014_ip = 174; continue _fun0014 }
 19:
                        var4 = _closure1_slot9;
                        var3 = var4.getGuildsArray;
                        var5 = var3.bind(var4)();
                        var4 = var5.map;
                        var3 = function(arg1) {
                            var3 = _closure1_slot28;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var4 = var4.bind(var5)(var3);
                        var6 = new Array(0);
                        var5 = _closure1_slot8;
                        var3 = var5.getMutablePrivateChannels;
                        var10 = var3.bind(var5)();
                        var8 = var10;
                        for(var3 in var8)
 81:
                        {
 90:
                            var11 = var3;
                            var13 = var10[var11];
                            var12 = var6.push;
                            var11 = _closure1_slot26;
                            var11 = var11.bind(var1)(var13);
                            var11 = var12.bind(var6)(var11);
                            _fun0014_ip = 81; continue _fun0014;
                        }
 118:
                        var5 = var4.push;
                        var3 = {};
                        var7 = _closure1_slot14;
                        var3['id'] = var7;
                        var3['items'] = var6;
                        var3 = var5.bind(var4)(var3);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 13;
                        var2 = var5[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.indexDomains;
                        var2 = var2.bind(var3)(var4);
 174:
                        return var1;
                    }
                };
                var2 = var2.bind(var1)();
 93:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(11);
        var1[0] = var5;
        var5 = {};
        var7 = 'handleLogout';
        var5['key'] = var7;
        var7 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var3 = _closure1_slot24;
                var1 = undefined;
                var3 = var3.bind(var1)();
                if(!var3) { _fun0015_ip = 46; continue _fun0015 }
 16:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 13;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.clearSearchIndex;
                var2 = var2.bind(var3)();
 46:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleChannelSelect';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var3 = var1.channelId;
            var2 = _closure1_slot29;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'handleChannelCreate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var1 = arg1;
                var8 = var1.channel;
                var2 = _closure1_slot23;
                var1 = undefined;
                var2 = var2.bind(var1)();
                if(!var2) { _fun0016_ip = 197; continue _fun0016 }
 27:
                var4 = _closure1_slot10;
                var3 = var4.can;
                var2 = _closure1_slot17;
                var2 = var2.VIEW_CHANNEL;
                var2 = var3.bind(var4)(var2, var8);
                if(!var2) { _fun0016_ip = 197; continue _fun0016 }
 59:
                var4 = _closure1_slot9;
                var3 = var4.getGuild;
                var2 = var8.guild_id;
                var7 = var3.bind(var4)(var2);
                var10 = null;
                if(!(var10 == var7)) { _fun0016_ip = 93; continue _fun0016 }
 84:
                var2 = var8.guild_id;
                if(!(var10 == var2)) { _fun0016_ip = 197; continue _fun0016 }
 93:
                var2 = _closure1_slot27;
                var2 = var2.bind(var1)(var7);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 13;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.indexDomains;
                var5 = {};
                var11 = var10 == var7;
                var9 = undefined;
                if(var11) { _fun0016_ip = 144; continue _fun0016 }
 139:
                var9 = var7.id;
 144:
                if(!(var10 == var9)) { _fun0016_ip = 152; continue _fun0016 }
 148:
                var9 = _closure1_slot14;
 152:
                var5['id'] = var9;
                var6 = _closure1_slot26;
                var7 = var6.bind(var1)(var8, var7);
                var6 = new Array(1);
                var6[0] = var7;
                var5['items'] = var6;
                var5['defaultThumbnailURL'] = var2;
                var2 = new Array(1);
                var2[0] = var5;
                var2 = var3.bind(var4)(var2);
 197:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handleChannelDelete';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var1 = arg1;
                var2 = var1.channel;
                var4 = _closure1_slot23;
                var1 = undefined;
                var4 = var4.bind(var1)();
                if(!var4) { _fun0017_ip = 68; continue _fun0017 }
 24:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 13;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.deleteSearchItems;
                var5 = var2.id;
                var2 = new Array(1);
                var2[0] = var5;
                var2 = var3.bind(var4)(var2);
 68:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'handleChannelUpdates';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var3 = var1.channels;
            var2 = _closure1_slot31;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'handleGuildCreateOrUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var1 = arg1;
                var3 = var1.guild;
                var7 = var1.type;
                var4 = _closure1_slot23;
                var1 = undefined;
                var4 = var4.bind(var1)();
                if(!var4) { _fun0018_ip = 160; continue _fun0018 }
 32:
                var6 = _closure1_slot9;
                var5 = var6.getGuild;
                var4 = var3.id;
                var6 = var5.bind(var6)(var4);
                var4 = null;
                if(!(var4 == var6)) { _fun0018_ip = 103; continue _fun0018 }
 57:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 13;
                var4 = var8[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.deleteSearchDomains;
                var8 = var3.id;
                var3 = new Array(1);
                var3[0] = var8;
                var3 = var4.bind(var5)(var3);
                _fun0018_ip = 160; continue _fun0018;
 103:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 13;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.indexDomains;
                var5 = _closure1_slot28;
                var2 = 'GUILD_UPDATE';
                var2 = var2 === var7;
                var5 = var5.bind(var1)(var6, var2);
                var2 = new Array(1);
                var2[0] = var5;
                var2 = var3.bind(var4)(var2);
 160:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'handleGuildDelete';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var1 = arg1;
                var2 = var1.guild;
                var4 = _closure1_slot23;
                var1 = undefined;
                var4 = var4.bind(var1)();
                if(!var4) { _fun0019_ip = 68; continue _fun0019 }
 24:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 13;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.deleteSearchDomains;
                var5 = var2.id;
                var2 = new Array(1);
                var2[0] = var5;
                var2 = var3.bind(var4)(var2);
 68:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'handleThreadUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var1 = var1.channel;
            var3 = _closure1_slot31;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'handleUserUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var1 = var1.user;
            var3 = _closure1_slot30;
            var2 = var1.id;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'handleRelationshipChange';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var1 = arg1;
            var1 = var1.relationship;
            var3 = _closure1_slot30;
            var2 = var1.id;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var6;
        var1[10] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/native_intents/NativeIntentsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
// app/modules/app_database/modules/messages/withFallbacks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot7;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot7;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
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
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
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
                    _fun0002_ip = 67; continue _fun0002;
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
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function isSaveableChannel(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var4 = var3.type;
            var1 = _closure1_slot5;
            var1 = var1.DM;
            var1 = var4 === var1;
            if(var1) { _fun0004_ip = 47; continue _fun0004 }
 28:
            var5 = var3.type;
            var4 = _closure1_slot5;
            var4 = var4.GROUP_DM;
            var1 = var5 === var4;
 47:
            if(var1) { _fun0004_ip = 69; continue _fun0004 }
 50:
            var3 = var3.type;
            var2 = _closure1_slot5;
            var2 = var2.GUILD_TEXT;
            var1 = var3 === var2;
 69:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function addFallback(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg2;
            var4 = arg3;
            var2 = var4.hasExtended;
            var1 = var5.id;
            var1 = var2.bind(var4)(var1);
            if(var1) { _fun0005_ip = 79; continue _fun0005 }
 27:
            var3 = var4.put;
            var2 = var5.id;
            var1 = {};
            var6 = arg1;
            var1['guildId'] = var6;
            var6 = var5.id;
            var1['channelId'] = var6;
            var5 = var5.type;
            var1['channelType'] = var5;
            var5 = true;
            var1['fallback'] = var5;
            var1 = var3.bind(var4)(var2, var1);
 79:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function mergeInto(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var4 = arg2;
            var3 = _closure1_slot6;
            var2 = var4.allEntries;
            var2 = var2.bind(var4)();
            var8 = undefined;
            var7 = var3.bind(var8)(var2);
            var3 = var7.bind(var8)();
            var2 = var3.done;
            var6 = 2;
            var5 = 0;
            var4 = 1;
            if(var2) { _fun0006_ip = 102; continue _fun0006 }
 52:
            var10 = var3.value;
            var2 = _closure1_slot2;
            var2 = var2.bind(var8)(var10, var6);
            var11 = var2[var5];
            var10 = var2[var4];
            var2 = var1.put;
            var2 = var2.bind(var1)(var11, var10);
            var10 = var7.bind(var8)();
            var2 = var10.done;
            var3 = var10;
            if(!var2) { _fun0006_ip = 52; continue _fun0006 }
 102:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/messages/withFallbacks.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function withFallbacks(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var6 = arg2;
            var2 = var1.totalLength;
            if(!(!(var2 >= var6))) { _fun0007_ip = 441; continue _fun0007 }
 19:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 4;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var8 = var2.ExtendedMemoryLru;
            var29 = var1.primaryCapacity;
            var28 = var1.extendedCapacity;
            var5 = var8.prototype;
            var5 = Object.create(var5, {constructor: {value: var8}});
            var30 = var5;
            var2 = new var30[var8](var29, var28, var27);
            var2 = var2 instanceof Object ? var2 : var5;
            var5 = var1.totalLength;
            var16 = var6 - var5;
            var6 = _closure1_slot6;
            var7 = _closure1_slot4;
            var5 = var7.getGuildFolders;
            var5 = var5.bind(var7)();
            var15 = var6.bind(var4)(var5);
            var6 = var15.bind(var4)();
            var5 = var6.done;
            var14 = global;
            var13 = 0;
            var12 = 6;
            var11 = 5;
            var10 = var6;
            var9 = undefined;
            var8 = undefined;
            var7 = undefined;
            var6 = undefined;
            if(var5) { _fun0007_ip = 429; continue _fun0007 }
 151:
            var17 = _closure1_slot6;
            var5 = var10.value;
            var5 = var5.guildIds;
            var19 = var17.bind(var4)(var5);
            var17 = var19.bind(var4)();
            var5 = var17.done;
            var18 = var17;
            var17 = var6;
            var6 = var17;
            if(var5) { _fun0007_ip = 411; continue _fun0007 }
 195:
            var23 = var18.value;
            var21 = var14.Object;
            var20 = var21.values;
            var22 = _closure1_slot3;
            var5 = var22.getMutableBasicGuildChannelsForGuild;
            var5 = var5.bind(var22)(var23);
            var21 = var20.bind(var21)(var5);
            var5 = var21.length;
            var5 = var13 < var5;
            var20 = 0;
            var22 = 0;
            if(!var5) { _fun0007_ip = 367; continue _fun0007 }
 247:
            var25 = var21[var20];
            var5 = _closure1_slot8;
            var5 = var5.bind(var4)(var25);
            if(!var5) { _fun0007_ip = 291; continue _fun0007 }
 263:
            var26 = _closure1_slot0;
            var24 = _closure1_slot1;
            var24 = var24[var11];
            var26 = var26.bind(var4)(var24);
            var24 = var26.isReadableChannel;
            var5 = var24.bind(var26)(var25);
 291:
            if(!var5) { _fun0007_ip = 325; continue _fun0007 }
 294:
            var26 = _closure1_slot0;
            var24 = _closure1_slot1;
            var24 = var24[var12];
            var26 = var26.bind(var4)(var24);
            var24 = var26.isLimitedChannel;
            var24 = var24.bind(var26)(var25);
            var5 = !var24;
 325:
            if(!var5) { _fun0007_ip = 339; continue _fun0007 }
 328:
            var5 = _closure1_slot9;
            var5 = var5.bind(var4)(var23, var25, var2);
 339:
            var5 = var2.totalLength;
            if(!(!(var5 >= var16))) { _fun0007_ip = 399; continue _fun0007 }
 349:
            var20 = var20 + 1;
            var5 = var21.length;
            var17 = var25;
            var22 = var20;
            if(var22 < var5) { _fun0007_ip = 247; continue _fun0007 }
 367:
            var24 = var19.bind(var4)();
            var5 = var24.done;
            var8 = var22;
            var18 = var24;
            var9 = var23;
            var7 = var21;
            var6 = var17;
            if(var5) { _fun0007_ip = 411; continue _fun0007 }
 394:
            _fun0007_ip = 195; continue _fun0007;
 399:
            var5 = _closure1_slot10;
            var5 = var5.bind(var4)(var2, var1);
            return var2;
 411:
            var17 = var15.bind(var4)();
            var5 = var17.done;
            var10 = var17;
            if(!var5) { _fun0007_ip = 151; continue _fun0007 }
 429:
            var3 = _closure1_slot10;
            var3 = var3.bind(var4)(var2, var1);
            return var2;
 441:
            return var1;
        }
    };
    var3['withFallbacks'] = var2;
    return var1;
})();
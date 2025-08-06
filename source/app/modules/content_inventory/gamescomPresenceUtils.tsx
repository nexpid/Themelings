// app/modules/content_inventory/gamescomPresenceUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot10;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot10;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var _closure1_slot10 = var1;
    var4 = function createGamescomPresenceEntries(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var5;
            var3 = _closure1_slot6;
            var1 = var3.includes;
            var3 = var1.bind(var3)(var5);
            var1 = new Array(0);
            if(var3) { _fun0004_ip = 38; continue _fun0004 }
 36:
            return var1;
 38:
            var _closure2_slot1 = var1;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var5 = arg1;
                    var4 = var5.userId;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0005_ip = 543; continue _fun0005 }
 17:
                    var8 = _closure1_slot4;
                    var7 = var8.isMember;
                    var6 = _closure2_slot0;
                    var6 = var7.bind(var8)(var6, var4);
                    if(!var6) { _fun0005_ip = 543; continue _fun0005 }
 49:
                    var6 = var5.activity;
                    var6 = var6.application_id;
                    if(!(var3 != var6)) { _fun0005_ip = 543; continue _fun0005 }
 68:
                    var6 = var5.activity;
                    var7 = var6.name;
                    var6 = '';
                    if(!(var6 !== var7)) { _fun0005_ip = 543; continue _fun0005 }
 90:
                    var6 = var5.activity;
                    var6 = var6.timestamps;
                    var7 = var3 == var6;
                    var11 = undefined;
                    var10 = undefined;
                    if(var7) { _fun0005_ip = 118; continue _fun0005 }
 113:
                    var10 = var6.start;
 118:
                    if(!(var3 == var10)) { _fun0005_ip = 134; continue _fun0005 }
 122:
                    var6 = var5.activity;
                    var10 = var6.created_at;
 134:
                    if(!(var3 == var10)) { _fun0005_ip = 155; continue _fun0005 }
 138:
                    var3 = global;
                    var6 = var3.Date;
                    var3 = var6.now;
                    var10 = var3.bind(var6)();
 155:
                    var3 = {};
                    var7 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var6 = 5;
                    var6 = var12[var6];
                    var7 = var7.bind(var11)(var6);
                    var6 = var7.fromTimestamp;
                    var6 = var6.bind(var7)(var10);
                    var3['id'] = var6;
                    var3['author_id'] = var4;
                    var9 = _closure1_slot0;
                    var2 = 6;
                    var2 = var12[var2];
                    var2 = var9.bind(var11)(var2);
                    var2 = var2.ContentInventoryAuthorType;
                    var2 = var2.USER;
                    var3['author_type'] = var2;
                    var2 = 7;
                    var2 = var12[var2];
                    var2 = var9.bind(var11)(var2);
                    var2 = var2.ContentInventoryEntryType;
                    var2 = var2.PLAYED_GAME;
                    var3['content_type'] = var2;
                    var2 = new Array(1);
                    var2[0] = var4;
                    var3['participants'] = var2;
                    var7 = global;
                    var6 = var7.Date;
                    var4 = var7.Date;
                    var2 = var4.now;
                    var4 = var2.bind(var4)();
                    var2 = 300000;
                    var14 = var4 + var2;
                    var4 = var6.prototype;
                    var4 = Object.create(var4, {constructor: {value: var6}});
                    var15 = var4;
                    var2 = new var15[var6](var14, var13);
                    var4 = var2 instanceof Object ? var2 : var4;
                    var2 = var4.toISOString;
                    var2 = var2.bind(var4)();
                    var3['expires_at'] = var2;
                    var6 = {};
                    var8 = 8;
                    var2 = var12[var8];
                    var2 = var9.bind(var11)(var2);
                    var2 = var2.ContentInventoryTraitType;
                    var2 = var2.IS_LIVE;
                    var6['type'] = var2;
                    var4 = true;
                    var6['is_live'] = var4;
                    var2 = new Array(2);
                    var2[0] = var6;
                    var6 = {};
                    var8 = var12[var8];
                    var8 = var9.bind(var11)(var8);
                    var8 = var8.ContentInventoryTraitType;
                    var8 = var8.DURATION_SECONDS;
                    var6['type'] = var8;
                    var9 = var7.Math;
                    var8 = var9.floor;
                    var11 = var7.Date;
                    var7 = var11.now;
                    var7 = var7.bind(var11)();
                    var10 = var7 - var10;
                    var7 = 1000;
                    var7 = var10 / var7;
                    var7 = var8.bind(var9)(var7);
                    var6['duration_seconds'] = var7;
                    var2[1] = var6;
                    var3['traits'] = var2;
                    var2 = {};
                    var6 = 'gamescom_demo_content_extra';
                    var2['type'] = var6;
                    var6 = var5.activity;
                    var6 = var6.name;
                    var2['game_name'] = var6;
                    var5 = var5.activity;
                    var5 = var5.application_id;
                    var2['application_id'] = var5;
                    var2['is_gamescom_demo_content'] = var4;
                    var3['extra'] = var2;
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
 543:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.GAMESCOM_GUILD_IDS;
    var _closure1_slot6 = var8;
    var5 = var5.GAMESCOM_APP_IDS;
    var _closure1_slot7 = var5;
    var5 = function compareGamescomActivities(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var3 = var5.filter;
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.activity;
                    var3 = var1.application_id;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0007_ip = 53; continue _fun0007 }
 24:
                    var4 = _closure1_slot7;
                    var3 = var4.includes;
                    var2 = var2.activity;
                    var2 = var2.application_id;
                    var1 = var3.bind(var4)(var2);
 53:
                    return var1;
                }
            };
            var7 = var3.bind(var5)(var2);
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.activity;
                    var3 = var1.application_id;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0008_ip = 53; continue _fun0008 }
 24:
                    var4 = _closure1_slot7;
                    var3 = var4.includes;
                    var2 = var2.activity;
                    var2 = var2.application_id;
                    var1 = var3.bind(var4)(var2);
 53:
                    return var1;
                }
            };
            var5 = var3.bind(var4)(var2);
            var3 = var7.length;
            var2 = var5.length;
            if(!(var3 === var2)) { _fun0006_ip = 224; continue _fun0006 }
 55:
            var3 = global;
            var6 = var3.Set;
            var4 = var7.map;
            var2 = function(arg1) {
                var1 = arg1;
                var11 = var1.userId;
                var2 = var1.activity;
                var9 = var2.session_id;
                var1 = var1.activity;
                var7 = var1.application_id;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var12 = '';
                var1 = '-';
                var10 = var1;
                var8 = var1;
                var1 = var12[var3](var11, var10, var9, var8, var7, var6);
                return var1;
            };
            var8 = var4.bind(var7)(var2);
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var9 = var4;
            var2 = new var9[var6](var8, var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var4 = var3.Set;
            var3 = var5.map;
            var1 = function(arg1) {
                var1 = arg1;
                var11 = var1.userId;
                var2 = var1.activity;
                var9 = var2.session_id;
                var1 = var1.activity;
                var7 = var1.application_id;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var12 = '';
                var1 = '-';
                var10 = var1;
                var8 = var1;
                var1 = var12[var3](var11, var10, var9, var8, var7, var6);
                return var1;
            };
            var8 = var3.bind(var5)(var1);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var9 = var3;
            var1 = new var9[var4](var8, var7);
            var5 = var1 instanceof Object ? var1 : var3;
            var3 = var2.size;
            var1 = var5.size;
            if(!(var3 === var1)) { _fun0006_ip = 220; continue _fun0006 }
 153:
            var1 = _closure1_slot9;
            var4 = undefined;
            var3 = var1.bind(var4)(var2);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0006_ip = 216; continue _fun0006 }
 179:
            var6 = var2.value;
            var1 = var5.has;
            var1 = var1.bind(var5)(var6);
            if(var1) { _fun0006_ip = 201; continue _fun0006 }
 197:
            var1 = false;
            return var1;
 201:
            var6 = var3.bind(var4)();
            var1 = var6.done;
            var2 = var6;
            if(!var1) { _fun0006_ip = 179; continue _fun0006 }
 216:
            var1 = true;
            return var1;
 220:
            var1 = false;
            return var1;
 224:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/content_inventory/gamescomPresenceUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useGamescomEntries(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var9 = var5.bind(var3)(var4);
        var8 = var9.useStateFromStores;
        var3 = _closure1_slot5;
        var7 = new Array(1);
        var7[0] = var3;
        var5 = new Array(1);
        var5[0] = var6;
        var10 = _closure1_slot8;
        var12 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0009_ip = 37; continue _fun0009 }
 13:
                var4 = _closure1_slot6;
                var3 = var4.includes;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var1);
                if(var1) { _fun0009_ip = 43; continue _fun0009 }
 37:
                var1 = new Array(0);
                _fun0009_ip = 65; continue _fun0009;
 43:
                var4 = _closure1_slot7;
                var3 = var4.flatMap;
                var2 = function(arg1) {
                    var3 = _closure1_slot5;
                    var2 = var3.getAllApplicationActivities;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
 65:
                return var1;
            }
        };
        var14 = var9;
        var13 = var7;
        var11 = var5;
        var5 = var14[var8](var13, var12, var11, var10, var9);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0010_ip = 53; continue _fun0010 }
 13:
                var2 = _closure2_slot1;
                var3 = var2.length;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0010_ip = 53; continue _fun0010 }
 28:
                var4 = _closure1_slot11;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                _fun0010_ip = 57; continue _fun0010;
 53:
                var1 = new Array(0);
 57:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useGamescomEntries'] = var5;
    var3['createGamescomPresenceEntries'] = var4;
    var4 = function isGamescomEntry(arg1) {
        var1 = arg1;
        var1 = var1.extra;
        var2 = var1.type;
        var1 = 'gamescom_demo_content_extra';
        var1 = var1 === var2;
        return var1;
    };
    var3['isGamescomEntry'] = var4;
    var2 = function getGamescomActivity(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.findMatchingActivityForEntry;
        var2 = arg1;
        var1 = arg2;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getGamescomActivity'] = var2;
    return var1;
})();
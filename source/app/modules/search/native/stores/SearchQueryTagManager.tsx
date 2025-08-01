// app/modules/search/native/stores/SearchQueryTagManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function isPrefix(arg1) {
        var1 = arg1;
        var2 = var1.type;
        var1 = _closure1_slot5;
        var1 = var1.PREFIX;
        var1 = var2 === var1;
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function isComplete(arg1) {
        var1 = arg1;
        var2 = var1.type;
        var1 = _closure1_slot5;
        var1 = var1.COMPLETE;
        var1 = var2 === var1;
        return var1;
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
    var4 = var4.SearchQueryTagTypes;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SearchFilterAddLocations;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.SearchTokenTypes;
    var _closure1_slot7 = var7;
    var4 = var4.SearchTypes;
    var _closure1_slot8 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function SearchQueryTagManager(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var6 = arg1;
                var3 = this;
                var5 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var5.bind(var1)(var3, var2);
                var7 = global;
                var2 = var7.Set;
                var5 = var2.prototype;
                var5 = Object.create(var5, {constructor: {value: var2}});
                var17 = var5;
                var2 = new var17[var2](var16);
                var2 = var2 instanceof Object ? var2 : var5;
                var3['ids'] = var2;
                var2 = var7.Set;
                var5 = var2.prototype;
                var5 = Object.create(var5, {constructor: {value: var2}});
                var17 = var5;
                var2 = new var17[var2](var16);
                var2 = var2 instanceof Object ? var2 : var5;
                var3['channelIds'] = var2;
                var2 = 0;
                var3['version'] = var2;
                var5 = var6.type;
                var2 = _closure1_slot8;
                var2 = var2.THREAD;
                if(!(var2 !== var5)) { _fun0001_ip = 144; continue _fun0001 }
 121:
                var2 = _closure1_slot8;
                var2 = var2.GUILD_CHANNEL;
                if(!(var2 !== var5)) { _fun0001_ip = 144; continue _fun0001 }
 135:
                var2 = new Array(0);
                _fun0001_ip = 367; continue _fun0001;
 144:
                var9 = _closure1_slot4;
                var8 = var9.getChannel;
                var5 = var6.channelId;
                var8 = var8.bind(var9)(var5);
                var5 = null;
                var9 = var5 == var8;
                var10 = undefined;
                if(var9) { _fun0001_ip = 179; continue _fun0001 }
 174:
                var10 = var8.name;
 179:
                if(!(var5 != var10)) { _fun0001_ip = 360; continue _fun0001 }
 186:
                var5 = {};
                var8 = _closure1_slot5;
                var8 = var8.COMPLETE;
                var5['type'] = var8;
                var8 = _closure1_slot7;
                var8 = var8.FILTER_IN;
                var5['searchTokenType'] = var8;
                var9 = _closure1_slot0;
                var12 = _closure1_slot1;
                var8 = 6;
                var11 = var12[var8];
                var11 = var9.bind(var1)(var11);
                var13 = var11.intl;
                var11 = var13.string;
                var8 = var12[var8];
                var8 = var9.bind(var1)(var8);
                var8 = var8.t;
                var8 = var8.WNpFHR;
                var11 = var11.bind(var13)(var8);
                var8 = 7;
                var8 = var12[var8];
                var9 = var9.bind(var1)(var8);
                var8 = var9.quoteChannelName;
                var10 = var8.bind(var9)(var10);
                var7 = var7.HermesInternal;
                var9 = var7.concat;
                var8 = '';
                var7 = ': ';
                var7 = var9.bind(var8)(var11, var7, var10);
                var5['text'] = var7;
                var6 = var6.channelId;
                var5['channelId'] = var6;
                var4 = _closure1_slot6;
                var4 = var4.CLIENT_AUTO_ADD;
                var5['location'] = var4;
                var4 = new Array(1);
                var4[0] = var5;
                _fun0001_ip = 364; continue _fun0001;
 360:
                var4 = new Array(0);
 364:
                var2 = var4;
 367:
                var3['defaultTags'] = var2;
                var2 = var3.defaultTags;
                var3['tags'] = var2;
                var2 = var3.markChanged;
                var2 = var2.bind(var3)();
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'markChanged';
        var1['key'] = var2;
        var2 = function value() {
            var2 = this;
            var1 = global;
            var3 = var1.Set;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var8 = var5;
            var3 = new var8[var3](var7);
            var3 = var3 instanceof Object ? var3 : var5;
            var _closure3_slot0 = var3;
            var1 = var1.Set;
            var5 = var1.prototype;
            var5 = Object.create(var5, {constructor: {value: var1}});
            var8 = var5;
            var1 = new var8[var1](var7);
            var1 = var1 instanceof Object ? var1 : var5;
            var _closure3_slot1 = var1;
            var6 = var2.tags;
            var5 = var6.forEach;
            var4 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var5 = _closure3_slot0;
                    var4 = var5.add;
                    var1 = var2.text;
                    var1 = var4.bind(var5)(var1);
                    var4 = _closure1_slot10;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    if(!var4) { _fun0002_ip = 53; continue _fun0002 }
 42:
                    var6 = var2.channelId;
                    var5 = null;
                    var4 = var5 != var6;
 53:
                    if(!var4) { _fun0002_ip = 75; continue _fun0002 }
 56:
                    var4 = _closure3_slot1;
                    var3 = var4.add;
                    var2 = var2.channelId;
                    var2 = var3.bind(var4)(var2);
 75:
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4);
            var2['ids'] = var3;
            var2['channelIds'] = var1;
            var1 = var2.version;
            var1 = var1 + 1;
            var2['version'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(17);
        var2[0] = var1;
        var1 = {};
        var6 = 'mergeTag';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var5 = arg1;
            var4 = arg2;
            var2 = this;
            var _closure3_slot0 = var5;
            var _closure3_slot1 = var4;
            var3 = {};
            var6 = _closure1_slot5;
            var6 = var6.COMPLETE;
            var3['type'] = var6;
            var10 = var5.text;
            var9 = var4.text;
            var6 = global;
            var6 = var6.HermesInternal;
            var8 = var6.concat;
            var7 = '';
            var6 = ' ';
            var6 = var8.bind(var7)(var10, var6, var9);
            var3['text'] = var6;
            var6 = var5.location;
            var3['location'] = var6;
            var5 = var5.searchTokenType;
            var3['searchTokenType'] = var5;
            var5 = var4.channelId;
            var3['channelId'] = var5;
            var4 = var4.userId;
            var3['userId'] = var4;
            var5 = var2.tags;
            var4 = var5.filter;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = arg1;
                    var1 = _closure3_slot0;
                    var1 = var3 !== var1;
                    if(!var1) { _fun0003_ip = 25; continue _fun0003 }
 17:
                    var2 = _closure3_slot1;
                    var1 = var3 !== var2;
 25:
                    return var1;
                }
            };
            var12 = var4.bind(var5)(var1);
            var1 = new Array(1);
            var11 = 0;
            var13 = var1;
            var4 = arraySpread(var13, var12, var11);
            var1[var4] = var3;
            var3 = 1;
            var3 = var4 + var3;
            var2['tags'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'replaceTag';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var2 = this;
            var3 = arg1;
            var _closure3_slot0 = var3;
            var3 = arg2;
            var _closure3_slot1 = var3;
            var4 = var2.tags;
            var3 = var4.map;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var3 = _closure3_slot0;
                    if(!(var1 === var3)) { _fun0004_ip = 18; continue _fun0004 }
 14:
                    var1 = _closure3_slot1;
 18:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            var2['tags'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'exists';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.ids;
            var2 = var3.has;
            var1 = arg1;
            var1 = var1.text;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getChannelIds';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.channelIds;
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'getUserIds';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = global;
            var1 = var1.Set;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var _closure3_slot1 = var1;
            var3 = this;
            var4 = var3.tags;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var3 = _closure1_slot10;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    if(!var3) { _fun0005_ip = 68; continue _fun0005 }
 20:
                    var4 = var2.userId;
                    var5 = var2.searchTokenType;
                    var3 = _closure3_slot0;
                    var3 = var5 === var3;
                    if(!var3) { _fun0005_ip = 51; continue _fun0005 }
 45:
                    var5 = null;
                    var3 = var5 != var4;
 51:
                    if(!var3) { _fun0005_ip = 68; continue _fun0005 }
 54:
                    var3 = _closure3_slot1;
                    var2 = var3.add;
                    var2 = var2.bind(var3)(var4);
 68:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'isChannelTagsOnly';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var3 = var1.tags;
            var2 = var3.filter;
            var1 = _closure1_slot10;
            var3 = var2.bind(var3)(var1);
            var2 = var3.every;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.channelId;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'hasUserAddedTags';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var3 = var1.tags;
            var2 = var3.filter;
            var1 = _closure1_slot10;
            var3 = var2.bind(var3)(var1);
            var2 = var3.some;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.location;
                var1 = _closure1_slot6;
                var1 = var1.CLIENT_AUTO_ADD;
                var1 = var2 !== var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'isEmpty';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.tags;
            var2 = var1.length;
            var1 = 0;
            var1 = var1 === var2;
            return var1;
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'getPrefixTag';
        var1['key'] = var6;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = this;
                var2 = var1.tags;
                var1 = var1.tags;
                var3 = var1.length;
                var1 = 1;
                var1 = var3 - var1;
                var2 = var2[var1];
                var1 = null;
                if(!(var1 == var2)) { _fun0006_ip = 41; continue _fun0006 }
 37:
                var1 = undefined;
                return var1;
 41:
                var3 = _closure1_slot9;
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                if(!var3) { _fun0006_ip = 61; continue _fun0006 }
 58:
                var1 = var2;
 61:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'get';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.tags;
            return var1;
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'set';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = this;
            var1 = arg1;
            var2['tags'] = var1;
            var1 = var2.markChanged;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'getQueryString';
        var1['key'] = var6;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = arguments[0];
                var3 = undefined;
                if(!(var1 === var3)) { _fun0007_ip = 13; continue _fun0007 }
 11:
                var1 = false;
 13:
                var _closure3_slot0 = var1;
                var1 = this;
                var4 = var1.tags;
                var3 = var4.filter;
                var1 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var3 = _closure1_slot9;
                        var2 = undefined;
                        var1 = arg1;
                        var2 = var3.bind(var2)(var1);
                        var1 = !var2;
                        if(!var2) { _fun0008_ip = 30; continue _fun0008 }
 23:
                        var1 = _closure3_slot0;
 30:
                        return var1;
                    }
                };
                var5 = var3.bind(var4)(var1);
                var6 = var5.length;
                var4 = '';
                var3 = 0;
                var1 = var4;
                if(!(var3 !== var6)) { _fun0007_ip = 110; continue _fun0007 }
 61:
                var3 = var5.map;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.text;
                    return var1;
                };
                var5 = var3.bind(var5)(var2);
                var3 = var5.join;
                var2 = ' ';
                var3 = var3.bind(var5)(var2);
                var2 = global;
                var2 = var2.HermesInternal;
                var2 = var2.concat;
                var1 = var2.bind(var4)(var3);
 110:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'add';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var4 = arg1;
                var2 = this;
                var1 = var2.exists;
                var1 = var1.bind(var2)(var4);
                if(var1) { _fun0009_ip = 223; continue _fun0009 }
 23:
                var3 = var2.tags;
                var1 = var2.tags;
                var1 = var1.length;
                var6 = 1;
                var1 = var1 - var6;
                var3 = var3[var1];
                var1 = _closure1_slot9;
                var7 = undefined;
                var1 = var1.bind(var7)(var4);
                if(!var1) { _fun0009_ip = 86; continue _fun0009 }
 68:
                var1 = null;
                if(!(var1 != var3)) { _fun0009_ip = 86; continue _fun0009 }
 74:
                var1 = _closure1_slot9;
                var1 = var1.bind(var7)(var3);
                if(var1) { _fun0009_ip = 199; continue _fun0009 }
 86:
                var8 = var4.type;
                var1 = _closure1_slot5;
                var1 = var1.ANSWER;
                if(!(var8 === var1)) { _fun0009_ip = 123; continue _fun0009 }
 105:
                var1 = null;
                if(!(var1 != var3)) { _fun0009_ip = 123; continue _fun0009 }
 111:
                var1 = _closure1_slot9;
                var1 = var1.bind(var7)(var3);
                if(var1) { _fun0009_ip = 183; continue _fun0009 }
 123:
                var1 = _closure1_slot9;
                var1 = var1.bind(var7)(var4);
                if(var1) { _fun0009_ip = 144; continue _fun0009 }
 135:
                var5 = _closure1_slot10;
                var1 = var5.bind(var7)(var4);
 144:
                if(!var1) { _fun0009_ip = 213; continue _fun0009 }
 147:
                var10 = var2.tags;
                var1 = new Array(1);
                var9 = 0;
                var11 = var1;
                var5 = arraySpread(var11, var10, var9);
                var1[var5] = var4;
                var5 = var5 + var6;
                var2['tags'] = var1;
                _fun0009_ip = 213; continue _fun0009;
 183:
                var1 = var2.mergeTag;
                var1 = var1.bind(var2)(var3, var4);
                _fun0009_ip = 213; continue _fun0009;
 199:
                var1 = var2.replaceTag;
                var1 = var1.bind(var2)(var3, var4);
 213:
                var1 = var2.markChanged;
                var1 = var1.bind(var2)();
 223:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'removeAnyPrefixTags';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var4 = var2.tags;
            var3 = var4.filter;
            var1 = function(arg1) {
                var3 = _closure1_slot9;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                var1 = !var1;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var2['tags'] = var1;
            var1 = var2.markChanged;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'removeAtIndex';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = this;
            var4 = var2.tags;
            var3 = arg1;
            var3 = var4[var3];
            var _closure3_slot0 = var3;
            var4 = var2.tags;
            var3 = var4.filter;
            var1 = function(arg1) {
                var2 = _closure3_slot0;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var2['tags'] = var1;
            var1 = var2.markChanged;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[15] = var1;
        var1 = {};
        var6 = 'reset';
        var1['key'] = var6;
        var5 = function value() {
            var2 = this;
            var1 = var2.defaultTags;
            var2['tags'] = var1;
            var1 = var2.markChanged;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[16] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/stores/SearchQueryTagManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
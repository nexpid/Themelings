// app/modules/quests/native/VideoQuestModal/captions/VttParser.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function validTimestamp(arg1) {
        var3 = _closure1_slot6;
        var2 = var3.test;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function parseTimestamp(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = var3.match;
            var1 = _closure1_slot6;
            var7 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 != var7)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = global;
            var3 = var2.parseFloat;
            var4 = 1;
            var4 = var7[var4];
            var5 = var1 != var4;
            var1 = '0';
            if(!var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var4;
case 8:
            var6 = undefined;
            var1 = var3.bind(var6)(var1);
            var4 = 60;
            var1 = var4 * var1;
            var5 = var2.parseFloat;
            var3 = 2;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var4 * var3;
            var5 = var2.parseFloat;
            var2 = 3;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var1 = var1 * var4;
            var1 = var1 + var3;
            var1 = var1 + var2;
            return var1;
case 6:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var6[var1];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var6[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot1 = var5;
    var5 = 2;
    var5 = var6[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 3;
    var5 = var6[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var6[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var6[var5];
    var5 = var7.bind(var1)(var5);
    var4 = var4.Error;
    var5 = var5.bind(var1)(var4);
    var4 = function(arg1) {
        var3 = function VttParserError(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var1 = _closure1_slot1;
                var2 = _closure2_slot0;
                var3 = undefined;
                var1 = var1.bind(var3)(var4, var2);
                var9 = new Array(1);
                var1 = arg1;
                var9[0] = var1;
                var1 = _closure1_slot3;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot7;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0003_ip = 12; continue _fun0003;
case 10:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot3;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
case 12:
                var1 = var2.bind(var3)(var4, var1);
                var2 = arg2;
                var1['error'] = var2;
                var2 = 'ParserError';
                var1['name'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot4;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot0;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var _closure1_slot5 = var4;
    var5 = /([0-9]+)?:?([0-9]{2}):([0-9]{2}\.[0-9]{2,3})/;
    var _closure1_slot6 = var5;
    var5 = 6;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/VideoQuestModal/captions/VttParser.tsx';
    var5 = var6.bind(var7)(var5);
    var3['VttParserError'] = var4;
    var2 = function parseVtt(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = arguments[1];
            var9 = undefined;
            if(!(var1 === var9)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var1 = {};
case 13:
            var2 = var1.meta;
            var5 = var9 !== var2;
            if(!var5) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var5 = var2;
case 15:
            var1 = var1.strict;
            var2 = var9 === var1;
            if(var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var2 = var1;
case 17:
            var1 = var3.trim;
            var6 = var1.bind(var3)();
            var3 = var6.replace;
            var1 = /\r\n/g;
            var7 = '\n';
            var6 = var3.bind(var6)(var1, var7);
            var3 = var6.replace;
            var1 = /\r/g;
            var6 = var3.bind(var6)(var1, var7);
            var3 = var6.split;
            var1 = '\n\n';
            var6 = var3.bind(var6)(var1);
            var1 = var6.shift;
            var3 = var1.bind(var6)();
            var1 = var3.startsWith;
            var11 = 'WEBVTT';
            var1 = var1.bind(var3)(var11);
            if(var1) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var10 = _closure1_slot5;
            var1 = var10.prototype;
            var8 = Object.create(var1, {constructor: {value: var10}});
            var13 = 'Must start with "WEBVTT"';
            var14 = var8;
            var1 = new var14[var10](var13, var12);
            var1 = var1 instanceof Object ? var1 : var8;
            throw var1;
case 19:
            var1 = var3.split;
            var8 = var1.bind(var3)(var7);
            var3 = 0;
            var10 = var8[var3];
            var1 = var10.replace;
            var7 = '';
            var1 = var1.bind(var10)(var11, var7);
            var10 = var1.length;
            if(!(var10 > var3)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var11 = var1[var3];
            var10 = ' ';
            if(!(var10 !== var11)) { _fun0004_ip = 21; continue _fun0004 }
case 23:
            var10 = var1[var3];
            var1 = '\t';
            if(!(var1 === var10)) { _fun0004_ip = 24; continue _fun0004 }
case 21:
            var1 = var6.length;
            if(!(var3 === var1)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var10 = var8.length;
            var1 = 1;
            if(!(var1 !== var10)) { _fun0004_ip = 27; continue _fun0004 }
case 25:
            if(var5) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var10 = var8.length;
            var1 = 1;
            if(!(var10 > var1)) { _fun0004_ip = 28; continue _fun0004 }
case 30:
            var1 = var8[var1];
            if(!(var7 !== var1)) { _fun0004_ip = 28; continue _fun0004 }
case 31:
            var10 = _closure1_slot5;
            var1 = var10.prototype;
            var7 = Object.create(var1, {constructor: {value: var10}});
            var13 = 'Missing blank line after signature';
            var14 = var7;
            var1 = new var14[var10](var13, var12);
            var1 = var1 instanceof Object ? var1 : var7;
            throw var1;
case 28:
            var1 = function parseCues(arg1, arg2) {
                var5 = arg1;
                var2 = arg2;
                var _closure3_slot0 = var2;
                var2 = new Array(0);
                var _closure3_slot1 = var2;
                var4 = var5.map;
                var3 = function(arg1, arg2) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = arg1;
                        var1 = arg2;
case 32: // try_start_0
                        var6 = var1;
                        var13 = _closure3_slot0;
                        var1 = var2.split;
                        var12 = '\n';
                        var4 = var1.bind(var2)(var12);
                        var3 = var4.filter;
                        var2 = global;
                        var1 = var2.Boolean;
                        var7 = var3.bind(var4)(var1);
                        var1 = var7.length;
                        var8 = 0;
                        if(!(var1 > var8)) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                        var3 = var7[var8];
                        var1 = var3.trim;
                        var4 = var1.bind(var3)();
                        var3 = var4.startsWith;
                        var1 = 'NOTE';
                        var3 = var3.bind(var4)(var1);
                        var1 = null;
                        if(var3) { _fun0005_ip = 35; continue _fun0005 }
case 33:
                        var3 = var7.length;
                        var5 = 1;
                        if(!(var5 === var3)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                        var9 = var7[var8];
                        var4 = var9.includes;
                        var3 = '-->';
                        var3 = var4.bind(var9)(var3);
                        if(var3) { _fun0005_ip = 36; continue _fun0005 }
case 38:
                        var9 = _closure1_slot5;
                        var3 = var2.HermesInternal;
                        var10 = var3.concat;
                        var4 = 'Cue identifier cannot be standalone (cue #';
                        var3 = ')';
                        var18 = var10.bind(var4)(var6, var3);
                        var4 = var9.prototype;
                        var4 = Object.create(var4, {constructor: {value: var9}});
                        var19 = var4;
                        var3 = new var19[var9](var18, var17);
                        var3 = var3 instanceof Object ? var3 : var4;
                        throw var3;
case 36:
                        var3 = var7.length;
                        if(!(var3 > var5)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                        var4 = var7[var8];
                        var3 = var4.includes;
                        var9 = '-->';
                        var3 = var3.bind(var4)(var9);
                        if(var3) { _fun0005_ip = 39; continue _fun0005 }
case 41:
                        var4 = var7[var5];
                        var3 = var4.includes;
                        var3 = var3.bind(var4)(var9);
                        if(var3) { _fun0005_ip = 39; continue _fun0005 }
case 42:
                        var9 = _closure1_slot5;
                        var3 = var2.HermesInternal;
                        var10 = var3.concat;
                        var4 = 'Cue identifier needs to be followed by timestamp (cue #';
                        var3 = ')';
                        var18 = var10.bind(var4)(var6, var3);
                        var4 = var9.prototype;
                        var4 = Object.create(var4, {constructor: {value: var9}});
                        var19 = var4;
                        var3 = new var19[var9](var18, var17);
                        var3 = var3 instanceof Object ? var3 : var4;
                        throw var3;
case 39:
                        var3 = var7.length;
                        var3 = var3 > var5;
                        if(!var3) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                        var10 = var7[var5];
                        var9 = var10.includes;
                        var4 = '-->';
                        var3 = var9.bind(var10)(var4);
case 43:
                        var11 = '';
                        var10 = var11;
                        if(!var3) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                        var3 = var7.shift;
                        var10 = var3.bind(var7)();
case 45:
                        var9 = var7[var8];
                        var4 = var9.split;
                        var3 = ' --> ';
                        var4 = var4.bind(var9)(var3);
                        var9 = var4.length;
                        var3 = 2;
                        if(!(var3 === var9)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                        var14 = _closure1_slot8;
                        var9 = var4[var8];
                        var15 = undefined;
                        var9 = var14.bind(var15)(var9);
                        if(!var9) { _fun0005_ip = 47; continue _fun0005 }
case 49:
                        var14 = _closure1_slot8;
                        var9 = var4[var5];
                        var9 = var14.bind(var15)(var9);
                        if(!var9) { _fun0005_ip = 47; continue _fun0005 }
case 50:
                        var14 = _closure1_slot9;
                        var8 = var4[var8];
                        var9 = var14.bind(var15)(var8);
                        var8 = var4[var5];
                        var8 = var14.bind(var15)(var8);
                        if(!var13) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                        if(!(!(var9 > var8))) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                        if(!(!(var8 <= var9))) { _fun0005_ip = 55; continue _fun0005 }
case 51:
                        if(var13) { _fun0005_ip = 56; continue _fun0005 }
case 57:
                        if(!(var8 < var9)) { _fun0005_ip = 56; continue _fun0005 }
case 58:
                        var15 = _closure1_slot5;
                        var13 = var2.HermesInternal;
                        var16 = var13.concat;
                        var14 = 'End must be greater or equal to start when not strict (cue #';
                        var13 = ')';
                        var18 = var16.bind(var14)(var6, var13);
                        var14 = var15.prototype;
                        var14 = Object.create(var14, {constructor: {value: var15}});
                        var19 = var14;
                        var13 = new var19[var15](var18, var17);
                        var13 = var13 instanceof Object ? var13 : var14;
                        throw var13;
case 56:
                        var13 = var4[var5];
                        var5 = var13.replace;
                        var4 = _closure1_slot6;
                        var5 = var5.bind(var13)(var4, var11);
                        var4 = var5.trim;
                        var5 = var4.bind(var5)();
                        var4 = var7.shift;
                        var4 = var4.bind(var7)();
                        var4 = var7.join;
                        var7 = var4.bind(var7)(var12);
                        var4 = var7.trim;
                        var4 = var4.bind(var7)();
                        var1 = false;
                        if(!(var11 !== var4)) { _fun0005_ip = 35; continue _fun0005 }
case 59:
                        var4 = {};
                        var4['identifier'] = var10;
                        var4['start'] = var9;
                        var4['end'] = var8;
                        var4['text'] = var7;
                        var4['styles'] = var5;
                        var1 = var4;
                        _fun0005_ip = 35; continue _fun0005;
case 55:
                        var7 = _closure1_slot5;
                        var4 = var2.HermesInternal;
                        var8 = var4.concat;
                        var5 = 'End must be greater than start (cue #';
                        var4 = ')';
                        var18 = var8.bind(var5)(var6, var4);
                        var5 = var7.prototype;
                        var5 = Object.create(var5, {constructor: {value: var7}});
                        var19 = var5;
                        var4 = new var19[var7](var18, var17);
                        var4 = var4 instanceof Object ? var4 : var5;
                        throw var4;
case 53:
                        var5 = _closure1_slot5;
                        var3 = var2.HermesInternal;
                        var7 = var3.concat;
                        var4 = 'Start timestamp greater than end (cue #';
                        var3 = ')';
                        var18 = var7.bind(var4)(var6, var3);
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {constructor: {value: var5}});
                        var19 = var4;
                        var3 = new var19[var5](var18, var17);
                        var3 = var3 instanceof Object ? var3 : var4;
                        throw var3;
case 47:
                        var4 = _closure1_slot5;
                        var2 = var2.HermesInternal;
                        var5 = var2.concat;
                        var3 = 'Invalid cue timestamp (cue #';
                        var2 = ')';
                        var18 = var5.bind(var3)(var6, var2);
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {constructor: {value: var4}});
                        var19 = var3;
                        var2 = new var19[var4](var18, var17);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
case 35: // try_end0
                        return var1;
case 60: // catch_target0
                        CatchBlockStart(arg_register=2);
                        var2 = _closure3_slot1;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
                        var1 = null;
                        return var1;
                    }
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.filter;
                var1 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = arg1;
                        var1 = null;
                        var1 = var1 !== var3;
                        if(!var1) { _fun0006_ip = 61; continue _fun0006 }
case 62:
                        var2 = false;
                        var1 = var2 !== var3;
case 61:
                        return var1;
                    }
                };
                var3 = var3.bind(var4)(var1);
                var1 = {};
                var1['cues'] = var3;
                var1['errors'] = var2;
                return var1;
            };
            var1 = var1.bind(var9)(var6, var2);
            var6 = var1.cues;
            var1 = var1.errors;
            if(!var2) { _fun0004_ip = 48; continue _fun0004 }
case 63:
            var7 = var1.length;
            if(!(!(var7 > var3))) { _fun0004_ip = 64; continue _fun0004 }
case 48:
            var7 = null;
            if(!var5) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var4 = function parseMeta(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = arg1;
                    var2 = {};
                    var _closure3_slot0 = var2;
                    var4 = var5.slice;
                    var3 = 1;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.forEach;
                    var1 = function(arg1) {
                        var4 = arg1;
                        var2 = var4.indexOf;
                        var1 = ':';
                        var5 = var2.bind(var4)(var1);
                        var2 = var4.slice;
                        var1 = 0;
                        var2 = var2.bind(var4)(var1, var5);
                        var1 = var2.trim;
                        var3 = var1.bind(var2)();
                        var2 = var4.slice;
                        var1 = 1;
                        var1 = var5 + var1;
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.trim;
                        var2 = var1.bind(var2)();
                        var1 = _closure3_slot0;
                        var1[var3] = var2;
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1);
                    var1 = global;
                    var3 = var1.Object;
                    var1 = var3.keys;
                    var1 = var1.bind(var3)(var2);
                    var3 = var1.length;
                    var1 = 0;
                    var3 = var3 > var1;
                    var1 = null;
                    if(!var3) { _fun0007_ip = 67; continue _fun0007 }
case 68:
                    var1 = var2;
case 67:
                    return var1;
                }
            };
            var7 = var4.bind(var9)(var8);
case 65:
            var4 = {};
            var8 = var1.length;
            var8 = var3 === var8;
            var4['valid'] = var8;
            var4['strict'] = var2;
            var4['cues'] = var6;
            var4['errors'] = var1;
            if(!var5) { _fun0004_ip = 69; continue _fun0004 }
case 70:
            var6 = {};
            var6['meta'] = var7;
            var5 = var6;
case 69:
            var13 = var4;
            var12 = var5;
            var5 = copyDataProperties(var13, var12);
            return var4;
case 64:
            var1 = var1[var3];
            throw var1;
case 27:
            var1 = {};
            var3 = true;
            var1['valid'] = var3;
            var1['strict'] = var2;
            var2 = new Array(0);
            var1['cues'] = var2;
            var2 = new Array(0);
            var1['errors'] = var2;
            return var1;
case 24:
            var3 = _closure1_slot5;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var13 = 'Header comment must start with space or tab';
            var14 = var2;
            var1 = new var14[var3](var13, var12);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['parseVtt'] = var2;
    return var1;
})();
// app/modules/pomelo/PomeloUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot10;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot10;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
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
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var4 = function withoutCharacters(arg1, arg2) {
        var4 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = var4.split;
        var3 = '';
        var4 = var2.bind(var4)(var3);
        var2 = var4.filter;
        var1 = function(arg1) {
            var5 = arg1;
            var3 = _closure2_slot0;
            var2 = var3.includes;
            var4 = var5.charCodeAt;
            var1 = 0;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        };
        var2 = var2.bind(var4)(var1);
        var1 = var2.join;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var _closure1_slot11 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var8 = var5.dirtyChars;
    var _closure1_slot3 = var8;
    var8 = var5.coalescePeriods;
    var _closure1_slot4 = var8;
    var5 = var5.CONTROL_CHARACTERS_CODE;
    var _closure1_slot5 = var5;
    var5 = ['@', '#', ':'];
    var _closure1_slot6 = var5;
    var5 = ['```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage', 'clyde'];
    var _closure1_slot7 = var5;
    var5 = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord', 'snowsgiving'];
    var _closure1_slot8 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/pomelo/PomeloUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getUserAvatarURLForPomelo(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var5 = arguments[1];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0004_ip = 32; continue _fun0004 }
case 36:
            var5 = true;
case 32:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 1;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.getUserAvatarURL;
            var2 = {};
            var6 = var1.id;
            var2['id'] = var6;
            var6 = var1.avatar;
            var2['avatar'] = var6;
            var1 = var1.bot;
            var2['bot'] = var1;
            var1 = '0000';
            var2['discriminator'] = var1;
            var1 = 80;
            var1 = var3.bind(var4)(var2, var5, var1);
            return var1;
        }
    };
    var3['getUserAvatarURLForPomelo'] = var5;
    var5 = function getDefaultPomelo(arg1) {
        var1 = arg1;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.stripDiacritics;
        var3 = var1.username;
        var6 = var4.bind(var5)(var3);
        var5 = var6.replace;
        var3 = _closure1_slot3;
        var4 = '';
        var6 = var5.bind(var6)(var3, var4);
        var5 = var6.replace;
        var3 = _closure1_slot4;
        var2 = '.';
        var3 = var5.bind(var6)(var3, var2);
        var2 = var3.toLowerCase;
        var3 = var2.bind(var3)();
        var2 = var1.discriminator;
        var1 = global;
        var1 = var1.HermesInternal;
        var1 = var1.concat;
        var4 = var1.bind(var4)(var3, var2);
        var3 = var4.substring;
        var2 = 0;
        var1 = 32;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getDefaultPomelo'] = var5;
    var3['withoutCharacters'] = var4;
    var4 = function shouldSkipToEditUsername(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var2 = var1.username;
            var1 = var2.toLowerCase;
            var5 = var1.bind(var2)();
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var4 = undefined;
            var2 = var3.bind(var4)(var5, var2);
            var3 = var2.length;
            var2 = 2;
            if(!(!(var3 < var2))) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var3 = _closure1_slot9;
            var2 = _closure1_slot6;
            var6 = var3.bind(var4)(var2);
            var3 = var6.bind(var4)();
            var2 = var3.done;
            if(var2) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var7 = var3.value;
            var2 = var5.includes;
            var2 = var2.bind(var5)(var7);
            if(var2) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var7 = var6.bind(var4)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0005_ip = 39; continue _fun0005 }
case 13:
            _fun0005_ip = 40; continue _fun0005;
case 41:
            var2 = true;
            return var2;
case 39:
            var3 = _closure1_slot9;
            var2 = _closure1_slot8;
            var6 = var3.bind(var4)(var2);
            var3 = var6.bind(var4)();
            var2 = var3.done;
            if(var2) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var7 = var3.value;
            var2 = var7.toLowerCase;
            var2 = var2.bind(var7)();
            if(!(var5 !== var2)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var7 = var6.bind(var4)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0005_ip = 43; continue _fun0005 }
case 47:
            _fun0005_ip = 44; continue _fun0005;
case 45:
            var2 = true;
            return var2;
case 43:
            var2 = _closure1_slot9;
            var1 = _closure1_slot7;
            var3 = var2.bind(var4)(var1);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var7 = var2.value;
            var6 = var5.includes;
            var1 = var7.toLowerCase;
            var1 = var1.bind(var7)();
            var1 = var6.bind(var5)(var1);
            if(var1) { _fun0005_ip = 50; continue _fun0005 }
case 21:
            var6 = var3.bind(var4)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0005_ip = 48; continue _fun0005 }
case 18:
            _fun0005_ip = 49; continue _fun0005;
case 50:
            var1 = true;
            return var1;
case 48:
            var1 = false;
            return var1;
case 37:
            var1 = true;
            return var1;
        }
    };
    var3['shouldSkipToEditUsername'] = var4;
    var4 = function formatPomeloForEditing(arg1) {
        var2 = arg1;
        var1 = var2.toLowerCase;
        var3 = var1.bind(var2)();
        var2 = var3.replace;
        var1 = /\s/g;
        var4 = '';
        var3 = var2.bind(var3)(var1, var4);
        var2 = var3.replace;
        var1 = '@';
        var1 = var2.bind(var3)(var1, var4);
        return var1;
    };
    var3['formatPomeloForEditing'] = var4;
    var4 = function getMemberSince(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = undefined;
            var1 = undefined;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 3;
            var4 = var6[var4];
            var6 = var5.bind(var3)(var4);
            var5 = var6.extractTimestamp;
            var4 = arg1;
            var1 = var5.bind(var6)(var4);
case 51: // try_start_0
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 4;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var4 = global;
            var5 = var4.Date;
            var7 = var1;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var8 = var4;
            var1 = new var8[var5](var7, var6);
            var1 = var1 instanceof Object ? var1 : var4;
            var3 = var2.bind(var3)(var1);
            var2 = var3.format;
            var1 = 'MMM DD, YYYY';
            var1 = var2.bind(var3)(var1);
case 52: // try_end0
            return var1;
case 53: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = null;
            return var1;
        }
    };
    var3['getMemberSince'] = var4;
    var4 = function formatUsernameLiveCheckValidation(arg1) {
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 5;
        var3 = var8[var2];
        var6 = undefined;
        var5 = var7.bind(var6)(var3);
        var4 = var5.match;
        var3 = arg1;
        var10 = var4.bind(var5)(var3);
        var9 = var10.with;
        var5 = {};
        var3 = true;
        var5['rateLimited'] = var3;
        var4 = function() {
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 6;
            var2 = var7[var2];
            var5 = undefined;
            var2 = var6.bind(var5)(var2);
            var2 = var2.NameValidationState;
            var2 = var2.RATE_LIMIT;
            var1['type'] = var2;
            var2 = 7;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.T15lqq;
            var2 = var3.bind(var4)(var2);
            var1['message'] = var2;
            return var1;
        };
        var10 = var9.bind(var10)(var5, var4);
        var9 = var10.with;
        var5 = {};
        var4 = var8[var2];
        var4 = var7.bind(var6)(var4);
        var12 = var4.P;
        var11 = var12.not;
        var4 = var8[var2];
        var4 = var7.bind(var6)(var4);
        var4 = var4.P;
        var4 = var4.nullish;
        var4 = var11.bind(var12)(var4);
        var5['error'] = var4;
        var4 = function(arg1) {
            var1 = arg1;
            var2 = var1.error;
            var1 = {};
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 6;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.NameValidationState;
            var3 = var3.ERROR;
            var1['type'] = var3;
            var1['message'] = var2;
            return var1;
        };
        var10 = var9.bind(var10)(var5, var4);
        var9 = var10.with;
        var5 = {};
        var4 = false;
        var5['taken'] = var4;
        var4 = function() {
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 6;
            var2 = var7[var2];
            var5 = undefined;
            var2 = var6.bind(var5)(var2);
            var2 = var2.NameValidationState;
            var2 = var2.AVAILABLE;
            var1['type'] = var2;
            var2 = 7;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.PgfBS0;
            var2 = var3.bind(var4)(var2);
            var1['message'] = var2;
            return var1;
        };
        var9 = var9.bind(var10)(var5, var4);
        var5 = var9.with;
        var4 = {};
        var4['taken'] = var3;
        var3 = function() {
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 6;
            var2 = var7[var2];
            var5 = undefined;
            var2 = var6.bind(var5)(var2);
            var2 = var2.NameValidationState;
            var2 = var2.ERROR;
            var1['type'] = var2;
            var2 = 7;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.mCrAUV;
            var2 = var3.bind(var4)(var2);
            var1['message'] = var2;
            return var1;
        };
        var5 = var5.bind(var9)(var4, var3);
        var4 = var5.with;
        var3 = {};
        var2 = var8[var2];
        var2 = var7.bind(var6)(var2);
        var2 = var2.P;
        var2 = var2.nullish;
        var3['error'] = var2;
        var2 = function() {
            var1 = {};
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.NameValidationState;
            var2 = var2.INTERNAL_ERROR;
            var1['type'] = var2;
            var2 = '';
            var1['message'] = var2;
            return var1;
        };
        var3 = var4.bind(var5)(var3, var2);
        var2 = var3.otherwise;
        var1 = function() {
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['formatUsernameLiveCheckValidation'] = var4;
    var2 = function getLocalizedForcedUUDate(arg1) {
        var1 = global;
        var5 = var1.Date;
        var1 = var5.prototype;
        var2 = Object.create(var1, {constructor: {value: var5}});
        var8 = 2024;
        var7 = 2;
        var6 = 4;
        var9 = var2;
        var1 = new var9[var5](var8, var7, var6, var5);
        var4 = var1 instanceof Object ? var1 : var2;
        var3 = var4.toLocaleDateString;
        var2 = arg1;
        var1 = {'month': 'long', 'day': 'numeric', 'year': 'numeric'};
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getLocalizedForcedUUDate'] = var2;
    return var1;
})();
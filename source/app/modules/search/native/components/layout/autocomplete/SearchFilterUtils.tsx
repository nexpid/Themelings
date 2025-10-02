// app/modules/search/native/components/layout/autocomplete/SearchFilterUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getSearchTokenText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var7 = 12;
            var2 = var1[var7];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var4 = var2[var3];
            var2 = null;
            if(!(var2 == var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var8 = var5[var7];
            var9 = var9.bind(var1)(var8);
            var8 = var9.rebuildSearchTokenConfigs;
            var8 = var8.bind(var9)();
            var6 = _closure1_slot1;
            var5 = var5[var7];
            var5 = var6.bind(var1)(var5);
            var4 = var5[var3];
case 2:
            var5 = var2 == var4;
            var1 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var4.key;
case 4:
            if(!(var2 == var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var3.toString;
            var1 = var2.bind(var3)();
case 6:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.EMPTY_SEARCH_QUERY_STRING;
    var _closure1_slot4 = var7;
    var4 = var4.SearchQueryTagTypes;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.SEARCH_DATE_FORMAT;
    var _closure1_slot6 = var7;
    var7 = var4.SearchTokenTypes;
    var _closure1_slot7 = var7;
    var4 = var4.SearchTypes;
    var _closure1_slot8 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/layout/autocomplete/SearchFilterUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getSearchTokenLabel(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg2;
            var2 = _closure1_slot7;
            var2 = var2.FILTER_FROM;
            if(!(var2 !== var5)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_HAS;
            if(!(var2 !== var5)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_MENTIONS;
            if(!(var2 !== var5)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_IN;
            if(!(var2 !== var5)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_ON;
            if(!(var2 !== var5)) { _fun0002_ip = 16; continue _fun0002 }
case 5:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_BEFORE;
            if(!(var2 !== var5)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_AFTER;
            if(!(var2 !== var5)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_AUTHOR_TYPE;
            if(!(var2 !== var5)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var2 = global;
            var4 = var2.Error;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '[getSearchTokenLabel] Unhandled search token type: ';
            var9 = var3.bind(var2)(var5);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var10 = var3;
            var2 = new var10[var4](var9, var8);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 21:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.C4r6xM;
            var2 = var3.bind(var4)(var2);
            return var2;
case 19:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.hcMwDQ;
            var2 = var3.bind(var4)(var2);
            return var2;
case 17:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.c9qSBQ;
            var2 = var3.bind(var4)(var2);
            return var2;
case 16:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.h4qGfn;
            var2 = var3.bind(var4)(var2);
            return var2;
case 14:
            var2 = arg1;
            var3 = var2.type;
            var2 = _closure1_slot8;
            var2 = var2.DMS;
            if(!(var3 !== var2)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.cdPmq6;
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 25; continue _fun0002;
case 23:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 3;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.8Fmo4+;
            var2 = var4.bind(var5)(var3);
case 25:
            return var2;
case 12:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.CMKzQ0;
            var2 = var3.bind(var4)(var2);
            return var2;
case 10:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.DMAzx8;
            var2 = var3.bind(var4)(var2);
            return var2;
case 8:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.6iuVMj;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getSearchTokenLabel'] = var4;
    var4 = function getSearchTokenSubLabel(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot7;
            var2 = var2.FILTER_FROM;
            if(!(var2 !== var5)) { _fun0003_ip = 26; continue _fun0003 }
case 9:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_HAS;
            if(!(var2 !== var5)) { _fun0003_ip = 27; continue _fun0003 }
case 11:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_IN;
            if(!(var2 !== var5)) { _fun0003_ip = 28; continue _fun0003 }
case 13:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_MENTIONS;
            if(!(var2 !== var5)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_ON;
            if(!(var2 !== var5)) { _fun0003_ip = 16; continue _fun0003 }
case 5:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_BEFORE;
            if(!(var2 !== var5)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_AFTER;
            if(!(var2 !== var5)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_AUTHOR_TYPE;
            if(!(var2 !== var5)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var2 = global;
            var4 = var2.Error;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '[getSearchTokenSubLabel] Unhandled search token type: ';
            var8 = var3.bind(var2)(var5);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var9 = var3;
            var2 = new var9[var4](var8, var7);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 21:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.tJPdhY;
            var2 = var3.bind(var4)(var2);
            return var2;
case 19:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.hwbB7u;
            var2 = var3.bind(var4)(var2);
            return var2;
case 17:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.YEN3ub;
            var2 = var3.bind(var4)(var2);
            return var2;
case 16:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.t8bWvr;
            var2 = var3.bind(var4)(var2);
            return var2;
case 14:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.ILtwKy;
            var2 = var3.bind(var4)(var2);
            return var2;
case 28:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.qDUdlZ;
            var2 = var3.bind(var4)(var2);
            return var2;
case 27:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.gUfZa2;
            var2 = var3.bind(var4)(var2);
            return var2;
case 26:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.kkGlw8;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getSearchTokenSubLabel'] = var4;
    var4 = function getSearchTokenIcon(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot7;
            var2 = var2.FILTER_FROM;
            if(!(var2 !== var5)) { _fun0004_ip = 29; continue _fun0004 }
case 9:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_HAS;
            if(!(var2 !== var5)) { _fun0004_ip = 30; continue _fun0004 }
case 11:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_IN;
            if(!(var2 !== var5)) { _fun0004_ip = 31; continue _fun0004 }
case 13:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_MENTIONS;
            if(!(var2 !== var5)) { _fun0004_ip = 32; continue _fun0004 }
case 15:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_ON;
            if(!(var2 !== var5)) { _fun0004_ip = 33; continue _fun0004 }
case 5:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_BEFORE;
            if(!(var2 !== var5)) { _fun0004_ip = 34; continue _fun0004 }
case 18:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_AFTER;
            if(!(var2 !== var5)) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_AUTHOR_TYPE;
            if(!(var2 !== var5)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = global;
            var4 = var2.Error;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '[getSearchTokenIcon] Unhandled search token type: ';
            var6 = var3.bind(var2)(var5);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var7 = var3;
            var2 = new var7[var4](var6, var5);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 37:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 11;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.RobotIcon;
            return var2;
case 35:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 10;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.CalendarPlusIcon;
            return var2;
case 34:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.CalendarMinusIcon;
            return var2;
case 33:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.CalendarIcon;
            return var2;
case 32:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.AtIcon;
            return var2;
case 31:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.ChannelListMagnifyingGlassIcon;
            return var2;
case 30:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.AttachmentIcon;
            return var2;
case 29:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.UserIcon;
            return var1;
        }
    };
    var3['getSearchTokenIcon'] = var4;
    var4 = function getSearchTokenPressHandler(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg2;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var5;
            var2 = arg3;
            var _closure2_slot2 = var2;
            var3 = _closure1_slot7;
            var3 = var3.FILTER_FROM;
            if(!(var3 !== var5)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var3 = _closure1_slot7;
            var3 = var3.FILTER_IN;
            if(!(var3 !== var5)) { _fun0005_ip = 39; continue _fun0005 }
case 41:
            var3 = _closure1_slot7;
            var3 = var3.FILTER_HAS;
            if(!(var3 !== var5)) { _fun0005_ip = 39; continue _fun0005 }
case 42:
            var3 = _closure1_slot7;
            var3 = var3.FILTER_MENTIONS;
            if(!(var3 !== var5)) { _fun0005_ip = 39; continue _fun0005 }
case 5:
            var3 = _closure1_slot7;
            var3 = var3.FILTER_AUTHOR_TYPE;
            if(!(var3 !== var5)) { _fun0005_ip = 39; continue _fun0005 }
case 43:
            var3 = _closure1_slot7;
            var3 = var3.FILTER_ON;
            if(!(var3 !== var5)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var3 = _closure1_slot7;
            var3 = var3.FILTER_BEFORE;
            if(!(var3 !== var5)) { _fun0005_ip = 44; continue _fun0005 }
case 46:
            var2 = _closure1_slot7;
            var2 = var2.FILTER_AFTER;
            if(!(var2 !== var5)) { _fun0005_ip = 44; continue _fun0005 }
case 47:
            var2 = global;
            var4 = var2.Error;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '[getSearchTokenPressHandler] Unhandled search token type: ';
            var6 = var3.bind(var2)(var5);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var7 = var3;
            var2 = new var7[var4](var6, var5);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 44:
            var2 = function() {
                var5 = _closure2_slot0;
                var4 = _closure2_slot1;
                var3 = _closure2_slot2;
                var2 = function handleSearchDateTokenPress(arg1, arg2, arg3) {
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var1 = arg2;
                    var _closure4_slot1 = var1;
                    var1 = arg3;
                    var _closure4_slot2 = var1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.performKeyboardAwareNavigation;
                    var2 = function() {
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var4 = var2[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.openLazy;
                        var4 = _closure1_slot0;
                        var3 = 16;
                        var3 = var2[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = 15;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var4 = var4.bind(var1)(var3, var2);
                        var3 = {};
                        var2 = function onSubmit(arg1) {
                            var5 = arg1;
                            var4 = var5.format;
                            var3 = _closure1_slot6;
                            var3 = var4.bind(var5)(var3);
                            var _closure6_slot0 = var3;
                            var5 = _closure1_slot3;
                            var3 = var5.setState;
                            var4 = _closure4_slot0;
                            var1 = function(arg1) {
                                var4 = arg1;
                                var1 = var4.removePrefixTags;
                                var1 = var1.bind(var4)();
                                var3 = var4.setTextInputValue;
                                var2 = _closure1_slot4;
                                var2 = var3.bind(var4)(var2);
                                var3 = var4.addTag;
                                var2 = {};
                                var5 = _closure1_slot5;
                                var5 = var5.COMPLETE;
                                var2['type'] = var5;
                                var7 = _closure1_slot9;
                                var6 = _closure4_slot1;
                                var1 = undefined;
                                var11 = var7.bind(var1)(var6);
                                var10 = _closure6_slot0;
                                var7 = global;
                                var7 = var7.HermesInternal;
                                var9 = var7.concat;
                                var8 = '';
                                var7 = ' ';
                                var7 = var9.bind(var8)(var11, var7, var10);
                                var2['text'] = var7;
                                var2['searchTokenType'] = var6;
                                var5 = _closure4_slot2;
                                var2['location'] = var5;
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            };
                            var1 = var3.bind(var5)(var4, var1);
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 17;
                            var3 = var5[var1];
                            var1 = undefined;
                            var7 = var6.bind(var1)(var3);
                            var6 = var7.trackSearchFilterAdd;
                            var3 = {};
                            var3['searchContext'] = var4;
                            var9 = _closure4_slot1;
                            var3['searchTokenType'] = var9;
                            var8 = _closure4_slot2;
                            var3['location'] = var8;
                            var3 = var6.bind(var7)(var3);
                            var3 = _closure1_slot1;
                            var2 = 13;
                            var2 = var5[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.fetchInitialMessages;
                            var2 = var2.bind(var3)(var4);
                            return var1;
                        };
                        var3['onSubmit'] = var2;
                        var2 = 'DatePicker';
                        var2 = var5.bind(var6)(var4, var2, var3);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1 = undefined;
                var2 = var2.bind(var1)(var5, var4, var3);
                return var1;
            };
            return var2;
case 39:
            var1 = function() {
                var5 = _closure2_slot0;
                var4 = _closure2_slot1;
                var3 = _closure2_slot2;
                var2 = function handleSearchTokenPress(arg1, arg2, arg3) {
                    var4 = arg1;
                    var1 = arg2;
                    var _closure4_slot0 = var1;
                    var1 = arg3;
                    var _closure4_slot1 = var1;
                    var5 = _closure1_slot3;
                    var3 = var5.setState;
                    var2 = function(arg1) {
                        var4 = arg1;
                        var3 = var4.setTextInputValue;
                        var2 = _closure1_slot4;
                        var2 = var3.bind(var4)(var2);
                        var3 = var4.addTag;
                        var2 = {};
                        var5 = _closure1_slot5;
                        var5 = var5.PREFIX;
                        var2['type'] = var5;
                        var6 = _closure4_slot0;
                        var2['searchTokenType'] = var6;
                        var5 = _closure4_slot1;
                        var2['location'] = var5;
                        var5 = _closure1_slot9;
                        var1 = undefined;
                        var5 = var5.bind(var1)(var6);
                        var2['text'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = var3.bind(var5)(var4, var2);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.syncAutocomplete;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                };
                var1 = undefined;
                var2 = var2.bind(var1)(var5, var4, var3);
                return var1;
            };
            return var1;
        }
    };
    var3['getSearchTokenPressHandler'] = var4;
    var2 = function getSearchFilterSuggestions(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = new Array(0);
        var _closure2_slot1 = var1;
        var3 = global;
        var5 = var3.Object;
        var4 = var5.keys;
        var7 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 12;
        var6 = var6[var3];
        var3 = undefined;
        var3 = var7.bind(var3)(var6);
        var4 = var4.bind(var5)(var3);
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var6 = arg1;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var4 = 12;
                var3 = var1[var4];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.isSearchFilterTokenType;
                var3 = var3.bind(var5)(var6);
                if(!var3) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var2 = var3.bind(var1)(var2);
                var2 = var2[var6];
                var5 = var2.plainText;
                var2 = null;
                if(!(var2 != var5)) { _fun0006_ip = 48; continue _fun0006 }
case 50:
                var2 = global;
                var7 = var2.RegExp;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '^';
                var2 = '(?:: ?)?$';
                var9 = var4.bind(var3)(var5, var2);
                var2 = var7.prototype;
                var3 = Object.create(var2, {constructor: {value: var7}});
                var8 = 'i';
                var10 = var3;
                var2 = new var10[var7](var9, var8, var7);
                var7 = var2 instanceof Object ? var2 : var3;
                var4 = var7.test;
                var3 = _closure2_slot0;
                var3 = var4.bind(var7)(var3);
                if(!var3) { _fun0006_ip = 48; continue _fun0006 }
case 51:
                var4 = _closure2_slot1;
                var3 = var4.push;
                var2 = {};
                var2['token'] = var6;
                var2['text'] = var5;
                var2 = var3.bind(var4)(var2);
case 48:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['getSearchFilterSuggestions'] = var2;
    return var1;
})();
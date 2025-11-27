// app/modules/keyword_filter/KeywordUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function maskStringPreserveSpaces(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var5 = arguments[3];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = false;
case 2:
            var _closure2_slot0 = var1;
            var1 = global;
            var6 = var1.Math;
            var4 = var6.max;
            var2 = arg2;
            var9 = 0;
            var6 = var4.bind(var6)(var2, var9);
            var11 = var1.Math;
            var10 = var11.min;
            var2 = var7.length;
            var8 = 1;
            var4 = var2 - var8;
            var2 = arg3;
            var2 = var10.bind(var11)(var2, var4);
            var4 = '*';
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = '\\*';
case 4:
            _closure2_slot0 = var4;
            var5 = var7.substring;
            var4 = var2 + var8;
            var13 = var5.bind(var7)(var6, var4);
            var5 = new Array(0);
            var14 = var5;
            var12 = 0;
            var4 = arraySpread(var14, var13, var12);
            var4 = var5.map;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = ' ';
                    var2 = arg1;
                    if(!(var1 !== var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = _closure2_slot0;
case 6:
                    return var1;
                }
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.join;
            var5 = '';
            var4 = var3.bind(var4)(var5);
            var3 = var7.substring;
            var3 = var3.bind(var7)(var9, var6);
            var6 = var7.substring;
            var2 = var2 + var8;
            var2 = var6.bind(var7)(var2);
            var1 = var1.HermesInternal;
            var1 = var1.concat;
            var1 = var1.bind(var5)(var3, var4, var2);
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot4 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/keyword_filter/KeywordUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['maskStringPreserveSpaces'] = var4;
    var2 = function getKeywordSubstitutedContent(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var2;
            var4 = undefined;
            var5 = undefined;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 3;
            var6 = var8[var6];
            var8 = var7.bind(var4)(var6);
            var7 = var8.isEligibleForKeywordFiltering;
            var6 = {};
            var9 = 'keyword_substituted_content';
            var6['location'] = var9;
            var6 = var7.bind(var8)(var6);
case 8: // try_start_0
            var8 = var1;
            var7 = _closure1_slot3;
            var6 = var7.getKeywordTrie;
            var10 = var6.bind(var7)();
            var6 = '';
            if(!(var6 !== var8)) { _fun0003_ip = 9; continue _fun0003 }
case 4:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 2;
            var6 = var9[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.normalize;
            var7 = var6.bind(var7)(var8);
            var6 = var7.toLowerCase;
            var9 = var6.bind(var7)();
            var6 = null;
            var7 = var6 == var10;
            var8 = undefined;
            if(var7) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var7 = var10.search;
            var8 = var7.bind(var10)(var9);
case 10:
            if(!(var6 == var8)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var8 = {};
case 12:
            var6 = global;
            var7 = var6.Object;
            var6 = var7.values;
            var6 = var6.bind(var7)(var8);
            _fun0003_ip = 14; continue _fun0003;
case 9:
            var6 = new Array(0);
case 14:
            var5 = var6;
            var7 = var6.length;
            var6 = 0;
            if(!(var6 !== var7)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var7 = var5;
            var6 = var7.forEach;
            var5 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot4;
                    var3 = var2.KEYWORD_FILTER_MATCH;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var8 = null;
                    var9 = var8 == var6;
                    var6 = undefined;
                    if(var9) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var9 = _closure2_slot0;
                    var6 = var9.messageId;
case 17:
                    var2['message_id'] = var6;
                    var6 = _closure2_slot0;
                    var9 = var8 == var6;
                    var6 = undefined;
                    if(var9) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var9 = _closure2_slot0;
                    var6 = var9.channelId;
case 19:
                    var2['channel_id'] = var6;
                    var6 = _closure2_slot0;
                    var8 = var8 == var6;
                    var6 = undefined;
                    if(var8) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var7 = _closure2_slot0;
                    var6 = var7.authorId;
case 21:
                    var2['author_id'] = var6;
                    var6 = arg1;
                    var6 = var6.keyword;
                    var2['keyword'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var6 = var7.sort;
            var5 = function(arg1, arg2) {
                var1 = arg2;
                var2 = var1.start;
                var1 = arg1;
                var1 = var1.start;
                var1 = var2 - var1;
                return var1;
            };
            var7 = var6.bind(var7)(var5);
            var6 = var7.reduce;
            var5 = var1;
            var3 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg2;
                    var6 = _closure1_slot5;
                    var5 = var1.start;
                    var4 = var1.end;
                    var3 = _closure2_slot0;
                    var2 = null;
                    var7 = var2 == var3;
                    var2 = undefined;
                    if(var7) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var1 = _closure2_slot0;
                    var2 = var1.escapeReplacement;
case 23:
                    var11 = arg1;
                    var12 = undefined;
                    var10 = var5;
                    var9 = var4;
                    var8 = var2;
                    var1 = var12[var6](var11, var10, var9, var8, var7);
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3, var5);
            _fun0003_ip = 25; continue _fun0003;
case 15:
            var3 = var1;
case 25: // try_end0
            return var3;
case 26: // catch_target0
            CatchBlockStart(arg_register=4);
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.captureException;
            var2 = {};
            var6 = {};
            var7 = 'keyword_filtering';
            var6['app_context'] = var7;
            var2['tags'] = var6;
            var2 = var3.bind(var4)(var5, var2);
            return var1;
        }
    };
    var3['getKeywordSubstitutedContent'] = var2;
    return var1;
})();
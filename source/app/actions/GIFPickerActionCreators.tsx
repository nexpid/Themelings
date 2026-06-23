// app/actions/GIFPickerActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var7 = function trackSearchStart(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = {};
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var1 = {};
            var2 = 1;
            var1[2] = var2;
            var7 = var1;
case 4:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 4;
            var2 = var8[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot5;
            var3 = var2.SEARCH_STARTED;
            var2 = {};
            var9 = _closure1_slot7;
            var9 = var9.GIF;
            var2['search_type'] = var9;
            var10 = _closure1_slot4;
            var9 = var10.getAnalyticsID;
            var9 = var9.bind(var10)();
            var2['load_id'] = var9;
            var9 = global;
            var10 = var9.Object;
            var9 = var10.keys;
            var9 = var9.bind(var10)(var7);
            var9 = var9.length;
            var2['num_modifiers'] = var9;
            var2['modifiers'] = var7;
            var7 = _closure1_slot0;
            var6 = 5;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.getProviderForAPIRequest;
            var6 = var6.bind(var7)();
            var2['gif_provider'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot14 = var7;
    var6 = function trackSearchResultViewed(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var7 = arguments[2];
            var1 = undefined;
            if(!(var7 === var1)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var7 = {};
case 5:
            var3 = var7.startTime;
            var2 = null;
            var6 = Object.create(var2);
            var5 = 0;
            var6['startTime'] = var5;
            var14 = {};
            var13 = var7;
            var12 = var6;
            var10 = copyDataProperties(var14, var13, var12);
            var11 = {'offset': 0, 'limit': null};
            var5 = var4.length;
            var11['totalResults'] = var5;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 6;
            var5 = var8[var5];
            var9 = var7.bind(var1)(var5);
            var8 = var9.calculateAnalyticsMetadata;
            var7 = _closure1_slot4;
            var5 = var7.getAnalyticsID;
            var7 = var5.bind(var7)();
            var5 = {};
            var14 = var5;
            var13 = var11;
            var11 = copyDataProperties(var14, var13);
            var14 = var5;
            var13 = var10;
            var10 = copyDataProperties(var14, var13);
            var10 = var4.length;
            var4 = 'results';
            var5[3] = var10;
            var4 = arg2;
            var9 = var8.bind(var9)(var7, var4, var5);
            if(!(var2 != var3)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var7 = {};
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var2 = var2 - var3;
            var7['load_duration_ms'] = var2;
            _fun0002_ip = 9; continue _fun0002;
case 7:
            var7 = {};
case 9:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 4;
            var2 = var8[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot5;
            var3 = var2.SEARCH_RESULT_VIEWED;
            var2 = {};
            var14 = var2;
            var13 = var9;
            var9 = copyDataProperties(var14, var13);
            var14 = var2;
            var13 = var7;
            var7 = copyDataProperties(var14, var13);
            var7 = _closure1_slot0;
            var6 = 5;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.getProviderForAPIRequest;
            var7 = var6.bind(var7)();
            var6 = 'gif_provider';
            var2[5] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot15 = var6;
    var13 = function doSearchRequest(arg1, arg2, arg3) {
        var9 = arg1;
        var4 = arg2;
        var7 = arg3;
        var _closure2_slot0 = var9;
        var _closure2_slot1 = var4;
        var _closure2_slot2 = var7;
        var1 = global;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        var _closure2_slot3 = var1;
        var3 = _closure1_slot14;
        var1 = undefined;
        var3 = var3.bind(var1)(var4);
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var3 = 7;
        var3 = var11[var3];
        var3 = var10.bind(var1)(var3);
        var5 = var3.HTTP;
        var4 = var5.get;
        var3 = {};
        var6 = _closure1_slot6;
        var6 = var6.GIFS_SEARCH;
        var3['url'] = var6;
        var6 = {};
        var6['q'] = var9;
        var12 = _closure1_slot4;
        var9 = var12.getSelectedFormat;
        var9 = var9.bind(var12)();
        var6['media_format'] = var9;
        var9 = 5;
        var9 = var11[var9];
        var10 = var10.bind(var1)(var9);
        var9 = var10.getProviderForAPIRequest;
        var9 = var9.bind(var10)();
        var6['provider'] = var9;
        var8 = _closure1_slot3;
        var8 = var8.locale;
        var6['locale'] = var8;
        var6['limit'] = var7;
        var3['query'] = var6;
        var6 = true;
        var3['oldFormErrors'] = var6;
        var3['rejectWithError'] = var6;
        var5 = var4.bind(var5)(var3);
        var4 = var5.then;
        var3 = function(arg1) {
            var1 = arg1;
            var5 = var1.body;
            var7 = _closure1_slot15;
            var4 = _closure2_slot1;
            var3 = {};
            var1 = _closure2_slot3;
            var3['startTime'] = var1;
            var1 = _closure2_slot2;
            var3['limit'] = var1;
            var1 = undefined;
            var3 = var7.bind(var1)(var5, var4, var3);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'GIF_PICKER_QUERY_SUCCESS';
            var2['type'] = var7;
            var6 = _closure2_slot0;
            var2['query'] = var6;
            var2['items'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GIF_PICKER_QUERY_FAILURE';
            var1['type'] = var4;
            var4 = _closure2_slot0;
            var1['query'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot16 = var13;
    var5 = function resetSearch() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {'type': 'GIF_PICKER_QUERY', 'query': ''};
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot17 = var5;
    var4 = function gifUrlKey(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 11;
            var1 = var5[var1];
            var6 = undefined;
            var4 = var4.bind(var6)(var1);
            var1 = var4.toURLSafe;
            var5 = var1.bind(var4)(var2);
            var4 = null;
            var1 = var2;
            if(!(var4 != var5)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var7 = 12;
            var4 = var4[var7];
            var8 = var8.bind(var6)(var4);
            var4 = var8.isAttachmentUrl;
            var4 = var4.bind(var8)(var5);
            if(!var4) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var4 = var4.bind(var6)(var3);
            var3 = var4.removeSignedUrlParameters;
            var4 = var3.bind(var4)(var5);
            var3 = var4.toString;
            var2 = var3.bind(var4)();
case 12:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot18 = var4;
    var1 = function isProxiedAttachment(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 11;
            var1 = var4[var1];
            var6 = undefined;
            var4 = var2.bind(var6)(var1);
            var2 = var4.toURLSafe;
            var1 = arg1;
            var1 = var1.src;
            var5 = var2.bind(var4)(var1);
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0004_ip = 12; continue _fun0004 }
case 14:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 12;
            var2 = var2[var7];
            var4 = var4.bind(var6)(var2);
            var2 = var4.isExternalProxiedAttachmentUrl;
            var2 = var2.bind(var4)(var5);
            if(var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var4 = var4.bind(var6)(var3);
            var3 = var4.isAttachmentUrl;
            var2 = var3.bind(var4)(var5);
case 15:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function isImageExtensionUrl(arg1) {
        var3 = _closure1_slot13;
        var2 = var3.test;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var14 = var1.Object;
    var12 = var14.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var14)(var3, var1, var8);
    var1 = 0;
    var8 = var10[var1];
    var1 = undefined;
    var8 = var11.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var12 = var8.AnalyticEvents;
    var _closure1_slot5 = var12;
    var12 = var8.Endpoints;
    var _closure1_slot6 = var12;
    var12 = var8.SearchTypes;
    var _closure1_slot7 = var12;
    var8 = var8.GIFPickerResultTypes;
    var _closure1_slot8 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var12 = var8.MAX_FAVORITE_GIFS_SIZE;
    var _closure1_slot9 = var12;
    var8 = var8.UserSettingsDelay;
    var _closure1_slot10 = var8;
    var8 = /-/g;
    var _closure1_slot11 = var8;
    var8 = 9;
    var8 = var10[var8];
    var12 = var11.bind(var1)(var8);
    var11 = var12.debounce;
    var8 = 250;
    var8 = var11.bind(var12)(var13, var8);
    var _closure1_slot12 = var8;
    var8 = /\.(webp|avif|gif)(\?|$)/i;
    var _closure1_slot13 = var8;
    var8 = 18;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'actions/GIFPickerActionCreators.tsx';
    var8 = var9.bind(var10)(var8);
    var3['trackSearchStart'] = var7;
    var3['trackSearchResultViewed'] = var6;
    var6 = function search(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var6 = arguments[2];
            var3 = arguments[3];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
            var6 = false;
case 17:
            var2 = '';
            if(!(var2 !== var5)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 8;
            var7 = var9[var7];
            var9 = var8.bind(var1)(var7);
            var8 = var9.dispatch;
            var7 = {};
            var10 = 'GIF_PICKER_QUERY';
            var7['type'] = var10;
            var7['query'] = var5;
            var7 = var8.bind(var9)(var7);
            if(var6) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var6 = _closure1_slot12;
            var6 = var6.bind(var1)(var5, var4, var3);
            _fun0005_ip = 23; continue _fun0005;
case 21:
            var2 = _closure1_slot16;
            var2 = var2.bind(var1)(var5, var4, var3);
            _fun0005_ip = 23; continue _fun0005;
case 19:
            var2 = _closure1_slot17;
            var2 = var2.bind(var1)();
case 23:
            return var1;
        }
    };
    var3['search'] = var6;
    var6 = function fetchSuggestions(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var2 = '';
            var2 = var2 !== var7;
            if(!var2) { _fun0006_ip = 4; continue _fun0006 }
case 17:
            var3 = null;
            var2 = var3 != var7;
case 4:
            if(!var2) { _fun0006_ip = 24; continue _fun0006 }
case 25:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var9 = undefined;
            var2 = var10.bind(var9)(var2);
            var4 = var2.HTTP;
            var3 = var4.get;
            var2 = {};
            var5 = _closure1_slot6;
            var5 = var5.GIFS_SUGGEST;
            var2['url'] = var5;
            var5 = {};
            var5['q'] = var7;
            var7 = 5;
            var8 = var8[var7];
            var9 = var10.bind(var9)(var8);
            var8 = var9.getProviderForAPIRequest;
            var8 = var8.bind(var9)();
            var5['provider'] = var8;
            var5['limit'] = var7;
            var6 = _closure1_slot3;
            var6 = var6.locale;
            var5['locale'] = var6;
            var2['query'] = var5;
            var5 = true;
            var2['oldFormErrors'] = var5;
            var2['rejectWithError'] = var5;
            var3 = var3.bind(var4)(var2);
            var2 = var3.then;
            var1 = function(arg1) {
                var1 = arg1;
                var5 = var1.body;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'GIF_PICKER_SUGGESTIONS_SUCCESS';
                var2['type'] = var6;
                var6 = _closure2_slot0;
                var2['query'] = var6;
                var2['items'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
case 24:
            var1 = undefined;
            return var1;
        }
    };
    var3['fetchSuggestions'] = var6;
    var3['resetSearch'] = var5;
    var5 = function trackSelectGIF(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var11 = var1.type;
            var10 = var1.index;
            var15 = var1.offset;
            var14 = var1.limit;
            var13 = var1.results;
            var12 = var1.totalResults;
            var7 = var1.query;
            var8 = var1.gifId;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
            var2 = var4[var1];
            var1 = undefined;
            var9 = var3.bind(var1)(var2);
            var6 = var9.calculateAnalyticsMetadata;
            var3 = _closure1_slot4;
            var2 = var3.getAnalyticsID;
            var3 = var2.bind(var3)();
            var2 = {};
            var2['offset'] = var15;
            var2['limit'] = var14;
            var2['results'] = var13;
            var2['totalResults'] = var12;
            var17 = var6.bind(var9)(var3, var11, var2);
            var3 = _closure1_slot1;
            var2 = 4;
            var2 = var4[var2];
            var6 = var3.bind(var1)(var2);
            var4 = var6.trackWithMetadata;
            var2 = _closure1_slot5;
            var3 = var2.SEARCH_RESULT_SELECTED;
            var2 = {};
            var18 = var2;
            var9 = copyDataProperties(var18, var17);
            var9 = 'index_num';
            var2[8] = var10;
            var10 = 'GIF Picker';
            var9 = 'source_object';
            var2[8] = var10;
            var9 = 'query';
            var2[8] = var7;
            var2 = var4.bind(var6)(var3, var2);
            var2 = null;
            if(!(var2 != var8)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var6 = var3.bind(var1)(var2);
            var2 = var6.getProviderForAPIRequest;
            var6 = var2.bind(var6)();
            var2 = 7;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var4 = var2.HTTP;
            var3 = var4.post;
            var2 = {};
            var5 = _closure1_slot6;
            var5 = var5.GIFS_SELECT;
            var2['url'] = var5;
            var5 = {};
            var5['id'] = var8;
            var5['q'] = var7;
            var5['provider'] = var6;
            var2['body'] = var5;
            var5 = true;
            var2['oldFormErrors'] = var5;
            var2['rejectWithError'] = var5;
            var2 = var3.bind(var4)(var2);
case 26:
            return var1;
        }
    };
    var3['trackSelectGIF'] = var5;
    var5 = function initializeSearch() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 10;
        var3 = var5[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.v4;
        var7 = var3.bind(var4)();
        var6 = var7.replace;
        var4 = _closure1_slot11;
        var3 = '';
        var9 = var6.bind(var7)(var4, var3);
        var _closure2_slot0 = var9;
        var4 = _closure1_slot1;
        var3 = 4;
        var3 = var5[var3];
        var8 = var4.bind(var1)(var3);
        var7 = var8.trackWithMetadata;
        var3 = _closure1_slot5;
        var6 = var3.SEARCH_OPENED;
        var3 = {};
        var10 = _closure1_slot7;
        var10 = var10.GIF;
        var3['search_type'] = var10;
        var3['load_id'] = var9;
        var3 = var7.bind(var8)(var6, var3);
        var3 = 8;
        var3 = var5[var3];
        var4 = var4.bind(var1)(var3);
        var3 = var4.wait;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'GIF_PICKER_INITIALIZE';
            var2['type'] = var5;
            var5 = _closure2_slot0;
            var2['analyticsID'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['initializeSearch'] = var5;
    var5 = function fetchTrending() {
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 7;
        var2 = var9[var1];
        var1 = undefined;
        var2 = var8.bind(var1)(var2);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {};
        var5 = _closure1_slot6;
        var5 = var5.GIFS_TRENDING;
        var2['url'] = var5;
        var5 = {};
        var7 = 5;
        var7 = var9[var7];
        var8 = var8.bind(var1)(var7);
        var7 = var8.getProviderForAPIRequest;
        var7 = var7.bind(var8)();
        var5['provider'] = var7;
        var7 = _closure1_slot3;
        var7 = var7.locale;
        var5['locale'] = var7;
        var7 = _closure1_slot4;
        var6 = var7.getSelectedFormat;
        var6 = var6.bind(var7)();
        var5['media_format'] = var6;
        var2['query'] = var5;
        var5 = true;
        var2['oldFormErrors'] = var5;
        var2['rejectWithError'] = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.body;
            var5 = var1.categories;
            var6 = var1.gifs;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'GIF_PICKER_TRENDING_FETCH_SUCCESS';
            var2['type'] = var7;
            var2['trendingCategories'] = var5;
            var5 = 0;
            var5 = var6[var5];
            var2['trendingGIFPreview'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['fetchTrending'] = var5;
    var5 = function fetchTrendingGIFs(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var1 = global;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        var _closure2_slot1 = var1;
        var4 = _closure1_slot14;
        var1 = _closure1_slot8;
        var3 = var1.TRENDING_GIFS;
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var3 = 7;
        var3 = var11[var3];
        var3 = var10.bind(var1)(var3);
        var5 = var3.HTTP;
        var4 = var5.get;
        var3 = {};
        var6 = _closure1_slot6;
        var6 = var6.GIFS_TRENDING_GIFS;
        var3['url'] = var6;
        var6 = {};
        var12 = _closure1_slot4;
        var9 = var12.getSelectedFormat;
        var9 = var9.bind(var12)();
        var6['media_format'] = var9;
        var9 = 5;
        var9 = var11[var9];
        var10 = var10.bind(var1)(var9);
        var9 = var10.getProviderForAPIRequest;
        var9 = var9.bind(var10)();
        var6['provider'] = var9;
        var8 = _closure1_slot3;
        var8 = var8.locale;
        var6['locale'] = var8;
        var6['limit'] = var7;
        var3['query'] = var6;
        var6 = true;
        var3['oldFormErrors'] = var6;
        var3['rejectWithError'] = var6;
        var5 = var4.bind(var5)(var3);
        var4 = var5.then;
        var3 = function(arg1) {
            var1 = arg1;
            var5 = var1.body;
            var6 = _closure1_slot15;
            var1 = _closure1_slot8;
            var4 = var1.TRENDING_GIFS;
            var3 = {};
            var7 = _closure2_slot1;
            var3['startTime'] = var7;
            var1 = _closure2_slot0;
            var3['limit'] = var1;
            var1 = undefined;
            var3 = var6.bind(var1)(var5, var4, var3);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'GIF_PICKER_QUERY_SUCCESS';
            var2['type'] = var6;
            var2['items'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'GIF_PICKER_QUERY_FAILURE';
            var2['type'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['fetchTrendingGIFs'] = var5;
    var3['gifUrlKey'] = var4;
    var4 = function addFavoriteGIF(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 13;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var6 = var4.FrecencyUserSettingsActionCreators;
        var5 = var6.updateAsync;
        var3 = _closure1_slot10;
        var4 = var3.INFREQUENT_USER_ACTION;
        var3 = 'favoriteGifs';
        var2 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var5 = 9;
                var1 = var1[var5];
                var8 = undefined;
                var7 = var3.bind(var8)(var1);
                var6 = var7.max;
                var3 = global;
                var10 = var3.Object;
                var9 = var10.values;
                var1 = var2.gifs;
                var10 = var9.bind(var10)(var1);
                var9 = var10.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.order;
                    return var1;
                };
                var1 = var9.bind(var10)(var1);
                var1 = var6.bind(var7)(var1);
                var11 = null;
                var6 = var11 != var1;
                var9 = 0;
                if(!var6) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                var9 = var1;
case 28:
                var7 = _closure2_slot0;
                var12 = /\.(mp4|webm)(\?|$)/i;
                var10 = var12.test;
                var6 = var7.src;
                var6 = var10.bind(var12)(var6);
                if(!var6) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                var6 = var7.gifSrc;
                if(!(var11 != var6)) { _fun0008_ip = 30; continue _fun0008 }
case 32:
                var10 = var7.gifSrc;
                var6 = '';
                if(!(var6 !== var10)) { _fun0008_ip = 30; continue _fun0008 }
case 33:
                var10 = var7.gifSrc;
                var6 = var7.src;
                if(!(var10 === var6)) { _fun0008_ip = 34; continue _fun0008 }
case 30:
                var6 = _closure1_slot19;
                var6 = var6.bind(var8)(var7);
                if(!var6) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                var6 = var7.gifSrc;
                if(!(var11 == var6)) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                var10 = var7.src;
                _fun0008_ip = 37; continue _fun0008;
case 34:
                var10 = var7.gifSrc;
case 37:
                var6 = _closure1_slot19;
                var7 = var6.bind(var8)(var7);
                var6 = var10;
                if(!var7) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                var7 = _closure1_slot20;
                var7 = var7.bind(var8)(var10);
                var6 = var10;
                if(!var7) { _fun0008_ip = 38; continue _fun0008 }
case 40:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = 11;
                var7 = var13[var7];
                var12 = var12.bind(var8)(var7);
                var7 = var12.toURLSafe;
                var12 = var7.bind(var12)(var10);
                var7 = var10;
                if(!(var11 != var12)) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                var13 = var12.pathname;
                var11 = var13.toLowerCase;
                var16 = var11.bind(var13)();
                var13 = var16.endsWith;
                var11 = '.webp';
                var14 = var13.bind(var16)(var11);
                var13 = var16.endsWith;
                var11 = '.avif';
                var11 = var13.bind(var16)(var11);
                var15 = var16.endsWith;
                var13 = '.gif';
                var13 = var15.bind(var16)(var13);
                if(var14) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                if(var11) { _fun0008_ip = 43; continue _fun0008 }
case 45:
                if(!var13) { _fun0008_ip = 46; continue _fun0008 }
case 43:
                if(var11) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                var11 = var13;
case 47:
                if(!var11) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                var15 = var12.searchParams;
                var14 = var15.set;
                var13 = 'format';
                var11 = 'webp';
                var11 = var14.bind(var15)(var13, var11);
case 49:
                var15 = var12.searchParams;
                var14 = var15.set;
                var13 = 'animated';
                var11 = 'true';
                var11 = var14.bind(var15)(var13, var11);
                var11 = var12.toString;
                var10 = var11.bind(var12)();
case 46:
                var7 = var10;
case 41:
                var6 = var7;
case 38:
                var10 = var6.startsWith;
                var7 = '//';
                var7 = var10.bind(var6)(var7);
                var10 = var6;
                var6 = var10;
                if(!var7) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                var3 = var3.HermesInternal;
                var7 = var3.concat;
                var3 = 'https:';
                var6 = var7.bind(var3)(var10);
case 51:
                var3 = _closure1_slot20;
                var3 = var3.bind(var8)(var6);
                var11 = var6;
                if(var3) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                var3 = _closure2_slot0;
                var10 = var3.format;
                _fun0008_ip = 55; continue _fun0008;
case 53:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 14;
                var3 = var7[var3];
                var3 = var6.bind(var8)(var3);
                var3 = var3.GIFType;
                var10 = var3.IMAGE;
case 55:
                var6 = var2.gifs;
                var3 = _closure1_slot18;
                var7 = _closure2_slot0;
                var1 = var7.url;
                var3 = var3.bind(var8)(var1);
                var1 = {};
                var18 = var1;
                var17 = var7;
                var7 = copyDataProperties(var18, var17);
                var7 = 'src';
                var1[6] = var11;
                var7 = 'format';
                var1[6] = var10;
                var7 = 1;
                var9 = var9 + var7;
                var7 = 'order';
                var1[6] = var9;
                var6[var3] = var1;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 14;
                var1 = var6[var1];
                var1 = var3.bind(var8)(var1);
                var3 = var1.FavoriteGIFs;
                var1 = var3.toBinary;
                var1 = var1.bind(var3)(var2);
                var3 = var1.length;
                var1 = _closure1_slot9;
                if(!(!(var3 > var1))) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var5 = var3.bind(var8)(var1);
                var3 = var5.size;
                var1 = var2.gifs;
                var6 = var3.bind(var5)(var1);
                var1 = 2;
                if(!(var6 > var1)) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                var1 = true;
                var2['hideTooltip'] = var1;
case 58:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 17;
                var1 = var3[var1];
                var5 = var2.bind(var8)(var1);
                var3 = var5.track;
                var1 = _closure1_slot5;
                var2 = var1.GIF_FAVORITED;
                var1 = {};
                var1['total_num_favorited'] = var6;
                var1 = var3.bind(var5)(var2, var1);
                return var8;
case 56:
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 15;
                var1 = var9[var1];
                var3 = var2.bind(var8)(var1);
                var2 = var3.show;
                var1 = {};
                var7 = _closure1_slot0;
                var4 = 16;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var10 = var5.intl;
                var6 = var10.string;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var5 = var5.t;
                var5 = var5["+XYXtZ"];
                var5 = var6.bind(var10)(var5);
                var1['title'] = var5;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var9[var4];
                var4 = var7.bind(var8)(var4);
                var4 = var4.t;
                var4 = var4.YSDH9n;
                var4 = var5.bind(var6)(var4);
                var1['body'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = false;
                return var1;
            }
        };
        var2 = var5.bind(var6)(var3, var2, var4);
        return var1;
    };
    var3['addFavoriteGIF'] = var4;
    var4 = function removeFavoriteGIF(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 13;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var6 = var4.FrecencyUserSettingsActionCreators;
        var5 = var6.updateAsync;
        var3 = _closure1_slot10;
        var4 = var3.INFREQUENT_USER_ACTION;
        var3 = 'favoriteGifs';
        var2 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var6 = arg1;
                var3 = _closure2_slot0;
                var2 = var6.gifs;
                var3 = var3 in var2;
                var2 = var6.gifs;
                if(var3) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                var5 = _closure1_slot18;
                var4 = _closure2_slot0;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = delete var2[var3];
                _fun0009_ip = 62; continue _fun0009;
case 60:
                var1 = _closure2_slot0;
                var1 = delete var2[var1];
case 62:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 17;
                var3 = var9[var1];
                var1 = undefined;
                var5 = var8.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot5;
                var3 = var2.GIF_UNFAVORITED;
                var2 = {};
                var7 = 9;
                var7 = var9[var7];
                var8 = var8.bind(var1)(var7);
                var7 = var8.size;
                var6 = var6.gifs;
                var6 = var7.bind(var8)(var6);
                var2['total_num_favorited'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var2 = var5.bind(var6)(var3, var2, var4);
        return var1;
    };
    var3['removeFavoriteGIF'] = var4;
    var2 = function fetchTrendingSearchTerms() {
        var9 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 7;
        var2 = var8[var1];
        var1 = undefined;
        var2 = var9.bind(var1)(var2);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {};
        var5 = _closure1_slot6;
        var5 = var5.GIFS_TRENDING_SEARCH;
        var2['url'] = var5;
        var5 = {};
        var7 = 5;
        var8 = var8[var7];
        var9 = var9.bind(var1)(var8);
        var8 = var9.getProviderForAPIRequest;
        var8 = var8.bind(var9)();
        var5['provider'] = var8;
        var5['limit'] = var7;
        var6 = _closure1_slot3;
        var6 = var6.locale;
        var5['locale'] = var6;
        var2['query'] = var5;
        var5 = true;
        var2['oldFormErrors'] = var5;
        var2['rejectWithError'] = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg1) {
            var1 = arg1;
            var5 = var1.body;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS';
            var2['type'] = var6;
            var2['items'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['fetchTrendingSearchTerms'] = var2;
    return var1;
})();
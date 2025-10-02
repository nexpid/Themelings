// app/modules/search/native/SearchPlatformUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var15 = require;
    var17 = metroImportDefault;
    var3 = exports;
    var16 = dependencyMap;
    var _closure1_slot0 = var15;
    var _closure1_slot1 = var17;
    var _closure1_slot2 = var16;
    var12 = function getAttachmentThumbnailURI(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = var5.width;
            var6 = null;
            var2 = var6 != var1;
            var4 = undefined;
            var1 = undefined;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var5.width;
            var3 = 0;
            var2 = var2 > var3;
            var1 = undefined;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = var5.height;
            var2 = var6 != var2;
            var1 = undefined;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var2 = var5.height;
            var2 = var2 > var3;
            var1 = undefined;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.getSrcWithWidthAndHeight;
            var2 = {};
            var6 = var5.proxy_url;
            var2['src'] = var6;
            var6 = var5.width;
            var2['sourceWidth'] = var6;
            var5 = var5.height;
            var2['sourceHeight'] = var5;
            var5 = arg2;
            var2['targetWidth'] = var5;
            var5 = arg3;
            var2['targetHeight'] = var5;
            var5 = 'png';
            var2['format'] = var5;
            var1 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var11 = function getEmbedMediaURI(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var7 = null;
            var1 = var7 == var5;
            var4 = undefined;
            var6 = undefined;
            if(var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var6 = var5.proxyURL;
case 7:
            if(!(var7 == var6)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = var7 == var5;
            var1 = undefined;
            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 11:
            var1 = var5.url;
case 4:
            var6 = var1;
case 9:
            var2 = var7 != var6;
            var1 = undefined;
            if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = var7 != var5;
            var1 = undefined;
            if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 14:
            var2 = var5.width;
            var2 = var7 != var2;
            var1 = undefined;
            if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 15:
            var2 = var5.width;
            var3 = 0;
            var2 = var2 > var3;
            var1 = undefined;
            if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 16:
            var2 = var5.height;
            var2 = var7 != var2;
            var1 = undefined;
            if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 17:
            var2 = var5.height;
            var2 = var2 > var3;
            var1 = undefined;
            if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 18:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
            var2 = var7[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.getSrcWithWidthAndHeight;
            var2 = {};
            var2['src'] = var6;
            var6 = var5.width;
            var2['sourceWidth'] = var6;
            var5 = var5.height;
            var2['sourceHeight'] = var5;
            var5 = arg2;
            var2['targetWidth'] = var5;
            var5 = arg3;
            var2['targetHeight'] = var5;
            var5 = 'png';
            var2['format'] = var5;
            var1 = var3.bind(var4)(var2);
case 12:
            return var1;
        }
    };
    var10 = function performKeyboardAwareNavigation(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 6;
            var5 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = var6.getKeyboardIsOpen;
            var5 = var5.bind(var6)();
            if(!var5) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 7;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.isIOS;
            var5 = var5.bind(var6)();
            if(var5) { _fun0003_ip = 21; continue _fun0003 }
case 19:
            var4 = var4.bind(var1)();
            _fun0003_ip = 22; continue _fun0003;
case 21:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 8;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.dismissGlobalKeyboard;
            var3 = var3.bind(var4)();
            var3 = global;
            var4 = var3.setTimeout;
            var3 = function() {
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var2 = 100;
            var2 = var4.bind(var1)(var3, var2);
case 22:
            return var1;
        }
    };
    var9 = function delayUntilNavigationComplete(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = global;
        var4 = var1.setTimeout;
        var1 = undefined;
        var3 = function() {
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var2 = 200;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var8 = function getUrlIcon(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var7 = arg1;
            var6 = null;
            if(!(var6 != var7)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var5 = 10;
            var2 = var2[var5];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.safeParseWithQuery;
            var2 = var2.bind(var4)(var7);
            if(!(var6 != var2)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var4 = var4.bind(var3)(var2);
            var2 = var4.isDiscordUrl;
            var2 = var2.bind(var4)(var7);
            if(var2) { _fun0004_ip = 25; continue _fun0004 }
case 21:
            var2 = _closure1_slot11;
            var2 = var2.length;
            var5 = 0;
            var2 = var5 < var2;
            if(!var2) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var2 = _closure1_slot11;
            var2 = var2[var5];
            var8 = var2.REGEX;
            var2 = var2.Icon;
            var4 = var8.exec;
            var4 = var4.bind(var8)(var7);
            if(!(var6 == var4)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var5 = var5 + 1;
            var4 = _closure1_slot11;
            var4 = var4.length;
            if(var5 < var4) { _fun0004_ip = 27; continue _fun0004 }
case 26:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 9;
            var4 = var6[var4];
            var4 = var5.bind(var3)(var4);
            var4 = var4.LinkIcon;
            return var4;
case 28:
            return var2;
case 25:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 11;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ClydeIcon;
            return var2;
case 12:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var1 = var1.LinkIcon;
            return var1;
case 23:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.LinkIcon;
            return var1;
        }
    };
    var7 = function getGridItemBorderStyles(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var3 = var2.itemIndex;
            var1 = var2.numItems;
            var4 = var2.numColumns;
            var2 = global;
            var6 = var2.Math;
            var5 = var6.ceil;
            var1 = var1 / var4;
            var1 = var5.bind(var6)(var1);
            var6 = var2.Math;
            var5 = var6.floor;
            var2 = var3 / var4;
            var6 = var5.bind(var6)(var2);
            var2 = 1;
            var5 = var1 - var2;
            var8 = 0;
            if(!(var8 !== var3)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var7 = var4 - var2;
            if(!(var3 !== var7)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var7 = var3 % var4;
            if(!(var7 == var8)) { _fun0005_ip = 27; continue _fun0005 }
case 16:
            if(!(var6 !== var5)) { _fun0005_ip = 34; continue _fun0005 }
case 27:
            var1 = var1 * var4;
            var2 = var1 - var2;
            var5 = undefined;
            var1 = undefined;
            if(!(var3 === var2)) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var2 = {};
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 12;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.radii;
            var3 = var3.lg;
            var2['borderBottomRightRadius'] = var3;
            var1 = var2;
case 35:
            _fun0005_ip = 37; continue _fun0005;
case 34:
            var2 = {};
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 12;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.radii;
            var3 = var3.lg;
            var2['borderBottomLeftRadius'] = var3;
            var1 = var2;
case 37:
            _fun0005_ip = 38; continue _fun0005;
case 32:
            var2 = {};
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 12;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.radii;
            var3 = var3.lg;
            var2['borderTopRightRadius'] = var3;
            var1 = var2;
case 38:
            _fun0005_ip = 39; continue _fun0005;
case 30:
            var2 = {};
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 12;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.radii;
            var3 = var3.lg;
            var2['borderTopLeftRadius'] = var3;
            var1 = var2;
case 39:
            return var1;
        }
    };
    var _closure1_slot13 = var7;
    var6 = function getMediaGridItemStyles(arg1) {
        var1 = arg1;
        var7 = var1.itemIndex;
        var4 = var1.numItems;
        var5 = var1.numColumns;
        var6 = var1.spacing;
        var1 = {};
        var8 = _closure1_slot13;
        var3 = {};
        var3['itemIndex'] = var7;
        var3['numItems'] = var4;
        var3['numColumns'] = var5;
        var4 = undefined;
        var10 = var8.bind(var4)(var3);
        var11 = var1;
        var3 = copyDataProperties(var11, var10);
        var3 = _closure1_slot14;
        var2 = {};
        var2['itemIndex'] = var7;
        var2['spacing'] = var6;
        var2['numColumns'] = var5;
        var10 = var3.bind(var4)(var2);
        var11 = var1;
        var2 = copyDataProperties(var11, var10);
        return var1;
    };
    var5 = function getGridItemSpacingStyles(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var3 = var1.itemIndex;
            var5 = var1.spacing;
            var4 = var1.numColumns;
            var1 = 1;
            var2 = var4 - var1;
            var2 = var5 * var2;
            var2 = var2 / var4;
            var3 = var3 % var4;
            var5 = 0;
            if(!(var5 !== var3)) { _fun0006_ip = 40; continue _fun0006 }
case 41:
            var1 = var4 - var1;
            if(!(var1 !== var3)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var1 = {};
            var3 = 2;
            var3 = var2 / var3;
            var1['marginHorizontal'] = var3;
            return var1;
case 42:
            var1 = {};
            var1['marginStart'] = var2;
            return var1;
case 40:
            var1 = {};
            var1['marginEnd'] = var2;
            return var1;
        }
    };
    var _closure1_slot14 = var5;
    var4 = function toSearchBarTag(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.text;
        var1['id'] = var3;
        var2 = var2.text;
        var1['text'] = var2;
        return var1;
    };
    var1 = function _getLimit(arg1) {
        var1 = global;
        var4 = var1.Math;
        var3 = var4.min;
        var2 = _closure1_slot6;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function getInitialFetchLimit(arg1) {
        var3 = _closure1_slot15;
        var2 = _closure1_slot9;
        var1 = arg1;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function getNextFetchLimit(arg1) {
        var3 = _closure1_slot15;
        var2 = _closure1_slot9;
        var1 = arg1;
        var2 = var2[var1];
        var1 = 2;
        var2 = var1 * var2;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function onInitialFetchMessagesSuccess(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var4 = var1.searchContext;
            var3 = var1.tabEntries;
            var2 = var3.every;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = arg1;
                    var1 = var4[Symbol.iterator];
                    var4 = var1().next;
                    var2 = var4().value;
                    var2 = var1;
                    var6 = undefined;
                    var3 = var2 === var6;
                    var2 = undefined;
                    if(var3) { _fun0008_ip = 44; continue _fun0008 }
case 3:
                    var5 = var4().value;
                    var4 = var1;
                    var4 = var4 === var6;
                    var2 = undefined;
                    var3 = var4;
                    if(var4) { _fun0008_ip = 44; continue _fun0008 }
case 9:
                    var2 = var5;
                    var3 = var4;
case 44:
                    if(var3) { _fun0008_ip = 13; continue _fun0008 }
case 45:
                    var1.return();
case 13:
                    var3 = var2.total_results;
                    var1 = 0;
                    var1 = var1 === var3;
                    if(var1) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                    var3 = var2.total_results;
                    var2 = null;
                    var1 = var2 == var3;
case 46:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            if(!var1) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 15;
            var2 = var5[var2];
            var3 = undefined;
            var7 = var6.bind(var3)(var2);
            var6 = var7.trackSearchResultMessagesEmpty;
            var2 = {};
            var2['searchContext'] = var4;
            var2 = var6.bind(var7)(var2);
            var2 = _closure1_slot1;
            var1 = 16;
            var1 = var5[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.trackSearchEmptyMessageResultMobile;
            var1 = {};
            var1['searchContext'] = var4;
            var1 = var2.bind(var3)(var1);
case 48:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function onFetchMessagesStart(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var5 = var2.searchContext;
            var2 = var2.searchQueryString;
            var _closure2_slot0 = var2;
            var6 = _closure1_slot4;
            var4 = var6.setState;
            var3 = function(arg1) {
                var3 = arg1;
                var2 = var3.setSearchResultsQuery;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var6)(var5, var3);
            var4 = _closure1_slot4;
            var3 = var4.getState;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.hasUserAddedTags;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var3.bind(var4)(var5, var1);
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 17;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var4);
            var4 = var6.incrementSearchCount;
            var4 = var4.bind(var6)(var5, var3);
            if(!var3) { _fun0009_ip = 50; continue _fun0009 }
case 51:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 15;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trackSearchFiltersApplied;
            var2 = {};
            var2['searchContext'] = var5;
            var2 = var3.bind(var4)(var2);
case 50:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var23 = function fetchInitialMessages(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var10 = arg1;
            var _closure2_slot0 = var10;
            var2 = var10.type;
            var1 = _closure1_slot12;
            var1 = var1.THREAD;
            if(!(var2 === var1)) { _fun0010_ip = 52; continue _fun0010 }
case 53:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getCurrentConfig;
            var1 = {};
            var6 = 'ChannelActionButtons';
            var1['location'] = var6;
            var1 = var2.bind(var3)(var1);
            var1 = var1.enabled;
            if(!var1) { _fun0010_ip = 54; continue _fun0010 }
case 52:
            var3 = _closure1_slot4;
            var2 = var3.getState;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.isInitialSearchQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var2.bind(var3)(var10, var1);
            var6 = _closure1_slot4;
            var3 = var6.getState;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getQueryString;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var3.bind(var6)(var10, var2);
            var _closure2_slot1 = var7;
            if(var1) { _fun0010_ip = 55; continue _fun0010 }
case 22:
            var8 = _closure1_slot7;
            _fun0010_ip = 56; continue _fun0010;
case 55:
            var2 = var10.type;
            var1 = _closure1_slot12;
            var1 = var1.GUILD_CHANNEL;
            if(!(var1 !== var2)) { _fun0010_ip = 25; continue _fun0010 }
case 57:
            var1 = _closure1_slot12;
            var1 = var1.CHANNEL;
            if(!(var1 !== var2)) { _fun0010_ip = 25; continue _fun0010 }
case 58:
            var1 = _closure1_slot8;
            _fun0010_ip = 59; continue _fun0010;
case 25:
            var1 = _closure1_slot5;
case 59:
            var8 = var1;
case 56:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var1 = var3[var1];
            var6 = undefined;
            var3 = var2.bind(var6)(var1);
            var2 = var3.getSearchTabFetchId;
            var1 = 0;
            var1 = var8[var1];
            var9 = var2.bind(var3)(var10, var1, var7);
            var2 = _closure1_slot3;
            var1 = var2.getIsFetching;
            var1 = var1.bind(var2)(var9);
            if(var1) { _fun0010_ip = 54; continue _fun0010 }
case 60:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 19;
            var11 = var3[var1];
            var12 = var2.bind(var6)(var11);
            var11 = var12.clearAllSearchMesssages;
            var11 = var11.bind(var12)();
            var11 = 17;
            var11 = var3[var11];
            var12 = var2.bind(var6)(var11);
            var11 = var12.refreshSearchQueryAnalyticsId;
            var11 = var11.bind(var12)(var10);
            var12 = _closure1_slot0;
            var11 = 15;
            var11 = var3[var11];
            var13 = var12.bind(var6)(var11);
            var12 = var13.trackSearchStarted;
            var11 = {};
            var11['searchContext'] = var10;
            var11 = var12.bind(var13)(var11);
            var11 = 16;
            var11 = var3[var11];
            var13 = var2.bind(var6)(var11);
            var12 = var13.trackSearchStartedMobile;
            var11 = {};
            var11['searchContext'] = var10;
            var11 = var12.bind(var13)(var11);
            var1 = var3[var1];
            var3 = var2.bind(var6)(var1);
            var2 = var3.fetchTabMessages;
            var1 = {};
            var1['searchContext'] = var10;
            var1['searchTabs'] = var8;
            var1['searchQueryString'] = var7;
            var5 = function getId(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.getSearchTabFetchId;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = arg1;
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var1['getId'] = var5;
            var5 = _closure1_slot16;
            var1['getLimit'] = var5;
            var5 = _closure1_slot19;
            var1['onFetchStart'] = var5;
            var5 = _closure1_slot18;
            var1['onFetchSuccess'] = var5;
            var5 = {};
            var8 = _closure1_slot3;
            var7 = var8.getCursor;
            var8 = var7.bind(var8)(var9);
            var7 = null;
            var9 = var7 != var8;
            if(!var9) { _fun0010_ip = 61; continue _fun0010 }
case 62:
            var7 = var8;
case 61:
            var5['cursor'] = var7;
            var1['pagination'] = var5;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 14;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var5 = var4.SearchResultExactCountEnabled;
            var4 = var5.getSetting;
            var4 = var4.bind(var5)();
            var1['trackExactTotalHits'] = var4;
            var1 = var2.bind(var3)(var1);
case 54:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot20 = var23;
    var19 = function syncAutocomplete(arg1) {
        var8 = arg1;
        var4 = _closure1_slot4;
        var3 = var4.getState;
        var1 = function(arg1) {
            var3 = arg1;
            var2 = var3.getQueryString;
            var1 = true;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var3.bind(var4)(var8, var1);
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 13;
        var7 = var4[var3];
        var1 = undefined;
        var9 = var6.bind(var1)(var7);
        var7 = var9.tokenizeQuery;
        var7 = var7.bind(var9)(var5);
        var3 = var4[var3];
        var10 = var6.bind(var1)(var3);
        var9 = var10.getSelectionScope;
        var3 = var5.length;
        var11 = 1;
        var6 = var3 - var11;
        var3 = var5.length;
        var3 = var3 - var11;
        var6 = var9.bind(var10)(var7, var6, var3);
        var3 = _closure1_slot1;
        var2 = 19;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.updateAutocompleteQuery;
        var2 = {};
        var2['searchContext'] = var8;
        var2['tokens'] = var7;
        var2['cursorScope'] = var6;
        var2['queryString'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2 = function navigateToSearch(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var5 = arg1;
            var2 = arg2;
            var6 = arg3;
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 19;
            var4 = var4[var1];
            var1 = undefined;
            var7 = var7.bind(var1)(var4);
            var4 = var7.initializeAutocomplete;
            var4 = var4.bind(var7)(var2);
            var4 = null;
            if(!(var4 != var6)) { _fun0011_ip = 63; continue _fun0011 }
case 5:
            var6 = var6.prefetch;
            if(!var6) { _fun0011_ip = 63; continue _fun0011 }
case 64:
            var7 = _closure1_slot10;
            var6 = var2.type;
            var7 = var7[var6];
            var6 = 0;
            var8 = var7[var6];
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var9 = 21;
            var9 = var7[var9];
            var10 = var6.bind(var1)(var9);
            var9 = var4 != var8;
            var13 = var2.type;
            var4 = global;
            var4 = var4.HermesInternal;
            var12 = var4.concat;
            var11 = '[SearchPlatformUtils] Initial tab missing for search context type: ';
            var4 = '.';
            var4 = var12.bind(var11)(var13, var4);
            var4 = var10.bind(var1)(var9, var4);
            var4 = 17;
            var4 = var7[var4];
            var7 = var6.bind(var1)(var4);
            var6 = var7.initialize;
            var4 = {};
            var4['searchContext'] = var2;
            var4['initialTab'] = var8;
            var8 = true;
            var4['initializeSearchQueryId'] = var8;
            var4 = var6.bind(var7)(var4);
            var3 = _closure1_slot20;
            var3 = var3.bind(var1)(var2);
case 63:
            var4 = var5.navigate;
            var3 = {};
            var3['searchContext'] = var2;
            var2 = 'search';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var1 = global;
    var18 = var1.Object;
    var14 = var18.defineProperty;
    var13 = {};
    var1 = true;
    var13['value'] = var1;
    var1 = '__esModule';
    var1 = var14.bind(var18)(var3, var1, var13);
    var1 = 0;
    var13 = var16[var1];
    var1 = undefined;
    var13 = var17.bind(var1)(var13);
    var _closure1_slot3 = var13;
    var13 = 1;
    var13 = var16[var13];
    var13 = var17.bind(var1)(var13);
    var _closure1_slot4 = var13;
    var13 = 2;
    var13 = var16[var13];
    var13 = var15.bind(var1)(var13);
    var14 = var13.CHANNEL_SEARCH_INITIAL_MESSAGE_TABS;
    var _closure1_slot5 = var14;
    var14 = var13.MAX_SEARCH_RESULTS_LIMIT;
    var _closure1_slot6 = var14;
    var14 = var13.MESSAGE_SEARCH_RESULT_TABS;
    var _closure1_slot7 = var14;
    var14 = var13.SEARCH_INITIAL_MESSAGE_TABS;
    var _closure1_slot8 = var14;
    var14 = var13.SEARCH_TABS_TO_SEARCH_QUERY_LIMITS;
    var _closure1_slot9 = var14;
    var13 = var13.SEARCH_TYPE_TO_SEARCH_INITIAL_TABS;
    var _closure1_slot10 = var13;
    var13 = 3;
    var13 = var16[var13];
    var13 = var15.bind(var1)(var13);
    var14 = var13.PLATFORM_REGEX_ICON_PAIRS;
    var _closure1_slot11 = var14;
    var18 = var13.SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
    var13 = 4;
    var13 = var16[var13];
    var13 = var15.bind(var1)(var13);
    var13 = var13.SearchTypes;
    var _closure1_slot12 = var13;
    var13 = {};
    var13['getAttachmentThumbnailURI'] = var12;
    var13['getEmbedMediaURI'] = var11;
    var13['performKeyboardAwareNavigation'] = var10;
    var13['delayUntilNavigationComplete'] = var9;
    var13['getUrlIcon'] = var8;
    var13['getGridItemBorderStyles'] = var7;
    var13['getMediaGridItemStyles'] = var6;
    var13['getGridItemSpacingStyles'] = var5;
    var13['toSearchBarTag'] = var4;
    var13['fetchInitialMessages'] = var23;
    var14 = 20;
    var21 = var16[var14];
    var22 = var17.bind(var1)(var21);
    var21 = var22.debounce;
    var21 = var21.bind(var22)(var23, var18);
    var13['fetchInitialMessagesDebounced'] = var21;
    var20 = function fetchNextMessages(arg1, arg2, arg3) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var9 = arg1;
            var11 = arg2;
            var _closure2_slot0 = var9;
            var3 = _closure1_slot4;
            var2 = var3.getState;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.getQueryString;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var2.bind(var3)(var9, var1);
            var _closure2_slot1 = var8;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var4 = var3[var1];
            var7 = undefined;
            var10 = var2.bind(var7)(var4);
            var4 = var10.getSearchTabFetchId;
            var10 = var4.bind(var10)(var9, var11, var8);
            var4 = _closure1_slot16;
            var13 = var4.bind(var7)(var11);
            var1 = var3[var1];
            var2 = var2.bind(var7)(var1);
            var1 = var2.getSearchTabFetchId;
            var14 = var1.bind(var2)(var9, var11, var8);
            var2 = _closure1_slot3;
            var1 = var2.getIsInitialFetchComplete;
            var1 = var1.bind(var2)(var14);
            var4 = true;
            if(!var1) { _fun0012_ip = 65; continue _fun0012 }
case 66:
            var2 = _closure1_slot3;
            var1 = var2.getCursor;
            var2 = var1.bind(var2)(var14);
            var3 = _closure1_slot3;
            var1 = var3.getTotalCount;
            var12 = var1.bind(var3)(var14);
            var3 = _closure1_slot3;
            var1 = var3.getMessages;
            var3 = var1.bind(var3)(var14);
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 14;
            var1 = var15[var1];
            var1 = var14.bind(var7)(var1);
            var14 = var1.SearchResultExactCountEnabled;
            var1 = var14.getSetting;
            var1 = var1.bind(var14)();
            if(var1) { _fun0012_ip = 67; continue _fun0012 }
case 68:
            var1 = null;
            if(!(var1 != var12)) { _fun0012_ip = 69; continue _fun0012 }
case 70:
            if(!(!(var12 < var13))) { _fun0012_ip = 67; continue _fun0012 }
case 69:
            var1 = var1 != var2;
            _fun0012_ip = 71; continue _fun0012;
case 67:
            var13 = null;
            var2 = var13 != var2;
            if(!var2) { _fun0012_ip = 72; continue _fun0012 }
case 73:
            var2 = var13 != var12;
case 72:
            if(!var2) { _fun0012_ip = 74; continue _fun0012 }
case 75:
            var2 = var13 != var3;
case 74:
            if(!var2) { _fun0012_ip = 76; continue _fun0012 }
case 60:
            var3 = var3.length;
            var2 = var3 < var12;
case 76:
            var1 = var2;
case 71:
            var4 = var1;
case 65:
            var2 = _closure1_slot3;
            var1 = var2.getIsFetching;
            var2 = var1.bind(var2)(var10);
            var3 = _closure1_slot3;
            var1 = var3.getIsInitialFetchComplete;
            var3 = var1.bind(var3)(var10);
            var1 = !var4;
            if(!var4) { _fun0012_ip = 39; continue _fun0012 }
case 77:
            var1 = !var3;
case 39:
            if(var1) { _fun0012_ip = 78; continue _fun0012 }
case 79:
            var1 = var2;
case 78:
            var1 = !var1;
            if(!var1) { _fun0012_ip = 80; continue _fun0012 }
case 81:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 19;
            var2 = var4[var2];
            var4 = var3.bind(var7)(var2);
            var3 = var4.fetchTabMessages;
            var2 = {};
            var2['searchContext'] = var9;
            var9 = new Array(1);
            var9[0] = var11;
            var2['searchTabs'] = var9;
            var2['searchQueryString'] = var8;
            var8 = _closure1_slot17;
            var2['getLimit'] = var8;
            var6 = function getId(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.getSearchTabFetchId;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = arg1;
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var2['getId'] = var6;
            var6 = _closure1_slot19;
            var2['onFetchStart'] = var6;
            var6 = arg3;
            var2['onFetchSuccess'] = var6;
            var6 = {};
            var9 = _closure1_slot3;
            var8 = var9.getCursor;
            var9 = var8.bind(var9)(var10);
            var8 = null;
            var10 = var8 != var9;
            if(!var10) { _fun0012_ip = 82; continue _fun0012 }
case 83:
            var8 = var9;
case 82:
            var6['cursor'] = var8;
            var2['pagination'] = var6;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 14;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var6 = var5.SearchResultExactCountEnabled;
            var5 = var6.getSetting;
            var5 = var5.bind(var6)();
            var2['trackExactTotalHits'] = var5;
            var1 = var3.bind(var4)(var2);
case 80:
            return var1;
        }
    };
    var13['fetchNextMessages'] = var20;
    var13['syncAutocomplete'] = var19;
    var14 = var16[var14];
    var17 = var17.bind(var1)(var14);
    var14 = var17.debounce;
    var14 = var14.bind(var17)(var19, var18);
    var13['syncAutocompleteDebounced'] = var14;
    var13['navigateToSearch'] = var2;
    var14 = 22;
    var14 = var16[var14];
    var16 = var15.bind(var1)(var14);
    var15 = var16.fileFinishedImporting;
    var14 = 'modules/search/native/SearchPlatformUtils.tsx';
    var14 = var15.bind(var16)(var14);
    var3['default'] = var13;
    var3['getAttachmentThumbnailURI'] = var12;
    var3['getEmbedMediaURI'] = var11;
    var3['performKeyboardAwareNavigation'] = var10;
    var3['delayUntilNavigationComplete'] = var9;
    var3['getUrlIcon'] = var8;
    var3['getGridItemBorderStyles'] = var7;
    var3['getMediaGridItemStyles'] = var6;
    var3['getGridItemSpacingStyles'] = var5;
    var3['toSearchBarTag'] = var4;
    var3['navigateToSearch'] = var2;
    return var1;
})();
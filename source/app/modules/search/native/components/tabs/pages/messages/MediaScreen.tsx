// app/modules/search/native/components/tabs/pages/messages/MediaScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.SearchListItemTypes;
    var _closure1_slot6 = var8;
    var8 = var4.MEDIA_NUM_COLUMNS;
    var _closure1_slot7 = var8;
    var8 = var4.MEDIA_ITEM_GAP_WIDTH;
    var _closure1_slot8 = var8;
    var4 = var4.SearchMediaTypes;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMPTY_MEDIA_RESULTS;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MEDIA_MODAL_KEY;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot12 = var4;
    var4 = var7.memo;
    var2 = function MediaScreen(arg1) {
        var1 = arg1;
        var14 = var1.searchContext;
        var _closure2_slot0 = var14;
        var13 = var1.tab;
        var _closure2_slot1 = var13;
        var12 = var1.isFocused;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var2 = 7;
        var2 = var10[var2];
        var4 = undefined;
        var5 = var9.bind(var4)(var2);
        var2 = var5.useContentContainerStyles;
        var8 = var2.bind(var5)();
        var2 = _closure1_slot1;
        var5 = 8;
        var5 = var10[var5];
        var5 = var2.bind(var4)(var5);
        var11 = var5.bind(var4)();
        var _closure2_slot2 = var11;
        var5 = 9;
        var5 = var10[var5];
        var6 = var9.bind(var4)(var5);
        var5 = var6.useSearchMessages;
        var15 = var5.bind(var6)(var14, var13);
        var _closure2_slot3 = var15;
        var5 = 10;
        var5 = var10[var5];
        var16 = var9.bind(var4)(var5);
        var6 = var16.useSearchMessagesLoadingState;
        var5 = {};
        var5['searchContext'] = var14;
        var5['tab'] = var13;
        var5['placeholderHeight'] = var11;
        var7 = _closure1_slot7;
        var5['numColumns'] = var7;
        var16 = var6.bind(var16)(var5);
        var6 = var16.isFirstPageLoading;
        var5 = var16.isNextPageLoading;
        var18 = var16.placeholderCount;
        var _closure2_slot4 = var18;
        var17 = _closure1_slot3;
        var20 = var17.useMemo;
        var19 = new Array(2);
        var19[0] = var15;
        var19[1] = var14;
        var16 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot3;
                var1 = null;
                if(!(var1 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure1_slot10;
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 11;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.getMedia;
                var3 = _closure2_slot0;
                var2 = _closure2_slot3;
                var1 = var4.bind(var5)(var3, var2);
case 4:
                return var1;
            }
        };
        var19 = var20.bind(var17)(var16, var19);
        var _closure2_slot5 = var19;
        var21 = var17.useCallback;
        var20 = new Array(2);
        var20[0] = var14;
        var20[1] = var13;
        var16 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var6 = var3.bind(var1)(var2);
            var5 = var6.fetchNextMessages;
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var3);
                    var5 = var6.isModalOpen;
                    var3 = _closure1_slot11;
                    var3 = var5.bind(var6)(var3);
                    if(!var3) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var7 = _closure1_slot5;
                    var6 = var7.getState;
                    var9 = _closure2_slot0;
                    var3 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.getSearchResultsQuery;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var8 = var6.bind(var7)(var9, var3);
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 13;
                    var3 = var7[var3];
                    var7 = var6.bind(var1)(var3);
                    var6 = var7.getSearchTabFetchId;
                    var3 = _closure2_slot1;
                    var7 = var6.bind(var7)(var9, var3, var8);
                    var6 = _closure1_slot4;
                    var3 = var6.getMessages;
                    var8 = var3.bind(var6)(var7);
                    var3 = null;
                    if(!(var3 != var8)) { _fun0002_ip = 5; continue _fun0002 }
case 7:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var6 = 11;
                    var6 = var4[var6];
                    var7 = var3.bind(var1)(var6);
                    var6 = var7.getMedia;
                    var5 = _closure2_slot0;
                    var7 = var6.bind(var7)(var5, var8);
                    var5 = new Array(0);
                    var _closure4_slot0 = var5;
                    var6 = var7.forEach;
                    var2 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var1 = arg1;
                            var4 = var1.type;
                            var2 = _closure1_slot9;
                            var2 = var2.ATTACHMENT;
                            var2 = var4 !== var2;
                            if(!var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                            var5 = var1.type;
                            var4 = _closure1_slot9;
                            var4 = var4.EMBED;
                            var2 = var5 !== var4;
case 8:
                            if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                            var4 = var1.type;
                            var3 = _closure1_slot9;
                            var3 = var3.COMPONENT;
                            var2 = var4 !== var3;
case 10:
                            if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                            var3 = _closure4_slot0;
                            var2 = var3.push;
                            var1 = var1.sources;
                            var1 = var2.bind(var3)(var1);
case 12:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var6.bind(var7)(var2);
                    var2 = 14;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setMediaViewerSources;
                    var2 = {};
                    var2['sources'] = var5;
                    var2 = var3.bind(var4)(var2);
case 5:
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        };
        var22 = var21.bind(var17)(var16, var20);
        var16 = 15;
        var16 = var10[var16];
        var21 = var9.bind(var4)(var16);
        var20 = var21.useOnPressMediaItem;
        var16 = {};
        var16['searchContext'] = var14;
        var16['allMediaResults'] = var19;
        var16['onEndReached'] = var22;
        var22 = 500;
        var16['onEndReachedThreshold'] = var22;
        var21 = var20.bind(var21)(var16);
        var _closure2_slot6 = var21;
        var20 = var17.useCallback;
        var16 = new Array(3);
        var16[0] = var21;
        var16[1] = var14;
        var16[2] = var15;
        var15 = function(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var4 = var1.media;
                var _closure3_slot0 = var4;
                var3 = var1.originView;
                var6 = _closure2_slot3;
                var1 = null;
                var6 = var1 == var6;
                var1 = undefined;
                var8 = undefined;
                if(var6) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var7 = _closure2_slot3;
                var6 = var7.find;
                var5 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var1.messageId;
                    var1 = var2 === var1;
                    return var1;
                };
                var8 = var6.bind(var7)(var5);
case 14:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 16;
                var6 = var9[var6];
                var7 = var7.bind(var1)(var6);
                var6 = var7.shouldAgeVerifyForSearchMedia;
                var6 = var6.bind(var7)(var4, var8);
                if(var6) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 19;
                var6 = var8[var6];
                var8 = var7.bind(var1)(var6);
                var7 = var8.trackMessageItemPress;
                var6 = {};
                var9 = _closure2_slot0;
                var6['searchContext'] = var9;
                var9 = var4.channelId;
                var6['channelId'] = var9;
                var9 = var4.messageId;
                var6['messageId'] = var9;
                var9 = arg2;
                var6['index'] = var9;
                var6 = var7.bind(var8)(var6);
                var2 = _closure2_slot6;
                var2 = var2.bind(var1)(var4, var3);
                _fun0004_ip = 18; continue _fun0004;
case 16:
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 17;
                var2 = var7[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.showAgeVerificationGetStartedModal;
                var2 = {};
                var6 = _closure1_slot0;
                var5 = 18;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.AgeVerificationModalEntryPoint;
                var5 = var5.SEARCH_MEDIA_PREVIEW;
                var2['entryPoint'] = var5;
                var2 = var3.bind(var4)(var2);
case 18:
                return var1;
            }
        };
        var20 = var20.bind(var17)(var15, var16);
        var _closure2_slot7 = var20;
        var16 = var17.useMemo;
        var15 = new Array(4);
        var15[0] = var20;
        var15[1] = var19;
        var15[2] = var11;
        var15[3] = var18;
        var3 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = new Array(0);
                var _closure3_slot0 = var1;
                var4 = _closure2_slot5;
                var3 = var4.forEach;
                var2 = function(arg1, arg2) {
                    var11 = arg2;
                    var _closure4_slot0 = var11;
                    var4 = _closure3_slot0;
                    var3 = var4.push;
                    var2 = {};
                    var5 = _closure1_slot6;
                    var5 = var5.MEDIA;
                    var2['type'] = var5;
                    var5 = {};
                    var6 = arg1;
                    var5['media'] = var6;
                    var6 = _closure2_slot2;
                    var5['size'] = var6;
                    var1 = function onPress(arg1) {
                        var4 = _closure2_slot7;
                        var3 = _closure4_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var5['onPress'] = var1;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 11;
                    var6 = var6[var1];
                    var1 = undefined;
                    var8 = var7.bind(var1)(var6);
                    var7 = var8.getMediaGridItemStyles;
                    var6 = {};
                    var6['itemIndex'] = var11;
                    var10 = _closure2_slot5;
                    var10 = var10.length;
                    var6['numItems'] = var10;
                    var10 = _closure1_slot7;
                    var6['numColumns'] = var10;
                    var10 = _closure1_slot8;
                    var9 = 2;
                    var9 = var10 - var9;
                    var6['spacing'] = var9;
                    var6 = var7.bind(var8)(var6);
                    var5['containerStyle'] = var6;
                    var2['props'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var2 = _closure2_slot4;
                var10 = 0;
                if(!(var2 > var10)) { _fun0005_ip = 19; continue _fun0005 }
case 8:
                var9 = var1.length;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 20;
                var2 = var4[var2];
                var7 = undefined;
                var4 = var3.bind(var7)(var2);
                var3 = var4.getAdjustedPlaceholderCount;
                var2 = {};
                var5 = _closure1_slot7;
                var2['numColumns'] = var5;
                var2['numResults'] = var9;
                var5 = _closure2_slot4;
                var2['placeholderCount'] = var5;
                var6 = var3.bind(var4)(var2);
                var12 = var10 < var6;
                var5 = global;
                var4 = 'media-placeholder-';
                var3 = 11;
                var2 = 2;
                var10 = 0;
                if(!var12) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var13 = var1.push;
                var12 = {};
                var14 = _closure1_slot6;
                var14 = var14.MEDIA_PLACEHOLDER;
                var12['type'] = var14;
                var15 = var9 + var10;
                var14 = var5.HermesInternal;
                var14 = var14.concat;
                var14 = var14.bind(var4)(var15);
                var12['key'] = var14;
                var14 = {};
                var15 = _closure2_slot2;
                var14['size'] = var15;
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var3];
                var17 = var16.bind(var7)(var15);
                var16 = var17.getMediaGridItemStyles;
                var15 = {};
                var18 = var9 + var10;
                var15['itemIndex'] = var18;
                var18 = _closure2_slot5;
                var18 = var18.length;
                var15['numItems'] = var18;
                var18 = _closure1_slot7;
                var15['numColumns'] = var18;
                var18 = _closure1_slot8;
                var18 = var18 - var2;
                var15['spacing'] = var18;
                var15 = var16.bind(var17)(var15);
                var14['containerStyle'] = var15;
                var12['props'] = var14;
                var12 = var13.bind(var1)(var12);
                var10 = var10 + 1;
                if(var10 < var6) { _fun0005_ip = 20; continue _fun0005 }
case 19:
                return var1;
            }
        };
        var15 = var16.bind(var17)(var3, var15);
        var3 = _closure1_slot12;
        var1 = 19;
        var1 = var10[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['data'] = var15;
        var1['searchContext'] = var14;
        var1['tab'] = var13;
        var1['isFocused'] = var12;
        var1['estimatedItemSize'] = var11;
        var8 = var8.mediaContentContainer;
        var1['contentContainerStyle'] = var8;
        var8 = 21;
        var8 = var10[var8];
        var8 = var9.bind(var4)(var8);
        var8 = var8.MediaVerticalSeparator;
        var1['ItemSeparatorComponent'] = var8;
        var1['numColumns'] = var7;
        var1['isFirstPageLoading'] = var6;
        var1['isNextPageLoading'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/tabs/pages/messages/MediaScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
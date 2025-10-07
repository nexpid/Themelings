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
        var15 = var1.searchContext;
        var _closure2_slot0 = var15;
        var14 = var1.tab;
        var _closure2_slot1 = var14;
        var13 = var1.isFocused;
        var5 = var1.onViewableItemsChanged;
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var2 = 7;
        var2 = var11[var2];
        var4 = undefined;
        var6 = var10.bind(var4)(var2);
        var2 = var6.useContentContainerStyles;
        var9 = var2.bind(var6)();
        var2 = _closure1_slot1;
        var6 = 8;
        var6 = var11[var6];
        var6 = var2.bind(var4)(var6);
        var12 = var6.bind(var4)();
        var _closure2_slot2 = var12;
        var6 = 9;
        var6 = var11[var6];
        var7 = var10.bind(var4)(var6);
        var6 = var7.useSearchMessages;
        var16 = var6.bind(var7)(var15, var14);
        var _closure2_slot3 = var16;
        var6 = 10;
        var6 = var11[var6];
        var17 = var10.bind(var4)(var6);
        var7 = var17.useSearchMessagesLoadingState;
        var6 = {};
        var6['searchContext'] = var15;
        var6['tab'] = var14;
        var6['placeholderHeight'] = var12;
        var8 = _closure1_slot7;
        var6['numColumns'] = var8;
        var17 = var7.bind(var17)(var6);
        var7 = var17.isFirstPageLoading;
        var6 = var17.isNextPageLoading;
        var19 = var17.placeholderCount;
        var _closure2_slot4 = var19;
        var18 = _closure1_slot3;
        var21 = var18.useMemo;
        var20 = new Array(2);
        var20[0] = var16;
        var20[1] = var15;
        var17 = function() {
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
        var20 = var21.bind(var18)(var17, var20);
        var _closure2_slot5 = var20;
        var22 = var18.useCallback;
        var21 = new Array(2);
        var21[0] = var15;
        var21[1] = var14;
        var17 = function() {
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
                            var4 = var1.type;
                            var3 = _closure1_slot9;
                            var3 = var3.EMBED;
                            var2 = var4 !== var3;
case 8:
                            if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                            var3 = _closure4_slot0;
                            var2 = var3.push;
                            var1 = var1.sources;
                            var1 = var2.bind(var3)(var1);
case 10:
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
        var23 = var22.bind(var18)(var17, var21);
        var17 = 15;
        var17 = var11[var17];
        var22 = var10.bind(var4)(var17);
        var21 = var22.useOnPressMediaItem;
        var17 = {};
        var17['searchContext'] = var15;
        var17['allMediaResults'] = var20;
        var17['onEndReached'] = var23;
        var23 = 500;
        var17['onEndReachedThreshold'] = var23;
        var22 = var21.bind(var22)(var17);
        var _closure2_slot6 = var22;
        var21 = var18.useCallback;
        var17 = new Array(4);
        var17[0] = var22;
        var17[1] = var15;
        var17[2] = var14;
        var17[3] = var16;
        var16 = function(arg1, arg2) {
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
                if(var6) { _fun0004_ip = 12; continue _fun0004 }
case 13:
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
case 12:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 16;
                var6 = var9[var6];
                var7 = var7.bind(var1)(var6);
                var6 = var7.shouldAgeVerifyForSearchMedia;
                var6 = var6.bind(var7)(var4, var8);
                if(var6) { _fun0004_ip = 14; continue _fun0004 }
case 15:
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
                var9 = _closure2_slot1;
                var6['tab'] = var9;
                var6 = var7.bind(var8)(var6);
                var2 = _closure2_slot6;
                var2 = var2.bind(var1)(var4, var3);
                _fun0004_ip = 16; continue _fun0004;
case 14:
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
case 16:
                return var1;
            }
        };
        var21 = var21.bind(var18)(var16, var17);
        var _closure2_slot7 = var21;
        var17 = var18.useMemo;
        var16 = new Array(4);
        var16[0] = var21;
        var16[1] = var20;
        var16[2] = var12;
        var16[3] = var19;
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
                if(!(var2 > var10)) { _fun0005_ip = 17; continue _fun0005 }
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
                if(!var12) { _fun0005_ip = 17; continue _fun0005 }
case 18:
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
                if(var10 < var6) { _fun0005_ip = 18; continue _fun0005 }
case 17:
                return var1;
            }
        };
        var16 = var17.bind(var18)(var3, var16);
        var3 = _closure1_slot12;
        var1 = 19;
        var1 = var11[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['data'] = var16;
        var1['searchContext'] = var15;
        var1['tab'] = var14;
        var1['isFocused'] = var13;
        var1['estimatedItemSize'] = var12;
        var9 = var9.mediaContentContainer;
        var1['contentContainerStyle'] = var9;
        var9 = 21;
        var9 = var11[var9];
        var9 = var10.bind(var4)(var9);
        var9 = var9.MediaVerticalSeparator;
        var1['ItemSeparatorComponent'] = var9;
        var1['numColumns'] = var8;
        var1['isFirstPageLoading'] = var7;
        var1['isNextPageLoading'] = var6;
        var1['onViewableItemsChanged'] = var5;
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
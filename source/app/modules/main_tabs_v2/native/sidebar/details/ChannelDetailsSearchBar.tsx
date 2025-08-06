// app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsSearchBar.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.setIsChannelDetailsSearchActive;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.CHANNEL_DETAILS_MARGIN;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var12 = 'center';
    var10['justifyContent'] = var12;
    var12 = 6;
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var12 = var12.SEARCH_BAR_HEIGHT;
    var10['height'] = var12;
    var10['paddingStart'] = var11;
    var11 = 8;
    var10['paddingEnd'] = var11;
    var4['back'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = var3.channelId;
            var _closure2_slot0 = var2;
            var12 = var3.guildId;
            var10 = var3.onSuggestionsLayoutMesure;
            var15 = var3.onBackPress;
            var _closure2_slot1 = var15;
            var8 = var3.suggestionsDismissed;
            var5 = var3.setSuggestionsDismissed;
            var7 = var3.showBackButton;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 61; continue _fun0001 }
 59:
            var7 = true;
 61:
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var3 = _closure1_slot7;
            var9 = var3.bind(var4)();
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 7;
            var3 = var13[var3];
            var11 = var11.bind(var4)(var3);
            var3 = var11.useChannelDetailsSearchContext;
            var11 = var3.bind(var11)(var2, var12);
            _closure2_slot2 = var11;
            var12 = _closure1_slot3;
            var16 = var12.useEffect;
            var14 = new Array(2);
            var14[0] = var2;
            var14[1] = var11;
            var3 = function() {
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackSearchClosedMobile;
                    var2 = {};
                    var5 = _closure2_slot2;
                    var2['searchContext'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                return var1;
            };
            var3 = var16.bind(var12)(var3, var14);
            var14 = var12.useCallback;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var11;
            var2 = function() {
                var6 = _closure1_slot4;
                var5 = var6.setState;
                var4 = _closure2_slot2;
                var3 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.reset;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3 = var5.bind(var6)(var4, var3);
                var5 = _closure1_slot5;
                var4 = _closure2_slot0;
                var1 = undefined;
                var3 = false;
                var2 = 'action';
                var2 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var14 = var14.bind(var12)(var2, var3);
            _closure2_slot3 = var14;
            var3 = var12.useCallback;
            var2 = new Array(3);
            var2[0] = var15;
            var2[1] = var14;
            var2[2] = var11;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = _closure1_slot4;
                    var4 = var5.setState;
                    var3 = _closure2_slot2;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.reset;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3, var1);
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    if(!(var1 === var3)) { _fun0002_ip = 55; continue _fun0002 }
 45:
                    var3 = _closure2_slot3;
                    var3 = var3.bind(var1)();
                    _fun0002_ip = 63; continue _fun0002;
 55:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
 63:
                    return var1;
                }
            };
            var12 = var3.bind(var12)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = 9;
            var1 = var13[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var13 = arg2;
            var1['ref'] = var13;
            var1['searchContext'] = var11;
            var1['onSuggestionsLayoutMesure'] = var10;
            var1['suggestionsDismissed'] = var8;
            var1['setSuggestionsDismissed'] = var5;
            var5 = null;
            if(!var7) { _fun0001_ip = 428; continue _fun0001 }
 275:
            var8 = _closure1_slot6;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 10;
            var6 = var11[var6];
            var6 = var10.bind(var4)(var6);
            var7 = var6.PressableOpacity;
            var6 = {};
            var13 = 'button';
            var6['accessibilityRole'] = var13;
            var6['onPress'] = var12;
            var9 = var9.back;
            var6['style'] = var9;
            var9 = 11;
            var12 = var11[var9];
            var12 = var10.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.13/7kZ;
            var9 = var12.bind(var13)(var9);
            var6['accessibilityLabel'] = var9;
            var9 = 12;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.ChevronLargeLeftIcon;
            var9 = {'size': 'sm', 'color': 'interactive-normal'};
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 428:
            var1['backButton'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var4.bind(var7)(var2);
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetailsSearchBar.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
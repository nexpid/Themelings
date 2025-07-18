// app/modules/search_v2/native/components/layout/SearchBar.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var10 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var1 = function useSearchPlaceholder(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot9;
        var2 = var3.useState;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arg1;
                var1 = var2.getChannelIds;
                var1 = var1.bind(var2)();
                var3 = _closure2_slot0;
                var5 = var3.type;
                var4 = _closure1_slot14;
                var4 = var4.GUILD_CHANNEL;
                if(!(var4 !== var5)) { _fun0001_ip = 328; continue _fun0001 }
 45:
                var4 = _closure1_slot14;
                var4 = var4.GUILD;
                if(!(var4 !== var5)) { _fun0001_ip = 328; continue _fun0001 }
 62:
                var4 = _closure1_slot14;
                var4 = var4.CHANNEL;
                if(!(var4 !== var5)) { _fun0001_ip = 135; continue _fun0001 }
 76:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 13;
                var5 = var9[var4];
                var7 = undefined;
                var5 = var8.bind(var7)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var9[var4];
                var4 = var8.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4.5h0QOD;
                var4 = var5.bind(var6)(var4);
                return var4;
 135:
                var4 = _closure2_slot0;
                var6 = var4.channelId;
                var5 = _closure1_slot5;
                var4 = var5.getChannel;
                var12 = var4.bind(var5)(var6);
                var4 = null;
                if(!(var4 != var12)) { _fun0001_ip = 269; continue _fun0001 }
 164:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 14;
                var4 = var10[var4];
                var5 = undefined;
                var11 = var9.bind(var5)(var4);
                var8 = var11.computeChannelName;
                var15 = _closure1_slot8;
                var14 = _closure1_slot7;
                var13 = true;
                var17 = var11;
                var16 = var12;
                var8 = var17[var8](var16, var15, var14, var13, var12);
                var4 = 13;
                var6 = var10[var4];
                var6 = var9.bind(var5)(var6);
                var7 = var6.intl;
                var6 = var7.formatToPlainString;
                var4 = var10[var4];
                var4 = var9.bind(var5)(var4);
                var4 = var4.t;
                var5 = var4.LDpotL;
                var4 = {};
                var4['guildName'] = var8;
                var4 = var6.bind(var7)(var5, var4);
                _fun0001_ip = 326; continue _fun0001;
 269:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 13;
                var6 = var10[var5];
                var8 = undefined;
                var6 = var9.bind(var8)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var10[var5];
                var5 = var9.bind(var8)(var5);
                var5 = var5.t;
                var5 = var5.5h0QOD;
                var4 = var6.bind(var7)(var5);
 326:
                return var4;
 328:
                var4 = var1.size;
                var1 = 0;
                if(!(var1 !== var4)) { _fun0001_ip = 401; continue _fun0001 }
 339:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 13;
                var4 = var8[var1];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var1 = var8[var1];
                var1 = var7.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.5h0QOD;
                var1 = var4.bind(var5)(var1);
                _fun0001_ip = 569; continue _fun0001;
 401:
                var2 = _closure2_slot0;
                var5 = var2.guildId;
                var4 = _closure1_slot6;
                var2 = var4.getGuild;
                var4 = var2.bind(var4)(var5);
                var2 = null;
                var5 = var2 == var4;
                var7 = undefined;
                var8 = undefined;
                if(var5) { _fun0001_ip = 442; continue _fun0001 }
 437:
                var8 = var4.name;
 442:
                if(!(var2 != var8)) { _fun0001_ip = 511; continue _fun0001 }
 446:
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 13;
                var5 = var9[var2];
                var5 = var4.bind(var7)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var2 = var9[var2];
                var2 = var4.bind(var7)(var2);
                var2 = var2.t;
                var4 = var2.LDpotL;
                var2 = {};
                var2['guildName'] = var8;
                var2 = var5.bind(var6)(var4, var2);
                _fun0001_ip = 566; continue _fun0001;
 511:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 13;
                var4 = var8[var3];
                var4 = var6.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.5h0QOD;
                var2 = var4.bind(var5)(var3);
 566:
                var1 = var2;
 569:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var14 = 1;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var15 = 2;
    var4 = var6[var15];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.EMPTY_SEARCH_QUERY_STRING;
    var _closure1_slot10 = var8;
    var12 = var4.SEARCH_BAR_HEIGHT;
    var4 = var4.SearchQueryTagTypes;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SearchFilterAddLocations;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.HorizontalGradient;
    var _closure1_slot13 = var8;
    var4 = var4.SearchTypes;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot15 = var8;
    var4 = var4.jsxs;
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var11 = {};
    var13 = 12;
    var16 = var6[var13];
    var16 = var10.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.round;
    var11['borderRadius'] = var16;
    var15 = var12 - var15;
    var11['height'] = var15;
    var15 = 'hidden';
    var11['overflow'] = var15;
    var11['borderWidth'] = var14;
    var13 = var6[var13];
    var13 = var10.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var11['borderColor'] = var13;
    var4['searchBar'] = var11;
    var11 = {'width': 32, 'height': null, 'justifyContent': 'center', 'zIndex': 10};
    var11['height'] = var12;
    var4['icon'] = var11;
    var11 = {'position': 'absolute', 'right': 0};
    var11['height'] = var12;
    var4['gradientContainer'] = var11;
    var11 = {'width': 32, 'position': 'absolute', 'left': 0, 'zIndex': 100};
    var11['height'] = var12;
    var4['gradient'] = var11;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot17 = var4;
    var4 = 15;
    var4 = var6[var4];
    var9 = var10.bind(var1)(var4);
    var8 = var9.createAnimatedComponent;
    var4 = 16;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var4 = var8.bind(var9)(var4);
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function SearchBarTsx1(){const{withSpring,gradientVisible,springStandard}=this.__closure;return{opacity:withSpring(gradientVisible.get()?1:0,springStandard)};}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        var2 = arg1;
        var16 = var2.searchContext;
        var _closure2_slot0 = var16;
        var2 = var2.setSuggestionsDismissed;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot17;
        var4 = undefined;
        var18 = var3.bind(var4)();
        var6 = _closure1_slot9;
        var5 = var6.useState;
        var3 = function(arg1) {
            var2 = arg1;
            var1 = var2.getTags;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = var5.bind(var6)(var16, var3);
        var _closure2_slot2 = var3;
        var14 = _closure1_slot3;
        var6 = var14.useMemo;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            var3 = _closure2_slot2;
            var2 = var3.map;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 17;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.toSearchBarTag;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var11 = var6.bind(var14)(var3, var5);
        var5 = var14.useRef;
        var3 = null;
        var13 = var5.bind(var14)(var3);
        var _closure2_slot3 = var13;
        var3 = _closure1_slot20;
        var8 = var3.bind(var4)(var16);
        var6 = _closure1_slot9;
        var5 = var6.useState;
        var3 = function(arg1) {
            var2 = arg1;
            var1 = var2.getPrefixTag;
            var2 = var1.bind(var2)();
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var6 = var5.bind(var6)(var16, var3);
        var _closure2_slot4 = var6;
        var7 = var14.useImperativeHandle;
        var5 = arg2;
        var3 = function() {
            var1 = {};
            var3 = function setText(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot3;
                    var4 = var1.current;
                    var1 = null;
                    var2 = var1 == var4;
                    var1 = undefined;
                    if(var2) { _fun0002_ip = 37; continue _fun0002 }
 23:
                    var3 = var4.setText;
                    var2 = arg1;
                    var1 = var3.bind(var4)(var2);
 37:
                    return var1;
                }
            };
            var1['setText'] = var3;
            var3 = function getText() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot3;
                    var4 = var1.current;
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0003_ip = 33; continue _fun0003 }
 23:
                    var3 = var4.getText;
                    var2 = var3.bind(var4)();
 33:
                    var3 = var1 != var2;
                    var1 = '';
                    if(!var3) { _fun0003_ip = 47; continue _fun0003 }
 44:
                    var1 = var2;
 47:
                    return var1;
                }
            };
            var1['getText'] = var3;
            var3 = function blur() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot3;
                    var3 = var1.current;
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0004_ip = 33; continue _fun0004 }
 23:
                    var2 = var3.blur;
                    var1 = var2.bind(var3)();
 33:
                    return var1;
                }
            };
            var1['blur'] = var3;
            var3 = function focus() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot3;
                    var3 = var1.current;
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0005_ip = 33; continue _fun0005 }
 23:
                    var2 = var3.focus;
                    var1 = var2.bind(var3)();
 33:
                    return var1;
                }
            };
            var1['focus'] = var3;
            var3 = function isFocused() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot3;
                    var4 = var1.current;
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0006_ip = 33; continue _fun0006 }
 23:
                    var3 = var4.isFocused;
                    var2 = var3.bind(var4)();
 33:
                    var1 = var1 != var2;
                    if(!var1) { _fun0006_ip = 43; continue _fun0006 }
 40:
                    var1 = var2;
 43:
                    return var1;
                }
            };
            var1['isFocused'] = var3;
            var3 = function measure(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot3;
                    var4 = var1.current;
                    var1 = null;
                    var2 = var1 == var4;
                    var1 = undefined;
                    if(var2) { _fun0007_ip = 37; continue _fun0007 }
 23:
                    var3 = var4.measure;
                    var2 = arg1;
                    var1 = var3.bind(var4)(var2);
 37:
                    return var1;
                }
            };
            var1['measure'] = var3;
            var3 = function measureInWindow(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot3;
                    var4 = var1.current;
                    var1 = null;
                    var2 = var1 == var4;
                    var1 = undefined;
                    if(var2) { _fun0008_ip = 37; continue _fun0008 }
 23:
                    var3 = var4.measureInWindow;
                    var2 = arg1;
                    var1 = var3.bind(var4)(var2);
 37:
                    return var1;
                }
            };
            var1['measureInWindow'] = var3;
            var2 = function measureLayout(arg1, arg2, arg3) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot3;
                    var6 = var1.current;
                    var1 = null;
                    var2 = var1 == var6;
                    var1 = undefined;
                    if(var2) { _fun0009_ip = 45; continue _fun0009 }
 23:
                    var5 = var6.measureLayout;
                    var4 = arg1;
                    var3 = arg2;
                    var2 = arg3;
                    var1 = var5.bind(var6)(var4, var3, var2);
 45:
                    return var1;
                }
            };
            var1['measureLayout'] = var2;
            return var1;
        };
        var3 = var7.bind(var14)(var5, var3);
        var7 = var14.useEffect;
        var5 = new Array(1);
        var5[0] = var16;
        var3 = function() {
            var4 = _closure1_slot9;
            var3 = var4.subscribeTextInputValue;
            var2 = _closure2_slot0;
            var1 = function(arg1, arg2, arg3) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var4 = arg1;
                    var2 = arg3;
                    if(var2) { _fun0010_ip = 15; continue _fun0010 }
 9:
                    var1 = null;
                    var2 = var1 == var4;
 15:
                    var1 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0010_ip = 43; continue _fun0010 }
 22:
                    var5 = _closure2_slot3;
                    var5 = var5.current;
                    var6 = null;
                    var2 = var6 == var5;
                    var3 = var5;
 43:
                    if(var2) { _fun0010_ip = 57; continue _fun0010 }
 46:
                    var2 = var3.setText;
                    var2 = var2.bind(var3)(var4);
 57:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var3 = var7.bind(var14)(var3, var5);
        var7 = var14.useCallback;
        var5 = new Array(1);
        var5[0] = var16;
        var3 = function(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var5 = arg1;
                var _closure3_slot0 = var5;
                var8 = _closure1_slot9;
                var7 = var8.getState;
                var6 = _closure2_slot0;
                var4 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.getTextInputValue;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var4 = var7.bind(var8)(var6, var4);
                if(!(var4 !== var5)) { _fun0011_ip = 214; continue _fun0011 }
 49:
                var6 = _closure1_slot9;
                var5 = var6.setState;
                var9 = _closure2_slot0;
                var4 = function(arg1) {
                    var4 = arg1;
                    var3 = var4.setTextInputValue;
                    var2 = _closure3_slot0;
                    var1 = true;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var4 = var5.bind(var6)(var9, var4);
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var6 = 17;
                var4 = var4[var6];
                var5 = undefined;
                var7 = var7.bind(var5)(var4);
                var4 = var7.syncAutocompleteDebounced;
                var4 = var4.bind(var7)(var9);
                var8 = _closure1_slot9;
                var7 = var8.getState;
                var4 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.isAutocompleteVisible;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var4 = var7.bind(var8)(var9, var4);
                if(var4) { _fun0011_ip = 214; continue _fun0011 }
 135:
                var8 = _closure1_slot9;
                var7 = var8.getState;
                var4 = _closure2_slot0;
                var2 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.isInitialSearchQuery;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2 = var7.bind(var8)(var4, var2);
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                if(var2) { _fun0011_ip = 199; continue _fun0011 }
 182:
                var4 = var3.fetchInitialMessagesDebounced;
                var2 = _closure2_slot0;
                var2 = var4.bind(var3)(var2);
                _fun0011_ip = 214; continue _fun0011;
 199:
                var2 = var3.fetchInitialMessages;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
 214:
                var1 = undefined;
                return var1;
            }
        };
        var10 = var7.bind(var14)(var3, var5);
        var7 = var14.useEffect;
        var5 = new Array(1);
        var5[0] = var16;
        var3 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.syncAutocomplete;
            var2 = _closure2_slot0;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3 = var7.bind(var14)(var3, var5);
        var7 = var14.useCallback;
        var5 = new Array(1);
        var5[0] = var16;
        var3 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var5 = arg1;
                var _closure3_slot0 = var5;
                var8 = _closure1_slot9;
                var7 = var8.getState;
                var6 = _closure2_slot0;
                var4 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.getTags;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var4 = var7.bind(var8)(var6, var4);
                var7 = var4[var5];
                var4 = null;
                if(!(var4 != var7)) { _fun0012_ip = 275; continue _fun0012 }
 55:
                var5 = var7.type;
                var4 = _closure1_slot11;
                var4 = var4.COMPLETE;
                if(!(var5 === var4)) { _fun0012_ip = 153; continue _fun0012 }
 74:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 18;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.trackSearchFilterRemove;
                var4 = {};
                var8 = _closure2_slot0;
                var4['searchContext'] = var8;
                var8 = var7.searchTokenType;
                var4['searchTokenType'] = var8;
                var8 = var7.location;
                var7 = _closure1_slot12;
                var7 = var7.CLIENT_AUTO_ADD;
                var7 = var8 === var7;
                var4['isDefault'] = var7;
                var4 = var5.bind(var6)(var4);
 153:
                var7 = _closure1_slot9;
                var5 = var7.setState;
                var6 = _closure2_slot0;
                var4 = function(arg1) {
                    var3 = arg1;
                    var2 = var3.removeTag;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var5.bind(var7)(var6, var4);
                var5 = _closure1_slot9;
                var4 = var5.getState;
                var2 = function(arg1) {
                    var3 = arg1;
                    var1 = {};
                    var2 = var3.getQueryString;
                    var4 = var2.bind(var3)();
                    var2 = var3.getSearchResultsQuery;
                    var2 = var2.bind(var3)();
                    var2 = var4 !== var2;
                    var1['isUpdatedSearchQuery'] = var2;
                    var2 = var3.isInitialSearchQuery;
                    var2 = var2.bind(var3)();
                    var1['isInitialSearchQuery'] = var2;
                    return var1;
                };
                var2 = var4.bind(var5)(var6, var2);
                var4 = var2.isUpdatedSearchQuery;
                var2 = var2.isInitialSearchQuery;
                if(!var4) { _fun0012_ip = 275; continue _fun0012 }
 218:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 17;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                if(var2) { _fun0012_ip = 260; continue _fun0012 }
 243:
                var4 = var3.fetchInitialMessagesDebounced;
                var2 = _closure2_slot0;
                var2 = var4.bind(var3)(var2);
                _fun0012_ip = 275; continue _fun0012;
 260:
                var2 = var3.fetchInitialMessages;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
 275:
                var1 = undefined;
                return var1;
            }
        };
        var9 = var7.bind(var14)(var3, var5);
        var5 = var14.useMemo;
        var3 = new Array(3);
        var3[0] = var6;
        var3[1] = var16;
        var3[2] = var2;
        var2 = function() {
            var1 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0013_ip = 189; continue _fun0013 }
 25:
                    var8 = _closure1_slot9;
                    var7 = var8.getState;
                    var6 = _closure2_slot0;
                    var5 = function(arg1) {
                        var3 = arg1;
                        var1 = {};
                        var2 = var3.getPrefixTag;
                        var2 = var2.bind(var3)();
                        var1['prefixTag'] = var2;
                        var2 = var3.getTextInputValue;
                        var2 = var2.bind(var3)();
                        var1['textInputValue'] = var2;
                        return var1;
                    };
                    var5 = var7.bind(var8)(var6, var5);
                    var8 = var5.prefixTag;
                    var5 = var5.textInputValue;
                    var _closure4_slot0 = var5;
                    var5 = null;
                    if(!(var5 != var8)) { _fun0013_ip = 191; continue _fun0013 }
 77:
                    var6 = _closure1_slot9;
                    var5 = var6.setState;
                    var4 = _closure2_slot0;
                    var3 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.setTextInputValue;
                        var1 = _closure1_slot10;
                        var1 = var2.bind(var3)(var1);
                        var2 = var3.addTag;
                        var1 = {};
                        var4 = _closure1_slot11;
                        var4 = var4.ANSWER;
                        var1['type'] = var4;
                        var4 = _closure4_slot0;
                        var1['text'] = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var3 = var5.bind(var6)(var4, var3);
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 18;
                    var3 = var5[var3];
                    var7 = var6.bind(var1)(var3);
                    var6 = var7.trackSearchFilterAdd;
                    var3 = {};
                    var3['searchContext'] = var4;
                    var9 = var8.searchTokenType;
                    var3['searchTokenType'] = var9;
                    var8 = var8.location;
                    var3['location'] = var8;
                    var3 = var6.bind(var7)(var3);
                    var3 = _closure1_slot1;
                    var2 = 17;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.fetchInitialMessages;
                    var2 = var2.bind(var3)(var4);
 189:
                    return var1;
 191:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var5.bind(var14)(var2, var3);
        var3 = _closure1_slot0;
        var17 = _closure1_slot2;
        var6 = 15;
        var2 = var17[var6];
        var12 = var3.bind(var4)(var2);
        var2 = var12.useSharedValue;
        var5 = false;
        var2 = var2.bind(var12)(var5);
        var _closure2_slot5 = var2;
        var6 = var17[var6];
        var15 = var3.bind(var4)(var6);
        var12 = var15.useAnimatedStyle;
        var6 = function D() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var1 = {};
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 19;
                var3 = var5[var3];
                var7 = undefined;
                var5 = var4.bind(var7)(var3);
                var4 = var5.withSpring;
                var6 = _closure2_slot5;
                var3 = var6.get;
                var6 = var3.bind(var6)();
                var3 = 0;
                if(!var6) { _fun0014_ip = 56; continue _fun0014 }
 53:
                var3 = 1;
 56:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 20;
                var2 = var8[var2];
                var2 = var6.bind(var7)(var2);
                var2 = var2.springStandard;
                var2 = var4.bind(var5)(var3, var2);
                var1['opacity'] = var2;
                return var1;
            }
        };
        var19 = {};
        var20 = 19;
        var20 = var17[var20];
        var20 = var3.bind(var4)(var20);
        var20 = var20.withSpring;
        var19['withSpring'] = var20;
        var19['gradientVisible'] = var2;
        var20 = 20;
        var20 = var17[var20];
        var20 = var3.bind(var4)(var20);
        var20 = var20.springStandard;
        var19['springStandard'] = var20;
        var6['__closure'] = var19;
        var19 = 14270272447339.0;
        var6['__workletHash'] = var19;
        var19 = _closure1_slot19;
        var6['__initData'] = var19;
        var19 = var12.bind(var15)(var6);
        var12 = var14.useCallback;
        var6 = new Array(1);
        var6[0] = var2;
        var2 = function(arg1) {
            var3 = _closure2_slot5;
            var2 = var3.set;
            var1 = global;
            var5 = var1.Math;
            var4 = var5.round;
            var1 = arg1;
            var1 = var1.nativeEvent;
            var1 = var1.contentOffset;
            var1 = var1.x;
            var4 = var4.bind(var5)(var1);
            var1 = 5;
            var1 = var4 > var1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var6 = var12.bind(var14)(var2, var6);
        var2 = 21;
        var2 = var17[var2];
        var12 = var3.bind(var4)(var2);
        var3 = var12.useToken;
        var15 = _closure1_slot1;
        var2 = 12;
        var2 = var17[var2];
        var2 = var15.bind(var4)(var2);
        var2 = var2.colors;
        var2 = var2.BG_BASE_TERTIARY;
        var2 = var3.bind(var12)(var2);
        var _closure2_slot6 = var2;
        var12 = var14.useMemo;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var4 = _closure2_slot6;
            var1 = new Array(2);
            var1[0] = var4;
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 22;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var5.bind(var3)(var2);
            var4 = var2.bind(var3)(var4);
            var3 = var4.alpha;
            var2 = 0;
            var3 = var3.bind(var4)(var2);
            var2 = var3.hex;
            var2 = var2.bind(var3)();
            var1[1] = var2;
            return var1;
        };
        var20 = var12.bind(var14)(var2, var3);
        var3 = _closure1_slot9;
        var2 = var3.getState;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = var2.getTextInputValue;
            var1 = var1.bind(var2)();
            return var1;
        };
        var12 = var2.bind(var3)(var16, var1);
        var3 = _closure1_slot15;
        var1 = 23;
        var1 = var17[var1];
        var2 = var15.bind(var4)(var1);
        var1 = {};
        var1['ref'] = var13;
        var1['defaultValue'] = var12;
        var12 = var18.searchBar;
        var1['style'] = var12;
        var1['tags'] = var11;
        var13 = _closure1_slot16;
        var12 = _closure1_slot4;
        var11 = {};
        var14 = var18.icon;
        var11['style'] = var14;
        var14 = 24;
        var14 = var17[var14];
        var15 = var15.bind(var4)(var14);
        var14 = {};
        var14['searchContext'] = var16;
        var15 = var3.bind(var4)(var15, var14);
        var14 = new Array(2);
        var14[0] = var15;
        var15 = {};
        var16 = var18.gradientContainer;
        var15['style'] = var16;
        var17 = _closure1_slot18;
        var16 = {};
        var21 = _closure1_slot13;
        var22 = var21.START;
        var16['start'] = var22;
        var21 = var21.END;
        var16['end'] = var21;
        var16['colors'] = var20;
        var20 = var18.gradient;
        var18 = new Array(2);
        var18[0] = var20;
        var18[1] = var19;
        var16['style'] = var18;
        var18 = 'none';
        var16['pointerEvents'] = var18;
        var16 = var3.bind(var4)(var17, var16);
        var15['children'] = var16;
        var15 = var3.bind(var4)(var12, var15);
        var14[1] = var15;
        var11['children'] = var14;
        var11 = var13.bind(var4)(var12, var11);
        var1['icon'] = var11;
        var1['onChangeText'] = var10;
        var1['onRemove'] = var9;
        var1['placeholder'] = var8;
        var1['onSubmitEditing'] = var7;
        var1['onScroll'] = var6;
        var6 = true;
        var1['horizontal'] = var6;
        var1['autoClearInputOnTagAdd'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var4.bind(var7)(var2);
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search_v2/native/components/layout/SearchBar.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
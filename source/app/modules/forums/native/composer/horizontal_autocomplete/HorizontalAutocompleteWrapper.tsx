// app/modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocompleteWrapper.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FlatList;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AutoCompleteResultTypes;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 'function HorizontalAutocompleteWrapperTsx1(){const{withTiming,toValue}=this.__closure;return{opacity:withTiming(toValue)};}';
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocompleteWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function HorizontalAutocompleteWrapper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.style;
            var2 = var1.channel;
            var _closure2_slot0 = var2;
            var12 = var1.onPressAutocompleteItem;
            var _closure2_slot1 = var12;
            var8 = var1.text;
            var7 = var1.selection;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 4;
            var1 = var6[var1];
            var6 = var3.bind(var4)(var1);
            var3 = var6.useHorizontalAutocompleteResults;
            var1 = {};
            var1['channel'] = var2;
            var1['text'] = var8;
            var1['selection'] = var7;
            var1 = var3.bind(var6)(var1);
            var8 = var1.results;
            var10 = var1.autocompleteSelectionStart;
            var _closure2_slot2 = var10;
            var1 = var1.query;
            var _closure2_slot3 = var1;
            var6 = _closure1_slot3;
            var7 = var6.useCallback;
            var3 = new Array(3);
            var3[0] = var12;
            var3[1] = var10;
            var3[2] = var1;
            var1 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.stopPropagation;
                    var1 = var1.bind(var2)();
                    var5 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var3 = null;
                    var2 = var3 != var2;
                    var4 = 0;
                    if(!var2) { _fun0002_ip = 39; continue _fun0002 }
 35:
                    var4 = _closure2_slot2;
 39:
                    var2 = _closure2_slot3;
                    var2 = var3 != var2;
                    var3 = '';
                    if(!var2) { _fun0002_ip = 58; continue _fun0002 }
 54:
                    var3 = _closure2_slot3;
 58:
                    var1 = undefined;
                    var2 = arg2;
                    var2 = var5.bind(var1)(var2, var4, var3);
                    return var1;
                }
            };
            var1 = var7.bind(var6)(var1, var3);
            var _closure2_slot4 = var1;
            var3 = var6.useCallback;
            var7 = var2.guild_id;
            var2 = new Array(2);
            var2[0] = var7;
            var2[1] = var1;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var6 = var1.item;
                    var _closure3_slot0 = var6;
                    var3 = var6.type;
                    var2 = _closure1_slot5;
                    var2 = var2.USER;
                    if(!(var2 !== var3)) { _fun0003_ip = 313; continue _fun0003 }
 39:
                    var2 = _closure1_slot5;
                    var2 = var2.ROLE;
                    if(!(var2 !== var3)) { _fun0003_ip = 224; continue _fun0003 }
 56:
                    var2 = _closure1_slot5;
                    var2 = var2.CHANNEL;
                    if(!(var2 !== var3)) { _fun0003_ip = 156; continue _fun0003 }
 70:
                    var2 = _closure1_slot5;
                    var2 = var2.EMOJI;
                    if(!(var2 !== var3)) { _fun0003_ip = 88; continue _fun0003 }
 84:
                    var2 = null;
                    return var2;
 88:
                    var7 = _closure1_slot6;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 5;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Emoji;
                    var2 = {};
                    var11 = var2;
                    var10 = var6;
                    var8 = copyDataProperties(var11, var10);
                    var9 = function onPress(arg1) {
                        var4 = _closure2_slot4;
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var8 = 'onPress';
                    var2[var8] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
 156:
                    var7 = _closure1_slot6;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 5;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Channel;
                    var2 = {};
                    var11 = var2;
                    var10 = var6;
                    var8 = copyDataProperties(var11, var10);
                    var9 = function onPress(arg1) {
                        var4 = _closure2_slot4;
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var8 = 'onPress';
                    var2[var8] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
 224:
                    var7 = _closure1_slot6;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 5;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Role;
                    var2 = {};
                    var11 = var2;
                    var10 = var6;
                    var8 = copyDataProperties(var11, var10);
                    var8 = _closure2_slot0;
                    var9 = var8.guild_id;
                    var8 = 'guildId';
                    var2[var8] = var9;
                    var9 = function onPress(arg1) {
                        var4 = _closure2_slot4;
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var8 = 'onPress';
                    var2[var8] = var9;
                    var2 = var7.bind(var4)(var3, var2);
                    return var2;
 313:
                    var4 = _closure1_slot6;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.User;
                    var1 = {};
                    var11 = var1;
                    var10 = var6;
                    var6 = copyDataProperties(var11, var10);
                    var6 = _closure2_slot0;
                    var7 = var6.guild_id;
                    var6 = 'guildId';
                    var1[var6] = var7;
                    var6 = function onPress(arg1) {
                        var4 = _closure2_slot4;
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var5 = 'onPress';
                    var1[var5] = var6;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var7 = var3.bind(var6)(var1, var2);
            var1 = var8.length;
            var13 = 0;
            var1 = var1 > var13;
            if(!var1) { _fun0001_ip = 214; continue _fun0001 }
 211:
            var13 = 1;
 214:
            _closure2_slot5 = var13;
            var15 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var2 = var6[var1];
            var10 = var15.bind(var4)(var2);
            var3 = var10.useAnimatedStyle;
            var2 = function _() {
                var1 = {};
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.withTiming;
                var2 = _closure2_slot5;
                var2 = var3.bind(var4)(var2);
                var1['opacity'] = var2;
                return var1;
            };
            var12 = {};
            var14 = 7;
            var14 = var6[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.withTiming;
            var12['withTiming'] = var14;
            var12['toValue'] = var13;
            var2['__closure'] = var12;
            var12 = 7895652904738.0;
            var2['__workletHash'] = var12;
            var12 = _closure1_slot7;
            var2['__initData'] = var12;
            var10 = var3.bind(var10)(var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var6 = new Array(2);
            var6[0] = var11;
            var6[1] = var10;
            var1['style'] = var6;
            var6 = _closure1_slot4;
            var5 = {'keyboardShouldPersistTaps': 'always', 'horizontal': true};
            var9 = function keyExtractor(arg1, arg2) {
                var1 = global;
                var3 = var1.String;
                var2 = undefined;
                var1 = arg2;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var5['keyExtractor'] = var9;
            var5['data'] = var8;
            var5['renderItem'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
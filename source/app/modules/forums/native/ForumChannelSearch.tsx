// app/modules/forums/native/ForumChannelSearch.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var11 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = native4;
    var1 = undefined;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var12 = var4.Fonts;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var5 = var9.createStyles;
    var4 = {};
    var10 = {'flexGrow': 1, 'marginLeft': 8};
    var4['inputContainer'] = var10;
    var13 = {};
    var10 = 6;
    var14 = var7[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.TRANSPARENT;
    var13['backgroundColor'] = var14;
    var14 = 16;
    var13['paddingLeft'] = var14;
    var4['cancelButton'] = var13;
    var13 = 7;
    var13 = var7[var13];
    var13 = var11.bind(var1)(var13);
    var12 = var12.PRIMARY_SEMIBOLD;
    var10 = var7[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var11 = var10.INTERACTIVE_ACTIVE;
    var10 = 14;
    var10 = var13.bind(var1)(var12, var11, var10);
    var4['cancelButtonText'] = var10;
    var4 = var5.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var _closure2_slot0 = var4;
            var1 = _closure1_slot7;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 8;
            var1 = var9[var1];
            var1 = var2.bind(var5)(var1);
            var10 = var1.bind(var5)();
            var _closure2_slot1 = var10;
            var3 = _closure1_slot0;
            var1 = 9;
            var1 = var9[var1];
            var2 = var3.bind(var5)(var1);
            var1 = var2.useRoute;
            var1 = var1.bind(var2)();
            var _closure2_slot2 = var1;
            var2 = 10;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useCanSearchForumPostsByChannelId;
            var2 = var2.bind(var3)(var4);
            var9 = _closure1_slot3;
            var4 = var9.useEffect;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var1;
            var1 = function() {
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = _closure2_slot1;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 69; continue _fun0002 }
 13:
                        var3 = _closure2_slot1;
                        var2 = var3.setOptions;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 11;
                        var5 = var5[var4];
                        var4 = undefined;
                        var5 = var6.bind(var4)(var5);
                        var4 = var5.getDefaultChannelStackHeaderProps;
                        var1 = _closure2_slot2;
                        var1 = var4.bind(var5)(var3, var1);
                        var1 = var2.bind(var3)(var1);
 69:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var4.bind(var9)(var1, var3);
            var1 = null;
            if(!var2) { _fun0001_ip = 262; continue _fun0001 }
 145:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 12;
            var2 = var12[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var9 = var7.cancelButton;
            var2['style'] = var9;
            var11 = _closure1_slot0;
            var8 = 13;
            var9 = var12[var8];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.ETE/oK;
            var8 = var9.bind(var10)(var8);
            var2['text'] = var8;
            var7 = var7.cancelButtonText;
            var2['textStyle'] = var7;
            var6 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0003_ip = 54; continue _fun0003 }
 13:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.updateForumSearchQuery;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1, var4);
 54:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 262:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = var8.memo;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var1 = var2.channelId;
            var _closure2_slot0 = var1;
            var3 = var2.guildId;
            var _closure2_slot1 = var3;
            var10 = var2.placeholder;
            var2 = _closure1_slot7;
            var5 = undefined;
            var6 = var2.bind(var5)();
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var2 = var7[var2];
            var3 = var4.bind(var5)(var2);
            var2 = var3.useCanSearchForumPostsByChannelId;
            var2 = var2.bind(var3)(var1);
            var3 = 15;
            var3 = var7[var3];
            var9 = var4.bind(var5)(var3);
            var7 = var9.useStateFromStores;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0005_ip = 38; continue _fun0005 }
 16:
                    var4 = _closure1_slot5;
                    var3 = var4.getSearchQuery;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            var9 = var7.bind(var9)(var4, var1, var3);
            var12 = null;
            var1 = null;
            if(!var2) { _fun0004_ip = 330; continue _fun0004 }
 132:
            var2 = var12 != var9;
            var1 = null;
            if(!var2) { _fun0004_ip = 330; continue _fun0004 }
 144:
            var4 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var6.inputContainer;
            var2['style'] = var6;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 16;
            var6 = var13[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.SearchField;
            var6 = {};
            var13 = 'sm';
            var6['size'] = var13;
            var6['defaultValue'] = var9;
            var13 = function onChange(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 57; continue _fun0006 }
 13:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.updateForumSearchQuery;
                    var2 = _closure2_slot0;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
 57:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['onChange'] = var13;
            if(!(var12 == var10)) { _fun0004_ip = 276; continue _fun0004 }
 219:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 13;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.Iy2gnZ;
            var10 = var12.bind(var13)(var11);
 276:
            var6['placeholder'] = var10;
            var10 = var9.length;
            var9 = 0;
            var9 = var9 === var10;
            var6['autoFocus'] = var9;
            var8 = function onClear() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot1;
                    var3 = null;
                    var2 = var3 != var2;
                    if(!var2) { _fun0007_ip = 24; continue _fun0007 }
 16:
                    var4 = _closure2_slot0;
                    var2 = var3 != var4;
 24:
                    if(!var2) { _fun0007_ip = 81; continue _fun0007 }
 27:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.trackForumSearchCleared;
                    var2 = {};
                    var6 = _closure2_slot1;
                    var2['guildId'] = var6;
                    var6 = _closure2_slot0;
                    var2['channelId'] = var6;
                    var2 = var4.bind(var5)(var2);
 81:
                    var2 = _closure2_slot0;
                    if(!(var3 != var2)) { _fun0007_ip = 134; continue _fun0007 }
 89:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.updateForumSearchQuery;
                    var2 = _closure2_slot0;
                    var1 = '';
                    var1 = var3.bind(var4)(var2, var1);
 134:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['onClear'] = var8;
            var8 = false;
            var6['grow'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 330:
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/forums/native/ForumChannelSearch.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ForumChannelCloseSearchButton'] = var4;
    var3['ForumChannelSearchInput'] = var2;
    return var1;
})();
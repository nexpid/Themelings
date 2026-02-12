// app/modules/directory_channels/native/components/GuildDirectorySearch.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var9 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var9;
    var _closure1_slot3 = var6;
    var10 = global;
    var11 = var10.Object;
    var7 = var11.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var11)(var3, var1, var4);
    var7 = 0;
    var4 = var6[var7];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot6 = var9;
    var9 = var4.Image;
    var _closure1_slot7 = var9;
    var4 = var4.FlatList;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var16 = var4.Fonts;
    var4 = var4.AnalyticEvents;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot12 = var9;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var13 = var5.bind(var1)(var4);
    var12 = var13.createStyles;
    var11 = {};
    var4 = {'flex': 1, 'height': '100%'};
    var11['flex'] = var4;
    var4 = {};
    var4['paddingHorizontal'] = var7;
    var11['fauxHeader'] = var4;
    var4 = {'flex': 1, 'width': '100%'};
    var15 = 8;
    var7 = var6[var15];
    var7 = var8.bind(var1)(var7);
    var7 = var7.colors;
    var7 = var7.BACKGROUND_BASE_LOW;
    var4['backgroundColor'] = var7;
    var11['scrollContainer'] = var4;
    var17 = 'center';
    var7 = 16;
    var4 = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center', 'paddingHorizontal': 16};
    var11['emptyWrapper'] = var4;
    var14 = {};
    var4 = 24;
    var14['marginBottom'] = var4;
    var11['emptyStateImage'] = var14;
    var14 = {};
    var14['textAlign'] = var17;
    var11['emptyStateText'] = var14;
    var14 = {'marginBottom': 4, 'textAlign': 'center'};
    var11['emptyStateTitle'] = var14;
    var14 = {};
    var16 = var16.PRIMARY_BOLD;
    var14['fontFamily'] = var16;
    var15 = var6[var15];
    var15 = var8.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.GREEN_360;
    var14['color'] = var15;
    var15 = 'uppercase';
    var14['textTransform'] = var15;
    var11['proTip'] = var14;
    var11 = var12.bind(var13)(var11);
    var _closure1_slot14 = var11;
    var11 = function EmptyState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channel;
            var _closure2_slot0 = var3;
            var1 = _closure1_slot14;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var5 = _closure1_slot3;
            var1 = 13;
            var1 = var5[var1];
            var11 = var2.bind(var4)(var1);
            var9 = var11.useStateFromStores;
            var1 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getGuild;
                var4 = _closure2_slot0;
                var1 = var4.getGuildId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var9.bind(var11)(var8, var1);
            var _closure2_slot1 = var1;
            var1 = 14;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useCanCreateOrAddGuildInDirectory;
            var3 = var1.bind(var2)(var3);
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var14 = 11;
            var5 = var1[var14];
            var5 = var2.bind(var4)(var5);
            var5 = var5.intl;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var5.string;
            var3 = var1[var14];
            var3 = var2.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.vYyEnv;
            var9 = var8.bind(var5)(var3);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = var5.format;
            var1 = var1[var14];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.ZxNVMy;
            var1 = {};
            var7 = function addServerHook() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var6 = _closure2_slot1;
                var7 = var6.name;
                var2['directoryGuildName'] = var7;
                var6 = var6.id;
                var2['directoryGuildId'] = var6;
                var5 = _closure2_slot0;
                var5 = var5.id;
                var2['directoryChannelId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['addServerHook'] = var7;
            var9 = var3.bind(var5)(var2, var1);
case 4:
            var3 = _closure1_slot13;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var10.emptyWrapper;
            var1['style'] = var5;
            var8 = _closure1_slot12;
            var7 = _closure1_slot7;
            var5 = {};
            var11 = var10.emptyStateImage;
            var5['style'] = var11;
            var13 = _closure1_slot1;
            var11 = _closure1_slot3;
            var12 = 9;
            var12 = var11[var12];
            var12 = var13.bind(var4)(var12);
            var5['source'] = var12;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var7 = _closure1_slot0;
            var6 = 10;
            var12 = var11[var6];
            var12 = var7.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {'style': null, 'variant': 'text-sm/semibold', 'color': 'mobile-text-heading-primary'};
            var15 = var10.emptyStateTitle;
            var12['style'] = var15;
            var15 = var11[var14];
            var15 = var7.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var11[var14];
            var14 = var7.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.6HXiuE;
            var14 = var15.bind(var16)(var14);
            var12['children'] = var14;
            var12 = var8.bind(var4)(var13, var12);
            var5[1] = var12;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-default'};
            var10 = var10.emptyStateText;
            var6['style'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var11;
    var11 = var10.Array;
    var10 = 20;
    var12 = var11.bind(var1)(var10);
    var11 = var12.fill;
    var10 = null;
    var10 = var11.bind(var12)(var10);
    var _closure1_slot16 = var10;
    var7 = var6[var7];
    var8 = var8.bind(var1)(var7);
    var7 = {};
    var7 = var9.bind(var1)(var8, var7);
    var _closure1_slot17 = var7;
    var8 = function DefaultState() {
        var1 = _closure1_slot14;
        var4 = undefined;
        var9 = var1.bind(var4)();
        var _closure2_slot0 = var9;
        var3 = _closure1_slot13;
        var2 = _closure1_slot6;
        var1 = {};
        var5 = var9.emptyWrapper;
        var1['style'] = var5;
        var8 = _closure1_slot12;
        var7 = _closure1_slot7;
        var5 = {};
        var10 = var9.emptyStateImage;
        var5['style'] = var10;
        var11 = _closure1_slot1;
        var14 = _closure1_slot3;
        var10 = 9;
        var10 = var14[var10];
        var10 = var11.bind(var4)(var10);
        var5['source'] = var10;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var10 = _closure1_slot0;
        var6 = 10;
        var6 = var14[var6];
        var6 = var10.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-default'};
        var9 = var9.emptyStateText;
        var6['style'] = var9;
        var9 = 11;
        var11 = var14[var9];
        var11 = var10.bind(var4)(var11);
        var12 = var11.intl;
        var11 = var12.format;
        var9 = var14[var9];
        var9 = var10.bind(var4)(var9);
        var9 = var9.t;
        var10 = var9.aYLd8O;
        var9 = {};
        var13 = function protipHook(arg1) {
            var5 = _closure1_slot12;
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 12;
            var1 = var3[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var3 = var1.LegacyText;
            var2 = {};
            var1 = _closure2_slot0;
            var1 = var1.proTip;
            var2['style'] = var1;
            var1 = arg1;
            var2['children'] = var1;
            var1 = 'protip';
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var9['protipHook'] = var13;
        var9 = var11.bind(var12)(var10, var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var7 = {};
    var7 = var9.bind(var1)(var8, var7);
    var _closure1_slot18 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/directory_channels/native/components/GuildDirectorySearch.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildDirectorySearch(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channel;
            var _closure2_slot0 = var5;
            var3 = _closure1_slot12;
            var2 = _closure1_slot15;
            var1 = {};
            var1['channel'] = var5;
            var4 = undefined;
            var1 = var3.bind(var4)(var2, var1);
            var _closure2_slot1 = var1;
            var1 = _closure1_slot14;
            var10 = var1.bind(var4)();
            var15 = _closure1_slot5;
            var2 = var15.useState;
            var1 = false;
            var1 = var2.bind(var15)(var1);
            var7 = _closure1_slot4;
            var6 = 2;
            var1 = var7.bind(var4)(var1, var6);
            var8 = 0;
            var3 = var1[var8];
            var2 = 1;
            var1 = var1[var2];
            var _closure2_slot2 = var1;
            var12 = var15.useState;
            var1 = '';
            var1 = var12.bind(var15)(var1);
            var1 = var7.bind(var4)(var1, var6);
            var6 = var1[var8];
            var _closure2_slot3 = var6;
            var12 = var1[var2];
            var2 = _closure1_slot0;
            var14 = _closure1_slot3;
            var1 = 13;
            var1 = var14[var1];
            var7 = var2.bind(var4)(var1);
            var6 = var7.useStateFromStoresObject;
            var1 = _closure1_slot10;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var5 = _closure1_slot10;
                var3 = var5.getSearchState;
                var2 = _closure2_slot0;
                var1 = var2.id;
                var3 = var3.bind(var5)(var1);
                var4 = var3.mostRecentQuery;
                var1 = {};
                var3 = var3.fetching;
                var1['searchFetching'] = var3;
                var3 = var5.getSearchResults;
                var2 = var2.id;
                var2 = var3.bind(var5)(var2, var4);
                var1['searchResults'] = var2;
                return var1;
            };
            var2 = var6.bind(var7)(var2, var1);
            var1 = var2.searchFetching;
            var _closure2_slot4 = var1;
            var2 = var2.searchResults;
            var _closure2_slot5 = var2;
            var13 = var15.useMemo;
            var7 = new Array(2);
            var7[0] = var2;
            var7[1] = var1;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure2_slot5;
                    var2 = _closure2_slot4;
                    var1 = var4;
                    if(!var2) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    var3 = var4.concat;
                    var2 = _closure1_slot16;
                    var1 = var3.bind(var4)(var2);
case 5:
                    return var1;
                }
            };
            var7 = var13.bind(var15)(var6, var7);
            var13 = _closure1_slot1;
            var6 = 17;
            var6 = var14[var6];
            var6 = var13.bind(var4)(var6);
            var6 = var6.bind(var4)();
            var13 = var6.bottom;
            var6 = _closure1_slot18;
            if(!var3) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var2 = var2.length;
            if(!(var8 === var2)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 11:
            var3 = _closure1_slot12;
            var2 = _closure1_slot15;
            var1 = {};
            var1['channel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            _fun0002_ip = 12; continue _fun0002;
case 9:
            var5 = _closure1_slot12;
            var3 = _closure1_slot8;
            var2 = {};
            var2['data'] = var7;
            var7 = function renderItem(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var6 = var1.item;
                    var1 = null;
                    if(!(var1 == var6)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var1 = _closure1_slot17;
                    _fun0004_ip = 15; continue _fun0004;
case 13:
                    var5 = _closure1_slot12;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 18;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2['entry'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 15:
                    return var1;
                }
            };
            var2['renderItem'] = var7;
            var7 = function keyExtractor(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var3 = arg2;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0005_ip = 13; continue _fun0005 }
case 16:
                    var1 = var3.toString;
                    var1 = var1.bind(var3)();
                    _fun0005_ip = 17; continue _fun0005;
case 13:
                    var1 = var2.guildId;
case 17:
                    return var1;
                }
            };
            var2['keyExtractor'] = var7;
            var7 = function ListEmptyComponent() {
                var1 = _closure2_slot1;
                return var1;
            };
            var2['ListEmptyComponent'] = var7;
            var7 = {};
            var7['right'] = var8;
            var2['scrollIndicatorInsets'] = var7;
            var7 = var10.scrollContainer;
            var2['style'] = var7;
            var7 = {};
            var8 = 16;
            var8 = var13 + var8;
            var7['paddingBottom'] = var8;
            var2['contentContainerStyle'] = var7;
            var1 = var5.bind(var4)(var3, var2);
case 12:
            var6 = var1;
case 7:
            var3 = _closure1_slot13;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var10.flex;
            var1['style'] = var5;
            var8 = _closure1_slot12;
            var16 = _closure1_slot0;
            var17 = _closure1_slot3;
            var5 = 19;
            var5 = var17[var5];
            var5 = var16.bind(var4)(var5);
            var7 = var5.FauxHeader;
            var5 = {};
            var10 = var10.fauxHeader;
            var5['style'] = var10;
            var10 = _closure1_slot1;
            var9 = 20;
            var9 = var17[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var13 = 11;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.nL2wKD;
            var13 = var14.bind(var15)(var13);
            var9['placeholder'] = var13;
            var9['onChange'] = var12;
            var12 = function onClose() {
                var5 = _closure1_slot2;
                var4 = _closure1_slot3;
                var1 = 21;
                var3 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var3);
                var5 = var6.clearDirectorySearch;
                var3 = _closure2_slot0;
                var3 = var3.id;
                var3 = var5.bind(var6)(var3);
                var3 = _closure1_slot1;
                var2 = 22;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.close;
                var2 = var2.bind(var3)();
                return var1;
            };
            var9['onClose'] = var12;
            var11 = function onSubmitEditing() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = var3.trim;
                    var2 = var2.bind(var3)();
                    var3 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                    var5 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var3 = 21;
                    var3 = var7[var3];
                    var4 = undefined;
                    var8 = var5.bind(var4)(var3);
                    var6 = var8.searchDirectoryEntries;
                    var9 = _closure2_slot0;
                    var5 = var9.id;
                    var3 = _closure2_slot3;
                    var3 = var6.bind(var8)(var5, var3);
                    var6 = _closure1_slot1;
                    var5 = 23;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.track;
                    var2 = _closure1_slot11;
                    var5 = var2.GUILD_DIRECTORY_SEARCH;
                    var2 = {};
                    var8 = var9.id;
                    var2['directory_channel_id'] = var8;
                    var8 = var9.getGuildId;
                    var8 = var8.bind(var9)();
                    var2['directory_guild_id'] = var8;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = null;
                    if(!(var2 == var3)) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                    var2 = _closure2_slot2;
                    var1 = true;
                    var1 = var2.bind(var4)(var1);
                    _fun0006_ip = 18; continue _fun0006;
case 20:
                    var2 = var3.then;
                    var1 = function() {
                        var3 = _closure2_slot2;
                        var2 = undefined;
                        var1 = true;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var9['onSubmitEditing'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
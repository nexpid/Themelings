// app/modules/search/native/components/tabs/SearchTabsPage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function SearchTabsPage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = var2.tab;
            var6 = var2.searchContext;
            var _closure2_slot0 = var6;
            var10 = var2.isFocused;
            var9 = var2.selectMediaTab;
            var5 = _closure1_slot4;
            var3 = var5.useState;
            var8 = var3.bind(var5)(var10);
            var7 = _closure1_slot3;
            var5 = undefined;
            var3 = 2;
            var8 = var7.bind(var5)(var8, var3);
            var3 = 0;
            var7 = var8[var3];
            var3 = 1;
            var3 = var8[var3];
            var _closure2_slot1 = var3;
            var12 = _closure1_slot4;
            var11 = var12.useEffect;
            var8 = function() {
                var1 = global;
                var4 = var1.setTimeout;
                var1 = undefined;
                var3 = function() {
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = 10;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var3 = new Array(0);
            var3 = var11.bind(var12)(var8, var3);
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 8;
            var3 = var12[var3];
            var13 = var8.bind(var5)(var3);
            var11 = var13.useStateFromStores;
            var14 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var14;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getChannel;
                    var5 = _closure2_slot0;
                    var6 = var5.type;
                    var1 = _closure1_slot8;
                    var5 = var1.GUILD_CHANNEL;
                    var1 = undefined;
                    if(!(var6 === var5)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure2_slot0;
                    var1 = var4.channelId;
case 2:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var11 = var11.bind(var13)(var3, var1);
            var1 = 9;
            var1 = var12[var1];
            var3 = var8.bind(var5)(var1);
            var1 = var3.useIsChannelSpoilerGated;
            var3 = var1.bind(var3)(var11);
            var1 = 10;
            var1 = var12[var1];
            var8 = var8.bind(var5)(var1);
            var1 = var8.useIsChannelContentGated;
            var1 = var1.bind(var8)(var11);
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = null;
            return var7;
case 4:
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var7 = var6.type;
            var3 = _closure1_slot8;
            var3 = var3.GUILD_CHANNEL;
            if(!(var7 !== var3)) { _fun0001_ip = 9; continue _fun0001 }
case 8:
            var3 = _closure1_slot7;
            var3 = var3.RECENT;
            if(!(var3 !== var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = _closure1_slot7;
            var3 = var3.PEOPLE;
            if(!(var3 !== var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = _closure1_slot7;
            var3 = var3.MEMBERS;
            if(!(var3 !== var4)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = _closure1_slot7;
            var3 = var3.GUILD_CHANNELS;
            if(!(var3 !== var4)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var3 = _closure1_slot7;
            var3 = var3.MEDIA;
            if(!(var3 !== var4)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var3 = _closure1_slot7;
            var3 = var3.FILES;
            if(!(var3 !== var4)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var3 = _closure1_slot7;
            var3 = var3.LINKS;
            if(!(var3 !== var4)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var3 = _closure1_slot7;
            var3 = var3.THREADS;
            if(!(var3 !== var4)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var3 = _closure1_slot7;
            var3 = var3.MESSAGES;
            if(!(var3 !== var4)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var3 = _closure1_slot7;
            var3 = var3.PINS;
            if(!(var3 !== var4)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var3 = null;
            return var3;
case 28:
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 22;
            var3 = var11[var3];
            var7 = var7.bind(var5)(var3);
            var3 = {};
            var3['tab'] = var4;
            var3['searchContext'] = var6;
            var3['isFocused'] = var10;
            var3 = var8.bind(var5)(var7, var3);
            return var3;
case 26:
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 21;
            var3 = var11[var3];
            var7 = var7.bind(var5)(var3);
            var3 = {};
            var3['tab'] = var4;
            var3['searchContext'] = var6;
            var3['isFocused'] = var10;
            var3 = var8.bind(var5)(var7, var3);
            return var3;
case 24:
            var8 = _closure1_slot9;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 20;
            var3 = var11[var3];
            var3 = var7.bind(var5)(var3);
            var7 = var3.SearchTabsThreadScreen;
            var3 = {};
            var3['searchContext'] = var6;
            var3 = var8.bind(var5)(var7, var3);
            return var3;
case 22:
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 19;
            var3 = var11[var3];
            var7 = var7.bind(var5)(var3);
            var3 = {};
            var3['tab'] = var4;
            var3['searchContext'] = var6;
            var3['isFocused'] = var10;
            var3 = var8.bind(var5)(var7, var3);
            return var3;
case 20:
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 18;
            var3 = var11[var3];
            var7 = var7.bind(var5)(var3);
            var3 = {};
            var3['tab'] = var4;
            var3['searchContext'] = var6;
            var3['isFocused'] = var10;
            var3 = var8.bind(var5)(var7, var3);
            return var3;
case 18:
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 17;
            var3 = var11[var3];
            var7 = var7.bind(var5)(var3);
            var3 = {};
            var3['tab'] = var4;
            var3['searchContext'] = var6;
            var3['isFocused'] = var10;
            var3 = var8.bind(var5)(var7, var3);
            return var3;
case 16:
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 16;
            var3 = var10[var3];
            var7 = var7.bind(var5)(var3);
            var3 = {};
            var3['searchContext'] = var6;
            var3 = var8.bind(var5)(var7, var3);
            return var3;
case 14:
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 11;
            var3 = var10[var3];
            var7 = var7.bind(var5)(var3);
            var3 = {};
            var3['searchContext'] = var6;
            var3 = var8.bind(var5)(var7, var3);
            return var3;
case 12:
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 15;
            var3 = var10[var3];
            var7 = var7.bind(var5)(var3);
            var3 = {};
            var3['searchContext'] = var6;
            var3 = var8.bind(var5)(var7, var3);
            return var3;
case 10:
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 14;
            var3 = var10[var3];
            var7 = var7.bind(var5)(var3);
            var3 = {};
            var3['onJumpToMedia'] = var9;
            var3['searchContext'] = var6;
            var3 = var8.bind(var5)(var7, var3);
            return var3;
case 9:
            var3 = _closure1_slot7;
            var3 = var3.MEMBERS;
            if(!(var4 !== var3)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var4 = _closure1_slot9;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            if(var1) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var1 = 13;
            var1 = var8[var1];
            _fun0001_ip = 34; continue _fun0001;
case 32:
            var7 = 12;
            var1 = var8[var7];
case 34:
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var7 = var6.guildId;
            var1['guildId'] = var7;
            var7 = var6.channelId;
            var1['channelId'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 35; continue _fun0001;
case 30:
            var4 = _closure1_slot9;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 11;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['searchContext'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 35:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var11 = 1;
    var5 = var7[var11];
    var2 = metroImportAll;
    var5 = var2.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.SearchTabs;
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.SearchTypes;
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var8 = var9.createStyles;
    var2 = {};
    var10 = {};
    var10['flex'] = var11;
    var2['container'] = var10;
    var2 = var8.bind(var9)(var2);
    var _closure1_slot10 = var2;
    var2 = var5.createContext;
    var2 = var2.bind(var5)(var1);
    var _closure1_slot11 = var2;
    var5 = 25;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/search/native/components/tabs/SearchTabsPage.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ConnectedSearchTabsPage(arg1) {
        var1 = arg1;
        var9 = var1.tab;
        var8 = var1.searchContext;
        var3 = _closure1_slot4;
        var2 = var3.useContext;
        var1 = _closure1_slot11;
        var10 = var2.bind(var3)(var1);
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 23;
        var1 = var3[var1];
        var4 = undefined;
        var7 = var2.bind(var4)(var1);
        var1 = null;
        var6 = var1 != var10;
        var1 = '[SearchTabsPageContext] Context should not be null.';
        var1 = var7.bind(var4)(var6, var1);
        var1 = _closure1_slot10;
        var6 = var1.bind(var4)();
        var1 = 24;
        var1 = var3[var1];
        var2 = var2.bind(var4)(var1);
        var1 = var10.selectedTab;
        var11 = var2.bind(var4)(var1);
        var3 = _closure1_slot9;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var6.container;
        var1['style'] = var6;
        var7 = _closure1_slot9;
        var6 = _closure1_slot12;
        var5 = {};
        var11 = var11 === var9;
        var5['isFocused'] = var11;
        var10 = var10.selectMediaTab;
        var5['selectMediaTab'] = var10;
        var5['tab'] = var9;
        var5['searchContext'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['SearchTabsPageContext'] = var2;
    return var1;
})();
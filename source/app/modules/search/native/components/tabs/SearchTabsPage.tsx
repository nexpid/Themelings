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
            var1 = arg1;
            var10 = var1.tab;
            var5 = var1.searchContext;
            var _closure2_slot0 = var5;
            var9 = var1.isFocused;
            var8 = var1.selectMediaTab;
            var7 = var1.width;
            var4 = _closure1_slot4;
            var3 = var4.useState;
            var11 = var3.bind(var4)(var9);
            var6 = _closure1_slot3;
            var4 = undefined;
            var3 = 2;
            var11 = var6.bind(var4)(var11, var3);
            var3 = 0;
            var6 = var11[var3];
            var3 = 1;
            var3 = var11[var3];
            var _closure2_slot1 = var3;
            var13 = _closure1_slot4;
            var12 = var13.useEffect;
            var11 = function() {
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
            var3 = var12.bind(var13)(var11, var3);
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 8;
            var3 = var13[var3];
            var14 = var11.bind(var4)(var3);
            var12 = var14.useStateFromStores;
            var15 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var15;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getChannel;
                    var5 = _closure2_slot0;
                    var6 = var5.type;
                    var5 = _closure1_slot8;
                    var5 = var5.GUILD_CHANNEL;
                    if(!(var6 !== var5)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure2_slot0;
                    var6 = var5.type;
                    var1 = _closure1_slot8;
                    var5 = var1.THREAD;
                    var1 = undefined;
                    if(!(var6 === var5)) { _fun0002_ip = 4; continue _fun0002 }
case 2:
                    var4 = _closure2_slot0;
                    var1 = var4.channelId;
case 4:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var12 = var12.bind(var14)(var3, var2);
            var2 = 9;
            var2 = var13[var2];
            var3 = var11.bind(var4)(var2);
            var2 = var3.useIsChannelSpoilerGated;
            var2 = var2.bind(var3)(var12);
            var3 = 10;
            var3 = var13[var3];
            var11 = var11.bind(var4)(var3);
            var3 = var11.useIsChannelContentGated;
            var3 = var3.bind(var11)(var12);
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = null;
            return var6;
case 5:
            var6 = _closure1_slot7;
            var6 = var6.MEMBERS;
            if(!(var10 !== var6)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var11 = var5.type;
            var6 = _closure1_slot8;
            var6 = var6.GUILD_CHANNEL;
            if(!(var11 !== var6)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var11 = var5.type;
            var6 = _closure1_slot8;
            var6 = var6.THREAD;
            if(!(var11 === var6)) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            if(var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            if(var2) { _fun0001_ip = 13; continue _fun0001 }
case 7:
            var2 = _closure1_slot7;
            var2 = var2.RECENT;
            if(!(var2 !== var10)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = _closure1_slot7;
            var2 = var2.PEOPLE;
            if(!(var2 !== var10)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = _closure1_slot7;
            var2 = var2.MEMBERS;
            if(!(var2 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = _closure1_slot7;
            var2 = var2.GUILD_CHANNELS;
            if(!(var2 !== var10)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var2 = _closure1_slot7;
            var2 = var2.MEDIA;
            if(!(var2 !== var10)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var2 = _closure1_slot7;
            var2 = var2.FILES;
            if(!(var2 !== var10)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var2 = _closure1_slot7;
            var2 = var2.LINKS;
            if(!(var2 !== var10)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var2 = _closure1_slot7;
            var2 = var2.THREADS;
            if(!(var2 !== var10)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var2 = _closure1_slot7;
            var2 = var2.MESSAGES;
            if(!(var2 !== var10)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var2 = _closure1_slot7;
            var2 = var2.PINS;
            if(!(var2 !== var10)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var2 = null;
            return var2;
case 32:
            var6 = _closure1_slot9;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 22;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['tab'] = var10;
            var2['searchContext'] = var5;
            var2['isFocused'] = var9;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 30:
            var6 = _closure1_slot9;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 21;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['tab'] = var10;
            var2['searchContext'] = var5;
            var2['isFocused'] = var9;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 28:
            var6 = _closure1_slot9;
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 20;
            var2 = var11[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.SearchTabsThreadScreen;
            var2 = {};
            var2['searchContext'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 26:
            var6 = _closure1_slot9;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 19;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['tab'] = var10;
            var2['searchContext'] = var5;
            var2['isFocused'] = var9;
            var2['width'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 24:
            var6 = _closure1_slot9;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 18;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['tab'] = var10;
            var2['searchContext'] = var5;
            var2['isFocused'] = var9;
            var2['width'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 22:
            var6 = _closure1_slot9;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 17;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['tab'] = var10;
            var2['searchContext'] = var5;
            var2['isFocused'] = var9;
            var2['width'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 20:
            var6 = _closure1_slot9;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 16;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['searchContext'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 18:
            var6 = _closure1_slot9;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 15;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['searchContext'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 16:
            var6 = _closure1_slot9;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 14;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['searchContext'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 14:
            var6 = _closure1_slot9;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 13;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['onJumpToMedia'] = var8;
            var2['searchContext'] = var5;
            var2['width'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 13:
            var6 = _closure1_slot9;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 12;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var7 = var5.guildId;
            var2['guildId'] = var7;
            var7 = var5.channelId;
            var2['channelId'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 11:
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 11;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = var5.guildId;
            var1['guildId'] = var6;
            var5 = var5.channelId;
            var1['channelId'] = var5;
            var1 = var3.bind(var4)(var2, var1);
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
        var10 = var1.tab;
        var9 = var1.searchContext;
        var8 = var1.width;
        var3 = _closure1_slot4;
        var2 = var3.useContext;
        var1 = _closure1_slot11;
        var11 = var2.bind(var3)(var1);
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 23;
        var1 = var3[var1];
        var4 = undefined;
        var7 = var2.bind(var4)(var1);
        var1 = null;
        var6 = var1 != var11;
        var1 = '[SearchTabsPageContext] Context should not be null.';
        var1 = var7.bind(var4)(var6, var1);
        var1 = _closure1_slot10;
        var6 = var1.bind(var4)();
        var1 = 24;
        var1 = var3[var1];
        var2 = var2.bind(var4)(var1);
        var1 = var11.selectedTab;
        var12 = var2.bind(var4)(var1);
        var3 = _closure1_slot9;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var6.container;
        var1['style'] = var6;
        var7 = _closure1_slot9;
        var6 = _closure1_slot12;
        var5 = {};
        var12 = var12 === var10;
        var5['isFocused'] = var12;
        var11 = var11.selectMediaTab;
        var5['selectMediaTab'] = var11;
        var5['tab'] = var10;
        var5['searchContext'] = var9;
        var5['width'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['SearchTabsPageContext'] = var2;
    return var1;
})();
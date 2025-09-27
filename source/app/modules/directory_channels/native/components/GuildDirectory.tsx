// app/modules/directory_channels/native/components/GuildDirectory.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = function GuildDirectoryHeaderRowItem(arg1) {
        var1 = arg1;
        var5 = var1.children;
        var2 = _closure1_slot23;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot19;
        var2 = _closure1_slot0;
        var7 = _closure1_slot3;
        var1 = 15;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Text;
        var1 = {'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary'};
        var6 = var6.categorySectionText;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot28 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.View;
    var _closure1_slot5 = var8;
    var8 = var7.Image;
    var _closure1_slot6 = var8;
    var10 = var7.StyleSheet;
    var7 = var7.SectionList;
    var _closure1_slot7 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.DirectoryEntryCategories;
    var _closure1_slot11 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var12 = var7.GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
    var _closure1_slot12 = var12;
    var8 = var7.GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT;
    var _closure1_slot13 = var8;
    var7 = var7.DirectoryChannelScrollBehavior;
    var _closure1_slot14 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.AnalyticsObjectTypes;
    var _closure1_slot15 = var8;
    var8 = var7.AnalyticsObjects;
    var _closure1_slot16 = var8;
    var8 = var7.AnalyticEvents;
    var _closure1_slot17 = var8;
    var7 = var7.GuildFeatures;
    var _closure1_slot18 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot19 = var8;
    var8 = var7.jsxs;
    var _closure1_slot20 = var8;
    var7 = var7.Fragment;
    var _closure1_slot21 = var7;
    var7 = var4.Array;
    var4 = 20;
    var8 = var7.bind(var1)(var4);
    var7 = var8.fill;
    var4 = null;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot22 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = var10.hairlineWidth;
    var9['height'] = var10;
    var10 = 10;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var13;
    var4['border'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var13;
    var4['list'] = var9;
    var9 = {};
    var13 = 'hidden';
    var9['overflow'] = var13;
    var9['height'] = var12;
    var4['headerWrapper'] = var9;
    var9 = {'resizeMode': 'cover', 'width': '100%'};
    var4['backgroundImage'] = var9;
    var9 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'padding': 16, 'alignContent': 'center'};
    var4['textWrapper'] = var9;
    var9 = {'textAlign': 'center', 'marginBottom': 8};
    var4['headerTitle'] = var9;
    var9 = {'lineHeight': 18, 'textAlign': 'center', 'paddingHorizontal': 20, 'marginBottom': 72};
    var4['headerDescription'] = var9;
    var9 = {'flexDirection': 'row', 'padding': 16, 'alignItems': 'center'};
    var4['footer'] = var9;
    var9 = {'marginRight': 16, 'height': 40, 'width': 40, 'alignItems': 'center', 'justifyContent': 'center', 'borderRadius': 20};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var10;
    var4['addIcon'] = var9;
    var9 = {'padding': 16, 'paddingBottom': 4};
    var4['categorySectionText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot23 = var4;
    var4 = function keyExtractor(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = arg2;
            var1 = null;
            var5 = var1 == var2;
            var4 = undefined;
            var6 = undefined;
            if(var5) { _fun0001_ip = 24; continue _fun0001 }
 19:
            var6 = var2.type;
 24:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var5 = 12;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.RowType;
            var5 = var5.ENTRY;
            if(!(var6 !== var5)) { _fun0001_ip = 111; continue _fun0001 }
 63:
            var1 = var1 == var2;
            var5 = undefined;
            if(var1) { _fun0001_ip = 77; continue _fun0001 }
 72:
            var5 = var2.type;
 77:
            var1 = var3.toString;
            var4 = var1.bind(var3)();
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var1 = '';
            var1 = var3.bind(var1)(var5, var4);
            _fun0001_ip = 122; continue _fun0001;
 111:
            var2 = var2.entry;
            var1 = var2.guildId;
 122:
            return var1;
        }
    };
    var _closure1_slot24 = var4;
    var4 = function renderItem(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = var1.item;
            var1 = null;
            var1 = var1 == var5;
            var4 = undefined;
            var3 = undefined;
            if(var1) { _fun0002_ip = 26; continue _fun0002 }
 21:
            var3 = var5.type;
 26:
            var6 = _closure1_slot0;
            var2 = _closure1_slot3;
            var7 = 12;
            var2 = var2[var7];
            var2 = var6.bind(var4)(var2);
            var2 = var2.RowType;
            var2 = var2.HEADER;
            if(!(var2 !== var3)) { _fun0002_ip = 177; continue _fun0002 }
 65:
            var6 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var7];
            var2 = var6.bind(var4)(var2);
            var2 = var2.RowType;
            var2 = var2.ENTRY;
            if(!(var2 !== var3)) { _fun0002_ip = 132; continue _fun0002 }
 98:
            var6 = _closure1_slot19;
            var3 = _closure1_slot1;
            var7 = _closure1_slot3;
            var2 = 14;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 132:
            var6 = _closure1_slot19;
            var3 = _closure1_slot1;
            var7 = _closure1_slot3;
            var2 = 13;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var7 = var5.entry;
            var2['entry'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 177:
            var3 = _closure1_slot19;
            var2 = _closure1_slot28;
            var1 = {};
            var5 = var5.header;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot25 = var4;
    var4 = function GuildDirectoryHeader(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var10 = var1.guild;
            var18 = var1.onPressSearch;
            var1 = _closure1_slot23;
            var4 = undefined;
            var20 = var1.bind(var4)();
            var3 = var10.features;
            var2 = var3.has;
            var1 = _closure1_slot18;
            var1 = var1.HUB;
            var8 = var2.bind(var3)(var1);
            var3 = _closure1_slot20;
            var2 = _closure1_slot21;
            var1 = {};
            var6 = _closure1_slot5;
            var5 = {};
            var9 = var20.headerWrapper;
            var5['style'] = var9;
            var12 = _closure1_slot19;
            var11 = _closure1_slot6;
            var9 = {};
            var14 = _closure1_slot0;
            var16 = _closure1_slot3;
            var13 = 16;
            var13 = var16[var13];
            var13 = var14.bind(var4)(var13);
            var9['source'] = var13;
            var13 = var20.backgroundImage;
            var9['style'] = var13;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var11 = {};
            var12 = var20.textWrapper;
            var11['style'] = var12;
            var17 = _closure1_slot19;
            var13 = 15;
            var12 = var16[var13];
            var12 = var14.bind(var4)(var12);
            var15 = var12.Text;
            var12 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'always-white'};
            var19 = var20.headerTitle;
            var12['style'] = var19;
            var19 = 17;
            var21 = var16[var19];
            var21 = var14.bind(var4)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var16[var19];
            var21 = var14.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.IT7qoK;
            var21 = var22.bind(var23)(var21);
            var12['children'] = var21;
            var15 = var17.bind(var4)(var15, var12);
            var12 = new Array(4);
            var12[0] = var15;
            var17 = _closure1_slot19;
            var13 = var16[var13];
            var13 = var14.bind(var4)(var13);
            var15 = var13.Text;
            var13 = {'style': null, 'variant': 'text-sm/medium', 'color': 'always-white'};
            var21 = var20.headerDescription;
            var20 = new Array(1);
            var20[0] = var21;
            var13['style'] = var20;
            var20 = var16[var19];
            var20 = var14.bind(var4)(var20);
            var22 = var20.intl;
            var21 = var22.string;
            var20 = var16[var19];
            var20 = var14.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.5PoYtr;
            var20 = var21.bind(var22)(var20);
            var13['children'] = var20;
            var13 = var17.bind(var4)(var15, var13);
            var12[1] = var13;
            var17 = _closure1_slot19;
            var13 = 18;
            var13 = var16[var13];
            var13 = var14.bind(var4)(var13);
            var15 = var13.Button;
            var13 = {};
            var20 = 'primary-overlay';
            var13['variant'] = var20;
            var22 = _closure1_slot19;
            var20 = 19;
            var20 = var16[var20];
            var20 = var14.bind(var4)(var20);
            var21 = var20.MagnifyingGlassIcon;
            var20 = {'size': 'sm', 'color': 'text-primary'};
            var20 = var22.bind(var4)(var21, var20);
            var13['icon'] = var20;
            var20 = var16[var19];
            var20 = var14.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var16[var19];
            var19 = var14.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.nL2wKC;
            var19 = var20.bind(var21)(var19);
            var13['text'] = var19;
            var13['onPress'] = var18;
            var13 = var17.bind(var4)(var15, var13);
            var12[2] = var13;
            var15 = _closure1_slot19;
            var13 = 20;
            var13 = var16[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.TTIFirstContentfulPaint;
            var13 = {};
            var16 = 'hub_directory';
            var13['label'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[3] = var13;
            var11['children'] = var12;
            var11 = var3.bind(var4)(var6, var11);
            var9[1] = var11;
            var5['children'] = var9;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            if(!var8) { _fun0003_ip = 641; continue _fun0003 }
 598:
            var9 = _closure1_slot19;
            var8 = _closure1_slot1;
            var11 = _closure1_slot3;
            var7 = 21;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['guild'] = var10;
            var10 = true;
            var7['onDirectoryPage'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 641:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot26 = var4;
    var4 = function GuildDirectoryFooter(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = var1.guild;
            var _closure2_slot0 = var2;
            var4 = var1.channel;
            var _closure2_slot1 = var4;
            var2 = var1.hideFooter;
            var1 = _closure1_slot23;
            var5 = undefined;
            var12 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var7 = _closure1_slot3;
            var1 = 22;
            var1 = var7[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useCanCreateOrAddGuildInDirectory;
            var4 = var1.bind(var3)(var4);
            var1 = null;
            if(!var4) { _fun0004_ip = 388; continue _fun0004 }
 81:
            var1 = null;
            if(var2) { _fun0004_ip = 388; continue _fun0004 }
 89:
            var4 = _closure1_slot19;
            var16 = _closure1_slot0;
            var17 = _closure1_slot3;
            var2 = 23;
            var2 = var17[var2];
            var2 = var16.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var7 = 'button';
            var2['accessibilityRole'] = var7;
            var13 = 17;
            var7 = var17[var13];
            var7 = var16.bind(var5)(var7);
            var9 = var7.intl;
            var8 = var9.string;
            var7 = var17[var13];
            var7 = var16.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.H9jxS0;
            var7 = var8.bind(var9)(var7);
            var2['accessibilityLabel'] = var7;
            var6 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.open;
                var1 = {};
                var5 = _closure2_slot0;
                var6 = var5.name;
                var1['directoryGuildName'] = var6;
                var5 = var5.id;
                var1['directoryGuildId'] = var5;
                var4 = _closure2_slot1;
                var4 = var4.id;
                var1['directoryChannelId'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['onPress'] = var6;
            var8 = _closure1_slot20;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var12.footer;
            var6['style'] = var9;
            var11 = _closure1_slot19;
            var9 = {};
            var12 = var12.addIcon;
            var9['style'] = var12;
            var15 = _closure1_slot19;
            var12 = 25;
            var12 = var17[var12];
            var12 = var16.bind(var5)(var12);
            var14 = var12.PlusMediumIcon;
            var12 = {};
            var12 = var15.bind(var5)(var14, var12);
            var9['children'] = var12;
            var11 = var11.bind(var5)(var7, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot19;
            var10 = 15;
            var10 = var17[var10];
            var10 = var16.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.H9jxS0;
            var13 = var14.bind(var15)(var13);
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 388:
            return var1;
        }
    };
    var _closure1_slot27 = var4;
    var4 = 37;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/directory_channels/native/components/GuildDirectory.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var18 = var1.channel;
            var _closure2_slot0 = var18;
            var1 = var1.guildId;
            var _closure2_slot1 = var1;
            var6 = undefined;
            var _closure2_slot14 = var6;
            var1 = _closure1_slot23;
            var11 = var1.bind(var6)();
            var8 = _closure1_slot0;
            var17 = _closure1_slot3;
            var2 = 26;
            var1 = var17[var2];
            var5 = var8.bind(var6)(var1);
            var4 = var5.useStateFromStores;
            var1 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var4.bind(var5)(var3, var1);
            var _closure2_slot2 = var16;
            var15 = _closure1_slot4;
            var3 = var15.useRef;
            var1 = null;
            var3 = var3.bind(var15)(var1);
            var _closure2_slot3 = var3;
            var4 = _closure1_slot1;
            var3 = 27;
            var3 = var17[var3];
            var3 = var4.bind(var6)(var3);
            var3 = var3.bind(var6)();
            var14 = var3.bottom;
            var3 = 11;
            var4 = var17[var3];
            var5 = var8.bind(var6)(var4);
            var4 = var5.useHubProgressBarCompletedSteps;
            var5 = var4.bind(var5)(var16);
            var3 = var17[var3];
            var4 = var8.bind(var6)(var3);
            var3 = var4.getNextHubProgressStep;
            var3 = var3.bind(var4)(var5);
            if(!(var1 != var3)) { _fun0005_ip = 200; continue _fun0005 }
 186:
            var4 = _closure1_slot13;
            var3 = _closure1_slot12;
            var3 = var4 + var3;
            _fun0005_ip = 204; continue _fun0005;
 200:
            var3 = _closure1_slot12;
 204:
            var _closure2_slot4 = var3;
            var2 = var17[var2];
            var5 = var8.bind(var6)(var2);
            var4 = var5.useStateFromStoresObject;
            var2 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var8 = _closure1_slot10;
                    var5 = var8.getCurrentCategoryId;
                    var3 = _closure2_slot0;
                    var4 = var3.id;
                    var5 = var5.bind(var8)(var4);
                    var6 = var8.getDirectoryEntries;
                    var4 = var3.id;
                    var3 = _closure1_slot11;
                    var9 = var3.ALL;
                    var7 = null;
                    var3 = null;
                    if(!(var5 !== var9)) { _fun0006_ip = 62; continue _fun0006 }
 59:
                    var3 = var5;
 62:
                    var6 = var6.bind(var8)(var4, var3);
                    var8 = _closure1_slot10;
                    var3 = var8.getDirectoryAllEntriesCount;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var3 = var3.bind(var8)(var2);
                    var2 = var8.getDirectoryCategoryCounts;
                    var1 = var1.id;
                    var2 = var2.bind(var8)(var1);
                    var1 = {};
                    var1['currentCategoryId'] = var5;
                    var1['directoryEntries'] = var6;
                    var4 = var8.isFetching;
                    var4 = var4.bind(var8)();
                    if(var4) { _fun0006_ip = 151; continue _fun0006 }
 137:
                    var5 = var7 === var5;
                    if(!var5) { _fun0006_ip = 148; continue _fun0006 }
 144:
                    var5 = var7 == var6;
 148:
                    var4 = var5;
 151:
                    var1['directoryIsFetching'] = var4;
                    var1['allEntriesCount'] = var3;
                    var1['categoryCounts'] = var2;
                    return var1;
                }
            };
            var7 = var4.bind(var5)(var3, var2);
            var5 = var7.currentCategoryId;
            var _closure2_slot5 = var5;
            var2 = var7.directoryEntries;
            var _closure2_slot6 = var2;
            var4 = var7.directoryIsFetching;
            var _closure2_slot7 = var4;
            var3 = var7.allEntriesCount;
            var _closure2_slot8 = var3;
            var7 = var7.categoryCounts;
            var _closure2_slot9 = var7;
            var13 = var15.useEffect;
            var12 = new Array(2);
            var12[0] = var2;
            var12[1] = var4;
            var7 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 28;
                    var3 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.trackAppUIViewed;
                    var3 = var3.bind(var5)();
                    var3 = _closure1_slot1;
                    var2 = 29;
                    var2 = var4[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.recordRender;
                    var2 = global;
                    var7 = var2.Object;
                    var6 = var7.keys;
                    var8 = _closure2_slot6;
                    var3 = null;
                    if(!(var3 == var8)) { _fun0007_ip = 87; continue _fun0007 }
 83:
                    var3 = {};
                    _fun0007_ip = 91; continue _fun0007;
 87:
                    var3 = _closure2_slot6;
 91:
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.length;
                    var2 = _closure2_slot7;
                    var2 = !var2;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var7 = var13.bind(var15)(var7, var12);
            var13 = var15.useEffect;
            var7 = var18.id;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = function() {
                var1 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var5 = _closure1_slot9;
                        var4 = var5.lastMessageId;
                        var3 = _closure2_slot0;
                        var3 = var3.id;
                        var6 = var4.bind(var5)(var3);
                        var3 = null;
                        if(!(var3 != var6)) { _fun0008_ip = 122; continue _fun0008 }
 36:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var3 = 30;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.ack;
                        var2 = _closure2_slot0;
                        var12 = var2.id;
                        var2 = {};
                        var7 = _closure1_slot16;
                        var7 = var7.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED;
                        var2['object'] = var7;
                        var1 = _closure1_slot15;
                        var1 = var1.ACK_AUTOMATIC;
                        var2['objectType'] = var1;
                        var13 = var5;
                        var11 = var2;
                        var10 = true;
                        var9 = true;
                        var8 = var6;
                        var1 = var13[var4](var12, var11, var10, var9, var8, var7);
 122:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var7 = var13.bind(var15)(var7, var12);
            var12 = var15.useMemo;
            var7 = new Array(3);
            var7[0] = var4;
            var7[1] = var2;
            var7[2] = var5;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot7;
                    if(var1) { _fun0009_ip = 96; continue _fun0009 }
 10:
                    var3 = _closure2_slot6;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0009_ip = 26; continue _fun0009 }
 20:
                    var1 = new Array(0);
                    _fun0009_ip = 94; continue _fun0009;
 26:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 12;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.generateDirectoryRows;
                    var4 = _closure2_slot7;
                    var3 = global;
                    var8 = var3.Object;
                    var7 = var8.values;
                    var3 = _closure2_slot6;
                    var3 = var7.bind(var8)(var3);
                    var2 = _closure2_slot5;
                    var1 = var5.bind(var6)(var4, var3, var2);
 94:
                    _fun0009_ip = 103; continue _fun0009;
 96:
                    var1 = _closure1_slot22;
 103:
                    return var1;
                }
            };
            var12 = var12.bind(var15)(var2, var7);
            var2 = var15.useRef;
            var13 = var2.bind(var15)(var1);
            var _closure2_slot10 = var13;
            var7 = var15.useRef;
            var2 = 0;
            var7 = var7.bind(var15)(var2);
            var _closure2_slot11 = var7;
            var7 = 31;
            var19 = var17[var7];
            var20 = var8.bind(var6)(var19);
            var19 = var20.useLocation;
            var19 = var19.bind(var20)();
            var _closure2_slot12 = var19;
            var7 = var17[var7];
            var8 = var8.bind(var6)(var7);
            var7 = var8.useHistory;
            var7 = var7.bind(var8)();
            var _closure2_slot13 = var7;
            var17 = var15.useEffect;
            var8 = new Array(2);
            var8[0] = var19;
            var8[1] = var7;
            var7 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = _closure2_slot12;
                    var4 = var1.state;
                    var3 = null;
                    var6 = var3 == var4;
                    var1 = undefined;
                    var5 = undefined;
                    if(var6) { _fun0010_ip = 31; continue _fun0010 }
 25:
                    var5 = var4.scrollBehavior;
 31:
                    var4 = _closure1_slot14;
                    var4 = var4.GUILD_LIST_TOP;
                    if(!(var5 === var4)) { _fun0010_ip = 108; continue _fun0010 }
 48:
                    var4 = _closure2_slot10;
                    var5 = var4.current;
                    if(!(var3 != var5)) { _fun0010_ip = 86; continue _fun0010 }
 61:
                    var4 = var5.scrollToLocation;
                    var3 = {'sectionIndex': 0, 'itemIndex': 0, 'animated': true, 'viewOffset': 0};
                    var3 = var4.bind(var5)(var3);
 86:
                    var4 = _closure2_slot13;
                    var3 = var4.replace;
                    var2 = {};
                    var5 = {};
                    var2['state'] = var5;
                    var2 = var3.bind(var4)(var2);
 108:
                    return var1;
                }
            };
            var7 = var17.bind(var15)(var7, var8);
            var17 = var15.useEffect;
            var7 = var18.id;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var4 = _closure1_slot2;
                var5 = _closure1_slot3;
                var3 = 32;
                var2 = var5[var3];
                var1 = undefined;
                var8 = var4.bind(var1)(var2);
                var7 = var8.fetchDirectoryEntries;
                var2 = _closure2_slot0;
                var6 = var2.id;
                var6 = var7.bind(var8)(var6);
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.fetchDirectoryCounts;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7 = var17.bind(var15)(var7, var8);
            var8 = var15.useEffect;
            var7 = var1 == var16;
            var17 = undefined;
            if(var7) { _fun0005_ip = 552; continue _fun0005 }
 547:
            var17 = var16.id;
 552:
            var7 = new Array(3);
            var7[0] = var17;
            var17 = var18.id;
            var7[1] = var17;
            var7[2] = var5;
            var5 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 33;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot17;
                    var3 = var2.GUILD_DIRECTORY_CHANNEL_VIEWED;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var7 = var7.id;
                    var2['directory_channel_id'] = var7;
                    var8 = _closure2_slot2;
                    var7 = null;
                    var8 = var7 == var8;
                    var7 = undefined;
                    if(var8) { _fun0011_ip = 83; continue _fun0011 }
 74:
                    var8 = _closure2_slot2;
                    var7 = var8.id;
 83:
                    var2['directory_guild_id'] = var7;
                    var6 = _closure2_slot5;
                    var2['primary_category_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var5 = var8.bind(var15)(var5, var7);
            var15 = _closure1_slot4;
            var8 = var15.useEffect;
            var7 = new Array(1);
            var7[0] = var12;
            var5 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var2 = _closure2_slot3;
                    var2 = var2.current;
                    if(!var2) { _fun0012_ip = 65; continue _fun0012 }
 15:
                    var2 = _closure2_slot10;
                    var5 = var2.current;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0012_ip = 55; continue _fun0012 }
 30:
                    var4 = var5.scrollToLocation;
                    var3 = {'sectionIndex': 0, 'itemIndex': 0, 'animated': true, 'viewOffset': 0};
                    var3 = var4.bind(var5)(var3);
 55:
                    var1 = _closure2_slot3;
                    var1['current'] = var2;
 65:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var8.bind(var15)(var5, var7);
            var5 = function handleTapCategory() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = _closure2_slot11;
                    var3 = var2.current;
                    var2 = _closure2_slot4;
                    if(!(var3 >= var2)) { _fun0013_ip = 32; continue _fun0013 }
 20:
                    var2 = _closure2_slot3;
                    var1 = true;
                    var2['current'] = var1;
 32:
                    var1 = undefined;
                    return var1;
                }
            };
            _closure2_slot14 = var5;
            var5 = var1 == var16;
            var1 = null;
            if(var5) { _fun0005_ip = 1018; continue _fun0005 }
 639:
            if(var4) { _fun0005_ip = 810; continue _fun0005 }
 645:
            if(!(var2 === var3)) { _fun0005_ip = 810; continue _fun0005 }
 652:
            var4 = _closure1_slot20;
            var3 = _closure1_slot5;
            var2 = {};
            var5 = {};
            var5['paddingBottom'] = var14;
            var2['style'] = var5;
            var7 = _closure1_slot19;
            var5 = {};
            var8 = var11.border;
            var5['style'] = var8;
            var7 = var7.bind(var6)(var3, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var15 = _closure1_slot19;
            var8 = _closure1_slot1;
            var17 = _closure1_slot3;
            var7 = 34;
            var7 = var17[var7];
            var8 = var8.bind(var6)(var7);
            var7 = {};
            var7['guild'] = var16;
            var7['channel'] = var18;
            var7 = var15.bind(var6)(var8, var7);
            var5[1] = var7;
            var15 = _closure1_slot19;
            var8 = _closure1_slot0;
            var7 = 20;
            var7 = var17[var7];
            var7 = var8.bind(var6)(var7);
            var8 = var7.TTIFirstContentfulPaint;
            var7 = {};
            var17 = 'guild_directory_empty';
            var7['label'] = var17;
            var7 = var15.bind(var6)(var8, var7);
            var5[2] = var7;
            var2['children'] = var5;
            var2 = var4.bind(var6)(var3, var2);
            _fun0005_ip = 1015; continue _fun0005;
 810:
            var5 = _closure1_slot19;
            var4 = _closure1_slot5;
            var3 = {};
            var8 = _closure1_slot7;
            var7 = {};
            var7['ref'] = var13;
            var13 = function onScroll(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.contentOffset;
                var2 = var1.y;
                var1 = _closure2_slot11;
                var1['current'] = var2;
                var1 = undefined;
                return var1;
            };
            var7['onScroll'] = var13;
            var13 = 16;
            var7['scrollEventThrottle'] = var13;
            var13 = {};
            var13['paddingBottom'] = var14;
            var7['contentContainerStyle'] = var13;
            var13 = 10;
            var7['windowSize'] = var13;
            var15 = _closure1_slot19;
            var14 = _closure1_slot26;
            var13 = {};
            var13['guild'] = var16;
            var16 = function onPressSearch() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 35;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var5 = _closure2_slot0;
                var2['channel'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var13['onPressSearch'] = var16;
            var13 = var15.bind(var6)(var14, var13);
            var7['ListHeaderComponent'] = var13;
            var13 = {};
            var13['data'] = var12;
            var12 = new Array(1);
            var12[0] = var13;
            var7['sections'] = var12;
            var12 = true;
            var7['stickySectionHeadersEnabled'] = var12;
            var11 = var11.list;
            var7['style'] = var11;
            var11 = {};
            var12 = 1;
            var11['right'] = var12;
            var7['scrollIndicatorInsets'] = var11;
            var11 = _closure1_slot24;
            var7['keyExtractor'] = var11;
            var10 = _closure1_slot25;
            var7['renderItem'] = var10;
            var10 = function renderSectionHeader() {
                var4 = _closure1_slot19;
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 36;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot14;
                var1['onCategorySelected'] = var6;
                var6 = _closure2_slot0;
                var1['channel'] = var6;
                var6 = _closure2_slot9;
                var1['categoryCounts'] = var6;
                var5 = _closure2_slot8;
                var1['allEntriesCount'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var7['renderSectionHeader'] = var10;
            var9 = function ListFooterComponent() {
                var4 = _closure1_slot19;
                var3 = _closure1_slot27;
                var2 = {};
                var5 = _closure2_slot2;
                var2['guild'] = var5;
                var1 = _closure2_slot0;
                var2['channel'] = var1;
                var1 = false;
                var2['hideFooter'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var7['ListFooterComponent'] = var9;
            var7 = var5.bind(var6)(var8, var7);
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 1015:
            var1 = var2;
 1018:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
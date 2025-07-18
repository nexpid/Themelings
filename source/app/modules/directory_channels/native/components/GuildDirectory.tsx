// app/modules/directory_channels/native/components/GuildDirectory.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var8 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = function GuildDirectoryHeaderRowItem(arg1) {
        var1 = arg1;
        var5 = var1.children;
        var2 = _closure1_slot24;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot20;
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
    var _closure1_slot29 = var1;
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
    var8 = var7.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot18 = var8;
    var7 = var7.GuildFeatures;
    var _closure1_slot19 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot20 = var8;
    var8 = var7.jsxs;
    var _closure1_slot21 = var8;
    var7 = var7.Fragment;
    var _closure1_slot22 = var7;
    var7 = var4.Array;
    var4 = 20;
    var8 = var7.bind(var1)(var4);
    var7 = var8.fill;
    var4 = null;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot23 = var4;
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
    var _closure1_slot24 = var4;
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
    var _closure1_slot25 = var4;
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
            var6 = _closure1_slot20;
            var3 = _closure1_slot1;
            var7 = _closure1_slot3;
            var2 = 14;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 132:
            var6 = _closure1_slot20;
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
            var3 = _closure1_slot20;
            var2 = _closure1_slot29;
            var1 = {};
            var5 = var5.header;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot26 = var4;
    var4 = function GuildDirectoryHeader(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var10 = var1.guild;
            var16 = var1.onPressSearch;
            var1 = _closure1_slot24;
            var4 = undefined;
            var18 = var1.bind(var4)();
            var3 = var10.features;
            var2 = var3.has;
            var1 = _closure1_slot19;
            var1 = var1.HUB;
            var8 = var2.bind(var3)(var1);
            var3 = _closure1_slot21;
            var2 = _closure1_slot22;
            var1 = {};
            var6 = _closure1_slot5;
            var5 = {};
            var9 = var18.headerWrapper;
            var5['style'] = var9;
            var12 = _closure1_slot20;
            var11 = _closure1_slot6;
            var9 = {};
            var20 = _closure1_slot0;
            var21 = _closure1_slot3;
            var13 = 16;
            var13 = var21[var13];
            var13 = var20.bind(var4)(var13);
            var9['source'] = var13;
            var13 = var18.backgroundImage;
            var9['style'] = var13;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var11 = {};
            var12 = var18.textWrapper;
            var11['style'] = var12;
            var15 = _closure1_slot20;
            var13 = 15;
            var12 = var21[var13];
            var12 = var20.bind(var4)(var12);
            var14 = var12.Text;
            var12 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'always-white'};
            var17 = var18.headerTitle;
            var12['style'] = var17;
            var17 = 17;
            var19 = var21[var17];
            var19 = var20.bind(var4)(var19);
            var23 = var19.intl;
            var22 = var23.string;
            var19 = var21[var17];
            var19 = var20.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.IT7qoK;
            var19 = var22.bind(var23)(var19);
            var12['children'] = var19;
            var14 = var15.bind(var4)(var14, var12);
            var12 = new Array(3);
            var12[0] = var14;
            var15 = _closure1_slot20;
            var13 = var21[var13];
            var13 = var20.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {'style': null, 'variant': 'text-sm/medium', 'color': 'always-white'};
            var19 = var18.headerDescription;
            var18 = new Array(1);
            var18[0] = var19;
            var13['style'] = var18;
            var18 = var21[var17];
            var18 = var20.bind(var4)(var18);
            var22 = var18.intl;
            var19 = var22.string;
            var18 = var21[var17];
            var18 = var20.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.5PoYtr;
            var18 = var19.bind(var22)(var18);
            var13['children'] = var18;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var15 = _closure1_slot20;
            var13 = 18;
            var13 = var21[var13];
            var13 = var20.bind(var4)(var13);
            var14 = var13.Button;
            var13 = {};
            var18 = 'primary-overlay';
            var13['variant'] = var18;
            var22 = _closure1_slot20;
            var18 = 19;
            var18 = var21[var18];
            var18 = var20.bind(var4)(var18);
            var19 = var18.MagnifyingGlassIcon;
            var18 = {'size': 'sm', 'color': 'text-primary'};
            var18 = var22.bind(var4)(var19, var18);
            var13['icon'] = var18;
            var18 = var21[var17];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.nL2wKC;
            var17 = var18.bind(var19)(var17);
            var13['text'] = var17;
            var13['onPress'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[2] = var13;
            var11['children'] = var12;
            var11 = var3.bind(var4)(var6, var11);
            var9[1] = var11;
            var5['children'] = var9;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            if(!var8) { _fun0003_ip = 597; continue _fun0003 }
 554:
            var9 = _closure1_slot20;
            var8 = _closure1_slot1;
            var11 = _closure1_slot3;
            var7 = 20;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['guild'] = var10;
            var10 = true;
            var7['onDirectoryPage'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 597:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot27 = var4;
    var4 = function GuildDirectoryFooter(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = var1.guild;
            var _closure2_slot0 = var2;
            var4 = var1.channel;
            var _closure2_slot1 = var4;
            var2 = var1.hideFooter;
            var1 = _closure1_slot24;
            var5 = undefined;
            var12 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var7 = _closure1_slot3;
            var1 = 21;
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
            var4 = _closure1_slot20;
            var16 = _closure1_slot0;
            var17 = _closure1_slot3;
            var2 = 22;
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
                var1 = 23;
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
            var8 = _closure1_slot21;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var12.footer;
            var6['style'] = var9;
            var11 = _closure1_slot20;
            var9 = {};
            var12 = var12.addIcon;
            var9['style'] = var12;
            var15 = _closure1_slot20;
            var12 = 24;
            var12 = var17[var12];
            var12 = var16.bind(var5)(var12);
            var14 = var12.PlusMediumIcon;
            var12 = {};
            var12 = var15.bind(var5)(var14, var12);
            var9['children'] = var12;
            var11 = var11.bind(var5)(var7, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot20;
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
    var _closure1_slot28 = var4;
    var4 = 38;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/directory_channels/native/components/GuildDirectory.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var17 = var1.channel;
            var _closure2_slot0 = var17;
            var2 = var1.guildId;
            var _closure2_slot1 = var2;
            var6 = undefined;
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var6;
            var _closure2_slot5 = var6;
            var _closure2_slot6 = var6;
            var _closure2_slot7 = var6;
            var _closure2_slot8 = var6;
            var _closure2_slot9 = var6;
            var _closure2_slot10 = var6;
            var _closure2_slot11 = var6;
            var _closure2_slot12 = var6;
            var _closure2_slot13 = var6;
            var _closure2_slot14 = var6;
            var _closure2_slot15 = var6;
            var1 = _closure1_slot24;
            var11 = var1.bind(var6)();
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 25;
            var1 = var4[var1];
            var5 = var3.bind(var6)(var1);
            var4 = var5.useExperiment;
            var3 = {};
            var1 = null;
            if(!(var1 == var2)) { _fun0005_ip = 130; continue _fun0005 }
 126:
            var2 = _closure1_slot18;
 130:
            var3['guildId'] = var2;
            var2 = '6f7fb0_4';
            var3['location'] = var2;
            var2 = {};
            var7 = false;
            var2['autoTrackExposure'] = var7;
            var2 = var4.bind(var5)(var3, var2);
            var7 = var2.showHubEventsList;
            _closure2_slot2 = var7;
            var18 = _closure1_slot0;
            var19 = _closure1_slot3;
            var2 = 26;
            var3 = var19[var2];
            var8 = var18.bind(var6)(var3);
            var5 = var8.useStateFromStores;
            var3 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var5.bind(var8)(var4, var3);
            _closure2_slot3 = var16;
            var15 = _closure1_slot4;
            var3 = var15.useRef;
            var3 = var3.bind(var15)(var1);
            _closure2_slot4 = var3;
            var4 = _closure1_slot1;
            var3 = 27;
            var3 = var19[var3];
            var3 = var4.bind(var6)(var3);
            var3 = var3.bind(var6)();
            var14 = var3.bottom;
            var3 = 11;
            var4 = var19[var3];
            var5 = var18.bind(var6)(var4);
            var4 = var5.useHubProgressBarCompletedSteps;
            var5 = var4.bind(var5)(var16);
            var3 = var19[var3];
            var4 = var18.bind(var6)(var3);
            var3 = var4.getNextHubProgressStep;
            var3 = var3.bind(var4)(var5);
            if(!(var1 != var3)) { _fun0005_ip = 327; continue _fun0005 }
 313:
            var4 = _closure1_slot13;
            var3 = _closure1_slot12;
            var3 = var4 + var3;
            _fun0005_ip = 331; continue _fun0005;
 327:
            var3 = _closure1_slot12;
 331:
            _closure2_slot5 = var3;
            var2 = var19[var2];
            var5 = var18.bind(var6)(var2);
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
            var8 = var4.bind(var5)(var3, var2);
            var5 = var8.currentCategoryId;
            _closure2_slot6 = var5;
            var2 = var8.directoryEntries;
            _closure2_slot7 = var2;
            var4 = var8.directoryIsFetching;
            _closure2_slot8 = var4;
            var3 = var8.allEntriesCount;
            _closure2_slot9 = var3;
            var8 = var8.categoryCounts;
            _closure2_slot10 = var8;
            var13 = var15.useEffect;
            var12 = new Array(2);
            var12[0] = var2;
            var12[1] = var4;
            var8 = function() {
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
                    var8 = _closure2_slot7;
                    var3 = null;
                    if(!(var3 == var8)) { _fun0007_ip = 87; continue _fun0007 }
 83:
                    var3 = {};
                    _fun0007_ip = 91; continue _fun0007;
 87:
                    var3 = _closure2_slot7;
 91:
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.length;
                    var2 = _closure2_slot8;
                    var2 = !var2;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var8 = var13.bind(var15)(var8, var12);
            var13 = var15.useEffect;
            var8 = var17.id;
            var12 = new Array(1);
            var12[0] = var8;
            var8 = function() {
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
            var8 = var13.bind(var15)(var8, var12);
            var12 = var15.useMemo;
            var8 = new Array(3);
            var8[0] = var4;
            var8[1] = var2;
            var8[2] = var5;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot8;
                    if(var1) { _fun0009_ip = 96; continue _fun0009 }
 10:
                    var3 = _closure2_slot7;
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
                    var4 = _closure2_slot8;
                    var3 = global;
                    var8 = var3.Object;
                    var7 = var8.values;
                    var3 = _closure2_slot7;
                    var3 = var7.bind(var8)(var3);
                    var2 = _closure2_slot6;
                    var1 = var5.bind(var6)(var4, var3, var2);
 94:
                    _fun0009_ip = 103; continue _fun0009;
 96:
                    var1 = _closure1_slot23;
 103:
                    return var1;
                }
            };
            var12 = var12.bind(var15)(var2, var8);
            var2 = var15.useRef;
            var13 = var2.bind(var15)(var1);
            _closure2_slot11 = var13;
            var8 = var15.useRef;
            var2 = 0;
            var8 = var8.bind(var15)(var2);
            _closure2_slot12 = var8;
            var8 = 31;
            var20 = var19[var8];
            var21 = var18.bind(var6)(var20);
            var20 = var21.useLocation;
            var20 = var20.bind(var21)();
            _closure2_slot13 = var20;
            var8 = var19[var8];
            var18 = var18.bind(var6)(var8);
            var8 = var18.useHistory;
            var8 = var8.bind(var18)();
            _closure2_slot14 = var8;
            var19 = var15.useEffect;
            var18 = new Array(2);
            var18[0] = var20;
            var18[1] = var8;
            var8 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = _closure2_slot13;
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
                    var4 = _closure2_slot11;
                    var5 = var4.current;
                    if(!(var3 != var5)) { _fun0010_ip = 86; continue _fun0010 }
 61:
                    var4 = var5.scrollToLocation;
                    var3 = {'sectionIndex': 0, 'itemIndex': 0, 'animated': true, 'viewOffset': 0};
                    var3 = var4.bind(var5)(var3);
 86:
                    var4 = _closure2_slot14;
                    var3 = var4.replace;
                    var2 = {};
                    var5 = {};
                    var2['state'] = var5;
                    var2 = var3.bind(var4)(var2);
 108:
                    return var1;
                }
            };
            var8 = var19.bind(var15)(var8, var18);
            var19 = var15.useEffect;
            var8 = var17.id;
            var18 = new Array(1);
            var18[0] = var8;
            var8 = function() {
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
            var8 = var19.bind(var15)(var8, var18);
            var18 = var15.useEffect;
            var8 = new Array(2);
            var8[0] = var7;
            var7 = var17.id;
            var8[1] = var7;
            var7 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0011_ip = 55; continue _fun0011 }
 10:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 33;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchDirectoryEntries;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var18.bind(var15)(var7, var8);
            var8 = var15.useEffect;
            var7 = var1 == var16;
            var18 = undefined;
            if(var7) { _fun0005_ip = 714; continue _fun0005 }
 709:
            var18 = var16.id;
 714:
            var7 = new Array(3);
            var7[0] = var18;
            var18 = var17.id;
            var7[1] = var18;
            var7[2] = var5;
            var5 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 34;
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
                    var8 = _closure2_slot3;
                    var7 = null;
                    var8 = var7 == var8;
                    var7 = undefined;
                    if(var8) { _fun0012_ip = 83; continue _fun0012 }
 74:
                    var8 = _closure2_slot3;
                    var7 = var8.id;
 83:
                    var2['directory_guild_id'] = var7;
                    var6 = _closure2_slot6;
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
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = _closure2_slot4;
                    var2 = var2.current;
                    if(!var2) { _fun0013_ip = 65; continue _fun0013 }
 15:
                    var2 = _closure2_slot11;
                    var5 = var2.current;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0013_ip = 55; continue _fun0013 }
 30:
                    var4 = var5.scrollToLocation;
                    var3 = {'sectionIndex': 0, 'itemIndex': 0, 'animated': true, 'viewOffset': 0};
                    var3 = var4.bind(var5)(var3);
 55:
                    var1 = _closure2_slot4;
                    var1['current'] = var2;
 65:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var8.bind(var15)(var5, var7);
            var5 = function handleTapCategory() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = _closure2_slot12;
                    var3 = var2.current;
                    var2 = _closure2_slot5;
                    if(!(var3 >= var2)) { _fun0014_ip = 32; continue _fun0014 }
 20:
                    var2 = _closure2_slot4;
                    var1 = true;
                    var2['current'] = var1;
 32:
                    var1 = undefined;
                    return var1;
                }
            };
            _closure2_slot15 = var5;
            var5 = var1 == var16;
            var1 = null;
            if(var5) { _fun0005_ip = 1126; continue _fun0005 }
 801:
            if(var4) { _fun0005_ip = 918; continue _fun0005 }
 804:
            if(!(var2 === var3)) { _fun0005_ip = 918; continue _fun0005 }
 808:
            var4 = _closure1_slot21;
            var3 = _closure1_slot5;
            var2 = {};
            var5 = {};
            var5['paddingBottom'] = var14;
            var2['style'] = var5;
            var7 = _closure1_slot20;
            var5 = {};
            var8 = var11.border;
            var5['style'] = var8;
            var7 = var7.bind(var6)(var3, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var15 = _closure1_slot20;
            var8 = _closure1_slot1;
            var18 = _closure1_slot3;
            var7 = 35;
            var7 = var18[var7];
            var8 = var8.bind(var6)(var7);
            var7 = {};
            var7['guild'] = var16;
            var7['channel'] = var17;
            var7 = var15.bind(var6)(var8, var7);
            var5[1] = var7;
            var2['children'] = var5;
            var2 = var4.bind(var6)(var3, var2);
            _fun0005_ip = 1123; continue _fun0005;
 918:
            var5 = _closure1_slot20;
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
                var1 = _closure2_slot12;
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
            var15 = _closure1_slot20;
            var14 = _closure1_slot27;
            var13 = {};
            var13['guild'] = var16;
            var16 = function onPressSearch() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 36;
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
            var11 = _closure1_slot25;
            var7['keyExtractor'] = var11;
            var10 = _closure1_slot26;
            var7['renderItem'] = var10;
            var10 = function renderSectionHeader() {
                var4 = _closure1_slot20;
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 37;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot15;
                var1['onCategorySelected'] = var6;
                var6 = _closure2_slot0;
                var1['channel'] = var6;
                var6 = _closure2_slot10;
                var1['categoryCounts'] = var6;
                var5 = _closure2_slot9;
                var1['allEntriesCount'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var7['renderSectionHeader'] = var10;
            var9 = function ListFooterComponent() {
                var4 = _closure1_slot20;
                var3 = _closure1_slot28;
                var2 = {};
                var5 = _closure2_slot3;
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
 1123:
            var1 = var2;
 1126:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
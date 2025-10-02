// app/modules/guild_scheduled_events/native/components/EditGuildEventPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var11 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var11;
        var _closure1_slot2 = var6;
        var1 = function PreviewBody(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var5 = var1.event;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var1 = _closure1_slot8;
                var12 = var1.bind(var4)();
                var _closure2_slot0 = var12;
                var1 = var5.channel_id;
                var _closure2_slot1 = var1;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var6 = 8;
                var6 = var3[var6];
                var9 = var2.bind(var4)(var6);
                var8 = var9.useStateFromStores;
                var6 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() {
                    var3 = _closure1_slot5;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var11 = var8.bind(var9)(var7, var1, var6);
                var1 = 9;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getLocationFromEvent;
                var2 = var1.bind(var2)(var5);
                var9 = null;
                var3 = var9 == var11;
                var1 = undefined;
                if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var1 = var11.name;
case 2:
                var15 = var2;
                if(!(var9 != var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var15 = var1;
case 4:
                _closure2_slot2 = var15;
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 10;
                var1 = var13[var1];
                var3 = var7.bind(var4)(var1);
                var2 = var3.getEventLocationIconSource;
                var1 = true;
                var1 = var2.bind(var3)(var5, var11, var1);
                _closure2_slot3 = var1;
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var12.header;
                var1['style'] = var5;
                var8 = _closure1_slot6;
                var5 = 11;
                var5 = var13[var5];
                var5 = var7.bind(var4)(var5);
                var6 = var5.LegacyText;
                var5 = {};
                var16 = var12.headerTitle;
                var5['style'] = var16;
                var16 = 12;
                var17 = var13[var16];
                var17 = var7.bind(var4)(var17);
                var19 = var17.intl;
                var18 = var19.string;
                var17 = var13[var16];
                var17 = var7.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17.yBsFEx;
                var17 = var18.bind(var19)(var17);
                var5['children'] = var17;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot6;
                var6 = 13;
                var6 = var13[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {};
                var12 = var12.headerSubtitle;
                var6['style'] = var12;
                var13 = var9 != var11;
                var12 = undefined;
                if(!var13) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var17 = _closure1_slot0;
                var22 = _closure1_slot2;
                var13 = var22[var16];
                var13 = var17.bind(var4)(var13);
                var19 = var13.intl;
                var18 = var19.formatToPlainString;
                var13 = var22[var16];
                var13 = var17.bind(var4)(var13);
                var13 = var13.t;
                var17 = var13.sxcQPD;
                var13 = {};
                var21 = _closure1_slot1;
                var20 = 14;
                var20 = var22[var20];
                var21 = var21.bind(var4)(var20);
                var20 = {};
                var20['channel'] = var11;
                var20 = var21.bind(var4)(var20);
                var13['channelName'] = var20;
                var12 = var18.bind(var19)(var17, var13);
case 6:
                var6['accessibilityLabel'] = var12;
                var12 = 'text-sm/medium';
                var6['variant'] = var12;
                var12 = 'header-secondary';
                var6['color'] = var12;
                if(!(var9 == var11)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var13 = _closure1_slot0;
                var9 = _closure1_slot2;
                var11 = var9[var16];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var9 = var9[var16];
                var9 = var13.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.KDPFi4;
                var9 = var11.bind(var12)(var9);
                _fun0002_ip = 10; continue _fun0002;
case 8:
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var12 = var10[var16];
                var12 = var11.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.format;
                var10 = var10[var16];
                var10 = var11.bind(var4)(var10);
                var10 = var10.t;
                var11 = var10.f55NX1;
                var10 = {};
                var10['channelName'] = var15;
                var14 = function channelHook() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var5 = _closure1_slot7;
                        var1 = _closure1_slot3;
                        var4 = var1.Fragment;
                        var3 = {};
                        var9 = _closure1_slot6;
                        var8 = _closure1_slot4;
                        var1 = {};
                        var2 = _closure2_slot0;
                        var2 = var2.channelContainer;
                        var1['style'] = var2;
                        var2 = _closure2_slot3;
                        var7 = null;
                        var2 = var7 != var2;
                        if(!var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var14 = _closure1_slot6;
                        var16 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var15 = 15;
                        var10 = var17[var15];
                        var13 = undefined;
                        var11 = var16.bind(var13)(var10);
                        var10 = {};
                        var18 = _closure2_slot3;
                        var10['source'] = var18;
                        var15 = var17[var15];
                        var15 = var16.bind(var13)(var15);
                        var15 = var15.Sizes;
                        var15 = var15.EXTRA_SMALL;
                        var10['size'] = var15;
                        var15 = _closure2_slot0;
                        var15 = var15.channelIcon;
                        var10['style'] = var15;
                        var2 = var14.bind(var13)(var11, var10);
case 11:
                        var1['children'] = var2;
                        var2 = undefined;
                        var8 = var9.bind(var2)(var8, var1);
                        var1 = new Array(2);
                        var1[0] = var8;
                        var10 = _closure1_slot6;
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var8 = 13;
                        var8 = var11[var8];
                        var8 = var9.bind(var2)(var8);
                        var9 = var8.Text;
                        var8 = {'accessibilityElementsHidden': true, 'importantForAccessibility': 'no', 'variant': 'text-sm/medium', 'color': 'header-secondary'};
                        var15 = true;
                        var11 = _closure2_slot2;
                        var13 = var7 != var11;
                        var11 = null;
                        if(!var13) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var12 = 16;
                        var12 = var14[var12];
                        var14 = var13.bind(var2)(var12);
                        var13 = var14.guildEventDetailsParser;
                        var12 = _closure2_slot2;
                        var11 = var13.bind(var14)(var12, var15);
case 13:
                        var8['children'] = var11;
                        var8 = var10.bind(var2)(var9, var8);
                        var1[1] = var8;
                        var3['children'] = var1;
                        var1 = _closure2_slot2;
                        var7 = var7 != var1;
                        var1 = 'preview-body';
                        if(!var7) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                        var1 = _closure2_slot2;
case 15:
                        var1 = var5.bind(var2)(var4, var3, var1);
                        return var1;
                    }
                };
                var10['channelHook'] = var14;
                var9 = var12.bind(var13)(var11, var10);
case 10:
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot9 = var1;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var13 = 0;
        var7 = var6[var13];
        var4 = metroImportAll;
        var1 = undefined;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot3 = var4;
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot4 = var4;
        var15 = 2;
        var4 = var6[var15];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var12 = var4.Fonts;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot6 = var7;
        var4 = var4.jsxs;
        var _closure1_slot7 = var4;
        var4 = 5;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {'flex': 1, 'padding': 16, 'paddingBottom': 0, 'backgroundColor': null, 'flexDirection': 'column', 'height': '100%', 'overflow': 'visible'};
        var10 = 6;
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.BACKGROUND_PRIMARY;
        var9['backgroundColor'] = var14;
        var14 = 'visible';
        var4['container'] = var9;
        var16 = 'center';
        var9 = {'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center'};
        var4['centered'] = var9;
        var9 = {'flexGrow': 0, 'width': '100%'};
        var4['centerContainer'] = var9;
        var9 = {'flex': 1, 'overflow': 'visible'};
        var4['flex'] = var9;
        var9 = {'alignItems': 'center', 'paddingBottom': 24};
        var4['header'] = var9;
        var9 = {'fontSize': 24, 'fontFamily': null, 'lineHeight': 30, 'marginTop': 16, 'marginBottom': 8};
        var17 = var12.PRIMARY_BOLD;
        var9['fontFamily'] = var17;
        var17 = var6[var10];
        var17 = var11.bind(var1)(var17);
        var17 = var17.colors;
        var17 = var17.HEADER_PRIMARY;
        var9['color'] = var17;
        var4['headerTitle'] = var9;
        var9 = {};
        var9['textAlign'] = var16;
        var4['headerSubtitle'] = var9;
        var9 = {'padding': 16, 'backgroundColor': null, 'marginBottom': 24, 'borderColor': null, 'borderWidth': 1, 'borderRadius': null, 'shadowOpacity': 0.2, 'elevation': 2, 'shadowRadius': 16};
        var16 = var6[var10];
        var16 = var11.bind(var1)(var16);
        var16 = var16.colors;
        var16 = var16.BACKGROUND_FLOATING;
        var9['backgroundColor'] = var16;
        var16 = var6[var10];
        var16 = var11.bind(var1)(var16);
        var16 = var16.colors;
        var16 = var16.BACKGROUND_MODIFIER_ACCENT;
        var9['borderColor'] = var16;
        var16 = var6[var10];
        var16 = var11.bind(var1)(var16);
        var16 = var16.radii;
        var16 = var16.sm;
        var9['borderRadius'] = var16;
        var16 = {'height': 8, 'width': 0};
        var9['shadowOffset'] = var16;
        var9['overflow'] = var14;
        var4['eventContainer'] = var9;
        var9 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'height': 14};
        var4['channelContainer'] = var9;
        var9 = {'tintColor': null, 'marginRight': 4, 'height': 14};
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.HEADER_SECONDARY;
        var9['tintColor'] = var14;
        var14 = {};
        var16 = 7;
        var16 = var6[var16];
        var17 = var5.bind(var1)(var16);
        var16 = var17.isAndroid;
        var16 = var16.bind(var17)();
        if(!var16) { _fun0001_ip = 17; continue _fun0001 }
case 18:
        var13 = var15;
case 17:
        var14['translateY'] = var13;
        var13 = new Array(1);
        var13[0] = var14;
        var9['transform'] = var13;
        var4['channelIcon'] = var9;
        var9 = {'position': 'absolute', 'bottom': 16, 'left': 0, 'right': 0};
        var4['buttonContainer'] = var9;
        var9 = {'paddingBottom': 8, 'fontSize': 14};
        var12 = var12.PRIMARY_MEDIUM;
        var9['fontFamily'] = var12;
        var10 = var6[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.unsafe_rawColors;
        var10 = var10.RED_400;
        var9['color'] = var10;
        var4['error'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot8 = var4;
        var4 = 25;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/guild_scheduled_events/native/components/EditGuildEventPreview.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function EditGuildEventPreview(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = arg1;
                var1 = var2.guild;
                var _closure2_slot0 = var1;
                var3 = var2.initialGuildEvent;
                var _closure2_slot1 = var3;
                var6 = var2.guildEvent;
                var _closure2_slot2 = var6;
                var7 = var2.isEdit;
                var _closure2_slot3 = var7;
                var16 = var2.loading;
                var21 = var2.error;
                var2 = var2.onSave;
                var _closure2_slot4 = var2;
                var2 = _closure1_slot8;
                var4 = undefined;
                var20 = var2.bind(var4)();
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 12;
                var3 = var9[var2];
                var3 = var8.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var2 = var9[var2];
                var2 = var8.bind(var4)(var2);
                var2 = var2.t;
                if(var7) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                var7 = var2.60lJ0N;
                var18 = var3.bind(var5)(var7);
                _fun0004_ip = 4; continue _fun0004;
case 19:
                var2 = var2.e5VEcH;
                var18 = var3.bind(var5)(var2);
case 4:
                var5 = _closure1_slot3;
                var3 = var5.useMemo;
                var2 = new Array(2);
                var2[0] = var6;
                var1 = var1.id;
                var2[1] = var1;
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.convertToFakeGuildEvent;
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var19 = var3.bind(var5)(var1, var2);
                var3 = _closure1_slot6;
                var23 = _closure1_slot0;
                var25 = _closure1_slot2;
                var1 = 18;
                var1 = var25[var1];
                var1 = var23.bind(var4)(var1);
                var2 = var1.SafeAreaPaddingView;
                var1 = {};
                var28 = true;
                var1['bottom'] = var28;
                var5 = var20.container;
                var1['style'] = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot4;
                var5 = {};
                var9 = var20.flex;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = var20.centered;
                var8[1] = var9;
                var5['style'] = var8;
                var10 = _closure1_slot7;
                var9 = _closure1_slot4;
                var8 = {};
                var11 = var20.centerContainer;
                var8['style'] = var11;
                var14 = _closure1_slot7;
                var12 = _closure1_slot4;
                var11 = {};
                var15 = var20.eventContainer;
                var11['style'] = var15;
                var26 = _closure1_slot6;
                var22 = 19;
                var15 = var25[var22];
                var15 = var23.bind(var4)(var15);
                var24 = var15.GuildEventCardImageHeader;
                var15 = {};
                var15['event'] = var19;
                var24 = var26.bind(var4)(var24, var15);
                var15 = new Array(4);
                var15[0] = var24;
                var27 = _closure1_slot6;
                var24 = var25[var22];
                var24 = var23.bind(var4)(var24);
                var26 = var24.GuildEventCardHeader;
                var24 = {};
                var24['event'] = var19;
                var24['isPreview'] = var28;
                var24 = var27.bind(var4)(var26, var24);
                var15[1] = var24;
                var27 = _closure1_slot6;
                var24 = var25[var22];
                var24 = var23.bind(var4)(var24);
                var26 = var24.GuildEventCardMetaInfo;
                var24 = {};
                var24['event'] = var19;
                var24 = var27.bind(var4)(var26, var24);
                var15[2] = var24;
                var24 = _closure1_slot6;
                var22 = var25[var22];
                var22 = var23.bind(var4)(var22);
                var23 = var22.GuildEventSimpleLocation;
                var22 = {};
                var22['event'] = var19;
                var22 = var24.bind(var4)(var23, var22);
                var15[3] = var22;
                var11['children'] = var15;
                var12 = var14.bind(var4)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var15 = _closure1_slot6;
                var14 = _closure1_slot9;
                var12 = {};
                var12['event'] = var19;
                var12 = var15.bind(var4)(var14, var12);
                var11[1] = var12;
                var8['children'] = var11;
                var9 = var10.bind(var4)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var11 = _closure1_slot7;
                var10 = _closure1_slot4;
                var9 = {};
                var12 = var20.buttonContainer;
                var9['style'] = var12;
                var14 = null;
                var12 = var14 != var21;
                if(!var12) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                var19 = _closure1_slot6;
                var15 = _closure1_slot0;
                var22 = _closure1_slot2;
                var12 = 11;
                var12 = var22[var12];
                var12 = var15.bind(var4)(var12);
                var15 = var12.LegacyText;
                var12 = {};
                var20 = var20.error;
                var12['style'] = var20;
                var20 = var21.getAnyErrorMessage;
                var20 = var20.bind(var21)();
                var12['children'] = var20;
                var14 = var19.bind(var4)(var15, var12);
case 21:
                var12 = new Array(2);
                var12[0] = var14;
                var15 = _closure1_slot6;
                var14 = _closure1_slot0;
                var19 = _closure1_slot2;
                var13 = 20;
                var13 = var19[var13];
                var13 = var14.bind(var4)(var13);
                var14 = var13.Button;
                var13 = {};
                var13['text'] = var18;
                var18 = 'primary';
                var13['variant'] = var18;
                var17 = function onPress() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = _closure2_slot2;
                        var3 = var1.recurrenceRule;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                        var1 = _closure2_slot3;
                        if(!var1) { _fun0005_ip = 23; continue _fun0005 }
case 25:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 21;
                        var4 = var4[var3];
                        var3 = undefined;
                        var7 = var5.bind(var3)(var4);
                        var6 = var7.hasScheduleChanges;
                        var5 = _closure2_slot1;
                        var4 = _closure2_slot2;
                        var4 = var6.bind(var7)(var5, var4);
                        if(var4) { _fun0005_ip = 26; continue _fun0005 }
case 23:
                        var4 = _closure2_slot4;
                        var2 = undefined;
                        var2 = var4.bind(var2)();
                        _fun0005_ip = 27; continue _fun0005;
case 26:
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 22;
                        var1 = var4[var1];
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.openLazy;
                        var1 = {};
                        var4 = function importer() {
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = 24;
                            var2 = var1[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = 23;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var4)(var2, var1);
                            var2 = var3.then;
                            var1 = function(arg1) {
                                var2 = arg1;
                                var2 = var2.default;
                                var _closure5_slot0 = var2;
                                var1 = function(arg1) {
                                    var4 = _closure1_slot6;
                                    var3 = _closure5_slot0;
                                    var2 = {};
                                    var6 = arg1;
                                    var7 = var2;
                                    var1 = copyDataProperties(var7, var6);
                                    var5 = _closure2_slot4;
                                    var1 = 'onConfirm';
                                    var2[var1] = var5;
                                    var1 = undefined;
                                    var1 = var4.bind(var1)(var3, var2);
                                    return var1;
                                };
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1['importer'] = var4;
                        var1 = var2.bind(var3)(var1);
case 27:
                        var1 = undefined;
                        return var1;
                    }
                };
                var13['onPress'] = var17;
                var13['disabled'] = var16;
                var13['loading'] = var16;
                var13 = var15.bind(var4)(var14, var13);
                var12[1] = var13;
                var9['children'] = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();
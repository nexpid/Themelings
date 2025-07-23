// app/modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var7 = var4.Fragment;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingHorizontal': null, 'marginTop': 16, 'marginLeft': 16, 'marginRight': 16};
    var11 = 5;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var9['paddingHorizontal'] = var10;
    var10 = 16;
    var4['segmentedControl'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['container'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_FLOATING;
    var9['backgroundColor'] = var11;
    var4['header'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'padding': 12};
    var4['platformItem'] = var9;
    var9 = {};
    var9['marginHorizontal'] = var10;
    var4['divider'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SelectConnectionActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.addConnection;
            var _closure2_slot0 = var2;
            var2 = var1.excludedConnections;
            var _closure2_slot1 = var2;
            var2 = var1.excludedApplications;
            var _closure2_slot2 = var2;
            var5 = var1.integrations;
            var1 = var1.onCompleteApplication;
            var _closure2_slot3 = var1;
            var1 = _closure1_slot9;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var _closure2_slot4 = var9;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var _closure2_slot5 = var1;
            var3 = _closure1_slot6;
            var11 = _closure1_slot0;
            var1 = 7;
            var1 = var7[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.BottomSheetTitleHeader;
            var1 = {};
            var17 = 8;
            var8 = var7[var17];
            var8 = var11.bind(var4)(var8);
            var10 = var8.intl;
            var8 = var10.string;
            var7 = var7[var17];
            var7 = var11.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.Sm0YGx;
            var7 = var8.bind(var10)(var7);
            var1['title'] = var7;
            var7 = var9.header;
            var1['backgroundColor'] = var7;
            var8 = var3.bind(var4)(var2, var1);
            var2 = _closure1_slot4;
            var1 = var2.useState;
            var14 = 0;
            var3 = var1.bind(var2)(var14);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var13 = var2[var14];
            var1 = 1;
            var18 = var2[var1];
            var7 = null;
            var1 = var7 == var5;
            var3 = undefined;
            if(var1) { _fun0001_ip = 260; continue _fun0001 }
 243:
            var2 = var5.filter;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = arg1;
                    var2 = var5.application;
                    var6 = null;
                    var3 = var6 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 25; continue _fun0002 }
 19:
                    var1 = var2.roleConnectionsVerificationUrl;
 25:
                    var1 = var6 != var1;
                    if(!var1) { _fun0002_ip = 71; continue _fun0002 }
 32:
                    var3 = _closure2_slot2;
                    var2 = var3.has;
                    var5 = var5.application;
                    var6 = var6 == var5;
                    var4 = undefined;
                    if(var6) { _fun0002_ip = 63; continue _fun0002 }
 58:
                    var4 = var5.id;
 63:
                    var2 = var2.bind(var3)(var4);
                    var1 = !var2;
 71:
                    return var1;
                }
            };
            var3 = var2.bind(var5)(var1);
 260:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.usePlatforms;
            var5 = var1.bind(var2)();
            var2 = var5.filter;
            var1 = function(arg1) {
                var3 = _closure2_slot1;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.type;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var5 = var2.bind(var5)(var1);
            var2 = var5.map;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var10 = arg1;
                    var _closure3_slot0 = var10;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 10;
                    var1 = var8[var1];
                    var4 = undefined;
                    var3 = var7.bind(var4)(var1);
                    var2 = var3.makeSource;
                    var1 = 11;
                    var1 = var8[var1];
                    var8 = var7.bind(var4)(var1);
                    var7 = var8.isThemeDark;
                    var1 = _closure2_slot5;
                    var1 = var7.bind(var8)(var1);
                    var7 = var10.icon;
                    if(var1) { _fun0003_ip = 86; continue _fun0003 }
 78:
                    var1 = var7.lightPNG;
                    _fun0003_ip = 92; continue _fun0003;
 86:
                    var1 = var7.darkPNG;
 92:
                    var16 = var2.bind(var3)(var1);
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot7;
                    var1 = {};
                    var9 = _closure1_slot6;
                    var8 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var7 = 12;
                    var13 = var12[var7];
                    var13 = var8.bind(var4)(var13);
                    var14 = var13.FormRow;
                    var13 = {};
                    var11 = _closure2_slot4;
                    var15 = var11.platformItem;
                    var13['style'] = var15;
                    var15 = _closure1_slot1;
                    var6 = 13;
                    var6 = var12[var6];
                    var15 = var15.bind(var4)(var6);
                    var6 = {};
                    var6['source'] = var16;
                    var16 = true;
                    var6['disableColor'] = var16;
                    var6 = var9.bind(var4)(var15, var6);
                    var13['leading'] = var6;
                    var6 = 14;
                    var6 = var12[var6];
                    var6 = var8.bind(var4)(var6);
                    var15 = var6.Text;
                    var6 = {};
                    var16 = 'text-sm/medium';
                    var6['variant'] = var16;
                    var16 = var10.name;
                    var6['children'] = var16;
                    var6 = var9.bind(var4)(var15, var6);
                    var13['label'] = var6;
                    var5 = function onPress() {
                        var3 = _closure2_slot0;
                        var1 = _closure3_slot0;
                        var2 = var1.type;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 15;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hideActionSheet;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var13['onPress'] = var5;
                    var16 = var10.type;
                    var6 = global;
                    var5 = var6.HermesInternal;
                    var15 = var5.concat;
                    var5 = 'row-';
                    var5 = var15.bind(var5)(var16);
                    var13 = var9.bind(var4)(var14, var13, var5);
                    var5 = new Array(2);
                    var5[0] = var13;
                    var7 = var12[var7];
                    var7 = var8.bind(var4)(var7);
                    var8 = var7.FormDivider;
                    var7 = {};
                    var11 = var11.divider;
                    var7['style'] = var11;
                    var11 = var10.type;
                    var6 = var6.HermesInternal;
                    var10 = var6.concat;
                    var6 = 'divider-';
                    var6 = var10.bind(var6)(var11);
                    var6 = var9.bind(var4)(var8, var7, var6);
                    var5[1] = var6;
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var12 = var2.bind(var5)(var1);
            var1 = var7 == var3;
            var11 = undefined;
            if(var1) { _fun0001_ip = 350; continue _fun0001 }
 333:
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var11 = var1.application;
                    var _closure3_slot0 = var11;
                    var16 = null;
                    var2 = var16 == var11;
                    var1 = null;
                    if(var2) { _fun0004_ip = 434; continue _fun0004 }
 28:
                    var5 = _closure1_slot8;
                    var4 = _closure1_slot7;
                    var3 = {};
                    var14 = _closure1_slot6;
                    var15 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var13 = 12;
                    var9 = var7[var13];
                    var2 = undefined;
                    var9 = var15.bind(var2)(var9);
                    var10 = var9.FormRow;
                    var9 = {};
                    var17 = _closure2_slot4;
                    var17 = var17.platformItem;
                    var9['style'] = var17;
                    var18 = _closure1_slot1;
                    var19 = 16;
                    var17 = var7[var19];
                    var18 = var18.bind(var2)(var17);
                    var17 = {};
                    var20 = var11.bot;
                    var17['user'] = var20;
                    var19 = var7[var19];
                    var19 = var15.bind(var2)(var19);
                    var19 = var19.AvatarSizes;
                    var19 = var19.XSMALL;
                    var17['size'] = var19;
                    var17['guildId'] = var2;
                    var17 = var14.bind(var2)(var18, var17);
                    var9['leading'] = var17;
                    var18 = 14;
                    var7 = var7[var18];
                    var7 = var15.bind(var2)(var7);
                    var15 = var7.Text;
                    var7 = {};
                    var17 = 'text-sm/medium';
                    var7['variant'] = var17;
                    var17 = var11.name;
                    var7['children'] = var17;
                    var7 = var14.bind(var2)(var15, var7);
                    var9['label'] = var7;
                    var15 = var11.description;
                    var7 = undefined;
                    if(!(var2 !== var15)) { _fun0004_ip = 283; continue _fun0004 }
 217:
                    var15 = var11.description;
                    var7 = undefined;
                    if(!(var16 !== var15)) { _fun0004_ip = 283; continue _fun0004 }
 228:
                    var17 = _closure1_slot6;
                    var16 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var15 = var15[var18];
                    var15 = var16.bind(var2)(var15);
                    var16 = var15.Text;
                    var15 = {'variant': 'text-xs/normal', 'color': 'header-secondary'};
                    var18 = var11.description;
                    var15['children'] = var18;
                    var7 = var17.bind(var2)(var16, var15);
 283:
                    var9['subLabel'] = var7;
                    var6 = function onPress() {
                        var3 = _closure2_slot3;
                        var1 = _closure3_slot0;
                        var2 = var1.id;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 15;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hideActionSheet;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var9['onPress'] = var6;
                    var16 = var11.id;
                    var7 = global;
                    var6 = var7.HermesInternal;
                    var15 = var6.concat;
                    var6 = 'row-';
                    var6 = var15.bind(var6)(var16);
                    var9 = var14.bind(var2)(var10, var9, var6);
                    var6 = new Array(2);
                    var6[0] = var9;
                    var10 = _closure1_slot6;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var13];
                    var8 = var9.bind(var2)(var8);
                    var9 = var8.FormDivider;
                    var8 = {};
                    var12 = _closure2_slot4;
                    var12 = var12.divider;
                    var8['style'] = var12;
                    var12 = var11.id;
                    var7 = var7.HermesInternal;
                    var11 = var7.concat;
                    var7 = 'divider-';
                    var7 = var11.bind(var7)(var12);
                    var7 = var10.bind(var2)(var9, var8, var7);
                    var6[1] = var7;
                    var3['children'] = var6;
                    var1 = var5.bind(var2)(var4, var3);
 434:
                    return var1;
                }
            };
            var11 = var2.bind(var3)(var1);
 350:
            var1 = var7 == var11;
            var2 = undefined;
            if(var1) { _fun0001_ip = 364; continue _fun0001 }
 359:
            var2 = var11.length;
 364:
            var3 = var7 != var2;
            var1 = 0;
            if(!var3) { _fun0001_ip = 376; continue _fun0001 }
 373:
            var1 = var2;
 376:
            var5 = var1 > var14;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 17;
            var1 = var10[var1];
            var15 = var2.bind(var4)(var1);
            var3 = var15.useSegmentedControlState;
            var1 = {};
            var1['pageWidth'] = var14;
            var1['defaultIndex'] = var13;
            var1['onSetActiveIndex'] = var18;
            var18 = var10[var17];
            var18 = var2.bind(var4)(var18);
            var20 = var18.intl;
            var19 = var20.string;
            var18 = var10[var17];
            var18 = var2.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.3fe7U1;
            var19 = var19.bind(var20)(var18);
            var18 = new Array(2);
            var18[0] = var19;
            var19 = var10[var17];
            var19 = var2.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var17 = var10[var17];
            var17 = var2.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.PHjkRE;
            var17 = var19.bind(var20)(var17);
            var18[1] = var17;
            var17 = var18.map;
            var16 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var1['id'] = var2;
                var1['label'] = var2;
                var2 = null;
                var1['page'] = var2;
                return var1;
            };
            var16 = var17.bind(var18)(var16);
            var1['items'] = var16;
            var18 = var3.bind(var15)(var1);
            var3 = _closure1_slot8;
            var1 = 18;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {'scrollable': true, 'header': null, 'startExpanded': true};
            var15 = true;
            var1['header'] = var8;
            var7 = null;
            if(!var5) { _fun0001_ip = 667; continue _fun0001 }
 599:
            var10 = _closure1_slot6;
            var8 = _closure1_slot5;
            var5 = {};
            var16 = var9.segmentedControl;
            var5['style'] = var16;
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var16 = 19;
            var16 = var19[var16];
            var16 = var17.bind(var4)(var16);
            var17 = var16.SegmentedControl;
            var16 = {};
            var16['state'] = var18;
            var16 = var10.bind(var4)(var17, var16);
            var5['children'] = var16;
            var7 = var10.bind(var4)(var8, var5);
 667:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot6;
            var10 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 20;
            var6 = var16[var6];
            var6 = var10.bind(var4)(var6);
            var7 = var6.BottomSheetScrollView;
            var6 = {};
            var9 = var9.container;
            var6['style'] = var9;
            var9 = 21;
            var9 = var16[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.SafeAreaPaddingView;
            var9 = {};
            var9['bottom'] = var15;
            if(!(var14 === var13)) { _fun0001_ip = 747; continue _fun0001 }
 744:
            var11 = var12;
 747:
            var9['children'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
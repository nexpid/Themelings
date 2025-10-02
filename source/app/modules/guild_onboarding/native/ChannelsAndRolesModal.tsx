// app/modules/guild_onboarding/native/ChannelsAndRolesModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function ChannelsAndRolesScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.guildId;
            var _closure2_slot0 = var10;
            var3 = var1.defaultTab;
            var1 = _closure1_slot10;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 8;
            var1 = var6[var1];
            var8 = var2.bind(var4)(var1);
            var5 = var8.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var5.bind(var8)(var2, var1);
            var5 = _closure1_slot1;
            var1 = 9;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var5 = var1.bind(var4)(var2);
            var2 = _closure1_slot4;
            var1 = var2.useState;
            var6 = null;
            if(!(var6 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = 1;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = 0;
case 4:
            var3 = var8;
case 2:
            var3 = var1.bind(var2)(var3);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var12 = 0;
            var8 = var2[var12];
            var1 = 1;
            var11 = var2[var1];
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 10;
            var1 = var18[var1];
            var3 = var17.bind(var4)(var1);
            var2 = var3.useSegmentedControlState;
            var1 = {};
            var1['pageWidth'] = var12;
            var1['defaultIndex'] = var8;
            var1['onSetActiveIndex'] = var11;
            var12 = 11;
            var14 = var18[var12];
            var14 = var17.bind(var4)(var14);
            var16 = var14.intl;
            var15 = var16.string;
            var14 = var18[var12];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.F1Vixc;
            var15 = var15.bind(var16)(var14);
            var14 = new Array(2);
            var14[0] = var15;
            var15 = var18[var12];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var12 = var18[var12];
            var12 = var17.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.MWmtj4;
            var12 = var15.bind(var16)(var12);
            var14[1] = var12;
            var12 = var14.map;
            var9 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var1['id'] = var2;
                var1['label'] = var2;
                var2 = null;
                var1['page'] = var2;
                return var1;
            };
            var9 = var12.bind(var14)(var9);
            var1['items'] = var9;
            var16 = var2.bind(var3)(var1);
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var9 = var13.screen;
            var1['style'] = var9;
            var6 = null;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var12 = _closure1_slot8;
            var9 = _closure1_slot5;
            var5 = {};
            var13 = var13.tabBar;
            var5['style'] = var13;
            var15 = _closure1_slot8;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 12;
            var13 = var17[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.SegmentedControl;
            var13 = {};
            var13['state'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var5['children'] = var13;
            var6 = var12.bind(var4)(var9, var5);
case 6:
            var5 = new Array(2);
            var5[0] = var6;
            var6 = _closure1_slot7;
            var6 = var6.CUSTOMIZE;
            if(!(var8 !== var6)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = _closure1_slot8;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 14;
            var6 = var12[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            var6['guildId'] = var10;
            var6 = var9.bind(var4)(var8, var6);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var9 = _closure1_slot8;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 13;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['setTab'] = var11;
            var7['guildId'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 10:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var7 = var6[var10];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildOnboardingTab;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var10 = 7;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var12;
    var4['screen'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['paddingHorizontal'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['paddingTop'] = var10;
    var4['tabBar'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/native/ChannelsAndRolesModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelsAndRolesModal(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildId;
            var _closure2_slot0 = var2;
            var1 = var1.defaultTab;
            var _closure2_slot1 = var1;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 8;
            var1 = var8[var1];
            var4 = undefined;
            var6 = var2.bind(var4)(var1);
            var3 = var6.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var3.bind(var6)(var2, var1);
            var2 = _closure1_slot1;
            var1 = 9;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var6 = var1.bind(var4)(var3);
            var3 = _closure1_slot8;
            var1 = 15;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = 'channelAndRolesModal';
            var1['screenKey'] = var8;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 11;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            if(var6) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var6 = var7.et6wam;
            var6 = var8.bind(var9)(var6);
            _fun0002_ip = 13; continue _fun0002;
case 11:
            var7 = var7.h9mGOD;
            var6 = var8.bind(var9)(var7);
case 13:
            var1['title'] = var6;
            var5 = function render() {
                var4 = _closure1_slot8;
                var3 = _closure1_slot11;
                var2 = {};
                var5 = _closure2_slot0;
                var2['guildId'] = var5;
                var1 = _closure2_slot1;
                var2['defaultTab'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1['render'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
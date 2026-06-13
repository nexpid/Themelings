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
            var2 = arg1;
            var10 = var2.guildId;
            var _closure2_slot0 = var10;
            var8 = var2.defaultTab;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var2 = _closure1_slot10;
            var13 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 8;
            var2 = var6[var2];
            var9 = var3.bind(var4)(var2);
            var5 = var9.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var5.bind(var9)(var3, var2);
            var5 = _closure1_slot1;
            var2 = 9;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var5 = var2.bind(var4)(var3);
            var _closure2_slot1 = var5;
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var6 = null;
            if(!(var6 == var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = _closure1_slot7;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var11.BROWSE;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var9 = var11.CUSTOMIZE;
case 6:
            var8 = var9;
case 2:
            var8 = var2.bind(var3)(var8);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var8, var2);
            var12 = 0;
            var8 = var3[var12];
            _closure2_slot2 = var8;
            var2 = 1;
            var11 = var3[var2];
            _closure2_slot3 = var11;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 10;
            var2 = var18[var2];
            var9 = var17.bind(var4)(var2);
            var3 = var9.useSegmentedControlState;
            var2 = {};
            var2['pageWidth'] = var12;
            var2['defaultIndex'] = var8;
            var2['onSetActiveIndex'] = var11;
            var12 = 11;
            var14 = var18[var12];
            var14 = var17.bind(var4)(var14);
            var16 = var14.intl;
            var15 = var16.string;
            var14 = var18[var12];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.F1VixV;
            var14 = var15.bind(var16)(var14);
            var15 = new Array(2);
            var15[0] = var14;
            var14 = var18[var12];
            var14 = var17.bind(var4)(var14);
            var16 = var14.intl;
            var14 = var16.string;
            var12 = var18[var12];
            var12 = var17.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.MWmtj8;
            var12 = var14.bind(var16)(var12);
            var15[1] = var12;
            var14 = var15.map;
            var12 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var1['id'] = var2;
                var1['label'] = var2;
                var2 = null;
                var1['page'] = var2;
                return var1;
            };
            var12 = var14.bind(var15)(var12);
            var2['items'] = var12;
            var16 = var3.bind(var9)(var2);
            _closure2_slot4 = var16;
            var9 = _closure1_slot4;
            var3 = var9.useEffect;
            var2 = new Array(3);
            var2[0] = var5;
            var2[1] = var8;
            var2[2] = var16;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var4 = _closure2_slot2;
                    var3 = _closure1_slot7;
                    var3 = var3.CUSTOMIZE;
                    var1 = var4 !== var3;
case 7:
                    if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var5 = _closure2_slot3;
                    var3 = _closure1_slot7;
                    var4 = var3.BROWSE;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var4 = _closure2_slot4;
                    var3 = var4.setActiveIndex;
                    var1 = _closure1_slot7;
                    var2 = var1.BROWSE;
                    var1 = false;
                    var1 = var3.bind(var4)(var2, var1);
case 9:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var9)(var1, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var9 = var13.screen;
            var1['style'] = var9;
            var6 = null;
            if(!var5) { _fun0001_ip = 11; continue _fun0001 }
case 12:
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
case 11:
            var5 = new Array(2);
            var5[0] = var6;
            var6 = _closure1_slot7;
            var6 = var6.CUSTOMIZE;
            if(!(var8 !== var6)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var9 = _closure1_slot8;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 14;
            var6 = var12[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            var6['guildId'] = var10;
            var6 = var9.bind(var4)(var8, var6);
            _fun0001_ip = 15; continue _fun0001;
case 13:
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
case 15:
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
    var12 = var12.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var12;
    var4['screen'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_12;
    var9['paddingHorizontal'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
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
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
            if(var6) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var6 = var7.et6wav;
            var6 = var8.bind(var9)(var6);
            _fun0003_ip = 18; continue _fun0003;
case 16:
            var7 = var7.h9mGOP;
            var6 = var8.bind(var9)(var7);
case 18:
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
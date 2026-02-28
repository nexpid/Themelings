// app/modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var2 = function handleCreateJoinGuildPress() {
        var1 = undefined;
        var4 = _closure1_slot18;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var2;
    var1 = function _handleCreateJoinGuildPress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var5 = 12;
                    var3 = var2[var5];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var3);
                    var3 = 11;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var2 = var6.bind(var4)(var3, var2);
                    SaveGenerator(address=57);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var8 = var2.default;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var5 = var3[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = 13;
                    var5 = var3[var5];
                    var3 = var3.paths;
                    var3 = var6.bind(var4)(var5, var3);
                    SaveGenerator(address=110);
case 8:
                    return var3;
case 9:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var6 = var3.default;
                    var7 = var8.acknowledgeTooltip;
                    var5 = _closure1_slot10;
                    var5 = var5.GUILD_TOOLTIP;
                    var5 = var7.bind(var8)(var5);
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 14;
                    var5 = var8[var5];
                    var7 = var7.bind(var4)(var5);
                    var5 = var7.isAtGuildCapAndNonPremium;
                    var5 = var5.bind(var7)();
                    if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 17;
                    var5 = var8[var5];
                    var5 = var7.bind(var4)(var5);
                    var8 = var5.GameCommunityUpsellMultiExperiment;
                    var7 = var8.getConfig;
                    var5 = {};
                    var10 = 'GuildsBarCreateJoinButton';
                    var5['location'] = var10;
                    var5 = var7.bind(var8)(var5);
                    var5 = var5.enabled;
                    if(!var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var7 = _closure1_slot6;
                    var5 = var7.hasGuilds;
                    var5 = var5.bind(var7)();
                    if(var5) { _fun0001_ip = 16; continue _fun0001 }
case 14:
                    var5 = var6.openCreateGuildModal;
                    var5 = var5.bind(var6)();
                    _fun0001_ip = 17; continue _fun0001;
case 16:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 18;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.transitionToGuild;
                    var5 = _closure1_slot12;
                    var5 = var6.bind(var7)(var5);
                    _fun0001_ip = 17; continue _fun0001;
case 12:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var5 = 15;
                    var5 = var11[var5];
                    var7 = var10.bind(var4)(var5);
                    var6 = var7.handleShowUpsellAlert;
                    var5 = {};
                    var8 = _closure1_slot11;
                    var8 = var8.GUILD_CAP;
                    var5['initialUpsellKey'] = var8;
                    var8 = {};
                    var12 = _closure1_slot9;
                    var12 = var12.CREATE_JOIN_GUILD_MODAL;
                    var8['page'] = var12;
                    var5['analyticsLocation'] = var8;
                    var8 = 16;
                    var8 = var11[var8];
                    var8 = var10.bind(var4)(var8);
                    var10 = var8.NEW_GUILD_BUTTON;
                    var8 = new Array(1);
                    var8[0] = var10;
                    var5['analyticsLocations'] = var8;
                    var8 = {};
                    var9 = _closure1_slot13;
                    var9 = var9.GUILD_CAP_MODAL_UPSELL;
                    var8['type'] = var9;
                    var5['analyticsProperties'] = var8;
                    var5 = var6.bind(var7)(var5);
case 17:
                    return var4;
case 10:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot18 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var5);
    var12 = 0;
    var5 = var7[var12];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var13 = 2;
    var5 = var7[var13];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.GUILD_ITEM_SIZE;
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.AnalyticsPages;
    var _closure1_slot9 = var9;
    var14 = var5.DM_WIDTH;
    var9 = var5.TooltipNames;
    var _closure1_slot10 = var9;
    var9 = var5.UpsellTypes;
    var _closure1_slot11 = var9;
    var5 = var5.MOBILE_GUILD_UPSELL_LIST;
    var _closure1_slot12 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.PremiumUpsellTypes;
    var _closure1_slot13 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot14 = var9;
    var5 = var5.jsxs;
    var _closure1_slot15 = var5;
    var5 = 9;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {};
    var11['marginTop'] = var12;
    var5['marginOverrides'] = var11;
    var11 = {'position': 'absolute', 'left': null, 'top': 0};
    var12 = 10;
    var12 = var7[var12];
    var12 = var6.bind(var1)(var12);
    var12 = var12.BG_CONTAINER_SIZE;
    var12 = var14 - var12;
    var12 = -var12;
    var12 = var12 / var13;
    var11['left'] = var12;
    var5['guildIndicator'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot16 = var5;
    var5 = var8.memo;
    var4 = function GuildsBarCreateJoinButton() {
        var2 = _closure1_slot16;
        var4 = undefined;
        var8 = var2.bind(var4)();
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var2 = 17;
        var2 = var12[var2];
        var2 = var11.bind(var4)(var2);
        var5 = var2.GameCommunityUpsellMultiExperiment;
        var3 = var5.useConfig;
        var2 = {};
        var6 = 'GuildsBarCreateJoinButton';
        var2['location'] = var6;
        var2 = var3.bind(var5)(var2);
        var6 = var2.enabled;
        var _closure2_slot0 = var6;
        var2 = 19;
        var3 = var12[var2];
        var9 = var11.bind(var4)(var3);
        var7 = var9.useStateFromStores;
        var3 = _closure1_slot7;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            var3 = _closure1_slot7;
            var2 = var3.getGuildId;
            var2 = var2.bind(var3)();
            var1 = _closure1_slot12;
            var1 = var2 === var1;
            return var1;
        };
        var9 = var7.bind(var9)(var5, var3);
        var _closure2_slot1 = var9;
        var2 = var12[var2];
        var7 = var11.bind(var4)(var2);
        var5 = var7.useStateFromStoresArray;
        var2 = _closure1_slot6;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var2 = _closure1_slot6;
            var1 = var2.getPresentableUpsellGuilds;
            var4 = var1.bind(var2)();
            var3 = var4.slice;
            var2 = 0;
            var1 = 2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var2 = var5.bind(var7)(var3, var2);
        var _closure2_slot2 = var2;
        var5 = _closure1_slot4;
        var7 = var5.useMemo;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var2;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot0;
                if(!var2) { _fun0002_ip = 18; continue _fun0002 }
case 3:
                var2 = _closure2_slot2;
                var3 = var2.length;
                var2 = 2;
                if(!(!(var3 < var2))) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var3 = _closure2_slot2;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var6 = arg1;
                        var1 = var6.icon;
                        var5 = null;
                        var2 = var5 != var1;
                        if(!var2) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                        var5 = var1;
case 20:
                        var2 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 20;
                        var1 = var8[var1];
                        var7 = undefined;
                        var3 = var2.bind(var7)(var1);
                        var2 = var3.getGuildIconSource;
                        var1 = {};
                        var6 = var6.id;
                        var1['id'] = var6;
                        var1['icon'] = var5;
                        var5 = false;
                        var1['canAnimate'] = var5;
                        var5 = _closure1_slot8;
                        var6 = _closure1_slot0;
                        var4 = 21;
                        var4 = var8[var4];
                        var6 = var6.bind(var7)(var4);
                        var4 = var6.getDevicePixelRatio;
                        var4 = var4.bind(var6)();
                        var4 = var5 * var4;
                        var1['size'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
case 18:
                var1 = undefined;
                return var1;
            }
        };
        var14 = var7.bind(var5)(var2, var3);
        var3 = var5.useMemo;
        var2 = new Array(2);
        var2[0] = var9;
        var2[1] = var6;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = _closure2_slot1;
                if(!var1) { _fun0004_ip = 21; continue _fun0004 }
case 3:
                var1 = _closure2_slot0;
                if(var1) { _fun0004_ip = 22; continue _fun0004 }
case 21:
                var1 = undefined;
                return var1;
case 22:
                var1 = {};
                var2 = _closure2_slot1;
                var1['selected'] = var2;
                var2 = 'unread';
                var1['id'] = var2;
                return var1;
            }
        };
        var10 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot15;
        var2 = _closure1_slot5;
        var1 = {};
        var7 = _closure1_slot14;
        var16 = _closure1_slot1;
        var5 = 10;
        var5 = var12[var5];
        var6 = var16.bind(var4)(var5);
        var5 = {};
        var15 = 22;
        var15 = var12[var15];
        var15 = var16.bind(var4)(var15);
        var5['iconSource'] = var15;
        var5['backgroundIcons'] = var14;
        var13 = _closure1_slot17;
        var5['onPress'] = var13;
        var13 = 23;
        var14 = var12[var13];
        var14 = var11.bind(var4)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var13 = var12[var13];
        var13 = var11.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13.l5WIbf;
        var13 = var14.bind(var15)(var13);
        var5['accessibilityLabel'] = var13;
        var5['selected'] = var9;
        var9 = var8.marginOverrides;
        var5['style'] = var9;
        var6 = var7.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var6 = {};
        var8 = var8.guildIndicator;
        var6['style'] = var8;
        var8 = 24;
        var8 = var12[var8];
        var8 = var11.bind(var4)(var8);
        var9 = var8.TransitionItem;
        var8 = {};
        var8['item'] = var10;
        var10 = 25;
        var10 = var12[var10];
        var10 = var11.bind(var4)(var10);
        var10 = var10.renderUnreadIndicator;
        var8['renderItem'] = var10;
        var8 = var7.bind(var4)(var9, var8);
        var6['children'] = var8;
        var6 = var7.bind(var4)(var2, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var5 = 26;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['handleCreateJoinGuildPress'] = var2;
    return var1;
})();
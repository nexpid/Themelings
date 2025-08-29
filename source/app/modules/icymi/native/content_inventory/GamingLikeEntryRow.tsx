// app/modules/icymi/native/content_inventory/GamingLikeEntryRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var9 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ICYMI_MARGIN;
    var _closure1_slot7 = var7;
    var4 = var4.MESSAGE_CONTENT_INSET;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var7 = var4.Fragment;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var7 = {};
    var8 = 5;
    var4 = var6[var8];
    var4 = var9.bind(var1)(var4);
    var4 = var4.NewGameBadge;
    var7['Badge'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isEntryNew;
    var7['predicate'] = var4;
    var4 = new Array(5);
    var4[0] = var7;
    var7 = {};
    var10 = var6[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.StreakBadge;
    var7['Badge'] = var10;
    var10 = function predicate(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getStreakCount;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            var3 = var2 != var1;
            var2 = 0;
            if(!var3) { _fun0001_ip = 53; continue _fun0001 }
 50:
            var2 = var1;
 53:
            var1 = 2;
            var1 = var2 >= var1;
            return var1;
        }
    };
    var7['predicate'] = var10;
    var4[1] = var7;
    var7 = {};
    var10 = var6[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.TrendingBadge;
    var7['Badge'] = var10;
    var10 = function predicate(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 6;
            var1 = var4[var1];
            var5 = undefined;
            var4 = var3.bind(var5)(var1);
            var3 = var4.getTrendingType;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0002_ip = 84; continue _fun0002 }
 48:
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var2 = 7;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.TrendingType;
            var2 = var2.TRENDING_TYPE_UNSPECIFIED;
            var1 = var3 !== var2;
 84:
            return var1;
        }
    };
    var7['predicate'] = var10;
    var4[2] = var7;
    var7 = {};
    var10 = var6[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.ResurrectedBadge;
    var7['Badge'] = var10;
    var10 = function predicate() {
        var1 = true;
        return var1;
    };
    var7['predicate'] = var10;
    var4[3] = var7;
    var7 = {};
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.MarathonBadge;
    var7['Badge'] = var8;
    var8 = function predicate(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.isEntryMarathon;
        var1 = arg1;
        var2 = var2.bind(var3)(var1);
        var1 = true;
        var1 = var1 === var2;
        return var1;
    };
    var7['predicate'] = var8;
    var4[4] = var7;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = {};
            var2 = {'flexDirection': 'row', 'gap': null, 'alignItems': 'center'};
            var5 = _closure1_slot7;
            var2['gap'] = var5;
            var2['padding'] = var5;
            var5 = 0;
            if(var4) { _fun0003_ip = 45; continue _fun0003 }
 41:
            var5 = _closure1_slot8;
 45:
            var2['marginLeft'] = var5;
            var8 = _closure1_slot1;
            var7 = _closure1_slot3;
            var6 = 9;
            var9 = var7[var6];
            var5 = undefined;
            var9 = var8.bind(var5)(var9);
            var9 = var9.radii;
            var9 = var9.lg;
            var2['borderRadius'] = var9;
            var9 = var7[var6];
            var9 = var8.bind(var5)(var9);
            var9 = var9.colors;
            var9 = var9.BG_SURFACE_RAISED;
            var2['backgroundColor'] = var9;
            var7 = var7[var6];
            var7 = var8.bind(var5)(var7);
            var7 = var7.shadows;
            var11 = var7.SHADOW_HIGH;
            var12 = var2;
            var7 = copyDataProperties(var12, var11);
            var1['card'] = var2;
            var2 = {};
            if(var4) { _fun0003_ip = 153; continue _fun0003 }
 149:
            var4 = {};
            _fun0003_ip = 222; continue _fun0003;
 153:
            var7 = {};
            var8 = _closure1_slot7;
            var7['padding'] = var8;
            var9 = _closure1_slot1;
            var8 = _closure1_slot3;
            var10 = var8[var6];
            var10 = var9.bind(var5)(var10);
            var10 = var10.colors;
            var10 = var10.CARD_PRIMARY_BG;
            var7['backgroundColor'] = var10;
            var8 = var8[var6];
            var8 = var9.bind(var5)(var8);
            var8 = var8.radii;
            var8 = var8.xl;
            var7['borderRadius'] = var8;
            var4 = var7;
 222:
            var12 = var2;
            var11 = var4;
            var4 = copyDataProperties(var12, var11);
            var1['cardContainer'] = var2;
            var2 = {'overflow': 'hidden', 'flex': 1};
            var1['cardInnerContainer'] = var2;
            var2 = {'width': 72, 'height': 72};
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.radii;
            var7 = var7.sm;
            var2['borderRadius'] = var7;
            var1['image'] = var2;
            var2 = {};
            var7 = 275;
            var2['maxWidth'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY;
            var2['color'] = var7;
            var1['gameName'] = var2;
            var2 = {'display': 'flex', 'flexDirection': 'row', 'gap': null, 'flexWrap': 'wrap', 'alignItems': 'center', 'marginTop': 6};
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_8;
            var2['gap'] = var3;
            var1['badges'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/content_inventory/GamingLikeEntryRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GamingLikeEntryRow(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var33 = var1.content;
            var _closure2_slot0 = var33;
            var11 = var1.renderForScreenshot;
            var3 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 10;
            var1 = var6[var1];
            var5 = undefined;
            var7 = var3.bind(var5)(var1);
            var4 = var7.useICYMIUXRefreshExperiment;
            var1 = 'GamingLikeEntryRow';
            var13 = var4.bind(var7)(var1);
            var1 = _closure1_slot13;
            var28 = var1.bind(var5)(var13);
            var1 = var33.extra;
            var4 = var1.application_id;
            var1 = var33.author_id;
            var _closure2_slot1 = var1;
            var1 = 11;
            var1 = var6[var1];
            var9 = var3.bind(var5)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getUser;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var22 = var8.bind(var9)(var7, var1);
            var1 = 12;
            var1 = var6[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useGetOrFetchApplication;
            var25 = var1.bind(var3)(var4);
            var1 = null;
            var3 = var1 == var25;
            var4 = undefined;
            if(var3) { _fun0004_ip = 183; continue _fun0004 }
 169:
            var6 = var25.getIconURL;
            var3 = 72;
            var4 = var6.bind(var25)(var3);
 183:
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 13;
            var3 = var7[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.bind(var5)(var4);
            var20 = var3.primaryColor;
            var3 = var1 == var25;
            var18 = undefined;
            if(var3) { _fun0004_ip = 237; continue _fun0004 }
 223:
            var4 = var25.getIconURL;
            var3 = 240;
            var18 = var4.bind(var25)(var3);
 237:
            var6 = _closure1_slot4;
            var7 = var6.useMemo;
            var4 = new Array(1);
            var4[0] = var33;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot0;
                    var4 = var1.content_type;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var1 = 14;
                    var1 = var6[var1];
                    var6 = undefined;
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.ContentInventoryEntryType;
                    var1 = var1.TOP_GAME;
                    if(!(var4 !== var1)) { _fun0005_ip = 97; continue _fun0005 }
 54:
                    var5 = _closure1_slot12;
                    var4 = var5.map;
                    var1 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var1 = arg1;
                            var6 = var1.Badge;
                            var3 = var1.predicate;
                            var1 = _closure2_slot0;
                            var5 = undefined;
                            var3 = var3.bind(var5)(var1);
                            var1 = null;
                            if(!var3) { _fun0006_ip = 64; continue _fun0006 }
 34:
                            var4 = _closure1_slot9;
                            var3 = {};
                            var2 = _closure2_slot0;
                            var3['entry'] = var2;
                            var2 = var6.name;
                            var1 = var4.bind(var5)(var6, var3, var2);
 64:
                            return var1;
                        }
                    };
                    var5 = var4.bind(var5)(var1);
                    var4 = var5.filter;
                    var1 = global;
                    var1 = var1.Boolean;
                    var1 = var4.bind(var5)(var1);
                    _fun0005_ip = 162; continue _fun0005;
 97:
                    var5 = _closure1_slot9;
                    var4 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var3 = 5;
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var4 = var3.TopGameBadge;
                    var3 = {};
                    var2 = _closure2_slot0;
                    var3['entry'] = var2;
                    var2 = 'topgame';
                    var3 = var5.bind(var6)(var4, var3, var2);
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
 162:
                    return var1;
                }
            };
            var27 = var7.bind(var6)(var3, var4);
            var4 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var33;
            var2 = function() {
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 16;
                var3 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = 15;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = var4.then;
                var2 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var2 = arg1;
                        var3 = var2.GameShareModal;
                        var _closure4_slot0 = var3;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0007_ip = 155; continue _fun0007 }
 24:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var2 = 17;
                        var2 = var6[var2];
                        var5 = undefined;
                        var2 = var4.bind(var5)(var2);
                        var10 = var2.ICYMIAnalytics;
                        var9 = var10.trackItemInteraction;
                        var2 = _closure2_slot0;
                        var8 = var2.id;
                        var7 = 'hotwheels_gaming_activity';
                        var4 = 'press_forward';
                        var4 = var9.bind(var10)(var8, var7, var4);
                        var4 = _closure1_slot1;
                        var3 = 18;
                        var3 = var6[var3];
                        var6 = var4.bind(var5)(var3);
                        var5 = var6.pushLazy;
                        var4 = {};
                        var4['content'] = var2;
                        var3 = {};
                        var2 = 'modal';
                        var3['presentation'] = var2;
                        var14 = function() {
                            var1 = global;
                            var3 = var1.Promise;
                            var2 = var3.resolve;
                            var1 = _closure4_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var12 = 'GameShareModal';
                        var15 = var6;
                        var13 = var4;
                        var11 = var3;
                        var1 = var15[var5](var14, var13, var12, var11, var10);
 155:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var14 = var4.bind(var6)(var2, var3);
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 19;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useReplyActions;
            var2 = {};
            var2['content'] = var33;
            var2 = var3.bind(var4)(var2);
            var15 = var2.openReplyActionSheet;
            if(!(var1 != var25)) { _fun0004_ip = 1610; continue _fun0004 }
 343:
            if(!(var1 != var22)) { _fun0004_ip = 1610; continue _fun0004 }
 350:
            if(!(var1 != var18)) { _fun0004_ip = 1610; continue _fun0004 }
 357:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var36 = 6;
            var2 = var2[var36];
            var3 = var3.bind(var5)(var2);
            var2 = var3.isEntryActive;
            var6 = var2.bind(var3)(var33);
            var7 = _closure1_slot0;
            var2 = _closure1_slot3;
            var16 = 20;
            var3 = var2[var16];
            var3 = var7.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var2[var16];
            var2 = var7.bind(var5)(var2);
            var2 = var2.t;
            if(var6) { _fun0004_ip = 450; continue _fun0004 }
 435:
            var6 = var2.ktOTRU;
            var19 = var3.bind(var4)(var6);
            _fun0004_ip = 463; continue _fun0004;
 450:
            var2 = var2.Gk1P8f;
            var19 = var3.bind(var4)(var2);
 463:
            if(var13) { _fun0004_ip = 478; continue _fun0004 }
 466:
            var2 = _closure1_slot4;
            var8 = var2.Fragment;
            _fun0004_ip = 482; continue _fun0004;
 478:
            var8 = _closure1_slot5;
 482:
            var4 = _closure1_slot9;
            var24 = _closure1_slot1;
            var17 = _closure1_slot3;
            var2 = 21;
            var2 = var17[var2];
            var3 = var24.bind(var5)(var2);
            var2 = {};
            var6 = var33.id;
            var2['contentId'] = var6;
            var6 = var33.author_id;
            var2['userId'] = var6;
            var6 = 'hotwheels_gaming_activity';
            var2['type'] = var6;
            var2['renderForScreenshot'] = var11;
            var9 = _closure1_slot11;
            var7 = _closure1_slot10;
            var6 = {};
            var12 = _closure1_slot0;
            var29 = 22;
            var10 = var17[var29];
            var10 = var12.bind(var5)(var10);
            var12 = var10.Text;
            var10 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            var26 = 'text-md/semibold';
            var23 = 23;
            var17 = var17[var23];
            var24 = var24.bind(var5)(var17);
            var17 = var24.getName;
            var17 = var17.bind(var24)(var22);
            var10['children'] = var17;
            var12 = var4.bind(var5)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var12 = null;
            if(!var13) { _fun0004_ip = 743; continue _fun0004 }
 638:
            var30 = _closure1_slot9;
            var32 = _closure1_slot0;
            var37 = _closure1_slot3;
            var17 = var37[var29];
            var17 = var32.bind(var5)(var17);
            var24 = var17.Text;
            var17 = {'lineClamp': 1, 'variant': 'text-xs/normal', 'color': 'header-muted'};
            var31 = 24;
            var31 = var37[var31];
            var34 = var32.bind(var5)(var31);
            var32 = var34.getRelativeTimestamp;
            var35 = _closure1_slot1;
            var31 = 25;
            var31 = var37[var31];
            var37 = var35.bind(var5)(var31);
            var35 = var37.extractTimestamp;
            var31 = var33.id;
            var31 = var35.bind(var37)(var31);
            var31 = var32.bind(var34)(var31);
            var17['children'] = var31;
            var12 = var30.bind(var5)(var24, var17);
 743:
            var10[1] = var12;
            var6['children'] = var10;
            var6 = var9.bind(var5)(var7, var6);
            var2['title'] = var6;
            var9 = _closure1_slot11;
            var7 = _closure1_slot10;
            var6 = {};
            var17 = _closure1_slot9;
            var30 = _closure1_slot0;
            var24 = _closure1_slot3;
            var10 = var24[var29];
            var10 = var30.bind(var5)(var10);
            var12 = var10.Text;
            var10 = {'variant': 'text-sm/normal', 'lineClamp': 1};
            var24 = var24[var36];
            var30 = var30.bind(var5)(var24);
            var24 = var30.isEntryActive;
            var30 = var24.bind(var30)(var33);
            var24 = 'header-secondary';
            if(!var30) { _fun0004_ip = 846; continue _fun0004 }
 840:
            var24 = 'status-positive';
 846:
            var10['color'] = var24;
            var10['children'] = var19;
            var12 = var17.bind(var5)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var12 = null;
            if(var13) { _fun0004_ip = 1084; continue _fun0004 }
 876:
            var19 = _closure1_slot11;
            var17 = _closure1_slot10;
            var13 = {};
            var32 = _closure1_slot9;
            var30 = _closure1_slot1;
            var34 = _closure1_slot3;
            var24 = 26;
            var24 = var34[var24];
            var30 = var30.bind(var5)(var24);
            var24 = {};
            var30 = var32.bind(var5)(var30, var24);
            var24 = new Array(2);
            var24[0] = var30;
            var35 = _closure1_slot0;
            var30 = var34[var29];
            var30 = var35.bind(var5)(var30);
            var31 = var30.Text;
            var30 = {'lineClamp': 1, 'variant': 'text-sm/normal'};
            var34 = var34[var36];
            var35 = var35.bind(var5)(var34);
            var34 = var35.isEntryActive;
            var35 = var34.bind(var35)(var33);
            var34 = 'header-muted';
            if(!var35) { _fun0004_ip = 993; continue _fun0004 }
 987:
            var34 = 'status-positive';
 993:
            var30['color'] = var34;
            var35 = _closure1_slot0;
            var38 = _closure1_slot3;
            var34 = 24;
            var34 = var38[var34];
            var35 = var35.bind(var5)(var34);
            var34 = var35.getRelativeTimestamp;
            var37 = _closure1_slot1;
            var36 = 25;
            var36 = var38[var36];
            var37 = var37.bind(var5)(var36);
            var36 = var37.extractTimestamp;
            var33 = var33.id;
            var33 = var36.bind(var37)(var33);
            var33 = var34.bind(var35)(var33);
            var30['children'] = var33;
            var30 = var32.bind(var5)(var31, var30);
            var24[1] = var30;
            var13['children'] = var24;
            var12 = var19.bind(var5)(var17, var13);
 1084:
            var10[1] = var12;
            var6['children'] = var10;
            var6 = var9.bind(var5)(var7, var6);
            var2['subtitle'] = var6;
            var7 = _closure1_slot11;
            var6 = {};
            var9 = var28.cardContainer;
            var6['style'] = var9;
            var10 = _closure1_slot5;
            var9 = {};
            var13 = var28.card;
            var12 = new Array(2);
            var12[0] = var13;
            var17 = var1 != var20;
            var13 = null;
            if(!var17) { _fun0004_ip = 1212; continue _fun0004 }
 1148:
            var17 = {};
            var24 = _closure1_slot1;
            var30 = _closure1_slot3;
            var19 = 27;
            var19 = var30[var19];
            var19 = var24.bind(var5)(var19);
            var24 = var19.bind(var5)(var20);
            var20 = var24.alpha;
            var19 = 0.5;
            var20 = var20.bind(var24)(var19);
            var19 = var20.hex;
            var19 = var19.bind(var20)();
            var17['backgroundColor'] = var19;
            var13 = var17;
 1212:
            var12[1] = var13;
            var9['style'] = var12;
            var24 = _closure1_slot9;
            var13 = _closure1_slot1;
            var19 = _closure1_slot3;
            var12 = 28;
            var12 = var19[var12];
            var13 = var13.bind(var5)(var12);
            var12 = {};
            var17 = {};
            var17['uri'] = var18;
            var12['source'] = var17;
            var17 = var28.image;
            var12['style'] = var17;
            var13 = var24.bind(var5)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var18 = _closure1_slot11;
            var17 = _closure1_slot5;
            var13 = {};
            var20 = var28.cardInnerContainer;
            var13['style'] = var20;
            var20 = _closure1_slot0;
            var19 = var19[var29];
            var19 = var20.bind(var5)(var19);
            var20 = var19.Text;
            var19 = {};
            var19['variant'] = var26;
            var26 = var28.gameName;
            var19['style'] = var26;
            var25 = var25.name;
            var19['children'] = var25;
            var20 = var24.bind(var5)(var20, var19);
            var19 = new Array(2);
            var19[0] = var20;
            var20 = var1 != var27;
            if(!var20) { _fun0004_ip = 1375; continue _fun0004 }
 1364:
            var25 = var27.length;
            var24 = 0;
            var20 = var25 > var24;
 1375:
            if(!var20) { _fun0004_ip = 1408; continue _fun0004 }
 1378:
            var26 = _closure1_slot9;
            var25 = _closure1_slot5;
            var24 = {};
            var28 = var28.badges;
            var24['style'] = var28;
            var24['children'] = var27;
            var20 = var26.bind(var5)(var25, var24);
 1408:
            var19[1] = var20;
            var13['children'] = var19;
            var13 = var18.bind(var5)(var17, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var10 = var7.bind(var5)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = null;
            if(var11) { _fun0004_ip = 1584; continue _fun0004 }
 1452:
            var13 = _closure1_slot9;
            var17 = _closure1_slot0;
            var20 = _closure1_slot3;
            var11 = 29;
            var11 = var20[var11];
            var11 = var17.bind(var5)(var11);
            var12 = var11.ContentInventoryReplyRow;
            var11 = {};
            var18 = var20[var16];
            var18 = var17.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.formatToPlainString;
            var16 = var20[var16];
            var16 = var17.bind(var5)(var16);
            var16 = var16.t;
            var17 = var16.ghWi8f;
            var16 = {};
            var21 = _closure1_slot1;
            var20 = var20[var23];
            var21 = var21.bind(var5)(var20);
            var20 = var21.getName;
            var20 = var20.bind(var21)(var22);
            var16['username'] = var20;
            var16 = var18.bind(var19)(var17, var16);
            var11['reactText'] = var16;
            var11['onReply'] = var15;
            var11['onForward'] = var14;
            var10 = var13.bind(var5)(var12, var11);
 1584:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var7.bind(var5)(var8, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1610:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
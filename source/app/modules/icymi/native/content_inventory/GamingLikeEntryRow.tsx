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
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var7 = var4.Fragment;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var7 = {};
    var8 = 4;
    var4 = var6[var8];
    var4 = var9.bind(var1)(var4);
    var4 = var4.NewGameBadge;
    var7['Badge'] = var4;
    var4 = 5;
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
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getStreakCount;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            var3 = var2 != var1;
            var2 = 0;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var1;
case 2:
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
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 5;
            var1 = var4[var1];
            var5 = undefined;
            var4 = var3.bind(var5)(var1);
            var3 = var4.getTrendingType;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var2 = 6;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.TrendingType;
            var2 = var2.TRENDING_TYPE_UNSPECIFIED;
            var1 = var3 !== var2;
case 4:
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
        var1 = 5;
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
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createICYMIStyles;
    var4 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg1;
            var4 = arg2;
            var1 = {};
            var2 = {'flexDirection': 'row', 'gap': null, 'alignItems': 'center'};
            var3 = var8.margin;
            var2['gap'] = var3;
            var3 = var8.margin;
            var2['padding'] = var3;
            var3 = 0;
            if(var4) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var3 = var8.inset;
case 6:
            var2['marginLeft'] = var3;
            var9 = _closure1_slot1;
            var7 = _closure1_slot3;
            var6 = 8;
            var10 = var7[var6];
            var5 = undefined;
            var10 = var9.bind(var5)(var10);
            var10 = var10.radii;
            var10 = var10.lg;
            var2['borderRadius'] = var10;
            var10 = var7[var6];
            var10 = var9.bind(var5)(var10);
            var10 = var10.colors;
            var10 = var10.BG_SURFACE_RAISED;
            var2['backgroundColor'] = var10;
            var7 = var7[var6];
            var7 = var9.bind(var5)(var7);
            var7 = var7.shadows;
            var11 = var7.SHADOW_HIGH;
            var12 = var2;
            var7 = copyDataProperties(var12, var11);
            var1['card'] = var2;
            var2 = {};
            if(var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var4 = {};
            _fun0003_ip = 10; continue _fun0003;
case 8:
            var7 = {};
            var8 = var8.margin;
            var7['padding'] = var8;
            var9 = _closure1_slot1;
            var8 = _closure1_slot3;
            var10 = var8[var6];
            var10 = var9.bind(var5)(var10);
            var10 = var10.colors;
            var10 = var10.CARD_PRIMARY_BG;
            var7['backgroundColor'] = var10;
            var10 = var8[var6];
            var10 = var9.bind(var5)(var10);
            var10 = var10.radii;
            var10 = var10.xl;
            var7['borderRadius'] = var10;
            var10 = 1;
            var7['borderWidth'] = var10;
            var8 = var8[var6];
            var8 = var9.bind(var5)(var8);
            var8 = var8.colors;
            var8 = var8.BORDER_FAINT;
            var7['borderColor'] = var8;
            var4 = var7;
case 10:
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
    var _closure1_slot11 = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/content_inventory/GamingLikeEntryRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GamingLikeEntryRow(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var32 = var1.content;
            var _closure2_slot0 = var32;
            var11 = var1.renderForScreenshot;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var3 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 9;
            var1 = var6[var1];
            var7 = var3.bind(var5)(var1);
            var4 = var7.useDestinationICYMIExperiment;
            var1 = {};
            var8 = 'GamingLikeEntryRow';
            var1['location'] = var8;
            var1 = var4.bind(var7)(var1);
            var4 = var1.isNewCardDesign;
            var12 = var1.isNewHeaderAndInteractions;
            var1 = _closure1_slot11;
            var27 = var1.bind(var5)(var4);
            var1 = var32.extra;
            var4 = var1.application_id;
            var1 = var32.author_id;
            var _closure2_slot1 = var1;
            var1 = 10;
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
            var1 = 11;
            var1 = var6[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useGetOrFetchApplication;
            var24 = var1.bind(var3)(var4);
            var1 = null;
            var3 = var1 == var24;
            var4 = undefined;
            if(var3) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var6 = var24.getIconURL;
            var3 = 72;
            var4 = var6.bind(var24)(var3);
case 11:
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 12;
            var3 = var7[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.bind(var5)(var4);
            var19 = var3.primaryColor;
            var3 = var1 == var24;
            var17 = undefined;
            if(var3) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var4 = var24.getIconURL;
            var3 = 240;
            var17 = var4.bind(var24)(var3);
case 13:
            var6 = _closure1_slot4;
            var7 = var6.useMemo;
            var4 = new Array(1);
            var4[0] = var32;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = var1.content_type;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var1 = 13;
                    var1 = var6[var1];
                    var6 = undefined;
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.ContentInventoryEntryType;
                    var1 = var1.TOP_GAME;
                    if(!(var4 !== var1)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                    var5 = _closure1_slot10;
                    var4 = var5.map;
                    var1 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var1 = arg1;
                            var6 = var1.Badge;
                            var3 = var1.predicate;
                            var1 = _closure2_slot0;
                            var5 = undefined;
                            var3 = var3.bind(var5)(var1);
                            var1 = null;
                            if(!var3) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                            var4 = _closure1_slot7;
                            var3 = {};
                            var2 = _closure2_slot0;
                            var3['entry'] = var2;
                            var2 = var6.name;
                            var1 = var4.bind(var5)(var6, var3, var2);
case 17:
                            return var1;
                        }
                    };
                    var5 = var4.bind(var5)(var1);
                    var4 = var5.filter;
                    var1 = global;
                    var1 = var1.Boolean;
                    var1 = var4.bind(var5)(var1);
                    _fun0005_ip = 9; continue _fun0005;
case 15:
                    var5 = _closure1_slot7;
                    var4 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var3 = 4;
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
case 9:
                    return var1;
                }
            };
            var26 = var7.bind(var6)(var3, var4);
            var7 = var6.useCallback;
            var4 = new Array(1);
            var4[0] = var32;
            var3 = function() {
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 15;
                var3 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = 14;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = var4.then;
                var2 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var2 = arg1;
                        var3 = var2.GameShareModal;
                        var _closure4_slot0 = var3;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0007_ip = 19; continue _fun0007 }
case 20:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var2 = 16;
                        var2 = var6[var2];
                        var4 = undefined;
                        var10 = var5.bind(var4)(var2);
                        var9 = var10.itemInteracted;
                        var2 = _closure2_slot0;
                        var8 = var2.id;
                        var7 = 'hotwheels_gaming_activity';
                        var3 = 'press_forward';
                        var3 = var9.bind(var10)(var8, var7, var3);
                        var3 = 17;
                        var3 = var6[var3];
                        var6 = var5.bind(var4)(var3);
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
case 19:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var14 = var7.bind(var6)(var3, var4);
            var4 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 18;
            var3 = var7[var3];
            var7 = var4.bind(var5)(var3);
            var4 = var7.useReplyActions;
            var3 = {};
            var3['content'] = var32;
            var3 = var4.bind(var7)(var3);
            var15 = var3.openReplyActionSheet;
            _closure2_slot2 = var15;
            var4 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var32;
            var3[1] = var15;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.itemInteracted;
                var3 = _closure2_slot0;
                var5 = var3.id;
                var4 = 'hotwheels_gaming_activity';
                var3 = 'press';
                var3 = var6.bind(var7)(var5, var4, var3);
                var2 = _closure2_slot2;
                var2 = var2.bind(var1)();
                return var1;
            };
            var6 = var4.bind(var6)(var2, var3);
            if(!(var1 != var24)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            if(!(var1 != var22)) { _fun0004_ip = 21; continue _fun0004 }
case 23:
            if(!(var1 != var17)) { _fun0004_ip = 21; continue _fun0004 }
case 24:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var35 = 5;
            var2 = var2[var35];
            var3 = var3.bind(var5)(var2);
            var2 = var3.isEntryActive;
            var7 = var2.bind(var3)(var32);
            var8 = _closure1_slot0;
            var2 = _closure1_slot3;
            var16 = 19;
            var3 = var2[var16];
            var3 = var8.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var2[var16];
            var2 = var8.bind(var5)(var2);
            var2 = var2.t;
            if(var7) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var7 = var2.ktOTRU;
            var18 = var3.bind(var4)(var7);
            _fun0004_ip = 27; continue _fun0004;
case 25:
            var2 = var2.Gk1P8f;
            var18 = var3.bind(var4)(var2);
case 27:
            var4 = _closure1_slot7;
            var20 = _closure1_slot1;
            var13 = _closure1_slot3;
            var2 = 20;
            var2 = var13[var2];
            var3 = var20.bind(var5)(var2);
            var2 = {};
            var7 = var32.id;
            var2['contentId'] = var7;
            var7 = var32.author_id;
            var2['userId'] = var7;
            var7 = 'hotwheels_gaming_activity';
            var2['type'] = var7;
            var2['renderForScreenshot'] = var11;
            var2['onPress'] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot8;
            var6 = {};
            var10 = _closure1_slot0;
            var28 = 21;
            var9 = var13[var28];
            var9 = var10.bind(var5)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            var25 = 'text-md/semibold';
            var23 = 22;
            var13 = var13[var23];
            var20 = var20.bind(var5)(var13);
            var13 = var20.getName;
            var13 = var13.bind(var20)(var22);
            var9['children'] = var13;
            var10 = var4.bind(var5)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = null;
            if(!var12) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var29 = _closure1_slot7;
            var31 = _closure1_slot0;
            var36 = _closure1_slot3;
            var13 = var36[var28];
            var13 = var31.bind(var5)(var13);
            var20 = var13.Text;
            var13 = {'lineClamp': 1, 'variant': 'text-xs/normal', 'color': 'header-muted'};
            var30 = 23;
            var30 = var36[var30];
            var33 = var31.bind(var5)(var30);
            var31 = var33.getRelativeTimestamp;
            var34 = _closure1_slot1;
            var30 = 24;
            var30 = var36[var30];
            var36 = var34.bind(var5)(var30);
            var34 = var36.extractTimestamp;
            var30 = var32.id;
            var30 = var34.bind(var36)(var30);
            var30 = var31.bind(var33)(var30);
            var13['children'] = var30;
            var10 = var29.bind(var5)(var20, var13);
case 28:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['title'] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot8;
            var6 = {};
            var13 = _closure1_slot7;
            var29 = _closure1_slot0;
            var20 = _closure1_slot3;
            var9 = var20[var28];
            var9 = var29.bind(var5)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'text-sm/normal', 'lineClamp': 1};
            var20 = var20[var35];
            var29 = var29.bind(var5)(var20);
            var20 = var29.isEntryActive;
            var29 = var20.bind(var29)(var32);
            var20 = 'header-secondary';
            if(!var29) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var20 = 'status-positive';
case 30:
            var9['color'] = var20;
            var9['children'] = var18;
            var10 = var13.bind(var5)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = null;
            if(var12) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var18 = _closure1_slot9;
            var13 = _closure1_slot8;
            var12 = {};
            var31 = _closure1_slot7;
            var29 = _closure1_slot1;
            var33 = _closure1_slot3;
            var20 = 25;
            var20 = var33[var20];
            var29 = var29.bind(var5)(var20);
            var20 = {};
            var29 = var31.bind(var5)(var29, var20);
            var20 = new Array(2);
            var20[0] = var29;
            var34 = _closure1_slot0;
            var29 = var33[var28];
            var29 = var34.bind(var5)(var29);
            var30 = var29.Text;
            var29 = {'lineClamp': 1, 'variant': 'text-sm/normal'};
            var33 = var33[var35];
            var34 = var34.bind(var5)(var33);
            var33 = var34.isEntryActive;
            var34 = var33.bind(var34)(var32);
            var33 = 'header-muted';
            if(!var34) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var33 = 'status-positive';
case 34:
            var29['color'] = var33;
            var34 = _closure1_slot0;
            var37 = _closure1_slot3;
            var33 = 23;
            var33 = var37[var33];
            var34 = var34.bind(var5)(var33);
            var33 = var34.getRelativeTimestamp;
            var36 = _closure1_slot1;
            var35 = 24;
            var35 = var37[var35];
            var36 = var36.bind(var5)(var35);
            var35 = var36.extractTimestamp;
            var32 = var32.id;
            var32 = var35.bind(var36)(var32);
            var32 = var33.bind(var34)(var32);
            var29['children'] = var32;
            var29 = var31.bind(var5)(var30, var29);
            var20[1] = var29;
            var12['children'] = var20;
            var10 = var18.bind(var5)(var13, var12);
case 32:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['subtitle'] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var27.cardContainer;
            var6['style'] = var9;
            var9 = {};
            var12 = var27.card;
            var10 = new Array(2);
            var10[0] = var12;
            var13 = var1 != var19;
            var12 = null;
            if(!var13) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var13 = {};
            var20 = _closure1_slot1;
            var29 = _closure1_slot3;
            var18 = 26;
            var18 = var29[var18];
            var18 = var20.bind(var5)(var18);
            var20 = var18.bind(var5)(var19);
            var19 = var20.alpha;
            var18 = 0.5;
            var19 = var19.bind(var20)(var18);
            var18 = var19.hex;
            var18 = var18.bind(var19)();
            var13['backgroundColor'] = var18;
            var12 = var13;
case 36:
            var10[1] = var12;
            var9['style'] = var10;
            var20 = _closure1_slot7;
            var12 = _closure1_slot1;
            var18 = _closure1_slot3;
            var10 = 27;
            var10 = var18[var10];
            var12 = var12.bind(var5)(var10);
            var10 = {};
            var13 = {};
            var13['uri'] = var17;
            var10['source'] = var13;
            var13 = var27.image;
            var10['style'] = var13;
            var12 = var20.bind(var5)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var17 = _closure1_slot9;
            var13 = _closure1_slot5;
            var12 = {};
            var19 = var27.cardInnerContainer;
            var12['style'] = var19;
            var19 = _closure1_slot0;
            var18 = var18[var28];
            var18 = var19.bind(var5)(var18);
            var19 = var18.Text;
            var18 = {};
            var18['variant'] = var25;
            var25 = var27.gameName;
            var18['style'] = var25;
            var24 = var24.name;
            var18['children'] = var24;
            var19 = var20.bind(var5)(var19, var18);
            var18 = new Array(2);
            var18[0] = var19;
            var19 = var1 != var26;
            if(!var19) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var24 = var26.length;
            var20 = 0;
            var19 = var24 > var20;
case 38:
            if(!var19) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var25 = _closure1_slot7;
            var24 = _closure1_slot5;
            var20 = {};
            var27 = var27.badges;
            var20['style'] = var27;
            var20['children'] = var26;
            var19 = var25.bind(var5)(var24, var20);
case 40:
            var18[1] = var19;
            var12['children'] = var18;
            var12 = var17.bind(var5)(var13, var12);
            var10[1] = var12;
            var9['children'] = var10;
            var10 = var8.bind(var5)(var7, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = null;
            if(var11) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var13 = _closure1_slot7;
            var17 = _closure1_slot0;
            var20 = _closure1_slot3;
            var11 = 28;
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
case 42:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 21:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
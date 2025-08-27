// app/modules/icymi/native/content_inventory/GamingLikeEntryRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var9 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var9;
    var _closure1_slot3 = var6;
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
    var4 = var9.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.ICYMI_MARGIN;
    var10 = var4.MESSAGE_CONTENT_INSET;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var7 = var4.Fragment;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
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
    var13 = var6[var8];
    var13 = var9.bind(var1)(var13);
    var13 = var13.StreakBadge;
    var7['Badge'] = var13;
    var13 = function predicate(arg1) {
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
    var7['predicate'] = var13;
    var4[1] = var7;
    var7 = {};
    var13 = var6[var8];
    var13 = var9.bind(var1)(var13);
    var13 = var13.TrendingBadge;
    var7['Badge'] = var13;
    var13 = function predicate(arg1) {
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
    var7['predicate'] = var13;
    var4[2] = var7;
    var7 = {};
    var13 = var6[var8];
    var13 = var9.bind(var1)(var13);
    var13 = var13.ResurrectedBadge;
    var7['Badge'] = var13;
    var13 = function predicate() {
        var1 = true;
        return var1;
    };
    var7['predicate'] = var13;
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
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'gap': null, 'alignItems': 'center'};
    var9['gap'] = var12;
    var9['padding'] = var12;
    var9['marginLeft'] = var10;
    var10 = 9;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9['borderRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_SURFACE_RAISED;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.shadows;
    var15 = var12.SHADOW_HIGH;
    var16 = var9;
    var12 = copyDataProperties(var16, var15);
    var4['card'] = var9;
    var9 = {'overflow': 'hidden', 'flex': 1};
    var4['cardInnerContainer'] = var9;
    var9 = {'width': 72, 'height': 72};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9['borderRadius'] = var12;
    var4['image'] = var9;
    var9 = {};
    var12 = 275;
    var9['maxWidth'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY;
    var9['color'] = var12;
    var4['gameName'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'gap': null, 'flexWrap': 'wrap', 'alignItems': 'center', 'marginTop': 6};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9['gap'] = var10;
    var4['badges'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/content_inventory/GamingLikeEntryRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GamingLikeEntryRow(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var17 = var1.content;
            var _closure2_slot0 = var17;
            var8 = var1.renderForScreenshot;
            var1 = _closure1_slot11;
            var5 = undefined;
            var26 = var1.bind(var5)();
            var1 = var17.extra;
            var4 = var1.application_id;
            var1 = var17.author_id;
            var _closure2_slot1 = var1;
            var3 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 10;
            var1 = var6[var1];
            var10 = var3.bind(var5)(var1);
            var9 = var10.useStateFromStores;
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
            var19 = var9.bind(var10)(var7, var1);
            var1 = 11;
            var1 = var6[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useGetOrFetchApplication;
            var23 = var1.bind(var3)(var4);
            var1 = null;
            var3 = var1 == var23;
            var4 = undefined;
            if(var3) { _fun0003_ip = 153; continue _fun0003 }
 139:
            var6 = var23.getIconURL;
            var3 = 72;
            var4 = var6.bind(var23)(var3);
 153:
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 12;
            var3 = var7[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.bind(var5)(var4);
            var21 = var3.primaryColor;
            var3 = var1 == var23;
            var16 = undefined;
            if(var3) { _fun0003_ip = 207; continue _fun0003 }
 193:
            var4 = var23.getIconURL;
            var3 = 240;
            var16 = var4.bind(var23)(var3);
 207:
            var6 = _closure1_slot4;
            var7 = var6.useMemo;
            var4 = new Array(1);
            var4[0] = var17;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
                    if(!(var4 !== var1)) { _fun0004_ip = 97; continue _fun0004 }
 54:
                    var5 = _closure1_slot10;
                    var4 = var5.map;
                    var1 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var1 = arg1;
                            var6 = var1.Badge;
                            var3 = var1.predicate;
                            var1 = _closure2_slot0;
                            var5 = undefined;
                            var3 = var3.bind(var5)(var1);
                            var1 = null;
                            if(!var3) { _fun0005_ip = 64; continue _fun0005 }
 34:
                            var4 = _closure1_slot7;
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
                    _fun0004_ip = 162; continue _fun0004;
 97:
                    var5 = _closure1_slot7;
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
            var25 = var7.bind(var6)(var3, var4);
            var4 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var17;
            var2 = function() {
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
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var2 = arg1;
                        var3 = var2.GameShareModal;
                        var _closure4_slot0 = var3;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0006_ip = 155; continue _fun0006 }
 24:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var2 = 16;
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
                        var3 = 17;
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
            var11 = var4.bind(var6)(var2, var3);
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 18;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useReplyActions;
            var2 = {};
            var2['content'] = var17;
            var2 = var3.bind(var4)(var2);
            var12 = var2.openReplyActionSheet;
            if(!(var1 != var23)) { _fun0003_ip = 1345; continue _fun0003 }
 313:
            if(!(var1 != var19)) { _fun0003_ip = 1345; continue _fun0003 }
 320:
            if(!(var1 != var16)) { _fun0003_ip = 1345; continue _fun0003 }
 327:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var29 = 6;
            var2 = var2[var29];
            var3 = var3.bind(var5)(var2);
            var2 = var3.isEntryActive;
            var6 = var2.bind(var3)(var17);
            var7 = _closure1_slot0;
            var2 = _closure1_slot3;
            var13 = 19;
            var3 = var2[var13];
            var3 = var7.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var2[var13];
            var2 = var7.bind(var5)(var2);
            var2 = var2.t;
            if(var6) { _fun0003_ip = 420; continue _fun0003 }
 405:
            var6 = var2.ktOTRU;
            var15 = var3.bind(var4)(var6);
            _fun0003_ip = 433; continue _fun0003;
 420:
            var2 = var2.Gk1P8f;
            var15 = var3.bind(var4)(var2);
 433:
            var4 = _closure1_slot9;
            var10 = _closure1_slot1;
            var22 = _closure1_slot3;
            var2 = 20;
            var2 = var22[var2];
            var3 = var10.bind(var5)(var2);
            var2 = {};
            var6 = var17.id;
            var2['contentId'] = var6;
            var6 = var17.author_id;
            var2['userId'] = var6;
            var6 = 'hotwheels_gaming_activity';
            var2['type'] = var6;
            var2['renderForScreenshot'] = var8;
            var14 = _closure1_slot7;
            var28 = _closure1_slot0;
            var27 = 21;
            var6 = var22[var27];
            var6 = var28.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            var24 = 'text-md/semibold';
            var20 = 22;
            var9 = var22[var20];
            var10 = var10.bind(var5)(var9);
            var9 = var10.getName;
            var9 = var9.bind(var10)(var19);
            var6['children'] = var9;
            var6 = var14.bind(var5)(var7, var6);
            var2['title'] = var6;
            var7 = _closure1_slot8;
            var6 = {};
            var9 = var22[var27];
            var9 = var28.bind(var5)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'text-sm/normal', 'lineClamp': 1};
            var22 = var22[var29];
            var28 = var28.bind(var5)(var22);
            var22 = var28.isEntryActive;
            var28 = var22.bind(var28)(var17);
            var22 = 'header-secondary';
            if(!var28) { _fun0003_ip = 639; continue _fun0003 }
 633:
            var22 = 'status-positive';
 639:
            var9['color'] = var22;
            var9['children'] = var15;
            var10 = var14.bind(var5)(var10, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var15 = _closure1_slot7;
            var14 = _closure1_slot1;
            var22 = _closure1_slot3;
            var10 = 23;
            var10 = var22[var10];
            var14 = var14.bind(var5)(var10);
            var10 = {};
            var10 = var15.bind(var5)(var14, var10);
            var9[1] = var10;
            var28 = _closure1_slot0;
            var10 = var22[var27];
            var10 = var28.bind(var5)(var10);
            var14 = var10.Text;
            var10 = {'lineClamp': 1, 'variant': 'text-sm/normal'};
            var22 = var22[var29];
            var28 = var28.bind(var5)(var22);
            var22 = var28.isEntryActive;
            var28 = var22.bind(var28)(var17);
            var22 = 'header-muted';
            if(!var28) { _fun0003_ip = 764; continue _fun0003 }
 758:
            var22 = 'status-positive';
 764:
            var10['color'] = var22;
            var28 = _closure1_slot0;
            var31 = _closure1_slot3;
            var22 = 24;
            var22 = var31[var22];
            var28 = var28.bind(var5)(var22);
            var22 = var28.getRelativeTimestamp;
            var30 = _closure1_slot1;
            var29 = 25;
            var29 = var31[var29];
            var30 = var30.bind(var5)(var29);
            var29 = var30.extractTimestamp;
            var17 = var17.id;
            var17 = var29.bind(var30)(var17);
            var17 = var22.bind(var28)(var17);
            var10['children'] = var17;
            var10 = var15.bind(var5)(var14, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var4.bind(var5)(var7, var6);
            var2['subtitle'] = var6;
            var9 = _closure1_slot9;
            var7 = _closure1_slot5;
            var6 = {};
            var14 = var26.card;
            var10 = new Array(2);
            var10[0] = var14;
            var15 = var1 != var21;
            var14 = null;
            if(!var15) { _fun0003_ip = 957; continue _fun0003 }
 893:
            var15 = {};
            var22 = _closure1_slot1;
            var28 = _closure1_slot3;
            var17 = 26;
            var17 = var28[var17];
            var17 = var22.bind(var5)(var17);
            var22 = var17.bind(var5)(var21);
            var21 = var22.alpha;
            var17 = 0.5;
            var21 = var21.bind(var22)(var17);
            var17 = var21.hex;
            var17 = var17.bind(var21)();
            var15['backgroundColor'] = var17;
            var14 = var15;
 957:
            var10[1] = var14;
            var6['style'] = var10;
            var22 = _closure1_slot7;
            var14 = _closure1_slot1;
            var17 = _closure1_slot3;
            var10 = 27;
            var10 = var17[var10];
            var14 = var14.bind(var5)(var10);
            var10 = {};
            var15 = {};
            var15['uri'] = var16;
            var10['source'] = var15;
            var15 = var26.image;
            var10['style'] = var15;
            var14 = var22.bind(var5)(var14, var10);
            var10 = new Array(2);
            var10[0] = var14;
            var16 = _closure1_slot9;
            var15 = _closure1_slot5;
            var14 = {};
            var21 = var26.cardInnerContainer;
            var14['style'] = var21;
            var21 = _closure1_slot0;
            var17 = var17[var27];
            var17 = var21.bind(var5)(var17);
            var21 = var17.Text;
            var17 = {};
            var17['variant'] = var24;
            var24 = var26.gameName;
            var17['style'] = var24;
            var23 = var23.name;
            var17['children'] = var23;
            var21 = var22.bind(var5)(var21, var17);
            var17 = new Array(2);
            var17[0] = var21;
            var21 = var1 != var25;
            if(!var21) { _fun0003_ip = 1120; continue _fun0003 }
 1109:
            var23 = var25.length;
            var22 = 0;
            var21 = var23 > var22;
 1120:
            if(!var21) { _fun0003_ip = 1153; continue _fun0003 }
 1123:
            var24 = _closure1_slot7;
            var23 = _closure1_slot5;
            var22 = {};
            var26 = var26.badges;
            var22['style'] = var26;
            var22['children'] = var25;
            var21 = var24.bind(var5)(var23, var22);
 1153:
            var17[1] = var21;
            var14['children'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var10[1] = var14;
            var6['children'] = var10;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = null;
            if(var8) { _fun0003_ip = 1329; continue _fun0003 }
 1197:
            var10 = _closure1_slot7;
            var14 = _closure1_slot0;
            var17 = _closure1_slot3;
            var8 = 28;
            var8 = var17[var8];
            var8 = var14.bind(var5)(var8);
            var9 = var8.ContentInventoryReplyRow;
            var8 = {};
            var15 = var17[var13];
            var15 = var14.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.formatToPlainString;
            var13 = var17[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.t;
            var14 = var13.ghWi8f;
            var13 = {};
            var18 = _closure1_slot1;
            var17 = var17[var20];
            var18 = var18.bind(var5)(var17);
            var17 = var18.getName;
            var17 = var17.bind(var18)(var19);
            var13['username'] = var17;
            var13 = var15.bind(var16)(var14, var13);
            var8['reactText'] = var13;
            var8['onReply'] = var12;
            var8['onForward'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 1329:
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1345:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
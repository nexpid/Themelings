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
    var4 = function(arg1) {
        var3 = arg1;
        var1 = {};
        var2 = {'flexDirection': 'row', 'gap': null, 'alignItems': 'center'};
        var4 = var3.margin;
        var2['gap'] = var4;
        var4 = var3.margin;
        var2['padding'] = var4;
        var3 = var3.inset;
        var2['marginLeft'] = var3;
        var5 = _closure1_slot1;
        var6 = _closure1_slot3;
        var3 = 8;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.lg;
        var2['borderRadius'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BACKGROUND_SURFACE_HIGH;
        var2['backgroundColor'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.shadows;
        var8 = var7.SHADOW_HIGH;
        var9 = var2;
        var7 = copyDataProperties(var9, var8);
        var1['card'] = var2;
        var2 = {'overflow': 'hidden', 'flex': 1};
        var1['cardInnerContainer'] = var2;
        var2 = {'width': 72, 'height': 72};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.sm;
        var2['borderRadius'] = var7;
        var1['image'] = var2;
        var2 = {};
        var7 = 275;
        var2['maxWidth'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY;
        var2['color'] = var7;
        var1['gameName'] = var2;
        var2 = {'display': 'flex', 'flexDirection': 'row', 'gap': null, 'flexWrap': 'wrap', 'alignItems': 'center', 'marginTop': 6};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_8;
        var2['gap'] = var3;
        var1['badges'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/content_inventory/GamingLikeEntryRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GamingLikeEntryRow(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var13 = var1.content;
            var _closure2_slot0 = var13;
            var11 = var1.renderForScreenshot;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var1 = _closure1_slot11;
            var27 = var1.bind(var5)();
            var1 = var13.extra;
            var4 = var1.application_id;
            var8 = var13.author_id;
            var _closure2_slot1 = var8;
            var3 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 9;
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
            var22 = var9.bind(var10)(var7, var1);
            var7 = _closure1_slot1;
            var1 = 10;
            var1 = var6[var1];
            var7 = var7.bind(var5)(var1);
            var1 = {};
            var1['userId'] = var8;
            var10 = var7.bind(var5)(var1);
            var1 = 11;
            var1 = var6[var1];
            var9 = var3.bind(var5)(var1);
            var7 = var9.useDisplayNameStylesFont;
            var1 = {};
            var1['displayNameStyles'] = var10;
            var23 = var7.bind(var9)(var1);
            var1 = 12;
            var1 = var6[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useGetOrFetchApplication;
            var28 = var1.bind(var3)(var4);
            var1 = null;
            var3 = var1 == var28;
            var6 = undefined;
            if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var7 = var28.getIconURL;
            var3 = 72;
            var6 = var7.bind(var28)(var3);
case 6:
            var7 = _closure1_slot1;
            var9 = _closure1_slot3;
            var3 = 13;
            var3 = var9[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.bind(var5)(var6);
            var18 = var3.primaryColor;
            var3 = var1 == var28;
            var34 = undefined;
            if(var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var6 = var28.getIconURL;
            var3 = 240;
            var34 = var6.bind(var28)(var3);
case 8:
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 14;
            var3 = var7[var3];
            var6 = var6.bind(var5)(var3);
            var3 = {};
            var9 = 'ICYMI Activity Card';
            var3['location'] = var9;
            var3['applicationId'] = var4;
            var4 = _closure1_slot0;
            var9 = 15;
            var9 = var7[var9];
            var9 = var4.bind(var5)(var9);
            var9 = var9.GameProfileSources;
            var9 = var9.ActivityCard;
            var3['source'] = var9;
            var9 = true;
            var3['trackEntryPointImpression'] = var9;
            var3['sourceUserId'] = var8;
            var32 = var6.bind(var5)(var3);
            _closure2_slot2 = var32;
            var6 = _closure1_slot4;
            var9 = var6.useCallback;
            var8 = new Array(1);
            var8[0] = var32;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var33 = var9.bind(var6)(var3, var8);
            var9 = var6.useMemo;
            var8 = new Array(1);
            var8[0] = var13;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = var1.content_type;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var1 = 16;
                    var1 = var6[var1];
                    var6 = undefined;
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.ContentInventoryEntryType;
                    var1 = var1.TOP_GAME;
                    if(!(var4 !== var1)) { _fun0005_ip = 12; continue _fun0005 }
case 13:
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
                            if(!var3) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                            var4 = _closure1_slot7;
                            var3 = {};
                            var2 = _closure2_slot0;
                            var3['entry'] = var2;
                            var2 = var6.name;
                            var1 = var4.bind(var5)(var6, var3, var2);
case 14:
                            return var1;
                        }
                    };
                    var5 = var4.bind(var5)(var1);
                    var4 = var5.filter;
                    var1 = global;
                    var1 = var1.Boolean;
                    var1 = var4.bind(var5)(var1);
                    _fun0005_ip = 16; continue _fun0005;
case 12:
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
case 16:
                    return var1;
                }
            };
            var26 = var9.bind(var6)(var3, var8);
            var9 = var6.useCallback;
            var8 = new Array(1);
            var8[0] = var13;
            var3 = function() {
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 18;
                var3 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = 17;
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
                        if(!(var2 != var3)) { _fun0007_ip = 17; continue _fun0007 }
case 18:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 19;
                        var2 = var6[var3];
                        var4 = undefined;
                        var11 = var5.bind(var4)(var2);
                        var10 = var11.itemInteracted;
                        var2 = _closure2_slot0;
                        var8 = var2.id;
                        var9 = 'hotwheels_gaming_activity';
                        var7 = 'press_forward';
                        var7 = var10.bind(var11)(var8, var9, var7);
                        var3 = var6[var3];
                        var8 = var5.bind(var4)(var3);
                        var7 = var8.feedItemActioned;
                        var3 = {};
                        var10 = var2.id;
                        var3['itemId'] = var10;
                        var3['itemType'] = var9;
                        var9 = {'actionGestureType': 'press', 'actionTargetElement': 'forward_button', 'actionIntentType': 'share', 'actionDestinationType': null};
                        var3['actionParameters'] = var9;
                        var3 = var7.bind(var8)(var3);
                        var3 = 20;
                        var3 = var6[var3];
                        var6 = var5.bind(var4)(var3);
                        var5 = var6.pushLazy;
                        var4 = {};
                        var4['content'] = var2;
                        var3 = {};
                        var2 = 'modal';
                        var3['presentation'] = var2;
                        var15 = function() {
                            var1 = global;
                            var3 = var1.Promise;
                            var2 = var3.resolve;
                            var1 = _closure4_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var13 = 'GameShareModal';
                        var16 = var6;
                        var14 = var4;
                        var12 = var3;
                        var1 = var16[var5](var15, var14, var13, var12, var11);
case 17:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var14 = var9.bind(var6)(var3, var8);
            var3 = 21;
            var3 = var7[var3];
            var7 = var4.bind(var5)(var3);
            var4 = var7.useReplyActions;
            var3 = {};
            var3['content'] = var13;
            var3 = var4.bind(var7)(var3);
            var15 = var3.openReplyActionSheet;
            _closure2_slot3 = var15;
            var4 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var13;
            var3[1] = var15;
            var2 = function() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var3 = 19;
                var2 = var5[var3];
                var1 = undefined;
                var11 = var4.bind(var1)(var2);
                var10 = var11.itemInteracted;
                var7 = _closure2_slot0;
                var9 = var7.id;
                var6 = 'hotwheels_gaming_activity';
                var8 = 'press';
                var8 = var10.bind(var11)(var9, var6, var8);
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.feedItemActioned;
                var3 = {};
                var7 = var7.id;
                var3['itemId'] = var7;
                var3['itemType'] = var6;
                var6 = {'actionGestureType': 'press', 'actionTargetElement': 'item_container', 'actionIntentType': 'open', 'actionDestinationType': null};
                var3['actionParameters'] = var6;
                var3 = var4.bind(var5)(var3);
                var2 = _closure2_slot3;
                var2 = var2.bind(var1)();
                return var1;
            };
            var6 = var4.bind(var6)(var2, var3);
            if(!(var1 != var28)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            if(!(var1 != var22)) { _fun0003_ip = 19; continue _fun0003 }
case 21:
            if(!(var1 != var34)) { _fun0003_ip = 19; continue _fun0003 }
case 22:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var17 = 5;
            var2 = var2[var17];
            var3 = var3.bind(var5)(var2);
            var2 = var3.isEntryActive;
            var7 = var2.bind(var3)(var13);
            var8 = _closure1_slot0;
            var2 = _closure1_slot3;
            var16 = 22;
            var3 = var2[var16];
            var3 = var8.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var2[var16];
            var2 = var8.bind(var5)(var2);
            var2 = var2.t;
            if(var7) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var7 = var2.ktOTRQ;
            var9 = var3.bind(var4)(var7);
            _fun0003_ip = 25; continue _fun0003;
case 23:
            var2 = var2.Gk1P8Z;
            var9 = var3.bind(var4)(var2);
case 25:
            var4 = _closure1_slot7;
            var3 = _closure1_slot1;
            var8 = _closure1_slot3;
            var2 = 23;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var7 = var13.id;
            var2['contentId'] = var7;
            var7 = var13.author_id;
            var2['userId'] = var7;
            var7 = 'hotwheels_gaming_activity';
            var2['type'] = var7;
            var2['renderForScreenshot'] = var11;
            var2['onPress'] = var6;
            var19 = _closure1_slot9;
            var7 = _closure1_slot8;
            var6 = {};
            var10 = _closure1_slot0;
            var30 = 24;
            var8 = var8[var30];
            var8 = var10.bind(var5)(var8);
            var12 = var8.Text;
            var8 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var29 = 'text-md/semibold';
            var20 = var1 != var23;
            var10 = undefined;
            if(!var20) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var20 = {};
            var20['fontFamily'] = var23;
            var10 = var20;
case 26:
            var8['style'] = var10;
            var37 = _closure1_slot1;
            var10 = _closure1_slot3;
            var23 = 25;
            var20 = var10[var23];
            var24 = var37.bind(var5)(var20);
            var20 = var24.getName;
            var20 = var20.bind(var24)(var22);
            var8['children'] = var20;
            var8 = var4.bind(var5)(var12, var8);
            var20 = new Array(2);
            var20[0] = var8;
            var8 = _closure1_slot7;
            var12 = _closure1_slot0;
            var24 = var10[var30];
            var24 = var12.bind(var5)(var24);
            var25 = var24.Text;
            var24 = {'lineClamp': 1, 'variant': 'text-xs/normal', 'color': 'text-muted'};
            var31 = 26;
            var31 = var10[var31];
            var36 = var12.bind(var5)(var31);
            var35 = var36.getRelativeTimestamp;
            var31 = 27;
            var31 = var10[var31];
            var38 = var37.bind(var5)(var31);
            var37 = var38.extractTimestamp;
            var31 = var13.id;
            var31 = var37.bind(var38)(var31);
            var31 = var35.bind(var36)(var31);
            var24['children'] = var31;
            var24 = var8.bind(var5)(var25, var24);
            var20[1] = var24;
            var6['children'] = var20;
            var6 = var19.bind(var5)(var7, var6);
            var2['title'] = var6;
            var6 = var10[var30];
            var6 = var12.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-sm/normal', 'lineClamp': 1};
            var10 = var10[var17];
            var12 = var12.bind(var5)(var10);
            var10 = var12.isEntryActive;
            var12 = var10.bind(var12)(var13);
            var10 = 'text-default';
            if(!var12) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var10 = 'status-positive';
case 28:
            var6['color'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['subtitle'] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = {};
            var12 = var27.card;
            var10 = new Array(2);
            var10[0] = var12;
            var13 = var1 != var18;
            var12 = null;
            if(!var13) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var13 = {};
            var19 = _closure1_slot1;
            var20 = _closure1_slot3;
            var17 = 28;
            var17 = var20[var17];
            var17 = var19.bind(var5)(var17);
            var19 = var17.bind(var5)(var18);
            var18 = var19.alpha;
            var17 = 0.5;
            var18 = var18.bind(var19)(var17);
            var17 = var18.hex;
            var17 = var17.bind(var18)();
            var13['backgroundColor'] = var17;
            var12 = var13;
case 30:
            var10[1] = var12;
            var9['style'] = var10;
            var20 = _closure1_slot7;
            var25 = _closure1_slot0;
            var24 = _closure1_slot3;
            var18 = 29;
            var10 = var24[var18];
            var10 = var25.bind(var5)(var10);
            var12 = var10.PressableOpacity;
            var10 = {};
            var10['onPress'] = var33;
            var13 = var1 == var32;
            var10['disabled'] = var13;
            var31 = 'button';
            var10['accessibilityRole'] = var31;
            var13 = var24[var16];
            var13 = var25.bind(var5)(var13);
            var35 = var13.intl;
            var19 = var35.formatToPlainString;
            var13 = var24[var16];
            var13 = var25.bind(var5)(var13);
            var13 = var13.t;
            var17 = var13.9sZWVp;
            var13 = {};
            var36 = var28.name;
            var13['gameName'] = var36;
            var13 = var19.bind(var35)(var17, var13);
            var10['accessibilityLabel'] = var13;
            var17 = _closure1_slot1;
            var13 = 30;
            var13 = var24[var13];
            var17 = var17.bind(var5)(var13);
            var13 = {};
            var19 = {};
            var19['uri'] = var34;
            var13['source'] = var19;
            var19 = var27.image;
            var13['style'] = var19;
            var13 = var20.bind(var5)(var17, var13);
            var10['children'] = var13;
            var12 = var20.bind(var5)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var17 = _closure1_slot9;
            var13 = _closure1_slot5;
            var12 = {};
            var19 = var27.cardInnerContainer;
            var12['style'] = var19;
            var18 = var24[var18];
            var18 = var25.bind(var5)(var18);
            var19 = var18.PressableOpacity;
            var18 = {};
            var18['onPress'] = var33;
            var32 = var1 == var32;
            var18['disabled'] = var32;
            var18['accessibilityRole'] = var31;
            var31 = var24[var16];
            var31 = var25.bind(var5)(var31);
            var34 = var31.intl;
            var33 = var34.formatToPlainString;
            var31 = var24[var16];
            var31 = var25.bind(var5)(var31);
            var31 = var31.t;
            var32 = var31.9sZWVp;
            var31 = {};
            var35 = var28.name;
            var31['gameName'] = var35;
            var31 = var33.bind(var34)(var32, var31);
            var18['accessibilityLabel'] = var31;
            var24 = var24[var30];
            var24 = var25.bind(var5)(var24);
            var25 = var24.Text;
            var24 = {};
            var24['variant'] = var29;
            var29 = var27.gameName;
            var24['style'] = var29;
            var28 = var28.name;
            var24['children'] = var28;
            var24 = var20.bind(var5)(var25, var24);
            var18['children'] = var24;
            var19 = var20.bind(var5)(var19, var18);
            var18 = new Array(2);
            var18[0] = var19;
            var19 = var1 != var26;
            if(!var19) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var24 = var26.length;
            var20 = 0;
            var19 = var24 > var20;
case 32:
            if(!var19) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var25 = _closure1_slot7;
            var24 = _closure1_slot5;
            var20 = {};
            var27 = var27.badges;
            var20['style'] = var27;
            var20['children'] = var26;
            var19 = var25.bind(var5)(var24, var20);
case 34:
            var18[1] = var19;
            var12['children'] = var18;
            var12 = var17.bind(var5)(var13, var12);
            var10[1] = var12;
            var9['children'] = var10;
            var10 = var8.bind(var5)(var7, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = null;
            if(var11) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var13 = _closure1_slot7;
            var17 = _closure1_slot0;
            var20 = _closure1_slot3;
            var11 = 31;
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
            var17 = var16.ghWi8V;
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
case 36:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 19:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
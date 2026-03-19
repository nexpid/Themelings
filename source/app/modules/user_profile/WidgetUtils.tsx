// app/modules/user_profile/WidgetUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var13 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var14 = dependencyMap;
    var _closure1_slot0 = var13;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var14;
    var11 = function widgetSupportsComment(arg1) {
        var3 = _closure1_slot8;
        var2 = var3.includes;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot10 = var11;
    var10 = function widgetSupportsTags(arg1) {
        var3 = _closure1_slot9;
        var2 = var3.includes;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot11 = var10;
    var9 = function widgetMaxGames(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 5;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var1 = var1.GAME_WIDGET_LIMITS_BY_TYPE;
            var4 = var3 in var1;
            var1 = 0;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.GAME_WIDGET_LIMITS_BY_TYPE;
            var1 = var2[var3];
case 2:
            return var1;
        }
    };
    var _closure1_slot12 = var9;
    var8 = function getSavedWidgets() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot4;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            var2 = null;
            var5 = var2 != var1;
            var3 = null;
            if(!var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = _closure1_slot5;
            var4 = var5.getUserProfile;
            var1 = var1.id;
            var3 = var4.bind(var5)(var1);
case 4:
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var3.widgets;
case 6:
            if(!(var2 == var1)) { _fun0002_ip = 2; continue _fun0002 }
case 8:
            var1 = new Array(0);
case 2:
            return var1;
        }
    };
    var _closure1_slot13 = var8;
    var1 = function getCurrentWidgets() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot6;
            var1 = var3.hasPendingChanges;
            var1 = var1.bind(var3)();
            if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var3 = _closure1_slot13;
            var1 = undefined;
            var1 = var3.bind(var1)();
            _fun0003_ip = 11; continue _fun0003;
case 9:
            var3 = _closure1_slot6;
            var2 = var3.getPendingWidgets;
            var2 = var2.bind(var3)();
            var3 = null;
            if(!(var3 == var2)) { _fun0003_ip = 12; continue _fun0003 }
case 7:
            var2 = new Array(0);
case 12:
            var1 = var2;
case 11:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function findGameWidget(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot14;
            var6 = undefined;
            var4 = var3.bind(var6)();
            var3 = var4.filter;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.isGameWidget;
            var3 = var3.bind(var4)(var2);
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var1 = var2;
case 13:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var7 = function replaceWidgetInList(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot14;
            var3 = undefined;
            var3 = var4.bind(var3)();
            var4 = var3.findIndex;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.getUniqueKey;
                var2 = var1.bind(var2)();
                var3 = _closure2_slot0;
                var1 = var3.getUniqueKey;
                var1 = var1.bind(var3)();
                var1 = var2 === var1;
                return var1;
            };
            var4 = var4.bind(var3)(var1);
            var1 = -1;
            if(!(var1 !== var4)) { _fun0005_ip = 2; continue _fun0005 }
case 15:
            var1 = new Array(0);
            var6 = 0;
            var8 = var1;
            var7 = var3;
            var5 = arraySpread(var8, var7, var6);
            var1[var4] = var2;
            return var1;
case 2:
            var1 = new Array(1);
            var1[0] = var2;
            var6 = 1;
            var8 = var1;
            var7 = var3;
            var2 = arraySpread(var8, var7, var6);
            return var1;
        }
    };
    var _closure1_slot16 = var7;
    var6 = function updatePendingGameTags(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var7 = arg3;
            var1 = arg2;
            var _closure2_slot0 = var1;
            var1 = global;
            var6 = var1.Object;
            var5 = var6.values;
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var8.bind(var1)(var4);
            var4 = var4.WidgetGameTag;
            var4 = var5.bind(var6)(var4);
            var5 = var4.length;
            var4 = var7.length;
            if(!(!(var4 > var5))) { _fun0006_ip = 16; continue _fun0006 }
case 17:
            var5 = _closure1_slot15;
            var4 = arg1;
            var6 = var5.bind(var1)(var4);
            var4 = null;
            if(!(var4 != var6)) { _fun0006_ip = 16; continue _fun0006 }
case 18:
            var9 = var6.games;
            var8 = var9.find;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.applicationId;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var8.bind(var9)(var5);
            if(!(var4 != var5)) { _fun0006_ip = 16; continue _fun0006 }
case 19:
            var4 = {};
            var11 = var4;
            var10 = var5;
            var5 = copyDataProperties(var11, var10);
            var5 = 'tags';
            var4[var5] = var7;
            var _closure2_slot1 = var4;
            var5 = var6.games;
            var4 = var5.map;
            var3 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.applicationId;
                    var3 = _closure2_slot0;
                    if(!(var4 === var3)) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                    var1 = _closure2_slot1;
case 20:
                    return var1;
                }
            };
            var8 = var4.bind(var5)(var3);
            var4 = _closure1_slot16;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 7;
            var3 = var5[var3];
            var3 = var7.bind(var1)(var3);
            var7 = var3.BaseGameWidget;
            var3 = {};
            var11 = var3;
            var10 = var6;
            var6 = copyDataProperties(var11, var10);
            var6 = 'games';
            var3[var6] = var8;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var12 = var6;
            var11 = var3;
            var3 = new var12[var7](var11, var10);
            var3 = var3 instanceof Object ? var3 : var6;
            var4 = var4.bind(var1)(var3);
            var3 = _closure1_slot1;
            var2 = 8;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.setPendingWidgets;
            var2 = var2.bind(var3)(var4);
case 16:
            return var1;
        }
    };
    var _closure1_slot17 = var6;
    var1 = function normalizeNullishValue(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var5 = null;
            var3 = var5 == var2;
            var1 = null;
            if(var3) { _fun0008_ip = 22; continue _fun0008 }
case 23:
            var3 = '';
            var1 = null;
            if(!(var3 !== var2)) { _fun0008_ip = 22; continue _fun0008 }
case 24:
            var3 = global;
            var4 = var3.Array;
            var3 = var4.isArray;
            var3 = var3.bind(var4)(var2);
            if(!var3) { _fun0008_ip = 25; continue _fun0008 }
case 26:
            var4 = var2.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0008_ip = 22; continue _fun0008 }
case 25:
            var1 = var2;
case 22:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var5 = function isNSFWGame(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            var4 = var3 == var2;
            var6 = undefined;
            var1 = undefined;
            if(var4) { _fun0009_ip = 10; continue _fun0009 }
case 27:
            var1 = var2.themes;
case 10:
            var1 = var3 != var1;
            if(!var1) { _fun0009_ip = 28; continue _fun0009 }
case 29:
            var4 = var2.themes;
            var3 = var4.includes;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.GameTheme;
            var2 = var2.EROTIC;
            var1 = var3.bind(var4)(var2);
case 28:
            return var1;
        }
    };
    var _closure1_slot19 = var5;
    var4 = function isAgeRestrictedGame(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var8 = arg1;
            var2 = var8.content_classification;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0010_ip = 30; continue _fun0010 }
case 31:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var9 = 12;
            var2 = var6[var9];
            var4 = undefined;
            var7 = var5.bind(var4)(var2);
            var3 = var7.contentClassificationToAgeRestriction;
            var2 = {};
            var9 = var6[var9];
            var9 = var5.bind(var4)(var9);
            var9 = var9.ContentClassificationVariant;
            var9 = var9.MINIMAL;
            var2['type'] = var9;
            var8 = var8.content_classification;
            var2['data'] = var8;
            var3 = var3.bind(var7)(var2);
            var2 = 13;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.AgeRestrictionStatus;
            var2 = var2.ADULT;
            var1 = var3 === var2;
case 30:
            return var1;
        }
    };
    var _closure1_slot20 = var4;
    var1 = global;
    var17 = var1.Object;
    var16 = var17.defineProperty;
    var12 = {};
    var1 = true;
    var12['value'] = var1;
    var1 = '__esModule';
    var1 = var16.bind(var17)(var3, var1, var12);
    var1 = 0;
    var12 = var14[var1];
    var1 = undefined;
    var12 = var15.bind(var1)(var12);
    var _closure1_slot3 = var12;
    var12 = 1;
    var12 = var14[var12];
    var12 = var15.bind(var1)(var12);
    var _closure1_slot4 = var12;
    var12 = 2;
    var12 = var14[var12];
    var12 = var15.bind(var1)(var12);
    var _closure1_slot5 = var12;
    var12 = 3;
    var12 = var14[var12];
    var12 = var15.bind(var1)(var12);
    var _closure1_slot6 = var12;
    var12 = 4;
    var12 = var14[var12];
    var12 = var13.bind(var1)(var12);
    var15 = var12.WIDGET_TITLES_BY_TYPE;
    var _closure1_slot7 = var15;
    var15 = var12.WIDGETS_SUPPORTING_COMMENT;
    var _closure1_slot8 = var15;
    var12 = var12.WIDGETS_SUPPORTING_TAGS;
    var _closure1_slot9 = var12;
    var12 = 14;
    var12 = var14[var12];
    var14 = var13.bind(var1)(var12);
    var13 = var14.fileFinishedImporting;
    var12 = 'modules/user_profile/WidgetUtils.tsx';
    var12 = var13.bind(var14)(var12);
    var12 = function(arg1) {
        var3 = arg1;
        var2 = _closure1_slot7;
        var1 = var3.type;
        var1 = var2[var1];
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var3['getWidgetTitle'] = var12;
    var12 = function getGameWidgetSubtitle(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var7 = arg1;
            var1 = arg2;
            var2 = var1.isCurrentUser;
            var1 = var7.games;
            var3 = var1.length;
            var1 = 0;
            var1 = var3 > var1;
            if(!var2) { _fun0011_ip = 32; continue _fun0011 }
case 33:
            if(var1) { _fun0011_ip = 34; continue _fun0011 }
case 32:
            var1 = undefined;
            return var1;
case 34:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 5;
            var1 = var1[var10];
            var6 = undefined;
            var1 = var3.bind(var6)(var1);
            var3 = var1.GAME_WIDGET_LIMITS_BY_TYPE;
            var1 = var7.type;
            var3 = var3[var1];
            var1 = 1;
            if(!(var1 !== var3)) { _fun0011_ip = 35; continue _fun0011 }
case 36:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 6;
            var3 = var8[var1];
            var3 = var9.bind(var6)(var3);
            var5 = var3.intl;
            var4 = var5.format;
            var1 = var8[var1];
            var1 = var9.bind(var6)(var1);
            var1 = var1.t;
            var3 = var1.zR1+0/;
            var1 = {};
            var8 = var8[var10];
            var8 = var9.bind(var6)(var8);
            var8 = var8.GAME_WIDGET_LIMITS_BY_TYPE;
            var7 = var7.type;
            var7 = var8[var7];
            var1['numGames'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0011_ip = 37; continue _fun0011;
case 35:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 6;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.wiXdEa;
            var1 = var3.bind(var4)(var2);
case 37:
            return var1;
        }
    };
    var3['getGameWidgetSubtitle'] = var12;
    var3['widgetSupportsComment'] = var11;
    var3['widgetSupportsTags'] = var10;
    var3['widgetMaxGames'] = var9;
    var9 = function getRandomElement(arg1) {
        var2 = arg1;
        var1 = global;
        var4 = var1.Math;
        var3 = var4.floor;
        var5 = var1.Math;
        var1 = var5.random;
        var5 = var1.bind(var5)();
        var1 = var2.length;
        var1 = var5 * var1;
        var1 = var3.bind(var4)(var1);
        var1 = var2[var1];
        return var1;
    };
    var3['getRandomElement'] = var9;
    var9 = function getRandomElements(arg1, arg2) {
        var3 = new Array(0);
        var6 = arg1;
        var4 = 0;
        var7 = var3;
        var5 = 0;
        var1 = arraySpread(var7, var6, var5);
        var2 = var3.sort;
        var1 = function() {
            var1 = global;
            var2 = var1.Math;
            var1 = var2.random;
            var2 = var1.bind(var2)();
            var1 = 0.5;
            var1 = var1 - var2;
            return var1;
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.slice;
        var1 = arg2;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var3['getRandomElements'] = var9;
    var3['getSavedWidgets'] = var8;
    var3['replaceWidgetInList'] = var7;
    var7 = function addWidgetToPending(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot14;
            var1 = undefined;
            var6 = var4.bind(var1)();
            var4 = var6.find;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.getUniqueKey;
                var2 = var1.bind(var2)();
                var3 = _closure2_slot0;
                var1 = var3.getUniqueKey;
                var1 = var1.bind(var3)();
                var1 = var2 === var1;
                return var1;
            };
            var4 = var4.bind(var6)(var3);
            var3 = null;
            if(!(var3 == var4)) { _fun0012_ip = 38; continue _fun0012 }
case 3:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.setPendingWidgets;
            var2 = new Array(1);
            var2[0] = var5;
            var7 = 1;
            var9 = var2;
            var8 = var6;
            var5 = arraySpread(var9, var8, var7);
            var2 = var3.bind(var4)(var2);
case 38:
            return var1;
        }
    };
    var3['addWidgetToPending'] = var7;
    var7 = function removeWidgetFromPending(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot14;
        var1 = undefined;
        var5 = var4.bind(var1)();
        var4 = var5.filter;
        var3 = function(arg1) {
            var2 = arg1;
            var1 = var2.getUniqueKey;
            var2 = var1.bind(var2)();
            var3 = _closure2_slot0;
            var1 = var3.getUniqueKey;
            var1 = var1.bind(var3)();
            var1 = var2 !== var1;
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        var3 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 8;
        var2 = var5[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.setPendingWidgets;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var3['removeWidgetFromPending'] = var7;
    var3['updatePendingGameTags'] = var6;
    var6 = function removeTagFromGame(arg1, arg2, arg3) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var5 = arg2;
            var _closure2_slot0 = var5;
            var1 = arg3;
            var _closure2_slot1 = var1;
            var6 = _closure1_slot15;
            var1 = undefined;
            var3 = arg1;
            var3 = var6.bind(var1)(var3);
            var8 = null;
            if(!(var8 != var3)) { _fun0013_ip = 39; continue _fun0013 }
case 34:
            var9 = var3.games;
            var7 = var9.find;
            var6 = function(arg1) {
                var1 = arg1;
                var2 = var1.applicationId;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var7.bind(var9)(var6);
            if(!(var8 != var6)) { _fun0013_ip = 39; continue _fun0013 }
case 40:
            var7 = var6.tags;
            if(!(var8 != var7)) { _fun0013_ip = 39; continue _fun0013 }
case 41:
            var7 = var6.tags;
            var8 = var7.length;
            var7 = 0;
            if(!(var7 !== var8)) { _fun0013_ip = 39; continue _fun0013 }
case 42:
            var8 = var6.tags;
            var6 = var8.filter;
            var2 = function(arg1) {
                var2 = _closure2_slot1;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var2 = var6.bind(var8)(var2);
            var4 = _closure1_slot17;
            var3 = var3.type;
            var6 = var2.length;
            if(!(!(var6 > var7))) { _fun0013_ip = 43; continue _fun0013 }
case 44:
            var2 = new Array(0);
case 43:
            var2 = var4.bind(var1)(var3, var5, var2);
case 39:
            return var1;
        }
    };
    var3['removeTagFromGame'] = var6;
    var6 = function updatePendingGameComment(arg1, arg2, arg3) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var7 = arg3;
            var1 = arg2;
            var _closure2_slot0 = var1;
            var5 = _closure1_slot15;
            var1 = undefined;
            var4 = arg1;
            var6 = var5.bind(var1)(var4);
            var4 = null;
            if(!(var4 != var6)) { _fun0014_ip = 45; continue _fun0014 }
case 46:
            var9 = var6.games;
            var8 = var9.find;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.applicationId;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var8.bind(var9)(var5);
            if(!(var4 != var5)) { _fun0014_ip = 45; continue _fun0014 }
case 8:
            var4 = var5.comment;
            if(!(var7 !== var4)) { _fun0014_ip = 45; continue _fun0014 }
case 47:
            var4 = {};
            var11 = var4;
            var10 = var5;
            var5 = copyDataProperties(var11, var10);
            var5 = 'comment';
            var4[var5] = var7;
            var _closure2_slot1 = var4;
            var5 = var6.games;
            var4 = var5.map;
            var3 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.applicationId;
                    var3 = _closure2_slot0;
                    if(!(var4 === var3)) { _fun0015_ip = 20; continue _fun0015 }
case 21:
                    var1 = _closure2_slot1;
case 20:
                    return var1;
                }
            };
            var8 = var4.bind(var5)(var3);
            var4 = _closure1_slot16;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 7;
            var3 = var5[var3];
            var3 = var7.bind(var1)(var3);
            var7 = var3.BaseGameWidget;
            var3 = {};
            var11 = var3;
            var10 = var6;
            var6 = copyDataProperties(var11, var10);
            var6 = 'games';
            var3[var6] = var8;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var12 = var6;
            var11 = var3;
            var3 = new var12[var7](var11, var10);
            var3 = var3 instanceof Object ? var3 : var6;
            var4 = var4.bind(var1)(var3);
            var3 = _closure1_slot1;
            var2 = 8;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.setPendingWidgets;
            var2 = var2.bind(var3)(var4);
case 45:
            return var1;
        }
    };
    var3['updatePendingGameComment'] = var6;
    var6 = function addPendingGameToWidget(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var10 = var1.widgetType;
            var2 = var1.game;
            var _closure2_slot0 = var2;
            var8 = var1.ignoreMaxGames;
            var1 = undefined;
            if(!(var8 === var1)) { _fun0016_ip = 48; continue _fun0016 }
case 32:
            var8 = false;
case 48:
            var5 = _closure1_slot15;
            var6 = var5.bind(var1)(var10);
            var5 = _closure1_slot12;
            var7 = var5.bind(var1)(var10);
            var9 = null;
            if(!(var9 != var6)) { _fun0016_ip = 39; continue _fun0016 }
case 40:
            var5 = var6.games;
            var12 = var9 == var5;
            var11 = undefined;
            if(var12) { _fun0016_ip = 49; continue _fun0016 }
case 47:
            var11 = var5.length;
case 49:
            var12 = var9 != var11;
            var5 = 0;
            if(!var12) { _fun0016_ip = 50; continue _fun0016 }
case 51:
            var5 = var11;
case 50:
            if(var8) { _fun0016_ip = 52; continue _fun0016 }
case 18:
            if(!(var5 >= var7)) { _fun0016_ip = 52; continue _fun0016 }
case 53:
            return var1;
case 52:
            var7 = var6.games;
            if(!(var9 == var7)) { _fun0016_ip = 30; continue _fun0016 }
case 54:
            var7 = new Array(0);
case 30:
            var5 = var7.some;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.applicationId;
                var1 = _closure2_slot0;
                var1 = var1.applicationId;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var5.bind(var7)(var4);
            if(var4) { _fun0016_ip = 55; continue _fun0016 }
case 39:
            var5 = {};
            var4 = var2.applicationId;
            var5['applicationId'] = var4;
            var4 = var2.comment;
            var5['comment'] = var4;
            var4 = var2.tags;
            var5['tags'] = var4;
            if(!(var9 == var6)) { _fun0016_ip = 56; continue _fun0016 }
case 57:
            var8 = new Array(1);
            var8[0] = var5;
            _fun0016_ip = 58; continue _fun0016;
case 56:
            var4 = new Array(1);
            var4[0] = var5;
            var7 = var6.games;
            if(!(var9 == var7)) { _fun0016_ip = 59; continue _fun0016 }
case 60:
            var7 = new Array(0);
case 59:
            var13 = 1;
            var15 = var4;
            var14 = var7;
            var5 = arraySpread(var15, var14, var13);
            var8 = var4;
case 58:
            var5 = _closure1_slot16;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 7;
            var4 = var11[var4];
            var4 = var7.bind(var1)(var4);
            var7 = var4.BaseGameWidget;
            var4 = {};
            if(!(var9 == var6)) { _fun0016_ip = 61; continue _fun0016 }
case 62:
            var9 = {};
            var9['type'] = var10;
            var6 = var9;
case 61:
            var15 = var4;
            var14 = var6;
            var6 = copyDataProperties(var15, var14);
            var6 = 'games';
            var4[var6] = var8;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var16 = var6;
            var15 = var4;
            var4 = new var16[var7](var15, var14);
            var4 = var4 instanceof Object ? var4 : var6;
            var7 = var5.bind(var1)(var4);
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 8;
            var4 = var5[var4];
            var6 = var6.bind(var1)(var4);
            var4 = var6.setPendingWidgets;
            var4 = var4.bind(var6)(var7);
            var4 = _closure1_slot0;
            var3 = 10;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var4 = var3.useGameWithSupplementalData;
            var3 = var4.fetchMany;
            var5 = var2.applicationId;
            var2 = new Array(1);
            var2[0] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
case 55:
            return var1;
        }
    };
    var3['addPendingGameToWidget'] = var6;
    var6 = function reorderWidgets(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var5 = arg1;
            var7 = arg2;
            if(!(var5 !== var7)) { _fun0017_ip = 63; continue _fun0017 }
case 64:
            var2 = _closure1_slot14;
            var4 = undefined;
            var2 = var2.bind(var4)();
            var6 = 0;
            if(!(!(var5 < var6))) { _fun0017_ip = 63; continue _fun0017 }
case 33:
            var3 = var2.length;
            if(!(!(var5 >= var3))) { _fun0017_ip = 63; continue _fun0017 }
case 65:
            if(!(!(var7 < var6))) { _fun0017_ip = 63; continue _fun0017 }
case 26:
            var3 = var2.length;
            if(!(!(var7 >= var3))) { _fun0017_ip = 63; continue _fun0017 }
case 66:
            var3 = new Array(0);
            var11 = var3;
            var10 = var2;
            var9 = 0;
            var2 = arraySpread(var11, var10, var9);
            var2 = var3.splice;
            var8 = 1;
            var5 = var2.bind(var3)(var5, var8);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var5, var8);
            var5 = var2[var6];
            var2 = var3.splice;
            var2 = var2.bind(var3)(var7, var6, var5);
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 8;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.setPendingWidgets;
            var1 = var1.bind(var2)(var3);
case 63:
            var1 = undefined;
            return var1;
        }
    };
    var3['reorderWidgets'] = var6;
    var6 = function reorderGamesInWidget(arg1, arg2, arg3) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var4 = arg2;
            var7 = arg3;
            var5 = _closure1_slot15;
            var1 = undefined;
            var3 = arg1;
            var6 = var5.bind(var1)(var3);
            var5 = null;
            if(!(var5 != var6)) { _fun0018_ip = 67; continue _fun0018 }
case 33:
            var3 = var6.games;
            if(!(var5 != var3)) { _fun0018_ip = 67; continue _fun0018 }
case 26:
            if(!(var4 !== var7)) { _fun0018_ip = 67; continue _fun0018 }
case 68:
            var11 = var6.games;
            var8 = new Array(0);
            var5 = 0;
            var12 = var8;
            var10 = 0;
            var3 = arraySpread(var12, var11, var10);
            if(!(!(var4 < var5))) { _fun0018_ip = 67; continue _fun0018 }
case 28:
            var3 = var8.length;
            if(!(!(var4 >= var3))) { _fun0018_ip = 67; continue _fun0018 }
case 69:
            if(!(!(var7 < var5))) { _fun0018_ip = 67; continue _fun0018 }
case 18:
            var3 = var8.length;
            if(!(!(var7 >= var3))) { _fun0018_ip = 67; continue _fun0018 }
case 70:
            var3 = var8.splice;
            var9 = 1;
            var4 = var3.bind(var8)(var4, var9);
            var3 = _closure1_slot3;
            var3 = var3.bind(var1)(var4, var9);
            var4 = var3[var5];
            var3 = var8.splice;
            var3 = var3.bind(var8)(var7, var5, var4);
            var4 = _closure1_slot16;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 7;
            var3 = var5[var3];
            var3 = var7.bind(var1)(var3);
            var7 = var3.BaseGameWidget;
            var3 = {};
            var12 = var3;
            var11 = var6;
            var6 = copyDataProperties(var12, var11);
            var6 = 'games';
            var3[var6] = var8;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var13 = var6;
            var12 = var3;
            var3 = new var13[var7](var12, var11);
            var3 = var3 instanceof Object ? var3 : var6;
            var4 = var4.bind(var1)(var3);
            var3 = _closure1_slot1;
            var2 = 8;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.setPendingWidgets;
            var2 = var2.bind(var3)(var4);
case 67:
            return var1;
        }
    };
    var3['reorderGamesInWidget'] = var6;
    var6 = function removePendingGameFromWidget(arg1, arg2) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg2;
            var _closure2_slot0 = var1;
            var5 = _closure1_slot15;
            var1 = undefined;
            var4 = arg1;
            var6 = var5.bind(var1)(var4);
            var5 = null;
            if(!(var5 != var6)) { _fun0019_ip = 57; continue _fun0019 }
case 32:
            var4 = var6.games;
            if(!(var5 == var4)) { _fun0019_ip = 71; continue _fun0019 }
case 26:
            var5 = new Array(0);
            _fun0019_ip = 72; continue _fun0019;
case 71:
            var5 = var6.games;
case 72:
            var4 = var5.filter;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.applicationId;
                var1 = _closure2_slot0;
                var1 = var2 !== var1;
                return var1;
            };
            var8 = var4.bind(var5)(var3);
            var4 = _closure1_slot16;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 7;
            var3 = var5[var3];
            var3 = var7.bind(var1)(var3);
            var7 = var3.BaseGameWidget;
            var3 = {};
            var10 = var3;
            var9 = var6;
            var6 = copyDataProperties(var10, var9);
            var6 = 'games';
            var3[var6] = var8;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var11 = var6;
            var10 = var3;
            var3 = new var11[var7](var10, var9);
            var3 = var3 instanceof Object ? var3 : var6;
            var4 = var4.bind(var1)(var3);
            var3 = _closure1_slot1;
            var2 = 8;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.setPendingWidgets;
            var2 = var2.bind(var3)(var4);
case 57:
            return var1;
        }
    };
    var3['removePendingGameFromWidget'] = var6;
    var6 = function isGameLimitReached(arg1) {
        var1 = arg1;
        var4 = _closure1_slot12;
        var3 = var1.type;
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var1 = var1.games;
        var1 = var1.length;
        var1 = var1 >= var2;
        return var1;
    };
    var3['isGameLimitReached'] = var6;
    var6 = function areWidgetGamesEqual(arg1, arg2, arg3) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var4 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var1;
            var3 = arg3;
            var _closure2_slot1 = var3;
            var3 = var4.length;
            var1 = var1.length;
            var1 = var3 === var1;
            if(!var1) { _fun0020_ip = 68; continue _fun0020 }
case 73:
            var3 = var4.every;
            var2 = function(arg1, arg2) {
                var3 = _closure2_slot0;
                var2 = arg2;
                var5 = var3[var2];
                var4 = _closure2_slot1;
                var3 = function areGamesEqual(arg1, arg2, arg3) {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        var3 = arg1;
                        var2 = arg2;
                        var7 = arg3;
                        var5 = var3.applicationId;
                        var4 = var2.applicationId;
                        if(!(var5 === var4)) { _fun0021_ip = 74; continue _fun0021 }
case 75:
                        var6 = _closure1_slot10;
                        var5 = undefined;
                        var6 = var6.bind(var5)(var7);
                        if(!var6) { _fun0021_ip = 76; continue _fun0021 }
case 26:
                        var9 = _closure1_slot18;
                        var6 = var3.comment;
                        var8 = var9.bind(var5)(var6);
                        var6 = var2.comment;
                        var6 = var9.bind(var5)(var6);
                        if(!(var8 === var6)) { _fun0021_ip = 56; continue _fun0021 }
case 76:
                        var6 = _closure1_slot11;
                        var6 = var6.bind(var5)(var7);
                        if(!var6) { _fun0021_ip = 77; continue _fun0021 }
case 78:
                        var4 = _closure1_slot18;
                        var3 = var3.tags;
                        var3 = var4.bind(var5)(var3);
                        var2 = var2.tags;
                        var2 = var4.bind(var5)(var2);
                        var _closure4_slot0 = var2;
                        var4 = null;
                        var6 = var4 === var3;
                        var5 = var4 === var2;
                        if(!(var6 === var5)) { _fun0021_ip = 79; continue _fun0021 }
case 80:
                        if(!(var4 !== var3)) { _fun0021_ip = 77; continue _fun0021 }
case 81:
                        if(!(var4 !== var2)) { _fun0021_ip = 77; continue _fun0021 }
case 82:
                        var4 = var3.length;
                        var2 = var2.length;
                        if(!(var4 === var2)) { _fun0021_ip = 83; continue _fun0021 }
case 84:
                        var2 = var3.every;
                        var1 = function(arg1, arg2) {
                            var2 = _closure4_slot0;
                            var1 = arg2;
                            var2 = var2[var1];
                            var1 = arg1;
                            var1 = var1 === var2;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        if(var1) { _fun0021_ip = 77; continue _fun0021 }
case 85:
                        var1 = false;
                        return var1;
case 77:
                        var1 = true;
                        return var1;
case 83:
                        var1 = false;
                        return var1;
case 79:
                        var1 = false;
                        return var1;
case 56:
                        var1 = false;
                        return var1;
case 74:
                        var1 = false;
                        return var1;
                    }
                };
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1, var5, var4);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 68:
            return var1;
        }
    };
    var3['areWidgetGamesEqual'] = var6;
    var3['isNSFWGame'] = var5;
    var3['isAgeRestrictedGame'] = var4;
    var2 = function isGameAllowedInGameWidgets(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var2 = arg1;
            var1 = _closure1_slot19;
            var5 = undefined;
            var1 = var1.bind(var5)(var2);
            var1 = !var1;
            if(!var1) { _fun0022_ip = 32; continue _fun0022 }
case 20:
            var4 = _closure1_slot20;
            var4 = var4.bind(var5)(var2);
            var1 = !var4;
case 32:
            if(!var1) { _fun0022_ip = 14; continue _fun0022 }
case 46:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 5;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.GAME_WIDGET_BANNED_APPLICATION_IDS;
            var3 = var4.has;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
case 14:
            return var1;
        }
    };
    var3['isGameAllowedInGameWidgets'] = var2;
    return var1;
})();
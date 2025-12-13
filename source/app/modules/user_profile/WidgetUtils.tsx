// app/modules/user_profile/WidgetUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var15 = require;
    var17 = metroImportDefault;
    var3 = exports;
    var16 = dependencyMap;
    var _closure1_slot0 = var15;
    var _closure1_slot1 = var17;
    var _closure1_slot2 = var16;
    var13 = function widgetSupportsComment(arg1) {
        var3 = _closure1_slot9;
        var2 = var3.includes;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot14 = var13;
    var12 = function widgetSupportsTags(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.includes;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot15 = var12;
    var11 = function widgetMaxGames(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 8;
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
    var _closure1_slot16 = var11;
    var10 = function getRandomElement(arg1) {
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
    var _closure1_slot17 = var10;
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
    var _closure1_slot18 = var9;
    var8 = function generateRandomGame(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var2 = arguments[1];
            var6 = undefined;
            if(!(var2 === var6)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = global;
            var3 = var3.Set;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var11 = var5;
            var3 = new var11[var3](var10);
            var2 = var3 instanceof Object ? var3 : var5;
case 4:
            var _closure2_slot0 = var2;
            var5 = _closure1_slot13;
            var2 = var5.filter;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var5 = _closure1_slot17;
            var8 = var2.length;
            var7 = 0;
            if(!(!(var8 > var7))) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = _closure1_slot13;
case 6:
            var2 = var5.bind(var6)(var2);
            var1['applicationId'] = var2;
            var2 = _closure1_slot14;
            var2 = var2.bind(var6)(var4);
            if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = global;
            var5 = var2.Math;
            var2 = var5.random;
            var5 = var2.bind(var5)();
            var2 = 0.5;
            var5 = var5 > var2;
            var2 = undefined;
            if(!var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var7 = _closure1_slot17;
            var5 = _closure1_slot11;
            var2 = var7.bind(var6)(var5);
case 10:
            var1['comment'] = var2;
case 8:
            var2 = _closure1_slot15;
            var2 = var2.bind(var6)(var4);
            if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = global;
            var4 = var2.Math;
            var2 = var4.random;
            var4 = var2.bind(var4)();
            var2 = 0.3;
            var4 = var4 > var2;
            var2 = undefined;
            if(!var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var5 = _closure1_slot18;
            var4 = _closure1_slot12;
            var3 = var4.length;
            var2 = var5.bind(var6)(var4, var3);
case 14:
            var1['tags'] = var2;
case 12:
            return var1;
        }
    };
    var _closure1_slot19 = var8;
    var7 = function getSavedWidgets() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = _closure1_slot5;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            var2 = null;
            var5 = var2 != var1;
            var3 = null;
            if(!var5) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var5 = _closure1_slot6;
            var4 = var5.getUserProfile;
            var1 = var1.id;
            var3 = var4.bind(var5)(var1);
case 16:
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var1 = var3.widgets;
case 18:
            if(!(var2 == var1)) { _fun0003_ip = 2; continue _fun0003 }
case 20:
            var1 = new Array(0);
case 2:
            return var1;
        }
    };
    var _closure1_slot20 = var7;
    var1 = function getCurrentWidgets() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot7;
            var1 = var3.hasPendingChanges;
            var1 = var1.bind(var3)();
            if(var1) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var3 = _closure1_slot20;
            var1 = undefined;
            var1 = var3.bind(var1)();
            _fun0004_ip = 23; continue _fun0004;
case 21:
            var3 = _closure1_slot7;
            var2 = var3.getPendingWidgets;
            var2 = var2.bind(var3)();
            var3 = null;
            if(!(var3 == var2)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var2 = new Array(0);
case 24:
            var1 = var2;
case 23:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function findGameWidget(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot21;
        var2 = undefined;
        var3 = var3.bind(var2)();
        var2 = var3.find;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var1 = _closure2_slot0;
            var1 = var2 === var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot22 = var1;
    var6 = function replaceWidgetInList(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot21;
            var3 = undefined;
            var3 = var4.bind(var3)();
            var4 = var3.findIndex;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure2_slot0;
                var1 = var1.type;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var4.bind(var3)(var1);
            var1 = -1;
            if(!(var1 !== var4)) { _fun0005_ip = 2; continue _fun0005 }
case 26:
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
    var _closure1_slot23 = var6;
    var5 = function updatePendingGameTags(arg1, arg2, arg3) {
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
            var1 = 12;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var8.bind(var1)(var4);
            var4 = var4.WidgetGameTag;
            var4 = var5.bind(var6)(var4);
            var5 = var4.length;
            var4 = var7.length;
            if(!(!(var4 > var5))) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var5 = _closure1_slot22;
            var4 = arg1;
            var6 = var5.bind(var1)(var4);
            var4 = null;
            if(!(var4 != var6)) { _fun0006_ip = 27; continue _fun0006 }
case 29:
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
            if(!(var4 != var5)) { _fun0006_ip = 27; continue _fun0006 }
case 30:
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
                    if(!(var4 === var3)) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                    var1 = _closure2_slot1;
case 31:
                    return var1;
                }
            };
            var8 = var4.bind(var5)(var3);
            var4 = _closure1_slot23;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 10;
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
            var2 = 11;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.setPendingWidgets;
            var2 = var2.bind(var3)(var4);
case 27:
            return var1;
        }
    };
    var _closure1_slot24 = var5;
    var1 = function _saveSampleWidgets() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                    var2 = undefined;
                    var3 = undefined;
                    var6 = _closure1_slot7;
                    var5 = var6.getPendingWidgets;
                    var6 = var5.bind(var6)();
                    var3 = var6;
                    var5 = null;
                    if(!(var5 !== var6)) { _fun0008_ip = 7; continue _fun0008 }
case 35: // try_start_0
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 11;
                    var4 = var6[var4];
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.savePendingWidgets;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=72);
case 2:
                    return var3;
case 36:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 37; continue _fun0008 }
case 28: // try_end0
                    _fun0008_ip = 7; continue _fun0008;
case 37:
                    return var3;
case 38: // catch_target0
                    CatchBlockStart(arg_register=2);
case 7:
                    return var2;
case 33:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot25 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function _clearSavedWidgets() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 39; continue _fun0009 }
case 34: // try_start_0
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.savePendingWidgets;
                    var2 = new Array(0);
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=51);
case 40:
                    return var2;
case 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 42; continue _fun0009 }
case 43: // try_end0
                    _fun0009_ip = 44; continue _fun0009;
case 42:
                    return var2;
case 18: // catch_target0
                    CatchBlockStart(arg_register=1);
case 44:
                    var2 = undefined;
                    return var2;
case 39:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot26 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function normalizeNullishValue(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var5 = null;
            var3 = var5 == var2;
            var1 = null;
            if(var3) { _fun0010_ip = 23; continue _fun0010 }
case 5:
            var3 = '';
            var1 = null;
            if(!(var3 !== var2)) { _fun0010_ip = 23; continue _fun0010 }
case 45:
            var3 = global;
            var4 = var3.Array;
            var3 = var4.isArray;
            var3 = var3.bind(var4)(var2);
            if(!var3) { _fun0010_ip = 24; continue _fun0010 }
case 46:
            var4 = var2.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0010_ip = 23; continue _fun0010 }
case 24:
            var1 = var2;
case 23:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var4 = function isNSFWGame(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            var4 = var3 == var2;
            var6 = undefined;
            var1 = undefined;
            if(var4) { _fun0011_ip = 22; continue _fun0011 }
case 47:
            var1 = var2.themes;
case 22:
            var1 = var3 != var1;
            if(!var1) { _fun0011_ip = 37; continue _fun0011 }
case 48:
            var4 = var2.themes;
            var3 = var4.includes;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 14;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.GameTheme;
            var2 = var2.EROTIC;
            var1 = var3.bind(var4)(var2);
case 37:
            return var1;
        }
    };
    var _closure1_slot28 = var4;
    var1 = global;
    var19 = var1.Object;
    var18 = var19.defineProperty;
    var14 = {};
    var1 = true;
    var14['value'] = var1;
    var1 = '__esModule';
    var1 = var18.bind(var19)(var3, var1, var14);
    var1 = 0;
    var14 = var16[var1];
    var1 = undefined;
    var14 = var17.bind(var1)(var14);
    var _closure1_slot3 = var14;
    var14 = 1;
    var14 = var16[var14];
    var14 = var17.bind(var1)(var14);
    var _closure1_slot4 = var14;
    var14 = 2;
    var14 = var16[var14];
    var14 = var17.bind(var1)(var14);
    var _closure1_slot5 = var14;
    var14 = 3;
    var14 = var16[var14];
    var14 = var17.bind(var1)(var14);
    var _closure1_slot6 = var14;
    var14 = 4;
    var14 = var16[var14];
    var14 = var17.bind(var1)(var14);
    var _closure1_slot7 = var14;
    var14 = 5;
    var14 = var16[var14];
    var14 = var15.bind(var1)(var14);
    var17 = var14.WIDGET_TITLES_BY_TYPE;
    var _closure1_slot8 = var17;
    var17 = var14.WIDGETS_SUPPORTING_COMMENT;
    var _closure1_slot9 = var17;
    var14 = var14.WIDGETS_SUPPORTING_TAGS;
    var _closure1_slot10 = var14;
    var14 = 6;
    var14 = var16[var14];
    var14 = var15.bind(var1)(var14);
    var17 = var14.WIDGET_COMMENTS;
    var _closure1_slot11 = var17;
    var14 = var14.WIDGET_TAGS;
    var _closure1_slot12 = var14;
    var14 = 7;
    var14 = var16[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.HOISTED_SEARCH_APPLICATION_IDS;
    var _closure1_slot13 = var14;
    var14 = 15;
    var14 = var16[var14];
    var16 = var15.bind(var1)(var14);
    var15 = var16.fileFinishedImporting;
    var14 = 'modules/user_profile/WidgetUtils.tsx';
    var14 = var15.bind(var16)(var14);
    var14 = function(arg1) {
        var3 = arg1;
        var2 = _closure1_slot8;
        var1 = var3.type;
        var1 = var2[var1];
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var3['getWidgetTitle'] = var14;
    var14 = function getGameWidgetSubtitle(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var7 = arg1;
            var1 = arg2;
            var2 = var1.isCurrentUser;
            var1 = var7.games;
            var3 = var1.length;
            var1 = 0;
            var1 = var3 > var1;
            if(!var2) { _fun0012_ip = 35; continue _fun0012 }
case 21:
            if(var1) { _fun0012_ip = 49; continue _fun0012 }
case 35:
            var1 = undefined;
            return var1;
case 49:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 8;
            var1 = var1[var10];
            var6 = undefined;
            var1 = var3.bind(var6)(var1);
            var3 = var1.GAME_WIDGET_LIMITS_BY_TYPE;
            var1 = var7.type;
            var3 = var3[var1];
            var1 = 1;
            if(!(var1 !== var3)) { _fun0012_ip = 50; continue _fun0012 }
case 33:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 9;
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
            _fun0012_ip = 51; continue _fun0012;
case 50:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 9;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.wiXdEa;
            var1 = var3.bind(var4)(var2);
case 51:
            return var1;
        }
    };
    var3['getGameWidgetSubtitle'] = var14;
    var14 = function hasGameWidgetsOnProfile(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var4 = var1 == var3;
            var6 = undefined;
            var2 = undefined;
            if(var4) { _fun0013_ip = 52; continue _fun0013 }
case 47:
            var4 = var3.widgets;
            var1 = var1 == var4;
            var2 = undefined;
            if(var1) { _fun0013_ip = 52; continue _fun0013 }
case 53:
            var3 = var4.some;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 10;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.isGameWidget;
            var2 = var3.bind(var4)(var1);
case 52:
            var1 = true;
            var1 = var1 === var2;
            return var1;
        }
    };
    var3['hasGameWidgetsOnProfile'] = var14;
    var3['widgetSupportsComment'] = var13;
    var3['widgetSupportsTags'] = var12;
    var3['widgetMaxGames'] = var11;
    var3['getRandomElement'] = var10;
    var3['getRandomElements'] = var9;
    var3['generateRandomGame'] = var8;
    var3['getSavedWidgets'] = var7;
    var7 = function generateMultipleGames(arg1, arg2, arg3) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var3 = arg3;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = global;
            var6 = var2.Math;
            var5 = var6.floor;
            var7 = var2.Math;
            var4 = var7.random;
            var7 = var4.bind(var7)();
            var4 = arg2;
            var4 = var7 * var4;
            var5 = var5.bind(var6)(var4);
            var4 = 1;
            var5 = var5 + var4;
            var4 = null;
            if(!(var4 == var3)) { _fun0014_ip = 54; continue _fun0014 }
case 55:
            var4 = var2.Set;
            var6 = var4.prototype;
            var6 = Object.create(var6, {constructor: {value: var4}});
            var10 = var6;
            var4 = new var10[var4](var9);
            var3 = var4 instanceof Object ? var4 : var6;
case 54:
            var _closure2_slot1 = var3;
            var4 = var2.Array;
            var3 = var4.from;
            var2 = {};
            var2['length'] = var5;
            var1 = function() {
                var5 = _closure1_slot19;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3);
                var4 = _closure2_slot1;
                var3 = var4.add;
                var2 = var1.applicationId;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['generateMultipleGames'] = var7;
    var3['replaceWidgetInList'] = var6;
    var6 = function addWidgetToPending(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot21;
            var1 = undefined;
            var6 = var4.bind(var1)();
            var4 = var6.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var4.bind(var6)(var3);
            var3 = null;
            if(!(var3 == var4)) { _fun0015_ip = 56; continue _fun0015 }
case 3:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.setPendingWidgets;
            var2 = new Array(1);
            var5 = arg2;
            var2[0] = var5;
            var7 = 1;
            var9 = var2;
            var8 = var6;
            var5 = arraySpread(var9, var8, var7);
            var2 = var3.bind(var4)(var2);
case 56:
            return var1;
        }
    };
    var3['addWidgetToPending'] = var6;
    var6 = function removeWidgetFromPending(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot21;
        var1 = undefined;
        var5 = var4.bind(var1)();
        var4 = var5.filter;
        var3 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var1 = _closure2_slot0;
            var1 = var2 !== var1;
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        var3 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 11;
        var2 = var5[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.setPendingWidgets;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var3['removeWidgetFromPending'] = var6;
    var3['updatePendingGameTags'] = var5;
    var5 = function removeTagFromGame(arg1, arg2, arg3) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var5 = arg2;
            var _closure2_slot0 = var5;
            var1 = arg3;
            var _closure2_slot1 = var1;
            var6 = _closure1_slot22;
            var1 = undefined;
            var3 = arg1;
            var3 = var6.bind(var1)(var3);
            var8 = null;
            if(!(var8 != var3)) { _fun0016_ip = 57; continue _fun0016 }
case 58:
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
            if(!(var8 != var6)) { _fun0016_ip = 57; continue _fun0016 }
case 44:
            var7 = var6.tags;
            if(!(var8 != var7)) { _fun0016_ip = 57; continue _fun0016 }
case 59:
            var7 = var6.tags;
            var8 = var7.length;
            var7 = 0;
            if(!(var7 !== var8)) { _fun0016_ip = 57; continue _fun0016 }
case 60:
            var8 = var6.tags;
            var6 = var8.filter;
            var2 = function(arg1) {
                var2 = _closure2_slot1;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var2 = var6.bind(var8)(var2);
            var4 = _closure1_slot24;
            var3 = var3.type;
            var6 = var2.length;
            if(!(!(var6 > var7))) { _fun0016_ip = 61; continue _fun0016 }
case 62:
            var2 = new Array(0);
case 61:
            var2 = var4.bind(var1)(var3, var5, var2);
case 57:
            return var1;
        }
    };
    var3['removeTagFromGame'] = var5;
    var5 = function updatePendingGameComment(arg1, arg2, arg3) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var7 = arg3;
            var1 = arg2;
            var _closure2_slot0 = var1;
            var5 = _closure1_slot22;
            var1 = undefined;
            var4 = arg1;
            var6 = var5.bind(var1)(var4);
            var4 = null;
            if(!(var4 != var6)) { _fun0017_ip = 63; continue _fun0017 }
case 64:
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
            if(!(var4 != var5)) { _fun0017_ip = 63; continue _fun0017 }
case 20:
            var4 = var5.comment;
            if(!(var7 !== var4)) { _fun0017_ip = 63; continue _fun0017 }
case 65:
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
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.applicationId;
                    var3 = _closure2_slot0;
                    if(!(var4 === var3)) { _fun0018_ip = 31; continue _fun0018 }
case 32:
                    var1 = _closure2_slot1;
case 31:
                    return var1;
                }
            };
            var8 = var4.bind(var5)(var3);
            var4 = _closure1_slot23;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 10;
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
            var2 = 11;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.setPendingWidgets;
            var2 = var2.bind(var3)(var4);
case 63:
            return var1;
        }
    };
    var3['updatePendingGameComment'] = var5;
    var5 = function addPendingGameToWidget(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var10 = var1.widgetType;
            var2 = var1.game;
            var _closure2_slot0 = var2;
            var8 = var1.ignoreMaxGames;
            var1 = undefined;
            if(!(var8 === var1)) { _fun0019_ip = 35; continue _fun0019 }
case 66:
            var8 = false;
case 35:
            var5 = _closure1_slot22;
            var6 = var5.bind(var1)(var10);
            var5 = _closure1_slot16;
            var7 = var5.bind(var1)(var10);
            var9 = null;
            if(!(var9 != var6)) { _fun0019_ip = 57; continue _fun0019 }
case 44:
            var5 = var6.games;
            var12 = var9 == var5;
            var11 = undefined;
            if(var12) { _fun0019_ip = 67; continue _fun0019 }
case 65:
            var11 = var5.length;
case 67:
            var12 = var9 != var11;
            var5 = 0;
            if(!var12) { _fun0019_ip = 68; continue _fun0019 }
case 54:
            var5 = var11;
case 68:
            if(var8) { _fun0019_ip = 69; continue _fun0019 }
case 29:
            if(!(var5 >= var7)) { _fun0019_ip = 69; continue _fun0019 }
case 70:
            return var1;
case 69:
            var7 = var6.games;
            if(!(var9 == var7)) { _fun0019_ip = 71; continue _fun0019 }
case 72:
            var7 = new Array(0);
case 71:
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
            if(var4) { _fun0019_ip = 73; continue _fun0019 }
case 57:
            var5 = {};
            var4 = var2.applicationId;
            var5['applicationId'] = var4;
            var4 = var2.comment;
            var5['comment'] = var4;
            var4 = var2.tags;
            var5['tags'] = var4;
            if(!(var9 == var6)) { _fun0019_ip = 74; continue _fun0019 }
case 13:
            var8 = new Array(1);
            var8[0] = var5;
            _fun0019_ip = 75; continue _fun0019;
case 74:
            var4 = new Array(1);
            var4[0] = var5;
            var7 = var6.games;
            if(!(var9 == var7)) { _fun0019_ip = 76; continue _fun0019 }
case 77:
            var7 = new Array(0);
case 76:
            var13 = 1;
            var15 = var4;
            var14 = var7;
            var5 = arraySpread(var15, var14, var13);
            var8 = var4;
case 75:
            var5 = _closure1_slot23;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 10;
            var4 = var11[var4];
            var4 = var7.bind(var1)(var4);
            var7 = var4.BaseGameWidget;
            var4 = {};
            if(!(var9 == var6)) { _fun0019_ip = 78; continue _fun0019 }
case 79:
            var9 = {};
            var9['type'] = var10;
            var6 = var9;
case 78:
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
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 11;
            var3 = var5[var3];
            var6 = var4.bind(var1)(var3);
            var3 = var6.setPendingWidgets;
            var3 = var3.bind(var6)(var7);
            var3 = 13;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.getDetectableGamesSupplemental;
            var5 = var2.applicationId;
            var2 = new Array(1);
            var2[0] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
case 73:
            return var1;
        }
    };
    var3['addPendingGameToWidget'] = var5;
    var5 = function reorderWidgets(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var5 = arg1;
            var7 = arg2;
            if(!(var5 !== var7)) { _fun0020_ip = 80; continue _fun0020 }
case 81:
            var2 = _closure1_slot21;
            var4 = undefined;
            var2 = var2.bind(var4)();
            var6 = 0;
            if(!(!(var5 < var6))) { _fun0020_ip = 80; continue _fun0020 }
case 82:
            var3 = var2.length;
            if(!(!(var5 >= var3))) { _fun0020_ip = 80; continue _fun0020 }
case 49:
            if(!(!(var7 < var6))) { _fun0020_ip = 80; continue _fun0020 }
case 46:
            var3 = var2.length;
            if(!(!(var7 >= var3))) { _fun0020_ip = 80; continue _fun0020 }
case 25:
            var3 = new Array(0);
            var11 = var3;
            var10 = var2;
            var9 = 0;
            var2 = arraySpread(var11, var10, var9);
            var2 = var3.splice;
            var8 = 1;
            var5 = var2.bind(var3)(var5, var8);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var5, var8);
            var5 = var2[var6];
            var2 = var3.splice;
            var2 = var2.bind(var3)(var7, var6, var5);
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 11;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.setPendingWidgets;
            var1 = var1.bind(var2)(var3);
case 80:
            var1 = undefined;
            return var1;
        }
    };
    var3['reorderWidgets'] = var5;
    var5 = function reorderGamesInWidget(arg1, arg2, arg3) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var4 = arg2;
            var7 = arg3;
            var5 = _closure1_slot22;
            var1 = undefined;
            var3 = arg1;
            var6 = var5.bind(var1)(var3);
            var5 = null;
            if(!(var5 != var6)) { _fun0021_ip = 83; continue _fun0021 }
case 82:
            var3 = var6.games;
            if(!(var5 != var3)) { _fun0021_ip = 83; continue _fun0021 }
case 46:
            if(!(var4 !== var7)) { _fun0021_ip = 83; continue _fun0021 }
case 84:
            var11 = var6.games;
            var8 = new Array(0);
            var5 = 0;
            var12 = var8;
            var10 = 0;
            var3 = arraySpread(var12, var11, var10);
            if(!(!(var4 < var5))) { _fun0021_ip = 83; continue _fun0021 }
case 37:
            var3 = var8.length;
            if(!(!(var4 >= var3))) { _fun0021_ip = 83; continue _fun0021 }
case 85:
            if(!(!(var7 < var5))) { _fun0021_ip = 83; continue _fun0021 }
case 29:
            var3 = var8.length;
            if(!(!(var7 >= var3))) { _fun0021_ip = 83; continue _fun0021 }
case 86:
            var3 = var8.splice;
            var9 = 1;
            var4 = var3.bind(var8)(var4, var9);
            var3 = _closure1_slot4;
            var3 = var3.bind(var1)(var4, var9);
            var4 = var3[var5];
            var3 = var8.splice;
            var3 = var3.bind(var8)(var7, var5, var4);
            var4 = _closure1_slot23;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 10;
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
            var2 = 11;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.setPendingWidgets;
            var2 = var2.bind(var3)(var4);
case 83:
            return var1;
        }
    };
    var3['reorderGamesInWidget'] = var5;
    var5 = function removePendingGameFromWidget(arg1, arg2) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg2;
            var _closure2_slot0 = var1;
            var5 = _closure1_slot22;
            var1 = undefined;
            var4 = arg1;
            var6 = var5.bind(var1)(var4);
            var5 = null;
            if(!(var5 != var6)) { _fun0022_ip = 13; continue _fun0022 }
case 66:
            var4 = var6.games;
            if(!(var5 == var4)) { _fun0022_ip = 41; continue _fun0022 }
case 46:
            var5 = new Array(0);
            _fun0022_ip = 43; continue _fun0022;
case 41:
            var5 = var6.games;
case 43:
            var4 = var5.filter;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.applicationId;
                var1 = _closure2_slot0;
                var1 = var2 !== var1;
                return var1;
            };
            var8 = var4.bind(var5)(var3);
            var4 = _closure1_slot23;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 10;
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
            var2 = 11;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.setPendingWidgets;
            var2 = var2.bind(var3)(var4);
case 13:
            return var1;
        }
    };
    var3['removePendingGameFromWidget'] = var5;
    var5 = function saveSampleWidgets() {
        var1 = undefined;
        var4 = _closure1_slot25;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['saveSampleWidgets'] = var5;
    var5 = function clearSavedWidgets() {
        var1 = undefined;
        var4 = _closure1_slot26;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['clearSavedWidgets'] = var5;
    var5 = function isGameLimitReached(arg1) {
        var1 = arg1;
        var4 = _closure1_slot16;
        var3 = var1.type;
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var1 = var1.games;
        var1 = var1.length;
        var1 = var1 >= var2;
        return var1;
    };
    var3['isGameLimitReached'] = var5;
    var5 = function areWidgetGamesEqual(arg1, arg2, arg3) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var4 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var1;
            var3 = arg3;
            var _closure2_slot1 = var3;
            var3 = var4.length;
            var1 = var1.length;
            var1 = var3 === var1;
            if(!var1) { _fun0023_ip = 84; continue _fun0023 }
case 87:
            var3 = var4.every;
            var2 = function(arg1, arg2) {
                var3 = _closure2_slot0;
                var2 = arg2;
                var5 = var3[var2];
                var4 = _closure2_slot1;
                var3 = function areGamesEqual(arg1, arg2, arg3) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                        var3 = arg1;
                        var2 = arg2;
                        var7 = arg3;
                        var5 = var3.applicationId;
                        var4 = var2.applicationId;
                        if(!(var5 === var4)) { _fun0024_ip = 88; continue _fun0024 }
case 89:
                        var6 = _closure1_slot14;
                        var5 = undefined;
                        var6 = var6.bind(var5)(var7);
                        if(!var6) { _fun0024_ip = 90; continue _fun0024 }
case 46:
                        var9 = _closure1_slot27;
                        var6 = var3.comment;
                        var8 = var9.bind(var5)(var6);
                        var6 = var2.comment;
                        var6 = var9.bind(var5)(var6);
                        if(!(var8 === var6)) { _fun0024_ip = 74; continue _fun0024 }
case 90:
                        var6 = _closure1_slot15;
                        var6 = var6.bind(var5)(var7);
                        if(!var6) { _fun0024_ip = 91; continue _fun0024 }
case 92:
                        var4 = _closure1_slot27;
                        var3 = var3.tags;
                        var3 = var4.bind(var5)(var3);
                        var2 = var2.tags;
                        var2 = var4.bind(var5)(var2);
                        var _closure4_slot0 = var2;
                        var4 = null;
                        var6 = var4 === var3;
                        var5 = var4 === var2;
                        if(!(var6 === var5)) { _fun0024_ip = 93; continue _fun0024 }
case 94:
                        if(!(var4 !== var3)) { _fun0024_ip = 91; continue _fun0024 }
case 95:
                        if(!(var4 !== var2)) { _fun0024_ip = 91; continue _fun0024 }
case 96:
                        var4 = var3.length;
                        var2 = var2.length;
                        if(!(var4 === var2)) { _fun0024_ip = 97; continue _fun0024 }
case 98:
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
                        if(var1) { _fun0024_ip = 91; continue _fun0024 }
case 99:
                        var1 = false;
                        return var1;
case 91:
                        var1 = true;
                        return var1;
case 97:
                        var1 = false;
                        return var1;
case 93:
                        var1 = false;
                        return var1;
case 74:
                        var1 = false;
                        return var1;
case 88:
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
case 84:
            return var1;
        }
    };
    var3['areWidgetGamesEqual'] = var5;
    var3['isNSFWGame'] = var4;
    var2 = function isGameAllowedInGameWidgets(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var2 = arg1;
            var1 = _closure1_slot28;
            var5 = undefined;
            var1 = var1.bind(var5)(var2);
            var1 = !var1;
            if(!var1) { _fun0025_ip = 55; continue _fun0025 }
case 31:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 8;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.GAME_WIDGET_BANNED_APPLICATION_IDS;
            var3 = var4.has;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
case 55:
            return var1;
        }
    };
    var3['isGameAllowedInGameWidgets'] = var2;
    return var1;
})();
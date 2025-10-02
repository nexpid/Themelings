// app/modules/user_profile/WidgetActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.ComponentActions;
    var _closure1_slot5 = var7;
    var2 = var2.Endpoints;
    var _closure1_slot6 = var2;
    var2 = {};
    var7 = function setPendingWidgets(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'WIDGET_PENDING_SET';
        var2['type'] = var5;
        var5 = arg1;
        var2['widgets'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['setPendingWidgets'] = var7;
    var7 = function savePendingWidgets(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = undefined;
                    var9 = undefined;
                    var10 = undefined;
                    var4 = _closure1_slot4;
                    var2 = var4.getCurrentUser;
                    var6 = var2.bind(var4)();
                    var4 = null;
                    var7 = var4 == var6;
                    var2 = undefined;
                    if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = var6.id;
case 4:
                    var9 = var2;
                    if(!(var4 == var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    return var5;
case 6:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var6 = 3;
                    var2 = var2[var6];
                    var7 = var4.bind(var5)(var2);
                    var4 = var7.dispatch;
                    var2 = {};
                    var8 = 'WIDGET_PENDING_SAVE_START';
                    var2['type'] = var8;
                    var2 = var4.bind(var7)(var2);
                    var7 = _closure2_slot0;
                    var4 = var7.map;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.toSubmission;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var10 = var4.bind(var7)(var2);
case 8: // try_start_0
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 4;
                    var2 = var7[var2];
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.put;
                    var2 = {};
                    var8 = _closure1_slot6;
                    var8 = var8.USER_PROFILE_WIDGETS;
                    var2['url'] = var8;
                    var8 = {};
                    var8['widgets'] = var10;
                    var2['body'] = var8;
                    var8 = true;
                    var2['oldFormErrors'] = var8;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=202);
case 9:
                    return var2;
case 10:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var10 = 'WIDGET_PENDING_SAVE_SUCCESS';
                    var4['type'] = var10;
                    var4['userId'] = var9;
                    var9 = var2.body;
                    var9 = var9.widgets;
                    var4['widgets'] = var9;
                    var4 = var7.bind(var8)(var4);
                    var4 = var2.body;
case 13: // try_end0
                    return var4;
case 11:
                    return var2;
case 14: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'WIDGET_PENDING_SAVE_FAILURE';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['savePendingWidgets'] = var7;
    var7 = function clearPendingWidgets() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'WIDGET_PENDING_CLEAR';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['clearPendingWidgets'] = var7;
    var7 = function fetchSuggestedGames() {
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 15; continue _fun0002 }
case 3:
                    var5 = undefined;
                    var13 = undefined;
                    var8 = undefined;
                    var14 = undefined;
                    var15 = undefined;
                    var10 = undefined;
                    var12 = undefined;
                    var9 = undefined;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 3;
                    var2 = var2[var3];
                    var7 = var4.bind(var5)(var2);
                    var4 = var7.dispatch;
                    var2 = {};
                    var11 = 'WIDGET_SUGGESTED_FETCH_START';
                    var2['type'] = var11;
                    var2 = var4.bind(var7)(var2);
case 16: // try_start_0
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 4;
                    var2 = var7[var2];
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.get;
                    var2 = {};
                    var11 = _closure1_slot6;
                    var11 = var11.USER_PROFILE_SUGGESTED_GAMES;
                    var2['url'] = var11;
                    var11 = true;
                    var2['rejectWithError'] = var11;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=132);
case 17:
                    return var2;
case 18:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var9 = var2;
                    var7 = var2.body;
                    var13 = var7;
                    var11 = null;
                    var16 = var11 == var7;
                    var7 = undefined;
                    if(var16) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var7 = var13.suggested_games;
case 21:
                    var7 = var11 != var7;
                    var4 = var7;
                    if(!var7) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var7 = var9;
                    var7 = var7.body;
                    var8 = var7;
                    var13 = var11 == var7;
                    var7 = undefined;
                    if(var13) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var7 = var8.suggested_wishlist_games;
case 25:
                    var4 = var11 != var7;
case 23:
                    if(var4) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 5;
                    var4 = var8[var4];
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.captureMessage;
                    var4 = 'Suggested games or wishlist games not found';
                    var4 = var7.bind(var8)(var4);
case 27:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var3];
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var13 = 'WIDGET_SUGGESTED_FETCH_SUCCESS';
                    var4['type'] = var13;
                    var13 = var9;
                    var13 = var13.body;
                    var15 = var13;
                    var16 = var11 == var13;
                    var13 = undefined;
                    if(var16) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var13 = var15.suggested_games;
case 29:
                    var14 = var13;
                    if(!(var11 == var13)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                    var13 = new Array(0);
                    _fun0002_ip = 33; continue _fun0002;
case 31:
                    var13 = var14;
case 33:
                    var4['suggestedGamesIds'] = var13;
                    var9 = var9.body;
                    var12 = var9;
                    var13 = var11 == var9;
                    var9 = undefined;
                    if(var13) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                    var9 = var12.suggested_wishlist_games;
case 34:
                    var10 = var9;
                    if(!(var11 == var9)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                    var9 = new Array(0);
                    _fun0002_ip = 38; continue _fun0002;
case 36:
                    var9 = var10;
case 38:
                    var4['suggestedWishlistGamesIds'] = var9;
                    var4 = var7.bind(var8)(var4);
case 39: // try_end0
                    return var5;
case 19:
                    return var2;
case 40: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = var6[var3];
                    var8 = var4.bind(var5)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var9 = 'WIDGET_SUGGESTED_FETCH_FAILURE';
                    var3['type'] = var9;
                    var3 = var7.bind(var8)(var3);
                    var3 = 5;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var2);
                    throw var2;
case 15:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['fetchSuggestedGames'] = var7;
    var7 = function removeGameFromSuggestedGames(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'WIDGET_SUGGESTED_REMOVE_GAME';
        var2['type'] = var5;
        var5 = arg1;
        var2['applicationId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['removeGameFromSuggestedGames'] = var7;
    var4 = function notifyPendingWidgets() {
        var7 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 6;
        var4 = var9[var3];
        var1 = undefined;
        var4 = var7.bind(var1)(var4);
        var6 = var4.ComponentDispatch;
        var5 = var6.dispatch;
        var2 = _closure1_slot5;
        var4 = var2.SHAKE_PROFILE_MODAL;
        var4 = var5.bind(var6)(var4);
        var3 = var9[var3];
        var3 = var7.bind(var1)(var3);
        var4 = var3.ComponentDispatch;
        var3 = var4.dispatch;
        var2 = var2.EMPHASIZE_NOTICE;
        var2 = var3.bind(var4)(var2);
        var2 = 7;
        var2 = var9[var2];
        var2 = var7.bind(var1)(var2);
        var4 = var2.AccessibilityAnnouncer;
        var3 = var4.announce;
        var2 = 8;
        var5 = var9[var2];
        var5 = var7.bind(var1)(var5);
        var8 = var5.intl;
        var6 = var8.string;
        var5 = var9[var2];
        var5 = var7.bind(var1)(var5);
        var5 = var5.t;
        var5 = var5.GP7JLC;
        var8 = var6.bind(var8)(var5);
        var5 = var9[var2];
        var5 = var7.bind(var1)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var2 = var9[var2];
        var2 = var7.bind(var1)(var2);
        var2 = var2.t;
        var2 = var2.gKoO1N;
        var7 = var5.bind(var6)(var2);
        var2 = global;
        var2 = var2.HermesInternal;
        var6 = var2.concat;
        var5 = '';
        var2 = ' ';
        var2 = var6.bind(var5)(var8, var2, var7);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['notifyPendingWidgets'] = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/WidgetActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
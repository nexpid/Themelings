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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 319; continue _fun0001 }
 10:
                    var5 = undefined;
                    var9 = undefined;
                    var10 = undefined;
                    var4 = _closure1_slot4;
                    var2 = var4.getCurrentUser;
                    var6 = var2.bind(var4)();
                    var4 = null;
                    var7 = var4 == var6;
                    var2 = undefined;
                    if(var7) { _fun0001_ip = 48; continue _fun0001 }
 43:
                    var2 = var6.id;
 48:
                    var9 = var2;
                    if(!(var4 == var2)) { _fun0001_ip = 58; continue _fun0001 }
 55:
                    return var5;
 58:
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
 124: // try_start_0
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
 200:
                    return var2;
 202:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 273; continue _fun0001 }
 208:
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
 270: // try_end0
                    return var4;
 273:
                    return var2;
 276: // catch_target0
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
 319:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 451; continue _fun0002 }
 10:
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
 71: // try_start_0
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
 130:
                    return var2;
 132:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 382; continue _fun0002 }
 141:
                    var9 = var2;
                    var7 = var2.body;
                    var13 = var7;
                    var11 = null;
                    var16 = var11 == var7;
                    var7 = undefined;
                    if(var16) { _fun0002_ip = 169; continue _fun0002 }
 163:
                    var7 = var13.suggested_games;
 169:
                    var7 = var11 != var7;
                    var4 = var7;
                    if(!var7) { _fun0002_ip = 209; continue _fun0002 }
 179:
                    var7 = var9;
                    var7 = var7.body;
                    var8 = var7;
                    var13 = var11 == var7;
                    var7 = undefined;
                    if(var13) { _fun0002_ip = 205; continue _fun0002 }
 199:
                    var7 = var8.suggested_wishlist_games;
 205:
                    var4 = var11 != var7;
 209:
                    if(var4) { _fun0002_ip = 249; continue _fun0002 }
 212:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 5;
                    var4 = var8[var4];
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.captureMessage;
                    var4 = 'Suggested games or wishlist games not found';
                    var4 = var7.bind(var8)(var4);
 249:
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
                    if(var16) { _fun0002_ip = 309; continue _fun0002 }
 303:
                    var13 = var15.suggested_games;
 309:
                    var14 = var13;
                    if(!(var11 == var13)) { _fun0002_ip = 322; continue _fun0002 }
 316:
                    var13 = new Array(0);
                    _fun0002_ip = 325; continue _fun0002;
 322:
                    var13 = var14;
 325:
                    var4['suggestedGamesIds'] = var13;
                    var9 = var9.body;
                    var12 = var9;
                    var13 = var11 == var9;
                    var9 = undefined;
                    if(var13) { _fun0002_ip = 353; continue _fun0002 }
 347:
                    var9 = var12.suggested_wishlist_games;
 353:
                    var10 = var9;
                    if(!(var11 == var9)) { _fun0002_ip = 366; continue _fun0002 }
 360:
                    var9 = new Array(0);
                    _fun0002_ip = 369; continue _fun0002;
 366:
                    var9 = var10;
 369:
                    var4['suggestedWishlistGamesIds'] = var9;
                    var4 = var7.bind(var8)(var4);
 379: // try_end0
                    return var5;
 382:
                    return var2;
 385: // catch_target0
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
 451:
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
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 6;
        var6 = var5[var3];
        var1 = undefined;
        var6 = var4.bind(var1)(var6);
        var8 = var6.ComponentDispatch;
        var7 = var8.dispatch;
        var2 = _closure1_slot5;
        var6 = var2.SHAKE_PROFILE_MODAL;
        var6 = var7.bind(var8)(var6);
        var3 = var5[var3];
        var3 = var4.bind(var1)(var3);
        var4 = var3.ComponentDispatch;
        var3 = var4.dispatch;
        var2 = var2.EMPHASIZE_NOTICE;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['notifyPendingWidgets'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/WidgetActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
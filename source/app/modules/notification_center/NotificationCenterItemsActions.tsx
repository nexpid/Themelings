// app/modules/notification_center/NotificationCenterItemsActions.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var10 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var1 = function _fetchNotificationCenterItems() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 478; continue _fun0001 }
 12:
                    var12 = arg1;
                    var5 = arg2;
                    var2 = undefined;
                    var _closure4_slot0 = var2;
                    var11 = undefined;
                    var3 = _closure1_slot4;
                    var3 = var3.loading;
                    if(var3) { _fun0001_ip = 475; continue _fun0001 }
 45:
                    var7 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var6 = 3;
                    var3 = var3[var6];
                    var8 = var7.bind(var2)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var9 = 'LOAD_NOTIFICATION_CENTER_ITEMS';
                    var3['type'] = var9;
                    var3 = var7.bind(var8)(var3);
                    SaveGenerator(address=91);
 89:
                    return var3;
 91:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 472; continue _fun0001 }
 100:
                    var7 = global;
                    var9 = var7.Math;
                    var8 = var9.ceil;
                    var7 = _closure1_slot4;
                    var7 = var7.items;
                    var10 = var7.length;
                    var7 = var12;
                    var7 = var7.limit;
                    var7 = var10 / var7;
                    var7 = var8.bind(var9)(var7);
                    _closure4_slot0 = var7;
 151: // try_start_0
                    var8 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var7 = 4;
                    var7 = var16[var7];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.get;
                    var7 = {};
                    var14 = _closure1_slot5;
                    var10 = var14.NOTIF_CENTER_ITEMS;
                    var10 = var10.bind(var14)();
                    var7['url'] = var10;
                    var10 = {};
                    var15 = _closure1_slot0;
                    var14 = 5;
                    var14 = var16[var14];
                    var14 = var15.bind(var2)(var14);
                    var14 = var14.NetworkActionNames;
                    var14 = var14.NOTIFICATION_CENTER_PAGE_FETCH;
                    var10['event'] = var14;
                    var13 = function properties(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var1 = arg1;
                            var1 = var1.body;
                            var2 = null;
                            var2 = var2 == var1;
                            var3 = undefined;
                            var4 = undefined;
                            if(var2) { _fun0002_ip = 27; continue _fun0002 }
 21:
                            var4 = var1.items;
 27:
                            if(var4) { _fun0002_ip = 34; continue _fun0002 }
 30:
                            var4 = new Array(0);
 34:
                            var2 = var4.map;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var1 = var1.type;
                                return var1;
                            };
                            var4 = var2.bind(var4)(var1);
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 6;
                            var1 = var5[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.exact;
                            var1 = {};
                            var5 = _closure4_slot0;
                            var1['page'] = var5;
                            var1['items'] = var4;
                            var4 = var4.length;
                            var1['item_count'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        }
                    };
                    var10['properties'] = var13;
                    var7['trackedActionData'] = var10;
                    var10 = {};
                    var17 = var12;
                    var18 = var10;
                    var12 = copyDataProperties(var18, var17);
                    var7['query'] = var10;
                    var10 = true;
                    var7['rejectWithError'] = var10;
                    var7 = var8.bind(var9)(var7);
                    SaveGenerator(address=279);
 277:
                    return var7;
 279:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 404; continue _fun0001 }
 285:
                    var11 = var7;
                    var9 = var5;
                    var8 = null;
                    if(!(var8 != var9)) { _fun0001_ip = 304; continue _fun0001 }
 297:
                    var8 = var5;
                    var8 = var8.bind(var2)();
 304:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var6];
                    var10 = var9.bind(var2)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var12 = 'LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS';
                    var8['type'] = var12;
                    var12 = var11.body;
                    var12 = var12.items;
                    var8['items'] = var12;
                    var12 = var11.body;
                    var12 = var12.cursor;
                    var8['cursor'] = var12;
                    var11 = var11.body;
                    var11 = var11.has_more;
                    var8['hasMore'] = var11;
                    var8 = var9.bind(var10)(var8);
                    SaveGenerator(address=393);
 391:
                    return var8;
 393:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 401; continue _fun0001 }
 399: // try_end0
                    _fun0001_ip = 475; continue _fun0001;
 401:
                    return var8;
 404:
                    return var7;
 407: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var8 = var5;
                    var7 = null;
                    if(!(var7 != var8)) { _fun0001_ip = 422; continue _fun0001 }
 418:
                    var5 = var5.bind(var2)();
 422:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE';
                    var4['type'] = var7;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=463);
 461:
                    return var4;
 463:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(!var5) { _fun0001_ip = 475; continue _fun0001 }
 469:
                    return var4;
 472:
                    return var3;
 475:
                    return var2;
 478:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var6 = function markNotificationCenterLocalItemsAcked(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'NOTIFICATION_CENTER_ITEMS_LOCAL_ACK';
        var2['type'] = var5;
        var5 = arg1;
        var2['localIds'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot7 = var6;
    var5 = function markNotificationCenterRemoteItemAcked() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var5;
    var1 = function _markNotificationCenterRemoteItemAcked() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 222; continue _fun0003 }
 10:
                    var5 = arg1;
 13: // try_start_0
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 3;
                    var2 = var8[var2];
                    var4 = undefined;
                    var10 = var3.bind(var4)(var2);
                    var3 = var10.dispatch;
                    var2 = {'type': 'NOTIFICATION_CENTER_ITEMS_ACK', 'optimistic': true};
                    var6 = true;
                    var9 = var5;
                    var11 = new Array(1);
                    var11[0] = var9;
                    var2['ids'] = var11;
                    var2 = var3.bind(var10)(var2);
                    var3 = _closure1_slot0;
                    var2 = 8;
                    var2 = var8[var2];
                    var2 = var3.bind(var4)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var8 = _closure1_slot5;
                    var7 = var8.NOTIF_CENTER_ITEMS_ACK;
                    var7 = var7.bind(var8)(var9);
                    var2['url'] = var7;
                    var2['rejectWithError'] = var6;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=141);
 139:
                    return var2;
 141:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 149; continue _fun0003 }
 147: // try_end0
                    _fun0003_ip = 217; continue _fun0003;
 149:
                    return var2;
 152: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'NOTIFICATION_CENTER_ITEMS_ACK_FAILURE';
                    var2['type'] = var6;
                    var6 = var5;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var2['ids'] = var5;
                    var2 = var3.bind(var4)(var2);
 217:
                    var2 = undefined;
                    return var2;
 222:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var4 = function markNotificationCenterMentionAcked(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {'type': 'NOTIFICATION_CENTER_ITEMS_ACK', 'optimistic': true};
        var5 = new Array(1);
        var6 = arg1;
        var5[0] = var6;
        var2['ids'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot10 = var4;
    var1 = function _bulkMarkNotificationCenterItemsAcked() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 268; continue _fun0004 }
 15:
                    var4 = var8;
                    var2 = undefined;
                    var6 = undefined;
                    var7 = var8.map;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var6 = var7.bind(var8)(var5);
 39: // try_start_0
                    var9 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var7 = 3;
                    var7 = var5[var7];
                    var11 = var9.bind(var2)(var7);
                    var10 = var11.dispatch;
                    var9 = {'type': 'NOTIFICATION_CENTER_ITEMS_ACK', 'optimistic': true};
                    var7 = true;
                    var12 = var6;
                    var9['ids'] = var12;
                    var9 = var10.bind(var11)(var9);
                    var10 = var4;
                    var9 = var10.filter;
                    var4 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var4 = arg1;
                            var2 = var4.local_id;
                            var1 = null;
                            var1 = var1 == var2;
                            if(var1) { _fun0005_ip = 54; continue _fun0005 }
 18:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 7;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var5.bind(var2)(var3);
                            var2 = var3.isMentionItem;
                            var1 = var2.bind(var3)(var4);
 54:
                            return var1;
                        }
                    };
                    var9 = var9.bind(var10)(var4);
                    var4 = var9.map;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var9 = var4.bind(var9)(var3);
                    var4 = _closure1_slot0;
                    var3 = 8;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.post;
                    var3 = {};
                    var8 = _closure1_slot5;
                    var8 = var8.NOTIF_CENTER_ITEMS_BULK_ACK;
                    var3['url'] = var8;
                    var8 = {};
                    var8['item_ids'] = var9;
                    var3['query'] = var8;
                    var3['rejectWithError'] = var7;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=202);
 200:
                    return var3;
 202:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 210; continue _fun0004 }
 208: // try_end0
                    _fun0004_ip = 265; continue _fun0004;
 210:
                    return var3;
 213: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 3;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'NOTIFICATION_CENTER_ITEMS_ACK_FAILURE';
                    var3['type'] = var7;
                    var3['ids'] = var6;
                    var3 = var4.bind(var5)(var3);
 265:
                    return var2;
 268:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function _deleteNotificationCenterItem() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 377; continue _fun0006 }
 10:
                    var6 = arg1;
                    var5 = undefined;
                    var11 = undefined;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 9;
                    var2 = var7[var2];
                    var2 = var4.bind(var5)(var2);
                    var4 = var2.NotificationCenterAckedBeforeId;
                    var2 = var4.getSetting;
                    var11 = var2.bind(var4)();
 56: // try_start_0
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 3;
                    var2 = var9[var2];
                    var8 = var4.bind(var5)(var2);
                    var7 = var8.dispatch;
                    var2 = {};
                    var10 = 'NOTIFICATION_CENTER_ITEM_DELETE';
                    var2['type'] = var10;
                    var12 = var6;
                    var10 = var12.id;
                    var2['id'] = var10;
                    var2 = var7.bind(var8)(var2);
                    var2 = 4;
                    var2 = var9[var2];
                    var7 = var4.bind(var5)(var2);
                    var4 = var7.delete;
                    var2 = {};
                    var13 = _closure1_slot5;
                    var10 = var13.NOTIF_CENTER_ITEMS;
                    var8 = var12.id;
                    var8 = var10.bind(var13)(var8);
                    var2['url'] = var8;
                    var8 = {};
                    var10 = _closure1_slot0;
                    var14 = 7;
                    var9 = var9[var14];
                    var10 = var10.bind(var5)(var9);
                    var9 = var10.isMentionItem;
                    var10 = var9.bind(var10)(var12);
                    var9 = 'regular';
                    if(!var10) { _fun0006_ip = 191; continue _fun0006 }
 187:
                    var9 = 'mention';
 191:
                    var8['item_type'] = var9;
                    var2['body'] = var8;
                    var8 = {};
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 5;
                    var9 = var12[var9];
                    var9 = var13.bind(var5)(var9);
                    var9 = var9.NetworkActionNames;
                    var9 = var9.NOTIFICATION_CENTER_ITEM_DELETE;
                    var8['event'] = var9;
                    var9 = {};
                    var10 = var6;
                    var15 = var10.id;
                    var9['notification_center_id'] = var15;
                    var12 = var12[var14];
                    var13 = var13.bind(var5)(var12);
                    var12 = var13.isRemoteAcked;
                    var11 = var12.bind(var13)(var10, var11);
                    var9['acked'] = var11;
                    var10 = var10.type;
                    var9['item_type'] = var10;
                    var8['properties'] = var9;
                    var2['trackedActionData'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=315);
 313:
                    return var2;
 315:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 324; continue _fun0006 }
 321: // try_end0
                    return var5;
 324:
                    return var2;
 327: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 3;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'NOTIFICATION_CENTER_ITEM_DELETE_FAILURE';
                    var3['type'] = var7;
                    var3['item'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
 377:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.Endpoints;
    var _closure1_slot5 = var7;
    var7 = 10;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/notification_center/NotificationCenterItemsActions.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function setNotificationCenterActive(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'NOTIFICATION_CENTER_SET_ACTIVE';
        var2['type'] = var5;
        var5 = arg1;
        var2['active'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setNotificationCenterActive'] = var7;
    var7 = function setNotificationCenterTabFocused(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'NOTIFICATION_CENTER_TAB_FOCUSED';
        var2['type'] = var5;
        var5 = arg1;
        var2['focused'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setNotificationCenterTabFocused'] = var7;
    var7 = function resetNotificationCenter() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'RESET_NOTIFICATION_CENTER';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetNotificationCenter'] = var7;
    var7 = function fetchNotificationCenterItems() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchNotificationCenterItems'] = var7;
    var7 = function markNotificationCenterItemAcked(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var3 = var1.local_id;
            var2 = null;
            if(!(var2 == var3)) { _fun0007_ip = 86; continue _fun0007 }
 15:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 7;
            var3 = var4[var3];
            var4 = undefined;
            var5 = var5.bind(var4)(var3);
            var3 = var5.isMentionItem;
            var3 = var3.bind(var5)(var1);
            if(var3) { _fun0007_ip = 70; continue _fun0007 }
 54:
            var5 = _closure1_slot8;
            var3 = var1.id;
            var3 = var5.bind(var4)(var3);
            _fun0007_ip = 114; continue _fun0007;
 70:
            var3 = _closure1_slot10;
            var2 = var1.id;
            var2 = var3.bind(var4)(var2);
            _fun0007_ip = 114; continue _fun0007;
 86:
            var3 = _closure1_slot7;
            var1 = var1.local_id;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
 114:
            var1 = undefined;
            return var1;
        }
    };
    var3['markNotificationCenterItemAcked'] = var7;
    var3['markNotificationCenterLocalItemsAcked'] = var6;
    var3['markNotificationCenterRemoteItemAcked'] = var5;
    var3['markNotificationCenterMentionAcked'] = var4;
    var4 = function bulkMarkNotificationCenterItemsAcked() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['bulkMarkNotificationCenterItemsAcked'] = var4;
    var2 = function deleteNotificationCenterItem() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['deleteNotificationCenterItem'] = var2;
    return var1;
})();
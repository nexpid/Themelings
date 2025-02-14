// app/modules/notification_center/NotificationCenterItemsActions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    offset = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    entity = function() { // Original name: _fetchNotificationCenterItems
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun116408: for(var _fun116408_ip = 0; ; ) switch(_fun116408_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun116408_ip = 478; continue _fun116408 }
 12:
                    romeo = argFoo;
                    report = argBar;
                    mike = undefined;
                    var _closure4_slot0 = mike;
                    yankee = undefined;
                    zulu = _closure1_slot4;
                    zulu = zulu.loading;
                    if(zulu) { _fun116408_ip = 475; continue _fun116408 }
 45:
                    golf = _closure1_slot1;
                    zulu = _closure1_slot2;
                    oscar = 3;
                    zulu = zulu[oscar];
                    options = golf.bind(mike)(zulu);
                    golf = options.dispatch;
                    zulu = {};
                    verify = 'LOAD_NOTIFICATION_CENTER_ITEMS';
                    zulu['type'] = verify;
                    zulu = golf.bind(options)(zulu);
                    SaveGenerator(address=91);
 89:
                    return zulu;
 91:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golf) { _fun116408_ip = 472; continue _fun116408 }
 100:
                    golf = global;
                    verify = golf.Math;
                    options = verify.ceil;
                    golf = _closure1_slot4;
                    golf = golf.items;
                    offset = golf.length;
                    golf = romeo;
                    golf = golf.limit;
                    golf = offset / golf;
                    golf = options.bind(verify)(golf);
                    _closure4_slot0 = golf;
 151: // try_start_0
                    options = _closure1_slot1;
                    sizing = _closure1_slot2;
                    golf = 4;
                    golf = sizing[golf];
                    verify = options.bind(mike)(golf);
                    options = verify.get;
                    golf = {};
                    backup = _closure1_slot5;
                    offset = backup.NOTIF_CENTER_ITEMS;
                    offset = offset.bind(backup)();
                    golf['url'] = offset;
                    offset = {};
                    kilo = _closure1_slot0;
                    backup = 5;
                    backup = sizing[backup];
                    backup = kilo.bind(mike)(backup);
                    backup = backup.NetworkActionNames;
                    backup = backup.NOTIFICATION_CENTER_PAGE_FETCH;
                    offset['event'] = backup;
                    foxtrot = function(argFoo) { // Original name: properties
                        _fun116409: for(var _fun116409_ip = 0; ; ) switch(_fun116409_ip) {
 0:
                            entity = argFoo;
                            entity = entity.body;
                            mike = null;
                            mike = mike == entity;
                            zulu = undefined;
                            tango = undefined;
                            if(mike) { _fun116409_ip = 27; continue _fun116409 }
 21:
                            tango = entity.items;
 27:
                            if(tango) { _fun116409_ip = 34; continue _fun116409 }
 30:
                            tango = new Array(0);
 34:
                            mike = tango.map;
                            entity = function(argFoo) {
                                entity = argFoo;
                                entity = entity.type;
                                return entity;
                            };
                            tango = mike.bind(tango)(entity);
                            mike = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 6;
                            entity = report[entity];
                            zulu = mike.bind(zulu)(entity);
                            mike = zulu.exact;
                            entity = {};
                            report = _closure4_slot0;
                            entity['page'] = report;
                            entity['items'] = tango;
                            tango = tango.length;
                            entity['item_count'] = tango;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        }
                    };
                    offset['properties'] = foxtrot;
                    golf['trackedActionData'] = offset;
                    offset = {};
                    output = romeo;
                    result = offset;
                    romeo = copyDataProperties(result, output);
                    golf['query'] = offset;
                    offset = true;
                    golf['rejectWithError'] = offset;
                    golf = options.bind(verify)(golf);
                    SaveGenerator(address=279);
 277:
                    return golf;
 279:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(options) { _fun116408_ip = 404; continue _fun116408 }
 285:
                    yankee = golf;
                    verify = report;
                    options = null;
                    if(!(options != verify)) { _fun116408_ip = 304; continue _fun116408 }
 297:
                    options = report;
                    options = options.bind(mike)();
 304:
                    verify = _closure1_slot1;
                    options = _closure1_slot2;
                    options = options[oscar];
                    offset = verify.bind(mike)(options);
                    verify = offset.dispatch;
                    options = {};
                    romeo = 'LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS';
                    options['type'] = romeo;
                    romeo = yankee.body;
                    romeo = romeo.items;
                    options['items'] = romeo;
                    romeo = yankee.body;
                    romeo = romeo.cursor;
                    options['cursor'] = romeo;
                    yankee = yankee.body;
                    yankee = yankee.has_more;
                    options['hasMore'] = yankee;
                    options = verify.bind(offset)(options);
                    SaveGenerator(address=393);
 391:
                    return options;
 393:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun116408_ip = 401; continue _fun116408 }
 399: // try_end0
                    _fun116408_ip = 475; continue _fun116408;
 401:
                    return options;
 404:
                    return golf;
 407: // catch_target0
                    CatchBlockStart(arg_register=6);
                    options = report;
                    golf = null;
                    if(!(golf != options)) { _fun116408_ip = 422; continue _fun116408 }
 418:
                    report = report.bind(mike)();
 422:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[oscar];
                    oscar = report.bind(mike)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE';
                    tango['type'] = golf;
                    tango = report.bind(oscar)(tango);
                    SaveGenerator(address=463);
 461:
                    return tango;
 463:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(!report) { _fun116408_ip = 475; continue _fun116408 }
 469:
                    return tango;
 472:
                    return zulu;
 475:
                    return mike;
 478:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot6 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot6 = entity;
    oscar = function(argFoo) { // Original name: markNotificationCenterLocalItemsAcked
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'NOTIFICATION_CENTER_ITEMS_LOCAL_ACK';
        mike['type'] = report;
        report = argFoo;
        mike['localIds'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot7 = oscar;
    report = function() { // Original name: markNotificationCenterRemoteItemAcked
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot8 = report;
    entity = function() { // Original name: _markNotificationCenterRemoteItemAcked
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun116415: for(var _fun116415_ip = 0; ; ) switch(_fun116415_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun116415_ip = 222; continue _fun116415 }
 10:
                    report = argFoo;
 13: // try_start_0
                    zulu = _closure1_slot1;
                    options = _closure1_slot2;
                    mike = 3;
                    mike = options[mike];
                    tango = undefined;
                    offset = zulu.bind(tango)(mike);
                    zulu = offset.dispatch;
                    mike = {'type': 'NOTIFICATION_CENTER_ITEMS_ACK', 'optimistic': true};
                    oscar = true;
                    verify = report;
                    yankee = new Array(1);
                    yankee[0] = verify;
                    mike['ids'] = yankee;
                    mike = zulu.bind(offset)(mike);
                    zulu = _closure1_slot0;
                    mike = 8;
                    mike = options[mike];
                    mike = zulu.bind(tango)(mike);
                    tango = mike.HTTP;
                    zulu = tango.post;
                    mike = {};
                    options = _closure1_slot5;
                    golf = options.NOTIF_CENTER_ITEMS_ACK;
                    golf = golf.bind(options)(verify);
                    mike['url'] = golf;
                    mike['rejectWithError'] = oscar;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=141);
 139:
                    return mike;
 141:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun116415_ip = 149; continue _fun116415 }
 147: // try_end0
                    _fun116415_ip = 217; continue _fun116415;
 149:
                    return mike;
 152: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 3;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.dispatch;
                    mike = {};
                    oscar = 'NOTIFICATION_CENTER_ITEMS_ACK_FAILURE';
                    mike['type'] = oscar;
                    oscar = report;
                    report = new Array(1);
                    report[0] = oscar;
                    mike['ids'] = report;
                    mike = zulu.bind(tango)(mike);
 217:
                    mike = undefined;
                    return mike;
 222:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot9 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot9 = entity;
    tango = function(argFoo) { // Original name: markNotificationCenterMentionAcked
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {'type': 'NOTIFICATION_CENTER_ITEMS_ACK', 'optimistic': true};
        report = new Array(1);
        oscar = argFoo;
        report[0] = oscar;
        mike['ids'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot10 = tango;
    entity = function() { // Original name: _bulkMarkNotificationCenterItemsAcked
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun116419: for(var _fun116419_ip = 0; ; ) switch(_fun116419_ip) {
 0:
                    StartGenerator();
                    options = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun116419_ip = 268; continue _fun116419 }
 15:
                    tango = options;
                    mike = undefined;
                    oscar = undefined;
                    golf = options.map;
                    report = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    oscar = golf.bind(options)(report);
 39: // try_start_0
                    verify = _closure1_slot1;
                    report = _closure1_slot2;
                    golf = 3;
                    golf = report[golf];
                    yankee = verify.bind(mike)(golf);
                    offset = yankee.dispatch;
                    verify = {'type': 'NOTIFICATION_CENTER_ITEMS_ACK', 'optimistic': true};
                    golf = true;
                    romeo = oscar;
                    verify['ids'] = romeo;
                    verify = offset.bind(yankee)(verify);
                    offset = tango;
                    verify = offset.filter;
                    tango = function(argFoo) {
                        _fun116421: for(var _fun116421_ip = 0; ; ) switch(_fun116421_ip) {
 0:
                            tango = argFoo;
                            mike = tango.local_id;
                            entity = null;
                            entity = entity == mike;
                            if(entity) { _fun116421_ip = 54; continue _fun116421 }
 18:
                            report = _closure1_slot0;
                            zulu = _closure1_slot2;
                            mike = 7;
                            zulu = zulu[mike];
                            mike = undefined;
                            zulu = report.bind(mike)(zulu);
                            mike = zulu.isMentionItem;
                            entity = mike.bind(zulu)(tango);
 54:
                            return entity;
                        }
                    };
                    verify = verify.bind(offset)(tango);
                    tango = verify.map;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    verify = tango.bind(verify)(zulu);
                    tango = _closure1_slot0;
                    zulu = 8;
                    zulu = report[zulu];
                    zulu = tango.bind(mike)(zulu);
                    report = zulu.HTTP;
                    tango = report.post;
                    zulu = {};
                    options = _closure1_slot5;
                    options = options.NOTIF_CENTER_ITEMS_BULK_ACK;
                    zulu['url'] = options;
                    options = {};
                    options['item_ids'] = verify;
                    zulu['query'] = options;
                    zulu['rejectWithError'] = golf;
                    zulu = tango.bind(report)(zulu);
                    SaveGenerator(address=202);
 200:
                    return zulu;
 202:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun116419_ip = 210; continue _fun116419 }
 208: // try_end0
                    _fun116419_ip = 265; continue _fun116419;
 210:
                    return zulu;
 213: // catch_target0
                    CatchBlockStart(arg_register=2);
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 3;
                    zulu = report[zulu];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'NOTIFICATION_CENTER_ITEMS_ACK_FAILURE';
                    zulu['type'] = golf;
                    zulu['ids'] = oscar;
                    zulu = tango.bind(report)(zulu);
 265:
                    return mike;
 268:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot11 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _deleteNotificationCenterItem
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun116425: for(var _fun116425_ip = 0; ; ) switch(_fun116425_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun116425_ip = 377; continue _fun116425 }
 10:
                    oscar = argFoo;
                    report = undefined;
                    yankee = undefined;
                    tango = _closure1_slot0;
                    golf = _closure1_slot2;
                    mike = 9;
                    mike = golf[mike];
                    mike = tango.bind(report)(mike);
                    tango = mike.NotificationCenterAckedBeforeId;
                    mike = tango.getSetting;
                    yankee = mike.bind(tango)();
 56: // try_start_0
                    tango = _closure1_slot1;
                    verify = _closure1_slot2;
                    mike = 3;
                    mike = verify[mike];
                    options = tango.bind(report)(mike);
                    golf = options.dispatch;
                    mike = {};
                    offset = 'NOTIFICATION_CENTER_ITEM_DELETE';
                    mike['type'] = offset;
                    romeo = oscar;
                    offset = romeo.id;
                    mike['id'] = offset;
                    mike = golf.bind(options)(mike);
                    mike = 4;
                    mike = verify[mike];
                    golf = tango.bind(report)(mike);
                    tango = golf.delete;
                    mike = {};
                    foxtrot = _closure1_slot5;
                    offset = foxtrot.NOTIF_CENTER_ITEMS;
                    options = romeo.id;
                    options = offset.bind(foxtrot)(options);
                    mike['url'] = options;
                    options = {};
                    offset = _closure1_slot0;
                    backup = 7;
                    verify = verify[backup];
                    offset = offset.bind(report)(verify);
                    verify = offset.isMentionItem;
                    offset = verify.bind(offset)(romeo);
                    verify = 'regular';
                    if(!offset) { _fun116425_ip = 191; continue _fun116425 }
 187:
                    verify = 'mention';
 191:
                    options['item_type'] = verify;
                    mike['body'] = options;
                    options = {};
                    foxtrot = _closure1_slot0;
                    romeo = _closure1_slot2;
                    verify = 5;
                    verify = romeo[verify];
                    verify = foxtrot.bind(report)(verify);
                    verify = verify.NetworkActionNames;
                    verify = verify.NOTIFICATION_CENTER_ITEM_DELETE;
                    options['event'] = verify;
                    verify = {};
                    offset = oscar;
                    kilo = offset.id;
                    verify['notification_center_id'] = kilo;
                    romeo = romeo[backup];
                    foxtrot = foxtrot.bind(report)(romeo);
                    romeo = foxtrot.isRemoteAcked;
                    yankee = romeo.bind(foxtrot)(offset, yankee);
                    verify['acked'] = yankee;
                    offset = offset.type;
                    verify['item_type'] = offset;
                    options['properties'] = verify;
                    mike['trackedActionData'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = tango.bind(golf)(mike);
                    SaveGenerator(address=315);
 313:
                    return mike;
 315:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun116425_ip = 324; continue _fun116425 }
 321: // try_end0
                    return report;
 324:
                    return mike;
 327: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 3;
                    zulu = golf[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'NOTIFICATION_CENTER_ITEM_DELETE_FAILURE';
                    zulu['type'] = golf;
                    zulu['item'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    throw mike;
 377:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot12 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, golf);
    entity = 0;
    golf = verify[entity];
    entity = undefined;
    golf = offset.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 1;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 2;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    golf = golf.Endpoints;
    var _closure1_slot5 = golf;
    golf = 10;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/notification_center/NotificationCenterItemsActions.tsx';
    golf = options.bind(verify)(golf);
    golf = function(argFoo) { // Original name: setNotificationCenterActive
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'NOTIFICATION_CENTER_SET_ACTIVE';
        mike['type'] = report;
        report = argFoo;
        mike['active'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setNotificationCenterActive'] = golf;
    golf = function(argFoo) { // Original name: setNotificationCenterTabFocused
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'NOTIFICATION_CENTER_TAB_FOCUSED';
        mike['type'] = report;
        report = argFoo;
        mike['focused'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setNotificationCenterTabFocused'] = golf;
    golf = function() { // Original name: resetNotificationCenter
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'RESET_NOTIFICATION_CENTER';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['resetNotificationCenter'] = golf;
    golf = function() { // Original name: fetchNotificationCenterItems
        entity = undefined;
        tango = _closure1_slot6;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchNotificationCenterItems'] = golf;
    golf = function(argFoo) { // Original name: markNotificationCenterItemAcked
        _fun116430: for(var _fun116430_ip = 0; ; ) switch(_fun116430_ip) {
 0:
            entity = argFoo;
            zulu = entity.local_id;
            mike = null;
            if(!(mike == zulu)) { _fun116430_ip = 86; continue _fun116430 }
 15:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 7;
            zulu = tango[zulu];
            tango = undefined;
            report = report.bind(tango)(zulu);
            zulu = report.isMentionItem;
            zulu = zulu.bind(report)(entity);
            if(zulu) { _fun116430_ip = 70; continue _fun116430 }
 54:
            report = _closure1_slot8;
            zulu = entity.id;
            zulu = report.bind(tango)(zulu);
            _fun116430_ip = 114; continue _fun116430;
 70:
            zulu = _closure1_slot10;
            mike = entity.id;
            mike = zulu.bind(tango)(mike);
            _fun116430_ip = 114; continue _fun116430;
 86:
            zulu = _closure1_slot7;
            entity = entity.local_id;
            mike = new Array(1);
            mike[0] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
 114:
            entity = undefined;
            return entity;
        }
    };
    zulu['markNotificationCenterItemAcked'] = golf;
    zulu['markNotificationCenterLocalItemsAcked'] = oscar;
    zulu['markNotificationCenterRemoteItemAcked'] = report;
    zulu['markNotificationCenterMentionAcked'] = tango;
    tango = function() { // Original name: bulkMarkNotificationCenterItemsAcked
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['bulkMarkNotificationCenterItemsAcked'] = tango;
    mike = function() { // Original name: deleteNotificationCenterItem
        entity = undefined;
        tango = _closure1_slot12;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['deleteNotificationCenterItem'] = mike;
    return entity;
})();
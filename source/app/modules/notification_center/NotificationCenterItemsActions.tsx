// app/modules/notification_center/NotificationCenterItemsActions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    entity = function() { // Original name: _fetchNotificationCenterItems
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 478; continue _fun00001 }
 12:
                    romeon = argFoo;
                    report = argBar;
                    michal = undefined;
                    var _closure4_slot0 = michal;
                    yankee = undefined;
                    zuuluu = _closure1_slot4;
                    zuuluu = zuuluu.loading;
                    if(zuuluu) { _fun00002_ip = 475; continue _fun00001 }
 45:
                    golfie = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    oscard = 3;
                    zuuluu = zuuluu[oscard];
                    option = golfie.bind(michal)(zuuluu);
                    golfie = option.dispatch;
                    zuuluu = {};
                    verify = 'LOAD_NOTIFICATION_CENTER_ITEMS';
                    zuuluu['type'] = verify;
                    zuuluu = golfie.bind(option)(zuuluu);
                    SaveGenerator(address=91);
 89:
                    return zuuluu;
 91:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 472; continue _fun00001 }
 100:
                    golfie = global;
                    verify = golfie.Math;
                    option = verify.ceil;
                    golfie = _closure1_slot4;
                    golfie = golfie.items;
                    offset = golfie.length;
                    golfie = romeon;
                    golfie = golfie.limit;
                    golfie = offset / golfie;
                    golfie = option.bind(verify)(golfie);
                    _closure4_slot0 = golfie;
 151: // try_start_0
                    option = _closure1_slot1;
                    sizing = _closure1_slot2;
                    golfie = 4;
                    golfie = sizing[golfie];
                    verify = option.bind(michal)(golfie);
                    option = verify.get;
                    golfie = {};
                    backup = _closure1_slot5;
                    offset = backup.NOTIF_CENTER_ITEMS;
                    offset = offset.bind(backup)();
                    golfie['url'] = offset;
                    offset = {};
                    kiloes = _closure1_slot0;
                    backup = 5;
                    backup = sizing[backup];
                    backup = kiloes.bind(michal)(backup);
                    backup = backup.NetworkActionNames;
                    backup = backup.NOTIFICATION_CENTER_PAGE_FETCH;
                    offset['event'] = backup;
                    foxtra = function(argFoo) { // Original name: properties
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            entity = argFoo;
                            entity = entity.body;
                            michal = null;
                            michal = michal == entity;
                            zuuluu = undefined;
                            tangon = undefined;
                            if(michal) { _fun00004_ip = 27; continue _fun00003 }
 21:
                            tangon = entity.items;
 27:
                            if(tangon) { _fun00004_ip = 34; continue _fun00003 }
 30:
                            tangon = new Array(0);
 34:
                            michal = tangon.map;
                            entity = function(argFoo) {
                                entity = argFoo;
                                entity = entity.type;
                                return entity;
                            };
                            tangon = michal.bind(tangon)(entity);
                            michal = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 6;
                            entity = report[entity];
                            zuuluu = michal.bind(zuuluu)(entity);
                            michal = zuuluu.exact;
                            entity = {};
                            report = _closure4_slot0;
                            entity['page'] = report;
                            entity['items'] = tangon;
                            tangon = tangon.length;
                            entity['item_count'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        }
                    };
                    offset['properties'] = foxtra;
                    golfie['trackedActionData'] = offset;
                    offset = {};
                    output = romeon;
                    result = offset;
                    romeon = copyDataProperties(result, output);
                    golfie['query'] = offset;
                    offset = true;
                    golfie['rejectWithError'] = offset;
                    golfie = option.bind(verify)(golfie);
                    SaveGenerator(address=279);
 277:
                    return golfie;
 279:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(option) { _fun00002_ip = 404; continue _fun00001 }
 285:
                    yankee = golfie;
                    verify = report;
                    option = null;
                    if(!(option != verify)) { _fun00002_ip = 304; continue _fun00001 }
 297:
                    option = report;
                    option = option.bind(michal)();
 304:
                    verify = _closure1_slot1;
                    option = _closure1_slot2;
                    option = option[oscard];
                    offset = verify.bind(michal)(option);
                    verify = offset.dispatch;
                    option = {};
                    romeon = 'LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS';
                    option['type'] = romeon;
                    romeon = yankee.body;
                    romeon = romeon.items;
                    option['items'] = romeon;
                    romeon = yankee.body;
                    romeon = romeon.cursor;
                    option['cursor'] = romeon;
                    yankee = yankee.body;
                    yankee = yankee.has_more;
                    option['hasMore'] = yankee;
                    option = verify.bind(offset)(option);
                    SaveGenerator(address=393);
 391:
                    return option;
 393:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun00002_ip = 401; continue _fun00001 }
 399: // try_end0
                    _fun00002_ip = 475; continue _fun00001;
 401:
                    return option;
 404:
                    return golfie;
 407: // catch_target0
                    CatchBlockStart(arg_register=6);
                    option = report;
                    golfie = null;
                    if(!(golfie != option)) { _fun00002_ip = 422; continue _fun00001 }
 418:
                    report = report.bind(michal)();
 422:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[oscard];
                    oscard = report.bind(michal)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE';
                    tangon['type'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    SaveGenerator(address=463);
 461:
                    return tangon;
 463:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(!report) { _fun00002_ip = 475; continue _fun00001 }
 469:
                    return tangon;
 472:
                    return zuuluu;
 475:
                    return michal;
 478:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot6 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
    oscard = function(argFoo) { // Original name: markNotificationCenterLocalItemsAcked
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'NOTIFICATION_CENTER_ITEMS_LOCAL_ACK';
        michal['type'] = report;
        report = argFoo;
        michal['localIds'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot7 = oscard;
    report = function() { // Original name: markNotificationCenterRemoteItemAcked
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot8 = report;
    entity = function() { // Original name: _markNotificationCenterRemoteItemAcked
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 222; continue _fun00005 }
 10:
                    report = argFoo;
 13: // try_start_0
                    zuuluu = _closure1_slot1;
                    option = _closure1_slot2;
                    michal = 3;
                    michal = option[michal];
                    tangon = undefined;
                    offset = zuuluu.bind(tangon)(michal);
                    zuuluu = offset.dispatch;
                    michal = {'type': 'NOTIFICATION_CENTER_ITEMS_ACK', 'optimistic': true};
                    oscard = true;
                    verify = report;
                    yankee = new Array(1);
                    yankee[0] = verify;
                    michal['ids'] = yankee;
                    michal = zuuluu.bind(offset)(michal);
                    zuuluu = _closure1_slot0;
                    michal = 8;
                    michal = option[michal];
                    michal = zuuluu.bind(tangon)(michal);
                    tangon = michal.HTTP;
                    zuuluu = tangon.post;
                    michal = {};
                    option = _closure1_slot5;
                    golfie = option.NOTIF_CENTER_ITEMS_ACK;
                    golfie = golfie.bind(option)(verify);
                    michal['url'] = golfie;
                    michal['rejectWithError'] = oscard;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=141);
 139:
                    return michal;
 141:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 149; continue _fun00005 }
 147: // try_end0
                    _fun00006_ip = 217; continue _fun00005;
 149:
                    return michal;
 152: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 3;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    oscard = 'NOTIFICATION_CENTER_ITEMS_ACK_FAILURE';
                    michal['type'] = oscard;
                    oscard = report;
                    report = new Array(1);
                    report[0] = oscard;
                    michal['ids'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 217:
                    michal = undefined;
                    return michal;
 222:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot9 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot9 = entity;
    tangon = function(argFoo) { // Original name: markNotificationCenterMentionAcked
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {'type': 'NOTIFICATION_CENTER_ITEMS_ACK', 'optimistic': true};
        report = new Array(1);
        oscard = argFoo;
        report[0] = oscard;
        michal['ids'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot10 = tangon;
    entity = function() { // Original name: _bulkMarkNotificationCenterItemsAcked
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    option = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 268; continue _fun00007 }
 15:
                    tangon = option;
                    michal = undefined;
                    oscard = undefined;
                    golfie = option.map;
                    report = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    oscard = golfie.bind(option)(report);
 39: // try_start_0
                    verify = _closure1_slot1;
                    report = _closure1_slot2;
                    golfie = 3;
                    golfie = report[golfie];
                    yankee = verify.bind(michal)(golfie);
                    offset = yankee.dispatch;
                    verify = {'type': 'NOTIFICATION_CENTER_ITEMS_ACK', 'optimistic': true};
                    golfie = true;
                    romeon = oscard;
                    verify['ids'] = romeon;
                    verify = offset.bind(yankee)(verify);
                    offset = tangon;
                    verify = offset.filter;
                    tangon = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            tangon = argFoo;
                            michal = tangon.local_id;
                            entity = null;
                            entity = entity == michal;
                            if(entity) { _fun00010_ip = 54; continue _fun00009 }
 18:
                            report = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            michal = 7;
                            zuuluu = zuuluu[michal];
                            michal = undefined;
                            zuuluu = report.bind(michal)(zuuluu);
                            michal = zuuluu.isMentionItem;
                            entity = michal.bind(zuuluu)(tangon);
 54:
                            return entity;
                        }
                    };
                    verify = verify.bind(offset)(tangon);
                    tangon = verify.map;
                    zuuluu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    verify = tangon.bind(verify)(zuuluu);
                    tangon = _closure1_slot0;
                    zuuluu = 8;
                    zuuluu = report[zuuluu];
                    zuuluu = tangon.bind(michal)(zuuluu);
                    report = zuuluu.HTTP;
                    tangon = report.post;
                    zuuluu = {};
                    option = _closure1_slot5;
                    option = option.NOTIF_CENTER_ITEMS_BULK_ACK;
                    zuuluu['url'] = option;
                    option = {};
                    option['item_ids'] = verify;
                    zuuluu['query'] = option;
                    zuuluu['rejectWithError'] = golfie;
                    zuuluu = tangon.bind(report)(zuuluu);
                    SaveGenerator(address=202);
 200:
                    return zuuluu;
 202:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 210; continue _fun00007 }
 208: // try_end0
                    _fun00008_ip = 265; continue _fun00007;
 210:
                    return zuuluu;
 213: // catch_target0
                    CatchBlockStart(arg_register=2);
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 3;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'NOTIFICATION_CENTER_ITEMS_ACK_FAILURE';
                    zuuluu['type'] = golfie;
                    zuuluu['ids'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 265:
                    return michal;
 268:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot11 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _deleteNotificationCenterItem
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00012_ip = 377; continue _fun00011 }
 10:
                    oscard = argFoo;
                    report = undefined;
                    yankee = undefined;
                    tangon = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 9;
                    michal = golfie[michal];
                    michal = tangon.bind(report)(michal);
                    tangon = michal.NotificationCenterAckedBeforeId;
                    michal = tangon.getSetting;
                    yankee = michal.bind(tangon)();
 56: // try_start_0
                    tangon = _closure1_slot1;
                    verify = _closure1_slot2;
                    michal = 3;
                    michal = verify[michal];
                    option = tangon.bind(report)(michal);
                    golfie = option.dispatch;
                    michal = {};
                    offset = 'NOTIFICATION_CENTER_ITEM_DELETE';
                    michal['type'] = offset;
                    romeon = oscard;
                    offset = romeon.id;
                    michal['id'] = offset;
                    michal = golfie.bind(option)(michal);
                    michal = 4;
                    michal = verify[michal];
                    golfie = tangon.bind(report)(michal);
                    tangon = golfie.delete;
                    michal = {};
                    foxtra = _closure1_slot5;
                    offset = foxtra.NOTIF_CENTER_ITEMS;
                    option = romeon.id;
                    option = offset.bind(foxtra)(option);
                    michal['url'] = option;
                    option = {};
                    offset = _closure1_slot0;
                    backup = 7;
                    verify = verify[backup];
                    offset = offset.bind(report)(verify);
                    verify = offset.isMentionItem;
                    offset = verify.bind(offset)(romeon);
                    verify = 'regular';
                    if(!offset) { _fun00012_ip = 191; continue _fun00011 }
 187:
                    verify = 'mention';
 191:
                    option['item_type'] = verify;
                    michal['body'] = option;
                    option = {};
                    foxtra = _closure1_slot0;
                    romeon = _closure1_slot2;
                    verify = 5;
                    verify = romeon[verify];
                    verify = foxtra.bind(report)(verify);
                    verify = verify.NetworkActionNames;
                    verify = verify.NOTIFICATION_CENTER_ITEM_DELETE;
                    option['event'] = verify;
                    verify = {};
                    offset = oscard;
                    kiloes = offset.id;
                    verify['notification_center_id'] = kiloes;
                    romeon = romeon[backup];
                    foxtra = foxtra.bind(report)(romeon);
                    romeon = foxtra.isRemoteAcked;
                    yankee = romeon.bind(foxtra)(offset, yankee);
                    verify['acked'] = yankee;
                    offset = offset.type;
                    verify['item_type'] = offset;
                    option['properties'] = verify;
                    michal['trackedActionData'] = option;
                    option = false;
                    michal['rejectWithError'] = option;
                    michal = tangon.bind(golfie)(michal);
                    SaveGenerator(address=315);
 313:
                    return michal;
 315:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00012_ip = 324; continue _fun00011 }
 321: // try_end0
                    return report;
 324:
                    return michal;
 327: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot2;
                    zuuluu = 3;
                    zuuluu = golfie[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'NOTIFICATION_CENTER_ITEM_DELETE_FAILURE';
                    zuuluu['type'] = golfie;
                    zuuluu['item'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    throw michal;
 377:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot12 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, golfie);
    entity = 0;
    golfie = verify[entity];
    entity = undefined;
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.Endpoints;
    var _closure1_slot5 = golfie;
    golfie = 10;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/notification_center/NotificationCenterItemsActions.tsx';
    golfie = option.bind(verify)(golfie);
    golfie = function(argFoo) { // Original name: setNotificationCenterActive
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'NOTIFICATION_CENTER_SET_ACTIVE';
        michal['type'] = report;
        report = argFoo;
        michal['active'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setNotificationCenterActive'] = golfie;
    golfie = function(argFoo) { // Original name: setNotificationCenterTabFocused
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'NOTIFICATION_CENTER_TAB_FOCUSED';
        michal['type'] = report;
        report = argFoo;
        michal['focused'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setNotificationCenterTabFocused'] = golfie;
    golfie = function() { // Original name: resetNotificationCenter
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'RESET_NOTIFICATION_CENTER';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['resetNotificationCenter'] = golfie;
    golfie = function() { // Original name: fetchNotificationCenterItems
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchNotificationCenterItems'] = golfie;
    golfie = function(argFoo) { // Original name: markNotificationCenterItemAcked
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.local_id;
            michal = null;
            if(!(michal == zuuluu)) { _fun00014_ip = 86; continue _fun00013 }
 15:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 7;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            report = report.bind(tangon)(zuuluu);
            zuuluu = report.isMentionItem;
            zuuluu = zuuluu.bind(report)(entity);
            if(zuuluu) { _fun00014_ip = 70; continue _fun00013 }
 54:
            report = _closure1_slot8;
            zuuluu = entity.id;
            zuuluu = report.bind(tangon)(zuuluu);
            _fun00014_ip = 114; continue _fun00013;
 70:
            zuuluu = _closure1_slot10;
            michal = entity.id;
            michal = zuuluu.bind(tangon)(michal);
            _fun00014_ip = 114; continue _fun00013;
 86:
            zuuluu = _closure1_slot7;
            entity = entity.local_id;
            michal = new Array(1);
            michal[0] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
 114:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['markNotificationCenterItemAcked'] = golfie;
    zuuluu['markNotificationCenterLocalItemsAcked'] = oscard;
    zuuluu['markNotificationCenterRemoteItemAcked'] = report;
    zuuluu['markNotificationCenterMentionAcked'] = tangon;
    tangon = function() { // Original name: bulkMarkNotificationCenterItemsAcked
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['bulkMarkNotificationCenterItemsAcked'] = tangon;
    michal = function() { // Original name: deleteNotificationCenterItem
        entity = undefined;
        tangon = _closure1_slot12;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['deleteNotificationCenterItem'] = michal;
    return entity;
})();
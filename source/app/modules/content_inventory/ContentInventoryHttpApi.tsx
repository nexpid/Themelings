// app/modules/content_inventory/ContentInventoryHttpApi.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    report = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = report;
    var _closure1_slot2 = verify;
    entity = function() { // Original name: _postTrackToContentInventory
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun127685: for(var _fun127685_ip = 0; ; ) switch(_fun127685_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun127685_ip = 180; continue _fun127685 }
 10:
                    options = argFoo;
                    golf = argBar;
 16: // try_start_0
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 3;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = tango.bind(zulu)(mike);
                    report = mike.HTTP;
                    tango = report.post;
                    mike = {};
                    oscar = _closure1_slot5;
                    oscar = oscar.MY_SPOTIFY_CONTENT_INVENTORY;
                    mike['url'] = oscar;
                    oscar = {};
                    oscar['connection_id'] = options;
                    options = golf;
                    golf = new Array(1);
                    golf[0] = options;
                    oscar['tracks'] = golf;
                    mike['body'] = oscar;
                    oscar = false;
                    mike['rejectWithError'] = oscar;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=110);
 108:
                    return mike;
 110:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun127685_ip = 119; continue _fun127685 }
 116: // try_end0
                    return zulu;
 119:
                    return mike;
 122: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 4;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = report.bind(mike)(zulu);
                    mike = mike.APIError;
                    zulu = mike.prototype;
                    zulu = Object.create(zulu, {constructor: {value: mike}});
                    offset = zulu;
                    verify = tango;
                    mike = new offset[mike](verify, options);
                    mike = mike instanceof Object ? mike : zulu;
                    throw mike;
 180:
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
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, tango);
    entity = 0;
    tango = verify[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = verify[tango];
    tango = options.bind(entity)(tango);
    tango = tango.ContentInventoryFeedKey;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = verify[tango];
    tango = options.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot5 = tango;
    tango = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun127688: for(var _fun127688_ip = 0; ; ) switch(_fun127688_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun127688_ip = 313; continue _fun127688 }
 13:
                    verify = mike.token;
                    romeo = mike.feedId;
                    offset = mike.feature;
                    oscar = undefined;
                    tango = undefined;
                    report = undefined;
                    SaveGenerator(address=41);
 39:
                    return oscar;
 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun127688_ip = 310; continue _fun127688 }
 50: // try_start_0
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 3;
                    zulu = options[zulu];
                    zulu = golf.bind(oscar)(zulu);
                    options = zulu.HTTP;
                    golf = options.get;
                    zulu = {};
                    backup = _closure1_slot5;
                    foxtrot = backup.MY_CONTENT_INVENTORY;
                    verify = foxtrot.bind(backup)(verify);
                    zulu['url'] = verify;
                    verify = {};
                    yankee = _closure1_slot4;
                    yankee = yankee.GAME_PROFILE_FEED;
                    yankee = romeo === yankee;
                    verify['for_game_profile'] = yankee;
                    verify['feature'] = offset;
                    zulu['query'] = verify;
                    verify = false;
                    zulu['rejectWithError'] = verify;
                    zulu = golf.bind(options)(zulu);
                    SaveGenerator(address=151);
 149:
                    return zulu;
 151:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golf) { _fun127688_ip = 251; continue _fun127688 }
 157:
                    golf = zulu.body;
                    tango = golf;
                    options = golf.wait_ms_until_next_fetch;
                    report = options;
                    golf = null;
                    if(!(golf != options)) { _fun127688_ip = 248; continue _fun127688 }
 182:
                    golf = global;
                    options = golf.Date;
                    verify = golf.Date;
                    golf = verify.now;
                    golf = golf.bind(verify)();
                    kilo = golf + report;
                    golf = options.prototype;
                    golf = Object.create(golf, {constructor: {value: options}});
                    sizing = golf;
                    report = new sizing[options](kilo, backup);
                    options = report instanceof Object ? report : golf;
                    golf = tango;
                    report = options.toISOString;
                    report = report.bind(options)();
                    golf['expired_at'] = report;
 248: // try_end0
                    return tango;
 251:
                    return zulu;
 254: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 4;
                    zulu = golf[zulu];
                    zulu = tango.bind(oscar)(zulu);
                    zulu = zulu.APIError;
                    tango = zulu.prototype;
                    tango = Object.create(tango, {constructor: {value: zulu}});
                    sizing = tango;
                    kilo = report;
                    zulu = new sizing[zulu](kilo, backup);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 310:
                    return mike;
 313:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    oscar = tango.bind(entity)();
    tango = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun127692: for(var _fun127692_ip = 0; ; ) switch(_fun127692_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun127692_ip = 305; continue _fun127692 }
 10:
                    verify = argFoo;
                    options = argBar;
 16: // try_start_0
                    zulu = _closure1_slot1;
                    report = _closure1_slot2;
                    golf = 5;
                    mike = report[golf];
                    oscar = undefined;
                    offset = zulu.bind(oscar)(mike);
                    zulu = offset.dispatch;
                    mike = {};
                    yankee = 'CONTENT_INVENTORY_FETCH_OUTBOX_START';
                    mike['type'] = yankee;
                    romeo = verify;
                    mike['userId'] = romeo;
                    mike = zulu.bind(offset)(mike);
                    zulu = _closure1_slot0;
                    mike = 3;
                    mike = report[mike];
                    mike = zulu.bind(oscar)(mike);
                    report = mike.HTTP;
                    zulu = report.get;
                    mike = {};
                    yankee = _closure1_slot5;
                    offset = yankee.CONTENT_INVENTORY_OUTBOX;
                    offset = offset.bind(yankee)(romeo);
                    mike['url'] = offset;
                    mike['signal'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=137);
 135:
                    return mike;
 137:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun127692_ip = 202; continue _fun127692 }
 143:
                    zulu = mike.body;
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[golf];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS';
                    tango['type'] = golf;
                    tango['outbox'] = zulu;
                    golf = verify;
                    tango['userId'] = golf;
                    tango = report.bind(oscar)(tango);
 199: // try_end0
                    return zulu;
 202:
                    return mike;
 205: // catch_target0
                    CatchBlockStart(arg_register=3);
                    golf = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 5;
                    zulu = oscar[zulu];
                    report = undefined;
                    options = golf.bind(report)(zulu);
                    golf = options.dispatch;
                    zulu = {};
                    offset = 'CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE';
                    zulu['type'] = offset;
                    zulu['userId'] = verify;
                    zulu = golf.bind(options)(zulu);
                    zulu = _closure1_slot0;
                    mike = 4;
                    mike = oscar[mike];
                    mike = zulu.bind(report)(mike);
                    mike = mike.APIError;
                    zulu = mike.prototype;
                    zulu = Object.create(zulu, {constructor: {value: mike}});
                    backup = zulu;
                    foxtrot = tango;
                    mike = new backup[mike](foxtrot, romeo);
                    mike = mike instanceof Object ? mike : zulu;
                    throw mike;
 305:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    report = tango.bind(entity)();
    tango = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun127696: for(var _fun127696_ip = 0; ; ) switch(_fun127696_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun127696_ip = 376; continue _fun127696 }
 10:
                    yankee = argFoo;
                    romeo = argBar;
                    report = argBaz;
                    mike = undefined;
                    zulu = undefined;
                    oscar = undefined;
 25: // try_start_0
                    verify = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    offset = 5;
                    tango = foxtrot[offset];
                    backup = verify.bind(mike)(tango);
                    verify = backup.dispatch;
                    tango = {};
                    kilo = 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START';
                    tango['type'] = kilo;
                    tango = verify.bind(backup)(tango);
                    verify = _closure1_slot0;
                    tango = 3;
                    tango = foxtrot[tango];
                    tango = verify.bind(mike)(tango);
                    foxtrot = tango.HTTP;
                    verify = foxtrot.del;
                    tango = {};
                    sizing = _closure1_slot5;
                    kilo = sizing.DELETE_MY_CONTENT_INVENTORY_OUTBOX_ENTRY_HISTORY;
                    backup = yankee;
                    backup = backup.id;
                    backup = kilo.bind(sizing)(backup);
                    tango['url'] = backup;
                    backup = false;
                    tango['rejectWithError'] = backup;
                    tango = verify.bind(foxtrot)(tango);
                    SaveGenerator(address=141);
 139:
                    return tango;
 141:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=8);
                    if(verify) { _fun127696_ip = 213; continue _fun127696 }
 147:
                    verify = _closure1_slot1;
                    options = _closure1_slot2;
                    options = options[offset];
                    offset = verify.bind(mike)(options);
                    verify = offset.dispatch;
                    options = {};
                    foxtrot = 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS';
                    options['type'] = foxtrot;
                    options['userId'] = romeo;
                    options['entry'] = yankee;
                    options = verify.bind(offset)(options);
                    verify = report;
                    options = null;
                    if(!(options != verify)) { _fun127696_ip = 208; continue _fun127696 }
 204:
                    report = report.bind(mike)();
 208: // try_end0
                    _fun127696_ip = 373; continue _fun127696;
 213:
                    return tango;
 216: // catch_target0
                    CatchBlockStart(arg_register=3);
                    golf = tango;
                    report = null;
                    options = report == tango;
                    tango = undefined;
                    if(options) { _fun127696_ip = 254; continue _fun127696 }
 232:
                    golf = golf.body;
                    oscar = golf;
                    golf = report == golf;
                    tango = undefined;
                    if(golf) { _fun127696_ip = 254; continue _fun127696 }
 249:
                    tango = oscar.message;
 254:
                    zulu = tango;
                    if(!(report == tango)) { _fun127696_ip = 321; continue _fun127696 }
 261:
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    tango = 6;
                    report = options[tango];
                    report = golf.bind(mike)(report);
                    oscar = report.intl;
                    report = oscar.string;
                    tango = options[tango];
                    tango = golf.bind(mike)(tango);
                    tango = tango.t;
                    tango = tango.FMbL3t;
                    oscar = report.bind(oscar)(tango);
                    _fun127696_ip = 324; continue _fun127696;
 321:
                    oscar = zulu;
 324:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 5;
                    zulu = report[zulu];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE';
                    zulu['type'] = golf;
                    zulu['error'] = oscar;
                    zulu = tango.bind(report)(zulu);
 373:
                    return mike;
 376:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    tango = tango.bind(entity)();
    golf = 7;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/content_inventory/ContentInventoryHttpApi.tsx';
    golf = options.bind(verify)(golf);
    zulu['getMyContentInventory'] = oscar;
    zulu['getContentInventoryOutbox'] = report;
    zulu['deleteContentInventoryEntryHistory'] = tango;
    mike = function() { // Original name: postTrackToContentInventory
        entity = undefined;
        tango = _closure1_slot6;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['postTrackToContentInventory'] = mike;
    return entity;
})();
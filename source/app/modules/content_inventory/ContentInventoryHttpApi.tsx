// app/modules/content_inventory/ContentInventoryHttpApi.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    report = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = report;
    var _closure1_slot2 = verify;
    entity = function() { // Original name: _postTrackToContentInventory
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 180; continue _fun00001 }
 10:
                    option = argFoo;
                    golfie = argBar;
 16: // try_start_0
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 3;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    report = michal.HTTP;
                    tangon = report.post;
                    michal = {};
                    oscard = _closure1_slot5;
                    oscard = oscard.MY_SPOTIFY_CONTENT_INVENTORY;
                    michal['url'] = oscard;
                    oscard = {};
                    oscard['connection_id'] = option;
                    option = golfie;
                    golfie = new Array(1);
                    golfie[0] = option;
                    oscard['tracks'] = golfie;
                    michal['body'] = oscard;
                    oscard = false;
                    michal['rejectWithError'] = oscard;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=110);
 108:
                    return michal;
 110:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 119; continue _fun00001 }
 116: // try_end0
                    return zuuluu;
 119:
                    return michal;
 122: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = report.bind(michal)(zuuluu);
                    michal = michal.APIError;
                    zuuluu = michal.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                    offset = zuuluu;
                    verify = tangon;
                    michal = new offset[michal](verify, option);
                    michal = michal instanceof Object ? michal : zuuluu;
                    throw michal;
 180:
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
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    tangon = verify[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = verify[tangon];
    tangon = option.bind(entity)(tangon);
    tangon = tangon.ContentInventoryFeedKey;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = verify[tangon];
    tangon = option.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot5 = tangon;
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 314; continue _fun00003 }
 13:
                    verify = michal.token;
                    romeon = michal.feedId;
                    offset = michal.feature;
                    oscard = undefined;
                    tangon = undefined;
                    report = undefined;
                    SaveGenerator(address=41);
 39:
                    return oscard;
 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 311; continue _fun00003 }
 50: // try_start_0
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 3;
                    zuuluu = option[zuuluu];
                    zuuluu = golfie.bind(oscard)(zuuluu);
                    option = zuuluu.HTTP;
                    golfie = option.get;
                    zuuluu = {};
                    backup = _closure1_slot5;
                    foxtra = backup.MY_CONTENT_INVENTORY;
                    verify = foxtra.bind(backup)(verify);
                    zuuluu['url'] = verify;
                    verify = {};
                    yankee = _closure1_slot4;
                    yankee = yankee.GAME_PROFILE_FEED;
                    yankee = romeon === yankee;
                    verify['for_game_profile'] = yankee;
                    verify['feature'] = offset;
                    zuuluu['query'] = verify;
                    verify = false;
                    zuuluu['rejectWithError'] = verify;
                    zuuluu = golfie.bind(option)(zuuluu);
                    SaveGenerator(address=152);
 150:
                    return zuuluu;
 152:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00004_ip = 252; continue _fun00003 }
 158:
                    golfie = zuuluu.body;
                    tangon = golfie;
                    option = golfie.wait_ms_until_next_fetch;
                    report = option;
                    golfie = null;
                    if(!(golfie != option)) { _fun00004_ip = 249; continue _fun00003 }
 183:
                    golfie = global;
                    option = golfie.Date;
                    verify = golfie.Date;
                    golfie = verify.now;
                    golfie = golfie.bind(verify)();
                    kiloes = golfie + report;
                    golfie = option.prototype;
                    golfie = Object.create(golfie, {constructor: {value: option}});
                    sizing = golfie;
                    report = new sizing[option](kiloes, backup);
                    option = report instanceof Object ? report : golfie;
                    golfie = tangon;
                    report = option.toISOString;
                    report = report.bind(option)();
                    golfie['expired_at'] = report;
 249: // try_end0
                    return tangon;
 252:
                    return zuuluu;
 255: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = golfie[zuuluu];
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.APIError;
                    tangon = zuuluu.prototype;
                    tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                    sizing = tangon;
                    kiloes = report;
                    zuuluu = new sizing[zuuluu](kiloes, backup);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 311:
                    return michal;
 314:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    oscard = tangon.bind(entity)();
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 305; continue _fun00005 }
 10:
                    verify = argFoo;
                    option = argBar;
 16: // try_start_0
                    zuuluu = _closure1_slot1;
                    report = _closure1_slot2;
                    golfie = 5;
                    michal = report[golfie];
                    oscard = undefined;
                    offset = zuuluu.bind(oscard)(michal);
                    zuuluu = offset.dispatch;
                    michal = {};
                    yankee = 'CONTENT_INVENTORY_FETCH_OUTBOX_START';
                    michal['type'] = yankee;
                    romeon = verify;
                    michal['userId'] = romeon;
                    michal = zuuluu.bind(offset)(michal);
                    zuuluu = _closure1_slot0;
                    michal = 3;
                    michal = report[michal];
                    michal = zuuluu.bind(oscard)(michal);
                    report = michal.HTTP;
                    zuuluu = report.get;
                    michal = {};
                    yankee = _closure1_slot5;
                    offset = yankee.CONTENT_INVENTORY_OUTBOX;
                    offset = offset.bind(yankee)(romeon);
                    michal['url'] = offset;
                    michal['signal'] = option;
                    option = false;
                    michal['rejectWithError'] = option;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=137);
 135:
                    return michal;
 137:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 202; continue _fun00005 }
 143:
                    zuuluu = michal.body;
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[golfie];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS';
                    tangon['type'] = golfie;
                    tangon['outbox'] = zuuluu;
                    golfie = verify;
                    tangon['userId'] = golfie;
                    tangon = report.bind(oscard)(tangon);
 199: // try_end0
                    return zuuluu;
 202:
                    return michal;
 205: // catch_target0
                    CatchBlockStart(arg_register=3);
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = oscard[zuuluu];
                    report = undefined;
                    option = golfie.bind(report)(zuuluu);
                    golfie = option.dispatch;
                    zuuluu = {};
                    offset = 'CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE';
                    zuuluu['type'] = offset;
                    zuuluu['userId'] = verify;
                    zuuluu = golfie.bind(option)(zuuluu);
                    zuuluu = _closure1_slot0;
                    michal = 4;
                    michal = oscard[michal];
                    michal = zuuluu.bind(report)(michal);
                    michal = michal.APIError;
                    zuuluu = michal.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                    backup = zuuluu;
                    foxtra = tangon;
                    michal = new backup[michal](foxtra, romeon);
                    michal = michal instanceof Object ? michal : zuuluu;
                    throw michal;
 305:
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    report = tangon.bind(entity)();
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 378; continue _fun00007 }
 10:
                    yankee = argFoo;
                    romeon = argBar;
                    report = argBaz;
                    michal = undefined;
                    zuuluu = undefined;
                    oscard = undefined;
 25: // try_start_0
                    verify = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    offset = 5;
                    tangon = foxtra[offset];
                    backup = verify.bind(michal)(tangon);
                    verify = backup.dispatch;
                    tangon = {};
                    kiloes = 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START';
                    tangon['type'] = kiloes;
                    tangon = verify.bind(backup)(tangon);
                    verify = _closure1_slot0;
                    tangon = 3;
                    tangon = foxtra[tangon];
                    tangon = verify.bind(michal)(tangon);
                    foxtra = tangon.HTTP;
                    verify = foxtra.del;
                    tangon = {};
                    sizing = _closure1_slot5;
                    kiloes = sizing.DELETE_MY_CONTENT_INVENTORY_OUTBOX_ENTRY_HISTORY;
                    backup = yankee;
                    backup = backup.id;
                    backup = kiloes.bind(sizing)(backup);
                    tangon['url'] = backup;
                    backup = false;
                    tangon['rejectWithError'] = backup;
                    tangon = verify.bind(foxtra)(tangon);
                    SaveGenerator(address=141);
 139:
                    return tangon;
 141:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=8);
                    if(verify) { _fun00008_ip = 213; continue _fun00007 }
 147:
                    verify = _closure1_slot1;
                    option = _closure1_slot2;
                    option = option[offset];
                    offset = verify.bind(michal)(option);
                    verify = offset.dispatch;
                    option = {};
                    foxtra = 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS';
                    option['type'] = foxtra;
                    option['userId'] = romeon;
                    option['entry'] = yankee;
                    option = verify.bind(offset)(option);
                    verify = report;
                    option = null;
                    if(!(option != verify)) { _fun00008_ip = 208; continue _fun00007 }
 204:
                    report = report.bind(michal)();
 208: // try_end0
                    _fun00008_ip = 375; continue _fun00007;
 213:
                    return tangon;
 216: // catch_target0
                    CatchBlockStart(arg_register=3);
                    golfie = tangon;
                    report = null;
                    option = report == tangon;
                    tangon = undefined;
                    if(option) { _fun00008_ip = 254; continue _fun00007 }
 232:
                    golfie = golfie.body;
                    oscard = golfie;
                    golfie = report == golfie;
                    tangon = undefined;
                    if(golfie) { _fun00008_ip = 254; continue _fun00007 }
 249:
                    tangon = oscard.message;
 254:
                    zuuluu = tangon;
                    if(!(report == tangon)) { _fun00008_ip = 323; continue _fun00007 }
 261:
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    tangon = 6;
                    report = option[tangon];
                    report = golfie.bind(michal)(report);
                    oscard = report.intl;
                    report = oscard.string;
                    tangon = option[tangon];
                    tangon = golfie.bind(michal)(tangon);
                    tangon = tangon.t;
                    tangon = tangon.FMbL3t;
                    oscard = report.bind(oscard)(tangon);
                    _fun00008_ip = 326; continue _fun00007;
 323:
                    oscard = zuuluu;
 326:
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE';
                    zuuluu['type'] = golfie;
                    zuuluu['error'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 375:
                    return michal;
 378:
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    tangon = tangon.bind(entity)();
    golfie = 7;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/content_inventory/ContentInventoryHttpApi.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['getMyContentInventory'] = oscard;
    zuuluu['getContentInventoryOutbox'] = report;
    zuuluu['deleteContentInventoryEntryHistory'] = tangon;
    michal = function() { // Original name: postTrackToContentInventory
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['postTrackToContentInventory'] = michal;
    return entity;
})();
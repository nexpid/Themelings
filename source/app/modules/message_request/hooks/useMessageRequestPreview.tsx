// app/modules/message_request/hooks/useMessageRequestPreview.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot12;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot12;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: loadMessageRequestData
        entity = undefined;
        tangon = _closure1_slot14;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _loadMessageRequestData
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 139; continue _fun00007 }
 10: // try_start_0
                    report = _closure1_slot1;
                    michal = _closure1_slot2;
                    oscard = 6;
                    zuuluu = michal[oscard];
                    michal = undefined;
                    golfie = report.bind(michal)(zuuluu);
                    report = golfie.isEmpty;
                    zuuluu = _closure1_slot9;
                    zuuluu = report.bind(golfie)(zuuluu);
                    if(zuuluu) { _fun00008_ip = 117; continue _fun00007 }
 53:
                    zuuluu = _closure1_slot15;
                    zuuluu = zuuluu.bind(michal)();
                    SaveGenerator(address=65);
 63:
                    return zuuluu;
 65:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 108; continue _fun00007 }
 71:
                    golfie = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[oscard];
                    option = golfie.bind(michal)(report);
                    golfie = option.isEmpty;
                    report = _closure1_slot9;
                    report = golfie.bind(option)(report);
                    if(report) { _fun00008_ip = 117; continue _fun00007 }
 106:
                    _fun00008_ip = 53; continue _fun00007;
 108: // try_end0
                    report = null;
                    _closure1_slot10 = report;
                    return zuuluu;
 117:
                    zuuluu = null;
                    _closure1_slot10 = zuuluu;
                    return michal;
 126: // catch_target0
                    CatchBlockStart(arg_register=1);
                    zuuluu = null;
                    _closure1_slot10 = zuuluu;
                    throw michal;
 139:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot14 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: loadMessageRequestDataHelper
        entity = undefined;
        tangon = _closure1_slot16;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _loadMessageRequestDataHelper
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 474; continue _fun00009 }
 10:
                    report = undefined;
                    zuuluu = undefined;
                    oscard = undefined;
                    golfie = undefined;
                    michal = global;
                    verify = michal.Array;
                    option = verify.from;
                    michal = _closure1_slot9;
                    offset = option.bind(verify)(michal);
                    verify = offset.slice;
                    option = _closure1_slot8;
                    michal = 0;
                    zuuluu = verify.bind(offset)(michal, option);
 60: // try_start_0 // try_start_1
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    michal = 7;
                    michal = verify[michal];
                    michal = option.bind(report)(michal);
                    verify = michal.HTTP;
                    option = verify.get;
                    michal = {};
                    offset = _closure1_slot7;
                    offset = offset.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA;
                    michal['url'] = offset;
                    offset = {};
                    yankee = zuuluu;
                    offset['channel_ids'] = yankee;
                    michal['query'] = offset;
                    offset = true;
                    michal['rejectWithError'] = offset;
                    michal = option.bind(verify)(michal);
                    SaveGenerator(address=136);
 134:
                    return michal;
 136:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(option) { _fun00010_ip = 205; continue _fun00009 }
 142:
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    option = 8;
                    option = offset[option];
                    offset = verify.bind(report)(option);
                    verify = offset.dispatch;
                    option = {};
                    yankee = 'LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS';
                    option['type'] = yankee;
                    yankee = zuuluu;
                    option['requestedChannelIds'] = yankee;
                    yankee = michal.body;
                    option['supplementalData'] = yankee;
                    option = verify.bind(offset)(option);
 200: // try_end0
                    _fun00010_ip = 330; continue _fun00009;
 205: // try_end1
                    verify = _closure1_slot11;
                    option = zuuluu;
                    option = verify.bind(report)(option);
                    golfie = option;
                    option = option.bind(report)();
                    oscard = option;
                    option = option.done;
                    if(option) { _fun00010_ip = 275; continue _fun00009 }
 235:
                    option = oscard;
                    offset = option.value;
                    verify = _closure1_slot9;
                    option = verify.delete;
                    option = option.bind(verify)(offset);
                    option = golfie;
                    option = option.bind(report)();
                    oscard = option;
                    option = option.done;
                    if(!option) { _fun00010_ip = 235; continue _fun00009 }
 275:
                    return michal;
 278: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=1);
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    michal = 8;
                    michal = verify[michal];
                    verify = option.bind(report)(michal);
                    option = verify.dispatch;
                    michal = {};
                    offset = 'LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR';
                    michal['type'] = offset;
                    offset = zuuluu;
                    michal['requestedChannelIds'] = offset;
                    michal = option.bind(verify)(michal);
 330: // try_end2
                    option = _closure1_slot11;
                    michal = zuuluu;
                    michal = option.bind(report)(michal);
                    golfie = michal;
                    michal = michal.bind(report)();
                    oscard = michal;
                    michal = michal.done;
                    if(michal) { _fun00010_ip = 400; continue _fun00009 }
 360:
                    michal = oscard;
                    verify = michal.value;
                    option = _closure1_slot9;
                    michal = option.delete;
                    michal = michal.bind(option)(verify);
                    michal = golfie;
                    michal = michal.bind(report)();
                    oscard = michal;
                    michal = michal.done;
                    if(!michal) { _fun00010_ip = 360; continue _fun00009 }
 400:
                    return report;
 403: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    option = _closure1_slot11;
                    zuuluu = option.bind(report)(zuuluu);
                    golfie = zuuluu;
                    zuuluu = zuuluu.bind(report)();
                    oscard = zuuluu;
                    zuuluu = zuuluu.done;
                    if(zuuluu) { _fun00010_ip = 472; continue _fun00009 }
 432:
                    zuuluu = oscard;
                    verify = zuuluu.value;
                    option = _closure1_slot9;
                    zuuluu = option.delete;
                    zuuluu = zuuluu.bind(option)(verify);
                    zuuluu = golfie;
                    zuuluu = zuuluu.bind(report)();
                    oscard = zuuluu;
                    zuuluu = zuuluu.done;
                    if(!zuuluu) { _fun00010_ip = 432; continue _fun00009 }
 472:
                    throw michal;
 474:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot16 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot16 = entity;
    tangon = global;
    offset = tangon.Object;
    verify = offset.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = option.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 3;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot6 = golfie;
    golfie = 4;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.Endpoints;
    var _closure1_slot7 = golfie;
    golfie = 25;
    var _closure1_slot8 = golfie;
    tangon = tangon.Set;
    golfie = tangon.prototype;
    golfie = Object.create(golfie, {constructor: {value: tangon}});
    backup = golfie;
    tangon = new backup[tangon](foxtra);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot9 = tangon;
    tangon = null;
    var _closure1_slot10 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/message_request/hooks/useMessageRequestPreview.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useMessageRequestPreview
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            golfie = michal.id;
            var _closure2_slot0 = golfie;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = 5;
            michal = yankee[verify];
            option = undefined;
            foxtra = offset.bind(option)(michal);
            romeon = foxtra.useStateFromStoresObject;
            oscard = _closure1_slot6;
            tangon = new Array(3);
            tangon[0] = oscard;
            michal = _closure1_slot4;
            tangon[1] = michal;
            michal = _closure1_slot5;
            tangon[2] = michal;
            zuuluu = new Array(1);
            zuuluu[0] = golfie;
            michal = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure1_slot5;
                    entity = zuuluu.lastMessageId;
                    report = _closure2_slot0;
                    oscard = entity.bind(zuuluu)(report);
                    zuuluu = _closure1_slot6;
                    entity = zuuluu.getMessageRequestPreview;
                    entity = entity.bind(zuuluu)(report);
                    report = entity.message;
                    zuuluu = null;
                    if(!(zuuluu == report)) { _fun00014_ip = 81; continue _fun00013 }
 53:
                    if(!(zuuluu != oscard)) { _fun00014_ip = 81; continue _fun00013 }
 57:
                    report = _closure1_slot4;
                    tangon = report.getMessage;
                    michal = _closure2_slot0;
                    michal = tangon.bind(report)(michal, oscard);
                    if(!(zuuluu == michal)) { _fun00014_ip = 83; continue _fun00013 }
 81:
                    return entity;
 83:
                    entity = {'loaded': true, 'error': false};
                    entity['message'] = michal;
                    return entity;
                }
            };
            zuuluu = romeon.bind(foxtra)(tangon, michal, zuuluu);
            tangon = zuuluu.loaded;
            michal = zuuluu.message;
            zuuluu = zuuluu.error;
            verify = yankee[verify];
            yankee = offset.bind(option)(verify);
            offset = yankee.useStateFromStores;
            verify = new Array(1);
            verify[0] = oscard;
            oscard = new Array(1);
            oscard[0] = golfie;
            entity = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.shouldLoadMessageRequestPreview;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = offset.bind(yankee)(verify, entity, oscard);
            entity = !tangon;
            if(!entity) { _fun00012_ip = 167; continue _fun00011 }
 161:
            verify = null;
            entity = verify == michal;
 167:
            if(!entity) { _fun00012_ip = 173; continue _fun00011 }
 170:
            entity = oscard;
 173:
            if(!entity) { _fun00012_ip = 224; continue _fun00011 }
 176:
            oscard = _closure1_slot9;
            entity = oscard.add;
            entity = entity.bind(oscard)(golfie);
            oscard = _closure1_slot10;
            entity = null;
            if(!(entity == oscard)) { _fun00012_ip = 224; continue _fun00011 }
 200:
            entity = global;
            golfie = entity.setTimeout;
            oscard = _closure1_slot13;
            entity = 0;
            entity = golfie.bind(option)(oscard, entity);
            _closure1_slot10 = entity;
 224:
            entity = {};
            entity['loaded'] = tangon;
            entity['error'] = zuuluu;
            entity['message'] = michal;
            return entity;
        }
    };
    zuuluu['useMessageRequestPreview'] = michal;
    return entity;
})();
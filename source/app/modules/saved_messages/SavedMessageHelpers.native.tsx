// app/modules/saved_messages/SavedMessageHelpers.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _addOrUpdateSavedMessage
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 504; continue _fun00001 }
 13:
                    option = report.displayToast;
                    golfie = null;
                    tangon = Object.create(golfie);
                    michal = 0;
                    tangon['displayToast'] = michal;
                    sizing = {};
                    kiloes = report;
                    backup = tangon;
                    oscard = copyDataProperties(sizing, kiloes, backup);
                    tangon = undefined;
                    SaveGenerator(address=49);
 47:
                    return tangon;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 501; continue _fun00001 }
 58:
                    yankee = _closure1_slot4;
                    offset = yankee.getSavedMessage;
                    verify = oscard.channelId;
                    zuuluu = oscard.messageId;
                    zuuluu = offset.bind(yankee)(verify, zuuluu);
                    if(!(golfie == zuuluu)) { _fun00002_ip = 176; continue _fun00001 }
 91:
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = offset[zuuluu];
                    zuuluu = verify.bind(tangon)(zuuluu);
                    zuuluu = zuuluu.bind(tangon)();
                    if(zuuluu) { _fun00002_ip = 176; continue _fun00001 }
 118:
                    verify = _closure1_slot1;
                    yankee = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = yankee[zuuluu];
                    verify = verify.bind(tangon)(zuuluu);
                    offset = _closure1_slot0;
                    zuuluu = 6;
                    zuuluu = yankee[zuuluu];
                    zuuluu = offset.bind(tangon)(zuuluu);
                    zuuluu = zuuluu.EntitlementFeatureNames;
                    zuuluu = zuuluu.SAVED_MESSAGES;
                    zuuluu = verify.bind(tangon)(zuuluu);
                    _fun00002_ip = 495; continue _fun00001;
 176:
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = offset[zuuluu];
                    verify = verify.bind(tangon)(zuuluu);
                    zuuluu = verify.upsertSavedMessage;
                    offset = zuuluu.bind(verify)(oscard);
                    verify = offset.catch;
                    zuuluu = function(argFoo) {
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            oscard = argFoo;
                            entity = null;
                            michal = entity == oscard;
                            verify = undefined;
                            zuuluu = undefined;
                            if(michal) { _fun00004_ip = 35; continue _fun00003 }
 16:
                            michal = oscard.body;
                            tangon = entity == michal;
                            zuuluu = undefined;
                            if(tangon) { _fun00004_ip = 35; continue _fun00003 }
 30:
                            zuuluu = michal.code;
 35:
                            michal = _closure1_slot5;
                            michal = michal.TOO_MANY_SAVED_MESSAGES;
                            if(!(zuuluu !== michal)) { _fun00004_ip = 221; continue _fun00003 }
 55:
                            zuuluu = _closure1_slot1;
                            option = _closure1_slot2;
                            michal = 13;
                            michal = option[michal];
                            tangon = zuuluu.bind(verify)(michal);
                            zuuluu = tangon.open;
                            michal = {};
                            report = 'SAVED_MESSAGE_CREATE_ERROR';
                            michal['key'] = report;
                            golfie = _closure1_slot0;
                            report = 14;
                            report = option[report];
                            report = golfie.bind(verify)(report);
                            report = report.CircleWarningIcon;
                            michal['IconComponent'] = report;
                            golfie = entity == oscard;
                            report = undefined;
                            if(golfie) { _fun00004_ip = 148; continue _fun00003 }
 129:
                            oscard = oscard.body;
                            golfie = entity == oscard;
                            report = undefined;
                            if(golfie) { _fun00004_ip = 148; continue _fun00003 }
 143:
                            report = oscard.message;
 148:
                            if(!(entity == report)) { _fun00004_ip = 207; continue _fun00003 }
 152:
                            offset = _closure1_slot0;
                            yankee = _closure1_slot2;
                            oscard = 9;
                            golfie = yankee[oscard];
                            golfie = offset.bind(verify)(golfie);
                            option = golfie.intl;
                            golfie = option.string;
                            oscard = yankee[oscard];
                            oscard = offset.bind(verify)(oscard);
                            oscard = oscard.t;
                            oscard = oscard.R0RpRU;
                            report = golfie.bind(option)(oscard);
 207:
                            michal['content'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            _fun00004_ip = 486; continue _fun00003;
 221:
                            zuuluu = _closure1_slot1;
                            offset = _closure1_slot2;
                            michal = 8;
                            michal = offset[michal];
                            tangon = zuuluu.bind(verify)(michal);
                            zuuluu = tangon.show;
                            michal = {};
                            option = _closure1_slot0;
                            report = 9;
                            oscard = offset[report];
                            oscard = option.bind(verify)(oscard);
                            yankee = oscard.intl;
                            golfie = yankee.string;
                            oscard = offset[report];
                            oscard = option.bind(verify)(oscard);
                            oscard = oscard.t;
                            oscard = oscard.mlbiZW;
                            oscard = golfie.bind(yankee)(oscard);
                            michal['title'] = oscard;
                            oscard = offset[report];
                            oscard = option.bind(verify)(oscard);
                            romeon = oscard.intl;
                            yankee = romeon.formatToPlainString;
                            oscard = offset[report];
                            oscard = option.bind(verify)(oscard);
                            oscard = oscard.t;
                            golfie = oscard.1zVbEB;
                            oscard = {};
                            foxtra = _closure1_slot6;
                            oscard['max'] = foxtra;
                            oscard = yankee.bind(romeon)(golfie, oscard);
                            michal['body'] = oscard;
                            oscard = offset[report];
                            oscard = option.bind(verify)(oscard);
                            yankee = oscard.intl;
                            golfie = yankee.string;
                            oscard = offset[report];
                            oscard = option.bind(verify)(oscard);
                            oscard = oscard.t;
                            oscard = oscard.BddRzc;
                            oscard = golfie.bind(yankee)(oscard);
                            michal['confirmText'] = oscard;
                            oscard = offset[report];
                            oscard = option.bind(verify)(oscard);
                            golfie = oscard.intl;
                            oscard = golfie.string;
                            report = offset[report];
                            report = option.bind(verify)(report);
                            report = report.t;
                            report = report.ZGbTc3;
                            report = oscard.bind(golfie)(report);
                            michal['cancelText'] = report;
                            report = function() { // Original name: onCancel
                                zuuluu = _closure1_slot1;
                                entity = _closure1_slot2;
                                michal = 10;
                                michal = entity[michal];
                                oscard = undefined;
                                zuuluu = zuuluu.bind(oscard)(michal);
                                michal = zuuluu.pushLazy;
                                report = _closure1_slot0;
                                tangon = 12;
                                tangon = entity[tangon];
                                report = report.bind(oscard)(tangon);
                                tangon = 11;
                                tangon = entity[tangon];
                                entity = entity.paths;
                                entity = report.bind(oscard)(tangon, entity);
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            michal['onCancel'] = report;
                            michal = zuuluu.bind(tangon)(michal);
 486:
                            return entity;
                        }
                    };
                    zuuluu = verify.bind(offset)(zuuluu);
                    SaveGenerator(address=231);
 229:
                    return zuuluu;
 231:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(verify) { _fun00002_ip = 498; continue _fun00001 }
 240:
                    if(!(golfie != zuuluu)) { _fun00002_ip = 495; continue _fun00001 }
 247:
                    if(!option) { _fun00002_ip = 495; continue _fun00001 }
 253:
                    option = oscard.dueAt;
                    if(!(golfie == option)) { _fun00002_ip = 322; continue _fun00001 }
 263:
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    option = 9;
                    verify = romeon[option];
                    verify = yankee.bind(tangon)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    option = romeon[option];
                    option = yankee.bind(tangon)(option);
                    option = option.t;
                    option = option.DQjes7;
                    option = verify.bind(offset)(option);
                    _fun00002_ip = 379; continue _fun00001;
 322:
                    romeon = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    verify = 9;
                    offset = foxtra[verify];
                    offset = romeon.bind(tangon)(offset);
                    yankee = offset.intl;
                    offset = yankee.string;
                    verify = foxtra[verify];
                    verify = romeon.bind(tangon)(verify);
                    verify = verify.t;
                    verify = verify.i1IsOz;
                    option = offset.bind(yankee)(verify);
 379:
                    oscard = oscard.dueAt;
                    if(!(golfie == oscard)) { _fun00002_ip = 417; continue _fun00001 }
 389:
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    oscard = 16;
                    oscard = verify[oscard];
                    oscard = golfie.bind(tangon)(oscard);
                    verify = oscard.BookmarkIcon;
                    _fun00002_ip = 443; continue _fun00001;
 417:
                    golfie = _closure1_slot0;
                    offset = _closure1_slot2;
                    oscard = 15;
                    oscard = offset[oscard];
                    oscard = golfie.bind(tangon)(oscard);
                    verify = oscard.ClockIcon;
 443:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 13;
                    report = golfie[report];
                    golfie = oscard.bind(tangon)(report);
                    oscard = golfie.open;
                    report = {};
                    offset = 'SAVED_MESSAGE_CREATE_SUCCESS';
                    report['key'] = offset;
                    report['IconComponent'] = verify;
                    report['content'] = option;
                    report = oscard.bind(golfie)(report);
 495:
                    return tangon;
 498:
                    return zuuluu;
 501:
                    return michal;
 504:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot7 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _removeSavedMessage
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 389; continue _fun00005 }
 13:
                    option = report.displayToast;
                    golfie = null;
                    tangon = Object.create(golfie);
                    michal = 0;
                    tangon['displayToast'] = michal;
                    sizing = {};
                    kiloes = report;
                    backup = tangon;
                    oscard = copyDataProperties(sizing, kiloes, backup);
                    tangon = undefined;
                    SaveGenerator(address=49);
 47:
                    return tangon;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 386; continue _fun00005 }
 58:
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = offset[zuuluu];
                    verify = verify.bind(tangon)(zuuluu);
                    zuuluu = verify.deleteSavedMessage;
                    offset = zuuluu.bind(verify)(oscard);
                    verify = offset.catch;
                    zuuluu = function(argFoo) {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            golfie = argFoo;
                            michal = _closure1_slot1;
                            option = _closure1_slot2;
                            entity = 13;
                            entity = option[entity];
                            offset = undefined;
                            tangon = michal.bind(offset)(entity);
                            zuuluu = tangon.open;
                            michal = {};
                            entity = 'SAVED_MESSAGE_REMOVE_ERROR';
                            michal['key'] = entity;
                            report = _closure1_slot0;
                            entity = 14;
                            entity = option[entity];
                            entity = report.bind(offset)(entity);
                            entity = entity.CircleWarningIcon;
                            michal['IconComponent'] = entity;
                            entity = null;
                            option = entity == golfie;
                            report = undefined;
                            if(option) { _fun00008_ip = 103; continue _fun00007 }
 84:
                            golfie = golfie.body;
                            option = entity == golfie;
                            report = undefined;
                            if(option) { _fun00008_ip = 103; continue _fun00007 }
 98:
                            report = golfie.message;
 103:
                            if(!(entity == report)) { _fun00008_ip = 162; continue _fun00007 }
 107:
                            verify = _closure1_slot0;
                            yankee = _closure1_slot2;
                            oscard = 9;
                            golfie = yankee[oscard];
                            golfie = verify.bind(offset)(golfie);
                            option = golfie.intl;
                            golfie = option.string;
                            oscard = yankee[oscard];
                            oscard = verify.bind(offset)(oscard);
                            oscard = oscard.t;
                            oscard = oscard.R0RpRU;
                            report = golfie.bind(option)(oscard);
 162:
                            michal['content'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
                    };
                    zuuluu = verify.bind(offset)(zuuluu);
                    SaveGenerator(address=116);
 114:
                    return zuuluu;
 116:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(verify) { _fun00006_ip = 383; continue _fun00005 }
 125:
                    if(!(golfie != zuuluu)) { _fun00006_ip = 380; continue _fun00005 }
 132:
                    if(!option) { _fun00006_ip = 380; continue _fun00005 }
 138:
                    option = oscard.dueAt;
                    if(!(golfie == option)) { _fun00006_ip = 207; continue _fun00005 }
 148:
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    option = 9;
                    verify = romeon[option];
                    verify = yankee.bind(tangon)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    option = romeon[option];
                    option = yankee.bind(tangon)(option);
                    option = option.t;
                    option = option.5KOMiY;
                    option = verify.bind(offset)(option);
                    _fun00006_ip = 264; continue _fun00005;
 207:
                    romeon = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    verify = 9;
                    offset = foxtra[verify];
                    offset = romeon.bind(tangon)(offset);
                    yankee = offset.intl;
                    offset = yankee.string;
                    verify = foxtra[verify];
                    verify = romeon.bind(tangon)(verify);
                    verify = verify.t;
                    verify = verify.D0tS09;
                    option = offset.bind(yankee)(verify);
 264:
                    oscard = oscard.dueAt;
                    if(!(golfie == oscard)) { _fun00006_ip = 302; continue _fun00005 }
 274:
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    oscard = 16;
                    oscard = verify[oscard];
                    oscard = golfie.bind(tangon)(oscard);
                    verify = oscard.BookmarkIcon;
                    _fun00006_ip = 328; continue _fun00005;
 302:
                    golfie = _closure1_slot0;
                    offset = _closure1_slot2;
                    oscard = 15;
                    oscard = offset[oscard];
                    oscard = golfie.bind(tangon)(oscard);
                    verify = oscard.ClockIcon;
 328:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 13;
                    report = golfie[report];
                    golfie = oscard.bind(tangon)(report);
                    oscard = golfie.open;
                    report = {};
                    offset = 'SAVED_MESSAGE_REMOVE_SUCCESS';
                    report['key'] = offset;
                    report['IconComponent'] = verify;
                    report['content'] = option;
                    report = oscard.bind(golfie)(report);
 380:
                    return tangon;
 383:
                    return zuuluu;
 386:
                    return michal;
 389:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot8 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AbortCodes;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SAVED_MESSAGES_MAX;
    var _closure1_slot6 = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/saved_messages/SavedMessageHelpers.native.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: addOrUpdateSavedMessage
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['addOrUpdateSavedMessage'] = tangon;
    michal = function() { // Original name: removeSavedMessage
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['removeSavedMessage'] = michal;
    return entity;
})();
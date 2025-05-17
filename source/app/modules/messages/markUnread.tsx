// app/modules/messages/markUnread.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _markUnread
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    yankee = argFoo;
                    tangon = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 502; continue _fun00001 }
 18:
                    var _closure4_slot0 = tangon;
                    zuuluu = undefined;
                    var _closure4_slot1 = zuuluu;
                    var _closure4_slot2 = zuuluu;
                    var _closure4_slot3 = zuuluu;
                    report = _closure1_slot8;
                    michal = report.getCurrentUser;
                    report = michal.bind(report)();
                    _closure4_slot1 = report;
                    michal = null;
                    if(!(michal != report)) { _fun00002_ip = 496; continue _fun00001 }
 65:
                    oscard = _closure1_slot6;
                    report = oscard.getMessages;
                    option = report.bind(oscard)(yankee);
                    report = option.toArray;
                    offset = report.bind(option)();
                    oscard = offset.filter;
                    report = function(argFoo) {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 8;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.compare;
                        entity = argFoo;
                        michal = entity.id;
                        entity = _closure4_slot0;
                        michal = zuuluu.bind(tangon)(michal, entity);
                        entity = 0;
                        entity = michal < entity;
                        return entity;
                    };
                    offset = oscard.bind(offset)(report);
                    oscard = offset.sort;
                    report = function(argFoo, argBar) {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 8;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.compare;
                        entity = argFoo;
                        michal = entity.id;
                        entity = argBar;
                        entity = entity.id;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    oscard = oscard.bind(offset)(report);
                    report = oscard.reverse;
                    oscard = report.bind(oscard)();
                    report = 0;
                    oscard = oscard[report];
                    if(!(michal != oscard)) { _fun00002_ip = 152; continue _fun00001 }
 145:
                    offset = oscard.id;
                    _fun00002_ip = 183; continue _fun00001;
 152:
                    romeon = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    oscard = 8;
                    oscard = foxtra[oscard];
                    romeon = romeon.bind(zuuluu)(oscard);
                    oscard = romeon.atPreviousMillisecond;
                    offset = oscard.bind(romeon)(tangon);
 183:
                    _closure4_slot2 = offset;
                    _closure4_slot3 = report;
                    oscard = option.forAll;
                    report = function(argFoo) {
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            oscard = argFoo;
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 8;
                            michal = michal[entity];
                            entity = undefined;
                            option = zuuluu.bind(entity)(michal);
                            golfie = option.compare;
                            report = oscard.id;
                            michal = _closure4_slot2;
                            report = golfie.bind(option)(report, michal);
                            michal = 0;
                            michal = report > michal;
                            if(!michal) { _fun00004_ip = 75; continue _fun00003 }
 61:
                            report = _closure1_slot7;
                            tangon = _closure4_slot1;
                            michal = report.bind(entity)(oscard, tangon);
 75:
                            if(!michal) { _fun00004_ip = 89; continue _fun00003 }
 78:
                            michal = _closure4_slot3;
                            michal = michal + 1;
                            _closure4_slot3 = michal;
 89:
                            return entity;
                        }
                    };
                    report = oscard.bind(option)(report);
                    oscard = _closure1_slot5;
                    report = oscard.getChannel;
                    romeon = report.bind(oscard)(yankee);
                    michal = michal != romeon;
                    if(!michal) { _fun00002_ip = 240; continue _fun00001 }
 230:
                    report = romeon.isThread;
                    michal = report.bind(romeon)();
 240:
                    if(!michal) { _fun00002_ip = 375; continue _fun00001 }
 246:
                    michal = romeon.isArchivedThread;
                    michal = michal.bind(romeon)();
                    if(!michal) { _fun00002_ip = 306; continue _fun00001 }
 259:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    michal = 9;
                    michal = oscard[michal];
                    oscard = report.bind(zuuluu)(michal);
                    report = oscard.unarchiveThread;
                    michal = false;
                    michal = report.bind(oscard)(romeon, michal);
                    SaveGenerator(address=297);
 295:
                    return michal;
 297:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 499; continue _fun00001 }
 306:
                    oscard = _closure1_slot4;
                    report = oscard.hasJoined;
                    report = report.bind(oscard)(yankee);
                    if(report) { _fun00002_ip = 375; continue _fun00001 }
 324:
                    oscard = _closure1_slot1;
                    option = _closure1_slot2;
                    report = 9;
                    report = option[report];
                    option = oscard.bind(zuuluu)(report);
                    oscard = option.joinThread;
                    report = 'Mark Unread';
                    report = oscard.bind(option)(romeon, report);
                    SaveGenerator(address=366);
 364:
                    return report;
 366:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!oscard) { _fun00002_ip = 375; continue _fun00001 }
 372:
                    return report;
 375:
                    option = _closure1_slot10;
                    oscard = option.log;
                    report = {};
                    report['channelId'] = yankee;
                    report['messageId'] = tangon;
                    tangon = 'Marking unread';
                    tangon = oscard.bind(option)(tangon, report);
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 10;
                    tangon = oscard[tangon];
                    tangon = report.bind(zuuluu)(tangon);
                    oscard = tangon.HTTP;
                    report = oscard.post;
                    tangon = {};
                    option = _closure1_slot9;
                    golfie = option.MESSAGE_ACK;
                    golfie = golfie.bind(option)(yankee, offset);
                    tangon['url'] = golfie;
                    option = {};
                    golfie = true;
                    option['manual'] = golfie;
                    verify = _closure4_slot3;
                    option['mention_count'] = verify;
                    tangon['body'] = option;
                    tangon['oldFormErrors'] = golfie;
                    tangon['rejectWithError'] = golfie;
                    tangon = report.bind(oscard)(tangon);
 496:
                    return zuuluu;
 499:
                    return michal;
 502:
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.shouldBadgeMessage;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 'markUnread';
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot10 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/markUnread.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: markUnread
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();
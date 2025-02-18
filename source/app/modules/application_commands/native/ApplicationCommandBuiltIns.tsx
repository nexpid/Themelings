// app/modules/application_commands/native/ApplicationCommandBuiltIns.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    golfie = tangon.BuiltInSectionId;
    tangon = {'id': '-15', 'untranslatedName': 'leave', 'displayName': 'leave'};
    option = 3;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.ApplicationCommandType;
    option = option.CHAT;
    tangon['type'] = option;
    option = 4;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.ApplicationCommandInputType;
    option = option.BUILT_IN;
    tangon['inputType'] = option;
    golfie = golfie.BUILT_IN;
    tangon['applicationId'] = golfie;
    option = function() { // Original name: get untranslatedDescription
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 5;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.26C4oq;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    golfie = 'untranslatedDescription';
    Object.defineProperty(tangon, golfie, {get: option, set: entity, enumerable: true});
    option = function() { // Original name: get displayDescription
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 5;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.26C4oq;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    golfie = 'displayDescription';
    Object.defineProperty(tangon, golfie, {get: option, set: entity, enumerable: true});
    golfie = function(argFoo) { // Original name: predicate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channel;
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00002_ip = 27; continue _fun00001 }
 17:
            michal = zuuluu.isGroupDM;
            entity = michal.bind(zuuluu)();
 27:
            return entity;
        }
    };
    tangon['predicate'] = golfie;
    michal = function(argFoo, argBar) { // Original name: execute
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argBar;
            report = entity.channel;
            var _closure2_slot0 = report;
            entity = null;
            if(!(entity != report)) { _fun00004_ip = 453; continue _fun00003 }
 23:
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            zuuluu = 6;
            zuuluu = entity[zuuluu];
            verify = undefined;
            offset = michal.bind(verify)(zuuluu);
            option = offset.computeChannelName;
            golfie = _closure1_slot4;
            zuuluu = _closure1_slot3;
            romeon = option.bind(offset)(report, golfie, zuuluu);
            offset = 5;
            zuuluu = entity[offset];
            zuuluu = michal.bind(verify)(zuuluu);
            yankee = zuuluu.intl;
            option = yankee.formatToPlainString;
            zuuluu = entity[offset];
            zuuluu = michal.bind(verify)(zuuluu);
            zuuluu = zuuluu.t;
            golfie = zuuluu.hJ5Ap6;
            zuuluu = {};
            zuuluu['name'] = romeon;
            zuuluu = option.bind(yankee)(golfie, zuuluu);
            golfie = entity[offset];
            golfie = michal.bind(verify)(golfie);
            option = golfie.intl;
            golfie = option.format;
            entity = entity[offset];
            entity = michal.bind(verify)(entity);
            entity = entity.t;
            michal = entity.SSIVOj;
            entity = {};
            entity['name'] = romeon;
            golfie = golfie.bind(option)(michal, entity);
            entity = report.isManaged;
            entity = entity.bind(report)();
            option = zuuluu;
            if(!entity) { _fun00004_ip = 300; continue _fun00003 }
 190:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            michal = entity[offset];
            michal = zuuluu.bind(verify)(michal);
            foxtra = michal.intl;
            yankee = foxtra.formatToPlainString;
            michal = entity[offset];
            michal = zuuluu.bind(verify)(michal);
            michal = michal.t;
            report = michal.hVGjER;
            michal = {};
            michal['name'] = romeon;
            option = yankee.bind(foxtra)(report, michal);
            report = entity[offset];
            report = zuuluu.bind(verify)(report);
            yankee = report.intl;
            report = yankee.format;
            entity = entity[offset];
            entity = zuuluu.bind(verify)(entity);
            entity = entity.t;
            zuuluu = entity.IK1Qvr;
            entity = {};
            entity['name'] = romeon;
            golfie = report.bind(yankee)(zuuluu, entity);
 300:
            michal = _closure1_slot1;
            report = _closure1_slot2;
            entity = 7;
            entity = report[entity];
            zuuluu = michal.bind(verify)(entity);
            michal = zuuluu.show;
            entity = {};
            entity['title'] = option;
            entity['body'] = golfie;
            option = _closure1_slot0;
            oscard = report[offset];
            oscard = option.bind(verify)(oscard);
            yankee = oscard.intl;
            golfie = yankee.string;
            oscard = report[offset];
            oscard = option.bind(verify)(oscard);
            oscard = oscard.t;
            oscard = oscard.26C4oq;
            oscard = golfie.bind(yankee)(oscard);
            entity['confirmText'] = oscard;
            oscard = report[offset];
            oscard = option.bind(verify)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            report = report[offset];
            report = option.bind(verify)(report);
            report = report.t;
            report = report.ETE/oK;
            report = oscard.bind(golfie)(report);
            entity['cancelText'] = report;
            tangon = function() { // Original name: onConfirm
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0: // try_start_0
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 8;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.closePrivateChannel;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity);
 48: // try_end0
                    _fun00006_ip = 154; continue _fun00005;
 50: // catch_target0
                    CatchBlockStart(arg_register=0);
                    zuuluu = _closure1_slot1;
                    verify = _closure1_slot2;
                    michal = 9;
                    michal = verify[michal];
                    option = undefined;
                    tangon = zuuluu.bind(option)(michal);
                    zuuluu = tangon.sendBotMessage;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    golfie = _closure1_slot0;
                    entity = 5;
                    report = verify[entity];
                    report = golfie.bind(option)(report);
                    oscard = report.intl;
                    report = oscard.string;
                    entity = verify[entity];
                    entity = golfie.bind(option)(entity);
                    entity = entity.t;
                    entity = entity.YOsuT0;
                    entity = report.bind(oscard)(entity);
                    entity = zuuluu.bind(tangon)(michal, entity);
 154:
                    entity = undefined;
                    return entity;
                }
            };
            entity['onConfirm'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 453:
            entity = undefined;
            return entity;
        }
    };
    tangon['execute'] = michal;
    michal = new Array(1);
    michal[0] = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/application_commands/native/ApplicationCommandBuiltIns.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();
// app/modules/guild_progress/native/GuildProgressUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    tangon = function(argFoo) { // Original name: useIOSCompletionStates
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            romeon = argFoo;
            var _closure2_slot0 = romeon;
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            yankee = 10;
            entity = golfie[yankee];
            tangon = undefined;
            verify = report.bind(tangon)(entity);
            option = verify.useStateFromStores;
            entity = _closure1_slot5;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                tangon = _closure1_slot5;
                zuuluu = tangon.can;
                entity = _closure1_slot9;
                michal = entity.ADMINISTRATOR;
                entity = _closure2_slot0;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = option.bind(verify)(zuuluu, entity);
            zuuluu = 11;
            option = golfie[zuuluu];
            verify = report.bind(tangon)(option);
            option = verify.useGuildPersonalized;
            verify = option.bind(verify)(romeon);
            option = golfie[zuuluu];
            offset = report.bind(tangon)(option);
            option = offset.useGuildPopulated;
            offset = option.bind(offset)(romeon);
            option = golfie[yankee];
            backup = report.bind(tangon)(option);
            foxtra = backup.useStateFromStores;
            option = _closure1_slot3;
            romeon = new Array(1);
            romeon[0] = option;
            option = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.getDefaultChannel;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            foxtra = foxtra.bind(backup)(romeon, option);
            zuuluu = golfie[zuuluu];
            option = report.bind(tangon)(zuuluu);
            golfie = option.useChannelsMessaged;
            report = null;
            if(!(report == foxtra)) { _fun00002_ip = 173; continue _fun00001 }
 167:
            zuuluu = new Array(0);
            _fun00002_ip = 184; continue _fun00001;
 173:
            romeon = new Array(1);
            romeon[0] = foxtra;
            zuuluu = romeon;
 184:
            golfie = golfie.bind(option)(zuuluu);
            option = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[yankee];
            foxtra = option.bind(tangon)(zuuluu);
            romeon = foxtra.useStateFromStores;
            zuuluu = _closure1_slot6;
            option = new Array(1);
            option[0] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure1_slot6;
                    michal = tangon.getProgress;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    report = michal.bind(tangon)(entity);
                    entity = null;
                    tangon = entity == report;
                    michal = undefined;
                    if(tangon) { _fun00004_ip = 61; continue _fun00003 }
 41:
                    tangon = report.has;
                    zuuluu = _closure1_slot7;
                    zuuluu = zuuluu.MESSAGE;
                    michal = tangon.bind(report)(zuuluu);
 61:
                    entity = entity != michal;
                    if(!entity) { _fun00004_ip = 71; continue _fun00003 }
 68:
                    entity = michal;
 71:
                    return entity;
                }
            };
            zuuluu = romeon.bind(foxtra)(option, zuuluu);
            if(golfie) { _fun00002_ip = 242; continue _fun00001 }
 239:
            golfie = zuuluu;
 242:
            option = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[yankee];
            romeon = option.bind(tangon)(zuuluu);
            yankee = romeon.useStateFromStores;
            zuuluu = _closure1_slot6;
            option = new Array(1);
            option[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getProgress;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = yankee.bind(romeon)(option, zuuluu);
            if(entity) { _fun00002_ip = 308; continue _fun00001 }
 292:
            entity = {'guildPopulated': false, 'guildPersonalized': false, 'guildMessaged': false, 'guildChannelCreated': false, 'completed': true, 'dismissed': true, 'numFinished': 0, 'totalSteps': 0};
            return entity;
 308:
            entity = new Array(3);
            entity[0] = offset;
            entity[1] = verify;
            entity[2] = golfie;
            zuuluu = entity.filter;
            michal = function(argFoo) {
                entity = argFoo;
                return entity;
            };
            michal = zuuluu.bind(entity)(michal);
            zuuluu = michal.length;
            michal = entity.length;
            entity = report == option;
            tangon = undefined;
            if(entity) { _fun00002_ip = 380; continue _fun00001 }
 360:
            yankee = option.has;
            entity = _closure1_slot7;
            entity = entity.COMPLETED;
            tangon = yankee.bind(option)(entity);
 380:
            if(tangon) { _fun00002_ip = 387; continue _fun00001 }
 383:
            tangon = zuuluu === michal;
 387:
            entity = {};
            entity['guildPopulated'] = offset;
            entity['guildPersonalized'] = verify;
            entity['guildMessaged'] = golfie;
            entity['completed'] = tangon;
            report = report == option;
            if(report) { _fun00002_ip = 436; continue _fun00001 }
 416:
            golfie = option.has;
            oscard = _closure1_slot7;
            oscard = oscard.DISMISSED;
            report = golfie.bind(option)(oscard);
 436:
            entity['dismissed'] = report;
            if(!tangon) { _fun00002_ip = 447; continue _fun00001 }
 444:
            zuuluu = michal;
 447:
            entity['numFinished'] = zuuluu;
            entity['totalSteps'] = michal;
            return entity;
        }
    };
    var _closure1_slot10 = tangon;
    entity = global;
    offset = entity.Object;
    oscard = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = option[report];
    report = verify.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = option[report];
    report = verify.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    oscard = option[report];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.Steps;
    var _closure1_slot7 = oscard;
    oscard = 5;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.WELCOME_OLD_GUILD_AGE_THRESHOLD;
    var _closure1_slot8 = verify;
    oscard = oscard.Permissions;
    var _closure1_slot9 = oscard;
    oscard = 14;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/guild_progress/native/GuildProgressUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['MIN_PROGRESS_PERCENT'] = report;
    report = 'rgba(78, 93, 148, 0.3)';
    zuuluu['PROGRESS_BACKGROUND_COLOR'] = report;
    report = function(argFoo) { // Original name: openActionSheet
        golfie = argFoo;
        report = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 6;
        tangon = michal[entity];
        entity = undefined;
        oscard = report.bind(entity)(tangon);
        report = oscard.openLazy;
        tangon = _closure1_slot0;
        zuuluu = 8;
        zuuluu = michal[zuuluu];
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = 7;
        zuuluu = michal[zuuluu];
        michal = michal.paths;
        tangon = tangon.bind(entity)(zuuluu, michal);
        option = golfie.id;
        michal = global;
        michal = michal.HermesInternal;
        zuuluu = michal.concat;
        michal = 'guild-progress-';
        zuuluu = zuuluu.bind(michal)(option);
        michal = {};
        michal['guild'] = golfie;
        michal = report.bind(oscard)(tangon, zuuluu, michal);
        return entity;
    };
    zuuluu['openActionSheet'] = report;
    report = function(argFoo) { // Original name: hideActionSheet
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.hideActionSheet;
        michal = global;
        michal = michal.HermesInternal;
        oscard = michal.concat;
        report = 'guild-progress-';
        michal = argFoo;
        michal = oscard.bind(report)(michal);
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['hideActionSheet'] = report;
    report = function(argFoo) { // Original name: createGuildProgress
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot4;
            michal = tangon.getGuild;
            tangon = michal.bind(tangon)(zuuluu);
            michal = null;
            if(!(michal != tangon)) { _fun00006_ip = 59; continue _fun00005 }
 26:
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            entity = michal.createProgress;
            entity = entity.bind(michal)(zuuluu);
 59:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['createGuildProgress'] = report;
    zuuluu['useIOSCompletionStates'] = tangon;
    tangon = function(argFoo) { // Original name: useGuildProgressStep
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = _closure1_slot10;
            offset = undefined;
            entity = argFoo;
            report = michal.bind(offset)(entity);
            entity = report.guildPopulated;
            golfie = report.guildPersonalized;
            zuuluu = report.guildMessaged;
            michal = report.completed;
            verify = report.totalSteps;
            foxtra = _closure1_slot0;
            oscard = _closure1_slot2;
            romeon = 12;
            report = oscard[romeon];
            report = foxtra.bind(offset)(report);
            yankee = report.intl;
            option = yankee.string;
            report = oscard[romeon];
            report = foxtra.bind(offset)(report);
            report = report.t;
            report = report.q9n0TU;
            option = option.bind(yankee)(report);
            report = new Array(3);
            report[0] = option;
            option = oscard[romeon];
            option = foxtra.bind(offset)(option);
            backup = option.intl;
            yankee = backup.string;
            option = oscard[romeon];
            option = foxtra.bind(offset)(option);
            option = option.t;
            option = option.DWB2YW;
            option = yankee.bind(backup)(option);
            report[1] = option;
            option = oscard[romeon];
            option = foxtra.bind(offset)(option);
            yankee = option.intl;
            option = yankee.string;
            oscard = oscard[romeon];
            oscard = foxtra.bind(offset)(oscard);
            oscard = oscard.t;
            oscard = oscard.dNktpq;
            oscard = option.bind(yankee)(oscard);
            report[2] = oscard;
            option = 0;
            oscard = 0;
            if(!entity) { _fun00008_ip = 222; continue _fun00007 }
 213:
            entity = null;
            report[option] = entity;
            oscard = 1;
 222:
            entity = oscard;
            if(!golfie) { _fun00008_ip = 240; continue _fun00007 }
 228:
            entity = oscard + 1;
            option = null;
            golfie = 1;
            report[golfie] = option;
 240:
            yankee = entity;
            if(!zuuluu) { _fun00008_ip = 258; continue _fun00007 }
 246:
            yankee = entity + 1;
            oscard = null;
            zuuluu = 3;
            report[zuuluu] = oscard;
 258:
            zuuluu = report.find;
            entity = function(argFoo) {
                michal = null;
                entity = argFoo;
                entity = michal != entity;
                return entity;
            };
            option = zuuluu.bind(report)(entity);
            entity = null;
            if(!(entity == option)) { _fun00008_ip = 335; continue _fun00007 }
 283:
            oscard = _closure1_slot0;
            entity = _closure1_slot2;
            zuuluu = entity[romeon];
            zuuluu = oscard.bind(offset)(zuuluu);
            report = zuuluu.intl;
            zuuluu = report.string;
            entity = entity[romeon];
            entity = oscard.bind(offset)(entity);
            entity = entity.t;
            entity = entity.+Gyklp;
            option = zuuluu.bind(report)(entity);
 335:
            entity = {};
            zuuluu = global;
            golfie = zuuluu.Math;
            oscard = golfie.max;
            zuuluu = 100;
            zuuluu = zuuluu * yankee;
            report = zuuluu / verify;
            zuuluu = 3;
            zuuluu = oscard.bind(golfie)(zuuluu, report);
            entity['percentComplete'] = zuuluu;
            if(!(!(yankee < verify))) { _fun00008_ip = 433; continue _fun00007 }
 379:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            report = zuuluu[romeon];
            report = golfie.bind(offset)(report);
            oscard = report.intl;
            report = oscard.string;
            zuuluu = zuuluu[romeon];
            zuuluu = golfie.bind(offset)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.+Gyklp;
            zuuluu = report.bind(oscard)(zuuluu);
            _fun00008_ip = 514; continue _fun00007;
 433:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            oscard = tangon[romeon];
            oscard = report.bind(offset)(oscard);
            golfie = oscard.intl;
            oscard = golfie.formatToPlainString;
            tangon = tangon[romeon];
            tangon = report.bind(offset)(tangon);
            tangon = tangon.t;
            report = tangon.zhHW5e;
            tangon = {};
            offset = 1;
            offset = yankee + offset;
            tangon['currStep'] = offset;
            tangon['total'] = verify;
            tangon['step'] = option;
            zuuluu = oscard.bind(golfie)(report, tangon);
 514:
            entity['subtitle'] = zuuluu;
            entity['completed'] = michal;
            return entity;
        }
    };
    zuuluu['useGuildProgressStep'] = tangon;
    michal = function(argFoo) { // Original name: useIsEligibleForGuildProgress
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 10;
            tangon = golfie[tangon];
            oscard = undefined;
            option = report.bind(oscard)(tangon);
            report = option.useStateFromStores;
            verify = _closure1_slot5;
            tangon = new Array(1);
            tangon[0] = verify;
            entity = function() {
                tangon = _closure1_slot5;
                zuuluu = tangon.can;
                entity = _closure1_slot9;
                michal = entity.ADMINISTRATOR;
                entity = _closure2_slot0;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = report.bind(option)(tangon, entity);
            report = _closure1_slot1;
            tangon = 13;
            tangon = golfie[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.extractTimestamp;
            zuuluu = zuuluu.id;
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = global;
            report = tangon.Date;
            tangon = report.now;
            tangon = tangon.bind(report)();
            michal = _closure1_slot8;
            michal = tangon - michal;
            michal = zuuluu < michal;
            if(!entity) { _fun00010_ip = 131; continue _fun00009 }
 128:
            entity = !michal;
 131:
            return entity;
        }
    };
    zuuluu['useIsEligibleForGuildProgress'] = michal;
    return entity;
})();
// app/modules/application_commands/getPrimaryAppCommand.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    verify = argBar;
    option = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = offset;
    entity = function() { // Original name: _getPrimaryAppCommand
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    verify = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 181; continue _fun00001 }
 13:
                    report = _closure1_slot4;
                    zuuluu = report.getChannel;
                    michal = argFoo;
                    offset = zuuluu.bind(report)(michal);
                    report = null;
                    michal = report != offset;
                    option = undefined;
                    zuuluu = undefined;
                    if(!michal) { _fun00002_ip = 77; continue _fun00001 }
 46:
                    golfie = _closure1_slot11;
                    oscard = {};
                    oscard['channel'] = offset;
                    yankee = 'channel';
                    oscard['type'] = yankee;
                    oscard = golfie.bind(option)(oscard, verify);
                    michal = report == oscard;
                    zuuluu = oscard;
 77:
                    if(!michal) { _fun00002_ip = 137; continue _fun00001 }
 80:
                    oscard = _closure1_slot5;
                    michal = {};
                    golfie = 'application';
                    michal['type'] = golfie;
                    michal['applicationId'] = verify;
                    michal = oscard.bind(option)(michal);
                    SaveGenerator(address=107);
 105:
                    return michal;
 107:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscard) { _fun00002_ip = 178; continue _fun00001 }
 113:
                    golfie = _closure1_slot11;
                    oscard = {};
                    oscard['channel'] = offset;
                    offset = 'channel';
                    oscard['type'] = offset;
                    zuuluu = golfie.bind(option)(oscard, verify);
 137:
                    if(!(report == zuuluu)) { _fun00002_ip = 175; continue _fun00001 }
 141:
                    report = global;
                    oscard = report.Error;
                    foxtra = _closure1_slot8;
                    report = oscard.prototype;
                    report = Object.create(report, {constructor: {value: oscard}});
                    backup = report;
                    tangon = new backup[oscard](foxtra, romeon);
                    tangon = tangon instanceof Object ? tangon : report;
                    throw tangon;
 175:
                    return zuuluu;
 178:
                    return michal;
 181:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot10 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
    oscard = function(argFoo, argBar) { // Original name: queryForPrimaryAppCommand
        report = _closure1_slot7;
        tangon = report.query;
        zuuluu = {};
        golfie = _closure1_slot0;
        option = _closure1_slot1;
        entity = 4;
        entity = option[entity];
        oscard = undefined;
        entity = golfie.bind(oscard)(entity);
        entity = entity.ApplicationCommandType;
        michal = entity.PRIMARY_ENTRY_POINT;
        entity = new Array(1);
        entity[0] = michal;
        zuuluu['commandTypes'] = entity;
        michal = {'placeholderCount': 1, 'scoreMethod': null, 'applicationId': null, 'allowFetch': false, 'allowApplicationState': true};
        entity = 5;
        entity = option[entity];
        entity = golfie.bind(oscard)(entity);
        entity = entity.ScoreMethod;
        entity = entity.COMMAND_ONLY;
        michal['scoreMethod'] = entity;
        entity = argBar;
        michal['applicationId'] = entity;
        entity = argFoo;
        entity = tangon.bind(report)(entity, zuuluu, michal);
        michal = entity.commands;
        entity = 0;
        entity = michal[entity];
        return entity;
    };
    var _closure1_slot11 = oscard;
    report = function(argFoo, argBar) { // Original name: useGetPrimaryAppCommand
        option = argBar;
        var _closure2_slot0 = option;
        report = _closure1_slot13;
        tangon = undefined;
        entity = argFoo;
        entity = report.bind(tangon)(entity, option);
        tangon = entity.commands;
        oscard = entity.loading;
        var _closure2_slot1 = oscard;
        entity = 0;
        entity = tangon[entity];
        tangon = null;
        golfie = tangon != entity;
        var _closure2_slot2 = golfie;
        report = _closure1_slot3;
        tangon = report.useEffect;
        zuuluu = new Array(3);
        zuuluu[0] = option;
        zuuluu[1] = golfie;
        zuuluu[2] = oscard;
        michal = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure2_slot2;
                if(entity) { _fun00004_ip = 14; continue _fun00003 }
 10:
                entity = _closure2_slot1;
 14:
                if(entity) { _fun00004_ip = 71; continue _fun00003 }
 17:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.requestApplicationCommandIndex;
                entity = {};
                report = 'application';
                entity['type'] = report;
                tangon = _closure2_slot0;
                entity['applicationId'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 71:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    var _closure1_slot12 = report;
    tangon = function(argFoo, argBar) { // Original name: useQueryForPrimaryAppCommand
        report = _closure1_slot6;
        tangon = {};
        michal = _closure1_slot9;
        tangon['commandTypes'] = michal;
        zuuluu = {'placeholderCount': 1, 'scoreMethod': null, 'applicationId': null, 'allowFetch': false, 'allowApplicationState': true};
        oscard = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 5;
        entity = michal[entity];
        michal = undefined;
        entity = oscard.bind(michal)(entity);
        entity = entity.ScoreMethod;
        entity = entity.COMMAND_ONLY;
        zuuluu['scoreMethod'] = entity;
        entity = argBar;
        zuuluu['applicationId'] = entity;
        entity = argFoo;
        entity = report.bind(michal)(entity, tangon, zuuluu);
        return entity;
    };
    var _closure1_slot13 = tangon;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, golfie);
    entity = 0;
    golfie = offset[entity];
    entity = undefined;
    golfie = option.bind(entity)(golfie);
    var _closure1_slot2 = golfie;
    golfie = 1;
    yankee = offset[golfie];
    golfie = argCor;
    golfie = golfie.bind(entity)(yankee);
    var _closure1_slot3 = golfie;
    golfie = 2;
    golfie = offset[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 3;
    yankee = offset[golfie];
    yankee = verify.bind(entity)(yankee);
    romeon = yankee.getOrFetchApplicationCommandIndexForTarget;
    var _closure1_slot5 = romeon;
    yankee = yankee.useQueryState;
    var _closure1_slot6 = yankee;
    golfie = offset[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot7 = golfie;
    golfie = 'no primary app command for application';
    var _closure1_slot8 = golfie;
    option = 4;
    option = offset[option];
    option = verify.bind(entity)(option);
    option = option.ApplicationCommandType;
    yankee = option.PRIMARY_ENTRY_POINT;
    option = new Array(1);
    option[0] = yankee;
    var _closure1_slot9 = option;
    option = 8;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/application_commands/getPrimaryAppCommand.tsx';
    option = verify.bind(offset)(option);
    option = function() { // Original name: getPrimaryAppCommand
        entity = undefined;
        tangon = _closure1_slot10;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = option;
    zuuluu['NO_PRIMARY_APP_COMMAND_ERROR'] = golfie;
    zuuluu['queryForPrimaryAppCommand'] = oscard;
    zuuluu['useGetPrimaryAppCommand'] = report;
    zuuluu['useQueryForPrimaryAppCommand'] = tangon;
    michal = function(argFoo) { // Original name: useIsPrimaryAppCommandUsableInAppDM
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.context;
            michal = entity.applicationId;
            tangon = entity.botUserId;
            entity = _closure1_slot12;
            verify = undefined;
            oscard = entity.bind(verify)(zuuluu, michal);
            entity = null;
            if(!(entity != oscard)) { _fun00006_ip = 183; continue _fun00005 }
 43:
            michal = oscard.integration_types;
            zuuluu = entity != michal;
            if(!zuuluu) { _fun00006_ip = 104; continue _fun00005 }
 56:
            option = oscard.integration_types;
            golfie = option.includes;
            offset = _closure1_slot0;
            yankee = _closure1_slot1;
            michal = 7;
            michal = yankee[michal];
            michal = offset.bind(verify)(michal);
            michal = michal.ApplicationIntegrationType;
            michal = michal.USER_INSTALL;
            zuuluu = golfie.bind(option)(michal);
 104:
            michal = oscard.contexts;
            michal = entity != michal;
            if(!michal) { _fun00006_ip = 165; continue _fun00005 }
 117:
            golfie = oscard.contexts;
            oscard = golfie.includes;
            option = _closure1_slot0;
            offset = _closure1_slot1;
            report = 4;
            report = offset[report];
            report = option.bind(verify)(report);
            report = report.InteractionContextType;
            report = report.BOT_DM;
            michal = oscard.bind(golfie)(report);
 165:
            entity = entity != tangon;
            if(!entity) { _fun00006_ip = 175; continue _fun00005 }
 172:
            entity = zuuluu;
 175:
            if(!entity) { _fun00006_ip = 181; continue _fun00005 }
 178:
            entity = michal;
 181:
            return entity;
 183:
            entity = false;
            return entity;
        }
    };
    zuuluu['useIsPrimaryAppCommandUsableInAppDM'] = michal;
    return entity;
})();
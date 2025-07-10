// app/modules/dismissible_content/DismissibleContentUnsafeUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo) { // Original name: UNSAFE_isDismissibleContentDismissed
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            entity = arguments[1];
            oscard = undefined;
            if(!(entity === oscard)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            entity = false;
 14:
            if(entity) { _fun00002_ip = 58; continue _fun00001 }
 17:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 2;
            entity = zuuluu[entity];
            michal = michal.bind(oscard)(entity);
            entity = michal.disableNewUserDismissibleContent;
            entity = entity.bind(michal)(report);
            if(!entity) { _fun00002_ip = 58; continue _fun00001 }
 54:
            entity = true;
            return entity;
 58:
            entity = _closure1_slot4;
            entity = entity.settings;
            zuuluu = entity.userContent;
            entity = null;
            golfie = entity == zuuluu;
            tangon = undefined;
            if(golfie) { _fun00002_ip = 94; continue _fun00001 }
 88:
            tangon = zuuluu.dismissedContents;
 94:
            entity = entity != tangon;
            if(!entity) { _fun00002_ip = 133; continue _fun00001 }
 101:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 3;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(oscard)(michal);
            michal = zuuluu.hasBit;
            entity = michal.bind(zuuluu)(tangon, report);
 133:
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    entity = function() { // Original name: _UNSAFE_markDismissibleContentAsDismissed
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    option = argFoo;
                    golfie = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 157; continue _fun00003 }
 16:
                    zuuluu = undefined;
                    if(!(golfie === zuuluu)) { _fun00004_ip = 24; continue _fun00003 }
 22:
                    golfie = {};
 24:
                    SaveGenerator(address=28);
 26:
                    return zuuluu;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 154; continue _fun00003 }
 34:
                    oscard = _closure1_slot5;
                    tangon = true;
                    tangon = oscard.bind(zuuluu)(option, tangon);
                    if(tangon) { _fun00004_ip = 151; continue _fun00003 }
 52:
                    oscard = _closure1_slot0;
                    offset = _closure1_slot2;
                    verify = 5;
                    tangon = offset[verify];
                    yankee = oscard.bind(zuuluu)(tangon);
                    tangon = yankee.markDismissibleContentAsDismissedPreProcessing;
                    tangon = tangon.bind(yankee)(option, golfie);
                    tangon = 6;
                    tangon = offset[tangon];
                    oscard = oscard.bind(zuuluu)(tangon);
                    tangon = oscard.addDismissedContent;
                    tangon = tangon.bind(oscard)(option);
                    SaveGenerator(address=111);
 109:
                    return tangon;
 111:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00004_ip = 148; continue _fun00003 }
 117:
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[verify];
                    oscard = oscard.bind(zuuluu)(report);
                    report = oscard.markDismissibleContentAsDismissedPostProcessing;
                    report = report.bind(oscard)(option, golfie);
                    _fun00004_ip = 151; continue _fun00003;
 148:
                    return tangon;
 151:
                    return zuuluu;
 154:
                    return michal;
 157:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
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
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 8;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/dismissible_content/DismissibleContentUnsafeUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['UNSAFE_isDismissibleContentDismissed'] = tangon;
    tangon = function(argFoo) { // Original name: UNSAFE_useIsDismissibleContentDismissed
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 4;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot4;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            zuuluu = _closure1_slot5;
            michal = _closure2_slot0;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['UNSAFE_useIsDismissibleContentDismissed'] = tangon;
    tangon = function() { // Original name: UNSAFE_markDismissibleContentAsDismissed
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['UNSAFE_markDismissibleContentAsDismissed'] = tangon;
    michal = function(argFoo, argBar) { // Original name: UNSAFE_isSnowflakeBoundDismissibleContentDismissed
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 2;
            entity = zuuluu[entity];
            oscard = undefined;
            michal = michal.bind(oscard)(entity);
            entity = michal.disableNewUserDismissibleContent;
            entity = entity.bind(michal)(report);
            if(entity) { _fun00006_ip = 157; continue _fun00005 }
 42:
            entity = _closure1_slot4;
            entity = entity.settings;
            entity = entity.userContent;
            zuuluu = null;
            golfie = zuuluu == entity;
            michal = undefined;
            if(golfie) { _fun00006_ip = 94; continue _fun00005 }
 69:
            entity = entity.recurringDismissibleContentStates;
            entity = entity[report];
            report = zuuluu == entity;
            michal = undefined;
            if(report) { _fun00006_ip = 94; continue _fun00005 }
 88:
            michal = entity.lastDismissedObjectId;
 94:
            entity = {};
            zuuluu = zuuluu != michal;
            if(!zuuluu) { _fun00006_ip = 145; continue _fun00005 }
 103:
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 7;
            tangon = golfie[tangon];
            oscard = report.bind(oscard)(tangon);
            report = oscard.compare;
            tangon = argBar;
            report = report.bind(oscard)(tangon, michal);
            tangon = 1;
            zuuluu = tangon !== report;
 145:
            entity['isDismissed'] = zuuluu;
            entity['lastDismissedSnowflakeId'] = michal;
            return entity;
 157:
            entity = {'isDismissed': true, 'lastDismissedSnowflakeId': null};
            return entity;
        }
    };
    zuuluu['UNSAFE_isSnowflakeBoundDismissibleContentDismissed'] = michal;
    return entity;
})();
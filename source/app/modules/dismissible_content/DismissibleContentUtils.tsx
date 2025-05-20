// app/modules/dismissible_content/DismissibleContentUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    report = function(argFoo) { // Original name: isDismissibleContentDismissed
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
            entity = 8;
            entity = zuuluu[entity];
            michal = michal.bind(oscard)(entity);
            entity = michal.disableNewUserDismissibleContent;
            entity = entity.bind(michal)(report);
            if(!entity) { _fun00002_ip = 58; continue _fun00001 }
 54:
            entity = true;
            return entity;
 58:
            entity = _closure1_slot5;
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
            michal = 9;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(oscard)(michal);
            michal = zuuluu.hasBit;
            entity = michal.bind(zuuluu)(tangon, report);
 133:
            return entity;
        }
    };
    var _closure1_slot14 = report;
    entity = function(argFoo) { // Original name: markDismissibleContentAsDismissedPreProcessing
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun00004_ip = 14; continue _fun00003 }
 12:
            report = {};
 14:
            zuuluu = _closure1_slot10;
            zuuluu = zuuluu.bind(entity)(tangon);
            if(zuuluu) { _fun00004_ip = 35; continue _fun00003 }
 29:
            zuuluu = report.forceTrack;
 35:
            if(!zuuluu) { _fun00004_ip = 48; continue _fun00003 }
 38:
            zuuluu = _closure1_slot21;
            zuuluu = zuuluu.bind(entity)(tangon, report);
 48:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 14;
            michal = report[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.handleDCDismissed;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: markDismissibleContentAsDismissedPostProcessing
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            oscard = arguments[1];
            entity = undefined;
            if(!(oscard === entity)) { _fun00006_ip = 11; continue _fun00005 }
 9:
            oscard = {};
 11:
            tangon = _closure1_slot7;
            zuuluu = tangon.hasUserHitDCCap;
            zuuluu = zuuluu.bind(tangon)();
            tangon = !zuuluu;
            zuuluu = _closure1_slot9;
            michal = {};
            report = argFoo;
            michal['content'] = report;
            report = null;
            golfie = report == oscard;
            report = undefined;
            if(golfie) { _fun00006_ip = 61; continue _fun00005 }
 55:
            report = oscard.groupName;
 61:
            michal['groupName'] = report;
            michal = zuuluu.bind(entity)(michal, tangon);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _markDismissibleContentAsDismissed
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    oscard = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 121; continue _fun00007 }
 13:
                    zuuluu = undefined;
                    if(!(oscard === zuuluu)) { _fun00008_ip = 21; continue _fun00007 }
 19:
                    oscard = {};
 21:
                    SaveGenerator(address=25);
 23:
                    return zuuluu;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 118; continue _fun00007 }
 31:
                    option = _closure1_slot14;
                    tangon = true;
                    tangon = option.bind(zuuluu)(golfie, tangon);
                    if(tangon) { _fun00008_ip = 115; continue _fun00007 }
 49:
                    tangon = _closure1_slot15;
                    tangon = tangon.bind(zuuluu)(golfie, oscard);
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    tangon = 18;
                    tangon = verify[tangon];
                    option = option.bind(zuuluu)(tangon);
                    tangon = option.addDismissedContent;
                    tangon = tangon.bind(option)(golfie);
                    SaveGenerator(address=94);
 92:
                    return tangon;
 94:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(option) { _fun00008_ip = 112; continue _fun00007 }
 100:
                    report = _closure1_slot16;
                    report = report.bind(zuuluu)(golfie, oscard);
                    _fun00008_ip = 115; continue _fun00007;
 112:
                    return tangon;
 115:
                    return zuuluu;
 118:
                    return michal;
 121:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot17 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: _markVersionedDismissibleContentAsDismissed
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    oscard = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 108; continue _fun00009 }
 13:
                    tangon = undefined;
                    if(!(oscard === tangon)) { _fun00010_ip = 21; continue _fun00009 }
 19:
                    oscard = {};
 21:
                    SaveGenerator(address=25);
 23:
                    return tangon;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 105; continue _fun00009 }
 31:
                    zuuluu = _closure1_slot15;
                    zuuluu = zuuluu.bind(tangon)(golfie, oscard);
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 18;
                    zuuluu = verify[zuuluu];
                    verify = option.bind(tangon)(zuuluu);
                    option = verify.addVersionedDismissedContent;
                    zuuluu = argBar;
                    zuuluu = option.bind(verify)(golfie, zuuluu);
                    SaveGenerator(address=83);
 81:
                    return zuuluu;
 83:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(option) { _fun00010_ip = 102; continue _fun00009 }
 89:
                    report = _closure1_slot16;
                    report = report.bind(tangon)(golfie, oscard);
                    return tangon;
 102:
                    return zuuluu;
 105:
                    return michal;
 108:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot18 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: _markSnowflakeBoundDismissibleContentAsDismissed
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    oscard = argFoo;
                    report = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00012_ip = 89; continue _fun00011 }
 13:
                    michal = _closure1_slot15;
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(oscard, report);
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 18;
                    michal = option[michal];
                    option = golfie.bind(zuuluu)(michal);
                    golfie = option.addSnowflakeBoundDismissedContent;
                    michal = argBar;
                    michal = golfie.bind(option)(oscard, michal);
                    SaveGenerator(address=67);
 65:
                    return michal;
 67:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golfie) { _fun00012_ip = 86; continue _fun00011 }
 73:
                    tangon = _closure1_slot16;
                    tangon = tangon.bind(zuuluu)(oscard, report);
                    return zuuluu;
 86:
                    return michal;
 89:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot19 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: _markTimeRecurringDismissibleContentAsDismissed
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    oscard = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00014_ip = 104; continue _fun00013 }
 13:
                    tangon = undefined;
                    if(!(oscard === tangon)) { _fun00014_ip = 21; continue _fun00013 }
 19:
                    oscard = {};
 21:
                    SaveGenerator(address=25);
 23:
                    return tangon;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00014_ip = 101; continue _fun00013 }
 31:
                    zuuluu = _closure1_slot15;
                    zuuluu = zuuluu.bind(tangon)(golfie, oscard);
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 18;
                    zuuluu = verify[zuuluu];
                    option = option.bind(tangon)(zuuluu);
                    zuuluu = option.addTimeRecurringDismissedContent;
                    zuuluu = zuuluu.bind(option)(golfie);
                    SaveGenerator(address=79);
 77:
                    return zuuluu;
 79:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(option) { _fun00014_ip = 98; continue _fun00013 }
 85:
                    report = _closure1_slot16;
                    report = report.bind(tangon)(golfie, oscard);
                    return tangon;
 98:
                    return zuuluu;
 101:
                    return michal;
 104:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot20 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot20 = entity;
    michal = function(argFoo, argBar) { // Original name: trackDismissibleContentDismissed
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            yankee = argFoo;
            golfie = argBar;
            michal = _closure1_slot11;
            entity = undefined;
            tangon = michal.bind(entity)();
            zuuluu = _closure1_slot4;
            michal = 1;
            zuuluu = zuuluu.bind(entity)(tangon, michal);
            michal = 0;
            offset = zuuluu[michal];
            zuuluu = _closure1_slot7;
            michal = zuuluu.getRenderedAtTimestamp;
            zuuluu = michal.bind(zuuluu)(yankee);
            michal = global;
            michal = michal.Date;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            output = tangon;
            michal = new output[michal](sizing);
            tangon = michal instanceof Object ? michal : tangon;
            oscard = null;
            michal = oscard == zuuluu;
            option = null;
            if(michal) { _fun00016_ip = 108; continue _fun00015 }
 94:
            michal = tangon.getTime;
            michal = michal.bind(tangon)();
            option = michal - zuuluu;
 108:
            zuuluu = _closure1_slot1;
            backup = _closure1_slot2;
            michal = 15;
            michal = backup[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            michal = _closure1_slot13;
            zuuluu = michal.DISMISSIBLE_CONTENT_DISMISSED;
            michal = {};
            foxtra = _closure1_slot0;
            romeon = 16;
            romeon = backup[romeon];
            romeon = foxtra.bind(entity)(romeon);
            romeon = romeon.DismissibleContent;
            romeon = romeon[yankee];
            michal['type'] = romeon;
            foxtra = oscard == golfie;
            romeon = undefined;
            if(foxtra) { _fun00016_ip = 190; continue _fun00015 }
 184:
            romeon = golfie.dismissAction;
 190:
            if(!(oscard == romeon)) { _fun00016_ip = 204; continue _fun00015 }
 194:
            foxtra = _closure1_slot12;
            romeon = foxtra.UNKNOWN;
 204:
            michal['action'] = romeon;
            michal['content_count'] = offset;
            romeon = oscard == golfie;
            offset = undefined;
            if(romeon) { _fun00016_ip = 228; continue _fun00015 }
 222:
            offset = golfie.groupName;
 228:
            michal['group_name'] = offset;
            offset = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 17;
            verify = romeon[verify];
            verify = offset.bind(entity)(verify);
            offset = verify.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
            verify = offset.has;
            verify = verify.bind(offset)(yankee);
            michal['bypass_fatigue'] = verify;
            offset = oscard == golfie;
            verify = undefined;
            if(offset) { _fun00016_ip = 288; continue _fun00015 }
 283:
            verify = golfie.guildId;
 288:
            michal['guild_id'] = verify;
            michal['shown_duration'] = option;
            option = oscard == golfie;
            oscard = undefined;
            if(option) { _fun00016_ip = 314; continue _fun00015 }
 308:
            oscard = golfie.version;
 314:
            michal['version'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot21 = michal;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.DCFEventTypes;
    var _closure1_slot6 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot7 = oscard;
    oscard = 5;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.addCandidateContent;
    var _closure1_slot8 = verify;
    verify = oscard.removeCandidateContent;
    var _closure1_slot9 = verify;
    verify = oscard.isContentShown;
    var _closure1_slot10 = verify;
    oscard = oscard.getCurrentlyShownCounts;
    var _closure1_slot11 = oscard;
    oscard = 6;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.ContentDismissActionType;
    var _closure1_slot12 = oscard;
    oscard = 7;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.AnalyticEvents;
    var _closure1_slot13 = oscard;
    oscard = 19;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/dismissible_content/DismissibleContentUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['isDismissibleContentDismissed'] = report;
    report = function(argFoo) { // Original name: useIsDismissibleContentDismissed
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 10;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot5;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            zuuluu = _closure1_slot14;
            michal = _closure2_slot0;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useIsDismissibleContentDismissed'] = report;
    report = function(argFoo, argBar) { // Original name: isVersionedDismissibleContentDismissed
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            oscard = argFoo;
            tangon = argBar;
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 8;
            michal = report[michal];
            golfie = undefined;
            zuuluu = zuuluu.bind(golfie)(michal);
            michal = zuuluu.disableNewUserDismissibleContent;
            michal = michal.bind(zuuluu)(oscard);
            if(michal) { _fun00018_ip = 157; continue _fun00017 }
 45:
            michal = _closure1_slot5;
            michal = michal.settings;
            report = michal.userContent;
            zuuluu = null;
            option = zuuluu == report;
            michal = undefined;
            if(option) { _fun00018_ip = 97; continue _fun00017 }
 72:
            report = report.recurringDismissibleContentStates;
            report = report[oscard];
            option = zuuluu == report;
            michal = undefined;
            if(option) { _fun00018_ip = 97; continue _fun00017 }
 91:
            michal = report.lastDismissedVersion;
 97:
            if(!(zuuluu == tangon)) { _fun00018_ip = 132; continue _fun00017 }
 101:
            report = _closure1_slot0;
            option = _closure1_slot2;
            entity = 11;
            entity = option[entity];
            report = report.bind(golfie)(entity);
            entity = report.getVersionedDismissibleContentCurrentVersion;
            tangon = entity.bind(report)(oscard);
 132:
            entity = {};
            zuuluu = zuuluu != michal;
            if(!zuuluu) { _fun00018_ip = 145; continue _fun00017 }
 141:
            zuuluu = michal >= tangon;
 145:
            entity['isDismissed'] = zuuluu;
            entity['lastDismissedVersion'] = michal;
            return entity;
 157:
            entity = {'isDismissed': true, 'lastDismissedVersion': null};
            return entity;
        }
    };
    zuuluu['isVersionedDismissibleContentDismissed'] = report;
    report = function(argFoo, argBar) { // Original name: isTimeRecurringDismissibleContentDismissed
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zuuluu = argFoo;
            option = argBar;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 8;
            tangon = tangon[michal];
            michal = undefined;
            report = report.bind(michal)(tangon);
            tangon = report.disableNewUserDismissibleContent;
            tangon = tangon.bind(report)(zuuluu);
            if(tangon) { _fun00020_ip = 292; continue _fun00019 }
 48:
            entity = _closure1_slot5;
            entity = entity.settings;
            entity = entity.userContent;
            golfie = null;
            tangon = golfie == entity;
            report = undefined;
            if(tangon) { _fun00020_ip = 100; continue _fun00019 }
 75:
            entity = entity.recurringDismissibleContentStates;
            entity = entity[zuuluu];
            zuuluu = golfie == entity;
            report = undefined;
            if(zuuluu) { _fun00020_ip = 100; continue _fun00019 }
 94:
            report = entity.lastDismissedAtMs;
 100:
            entity = golfie != report;
            zuuluu = undefined;
            if(!entity) { _fun00020_ip = 170; continue _fun00019 }
 109:
            entity = '0';
            zuuluu = undefined;
            if(!(entity !== report)) { _fun00020_ip = 170; continue _fun00019 }
 121:
            tangon = global;
            verify = tangon.Number;
            oscard = verify.isNaN;
            entity = tangon.Number;
            entity = entity.bind(michal)(report);
            oscard = oscard.bind(verify)(entity);
            entity = undefined;
            if(oscard) { _fun00020_ip = 167; continue _fun00019 }
 156:
            tangon = tangon.Number;
            entity = tangon.bind(michal)(report);
 167:
            zuuluu = entity;
 170:
            if(!(michal !== zuuluu)) { _fun00020_ip = 276; continue _fun00019 }
 174:
            entity = golfie != option;
            tangon = true;
            if(!entity) { _fun00020_ip = 262; continue _fun00019 }
 183:
            entity = option.cooldownDurationMs;
            oscard = zuuluu + entity;
            entity = global;
            report = entity.Date;
            entity = report.now;
            entity = entity.bind(report)();
            report = option.showAfterTimestamp;
            report = golfie == report;
            if(report) { _fun00020_ip = 249; continue _fun00019 }
 223:
            golfie = option.showAfterTimestamp;
            golfie = entity >= golfie;
            if(!golfie) { _fun00020_ip = 246; continue _fun00019 }
 236:
            option = option.showAfterTimestamp;
            golfie = zuuluu <= option;
 246:
            report = golfie;
 249:
            entity = entity < oscard;
            if(entity) { _fun00020_ip = 259; continue _fun00019 }
 256:
            entity = !report;
 259:
            tangon = entity;
 262:
            entity = {};
            entity['isDismissed'] = tangon;
            entity['lastDismissedAtMs'] = zuuluu;
            return entity;
 276:
            entity = {};
            zuuluu = false;
            entity['isDismissed'] = zuuluu;
            entity['lastDismissedAtMs'] = michal;
            return entity;
 292:
            entity = {'isDismissed': true, 'lastDismissedAtMs': null};
            return entity;
        }
    };
    zuuluu['isTimeRecurringDismissibleContentDismissed'] = report;
    report = function(argFoo, argBar) { // Original name: isSnowflakeBoundDismissibleContentDismissed
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            report = argFoo;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 8;
            entity = zuuluu[entity];
            oscard = undefined;
            michal = michal.bind(oscard)(entity);
            entity = michal.disableNewUserDismissibleContent;
            entity = entity.bind(michal)(report);
            if(entity) { _fun00022_ip = 157; continue _fun00021 }
 42:
            entity = _closure1_slot5;
            entity = entity.settings;
            entity = entity.userContent;
            zuuluu = null;
            golfie = zuuluu == entity;
            michal = undefined;
            if(golfie) { _fun00022_ip = 94; continue _fun00021 }
 69:
            entity = entity.recurringDismissibleContentStates;
            entity = entity[report];
            report = zuuluu == entity;
            michal = undefined;
            if(report) { _fun00022_ip = 94; continue _fun00021 }
 88:
            michal = entity.lastDismissedObjectId;
 94:
            entity = {};
            zuuluu = zuuluu != michal;
            if(!zuuluu) { _fun00022_ip = 145; continue _fun00021 }
 103:
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 12;
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
    zuuluu['isSnowflakeBoundDismissibleContentDismissed'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: isTimeRecurringSnowflakeBoundDismissibleContentDismissed
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            tangon = argFoo;
            offset = argBaz;
            michal = _closure1_slot0;
            report = _closure1_slot2;
            entity = 8;
            entity = report[entity];
            report = undefined;
            michal = michal.bind(report)(entity);
            entity = michal.disableNewUserDismissibleContent;
            entity = entity.bind(michal)(tangon);
            if(entity) { _fun00024_ip = 374; continue _fun00023 }
 48:
            entity = _closure1_slot5;
            entity = entity.settings;
            entity = entity.userContent;
            michal = null;
            golfie = michal == entity;
            oscard = undefined;
            if(golfie) { _fun00024_ip = 100; continue _fun00023 }
 75:
            entity = entity.recurringDismissibleContentStates;
            entity = entity[tangon];
            golfie = michal == entity;
            oscard = undefined;
            if(golfie) { _fun00024_ip = 100; continue _fun00023 }
 94:
            oscard = entity.lastDismissedObjectId;
 100:
            entity = _closure1_slot5;
            entity = entity.settings;
            entity = entity.userContent;
            option = michal == entity;
            golfie = undefined;
            if(option) { _fun00024_ip = 150; continue _fun00023 }
 125:
            entity = entity.recurringDismissibleContentStates;
            entity = entity[tangon];
            tangon = michal == entity;
            golfie = undefined;
            if(tangon) { _fun00024_ip = 150; continue _fun00023 }
 144:
            golfie = entity.lastDismissedAtMs;
 150:
            entity = michal != golfie;
            yankee = undefined;
            if(!entity) { _fun00024_ip = 220; continue _fun00023 }
 159:
            entity = '0';
            yankee = undefined;
            if(!(entity !== golfie)) { _fun00024_ip = 220; continue _fun00023 }
 171:
            tangon = global;
            verify = tangon.Number;
            option = verify.isNaN;
            entity = tangon.Number;
            entity = entity.bind(report)(golfie);
            option = option.bind(verify)(entity);
            entity = undefined;
            if(option) { _fun00024_ip = 217; continue _fun00023 }
 206:
            tangon = tangon.Number;
            entity = tangon.bind(report)(golfie);
 217:
            yankee = entity;
 220:
            tangon = michal != offset;
            entity = false;
            if(!tangon) { _fun00024_ip = 317; continue _fun00023 }
 229:
            tangon = michal != yankee;
            entity = false;
            if(!tangon) { _fun00024_ip = 317; continue _fun00023 }
 238:
            tangon = offset.cooldownDurationMs;
            option = yankee + tangon;
            tangon = global;
            golfie = tangon.Date;
            tangon = golfie.now;
            tangon = tangon.bind(golfie)();
            golfie = offset.showAfterTimestamp;
            golfie = michal == golfie;
            if(golfie) { _fun00024_ip = 304; continue _fun00023 }
 278:
            verify = offset.showAfterTimestamp;
            verify = tangon >= verify;
            if(!verify) { _fun00024_ip = 301; continue _fun00023 }
 291:
            offset = offset.showAfterTimestamp;
            verify = yankee <= offset;
 301:
            golfie = verify;
 304:
            tangon = tangon < option;
            if(tangon) { _fun00024_ip = 314; continue _fun00023 }
 311:
            tangon = !golfie;
 314:
            entity = tangon;
 317:
            michal = michal != oscard;
            if(!michal) { _fun00024_ip = 366; continue _fun00023 }
 324:
            tangon = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 12;
            zuuluu = golfie[zuuluu];
            report = tangon.bind(report)(zuuluu);
            tangon = report.compare;
            zuuluu = argBar;
            tangon = tangon.bind(report)(zuuluu, oscard);
            zuuluu = 1;
            michal = zuuluu !== tangon;
 366:
            if(!entity) { _fun00024_ip = 372; continue _fun00023 }
 369:
            entity = michal;
 372:
            return entity;
 374:
            entity = true;
            return entity;
        }
    };
    zuuluu['isTimeRecurringSnowflakeBoundDismissibleContentDismissed'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: requestMarkDismissibleContentAsShown
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            report = argFoo;
            oscard = argBar;
            golfie = argBaz;
            var _closure2_slot0 = report;
            var _closure2_slot1 = oscard;
            zuuluu = _closure1_slot10;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(report);
            if(zuuluu) { _fun00026_ip = 51; continue _fun00025 }
 36:
            verify = _closure1_slot7;
            option = verify.hasUserHitDCCap;
            zuuluu = option.bind(verify)(report);
 51:
            if(zuuluu) { _fun00026_ip = 57; continue _fun00025 }
 54:
            zuuluu = golfie;
 57:
            if(zuuluu) { _fun00026_ip = 169; continue _fun00025 }
 60:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 13;
            zuuluu = option[zuuluu];
            option = golfie.bind(entity)(zuuluu);
            golfie = option.dispatch;
            zuuluu = {};
            verify = 'DCF_EVENT_LOGGED';
            zuuluu['type'] = verify;
            verify = _closure1_slot6;
            verify = verify.DC_SHOW_REQUEST;
            zuuluu['eventType'] = verify;
            zuuluu['dismissibleContent'] = report;
            zuuluu = golfie.bind(option)(zuuluu);
            zuuluu = _closure1_slot8;
            michal = {};
            michal['content'] = report;
            report = null;
            golfie = report == oscard;
            report = undefined;
            if(golfie) { _fun00026_ip = 149; continue _fun00025 }
 143:
            report = oscard.groupName;
 149:
            michal['groupName'] = report;
            tangon = function() { // Original name: onAdded
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    michal = _closure1_slot11;
                    entity = undefined;
                    tangon = michal.bind(entity)();
                    zuuluu = _closure1_slot4;
                    michal = 2;
                    zuuluu = zuuluu.bind(entity)(tangon, michal);
                    michal = 0;
                    verify = zuuluu[michal];
                    michal = 1;
                    report = zuuluu[michal];
                    romeon = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    michal = 14;
                    michal = foxtra[michal];
                    tangon = romeon.bind(entity)(michal);
                    zuuluu = tangon.handleDCShownToUser;
                    yankee = _closure2_slot0;
                    zuuluu = zuuluu.bind(tangon)(yankee);
                    tangon = _closure1_slot1;
                    zuuluu = 15;
                    zuuluu = foxtra[zuuluu];
                    golfie = tangon.bind(entity)(zuuluu);
                    oscard = golfie.track;
                    zuuluu = _closure1_slot13;
                    tangon = zuuluu.DISMISSIBLE_CONTENT_SHOWN;
                    zuuluu = {};
                    offset = 16;
                    offset = foxtra[offset];
                    offset = romeon.bind(entity)(offset);
                    offset = offset.DismissibleContent;
                    offset = offset[yankee];
                    zuuluu['type'] = offset;
                    zuuluu['content_count'] = verify;
                    zuuluu['fatigable_content_count'] = report;
                    verify = _closure2_slot1;
                    report = null;
                    offset = report == verify;
                    verify = undefined;
                    if(offset) { _fun00028_ip = 173; continue _fun00027 }
 163:
                    offset = _closure2_slot1;
                    verify = offset.groupName;
 173:
                    zuuluu['group_name'] = verify;
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    option = 17;
                    option = offset[option];
                    option = verify.bind(entity)(option);
                    offset = option.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
                    verify = offset.has;
                    option = _closure2_slot0;
                    option = verify.bind(offset)(option);
                    zuuluu['bypass_fatigue'] = option;
                    option = _closure2_slot1;
                    verify = report == option;
                    option = undefined;
                    if(verify) { _fun00028_ip = 245; continue _fun00027 }
 236:
                    verify = _closure2_slot1;
                    option = verify.guildId;
 245:
                    zuuluu['guild_id'] = option;
                    option = _closure2_slot1;
                    verify = report == option;
                    option = undefined;
                    if(verify) { _fun00028_ip = 272; continue _fun00027 }
 262:
                    verify = _closure2_slot1;
                    option = verify.version;
 272:
                    zuuluu['version'] = option;
                    zuuluu = oscard.bind(golfie)(tangon, zuuluu);
                    zuuluu = _closure2_slot1;
                    zuuluu = report == zuuluu;
                    if(zuuluu) { _fun00028_ip = 308; continue _fun00027 }
 294:
                    tangon = _closure2_slot1;
                    tangon = tangon.onShown;
                    zuuluu = report == tangon;
 308:
                    if(zuuluu) { _fun00028_ip = 325; continue _fun00027 }
 311:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.onShown;
                    michal = michal.bind(zuuluu)();
 325:
                    return entity;
                }
            };
            michal['onAdded'] = tangon;
            michal = zuuluu.bind(entity)(michal);
 169:
            return entity;
        }
    };
    zuuluu['requestMarkDismissibleContentAsShown'] = report;
    report = function() { // Original name: markDismissibleContentAsDismissed
        entity = undefined;
        tangon = _closure1_slot17;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['markDismissibleContentAsDismissed'] = report;
    report = function() { // Original name: markVersionedDismissibleContentAsDismissed
        entity = undefined;
        tangon = _closure1_slot18;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['markVersionedDismissibleContentAsDismissed'] = report;
    report = function() { // Original name: markSnowflakeBoundDismissibleContentAsDismissed
        entity = undefined;
        tangon = _closure1_slot19;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['markSnowflakeBoundDismissibleContentAsDismissed'] = report;
    tangon = function() { // Original name: markTimeRecurringDismissibleContentAsDismissed
        entity = undefined;
        tangon = _closure1_slot20;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['markTimeRecurringDismissibleContentAsDismissed'] = tangon;
    zuuluu['trackDismissibleContentDismissed'] = michal;
    return entity;
})();
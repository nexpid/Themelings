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
            zuuluu = _closure1_slot20;
            zuuluu = zuuluu.bind(entity)(tangon, report);
 48:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 13;
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
                    tangon = 17;
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
                    zuuluu = 17;
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
    entity = function() { // Original name: _markTimeRecurringDismissibleContentAsDismissed
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    oscard = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00012_ip = 104; continue _fun00011 }
 13:
                    tangon = undefined;
                    if(!(oscard === tangon)) { _fun00012_ip = 21; continue _fun00011 }
 19:
                    oscard = {};
 21:
                    SaveGenerator(address=25);
 23:
                    return tangon;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00012_ip = 101; continue _fun00011 }
 31:
                    zuuluu = _closure1_slot15;
                    zuuluu = zuuluu.bind(tangon)(golfie, oscard);
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 17;
                    zuuluu = verify[zuuluu];
                    option = option.bind(tangon)(zuuluu);
                    zuuluu = option.addTimeRecurringDismissedContent;
                    zuuluu = zuuluu.bind(option)(golfie);
                    SaveGenerator(address=79);
 77:
                    return zuuluu;
 79:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(option) { _fun00012_ip = 98; continue _fun00011 }
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
        _closure1_slot19 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot19 = entity;
    michal = function(argFoo, argBar) { // Original name: trackDismissibleContentDismissed
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
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
            if(michal) { _fun00014_ip = 106; continue _fun00013 }
 92:
            michal = tangon.getTime;
            michal = michal.bind(tangon)();
            option = michal - zuuluu;
 106:
            zuuluu = _closure1_slot1;
            backup = _closure1_slot2;
            michal = 14;
            michal = backup[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            michal = _closure1_slot13;
            zuuluu = michal.DISMISSIBLE_CONTENT_DISMISSED;
            michal = {};
            foxtra = _closure1_slot0;
            romeon = 15;
            romeon = backup[romeon];
            romeon = foxtra.bind(entity)(romeon);
            romeon = romeon.DismissibleContent;
            romeon = romeon[yankee];
            michal['type'] = romeon;
            foxtra = oscard == golfie;
            romeon = undefined;
            if(foxtra) { _fun00014_ip = 188; continue _fun00013 }
 182:
            romeon = golfie.dismissAction;
 188:
            if(!(oscard == romeon)) { _fun00014_ip = 202; continue _fun00013 }
 192:
            foxtra = _closure1_slot12;
            romeon = foxtra.UNKNOWN;
 202:
            michal['action'] = romeon;
            michal['content_count'] = offset;
            romeon = oscard == golfie;
            offset = undefined;
            if(romeon) { _fun00014_ip = 226; continue _fun00013 }
 220:
            offset = golfie.groupName;
 226:
            michal['group_name'] = offset;
            offset = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 16;
            verify = romeon[verify];
            verify = offset.bind(entity)(verify);
            offset = verify.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
            verify = offset.has;
            verify = verify.bind(offset)(yankee);
            michal['bypass_fatigue'] = verify;
            offset = oscard == golfie;
            verify = undefined;
            if(offset) { _fun00014_ip = 286; continue _fun00013 }
 281:
            verify = golfie.guildId;
 286:
            michal['guild_id'] = verify;
            michal['shown_duration'] = option;
            option = oscard == golfie;
            oscard = undefined;
            if(option) { _fun00014_ip = 310; continue _fun00013 }
 304:
            oscard = golfie.version;
 310:
            michal['version'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot20 = michal;
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
    oscard = 18;
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
    report = function(argFoo) { // Original name: isVersionedDismissibleContentDismissed
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 8;
            michal = tangon[michal];
            oscard = undefined;
            zuuluu = zuuluu.bind(oscard)(michal);
            michal = zuuluu.disableNewUserDismissibleContent;
            michal = michal.bind(zuuluu)(report);
            if(michal) { _fun00016_ip = 150; continue _fun00015 }
 42:
            michal = _closure1_slot5;
            michal = michal.settings;
            tangon = michal.userContent;
            zuuluu = null;
            golfie = zuuluu == tangon;
            michal = undefined;
            if(golfie) { _fun00016_ip = 94; continue _fun00015 }
 69:
            tangon = tangon.recurringDismissibleContentStates;
            tangon = tangon[report];
            golfie = zuuluu == tangon;
            michal = undefined;
            if(golfie) { _fun00016_ip = 94; continue _fun00015 }
 88:
            michal = tangon.lastDismissedVersion;
 94:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 11;
            entity = golfie[entity];
            tangon = tangon.bind(oscard)(entity);
            entity = tangon.getVersionedDismissibleContentCurrentVersion;
            tangon = entity.bind(tangon)(report);
            entity = {};
            zuuluu = zuuluu != michal;
            if(!zuuluu) { _fun00016_ip = 138; continue _fun00015 }
 134:
            zuuluu = michal >= tangon;
 138:
            entity['isDismissed'] = zuuluu;
            entity['lastDismissedVersion'] = michal;
            return entity;
 150:
            entity = {'isDismissed': true, 'lastDismissedVersion': null};
            return entity;
        }
    };
    zuuluu['isVersionedDismissibleContentDismissed'] = report;
    report = function(argFoo, argBar) { // Original name: isTimeRecurringDismissibleContentDismissed
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
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
            if(tangon) { _fun00018_ip = 292; continue _fun00017 }
 48:
            entity = _closure1_slot5;
            entity = entity.settings;
            entity = entity.userContent;
            golfie = null;
            tangon = golfie == entity;
            report = undefined;
            if(tangon) { _fun00018_ip = 100; continue _fun00017 }
 75:
            entity = entity.recurringDismissibleContentStates;
            entity = entity[zuuluu];
            zuuluu = golfie == entity;
            report = undefined;
            if(zuuluu) { _fun00018_ip = 100; continue _fun00017 }
 94:
            report = entity.lastDismissedAtMs;
 100:
            entity = golfie != report;
            zuuluu = undefined;
            if(!entity) { _fun00018_ip = 170; continue _fun00017 }
 109:
            entity = '0';
            zuuluu = undefined;
            if(!(entity !== report)) { _fun00018_ip = 170; continue _fun00017 }
 121:
            tangon = global;
            verify = tangon.Number;
            oscard = verify.isNaN;
            entity = tangon.Number;
            entity = entity.bind(michal)(report);
            oscard = oscard.bind(verify)(entity);
            entity = undefined;
            if(oscard) { _fun00018_ip = 167; continue _fun00017 }
 156:
            tangon = tangon.Number;
            entity = tangon.bind(michal)(report);
 167:
            zuuluu = entity;
 170:
            if(!(michal !== zuuluu)) { _fun00018_ip = 276; continue _fun00017 }
 174:
            entity = golfie != option;
            tangon = true;
            if(!entity) { _fun00018_ip = 262; continue _fun00017 }
 183:
            entity = option.cooldownDurationMs;
            oscard = zuuluu + entity;
            entity = global;
            report = entity.Date;
            entity = report.now;
            entity = entity.bind(report)();
            report = option.showAfterTimestamp;
            report = golfie == report;
            if(report) { _fun00018_ip = 249; continue _fun00017 }
 223:
            golfie = option.showAfterTimestamp;
            golfie = entity >= golfie;
            if(!golfie) { _fun00018_ip = 246; continue _fun00017 }
 236:
            option = option.showAfterTimestamp;
            golfie = zuuluu <= option;
 246:
            report = golfie;
 249:
            entity = entity < oscard;
            if(entity) { _fun00018_ip = 259; continue _fun00017 }
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
    report = function(argFoo, argBar, argBaz) { // Original name: requestMarkDismissibleContentAsShown
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            report = argFoo;
            oscard = argBar;
            golfie = argBaz;
            var _closure2_slot0 = report;
            var _closure2_slot1 = oscard;
            zuuluu = _closure1_slot10;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(report);
            if(zuuluu) { _fun00020_ip = 51; continue _fun00019 }
 36:
            verify = _closure1_slot7;
            option = verify.hasUserHitDCCap;
            zuuluu = option.bind(verify)(report);
 51:
            if(zuuluu) { _fun00020_ip = 57; continue _fun00019 }
 54:
            zuuluu = golfie;
 57:
            if(zuuluu) { _fun00020_ip = 167; continue _fun00019 }
 60:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 12;
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
            if(golfie) { _fun00020_ip = 147; continue _fun00019 }
 141:
            report = oscard.groupName;
 147:
            michal['groupName'] = report;
            tangon = function() { // Original name: onAdded
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
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
                    michal = 13;
                    michal = foxtra[michal];
                    tangon = romeon.bind(entity)(michal);
                    zuuluu = tangon.handleDCShownToUser;
                    yankee = _closure2_slot0;
                    zuuluu = zuuluu.bind(tangon)(yankee);
                    tangon = _closure1_slot1;
                    zuuluu = 14;
                    zuuluu = foxtra[zuuluu];
                    golfie = tangon.bind(entity)(zuuluu);
                    oscard = golfie.track;
                    zuuluu = _closure1_slot13;
                    tangon = zuuluu.DISMISSIBLE_CONTENT_SHOWN;
                    zuuluu = {};
                    offset = 15;
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
                    if(offset) { _fun00022_ip = 171; continue _fun00021 }
 161:
                    offset = _closure2_slot1;
                    verify = offset.groupName;
 171:
                    zuuluu['group_name'] = verify;
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    option = 16;
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
                    if(verify) { _fun00022_ip = 243; continue _fun00021 }
 234:
                    verify = _closure2_slot1;
                    option = verify.guildId;
 243:
                    zuuluu['guild_id'] = option;
                    option = _closure2_slot1;
                    verify = report == option;
                    option = undefined;
                    if(verify) { _fun00022_ip = 270; continue _fun00021 }
 260:
                    verify = _closure2_slot1;
                    option = verify.version;
 270:
                    zuuluu['version'] = option;
                    zuuluu = oscard.bind(golfie)(tangon, zuuluu);
                    zuuluu = _closure2_slot1;
                    zuuluu = report == zuuluu;
                    if(zuuluu) { _fun00022_ip = 306; continue _fun00021 }
 292:
                    tangon = _closure2_slot1;
                    tangon = tangon.onShown;
                    zuuluu = report == tangon;
 306:
                    if(zuuluu) { _fun00022_ip = 323; continue _fun00021 }
 309:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.onShown;
                    michal = michal.bind(zuuluu)();
 323:
                    return entity;
                }
            };
            michal['onAdded'] = tangon;
            michal = zuuluu.bind(entity)(michal);
 167:
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
    tangon = function() { // Original name: markTimeRecurringDismissibleContentAsDismissed
        entity = undefined;
        tangon = _closure1_slot19;
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